"use client";

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { MorphingTextDemo } from "@/components/text_moon";


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Software/Embedded Systems Developer",
    "Machine Learning Engineer",
    "Philosophy Enthusiast",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={`water-ink-style ${
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }`}
                >
                  <MorphingTextDemo/>
                  <span></span>
                  <h1>
                    {`Hi! I'm Yangyang `}
                    <span
                      className="txt-rotate"
                      dataPeriod="100"
                      data-rotate='[ "Software/Embedded Systems Developer", "Machine Learning Engineer", "Philosophy Enthusiast"]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p className="water-ink-text">
                    In contrast to what the media desperately endeavor to
                    convince us, the enemy today is not the fundamentalist" but
                    the cynic-even a certain form of "deconstructionism"
                    partakes in the universal cynicism by proposing a more
                    sophisticated version of the Cartesian "provisional
                    morality": "In theory (in the academic practice of writing)
                    deconstruct as much as you will and whatever -you will, but
                    in your everyday life, play the predominant social game!"
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <Image
                    src="/img/ft.png" // 使用公共文件夹路径
                    alt="Footer Image 1"
                    width={500}
                    height={300}
                    priority
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};