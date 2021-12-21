# Getting Started

This is a small example repo on how to bundle a ESM library using webpack5. It was based on [this stackoverflow question](https://stackoverflow.com/questions/68913996/use-webpack-5-to-build-an-es-module-bundle-and-consume-that-bundle-in-a-node-js) and the [webpack documentation](https://webpack.js.org/).

## How to test out this example

1. Install the node dependencies `npm i`.

2. Build the bundle using webpack `npm run build`.

3. Execute the `local_importer.js` node script `node local_importer.js` to see test that the bundle can be imported from inside the main package.

4. Go into the [CRA](https://reactjs.org/docs/create-a-new-react-app.html) demo project. Currently the `webpack5-library-example` library is dynamically linked inside the `package.json`. You can, however, also use the npm [link](https://docs.npmjs.com/cli/v8/commands/npm-link/) command.

5. Install the node dependencies.

6. Start the development server using `npm start`.


## How to create a webpack5 ESM library

1. Add the `"type": "module"` to the `package.json`.

2. Convert your `webpack.config.js` to a ESM module.

3. Enable the [experiments.outputModule](https://webpack.js.org/configuration/experiments/#experimentsoutputmodule) option to make sure webpack outputs ECMASCript module syntax when possible.

4. Enable [output.module](https://webpack.js.org/configuration/output/#outputmodule) to make sure that javascript files are outputted as ESM modules.

5. If you want your library to be consumed by others make sure to set the [output.library.type](https://webpack.js.org/configuration/output/#outputlibrarytype) to `module`.

6. Point the `package.json` `main` property to your outputted bundle.


## How to exclude externals