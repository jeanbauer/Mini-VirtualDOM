/** @jsx h */

function h(type, props, ...children) {
  return { type, props, children };
}

function createElement(node) {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }
  const $el = document.createElement(node.type);
  node.children.map(createElement).forEach($el.appendChild.bind($el));
  return $el;
}

const a = h(
  'ul',
  { 'class': 'list' },
  h(
    'li',
    null,
    'item 1'
  ),
  h(
    'li',
    null,
    'item 2'
  )
);

const $root = document.getElementById('root');
$root.appendChild(createElement(a));