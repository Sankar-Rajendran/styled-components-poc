import React from 'react';
import Button from "./styled-components/Button";
import { DefaultButton, FancyButton } from "./styled-components/ExtendButton";
import { StyledComponent1, StyledComponent2 } from "./styled-components/CustomComponent";
import Header from "./styled-components/Header";
import Span from "./styled-components/Span";
import ThemedButton from "./styled-components/ThemedButton";
import RefExample from "./styled-components/RefExample";
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from "./GlobalStyles";


const FlexBox = styled.div`
display:flex;
flex-direction:${props => (props.direction === "column" ? 'column' : 'row')};`


const theme = {
  primaryColor: 'darkgreen',
  secondaryColor: 'lightgreen',
  headerColor: 'darkmagenta',
  fontFamily: 'arial'
}



const body1 = () => {
  return (
    <div>
      <Header>Component1</Header>
      <p>Content of the component</p>
    </div>
  )
}


const body2 = () => {
  return (
    <div>
      <Header>Component2</Header>
      <p>Content of the component</p>
    </div>
  )
}



function App() {
  const ref = React.createRef();

  return (
    <div className="App">
      <FlexBox direction="column">
        <Button>Button..!!</Button>
        <Button width="200px" primary>Primary Button..!!</Button>
        <DefaultButton>Default Style</DefaultButton>
        <FancyButton>Fancy Button</FancyButton>
        <StyledComponent1 body={body1}></StyledComponent1>
        <StyledComponent2 body={body2}></StyledComponent2>
        <Span>I am a Span Tag..!!</Span>
        <Span as="a" href="/">I am a Span Tag..!!</Span>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <ThemedButton>Themed Button</ThemedButton>
          <h2>H2 - Global Style Applied</h2>
        </ThemeProvider>
        <RefExample/>
      </FlexBox>
    </div>
  );
}

export default App;
