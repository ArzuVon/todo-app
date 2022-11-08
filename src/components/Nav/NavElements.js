import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10vh;
`;

export const ButtonContainer = styled.div`
    width: 50%;
    margin-right: 390px;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 3.3rem;
    text-align: center;
`;

export const LightButton = styled.button`

    background-color: black;
    color: white;
    border: none;
    border-radius: 15px;
    margin-right: 30px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;

    &:hover {
        transform: scale(1.1);
    }
`;

export const DarkButton = styled.button`
    background-color: black;
    color: black;
    border: none;
    border-radius: 15px;
    margin-right: 30px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;

    &:hover {
        transform: scale(1.1);
    }
`;