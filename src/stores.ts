import { derived, readable, writable, type Readable, type Writable } from 'svelte/store';
import data from './lib/data.json';
import type { VegetablePerMonth } from './types/vegetables_per_month';

const seasonal: Readable<VegetablePerMonth> = readable({ vegetables: [], fruits: [] } as any, set => {
    const currentMonth = new Date().getMonth();
    set(data.vegetables[currentMonth]);
    return undefined;
});

/** All current month's vegetables */
export const seasonal_vegetables: Readable<string[]> = derived(seasonal, value => value.vegetables);

/** All current month's fruits */
export const seasonal_fruits: Readable<string[]> = derived(seasonal, value => value.fruits);

/** Current month as string */
export const current_month: Readable<string> = readable('', set => {
    const currentMonth = new Date().getMonth();
    switch (currentMonth) {
        case 0:
            set('Janvier');
            break;
        case 1:
            set('Février');
            break;
        case 2:
            set('Mars');
            break;
        case 3:
            set('Avril');
            break;
        case 4:
            set('Mai');
            break;
        case 5:
            set('Juin');
            break;
        case 6:
            set('Juillet');
            break;
        case 7:
            set('Août');
            break;
        case 8:
            set('Septembre');
            break;
        case 9:
            set('Octobre');
            break;
        case 10:
            set('Novembre');
            break;
        default:
            set('Décembre');
            break;
    }

    return undefined;
});

/** User's shopping list */
export const shopping_articles: Writable<Map<string, number>> = writable(new Map());