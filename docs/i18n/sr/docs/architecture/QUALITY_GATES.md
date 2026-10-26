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

## Инвентар контролних тачака и профили извршавања

### Прихватање кандидата

CI токови рада и токови рада контролних тачака квалитета емитују по један стабилан исход: `Gate / CI` и
`Gate / Quality`. Њихова верзионисана политика прихватања наводи сваки претходни посао
као обавезан или саветодаван. Применљив обавезни посао мора да буде успешан: резултати који
недостају, који су отказани, прескочени, на чекању или непознати не могу да потврде PASS. Важећа
класификација само за документацију или само за каталог може да учини програмску грану неприменљивом;
радни нацрт PR-а није прихваћени кандидат. Ознака `hotfix` не укида обавезу прилагања доказа.

Оба тока рада обухватају PR-ове ка главним/release гранама, push операције на `main`, ручно покретање
и догађаје групе спајања. Push, ручно покретање и група спајања извршавају пун избор. Push операције на
`release/**` их не покрећу (2026-10-18): свака измена је већ прошла матрицу у свом PR-у,
а спојена комбинација је задатак система Release-Green (`docs/ops/RUNNER_BOX.md` → хостована грана). Fork-ови
и групе спајања користе хостоване извршиоце за послове који би иначе изабрали сопствено хостоване
извршиоце; пре увођења мора се проверити да ли је хостовани капацитет довољан.

Свака JSON потврда идентификује преузети SHA, извршавање тока рада и покушај.
CLI одбија неподударање SHA вредности преузетог стања и догађаја. Тестови токова рада везују чланство у политици
за листу `needs` посла који доноси исход, тако да нова или уклоњена грана не може неприметно да нестане.
Потврде обухватају сопствени ток рада, а не објављивање, примену или интерне детаље
постојећег саветодавног скенера. Активирање оба назива провере у правилима гране представља
засебну административну измену; додавање ових послова само по себи не штити грану.

### Капацитет извршавања корисничког интерфејса

CI извршава комплетан инвентар корисничког интерфејса у виду четири матрична сегмента `test-vitest`, од којих сваки има највише
четири извршиоца и постојећи рок за посао од 15 минута. Први сегмент такође извршава
MCP/autoCombo Vitest пакет. Резултат обавезног посла обухвата сваки део матрице; неуспех
или отказивање једног сегмента не може да потврди прихватање кандидата.

Ноћни посматрач задржава засебну потврду тачног кандидата за сваки сегмент корисничког интерфејса,
укључујући MCP извршавање у првој потврди. Обавезне су све четири потврде, евиденције и одговарајући
идентитети извршавања. Локално `npm run test:vitest:ui` и даље бира
комплетан пакет; једно покретање са `--shard` представља само делимичан доказ.

### Инвентар статичког скенирања

Верзионисани инвентар npm псеудонима и чланство у статичком скенирању налазе се у
`config/quality/gate-manifest.json`. Покрените `npm run check:gate-manifest` да бисте проверили
називе скрипти и тачне команде у односу на `package.json`; додавања, уклањања и
одступања команди доводе до неуспеха и локалне куке и послова за класификацију измена у CI-ју.
Псеудоним није посао тока рада, инстанца матрице нити тест случај: ове бројеве
не треба представљати као међусобно заменљиве.

Користите `npm run quality:scan -- --list` или `npm run quality:scan:fast -- --list`
да бисте прегледали изабране псеудониме без њиховог извршавања. Извршилац позива
npm улазну тачку, тако да се њено окружење за извршавање (укључујући Bun тамо где је конфигурисан) задржава.
Манифест бележи псеудониме изван тих профила као засебно позване, а
команде за одржавање забрањене су у профилима скенирања само за читање.

Ови профили обухватају само статичко скенирање. Они не потврђују тестове производа,
покривеност, паковање, спољне провере нити потпуно прихватање кандидата за издање.
Прихватање у току рада користи повезане `config/quality/admission-policy.json` и
`scripts/quality/admission-verdict.mjs`. Профили посматрача издања остају засебни;
независно прегледајте њихове применљиве провере и потврде. Статичке
команде потпуног посматрача декларисане су у `config/quality/release-green-static-profile.json`, укључујући
`audit:deps`, избор мутационих тестова и провере превода. Учитавач проверава npm
команде у односу на package.json и моделоване CI/Quality декларације; он одбија одступање
уместо да извршава токене љуске као аргументе. Обавезни излаз скенера SKIP/INCOMPLETE
не може да потврди PASS. Профил бележи своја спољна изузимања и не замењује
хостовану покривеност, тест матрице, нити доказе о пакету или примени. Текстуални инвентар у наставку
служи као референца, а не као доказ да је контролна тачка заиста извршена.

Скрипте се налазе у `scripts/check/` (контролне тачке политике) и `scripts/quality/` (механизам постепеног пооштравања).
Извор истине за CI је `.github/workflows/ci.yml`.

