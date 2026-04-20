// MISE — 커뮤니티 화면
// tab = 'all' | 'essay' | 'discuss' | 'review' | 'qna'

import MiseTabBar from '../components/MiseTabBar.jsx';
import Poster from '../components/Poster.jsx';
import StarRow from '../components/StarRow.jsx';
import { MISE, FILMS } from '../tokens.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ScreenCommunity() {
  const [tab, setTab] = useState('all');

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', background: MISE.warm, position: 'relative' }}>
      <div style={{ padding: '4px 20px 12px', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 10, letterSpacing: '0.18em', color: MISE.ink45, textTransform: 'uppercase', marginBottom: 3 }}>Community</div>
          <div style={{ fontFamily: MISE.fontSerif, fontSize: 26, letterSpacing: '0.03em', color: MISE.ink, lineHeight: 1, fontWeight: 500 }}>커뮤니티</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '8px 14px', background: MISE.charcoal, borderRadius: 20 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={MISE.warm} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 113 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
          <span style={{ fontSize: 11, color: MISE.warm, fontWeight: 600, letterSpacing: '0.04em' }}>글쓰기</span>
        </div>
      </div>

      {/* category chips */}
      <div style={{ padding: '0 20px 14px', display: 'flex', gap: 6, overflow: 'hidden', flexShrink: 0 }}>
        {[['all','전체'],['essay','에세이'],['discuss','토론'],['review','감상평'],['qna','Q&A']].map(([k,l]) => (
          <span key={k} onClick={() => setTab(k)} style={{
            fontSize: 11, padding: '6px 12px',
            background: tab === k ? MISE.charcoal : 'transparent',
            color: tab === k ? MISE.warm : MISE.ink55,
            border: tab === k ? 'none' : `0.5px solid ${MISE.ink18}`,
            borderRadius: 14, fontWeight: 500, whiteSpace: 'nowrap',
            cursor: 'pointer',
          }}>{l}</span>
        ))}
      </div>

      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 100, scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {tab === 'all'     && <TabCommAll/>}
        {tab === 'essay'   && <TabCommEssay/>}
        {tab === 'discuss' && <TabCommDiscuss/>}
        {tab === 'review'  && <TabCommReview/>}
        {tab === 'qna'     && <TabCommQna/>}
      </div>

      <MiseTabBar/>
    </div>
  );
}

// ─── subcomponents ─────────────────────────────────────────────

function CommSectionLabel({ children, more }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
      <div style={{ fontSize: 14, fontWeight: 600, color: MISE.ink, letterSpacing: '-0.01em' }}>{children}</div>
      {more && <span style={{ fontSize: 11, color: MISE.gold, fontWeight: 500 }}>더 보기</span>}
    </div>
  );
}

function TabCommAll() {
  return (
    <div style={{ padding: '0 20px' }}>
      <div style={{ marginBottom: 22 }}>
        <CommSectionLabel>이번 주 추천 에세이</CommSectionLabel>
        <EssayHero/>
      </div>
      <div style={{ marginBottom: 22 }}>
        <CommSectionLabel more>인기 토론</CommSectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {COMM_DISCUSSIONS.slice(0,2).map((d, i) => <CommDiscRow key={i} {...d}/>)}
        </div>
      </div>
      <div style={{ paddingBottom: 20 }}>
        <CommSectionLabel more>인기 감상평</CommSectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {COMM_REVIEWS.slice(0,2).map((r, i) => <CommReviewRow key={i} {...r}/>)}
        </div>
      </div>
    </div>
  );
}

