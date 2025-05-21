"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

export default function ImageScroller() {
  const images = ["1.jpeg", "2.jpeg", "3.jpeg"];
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className="overflow-x-auto no-scrollbar w-full"
      style={{ scrollBehavior: "smooth" }}
    >
      <div className="flex gap-4 w-max px-2 py-2">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-44 h-44 relative shrink-0 rounded-xl border border-neutral-300 dark:border-neutral-500 overflow-hidden"
          >
            <Image src={"/" + image} alt={image} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