### Убрзана путања за release PR (`quality.yml`)

`.github/workflows/quality.yml` допуњује CI за PR-ове ка главним/release гранама, push операције на `main`,
ручно покретање и групе спајања. PR-ови користе брзе провере филтриране према путањи. Трајно
онемогућена дуплирана изградња је уклоњена; стварне провере изградње/пакета/покретања остају у CI-ју.

| Задатак                                          | Опсег                                                                                                                                                                                                                              | Блокирајући             |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| `Docs Gates (fast-path)`                         | PR-ови за документацију/код; референце API документације и целокупна документација                                                                                                                                                 | Да                      |
| `Fast Quality Gates`                             | PR-ови за код; статичке провере, провера типова, провера типова контролне табле, обухваћени јединични тестови                                                                                                                      | Да                      |
| `Forgotten sibling tests`                        | PR-ови за код; измењени модули прате се до статичких потрошача и потенцијалних сродних тестова; путање преко barrel модула и динамичких увоза пријављују се као саветодавна дијагностика, уз наведене изузетке са листе дозвољених | **Саветодавно**         |
| `Vitest (fast-path)`                             | PR-ови за код; брзи Vitest скуп тестова                                                                                                                                                                                            | Да                      |
| `Unit Tests fast-path`                           | PR-ови за код; скуп јединичних тестова подељен у 4 сегмента                                                                                                                                                                        | Да                      |
| `No new ESLint warnings`                         | PR-ови за код; заштитна lint провера која узима у обзир потискивања                                                                                                                                                                | Да, укључујући fork-ове |
| `Merge integrity (changelog + generated skills)` | PR-ови који нису радне верзије; синхронизација дневника измена и генерисаних вештина                                                                                                                                               | Да, укључујући fork-ове |

#### Извештај о заборављеним сродним тестовима

`npm run check:forgotten-sibling-tests` поново користи разрешивач увоза који стоји иза мапе утицаја на тестове.
За сваки измењени продукциони модул пријављује детерминистичке ланце
`changed module/symbol -> static consumer -> candidate sibling test` када потенцијални
тест није присутан у разлици захтева за преузимање измена. Markdown сажетак и JSON резултат чувају се као
артефакт процеса рада `forgotten-sibling-tests` ради калибрације пре увођења било каквог блокирања.

Поновни извози преко barrel модула и динамички увози служе само као дијагностика разрешавања; они никада не стварају
блокирајући налаз. Прегледани изузеци налазе се у
`config/quality/forgotten-sibling-allowlist.json`. Свака ставка мора да наведе потрошача и потенцијални
тест, пружи конкретно образложење и садржи везу до GitHub issue-а или захтева за преузимање измена. Неисправно формиране ставке доводе
до блокирања. Изузеци не могу да потисну обрисани потенцијални тест нити разлику која додаје `.skip`/`.todo`;
слабљење тврдњи и друга прикривања остају у надлежности независно блокирајуће
`check:test-masking` контроле.

### Задатак: `lint`

Покреће се за сваки PR ка грани `main`. У случају неуспеха блокира спајање.

