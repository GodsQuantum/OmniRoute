# Quality Gates Reference (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/QUALITY_GATES.md) · 🇪🇹 [am](../../../am/docs/architecture/QUALITY_GATES.md) · 🇸🇦 [ar](../../../ar/docs/architecture/QUALITY_GATES.md) · 🇦🇿 [az](../../../az/docs/architecture/QUALITY_GATES.md) · 🇧🇬 [bg](../../../bg/docs/architecture/QUALITY_GATES.md) · 🇧🇩 [bn](../../../bn/docs/architecture/QUALITY_GATES.md) · 🇧🇦 [bs](../../../bs/docs/architecture/QUALITY_GATES.md) · 🇨🇿 [cs](../../../cs/docs/architecture/QUALITY_GATES.md) · 🇩🇰 [da](../../../da/docs/architecture/QUALITY_GATES.md) · 🇩🇪 [de](../../../de/docs/architecture/QUALITY_GATES.md) · 🇬🇷 [el](../../../el/docs/architecture/QUALITY_GATES.md) · 🇪🇸 [es](../../../es/docs/architecture/QUALITY_GATES.md) · 🇪🇪 [et](../../../et/docs/architecture/QUALITY_GATES.md) · 🇮🇷 [fa](../../../fa/docs/architecture/QUALITY_GATES.md) · 🇫🇮 [fi](../../../fi/docs/architecture/QUALITY_GATES.md) · 🇫🇷 [fr](../../../fr/docs/architecture/QUALITY_GATES.md) · 🇮🇪 [ga](../../../ga/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [gu](../../../gu/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ha](../../../ha/docs/architecture/QUALITY_GATES.md) · 🇮🇱 [he](../../../he/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [hi](../../../hi/docs/architecture/QUALITY_GATES.md) · 🇭🇷 [hr](../../../hr/docs/architecture/QUALITY_GATES.md) · 🇦🇲 [hy](../../../hy/docs/architecture/QUALITY_GATES.md) · 🇮🇩 [id](../../../id/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ig](../../../ig/docs/architecture/QUALITY_GATES.md) · 🇮🇹 [it](../../../it/docs/architecture/QUALITY_GATES.md) · 🇯🇵 [ja](../../../ja/docs/architecture/QUALITY_GATES.md) · 🇬🇪 [ka](../../../ka/docs/architecture/QUALITY_GATES.md) · 🇰🇭 [km](../../../km/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [kn](../../../kn/docs/architecture/QUALITY_GATES.md) · 🇰🇷 [ko](../../../ko/docs/architecture/QUALITY_GATES.md) · 🇱🇹 [lt](../../../lt/docs/architecture/QUALITY_GATES.md) · 🇱🇻 [lv](../../../lv/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ml](../../../ml/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [mr](../../../mr/docs/architecture/QUALITY_GATES.md) · 🇲🇾 [ms](../../../ms/docs/architecture/QUALITY_GATES.md) · 🇲🇹 [mt](../../../mt/docs/architecture/QUALITY_GATES.md) · 🇲🇲 [my](../../../my/docs/architecture/QUALITY_GATES.md) · 🇳🇵 [ne](../../../ne/docs/architecture/QUALITY_GATES.md) · 🇳🇱 [nl](../../../nl/docs/architecture/QUALITY_GATES.md) · 🇳🇴 [no](../../../no/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [or](../../../or/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [pa](../../../pa/docs/architecture/QUALITY_GATES.md) · 🇵🇭 [phi](../../../phi/docs/architecture/QUALITY_GATES.md) · 🇵🇱 [pl](../../../pl/docs/architecture/QUALITY_GATES.md) · 🇵🇹 [pt](../../../pt/docs/architecture/QUALITY_GATES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/QUALITY_GATES.md) · 🇷🇴 [ro](../../../ro/docs/architecture/QUALITY_GATES.md) · 🇷🇺 [ru](../../../ru/docs/architecture/QUALITY_GATES.md) · 🇱🇰 [si](../../../si/docs/architecture/QUALITY_GATES.md) · 🇸🇰 [sk](../../../sk/docs/architecture/QUALITY_GATES.md) · 🇸🇮 [sl](../../../sl/docs/architecture/QUALITY_GATES.md) · 🇷🇸 [sr](../../../sr/docs/architecture/QUALITY_GATES.md) · 🇸🇪 [sv](../../../sv/docs/architecture/QUALITY_GATES.md) · 🇰🇪 [sw](../../../sw/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ta](../../../ta/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [te](../../../te/docs/architecture/QUALITY_GATES.md) · 🇹🇭 [th](../../../th/docs/architecture/QUALITY_GATES.md) · 🇹🇷 [tr](../../../tr/docs/architecture/QUALITY_GATES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/QUALITY_GATES.md) · 🇵🇰 [ur](../../../ur/docs/architecture/QUALITY_GATES.md) · 🇺🇿 [uz](../../../uz/docs/architecture/QUALITY_GATES.md) · 🇻🇳 [vi](../../../vi/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [yo](../../../yo/docs/architecture/QUALITY_GATES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/QUALITY_GATES.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/QUALITY_GATES.md)

---

Ez a dokumentum az OmniRoute összes CI-minőségi kapujának mérvadó referenciája.
Ismerteti az egyes kapukat, az általuk ellenőrzött szempontokat, azt, hogy melyik CI-feladatban futnak, hogy
küszöbérték-alapvonalat vagy megfelelt/nem felelt meg szabályt használnak-e, valamint hogy blokkolják-e a buildet, vagy csak tájékoztató jellegűek.

Rövid összefoglalóért és az engedélyezési lista szabályzatáért lásd az „Quality Gates & Ratchets” szakaszt
az `AGENTS.md` fájlban. Ugyanezen rendszer kritikai értékelését, érettségi besorolását és eszközfüggetlen
replikációs tervét lásd a
[Minőségi kapuk kézikönyvében](../ops/QUALITY_GATE_PLAYBOOK.md).

---

## Gate-leltár és végrehajtási profilok

### Jelöltelfogadás

A CI és a Quality Gates munkafolyamatok mindegyike stabil verdictet ad ki: `Gate / CI` és
`Gate / Quality`. Verziózott elfogadási szabályzatuk minden upstream jobot kötelezőként vagy
tanácsadóként sorol fel. Egy alkalmazható kötelező jobnak sikeresnek kell lennie: a hiányzó,
megszakított, kihagyott, függőben lévő és ismeretlen eredmények nem alapozhatják meg a PASS-t.
Érvényes docs-only vagy catalog-only besorolás alkalmazhatatlanná tehet egy kódsávot;
a piszkozat (draft) PR nem elfogadott jelölt. A `hotfix` címke nem mentesít a bizonyíték alól.

Mindkét munkafolyamat lefedi a main/release ágakba irányuló PR-eket, a `main` ágra történő
push-okat, a manuális indítást (dispatch) és a merge-group eseményeket. Push, dispatch és
merge-group esetén a teljes kiválasztás lefut. A `release/**` ágakra történő push-ok nem indítják
el őket (2026-10-18): minden változás már lefuttatta a mátrixot a saját PR-jén, és az egyesített
kombináció a Release-Green feladata (`docs/ops/RUNNER_BOX.md` → Hosted lane). A forkok és a
merge groupok hosztolt runnereket használnak azokhoz a jobokhoz, amelyek egyébként self-hosted
runnereket választanának; a bevezetés előtt ellenőrizni kell a megfelelő hosztolt kapacitást.

Minden JSON-nyugta azonosítja a kicsekkolt SHA-t, a munkafolyamat-futtatást és a próbálkozást.
A CLI elutasítja a checkout/esemény SHA-eltérését. A munkafolyamat-tesztek a szabályzati
tagságot a verdict job `needs` listájához kötik, így egy új vagy eltávolított sáv nem tűnhet el
észrevétlenül. A nyugták a saját munkafolyamatukra terjednek ki, nem a publikálásra, a telepítésre
vagy egy meglévő tanácsadó szkenner belső működésére. Mindkét ellenőrzésnév aktiválása az
ágszabályokban külön adminisztratív változás; ezen jobok hozzáadása önmagában nem védi az ágat.

### Statikus szkennelési leltár

A verziózott npm-aliasleltár és a statikus szkennelés tagsága a
`config/quality/gate-manifest.json` fájlban található. Futtassa az `npm run check:gate-manifest`
parancsot a szkriptnevek és a pontos parancsok `package.json`-nel való összevetéséhez; a
hozzáadások, eltávolítások és a parancseltérés megbuktatják mind a helyi hookot, mind a CI
változásbesorolási jobjait. Egy alias nem munkafolyamat-job, mátrixpéldány vagy teszteset: ezek
a darabszámok nem mutathatók be felcserélhetőként.

Használja az `npm run quality:scan -- --list` vagy az `npm run quality:scan:fast -- --list`
parancsot a kiválasztott aliasok végrehajtás nélküli megtekintéséhez. A futtató az npm belépési
pontot hívja, így annak futtatókörnyezete (beleértve a Bunt, ahol konfigurálva van) megmarad.
A manifest az e profilokon kívüli aliasokat külön meghívottként rögzíti, a karbantartási
parancsok pedig tiltottak az írásvédett szkennelési profilokban.

