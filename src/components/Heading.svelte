<script lang="ts">
	import type { Heading } from "../types/theme";

	export let tag: Heading = "h1";
	export let white = false;
</script>

<svelte:element this={tag} class="{tag} {white ? 'text-white':''}">
	<slot/>
</svelte:element>