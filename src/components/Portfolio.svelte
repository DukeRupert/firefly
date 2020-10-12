<script>
  // your script goes here
</script>

<style>
  /* your styles go here */
  .work {
    padding-top: 2em;
    padding-bottom: 2em;
    background-color: #2a2727;
    width: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .card {
    width: 40%;
    max-width: 400px;
    margin: 5%;
  }

  .break {
    flex-basis: 100%;
    height: 0;
    padding: 0;
  }

  img {
    width: 100%;
    border-radius: 10%;
  }
</style>

<div class="work">
  <h2 style="color: white">Recent Work</h2>
  <div class="break" />
  <!-- break -->
  <div class='card'>
			<img src='/KagenLogo.jpg' alt='Kagen Cofee and Crepes logo' />
		</div>
  <div class="card">
    <img src="RidgeLogo.jpg" alt="The Ridge Bible Church logo" />
  </div>
</div>
