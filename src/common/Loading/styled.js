import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

export const Spinner = styled.div`
  width: 91px;
  height: 91px;
  border: 11px solid ${({ theme }) => theme.colors.snuff};
  border-right-color: ${({ theme }) => theme.colors.black};
  border-radius: 50%;
  animation: rotateSpin 0.7s infinite linear;

  @media (max-width: 750px) {
    width: 35px;
    height: 35px;
    border-width: 5px;
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
