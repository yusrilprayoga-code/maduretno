import React, { RefObject, useEffect } from "react";

export const useOutsideClick = (
  ref: RefObject<HTMLDivElement | null>, // Tetap mendukung ref yang mungkin null
  callback: () => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Pastikan ref ada dan elemen target tidak ada di dalam ref
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      callback(); // Panggil callback jika klik di luar elemen
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
