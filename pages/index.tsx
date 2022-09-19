import React from "react";

type Props = {};

const Home = (props: Props) => {
  return <>Home</>;
};

export default Home;

export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: "/test/jobs",
      permanent: false,
    },
  };

  return {
    props: {}, // will be passed to the page component as props
  };
}
