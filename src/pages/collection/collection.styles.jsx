import styled from "styled-components";

export const CollectionPageContainer = styled.div`
    padding: 20px;
`;

export const TitleContainer = styled.div`
    text-align: center;
    font-size: 38px;
    margin: 0 auto 30px;
    text-transform: uppercase;
`;

export const ItemsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;