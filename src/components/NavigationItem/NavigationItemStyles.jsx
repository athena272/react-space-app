import styled, { css } from "styled-components";

const NavigationItemStyles = styled.li`
    font-size: 1.5rem;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 22px;

    ${props => css`
        color: ${props.$isActive ? '#7B78E5' : '#D9D9D9'};
        font-family: ${props.$isActive ? 'GandhiSansBold' : 'GandhiSansRegular'}
    `}
`

export default NavigationItemStyles