import { useNavigate } from 'react-router-dom'
import MiseStatus from '../components/MiseStatus.jsx'
import MiseTabBar from '../components/MiseTabBar.jsx'
import Poster from '../components/Poster.jsx'
import StarRow from '../components/StarRow.jsx'
import { MISE, FILMS } from '../tokens.js'

export default function ScreenPotDetail() {
  const navigate = useNavigate()
  const f = FILMS.jeanne;
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: MISE.warm, position: 'relative' }}>
      <MiseStatus/>
      <div style={{ padding: '4px 20px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={MISE.ink} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}><path d="M15 6l-6 6 6 6"/></svg>
        <span style={{ fontSize: 13, fontWeight: 600, color: MISE.ink }}>팟 상세</span>
        <span style={{ marginLeft: 'auto', fontSize: 10, padding: '4px 10px', background: MISE.goldSoft, color: MISE.gold, borderRadius: 12, fontWeight: 600 }}>모집 중</span>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none', paddingBottom: 100 }}>
        {/* MOVIE LINK CARD */}
        <div style={{ margin: '0 20px 14px' }}>
          <div style={{ fontSize: 9, letterSpacing: '0.14em', color: MISE.ink45, textTransform: 'uppercase', marginBottom: 8, fontWeight: 500 }}>관람 영화</div>
          <div style={{
            background: `linear-gradient(135deg, #3A2810 0%, #5A3A18 60%, #7A5020 100%)`,
            borderRadius: 8, padding: 14, display: 'flex', gap: 12,
            position: 'relative', overflow: 'hidden',
            border: `1px solid rgba(196,145,58,0.3)`,
          }}>
            <Poster {...f} w={68} h={96} radius={3}/>
            <div style={{ flex: 1, minWidth: 0, color: MISE.warm, display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontFamily: MISE.fontSerif, fontSize: 16, lineHeight: 1.2, fontWeight: 500, marginBottom: 2 }}>{f.title}</div>
              <div style={{ fontSize: 10, color: 'rgba(250,250,248,0.5)', letterSpacing: '0.03em', marginBottom: 8 }}>{f.director} · {f.year} · {f.runtime}분</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 2 }}>
                <StarRow value={4.2} size={10} empty="rgba(250,250,248,0.15)"/>
                <span style={{ fontSize: 10, color: MISE.warm, fontWeight: 600 }}>4.2</span>
                <span style={{ fontSize: 9, color: 'rgba(250,250,248,0.4)' }}>· 1,284명</span>
              </div>
              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 4 }}>
                <span style={{ fontSize: 10, color: MISE.gold, fontWeight: 600 }}>영화 상세 보기</span>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={MISE.gold} strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </div>
          </div>
        </div>

        {/* SCHEDULE */}
        <div style={{ margin: '0 20px 14px', background: MISE.linen, borderRadius: 10, padding: 14 }}>
          <div style={{ display: 'flex', gap: 18 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 9, color: MISE.ink45, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 4 }}>상영일시</div>
              <div style={{ fontSize: 12.5, color: MISE.ink, fontWeight: 600, marginBottom: 1 }}>5.18 (토) 14:00</div>
              <div style={{ fontSize: 10, color: MISE.ink45 }}>약 3시간 21분 · 인터미션 없음</div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 9, color: MISE.ink45, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 4 }}>상영관</div>
              <div style={{ fontSize: 12.5, color: MISE.ink, fontWeight: 600, marginBottom: 1 }}>CGV 홍대 2관</div>
              <div style={{ fontSize: 10, color: MISE.ink45 }}>서울 마포구 · 2.4km</div>
            </div>
          </div>
        </div>

        {/* progress */}
        <div style={{ margin: '0 20px 14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <span style={{ fontSize: 11.5, fontWeight: 600, color: MISE.ink }}>참여 현황</span>
            <span style={{ fontSize: 11.5, color: MISE.gold, fontWeight: 700 }}>13 / 20명</span>
          </div>
          <div style={{ height: 5, background: MISE.ink10, borderRadius: 2.5, overflow: 'hidden', marginBottom: 5 }}>
            <div style={{ height: '100%', width: '65%', background: MISE.gold, borderRadius: 2.5 }}/>
          </div>
          <div style={{ fontSize: 10, color: MISE.ink55 }}>최소 10명 충족 · 잔여 7석</div>
        </div>

        {/* avatars */}
        <div style={{ margin: '0 20px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ display: 'flex' }}>
            {['#3A3028','#28383A','#2A2838','#382838','#38302A'].map((c, i) => (
              <div key={i} style={{ width: 28, height: 28, borderRadius: '50%', background: c, border: `2px solid ${MISE.warm}`, marginLeft: i === 0 ? 0 : -8 }}/>
            ))}
          </div>
          <span style={{ fontSize: 10.5, color: MISE.ink55 }}>외 8명 참여 중</span>
        </div>

        {/* map */}
        <div style={{ margin: '0 20px 14px' }}>
          <div style={{ fontSize: 10, color: MISE.ink45, marginBottom: 6 }}>관람 가능 범위 내 상영관</div>
          <div style={{ height: 80, background: MISE.linen, borderRadius: 8, position: 'relative', overflow: 'hidden', border: `0.5px solid ${MISE.ink06}` }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(0deg, ${MISE.ink06} 1px, transparent 1px), linear-gradient(90deg, ${MISE.ink06} 1px, transparent 1px)`, backgroundSize: '24px 24px' }}/>
            <div style={{ position: 'absolute', left: 0, right: 0, top: '55%', height: 2, background: MISE.linenDeep }}/>
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '40%', width: 2, background: MISE.linenDeep }}/>
            <div style={{ position: 'absolute', left: '38%', top: '48%', width: 44, height: 44, borderRadius: '50%', background: 'rgba(196,145,58,0.15)', border: `1px solid rgba(196,145,58,0.3)`, transform: 'translate(-50%,-50%)' }}/>
            <div style={{ position: 'absolute', left: '38%', top: '48%', width: 9, height: 9, borderRadius: '50%', background: MISE.charcoal, border: `2px solid ${MISE.warm}`, transform: 'translate(-50%,-50%)', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}/>
            <div style={{ position: 'absolute', left: '52%', top: '35%', transform: 'translate(-50%, -100%)' }}>
              <div style={{ background: MISE.gold, color: MISE.warm, fontSize: 9, padding: '3px 7px', borderRadius: 4, fontWeight: 700, whiteSpace: 'nowrap' }}>CGV 홍대</div>
            </div>
          </div>
        </div>

        {/* host message */}
        <div style={{ margin: '0 20px 18px', padding: 12, background: MISE.warm, border: `0.5px solid ${MISE.ink10}`, borderRadius: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#2A2520' }}/>
            <span style={{ fontSize: 11, fontWeight: 600, color: MISE.ink }}>@seowoo</span>
            <span style={{ fontSize: 9, padding: '2px 6px', background: MISE.goldSoft, color: MISE.gold, borderRadius: 10, fontWeight: 600 }}>HOST</span>
          </div>
          <div style={{ fontSize: 11.5, color: MISE.ink70, lineHeight: 1.55 }}>
            아케르만 데뷔 50주년 리마스터링본 상영입니다. 3시간 21분 정적인 영화라 각오하고 오세요 :)
            끝나고 카페에서 간단한 뒤풀이도 준비 중입니다.
          </div>
        </div>

        {/* CTA */}
        <div style={{ padding: '0 20px' }}>
          <div style={{ background: MISE.gold, borderRadius: 8, padding: '15px 0', textAlign: 'center' }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: MISE.warm, letterSpacing: '0.08em' }}>참여하기</span>
          </div>
        </div>
      </div>

      <MiseTabBar/>
    </div>
  );
}
