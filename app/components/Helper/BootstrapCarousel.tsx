import React from 'react'
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Bootstrap.module.css";

type Props = {}

const BootstrapCarousel = (props: Props) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item key={item.id} className={styles.itemP} interval={4000}>
        <img src={item.imageUrl} alt="slides" />
        <Carousel.Caption className={styles.caption}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
          <button className="btn btn-danger">Visit Docs</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default BootstrapCarousel