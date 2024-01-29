import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import "./embla.css";

type PropType = {
  slides: { img: string; title: string; content: string }[];
  options?: EmblaOptionsType;
  left?: boolean;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container text-[14px]">
          {slides.map((aSlide, index) => (
            <div
              className={props.left ? "embla__slide_popular" : "embla__slide"}
              key={index}
            >
              <Image
                width={321}
                height={140}
                className={aSlide.img}
                src={aSlide.img}
                alt="Your alt text"
              />
              <div className="mt-[8px] mb-[4px] font-bold">{aSlide.title}</div>
              <div>{aSlide.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
