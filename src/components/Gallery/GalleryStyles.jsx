import styled from "styled-components";

export const Title = styled.h2`
    color: #7B78E6;
    font-size: 32px;
    text-align: ${props => props.$alignment ? props.$alignment : 'left'};
`

export const GalleryContainer = styled.div`
    display: flex;
`

export const FluidSection = styled.section`
    flex-grow: 1;
`