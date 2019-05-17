import styled from 'styled-components'

export const StyledButton = styled.button`
    font-weight: 600;
    color: rgb(210, 176, 111);
    text-shadow: rgb(64, 70, 83);
    background: rgb(64,70,83);
    background: linear-gradient(0deg, rgba(64,70,83,1) 0%, rgba(36,51,107,1) 90%, rgba(68,94,162,1) 100%);
    border: solid 1px rgb(36, 51, 107);
    border-radius: 5px;
    transition: all 0.4s ease 0s;
    &:hover {
        background: rgb(210,176,111);
        background: linear-gradient(0deg, rgba(210,176,111,1) 10%, rgba(210,176,111,1) 90%, rgba(210,176,111,1) 100%);
        color: rgb(243, 244, 246);
        border: 1px solid rgb(210, 176, 111)
    }
`;

export const StyledLoginButton = styled(StyledButton)`
    font-size: 20px;
    background: linear-gradient(left, rgba(203,96,179,1) 0%,rgba(173,18,131,1) 50%,rgba(222,71,172,1) 100%);
`;

export const StyledRegisterButton = styled(StyledButton)`
    font-style: italic;
    font-size: 18px;
`;

export const StyledNavButton = styled.button`
    margin-top: 2px;
    margin-bottom: 2px;
    padding: 5px;
    width: 100%;
    font-size: 20px;
    font-style: bold;
    color: rgb(243, 244, 246);
    transition: all 0.4s ease 0s;
    background-color: #24336B;
    border-left: none;
    &:hover {
        background-color: #D2B06F;
        color: #404653;
    }
`;