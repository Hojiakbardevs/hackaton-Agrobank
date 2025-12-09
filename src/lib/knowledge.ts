// AI Muhofiz - Knowledge Base
// Bu fayl EXAMINATION_QA_DOCUMENT.txt hujjatidan olingan ma'lumotlarni o'z ichiga oladi

export const KNOWLEDGE_BASE = `
================================================================================
                    UMUMIY SAVOLLAR / GENERAL QUESTIONS
================================================================================

--------------------------------------------------------------------------------
SAVOL 1: Bu loyiha nima haqida? Nimaga xizmat qiladi?
--------------------------------------------------------------------------------
JAVOB:
AI Muhofiz - bu sun'iy intellektga asoslangan telefon firibgarligini aniqlash
tizimi. Asosiy maqsadi - O'zbekiston fuqarolarini telefon firibgarlaridan
himoya qilish.

Muammo: O'zbekistonda telefon firibgarligi holatlari ko'paymoqda. Firibgarlar:
- O'zini bank xodimi sifatida tanishtiradi
- Karta raqami, CVV, PIN kod, SMS kodlarni so'raydi
- Qo'rqitish va shoshilinch vaziyat yaratish orqali aldaydi
- Million so'mlik soxta yutuqlar haqida xabar beradi

Yechim: AI Muhofiz qo'ng'iroq vaqtida:
1. Ovozni matnga aylantiradi (Speech-to-Text)
2. Matnni firibgarlik belgilariga tekshiradi
3. Xavf darajasini 0-100% oralig'ida hisoblaydi
4. Foydalanuvchini real vaqtda ogohlantiradi

--------------------------------------------------------------------------------
SAVOL 2: Qanday texnologiyalar ishlatilgan?
--------------------------------------------------------------------------------
JAVOB:

Backend (Server tomoni):
- Python 3.10+ - asosiy dasturlash tili
- FastAPI - zamonaviy, tezkor web framework
- Uvicorn - ASGI server

Machine Learning (Sun'iy Intellekt):
- Scikit-learn - Gradient Boosting Classifier
- TF-IDF Vectorizer - matnni raqamlarga aylantirish
- TensorFlow Lite - mobil qurilmalar uchun model

Speech Recognition (Ovozni tanish):
- Vosk - offline speech-to-text (Uzbek, Russian, English)
- OpenAI Whisper - yuqori aniqlikdagi STT (optional)
- UzbekVoice API - O'zbek tili uchun maxsus STT

Audio Analysis (Ovoz tahlili):
- Librosa - ovoz xususiyatlarini tahlil qilish
- NumPy - matematik hisob-kitoblar

Privacy & Security:
- Rate Limiting (SlowAPI) - so'rovlarni cheklash
- Data Masking - maxfiy ma'lumotlarni yashirish
- Secure File Deletion - xavfsiz fayllarni o'chirish

--------------------------------------------------------------------------------
SAVOL 3: Loyiha arxitekturasi qanday?
--------------------------------------------------------------------------------
JAVOB:

fraudguard/
├── app/
│   ├── main.py              # Asosiy FastAPI ilova
│   ├── config.py            # Sozlamalar
│   ├── privacy.py           # Maxfiylik himoyasi
│   ├── models/
│   │   ├── schemas.py       # Pydantic data modellari
│   │   └── keywords.py      # Firibgarlik so'zlari bazasi
│   └── services/
│       ├── fraud_detector.py    # NLP asosidagi aniqlash
│       ├── risk_scorer.py       # Xavf darajasi hisoblash
│       ├── ml_classifier.py     # ML model
│       ├── audio_processor.py   # Audio ishlov berish
│       ├── voice_analyzer.py    # Ovoz tahlili
│       └── offline/
│           ├── sms_detector.py      # SMS firibgarlik
│           ├── keyword_spotter.py   # Kalit so'z aniqlash
│           └── offline_transcriber.py # Offline STT

================================================================================
              XAVF DARAJASI HISOBLASH / RISK SCORING SYSTEM
================================================================================

--------------------------------------------------------------------------------
SAVOL 4: LOW, MEDIUM, HIGH, DANGER qanday aniqlanadi?
--------------------------------------------------------------------------------
JAVOB:

Xavf darajalari quyidagi chegaralar asosida aniqlanadi:

╔═══════════════╦══════════════╦═══════════════════════════════════════════╗
║ Daraja        ║ Ball (0-100) ║ Ma'nosi                                   ║
╠═══════════════╬══════════════╬═══════════════════════════════════════════╣
║ LOW (Past)    ║ 0-30         ║ Xavfsiz - oddiy suhbat                    ║
║ MEDIUM (O'rta)║ 31-50        ║ Ehtiyot - ba'zi shubhali belgilar bor    ║
║ HIGH (Yuqori) ║ 51-70        ║ Xavfli - firibgarlik ehtimoli yuqori     ║
║ DANGER (Xavf) ║ 71-100       ║ Juda xavfli - aniq firibgarlik belgilari ║
╚═══════════════╩══════════════╩═══════════════════════════════════════════╝

--------------------------------------------------------------------------------
SAVOL 5: Xavf balli (Risk Score) qanday hisoblanadi?
--------------------------------------------------------------------------------
JAVOB:

Xavf balli 5 ta komponentdan iborat va har birining o'z vazni bor:

╔═════════════════════╦═══════════╦════════════════════════════════════════╗
║ Komponent           ║ Vazn      ║ Nima hisoblanadi                       ║
╠═════════════════════╬═══════════╬════════════════════════════════════════╣
║ 1. Keywords         ║ 30%       ║ Topilgan firibgarlik so'zlari          ║
║ 2. Sentiment        ║ 20%       ║ Shoshilinch, tahdid, manipulyatsiya    ║
║ 3. Voice Features   ║ 10%       ║ Gapirish tezligi, stress darajasi      ║
║ 4. Fraud Patterns   ║ 20%       ║ Firibgarlik namunalari (regex)         ║
║ 5. ML Model         ║ 20%       ║ Machine Learning bashorati             ║
╚═════════════════════╩═══════════╩════════════════════════════════════════╝

--------------------------------------------------------------------------------
SAVOL 6: Kalit so'zlar (Keywords) qanday aniqlanadi va balllanadi?
--------------------------------------------------------------------------------
JAVOB:

10 ta firibgarlik kategoriyasi mavjud:

╔══════════════════════════╦═══════╦══════════════════════════════════════╗
║ Kategoriya               ║ Vazn  ║ Misollar                             ║
╠══════════════════════════╬═══════╬══════════════════════════════════════╣
║ bank_information_request ║ 0.95  ║ karta raqami, CVV, PIN, SMS kod      ║
║ money_request            ║ 0.90  ║ pul o'tkazing, transfer qiling       ║
║ threat_intimidation      ║ 0.85  ║ bloklash, sudga berish, jarima       ║
║ prize_scam               ║ 0.80  ║ million yutdingiz, sovrin            ║
║ investment_scam          ║ 0.75  ║ 100% foiz, kafolatlangan daromad     ║
║ authority_impersonation  ║ 0.75  ║ bank xodimi, politsiya               ║
║ artificial_urgency       ║ 0.70  ║ tezda, hoziroq, vaqt yo'q            ║
║ personal_info_request    ║ 0.70  ║ pasport, JSHSHIR, manzil             ║
║ social_engineering       ║ 0.70  ║ hech kimga aytmang, sir              ║
║ suspicious_action        ║ 0.65  ║ link bosing, ilova yuklab oling      ║
╚══════════════════════════╩═══════╩══════════════════════════════════════╝

--------------------------------------------------------------------------------
SAVOL 7: Sentiment (Kayfiyat tahlili) qanday ishlaydi?
--------------------------------------------------------------------------------
JAVOB:

3 ta sentiment parametri aniqlanadi:

1. URGENCY SCORE (Shoshilinchlik - 0-100):
   So'zlar: tezda, hoziroq, darhol, vaqt yo'q, shoshilinch

2. MANIPULATION SCORE (Manipulyatsiya - 0-100):
   So'zlar: ishoning, yordam, hech kimga aytmang, sir saqlang

3. THREAT SCORE (Tahdid - 0-100):
   So'zlar: bloklash, sudga, jarima, qamoq, xaker

================================================================================
            MACHINE LEARNING MODEL / SUN'IY INTELLEKT MODELI
================================================================================

--------------------------------------------------------------------------------
SAVOL 9: ML model qanday ishlaydi?
--------------------------------------------------------------------------------
JAVOB:

MODEL ARXITEKTURASI:
1. TF-IDF Vectorizer - matnni raqamli vektorga aylantiradi
2. Gradient Boosting Classifier - classification algoritmi

Parametrlar:
- max_features=5000 - Max 5000 ta so'z
- ngram_range=(1, 3) - 1-3 so'zli kombinatsiyalar
- min_df=2 - Kamida 2 marta uchrashi kerak

Gradient Boosting:
- n_estimators=100 - 100 ta decision tree
- max_depth=5 - Har bir tree chuqurligi
- learning_rate=0.1 - O'rganish tezligi

--------------------------------------------------------------------------------
SAVOL 11: Model aniqlik ko'rsatkichlari qanday?
--------------------------------------------------------------------------------
JAVOB:

Training natijasi:
- Training Accuracy: ~95-98%
- Test Accuracy: ~92-95%
- Cross-Validation: ~90-93% (+/- 3-5%)

Classification Report (Fraud class):
- Precision: ~94-96% (aniq bashorat qilish)
- Recall: ~91-94% (hamma firibgarlikni topish)
- F1-Score: ~92-95% (precision va recall balansi)

================================================================================
                    OFFLINE IMKONIYATLAR / OFFLINE FEATURES
================================================================================

--------------------------------------------------------------------------------
SAVOL 12: Nima uchun offline rejim kerak?
--------------------------------------------------------------------------------
JAVOB:

Sabablari:
1. MAXFIYLIK: Foydalanuvchi ovozi internetga yuborilmaydi
2. TEZLIK: Lokal ishlov berish tezroq (server kutish yo'q)
3. ISHONCHLILIK: Internet yo'q joyda ham ishlaydi
4. XAVFSIZLIK: Ma'lumotlar qurilmadan chiqmaydi

Offline xizmatlar:
- Vosk STT (ovozni matnga) - 100% offline
- Keyword spotting - 100% offline
- SMS fraud detection - 100% offline
- ML classification - 100% offline
- Risk scoring - 100% offline

================================================================================
                    SMS FIRIBGARLIK ANIQLASH / SMS FRAUD DETECTION
================================================================================

--------------------------------------------------------------------------------
SAVOL 14: SMS firibgarlik qanday aniqlanadi?
--------------------------------------------------------------------------------
JAVOB:

SMSFraudDetector klassi quyidagi tahlillarni bajaradi:

1. OTP KOD ANIQLASH:
   - 4-8 xonali raqamlar qidiriladi

2. BANK SMS ANIQLASH:
   40+ O'zbekiston banklari aniqlash:
   - Kapitalbank, NBU, Agrobank, Ipoteka bank
   - Click, Payme, Humo, UzCard
   - Hamkorbank, Davr bank, va boshqalar

3. XAVF DARAJALARI:
╔══════════════╦═══════════════════════════════════════════════════════╗
║ Daraja       ║ Sharoit                                               ║
╠══════════════╬═══════════════════════════════════════════════════════╣
║ SAFE         ║ OTP yo'q, bank SMS emas                               ║
║ SUSPICIOUS   ║ Bank SMS, lekin OTP yo'q                              ║
║ DANGER       ║ OTP bor + qo'ng'iroq vaqtida keldi                    ║
║ CRITICAL     ║ Bank OTP + qo'ng'iroq vaqtida + firibgarlik pattern   ║
╚══════════════╩═══════════════════════════════════════════════════════╝

================================================================================
                    MAXFIYLIK HIMOYASI / PRIVACY PROTECTION
================================================================================

--------------------------------------------------------------------------------
SAVOL 16: Ma'lumotlar qanday himoyalanadi?
--------------------------------------------------------------------------------
JAVOB:

1. DATA MASKING (Ma'lumotlarni yashirish):
Karta raqami: 1234-5678-9012-3456 → ****-****-****-3456
Telefon: +998901234567 → +998*****4567
OTP kod: 123456 → ******

2. SECURE FILE DELETION - Xavfsiz fayllarni o'chirish

3. PRIVACY HEADERS - Barcha API javoblarda maxfiylik sarlavhalari

--------------------------------------------------------------------------------
SAVOL 17: Rate limiting nima uchun kerak?
--------------------------------------------------------------------------------
JAVOB:

Rate limiting - so'rovlar sonini cheklash.

SABABLARI:
1. DoS (Denial of Service) hujumlardan himoya
2. Server resurslarini tejash
3. API suiste'molini oldini olish
4. Bot hujumlarini bloklash

CHEGARALAR:
- Dashboard: 60/minute
- API Info: 30/minute
- Text Analysis: 20/minute
- Audio Analysis: 10/minute

================================================================================
                    API ENDPOINTS / API SO'NGGI NUQTALARI
================================================================================

--------------------------------------------------------------------------------
SAVOL 18: Qanday API endpointlar mavjud?
--------------------------------------------------------------------------------
JAVOB:

ONLINE ENDPOINTS:
- / - Web dashboard (GET)
- /api - API ma'lumoti (GET)
- /health - Xizmat holati (GET)
- /api/v1/analyze/text - Matn tahlili (POST)
- /api/v1/analyze - Audio tahlili base64/URL (POST)
- /api/v1/analyze/file - Audio fayl tahlili (POST)
- /api/v1/stream - Real-time streaming WebSocket (WS)

OFFLINE ENDPOINTS:
- /api/v1/offline/sms - SMS firibgarlik tahlili (POST)
- /api/v1/offline/keywords - Kalit so'zlarni aniqlash (POST)
- /api/v1/offline/transcribe - Offline ovozni matnga (POST)

================================================================================
                    FLUTTER INTEGRATSIYA / MOBILE APP
================================================================================

--------------------------------------------------------------------------------
SAVOL 21: Flutter ilovasi qanday ishlaydi?
--------------------------------------------------------------------------------
JAVOB:

Flutter ilovasi uchun kerakli fayllar:
1. fraud_model.tflite (292 KB) - TensorFlow Lite model
2. vocabulary.json (6.25 KB) - So'zlar lug'ati
3. fraud_keywords.json (924 bytes) - Firibgarlik so'zlari

JAMI HAJM: ~300 KB - juda kichik!

Qo'ng'iroq vaqtida ishlash:
- Android: CallScreeningService
- iOS: CallKit
- Audio yozib olish va real-time tahlil

================================================================================
                    VOICE ANALYSIS / OVOZ TAHLILI
================================================================================

--------------------------------------------------------------------------------
SAVOL 22: Ovoz xususiyatlari qanday tahlil qilinadi?
--------------------------------------------------------------------------------
JAVOB:

VoiceFeatures modeli 6 ta parametrni o'z ichiga oladi:

1. SPEAKING_RATE (Gapirish tezligi):
   - O'lcham: so'z/daqiqa (WPM)
   - Normal: 120-150 WPM
   - Shubhali: >180 WPM (juda tez = shoshilmoqda)

2. PITCH_MEAN (O'rtacha ovoz balandligi):
   - O'lcham: Hz (Hertz)
   - Erkaklar: 85-155 Hz
   - Ayollar: 165-255 Hz

3. STRESS_LEVEL (Stress darajasi - 0-100):
   - Hisoblash: pitch variatsiyasi + energy o'zgarishi
   - >70 = yuqori stress

================================================================================
                    AMALIY MISOLLAR / PRACTICAL EXAMPLES
================================================================================

--------------------------------------------------------------------------------
SAVOL 23: Haqiqiy firibgarlik misolini ko'rsating
--------------------------------------------------------------------------------
JAVOB:

KIRISH MATNI:
"Assalomu alaykum, men Kapitalbank xavfsizlik xizmatidan qo'ng'iroq
qilyapman. Sizning hisobingizdan shubhali tranzaksiya aniqlandi.
Tezda karta raqamingizni va orqa tomondagi 3 xonali kodni ayting,
aks holda hisobingiz 5 daqiqa ichida bloklanadi!"

TAHLIL NATIJASI:

KEYWORDS TOPILDI:
- "bank" (authority: 0.75)
- "xavfsizlik xizmati" (authority: 0.70)
- "karta raqami" (bank_info: 0.95)
- "3 xonali kod" / "CVV" (bank_info: 0.95)
- "tezda" (urgency: 0.70)
- "bloklanadi" (threat: 0.85)

YAKUNIY NATIJA:
Risk Score: 89.5
Risk Level: DANGER
Is Fraud: TRUE
Warning: XAVF! Firibgarlik belgilari aniqlandi. Shaxsiy ma'lumotlaringizni bermang!

================================================================================
                    DOCKER VA DEPLOYMENT
================================================================================

--------------------------------------------------------------------------------
SAVOL 29: Docker qanday ishlatiladi?
--------------------------------------------------------------------------------
JAVOB:

ISHGA TUSHIRISH:
# Build
docker build -t ai-muhofiz .

# Run
docker run -p 8080:8080 ai-muhofiz

# Docker Compose
docker-compose up -d

================================================================================
                    XULOSA / CONCLUSION
================================================================================

AI Muhofiz - bu murakkab, ko'p qatlamli tizim:

1. FRONTEND: Dashboard (HTML/CSS/JS)
2. BACKEND: FastAPI (Python)
3. ML: Sklearn + TensorFlow Lite
4. STT: Vosk + Whisper
5. NLP: Keyword detection + Sentiment analysis
6. SECURITY: Privacy-first design

ASOSIY TEXNOLOGIYALAR:
- Python 3.10+
- FastAPI + Uvicorn
- Scikit-learn (Gradient Boosting)
- TensorFlow Lite
- Vosk / Whisper
- Librosa (audio analysis)
- Docker

UNIQUE FEATURES:
- 100% Offline capability
- Privacy-first architecture
- Multi-language support (UZ, RU, EN)
- Real-time streaming analysis
- SMS fraud detection
- Voice stress analysis

================================================================================
                    JAMOA / TEAM INFORMATION
================================================================================

--------------------------------------------------------------------------------
SAVOL 42: Jamoa tarkibi qanday? Kimlar ishtirok etadi?
--------------------------------------------------------------------------------
JAVOB:
AI Muhofiz loyihasida 6 kishilik professional fintech va antifrod tajribaga 
ega jamoa ishtirok etadi. Har bir a'zo o'z yo'nalishida chuqur ekspert va 
loyihaga bevosita hissa qo'shadi.

Jamoa a'zolari:
1. Abdulhakimov Hojiakbar - Founder & Frontend Lead
2. Azizbek Xaitov - Co-Founder & Startup Advisor
3. Abulqosim Rafiqov - CTO  Fullstack AI Engineer
4. Xusan Xukumov - QA/Software Engineer
5. Marjona Bobonazarova - Junior AI Developer
6. Hulkarbonu Rustamova - Junior Software Engineer

--------------------------------------------------------------------------------
SAVOL 43: Abdulhakimov Hojiakbar haqida ma'lumot bering
--------------------------------------------------------------------------------
JAVOB:
Abdulhakimov Hojiakbar - Founder & Frontend Lead

Lavozimi: Middle Frontend Software Engineer
Tajriba: 5 yil
Mas'uliyat: Dizayn, codlash, UI va AI yo'nalishlarida javobgar
Qo'shimcha: Suniy intellekt tadqiqotlar institutida bosh mutaxassis

Texnologiyalar:
- React
- TypeScript
- Next.js
- Tailwind CSS
- UI/UX
- AI

Ijtimoiy tarmoqlar:
- LinkedIn: mavjud
- GitHub: mavjud

--------------------------------------------------------------------------------
SAVOL 44: Azizbek Xaitov haqida ma'lumot bering
--------------------------------------------------------------------------------
JAVOB:
Azizbek Xaitov - Co-Founder & Startup Advisor

Tajriba: 5+ yil TDIU startap ekotizimida
Ekspertiza: 
- Yangi g'oyalarni tezkor validatsiya qilish
- Jamoalarni rivojlantirish
- Biznes modeli va moliyaviy strategiyalarni shakllantirishda amaliy ekspert

Yo'nalishlar:
- FinTech
- AgTech
- EdTech
- GovTech
- Smart City
- IoT
- GreenTech

Ijtimoiy tarmoqlar:
- LinkedIn: mavjud

--------------------------------------------------------------------------------
SAVOL 45: Abulqosim Rafiqov haqida ma'lumot bering
--------------------------------------------------------------------------------
JAVOB:
Abulqosim Rafiqov - Fullstack AI Engineer

Tajriba: 4 yil
Hozirgi lavozim: Nihol kompaniyasida Senior Software Engineer
Ekspertiza: Django, PostgreSQL, Machine Learning bo'yicha chuqur bilim
Mutaxassisligi: RESTful API, optimizatsiya va test-driven development

Texnologiyalar:
- Python
- Django
- PostgreSQL
- React
- Node.js
- Machine Learning
- AI/ML
- RESTful API

Ijtimoiy tarmoqlar:
- LinkedIn: mavjud
- GitHub: mavjud

--------------------------------------------------------------------------------
SAVOL 46: Xusan Xukumov haqida ma'lumot bering
--------------------------------------------------------------------------------
JAVOB:
Xusan Xukumov - QA/Software Engineer

Hozirgi lavozim: Evertech kompaniyasida QA/Software Engineer
Tajriba: 2 yil QA tajribasi
Mutaxassisligi: Flutter, Automation, Python, Java
Qo'shimcha: GenAI va LLM fine-tuning bilan shug'ullanadi

Texnologiyalar:
- Flutter
- QA Automation
- Python
- Java
- GenAI
- ML

Ijtimoiy tarmoqlar:
- GitHub: mavjud

--------------------------------------------------------------------------------
SAVOL 47: Marjona Bobonazarova haqida ma'lumot bering
--------------------------------------------------------------------------------
JAVOB:
Marjona Bobonazarova - Junior AI Developer

Ta'lim: IDU universiteti talabasi
Mutaxassisligi: ML developer
Yo'nalish: Machine Learning va AI yo'nalishida o'qiydi va loyihalar bilan 
shug'ullanadi

Texnologiyalar:
- Machine Learning
- Python
- AI/ML
- Data Science

Ijtimoiy tarmoqlar:
- LinkedIn: mavjud
- GitHub: mavjud

--------------------------------------------------------------------------------
SAVOL 48: Hulkarbonu Rustamova haqida ma'lumot bering
--------------------------------------------------------------------------------
JAVOB:
Hulkarbonu Rustamova - Junior Software Engineer

Hozirgi lavozim: Uzbek Industrial and Construction Bankda Project Management
Startup: LenguaStory-AI startup asoschisi
Ta'lim: Toshkent Davlat Iqtisodiyot Universiteti

Texnologiyalar:
- Angular
- Oracle
- Business Strategy
- Banking

Ijtimoiy tarmoqlar:
- LinkedIn: mavjud

--------------------------------------------------------------------------------
SAVOL 49: Jamoa qanday tarzda ishlaydi?
--------------------------------------------------------------------------------
JAVOB:
AI Muhofiz jamoasi 6 kishilik professional guruh bo'lib, har bir a'zo o'z 
yo'nalishida chuqur ekspertizaga ega:

1. Frontend & Design: Hojiakbar (React, TypeScript, UI/UX)
2. Biznes strategiya: Azizbek (startup advisor, FinTech ekspert)
3. Backend & AI: Abulqosim (Python, Django, ML)
4. QA & Mobile: Xusan (Flutter, Testing, GenAI)
5. AI Development: Marjona (Machine Learning, Data Science)
6. Banking & Management: Hulkarbonu (Project Management, Banking)

Jamoa fintech va antifrod tajribaga ega bo'lib, Agrobank + AI Muhofiz 
loyihasiga bevosita hissa qo'shadi.

Tayyorladi: AI Muhofiz Team
Sana: 2024
================================================================================
`;

