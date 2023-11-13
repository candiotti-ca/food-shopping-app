<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	import CheckIcon from '~icons/material-symbols/check-small';
	import { shopping_articles } from '../stores';
	import Button from './Button.svelte';
	import Icon from './Icon.svelte';
	import { enhance } from '$app/forms';

	const dispatch = createEventDispatcher();
	let articleName = '';

	function addArticle(): void {
		shopping_articles.addArticle(articleName);
		dispatch('added');
	}
</script>

<form
	on:submit={addArticle}
	method="POST"
	action="?/create"
	class="alert variant-ringed-success"
	transition:fade
	use:enhance
>
	<div class="alert-message">
		<input bind:value={articleName} class="w-full bg-transparent focus:outline-none" name="name" />
	</div>

	<div class="alert-actions">
		<Button type="submit">
			<Icon color="surface" size="xl"><CheckIcon /></Icon>
		</Button>
	</div>
</form>
