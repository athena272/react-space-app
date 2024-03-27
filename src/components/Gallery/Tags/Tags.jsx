import tags from './tags.json'
import { TagsContainer, TitleTag, Tag, Div } from './TagsStyles'

export default function Tags() {
    return (
        <TagsContainer>
            <TitleTag>Busque por tags:</TitleTag>
            <Div>
                {
                    tags.map((tag, index) => (
                        <Tag
                            key={index}
                        >
                            {tag.title}
                        </Tag>
                    ))
                }
            </Div>
        </TagsContainer>
    )
}