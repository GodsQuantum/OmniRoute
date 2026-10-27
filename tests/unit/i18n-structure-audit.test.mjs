import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const SCRIPT = fileURLToPath(new URL("../../scripts/i18n/audit-all.py", import.meta.url));
const REL = "docs/architecture/QUALITY_GATES.md";

function audit(t, source, mirror, { defaultOutput = false } = {}) {
  const dir = mkdtempSync(path.join(os.tmpdir(), "omniroute-i18n-audit-"));
  t.after(() => rmSync(dir, { recursive: true, force: true }));
  const output = defaultOutput ? path.join(dir, "_artifacts/i18n-waves") : path.join(dir, "output");
  const sourcePath = path.join(dir, REL);
  const mirrorPath = path.join(dir, "docs/i18n/bs", REL);
  for (const parent of [output, path.dirname(sourcePath), path.dirname(mirrorPath)]) {
    mkdirSync(parent, { recursive: true });
  }
  writeFileSync(sourcePath, source);
  if (mirror !== null) writeFileSync(mirrorPath, mirror);
  writeFileSync(
    path.join(dir, ".i18n-state.json"),
    JSON.stringify({ sources: { [REL]: { locales: { bs: {} } } } })
  );
  const result = spawnSync("python3", ["-I", SCRIPT], {
    cwd: dir,
    encoding: "utf8",
    env: {
      PATH: process.env.PATH,
      LANG: "C.UTF-8",
      ...(defaultOutput ? {} : { I18N_OUT: output }),
    },
  });
  assert.ifError(result.error);
  assert.equal(result.signal, null, result.stderr);
  assert.equal(result.status, 0, result.stderr);
  return {
    findings: JSON.parse(readFileSync(path.join(output, "audit_all.json"), "utf8")),
    stdout: result.stdout,
  };
}

const SOURCE =
  "---\ntitle: Quality Gates Reference\n---\n\n# Quality Gates Reference\n\nThis document describes quality checks.\n\n## Inventory\n\nRun the checks.";
const PREFIX =
  "# Quality Gates Reference (Bosanski)\n\n🌐 **Languages:** [English](../source.md) · [bs](./source.md)\n\n---\n\n";
const TRANSLATED_BODY =
  "Ovaj dokument opisuje provjere kvaliteta.\n\n## Inventar\n\nPokrenite provjere.";

test("reports the duplicated body H1 from the Bosnian quality-gates mirror", (t) => {
  const result = audit(t, SOURCE, PREFIX + "# Referenca za Quality Gates\n\n" + TRANSLATED_BODY);
  assert.equal(result.findings.length, 1);
  assert.deepEqual(result.findings[0].slice(0, 2), [REL, "bs"]);
  assert.match(result.findings[0][2], /heading/);
  assert.match(result.stdout, /mirrors with structural mismatch: 1/);
});

test("accepts translated headings after the generated title and navigation", (t) => {
  assert.deepEqual(audit(t, SOURCE, PREFIX + TRANSLATED_BODY).findings, []);
});

test("the canonical CLI defaults to the audited checkout's artifact directory", (t) => {
  assert.deepEqual(
    audit(t, SOURCE, PREFIX + TRANSLATED_BODY, { defaultOutput: true }).findings,
    []
  );
});

test("allows blank lines before a generated mirror header without dropping body indentation", (t) => {
  const source = "\n\n# Example\n\n    # Example comment\n    npm ci";
  const mirror = "\n\n" + PREFIX + "    ### Prevedeni komentar\n    npm ci";
  assert.deepEqual(audit(t, source, mirror).findings, []);
});

for (const [name, body, expected] of [
  ["missing heading", "Configurar\n\n### Instalar\n\n## Verificar", "headings [3, 2]/[2, 3, 2]"],
  [
    "promoted heading",
    "## Configurar\n\n# Instalar\n\n## Verificar",
    "headings [2, 1, 2]/[2, 3, 2]",
  ],
  [
    "reordered levels",
    "### Instalar\n\n## Configurar\n\n## Verificar",
    "headings [3, 2, 2]/[2, 3, 2]",
  ],
]) {
  test(`reports ${name} with the target/source level sequences`, (t) => {
    const source = "# Guide\n\n## Setup\n\n### Install\n\n## Verify";
    assert.deepEqual(audit(t, source, PREFIX + body).findings, [[REL, "bs", expected]]);
  });
}

