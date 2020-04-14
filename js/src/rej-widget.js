import { VueWidget, VueDOMWidget } from './utils/vue-widget'
import { DOMWidgetModel } from '@jupyter-widgets/base'
import { PageConfig } from '@jupyterlab/coreutils';

import createApp from './createapp'

export class RejWidget extends VueWidget {
  constructor() {
    const vue = createApp()
    super(vue, 'georeference-widget')
    this.title.label = 'Georeference'
  }
}

const toDataURL = (pngBytes) =>
  URL.createObjectURL(
    new Blob(
      [pngBytes], {
        type: 'image/png'
      }
    )
  )


export class RejDOMWidget extends VueDOMWidget {
  constructor(...rest) {
    super(...rest)
  }
  createVue() {
    const { img_path, ref_path } = this.model.attributes
    const baseUrl = PageConfig.getBaseUrl()

    return createApp({
      //referenceURL: toDataURL(this.model.get('imagery')),
      //imageryURL: toDataURL(this.model.get('reference')),
      referenceURL: `${baseUrl}files/${ref_path}`,
      imageryURL: `${baseUrl}files/${img_path}`,
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
      img_path: "flights/improc.png",
      ref_path: "flights/Flight%208658/qc/2019-09-23%201380%20Harlan%20Blocks%20GOES.gif",
      //imagery: new DataView(new ArrayBuffer(0)),
      //reference: new DataView(new ArrayBuffer(0)),
    }
  }
  static serializers = {
    ...DOMWidgetModel.serializers,
    value: {
      serialize: (value) => new DataView(value.buffer.slice(0))
    }
  }
}
