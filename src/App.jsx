import { BackgroundGradient, AppContainer, MainContainer, GalleryContent } from "./AppStyes"
import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/Header/Header"
import AsideBar from "./components/AsideBar/AsideBar"
import Banner from "./components/Banner/Banner"
import bannerBackgroundImage from '/assets/images/banner.png'
import Gallery from "./components/Gallery/Gallery"
import photos from './fotos.json'
import { useState } from "react"

export default function App() {
  const [galleryPhotps, setGalleryPhotos] = useState(photos)

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
            <Gallery photos={galleryPhotps} />
          </GalleryContent>
        </MainContainer>
      </AppContainer>
    </BackgroundGradient>
  )
}

