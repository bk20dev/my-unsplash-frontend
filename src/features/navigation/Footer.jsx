import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: sticky;
  top: 100%;
  padding: 1.5rem;
  font-size: 0.875rem;
  text-align: center;
  color: #bdbdbd;
  margin-top: 1.75rem;
`;

const StyledLink = styled.a`
  color: inherit;
  font-weight: 700;
  text-decoration: underline;
`;

const Footer = () => (
  <StyledFooter>
    <p>
      created by&nbsp;
      <StyledLink
        className="font-bold underline"
        href="https://devchallenges.io/portfolio/bk20dev"
        target="_blank"
        rel="noreferrer"
      >
        bk20dev
      </StyledLink>
      &nbsp;-&nbsp;devChallenges.io
    </p>
  </StyledFooter>
);

export default Footer;
