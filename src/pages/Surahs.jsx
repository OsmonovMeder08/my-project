import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const surahs = [
  { id: 0, name: "Azan", audio: "/audio/azan.mp3", description: "call to prayer." },
  { id: 1, name: "Al-Fatiha", audio: "/audio/fatiha.mp3", description: "The Opening Surah of the Quran." },
  { id: 2, name: "Al-Baqarah", audio: "/audio/baqarah.mp3", description: "The longest Surah of the Quran." },
  { id: 3, name: "Al-Imran", audio: "/audio/imran.mp3", description: "Surah Al-Imran, emphasizing God's oneness." },
  { id: 4, name: "An-Nisa", audio: "/audio/Nisa.mp3", description: "Surah An-Nisa, emphasizing God's oneness." },
  { id: 5, name: "Al-Ma'idah", audio: "/audio/ma'idah.mp3", description: "Surah Al-Ma'idah, emphasizing God's oneness." },
  { id: 6, name: "Al-An'am", audio: "/audio/an'am.mp3", description: "Surah Al-An'am, emphasizing God's oneness." },
  { id: 7, name: "Al-A'raf", audio: "/audio/a'raf.mp3", description: "Surah Al-A'raf, emphasizing God's oneness." },
  { id: 8, name: "Al-Anfal", audio: "/audio/anfal.mp3", description: "Surah Al-Anfal, emphasizing God's oneness." },
  { id: 9, name: "At-Tawbah", audio: "/audio/tawbah.mp3", description: "Surah At-Tawbah, emphasizing God's oneness." },
  { id: 10, name: "Yunus", audio: "/audio/yunus.mp3", description: "Surah Yunus, emphasizing God's oneness." },
  { id: 11, name: "Hud", audio: "/audio/hud.mp3", description: "Surah Hud, emphasizing God's oneness." },
  { id: 12, name: "Yusuf", audio: "/audio/yusuf.mp3", description: "Surah Yusuf, emphasizing God's oneness." },
  { id: 13, name: "Ar-Ra'd", audio: "/audio/ra'd.mp3", description: "Surah Ar-Ra'd, emphasizing God's oneness." },
  { id: 14, name: "Ibrahim", audio: "/audio/ibrahim.mp3", description: "Surah Ibrahim, emphasizing God's oneness." },
  { id: 15, name: "Al-Hijr", audio: "/audio/hijr.mp3", description: "Surah Al-Hijr, emphasizing God's oneness." },
  { id: 16, name: "An-Nahl", audio: "/audio/nahl.mp3", description: "Surah An-Nahl, emphasizing God's oneness." },
  { id: 17, name: "Al-Isra", audio: "/audio/isra.mp3", description: "Surah Al-Isra, emphasizing God's oneness." },
  { id: 18, name: "Al-Kahf", audio: "/audio/kahf.mp3", description: "Surah Al-Kahf, emphasizing God's oneness." },
  { id: 19, name: "Maryam", audio: "/audio/maryam.mp3", description: "Surah Maryam, emphasizing God's oneness." },
  { id: 20, name: "Ta-Ha", audio: "/audio/ta-ha.mp3", description: "Surah Ta-Ha, emphasizing God's oneness." },
  { id: 21, name: "Al-Anbiya", audio: "/audio/anbiya.mp3", description: "Surah Al-Anbiya, emphasizing God's oneness." },
  { id: 22, name: "Al-Hajj", audio: "/audio/hajj.mp3", description: "Surah Al-Hajj, emphasizing God's oneness." },
  { id: 23, name: "Al-Mu'minun", audio: "/audio/mu'minun.mp3", description: "Surah Al-Mu'minun, emphasizing God's oneness." },
  { id: 24, name: "An-Nur", audio: "/audio/nur.mp3", description: "Surah An-Nur, emphasizing God's oneness." },
  { id: 25, name: "Al-Furqan", audio: "/audio/furqan.mp3", description: "Surah Al-Furqan, emphasizing God's oneness." },
  { id: 26, name: "Ash-Shu'ara", audio: "/audio/shu'ara.mp3", description: "Surah Ash-Shu'ara, emphasizing God's oneness." },
  { id: 27, name: "An-Naml", audio: "/audio/naml.mp3", description: "Surah An-Naml, emphasizing God's oneness." },
  { id: 28, name: "Al-Qasas", audio: "/audio/qasas.mp3", description: "Surah Al-Qasas, emphasizing God's oneness." },
  { id: 29, name: "Al-Ankabut", audio: "/audio/ankabut.mp3", description: "Surah Al-Ankabut, emphasizing God's oneness." },
  { id: 30, name: "Ar-Rum", audio: "/audio/rum.mp3", description: "Surah Ar-Rum, emphasizing God's oneness." },
  { id: 31, name: "Luqman", audio: "/audio/luqman.mp3", description: "Surah Luqman, emphasizing God's oneness." },
  { id: 32, name: "As-Sajdah", audio: "/audio/sajdah.mp3", description: "Surah As-Sajdah, emphasizing God's oneness." },
  { id: 33, name: "Al-Ahzab", audio: "/audio/ahzab.mp3", description: "Surah Al-Ahzab, emphasizing God's oneness." },
  { id: 34, name: "Saba", audio: "/audio/saba.mp3", description: "Surah Saba, emphasizing God's oneness." },
  { id: 35, name: "Fatir", audio: "/audio/fatir.mp3", description: "Surah Fatir, emphasizing God's oneness." },
  { id: 36, name: "Ya-Sin", audio: "/audio/ya-sin.mp3", description: "Surah Ya-Sin, emphasizing God's oneness." },
  { id: 37, name: "As-Saffat", audio: "/audio/saffat.mp3", description: "Surah As-Saffat, emphasizing God's oneness." },
  { id: 38, name: "Sad", audio: "/audio/sad.mp3", description: "Surah Sad, emphasizing God's oneness." },
  { id: 39, name: "Az-Zumar", audio: "/audio/az-zumar.mp3", description: "Surah Az-Zumar, emphasizing God's oneness." },
  { id: 40, name: "Ghafir", audio: "/audio/ghafir.mp3", description: "Surah Ghafir, emphasizing God's oneness." },
  { id: 41, name: "Fussilat", audio: "/audio/fussilat.mp3", description: "Surah Fussilat, emphasizing God's oneness." },
  { id: 42, name: "Ash-Shura", audio: "/audio/shura.mp3", description: "Surah Ash-Shura, emphasizing God's oneness." },
  { id: 43, name: "Az-Zukhruf", audio: "/audio/zukhruf.mp3", description: "Surah Az-Zukhruf, emphasizing God's oneness." },
  { id: 44, name: "Ad-Dukhan", audio: "/audio/dukhan.mp3", description: "Surah Ad-Dukhan, emphasizing God's oneness." },
  { id: 45, name: "Al-Jathiyah", audio: "/audio/jathiyah.mp3", description: "Surah Al-Jathiyah, emphasizing God's oneness." },
  { id: 46, name: "Al-Ahqaf", audio: "/audio/ahqaf.mp3", description: "Surah Al-Ahqaf, emphasizing God's oneness." },
  { id: 47, name: "Muhammad", audio: "/audio/muhammad.mp3", description: "Surah Muhammad, emphasizing God's oneness." },
  { id: 48, name: "Al-Fath", audio: "/audio/fath.mp3", description: "Surah Al-Fath, emphasizing God's oneness." },
  { id: 49, name: "Al-Hujurat", audio: "/audio/hujurat.mp3", description: "Surah Al-Hujurat, emphasizing God's oneness." },
  { id: 50, name: "Qaf", audio: "/audio/qaf.mp3", description: "Surah Qaf, emphasizing God's oneness." },
  { id: 51, name: "Adh-Dhariyat", audio: "/audio/adh-dhariyat.mp3", description: "Surah Adh-Dhariyat, emphasizing God's oneness." },
  { id: 52, name: "At-Tur", audio: "/audio/at-tur.mp3", description: "Surah At-Tur, emphasizing God's oneness." },
  { id: 53, name: "An-Najm", audio: "/audio/an-najm.mp3", description: "Surah An-Najm, emphasizing God's oneness." },
  { id: 54, name: "Al-Qamar", audio: "/audio/al-qamar.mp3", description: "Surah Al-Qamar, emphasizing God's oneness." },
  { id: 55, name: "Ar-Rahman", audio: "/audio/ar-rahman.mp3", description: "Surah Ar-Rahman, emphasizing God's oneness." },
  { id: 56, name: "Al-Waqi'ah", audio: "/audio/al-waqi'ah.mp3", description: "Surah Al-Waqi'ah, emphasizing God's oneness." },
  { id: 57, name: "Al-Hadid", audio: "/audio/al-hadid.mp3", description: "Surah Al-Hadid, emphasizing God's oneness." },
  { id: 58, name: "Al-Mujadila", audio: "/audio/al-mujadila.mp3", description: "Surah Al-Mujadila, emphasizing God's oneness." },
  { id: 59, name: "Al-Hashr", audio: "/audio/al-hashr.mp3", description: "Surah Al-Hashr, emphasizing God's oneness." },
  { id: 60, name: "Al-Mumtahina", audio: "/audio/al-mumtahina.mp3", description: "Surah Al-Mumtahina, emphasizing God's oneness." },
  { id: 61, name: "As-Saff", audio: "/audio/as-saff.mp3", description: "Surah As-Saff, emphasizing God's oneness." },
  { id: 62, name: "Al-Jumu'ah", audio: "/audio/al-jumu'ah.mp3", description: "Surah Al-Jumu'ah, emphasizing God's oneness." },
  { id: 63, name: "Al-Munafiqun", audio: "/audio/al-munafiqun.mp3", description: "Surah Al-Munafiqun, emphasizing God's oneness." },
  { id: 64, name: "At-Taghabun", audio: "/audio/at-taghabun.mp3", description: "Surah At-Taghabun, emphasizing God's oneness." },
  { id: 65, name: "At-Talaq", audio: "/audio/at-talaq.mp3", description: "Surah At-Talaq, emphasizing God's oneness." },
  { id: 66, name: "At-Tahrim", audio: "/audio/at-tahrim.mp3", description: "Surah At-Tahrim, emphasizing God's oneness." },
  { id: 67, name: "Al-Mulk", audio: "/audio/al-mulk.mp3", description: "Surah Al-Mulk, emphasizing God's oneness." },
  { id: 68, name: "Al-Qalam", audio: "/audio/al-qalam.mp3", description: "Surah Al-Qalam, emphasizing God's oneness." },
  { id: 69, name: "Al-Haqqah", audio: "/audio/al-haqqah.mp3", description: "Surah Al-Haqqah, emphasizing God's oneness." },
  { id: 70, name: "Al-Ma'arij", audio: "/audio/al-maarij.mp3", description: "Surah Al-Ma'arij, emphasizing God's oneness." },
  { id: 71, name: "Nuh", audio: "/audio/nuh.mp3", description: "Surah Nuh, emphasizing God's oneness." },
  { id: 72, name: "Al-Jinn", audio: "/audio/al-jinn.mp3", description: "Surah Al-Jinn, emphasizing God's oneness." },
  { id: 73, name: "Al-Muzzammil", audio: "/audio/al-muzzammil.mp3", description: "Surah Al-Muzzammil, emphasizing God's oneness." },
  { id: 74, name: "Al-Muddathir", audio: "/audio/al-muddathir.mp3", description: "Surah Al-Muddathir, emphasizing God's oneness." },
  { id: 75, name: "Al-Qiyamah", audio: "/audio/al-qiyamah.mp3", description: "Surah Al-Qiyamah, emphasizing God's oneness." },
  { id: 76, name: "Al-Insan", audio: "/audio/al-insan.mp3", description: "Surah Al-Insan, emphasizing God's oneness." },
  { id: 77, name: "Al-Mursalat", audio: "/audio/al-mursalat.mp3", description: "Surah Al-Mursalat, emphasizing God's oneness." },
  { id: 78, name: "An-Naba", audio: "/audio/an-naba.mp3", description: "Surah An-Naba, emphasizing God's oneness." },
  { id: 79, name: "An-Nazi'at", audio: "/audio/an-nazi'at.mp3", description: "Surah An-Nazi'at, emphasizing God's oneness." },
  { id: 80, name: "Abasa", audio: "/audio/abasa.mp3", description: "Surah Abasa, emphasizing God's oneness." },
  { id: 81, name: "At-Takwir", audio: "/audio/at-takwir.mp3", description: "Surah At-Takwir, emphasizing God's oneness." },
  { id: 82, name: "Al-Infitar", audio: "/audio/al-infitar.mp3", description: "Surah Al-Infitar, emphasizing God's oneness." },
  { id: 83, name: "Al-Mutaffifin", audio: "/audio/al-mutaffifin.mp3", description: "Surah Al-Mutaffifin, emphasizing God's oneness." },
  { id: 84, name: "Al-Inshiqaq", audio: "/audio/al-inshiqaq.mp3", description: "Surah Al-Inshiqaq, emphasizing God's oneness." },
  { id: 85, name: "Al-Buruj", audio: "/audio/al-buruj.mp3", description: "Surah Al-Buruj, emphasizing God's oneness." },
  { id: 86, name: "At-Tariq", audio: "/audio/at-tariq.mp3", description: "Surah At-Tariq, emphasizing God's oneness." },
  { id: 87, name: "Al-A'la", audio: "/audio/al-a'la.mp3", description: "Surah Al-A'la, emphasizing God's oneness." },
  { id: 88, name: "Al-Ghashiyah", audio: "/audio/al-ghashiyah.mp3", description: "Surah Al-Ghashiyah, emphasizing God's oneness." },
  { id: 89, name: "Al-Fajr", audio: "/audio/al-fajr.mp3", description: "Surah Al-Fajr, emphasizing God's oneness." },
  { id: 90, name: "Al-Balad", audio: "/audio/al-balad.mp3", description: "Surah Al-Balad, emphasizing God's oneness." },
  { id: 91, name: "Ash-Shams", audio: "/audio/ash-shams.mp3", description: "Surah Ash-Shams, emphasizing God's oneness." },
  { id: 92, name: "Al-Lail", audio: "/audio/al-lail.mp3", description: "Surah Al-Lail, emphasizing God's oneness." },
  { id: 93, name: "Ad-Duha", audio: "/audio/ad-duha.mp3", description: "Surah Ad-Duha, emphasizing God's oneness." },
  { id: 94, name: "Ash-Sharh", audio: "/audio/ash-sharh.mp3", description: "Surah Ash-Sharh, emphasizing God's oneness." },
  { id: 95, name: "At-Tin", audio: "/audio/at-tin.mp3", description: "Surah At-Tin, emphasizing God's oneness." },
  { id: 96, name: "Al-Alaq", audio: "/audio/al-alaq.mp3", description: "Surah Al-Alaq, emphasizing God's oneness." },
  { id: 97, name: "Al-Qadr", audio: "/audio/al-qadr.mp3", description: "Surah Al-Qadr, emphasizing God's oneness." },
  { id: 98, name: "Al-Bayyinah", audio: "/audio/al-bayyinah.mp3", description: "Surah Al-Bayyinah, emphasizing God's oneness." },
  { id: 99, name: "Az-Zalzalah", audio: "/audio/az-zalzalah.mp3", description: "Surah Az-Zalzalah, emphasizing God's oneness." },
  { id: 100, name: "Al-Adiyat", audio: "/audio/al-adiyat.mp3", description: "Surah Al-Adiyat, emphasizing God's oneness." },
  { id: 101, name: "Al-Qari'ah", audio: "/audio/al-qariah.mp3", description: "Surah Al-Qari'ah, emphasizing God's oneness." },
  { id: 102, name: "At-Takathur", audio: "/audio/at-takathur.mp3", description: "Surah At-Takathur, emphasizing God's oneness." },
  { id: 103, name: "Al-Asr", audio: "/audio/asr.mp3", description: "Surah Al-Asr, emphasizing God's oneness." },
  { id: 104, name: "Al-Humazah", audio: "/audio/humazah.mp3", description: "Surah Al-Humazah, emphasizing God's oneness." },
  { id: 105, name: "Al-Fil", audio: "/audio/fil.mp3", description: "Surah Al-Fil, emphasizing God's oneness." },
  { id: 106, name: "Quraysh", audio: "/audio/quraysh.mp3", description: "Surah Quraysh, emphasizing God's oneness." },
  { id: 107, name: "Al-Ma'un", audio: "/audio/maun.mp3", description: "Surah Al-Ma'un, emphasizing God's oneness." },
  { id: 108, name: "Al-Kawthar", audio: "/audio/kauathar.mp3", description: "Surah Al-Kawthar, emphasizing God's oneness." },
  { id: 109, name: "Al-Kafirun", audio: "/audio/kafirun.mp3", description: "Surah Al-Kafirun, emphasizing God's oneness." },
  { id: 110, name: "An-Nasr", audio: "/audio/Nasr.mp3", description: "Surah An-Nasr, emphasizing God's oneness." },
  { id: 111, name: "Al-Masad", audio: "/audio/massad.mp3", description: "Surah Al-Masad, emphasizing God's oneness." },
  { id: 112, name: "Al-Ikhlas", audio: "/audio/ikhlas.mp3", description: "Surah Al-Ikhlas, emphasizing God's oneness." },
  { id: 113, name: "Al-Falaq", audio: "/audio/Falaq.mp3", description: "Surah Al-Falaq, emphasizing God's oneness." },
  { id: 114, name: "An-Nas", audio: "/audio/Nas.mp3", description: "Surah An-Nas, emphasizing God's oneness." },
];


