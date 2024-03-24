import ListStyles from "./AsideBarStyles"
import NavigationItem from "../NavigationItem/NavigationItem"
// Icons to import
import homeActive from '/assets/icons/home-ativo.png'
import homeInactive from '/assets/icons/home-inativo.png'
import moreViewsActive from '/assets/icons/mais-vistas-ativo.png'
import moreViewsInactive from '/assets/icons/mais-vistas-inativo.png'
import moreLikedActive from '/assets/icons/mais-curtidas-ativo.png'
import moreLikedInactive from '/assets/icons/mais-curtidas-inativo.png'
import newsActive from '/assets/icons/novas-ativo.png'
import newsInactive from '/assets/icons/novas-inativo.png'
import supriseMeActive from '/assets/icons/surpreenda-me-ativo.png'
import supriseMeInactive from '/assets/icons/surpreenda-me-inativo.png'



const arrayIcons = [
    {
        active: homeActive,
        inactive: homeInactive,
        text: "Início",
    },
    {
        active: moreViewsActive,
        inactive: moreViewsInactive,
        text: "Mais vistas",
    },
    {
        active: moreLikedActive,
        inactive: moreLikedInactive,
        text: "Mais curtidas",
    },
    {
        active: newsActive,
        inactive: newsInactive,
        text: "Novas",
    },
    {
        active: supriseMeActive,
        inactive: supriseMeInactive,
        text: "Surpreenda-me",
    }
]

export default function AsideBar() {
    return (
        <aside>
            <nav>
                <ListStyles>
                    {
                        arrayIcons.map((icon, index) => (
                            <NavigationItem
                                key={index}
                                activeIcon={icon.active}
                                inactiveIcon={icon.inactive}
                            // isActive={false}
                            >
                                {icon.text}
                            </NavigationItem>
                        ))
                    }
                </ListStyles>
            </nav>
        </aside>
    )
}