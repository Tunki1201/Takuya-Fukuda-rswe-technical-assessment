"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
const ITEMS = ["ALL", "Tools", "Calculators", "Forms", "GPTs"];
const TabCpn: React.FC = () => {
  const router = useRouter();
  const [active, setActive] = useState(1);
  return [
    <div key={"title"} className="px-[24px] font-bold">
      <div className="flex justify-between py-[16px]">
        <span className="text-[28px]">App Store</span>
        <Image src={"/img/glass.svg"} width={24} height={24} alt="glass" />
      </div>
    </div>,
    <div key={"tab"} className="flex justify-between text-[16px] px-[24px]">
      {ITEMS.map((aItem, key) => (
        <span
          onClick={() => {
            setActive(key);
            router.push(`/appStore/${aItem === "Tools" ? aItem : "other"}`);
          }}
          key={key}
          className={
            active === key
              ? "text-[#6C179A] pt-[8px] pb-[20px] cursor-pointer border-b-[3px] border-[#6C179A] duration-500"
              : "pt-[8px] pb-[20px] cursor-pointer border-b-[3px] border-[white] duration-500 hover:text-[#6C179A] hover:border-[#6C179A]"
          }
        >
          {aItem}
        </span>
      ))}
    </div>,
  ];
};
export default TabCpn;
