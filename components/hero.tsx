export const Hero = () => {
  return (
    <>
      <div className="w-full h-[calc(100vh-13vh)] px-7 relative">
        <div className="absolute z-10 w-[97.1%] h-[calc(100vh-13vh)] bg-linear-to-b from-black/10 via-gray-300/5 to-black/15 rounded-2xl"></div>
        <img
          src={"/hero.webp"}
          alt="Hero Imag"
          className="w-full h-full rounded-2xl"
        />
      </div>
    </>
  );
};
