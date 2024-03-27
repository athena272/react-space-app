import PropTypes from "prop-types"
import { Figure, Footer, IconButton } from "./ImageStyles"

Image.propTypes = {
    photo: PropTypes.object,
    onRequestZoom: PropTypes.func,
    expanded: PropTypes.bool,
}

export default function Image({ photo, onRequestZoom, expanded = false }) {
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
                    <IconButton>
                        <img src="/assets/icons/favorito.png" alt="Icone favoritar" />
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