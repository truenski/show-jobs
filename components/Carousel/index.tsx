import {
  faArrowUp,
  faArrowDown,
  faUpLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Job } from "../../typings";
import { Container, CarouselArea, Prev, Next, Up } from "./styled";

type Props = {
  children: any;
  jobs: Job[];
};

const Carousel = ({ children, jobs }: Props) => {
  const [scrollY, setScrollY] = useState(0);
  const [disablePrev, setDisablePrev] = useState(false);

  /*Carousel effect will be reproduced decreasing or increasing margin-top */
  const handleUpArrow = () => {
    /*y its a value equal to 2 CardContainer height */
    let y = scrollY + 2 * 240;
    if (y > 0) {
      y = 0;
    }
    setScrollY(y);
  };

  const handleDownArrow = () => {
    let y = scrollY - 2 * 240;

    /*10 items, with 220height + 20margin */
    let listH = jobs.length * 240;

    /*To handle the last scroll.
      window.innerHeight -> 83vh -> CarouselArea Height
      -20 -> add margin-top so the content don't get sticked to the button
    */
    if (window.innerHeight * 0.83 - listH > y) {
      y = window.innerHeight * 0.83 - listH - 20;
      setDisablePrev(true);
    }

    setScrollY(y);
  };

  /*restart scroll after clicking in a button */
  useEffect(() => {
    setScrollY(0);
  }, [jobs]);

  /*enable Prev scroll button when scroll changes.
   */
  useEffect(() => {
    setDisablePrev(false);
  }, [scrollY]);

  return (
    <Container>
      <Next onClick={handleUpArrow} scrollY={scrollY}>
        <FontAwesomeIcon icon={faArrowUp} />
      </Next>
      <CarouselArea scrollY={scrollY}>
        <div> {children}</div>
      </CarouselArea>
      <Prev disablePrev={disablePrev} onClick={handleDownArrow}>
        <FontAwesomeIcon icon={faArrowDown} />
      </Prev>
    </Container>
  );
};
export default Carousel;
