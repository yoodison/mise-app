import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MiseTabBar from '../components/MiseTabBar.jsx'
import Poster from '../components/Poster.jsx'
import StarRow from '../components/StarRow.jsx'
import SwipeStars from '../components/SwipeStars.jsx'
import { IcTicket } from '../components/Icons.jsx'
import { MISE, FILMS } from '../tokens.js'

export default function ScreenMovieDetail() {
  const [variant, setVariant] = useState('rate')
  const navigate = useNavigate()
  const { id } = useParams();
  const f = FILMS[id] ?? FILMS.drive;
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', background: MISE.warm, position: 'relative' }}>
      {/* DARK HEADER with poster */}
      <div style={{
        background: `linear-gradient(180deg, ${f.accent} 0%, ${f.tone} 65%, ${MISE.charcoal} 105%)`,
        padding: '0 20px', paddingTop: 'env(safe-area-inset-top, 0px)', flexShrink: 0, position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.3, backgroundImage: 'repeating-linear-gradient(42deg, rgba(255,255,255,0.02) 0 1px, transparent 1px 3px)' }}/>
        <div style={{ padding: '14px 0 14px', display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(250,250,248,0.9)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}><path d="M15 6l-6 6 6 6"/></svg>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(250,250,248,0.9)" strokeWidth="1.6"><circle cx="5" cy="12" r="1.2" fill="currentColor"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/><circle cx="19" cy="12" r="1.2" fill="currentColor"/></svg>
        </div>

        <div style={{ display: 'flex', gap: 16, paddingBottom: 22, position: 'relative' }}>
          <Poster {...f} w={96} h={136} radius={3}/>
          <div style={{ flex: 1, paddingTop: 4, color: MISE.warm }}>
            <div style={{ fontFamily: MISE.fontSerif, fontSize: 22, lineHeight: 1.15, marginBottom: 5, fontWeight: 500 }}>{f.title}</div>
            <div style={{ fontSize: 10, color: 'rgba(250,250,248,0.55)', letterSpacing: '0.04em', marginBottom: 12 }}>
              {f.director} · {f.year} · {f.country}
            </div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 9, padding: '3px 8px', border: '0.5px solid rgba(250,250,248,0.25)', borderRadius: 12, color: 'rgba(250,250,248,0.75)' }}>드라마</span>
              <span style={{ fontSize: 9, padding: '3px 8px', border: '0.5px solid rgba(250,250,248,0.25)', borderRadius: 12, color: 'rgba(250,250,248,0.75)' }}>{f.runtime}분</span>
              <span style={{ fontSize: 9, padding: '3px 8px', border: '0.5px solid rgba(250,250,248,0.25)', borderRadius: 12, color: 'rgba(250,250,248,0.75)' }}>15+</span>
            </div>
          </div>
        </div>
      </div>

      {/* WHITE CONTENT */}
      <div style={{ flex: 1, overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none', paddingBottom: 100 }}>
        <div style={{ padding: '20px 20px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 18, marginBottom: 12 }}>
            <div>
              <div style={{ fontSize: 9, color: MISE.ink45, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 2 }}>종합 별점</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                <span style={{ fontFamily: MISE.fontSerif, fontSize: 32, color: MISE.ink, lineHeight: 1, fontWeight: 500 }}>4.3</span>
                <StarRow value={4.3} size={11}/>
              </div>
              <div style={{ fontSize: 10, color: MISE.ink45, marginTop: 3 }}>· 2,184명 평가</div>
            </div>
            <div style={{ marginLeft: 'auto', textAlign: 'right', borderLeft: `0.5px solid ${MISE.ink10}`, paddingLeft: 14 }}>
              <div style={{ fontSize: 9, color: MISE.gold, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 2, fontWeight: 600 }}>당신의 예상</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 5, justifyContent: 'flex-end' }}>
                <span style={{ fontFamily: MISE.fontSerif, fontSize: 26, color: MISE.gold, lineHeight: 1, fontWeight: 500 }}>4.6</span>
                <StarRow value={4.6} size={9}/>
              </div>
              <div style={{ fontSize: 9, color: MISE.ink45, marginTop: 3 }}>취향 유사도 기반</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 14 }}>
            <CritTag name="연출" score={4.7}/>
            <CritTag name="사운드" score={4.5}/>
            <CritTag name="각본" score={4.4}/>
            <span style={{ fontSize: 10, color: MISE.ink45, alignSelf: 'center' }}>+7개 더</span>
          </div>
        </div>

        <div style={{ padding: '0 20px 16px', display: 'flex', gap: 8 }}>
          <div style={{ flex: 1, padding: '11px 0', border: `0.5px solid ${MISE.ink18}`, borderRadius: 6, textAlign: 'center', fontSize: 12, fontWeight: 500, color: MISE.ink }}>
            ♡  보고싶어요
          </div>
          <div style={{ flex: 1, padding: '11px 0', border: `1px solid ${MISE.gold}`, borderRadius: 6, textAlign: 'center', fontSize: 12, fontWeight: 600, color: MISE.gold, background: MISE.goldSoft, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
            <IcTicket style={{ width: 14, height: 14 }}/> 극장에서
          </div>
        </div>

        <div style={{ padding: '0 20px', borderBottom: `0.5px solid ${MISE.ink10}`, display: 'flex', gap: 22 }}>
          {[['rate','평가'],['reviews','감상평 · 184'],['discuss','토론 · 42']].map(([k,label]) => (
            <div key={k} onClick={() => setVariant(k)} style={{
              padding: '10px 0',
              borderBottom: variant === k ? `2px solid ${MISE.gold}` : '2px solid transparent',
              marginBottom: -0.5,
              fontSize: 12, color: variant === k ? MISE.ink : MISE.ink35,
              fontWeight: variant === k ? 600 : 500,
              cursor: 'pointer',
            }}>{label}</div>
          ))}
        </div>

        {variant === 'rate' && <TabRate/>}
        {variant === 'reviews' && <TabReviews/>}
        {variant === 'discuss' && <TabDiscuss/>}
      </div>

      <MiseTabBar/>
    </div>
  );
}

