""" 
This script will update the program
"""

import os
import time
import requests
import json

try:
    import gdown
except ImportError as e:
    os.system('pip install gdown')

print("""
======================================

        Dcnapp Update Script

======================================

This script will update dcnapp by

Downloading zip file from google drive
And clean files for you 
The config files for this program
in the github repo 
You can access the repo by visiting : https://github.com/Senpai-10/DCNAPP 

""")


class update:

    def clean(self):
        ...

update = update()



data = requests.get('https://github.com/Senpai-10/DCNAPP/blob/master/versions/2020.09.30/config.json')
jsondata = data.json()
print(jsondata)


# id = '1ukI1C4XGRHeCmCVwNoudv_4wG1JYTkgT'     # read from config file
# url = 'https://drive.google.com/uc?id=' + id
# output = 'spam.png'
# gdown.download(url, output, quiet=False) 