type Props = {
  blocks: {
    name: string
  }
}

export const BlockRenderer = ({ blocks }: Props) => {
  return blocks.map(block => {
    switch(block.name) {
      case 'core/cover': {
        return <div>core cover</div>;
      }
      default:
        return null;
    }
  });
};