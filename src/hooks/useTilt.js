import { useRef } from "react";

export function useTilt() {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const hw = rect.width / 2;
    const hh = rect.height / 2;

    const ratioX = (e.clientX - (rect.left + hw)) / hw;
    const ratioY = (e.clientY - (rect.top + hh)) / hh;

    el.style.setProperty("--ratio-x", ratioX);
    el.style.setProperty("--ratio-y", ratioY);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;

    el.style.setProperty("--ratio-x", 0);
    el.style.setProperty("--ratio-y", 0);
  };

  return {
    ref,
    handlers: {
      onPointerMove: handleMove,
      onPointerLeave: handleLeave,
    },
  };
}