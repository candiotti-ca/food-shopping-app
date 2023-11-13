<script lang="ts">
	import { fade } from 'svelte/transition';
	import TrashIcon from '~icons/material-symbols/delete-forever';
	import { shopping_articles } from '../stores';
	import type { Article } from '../types/article';
	import Button from './Button.svelte';
	import Icon from './Icon.svelte';
	import { enhance } from '$app/forms';

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
		<form on:submit={removeArticle} method="POST" action="?/delete" use:enhance>
			<input type="hidden" name="name" value={article.name} />
			<Button type="submit">
				<Icon color={article.stroked ? 'surface' : 'error'} size="xl"><TrashIcon /></Icon>
			</Button>
		</form>
	</div>
</section>
