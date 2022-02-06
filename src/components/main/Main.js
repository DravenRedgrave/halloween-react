import React from 'react';
import Header from '../header/Header';
import {MainBox,MainContainer,TextBox,Text,Title,Button} from './styles/MainStyles';
import Slide from '../main/slider/Slide'
function Main() {
  return(
    <MainBox>
        <Header/>
        <MainContainer>
            <TextBox>
                <Text>october 31, Melbourne</Text>
                <Title>halloween party</Title>
                <Button>Sign up to party</Button>
            </TextBox>
            <Slide/>
        </MainContainer>
    </MainBox>
  );
}

export default Main;