| Skripta (`npm run ...`)           | Proverava                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Blokirajuće                                 |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| `check:node-runtime`              | Verzija Node.js-a je unutar podržanog opsega                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Da                                          |
| `check:test-tla-order`            | Nijedna `node:test` datoteka unutar `tests/unit` ne registruje test, zatim naiđe na `await` najvišeg nivoa, pa potom registruje još testova (#18045; mehanizam čegrtaljke: `test-tla-order-allowlist.json` može samo da se smanjuje)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Da                                          |
| `check:cycles`                    | Ciklični uvozi kroz ceo `src/` + `open-sse/` (zasnovano na AST-u, razrešene `paths` putanje iz tsconfig-a). Osnovna provera završava sa kodom 1 kad god postoji bilo koji ciklus (podrazumevano blokiranje od #15281) i navodi SCC-ove. `check:cycles:ratchet` (ono što CI pokreće) blokira kada broj premaši gornju granicu `metrics.cycles` u `quality-baseline.json` — trenutno 14, `direction: down`, pa može samo da se smanjuje (#15159 G-01/G-02)                                                                                                                                                                                                                                                                                                                                                                                                                                         | Da (čegrtaljka)                             |
| `check:boundary`                  | Sprega `open-sse → src`: jedinstveni uvozi između datoteka iz mehanizma u aplikaciju (`scripts/quality/measure-boundary.mjs`; lista veza predstavlja zaostatak zadataka za sanaciju v4 podele jezgra/modula). Osnovna provera = savetodavni izveštaj (isto kao `quality:boundary`). `check:boundary:ratchet` (ono što CI pokreće, takođe u petlji čegrtaljke za brze provere u `quality.yml`) blokira kada broj premaši gornju granicu `metrics.boundaryOpenSseToSrc` u `quality-baseline.json` — početno postavljenu na izmerenih 771, `direction: down`; `--update` je može samo smanjiti; relativno u odnosu na osnovnu granu u PR-ovima (`--base-ref`, pogledajte ispod)                                                                                                                                                                                                                     | Da (čegrtaljka)                             |
| `check:route-validation:t06`      | Zod šeme su prisutne na svim rutama (politika nivoa 6)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Da                                          |
| `check:any-budget:t11`            | Broj `@ts-expect-error // any` ne premašuje dozvoljeni limit (kontrolni mehanizam nivoa 11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Da                                          |
| `check:provider-consistency`      | Svaki provajder u `providers.ts` ima odgovarajući unos u `providerRegistry.ts` (i obrnuto, u okviru liste dozvoljenih)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Da                                          |
| `check:model-lifecycle`           | Tri ručno održavane tabele rutiranja ostaju usklađene sa verzionisanim snimkom životnog ciklusa (#11503): `FITNESS_TABLE` (`taskFitness.ts`) ne ocenjuje nijedan povučeni ID koji `REGISTRY` može da rutira; svaki cilj iz `BUILT_IN_ALIASES` prisutan je u `REGISTRY` i ne nalazi se u snimku povučenih ID-jeva; svaki povučeni ID koji je još uvek u `REGISTRY` prosleđuje se ili je naveden u `allowedRetiredInCatalog`; i nijedan izvor ili cilj iz `DEFAULT_DEGRADATION_MAP` nije označen kao povučen u tom snimku. Ovo ne dokazuje da model trenutno opslužuje aktivni spoljašnji servis. Van mreže — poredi sa `config/quality/model-lifecycle.json`, koji se ručno osvežava pomoću `npm run quality:refresh-model-lifecycle` (zahteva mrežu; nije povezan sa CI-jem). `allowedRetiredInCatalog` je jednosmerni mehanizam za postepeno smanjivanje: unos dodajte samo uz prateći problem. | Da                                          |
| `check:fetch-targets`             | Svaki `fetch("/api/...")` u klijentskom kodu unutar `src/` razrešava se na stvarnu datoteku `route.ts`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Da                                          |
| `check:deps`                      | Sve zavisnosti koje se mogu instalirati pomoću `npm install`, u svim datotekama `package.json` u repozitorijumu, nalaze se u `dependency-allowlist.json`; novi paketi bez fiksirane verzije ili paketi sa nazivima nalik postojećim paketima označavaju se                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Da                                          |
| `audit:deps`                      | npm провера свих пет независних lockfile датотека (коренска, Electron, OpenCode додаци v1/v2 и провајдер). Критична упозорења блокирају; упозорења високог нивоа остају видљива. Провере које недостају или нису успеле имају статус INCOMPLETE и блокирају; хешеви lockfile датотека и извештаји задржавају се за сваки опсег.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Да                                          |
| `check:lockfile`                  | Интегритет датотеке `package-lock.json` — https регистар, хешеви интегритета, без замене хостова                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Да                                          |
| `check:licenses`                  | SPDX листа дозвољених лиценци за продукционе зависности                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Да                                          |
| `check:tracked-artifacts`         | Без артефаката изградње / commit-ованих `node_modules` симболичких веза (такође се покреће у husky pre-commit hook-у; pre-push је намерно једноставан — #6716)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Да                                          |
| `check:ai-attribution`            | Без AI/bot `Co-Authored-By` завршне линије или подножја о AI генерисању у commit-овима, наслову или опису PR-а — строго правило #16 (у `quality.yml` петљи брзих провера за PR→`release/**` — чита payload догађаја и не ради ништа ван PR-ова — и као корак само за PR у `ci.yml` lint провери за PR→`main`; такође и husky `commit-msg` hook; људски коаутори су дозвољени; #14436)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `check:vitest-exclusions`         | Свако Vitest изузимање наводи issue за праћење и налази се у `config/quality/vitest-exclusions.json` (#13204)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Да                                          |
| `check:file-size`                 | Izvorne datoteke (`.ts`/`.tsx` u `src/`, `open-sse/`, `electron/`, `bin/`) ostaju unutar ograničenja `cap`, a test datoteke (`*.test.ts(x)`) unutar `testCap`; datoteke zamrznute u `file-size-baseline.json` (`frozen` / `testFrozen`) ne smeju premašiti svoju zabeleženu veličinu                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Da                                          |
| `check:error-helper`              | Odgovori o greškama u izvršiocima/rukovaocima koriste `buildErrorBody()` / `sanitizeErrorMessage()` (Strogo pravilo #12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Da                                          |
| `check:migration-numbering`       | Migracione SQL datoteke numerisane su uzastopno, bez praznina ili duplikata                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Da                                          |
| `check:public-creds`              | Nema doslovnih OAuth vrednosti `client_id`/`client_secret` niti Firebase Web ključeva izvan `publicCreds.ts` (Strogo pravilo #11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Da                                          |
| `check:db-rules`                  | Nema sirovog SQL-a izvan modula u `src/lib/db/`; nema zbirnih uvoza iz `localDb.ts` (Stroga pravila #2/#5)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Da                                          |
| `check:known-symbols`             | Izvršioci provajdera, strategije usmeravanja i prevodioci registrovani u svojim tabelama za otpremanje odgovaraju datotekama na disku — nema nepovezanih ili nedeklarisanih simbola                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Da                                          |
| `check:route-guard-membership`    | Svaka ruta koja pokreće podređeni proces klasifikovana je pomoću `isLocalOnlyPath()` (Stroga pravila #15/#17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Da                                          |
| `check:test-discovery`            | Svaka `*.test.ts` / `*.spec.ts` datoteka u repozitorijumu obuhvaćena je bar jednim pokretačem testova (mehanizam sa postepenim pooštravanjem: lista nepokrivenih datoteka u `test-discovery-baseline.json` može samo da se smanjuje)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Da                                          |
| `check:agent-skills-sync`         | Generisani artefakti veština agenata podudaraju se sa svojim izvornim katalogom (nema odstupanja)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `check:provider-asset-provenance` | Logotipi/resursi pružalaca imaju evidentiran zapis o poreklu                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `lint:json`                       | JSON konfiguracione datoteke mogu da se parsiraju i zadovoljavaju pravila provere repozitorijuma                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `typecheck:core`                  | TypeScript kompilacija bez grešaka (samo savetodavna upozorenja)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Da                                          |
| `typecheck:noimplicit:core`       | Strogi `noImplicitAny` — usmeren na budućnost; mnogim postojećim mestima poziva i dalje su potrebne anotacije                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | **Savetodavno** (`continue-on-error: true`) |
| `check:dashboard-typecheck`       | `tsc` ograničen na `src/app/(dashboard)/**` (#7033) — pažljivo odabrana lista od 27 datoteka u okviru `typecheck:core` ne uključuje nijedan TSX kontrolne table, a ni `next build` nikada ne proverava njihove tipove (`next.config.mjs` postavlja `ignoreBuildErrors: true`), pa su regresije napuštenih identifikatora u njima (#6625/#6909) bile nevidljive za CI. Razlike se porede sa zamrznutom osnovnom vrednošću broja grešaka po datoteci/TS kodu (`config/quality/dashboard-typecheck-baseline.json`, isti obrazac primene za zastarele stavke kao kod `check:known-symbols`) — prolaz blokiraju samo NOVE greške iznad broja u osnovnoj vrednosti; smanjite osnovnu vrednost pomoću `--update` kada se ispravi već postojeća greška.                                                                                                                                                  | Da                                          |

### Zadatak: `quality-gate`

Pokreće se nakon `test-coverage`. Blokira spajanje u slučaju neuspeha.

| Skripta                      | Proverava                                                                                                                                                                                                        | Blokira                                         |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `quality:collect`            | Generiše `quality-metrics.json` (broj ESLint upozorenja, pokrivenost iz objedinjenog izveštaja segmenata)                                                                                                        | Da (prethodi mehanizmu postepenog pooštravanja) |
| `quality:ratchet`            | Nijedna metrika u `quality-baseline.json` nije nazadovala (ESLint upozorenja ≤ osnovna vrednost; pokrivenost ≥ osnovna vrednost)                                                                                 | Da                                              |
| `check:duplication`          | Dupliranje koda (jscpd@4) ne premašuje osnovnu vrednost u `quality-baseline.json`                                                                                                                                | Da                                              |
| `check:complexity`           | Ciklomatska složenost na nivou datoteke ne premašuje ograničenje (osnovni ESLint `complexity` + `max-lines-per-function`)                                                                                        | Da                                              |
| `check:cognitive-complexity` | Postepeno pooštravanje kognitivne složenosti (`eslint-plugin-sonarjs`) — zaseban prolaz ESLint-a; CI izvršava oba objedinjena u jednom koraku `check:complexity-ratchets`                                        | Da                                              |
| `check:dead-code`            | Postepeno pooštravanje za nekorišćene izvoze/datoteke (knip) ne nazaduje u odnosu na osnovnu vrednost                                                                                                            | Da                                              |
| `check:compression-budget`   | Budžet repernog testa kompresije — minimalne uštede tokena po mehanizmu ne smeju nazadovati                                                                                                                      | Da                                              |
| `check:type-coverage`        | Postepeno pooštravanje procenta tipiziranog koda (`type-coverage`) ne nazaduje; uglavnom obuhvata `typecheck:noimplicit:core`                                                                                    | Da                                              |
| `check:codeql-ratchet`       | Broj otvorenih CodeQL upozorenja ne nazaduje (očitava se putem `gh api`; bezbedno se preskače bez tokena) — za učestalost osvežavanja i ručno pokretanje pogledajte „Postepeno pooštravanje CodeQL-a“ u nastavku | Da                                              |

### Zadatak: `quality-extended`

Zadatak blokira primenljive kandidate. Veličina paketa, otkriveni tajni podaci, otkrivene
ranjivosti, nalazi toka rada i OpenAPI izmene proveravaju se obaveznim mehanizmima postepenog pooštravanja.
Dijagnostika kružnih zavisnosti i instalacija skenera predstavljaju savetodavne korake; neuspešna
instalacija ne ukida obavezno merenje koje sledi. Alati koji nedostaju,
nevažeći izveštaji ili osnovne vrednosti koje nedostaju ostavljaju obaveznu proveru skenerom NEPOTPUNOM.

| Скрипта                  | Проверава                                                                                                                                                                                                                             | Блокирање                                              |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| `check:circular-deps`    | Нема кружних зависности (dpdm)                                                                                                                                                                                                        | **Саветодавно**                                        |
| `check:bundle-size`      | Величина пакета не премашује ограничење; недоступно мерење доводи до неуспеха                                                                                                                                                         | **Блокирајуће са --ratchet**                           |
| `check:secrets`          | Налази алата Gitleaks не назадују; обавезна скенирања одбацују недостајуће алате/изворе/полазне вредности, неуспела скенирања и неважеће извештаје                                                                                    | **Блокирајуће са --ratchet**                           |
| `check:vuln-ratchet`     | Рањивости зависности не назадују; обавезна скенирања одбацују недостајуће алате, неважеће извештаје или недостајуће полазне вредности                                                                                                 | **Блокирајуће са --ratchet**                           |
| `check:workflows`        | Провера токова рада (actionlint + zizmor); недостајући/неисправни скенери, неважећи извештаји или недостајућа ratchet полазна вредност доводе до статуса INCOMPLETE. Важећи налази прате изабрану строгу/саветодавну/ratchet политику | Извршавање је обавезно; zizmor ratchet блокира у CI-ју |
| `check:openapi-breaking` | Уговор јавног API-ја у односу на фиксиране комитове догађаја (PR merge-base, push before, merge-group base; за заказано/ручно покретање прво се преузима први родитељ); обавезно мерење неуспешно се затвара                          | **Блокирајуће са --ratchet**                           |

### Задатак: `docs-sync-strict`

Покреће се за сваки PR ка грани `main`. Блокира спајање у случају неуспеха.

| Скрипта                        | Проверава                                                                                                                                                                                  | Блокирање                     |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------- |
| `check:docs-all`               | Мета-капија која редом покреће 6 поткапија у наставку                                                                                                                                      | Да                            |
| ↳ `check:docs-sync`            | Усклађеност верзија у CHANGELOG / OpenAPI / llm.txt                                                                                                                                        | Да                            |
| ↳ `check:docs-counts`          | Бројеви у тексту (број добављача, број миграција итд.) налазе се унутар ratchet опсега стварних вредности                                                                                  | Да                            |
| ↳ `check:env-doc-sync`         | Свака променљива окружења из `.env.example` документована је у табели документације и обрнуто                                                                                              | Да                            |
| ↳ `check:deprecated-versions`  | У документацији нема застарелих ознака верзија                                                                                                                                             | Да                            |
| ↳ `check:doc-links`            | Интерне markdown везе у документацији воде до стварних датотека (облик `[text]`/`(path)`)                                                                                                  | Да                            |
| ↳ `check:fabricated-docs`      | Руте, променљиве окружења, CLI команде, називи hook-ова и путање датотека наведени у документацији постоје у бази кода. Строга капија преко `--strict`; без заставице је дозвољен неуспех. | Да (преко `--strict` у CI-ју) |
| `check:cli-i18n`               | Ниске CLI команди присутне су у свим i18n датотекама локализације                                                                                                                          | Да                            |
| `check:openapi-coverage`       | OpenAPI спецификација покрива најмање ratchet доњу границу стварних рута                                                                                                                   | Да                            |
| `check:openapi-security-tiers` | Ознаке безбедносних нивоа у `openapi.yaml` усклађене су са класификацијама у `routeGuard.ts`                                                                                               | **Саветодавно**               |
| `check:openapi-routes`         | Свака путања у `openapi.yaml` води до стварног `route.ts` (спречавање халуцинација)                                                                                                        | Да                            |
| `check:docs-symbols`           | Свака референца `/api/...` у `docs/**/*.md` води до стварног `route.ts` (спречавање халуцинација)                                                                                          | Да                            |
| `i18n translation drift`       | Непреведени кључеви у i18n датотекама локализације — само упозорење                                                                                                                        | **Саветодавно**               |

### Задатак: `i18n-ui-coverage`

| Скрипта                             | Проверава                                                                                                                                                                                         | Блокирајуће     |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `check-ui-keys-coverage` (уграђено) | Покривеност UI i18n кључева је ≥ 65%                                                                                                                                                              | Да              |
| `check-ui-value-drift` (уграђено)   | Измењена енглеска **вредност** не оставља застарели превод                                                                                                                                        | Да              |
| `check-new-key-coverage` (уграђено) | **Нови** енглески кључ је преведен у сваком локалитету — маркер `__MISSING__:` се одбија                                                                                                          | Да              |
| `check-translation-ratio`           | Удео стварних превода по локалитету (истоветно енглеском / чувар места / недостајући листови ван листе дозвољених) не сме премашити `config/quality/i18n-translation-baseline.json` + толеранцију | **Саветодавно** |

Захтева `fetch-depth: 0` — контрола одступања вредности пореди `en.json` са базом спајања.

#### `check-ui-value-drift` — контрола застарелих превода

Открива једну i18n регресију коју остале контроле структурно не могу да уоче: енглеска вредност
се измени, а преводи изведени из _претходне_ енглеске вредности остану непромењени, па
корисници који не говоре енглески настављају да читају самоуверено формулисан, али сада нетачан текст.

Ово се заиста нашло у издању. `oauthModal.googleOAuthWarning` је измењен када је додат помоћник
за пријављивање Antigravity (#5203); **39 од 43 локалитета** задржало је текст који је оператерима
говорио да „копирају цео URL и налепе га испод“ — ток који за тог добављача није могуће довршити.
Проблем је остао непримећен све до #8463 зато што:

- `sync-ui-keys` допуњава само кључеве који су **одсутни**, никада оне који су **застарели**;
- `check-ui-keys-coverage` рачуна _присуство_ кључа, па се застарели превод сматра покривеним;
- `check-translation-drift` прати документационе пресликане датотеке `docs/i18n/<locale>/**.md` —
  никада не чита `src/i18n/messages/*.json`. Блокирајуће у задатку `docs-sync-strict` од
  поновне синхронизације 2026-09: измените основни документ → `npm run i18n:run -- --files=<doc>` (на нивоу одељка, јефтино).

**Засновано на разликама, а не на основној линији.** Пореди `en.json` у бази спајања са
радним стаблом; за сваки кључ чија је енглеска вредност промењена, сваки локалитет који и даље
садржи неизмењен превод сматра се застарелим. Ово намерно **замрзава постојећи дуг** — разлика
не може да открије из које је старе енглеске вредности настао дуготрајни превод, па контрола
оцењује само оно што тренутна измена дотиче. Алтернатива (основна линија хешева по кључу) захтевала
би генерисану датотеку од око 600 KB, 3× већу од највеће постојеће основне линије, која би се
мењала при сваком i18n PR-у.

Постоје два начина да се контрола задовољи:

1. ажурирати погођене преводе или
2. поставити их на `__MISSING__:<new english>` — окружење за извршавање тада приказује исправљени енглески
   (`src/i18n/request.ts::deepMergeFallback`, #7258), а кључ улази у ред за превођење.

Ако се променило **значење** ниске, предност дајте **преименовању кључа**: нови кључ не може
наследити застарели превод. То је образац коришћен у #8463.

```bash
npm run i18n:check-value-drift          # строго (оно што CI покреће)
npm run i18n:check-value-drift:warn     # само извештај
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

Завршава са кодом 0 и поруком `SKIP reason=base-unresolved` када основни каталог не може да се прочита (плитко
клонирање без основне референце), по узору на `check-openapi-breaking`.

### Задатак: `i18n`

Пуна матрица i18n провере (један задатак по локалитету). Цео задатак је саветодаван.

| Скрипта                         | Проверава                       | Блокирајуће                                                |
| ------------------------------- | ------------------------------- | ---------------------------------------------------------- |
| `validate_translation.py quick` | Потпуност превода по локалитету | **Саветодавно** (`continue-on-error: true` за цео задатак) |

### Задатак: `pr-test-policy`

Покреће се само за захтеве за преузимање измена.

| Скрипта                | Проверава                                                                                                                                   | Блокирајуће |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `check:pr-test-policy` | PR-ови који мењају продукциони код у `src/`, `open-sse/`, `electron/` или `bin/` морају да укључе или ажурирају тестове (Строго правило #8) | Да          |
| `check:test-masking`   | Измењене датотеке тестова не смањују нето број тврдњи нити додају таутологије `assert.ok(true)`                                             | Да          |
| `check:pr-evidence`    | Тело PR-а наводи доказе о тестирању/VPS-у за измену (аутоматизује Строго правило #18 претраживањем текста PR-а — крхко, видети Заостатак)   | Да          |

### Задатак: `test-vitest`

Покреће се након `build`. Неуспех блокира спајање.

| Пакет            | Проверава                                                | Блокирајући                                                                                                  |
| ---------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `test:vitest`    | MCP сервер (110 алата), autoCombo, кеш — vitest покретач | Да                                                                                                           |
| `test:vitest:ui` | Тестови UI компоненти — vitest покретач                  | **Блокирајући** — постојећи неуспеси су изричито изузети у `vitest.config.ts`; нови неуспеси обарају задатак |

### Ноћни токови рада (планирани, саветодавни)

Они се покрећу према cron распореду (и путем `workflow_dispatch`), никада за PR-ове. Сви су саветодавни.

| Ток рада               | Проверава                                                                                                                                                        | Блокирајући     |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `nightly-property`     | fast-check тестови својстава са насумичним семеном и великим бројем покретања                                                                                    | **Саветодавни** |
| `nightly-resilience`   | провера раста heap меморије, chaos убризгавање грешака, k6 тестови оптерећења/издржљивости                                                                       | **Саветодавни** |
| `nightly-llm-security` | promptfoo заштита од убризгавања (режим блокирања) + garak сонде (прескачу се без тајне добављача)                                                               | **Саветодавни** |
| `nightly-schemathesis` | Фазирање OpenAPI уговора (schemathesis) над активним OmniRoute-ом помоћу `docs/openapi.yaml` — открива кршења спецификације / необрађене грешке 500 (Фаза 8 Б.4) | **Саветодавни** |
| `nightly-mutation`     | Резултат Stryker мутационог тестирања над брзом путањом јединичних тестова — преживели мутанти откривају слабе провере                                           | **Саветодавни** |
| `nightly-compat`       | Матрица компатибилности Node механизма у свим подржаним опсезима `engines.node`                                                                                  | **Саветодавни** |

Основне вредности перформанси (heap, TTFB, време изградње) се бележе, али се не користе као услов: погледајте [`PERF_BASELINE.md`](../ops/PERF_BASELINE.md) (`npm run perf:lts-baseline`).

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

1. Додајте коментар са образложењем.
2. Наведите референцу на issue за праћење (нпр. `// #3498 — Phase 2 feature, not yet implemented`).
3. Уклоните ставку у истом PR-у који отклања прекршај — застарела ставка која више
   не потискује активан прекршај и сама представља дефект (6A.3 провера застарелих правила ће,
   када буде имплементирана, оборити контролу због ставке на листи дозвољених изузетака без одговарајућег прекршаја).

**Немојте** додавати ставке на листу дозвољених изузетака да би тестови брже прошли. Успешна контрола уз све дужу
листу дозвољених изузетака ствара лажан осећај квалитета.

### Када контрола падне на вашем PR-у

1. **Пажљиво прочитајте излаз контроле** — он тачно наводи која датотека или симбол крши
   правило.
2. **Отклоните прекршај** — већина контрола су детерминистичке провере система датотека које пролазе чим
   код буде исправан.
3. **Ако је прекршај већ постојао** (тј. нисте га ви увели, али га контрола сада
   обухвата): додајте ставку на листу дозвољених изузетака са коментаром који садржи образложење и issue за праћење.
4. **Ако је контрола типа ratchet** (покривеност, ESLint упозорења, дуплирање, сложеност):
   ваша измена је погоршала метрику. Отклоните основни проблем или, у ретким случајевима, покрените
   `npm run quality:ratchet -- --update` ако је измена намерна и погоршање метрике
   прихватљиво — али документујте разлог у опису PR-а.
5. **Саветодавне контроле** (`continue-on-error: true`) су информативне — оне не блокирају
   спајање, али се приказују у CI сажетку. Ипак их исправите.

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

## Заостатак рационализације (ROI преглед — Фаза 9 Талас 3)

Овај инвентар је усаглашен са `ci.yml` 2026-06-17 (претходна верзија је изоставила
`audit:deps`, `check:tracked-artifacts`, `check:lockfile`, `check:licenses`,
`check:dead-code`, `check:cognitive-complexity`, `check:type-coverage`,
`check:codeql-ratchet`, `check:pr-evidence`). ROI преглед усаглашеног скупа
идентификовао је следеће кандидате за рационализацију. **Спајања су механичке CI
измене; укључивања/уклањања су одлуке о политици резервисане за оператера.** Ништа од наведеног
још није примењено.

**Такође није документовано изнад** (саветодавно, слаб сигнал): посао `docs-lint`
(markdownlint + Vale, цео посао има `continue-on-error`) и самостални токови рада скенера
`semgrep.yml` / `codeql.yml` / `scorecard.yml`. `semgrepFindings: 0` се налази у
`quality-baseline.json`, али није повезан са блокирајућим механиз­мом постепеног пооштравања у `ci.yml` — метрика је
тренутно неповезана.

### Спајање / дедупликација (механички, мањи ризик)

Сваки кандидат је проверен у односу на активно стање контролних механизама 2026-06-17 (веруј, али провери);
испоставило се да неколико „очигледних“ спајања скрива дуг и **нису** чисте директне замене.

- **`check:docs-sync` се извршава два пута** — самостално у послу `lint`, а затим поново унутар `check:docs-all` (`docs-sync-strict`) и husky pre-commit hook-а. ✅ **ЗАВРШЕНО** — самостално позивање у `lint` је уклоњено.
- **CVE скенирање** — ❌ **НИЈЕ чисто спајање.** `audit:deps` блокира критична упозорења и непотпуне провере у свих пет lockfile-ова, док упозорења високог нивоа пријављује као упозорења у складу са тренутном политиком; `check:vuln-ratchet` (osv) пада само при _регресији_ у односу на верзионисану основну вредност и одбацује мерења која недостају када су обавезна. Различита семантика — уклањањем `audit:deps` изгубили би се апсолутни контролни механизам за критичне проблеме и независне потврде провере пакета. Задржати оба.
- **Откривање циклуса** — ✅ **ЗАВРШЕНО** (#15159 G-01/G-02). Стари текст је овде називао `check:cycles` „зеленим, ручно одабраним“ контролним механизмом и оправдавао његово задржавање као блокирајућег јер је `check:circular-deps` (dpdm) пријављивао 91 циклус. То зелено стање било је **лажно зелено**: `check:cycles` је скенирао 5 поддиректоријума (450 датотека), препознавао само статичке `import|export … from` изразе и одбацивао сваки `@/` и `@omniroute/open-sse/` спецификатор, па није могао да види циклусе динамичког увоза и алијаса који су доминирали репозиторијумом. Исправљено: контролни механизам сада обилази `src` + `open-sse` (5023 датотеке), прикупља спецификаторе из TypeScript AST-а (тако да се `import("…")` рачуна, а `typeof import("…")` на позицији типа не рачуна) и разрешава tsconfig `paths`. Проналази **14** циклуса, а не 0. Пошто 14 постојећих циклуса не може да се исправи у PR-у контролног механизма, `check:cycles` је сада **механизам постепеног пооштравања** (`--ratchet`, горња граница `metrics.cycles.value = 14` у `quality-baseline.json`, `direction: down`) — блокира сваку _регресију_, а број може само да опада. CI покреће `npm run check:cycles:ratchet`. Постепено смањивање се спроводи уз **A-01**. `check:circular-deps` (dpdm) остаје саветодаван као шире друго мишљење.
- **Сложеност** — ✅ **ЗАВРШЕНО** (`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`): један ESLint пролаз, бројање према ruleId-у како би основне вредности за цикломатску сложеност и максимални број редова остале независне од основних вредности когнитивне сложености; појединачни `check:complexity` / `check:cognitive-complexity` остају за локални `--update`.
- **`/api` заштита од халуцинација** — ✅ **ЗАВРШЕНО** (`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`): један FS инвентар за `src/app/api`, openapi-routes + docs-symbols и даље извештавају независно; појединачне провере остају за локална покретања.
- **`check:node-runtime` се извршава у 11 послова** — ⚠️ **низак ROI.** Сваки се извршава на засебном runner-у, а провера траје <1s; укупна уштеда је ~10s, наспрам губитка јефтине заштите по послу. Није вредно измена.
- **`typecheck:noimplicit:core` у CI lint-у** — ✅ **уклоњено из lint посла** (било је саветодавно уз `continue-on-error`); блокирајућу површину типова чине `typecheck:core` + `check:type-coverage`. Локална скрипта је задржана.

### Укључити / одлучити (политика оператера)

- `check:openapi-security-tiers` (саветодавно) — ❌ **НЕ МОЖЕ се једноставно укључити.** Завршава се кодом 0, али упозорава да неколико `traffic-inspector` рута под `LOCAL_ONLY_API_PREFIXES` нема анотацију `x-loopback-only: true`. Његово принудно спровођење најпре захтева додавање тих анотација у `openapi.yaml`.
- `typecheck:noimplicit:core` (саветодавно) — у великој мери га замењује блокирајући механизам постепеног пооштравања `check:type-coverage`. Претворити га у механизам постепеног пооштравања или уклонити сувишни други `tsc` пролаз.
- `test:vitest:ui` (сада **блокирајуће**) — постојећи неуспеси су изричито изузети у `vitest.config.ts` уз `// #8618` коментаре за праћење; нови неуспеси обарају посао.
- `check:secrets` (gitleaks, блокирајући механизам постепеног пооштравања) — тренутна горња граница је `metrics.secretFindings` у `quality-baseline.json`. Сваки изузетак захтева оправдан унос у `.gitleaks.toml`; недоступно мерење је НЕПОТПУНО. Скенирање допуњује GitHub-ово изворно скенирање тајни и `check:public-creds`.
- `check:pr-evidence` (блокирајуће, претражује прозу тела PR-а помоћу grep-а) — висок ризик од лажно позитивних резултата; уклањање слаби примену строгог правила бр. 18, па је ово истинска одлука о политици.
- `semgrep` (самостално саветодавно) — преклапа се са CodeQL-ом за OWASP породице; повезати његову основну вредност са механизмом постепеног пооштравања или га уклонити.

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