Ezek a profilok csak a statikus szkennelésre terjednek ki. Nem tanúsítják a termékteszteket,
a lefedettséget, a csomagolást, a külső ellenőrzéseket vagy egy jelölt teljes kiadási
elfogadását. A munkafolyamat-elfogadás a hivatkozott `config/quality/admission-policy.json` és
`scripts/quality/admission-verdict.mjs` fájlokat használja. A Release-observer profilok
különállók maradnak; az alkalmazható ellenőrzéseiket és nyugtáikat függetlenül vizsgálja meg.
Az alábbi szöveges leltár referencia, nem bizonyítéka annak, hogy egy gate ténylegesen lefutott.

A szkriptek a `scripts/check/` (szabályzati gate-ek) és a `scripts/quality/` (ratchet-motor)
alatt találhatók. A CI hiteles forrása a `.github/workflows/ci.yml`.

### Release-PR gyorsított útvonal (`quality.yml`)

A `.github/workflows/quality.yml` kiegészíti a CI-t a main/release PR-eken, a `main` ágra
irányuló push-okon, a dispatchen és a merge groupokon. A PR-ek útvonalszűrt gyors ellenőrzéseket
használnak. A véglegesen letiltott duplikált build eltávolításra került; a valódi
build/package/boot ellenőrzések a CI-ban maradnak. Az unit suite és a vitest csak a CI-ban fut
(`Unit Tests (N/8)`, `Vitest`): a korábbi `Unit Tests fast-path` és `Vitest (fast-path)` jobok
ugyanazokat a parancsokat ismételték minden PR-en, miután a CI elkezdett futni a release
PR-eken, és 2026-10-26-án eltávolításra kerültek.

| Job                                              | Hatókör                                                                                                                                                                                                             | Blokkoló                      |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| `Docs Gates (fast-path)`                         | Dokumentációs/kód PR-ek; API-dokumentációs hivatkozások és docs-all                                                                                                                                                 | Igen                          |
| `Fast Quality Gates`                             | Kód PR-ek; statikus ellenőrzések, typecheck, dashboard typecheck, érintett unit tesztek                                                                                                                             | Igen                          |
| `Forgotten sibling tests`                        | Kód PR-ek; a módosult modulok statikus fogyasztókhoz és jelölt testvértesztekhez követve; a barrel- és dinamikus importútvonalak tanácsadó diagnosztikaként kerülnek jelentésre, hivatkozott allowlist-kivételekkel | **Tanácsadó**                 |
| `No new ESLint warnings`                         | Kód PR-ek; elnyomástudatos lint-őr                                                                                                                                                                                  | Igen, beleértve a forkokat is |
| `Merge integrity (changelog + generated skills)` | Nem piszkozat PR-ek; changelog és generált skill szinkronizáció                                                                                                                                                     | Igen, beleértve a forkokat is |

#### Elfelejtett testvértesztek jelentése

Az `npm run check:forgotten-sibling-tests` újrahasznosítja a teszt-hatástérkép mögötti
importfeloldót. Minden módosult termelési modulhoz determinisztikus
`changed module/symbol -> static consumer -> candidate sibling test` láncokat jelent, ha a
jelölt teszt hiányzik a pull request diffjéből. A Markdown-összefoglaló és a JSON-eredmény a
`forgotten-sibling-tests` munkafolyamat-artifactként kerül megőrzésre kalibráció céljából,
bármilyen blokkoló bevezetés előtt.

A barrel re-exportok és a dinamikus importok kizárólag feloldási diagnosztikák; soha nem eredményeznek blokkoló találatot. A felülvizsgált kivételek a `config/quality/forgotten-sibling-allowlist.json` fájlban találhatók. Minden bejegyzésnek meg kell neveznie a fogyasztót és a jelölt tesztet, konkrét indoklást kell adnia, és hivatkoznia kell egy GitHub issue-ra vagy pull requestre. A hibás formátumú bejegyzések zártan hiúsulnak meg (fail-closed). A kivételek nem nyomhatnak el egy törölt jelölt tesztet vagy egy `.skip`/`.todo` hozzáadását tartalmazó diffet; az assertion-gyengítés és az egyéb maszkolás továbbra is a függetlenül blokkoló `check:test-masking` kapu hatáskörébe tartozik.

### Feladat: `lint`

Minden `main` felé irányuló PR-en lefut. Hiba esetén blokkolja a merge-et.

