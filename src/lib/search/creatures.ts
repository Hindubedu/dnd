import FlexSearch from "flexsearch";
import type { Creature } from "$lib/types/creature";
import { indexOptions } from "$lib/search/constants";
import { routes } from "$lib/constants/routes";
import { creatureIndex, creatures, siteIndex } from "../../hooks.server";

export function creatureSearchString(c: Creature): string {
    return `${c.name} ${c.group} ${c.type} ${c.subtype}`;
}

export function buildCreatureIndex() {
    const start = performance.now();
    const flexIndex = new FlexSearch.Index(indexOptions);
    creatures.forEach((c, i) => {
        const searchString: string = creatureSearchString(c);
        siteIndex.add(routes.beasts_slug(c.slug), `beast creature ${searchString}`);
        return flexIndex.add(i, searchString);
    });

    const end = performance.now();
    console.log(`Built creature index in ${end - start} ms`);
    return flexIndex;
}

export function searchCreatures(query: string, limit: number = 5, offset: number = 0): Creature[] {
    const options: any = { limit: limit, offset: offset, suggest: true };
    let results = creatureIndex.search(query, options);
    return results.map(r => creatures[r as number]);
}
