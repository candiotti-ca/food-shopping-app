<script lang="ts">
	import {
		Modal,
		getModalStore,
		initializeStores,
		type ModalSettings
	} from '@skeletonlabs/skeleton';
	import AddIcon from '~icons/material-symbols/add';
	import CarrotIcon from '~icons/twemoji/carrot';
	import PineapleIcon from '~icons/twemoji/pineapple';
	import Article from '../components/Article.svelte';
	import Button from '../components/Button.svelte';
	import Heading from '../components/Heading.svelte';
	import Icon from '../components/Icon.svelte';
	import {
		current_month,
		ordered_shopping_articles,
		seasonal_fruits,
		seasonal_vegetables,
		shopping_articles
	} from '../stores';

	initializeStores();
	const modalStore = getModalStore();

	function addNewArticle(): void {
		const modal: ModalSettings = {
			type: 'prompt',
			title: 'Ajouter un article',
			buttonTextCancel: 'Annuler',
			buttonTextSubmit: 'Valider',
			valueAttr: { type: 'text', minlength: 3, required: true },
			response: (articleName: string | false) => shopping_articles.addArticle(articleName)
		};
		modalStore.trigger(modal);
	}
</script>

<header class="bg-primary-500 h-[10vh] flex justify-center align-center">
	<Heading white>Coucourses</Heading>
</header>

<Modal />

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
</div>

<footer class="bg-primary-500 h-[5vh] flex justify-center align-center">
	<Button color="success" on:click={addNewArticle}>
		<Icon color="surface" size="xl"><AddIcon /></Icon>
	</Button>
</footer>
