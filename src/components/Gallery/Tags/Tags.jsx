import PropTypes from "prop-types"
import tags from './tags.json'
import { TagsContainer, TitleTag, Tag, Div } from './TagsStyles'

Tags.propTypes = {
    setTag: PropTypes.func,
}

export default function Tags({ setTag }) {
    return (
        <TagsContainer>
            <TitleTag>Busque por tags:</TitleTag>
            <Div>
                {
                    tags.map((tag, index) => (
                        <Tag
                            key={index}
                            onClick={() => setTag(tag.tag)}
                        >
                            {tag.title}
                        </Tag>
                    ))
                }
            </Div>
        </TagsContainer>
    )
}