const SectionDivider = () => {
  return (
    <div className="w-full relative py-12 flex items-center justify-center opacity-80 overflow-hidden">
      {/* Widen background gradient line */}
      <div className="absolute w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#7B61FF]/30 to-transparent" />
      
      {/* Inner glowing segment */}
      <div className="absolute w-[30vw] max-w-sm h-[1px] bg-gradient-to-r from-transparent via-[#00F0FF]/50 to-transparent" />
      <div className="absolute w-[15vw] max-w-[200px] h-[2px] bg-gradient-to-r from-transparent via-[#00F0FF]/80 to-transparent blur-[2px]" />
      
      {/* Central data node */}
      <div className="relative z-10 w-2 h-2 rounded-full bg-[#00F0FF] shadow-[0_0_20px_4px_rgba(0,240,255,0.4)] ring-4 ring-background" />
      
      {/* Glowing backdrop */}
      <div className="absolute w-[100px] h-[40px] bg-[#7B61FF]/10 blur-[30px] rounded-full" />
    </div>
  );
};

export default SectionDivider;
