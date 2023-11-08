<script lang="ts">
	import Button from '../components/Button.svelte';
	import Heading from '../components/Heading.svelte';
	import { seasonal_vegetables, seasonal_fruits, current_month } from '../stores';
</script>

<header class="bg-primary-500 h-[10vh] flex justify-center align-center">
	<Heading white>Coucourses</Heading>
</header>

<div class="h-[85vh] p-5">
	<div class="card">
		<header class="card-header">
			<Heading tag="h3">Ce mois de {$current_month.toLowerCase()} :</Heading>
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
</div>

<footer class="bg-primary-500 h-[5vh] flex justify-center align-center">
	<Button white color="surface">+</Button>
</footer>
