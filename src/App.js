import React, {useState} from 'react';
import NavBar from './components/NavBar/index'
import GlobalStyles from './styles/GlobalStyles'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import {ThemeProvider} from 'styled-components'
import Routes from './routes'
import {Router} from 'react-router-dom'
import history from './services/history'
import SideBar from './components/SideBar';

function App() {
  const [theme, setTheme]=useState(dark)

  const togleTheme = ()=>{
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
          <Router history={history}>
          <NavBar togleTheme={togleTheme}/>
          <SideBar />
            <Routes/>
          </Router>
    </ThemeProvider>
  );
}

export default App;
