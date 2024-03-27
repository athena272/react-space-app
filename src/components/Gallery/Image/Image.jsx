import PropTypes from "prop-types"
import { Figure, Footer } from "./ImageStyles"

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
                    
                    <button>Favorito</button>
                    <button>Expandir</button>
                </Footer>
            </figcaption>
        </Figure>
    )
}