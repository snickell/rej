import createApp from './createapp'
import { VueWidget, VueDOMWidget } from './utils/vue-widget'
import { DOMWidgetView } from '@jupyter-widgets/base'

export class RejWidget extends VueWidget {
  constructor() {
    const vue = createApp()
    super(vue, 'georeference-widget')
    this.title.label = 'Georeference'
  }
}

export class RejDOMWidget extends DOMWidgetView {
  constructor() {
    super(createApp())
  }
}