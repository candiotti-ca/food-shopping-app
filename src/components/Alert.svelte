<script lang="ts">
	import { fade } from "svelte/transition";
	import type { Color, Variant } from "../types/theme";

	export let color: Color = "primary";
	export let variant: Variant = "filled";
</script>

<aside class="alert variant-{variant}-{color}" transition:fade={{ duration: 200 }}>
	<div class="alert-message">
		<slot/>
	</div>
</aside>