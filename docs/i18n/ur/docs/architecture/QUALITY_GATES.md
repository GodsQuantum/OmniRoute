# Quality Gates Reference (اردو)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/QUALITY_GATES.md) · 🇪🇹 [am](../../../am/docs/architecture/QUALITY_GATES.md) · 🇸🇦 [ar](../../../ar/docs/architecture/QUALITY_GATES.md) · 🇦🇿 [az](../../../az/docs/architecture/QUALITY_GATES.md) · 🇧🇬 [bg](../../../bg/docs/architecture/QUALITY_GATES.md) · 🇧🇩 [bn](../../../bn/docs/architecture/QUALITY_GATES.md) · 🇧🇦 [bs](../../../bs/docs/architecture/QUALITY_GATES.md) · 🇨🇿 [cs](../../../cs/docs/architecture/QUALITY_GATES.md) · 🇩🇰 [da](../../../da/docs/architecture/QUALITY_GATES.md) · 🇩🇪 [de](../../../de/docs/architecture/QUALITY_GATES.md) · 🇬🇷 [el](../../../el/docs/architecture/QUALITY_GATES.md) · 🇪🇸 [es](../../../es/docs/architecture/QUALITY_GATES.md) · 🇪🇪 [et](../../../et/docs/architecture/QUALITY_GATES.md) · 🇮🇷 [fa](../../../fa/docs/architecture/QUALITY_GATES.md) · 🇫🇮 [fi](../../../fi/docs/architecture/QUALITY_GATES.md) · 🇫🇷 [fr](../../../fr/docs/architecture/QUALITY_GATES.md) · 🇮🇪 [ga](../../../ga/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [gu](../../../gu/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ha](../../../ha/docs/architecture/QUALITY_GATES.md) · 🇮🇱 [he](../../../he/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [hi](../../../hi/docs/architecture/QUALITY_GATES.md) · 🇭🇷 [hr](../../../hr/docs/architecture/QUALITY_GATES.md) · 🇭🇺 [hu](../../../hu/docs/architecture/QUALITY_GATES.md) · 🇦🇲 [hy](../../../hy/docs/architecture/QUALITY_GATES.md) · 🇮🇩 [id](../../../id/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ig](../../../ig/docs/architecture/QUALITY_GATES.md) · 🇮🇹 [it](../../../it/docs/architecture/QUALITY_GATES.md) · 🇯🇵 [ja](../../../ja/docs/architecture/QUALITY_GATES.md) · 🇬🇪 [ka](../../../ka/docs/architecture/QUALITY_GATES.md) · 🇰🇭 [km](../../../km/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [kn](../../../kn/docs/architecture/QUALITY_GATES.md) · 🇰🇷 [ko](../../../ko/docs/architecture/QUALITY_GATES.md) · 🇱🇹 [lt](../../../lt/docs/architecture/QUALITY_GATES.md) · 🇱🇻 [lv](../../../lv/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ml](../../../ml/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [mr](../../../mr/docs/architecture/QUALITY_GATES.md) · 🇲🇾 [ms](../../../ms/docs/architecture/QUALITY_GATES.md) · 🇲🇹 [mt](../../../mt/docs/architecture/QUALITY_GATES.md) · 🇲🇲 [my](../../../my/docs/architecture/QUALITY_GATES.md) · 🇳🇵 [ne](../../../ne/docs/architecture/QUALITY_GATES.md) · 🇳🇱 [nl](../../../nl/docs/architecture/QUALITY_GATES.md) · 🇳🇴 [no](../../../no/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [or](../../../or/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [pa](../../../pa/docs/architecture/QUALITY_GATES.md) · 🇵🇭 [phi](../../../phi/docs/architecture/QUALITY_GATES.md) · 🇵🇱 [pl](../../../pl/docs/architecture/QUALITY_GATES.md) · 🇵🇹 [pt](../../../pt/docs/architecture/QUALITY_GATES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/QUALITY_GATES.md) · 🇷🇴 [ro](../../../ro/docs/architecture/QUALITY_GATES.md) · 🇷🇺 [ru](../../../ru/docs/architecture/QUALITY_GATES.md) · 🇱🇰 [si](../../../si/docs/architecture/QUALITY_GATES.md) · 🇸🇰 [sk](../../../sk/docs/architecture/QUALITY_GATES.md) · 🇸🇮 [sl](../../../sl/docs/architecture/QUALITY_GATES.md) · 🇷🇸 [sr](../../../sr/docs/architecture/QUALITY_GATES.md) · 🇸🇪 [sv](../../../sv/docs/architecture/QUALITY_GATES.md) · 🇰🇪 [sw](../../../sw/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ta](../../../ta/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [te](../../../te/docs/architecture/QUALITY_GATES.md) · 🇹🇭 [th](../../../th/docs/architecture/QUALITY_GATES.md) · 🇹🇷 [tr](../../../tr/docs/architecture/QUALITY_GATES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/QUALITY_GATES.md) · 🇺🇿 [uz](../../../uz/docs/architecture/QUALITY_GATES.md) · 🇻🇳 [vi](../../../vi/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [yo](../../../yo/docs/architecture/QUALITY_GATES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/QUALITY_GATES.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/QUALITY_GATES.md)

---

یہ دستاویز OmniRoute میں تمام CI کوالٹی گیٹس کے لیے مستند حوالہ ہے۔
یہ ہر گیٹ، اس کی توثیق کے دائرے، اس کے چلنے والے CI جاب، آیا یہ
ratchet baseline یا pass/fail پالیسی استعمال کرتا ہے، اور آیا یہ بلڈ کو روکتا ہے یا صرف مشاورتی ہے، کی وضاحت کرتی ہے۔

مختصر خلاصے اور allowlist پالیسی کے لیے `AGENTS.md` میں
"کوالٹی گیٹس اور Ratchets" سیکشن دیکھیں۔ اسی نظام کے تنقیدی جائزے، پختگی کی درجہ بندی، اور
ٹول سے غیر وابستہ نقل کے منصوبے کے لیے
[کوالٹی گیٹ پلے بُک](../ops/QUALITY_GATE_PLAYBOOK.md) دیکھیں۔

---

## گیٹ انوینٹری اور ایگزیکیوشن پروفائلز

### امیدوار کا داخلہ

CI اور Quality Gates ورک فلوز ہر ایک مستحکم فیصلہ جاری کرتے ہیں: `Gate / CI` اور
`Gate / Quality`۔ ان کی ورژن شدہ داخلی پالیسی ہر اپ اسٹریم جاب کو لازمی یا مشاورتی کے طور پر
درج کرتی ہے۔ لاگو لازمی جاب کا کامیاب ہونا ضروری ہے: غائب، منسوخ، نظرانداز شدہ، زیرِ التوا
اور نامعلوم نتائج PASS قائم نہیں کر سکتے۔ ایک درست docs-only یا catalog-only درجہ بندی
کوڈ لین کو غیر لاگو بنا سکتی ہے؛ ڈرافٹ PR قابلِ قبول امیدوار نہیں ہے۔ `hotfix` لیبل شواہد سے
استثنیٰ نہیں دیتا۔

دونوں ورک فلوز main/release برانچز میں PRs، `main` پر پش، دستی ڈسپیچ اور مرج گروپ
ایونٹس کا احاطہ کرتے ہیں۔ پش، ڈسپیچ اور مرج گروپ مکمل سلیکشن چلاتے ہیں۔ `release/**` پر
پش انہیں شروع نہیں کرتی (2026-10-18): ہر تبدیلی پہلے ہی اپنی PR پر میٹرکس چلا چکی ہے
اور ضم شدہ امتزاج Release-Green کا کام ہے (`docs/ops/RUNNER_BOX.md` → Hosted lane)۔ فورکس
اور مرج گروپس ان جابز کے لیے ہوسٹڈ رنرز استعمال کرتے ہیں جو بصورتِ دیگر سیلف ہوسٹڈ
رنرز منتخب کرتی ہیں؛ رول آؤٹ سے پہلے کافی ہوسٹڈ گنجائش کی تصدیق کی جانی چاہیے۔

ہر JSON رسید چیک آؤٹ شدہ SHA، ورک فلو رن اور اٹیمپٹ کی نشاندہی کرتی ہے۔
CLI چیک آؤٹ/ایونٹ SHA عدم مطابقت کو مسترد کر دیتا ہے۔ ورک فلو ٹیسٹس پالیسی ممبرشپ کو
فیصلہ جاب کی `needs` فہرست سے منسلک کرتے ہیں تاکہ کوئی نئی یا ہٹائی گئی لین خاموشی سے غائب نہ ہو۔
یہ رسیدیں اپنے ورک فلو کا احاطہ کرتی ہیں، پبلی کیشن، ڈیپلائمنٹ یا کسی موجودہ مشاورتی سکینر
کے اندرونی کاموں کا نہیں۔ برانچ رولز میں دونوں چیک ناموں کو فعال کرنا ایک الگ انتظامی
تبدیلی ہے؛ ان جابز کا اضافہ بذاتِ خود کسی برانچ کا تحفظ نہیں کرتا۔

### سٹیٹک سکین انوینٹری

ورژن شدہ npm-alias انوینٹری اور سٹیٹک سکین ممبرشپ
`config/quality/gate-manifest.json` میں موجود ہیں۔ اسکرپٹ ناموں اور عین کمانڈز کی
`package.json` کے مقابلے میں توثیق کے لیے `npm run check:gate-manifest` چلائیں؛ اضافے، حذف
اور کمانڈ ڈرفٹ مقامی ہک اور CI میں چینج کلاسفیکیشن جابز دونوں کو ناکام کر دیتے ہیں۔
alias کوئی ورک فلو جاب، میٹرکس انسٹنس یا ٹیسٹ کیس نہیں ہے: ان گنتیوں کو باہم
قابلِ تبادلہ پیش نہیں کیا جانا چاہیے۔

منتخب aliases کو چلائے بغیر جانچنے کے لیے `npm run quality:scan -- --list` یا
`npm run quality:scan:fast -- --list` استعمال کریں۔ رنر npm انٹری پوائنٹ کو کال کرتا ہے،
اس لیے اس کا رن ٹائم (جہاں کنفیگر کیا گیا ہو وہاں Bun سمیت) محفوظ رہتا ہے۔
مینیفیسٹ ان پروفائلز سے باہر کے aliases کو الگ سے کال شدہ کے طور پر ریکارڈ کرتا ہے، اور
ریڈ اونلی سکین پروفائلز میں مینٹیننس کمانڈز ممنوع ہیں۔

یہ پروفائلز صرف سٹیٹک سکین کا احاطہ کرتے ہیں۔ یہ پروڈکٹ ٹیسٹس، کوریج، پیکجنگ،
بیرونی چیکس یا کسی امیدوار کی مکمل ریلیز قبولیت کی تصدیق نہیں کرتے۔ ورک فلو داخلہ
منسلک `config/quality/admission-policy.json` اور `scripts/quality/admission-verdict.mjs` استعمال
کرتا ہے۔ Release-observer پروفائلز الگ رہتے ہیں؛ ان کے لاگو چیکس اور رسیدوں کا آزادانہ
طور پر جائزہ لیں۔ نیچے دی گئی تحریری انوینٹری صرف ایک حوالہ ہے، اس بات کا ثبوت نہیں کہ
کوئی گیٹ واقعی چلا۔

