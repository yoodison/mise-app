import StarGlyph from './StarGlyph.jsx';
import { MISE } from '../tokens.js';

export default function StarRow({ value = 0, max = 5, size = 12, color = MISE.gold, empty = MISE.ink18, gap = 1 }) {
  const stars = [];
  for (let i = 0; i < max; i++) {
    const fill = Math.max(0, Math.min(1, value - i));
    stars.push(
      <span key={i} style={{
        position: 'relative', display: 'inline-block',
        width: size, height: size, marginRight: i < max - 1 ? gap : 0,
      }}>
        <StarGlyph size={size} color={empty}/>
        <span style={{
          position: 'absolute', inset: 0, width: `${fill * 100}%`,
          overflow: 'hidden', display: 'inline-block',
        }}>
          <StarGlyph size={size} color={color}/>
        </span>
      </span>
    );
  }
  return <span style={{ display: 'inline-flex', alignItems: 'center' }}>{stars}</span>;
}
