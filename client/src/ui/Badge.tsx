const Badge = (props: { text: string; style?: string; spanStyle?: string }) => {
  return (
    <div
      class={` items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase ${props.style || ""}`}
    >
      <span
        class={`w-1.5 h-1.5 rounded-full animate-pulse inline-block ${props.spanStyle || ""}`}
      />
      {props.text}
    </div>
  );
};

export default Badge;