for (const [name, source, translated] of [
  ["source without H1", "Introduction.\n\n## Inventory", "Uvod.\n\n## Inventar"],
  ["source without any heading", "Introduction.", "Uvod."],
  [
    "frontmatter without a source H1",
    "---\n# YAML comment, not a heading\ntitle: Guide\n---\n\n## Inventory",
    "## Inventar",
  ],
  [
    "frontmatter and an indented code example",
    "---\ntitle: Guide\n---\n\n    # Comment\n    npm ci",
    "    ### Komentar\n    npm ci",
  ],
  [
    "H1 after an introduction",
    "Introduction.\n\n# Body heading\n\n## Setup",
    "Uvod.\n\n# Naslov tijela\n\n## Postavljanje",
  ],
  [
    "all six ATX levels",
    "# Title\n\n# One\n\n## Two\n\n### Three\n\n#### Four\n\n##### Five\n\n###### Six",
    " # Jedan\n\n  ## Dva ##\n\n   ### Tri\n\n####\tČetiri\n\n#####\n\n###### Šest",
  ],
  [
    "inline examples, escaped hashes and indentation",
    "## Examples\n\n`# literal` and ``## literal``.\n\n\\# Escaped\n\n    # Code\n\t## Code\n\n####### Text\n#NoSpace",
    "## Primjeri\n\n`# literal` i ``## literal``.\n\n\\### Escaped\n\n    ### Code\n\t# Code\n\n####### Tekst\n#BezRazmaka",
  ],
]) {
  test(`accepts a translated ${name}`, (t) => {
    assert.deepEqual(audit(t, source, PREFIX + translated).findings, []);
  });
}

test("does not discard a missing legitimate H1 after the source introduction", (t) => {
  const source = "Introduction.\n\n# Body heading\n\n## Setup";
  const translated = "Uvod.\n\nNaslov tijela\n\n## Postavljanje";
  assert.deepEqual(audit(t, source, PREFIX + translated).findings, [
    [REL, "bs", "headings [2]/[1, 2]"],
  ]);
});

test("does not treat an ordinary document separator as a generated header", (t) => {
  const source = "Introduction.\n\n## Before\n\n---\n\n# Later title";
  const translated = "Uvod.\n\n## Prije\n\n---\n\n# Kasniji naslov";
  assert.deepEqual(audit(t, source, translated).findings, []);
});

test("accepts a legacy generated title and separator without navigation", (t) => {
  assert.deepEqual(audit(t, SOURCE, "# Naslov\n\n---\n\n" + TRANSLATED_BODY).findings, []);
});

test("ignores a generated navigation bar longer than the old header cutoff", (t) => {
  const navigation = "# Naslov\n\n🌐 Jezici: " + "[bs](./source.md) · ".repeat(250) + "\n\n---\n\n";
  assert.deepEqual(audit(t, SOURCE, navigation + TRANSLATED_BODY).findings, []);
});

test("reads CRLF frontmatter, title, navigation and headings consistently", (t) => {
  assert.deepEqual(
    audit(t, SOURCE.replaceAll("\n", "\r\n"), (PREFIX + TRANSLATED_BODY).replaceAll("\n", "\r\n"))
      .findings,
    []
  );
});

for (const [name, code] of [
  ["backticks", "```md\n# Example\n```"],
  ["tildes", "~~~md\n# Example\n~~~"],
  ["a longer closing delimiter", "```md\n# Example\n`````"],
  ["a shorter nested delimiter", "````md\n```\n# Example\n````"],
  ["a different nested delimiter", "```md\n~~~\n# Example\n```"],
  ["an invalid closing info string", "~~~md\n~~~still-code\n# Example\n~~~"],
  ["three-space indentation", "   ~~~~md\n   ~~~\n# Example\n   ~~~~"],
  ["an unclosed fence", "~~~md\n# Example"],
]) {
  test(`ignores heading-shaped code inside ${name}`, (t) => {
    const source = "# Guide\n\n## Examples\n\n" + code;
    const translated = "## Primjeri\n\n" + code.replace("# Example", "### Primjer\n# Još jedan");
    assert.deepEqual(audit(t, source, PREFIX + translated).findings, []);
  });
}

test("detects a changed heading after a matching long fence closes", (t) => {
  const source = "# Guide\n\n## Examples\n\n~~~~md\n# Code\n~~~~~\n\n### Continue";
  const translated = "## Primjeri\n\n~~~~md\n# Code\n~~~~~\n\n#### Nastaviti";
  assert.deepEqual(audit(t, source, PREFIX + translated).findings, [
    [REL, "bs", "headings [2, 4]/[2, 3]"],
  ]);
});

test("preserves the missing-mirror JSON tuple and diagnostic exit status", (t) => {
  assert.deepEqual(audit(t, SOURCE, null).findings, [[REL, "bs", "missing"]]);
});

test("preserves the existing three-row tolerance", (t) => {
  const source = "# Table\n\n## Data\n\n| a |\n| b |\n| c |\n| d |\n| e |";
  assert.deepEqual(audit(t, source, PREFIX + "## Podaci\n\n| a |\n| b |").findings, []);
  assert.deepEqual(audit(t, source, PREFIX + "## Podaci\n\n| a |").findings, [
    [REL, "bs", "rows 1/5"],
  ]);
});

test("preserves the existing backtick fence-count diagnostic", (t) => {
  const source = "# Guide\n\n## Code\n\n```js\nconst value = 1;\n```";
  assert.deepEqual(audit(t, source, PREFIX + "## Kod\n\nconst value = 1;").findings, [
    [REL, "bs", "fences 0/2"],
  ]);
});

test("does not introduce a new tilde fence-count rule", (t) => {
  const source = "# Guide\n\n## Code\n\n~~~js\nconst value = 1;\n~~~";
  assert.deepEqual(audit(t, source, PREFIX + "## Kod\n\nconst value = 1;").findings, []);
});
