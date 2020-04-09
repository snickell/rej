import { Menu } from '@lumino/widgets'
import { ICommandPalette } from '@jupyterlab/apputils'
import { IMainMenu } from '@jupyterlab/mainmenu'
import { IJupyterWidgetRegistry } from '@jupyter-widgets/base'

import { RejWidget, RejDOMWidget } from './rej-widget'

window._debug = window._debug || {}

const extension = {
  id: 'rej:main',
  autoStart: true,
  requires: [
    ICommandPalette,
    IMainMenu,
    // TODO: If I enable this line, I get:
    // index.js:277 Error: No provider for: jupyter.extensions.jupyterWidgetRegistry
    // IJupyterWidgetRegistry,
  ],
  activate: (
    app, 
    palette,
    mainMenu,
    widgets,
  ) => {
    _debug.jupyter = app

    if (widgets != undefined) {
      widgets.registerWidget({
        name: 'ceresimaging-rej',
        version: '0.1.0',
        exports: { RejDOMWidget }
      })  
    } else {
      console.error("TODO: :-( we don't have the widget registry enabled")
    }

    console.log("rej activating")

    const { commands, shell } = app
    
    const georefMenu = new Menu({ commands })
    georefMenu.title.label = 'Georeference'
    const command = 'georeference:open'
    commands.addCommand(command, {
      label: 'Open Georeference Widget',
      caption: 'Open Georeference Widget',
      execute: (args) => {
        const widget = new RejWidget()
        shell.add(widget, 'main')
      }
    })
    georefMenu.addItem({ command, args: { origin: 'from the menu' } })
    mainMenu.addMenu(georefMenu, { rank: 80 })

    console.log("rej activated")
  }
}

console.log("rej loaded")

export default extension;
