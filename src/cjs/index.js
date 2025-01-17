// Importando módulos com CommonJS
const config = require('./config/index.js');

// Exportando módulos com CommonJS
// Single export
const cjsExample =  async () => {
    console.log('Example of CommonJS module');
};

// Multiple exports
const cjsExampleVariable = () => {
    console.log(`DEBUG: ${config.DEBUG}`);
};

// Export default - Exporta uma função por padrão, sem a necessidade de especificar o nome da função ao importar
// Quando você usa module.exports, ele sobrescreve qualquer exportação anterior feita com exports. 
exports.cjsExampleDefault = async () => {
    console.log(`API: ${config.API_URL}`);
};

// Hidden export - Não exporta a função, tornando-a privada
const cjsHiddenExample = () => {
    console.log('Hidden example');
};

module.exports = {
    cjsExample, // Single export - Exporta uma função
    cjsExampleVariable // Multiple exports - Exporta multiplas funções separadas por vírgula

};