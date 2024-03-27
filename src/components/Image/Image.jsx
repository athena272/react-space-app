import PropTypes from "prop-types"
import Figure from "./ImageStyles"

Image.propTypes = {
    photo: PropTypes.object,
}

export default function Image({ photo }) {
    return (
        <Figure>
            <img src={photo.path} alt={photo.title} />
            <figcaption>
                <h3>{photo.title}</h3>
                <footer>
                    <p>{photo.source}</p>
                    <button>Favorito</button>
                    <button>Expandir</button>
                </footer>
            </figcaption>
        </Figure>
    )
}