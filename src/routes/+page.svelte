<script lang="ts">
	import AddIcon from '~icons/material-symbols/add';
	import CarrotIcon from '~icons/twemoji/carrot';
	import PineapleIcon from '~icons/twemoji/pineapple';
	import Article from '../components/Article.svelte';
	import Button from '../components/Button.svelte';
	import Heading from '../components/Heading.svelte';
	import Icon from '../components/Icon.svelte';
	import NewArticle from '../components/NewArticle.svelte';
	import { onMount } from 'svelte';
	import {
		current_month,
		ordered_shopping_articles,
		seasonal,
		seasonal_fruits,
		seasonal_vegetables
	} from '../stores';

	export let data;
	let addingAnArticle = false;

	onMount(() => seasonal.set(data));

	function addNewArticle(): void {
		addingAnArticle = true;
	}
</script>

<header class="bg-primary-500 h-[10vh] flex justify-center align-center">
	<Heading white>Coucourses</Heading>
</header>

<div class="h-[85vh] p-5 flex flex-col space-y-5">
	<!-- Seasonal vegetables banner -->
	<div class="card">
		<header class="card-header">
			<Heading tag="h3">En ce mois de {$current_month.toLowerCase()} :</Heading>
		</header>
		<section class="p-4">
			<dl class="list-dl">
				<div>
					<span>
						<dt class="font-semibold">
							<span class="flex space-x-2">
								<Icon size="xl"><CarrotIcon /></Icon>
								<span>Légumes</span>
							</span>
						</dt>
						<dd>{$seasonal_vegetables.join(', ')}</dd>
					</span>
				</div>

				<div>
					<span>
						<dt class="font-semibold">
							<span class="flex space-x-2">
								<Icon size="xl"><PineapleIcon /></Icon>
								<span>Fruits</span>
							</span>
						</dt>
						<dd>{$seasonal_fruits.join(', ')}</dd>
					</span>
				</div>
			</dl>
		</section>
	</div>

	<!-- Shopping articles -->
	{#each $ordered_shopping_articles as article}
		<Article {article} />
	{/each}

	<!-- New article -->
	{#if addingAnArticle}
		<NewArticle on:added={() => (addingAnArticle = false)} />
	{/if}
</div>

<footer class="bg-primary-500 h-[5vh] flex justify-center align-center">
	<Button color="success" on:click={addNewArticle}>
		<Icon color="surface" size="xl"><AddIcon /></Icon>
	</Button>
</footer>
