import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  h2 {
    margin: 10px 0;
  }

  @media screen and (min-width: 800px) {
    width: 400px;
  }

  @media screen and (max-width: 800px) {
    width: 340px;
    margin-bottom: 60px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
