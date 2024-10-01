import Link from "next/link";

export default function HeroSection() {
  return (
    <div className=" max-w-[1300px]  px-5 w-full lg:pt-24 pt-[136px] pb-12 lg:pb-0 flex lg:flex-row flex-col items-center mx-auto justify-end gap-[26px] lg:gap-14 ">
      <div className="w-full text-5xl text-center lg:text-start lg:text-[85px] font-semibold leading-[90%] tracking-tighter">
        Designing with purpose, solving with impact.
      </div>
      <div className="w-full flex flex-col justify-start gap-[26px]">
        <p className="text-base text-white/60 lg:block hidden ">
          {` At BLAZZE, we craft innovative, problem-solving designs that not only
          look stunning but deliver real results. With a focus on user
          experience and robust solutions, we help brands stand out and grow by
          creating digital products that engage, inspire, and convert. Let's
          build something exceptional together.`}
        </p>
        <p className="text-base text-white/60 block text-center  lg:hidden">
          {` At BLAZZE, we craft innovative, problem-solving designs that not only
          look stunning but deliver real results. With a focus on user
          experience and robust solutions.`}
        </p>
        <div className="flex gap-[26px] items-center justify-center lg:justify-start">
          <Link
            href={"/Contact"}
            className="px-5 py-[10px] bg-white rounded-full  text-black text-[15px] font-semibold"
          >
            Let’s Connect
          </Link>
          <Link
            href={"/Contact"}
            key={"Contact"}
            className=" text-base font-normal capitalize"
          >
            {"Have A Project In Mind"}
          </Link>
        </div>
      </div>
    </div>
  );
}
