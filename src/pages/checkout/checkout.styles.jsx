import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
    width: 55vw;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-content: center;
    margin: 50px auto 0;

    @media screen and (max-width: 800px) {
        width: 80vw;
        margin: 15px;
    }
`;

export const CheckoutHeaderContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
    text-transform: capitalize;
      width: 23%;

      &:last-child {
        width: 8%;
      }
`;

export const TotalContainer = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`;

export const TestWarningContainer = styled.div`
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
    font-size: 24px;
    color: red;
`;