import Slider from "react-slick";
import Image from "next/image";
import { useRef } from "react";
import styles from "./Banner.module.css";
import slides from "@/public/data/banner.json";

const Banner = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className={styles.banner}>
      <div className={styles.banner__content}>
        <div className={styles.bannerSlider}>
          <div
            className={styles.arrowLeft}
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <Image
              src="/icons/left-arrow.png"
              alt="Previous"
              width={40}
              height={40}
            />
          </div>

          <div
            className={styles.arrowRight}
            onClick={() => sliderRef.current?.slickNext()}
          >
            <Image
              src="/icons/right-arrow.png"
              alt="Next"
              width={40}
              height={40}
            />
          </div>

          <Slider {...settings} ref={sliderRef}>
            {slides.map((slide, index) => (
              <div key={index} className={styles.slide}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={slide.img}
                    alt={slide.heading}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.textOverlay}>
                  <h3>{slide.heading}</h3>
                  <p>{slide.text}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Banner;
