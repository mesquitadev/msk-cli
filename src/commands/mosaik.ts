import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'mosaik',
  alias: ['msk'],
  run: async (toolbox) => {
    const { print } = toolbox

    print.info('Bem vindo ao Mosaik CLI')
    print.info('Para ver todos os comandos, digite mosaik -h')
  },
}

module.exports = command
