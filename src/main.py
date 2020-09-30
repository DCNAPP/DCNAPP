import eel
import os
import socket
import time

# access the web folder
eel.init('web')
# run the html file 
eel.start('index.html', block=False)

# check the network Connection
# if false open html file display network error 
def Connection_Test():
    """Check The Network Connection"""
    try:
        socket.create_connection(('Google.com', 80))
        return True

    except OSError:
        os.system('start no-connection.html')
        return False

# call the Connection_Test function
Connection_Test()

while True:
    eel.sleep(10)