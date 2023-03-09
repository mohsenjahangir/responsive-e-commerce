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
import NavIcon from "../../../../public/svg/leftdirectionIcongray.svg";
import ShoesPhoto from "../../../../public/photos/shoes.png";
import StarIcon from "../../../../public/svg/starIcon.svg";
import BottomPhoto5 from "../../../../public/photos/bottom5.png";
import BottomPhoto4 from "../../../../public/photos/bottom4.png";
import BottomPhoto3 from "../../../../public/photos/bottom3.png";
import PhoneNav from "../../../../public/photos/phonenav.png";
function MostSells() {
  const [_, setInit] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const text = "< مشاهده ی همه";
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
      price2: "4,343.000",
    },
    {
      id: 2,
      image: ShoesPhoto,
      price: "4,343.000تومان ",
      off: "34%",
      price2: "4,343.000",
    },
    {
      id: 3,
      image: ShoesPhoto,
      price: "4,343.000تومان ",
      off: "34%",
      price2: "4,343.000",
    },
    {
      id: 4,
      image: ShoesPhoto,
      price: "4,343.000تومان ",
      off: "34%",
      price2: "4,343.000",
    },
    {
      id: 5,
      image: ShoesPhoto,
      price: "4,343.000تومان ",
      off: "34%",
      price2: "4,343.000",
    },
    {
      id: 6,
      image: ShoesPhoto,
      price: "4,343.000تومان ",
      off: "34%",
      price2: "4,343.000",
    },
    {
      id: 7,
      image: ShoesPhoto,
      price: "4,343.000تومان ",
      off: "34%",
      price2: "4,343.000",
    },
    {
      id: 8,
      image: ShoesPhoto,
      price: "4,343.000تومان ",
      off: "34%",
      price2: "4,343.000",
    },
    {
      id: 9,
      image: ShoesPhoto,
      price: "4,343.000تومان ",
      off: "34%",
      price2: "4,343.000",
    },
    {
      id: 10,
      image: ShoesPhoto,
      price: "4,343.000تومان ",
      off: "34%",
      price2: "4,343.000",
    },
    {
      id: 11,
      image: ShoesPhoto,
      price: "4,343.000تومان ",
      off: "34%",
      price2: "4,343.000",
    },
    {
      id: 12,
      image: ShoesPhoto,
      price: "4,343.000تومان ",
      off: "34%",
      price2: "4,343.000",
    },
    {
      id: 13,
      image: ShoesPhoto,
      price: "4,343.000تومان ",
      off: "34%",
      price2: "4,343.000",
    },
    {
      id: 14,
      image: ShoesPhoto,
      price: "4,343.000تومان ",
      off: "34%",
      price2: "4,343.000",
    },
    {
      id: 15,
      image: ShoesPhoto,
      price: "4,343.000تومان ",
      off: "34%",
      price2: "4,343.000",
    },
    {
      id: 16,
      image: ShoesPhoto,
      price: "4,343.000تومان ",
      off: "34%",
      price2: "4,343.000",
    },
    {
      id: 17,
      image: ShoesPhoto,
      price: "4,343.000تومان ",
      off: "34%",
      price2: "4,343.000",
    },
    {
      id: 18,
      image: ShoesPhoto,
      price: "4,343.000تومان ",
      off: "34%",
      price2: "4,343.000",
    },
  ];
  return (
    <>
      <div className=" flex justify-between gap-4 items-center mb-20 truncate   lg:mt-14 lg:-top-0  relative -top-96 -mt-96  md:-top-96 md:-mt-540">
        <h1>{text}</h1>
        <fieldset className="flex-grow h-px bg-gray-400 mt-1"></fieldset>
        <div className="flex flex-row gap-4 mt-2">
          تخفیف های ویتسل
          <div className="  bg-slate-200 w-8 h-8 pl-1 pt-1 rounded-full">
            <StarIcon />
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
              <h1 className=" bg-red-500 rounded-full w-12 p-1 ">{item.off}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="lg:invisible relative -top-96">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation={{ nextEl: nextRef.current, prevEl: prevRef.current }}
          // pagination={{ clickable: true, type: "bullets" }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          onInit={() => setInit(true)}
          className=" bg-slate-100 h-60 rounded-2xl -mt-60 "
        >
          {shoesItems.map((item) => (
            <SwiperSlide className="">
              <Image className="" src={item.image} alt="" />
              <h1 className=" font-black">{item.price}</h1>
              <div className=" grid grid-cols-2 mt-5">
                <h2 className=" line-through text-slate-500">{item.price2}</h2>
                <h1 className=" bg-red-500 rounded-full w-12 p-1">
                  {item.off}
                </h1>
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
      </div>

      <div className=" grid grid-cols-2 lg:mt-0 relative -mt-96 -top-14">
        <div className=" mr-5">
          <div>
            <Image src={BottomPhoto4} alt="" className=" w-1000 rounded-2xl" />
          </div>
          <div className=" mt-6">
            <Image src={BottomPhoto5} alt="" className=" w-1000 rounded-2xl" />
          </div>
        </div>
        <div>
          <Image src={BottomPhoto3} alt="" className=" w-1000 rounded-2xl" />
        </div>
      </div>
      <div className="mr-30 w-1200 mt-14">
        <div>
          <Image src={PhoneNav} alt=""/>
        </div>
      </div>
    </>
  );
}

export default MostSells;