import { Widget } from '@lumino/widgets'
import { DOMWidgetView } from '@jupyter-widgets/base'

export class VueWidget extends Widget {
  constructor(vue, id) {
    super()
    this.vue = vue
    this.id = id
    const el = document.createElement("div")
    this.node.appendChild(el)
    this.vue.$mount(el)
  }
  // TODO: implement  
  _detach() {
    this.vue.$destroy(this.node)
  }
}

export class VueDOMWidget extends DOMWidgetView {
  constructor(vue, id) {
    super()
    this.vue = vue
  }  
  render() {
    const el = document.createElement("div")
    this.el.appendChild(el)
    this.vue.$mount(el)
  }
  // TODO: implement
  // this.vue.$destroy()
}
