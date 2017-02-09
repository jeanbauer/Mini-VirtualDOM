const h = (type, props, ...children) => { type, props, children };

const virtualDom = h('ul', { 'class': 'list' },
  h('li', {}, 'item 1'),
  h('li', {}, 'item 2'),
));

console.log('virtualDom', virtualDom);
