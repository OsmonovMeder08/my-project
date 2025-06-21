import React, { useRef, useState, useEffect } from "react";

export default function AudioPlayer({ src }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Сброс состояния при смене src
    audio.pause();
    audio.load();
    setPlaying(false);
    setProgress(0);

    const onLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const onTimeUpdate = () => {
      setProgress(audio.currentTime);
    };

    const onEnded = () => {
      setPlaying(false);
      setProgress(0);
    };

    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("ended", onEnded);
    };
  }, [src]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  const onSeek = (e) => {
    if (!audioRef.current) return;
    const time = Number(e.target.value);
    audioRef.current.currentTime = time;
    setProgress(time);
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "0:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div style={{ maxWidth: 600, margin: "20px auto", color: "#fff", background: "#222", padding: 20, borderRadius: 8 }}>
      <button
        onClick={togglePlay}
        style={{
          padding: "10px 20px",
          backgroundColor: "#1db954",
          border: "none",
          borderRadius: 5,
          color: "white",
          cursor: "pointer",
          marginBottom: 15,
        }}
      >
        {playing ? "⏸ Pause" : "▶️ Play"}
      </button>

      <input
        type="range"
        min={0}
        max={duration}
        value={progress}
        onChange={onSeek}
        style={{ width: "100%" }}
      />

      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, marginTop: 5 }}>
        <span>{formatTime(progress)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      <audio ref={audioRef}>
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
