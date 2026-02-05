"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [show, setShow] = useState(false);

  useEffect(() => setShow(true), []);

  return (
    <div className="relative w-[1920px] h-[1080px] bg-black text-white overflow-hidden">

      
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/50" />

      {/* NAVBAR */}
      <header className="relative z-20 w-full px-[66px] py-6 flex justify-between items-center text-sm tracking-wide">
        <div className="opacity-90">MATCHBEST GROUP</div>

        <div className="flex gap-6 opacity-80">
          <span className="uppercase">CONNECT WITH US</span>
          <span className="opacity-40">—</span>
          <span>9876-43210 | 12345-67890</span>
        </div>
      </header>

      {/* MAIN SECTION */}
      <div className="relative z-10 flex items-center h-[calc(100%-90px)] px-[66px]">

        {/* LEFT TEXT */}
        <div
          className={`w-[600px] transition-all duration-700 ${
            show ? "opacity-100" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="font-syne font-semibold text-[96px] leading-[100%]">
            Platforms <br/>
            Designed to <br/>
            Solve Real <br/>
            Business <br/>
            Needs..
          </h1>

          <div className="mt-12 w-[300px] h-[8px] blur-xl rounded-full"/>
        </div>

       
        {/* RIGHT SIDE */}
        {/* Frame */}
     <div
  className="absolute"
  style={{
    width: "999px",
    height: "797px",
    top: "187px",
    left: "872px",
  }}
>
    {/* list */}
    <div
  className="absolute flex flex-col gap-6 "
  style={{
    width: "1121.62px",
    top: "27.21px",
    left: "-109.42px",
    paddingTop: "62.31px",
  }}
>
{/* Item:margin */}
  <div
  style={{
    width: "1121.62px",
    height: "579.74px",
    paddingTop: "87.24px",
    paddingBottom: "87.24px",
  }}
  className="box-border"
>
    {/* Item */}
  <div
    className=""
    style={{
      width: "100%",
      height: "405.27px",
      paddingLeft: "93.45px",
    }}
  >
    {/* COMPONENT 3 (actual card) */}
      <div
        className=" rounded-xl"
        style={{
          width: "1028.16px",
          height: "405.27px",
        }}
      >
        {/* LINK */}
  <a
    href="#"
    className="
      flex
      flex-row
      justify-between
      items-center
      w-[1043.74px]
      h-[405.27px]
     
    "
  >
   {/* HEADER:MARGIN */}
  <div
    className="
      flex
      flex-col
      w-[332.33px]
      pl-[15.58px]
      h-[226.79px]
     
    "
  >
    {/* HEADER */}
    <div
      className="
      relative
        flex flex-col
        w-[447.22px]
        pt-[87.24px]
        gap-[21.81px]
       
      "
    >
        
      <div className="relative z-10">
  <h2 className="
   text-white
    font-semibold
    text-[28px]
    leading-[37.3px]
    tracking-[-0.39px]
  ">
    HealNova: Where Technology <br />
    Meets Healthcare
  </h2>
</div>
   {/* CATEGORY LIST */}
  <div className="
    flex
    items-center
    gap-8
    text-[14px]
    text-gray-400
  ">
    <span>AI Diagnostics</span>
    <span>Doctor Access</span>
    <span>Health Vault</span>
  </div>
  {/* WATCH VIDEO (container*/}
    <div className="
      flex
      items-center
      gap-3
      mt-2
    ">
      <img 
        src="/assets/dashboard/plus.svg"
        className="w-3 h-3"
        alt="plus"
      />

      <span className="
        text-[13px]
        text-[#B6B9D6]
        tracking-widest
        uppercase
      ">
        WATCH VIDEO
      </span>
    </div>
{/* H.png */}
<div className="absolute -right-[40px] -top-[40px] w-[206px] h-[192px] opacity-40 pointer-events-none z-10">
  <img
    src="/assets/dashboard/H.png"
    className="w-full h-full object-contain"
    alt="H"
  />
</div>



  
  

    </div>

  </div>
  {/* MARGIN */}
{/* RIGHT SIDE WRAPPER */}
{/* RIGHT SIDE WRAPPER */}
<div className="relative w-[1028px] h-[405px] group">

  {/* PREVIEW IMAGE */}
  <img
    src="/assets/dashboard/preview.png"
    alt="figure"
    className="
      absolute
      w-[590px]
      h-[405px]
      right-0
      top-0
      object-cover
      opacity-30
      transition-all duration-500 ease-out
      group-hover:opacity-100
      group-hover:scale-105
      group-hover:brightness-110
      z-20
    "
  />

  

  {/* HealNova text */}
  <div className="relative z-30">
    {/* HealNova text yaha */}
  </div>

</div>



  </a>
      </div>
  </div>
  



</div>



</div>

</div>





      </div>

      
    </div>
  );
}
