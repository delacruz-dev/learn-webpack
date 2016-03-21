# Working with styles

In this scenario we'll set up three working environment for dealing with styles. The `./src` folder contains an `index.js` file with a dependency of the application stylesheet, located in the `index.css` file under the same directory. 

You may notice that we are importing a stylesheet using `require`. Remember that this is the way Webpack works: extending this function and adding extra functionality. We've already seen how Babel works for javascript files and in this example we'll se how some of the most common loders for styles work.

## Different webpack.config.js
Before beginning with styles, take a look at the webpack configs. In this example we have three of them, one for every test we are going to illustrate. I thought this example could be a good opportunity to illustrate that we can pass webpack our custom config when executing it, different from the default. This feature can help us when setting up different scenarios for development and release. If you look at the `package.json` file, you'll find the three script entries for every example:
```javascript
"styles": "webpack --config webpack.styles.config.js",
"extract-text": "webpack --config webpack.extracttext.config.js",
"autoprefixer": "webpack --config webpack.autoprefixer.config.js"
```

## Import stylesheets
In order to be able to import css stylesheets, we need to configure the appropiate loaders. In the `webpack.styles.config.js` file we have the following entry:
```javascript
loaders: [{
  test: /\.css$/,
  include: [
    __dirname + '/src'
  ],
  loader: 'style-loader!css-loader'
}]
```
As you can see, the `test` expression now matches any file with a `.css` extensions, and only that ones included under the `./src` folder. The loaders we are using are `style-loader` and `css-loader`. It's not clear what's the difference between each other, since the documentation is not very explanative. But both are commonly used together and allow you to import CSS files into your single page application and bundle them.

To try it out, type in your terminal:
```
$ npm run styles
```
## Generate css files as a separated bundle
As you may have noticed, the previous example only generates a bundle with js and the styles are included inside that bundle. You may be OK with this behavior, but maybe not :) 

In that case, you'll need to install the `extract-text-webpack-plugin` (already included in the `package.json`). This plugin, used as a loader, works extracting the css styles in the generated bundle into a pure `.css` bundle. Everything is already configured for you in the `webpack.extracttext.config.js` file. If you wan to the two resulting bundles, type in your terminal:
```
$ npm run extract-text
```
## Manipulate styles
Let's say you would like to apply some automatic modifications to your styles, like for instance, using [autoprefixer](https://github.com/postcss/autoprefixer). In this case, we can use another loader, the [autoprefixer-loader](https://github.com/passy/autoprefixer-loader), also included in the `package.json`. This new configuration is located in the `webpack.autoprefixer.config.js` file. 

As you can see, loaders can be chained to automate the different steps in your workflow. When you hit `npm run autoprefixer`, you should see that in the css bundle the autoprefixer loader has added browser-specific prefixes to some of the styles:
```css
body{
  background-color:red;
}

.example {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-transition:all .5s;
  transition: all .5s;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  background: -webkit-gradient(linear, left top, left bottom, from(white), to(black));
  background: -webkit-linear-gradient(top, white, black);
  background: linear-gradient(to bottom, white, black);
}
```
