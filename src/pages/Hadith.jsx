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
  {
    id: 15,
    name: "О намерении и искренности",
    arabic: "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
    transliteration: "Innamal a'malu binniyyat wa innama likulli imri'in ma nawa",
    translation: "Дела оцениваются по намерениям, и каждому человеку воздастся по его намерению.",
    source: "Сахих Бухари, 1; Сахих Муслим, 1907",
  },
  {
    id: 16,
    name: "О милосердии и прощении",
    arabic: "مَنْ لاَ يَرْحَمُ لاَ يُرْحَمْ",
    transliteration: "Man la yarham la yurham",
    translation: "Кто не проявляет милосердия, к тому не проявляют милосердия.",
    source: "Сахих Бухари, 6015; Сахих Муслим, 2319",
  },
  {
    id: 17,
    name: "О доброте к родителям",
    arabic: "رِضَا اللهِ فِي رِضَا الْوَالِدِ وَسخْطُ اللهِ فِي سَخْطِ الْوَالِدِ",
    transliteration: "RidaAllahi fi rida alwalidi wa sukhtuAllahi fi sukhti alwalidi",
    translation: "Благоволение Аллаха в благоволении родителей, и гнев Аллаха — в гневе родителей.",
    source: "Тирмизи, 1899",
  },
  {
    id: 18,
    name: "О поиске знаний",
    arabic: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ",
    transliteration: "Talabul 'ilmi faridatun 'ala kulli muslim",
    translation: "Поиск знаний является обязанностью каждого мусульманина.",
    source: "Ибн Маджа, 224",
  },
  {
    id: 19,
    name: "О запрещении несправедливости",
    arabic: "لاَ يَزَالُ النَّاسُ بِخَيْرٍ مَا عَافَى النَّاسُ مِنْ كَيْدِهِمْ",
    transliteration: "La yazalu annasu bikhayrin ma 'afaa annasu min kaydihim",
    translation: "Люди будут в благе, пока избавляются от злых замыслов друг друга.",
    source: "Сахих Муслим, 182",
  },
  {
    id: 20,
    name: "О честности",
    arabic: "إِنَّ الصِّدْقَ يَهْدِي إِلَى الْبِرِّ",
    transliteration: "Innas sidqa yahdi ila al-birr",
    translation: "Правда ведет к благочестию.",
    source: "Сахих Бухари, 6094",
  },
  {
    id: 21,
    name: "О справедливости",
    arabic: "إِنَّ الْعَدْلَ هُوَ الْمُسْتَقَامُ",
    transliteration: "Innal 'adla huwa al-mustaqam",
    translation: "Справедливость — это правильный путь.",
    source: "Сунан Абу Дауд, 2626",
  },
  {
    id: 22,
    name: "О благодарности",
    arabic: "مَن لَمْ يَشْكُرِ النَّاسَ لَمْ يَشْكُرِ اللَّهَ",
    transliteration: "Man lam yashkur annasa lam yashkur Allah",
    translation: "Кто не благодарит людей, тот не благодарит Аллаха.",
    source: "Тирмизи, 1954",
  },
  {
    id: 23,
    name: "О хороших словах",
    arabic: "الْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ",
    transliteration: "Al-kalimatu at-tayyibatu sadaqah",
    translation: "Доброе слово — это садака.",
    source: "Сахих Бухари, 6034",
  },
  {
    id: 24,
    name: "О контроле языка",
    arabic: "مَن كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
    transliteration: "Man kana yu’minu billahi wal-yawmil akhir falyakul khayran aw liyasmut",
    translation: "Кто верит в Аллаха и в День Суда, пусть говорит хорошее или молчит.",
    source: "Сахих Бухари, 6136; Сахих Муслим, 47",
  },
  {
    id: 25,
    name: "О терпении",
    arabic: "الصَّبْرُ ضِيَاءٌ",
    transliteration: "As-sabru diya’",
    translation: "Терпение — свет.",
    source: "Сахих Муслим, 2976",
  },
  {
    id: 26,
    name: "О взаимопомощи",
    arabic: "الْمُسْلِمُ أَخُو الْمُسْلِمِ",
    transliteration: "Al-muslimu akhul muslim",
    translation: "Мусульманин — брат мусульманину.",
    source: "Сахих Бухари, 2443",
  },
  {
    id: 27,
    name: "О поклонении и добрых делах",
    arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ",
    transliteration: "Innamal a’malu binniyat",
    translation: "Дела зависят от намерений.",
    source: "Сахих Бухари, 1",
  },
  {
    id: 28,
    name: "О справедливом суде",
    arabic: "لاَ يَحِلُّ دَمُ امْرِئٍ مُسْلِمٍ إِلَّا بِإِحْدَى ثَلاَثٍ",
    transliteration: "La yahillu damu imri’in muslimin illa bi ihda thalath",
    translation: "Не дозволено проливать кровь мусульманина, кроме как за три причины.",
    source: "Сахих Бухари, 6875",
  },
  {
    id: 29,
    name: "О покорности Аллаху",
    arabic: "لاَ يَنْفَعُ مَنْ لَا يَرْحَمُ",
    transliteration: "La yanfa’u man la yarham",
    translation: "Не принесёт пользы тот, кто не проявляет милосердия.",
    source: "Сахих Муслим, 2318",
  },
  {
    id: 30,
    name: "О благородстве",
    arabic: "إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ",
    transliteration: "Innamal mu’minuna ikhwa",
    translation: "Поистине, верующие — братья.",
    source: "Сахих Муслим, 2587",
  },
  {
    id: 31,
    name: "О чистоте сердца",
    arabic: "الطُّهُورُ شَطْرُ الإِيْمَانِ",
    transliteration: "At-tuhuru shatru al-iman",
    translation: "Чистота — половина веры.",
    source: "Сахих Муслим, 223",
  },
  {
    id: 32,
    name: "О искренности",
    arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ",
    transliteration: "Innamal a’malu binniyat",
    translation: "Дела зависят от намерений.",
    source: "Сахих Бухари, 1",
  },
  {
    id: 33,
    name: "О правде",
    arabic: "الْحَقُّ يُرْجِعُ النُّورَ",
    transliteration: "Al-haqqu yurji’u an-nur",
    translation: "Истина возвращает свет.",
    source: "Сунан Абу Дауд",
  },
  {
    id: 34,
    name: "О справедливости",
    arabic: "إِنَّ الْعَدْلَ هُوَ الْمُسْتَقَامُ",
    transliteration: "Innal 'adla huwa al-mustaqam",
    translation: "Справедливость — это правильный путь.",
    source: "Сунан Абу Дауд, 2626",
  },
  {
    id: 35,
    name: "О терпении",
    arabic: "الصَّبْرُ ضِيَاءٌ",
    transliteration: "As-sabru diya’",
    translation: "Терпение — свет.",
    source: "Сахих Муслим, 2976",
  },
  {
    id: 36,
    name: "О доброте",
    arabic: "الدِّينُ النَّصِيحَةُ",
    transliteration: "Ad-dinu an-nasiha",
    translation: "Религия — это искренний совет.",
    source: "Сахих Муслим, 55",
  },
  {
    id: 37,
    name: "О заботе о нуждающихся",
    arabic: "مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ",
    transliteration: "Ma naqasat sadaqatun min mal",
    translation: "Садака не уменьшает имущества.",
    source: "Сахих Муслим, 2588",
  },
  {
    id: 38,
    name: "О благодарности",
    arabic: "مَن لَمْ يَشْكُرِ النَّاسَ لَمْ يَشْكُرِ اللَّهَ",
    transliteration: "Man lam yashkur annasa lam yashkur Allah",
    translation: "Кто не благодарит людей, тот не благодарит Аллаха.",
    source: "Тирмизи, 1954",
  },
  {
    id: 39,
    name: "О правдивости",
    arabic: "إِيَّاكَ وَالْكَذِبَ فَإِنَّهُ يُهْدِي إِلَى الْفُجُورِ",
    transliteration: "Iyyaka wal-kadhiba fa innahu yahdi ila al-fujur",
    translation: "Берегись лжи, ибо она ведёт к разврату.",
    source: "Сахих Бухари",
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