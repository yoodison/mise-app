export default function StarGlyph({ size, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" style={{ display: 'block' }}>
      <path d="M10 1.5l2.6 5.5 6 .9-4.3 4.2 1 6L10 15.3 4.7 18.1l1-6L1.4 7.9l6-.9L10 1.5z" fill={color}/>
    </svg>
  );
}
