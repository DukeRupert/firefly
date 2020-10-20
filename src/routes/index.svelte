<script>
  import { fade, fly } from "svelte/transition";
  import { quintOut, quintIn } from "svelte/easing";
  import { onMount } from "svelte";
  import Logo from "../components/Logo.svelte";
  import LogoText from "../components/LogoText.svelte";
  import Button from "../components/Button.svelte";
  import Fire from "../components/Fire.svelte";

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
    padding-top: 5%;
  }

  .logo {
    width: 50%;
    transform: translateX(35%);
    animation: slide 1.5s 4s forwards linear;
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
  <div style="visibility: none; position: absolute;">
    <a href="/recent-work">Work</a>
    <a href="/contact-me">Contact</a>
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
      in:fly={{ delay: 6000, duration: 2000, y: 100, opacity: 0, easing: quintOut }}>
      <h1>Web Development</h1>
      <p>
        We specialize in small business solutions. Whether it is turning a dream
        into a reality or solving a unique challenge we here to help you.
      </p>
      <Button label="Recent Work" route="/recent-work" />
    </div>
    <div
      class="card"
      in:fly={{ delay: 7000, duration: 2000, y: 100, opacity: 0, easing: quintOut }}>
      <h2>About Me</h2>
      <p>
        Father | Husband | USAF Veteran | Coffee Addict | Avid Reader | Scotch
        Drinker | Air Traffic Controller | Serenity
      </p>
      <Button label="Contact Me" route="/contact-me" />
    </div>
  {/if}
</section>
