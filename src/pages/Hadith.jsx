import React from "react";
import { motion } from "framer-motion";

  const hadiths = [
  {
    id: 1,
    name: "О намерении",
    arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
    transliteration: "Innama al-a'malu bin-niyāt wa innamā likulli imri'in mā nawā",
    translation: "Дела оцениваются по намерениям, и каждому человеку воздастся по его намерению.",
    source: "Сахих Бухари, 1",
  },
  {
    id: 2,
    name: "О доброте",
    arabic: "الدِّينُ النَّصِيحَةُ",
    transliteration: "Ad-dīn an-naṣīḥah",
    translation: "Религия — это искренний совет и доброта.",
    source: "Сахих Муслим, 55",
  },
  {
    id: 3,
    name: "О милосердии",
    arabic: "الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَنُ",
    transliteration: "Ar-rāḥimūna yarḥamuhumu ar-raḥmān",
    translation: "Милующие будут помилованы Милосердным.",
    source: "Сахих Бухари, 6015",
  },
  {
    id: 4,
    name: "О знании",
    arabic: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ",
    transliteration: "Ṭalabul ʿilmi farīḍatun ʿalā kulli muslim",
    translation: "Поиск знаний обязателен для каждого мусульманина.",
    source: "Ибн Маджа, 224",
  },
  {
    id: 5,
    name: "О чистоте",
    arabic: "الطُّهُورُ شَطْرُ الإِيمَانِ",
    transliteration: "Aṭ-ṭuhūru shaṭru al-īmān",
    translation: "Чистота — половина веры.",
    source: "Сахих Муслим, 223",
  },
  {
    id: 6,
    name: "О хорошем слове",
    arabic: "الكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ",
    transliteration: "Al-kalimatu ṭ-ṭayyibatu ṣadaqah",
    translation: "Доброе слово — это садака (благотворительность).",
    source: "Сахих Бухари, 6034",
  },
  {
    id: 7,
    name: "О терпении",
    arabic: "الصَّبْرُ ضِيَاءٌ",
    transliteration: "Aṣ-ṣabru ḍiyāʾ",
    translation: "Терпение — это свет.",
    source: "Сахих Муслим, 2976",
  },
  {
    id: 8,
    name: "О прощении",
    arabic: "مَن لَا يَغْفِرْ لِلنَّاسِ لَا يَغْفِرِ اللَّهُ لَهُ",
    transliteration: "Man lā yaghfir linnās lā yaghfir allāhu lahu",
    translation: "Тот, кто не прощает людям, не будет прощён Аллахом.",
    source: "Сунан Ат-Тирмизи, 2032",
  },
  {
    id: 9,
    name: "О милосердии",
    arabic: "ارْحَمُوا مَن فِي الْأَرْضِ يَرْحَمْكُم مَن فِي السَّمَاءِ",
    transliteration: "Irḥamū man fil-arḍi yarḥamkum man fis-samāʾ",
    translation: "Проявляйте милосердие к тем, кто на земле, и Милосердный проявит милосердие к вам с небес.",
    source: "Сахих Муслим, 2318",
  },
  {
    id: 10,
    name: "О чистоте сердца",
    arabic: "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ",
    transliteration: "Innamal a’malu binniyat",
    translation: "Дела оцениваются по намерениям.",
    source: "Сахих Бухари, 1",
  },
  {
    id: 11,
    name: "О искренности",
    arabic: "إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ",
    transliteration: "Innamal mu’minuna ikhwa",
    translation: "Поистине, верующие — братья.",
    source: "Сахих Муслим, 2587",
  },
  {
    id: 12,
    name: "О улыбке",
    arabic: "تبسمك في وجه أخيك صدقة",
    transliteration: "Tabassumuka fee wajhi akheeka sadaqah",
    translation: "Твоя улыбка брату — это садака (благотворительность).",
    source: "Джами` ат-Тирмизи, 1956",
  },
  {
    id: 13,
    name: "О добрых делах",
    arabic: "خير الناس أنفعهم للناس",
    transliteration: "Khairun nas anfa’uhum linnas",
    translation: "Лучшие люди — те, кто приносит наибольшую пользу людям.",
    source: "Аль-Мударрис, хадис",
  },
  {
    id: 14,
    name: "О праведности",
    arabic: "إِنَّ اللهَ لا يَنظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ وَلَكِنْ يَنظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ",
    transliteration: "Inna Allaha la yanzuru ila suwarikum wa amwalikum walakin yanzuru ila qulubikum wa a’malikom",
    translation: "Воистину, Аллах не смотрит на ваши лица и имущество, но смотрит на ваши сердца и дела.",
    source: "Сахих Муслим, 2564",
  },
  {
    id: 15,
    name: "О щедрости",
    arabic: "السخاء لا يفقر",
    transliteration: "As-sakhaa' la yufqir",
    translation: "Щедрость не ведет к бедности.",
    source: "Сунан Ат-Тирмизи, 655",
  },
];

export default function Hadiths() {
  return (
    <div
      style={{
        backgroundColor: "#191919",  // просто тёмный фон вместо картинки
        minHeight: "100vh",
        padding: "40px 20px",
        color: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          backgroundColor: "rgba(25, 25, 25, 0.9)",
          padding: "30px 40px",
          borderRadius: "20px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.8)",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "50px",
            fontSize: "36px",
            fontWeight: "700",
            color: "#66bb6a",
            textShadow: "0 0 10px #66bb6a",
          }}
        >
          📜 Коллекция Хадисов Пророка ﷺ - 📜 مجموعة أحاديث النبي ﷺ
        </h1>

        {hadiths.map((hadith, index) => (
          <motion.div
            key={hadith.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            style={{
              backgroundColor: "rgba(3, 13, 19, 0.85)",
              padding: "25px 30px",
              borderRadius: "15px",
              marginBottom: "30px",
              boxShadow: "0 4px 15px rgba(102, 187, 106, 0.4)",
              border: "1px solid #4caf50",
              cursor: "default",
            }}
          >
            <h2
              style={{
                color: "#81c784",
                marginBottom: "15px",
                fontWeight: "700",
                fontSize: "24px",
              }}
            >
              {hadith.name}
            </h2>
            <p
              style={{
                fontSize: " 30px",
                direction: "rtl",
                textAlign: "right",
                color: "#d0f0c0",
                marginBottom: "8px",
                fontWeight: "600",
                userSelect: "text",
              }}
            >
              {hadith.arabic}
            </p>
            <p
              style={{
                fontStyle: "italic",
                color: "#a5d6a7",
                marginBottom: "8px",
                userSelect: "text",
              }}
            >
              {hadith.transliteration}
            </p>
            <p
              style={{
                color: "#c8e6c9",
                marginBottom: "10px",
                userSelect: "text",
              }}
            >
              {hadith.translation}
            </p>
            <p
              style={{
                fontSize: "15px",
                color: "#7b8a72",
                fontStyle: "italic",
                userSelect: "text",
              }}
            >
              Источник: {hadith.source}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}