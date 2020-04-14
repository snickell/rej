import createApp from './createapp'
import { VueWidget, VueDOMWidget } from './utils/vue-widget'
import { DOMWidgetModel } from '@jupyter-widgets/base'

import { PageConfig } from '@jupyterlab/coreutils';

export class RejWidget extends VueWidget {
  constructor() {
    const vue = createApp()
    super(vue, 'georeference-widget')
    this.title.label = 'Georeference'
  }
}

export class RejDOMWidget extends VueDOMWidget {
  constructor(...rest) {
    super(...rest)
  }
  createVue() {
    const { img_path, ref_path } = this.model.attributes
    const baseUrl = PageConfig.getBaseUrl()
    
    return createApp({
      referenceURL: `${baseUrl}${ref_path}`,
      imageryURL: `${baseUrl}${img_path}`,
    })
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
      img_path: "flights/Flight%208658/qc/2019-09-23%201380%20Harlan%20Blocks%20GOES.gif",
      ref_path: "flights/Flight%208658/qc/2019-09-23%201380%20Harlan%20Blocks%20GOES.gif",
    }
  }
}