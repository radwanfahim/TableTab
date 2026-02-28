import { For, onCleanup, createEffect } from "solid-js";
import StepsCard from "../../../ui/StepsCard";
import useEmblaCarousel from "embla-carousel-solid";
import "./EverythingIncluded.css";
import Autoplay from "embla-carousel-autoplay";
import EverythingIncludedCard from "../../../api/EverythingIncludedCard";

const EverythingIncluded = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    () => ({ loop: true, align: "center", skipSnaps: false }),
    () => [Autoplay({ delay: 4000 })],
  );

  const tweenStyles = () => {
    const api = emblaApi();
    if (!api) return;

    const slideNodes = api.slideNodes();
    const scrollSnaps = api.scrollSnapList();
    const scrollProgress = api.scrollProgress();

    slideNodes.forEach((slideNode, index) => {
      const snapPosition = scrollSnaps[index] ?? 0;
      let diff = snapPosition - scrollProgress;

      // normalize for looping: keep diff in [-0.5, 0.5]
      if (diff > 0.5) diff -= 1;
      if (diff < -0.5) diff += 1;

      const absDiff = Math.abs(diff);

      const scale = Math.max(1 - absDiff * 0.35, 0.82);
      const opacity = Math.max(1 - absDiff * 1.5, 0.25);

      slideNode.style.transform = `scale(${scale})`;
      slideNode.style.opacity = `${opacity}`;
      slideNode.style.transition = "transform 0.4s ease, opacity 0.4s ease";
    });
  };

  createEffect(() => {
    const api = emblaApi();
    if (!api) return;

    tweenStyles();

    api.on("scroll", tweenStyles);
    api.on("reInit", tweenStyles);
    api.on("select", tweenStyles);

    onCleanup(() => {
      api.off("scroll", tweenStyles);
      api.off("reInit", tweenStyles);
      api.off("select", tweenStyles);
    });
  });

  return (
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 mt-20">
      {/* text */}
      <div data-aos="fade-up" data-aos-duration="1500">
        <h1 class="text-(--amber) text-[14px] uppercase jetbrains-mono">
          Everything included
        </h1>
        <p class="text-5xl text-(--ink) font-bold mt-4 dm-serif-display-regular">
          One flat price. Every <br /> feature.
        </p>
        <p class="text-(--ink) mt-4 jetbrains-mono font-light">
          No transaction fees. No tier gates. No surprises. Everything TableTab
          <br />
          offers is included in your $25/month.
        </p>
      </div>

      {/* carousel */}
      <div data-aos="fade-up" data-aos-duration="2500">
        <div class="embla">
          <div class="embla__viewport" ref={emblaRef}>
            <div class="embla__container">
              <For each={EverythingIncludedCard}>
                {(card) => (
                  <div class="embla__slide">
                    <StepsCard
                      card={card}
                      style="bg-white px-10 py-5 mt-10 h-[20em]"
                      titleStyle="text-(--amber)"
                      desStyle="text-(--text-color)"
                    />
                  </div>
                )}
              </For>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EverythingIncluded;
