import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { InstagramLink, FacebookLink } from './Link';

const Card = styled.div`
  display: flex;
`;

const Avatar = styled.div`
  width: 5rem;
  margin-right: 1rem;
  overflow: hidden;
  flex-basis: fit-content;
  border-radius: 50%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
`;

const Contact = () => (
  <section>
    <h2 id="Contact">Contact me</h2>
    <Card>
      <Avatar>
        <StaticImage
          src="./../images/avatar.jpg"
          alt="Annie"
          placeholder="blurred"
        />
      </Avatar>
      <Info>
        <InstagramLink text="Instagram" width="100%" />
        <FacebookLink text="Facebook" width="100%" />
      </Info>
    </Card>
  </section>
);

export default Contact;

