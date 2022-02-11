import {Routes, Route} from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings';



function App() { 
  return (
      <div className='app-wrapper'>
      <HeaderContainer/>
      <NavbarContainer />

      <div className='app-wrapper-content'>
        <Routes>
          <Route path="/profile/*" element={<ProfileContainer />} />
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/news/*" element={<News/>} />
          <Route path="/music/*" element={<Music/>} />
          <Route path="/users/*" element={<UsersContainer/>} />
          <Route path="/settings/*" element={<Settings/>} />
        </Routes>
      </div>
    </div>    
  );
}




export default App;
