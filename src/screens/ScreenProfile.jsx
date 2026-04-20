import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MiseTabBar from '../components/MiseTabBar.jsx'
import Poster from '../components/Poster.jsx'
import StarRow from '../components/StarRow.jsx'
import StarGlyph from '../components/StarGlyph.jsx'
import { MISE, FILMS } from '../tokens.js'

function ProfileHeader({ activeTab, onTabChange }) {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ padding: '4px 20px 14px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'linear-gradient(135deg, #3A2A20, #2A2520)', flexShrink: 0, border: `1px solid ${MISE.ink10}` }}/>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: MISE.fontSerif, fontSize: 18, color: MISE.ink, fontWeight: 500, lineHeight: 1.1 }}>김지수</div>
          <div style={{ fontSize: 10.5, color: MISE.ink45, marginTop: 3, letterSpacing: '0.02em' }}>@jisoo.cinema</div>
        </div>
        <div onClick={() => navigate('/settings')} style={{ width: 34, height: 34, border: `0.5px solid ${MISE.ink18}`, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={MISE.ink55} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 00-2 2v.18a2 2 0 01-1 1.73l-.43.25a2 2 0 01-2 0l-.15-.08a2 2 0 00-2.73.73l-.22.38a2 2 0 00.73 2.73l.15.1a2 2 0 011 1.72v.51a2 2 0 01-1 1.74l-.15.09a2 2 0 00-.73 2.73l.22.38a2 2 0 002.73.73l.15-.08a2 2 0 012 0l.43.25a2 2 0 011 1.73V20a2 2 0 002 2h.44a2 2 0 002-2v-.18a2 2 0 011-1.73l.43-.25a2 2 0 012 0l.15.08a2 2 0 002.73-.73l.22-.39a2 2 0 00-.73-2.73l-.15-.08a2 2 0 01-1-1.74v-.5a2 2 0 011-1.74l.15-.09a2 2 0 00.73-2.73l-.22-.38a2 2 0 00-2.73-.73l-.15.08a2 2 0 01-2 0l-.43-.25a2 2 0 01-1-1.73V4a2 2 0 00-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
        </div>
      </div>

      <div style={{ padding: '0 20px 14px', display: 'flex' }}>
        {[['428','본 작품'],['234','팔로워'],['156','팔로잉']].map(([n,l]) => (
          <div key={l} style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ fontFamily: MISE.fontSerif, fontSize: 18, color: MISE.ink, fontWeight: 500, lineHeight: 1 }}>{n}</div>
            <div style={{ fontSize: 9, color: MISE.ink45, marginTop: 4, letterSpacing: '0.04em' }}>{l}</div>
          </div>
        ))}
      </div>

      <div style={{ padding: '0 20px 14px', display: 'flex', gap: 5, overflow: 'hidden' }}>
        {[['아트하우스',false],['유럽영화',false],['실험영화',true],['롱테이크',false],['여성감독',true]].map(([t,gold]) => (
          <span key={t} style={{
            fontSize: 10, padding: '4px 9px', borderRadius: 12, whiteSpace: 'nowrap',
            background: gold ? MISE.goldSoft : MISE.ink06,
            color: gold ? MISE.gold : MISE.ink70, fontWeight: 500,
          }}>#{t}</span>
        ))}
      </div>

      <div style={{ display: 'flex', padding: '0 20px', borderBottom: `0.5px solid ${MISE.ink10}`, gap: 16, flexShrink: 0, overflow: 'hidden' }}>
        {[['watched','본 작품'],['curating','큐레이팅'],['wishlist','보고싶어요'],['theater','극장에서'],['taste','취향 분석']].map(([k,l]) => (
          <div key={k} onClick={() => onTabChange(k)} style={{
            padding: '10px 0',
            borderBottom: activeTab === k ? `2px solid ${MISE.gold}` : '2px solid transparent',
            marginBottom: -0.5,
            fontSize: 11.5, color: activeTab === k ? MISE.ink : MISE.ink35,
            fontWeight: activeTab === k ? 600 : 500,
            cursor: 'pointer',
          }}>{l}</div>
        ))}
      </div>
    </>
  );
}

