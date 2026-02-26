import Button from "../../ui/Button";

const Home = () => {
  return (
    <section class="container mx-auto max-w-7xl px-4 sm:px-6">
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
        QR code menus, live kitchen display, and daily sales reports — for small
        cafes and food stalls who can't afford $200/mo POS systems.
      </p>

      {/* button */}
      <div class="animate-fadeUp" style="--delay: 0.4s">
        <Button />
      </div>
    </section>
  );
};

export default Home;
