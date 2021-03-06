import React from 'react';
import styled, { css } from 'styled-components';

import NightCitizen from '@assets/night-citizen.png';
import NightMafia from '@assets/night-mafia.png';
import AfternoonNoKilled from '@assets/afternoon-no-killed.png';
import AfternoonKilled from '@assets/afternoon-killed.png';
import AfternoonNothing from '@assets/afternoon-nothing.png';
import Evening from '@assets/evening.png';
import GameResult from '@assets/game-result.png';
import Pending from '@assets/pending.png';
import Proceeding from '@assets/proceeding.png';
import Complete from '@assets/complete.png';
import { Heading } from '@atoms/Heading/Heading';
import { Img, ImgMedia } from '@atoms/Img/Img';
import { List } from '@atoms/List/List';
import { Paragraph } from '@atoms/Paragraph/Paragraph';
import { UnorderedList } from '@atoms/UnorderedList/UnorderedList';
import { Header } from '@organisms/Header/Header';
import { Centralization } from '@templates/Centralization/Centralization';
import { Span } from '@atoms/Span/Span';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 2rem;
  margin-bottom: 5%;

  @media ${({ theme }) => theme.device.laptop} {
    width: 70%;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 90%;
  }
`;

const FlexContainer = styled.div<{ flexDirection?: string }>`
  display: flex;
  margin-bottom: 1rem;
  width: 100%;

  ${({ flexDirection }) => {
    switch (flexDirection) {
      case 'row':
        return css`
          flex-direction: row;
        `;
      case 'column':
        return css`
          flex-direction: column;
          align-items: center;
        `;
      default:
        break;
    }
  }}
`;

const FlexMediaContainer = styled(FlexContainer)`
  @media ${({ theme }) => theme.device.mobile} {
    flex-wrap: wrap;
  }
