<script>
	import { fade, fly } from 'svelte/transition';

	// Animations do not play on initial load by default. Condition change used to trigger logo animation.
	let condition = false;
	setTimeout(() => condition = true)
</script>

<style>
	div {
		height: 92vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
	}

	button {
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 50vw;
		padding: 0.5em;
		border-radius: 40px;
		border: 2px #497cbf solid;
		background-color: white;
		font-size: 1.5em;
		font-weight: bold;
		color: #497cbf;
		transition: all 0.3s ease;
	  }
	  
	button:focus {
		background-color: #497cbf;
		color: white;
		outline: none;
	}

	.emphasize {
		color: #497cbf;
	}

	h1 {
		font-weight: bold;
		font-size: 2em;
		padding-bottom: 1em;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<div>
	{#if condition}
	<h1 in:fade="{{delay: 500, duration: 500}}">Hi</h1>
	<h1 in:fade="{{delay: 1500, duration: 500}}">My name is <span class='emphasize'>Logan</span></h1>
	<h1 in:fade="{{delay: 2500, duration: 500}}">I'm here to help you.</h1>
	<button in:fly="{{y: 400, delay: 3500, duration: 500}}">Learn More</button>
	{/if}
</div>
