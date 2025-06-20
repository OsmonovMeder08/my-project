import React from "react";
import { motion } from "framer-motion";

const rules = [
  {
    id: 1,
    title: "Идгам (إدغام)",
    description:
      "Слияние — когда буква 'нун сакин' (نْ) или танвин встречается с одной из шести букв: ي, ر, م, ل, و, ن.",
    example_arabic: "مِن رَبِّهِمْ",
    transliteration: "min rabbihim",
    translation: "от их Господа",
    hint: "Буква 'нун' сливается с 'р', читается с удлинением.",
  },
  {
    id: 2,
    title: "Икляб (إقلاب)",
    description:
      "Преобразование — когда после 'нун сакин' или танвина идёт буква 'ب', нун превращается в 'мим' с губным звуком.",
    example_arabic: "أَنْبَأَهُم",
    transliteration: "anba-ahum",
    translation: "Он сообщил им",
    hint: "Нун превращается в мим перед ب.",
  },
  {
    id: 3,
    title: "Изгар (إظهار)",
    description:
      "Явное произношение 'нун сакин' и танвина перед буквами: ء، هـ، ع، ح، غ، خ.",
    example_arabic: "مِنْ عَذَابٍ",
    transliteration: "min ‘adhābin",
    translation: "от наказания",
    hint: "Нун читается отчётливо перед ‘айн.",
  },
  {
    id: 4,
    title: "Ихфа (إخفاء)",
    description:
      "Скрытие — если после 'нун сакин' или танвина идёт одна из 15 букв, звук читается носовым, между изгаром и идгамом.",
    example_arabic: "مِن شَرِّ",
    transliteration: "min sharri",
    translation: "от зла",
    hint: "Нун не произносится отчётливо, читается носом.",
  },
];

export default function Tajwid() {
  return (
    <div
      style={{
        backgroundColor: "#0f1a24", // темный синий фон
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
          📖 Основы Таджвида - 📖 أساسيات التجويد
        </h1>

        {rules.map((rule, index) => (
          <motion.div
            key={rule.id}
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
              {rule.title}
            </h2>
            <p style={{ marginBottom: "10px", color: "#cfd8dc", fontSize: "16px" }}>
              {rule.description}
            </p>
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
              {rule.example_arabic}
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
              {rule.transliteration}
            </p>
            <p
              style={{
                color: "#d0dede",
                fontSize: "17px",
                userSelect: "text",
              }}
            >
              {rule.translation}
            </p>
            <p
              style={{
                marginTop: "8px",
                fontSize: "14px",
                color: "#a0a0a0",
                userSelect: "text",
              }}
            >
              💡 {rule.hint}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}