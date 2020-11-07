<script>
  import ClientCard from "../components/ClientCard.svelte";
  import Button from "../components/Button.svelte";
</script>

<style>
  section {
    background-color: var(--background);
  }

  @media (max-width: 480px) {
    section {
      text-align: center;
    }
  }
</style>

<svelte:head>
  <title>Recent Work</title>
</svelte:head>

<section>
  <h1>Here is some of our recent work.</h1>
  <ClientCard
    title="OneSleepCompany"
    services="UI, UX, development, performance, support"
    link="https://onesleepcompany.com/"
    src="oscLogo900.png"
    alt="One Sleep Company logo featuring the outline of a sleeping woman." />
  <ClientCard
    title="Kagen's Coffee & Crepes"
    services="UI, UX, design, development, performance, support"
    link="https://kagenandco.com/"
    src="logoKCC.svg"
    alt="Kagen's Coffee and Crepes logo featuring a rooster." />
  <ClientCard
    title="The Ridge Bible Church"
    services="UI, UX, design, development, performance, support"
    link="https://theridgebiblechurch.com/"
    src="LogoRidge.svg"
    alt="The ridge bible church logo featuring a red ridgeline" />
  <Button label="Contact Us" route="contact-us" />
</section>
