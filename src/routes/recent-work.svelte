<script>
  import { fade, fly } from "svelte/transition";
  import { quintOut, quintIn } from "svelte/easing";
  import ClientCard from "../components/ClientCard.svelte";

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

  @media (max-width: 480px) {
    section {
      text-align: center;
    }

    p {
      font-size: 1em;
    }
  }
</style>

<svelte:head>
  <title>Firefly Software Engineering - Recent Work</title>
</svelte:head>

<section>
  <h1>Here is some of my recent work.</h1>
  <ClientCard
    title="OneSleepCompany"
    tech="WordPress"
    link="https://onesleepcompany.com/" />
  <ClientCard
    title="Kagen's Coffee & Crepes"
    tech="Svelte, HTML, CSS, JavaScript"
    link="https://kagenandco.com/" />
  <ClientCard
    title="The Ridge Bible Church"
    tech="Svelte, HTML, CSS, JavaScript"
    link="https://theridgebiblechurch.com/" />
  <Button label="Contact Me" route="contact-me" />
</section>
