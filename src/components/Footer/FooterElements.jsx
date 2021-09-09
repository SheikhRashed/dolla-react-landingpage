import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #101522;
`;
export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;
export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 820px) {
    padding-top: 32px;
  }
`;
export const FooterLinksWrapper = styled.div`
  display: flex;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`;
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;
export const FooterLinkTitle = styled.h2`
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 16px;
  text-transform: capitalize;
`;
export const FooterLink = styled(LinkR)`
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 0.5rem;
  color: #fff;
  text-transform: capitalize;

  &:hover {
    color: #01b571;
    transition: all 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;
export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`;
export const SocialLogo = styled(LinkR)`
  font-size: 1.5rem;
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
  margin-bottom: 16px;
  dispaly: flex;
  align-items: center;
`;
export const Copyrights = styled.small`
  color: #fff;

  @media (max-width: 820px) {
    margin-bottom: 16px;
  }
`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;
export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
