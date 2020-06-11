<script>
	import Nav from '../components/Nav.svelte';

</script>

<style>
	main {
		position: relative;
		-webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
		-moz-box-sizing: border-box;    /* Firefox, other Gecko */
		box-sizing: border-box;         /* Opera/IE 8+ */
		width: 100vw;
		background-color: white;
		padding-left: 2em;
		padding-right: 2em;
		overflow: hidden;
	}
</style>

<main>
	<slot></slot>
</main>