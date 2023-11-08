<script lang="ts">
	import Button from './Button.svelte';
</script>

<section class="alert variant-ringed-success">
	<div class="alert-message">
		<slot />
	</div>

	<div class="alert-actions">
		<Button size="sm" color="secondary">+</Button>
		<span class="mx-1">10</span>
		<Button size="sm" color="secondary">-</Button>
	</div>
</section>
