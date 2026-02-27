const StepsCard = (props: any) => {
  return (
    <div
      class={`rounded-2xl p-6 border border-[rgba(255,255,255,0.1)] transition-colors duration-300 ${props.style}`}
    >
      <h1 class="dm-serif-display-regular text-6xl text-[rgba(255,255,255,0.06)]">
        {props.card.stepNumber}
      </h1>
      <div class="w-10 h-10 flex items-center justify-center my-5">
        {props.card.icon && <props.card.icon />}
      </div>
      <h1 class="text-(--amber) jetbrains-mono text-xs mb-1 uppercase">
        {props.card.who}
      </h1>
      <p class="dm-serif-display-regular text-xl text-white">
        {props.card.title}
      </p>
      <p class="jetbrains-mono text-[rgba(255,255,255,0.5)] text-sm mt-2">
        {props.card.description}
      </p>
    </div>
  );
};

export default StepsCard;
