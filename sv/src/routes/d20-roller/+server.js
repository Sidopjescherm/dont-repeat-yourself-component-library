/** @type {import('./$types').RequestHandler} */
export async function GET() {
    return new Response();
};

import { json } from '@sveltejs/kit';

export function GET() {
	const d20 = Math.floor(Math.random() * 20) + 1

	return json(d20)
}