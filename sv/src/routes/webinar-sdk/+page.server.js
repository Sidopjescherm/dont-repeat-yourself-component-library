import { createDirectus, rest } from '@directus/sdk';
const directus = createDirectus('https://fdnd-agency.directus.app').with(rest());
// console.log(directus)

const allWebinars = await directus.request(readItems('avl_webinars'));
console.log(allWebinars)
