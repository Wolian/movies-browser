import styled from "styled-components";
import { ReactComponent as NoResultsIcon } from "./Icon.svg";

export const Wrapper = styled.main`
    margin-top: 56px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 1384px;
    
`;

export const Icon = styled(NoResultsIcon)`
    display: flex;
    align-self: flex-end;
    width: 600px;
    
`;

export const Header = styled.h1`
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    align-self: flex-start;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 30px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 24px;
    }
    
`;