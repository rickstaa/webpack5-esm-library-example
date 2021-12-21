# Getting Started

This is a small example repo on how to bundle a ESM library using webpack5. It was based on [this blog post](https://blog.logrocket.com/transpile-es-modules-with-webpack-node-js/) and the [webpack documentation](https://webpack.js.org/). It contains several branches:

-   [no-webpack](https://github.com/rickstaa/webpack5-esm-library-example/tree/no-webpack): A ESM library setup without using webpack.
-   [webpack-react](https://github.com/rickstaa/webpack5-esm-library-example/tree/webpack-react): A ESM library setup that uses [Webpack](https://webpack.js.org/) and [babel](https://babeljs.io/) to bundle react components
-   [webpack-react-css](https://github.com/rickstaa/webpack5-esm-library-example/tree/webpack-react-css): Similar to the branch above but now we also style the React component using [Sass](https://sass-lang.com/) files.
-   [webpack-react-css-lodash-external](https://github.com/rickstaa/webpack5-esm-library-example/tree/webpack-react-css-lodash-external): Similar to the branch but now we specify lodash as a external dependency.
-   [webpack-react-css-lodash-external-bundle-analyzer](https://github.com/rickstaa/webpack5-esm-library-example/tree/webpack-react-css-lodash-external-bundle-analyzer): Similar to the branch but now we also included a way to inspect the bundle using the [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer).

## How to test out this example

1.  Pick a branch.

2.  Install the node dependencies `npm i`.

3.  Build the bundle using webpack `npm run build`.

4.  Execute the `local_importer.js` node script `node local_importer.js` to see test that the bundle can be imported from inside the main package.

5.  Go into the [CRA](https://reactjs.org/docs/create-a-new-react-app.html) demo project. Currently the `webpack5-library-example` library is dynamically linked inside the `package.json`. You can, however, also use the npm [link](https://docs.npmjs.com/cli/v8/commands/npm-link/) command.

6.  Install the node dependencies.

7.  Start the development server using `npm start`.

## How to create a ESM library

The steps below are taken from <https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c>:

-   Add `"type": "module"` to your `package.json`.

-   Replace `"main": "index.js"` with `"exports": "./index.js"` in your package.json.

-   Update the `"engines"` field in `package.json` to `Node.js 12: "node": "^12.20.0 || ^14.13.1 || >=16.0.0"`.

-   Remove `'use strict';` from all JavaScript files.

-   Replace all `require()/module.export` with `import/export`.

-   Use only full relative file paths for imports: `import x from '.';` → `import x from './index.js';`.

-   If you have a TypeScript type definition (for example, `index.d.ts`), update it to use ESM imports/exports.

-   Optional but recommended, use the node: protocol for imports.

## How to use Webpack to build a ESM library

-   Convert your `webpack.config.js` to a ESM module.

-   Enable the [experiments.outputModule](https://webpack.js.org/configuration/experiments/#experimentsoutputmodule) option to make sure webpack outputs ECMASCript module syntax when possible.

-   Enable [output.module](https://webpack.js.org/configuration/output/#outputmodule) to make sure that javascript files are outputted as ESM modules.

-   If you want your library to be consumed by others make sure to set the [output.library.type](https://webpack.js.org/configuration/output/#outputlibrarytype) flag to `module`.

-   Point the `package.json` `exports` property to your outputted bundle.

-   If you want your ESM library to work with a CRA app you have to also specify the `"browser": "./build/index.js",` entry in your `package.json`. One known issue is [#10933](https://github.com/facebook/create-react-app/issues/10933).

## How to exclude externals

To see the example checkout the [webpack-react-css-lodash-external](https://github.com/rickstaa/webpack5-esm-library-example/tree/webpack-react-css-lodash-external) branch. A guide on how to add externals can be found in the [Webpack documentation](https://webpack.js.org/configuration/externals/). The only thing that you have to keep in mind is that when bundling a ES module the [externalstype](https://webpack.js.org/configuration/externals/#externalstype) option is set to `'module'` by default. If your external module therefore is a ESM module you simply use the following:

```json
externals: {
    "lodash-es": "lodash-es",
}
```

If your external module is specified in a different format see the documentation.

## Useful Resources

-   [@sindresorhus - ESM migration guide (GIST)](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)
-   [Building NPM package in 2021 (BLOG)](https://www.julian.io/articles/es2020-npm-package.html)
-   [Pure ESM workflow, is it possible (BLOG)](https://www.indiehackers.com/post/pure-esm-workflow-is-it-possible-714965169d)
-   [Life with ESM (BLOG)](https://css-tricks.com/life-with-esm/)
-   [How to transpile ES modules with webpack and Node.js](https://blog.logrocket.com/transpile-es-modules-with-webpack-node-js/)
-   [Webpack 5 release (CHANGELOG)](https://webpack.js.org/blog/2020-10-10-webpack-5-release/)
-   [Learn Webpack - Full Tutorial for Beginners (VIDEO COURSE)](https://www.youtube.com/watch?v=MpGLUVbqoYQ&t=6084s)
