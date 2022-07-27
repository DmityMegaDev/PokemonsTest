import styled from 'styled-components';

export const Main = styled.div`
    text-align: center;
`;

export const ContentWrapper = styled.div`
    display: flex;
    background-color: #F5F5F5;
      @media (max-width: 600px) {
        flex-direction: column-reverse;
      }
`;

export const LeftSideWrapper = styled.div`
    width: 60%;
    padding: 20px;
          @media (max-width: 600px) {
          width: 100%;
          padding: 0 0 20px 0;
      }
`;

export const Header = styled.div`
    position: sticky;
    top: 0;
    background-color: darkgray;
    height: fit-content;
    padding: 20px 0;
    box-shadow: 3px 14px 26px 2px rgb(0 0 0 / 48%);
    z-index: 20;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CardsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-content: space-between;
    flex-wrap: wrap;
    padding: 10px;
`;

export const SelectWrapper = styled.div`
    width: 50%;
    padding: 10px 10px;
    @media (max-width: 600px) {
      width: 90%;
    }
`;

export const MoreButton = styled.button`
    width: 150px;
    height: 50px;
    background-color: brown;
    color: wheat;
    box-shadow: 3px 14px 26px 2px rgb(139, 0, 0, 40%);
    border-radius: 7px;
    font-weight: bold; 
    &:hover {
    background-color: darkred;
    cursor: pointer;
    box-shadow: 0 1px 10px 8px rgb(139 0 0 / 60%);
    }
`;
