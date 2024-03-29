import PropTypes from "prop-types"
import HeaderStyles from './HeaderStyles'
import TextField from '../TextField/TextField'

Header.propTypes = {
    filter: PropTypes.string,
    setFilter: PropTypes.func,
}

export default function Header({ filter, setFilter }) {
    return (
        <HeaderStyles>
            <img src="assets/images/logo.png" alt="" />
            <TextField />
        </HeaderStyles>
    )
}