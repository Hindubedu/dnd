import type { Creature } from "$lib/data/creature";
import { json } from "@sveltejs/kit";
import { searchCreatures } from "$lib/search/index-builder";

export const GET = ({ url }) => {
    const query = url.searchParams.get("query") ?? "a";
    const limit = Number(url.searchParams.get("limit")) ?? 5;
    const offset = Number(url.searchParams.get("offset")) ?? 0;

    const results: Creature[] = searchCreatures(query, limit, offset);
    return json(results);
}
