import styled from "styled-components";

export const DivCard = styled.div`
    width: 100%;
    display: flex;
    margin-top: 25px;
    padding: 0px 12px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    column-gap: 10px;
`

export const SpanDate = styled.span`
    color: #C6C6C6;
    
`
export const SpanDescription = styled.span`
    color: #000000;
    overflow: hidden;
    width:70%;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline;
    text-align: start;
`

export const SpanValue = styled.span`
    color: ${(props) => props.type === "entry" ? "#03AC00" : "#C70000"};
`
