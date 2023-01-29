export const SITE = {
	title: 'Nursing Study Docs',
	description: 'A Study Website for Nursing',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/sagreenxyz/density-disk`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Summaries': [
			{text: '#todo', link: ''},
		],
		'Notes': [
			{text: 'Integumentary', link: 'en/integumentary'},
			{text: 'Skeletal', link: 'en/skeletal'},
			{text: 'Muscular', link: 'en/muscular'},
			{text: 'Nervous', link: 'en/nervous'},
			{text: 'Endocrine', link: 'en/endocrine'},
			{text: 'Cardiovascular', link: 'en/cardiovascular'},
			{text: 'Lymphatic', link: 'en/lymphatic'},
			{text: 'Respiratory', link: 'en/respiratory/'},
			{text: 'Digestive', link: 'en/digestive'},
			{text: 'Urinary', link: 'en/urinary'},
			{text: 'Reproductive', link: 'en/reproductive'},
		],
	},
};
