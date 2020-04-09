# Rej is an interactive image registration tool for JupyterLab

![Rej in action for georeferencing](https://user-images.githubusercontent.com/223277/78885250-f6a34680-79f7-11ea-881c-0750549ff3c5.png)

## Installing Rej

You'll need both the JupyterLab widget, as well as the python library:

```
jupyter labextension install juplab-rej
pip install rej
```

## Using Rej

```
import rej
rej.register('./file1.tiff', './file2.tiff')
```

This should bring up the interactive UI shown above inside your jupyter notebook. Clicking "Save" will output a PTS file, which may be applied to the images to transform them. Enjoy!