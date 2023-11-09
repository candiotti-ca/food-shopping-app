<script lang="ts">
	import { fade } from 'svelte/transition';
	import TrashIcon from '~icons/material-symbols/delete-forever';
	import { shopping_articles } from '../stores';
	import type { Article } from '../types/article';
	import Button from './Button.svelte';
	import Icon from './Icon.svelte';

	export let article: Article;

	function strokeArticle(): void {
		shopping_articles.strokeArticle(article);
	}

	function removeArticle(event: Event): void {
		event.stopPropagation();
		shopping_articles.deleteArticle(article.name);
	}
</script>

<section
	class="alert hover:cursor-pointer {article.stroked
		? 'variant-soft-surface hover:variant-ghost-surface line-through'
		: 'variant-ringed-success hover:variant-ghost-success'}"
	on:click={strokeArticle}
	on:keypress={strokeArticle}
	transition:fade
	role="switch"
	aria-checked={article.stroked}
	tabindex="0"
>
	<div class="alert-message">
		{article.name}
	</div>

	<div class="alert-actions">
		<Button on:click={removeArticle}>
			<Icon color={article.stroked ? 'surface' : 'error'} size="xl"><TrashIcon /></Icon>
		</Button>
	</div>
</section>
