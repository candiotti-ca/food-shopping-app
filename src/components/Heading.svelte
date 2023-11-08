<script lang="ts">
	import type { Heading } from "../types/theme";

	export let tag: Heading = "h1";
</script>

<svelte:element this={tag} class="{tag}">
	<slot/>
</svelte:element>