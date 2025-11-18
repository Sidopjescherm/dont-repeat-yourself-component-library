import { json } from '@sveltejs/kit';

export function GET() {
	const d6 = Math.floor(Math.random() * 6) + 1;
	return json(d6);
}