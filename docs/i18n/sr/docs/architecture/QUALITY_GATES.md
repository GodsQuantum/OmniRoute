# Quality Gates Reference (Српски)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/QUALITY_GATES.md) · 🇪🇹 [am](../../../am/docs/architecture/QUALITY_GATES.md) · 🇸🇦 [ar](../../../ar/docs/architecture/QUALITY_GATES.md) · 🇦🇿 [az](../../../az/docs/architecture/QUALITY_GATES.md) · 🇧🇬 [bg](../../../bg/docs/architecture/QUALITY_GATES.md) · 🇧🇩 [bn](../../../bn/docs/architecture/QUALITY_GATES.md) · 🇧🇦 [bs](../../../bs/docs/architecture/QUALITY_GATES.md) · 🇨🇿 [cs](../../../cs/docs/architecture/QUALITY_GATES.md) · 🇩🇰 [da](../../../da/docs/architecture/QUALITY_GATES.md) · 🇩🇪 [de](../../../de/docs/architecture/QUALITY_GATES.md) · 🇬🇷 [el](../../../el/docs/architecture/QUALITY_GATES.md) · 🇪🇸 [es](../../../es/docs/architecture/QUALITY_GATES.md) · 🇪🇪 [et](../../../et/docs/architecture/QUALITY_GATES.md) · 🇮🇷 [fa](../../../fa/docs/architecture/QUALITY_GATES.md) · 🇫🇮 [fi](../../../fi/docs/architecture/QUALITY_GATES.md) · 🇫🇷 [fr](../../../fr/docs/architecture/QUALITY_GATES.md) · 🇮🇪 [ga](../../../ga/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [gu](../../../gu/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ha](../../../ha/docs/architecture/QUALITY_GATES.md) · 🇮🇱 [he](../../../he/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [hi](../../../hi/docs/architecture/QUALITY_GATES.md) · 🇭🇷 [hr](../../../hr/docs/architecture/QUALITY_GATES.md) · 🇭🇺 [hu](../../../hu/docs/architecture/QUALITY_GATES.md) · 🇦🇲 [hy](../../../hy/docs/architecture/QUALITY_GATES.md) · 🇮🇩 [id](../../../id/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ig](../../../ig/docs/architecture/QUALITY_GATES.md) · 🇮🇹 [it](../../../it/docs/architecture/QUALITY_GATES.md) · 🇯🇵 [ja](../../../ja/docs/architecture/QUALITY_GATES.md) · 🇬🇪 [ka](../../../ka/docs/architecture/QUALITY_GATES.md) · 🇰🇭 [km](../../../km/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [kn](../../../kn/docs/architecture/QUALITY_GATES.md) · 🇰🇷 [ko](../../../ko/docs/architecture/QUALITY_GATES.md) · 🇱🇹 [lt](../../../lt/docs/architecture/QUALITY_GATES.md) · 🇱🇻 [lv](../../../lv/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ml](../../../ml/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [mr](../../../mr/docs/architecture/QUALITY_GATES.md) · 🇲🇾 [ms](../../../ms/docs/architecture/QUALITY_GATES.md) · 🇲🇹 [mt](../../../mt/docs/architecture/QUALITY_GATES.md) · 🇲🇲 [my](../../../my/docs/architecture/QUALITY_GATES.md) · 🇳🇵 [ne](../../../ne/docs/architecture/QUALITY_GATES.md) · 🇳🇱 [nl](../../../nl/docs/architecture/QUALITY_GATES.md) · 🇳🇴 [no](../../../no/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [or](../../../or/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [pa](../../../pa/docs/architecture/QUALITY_GATES.md) · 🇵🇭 [phi](../../../phi/docs/architecture/QUALITY_GATES.md) · 🇵🇱 [pl](../../../pl/docs/architecture/QUALITY_GATES.md) · 🇵🇹 [pt](../../../pt/docs/architecture/QUALITY_GATES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/QUALITY_GATES.md) · 🇷🇴 [ro](../../../ro/docs/architecture/QUALITY_GATES.md) · 🇷🇺 [ru](../../../ru/docs/architecture/QUALITY_GATES.md) · 🇱🇰 [si](../../../si/docs/architecture/QUALITY_GATES.md) · 🇸🇰 [sk](../../../sk/docs/architecture/QUALITY_GATES.md) · 🇸🇮 [sl](../../../sl/docs/architecture/QUALITY_GATES.md) · 🇸🇪 [sv](../../../sv/docs/architecture/QUALITY_GATES.md) · 🇰🇪 [sw](../../../sw/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ta](../../../ta/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [te](../../../te/docs/architecture/QUALITY_GATES.md) · 🇹🇭 [th](../../../th/docs/architecture/QUALITY_GATES.md) · 🇹🇷 [tr](../../../tr/docs/architecture/QUALITY_GATES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/QUALITY_GATES.md) · 🇵🇰 [ur](../../../ur/docs/architecture/QUALITY_GATES.md) · 🇺🇿 [uz](../../../uz/docs/architecture/QUALITY_GATES.md) · 🇻🇳 [vi](../../../vi/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [yo](../../../yo/docs/architecture/QUALITY_GATES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/QUALITY_GATES.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/QUALITY_GATES.md)

---

Овај документ је меродавна референца за све CI капије квалитета у OmniRoute-у.
Он описује сваку капију, шта она проверава, у оквиру ког CI посла се извршава, да ли користи
референтну основу са механизмом напретка или политику пролаза/пада и да ли блокира израду или је саветодавна.

За кратак резиме и политику листе дозвољених ставки погледајте одељак „Капије квалитета и механизми напретка“
у `AGENTS.md`. За критичку процену, класификацију зрелости и план репликације
истог система који не зависи од конкретних алата, погледајте
[Приручник за капије квалитета](../ops/QUALITY_GATE_PLAYBOOK.md).

---

## Inventar gejtova i profili izvršavanja

### Prijem kandidata

Tokovi rada CI i Quality Gates svaki emituju stabilan verdikt: `Gate / CI` i
`Gate / Quality`. Njihova verzionisana politika prijema navodi svaki uzvodni posao
kao obavezan ili savetodavan. Primenljivi obavezni posao mora da uspe: rezultati
nedostajuće, otkazano, preskočeno, na čekanju i nepoznato ne mogu da uspostave PASS.
Važeća klasifikacija samo-dokumentacija (docs-only) ili samo-katalog (catalog-only)
može učiniti stazu koda neprimenljivom; PR u statusu nacrta (draft) nije prihvaćen
kandidat. Oznaka `hotfix` ne oslobađa od dokaza.

Oba toka rada pokrivaju PR-ove ka granama main/release, push-ove na `main`, ručno
pokretanje (dispatch) i događaje grupa spajanja. Push, dispatch i merge-group pokreću
pun izbor. Push-ovi na `release/**` ih ne pokreću (2026-10-18): svaka promena je već
prošla matricu na svom PR-u, a za spojenu kombinaciju zadužen je Release-Green
(`docs/ops/RUNNER_BOX.md` → Hostovana staza). Fork-ovi i grupe spajanja koriste
hostovane runner-e za poslove koji bi inače birali self-hosted runner-e; dovoljan
hostovani kapacitet mora se proveriti pre uvođenja.

Svaka JSON potvrda identifikuje preuzeti (checkout) SHA, pokretanje toka rada i pokušaj.
CLI odbacuje nepodudarnost SHA između checkout-a i događaja. Testovi toka rada vezuju
članstvo u politici za listu `needs` posla koji daje verdikt, tako da nova ili uklonjena
staza ne može neprimetno da nestane. Potvrde pokrivaju sopstveni tok rada, a ne
objavljivanje, raspoređivanje ili interne detalje postojećeg savetodavnog skenera.
Aktiviranje oba naziva provera u pravilima grana je zasebna administrativna promena;
samo dodavanje ovih poslova ne štiti granu.

### Inventar statičkog skeniranja

Verzionisani inventar npm aliasa i članstvo u statičkom skeniranju nalaze se u
`config/quality/gate-manifest.json`. Pokrenite `npm run check:gate-manifest` da biste
validirali nazive skriptova i tačne komande u odnosu na `package.json`; dodavanja,
uklanjanja i odstupanje komandi obaraju i lokalni hook i poslove klasifikacije promena
u CI. Alias nije posao toka rada, instanca matrice niti test slučaj: ovi brojevi ne
smeju se predstavljati kao međusobno zamenljivi.

