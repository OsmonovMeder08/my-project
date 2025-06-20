import React, { useRef, useState, useEffect } from "react";

export default function AudioPlayer({ src }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.pause();
    audioRef.current.load();
    setPlaying(false);
    setProgress(0);

    const onLoadedMetadata = () => {
      setDuration(audioRef.current.duration);
    };

    const onEnded = () => {
      setPlaying(false);
      setProgress(0);
    };

    const audioElement = audioRef.current;
    audioElement.addEventListener("loadedmetadata", onLoadedMetadata);
    audioElement.addEventListener("ended", onEnded);

    return () => {
      audioElement.removeEventListener("loadedmetadata", onLoadedMetadata);
      audioElement.removeEventListener("ended", onEnded);
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

  const onTimeUpdate = () => {
    if (!audioRef.current) return;
    setProgress(audioRef.current.currentTime);
  };

  const formatTime = (time) => {
    if (!time || isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const onSeek = (e) => {
    if (!audioRef.current) return;
    const time = Number(e.target.value);
    audioRef.current.currentTime = time;
    setProgress(time);
  };

  return (
    <div className="flex items-center space-x-4 text-white max-w-4xl mx-auto">
      <button
        onClick={togglePlay}
        className="px-6 py-2 bg-pink-600 hover:bg-pink-500 rounded-full font-semibold shadow-lg transition duration-300"
        aria-label={playing ? "Pause" : "Play"}
      >
        {playing ? "⏸️ Pause" : "▶️ Play"}
      </button>
      <input
        type="range"
        min="0"
        max={duration}
        value={progress}
        onChange={onSeek}
        className="flex-grow h-2 rounded-lg cursor-pointer accent-pink-500"
      />
      <div className="w-24 text-right font-mono text-lg select-none">
        {formatTime(progress)} / {formatTime(duration)}
      </div>
      <audio ref={audioRef} onTimeUpdate={onTimeUpdate}>
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
