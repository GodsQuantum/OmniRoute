# Quality Gates Reference (Lietuvių)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/QUALITY_GATES.md) · 🇪🇹 [am](../../../am/docs/architecture/QUALITY_GATES.md) · 🇸🇦 [ar](../../../ar/docs/architecture/QUALITY_GATES.md) · 🇦🇿 [az](../../../az/docs/architecture/QUALITY_GATES.md) · 🇧🇬 [bg](../../../bg/docs/architecture/QUALITY_GATES.md) · 🇧🇩 [bn](../../../bn/docs/architecture/QUALITY_GATES.md) · 🇧🇦 [bs](../../../bs/docs/architecture/QUALITY_GATES.md) · 🇨🇿 [cs](../../../cs/docs/architecture/QUALITY_GATES.md) · 🇩🇰 [da](../../../da/docs/architecture/QUALITY_GATES.md) · 🇩🇪 [de](../../../de/docs/architecture/QUALITY_GATES.md) · 🇬🇷 [el](../../../el/docs/architecture/QUALITY_GATES.md) · 🇪🇸 [es](../../../es/docs/architecture/QUALITY_GATES.md) · 🇪🇪 [et](../../../et/docs/architecture/QUALITY_GATES.md) · 🇮🇷 [fa](../../../fa/docs/architecture/QUALITY_GATES.md) · 🇫🇮 [fi](../../../fi/docs/architecture/QUALITY_GATES.md) · 🇫🇷 [fr](../../../fr/docs/architecture/QUALITY_GATES.md) · 🇮🇪 [ga](../../../ga/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [gu](../../../gu/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ha](../../../ha/docs/architecture/QUALITY_GATES.md) · 🇮🇱 [he](../../../he/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [hi](../../../hi/docs/architecture/QUALITY_GATES.md) · 🇭🇷 [hr](../../../hr/docs/architecture/QUALITY_GATES.md) · 🇭🇺 [hu](../../../hu/docs/architecture/QUALITY_GATES.md) · 🇦🇲 [hy](../../../hy/docs/architecture/QUALITY_GATES.md) · 🇮🇩 [id](../../../id/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ig](../../../ig/docs/architecture/QUALITY_GATES.md) · 🇮🇹 [it](../../../it/docs/architecture/QUALITY_GATES.md) · 🇯🇵 [ja](../../../ja/docs/architecture/QUALITY_GATES.md) · 🇬🇪 [ka](../../../ka/docs/architecture/QUALITY_GATES.md) · 🇰🇭 [km](../../../km/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [kn](../../../kn/docs/architecture/QUALITY_GATES.md) · 🇰🇷 [ko](../../../ko/docs/architecture/QUALITY_GATES.md) · 🇱🇻 [lv](../../../lv/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ml](../../../ml/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [mr](../../../mr/docs/architecture/QUALITY_GATES.md) · 🇲🇾 [ms](../../../ms/docs/architecture/QUALITY_GATES.md) · 🇲🇹 [mt](../../../mt/docs/architecture/QUALITY_GATES.md) · 🇲🇲 [my](../../../my/docs/architecture/QUALITY_GATES.md) · 🇳🇵 [ne](../../../ne/docs/architecture/QUALITY_GATES.md) · 🇳🇱 [nl](../../../nl/docs/architecture/QUALITY_GATES.md) · 🇳🇴 [no](../../../no/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [or](../../../or/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [pa](../../../pa/docs/architecture/QUALITY_GATES.md) · 🇵🇭 [phi](../../../phi/docs/architecture/QUALITY_GATES.md) · 🇵🇱 [pl](../../../pl/docs/architecture/QUALITY_GATES.md) · 🇵🇹 [pt](../../../pt/docs/architecture/QUALITY_GATES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/QUALITY_GATES.md) · 🇷🇴 [ro](../../../ro/docs/architecture/QUALITY_GATES.md) · 🇷🇺 [ru](../../../ru/docs/architecture/QUALITY_GATES.md) · 🇱🇰 [si](../../../si/docs/architecture/QUALITY_GATES.md) · 🇸🇰 [sk](../../../sk/docs/architecture/QUALITY_GATES.md) · 🇸🇮 [sl](../../../sl/docs/architecture/QUALITY_GATES.md) · 🇷🇸 [sr](../../../sr/docs/architecture/QUALITY_GATES.md) · 🇸🇪 [sv](../../../sv/docs/architecture/QUALITY_GATES.md) · 🇰🇪 [sw](../../../sw/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ta](../../../ta/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [te](../../../te/docs/architecture/QUALITY_GATES.md) · 🇹🇭 [th](../../../th/docs/architecture/QUALITY_GATES.md) · 🇹🇷 [tr](../../../tr/docs/architecture/QUALITY_GATES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/QUALITY_GATES.md) · 🇵🇰 [ur](../../../ur/docs/architecture/QUALITY_GATES.md) · 🇺🇿 [uz](../../../uz/docs/architecture/QUALITY_GATES.md) · 🇻🇳 [vi](../../../vi/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [yo](../../../yo/docs/architecture/QUALITY_GATES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/QUALITY_GATES.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/QUALITY_GATES.md)

---

Šis dokumentas yra pagrindinis visų „OmniRoute“ CI kokybės vartų informacijos šaltinis.
Jame aprašomi visi vartai, ką jie tikrina, kurioje CI užduotyje jie vykdomi, ar jiems
taikoma reketo bazinė reikšmė, ar sėkmės / nesėkmės politika, ir ar jie blokuoja komponavimą, ar yra tik rekomendaciniai.

Trumpą santrauką ir leidžiamų išimčių sąrašo politiką rasite `AGENTS.md` skiltyje „Quality Gates & Ratchets“.
Kritinį vertinimą, brandos klasifikaciją ir nuo įrankių nepriklausomą
tos pačios sistemos atkūrimo planą rasite
[kokybės vartų vadove](../ops/QUALITY_GATE_PLAYBOOK.md).

---

## Kontrolės punktų inventorius ir vykdymo profiliai

### Kandidatų priėmimas

CI ir Quality Gates darbo eigos kiekviena pateikia stabilų verdiktą: `Gate / CI` ir
`Gate / Quality`. Jų versijuota priėmimo politika kiekvieną pirminę užduotį nurodo
kaip privalomą arba rekomenduojamą. Taikytina privaloma užduotis privalo būti sėkminga:
trūkstami, atšaukti, praleisti, laukiantys ir nežinomi rezultatai negali užfiksuoti
PASS. Galiojanti „docs-only“ arba „catalog-only“ klasifikacija gali padaryti kodo juostą
netaikytiną; juodraštis PR nėra priimtinas kandidatas. Žyma `hotfix` neatšaukia
būtinybės pateikti įrodymus.

Abi darbo eigos apima PR į main/release šakas, push į `main`, rankinį dispatch
ir merge-group įvykius. Push, dispatch ir merge-group vykdo visą atranką. Push į
`release/**` jų nepaleidžia (2026-10-18): kiekvienas pakeitimas matricą jau įvykdė
savo PR, o sujungto derinio patikrinimas yra Release-Green darbas
(`docs/ops/RUNNER_BOX.md` → Hosted lane). Forkai ir merge grupės užduotims, kurios
kitu atveju rinktųsi self-hosted vykdytojus, naudoja hosted vykdytojus; prieš
diegimą būtina patikrinti, ar hosted pajėgumų pakanka.

Kiekvienas JSON kvitas identifikuoja atlikto checkout SHA, darbo eigos vykdymą
ir bandymą. CLI atmeta checkout/įvykio SHA neatitiktį. Darbo eigų testai susieja
politikos narystę su verdikto užduoties `needs` sąrašu, kad nauja arba pašalinta
juosta negalėtų nepastebimai pradingti. Kvitai apima tik savąją darbo eigą, o ne
publikavimą, diegimą ar esamo rekomenduojamojo skaitytuvo vidinę sandarą. Abiejų
patikrų pavadinimų įjungimas šakų taisyklėse yra atskiras administracinis
pakeitimas; vien pridėjus šias užduotis šaka dar nėra apsaugota.

### Statinio skenavimo inventorius

Versijuota npm pseudonimų inventorius ir statinio skenavimo narystė saugomi
`config/quality/gate-manifest.json`. Paleiskite `npm run check:gate-manifest`,
kad patikrintumėte scenarijų pavadinimus ir tikslias komandas pagal `package.json`;
papildymai, pašalinimai ir komandų nukrypimas sukelia tiek vietinio hook, tiek CI
pakeitimų klasifikavimo užduočių nesėkmę. Pseudonimas nėra darbo eigos užduotis,
matricos egzempliorius ar testo atvejis: šių kiekių negalima pateikti kaip
pakaitinių.

Pasirinktus pseudonimus peržiūrėkite jų nevykdydami naudodami
`npm run quality:scan -- --list` arba `npm run quality:scan:fast -- --list`.
Vykdytojas kviečia npm įėjimo tašką, todėl jo vykdymo aplinka (įskaitant Bun, kur
sukonfigūruota) išsaugoma. Manifestas už šių profilių ribų esančius pseudonimus
žymi kaip atskirai kviečiamus, o priežiūros komandos tik skaitymo skenavimo
profiliuose yra draudžiamos.

Šie profiliai apima tik statinį skenavimą. Jie nepatvirtina produkto testų,
padengimo, pakavimo, išorinių patikrų ar visiško kandidato išleidimo priėmimo.
Darbo eigos priėmimas naudoja susietus `config/quality/admission-policy.json` ir
`scripts/quality/admission-verdict.mjs`. Release-observer profiliai išlieka
atskiri; jų taikomas patikras ir kvitus tikrinkite nepriklausomai. Toliau
pateikiamas aprašomasis inventorius yra informacinė nuoroda, o ne įrodymas, kad
kontrolės punktas iš tiesų vyko.

