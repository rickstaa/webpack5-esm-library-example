import {
  util,
  helloWorld,
  ldCapitalize,
  ldEsCapitalize,
} from "./dist/webpack5-esm-library-example.bundle.mjs";

console.log(util());
helloWorld();
console.log(ldCapitalize("this should be capitalized."));
console.log(ldEsCapitalize("this should be capitalized using 'es-lodash'."));
