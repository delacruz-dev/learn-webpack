# Hello World! with Webpack 2

Webpack can work with just command line interpreter (CLI) commands and also providing a configuration file. I prefer the second approach, since it's hard for me to remember every tool specific commands, and also I like to have versioned my configurations in a file rather than in my head. If you are curious about the possibilities that the Webpack CLI offers, you can always type in your terminal:

```sh
> Webpack --help
```
Anyways, what we are going to see in this example is the simplest configuration possible for a Webpack config file.

## Running Webpack as a npm script
If you open the `package.json`, you'll see that there's a `build` script to execute Webpack. Let's try webpack! In your terminal, just type:

```sh
> npm run build
```

If it doesn't work, please double check that you've installed all the dependencies by executin `yarn` or `npm install`. 

If you already installed everything, the previous command should generate the following output:

```sh
> npm run build

> @ build /learn-Webpack/examples/hello-Webpack
> webpack

Hash: 1cfdc05ae11fc4058e39
Version: Webpack 2.2.1
Time: 71ms
    Asset     Size  Chunks             Chunk Names
bundle.js  2.89 kB       0  [emitted]  main
   [0] ./src/greeting.js 38 bytes {0} [built]
   [1] ./src/index.js 148 bytes {0} [built]
```

You should see the resulting `bundle.js` file created under in the root folder. It is a good practice to open it and try to read it. Since version 2 and above, the output contains useful comments to help you to understand what Webpack is doing with your code. As you can see, Webpack introduces some noise in your generated bundle, but this is something we will optimize in the following examples.

### Testing your bundle
If you want to test if your generated bundle works in a browser, just open the `index.html` file located at the root of this directory in your prefered web browser, or:

```sh
> open index.html
```

## The Webpack configuration file
The Webpack configuration file is the place where Webpack gets all the instructions to know how to handle the dependencies of your application and how to bundle them. It exports a node module with a plain JavaScript Object containing entries for every configuration setting.

If you don't provide a Webpack configuration file name, Webpack by **default** will look up in the execution directory for a `webpack.config.js` file. In case you want to place this file in a different directory or give it a custom name, you can parameterize it via CLI:

```sh
> webpack --config ./some/custom/folder/custom.config.js
```

Please notice that the previous command could also be configured as a npm script. 

Let's take a closer look to the only two required configuration entries in the webpack config:

### `entry`
It sets the entry point of your application. The starting file to indicate webpack where's your app and which modules does it need to resolve. Webpack look in the specified path. By default, Webpack assumes the file extension if you don't specify it, to be `.js` (JavaScript). Webpack loads JavaScript by default. To load other filetypes, you'll need a dedicated loader. We'll talk about loader in the following examples.

By default, it will load a `index.js` file if it finds one in the provided path, as **Node.JS** does when requiring modules. In the example, I've written `index` on purpose, to make it more understandable, but I could also have written:

```javascript
entry: '.'
```

### `output`
The `output` property is used to set the file name for your bundle. `filename` is the only required setting, but in the following examples we'll see how important is it to shape how your resultant modules look like.
