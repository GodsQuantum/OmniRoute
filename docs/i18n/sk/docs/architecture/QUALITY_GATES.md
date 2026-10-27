# Quality Gates Reference (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/QUALITY_GATES.md) · 🇪🇹 [am](../../../am/docs/architecture/QUALITY_GATES.md) · 🇸🇦 [ar](../../../ar/docs/architecture/QUALITY_GATES.md) · 🇦🇿 [az](../../../az/docs/architecture/QUALITY_GATES.md) · 🇧🇬 [bg](../../../bg/docs/architecture/QUALITY_GATES.md) · 🇧🇩 [bn](../../../bn/docs/architecture/QUALITY_GATES.md) · 🇧🇦 [bs](../../../bs/docs/architecture/QUALITY_GATES.md) · 🇨🇿 [cs](../../../cs/docs/architecture/QUALITY_GATES.md) · 🇩🇰 [da](../../../da/docs/architecture/QUALITY_GATES.md) · 🇩🇪 [de](../../../de/docs/architecture/QUALITY_GATES.md) · 🇬🇷 [el](../../../el/docs/architecture/QUALITY_GATES.md) · 🇪🇸 [es](../../../es/docs/architecture/QUALITY_GATES.md) · 🇪🇪 [et](../../../et/docs/architecture/QUALITY_GATES.md) · 🇮🇷 [fa](../../../fa/docs/architecture/QUALITY_GATES.md) · 🇫🇮 [fi](../../../fi/docs/architecture/QUALITY_GATES.md) · 🇫🇷 [fr](../../../fr/docs/architecture/QUALITY_GATES.md) · 🇮🇪 [ga](../../../ga/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [gu](../../../gu/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ha](../../../ha/docs/architecture/QUALITY_GATES.md) · 🇮🇱 [he](../../../he/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [hi](../../../hi/docs/architecture/QUALITY_GATES.md) · 🇭🇷 [hr](../../../hr/docs/architecture/QUALITY_GATES.md) · 🇭🇺 [hu](../../../hu/docs/architecture/QUALITY_GATES.md) · 🇦🇲 [hy](../../../hy/docs/architecture/QUALITY_GATES.md) · 🇮🇩 [id](../../../id/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ig](../../../ig/docs/architecture/QUALITY_GATES.md) · 🇮🇹 [it](../../../it/docs/architecture/QUALITY_GATES.md) · 🇯🇵 [ja](../../../ja/docs/architecture/QUALITY_GATES.md) · 🇬🇪 [ka](../../../ka/docs/architecture/QUALITY_GATES.md) · 🇰🇭 [km](../../../km/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [kn](../../../kn/docs/architecture/QUALITY_GATES.md) · 🇰🇷 [ko](../../../ko/docs/architecture/QUALITY_GATES.md) · 🇱🇹 [lt](../../../lt/docs/architecture/QUALITY_GATES.md) · 🇱🇻 [lv](../../../lv/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ml](../../../ml/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [mr](../../../mr/docs/architecture/QUALITY_GATES.md) · 🇲🇾 [ms](../../../ms/docs/architecture/QUALITY_GATES.md) · 🇲🇹 [mt](../../../mt/docs/architecture/QUALITY_GATES.md) · 🇲🇲 [my](../../../my/docs/architecture/QUALITY_GATES.md) · 🇳🇵 [ne](../../../ne/docs/architecture/QUALITY_GATES.md) · 🇳🇱 [nl](../../../nl/docs/architecture/QUALITY_GATES.md) · 🇳🇴 [no](../../../no/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [or](../../../or/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [pa](../../../pa/docs/architecture/QUALITY_GATES.md) · 🇵🇭 [phi](../../../phi/docs/architecture/QUALITY_GATES.md) · 🇵🇱 [pl](../../../pl/docs/architecture/QUALITY_GATES.md) · 🇵🇹 [pt](../../../pt/docs/architecture/QUALITY_GATES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/QUALITY_GATES.md) · 🇷🇴 [ro](../../../ro/docs/architecture/QUALITY_GATES.md) · 🇷🇺 [ru](../../../ru/docs/architecture/QUALITY_GATES.md) · 🇱🇰 [si](../../../si/docs/architecture/QUALITY_GATES.md) · 🇸🇮 [sl](../../../sl/docs/architecture/QUALITY_GATES.md) · 🇷🇸 [sr](../../../sr/docs/architecture/QUALITY_GATES.md) · 🇸🇪 [sv](../../../sv/docs/architecture/QUALITY_GATES.md) · 🇰🇪 [sw](../../../sw/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ta](../../../ta/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [te](../../../te/docs/architecture/QUALITY_GATES.md) · 🇹🇭 [th](../../../th/docs/architecture/QUALITY_GATES.md) · 🇹🇷 [tr](../../../tr/docs/architecture/QUALITY_GATES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/QUALITY_GATES.md) · 🇵🇰 [ur](../../../ur/docs/architecture/QUALITY_GATES.md) · 🇺🇿 [uz](../../../uz/docs/architecture/QUALITY_GATES.md) · 🇻🇳 [vi](../../../vi/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [yo](../../../yo/docs/architecture/QUALITY_GATES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/QUALITY_GATES.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/QUALITY_GATES.md)

---

Tento dokument je autoritatívnou referenciou pre všetky kvalitatívne brány CI v OmniRoute.
Opisuje každú bránu, čo overuje, v ktorej úlohe CI sa spúšťa, či používa
sprísňujúcu referenčnú hodnotu alebo politiku úspechu/neúspechu a či zostavenie blokuje, alebo má iba poradný charakter.

Stručné zhrnutie a politiku zoznamu povolených výnimiek nájdete v časti „Quality Gates & Ratchets“
v súbore `AGENTS.md`. Kritické posúdenie, klasifikáciu vyspelosti a plán replikácie
rovnakého systému nezávislý od nástrojov nájdete v dokumente
[Príručka ku kvalitatívnym bránam](../ops/QUALITY_GATE_PLAYBOOK.md).

---

## Inventár brán a profily spustenia

### Prijímanie kandidátov

Workflow CI aj Quality Gates vydávajú stabilný verdikt: `Gate / CI` a `Gate / Quality`. Ich verzovaná politika prijímania vymenúva každý upstream job ako povinný alebo poradný. Použiteľný povinný job musí uspieť: chýbajúci, zrušený, preskočený, čakajúci či neznámy výsledok nemôže založiť PASS. Platná klasifikácia docs-only alebo catalog-only môže spôsobiť, že kódová dráha je nepoužiteľná; draft PR nie je prijateľným kandidátom. Štítok `hotfix` neoslobodzuje od dôkazov.

Oba workflow pokrývajú PR do vetiev main/release, pushe do `main`, manuálny dispatch a udalosti merge group. Push, dispatch a merge group spúšťajú plný výber. Pushe do `release/**` ich nespúšťajú (2026-10-18): každá zmena už prebehla maticu vo svojom PR a zlúčená kombinácia je úlohou Release-Green (`docs/ops/RUNNER_BOX.md` → Hosted lane). Forky a merge groups používajú pre joby, ktoré by inak volili self-hosted bežcov, hostovaných bežcov; pred nasadením treba overiť dostatočnú hostovanú kapacitu.

Každé potvrdenie JSON identifikuje checkoutnuté SHA, beh workflow a pokus. CLI odmietne nesúlad SHA medzi checkoutom a udalosťou. Testy workflow viažu členstvo politiky na zoznam `needs` verdiktového jobu, aby nová alebo odobratá dráha nemohla ticho zmiznúť. Potvrdenia pokrývajú vlastný workflow, nie publikáciu, nasadenie ani vnútornosti existujúceho poradného skenera. Aktivácia oboch názvov kontrol v pravidlách vetiev je samostatná administratívna zmena; pridanie týchto jobov samo osebe vetvu nechráni.

### Inventár statického skenu

Verzovaný inventár npm aliasov a členstvo statického skenu sa nachádzajú v `config/quality/gate-manifest.json`. Spustením `npm run check:gate-manifest` overíte názvy skriptov a presné príkazy voči `package.json`; pridania, odobratia a drift príkazov spôsobia zlyhanie lokálneho hooku aj jobov klasifikácie zmien v CI. Alias nie je job workflow, inštancia matice ani testovací prípad: tieto počty sa nesmú prezentovať ako zameniteľné.

Na kontrolu vybraných aliasov bez ich spustenia použite `npm run quality:scan -- --list` alebo `npm run quality:scan:fast -- --list`. Bežec volá vstupný bod npm, takže jeho runtime (vrátane Bun tam, kde je nakonfigurovaný) zostáva zachovaný. Manifest zaznamenáva aliasy mimo týchto profilov ako samostatne volané a údržbové príkazy sú v read-only skenovacích profiloch zakázané.

