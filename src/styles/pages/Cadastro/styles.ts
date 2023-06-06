import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
`;

export const Content = styled.main`
  display: flex;
  gap: 8.5rem;

  max-height: 41.313rem;
`;

export const BannerContainer = styled.div``;

export const LoginPanel = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4.5rem;

  padding: 6.5rem 0 0;

  & > h1 {
    color: ${(props) => props.theme.color["blue-400"]};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    font-size: ${(props) => props.theme.fontSize.LX};

    text-align: center;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow: auto;

  padding: 0 2rem 0 0;

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

      &[type="number"]::-webkit-inner-spin-button,
      &[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

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

  & > a {
    text-decoration: none;
  }
`;
