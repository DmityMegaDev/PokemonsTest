import styled from 'styled-components';

export const Main = styled.div`
width: 40%;
padding: 20px;
      @media (max-width: 600px) {
    width: 100%;
    padding: 0 0 20px 0;
  }
`;

export const Stats = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const Image = styled.img`
    width: 350px;
    height: 250px;
    margin-top: -140px;
      @media (max-width: 923px) {
    width: 100%;
  }
`;

export const EmptyMessage = styled.div`
font-size: 20px;
color: darkgray;
margin: 50px 0;
`;

export const MovesContainer = styled.div`
    height: 200px;
    overflow-y: scroll;
    border: 3px solid #ccc;
    border-radius: 7px;
    width: 70%;
    background-color: #F5F5F5;
    padding: 20px 0;
`;

export const DescriptionWrapper = styled.div`
box-shadow: 3px 14px 26px 2px rgb(139, 0, 0, 40%);
    border-radius: 7px;
    padding: 0 10px 10px 10px;
    background-color: antiquewhite;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 180px;
    margin-left: 10px;
    margin-right: 10px;
`;