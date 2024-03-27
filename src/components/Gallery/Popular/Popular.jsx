import { Title } from "../GalleryStyles";
import { PhotosColumn, Image, Button } from "./PopularStyles";
import popularsPhotos from './fotos-populares.json'

export default function Popular() {
    return (
        <section>
            <Title $alignment="center">Populares</Title>
            <PhotosColumn>
                {
                    popularsPhotos.map((photo, index) => (
                        <Image
                            key={index}
                            src={photo.path}
                            alt={photo.alt}
                        />
                    ))
                }
            </PhotosColumn>
            <Button>Ver mais</Button>
        </section>
    )
}