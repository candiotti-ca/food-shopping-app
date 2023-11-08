<script lang="ts">
	import { shopping_articles } from '../stores';
	import Button from './Button.svelte';

	export let name: string;
	export let quantity: number;

	function increment(): void {
		shopping_articles.update((list) => {
			if (list.has(name)) {
				list.set(name, quantity + 1);
			}
			return list;
		});
	}

	function decrement(): void {
		shopping_articles.update((list) => {
			if (quantity > 1) {
				list.set(name, quantity - 1);
			} else {
				list.delete(name);
			}
			return list;
		});
	}
</script>

<section class="alert variant-ringed-success">
	<div class="alert-message">
		{name}
	</div>

	<div class="alert-actions">
		<Button size="sm" color="secondary" on:click={increment}>+</Button>
		<span class="mx-1">{quantity}</span>
		<Button size="sm" color="secondary" on:click={decrement}>-</Button>
	</div>
</section>
