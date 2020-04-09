import createApp from './createapp'
import { VueWidget, VueDOMWidget } from './utils/vue-widget'
import { DOMWidgetModel } from '@jupyter-widgets/base'

export class RejWidget extends VueWidget {
  constructor() {
    const vue = createApp()
    super(vue, 'georeference-widget')
    this.title.label = 'Georeference'
  }
}

export class RejDOMWidget extends VueDOMWidget {
  constructor(...rest) {
    super(createApp(), ...rest)
  }
}

export class RejModel extends DOMWidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _view_name: 'RejDOMWidget',
      _model_name: 'RejModel',
      _model_module: 'ceresimaging-rej',
      _view_module: 'ceresimaging-rej',
    }
  }
}