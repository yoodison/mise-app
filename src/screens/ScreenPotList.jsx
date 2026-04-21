import { useNavigate } from 'react-router-dom'
import MiseTabBar from '../components/MiseTabBar.jsx'
import Poster from '../components/Poster.jsx'
import StarRow from '../components/StarRow.jsx'
import { MISE, FILMS } from '../tokens.js'

const FILM_POTS = [
  {
    film: 'jeanne',
    avg: 4.3,
    exp: 4.7,
    hot: true,
    dates: [
      { date: '5.18 (토)', time: '14:00', where: 'CGV 홍대 2관',   distance: '2.4km' },
      { date: '5.24 (금)', time: '20:00', where: '씨네큐브 광화문', distance: '5.1km' },
      { date: '6.1 (일)',  time: '15:00', where: '아트나인 이수',   distance: '3.7km' },
    ],
  },
  {
    film: 'decision',
    avg: 4.2,
    exp: 4.6,
    hot: true,
    dates: [
      { date: '5.22 (수)', time: '19:30', where: '아트나인 이수',   distance: '3.7km' },
      { date: '5.29 (수)', time: '19:30', where: '필름포럼 신사',   distance: '8.2km' },
    ],
  },
  {
    film: 'mirror',
    avg: 4.5,
    exp: 4.8,
    hot: false,
    dates: [
      { date: '5.20 (월)', time: '20:00', where: '씨네큐브 광화문', distance: '5.1km' },
      { date: '6.3 (화)',  time: '20:00', where: 'CGV 아트하우스',  distance: '4.9km' },
    ],
  },
  {
    film: 'portrait',
    avg: 4.1,
    exp: 4.5,
    hot: false,
    dates: [
      { date: '5.25 (토)', time: '15:00', where: '필름포럼 신사',   distance: '8.2km' },
    ],
  },
];

export default function ScreenPotList() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', background: MISE.warm, position: 'relative' }}>
      <div style={{ padding: '4px 20px 16px' }}>
        <div style={{ fontSize: 10, letterSpacing: '0.18em', color: MISE.ink45, textTransform: 'uppercase', marginBottom: 3 }}>Together</div>
        <div style={{ fontFamily: MISE.fontSerif, fontSize: 28, color: MISE.ink, letterSpacing: '0.01em', fontWeight: 500 }}>팟 모집 중</div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none', paddingBottom: 100 }}>
        <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 14 }}>
          {FILM_POTS.map((p) => <FilmPotCard key={p.film} {...p} />)}
        </div>
      </div>

      <MiseTabBar />
    </div>
  );
}

function FilmPotCard({ film, avg, exp, hot, dates }) {
  const navigate = useNavigate();
  const f = FILMS[film];
  return (
    <div
      onClick={() => navigate('/pot/' + film)}
      style={{ background: MISE.linen, borderRadius: 10, padding: 14, position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
    >
      {hot && (
        <div style={{
          position: 'absolute', top: 0, right: 0,
          background: MISE.gold, color: MISE.warm,
          fontSize: 9, padding: '3px 10px', borderBottomLeftRadius: 10,
          fontWeight: 700, letterSpacing: '0.08em',
        }}>
          🔥 HOT
        </div>
      )}

      {/* Film info row */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
        <Poster {...f} w={62} h={88} radius={3} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: MISE.fontSerif, fontSize: 16, color: MISE.ink, fontWeight: 500, lineHeight: 1.2, marginBottom: 3 }}>{f.title}</div>
          <div style={{ fontSize: 10, color: MISE.ink45, marginBottom: 8 }}>{f.director} · {f.year} · {f.runtime}분</div>

          {/* Ratings */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
            <StarRow value={avg} size={9} />
            <span style={{ fontSize: 11, color: MISE.ink, fontWeight: 600 }}>{avg.toFixed(1)}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ fontSize: 9, color: MISE.ink45 }}>예상</span>
            <span style={{ fontSize: 11, color: MISE.gold, fontWeight: 700 }}>{exp.toFixed(1)}</span>
            <span style={{ fontSize: 9, color: MISE.gold }}>↑</span>
          </div>
        </div>
      </div>

      {/* Screening dates */}
      <div style={{ borderTop: `0.5px solid ${MISE.ink10}`, paddingTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
        {dates.map((d, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: i === 0 ? '6px 8px' : '4px 8px',
            background: i === 0 ? MISE.charcoal : 'transparent',
            borderRadius: 6,
          }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
              <span style={{
                fontFamily: MISE.fontSerif, fontSize: i === 0 ? 14 : 12,
                color: i === 0 ? MISE.warm : MISE.ink,
                fontWeight: 600,
              }}>{d.time}</span>
              <span style={{ fontSize: 10, color: i === 0 ? 'rgba(250,250,248,0.6)' : MISE.ink45 }}>{d.date}</span>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: 10, color: i === 0 ? MISE.gold : MISE.ink55, fontWeight: i === 0 ? 600 : 400 }}>{d.where}</span>
              <span style={{ fontSize: 9, color: i === 0 ? 'rgba(250,250,248,0.45)' : MISE.ink35, marginLeft: 4 }}>{d.distance}</span>
            </div>
          </div>
        ))}
        {dates.length > 1 && (
          <div style={{ fontSize: 9, color: MISE.ink35, textAlign: 'right', marginTop: 2 }}>
            총 {dates.length}개 일정
          </div>
        )}
      </div>
    </div>
  );
}
