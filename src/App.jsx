import { styled } from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/Header/Header"
import AsideBar from "./components/AsideBar/AsideBar"
import Banner from "./components/Banner/Banner"
import bannerBackgroundImage from '/assets/images/banner.png'

const BackgroundGradient = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

export default function App() {
  return (
    <BackgroundGradient>
      <GlobalStyles />
      <Header />
      <AsideBar />
      <Banner
        text={"A galeria mais completa de fotos do espaço!"}
        backgroundImage={bannerBackgroundImage}
      />
    </BackgroundGradient>
  )
}

