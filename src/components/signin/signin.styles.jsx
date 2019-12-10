import styled from "styled-components";

export const GroupContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 800px) {
    /* For mobile phones: */
      width: 90%;
  }
`;

export const TitleContainer = styled.div`
    margin: 10px 0;
    font-size: 24px;
    font-weight: bold;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    flex-wrap: wrap;
    justify-content: center;

`;