Tieto profily pokrývajú len statický sken. Necertifikujú produktové testy, pokrytie, balenie, externé kontroly ani úplné release prijatie kandidáta. Prijímanie vo workflow používa odkazované súbory `config/quality/admission-policy.json` a `scripts/quality/admission-verdict.mjs`. Profily release-observer zostávajú oddelené; ich použiteľné kontroly a potvrdenia skúmajte nezávisle. Nižšie uvedený inventár v próze je referencia, nie dôkaz, že brána skutočne bežala.

Skripty sa nachádzajú pod `scripts/check/` (brány politiky) a `scripts/quality/` (ratchet engine). Zdrojom pravdy pre CI je `.github/workflows/ci.yml`.

### Rýchla cesta pre release PR (`quality.yml`)

`.github/workflows/quality.yml` dopĺňa CI pri PR do main/release, pushoch do `main`, dispatchi a merge groups. PR používajú rýchle kontroly filtrované podľa ciest. Trvalo vypnutý duplicitný build bol odstránený; skutočné kontroly build/package/boot zostávajú v CI. Jednotková sada a vitest bežia len v CI (`Unit Tests (N/8)`, `Vitest`): bývalé joby `Unit Tests fast-path` a `Vitest (fast-path)` opakovali tie isté príkazy pri každom PR, odkedy CI začalo bežať aj na release PR, a boli odstránené 2026-10-26.

| Job                                              | Rozsah                                                                                                                                                                                                | Blokujúce           |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| `Docs Gates (fast-path)`                         | PR docs/kód; referencie API docs a docs-all                                                                                                                                                           | Áno                 |
| `Fast Quality Gates`                             | PR s kódom; statické kontroly, typecheck, typecheck dashboardu, dotknuté jednotkové testy                                                                                                             | Áno                 |
| `Forgotten sibling tests`                        | PR s kódom; zmenené moduly trasované na statických konzumentov a kandidátske súrodenecké testy; cesty barrel a dynamic-import sa hlásia ako poradná diagnostika s odkazovanými výnimkami z allowlistu | **Poradný**         |
| `No new ESLint warnings`                         | PR s kódom; lint stráž zohľadňujúca potlačenia (suppressions)                                                                                                                                         | Áno, vrátane forkov |
| `Merge integrity (changelog + generated skills)` | PR, ktoré nie sú draft; synchronizácia changelogu a generovaných skillov                                                                                                                              | Áno, vrátane forkov |

#### Správa Forgotten sibling tests

`npm run check:forgotten-sibling-tests` znovu používa import resolver za mapou dopadov testov. Pre každý zmenený produkčný modul hlási deterministické reťazce `changed module/symbol -> static consumer -> candidate sibling test`, keď kandidátsky test chýba v diffe pull requestu. Súhrn v Markdowne a výsledok JSON sa uchovávajú ako artefakt workflow `forgotten-sibling-tests` na kalibráciu pred akýmkoľvek blokujúcim nasadením.

Barrel re-exporty a dynamické importy slúžia iba ako diagnostika rozlíšenia; nikdy nevytvárajú
blokujúci nález. Preskúmané výnimky sa nachádzajú v
`config/quality/forgotten-sibling-allowlist.json`. Každá položka musí uvádzať konzumenta a kandidátsky
test, poskytovať konkrétne zdôvodnenie a odkazovať na GitHub issue alebo pull request. Chybné položky
zlyhávajú bezpečne (fail-closed). Výnimky nemôžu potlačiť vymazaný kandidátsky test ani diff, ktorý
pridáva `.skip`/`.todo`; oslabovanie asercií a iné maskovanie zostáva vo správe nezávisle blokujúcej
brány `check:test-masking`.

### Úloha: `lint`

Spúšťa sa pri každom PR do `main`. Pri zlyhaní blokuje merge.