function WatchedTile({ film, stars, q, crits = [] }) {
  const navigate = useNavigate();
  const f = FILMS[film];
  return (
    <div onClick={() => navigate('/movie/' + film)} style={{ position: 'relative', aspectRatio: '3/4', borderRadius: 4, overflow: 'hidden', cursor: 'pointer' }}>
      <Poster {...f} title={undefined} year={undefined} director={undefined} w="100%" h="100%" radius={4}/>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0) 25%, rgba(0,0,0,0.92) 100%)' }}/>
      <div style={{
        position: 'absolute', top: 8, left: 8,
        display: 'flex', alignItems: 'center', gap: 3,
        background: 'rgba(10,10,9,0.55)', backdropFilter: 'blur(8px)',
        padding: '3px 7px', borderRadius: 12,
      }}>
        <StarGlyph size={9} color={MISE.gold}/>
        <span style={{ fontSize: 10, color: MISE.warm, fontWeight: 700, letterSpacing: '0.02em' }}>{stars.toFixed(1)}</span>
      </div>
      {crits.length > 0 && (
        <div style={{ position: 'absolute', top: 8, right: 8, display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'flex-end' }}>
          {crits.map(c => (
            <span key={c} style={{
              fontSize: 8, padding: '2px 5px',
              background: 'rgba(196,145,58,0.22)', backdropFilter: 'blur(6px)',
              color: MISE.gold, borderRadius: 6, fontWeight: 600,
              letterSpacing: '0.02em',
            }}>{c}</span>
          ))}
        </div>
      )}
      <div style={{ position: 'absolute', left: 10, right: 10, bottom: 10 }}>
        <div style={{
          fontFamily: MISE.fontSerif, fontSize: 11, lineHeight: 1.35,
          color: 'rgba(250,250,248,0.95)', fontStyle: 'italic',
          textShadow: '0 1px 4px rgba(0,0,0,0.5)', marginBottom: 6,
        }}>"{q}"</div>
        <div style={{
          fontSize: 9.5, color: 'rgba(250,250,248,0.9)',
          fontWeight: 600, letterSpacing: '0.04em',
          background: 'rgba(10,10,9,0.45)', backdropFilter: 'blur(6px)',
          padding: '3px 7px', borderRadius: 6,
          display: 'inline-block',
        }}>
          — {f.title}, {f.year}
        </div>
      </div>
    </div>
  );
}

function ProfileWatched({ activeTab, onTabChange }) {
  const WATCHED_DATA = [
    { film: 'drive',     stars: 5.0, q: '차는 움직이고, 말은 멈춰 있다.', crits: ['연출','사운드','각본'] },
    { film: 'portrait',  stars: 4.5, q: '불은 늘 타오른다, 기억 안에서.', crits: ['촬영','연출','음악'] },
    { film: 'zone',      stars: 4.5, q: '벽 너머의 소리가 모든 것을 말한다.', crits: ['사운드','연출','편집'] },
    { film: 'past',      stars: 4.0, q: '인연, 번역될 수 없는 그 단어.', crits: ['각본','연기','연출'] },
    { film: 'perfect',   stars: 4.5, q: '같은 아침이 매번 새롭다.', crits: ['연출','촬영','음악'] },
    { film: 'anatomy',   stars: 4.0, q: '진실은 편집된 소리 안에 있다.', crits: ['각본','연출','연기'] },
  ];
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', background: MISE.warm, position: 'relative' }}>
      <ProfileHeader activeTab={activeTab} onTabChange={onTabChange}/>
      <div style={{ flex: 1, overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none', paddingBottom: 100 }}>
        <div style={{ padding: '14px 20px 6px', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 11, color: MISE.ink55, fontWeight: 500 }}>최근 본 작품</span>
          <span style={{ fontSize: 10, color: MISE.gold }}>전체 보기</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, padding: '10px 20px' }}>
          {WATCHED_DATA.map((it, i) => <WatchedTile key={i} {...it}/>)}
        </div>
      </div>
      <MiseTabBar/>
    </div>
  );
}

