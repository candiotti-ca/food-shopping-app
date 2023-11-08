<script lang="ts">
	import Article from '../components/Article.svelte';
	import Button from '../components/Button.svelte';
	import Heading from '../components/Heading.svelte';
	import { current_month, seasonal_fruits, seasonal_vegetables } from '../stores';
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
						<dt class="font-semibold">Légumes</dt>
						<dd>{$seasonal_vegetables.join(', ')}</dd>
					</span>
				</div>

				<div>
					<span>
						<dt class="font-semibold">Fruits</dt>
						<dd>{$seasonal_fruits.join(', ')}</dd>
					</span>
				</div>
			</dl>
		</section>
	</div>

	<!-- Shopping articles -->
	<!-- {#each $shopping_articles as article}
		youpi
	{/each} -->

	<Article>yes</Article>
	<Article>yes</Article>
	<Article>yes</Article>
	<Article>yes</Article>
</div>

<footer class="bg-primary-500 h-[5vh] flex justify-center align-center">
	<Button variant="soft" color="surface">+</Button>
</footer>
