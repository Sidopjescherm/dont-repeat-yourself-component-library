import { json } from '@sveltejs/kit';

export function GET() {
	const d12 = Math.floor(Math.random() * 12) + 1;
	return json(d12);
}