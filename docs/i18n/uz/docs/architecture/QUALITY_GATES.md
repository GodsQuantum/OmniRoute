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

## Gate inventari va bajarish profillari

### Nomzodni qabul qilish

CI va Quality Gates ish oqimlarining har biri barqaror hukm chiqaradi: `Gate / CI` va
`Gate / Quality`. Ularning versiyalangan qabul siyosati har bir yuqori oqimdagi ishni
majburiy yoki maslahat xarakteridagi deb sanab o'tadi. Tegishli majburiy ish muvaffaqiyatli
yakunlanishi shart: yetishmayotgan, bekor qilingan, o'tkazib yuborilgan, kutilayotgan va
noma'lum natijalar PASS holatini ta'minlay olmaydi. Yaroqli faqat-hujjatlar yoki
faqat-katalog tasnifi kod yo'lagini tatbiq etilmaydigan qilishi mumkin; qoralama PR
qabul qilingan nomzod hisoblanmaydi. `hotfix` yorlig'i isbotlardan voz kechish huquqini bermaydi.

Ikkala ish oqimi main/release tarmoqlariga qaratilgan PR'larni, `main` ga push'larni, qo'lda
ishga tushirish (dispatch) va merge-group hodisalarini qamrab oladi. Push, dispatch va merge-group
to'liq tanlovni ishga tushiradi. `release/**` ga push'lar ularni ishga tushirmaydi
(2026-10-18): har bir o'zgarish o'z PR'ida matritsadan allaqachon o'tgan, birlashtirilgan
kombinatsiya esa Release-Green'ning vazifasidir (`docs/ops/RUNNER_BOX.md` → Hosted yo'lak). Fork'lar
va merge group'lar aks holda self-hosted runner'larni tanlaydigan ishlar uchun hosted
runner'lardan foydalanadi; joriy etishdan oldin yetarli hosted quvvat tekshirilishi kerak.

Har bir JSON kvitansiya checkout qilingan SHA, ish oqimi ishga tushirilishi (run) va urinishni (attempt)
aniqlaydi. CLI checkout/hodisa SHA nomuvofiqligini rad etadi. Ish oqimi testlari siyosat
a'zoligini hukm ishining `needs` ro'yxatiga bog'laydi, shunda yangi yoki o'chirilgan yo'lak
ovozsiz yo'qolib ketmaydi. Kvitansiyalar o'z ish oqimini qamrab oladi, nashr qilish,
joylashtirish yoki mavjud maslahat skanerining ichki tuzilishini emas. Tarmoq qoidalarida
ikkala tekshiruv nomini faollashtirish alohida ma'muriy o'zgarishdir; bu ishlarni qo'shish
o'z-o'zidan tarmoqni himoya qilmaydi.

### Statik skanerlash inventari

Versiyalangan npm-alias inventari va statik skanerlash a'zoligi
`config/quality/gate-manifest.json` faylida saqlanadi. Skript nomlari va aniq buyruqlarni
`package.json` bilan solishtirib tekshirish uchun `npm run check:gate-manifest` ni ishga
tushiring; qo'shishlar, o'chirishlar va buyruq farqi lokal hook hamda CI dagi
o'zgarish-tasnifi ishlarini muvaffaqiyatsizlikka uchrataди. Alias — bu ish oqimi ishi,
matritsa namunasi yoki test holati emas: bu sonlar bir-birining o'rnini bosadigan deb
taqdim etilmasligi kerak.

Tanlangan aliaslarni bajarmasdan ko'rib chiqish uchun `npm run quality:scan -- --list` yoki
`npm run quality:scan:fast -- --list` dan foydalaning. Runner npm kirish nuqtasini chaqiradi,
shuning uchun uning ishga tushirish muhiti (sozlangan joylarda Bun ham) saqlanib qoladi.
Manifest ushbu profillardan tashqaridagi aliaslarni alohida chaqiriladi deb qayd etadi,
faqat o'qish rejimidagi skan profillarida esa texnik xizmat buyruqlari taqiqlangan.

Bu profillar faqat statik skanerlashni qamrab oladi. Ular mahsulot testlarini, qamrovni,
paketlashni, tashqi tekshiruvlarni yoki nomzodning to'liq reliz qabulini tasdiqlamaydi.
Ish oqimi qabulida bog'langan `config/quality/admission-policy.json` va
`scripts/quality/admission-verdict.mjs` dan foydalaniladi. Release-observer profillari
alohida qoladi; ularning tegishli tekshiruvlari va kvitansiyalarini mustaqil ravishda
ko'rib chiqing. Quyidagi matn inventari — bu ma'lumotnoma, gate haqiqatda ishga tushganining
isboti emas.

