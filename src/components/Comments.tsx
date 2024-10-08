import styled from 'styled-components';
import { colors } from '../styles/variables';
import reviewMeg from '../assets/reviewMeg.jpg';
import reviewPetra from '../assets/reviewPetra.jpg';
import reviewWhitts from '../assets/reviewWhitts.jpg';

const Card = styled.div`
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid ${colors.lightGrey};
  border-radius: 0.5rem;
`;

const User = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`;

const Avatar = styled.img`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  margin-right: 1rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
`;

const Username = styled.span`
  font-weight: 500;
`;

const Source = styled.a`
  color: ${colors.darkGrey};
`;

const Comment = styled.div`
  line-height: 1.5;
`;

const Comments = () => (
  <>
    <Card>
      <User>
        <Avatar
          src={reviewMeg}
          alt="Meg"
        />
        <Info>
          <Username>Meg</Username>
          <Source
            href="https://www.facebook.com/meg.humphrey.31/posts/pfbid0mZ6pTAZFxW4oyzi4z5u9dtgz73arFvdWopuBuo7qESffmpEvoyj7NgyVt8p9sSSAl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </Source>
        </Info>
      </User>
      <Comment>
        Absolutely brilliant! Annie really knows her stuff. Can’t wait to book in for everything!
      </Comment>
    </Card>
    <Card>
      <User>
        <Avatar
          src={reviewWhitts}
          alt="Whitts"
        />
        <Info>
          <Username>Whitts</Username>
          <Source
            href="https://www.facebook.com/whitts.oliver/posts/pfbid03CRJG9o2HWHVnVyYudUkHDEZiENsMFu3w4Qg7ntm4j7PLRqRvTgVu94giV4Bdbdpl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </Source>
        </Info>
      </User>
      <Comment>
        My eyebrow and lash queen!!
      </Comment>
    </Card>
    <Card>
      <User>
        <Avatar
          src={reviewPetra}
          alt="Petra"
        />
        <Info>
          <Username>Petra</Username>
          <Source
            href="https://www.facebook.com/hejpetra101/posts/pfbid02CwuexLusx8YN4BEepbujuTf7rAyNG764EXmfGbQe1GcGo9tRT2RqM4uzsQrUC4g9l"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </Source>
        </Info>
      </User>
      <Comment>
        Obsessed with the lashes Annie did for me. Beautiful lash extensions and I keep getting asked who did them. Thank you!
      </Comment>
    </Card>
  </>
);

export default Comments;
