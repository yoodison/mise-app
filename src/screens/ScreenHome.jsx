// MISE — Home (확장판)
// 기존 홈 + 인기 토론 + 취향 추천 섹션

import MiseStatus from '../components/MiseStatus.jsx';
import MiseTabBar from '../components/MiseTabBar.jsx';
import Poster from '../components/Poster.jsx';
import StarRow from '../components/StarRow.jsx';
import { MISE, FILMS } from '../tokens.js';

export default function ScreenHome() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: MISE.warm, position: 'relative' }}>
      <MiseStatus/>

      {/* scrollable feed */}
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 100, scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {/* HEADER */}
        <div style={{ padding: '4px 20px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: '0.18em', color: MISE.ink45, textTransform: 'uppercase', marginBottom: 3 }}>Tuesday · 5월 14일</div>
            <div style={{ fontFamily: MISE.fontSerif, fontSize: 28, letterSpacing: '0.06em', color: MISE.ink, lineHeight: 1 }}>MISE</div>
          </div>
          <div style={{ display: 'flex', gap: 14 }}>
            <IconBtn><svg viewBox="0 0 24 24" fill="none" stroke={MISE.ink} strokeWidth="1.4"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5" strokeLinecap="round"/></svg></IconBtn>
            <IconBtn badge><svg viewBox="0 0 24 24" fill="none" stroke={MISE.ink} strokeWidth="1.4"><path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" strokeLinejoin="round"/><path d="M10 21a2 2 0 004 0"/></svg></IconBtn>
          </div>
        </div>

        {/* EDITORIAL HERO */}
        <div style={{ margin: '0 20px 28px', position: 'relative' }}>
          <div style={{
            height: 220, borderRadius: 4, overflow: 'hidden', position: 'relative',
            background: 'linear-gradient(155deg, #2A3320 0%, #1C2018 55%, #0F1208 105%)',
          }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 55%)' }}/>
            <div style={{ position: 'absolute', inset: 0, opacity: 0.35, backgroundImage: 'repeating-linear-gradient(42deg, rgba(255,255,255,0.02) 0 1px, transparent 1px 3px)' }}/>
            <div style={{ position: 'absolute', left: 20, top: 18 }}>
              <span style={{ fontSize: 9, letterSpacing: '0.2em', color: MISE.gold, textTransform: 'uppercase', fontWeight: 600 }}>Editor's Pick</span>
            </div>
            <div style={{ position: 'absolute', left: 20, right: 20, bottom: 18 }}>
              <div style={{ fontFamily: MISE.fontSerif, fontSize: 24, lineHeight: 1.15, color: MISE.warm, fontWeight: 500, letterSpacing: '0.01em' }}>
                침묵이 말하는 것<br/>— 빔 벤더스의 시(詩)
              </div>
              <div style={{ fontSize: 11, color: 'rgba(250,250,248,0.6)', marginTop: 8, letterSpacing: '0.04em' }}>
                에세이 · 김서우 · 7분
              </div>
            </div>
          </div>
        </div>

        {/* 이번 주 주목 */}
        <Section title="이번 주 주목" more/>
        <div style={{ display: 'flex', gap: 12, padding: '0 20px 28px', overflow: 'hidden' }}>
          {[
            { k: 'perfect', avg: 4.3, exp: 4.7 },
            { k: 'zone',    avg: 4.5, exp: 4.8 },
            { k: 'anatomy', avg: 4.4, exp: 4.6 },
            { k: 'past',    avg: 4.1, exp: 4.5 },
          ].map(({ k, avg, exp }) => (
            <div key={k} style={{ flexShrink: 0, width: 110 }}>
              <Poster {...FILMS[k]} w={110} h={155}/>
              <div style={{ fontFamily: MISE.fontSerif, fontSize: 14, color: MISE.ink, marginTop: 8, lineHeight: 1.2 }}>{FILMS[k].title}</div>
              <div style={{ fontSize: 10, color: MISE.ink45, marginTop: 2, letterSpacing: '0.02em' }}>{FILMS[k].director}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 5 }}>
                <StarRow value={avg} size={9}/>
                <span style={{ fontSize: 10, color: MISE.ink55, fontWeight: 500 }}>{avg.toFixed(1)}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 3, marginTop: 3 }}>
                <span style={{ fontSize: 9, color: MISE.gold, fontWeight: 700 }}>예상 {exp.toFixed(1)}</span>
                <span style={{ fontSize: 8, color: MISE.ink35 }}>↑</span>
              </div>
            </div>
          ))}
        </div>

        {/* 취향 기반 추천 */}
        <div style={{ padding: '0 20px', marginBottom: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: MISE.ink, letterSpacing: '-0.01em' }}>당신을 위한 추천</div>
            <span style={{ fontSize: 11, color: MISE.gold, fontWeight: 500 }}>더 보기</span>
          </div>
          <div style={{ fontSize: 11, color: MISE.ink45, marginBottom: 14 }}>
            <span style={{ color: MISE.gold }}>#아트하우스</span> · <span style={{ color: MISE.gold }}>#롱테이크</span> 취향 기반
          </div>
        </div>

        {/* 추천 카드: 큰 첫 카드 + 리스트 */}
        <div style={{ padding: '0 20px 14px' }}>
          <RecommendCard filmKey="jeanne" reason="타르코프스키를 4.5점 매긴 당신에게" match={96}/>
        </div>

        <div style={{ padding: '0 20px 28px', display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[
            { k: 'mirror',   reason: '슬로우 시네마 · 회상 구조', match: 92, avg: 4.4, exp: 4.8 },
            { k: 'portrait', reason: '여성 감독 · 롱테이크',       match: 88, avg: 4.3, exp: 4.7 },
            { k: 'burning',  reason: '이창동 시리즈 미시청',        match: 85, avg: 4.2, exp: 4.5 },
          ].map(r => (
            <RecoRow key={r.k} filmKey={r.k} reason={r.reason} match={r.match} avg={r.avg} exp={r.exp}/>
          ))}
        </div>

        {/* 인기 토론 */}
        <Section title="지금 뜨거운 토론" more/>
        <div style={{ padding: '0 20px 28px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {DISCUSSIONS.map((d, i) => <DiscussionRow key={i} {...d}/>)}
        </div>

        {/* 팟 모집 */}
        <Section title="팟 모집 중" more/>
        <div style={{ padding: '0 20px 40px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <PotMini film="jeanne" where="CGV 홍대 2관" when="5.18 (토) 14:00" filled={13} total={20}/>
          <PotMini film="decision" where="씨네큐브 광화문" when="5.22 (수) 19:30" filled={8} total={15}/>
        </div>
      </div>

      <MiseTabBar/>
    </div>
  );
}

// ─── subcomponents ─────────────────────────────────────────────

function IconBtn({ children, badge }) {
  return (
    <div style={{ position: 'relative', width: 22, height: 22 }}>
      {children}
      {badge && <span style={{ position: 'absolute', top: -1, right: -1, width: 7, height: 7, borderRadius: '50%', background: MISE.gold, border: '1.5px solid ' + MISE.warm }}/>}
    </div>
  );
}

function Section({ title, more }) {
  return (
    <div style={{ padding: '0 20px 14px', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
      <div style={{ fontSize: 15, fontWeight: 600, color: MISE.ink, letterSpacing: '-0.01em' }}>{title}</div>
      {more && <span style={{ fontSize: 11, color: MISE.gold, fontWeight: 500 }}>더 보기</span>}
    </div>
  );
}

function RecommendCard({ filmKey, reason, match }) {
  const f = FILMS[filmKey];
  return (
    <div style={{ background: MISE.charcoal, borderRadius: 6, padding: 16, display: 'flex', gap: 14, position: 'relative', overflow: 'hidden' }}>
      <Poster {...f} w={86} h={122} radius={3}/>
      <div style={{ flex: 1, minWidth: 0, color: MISE.warm, display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: 9, letterSpacing: '0.16em', color: MISE.gold, textTransform: 'uppercase', fontWeight: 600, marginBottom: 6 }}>
          {match}% 매치
        </div>
        <div style={{ fontFamily: MISE.fontSerif, fontSize: 19, lineHeight: 1.2, marginBottom: 3, fontWeight: 500 }}>{f.title}</div>
        <div style={{ fontSize: 10, color: 'rgba(250,250,248,0.5)', marginBottom: 10, letterSpacing: '0.03em' }}>{f.director} · {f.year}</div>
        <div style={{ fontSize: 11, color: 'rgba(250,250,248,0.75)', lineHeight: 1.5, marginBottom: 10, flex: 1 }}>{reason}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <span style={{ fontSize: 10, color: 'rgba(250,250,248,0.5)' }}>평균</span>
          <StarRow value={4.2} size={10} empty="rgba(250,250,248,0.15)"/>
          <span style={{ fontSize: 10, color: MISE.warm, fontWeight: 600 }}>4.2</span>
          <span style={{ marginLeft: 'auto', fontSize: 10, color: MISE.gold }}>예상 4.6 ↑</span>
        </div>
      </div>
    </div>
  );
}

function RecoRow({ filmKey, reason, match, avg, exp }) {
  const f = FILMS[filmKey];
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Poster {...f} w={52} h={74} radius={3}/>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: MISE.fontSerif, fontSize: 14, color: MISE.ink, marginBottom: 2, fontWeight: 500 }}>{f.title}</div>
        <div style={{ fontSize: 10, color: MISE.ink45, marginBottom: 5, letterSpacing: '0.02em' }}>{f.director} · {f.year}</div>
        <div style={{ fontSize: 10, color: MISE.ink55, marginBottom: 5 }}>{reason}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <StarRow value={avg} size={8}/>
            <span style={{ fontSize: 9, color: MISE.ink55, fontWeight: 500 }}>{avg.toFixed(1)}</span>
          </div>
          <span style={{ fontSize: 8, color: MISE.ink18 }}>·</span>
          <span style={{ fontSize: 9, color: MISE.gold, fontWeight: 700 }}>예상 {exp.toFixed(1)} ↑</span>
        </div>
      </div>
      <div style={{ textAlign: 'right', flexShrink: 0 }}>
        <div style={{ fontSize: 10, color: MISE.gold, fontWeight: 600, letterSpacing: '0.04em' }}>{match}%</div>
        <div style={{ fontSize: 8, color: MISE.ink45, letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 1 }}>match</div>
      </div>
    </div>
  );
}

const DISCUSSIONS = [
  {
    film: 'zone',
    tag: '해석',
    title: '사운드 디자인이 영화의 진짜 주인공인가?',
    excerpt: '글레이저는 의도적으로 카메라를 벽 너머에 두고, 오직 소리로만 존재를 증명한다.',
    author: '박재현',
    replies: 248, likes: 1420, hot: true,
  },
  {
    film: 'past',
    tag: '공감',
    title: '"인연"이라는 단어를 영어로 번역할 수 있을까?',
    excerpt: '셀린 송이 선택한 방식 — 설명하지 않음 — 이 오히려 번역의 정답이었다.',
    author: '윤서영',
    replies: 186, likes: 982,
  },
  {
    film: 'anatomy',
    tag: '논쟁',
    title: '산드라는 정말 결백한가? 법정 장면 다시 보기',
    excerpt: '관객을 배심원 자리에 앉히는 트리에의 연출. 증거를 따라가면 결론이 달라진다.',
    author: '이도현',
    replies: 412, likes: 1876, hot: true,
  },
];

function DiscussionRow({ film, tag, title, excerpt, author, replies, likes, hot }) {
  const f = FILMS[film];
  return (
    <div style={{ background: MISE.linen, borderRadius: 8, padding: 14, display: 'flex', gap: 12 }}>
      <Poster {...f} w={46} h={66} radius={3}/>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
          <span style={{ fontSize: 9, padding: '2px 7px', background: hot ? MISE.gold : MISE.ink10, color: hot ? MISE.warm : MISE.ink70, borderRadius: 10, fontWeight: 600, letterSpacing: '0.04em' }}>
            {hot && '🔥 '}{tag}
          </span>
          <span style={{ fontSize: 9, color: MISE.ink45 }}>· {f.title}</span>
        </div>
        <div style={{ fontSize: 12.5, color: MISE.ink, fontWeight: 600, lineHeight: 1.35, marginBottom: 4 }}>{title}</div>
        <div style={{ fontSize: 10.5, color: MISE.ink55, lineHeight: 1.5, marginBottom: 8, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>"{excerpt}"</div>
        <div style={{ fontSize: 10, color: MISE.ink45, display: 'flex', gap: 10 }}>
          <span>@{author}</span>
          <span>💬 {replies}</span>
          <span>♡ {likes.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}

function PotMini({ film, where, when, filled, total }) {
  const f = FILMS[film];
  const pct = filled / total * 100;
  return (
    <div style={{ background: MISE.linen, borderRadius: 10, padding: 12, display: 'flex', gap: 12 }}>
      <Poster {...f} w={52} h={74} radius={3}/>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: MISE.fontSerif, fontSize: 14, color: MISE.ink, fontWeight: 500, marginBottom: 2 }}>{f.title}</div>
        <div style={{ fontSize: 10, color: MISE.ink45, marginBottom: 10 }}>{where} · {when}</div>
        <div style={{ height: 4, background: MISE.ink10, borderRadius: 2, overflow: 'hidden', marginBottom: 4 }}>
          <div style={{ height: '100%', width: `${pct}%`, background: MISE.gold, borderRadius: 2 }}/>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10 }}>
          <span style={{ color: MISE.ink55, fontWeight: 500 }}>{filled} / {total}명 모집 중</span>
          <span style={{ color: MISE.gold, fontWeight: 600 }}>참여 →</span>
        </div>
      </div>
    </div>
  );
}
