// import Menu from './Components/Menu/Menu'
// import Footer from './Components/Footer/Footer.js'
// import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';

import { lazy, Suspense } from 'react';

const Menu = lazy(() => import('./Components/Menu/Menu'));
const Routes = lazy(() => import('./routes'));
const Footer = lazy(() => import('./Components/Footer/Footer.js'));

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Suspense fallback={<h5>Carregando o Menu 😄</h5>}>
          <header><Menu /></header>
        </Suspense>

        <main>
          <Container fluid>
            <Suspense fallback={<h3>Aguarde enquanto carregamos a página...📄😉</h3>}>
              <header><Routes /></header>
            </Suspense>
          </Container>
        </main>

        <Suspense fallback={<p>Em breve o Footer estará disponível 👣</p>}>
          <Footer />
        </Suspense>
      </div>

    </BrowserRouter>
  );
}

export default App;