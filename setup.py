import pathlib
from setuptools import setup, find_packages

DOT = pathlib.Path(__file__).parent
README = (DOT / "README.md").read_text()

setup(
    name="rej",
    version="0.1.0",
    description="Interactive image registration tool for JupyterLab",
    long_description=README,
    long_description_content_type="text/markdown",
    url="https://github.com/ceresimaging/rej",
    author="Seth Nickell",
    author_email="snickell@gmail.com",
    license="MIT",
    classifiers=[
        "License :: OSI Approved :: MIT License",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.7",
    ],
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
      "ipywidgets",
      "traitlets",
      "rasterio",
    ],
)
