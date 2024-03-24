import HeaderStyles from './HeaderStyles'
import TextField from '../TextField/TextField'

export default function Header() {
    return (
        <HeaderStyles>
            <img src="assets/images/logo.png" alt="" />
            <TextField />
        </HeaderStyles>
    )
}