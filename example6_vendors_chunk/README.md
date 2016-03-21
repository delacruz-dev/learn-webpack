# Vendors chunk

In this example we are going to see another example of the utility of the `CommonsChunkPlugin`: How to split our generated bundles in two: one for our app code and another one for all the vendor dependencies we need.

This is interesting, in order to be able to release into production only the app changes, and cache the vendors bundle in our clients to avoid downloading extra KBytes of data every time they come back to our site.

## Indicate which dependencies are vendor
In the `entry` property of our `webpack.config.js` file we have the following:
```javascript
entry: {
  app: "./",
  vendor: ["jquery", "underscore"],
},
```
We are configuring webpack to consider the `jquery` and `underscore` dependencies as a `vendor` entry. This way, when it finds a module in the `require()` call that matches any of the values configured in the `vendor` entry, it will split the code and put it into the vendors bundle.

The other needed configuration is for the `CommonsChunkPlugin`. In this example, we are providing `vendor` as a chunk name and a proper name for the generated bundle:
```javascript
new webpack.optimize.CommonsChunkPlugin(
  /* chunkName= */"vendor", 
  /* filename= */"vendor.bundle.js"
)
```

## How to test it
Just hit:
```
$ npm run dist
```