Scenarijai saugomi `scripts/check/` (politikos kontrolės punktai) ir
`scripts/quality/` (ratchet variklis). CI tiesos šaltinis yra
`.github/workflows/ci.yml`.

### Release PR spartusis kelias (`quality.yml`)

`.github/workflows/quality.yml` papildo CI main/release šakų PR, push į `main`,
dispatch ir merge grupių atvejais. PR naudoja pagal failų kelius filtruojamas
sparčiąsias patikras. Visam laikui išjungtas besidubliuojantis build buvo
pašalintas; tikrosios build/package/boot patikros lieka CI. Vienetų testų
rinkinys ir vitest vykdomi tik CI (`Unit Tests (N/8)`, `Vitest`): ankstesnės
`Unit Tests fast-path` ir `Vitest (fast-path)` užduotys kiekvienam PR kartodavo tas
pačias komandas, kai CI pradėjo vykdyti patikras release PR, ir buvo pašalintos
2026-10-26.

| Užduotis                                         | Apimtis                                                                                                                                                                                                  | Blokuojama             |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| `Docs Gates (fast-path)`                         | Dokumentacijos/kodo PR; API docs refs ir docs-all                                                                                                                                                        | Taip                   |
| `Fast Quality Gates`                             | Kodo PR; statinės patikros, typecheck, dashboard typecheck, paveikti vienetų testai                                                                                                                      | Taip                   |
| `Forgotten sibling tests`                        | Kodo PR; pakeisti moduliai atsekami iki statinių vartotojų ir kandidatinių sibling testų; barrel ir dynamic-import keliai pateikiami kaip rekomenduojamoji diagnostika su nuorodomis į allowlist išimtis | **Rekomenduojama**     |
| `No new ESLint warnings`                         | Kodo PR; suppressions mechanizmą įvertinanti lint kontrolė                                                                                                                                               | Taip, įskaitant forkus |
| `Merge integrity (changelog + generated skills)` | Nejuodraščiai PR; changelog ir sugeneruotų skills sinchronizavimas                                                                                                                                       | Taip, įskaitant forkus |

#### Pamirštų sibling testų ataskaita

`npm run check:forgotten-sibling-tests` pakartotinai naudoja testų poveikio
žemėlapio importų resolverį. Kiekvienam pakeistam produkciniam moduliui ji
pateikia deterministines
`changed module/symbol -> static consumer -> candidate sibling test` grandines,
kai kandidatinio testo nėra pull requesto diff. Markdown santrauka ir JSON
rezultatas išsaugomi kaip `forgotten-sibling-tests` darbo eigos artefaktas,
skirtas kalibravimui prieš bet kokį blokuojantįjį diegimą.

„Barrel“ pakartotiniai eksportai ir dinaminiai importai yra tik skiriamosios gebos diagnostika; jie niekada nesukuria blokuojančio radinio. Peržiūrėtos išimtys saugomos `config/quality/forgotten-sibling-allowlist.json`. Kiekvienas įrašas turi nurodyti naudotoją (consumer) ir kandidatinį testą, pateikti konkretų pagrindimą ir nuorodą į GitHub problemą (issue) arba sujungimo užklausą (pull request). Neteisingai suformuoti įrašai laikomi nepavykusiais (fail closed). Išimtys negali nuslopinti ištrinto kandidatinio testo arba pakeitimų (diff), kurie prideda `.skip`/`.todo`; teiginių susilpninimas ir kiti maskavimo būdai lieka nepriklausomai blokuojančių `check:test-masking` vartų atsakomybėje.

### Užduotis: `lint`

Vykdoma su kiekvienu PR į `main`. Nepavykus, blokuoja sujungimą.

