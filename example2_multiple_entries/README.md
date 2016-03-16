# Multiple entries
The true potential of Webpack comes to light when working with [Single Page Applications (SPA)](https://es.wikipedia.org/wiki/Single-page_application). It helps you to pack your code in an optimized manner to avoid packing unnecesary code in a big bundle for your whole application. It can generate separated bundles, with isolated pieces of code and avoiding duplication. By setting *multiple entry points*, you can define a strategy for generating bundles for any isolated section in your SPA.

We'll see how to do it in this example.

## A very simple SPA
We'll work with a hypothetical single page application consisted in three views. One for the home page and a couple for a private are with information about the user and her account settings:
```
├── account.js
├── home.js
└── user.js
```
## Multiple entry points
If you inspect the `webpack.config.js` file, you'll notice a new property in it: `context`. It sets the working directory pointing to the `./src` for every `entry` introduced.

The `entry` property is now a little more complex than in the previous example. Now it contains an object with an entry point for every section we've defined in our SPA:
```javascript
entry: {
  home: "./home",
  user: ["./user", "./account"]
}
```
Every entry will generate a separated bundle, one for the home with the contents of the `home.js` file and another for the `user` section with the contents of a collection of files. In this case, `user.js` and `account.js`.

## Output files
The output entry now looks like this:
```javascript
output: {
  path: "./dist",
  filename: "[name].bundle.[hash].js"
}
```
Please notice that, as we said, the `context` property only refers to the entries, not the output files. They will be generated under the `./dist` folder, located at the root of your working folder.

In this case, we are introducing two interesting elements to the configuration of the filename property:

- `[name]`: This token will automatically name the bundle as we did in the entry point
- `[hash]`: It will generate a hash with the contents of the bundle. It is useful for releasing into production the new version of the bundle and trigger a cache boost on the client side.

## How to try it out
```
npm install
npm run dist
```
You should see the following output, two bundle files with their corresponding hash:
```
Hash: 27878a575fe12989b902
Version: webpack 1.12.9
Time: 54ms
                              Asset     Size  Chunks             Chunk Names
home.bundle.27878a575fe12989b902.js  1.46 kB       0  [emitted]  home
user.bundle.27878a575fe12989b902.js  1.73 kB       1  [emitted]  user
   [0] ../home.js 71 bytes {0} [built]
   [0] multi user 40 bytes {1} [built]
   [1] ../user.js 71 bytes {1} [built]
   [2] ../account.js 74 bytes {1} [built]
```  
