<script lang="ts">
	import type { Color, Size, Variant } from '../types/theme';

	export let color: Color = 'primary';
	export let size: Size = 'md';
	export let variant: Variant = 'filled';
	export let type: 'button' | 'submit' = 'button';
</script>

<button {type} class="btn btn-{size} variant-{variant}-{color}" on:click>
	<slot />
</button>
