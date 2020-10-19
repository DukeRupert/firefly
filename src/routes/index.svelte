<script>
  import { fade, fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import Logo from "../components/Logo.svelte";
  import LogoText from "../components/LogoText.svelte";
</script>

<style>
  section {
    background-color: black;
  }

  .wrapper {
    display: flex;
    height: 100vh;
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
    /* animation: reveal 2s 4s forwards linear; */
  }

  @keyframes slide {
    from {
      transform: translateX(35%);
    }
    to {
      transform: translateX(0);
    }
  }
  @media (min-width: 480px) {
  }
</style>

<section>
  <div class="wrapper">
    <div class="logo">
      <Logo />
    </div>
    <div class="logoText">
      <LogoText />
    </div>
  </div>
</section>
