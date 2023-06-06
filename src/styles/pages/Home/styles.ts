import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.color["red-100"]};
  width: 100vw;
  height: 100vh;
`;

export const Header = styled.header`
  width: min(90rem, 100%);
  margin: 0 auto;
  padding: 7.75rem 7rem 0.8rem;

  display: flex;
  justify-content: space-between;

  & > p {
    color: ${(props) => props.theme.color.white};
    font-weight: ${(props) => props.theme.fontWeight.semibold};
    font-size: ${(props) => props.theme.fontSize.XXS};
    width: min(20rem, 100%);

    & > a {
      text-decoration: none;
      color: ${(props) => props.theme.color.white};
      margin-left: 0.3rem;

      &:hover {
        color: ${(props) => props.theme.color["yellow-300"]};
      }
    }
  }
`;

export const Content = styled.main`
  width: min(90rem, 100%);
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 8.5rem 0 0 7rem;
`;

export const TextContent = styled.div`
  color: ${(props) => props.theme.color.white};
  font-weight: ${(props) => props.theme.fontWeight.extrabold};
  font-size: ${(props) => props.theme.fontSize.XL};
  line-height: 1;
  width: min(32rem, 100%);
  padding-top: 4rem;
`;

export const FindAFriend = styled.div`
  padding-left: 7rem;
  margin-top: 8rem;

  display: flex;
`;

export const FindAFriendText = styled.div`
  & > p {
    color: ${(props) => props.theme.color.white};
    font-weight: ${(props) => props.theme.fontWeight.semibold};
    font-size: ${(props) => props.theme.fontSize.MD};
  }
`;

export const SearchAFriend = styled.form`
  border: transparent;
  display: flex;
  gap: 0.8rem;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  & > label {
    color: ${(props) => props.theme.color.white};
    font-weight: ${(props) => props.theme.fontWeight.regular};
    font-size: ${(props) => props.theme.fontSize.XXS};
    margin-right: 0.5rem;
  }
`;
