export const Hero = () => {
  return (
    <>
      <div className="w-full h-[calc(100vh-13vh)] px-6 relative">
        <div className="absolute z-10 w-[96.5%] h-[calc(100vh-13vh)] bg-linear-to-b from-black/30 via-gray-300/5 to-black/75 rounded-2xl"></div>
        <img
          src={"/hero.webp"}
          alt="Hero Imag"
          className="w-full h-full rounded-2xl"
        />
        <div className="absolute bottom-16 left-16 text-white z-20">
          <h1 className="text-white text-5xl font-medium">
            Smart Dubai hotel and
            <br />
            residential investments
          </h1>
          <p className="text-[#DFDDDC] text-base w-2/3 mt-6">
            We develop, manage, and operate premium hotel and residential
            properties for confident, hands-off investing.
          </p>
        </div>
      </div>
    </>
  );
};
