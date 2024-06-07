import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from './assets/logo.png'

export default function NavBar() {
    // logo
    return (
        <Container> 
        <Link to="/"> <img src={logo} alt="logo" height='40px' width='40px'/> </Link>
        CineFlex </Container>
    );
}

const Container = styled.div`
    height: 67px;
    width: 100%;
    background-color: #EE897F;
    top: 0;
    position: fixed;
    font-size: 34px;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    z-index: 5;
    font-family: "Raleway", sans-serif;
    color: #FADBC5;
`