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

with open('https://senpai-10.github.io/DCNAPP/updater/.json') as f:
    jsdata = json.load(f)

version = jsdata['version']

data = requests.get(f'https://senpai-10.github.io/DCNAPP/versions/{version}/config.json')
jsondata = data.json()



id = jsondata['google-drive'][0]['id']     # read from config file
url = 'https://drive.google.com/uc?id=' + id
output = jsondata['google-drive'][0]['output'] 
gdown.download(url, output, quiet=False) 