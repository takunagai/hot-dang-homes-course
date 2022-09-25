import client from "client";
import { gql } from "@apollo/client";
import { BlockRenderer } from "../components/BlockRenderer";
import { cleanAndTransformBlocks } from "../utils/cleanAndTransformBlocks"

import type { GetStaticProps, NextPage } from "next";

// type wpPostData = {
//   title: string,
// };

const Home: NextPage = (props) => {
  console.log("PROPS: ", props);
  return (
    <>
      <BlockRenderer blocks={props.blocks} />
    </>
  );
}


export const getStaticProps: GetStaticProps = async () => {
  const {data} = await client.query({
    query: gql`
      query NewQuery {
        nodeByUri(uri: "/") {
          ... on Page {
            id
            title
            blocksJSON
          }
        }
      }
    `
  });

  const blocks = cleanAndTransformBlocks(data.nodeByUri.blocksJSON);
  return {
    props: {
      blocks,
    }
  }
}

export default Home;