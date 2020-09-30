import os
import json
import requests
import time
try:
    import gdown
except ImportError:
    os.system('pip install gdown')


print("""
======================================

        Dcnapp install Script

======================================

This script will intall dcnapp by

Downloading zip file from google drive
And clean files for you 
The config files for this program
in the github repo 
You can access the repo by visiting : https://github.com/Senpai-10/DCNAPP 

""")

with open('https://senpai-10.github.io/DCNAPP/updater/ver.json') as f:
    jsdata = json.load(f)

version = jsdata['version']

data = requests.get(f'https://senpai-10.github.io/DCNAPP/versions/{version}/config.json')
jsondata = data.json()


id = jsondata['google-drive'][0]['id']     # read from config file
url = 'https://drive.google.com/uc?id=' + id
output = jsondata['google-drive'][0]['output'] 
gdown.download(url, output, quiet=False)

if os.path.exists(output):
    time.sleep(2)
    os.system(f'del installer.exe')
