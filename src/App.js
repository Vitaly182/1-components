import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';
import { Component } from 'react';
import { initializeApp } from './redux/app-reducer';
import { connect, Provider } from 'react-redux';
import Preloader from './components/Common/Preloader/Preloader';
import store from './redux/redux-store';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends Component {
  catchALLUnhandledErrors = (reason, promise) => {
    // alert('error');
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.catchALLUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchALLUnhandledErrors);
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <NavbarContainer />

        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/" element = {<Navigate to={'/profile'} />} />
            <Route path="/profile/*" element={<React.Suspense fallback={<Preloader />}><ProfileContainer/></React.Suspense>} />
            <Route path="/dialogs/*" element={<React.Suspense fallback={<Preloader />}><DialogsContainer/></React.Suspense>} />
            <Route path="/news/*" element={<News />} />
            <Route path="/music/*" element={<Music />} />
            <Route path="/users/*" element={<UsersContainer />} />
            <Route path="/settings/*" element={<Settings />} />
            <Route path="/login/*" element={<Login />} />
            <Route path="*" element={<div>404 NOT FOUND</div>} />
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


let AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

const MainApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default MainApp