Koristite `npm run quality:scan -- --list` ili `npm run quality:scan:fast -- --list`
da pregledate izabrane aliase bez njihovog izvršavanja. Runner poziva npm ulaznu tačku,
pa je njegovo izvršno okruženje (uključujući Bun tamo gde je konfigurisan) očuvano.
Manifest beleži aliase van tih profila kao zasebno pozivane, a komande održavanja su
zabranjene u profilima skeniranja samo za čitanje.

Ovi profili pokrivaju samo statičko skeniranje. Oni ne overavaju testove proizvoda,
pokrivenost, pakovanje, spoljne provere niti potpuno prihvatanje kandidata za izdanje.
Prijem u toku rada koristi povezane `config/quality/admission-policy.json` i
`scripts/quality/admission-verdict.mjs`. Profili Release-observer-a ostaju zasebni;
njihove primenljive provere i potvrde pregledajte nezavisno. Opisni inventar ispod je
referenca, a ne dokaz da se gejt zaista izvršio.

Skripte se nalaze pod `scripts/check/` (gejtovi politike) i `scripts/quality/` (ratchet mehanizam).
Izvor istine za CI je `.github/workflows/ci.yml`.

### Brza putanja za release PR-ove (`quality.yml`)

`.github/workflows/quality.yml` dopunjava CI na PR-ovima ka main/release, push-ovima na
`main`, dispatch-u i grupama spajanja. PR-ovi koriste brze provere filtrirane po putanji.
Trajno onemogućena duplirana izrada je uklonjena; prave provere build/package/boot ostaju
u CI. Jedinicni paket i vitest izvršavaju se samo u CI (`Unit Tests (N/8)`, `Vitest`):
bivši poslovi `Unit Tests fast-path` i `Vitest (fast-path)` ponavljali su iste komande na
svakom PR-u otkako je CI počeo da se izvršava na release PR-ovima, i uklonjeni su 2026-10-26.

| Posao                                            | Obim                                                                                                                                                                                                                       | Blokiranje               |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `Docs Gates (fast-path)`                         | PR-ovi dokumentacije/koda; reference API dokumentacije i docs-all                                                                                                                                                          | Da                       |
| `Fast Quality Gates`                             | PR-ovi koda; statičke provere, typecheck, typecheck dashboard-a, pogođeni jedinicni testovi                                                                                                                                | Da                       |
| `Forgotten sibling tests`                        | PR-ovi koda; promenjeni moduli praćeni do statičkih potrošača i kandidata sestrinskih testova; barrel i putanje dinamičkog importa prijavljuju se kao savetodavna dijagnostika, sa referenciranim izuzecima iz allowlist-e | **Savetodavno**          |
| `No new ESLint warnings`                         | PR-ovi koda; lint stražar koji uzima u obzir potiskivanja (suppressions)                                                                                                                                                   | Da, uključujući fork-ove |
| `Merge integrity (changelog + generated skills)` | PR-ovi koji nisu nacrti; sinhronizacija dnevnika promena i generisanih veština                                                                                                                                             | Da, uključujući fork-ove |

#### Izveštaj o zaboravljenim sestrinskim testovima

`npm run check:forgotten-sibling-tests` ponovo koristi rezolver importa koji stoji iza mape uticaja testova.
Za svaki promenjeni produkcijski modul prijavljuje determinističke
lanце `changed module/symbol -> static consumer -> candidate sibling test` kada kandidat
test nije prisutan u diff-u pull request-a. Markdown rezime i JSON rezultat čuvaju se kao
artefakt toka rada `forgotten-sibling-tests` radi kalibracije pre bilo kakvog blokirajućeg uvođenja.

Barrel re-eksporti i dinamički importi su samo dijagnostika razrešavanja; oni nikada ne stvaraju blokirajući nalaz. Odobreni izuzeci se nalaze u `config/quality/forgotten-sibling-allowlist.json`. Svaki unos mora da navede konzumenta i test kandidat, da pruži konkretno obrazloženje i da sadrži link ka GitHub issue-u ili pull request-u. Neispravno formatirani unosi se odbijaju (fail-closed). Izuzeci ne mogu da potisnu obrisan test kandidat ili diff koji dodaje `.skip`/`.todo`; slabljenje asercija i drugo maskiranje ostaju u nadležnosti nezavisno blokirajuće kapije `check:test-masking`.

### Posao: `lint`

Pokreće se na svakom PR-u ka `main`. Blokira spajanje pri neuspehu.

