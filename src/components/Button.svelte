<script lang="ts">
	import type { Color, Size, Variant } from '../types/theme';

	export let color: Color = 'primary';
	export let size: Size = 'md';
	export let variant: Variant = 'filled';
</script>

<button type="button" class="btn btn-{size} variant-{variant}-{color}">
	<slot />
</button>
