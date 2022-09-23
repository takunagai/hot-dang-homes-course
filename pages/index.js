import client from "client";
import { gql } from "@apollo/client";

export default function Home(props) {
  console.log("PROPS: ", props);
  return <div>Next JS &amp; WordPress course.</div>;
}

export const getStaticProps = async () => {
  const {data} = await client.query({
    query: gql`
      query NewQuery {
        pages {
          nodes {
            title
          }
        }
      }
    `
  })
  return {
    props: {
      data,
      myexampleprop: "test"
    }
  }
}