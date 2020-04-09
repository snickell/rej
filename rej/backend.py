from ipywidgets import DOMWidget
from traitlets import Unicode, Int

EXTENSION_VERSION="0.1.0"

class Rej(DOMWidget):
    _view_name = Unicode('RejDOMWidget').tag(sync=True)
    _model_name = Unicode('RejModel').tag(sync=True)
    _view_module = Unicode('ceresimaging-rej').tag(sync=True)
    _model_module = Unicode('ceresimaging-rej').tag(sync=True)

    _view_module_version = Unicode(EXTENSION_VERSION).tag(sync=True)
    _model_module_version = Unicode(EXTENSION_VERSION).tag(sync=True)

    def __init__(self, img, reference_img, *args, **kwargs):
        print("YOOOOO, I AM MEEEEEEEEEEE")
        super(Rej, self).__init__(*args, **kwargs)
        self.img = img
        self.reference_img = reference_img

    # def __init__(self, img, reference_img, *args, **kwargs):
    #     super().__init__(*args, **kwargs)
    #     self.img = img
    #     self.reference_img = reference_img

def register(img, reference_img):
    print("CHEEESE COMING")
  return Rej(img, reference_img)