import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Job } from "../../typings";
import { Container, CarouselArea, Prev, Next } from "./styled";

type Props = {
  children: any;
  jobs: Job[];
};

const Carousel = ({ children, jobs }: Props) => {
  const [scrollY, setScrollY] = useState(0);

  /*Carousel effect will be reproduced decreasing or increasing margin-top, basing in how much height all the Jobslist component have */
  const handleUpArrow = () => {
    /*y its a value equal to the height of the window/2  */
    let y = scrollY + Math.round(window.innerHeight / 2);
    if (y > 0) {
      y = 0;
    }
    setScrollY(y);
  };

  const handleDownArrow = () => {
    let y = scrollY - Math.round(window.innerHeight / 2);
    /*10 items, with 210 height */
    let listH = jobs.length * 210;

    if (window.innerHeight - listH > y) {
      y = window.innerHeight - listH - 200;
    }

    setScrollY(y);
  };

  const style = { marginTop: scrollY, transition: "all ease 0.5s" };

  useEffect(() => {
    setScrollY(0);
  }, [jobs]);

  return (
    <Container>
      <Next onClick={handleUpArrow}>
        <FontAwesomeIcon icon={faArrowUp} />
      </Next>
      <CarouselArea>
        <div style={style}> {children}</div>
      </CarouselArea>
      <Prev onClick={handleDownArrow}>
        <FontAwesomeIcon icon={faArrowDown} />
      </Prev>
    </Container>
  );
};
export default Carousel;
