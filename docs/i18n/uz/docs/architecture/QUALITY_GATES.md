# Quality Gates Reference (Oʻzbekcha)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/QUALITY_GATES.md) · 🇪🇹 [am](../../../am/docs/architecture/QUALITY_GATES.md) · 🇸🇦 [ar](../../../ar/docs/architecture/QUALITY_GATES.md) · 🇦🇿 [az](../../../az/docs/architecture/QUALITY_GATES.md) · 🇧🇬 [bg](../../../bg/docs/architecture/QUALITY_GATES.md) · 🇧🇩 [bn](../../../bn/docs/architecture/QUALITY_GATES.md) · 🇧🇦 [bs](../../../bs/docs/architecture/QUALITY_GATES.md) · 🇨🇿 [cs](../../../cs/docs/architecture/QUALITY_GATES.md) · 🇩🇰 [da](../../../da/docs/architecture/QUALITY_GATES.md) · 🇩🇪 [de](../../../de/docs/architecture/QUALITY_GATES.md) · 🇬🇷 [el](../../../el/docs/architecture/QUALITY_GATES.md) · 🇪🇸 [es](../../../es/docs/architecture/QUALITY_GATES.md) · 🇪🇪 [et](../../../et/docs/architecture/QUALITY_GATES.md) · 🇮🇷 [fa](../../../fa/docs/architecture/QUALITY_GATES.md) · 🇫🇮 [fi](../../../fi/docs/architecture/QUALITY_GATES.md) · 🇫🇷 [fr](../../../fr/docs/architecture/QUALITY_GATES.md) · 🇮🇪 [ga](../../../ga/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [gu](../../../gu/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ha](../../../ha/docs/architecture/QUALITY_GATES.md) · 🇮🇱 [he](../../../he/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [hi](../../../hi/docs/architecture/QUALITY_GATES.md) · 🇭🇷 [hr](../../../hr/docs/architecture/QUALITY_GATES.md) · 🇭🇺 [hu](../../../hu/docs/architecture/QUALITY_GATES.md) · 🇦🇲 [hy](../../../hy/docs/architecture/QUALITY_GATES.md) · 🇮🇩 [id](../../../id/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ig](../../../ig/docs/architecture/QUALITY_GATES.md) · 🇮🇹 [it](../../../it/docs/architecture/QUALITY_GATES.md) · 🇯🇵 [ja](../../../ja/docs/architecture/QUALITY_GATES.md) · 🇬🇪 [ka](../../../ka/docs/architecture/QUALITY_GATES.md) · 🇰🇭 [km](../../../km/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [kn](../../../kn/docs/architecture/QUALITY_GATES.md) · 🇰🇷 [ko](../../../ko/docs/architecture/QUALITY_GATES.md) · 🇱🇹 [lt](../../../lt/docs/architecture/QUALITY_GATES.md) · 🇱🇻 [lv](../../../lv/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ml](../../../ml/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [mr](../../../mr/docs/architecture/QUALITY_GATES.md) · 🇲🇾 [ms](../../../ms/docs/architecture/QUALITY_GATES.md) · 🇲🇹 [mt](../../../mt/docs/architecture/QUALITY_GATES.md) · 🇲🇲 [my](../../../my/docs/architecture/QUALITY_GATES.md) · 🇳🇵 [ne](../../../ne/docs/architecture/QUALITY_GATES.md) · 🇳🇱 [nl](../../../nl/docs/architecture/QUALITY_GATES.md) · 🇳🇴 [no](../../../no/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [or](../../../or/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [pa](../../../pa/docs/architecture/QUALITY_GATES.md) · 🇵🇭 [phi](../../../phi/docs/architecture/QUALITY_GATES.md) · 🇵🇱 [pl](../../../pl/docs/architecture/QUALITY_GATES.md) · 🇵🇹 [pt](../../../pt/docs/architecture/QUALITY_GATES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/QUALITY_GATES.md) · 🇷🇴 [ro](../../../ro/docs/architecture/QUALITY_GATES.md) · 🇷🇺 [ru](../../../ru/docs/architecture/QUALITY_GATES.md) · 🇱🇰 [si](../../../si/docs/architecture/QUALITY_GATES.md) · 🇸🇰 [sk](../../../sk/docs/architecture/QUALITY_GATES.md) · 🇸🇮 [sl](../../../sl/docs/architecture/QUALITY_GATES.md) · 🇷🇸 [sr](../../../sr/docs/architecture/QUALITY_GATES.md) · 🇸🇪 [sv](../../../sv/docs/architecture/QUALITY_GATES.md) · 🇰🇪 [sw](../../../sw/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ta](../../../ta/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [te](../../../te/docs/architecture/QUALITY_GATES.md) · 🇹🇭 [th](../../../th/docs/architecture/QUALITY_GATES.md) · 🇹🇷 [tr](../../../tr/docs/architecture/QUALITY_GATES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/QUALITY_GATES.md) · 🇵🇰 [ur](../../../ur/docs/architecture/QUALITY_GATES.md) · 🇻🇳 [vi](../../../vi/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [yo](../../../yo/docs/architecture/QUALITY_GATES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/QUALITY_GATES.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/QUALITY_GATES.md)

---

Ushbu hujjat OmniRouteʼdagi barcha CI sifat darvozalari uchun nufuzli maʼlumotnoma hisoblanadi.
Unda har bir darvoza, u nimalarni tekshirishi, qaysi CI topshirigʻida ishlashi, ratchet bazaviy
darajasidan yoki oʻtdi/oʻtmadi siyosatidan foydalanishi hamda tuzilishni bloklashi yoki tavsiyaviy
ekanligi bayon qilingan.

Qisqa xulosa va ruxsat etilganlar roʻyxati siyosati uchun `AGENTS.md` faylidagi
"Quality Gates & Ratchets" boʻlimiga qarang. Xuddi shu tizimning tanqidiy bahosi, yetuklik tasnifi
va vositalarga bogʻliq boʻlmagan takrorlash rejasi uchun
[Quality Gate Playbook](../ops/QUALITY_GATE_PLAYBOOK.md) hujjatiga qarang.

---

## Geytlar inventari va bajarish profillari

### Nomzodlarni qabul qilish

CI va Quality Gates ish jarayonlarining har biri barqaror xulosa chiqaradi: `Gate / CI` va
`Gate / Quality`. Ularning versiyalangan qabul siyosati har bir yuqori oqimdagi vazifani
majburiy yoki tavsiyaviy sifatida sanab oʻtadi. Qoʻllaniladigan majburiy vazifa muvaffaqiyatli
yakunlanishi shart: mavjud boʻlmagan, bekor qilingan, oʻtkazib yuborilgan, kutilayotgan va
nomaʼlum natijalar PASS holatini tasdiqlay olmaydi. Faqat hujjatlarga yoki faqat katalogga
tegishli haqiqiy tasnif kod yoʻlagini qoʻllanilmaydigan qilishi mumkin;
qoralama PR qabul qilingan nomzod hisoblanmaydi. `hotfix` yorligʻi dalil talabini bekor qilmaydi.

Har ikkala ish jarayoni main/release shoxlariga yoʻnaltirilgan PRlarni, `main` shoxiga pushlarni,
qoʻlda ishga tushirishni va birlashtirish guruhi hodisalarini qamrab oladi. Push, qoʻlda ishga
tushirish va birlashtirish guruhi toʻliq tanlovni bajaradi. `release/**` shoxlariga pushlar ularni
ishga tushirmaydi (2026-10-18): har bir oʻzgarish allaqachon oʻz PRida matritsadan oʻtgan va
birlashtirilgan kombinatsiya Release-Green vazifasidir (`docs/ops/RUNNER_BOX.md` → Hosted lane).
Forklar va birlashtirish guruhlari aks holda self-hosted runnerlarni tanlaydigan vazifalar uchun
hosted runnerlardan foydalanadi; joriy etishdan oldin hosted quvvat yetarli ekanligi tekshirilishi
shart.

Har bir JSON tasdiqnomasi checkout qilingan SHA, ish jarayoni ishga tushirilishi va urinishni
aniqlaydi. CLI checkout/hodisa SHA nomuvofiqligini rad etadi. Ish jarayoni testlari siyosat
aʼzoligini xulosa vazifasining `needs` roʻyxatiga bogʻlaydi, shuning uchun yangi yoki olib
tashlangan yoʻlak sezdirmasdan yoʻqolib qololmaydi. Tasdiqnomalar nashr qilish, joylashtirish yoki
mavjud tavsiyaviy skanerning ichki qismlarini emas, oʻz ish jarayonini qamrab oladi. Shox
qoidalarida ikkala tekshiruv nomini faollashtirish alohida maʼmuriy oʻzgarishdir; bu vazifalarni
qoʻshishning oʻzi shoxni himoya qilmaydi.

### UI bajarish quvvati

CI toʻliq UI inventarini toʻrtta `test-vitest` matritsa shardi sifatida ishga tushiradi, ularning
har birida koʻpi bilan toʻrtta worker va mavjud 15 daqiqalik vazifa muddati mavjud. Birinchi shard
MCP/autoCombo Vitest toʻplamini ham ishga tushiradi. Majburiy vazifa natijasi matritsaning har bir
qismini qamrab oladi; bitta shardning muvaffaqiyatsizligi yoki bekor qilinishi nomzod qabulini
tasdiqlay olmaydi.

Tungi kuzatuvchi har bir UI shardi uchun alohida aniq nomzod tasdiqnomasini, jumladan birinchi
tasdiqnomadagi MCP bajarilishini saqlab qoladi. Barcha toʻrtta tasdiqnoma, loglar va mos keluvchi
bajarish identifikatorlari talab qilinadi. Mahalliy `npm run test:vitest:ui` hamon toʻliq toʻplamni
tanlaydi; bitta `--shard` ishga tushirilishi faqat qisman dalildir.

### Statik skanerlash inventari

Versiyalangan npm-alias inventari va statik skanerlash tarkibi
`config/quality/gate-manifest.json` faylida joylashgan. Skript nomlari va aniq buyruqlarni
`package.json` bilan solishtirib tekshirish uchun `npm run check:gate-manifest` buyrugʻini bajaring;
qoʻshishlar, olib tashlashlar va buyruqlardagi ogʻishlar mahalliy hook hamda CIdagi oʻzgarishlarni
tasniflash vazifalarining ikkalasini ham muvaffaqiyatsiz qiladi. Alias ish jarayoni vazifasi,
matritsa nusxasi yoki test holati emas: bu sonlarni oʻzaro almashtiriladigan sifatida koʻrsatish
mumkin emas.

Tanlangan aliaslarni bajarmasdan tekshirish uchun `npm run quality:scan -- --list` yoki
`npm run quality:scan:fast -- --list` buyrugʻidan foydalaning. Runner npm kirish nuqtasini ishga
tushiradi, shu sababli uning bajarish muhiti (sozlangan joylarda Bun ham) saqlanadi. Manifest bu
profillardan tashqaridagi aliaslarni alohida ishga tushiriladigan sifatida qayd etadi va texnik
xizmat koʻrsatish buyruqlari faqat oʻqish uchun moʻljallangan skanerlash profillarida taqiqlanadi.

