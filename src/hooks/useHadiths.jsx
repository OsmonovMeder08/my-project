import { useState, useEffect } from "react";
import { hadiths } from "../pages/Hadiths";

export default function useHadiths() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => setData(hadiths), 500);
  }, []);

  return data;
}
