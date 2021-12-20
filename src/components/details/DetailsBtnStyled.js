import styled from 'styled-components';


export const DetailsBtnStyled = styled.button`
text-transform:capitalize;
font-size: 14px;
background: transparent;
border: 1px solid #ffa5a5;
color: #ffa5a5;
border-radius: 5px;
border-color:${props=>props.cart ? "#FFA500" : "#ffa5a5"};
color:${props=>props.cart ? "#FFA500" : "#ffa5a5"};
padding: 5px 10px;
transition: all 0.5s ease-in-out;

button:hover{
    background:${prop=>prop.cart ? "#FFA500" : "#ffa5a5"};
    color: #f3f3f3;
}
button:focus{
    outline:none;
}
`;