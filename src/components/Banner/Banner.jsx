import PropTypes from "prop-types"
import { WrapperFigureStyles, TitleStyles } from './BannerStyles'

Banner.propTypes = {
    text: PropTypes.string,
    backgroundImage: PropTypes.string,
}

export default function Banner({ text, backgroundImage }) {
    return (
        <WrapperFigureStyles $backgroundImage={backgroundImage}>
            <TitleStyles>
                {text}
            </TitleStyles>
        </WrapperFigureStyles>
    )
}