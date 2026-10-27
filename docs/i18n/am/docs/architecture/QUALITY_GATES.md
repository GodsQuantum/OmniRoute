# Quality Gates Reference (አማርኛ)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/QUALITY_GATES.md) · 🇸🇦 [ar](../../../ar/docs/architecture/QUALITY_GATES.md) · 🇦🇿 [az](../../../az/docs/architecture/QUALITY_GATES.md) · 🇧🇬 [bg](../../../bg/docs/architecture/QUALITY_GATES.md) · 🇧🇩 [bn](../../../bn/docs/architecture/QUALITY_GATES.md) · 🇧🇦 [bs](../../../bs/docs/architecture/QUALITY_GATES.md) · 🇨🇿 [cs](../../../cs/docs/architecture/QUALITY_GATES.md) · 🇩🇰 [da](../../../da/docs/architecture/QUALITY_GATES.md) · 🇩🇪 [de](../../../de/docs/architecture/QUALITY_GATES.md) · 🇬🇷 [el](../../../el/docs/architecture/QUALITY_GATES.md) · 🇪🇸 [es](../../../es/docs/architecture/QUALITY_GATES.md) · 🇪🇪 [et](../../../et/docs/architecture/QUALITY_GATES.md) · 🇮🇷 [fa](../../../fa/docs/architecture/QUALITY_GATES.md) · 🇫🇮 [fi](../../../fi/docs/architecture/QUALITY_GATES.md) · 🇫🇷 [fr](../../../fr/docs/architecture/QUALITY_GATES.md) · 🇮🇪 [ga](../../../ga/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [gu](../../../gu/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ha](../../../ha/docs/architecture/QUALITY_GATES.md) · 🇮🇱 [he](../../../he/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [hi](../../../hi/docs/architecture/QUALITY_GATES.md) · 🇭🇷 [hr](../../../hr/docs/architecture/QUALITY_GATES.md) · 🇭🇺 [hu](../../../hu/docs/architecture/QUALITY_GATES.md) · 🇦🇲 [hy](../../../hy/docs/architecture/QUALITY_GATES.md) · 🇮🇩 [id](../../../id/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ig](../../../ig/docs/architecture/QUALITY_GATES.md) · 🇮🇹 [it](../../../it/docs/architecture/QUALITY_GATES.md) · 🇯🇵 [ja](../../../ja/docs/architecture/QUALITY_GATES.md) · 🇬🇪 [ka](../../../ka/docs/architecture/QUALITY_GATES.md) · 🇰🇭 [km](../../../km/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [kn](../../../kn/docs/architecture/QUALITY_GATES.md) · 🇰🇷 [ko](../../../ko/docs/architecture/QUALITY_GATES.md) · 🇱🇹 [lt](../../../lt/docs/architecture/QUALITY_GATES.md) · 🇱🇻 [lv](../../../lv/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ml](../../../ml/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [mr](../../../mr/docs/architecture/QUALITY_GATES.md) · 🇲🇾 [ms](../../../ms/docs/architecture/QUALITY_GATES.md) · 🇲🇹 [mt](../../../mt/docs/architecture/QUALITY_GATES.md) · 🇲🇲 [my](../../../my/docs/architecture/QUALITY_GATES.md) · 🇳🇵 [ne](../../../ne/docs/architecture/QUALITY_GATES.md) · 🇳🇱 [nl](../../../nl/docs/architecture/QUALITY_GATES.md) · 🇳🇴 [no](../../../no/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [or](../../../or/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [pa](../../../pa/docs/architecture/QUALITY_GATES.md) · 🇵🇭 [phi](../../../phi/docs/architecture/QUALITY_GATES.md) · 🇵🇱 [pl](../../../pl/docs/architecture/QUALITY_GATES.md) · 🇵🇹 [pt](../../../pt/docs/architecture/QUALITY_GATES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/QUALITY_GATES.md) · 🇷🇴 [ro](../../../ro/docs/architecture/QUALITY_GATES.md) · 🇷🇺 [ru](../../../ru/docs/architecture/QUALITY_GATES.md) · 🇱🇰 [si](../../../si/docs/architecture/QUALITY_GATES.md) · 🇸🇰 [sk](../../../sk/docs/architecture/QUALITY_GATES.md) · 🇸🇮 [sl](../../../sl/docs/architecture/QUALITY_GATES.md) · 🇷🇸 [sr](../../../sr/docs/architecture/QUALITY_GATES.md) · 🇸🇪 [sv](../../../sv/docs/architecture/QUALITY_GATES.md) · 🇰🇪 [sw](../../../sw/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ta](../../../ta/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [te](../../../te/docs/architecture/QUALITY_GATES.md) · 🇹🇭 [th](../../../th/docs/architecture/QUALITY_GATES.md) · 🇹🇷 [tr](../../../tr/docs/architecture/QUALITY_GATES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/QUALITY_GATES.md) · 🇵🇰 [ur](../../../ur/docs/architecture/QUALITY_GATES.md) · 🇺🇿 [uz](../../../uz/docs/architecture/QUALITY_GATES.md) · 🇻🇳 [vi](../../../vi/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [yo](../../../yo/docs/architecture/QUALITY_GATES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/QUALITY_GATES.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/QUALITY_GATES.md)

---

ይህ ሰነድ በOmniRoute ውስጥ ላሉ ሁሉም የCI ጥራት መግቢያዎች ዋና ማጣቀሻ ነው።
እያንዳንዱን መግቢያ፣ ምን እንደሚያረጋግጥ፣ በየትኛው የCI ሥራ ውስጥ እንደሚሠራ፣
የratchet መነሻ መስመር ወይም የማለፍ/የመውደቅ ፖሊሲ ይጠቀም እንደሆነ፣ እንዲሁም ግንባታውን የሚያግድ ወይም የምክር ብቻ እንደሆነ ይገልጻል።

ለአጭር ማጠቃለያ እና ለፈቃድ ዝርዝር ፖሊሲው፣ በ`AGENTS.md` ውስጥ ያለውን "የጥራት መግቢያዎች እና Ratchets" ክፍል ይመልከቱ።
ለወሳኝ ግምገማው፣ ለብስለት ምደባው፣ እና ከመሣሪያ ነፃ ለሆነው
የተመሳሳይ ሥርዓት ድግግሞሽ ዕቅድ፣
[የጥራት መግቢያ መመሪያ](../ops/QUALITY_GATE_PLAYBOOK.md)ን ይመልከቱ።

---

## የጌት ዝርዝር እና የአፈጻጸም መገለጫዎች

### የእጩ መቀበያ

የCI እና የQuality Gates ወርክፍሎዎች እያንዳንዳቸው የተረጋጋ ውሣኔ ይለቅቃሉ፦ `Gate / CI` እና `Gate / Quality`። በስሪት የተደራጀው የእነሱ የመቀበያ ፖሊሲ እያንዳንዱን የዋይታ ሥራ እንደ አስፈላጊ ወይም አማካሪ ይዘረዝራል። ተግባራዊ የሆነ አስፈላጊ ሥራ መሳካት አለበት፦ የጎደለ፣ የተሰረዘ፣ የተዘለለ፣ በመጠባበቅ ላይ ያለ እና ያልታወቀ ውጤቶች PASS መመስረት አይችሉም። ትክክለኛ የdocs-only ወይም catalog-only ምደባ የኮድ መስመርን ተግባራዊ ያልሆነ ማድረግ ይችላል፤ ረቂቅ PR የተቀበለ እጩ አይደለም። የ`hotfix` መለያ ማስረጃን አይቀርም።

ሁለቱም ወርክፍሎዎች ወደ main/release ቅርንጫፎች የሚከፈቱ PR-ዎችን፣ ወደ `main` የሚደረጉ ግፊቶችን፣ በእጅ መላክን እና የmerge-group ክስተቶችን ይሸፍናሉ። ግፊት፣ መላክ እና merge-group ሙሉውን ምርጫ ያስኬዳሉ። ወደ `release/**` የሚደረጉ ግፊቶች አይጀምሯቸውም (2026-10-18)፦ እያንዳንዱ ለውጥ ማትሪክሱን በPR-ው ላይ አስቀድሞ አሂዷል እና የተዋሃደው ጥምረት የRelease-Green ሥራ ነው (`docs/ops/RUNNER_BOX.md` → Hosted lane)። Fork-ዎች እና merge group-ዎች በሌላ ጊዜ self-hosted ራነሮችን የሚመርጡ ሥራዎች hosted ራነሮችን ይጠቀማሉ፤ በቂ hosted አቅም ከrollout በፊት መረጋገጥ አለበት።

እያንዳንዱ የJSON ደረሰኝ የተመረጠውን (checked-out) SHA፣ የወርክፍሎው ሩጫ እና ሙከራ ይለያል። CLI የcheckout/event SHA አለመዛመድን ውድቅ ያደርጋል። የወርክፍሎው ሙከራዎች የፖሊሲ አባልነትን ከውሣኔ ሥራው `needs` ዝርዝር ጋር ያገናኛሉ ስለዚህ አዲስ ወይም የተወገደ መስመር ዝም ብሎ መጥፋት አይችልም። ደረሰኞቹ የራሳቸውን ወርክፍሎው ይሸፍናሉ፣ ሕትመትን፣ ስርጭትን (deployment)፣ ወይም የአሁኑን አማካሪ ስካነር ውስጣዊ ክፍሎች አይሸፍኑም። ሁለቱንም የምርመራ ስሞች በbranch ህጎች ውስጥ ማንቃት ራሱ የቆመ የአስተዳደር ለውጥ ነው፤ እነዚህን ሥራዎች መጨመር በራሱ branchን አይጠብቅም።

### የስታቲክ ስካን ዝርዝር

በስሪት የተደራጀው የnpm-alias ዝርዝር እና የስታቲክ-ስካን አባልነት በ`config/quality/gate-manifest.json` ውስጥ ናቸው። የስክሪፕት ስሞችን እና ትክክለኛ ትዕዛዞችን ከ`package.json` ጋር ለማረጋገጥ `npm run check:gate-manifest` ያሂዱ፤ ጭማሪዎች፣ ማስወገዶች እና የትዕዛዝ ፍልሰት የአካባቢ hookን እና በCI ውስጥ ያሉትን የለውጥ-ምደባ ሥራዎች ያሳጣሉ። Alias የወርክፍሎው ሥራ፣ የማትሪክስ ምሳሌ ወይም የሙከራ ጉዳይ አይደለም፦ እነዚህ ቆጠራዎች እርስ በርስ እንደሚተካካቀሩ መቅረብ የለባቸውም።

የተመረጡትን aliases ሳያስፈጽሟቸው ለመፈተሽ `npm run quality:scan -- --list` ወይም `npm run quality:scan:fast -- --list` ይጠቀሙ። ራነሩ የnpm መግቢያ ነጥብን ይጠራል፣ ስለዚህ runtime-ው (ተዋቅሮበት ቦታ Bun ጨምሮ) ይጠበቃል። Manifest-ው ከእነዚያ መገለጫዎች ውጭ ያሉትን aliases እንደ ለብቻቸው የተጠሩ ይመዘግባል፣ እና የጥገና ትዕዛዞች በread-only ስካን መገለጫዎች ውስጥ ተከልክለዋል።

እነዚህ መገለጫዎች የስታቲክ ስካኑን ብቻ ይሸፍናሉ። የምርት ሙከራዎችን፣ ሽፋንን፣ ማሸጊያን፣ ውጫዊ ምርመራዎችን ወይም የእጩን ሙሉ የተለቀቀ ተቀባይነት አያረጋግጡም። የወርክፍሎው መቀበያ የተያያዙትን `config/quality/admission-policy.json` እና `scripts/quality/admission-verdict.mjs` ይጠቀማል። የRelease-observer መገለጫዎች የተለዩ ይቆያሉ፤ ተግባራዊ የሆኑትን ምርመራዎቻቸውን እና ደረሰኞቻቸውን በራሳቸው ይፈትሹ። ከታች ያለው የጽሑፍ ዝርዝር ማጣቀሻ ነው፣ አንድ ጌት በእውነት እንደ ሰራ ማስረጃ አይደለም።

ስክሪፕቶች በ`scripts/check/` (የፖሊሲ ጌቶች) እና በ`scripts/quality/` (የratchet ሞተር) ስር ናቸው። የCI እውነት ምንጭ `.github/workflows/ci.yml` ነው።

