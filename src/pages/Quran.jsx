import React from "react";
import { motion } from "framer-motion";
import { quran } from "../components/data/quranData"; // укажи правильный путь

function toArabicNumber(num) {
  const arabicDigits = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
  return String(num).split('').map(d => arabicDigits[parseInt(d)]).join('');
}

export default function Quran() {
  return (
    <div
      style={{
        maxWidth: 900,
        margin: "40px auto",
        padding: "20px",
        backgroundColor: "#121212",
        borderRadius: 16,
        boxShadow: "0 0 40px rgba(29, 185, 84, 0.4)",
        color: "#eee",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        userSelect: "text",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#1db954",
          marginBottom: 40,
          fontSize: 36,
          fontWeight: "700",
          textShadow: "0 0 10px #1db954",
        }}
      >
        📖 Коран — Суры - 📖 القرآن الكريم — سور
      </h1>

      {quran.map((surah) => (
        <motion.div
          key={surah._id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            marginBottom: 32,
            padding: 24,
            borderRadius: 12,
            backgroundColor: "#222",
            boxShadow: "0 0 15px rgba(29, 185, 84, 0.3)",
            border: "1px solid #1db954",
          }}
        >
          <h2
            style={{
              marginBottom: 18,
              fontSize: 28,
              color: "#1db954",
              textShadow: "0 0 8px #1db954",
            }}
          >
            {surah.name}
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {surah.arabic.map((ayah, idx) => (
              <li
                key={idx}
                style={{
                  textAlign: "right",
                  fontSize: 22,
                  lineHeight: 1.5,
                  marginBottom: 14,
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span
                  style={{
                    color: "#1db954",
                    minWidth: 36,
                    fontWeight: "600",
                    fontSize: 20,
                    userSelect: "none",
                    flexShrink: 0,
                    textShadow: "0 0 5px #1db954",
                  }}
                >
                  ({toArabicNumber(idx + 1)})
                </span>
                <span style={{ flex: 1 }}>{ayah}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
