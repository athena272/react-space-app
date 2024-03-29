import { BackgroundGradient, AppContainer, MainContainer, GalleryContent } from "./AppStyes"
import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/Header/Header"
import AsideBar from "./components/AsideBar/AsideBar"
import Banner from "./components/Banner/Banner"
import bannerBackgroundImage from '/assets/images/banner.png'
import Gallery from "./components/Gallery/Gallery"
import ModalZoom from "./components/ModalZoom/ModalZoom"
import photos from './fotos.json'
import { useState, useEffect } from "react"

export default function App() {
  const [galleryPhotos, setGalleryPhotos] = useState(photos)
  const [filter, setFilter] = useState('')
  const [tag, setTag] = useState(0)
  const [photoWithZoom, setPhotoWithZoom] = useState(null)

  useEffect(() => {
    const filteredPhotos = photos.filter(photo => {
      const filterByTag = !tag || photo.tagId === tag
      const filterByTitle = !filter || photo.title.toLowerCase().includes(filter.toLowerCase())
      return filterByTag && filterByTitle
    })

    setGalleryPhotos(filteredPhotos)
  }, [filter, tag])

  const onToggleFavorite = (photo) => {

    if (photo.id === photoWithZoom?.id) {
      setPhotoWithZoom({
        ...photoWithZoom,
        favorited: !photoWithZoom.favorited
      })
    }
    setGalleryPhotos(galleryPhotos.map(galleryPhoto => {
      return {
        ...galleryPhoto,
        favorited: galleryPhoto.id === photo.id ? !photo.favorited : galleryPhoto.favorited
      }
    }))
  }

  return (
    <BackgroundGradient>
      <GlobalStyles />
      <AppContainer>
        <Header
          setFilter={setFilter}
        />
        <MainContainer>
          <AsideBar />
          <GalleryContent>
            <Banner
              text={"A galeria mais completa de fotos do espaço!"}
              backgroundImage={bannerBackgroundImage}
            />
            <Gallery
              photos={galleryPhotos}
              onSelectPhoto={photo => setPhotoWithZoom(photo)}
              onToggleFavorite={onToggleFavorite}
              setTag={setTag}
            />
          </GalleryContent>
        </MainContainer>
      </AppContainer>
      <ModalZoom
        photo={photoWithZoom}
        onClose={() => setPhotoWithZoom(null)}
        onToggleFavorite={onToggleFavorite}
      />
    </BackgroundGradient>
  )
}

