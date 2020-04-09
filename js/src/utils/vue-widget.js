import { Widget } from '@lumino/widgets'

export class VueWidget extends Widget {
  constructor(vue, id) {
    super()
    this.vue = vue
    this.id = id
    const el = document.createElement("div")
    this.node.appendChild(el)
    this.vue.$mount(el)
  }
  _detach() {
    this.vue.$destroy(this.node)
  }
}

