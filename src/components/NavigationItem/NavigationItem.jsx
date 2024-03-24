import PropTypes from "prop-types"
import NavigationItemStyles from './NavigationItemStyles'

NavigationItem.propTypes = {
    children: PropTypes.node,
    activeIcon: PropTypes.string,
    inactiveIcon: PropTypes.string,
    isActive: PropTypes.bool,
}


export default function NavigationItem({ children, activeIcon, inactiveIcon, isActive = false }) {
    return (
        <NavigationItemStyles>
            <img src={isActive ? activeIcon : inactiveIcon} alt="" />
            {children}
        </NavigationItemStyles >
    )
}