### የRelease PR ፈጣን-መንገድ (`quality.yml`)

`.github/workflows/quality.yml` CIን በmain/release PR-ዎች፣ ወደ `main` ግፊቶች፣ መላክ እና merge group-ዎች ላይ ይተካል። PR-ዎች በመንገድ-ተጣሩ ፈጣን ምርመራዎችን ይጠቀማሉ። በቋሚነት የተሰናከለው የተባዛ build ተወግዷል፤ እውነተኛው የbuild/package/boot ምርመራዎች በCI ውስጥ ይቆያሉ። የዩኒት ስዊት እና vitest በCI ውስጥ ብቻ ይሰራሉ (`Unit Tests (N/8)`፣ `Vitest`)፦ ቀዳማዊት `Unit Tests fast-path` እና `Vitest (fast-path)` ሥራዎች CI በrelease PR-ዎች ላይ መስራት ከጀመረ በኋላ ተመሳሳይ ትዕዛዞችን በእያንዳንዱ PR ላይ ይደግሙ ነበር፣ እና በ2026-10-26 ተወግደዋል።

| ሥራ                                               | ወሰን                                                                                                                                           | ከልካይ             |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| `Docs Gates (fast-path)`                         | Docs/code PR-ዎች፤ API docs ማጣቀሻዎች እና docs-all                                                                                                  | አዎ               |
| `Fast Quality Gates`                             | የኮድ PR-ዎች፤ ስታቲክ ምርመራዎች፣ typecheck፣ dashboard typecheck፣ የተጎዱ የዩኒት ሙከራዎች                                                                       | አዎ               |
| `Forgotten sibling tests`                        | የኮድ PR-ዎች፤ የተለወጡ ሞጁሎች ወደ ስታቲክ ተጠቃሚዎች እና የእጩ ወንድም ሙከራዎች ተከትለዋል፤ barrel እና dynamic-import መንገዶች ከተጠቀሱ የallowlist ልዩነቶች ጋር እንደ አማካሪ ምርመራዎች ይዘግባሉ | **አማካሪ**         |
| `No new ESLint warnings`                         | የኮድ PR-ዎች፤ ማጥፊያዎችን የሚገነዘብ lint ጥበቃ                                                                                                            | አዎ፣ fork-ዎችን ጨምሮ |
| `Merge integrity (changelog + generated skills)` | ረቂቅ-ያልሆኑ PR-ዎች፤ changelog እና የተፈጠሩ skills ማመሳሰል                                                                                               | አዎ፣ fork-ዎችን ጨምሮ |

#### የተረሱ ወንድም ሙከራዎች ሪፖርት

`npm run check:forgotten-sibling-tests` ከሙከራ-ተጽዕኖ ካርታው በስተጀርባ ያለውን የimport ፈታኝ እንደገና ይጠቀማል። ለእያንዳንዱ የተለወጠ የምርት ሞጁል፣ የእጩ ሙከራው ከpull-request diff ላይ ሲጎድል የተወሰኑ `changed module/symbol -> static consumer -> candidate sibling test` ሰንሰለቶችን ያመለክታል። የMarkdown ማጠቃለያው እና የJSON ውጤት ከማንኛውም ከልካይ rollout በፊት ለካሊብሬሽን እንደ `forgotten-sibling-tests` የወርክፍሎው አርቲፋክት ይቆያሉ።

Barrel re-exports እና dynamic imports የresolution ምርመራዎች ብቻ ናቸው፤ ምንም ማግድ (blocking finding) አይፈጥሩም። የተገመገሙ ልዩ ሁኔታዎች በ`config/quality/forgotten-sibling-allowlist.json` ውስጥ ናቸው። እያንዳንዱ ግቤት ሸማቹን (consumer) እና candidate ሙከራውን በስም መጥራት አለበት፣ የተወሰነ ምክንያት መስጠት አለበት፣ እና የGitHub issue ወይም pull request መጣበስ አለበት። ትክክል ያልሆኑ ግቤቶች በዝግ ሁኔታ ይወድቃሉ (fail closed)። ልዩ ሁኔታዎች የተሰረዘ candidate ሙከራን ወይም `.skip`/`.todo` የሚጨምር diffን መደበቅ አይችሉም፤ የassertion መዳካም እና ሌሎች የመደበቅ (masking) ተግባራት በራሱ በሚያግደው `check:test-masking` gate ቁጥጥር ስር ይቆያሉ።

### ስራ: `lint`

ወደ `main` በሚሆን በየPR ላይ ይሰራል። ከወደቀ mergeን ያግዳል።