function CurationCard({ title, subtitle, cover, films }) {
  const c = FILMS[cover];
  return (
    <div style={{ background: MISE.linen, borderRadius: 8, overflow: 'hidden' }}>
      <div style={{ display: 'flex', gap: 12, padding: 14 }}>
        <div style={{ width: 58, height: 82, borderRadius: 3, overflow: 'hidden', flexShrink: 0 }}>
          <Poster {...c} w={58} h={82} radius={3}/>
        </div>
        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontFamily: MISE.fontSerif, fontSize: 15, color: MISE.ink, fontWeight: 500, lineHeight: 1.25, marginBottom: 5 }}>{title}</div>
          <div style={{ fontSize: 10.5, color: MISE.ink55, letterSpacing: '0.02em' }}>{subtitle}</div>
        </div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={MISE.ink45} strokeWidth="1.6" strokeLinecap="round"><circle cx="5" cy="12" r="1.2" fill="currentColor"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/><circle cx="19" cy="12" r="1.2" fill="currentColor"/></svg>
      </div>
      <div style={{ display: 'flex', gap: 6, padding: '0 14px 14px', overflow: 'hidden' }}>
        {films.map(fk => (
          <Poster key={fk} {...FILMS[fk]} w={44} h={62} radius={2.5}/>
        ))}
        <div style={{
          width: 44, height: 62, borderRadius: 2.5, background: MISE.warm,
          border: `0.5px dashed ${MISE.ink18}`, display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          fontSize: 10, color: MISE.ink45, flexShrink: 0,
        }}>+{Math.max(0, 15 - films.length)}</div>
      </div>
    </div>
  );
}

