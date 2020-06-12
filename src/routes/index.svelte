<script>
	import { fade, fly } from 'svelte/transition';
	import { xlink } from '../components/shapes.js';

	// Animations do not play on initial load by default. Condition change used to trigger logo animation.
	let condition = false;
	setTimeout(() => condition = true)
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-content: center;
		height: 100%;
	}

	.emphasize {
		color: #497cbf;
		font-weight: bolder;
	}

	.logo {
		padding-left: 2em;
		padding-right: 2em;
	}

	.intro {
		padding: 2em;
	}

	.work {
		padding-top: 2em;
		padding-bottom: 2em;
		background-color: #497cbf;
		width: 100%;

		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}

	.card {
		width: 40%;
		margin: 5%;
	}

	.about {
		padding: 2em;
	}

	.contact {
		padding-top: 2em;
		padding-bottom: 2em;
		background-color: #497cbf;
		width: 100%;
	}

	.title {
		text-align: center;
	}

	/* Inserting this collapsed row between two flex items will make 
	* the flex item that comes after it break to a new row */
	.break {
		flex-basis: 100%;
		height: 0;
		padding: 0;
	}

	a {
		text-decoration: none;
	}

	img {
		width: 100%;
		border-radius: 10%;
	 }

	h1 {
		font-weight: bold;
		font-size: 2em;
		padding-bottom: 1em;
	}

	h2 {
		font-weight: bold;
		font-size: 2em;
		margin: 0;
		margin-bottom: 1em;
		color: white;
	}

	.svg {
		height: 30vh;
		width: 80vw;
	}

	svg {
		width: 100%;
		height: 100%;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}

		.title {
			text-align: left;
		}

		.svg {
			height: 30vh;
			margin: 0 auto;
		}
	}
</style>

<div class='container'>
	<div class='logo'>
		<div class='svg'>
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
	</div>
					  
	<div class='intro'>
		<h1>Hi, my name is <span class='emphasize'>Logan.</span></h1>
		<h1>A freelance web developer.</h1>
	</div>

	<div class='work'>
		<h2>Recent Work</h2>
		<div class="break"></div> <!-- break -->
		<div class='card'>
			<img src='/KagenLogo.jpg' alt='Kagen Cofee and Crepes logo' />
		</div>
		<div class='card'>
			<img src='RidgeLogo.jpg' alt='The Ridge Bible Church logo'/>
		</div>
	</div>

	<div class='about'>
		<h1 class='title'>About Me</h1>
		<p>I'll keep this brief.</p>
		<p>Veteran. Father. Sushi lover. Coffee addict.</p>
		<p>Brandon Sanderson is the Tolkien of our generation.</p>
		<p>I'm here to make the web personal and easy for you.</p>
		<p>No 1-800 number or tech jargon. Let's just talk about achieving your goals.</p>
	</div>

	<div class='contact'>
		<div style='padding-left: 2em; padding-right: 2em;'>
			<h2 class='title'>Contact Me</h2>
			<a href='406-871-9875'>
				<p style="color: white">
					406-871-9875
				</p>
			</a>
			<a href='mailto: firefly@loganwilliams.tech'>
				<p style="color: white">
					firefly@loganwilliams.tech
				</p>
			</a>
		</div>
	</div>
</div>
