import {
  Swiper as SwiperType,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import PhonePhoto from "../../../../public/photos/phonePhoto.png";
import NavIcon from "../../../../public/svg/leftdirectionIcongray.svg";
import ShoesPhoto from "../../../../public/photos/shoes.png";
import DiscountSvg from "../../../../public/svg/discountIcon.svg";
import Bottom1 from "../../../../public/photos/bottom1.png";
import Bottom2 from "../../../../public/photos/bottom2.png";

function Discount() {
  const [_, setInit] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const shoesItems: {
    price2: string;
    price: string;
    image: any;
    id: Number;
    off: String;
  }[] = [
    {
      id: 1,
      image: ShoesPhoto,
      price: "4,343.000تومان ",
      off: "34%",
      price2: "4,343.000تومان ",
    },
    {
      id: 2,
      image: ShoesPhoto,
      price: "4,343.000تومان ",
      off: "34%",
      price2: "4,343.000تومان ",
    },
    {
      id: 3,
      image: ShoesPhoto,
      price: "4,343.000تومان ",
      off: "34%",
      price2: "4,343.000تومان ",
    },
    {
      id: 4,
      image: ShoesPhoto,
      price: "4,343.000تومان ",
      off: "34%",
      price2: "4,343.000تومان ",
    },
    {
      id: 5,
      image: ShoesPhoto,
      price: "4,343.000تومان ",
      off: "34%",
      price2: "4,343.000تومان ",
    },
    {
      id: 6,
      image: ShoesPhoto,
      price: "4,343.000تومان ",
      off: "34%",
      price2: "4,343.000تومان ",
    },
    {
      id: 7,
      image: ShoesPhoto,
      price: "4,343.000تومان ",
      off: "34%",
      price2: "4,343.000تومان ",
    },
    {
      id: 8,
      image: ShoesPhoto,
      price: "4,343.000تومان ",
      off: "34%",
      price2: "4,343.000تومان ",
    },
    {
      id: 9,
      image: ShoesPhoto,
      price: "4,343.000تومان ",
      off: "34%",
      price2: "4,343.000تومان ",
    },
    {
      id: 10,
      image: ShoesPhoto,
      price: "4,343.000تومان ",
      off: "34%",
      price2: "4,343.000تومان ",
    },
    {
      id: 11,
      image: ShoesPhoto,
      price: "4,343.000تومان ",
      off: "34%",
      price2: "4,343.000تومان ",
    },
    {
      id: 12,
      image: ShoesPhoto,
      price: "4,343.000تومان ",
      off: "34%",
      price2: "4,343.000تومان ",
    },
    {
      id: 13,
      image: ShoesPhoto,
      price: "4,343.000تومان ",
      off: "34%",
      price2: "4,343.000تومان ",
    },
    {
      id: 14,
      image: ShoesPhoto,
      price: "4,343.000تومان ",
      off: "34%",
      price2: "4,343.000تومان ",
    },
    {
      id: 15,
      image: ShoesPhoto,
      price: "4,343.000تومان ",
      off: "34%",
      price2: "4,343.000تومان ",
    },
    {
      id: 16,
      image: ShoesPhoto,
      price: "4,343.000تومان ",
      off: "34%",
      price2: "4,343.000تومان ",
    },
    {
      id: 17,
      image: ShoesPhoto,
      price: "4,343.000تومان ",
      off: "34%",
      price2: "4,343.000تومان ",
    },
    {
      id: 18,
      image: ShoesPhoto,
      price: "4,343.000تومان ",
      off: "34%",
      price2: "4,343.000تومان ",
    },
  ];
  const text = "< مشاهده ی همه";
  return (
    <>
      <div className=" flex justify-between gap-4 items-center mb-20 truncate lg:mt-20 xl:mt-7 2xl:-mt-5 mt-7 ">
        <h1>{text}</h1>
        <fieldset className="flex-grow h-px mt-2 bg-gray-400"></fieldset>
        <div className="flex flex-row gap-4">
          تخفیف های ویتسل
          <div className=" mt-1">
            <DiscountSvg />
          </div>
        </div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={6}
        navigation={{ nextEl: nextRef.current, prevEl: prevRef.current }}
        // pagination={{ clickable: true, type: "bullets" }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        onInit={() => setInit(true)}
        className=" bg-slate-100 h-60 rounded-2xl -mt-10 invisible lg:visible "
      >
        {shoesItems.map((item) => (
          <SwiperSlide className="">
            <Image className="  " src={item.image} alt="" />
            <h1 className=" font-black">{item.price}</h1>
            <div className=" grid grid-cols-2 mt-5">
              <h2 className=" line-through text-slate-500">{item.price2}</h2>
              <h1 className=" bg-red-500 rounded-full w-12 p-1">{item.off}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        navigation={{ nextEl: nextRef.current, prevEl: prevRef.current }}
        // pagination={{ clickable: true, type: "bullets" }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        onInit={() => setInit(true)}
        className=" bg-slate-100 h-60 rounded-2xl -mt-60 lg:invisible"
      >
        {shoesItems.map((item) => (
          <SwiperSlide className="">
            <Image className="  " src={item.image} alt="" />
            <h1 className=" font-black">{item.price}</h1>
            <div className=" grid grid-cols-2 mt-5">
              <h2 className=" line-through text-slate-500">{item.price2}</h2>
              <h1 className=" bg-red-500 rounded-full w-12 p-1">{item.off}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className=" flex justify-between relative -top-40">
        <button ref={prevRef} className=" z-50  ">
          <NavIcon />
        </button>
        <button ref={nextRef} className="z-50 rotate-180 ">
          <NavIcon />
        </button>
      </div>
      <div className=" lg:flex lg:justify-between gap-4 -mt-12">
        <div>
          <Image src={Bottom1} alt="" className="w-1200 rounded-2xl" />
        </div>
        <div className="">
          <div className=" lg:mt-0 mt-2">
            <Image src={Bottom2} alt="" className="w-1200 rounded-2xl" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Discount;
