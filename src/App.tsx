import styled from 'styled-components';
import Hero from './components/Hero2';
import About from './components/About';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import './styles/index.css';

const Content = styled.main`
  padding: 0 1.5rem;
  max-width: 720px;
  margin: 0 auto;
`;

const App = () => (
  <Content>
    <Hero />
    <About />
    <Services />
    <Reviews />
    <Contact />
  </Content>
);

export default App;
