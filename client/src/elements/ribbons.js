import styled from 'styled-components'

export const StyledHeaderRibbon = styled.div`
    height: 60px;
    background-color: rgb(42, 87, 165);
    border-bottom: solid 8px rgb(36, 51, 107);
    width: 100vw;
`;

export const StyledHeader = styled.div`
    display: flex;
    flex-wrap: nowrap;
    color: rgb(64, 70, 83);
    margin-top: 10px;
    margin-bottom: 0px;
    justify-content: space-between;
    width: 100vw;
    border-bottom: 6px solid rgb(36, 51, 107);
    padding-bottom: 10px;
`;

export const StyledFooterRibbon = styled.div`
    display: flex;
    justify-content: space-around;
    height: 40px;
    width: 100%;
    background-color: rgb(36, 51, 107);
    margin-top: 0px;
    color: rgb(243, 244, 246);
    padding-right: 25%;
    padding-left: 25%;
    padding-top: 12px;
    padding-bottom: 5px;
`;
