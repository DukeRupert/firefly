<script>
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import Logo from "../components/Logo.svelte";
  import LogoText from "../components/LogoText.svelte";
  import Button from "../components/Button.svelte";

  // Animations do not play on initial load by default. Condition change used to trigger button animation.
  let condition = false;
  setTimeout(() => (condition = true));
</script>

<style>
  section {
    background-color: var(--background);
  }

  p {
    font-size: 1.5em;
  }

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 2% 10%;
  }

  .logo {
    width: 50%;
    transform: translateX(35%);
    animation: slide 1.5s 3s forwards linear;
  }

  .logoText {
    width: 50%;
    transform: translateX(-20%);
  }

  .card {
    width: 100%;
    box-sizing: border-box;
    padding: 2em 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .housekeeping {
    display: none;
    visibility: hidden;
    position: absolute;
  }

  @keyframes slide {
    from {
      transform: translateX(35%);
    }
    to {
      transform: translateX(0);
    }
  }
  @media (max-width: 480px) {
    section {
      text-align: center;
    }

    p {
      font-size: 1em;
    }

    .wrapper {
      padding: 0;
      padding-top: 10%;
    }
    .card {
      box-sizing: border-box;
      padding: 10% 5%;
    }
  }
</style>

<svelte:head>
  <title>Firefly Software Engineering - Web Developer</title>
</svelte:head>

<section>
  <!-- a naive and simple way to hide a div -->
  <div class="housekeeping">
    <a href="/recent-work">Work</a>
    <a href="/contact-us">Contact</a>
  </div>
  <!-- end of silly div -->
  <div class="wrapper">
    <div class="logo" id="logo">
      <Logo />
    </div>
    <div class="logoText">
      <LogoText />
    </div>
  </div>
  {#if condition}
    <div
      class="card"
      in:fly={{ delay: 5000, duration: 2000, y: 100, opacity: 0, easing: quintOut }}>
      <h1>Web Development</h1>
      <p>
        We specialize in small business solutions. Whether it is turning a dream
        into a reality or solving a unique challenge we here to help you.
      </p>
      <Button label="Contact Us" route="/contact-us" />
      <Button label="Recent Work" route="/recent-work" />
    </div>
    <!-- <div
      class="card"
      in:fly={{ delay: 5500, duration: 2000, y: 100, opacity: 0, easing: quintOut }}>
      <h2>About Me</h2>
      <p>
        Father | Husband | USAF Veteran | Coffee Addict | Avid Reader | Scotch
        Drinker | Air Traffic Controller | Serenity
      </p>

      <Button label="Recent Work" route="/recent-work" />
    </div> -->
  {/if}
</section>
