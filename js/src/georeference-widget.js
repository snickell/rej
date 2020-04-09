import createApp from './createapp'
import { VueWidget } from './utils/vue-widget'

export class GeoreferenceWidget extends VueWidget {
  constructor() {
    const vue = createApp()
    super(vue, 'georeference-widget')
    this.title.label = 'Georeference'
  }
}
