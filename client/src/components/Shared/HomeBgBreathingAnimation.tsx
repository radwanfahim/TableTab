const HomeBgBreathingAnimation = () => {
  return (
    <div>
      {/* Layer 1 — slow breathing mesh */}
      <div
        class="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 10% 50%, rgba(232,120,12,0.35) 0%, transparent 55%), radial-gradient(ellipse at 90% 20%, rgba(45,106,79,0.28) 0%, transparent 45%)",
          animation: "breathe 9s ease-in-out infinite",
        }}
      />

      {/* Layer 2 — roaming amber orb */}
      <div
        class="absolute blur-[120px] rounded-full opacity-25"
        style={{
          width: "55%",
          height: "70%",
          top: "5%",
          left: "-15%",
          background:
            "radial-gradient(circle, rgba(232,120,12,0.8) 0%, transparent 65%)",
          animation: "roamA 14s ease-in-out infinite",
        }}
      />

      {/* Layer 3 — roaming green orb */}
      <div
        class="absolute blur-[100px] rounded-full opacity-20"
        style={{
          width: "45%",
          height: "65%",
          bottom: "-10%",
          right: "-10%",
          background:
            "radial-gradient(circle, rgba(45,106,79,0.9) 0%, transparent 65%)",
          animation: "roamB 18s ease-in-out infinite",
        }}
      />

      {/* Layer 4 — tight sharp highlight */}
      <div
        class="absolute blur-[60px] rounded-full opacity-15"
        style={{
          width: "25%",
          height: "35%",
          top: "40%",
          left: "40%",
          background:
            "radial-gradient(circle, rgba(255,160,50,0.9) 0%, transparent 70%)",
          animation: "roamC 11s ease-in-out infinite",
        }}
      />

      {/* Layer 5 — scanline shimmer */}
      <div
        class="absolute inset-0 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.012) 3px, rgba(255,255,255,0.012) 4px)",
          animation: "scanlines 6s linear infinite",
        }}
      />
    </div>
  );
};

export default HomeBgBreathingAnimation;