اسکرپٹس `scripts/check/` (پالیسی گیٹس) اور `scripts/quality/` (ratchet انجن) کے تحت موجود ہیں۔
CI کا مستند ماخذ `.github/workflows/ci.yml` ہے۔

### ریلیز PR فاسٹ پاتھ (`quality.yml`)

`.github/workflows/quality.yml` main/release PRs، `main` پر پش، ڈسپیچ اور مرج گروپس پر
CI کی تکمیل کرتا ہے۔ PRs پاتھ فلٹرڈ فاسٹ چیکس استعمال کرتی ہیں۔ مستقل طور پر غیر فعال
ڈپلیکیٹ بلڈ ہٹا دیا گیا؛ اصل build/package/boot چیکس CI میں برقرار ہیں۔
یونٹ سوٹ اور vitest صرف CI میں چلتے ہیں (`Unit Tests (N/8)`، `Vitest`): سابقہ
`Unit Tests fast-path` اور `Vitest (fast-path)` جابز ہر PR پر وہی کمانڈز دوبارہ چلاتی تھیں
جب سے CI ریلیز PRs پر چلنے لگا، اور انہیں 2026-10-26 کو ہٹا دیا گیا۔

| جاب                                              | دائرہ                                                                                                                                                                                                | بلاکنگ          |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `Docs Gates (fast-path)`                         | Docs/code PRs؛ API docs refs اور docs-all                                                                                                                                                            | ہاں             |
| `Fast Quality Gates`                             | کوڈ PRs؛ سٹیٹک چیکس، ٹائپ چیک، ڈیش بورڈ ٹائپ چیک، متاثرہ یونٹ ٹیسٹس                                                                                                                                  | ہاں             |
| `Forgotten sibling tests`                        | کوڈ PRs؛ تبدیل شدہ ماڈیولز کا سراغ سٹیٹک کنزیومرز اور ممکنہ sibling ٹیسٹس تک؛ barrel اور dynamic-import پاتھز مشاورتی ڈائیگناسٹکس کے طور پر رپورٹ کیے جاتے ہیں، حوالہ شدہ allowlist استثنیات کے ساتھ | **مشاورتی**     |
| `No new ESLint warnings`                         | کوڈ PRs؛ suppressions سے آگاہ lint گارڈ                                                                                                                                                              | ہاں، فورکس سمیت |
| `Merge integrity (changelog + generated skills)` | غیر ڈرافٹ PRs؛ changelog اور generated skill کی ہم آہنگی                                                                                                                                             | ہاں، فورکس سمیت |

#### Forgotten sibling tests رپورٹ

`npm run check:forgotten-sibling-tests` ٹیسٹ امپیکٹ میپ کے پیچھے موجود امپورٹ ریزولور کو دوبارہ استعمال کرتا ہے۔
ہر تبدیل شدہ پروڈکشن ماڈیول کے لیے، جب ممکنہ ٹیسٹ پل ریکویسٹ ڈف میں موجود نہ ہو، یہ
deterministic `changed module/symbol -> static consumer -> candidate sibling test`
چینز رپورٹ کرتا ہے۔ Markdown خلاصہ اور JSON نتیجہ کسی بھی بلاکنگ رول آؤٹ سے پہلے
کیلیبریشن کے لیے `forgotten-sibling-tests` ورک فلو آرٹیفیکٹ کے طور پر برقرار رکھے جاتے ہیں۔

Barrel re-exports اور dynamic imports صرف ریزولوشن ڈیگناسٹکس ہیں؛ یہ کبھی بھی کوئی بلاکنگ فائنڈنگ پیدا نہیں کرتے۔ نظرثانی شدہ استثنات `config/quality/forgotten-sibling-allowlist.json` میں موجود ہیں۔ ہر اندراج میں کنزیومر اور امیدوار ٹیسٹ کا نام بتانا، مخصوص جواز دینا، اور کسی GitHub issue یا pull request کا لنک شامل کرنا لازم ہے۔ خراب اندراجات فیل کلوزڈ ہوتے ہیں۔ استثنات کسی حذف شدہ امیدوار ٹیسٹ یا ایسے diff کو دبا نہیں سکتے جو `.skip`/`.todo` شامل کرتا ہو؛ assertion weakening اور دیگر masking کی ذمہ داری آزادانہ طور پر بلاک کرنے والے `check:test-masking` گیٹ کے پاس ہی رہتی ہے۔

### جاب: `lint`

`main` پر آنے والی ہر PR کے ساتھ چلتی ہے۔ ناکامی کی صورت میں merge کو بلاک کرتی ہے۔