function ProfileCurating({ activeTab, onTabChange }) {
  const lists = [
    { title: '비 오는 토요일 오후를 위해',  subtitle: '느린 호흡, 긴 침묵 · 8편', cover: 'perfect',  films: ['perfect','past','drive','portrait','mirror'] },
    { title: '헤어짐의 언어',               subtitle: '이별을 다룬 영화 · 12편',   cover: 'decision', films: ['decision','past','cold','burning','portrait'] },
    { title: '아케르만과 그 이후',          subtitle: '여성 감독 롱테이크 · 6편',  cover: 'jeanne',   films: ['jeanne','portrait','mother','anatomy'] },
    { title: '한국영화 2018-2024',          subtitle: '10년의 흐름 · 15편',        cover: 'burning',  films: ['burning','parasite','decision','minari','past'] },
  ];
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', background: MISE.warm, position: 'relative' }}>
      <ProfileHeader activeTab={activeTab} onTabChange={onTabChange}/>
      <div style={{ flex: 1, overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none', paddingBottom: 100 }}>
        <div style={{ padding: '14px 20px 10px', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 11, color: MISE.ink55, fontWeight: 500 }}>4개의 큐레이션</span>
          <span style={{ fontSize: 10.5, color: MISE.gold, fontWeight: 600 }}>+ 새 리스트</span>
        </div>
        <div style={{ padding: '4px 20px', display: 'flex', flexDirection: 'column', gap: 14 }}>
          {lists.map((l, i) => <CurationCard key={i} {...l}/>)}
        </div>
      </div>
      <MiseTabBar/>
    </div>
  );
}

function WishTile({ film, avg, expected }) {
  const navigate = useNavigate();
  const f = FILMS[film];
  return (
    <div onClick={() => navigate('/movie/' + film)} style={{ cursor: 'pointer' }}>
      <div style={{ aspectRatio: '3/4', borderRadius: 3, overflow: 'hidden', marginBottom: 6, position: 'relative' }}>
        <Poster {...f} title={undefined} year={undefined} director={undefined} w="100%" h="100%" radius={3}/>
      </div>
      <div style={{ fontFamily: MISE.fontSerif, fontSize: 11.5, color: MISE.ink, fontWeight: 500, lineHeight: 1.2, marginBottom: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{f.title}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, fontSize: 9 }}>
        <span style={{ color: MISE.ink55, fontWeight: 600 }}>★{avg.toFixed(1)}</span>
        <span style={{ color: MISE.gold, fontWeight: 700 }}>예상 {expected.toFixed(1)}</span>
      </div>
    </div>
  );
}

function ProfileWishlist({ activeTab, onTabChange }) {
  const items = [
    { film: 'killers',  avg: 4.3, expected: 4.7 },
    { film: 'zone',     avg: 4.5, expected: 4.8 },
    { film: 'eo',       avg: 4.1, expected: 4.5 },
    { film: 'anatomy',  avg: 4.4, expected: 4.6 },
    { film: 'roma',     avg: 4.2, expected: 4.4 },
    { film: 'moonlight',avg: 4.3, expected: 4.5 },
    { film: 'mother',   avg: 3.8, expected: 4.2 },
    { film: 'cold',     avg: 4.2, expected: 4.5 },
    { film: 'minari',   avg: 4.1, expected: 4.3 },
  ];
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', background: MISE.warm, position: 'relative' }}>
      <ProfileHeader activeTab={activeTab} onTabChange={onTabChange}/>
      <div style={{ flex: 1, overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none', paddingBottom: 100 }}>
        <div style={{ padding: '14px 20px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 11, color: MISE.ink55, fontWeight: 500 }}>{items.length}편</span>
          <div style={{ display: 'flex', gap: 5 }}>
            {[['최근 담은 순',true],['평균 별점',false],['예상 별점',false]].map(([t,on]) => (
              <span key={t} style={{
                fontSize: 10, padding: '4px 9px', borderRadius: 12,
                background: on ? MISE.charcoal : 'transparent',
                color: on ? MISE.warm : MISE.ink55,
                border: on ? 'none' : `0.5px solid ${MISE.ink18}`,
                fontWeight: 500, whiteSpace: 'nowrap',
              }}>{t}</span>
            ))}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, padding: '4px 20px' }}>
          {items.map((it, i) => <WishTile key={i} {...it}/>)}
        </div>
      </div>
      <MiseTabBar/>
    </div>
  );
}

function TheaterTile({ film, avg, exp, rank }) {
  const navigate = useNavigate();
  const f = FILMS[film];
  return (
    <div onClick={() => navigate('/movie/' + film)} style={{ background: MISE.linen, borderRadius: 8, padding: 12, display: 'flex', gap: 10, alignItems: 'center', cursor: 'pointer' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, width: 20, flexShrink: 0 }}>
        <span style={{ fontFamily: MISE.fontSerif, fontSize: 16, color: rank <= 2 ? MISE.gold : MISE.ink35, fontWeight: 500, lineHeight: 1 }}>{rank}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={MISE.ink18} strokeWidth="2" strokeLinecap="round"><path d="M8 6h8M8 12h8M8 18h8"/></svg>
      </div>
      <Poster {...f} title={undefined} year={undefined} director={undefined} w={48} h={68} radius={3}/>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: MISE.fontSerif, fontSize: 14, color: MISE.ink, fontWeight: 500, marginBottom: 2, lineHeight: 1.2 }}>{f.title}</div>
        <div style={{ fontSize: 10, color: MISE.ink45, marginBottom: 7, letterSpacing: '0.02em' }}>{f.director} · {f.year}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <span style={{ fontSize: 9, color: MISE.ink45 }}>평균</span>
            <StarRow value={avg} size={9}/>
            <span style={{ fontSize: 10, color: MISE.ink, fontWeight: 600 }}>{avg.toFixed(1)}</span>
          </div>
          <div style={{ width: 1, height: 10, background: MISE.ink10 }}/>
          <div style={{ fontSize: 9.5, color: MISE.gold, fontWeight: 700 }}>예상 {exp.toFixed(1)}</div>
        </div>
      </div>
    </div>
  );
}

