import { useNavigate } from 'react-router-dom'
import MiseTabBar from '../components/MiseTabBar.jsx'
import Poster from '../components/Poster.jsx'
import { MISE, FILMS } from '../tokens.js'

export default function ScreenPotList() {
  const pots = [
    { film: 'jeanne',   where: 'CGV 홍대 2관',     when: '5.18 (토) 14:00', filled: 13, total: 20, tags: ['여성감독','롱테이크'], host: '김서우', distance: '2.4km', hot: true },
    { film: 'mirror',   where: '씨네큐브 광화문',   when: '5.20 (월) 20:00', filled: 7,  total: 12, tags: ['타르코프스키','시적'],  host: '박재현', distance: '5.1km' },
    { film: 'decision', where: '아트나인 이수',     when: '5.22 (수) 19:30', filled: 14, total: 15, tags: ['박찬욱','미스터리'],    host: '이도현', distance: '3.7km', hot: true },
    { film: 'portrait', where: '필름포럼 신사',     when: '5.25 (토) 15:00', filled: 5,  total: 18, tags: ['셀린시아마','프랑스'],  host: '윤서영', distance: '8.2km' },
  ];
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', background: MISE.warm, position: 'relative' }}>
      <div style={{ padding: '4px 20px 16px' }}>
        <div style={{ fontSize: 10, letterSpacing: '0.18em', color: MISE.ink45, textTransform: 'uppercase', marginBottom: 3 }}>Together</div>
        <div style={{ fontFamily: MISE.fontSerif, fontSize: 28, color: MISE.ink, letterSpacing: '0.01em', fontWeight: 500 }}>팟 모집 중</div>
      </div>

      <div style={{ padding: '0 20px 14px', display: 'flex', gap: 6, overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none', flexShrink: 0 }}>
        {['가까운 순','이번 주','나의 취향','인기순'].map((t,i) => (
          <span key={t} style={{
            fontSize: 10.5, padding: '6px 11px',
            background: i === 0 ? MISE.charcoal : 'transparent',
            color: i === 0 ? MISE.warm : MISE.ink55,
            border: i === 0 ? 'none' : `0.5px solid ${MISE.ink18}`,
            borderRadius: 14, fontWeight: 500, whiteSpace: 'nowrap',
          }}>{t}</span>
        ))}
      </div>

      <div style={{ flex: 1, overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none', paddingBottom: 100 }}>
        <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 14 }}>
          {pots.map((p, i) => <PotCard key={i} {...p}/>)}
        </div>
      </div>

      <MiseTabBar/>
    </div>
  );
}

function PotCard({ film, where, when, filled, total, tags, host, distance, hot }) {
  const navigate = useNavigate()
  const f = FILMS[film];
  const pct = filled / total * 100;
  const urgent = total - filled <= 2;
  return (
    <div style={{ background: MISE.linen, borderRadius: 10, padding: 14, position: 'relative', overflow: 'hidden' }}>
      {hot && (
        <div style={{ position: 'absolute', top: 0, right: 0, background: MISE.gold, color: MISE.warm, fontSize: 9, padding: '3px 10px', borderBottomLeftRadius: 10, fontWeight: 700, letterSpacing: '0.08em' }}>
          🔥 HOT
        </div>
      )}
      <div onClick={() => navigate('/movie/' + film)} style={{ display: 'flex', gap: 12, marginBottom: 12, cursor: 'pointer' }}>
        <Poster {...f} w={62} h={88} radius={3}/>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: MISE.fontSerif, fontSize: 16, color: MISE.ink, fontWeight: 500, lineHeight: 1.2, marginBottom: 3 }}>{f.title}</div>
          <div style={{ fontSize: 10, color: MISE.ink45, marginBottom: 8 }}>{f.director} · {f.runtime}분</div>
          <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
            {tags.map(t => (
              <span key={t} style={{ fontSize: 9, color: MISE.ink55, background: MISE.warm, padding: '2px 7px', borderRadius: 10 }}>#{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 14, paddingTop: 10, borderTop: `0.5px solid ${MISE.ink10}`, marginBottom: 10 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 8.5, color: MISE.ink45, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 2 }}>상영</div>
          <div style={{ fontSize: 11.5, color: MISE.ink, fontWeight: 600 }}>{when}</div>
        </div>
        <div style={{ flex: 1.2 }}>
          <div style={{ fontSize: 8.5, color: MISE.ink45, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 2 }}>상영관 · {distance}</div>
          <div style={{ fontSize: 11.5, color: MISE.ink, fontWeight: 600 }}>{where}</div>
        </div>
      </div>

      <div style={{ height: 4, background: MISE.ink10, borderRadius: 2, overflow: 'hidden', marginBottom: 6 }}>
        <div style={{ height: '100%', width: `${pct}%`, background: urgent ? '#C44A3A' : MISE.gold, borderRadius: 2 }}/>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
        <span style={{ fontSize: 10.5, color: MISE.ink55 }}>
          <span style={{ color: urgent ? '#C44A3A' : MISE.gold, fontWeight: 700 }}>{filled}</span>
          <span> / {total}명</span>
        </span>
        <div onClick={(e) => { e.stopPropagation(); navigate('/pot/jeanne'); }} style={{
          padding: '9px 18px',
          background: MISE.gold,
          borderRadius: 6,
          fontSize: 12, fontWeight: 700,
          color: MISE.warm,
          letterSpacing: '0.04em',
          flexShrink: 0,
          cursor: 'pointer',
        }}>참여하기</div>
      </div>
    </div>
  );
}