| ስክሪፕት (`npm run ...`)             | የሚያረጋግጠው                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | ማግድ                                  |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| `check:node-runtime`              | የNode.js ስሪቱ በሚደገፈው ክልል ውስጥ መሆኑ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | አዎ                                   |
| `check:cycles`                    | በመላው `src/` + `open-sse/` ውስጥ ዑደት የሚፈጥሩ imports (AST-ተኮር፣ tsconfig `paths` የተፈቱ)። ቀላሉ (bare) ማንኛውም ዑደት ሲኖር ኮድ 1 ያወጣል (ከ#15281 ጀምሮ fail-closed) እና SCCዎችን ይዘረዝራል። `check:cycles:ratchet` (CI የሚያሄደው) ቆጠራው በ`quality-baseline.json` ውስጥ ያለውን `metrics.cycles` ወታወር ሲያልፍ ያግዳል — በአሁኑ ጊዜ 14፣ `direction: down`፣ ስለዚህ መቀነስ ብቻ ይችላል (#15159 G-01/G-02)                                                                                                                                                                                                                                                                                                                                                                          | አዎ (ratchet)                         |
| `check:boundary`                  | የ`open-sse → src` ተያያዥነት (coupling)፦ ከengine ወደ መተግበሪያው ልዩ ልዩ ፋይል-ወደ-ፋይል imports (`scripts/quality/measure-boundary.mjs`፤ የጠርዞቹ ዝርዝር የv4 core/module-split ማሻሻያ ቀሪ ስራ ነው)። ቀላል = የምክር ሪፖርት (ከ`quality:boundary` ጋር አንድ አይነት)። `check:boundary:ratchet` (CI የሚያሄደው፣ እንዲሁም በ`quality.yml` fast-gates ratchet ዑደት ውስጥ የሚገኝ) ቆጠራው በ`quality-baseline.json` ውስጥ ያለውን `metrics.boundaryOpenSseToSrc` ወታወር ሲያልፍ ያግዳል — በተለካው 771 ተጀምሮበታል (seeded)፣ `direction: down`፤ `--update` ያወድቃል ብቻ፤ በPRዎች ላይ base-ተመሰረተ ነው (`--base-ref`፣ ከዚህ በታች ይመልከቱ)                                                                                                                                                                                  | አዎ (ratchet)                         |
| `check:route-validation:t06`      | Zod schemas በሁሉም routes ላይ መኖራቸው (የTier 6 ፖሊሲ)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | አዎ                                   |
| `check:any-budget:t11`            | የ`@ts-expect-error // any` ቆጠራ በጀት አያልፍም (ደረጃ 11 ራትሸት)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | አዎ                                   |
| `check:provider-consistency`      | እያንዳንዱ በ`providers.ts` ውስጥ ያለ አቅራቢ በ`providerRegistry.ts` ውስጥ ተመሳሳይ ግቤት አለው (እና ተቃራኒውም፣ በፍቃድ-ዝርዝሩ ገደብ ውስጥ)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | አዎ                                   |
| `check:model-lifecycle`           | በእጅ የሚጠበቁት ሦስቱ የማዘዋወጫ ሠንጠረዦች ከቼክ-ኢን ከተደረገው የሕይወት-ዑደት ስናፕሾት (#11503) ጋር ተጣጣሚ ይሆናሉ፦ `FITNESS_TABLE` (`taskFitness.ts`) `REGISTRY` ማዘዋወጥ የሚችል ምንም የተወገደ መታወቂያ ነጥብ አይሰጥም፤ የ`BUILT_IN_ALIASES` ዒላማ ሁሉ በ`REGISTRY` ውስጥ ይገኛል እና በተወገዱት-መታወቂያ ስናፕሾት ውስጥ የለም፤ በ`REGISTRY` ውስጥ ገና የሚገኝ የተወገደ መታወቂያ ሁሉ ወደፊት ተልኮአል ወይም በ`allowedRetiredInCatalog` ውስጥ ተዘርዝሯል፤ እና ምንም የ`DEFAULT_DEGRADATION_MAP` ምንጭ ወይም ዒላማ በዚያ ስናፕሾት ውስጥ የተወገደ አይታይም። ይህ አንድ ሞዴል በአሁኑ ጊዜ ከሕያው አፕስትሪም እየተሰጠ መሆኑን አያረጋግጥም። ኦፍላይን — ከ`config/quality/model-lifecycle.json` ጋር ያወዳድራል፣ በእጅ በ`npm run quality:refresh-model-lifecycle` የሚታደስ (ኔትወርክ ያስፈልጋል፤ ወደ CI አልተገናኘም)። `allowedRetiredInCatalog` የማቃጠል-መቀነሻ ራትሸት ነው፦ ግቤት የሚጨምረው ከክትትል-ጉዳይ (tracking issue) ጋር ብቻ ነው። | አዎ                                   |
| `check:fetch-targets`             | በደንበኛ-ጎን `src/` ውስጥ ያለ እያንዳንዱ `fetch("/api/...")` ጥሪ ወደ እውነተኛ `route.ts` ይፈታል                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | አዎ                                   |
| `check:deps`                      | በሪፖው ውስጥ ባሉት ሁሉም `package.json` ፋይሎች `npm install` ሊደረግባቸው የሚችሉ ጥገኞች ሁሉ በ`dependency-allowlist.json` ውስጥ ናቸው፤ አዳዲስ ስሪት-ያልተቆለፋቸው (unpinned) ወይም slopsquatted የተደረጉ ፓኬጆች ይጠቁማሉ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | አዎ                                   |
| `audit:deps`                      | `npm audit` (root + electron) — ምንም ከፍተኛ/ወሳኝ ማሳሰቢያዎች የሉም (ከosv `check:vuln-ratchet` ጋር ይተዳዳራል፤ Rationalization Backlogን ይመልከቱ)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | አዎ                                   |
| `check:lockfile`                  | `package-lock.json` ታማኝነት — https ምዝገባ፣ የታማኝነት ሃሾች፣ ምንም የሆስት ልወጣዎች የሉም                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | አዎ                                   |
| `check:licenses`                  | ለምርት ጥገኞች የተፈቀደ የSPDX ፈቃድ ዝርዝር                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | አዎ                                   |
| `check:tracked-artifacts`         | ምንም የግንባታ አርቲፋክቶች / commit የተደረጉ `node_modules` ሲምሊንኮች የሉም (በhusky pre-commit ውስጥም ይሠራል; pre-push በዓላማ ቀላል ነው — #6716)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | አዎ                                   |
| `check:ai-attribution`            | በPR ኮሚቶች፣ ርዕስ ወይም አካል ውስጥ የAI/ቦት `Co-Authored-By` ትሬለር ወይም የAI-ማመንጨት ግርጌ የለም — ጥብቅ ህግ #16 (በ`quality.yml` ፈጣን-በሮች ዑደት ውስጥ ለPR→`release/**` — የክስተት ጭነት ያነባል፣ ከPRዎች ውጭ ምንም አይሠራም — እና በ`ci.yml` lint ውስጥ ለPR→`main` የPR-ብቻ ደረጃ; እንዲሁም የhusky `commit-msg` ሁክ; የሰው ተባባሪ-ደራሲዎች ይፈቀዳሉ; #14436)                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `check:vitest-exclusions`         | እያንዳንዱ የVitest ማገዶ የክትትል ጉዳይ ስም ይጠቅሳል እና በ`config/quality/vitest-exclusions.json` ውስጥ ይታያል (#13204)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | አዎ                                   |
| `check:file-size`                 | የምንጭ ፋይሎች (`.ts`/`.tsx` በ`src/`፣ `open-sse/`፣ `electron/`፣ `bin/`) በ`cap` ገደብ ውስጥ ይቆያሉ እና የሙከራ ፋይሎች (`*.test.ts(x)`) በ`testCap` ውስጥ; በ`file-size-baseline.json` ውስጥ የቀዘቀዙ ፋይሎች (`frozen` / `testFrozen`) ከተመዘገበው መጠናቸው በላይ መጨመር አይችሉም                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | አዎ                                   |
| `check:error-helper`              | በexecutors/handlers ውስጥ ያሉ የስህተት ምላሾች `buildErrorBody()` / `sanitizeErrorMessage()` ይጠቀማሉ (ጥብቅ ደንብ #12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | አዎ                                   |
| `check:migration-numbering`       | የMigration SQL ፋይሎች ያለ ክፍተት ወይም ድግግሞሽ በቅደም ተከተል ተቆጥረዋል                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | አዎ                                   |
| `check:public-creds`              | ከ`publicCreds.ts` ውጭ ቀጥተኛ የOAuth `client_id`/`client_secret` ወይም የFirebase Web ቁልፎች የሉም (ጥብቅ ደንብ #11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | አዎ                                   |
| `check:db-rules`                  | ከ`src/lib/db/` modules ውጭ raw SQL የለም፤ ከ`localDb.ts` barrel-imports የሉም (ጥብቅ ደንቦች #2/#5)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | አዎ                                   |
| `check:known-symbols`             | በdispatch tables ውስጥ የተመዘገቡ provider executors፣ routing strategies እና translators በዲስክ ላይ ካሉ ፋይሎች ጋር ይዛመዳሉ — orphaned ወይም undeclared symbols የሉም                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | አዎ                                   |
| `check:route-guard-membership`    | child process የሚጀምር እያንዳንዱ route በ`isLocalOnlyPath()` ተመድቧል (ጥብቅ ደንቦች #15/#17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | አዎ                                   |
| `check:test-discovery`            | በrepo ውስጥ ያለ እያንዳንዱ `*.test.ts` / `*.spec.ts` ፋይል ቢያንስ በአንድ የሙከራ አስኬጅ ይሰበሰባል (ቀስ በቀስ ማጥበቂያ፦ በ`test-discovery-baseline.json` ውስጥ ያለው የባለቤት አልባ ፋይሎች ዝርዝር መቀነስ ብቻ ይችላል)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | አዎ                                   |
| `check:test-tla-order`            | በ`tests/unit` ስር ያለ ምንም `node:test` ፋይል ሙከራ ከመመዝገቡ በኋላ ከፍተኛ ደረጃ ላይ `await` አግኝቶ ከዚያም ተጨማሪ ሙከራዎችን አይመዘግብም (#18045፤ ቀስ በቀስ ማጥበቂያ፦ `test-tla-order-allowlist.json` መቀነስ ብቻ ይችላል)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | አዎ                                   |
| `check:agent-skills-sync`         | የተፈጠሩ የወኪል ክህሎቶች ቅርሶች ከምንጭ ካታሎጋቸው ጋር ይዛመዳሉ (ምንም ልዩነት የለም)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `check:provider-asset-provenance` | የአቅራቢ አርማዎች/ቅርሶች የተመዘገበ የምንጭ መረጃ ግቤት አላቸው                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `lint:json`                       | የJSON ውቅር ፋይሎች በትክክል ይተነተናሉ እና የrepo lint ደንቦችን ያሟላሉ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `typecheck:core`                  | ያለ ስህተቶች የTypeScript ማጠናቀር (የምክር ማስጠንቀቂያዎች ብቻ)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | አዎ                                   |
| `typecheck:noimplicit:core`       | ጥብቅ `noImplicitAny` — ወደፊትን ያማከለ፤ አስቀድመው የነበሩ ብዙ የጥሪ ቦታዎች አሁንም ማብራሪያዎች ያስፈልጋቸዋል                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | **ምክራዊ** (`continue-on-error: true`) |
| `check:dashboard-typecheck`       | `tsc` ወደ `src/app/(dashboard)/**` የተገደበ (#7033) — የ `typecheck:core` የተመረጠ 27-ፋይል allowlist ምንም የ dashboard TSX አያካትትም፣ እና `next build` ደግሞ type-check አያደርገውም (`next.config.mjs` `ignoreBuildErrors: true` ብሎ ያቀምጣል)፣ ስለዚህ እዚያ የሚከሰቱ የ orphaned-identifier ችግሮች (#6625/#6909) ለ CI የማይታዩ ነበሩ። ከ ቀዝቃዛ በእያንዳንዱ-ፋይል/በእያንዳንዱ-TS-ኮድ ቆጠራ baseline (`config/quality/dashboard-typecheck-baseline.json`፣ ከ `check:known-symbols` ጋር ተመሳሳይ የድሮ-አፈጻጸም ስርዓት) ጋር ይነፃፀራል — ከ baseline ቆጠራ በላይ የሚሆኑ አዲስ ስህተቶች ብቻ በሩን ያውድቃሉ፤ አስቀድሞ የነበረ ስህተት ሲጠገን መሠረቱን በ `--update` ይቀንሱት።                                                                                                                                                             | አዎ                                   |

### ስራ: `quality-gate`

ከ `test-coverage` በኋላ ይሠራል። ሲወድቅ merge ይከለክላል።

| ስክሪፕት                        | የሚያረጋግጠው                                                                                                                      | የሚከለክል                 |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| `quality:collect`            | `quality-metrics.json` ያውጣል (የ ESLint ማስጠንቀቂያ ቆጠራ፣ ከተዋሃደ shard ሪፖርት ሽፋን)                                                      | አዎ (የ ratchet ጅረት-ላይኛ) |
| `quality:ratchet`            | በ `quality-baseline.json` ውስጥ ያለ እያንዳንዱ መለኪያ አልከፋም (የ ESLint ማስጠንቀቂያዎች ≤ baseline፤ ሽፋን ≥ baseline)                            | አዎ                     |
| `check:duplication`          | የኮድ ድግግሞሽ (jscpd@4) በ `quality-baseline.json` ውስጥ ካለው baseline አይበልጥም                                                         | አዎ                     |
| `check:complexity`           | የፋይል-ደረጃ cyclomatic ውስብስብነት ከገደቡ አይበልጥም (የ core ESLint `complexity` + `max-lines-per-function`)                               | አዎ                     |
| `check:cognitive-complexity` | የእኔታዊ ውስብስብነት ratchet (`eslint-plugin-sonarjs`) — የተለየ ESLint ዙር፤ CI ሁለቱንም አዋሂዶ እንደ ነጠላ `check:complexity-ratchets` ደረጃ ያካሂዳል | አዎ                     |
| `check:dead-code`            | ያልተጠቀሙ exports / ፋይሎች ratchet (knip) ከ baseline ጋር ሲነፃፀር አይከፋም                                                                | አዎ                     |
| `check:compression-budget`   | የ compression benchmark በጀት — በእያንዳንዱ engine የ token-ቁጠባ ዝቅተኛ ገደቦች መክፋት የለባቸውም                                                | አዎ                     |
| `check:type-coverage`        | የመቶኛ-ተይቧል ratchet (`type-coverage`) አይከፋም፤ በዋናነት `typecheck:noimplicit:core`ን ይሸፍናል                                           | አዎ                     |
| `check:codeql-ratchet`       | የክፍት CodeQL ማንቂያ ቆጠራ አይከፋም (በ `gh api` ያነባል፤ ያለ ቶከን በሰላም ይዘለላል) — የማደስ ጊዜ-ስርዓት እና የእጅ ማስጀመሪያ: ከታች "CodeQL ratchet" ይመልከቱ      | አዎ                     |

### ስራ: `quality-extended`

መላው ስራ አማካሪ ነው (`continue-on-error: true`)። በ npm ላይ የተመሠረቱት ratchets በእውነት
ይሠራሉ፤ ውጫዊ ስካነሮች ግን በ `gh release download` ይገጥማሉ እና ባይነሪ ገና
ሲጎድል ራሳቸውን ይዘለላሉ (exit 0)።

| ስክሪፕት                    | የሚያረጋግጠው                                                                                                                                                                    | የሚከለክል                                    |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| `check:circular-deps`    | የዙሩ ጥገኝነቶች የሉም (dpdm)                                                                                                                                                       | **አማካሪ**                                  |
| `check:bundle-size`      | የ bundle መጠን ከገደቡ አይበልጥም                                                                                                                                                    | **አማካሪ**                                  |
| `check:secrets`          | የምስጢር ስካን (gitleaks) — ባይነሪ ከጎደለ ይዘለላል                                                                                                                                      | **አማካሪ**                                  |
| `check:vuln-ratchet`     | የጥገኝነት ተጋላጭነቶች (osv-scanner) አይከፉም — ባይነሪ ከጎደለ ይዘለላል                                                                                                                        | **አማካሪ**                                  |
| `check:workflows`        | የ workflow lint (actionlint + zizmor)፤ የጎደሉ/የተበላሹ ስካነሮች፣ ልክ ያልሆኑ ሪፖርቶች ወይም የጎደለ ratchet baseline እንደ INCOMPLETE ይወድቃሉ። ትክክለኛ ግኝቶች የተመረጠውን strict/advisory/ratchet ፖሊሲ ይከተላሉ | ማካሄድ ያስፈልጋል፤ የ zizmor ratchet በ CI ይከለክላል |
| `check:openapi-breaking` | በይፋዊው API ውል (`openapi.yaml`) ላይ ከመሠረት ቅርንጫፍ ጋር ሲነፃፀር የሚሰብር ለውጦች (oasdiff) — `openapiBreaking=N` ያውጣል፤ oasdiff ከጎደለ ወይም መሠረቱ spec መፈታት ካልተቻለ ይዘለላል                          | **አማካሪ**                                  |

### ስራ: `docs-sync-strict`

በ `main` ላይ በሚከሄት እያንዳንዱ PR ይሠራል። ሲወድቅ merge ይከለክላል።

| Script                         | Validates                                                                                                                          | Blocking                   |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| `check:docs-all`               | ከታች ያሉትን 6 ንዑስ-ጌቶች በቅደምተከተል የሚያካሂድ ሜታ-ጌት                                                                                           | አዎ                         |
| ↳ `check:docs-sync`            | የ CHANGELOG / OpenAPI / llm.txt ስሪት ማጣጣም                                                                                           | አዎ                         |
| ↳ `check:docs-counts`          | በጽሑፍ ውስጥ ያሉ ቆጠራዎች (የአቅራቢ ብዛት፣ የ migration ብዛት፣ ወዘተ) ከእውነተኛ ቆጠራዎች የ ratchet መስኮት ገደብ ውስጥ መሆናቸውን                                     | አዎ                         |
| ↳ `check:env-doc-sync`         | በ `.env.example` ውስጥ ያለ እያንዳንዱ የአካባቢ ተለዋዋጭ (env var) በሰነዶች ሰንጠረዥ ውስጥ ተሰናድቷል፣ እና በተቃራኒውም                                            | አዎ                         |
| ↳ `check:deprecated-versions`  | በሰነዶች ውስጥ የተተዉ (deprecated) የስሪት ሕብረቁምፊዎች የሉም                                                                                      | አዎ                         |
| ↳ `check:doc-links`            | በሰነዶች ውስጥ ያሉ ውስጣዊ markdown አገናኞች ወደ እውነተኛ ፋይሎች ይወሰዳሉ (`[text]`/`(path)` ቅርጽ)                                                       | አዎ                         |
| ↳ `check:fabricated-docs`      | በሰነዶች ውስጥ የተጠቀሱ routes፣ የአካባቢ ተለዋዋጮች፣ የ CLI ትእዛዞች፣ የ hook ስሞች እና የፋይል መንገዶች በኮድቤዙ ውስጥ አሉ። በ `--strict` ጠንካራ ጌት፤ ያለ flag soft-fail። | አዎ (በ CI ውስጥ በ `--strict`) |
| `check:cli-i18n`               | የ CLI ትእዛዝ ሕብረቁምፊዎች በሁሉም የ i18n locale ፋይሎች ውስጥ አሉ                                                                                 | አዎ                         |
| `check:openapi-coverage`       | የ OpenAPI መግለጫ ቢያንስ ratchet የተደረገበት ዝቅተኛ ገደብ ያላቸው እውነተኛ routes ይሸፍናል                                                               | አዎ                         |
| `check:openapi-security-tiers` | በ `openapi.yaml` ውስጥ ያሉ የደህንነት ደረጃ ማስታወሻዎች ከ `routeGuard.ts` ምደባዎች ጋር ተጣጥመዋል                                                       | **አማካሪ**                   |
| `check:openapi-routes`         | በ `openapi.yaml` ውስጥ ያለ እያንዳንዱ መንገድ ወደ እውነተኛ `route.ts` ይወሰዳል (የሃሉሲኔሽን-መከላከያ)                                                      | አዎ                         |
| `check:docs-symbols`           | በ `docs/**/*.md` ውስጥ ያለ እያንዳንዱ `/api/...` ማጣቀሻ ወደ እውነተኛ `route.ts` ይወሰዳል (የሃሉሲኔሽን-መከላከያ)                                           | አዎ                         |
| `i18n translation drift`       | በ i18n locale ፋይሎች ውስጥ ያልተተረጎሙ ቁልፎች — ማስጠንቀቂያ ብቻ                                                                                   | **አማካሪ**                   |

### ስራ፦ `i18n-ui-coverage`

| Script                           | Validates                                                                                                                                                     | Blocking |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `check-ui-keys-coverage` (ኢንላይን) | የ UI i18n ቁልፍ ሽፋን ≥ 65% ነው                                                                                                                                    | አዎ       |
| `check-ui-value-drift` (ኢንላይን)   | እንደገና የተጻፈ የእንግሊዝኛ **እሴት** የያረጀ ትርጉም በስተጀርባ አይተውም                                                                                                             | አዎ       |
| `check-new-key-coverage` (ኢንላይን) | **አዲስ** የእንግሊዝኛ ቁልፍ በእያንዳንዱ locale ተተርጉሟል — `__MISSING__:` ምልክት ውድቅ ይደረጋል                                                                                     | አዎ       |
| `check-translation-ratio`        | የእውነተኛ-ትርጉም ጥምድ በእያንዳንዱ locale (ከ allowlist ውጪ የሆኑ ከእንግሊዝኛ ጋር ተመሳሳይ / ቦታ-ያዥ / የጎደሉ ቅርንጫፎች) `config/quality/i18n-translation-baseline.json` + slack መብለጥ የለበትም | **አማካሪ** |

`fetch-depth: 0` ያስፈልጋል — የ value-drift ጌት `en.json` ን ከ merge base ጋር diff ያደርጋል።

#### `check-ui-value-drift` — የያረጀ-ትርጉም ጌት

ሌሎቹ ጌቶች በአወቃቀር ማየት የማይችሉትን አንድ የ i18n እርጎት (regression) ይይዛል፦ የእንግሊዝኛ እሴት እንደገና ሲጻፍ ከ_ቀዳሚው_ እንግሊዝኛ የተነሱ ትርጉሞች በስተጀርባ ይቆያሉ፣ ስለዚህ እንግሊዝኛ-የሌላቸው ተጠቃሚዎች በደፋር ቃላት የተጻፈ ግን አሁን የተሳሳተ ጽሑፍ ማንበባቸውን ይቀጥላሉ።

ይህ በእውነት ወደ ምርት ገብቷል። `oauthModal.googleOAuthWarning` የ Antigravity መግቢያ ረዳት ሲዋሀድ (#5203) እንደገና ተጽፏል፤ **ከ43 locales 39** ኦፔሬተሮችን "ሙሉውን URL ይቅዱ እና ከታች ይለጥፉት" የሚል ጽሑፍ ይዘው ቀሩ — ይህም ለዚያ አቅራቢ መጠናቀቅ የማይችል ፍሰት ነው። እስከ #8463 ድረስ ያልታወቀ ሆኖ ቀርቷል ምክንያቱም፦

- `sync-ui-keys` **የጎደሉትን** ቁልፎች ብቻ ነው የሚሞላው፣ **ያረጁትን** ፈጽሞ አይደለም፤
- `check-ui-keys-coverage` የቁልፍ _መኖርን_ ይቆጥራል፣ ስለዚህ የያረጀ ትርጉም እንደተሸፈነ ይቆጠራል፤
- `check-translation-drift` የ `docs/i18n/<locale>/**.md` ሰነድ መስታወቶችን ይከታተላል — `src/i18n/messages/*.json` ን ፈጽሞ አያነብም። ከ 2026-09 re-sync ጀምሮ በ `docs-sync-strict` ስራ ውስጥ አጋድ ነው፦ ዋና ሰነድ ያርትዑ → `npm run i18n:run -- --files=<doc>` (በክፍል-ደረጃ፣ ርካሽ)።

**ልዩነትን የሚያውቅ (diff-aware)፣ በbaseline የተደገፈ አይደለም።** `en.json`ን በmerge base ላይ ከworking
tree ጋር ያነጻጽራል፤ እንግሊዝኛ እሴቱ የተቀየረለት በሆነ እያንዳንዱ ቁልፍ ላይ፣ አሁንም ያልተነካ ትርጉም የያዘ ማንኛውም
locale የጊዜውን ያለፈ (stale) ነው። ይህ በዓላማ **ቀደም ሲል የነበረውን ዕዳ ያቀዘቅዛል** — diff ረጅም ጊዜ የቆየ
ትርጉም ከየትኛው የቆየ እንግሊዝኛ እንደመጣ ሊገልጽ አይችልም፣ ስለዚህ gate የአሁኑ ለውጥ የነካውን ብቻ ይፈርዳል።
አማራጩ (በእያንዳንዱ ቁልፍ hash baseline) ~600 KB የተመነጨ ፋይል ያስከፍላል — ካለው ከትልቁ baseline ሦስት
እጥፍ — እና በእያንዳንዱ i18n PR ላይ ለውጥ ይፈጥራል (churn)።

ሊያሟሉት የሚችሉ ሁለት መንገዶች፡

1. የተጎዱትን ትርጉሞች ማዘመን፣ ወይም
2. ወደ `__MISSING__:<new english>` መለወጥ — runtime ከዚያ የተስተካከለውን እንግሊዝኛ ያገለግላል
   (`src/i18n/request.ts::deepMergeFallback`፣ #7258) እና ቁልፉ ለትርጉም ተራ ይገባል።

የሐረጉ **ትርጉም** ከተቀየረ፣ **ቁልፉን እንደገና መሰየም** ይመረጣል፡ አዲስ ቁልፍ የጊዜውን ያለፈ ትርጉም መውረስ
አይችልም። #8463 የተጠቀመበት ንድፍ (pattern) ያኑ ነው።

```bash
npm run i18n:check-value-drift          # ጥብቅ (CI የሚያሄደው)
npm run i18n:check-value-drift:warn     # ሪፖርት ብቻ
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

መሰረታዊው catalog ሊነበብ ሲያይችል (base ref ያልሌለው shallow clone)፣ ከ `SKIP reason=base-unresolved`
ጋር 0 ይወጣል — `check-openapi-breaking`ን በመመስለት።

### ሥራ (Job): `i18n`

ሙሉ የi18n ማረጋገጫ ማትሪክስ (በእያንዳንዱ locale አንድ ሥራ)። ሙሉው ሥራ አማካይ ነው።

| ስክሪፕት                           | የሚያረጋግጠው                  | ከለካይ                                            |
| ------------------------------- | ------------------------- | ----------------------------------------------- |
| `validate_translation.py quick` | የትርጉም ሙሉነት በእያንዳንዱ locale | **አማካይ** (`continue-on-error: true` በሙሉው ሥራ ላይ) |

### ሥራ (Job): `pr-test-policy`

በpull requestዎች ላይ ብቻ ይሰራል።

| ስክሪፕት                  | የሚያረጋግጠው                                                                                                                 | ከለካይ |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------ | ---- |
| `check:pr-test-policy` | በ `src/`፣ `open-sse/`፣ `electron/` ወይም `bin/` ውስጥ የምርት ኮድ የሚቀይሩ PRs ሙከራዎችን ማካተት ወይም ማዘመን አለባቸው (ጽኑ ህግ #8 / Hard Rule #8) | አዎ   |
| `check:test-masking`   | የተቀየሩ የሙከራ ፋይሎች የጠቅላላ assert ብዛት መቀነስ ወይም `assert.ok(true)` የምንገዝግዝባቸውን ባዶ እርግጦች (tautologies) መጨመር የለባቸውም               | አዎ   |
| `check:pr-evidence`    | የPR አካል ለለውጡ የሙከራ/VPS ማስረጃ መጥቀስ አለበት (ጽኑ ህግ #18ን በPR ጽሑፍ ላይ grep በማድረግ ራስ-ሰር ያደርገዋል — ደካማ ነው፣ Backlogን ይመልከቱ)            | አዎ   |

### ሥራ (Job): `test-vitest`

ከ `build` በኋላ ይሰራል። በውድቀት ላይ mergeን ይከለክላል።

| ስዊት              | የሚያረጋግጠው                                                | ከለካይ                                                                                               |
| ---------------- | ------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `test:vitest`    | MCP ሰርቨር (110 መሳሪያዎች)፣ autoCombo፣ cache — vitest runner | አዎ                                                                                                 |
| `test:vitest:ui` | የUI ክፍሎች ሙከራዎች — vitest runner                          | **ከለካይ** — ቀደም ሲል የነበሩ ውድቀቶች በ `vitest.config.ts` ውስጥ በግልጽ ተቀልበዋል (excluded)፤ አዲስ ውድቀቶች ሥራውን ያውድቃሉ |

### የሌሊት ዎርክፍሎዎች (በመርሐግብር የሚሰሩ፣ አማካይ)

እነዚህ በcron መርሐግብር ላይ (እና `workflow_dispatch`) ይሰራሉ፣ በPRs ላይ ፈጽሞ አይሰሩም። ሁሉም አማካይ ናቸው።

| ዎርክፍሎው                 | የሚያረጋግጠው                                                                                                                             | ከለካይ     |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| `nightly-property`     | የfast-check property ሙከራዎች በዘፈቀደ seed + ከፍተኛ የሩጫ ብዛት                                                                                 | **አማካይ** |
| `nightly-resilience`   | heap-growth gate፣ chaos fault-injection፣ k6 load/soak                                                                                | **አማካይ** |
| `nightly-llm-security` | promptfoo injection መከላከያ (block ሁነታ) + garak probes (የአቅራቢ ሚስጥር (provider secret) ሲጎድል ይዘለላል)                                       | **አማካይ** |
| `nightly-schemathesis` | OpenAPI ውል fuzzing (schemathesis) በሕያው OmniRoute ላይ `docs/openapi.yaml`ን በመጠቀም — የspec ጥሰቶችን / ያልተሻገሩ 500ዎችን ወደ ላይ ያመጣል (Fase 8 B.4) | **አማካይ** |
| `nightly-mutation`     | የStryker mutation-testing ውጤት በፈጣኑ unit መስመር ላይ — የተረፉ mutants ደካማ assertsን ወደ ላይ ያመጣሉ                                               | **አማካይ** |
| `nightly-compat`       | የNode ሞተር ተኳኋኝነት ማትሪክስ በሚደገፉት `engines.node` ክልሎች ሁሉ ላይ                                                                              | **አማካይ** |

የአፈጻጸም baselines (heap፣ TTFB፣ የbuild ጊዜ) ይመዘገባሉ እንጂ አይከለከሉም፡ [`PERF_BASELINE.md`](../ops/PERF_BASELINE.md)ን ይመልከቱ (`npm run perf:lts-baseline`)።

---

## የVelocity ምዕራፍ (2026-08-30 → v4.0 LTS)፦ እያንዳንዱ baseline በ20% ተለሳልሷል

የባለቤቱ ውሳኔ (2026-08-30)፦ እስከ v4.0 modularization ድረስ የማሰራጨት ፍጥነት
የዕዳውን ወሰን ከማስጠበቅ የበለጠ አስፈላጊ ነው። እያንዳንዱ **ቁጥራዊ** ratchet baseline ኦዲት
ሊደረግበት በሚችል አንድ ዙር በ20% ተለሳልሷል፣ ምዕራፉም በ`config/quality/quality-baseline.json` ውስጥ ታውጇል፦

```json
"_policy": { "phase": "velocity", "since": "2026-08-30", "until": "4.0.0",
             "relaxPct": 20, "requireTighten": false }
```

| የተለወጠው                                                                                                                                                                                        | ቦታ                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `metrics.*.value` — ዝቅተኛ መሆኑ የተሻለ የሆኑ ቆጠራዎች ×1.2፣ ከፍተኛ መሆኑ የተሻለ የሆኑ መቶኛዎች ÷1.2 (የcoverage ዝቅተኛ ወሰን 60 እንዳለ ቆይቷል፣ `eslintErrors` 0 እንደሆነ ይቆያል፣ `eslintWarnings` 0 → ከታገደው suppression ቆጠራ 20%) | `quality-baseline.json` (`_relax_velocity_2026_08_30` ማስታወሻ እያንዳንዱን ከበፊት → በኋላ ይዘረዝራል)                 |
| `count` ×1.2 / `percentage` ×1.2                                                                                                                                                              | `complexity-baseline.json`, `duplication-baseline.json`                                                |
| `cap`፣ `testCap`፣ የእያንዳንዱ `frozen[*]` / `testFrozen[*]` የመስመር ገደብ ×1.2                                                                                                                        | `file-size-baseline.json`                                                                              |
| የእያንዳንዱ ፋይል / የእያንዳንዱ TS ኮድ ቆጠራ ×1.2                                                                                                                                                          | `api-typecheck-baseline.json`, `dashboard-typecheck-baseline.json`, `open-sse-typecheck-baseline.json` |
| `THRESHOLD` 36 → 30                                                                                                                                                                           | `scripts/check/check-openapi-coverage.mjs`                                                             |
| `_policy.requireTighten === false` ሲሆን `--require-tighten` አማካሪ ይሆናል                                                                                                                          | `scripts/quality/check-quality-ratchet.mjs`                                                            |
| የምሽቱ `bank-ratchet-shrinks` ቆሟል (የተለካውን መቀነስ bank በማድረግ headroomን ይቀለብስ ነበር)                                                                                                                  | `.github/workflows/nightly-release-green.yml`                                                          |

Allowlists (`eslint-suppressions.json`, `test-masking-allowlist.json`, `test-discovery-baseline.json`,
…) **በጀቶች አይደሉም** እና አልተነኩም። የማለፍ/የመውደቅ የፖሊሲ በሮች (ምስጢሮች፣ የSQL ደንቦች፣
የdocs/env ውል፣ የi18n እኩልነት፣ unit tests) አልተለወጡም — ያልተሳካ ፈተና አሁንም ያልተሳካ ፈተና ነው።

**መሣሪያዎች**

- `npm run quality:relax-baselines -- --pct 20 --note velocity_YYYY_MM_DD [--dry-run]` — የአንድ
  ጊዜ ማላላት (`scripts/quality/relax-baselines.mjs`)፤ በተመሳሳይ ማስታወሻ ሁለት ጊዜ ለመስራት ፈቃደኛ አይሆንም።
- `npm run quality:headroom [-- --only deadExports,fileSize] [--json out.json --md out.md]` —
  CI በሚለካበት መንገድ እያንዳንዱን ቁጥራዊ በር ይለካል፣ ለእያንዳንዱ በር የቀረውን headroomም
  ያትማል (`scripts/quality/baseline-headroom.mjs`)። የምሽቱ `baseline-headroom` job
  ሰንጠረዡን በworkflow run ማጠቃለያ ውስጥ ያትማል፣ የJSON/Markdown ሪፖርቱንም
  እንደ `baseline-headroom-<run_id>` ለ90 ቀናት እንዲቆይ ይሰቅላል። የማስጠንቀቂያ እና የከባድ ሁኔታ ረድፎች
  ከcap በ10% ውስጥ ያሉ ወይም አስቀድመው ያለፉ በሮችን ይለያሉ። በጀቶች እየተጠቀሙ ስለመሆናቸው
  እንደ ቅድመ ማስጠንቀቂያ እነዚህን ሪፖርቶች ይገምግሙ፤ ችግሩ ያለበትን በር `_rebaseline_*` ማስታወሻዎች ይመርምሩ። jobው ከአሁን በኋላ
  ቋሚ issue አይፈጥርም ወይም አያዘምንም፤ #12149 የቀድሞውን የሪፖርት ታሪክ ጠብቆ ያቆያል።

**የአዲስ ኮድ ሁነታ (Clean-as-You-Code) — ከ2026-08-30 ጀምሮ፣ ለPR fast-path ብቻ**

በ`pull_request` events ላይ `quality.yml` `--base-ref <PR base SHA>`ን ለ`check:file-size`፣
`check:complexity-ratchets` እና `check:dead-code` ያስተላልፋል። ለ`check:complexity-ratchets` እና
`check:dead-code` በሩ HEADን ከmerge-base ጋር **PRው በነካቸው ፋይሎች ብቻ በመገደብ** ያወዳድራል
(`scripts/check/newCodeMode.mjs`፦ merge-baseው በጊዜያዊ `git worktree` ውስጥ ይፈጠራል፣
ESLint/knip በዚያ እና በHEAD ላይ ይሰራሉ፣ የእያንዳንዱ ፋይል ቆጠራዎችም diff ይደረጋሉ)፦

- **አጋጅ** — PRው በለወጣቸው ፋይሎች ውስጥ cyclomatic/cognitive ጥሰቶችን ወይም dead exportsን ጨምሯል
  (`complexityNewCode=`፣ `cognitiveComplexityNewCode=`፣ `deadExportsNewCode=` በlog ውስጥ)፤
- **አማካሪ** — ዓለም አቀፉ ጠቅላላ ቁጥር ከታገደው baseline ጋር። በውርስ የመጣ drift ምንም ጥፋት የሌለበትን
  PR ፈጽሞ አያወድቅም፤ driftው በrelease reconciliation ወቅት እንደገና ይታገዳል፣ በheadroom jobም ክትትል ይደረግበታል።

`check:file-size` base refን በራሱ ደንቦች ይጠቀማል (`scripts/check/check-file-size.mjs`፣ #8522)፦
በtreeው ውስጥ ያለውን እያንዳንዱን የsource እና test ፋይል ይፈትሻል፣ በPR base ላይ ያለውን የእያንዳንዱን ፋይል የመስመር ቆጠራ
በ`git show` ያነባል፣ እና አንድ ፋይል ከbaseline ጣሪያው
(`frozen` / `testFrozen`፣ ወይም baselineው ውስጥ ላልሆነ ፋይል `cap` / `testCap`) እና ከbase
መጠኑ መካከል ከፍተኛ ከሆነው በላይ ሲያድግ ብቻ ያወድቀዋል። ስለዚህ በbaseው ላይ አስቀድሞ drift ያደረገ ፋይል ምንም ጥፋት የሌለበትን PR ፈጽሞ አያወድቅም።

`check:boundary:ratchet` ተመሳሳይ ደንብን በአንድ ቁጥሩ ላይ ይተገብራል
(`scripts/quality/measure-boundary.mjs --ratchet --base-ref <sha>`)፦ በPR ክስተቶች ላይ የ`quality.yml` ፈጣን ማጣሪያዎችም ሆኑ የ`ci.yml` lint ሥራ የPR base SHAን ያስተላልፋሉ፤ base commit ከ`git archive` export ይለካል፤ እና PRው የሚወድቀው የ`open-sse → src` edge ብዛቱ ከ`metrics.boundaryOpenSseToSrc` እና ከbaseው ብዛት መካከል ትልቁን ሲያልፍ ብቻ ነው። ከጣሪያው በላይ ያለ base drift (`base drift herdado`) ሪፖርት ይደረጋል፣ ነገር ግን ጥፋት የሌለበትን PR ፈጽሞ አያወድቅም፤ push → main ፍጹም ጣሪያውን እንደያዘ ይቀጥላል፣ እና ሊፈታ የማይችል base SHA ከማስጠንቀቂያ ጋር ወደዚያው ጣሪያ ይመለሳል።

የ`workflow_dispatch` ሂደቶች፣ release-green sweep እና nightly headroom ሥራ የPR base የላቸውም፣ ስለዚህ ፍጹም (ዓለም አቀፍ) ንጽጽሩን እንደያዙ ይቀጥላሉ። Coverage፣ duplication እና type-coverage ለአሁን ዓለም አቀፍ ሆነው ይቆያሉ (መሣሪያዎቻቸው በፋይል ደረጃ diffን በአነስተኛ ወጪ አያመነጩም) — በተመሳሳይ አያያዝ ሊታከሙ የሚችሉ እጩዎች ናቸው።

**ደረጃውን በv4.0 መዝጋት (LTS = ከበፊቱ የበለጠ ጥብቅ፣ "ወደ መደበኛው መመለስ" አይደለም)**

1. በንጹህ የ`release/v4.0.0` የመጨረሻ commit ላይ፦ ለመዝገብ `npm run quality:headroom --json`ን፣ ከዚያም
   `npm run quality:ratchet -- --update`፣ `check:file-size --update`፣
   `check:complexity-ratchets --update`፣ `check:dead-code --update` እና የእያንዳንዱ typecheck gate
   `--update`ን ያሂዱ — እያንዳንዱ baseline ወደተለካው እሴት ይወርዳል።
2. `_policy`ን ከ`quality-baseline.json` ይሰርዙ (`--require-tighten`ን እና nightly
   bankingን እንደገና ያስታጥቃል)፤ በ`check-openapi-coverage.mjs` ውስጥ `THRESHOLD = 36`ን (ወይም ከዚያ በላይ) ወደነበረበት ይመልሱ።
3. Modularization ውጤት ባስገኘባቸው ቦታዎች ከተለካው በላይ ያጥብቁ፦ የfile-size `cap`ን ወደ 1000
   (ወይም 800) ይመልሱ፣ coverage floorsን +5 ያድርጉ፣ ለmodularized packages የdead exports ብዛትን 0 ያድርጉ።

## የRatchet መነሻ መስመር (`quality-baseline.json`)

የratchet ሞተሩ (`scripts/quality/check-quality-ratchet.mjs`) `quality-baseline.json`ን
በማንበብ አዲስ ከተሰበሰበው `quality-metrics.json` ጋር ያነጻጽረዋል። ከየራሱ epsilon
በላይ የሚያሽቆለቁል ማንኛውም መለኪያ buildን እንዲወድቅ ያደርጋል።

በአሁኑ ጊዜ ክትትል የሚደረግባቸው መለኪያዎች፦

| መለኪያ                  | አቅጣጫ   | ትርጉም                             |
| --------------------- | ------ | -------------------------------- |
| `eslintWarnings`      | `down` | የESLint ማስጠንቀቂያዎች ብዛት መጨመር የለበትም |
| `coverage.statements` | `up`   | የstatement coverage መቀነስ የለበትም   |
| `coverage.lines`      | `up`   | የline coverage መቀነስ የለበትም        |
| `coverage.functions`  | `up`   | የfunction coverage መቀነስ የለበትም    |
| `coverage.branches`   | `up`   | የbranch coverage መቀነስ የለበትም      |

እውነተኛ ማሻሻያ ከተደረገ በኋላ መነሻ መስመሩን ለማዘመን፦

```bash
npm run quality:ratchet -- --update
git add quality-baseline.json
```

የ`--update` flag አሁን የተለኩትን እሴቶች ወደ `quality-baseline.json` ይጽፋል።
ይህን ፋይል መለኪያውን ካሻሻለው ለውጥ ጋር አብረው commit ያድርጉ። መነሻ መስመሩን
ሳያዘምን መለኪያን የሚያሻሽል PR በ`--require-tighten` ይያዛል (ደረጃ 6A.5፣
ትግበራው በመጠባበቅ ላይ ነው)።

### የCodeQL ratchet፦ የማደሻ ድግግሞሽ እና በእጅ ማስጀመር

`check:codeql-ratchet` **በጊዜ ሰሌዳ የሚታደሰውን የrepo ሁኔታ እንጂ በእያንዳንዱ PR የሚታደሰውን አያነብም።**
`gh api repos/diegosouzapw/OmniRoute/code-scanning/default-setup`
`state: configured`፣ `schedule: weekly` የሚል ውጤት ይሰጣል፦ ይህ የGitHub default-setup scan እንጂ
በእያንዳንዱ push የሚካሄድ analysis አይደለም። ውጤቱም፦ alertsን የሚያስተካክል PR merge ከተደረገ በኋላ፣
ቀጣዩ በጊዜ ሰሌዳ የተያዘ scan እስኪካሄድ ድረስ ratchet የቆየውን ከፍተኛ ብዛት ማንበቡን ይቀጥላል፤
ስለዚህ scanው እስኪያዘምን ድረስ በሁሉም ክፍት PR ላይ፣ የማስተካከያው PR ተከታይ ለውጦችንም ጨምሮ፣
ወደኋላ መመለስ እንዳለ ያሳያል።

**በእጅ ማደስ**፦ `gh workflow run codeql.yml --ref release/vX.Y.Z` analysisን እንደገና
ያስኬድና alertsን በደቂቃዎች ውስጥ እንደገና ያትማል። መጀመሪያ `.github/workflows/codeql.yml`ን
ያንብቡ፤ ራስጌው `workflow_dispatch`-ብቻ የሆነው **ከGitHub "default setup" ጋር ስለሚጋጭ**
መሆኑን ያብራራል (`CodeQL analyses from advanced configurations cannot be
processed when the default setup is enabled`)። የ`push`/`pull_request`/
`schedule` triggersን መልሶ ማስጀመር በመጀመሪያ **የowner እርምጃ** ይፈልጋል፦ Settings → Code security →
CodeQL: Default → Advanced። ያንን ለውጥ ሳያደርጉ `schedule:` trigger አይጨምሩ፤
ውድቀት የሚያጋጥማቸውን runs ብቻ ይፈጥራል።

**ብዛቱ ከቀነሰ በኋላ መነሻ መስመሩን ያጥብቁ**፦ `node scripts/check/check-codeql-ratchet.mjs
--update` አዲሱን የተለካ ብዛት ወደ `quality-baseline.json` →
`metrics.codeqlAlerts.value` ይጽፋል፤ በዚህም ratchet እንደገና ወደ ቀድሞው ከፍተኛ ገደብ
የሚደረግን ወደኋላ መመለስ በዝምታ እንዳይፈቅድ ያደርጋል። የተሰራ ምሳሌ (2026-09-02/03)፦ PR #12502
7 እውነተኛ alertsን አስተካክሏል (13 → 6 የተለኩ ክፍት alerts)፤ PR #12530 ከዚህ ጋር እንዲዛመድ
የቀዘቀዘውን መነሻ መስመር ከ11 → 6 አጥብቋል፤ ቀሪዎቹ 6 alerts ከዚያ በኋላ ለእያንዳንዱ alert
ምክንያት በመመዝገብ እስከ 0 ክፍት alerts ድረስ dismiss ተደርገዋል።

**Dismissals የoperator ውሳኔ ናቸው (ጥብቅ ደንብ #14)**፦ በdismissal አስተያየቱ ውስጥ ቴክኒካዊ
ምክንያቱን ሳይመዘግቡ የCodeQL alertን በፍጹም dismiss አያድርጉ፦ ለupstream-protocol መስፈርት `won't fix`፣
ለtest fixture `used in tests`፣ CodeQL ማየት ለማይችለው sanitizer `false positive`
(ቀዳሚ ምሳሌ፦ `docs/security/ERROR_SANITIZATION.md`)።

---

## የሙከራ ድጋሚ ማስኬጃ ፖሊሲ (WS5.4, v3.8.49)

ድጋሚ ማስኬድ ለእያንዳንዱ runner የተለየ እንጂ አጠቃላይ የሚሸፍን አይደለም — አጠቃላይ ድጋሚ ማስኬድ እውነተኛ የኋሊት መመለሶችን
ወደማይታዩ አልፎ አልፎ የሚከሰቱ ውድቀቶች ይቀይራቸዋል፦

| Runner           | ፖሊሲ                                                                                                        | ምክንያቱ                                                                                                    |
| ---------------- | ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Playwright (e2e) | በCI ውስጥ ብቻ `retries: 1`፣ ከ`trace: on-first-retry` ጋር                                                       | የአሳሽ/አውታረ መረብ ጊዜ በእውነት የማይወሰን ነው፤ አንድ ድጋሚ ማስኬድ ከtrace ጋር አልፎ አልፎ የሚከሰት ውድቀትን ሊመረመር ወደሚችል artifact ይቀይረዋል |
| Vitest           | አጠቃላይ ድጋሚ ማስኬድ የለም። አልፎ አልፎ እንደሚወድቅ የተረጋገጠ ሙከራ ግልጽ የሆነ ለሙከራው-ብቻ ድጋሚ ማስኬጃ ያገኛል (በdiff ውስጥ የሚታይ፣ በPR የሚገመገም) | የለይቶ ማቆያ ዝርዝሩን በrepo ውስጥ ያቆየዋል፣ በፍጹም ድብቅ አይሆንም                                                           |
| node:test (unit) | በፍጹም ድጋሚ ማስኬድ የለም                                                                                          | አልፎ አልፎ የሚወድቅ unit test በሙከራው ውስጥ ያለ bug ነው — ያስተካክሉት፣ እንደገና በዕድል አያስኬዱት                                 |

የአልፎ አልፎ ውድቀት telemetry ከተተገበረ በኋላ የሚፈለጉ SLOs (WS5.2/5.3)፦ ለእያንዳንዱ ሙከራ <1% የአልፎ አልፎ ውድቀት መጠን
("አሁን አስተካክል" ገደብ)፣ ለእያንዳንዱ pipeline ≥95% የማለፍ መጠን። የኢንዱስትሪ ማጣቀሻ እሴቶች —
በራሳችን መለኪያዎች መሠረት እንደገና ይስተካከሉ።

## በልቀት ደረጃ የRatchet መዛባት (WS5.5, v3.8.49)

አንድ ratchet (የፋይል መጠን፣ ውስብስብነት፣ eslint ማስጠንቀቂያዎች) በንጹሕ የልቀት
ጫፍ ላይ ወደኋላ ሲመለስ — ማለትም የmergeዎች **ጥምረት** ወደኋላ እንዲመለስ አድርጎታል፣ እና የትኛውም ነጠላ PR በራሱ branch ላይ
የኋሊት መመለሱን አያስከስተውም — ማስተካከያው የ**release captain ሲሆን፣ አንድ ጊዜ፣ በ
release branch ላይ** መደረግ አለበት፦ extraction/refactorን ይምረጡ፤ rebaseline ማድረግ ያለበት በሰነድ የተመዘገበ
የማስረጃ ግቤት ካለ ብቻ ነው። የጥምረት መዛባትን በአበርካች PR ላይ በፍጹም አይጫኑ፣ እና
ለእያንዳንዱ PR rebaseline በፍጹም አያድርጉ (ያ እውነተኛ የኋሊት መመለሶችን ይደብቃል)። መጀመሪያ ለይተው ይወቁ፦ PRዎ እንዳስከተለው ከመገመትዎ በፊት በprobe worktree ውስጥ
በንጹሑ ጫፍ ላይ ቀዩን ውጤት እንደገና ያስከስቱ።

## የRatchet መቀነሶችን ማከማቸት — ወደታች ያለው አቅጣጫ (#8584)

ratchet በግማሽ ብቻ አውቶማቲክ ነው፣ እሱም የተሳሳተው ግማሽ ነው። capን **ማሳደግ**
አሥር ሰከንድ የሚወስድ በእጅ የሚደረግ JSON አርትዖት ሲሆን ቀይ PRን ለመክፈት ፈጣኑ መንገድ ነው።
አንዱን **መቀነስ** ግን አንድ ሰው `--update`ን አስኪዶ ውጤቱን commit እንዲያደርግ ይጠይቃል — እና
የ`bank-ratchet-shrinks` job እስኪተገበር ድረስ ይህን የሚያስኬድ workflow አልነበረም። የተለካው ውጤት
(2026-07-25)፦ 18 frozen ፋይሎች አስቀድመው ከ800-line የአዲስ ፋይል cap ጋር እኩል ወይም ከዚያ በታች ሲሆኑ፣ ከሁሉ የከፋው
በ132× (`src/shared/validation/schemas.ts`፣ 19 መስመሮች 2,523 capን የተሸከሙ) ነበር፤
የውስብስብነት ጣሪያው በ~37 rebaseline ማስታወሻዎች ውስጥ `1794 → 2169` ከፍ አለ፣ በትክክል አንድ
መቀነስ (−1) ብቻ ነበረው፤ እና "በቀጣዩ ዙር በ`--update` አጥብቅ" 31 ጊዜ ተጽፎ አንድ ጊዜ
ብቻ ተከበረ። ያስገኘው ኮድ ከጠፋ በኋላም የሚቆይ cap እያንዳንዱን የተጠናቀቀ decomposition በጸጥታ
ቀጥሎ ፋይሉን ለሚያርትዕ ሰው የዕድገት ፈቃድ ያደርገዋል።

`nightly-release-green.yml` → job **`bank-ratchet-shrinks`** ያንን ዑደት ይዘጋል፦

|          |                                                                                                |
| -------- | ---------------------------------------------------------------------------------------------- |
| የሚሰራበት   | `schedule` (3×/day) + `workflow_dispatch` — ሆን ተብሎ **`push` አይደለም**                            |
| የሚለካው    | ከፍተኛውን `release/vX.Y.Z`፣ ከ`release-green` ጋር ተመሳሳይ resolution + injection guard                |
| የሚጽፈው    | `check:file-size --update` እና `check:complexity-ratchets --update` (ሁለቱም በአወቃቀራቸው መቀነስ-ብቻ ናቸው) |
| የሚያረጋግጠው | `npm run check:ratchet-bank` (`scripts/quality/verify-ratchet-bank.mjs`)                       |
| የሚልከው    | አንድ ሁልጊዜ-ወቅታዊ PR ወደ release branch — በግድ የሚዘምን፣ በፍጹም spam የማይደረግ                               |

ማከማቸቱ ለእያንዳንዱ push ከመሆን ይልቅ በቡድን ይከናወናል፤ ምክንያቱም የlatency መስፈርት የለውም (በ8h ውስጥ
የተከማቸ መቀነስ በቂ ነው)፣ ለእያንዳንዱ merge ማስኬድ ግን በmerge ዘመቻዎች ወቅት PR branchን ደጋግሞ
እንደገና ይገነባ እና በእያንዳንዱ ጊዜ ለሙሉ ESLint ማለፊያ ወጪ ይከፍላል። ማግኘቱ በ
push (`release-green`) ላይ ይቆያል፤ በቡድን የሚከናወነው ማከማቸቱ ብቻ ነው።

### የደህንነት አረጋጋጭ

jobው ያለ ክትትል ወደ baselines ይጽፋል፣ ስለዚህ `verify-ratchet-bank.mjs` ይህን
ተቀባይነት ያለው ያደርገዋል። ከ`--update` በኋላ ያለውን tree ከ`HEAD` ጋር diff ያደርጋል፣ እና እያንዳንዱ ለውጥ
ከሚከተሉት አንዱ ካልሆነ **ምንም commit ከመኖሩ በፊት jobውን ያቋርጣል** — ምንም PR አይከፍትም፦

- የ`frozen` / `testFrozen` ቁጥራዊ ግቤት **የተቀነሰ** ወይም **የተወገደ**
- `complexity-baseline.json` → `count` **የተቀነሰ**
- `quality-baseline.json` → `metrics.cognitiveComplexity.value` **የተቀነሰ**

ሌላ ማንኛውም ነገር ያወድቃል፦ ቁጥር ማሳደግ፣ ግቤት መጨመር፣ `cap`/`testCap`ን መቀየር፣ ወይም
የ`_rebaseline_*` ማስታወሻን መሰረዝ/እንደገና መጻፍ (እነዚያ ማስታወሻዎች እያንዳንዱ ጣሪያ ለምን
እንደሚኖር የሚገልጹ የኦዲት ዱካዎች ሲሆኑ ከፋይል ግቤቶቹ ጋር በተመሳሳዩ `frozen` object ውስጥ ይቀመጣሉ)።
capን ማሳደግ የሚችል bot ከአሁኑ ሁኔታ በእጅጉ የከፋ ይሆናል። የኋሊት መመለስ
መከላከያ፦ `tests/unit/verify-ratchet-bank.test.ts`።

jobው ወደ `release/*` በፍጹም push አያደርግም — PRን የሚያዋህደው ሰው ነው፣ ስለዚህ የተሳሳተ መለኪያ
ሳይገመገም ሊገባ አይችልም።

## የAllowlist ፖሊሲ

ቀድሞ በነበሩ ጥሰቶች ምክንያት ሊወድቅ የማይችል እያንዳንዱ gate የተወሰነ allowlist
ይጠቀማል (ለምሳሌ፣ `KNOWN_STALE_DOC_REFS`፣ `KNOWN_MISSING`፣ `KNOWN_RAW_SQL`)። ፖሊሲው፦

**ዋናውን መንስኤ ያስተካክሉ፤ allowlistን ጥሰቱ ቀድሞ የነበረ እና
በዚያው PR ውስጥ ሊስተካከል የማይችል ከሆነ ብቻ ይጠቀሙ።**

ወደ allowlist ግቤት ሲጨምሩ፦

1. ምክንያቱን የሚያብራራ አስተያየት ያካትቱ።
2. የክትትል issueውን ይጥቀሱ (ለምሳሌ፣ `// #3498 — የደረጃ 2 ባህሪ፣ እስካሁን አልተተገበረም`)።
3. ጥሰቱን በሚያስተካክለው PR ውስጥ ግቤቱንም ያስወግዱ — ንቁ ጥሰትን ከእንግዲህ
   የማይገታ ያረጀ ግቤት በራሱ ጉድለት ነው (6A.3 stale-enforcement ከተተገበረ በኋላ
   ባለቤት በሌለው allowlist ግቤት ምክንያት gateውን ያሳክታል)።

ሙከራዎችን በፍጥነት ለማሳለፍ የallowlist ግቤቶችን **አይጨምሩ**። እያደገ ያለ allowlist ያለው
አረንጓዴ gate ስለ ጥራት የተሳሳተ እምነት ይፈጥራል።

### በእርስዎ PR ላይ gate ሲወድቅ

1. **የgateውን ውጤት በጥንቃቄ ያንብቡ** — ደንቡን የጣሰው የትኛው ፋይል ወይም symbol እንደሆነ
   በትክክል ይነግርዎታል።
2. **ጥሰቱን ያስተካክሉ** — አብዛኞቹ gates ኮዱ ትክክል እንደሆነ
   የሚያልፉ ተወስነው የሚሠሩ የfilesystem ፍተሻዎች ናቸው።
3. **ጥሰቱ ቀድሞ የነበረ ከሆነ** (ማለትም፣ እርስዎ ያላስገቡት ነገር ግን gateው አሁን
   የሚሸፍነው ከሆነ)፦ የምክንያት አስተያየት እና የክትትል issue ያለው የallowlist ግቤት ያክሉ።
4. **gateው ratchet ከሆነ** (coverage፣ ESLint warnings፣ duplication፣ complexity)፦
   ለውጥዎ መለኪያውን አባብሶታል። መሠረታዊውን ችግር ያስተካክሉ፣ ወይም (አልፎ አልፎ) ለውጡ
   ሆን ተብሎ የተደረገ እና የመለኪያው መቀነስ ተቀባይነት ያለው ከሆነ
   `npm run quality:ratchet -- --update`ን ያስኪዱ — ነገር ግን ምክንያቱን በPR መግለጫው ውስጥ ይመዝግቡ።
5. **የምክር gates** (`continue-on-error: true`) ለመረጃ ብቻ ናቸው — mergeን አያግዱም፣
   ነገር ግን በCI ማጠቃለያው ውስጥ ይታያሉ። ሆኖም ያስተካክሏቸው።

---

## አዲስ Gate ማከል

1. `scripts/check/check-<name>.mjs`ን (ወይም `.ts`) ይፍጠሩ። የፖሊሲ gates በ0/1 ይወጣሉ።
   Ratchet-style gates `collect-metrics.mjs`ን በመጠቀም መለኪያን ወደ `quality-metrics.json` ያስገባሉ።
2. `"check:<name>": "node scripts/check/check-<name>.mjs"`ን ወደ `package.json` ያክሉ።
3. በተገቢው job ስር በ`.github/workflows/ci.yml` ውስጥ ያገናኙት
   (policy → `lint` ወይም `docs-sync-strict`፤ ratchet → `quality-gate`)።
4. allowlist ካለው፣ ያረጁ ግቤቶች በራስ-ሰር እንዲገኙ
   `reportStaleEntries()`ን ከ`scripts/check/lib/allowlist.mjs` ይተግብሩ።
5. የgateውን የማግኘት ሎጂክ የሚሸፍን ሙከራ በ`tests/unit/build/` ውስጥ ይጻፉ።
6. ይህን ሰነድ ያዘምኑ (ወደ ተገቢው የjob ሰንጠረዥ አንድ ረድፍ ያክሉ)።

---

## የAgent መሣሪያዎች፦ LSP-in-the-loop (opt-in)

ከCI gates በተጨማሪ፣ OmniRoute **opt-in** የሆነ `agent-lsp` scaffold
(በፕሮጀክት ደረጃ ያለ `.mcp.json`፣ Fase 7 Task 15) ይዞ ይመጣል። TypeScript language serverን ለcoding agents ለማጋለጥ `.mcp.json`ን
ይፍጠሩ፤ ይህም ኮድ ከመጻፋቸው **በፊት** symbols /
diagnosticsን እንዲፈቱ ያደርጋል — የ"የተፈጠረ symbol" ስህተቶችን ከመነሻቸው የሚቀንስ፣
ከ`typecheck:core` ጋር የሚሠራ compile-before-claim አጋዥ ነው። ሆን ተብሎ
በራስ-ሰር እንዳይጫን ተደርጓል (የMCP↔LSP bridgeን እርስዎ ይመርጣሉ እና ያረጋግጣሉ)፤ የተበላሸ ግቤት የግንኙነት
ስህተትን ብቻ ይመዘግባል እንጂ sessionsን ፈጽሞ አያቋርጥም።

---

## የምክንያታዊ ማድረግ የኋላ ዝርዝር (የROI ግምገማ — ደረጃ 9 ሞገድ 3)

ይህ ንብረት ዝርዝር በ2026-06-17 ከ`ci.yml` ጋር ተመሳክሯል (ቀዳሚው ስሪት
`audit:deps`፣ `check:tracked-artifacts`፣ `check:lockfile`፣ `check:licenses`፣
`check:dead-code`፣ `check:cognitive-complexity`፣ `check:type-coverage`፣
`check:codeql-ratchet`፣ `check:pr-evidence`ን አላካተተም ነበር)። የተመሳከረው ስብስብ የROI ግምገማ
የሚከተሉትን የምክንያታዊ ማድረግ ዕጩዎች ለይቷል። **ውህደቶቹ መካኒካዊ የCI
ለውጦች ናቸው፤ መቀየር/ማስወገድ ውሳኔዎቹ ለኦፕሬተሩ የተተዉ የፖሊሲ ውሳኔዎች ናቸው።** ከታች ካሉት ውስጥ
እስካሁን የተተገበረ የለም።

**ከላይ ያልተመዘገቡ ተጨማሪ ነገሮችም** (አማካሪ፣ ዝቅተኛ ምልክት)፦ የ`docs-lint` ሥራ
(markdownlint + Vale፣ ሙሉው ሥራ `continue-on-error`) እና ራሳቸውን የቻሉ የስካነር የሥራ ፍሰቶች
`semgrep.yml` / `codeql.yml` / `scorecard.yml`። `semgrepFindings: 0` በ
`quality-baseline.json` ውስጥ አለ፣ ነገር ግን በ`ci.yml` ውስጥ ከሚያግድ ራቼት ጋር አልተገናኘም — መለኪያው
በአሁኑ ጊዜ ወላጅ አልባ ነው።

### ማዋሃድ / ብዜት ማስወገድ (መካኒካዊ፣ ዝቅተኛ አደጋ)

እያንዳንዱ ዕጩ በ2026-06-17 በነበረው የቀጥታ ጌት ሁኔታ ላይ ተረጋግጧል (እመን-ግን-አረጋግጥ)፤
በርካታ "ግልጽ" የሚመስሉ ውህደቶች ዕዳን እንደሚደብቁ ታውቋል እና **ንጹሕ** ቀጥተኛ ምትኮች አይደሉም።

- **`check:docs-sync` ሁለት ጊዜ ይሰራል** — በ`lint` ሥራ ውስጥ ራሱን ችሎ እና እንደገና በ`check:docs-all` (`docs-sync-strict`) ውስጥ እንዲሁም በhusky pre-commit hook ውስጥ። ✅ **ተጠናቋል** — ራሱን የቻለው የ`lint` ጥሪ ተወግዷል።
- **የCVE ቅኝት** — ❌ **ንጹሕ ውህደት አይደለም።** `audit:deps` በማንኛውም high/critical CVE ላይ በጥብቅ ይወድቃል፤ `check:vuln-ratchet` (osv) የሚወድቀው ከመነሻ መስመሩ ጋር ሲነጻጸር _መመለስ_ ሲኖር ብቻ ነው (በአሁኑ ጊዜ 1 MODERATE)። የተለያየ ትርጉም አላቸው — `audit:deps`ን ማስወገድ ፍጹሙን high/critical ጌት ያሳጣል። ሁለቱንም አቆዩ።
- **የዑደት ማወቂያ** — ✅ **ተጠናቋል** (#15159 G-01/G-02)። እዚህ የነበረው የድሮ ጽሑፍ `check:cycles`ን "አረንጓዴው፣ በጥንቃቄ የተመረጠው" ጌት ብሎ ጠርቶታል እና `check:circular-deps` (dpdm) 91 ዑደቶችን ስለዘገበ እንደ አጋጅ መቆየቱን አጽድቋል። ያ አረንጓዴ ውጤት **ሐሰተኛ አረንጓዴ** ነበር፦ `check:cycles` 5 ንዑስ ማውጫዎችን (450 ፋይሎች) ቃኝቷል፣ static `import|export … from`ን ብቻ አዛምዷል፣ እና እያንዳንዱን `@/` እና `@omniroute/open-sse/` specifier አስወግዷል፤ ስለዚህ በrepoው ውስጥ የበዙትን dynamic-import + alias ዑደቶች ማየት አልቻለም። ተስተካክሏል፦ ጌቱ አሁን `src` + `open-sse`ን (5023 ፋይሎች) ያስሳል፣ specifierዎችን ከTypeScript AST ይሰበስባል (ስለዚህ `import("…")` ይቆጠራል እና በtype-position ያለ `typeof import("…")` አይቆጠርም)፣ እንዲሁም የtsconfig `paths`ን ይፈታል። 0 ሳይሆን **14** ዑደቶችን ያገኛል። ቀድሞ የነበሩት 14 ዑደቶች በጌት PR ውስጥ ሊስተካከሉ ስለማይችሉ፣ `check:cycles` አሁን **ራቼት** ነው (`--ratchet`፣ በ`quality-baseline.json` ውስጥ ጣሪያው `metrics.cycles.value = 14`፣ `direction: down`) — ማንኛውንም _መመለስ_ ያግዳል እና ቁጥሩ መቀነስ ብቻ ይችላል። CI `npm run check:cycles:ratchet`ን ያስኬዳል። ቀስ በቀስ የማጥፋት ሥራው ከ**A-01** ጋር ይከናወናል። `check:circular-deps` (dpdm) እንደ ሰፊ ሁለተኛ አስተያየት አማካሪ ሆኖ ይቆያል።
- **ውስብስብነት** — ✅ **ተጠናቋል** (`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`)፦ አንድ የESLint ቅኝት፣ cyclomatic+max-lines እና cognitive መነሻ መስመሮች እርስ በርሳቸው ነጻ ሆነው እንዲቆዩ በruleId ይቆጥራል፤ የተናጠል `check:complexity` / `check:cognitive-complexity` ለአካባቢያዊ `--update` ይቆያሉ።
- **የ`/api` ፀረ-ቅዠት** — ✅ **ተጠናቋል** (`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`)፦ አንድ የ`src/app/api` FS ንብረት ዝርዝር፣ openapi-routes + docs-symbols አሁንም በተናጠል ሪፖርት ያደርጋሉ፤ የተናጠል ስክሪፕቶቹ ለአካባቢያዊ ማስኬዶች ይቆያሉ።
- **`check:node-runtime` በ11 ሥራዎች ውስጥ ይሰራል** — ⚠️ **ዝቅተኛ ROI።** እያንዳንዱ የተለየ runner ነው እና ፍተሻው <1s ነው፤ ጠቅላላ ቁጠባው ~10s ነው፣ በምላሹ ግን ርካሽ የየሥራውን ጥበቃ ማጣት ይኖራል። የለውጥ ውጣ ውረዱን አያዋጣም።
- **በCI lint ላይ `typecheck:noimplicit:core`** — ✅ **ከlint ሥራ ተወግዷል** (አማካሪ `continue-on-error` ነበር)፤ አጋጁ የtype ወሰን `typecheck:core` + `check:type-coverage` ነው። አካባቢያዊ ስክሪፕቱ ተቀምጧል።

### መቀየር / መወሰን (የኦፕሬተር ፖሊሲ)

- `check:openapi-security-tiers` (አማካሪ) — ❌ **በንጽሕና ሊቀየር አይችልም።** በ0 ይወጣል፣ ነገር ግን በ`LOCAL_ONLY_API_PREFIXES` ስር ያሉ በርካታ `traffic-inspector` መስመሮች የ`x-loopback-only: true` ማብራሪያ እንደሌላቸው ያስጠነቅቃል። ማስገደድ በመጀመሪያ እነዚያን ማብራሪያዎች ወደ`openapi.yaml` መጨመርን ይጠይቃል።
- `typecheck:noimplicit:core` (አማካሪ) — በአብዛኛው በአጋጁ `check:type-coverage` ራቼት ውስጥ ተካቷል። ወደ ራቼት ይቀየር ወይም ተደጋጋሚው ሁለተኛ የ`tsc` ማለፊያ ይወገድ።
- `test:vitest:ui` (አሁን **አጋጅ**) — ቀድሞ የነበሩ ውድቀቶች በ`vitest.config.ts` ውስጥ በ`// #8618` የክትትል አስተያየቶች በግልጽ ተገልለዋል፤ አዲስ ውድቀቶች ሥራውን ያወድቃሉ።
- `check:secrets` (gitleaks፣ በ3 የተመዘገቡ ሐሰተኛ-አዎንታዊ ውጤቶች ላይ የቀዘቀዘ አጋጅ ራቼት) — 0 ላይ ለመድረስ 3ቱን allowlist ውስጥ ያስገቡ፣ ወይም ወደ አማካሪ ዝቅ ያድርጉት። ከGitHub ቤተኛ secret-scanning + `check:public-creds` ጋር ይደራረባል።
- `check:pr-evidence` (አጋጅ፣ የPR-body ስድ ንባብን በgrep ይፈልጋል) — ከፍተኛ የሐሰት-አዎንታዊ አደጋ አለው፤ ከተወገደ የHard Rule #18 ማስፈጸሚያን ያዳክማል፣ ስለዚህ ይህ እውነተኛ የፖሊሲ ውሳኔ ነው።
- `semgrep` (ራሱን የቻለ አማካሪ) — ለOWASP ቤተሰቦች ከCodeQL ጋር ይደራረባል፤ መነሻ መስመሩን ከራቼት ጋር ያገናኙ ወይም ያስወግዱት።

---

## ተዛማጅ ሰነዶች

- የአቅርቦት ሰንሰለት (provenance፣ SBOM፣ Trivy፣ Scorecard)፦ [`docs/security/SUPPLY_CHAIN.md`](../security/SUPPLY_CHAIN.md)

#### `check-key-completeness` — የቁልፍ-ስብስብ እኩልነት መቆጣጠሪያ

`scripts/i18n/check-key-completeness.mjs` (`npm run i18n:check-keys`፣ job `i18n-ui-coverage`)።
የእያንዳንዱን `src/i18n/messages/<locale>.json` የመጨረሻ ደረጃ ቁልፍ ስብስብ ከ`en.json` ጋር ያነጻጽራል፣ እና
ቁልፉ መቼ እንደታከለ ሳይመለከት በማንኛውም የጎደለ ወይም ተጨማሪ የመጨረሻ ደረጃ ቁልፍ ላይ ይወድቃል። `__MISSING__:` ቦታ-ያዥ ምልክቶች
እንዳሉ ይቆጠራሉ (ይዘታቸው የሬሾ መቆጣጠሪያው ጉዳይ ነው)። ይህ በልዩነት/መቶኛ ላይ የተመሠረቱትን
ሁለት መቆጣጠሪያዎች ሙሉ በሙሉ ያሟላል፦ `check-ui-keys-coverage` ለእያንዳንዱ
locale የ80 % ዝቅተኛ ገደብ ያስፈጽማል (ከ~13,000 ውስጥ 43 ቁልፎች ቢጎድሉም አሁንም 99.7 % ይነበባል)፣ እና `check-new-key-coverage`
PR ወደ `en.json` የሚያክላቸውን ቁልፎች ብቻ ይገመግማል። የlocale ቡድን ቅርንጫፉ በተፈጠረበት ቀን ካለው `en.json`
የሚመነጭ ሲሆን፣ base አዳዲስ ቁልፎችን ማከሉን ሲቀጥል ለቀናት ትርጉም ያከናውናል፤ የቡድኑ PR ራሱ
ምንም ቁልፍ አይጨምርም፣ ስለዚህ batch 1 (#13044) በዘጠኝ locales 43 ቁልፎች ጎድለውት
እና batch 2 (#13660) በስምንት locales 10 ቁልፎች ጎድለውት ሲዋሃዱ (2026-09-15) ሁለቱም ተዛማጅ መቆጣጠሪያዎች ዝም ብለው ቀርተዋል። ቀይ ስህተትን በ
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers` ያስተካክሉ፤ `extra` የመጨረሻ ደረጃ ቁልፍ
ምንጩ እንዳስወገደው ያመለክታል — ከlocale ይሰርዙት። `--warn` ሳያወድቅ ሪፖርት ያደርጋል።
`--catalog=cli` በ`bin/cli/locales` ላይ ተመሳሳዩን ንጽጽር ያካሂዳል (`npm run i18n:check-keys:cli`)፤
ሁለቱም ደረጃዎች በjob `i18n-ui-coverage` ውስጥ ይገኛሉ።

#### `check-new-key-coverage` — የአዲስ-ቁልፍ i18n መቆጣጠሪያ

የ`check-ui-value-drift` ተዛማጅ መቆጣጠሪያ ነው። ያኛው፣ ትርጉሞቹ ሳይዘምኑ የቀረ የእንግሊዝኛ እሴት **እንደገና ሲጻፍ**
ይለያል፤ ይህኛው ደግሞ አንዳንድ locales ሳይቀበሉት የቀረ የእንግሊዝኛ ቁልፍ **ሲታከል**
ይለያል።

`check-ui-keys-coverage` ይህን ዓይነት ማየት አይችልም፦ ለእያንዳንዱ locale የመቶኛ ዝቅተኛ ገደብ ያስፈጽማል፣ እና
ከ~13,000 የመጨረሻ ደረጃ ቁልፎች ውስጥ አሥራ አንዱ ቢጎድል ሽፋኑ 99.9% ሆኖ ይቀራል። የእያንዳንዱ ቋንቋ መቶኛ
“ይህ ባህሪ ሳይተረጎም ተለቀቀ” የሚለውን መግለጽ አይችልም — አንድ ሙሉ ባህሪ ምንም
ጽሑፍ ሳይኖረው በአዲስ locale ውስጥ ሊገባ እና ቁጥሩን ፈጽሞ ላይቀይር ይችላል።

ይህ የሚወክለው ክስተት፦ የOrchestration Canvas Phase 3 አሥራ አንዱን ቁልፎች በወቅቱ
በነበሩት 42 locales ተርጉሟል። ከሰዓታት በኋላ የEU-ቋንቋ ቡድን (#13044) repoውን
ወደ 51 locales አሳደገ፣ እና ዘጠኙ አዲስ ገቢዎች (`el`፣ `et`፣ `ga`፣ `hr`፣ `lt`፣ `lv`፣ `mt`፣ `sl`፣ `sr`)
እነዚህን ፈጽሞ አልተቀበሉም። `deepMergeFallback` በጎደለ ቁልፍ ምትክ እንግሊዝኛን ያስገባል፣ ስለዚህ የብልሽቱ ሁኔታ
ባዶ UI ሳይሆን ያልተተረጎመ UI ነበር — እውነተኛ፣ እና በአወቃቀሩ ምክንያት ዝምተኛ።

እንደ ተዛማጅ መቆጣጠሪያው ይህም **ልዩነትን የሚያውቅ** ነው፤ በmerge base ላይ ያለውን እንግሊዝኛ ከworking
tree ጋር ያነጻጽራል፣ ስለዚህ ቀድሞ የነበሩ ክፍተቶች ባሉበት ይቆያሉ እና መቆጣጠሪያውን ለማብራት ምንም migration አላስፈለገም።

**የ`__MISSING__:<english>` ምልክት መስፈርቱን አያሟላም (ከ2026-09-17 ጀምሮ)።** ቀደም ሲል በሰነድ የተገለጸው
የማዘግየት ዘዴ ነበር — runtimeው ወደ ትክክለኛው እንግሊዝኛ ይመለሳል — ነገር ግን በ
2026-09-16 ስምንት የባህሪ PRs 61 ቁልፎችን አክለው ከመተርጎም ይልቅ ምልክቱን በሁሉም 65 locales ውስጥ
አስገብተዋል፦ ይህ መቆጣጠሪያ ሁሉንም ተቀብሏል፣ PRsን ምንም ነገር አላገዳቸውም፣ እና ማገጃው የእውነተኛ-ትርጉም ሬሾ መቆጣጠሪያ
በመቀጠል በrelease tip ላይ ለሁሉም ወደቀ (pt-BR 3.2 % > 2.5 % + 0.5)። አሁን ምልክት
እንደጎደለ ትርጉም ይቆጠራል። ቀይ ስህተትን በ
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers --batch-size=40`፣ ወይም
ሁሉንም locales በአንድ ጊዜ በ`npm run i18n:translate-new-keys` (`scripts/i18n/translate-new-keys.sh`፣
detached-safe፣ ያለ `OMNIROUTE_TRANSLATION_*` env መጀመርን የሚከለክል) ያስተካክሉ። በእንግሊዝኛ መቆየት ያለበት
ቁልፍ (የተወሰነ የምርት/engine/flag ስም) በ`scripts/i18n/untranslatable-keys.json` ውስጥ መኖር አለበት፣
ከምልክት ጀርባ ፈጽሞ መሆን የለበትም። `vi` ምልክቶችን ሙሉ በሙሉ ይከለክላል (`tests/unit/i18n-vi-completeness.test.ts`)።

#### `check-vitest-exclusions` — የታገዱ-ፈተናዎች መቆጣጠሪያ

በ`vitest.config.ts` `exclude` ዝርዝር ውስጥ ያለ ፋይል የማይሠራ ፈተና ነው፣ እና treeውን ለሚያነብ ሰው
ሽፋን ያለ ይመስላል። ስልሳ ሁለት ፋይሎች
`// #8618 — ቀድሞ የነበረ ውድቀት፤ ሲስተካከል ይህን exclusion ያስወግዱ` ከሚለው አስተያየት ጀርባ ተከማቹ። Issue #8618 በ
2026-08-11 ተዘግቷል፣ እሱ የሚከታተለው ዝርዝር ግን ከ45 ግቤቶች ወደ 62 አደገ፤ እያንዳንዱ አዲስ ግቤት
ወደተዘጋ issue የሚያመለክት አስተያየት ወርሷል። በመጨረሻ ዝርዝሩ ፋይል በፋይል ሲለካ (#13204)፣ **ከ62ቱ 51ዱ
ምንም የsource ለውጥ ሳይደረግ በአሁኑ tree ላይ አልፈዋል**።

መቆጣጠሪያው ወደ እውነተኛ ፋይል የሚያመለክት እያንዳንዱ exclusion (a) የመከታተያ issue እንዲጠቅስ እና
(b) ከተለካው ሁኔታው ጋር በ`config/quality/vitest-exclusions.json` ውስጥ እንዲታይ ይጠይቃል፤ ስለዚህ አንድ መጨመር
በ60-ግቤት array ውስጥ ሌላ አንድ መስመር ከመሆን ይልቅ በተለየ ፋይል ውስጥ ሊገመገም የሚችል diff ይሆናል። ሆን ብሎ
የተገለሉትን ፈተናዎች እንደገና አያስኬድም — ይህ ~10 ደቂቃዎችን ይወስዳል እና በየጊዜው በሚሠራ job ውስጥ መከናወን አለበት፤
inventoryው እያንዳንዱ ለመጨረሻ ጊዜ መቼ እንደተለካ ይመዘግባል።
