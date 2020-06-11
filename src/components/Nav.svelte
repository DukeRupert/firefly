<script>
	import { inner, outer } from './shapes.js';
	import Fa from 'svelte-fa'
	import { faBars } from '@fortawesome/free-solid-svg-icons'
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
		height: 8vh;
		background-color: #497cbf;
	}

	ul {
		margin: 0;
		padding: 0;
		height: 100%;
		width: 100%;
		list-style-type: none;

		display: flex;
		justify-content: flex-start;
    	align-items: center;
	}

	li {
		display: flex;
		justify-content: center;
    	align-items: center;
	}

	svg {
		height: 6vh;
		width: 6vh;
	}

	path {
		fill: white;
		opacity: 1.0;
	}

	.logo {
		flex: none;
	}

	.title {
		color: white;
		font-size: 1.25em;
		font-weight: 700;
		font-family: 'Josefin Slab';
		margin: 0 auto;
	}

	.menu {
		margin-left: auto;
	}

	@media (min-width: 550px) {

		.title {
			margin: 0;
			margin-right: 0 auto;
			font-size: 2em;
		}
	}


</style>

<nav>
	<ul>
		<li class='logo'>
			<svg height="200" width="200" fill="#497cbf" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
				<path style="fill: white" d={outer}/>
				<path style='fill: white' d={inner}/>
			</svg>
		</li>
		<li class='title'>
			Firefly Software Engineering
		</li>
		<li class='menu'>
			<Fa icon={faBars} size='2x' primaryColor='white'/>
		</li>
	</ul>
</nav>
