import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #8C11BE;
  font-family: 'Raleway';
  h1{
    font-weight: 700;
    font-style: normal;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
  }
  a{
    text-decoration: none;
    width: 100%;
  }
`
export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 25px;
    img{
        width: 22px;
        height: 22px;
    }
`

export const NoRegistriesContainer = styled.div`
    width: calc(100% - 48px);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 446px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 0px 60px;
    p{
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #868686;
    }
`

export const DivButtons = styled.div`
width: calc(100% - 48px);
display: flex;
justify-content: center;
align-items: center;
margin-top: 13px;
column-gap: 15px;
`