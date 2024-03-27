import { BackgroundGradient, AppContainer, MainContainer, GalleryContent } from "./AppStyes"
import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/Header/Header"
import AsideBar from "./components/AsideBar/AsideBar"
import Banner from "./components/Banner/Banner"
import bannerBackgroundImage from '/assets/images/banner.png'
import Gallery from "./components/Gallery/Gallery"
import ModalZoom from "./components/ModalZoom/ModalZoom"
import photos from './fotos.json'
import { useState } from "react"

export default function App() {
  const [galleryPhotos, setGalleryPhotos] = useState(photos)
  const [selecedtPhoto, setSelecedtPhoto] = useState(null)

  const onToggleFavorite = (photo) => {
    console.log("🚀 ~ onToggleFavorite ~ photo:", photo)

    setGalleryPhotos(galleryPhotos.map(galleryPhoto => {
      return {
        ...galleryPhoto,
        favorited: galleryPhoto.id === photo.id ? !photo.favorited : photo.favorited
      }
    }))

  }

  return (
    <BackgroundGradient>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <MainContainer>
          <AsideBar />
          <GalleryContent>
            <Banner
              text={"A galeria mais completa de fotos do espaço!"}
              backgroundImage={bannerBackgroundImage}
            />
            <Gallery
              photos={galleryPhotos}
              onSelectPhoto={photo => setSelecedtPhoto(photo)}
              onToggleFavorite={onToggleFavorite}
            />
          </GalleryContent>
        </MainContainer>
      </AppContainer>
      <ModalZoom
        photo={selecedtPhoto}
        onClose={() => setSelecedtPhoto(null)}
        onToggleFavorite={onToggleFavorite}
      />
    </BackgroundGradient>
  )
}

