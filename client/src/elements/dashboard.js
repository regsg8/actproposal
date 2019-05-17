import styled from 'styled-components'

export const StyledDashGrid = styled.div`
    display: grid;
    grid-template-columns: 240px auto;
    grid-template-rows: auto auto auto;
`;

export const StyledNav = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgb(52, 87, 160);
    grid-row: 1 / -1;
    padding-right: 4px;
    max-width: 240px;
`;

export const StyledDistrictTile = styled.div`
    grid-column: 2 / -1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const StyledPageTitle = styled.h2`
    text-align: center;
    background-color: rgb(52, 87, 160);
    color: #D2B06F;
    margin: 0px;
    width: 100%;
    padding-top: 12px;
    padding-bottom: 12px;
    font-size: 28px;
    border-bottom: rgb(36, 51, 107) solid 6px;
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

export const StyledBarChart = styled.div`
    margin: 10px;
    
`;

export const StyledSchoolBoardTile = styled.div`
    grid-column: 2 / -1;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;

export const StyledBenchmarksDiv = styled.div`
    justify-content: center;
    display: flex;
    flex-flow: row wrap;
    margin: 10px;
    padding: 10px;
`;

export const StyledSchoolPageTile = styled.div`
    margin: 10px;
    padding: 10px;
    justify-content: center;
    display: flex;
    flex-flow: column wrap;
    text-align: center;
`;

export const SmallDonutChart = styled.div`
    border: 4px solid #24336B;
    border-radius: 3px;
    margin: 10px;
    padding: 10px;
    text-align: center;
    background-color: #979CA3;
    color: #24336B;
`;



/* 
  Secondary Emphasis, gold:  rgb(210, 176, 111)  #D2B06F
  Primary Hi, blue:          rgb(68, 94, 162)    #445EA2
  Primary Lo, blue:          rgb(36, 51, 107)    #24336B
  Neutral Lo, gray:          rgb(64, 70, 83)     #404653
  Neutral Mid, gray:         rgb(151, 156, 163)  #979CA3
  Neutral Hi, white:         rgb(243, 244, 246)  #F3F4F6
*/

/* 
  Other Blue:   rgb(52, 87, 160)
*/
