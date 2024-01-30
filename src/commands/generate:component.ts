import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'generate:component',
  alias: ['g:c'],
  run: async (toolbox) => {
    const { print, parameters, template, filesystem } = toolbox

    if (!parameters.first) {
      print.error('Component name must be specified')
      return
    }

    const pack = await filesystem.read('package.json', 'json')
    const isReact = !!pack.dependencies['react-native']

    const appType = isReact
      ? 'component-react.ts.ejs'
      : 'component-angular.ts.ejs'

    const appTypeDir = isReact
      ? `src/components/${parameters.first}/index.tsx`
      : `src/components/ng/${parameters.first}/index.tsx`

    await template.generate({
      template: appType,
      target: appTypeDir,
    })

    print.success(`Component ${parameters.first} created successfully`)
  },
}

module.exports = command
