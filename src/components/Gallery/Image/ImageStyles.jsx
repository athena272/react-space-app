import styled from "styled-components";

export const Figure = styled.figure`
    width: ${(props) => (props.$expanded ? '90%' : '460px')};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;

    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }

    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;

        h3 {
            font-family: 'GandhiSansBold';
        }

        h4 {
            flex-grow: 1;
        }

        h3,
        h4 {
            margin: 0;
            font-size: 16px;
        }
    }
`
export const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const IconButton = styled.button`
    margin-left: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
`