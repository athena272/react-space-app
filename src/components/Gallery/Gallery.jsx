import Popular from '../Popular/Popular'
import Tags from '../Tags/Tags'
import Image from '../Image/Image'
import { Title, GalleryContainer, FluidSection } from './GalleryStyles'
import PropTypes from "prop-types"

Gallery.propTypes = {
    photos: PropTypes.array,
}

export default function Gallery({ photos }) {

    return (
        <>
            <Tags />
            <GalleryContainer>
                <FluidSection>
                    <Title>
                        Navegue pela galeria
                    </Title>
                    <ul>
                        {
                            photos.map((photo, index) => (
                                <Image
                                    key={index}
                                    photo={photo}
                                >
                                </Image>
                            ))
                        }
                    </ul>
                </FluidSection>
                <Popular />
            </GalleryContainer>
        </>
    )
}