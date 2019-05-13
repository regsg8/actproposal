import styled from 'styled-components'

export const StyledAuthDiv = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    border: solid 4px rgb(210, 176, 111);
    border-radius: 10px;
    padding: 20px;
    margin-top: 5px;
    margin-bottom: 20px;
    grid-gap: 5px;
    background-color: rgb(52, 87, 160);
    color: rgb(243, 244, 246);
    margin-left: auto;
    margin-right: auto;
    font-size: 20px;
`;

export const StyledLoginDiv = styled(StyledAuthDiv)`
    width: 500px;
    height: 240px;
`;

export const StyledTitle = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
    text-align: center;
    font-weight: 800;
    margin-top: 10px;
    text-shadow: rgb(210, 176, 111) 1px 1px;
    vertical-align: center;
`;

export const StyledRegisterForm = styled.form`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    border: solid 4px rgb(210, 176, 111);
    border-radius: 10px;
    padding: 20px;
    margin-top: 5px;
    margin-bottom: 20px;
    grid-gap: 5px;
    background-color: rgb(52, 87, 160);
    color: rgb(243, 244, 246);
    margin-left: auto;
    margin-right: auto;
    font-size: 20px;
    width: 500px;
    height: 240px;
`;

export const StyledLoginForm = styled(StyledRegisterForm)`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    border: solid 4px rgb(210, 176, 111);
    border-radius: 10px;
    padding: 20px;
    margin-top: 5px;
    margin-bottom: 20px;
    grid-gap: 5px;
    background-color: rgb(52, 87, 160);
    color: rgb(243, 244, 246);
    margin-left: auto;
    margin-right: auto;
    font-size: 20px;
    width: 500px;
    height: 240px;
`;

export const StyledTextTile = styled.div`
    padding: 16px;
    font-size: 18px;
`;