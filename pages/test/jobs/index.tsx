import React, { useEffect, useState } from "react";
import Carousel from "../../../components/Carousel";
import Header from "../../../components/Header";
import JobList from "../../../components/JobsList";
import GlobalStyle, { Container } from "../../../styles";
import { Job } from "../../../typings";
import { Api } from "../../api/axios";

type Props = { data: Job[] };

const Home = ({ data }: Props) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [initialJobs, setInitialJobs] = useState<Job[]>([]);

  useEffect(() => {
    setJobs(data);
    setInitialJobs(data);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header setJobs={setJobs} initialJobs={initialJobs} />
        <Carousel jobs={jobs}>
          <JobList jobs={jobs} />
        </Carousel>
      </Container>
    </>
  );
};

// SSR - Server Side Rendering
export async function getServerSideProps(context) {
  const data = await Api.get("api/jobs").then(({ data }) => data);
  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Home;
