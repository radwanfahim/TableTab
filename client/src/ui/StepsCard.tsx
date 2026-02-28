import { Check } from "lucide-solid";
import { For } from "solid-js";

const StepsCard = (props: any) => {
  const isLucideIcon = () => typeof props.card.icon === "function";

  return (
    <div
      class={`rounded-2xl border border-[rgba(255,255,255,0.1)] transition-colors duration-300 ${props.style}`}
    >
      {props.card.stepNumber && (
        <h1 class="dm-serif-display-regular text-6xl text-[rgba(255,255,255,0.06)]">
          {props.card.stepNumber}
        </h1>
      )}

      {props.card.icon && (
        <div class={` my-5 ${props.iconStyle}`}>
          {isLucideIcon() ? (
            <props.card.icon size={35} color="#e8780c" />
          ) : (
            props.card.icon
          )}
        </div>
      )}

      {props.card.who && (
        <h1 class="text-(--amber) jetbrains-mono text-xs mb-1 uppercase">
          {props.card.who}
        </h1>
      )}

      <p class={`dm-serif-display-regular text-xl ${props.titleStyle}`}>
        {props.card.title}
      </p>

      <p class={`jetbrains-mono text-sm mt-2 ${props.desStyle}`}>
        {props.card.description}
      </p>

      {props.card.listItem && (
        <ul class="mt-5 jetbrains-mono">
          <For each={props.card.listItem}>
            {(item) => (
              <li class="flex items-center gap-2">
                <Check class="text-green-500" />
                <span class="text-zinc-700 text-sm">{item}</span>
              </li>
            )}
          </For>
        </ul>
      )}
    </div>
  );
};

export default StepsCard;
