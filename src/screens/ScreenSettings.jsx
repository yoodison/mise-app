import { useNavigate } from 'react-router-dom'
import MiseStatus from '../components/MiseStatus.jsx'
import { MISE } from '../tokens.js'

function When2Meet() {
  const days = ['월','화','수','목','금','토','일'];
  const slots = ['10','11','12','13','14','15','16','17','18','19','20','21'];
  const preset = {
    2: [0,0,0,1,1,1,1,0,0,0,0,0],
    4: [0,0,0,0,0,1,1,1,1,0,0,0],
    5: [0,0,1,1,1,1,1,1,0,0,0,0],
    6: [0,0,0,1,1,1,1,0,0,0,0,0],
  };
  return (
    <div style={{ padding: '0 20px' }}>
      <div style={{ fontSize: 9.5, color: MISE.ink45, marginBottom: 10, lineHeight: 1.5 }}>
        가능한 시간대를 탭해서 선택하세요. 팟 매칭에 활용됩니다.
      </div>
      <div style={{ display: 'flex', marginBottom: 2 }}>
        <div style={{ width: 28, flexShrink: 0 }}/>
        {days.map(d => (
          <div key={d} style={{ flex: 1, textAlign: 'center', fontSize: 9.5, color: MISE.ink55, fontWeight: 600, paddingBottom: 4 }}>{d}</div>
        ))}
      </div>
      {slots.map((s, si) => (
        <div key={s} style={{ display: 'flex', marginBottom: 2, alignItems: 'center' }}>
          <div style={{ width: 28, flexShrink: 0, fontSize: 8.5, color: MISE.ink35, textAlign: 'right', paddingRight: 5 }}>{s}</div>
          {days.map((d, di) => {
            const on = preset[di] ? preset[di][si] === 1 : false;
            return (
              <div key={d} style={{
                flex: 1, height: 16, margin: '0 1px', borderRadius: 2,
                background: on ? MISE.gold : MISE.linen, opacity: on ? 1 : 0.7,
              }}/>
            );
          })}
        </div>
      ))}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 10, fontSize: 9, color: MISE.ink45 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <div style={{ width: 14, height: 10, background: MISE.gold, borderRadius: 2 }}/>
          <span>가능</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <div style={{ width: 14, height: 10, background: MISE.linen, borderRadius: 2, opacity: 0.7 }}/>
          <span>불가</span>
        </div>
      </div>
    </div>
  );
}

function SettingSection({ label, children }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ padding: '0 20px 8px', fontSize: 9, letterSpacing: '0.16em', color: MISE.ink45, textTransform: 'uppercase', fontWeight: 600 }}>{label}</div>
      <div style={{ background: MISE.warm, borderTop: `0.5px solid ${MISE.ink06}`, borderBottom: `0.5px solid ${MISE.ink06}` }}>
        {children}
      </div>
    </div>
  );
}

function SettingRow({ label, sub, children, danger }) {
  return (
    <div style={{ padding: '13px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `0.5px solid ${MISE.ink06}` }}>
      <div>
        <div style={{ fontSize: 13, color: danger ? '#C44A3A' : MISE.ink, fontWeight: 500 }}>{label}</div>
        {sub && <div style={{ fontSize: 10, color: MISE.ink45, marginTop: 2 }}>{sub}</div>}
      </div>
      <div>{children}</div>
    </div>
  );
}

function Toggle({ on }) {
  return (
    <div style={{ width: 42, height: 24, borderRadius: 12, background: on ? MISE.gold : MISE.ink18, position: 'relative', flexShrink: 0 }}>
      <div style={{ position: 'absolute', top: 3, left: on ? 21 : 3, width: 18, height: 18, borderRadius: '50%', background: MISE.warm, boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}/>
    </div>
  );
}

export default function ScreenSettings() {
  const navigate = useNavigate();
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: MISE.warm, position: 'relative' }}>
      <MiseStatus/>
      <div style={{ padding: '4px 20px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <svg onClick={() => navigate(-1)} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={MISE.ink} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: 'pointer' }}><path d="M15 6l-6 6 6 6"/></svg>
        <div style={{ fontFamily: MISE.fontSerif, fontSize: 22, color: MISE.ink, fontWeight: 500, letterSpacing: '0.01em' }}>설정</div>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none', paddingBottom: 40 }}>

        <SettingSection label="팟 · 상영 조건">
          <SettingRow label="상영 동네">
            <span style={{ fontSize: 10, color: MISE.gold, fontWeight: 600 }}>편집</span>
          </SettingRow>
          <div style={{ padding: '4px 0 12px' }}>
            <div style={{ margin: '0 0 8px', display: 'flex', gap: 5, flexWrap: 'wrap', padding: '0 20px' }}>
              {[['합정동',true],['홍대입구',true],['망원동',true],['+ 추가',false]].map(([t,on]) => (
                <span key={t} style={{
                  fontSize: 10, padding: '5px 10px', borderRadius: 12,
                  background: on ? MISE.charcoal : 'transparent',
                  color: on ? MISE.warm : MISE.gold,
                  border: on ? 'none' : `0.5px solid ${MISE.gold}`,
                  fontWeight: 500,
                }}>{on ? t + '  ×' : t}</span>
              ))}
            </div>
            <div style={{ fontSize: 10, color: MISE.ink45, lineHeight: 1.5, padding: '0 20px' }}>상영관 12개 포함 범위</div>
          </div>

          <SettingRow label="선호 상영관">
            <span style={{ fontSize: 10, color: MISE.gold, fontWeight: 600 }}>편집</span>
          </SettingRow>
          <div style={{ padding: '4px 20px 12px', display: 'flex', gap: 5, flexWrap: 'wrap' }}>
            {['씨네큐브','아트나인','필름포럼','CGV 아트하우스'].map((t,i) => (
              <span key={t} style={{
                fontSize: 10, padding: '5px 10px', borderRadius: 12,
                background: i < 3 ? MISE.goldSoft : MISE.linen,
                color: i < 3 ? MISE.gold : MISE.ink45,
                border: i < 3 ? `0.5px solid rgba(196,145,58,0.3)` : 'none',
                fontWeight: 500,
              }}>{t}{i < 3 ? ' ✓' : ''}</span>
            ))}
          </div>
        </SettingSection>

        <SettingSection label="팟 · 가능한 시간대">
          <div style={{ padding: '8px 0 14px' }}>
            <When2Meet/>
          </div>
        </SettingSection>

        <SettingSection label="알림">
          <SettingRow label="팟 모집 시작"><Toggle on/></SettingRow>
          <SettingRow label="팟 확정 알림"><Toggle on/></SettingRow>
          <SettingRow label="인기 토론 알림"><Toggle/></SettingRow>
          <SettingRow label="새 감상평 알림"><Toggle/></SettingRow>
          <SettingRow label="취향 추천 영화"><Toggle on/></SettingRow>
        </SettingSection>

        <SettingSection label="계정">
          <SettingRow label="언어">
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ fontSize: 11, color: MISE.ink55 }}>한국어</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={MISE.ink35} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </div>
          </SettingRow>
          <SettingRow label="스포일러 필터"><Toggle on/></SettingRow>
          <SettingRow label="개인정보 처리방침">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={MISE.ink35} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </SettingRow>
          <SettingRow label="로그아웃" danger>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C44A3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </SettingRow>
        </SettingSection>

        <div style={{ padding: '0 20px 20px', textAlign: 'center', fontSize: 10, color: MISE.ink35, letterSpacing: '0.06em' }}>
          MISE v1.0.0 · mise.film
        </div>
      </div>
    </div>
  );
}