Bu profillar faqat statik skanerlashni qamrab oladi. Ular mahsulot testlari, qamrov, paketlash,
tashqi tekshiruvlar yoki nomzodning relizga toʻliq qabul qilinishini tasdiqlamaydi. Ish jarayoniga
qabul qilish bogʻlangan `config/quality/admission-policy.json` va
`scripts/quality/admission-verdict.mjs` fayllaridan foydalanadi. Reliz kuzatuvchisi profillari
alohida qoladi; ularning qoʻllaniladigan tekshiruvlari va tasdiqnomalarini mustaqil ravishda
tekshiring. Toʻliq kuzatuvchining statik buyruqlari `config/quality/release-green-static-profile.json`
faylida eʼlon qilingan, jumladan `audit:deps`, mutatsiya testlarini tanlash va tarjima
tekshiruvlari. Yuklagich npm buyruqlarini package.json va modellashtirilgan CI/Quality
deklaratsiyalariga nisbatan tekshiradi; u shell tokenlarini argument sifatida bajarish oʻrniga
ogʻishlarni rad etadi. Majburiy skanerning SKIP/INCOMPLETE chiqishi PASS holatini tasdiqlay olmaydi.
Profil oʻzining tashqi istisnolarini qayd etadi va hosted qamrov, test matritsalari, paket yoki
joylashtirish dalillarining oʻrnini bosmaydi. Quyidagi matnli inventar geyt haqiqatan ham
bajarilganining isboti emas, balki maʼlumotnoma hisoblanadi.

Skriptlar `scripts/check/` (siyosat geytlari) va `scripts/quality/` (ratchet mexanizmi) ostida
joylashgan. CI uchun asosiy haqiqat manbai `.github/workflows/ci.yml` hisoblanadi.

### Reliz PR uchun tezkor yoʻl (`quality.yml`)

`.github/workflows/quality.yml` main/release PRlari, `main` shoxiga pushlar, qoʻlda ishga tushirish
va birlashtirish guruhlarida CIni toʻldiradi. PRlar yoʻl boʻyicha filtrlangan tezkor
tekshiruvlardan foydalanadi. Doimiy ravishda oʻchirib qoʻyilgan takroriy build olib tashlandi;
haqiqiy build/paketlash/ishga tushirish tekshiruvlari CIda qoladi.

| Vazifa                                           | Qamrov doirasi                                                                                                                                                                                                                                       | Bloklovchi               |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `Docs Gates (fast-path)`                         | Hujjatlar/kod PRlari; API hujjatlari havolalari va barcha hujjatlar                                                                                                                                                                                  | Ha                       |
| `Fast Quality Gates`                             | Kod PRlari; statik tekshiruvlar, tur tekshiruvi, boshqaruv paneli tur tekshiruvi, taʼsirlangan birlik testlari                                                                                                                                       | Ha                       |
| `Forgotten sibling tests`                        | Kod PRlari; oʻzgartirilgan modullardan statik isteʼmolchilar va nomzod yondosh testlargacha kuzatuv; barrel va dinamik import yoʻllari maslahat xarakteridagi diagnostika sifatida xabar qilinadi, havola qilingan ruxsat roʻyxati istisnolari bilan | **Maslahat xarakterida** |
| `Vitest (fast-path)`                             | Kod PRlari; tezkor vitest toʻplami                                                                                                                                                                                                                   | Ha                       |
| `Unit Tests fast-path`                           | Kod PRlari; 4 segmentli birlik testlari toʻplami                                                                                                                                                                                                     | Ha                       |
| `No new ESLint warnings`                         | Kod PRlari; bostirishlarni hisobga oluvchi lint himoyasi                                                                                                                                                                                             | Ha, forklarda ham        |
| `Merge integrity (changelog + generated skills)` | Qoralama boʻlmagan PRlar; oʻzgarishlar jurnali va generatsiya qilingan koʻnikmalar sinxronligi                                                                                                                                                       | Ha, forklarda ham        |

#### Unutilgan yondosh testlar hisoboti

`npm run check:forgotten-sibling-tests` test taʼsiri xaritasi ortidagi import aniqlagichidan qayta foydalanadi.
Har bir oʻzgartirilgan ishchi modul uchun, agar nomzod test pull-request diffida mavjud boʻlmasa,
u deterministik `changed module/symbol -> static consumer -> candidate sibling test` zanjirlari
haqida xabar beradi. Markdown xulosasi va JSON natijasi bloklovchi rejimni joriy etishdan oldin
kalibrlash uchun `forgotten-sibling-tests` ish jarayoni artefakti sifatida saqlanadi.

Barrel qayta eksportlari va dinamik importlar faqat aniqlash diagnostikasidir; ular hech qachon
bloklovchi natija yaratmaydi. Koʻrib chiqilgan istisnolar
`config/quality/forgotten-sibling-allowlist.json` faylida saqlanadi. Har bir yozuv isteʼmolchi va nomzod
testni koʻrsatishi, aniq asos keltirishi hamda GitHub muammosi yoki pull requestiga havola berishi kerak. Notoʻgʻri shakllantirilgan yozuvlar
yopiq holatda xatolik keltirib chiqaradi. Istisnolar oʻchirilgan nomzod testni yoki `.skip`/`.todo` qoʻshuvchi diffni
bostira olmaydi; tasdiqlarni zaiflashtirish va boshqa niqoblash holatlari mustaqil ravishda bloklovchi
`check:test-masking` nazorati zimmasida qoladi.

### Vazifa: `lint`

`main` uchun har bir PRda ishga tushadi. Xatolik yuz bersa, birlashtirishni bloklaydi.

