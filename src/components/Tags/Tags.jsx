import tags from './tags.json'
import { TitleTag, Tag } from './TagsStyles'

export default function Tags() {
    return (
        <>
            <TitleTag>Busque por tags:</TitleTag>
            {
                tags.map((tag, index) => (
                    <Tag
                        key={index}
                    >
                        {tag.title}
                    </Tag>
                ))
            }
        </>
    )
}