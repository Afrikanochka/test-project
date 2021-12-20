import styled from "styled-components";

export const NavigationStyled = styled.div`
min-width: 150px;
display: flex;
align-items: center;
justify-content: space-between;
.link {
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  text-shadow: 1px 1px 10px red, 1px 1px 5px black, 1px 1px 7px yellow;
}

.link-active {
  text-decoration: underline;
  color: #fc7;
}

.link:not(:last-child) {
  margin-right: 22px;
}
`