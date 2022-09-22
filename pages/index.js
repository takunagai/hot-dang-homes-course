export default function Home(props) {
  console.log("PROPS: ", props);
  return <div>Next JS &amp; WordPress course.</div>;
}

export const getStaticProps = async () => {
  return {
    props: {
      myexampleprop: "test"
    }
  }
}