const ESSAYS = [
  { title: '시간을 다루는 두 가지 방법 — 타르코프스키와 하마구치', author: '박재현', handle: 'jaehyun.film', readMin: 8, when: '2일 전', films: ['mirror','drive'], likes: 892, replies: 74, excerpt: '"거울"과 "드라이브 마이 카"는 모두 기억을 다룬다. 하지만 타르코프스키는 기억을 시간의 조각으로, 하마구치는 언어의 반복으로 구현한다.' },
  { title: '아케르만의 카메라는 왜 움직이지 않는가', author: '윤서영', handle: 'sooy_', readMin: 6, when: '5일 전', films: ['jeanne'], likes: 614, replies: 48, excerpt: '고정된 카메라는 감시가 아니라 증언이다. 잔느의 동선을 따라가며 우리는 무엇을 목격하는가.' },
  { title: '박찬욱의 색채 언어 — 헤어질 결심을 중심으로', author: '이도현', handle: 'dohyun.film', readMin: 11, when: '1주 전', films: ['decision'], likes: 543, replies: 61, excerpt: '회색-파랑의 안개 속 붉은 립스틱. 박찬욱은 색으로 감정의 지형을 그린다.' },
  { title: '느린 영화란 무엇인가 — 슬로우 시네마 소사', author: '김서우', handle: 'seowoo', readMin: 14, when: '2주 전', films: ['perfect','mirror','eo'], likes: 428, replies: 37, excerpt: '벨라 타르부터 빔 벤더스까지 — 느림은 결핍이 아니라 선택된 시학이다.' },
];

