import styled from 'styled-components';
import avatar from '../assets/avatar.jpg';
import { InstagramLink, FacebookLink } from './Link';

const Card = styled.div`
  display: flex;
`;

const Avatar = styled.img`
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  margin-right: 1rem;
`;

// Refactor button styling
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Contact = () => (
  <section>
    <h2 id="Contact">Contact me</h2>
    <Card>
      <Avatar
        src={avatar}
        alt="Annie"
      />
      <Info>
        <InstagramLink text="Instagram" />
        <FacebookLink text="Facebook" />
      </Info>
    </Card>
  </section>
);

export default Contact;