| اسکرپٹ (`npm run ...`)            | کیا تصدیق کرتا ہے                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | بلاکنگ                                 |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| `check:node-runtime`              | Node.js ورژن معاون رینج کے اندر ہے                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | ہاں                                    |
| `check:cycles`                    | پورے `src/` + `open-sse/` میں سرکلر امپورٹس (AST پر مبنی، tsconfig `paths` ریزولو شدہ)۔ Bare جب بھی کوئی سائیکل موجود ہو تو exit 1 کرتا ہے (#15281 سے فیل کلوزڈ) اور SCCs کی فہرست دیتا ہے۔ `check:cycles:ratchet` (جو CI چلاتا ہے) تب بلاک کرتا ہے جب تعداد `quality-baseline.json` میں `metrics.cycles` کی حد سے تجاوز کر جائے — فی الحال 14، `direction: down`، لہٰذا یہ صرف کم ہی ہو سکتی ہے (#15159 G-01/G-02)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | ہاں (ریچٹ)                             |
| `check:boundary`                  | `open-sse → src` کپلنگ: انجن سے ایپ کی طرف منفرد فائل-تا-فائل امپورٹس (`scripts/quality/measure-boundary.mjs`؛ edge لسٹ v4 core/module-split remediation backlog ہے)۔ Bare = ایڈوائزری رپورٹ (`quality:boundary` کے مترادف)۔ `check:boundary:ratchet` (جو CI چلاتا ہے، اور `quality.yml` کے fast-gates ریچٹ لوپ میں بھی شامل ہے) تب بلاک کرتا ہے جب تعداد `quality-baseline.json` میں `metrics.boundaryOpenSseToSrc` کی حد سے تجاوز کر جائے — ناپی گئی 771 پر سیڈ شدہ، `direction: down`؛ `--update` اسے صرف کم کرتا ہے؛ PRs پر base-relative (`--base-ref`، نیچے دیکھیں)                                                                                                                                                                                                                                                                                                                                 | ہاں (ریچٹ)                             |
| `check:route-validation:t06`      | تمام روٹس پر Zod schemas موجود ہیں (Tier 6 پالیسی)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | ہاں                                    |
| `check:any-budget:t11`            | `@ts-expect-error // any` کی گنتی بجٹ سے تجاوز نہیں کرتی (Tier 11 catraca)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | ہاں                                    |
| `check:provider-consistency`      | `providers.ts` میں موجود ہر provider کی `providerRegistry.ts` میں مماثل entry موجود ہے (اور اس کے برعکس بھی، allowlist کے دائرے میں)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | ہاں                                    |
| `check:model-lifecycle`           | تینوں دستی طور پر برقرار رکھی جانے والی routing tables چیک اِن lifecycle snapshot (#11503) کے ساتھ متسق رہتی ہیں: `FITNESS_TABLE` (`taskFitness.ts`) کسی ایسی retired id کو score نہیں کرتی جسے `REGISTRY` route کر سکتی ہو؛ ہر `BUILT_IN_ALIASES` کا ہدف `REGISTRY` میں موجود اور retired-id snapshot سے غائب ہے؛ ہر retired id جو اب بھی `REGISTRY` میں موجود ہے یا تو forward کی گئی ہے یا `allowedRetiredInCatalog` میں درج ہے؛ اور `DEFAULT_DEGRADATION_MAP` کا کوئی بھی source یا target اس snapshot میں retired نہیں دکھائی دیتا۔ یہ ثابت نہیں کرتا کہ کوئی model اس وقت کسی live upstream سے serve ہو رہا ہے۔ آف لائن — `config/quality/model-lifecycle.json` سے موازنہ کرتا ہے، جسے `npm run quality:refresh-model-lifecycle` کے ذریعے دستی طور پر تازہ کیا جاتا ہے (network؛ CI میں شامل نہیں)۔ `allowedRetiredInCatalog` ایک burn-down ratchet ہے: entry صرف tracking issue کے ساتھ شامل کریں۔ | ہاں                                    |
| `check:fetch-targets`             | client-side `src/` میں موجود ہر `fetch("/api/...")` کسی حقیقی `route.ts` تک پہنچتا ہے                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | ہاں                                    |
| `check:deps`                      | ریپو میں ہر `package.json` کی تمام `npm install` کے قابل dependencies `dependency-allowlist.json` میں موجود ہیں؛ نئے unpinned یا slopsquat شدہ packages کو flag کیا جاتا ہے                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | ہاں                                    |
| `audit:deps`                      | `npm audit` (root + electron) — کوئی high/critical advisories نہیں (osv `check:vuln-ratchet` کے ساتھ overlap؛ دیکھیں Rationalization Backlog)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | ہاں                                    |
| `check:lockfile`                  | `package-lock.json` کی سالمیت — https رجسٹری، سالمیت کے ہیشز، کوئی ہوسٹ اووررائیڈ نہیں                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | ہاں                                    |
| `check:licenses`                  | پروڈکشن ڈیپینڈنسیز کے لیے SPDX لائسنس allowlist                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | ہاں                                    |
| `check:tracked-artifacts`         | کوئی بلڈ آرٹیفیکٹس / کمٹ شدہ `node_modules` سم لنکس نہیں (یہ husky pre-commit میں بھی چلتا ہے؛ pre-push جان بوجھ کر ہلکا رکھا گیا ہے — #6716)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | ہاں                                    |
| `check:ai-attribution`            | PR کمیٹس، ٹائٹل یا باڈی میں کوئی AI/bot `Co-Authored-By` ٹریلر یا AI-generation فوٹر نہیں — Hard Rule #16 (PR→`release/**` کے لیے `quality.yml` کے fast-gates لوپ میں — ایونٹ پے لوڈ کو پڑھتا ہے، PRs سے باہر no-op ہے — اور PR→`main` کے لیے `ci.yml` lint میں ایک PR-only اسٹیپ؛ نیز husky `commit-msg` ہک بھی؛ انسانی co-authors کی اجازت ہے؛ #14436)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `check:vitest-exclusions`         | ہر Vitest استثنا ایک ٹریکنگ ایشو کا نام دیتا ہے اور `config/quality/vitest-exclusions.json` میں درج ہوتا ہے (#13204)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | ہاں                                    |
| `check:file-size`                 | سورس فائلیں (`src/`، `open-sse/`، `electron/`، `bin/` میں `.ts`/`.tsx`) `cap` کے اندر رہتی ہیں اور ٹیسٹ فائلیں (`*.test.ts(x)`) `testCap` کے اندر؛ `file-size-baseline.json` میں منجمد فائلیں (`frozen` / `testFrozen`) اپنے ریکارڈ شدہ سائز سے بڑی نہیں ہو سکتیں                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | ہاں                                    |
| `check:error-helper`              | ایگزیکیوٹرز/ہینڈلرز میں خرابی کے جوابات `buildErrorBody()` / `sanitizeErrorMessage()` استعمال کرتے ہیں (سخت اصول #12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | ہاں                                    |
| `check:migration-numbering`       | میگریشن SQL فائلیں ترتیب سے نمبر شدہ ہیں، کوئی خلا یا نقل نہیں                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | ہاں                                    |
| `check:public-creds`              | `publicCreds.ts` سے باہر کوئی لفظی OAuth `client_id`/`client_secret` یا Firebase Web کلیدیں نہیں (سخت اصول #11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | ہاں                                    |
| `check:db-rules`                  | `src/lib/db/` ماڈیولز سے باہر کوئی خام SQL نہیں؛ `localDb.ts` سے کوئی barrel-imports نہیں (سخت اصول #2/#5)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | ہاں                                    |
| `check:known-symbols`             | پرووائیڈر ایگزیکیوٹرز، روٹنگ حکمت عملیاں، اور مترجمین اپنی ڈسپیچ ٹیبلز میں اندراج شدہ ہیں اور ڈسک پر موجود فائلوں سے مماثل ہیں — کوئی یتیم یا غیر اعلانیہ علامت نہیں                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | ہاں                                    |
| `check:route-guard-membership`    | ہر وہ روٹ جو چائلڈ پراسیس شروع کرتا ہے `isLocalOnlyPath()` کے ذریعے درجہ بند ہے (سخت اصول #15/#17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | ہاں                                    |
| `check:test-discovery`            | ریپو کی ہر `*.test.ts` / `*.spec.ts` فائل کم از کم ایک ٹیسٹ رنر کے ذریعے شامل کی جاتی ہے (ریچٹ: `test-discovery-baseline.json` میں آرفن فہرست صرف گھٹ سکتی ہے)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | جی ہاں                                 |
| `check:test-tla-order`            | `tests/unit` کے تحت کوئی بھی `node:test` فائل ٹیسٹ رجسٹر نہیں کرتی، ٹاپ لیول `await` نہیں آتا، اور پھر مزید ٹیسٹ رجسٹر نہیں ہوتے (#18045؛ ریچٹ: `test-tla-order-allowlist.json` صرف گھٹ سکتی ہے)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | جی ہاں                                 |
| `check:agent-skills-sync`         | تیار کردہ agent-skills آرٹیفیکٹس اپنے سورس کیٹلاگ سے میل کھاتے ہیں (کوئی انحراف نہیں)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `check:provider-asset-provenance` | فراہم کنندہ کے لوگوز/اثاثوں کے ساتھ ریکارڈ شدہ پروویننس کا اندراج موجود ہو                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `lint:json`                       | JSON کنفیگ فائلیں کامیابی سے پارس ہوں اور ریپو کے lint قواعد پر پوری اتریں                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `typecheck:core`                  | TypeScript کمپایل بغیر کسی خرابی کے ہو (صرف مشورتی وارننگز)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | جی ہاں                                 |
| `typecheck:noimplicit:core`       | سخت `noImplicitAny` — مستقبل کے لیے آگے بڑھنے والا؛ بہت سے پہلے سے موجود کال سائٹس کو ابھی بھی اینوٹیشنز درکار ہیں                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | **مشورتی** (`continue-on-error: true`) |
| `check:dashboard-typecheck`       | `tsc` صرف `src/app/(dashboard)/**` کے دائرے میں (#7033) — `typecheck:core` کی منتخب کردہ 27-فائل کی allowlist میں کوئی بھی ڈیش بورڈ TSX شامل نہیں ہے، اور `next build` بھی اسے کبھی ٹائپ-چیک نہیں کرتا (`next.config.mjs` میں `ignoreBuildErrors: true` سیٹ ہے)، اس لیے وہاں orphaned-identifier کی ریگریشنز (#6625/#6909) CI سے پوشیدہ رہتی تھیں۔ ایک منجمد فی-فائل/فی-TS-کوڈ گنتی کی بنیاد کے خلاف موازنہ کرتا ہے (`config/quality/dashboard-typecheck-baseline.json`، `check:known-symbols` جیسا وہی stale-enforcement پیٹرن) — صرف بنیاد شدہ گنتی سے زائد نئی خرابیاں ہی گیٹ کو ناکام کرتی ہیں؛ جب پہلے سے موجود کوئی خرابی ٹھیک ہو جائے تو `--update` کے ساتھ بنیاد کو کم کریں۔                                                                                                                                                                                                                      | ہاں                                    |

### جاب: `quality-gate`

`test-coverage` کے بعد چلتا ہے۔ ناکامی پر مرج کو روکتا ہے۔

| اسکرپٹ                       | تصدیق کرتا ہے                                                                                                                                                                 | روکنے والا                     |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| `quality:collect`            | `quality-metrics.json` جاری کرتا ہے (ESLint وارننگز کی گنتی، ضم شدہ شارد رپورٹ سے کوریج)                                                                                      | ہاں (ratchet سے پہلے کا مرحلہ) |
| `quality:ratchet`            | `quality-baseline.json` میں موجود ہر میٹرک پیچھے نہیں ہٹا ہے (ESLint وارننگز ≤ بنیاد؛ کوریج ≥ بنیاد)                                                                          | ہاں                            |
| `check:duplication`          | کوڈ ڈپلیکیشن (jscpd@4) `quality-baseline.json` کی بنیاد سے تجاوز نہیں کرتی                                                                                                    | ہاں                            |
| `check:complexity`           | فائل-سطحی cyclomatic کمپلیکسیٹی حد سے تجاوز نہیں کرتی (کور ESLint `complexity` + `max-lines-per-function`)                                                                    | ہاں                            |
| `check:cognitive-complexity` | Cognitive کمپلیکسیٹی کا ratchet (`eslint-plugin-sonarjs`) — الگ ESLint پاس؛ CI دونوں کو ایک ہی `check:complexity-ratchets` مرحلے کے طور پر ملا کر چلاتا ہے                    | ہاں                            |
| `check:dead-code`            | غیر استعمال شدہ exports / فائلوں کا ratchet (knip) بنیاد کے مقابلے میں پیچھے نہیں ہٹتا                                                                                        | ہاں                            |
| `check:compression-budget`   | کمپریشن بینچ مارک کا بجٹ — فی-انجن ٹوکن-بچت کی کم از کم حدیں پیچھے نہیں ہٹنی چاہئیں                                                                                           | ہاں                            |
| `check:type-coverage`        | فیصد-ٹائپ شدہ حصے کا ratchet (`type-coverage`) پیچھے نہیں ہٹتا؛ بڑی حد تک `typecheck:noimplicit:core` کو بھی شامل کر لیتا ہے                                                  | ہاں                            |
| `check:codeql-ratchet`       | کھلے CodeQL الرٹس کی گنتی پیچھے نہیں ہٹتی (`gh api` کے ذریعے پڑھتا ہے؛ ٹوکن نہ ہونے پر graceful-skip کرتا ہے) — ریفریش کا وقفہ اور دستی ٹرگر: ذیل میں "CodeQL ratchet" دیکھیں | ہاں                            |

### جاب: `quality-extended`

پورا جاب مشاورتی ہے (`continue-on-error: true`)۔ npm پر مبنی ratchets اصل میں چلتے ہیں؛
بیرونی سکینرز `gh release download` کے ذریعے انسٹال ہوتے ہیں اور جب بائنری اب بھی موجود
نہ ہو تو خود سکیپ کر جاتے ہیں (exit 0)۔

| اسکرپٹ                   | تصدیق کرتا ہے                                                                                                                                                                                    | روکنے والا                                        |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| `check:circular-deps`    | کوئی circular ڈیپینڈنسیز موجود نہیں (dpdm)                                                                                                                                                       | **مشاورتی**                                       |
| `check:bundle-size`      | بنڈل سائز حد سے تجاوز نہیں کرتا                                                                                                                                                                  | **مشاورتی**                                       |
| `check:secrets`          | سیکرٹ اسکیننگ (gitleaks) — بائنری موجود نہ ہونے پر سکیپ کرتا ہے                                                                                                                                  | **مشاورتی**                                       |
| `check:vuln-ratchet`     | ڈیپینڈنسی کی کمزوریاں (osv-scanner) پیچھے نہیں ہٹتیں — بائنری موجود نہ ہونے پر سکیپ کرتا ہے                                                                                                      | **مشاورتی**                                       |
| `check:workflows`        | ورک فلو lint (actionlint + zizmor)؛ غائب/خراب سکینرز، غلط رپورٹس یا غائب ratchet بنیاد INCOMPLETE کے طور پر ناکام کرتی ہیں۔ درست دریافتیں منتخب کردہ سخت/مشاورتی/ratchet پالیسی پر عمل کرتی ہیں  | عمل درکار ہے؛ zizmor ratchet CI میں روکنے والا ہے |
| `check:openapi-breaking` | پبلک API کنٹریکٹ (`openapi.yaml`) میں بنیادی برانچ کے مقابلے میں بریکنگ تبدیلیاں (oasdiff) — `openapiBreaking=N` جاری کرتا ہے؛ oasdiff غائب ہونے یا بنیادی spec کے حل نہ ہو سکنے پر سکیپ کرتا ہے | **مشاورتی**                                       |

### جاب: `docs-sync-strict`

`main` پر ہر PR کے لیے چلتا ہے۔ ناکامی پر مرج کو روکتا ہے۔

| اسکرپٹ                         | توثیق کرتا ہے                                                                                                                                             | بلاکنگ                           |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| `check:docs-all`               | میٹا گیٹ جو نیچے دیے گئے 6 ذیلی گیٹس کو ترتیب سے چلاتا ہے                                                                                                 | ہاں                              |
| ↳ `check:docs-sync`            | CHANGELOG / OpenAPI / llm.txt ورژن کی باہمی مطابقت                                                                                                        | ہاں                              |
| ↳ `check:docs-counts`          | نثر میں دی گئی گنتیاں (فراہم کنندہ کی گنتی، مائیگریشن کی گنتی وغیرہ) اصل گنتیوں کی ratchet ونڈو کے اندر ہوں                                               | ہاں                              |
| ↳ `check:env-doc-sync`         | `.env.example` میں موجود ہر env var کسی docs ٹیبل میں دستاویزی ہو، اور اس کے برعکس                                                                        | ہاں                              |
| ↳ `check:deprecated-versions`  | docs میں کوئی فرسودہ ورژن سٹرنگز نہ ہوں                                                                                                                   | ہاں                              |
| ↳ `check:doc-links`            | docs میں اندرونی markdown لنکس حقیقی فائلوں کی طرف حل ہوں (`[text]`/`(path)` فارم)                                                                        | ہاں                              |
| ↳ `check:fabricated-docs`      | docs میں حوالہ دیے گئے routes، env vars، CLI کمانڈز، hook نام اور فائل پاتھس کوڈ بیس میں موجود ہوں۔ `--strict` کے ذریعے ہارڈ گیٹ؛ فلیگ کے بغیر soft-fail۔ | ہاں (CI میں `--strict` کے ذریعے) |
| `check:cli-i18n`               | CLI کمانڈ سٹرنگز تمام i18n لوکیل فائلوں میں موجود ہوں                                                                                                     | ہاں                              |
| `check:openapi-coverage`       | OpenAPI spec حقیقی routes کی کم از کم ratcheted حد کو کور کرتا ہو                                                                                         | ہاں                              |
| `check:openapi-security-tiers` | `openapi.yaml` میں سیکیورٹی ٹائر اینوٹیشنز `routeGuard.ts` کی درجہ بندیوں سے مطابق ہوں                                                                    | **ایڈوائزری**                    |
| `check:openapi-routes`         | `openapi.yaml` میں ہر پاتھ حقیقی `route.ts` کی طرف حل ہو (اینٹی ہیلوسینیشن)                                                                               | ہاں                              |
| `check:docs-symbols`           | `docs/**/*.md` میں ہر `/api/...` حوالہ حقیقی `route.ts` کی طرف حل ہو (اینٹی ہیلوسینیشن)                                                                   | ہاں                              |
| `i18n translation drift`       | i18n لوکیل فائلوں میں غیر ترجمہ شدہ کلیدیں — صرف انتباہ                                                                                                   | **ایڈوائزری**                    |

### جاب: `i18n-ui-coverage`

| اسکرپٹ                            | توثیق کرتا ہے                                                                                                                                                          | بلاکنگ        |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `check-ui-keys-coverage` (inline) | UI i18n کلیدی کوریج ≥ 65% ہو                                                                                                                                           | ہاں           |
| `check-ui-value-drift` (inline)   | دوبارہ لکھی گئی انگریزی **ویلیو** کوئی باسی ترجمہ پیچھے نہ چھوڑے                                                                                                       | ہاں           |
| `check-new-key-coverage` (inline) | ہر **نئی** انگریزی کلید ہر لوکیل میں ترجمہ شدہ ہو — `__MISSING__:` مارکر مسترد کر دیا جاتا ہے                                                                          | ہاں           |
| `check-translation-ratio`         | فی لوکیل حقیقی ترجمہ کا تناسب (انگریزی سے یکساں / placeholder / allowlist سے باہر غائب leaves) `config/quality/i18n-translation-baseline.json` + slack سے تجاوز نہ کرے | **ایڈوائزری** |

`fetch-depth: 0` درکار ہے — value-drift گیٹ `en.json` کا merge base کے ساتھ diff کرتا ہے۔

#### `check-ui-value-drift` — باسی ترجمہ گیٹ

اس ایک i18n ریگریشن کو پکڑتا ہے جسے دیگر گیٹس ساختی طور پر نہیں دیکھ سکتے: ایک انگریزی ویلیو
دوبارہ لکھی جاتی ہے اور _پچھلی_ انگریزی سے اخذ شدہ ترجمے پیچھے رہ جاتے ہیں، اس طرح
غیر انگریزی صارفین پراعتماد انداز میں لکھی گئی، اب غلط ہو چکی تحریر پڑھتے رہتے ہیں۔

یہ حقیقت میں پیش آیا۔ `oauthModal.googleOAuthWarning` کو دوبارہ لکھا گیا جب Antigravity
لاگ اِن ہیلپر شامل ہوا (#5203)؛ **43 میں سے 39 لوکیلز** میں وہ متن برقرار رہا جو آپریٹرز کو
"مکمل URL کاپی کریں اور نیچے پیسٹ کریں" کہتا تھا — ایک ایسا فلو جو اس فراہم کنندہ کے لیے
مکمل ہی نہیں ہو سکتا۔ یہ #8463 تک کسی کے علم میں نہیں آیا کیونکہ:

- `sync-ui-keys` صرف وہ کلیدیں بھرتی ہے جو **غیر موجود** ہوں، کبھی بھی وہ نہیں جو **باسی** ہوں؛
- `check-ui-keys-coverage` کلید کی _موجودگی_ گنتا ہے، اس لیے باسی ترجمہ کور شدہ شمار ہوتا ہے؛
- `check-translation-drift` `docs/i18n/<locale>/**.md` دستاویزی مررز کو ٹریک کرتا ہے —
  یہ کبھی `src/i18n/messages/*.json` نہیں پڑھتا۔ 2026-09 re-sync کے بعد سے جاب
  `docs-sync-strict` میں بلاکنگ: کوئی بنیادی doc میں ترمیم کریں → `npm run i18n:run -- --files=<doc>`
  (سیکشن لیول، کم لاگت)۔

**ڈِف-آگاہ، نہ کہ بیس لائن پر مبنی۔** یہ `en.json` کا موازنہ مرج بیس پر ورکنگ ٹری کے ساتھ کرتا ہے؛ ہر وہ کلید جس کی انگریزی قدر تبدیل ہوئی ہو، کوئی بھی لوکیل جو اب بھی غیر تبدیل شدہ ترجمہ رکھے ہوئے ہے، پرانی (stale) سمجھی جاتی ہے۔ یہ جان بوجھ کر **پہلے سے موجود قرض کو منجمد** کر دیتا ہے — ایک diff یہ ظاہر نہیں کر سکتا کہ کوئی پرانا ترجمہ اصل میں کس پرانی انگریزی سے آیا تھا، اس لیے گیٹ صرف اسی چیز کا فیصلہ کرتا ہے جسے موجودہ تبدیلی چھو رہی ہے۔ متبادل طریقہ (فی کلید ہیش بیس لائن) کی قیمت ایک ~600 KB کی تیار شدہ فائل ہوتی — موجودہ سب سے بڑی بیس لائن سے 3 گنا — جو ہر i18n PR پر بدلتی رہتی۔

اسے پورا کرنے کے دو طریقے ہیں:

1. متاثرہ تراجم کو اپڈیٹ کریں، یا
2. انہیں `__MISSING__:<new english>` پر سیٹ کریں — اس کے بعد رن ٹائم درست شدہ انگریزی پیش کرتا ہے
   (`src/i18n/request.ts::deepMergeFallback`, #7258) اور کلید ترجمے کی قطار میں لگ جاتی ہے۔

اگر اسٹرنگ کا **مفہوم** تبدیل ہوا ہے، تو **کلید کا نام تبدیل کرنا** ترجیح دیں: نئی کلید پرانا ترجمہ وراثت میں نہیں لے سکتی۔ #8463 نے یہی پیٹرن استعمال کیا۔

```bash
npm run i18n:check-value-drift          # سخت (وہی جو CI چلاتا ہے)
npm run i18n:check-value-drift:warn     # صرف رپورٹ
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

جب بیس کیٹلاگ پڑھا نہ جا سکے (بیس ریف کے بغیر shallow clone)، تو یہ `SKIP reason=base-unresolved` کے ساتھ 0 پر خارج ہوتا ہے، `check-openapi-breaking` کی طرز پر۔

### جاب: `i18n`

مکمل i18n توثیقی میٹرکس (فی لوکیل ایک جاب)۔ پوری جاب مشورتی ہے۔

| اسکرپٹ                          | توثیق                    | بلاکنگ                                             |
| ------------------------------- | ------------------------ | -------------------------------------------------- |
| `validate_translation.py quick` | فی لوکیل ترجمے کی مکملیت | **مشورتی** (پوری جاب پر `continue-on-error: true`) |

### جاب: `pr-test-policy`

صرف پل ریکویسٹس پر چلتی ہے۔

| اسکرپٹ                 | توثیق                                                                                                                                             | بلاکنگ |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| `check:pr-test-policy` | وہ PRs جو `src/`, `open-sse/`, `electron/`, یا `bin/` میں پروڈکشن کوڈ تبدیل کرتی ہیں، انہیں ٹیسٹ شامل یا اپڈیٹ کرنا لازم ہے (سخت قاعدہ #8)        | ہاں    |
| `check:test-masking`   | تبدیل شدہ ٹیسٹ فائلیں مجموعی assert گنتی نہیں گھٹاتیں اور نہ ہی `assert.ok(true)` جیسی بے معنی (tautology) تصدیقات شامل کرتیں                     | ہاں    |
| `check:pr-evidence`    | PR باڈی میں تبدیلی کے لیے ٹیسٹ/VPS ثبوت کا حوالہ موجود ہو (PR کے متن کو grep کر کے سخت قاعدہ #18 کو خودکار بناتا ہے — نازک طریقہ، Backlog دیکھیں) | ہاں    |

### جاب: `test-vitest`

`build` کے بعد چلتی ہے۔ ناکامی پر مرج روک دیتی ہے۔

| سویٹ             | توثیق                                             | بلاکنگ                                                                                                                 |
| ---------------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `test:vitest`    | MCP سرور (110 ٹولز)، autoCombo، کیشے — vitest رنر | ہاں                                                                                                                    |
| `test:vitest:ui` | UI کمپوننٹ ٹیسٹ — vitest رنر                      | **بلاکنگ** — پہلے سے موجود ناکامیاں `vitest.config.ts` میں واضح طور پر مستثنیٰ ہیں؛ نئی ناکامیاں جاب ناکام کر دیتی ہیں |

### رات کے ورک فلوز (شیڈول شدہ، مشورتی)

یہ cron شیڈول پر چلتے ہیں (اور `workflow_dispatch` پر)، PRs پر کبھی نہیں۔ سب مشورتی ہیں۔

| ورک فلو                | توثیق                                                                                                                                                                          | بلاکنگ     |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| `nightly-property`     | بے ترتیب seed اور زیادہ رن گنتی کے ساتھ fast-check پراپرٹی ٹیسٹ                                                                                                                | **مشورتی** |
| `nightly-resilience`   | ہیپ-گروتھ گیٹ، chaos فالٹ انجکشن، k6 لوڈ/سوک                                                                                                                                   | **مشورتی** |
| `nightly-llm-security` | promptfoo انجکشن گارڈ (بلاک موڈ) + garak پروبز (پروائیڈر سیکرٹ کے بغیر چھوڑ دیے جاتے ہیں)                                                                                      | **مشورتی** |
| `nightly-schemathesis` | `docs/openapi.yaml` استعمال کرتے ہوئے لائیو OmniRoute کے خلاف OpenAPI کنٹریکٹ فزنگ (schemathesis) — اسپیسیفیکیشن خلاف ورزیوں / غیر ہینڈل شدہ 500s کو ظاہر کرتی ہے (Fase 8 B.4) | **مشورتی** |
| `nightly-mutation`     | تیز یونٹ لین پر Stryker میوٹیشن ٹیسٹنگ اسکور — بچ جانے والے میوٹنٹس کمزور asserts کو بے نقاب کرتے ہیں                                                                          | **مشورتی** |
| `nightly-compat`       | سپورٹ شدہ `engines.node` رینجز کے بھر میں Node انجن مطابقت میٹرکس                                                                                                              | **مشورتی** |

کارکردگی کی بیس لائنیں (ہیپ، TTFB، بلڈ ٹائم) ریکارڈ کی جاتی ہیں، گیٹ نہیں کی جاتیں: دیکھیں [`PERF_BASELINE.md`](../ops/PERF_BASELINE.md) (`npm run perf:lts-baseline`)۔

---

## رفتار کا مرحلہ (2026-08-30 → v4.0 LTS): ہر بنیادی حد میں 20% نرمی

مالک کا فیصلہ (2026-08-30): v4.0 کی ماڈیولرائزیشن تک، تکنیکی قرض کی حد برقرار رکھنے کے مقابلے میں ریلیز کی رفتار زیادہ اہم ہے۔ ہر **عددی** ریچٹ بنیادی حد کو ایک قابلِ آڈٹ مرحلے میں 20% نرم کیا گیا، اور اس مرحلے کا اعلان `config/quality/quality-baseline.json` میں کیا گیا ہے:

```json
"_policy": { "phase": "velocity", "since": "2026-08-30", "until": "4.0.0",
             "relaxPct": 20, "requireTighten": false }
```

| کیا تبدیل ہوا                                                                                                                                                                                     | کہاں                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `metrics.*.value` — کم بہتر ہونے والی گنتیاں ×1.2، زیادہ بہتر ہونے والی فیصدیں ÷1.2 (کوریج کی کم از کم حد 60 برقرار، `eslintErrors` بدستور 0، `eslintWarnings` 0 → منجمد suppression گنتی کا 20%) | `quality-baseline.json` (`_relax_velocity_2026_08_30` نوٹ میں ہر پہلے → بعد کی قدر درج ہے)             |
| `count` ×1.2 / `percentage` ×1.2                                                                                                                                                                  | `complexity-baseline.json`, `duplication-baseline.json`                                                |
| `cap`، `testCap`، ہر `frozen[*]` / `testFrozen[*]` سطر کی حد ×1.2                                                                                                                                 | `file-size-baseline.json`                                                                              |
| فی فائل / فی TS کوڈ گنتیاں ×1.2                                                                                                                                                                   | `api-typecheck-baseline.json`, `dashboard-typecheck-baseline.json`, `open-sse-typecheck-baseline.json` |
| `THRESHOLD` 36 → 30                                                                                                                                                                               | `scripts/check/check-openapi-coverage.mjs`                                                             |
| جب `_policy.requireTighten === false` ہو تو `--require-tighten` صرف مشاورتی رہتا ہے                                                                                                               | `scripts/quality/check-quality-ratchet.mjs`                                                            |
| رات کا `bank-ratchet-shrinks` موقوف ہے (یہ ناپی گئی کمی کو محفوظ کر کے اضافی گنجائش ختم کر دیتا)                                                                                                  | `.github/workflows/nightly-release-green.yml`                                                          |

اجازت فہرستیں (`eslint-suppressions.json`, `test-masking-allowlist.json`, `test-discovery-baseline.json`,
…) بجٹ **نہیں** ہیں اور انہیں تبدیل نہیں کیا گیا۔ پاس/فیل پالیسی گیٹس (راز، SQL قواعد،
دستاویزات/ماحول کا معاہدہ، i18n برابری، یونٹ ٹیسٹس) میں کوئی تبدیلی نہیں — ناکام ٹیسٹ اب بھی ناکام ٹیسٹ ہی ہے۔

**ٹولنگ**

- `npm run quality:relax-baselines -- --pct 20 --note velocity_YYYY_MM_DD [--dry-run]` — ایک مرتبہ کی جانے والی
  نرمی (`scripts/quality/relax-baselines.mjs`)؛ ایک ہی نوٹ کے ساتھ دوسری بار چلنے سے انکار کرتی ہے۔
- `npm run quality:headroom [-- --only deadExports,fileSize] [--json out.json --md out.md]` —
  ہر عددی گیٹ کو اسی طرح ناپتا ہے جیسے CI ناپتا ہے اور ہر گیٹ کی باقی ماندہ گنجائش دکھاتا ہے
  (`scripts/quality/baseline-headroom.mjs`)۔ رات کا `baseline-headroom` جاب جدول کو ورک فلو رَن کے خلاصے میں شائع کرتا ہے اور اپنی JSON/Markdown رپورٹ
  `baseline-headroom-<run_id>` کے نام سے اپ لوڈ کرتا ہے، جسے 90 دن تک برقرار رکھا جاتا ہے۔ انتباہی اور نازک قطاریں ان گیٹس کی نشاندہی کرتی ہیں
  جو اپنی حد کے 10% کے اندر ہوں یا پہلے ہی اسے عبور کر چکے ہوں۔ بجٹ استعمال ہونے کی پیشگی تنبیہ کے طور پر ان رپورٹس کا جائزہ لیں؛
  متعلقہ گیٹ کے `_rebaseline_*` نوٹس دیکھیں۔ یہ جاب اب کوئی مستقل مسئلہ تخلیق یا اپ ڈیٹ نہیں کرتا؛ #12149 میں پچھلی رپورٹوں کی تاریخ محفوظ ہے۔

**نئے کوڈ کا موڈ (Clean-as-You-Code) — 2026-08-30 سے، صرف PR تیز راستے کے لیے**

`pull_request` ایونٹس پر `quality.yml`، `check:file-size`،
`check:complexity-ratchets` اور `check:dead-code` کو `--base-ref <PR base SHA>` فراہم کرتا ہے۔ `check:complexity-ratchets` اور
`check:dead-code` کے لیے گیٹ HEAD کا merge-base کے ساتھ موازنہ **صرف ان فائلوں تک محدود رکھ کر کرتا ہے جنہیں PR نے تبدیل کیا**
(`scripts/check/newCodeMode.mjs`: merge-base کو عارضی
`git worktree` میں عملی شکل دی جاتی ہے، ESLint/knip وہاں اور HEAD پر چلائے جاتے ہیں، اور فی فائل گنتیوں کا فرق نکالا جاتا ہے):

- **روکنے والا** — PR نے تبدیل کردہ فائلوں میں cyclomatic/cognitive خلاف ورزیاں یا dead exports شامل کیے
  (لاگ میں `complexityNewCode=`, `cognitiveComplexityNewCode=`, `deadExportsNewCode=`);
- **مشاورتی** — عالمی مجموعہ بمقابلہ منجمد بنیادی حد۔ وراثت میں ملنے والا انحراف کبھی کسی بے قصور PR کو ناکام نہیں کرتا؛
  ریلیز مفاہمت کے وقت انحراف دوبارہ منجمد کیا جاتا ہے اور headroom جاب اس کی نگرانی کرتا ہے۔

`check:file-size` بنیادی ریفرنس کو اپنی شرائط کے مطابق استعمال کرتا ہے (`scripts/check/check-file-size.mjs`, #8522):
یہ درخت میں موجود ہر سورس اور ٹیسٹ فائل کی جانچ کرتا ہے، `git show` کے ذریعے PR کی بنیادی حالت پر ہر فائل کی سطروں کی تعداد پڑھتا ہے،
اور کسی فائل کو صرف تب ناکام کرتا ہے جب وہ اپنی بنیادی حد کی زیادہ بڑی بالائی حد
(`frozen` / `testFrozen`، یا بنیادی حد سے باہر فائل کے لیے `cap` / `testCap`) اور اپنے بنیادی حجم دونوں سے بڑھ جائے۔
لہٰذا بنیادی حالت میں پہلے ہی منحرف فائل کبھی کسی بے قصور PR کو ناکام نہیں کرتی۔

`check:boundary:ratchet` اپنے واحد عدد پر بھی یہی اصول لاگو کرتا ہے
(`scripts/quality/measure-boundary.mjs --ratchet --base-ref <sha>`): PR ایونٹس پر
`quality.yml` کے fast-gates اور `ci.yml` کا lint job، دونوں PR base SHA فراہم کرتے ہیں، base commit
کی پیمائش `git archive` export سے کی جاتی ہے، اور PR صرف اس وقت ناکام ہوتا ہے جب اس کی `open-sse → src` edge
تعداد `metrics.boundaryOpenSseToSrc` اور base پر موجود تعداد میں سے بڑی قدر سے تجاوز کرے۔ حد سے زیادہ
base drift کی اطلاع دی جاتی ہے (`base drift herdado`) لیکن اس سے کسی بے قصور PR کو کبھی سرخ نہیں کیا جاتا؛ push → main
مطلق حد برقرار رکھتا ہے، اور ایسا base SHA جسے resolve نہ کیا جا سکے، warning کے ساتھ اسی حد پر واپس آ جاتا ہے۔

`workflow_dispatch` runs، release-green sweep اور nightly headroom job کے پاس کوئی PR base
نہیں ہوتا اور وہ مطلق (global) موازنہ برقرار رکھتے ہیں۔ Coverage، duplication اور type-coverage فی الحال global
رہتے ہیں (ان کے tools کم لاگت میں per-file diff تیار نہیں کرتے) — یہی طریقہ اپنانے کے امیدوار ہیں۔

**v4.0 پر phase بند کرنا (LTS = پہلے سے زیادہ سخت، نہ کہ "معمول پر واپسی")**

1. خالص `release/v4.0.0` tip پر: ریکارڈ کے لیے `npm run quality:headroom --json`، پھر
   `npm run quality:ratchet -- --update`، `check:file-size --update`،
   `check:complexity-ratchets --update`، `check:dead-code --update`، ہر typecheck gate کا
   `--update` — ہر baseline ناپی گئی قدر تک کم ہو جاتا ہے۔
2. `quality-baseline.json` سے `_policy` حذف کریں (`--require-tighten` اور nightly
   banking کو دوبارہ فعال کرتا ہے)، `check-openapi-coverage.mjs` میں `THRESHOLD = 36` (یا اس سے زیادہ) بحال کریں۔
3. جہاں modularization مؤثر رہی ہو وہاں ناپی گئی قدر سے بھی زیادہ سخت کریں: file-size `cap` دوبارہ 1000
   (یا 800)، coverage floors میں +5، modularized packages کے لیے dead exports کی تعداد 0۔

## ریچیٹ بیس لائن (`quality-baseline.json`)

ریچیٹ انجن (`scripts/quality/check-quality-ratchet.mjs`)، `quality-baseline.json`
کو پڑھتا ہے اور اس کا تازہ جمع کردہ `quality-metrics.json` کے ساتھ موازنہ کرتا ہے۔ کوئی بھی میٹرک جو
اپنے ایپسیلون سے زیادہ تنزلی کا شکار ہو، بلڈ کو ناکام کر دیتا ہے۔

فی الحال ٹریک کیے جانے والے میٹرکس:

| میٹرک                 | سمت    | مطلب                                      |
| --------------------- | ------ | ----------------------------------------- |
| `eslintWarnings`      | `down` | ESLint انتباہات کی تعداد بڑھنی نہیں چاہیے |
| `coverage.statements` | `up`   | اسٹیٹمنٹ کوریج کم نہیں ہونی چاہیے         |
| `coverage.lines`      | `up`   | لائن کوریج کم نہیں ہونی چاہیے             |
| `coverage.functions`  | `up`   | فنکشن کوریج کم نہیں ہونی چاہیے            |
| `coverage.branches`   | `up`   | برانچ کوریج کم نہیں ہونی چاہیے            |

حقیقی بہتری کے بعد بیس لائن اپ ڈیٹ کرنے کے لیے:

```bash
npm run quality:ratchet -- --update
git add quality-baseline.json
```

`--update` فلیگ موجودہ پیمائش شدہ اقدار کو `quality-baseline.json` میں لکھتا ہے۔
اس فائل کو اس تبدیلی کے ساتھ کمٹ کریں جس نے میٹرک کو بہتر بنایا ہے۔ ایسی PR جو
بیس لائن اپ ڈیٹ کیے بغیر کسی میٹرک کو بہتر بنائے، اسے `--require-tighten` پکڑ لے گا (مرحلہ 6A.5،
نفاذ زیرِ التوا ہے)۔

### CodeQL ریچیٹ: ریفریش کا دورانیہ اور دستی ٹرگر

`check:codeql-ratchet` **ریپو کی حالت پڑھتا ہے، جسے ایک شیڈول کے مطابق ریفریش کیا جاتا ہے — ہر PR پر نہیں۔**
`gh api repos/diegosouzapw/OmniRoute/code-scanning/default-setup` یہ رپورٹ کرتا ہے:
`state: configured`، `schedule: weekly`: یہ GitHub کا ڈیفالٹ سیٹ اپ اسکین ہے، نہ کہ ہر پش پر ہونے والا
تجزیہ۔ نتیجہ: انتباہات کو درست کرنے والی PR مرج ہونے کے بعد بھی، ریچیٹ
اگلا طے شدہ اسکین چلنے تک پرانی، زیادہ تعداد پڑھتا رہتا ہے — لہٰذا یہ
ہر کھلی PR، بشمول درستگی کرنے والی PR کے اپنے فالو اپس، پر تنزلی رپورٹ کرتا ہے، جب تک اسکین تازہ حالت تک نہیں پہنچ جاتا۔

**دستی ریفریش**: `gh workflow run codeql.yml --ref release/vX.Y.Z` تجزیہ دوبارہ چلاتا ہے
اور چند منٹوں میں انتباہات دوبارہ شائع کر دیتا ہے۔ پہلے `.github/workflows/codeql.yml`
پڑھیں — اس کا ہیڈر وضاحت کرتا ہے کہ یہ صرف `workflow_dispatch` کے ذریعے چلتا ہے **کیونکہ یہ
GitHub کے "default setup" سے متصادم ہے** (`CodeQL analyses from advanced configurations cannot be
processed when the default setup is enabled`)۔ `push`/`pull_request`/
`schedule` ٹرگرز بحال کرنے کے لیے پہلے **مالک کی کارروائی** درکار ہے: Settings → Code security →
CodeQL: Default → Advanced۔ اس تبدیلی کے بغیر `schedule:` ٹرگر شامل نہ کریں — یہ
صرف ناکام رنز پیدا کرے گا۔

**تعداد کم ہونے کے بعد بیس لائن سخت کریں** — `node scripts/check/check-codeql-ratchet.mjs
--update` نئی پیمائش شدہ تعداد کو `quality-baseline.json` →
`metrics.codeqlAlerts.value` میں لکھتا ہے، تاکہ ریچیٹ خاموشی سے پرانی بالائی حد تک دوبارہ
تنزلی کی اجازت نہ دے۔ عملی مثال (2026-09-02/03): PR #12502 نے 7 حقیقی انتباہات درست کیے
(پیمائش شدہ کھلے انتباہات 13 → 6)؛ PR #12530 نے منجمد بیس لائن کو مطابقت کے لیے 11 → 6 تک سخت کیا؛
اس کے بعد باقی 6 انتباہات کو فی انتباہ جواز کے ساتھ مسترد کر کے کھلی تعداد 0 کر دی گئی۔

**مسترد کرنا آپریٹر کا فیصلہ ہے (سخت اصول #14)** — مسترد کرنے کے تبصرے میں تکنیکی
جواز درج کیے بغیر کبھی بھی CodeQL انتباہ مسترد نہ کریں: اپ اسٹریم پروٹوکول کی ضرورت کے لیے `won't fix`،
ٹیسٹ فکسچر کے لیے `used in tests`، اور ایسے سینیٹائزر کے لیے جسے CodeQL نہیں دیکھ سکتا `false positive`
(نظیر: `docs/security/ERROR_SANITIZATION.md`)۔

---

## ٹیسٹ دوبارہ چلانے کی پالیسی (WS5.4, v3.8.49)

دوبارہ چلانا ہر رنر کے لیے الگ ہے، کبھی بھی عالمی عمومی پالیسی نہیں — عمومی دوبارہ چلانے کی پالیسی حقیقی ریگریشنز کو
غیر مرئی فلیکس میں بدل دیتی ہے:

| رنر              | پالیسی                                                                                                                    | وجہ                                                                                                                              |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Playwright (e2e) | صرف CI میں `retries: 1`، اور `trace: on-first-retry` کے ساتھ                                                              | براؤزر/نیٹ ورک کی ٹائمنگ حقیقی طور پر غیر تعینیتی ہے؛ ٹریس کے ساتھ ایک بار دوبارہ چلانا فلیک کو قابلِ تشخیص آرٹیفیکٹ بنا دیتا ہے |
| Vitest           | کوئی عالمی دوبارہ کوشش نہیں۔ ثابت شدہ فلیکی ٹیسٹ کو واضح فی ٹیسٹ دوبارہ کوشش ملتی ہے (diff میں نمایاں، PR میں زیرِ جائزہ) | قرنطینہ فہرست کو repo میں رکھتا ہے، کبھی مبہم نہیں ہونے دیتا                                                                     |
| node:test (unit) | کبھی بھی دوبارہ کوشش نہیں                                                                                                 | فلیکی یونٹ ٹیسٹ خود ٹیسٹ میں ایک بگ ہے — اسے درست کریں، دوبارہ چلا کر قسمت نہ آزمائیں                                            |

فلیک ٹیلی میٹری دستیاب ہونے کے بعد ہدفی SLOs (WS5.2/5.3): فی ٹیسٹ <1% فلیک شرح
("ابھی درست کریں" کی حد)، فی پائپ لائن ≥95% کامیابی کی شرح۔ صنعتی حوالہ جاتی اقدار —
اپنی پیمائشوں کے مطابق دوبارہ کیلیبریٹ کریں۔

## ریلیز کی سطح پر ریچیٹ ڈرفٹ (WS5.5, v3.8.49)

جب کوئی ریچیٹ (فائل سائز، پیچیدگی، eslint انتباہات) خالص ریلیز
ٹِپ پر ریگریس ہو — یعنی مرجز کے **امتزاج** نے اسے ریگریس کیا ہو، اور کوئی ایک PR اپنی
برانچ پر اکیلے اس ریگریشن کو دوبارہ پیدا نہ کرے — تو اس کی اصلاح **ریلیز کیپٹن کی ذمہ داری ہے، ایک بار، ریلیز
برانچ پر**: extraction/refactor کو ترجیح دیں؛ صرف دستاویزی جواز کے اندراج کے ساتھ rebaseline کریں۔
امتزاجی ڈرفٹ کو کبھی بھی کسی معاون کے PR پر نہ ڈالیں، اور کبھی بھی فی PR rebaseline
نہ کریں (یہ حقیقی ریگریشنز کو چھپاتا ہے)۔ پہلے امتیاز کریں: یہ فرض کرنے سے پہلے کہ آپ کے PR نے
مسئلہ پیدا کیا ہے، ایک probe worktree میں خالص ٹِپ کے خلاف سرخ نتیجہ دوبارہ پیدا کریں۔

## ریچیٹ کی کمیوں کو محفوظ کرنا — تنزلی کی سمت (#8584)

ریچیٹ صرف نصف خودکار ہے، اور وہ بھی غلط نصف۔ حد کو **بڑھانا** ایک
دستی JSON ترمیم ہے جس میں دس سیکنڈ لگتے ہیں اور یہ سرخ PR کو بحال کرنے کا تیز ترین طریقہ ہے۔
حد کو **کم کرنے** کے لیے کسی کو `--update` چلانا اور نتیجہ commit کرنا پڑتا ہے — اور جب تک
`bank-ratchet-shrinks` جاب شامل نہیں ہوئی، کوئی workflow اسے نہیں چلاتا تھا۔ ناپا گیا نتیجہ
(2026-07-25): 18 منجمد فائلیں پہلے ہی نئی فائل کی 800 لائنوں والی حد پر یا اس سے کم تھیں، بدترین
132× پر (`src/shared/validation/schemas.ts`، 19 لائنوں کے لیے 2,523 کی حد)؛
پیچیدگی کی بالائی حد تقریباً 37 rebaseline نوٹس کے دوران `1794 → 2169` تک پہنچ گئی، جس میں ٹھیک ایک
کمی (−1) ہوئی؛ اور "اگلے دور میں `--update` کے ذریعے سخت کریں" 31 بار لکھا گیا اور
ایک بار اس پر عمل ہوا۔ جو حد اسے جائز بنانے والے کوڈ سے زیادہ دیر باقی رہے، وہ خاموشی سے ہر مکمل شدہ
تقسیمِ نو کو اس شخص کے لیے نمو کی گنجائش میں بدل دیتی ہے جو اگلی بار فائل میں ترمیم کرے۔

`nightly-release-green.yml` → جاب **`bank-ratchet-shrinks`** اس چکر کو مکمل کرتی ہے:

|               |                                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------ |
| چلتی ہے       | `schedule` (3×/دن) + `workflow_dispatch` — دانستہ طور پر **نہیں** `push`                                     |
| ناپتی ہے      | بلند ترین `release/vX.Y.Z`، وہی resolution + injection guard جو `release-green` میں ہے                       |
| لکھتی ہے      | `check:file-size --update` اور `check:complexity-ratchets --update` (دونوں ساخت کے لحاظ سے صرف کمی کرتے ہیں) |
| تصدیق کرتی ہے | `npm run check:ratchet-bank` (`scripts/quality/verify-ratchet-bank.mjs`)                                     |
| فراہم کرتی ہے | ریلیز برانچ کے خلاف ہمیشہ تازہ ایک PR — force-update شدہ، کبھی غیر ضروری تکرار نہیں                          |

محفوظ کرنا فی push کے بجائے بیچز میں کیا جاتا ہے کیونکہ اس کے لیے کم تاخیر کی کوئی ضرورت نہیں
(8 گھنٹوں کے اندر محفوظ کی گئی کمی قابلِ قبول ہے)، جبکہ فی merge چلانے سے merge مہمات کے دوران
PR برانچ بار بار دوبارہ بنتی اور ہر بار مکمل ESLint واک کی لاگت آتی۔ تشخیص
push (`release-green`) پر ہی رہتی ہے؛ صرف محفوظ کرنے کا عمل بیچز میں ہوتا ہے۔

### حفاظتی تصدیق کار

یہ جاب بغیر نگرانی کے baselines میں لکھتی ہے، اس لیے `verify-ratchet-bank.mjs` ہی اسے
قابلِ قبول بناتا ہے۔ یہ `--update` کے بعد کے tree کا `HEAD` کے ساتھ diff لیتا ہے اور **کسی بھی commit
کے وجود میں آنے سے پہلے جاب ختم کر دیتا ہے** — کوئی PR نہیں کھولتا — جب تک ہر تبدیلی ان میں سے کوئی ایک نہ ہو:

- `frozen` / `testFrozen` کی عددی قدر **کم** کی گئی ہو یا **ہٹائی** گئی ہو
- `complexity-baseline.json` → `count` **کم** کیا گیا ہو
- `quality-baseline.json` → `metrics.cognitiveComplexity.value` **کم** کیا گیا ہو

کوئی بھی دوسری چیز ناکام ہوتی ہے: عدد بڑھانا، اندراج شامل کرنا، `cap`/`testCap` تبدیل کرنا، یا
`_rebaseline_*` نوٹ حذف کرنا/دوبارہ لکھنا (یہ نوٹس اس امر کا آڈٹ ٹریل ہیں کہ ہر
بالائی حد کیوں موجود ہے اور فائل کے اندراجات والے اسی `frozen` آبجیکٹ میں محفوظ ہوتے ہیں)۔
جو bot حد بڑھا سکے، وہ موجودہ صورتِ حال سے قطعی طور پر بدتر ہوگا۔ ریگریشن
گارڈ: `tests/unit/verify-ratchet-bank.test.ts`۔

یہ جاب کبھی بھی `release/*` پر push نہیں کرتی — PR کو ایک انسان merge کرتا ہے، لہٰذا غلط پیمائش
بغیر جائزے کے شامل نہیں ہو سکتی۔

## الاؤ لسٹ پالیسی

ہر وہ گیٹ جو پہلے سے موجود خلاف ورزیوں پر ناکام نہیں ہو سکتا، ایک منجمد الاؤ لسٹ استعمال کرتا ہے
(مثلاً، `KNOWN_STALE_DOC_REFS`، `KNOWN_MISSING`، `KNOWN_RAW_SQL`)۔ پالیسی یہ ہے:

**بنیادی وجہ کو درست کریں؛ الاؤ لسٹ صرف اس وقت استعمال کریں جب خلاف ورزی پہلے سے موجود ہو اور
اسی PR میں درست نہ کی جا سکے۔**

الاؤ لسٹ میں کوئی اندراج شامل کرتے وقت:

1. جواز کے ساتھ ایک تبصرہ شامل کریں۔
2. ٹریکنگ ایشو کا حوالہ دیں (مثلاً، `// #3498 — فیز 2 کی خصوصیت، ابھی نافذ نہیں کی گئی`)۔
3. خلاف ورزی درست کرنے والے اسی PR میں اندراج ہٹا دیں — ایک فرسودہ اندراج جو اب
   کسی فعال خلاف ورزی کو نہیں دباتا، بذاتِ خود ایک نقص ہے (نافذ ہونے کے بعد 6A.3 stale-enforcement
   کسی یتیم الاؤ لسٹ اندراج پر گیٹ کو ناکام کر دے گا)۔

ٹیسٹس کو زیادہ تیزی سے پاس کرانے کے لیے الاؤ لسٹ میں اندراجات **شامل نہ کریں**۔ بڑھتی ہوئی
الاؤ لسٹ کے ساتھ سبز گیٹ معیار کا جھوٹا احساس دیتا ہے۔

### جب آپ کے PR پر کوئی گیٹ ناکام ہو

1. **گیٹ کا آؤٹ پٹ غور سے پڑھیں** — یہ آپ کو بالکل بتاتا ہے کہ کس فائل یا علامت نے
   اصول کی خلاف ورزی کی۔
2. **خلاف ورزی درست کریں** — زیادہ تر گیٹس قطعی فائل سسٹم چیکس ہیں جو کوڈ درست ہوتے ہی
   پاس ہو جاتے ہیں۔
3. **اگر خلاف ورزی پہلے سے موجود ہے** (یعنی، آپ نے اسے متعارف نہیں کرایا لیکن اب گیٹ
   اس کا احاطہ کرتا ہے): جواز کے تبصرے اور ٹریکنگ ایشو کے ساتھ الاؤ لسٹ میں ایک اندراج شامل کریں۔
4. **اگر گیٹ ratchet ہے** (کوریج، ESLint تنبیہات، تکرار، پیچیدگی):
   آپ کی تبدیلی نے میٹرک کو بدتر کر دیا ہے۔ بنیادی مسئلہ درست کریں، یا (شاذ و نادر) اگر تبدیلی
   دانستہ ہے اور میٹرک میں تنزلی قابلِ قبول ہے تو `npm run quality:ratchet -- --update`
   چلائیں — لیکن PR کی تفصیل میں وجہ درج کریں۔
5. **مشاورتی گیٹس** (`continue-on-error: true`) معلوماتی ہوتے ہیں — یہ
   مرج کو نہیں روکتے، لیکن CI خلاصے میں ظاہر ہوتے ہیں۔ پھر بھی انہیں درست کریں۔

---

## نیا گیٹ شامل کرنا

1. `scripts/check/check-<name>.mjs` (یا `.ts`) بنائیں۔ پالیسی گیٹس 0/1 کے ساتھ خارج ہوتے ہیں۔
   Ratchet طرز کے گیٹس `collect-metrics.mjs` کے ذریعے `quality-metrics.json` میں ایک میٹرک خارج کرتے ہیں۔
2. `package.json` میں `"check:<name>": "node scripts/check/check-<name>.mjs"` شامل کریں۔
3. اسے `.github/workflows/ci.yml` میں مناسب جاب کے تحت مربوط کریں
   (پالیسی → `lint` یا `docs-sync-strict`؛ ratchet → `quality-gate`)۔
4. اگر اس کی الاؤ لسٹ ہے، تو `scripts/check/lib/allowlist.mjs` سے
   `reportStaleEntries()` لاگو کریں تاکہ فرسودہ اندراجات خودکار طور پر شناخت ہو سکیں۔
5. گیٹ کی شناختی منطق کا احاطہ کرنے والا ٹیسٹ `tests/unit/build/` میں لکھیں۔
6. اس دستاویز کو اپ ڈیٹ کریں (متعلقہ جاب ٹیبل میں ایک قطار شامل کریں)۔

---

## ایجنٹ ٹولنگ: LSP-in-the-loop (اختیاری)

CI گیٹس کے علاوہ، OmniRoute ایک **اختیاری** `agent-lsp` اسکیفولڈ فراہم کرتا ہے
(پروجیکٹ سطح کی `.mcp.json`، Fase 7 Task 15)۔ کوڈنگ ایجنٹس کے لیے TypeScript لینگویج سرور
دستیاب کرنے کی خاطر `.mcp.json` بنائیں، تاکہ وہ کوڈ لکھنے سے **پہلے** علامات /
تشخیصی معلومات حل کریں — یہ `typecheck:core` کا compile-before-claim معاون ہے
جو "خود ساختہ علامت" کی خرابیوں کو ماخذ ہی پر کم کرتا ہے۔ اسے دانستہ طور پر
خودکار طور پر لوڈ نہیں کیا جاتا (آپ MCP↔LSP برج منتخب اور تصدیق کرتے ہیں)؛ کوئی خراب اندراج صرف
کنکشن کی خرابی لاگ کرتا ہے اور کبھی بھی سیشنز کو متاثر نہیں کرتا۔

---

## معقولیت سازی کا بیک لاگ (ROI جائزہ — مرحلہ 9 لہر 3)

اس فہرست کا 2026-06-17 کو `ci.yml` کے مقابل موازنہ کر کے تطبیق کی گئی (پچھلے ورژن میں
`audit:deps`، `check:tracked-artifacts`، `check:lockfile`، `check:licenses`،
`check:dead-code`، `check:cognitive-complexity`، `check:type-coverage`،
`check:codeql-ratchet`، `check:pr-evidence` شامل نہیں تھے)۔ تطبیق شدہ مجموعے کے ROI جائزے
نے معقولیت سازی کے درج ذیل امیدواروں کی نشاندہی کی۔ **انضمام محض میکانکی CI
تبدیلیاں ہیں؛ پلٹانا/حذف کرنا پالیسی فیصلے ہیں جو آپریٹر کے لیے محفوظ ہیں۔** ذیل میں سے کچھ بھی
ابھی لاگو نہیں کیا گیا۔

**اوپر یہ بھی دستاویزی شکل میں درج نہیں** (مشاورتی، کم سگنل): `docs-lint` جاب
(markdownlint + Vale، پوری جاب پر `continue-on-error`) اور علیحدہ اسکینر ورک فلوز
`semgrep.yml` / `codeql.yml` / `scorecard.yml`۔ `semgrepFindings: 0`
`quality-baseline.json` میں موجود ہے لیکن `ci.yml` میں کسی بلاکنگ ریچٹ سے منسلک نہیں — یہ میٹرک
فی الحال غیر مربوط ہے۔

### انضمام / نقل کا خاتمہ (میکانکی، کم خطرہ)

ہر امیدوار کی 2026-06-17 کو فعال گیٹ کی حالت کے مقابل توثیق کی گئی (اعتماد کریں مگر تصدیق بھی کریں)؛
کئی "واضح" انضمامات میں چھپا ہوا قرض سامنے آیا اور وہ **صاف ستھرے براہِ راست متبادل نہیں** ہیں۔

- **`check:docs-sync` دو بار چلتا ہے** — `lint` جاب میں علیحدہ طور پر اور دوبارہ `check:docs-all` (`docs-sync-strict`) اور husky pre-commit ہک کے اندر۔ ✅ **مکمل** — علیحدہ `lint` اجرا ہٹا دیا گیا۔
- **CVE اسکیننگ** — ❌ **صاف انضمام نہیں۔** `audit:deps` کسی بھی high/critical CVE پر قطعی طور پر ناکام ہو جاتا ہے؛ `check:vuln-ratchet` (osv) صرف بنیادی خط کے مقابل کسی _تنزلی_ پر ناکام ہوتا ہے (فی الحال 1 MODERATE)۔ معنویات مختلف ہیں — `audit:deps` حذف کرنے سے مطلق high/critical گیٹ ختم ہو جائے گا۔ دونوں برقرار رکھیں۔
- **چکر کی کھوج** — ✅ **مکمل** (#15159 G-01/G-02)۔ یہاں موجود پرانے متن نے `check:cycles` کو "سبز، منتخب" گیٹ کہا تھا اور اسے بلاکنگ رکھنے کا جواز یہ دیا تھا کہ `check:circular-deps` (dpdm) نے 91 چکروں کی اطلاع دی۔ وہ سبز حالت ایک **غلط سبز حالت** تھی: `check:cycles` نے 5 ذیلی ڈائریکٹریاں (450 فائلیں) اسکین کیں، صرف جامد `import|export … from` سے مطابقت کی، اور ہر `@/` اور `@omniroute/open-sse/` تخصیص کار کو خارج کر دیا، اس لیے یہ ان dynamic-import + alias چکروں کو نہیں دیکھ سکتا تھا جو ریپو میں غالب تھے۔ درست کر دیا گیا: گیٹ اب `src` + `open-sse` (5023 فائلیں) میں چلتا ہے، TypeScript AST سے تخصیص کار جمع کرتا ہے (لہٰذا `import("…")` شمار ہوتا ہے جبکہ ٹائپ پوزیشن میں `typeof import("…")` شمار نہیں ہوتا)، اور tsconfig `paths` کو حل کرتا ہے۔ اسے 0 نہیں بلکہ **14** چکر ملتے ہیں۔ چونکہ گیٹ PR میں پہلے سے موجود 14 چکروں کو درست نہیں کیا جا سکتا، اس لیے `check:cycles` اب ایک **ریچٹ** ہے (`--ratchet`، `quality-baseline.json` میں حد `metrics.cycles.value = 14`، `direction: down`) — یہ کسی بھی _تنزلی_ کو روکتا ہے اور تعداد صرف کم ہو سکتی ہے۔ CI میں `npm run check:cycles:ratchet` چلتا ہے۔ مرحلہ وار کمی **A-01** کے ساتھ آگے بڑھے گی۔ `check:circular-deps` (dpdm) ایک وسیع تر ثانوی رائے کے طور پر مشاورتی رہے گا۔
- **پیچیدگی** — ✅ **مکمل** (`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`): ایک ESLint واک، `ruleId` کے لحاظ سے شمار، تاکہ cyclomatic+max-lines اور cognitive بنیادی خطوط آزاد رہیں؛ انفرادی `check:complexity` / `check:cognitive-complexity` مقامی `--update` کے لیے برقرار ہیں۔
- **`/api` اینٹی ہیلوسینیشن** — ✅ **مکمل** (`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`): `src/app/api` کی ایک FS فہرست سازی، openapi-routes + docs-symbols اب بھی آزادانہ طور پر رپورٹ کرتے ہیں؛ انفرادی چیکس مقامی اجرا کے لیے برقرار ہیں۔
- **`check:node-runtime` 11 جابز میں چلتا ہے** — ⚠️ **کم ROI۔** ہر ایک الگ رنر ہے اور چیک <1s ہے؛ کل بچت ~10s ہے، جبکہ اس کے بدلے ہر جاب کا ایک سستا حفاظتی چیک ختم ہو جائے گا۔ اتنی تبدیلی کے قابل نہیں۔
- **CI lint پر `typecheck:noimplicit:core`** — ✅ **lint جاب سے ہٹا دیا گیا** (یہ مشاورتی `continue-on-error` تھا)؛ بلاکنگ ٹائپ سطح `typecheck:core` + `check:type-coverage` ہے۔ مقامی اسکرپٹ برقرار رکھا گیا۔

### پلٹائیں / فیصلہ کریں (آپریٹر پالیسی)

- `check:openapi-security-tiers` (مشاورتی) — ❌ **صاف طور پر پلٹنے کے قابل نہیں۔** یہ 0 کے ساتھ خارج ہوتا ہے لیکن خبردار کرتا ہے کہ `LOCAL_ONLY_API_PREFIXES` کے تحت کئی `traffic-inspector` روٹس میں `x-loopback-only: true` تشریح موجود نہیں۔ اسے نافذ کرنے کے لیے پہلے `openapi.yaml` میں یہ تشریحات شامل کرنا ضروری ہے۔
- `typecheck:noimplicit:core` (مشاورتی) — بڑی حد تک بلاکنگ `check:type-coverage` ریچٹ میں شامل ہے۔ اسے ریچٹ میں تبدیل کریں یا فالتو دوسرے `tsc` پاس کو حذف کریں۔
- `test:vitest:ui` (اب **بلاکنگ**) — پہلے سے موجود ناکامیاں `vitest.config.ts` میں `// #8618` ٹریکنگ تبصروں کے ساتھ واضح طور پر خارج کی گئی ہیں؛ نئی ناکامیاں جاب کو ناکام کر دیتی ہیں۔
- `check:secrets` (gitleaks، 3 دستاویزی false-positives پر منجمد بلاکنگ ریچٹ) — 0 تک پہنچنے کے لیے ان 3 کو allowlist کریں، یا اسے مشاورتی درجے پر لے جائیں۔ یہ GitHub کی مقامی secret-scanning + `check:public-creds` سے متجاوز ہے۔
- `check:pr-evidence` (بلاکنگ، PR-body نثر میں grep کرتا ہے) — false-positive کا زیادہ خطرہ؛ اسے حذف کرنے سے Hard Rule #18 کا نفاذ کمزور ہو جائے گا، اس لیے یہ حقیقی پالیسی فیصلہ ہے۔
- `semgrep` (مشاورتی علیحدہ ورک فلو) — OWASP خاندانوں کے لیے CodeQL سے متجاوز ہے؛ اس کے بنیادی خط کو کسی ریچٹ سے منسلک کریں یا حذف کر دیں۔

---

## متعلقہ دستاویزات

- سپلائی چین (ماخذ، SBOM، Trivy، Scorecard): [`docs/security/SUPPLY_CHAIN.md`](../security/SUPPLY_CHAIN.md)

#### `check-key-completeness` — کلیدی مجموعوں کی یکسانیت کا گیٹ

`scripts/i18n/check-key-completeness.mjs` (`npm run i18n:check-keys`، جاب `i18n-ui-coverage`)۔
ہر `src/i18n/messages/<locale>.json` کے آخری درجے کے کلیدی مجموعے کا `en.json` سے موازنہ کرتا ہے اور
کسی بھی غائب یا اضافی آخری کلید پر ناکام ہو جاتا ہے، چاہے وہ کلید کب بھی شامل کی گئی ہو۔ `__MISSING__:`
پلیس ہولڈرز کو موجود شمار کیا جاتا ہے (ان کا مواد تناسب والے گیٹ کا معاملہ ہے)۔ یہ اختلاف پر مبنی/فی صد والے
دونوں گیٹس کا قطعی تکملہ ہے: `check-ui-keys-coverage` ہر لوکیل کے لیے 80 % کی کم از کم حد نافذ کرتا ہے
(~13,000 میں سے 43 غائب کلیدیں بھی 99.7 % دکھاتی ہیں)، جبکہ `check-new-key-coverage` صرف ان کلیدوں کا
جائزہ لیتا ہے جو کوئی PR، `en.json` میں شامل کرتا ہے۔ لوکیل بیچ اس دن کے `en.json` سے تیار کیا جاتا ہے
جس دن اس کی برانچ بنائی جاتی ہے، اور کئی دن تک ترجمہ جاری رہتا ہے جبکہ بیس میں نئی کلیدیں شامل ہوتی رہتی ہیں؛
بیچ PR خود کوئی کلید شامل نہیں کرتا، اس لیے جب بیچ 1 (#13044) نو لوکیلز میں 43 کلیدوں کی کمی کے ساتھ
اور بیچ 2 (#13660) آٹھ لوکیلز میں 10 کلیدوں کی کمی کے ساتھ ضم ہوئے (2026-09-15)، تو دونوں ہم رتبہ گیٹس
خاموش رہے۔ ناکامی کو
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers` سے درست کریں؛ ایک `extra`
آخری کلید کا مطلب ہے کہ ماخذ نے اسے حذف کر دیا ہے — اسے لوکیل سے بھی حذف کریں۔ `--warn` ناکام ہوئے بغیر
رپورٹ کرتا ہے۔ `--catalog=cli` یہی موازنہ `bin/cli/locales` پر چلاتا ہے
(`npm run i18n:check-keys:cli`)؛ دونوں مراحل جاب `i18n-ui-coverage` میں موجود ہیں۔

#### `check-new-key-coverage` — نئی کلید کا i18n گیٹ

`check-ui-value-drift` کا ہم رتبہ۔ وہ ایسی انگریزی قدر پکڑتا ہے جسے **دوبارہ لکھا گیا**
ہو مگر اس کے تراجم پیچھے رہ گئے ہوں؛ یہ ایسی انگریزی کلید پکڑتا ہے جسے **شامل کیا گیا**
ہو مگر بعض لوکیلز کو کبھی نہ ملی ہو۔

`check-ui-keys-coverage` اس صورت کو نہیں دیکھ سکتا: یہ ہر لوکیل کے لیے فی صد کی کم از کم حد نافذ کرتا ہے،
اور ~13,000 آخری کلیدوں میں سے گیارہ غائب کلیدیں بھی کوریج کو 99.9% پر رکھتی ہیں۔ فی زبان فی صد
یہ ظاہر نہیں کر سکتا کہ "یہ فیچر بغیر ترجمے کے جاری ہوا" — کسی نئے لوکیل میں ایک پورا فیچر بغیر کسی
متن کے شامل ہو سکتا ہے اور پھر بھی یہ عدد تبدیل نہیں ہوتا۔

جس واقعے کو یہ محفوظ کرتا ہے: Orchestration Canvas کے Phase 3 نے اپنی گیارہ کلیدوں کا ترجمہ ان
42 لوکیلز میں کیا جو اس وقت موجود تھے۔ چند گھنٹے بعد EU زبانوں کے بیچ (#13044) نے ریپو کو
51 لوکیلز تک پہنچا دیا، اور نو نئے لوکیلز (`el`، `et`، `ga`، `hr`، `lt`، `lv`، `mt`، `sl`، `sr`) کو
وہ کلیدیں کبھی نہیں ملیں۔ `deepMergeFallback` غائب کلید کی جگہ انگریزی استعمال کرتا ہے، اس لیے
خرابی کی صورت خالی UI کے بجائے غیر مترجم UI تھی — حقیقی، اور ساختی طور پر خاموش۔

اپنے ہم رتبہ کی طرح یہ بھی **اختلاف سے آگاہ** ہے، اور مرج بیس پر موجود انگریزی کا ورکنگ ٹری سے
موازنہ کرتا ہے، اس لیے پہلے سے موجود خلا منجمد رہتے ہیں اور گیٹ کو فعال کرنے کے لیے کسی منتقلی کی
ضرورت نہیں پڑی۔

**ایک `__MISSING__:<english>` مارکر اسے مطمئن نہیں کرتا (2026-09-17 سے)۔** پہلے یہ دستاویزی
التوا کا طریقہ تھا — رن ٹائم درست انگریزی پر واپس آ جاتا ہے — یہاں تک کہ 2026-09-16 کو آٹھ فیچر PRs
نے 61 کلیدیں شامل کیں اور ترجمہ کرنے کے بجائے تمام 65 لوکیلز میں مارکر لگا دیا: اس گیٹ نے ہر ایک کو
قبول کر لیا، کسی چیز نے PRs کو نہیں روکا، اور پھر بلاک کرنے والا حقیقی ترجمے کے تناسب کا گیٹ ریلیز ٹِپ
پر سب کے لیے ناکام ہو گیا (pt-BR 3.2 % > 2.5 % + 0.5)۔ اب مارکر کو غائب ترجمہ سمجھا جاتا ہے۔
ناکامی کو
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers --batch-size=40` سے،
یا تمام لوکیلز کو متوازی طور پر `npm run i18n:translate-new-keys`
(`scripts/i18n/translate-new-keys.sh`، detached حالت میں محفوظ، `OMNIROUTE_TRANSLATION_*` env کے
بغیر شروع ہونے سے انکار کرتا ہے) کے ذریعے درست کریں۔ جو کلید لازماً انگریزی میں رہنی چاہیے
(کسی پروڈکٹ/انجن/فلیگ کا مقررہ نام)، اسے `scripts/i18n/untranslatable-keys.json` میں ہونا چاہیے،
کبھی بھی مارکر کے پیچھے نہیں۔ `vi` مارکرز پر مکمل پابندی عائد کرتا ہے
(`tests/unit/i18n-vi-completeness.test.ts`)۔

#### `check-vitest-exclusions` — مؤخر شدہ ٹیسٹ کا گیٹ

`vitest.config.ts` کی `exclude` فہرست میں موجود فائل ایسا ٹیسٹ ہے جو چلتا نہیں، مگر ٹری پڑھنے والے کو
وہ کوریج کی طرح نظر آتا ہے۔ باسٹھ فائلیں اس تبصرے کے پیچھے جمع ہو گئیں:
`// #8618 — پہلے سے موجود ناکامی؛ درست ہونے پر یہ اخراج ہٹا دیں`۔ ایشو #8618 کو
2026-08-11 کو بند کر دیا گیا، جبکہ اس کی زیرِ نگرانی فہرست 45 اندراجات سے بڑھ کر 62 ہو گئی، اور ہر
نئے اندراج کو ایک بند شدہ ایشو کی طرف اشارہ کرنے والا تبصرہ ورثے میں ملا۔ جب بالآخر فہرست کی ہر فائل
کو الگ الگ ناپا گیا (#13204)، تو **62 میں سے 51 موجودہ ٹری پر ماخذ میں کسی تبدیلی کے بغیر کامیاب ہوئیں**۔

گیٹ کا تقاضا ہے کہ حقیقی فائل پر منتج ہونے والا ہر اخراج (a) کسی ٹریکنگ ایشو کا نام دے اور
(b) اپنی پیمائش شدہ حالت کے ساتھ `config/quality/vitest-exclusions.json` میں موجود ہو، تاکہ نیا اخراج
شامل کرنا 60 اندراجات والی صف میں محض ایک اور سطر کے بجائے مخصوص فائل میں قابلِ جائزہ اختلاف ہو۔
یہ دانستہ طور پر خارج شدہ ٹیسٹس دوبارہ نہیں چلاتا — اس میں ~10 منٹ لگتے ہیں اور یہ کام دورانی جاب
کا ہے؛ انوینٹری ریکارڈ کرتی ہے کہ ہر ایک کی آخری پیمائش کب ہوئی تھی۔
