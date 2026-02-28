import StepsCard from "../../../ui/StepsCard";
import HomeBgBreathingAnimation from "../../Shared/HomeBgBreathingAnimation";
import "./HowItWorksStyle.css";
import { For } from "solid-js";
import useEmblaCarousel from "embla-carousel-solid";
import Autoplay from "embla-carousel-autoplay";
import HowItWorksCards from "../../../api/HowItWorksCards";

const HowItWorks = () => {
  const [emblaRef] = useEmblaCarousel(
    () => ({ loop: true, align: "center", skipSnaps: false }),
    () => [Autoplay({ delay: 5000 })],
  );

  return (
    <div class="bg-(--ink) relative py-30 overflow-hidden">
      <HomeBgBreathingAnimation />
      {/* container */}
      <div class="container mx-auto max-w-7xl px-4 sm:px-6">
        <div class="">
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
          <div class="mt-10 w-full" data-aos="fade-up" data-aos-duration="2500">
            <div class="embla">
              <div class="embla__viewport" ref={emblaRef}>
                <div class="embla__container">
                  <For each={HowItWorksCards}>
                    {(card) => (
                      <div class="embla__slide">
                        <StepsCard
                          card={card}
                          style="bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.1)] hover:bg-[rgba(220,97,97,0.06)] hover:border-[rgba(232,120,12,0.3)] h-[18em] w-[100%] p-6 "
                          titleStyle="text-white"
                          desStyle="text-[rgba(255,255,255,0.5)]"
                          iconStyle="w-10 h-10 flex items-center justify-center"
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
