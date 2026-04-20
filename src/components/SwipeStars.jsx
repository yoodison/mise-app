import { useRef } from 'react';
import StarRow from './StarRow.jsx';

export default function SwipeStars({ value = 0, onChange, size = 20 }) {
  const ref = useRef(null);
  const v = Math.max(0, Math.min(5, value));

  const calcValue = (clientX) => {
    const rect = ref.current.getBoundingClientRect();
    const raw = (clientX - rect.left) / rect.width * 5;
    return Math.round(Math.max(0, Math.min(5, raw)) * 10) / 10;
  };

  const handlers = onChange ? {
    onPointerDown: (e) => { e.currentTarget.setPointerCapture(e.pointerId); onChange(calcValue(e.clientX)); },
    onPointerMove: (e) => { if (e.buttons) onChange(calcValue(e.clientX)); },
    style: { cursor: 'ew-resize', touchAction: 'none', userSelect: 'none' },
  } : {};

  return (
    <div ref={ref} {...handlers} style={{ display: 'inline-flex', alignItems: 'center', gap: 2, ...(handlers.style || {}) }}>
      <StarRow value={v} size={size} gap={2}/>
    </div>
  );
}
