export default function ContactCard() {
  return (
    <div className="lg:min-w-[393px] lg:h-fit  aspect-square flex  flex-col border-white/10 border-[2px] p-9 justify-between ">
      <div className="w-full flex justify-between">
        <div className="min-w-11 aspect-square rounded-full bg-white"></div>
        <div className="py-3 px-6 text-sm font-semibold border-[1px] border-white rounded-full">
          15 MINS
        </div>
      </div>
      <div className="flex flex-col w-full gap-[26px] leading-[26px] tracking-tighter">
        <div className="flex flex-col gap-3 ">
          <p className=" max-w-[228px] font-bold text-2xl ">
            Book an Intro Call With Us
          </p>
          <p className="  w-full text-white/60 text-base">{`We'll discuss your project and how we can assist you.`}</p>
        </div>
        <button className="py-3 px-6 text-xl font-semibold bg-white text-black">
          BOOK A CALL
        </button>
      </div>
    </div>
  );
}
