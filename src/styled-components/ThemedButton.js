import styled from 'styled-components';

const ThemedButton = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  width:${props => props.width ? props.width : '100px'}
  color: ${props => (props.theme.primaryColor)};
  border: 1px solid ${props => props.theme.secondaryColor};
  margin: 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: ${props =>
        props.primary ? 'violet' : 'palevioletred'};
    color: white;
  }
`;

export default ThemedButton;