function ProfileTheater({ activeTab, onTabChange }) {
  const items = [
    { film: 'killers',   avg: 4.3, exp: 4.7 },
    { film: 'roma',      avg: 4.2, exp: 4.4 },
    { film: 'eo',        avg: 4.1, exp: 4.5 },
    { film: 'cold',      avg: 4.2, exp: 4.5 },
    { film: 'burning',   avg: 4.2, exp: 4.5 },
    { film: 'moonlight', avg: 4.3, exp: 4.5 },
  ];
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', background: MISE.warm, position: 'relative' }}>
      <ProfileHeader activeTab={activeTab} onTabChange={onTabChange}/>
      <div style={{ flex: 1, overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none', paddingBottom: 100 }}>
        <div style={{ padding: '14px 20px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontSize: 11, color: MISE.ink55, fontWeight: 500 }}>{items.length}편</span>
            <span style={{ fontSize: 10, color: MISE.ink35, marginLeft: 6 }}>· 우선순위 순</span>
          </div>
          <span style={{ fontSize: 10.5, color: MISE.gold, fontWeight: 600 }}>+ 추가</span>
        </div>
        <div style={{ padding: '4px 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {items.map((it, i) => <TheaterTile key={it.film} rank={i + 1} {...it}/>)}
        </div>
        <div style={{ padding: '16px 20px', fontSize: 10, color: MISE.ink35, textAlign: 'center' }}>
          ≡ 핸들을 드래그해서 순서를 변경할 수 있어요
        </div>
      </div>
      <MiseTabBar/>
    </div>
  );
}

function FriendCard({ name, handle, match, common, tags, avatar }) {
  return (
    <div style={{
      flexShrink: 0, width: 178, background: MISE.linen, borderRadius: 10,
      padding: 14, position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: 12, right: 12, display: 'flex', alignItems: 'center', gap: 3 }}>
        <span style={{ fontSize: 10, color: MISE.gold, fontWeight: 700, letterSpacing: '0.02em' }}>{match}%</span>
      </div>
      <div style={{ width: 46, height: 46, borderRadius: '50%', background: avatar, marginBottom: 10, border: `1px solid ${MISE.ink10}` }}/>
      <div style={{ fontSize: 12.5, color: MISE.ink, fontWeight: 600, marginBottom: 1 }}>{name}</div>
      <div style={{ fontSize: 9.5, color: MISE.ink45, marginBottom: 8 }}>@{handle}</div>
      <div style={{ fontSize: 9.5, color: MISE.ink55, marginBottom: 9 }}>공통 관람 <span style={{ color: MISE.ink, fontWeight: 700 }}>{common}편</span></div>
      <div style={{ display: 'flex', gap: 3, flexWrap: 'wrap', marginBottom: 10, minHeight: 36 }}>
        {tags.map(t => (
          <span key={t} style={{ fontSize: 9, padding: '2px 6px', background: MISE.warm, color: MISE.ink70, borderRadius: 8 }}>#{t}</span>
        ))}
      </div>
      <div style={{ padding: '6px 0', background: MISE.charcoal, color: MISE.warm, fontSize: 10, fontWeight: 600, textAlign: 'center', borderRadius: 5, letterSpacing: '0.04em' }}>
        팔로우
      </div>
    </div>
  );
}

function ProfileTaste({ activeTab, onTabChange }) {
  const similar = [
    { name: '박재현', handle: 'jaehyun.film', match: 94, common: 72, tags: ['아트하우스','일본영화','롱테이크'], avatar: '#2A3830' },
    { name: '윤서영', handle: 'sooy_',        match: 89, common: 58, tags: ['여성주의','시적'], avatar: '#3A2830' },
    { name: '이도현', handle: 'dohyun.film',  match: 86, common: 64, tags: ['체호프','유럽영화'], avatar: '#283A2A' },
  ];
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', background: MISE.warm, position: 'relative' }}>
      <ProfileHeader activeTab={activeTab} onTabChange={onTabChange}/>
      <div style={{ flex: 1, overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none', paddingBottom: 100 }}>

        <div style={{ margin: '16px 20px 18px', background: MISE.charcoal, borderRadius: 8, padding: 16, color: MISE.warm }}>
          <div style={{ fontSize: 9, letterSpacing: '0.18em', color: MISE.gold, textTransform: 'uppercase', fontWeight: 600, marginBottom: 6 }}>당신의 취향은</div>
          <div style={{ fontFamily: MISE.fontSerif, fontSize: 22, fontWeight: 500, lineHeight: 1.2, marginBottom: 10 }}>
            침묵을 견디는 관객
          </div>
          <div style={{ fontSize: 11, color: 'rgba(250,250,248,0.65)', lineHeight: 1.6, marginBottom: 14 }}>
            평균 러닝타임 <span style={{ color: MISE.gold, fontWeight: 600 }}>142분</span> · 슬로우 시네마 비중 상위 <span style={{ color: MISE.gold, fontWeight: 600 }}>3%</span>
          </div>
          <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
            {['아트하우스 68%','유럽영화 42%','여성감독 31%','롱테이크 28%','일본영화 22%'].map(t => (
              <span key={t} style={{ fontSize: 9.5, padding: '4px 8px', background: 'rgba(250,250,248,0.08)', border: `0.5px solid rgba(250,250,248,0.15)`, borderRadius: 12, color: 'rgba(250,250,248,0.9)', fontWeight: 500 }}>{t}</span>
            ))}
          </div>
        </div>

        <div style={{ margin: '0 20px 20px' }}>
          <div style={{ fontSize: 11, color: MISE.ink55, fontWeight: 500, marginBottom: 10 }}>장르 분포</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            {[['드라마', 82],['아트하우스', 68],['다큐멘터리', 34],['스릴러', 28],['코미디', 12]].map(([n, v]) => (
              <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 10.5, color: MISE.ink70, width: 70, flexShrink: 0 }}>{n}</span>
                <div style={{ flex: 1, height: 3, background: MISE.ink10, borderRadius: 2, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${v}%`, background: MISE.gold, borderRadius: 2 }}/>
                </div>
                <span style={{ fontSize: 10, color: MISE.ink55, fontWeight: 600, width: 28, textAlign: 'right' }}>{v}%</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 10 }}>
          <div style={{ padding: '0 20px', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: MISE.ink }}>비슷한 취향의 시네필</div>
              <div style={{ fontSize: 10, color: MISE.ink45, marginTop: 2 }}>매치율 85% 이상 · 12명</div>
            </div>
            <span style={{ fontSize: 10.5, color: MISE.gold, fontWeight: 600 }}>전체 보기</span>
          </div>
          <div style={{ display: 'flex', gap: 12, padding: '0 20px 4px', overflow: 'hidden' }}>
            {similar.map((s, i) => <FriendCard key={i} {...s}/>)}
            <div style={{ flexShrink: 0, width: 40 }}/>
          </div>
        </div>
      </div>
      <MiseTabBar/>
    </div>
  );
}

export default function ScreenProfile() {
  const [tab, setTab] = useState('watched');
  return (
    <>
      {tab === 'watched'  && <ProfileWatched  activeTab={tab} onTabChange={setTab} />}
      {tab === 'curating' && <ProfileCurating activeTab={tab} onTabChange={setTab} />}
      {tab === 'wishlist' && <ProfileWishlist activeTab={tab} onTabChange={setTab} />}
      {tab === 'theater'  && <ProfileTheater  activeTab={tab} onTabChange={setTab} />}
      {tab === 'taste'    && <ProfileTaste    activeTab={tab} onTabChange={setTab} />}
    </>
  );
}
