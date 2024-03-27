import Popular from '../Popular/Popular'
import Tags from '../Tags/Tags'
import { Title, GalleryContainer, FluidSection } from './GalleryStyles'
import PropTypes from "prop-types"

Gallery.propTypes = {
    photos: PropTypes.array,
}

export default function Gallery({ photos }) {
    console.log("🚀 ~ Gallery ~ photos:", photos)
    

    return (
        <>
            <Tags />
            <GalleryContainer>
                <FluidSection>
                    <Title>
                        Navegue pela galeria
                    </Title>
                    {
                        photos.map((photo, index) => (
                            <li key={index}>
                                {photo.title}
                            </li>
                        ))
                    }
                </FluidSection>
                <Popular />
            </GalleryContainer>
        </>
    )
}