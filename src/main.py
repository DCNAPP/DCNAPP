import eel
import os
import socket
import time

# access the web folder
eel.init('web')
# run the html file 
# eel.start('index.html')
eel.start('index.html', block=False)

@eel.expose
def exit_py():
    '''
    exit() is fixing:
        after you close dcnapp the program is still running in the background
    
    '''
    exit()


while True:
    eel.sleep(10)