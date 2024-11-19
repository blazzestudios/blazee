import ListOfWorks from "./_ListOfWork";
import OurWork from "../_OurWork";
import Footer from "../components/Footer";

export default function Work() {
  return (
    <div className="w-full h-full flex flex-col gap-11  overflow-y-scroll ">
      <div className="min-h-16 w-full lg:block hidden" />
      <div className=" max-w-[1300px]   px-5 w-full lg:pt-24 pt-[136px] pb-12 lg:pb-0 flex lg:flex-row flex-col items-start mx-auto justify-between gap-[26px] lg:gap-14 ">
        <div className="flex flex-col gap-[26px]">
          <div className="w-full text-5xl text-center lg:text-start lg:text-[85px] font-semibold leading-[90%] tracking-tighter">
            WORK
          </div>
          <p className="text-2xl text-white/60 block lg:text-start text-center max-w-[500px]">
            We design disruptive websites, habitual apps, and captivating brands
            that drive success for our clients.
          </p>
        </div>
      </div>
      <ListOfWorks />
      <OurWork des />
      <Footer />
    </div>
  );
}
