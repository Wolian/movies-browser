import styled from "styled-components";

export const MovieTile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: ${({ theme }) => theme.borderRadiusSmall};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}){
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 16px;
        width: 288px;
        height: 201px;
        background-color: ${({ theme }) => theme.colors.white};
        box-shadow: ${({ theme }) => theme.boxShadow};
        border-radius: ${({ theme }) => theme.borderRadiusSmall};
        
    }
  
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 16px;
        width: 288px;
        height: 201px;
        background-color: ${({ theme }) => theme.colors.white};
        box-shadow: ${({ theme }) => theme.boxShadow};
        border-radius: ${({ theme }) => theme.borderRadiusSmall};
        
    }
  
`;

export const Image = styled.img`
    width: 292px;
    height: 434px;
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}){
        width: 114px;
        height: 169px;
        border-radius: 5px;
    }
  
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 114px;
        height: 169px;
        border-radius: 5px;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
`;

export const Description = styled.div`
    padding: 5px 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}){
        padding: 0 5px;
    }
  
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 5px 0;
    }
`;

export const Title = styled.h2`
    font-weight: 500;
    font-size: 22px;
    margin: 0;
    line-height: 130%;
    color: ${({ theme }) => theme.colors.woodSmoke};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}){
        font-size: 16px;
    }
  
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 16px;
    }
    
`;

export const Year = styled.div`
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.waterloo};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}){
        font-size: 13px;
    }
  
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 13px;
    }
`;

export const Tags = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    padding: 0px;
    gap: 8px;


`;

export const Tag = styled.li`
    background-color: ${({ theme }) => theme.colors.mystic};
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 16px;
    gap: 10px;
    font-size: 14px;
    font-weight: 400;
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}){
        padding: 4px 8px;
    }
  
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 4px 8px;
    }
`;

export const Rating = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    width: 140px;
    height: 24px;
`;

export const Icon = styled.img`
    width: 24px;
    height: 22.87px;
`;

export const Rate = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.woodSmoke};
`;

export const Votes = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.waterloo};
`;