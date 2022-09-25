import { Cover } from "../Cover";

type Props = {
  blocks: {
    id: string,
    name: string
  }
}

export const BlockRenderer = ({ blocks }: Props) => {
  return blocks.map(block => {
    switch(block.name) {
      case 'core/cover': {
        console.log("BLOCK", block); // 取得したデータ確認用
        return <Cover key={block.id} background={block.attributes.url}>core cover</Cover>;
      }
      default:
        return null;
    }
  });
};