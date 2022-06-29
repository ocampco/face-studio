import '@fontsource/work-sans/400.css';
import '@fontsource/work-sans/500.css';
import '@fontsource/work-sans/700.css';
import React from 'react';
import styled from 'styled-components';
import Hero from './../components/Hero2';
import About from './../components/About';
import Services from './../components/Services';
import Reviews from './../components/Reviews';
import Contact from './../components/Contact';
import './../styles/index.css';

const Content = styled.main`
  padding: 0 1.5rem;
  max-width: 720px;
  margin: 0 auto;
`;

const IndexPage = () => (
  <Content>
    <Hero />
    <About />
    <Services />
    <Reviews />
    <Contact />
  </Content>
);

export default IndexPage;
