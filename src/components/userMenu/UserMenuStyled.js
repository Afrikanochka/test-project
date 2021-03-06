import styled from "styled-components";

export const UserMenuStyled = styled.div`
  min-width: 180px;
  display: flex;
  align-items: center;
  .avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgb(38, 245, 55);
  border: 1px solid rgb(2, 100, 24);
  width: 30px;
  height: 30px;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 1px 1px 4px #000;
  margin-right: 12px;
}

.name {
  margin-right: 10px;
  font-size: 20px;
  text-shadow: 1px 1px 4px #000;
  color: #eee;
}

.button {
  display: block;
  border: none;
  background: linear-gradient(90deg, rgb(245, 9, 205), rgb(201, 51, 163), rgb(228, 25, 184));
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}
`