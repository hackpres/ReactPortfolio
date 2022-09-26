import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import { createGlobalStyle } from 'styled-components';
import { Routes, Route } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #e9f7f5;
    width: 100%;
    font-family: darkmode-on, sans-serif;
    font-weight: 100;
    font-style: normal;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Header />
      <Routes>
        <Route path='/' element={<Portfolio />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/resume' element={<Resume />}/>
      </Routes>
    </>
  );
}

export default App;
