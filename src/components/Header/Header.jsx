import PropTypes from "prop-types"
import HeaderStyles from './HeaderStyles'
import TextField from '../TextField/TextField'

Header.propTypes = {
    setFilter: PropTypes.func,
}

export default function Header({ setFilter }) {
    return (
        <HeaderStyles>
            <img src="assets/images/logo.png" alt="" />
            <TextField setFilter={setFilter} />
        </HeaderStyles>
    )
}