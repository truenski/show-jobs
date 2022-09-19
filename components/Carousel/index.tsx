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

  /*Carousel effect will be reproduced decreasing or increasing margin-top, basing in how much height all the Jobslist component have */
  const handleUpArrow = () => {
    /*y its a value approximately equal to 2 cards  */
    let y = scrollY + 2 * 210;
    if (y > 0) {
      y = 0;
    }
    setScrollY(y);
  };

  const handleDownArrow = () => {
    let y = scrollY - 2 * 210;

    /*10 items, with 211 height */
    let listH = jobs.length * 210;

    /*handle the final scroll. window.innerHeight -> 83vh -> CarouselArea Height  */
    if (window.innerHeight * 0.83 - listH > y) {
      /*Jobs card height may vary because of the responsivity, so as i don't have a fixed value for the cards, 
      i'll deal with the final scroll in the carousel adding a space equivalent to a card, so it will prevent not displaying the last card 
    */
      y = window.innerHeight * 0.83 - listH;
      setDisablePrev(true);
    }

    setScrollY(y);
  };

  const style = { marginTop: scrollY, transition: "all ease 0.5s" };

  useEffect(() => {
    setScrollY(0);
  }, [jobs]);

  useEffect(() => {
    setDisablePrev(false);
  }, [scrollY]);

  return (
    <Container>
      <Next onClick={handleUpArrow} scrollY={scrollY}>
        <FontAwesomeIcon icon={faArrowUp} />
      </Next>
      <CarouselArea>
        <div style={style}> {children}</div>
        <Up onClick={() => setScrollY(0)}>
          <FontAwesomeIcon icon={faUpLong} />
        </Up>
      </CarouselArea>
      <Prev disablePrev={disablePrev} onClick={handleDownArrow}>
        <FontAwesomeIcon icon={faArrowDown} />
      </Prev>
    </Container>
  );
};
export default Carousel;
