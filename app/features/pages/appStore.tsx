"use client";
import Image from "next/image";
import EmblaCarousel from "@/components/carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
const OPTIONS: EmblaOptionsType = {
  align: "center",
  containScroll: false,
};
const OPTIONS_POPULAR: EmblaOptionsType = {
  align: "start",
  containScroll: false,
};
const SLIDES_FEATURED = [
  {
    img: "/img/featured/1.svg",
    title: "FOCUS",
    content: "Search across hundreds of new launches",
  },
  {
    img: "/img/featured/2.svg",
    title: "Market Trends",
    content: "Your trusted market analysis tool",
  },
];
const SLIDES_POPULAR = [
  {
    img: "/img/popular/1.svg",
    title: "Evaluation",
    content: "Get multiple valuations",
  },
  {
    img: "/img/popular/2.svg",
    title: "Latest Transactions",
    content: "Discover the latest...",
  },
  {
    img: "/img/popular/1.svg",
    title: "Gains & Losses",
    content: "Find record setters",
  },
];
function AppStorePage() {
  return (
    <div>
      <div className="border-[#DFDFE1] border-t-[2px] py-[24px]">
        <div className="px-[24px] flex items-center  pb-[12px]">
          <div className="text-[20px] font-bold">Featured</div>
          <Image src={"/img/expand.svg"} width={20} height={20} alt="expand" />
        </div>
        <section>
          <EmblaCarousel slides={SLIDES_FEATURED} options={OPTIONS} />
        </section>
      </div>
      <div className="border-[#DFDFE1] border-t-[2px] py-[24px]">
        <div className="px-[24px] flex items-center  pb-[12px]">
          <div className="text-[20px] font-bold">Popular</div>
          <Image src={"/img/expand.svg"} width={20} height={20} alt="expand" />
        </div>
        <section className="ml-[24px]">
          <EmblaCarousel
            slides={SLIDES_POPULAR}
            left
            options={OPTIONS_POPULAR}
          />
        </section>
      </div>
    </div>
  );
}

export default AppStorePage;
