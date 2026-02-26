import Button from "../../ui/Button";

const Home = () => {
  return (
    <section class="container mx-auto max-w-7xl px-4 sm:px-6 ">
      <div class="grid grid-cols-2 h-screen">
        {/* left side */}
        <div class="self-center">
          {/* title */}
          <h1
            class="text-6xl text-(--ink) dm-serif-display-regular animate-fadeUp"
            style="--delay: 0.1s"
          >
            <span>Table</span>
            <span class="text-(--amber)">Tab</span>
          </h1>
          {/* submenu */}
          <p
            class="mt-2 text-(--text-color) dm-serif-display-regular-italic text-xl animate-fadeUp"
            style="--delay: 0.2s"
          >
            Digital menus for real restaurants.
          </p>

          {/* description */}
          <p
            class="mt-6 text-(--text-color) jetbrains-mono text-lg animate-fadeUp"
            style="--delay: 0.3s"
          >
            QR code menus, live kitchen display, and daily sales reports — for
            small cafes and food stalls who can't afford $200/mo POS systems.
          </p>

          {/* button */}
          <div class="animate-fadeUp" style="--delay: 0.4s">
            <Button />
          </div>
        </div>

        {/* right side */}
        <div class="">
          <video
            class="w-1/2 h-screen object-cover absolute right-0 brightness-50"
            autoplay
            loop
            muted
            src="https://cdn.pixabay.com/video/2024/03/21/205006-926015709_large.mp4"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
