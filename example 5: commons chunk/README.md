## Commons chunk

In this example you can see how does the `CommonsChunkPlugin`work. We have three modules, each one with its own css styleguide and a base styleguide imported in some of them.

When configuring webpack for splitting your code with commons, it automatically generates a bundle with the common code in your js and css (or other file types, using the appropiate loaders).

Hit `npm start` for giving it a try.