function CritTag({ name, score }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      fontSize: 10.5, padding: '5px 10px',
      background: MISE.linen, borderRadius: 14,
      color: MISE.ink, fontWeight: 500,
    }}>
      {name}
      <span style={{ color: MISE.gold, fontWeight: 700 }}>{score.toFixed(1)}</span>
    </span>
  );
}

function TabRate() {
  const [overall, setOverall] = useState(4.2);
  const crits = [
    { name: '연출',   val: 4.5 },
    { name: '각본',   val: 4.2 },
    { name: '연기',   val: 4.3 },
  ];
  return (
    <div style={{ padding: '18px 20px 30px' }}>
      <div style={{ marginBottom: 22 }}>
        <div style={{ marginBottom: 14 }}>
          <span style={{ fontSize: 11, color: MISE.ink55, fontWeight: 500 }}>내 평점</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, justifyContent: 'center' }}>
          <SwipeStars value={overall} onChange={setOverall} size={40}/>
          <span style={{ fontFamily: MISE.fontSerif, fontSize: 30, color: MISE.gold, fontWeight: 600, minWidth: 36 }}>{overall.toFixed(1)}</span>
        </div>
      </div>

      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 11, color: MISE.ink55, fontWeight: 500, marginBottom: 12 }}>세부 항목</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {crits.map(c => (
            <div key={c.name} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 11, color: MISE.ink70, width: 52, flexShrink: 0 }}>{c.name}</span>
              <SwipeStars value={c.val} size={18}/>
              <span style={{ fontSize: 11, color: MISE.ink, fontWeight: 600, minWidth: 24, textAlign: 'right' }}>{c.val.toFixed(1)}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div style={{ fontSize: 11, color: MISE.ink55, fontWeight: 500, marginBottom: 8 }}>감상평</div>
        <div style={{
          border: `0.5px solid ${MISE.ink18}`, borderRadius: 6, padding: 12,
          background: MISE.warm, minHeight: 96,
          fontSize: 12, color: MISE.ink70, lineHeight: 1.6,
          fontFamily: MISE.fontSans,
        }}>
          <span style={{ color: MISE.ink35 }}>이 영화에서 가장 인상 깊었던 장면, 한 컷, 한 대사를 적어주세요...</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
          <div style={{ display: 'flex', gap: 6 }}>
            <span style={{ fontSize: 10, padding: '3px 8px', background: MISE.linen, borderRadius: 12, color: MISE.ink55 }}>+ 스포일러</span>
            <span style={{ fontSize: 10, padding: '3px 8px', background: MISE.linen, borderRadius: 12, color: MISE.ink55 }}>+ 태그</span>
          </div>
          <div style={{ padding: '8px 18px', background: MISE.charcoal, borderRadius: 6, fontSize: 11, color: MISE.warm, fontWeight: 600, letterSpacing: '0.04em' }}>
            등록
          </div>
        </div>
      </div>

      <div style={{ marginTop: 20, paddingTop: 18, borderTop: `0.5px solid ${MISE.ink06}` }}>
        <div style={{ fontSize: 11, color: MISE.ink55, fontWeight: 500, marginBottom: 10 }}>내가 남긴 감상평</div>
        <div style={{ background: MISE.linen, borderRadius: 8, padding: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#3A2A20' }}/>
            <span style={{ fontSize: 11, fontWeight: 600, color: MISE.ink }}>김지수</span>
            <span style={{ fontSize: 9, color: MISE.ink35 }}>3일 전</span>
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 3 }}>
              <StarRow value={4.2} size={9}/>
              <span style={{ fontSize: 10, color: MISE.ink, fontWeight: 700 }}>4.2</span>
            </div>
          </div>
          <div style={{ fontSize: 12, color: MISE.ink70, lineHeight: 1.65, marginBottom: 8 }}>
            차는 움직이고 말은 멈춰 있다. 하마구치의 카메라는 언제나 조수석에 앉아 있다 — 그 자리가 가장 진실에 가깝다.
          </div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 8, flexWrap: 'wrap' }}>
            {['연출','사운드','각본'].map(t => (
              <span key={t} style={{ fontSize: 9, padding: '2px 7px', background: MISE.goldSoft, color: MISE.gold, borderRadius: 10, fontWeight: 600 }}>#{t}</span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12, fontSize: 10, color: MISE.ink45 }}>
            <span>♡ 38</span>
            <span>💬 4</span>
            <span style={{ marginLeft: 'auto', color: MISE.ink55, fontWeight: 500 }}>수정 · 삭제</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabReviews() {
  const reviews = [
    { name: '박재현', handle: 'jaehyun.film', tags: ['아트하우스','일본영화'], stars: 5.0, when: '3일 전',
      text: '차는 움직이고, 말은 멈춰 있다. 하마구치는 이 역설로 180분을 통과한다. 운전석의 미사키는 결국 가후쿠의 조수가 아니라 그의 거울이 된다. 체호프를 읽는 다국어 낭독 장면에서 나는 자막 없이 울었다.',
      likes: 342, replies: 28 },
    { name: '윤서영', handle: 'sooy_', tags: ['여성주의','시네필'], stars: 4.5, when: '1주 전',
      text: '러닝타임이 길다는 말을 믿지 마라. 이 영화는 정확히 필요한 만큼의 시간을 쓴다. 오히려 짧게 느껴지는 순간이 있다. 하마구치의 인내심은 관객을 훈련시킨다.',
      likes: 218, replies: 14 },
    { name: '이도현', handle: 'dohyun.film', tags: ['체호프'], stars: 4.0, when: '2주 전',
      text: '『바냐 아저씨』를 읽지 않으면 절반만 보는 것 같다. 연극과 영화의 경계에서 하마구치가 무엇을 믿고 있는지 — 언어, 반복, 읽기의 힘.',
      likes: 167, replies: 9 },
  ];
  return (
    <div style={{ padding: '18px 20px 30px' }}>
      <div style={{ display: 'flex', gap: 6, marginBottom: 18, overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {['전체','팔로잉','5점','스포일러 없음','최신순'].map((t,i) => (
          <span key={t} style={{
            fontSize: 10, padding: '5px 10px',
            background: i === 0 ? MISE.charcoal : 'transparent',
            color: i === 0 ? MISE.warm : MISE.ink55,
            border: i === 0 ? 'none' : `0.5px solid ${MISE.ink18}`,
            borderRadius: 14, fontWeight: 500, whiteSpace: 'nowrap',
          }}>{t}</span>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        {reviews.map((r,i) => (
          <div key={i} style={{ paddingBottom: 18, borderBottom: i < reviews.length-1 ? `0.5px solid ${MISE.ink06}` : 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 8 }}>
              <div style={{ width: 26, height: 26, borderRadius: '50%', background: ['#2A2520','#3A2830','#2A3830'][i], flexShrink: 0 }}/>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 11.5, fontWeight: 600, color: MISE.ink, lineHeight: 1.2 }}>{r.name}</div>
                <div style={{ fontSize: 9, color: MISE.ink45, marginTop: 1 }}>@{r.handle} · {r.when}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <StarRow value={r.stars} size={11}/>
                <span style={{ fontSize: 11, color: MISE.ink, fontWeight: 600 }}>{r.stars.toFixed(1)}</span>
              </div>
            </div>
            <div style={{ fontSize: 12, color: MISE.ink70, lineHeight: 1.65, marginBottom: 10 }}>{r.text}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 10, color: MISE.ink45 }}>
              <span>♡ {r.likes}</span>
              <span>💬 {r.replies}</span>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: 4 }}>
                {r.tags.map(t => (
                  <span key={t} style={{ fontSize: 9, color: MISE.gold, background: MISE.goldSoft, padding: '2px 7px', borderRadius: 10 }}>#{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TabDiscuss() {
  const threads = [
    { tag: '해석', hot: true,
      title: '가후쿠는 왜 사브 900을 고집하는가?',
      opener: '차는 단순한 오브제가 아니다. 하마구치는 이 낡은 붉은 사브를 운전석/조수석이라는 두 개의 고해실로 만든다.',
      author: '박재현', when: '5일 전', replies: 87, likes: 412 },
    { tag: '스포일러', hot: false,
      title: '엔딩의 한국 장면 — 왜 한국이었을까?',
      opener: '부산이 아니라 원작 단편의 도쿄였다면? 하마구치의 선택이 영화 전체의 층위를 바꾼다.',
      author: '윤서영', when: '1주 전', replies: 54, likes: 286 },
    { tag: '비교', hot: false,
      title: '하마구치의 우연과 상상 vs 드라이브 마이 카 — 어느 쪽?',
      opener: '두 작품 모두 같은 해에 나왔는데, 완전히 다른 호흡이다. 전자는 스케치, 후자는 유화.',
      author: '이도현', when: '2주 전', replies: 128, likes: 596 },
  ];
  return (
    <div style={{ padding: '18px 20px 30px' }}>
      <div style={{
        padding: 14, background: MISE.linen, borderRadius: 8,
        display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18,
      }}>
        <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#2A2520', flexShrink: 0 }}/>
        <div style={{ flex: 1, fontSize: 11.5, color: MISE.ink45 }}>이 영화에 대한 질문을 던져보세요...</div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={MISE.gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 113 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {threads.map((t, i) => (
          <div key={i} style={{ padding: '14px 0', borderBottom: i < threads.length-1 ? `0.5px solid ${MISE.ink06}` : 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
              <span style={{ fontSize: 9, padding: '2px 7px', background: t.hot ? MISE.gold : MISE.ink10, color: t.hot ? MISE.warm : MISE.ink70, borderRadius: 10, fontWeight: 600, letterSpacing: '0.04em' }}>
                {t.hot && '🔥 '}{t.tag}
              </span>
              <span style={{ fontSize: 9, color: MISE.ink45 }}>@{t.author} · {t.when}</span>
            </div>
            <div style={{ fontSize: 14, color: MISE.ink, fontWeight: 600, lineHeight: 1.3, marginBottom: 6 }}>{t.title}</div>
            <div style={{ fontSize: 11.5, color: MISE.ink55, lineHeight: 1.55, marginBottom: 10 }}>{t.opener}</div>
            <div style={{ display: 'flex', gap: 14, fontSize: 10.5, color: MISE.ink45 }}>
              <span>💬 {t.replies} 댓글</span>
              <span>♡ {t.likes}</span>
              <span style={{ marginLeft: 'auto', color: MISE.gold, fontWeight: 600 }}>참여하기 →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
