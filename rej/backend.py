from ipywidgets import DOMWidget, trait_types
from traitlets import Unicode, Int

from .geotiff_to_png import geotiff_to_png

EXTENSION_VERSION="0.1.0"

class Rej(DOMWidget):
    _view_name = Unicode('RejDOMWidget').tag(sync=True)
    _model_name = Unicode('RejModel').tag(sync=True)
    _view_module = Unicode('ceresimaging-rej').tag(sync=True)
    _model_module = Unicode('ceresimaging-rej').tag(sync=True)

    _view_module_version = Unicode(EXTENSION_VERSION).tag(sync=True)
    _model_module_version = Unicode(EXTENSION_VERSION).tag(sync=True)

    # Disabled for now, enable this if we want to pass direct memory access rather than via URL
    #imagery = trait_types.CByteMemoryView(help="The media data as a memory view of bytes.").tag(sync=True)
    #reference = trait_types.CByteMemoryView(help="The media data as a memory view of bytes.").tag(sync=True)

    def __init__(self, img, reference_img, *args, **kwargs):
        print("Converting to PNG first...")
        super(Rej, self).__init__(*args, **kwargs)
        #self.img = img
        #self.reference_img = reference_img

        # TODO: use self.imagery and self.reference to pass this entirely
        # in memory, saving the slowness of writing out to S3!
        self.img = geotiff_to_png(img)[0]
        self.reference_img = geotiff_to_png(reference_img)[0]
        print(f"Loading: {self.img} and {self.reference_img}")
        

    # def __init__(self, img, reference_img, *args, **kwargs):
    #     super().__init__(*args, **kwargs)
    #     self.img = img
    #     self.reference_img = reference_img

def register(img, reference_img):
    return Rej(img, reference_img)
