<script>
  import { fade, fly } from "svelte/transition";
  import { quintOut, quintIn } from "svelte/easing";
  import { onMount } from "svelte";
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

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    height: 80vh;
    width: 100%;
    justify-content: center;
    align-items: center;
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

  .buttons {
    width: 80%;
    display: flex;
    justify-content: space-evenly;
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
    .buttons {
      flex-direction: column;
    }
  }
</style>

<section>
  <div class="wrapper">
    <div class="logo" id="logo">
      <Logo />
    </div>
    <div class="logoText">
      <LogoText />
    </div>
    {#if condition}
      <div
        in:fade={{ delay: 5500, duration: 1000, easing: quintIn }}
        class="buttons">
        <Button label="Portfolio" />
        <Button label="Contact Me" />
      </div>
    {/if}
  </div>
</section>
