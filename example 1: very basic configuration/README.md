# Very basic configuration

With this example you can see the simplest configuration possible to use with webpack. It sets the working context in the `./src` folder, in where you will find a sample node.js module which writes a *Hello World* in the console.

We've created a `webpack.config.js` file to set the minimum configuration for webpack, in order to simplify the running script.

Finally, we've added the running script under the `start` step in the `scripts` section of the `package.json` file. Therefore, to run your first webpack build, follow these steps:

```
git clone git@github.com:danderu/webpack-html5spain.git
cd "example 1: very basic configuration"
npm install
npm start
```
You should see the resulting bundle creater under the `./dist` folder.
