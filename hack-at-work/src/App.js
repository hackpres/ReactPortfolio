import Navbar from './components/navbar/Navbar';
import Header from './components/Header';
import { createGlobalStyle } from 'styled-components';

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
    </>
  );
}

export default App;
