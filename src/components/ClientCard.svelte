<script>
  export let link = "";
  export let title = "FixMe";
  export let tech = "FixMe";
</script>

<style>
  h2 {
    color: var(--blue);
    padding-bottom: 0;
  }

  p {
    font-size: 1.5em;
  }

  .card {
    width: 100%;
    box-sizing: border-box;
    padding: 2em 10%;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.2em;
    }
    p {
      font-size: 1em;
    }
    .card {
      box-sizing: border-box;
      padding: 10% 5%;
    }
  }
</style>

<div class="card">
  <a href={link}>
    <h2>{title}</h2>
  </a>
  <p>Built with: {tech}</p>
</div>
