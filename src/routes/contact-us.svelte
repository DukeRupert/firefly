<script>
  import LogoFull from "../components/LogoFull.svelte";
</script>

<style>
  div {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 1em;
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    margin-top: 2em;
    text-align: center;
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

  /* For tablet screens */
  @media (min-width: 480px) {
    div {
      margin-top: 0;
      padding: 10% 20%;
    }
  }

  /* For larger screens */
  @media (min-width: 1400px) {
    div {
      flex-direction: row;
      padding: 5%;
    }

    form {
      box-sizing: border-box;
      padding: 2%;
    }
  }
</style>

<svelte:head>
  <title>Contact Me</title>
</svelte:head>

<section>
  <div>
    <LogoFull />

    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field">
      <h1>CONTACT US</h1>
      <input type="hidden" name="form-name" value="contact" />
      <div hidden aria-hidden="true" class="hide">
        <label>
          Don’t fill this out if you're human:
          <input name="bot-field" />
        </label>
      </div>
      <label>Name<span class="req">*</span></label>
      <input type="text" name="name" required />
      <label>Email<span class="req">*</span></label>
      <input type="email" name="email" required />
      <label>Tell us about your project / problem<span
          class="req">*</span></label>
      <textarea rows="6" type="text" name="message" required />
      <label>What does your timeline look like?</label>
      <textarea rows="3" type="text" name="timeline" />
      <label for="budget">Tell us about your budget</label>
      <select id="budget" name="budget">
        <option value="less than 3">$3000 or less</option>
        <option value="3 to 10">$3000 to $10,000</option>
        <option value="10 to 20">$10,000 to $20,000</option>
        <option value="greater than 20">more than $20,000</option>
      </select>
      <button type="submit">Send</button>
    </form>
  </div>
</section>
