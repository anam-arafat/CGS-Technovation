import React from 'react';
import styled from 'styled-components';

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topline,
  lightText,
  headline,
  darkText,
  description1,
  description2,
  description3,
  description4,
  description5,
  description6,
  description7,
  description8,
  description9,
  description10,
  description11,
  description12,
  description13,
  description14,
  description15,
  img,
  alt }) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading lightText={lightText}>{headline}</Heading>
                <Topline>{topline}</Topline>
                <Subtitle darkText={darkText}>{description1}</Subtitle>
                <Subtitle darkText={darkText}>{description2}</Subtitle>
                <Subtitle darkText={darkText}>{description3}</Subtitle>
                <Subtitle darkText={darkText}>{description4}</Subtitle>
                <Subtitle darkText={darkText}>{description5}</Subtitle>
                <Subtitle darkText={darkText}>{description6}</Subtitle>
                <Subtitle darkText={darkText}>{description7}</Subtitle>
                <Subtitle darkText={darkText}>{description8}</Subtitle>
                <Subtitle darkText={darkText}>{description9}</Subtitle>
                <Subtitle darkText={darkText}>{description10}</Subtitle>
                <Subtitle darkText={darkText}>{description11}</Subtitle>
                <Subtitle darkText={darkText}>{description12}</Subtitle>
                <Subtitle darkText={darkText}>{description13}</Subtitle>
                <Subtitle darkText={darkText}>{description14}</Subtitle>
                <Subtitle darkText={darkText}>{description15}</Subtitle>
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
  )
}

export const InfoContainer = styled.div`
    color: white;
    background: ${({ lightBg }) => (lightBg ? '#03001C' : '#301E67')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: auto;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 24px -24px;
    padding-left: 30px;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto,1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const Topline = styled.p`
    padding-top: 20px;
    color: #01BF71;
    font-size: 20px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    padding-top: 50px;
    margin-bottom: 8px;
    font-size: 40px;
    line-height: 1.1;
    
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#BFACE2' : '#85CDFD')};
    
    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    max-width: 500px;
    margin-bottom: 15px;
    font-size: 16px;
    line-height: 22px;
    color: ${({ darkText }) => (darkText ? '#FFFFFF' : '#FFFFFF')} ;
`;

export const ImgWrap = styled.div`
    max-width: 50%;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 0 100px;
    padding-top: 0px;
    padding-right: 10px;
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;


export default InfoSection
