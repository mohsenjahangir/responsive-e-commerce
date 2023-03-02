import FireSvg from "../../../../public/svg/fireIcon.svg";
import DiscountSvg from "../../../../public/svg/discountIcon.svg";
import MenuIconSvg from "../../../../public/svg/menuIcon.svg";
import LogoSvg from "../../../../public/svg/logoIcon.svg";
import SearchSvg from "../../../../public/svg/searchIcon.svg";
import CartSvg from "../../../../public/svg/cartIcon.svg";
import ThreeLineSvg from "../../../../public/svg/threelineIcon.svg";
import LogOutSvg from "../../../../public/svg/logoutIcon.svg";

function Header() {
  const navItems: {
    title: String;
    link: String;
    icon: any;
    id: Number;
  }[] = [
    {
      title: "تخفیف دارها",
      link: "دسته بندی",
      icon: <DiscountSvg />,
      id: 3,
    },

    {
      title: "پرفروش ترین",
      link: "دسته بندی",
      icon: <FireSvg />,
      id: 2,
    },
    {
      title: "دسته بندی ها",
      link: "دسته بندی",
      icon: <MenuIconSvg />,
      id: 1,
    },
  ];
  return (
    <div className=" mt-14">
      <div className="absolute top-0 right-0 lg:invisible mt-8 mr-16 grid grid-cols-2"><h1 className=" mt-3 mr-1 text-red-600  font-black">ویتسل</h1><LogoSvg/></div>
      <div className=" shadow mt-2  rounded-full  h-20 flex justify-between ">
        <div className="flex my-3 sm:ml-5  mobile:ml-8 sm:mr-0 ">
          <div className="flex justify-between">
            
            <button className=" bg-red-600 rounded-full 2xl:w-52 lg:w-28 text-white h-14 invisible lg:visible">
              ثبت نام/ورود
            </button>
            <div className=" -ml-20 mt-4 lg:invisible md:-mr-12 lg:-mr-0"><LogOutSvg/> </div>
            <div className=" lg:bg-slate-100 md:ml-16  sm:mr-0 mobile:-mr-6  w-12 pt-4 pl-3 rounded-full">
              <CartSvg />
            </div>
            <div
              className="relative  mb-3 xl:w-96 md:w-96 lg:w-56 sm:w-80 mobile:w-44 lg:h-10 h-full bg-slate-200 rounded-full ml-8 mt-1"
              data-te-input-wrapper-init
            >
              <input
                type="text"
                className="peer block w-full  rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput2"
              />
              <label
                htmlFor="exampleFormControlInput2"
                className="flex justify-between  pointer-events-none absolute lg:top-1 top-2 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-800 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-500 dark:peer-focus:text-neutral-500"
              >
                <small className=" flex justify-between xl:visible invisible"><SearchSvg />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;....جستجوی محصولات</small>
                <small className=" flex justify-between visible xl:invisible absolute"><SearchSvg />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         ...جستجو</small>
              </label>
            </div>
          </div>
        </div>
        <div className="flex my-5 mr-8">
          {navItems.map((item) => (
            <div className="invisible lg:visible inline-grid 2xl:mr-8  lg:-mr-10  grid-cols-2 mt-2 gap-3">
              {item.title}
              <div className=" mt-1">{item.icon}</div>
            </div>
          ))}
          <div className=" lg:invisible mt-2 -mr-10"><ThreeLineSvg/></div>
          <div className="invisible lg:visible">
            <LogoSvg />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;


// import Image from "next/image";
// import Link from "next/link";
// import LogoSvg from "../../../../public/svg/logoIconBig.svg";
// import SendSvg from "../../../../public/svg/sendIcon.svg";
// import PhoneSvg from "../../../../public/svg/phoneIcon.svg";
// import AddressSvg from "../../../public/svg/addressIcon.svg";
// import InstagramSvg from "../../../../public/svg/instagramIcon.svg";
// import TelegramSvg from "../../../../public/svg/telegramIcon.svg";
// import WhatsupSvg from "../../../../public/svg/whatsupIcon.svg";
// import StandardPhoto from "../../../../public/photos/standard.png";
// import UnitedPhoto from "../../../../public/photos/united.png";
// import StandardSamllPhoto from "../../../../public/photos/essmall.png";
// import UnitedSmallPhoto from "../../../../public/photos/unitedmall.png";
// import ZarrinPhoto from "../../../../public/photos/zarrinPal.png";
// import ExbeitPhoto from "../../../../public/photos/exebit.png";

// function Footer() {
//   return (
//     <div className="w-full  lg:flex lg:flex-row-reverse text-end lg:justify-between  mt-52     ">
//       <div className=" invisible lg:visible w-96">
//         <div className="flex flex-row-reverse">
//           <LogoSvg />
//         </div>
//         <h1 className=" font-black">ویتسل</h1>
//         <text>
//           صرافی هفت ارز پلتفرم ایمن و سریع <br />
//           برای انجام معاملات ارز دیجیتال در بستری مطمئن
//         </text>
//       </div>
//       <div className=" md:flex mobile:grid grid-cols-2 lg:w-1000   mobile:justify-between mobile:flex-row-reverse   ">
//         <div className="">
//           <h1 className=" text-slate-900 font-black">با ویتسل</h1>
//           <h6 className=" text-slate-700 mt-2">درباره ما</h6>
//           <h6 className=" text-slate-700 mt-2">تماس با ما</h6>
//           <h6 className=" text-slate-700 mt-2">حریم خصوصی</h6>
//           <h6 className=" text-slate-700 mt-2">شرایط بازگشت کالا</h6>
//         </div>
//         <div className="">
//           <h1 className=" text-slate-900 font-black">محصولات ویتسل</h1>
//           <h6 className=" text-slate-700 mt-2">کالای دیجیتال</h6>
//           <h6 className=" text-slate-700 mt-2">سوپر مارکت</h6>
//           <h6 className=" text-slate-700 mt-2">گوشی موبایل</h6>
//           <h6 className=" text-slate-700 mt-2">ابزارآلات</h6>
//           <h6 className=" text-slate-700 mt-2"> لوازم تحریر</h6>
//         </div>
//         <div className="col-start-1 col-end-3 mobile:mt-8 md:mt-0">
//           <h1 className=" text-slate-900 font-black"> ارتباط با ویتسل</h1>
//           <h6 className=" text-slate-700 mt-3 flex justify-end lg:grid grid-cols-2 lg:-mr-48">
//             mo7seven@yahoo.com&nbsp;
//             <SendSvg />{" "}
//           </h6>
//           <h6 className=" text-slate-700 mt-3 flex justify-end lg:grid grid-cols-2 lg:-mr-48">
//             +989364358506&nbsp;
//             <PhoneSvg />
//           </h6>
//           <h6 className=" text-slate-700 mt-3">
//             تهران خیابان آزادی نرسیده به میدان <br />
//             انقلاب
//           </h6>
//           <div className=" text-slate-700 mt-5  flex flex-row-reverse gap-6 ">
//             <WhatsupSvg />
//             <TelegramSvg />
//             <InstagramSvg />
//           </div>
//         </div>
//       </div>
//       <div className=" grid grid-cols-5 gap-3 lg:gap-0  lg:mt-0  lg:grid-cols-none">
//         <div className=" bg-slate-100  rounded-2xl lg:invisible">
//           <Image src={StandardSamllPhoto} alt="" />
//         </div>
//         <div className=" bg-slate-100  rounded-2xl lg:mt-3 mt lg:invisible">
//           <Image src={UnitedSmallPhoto} alt="" />
//         </div>
//         <div className=" bg-slate-100  rounded-2xl lg:invisible ">
//           <Image src={ZarrinPhoto} alt="" />
//         </div>
//         <div className=" bg-slate-100  rounded-2xl lg:invisible">
//           <Image src={ExbeitPhoto} alt="" />
//         </div>
//         <div className=" bg-slate-100  rounded-2xl invisible lg:visible">
//           <Image src={StandardPhoto} alt="" />
//         </div>
//         <div className=" bg-slate-100  rounded-2xl lg:mt-3 mt invisible lg:visible">
//           <Image src={UnitedPhoto} alt="" />
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Footer;