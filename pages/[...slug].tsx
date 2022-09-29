import { gql } from "@apollo/client";
import client from "client"

export default function Page(props) {
  console.log("PAGE PROPS: ", props); // 確認用。現時点では空オブジェクトだけ
  return (
    <div>page</div>
  );
}

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export const getStaticPaths = async () => {
  const {data} = await client.query({
    query: gql`
      query AllPagesQuery {
        pages {
          nodes {
            uri
          }
        }
      }
    `
  });

  return {
    paths: data.pages.nodes.map(page => ({
      params: {
        slug: page.uri.substring(1, page.uri.length - 1).split("/")
      }
    })),
    fallback: false,
  }
};