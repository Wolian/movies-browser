import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const Spinner = styled.div`
  width: 91px;
  height: 91px;
  margin: 0 auto;
  border: 11px solid ${({ theme }) => theme.colors.snuff};
  border-right-color: ${({ theme }) => theme.colors.black};
  border-radius: 50%;
  animation: rotateSpin 0.7s infinite linear;

  @media (max-width: 750px) {
    width: 65px;
    height: 65px;
    border-width: 7px;
  }

  @keyframes rotateSpin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
