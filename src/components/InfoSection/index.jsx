import React from 'react';
import { Button } from '../ButtonElements';

// import img from '../../images/svg-6.svg';

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Column1,
  Column2,
  Img,
  ImgWrap,
  BtnWrap,
} from './InfoSectionElements';

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  headline,
  lightText,
  description,
  darkText,
  buttonLabel,
  alt,
  img,
  primary,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={primary ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
