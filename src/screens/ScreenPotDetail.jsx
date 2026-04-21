import { useNavigate } from 'react-router-dom'
import MiseTabBar from '../components/MiseTabBar.jsx'
import Poster from '../components/Poster.jsx'
import StarRow from '../components/StarRow.jsx'
import { MISE, FILMS } from '../tokens.js'

const SCHEDULES = [
  { id: 1, date: '5.18 (토)', time: '14:00', where: 'CGV 홍대 2관',   distance: '2.4km', filled: 17, total: 20 },
  { id: 2, date: '5.24 (금)', time: '20:00', where: '씨네큐브 광화문', distance: '5.1km', filled: 8,  total: 15 },
  { id: 3, date: '6.1 (일)',  time: '15:00', where: '아트나인 이수',   distance: '3.7km', filled: 3,  total: 18 },
];

export default function ScreenPotDetail() {
  const navigate = useNavigate();
  const f = FILMS.jeanne;
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', background: MISE.warm, position: 'relative' }}>
      <div style={{ padding: '4px 20px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={MISE.ink} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>
          <path d="M15 6l-6 6 6 6"/>
        </svg>
        <span style={{ fontSize: 13, fontWeight: 600, color: MISE.ink }}>상영 일정</span>
        <span style={{ marginLeft: 'auto', fontSize: 10, padding: '4px 10px', background: MISE.goldSoft, color: MISE.gold, borderRadius: 12, fontWeight: 600 }}>모집 중</span>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none', paddingBottom: 100 }}>

        {/* MOVIE LINK CARD */}
        <div style={{ margin: '0 20px 18px' }}>
          <div style={{ fontSize: 9, letterSpacing: '0.14em', color: MISE.ink45, textTransform: 'uppercase', marginBottom: 8, fontWeight: 500 }}>관람 영화</div>
          <div
            onClick={() => navigate('/movie/jeanne')}
            style={{
              background: `linear-gradient(135deg, #3A2810 0%, #5A3A18 60%, #7A5020 100%)`,
              borderRadius: 8, padding: 14, display: 'flex', gap: 12,
              position: 'relative', overflow: 'hidden',
              border: `1px solid rgba(196,145,58,0.3)`,
              cursor: 'pointer',
            }}
          >
            <Poster {...f} w={68} h={96} radius={3} />
            <div style={{ flex: 1, minWidth: 0, color: MISE.warm, display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontFamily: MISE.fontSerif, fontSize: 16, lineHeight: 1.2, fontWeight: 500, marginBottom: 2 }}>{f.title}</div>
              <div style={{ fontSize: 10, color: 'rgba(250,250,248,0.5)', letterSpacing: '0.03em', marginBottom: 8 }}>{f.director} · {f.year} · {f.runtime}분</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 2 }}>
                <StarRow value={4.3} size={10} empty="rgba(250,250,248,0.15)" />
                <span style={{ fontSize: 10, color: MISE.warm, fontWeight: 600 }}>4.3</span>
                <span style={{ fontSize: 9, color: 'rgba(250,250,248,0.4)' }}>· 2,184명</span>
              </div>
              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 4 }}>
                <span style={{ fontSize: 10, color: MISE.gold, fontWeight: 600 }}>영화 상세 보기</span>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={MISE.gold} strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </div>
          </div>
        </div>

        {/* SCHEDULE CARDS */}
        <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {SCHEDULES.map((s) => <ScheduleCard key={s.id} {...s} />)}
        </div>
      </div>

      <MiseTabBar />
    </div>
  );
}

function ScheduleCard({ date, time, where, distance, filled, total }) {
  const pct = Math.round(filled / total * 100);
  const urgent = total - filled <= 3;
  return (
    <div style={{ background: MISE.linen, borderRadius: 10, padding: 14 }}>
      {/* Time + Theater row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 12 }}>
        <div>
          <div style={{ fontFamily: MISE.fontSerif, fontSize: 22, color: MISE.ink, fontWeight: 500, lineHeight: 1, marginBottom: 3 }}>{time}</div>
          <div style={{ fontSize: 11, color: MISE.ink45 }}>{date}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 12, color: MISE.ink, fontWeight: 600, marginBottom: 2 }}>{where}</div>
          <div style={{ fontSize: 10, color: MISE.ink45 }}>{distance}</div>
        </div>
      </div>

      {/* Wadiz-style progress */}
      <div style={{ marginBottom: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 5 }}>
          <span style={{ fontSize: 9.5, color: MISE.ink45, letterSpacing: '0.08em' }}>신청 현황</span>
          <span style={{ fontSize: 12, color: MISE.gold, fontWeight: 700 }}>{pct}%</span>
        </div>
        <div style={{ height: 5, background: MISE.ink10, borderRadius: 2.5, overflow: 'hidden', marginBottom: 5 }}>
          <div style={{ height: '100%', width: `${pct}%`, background: urgent ? '#C44A3A' : MISE.gold, borderRadius: 2.5 }} />
        </div>
        <div style={{ fontSize: 9.5, color: MISE.ink45 }}>
          <span style={{ color: urgent ? '#C44A3A' : MISE.ink, fontWeight: 600 }}>{filled}명 신청</span>
          {' '}/ 목표 {total}명
        </div>
      </div>

      {/* CTA button */}
      <div style={{
        background: urgent ? '#C44A3A' : MISE.charcoal,
        borderRadius: 7, padding: '11px 0',
        textAlign: 'center', cursor: 'pointer',
      }}>
        <span style={{ fontSize: 12.5, fontWeight: 700, color: MISE.warm, letterSpacing: '0.06em' }}>
          {urgent ? '⚡ 신청하기' : '신청하기'}
        </span>
      </div>
    </div>
  );
}
