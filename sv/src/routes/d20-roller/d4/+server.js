import { json } from '@sveltejs/kit';

export function GET() {
	const d4 = Math.floor(Math.random() * 4) + 1;
	return json(d4);
}