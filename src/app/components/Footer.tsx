import Image from "next/image";
import Link from "next/link";
import BlazzeFullLogo from "@/assets/icons/blazzeFullIcon.svg";

export default function Footer() {
  return (
    <div className="flex w-full flex-col gap-[26px] lg:gap-[44px]">
      <div className="w-full max-w-[1300px] lg:px-5 p-[26px] gap-6 flex-col flex mx-auto">
        <Image
          className="max-w-[68px] mt-5 ml-1"
          alt="LOGO "
          src={BlazzeFullLogo}
        ></Image>
        <div className="w-full flex flex-col lg:flex-row gap-16  justify-between">
          <div className="flex flex-col h-full gap-16 lg:w-[65%]">
            <p className="text-5xl text-start lg:text-[85px] font-bold leading-[90%] -tracking-[4px] lg:min-w-[560px]">
              Ready ? Chat to one of the team and let’s get this going.
            </p>
            <Link
              href={"/Contact"}
              className="px-5 lg:px-10 py-[10px] lg:py-5 lg:text-[32px] w-fit bg-white rounded-full  text-black text-[15px] font-semibold"
            >
              Work With US
            </Link>
          </div>
          <div className="w-full lg:w-[30%] flex lg:gap-[52px] items-start lg:justify-end justify-start py-4 text-xl lg:text-2xl font-normal capitalize">
            <div className="flex flex-col gap-6 lg:min-w-[164px] w-full  ">
              {["work", "service", "testimonials"].map((link) => {
                return (
                  <Link href={link} key={link}>
                    {link}
                  </Link>
                );
              })}
            </div>
            <div className="flex flex-col gap-6  lg:min-w-[164px] w-full">
              {["FAQs", "about", "Contact"].map((link) => {
                return (
                  <Link href={link} key={link}>
                    {link}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  bg-[#171717] lg:p-[10px] px-[26px] py-[10px] ">
        <div className="max-w-[1300px] mx-auto w-full lg:px-5 py-[24px] lg:py-[26px] flex justify-between items-end gap-[26px]">
          <div className="flex flex-col lg:gap-3 gap-2 w-full">
            <p className="lg:text-base text-sm font-normal leading-3">
              Business Inquiries
            </p>
            <Link
              className=" lg:text-xl text-sm font-medium text-white/60 leading-3"
              href={"email"}
            >
              askus@blazze.studio
            </Link>
          </div>
          <div className="flex gap-6 ">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.7266 20.7759H16.7266V13.7769C16.7266 11.8569 15.8796 10.7856 14.3606 10.7856C12.7076 10.7856 11.7266 11.9019 11.7266 13.7769V20.7759H7.72656V7.77588H11.7266V9.23779C11.7266 9.23779 12.9816 7.03564 15.8096 7.03564C18.6386 7.03564 20.7266 8.76198 20.7266 12.334V20.7759ZM3.16856 5.69678C1.81956 5.69678 0.726562 4.59484 0.726562 3.23584C0.726562 1.87784 1.81956 0.775879 3.16856 0.775879C4.51656 0.775879 5.60956 1.87784 5.60956 3.23584C5.61056 4.59484 4.51656 5.69678 3.16856 5.69678ZM0.726562 20.7759H5.72656V7.77588H0.726562V20.7759Z"
                fill="white"
              />
            </svg>
            <svg
              width="32"
              height="21"
              viewBox="0 0 32 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.6973 4.03309H28.525V1.7915H20.6973V4.03309ZM24.5558 8.53504C22.8096 8.53504 21.4835 9.61683 21.3558 11.6157H27.6204C27.1958 9.24343 26.1419 8.53504 24.5558 8.53504ZM24.8004 17.8064C26.4127 17.8064 27.5958 16.7879 27.8373 15.9299H31.2281C30.2589 19.0331 28.2573 20.7759 24.6635 20.7759C20.0773 20.7759 17.5035 17.514 17.5035 13.1857C17.5035 2.99267 32.2112 2.62723 31.4727 14.1375H21.3558C21.4543 16.4748 22.4189 17.8064 24.8004 17.8064ZM9.54195 17.3579C11.3927 17.3579 12.6881 16.646 12.6881 14.7249C12.6881 12.7324 11.5435 11.8681 9.62195 11.8681H4.98503V17.3579H9.54195ZM9.29733 8.87158C10.8373 8.87158 11.9004 8.15474 11.9004 6.48952C11.9004 4.73534 10.6635 4.19385 8.97272 4.19385H4.98503V8.87158H9.29733ZM9.84041 0.775879C13.4881 0.775879 16.0235 1.98157 16.0235 5.73306C16.0235 7.59054 15.2773 8.97478 13.3927 9.90749C15.805 10.6241 16.9466 12.5057 16.9466 14.9781C16.9466 18.9028 13.8343 20.7759 10.1112 20.7759H0.726562V0.775879H9.84041Z"
                fill="white"
              />
            </svg>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.5 4.77588C0.5 2.56674 2.29086 0.775879 4.5 0.775879H16.5C18.7091 0.775879 20.5 2.56674 20.5 4.77588V16.7759C20.5 18.985 18.7091 20.7759 16.5 20.7759H4.5C2.29086 20.7759 0.5 18.985 0.5 16.7759V4.77588ZM4.5 2.77588C3.39543 2.77588 2.5 3.67131 2.5 4.77588V16.7759C2.5 17.8805 3.39543 18.7759 4.5 18.7759H16.5C17.6046 18.7759 18.5 17.8805 18.5 16.7759V4.77588C18.5 3.67131 17.6046 2.77588 16.5 2.77588H4.5ZM10.5 7.77588C8.8431 7.77588 7.5 9.11898 7.5 10.7759C7.5 12.4328 8.8431 13.7759 10.5 13.7759C12.1569 13.7759 13.5 12.4328 13.5 10.7759C13.5 9.11898 12.1569 7.77588 10.5 7.77588ZM5.5 10.7759C5.5 8.01446 7.73858 5.77588 10.5 5.77588C13.2614 5.77588 15.5 8.01446 15.5 10.7759C15.5 13.5373 13.2614 15.7759 10.5 15.7759C7.73858 15.7759 5.5 13.5373 5.5 10.7759ZM16 6.77588C16.8284 6.77588 17.5 6.10431 17.5 5.27588C17.5 4.44745 16.8284 3.77588 16 3.77588C15.1716 3.77588 14.5 4.44745 14.5 5.27588C14.5 6.10431 15.1716 6.77588 16 6.77588Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
