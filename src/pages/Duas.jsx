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