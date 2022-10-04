import { gql } from "@apollo/client"
import client from "client"
import { cleanAndTransformBlocks } from "../utils/cleanAndTransformBlocks"
import { BlockRenderer } from "../components/BlockRenderer"

import { GetStaticPaths, GetStaticProps, NextPage } from "next"
// type Props = {}

export const Page: NextPage = (props) => {
  console.log("PAGE PROPS: ", props) // 確認用。現時点では空オブジェクトだけ
  return (
    <div>
      <BlockRenderer blocks={props.blocks} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  console.log("CONTEXT: ", context) // 確認用

  const uri = `/${context.params.slug.join("/")}/`
  console.log("URI:", uri)

  const { data } = await client.query({
    query: gql`
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            id
            title
            blocksJSON
          }
        }
      }
    `,
    variables: {
      uri,
    },
  })

  const blocks = cleanAndTransformBlocks(data.nodeByUri.blocksJSON)
  return {
    props: {
      title: data.nodeByUri.title,
      blocks,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query AllPagesQuery {
        pages {
          nodes {
            uri
          }
        }
      }
    `,
  })

  return {
    paths: data.pages.nodes.map((page) => ({
      params: {
        slug: page.uri.substring(1, page.uri.length - 1).split("/"),
      },
    })),
    fallback: false,
  }
}

export default Page
