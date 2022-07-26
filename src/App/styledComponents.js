import styled from 'styled-components';

export const Main = styled.div`
    text-align: center;
`;

export const ContentWrapper = styled.div`
    display: flex;
    background-color: #F5F5F5;
`;

export const CardsWrapper = styled.div`
    
    display: flex;
    justify-content: space-around;
    align-content: space-between;
    flex-wrap: wrap;
    padding: 10px;
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
