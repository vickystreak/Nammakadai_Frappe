from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in nammakadai/__init__.py
from nammakadai import __version__ as version

setup(
	name="nammakadai",
	version=version,
	description="pettyshop",
	author="vicky",
	author_email="vickystreak.s1@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
