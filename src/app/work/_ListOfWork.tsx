export default function ListOfWorks() {
  return (
    <div className="w-full border-y-[2px] border-[#1D1D1D] ">
      <div className="max-w-[1300px] px-5 flex flex-col py-12 gap-[26px] mx-auto">
        <p className="text-base text-white/50 tracking-tighter">Case studies</p>
        <div className="flex flex-col p-5">
          {[1, 2, 3, 4, 5].map((list, i) => {
            return (
              <div
                key={i}
                className="flex justify-between items-center min-h-[66px] border-white/20 hover:border-y-[2px] cursor-pointer"
              >
                <p className=" text-2xl font-bold tracking-tighter w-full">
                  THE KARNANI
                </p>
                <div className="flex gap-11 items-center text-white/50 text-sm">
                  <p className="min-w-[150px]">UI/UX, Development</p>
                  <p className="min-w-[130px]">PropTech</p>
                  <p className="min-w-[130px]">England</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
