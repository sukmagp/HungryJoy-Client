import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.a`
  font-size: 11px;
  color: #1E0D0D;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  &:hover {
    color: #1E0D0D;
  }
`;

export const BoldLink = styled.a`
  font-size: 11px;
  color: rgb(204, 21, 21);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
  &:hover {
    color: rgb(204, 25, 25);
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(204, 21, 21);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 8px 32%;
  color: #fff;
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(204, 21, 21);
  background: linear-gradient(
    58deg,
    rgba(204, 21, 21, 1) 20%,
    rgba(204, 21, 21, 1) 100%
  );
  &:hover {
    filter: brightness(1.1);
  }
`;

export const DisabledButton = styled.button`
  width: 100%;
  padding: 8px 32%;
  color: rgb(204, 21, 21);
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-color: rgb(204, 21, 21);
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: #fff;
  background: linear-gradient(
    58deg,
    #fff 20%,
    #fff 100%
  );
  &:hover {
    filter: brightness(1.1);
  }
`;