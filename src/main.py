import eel
import os
import socket
import time

# access the web folder
eel.init('web')


# run the html file 
# eel.start('index.html')
eel.start('index.html', block=False)


# def getTasks(ProcessName):
#     r = os.popen('tasklist /v').read().strip().split('\n')
#     print('# of tasks is %s' % (len(r)))
#     for i in range(len(r)):
#         s = r[i]
#         if ProcessName in r[i]:
#             print('%s in r[i]' %(ProcessName))
#             return r[i]
#     return []

# def CheckOpenWindow(ProcessName):
    
#     Name = ProcessName
#     # notResponding = 'Not Responding'

#     r = getTasks(Name)

#     if not r:
#         print('%s - No Such process' % (Name))
#         exit()

#     elif 'Not Responding' in r:
#         print('%s is Not Responding' % (Name))

#     else:
#         print('%s is Running or Unknown' % (Name))


while True:

    eel.sleep(10)

    # CheckOpenWindow('DCNAPP')