`;

export const ExplanationPresenter: React.FC = () => {
  return (
    <Centralization
      header={<Header isLoggedIn={false} colorProp="black" />}
      center={
        <Container>
          <Heading marginProp={['1rem', '0', '1.5rem', '0']}>?????? ??????</Heading>
          <Paragraph whitespaceprop="pre-line" wordbreakprop="break-all">
            {`4, 6, 8?????? ??????????????? ?????? ?????? ????????? ??????. ??????????????? ?????? ?????? ???, ????????? ????????? ???????????? ????????? ?????? ?????? ?????? ?????? ????????? ????????? ??? ????????????.(Ex. ??????, ??????...)
            ????????? ???????????? ?????? ??? ?????? ????????? ????????? ?????? ?????? ???????????? ????????? ????????? ???????????? ????????? ????????? ???????????? ?????? ?????????.
            ????????? ?????? ??? ????????? ???????????? ???????????? ????????? ?????? ????????? ????????? ????????????.`}
          </Paragraph>
          <Heading marginProp={['1rem', '0', '1.5rem', '0']}>{`???(15???)`}</Heading>
          <FlexContainer>
            <FlexContainer flexDirection="column">
              <Span
                levelProp={4}
                marginProp={['0', '0', '1rem', '0']}
                colorProp="red"
                fontweightprop="600"
              >
                ????????? ???
              </Span>
              <Img src={NightMafia} width="100%" />
            </FlexContainer>
            <FlexContainer flexDirection="column">
              <Span
                levelProp={4}
                marginProp={['0', '0', '1rem', '0']}
                colorProp="white"
                fontweightprop="600"
              >
                ?????? ???
              </Span>
              <Img src={NightCitizen} width="100%" />
            </FlexContainer>
          </FlexContainer>
          <UnorderedList flexDirection="column">
            <List
              lineheightprop="2"
              colorprop="black"
              liststyleprop="circle"
            >{`????????? ????????? ??? ????????? ????????? ????????? ??? ??????. ??????????????? ?????? ?????? ?????? ?????? ????????? ???????????? ????????? ??? ??????.`}</List>
            <List
              lineheightprop="2"
              colorprop="black"
              liststyleprop="circle"
            >{`??????????????? ????????? ?????? ?????? ?????? ??? ?????? ?????????. ????????? ????????? ?????? ???????????? ???????????? ?????? ????????? ?????? ????????? 
            ?????? ????????? ????????? ???????????? ?????? ???????????????.`}</List>
          </UnorderedList>
          <Heading marginProp={['1rem', '0', '1.5rem', '0']}>{`???(30???)`}</Heading>
          <FlexMediaContainer>
            <FlexContainer flexDirection="column">
              <Span
                levelProp={4}
                marginProp={['0', '0', '1rem', '0']}
                colorProp="white"
                fontweightprop="600"
              >
                ???????????? ?????????
              </Span>
              <ImgMedia src={AfternoonNothing} width="100%" />
            </FlexContainer>
            <FlexContainer flexDirection="column">
              <Span
                levelProp={4}
                marginProp={['0', '0', '1rem', '0']}
                colorProp="white"
                fontweightprop="600"
              >
                ???????????? ?????? ??????
              </Span>
              <ImgMedia src={AfternoonNoKilled} width="100%" />
            </FlexContainer>
            <FlexContainer flexDirection="column">
              <Span
                levelProp={4}
                marginProp={['0', '0', '1rem', '0']}
                colorProp="white"
                fontweightprop="600"
              >
                ????????? ?????? ?????? ??????
              </Span>
              <ImgMedia src={AfternoonKilled} width="100%" />
            </FlexContainer>
          </FlexMediaContainer>
          <UnorderedList flexDirection="column">
            <List
              lineheightprop="2"
              colorprop="black"
              liststyleprop="circle"
            >{`?????? ?????? ???????????? ????????? ??????????????? ????????????, '~??? ????????????????????????'?????? ????????? ??????. 
            ???, ???????????? ?????? ????????? ???????????? ???????????? ?????? ????????? ????????????.`}</List>
            <List
              lineheightprop="2"
              colorprop="black"
              liststyleprop="circle"
            >{`???????????? ?????? ?????? ????????? ?????? ??????????????? ????????? ??? ??????. 
            ???????????? ????????? ?????? ?????? ??????????????? ???????????? ?????? ???????????? ????????? ??????, 
            ???????????? ????????? ???????????? ???????????? ????????? ???????????? ??????????????? ??????.`}</List>
          </UnorderedList>
          <Heading marginProp={['1rem', '0', '1.5rem', '0']}>{`??????(15???)`}</Heading>
          <FlexMediaContainer>
            <FlexContainer flexDirection="column">
              <Span
                levelProp={4}
                marginProp={['0', '0', '1rem', '0']}
                colorProp="white"
                fontweightprop="600"
              >
                ??????
              </Span>
              <ImgMedia src={Evening} width="auto" />
            </FlexContainer>
          </FlexMediaContainer>
          <UnorderedList flexDirection="column">
            <List
              lineheightprop="2"
              colorprop="black"
              liststyleprop="circle"
            >{`?????? ????????? ????????? ?????????????????? ????????????.`}</List>
            <List
              lineheightprop="2"
              colorprop="black"
              liststyleprop="circle"
            >{`??????????????? ???????????? ??? ????????? ???????????? ?????????, ??? ????????? ??? ????????? ????????? ??? ??????. 
            ?????? ?????? ??????????????? ????????? ??? ?????????, ?????? '??????'??? ??????.`}</List>
            <List
              lineheightprop="2"
              colorprop="black"
              liststyleprop="circle"
            >{`?????? ????????? ?????? ????????? ???????????? ????????? ??? ??????. 
            ?????? ????????? ??????????????? ??? ??????????????? ????????? ???????????? ??????????????? ????????? ????????????.`}</List>
            <List
              lineheightprop="2"
              colorprop="black"
              liststyleprop="circle"
            >{`????????? ???????????? ???????????? ?????? ????????? ???????????? ???????????? ?????? ????????? ????????????.`}</List>
            <List
              lineheightprop="2"
              colorprop="black"
              liststyleprop="circle"
            >{`????????? ?????? ?????? ?????? ??????????????? ?????? ?????? ???????????? ????????? ???????????? ???????????? ??????????????? ?????? 
            ????????? ?????? ?????? ?????? ?????? ?????? ?????? ???????????? ???????????? ??????.`}</List>
          </UnorderedList>
          <Heading marginProp={['1rem', '0', '1.5rem', '0']}>?????? ??????</Heading>
          <FlexMediaContainer>
            <FlexContainer flexDirection="column">
              <Span
                levelProp={4}
                marginProp={['0', '0', '1rem', '0']}
                colorProp="white"
                fontweightprop="600"
              >
                ?????? ??????
              </Span>
              <ImgMedia src={GameResult} width="100%" />
            </FlexContainer>
          </FlexMediaContainer>
          <UnorderedList flexDirection="column">
            <List
              lineheightprop="2"
              colorprop="black"
              liststyleprop="circle"
            >{`"?????? ??????"??? ????????? ?????? ?????? ????????? ??? ????????? ?????? ??? ????????? ??????????????? ??? ????????? ?????? ????????????, 
            ?????? ?????? ?????? ?????? ???????????? ?????? ???????????? ????????????, 
            ?????? ??? ?????? ?????? ????????? ?????? ????????? ???????????? ?????? ?????? ?????? ????????? ????????? ????????????.`}</List>
            <List
              lineheightprop="2"
              colorprop="black"
              liststyleprop="circle"
            >{`?????? ????????? ?????? 2???, ?????? ????????? ???, ?????? ????????? ????????? ??????.`}</List>
          </UnorderedList>
          <Heading marginProp={['1rem', '0', '1.5rem', '0']}>?????? ??????</Heading>
          <FlexMediaContainer>
            <FlexContainer flexDirection="column">
              <Span
                levelProp={4}
                marginProp={['0', '0', '1rem', '0']}
                colorProp="white"
                fontweightprop="600"
              >
                ?????????
              </Span>
              <ImgMedia src={Pending} width="100%" />
            </FlexContainer>
            <FlexContainer flexDirection="column">
              <Span
                levelProp={4}
                marginProp={['0', '0', '1rem', '0']}
                colorProp="red"
                fontweightprop="600"
              >
                ?????????
              </Span>
              <ImgMedia src={Proceeding} width="100%" />
            </FlexContainer>
            <FlexContainer flexDirection="column">
              <Span
                levelProp={4}
                marginProp={['0', '0', '1rem', '0']}
                colorProp="white"
                fontweightprop="600"
              >
                ??????
              </Span>
              <ImgMedia src={Complete} width="100%" />
            </FlexContainer>
          </FlexMediaContainer>
          <UnorderedList flexDirection="column">
            <List
              lineheightprop="2"
              colorprop="black"
              liststyleprop="circle"
            >{`??? ????????? ????????? ????????? ?????? ????????? ???????????? ????????? ?????? ?????? ????????? ?????? ????????? ????????? ?????????.`}</List>
            <List
              lineheightprop="2"
              colorprop="black"
              liststyleprop="circle"
            >{`???????????? ????????? ????????? 4???????????? 6, 8????????? ??????????????? ???????????? ?????? ????????? ???????????????.`}</List>
          </UnorderedList>
          <Paragraph whitespaceprop="pre-line" wordbreakprop="break-all">
            {`Tsufia ????????? ?????? ?????? ????????? ???????????????. ?????? ?????? ???????????? ?????? ???????????? ????????? ????????? ????????? ????????? ????????????.`}
          </Paragraph>
        </Container>
      }
      centerHeight="auto"
      isBackground={false}
    />
  );
};
