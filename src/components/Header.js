import React, { useState } from 'react';
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from '@material-ui/icons/Close';
// import { selectCars } from "../features/car/carSlice";
// import { useSelector } from "react-redux";

function Header() {

    const[sidebar, setSidebar] = useState(false);
    //const cars = useSelector(selectCars)

    return (
        <Container>
            <a href="/">
                <img src="/images/logo.svg" alt=""/>
            </a>
            <Menu>
                {/* {cars && cars.map((car, index) =>(
                    <a key={index} href="#">{car}</a>
                ))} */}
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
            </Menu>
            <RightMenu>
                  <a href="#">Shop</a>
                  <a href="#">Tesla Account</a>
                  <CustomMenu onClick={()=>setSidebar(true)}/>
            </RightMenu>
            <BurgerMenu show={sidebar}>
                <CloseWrap>
                    <CustomClose onClick={()=>setSidebar(false)}/>
                </CloseWrap>
                {/* {cars && cars.map((car, index) =>(
                    <li><a key={index} href="#">{car}</a></li>
                ))} */}
                      <li><a href="#">Existing Inventory</a></li>
                      <li><a href="#">Used Inventory</a></li>
                      <li><a href="#">Test Drive</a></li>
                      <li><a href="#">Powerwall</a></li>
                      <li><a href="#">Commercial Energy</a></li>
                      <li><a href="#">Utilities</a></li>
                      <li><a href="#">Charging</a></li>
                      <li><a href="#">Find Us</a></li>
                      <li><a href="#">Support</a></li>
                      <li><a href="#">Investor Relations</a></li>
                      <li><a href="#">Shop</a></li>
                      <li><a href="#">Account</a></li>
                      <li><a href="#">More</a></li>
            </BurgerMenu>
        </Container>
    )
}

export default Header

const Container = styled.div`
     min-height: 60px;
     position: fixed;
     display: flex;
     align-items: center;
     padding: 0 20px;
     top: 0;
     left: 0;
     right: 0;
     justify-content: space-between;
     z-index: 1;
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  flex:1;
  a{
    font-weight: 600;
    padding: 0 10px;
    text-transform: uppercase;
  }
  flex-wrap: wrap;
  @media(max-width: 768px){
      display: none;
  }
`

const RightMenu = styled.div`
display:flex;
align-items: center;
a{
    font-weight: 600;
    margin-right: 10px;
    text-transform: uppercase;
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerMenu = styled.div`
   position: fixed;
   top: 0;
   bottom: 0;
   right:0;
   background: white;
   width: 300px;
   list-style: none;
   z-index: 16;
   padding: 20px;
   opacity: 0.90;
   display: flex;
   flex-direction: column;
   text-align: start;
   transform: ${props=> props.show ? 'translateX(0)' : 'translateX(100%)'};
   transition: transform 0.2s;
   li{
       padding: 15px 0;
       border-bottom: 1px solid rgba(0,0,0,0.3);
       a{
           font-weight: 600;
       }
   }
`
const CustomClose = styled(CloseIcon)`
cursor: pointer;
`
const CloseWrap = styled.div`
display: flex;
justify-content: flex-end;
`