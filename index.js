'use strict';

const core = require('@actions/core');

module.exports.run = async () => {
  try {
    const entrada = core.getInput('entrada');

    core.setOutput(entrada.toUpperCase());

    core.info('Éxito');
  } catch (error) {
    core.setFailed('Error al intentar poner el texto en mayúsculas');
  }
};

run();
