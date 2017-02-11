# Writing our DOM

In order to transform jsx syntax we need:

`$ npm install --save-dev babel-plugin-transform-runtime`

add to our .babelrc file:

```
{
  "plugins": ["transform-react-jsx"]
}
```

then, inside /jsx-transform folder (this one)

`$ gulp`


> More info: https://github.com/babel/gulp-babel#runtime
