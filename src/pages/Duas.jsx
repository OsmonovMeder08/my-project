import React from "react";
import { motion } from "framer-motion";

const duas = [
  {
    id: 1,
    name: "Дуа перед сном",
    arabic: "اللّهُمَّ بِاسْمِكَ أَمُوتُ وَأَحْيَا",
    transliteration: "Allahumma bismika amutu wa ahya",
    translation: "О Аллах, с Твоим именем я умираю и оживаю.",
  },
  {
    id: 2,
    name: "Дуа после сна",
    arabic: "الْـحَمْـدُ للهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا",
    transliteration: "Alhamdu lillaahil-lathee ahyaanaa ba'da maa amaatanaa",
    translation: "Хвала Аллаху, Который оживил нас после смерти.",
  },
  {
    id: 3,
    name: "Дуа перед едой",
    arabic: "بِسْمِ اللَّهِ",
    transliteration: "Bismillah",
    translation: "С именем Аллаха.",
  },
  {
    id: 4,
    name: "Дуа после еды",
    arabic: "الْـحَمْـدُ للهِ الَّذِي أَطْعَمَنِي وَسَقَانِي",
    transliteration: "Alhamdu lillaahil-lathee at'amanee wasaqaanee",
    translation: "Хвала Аллаху, Который накормил и напоил меня.",
  },
  {
    id: 5,
    name: "Дуа при тревоге",
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ...",
    transliteration: "Allahumma inni a'udhu bika minal-hammi wal-hazan...",
    translation: "О Аллах, я прибегаю к Тебе от тревоги и печали…",
  },
  {
    id: 6,
    name: "Дуа при входе в дом",
    arabic: "بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا",
    transliteration: "Bismillahi walajna wa bismillahi kharajna",
    translation: "С именем Аллаха мы вошли, и с именем Аллаха мы вышли.",
  },
  {
    id: 7,
    name: "Дуа при выходе из дома",
    arabic: "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ",
    transliteration: "Bismillahi tawakkaltu 'ala Allah",
    translation: "С именем Аллаха, я полагаюсь на Аллаха.",
  },
  {
    id: 8,
    name: "Дуа при входе в мечеть",
    arabic: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
    transliteration: "Allahumma iftah li abwaba rahmatik",
    translation: "О Аллах, открой мне врата Твоей милости.",
  },
  {
    id: 9,
    name: "Дуа при выходе из мечети",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ",
    transliteration: "Allahumma inni as'aluka min fadlik",
    translation: "О Аллах, я прошу у Тебя Твоей милости.",
  },
  {
    id: 10,
    name: "Дуа при грусти",
    arabic: "حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ",
    transliteration: "Hasbiyallahu la ilaha illa Huwa",
    translation: "Достаточно мне Аллаха. Нет божества, кроме Него.",
  },
  {
    id: 11,
    name: "Дуа при входе в туалет",
    arabic: "اللَّهُ أَجْرَكَ مِنَ الْخَبَثِ وَالْخَبَائِثِ",
    transliteration: "Allah ajrak minal khabathi walkhaba’ith",
    translation: "Пусть Аллах вознаградит тебя за избавление от нечистот мужских и женских.",
  },
  {
    id: 12,
    name: "Дуа при выходе из туалета",
    arabic: "غُفْرَانَكَ",
    transliteration: "Ghufranak",
    translation: "Прошу у Тебя прощения.",
  },
  {
    id: 13,
    name: "Дуа перед учебой",
    arabic: "رَبِّ زِدْنِي عِلْمًا",
    transliteration: "Rabbi zidni ilma",
    translation: "Господи, прибавь мне знания.",
  },
  {
    id: 14,
    name: "Дуа для защиты от зла",
    arabic: "أَعُوذُ بِكَلِمَاتِ اللهِ التَّامَّةِ مِنْ شَرِّ مَا خَلَقَ",
    transliteration: "A'udhu bikalimatillahi tammati min sharri ma khalaq",
    translation: "Прибегаю к совершенным словам Аллаха от зла того, что Он создал.",
  },
  {
    id: 15,
    name: "Дуа перед сном (альтернативное)",
    arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
    transliteration: "Bismika Allahumma amutu wa ahya",
    translation: "С Твоим именем, о Аллах, умираю и живу.",
  },
  {
    id: 16,
    name: "Дуа при встрече с кем-то",
    arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ",
    transliteration: "Assalamu ‘alaykum wa rahmatullahi wa barakatuh",
    translation: "Мир вам, милость Аллаха и Его благословения.",
  },
  {
    id: 17,
    name: "Дуа при расставании",
    arabic: "أَنتَ الصَّاحِبُ فِي السَّفَرِ وَالْخَلِيفَةُ فِي الْأَهْلِ",
    transliteration: "Antas-sahibu fis-safari wal-khalifatu fil-ahli",
    translation: "Ты — спутник в пути и хранитель дома.",
  },
  {
    id: 18,
    name: "Дуа при болезнях",
    arabic: "اللَّهُمَّ رَبَّ النَّاسِ، أَذْهِبِ الْبَأْسَ، اشْفِ أَنْتَ الشَّافِي",
    transliteration: "Allahumma rabban-naas adhhib al-ba’sa ishfi anta ash-shafi",
    translation: "О Аллах, Господь людей, убери болезнь, исцели, Ты — Исцеляющий.",
  },
  {
    id: 19,
    name: "Дуа при страхе",
    arabic: "اللَّهُمَّ إني أعوذ بك من الخوف",
    transliteration: "Allahumma inni a'udhu bika min al-khawf",
    translation: "О Аллах, я прибегаю к Тебе от страха.",
  },
  {
    id: 20,
    name: "Дуа благодарности",
    arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    transliteration: "Alhamdu lillahi rabbil ‘alamin",
    translation: "Хвала Аллаху, Господу миров.",
  },
  {
    id: 21,
    name: "Дуа о прощении грехов",
    arabic: "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
    transliteration: "Rabbana dhalamna anfusana wa in lam taghfir lana wa tarhamna lanakoonanna minal khasireen",
    translation: "Господь наш! Мы сделали зло сами себе. Если Ты не простишь нам и не помилуешь нас, мы непременно окажемся в числе потерпевших убыток.",
  },
  {
    id: 22,
    name: "Дуа за здоровье и благополучие",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ العَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ",
    transliteration: "Allahumma inni as’aluka al-‘afiyata fid-dunya wal-akhirah",
    translation: "О Аллах, я прошу у Тебя здоровья и благополучия в этом мире и в будущем.",
  },
  {
    id: 23,
    name: "Дуа при страхе и тревоге",
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ",
    transliteration: "Allahumma inni a’udhu bika minal hammi wal hazan",
    translation: "О Аллах, я прибегаю к Тебе от тревоги и печали.",
  },
  {
    id: 24,
    name: "Дуа при поиске правильного пути",
    arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
    transliteration: "Ihdinas siratal mustaqim",
    translation: "Веди нас прямым путём.",
  },
  {
    id: 25,
    name: "Дуа за прощение и милость",
    arabic: "رَبِّ اغْفِرْ وَارْحَمْ وَأَنتَ خَيْرُ الرَّاحِمِينَ",
    transliteration: "Rabbi ighfir warham wa anta khayru ar-rahimeen",
    translation: "Господи, прости и помилуй, ведь Ты — лучший из милосердных.",
  },
  {
    id: 26,
    name: "Дуа о благодарности",
    arabic: "اللَّهُمَّ لَكَ الْحَمْدُ كَمَا يَحِقُّ لِجَلَالِ وَجْهِكَ",
    transliteration: "Allahumma laka al-hamdu kama yahiqqu lijalali wajhika",
    translation: "О Аллах, хвала Тебе в той мере, как достойно величия Твоего Лика.",
  },
  {
    id: 27,
    name: "Дуа о защите от зла",
    arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ",
    transliteration: "Bismillahilladhi la yadurru ma’asmihi shay’un fil-ardi wa la fis-sama’i",
    translation: "С именем Аллаха, с Которым ничто не причинит вреда на земле и на небе.",
  },
  {
    id: 28,
    name: "Дуа для получения благословения",
    arabic: "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي",
    transliteration: "Rabbi aj’alni muqimas-salat wa min dhurriyati",
    translation: "Господи, сделай меня и потомков моих постоянными в молитве.",
  },
  {
    id: 29,
    name: "Дуа о терпении",
    arabic: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ",
    transliteration: "Rabbi awzi’ni an ashkura ni’mataka",
    translation: "Господи, помоги мне благодарить за Твои благословения.",
  },
  {
    id: 30,
    name: "Дуа за защиту от бед",
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْبَرَصِ، وَالْجُنُونِ، وَالْجُذَامِ، وَمِنْ سَيِّئِ الْأَسْقَامِ",
    transliteration: "Allahumma inni a’udhu bika minal barasi wal jununi wal judhami wa min sayyi’il asqam",
    translation: "О Аллах, я прибегаю к Тебе от проказы, безумия, лепры и плохих болезней.",
  },
  {
    id: 31,
    name: "Дуа о помощи и поддержке",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ نَصْرَكَ وَالْهُدَى وَالْفَتْحَ وَالْفَضْلَ وَالرَّحْمَةَ",
    transliteration: "Allahumma inni as’aluka nasraka wal-huda wal-fath wal-fadl war-rahmah",
    translation: "О Аллах, я прошу Твоей помощи, руководства, победы, милости и прощения.",
  },
  {
    id: 32,
    name: "Дуа при путешествии",
    arabic: "اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى",
    transliteration: "Allahumma inna nas’aluka fi safarina hadha al-birra wat-taqwa",
    translation: "О Аллах, мы просим у Тебя в этом путешествии праведности и богобоязненности.",
  },
  {
    id: 33,
    name: "Дуа о мире и спокойствии",
    arabic: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا",
    transliteration: "Rabbana afrigh ‘alayna sabran wa thabbit aqdamana",
    translation: "Господи, ниспошли нам терпение и утверди наши ноги.",
  },
  {
    id: 34,
    name: "Дуа о прощении родителей",
    arabic: "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ",
    transliteration: "Rabbi ighfir li waliwalidayya walil-mu’minin",
    translation: "Господи, прости меня, моих родителей и всех верующих.",
  },
  {
    id: 35,
    name: "Дуа о добром конце жизни",
    arabic: "اللَّهُمَّ اجْعَلْ خَيْرَ عُمُرِي آخِرَهُ",
    transliteration: "Allahumma aj’al khayra ‘umri akhirahu",
    translation: "О Аллах, сделай конец моей жизни хорошим.",
  },
  
];

