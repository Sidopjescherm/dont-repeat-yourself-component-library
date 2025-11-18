import { json } from '@sveltejs/kit';

export function GET() {
	const d8 = Math.floor(Math.random() * 8) + 1;
	return json(d8);
}