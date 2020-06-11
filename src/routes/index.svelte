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

	.logo {
		width: 100%;
		height: 30vh;
	}

	.emphasize {
		color: #497cbf;
	}

	h1 {
		font-weight: bold;
		font-size: 2em;
	}

	svg {
		height: 100%;
		width: 100%;
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
	{/if}
</div>