| Scenarijus (`npm run ...`)        | Tikrina                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Blokuoja                                       |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| `check:node-runtime`              | Node.js versija patenka į palaikomą diapazoną                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Taip                                           |
| `check:cycles`                    | Cikliniai importai visame `src/` + `open-sse/` (AST pagrindu, išspręstos tsconfig `paths`). Paprasta komanda baigiasi su kodu 1, kai tik egzistuoja bent vienas ciklas (fail-closed nuo #15281), ir išvardija stipriai susietus komponentus (SCC). `check:cycles:ratchet` (ką vykdo CI) blokuoja, kai skaičius viršija `metrics.cycles` viršutinę ribą faile `quality-baseline.json` — šiuo metu 14, `direction: down`, todėl ji gali tik mažėti (#15159 G-01/G-02)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Taip (ratchet)                                 |
| `check:boundary`                  | `open-sse → src` susiejimas: unikalūs failų tarpusavio importai iš variklio į programą (`scripts/quality/measure-boundary.mjs`; briaunų sąrašas yra v4 branduolio/modulių atskyrimo taisymo darbų sąrašas). Paprastas režimas = patariamoji ataskaita (tokia pati kaip `quality:boundary`). `check:boundary:ratchet` (ką vykdo CI, taip pat `quality.yml` greitųjų vartų ratchet cikle) blokuoja, kai skaičius viršija `metrics.boundaryOpenSseToSrc` viršutinę ribą faile `quality-baseline.json` — pradinė reikšmė nustatyta pagal išmatuotą 771, `direction: down`; `--update` ją tik mažina; PR atveju lyginama su baze (`--base-ref`, žr. žemiau)                                                                                                                                                                                                                                                                                                                           | Taip (ratchet)                                 |
| `check:route-validation:t06`      | Zod schemos yra visuose maršrutuose (6 lygmens politika)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Taip                                           |
| `check:any-budget:t11`            | `@ts-expect-error // any` skaičius neviršija biudžeto (11 pakopos catraca)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Taip                                           |
| `check:provider-consistency`      | Kiekvienas teikėjas faile `providers.ts` turi atitinkamą įrašą faile `providerRegistry.ts` (ir atvirkščiai, leidžiamajame sąraše)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Taip                                           |
| `check:model-lifecycle`           | Trys rankiniu būdu prižiūrimos maršrutizavimo lentelės išlieka suderintos su į versijų kontrolę įtraukta gyvavimo ciklo momentine kopija (#11503): `FITNESS_TABLE` (`taskFitness.ts`) neįvertina nė vieno nebenaudojamo id, kurį `REGISTRY` gali maršrutizuoti; kiekvienas `BUILT_IN_ALIASES` taikinys yra įtrauktas į `REGISTRY` ir jo nėra nebenaudojamų id momentinėje kopijoje; kiekvienas nebenaudojamas id, vis dar esantis `REGISTRY`, yra peradresuojamas arba įrašytas į `allowedRetiredInCatalog`; ir toje momentinėje kopijoje nė vienas `DEFAULT_DEGRADATION_MAP` šaltinis ar taikinys nepažymėtas kaip nebenaudojamas. Tai neįrodo, kad modelį šiuo metu aptarnauja veikiantis upstream. Neprisijungus — lyginama su `config/quality/model-lifecycle.json`, atnaujinamu rankiniu būdu naudojant `npm run quality:refresh-model-lifecycle` (tinklas; neįtraukta į CI). `allowedRetiredInCatalog` yra burn-down ratchet: įrašą pridėkite tik turėdami sekimo užduotį. | Taip                                           |
| `check:fetch-targets`             | Kiekvienas `fetch("/api/...")` kliento pusėje esančiame `src/` susiejamas su tikru `route.ts`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Taip                                           |
| `check:deps`                      | Visos priklausomybės, kurias galima įdiegti su `npm install`, visuose saugyklos `package.json` failuose yra įtrauktos į `dependency-allowlist.json`; nauji neužfiksuotos versijos ar slopsquatted paketai pažymimi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Taip                                           |
| `audit:deps`                      | `npm audit` (šakninis + electron) — nėra aukšto/kritinio lygio įspėjimų (persidengia su osv `check:vuln-ratchet`; žr. „Rationalization Backlog“)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Taip                                           |
| `check:lockfile`                  | `package-lock.json` vientisumas — https registras, vientisumo maišos, jokių serverio (host) perrašymų                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Taip                                           |
| `check:licenses`                  | SPDX licencijų leidžiamųjų sąrašas produkcinėms priklausomybėms                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Taip                                           |
| `check:tracked-artifacts`         | Jokių kompiliavimo artefaktų / įtrauktų į saugyklą `node_modules` simbolinių nuorodų (taip pat vykdoma per husky pre-commit; pre-push sąmoningai palengvintas — #6716)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Taip                                           |
| `check:ai-attribution`            | Jokios DI/roboto `Co-Authored-By` pabaigos žymos ar DI generavimo poraštės PR pakeitimuose, pavadinime ar turinyje — Griežtoji taisyklė #16 (`quality.yml` greitųjų vartų (fast-gates) cikle, skirtame PR→`release/**` — nuskaito įvykio duomenis, ne PR atveju nieko nedaro — ir kaip tik PR skirtas žingsnis `ci.yml` lint, skirtas PR→`main`; taip pat husky `commit-msg` kabliukas; žmonių bendraautoriai leidžiami; #14436)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `check:vitest-exclusions`         | Kiekvienas Vitest išskyrimas nurodo sekimo problemą (tracking issue) ir yra įtrauktas į `config/quality/vitest-exclusions.json` (#13204)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Taip                                           |
| `check:file-size`                 | Šaltinio failai (`.ts`/`.tsx` kataloguose `src/`, `open-sse/`, `electron/`, `bin/`) neviršija `cap`, o testų failai (`*.test.ts(x)`) — `testCap`; failai, užfiksuoti `file-size-baseline.json` (`frozen` / `testFrozen`), neturi išaugti virš užfiksuoto dydžio                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Taip                                           |
| `check:error-helper`              | Klaidų atsakymai vykdytojuose / apdorotuvuose naudoja `buildErrorBody()` / `sanitizeErrorMessage()` (Pagrindinė taisyklė #12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Taip                                           |
| `check:migration-numbering`       | Migracijų SQL failai sunumeruoti iš eilės, be praleidimų ar dublikatų                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Taip                                           |
| `check:public-creds`              | Nėra tiesiogiai įrašytų OAuth `client_id`/`client_secret` ar Firebase Web raktų už `publicCreds.ts` ribų (Pagrindinė taisyklė #11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Taip                                           |
| `check:db-rules`                  | Nėra tiesioginio SQL ne `src/lib/db/` moduliuose; nėra barrel importų iš `localDb.ts` (Pagrindinės taisyklės #2/#5)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Taip                                           |
| `check:known-symbols`             | Tiekėjų vykdytojai, maršrutizavimo strategijos ir vertėjai, užregistruoti jų išsiuntimo lentelėse, atitinka diske esančius failus — nėra našlaičių ar nedeklaruotų simbolių                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Taip                                           |
| `check:route-guard-membership`    | Kiekvienas maršrutas, kuris paleidžia antrinį procesą, yra klasifikuojamas pagal `isLocalOnlyPath()` (Pagrindinės taisyklės #15/#17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Taip                                           |
| `check:test-discovery`            | Kiekvieną `*.test.ts` / `*.spec.ts` failą saugykloje apdoroja bent vienas testų vykdytuvas (ratchet: našlaičių sąrašas `test-discovery-baseline.json` gali tik mažėti)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Taip                                           |
| `check:test-tla-order`            | Joks `node:test` failas kataloge `tests/unit` neregistruoja testo, nepasiekia aukščiausio lygio `await` ir tuomet neregistruoja daugiau testų (#18045; ratchet: `test-tla-order-allowlist.json` gali tik mažėti)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Taip                                           |
| `check:agent-skills-sync`         | Sugeneruoti agent-skills artefaktai atitinka jų šaltinio katalogą (be nukrypimų)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `check:provider-asset-provenance` | Tiekėjų logotipai / ištekliai turi užregistruotą kilmės įrašą                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `lint:json`                       | JSON konfigūracijos failai sėkmingai analizuojami ir atitinka saugyklos lint taisykles                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `typecheck:core`                  | TypeScript kompiliacija be klaidų (tik rekomendaciniai įspėjimai)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Taip                                           |
| `typecheck:noimplicit:core`       | Griežtas `noImplicitAny` — orientuota į ateitį; daugeliui esamų iškvietimo vietų vis dar reikia anotacijų                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | **Rekomendacinis** (`continue-on-error: true`) |
| `check:dashboard-typecheck`       | `tsc`, apribotas `src/app/(dashboard)/**` (#7033) — `typecheck:core` kuruojamas 27 failų leidžiamųjų sąrašas neapima jokio dashboard TSX, o `next build` taip pat niekada netikrina jo tipų (`next.config.mjs` nustato `ignoreBuildErrors: true`), todėl našlaičių identifikatorių regresijos ten (#6625/#6909) buvo nematomos CI. Lyginama su užšaldyta klaidų skaičiaus baze pagal failą / TS kodą (`config/quality/dashboard-typecheck-baseline.json`, tas pats pasenimo kontrolės šablonas kaip `check:known-symbols`) — vartus užblokuoja tik NAUJOS klaidos, viršijančios bazinį skaičių; slenkstį mažinkite su `--update`, kai ištaisoma jau buvusi klaida.                                                                                                                                                                                                                                                                                                               | Taip                                           |

### Užduotis: `quality-gate`

Vykdoma po `test-coverage`. Nepavykus blokuoja suliejimą.

| Skriptas                     | Tikrina                                                                                                                                                                                   | Blokuojantis                       |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| `quality:collect`            | Išveda `quality-metrics.json` (ESLint įspėjimų skaičių, aprėptį iš sulietos shard ataskaitos)                                                                                             | Taip (slenksčio patikros pirmtakė) |
| `quality:ratchet`            | Kiekviena metrika `quality-baseline.json` neregresavo (ESLint įspėjimai ≤ bazė; aprėptis ≥ bazė)                                                                                          | Taip                               |
| `check:duplication`          | Kodo dubliavimasis (jscpd@4) neviršija bazės, apibrėžtos `quality-baseline.json`                                                                                                          | Taip                               |
| `check:complexity`           | Failo lygio ciklomatinis sudėtingumas neviršija ribos (pagrindinis ESLint `complexity` + `max-lines-per-function`)                                                                        | Taip                               |
| `check:cognitive-complexity` | Kognityvinio sudėtingumo slenkstis (`eslint-plugin-sonarjs`) — atskiras ESLint praejimas; CI abu paleidžia sulietus kaip vieną `check:complexity-ratchets` žingsnį                        | Taip                               |
| `check:dead-code`            | Nenaudojamų eksportų / failų slenkstis (knip) neregresuoja bazės atžvilgiu                                                                                                                | Taip                               |
| `check:compression-budget`   | Suspaudimo etaloninio testo biudžetas — kiekvieno variklio žetonų sutaupymo apatinės ribos neturi regresuoti                                                                              | Taip                               |
| `check:type-coverage`        | Tipizuoto kodo procento slenkstis (`type-coverage`) neregresuoja; iš esmės apima `typecheck:noimplicit:core`                                                                              | Taip                               |
| `check:codeql-ratchet`       | Atvirų CodeQL įspėjimų skaičius neregresuoja (skaitoma per `gh api`; be žetono praleidžiama sklandžiai) — atnaujinimo periodiškumas ir rankinis paleidimas: žr. „CodeQL slenkstis“ žemiau | Taip                               |

### Užduotis: `quality-extended`

Visa užduotis yra patariamojo pobūdžio (`continue-on-error: true`). Npm pagrindu veikiančios slenksčio patikros vykdomos iš tikrųjų; išoriniai skaneriai diegiami per `gh release download` ir savaime praleidžiami (exit 0), kai dvejetainis failas vis dar neprieinamas.

| Skriptas                 | Tikrina                                                                                                                                                                                                                                                                    | Blokuojantis                                          |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| `check:circular-deps`    | Nėra ciklinių priklausomybių (dpdm)                                                                                                                                                                                                                                        | **Patariamasis**                                      |
| `check:bundle-size`      | Paketo (bundle) dydis neviršija ribos                                                                                                                                                                                                                                      | **Patariamasis**                                      |
| `check:secrets`          | Slaptų duomenų skenavimas (gitleaks) — praleidžiama, jei nėra dvejetainio failo                                                                                                                                                                                            | **Patariamasis**                                      |
| `check:vuln-ratchet`     | Priklausomybių pažeidžiamumai (osv-scanner) neregresuoja — praleidžiama, jei nėra dvejetainio failo                                                                                                                                                                        | **Patariamasis**                                      |
| `check:workflows`        | Workflow tikrinimas (actionlint + zizmor); trūkstami ar sugedę skaneriai, neteisingos ataskaitos arba trūkstama slenksčio bazė traktuojama kaip nesėkmė su būsena INCOMPLETE. Galiojantys rezultatai vertinami pagal pasirinktą griežtą / patariamąją / slenksčio politiką | Vykdymas privalomas; zizmor slenkstis CI blokuojantis |
| `check:openapi-breaking` | Viešosios API sutarties (`openapi.yaml`) laužantys pakeitimai, lyginant su bazinę šaka (oasdiff) — išveda `openapiBreaking=N`; praleidžiama, jei nėra oasdiff arba bazinė specifikacija neprieinama                                                                        | **Patariamasis**                                      |

### Užduotis: `docs-sync-strict`

Vykdoma kiekviename PR į `main`. Nepavykus blokuoja suliejimą.

| Skriptas                       | Tikrina                                                                                                                                                                                                | Blokuoja                           |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------- |
| `check:docs-all`               | Meta-patikra, kuri nuosekliai paleidžia 6 žemiau išvardytas antrines patikras                                                                                                                          | Taip                               |
| ↳ `check:docs-sync`            | CHANGELOG / OpenAPI / llm.txt versijų nuoseklumas                                                                                                                                                      | Taip                               |
| ↳ `check:docs-counts`          | Skaičiai prozoje (teikėjų skaičius, migracijų skaičius ir pan.) yra ratchet lango ribose, palyginti su realiais skaičiais                                                                              | Taip                               |
| ↳ `check:env-doc-sync`         | Kiekvienas aplinkos kintamasis iš `.env.example` yra uždokumentuotas dokumentacijos lentelėje ir atvirkščiai                                                                                           | Taip                               |
| ↳ `check:deprecated-versions`  | Dokumentacijoje nėra pasenusių versijų eilučių                                                                                                                                                         | Taip                               |
| ↳ `check:doc-links`            | Vidinės markdown nuorodos dokumentacijoje nukreipia į realius failus (`[text]`/`(path)` forma)                                                                                                         | Taip                               |
| ↳ `check:fabricated-docs`      | Dokumentacijoje minimi maršrutai, aplinkos kintamieji, CLI komandos, hook pavadinimai ir failų keliai egzistuoja kodo bazėje. Griežta patikra per `--strict`; be vėliavos – švelni klaida (soft-fail). | Taip (per `--strict` CI aplinkoje) |
| `check:cli-i18n`               | CLI komandų eilutės yra visuose i18n lokalės failuose                                                                                                                                                  | Taip                               |
| `check:openapi-coverage`       | OpenAPI specifikacija apima bent ratchet principu nustatytą minimalų realių maršrutų skaičių                                                                                                           | Taip                               |
| `check:openapi-security-tiers` | Saugumo lygmenų anotacijos `openapi.yaml` faile atitinka `routeGuard.ts` klasifikacijas                                                                                                                | **Rekomenduojama**                 |
| `check:openapi-routes`         | Kiekvienas kelias `openapi.yaml` faile atitinka realų `route.ts` (apsauga nuo haliucinacijų)                                                                                                           | Taip                               |
| `check:docs-symbols`           | Kiekviena `/api/...` nuoroda `docs/**/*.md` failuose atitinka realų `route.ts` (apsauga nuo haliucinacijų)                                                                                             | Taip                               |
| `i18n translation drift`       | Neišversti raktai i18n lokalės failuose – tik įspėjimas                                                                                                                                                | **Rekomenduojama**                 |

### Užduotis: `i18n-ui-coverage`

| Skriptas                            | Tikrina                                                                                                                                                                                                                           | Blokuoja           |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `check-ui-keys-coverage` (įterptas) | UI i18n raktų apimtis yra ≥ 65 %                                                                                                                                                                                                  | Taip               |
| `check-ui-value-drift` (įterptas)   | Perrašius anglišką **reikšmę**, nelieka pasenusio vertimo                                                                                                                                                                         | Taip               |
| `check-new-key-coverage` (įterptas) | **Naujas** angliškas raktas yra išverstas visose lokalėse – `__MISSING__:` žymeklis atmetamas                                                                                                                                     | Taip               |
| `check-translation-ratio`           | Tikrų vertimų santykis kiekvienai lokalei (identiški angliškam tekstui / vietos žymekliai / trūkstami lapai, neįtraukti į leidžiamųjų sąrašą) neturi viršyti `config/quality/i18n-translation-baseline.json` + leistino nuokrypio | **Rekomenduojama** |

Reikalingas `fetch-depth: 0` – reikšmių nuokrypio patikra lygina `en.json` su sujungimo baze (merge base).

#### `check-ui-value-drift` – pasenusių vertimų patikra

Pagaudo vienintelę i18n regresiją, kurios kitos patikros struktūriškai negali matyti: angliška
reikšmė perrašoma, o vertimai, sukurti pagal _ankstesnį_ anglišką tekstą, lieka seni, todėl
neangliakalbiai naudotojai toliau skaito užtikrintai suformuluotą, tačiau jau neteisingą tekstą.

Tai realiai pateko į produkciją. `oauthModal.googleOAuthWarning` buvo perrašytas, kai buvo įdiegtas
Antigravity prisijungimo pagalbininkas (#5203); **39 iš 43 lokalių** išlaikė tekstą, raginantį
operatorius „nukopijuoti visą URL ir įklijuoti jį žemiau" – veiksmų seką, kuri su šiuo teikėju negali
būti užbaigta. Tai liko nepastebėta iki #8463, nes:

- `sync-ui-keys` papildo tik raktus, kurių **nėra**, niekada – tuos, kurie yra **pasenę**;
- `check-ui-keys-coverage` skaičiuoja raktų _buvimą_, todėl pasenęs vertimas įskaitomas kaip padengtas;
- `check-translation-drift` seka veidrodines dokumentacijos kopijas `docs/i18n/<locale>/**.md` –
  jis niekada neskaito `src/i18n/messages/*.json`. Blokuojantis užduotyje `docs-sync-strict` nuo
  2026-09 pakartotinio sinchronizavimo: redaguokite pagrindinį dokumentą → `npm run i18n:run -- --files=<doc>` (sekcijų lygmenyje, nebrangu).

**Pagrįsta skirtumais, o ne bazėmis.** Palygina `en.json` sujungimo bazėje (merge base) su darbiniu medžiu; kiekvienam raktui, kurio angliška reikšmė pasikeitė, bet kuri lokalė, vis dar turinti nepaliestą vertimą, laikoma pasenusia. Tai sąmoningai **įšaldo jau esamą skolą** — skirtumas negali atskleisti, iš kurios senos angliškos versijos kilo seniai egzistuojantis vertimas, todėl kontrolė vertina tik tai, ką liečia dabartinis pakeitimas. Alternatyva (kiekvieno rakto maišos bazė) kainuotų ~600 KB generuojamą failą — 3 kartus didesnį už didžiausią esamą bazę — ir nuolat keistųsi kiekviename i18n PR.

Du būdai ją patenkinti:

1. atnaujinkite paveiktus vertimus arba
2. nustatykite juos į `__MISSING__:<new english>` — tada vykdymo metu pateikiamas pataisytas angliškas tekstas (`src/i18n/request.ts::deepMergeFallback`, #7258), o raktas patenka į vertimo eilę.

Jei eilutės **prasmė** pasikeitė, geriau **pervadinkite raktą**: naujas raktas negali paveldėti pasenusio vertimo. Būtent šį šabloną naudojo #8463.

```bash
npm run i18n:check-value-drift          # griežtas režimas (ką vykdo CI)
npm run i18n:check-value-drift:warn     # tik ataskaita
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

Grąžina 0 su `SKIP reason=base-unresolved`, kai bazinio katalogo nepavyksta nuskaityti (seklusis klonas be bazinės nuorodos), analogiškai `check-openapi-breaking`.

### Užduotis: `i18n`

Pilna i18n validacijos matrica (po vieną užduotį kiekvienai lokalei). Visa užduotis yra patariamoji.

| Skriptas                        | Tikrina                               | Blokuojanti                                                 |
| ------------------------------- | ------------------------------------- | ----------------------------------------------------------- |
| `validate_translation.py quick` | Vertimų išsamumą kiekvienoje lokalėje | **Patariamoji** (`continue-on-error: true` visai užduočiai) |

### Užduotis: `pr-test-policy`

Vykdoma tik su pull request.

| Skriptas               | Tikrina                                                                                                                                       | Blokuojanti |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `check:pr-test-policy` | PR, keičiantys produkcinį kodą `src/`, `open-sse/`, `electron/` arba `bin/`, turi pridėti arba atnaujinti testus (Griežtoji taisyklė Nr. 8)   | Taip        |
| `check:test-masking`   | Pakeisti testų failai nesumažina grynųjų assert skaičiaus ir neprideda `assert.ok(true)` tautologijų                                          | Taip        |
| `check:pr-evidence`    | PR turinyje nurodomi testų/VPS pakeitimo įrodymai (mechanizuoja Griežtąją taisyklę Nr. 18, atlikdamas paiešką PR tekste — trapi, žr. Backlog) | Taip        |

### Užduotis: `test-vitest`

Vykdoma po `build`. Klaidos atveju blokuoja sujungimą.

| Rinkinys         | Tikrina                                                            | Blokuojanti                                                                                         |
| ---------------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| `test:vitest`    | MCP serverį (110 įrankių), autoCombo, talpyklą — vitest vykdytojas | Taip                                                                                                |
| `test:vitest:ui` | UI komponentų testus — vitest vykdytojas                           | **Blokuojanti** — esami gedimai aiškiai išskirti `vitest.config.ts`; nauji gedimai sugadina užduotį |

### Naktiniai darbo procesai (suplanuoti, patariamieji)

Jie vykdomi pagal cron tvarkaraštį (ir `workflow_dispatch`), niekada su PR. Visi yra patariamieji.

| Darbo procesas         | Tikrina                                                                                                                                                                         | Blokuojanti     |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `nightly-property`     | fast-check savybių testus su atsitiktine pradine reikšme (seed) ir dideliu paleidimų skaičiumi                                                                                  | **Patariamoji** |
| `nightly-resilience`   | heap augimo kontrolę, chaos klaidų injekciją, k6 apkrovos/ištvermės testus                                                                                                      | **Patariamoji** |
| `nightly-llm-security` | promptfoo injekcijų apsaugą (blokavimo režimas) + garak zondus (praleidžiami be teikėjo slaptosios)                                                                             | **Patariamoji** |
| `nightly-schemathesis` | OpenAPI kontrakto fuzzing (schemathesis) prieš veikiantį OmniRoute, naudojant `docs/openapi.yaml` — atskleidžia specifikacijų pažeidimus / neapdorotas 500 klaidas (Fase 8 B.4) | **Patariamoji** |
| `nightly-mutation`     | Stryker mutacijų testavimo balą greitoje vienetų testų juostoje — išgyvenę mutantai atskleidžia silpnus assert                                                                  | **Patariamoji** |
| `nightly-compat`       | Node variklio suderinamumo matricą visuose palaikomuose `engines.node` diapazonuose                                                                                             | **Patariamoji** |

Našumo bazės (heap, TTFB, kūrimo laikas) registruojamos, o ne kontroliuojamos: žr. [`PERF_BASELINE.md`](../ops/PERF_BASELINE.md) (`npm run perf:lts-baseline`).

---

## Spartos etapas (2026-08-30 → v4.0 LTS): visos bazinės ribos sušvelnintos 20 %

Savininko sprendimas (2026-08-30): iki v4.0 moduliarizavimo išleidimo sparta yra svarbesnė
už techninės skolos ribojimą. Visos **skaitinės** reketo bazinės ribos buvo vienu
audituojamu veiksmu sušvelnintos 20 %, o etapas deklaruotas faile `config/quality/quality-baseline.json`:

```json
"_policy": { "phase": "velocity", "since": "2026-08-30", "until": "4.0.0",
             "relaxPct": 20, "requireTighten": false }
```

| Kas pasikeitė                                                                                                                                                                                                               | Kur                                                                                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `metrics.*.value` — skaičiai, kuriems mažiau yra geriau, ×1.2, procentai, kuriems daugiau yra geriau, ÷1.2 (minimali aprėptis palikta 60, `eslintErrors` lieka 0, `eslintWarnings` 0 → 20 % užfiksuoto nutildymų skaičiaus) | `quality-baseline.json` (`_relax_velocity_2026_08_30` pastaboje išvardytos visos reikšmės prieš → po)  |
| `count` ×1.2 / `percentage` ×1.2                                                                                                                                                                                            | `complexity-baseline.json`, `duplication-baseline.json`                                                |
| `cap`, `testCap`, kiekviena `frozen[*]` / `testFrozen[*]` eilučių riba ×1.2                                                                                                                                                 | `file-size-baseline.json`                                                                              |
| kiekvieno failo / kiekvieno TS kodo skaičiai ×1.2                                                                                                                                                                           | `api-typecheck-baseline.json`, `dashboard-typecheck-baseline.json`, `open-sse-typecheck-baseline.json` |
| `THRESHOLD` 36 → 30                                                                                                                                                                                                         | `scripts/check/check-openapi-coverage.mjs`                                                             |
| `--require-tighten` tampa rekomendacinis, kol `_policy.requireTighten === false`                                                                                                                                            | `scripts/quality/check-quality-ratchet.mjs`                                                            |
| naktinis `bank-ratchet-shrinks` pristabdomas (jis užfiksuotų išmatuotą sumažėjimą ir panaikintų rezervą)                                                                                                                    | `.github/workflows/nightly-release-green.yml`                                                          |

Leidžiamųjų reikšmių sąrašai (`eslint-suppressions.json`, `test-masking-allowlist.json`, `test-discovery-baseline.json`,
…) **nėra** biudžetai ir nebuvo keičiami. Praėjimo / nepraėjimo politikos patikros (paslaptys, SQL taisyklės,
dokumentacijos ir aplinkos sutartis, i18n atitiktis, vienetų testai) nepasikeitė — nepraėjęs testas tebėra nepraėjęs testas.

**Įrankiai**

- `npm run quality:relax-baselines -- --pct 20 --note velocity_YYYY_MM_DD [--dry-run]` — vienkartinis
  sušvelninimas (`scripts/quality/relax-baselines.mjs`); atsisako būti vykdomas antrą kartą su ta pačia
  pastaba.
- `npm run quality:headroom [-- --only deadExports,fileSize] [--json out.json --md out.md]` —
  išmatuoja kiekvieną skaitinę patikrą taip, kaip tai daro CI, ir išveda likusį kiekvienos patikros rezervą
  (`scripts/quality/baseline-headroom.mjs`). Naktinė `baseline-headroom` užduotis paskelbia
  lentelę darbo eigos vykdymo suvestinėje ir įkelia jos JSON / Markdown ataskaitą kaip
  `baseline-headroom-<run_id>`, saugomą 90 dienų. Įspėjimo ir kritinės eilutės nurodo patikras,
  kurioms iki ribos liko ne daugiau kaip 10 % arba kurios ją jau viršijo. Peržiūrėkite šias ataskaitas
  kaip ankstyvą perspėjimą apie naudojamus biudžetus; patikrinkite atitinkamos patikros
  `_rebaseline_*` pastabas. Užduotis daugiau nebekuria ir neatnaujina nuolatinės problemos; #12149
  išsaugo ankstesnių ataskaitų istoriją.

**Naujo kodo režimas (Clean-as-You-Code) — nuo 2026-08-30, tik spartusis PR kelias**

Per `pull_request` įvykius `quality.yml` perduoda `--base-ref <PR bazės SHA>` komandoms `check:file-size`,
`check:complexity-ratchets` ir `check:dead-code`. Naudojant `check:complexity-ratchets` ir
`check:dead-code`, patikra lygina HEAD su sujungimo baze, **apsiribodama PR pakeistais failais**
(`scripts/check/newCodeMode.mjs`: sujungimo bazė parengiama vienkartiniame
`git worktree`, ESLint / knip paleidžiami joje ir HEAD būsenoje, tada apskaičiuojami kiekvieno failo
skaičių skirtumai):

- **blokuojanti patikra** — PR pridėjo ciklomatinio / kognityvinio sudėtingumo pažeidimų arba nenaudojamų eksportų pakeistuose failuose
  (`complexityNewCode=`, `cognitiveComplexityNewCode=`, `deadExportsNewCode=` žurnale);
- **rekomendacinė patikra** — bendras visuotinis skaičius, palygintas su užfiksuota bazine riba. Paveldėtas nuokrypis niekada
  nesukelia nesusijusio PR nepraėjimo; nuokrypis iš naujo užfiksuojamas derinant leidimą ir stebimas rezervo užduoties.

`check:file-size` bazinę nuorodą naudoja pagal savo taisykles (`scripts/check/check-file-size.mjs`, #8522):
jis patikrina kiekvieną šaltinio kodo ir testų failą medyje, naudodamas `git show` nuskaito kiekvieno failo
eilučių skaičių PR bazėje ir pažymi failą kaip nepraėjusį tik tada, kai jis išauga virš didesnės iš šių reikšmių:
jo bazinės viršutinės ribos (`frozen` / `testFrozen` arba `cap` / `testCap`, jei failo nėra bazėje) ir jo bazinio
dydžio. Todėl failas, kuris jau nukrypo bazėje, niekada nesukelia nesusijusio PR nepraėjimo.

`check:boundary:ratchet` taiko tą pačią taisyklę savo vieninteliam skaičiui
(`scripts/quality/measure-boundary.mjs --ratchet --base-ref <sha>`): PR įvykių metu tiek
`quality.yml` spartieji barjerai, tiek `ci.yml` lint užduotis perduoda PR bazės SHA, bazinis
commit išmatuojamas iš `git archive` eksporto, o PR nepavyksta tik tada, kai jo `open-sse → src`
ryšių skaičius viršija didesnę iš šių reikšmių: `metrics.boundaryOpenSseToSrc` arba bazės ryšių
skaičių. Bazės nuokrypis virš ribos pranešamas (`base drift herdado`), tačiau dėl jo nekaltas PR
niekada nepažymimas kaip nepavykęs; push → main išlaiko absoliučią ribą, o jei bazės SHA
neįmanoma nustatyti, su įspėjimu grįžtama prie šios ribos.

`workflow_dispatch` vykdymai, leidimo žalios būsenos patikra ir naktinė rezervo užduotis neturi PR
bazės, todėl išlaiko absoliutų (visuotinį) palyginimą. Aprėptis, dubliavimas ir tipų aprėptis kol
kas lieka visuotiniai (jų įrankiai negali nebrangiai sugeneruoti kiekvieno failo skirtumo) — tai
kandidatai tokiam pačiam apdorojimui.

**Etapo užbaigimas ties v4.0 (LTS = griežčiau nei anksčiau, o ne „grįžimas į įprastą būseną“)**

1. Grynoje `release/v4.0.0` viršūnėje: įrašui paleiskite `npm run quality:headroom --json`, tada
   `npm run quality:ratchet -- --update`, `check:file-size --update`,
   `check:complexity-ratchets --update`, `check:dead-code --update` ir kiekvieno tipų tikrinimo
   barjero `--update` — kiekviena bazinė reikšmė sumažinama iki išmatuotos reikšmės.
2. Pašalinkite `_policy` iš `quality-baseline.json` (taip iš naujo įjungiami `--require-tighten`
   ir naktinis rezervo kaupimas), o faile `check-openapi-coverage.mjs` atkurkite
   `THRESHOLD = 36` (arba didesnę reikšmę).
3. Ten, kur modularizavimas pasiteisino, sugriežtinkite ribas labiau nei išmatuota: failo dydžio
   `cap` vėl nustatykite į 1000 (arba 800), aprėpties apatines ribas padidinkite 5, o
   nenaudojamų eksportų skaičių modularizuotuose paketuose nustatykite į 0.

## Reketo bazinė reikšmė (`quality-baseline.json`)

Reketo variklis (`scripts/quality/check-quality-ratchet.mjs`) nuskaito `quality-baseline.json`
ir palygina jį su naujai surinktu `quality-metrics.json`. Jei kuris nors rodiklis pablogėja
daugiau nei leidžiama jo epsilon reikšmė, komponavimas laikomas nesėkmingu.

Šiuo metu stebimi rodikliai:

| Rodiklis              | Kryptis | Reikšmė                                |
| --------------------- | ------- | -------------------------------------- |
| `eslintWarnings`      | `down`  | ESLint įspėjimų skaičius neturi didėti |
| `coverage.statements` | `up`    | Sakinių aprėptis neturi mažėti         |
| `coverage.lines`      | `up`    | Eilučių aprėptis neturi mažėti         |
| `coverage.functions`  | `up`    | Funkcijų aprėptis neturi mažėti        |
| `coverage.branches`   | `up`    | Šakų aprėptis neturi mažėti            |

Norėdami atnaujinti bazinę reikšmę po realaus pagerėjimo:

```bash
npm run quality:ratchet -- --update
git add quality-baseline.json
```

Žyma `--update` įrašo dabartines išmatuotas reikšmes į `quality-baseline.json`.
Įtraukite šį failą į tą patį pakeitimų įrašą kaip ir rodiklį pagerinusį pakeitimą. PR, kuris pagerina
rodiklį neatnaujindamas bazinės reikšmės, bus aptiktas naudojant `--require-tighten` (6A.5 etapas,
įgyvendinimas dar laukiamas).

### CodeQL reketas: atnaujinimo dažnis ir rankinis paleidimas

`check:codeql-ratchet` nuskaito **saugyklos būseną, atnaujinamą pagal tvarkaraštį, o ne kiekvienam PR.**
`gh api repos/diegosouzapw/OmniRoute/code-scanning/default-setup` pateikia
`state: configured`, `schedule: weekly`: tai GitHub numatytojo nustatymo nuskaitymas, o ne
kiekvieno išsiuntimo analizė. Pasekmė: sujungus įspėjimus IŠTAISANTĮ PR, reketas toliau
nuskaito seną, didesnį skaičių, kol bus paleistas kitas suplanuotas nuskaitymas, todėl
jis praneša apie regresiją kiekviename atvirame PR, įskaitant ir taisančio PR tolesnius
pakeitimus, kol nuskaitymo rezultatai pasivys.

**Rankinis atnaujinimas**: `gh workflow run codeql.yml --ref release/vX.Y.Z` iš naujo paleidžia
analizę ir per kelias minutes pakartotinai paskelbia įspėjimus. Pirmiausia perskaitykite `.github/workflows/codeql.yml`
— jo antraštėje paaiškinta, kad jis skirtas **tik `workflow_dispatch`**, nes **konfliktuoja su
GitHub „default setup“** (`CodeQL analyses from advanced configurations cannot be
processed when the default setup is enabled`). Norint atkurti `push`/`pull_request`/
`schedule` paleidiklius, pirmiausia būtinas **savininko veiksmas**: Settings → Code security →
CodeQL: Default → Advanced. Nepridėkite `schedule:` paleidiklio neatlikę šio perjungimo — jis
tik sukurs nesėkmingus paleidimus.

**Sumažėjus skaičiui, sugriežtinkite bazinę reikšmę** — `node scripts/check/check-codeql-ratchet.mjs
--update` įrašo naują išmatuotą skaičių į `quality-baseline.json` →
`metrics.codeqlAlerts.value`, kad reketas tyliai neleistų regresijos iki ankstesnės viršutinės
ribos. Praktinis pavyzdys (2026-09-02/03): PR #12502 ištaisė 7 realius įspėjimus
(13 → 6 išmatuoti atviri); PR #12530 sugriežtino užfiksuotą bazinę reikšmę nuo 11 iki 6, kad ji atitiktų rezultatą; likę
6 įspėjimai tuomet buvo atmesti, kiekvienam pateikiant atskirą pagrindimą, kol atvirų įspėjimų liko 0.

**Sprendimą dėl atmetimo priima operatorius (griežta taisyklė #14)** — niekada neatmeskite CodeQL įspėjimo
atmetimo komentare neįrašę techninio pagrindimo: `won't fix`, kai tai aukštesnio lygmens protokolo
reikalavimas, `used in tests`, kai tai testų fikstūra, `false positive`, kai naudojama dezinfekavimo priemonė,
kurios CodeQL negali aptikti (precedentas: `docs/security/ERROR_SANITIZATION.md`).

---

## Testų pakartojimo politika (WS5.4, v3.8.49)

Pakartojimo politika nustatoma kiekvienai vykdymo priemonei atskirai ir niekada netaikoma visuotinai — visuotinis pakartojimas tikras regresijas paverčia nematomais nestabiliais testais:

| Vykdymo priemonė | Politika                                                                                                                                                  | Kodėl                                                                                                                                                 |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Playwright (e2e) | `retries: 1` tik CI aplinkoje, su `trace: on-first-retry`                                                                                                 | Naršyklės / tinklo laiko parinkimas iš tiesų yra nedeterministinis; vienas pakartojimas su trasavimu nestabilų testą paverčia diagnozuojamu artefaktu |
| Vitest           | JOKIO visuotinio pakartojimo. Patvirtintai nestabiliam testui aiškiai nustatomas individualus pakartojimas (matomas pakeitimų skirtume ir peržiūrimas PR) | Taip karantino sąrašas lieka repozitorijoje ir niekada nebūna nepermatomas                                                                            |
| node:test (unit) | JOKIO pakartojimo, niekada                                                                                                                                | Nestabilus vienetinis testas yra testo klaida — ją ištaisykite, o ne bandykite dar kartą                                                              |

Tiksliniai SLO, kai bus įdiegta nestabilumo telemetrija (WS5.2/5.3): <1 % nestabilumo dažnis vienam testui
(„taisyti dabar“ slenkstis), ≥95 % sėkmingo vykdymo dažnis vienam konvejeriui. Tai pramonės orientacinės vertės —
jas reikia iš naujo sukalibruoti pagal mūsų pačių matavimus.

## Leidimo lygmens kartelės nuokrypis (WS5.5, v3.8.49)

Kai kartelė (failo dydžio, sudėtingumo, eslint įspėjimų) regresuoja GRYNAME leidimo
viršūnės taške, t. y. ją pablogino SUJUNGTŲ pakeitimų VISUMA, o nė vienas atskiras PR
savo šakoje regresijos neatkuria, pataisą turi atlikti **leidimo vadovas, vieną kartą,
leidimo šakoje**: pirmenybę teikite išskyrimui / pertvarkymui; bazinę reikšmę iš naujo
nustatykite tik pateikę dokumentuotą pagrindimo įrašą. Niekada neperkelkite kombinacinio
nuokrypio į pakeitimo autoriaus PR ir niekada iš naujo nenustatykite bazinės reikšmės
kiekvienam PR (tai paslepia tikras regresijas). Pirmiausia atskirkite priežastį: prieš
manydami, kad ją sukėlė jūsų PR, atkurkite nesėkmę pagal gryną viršūnės tašką
bandomajame worktree.

## Kartelės sumažinimų užfiksavimas — mažėjimo kryptis (#8584)

Kartelė automatizuota tik iš dalies, ir būtent netinkama jos dalis. Viršutinės ribos
**didinimas** yra rankinis JSON redagavimas, trunkantis dešimt sekundžių ir greičiausiai
atblokuojantis nesėkmingą PR. Norint ją **sumažinti**, kas nors turi paleisti `--update`
ir įtraukti rezultatą į commit — o iki užduoties `bank-ratchet-shrinks` įdiegimo jokia
darbo eiga to nedarė. Išmatuotos pasekmės (2026-07-25): 18 fiksuotų failų jau neviršijo
naujiems failams taikomos 800 eilučių ribos, o blogiausias neatitikimas siekė 132×
(`src/shared/validation/schemas.ts`, 19 eilučių su 2,523 riba); sudėtingumo viršutinė
riba per maždaug 37 bazinės reikšmės atnaujinimo pastabas pakilo `1794 → 2169`, o
sumažėjo tiksliai vieną kartą (−1); be to, „kitame cikle sugriežtinti naudojant
`--update`“ buvo parašyta 31 kartą, bet įvykdyta vieną kartą. Riba, išliekanti ilgiau
nei ją nulėmęs kodas, kiekvieną užbaigtą išskaidymą tyliai paverčia augimo leidimu tam,
kas failą redaguos vėliau.

`nightly-release-green.yml` → užduotis **`bank-ratchet-shrinks`** uždaro šį ciklą:

|             |                                                                                                                  |
| ----------- | ---------------------------------------------------------------------------------------------------------------- |
| Paleidžiama | pagal `schedule` (3× per dieną) + `workflow_dispatch` — sąmoningai **ne** pagal `push`                           |
| Matuoja     | aukščiausią `release/vX.Y.Z`, naudodama tokią pačią skyrą ir įterpimo apsaugą kaip `release-green`               |
| Įrašo       | `check:file-size --update` ir `check:complexity-ratchets --update` (abu dėl savo konstrukcijos gali tik mažinti) |
| Patikrina   | `npm run check:ratchet-bank` (`scripts/quality/verify-ratchet-bank.mjs`)                                         |
| Pateikia    | vieną visada aktualų PR į leidimo šaką — priverstinai atnaujinamą, niekada nekuriantį perteklinių PR             |

Sumažinimai fiksuojami paketais, o ne po kiekvieno push, nes tam nėra delsos reikalavimo
(pakanka sumažinimą užfiksuoti per 8 val.), o vykdant po kiekvieno sujungimo PR šaka būtų
pakartotinai kuriama per sujungimo kampanijas ir kiekvieną kartą reikėtų vykdyti visą
ESLint patikrą. Aptikimas ir toliau vykdomas per push (`release-green`); paketais
atliekamas tik fiksavimas.

### Saugos tikrintuvas

Užduotis bazines reikšmes keičia be priežiūros, todėl būtent `verify-ratchet-bank.mjs`
užtikrina, kad tai būtų priimtina. Jis palygina medį po `--update` su `HEAD` ir
**nutraukia užduotį dar prieš sukuriant bet kokį commit** — neatverdamas jokio PR —
nebent kiekvienas pakeitimas yra vienas iš šių:

- `frozen` / `testFrozen` skaitinė reikšmė **sumažinta** arba **pašalinta**
- `complexity-baseline.json` → `count` **sumažinta**
- `quality-baseline.json` → `metrics.cognitiveComplexity.value` **sumažinta**

Visa kita laikoma nesėkme: skaičiaus didinimas, įrašo pridėjimas, `cap` / `testCap`
keitimas arba `_rebaseline_*` pastabos ištrynimas / perrašymas (šios pastabos yra audito
seka, paaiškinanti kiekvienos viršutinės ribos priežastį, ir saugomos tame pačiame
`frozen` objekte kaip failų įrašai). Robotas, galintis padidinti ribą, būtų akivaizdžiai
blogesnis už esamą padėtį. Regresijos apsauga: `tests/unit/verify-ratchet-bank.test.ts`.

Užduotis niekada nevykdo push į `release/*` — PR sujungia žmogus, todėl klaidingas
matavimas negali būti įtrauktas be peržiūros.

## Leidžiamųjų sąrašo politika

Kiekviena patikra, kuri negali nepavykti dėl jau egzistuojančių pažeidimų, naudoja fiksuotą leidžiamųjų sąrašą
(pvz., `KNOWN_STALE_DOC_REFS`, `KNOWN_MISSING`, `KNOWN_RAW_SQL`). Politika yra tokia:

**Pašalinkite pagrindinę priežastį; leidžiamųjų sąrašą naudokite tik tada, kai pažeidimas jau egzistavo ir
jo negalima ištaisyti tame pačiame PR.**

Pridėdami įrašą į leidžiamųjų sąrašą:

1. Įtraukite komentarą su pagrindimu.
2. Nurodykite susijusią sekimo užduotį (pvz., `// #3498 — 2 etapo funkcija, dar neįgyvendinta`).
3. Pašalinkite įrašą tame pačiame PR, kuriame ištaisomas pažeidimas — pasenęs įrašas, kuris daugiau
   nebeslopina aktyvaus pažeidimo, pats yra defektas (įgyvendinus 6A.3 pasenusių taisyklių kontrolę,
   patikra nepraeis dėl niekur nebenaudojamo leidžiamųjų sąrašo įrašo).

**Nepridėkite** įrašų į leidžiamųjų sąrašą vien tam, kad testai būtų išlaikyti greičiau. Sėkminga patikra su augančiu
leidžiamųjų sąrašu sukuria klaidingą kokybės įspūdį.

### Kai jūsų PR nepraeina patikros

1. **Atidžiai perskaitykite patikros išvestį** — joje tiksliai nurodoma, kuris failas ar simbolis
   pažeidė taisyklę.
2. **Ištaisykite pažeidimą** — dauguma patikrų yra deterministinės failų sistemos patikros, kurios praeina vos tik
   kodas tampa teisingas.
3. **Jei pažeidimas jau egzistavo** (t. y. jūs jo nesukūrėte, tačiau dabar patikra
   jį apima): pridėkite leidžiamųjų sąrašo įrašą su pagrindimo komentaru ir sekimo užduotimi.
4. **Jei patikra yra slenkstinė** (aprėptis, ESLint įspėjimai, dubliavimas, sudėtingumas):
   jūsų pakeitimas pablogino metriką. Ištaisykite pagrindinę problemą arba (retais atvejais) paleiskite
   `npm run quality:ratchet -- --update`, jei pakeitimas yra sąmoningas ir metrikos
   pablogėjimas priimtinas — tačiau PR apraše paaiškinkite, kodėl.
5. **Rekomendacinės patikros** (`continue-on-error: true`) yra informacinės — jos neblokuoja
   sujungimo, tačiau rodomos CI suvestinėje. Vis tiek jas ištaisykite.

---

## Naujos patikros pridėjimas

1. Sukurkite `scripts/check/check-<name>.mjs` (arba `.ts`). Politiką tikrinančios patikros baigiamos kodu 0/1.
   Slenkstinės patikros perduoda metriką į `quality-metrics.json` per `collect-metrics.mjs`.
2. Į `package.json` pridėkite `"check:<name>": "node scripts/check/check-<name>.mjs"`.
3. Prijunkite ją `.github/workflows/ci.yml` faile prie tinkamos užduoties
   (politika → `lint` arba `docs-sync-strict`; slenkstinė patikra → `quality-gate`).
4. Jei ji turi leidžiamųjų sąrašą, pritaikykite `reportStaleEntries()` iš
   `scripts/check/lib/allowlist.mjs`, kad pasenę įrašai būtų aptinkami automatiškai.
5. Parašykite testą kataloge `tests/unit/build/`, apimantį patikros aptikimo logiką.
6. Atnaujinkite šį dokumentą (pridėkite eilutę į atitinkamos užduoties lentelę).

---

## Agentų įrankiai: LSP cikle (pasirenkama)

Be CI patikrų, „OmniRoute“ pateikia **pasirenkamą** `agent-lsp` karkasą
(projekto lygmens `.mcp.json`, 7 etapas, 15 užduotis). Sukurkite `.mcp.json`,
kad programavimo agentams būtų pasiekiamas TypeScript kalbos serveris ir jie galėtų išspręsti simbolių /
diagnostikos problemas **prieš** rašydami kodą — tai kompiliavimo prieš teiginį papildinys
`typecheck:core` patikrai, pašalinantis „išgalvotų simbolių“ klaidas jų atsiradimo vietoje. Jis sąmoningai
neįkeliamas automatiškai (MCP↔LSP tarpinį sprendimą pasirenkate ir patikrinate patys); netinkamas įrašas tik užregistruoja
prisijungimo klaidą ir niekada nenutraukia seansų.

---

## Racionalizavimo darbų sąrašas (ROI peržiūra — 9 fazė, 3 banga)

Šis sąrašas buvo suderintas su `ci.yml` 2026-06-17 (ankstesnėje versijoje nebuvo
`audit:deps`, `check:tracked-artifacts`, `check:lockfile`, `check:licenses`,
`check:dead-code`, `check:cognitive-complexity`, `check:type-coverage`,
`check:codeql-ratchet`, `check:pr-evidence`). Suderinto rinkinio ROI peržiūra
nustatė toliau pateiktus racionalizavimo kandidatus. **Sujungimai yra mechaniniai CI
pakeitimai; perjungimai ir pašalinimai yra operatoriui palikti politikos sprendimai.** Niekas iš toliau
pateiktų pakeitimų dar nepritaikyta.

**Taip pat pirmiau nedokumentuota** (patariamojo pobūdžio, silpnas signalas): `docs-lint` užduotis
(markdownlint + Vale, visai užduočiai taikoma `continue-on-error`) ir atskiros skenerių darbo eigos
`semgrep.yml` / `codeql.yml` / `scorecard.yml`. `semgrepFindings: 0` yra
`quality-baseline.json`, tačiau nėra prijungta prie blokuojančio reketo `ci.yml` faile — šiuo metu ši metrika
yra nesusieta.

### Sujungimas / dubliavimo pašalinimas (mechaniniai pakeitimai, mažesnė rizika)

Kiekvienas kandidatas buvo patikrintas pagal faktinę vartų būseną 2026-06-17 (pasitikėk, bet patikrink);
paaiškėjo, kad keli „akivaizdūs“ sujungimai slepia techninę skolą ir **nėra** tiesiogiai pritaikomi.

- **`check:docs-sync` vykdoma du kartus** — atskirai `lint` užduotyje ir dar kartą `check:docs-all` (`docs-sync-strict`) viduje bei husky prieš patvirtinimą vykdomame kabliuke. ✅ **ATLIKTA** — atskiras iškvietimas `lint` užduotyje pašalintas.
- **CVE skenavimas** — ❌ **NETINKA tiesiogiai sujungti.** `audit:deps` griežtai nesėkmingai baigiasi aptikusi bet kokį aukšto / kritinio lygio CVE; `check:vuln-ratchet` (osv) nesėkmingai baigiasi tik esant _regresijai_, palyginti su bazine reikšme (šiuo metu 1 MODERATE). Semantika skiriasi — pašalinus `audit:deps` būtų prarasti absoliutūs aukšto / kritinio lygio vartai. Palikti abu.
- **Ciklų aptikimas** — ✅ **ATLIKTA** (#15159 G-01/G-02). Ankstesniame tekste `check:cycles` buvo vadinama „žaliais, kuruojamais“ vartais ir jos blokavimas buvo grindžiamas tuo, kad `check:circular-deps` (dpdm) pranešė apie 91 ciklą. Tas žalias rezultatas buvo **klaidingai teigiamas**: `check:cycles` skenavo 5 pakatalogius (450 failų), aptiko tik statinius `import|export … from` ir atmetė kiekvieną `@/` bei `@omniroute/open-sse/` specifikatorių, todėl negalėjo aptikti dinaminių importų ir pseudonimų ciklų, kurių saugykloje buvo daugiausia. Ištaisyta: dabar vartai pereina per `src` + `open-sse` (5023 failus), surenka specifikatorius iš TypeScript AST (todėl `import("…")` įskaičiuojamas, o tipo pozicijoje esantis `typeof import("…")` — ne) ir išsprendžia tsconfig `paths`. Aptinkama **14** ciklų, o ne 0. Kadangi 14 anksčiau egzistavusių ciklų negalima ištaisyti vartų PR, `check:cycles` dabar yra **reketas** (`--ratchet`, riba `metrics.cycles.value = 14` faile `quality-baseline.json`, `direction: down`) — jis blokuoja bet kokią _regresiją_, o skaičius gali tik mažėti. CI vykdo `npm run check:cycles:ratchet`. Mažinimo darbai vykdomi kartu su **A-01**. `check:circular-deps` (dpdm) lieka patariamojo pobūdžio kaip platesnė antroji nuomonė.
- **Sudėtingumas** — ✅ **ATLIKTA** (`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`): vienas ESLint perėjimas, skaičiuojama pagal ruleId, todėl ciklomatinio sudėtingumo ir maksimalaus eilučių skaičiaus bei kognityvinio sudėtingumo bazinės reikšmės lieka nepriklausomos; atskiros `check:complexity` / `check:cognitive-complexity` paliekamos vietiniam `--update`.
- **`/api` apsauga nuo haliucinacijų** — ✅ **ATLIKTA** (`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`): viena `src/app/api` FS inventorizacija, openapi-routes + docs-symbols vis dar teikia atskiras ataskaitas; atskiros patikros paliktos vietiniam vykdymui.
- **`check:node-runtime` vykdoma 11 užduočių** — ⚠️ **maža ROI.** Kiekvienai naudojamas atskiras vykdytojas, o patikra trunka <1 s; iš viso būtų sutaupyta ~10 s, tačiau būtų prarasta nebrangi kiekvienos užduoties apsauga. Neverta sukeliamo triukšmo.
- **`typecheck:noimplicit:core` CI lint užduotyje** — ✅ **pašalinta iš lint užduoties** (buvo patariamojo pobūdžio `continue-on-error`); blokuojamas tipų paviršius yra `typecheck:core` + `check:type-coverage`. Vietinis scenarijus paliktas.

### Perjungti / nuspręsti (operatoriaus politika)

- `check:openapi-security-tiers` (patariamojo pobūdžio) — ❌ **NETINKA tiesiogiai perjungti.** Ji baigiama su 0 kodu, tačiau įspėja, kad keliems `traffic-inspector` maršrutams, esantiems `LOCAL_ONLY_API_PREFIXES`, trūksta anotacijos `x-loopback-only: true`. Norint ją padaryti privalomą, pirmiausia reikia pridėti tas anotacijas į `openapi.yaml`.
- `typecheck:noimplicit:core` (patariamojo pobūdžio) — didžiąja dalimi pakeista blokuojančiu `check:type-coverage` reketu. Perjungti į reketą arba pašalinti perteklinį antrąjį `tsc` perėjimą.
- `test:vitest:ui` (dabar **blokuojanti**) — anksčiau egzistavusios triktys aiškiai neįtrauktos faile `vitest.config.ts` su `// #8618` sekimo komentarais; dėl naujų trikčių užduotis baigiama nesėkmingai.
- `check:secrets` (gitleaks, blokuojantis reketas, užfiksuotas ties 3 dokumentuotais klaidingai teigiamais rezultatais) — įtraukti šiuos 3 į leidžiamųjų sąrašą, kad būtų pasiektas 0, arba pažeminti iki patariamojo pobūdžio. Dubliuojasi su GitHub integruotu paslapčių skenavimu + `check:public-creds`.
- `check:pr-evidence` (blokuojanti, ieško atitikmenų PR aprašo tekste) — didelė klaidingai teigiamų rezultatų rizika; ją pašalinus susilpnėtų griežtosios taisyklės Nr. 18 vykdymas, todėl tai tikras politikos sprendimas.
- `semgrep` (atskira patariamojo pobūdžio patikra) — dubliuojasi su CodeQL OWASP šeimoms; prijungti jos bazinę reikšmę prie reketo arba pašalinti.

---

## Susijusi dokumentacija

- Tiekimo grandinė (kilmė, SBOM, Trivy, Scorecard): [`docs/security/SUPPLY_CHAIN.md`](../security/SUPPLY_CHAIN.md)

#### `check-key-completeness` — raktų rinkinių atitikties patikra

`scripts/i18n/check-key-completeness.mjs` (`npm run i18n:check-keys`, užduotis `i18n-ui-coverage`).
Palygina kiekvieno `src/i18n/messages/<locale>.json` galinių raktų rinkinį su `en.json` ir patikra
nepavyksta aptikus bet kokį trūkstamą ar perteklinį galinį raktą, neatsižvelgiant į tai, kada jis
buvo pridėtas. `__MISSING__:` vietos rezervavimo žymenys laikomi esamais (jų turinį vertina
santykio patikra). Tai yra absoliutus dviejų pakeitimų skirtumais ir procentais pagrįstų patikrų
papildinys: `check-ui-keys-coverage` kiekvienai lokalei nustato 80 % apatinę ribą (trūkstant 43
raktų iš ~13 000, vis tiek rodoma 99,7 %), o `check-new-key-coverage` vertina tik tuos raktus,
kuriuos PR prideda į `en.json`. Lokalės paketas sugeneruojamas iš tos dienos, kai sukuriama jo
šaka, `en.json` ir verčiamas kelias dienas, nors bazinėje šakoje vis pridedama naujų raktų; pats
paketo PR neprideda jokio rakto, todėl abi giminingos patikros nieko nepranešė, kai 1 paketas
(#13044) buvo sujungtas devyniose lokalėse trūkstant 43 raktų, o 2 paketas (#13660) — aštuoniose
lokalėse trūkstant 10 raktų (2026-09-15). Raudoną būseną ištaisykite naudodami
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers`; `extra` galinis raktas
reiškia, kad jis pašalintas iš šaltinio — pašalinkite jį iš lokalės. `--warn` pateikia ataskaitą
nesukeldamas nesėkmės. `--catalog=cli` tą patį palyginimą vykdo kataloge `bin/cli/locales`
(`npm run i18n:check-keys:cli`); abu žingsniai yra užduotyje `i18n-ui-coverage`.

#### `check-new-key-coverage` — naujų i18n raktų patikra

Gimininga `check-ui-value-drift` patikra. Pastaroji aptinka atvejį, kai angliška reikšmė buvo
**perrašyta**, tačiau jos vertimai nebuvo atnaujinti; ši patikra aptinka atvejį, kai angliškas
raktas buvo **pridėtas**, tačiau kai kurios lokalės jo negavo.

`check-ui-keys-coverage` negali aptikti šios klasės problemų: ji kiekvienai lokalei nustato
procentinę apatinę ribą, o trūkstant vienuolikos raktų iš ~13 000 aprėptis vis tiek siekia 99,9 %.
Procentinė kiekvienos kalbos reikšmė negali išreikšti „ši funkcija išleista neišversta“ — naujoje
lokalėje gali atsirasti visa funkcija be jokio teksto, o skaičius visiškai nepasikeis.

Incidentas, kurį ji įamžina: 3-iajame „Orchestration Canvas“ etape vienuolika jo raktų buvo
išversti į tuo metu egzistavusias 42 lokales. Po kelių valandų ES kalbų paketas (#13044) padidino
repozitorijos lokalių skaičių iki 51, o devynios naujos lokalės (`el`, `et`, `ga`, `hr`, `lt`,
`lv`, `mt`, `sl`, `sr`) jų taip ir negavo. `deepMergeFallback` vietoje trūkstamo rakto pateikia
anglišką tekstą, todėl problema pasireiškė neišversta, o ne tuščia naudotojo sąsaja — ji buvo
reali ir dėl pačios konstrukcijos nepastebima.

Kaip ir gimininga patikra, ji **atsižvelgia į pakeitimų skirtumus**, lygindama bazinio sujungimo
taško anglų kalbos duomenis su darbiniu medžiu, todėl ankstesnės spragos lieka užfiksuotos ir
įjungiant patikrą nereikėjo jokio perkėlimo.

**`__MISSING__:<english>` žymuo šios patikros netenkina (nuo 2026-09-17).** Anksčiau tai buvo
dokumentuotas atidėjimo būdas — vykdymo metu naudojamas tinkamas angliškas tekstas — kol aštuoni
funkcijų PR 2026-09-16 pridėjo 61 raktą ir, užuot juos išvertę, į visas 65 lokales įrašė šį
žymenį: ši patikra priėmė juos visus, niekas nesustabdė PR, o leidimo šakos viršūnėje privaloma
tikrų vertimų santykio patikra nepavyko visiems (pt-BR 3,2 % > 2,5 % + 0,5). Dabar žymuo
vertinamas kaip trūkstamas vertimas. Raudoną būseną ištaisykite naudodami
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers --batch-size=40` arba
visas lokales lygiagrečiai apdorodami su `npm run i18n:translate-new-keys`
(`scripts/i18n/translate-new-keys.sh`, saugu vykdyti atsietai, atsisako pradėti be
`OMNIROUTE_TRANSLATION_*` aplinkos kintamųjų). Raktas, kuris privalo likti angliškas
(fiksuotas produkto, variklio ar vėliavėlės pavadinimas), turi būti įtrauktas į
`scripts/i18n/untranslatable-keys.json`, o ne slepiamas už žymens. `vi` visiškai draudžia
žymenis (`tests/unit/i18n-vi-completeness.test.ts`).

#### `check-vitest-exclusions` — atidėtų testų patikra

Failas, esantis `vitest.config.ts` sąraše `exclude`, yra nevykdomas testas, nors medį skaitančiam
asmeniui jis atrodo kaip aprėpties dalis. Už komentaro
`// #8618 — pre-existing failure; remove this exclusion when fixed` susikaupė šešiasdešimt du
failai. Problema #8618 buvo uždaryta 2026-08-11, o jos stebimas sąrašas išaugo nuo 45 iki 62
įrašų; kiekvienas naujas įrašas paveldėjo komentarą su nuoroda į uždarytą problemą. Kai sąrašas
pagaliau buvo patikrintas failas po failo (#13204), **51 iš 62 failų sėkmingai veikė su esamu
medžiu be jokių šaltinio pakeitimų**.

Patikra reikalauja, kad kiekviena išimtis, nurodanti realų failą, (a) įvardytų stebėjimo problemą
ir (b) būtų įtraukta į `config/quality/vitest-exclusions.json` su išmatuota būsena, kad naujos
išimties pridėjimas būtų peržiūrimas pakeitimas specialiame faile, o ne dar viena eilutė 60 įrašų
masyve. Ji sąmoningai pakartotinai nevykdo neįtrauktų testų — tai trunka ~10 minučių ir turėtų
būti atliekama periodinėje užduotyje; inventoriuje registruojama, kada kiekvienas testas buvo
paskutinį kartą patikrintas.
