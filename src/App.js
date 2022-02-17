import { Routes, Route } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';
import { Component } from 'react';
import { initializeApp } from './redux/app-reducer';
import { connect } from 'react-redux';
import Preloader from './components/Common/Preloader/Preloader';



class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader/>
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <NavbarContainer />

        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/profile/*" element={<ProfileContainer />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/news/*" element={<News />} />
            <Route path="/music/*" element={<Music />} />
            <Route path="/users/*" element={<UsersContainer />} />
            <Route path="/settings/*" element={<Settings />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

const mapDispatchToProps = {
  initializeApp
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
