import Button from "../../ui/Button";
import { MoveRight } from "lucide-solid";
import { For } from "solid-js";
import Divider from "../../ui/Divider";
import Badge from "../../ui/Badge";
import "./Style.css";

const Header = () => {
  const btnData = {
    text: "Start free trial",
    icon: MoveRight,
    style: "",
    onClick: () => {
      console.log("Button clicked");
    },
  };

  return (
    <div
      class="relative h-screen flex items-center overflow-hidden"
      style="background-color: #faf6ef;"
    >
      {/* Spinning rings — top left */}
      <div
        class="absolute -top-32 -left-32 w-130 h-130 shape-a"
        style="z-index:0;"
      >
        <div
          class="spin-slow w-full h-full rounded-full shimmer"
          style="border: 1.5px solid rgba(232,120,12,0.3);"
        />
        <div
          class="spin-rev absolute inset-8 rounded-full shimmer"
          style="border: 1px solid rgba(232,120,12,0.2); animation-delay:-5s;"
        />
        <div
          class="spin-slow absolute inset-16 rounded-full shimmer"
          style="border: 1px dashed rgba(232,120,12,0.12); animation-delay:-10s;"
        />
      </div>

      {/* Amber blob — top left */}
      <div
        class="absolute -top-10 -left-10 w-72 h-72 rounded-full shape-a"
        style="background: radial-gradient(circle, rgba(232,120,12,0.15) 0%, transparent 70%); filter:blur(40px); z-index:0;"
      />

      {/* Spinning rings — bottom right */}
      <div
        class="absolute -bottom-40 -right-40 w-150 h-150 shape-b"
        style="z-index:0;"
      >
        <div
          class="spin-rev w-full h-full rounded-full shimmer"
          style="border: 1.5px solid rgba(232,120,12,0.25);"
        />
        <div
          class="spin-slow absolute inset-10 rounded-full shimmer"
          style="border: 1px solid rgba(232,120,12,0.15); animation-delay:-8s;"
        />
        <div
          class="spin-rev absolute inset-20 rounded-full shimmer"
          style="border: 1px dashed rgba(232,120,12,0.1); animation-delay:-3s;"
        />
      </div>

      {/* Amber blob — bottom right */}
      <div
        class="absolute -bottom-20 -right-20 w-80 h-80 rounded-full shape-b"
        style="background: radial-gradient(circle, rgba(232,120,12,0.13) 0%, transparent 70%); filter:blur(50px); z-index:0;"
      />

      {/* Floating triangle — top right */}
      <div class="absolute top-16 right-24 shape-c shimmer" style="z-index:0;">
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
          <polygon
            points="45,4 86,82 4,82"
            stroke="rgba(232,120,12,0.3)"
            stroke-width="1.2"
            fill="rgba(232,120,12,0.05)"
          />
        </svg>
      </div>

      {/* Floating rotated square — bottom left */}
      <div
        class="absolute bottom-24 left-20 shape-b shimmer"
        style="z-index:0; animation-delay:-3s;"
      >
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
          <rect
            x="5"
            y="5"
            width="60"
            height="60"
            rx="6"
            stroke="rgba(232,120,12,0.28)"
            stroke-width="1.2"
            fill="rgba(232,120,12,0.04)"
            transform="rotate(15 35 35)"
          />
        </svg>
      </div>

      {/* Diamond — mid left */}
      <div
        class="absolute top-1/2 left-12 -translate-y-1/2 shape-a shimmer"
        style="z-index:0; animation-delay:-4s;"
      >
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <rect
            x="3"
            y="3"
            width="38"
            height="38"
            rx="3"
            stroke="rgba(232,120,12,0.35)"
            stroke-width="1.2"
            fill="none"
            transform="rotate(45 22 22)"
          />
        </svg>
      </div>

      {/* Diamond — mid right */}
      <div
        class="absolute top-1/3 right-16 shape-c shimmer"
        style="z-index:0; animation-delay:-7s;"
      >
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <rect
            x="2"
            y="2"
            width="32"
            height="32"
            rx="2"
            stroke="rgba(232,120,12,0.28)"
            stroke-width="1"
            fill="none"
            transform="rotate(45 18 18)"
          />
        </svg>
      </div>

      {/* Small circle outline — top center-left */}
      <div
        class="absolute top-28 left-[22%] shape-c shimmer"
        style="z-index:0; animation-delay:-2s;"
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle
            cx="14"
            cy="14"
            r="12"
            stroke="rgba(232,120,12,0.25)"
            stroke-width="1"
          />
        </svg>
      </div>

      {/* Small circle outline — bottom center-right */}
      <div
        class="absolute bottom-32 right-[22%] shape-a shimmer"
        style="z-index:0; animation-delay:-9s;"
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <circle
            cx="11"
            cy="11"
            r="9"
            stroke="rgba(232,120,12,0.22)"
            stroke-width="1"
            stroke-dasharray="3 3"
          />
        </svg>
      </div>

      {/* Dot cluster — left */}
      <div
        class="absolute left-[8%] top-[38%] flex flex-col gap-5"
        style="z-index:0;"
      >
        <span
          class="dot-1 w-1.5 h-1.5 rounded-full inline-block"
          style="background:rgba(232,120,12,0.45);"
        />
        <span
          class="dot-2 w-1   h-1   rounded-full inline-block"
          style="background:rgba(232,120,12,0.28);"
        />
        <span
          class="dot-3 w-2   h-2   rounded-full inline-block"
          style="background:rgba(232,120,12,0.22);"
        />
      </div>

      {/* Dot cluster — right */}
      <div
        class="absolute right-[8%] top-[45%] flex flex-col gap-4"
        style="z-index:0;"
      >
        <span
          class="dot-4 w-2   h-2   rounded-full inline-block"
          style="background:rgba(232,120,12,0.25);"
        />
        <span
          class="dot-5 w-1   h-1   rounded-full inline-block"
          style="background:rgba(232,120,12,0.38);"
        />
        <span
          class="dot-1 w-1.5 h-1.5 rounded-full inline-block"
          style="background:rgba(232,120,12,0.18);"
        />
      </div>

      {/* Center glow */}
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-50 shimmer"
        style="background: radial-gradient(ellipse, rgba(232,120,12,0.08) 0%, transparent 70%); filter:blur(60px); z-index:0;"
      />

      {/* ── Content ── */}
      <div
        class="relative container mx-auto max-w-5xl px-4 sm:px-6 text-center"
        style="z-index:1;"
      >
        {/* Badge */}
        <div class="mb-8 animate-fadeUp" style="--delay:0s">
          <Badge />
        </div>

        {/* Title */}
        <h1
          class="text-7xl sm:text-8xl font-bold tracking-tight dm-serif-display-regular animate-fadeUp"
          style="--delay:0.1s; color:#1a1410;"
        >
          <span>Table</span>
          <span
            class="text-transparent bg-clip-text"
            style="background-image: linear-gradient(135deg, #e8780c, #f5a54a);"
          >
            Tab
          </span>
        </h1>

        {/* Tagline */}
        <p
          class="mt-4 dm-serif-display-regular-italic text-2xl animate-fadeUp"
          style="--delay:0.2s; color:rgba(26,20,16,0.45);"
        >
          Digital menus for real restaurants.
        </p>

        {/* Description */}
        <p
          class="mt-6 mx-auto max-w-xl jetbrains-mono text-base leading-relaxed animate-fadeUp"
          style="--delay:0.3s; color:rgba(26,20,16,0.38);"
        >
          QR code menus, live kitchen display, and daily sales reports — for
          small cafes and food stalls who can't afford $200/mo POS systems.
        </p>

        {/* CTA */}
        <div
          class="flex justify-center mt-7 animate-fadeUp"
          style="--delay:0.4s"
        >
          <For each={[btnData]}>{(btn) => <Button {...btn} />}</For>
        </div>

        <Divider style="my-5 bg-(--amber)" />

        {/* Pricing */}
        <div
          class="animate-fadeUp inline-flex items-baseline gap-2"
          style="--delay:0.5s"
        >
          <span
            class="text-5xl font-bold dm-serif-display-regular"
            style="color:#1a1410;"
          >
            $25
          </span>
          <span
            class="jetbrains-mono text-sm tracking-wider"
            style="color:rgba(26,20,16,0.35);"
          >
            / month, flat. No surprises.
          </span>
        </div>

        {/* Trust badges */}
        <div
          class="mt-4 flex justify-center gap-8 animate-fadeUp"
          style="--delay:0.6s"
        >
          {["No credit card required", "Cancel anytime", "Easy setup"].map(
            (item) => (
              <span
                class="flex items-center gap-1.5 text-xs jetbrains-mono"
                style="color:rgba(26,20,16,0.35);"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 6l3 3 5-5"
                    stroke="#e8780c"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                {item}
              </span>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
