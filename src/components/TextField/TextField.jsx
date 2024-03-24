import { ContainerStyles, TextFieldStyles, SearchIcon } from "./TextFieldStyles"

export default function TextField(props) {
    return (
        <ContainerStyles>
            <TextFieldStyles placeholder="O que você procura?" {...props} />
            <SearchIcon src="/assets/icons/search.png" alt="ícone de lupa" />
        </ContainerStyles>
    )
}