export const SYSTEM_PROMPT = `Sen "AI Muhofiz" loyihasi bo'yicha professional yordamchi konsultantsan.

⚠️ KRITIK: FAQAT QUYIDAGI KNOWLEDGE_BASE ASOSIDA JAVOB BER! HECH QANDAY O'ZINGDAN TAXMIN YO'Q!

MUTLAQO AMAL QILISH KERAK:
1. ✅ Savol KNOWLEDGE_BASE'da bo'lsa → aniq, tushunarli, strukturalashtirilgan javob ber
2. ❌ Kontekstda ma'lumot yo'q bo'lsa → "Kechirasiz, bu haqda ma'lumot hujjatda mavjud emas. AI Muhofiz haqida boshqa savol bering"
3. 🚫 Mavzudan tashqari bo'lsa → "Bu savol AI Muhofiz'ga tegishli emas. Iltimos, loyiha haqida so'rang"
4. 🚫 HECH QACHON o'zingdan qo'shimcha yoki tashxi bilim qoashma!

JAVOB USLUBI:
- Qisqa savolga qisqa javob (1-3 jumla)
- Batafsil savolga batafsil, jadval va misollar bilan javob
- FAQAT KNOWLEDGE_BASE'dan misol keltir
- Professional tarzda, O'zbek tilida, aniq formatda

KONTEKST (MA'LUMOTLAR BAZASI):
${KNOWLEDGE_BASE}
`;