export default function Surahs() {
  const audioRef = useRef(null);
  const [currentSurah, setCurrentSurah] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      if (currentSurah) {
        audioRef.current.load(); // перезагружаем аудио
        if (isPlaying) audioRef.current.play();
      }
    }
  }, [currentSurah, isPlaying]);


  useEffect(() => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isPlaying]);

  const handleSelect = (surah) => {
    if (currentSurah?.id === surah.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSurah(surah);
      setIsPlaying(true);
      setProgress(0);
    }
  };

  const handleTimeUpdate = () => {
    setProgress(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setProgress(newTime);
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", color: "#eee", backgroundColor: "#121212", padding: 20, borderRadius: 8 }}>
      <h1 style={{ textAlign: "center" }}>📖 Quran Surahs - 📖 سور القرآن الكريم</h1>

      {surahs.map((surah) => (
        <div
          key={surah.id}
          onClick={() => handleSelect(surah)}
          style={{
            padding: 10,
            marginBottom: 10,
            backgroundColor: currentSurah?.id === surah.id ? "#1db954" : "#222",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          <h3 style={{ margin: 0 }}>{surah.name}</h3>
          <p style={{ margin: 0, fontSize: 13, color: "#ccc" }}>{surah.description}</p>

          {currentSurah?.id === surah.id && (
            <div style={{ marginTop: 10 }}>
              <audio
                ref={audioRef}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={handleEnded}
              >
                <source src={surah.audio} type="audio/mp3" />
              </audio>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPlaying(!isPlaying);
                }}
                style={{
                  background: "#1db954",
                  color: "white",
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: 5,
                  cursor: "pointer",
                  marginBottom: 10,
                }}
              >
                {isPlaying ? "⏸ Pause" : "▶️ Play"}
              </button>

              <input
                type="range"
                min={0}
                max={duration}
                value={progress}
                onChange={handleSeek}
                style={{ width: "100%" }}
              />
              <div style={{ fontSize: 13, display: "flex", justifyContent: "space-between", color: "#aaa" }}>
                <span>{formatTime(progress)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}