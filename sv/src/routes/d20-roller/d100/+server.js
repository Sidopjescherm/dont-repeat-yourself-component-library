import { json } from '@sveltejs/kit';

export function GET() {
	const d100 = Math.floor(Math.random() * 100) + 1;
	return json(d100);
}