| Skripta (`npm run ...`)           | Proverava                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Blokira                                      |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| `check:node-runtime`              | Verzija Node.js-a je unutar podržanog opsega                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Da                                           |
| `check:cycles`                    | Cirkularni importi kroz ceo `src/` + `open-sse/` (zasnovano na AST-u, sa razrešenim tsconfig `paths`). Bez dodatnih opcija izlazi sa kodom 1 kad god postoji bilo koji ciklus (fail-closed od #15281) i navodi SCC-ove (jako povezane komponente). `check:cycles:ratchet` (ono što CI pokreće) blokira kada broj pređe plafon `metrics.cycles` u `quality-baseline.json` — trenutno 14, `direction: down`, tako da vrednost može samo da opada (#15159 G-01/G-02)                                                                                                                                                                                                                                                                                                                                                                                               | Da (ratchet)                                 |
| `check:boundary`                  | `open-sse → src` sprega: jedinstveni importi između fajlova iz engine-a u aplikaciju (`scripts/quality/measure-boundary.mjs`; lista ivica predstavlja backlog remedijacije za v4 core/module-split). Bez opcija = savetodavni izveštaj (isto kao `quality:boundary`). `check:boundary:ratchet` (ono što CI pokreće, takođe u `quality.yml` fast-gates ratchet petlji) blokira kada broj pređe plafon `metrics.boundaryOpenSseToSrc` u `quality-baseline.json` — početno postavljen na izmerenih 771, `direction: down`; `--update` ga može samo smanjiti; na PR-ovima relativno u odnosu na bazu (`--base-ref`, vidi ispod)                                                                                                                                                                                                                                     | Da (ratchet)                                 |
| `check:route-validation:t06`      | Zod šeme prisutne na svim rutama (Tier 6 politika)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Da                                           |
| `check:any-budget:t11`            | Broj `@ts-expect-error // any` ne premašuje budžet (Tier 11 zapora)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Da                                           |
| `check:provider-consistency`      | Svaki provajder u `providers.ts` ima odgovarajući unos u `providerRegistry.ts` (i obrnuto, u okviru dozvoljene liste)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Da                                           |
| `check:model-lifecycle`           | Tri ručno održavane tabele rutiranja ostaju konzistentne sa snimkom životnog ciklusa koji je ubačen u repozitorijum (#11503): `FITNESS_TABLE` (`taskFitness.ts`) ne ocenjuje nijedan povučeni id koji `REGISTRY` može da rutira; svaka meta iz `BUILT_IN_ALIASES` je prisutna u `REGISTRY` i odsutna iz snimka povučenih identifikatora; svaki povučeni id koji je i dalje u `REGISTRY` je prosleđen ili naveden u `allowedRetiredInCatalog`; i nijedan izvor ni meta iz `DEFAULT_DEGRADATION_MAP` ne pojavljuje se kao povučen u tom snimku. Ovo ne dokazuje da model trenutno poslužuje aktivni upstream. Oflajn — poredi se sa `config/quality/model-lifecycle.json`, ručno se osvežava pomoću `npm run quality:refresh-model-lifecycle` (mreža; nije povezano u CI). `allowedRetiredInCatalog` je burn-down zapora: unos dodajte samo uz tiket za praćenje. | Da                                           |
| `check:fetch-targets`             | Svaki `fetch("/api/...")` u klijentskom `src/` se razrešava u stvarni `route.ts`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Da                                           |
| `check:deps`                      | Sve zavisnosti koje se mogu instalirati pomoću `npm install` u svakom `package.json` u repozitorijumu nalaze se u `dependency-allowlist.json`; novi paketi bez fiksirane verzije ili slopsquatovani paketi se označavaju                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Da                                           |
| `audit:deps`                      | `npm audit` (root + electron) — nema visokih/kritičnih bezbednosnih upozorenja (preklapa se sa osv `check:vuln-ratchet`; vidi Rationalization Backlog)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Da                                           |
| `check:lockfile`                  | Integritet fajla `package-lock.json` — https registar, heševi integriteta, bez zaobilaženja hostova                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Da                                           |
| `check:licenses`                  | SPDX lista dozvoljenih licenci za produkcijske zavisnosti                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Da                                           |
| `check:tracked-artifacts`         | Bez artefakata izrade / komitovanih simboličkih veza `node_modules` (pokreće se i u husky pre-commit; pre-push je namerno lagan — #6716)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Da                                           |
| `check:ai-attribution`            | Bez AI/bot `Co-Authored-By` trailer-a ili fusnote o AI-generisanju u PR komitovima, naslovu ili telu — Strogo pravilo #16 (u `quality.yml` petlji brzih kontrola za PR→`release/**` — čita podatke događaja, bez dejstva van PR-ova — i korak samo za PR u `ci.yml` lint-u za PR→`main`; takođe i husky `commit-msg` kuka; ljudski koautori su dozvoljeni; #14436)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `check:vitest-exclusions`         | Svako Vitest izuzeće navodi tiket za praćenje i pojavljuje se u `config/quality/vitest-exclusions.json` (#13204)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Da                                           |
| `check:file-size`                 | Izvorni fajlovi (`.ts`/`.tsx` u `src/`, `open-sse/`, `electron/`, `bin/`) ostaju u okviru `cap`, a test fajlovi (`*.test.ts(x)`) u okviru `testCap`; fajlovi zamrznuti u `file-size-baseline.json` (`frozen` / `testFrozen`) ne smeju da porastu preko svoje zabeležene veličine                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Da                                           |
| `check:error-helper`              | Odgovori o greškama u executorima/handlerima koriste `buildErrorBody()` / `sanitizeErrorMessage()` (Strogo pravilo #12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Da                                           |
| `check:migration-numbering`       | SQL fajlovi migracija su sekvencijalno numerisani, bez praznina ili duplikata                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Da                                           |
| `check:public-creds`              | Nema literalnih OAuth `client_id`/`client_secret` ili Firebase Web ključeva izvan `publicCreds.ts` (Strogo pravilo #11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Da                                           |
| `check:db-rules`                  | Nema sirovog SQL-a izvan `src/lib/db/` modula; nema barrel-importa iz `localDb.ts` (Stroga pravila #2/#5)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Da                                           |
| `check:known-symbols`             | Executori provajdera, strategije rutiranja i translatori registrovani u njihovim dispatch tabelama odgovaraju fajlovima na disku — nema osiroćenih ili nedeklarisanih simbola                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Da                                           |
| `check:route-guard-membership`    | Svaka ruta koja pokreće child proces klasifikovana je pomoću `isLocalOnlyPath()` (Stroga pravila #15/#17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Da                                           |
| `check:test-discovery`            | Svaka `*.test.ts` / `*.spec.ts` datoteka u repozitorijumu je obuhvaćena bar jednim test runner-om (ratchet: lista napuštenih (orphan) datoteka u `test-discovery-baseline.json` može samo da se smanjuje)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Da                                           |
| `check:test-tla-order`            | Nijedna `node:test` datoteka pod `tests/unit` ne registruje test, pa nailazi na `await` na najvišem nivou, a zatim registruje još testova (#18045; ratchet: `test-tla-order-allowlist.json` može samo da se smanjuje)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Da                                           |
| `check:agent-skills-sync`         | Generisani agent-skills artefakti odgovaraju svom izvornom katalogu (bez odstupanja)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `check:provider-asset-provenance` | Logoi i resursi provajdera nose zabeleženi unos o poreklu                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `lint:json`                       | JSON konfiguracione datoteke se parsiraju i zadovoljavaju lint pravila repozitorijuma                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `typecheck:core`                  | TypeScript kompilacija bez grešaka (samo informativna upozorenja)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Da                                           |
| `typecheck:noimplicit:core`       | Striktan `noImplicitAny` — usmereno ka budućnosti; mnoga postojeća mesta poziva još uvek zahtevaju anotacije                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | **Informativno** (`continue-on-error: true`) |
| `check:dashboard-typecheck`       | `tsc` sa opsegom na `src/app/(dashboard)/**` (#7033) — kurirana lista dozvoljenih od 27 datoteka skripte `typecheck:core` ne uključuje nijedan dashboard TSX, a `next build` ga takođe nikada ne proverava tipovno (`next.config.mjs` postavlja `ignoreBuildErrors: true`), pa su regresije napuštenih identifikatora tamo (#6625/#6909) bile nevidljive za CI. Poredi sa zamrznutom osnovom brojača po datoteci/po TS-kodu (`config/quality/dashboard-typecheck-baseline.json`, isti obrazac primene zastarelosti kao `check:known-symbols`) — samo NOVE greške iznad osnovnog broja uzrokuju neuspeh kapije; smanjite osnovu sa `--update` kada se ispravi prethodno postojeća greška.                                                                                                                                                                        | Da                                           |

### Posao: `quality-gate`

Pokreće se nakon `test-coverage`. Blokira spajanje pri neuspehu.

| Skripta                      | Proverava                                                                                                                                                                         | Blokira                   |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| `quality:collect`            | Emituje `quality-metrics.json` (broj ESLint upozorenja, pokrivenost iz objedinjenog izveštaja shard-ova)                                                                          | Da (uzvodno od ratchet-a) |
| `quality:ratchet`            | Nijedna metrika u `quality-baseline.json` se nije pogoršala (ESLint upozorenja ≤ osnova; pokrivenost ≥ osnova)                                                                    | Da                        |
| `check:duplication`          | Dupliranje koda (jscpd@4) ne premašuje osnovu u `quality-baseline.json`                                                                                                           | Da                        |
| `check:complexity`           | Ciklomatska složenost na nivou datoteke ne premašuje gornju granicu (osnovni ESLint `complexity` + `max-lines-per-function`)                                                      | Da                        |
| `check:cognitive-complexity` | Ratchet kognitivne složenosti (`eslint-plugin-sonarjs`) — zaseban ESLint prolaz; CI pokreće obe spojene kao jedinstven korak `check:complexity-ratchets`                          | Da                        |
| `check:dead-code`            | Ratchet nekorišćenih izvoza / datoteka (knip) ne regresira u odnosu na osnovu                                                                                                     | Da                        |
| `check:compression-budget`   | Budžet kompresije na benchmark-u — minimalne uštede tokena po mehanizmu ne smeju regresirati                                                                                      | Da                        |
| `check:type-coverage`        | Ratchet procenta tipiziranog koda (`type-coverage`) ne regresira; uveliko obuhvata `typecheck:noimplicit:core`                                                                    | Da                        |
| `check:codeql-ratchet`       | Broj otvorenih CodeQL upozorenja ne regresira (čita preko `gh api`; graciozno preskače bez tokena) — učestalost osvežavanja i ručno pokretanje: pogledajte „CodeQL ratchet" ispod | Da                        |

### Posao: `quality-extended`

Ceo posao je savetodavnog karaktera (`continue-on-error: true`). Ratchet provere zasnovane na npm-u
pokreću se zaista; eksterni skeneri se instaliraju preko `gh release download` i sami se preskaču
(exit 0) kada binarni fajl i dalje nije prisutan.

| Skripta                  | Proverava                                                                                                                                                                                                       | Blokira                                              |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `check:circular-deps`    | Nema cirkularnih zavisnosti (dpdm)                                                                                                                                                                              | **Savetodavno**                                      |
| `check:bundle-size`      | Veličina bundle-a ne premašuje gornju granicu                                                                                                                                                                   | **Savetodavno**                                      |
| `check:secrets`          | Skeniranje tajni (gitleaks) — preskače ako binarni fajl nedostaje                                                                                                                                               | **Savetodavno**                                      |
| `check:vuln-ratchet`     | Ranljivosti zavisnosti (osv-scanner) ne regresiraju — preskače ako binarni fajl nedostaje                                                                                                                       | **Savetodavno**                                      |
| `check:workflows`        | Lint radnih tokova (actionlint + zizmor); nedostajući/pokvareni skeneri, nevažeći izveštaji ili nedostajuća ratchet osnova padaju kao INCOMPLETE. Važeći nalazi prate izabranu politiku strict/advisory/ratchet | Izvršavanje obavezno; zizmor ratchet blokira u CI-ju |
| `check:openapi-breaking` | Promene koje krše javni API ugovor (`openapi.yaml`) u odnosu na osnovnu granu (oasdiff) — emituje `openapiBreaking=N`; preskače ako oasdiff nedostaje ili se osnovna specifikacija ne može razrešiti            | **Savetodavno**                                      |

### Posao: `docs-sync-strict`

Pokreće se na svakom PR-u ka `main`. Blokira spajanje pri neuspehu.

| Скрипта                        | Проверава                                                                                                                                                                     | Блокирајуће                |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| `check:docs-all`               | Мета-капија која редом покреће 6 под-капија наведених испод                                                                                                                   | Да                         |
| ↳ `check:docs-sync`            | Доследност верзија CHANGELOG / OpenAPI / llm.txt                                                                                                                              | Да                         |
| ↳ `check:docs-counts`          | Бројеви у прози (број провајдера, број миграција итд.) унутар су ратчет прозора стварних бројева                                                                              | Да                         |
| ↳ `check:env-doc-sync`         | Свака env променљива у `.env.example` документована је у табели документације, и обрнуто                                                                                      | Да                         |
| ↳ `check:deprecated-versions`  | Нема застарелих стрингова верзија у документацији                                                                                                                             | Да                         |
| ↳ `check:doc-links`            | Интерни markdown линкови у документацији воде до стварних фајлова (облик `[text]`/`(path)`)                                                                                   | Да                         |
| ↳ `check:fabricated-docs`      | Руте, env променљиве, CLI команде, називи хукова и путање фајлова цитирани у документацији постоје у бази кода. Чврста капија преко `--strict`; мекани неуспех без заставице. | Да (преко `--strict` у CI) |
| `check:cli-i18n`               | Стрингови CLI команди присутни су у свим i18n фајловима локала                                                                                                                | Да                         |
| `check:openapi-coverage`       | OpenAPI спецификација покрива бар ратчетовани минимум стварних рута                                                                                                           | Да                         |
| `check:openapi-security-tiers` | Анотације безбедносних нивоа у `openapi.yaml` доследне су класификацијама из `routeGuard.ts`                                                                                  | **Саветодавно**            |
| `check:openapi-routes`         | Свака путања у `openapi.yaml` води до стварног `route.ts` (анти-халуцинација)                                                                                                 | Да                         |
| `check:docs-symbols`           | Свака `/api/...` референца у `docs/**/*.md` води до стварног `route.ts` (анти-халуцинација)                                                                                   | Да                         |
| `i18n translation drift`       | Непреведени кључеви у i18n фајловима локала — само упозорење                                                                                                                  | **Саветодавно**            |

### Посао: `i18n-ui-coverage`

| Скрипта                           | Проверава                                                                                                                                                                                   | Блокирајуће     |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `check-ui-keys-coverage` (инлајн) | Покривеност UI i18n кључева је ≥ 65%                                                                                                                                                        | Да              |
| `check-ui-value-drift` (инлајн)   | Преписана енглеска **вредност** не оставља за собом застарели превод                                                                                                                        | Да              |
| `check-new-key-coverage` (инлајн) | **Нови** енглески кључ преведен је за сваки локал — `__MISSING__:` маркер се одбија                                                                                                         | Да              |
| `check-translation-ratio`         | Однос стварних превода по локалу (листови идентични енглеском / чувари места / недостајући, ван дозвољене листе) не сме премашити `config/quality/i18n-translation-baseline.json` + маргину | **Саветодавно** |

Потребан је `fetch-depth: 0` — капија за дрифт вредности упоређује `en.json` са основом спајања.

#### `check-ui-value-drift` — капија за застареле преводе

Хвата ону једну i18n регресију коју остале капије структурално не могу да виде: енглеска
вредност се препише, а преводи изведени из _претходног_ енглеског остају позади, па
корисници који не читају енглески и даље гледају самоуверено формулисан, а сада нетачан текст.

Ово се заиста догодило у продукцији. `oauthModal.googleOAuthWarning` је преписан кад је ушао
Antigravity помоћник за пријаву (#5203); **39 од 43 локала** задржало је текст који оператерима
каже да „копирају цео URL и налепе га испод" — ток који се за тог провајдера не може
завршити. Остало је непримећено све до #8463 јер:

- `sync-ui-keys` допуњава само кључеве који **недостају**, никада оне који су **застарели**;
- `check-ui-keys-coverage` броји _присутност_ кључа, па застарели превод пролази као покривен;
- `check-translation-drift` прати огледала документације `docs/i18n/<locale>/**.md` —
  никада не чита `src/i18n/messages/*.json`. Блокирајуће у послу `docs-sync-strict` од
  поновне синхронизације 2026-09: измените основни документ → `npm run i18n:run -- --files=<doc>`
  (на нивоу секције, јефтино).

**Заснован на разликама, а не на основној линији (baseline).** Пореди `en.json` на тачци спајања (merge base) са радним стаблом; за сваки кључ чија се енглеска вредност променила, сваки локал који и даље држи недирнут превод је застарео. Ово намерно **замрзава постојећи дуг** — разлика (diff) не може да открије из ког старог енглеског текста је дугогодишњи превод настао, па капија (gate) оцењује само оно што тренутна измена додирује. Алтернатива (основна линија са хешем по кључу) коштала би ~600 KB генерисаног фајла, 3× већег од највеће постојеће основне линије, уз сталне промене на сваком i18n PR-у.

Два начина да се захтев испуни:

1. ажурирајте погођене преводе, или
2. поставите их на `__MISSING__:<new english>` — рантајм тада служи исправљени енглески
   (`src/i18n/request.ts::deepMergeFallback`, #7258), а кључ се ставља у ред за превођење.

Ако се **значење** стринга променило, боље је **преименовати кључ**: нови кључ не може да наследи застарели превод. То је образац који је #8463 користио.

```bash
npm run i18n:check-value-drift          # строго (оно што CI покреће)
npm run i18n:check-value-drift:warn     # само извештавање
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

Излази са 0 уз `SKIP reason=base-unresolved` када се основни каталог не може прочитати (плитки клон без основне референце), исто као `check-openapi-breaking`.

### Посао: `i18n`

Комплетна матрица i18n валидације (један посао по локалу). Цео посао је саветодаван.

| Скрипта                         | Валидира                      | Блокирајуће                                                |
| ------------------------------- | ----------------------------- | ---------------------------------------------------------- |
| `validate_translation.py quick` | Комплетност превода по локалу | **Саветодавно** (`continue-on-error: true` на целом послу) |

### Посао: `pr-test-policy`

Покреће се само на pull request-овима.

| Скрипта                | Валидира                                                                                                                                      | Блокирајуће |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `check:pr-test-policy` | PR-ови који мењају продукциони код у `src/`, `open-sse/`, `electron/` или `bin/` морају да укључе или ажурирају тестове (Тврдо правило бр. 8) | Да          |
| `check:test-masking`   | Промењени тест фајлови не смањују нето број assert-ова нити додају `assert.ok(true)` таутологије                                              | Да          |
| `check:pr-evidence`    | Тело PR-а наводи доказе о тестовима/VPS-у за измену (механизује Тврдо правило бр. 18 grep-овањем прозе PR-а — крхко, види Backlog)            | Да          |

### Посао: `test-vitest`

Покреће се након `build`. Блокира спајање (merge) при неуспеху.

| Скуп             | Валидира                                              | Блокирајуће                                                                                                     |
| ---------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `test:vitest`    | MCP сервер (110 алата), autoCombo, кеш — vitest ранер | Да                                                                                                              |
| `test:vitest:ui` | Тестови UI компонената — vitest ранер                 | **Блокирајуће** — постојећи неуспеси су експлицитно искључени у `vitest.config.ts`; нови неуспеси обарају посао |

### Ноћни workflow-јеви (заказани, саветодавни)

Покрећу се по cron распореду (и на `workflow_dispatch`), никад на PR-овима. Сви су саветодавни.

| Workflow               | Валидира                                                                                                                                                        | Блокирајуће     |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `nightly-property`     | fast-check property тестови са насумичним seed-ом + великим бројем покретања                                                                                    | **Саветодавно** |
| `nightly-resilience`   | капија раста хипа (heap-growth gate), chaos убризгавање отказа, k6 load/soak                                                                                    | **Саветодавно** |
| `nightly-llm-security` | promptfoo заштита од injection-а (block режим) + garak сонде (прескачу се без provider secret-а)                                                                | **Саветодавно** |
| `nightly-schemathesis` | OpenAPI фазирање уговора (schemathesis) против живог OmniRoute-а користећи `docs/openapi.yaml` — открива кршења спецификације / необрађене 500-ице (Fase 8 B.4) | **Саветодавно** |
| `nightly-mutation`     | Stryker резултат мутационог тестирања преко брзе unit траке — преживели мутанти откривају слабе assert-ове                                                      | **Саветодавно** |
| `nightly-compat`       | Матрица компатибилности Node engine-а преко подржаних `engines.node` опсега                                                                                     | **Саветодавно** |

Основне линије перформанси (heap, TTFB, време изградње) се бележе, а не контролишу капијом: види [`PERF_BASELINE.md`](../ops/PERF_BASELINE.md) (`npm run perf:lts-baseline`).

---

## Фаза брзине (2026-08-30 → v4.0 LTS): свака основна граница ублажена је за 20%

Одлука власника (2026-08-30): до модуларизације у верзији v4.0, брзина испоруке важнија је
од задржавања техничког дуга на постојећем нивоу. Свака **нумеричка** основна граница механизма постепеног пооштравања ублажена је за 20% у једном
ревидирајућем пролазу, а фаза је декларисана у `config/quality/quality-baseline.json`:

```json
"_policy": { "phase": "velocity", "since": "2026-08-30", "until": "4.0.0",
             "relaxPct": 20, "requireTighten": false }
```

| Шта је промењено                                                                                                                                                                                                         | Где                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `metrics.*.value` — бројеви код којих је ниже боље ×1.2, проценти код којих је више боље ÷1.2 (доња граница покривености 60 је задржана, `eslintErrors` остаје 0, `eslintWarnings` 0 → 20% замрзнутог броја потискивања) | `quality-baseline.json` (напомена `_relax_velocity_2026_08_30` наводи сваку вредност пре → после)      |
| `count` ×1.2 / `percentage` ×1.2                                                                                                                                                                                         | `complexity-baseline.json`, `duplication-baseline.json`                                                |
| `cap`, `testCap`, ограничење броја линија за сваки `frozen[*]` / `testFrozen[*]` ×1.2                                                                                                                                    | `file-size-baseline.json`                                                                              |
| бројеви по датотеци / по TS коду ×1.2                                                                                                                                                                                    | `api-typecheck-baseline.json`, `dashboard-typecheck-baseline.json`, `open-sse-typecheck-baseline.json` |
| `THRESHOLD` 36 → 30                                                                                                                                                                                                      | `scripts/check/check-openapi-coverage.mjs`                                                             |
| `--require-tighten` постаје саветодавна опција док је `_policy.requireTighten === false`                                                                                                                                 | `scripts/quality/check-quality-ratchet.mjs`                                                            |
| ноћни `bank-ratchet-shrinks` се паузира (он би забележио измерено смањење и поништио расположиву резерву)                                                                                                                | `.github/workflows/nightly-release-green.yml`                                                          |

Листе дозвољених ставки (`eslint-suppressions.json`, `test-masking-allowlist.json`, `test-discovery-baseline.json`,
…) **нису** буџети и нису мењане. Контролне тачке смерница са исходом пролаз/пад (тајне, SQL правила,
уговор документације/окружења, i18n паритет, јединични тестови) нису промењене — неуспешан тест и даље је неуспешан тест.

**Алати**

- `npm run quality:relax-baselines -- --pct 20 --note velocity_YYYY_MM_DD [--dry-run]` — једнократно
  ублажавање (`scripts/quality/relax-baselines.mjs`); одбија да се покрене двапут са истом
  напоменом.
- `npm run quality:headroom [-- --only deadExports,fileSize] [--json out.json --md out.md]` —
  мери сваку нумеричку контролну тачку на исти начин као CI и исписује преосталу резерву за сваку контролну тачку
  (`scripts/quality/baseline-headroom.mjs`). Ноћни задатак `baseline-headroom` објављује
  табелу у сажетку извршавања радног тока и отпрема свој JSON/Markdown извештај као
  `baseline-headroom-<run_id>`, који се чува 90 дана. Редови са упозорењима и критични редови означавају контролне тачке
  које су унутар 10% свог ограничења или су га већ прекорачиле. Прегледајте ове извештаје као рано упозорење
  да се буџети троше; проверите напомене `_rebaseline_*` проблематичне контролне тачке. Задатак више
  не прави нити ажурира трајну пријаву проблема; #12149 чува ранију историју извештаја.

**Режим новог кода (Clean-as-You-Code) — од 2026-08-30, само брза путања за PR**

При догађајима `pull_request`, `quality.yml` прослеђује `--base-ref <PR base SHA>` командама `check:file-size`,
`check:complexity-ratchets` и `check:dead-code`. За `check:complexity-ratchets` и
`check:dead-code`, контролна тачка пореди HEAD са заједничком базом спајања **ограничено на датотеке које је PR
изменио** (`scripts/check/newCodeMode.mjs`: заједничка база спајања материјализује се у привременом
`git worktree`, ESLint/knip се покрећу тамо и на HEAD-у, а бројеви по датотеци се пореде):

- **блокирајуће** — PR је додао прекорачења цикломатске/когнитивне сложености или мртве извозе у датотекама које је изменио
  (`complexityNewCode=`, `cognitiveComplexityNewCode=`, `deadExportsNewCode=` у евиденцији);
- **саветодавно** — глобални укупан број у односу на замрзнуту основну вредност. Наслеђено одступање никада не обара
  невин PR; одступање се поново замрзава при усаглашавању издања и надгледа га задатак за праћење резерве.

`check:file-size` користи основну референцу према сопственим правилима (`scripts/check/check-file-size.mjs`, #8522):
проверава сваку изворну и тестну датотеку у стаблу, чита број линија сваке од њих у основи PR-а
помоћу `git show` и обара датотеку само када она нарасте преко веће вредности између њене основне горње границе
(`frozen` / `testFrozen`, или `cap` / `testCap` за датотеку ван основног скупа) и њене основне
величине. Датотека која је већ одступила у основи стога никада не обара невин PR.

`check:boundary:ratchet` примењује исто правило на свој једини број
(`scripts/quality/measure-boundary.mjs --ratchet --base-ref <sha>`): при PR догађајима и брзе провере у
`quality.yml` и lint задатак у `ci.yml` прослеђују основни SHA PR-а, основни commit се
мери из `git archive` извоза, а PR не пролази само када његов број `open-sse → src` веза
премаши већу од вредности `metrics.boundaryOpenSseToSrc` и броја на основи. Одступање основе
изнад горње границе се пријављује (`base drift herdado`), али никада не обара недужан PR; push → main
задржава апсолутну горњу границу, а основни SHA који није могуће разрешити враћа се на њу уз упозорење.

`workflow_dispatch` покретања, завршна провера свих услова за издање и ноћни задатак за резервни простор немају PR основу
и задржавају апсолутно (глобално) поређење. Покривеност, дуплирање и покривеност типовима за сада остају глобални
(њихови алати не производе јефтино разлику по датотеци) — кандидати су за исти третман.

**Затварање фазе у v4.0 (LTS = строже него раније, а не „повратак у нормалу”)**

1. На чистом врху гране `release/v4.0.0`: `npm run quality:headroom --json` ради евиденције, затим
   `npm run quality:ratchet -- --update`, `check:file-size --update`,
   `check:complexity-ratchets --update`, `check:dead-code --update`, као и `--update` за сваку
   typecheck проверу — свака основна вредност се спушта на измерену вредност.
2. Обришите `_policy` из `quality-baseline.json` (поново активира `--require-tighten` и ноћно
   акумулирање), вратите `THRESHOLD = 36` (или више) у `check-openapi-coverage.mjs`.
3. Пооштрите границе испод измерених вредности тамо где се модуларизација исплатила: вратите `cap` за величину датотеке на 1000
   (или 800), повећајте минималне прагове покривености за 5, поставите број мртвих извоза на 0 за модуларизоване пакете.

## Основна вредност механизма чегртаљке (`quality-baseline.json`)

Механизам чегртаљке (`scripts/quality/check-quality-ratchet.mjs`) чита `quality-baseline.json`
и пореди га са управо прикупљеним `quality-metrics.json`. Свака метрика која назадује
више од свог епсилона доводи до неуспешне изградње.

Метрике које се тренутно прате:

| Метрика               | Смер   | Значење                               |
| --------------------- | ------ | ------------------------------------- |
| `eslintWarnings`      | `down` | Број ESLint упозорења не сме да расте |
| `coverage.statements` | `up`   | Покривеност наредби не сме да опадне  |
| `coverage.lines`      | `up`   | Покривеност линија не сме да опадне   |
| `coverage.functions`  | `up`   | Покривеност функција не сме да опадне |
| `coverage.branches`   | `up`   | Покривеност грана не сме да опадне    |

Да бисте ажурирали основну вредност након стварног побољшања:

```bash
npm run quality:ratchet -- --update
git add quality-baseline.json
```

Ознака `--update` уписује тренутно измерене вредности у `quality-baseline.json`.
Укључите ову датотеку у исти комит са изменом која је побољшала метрику. PR који побољша
метрику без ажурирања основне вредности биће откривен помоћу `--require-tighten` (Фаза 6A.5,
имплементација је у току).

### CodeQL чегртаљка: учесталост освежавања и ручно покретање

`check:codeql-ratchet` чита **стање репозиторијума које се освежава по распореду — не за сваки PR.**
`gh api repos/diegosouzapw/OmniRoute/code-scanning/default-setup` пријављује
`state: configured`, `schedule: weekly`: GitHub скенирање са подразумеваним подешавањем, а не анализу
при сваком слању измена. Последица: након спајања PR-а који ИСПРАВЉА упозорења, чегртаљка наставља да чита
стари, већи број све док се не покрене следеће заказано скенирање — па пријављује назадовање
на сваком отвореном PR-у, укључујући и накнадне измене самог PR-а са исправком, све док скенирање не ажурира стање.

**Ручно освежавање**: `gh workflow run codeql.yml --ref release/vX.Y.Z` поново покреће
анализу и за неколико минута поново објављује упозорења. Прво прочитајте `.github/workflows/codeql.yml`
— његово заглавље објашњава да користи само `workflow_dispatch` **зато што је у сукобу са
GitHub-овим „подразумеваним подешавањем“** (`CodeQL analyses from advanced configurations cannot be
processed when the default setup is enabled`). Враћање окидача `push`/`pull_request`/
`schedule` најпре захтева **радњу власника**: Settings → Code security →
CodeQL: Default → Advanced. Немојте додавати окидач `schedule:` без тог пребацивања — то
ће само произвести неуспешна покретања.

**Пооштрите основну вредност након што број опадне** — `node scripts/check/check-codeql-ratchet.mjs
--update` уписује нови измерени број у `quality-baseline.json` →
`metrics.codeqlAlerts.value`, тако да чегртаљка прећутно не дозволи назадовање до
старе горње границе. Практичан пример (2026-09-02/03): PR #12502 исправио је 7 стварних упозорења
(13 → 6 измерених отворених); PR #12530 пооштрио је замрзнуту основну вредност са 11 → 6 како би се подударала; преосталих
6 упозорења је затим одбачено уз појединачна образложења, чиме је број отворених упозорења сведен на 0.

**Одбацивање је одлука оператера (Строго правило #14)** — никада немојте одбацити CodeQL упозорење
без навођења техничког образложења у коментару о одбацивању: `won't fix` за
захтев надређеног протокола, `used in tests` за тестни фикстур, `false positive`
за санитизатор који CodeQL не може да препозна (преседан: `docs/security/ERROR_SANITIZATION.md`).

---

## Политика поновног покретања тестова (WS5.4, v3.8.49)

Поновно покретање се подешава по покретачу тестова, никада као глобално правило — глобално поновно покретање претвара стварне регресије
у невидљиве нестабилности:

| Покретач              | Политика                                                                                                                                     | Зашто                                                                                                                                                       |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Playwright (e2e)      | `retries: 1` само у CI-ју, са `trace: on-first-retry`                                                                                        | Временски односи у прегледачу/мрежи заиста су недетерминистички; једно поновно покретање са трагом претвара нестабилност у артефакт погодан за дијагностику |
| Vitest                | БЕЗ глобалног поновног покретања. Доказано нестабилан тест добија изричито поновно покретање по тесту (видљиво у разлици, прегледано у PR-у) | Задржава списак изолованих тестова у репозиторијуму, тако да никада није непрозиран                                                                         |
| node:test (јединични) | БЕЗ поновног покретања, икада                                                                                                                | Нестабилан јединични тест је грешка у тесту — исправите га, немојте га само поново покретати                                                                |

Циљни SLO-ови након што телеметрија нестабилности буде уведена (WS5.2/5.3): стопа нестабилности <1% по тесту
(праг „исправити одмах“), стопа пролазности ≥95% по цевоводу. Референтне вредности из индустрије —
поново их калибрисати на основу наших мерења.

## Одступање чегртаљке на нивоу издања (WS5.5, v3.8.49)

Када чегртаљка (величина датотеке, сложеност, eslint упозорења) назадује на ЧИСТОМ врху издања
— тј. КОМБИНАЦИЈА спајања изазива назадовање, а ниједан појединачни PR не репродукује
регресију на сопственој грани — исправка припада **капетану издања, једнократно, на
грани издања**: предност дати издвајању/рефакторисању; поновно постављање основне вредности дозволити само уз документовани
унос образложења. Никада не пребацујте комбиновано одступање на PR сарадника и никада
не постављајте основну вредност поново за сваки PR (то скрива стварне регресије). Прво утврдите разлику: репродукујте
неуспех на чистом врху у пробном радном стаблу пре него што претпоставите да га је ваш PR изазвао.

## Бележење смањења чегртаљке — смер наниже (#8584)

Чегртаљка је само напола аутоматска, и то погрешна половина. **Повећање** ограничења је
ручна измена JSON-а која траје десет секунди и најбржи је начин да се одблокира неуспели PR.
**Смањење** захтева да неко покрене `--update` и комитује резултат — а док
задатак `bank-ratchet-shrinks` није уведен, ниједан ток рада га није покретао. Измерена последица
(2026-07-25): 18 замрзнутих датотека већ је било на ограничењу од 800 редова за нове датотеке или испод њега, а најгори
случај био је 132× (`src/shared/validation/schemas.ts`, 19 редова са ограничењем од 2,523);
горња граница сложености порасла је `1794 → 2169` кроз ~37 напомена о поновном постављању основне вредности, уз тачно једно
смањење (−1); а „пооштрити помоћу `--update` у следећем циклусу“ написано је 31 пут и испоштовано
једном. Ограничење које надживи кôд због којег је уведено неприметно претвара свако завршено
разлагање у дозволу за раст ономе ко следећи буде уређивао датотеку.

`nightly-release-green.yml` → задатак **`bank-ratchet-shrinks`** затвара ту петљу:

|               |                                                                                                                  |
| ------------- | ---------------------------------------------------------------------------------------------------------------- |
| Покреће се на | `schedule` (3×/дан) + `workflow_dispatch` — намерно **не** на `push`                                             |
| Мери          | највиши `release/vX.Y.Z`, са истим разрешавањем + заштитом од убацивања као `release-green`                      |
| Уписује       | `check:file-size --update` и `check:complexity-ratchets --update` (оба по конструкцији дозвољавају само смањење) |
| Проверава     | `npm run check:ratchet-bank` (`scripts/quality/verify-ratchet-bank.mjs`)                                         |
| Испоручује    | један увек ажуран PR према грани издања — принудно ажуриран, без стварања нежељене буке                          |

Бележење се обавља групно, уместо при сваком слању измена, јер нема захтев у погледу кашњења (смањење
забележено у року од 8 сати је прихватљиво), док би покретање при сваком спајању више пута поново изградило PR грану
током кампања спајања и сваки пут платило цену потпуног ESLint пролаза. Откривање остаје при
слању измена (`release-green`); само се бележење обавља групно.

### Безбедносни проверивач

Задатак без надзора уписује у основне вредности, па `verify-ratchet-bank.mjs` то чини
прихватљивим. Он пореди стабло после `--update` са `HEAD` и **прекида задатак
пре него што било који комит постоји** — без отварања PR-а — осим ако је свака измена једна од следећих:

- нумерички унос `frozen` / `testFrozen` је **смањен** или **уклоњен**
- `complexity-baseline.json` → `count` је **смањен**
- `quality-baseline.json` → `metrics.cognitiveComplexity.value` је **смањен**

Све остало доводи до неуспеха: повећање броја, додавање уноса, мењање `cap`/`testCap` или
брисање/преписивање напомене `_rebaseline_*` (те напомене су ревизијски траг који објашњава зашто свака
горња граница постоји и чувају се унутар истог објекта `frozen` као и уноси датотека).
Бот који би могао да повећа ограничење био би строго гори од постојећег стања. Заштита од регресије:
`tests/unit/verify-ratchet-bank.test.ts`.

Задатак никада не шаље измене у `release/*` — човек спаја PR, тако да погрешно мерење
не може бити прихваћено без прегледа.

## Политика листе дозвољених изузетака

Свака контрола која не може да падне због већ постојећих прекршаја користи замрзнуту листу дозвољених изузетака
(нпр. `KNOWN_STALE_DOC_REFS`, `KNOWN_MISSING`, `KNOWN_RAW_SQL`). Политика гласи:

**Отклоните основни узрок; користите листу дозвољених изузетака само када је прекршај већ постојао и
не може бити отклоњен у истом PR-у.**

При додавању ставке на листу дозвољених изузетака:

1. Укључите коментар са образложењем.
2. Наведите проблем за праћење (нпр. `// #3498 — Функционалност из фазе 2, још није имплементирана`).
3. Уклоните ставку у истом PR-у који отклања прекршај — застарела ставка која више
   не потискује активан прекршај и сама представља дефект (6A.3 провера застарелих правила ће,
   када буде имплементирана, оборити контролу због напуштене ставке на листи дозвољених изузетака).

**Немојте** додавати ставке на листу дозвољених изузетака да би тестови брже прошли. Зелена контрола уз све већу
листу дозвољених изузетака ствара лажан осећај квалитета.

### Када контрола падне на вашем PR-у

1. **Пажљиво прочитајте излаз контроле** — он вам тачно говори која датотека или симбол крши
   правило.
2. **Отклоните прекршај** — већина контрола су детерминистичке провере система датотека које пролазе чим
   код буде исправан.
3. **Ако је прекршај већ постојао** (тј. нисте га ви увели, али га контрола сада
   обухвата): додајте ставку на листу дозвољених изузетака са коментаром образложења и проблемом за праћење.
4. **Ако је контрола запорна** (покривеност, ESLint упозорења, дуплирање, сложеност):
   ваша измена је погоршала метрику. Отклоните основни проблем или (ретко) покрените
   `npm run quality:ratchet -- --update` ако је измена намерна и погоршање метрике
   прихватљиво — али у опису PR-а документујте зашто.
5. **Саветодавне контроле** (`continue-on-error: true`) су информативне — не блокирају
   спајање, али се појављују у CI резимеу. Ипак их исправите.

---

## Додавање нове контроле

1. Направите `scripts/check/check-<name>.mjs` (или `.ts`). Контроле политика завршавају се кодом 0/1.
   Запорне контроле уписују метрику у `quality-metrics.json` преко `collect-metrics.mjs`.
2. Додајте `"check:<name>": "node scripts/check/check-<name>.mjs"` у `package.json`.
3. Повежите је у `.github/workflows/ci.yml` у оквиру одговарајућег посла
   (политика → `lint` или `docs-sync-strict`; запорна контрола → `quality-gate`).
4. Ако има листу дозвољених изузетака, примените `reportStaleEntries()` из
   `scripts/check/lib/allowlist.mjs` како би се застареле ставке аутоматски откривале.
5. Напишите тест у `tests/unit/build/` који покрива логику откривања те контроле.
6. Ажурирајте овај документ (додајте ред у одговарајућу табелу послова).

---

## Алатке за агенте: LSP-in-the-loop (опционо)

Поред CI контрола, OmniRoute испоручује **опциони** `agent-lsp` оквир
(пројектни `.mcp.json`, Фаза 7, задатак 15). Направите `.mcp.json`
како бисте агентима за програмирање изложили TypeScript језички сервер, тако да разреше симболе /
дијагностику **пре** писања кода — пратећи механизам за компајлирање пре изношења тврдњи уз
`typecheck:core`, који отклања грешке „измишљених симбола“ на самом извору. Намерно се
не учитава аутоматски (ви бирате и проверавате MCP↔LSP мост); неисправна ставка само бележи
грешку при повезивању и никада не прекида сесије.

---

## Заостатак рационализације (преглед ROI — Фаза 9 Талас 3)

Овај инвентар је усклађен са `ci.yml` 2026-06-17 (претходна верзија је изоставила
`audit:deps`, `check:tracked-artifacts`, `check:lockfile`, `check:licenses`,
`check:dead-code`, `check:cognitive-complexity`, `check:type-coverage`,
`check:codeql-ratchet`, `check:pr-evidence`). Преглед ROI усклађеног скупа
идентификовао је следеће кандидате за рационализацију. **Спајања су механичке CI
измене; промене статуса/уклањања су одлуке о политици резервисане за оператера.** Ништа од наведеног
још није примењено.

**Такође није документовано изнад** (саветодавно, слаб сигнал): посао `docs-lint`
(markdownlint + Vale, цео посао има `continue-on-error`) и самостални токови рада скенера
`semgrep.yml` / `codeql.yml` / `scorecard.yml`. `semgrepFindings: 0` се налази у
`quality-baseline.json`, али није повезан са блокирајућим механизмом постепеног пооштравања у `ci.yml` — метрика је
тренутно неповезана.

### Спајање / уклањање дупликата (механички, нижи ризик)

Сваки кандидат је проверен у односу на актуелно стање контролних механизама 2026-06-17 (веруј, али провери);
испоставило се да неколико „очигледних“ спајања прикрива технички дуг и **нису** непосредне замене без додатних измена.

- **`check:docs-sync` се покреће два пута** — самостално у послу `lint`, а затим поново унутар `check:docs-all` (`docs-sync-strict`) и husky pre-commit hook-а. ✅ **ЗАВРШЕНО** — самостално позивање у `lint` је уклоњено.
- **CVE скенирање** — ❌ **НИЈЕ чисто спајање.** `audit:deps` завршава неуспехом при било ком CVE-у високог/критичног нивоа; `check:vuln-ratchet` (osv) завршава неуспехом само при _регресији_ у односу на полазну вредност (тренутно 1 MODERATE). Различита семантика — уклањањем `audit:deps` изгубио би се апсолутни контролни механизам за висок/критичан ниво. Задржати оба.
- **Откривање циклуса** — ✅ **ЗАВРШЕНО** (#15159 G-01/G-02). Стари текст је овде називао `check:cycles` „зеленим, ручно одабраним“ контролним механизмом и оправдавао задржавање његовог блокирајућег статуса тиме што је `check:circular-deps` (dpdm) пријављивао 91 циклус. То зелено стање било је **лажно зелено**: `check:cycles` је скенирао 5 потдиректоријума (450 датотека), препознавао само статички образац `import|export … from` и одбацивао сваки спецификатор `@/` и `@omniroute/open-sse/`, па није могао да уочи циклусе динамичког увоза и алијаса који су доминирали репозиторијумом. Исправљено: контролни механизам сада обилази `src` + `open-sse` (5023 датотеке), прикупља спецификаторе из TypeScript AST-а (тако да се `import("…")` рачуна, док се `typeof import("…")` на позицији типа не рачуна) и разрешава `paths` из tsconfig-а. Проналази **14** циклуса, а не 0. Пошто 14 постојећих циклуса не може да се исправи у PR-у за контролни механизам, `check:cycles` је сада механизам **постепеног пооштравања** (`--ratchet`, горња граница `metrics.cycles.value = 14` у `quality-baseline.json`, `direction: down`) — блокира сваку _регресију_, а број може само да опада. CI покреће `npm run check:cycles:ratchet`. Постепено смањивање се спроводи у оквиру **A-01**. `check:circular-deps` (dpdm) остаје саветодаван као шире друго мишљење.
- **Сложеност** — ✅ **ЗАВРШЕНО** (`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`): један ESLint пролаз, бројање по ruleId-у како би полазне вредности за цикломатску сложеност+максималан број редова и когнитивну сложеност остале независне; појединачни `check:complexity` / `check:cognitive-complexity` остају за локални `--update`.
- **`/api` заштита од халуцинација** — ✅ **ЗАВРШЕНО** (`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`): један FS инвентар за `src/app/api`, openapi-routes + docs-symbols и даље извештавају независно; појединачне провере остају за локална покретања.
- **`check:node-runtime` се покреће у 11 послова** — ⚠️ **низак ROI.** Сваки се извршава на засебном runner-у, а провера траје <1s; укупна уштеда је ~10s, уз губитак јефтине заштите по послу. Није вредно ремећења.
- **`typecheck:noimplicit:core` у CI lint-у** — ✅ **уклоњено из lint посла** (било је саветодавно уз `continue-on-error`); блокирајућу површину типова чине `typecheck:core` + `check:type-coverage`. Локална скрипта је задржана.

### Променити статус / одлучити (политика оператера)

- `check:openapi-security-tiers` (саветодавно) — ❌ **НИЈЕ могуће чисто променити статус.** Завршава се кодом 0, али упозорава да неколико `traffic-inspector` рута под `LOCAL_ONLY_API_PREFIXES` нема анотацију `x-loopback-only: true`. Његово наметање прво захтева додавање тих анотација у `openapi.yaml`.
- `typecheck:noimplicit:core` (саветодавно) — у великој мери је обухваћено блокирајућим механизмом постепеног пооштравања `check:type-coverage`. Претворити га у механизам постепеног пооштравања или уклонити сувишни други `tsc` пролаз.
- `test:vitest:ui` (сада **блокирајуће**) — постојећи неуспеси су изричито изузети у `vitest.config.ts` уз коментаре за праћење `// #8618`; нови неуспеси обарају посао.
- `check:secrets` (gitleaks, блокирајући механизам постепеног пооштравања замрзнут на 3 документована лажно позитивна резултата) — додати та 3 резултата на листу дозвољених како би се достигла 0 или спустити статус на саветодавни. Преклапа се са GitHub-овим уграђеним скенирањем тајни + `check:public-creds`.
- `check:pr-evidence` (блокирајуће, претражује прозни текст PR-а) — висок ризик од лажно позитивних резултата; уклањање слаби спровођење строгог правила бр. 18, па је ово стварна одлука о политици.
- `semgrep` (саветодаван, самосталан) — преклапа се са CodeQL-ом за OWASP породице; повезати његову полазну вредност са механизмом постепеног пооштравања или га уклонити.

---

## Повезана документација

- Ланац снабдевања (порекло, SBOM, Trivy, Scorecard): [`docs/security/SUPPLY_CHAIN.md`](../security/SUPPLY_CHAIN.md)

#### `check-key-completeness` — контролна капија за подударност скупа кључева

`scripts/i18n/check-key-completeness.mjs` (`npm run i18n:check-keys`, посао `i18n-ui-coverage`).
Пореди скуп крајњих кључева сваке датотеке `src/i18n/messages/<locale>.json` са `en.json` и пријављује
неуспех за сваки кључ који недостаје или је сувишан, без обзира на то када је кључ додат. Чувари места
`__MISSING__:` рачунају се као присутни (њихов садржај је предмет контролне капије односа). Ово је потпуна
допуна двеју контролних капија заснованих на разликама/процентима: `check-ui-keys-coverage` намеће доњу
границу од 80 % по локалу (43 одсутна кључа од ~13,000 и даље дају 99.7 %), док `check-new-key-coverage`
оцењује само кључеве које PR додаје у `en.json`. Серија локала генерише се из верзије `en.json` која
постоји на дан прављења њене гране и преводи се данима док основна грана наставља да додаје кључеве;
сам PR серије не додаје ниједан кључ, па су обе сродне контролне капије остале неме када је серија 1
(#13044) обједињена са 43 кључа мање у девет локала, а серија 2 (#13660) са 10 кључева мање у осам
(2026-09-15). Црвену проверу исправите помоћу
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers`; сувишан (`extra`) крајњи кључ
значи да га је извор уклонио — избришите га из локала. `--warn` пријављује проблем без изазивања
неуспеха. `--catalog=cli` покреће исто поређење над `bin/cli/locales` (`npm run i18n:check-keys:cli`);
оба корака налазе се у послу `i18n-ui-coverage`.

#### `check-new-key-coverage` — i18n контролна капија за нове кључеве

Сродна је контроли `check-ui-value-drift`. Она открива вредност на енглеском која је **преписана**
док су њени преводи остали непромењени; ова открива кључ на енглеском који је **додат**
а да га неки локали никада нису добили.

`check-ui-keys-coverage` не може да уочи ову врсту проблема: намеће процентуалну доњу границу по локалу,
а једанаест одсутних кључева од ~13,000 оставља покривеност на 99.9%. Проценат по језику не може да
изрази „ова функционалност је објављена непреведена“ — цела функционалност може да стигне у нови локал
без икаквог текста, а да се број никада не промени.

Инцидент који ова контрола обухвата: фаза 3 оркестрационог платна превела је својих једанаест кључева
у свих 42 локала који су тада постојали. Неколико сати касније, серија језика ЕУ (#13044) довела је
репозиторијум до 51 локала, а девет нових (`el`, `et`, `ga`, `hr`, `lt`, `lv`, `mt`, `sl`, `sr`) никада
их није добило. `deepMergeFallback` замењује одсутан кључ енглеским текстом, па је последица била
непреведен, а не празан кориснички интерфејс — стваран проблем који је по самој конструкцији остао непримећен.

Као и сродна контрола, она је **свесна разлика** и пореди енглески на основи обједињавања са радним
стаблом, тако да већ постојећи недостаци остају замрзнути и за укључивање контролне капије није била
потребна миграција.

**Ознака `__MISSING__:<english>` не задовољава ову контролу (од 2026-09-17).** Раније је била
документовани начин одлагања — окружење за извршавање се враћа на исправан енглески текст — све док
осам PR-ова функционалности од 2026-09-16 није додало 61 кључ и утиснуло ознаку у свих 65 локала
уместо да их преведе: ова контролна капија је прихватила сваки од њих, ништа није блокирало PR-ове,
а блокирајућа контролна капија односа стварних превода затим није прошла на врху издања ни за кога
(pt-BR 3.2 % > 2.5 % + 0.5). Ознака се сада оцењује као одсутан превод. Црвену проверу исправите помоћу
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers --batch-size=40`, или за
све локале паралелно помоћу `npm run i18n:translate-new-keys` (`scripts/i18n/translate-new-keys.sh`,
безбедно за покретање без прикљученог терминала, одбија да се покрене без променљивих окружења
`OMNIROUTE_TRANSLATION_*`). Кључ који мора да остане на енглеском (фиксирани назив производа/механизма/опције)
припада датотеци `scripts/i18n/untranslatable-keys.json`, никада иза ознаке. `vi` у потпуности забрањује
ознаке (`tests/unit/i18n-vi-completeness.test.ts`).

#### `check-vitest-exclusions` — контролна капија за паркиране тестове

Датотека на листи `exclude` у `vitest.config.ts` представља тест који се не извршава, а ономе ко чита
стабло изгледа као покривеност. Шездесет две датотеке нагомилале су се иза коментара
`// #8618 — pre-existing failure; remove this exclusion when fixed`. Проблем #8618 затворен је
2026-08-11, док је листа коју је пратио порасла са 45 на 62 ставке, при чему је свака нова наследила
коментар који упућује на затворен проблем. Када је листа коначно измерена датотеку по датотеку (#13204),
**51 од 62 теста прошло је над тренутним стаблом без икакве измене изворног кода**.

Контролна капија захтева да свако изузеће које се разрешава у стварну датотеку (а) наведе проблем за
праћење и (б) буде присутно у `config/quality/vitest-exclusions.json` са својим измереним статусом,
тако да додавање изузећа буде разлика која се може прегледати у наменској датотеци, уместо још једног
реда у низу од 60 ставки. Она намерно не покреће поново изузете тестове — то траје ~10 минута и припада
периодичном послу; евиденција бележи када је сваки од њих последњи пут измерен.