| Skript (`npm run ...`)            | Overuje                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Blokuje                                      |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| `check:node-runtime`              | Verzia Node.js je v podporovanom rozsahu                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Áno                                          |
| `check:cycles`                    | Cyklické importy v celom `src/` + `open-sse/` (na báze AST, vyhodnotené tsconfig `paths`). Základný príkaz skončí s kódom 1 vždy, keď existuje akýkoľvek cyklus (fail-closed od #15281), a vypíše silno súvislé komponenty (SCC). `check:cycles:ratchet` (to, čo spúšťa CI) blokuje, keď počet prekročí strop `metrics.cycles` v `quality-baseline.json` — aktuálne 14, `direction: down`, takže môže len klesať (#15159 G-01/G-02)                                                                                                                                                                                                                                                                                                                                                                                                                                           | Áno (ratchet)                                |
| `check:boundary`                  | Previazanosť `open-sse → src`: jedinečné importy súbor-súbor z enginu do aplikácie (`scripts/quality/measure-boundary.mjs`; zoznam hrán je backlog náprav rozdelenia core/modulov vo v4). Základný = informatívna správa (rovnaká ako `quality:boundary`). `check:boundary:ratchet` (to, čo spúšťa CI, tiež v ratchet slučke fast-gates v `quality.yml`) blokuje, keď počet prekročí strop `metrics.boundaryOpenSseToSrc` v `quality-baseline.json` — inicializovaný na nameraných 771, `direction: down`; `--update` ho len znižuje; relatívne voči základni pri PR (`--base-ref`, pozri nižšie)                                                                                                                                                                                                                                                                             | Áno (ratchet)                                |
| `check:route-validation:t06`      | Zod schémy prítomné na všetkých routách (politika Tier 6)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Áno                                          |
| `check:any-budget:t11`            | Počet `@ts-expect-error // any` nepresahuje rozpočet (Tier 11 catraca)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Áno                                          |
| `check:provider-consistency`      | Každý poskytovateľ v `providers.ts` má zodpovedajúci záznam v `providerRegistry.ts` (a naopak, v rámci allowlistu)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Áno                                          |
| `check:model-lifecycle`           | Tri ručne udržiavané smerovacie tabuľky zostávajú konzistentné so snapshotom životného cyklu uloženým v repozitári (#11503): `FITNESS_TABLE` (`taskFitness.ts`) nehodnotí žiadne vyradené id, ktoré `REGISTRY` dokáže smerovať; každý cieľ `BUILT_IN_ALIASES` je prítomný v `REGISTRY` a chýba v snapshot-e vyradených id; každé vyradené id, ktoré je stále v `REGISTRY`, je presmerované alebo uvedené v `allowedRetiredInCatalog`; a žiadny zdroj ani cieľ `DEFAULT_DEGRADATION_MAP` sa v tomto snapshot-e nejaví ako vyradený. Nedokazuje to, že model je momentálne poskytovaný živým upstreamom. Offline — porovnáva sa voči `config/quality/model-lifecycle.json`, ktorý sa ručne obnovuje pomocou `npm run quality:refresh-model-lifecycle` (sieť; nie je zapojené do CI). `allowedRetiredInCatalog` je burn-down ratchet: záznam pridávajte len so sledovacím issue. | Áno                                          |
| `check:fetch-targets`             | Každý `fetch("/api/...")` v klientskom `src/` sa mapuje na skutočný `route.ts`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Áno                                          |
| `check:deps`                      | Všetky závislosti inštalovateľné cez `npm install` vo všetkých súboroch `package.json` v repozitári sú v `dependency-allowlist.json`; nové nepripnuté alebo slopsquatted balíčky sú označené                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Áno                                          |
| `audit:deps`                      | `npm audit` (root + electron) — žiadne high/critical bezpečnostné oznámenia (prekrýva sa s osv `check:vuln-ratchet`; pozri Rationalization Backlog)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Áno                                          |
| `check:lockfile`                  | Integrita `package-lock.json` — register https, haše integrity, žiadne prepísania hostiteľa                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Áno                                          |
| `check:licenses`                  | Zoznam povolených licencií SPDX pre produkčné závislosti                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Áno                                          |
| `check:tracked-artifacts`         | Žiadne artefakty zostavenia / commitnuté symbolické odkazy `node_modules` (spúšťa sa aj v husky pre-commit; pre-push je zámerne ľahký — #6716)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Áno                                          |
| `check:ai-attribution`            | Žiadny AI/bot `Co-Authored-By` trailer ani pätička o generovaní AI v commitoch PR, názve alebo tele — Prísne pravidlo č. 16 (v slučke fast-gates v `quality.yml` pre PR→`release/**` — číta payload udalosti, mimo PR je no-op — a krok len pre PR v `ci.yml` lint pre PR→`main`; tiež husky hook `commit-msg`; ľudskí spoluautori sú povolení; #14436)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `check:vitest-exclusions`         | Každé vylúčenie Vitest uvádza sledovací issue a nachádza sa v `config/quality/vitest-exclusions.json` (#13204)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Áno                                          |
| `check:file-size`                 | Zdrojové súbory (`.ts`/`.tsx` v `src/`, `open-sse/`, `electron/`, `bin/`) zostávajú v rámci `cap` a testovacie súbory (`*.test.ts(x)`) v rámci `testCap`; súbory zmrazené v `file-size-baseline.json` (`frozen` / `testFrozen`) nesmú prekročiť svoju zaznamenanú veľkosť                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Áno                                          |
| `check:error-helper`              | Chybové odpovede v exekutoroch/handleroch používajú `buildErrorBody()` / `sanitizeErrorMessage()` (Pevné pravidlo č. 12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Áno                                          |
| `check:migration-numbering`       | Migračné SQL súbory sú postupne číslované, bez medzier alebo duplicít                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Áno                                          |
| `check:public-creds`              | Žiadne literálne OAuth `client_id`/`client_secret` ani webové kľúče Firebase mimo `publicCreds.ts` (Pevné pravidlo č. 11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Áno                                          |
| `check:db-rules`                  | Žiadne surové SQL mimo modulov `src/lib/db/`; žiadne barrel-importy z `localDb.ts` (Pevné pravidlá č. 2/č. 5)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Áno                                          |
| `check:known-symbols`             | Exekutory poskytovateľov, smerovacie stratégie a translátory registrované vo svojich dispečerských tabuľkách zodpovedajú súborom na disku — žiadne osirelé alebo nedeklarované symboly                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Áno                                          |
| `check:route-guard-membership`    | Každá trasa, ktorá spúšťa podriadený proces, je klasifikovaná pomocou `isLocalOnlyPath()` (Pevné pravidlá č. 15/č. 17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Áno                                          |
| `check:test-discovery`            | Každý súbor `*.test.ts` / `*.spec.ts` v repozitári je zahrnutý aspoň jedným nástrojom na spúšťanie testov (západka: zoznam osirotených súborov v `test-discovery-baseline.json` sa môže iba zmenšovať)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Áno                                          |
| `check:test-tla-order`            | Žiadny súbor `node:test` v `tests/unit` nezaregistruje test, nevykoná `await` na najvyššej úrovni a potom nezaregistruje ďalšie testy (#18045; západka: zoznam povolených výnimiek v `test-tla-order-allowlist.json` sa môže iba zmenšovať)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Áno                                          |
| `check:agent-skills-sync`         | Vygenerované artefakty zručností agentov sa zhodujú so svojím zdrojovým katalógom (bez odchýlok)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `check:provider-asset-provenance` | Logá/artefakty poskytovateľov majú zaznamenaný údaj o pôvode                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `lint:json`                       | Konfiguračné súbory JSON možno analyzovať a spĺňajú pravidlá lintovania repozitára                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `typecheck:core`                  | Kompilácia TypeScriptu bez chýb (iba informatívne upozornenia)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Áno                                          |
| `typecheck:noimplicit:core`       | Striktné `noImplicitAny` — zamerané do budúcnosti; mnohé existujúce miesta volania stále potrebujú anotácie                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | **Informatívne** (`continue-on-error: true`) |
| `check:dashboard-typecheck`       | `tsc` obmedzený na `src/app/(dashboard)/**` (#7033) — kurátorovaný zoznam 27 povolených súborov `typecheck:core` nezahŕňa žiadne dashboard TSX a `next build` ho tiež nikdy typovo nekontroluje (`next.config.mjs` nastavuje `ignoreBuildErrors: true`), takže regresie osirelých identifikátorov tam (#6625/#6909) boli pre CI neviditeľné. Porovnáva so zmrazenou základnou líniou počtu chýb na súbor/TS kód (`config/quality/dashboard-typecheck-baseline.json`, rovnaký vzor vynucovania zastaranosti ako `check:known-symbols`) — bránou prejdú len chyby do základného počtu; zlyhajú iba NOVÉ chyby nad rámec neho. Po oprave pred existujúcej chyby znížte základnú líniu pomocou `--update`.                                                                                                                                                                        | Áno                                          |

### Úloha: `quality-gate`

Spúšťa sa po `test-coverage`. Pri zlyhaní blokuje zlúčenie.

| Skript                       | Overuje                                                                                                                                                                    | Blokujúce            |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| `quality:collect`            | Generuje `quality-metrics.json` (počet upozornení ESLint, pokrytie zo zlúčeného reportu shardov)                                                                           | Áno (pred ratchetom) |
| `quality:ratchet`            | Žiadna metrika v `quality-baseline.json` sa nezhoršila (upozornenia ESLint ≤ základná línia; pokrytie ≥ základná línia)                                                    | Áno                  |
| `check:duplication`          | Duplikácia kódu (jscpd@4) neprekračuje základnú líniu v `quality-baseline.json`                                                                                            | Áno                  |
| `check:complexity`           | Cyklomatická zložitosť na úrovni súboru neprekračuje limit (jadro ESLint `complexity` + `max-lines-per-function`)                                                          | Áno                  |
| `check:cognitive-complexity` | Ratchet kognitívnej zložitosti (`eslint-plugin-sonarjs`) — samostatný prechod ESLint; CI spúšťa oba zlúčené ako jeden krok `check:complexity-ratchets`                     | Áno                  |
| `check:dead-code`            | Ratchet nepoužívaných exportov / súborov (knip) sa nezhorší oproti základnej línii                                                                                         | Áno                  |
| `check:compression-budget`   | Rozpočet kompresného benchmarku — minimálne úspory tokenov na engine sa nesmú zhoršiť                                                                                      | Áno                  |
| `check:type-coverage`        | Ratchet percentuálneho otypovania (`type-coverage`) sa nezhorší; do veľkej miery zahŕňa `typecheck:noimplicit:core`                                                        | Áno                  |
| `check:codeql-ratchet`       | Počet otvorených upozornení CodeQL sa nezhorší (číta cez `gh api`; bez tokenu sa elegantne preskočí) — kadencia obnovy a manuálne spustenie: pozri „CodeQL ratchet" nižšie | Áno                  |

### Úloha: `quality-extended`

Celá úloha je poradenská (`continue-on-error: true`). Ratchety založené na npm bežia
naozaj; externé skenery sa inštalujú cez `gh release download` a samy sa preskočia
(exit 0), keď binárny súbor stále chýba.

| Skript                   | Overuje                                                                                                                                                                                                                | Blokujúce                                               |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| `check:circular-deps`    | Žiadne cyklické závislosti (dpdm)                                                                                                                                                                                      | **Poradenské**                                          |
| `check:bundle-size`      | Veľkosť bundlu neprekračuje limit                                                                                                                                                                                      | **Poradenské**                                          |
| `check:secrets`          | Skenovanie tajomstiev (gitleaks) — preskočí, ak binárny súbor chýba                                                                                                                                                    | **Poradenské**                                          |
| `check:vuln-ratchet`     | Zraniteľnosti závislostí (osv-scanner) sa nezhoršia — preskočí, ak binárny súbor chýba                                                                                                                                 | **Poradenské**                                          |
| `check:workflows`        | Lint workflowov (actionlint + zizmor); chýbajúce/pokazené skenery, neplatné reporty alebo chýbajúca základná línia ratcheta zlyhajú ako INCOMPLETE. Platné nálezy sa riadia zvolenou politikou strict/advisory/ratchet | Vyžaduje sa vykonanie; zizmor ratchet je v CI blokujúci |
| `check:openapi-breaking` | Lámuce zmeny verejného API kontraktu (`openapi.yaml`) oproti základnej vetve (oasdiff) — generuje `openapiBreaking=N`; preskočí, ak oasdiff chýba alebo základná špecifikácia nie je dostupná                          | **Poradenské**                                          |

### Úloha: `docs-sync-strict`

Spúšťa sa pri každom PR do `main`. Pri zlyhaní blokuje zlúčenie.

| Skript                         | Overuje                                                                                                                                                                               | Blokujúce                 |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| `check:docs-all`               | Meta-brána, ktorá postupne spúšťa 6 nižšie uvedených podbrán                                                                                                                          | Áno                       |
| ↳ `check:docs-sync`            | Konzistencia verzií CHANGELOG / OpenAPI / llm.txt                                                                                                                                     | Áno                       |
| ↳ `check:docs-counts`          | Počty v próze (počet poskytovateľov, počet migrácií atď.) sú v rámci ratchet okna skutočných počtov                                                                                   | Áno                       |
| ↳ `check:env-doc-sync`         | Každá premenná prostredia v `.env.example` je zdokumentovaná v tabuľke dokumentácie a naopak                                                                                          | Áno                       |
| ↳ `check:deprecated-versions`  | Žiadne zastarané reťazce verzií v dokumentácii                                                                                                                                        | Áno                       |
| ↳ `check:doc-links`            | Interné markdown odkazy v dokumentácii smerujú na skutočné súbory (vo forme `[text]`/`(path)`)                                                                                        | Áno                       |
| ↳ `check:fabricated-docs`      | Routy, premenné prostredia, CLI príkazy, názvy hookov a cesty k súborom citované v dokumentácii existujú v kódovej základni. Pevná brána cez `--strict`; mäkké zlyhanie bez príznaku. | Áno (cez `--strict` v CI) |
| `check:cli-i18n`               | Reťazce CLI príkazov sú prítomné vo všetkých súboroch jazykových mutácií i18n                                                                                                         | Áno                       |
| `check:openapi-coverage`       | Špecifikácia OpenAPI pokrýva aspoň ratchetovanú spodnú hranicu skutočných rout                                                                                                        | Áno                       |
| `check:openapi-security-tiers` | Anotácie bezpečnostných úrovní v `openapi.yaml` sú konzistentné s klasifikáciami v `routeGuard.ts`                                                                                    | **Poradné**               |
| `check:openapi-routes`         | Každá cesta v `openapi.yaml` smeruje na skutočný `route.ts` (anti-halucinácia)                                                                                                        | Áno                       |
| `check:docs-symbols`           | Každá referencia `/api/...` v `docs/**/*.md` smeruje na skutočný `route.ts` (anti-halucinácia)                                                                                        | Áno                       |
| `i18n translation drift`       | Nepreložené kľúče v súboroch jazykových mutácií i18n — iba varovanie                                                                                                                  | **Poradné**               |

### Úloha: `i18n-ui-coverage`

| Skript                            | Overuje                                                                                                                                                                                          | Blokujúce   |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| `check-ui-keys-coverage` (inline) | Pokrytie UI i18n kľúčov je ≥ 65 %                                                                                                                                                                | Áno         |
| `check-ui-value-drift` (inline)   | Prepísaná anglická **hodnota** nezanechá za sebou žiadny zastaralý preklad                                                                                                                       | Áno         |
| `check-new-key-coverage` (inline) | **Nový** anglický kľúč je preložený v každej jazykovej mutácii — marker `__MISSING__:` je zamietnutý                                                                                             | Áno         |
| `check-translation-ratio`         | Pomer skutočných prekladov na jazykovú mutáciu (listy identické s angličtinou / zástupné / chýbajúce mimo allowlistu) nesmie prekročiť `config/quality/i18n-translation-baseline.json` + rezervu | **Poradné** |

Vyžaduje `fetch-depth: 0` — brána value-drift porovnáva `en.json` voči merge base.

#### `check-ui-value-drift` — brána proti zastaralým prekladom

Zachytáva tú jednu i18n regresiu, ktorú ostatné brány štrukturálne nemôžu vidieť: anglická
hodnota sa prepíše a preklady odvodené z _predchádzajúcej_ angličtiny zostanú pozadu, takže
neanglicky hovoriaci používatelia naďalej čítajú sebavedomo formulovaný, no medzitým nesprávny text.

Stalo sa to naozaj. `oauthModal.googleOAuthWarning` bol prepísaný, keď pribudla pomôcka na
prihlásenie Antigravity (#5203); **39 z 43 jazykových mutácií** si ponechalo text, ktorý
nabádal operátorov, aby „skopírovali celú URL a vložili ju nižšie" — postup, ktorý sa pre
daného poskytovateľa nedá dokončiť. Zostalo to bez povšimnutia až do #8463, pretože:

- `sync-ui-keys` dopĺňa iba kľúče, ktoré **chýbajú**, nikdy tie, ktoré sú **zastaralé**;
- `check-ui-keys-coverage` počíta _prítomnosť_ kľúčov, takže zastaralý preklad sa hodnotí ako pokrytý;
- `check-translation-drift` sleduje zrkadlá dokumentácie `docs/i18n/<locale>/**.md` —
  nikdy nečíta `src/i18n/messages/*.json`. Blokujúce v úlohe `docs-sync-strict` od
  resynchronizácie 2026-09: upravte základný dokument → `npm run i18n:run -- --files=<doc>` (na úrovni sekcie, nenáročné).

**Vychádza z diffu, nie z baseline-u.** Porovnáva `en.json` v bode merge base s pracovným stromom; pre každý kľúč, ktorého anglická hodnota sa zmenila, je každá lokalizácia, ktorá stále obsahuje nedotknutý preklad, zastaralá. Toto zámerne **zmrazuje existujúci dlh** — diff nedokáže odhaliť, z ktorej starej angličtiny dlhotrvajúci preklad pochádza, takže brána posudzuje len to, čoho sa aktuálna zmena dotýka. Alternatíva (baseline hashov pre každý kľúč) by znamenala vygenerovaný súbor s veľkosťou ~600 KB, 3× väčší ako najväčší existujúci baseline, ktorý by sa menil pri každom i18n PR.

Dva spôsoby, ako ju splniť:

1. aktualizovať dotknuté preklady, alebo
2. nastaviť ich na `__MISSING__:<new english>` — runtime potom poskytuje opravenú angličtinu
   (`src/i18n/request.ts::deepMergeFallback`, #7258) a kľúč sa zaradí do fronty na preklad.

Ak sa zmenil **význam** reťazca, uprednostnite **premenovanie kľúča**: nový kľúč nemôže zdediť
zastaralý preklad. To je vzor, ktorý použil #8463.

```bash
npm run i18n:check-value-drift          # striktné (to, čo spúšťa CI)
npm run i18n:check-value-drift:warn     # len hlásenie
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

Skončí s kódom 0 a hlásením `SKIP reason=base-unresolved`, keď sa základný katalóg nedá prečítať
(plytký klon bez základného refu), rovnako ako `check-openapi-breaking`.

### Úloha: `i18n`

Úplná validačná matica i18n (jedna úloha na lokalizáciu). Celá úloha je poradná.

| Skript                          | Validuje                            | Blokujúce                                              |
| ------------------------------- | ----------------------------------- | ------------------------------------------------------ |
| `validate_translation.py quick` | Úplnosť prekladov podľa lokalizácie | **Poradná** (`continue-on-error: true` na celej úlohe) |

### Úloha: `pr-test-policy`

Spúšťa sa len pri pull requestoch.

| Skript                 | Validuje                                                                                                                                       | Blokujúce |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `check:pr-test-policy` | PR, ktoré menia produkčný kód v `src/`, `open-sse/`, `electron/` alebo `bin/`, musia obsahovať alebo aktualizovať testy (Prísne pravidlo č. 8) | Áno       |
| `check:test-masking`   | Zmenené testovacie súbory neznižujú čistý počet asercií ani nepridávajú tautológie `assert.ok(true)`                                           | Áno       |
| `check:pr-evidence`    | Telo PR uvádza dôkazy z testov/VPS o zmene (mechanizuje Prísne pravidlo č. 18 prehľadávaním textu PR pomocou grep — krehké, pozri Backlog)     | Áno       |

### Úloha: `test-vitest`

Spúšťa sa až po `build`. Pri zlyhaní blokuje merge.

| Sada             | Validuje                                                     | Blokujúce                                                                                                                       |
| ---------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `test:vitest`    | MCP server (110 nástrojov), autoCombo, cache — runner vitest | Áno                                                                                                                             |
| `test:vitest:ui` | Testy UI komponentov — runner vitest                         | **Blokujúce** — predtým existujúce zlyhania sú explicitne vylúčené vo `vitest.config.ts`; nové zlyhania spôsobia zlyhanie úlohy |

### Nočné workflow (plánované, poradné)

Tieto sa spúšťajú podľa plánu cronu (a cez `workflow_dispatch`), nikdy pri PR. Všetky sú poradné.

| Workflow               | Validuje                                                                                                                                                                     | Blokujúce   |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `nightly-property`     | property testy fast-check s náhodným seedom + vysokým počtom spustení                                                                                                        | **Poradné** |
| `nightly-resilience`   | brána rastu heapu, chaos fault-injection, k6 load/soak                                                                                                                       | **Poradné** |
| `nightly-llm-security` | ochrana promptfoo proti injekciám (blokovací režim) + sondy garak (preskočené bez tajného kľúča poskytovateľa)                                                               | **Poradné** |
| `nightly-schemathesis` | fuzzovanie kontraktu OpenAPI (schemathesis) voči živej inštancii OmniRoute pomocou `docs/openapi.yaml` — odhaľuje porušenia špecifikácie / neošetrené chyby 500 (Fáza 8 B.4) | **Poradné** |
| `nightly-mutation`     | skóre mutačného testovania Stryker nad rýchlou líniou jednotkových testov — prežívajúci mutanti odhaľujú slabé asercie                                                       | **Poradné** |
| `nightly-compat`       | matica kompatibility enginu Node naprieč podporovanými rozsahmi `engines.node`                                                                                               | **Poradné** |

Výkonnostné referenčné hodnoty (heap, TTFB, čas buildu) sa zaznamenávajú, ale nepodliehajú bráne: pozri [`PERF_BASELINE.md`](../ops/PERF_BASELINE.md) (`npm run perf:lts-baseline`).

---

## Fáza rýchlosti (2026-08-30 → v4.0 LTS): každý základ bol uvoľnený o 20 %

Rozhodnutie vlastníka (2026-08-30): až do modularizácie vo v4.0 je rýchlosť vydávania dôležitejšia
než udržiavanie technického dlhu na uzde. Každý **číselný** základ sprísňovacieho mechanizmu bol v jednom
auditovateľnom kroku uvoľnený o 20 % a táto fáza je deklarovaná v `config/quality/quality-baseline.json`:

```json
"_policy": { "phase": "velocity", "since": "2026-08-30", "until": "4.0.0",
             "relaxPct": 20, "requireTighten": false }
```

| Čo sa zmenilo                                                                                                                                                                                                             | Kde                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `metrics.*.value` — počty, kde je nižšia hodnota lepšia, ×1.2; percentá, kde je vyššia hodnota lepšia, ÷1.2 (minimum pokrytia zostalo 60, `eslintErrors` zostáva 0, `eslintWarnings` 0 → 20 % zmrazeného počtu potlačení) | `quality-baseline.json` (poznámka `_relax_velocity_2026_08_30` uvádza každú zmenu pred → po)           |
| `count` ×1.2 / `percentage` ×1.2                                                                                                                                                                                          | `complexity-baseline.json`, `duplication-baseline.json`                                                |
| `cap`, `testCap`, každý limit riadkov `frozen[*]` / `testFrozen[*]` ×1.2                                                                                                                                                  | `file-size-baseline.json`                                                                              |
| počty na súbor / na súbor kódu TS ×1.2                                                                                                                                                                                    | `api-typecheck-baseline.json`, `dashboard-typecheck-baseline.json`, `open-sse-typecheck-baseline.json` |
| `THRESHOLD` 36 → 30                                                                                                                                                                                                       | `scripts/check/check-openapi-coverage.mjs`                                                             |
| `--require-tighten` má iba poradný charakter, pokiaľ `_policy.requireTighten === false`                                                                                                                                   | `scripts/quality/check-quality-ratchet.mjs`                                                            |
| nočná úloha `bank-ratchet-shrinks` je pozastavená (uložila by namerané zníženie a zrušila rezervu)                                                                                                                        | `.github/workflows/nightly-release-green.yml`                                                          |

Zoznamy povolených výnimiek (`eslint-suppressions.json`, `test-masking-allowlist.json`, `test-discovery-baseline.json`,
…) **nie sú** rozpočty a neboli zmenené. Zásady kontrol úspechu/neúspechu (tajomstvá, pravidlá SQL,
kontrakt dokumentácie/prostredia, zhoda i18n, jednotkové testy) zostávajú nezmenené — neúspešný test je stále neúspešný test.

**Nástroje**

- `npm run quality:relax-baselines -- --pct 20 --note velocity_YYYY_MM_DD [--dry-run]` — jednorazové
  uvoľnenie (`scripts/quality/relax-baselines.mjs`); odmietne sa spustiť dvakrát s tou istou
  poznámkou.
- `npm run quality:headroom [-- --only deadExports,fileSize] [--json out.json --md out.md]` —
  meria každú číselnú kontrolu rovnakým spôsobom ako CI a vypíše zostávajúcu rezervu pre každú kontrolu
  (`scripts/quality/baseline-headroom.mjs`). Nočná úloha `baseline-headroom` publikuje
  tabuľku v súhrne behu pracovného postupu a nahrá svoju správu vo formáte JSON/Markdown ako
  `baseline-headroom-<run_id>` s dobou uchovávania 90 dní. Varovné a kritické riadky označujú kontroly,
  ktoré sú do 10 % od svojho limitu alebo ho už prekročili. Tieto správy kontrolujte ako včasné upozornenie
  na spotrebovávanie rozpočtov; preskúmajte poznámky `_rebaseline_*` príslušnej kontroly. Úloha už
  nevytvára ani neaktualizuje trvalý problém; #12149 uchováva históriu predchádzajúcich správ.

**Režim nového kódu (Clean-as-You-Code) — od 2026-08-30, iba zrýchlená cesta pre PR**

Pri udalostiach `pull_request` odovzdáva `quality.yml` parameter `--base-ref <PR base SHA>` kontrolám `check:file-size`,
`check:complexity-ratchets` a `check:dead-code`. Pri kontrolách `check:complexity-ratchets` a
`check:dead-code` kontrola porovnáva HEAD so spoločným predkom **s obmedzením na súbory, ktorých sa PR
dotkol** (`scripts/check/newCodeMode.mjs`: spoločný predok sa materializuje v dočasnom
`git worktree`, ESLint/knip sa spustia tam aj na HEAD a následne sa porovnajú počty pre jednotlivé súbory):

- **blokujúce** — PR pridal porušenia cyklomatickej/kognitívnej zložitosti alebo nepoužívané exporty v súboroch, ktoré zmenil
  (`complexityNewCode=`, `cognitiveComplexityNewCode=`, `deadExportsNewCode=` v protokole);
- **poradné** — globálny súčet voči zmrazenému základu. Zdedený odklon nikdy nespôsobí zlyhanie
  nevinného PR; odklon sa pri zosúladení vydania znovu zmrazí a monitoruje ho úloha na sledovanie rezervy.

`check:file-size` používa základnú referenciu podľa vlastných pravidiel (`scripts/check/check-file-size.mjs`, #8522):
kontroluje každý zdrojový a testovací súbor v strome, načíta počet riadkov každého z nich v základe PR
pomocou `git show` a označí súbor ako neúspešný iba vtedy, keď narastie nad vyššiu hodnotu zo svojho základného stropu
(`frozen` / `testFrozen` alebo `cap` / `testCap` pre súbor mimo základu) a svojej veľkosti
v základe. Súbor, ktorý sa už v základe odchýlil, preto nikdy nespôsobí zlyhanie nevinného PR.

`check:boundary:ratchet` uplatňuje rovnaké pravidlo na svoje jediné číslo
(`scripts/quality/measure-boundary.mjs --ratchet --base-ref <sha>`): pri udalostiach PR odovzdávajú
rýchle kontroly v `quality.yml` aj lint úloha v `ci.yml` základný SHA PR, základný commit sa
meria z exportu `git archive` a PR zlyhá iba vtedy, keď jeho počet hrán `open-sse → src`
prekročí vyššiu z hodnôt `metrics.boundaryOpenSseToSrc` a počtu na základe. Posun základu nad
strop sa hlási (`base drift herdado`), ale nikdy nespôsobí zlyhanie nevinného PR; push → main
naďalej používa absolútny strop a pri nerozpoznateľnom základnom SHA sa s upozornením použije
ako náhradné riešenie tento strop.

Spustenia `workflow_dispatch`, záverečná kontrola zeleného vydania a nočná úloha na kontrolu rezervy
nemajú základ PR a zachovávajú absolútne (globálne) porovnanie. Pokrytie, duplicita a pokrytie typmi
zatiaľ zostávajú globálne (ich nástroje nedokážu lacno vytvoriť rozdiel podľa jednotlivých súborov)
— sú to kandidáti na rovnaký prístup.

**Ukončenie fázy vo v4.0 (LTS = prísnejšie než predtým, nie „návrat do normálu“)**

1. Na čistom konci vetvy `release/v4.0.0`: pre záznam spustite `npm run quality:headroom --json`, potom
   `npm run quality:ratchet -- --update`, `check:file-size --update`,
   `check:complexity-ratchets --update`, `check:dead-code --update` a `--update` pre každú
   typecheck kontrolu — každá východisková hodnota klesne na nameranú hodnotu.
2. Odstráňte `_policy` zo súboru `quality-baseline.json` (znova aktivuje `--require-tighten` a nočné
   zhromažďovanie rezervy), obnovte `THRESHOLD = 36` (alebo vyššiu hodnotu) v `check-openapi-coverage.mjs`.
3. Tam, kde sa modularizácia vyplatila, sprísnite limity nad rámec nameraných hodnôt: `cap` veľkosti
   súboru späť na 1000 (alebo 800), minimá pokrytia +5, počet nepoužívaných exportov pre
   modularizované balíky na 0.

## Základná línia ratchetu (`quality-baseline.json`)

Mechanizmus ratchetu (`scripts/quality/check-quality-ratchet.mjs`) načíta súbor `quality-baseline.json`
a porovná ho s čerstvo zozbieraným súborom `quality-metrics.json`. Každá metrika, ktorá sa zhorší
nad rámec svojej hodnoty epsilon, spôsobí zlyhanie zostavenia.

Aktuálne sledované metriky:

| Metrika               | Smer   | Význam                                |
| --------------------- | ------ | ------------------------------------- |
| `eslintWarnings`      | `down` | Počet upozornení ESLint nesmie narásť |
| `coverage.statements` | `up`   | Pokrytie príkazov nesmie klesnúť      |
| `coverage.lines`      | `up`   | Pokrytie riadkov nesmie klesnúť       |
| `coverage.functions`  | `up`   | Pokrytie funkcií nesmie klesnúť       |
| `coverage.branches`   | `up`   | Pokrytie vetiev nesmie klesnúť        |

Ak chcete po skutočnom zlepšení aktualizovať základnú líniu:

```bash
npm run quality:ratchet -- --update
git add quality-baseline.json
```

Príznak `--update` zapíše aktuálne namerané hodnoty do súboru `quality-baseline.json`.
Tento súbor potvrďte spolu so zmenou, ktorá metriku zlepšila. PR, ktorý zlepší
metriku bez aktualizácie základnej línie, zachytí `--require-tighten` (Fáza 6A.5,
implementácia sa pripravuje).

### Ratchet CodeQL: frekvencia obnovenia a manuálne spustenie

`check:codeql-ratchet` načítava **stav repozitára, obnovovaný podľa plánu — nie pri každom PR.**
`gh api repos/diegosouzapw/OmniRoute/code-scanning/default-setup` hlási
`state: configured`, `schedule: weekly`: ide o kontrolu prostredníctvom predvoleného nastavenia GitHubu, nie o analýzu
pri každom odoslaní zmien. Dôsledok: po zlúčení PR, ktorý OPRAVUJE upozornenia, ratchet naďalej načítava
starý, vyšší počet až do spustenia ďalšej naplánovanej kontroly — preto hlási regresiu
pri každom otvorenom PR vrátane nadväzujúcich PR k opravnému PR, až kým sa kontrola neaktualizuje.

**Manuálne obnovenie**: `gh workflow run codeql.yml --ref release/vX.Y.Z` znova spustí
analýzu a v priebehu niekoľkých minút opätovne zverejní upozornenia. Najprv si prečítajte `.github/workflows/codeql.yml`
— jeho hlavička vysvetľuje, že je určený **iba pre `workflow_dispatch`**, **pretože je v konflikte s
„predvoleným nastavením“ GitHubu** (`CodeQL analyses from advanced configurations cannot be
processed when the default setup is enabled`). Obnovenie spúšťačov `push`/`pull_request`/
`schedule` najskôr vyžaduje **zásah vlastníka**: Nastavenia → Zabezpečenie kódu →
CodeQL: Predvolené → Rozšírené. Bez tohto prepnutia nepridávajte spúšťač `schedule:` — spôsobí
iba neúspešné spustenia.

**Po poklese počtu sprísnite základnú líniu** — `node scripts/check/check-codeql-ratchet.mjs
--update` zapíše nový nameraný počet do `quality-baseline.json` →
`metrics.codeqlAlerts.value`, takže ratchet nebude potichu povoľovať regresiu späť
k pôvodnému limitu. Praktický príklad (2026-09-02/03): PR #12502 opravil 7 skutočných upozornení
(13 → 6 nameraných otvorených); PR #12530 sprísnil zmrazenú základnú líniu z 11 → 6, aby sa zhodovala; zostávajúcich
6 upozornení bolo následne zamietnutých s individuálnym odôvodnením pre každé upozornenie, čím sa počet otvorených upozornení znížil na 0.

**O zamietnutiach rozhoduje operátor (Prísne pravidlo č. 14)** — nikdy nezamietajte upozornenie CodeQL
bez zaznamenania technického odôvodnenia v komentári k zamietnutiu: `won't fix` pre
požiadavku nadradeného protokolu, `used in tests` pre testovaciu pomôcku, `false positive`
pre sanitizér, ktorý CodeQL nedokáže rozpoznať (precedens: `docs/security/ERROR_SANITIZATION.md`).

---

## Zásady opakovania testov (WS5.4, v3.8.49)

Opakovanie sa nastavuje pre každý runner samostatne, nikdy nie globálne — plošné opakovanie mení skutočné regresie
na neviditeľné nestability:

| Runner           | Zásady                                                                                                                                             | Dôvod                                                                                                                                    |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Playwright (e2e) | `retries: 1` iba v CI, s `trace: on-first-retry`                                                                                                   | Časovanie prehliadača/siete je skutočne nedeterministické; jedno opakovanie so záznamom zmení nestabilitu na diagnostikovateľný artefakt |
| Vitest           | ŽIADNE globálne opakovanie. Preukázateľne nestabilný test dostane explicitné opakovanie pre konkrétny test (viditeľné v diffe, skontrolované v PR) | Udržiava zoznam testov v karanténe v repozitári, nikdy nie skrytý                                                                        |
| node:test (unit) | ŽIADNE opakovanie, nikdy                                                                                                                           | Nestabilný jednotkový test je chyba v teste — opravte ho, nespúšťajte ho jednoducho znova                                                |

Cieľové SLO po zavedení telemetrie nestabilít (WS5.2/5.3): <1 % miera nestability na test
(prah „opraviť teraz“), ≥95 % úspešnosť na pipeline. Referenčné hodnoty z odvetvia —
prekalibrujte ich podľa našich vlastných meraní.

## Odchýlka západiek na úrovni vydania (WS5.5, v3.8.49)

Keď sa západka (veľkosť súboru, zložitosť, upozornenia eslint) zhorší na ČISTOM vrchole
vydania — t. j. zhoršila ju KOMBINÁCIA zlúčení a žiadny jednotlivý PR nereprodukuje
regresiu vo svojej vlastnej vetve — oprava patrí **kapitánovi vydania, jednorazovo, vo
vetve vydania**: uprednostnite extrakciu/refaktoring; základnú hodnotu aktualizujte iba so zdokumentovaným
odôvodnením. Nikdy neprenášajte kombinovanú odchýlku na PR prispievateľa a nikdy
neaktualizujte základnú hodnotu pre každý PR samostatne (to skrýva skutočné regresie). Najprv rozlíšte príčinu: reprodukujte
neúspešný stav na čistom vrchole v skúšobnom worktree skôr, než predpokladáte, že ho spôsobil váš PR.

## Ukladanie sprísnení západiek — smerom nadol (#8584)

Západka je automatická iba napoly, a práve v nesprávnej polovici. **Zvýšenie** limitu je
manuálna úprava JSON, ktorá trvá desať sekúnd a predstavuje najrýchlejší spôsob, ako odblokovať neúspešný PR.
**Zníženie** limitu vyžaduje, aby niekto spustil `--update` a commitol výsledok — a kým
nebola nasadená úloha `bank-ratchet-shrinks`, žiadny workflow ju nespúšťal. Nameraný dôsledok
(2026-07-25): 18 zmrazených súborov už malo najviac 800 riadkov, teda limit pre nové súbory, pričom najhorší
prípad dosahoval 132× (`src/shared/validation/schemas.ts`, 19 riadkov s limitom 2 523); strop
zložitosti sa posunul z `1794 → 2169` počas približne 37 poznámok o aktualizácii základnej hodnoty s presne jedným
znížením (−1); a fráza „sprísniť pomocou `--update` v ďalšom cykle“ bola napísaná 31-krát a dodržaná
raz. Limit, ktorý pretrvá dlhšie než kód, pre ktorý vznikol, potichu mení každý dokončený
rozklad na povolenie rastu pre kohokoľvek, kto súbor upraví nabudúce.

`nightly-release-green.yml` → úloha **`bank-ratchet-shrinks`** uzatvára túto slučku:

|               |                                                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Spúšťa sa pri | `schedule` (3× denne) + `workflow_dispatch` — zámerne **nie** pri `push`                                                  |
| Meria         | najvyššiu vetvu `release/vX.Y.Z`, s rovnakým rozlíšením a ochranou pred injektovaním ako `release-green`                  |
| Zapisuje      | `check:file-size --update` a `check:complexity-ratchets --update` (obe sú svojou konštrukciou určené iba na sprísňovanie) |
| Overuje       | `npm run check:ratchet-bank` (`scripts/quality/verify-ratchet-bank.mjs`)                                                  |
| Dodáva        | jeden vždy aktuálny PR proti vetve vydania — vynútene aktualizovaný, nikdy nevytvára spam                                 |

Ukladanie sa vykonáva dávkovo namiesto každého pushu, pretože nemá požiadavku na latenciu (sprísnenie
uložené do 8 hodín je v poriadku), zatiaľ čo spustenie po každom zlúčení by počas kampaní
zlučovania opakovane zostavovalo vetvu PR a zakaždým by platilo náklady na úplný prechod ESLint. Detekcia zostáva naviazaná na
push (`release-green`); iba ukladanie prebieha dávkovo.

### Bezpečnostný overovač

Úloha zapisuje do základných hodnôt bez dozoru, takže prijateľnosť tohto postupu zabezpečuje
`verify-ratchet-bank.mjs`. Porovná strom po vykonaní `--update` so stavom `HEAD` a **preruší úlohu
pred vytvorením akéhokoľvek commitu** — bez otvorenia PR — pokiaľ každá zmena nie je jednou z nasledujúcich:

- číselná položka `frozen` / `testFrozen` bola **znížená** alebo **odstránená**
- `complexity-baseline.json` → `count` bolo **znížené**
- `quality-baseline.json` → `metrics.cognitiveComplexity.value` bolo **znížené**

Čokoľvek iné zlyhá: zvýšenie čísla, pridanie položky, zmena `cap`/`testCap` alebo
odstránenie/prepísanie poznámky `_rebaseline_*` (tieto poznámky predstavujú auditnú stopu dôvodu existencie
každého stropu a sú uložené v rovnakom objekte `frozen` ako položky súborov).
Bot, ktorý by mohol zvýšiť limit, by bol jednoznačne horší než súčasný stav. Ochrana pred regresiou:
`tests/unit/verify-ratchet-bank.test.ts`.

Úloha nikdy nevykonáva push do `release/*` — PR zlučuje človek, takže nesprávne meranie
sa nemôže dostať do vetvy bez kontroly.

## Zásady zoznamu povolených položiek

Každá brána, ktorá nemôže zlyhať pri už existujúcich porušeniach, používa nemenný zoznam povolených položiek
(napr. `KNOWN_STALE_DOC_REFS`, `KNOWN_MISSING`, `KNOWN_RAW_SQL`). Platí táto zásada:

**Odstráňte základnú príčinu; zoznam povolených položiek použite iba vtedy, keď porušenie už existovalo a
nemožno ho opraviť v rámci rovnakého PR.**

Pri pridávaní položky do zoznamu povolených položiek:

1. Pridajte komentár s odôvodnením.
2. Uveďte odkaz na sledovaný problém (napr. `// #3498 — Funkcia fázy 2, zatiaľ neimplementovaná`).
3. Odstráňte položku v tom istom PR, ktoré opravuje porušenie — zastaraná položka, ktorá už
   nepotláča aktívne porušenie, je sama osebe chybou (kontrola zastaraného vynucovania 6A.3
   po implementácii spôsobí zlyhanie brány pri osamotenej položke zoznamu povolených položiek).

**Nepridávajte** položky do zoznamu povolených položiek, aby testy prešli rýchlejšie. Zelená brána s rastúcim
zoznamom povolených položiek vytvára falošný pocit kvality.

### Keď brána vo vašom PR zlyhá

1. **Pozorne si prečítajte výstup brány** — presne uvádza, ktorý súbor alebo symbol
   porušil pravidlo.
2. **Opravte porušenie** — väčšina brán vykonáva deterministické kontroly súborového systému, ktoré prejdú hneď,
   ako je kód správny.
3. **Ak porušenie už existovalo** (t. j. nezaviedli ste ho vy, ale brána ho teraz
   pokrýva): pridajte položku do zoznamu povolených položiek spolu s komentárom obsahujúcim odôvodnenie a odkazom na sledovaný problém.
4. **Ak je brána západková** (pokrytie, upozornenia ESLint, duplicita, zložitosť):
   vaša zmena metriku zhoršila. Opravte základný problém alebo (výnimočne) spustite
   `npm run quality:ratchet -- --update`, ak je zmena zámerná a zhoršenie metriky
   prijateľné — v popise PR však zdokumentujte dôvod.
5. **Poradné brány** (`continue-on-error: true`) sú informačné — neblokujú
   zlúčenie, ale zobrazujú sa v súhrne CI. Napriek tomu ich opravte.

---

## Pridanie novej brány

1. Vytvorte `scripts/check/check-<name>.mjs` (alebo `.ts`). Brány zásad sa ukončujú s kódom 0/1.
   Brány západkového typu zapisujú metriku do `quality-metrics.json` prostredníctvom `collect-metrics.mjs`.
2. Pridajte `"check:<name>": "node scripts/check/check-<name>.mjs"` do `package.json`.
3. Zapojte ju v `.github/workflows/ci.yml` do príslušnej úlohy
   (zásada → `lint` alebo `docs-sync-strict`; západka → `quality-gate`).
4. Ak používa zoznam povolených položiek, aplikujte `reportStaleEntries()` zo súboru
   `scripts/check/lib/allowlist.mjs`, aby sa zastarané položky zisťovali automaticky.
5. Napíšte test v `tests/unit/build/`, ktorý pokrýva detekčnú logiku brány.
6. Aktualizujte tento dokument (pridajte riadok do tabuľky príslušnej úlohy).

---

## Nástroje pre agentov: LSP-in-the-loop (voliteľné)

Okrem brán CI obsahuje OmniRoute aj **voliteľnú** kostru `agent-lsp`
(projektový súbor `.mcp.json`, fáza 7, úloha 15). Vytvorte `.mcp.json`,
aby ste sprístupnili jazykový server TypeScript programovacím agentom, vďaka čomu budú riešiť symboly /
diagnostiku **pred** písaním kódu — ide o doplnok ku `typecheck:core` založený na princípe kompilácie pred tvrdením,
ktorý odstraňuje chyby „vymyslených symbolov“ už pri zdroji. Zámerne sa
nenačítava automaticky (most MCP↔LSP si vyberáte a overujete sami); nefunkčná položka iba zaznamená
chybu pripojenia a nikdy nepreruší relácie.

---

## Zoznam racionalizačných úloh (preskúmanie ROI — fáza 9, vlna 3)

Tento inventár bol 2026-06-17 zosúladený s `ci.yml` (predchádzajúca verzia vynechávala
`audit:deps`, `check:tracked-artifacts`, `check:lockfile`, `check:licenses`,
`check:dead-code`, `check:cognitive-complexity`, `check:type-coverage`,
`check:codeql-ratchet`, `check:pr-evidence`). Preskúmanie ROI zosúladenej množiny
identifikovalo nasledujúcich kandidátov na racionalizáciu. **Zlúčenia sú mechanické zmeny CI;
prepnutia/odstránenia sú politické rozhodnutia vyhradené pre operátora.** Nič z nižšie
uvedeného zatiaľ nebolo aplikované.

**Vyššie takisto nezdokumentované** (informatívne, nízka výpovedná hodnota): úloha `docs-lint`
(markdownlint + Vale, celá úloha s `continue-on-error`) a samostatné pracovné postupy skenerov
`semgrep.yml` / `codeql.yml` / `scorecard.yml`. Hodnota `semgrepFindings: 0` sa nachádza v
`quality-baseline.json`, ale v `ci.yml` nie je napojená na blokujúcu západku — metrika je
momentálne osirelá.

### Zlúčenie / deduplikácia (mechanické, nižšie riziko)

Každý kandidát bol 2026-06-17 overený voči aktuálnemu stavu brán (dôveruj, ale preveruj);
ukázalo sa, že viaceré „zjavné“ zlúčenia skrývajú dlh a **nie sú** bezproblémovými náhradami.

- **`check:docs-sync` sa spúšťa dvakrát** — samostatne v úlohe `lint` a znova v rámci `check:docs-all` (`docs-sync-strict`) a hooku husky pre pre-commit. ✅ **HOTOVO** — samostatné spustenie v úlohe `lint` bolo odstránené.
- **Skenovanie CVE** — ❌ **NIE JE to bezproblémové zlúčenie.** `audit:deps` tvrdo zlyhá pri ľubovoľnej CVE s vysokou/kritickou závažnosťou; `check:vuln-ratchet` (osv) zlyhá iba pri _regresii_ oproti východiskovej hodnote (aktuálne 1 MODERATE). Odlišná sémantika — odstránením `audit:deps` by sa stratila absolútna brána pre vysokú/kritickú závažnosť. Ponechať obe.
- **Detekcia cyklov** — ✅ **HOTOVO** (#15159 G-01/G-02). Starý text tu označoval `check:cycles` za „zelenú, starostlivo zostavenú“ bránu a odôvodňoval jej zachovanie ako blokujúcej tým, že `check:circular-deps` (dpdm) hlásil 91 cyklov. Tento zelený stav bol **falošne zelený**: `check:cycles` skenoval 5 podadresárov (450 súborov), vyhľadával iba statické `import|export … from` a zahadzoval každý špecifikátor `@/` a `@omniroute/open-sse/`, takže nemohol zachytiť cykly dynamických importov a aliasov, ktoré v repozitári prevládali. Opravené: brána teraz prechádza `src` + `open-sse` (5023 súborov), zhromažďuje špecifikátory z AST TypeScriptu (takže `import("…")` sa započítava a `typeof import("…")` v typovej pozícii nie) a rozpoznáva `paths` z tsconfig. Nachádza **14** cyklov, nie 0. Keďže 14 existujúcich cyklov nemožno opraviť v PR pre bránu, `check:cycles` je teraz **západka** (`--ratchet`, strop `metrics.cycles.value = 14` v `quality-baseline.json`, `direction: down`) — blokuje akúkoľvek _regresiu_ a počet môže iba klesať. CI spúšťa `npm run check:cycles:ratchet`. Postupné odstraňovanie prebieha spolu s **A-01**. `check:circular-deps` (dpdm) zostáva informatívny ako širší druhý názor.
- **Zložitosť** — ✅ **HOTOVO** (`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`): jeden prechod ESLintom, počítanie podľa ruleId, aby východiskové hodnoty cyklomatickej zložitosti + max-lines a kognitívnej zložitosti zostali nezávislé; jednotlivé `check:complexity` / `check:cognitive-complexity` zostávajú na lokálne použitie s `--update`.
- **Ochrana `/api` proti halucináciám** — ✅ **HOTOVO** (`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`): jeden inventár FS pre `src/app/api`, openapi-routes + docs-symbols naďalej hlásia výsledky nezávisle; jednotlivé kontroly zostávajú na lokálne spúšťanie.
- **`check:node-runtime` sa spúšťa v 11 úlohách** — ⚠️ **nízke ROI.** Každá beží na samostatnom runneri a kontrola trvá <1 s; celková úspora je približne 10 s za cenu straty lacnej ochrany v každej úlohe. Nestojí to za súvisiace zmeny.
- **`typecheck:noimplicit:core` v úlohe lint CI** — ✅ **odstránené z úlohy lint** (bolo informatívne s `continue-on-error`); blokujúci typový povrch tvoria `typecheck:core` + `check:type-coverage`. Lokálny skript bol zachovaný.

### Prepnúť / rozhodnúť (politika operátora)

- `check:openapi-security-tiers` (informatívne) — ❌ **NEDÁ SA bezproblémovo prepnúť.** Končí s kódom 0, ale upozorňuje, že viacerým trasám `traffic-inspector` pod `LOCAL_ONLY_API_PREFIXES` chýba anotácia `x-loopback-only: true`. Jej vynútenie si najprv vyžaduje pridanie týchto anotácií do `openapi.yaml`.
- `typecheck:noimplicit:core` (informatívne) — do značnej miery ho nahrádza blokujúca západka `check:type-coverage`. Prepnúť na západku alebo odstrániť redundantný druhý prechod `tsc`.
- `test:vitest:ui` (teraz **blokujúce**) — existujúce zlyhania sú explicitne vylúčené vo `vitest.config.ts` pomocou sledovacích komentárov `// #8618`; nové zlyhania spôsobia zlyhanie úlohy.
- `check:secrets` (gitleaks, blokujúca západka zmrazená na 3 zdokumentovaných falošne pozitívnych nálezoch) — pridať tieto 3 prípady do zoznamu povolených a dostať sa na 0 alebo degradovať na informatívnu kontrolu. Prekrýva sa s natívnym skenovaním tajomstiev v GitHube + `check:public-creds`.
- `check:pr-evidence` (blokujúce, prehľadáva prózu v tele PR pomocou grep) — vysoké riziko falošne pozitívnych nálezov; odstránenie oslabí vynucovanie pevného pravidla č. 18, takže ide o skutočné politické rozhodnutie.
- `semgrep` (samostatné informatívne) — pri rodinách OWASP sa prekrýva s CodeQL; napojiť jeho východiskovú hodnotu na západku alebo ho odstrániť.

---

## Súvisiaca dokumentácia

- Dodávateľský reťazec (pôvod, SBOM, Trivy, Scorecard): [`docs/security/SUPPLY_CHAIN.md`](../security/SUPPLY_CHAIN.md)

#### `check-key-completeness` — kontrola zhody množín kľúčov

`scripts/i18n/check-key-completeness.mjs` (`npm run i18n:check-keys`, úloha `i18n-ui-coverage`).
Porovnáva množinu koncových kľúčov každého súboru `src/i18n/messages/<locale>.json` so súborom `en.json` a zlyhá
pri každom chýbajúcom alebo nadbytočnom koncovom kľúči bez ohľadu na to, kedy bol kľúč pridaný. Zástupné hodnoty
`__MISSING__:` sa počítajú ako prítomné (ich obsah rieši kontrola pomeru). Ide o absolútny doplnok
dvoch kontrol založených na rozdieloch/percentách: `check-ui-keys-coverage` vynucuje minimálne 80 % pokrytie pre
každé miestne nastavenie (43 chýbajúcich kľúčov z približne 13 000 sa stále javí ako 99,7 %) a `check-new-key-coverage` posudzuje
iba kľúče, ktoré PR pridáva do `en.json`. Dávka miestnych nastavení sa vygeneruje zo súboru `en.json` v deň,
keď sa vytvorí jej vetva, a prekladá sa niekoľko dní, zatiaľ čo základná vetva naďalej pridáva kľúče; dávkový PR sám
nepridáva žiadny kľúč, takže obe príbuzné kontroly zostali ticho, keď bola dávka 1 (#13044) zlúčená s 43 chýbajúcimi kľúčmi v deviatich
miestnych nastaveniach a dávka 2 (#13660) s 10 chýbajúcimi kľúčmi v ôsmich (2026-09-15). Neúspešnú kontrolu opravte pomocou
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers`; koncový kľúč označený ako `extra`
znamená, že ho zdroj odstránil — odstráňte ho aj z miestneho nastavenia. `--warn` podá hlásenie bez zlyhania.
`--catalog=cli` spustí rovnaké porovnanie nad `bin/cli/locales` (`npm run i18n:check-keys:cli`);
oba kroky sú súčasťou úlohy `i18n-ui-coverage`.

#### `check-new-key-coverage` — kontrola i18n nových kľúčov

Príbuzná kontrola k `check-ui-value-drift`. Tá zachytáva anglickú hodnotu, ktorá bola **prepísaná**,
zatiaľ čo jej preklady zostali nezmenené; táto zachytáva anglický kľúč, ktorý bol **pridaný**,
ale niektoré miestne nastavenia ho nikdy nedostali.

`check-ui-keys-coverage` nedokáže zachytiť tento prípad: vynucuje minimálne percentuálne pokrytie pre každé miestne nastavenie a
jedenásť chýbajúcich kľúčov z približne 13 000 ponechá pokrytie na úrovni 99,9 %. Percentuálna hodnota pre jednotlivé jazyky nedokáže
vyjadriť „táto funkcia bola vydaná bez prekladu“ — celá funkcia sa môže dostať do nového miestneho nastavenia bez
akéhokoľvek textu a hodnota sa vôbec nezmení.

Incident, ktorý táto kontrola zachytáva: 3. fáza Orchestration Canvas preložila svojich jedenásť kľúčov do
42 miestnych nastavení, ktoré v tom čase existovali. O niekoľko hodín neskôr zvýšila dávka jazykov EÚ (#13044) počet miestnych nastavení
v repozitári na 51 a deväť nových (`el`, `et`, `ga`, `hr`, `lt`, `lv`, `mt`, `sl`, `sr`) ich nikdy
nedostalo. `deepMergeFallback` nahradí chýbajúci kľúč angličtinou, takže výsledkom bolo
nepreložené používateľské rozhranie namiesto prázdneho používateľského rozhrania — skutočný problém, ktorý bol zo svojej podstaty tichý.

Rovnako ako príbuzná kontrola si aj táto **uvedomuje rozdiely**: porovnáva angličtinu v základe zlúčenia s pracovným
stromom, takže už existujúce medzery zostávajú zmrazené a zapnutie kontroly nevyžadovalo žiadnu migráciu.

**Značka `__MISSING__:<english>` tejto kontrole nevyhovie (od 2026-09-17).** Predtým predstavovala
zdokumentovaný odklad — behové prostredie použije ako náhradu správnu angličtinu — až kým osem PR s funkciami
dňa 2026-09-16 nepridalo 61 kľúčov a nevložilo značku do všetkých 65 miestnych nastavení namiesto prekladu: táto
kontrola prijala každý z nich, PR nič nezablokovalo a blokujúca kontrola pomeru skutočných prekladov
následne zlyhala na konci vydania všetkým (pt-BR 3,2 % > 2,5 % + 0,5). Značka sa teraz posudzuje
ako chýbajúci preklad. Neúspešnú kontrolu opravte pomocou
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers --batch-size=40` alebo
všetky miestne nastavenia paralelne pomocou `npm run i18n:translate-new-keys` (`scripts/i18n/translate-new-keys.sh`,
bezpečný pri odpojení, odmietne sa spustiť bez premenných prostredia `OMNIROUTE_TRANSLATION_*`). Kľúč, ktorý musí zostať
v angličtine (pevne stanovený názov produktu/modulu/príznaku), patrí do `scripts/i18n/untranslatable-keys.json`,
nikdy za značku. `vi` úplne zakazuje značky (`tests/unit/i18n-vi-completeness.test.ts`).

#### `check-vitest-exclusions` — kontrola odložených testov

Súbor v zozname `exclude` súboru `vitest.config.ts` je test, ktorý sa nespúšťa, no každému, kto číta
strom, sa javí ako pokrytie. Za komentárom sa nahromadilo šesťdesiatdva súborov
`// #8618 — pre-existing failure; remove this exclusion when fixed`. Problém #8618 bol uzavretý
2026-08-11, zatiaľ čo zoznam, ktorý sledoval, narástol zo 45 položiek na 62, pričom každá nová položka zdedila komentár
odkazujúci na už uzavretý problém. Keď sa zoznam napokon zmeral súbor po súbore (#13204), **51 zo 62
prešlo v aktuálnom strome bez akejkoľvek zmeny zdrojového kódu**.

Kontrola vyžaduje, aby každá výnimka odkazujúca na skutočný súbor (a) uvádzala sledovaný problém a
(b) bola uvedená v `config/quality/vitest-exclusions.json` so svojím nameraným stavom, takže jej pridanie predstavuje
kontrolovateľný rozdiel vo vyhradenom súbore namiesto ďalšieho riadka v poli so 60 položkami. Zámerne
opätovne nespúšťa vylúčené testy — trvá to približne 10 minút a patrí to do periodickej úlohy;
inventár zaznamenáva, kedy bol každý z nich naposledy zmeraný.
