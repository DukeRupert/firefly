<script>
  import { fade, fly } from "svelte/transition";
  import Logo from "../components/Logo.svelte";

  // Animations do not play on initial load by default. Condition change used to trigger logo animation.
  let condition = false;
  setTimeout(() => (condition = true));
</script>

<style>
  section {
    background-image: url("/nightSky1920.jpg");
    background-size: cover;
    background-repeat: no-repeat;
  }
  @media (min-width: 480px) {
  }
</style>

<section>
  <Logo fill="#f27329" />
</section>
