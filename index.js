const deprecate = require("util").deprecate;
const slugify = require("@sindresorhus/slugify");

const slugFn = deprecate(slugify, "Thing is deprecated. Use different thing instead.", "ERR1984");

function main() {
  const res = slugFn("Sir Peter deHaan", {decamelize: false});
  console.log(res);
  const res2 = slugFn("Dr Thomas Howell III");
  console.log(res2);
}

main();
