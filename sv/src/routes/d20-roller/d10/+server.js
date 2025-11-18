import { json } from '@sveltejs/kit';

export function GET() {
	const d10 = Math.floor(Math.random() * 10) + 1;
	return json(d10);
}