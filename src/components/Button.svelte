<script lang="ts">
	import type { Color, Size, Style } from "../types/theme";

	export let color: Color = "primary";
	export let size: Size = "md";
	export let style: Style = "filled";
</script>

<button type="button" class="btn btn-{size} variant-{style}-{color}">
	<slot />
</button>