const BannerLayout = ({ children }) => {
  return (
    <div
      className="relative  w-full h-[260px] bg-fixed z-10"
      //
      style={{
        background: "url(images/background.jpeg)",
        // backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // backgroundAttachment: "fixed",
        // backgroundBlendMode: "overlay",
      }}
    >
      {/* <div className="w-48 h-52 relative hidden md:block">
        <img className="absolute top-8 w-full h-full" src="images/hongsungin3.png" alt="emoji" />
      </div> */}
      <div
        className="absolute inset-0 z-20 flex flex-col items-center justify-center w-full h-full"
        //bg-gradient-to-t from-MidNightBlack
      >
        <div
          className="bg-Black/5 w-full h-full"
          //backdrop-blur-sm
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default BannerLayout;
