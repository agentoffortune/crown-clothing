import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 25px;

    @media screen and (max-width: 800px) {
            margin-bottom: 50px;
            justify-content: center;
        }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 300px;
    padding: 25px;
    font-size: 32px;
    font-weight: bold;
    text-decoration: none;
    display: flex;
    justify-content: space-between;

    &:hover {
        text-decoration: none;
        transform: scale(1.1);
        transition: transform 0.5s ease-in-out;

        @media screen and (max-width: 800px) {
            transform: unset;
            transitiion: unset;
        }
    }
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 800px) {
            justify-content: center;
            width: 90%;
        }
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;