| Script (`npm run ...`)            | Ellenőrzi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Blokkoló                                            |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| `check:node-runtime`              | A Node.js verzió a támogatott tartományon belül van                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Igen                                                |
| `check:cycles`                    | Körkörös importok a teljes `src/` + `open-sse/` kódállományban (AST-alapú, a tsconfig `paths` feloldva). A bare változat 1-es kilépési kóddal tér vissza, amikor bármilyen kör létezik (#15281 óta fail-closed), és felsorolja az SCC-ket. A `check:cycles:ratchet` (amit a CI futtat) blokkol, ha a szám meghaladja a `quality-baseline.json`-ban szereplő `metrics.cycles` plafont — jelenleg 14, `direction: down`, tehát csak csökkenhet (#15159 G-01/G-02)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Igen (ratchet)                                      |
| `check:boundary`                  | `open-sse → src` csatolás: egyedi fájlról-fájlra importok a motorból az alkalmazásba (`scripts/quality/measure-boundary.mjs`; az éllista a v4-es core/module-split rendbehozatali backlogja). Bare = tanácsadó jelentés (ugyanaz, mint a `quality:boundary`). A `check:boundary:ratchet` (amit a CI futtat, és a `quality.yml` fast-gates ratchet-hurkában is szerepel) blokkol, ha a szám meghaladja a `quality-baseline.json`-ban szereplő `metrics.boundaryOpenSseToSrc` plafont — kezdeti értéke a mért 771, `direction: down`; az `--update` csak csökkentheti; PR-eken bázishoz viszonyított (`--base-ref`, lásd alább)                                                                                                                                                                                                                                                                                                                                                                       | Igen (ratchet)                                      |
| `check:route-validation:t06`      | Zod-sémák jelenléte az összes útvonalon (Tier 6 irányelv)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Igen                                                |
| `check:any-budget:t11`            | A `@ts-expect-error // any` száma nem haladja meg a keretet (11. szintű racsni)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Igen                                                |
| `check:provider-consistency`      | Minden `providers.ts`-ben szereplő providerhez tartozik egy megfelelő bejegyzés a `providerRegistry.ts`-ben (és fordítva, az engedélyezőlistán belül)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Igen                                                |
| `check:model-lifecycle`           | A három kézzel karbantartott útválasztási tábla konzisztens marad a repo-ba bejelölt életciklus-pillanatképpel (#11503): a `FITNESS_TABLE` (`taskFitness.ts`) nem ad pontszámot olyan kivont azonosítóra, amelyet a `REGISTRY` útválaszthat; minden `BUILT_IN_ALIASES`-cél jelen van a `REGISTRY`-ben, és hiányzik a kivont azonosítók pillanatképéből; minden kivont azonosító, amely még szerepel a `REGISTRY`-ben, továbbítva van, vagy fel van sorolva az `allowedRetiredInCatalog`-ban; és egyetlen `DEFAULT_DEGRADATION_MAP`-forrás vagy -cél sem jelenik meg kivontként ebben a pillanatképben. Ez nem bizonyítja, hogy egy modellt jelenleg egy élő upstream szolgál ki. Offline — a `config/quality/model-lifecycle.json`-hoz hasonlít, amelyet kézzel frissítenek az `npm run quality:refresh-model-lifecycle` paranccsal (hálózatot igényel; nincs bekötve a CI-be). Az `allowedRetiredInCatalog` egy leépítési racsni: bejegyzést csak követőhibával (tracking issue) szabad hozzáadni. | Igen                                                |
| `check:fetch-targets`             | Minden kliensoldali `src/`-beli `fetch("/api/...")` egy valódi `route.ts`-re oldódik fel                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Igen                                                |
| `check:deps`                      | A repo összes `package.json`-jában szereplő valamennyi `npm install`-lal telepíthető függőség benne van a `dependency-allowlist.json`-ban; az új, nem rögzített verziójú (unpinned) vagy slopsquatolt csomagok jelölve vannak                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Igen                                                |
| `audit:deps`                      | `npm audit` (root + electron) — nincsenek magas/kritikus besorolású tanácsadók (átfed az osv `check:vuln-ratchet`-tel; lásd a Racionalizálási backlogot)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Igen                                                |
| `check:lockfile`                  | `package-lock.json` integritás — https registry, integrity hash-ek, nincsenek host-felülírások                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Igen                                                |
| `check:licenses`                  | SPDX-licenc-engedélyezőlista az éles környezetbe kerülő függőségekhez                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Igen                                                |
| `check:tracked-artifacts`         | Nincsenek build-artefaktumok / commitolt `node_modules` szimbolikus linkek (a husky pre-commit hookban is fut; a pre-push szándékosan könnyű — #6716)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Igen                                                |
| `check:ai-attribution`            | Nincs AI/bot `Co-Authored-By` trailer vagy AI-generálásra utaló lábléc a PR-commitokban, a címben vagy a leírásban — 16. szigorú szabály (a `quality.yml` fast-gates ciklusában fut PR→`release/**` esetén — az esemény payloadját olvassa, PR-eken kívül no-op —, valamint PR-only lépésként a `ci.yml` lintben PR→`main` esetén; továbbá a husky `commit-msg` hookban; emberi társszerzők engedélyezettek; #14436)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `check:vitest-exclusions`         | Minden Vitest-kizárás megnevez egy követő issue-t, és szerepel a `config/quality/vitest-exclusions.json` fájlban (#13204)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Igen                                                |
| `check:file-size`                 | A forrásfájlok (`.ts`/`.tsx` a `src/`, `open-sse/`, `electron/`, `bin/` mappákban) a `cap` korláton belül maradnak, a tesztfájlok (`*.test.ts(x)`) pedig a `testCap` korláton belül; a `file-size-baseline.json` fájlban befagyasztott (`frozen` / `testFrozen`) fájlok nem nőhetnek a rögzített méretük fölé                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Igen                                                |
| `check:error-helper`              | A végrehajtókban/kezelőkben található hibaválaszok a `buildErrorBody()` / `sanitizeErrorMessage()` függvényt használják (12. szigorú szabály)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Igen                                                |
| `check:migration-numbering`       | A migrációs SQL-fájlok számozása folyamatos, nincsenek kihagyások vagy ismétlődések                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Igen                                                |
| `check:public-creds`              | Nincsenek literális OAuth `client_id`/`client_secret` értékek vagy Firebase Web-kulcsok a `publicCreds.ts` fájlon kívül (11. szigorú szabály)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Igen                                                |
| `check:db-rules`                  | Nincs nyers SQL a `src/lib/db/` modulokon kívül; nincsenek gyűjtőmodul-importok a `localDb.ts` fájlból (2./5. szigorú szabály)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Igen                                                |
| `check:known-symbols`             | A szolgáltatói végrehajtók, az útválasztási stratégiák és a fordítók diszpécsertábláiban regisztrált elemek megegyeznek a lemezen található fájlokkal — nincsenek árva vagy deklarálatlan szimbólumok                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Igen                                                |
| `check:route-guard-membership`    | Minden gyermekfolyamatot indító útvonalat besorol az `isLocalOnlyPath()` (15./17. szigorú szabály)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Igen                                                |
| `check:test-discovery`            | A repó minden `*.test.ts` / `*.spec.ts` fájlját legalább egy tesztfuttató begyűjti (szigorítás: a `test-discovery-baseline.json` fájlban szereplő árva fájlok listája csak rövidülhet)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Igen                                                |
| `check:test-tla-order`            | A `tests/unit` alatti egyetlen `node:test` fájl sem regisztrálhat tesztet úgy, hogy ezt követően felső szintű `await` utasítást hajt végre, majd további teszteket regisztrál (#18045; szigorítás: a `test-tla-order-allowlist.json` engedélyezési lista csak rövidülhet)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Igen                                                |
| `check:agent-skills-sync`         | A generált agent-skills összetevők megfelelnek a forráskatalógusuknak (nincs eltérés)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `check:provider-asset-provenance` | A szolgáltatói logókhoz/összetevőkhöz rögzített eredetbejegyzés tartozik                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `lint:json`                       | A JSON-konfigurációs fájlok feldolgozhatók, és megfelelnek a repó lintelési szabályainak                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `typecheck:core`                  | TypeScript-fordítás hibák nélkül (csak tájékoztató jellegű figyelmeztetések)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Igen                                                |
| `typecheck:noimplicit:core`       | Szigorú `noImplicitAny` — előremutató; számos már meglévő hívási helyen továbbra is szükség van annotációkra                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | **Tájékoztató jellegű** (`continue-on-error: true`) |
| `check:dashboard-typecheck`       | A `tsc` a `src/app/(dashboard)/**` hatókörre szűkítve fut (#7033) — a `typecheck:core` kurált, 27 fájlos engedélylistája egyetlen dashboard-TSX-et sem tartalmaz, és a `next build` sem végez rajta típusellenőrzést (a `next.config.mjs` `ignoreBuildErrors: true` beállítást ad meg), így az ottani árvaazonosító-regressziók (#6625/#6909) láthatatlanok voltak a CI számára. Egy befagyasztott, fájlonkénti/TS-kódonkénti darabszám-alapvonalhoz veti össze az eredményt (`config/quality/dashboard-typecheck-baseline.json`, ugyanaz az elavulást kikényszerítő minta, mint a `check:known-symbols` esetében) — csak az alapvonalbeli darabszámot meghaladó ÚJ hibák buktatják meg a kaput; egy már meglévő hiba javításakor a `--update` kapcsolóval lehet a ratchetet lefelé szorítani.                                                                                                                                                                                                      | Igen                                                |

### Feladat: `quality-gate`

A `test-coverage` után fut. Hiba esetén blokkolja az egyesítést.

| Szkript                      | Ellenőrzött feltétel                                                                                                                                                                                             | Blokkoló                   |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| `quality:collect`            | Létrehozza a `quality-metrics.json` fájlt (ESLint-figyelmeztetések száma, lefedettség az egyesített shard-jelentésből)                                                                                           | Igen (a ratchet előtt fut) |
| `quality:ratchet`            | A `quality-baseline.json` egyik metrikája sem romlott (ESLint-figyelmeztetések ≤ alapvonal; lefedettség ≥ alapvonal)                                                                                             | Igen                       |
| `check:duplication`          | A kódduplikáció (jscpd@4) nem haladja meg a `quality-baseline.json`-beli alapvonalat                                                                                                                             | Igen                       |
| `check:complexity`           | A fájlszintű ciklikus komplexitás nem lépi túl a korlátot (core ESLint `complexity` + `max-lines-per-function`)                                                                                                  | Igen                       |
| `check:cognitive-complexity` | Kognitívkomplexitás-ratchet (`eslint-plugin-sonarjs`) — külön ESLint-futtatás; a CI a kettőt egyetlen `check:complexity-ratchets` lépésként egyesítve futtatja                                                   | Igen                       |
| `check:dead-code`            | A nem használt exportokra/fájlokra vonatkozó ratchet (knip) nem romlik az alapvonalhoz képest                                                                                                                    | Igen                       |
| `check:compression-budget`   | Tömörítési benchmark-keret — a motoronkénti tokenmegtakarítási alsó korlátok nem romolhatnak                                                                                                                     | Igen                       |
| `check:type-coverage`        | A típusossági százalék ratchetje (`type-coverage`) nem romlik; nagyrészt magába foglalja a `typecheck:noimplicit:core` ellenőrzést                                                                               | Igen                       |
| `check:codeql-ratchet`       | A nyitott CodeQL-riasztások száma nem romlik (`gh api` hívással olvassa ki; token hiányában szabályosan kihagyja magát) — a frissítési ritmust és a manuális indítást lásd lentebb a „CodeQL ratchet” szakaszban | Igen                       |

### Feladat: `quality-extended`

A teljes feladat tanácsadó jellegű (`continue-on-error: true`). Az npm-alapú ratchetek valóban
lefutnak; a külső szkennerek a `gh release download` segítségével települnek, és önmaguktól
kihagyják magukat (exit 0), ha a bináris még nem érhető el.

| Szkript                  | Ellenőrzött feltétel                                                                                                                                                                                                                           | Blokkoló                                             |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `check:circular-deps`    | Nincsenek körkörös függőségek (dpdm)                                                                                                                                                                                                           | **Tanácsadó**                                        |
| `check:bundle-size`      | A bundle-méret nem lépi túl a korlátot                                                                                                                                                                                                         | **Tanácsadó**                                        |
| `check:secrets`          | Titkos adatok keresése (gitleaks) — kihagyja, ha a bináris hiányzik                                                                                                                                                                            | **Tanácsadó**                                        |
| `check:vuln-ratchet`     | A függőségek sebezhetőségei (osv-scanner) nem romlanak — kihagyja, ha a bináris hiányzik                                                                                                                                                       | **Tanácsadó**                                        |
| `check:workflows`        | Workflow-lint (actionlint + zizmor); a hiányzó/hibás szkennerek, az érvénytelen jelentések vagy a hiányzó ratchet-alapvonal INCOMPLETE státusszal megbuknak. Az érvényes találatok a kiválasztott strict/advisory/ratchet szabályzatot követik | A futtatás kötelező; a zizmor ratchet CI-ban blokkol |
| `check:openapi-breaking` | A nyilvános API-szerződés (`openapi.yaml`) kompatibilitástörő változásai a bázisbranchhez képest (oasdiff) — `openapiBreaking=N` értéket bocsát ki; kihagyja, ha az oasdiff hiányzik, vagy a bázis-specifikáció nem feloldható                 | **Tanácsadó**                                        |

### Feladat: `docs-sync-strict`

Minden `main` felé irányuló PR-en lefut. Hiba esetén blokkolja az egyesítést.

| Szkript                        | Ellenőrzi                                                                                                                                                                                      | Blokkoló                       |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| `check:docs-all`               | Meta-kapu, amely egymás után lefuttatja az alábbi 6 alkapot                                                                                                                                    | Igen                           |
| ↳ `check:docs-sync`            | CHANGELOG / OpenAPI / llm.txt verziókonzisztencia                                                                                                                                              | Igen                           |
| ↳ `check:docs-counts`          | A prózában szereplő darabszámok (szolgáltatók száma, migrációk száma stb.) a tényleges darabszámok racsnis ablakán belül maradnak                                                              | Igen                           |
| ↳ `check:env-doc-sync`         | A `.env.example` minden környezeti változója szerepel egy dokumentációs táblázatban, és fordítva                                                                                               | Igen                           |
| ↳ `check:deprecated-versions`  | Nincsenek elavult verziósztringek a dokumentációban                                                                                                                                            | Igen                           |
| ↳ `check:doc-links`            | A dokumentáció belső markdown-hivatkozásai valós fájlokra oldódnak fel (`[text]`/`(path)` formátum)                                                                                            | Igen                           |
| ↳ `check:fabricated-docs`      | A dokumentációban hivatkozott route-ok, környezeti változók, CLI-parancsok, hook-nevek és fájlútvonalak léteznek a kódbázisban. `--strict` kapcsolóval kemény kapu; kapcsoló nélkül soft-fail. | Igen (CI-ben `--strict` révén) |
| `check:cli-i18n`               | A CLI-parancsok sztringjei minden i18n locale-fájlban jelen vannak                                                                                                                             | Igen                           |
| `check:openapi-coverage`       | Az OpenAPI-specifikáció a valós route-ok legalább egy racsnizált minimumszintjét lefedi                                                                                                        | Igen                           |
| `check:openapi-security-tiers` | Az `openapi.yaml` biztonsági szintjelölései konzisztensek a `routeGuard.ts` osztályozásaival                                                                                                   | **Tanácsadó**                  |
| `check:openapi-routes`         | Az `openapi.yaml` minden útvonala valós `route.ts`-re oldódik fel (hallucináció elleni védelem)                                                                                                | Igen                           |
| `check:docs-symbols`           | A `docs/**/*.md` fájlok minden `/api/...` hivatkozása valós `route.ts`-re oldódik fel (hallucináció elleni védelem)                                                                            | Igen                           |
| `i18n translation drift`       | Lefordítatlan kulcsok az i18n locale-fájlokban — csak figyelmeztetés                                                                                                                           | **Tanácsadó**                  |

### Job: `i18n-ui-coverage`

| Szkript                               | Ellenőrzi                                                                                                                                                                                                        | Blokkoló      |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `check-ui-keys-coverage` (beágyazott) | A UI i18n kulcslefedettség ≥ 65%                                                                                                                                                                                 | Igen          |
| `check-ui-value-drift` (beágyazott)   | Egy átírt angol **érték** nem hagy maga után elavult fordítást                                                                                                                                                   | Igen          |
| `check-new-key-coverage` (beágyazott) | Egy **új** angol kulcs minden locale-ban le van fordítva — a `__MISSING__:` jelölő elutasításra kerül                                                                                                            | Igen          |
| `check-translation-ratio`             | A valós fordítási arány locale-onként (az angollal azonos / helykitöltő / hiányzó levelek az engedélyezési listán kívül) nem haladhatja meg a `config/quality/i18n-translation-baseline.json` értékét + ráhagyás | **Tanácsadó** |

Szükséges hozzá a `fetch-depth: 0` — a value-drift kapu az `en.json` fájlt a merge base-hez képest diff-eli.

#### `check-ui-value-drift` — az elavult fordítások kapuja

Elkapja azt az egyetlen i18n-regressziót, amelyet a többi kapu szerkezetileg képtelen látni:
egy angol értéket átírnak, és az _előző_ angol szövegből származó fordítások lemaradnak,
így a nem angol anyanyelvű felhasználók továbbra is magabiztosan megfogalmazott, ám mára hibás szöveget olvasnak.

Ez élesben is bekövetkezett. Az `oauthModal.googleOAuthWarning` átírásra került, amikor az Antigravity
bejelentkezési segéd bekerült (#5203); **a 43 locale-ból 39** megtartotta azt a szöveget, amely az üzemeltetőket arra kérte, hogy „másolják ki a teljes URL-t, és illesszék be alább" — egy folyamat, amely ennél a szolgáltatónál nem fejezhető be. A #8463-ig észrevétlen maradt, mert:

- a `sync-ui-keys` csak a **hiányzó** kulcsokat tölti fel utólag, soha nem az **elavult** állapotúakat;
- a `check-ui-keys-coverage` a kulcsok _jelenlétét_ számolja, így egy elavult fordítás lefedettként pontozódik;
- a `check-translation-drift` a `docs/i18n/<locale>/**.md` dokumentációs tükrözéseket követi —
  soha nem olvassa a `src/i18n/messages/*.json` fájlokat. A `docs-sync-strict` jobban a
  2026-09-es újraszinkronizálás óta blokkoló: szerkessz egy alapdokumentumot → `npm run i18n:run -- --files=<doc>` (szekciószintű, olcsó).

**Diff-alapú, nem baseline-re épülő.** Az `en.json` fájlt a merge base-en hasonlítja össze a
working tree-vel; minden olyan kulcs esetében, amelynek angol értéke megváltozott, bármely
locale, amely még érintetlen fordítást tartalmaz, elavultnak számít. Ez szándékosan
**befagyasztja a már meglévő adósságot** — egy diff nem tudja megállapítani, hogy egy régi
fordítás melyik korábbi angol szövegből származik, ezért a kapu csak azt ítéli meg, amit az
aktuális változás érint. Az alternatíva (kulcsonkénti hash-baseline) egy ~600 KB-os generált
fájlt jelentene — a legnagyobb meglévő baseline háromszorosát —, amely minden i18n PR-nél
változna.

Kétféleképpen lehet kielégíteni:

1. frissítse az érintett fordításokat, vagy
2. állítsa őket `__MISSING__:<new english>` értékre — a futtatókörnyezet ekkor a javított
   angol szöveget szolgáltatja (`src/i18n/request.ts::deepMergeFallback`, #7258), a kulcs pedig
   fordításra várakozik.

Ha a szöveg **jelentése** változott, inkább **nevezze át a kulcsot**: egy új kulcs nem
örökölhet elavult fordítást. Ez az a minta, amelyet a #8463 is követett.

```bash
npm run i18n:check-value-drift          # szigorú (ezt futtatja a CI)
npm run i18n:check-value-drift:warn     # csak jelentés
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

0-val lép ki `SKIP reason=base-unresolved` üzenettel, ha az alap-katalógus nem olvasható
(shallow clone a base ref nélkül), a `check-openapi-breaking` mintáját követve.

### Feladat: `i18n`

Teljes i18n-validációs mátrix (locale-nként egy job). A teljes feladat tanácsadó jellegű.

| Szkript                         | Mit ellenőriz                        | Blokkoló                                                 |
| ------------------------------- | ------------------------------------ | -------------------------------------------------------- |
| `validate_translation.py quick` | A fordítások teljessége locale-nként | **Tanácsadó** (`continue-on-error: true` a teljes jobon) |

### Feladat: `pr-test-policy`

Csak pull requesteken fut.

| Szkript                | Mit ellenőriz                                                                                                                                               | Blokkoló |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `check:pr-test-policy` | A `src/`, `open-sse/`, `electron/` vagy `bin/` alatt produkciós kódot módosító PR-eknek teszteket kell tartalmazniuk vagy frissíteniük (8. szigorú szabály) | Igen     |
| `check:test-masking`   | A módosított tesztfájlok nem csökkenthetik a nettó assert-számot, és nem adhatnak hozzá `assert.ok(true)` tautológiákat                                     | Igen     |
| `check:pr-evidence`    | A PR törzse teszt-/VPS-bizonyítékot idéz a változáshoz (a 18. szigorú szabályt gépesíti a PR szövegének grepelésével — törékeny, lásd Backlog)              | Igen     |

### Feladat: `test-vitest`

A `build` után fut. Hiba esetén blokkolja a merge-et.

| Csomag           | Mit ellenőriz                                              | Blokkoló                                                                                                                     |
| ---------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `test:vitest`    | MCP-szerver (110 eszköz), autoCombo, cache — vitest runner | Igen                                                                                                                         |
| `test:vitest:ui` | UI-komponenstesztek — vitest runner                        | **Blokkoló** — a már meglévő hibák explicit módon ki vannak zárva a `vitest.config.ts`-ben; az új hibák megbuktatják a jobot |

### Éjszakai munkafolyamatok (ütemezett, tanácsadó)

Ezek cron-ütemezés szerint futnak (valamint `workflow_dispatch` esetén), PR-eken soha. Mindegyik tanácsadó jellegű.

| Munkafolyamat          | Mit ellenőriz                                                                                                                                                                      | Blokkoló      |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `nightly-property`     | fast-check property-tesztek véletlenszerű seed-del és magas futtatási számmal                                                                                                      | **Tanácsadó** |
| `nightly-resilience`   | heap-növekedési kapu, káosz-alapú hibainjektálás, k6 load/soak                                                                                                                     | **Tanácsadó** |
| `nightly-llm-security` | promptfoo injection-védelem (blokkoló mód) + garak-próbák (provider secret nélkül kihagyva)                                                                                        | **Tanácsadó** |
| `nightly-schemathesis` | OpenAPI szerződés-fuzzing (schemathesis) egy élő OmniRoute ellen a `docs/openapi.yaml` alapján — felszínre hozza a specifikációsértéseket / kezeletlen 500-as hibákat (Fase 8 B.4) | **Tanácsadó** |
| `nightly-mutation`     | Stryker mutációsteszt-pontszám a gyors unit-sávon — a túlélő mutánsok gyenge asserteket tárják fel                                                                                 | **Tanácsadó** |
| `nightly-compat`       | Node motor-kompatibilitási mátrix a támogatott `engines.node` tartományokon át                                                                                                     | **Tanácsadó** |

A teljesítmény-baseline-ok (heap, TTFB, build-idő) rögzítésre kerülnek, nem kapuzásra: lásd [`PERF_BASELINE.md`](../ops/PERF_BASELINE.md) (`npm run perf:lts-baseline`).

---

## Gyorsasági fázis (2026-08-30 → v4.0 LTS): minden alapérték 20%-kal enyhítve

Tulajdonosi döntés (2026-08-30): a v4.0 modularizálásáig a kiadási sebesség fontosabb, mint
a technikai adósság szinten tartása. Minden **numerikus** ratchet-alapértéket 20%-kal enyhítettünk
egyetlen auditálható lépésben, a fázis pedig a `config/quality/quality-baseline.json` fájlban van deklarálva:

```json
"_policy": { "phase": "velocity", "since": "2026-08-30", "until": "4.0.0",
             "relaxPct": 20, "requireTighten": false }
```

| Mi változott                                                                                                                                                                                                                                  | Hol                                                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `metrics.*.value` — az alacsonyabb értéknél jobb darabszámok ×1,2, a magasabb értéknél jobb százalékok ÷1,2 (a lefedettségi minimum maradt 60, az `eslintErrors` maradt 0, az `eslintWarnings` 0 → a befagyasztott elnyomási darabszám 20%-a) | `quality-baseline.json` (a `_relax_velocity_2026_08_30` megjegyzés minden előtte → utána értéket felsorol) |
| `count` ×1,2 / `percentage` ×1,2                                                                                                                                                                                                              | `complexity-baseline.json`, `duplication-baseline.json`                                                    |
| `cap`, `testCap`, valamint minden `frozen[*]` / `testFrozen[*]` sorkorlát ×1,2                                                                                                                                                                | `file-size-baseline.json`                                                                                  |
| fájlonkénti / TS-kódonkénti darabszámok ×1,2                                                                                                                                                                                                  | `api-typecheck-baseline.json`, `dashboard-typecheck-baseline.json`, `open-sse-typecheck-baseline.json`     |
| `THRESHOLD` 36 → 30                                                                                                                                                                                                                           | `scripts/check/check-openapi-coverage.mjs`                                                                 |
| a `--require-tighten` csak tájékoztató jellegű, amíg `_policy.requireTighten === false`                                                                                                                                                       | `scripts/quality/check-quality-ratchet.mjs`                                                                |
| az éjszakai `bank-ratchet-shrinks` szünetel (eltárolná a mért csökkenést, és megszüntetné a tartalékot)                                                                                                                                       | `.github/workflows/nightly-release-green.yml`                                                              |

Az engedélyezési listák (`eslint-suppressions.json`, `test-masking-allowlist.json`, `test-discovery-baseline.json`,
…) **nem** keretek, ezért nem módosultak. A sikeres/sikertelen állapotot meghatározó szabálykapuk
(titkok, SQL-szabályok, dokumentációs/környezeti szerződés, i18n-paritás, egységtesztek) változatlanok
— a sikertelen teszt továbbra is sikertelen teszt.

**Eszközök**

- `npm run quality:relax-baselines -- --pct 20 --note velocity_YYYY_MM_DD [--dry-run]` — az
  egyszeri enyhítés (`scripts/quality/relax-baselines.mjs`); ugyanazzal a megjegyzéssel nem
  hajlandó kétszer lefutni.
- `npm run quality:headroom [-- --only deadExports,fileSize] [--json out.json --md out.md]` —
  minden numerikus kaput ugyanúgy mér, ahogy a CI, és kapunként kiírja a fennmaradó tartalékot
  (`scripts/quality/baseline-headroom.mjs`). Az éjszakai `baseline-headroom` feladat közzéteszi
  a táblázatot a munkafolyamat futási összegzésében, JSON-/Markdown-jelentését pedig
  `baseline-headroom-<run_id>` néven tölti fel, 90 napos megőrzéssel. A figyelmeztetési és kritikus
  sorok azonosítják azokat a kapukat, amelyek a korlátjuk 10%-án belül vannak, vagy már túl is
  lépték azt. Ezeket a jelentéseket tekintse a keretek felhasználásának korai figyelmeztetéseként;
  vizsgálja meg az érintett kapu `_rebaseline_*` megjegyzéseit. A feladat többé nem hoz létre és
  nem frissít állandó hibajegyet; a #12149 őrzi a korábbi jelentések előzményeit.

**Új kód mód (Clean-as-You-Code) — 2026-08-30 óta, csak a PR gyorsított útvonalán**

A `pull_request` eseményeknél a `quality.yml` átadja a `--base-ref <PR base SHA>` argumentumot
a `check:file-size`, `check:complexity-ratchets` és `check:dead-code` parancsoknak. A
`check:complexity-ratchets` és `check:dead-code` esetében a kapu a HEAD állapotot az egyesítési
bázissal hasonlítja össze, **kizárólag a PR által érintett fájlokra korlátozva**
(`scripts/check/newCodeMode.mjs`: az egyesítési bázis egy eldobható `git worktree` munkafában
materializálódik, az ESLint/knip ott és a HEAD állapoton is lefut, majd a fájlonkénti darabszámok
különbségét számítja ki):

- **blokkoló** — a PR ciklomatikus/kognitív komplexitási szabálysértéseket vagy nem használt exportokat
  adott hozzá az általa módosított fájlokban (`complexityNewCode=`, `cognitiveComplexityNewCode=`,
  `deadExportsNewCode=` a naplóban);
- **tájékoztató** — a globális összesítés összevetése a befagyasztott alapértékkel. Az örökölt
  eltérés soha nem tesz sikertelenné egy vétlen PR-t; az eltérést a kiadási egyeztetéskor ismét
  befagyasztjuk, és a tartalékot figyelő feladat követi nyomon.

A `check:file-size` a saját szabályai szerint használja a bázisreferenciát
(`scripts/check/check-file-size.mjs`, #8522): ellenőrzi a fában található összes forrás- és
tesztfájlt, mindegyik sorszámát beolvassa a PR bázisából a `git show` használatával, és csak akkor
minősíti sikertelennek a fájlt, ha az nagyobbra nő, mint az alapérték szerinti felső korlátja
(`frozen` / `testFrozen`, illetve az alapértéken kívüli fájloknál `cap` / `testCap`) és a bázisbeli
mérete közül a nagyobbik. Ezért egy már a bázison eltért fájl soha nem tesz sikertelenné egy
vétlen PR-t.

A `check:boundary:ratchet` ugyanezt a szabályt alkalmazza az egyetlen számára
(`scripts/quality/measure-boundary.mjs --ratchet --base-ref <sha>`): PR-eseményeknél mind a
`quality.yml` gyors ellenőrzései, mind a `ci.yml` lintelési feladata átadja a PR alapjának SHA-ját, az alapcommit
mérése egy `git archive`-exportból történik, és a PR csak akkor bukik meg, ha az `open-sse → src` éleinek
száma meghaladja a `metrics.boundaryOpenSseToSrc` értéke és az alapon mért szám közül a nagyobbat. A felső
korlátot meghaladó alapeltolódást jelzi (`base drift herdado`), de emiatt egy vétlen PR soha nem bukik meg; a push → main
megtartja az abszolút felső korlátot, egy feloldhatatlan alap-SHA esetén pedig figyelmeztetés mellett erre áll vissza.

A `workflow_dispatch` futtatásoknak, a kiadás előtti teljes zöld ellenőrzésnek és az éjszakai tartalékfeladatnak nincs PR-alapja,
ezért megtartják az abszolút (globális) összehasonlítást. A lefedettség, a duplikáció és a típuslefedettség egyelőre globális
marad (az eszközeik nem állítanak elő olcsón fájlonkénti különbséget) — ezek ugyanilyen kezelésre jelöltek.

**A fázis lezárása a v4.0 verziónál (LTS = a korábbinál szigorúbb, nem „vissza a normál állapotba”)**

1. A tiszta `release/v4.0.0` ágcsúcson: dokumentálás céljából `npm run quality:headroom --json`, majd
   `npm run quality:ratchet -- --update`, `check:file-size --update`,
   `check:complexity-ratchets --update`, `check:dead-code --update`, valamint minden typecheck-kapu
   `--update` opcióval — minden alapérték a mért értékre csökken.
2. Törölje a `_policy` elemet a `quality-baseline.json` fájlból (újra aktiválja a `--require-tighten` ellenőrzést és az éjszakai
   tartalékolást), és állítsa vissza a `THRESHOLD = 36` értéket (vagy magasabbat) a `check-openapi-coverage.mjs` fájlban.
3. Ahol a modularizálás kifizetődött, szigorítsa a határértékeket a mért értékeken túl: a fájlméret `cap` értéke legyen ismét 1000
   (vagy 800), a lefedettségi minimumok +5, a nem használt exportok száma pedig 0 a modularizált csomagoknál.

## Ratchet-alapérték (`quality-baseline.json`)

A ratchet-motor (`scripts/quality/check-quality-ratchet.mjs`) beolvassa a `quality-baseline.json`
fájlt, és összehasonlítja a frissen összegyűjtött `quality-metrics.json` fájllal. Ha bármelyik
metrika az epszilonján túl romlik, a build sikertelen lesz.

Jelenleg követett metrikák:

| Metrika               | Irány  | Jelentés                                   |
| --------------------- | ------ | ------------------------------------------ |
| `eslintWarnings`      | `down` | Az ESLint-figyelmeztetések száma nem nőhet |
| `coverage.statements` | `up`   | Az utasításlefedettség nem csökkenhet      |
| `coverage.lines`      | `up`   | A sorlefedettség nem csökkenhet            |
| `coverage.functions`  | `up`   | A függvénylefedettség nem csökkenhet       |
| `coverage.branches`   | `up`   | Az áglefedettség nem csökkenhet            |

Az alapérték frissítése valódi javulás után:

```bash
npm run quality:ratchet -- --update
git add quality-baseline.json
```

A `--update` jelző az aktuálisan mért értékeket írja a `quality-baseline.json` fájlba.
Ezt a fájlt a metrikát javító módosítással együtt commitolja. Ha egy PR javít egy
metrikát az alapérték frissítése nélkül, azt a `--require-tighten` észleli (6A.5. fázis,
megvalósításra vár).

### CodeQL-ratchet: frissítési gyakoriság és kézi indítás

A `check:codeql-ratchet` a **tároló ütemezetten frissített állapotát olvassa — nem PR-enként.**
A `gh api repos/diegosouzapw/OmniRoute/code-scanning/default-setup` a következőt jelenti:
`state: configured`, `schedule: weekly`: ez a GitHub alapértelmezett beállítású vizsgálata,
nem pedig pushonkénti elemzés. Következmény: egy riasztásokat JAVÍTÓ PR egyesítése után a
ratchet továbbra is a régi, magasabb számot olvassa a következő ütemezett vizsgálat
lefutásáig — ezért minden nyitott PR esetében regressziót jelez, beleértve a javító PR
utólagos módosításait is, amíg a vizsgálat utol nem éri az állapotot.

**Kézi frissítés**: a `gh workflow run codeql.yml --ref release/vX.Y.Z` perceken belül
újrafuttatja az elemzést, és ismét közzéteszi a riasztásokat. Először olvassa el a
`.github/workflows/codeql.yml` fájlt — a fejlécében szerepel, hogy **azért csak
`workflow_dispatch` használatával indítható, mert ütközik a GitHub „alapértelmezett
beállításával”** (`CodeQL analyses from advanced configurations cannot be processed when the default setup is enabled`).
A `push`/`pull_request`/`schedule` eseményindítók visszaállításához először **tulajdonosi
műveletre van szükség**: Beállítások → Kódbiztonság → CodeQL: Alapértelmezett → Speciális.
E váltás nélkül ne adjon hozzá `schedule:` eseményindítót — az csak sikertelen futásokat
eredményez.

**A darabszám csökkenése után szigorítsa az alapértéket** — a `node scripts/check/check-codeql-ratchet.mjs
--update` az újonnan mért darabszámot a `quality-baseline.json` →
`metrics.codeqlAlerts.value` mezőbe írja, így a ratchet nem engedélyezi észrevétlenül,
hogy a szám visszanőjön a régi felső határig. Kidolgozott példa (2026-09-02/03): a #12502
PR 7 valódi riasztást javított (13 → 6 mért nyitott riasztás); a #12530 PR a rögzített
alapértéket 11-ről 6-ra szigorította, hogy megfeleljen ennek; a fennmaradó 6 riasztást
ezután riasztásonkénti indoklással elutasították, így 0 maradt nyitva.

**Az elutasítás az üzemeltető döntése (14. szigorú szabály)** — soha ne utasítson el
CodeQL-riasztást anélkül, hogy az elutasítási megjegyzésben rögzítené a műszaki indoklást:
`won't fix` külső protokollkövetelmény esetén, `used in tests` teszt-fixtúra esetén,
`false positive` pedig olyan tisztítómechanizmus esetén, amelyet a CodeQL nem képes
észlelni (előzmény: `docs/security/ERROR_SANITIZATION.md`).

---

## Teszt-újrapróbálkozási szabályzat (WS5.4, v3.8.49)

Az újrapróbálkozás futtatónként történik, soha nem globálisan — az általános újrapróbálkozás a valódi regressziókat
láthatatlan, időszakos hibákká alakítja:

| Futtató          | Szabályzat                                                                                                                                                          | Indok                                                                                                                                                                     |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Playwright (e2e) | `retries: 1` csak CI-ben, `trace: on-first-retry` beállítással                                                                                                      | A böngésző és a hálózat időzítése valóban nem determinisztikus; egyetlen, nyomkövetéssel végzett újrapróbálkozás diagnosztizálható műtermékké alakítja az időszakos hibát |
| Vitest           | NINCS globális újrapróbálkozás. Egy bizonyítottan időszakosan hibás teszt explicit, tesztszintű újrapróbálkozást kap (látható a diffben, felülvizsgálandó a PR-ben) | A karanténlistát a repóban tartja, soha nem átláthatatlanul                                                                                                               |
| node:test (unit) | SOHA nincs újrapróbálkozás                                                                                                                                          | Az időszakosan hibás egységteszt a teszt hibája — javítsd ki, ne futtasd újra szerencsepróbaként                                                                          |

Cél-SLO-k az időszakos hibák telemetriájának elkészülte után (WS5.2/5.3): tesztenként <1%-os időszakos hibaarány
(„azonnal javítandó” küszöb), folyamatonként ≥95%-os sikerességi arány. Iparági referenciaértékek —
a saját méréseink alapján újrakalibrálandók.

## Kiadásszintű racsni-eltérés (WS5.5, v3.8.49)

Amikor egy racsni (fájlméret, komplexitás, eslint-figyelmeztetések) visszalépést mutat a TISZTA kiadási
csúcson — vagyis az összeolvasztások KOMBINÁCIÓJA okozta a visszalépést, és azt egyetlen PR sem reprodukálja
a saját ágán —, a javítás **egyszeri alkalommal, a kiadási ágon a kiadásfelelős feladata**: előnyben részesítendő a kiemelés/refaktorálás; új alapérték csak dokumentált
indoklási bejegyzéssel állítható be. A kombinációs eltérést soha ne hárítsd egy közreműködő PR-jére, és soha ne
állíts be új alapértéket PR-enként (ez elrejti a valódi regressziókat). Először különítsd el az okot: reprodukáld a
hibát a tiszta csúcson egy vizsgálati worktree-ben, mielőtt azt feltételeznéd, hogy a te PR-ed okozta.

## A racsnik csökkenéseinek elkönyvelése — a lefelé mutató irány (#8584)

A racsni csak félig automatikus, ráadásul éppen a rossz fele az. Egy felső korlát **emelése** kézi
JSON-szerkesztés, amely tíz másodpercet vesz igénybe, és ez a leggyorsabb módja egy hibás PR blokkolásának feloldására.
Egy korlát **csökkentéséhez** valakinek futtatnia kell a `--update` kapcsolót, és commitolnia kell az eredményt — a
`bank-ratchet-shrinks` feladat bevezetéséig pedig ezt egyetlen munkafolyamat sem futtatta. A mért következmény
(2026-07-25): 18 befagyasztott fájl már elérte vagy alulmúlta az új fájlokra vonatkozó 800 soros korlátot, a legrosszabb
132-szeres eltéréssel (`src/shared/validation/schemas.ts`, 19 sorhoz 2,523-as korlát tartozik); a
komplexitási plafon `1794 → 2169` értékre nőtt ~37 új alapértékről szóló megjegyzés során, pontosan egyetlen
csökkenéssel (−1); a „szigorítás `--update` használatával a következő ciklusban” szöveget pedig 31-szer írták le, és
egyszer tartották be. Egy korlát, amely túléli az azt indokolttá tevő kódot, észrevétlenül növekedési keretté alakít
minden befejezett felbontást annak számára, aki legközelebb szerkeszti a fájlt.

A `nightly-release-green.yml` → **`bank-ratchet-shrinks`** feladat lezárja ezt a hurkot:

|            |                                                                                                                        |
| ---------- | ---------------------------------------------------------------------------------------------------------------------- |
| Futás      | `schedule` (naponta 3×) + `workflow_dispatch` — szándékosan **nem** `push`                                             |
| Mérés      | a legmagasabb `release/vX.Y.Z`, ugyanazzal a feloldási + injektálási védelemmel, mint a `release-green`                |
| Írás       | `check:file-size --update` és `check:complexity-ratchets --update` (felépítésükből adódóan mindkettő csak csökkenthet) |
| Ellenőrzés | `npm run check:ratchet-bank` (`scripts/quality/verify-ratchet-bank.mjs`)                                               |
| Szállítás  | egyetlen, mindig naprakész PR a kiadási ágra — kényszerítetten frissítve, kéretlen PR-ek halmozása nélkül              |

Az elkönyvelés kötegelve, nem pedig minden push alkalmával történik, mert nincs késleltetési követelménye (a 8 órán
belül elkönyvelt csökkenés megfelelő), míg egy összeolvasztásonkénti futtatás az összeolvasztási kampányok során
ismételten újraépítené a PR-ágat, és minden alkalommal egy teljes ESLint-vizsgálat költségével járna. Az észlelés továbbra is
push esetén történik (`release-green`); csak az elkönyvelés kötegelt.

### A biztonsági ellenőrző

A feladat felügyelet nélkül írja az alapértékeket, ezért a `verify-ratchet-bank.mjs` teszi ezt
elfogadhatóvá. Összehasonlítja a `--update` utáni fát a `HEAD` állapotával, és **még bármilyen commit létrejötte
előtt megszakítja a feladatot** — így nem nyit PR-t —, hacsak nem minden módosítás az alábbiak egyike:

- egy `frozen` / `testFrozen` numerikus bejegyzés **csökkentése** vagy **eltávolítása**
- `complexity-baseline.json` → `count` **csökkentése**
- `quality-baseline.json` → `metrics.cognitiveComplexity.value` **csökkentése**

Minden más hibát eredményez: egy szám növelése, bejegyzés hozzáadása, a `cap`/`testCap` módosítása vagy
egy `_rebaseline_*` megjegyzés törlése/átírása (ezek a megjegyzések képezik az egyes plafonok indoklásának
auditnaplóját, és ugyanabban a `frozen` objektumban találhatók, mint a fájlbejegyzések).
Egy korlát emelésére képes bot egyértelműen rosszabb lenne a jelenlegi helyzetnél. Regresszióvédelmi teszt:
`tests/unit/verify-ratchet-bank.test.ts`.

A feladat soha nem végez push műveletet a `release/*` ágakra — a PR-t ember olvasztja össze, így egy hibás mérés
nem kerülhet be felülvizsgálat nélkül.

## Engedélyezési lista szabályzata

Minden olyan ellenőrzési kapu, amely már meglévő szabálysértések miatt nem bukhat el, rögzített engedélyezési listát használ
(pl. `KNOWN_STALE_DOC_REFS`, `KNOWN_MISSING`, `KNOWN_RAW_SQL`). A szabályzat:

**Javítsd ki a kiváltó okot; az engedélyezési listát csak akkor használd, ha a szabálysértés már korábban is fennállt, és
ugyanabban a PR-ban nem javítható.**

Amikor bejegyzést adsz egy engedélyezési listához:

1. Mellékelj egy megjegyzést az indoklással.
2. Hivatkozz a nyomon követési hibajegyre (pl. `// #3498 — 2. fázisú funkció, még nincs implementálva`).
3. Távolítsd el a bejegyzést ugyanabban a PR-ban, amely kijavítja a szabálysértést — az elavult bejegyzés, amely már
   nem nyom el aktív szabálysértést, önmagában is hiba (a 6A.3 elavult kikényszerítési ellenőrzése a megvalósítása után
   elbuktatja a kaput egy árva engedélyezési lista-bejegyzés miatt).

**Ne** adj hozzá engedélyezési lista-bejegyzéseket csak azért, hogy a tesztek gyorsabban átmenjenek. Egy zöld kapu növekvő
engedélyezési listával hamis minőségérzetet kelt.

### Ha egy kapu elbukik a PR-odon

1. **Olvasd el figyelmesen a kapu kimenetét** — pontosan megmondja, melyik fájl vagy szimbólum sértette meg
   a szabályt.
2. **Javítsd ki a szabálysértést** — a legtöbb kapu determinisztikus fájlrendszer-ellenőrzést végez, amely azonnal átmegy,
   amint a kód helyes.
3. **Ha a szabálysértés már korábban is fennállt** (vagyis nem te vezetted be, de a kapu most már lefedi): adj hozzá egy engedélyezési lista-bejegyzést indokló megjegyzéssel és egy nyomon követési hibajeggyel.
4. **Ha a kapu racsnis elven működik** (lefedettség, ESLint-figyelmeztetések, duplikáció, komplexitás):
   a módosításod rontott a mérőszámon. Javítsd ki a kiváltó problémát, vagy (ritkán) futtasd az
   `npm run quality:ratchet -- --update` parancsot, ha a módosítás szándékos, és a mérőszám romlása
   elfogadható — de dokumentáld ennek okát a PR leírásában.
5. **Tájékoztató kapuk** (`continue-on-error: true`) csak információs célúak — nem akadályozzák
   az összevonást, de megjelennek a CI összegzésében. Ettől függetlenül javítsd ki őket.

---

## Új kapu hozzáadása

1. Hozd létre a `scripts/check/check-<name>.mjs` (vagy `.ts`) fájlt. A szabályzati kapuk 0/1 kilépési kóddal lépnek ki.
   A racsnis jellegű kapuk a `collect-metrics.mjs` segítségével mérőszámot írnak a `quality-metrics.json` fájlba.
2. Add hozzá a `"check:<name>": "node scripts/check/check-<name>.mjs"` bejegyzést a `package.json` fájlhoz.
3. Kösd be a `.github/workflows/ci.yml` megfelelő feladatába
   (szabályzat → `lint` vagy `docs-sync-strict`; racsni → `quality-gate`).
4. Ha rendelkezik engedélyezési listával, alkalmazd rá a `reportStaleEntries()` függvényt a
   `scripts/check/lib/allowlist.mjs` fájlból, hogy az elavult bejegyzések automatikusan észlelhetők legyenek.
5. Írj egy tesztet a `tests/unit/build/` könyvtárban, amely lefedi a kapu észlelési logikáját.
6. Frissítsd ezt a dokumentumot (adj hozzá egy sort a megfelelő feladattáblázathoz).

---

## Ügynökeszközök: LSP a munkafolyamatban (választható)

A CI-kapuk mellett az OmniRoute egy **választható** `agent-lsp` vázat is biztosít
(egy projektszintű `.mcp.json`, Fase 7 15. feladat). Hozd létre a `.mcp.json` fájlt,
hogy TypeScript nyelvi kiszolgálót tegyél elérhetővé a kódoló ügynökök számára, így azok a szimbólumokat /
diagnosztikát **a kód megírása előtt** feloldhatják — ez a `typecheck:core` „fordítás az állítás előtt” elvű kiegészítője,
amely már a forrásnál csökkenti a „kitalált szimbólumokból” eredő hibákat. Szándékosan
nem töltődik be automatikusan (te választod ki és ellenőrzöd az MCP↔LSP hidat); egy hibás bejegyzés csak
kapcsolódási hibát naplóz, és soha nem szakítja meg a munkameneteket.

---

## Racionalizálási hátralék (ROI-felülvizsgálat — 9. fázis, 3. hullám)

Ezt a leltárt 2026-06-17-én összevetettük a `ci.yml` tartalmával (az előző verzióból kimaradt az
`audit:deps`, `check:tracked-artifacts`, `check:lockfile`, `check:licenses`,
`check:dead-code`, `check:cognitive-complexity`, `check:type-coverage`,
`check:codeql-ratchet`, `check:pr-evidence`). Az egyeztetett készlet ROI-felülvizsgálata
a következő racionalizálási jelölteket azonosította. **Az összevonások mechanikus CI-módosítások;
az átállítások/eltávolítások az üzemeltető számára fenntartott szabályzati döntések.** Az alábbiak közül
még semmi sem lett alkalmazva.

**Fent szintén nem dokumentált** (tanácsadó jellegű, alacsony jelértékű): a `docs-lint` feladat
(markdownlint + Vale, a teljes feladaton `continue-on-error`), valamint az önálló ellenőrző munkafolyamatok:
`semgrep.yml` / `codeql.yml` / `scorecard.yml`. A `semgrepFindings: 0` szerepel a
`quality-baseline.json` fájlban, de nincs blokkoló racsnihoz kötve a `ci.yml` fájlban — a metrika
jelenleg árva.

### Összevonás / deduplikáció (mechanikus, alacsonyabb kockázat)

Minden jelöltet ellenőriztünk az éles kapuállapot alapján 2026-06-17-én (bízz, de ellenőrizd);
több „kézenfekvő” összevonásról kiderült, hogy rejtett adósságot takar, ezért **nem** alkalmazhatók közvetlenül.

- **A `check:docs-sync` kétszer fut** — önállóan a `lint` feladatban, majd ismét a `check:docs-all` (`docs-sync-strict`) részeként és a husky pre-commit hookban. ✅ **KÉSZ** — az önálló `lint`-meghívás eltávolítva.
- **CVE-ellenőrzés** — ❌ **NEM vonható össze tisztán.** Az `audit:deps` minden magas/kritikus CVE esetén hibával leáll; a `check:vuln-ratchet` (osv) csak az alapértékhez viszonyított _regresszió_ esetén áll le hibával (jelenleg 1 MODERATE). Eltérő szemantika — az `audit:deps` eltávolításával elveszne az abszolút magas/kritikus kapu. Mindkettőt meg kell tartani.
- **Ciklusészlelés** — ✅ **KÉSZ** (#15159 G-01/G-02). A korábbi szöveg a `check:cycles` ellenőrzést „zöld, gondosan összeállított” kapunak nevezte, és azzal indokolta blokkolóként való megtartását, hogy a `check:circular-deps` (dpdm) 91 ciklust jelzett. Ez a zöld állapot **hamis zöld** volt: a `check:cycles` 5 alkönyvtárat (450 fájlt) vizsgált, csak a statikus `import|export … from` mintára illeszkedett, és minden `@/` és `@omniroute/open-sse/` specifikátort eldobott, így nem láthatta a repót uraló dinamikus importálási és aliasciklusokat. Javítva: a kapu most bejárja a `src` + `open-sse` könyvtárakat (5023 fájl), a TypeScript AST-ből gyűjti a specifikátorokat (így az `import("…")` számít, a típuspozícióban lévő `typeof import("…")` viszont nem), és feloldja a tsconfig `paths` beállításait. **14** ciklust talál, nem 0-t. Mivel 14 már meglévő ciklus nem javítható ki egy kapu-PR-ben, a `check:cycles` mostantól **racsni** (`--ratchet`, a felső korlát `metrics.cycles.value = 14` a `quality-baseline.json` fájlban, `direction: down`) — minden _regressziót_ blokkol, és az érték csak csökkenhet. A CI az `npm run check:cycles:ratchet` parancsot futtatja. A fokozatos leépítés az **A-01** részeként történik. A `check:circular-deps` (dpdm) tanácsadó jelleggel megmarad szélesebb körű másodvéleményként.
- **Komplexitás** — ✅ **KÉSZ** (`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`): egyetlen ESLint-bejárás, ruleId szerinti számlálással, így a ciklomatikus+max-lines és a kognitív alapértékek függetlenek maradnak; az egyedi `check:complexity` / `check:cognitive-complexity` ellenőrzések megmaradnak a helyi `--update` használatához.
- **`/api` hallucináció elleni védelem** — ✅ **KÉSZ** (`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`): a `src/app/api` egyetlen fájlrendszer-leltározása; az openapi-routes + docs-symbols továbbra is egymástól függetlenül jelent; az egyedi ellenőrzések megmaradnak helyi futtatáshoz.
- **A `check:node-runtime` 11 feladatban fut** — ⚠️ **alacsony ROI.** Mindegyik külön futtatókörnyezet, az ellenőrzés pedig <1 másodperc; a teljes megtakarítás ~10 másodperc lenne, miközben elveszne egy olcsó, feladatonkénti védőkorlát. Nem éri meg a vele járó változtatás.
- **`typecheck:noimplicit:core` a CI lintelésében** — ✅ **eltávolítva a lint feladatból** (tanácsadó jellegű `continue-on-error` volt); a blokkoló típusfelületet a `typecheck:core` + `check:type-coverage` biztosítja. A helyi szkript megmaradt.

### Átállítás / döntés (üzemeltetői szabályzat)

- `check:openapi-security-tiers` (tanácsadó jellegű) — ❌ **NEM állítható át tisztán.** 0-s kilépési kódot ad, de figyelmeztet arra, hogy a `LOCAL_ONLY_API_PREFIXES` alá tartozó több `traffic-inspector` útvonalról hiányzik az `x-loopback-only: true` annotáció. A kikényszerítéséhez először hozzá kell adni ezeket az annotációkat az `openapi.yaml` fájlhoz.
- `typecheck:noimplicit:core` (tanácsadó jellegű) — nagyrészt lefedi a blokkoló `check:type-coverage` racsni. Állítsa át racsnivá, vagy távolítsa el a redundáns második `tsc` futtatást.
- `test:vitest:ui` (most **blokkoló**) — a már meglévő hibák kifejezetten ki vannak zárva a `vitest.config.ts` fájlban `// #8618` nyomonkövetési megjegyzésekkel; az új hibák meghiúsítják a feladatot.
- `check:secrets` (gitleaks, blokkoló racsni, 3 dokumentált téves pozitívnál befagyasztva) — tegye engedélyezési listára a 3 találatot a 0 eléréséhez, vagy minősítse vissza tanácsadó jellegűvé. Átfedésben van a GitHub natív titokellenőrzésével és a `check:public-creds` ellenőrzéssel.
- `check:pr-evidence` (blokkoló, grep segítségével vizsgálja a PR-törzs prózáját) — magas a téves pozitív eredmények kockázata; eltávolítása gyengítené a 18. szigorú szabály kikényszerítését, így ez valódi szabályzati döntés.
- `semgrep` (tanácsadó jellegű, önálló) — az OWASP-családok tekintetében átfedésben van a CodeQL-lel; kösse az alapértékét racsnihoz, vagy távolítsa el.

---

## Kapcsolódó dokumentáció

- Ellátási lánc (eredetigazolás, SBOM, Trivy, Scorecard): [`docs/security/SUPPLY_CHAIN.md`](../security/SUPPLY_CHAIN.md)

#### `check-key-completeness` — kulcskészlet-paritási kapu

`scripts/i18n/check-key-completeness.mjs` (`npm run i18n:check-keys`, `i18n-ui-coverage` feladat).
Összehasonlítja minden `src/i18n/messages/<locale>.json` levélkulcsainak készletét az `en.json`
kulcsaival, és hibát jelez bármely hiányzó vagy többletkulcs esetén, függetlenül attól, hogy a kulcsot
mikor adták hozzá. A `__MISSING__:` helyőrzők jelen lévőnek számítanak (a tartalmuk az aránykapu
hatáskörébe tartozik). Ez a két diffalapú/százalékos kapu abszolút kiegészítője: a
`check-ui-keys-coverage` területi beállításonként 80 %-os alsó korlátot követel meg (a ~13 000-ből
43 hiányzó kulcs még mindig 99,7 %-ot mutat), a `check-new-key-coverage` pedig csak azokat a
kulcsokat vizsgálja, amelyeket egy PR ad hozzá az `en.json` fájlhoz. Egy területi köteget az adott
nap `en.json` fájljából állítanak elő, amikor a hozzá tartozó ágat létrehozzák, majd napokon át
fordítják, miközben az alapágon továbbra is új kulcsok jelennek meg; maga a köteg PR-je nem ad hozzá
kulcsot, ezért egyik rokon kapu sem jelzett, amikor az 1. köteg (#13044) kilenc területi beállításban
43 kulccsal kevesebbel, a 2. köteg (#13660) pedig nyolcban 10 kulccsal kevesebbel került be
(2026-09-15). A hibát a
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers` paranccsal javítsa; egy
`extra` levélkulcs azt jelenti, hogy a forrásból eltávolították — törölje a területi beállításból.
A `--warn` hibajelzés nélkül készít jelentést. A `--catalog=cli` ugyanazt az összehasonlítást futtatja
a `bin/cli/locales` tartalmán (`npm run i18n:check-keys:cli`); mindkét lépés az
`i18n-ui-coverage` feladatban található.

#### `check-new-key-coverage` — új kulcsokra vonatkozó i18n-kapu

A `check-ui-value-drift` rokonkapuja. Az utóbbi azt észleli, ha egy angol értéket **átírtak**,
miközben a fordításai változatlanok maradtak; ez pedig azt észleli, ha egy angol kulcsot
**hozzáadtak**, de egyes területi beállítások soha nem kapták meg.

A `check-ui-keys-coverage` nem képes észlelni ezt az esetet: területi beállításonként százalékos
alsó korlátot követel meg, és a ~13 000-ből tizenegy hiányzó kulcs mellett a lefedettség még mindig
99,9%. A nyelvenkénti százalékos érték nem képes kifejezni, hogy „ez a funkció fordítás nélkül
jelent meg” — egy teljes funkció kerülhet szöveg nélkül egy új területi beállításba úgy, hogy a
számérték meg sem változik.

Az itt rögzített incidens: az Orchestration Canvas 3. fázisának tizenegy kulcsát lefordították az
akkor létező 42 területi beállításra. Órákkal később az uniós nyelvi köteg (#13044) 51-re növelte a
tárolóban lévő területi beállítások számát, és a kilenc új (`el`, `et`, `ga`, `hr`, `lt`, `lv`,
`mt`, `sl`, `sr`) soha nem kapta meg ezeket. A `deepMergeFallback` egy hiányzó kulcs helyett az
angol szöveget használja, így a hiba nem üres, hanem lefordítatlan felhasználói felületként
jelentkezett — valós problémaként, amely kialakításából adódóan észrevétlen maradt.

Rokonkapujához hasonlóan ez is **différzékeny**: az egyesítési alap angol szövegét hasonlítja össze
a munkafával, így a már korábban meglévő hiányosságok változatlanok maradnak, és a kapu
bekapcsolásához nem volt szükség migrációra.

**Egy `__MISSING__:<english>` jelölő nem elégíti ki a feltételt (2026-09-17 óta).** Korábban ez volt
a dokumentált halasztási módszer — futásidőben a rendszer visszaáll a helyes angol szövegre —, amíg
2026-09-16-án nyolc funkció-PR 61 kulcsot adott hozzá, és fordítás helyett mind a 65 területi
beállításban elhelyezte a jelölőt: ez a kapu mindegyiket elfogadta, semmi sem blokkolta a PR-eket,
majd a kiadási ág csúcsán mindenkinél meghiúsult a valódi fordítások arányát blokkoló kapu
(pt-BR 3,2 % > 2,5 % + 0,5). A jelölő mostantól hiányzó fordításnak minősül. A hibát a
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers --batch-size=40`
paranccsal javítsa, vagy az összes területi beállítást párhuzamosan az
`npm run i18n:translate-new-keys` használatával (`scripts/i18n/translate-new-keys.sh`,
leválasztott állapotban is biztonságos, és az `OMNIROUTE_TRANSLATION_*` környezeti változók nélkül
nem hajlandó elindulni). Azoknak a kulcsoknak, amelyeknek angolul kell maradniuk (rögzített
termék-, motor- vagy jelzőnevek), a `scripts/i18n/untranslatable-keys.json` fájlban van a helyük,
soha nem egy jelölő mögött. A `vi` teljesen tiltja a jelölőket
(`tests/unit/i18n-vi-completeness.test.ts`).

#### `check-vitest-exclusions` — félretett tesztek kapuja

A `vitest.config.ts` `exclude` listáján szereplő fájl olyan teszt, amely nem fut le, miközben a
fát olvasók számára úgy tűnik, mintha lefedettséget biztosítana. Hatvankét fájl halmozódott fel a
`// #8618 — pre-existing failure; remove this exclusion when fixed` megjegyzés mögött. A #8618-as
hibajegyet 2026-08-11-én lezárták, miközben az általa nyomon követett lista 45-ről 62 bejegyzésre
nőtt, és minden új bejegyzés egy már lezárt hibajegyre mutató megjegyzést örökölt. Amikor a listát
végül fájlonként felmérték (#13204), **a 62-ből 51 a forrás bármilyen módosítása nélkül sikeresen
lefutott az aktuális fán**.

A kapu megköveteli, hogy minden valódi fájlra feloldható kizárás (a) megnevezzen egy nyomon követési
hibajegyet, és (b) szerepeljen a `config/quality/vitest-exclusions.json` fájlban a mért állapotával
együtt, így egy kizárás hozzáadása egy erre szolgáló fájl áttekinthető diffje lesz, nem pedig egy
újabb sor egy 60 bejegyzéses tömbben. Szándékosan nem futtatja újra a kizárt teszteket — ez
körülbelül 10 percet vesz igénybe, és egy időszakos feladathoz tartozik; a leltár rögzíti, hogy
mikor mérték fel őket legutóbb.
