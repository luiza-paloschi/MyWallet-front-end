import styled from "styled-components"


export const DivBalance = styled.div`
    width:100%;
    display: flex;
    padding: 10px 11px;
    position: absolute;
    z-index: 2;
    bottom: 0px;
    left: 0px;
    justify-content: space-between;
    font-size: 17px;
    line-height: 20px;
    h2{
        font-weight: 700;
        color: #000000;
    }
    h3{
        color: ${(props) => props.balance > 0 ? "#03AC00" : "#C70000"};
        
    }
`