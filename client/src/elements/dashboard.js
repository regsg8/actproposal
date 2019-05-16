import styled from 'styled-components'

export const StyledDashGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;
`;

export const StyledNav = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgb(52, 87, 160);
    grid-row: 1 / -1;
`;

export const StyledDistrictTile = styled.div`
    grid-column: 2 / 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const StyledDistrictTitle = styled.h2`
    text-align: center;
`;

export const StyledChartTitle = styled.h3`
    text-align: center;
    margin-bottom: 0px;
`;

export const StyledChart = styled.div`
    min-width: 500px;
    max-width: 600px;
    margin-right: auto;
    margin-left: auto;
`;