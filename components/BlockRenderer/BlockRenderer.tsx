import { Cover } from "../Cover";
import { Heading} from "../Heading";

type Props = {
  blocks: {
    id: string,
    name: string
  }
}

export const BlockRenderer = ({ blocks }: Props) => {
  return blocks.map(block => {
    switch(block.name) {
      case 'core/heading': {
        return <Heading key={block.id} />;
      }
      case 'core/cover': {
        console.log("BLOCK", block); // 取得したデータ確認用
        return <Cover key={block.id} background={block.attributes.url}>
          <BlockRenderer blocks={block.innerBlocks} />
        </Cover>;
      }
      default:
        return null;
    }
  });
};