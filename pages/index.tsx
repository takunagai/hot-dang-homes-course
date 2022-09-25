import client from "client";
import { gql } from "@apollo/client";

import type { GetStaticProps, NextPage } from "next";

// type wpPostData = {
//   title: string,
// };

const Home: NextPage = (props) => {
  console.log("PROPS: ", props);
  return <div>Next JS &amp; WordPress course.</div>;
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
  })
  return {
    props: {
      blocks: JSON.parse(data.nodeByUri.blocksJSON),
      myexampleprop: "test"
    }
  }
}

export default Home;