import { Cover } from "../Cover"
import { Heading } from "../Heading"
import { Paragraph } from "../Paragraph"
import { theme } from "../../theme"
// import { CoreCoverBlockAttributes, CoreHeadingBlockAttributes } from 'src/generated/graphql';

// ★★TODO: ブロック名で型を分岐させたい
type Props = {
  blocks: [
    {
      id: string
      name: string
      attributes: {
        content: string
        level: number
        textAlign: string
        url: string
        innerBlocks?: Props
      }
    },
  ]
}

export const BlockRenderer = ({ blocks }: Props) => {
  return (
    <>
      {
        blocks.map((block) => {
          switch (block.name) {
            case "core/paragraph": {
              return (
                <Paragraph
                  key={block.id}
                  textAlign={block.attributes.align}
                  content={block.attributes.content}
                  textColor={
                    theme[block.attributes.textColor] ||
                    block.attributes.style?.color?.text
                  }
                ></Paragraph>
              )
            }
            case "core/heading": {
              return (
                <Heading
                  key={block.id}
                  content={block.attributes.content}
                  level={block.attributes.level}
                  textAlign={block.attributes.textAlign}
                />
              )
            }
            case "core/cover": {
              console.log("BLOCK", block) // 取得したデータ確認用
              return (
                <Cover key={block.id} background={block.attributes.url}>
                  <BlockRenderer blocks={block.innerBlocks} />
                </Cover>
              )
            }
            default:
              return null
          }
        }) // as Props[] https://dev.to/martinl83/recursive-react-component-in-typescript-5ae5
      }
    </>
  )
}
