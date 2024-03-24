import PropTypes from "prop-types"
import NavigationItemStyles from './NavigationItemStyles'

NavigationItem.propTypes = {
    children: PropTypes.node,
    activeIcon: PropTypes.string,
    inactiveIcon: PropTypes.string,
    isActive: PropTypes.bool,
}

export default function NavigationItem({ children, activeIcon, inactiveIcon, isActive = false }) {
    if (children === 'Início') {
        isActive = true
    }

    return (
        <NavigationItemStyles $isActive={isActive}>
            <img src={isActive ? activeIcon : inactiveIcon} alt="" />
            {children}
        </NavigationItemStyles >
    )
}