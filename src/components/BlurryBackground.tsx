const BlurryBackground = () => {
  return (
    <div className="absolute inset-0  pointer-events-none  w-full">
      <div className="absolute -top-00 -left-[10%] w-[30vw] h-[20vw] rounded-full bg-[#d1d9cf] blur-[20px]" />

      <div className="absolute top-[5%] -right-[5%] w-[35vw] h-[35vw] rounded-full bg-[#e5b299]/30 blur-[30px]" />

      <div className="absolute bottom-[15%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-[#d4a5a5]/30 blur-[110px]" />

      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
    </div>
  );
};

export default BlurryBackground;
