
## Multiple entries
In this example, we've added three modules under the `./src` folder, one for each page of a hypothetical single page application.

We can configure multiple entry points in webpack to generate a single bundle for each page, and take profit of deploying to production only the bundle of the modified page.

Additionaly, we can include a *hash* in the file name, to force the update in our clients and CDNs.