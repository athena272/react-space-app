import PropTypes from "prop-types"
import NavigationItemStyles from './NavigationItemStyles'

NavigationItem.propTypes = {
    post: PropTypes.shape({
        children: PropTypes.node,
        activeIcon: PropTypes.string,
        inactiveIcon: PropTypes.string,
        isActive: PropTypes.bool,
    }
    ).isRequired
}

export default function NavigationItem({ children, activeIcon, inactiveIcon, isActive = false }) {
    return (
        <NavigationItemStyles>
            <img src={isActive ? activeIcon : inactiveIcon} alt="" />
            {children}
        </NavigationItemStyles >
    )
}