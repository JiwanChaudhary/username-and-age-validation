import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  padding-top: 20px;
`;

export const Form = styled.form`
  background-color: white;
  height: 140px;
  width: 300px;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const Username = styled.label`
  font-weight: bold;
`;

export const UsernameInput = styled.input`
  &:focus {
    outline: none;
  }
`;

export const Age = styled.label`
  font-weight: bold;
  padding-top: 10px;
`;

export const AgeInput = styled.input`
  &:focus {
    outline: none;
  }
`;

export const AddUser = styled.button`
  margin-top: 10px;
  width: 80px;
`;
