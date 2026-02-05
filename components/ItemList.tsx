"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ItemList() {

  const containerRef = useRef(null);

  //GSAP 
  useEffect(() => {
  const cards = gsap.utils.toArray(".card");

  cards.forEach((card) => {
    gsap.fromTo(
      card,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          scroller: containerRef.current, // 👈 IMPORTANT
          start: "top 85%",
        },
      }
    );
  });
}, []);

  return (

    <div
      ref={containerRef}
      className="
        absolute
        right-[90px]
        top-[190px]
        w-[999px]
        h-[797px]
        overflow-y-auto
        scroll-behavior: smooth;
        [scrollbar-width:none]
        [-ms-overflow-style:none]
      "
    >

      <style>
        {`div::-webkit-scrollbar {display:none}`}
      </style>

      {[1,2,3,4,5].map((n)=>(
        
        <div
          key={n}
          className="
            card   /* 👈 IMPORTANT */
            relative
            w-[999px]
            h-[620px]
            overflow-hidden
          "
        >

          {/* H IMAGE */}
          <img
            src="/assets/dashboard/H.png"
            className="
              absolute
              left-[300px]
              top-[140px]
              w-[180px]
              z-[5]
              opacity-50
              mix-blend-lighten
              blur-[1px]
            "
          />

          {/* TEXT */}
          <div className="
            absolute
            left-[1px]
            top-[260px]
            w-[600px]
            text-white
            z-[30]
          ">
            <h3 className="text-[30px] font-semibold leading-[37px]">
              HealNova: Where Technology
              <br/>Meets Healthcare
            </h3>

            <div className="flex gap-4 mt-3 text-[#7F85B0] text-[13px]">
              <span>AI Diagnostics</span>
              <span>Doctor Access</span>
              <span>Health Vault</span>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <img src="/assets/dashboard/plus.svg" className="w-[10px]"/>
              <span className="text-[13px]">WATCH VIDEO</span>
            </div>
          </div>

          {/* IMAGE CARD */}
          <div className="
            absolute
            -right-[90px]
            top-[120px]
            w-[690px]
            h-[405px]
            bg-[#1A1E4F]
            overflow-hidden
            group
          ">
            <img
              src="/assets/dashboard/preview.png"
              className="
                w-full
                h-full
                object-left
                mt-[25px]
                opacity-30
                transition
                duration-500
                group-hover:opacity-100
                group-hover:scale-110
              "
            />
          </div>

        </div>

      ))}

    </div>
  );
}
