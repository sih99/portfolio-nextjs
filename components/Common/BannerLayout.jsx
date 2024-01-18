const BannerLayout = ({ children }) => {
  return (
    <div
      className="relative  w-full h-80 bg-fixed z-10"
      //
      style={{
        background: "url(images/background2.jpeg)",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
      }}
    >
      <div
        className="absolute inset-0 z-20 flex flex-col items-center justify-center w-full h-full"
        // bg-gradient-to-t from-MidNightBlack
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
