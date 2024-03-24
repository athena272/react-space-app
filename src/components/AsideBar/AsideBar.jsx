import ListStyles from "./AsideBarStyles"

export default function AsideBar() {
    return (
        <aside>
            <nav>
                <ListStyles>
                    <li>
                        <a href="">
                            Início
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Mais curtidos
                        </a>
                    </li>
                </ListStyles>
            </nav>
        </aside>
    )
}