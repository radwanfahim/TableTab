import Autoplay from "embla-carousel-autoplay";
import StepsCard from "../../../ui/StepsCard";
import HomeBgBreathingAnimation from "../../Shared/HomeBgBreathingAnimation";
import "./HowItWorksStyle.css";
import useEmblaCarousel from "embla-carousel-solid";
import Setting from "../../../svg/Setting";
import { For } from "solid-js";

const HowItWorks = () => {
  const [emblaRef] = useEmblaCarousel(
    () => ({
      align: "center",
      loop: true,
    }),
    () => [Autoplay({ delay: 5000 })],
  );

  const setupCards = [
    {
      stepNumber: "01",
      icon: Setting,
      who: "Owner",
      title: "Set up your menu",
      description:
        "Add items, prices, and categories via web dashboard in 15 minutes. No technical skills needed.",
    },
    {
      stepNumber: "02",
      icon: "",
      who: "TableTab",
      title: "QR codes generated",
      description:
        "Unique QR code per table. Print on paper, put on table. Done.",
    },
    {
      stepNumber: "03",
      icon: "",
      who: "Customer",
      title: "Scan & order",
      description:
        "Opens on their phone instantly. No app download, no login, no friction.",
    },
    {
      stepNumber: "04",
      icon: "",
      who: "Kitchen",
      title: "Order appears live",
      description:
        "Instant notification on your kitchen display. Any tablet or old laptop works in Chrome.",
    },
    {
      stepNumber: "02",
      icon: "",
      who: "Owner",
      title: "See your sales data",
      description:
        "Daily revenue, top items, peak hours — auto-generated every day.",
    },
  ];

  return (
    <div class="bg-(--ink) py-85 relative overflow-hidden">
      <HomeBgBreathingAnimation />
      {/* container */}
      <div class="container mx-auto max-w-5xl px-4 sm:px-6">
        <div class="absolute z-10 top-20">
          {/* text */}
          <div data-aos="zoom-out-up" data-aos-duration="1500">
            <h1 class="text-(--amber) text-[14px] uppercase jetbrains-mono">
              How it works
            </h1>
            <p class="text-5xl text-(--cream) font-bold mt-4 dm-serif-display-regular">
              Five steps. Zero <br /> friction.
            </p>
          </div>

          {/* card */}
          <div class="mt-10 w-[80%]">
            <div class="embla">
              <div class="embla__viewport" ref={emblaRef}>
                <div
                  class="embla__container"
                  data-aos="fade-up"
                  data-aos-duration="2500"
                >
                  <For each={setupCards}>
                    {(card) => (
                      <div class="embla__slide">
                        <StepsCard
                          card={card}
                          style="bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.1)] hover:bg-[rgba(220,97,97,0.06)] hover:border-[rgba(232,120,12,0.3)] h-[18em]"
                        />
                      </div>
                    )}
                  </For>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