Skriptlar `scripts/check/` (siyosat gate'lari) va `scripts/quality/` (ratchet dvigateli)
ostida joylashgan. CI ning asosiy manbai — `.github/workflows/ci.yml`.

### Release PR tezkor yo'li (`quality.yml`)

`.github/workflows/quality.yml` main/release PR'lar, `main` ga push'lar, dispatch va
merge group'larda CI ni to'ldiradi. PR'lar yo'l bo'yicha filtrlangan tezkor tekshiruvlardan
foydalanadi. Doimiy o'chirilgan takroriy build olib tashlandi; haqiqiy build/package/boot
tekshiruvlari CI da qoladi. Unit to'plami va vitest faqat CI da ishga tushadi
(`Unit Tests (N/8)`, `Vitest`): CI release PR'larda ishlay boshlagach, avvalgi
`Unit Tests fast-path` va `Vitest (fast-path)` ishlari har bir PR'da bir xil buyruqlarni
takrorlar edi va 2026-10-26 kuni olib tashlandi.

| Job                                              | Scope                                                                                                                                                                                                                                 | Blocking         |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| `Docs Gates (fast-path)`                         | Hujjatlar/kod PR'lari; API hujjatlari havolalari va docs-all                                                                                                                                                                          | Ha               |
| `Fast Quality Gates`                             | Kod PR'lari; statik tekshiruvlar, typecheck, dashboard typecheck, ta'sir doirasidagi unit testlar                                                                                                                                     | Ha               |
| `Forgotten sibling tests`                        | Kod PR'lari; o'zgargan modullar statik iste'molchilar va nomzod qo'shni (sibling) testlarga kuzatiladi; barrel va dinamik-import yo'llari maslahat diagnostikasi sifatida xabar qilinadi, havola qilingan allowlist istisnolari bilan | **Maslahat**     |
| `No new ESLint warnings`                         | Kod PR'lari; suppression'larni hisobga oluvchi lint himoyachisi                                                                                                                                                                       | Ha, fork'lar ham |
| `Merge integrity (changelog + generated skills)` | Qoralama bo'lmagan PR'lar; changelog va generatsiya qilingan skill'lar sinxronizatsiyasi                                                                                                                                              | Ha, fork'lar ham |

#### Forgotten sibling tests hisoboti

`npm run check:forgotten-sibling-tests` test-ta'sir xaritasi ortidagi import resolver'ini
qayta ishlatadi. Har bir o'zgargan production moduli uchun, nomzod test pull-request
diff'ida yo'q bo'lsa, u deterministik
`changed module/symbol -> static consumer -> candidate sibling test` zanjirlarini xabar qiladi.
Markdown xulosasi va JSON natija bloklovchi joriy etishdan oldin kalibrlash uchun
`forgotten-sibling-tests` ish oqimi artefakti sifatida saqlanadi.

Barrel qayta eksportlari va dinamik importlar faqat rezolyutsiya diagnostikasidir; ular hech qachon bloklovchi topilma yaratmaydi. Ko'rib chiqilgan istisnolar `config/quality/forgotten-sibling-allowlist.json` faylida saqlanadi. Har bir yozuv iste'molchi va nomzod test nomini ko'rsatishi, aniq asos keltirishi va GitHub issue yoki pull request'ga havola qilishi kerak. Noto'g'ri formatlangan yozuvlar fail closed bo'ladi. Istisnolar o'chirilgan nomzod testini yoki `.skip`/`.todo` qo'shadigan diff'ni bostira olmaydi; assertlarning kuchsizlantirilishi va boshqa niqoblashlar mustaqil ravishda bloklovchi `check:test-masking` darvozasiga tegishli bo'lib qoladi.

### Ish: `lint`

`main`ga har bir PR'da ishga tushadi. Muvaffaqiyatsizlikda merge'ni bloklaydi.

| Script (`npm run ...`)            | Tekshiradi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Bloklaydi                                |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `check:node-runtime`              | Node.js versiyasi qo'llab-quvvatlanadigan oraliqda                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Ha                                       |
| `check:cycles`                    | Butun `src/` + `open-sse/` bo'ylab tsiklik importlar (AST-ga asoslangan, tsconfig `paths` hal qilingan). Istalgan tsikl mavjud bo'lganda bare 1 bilan chiqadi (#15281 dan beri fail-closed) va SCC'larni ro'yxatlaydi. `check:cycles:ratchet` (CI bajaradigan) soni `quality-baseline.json` dagi `metrics.cycles` chegarasidan oshganda bloklaydi — hozirda 14, `direction: down`, shuning uchun u faqat pasayishi mumkin (#15159 G-01/G-02)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Ha (ratchet)                             |
| `check:boundary`                  | `open-sse → src` bog'lanishi: dvigateldan ilovaga noyob fayldan-faylga importlar (`scripts/quality/measure-boundary.mjs`; chekkalar ro'yxati v4 core/module-split tuzatish backlog'idir). Bare = maslahat hisoboti (`quality:boundary` bilan bir xil). `check:boundary:ratchet` (CI bajaradigan, shuningdek `quality.yml` fast-gates ratchet siklida ham) soni `quality-baseline.json` dagi `metrics.boundaryOpenSseToSrc` chegarasidan oshganda bloklaydi — o'lchangan 771 qiymatdan boshlangan, `direction: down`; `--update` uni faqat pasaytiradi; PR'larda bazaga nisbatan (`--base-ref`, quyida ko'ring)                                                                                                                                                                                                                                                                                                                                              | Ha (ratchet)                             |
| `check:route-validation:t06`      | Barcha marshrutlarda Zod sxemalari mavjud (Tier 6 siyosati)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Ha                                       |
| `check:any-budget:t11`            | `@ts-expect-error // any` soni byudjetdan oshmaydi (Tier 11 catraca)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Ha                                       |
| `check:provider-consistency`      | `providers.ts` dagi har bir provayder `providerRegistry.ts` da mos yozuvga ega (va aksincha, ruxsat roʻyxati ichida)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Ha                                       |
| `check:model-lifecycle`           | Qo‘lda yuritiladigan uchta marshrutlash jadvali repo ichidagi lifecycle snapshoti (#11503) bilan izchil qoladi: `FITNESS_TABLE` (`taskFitness.ts`) `REGISTRY` marshrutlay oladigan hech qanday nafaqaga chiqarilgan id ni baholamaydi; har bir `BUILT_IN_ALIASES` nishoni `REGISTRY` da mavjud va nafaqaga chiqarilgan id snapshotida yoʻq; `REGISTRY` da hali ham qolgan har bir nafaqaga chiqarilgan id yo‘naltirilgan yoki `allowedRetiredInCatalog` da keltirilgan; va hech bir `DEFAULT_DEGRADATION_MAP` manbai yoki nishoni ushbu snapshotda nafaqaga chiqarilgan sifatida ko‘rinmaydi. Bu model hozirda jonli upstream tomonidan xizmat ko‘rsatilishini isbotlamaydi. Oflayn — `config/quality/model-lifecycle.json` bilan solishtiradi, u qo‘lda `npm run quality:refresh-model-lifecycle` orqali yangilanadi (tarmoq talab qiladi; CI ga ulanmagan). `allowedRetiredInCatalog` — burn-down ratchet: yozuvni faqat kuzatuv issue si bilan qo‘shing. | Ha                                       |
| `check:fetch-targets`             | Klient tomonidagi `src/` ichidagi har bir `fetch("/api/...")` haqiqiy `route.ts` ga to‘g‘ri keladi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Ha                                       |
| `check:deps`                      | Repodagi har bir `package.json` bo‘ylab `npm install` qilinadigan barcha bog‘liqliklar `dependency-allowlist.json` da; yangi pin qilinmagan yoki slopsquatted paketlar belgilanadi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Ha                                       |
| `audit:deps`                      | `npm audit` (root + electron) — high/critical ogohlantirishlar yoʻq (osv `check:vuln-ratchet` bilan kesishadi; Rationalization Backlog ga qarang)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Ha                                       |
| `check:lockfile`                  | `package-lock.json` yaxlitligi — https registry, yaxlitlik heshlari, host qayta yozuvlari yoʻq                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Ha                                       |
| `check:licenses`                  | Production bogʻliqliklari uchun SPDX litsenziyalari ruxsat roʻyxati                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Ha                                       |
| `check:tracked-artifacts`         | Build artefaktlari / commit qilingan `node_modules` symlinklari yoʻq (husky pre-commit'da ham ishlaydi; pre-push ataylab yengil qilingan — #6716)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Ha                                       |
| `check:ai-attribution`            | PR commitlarida, sarlavha yoki asosiy matnda AI/bot `Co-Authored-By` traileri yoki AI tomonidan yaratilgan footer yoʻq — Qattiq qoida #16 (PR→`release/**` uchun `quality.yml` fast-gates siklida — event payload'ni oʻqiydi, PR'lardan tashqarida no-op — va PR→`main` uchun `ci.yml` lint'ida faqat PR bosqichi; shuningdek husky `commit-msg` hook'i; inson hammualliflarga ruxsat beriladi; #14436)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `check:vitest-exclusions`         | Har bir Vitest istisnosi kuzatuv issue'sini koʻrsatadi va `config/quality/vitest-exclusions.json` faylida keltirilgan boʻlishi kerak (#13204)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Ha                                       |
| `check:file-size`                 | Manba fayllari (`src/`, `open-sse/`, `electron/`, `bin/` ichidagi `.ts`/`.tsx`) `cap` chegarasidan, test fayllari (`*.test.ts(x)`) esa `testCap` chegarasidan chiqmaydi; `file-size-baseline.json` faylida muzlatilgan fayllar (`frozen` / `testFrozen`) yozib olingan hajmidan oshib ketmasligi kerak                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Ha                                       |
| `check:error-helper`              | Ijrochilardagi/handlerlardagi xatolik javoblari `buildErrorBody()` / `sanitizeErrorMessage()` funksiyalaridan foydalanadi (Qattiq qoida #12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Ha                                       |
| `check:migration-numbering`       | Migratsiya SQL fayllari ketma-ket raqamlangan, uzilishlar yoki takrorlar yoʻq                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Ha                                       |
| `check:public-creds`              | `publicCreds.ts` dan tashqarida ochiq holda yozilgan OAuth `client_id`/`client_secret` yoki Firebase Web kalitlari yoʻq (Qattiq qoida #11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Ha                                       |
| `check:db-rules`                  | `src/lib/db/` modullaridan tashqarida xom SQL yoʻq; `localDb.ts` dan barrel-importlar yoʻq (Qattiq qoidalar #2/#5)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Ha                                       |
| `check:known-symbols`             | Provayder ijrochilari, marshrutlash strategiyalari va translatorlar oʻz dispatch jadvallarida roʻyxatdan oʻtgan holda diskdagi fayllarga mos keladi — egasiz yoki eʼlon qilinmagan belgilar yoʻq                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Ha                                       |
| `check:route-guard-membership`    | Child process ishga tushiradigan har bir marshrut `isLocalOnlyPath()` orqali tasniflanadi (Qattiq qoidalar #15/#17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Ha                                       |
| `check:test-discovery`            | Repodagi har bir `*.test.ts` / `*.spec.ts` fayli kamida bitta test runner tomonidan yigʻiladi (ratchet: `test-discovery-baseline.json` dagi yetim roʻyxat faqat qisqarishi mumkin)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Ha                                       |
| `check:test-tla-order`            | `tests/unit` ostidagi hech bir `node:test` fayli testni roʻyxatdan oʻtkazib, yuqori darajadagi `await` ga yetib, keyin yana roʻyxatdan oʻtkazmaydi (#18045; ratchet: `test-tla-order-allowlist.json` faqat qisqarishi mumkin)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Ha                                       |
| `check:agent-skills-sync`         | Yaratilgan agent-skills artefaktlari manba katalogiga mos keladi (siljish yoʻq)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `check:provider-asset-provenance` | Provayder logotiplari/aktivlari qayd etilgan provenance yozuviga ega                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `lint:json`                       | JSON konfiguratsiya fayllari tahlil qilinadi va repo lint qoidalariga javob beradi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `typecheck:core`                  | TypeScript kompilyatsiyasi xatosiz (faqat maslahat ogohlantirishlari)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Ha                                       |
| `typecheck:noimplicit:core`       | Qatʼiy `noImplicitAny` — istiqbolga qaratilgan; koʻplab mavjud chaqiruv joylari hali ham annotatsiyalarni talab qiladi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | **Maslahat** (`continue-on-error: true`) |
| `check:dashboard-typecheck`       | `src/app/(dashboard)/**` doirasida ishga tushiriladigan `tsc` (#7033) — `typecheck:core` ning tanlab tuzilgan 27 fayldan iborat ruxsat ro'yxati hech qanday dashboard TSX ni o'z ichiga olmaydi va `next build` ham uni hech qachon tip bo'yicha tekshirmaydi (`next.config.mjs` da `ignoreBuildErrors: true` o'rnatilgan), shuning uchun u yerdagi yetim identifikator regressiyalari (#6625/#6909) CI uchun ko'rinmas edi. Muzlatilgan har-fayl/har-TS-kodi xatolar soni bazasiga nisbatan farqlanadi (`config/quality/dashboard-typecheck-baseline.json`, `check:known-symbols` dagi bilan bir xil eskirganlik-nazorati sxemasi) — gate muvaffaqiyatsizligiga faqat bazaviy sondan oshib ketgan YANGI xatolargina sabab bo'ladi; avvaldan mavjud xato tuzatilganda `--update` bilan pastga tortiladi.                                                                                                                                                    | Ha                                       |

### Ish: `quality-gate`

`test-coverage` dan keyin ishlaydi. Muvaffaqiyatsizlikda birlashtirishni (merge) bloklaydi.

| Skript                       | Tekshiradi                                                                                                                                                                                                             | Bloklovchi                   |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `quality:collect`            | `quality-metrics.json` ni chiqaradi (ESLint ogohlantirishlari soni, birlashtirilgan shard hisobotidan olingan qamrov)                                                                                                  | Ha (ratchet dan yuqoriroqda) |
| `quality:ratchet`            | `quality-baseline.json` dagi har bir metrika regressiyaga uchramagan (ESLint ogohlantirishlari ≤ baza; qamrov ≥ baza)                                                                                                  | Ha                           |
| `check:duplication`          | Kod takrorlanishi (jscpd@4) `quality-baseline.json` dagi bazadan oshmaydi                                                                                                                                              | Ha                           |
| `check:complexity`           | Fayl darajasidagi siklomatik murakkablik chegaradan oshmaydi (asosiy ESLint `complexity` + `max-lines-per-function`)                                                                                                   | Ha                           |
| `check:cognitive-complexity` | Kognitiv murakkablik ratchet-i (`eslint-plugin-sonarjs`) — alohida ESLint o'tkazuvi; CI ikkalasini bitta `check:complexity-ratchets` qadami sifatida birlashtirib ishga tushiradi                                      | Ha                           |
| `check:dead-code`            | Ishlatilmaydigan eksportlar / fayllar ratchet-i (knip) bazaga nisbatan regressiyaga uchramaydi                                                                                                                         | Ha                           |
| `check:compression-budget`   | Siqish benchmark byudjeti — har bir dvigatel uchun token-tejash minimal chegaralari regressiyaga uchramasligi kerak                                                                                                    | Ha                           |
| `check:type-coverage`        | Foiz-tiplangan ratchet (`type-coverage`) regressiyaga uchramaydi; asosan `typecheck:noimplicit:core` ni qamrab oladi                                                                                                   | Ha                           |
| `check:codeql-ratchet`       | Ochiq CodeQL ogohlantirishlari soni regressiyaga uchramaydi (`gh api` orqali o'qiydi; tokensiz muloyim o'tkazib yuboradi) — yangilash davriyligi va qo'lda ishga tushirish: quyidagi "CodeQL ratchet" bo'limiga qarang | Ha                           |

### Ish: `quality-extended`

Butun ish maslahat xarakteriga ega (`continue-on-error: true`). npm-ga asoslangan
ratchet-lar haqiqatan ishlaydi; tashqi skanerlar `gh release download` orqali
o'rnatiladi va binar fayl hali ham yo'q bo'lsa, o'z-o'zidan o'tkazib yuboradi (exit 0).

| Skript                   | Tekshiradi                                                                                                                                                                                                                                | Bloklovchi                                              |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| `check:circular-deps`    | Aylanma bog'liqliklar yo'qligi (dpdm)                                                                                                                                                                                                     | **Maslahat**                                            |
| `check:bundle-size`      | Bundle hajmi chegaradan oshmaydi                                                                                                                                                                                                          | **Maslahat**                                            |
| `check:secrets`          | Maxfiy ma'lumotlarni skanerlash (gitleaks) — binar fayl yo'q bo'lsa o'tkazib yuboradi                                                                                                                                                     | **Maslahat**                                            |
| `check:vuln-ratchet`     | Bog'liqlik zaifliklari (osv-scanner) regressiyaga uchramaydi — binar fayl yo'q bo'lsa o'tkazib yuboradi                                                                                                                                   | **Maslahat**                                            |
| `check:workflows`        | Workflow lint (actionlint + zizmor); yo'q/buzilgan skanerlar, yaroqsiz hisobotlar yoki yo'q ratchet bazasi INCOMPLETE sifatida muvaffaqiyatsizlikka uchraydi. Yaroqli topilmalar tanlangan qat'iy/maslahat/ratchet siyosatiga amal qiladi | Bajarish talab qilinadi; CI da zizmor ratchet bloklaydi |
| `check:openapi-breaking` | Ommaviy API shartnomasidagi (`openapi.yaml`) buzadigan o'zgarishlar asosiy branch ga nisbatan (oasdiff) — `openapiBreaking=N` ni chiqaradi; oasdiff yo'q bo'lsa yoki asosiy spec aniqlanmasa o'tkazib yuboradi                            | **Maslahat**                                            |

### Ish: `docs-sync-strict`

`main` ga har bir PR da ishlaydi. Muvaffaqiyatsizlikda birlashtirishni bloklaydi.

| Skript                         | Tekshiradi                                                                                                                                                                            | Bloklovchi                   |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `check:docs-all`               | Quyidagi 6 ta kichik darvozani ketma-ket ishga tushiruvchi meta-darvoza                                                                                                               | Ha                           |
| ↳ `check:docs-sync`            | CHANGELOG / OpenAPI / llm.txt versiyalarining izchilligi                                                                                                                              | Ha                           |
| ↳ `check:docs-counts`          | Matndagi sonlar (provayderlar soni, migratsiyalar soni va h.k.) haqiqiy sonlarning ratchet oynasi doirasida ekanligi                                                                  | Ha                           |
| ↳ `check:env-doc-sync`         | `.env.example` dagi har bir muhit o'zgaruvchisi hujjatlar jadvalida hujjatlashtirilgan va aksincha                                                                                    | Ha                           |
| ↳ `check:deprecated-versions`  | Hujjatlarda eskirgan versiya satrlari yo'qligi                                                                                                                                        | Ha                           |
| ↳ `check:doc-links`            | Hujjatlardagi ichki markdown havolalar haqiqiy fayllarga ishora qiladi (`[text]`/`(path)` shakli)                                                                                     | Ha                           |
| ↳ `check:fabricated-docs`      | Hujjatlarda keltirilgan marshrutlar, muhit o'zgaruvchilari, CLI buyruqlari, hook nomlari va fayl yo'llari kod bazasida mavjud. `--strict` orqali qattiq darvoza; bayroqsiz soft-fail. | Ha (CI da `--strict` orqali) |
| `check:cli-i18n`               | CLI buyruq satrlari barcha i18n lokal fayllarida mavjudligi                                                                                                                           | Ha                           |
| `check:openapi-coverage`       | OpenAPI spetsifikatsiyasi haqiqiy marshrutlarning kamida ratchet qilingan minimal chegarasini qamrab olishi                                                                           | Ha                           |
| `check:openapi-security-tiers` | `openapi.yaml` dagi xavfsizlik darajasi annotatsiyalari `routeGuard.ts` tasniflari bilan mos keladi                                                                                   | **Maslahat**                 |
| `check:openapi-routes`         | `openapi.yaml` dagi har bir yo'l haqiqiy `route.ts` ga ishora qiladi (gallyutsinatsiyaga qarshi)                                                                                      | Ha                           |
| `check:docs-symbols`           | `docs/**/*.md` dagi har bir `/api/...` havolasi haqiqiy `route.ts` ga ishora qiladi (gallyutsinatsiyaga qarshi)                                                                       | Ha                           |
| `i18n translation drift`       | i18n lokal fayllaridagi tarjima qilinmagan kalitlar — faqat ogohlantirish                                                                                                             | **Maslahat**                 |

### Ish: `i18n-ui-coverage`

| Skript                           | Tekshiradi                                                                                                                                                                                                                                           | Bloklovchi   |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `check-ui-keys-coverage` (ichki) | UI i18n kalitlarining qamrovi ≥ 65% ekanligi                                                                                                                                                                                                         | Ha           |
| `check-ui-value-drift` (ichki)   | Qayta yozilgan inglizcha **qiymat** ortida eskirgan tarjima qoldirmasligi                                                                                                                                                                            | Ha           |
| `check-new-key-coverage` (ichki) | **Yangi** inglizcha kalit har bir lokalda tarjima qilinganligi — `__MISSING__:` markeri rad etiladi                                                                                                                                                  | Ha           |
| `check-translation-ratio`        | Har bir lokal uchun haqiqiy tarjima nisbati (ruxsatnoma ro'yxatidan tashqaridagi inglizchaga aynan teng / placeholder / etishmayotgan barglar) `config/quality/i18n-translation-baseline.json` + ruxsat etilgan ortiqcha chegaradan oshmasligi kerak | **Maslahat** |

`fetch-depth: 0` kerak — value-drift darvozasi `en.json` ni merge bazasiga nisbatan diff qiladi.

#### `check-ui-value-drift` — eskirgan tarjima darvozasi

Boshqa darvozalar tuzilishi jihatidan ko'ra olmaydigan yagona i18n regressiyasini ushaydi:
inglizcha qiymat qayta yoziladi va _oldingi_ inglizcha matndan olingan tarjimalar ortda qoladi,
natijada inglizcha bilmaydigan foydalanuvchilar ishonchli ohangda yozilgan, ammo endi noto'g'ri
matnni o'qishda davom etadi.

Bu haqiqatda ham sodir bo'lgan. Antigravity login yordamchisi qo'shilganda (#5203)
`oauthModal.googleOAuthWarning` qayta yozildi; **43 ta lokaldan 39 tasi** operatorlarga «to'liq
URL manzilini nusxalang va quyida joylashtiring» deyuvchi matnni saqlab qoldi — bu provayder
uchun yakunlanishi mumkin bo'lmagan jarayon. Bu #8463 gacha e'tibordan chetda qoldi, chunki:

- `sync-ui-keys` faqat **mavjud bo'lmagan** kalitlarni to'ldiradi, hech qachon **eskirgan** kalitlarni emas;
- `check-ui-keys-coverage` kalitning _mavjudligini_ sanaydi, shuning uchun eskirgan tarjima qamrab olingan deb baholanadi;
- `check-translation-drift` `docs/i18n/<locale>/**.md` hujjatlar oynalarini kuzatadi —
  u hech qachon `src/i18n/messages/*.json` ni o'qimaydi. 2026-09 qayta sinxronlashdan beri
  `docs-sync-strict` ishida bloklovchi: asosiy hujjatni tahrirlang → `npm run i18n:run -- --files=<doc>` (bo'lim darajasida, arzon).

**Diff asosida ishlaydi, baseline'ga tayanmaydi.** U `en.json` faylining merge base'dagi holatini working tree bilan solishtiradi; inglizcha qiymati o'zgargan har bir kalit uchun hali ham o'zgartirilmagan tarjimani saqlab turgan har qanday lokal eskirgan hisoblanadi. Bu ataylab **mavjud qarzni muzlatib qo'yadi** — diff uzoq vaqtdan beri mavjud bo'lgan tarjima qaysi eski inglizcha matndan olinganini ko'rsata olmaydi, shuning uchun gate faqat joriy o'zgarish tegadigan qismini baholaydi. Muqobil variant (har bir kalit uchun hash baseline) ~600 KB hajmli generatsiya qilingan fayl talab qilar edi — bu mavjud eng katta baseline'dan 3 baravar katta bo'lib, har bir i18n PR'da o'zgarib turardi.

Uni qondirishning ikki yo'li bor:

1. ta'sir qilingan tarjimalarni yangilang, yoki
2. ularni `__MISSING__:<new english>` qiymatiga o'rnating — bu holda runtime to'g'rilangan inglizcha matnni ko'rsatadi
   (`src/i18n/request.ts::deepMergeFallback`, #7258) va kalit tarjima navbatiga qo'yiladi.

Agar satrning **ma'nosi** o'zgargan bo'lsa, **kalit nomini o'zgartirish** afzalroq: yangi kalit eskirgan tarjimani meros qilib ololmaydi. #8463 aynan shu pattern'dan foydalangan.

```bash
npm run i18n:check-value-drift          # qat'iy (CI bajaradigan)
npm run i18n:check-value-drift:warn     # faqat hisobot
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

Baza katalogini o'qib bo'lmaganda (baza ref bo'lmagan shallow clone), `check-openapi-breaking` singari `SKIP reason=base-unresolved` chiqarib, 0 kodi bilan tugaydi.

### Ish: `i18n`

To'liq i18n validatsiya matritsasi (har bir lokal uchun bitta ish). Butun ish tavsiyaviy hisoblanadi.

| Skript                          | Tekshiradi                                | Bloklaydi                                              |
| ------------------------------- | ----------------------------------------- | ------------------------------------------------------ |
| `validate_translation.py quick` | Har bir lokal bo'yicha tarjima to'liqligi | **Tavsiyaviy** (butun ishda `continue-on-error: true`) |

### Ish: `pr-test-policy`

Faqat pull request'larda ishga tushadi.

| Skript                 | Tekshiradi                                                                                                                                              | Bloklaydi |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `check:pr-test-policy` | `src/`, `open-sse/`, `electron/` yoki `bin/` dagi production kodni o'zgartiruvchi PR'lar testlarni qo'shishi yoki yangilashi shart (Qattiq qoida #8)    | Ha        |
| `check:test-masking`   | O'zgartirilgan test fayllari sof assert sonini kamaytirmaydi va `assert.ok(true)` tavtologiyalarini qo'shmaydi                                          | Ha        |
| `check:pr-evidence`    | PR matni o'zgarish uchun test/VPS dalillarni keltiradi (Qattiq qoida #18 ni PR matnini grep qilish orqali avtomatlashtiradi — mo'rt, Backlog'ga qarang) | Ha        |

### Ish: `test-vitest`

`build`dan keyin ishga tushadi. Muvaffaqiyatsizlikda merge'ni bloklaydi.

| To'plam          | Tekshiradi                                                  | Bloklaydi                                                                                                                                     |
| ---------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `test:vitest`    | MCP server (110 ta vosita), autoCombo, kesh — vitest runner | Ha                                                                                                                                            |
| `test:vitest:ui` | UI komponent testlari — vitest runner                       | **Bloklaydi** — avvaldan mavjud muvaffaqiyatsizliklar `vitest.config.ts` da aniq istisno qilingan; yangi muvaffaqiyatsizliklar ishni yiqitadi |

### Tungi workflow'lar (jadval bo'yicha, tavsiyaviy)

Bular cron jadvali bo'yicha (va `workflow_dispatch` orqali) ishga tushadi, PR'larda esa hech qachon ishlamaydi. Barchasi tavsiyaviy.

| Workflow               | Tekshiradi                                                                                                                                                                                   | Bloklaydi      |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `nightly-property`     | tasodifiy seed va yuqori ishga tushirish soni bilan fast-check property testlari                                                                                                             | **Tavsiyaviy** |
| `nightly-resilience`   | heap-o'sish gate'i, chaos fault-injection, k6 load/soak                                                                                                                                      | **Tavsiyaviy** |
| `nightly-llm-security` | promptfoo injection himoyasi (bloklash rejimi) + garak probe'lari (provider secret bo'lmasa o'tkazib yuboriladi)                                                                             | **Tavsiyaviy** |
| `nightly-schemathesis` | `docs/openapi.yaml` yordamida ishlayotgan OmniRoute'ga qarshi OpenAPI kontrakt fuzzing'i (schemathesis) — spec buzilishlari / qayta ishlanmagan 500 xatolarini yuzaga chiqaradi (Fase 8 B.4) | **Tavsiyaviy** |
| `nightly-mutation`     | tezkor unit yo'lagi bo'yicha Stryker mutation-testing balli — omon qolgan mutantlar zaif assertlarni ko'rsatadi                                                                              | **Tavsiyaviy** |
| `nightly-compat`       | qo'llab-quvvatlanadigan `engines.node` diapazonlari bo'yicha Node dvigateli moslik matritsasi                                                                                                | **Tavsiyaviy** |

Ishlash ko'rsatkichlarining bazaviy qiymatlari (heap, TTFB, build vaqti) qayd etiladi, lekin gate qilinmaydi: [`PERF_BASELINE.md`](../ops/PERF_BASELINE.md) ga qarang (`npm run perf:lts-baseline`).

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

## Ruxsat etilganlar roʻyxati siyosati

Oldindan mavjud buzilishlar sababli muvaffaqiyatsiz tugashi mumkin boʻlmagan har bir tekshiruv muzlatilgan ruxsat etilganlar roʻyxatidan foydalanadi
(masalan, `KNOWN_STALE_DOC_REFS`, `KNOWN_MISSING`, `KNOWN_RAW_SQL`). Siyosat quyidagicha:

**Asosiy sababni tuzating; ruxsat etilganlar roʻyxatidan faqat buzilish oldindan mavjud boʻlsa va
uni ayni PR doirasida tuzatib boʻlmasa foydalaning.**

Ruxsat etilganlar roʻyxatiga yozuv qoʻshayotganda:

1. Asoslantirish berilgan izohni kiriting.
2. Kuzatuv muammosiga havola bering (masalan, `// #3498 — 2-bosqich funksiyasi, hali amalga oshirilmagan`).
3. Buzilishni tuzatadigan ayni PR doirasida yozuvni olib tashlang — faol buzilishni endi
   istisno qilmaydigan eskirgan yozuvning oʻzi nuqson hisoblanadi (amalga oshirilgach, 6A.3 eskirgan-qoidalarni-nazorat-qilish
   yetim qolgan ruxsat etilganlar roʻyxati yozuvi sababli tekshiruvni muvaffaqiyatsiz yakunlaydi).

Testlarni tezroq oʻtkazish uchun ruxsat etilganlar roʻyxatiga yozuvlar **qoʻshmang**. Kengayib borayotgan
ruxsat etilganlar roʻyxati bilan yashil tekshiruv sifat haqida soxta tasavvur beradi.

### PRʼingizda tekshiruv muvaffaqiyatsiz tugaganda

1. **Tekshiruv chiqishini diqqat bilan oʻqing** — unda qoidani aynan qaysi fayl yoki belgi buzganligi
   koʻrsatiladi.
2. **Buzilishni tuzating** — aksariyat tekshiruvlar deterministik fayl tizimi tekshiruvlari boʻlib, kod
   toʻgʻrilanishi bilan muvaffaqiyatli oʻtadi.
3. **Agar buzilish oldindan mavjud boʻlsa** (yaʼni uni siz kiritmagansiz, ammo tekshiruv endi uni
   qamrab olayotgan boʻlsa): asoslantiruvchi izoh va kuzatuv muammosi bilan ruxsat etilganlar roʻyxatiga yozuv qoʻshing.
4. **Agar tekshiruv ratchet turida boʻlsa** (qamrov, ESLint ogohlantirishlari, takrorlanish, murakkablik):
   oʻzgartirishingiz koʻrsatkichni yomonlashtirgan. Asosiy muammoni tuzating yoki (kamdan-kam hollarda), agar oʻzgartirish
   ataylab qilingan va koʻrsatkichning yomonlashuvi maqbul boʻlsa, `npm run quality:ratchet -- --update` buyrugʻini
   bajaring — ammo sababini PR tavsifida hujjatlashtiring.
5. **Tavsiyaviy tekshiruvlar** (`continue-on-error: true`) axborot uchun xizmat qiladi — ular birlashtirishni
   bloklamaydi, ammo CI xulosasida koʻrinadi. Shunga qaramay, ularni tuzating.

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

## Ratsionalizatsiya uchun vazifalar roʻyxati (ROI koʻrib chiqishi — 9-bosqich, 3-toʻlqin)

Ushbu inventar 2026-06-17 sanasida `ci.yml` bilan solishtirib muvofiqlashtirildi (avvalgi versiyada
`audit:deps`, `check:tracked-artifacts`, `check:lockfile`, `check:licenses`,
`check:dead-code`, `check:cognitive-complexity`, `check:type-coverage`,
`check:codeql-ratchet`, `check:pr-evidence` tushirib qoldirilgan edi). Muvofiqlashtirilgan toʻplamning ROI tahlili
quyidagi ratsionalizatsiya nomzodlarini aniqladi. **Birlashtirishlar mexanik CI
oʻzgarishlaridir; holatni almashtirish/oʻchirish esa operator ixtiyoridagi siyosiy qarorlardir.** Quyidagilarning hech biri
hali qoʻllanmagan.

**Yuqorida hujjatlashtirilmagan boshqa elementlar ham bor** (tavsiyaviy, signal darajasi past): `docs-lint` vazifasi
(markdownlint + Vale, butun vazifa uchun `continue-on-error`) va alohida skaner ish jarayonlari
`semgrep.yml` / `codeql.yml` / `scorecard.yml`. `semgrepFindings: 0`
`quality-baseline.json` ichida mavjud, ammo `ci.yml` ichidagi bloklovchi ratchet’ga ulanmagan — metrika
hozirda yetim qolgan.

### Birlashtirish / takrorlarni yoʻqotish (mexanik, xavfi pastroq)

Har bir nomzod 2026-06-17 sanasidagi amaldagi gate holatiga nisbatan tekshirildi (ishoning, ammo tekshiring);
bir nechta «ravshan» birlashtirishlar aslida yashirin texnik qarzni berkitishi aniqlandi va ular **toʻgʻridan-toʻgʻri qoʻllashga** yaroqli emas.

- **`check:docs-sync` ikki marta ishga tushadi** — `lint` vazifasida alohida va yana `check:docs-all` (`docs-sync-strict`) ichida hamda husky pre-commit hook’ida. ✅ **BAJARILDI** — alohida `lint` chaqiruvi olib tashlandi.
- **CVE skanerlash** — ❌ **Toza birlashtirish EMAS.** `audit:deps` har qanday high/critical CVE’da qatʼiy xato bilan toʻxtaydi; `check:vuln-ratchet` (osv) esa faqat boshlangʻich koʻrsatkichga nisbatan _regressiya_ boʻlganda xato beradi (hozirda 1 MODERATE). Semantikasi turlicha — `audit:deps` olib tashlansa, mutlaq high/critical gate yoʻqoladi. Ikkalasini ham saqlang.
- **Sikllarni aniqlash** — ✅ **BAJARILDI** (#15159 G-01/G-02). Bu yerdagi eski matnda `check:cycles` «yashil, saralangan» gate deb atalgan va `check:circular-deps` (dpdm) 91 ta sikl haqida xabar bergani sababli uni bloklovchi sifatida saqlash asoslangan edi. Bu yashil holat **soxta yashil** edi: `check:cycles` 5 ta quyi katalogni (450 ta fayl) skanerlagan, faqat statik `import|export … from` bilan moslikni topgan va barcha `@/` hamda `@omniroute/open-sse/` spetsifikatorlarini tashlab yuborgan, shu sababli repozitoriyda ustun boʻlgan dinamik import + alias sikllarini koʻra olmagan. Tuzatildi: gate endi `src` + `open-sse` boʻylab yuradi (5023 ta fayl), spetsifikatorlarni TypeScript AST’dan yigʻadi (shuning uchun `import("…")` hisobga olinadi, tur pozitsiyasidagi `typeof import("…")` esa olinmaydi) va tsconfig `paths` qiymatlarini aniqlaydi. U 0 emas, **14** ta sikl topadi. Avvaldan mavjud 14 ta siklni gate PR ichida tuzatib boʻlmagani sababli `check:cycles` endi **ratchet** (`--ratchet`, `quality-baseline.json` ichida yuqori chegara `metrics.cycles.value = 14`, `direction: down`) — u har qanday _regressiya_ ni bloklaydi va son faqat kamayishi mumkin. CI `npm run check:cycles:ratchet` buyrugʻini ishga tushiradi. Bosqichma-bosqich kamaytirish **A-01** bilan birga olib boriladi. `check:circular-deps` (dpdm) kengroq ikkinchi xulosa sifatida tavsiyaviy holatda qoladi.
- **Murakkablik** — ✅ **BAJARILDI** (`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`): bitta ESLint oʻtishi, hisoblash ruleId boʻyicha amalga oshiriladi, shuning uchun cyclomatic+max-lines va cognitive boshlangʻich koʻrsatkichlari mustaqil qoladi; alohida `check:complexity` / `check:cognitive-complexity` lokal `--update` uchun saqlanadi.
- **`/api` anti-gallyutsinatsiyasi** — ✅ **BAJARILDI** (`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`): `src/app/api` uchun yagona FS inventari, openapi-routes + docs-symbols hamon mustaqil hisobot beradi; alohida tekshiruvlar lokal ishga tushirishlar uchun saqlanadi.
- **`check:node-runtime` 11 ta vazifada ishga tushadi** — ⚠️ **ROI past.** Har biri alohida runner va tekshiruv <1s davom etadi; umumiy tejash ~10s, buning evaziga har bir vazifa uchun arzon himoya yoʻqoladi. Bunday oʻzgartirishlar bilan bogʻliq ortiqcha tashvishga arzimaydi.
- **CI lint’dagi `typecheck:noimplicit:core`** — ✅ **lint vazifasidan olib tashlandi** (tavsiyaviy `continue-on-error` edi); bloklovchi tur yuzasi `typecheck:core` + `check:type-coverage` hisoblanadi. Lokal script saqlab qolindi.

### Holatni almashtirish / qaror qabul qilish (operator siyosati)

- `check:openapi-security-tiers` (tavsiyaviy) — ❌ **Toza tarzda almashtirib boʻlmaydi.** U 0 kodi bilan yakunlanadi, ammo `LOCAL_ONLY_API_PREFIXES` ostidagi bir nechta `traffic-inspector` marshrutlarida `x-loopback-only: true` annotatsiyasi yoʻqligi haqida ogohlantiradi. Uni majburiy qilish uchun avval ushbu annotatsiyalarni `openapi.yaml` fayliga qoʻshish kerak.
- `typecheck:noimplicit:core` (tavsiyaviy) — asosan bloklovchi `check:type-coverage` ratchet’i bilan qamrab olingan. Uni ratchet’ga aylantiring yoki takroriy ikkinchi `tsc` oʻtishini olib tashlang.
- `test:vitest:ui` (hozir **bloklovchi**) — avvaldan mavjud nosozliklar `vitest.config.ts` ichida `// #8618` kuzatuv izohlari bilan ochiq tarzda istisno qilingan; yangi nosozliklar vazifani muvaffaqiyatsiz yakunlaydi.
- `check:secrets` (gitleaks, hujjatlashtirilgan 3 ta yolgʻon ijobiy natijada muzlatilgan bloklovchi ratchet) — 0 ga yetkazish uchun ushbu 3 tasini ruxsat etilganlar roʻyxatiga kiriting yoki tavsiyaviy darajaga tushiring. GitHub’ning ichki secret-scanning funksiyasi + `check:public-creds` bilan ustma-ust tushadi.
- `check:pr-evidence` (bloklovchi, PR-body matnini grep orqali qidiradi) — yolgʻon ijobiy natija xavfi yuqori; olib tashlansa, Hard Rule #18 ijrosi zaiflashadi, shuning uchun bu haqiqiy siyosiy qarordir.
- `semgrep` (alohida tavsiyaviy) — OWASP oilalari boʻyicha CodeQL bilan ustma-ust tushadi; uning boshlangʻich koʻrsatkichini ratchet’ga ulang yoki olib tashlang.

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
