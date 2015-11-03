## Vendors chunk

This is just another example of the `CommonsChunkPlugin`, but now showing how to extract the common vendor dependencies into a `vendors.js` bundle.

Now we are indicating webpack in the `entry` section of its config file which modules are vendors, and when it finds that modules in the `require()` call, it splits the code and puts it in the vendors bundle.

This would allow you to release in production only a bundle with the code of your app, avoiding to include the vendor scripts unless you change their version.

Once again, hit `npm start` to try it out.
