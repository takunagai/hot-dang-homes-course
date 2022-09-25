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
        return <div key={block.id}>core cover</div>;
      }
      default:
        return null;
    }
  });
};