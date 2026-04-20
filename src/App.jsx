import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MisePhone from './components/MisePhone.jsx';
import ScreenHome from './screens/ScreenHome.jsx';
import ScreenCommunity from './screens/ScreenCommunity.jsx';
import ScreenMovieDetail from './screens/ScreenMovieDetail.jsx';
import ScreenPotList from './screens/ScreenPotList.jsx';
import ScreenPotDetail from './screens/ScreenPotDetail.jsx';
import ScreenProfile from './screens/ScreenProfile.jsx';
import ScreenSettings from './screens/ScreenSettings.jsx';

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingTop: 40,
      paddingBottom: 40,
      background: '#EDE9E0',
    }}>
      <MisePhone>
        <BrowserRouter>
          <Routes>
            <Route path="/"           element={<ScreenHome />} />
            <Route path="/community"  element={<ScreenCommunity />} />
            <Route path="/movie/:id"  element={<ScreenMovieDetail />} />
            <Route path="/pot"        element={<ScreenPotList />} />
            <Route path="/pot/:id"    element={<ScreenPotDetail />} />
            <Route path="/profile"    element={<ScreenProfile />} />
            <Route path="/settings"   element={<ScreenSettings />} />
            <Route path="*"           element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </MisePhone>
    </div>
  );
}
