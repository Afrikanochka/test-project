import styled from 'styled-components';

export const ProductsStyled = styled.div`

    width: 200px;
    border-color:transparent;
    transition:all 1s linear;
    margin-bottom: 20px;
.card-footer{
    background:transparent;
    border-top:transparent;
}
&:hover{
    .card{
        border: 1px solid rgba(0,0,0,0.2);
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background:rgba(247,247,247);
    }
}
.img-container{
    position:relative;
    overflow:hidden;
}
.card-img{
    transition:all 0.5s linear;
}
.img-container:hover .card-img-top{
    transform:scale(1.17);
}
.cart-btn{
    position: absolute;
    bottom:0;
    right:0;
    cursor: pointer;
    padding: 10px 15px;
    background: orange;
    border:none;
    color: purple;
    font-size: 18px;
    border-radius: 5px 0 0 0;
    transform:translate(100%,100%);
    transition: all 1s linear;
}
.text-btn {
    position: absolute;
    bottom:0;
    right:0;
    padding: 10px 15px;
    background: orange;
    border:none;
    color: purple;
    font-size: 18px;
    border-radius: 5px 0 0 0;
    transform:translate(100%,100%);
    transition: all 1s linear;
}
.img-container:hover .cart-btn{
    transform: translate(0,0);
}
.cart-btn:hover{
    color: pink;
    cursor:pointer;
}
.price {
    font-weight: 600;
    color: #d010e9;
}
`;