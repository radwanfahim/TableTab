const Badge = () => {
  return (
    <div
      class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase"
      style="background:rgba(232,120,12,0.07); border:1px solid rgba(232,120,12,0.18); color:rgba(26,20,16,0.5);"
    >
      <span
        class="w-1.5 h-1.5 rounded-full animate-pulse inline-block"
        style="background:#e8780c;"
      />
      Now open for early access
    </div>
  );
};

export default Badge;