| Skript (`npm run ...`)            | Tekshiradi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Bloklaydi                                  |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| `check:node-runtime`              | Node.js versiyasi qoʻllab-quvvatlanadigan diapazonda ekanini                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Ha                                         |
| `check:test-tla-order`            | `tests/unit` ichidagi hech bir `node:test` fayli testni roʻyxatdan oʻtkazmasligi, yuqori darajadagi `await`ga yetib bormasligi va undan keyin yana testlarni roʻyxatdan oʻtkazmasligini (#18045; ratchet: `test-tla-order-allowlist.json` faqat qisqarishi mumkin)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Ha                                         |
| `check:cycles`                    | Butun `src/` + `open-sse/` boʻylab siklik importlarni (AST asosida, tsconfig `paths` yoʻllari aniqlanadi). Mustaqil ishga tushirilganda har qanday sikl mavjud boʻlsa, 1 kodi bilan yakunlanadi (#15281 dan beri nosozlik holatida bloklaydi) va SCClarni roʻyxatlaydi. `check:cycles:ratchet` (CI ishga tushiradigan buyruq) sikllar soni `quality-baseline.json` faylidagi `metrics.cycles` yuqori chegarasidan oshganda bloklaydi — hozirda 14, `direction: down`, shuning uchun u faqat kamayishi mumkin (#15159 G-01/G-02)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Ha (ratchet)                               |
| `check:boundary`                  | `open-sse → src` bogʻliqligini: mexanizmdan ilovaga yoʻnaltirilgan noyob fayldan faylga importlarni (`scripts/quality/measure-boundary.mjs`; qirralar roʻyxati v4 yadrosi/modulga ajratish boʻyicha tuzatishlar navbatidir). Mustaqil ishga tushirilganda = tavsiyaviy hisobot (`quality:boundary` bilan bir xil). `check:boundary:ratchet` (CI ishga tushiradigan, shuningdek `quality.yml` tezkor tekshiruvlarining ratchet sikliga kiritilgan buyruq) son `quality-baseline.json` faylidagi `metrics.boundaryOpenSseToSrc` yuqori chegarasidan oshganda bloklaydi — oʻlchangan 771 qiymati bilan boshlangʻich holatga keltirilgan, `direction: down`; `--update` uni faqat pasaytiradi; PRlarda bazaga nisbatan ishlaydi (`--base-ref`, quyiga qarang)                                                                                                                                                                                                                                                                                                                                             | Ha (ratchet)                               |
| `check:route-validation:t06`      | Barcha routelarda Zod sxemalari mavjud (6-daraja siyosati)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Ha                                         |
| `check:any-budget:t11`            | `@ts-expect-error // any` soni belgilangan limitdan oshmaydi (11-daraja catraca)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Ha                                         |
| `check:provider-consistency`      | `providers.ts` ichidagi har bir provayderning `providerRegistry.ts` ichida mos yozuvi mavjud (va aksincha, ruxsat etilganlar roʻyxati doirasida)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Ha                                         |
| `check:model-lifecycle`           | Qoʻlda yuritiladigan uchta marshrutlash jadvali repozitoriyga kiritilgan hayot sikli snapshoti (#11503) bilan muvofiqligicha qoladi: `FITNESS_TABLE` (`taskFitness.ts`) `REGISTRY` marshrutlay oladigan, foydalanishdan chiqarilgan hech bir idʼga ball bermaydi; har bir `BUILT_IN_ALIASES` nishoni `REGISTRY` ichida mavjud va foydalanishdan chiqarilgan idʼlar snapshotida yoʻq; `REGISTRY` ichida hanuz mavjud boʻlgan har bir foydalanishdan chiqarilgan id boshqa manzilga yoʻnaltirilgan yoki `allowedRetiredInCatalog` ichida koʻrsatilgan; va `DEFAULT_DEGRADATION_MAP` ichidagi hech bir manba yoki nishon ushbu snapshotda foydalanishdan chiqarilgan deb koʻrsatilmagan. Bu modelga hozirda jonli yuqori oqimdagi xizmat orqali xizmat koʻrsatilayotganini isbotlamaydi. Oflayn — qoʻlda `npm run quality:refresh-model-lifecycle` (tarmoqdan foydalanadi; CIʼga ulanmagan) orqali yangilanadigan `config/quality/model-lifecycle.json` bilan taqqoslaydi. `allowedRetiredInCatalog` — bosqichma-bosqich qisqartiriladigan ratchet: yozuvni faqat kuzatuv muammosi bilan birga qoʻshing. | Ha                                         |
| `check:fetch-targets`             | Mijoz tomonidagi `src/` ichidagi har bir `fetch("/api/...")` haqiqiy `route.ts` fayliga mos keladi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Ha                                         |
| `check:deps`                      | Repozitoriydagi har bir `package.json` boʻylab `npm install` orqali oʻrnatiladigan barcha bogʻliqliklar `dependency-allowlist.json` ichida mavjud; versiyasi qatʼiy belgilanmagan yoki slopsquatting ehtimoli boʻlgan yangi paketlar belgilab qoʻyiladi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Ha                                         |
| `audit:deps`                      | Barcha beshta mustaqil lockfile (ildiz, Electron, OpenCode plaginlari v1/v2 va provayder) uchun npm auditi. Kritik ogohlantirishlar bloklaydi; yuqori darajadagi ogohlantirishlar ko‘rinadigan ogohlantirish sifatida qoladi. Mavjud bo‘lmagan/muvaffaqiyatsiz auditlar INCOMPLETE hisoblanadi va bloklaydi; har bir qamrov bo‘yicha lock xeshlari va hisobotlar saqlanadi.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Ha                                         |
| `check:lockfile`                  | `package-lock.json` yaxlitligi — https reyestri, yaxlitlik xeshlari, xost qayta belgilashlari yo‘q                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Ha                                         |
| `check:licenses`                  | Ishlab chiqarish bog‘liqliklari uchun SPDX litsenziyalarining ruxsat etilgan ro‘yxati                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Ha                                         |
| `check:tracked-artifacts`         | Build artefaktlari / commit qilingan `node_modules` ramziy havolalari yo‘q (husky pre-commit jarayonida ham ishga tushadi; pre-push ataylab yengil — #6716)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Ha                                         |
| `check:ai-attribution`            | PR commitlari, sarlavhasi yoki matnida AI/bot `Co-Authored-By` treyleri yoki AI yordamida yaratilganlik futeri yo‘q — Qat’iy qoida #16 (`quality.yml` faylidagi PR→`release/**` uchun tezkor tekshiruvlar siklida — hodisa payloadini o‘qiydi, PR bo‘lmasa hech qanday amal bajarmaydi — hamda `ci.yml` faylidagi PR→`main` uchun lint jarayonining faqat PRga tegishli bosqichida; shuningdek, husky `commit-msg` hookida; inson hammualliflarga ruxsat beriladi; #14436)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `check:vitest-exclusions`         | Har bir Vitest istisnosi kuzatuv masalasini ko‘rsatadi va `config/quality/vitest-exclusions.json` faylida mavjud (#13204)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Ha                                         |
| `check:file-size`                 | Manba fayllari (`src/`, `open-sse/`, `electron/`, `bin/` ichidagi `.ts`/`.tsx`) `cap` doirasida, test fayllari (`*.test.ts(x)`) esa `testCap` doirasida qoladi; `file-size-baseline.json` ichida muzlatilgan (`frozen` / `testFrozen`) fayllar qayd etilgan hajmidan oshmasligi kerak                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Ha                                         |
| `check:error-helper`              | Ijrochilar/ishlov beruvchilardagi xato javoblari `buildErrorBody()` / `sanitizeErrorMessage()` dan foydalanadi (Qatʼiy qoida #12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Ha                                         |
| `check:migration-numbering`       | Migratsiya SQL fayllari ketma-ket raqamlangan, bo‘shliqlar yoki takroriy raqamlar yo‘q                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Ha                                         |
| `check:public-creds`              | `publicCreds.ts` dan tashqarida literal OAuth `client_id`/`client_secret` yoki Firebase Web kalitlari yo‘q (Qatʼiy qoida #11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Ha                                         |
| `check:db-rules`                  | `src/lib/db/` modullaridan tashqarida bevosita SQL yo‘q; `localDb.ts` dan barrel-importlar yo‘q (Qatʼiy qoidalar #2/#5)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Ha                                         |
| `check:known-symbols`             | Dispetcher jadvallarida ro‘yxatdan o‘tkazilgan provayder ijrochilari, marshrutlash strategiyalari va tarjimonlar diskdagi fayllarga mos keladi — yetim yoki eʼlon qilinmagan simvollar yo‘q                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Ha                                         |
| `check:route-guard-membership`    | Ichki jarayonni ishga tushiradigan har bir marshrut `isLocalOnlyPath()` tomonidan tasniflanadi (Qatʼiy qoidalar #15/#17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Ha                                         |
| `check:test-discovery`            | Repodagi har bir `*.test.ts` / `*.spec.ts` fayli kamida bitta test ishga tushirgichi tomonidan aniqlanadi (ratchet: `test-discovery-baseline.json` faylidagi yetim fayllar roʻyxati faqat qisqarishi mumkin)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Ha                                         |
| `check:agent-skills-sync`         | Yaratilgan agent-koʻnikmalari artefaktlari ularning manba katalogiga mos keladi (tafovut yoʻq)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `check:provider-asset-provenance` | Provayder logotiplari/assetlari uchun kelib chiqish manbasi qayd etilgan                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `lint:json`                       | JSON konfiguratsiya fayllari tahlildan muvaffaqiyatli oʻtadi va repo lint qoidalariga javob beradi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `typecheck:core`                  | TypeScript xatolarsiz kompilyatsiya qilinadi (faqat tavsiyaviy ogohlantirishlar)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Ha                                         |
| `typecheck:noimplicit:core`       | Qatʼiy `noImplicitAny` — kelajakka yoʻnaltirilgan; avvaldan mavjud koʻplab chaqiruv joylari hali ham annotatsiyalarni talab qiladi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | **Tavsiyaviy** (`continue-on-error: true`) |
| `check:dashboard-typecheck`       | `src/app/(dashboard)/**` bilan cheklangan `tsc` (#7033) — `typecheck:core` uchun sinchiklab tanlangan 27 faylli ruxsat roʻyxati hech qanday dashboard TSX faylini oʻz ichiga olmaydi va `next build` ham uni hech qachon tur tekshiruvidan oʻtkazmaydi (`next.config.mjs` faylida `ignoreBuildErrors: true` oʻrnatilgan), shu sababli u yerdagi yetim-identifikator regressiyalari (#6625/#6909) CI uchun koʻrinmas edi. Har bir fayl/TS-kod boʻyicha muzlatilgan sanoq etaloniga nisbatan farqlarni tekshiradi (`config/quality/dashboard-typecheck-baseline.json`, `check:known-symbols` bilan bir xil eskirganlikni majburiy nazorat qilish andozasi) — faqat etalondagi sanoqdan ortiq YANGI xatolar tekshiruvdan oʻtolmaydi; avvaldan mavjud xato tuzatilganda `--update` bilan etalonni pasaytiring.                                                                                                                                                                                                                                                                                            | Ha                                         |

### Vazifa: `quality-gate`

`test-coverage`dan keyin ishga tushadi. Xatolik yuz bersa, birlashtirishni bloklaydi.

| Skript                       | Tekshiradi                                                                                                                                                                                                                                | Bloklovchi                      |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| `quality:collect`            | `quality-metrics.json` faylini yaratadi (ESLint ogohlantirishlari soni, birlashtirilgan segment hisobotidan qamrov)                                                                                                                       | Ha (ratchetdan oldingi bosqich) |
| `quality:ratchet`            | `quality-baseline.json` faylidagi har bir metrika yomonlashmaganini tekshiradi (ESLint ogohlantirishlari ≤ etalon; qamrov ≥ etalon)                                                                                                       | Ha                              |
| `check:duplication`          | Kod takrorlanishi (jscpd@4) `quality-baseline.json` faylidagi etalondan oshmasligini tekshiradi                                                                                                                                           | Ha                              |
| `check:complexity`           | Fayl darajasidagi siklomatik murakkablik chegaradan oshmasligini tekshiradi (asosiy ESLint `complexity` + `max-lines-per-function`)                                                                                                       | Ha                              |
| `check:cognitive-complexity` | Kognitiv murakkablik ratcheti (`eslint-plugin-sonarjs`) — alohida ESLint oʻtishi; CI ikkalasini yagona `check:complexity-ratchets` bosqichi sifatida birlashtirib ishga tushiradi                                                         | Ha                              |
| `check:dead-code`            | Ishlatilmaydigan eksportlar/fayllar ratcheti (knip) etalonga nisbatan yomonlashmaganini tekshiradi                                                                                                                                        | Ha                              |
| `check:compression-budget`   | Siqish benchmarki byudjeti — har bir mexanizm uchun token tejashning minimal chegaralari yomonlashmasligi kerak                                                                                                                           | Ha                              |
| `check:type-coverage`        | Turlashtirilgan foiz ratcheti (`type-coverage`) yomonlashmaganini tekshiradi; asosan `typecheck:noimplicit:core` oʻrnini bosadi                                                                                                           | Ha                              |
| `check:codeql-ratchet`       | Ochiq CodeQL ogohlantirishlari soni yomonlashmaganini tekshiradi (`gh api` orqali oʻqiydi; token boʻlmasa, muammosiz oʻtkazib yuboradi) — yangilash davriyligi va qoʻlda ishga tushirish uchun quyidagi "CodeQL ratchet" boʻlimiga qarang | Ha                              |

### Vazifa: `quality-extended`

Vazifa tegishli nomzodlarni bloklaydi. Paket hajmi, maxfiy maʼlumotlar topilmalari, zaiflik
topilmalari, ish jarayoni topilmalari va OpenAPI oʻzgarishlari majburiy ratchetlar bilan
tekshiriladi. Aylanma bogʻliqlik diagnostikasi va skanerni oʻrnatish tavsiyaviy bosqichlardir;
muvaffaqiyatsiz oʻrnatish keyingi majburiy oʻlchovdan ozod qilmaydi. Mavjud boʻlmagan vositalar,
yaroqsiz hisobotlar yoki mavjud boʻlmagan etalonlar majburiy skaner tekshiruvini TUGALLANMAGAN
holatda qoldiradi.

| Skript                   | Tekshiradi                                                                                                                                                                                                                                                  | Bloklash                                          |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| `check:circular-deps`    | Siklik bogʻliqliklar yoʻqligi (dpdm)                                                                                                                                                                                                                        | **Tavsiyaviy**                                    |
| `check:bundle-size`      | Toʻplam hajmi chegaradan oshmasligi; oʻlchovni olib boʻlmasa, tekshiruv muvaffaqiyatsiz tugaydi                                                                                                                                                             | **--ratchet bilan bloklaydi**                     |
| `check:secrets`          | Gitleaks topilmalari ortib ketmasligi; majburiy skanerlashda vosita/manba/boshlangʻich holat yoʻqligi, muvaffaqiyatsiz skanerlashlar va yaroqsiz hisobotlar rad etiladi                                                                                     | **--ratchet bilan bloklaydi**                     |
| `check:vuln-ratchet`     | Bogʻliqliklardagi zaifliklar ortib ketmasligi; majburiy skanerlashda vositalar yoʻqligi, yaroqsiz hisobotlar yoki boshlangʻich holat yoʻqligi rad etiladi                                                                                                   | **--ratchet bilan bloklaydi**                     |
| `check:workflows`        | Ish jarayoni linti (actionlint + zizmor); yoʻq/buzilgan skanerlar, yaroqsiz hisobotlar yoki ratchet boshlangʻich holati yoʻqligi INCOMPLETE sifatida muvaffaqiyatsiz tugaydi. Yaroqli topilmalar tanlangan qatʼiy/tavsiyaviy/ratchet siyosatiga amal qiladi | Bajarish majburiy; zizmor ratchet CIʼda bloklaydi |
| `check:openapi-breaking` | Belgilangan hodisa commitlariga nisbatan ommaviy API shartnomasi (PR merge-base, push oldidan, merge-group bazasi; rejalashtirilgan/qoʻlda checkout uchun birinchi ota-commit); majburiy oʻlchov xatolikda rad etiladi                                      | **--ratchet bilan bloklaydi**                     |

### Vazifa: `docs-sync-strict`

Har bir `main` PRʼida ishga tushadi. Xatolik yuz bersa, birlashtirishni bloklaydi.

| Skript                         | Tekshiradi                                                                                                                                                                                                | Bloklash                     |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `check:docs-all`               | Quyidagi 6 ta quyi tekshiruvni ketma-ket ishga tushiradigan meta-tekshiruv                                                                                                                                | Ha                           |
| ↳ `check:docs-sync`            | CHANGELOG / OpenAPI / llm.txt versiyalarining muvofiqligi                                                                                                                                                 | Ha                           |
| ↳ `check:docs-counts`          | Matndagi sonlar (provayderlar soni, migratsiyalar soni va hokazo) haqiqiy sonlarning ratchet oraligʻida boʻlishi                                                                                          | Ha                           |
| ↳ `check:env-doc-sync`         | `.env.example` ichidagi har bir muhit oʻzgaruvchisi hujjatlardagi jadvalda keltirilgani va aksincha                                                                                                       | Ha                           |
| ↳ `check:deprecated-versions`  | Hujjatlarda eskirgan versiya satrlari yoʻqligi                                                                                                                                                            | Ha                           |
| ↳ `check:doc-links`            | Hujjatlardagi ichki markdown havolalari haqiqiy fayllarga olib borishi (`[text]`/`(path)` shakli)                                                                                                         | Ha                           |
| ↳ `check:fabricated-docs`      | Hujjatlarda keltirilgan marshrutlar, muhit oʻzgaruvchilari, CLI buyruqlari, hook nomlari va fayl yoʻllari kod bazasida mavjudligi. `--strict` orqali qatʼiy tekshiruv; bayroqsiz holatda yumshoq xatolik. | Ha (CIʼda `--strict` orqali) |
| `check:cli-i18n`               | CLI buyruq satrlari barcha i18n lokal fayllarida mavjudligi                                                                                                                                               | Ha                           |
| `check:openapi-coverage`       | OpenAPI spetsifikatsiyasi haqiqiy marshrutlarning kamida ratchet bilan belgilangan minimal miqdorini qamrab olishi                                                                                        | Ha                           |
| `check:openapi-security-tiers` | `openapi.yaml` faylidagi xavfsizlik darajasi annotatsiyalari `routeGuard.ts` tasniflariga mosligi                                                                                                         | **Tavsiyaviy**               |
| `check:openapi-routes`         | `openapi.yaml` faylidagi har bir yoʻl haqiqiy `route.ts` fayliga mos kelishi (gallyutsinatsiyaga qarshi)                                                                                                  | Ha                           |
| `check:docs-symbols`           | `docs/**/*.md` ichidagi har bir `/api/...` havolasi haqiqiy `route.ts` fayliga mos kelishi (gallyutsinatsiyaga qarshi)                                                                                    | Ha                           |
| `i18n translation drift`       | i18n lokal fayllaridagi tarjima qilinmagan kalitlar — faqat ogohlantirish                                                                                                                                 | **Tavsiyaviy**               |

### Vazifa: `i18n-ui-coverage`

| Skript                           | Tekshiradi                                                                                                                                                                                                                                                   | Bloklovchi     |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- |
| `check-ui-keys-coverage` (ichki) | UI i18n kalitlari qamrovi ≥ 65%                                                                                                                                                                                                                              | Ha             |
| `check-ui-value-drift` (ichki)   | Qayta yozilgan inglizcha **qiymat** ortida eskirgan tarjima qolmasligini                                                                                                                                                                                     | Ha             |
| `check-new-key-coverage` (ichki) | **Yangi** inglizcha kalit har bir lokalingizatsiyada tarjima qilinganini — `__MISSING__:` belgisi rad etiladi                                                                                                                                                | Ha             |
| `check-translation-ratio`        | Har bir lokalingizatsiyadagi haqiqiy tarjimalar nisbati (ruxsat etilganlar roʻyxatidan tashqaridagi inglizchaga aynan teng / toʻldiruvchi / yetishmayotgan qiymatlar) `config/quality/i18n-translation-baseline.json` + zaxira chegarasidan oshmasligi kerak | **Tavsiyaviy** |

`fetch-depth: 0` talab qilinadi — qiymat ogʻishi toʻsigʻi `en.json` faylini birlashtirish bazasi bilan solishtiradi.

#### `check-ui-value-drift` — eskirgan tarjimalar toʻsigʻi

Boshqa toʻsiqlar tuzilmaviy jihatdan aniqlay olmaydigan yagona i18n regressiyasini ushlaydi: inglizcha qiymat
qayta yoziladi, ammo _avvalgi_ inglizcha qiymatdan olingan tarjimalar oʻzgarishsiz qoladi, natijada
ingliz tilidan boshqa tillardagi foydalanuvchilar ishonchli ohangda yozilgan, ammo endi notoʻgʻri matnni oʻqishda davom etadilar.

Bu holat amalda chiqarilgan versiyada yuz berdi. Antigravity tizimga kirish yordamchisi qoʻshilganda (#5203)
`oauthModal.googleOAuthWarning` qayta yozilgan edi; **43 lokalingizatsiyadan 39 tasida** operatorlarga «toʻliq URL manzilidan nusxa olib, uni quyiga joylashtirish» aytilgan matn saqlanib qolgan — bu provayder uchun bunday jarayonni yakunlab boʻlmaydi. Bu
#8463 gacha eʼtibordan chetda qoldi, chunki:

- `sync-ui-keys` faqat **mavjud boʻlmagan** kalitlarni toʻldiradi, **eskirganlarini** esa hech qachon yangilamaydi;
- `check-ui-keys-coverage` kalitning _mavjudligini_ hisoblaydi, shu sababli eskirgan tarjima qamrab olingan deb baholanadi;
- `check-translation-drift` `docs/i18n/<locale>/**.md` hujjat nusxalarini kuzatadi —
  u `src/i18n/messages/*.json` fayllarini hech qachon oʻqimaydi. 2026-09 qayta sinxronlashdan beri `docs-sync-strict` vazifasida bloklanadi: asosiy hujjatni tahrirlang → `npm run i18n:run -- --files=<doc>` (boʻlim darajasida, kam xarajatli).

**Farqlarni hisobga oladi, bazaviy koʻrsatkichga tayanmaydi.** U birlashtirish bazasidagi `en.json` faylini
ishchi daraxt bilan solishtiradi; inglizcha qiymati oʻzgargan har bir kalit uchun lokalingizatsiyada hanuz
tegmasdan qoldirilgan tarjima boʻlsa, u eskirgan hisoblanadi. Bu ataylab **avvaldan mavjud qarzdorlikni muzlatib qoʻyadi** — farq
uzoq vaqtdan beri mavjud tarjima qaysi eski inglizcha matndan olinganini koʻrsata olmaydi, shu sababli toʻsiq
faqat joriy oʻzgarish tegadigan qismlarni baholaydi. Muqobil usul (har bir kalit uchun xesh bazaviy koʻrsatkichi)
taxminan 600 KB hajmdagi yaratiluvchi faylni talab qiladi, bu mavjud eng katta bazaviy koʻrsatkichdan 3 baravar katta boʻlib,
har bir i18n PR’da oʻzgaradi.

Talabni qondirishning ikki usuli mavjud:

1. tegishli tarjimalarni yangilash yoki
2. ularni `__MISSING__:<new english>` qiymatiga oʻrnatish — shunda bajarilish muhiti tuzatilgan inglizcha matnni
   taqdim etadi (`src/i18n/request.ts::deepMergeFallback`, #7258) va kalit tarjima navbatiga qoʻshiladi.

Agar satrning **maʼnosi** oʻzgargan boʻlsa, **kalit nomini oʻzgartirishni** afzal koʻring: yangi kalit
eskirgan tarjimani meros qilib ololmaydi. #8463 aynan shu andozadan foydalangan.

```bash
npm run i18n:check-value-drift          # qatʼiy (CI ishga tushiradigan variant)
npm run i18n:check-value-drift:warn     # faqat hisobot
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

Bazaviy katalogni oʻqib boʻlmaganda (bazaviy ref mavjud boʻlmagan sayoz
klon) `check-openapi-breaking` xatti-harakatiga mos ravishda `SKIP reason=base-unresolved` bilan 0 kodida yakunlanadi.

### Vazifa: `i18n`

Toʻliq i18n tekshiruv matritsasi (har bir lokalingizatsiya uchun bittadan vazifa). Butun vazifa tavsiyaviy hisoblanadi.

| Skript                          | Tekshiradi                                        | Bloklovchi                                                |
| ------------------------------- | ------------------------------------------------- | --------------------------------------------------------- |
| `validate_translation.py quick` | Har bir lokalingizatsiya tarjimasining toʻliqligi | **Tavsiyaviy** (butun vazifada `continue-on-error: true`) |

### Vazifa: `pr-test-policy`

Faqat pull request’larda ishga tushadi.

| Skript                 | Tekshiradi                                                                                                                                                                 | Bloklovchi |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| `check:pr-test-policy` | `src/`, `open-sse/`, `electron/` yoki `bin/` ichidagi ishlab chiqarish kodini oʻzgartiradigan PR’lar testlarni ham qoʻshishi yoki yangilashi shart (Qatʼiy qoida №8)       | Ha         |
| `check:test-masking`   | Oʻzgartirilgan test fayllari tasdiqlar umumiy sonini kamaytirmasligi yoki `assert.ok(true)` tavtologiyalarini qoʻshmasligi kerak                                           | Ha         |
| `check:pr-evidence`    | PR matnida oʻzgarish uchun test/VPS dalillari keltirilganini tekshiradi (PR matnida qidirish orqali Qatʼiy qoida №18’ni avtomatlashtiradi — ishonchsiz, Backlog’ga qarang) | Ha         |

### Vazifa: `test-vitest`

`build` vazifasidan keyin ishga tushadi. Xatolik yuz bersa, birlashtirishni bloklaydi.

| Toʻplam          | Tekshiradi                                                                | Bloklovchi                                                                                                                                                      |
| ---------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `test:vitest`    | MCP serveri (110 ta vosita), autoCombo, kesh — vitest ishga tushiruvchisi | Ha                                                                                                                                                              |
| `test:vitest:ui` | UI komponent testlari — vitest ishga tushiruvchisi                        | **Bloklovchi** — avvaldan mavjud xatoliklar `vitest.config.ts` faylida aniq istisno qilingan; yangi xatoliklar vazifaning muvaffaqiyatsiz tugashiga olib keladi |

### Tungi ish jarayonlari (rejalashtirilgan, tavsiyaviy)

Ular cron jadvali bo‘yicha (va `workflow_dispatch` orqali) ishga tushadi, PRlarda esa hech qachon ishga tushmaydi. Ularning barchasi tavsiyaviy hisoblanadi.

| Ish jarayoni           | Tekshiradi                                                                                                                                                                                                | Bloklovchi     |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `nightly-property`     | tasodifiy boshlang‘ich qiymat va ko‘p sonli ishga tushirishlar bilan fast-check xususiyat testlari                                                                                                        | **Tavsiyaviy** |
| `nightly-resilience`   | heap o‘sishi chegarasi, nosozliklarni chaos usulida kiritish, k6 yuklama/uzoq muddatli sinovlari                                                                                                          | **Tavsiyaviy** |
| `nightly-llm-security` | promptfoo injeksiyadan himoyasi (bloklash rejimi) + garak tekshiruvlari (provayder siri bo‘lmasa o‘tkazib yuboriladi)                                                                                     | **Tavsiyaviy** |
| `nightly-schemathesis` | `docs/openapi.yaml` yordamida ishlayotgan OmniRoute uchun OpenAPI shartnomasini fuzzing qilish (schemathesis) — spetsifikatsiya buzilishlari / qayta ishlanmagan 500 xatolarini aniqlaydi (8-bosqich B.4) | **Tavsiyaviy** |
| `nightly-mutation`     | tezkor modul yo‘nalishi bo‘yicha Stryker mutatsion testlash bahosi — saqlanib qolgan mutantlar zaif assertlarni aniqlaydi                                                                                 | **Tavsiyaviy** |
| `nightly-compat`       | qo‘llab-quvvatlanadigan `engines.node` diapazonlari bo‘yicha Node dvigateli muvofiqlik matritsasi                                                                                                         | **Tavsiyaviy** |

Unumdorlikning boshlang‘ich ko‘rsatkichlari (heap, TTFB, qurish vaqti) qayd etiladi, ammo mezon sifatida qo‘llanmaydi: [`PERF_BASELINE.md`](../ops/PERF_BASELINE.md) fayliga qarang (`npm run perf:lts-baseline`).

---

## Tezlik bosqichi (2026-08-30 → v4.0 LTS): barcha bazaviy chegaralar 20% ga yumshatildi

Masʼulning qarori (2026-08-30): v4.0 modullashtirilishigacha texnik qarzni cheklashdan ko‘ra
yetkazib berish tezligi muhimroq. Barcha **raqamli** ratchet bazaviy chegaralari audit qilish
mumkin bo‘lgan yagona o‘tishda 20% ga yumshatildi va bosqich `config/quality/quality-baseline.json`
faylida eʼlon qilindi:

```json
"_policy": { "phase": "velocity", "since": "2026-08-30", "until": "4.0.0",
             "relaxPct": 20, "requireTighten": false }
```

| Nima o‘zgardi                                                                                                                                                                                                                                            | Qayerda                                                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `metrics.*.value` — kamroq bo‘lsa yaxshiroq bo‘lgan sonlar ×1.2, ko‘proq bo‘lsa yaxshiroq bo‘lgan foizlar ÷1.2 (qamrovning quyi chegarasi 60 bo‘lib qoldi, `eslintErrors` 0 bo‘lib qoladi, `eslintWarnings` 0 → muzlatilgan bostirishlar sonining 20% i) | `quality-baseline.json` (`_relax_velocity_2026_08_30` izohida har bir oldingi → keyingi qiymat keltirilgan) |
| `count` ×1.2 / `percentage` ×1.2                                                                                                                                                                                                                         | `complexity-baseline.json`, `duplication-baseline.json`                                                     |
| `cap`, `testCap`, har bir `frozen[*]` / `testFrozen[*]` qator chegarasi ×1.2                                                                                                                                                                             | `file-size-baseline.json`                                                                                   |
| har bir fayl / har bir TS kodi bo‘yicha sonlar ×1.2                                                                                                                                                                                                      | `api-typecheck-baseline.json`, `dashboard-typecheck-baseline.json`, `open-sse-typecheck-baseline.json`      |
| `THRESHOLD` 36 → 30                                                                                                                                                                                                                                      | `scripts/check/check-openapi-coverage.mjs`                                                                  |
| `_policy.requireTighten === false` bo‘lganda `--require-tighten` tavsiyaviy bo‘ladi                                                                                                                                                                      | `scripts/quality/check-quality-ratchet.mjs`                                                                 |
| tungi `bank-ratchet-shrinks` to‘xtatib turiladi (u o‘lchangan qisqarishni zaxiralab, bo‘sh chegarani bekor qilgan bo‘lardi)                                                                                                                              | `.github/workflows/nightly-release-green.yml`                                                               |

Ruxsat ro‘yxatlari (`eslint-suppressions.json`, `test-masking-allowlist.json`, `test-discovery-baseline.json`,
…) **budjetlar emas** va ularga tegilmadi. O‘tish/o‘tmaslik siyosati nazoratlari (sirlar, SQL qoidalari,
hujjatlar/muhit shartnomasi, i18n mosligi, birlik testlari) o‘zgarmadi — muvaffaqiyatsiz test hamon muvaffaqiyatsiz testdir.

**Vositalar**

- `npm run quality:relax-baselines -- --pct 20 --note velocity_YYYY_MM_DD [--dry-run]` — bir
  martalik yumshatish (`scripts/quality/relax-baselines.mjs`); ayni izoh bilan ikkinchi marta
  ishga tushirishni rad etadi.
- `npm run quality:headroom [-- --only deadExports,fileSize] [--json out.json --md out.md]` —
  har bir raqamli nazoratni CI dagi kabi o‘lchaydi va har bir nazorat uchun qolgan bo‘sh chegarani
  chiqaradi (`scripts/quality/baseline-headroom.mjs`). Tungi `baseline-headroom` vazifasi
  jadvalni ish jarayoni bajarilishining xulosasida eʼlon qiladi va uning JSON/Markdown hisobotini
  90 kun saqlanadigan `baseline-headroom-<run_id>` artefakti sifatida yuklaydi. Ogohlantirish va
  jiddiy holat qatorlari o‘z yuqori chegarasining 10% i ichida bo‘lgan yoki undan oshib ketgan
  nazoratlarni ko‘rsatadi. Budjetlar sarflanayotgani haqida erta ogohlantirish olish uchun ushbu
  hisobotlarni ko‘rib chiqing; muammo keltirib chiqargan nazoratning `_rebaseline_*` izohlarini
  tekshiring. Vazifa endi doimiy muammo yozuvini yaratmaydi yoki yangilamaydi; #12149 avvalgi
  hisobotlar tarixini saqlaydi.

**Yangi kod rejimi (Clean-as-You-Code) — 2026-08-30 dan beri, faqat PR tezkor yo‘li uchun**

`pull_request` hodisalarida `quality.yml` fayli `check:file-size`,
`check:complexity-ratchets` va `check:dead-code` ga `--base-ref <PR base SHA>` uzatadi.
`check:complexity-ratchets` va `check:dead-code` uchun nazorat HEAD ni birlashish bazasi bilan
**faqat PR o‘zgartirgan fayllar doirasida** taqqoslaydi (`scripts/check/newCodeMode.mjs`:
birlashish bazasi vaqtinchalik `git worktree` ichida yaratiladi, ESLint/knip o‘sha yerda va
HEAD da ishga tushiriladi hamda har bir fayl bo‘yicha sonlarning farqi hisoblanadi):

- **bloklovchi** — PR o‘zi o‘zgartirgan fayllarda siklomatik/kognitiv murakkablik buzilishlarini
  yoki foydalanilmayotgan eksportlarni qo‘shgan (`complexityNewCode=`, `cognitiveComplexityNewCode=`,
  `deadExportsNewCode=` jurnalda);
- **tavsiyaviy** — global jami qiymatning muzlatilgan bazaviy chegara bilan taqqoslanishi.
  Meros qolgan og‘ish aloqasi bo‘lmagan PR ni hech qachon muvaffaqiyatsiz qilmaydi; og‘ish
  relizni muvofiqlashtirish paytida qayta muzlatiladi va bo‘sh chegara vazifasi tomonidan kuzatiladi.

`check:file-size` bazaviy havoladan o‘z qoidalari asosida foydalanadi
(`scripts/check/check-file-size.mjs`, #8522): u daraxtdagi har bir manba va test faylini
tekshiradi, har birining PR bazasidagi qatorlar sonini `git show` yordamida o‘qiydi va fayl
faqat uning hajmi bazaviy yuqori chegarasi (`frozen` / `testFrozen` yoki bazaviy ro‘yxatda
bo‘lmagan fayl uchun `cap` / `testCap`) hamda bazaviy hajmidan kattaroq bo‘lgan qiymatdan
oshib ketgandagina muvaffaqiyatsiz deb topiladi. Shu sababli bazada allaqachon og‘ib ketgan
fayl aloqasi bo‘lmagan PR ni hech qachon muvaffaqiyatsiz qilmaydi.

`check:boundary:ratchet` xuddi shu qoidani o‘zining yagona soniga qo‘llaydi
(`scripts/quality/measure-boundary.mjs --ratchet --base-ref <sha>`): PR hodisalarida ham
`quality.yml` tezkor tekshiruvlari, ham `ci.yml` lint vazifasi PR asosining SHA qiymatini uzatadi, asosiy commit
`git archive` eksportidan o‘lchanadi va PR faqat uning `open-sse → src` qirralari
soni `metrics.boundaryOpenSseToSrc` qiymati bilan asosdagi sonning kattarog‘idan oshgandagina muvaffaqiyatsiz tugaydi. Asosdagi limitdan
yuqori siljish (`base drift herdado`) haqida xabar beriladi, ammo bu hech qachon aybsiz PRni qizil holatga tushirmaydi; push → main
mutlaq limitni saqlab qoladi, aniqlab bo‘lmaydigan asos SHA qiymati esa ogohlantirish bilan shu limitga qaytadi.

`workflow_dispatch` ishga tushirishlari, release-green to‘liq tekshiruvi va tungi zaxira vazifasida PR asosi
mavjud emas va ular mutlaq (global) taqqoslashni saqlab qoladi. Qamrov, takrorlanish va tur qamrovi hozircha
global bo‘lib qoladi (ularning vositalari har bir fayl bo‘yicha farqni arzon hisoblamaydi) — ularga ham xuddi shunday yondashuvni qo‘llash mumkin.

**Bosqichni v4.0 da yakunlash (LTS = avvalgidan qat’iyroq, “normal holatga qaytish” emas)**

1. Sof `release/v4.0.0` uchida: qayd uchun `npm run quality:headroom --json`, so‘ng
   `npm run quality:ratchet -- --update`, `check:file-size --update`,
   `check:complexity-ratchets --update`, `check:dead-code --update`, har bir typecheck tekshiruvining
   `--update` buyrug‘ini ishga tushiring — barcha boshlang‘ich ko‘rsatkichlar o‘lchangan qiymatgacha pasayadi.
2. `quality-baseline.json` faylidan `_policy` ni o‘chiring (`--require-tighten` va tungi
   zaxiralashni qayta faollashtiradi), `check-openapi-coverage.mjs` ichidagi `THRESHOLD = 36` qiymatini (yoki undan yuqorisini) tiklang.
3. Modullashtirish samara bergan joylarda o‘lchangan qiymatdan ham qat’iyroq chegaralarni belgilang: fayl o‘lchami uchun `cap` ni yana 1000
   (yoki 800) ga tushiring, qamrovning quyi chegaralarini +5 ga oshiring, modullashtirilgan paketlar uchun foydalanilmaydigan eksportlarni 0 ga tushiring.

## Ratchet bazaviy darajasi (`quality-baseline.json`)

Ratchet mexanizmi (`scripts/quality/check-quality-ratchet.mjs`) `quality-baseline.json` faylini o‘qiydi
va uni yangi yig‘ilgan `quality-metrics.json` bilan taqqoslaydi. Epsilon qiymatidan ortiq
yomonlashgan har qanday metrika build jarayonining muvaffaqiyatsiz tugashiga sabab bo‘ladi.

Hozirda kuzatiladigan metrikalar:

| Metrika               | Yo‘nalish | Ma’nosi                                        |
| --------------------- | --------- | ---------------------------------------------- |
| `eslintWarnings`      | `down`    | ESLint ogohlantirishlari soni oshmasligi kerak |
| `coverage.statements` | `up`      | Ifodalar qamrovi pasaymasligi kerak            |
| `coverage.lines`      | `up`      | Satrlar qamrovi pasaymasligi kerak             |
| `coverage.functions`  | `up`      | Funksiyalar qamrovi pasaymasligi kerak         |
| `coverage.branches`   | `up`      | Tarmoqlar qamrovi pasaymasligi kerak           |

Haqiqiy yaxshilanishdan so‘ng bazaviy darajani yangilash uchun:

```bash
npm run quality:ratchet -- --update
git add quality-baseline.json
```

`--update` bayrog‘i joriy o‘lchangan qiymatlarni `quality-baseline.json` fayliga yozadi.
Bu faylni metrikani yaxshilagan o‘zgarish bilan birga commit qiling. Metrikani yaxshilab,
bazaviy darajani yangilamagan PR `--require-tighten` orqali aniqlanadi (6A.5-bosqich,
amalga oshirilishi kutilmoqda).

### CodeQL ratcheti: yangilash davriyligi va qo‘lda ishga tushirish

`check:codeql-ratchet` **har bir PR uchun emas, jadval asosida yangilanadigan repo holatini** o‘qiydi.
`gh api repos/diegosouzapw/OmniRoute/code-scanning/default-setup` buyrug‘i
`state: configured`, `schedule: weekly` deb xabar beradi: bu har bir push uchun
tahlil emas, GitHub’ning default-setup skanidir. Natijada: ogohlantirishlarni TUZATADIGAN PR
merge qilingandan so‘ng ratchet keyingi rejalashtirilgan skan ishga tushguniga qadar eski,
yuqoriroq sonni o‘qishda davom etadi — shu sababli skan yangilanmaguncha har bir ochiq PR’da,
jumladan tuzatuvchi PR’ning keyingi o‘zgarishlarida ham regressiya haqida xabar beradi.

**Qo‘lda yangilash**: `gh workflow run codeql.yml --ref release/vX.Y.Z` tahlilni qayta
ishga tushiradi va ogohlantirishlarni bir necha daqiqa ichida qayta e’lon qiladi. Avval
`.github/workflows/codeql.yml` faylini o‘qing — uning sarlavhasida bu faqat
`workflow_dispatch` orqali ishlashi **GitHub’ning "default setup" konfiguratsiyasi bilan
ziddiyatga kirishishi sababli** ekani tushuntirilgan (`CodeQL analyses from advanced configurations cannot be
processed when the default setup is enabled`). `push`/`pull_request`/
`schedule` triggerlarini qayta tiklash uchun avval **egasi amal bajarishi kerak**:
Settings → Code security → CodeQL: Default → Advanced. Bu o‘zgartirishsiz `schedule:`
triggerini qo‘shmang — u faqat muvaffaqiyatsiz ishga tushirishlarni keltirib chiqaradi.

**Son kamaygandan keyin bazaviy darajani qat’iylashtiring** — `node scripts/check/check-codeql-ratchet.mjs
--update` yangi o‘lchangan sonni `quality-baseline.json` →
`metrics.codeqlAlerts.value` ichiga yozadi, shuning uchun ratchet eski yuqori chegaragacha
bo‘lgan regressiyaga yashirincha ruxsat bermaydi. Amaliy misol (2026-09-02/03): PR #12502
7 ta haqiqiy ogohlantirishni tuzatdi (o‘lchangan ochiq ogohlantirishlar 13 → 6); PR #12530
mos kelishi uchun muzlatilgan bazaviy darajani 11 → 6 ga qat’iylashtirdi; qolgan 6 tasi
keyin har bir ogohlantirish uchun asos keltirilgan holda yopildi va ochiq ogohlantirishlar
soni 0 ga tushirildi.

**Ogohlantirishlarni yopish operatorning qaroridir (Qat’iy qoida #14)** — yopish izohida
texnik asosni qayd etmasdan hech qachon CodeQL ogohlantirishini yopmang: yuqori oqim
protokoli talabi uchun `won't fix`, test fiksturasi uchun `used in tests`, CodeQL aniqlay
olmaydigan sanitizer uchun `false positive` (namuna: `docs/security/ERROR_SANITIZATION.md`).

---

## Testlarni qayta urinish siyosati (WS5.4, v3.8.49)

Qayta urinish har bir runner uchun alohida belgilanadi, hech qachon global tarzda qoʻllanmaydi — umumiy qayta urinish haqiqiy regressiyalarni
koʻrinmas beqarorliklarga aylantiradi:

| Runner           | Siyosat                                                                                                                                        | Sabab                                                                                                                                                    |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Playwright (e2e) | Faqat CI muhitida `retries: 1`, `trace: on-first-retry` bilan                                                                                  | Brauzer/tarmoq vaqtlari haqiqatan ham deterministik emas; trace bilan bitta qayta urinish beqarorlikni tashxislash mumkin boʻlgan artefaktga aylantiradi |
| Vitest           | Global qayta urinish YOʻQ. Beqarorligi isbotlangan test har bir test uchun alohida qayta urinish oladi (diffʼda koʻrinadi, PRʼda tekshiriladi) | Karantin roʻyxatini repozitoriyda saqlaydi, u hech qachon noaniq boʻlmaydi                                                                               |
| node:test (unit) | Hech qachon qayta urinish YOʻQ                                                                                                                 | Beqaror unit-test — testdagi xato; uni tuzating, qayta ishga tushirish bilan omadni sinamang                                                             |

Beqarorlik telemetriyasi ishga tushgandan keyingi maqsadli SLOʼlar (WS5.2/5.3): har bir test uchun <1% beqarorlik darajasi
(“hozir tuzatish” chegarasi), har bir pipeline uchun ≥95% muvaffaqiyat darajasi. Sohadagi etalon qiymatlar —
oʻz oʻlchovlarimiz asosida qayta kalibrlanadi.

## Reliz darajasidagi ratchet ogʻishi (WS5.5, v3.8.49)

Ratchet (fayl hajmi, murakkablik, eslint ogohlantirishlari) SOF reliz
uchida regressiyaga uchraganda — yaʼni mergeʼlar KOMBINATSIYASI uni yomonlashtirgan boʻlsa va hech bir alohida PR
oʻz branchʼida regressiyani takrorlamasa — tuzatish **reliz kapitani zimmasida boʻlib, bir marta, reliz
branchʼida** bajariladi: ajratib olish/refaktoringni afzal koʻring; faqat hujjatlashtirilgan
asos yozuvi bilan qayta bazalang. Kombinatsion ogʻishni hech qachon hissa qoʻshuvchi PRʼiga yuklamang va hech qachon
har bir PR uchun qayta bazalamang (bu haqiqiy regressiyalarni yashiradi). Avval farqlang: PRʼingiz bunga sabab boʻldi deb taxmin qilishdan oldin,
probe worktreeʼda sof uchdagi qizil holatni takrorlang.

## Ratchet qisqarishlarini saqlab qoʻyish — pasayish yoʻnalishi (#8584)

Ratchet faqat yarmigacha avtomatik va avtomatik boʻlgan yarmi notoʻgʻri. Chegarani **oshirish** —
oʻn soniya oladigan qoʻlda bajariluvchi JSON tahriri va qizil PRʼni blokdan chiqarishning eng tezkor usuli.
Uni **pasaytirish** uchun kimdir `--update` buyrugʻini ishga tushirib, natijani commit qilishi kerak — va
`bank-ratchet-shrinks` jobʼi joriy etilguniga qadar hech bir workflow buni bajarmagan. Oʻlchangan natija
(2026-07-25): 18 ta muzlatilgan fayl allaqachon yangi fayllar uchun 800 qatorlik chegarada yoki undan pastda, eng yomon holat
132× (`src/shared/validation/schemas.ts`, 19 qator uchun 2,523 chegara); murakkablik chegarasi
taxminan 37 ta qayta bazalash qaydi davomida `1794 → 2169` ga koʻtarilgan, atigi bitta pasayish (−1) boʻlgan;
va “keyingi siklda `--update` orqali qatʼiylashtirish” 31 marta yozilib, bir marta bajarilgan. Uni yuzaga keltirgan koddan
uzoqroq yashaydigan chegara har bir yakunlangan dekompozitsiyani faylni keyingi tahrirlaydigan shaxs uchun yashirincha
oʻsish ruxsatiga aylantiradi.

`nightly-release-green.yml` → **`bank-ratchet-shrinks`** jobʼi bu siklni yopadi:

|            |                                                                                                                         |
| ---------- | ----------------------------------------------------------------------------------------------------------------------- |
| Ishlaydi   | `schedule` (kuniga 3×) + `workflow_dispatch` — ataylab `push` emas                                                      |
| Oʻlchaydi  | eng yuqori `release/vX.Y.Z`, `release-green` bilan bir xil aniqlash + injection himoyasi                                |
| Yozadi     | `check:file-size --update` va `check:complexity-ratchets --update` (ikkalasi ham tuzilishi boʻyicha faqat qisqartiradi) |
| Tekshiradi | `npm run check:ratchet-bank` (`scripts/quality/verify-ratchet-bank.mjs`)                                                |
| Yetkazadi  | reliz branchʼiga qarshi doim joriy boʻlgan bitta PR — majburan yangilanadi, hech qachon spam qilinmaydi                 |

Saqlash har bir push uchun emas, paketlab bajariladi, chunki uning kechikish talabi yoʻq (8 soat ichida saqlangan qisqarish
yetarli), har bir merge uchun ishga tushirish esa merge kampaniyalari davomida PR branchʼini qayta-qayta yigʻadi
va har safar toʻliq ESLint tekshiruvi uchun resurs sarflaydi. Aniqlash pushʼda qoladi
(`release-green`); faqat saqlash paketlab bajariladi.

### Xavfsizlik verifikatori

Job bazaviy qiymatlarga nazoratsiz yozadi, shuning uchun `verify-ratchet-bank.mjs` buni
maqbul qiladi. U `--update`dan keyingi daraxtni `HEAD` bilan diff qiladi va har bir oʻzgarish quyidagilardan biri boʻlmasa,
**hech qanday commit yaratilishidan oldin jobʼni toʻxtatadi** — hech qanday PR ochilmaydi:

- `frozen` / `testFrozen` raqamli yozuvi **pasaytirilgan** yoki **olib tashlangan**
- `complexity-baseline.json` → `count` **pasaytirilgan**
- `quality-baseline.json` → `metrics.cognitiveComplexity.value` **pasaytirilgan**

Boshqa har qanday oʻzgarish xatoga olib keladi: raqamni oshirish, yozuv qoʻshish, `cap`/`testCap`ni oʻzgartirish yoki
`_rebaseline_*` qaydini oʻchirish/qayta yozish (bu qaydlar har bir chegara nega mavjudligi haqidagi audit izi boʻlib,
fayl yozuvlari bilan bir xil `frozen` obyekti ichida saqlanadi).
Chegarani oshira oladigan bot joriy holatdan mutlaqo yomonroq boʻlardi. Regressiya himoyasi:
`tests/unit/verify-ratchet-bank.test.ts`.

Job hech qachon `release/*`ga push qilmaydi — PRʼni inson merge qiladi, shuning uchun notoʻgʻri oʻlchov
tekshirilmasdan qabul qilinmaydi.

## Ruxsat berilganlar roʻyxati siyosati

Oldindan mavjud buzilishlarda muvaffaqiyatsiz tugamasligi kerak boʻlgan har bir nazorat muzlatilgan ruxsat berilganlar roʻyxatidan foydalanadi
(masalan, `KNOWN_STALE_DOC_REFS`, `KNOWN_MISSING`, `KNOWN_RAW_SQL`). Siyosat quyidagicha:

**Asosiy sababni tuzating; ruxsat berilganlar roʻyxatidan faqat buzilish oldindan mavjud boʻlsa va
uni ayni PR doirasida tuzatib boʻlmasa foydalaning.**

Ruxsat berilganlar roʻyxatiga yozuv qoʻshganda:

1. Asoslantiruvchi izoh kiriting.
2. Kuzatuv muammosiga havola bering (masalan, `// #3498 — Phase 2 feature, not yet implemented`).
3. Buzilishni tuzatadigan ayni PR doirasida yozuvni olib tashlang — endi faol buzilishni
   yashirmaydigan eskirgan yozuvning oʻzi nuqson hisoblanadi (6A.3 eskirgan majburlash mexanizmi
   joriy qilingach, yetim qolgan ruxsat berilganlar roʻyxati yozuvi nazoratning muvaffaqiyatsiz tugashiga sabab boʻladi).

Testlarni tezroq oʻtkazish uchun ruxsat berilganlar roʻyxatiga yozuvlar qoʻshmang. Ruxsat berilganlar
roʻyxati kengayib borayotgan paytdagi yashil nazorat sifat haqida yolgʻon tasavvur beradi.

### PRʼingizda nazorat muvaffaqiyatsiz tugaganda

1. **Nazorat chiqishini diqqat bilan oʻqing** — unda aynan qaysi fayl yoki belgi qoidani buzgani
   koʻrsatiladi.
2. **Buzilishni tuzating** — aksariyat nazoratlar deterministik fayl tizimi tekshiruvlari boʻlib,
   kod toʻgʻrilanishi bilan muvaffaqiyatli oʻtadi.
3. **Agar buzilish oldindan mavjud boʻlsa** (yaʼni, uni siz kiritmagansiz, ammo nazorat endi
   uni qamrab olayotgan boʻlsa): asoslantiruvchi izoh va kuzatuv muammosi bilan ruxsat berilganlar roʻyxatiga yozuv qoʻshing.
4. **Agar nazorat ratchet boʻlsa** (qamrov, ESLint ogohlantirishlari, takrorlanish, murakkablik):
   oʻzgartirishingiz koʻrsatkichni yomonlashtirgan. Asosiy muammoni tuzating yoki (kamdan-kam hollarda),
   agar oʻzgartirish qasddan qilingan va koʻrsatkichning yomonlashishi maqbul boʻlsa,
   `npm run quality:ratchet -- --update` buyrugʻini ishga tushiring — ammo sababini PR tavsifida hujjatlashtiring.
5. **Maslahat beruvchi nazoratlar** (`continue-on-error: true`) faqat axborot uchun moʻljallangan —
   ular birlashtirishni bloklamaydi, ammo CI xulosasida koʻrinadi. Shunga qaramay, ularni tuzating.

---

## Yangi tekshiruv qoʻshish

1. `scripts/check/check-<name>.mjs` (yoki `.ts`) faylini yarating. Siyosat tekshiruvlari 0/1 kodi bilan yakunlanadi.
   Ratchet uslubidagi tekshiruvlar `collect-metrics.mjs` orqali `quality-metrics.json` fayliga koʻrsatkich yozadi.
2. `package.json` fayliga `"check:<name>": "node scripts/check/check-<name>.mjs"` ni qoʻshing.
3. Uni `.github/workflows/ci.yml` faylida tegishli vazifaga ulang
   (siyosat → `lint` yoki `docs-sync-strict`; ratchet → `quality-gate`).
4. Agar unda ruxsat etilganlar roʻyxati boʻlsa, eskirgan yozuvlar avtomatik aniqlanishi uchun
   `scripts/check/lib/allowlist.mjs` faylidagi `reportStaleEntries()` ni qoʻllang.
5. `tests/unit/build/` ichida tekshiruvning aniqlash mantiqini qamrab oluvchi test yozing.
6. Ushbu hujjatni yangilang (tegishli vazifa jadvaliga qator qoʻshing).

---

## Agent vositalari: sikl ichidagi LSP (ixtiyoriy)

CI tekshiruvlaridan tashqari, OmniRoute **ixtiyoriy** `agent-lsp` asosini ham taqdim etadi
(loyiha darajasidagi `.mcp.json`, 7-bosqich, 15-vazifa). Kod yozuvchi agentlarga TypeScript til serverini taqdim etish uchun `.mcp.json`
yarating, shunda ular kod yozishdan **oldin** belgilarni aniqlaydi /
diagnostikani bajaradi — bu `typecheck:core` uchun daʼvo qilishdan oldin kompilyatsiya qiluvchi hamroh boʻlib,
“oʻylab topilgan belgi” xatolarini manbaning oʻzida kamaytiradi. U ataylab avtomatik yuklanmaydi
(MCP↔LSP koʻprigini siz tanlaysiz va tekshirasiz); buzilgan yozuv faqat ulanish xatosini qayd etadi va
hech qachon seanslarni buzmaydi.

---

## Ratsionalizatsiya bo‘yicha bajarilmagan ishlar (ROI ko‘rib chiqishi — 9-bosqich, 3-to‘lqin)

Ushbu inventar 2026-06-17 sanasida `ci.yml` bilan muvofiqlashtirildi (oldingi versiyada
`audit:deps`, `check:tracked-artifacts`, `check:lockfile`, `check:licenses`,
`check:dead-code`, `check:cognitive-complexity`, `check:type-coverage`,
`check:codeql-ratchet`, `check:pr-evidence` kiritilmagan edi). Muvofiqlashtirilgan to‘plamning ROI ko‘rib chiqilishi
quyidagi ratsionalizatsiya nomzodlarini aniqladi. **Birlashtirishlar CI’dagi mexanik
o‘zgarishlardir; almashtirishlar/olib tashlashlar esa operator ixtiyoridagi siyosiy qarorlardir.** Quyidagilarning hech biri
hali qo‘llanilmagan.

**Yuqorida hujjatlashtirilmagan yana bir qism** (tavsiya xususiyatida, signal darajasi past): `docs-lint` vazifasi
(markdownlint + Vale, butun vazifa uchun `continue-on-error`) va mustaqil skaner ish jarayonlari
`semgrep.yml` / `codeql.yml` / `scorecard.yml`. `semgrepFindings: 0`
`quality-baseline.json` ichida mavjud, ammo `ci.yml` ichidagi bloklovchi ratchet’ga ulanmagan — metrika
hozirda yetim holatda.

### Birlashtirish / takrorlarni yo‘qotish (mexanik, xavfi pastroq)

Har bir nomzod 2026-06-17 sanasidagi amaldagi darvoza holatiga nisbatan tekshirildi (ishon, ammo tekshir);
bir nechta “aniq” birlashtirishlar yashirin qarzdorlikni berkitishi aniqlandi va ular **to‘g‘ridan-to‘g‘ri xavfsiz almashtirishlar emas**.

- **`check:docs-sync` ikki marta ishga tushadi** — `lint` vazifasida mustaqil ravishda, shuningdek `check:docs-all` (`docs-sync-strict`) ichida va husky pre-commit hook’ida. ✅ **BAJARILDI** — mustaqil `lint` chaqiruvi olib tashlandi.
- **CVE skanerlash** — ❌ **Toza birlashtirish EMAS.** `audit:deps` barcha beshta lockfile bo‘yicha kritik tavsiyalarni va to‘liq bajarilmagan auditlarni bloklaydi, joriy siyosatga ko‘ra yuqori darajadagi tavsiyalarni esa ogohlantirish sifatida bildiradi; `check:vuln-ratchet` (osv) esa faqat repozitoriyga kiritilgan boshlang‘ich ko‘rsatkichga nisbatan _regressiya_ yuz bersa muvaffaqiyatsiz tugaydi va talab qilinganida mavjud bo‘lmagan o‘lchovlarni rad etadi. Semantikasi turlicha — `audit:deps` olib tashlansa, mutlaq kritik darvoza va mustaqil paket auditi dalolatnomalari yo‘qoladi. Ikkalasini ham saqlang.
- **Sikllarni aniqlash** — ✅ **BAJARILDI** (#15159 G-01/G-02). Bu yerdagi eski matn `check:cycles`’ni “yashil, saralangan” darvoza deb atagan va `check:circular-deps` (dpdm) 91 ta sikl haqida xabar bergani sababli uni bloklovchi holatda saqlashni asoslagan. Bu yashil holat **soxta yashil** edi: `check:cycles` 5 ta quyi katalogni (450 ta fayl) skanerlagan, faqat statik `import|export … from` bilan moslikni tekshirgan hamda har bir `@/` va `@omniroute/open-sse/` spetsifikatorini tashlab yuborgan, shu sababli repozitoriyda ustun bo‘lgan dinamik import + alias sikllarini ko‘ra olmagan. Tuzatildi: darvoza endi `src` + `open-sse` bo‘ylab yuradi (5023 ta fayl), spetsifikatorlarni TypeScript AST’dan yig‘adi (shu sababli `import("…")` hisobga olinadi, tur pozitsiyasidagi `typeof import("…")` esa olinmaydi) va tsconfig `paths`’ni aniqlaydi. U 0 emas, **14** ta sikl topadi. Oldindan mavjud 14 ta siklni darvoza PR’i ichida tuzatib bo‘lmagani uchun `check:cycles` endi **ratchet** (`--ratchet`, `quality-baseline.json` ichida `metrics.cycles.value = 14` yuqori chegarasi, `direction: down`) — u har qanday _regressiya_’ni bloklaydi va miqdor faqat kamayishi mumkin. CI `npm run check:cycles:ratchet`’ni ishga tushiradi. Kamaytirib borish ishlari **A-01** bilan birga olib boriladi. `check:circular-deps` (dpdm) kengroq ikkinchi fikr sifatida tavsiya xususiyatida qoladi.
- **Murakkablik** — ✅ **BAJARILDI** (`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`): bitta ESLint yurishi, siklomatik+max-lines va kognitiv boshlang‘ich ko‘rsatkichlar mustaqil qolishi uchun hisoblash ruleId bo‘yicha amalga oshiriladi; alohida `check:complexity` / `check:cognitive-complexity` lokal `--update` uchun saqlanadi.
- **`/api` anti-gallyutsinatsiyasi** — ✅ **BAJARILDI** (`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`): `src/app/api` uchun bitta FS inventarizatsiyasi, openapi-routes + docs-symbols hali ham mustaqil ravishda hisobot beradi; alohida tekshiruvlar lokal ishga tushirishlar uchun saqlanadi.
- **`check:node-runtime` 11 ta vazifada ishga tushadi** — ⚠️ **ROI past.** Har biri alohida runner va tekshiruv <1s davom etadi; arzon, har bir vazifa uchun alohida himoyani yo‘qotish evaziga jami tejash ~10s. Bunday o‘zgarishlarga arzimaydi.
- **CI lint’dagi `typecheck:noimplicit:core`** — ✅ **lint vazifasidan olib tashlandi** (avval tavsiya xususiyatidagi `continue-on-error` edi); bloklovchi tur yuzasi — `typecheck:core` + `check:type-coverage`. Lokal skript saqlandi.

### Almashtirish / qaror qilish (operator siyosati)

- `check:openapi-security-tiers` (tavsiya xususiyatida) — ❌ **To‘g‘ridan-to‘g‘ri almashtirib bo‘lmaydi.** U 0 kodi bilan tugaydi, biroq `LOCAL_ONLY_API_PREFIXES` ostidagi bir nechta `traffic-inspector` yo‘nalishlarida `x-loopback-only: true` annotatsiyasi yo‘qligi haqida ogohlantiradi. Uni majburiy qilish uchun avval `openapi.yaml` fayliga ushbu annotatsiyalarni qo‘shish zarur.
- `typecheck:noimplicit:core` (tavsiya xususiyatida) — asosan bloklovchi `check:type-coverage` ratchet’i bilan qamrab olingan. Uni ratchet’ga almashtiring yoki takroriy ikkinchi `tsc` yurishini olib tashlang.
- `test:vitest:ui` (endi **bloklovchi**) — oldindan mavjud muvaffaqiyatsizliklar `vitest.config.ts` ichida `// #8618` kuzatuv izohlari bilan aniq istisno qilingan; yangi muvaffaqiyatsizliklar vazifani muvaffaqiyatsiz yakunlaydi.
- `check:secrets` (gitleaks, bloklovchi ratchet) — joriy yuqori chegara `quality-baseline.json` ichidagi `metrics.secretFindings`. Har qanday istisno asoslangan `.gitleaks.toml` yozuvini talab qiladi; o‘lchov mavjud bo‘lmasa, natija INCOMPLETE hisoblanadi. Skanerlash GitHub’ning mahalliy maxfiy ma’lumotlarni skanerlash funksiyasi va `check:public-creds`’ni to‘ldiradi.
- `check:pr-evidence` (bloklovchi, PR tanasidagi nasriy matnni grep orqali tekshiradi) — noto‘g‘ri ijobiy natija xavfi yuqori; olib tashlansa, Hard Rule #18 talabi ijrosi zaiflashadi, shuning uchun bu haqiqiy siyosiy qarordir.
- `semgrep` (mustaqil, tavsiya xususiyatida) — OWASP oilalari bo‘yicha CodeQL bilan ustma-ust tushadi; uning boshlang‘ich ko‘rsatkichini ratchet’ga ulang yoki olib tashlang.

---

## Tegishli hujjatlar

- Taʼminot zanjiri (kelib chiqish maʼlumotlari, SBOM, Trivy, Scorecard): [`docs/security/SUPPLY_CHAIN.md`](../security/SUPPLY_CHAIN.md)

#### `check-key-completeness` — kalitlar toʻplami tengligi darvozasi

`scripts/i18n/check-key-completeness.mjs` (`npm run i18n:check-keys`, `i18n-ui-coverage` vazifasi).
Har bir `src/i18n/messages/<locale>.json` faylidagi oxirgi daraja kalitlari toʻplamini `en.json` bilan solishtiradi va kalit qachon qoʻshilganidan qatʼi nazar, biror kalit yoʻq yoki ortiqcha boʻlsa, tekshiruvni muvaffaqiyatsiz yakunlaydi. `__MISSING__:` toʻldirgichlari mavjud deb hisoblanadi (ularning tarkibi nisbat darvozasining vazifasidir). Bu farq va foizga asoslangan ikkita darvozaning mutlaq toʻldiruvchisidir: `check-ui-keys-coverage` har bir lokal uchun 80 % minimal chegarani taʼminlaydi (~13,000 kalitdan 43 tasi yoʻq boʻlsa ham, natija 99.7 % boʻlib koʻrinadi), `check-new-key-coverage` esa faqat PR `en.json` fayliga qoʻshgan kalitlarni baholaydi. Lokal paketi uning tarmogʻi ajratilgan kundagi `en.json` asosida yaratiladi va asosiy tarmoqqa kalitlar qoʻshilishda davom etayotgan paytda bir necha kun tarjima qilinadi; paket PRʼining oʻzi hech qanday kalit qoʻshmaydi, shu sababli 1-paket (#13044) toʻqqizta lokalda 43 ta kalit yetishmagan holda, 2-paket (#13660) esa sakkizta lokalda 10 ta kalit yetishmagan holda birlashtirilganda (2026-09-15), ikkala qarindosh darvoza ham jim qoldi. Qizil holatni
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers` bilan tuzating; `extra` oxirgi daraja kaliti manbadan olib tashlanganini anglatadi — uni lokaldan oʻchiring. `--warn` muvaffaqiyatsizlikka olib kelmasdan xabar beradi.
`--catalog=cli` xuddi shu taqqoslashni `bin/cli/locales` ustida bajaradi (`npm run i18n:check-keys:cli`);
ikkala qadam ham `i18n-ui-coverage` vazifasida joylashgan.

#### `check-new-key-coverage` — yangi kalitlar uchun i18n darvozasi

`check-ui-value-drift` darvozasining qarindoshi. U inglizcha qiymat **qayta yozilib**, tarjimalari esa yangilanmay qolgan holatlarni aniqlaydi; bu darvoza esa inglizcha kalit **qoʻshilib**, ayrim lokallarga umuman kiritilmagan holatlarni aniqlaydi.

`check-ui-keys-coverage` bu turdagi muammoni koʻra olmaydi: u har bir lokal uchun foizli minimal chegarani taʼminlaydi, ~13,000 ta oxirgi daraja kalitidan oʻn bittasi yoʻq boʻlsa ham, qamrov 99.9% boʻlib qoladi. Har bir til uchun foiz «bu funksiya tarjimasiz chiqarildi» degan holatni ifodalay olmaydi — butun bir funksiya yangi lokalga hech qanday matnsiz qoʻshilishi va koʻrsatkichni umuman oʻzgartirmasligi mumkin.

Bu tekshiruv kodlashtirgan hodisa: Orchestration Canvasʼning 3-bosqichi oʻzining oʻn bitta kalitini oʻsha paytda mavjud boʻlgan 42 ta lokalga tarjima qildi. Bir necha soatdan soʻng Yevropa Ittifoqi tillari paketi (#13044) repozitoriydagi lokallar sonini 51 taga yetkazdi, yangi qoʻshilgan toʻqqizta lokal (`el`, `et`, `ga`, `hr`, `lt`, `lv`, `mt`, `sl`, `sr`) esa bu kalitlarni hech qachon olmadi. `deepMergeFallback` yoʻq kalit oʻrniga inglizcha matnni qoʻyadi, shuning uchun nosozlik boʻsh UI emas, tarjima qilinmagan UI koʻrinishida namoyon boʻldi — bu haqiqiy va tuzilishi sababli jim qoladigan muammo edi.

Qarindosh darvoza kabi, bu ham **farqdan xabardor**: u birlashtirish bazasidagi inglizcha matnni ishchi daraxt bilan solishtiradi, shu sababli avvaldan mavjud boʻlgan boʻshliqlar oʻzgarishsiz qoladi va darvozani yoqish uchun hech qanday migratsiya talab qilinmaydi.

**`__MISSING__:<english>` markeri bu talabni qanoatlantirmaydi (2026-09-17 dan boshlab).** Ilgari u hujjatlashtirilgan kechiktirish usuli edi — bajarilish vaqtida tizim toʻgʻri inglizcha matnga qaytadi — biroq 2026-09-16 kuni sakkizta funksiya PRʼi 61 ta kalit qoʻshib, ularni tarjima qilish oʻrniga barcha 65 ta lokalga marker qoʻydi: bu darvoza ularning barchasini qabul qildi, PRʼlarni hech narsa toʻxtatmadi, shundan keyin haqiqiy tarjimalar nisbatini bloklovchi darvoza relizning eng soʻnggi nuqtasida hamma uchun muvaffaqiyatsiz yakunlandi (pt-BR 3.2 % > 2.5 % + 0.5). Endi marker yoʻq tarjima sifatida baholanadi. Qizil holatni
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers --batch-size=40` bilan yoki barcha lokallarni parallel ravishda `npm run i18n:translate-new-keys` (`scripts/i18n/translate-new-keys.sh`,
ajratilgan holatda xavfsiz, `OMNIROUTE_TRANSLATION_*` muhit oʻzgaruvchilarisiz ishga tushishni rad etadi) bilan tuzating. Inglizcha qolishi shart boʻlgan kalit (qatʼiy belgilangan mahsulot, dvigatel yoki bayroq nomi) marker ortida emas, `scripts/i18n/untranslatable-keys.json` ichida boʻlishi kerak. `vi` markerlarni butunlay taqiqlaydi (`tests/unit/i18n-vi-completeness.test.ts`).

#### `check-vitest-exclusions` — chetga surilgan testlar darvozasi

`vitest.config.ts` faylining `exclude` roʻyxatidagi fayl ishga tushirilmaydigan testdir, ammo daraxtni oʻqigan kishiga u qamrovning bir qismidek koʻrinadi. Oltmish ikkita fayl
`// #8618 — pre-existing failure; remove this exclusion when fixed` izohi ortida toʻplanib qoldi. #8618 masalasi 2026-08-11 kuni yopildi, u kuzatib borgan roʻyxat esa 45 ta yozuvdan 62 tagacha oʻsdi va har bir yangi yozuv yopilgan masalaga ishora qiluvchi izohni meros qilib oldi. Roʻyxat nihoyat har bir fayl boʻyicha oʻlchanganda (#13204), **62 ta fayldan 51 tasi manba kodiga hech qanday oʻzgartirish kiritmasdan joriy daraxtda muvaffaqiyatli oʻtdi**.

Darvoza haqiqiy faylga mos keladigan har bir istisnodan (a) kuzatuv masalasini koʻrsatishni va (b) oʻlchangan holati bilan `config/quality/vitest-exclusions.json` faylida mavjud boʻlishni talab qiladi; shu tariqa yangi istisno qoʻshish 60 yozuvli massivga yana bir qator kiritish emas, balki maxsus fayldagi koʻrib chiqilishi mumkin boʻlgan farqqa aylanadi. U ataylab chiqarib tashlangan testlarni qayta ishga tushirmaydi — bu ~10 daqiqa vaqt oladi va davriy vazifaga tegishli; inventar har bir test oxirgi marta qachon oʻlchanganini qayd etadi.
