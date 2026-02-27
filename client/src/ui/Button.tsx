const Button = (props: any) => {
  return (
    <div>
      <button
        class={`px-6 py-3 text-white bg-(--amber) rounded-lg hover:bg-(--button-hover) hover:shadow-[0_4px_6px_rgba(232,120,12,0.4)] flex items-center gap-2 transition-all duration-300  cursor-pointer transform hover:scale-105 open-sans ${props.style || ""}`}
      >
        <h1 class="font-semibold">{props.text}</h1>
        {props.icon && <props.icon />}
      </button>
    </div>
  );
};

export default Button;
