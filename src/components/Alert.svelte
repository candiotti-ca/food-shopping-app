<script lang="ts">
	import { fade } from "svelte/transition";
	import type { Color, Style } from "../types/theme";

	export let color: Color = "primary";
	export let style: Style = "filled";
</script>

<aside class="alert variant-{style}-{color}" transition:fade={{ duration: 200 }}>
	<div class="alert-message">
		<slot/>
	</div>
</aside>