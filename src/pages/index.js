import '@fontsource/work-sans/400.css';
import '@fontsource/work-sans/500.css';
import '@fontsource/work-sans/700.css';
import React from 'react';
import styled from 'styled-components';
import Hero from './../components/Hero';
import About from './../components/About';
import Services from './../components/Services';
import './../styles/index.css';

const Content = styled.div`
  padding: 0 1.5rem;
`;

const IndexPage = () => (
  <main>
    <Hero />
    <Content>
      <About />
      <Services />
    </Content>
  </main>
);

export default IndexPage;
