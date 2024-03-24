import styled from "styled-components";

const NavigationItemStyles = styled.li`
    font-size: 1.5rem;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${props => props.$isActive ? '#7B78E5' : '#D9D9D9'};
    display: flex;
    align-items: center;
    gap: 22px;
`

export default NavigationItemStyles