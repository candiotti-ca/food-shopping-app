<script lang="ts">
import { onMount } from 'svelte';
import Heading from '../components/Heading.svelte';
import data from '../lib/data.json';

let vegetables:string[]=[];
let fruits:string[]=[];

onMount(() => {
    const currentMonth = new Date().getMonth();
	vegetables = data.vegetables[currentMonth].vegetables;
	fruits = data.vegetables[currentMonth].fruits;
});
</script>

<div class="card">
    <header class="card-header">
        <Heading tag="h3">De saison ce mois-ci</Heading>
    </header>
    <section class="p-4">
        <dl class="list-dl">
            <div>
                <span>
                    <dt class="font-semibold">Légumes</dt>
                    <dd>{vegetables.join(', ')}</dd>
                </span>
            </div>

            <div>
                <span>
                    <dt class="font-semibold">Fruits</dt>
                    <dd>{fruits.join(', ')}</dd>
                </span>
            </div>
        </dl>
    </section>
</div>