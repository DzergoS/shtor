export const PRODUCT_EDIT = 'PRODUCT_EDIT';

export const OBERIH = 'OBERIH';
export const OBJECT = 'OBJECT';
export const NATURE = 'NATURE';

export const ATTACHMENT_EMPTY = 'Без підвісу';
export const ATTACHMENT_CHAIN = 'Срібний ланцюг';
export const ATTACHMENT_ORBIT = 'Срібна орбіта';

const BASE = {
	name: {
		ua: 'Назва',
		en: 'Title',
	},
	description: {
		ua: 'Опис',
		en: 'Description',
	},
}
export const BRACELET_PRODUCT = {
	...BASE,
	price: {
		ua: 36,
		en: 1,
	},
	group: OBERIH,
	colors: ["red", 'white'],
	variations: [{
		image: 'url',
		size: '1m',
	},{
		image: 'url',
		size: '1m',
	},{
		image: 'url',
		size: '1m',
	}],
}

export const SHELL_PRODUCT = {
	...BASE,
	group: NATURE,
	variations: [{
		image: 'url',
		size: '1m',
		price: {
			ua: 36,
			en: 1,
		},
	},{
		image: 'url',
		size: '1m',
		price: {
			ua: 36,
			en: 1,
		},
	},{
		image: 'url',
		size: '1m',
		price: {
			ua: 36,
			en: 1,
		},
	}]
}

export const REGULAR_PRODUCT = {
	...BASE,
	group: OBJECT,
	images: [],
	size: '1m',
	variations: [{
		price: {
			ua: 36,
			en: 1,
		},
		attachment: ATTACHMENT_EMPTY,
	},{
		price: {
			ua: 36,
			en: 1,
		},
		attachment: ATTACHMENT_CHAIN,
	},{
		price: {
			ua: 36,
			en: 1,
		},
		attachment: ATTACHMENT_ORBIT,
	}],
}

