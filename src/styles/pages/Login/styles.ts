import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
`;

export const Content = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 8.5rem;
`;

export const BannerContainer = styled.div``;

export const LoginPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.5rem;

  & > h1 {
    color: ${(props) => props.theme.color["blue-400"]};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    font-size: ${(props) => props.theme.fontSize.LX};
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;

  &:not(:has(> label > span)) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  & > label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    color: ${(props) => props.theme.color["blue-400"]};
    font-weight: ${(props) => props.theme.fontWeight.semibold};
    font-size: ${(props) => props.theme.fontSize.XXS};

    & > input {
      min-width: 30.5rem;
      background-color: ${(props) => props.theme.color["gray-50"]};
      border: 1px solid ${(props) => props.theme.color["gray-100"]};
      border-radius: 10px;
      padding: 1.125rem;

      color: ${(props) => props.theme.color["blue-400"]};
      font-weight: ${(props) => props.theme.fontWeight.semibold};
      font-size: ${(props) => props.theme.fontSize.XS};

      &::placeholder {
        color: ${(props) => props.theme.color["blue-400"]};
        font-weight: ${(props) => props.theme.fontWeight.semibold};
        font-size: ${(props) => props.theme.fontSize.XS};
      }
    }
  }
`;

export const ButtonsActions = styled.div`
  margin-top: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & > button {
    & > span {
      width: 24px;
      height: 24px;
      border: 5px solid #fff;
      border-bottom-color: transparent;
      border-radius: 50%;
      display: inline-block;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  & > a {
    text-decoration: none;
  }
`;
