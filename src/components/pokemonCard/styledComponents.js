import styled from 'styled-components';

export const Main = styled.div`
 background-color: ${(props) => (props.backgroundStyle)};
  width: 150px;
  height: auto;
  padding: 20px;
  box-shadow: 3px 14px 26px 2px rgb(0 0 0 / 48%);
  cursor: pointer;
  margin-bottom: 35px;
  border-radius: 5px;
  border: 1px solid black;
  &:hover {
  box-shadow: 3px 14px 26px 2px rgb(0 0 0 / 80%);
  }
`;

export const ImageStyle = styled.img`
width: 100px;
height: 100px;
`;
