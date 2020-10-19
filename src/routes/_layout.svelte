<script>
  import Nav from "../components/Nav.svelte";
  export let segment;
</script>

<style>
  main {
    position: relative;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box; /* Firefox, other Gecko */
    box-sizing: border-box; /* Opera/IE 8+ */
    width: 100%;
    height: 100%;
  }
</style>

<main>
  <!-- <header>
    <Nav {segment} />
  </header> -->
  <content>
    <slot />
  </content>
</main>
