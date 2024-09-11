import styled from 'styled-components';
import config from '../config';
import { colors } from '../styles/variables';

const Container = styled.div<{ width?: string; }>`
  display: inline-block;
  width: ${props => props.width || undefined};
  text-align: center;
  background-color: ${colors.white};
  border-radius: 0.5rem;
  border: 1px solid ${colors.black};
`;

const Anchor = styled.a`
  display: block;
  padding: 1rem 0.75rem;
  text-decoration: none;
  color: ${colors.black};
  letter-spacing: 1px;
  font-weight: 500;
`;

type LinkProps = {
  text: string,
  url: string,
  width?: string,
}

const Link = ({ text, url, width }: LinkProps) => (
  <Container width={width}>
    <Anchor
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </Anchor>
  </Container>
);

export const InstagramLink = ({ text }: Pick<LinkProps, 'text'>) =>
  <Link text={text} url={config.IG_URL} />

export const FacebookLink = ({ text }: Pick<LinkProps, 'text'>) =>
  <Link text={text} url={config.FB_HOME_URL} />

export const BookingLink = ({ text, width }: Pick<LinkProps, 'text' | 'width'>) =>
  <Link text={text} url={config.BOOKING_URL} width={width} />
