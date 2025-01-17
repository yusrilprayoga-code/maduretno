"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[200vh] sm:h-[300vh] overflow-hidden mb-12 sm:mb-24 antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="hidden sm:block"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-4 sm:space-x-20 mb-10 sm:mb-20 overflow-x-auto sm:overflow-x-visible">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-10 sm:mb-20 space-x-4 sm:space-x-20 overflow-x-auto sm:overflow-x-visible">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-4 sm:space-x-20 overflow-x-auto sm:overflow-x-visible">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
      <div className="sm:hidden grid grid-cols-2 gap-4 px-4">
        {products.map((product) => (
          <MobileProductCard product={product} key={product.title} />
        ))}
      </div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-6xl relative mx-auto py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 px-4 w-full left-0 top-0">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold dark:text-white">
        Selamat Datang <br className="hidden sm:block" />
        di <span className="text-lime-800">Desa Maduretno</span>
      </h1>
      <p className="max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-6 md:mt-8 dark:text-neutral-200">
        Maduretno adalah desa yang terletak di Kecamatan Buluspesantren, Kabupaten Kebumen, Jawa Tengah. Maduretno memiliki potensi yang sangat besar dalam bidang pertanian dan peternakan.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-48 sm:h-64 md:h-80 lg:h-96 w-40 sm:w-60 md:w-80 lg:w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail || "/placeholder.svg"}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white text-sm sm:text-base md:text-lg">
        {product.title}
      </h2>
    </motion.div>
  );
};

export const MobileProductCard = ({
  product,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
}) => {
  return (
    <div className="group/product h-48 relative">
      <Link href={product.link} className="block">
        <Image
          src={product.thumbnail || "/placeholder.svg"}
          height="300"
          width="300"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full bg-black opacity-0 group-hover/product:opacity-60 transition-opacity"></div>
      <h2 className="absolute bottom-2 left-2 text-white text-sm opacity-0 group-hover/product:opacity-100 transition-opacity">
        {product.title}
      </h2>
    </div>
  );
};