export default function Duas() {
  return (
    <div
      style={{
        backgroundColor: "#0f1a24",  // тёмно-синий фон, без изображения
        minHeight: "100vh",
        padding: "40px 20px",
        color: "#eee",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          backgroundColor: "#142b3f",
          padding: "30px 40px",
          borderRadius: "16px",
          boxShadow:
            "0 8px 20px rgba(20, 43, 63, 0.7), 0 0 40px rgba(76, 175, 80, 0.4)",
          border: "1px solid #4caf50",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "36px",
            fontWeight: "700",
            color: "#4caf50",
            textShadow: "0 0 8px #4caf50",
          }}
        >
          📿 Коллекция Ду’а - 📿 مجموعة دعاء
        </h1>

        {duas.map((dua, index) => (
          <motion.div
            key={dua.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            style={{
              backgroundColor: "#1e3a56",
              padding: "22px 28px",
              borderRadius: "14px",
              marginBottom: "24px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
              border: "1.5px solid #2e5879",
              cursor: "default",
              userSelect: "text",
              transition: "background-color 0.3s ease",
            }}
            whileHover={{ backgroundColor: "#295a83" }}
          >
            <h2
              style={{
                color: "#81c784",
                marginBottom: "12px",
                fontWeight: "600",
                fontSize: "24px",
              }}
            >
              {dua.name}
            </h2>
            <p
              style={{
                fontSize: "28px",
                direction: "rtl",
                textAlign: "right",
                color: "#c8e6c9",
                fontWeight: "500",
                lineHeight: 1.5,
                marginBottom: "8px",
                userSelect: "text",
              }}
            >
              {dua.arabic}
            </p>
            <p
              style={{
                fontStyle: "italic",
                color: "#b0bec5",
                marginBottom: "6px",
                fontSize: "16px",
                userSelect: "text",
              }}
            >
              {dua.transliteration}
            </p>
            <p
              style={{
                color: "#cfd8dc",
                fontSize: "17px",
                userSelect: "text",
              }}
            >
              {dua.translation}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}