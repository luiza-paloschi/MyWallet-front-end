import styled from "styled-components"

const StyledButton = styled.button`
  width: 300px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4.5px;
  cursor: pointer;
  pointer-events: ${(props) => props.disabled ? "none" : "all"};
  opacity: ${(props) => props.disabled ? 0.7 : 1};
  font-size: 20px;
  line-height: 26px;
  font-weight: 700;
  text-align: center;
  background: #A328D6;
  color: #FFFFFF;
`

export default StyledButton