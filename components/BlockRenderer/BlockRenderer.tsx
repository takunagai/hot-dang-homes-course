import { Cover } from "../Cover";
import { Heading } from "../Heading";
import type { FunctionComponent } from 'react';

type Props = {
  blocks: [
    {
      id: string,
      name: string,
      attributes: {
        content: string,
        level: number,
        textAlign: string,
      },
    }
  ]
};

// ★★TODO: この関数(中で同関数の再呼び出しあり)の型定義、正しくは？
export const BlockRenderer: FunctionComponent = ({ blocks }: Props) => {
  return blocks.map(block => {
    switch(block.name) {
      case 'core/heading': {
        return <Heading
          key={block.id}
          content={block.attributes.content}
          level={block.attributes.level}
          textAlign={block.attributes.textAlign}
        />;
      }
      case 'core/cover': {
        console.log("BLOCK", block); // 取得したデータ確認用
        return (
          <Cover key={block.id} background={block.attributes.url}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        );
      }
      default:
        return null;
    }
  });
};