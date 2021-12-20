import styled from "styled-components";

export const LoginStyled = styled.form`
 display: flex;
  flex-direction: column;
  margin: 30px auto 0;
  padding: 20px;
  width: 50vw;
  min-height: 300px;
  justify-content: space-evenly;
  box-shadow: 1px 1px 5px rgb(111, 111, 136);
  border-radius: 8px;
  background: #fcfcfc;
  
.title {
  text-align: center;
  font-size: 32px;
  color: #fff;
  text-shadow: 1px 1px 10px red, 1px 1px 5px black, 1px 1px 7px yellow;
  margin-bottom: 16px;
}

.label {
  width: 100%;
  font-size: 20px;
  color: #fff;
  text-shadow: 1px 1px 10px red, 1px 1px 5px black, 1px 1px 7px yellow;
}

.input {
  width: 100%;
  padding: 10px;
  font-size: 20px;
  margin: 14px 0 30px;
  border-radius: 5px;
  border: 1px solid rgb(235, 15, 15);
}

.input::placeholder {
  color: violet;
}

.button {
  display: block;
  border: none;
  background: linear-gradient(90deg, rgb(245, 9, 205), rgb(201, 51, 163), rgb(228, 25, 184));
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
}
`