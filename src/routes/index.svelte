<script>
	import { fade, fly } from 'svelte/transition';
	import { xlink } from '../components/shapes.js';

	// Animations do not play on initial load by default. Condition change used to trigger logo animation.
	let condition = false;
	setTimeout(() => condition = true)
</script>

<style>
	div {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
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
		border: 2px black solid;
		background-color: white;
		font-size: 1.5em;
		font-weight: bold;
		color: black;
		transition: all 0.3s ease;
	  }

	button:hover {
		background-color: #497cbf;
		border: 2px #497cbf solid;
		color: white;
		outline: none;
	}
	  
	button:focus {
		background-color: #497cbf;
		border: 2px #497cbf solid;
		color: white;
		outline: none;
	}

	.emphasize {
		color: #497cbf;
		font-weight: bolder;
	}

	.intro {
		padding-top: 4em;
		padding-bottom: 4em;
	}

	h1 {
		font-weight: bold;
		font-size: 2em;
		padding-bottom: 1em;
	}

	a {
		text-decoration: none;
	}

	.svg {
		width: 80vw;
		height: auto;
	}

	svg {
		width: 100%;
		height: 100%;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}

		button {
			width: 30vw;
		}

		.svg {
		width: 100vw;
		height: auto;
	}
	}
</style>

<div>
	{#if condition}
	<div class='svg' in:fly="{{y: 400, duration: 1500}}">
			<svg width="500" height="250" version="1.1" viewBox="0 0 132 66" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
				<g transform="translate(9.9 -90)">
					<image x="-28" y="84" width="79" height="79" preserveAspectRatio="none" xlink:href={xlink}/>
					<g fill="#000000" letter-spacing="0px" stroke-width=".26" word-spacing="0px">
					<text x="34.313873" y="110.8195" font-family="'Josefin Slab'" font-size="23px" style="font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;line-height:1.25" xml:space="preserve"><tspan x="34.313873" y="110.8195" font-family="'Josefin Slab'" font-size="17px" stroke-width=".26" style="font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal">Firefly</tspan></text>
					<text x="34.313873" y="145.31046" font-family="'Josefin Slab'" font-size="23px" style="font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;line-height:1.25" xml:space="preserve"><tspan x="34.313873" y="145.31046" font-family="'Josefin Slab'" font-size="17px" style="font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal">Engineering</tspan></text>
					<text x="34.29694" y="128.48834" font-family="sans-serif" font-size="11px" style="line-height:1.25" xml:space="preserve"><tspan x="34.29694" y="128.48834" font-family="'Josefin Slab'" font-size="17px" stroke-width=".26" style="font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal">Software</tspan></text>
					</g>
				</g>
			</svg>
	</div>
					  
	<div class='intro'>
		<h1 in:fade="{{delay: 1500, duration: 750}}">Hi,</h1>
		<h1 in:fade="{{delay: 2500, duration: 750}}">My name is 
			<span class='emphasize' in:fade="{{delay: 2750, duration: 1000}}">Logan.</span>
		</h1>
		<h1 in:fade="{{delay: 4000, duration: 750}}">A freelance web developer.</h1>
		<button in:fly="{{y:400, delay: 5000, duration: 750}}">
			<a href='/about'>Interested?</a>
		</button>
	</div>
	{/if}
</div>
