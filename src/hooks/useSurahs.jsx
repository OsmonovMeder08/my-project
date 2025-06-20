import { useState, useEffect } from "react";
import { surahs } from "../data/surahs";

export default function useSurahs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // эмулируем загрузку с сервера
    setTimeout(() => setData(surahs), 500);
  }, []);

  return data;
}
