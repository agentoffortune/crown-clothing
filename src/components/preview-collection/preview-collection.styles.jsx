import styled from "styled-components";

export const CollectionPreviewContainer = styled.div`
    padding: 20px;
`;

export const TitleContainer = styled.div`
    text-align: center;
    font-size: 38px;
    margin: 0 auto 20px;
    text-transform: uppercase;
`;

export const PreviewContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 1rem;
    grid-auto-flow: dense;
`;