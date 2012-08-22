exports.blocks = [
	{ name: 'b-page',
	  mods: [{name: 'view', vals: ['print']}] },
	{ name: 'b-menu' },
	{ name: 'b-items',
	  elems: [
		{ name: 'item',
		  mods: [{name: 'state', vals: ['current']}] }
	  ]},
	{ name: 'b-slider' },
	{ name: 'b-slides',
	  elems: [
		{ name: 'slide' },
		{ name: 'question' },
		{ name: 'answer' },
		{ name: 'arrow-left',
		  mods: [{name: 'state', vals: ['hovered']}] },
		{ name: 'arrow-right',
		  mods: [{name: 'state', vals: ['hovered']}] },
		{ name: 'bottom' }
	]},
	{ name: 'b-viewControls',
	  elems: [
		{ name: 'view',
		  mods: [{name: 'state', vals: ['current']}] }
	  ]},
];
