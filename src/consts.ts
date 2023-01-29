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
		'Readings': [
			{ text: 'Overview', link: 'en/readings/' },
			{ text: 'Foundations', link: 'en/readings/foundations/' },
			{ text: 'Adult Health', link: 'en/readings/adult-health/' },
			{ text: 'Mental Health', link: 'en/readings/mental-health/' },
			{ text: 'Pharmacology', link: 'en/readings/pharmacology/' },
			{ text: 'Saunders Review', link: 'en/readings/saunders-review/' },
			{ text: 'HESI Review', link: 'en/readings/hesi-review/' },
		],
		'Notes': [
			{ text: 'Overview', link: 'en/notes/' },
			{ text: 'Integumentary', link: 'en/notes/integumentary/' },
			{ text: 'Skeletal', link: 'en/notes/skeletal/' },
			{ text: 'Muscular', link: 'en/notes/muscular/' },
			{ text: 'Nervous', link: 'en/notes/nervous/' },
			{ text: 'Endocrine', link: 'en/notes/endocrine/' },
			{ text: 'Cardiovascular', link: 'en/notes/cardiovascular/' },
			{ text: 'Lymphatic', link: 'en/notes/lymphatic/' },
			{ text: 'Respiratory', link: 'en/notes/respiratory/' },
			{ text: 'Digestive', link: 'en/notes/digestive/' },
			{ text: 'Urinary', link: 'en/notes/urinary/' },
			{ text: 'Reproductive', link: 'en/notes/reproductive/' },
		],
		'Summaries': [
			{ text: '#todo', link: '' },
		],
	},
};
