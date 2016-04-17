# Very basic configuration

Webpack can work with just command line interpreter (CLI) commands and also providing a configuration file. I prefer the second approach, since it's hard for me to remember every tool specific commands, and also I like to have versioned my configurations in a file rather than in my head. If you are curious about the possibilities that the webpack CLI offers, you can always type in your terminal:
```
$ webpack --help
```
Anyways, what we are going to see in this example is the simplest configuration possible for a webpack config file. Keep in mind that, if we don't provide a configuration file name, webpack by default will look up in the execution directory for a `webpack.config.js` file.

The file exports a node module with entries for every configuration possible. In this example, we just are setting a couple of properties:

- `entry`: It sets the working context. Webpack look in the specified directory for an entry point to start resolving your modules and generating your bundle. In the example, we've set the `./src` folder, which contains a simple `index.js` file with a `Hello World!` script.
- `output`: is intended for setting the output directory and file name for our bundle. You don't have to manually create the `./dist` folder, webpack will do it for you.

One mor thing: If you inspect the `package.json` file, you will find a script for triggering the module generation. It just calls `webpack` command.

## How to try it out
```
npm install
npm run dist
```
You should see the resulting bundle creater under the `./dist` folder. As you can see, webpack introduces some noise in your generated bundle, but this is something we will optimize in the following examples.