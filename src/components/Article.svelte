<script lang="ts">
	import { shopping_articles } from '../stores';
	import Button from './Button.svelte';

	export let name: string;
	export let validated: boolean;

	function flipArticle(): void {
		shopping_articles.update((list) => {
			if (list.has(name)) {
				list.set(name, !validated);
			}
			return list;
		});
	}

	function removeArticle(event: Event): void {
		event.stopPropagation();

		shopping_articles.update((list) => {
			list.delete(name);
			return list;
		});
	}
</script>

<section
	class="alert hover:cursor-pointer {validated
		? 'variant-soft-surface hover:variant-ghost-surface'
		: 'variant-ringed-success hover:variant-ghost-success'}"
	on:click={flipArticle}
	on:keypress={flipArticle}
	role="switch"
	aria-checked={validated}
	tabindex="0"
>
	<div class="alert-message">
		{name}
	</div>

	<div class="alert-actions">
		<Button size="sm" color={validated ? 'surface' : 'secondary'} on:click={removeArticle}>x</Button
		>
	</div>
</section>
