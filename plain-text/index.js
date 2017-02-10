function h(type, props, ...children) {
  return { type, props, children };
}

const vdom = h('ul', { 'class': 'list' },
  h('li', {}, 'item 1'),
  h('li', {}, 'item 2'),
);

console.log(vdom);
