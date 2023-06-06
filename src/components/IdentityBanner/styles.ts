import styled from "styled-components";

export const Container = styled.div`
  width: 30.5rem;
  height: 41rem;
  background-color: ${(props) => props.theme.color["red-100"]};
  border-radius: 20px;

  & > header {
    display: flex;
    justify-content: center;
    align-items: center;

    padding-top: 6.5rem;
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: flex-end;

    height: calc(100% - (6.5rem + 45px));
    padding-bottom: 2.4rem;
  }
`;
