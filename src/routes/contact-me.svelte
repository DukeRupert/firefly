<script>
  import LogoFull from "../components/LogoFull.svelte";
</script>

<style>
  div {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    margin-top: 2em;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
  }
  input {
    margin-bottom: 2em;
    border: 1px solid lightgray;
    padding: 0.5em 0em;
  }

  textarea {
    margin-bottom: 2em;
    border: 1px solid lightgray;
    padding: 0.5em 0em;
  }

  button {
    background-color: var(--buttonBackground);
    border: none;
    border-radius: 15px;
    color: var(--buttonColor);
    padding: 0.5em 1em;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1.5em;
    transition: all 200ms ease-in-out;
    align-self: center;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  button:hover,
  button:active {
    transform: scale(1.15, 1.15);
  }

  .hide {
    display: none;
  }

  .req {
    margin-left: 3px;
    color: #f74545;
  }
</style>

<svelte:head>
  <title>Contact Me</title>
</svelte:head>

<section>
  <div>
    <LogoFull />
    <h1>CONTACT ME</h1>
    <form name="contact" method="POST" data-netlify="true">
      <input type="text" name="name" required />
      <button type="submit">Send</button>
    </form>
  </div>
</section>
