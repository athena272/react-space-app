import Popular from '../Popular/Popular'
import Tags from '../Tags/Tags'
import { Title, GalleryContainer, FluidSection } from './GalleryStyles'

export default function Gallery() {
    return (
        <>
            <Tags />
            <GalleryContainer>
                <FluidSection>
                    <Title>
                        Navegue pela galeria
                    </Title>
                </FluidSection>
                <Popular />
            </GalleryContainer>
        </>
    )
}