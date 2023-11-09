<script lang="ts">
	import type { Color, Size } from '../types/theme';

	export let color: Color = 'primary';
	export let size: Size = 'md';
</script>

<span class="text-{color}-500 text-{size}">
	<slot />
</span>
