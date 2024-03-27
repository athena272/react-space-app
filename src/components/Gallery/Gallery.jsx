import Popular from '../Popular/Popular'
import Tags from '../Tags/Tags'
import Image from '../Image/Image'
import { Title, GalleryContainer, FluidSection, ImagesContainer } from './GalleryStyles'
import PropTypes from "prop-types"

Gallery.propTypes = {
    photos: PropTypes.array,
    onSelectPhoto: PropTypes.func
}

export default function Gallery({ photos, onSelectPhoto }) {

    return (
        <>
            <Tags />
            <GalleryContainer>
                <FluidSection>
                    <Title>
                        Navegue pela galeria
                    </Title>
                    <ImagesContainer>
                        {
                            photos.map((photo, index) => (
                                <Image
                                    key={index}
                                    photo={photo}
                                    onRequestZoom={onSelectPhoto}
                                >
                                </Image>
                            ))
                        }
                    </ImagesContainer>
                </FluidSection>
                <Popular />
            </GalleryContainer>
        </>
    )
}