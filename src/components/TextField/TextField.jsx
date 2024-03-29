import PropTypes from "prop-types"
import { ContainerStyles, TextFieldStyles, SearchIcon } from "./TextFieldStyles"

TextField.propTypes = {
    setFilter: PropTypes.func,
}

export default function TextField({ setFilter }) {
    return (
        <ContainerStyles>
            <TextFieldStyles
                placeholder="O que você procura?"
                type="text"
                onChange={(event) => setFilter(event.target.value)}
            />
            <SearchIcon src="/assets/icons/search.png" alt="ícone de lupa" />
        </ContainerStyles>
    )
}