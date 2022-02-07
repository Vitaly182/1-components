import {Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import StoreContext from '../src/StoreContext';


function App() {
  return (
    <div className='app-wrapper'>
      <Header/>

      <StoreContext.Consumer>
        {
          store => {
            let state = store.getState().sitebar;
            return (
              <Navbar state={state}/>
            )
          } 
        }
      </StoreContext.Consumer>
      
      <div className='app-wrapper-content'>
        <Routes>
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/news/*" element={<News/>} />
          <Route path="/music/*" element={<Music/>} />
          <Route path="/settings/*" element={<Settings/>} />
        </Routes>
      </div>
    </div>    
  );
}



export default App;
