import styled from 'styled-components'

export const StyledButton = styled.button`
    font-weight: 600;
    color: rgb(210, 176, 111);
    text-shadow: rgb(64, 70, 83);
    background-color: rgb(36, 51, 107);
    border: solid 1px rgb(36, 51, 107);
    border-radius: 5px;
    transition: all 0.4s ease 0s;
    &:hover {
        background-color: rgb(210, 176, 111);
        color: rgb(243, 244, 246);
        border: 1px solid rgb(210, 176, 111)
    }
`;

export const StyledLoginButton = styled(StyledButton)`
    font-size: 20px;
`;

export const StyledRegisterButton = styled(StyledButton)`
    font-style: italic;
    font-size: 18px;
`;