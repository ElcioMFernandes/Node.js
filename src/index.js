// CommonJS
const p = require("./cjs/index");

const { cjsExampleDefault } = require("./cjs/index"); // Importando função específica

p.cjsExample();

p.cjsExampleVariable();

cjsExampleDefault(); // TypeError: cjsExampleDefault is not a function

//p.cjsHiddenExample(); // Erro: cjsHiddenExample is not a function

// ES Modules