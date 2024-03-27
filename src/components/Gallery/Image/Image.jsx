import PropTypes from "prop-types"
import { Figure, Footer, IconButton } from "./ImageStyles"

Image.propTypes = {
    photo: PropTypes.object,
    onRequestZoom: PropTypes.func,
    onToggleFavorite: PropTypes.func,
    expanded: PropTypes.bool,
}

export default function Image({ photo, onRequestZoom, onToggleFavorite, expanded = false }) {
    const favoriteIcon = photo.favorited ? '/assets/icons/favorito-ativo.png' : '/assets/icons/favorito.png'

    return (
        <Figure
            $expanded={expanded}
            id={`photo-${photo.id}`}
        >
            <img src={photo.path} alt={photo.title} />
            <figcaption>
                <h3>{photo.title}</h3>
                <Footer>
                    <h4>{photo.source}</h4>
                    <IconButton
                        onClick={() => onToggleFavorite(photo)}
                    >
                        <img src={favoriteIcon} alt="Icone favoritar" />
                    </IconButton>
                    {
                        !expanded &&
                        <IconButton
                            aria-hidden={expanded}
                            onClick={() => onRequestZoom(photo)}
                        >
                            <img src="/assets/icons/expandir.png" alt="Icone favoritar" />
                        </IconButton>
                    }
                </Footer>
            </figcaption>
        </Figure>
    )
}