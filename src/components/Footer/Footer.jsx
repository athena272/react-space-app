import { FooterContainer, IconsContainer, FooterText } from "./FooterStyles"

export default function Footer() {
    return (
        <FooterContainer>
            <IconsContainer>
                <li>
                    <a href="#">
                        <img src="/assets/images/sociais/facebook.svg" alt="Icone Facebook" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/assets/images/sociais/instagram.svg" alt="Icone Instagram" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/assets/images/sociais/twitter.svg" alt="Icone Twitter" />
                    </a>
                </li>
            </IconsContainer>
            <FooterText>Desenvolvido por Guilherme R. Alves</FooterText>
        </FooterContainer>
    )
}