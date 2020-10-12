import eel
import os
import socket
import time

# access the web folder
eel.init('web')
# run the html file 
eel.start('index.html')
# eel.start('index.html', block=False)


# while True:
#     eel.sleep(10)