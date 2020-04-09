import { Menu } from '@lumino/widgets'
import { ICommandPalette } from '@jupyterlab/apputils'
import { IMainMenu } from '@jupyterlab/mainmenu'

import { GeoreferenceWidget } from './georeference-widget'

window._debug = window._debug || {}

const extension = {
  id: 'georeference-widget',
  autoStart: true,
  requires: [ICommandPalette, IMainMenu],
  activate: (app, palette, mainMenu) => {
    _debug.jupyter = app

    console.log("georeference-widget activating")

    const { commands, shell } = app
    
    const georefMenu = new Menu({ commands })
    georefMenu.title.label = 'Georeference'
    const command = 'georeference:open'
    commands.addCommand(command, {
      label: 'Open Georeference Widget',
      caption: 'Open Georeference Widget',
      execute: (args) => {
        const widget = new GeoreferenceWidget()
        shell.add(widget, 'main')
      }
    })
    georefMenu.addItem({ command, args: { origin: 'from the menu' } })
    mainMenu.addMenu(georefMenu, { rank: 80 })

    console.log("georeference-widget activated")
  }
}

console.log("georeference-widget loaded")

export default extension;