function TabCommEssay() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '0 20px 20px' }}>
      <div style={{ display: 'flex', gap: 5, marginBottom: 16, overflow: 'hidden' }}>
        {['최신순','인기순','팔로잉'].map((t,i) => (
          <span key={t} style={{ fontSize: 10, padding: '4px 10px', borderRadius: 12, background: i===0 ? MISE.charcoal : 'transparent', color: i===0 ? MISE.warm : MISE.ink55, border: i===0 ? 'none' : `0.5px solid ${MISE.ink18}`, fontWeight: 500, whiteSpace: 'nowrap' }}>{t}</span>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {ESSAYS.map((e, i) => (
          <div key={i} style={{ paddingBottom: 16, borderBottom: `0.5px solid ${MISE.ink06}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 8 }}>
              <div style={{ width: 24, height: 24, borderRadius: '50%', background: ['#2A2520','#3A2830','#2A3830','#283A2A'][i] }}/>
              <span style={{ fontSize: 10.5, fontWeight: 600, color: MISE.ink }}>{e.author}</span>
              <span style={{ fontSize: 9, color: MISE.ink35 }}>@{e.handle} · {e.when}</span>
              <span style={{ marginLeft: 'auto', fontSize: 9, color: MISE.ink45, letterSpacing: '0.04em' }}>{e.readMin}분 읽기</span>
            </div>
            <div style={{ fontFamily: MISE.fontSerif, fontSize: 15, color: MISE.ink, fontWeight: 500, lineHeight: 1.3, marginBottom: 6 }}>{e.title}</div>
            <div style={{ fontSize: 11.5, color: MISE.ink55, lineHeight: 1.6, marginBottom: 8 }}>{e.excerpt}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              {e.films.map(fk => (
                <div key={fk} onClick={() => navigate('/movie/' + fk)} style={{ cursor: 'pointer' }}>
                  <Poster {...FILMS[fk]} title={undefined} year={undefined} director={undefined} w={28} h={40} radius={2}/>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 12, fontSize: 10, color: MISE.ink45 }}>
              <span>♡ {e.likes}</span>
              <span>💬 {e.replies}</span>
              <span style={{ marginLeft: 'auto', color: MISE.gold, fontWeight: 600 }}>읽기 →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const COMM_DISCUSSIONS = [
  { film: 'anatomy', tag: '논쟁', hot: true,  title: '산드라는 정말 결백한가? 법정 장면 재분석', author: '이도현', when: '2일 전', replies: 412, likes: 1876 },
  { film: 'zone',    tag: '해석', hot: true,  title: '사운드 디자인이 영화의 진짜 주인공인가?', author: '박재현', when: '5일 전', replies: 248, likes: 1420 },
  { film: 'burning', tag: '비교', hot: false, title: '이창동 vs 봉준호 — 한국 리얼리즘의 두 갈래', author: '김서우', when: '1주 전', replies: 187, likes: 934 },
  { film: 'past',    tag: '공감', hot: false, title: '"인연"이라는 단어를 영어로 번역할 수 있을까?', author: '윤서영', when: '1주 전', replies: 156, likes: 802 },
  { film: 'drive',   tag: '해석', hot: false, title: '가후쿠는 왜 사브 900을 고집하는가?', author: '박재현', when: '2주 전', replies: 87, likes: 412 },
];

function TabCommDiscuss() {
  return (
    <div style={{ padding: '0 20px 20px' }}>
      <div style={{ padding: 14, background: MISE.linen, borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
        <div style={{ width: 30, height: 30, borderRadius: '50%', background: '#2A2520' }}/>
        <div style={{ flex: 1, fontSize: 11.5, color: MISE.ink45 }}>이 영화에 대한 질문을 던져보세요...</div>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={MISE.gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 113 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
      </div>
      <div style={{ display: 'flex', gap: 5, marginBottom: 14, overflow: 'hidden' }}>
        {['전체','해석','논쟁','비교','공감'].map((t,i) => (
          <span key={t} style={{ fontSize: 10, padding: '4px 10px', borderRadius: 12, background: i===0 ? MISE.charcoal : 'transparent', color: i===0 ? MISE.warm : MISE.ink55, border: i===0 ? 'none' : `0.5px solid ${MISE.ink18}`, fontWeight: 500, whiteSpace: 'nowrap' }}>{t}</span>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {COMM_DISCUSSIONS.map((d, i) => <CommDiscRow key={i} {...d}/>)}
      </div>
    </div>
  );
}

const COMM_REVIEWS = [
  { film: 'drive',   stars: 5.0, author: '박재현', handle: 'jaehyun.film', when: '3일 전', text: '차는 움직이고, 말은 멈춰 있다. 하마구치는 이 역설로 180분을 통과한다.', likes: 342, replies: 28 },
  { film: 'past',    stars: 4.5, author: '윤서영', handle: 'sooy_', when: '1주 전', text: '셀린 송이 "인연"을 설명하지 않는 방식 — 그 침묵이 번역의 정답이었다.', likes: 218, replies: 14 },
  { film: 'perfect', stars: 4.5, author: '이도현', handle: 'dohyun.film', when: '2주 전', text: '같은 아침이 매번 새롭다는 것 — 빔 벤더스는 이 단순한 진실을 123분으로 증명한다.', likes: 196, replies: 11 },
  { film: 'zone',    stars: 4.5, author: '김서우', handle: 'seowoo', when: '2주 전', text: '글레이저는 의도적으로 카메라를 벽 너머에 두었다. 소리만으로 존재를 증명하는 105분.', likes: 178, replies: 19 },
  { film: 'anatomy', stars: 4.0, author: '이민준', handle: 'min_cinema', when: '3주 전', text: '관객을 배심원석에 앉히는 트리에의 연출. 나는 마지막까지 판결을 내리지 못했다.', likes: 154, replies: 22 },
];

function TabCommReview() {
  return (
    <div style={{ padding: '0 20px 20px' }}>
      <div style={{ display: 'flex', gap: 5, marginBottom: 16, overflow: 'hidden' }}>
        {['인기순','최신순','팔로잉','5점','스포일러 없음'].map((t,i) => (
          <span key={t} style={{ fontSize: 10, padding: '4px 10px', borderRadius: 12, background: i===0 ? MISE.charcoal : 'transparent', color: i===0 ? MISE.warm : MISE.ink55, border: i===0 ? 'none' : `0.5px solid ${MISE.ink18}`, fontWeight: 500, whiteSpace: 'nowrap' }}>{t}</span>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {COMM_REVIEWS.map((r, i) => <CommReviewRow key={i} {...r}/>)}
      </div>
    </div>
  );
}

const QNAS = [
  { tag: '추천', title: '연출 공부를 위해 처음 봐야 할 영화 5편 추천해주세요', author: '김민준', handle: 'minjun_', when: '1일 전', answers: 18, likes: 234, answered: true },
  { tag: '정보', title: '씨네큐브 회원권 vs 아트나인 연간권 어떤 게 나을까요?', author: '이서연', handle: 'seoyeon', when: '3일 전', answers: 11, likes: 87 },
  { tag: '추천', title: '하마구치 감독 입문작으로 드라이브 마이 카 먼저 봐도 될까요?', author: '박성현', handle: 'sunghyun', when: '5일 전', answers: 24, likes: 312, answered: true },
  { tag: '토론', title: '자막 vs 더빙 — 아트하우스 영화에서도 더빙이 의미 있을까?', author: '최지은', handle: 'jieun.c', when: '1주 전', answers: 42, likes: 518 },
  { tag: '정보', title: '국내에서 타르코프스키 전작 볼 수 있는 방법이 있을까요?', author: '한도윤', handle: 'doyun_', when: '2주 전', answers: 9, likes: 145, answered: true },
];

function TabCommQna() {
  return (
    <div style={{ padding: '0 20px 20px' }}>
      <div style={{ padding: '12px 14px', background: MISE.goldSoft, border: `0.5px solid rgba(196,145,58,0.3)`, borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
        <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#2A2520' }}/>
        <div style={{ flex: 1, fontSize: 11.5, color: MISE.ink55 }}>영화에 대한 궁금한 점을 물어보세요...</div>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={MISE.gold} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
      </div>
      <div style={{ display: 'flex', gap: 5, marginBottom: 14 }}>
        {['전체','추천','정보','미답변'].map((t,i) => (
          <span key={t} style={{ fontSize: 10, padding: '4px 10px', borderRadius: 12, background: i===0 ? MISE.charcoal : 'transparent', color: i===0 ? MISE.warm : MISE.ink55, border: i===0 ? 'none' : `0.5px solid ${MISE.ink18}`, fontWeight: 500, whiteSpace: 'nowrap' }}>{t}</span>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {QNAS.map((q, i) => (
          <div key={i} style={{ padding: '14px 0', borderBottom: `0.5px solid ${MISE.ink06}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
              <span style={{ fontSize: 9, padding: '2px 6px', background: MISE.ink06, color: MISE.ink70, borderRadius: 8, fontWeight: 600 }}>{q.tag}</span>
              {q.answered && <span style={{ fontSize: 9, padding: '2px 6px', background: 'rgba(196,145,58,0.15)', color: MISE.gold, borderRadius: 8, fontWeight: 600 }}>답변 완료</span>}
            </div>
            <div style={{ fontSize: 13, color: MISE.ink, fontWeight: 600, lineHeight: 1.35, marginBottom: 6 }}>{q.title}</div>
            <div style={{ display: 'flex', gap: 12, fontSize: 10, color: MISE.ink45 }}>
              <span>@{q.author} · {q.when}</span>
              <span>💬 {q.answers}개 답변</span>
              <span>♡ {q.likes}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EssayHero() {
  const navigate = useNavigate();
  const e = ESSAYS[0];
  return (
    <div style={{ background: MISE.charcoal, borderRadius: 8, overflow: 'hidden' }}>
      <div style={{ padding: '20px 18px 16px', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.3, backgroundImage: 'repeating-linear-gradient(42deg, rgba(255,255,255,0.02) 0 1px, transparent 1px 3px)' }}/>
        <div style={{ fontSize: 9, letterSpacing: '0.2em', color: MISE.gold, textTransform: 'uppercase', fontWeight: 600, marginBottom: 10, position: 'relative' }}>Essay · Pick</div>
        <div style={{ fontFamily: MISE.fontSerif, fontSize: 17, color: MISE.warm, lineHeight: 1.25, fontWeight: 500, marginBottom: 6, position: 'relative' }}>{e.title}</div>
        <div style={{ fontSize: 11, color: 'rgba(250,250,248,0.55)', lineHeight: 1.6, marginBottom: 14, position: 'relative' }}>{e.excerpt}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, position: 'relative' }}>
          <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#3A2A20' }}/>
          <div>
            <div style={{ fontSize: 11, color: MISE.warm, fontWeight: 600 }}>{e.author}</div>
            <div style={{ fontSize: 9, color: 'rgba(250,250,248,0.45)' }}>@{e.handle} · {e.readMin}분 읽기</div>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 12, fontSize: 10, color: 'rgba(250,250,248,0.5)' }}>
            <span>♡ {e.likes}</span>
            <span>💬 {e.replies}</span>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '0.5px solid rgba(250,250,248,0.08)', padding: '10px 18px', display: 'flex', gap: 8, alignItems: 'center' }}>
        <span style={{ fontSize: 9, color: 'rgba(250,250,248,0.35)', letterSpacing: '0.08em', textTransform: 'uppercase', marginRight: 4 }}>관련</span>
        {e.films.map(fk => (
          <div key={fk} onClick={() => navigate('/movie/' + fk)} style={{ cursor: 'pointer' }}>
            <Poster {...FILMS[fk]} title={undefined} year={undefined} director={undefined} w={32} h={44} radius={2}/>
          </div>
        ))}
      </div>
    </div>
  );
}

function CommDiscRow({ film, tag, hot, title, author, when, replies, likes }) {
  const navigate = useNavigate();
  const f = FILMS[film];
  return (
    <div style={{ background: MISE.linen, borderRadius: 8, padding: 12, display: 'flex', gap: 10 }}>
      <div onClick={() => navigate('/movie/' + film)} style={{ cursor: 'pointer' }}>
        <Poster {...f} title={undefined} year={undefined} director={undefined} w={42} h={60} radius={3}/>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
          <span style={{ fontSize: 9, padding: '2px 6px', background: hot ? MISE.gold : MISE.ink10, color: hot ? MISE.warm : MISE.ink70, borderRadius: 8, fontWeight: 600 }}>
            {hot && '🔥 '}{tag}
          </span>
          <span style={{ fontSize: 9, color: MISE.ink45 }}>· {f.title}</span>
        </div>
        <div style={{ fontSize: 12.5, color: MISE.ink, fontWeight: 600, lineHeight: 1.3, marginBottom: 6 }}>{title}</div>
        <div style={{ fontSize: 9.5, color: MISE.ink45, display: 'flex', gap: 10 }}>
          <span>@{author} · {when}</span>
          <span>💬 {replies}</span>
          <span>♡ {likes.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}

function CommReviewRow({ film, stars, author, handle, when, text, likes, replies }) {
  const navigate = useNavigate();
  const f = FILMS[film];
  const avatarColors = { '박재현':'#2A2520','윤서영':'#3A2830','이도현':'#2A3830','김서우':'#283A2A','이민준':'#2A283A' };
  return (
    <div style={{ paddingBottom: 12, borderBottom: `0.5px solid ${MISE.ink06}` }}>
      <div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
        <div style={{ width: 28, height: 28, borderRadius: '50%', background: avatarColors[author] || '#2A2520', flexShrink: 0 }}/>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 1 }}>
            <span style={{ fontSize: 11.5, fontWeight: 600, color: MISE.ink }}>{author}</span>
            <span style={{ fontSize: 9, color: MISE.ink35 }}>@{handle} · {when}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <StarRow value={stars} size={9}/>
            <span style={{ fontSize: 10, fontWeight: 700, color: MISE.ink }}>{stars.toFixed(1)}</span>
            <span style={{ fontSize: 9, color: MISE.ink35 }}>· {f.title}</span>
          </div>
        </div>
        <div onClick={() => navigate('/movie/' + film)} style={{ cursor: 'pointer' }}>
          <Poster {...f} title={undefined} year={undefined} director={undefined} w={36} h={50} radius={2.5}/>
        </div>
      </div>
      <div style={{ fontSize: 12, color: MISE.ink70, lineHeight: 1.6, marginBottom: 8 }}>{text}</div>
      <div style={{ fontSize: 10, color: MISE.ink45, display: 'flex', gap: 12 }}>
        <span>♡ {likes}</span>
        <span>💬 {replies}</span>
        <span style={{ marginLeft: 'auto', color: MISE.gold, fontWeight: 600 }}>더 읽기 →</span>
      </div>
    </div>
  );
}
