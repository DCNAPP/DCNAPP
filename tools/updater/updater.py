import os
import requests
import time
import random

def loading(msg):
    dot = "."
    for i in range(random.randint(3, 5)):
        print(msg, end="")
        print(dot, end="\r")
        time.sleep(0.233)
        dot += "."

def console(msg): os.system(msg)

console('cls')


r = requests.get('https://senpai-10.github.io/DCNAPP/config/version.json')
config = r.json()

VersionNumber = config['latest-version']

def download(name): 
    with requests.get(f'https://github.com/Senpai-10/DCNAPP/releases/download/{VersionNumber}/DCNAPP.exe') as rq:
        with open(f'{name}', 'wb') as f:
            f.write(rq.content)

    if os.path.isfile(name): print('\nDownloading \33[92mDone\33[0m\n')


def delete(name):
    if os.path.isfile(name): console(f'del {name}')

def ReadVersion():
    try:
        with open('version.txt', 'r') as f:
            return(f.read())

    except IOError:
        return 'Cannot find version.txt'




def main():
    print('\33[90m')

    print(r'''
    ____  _______   _____    ____  ____     __  ______  ____  ___  ________________ 
   / __ \/ ____/ | / /   |  / __ \/ __ \   / / / / __ \/ __ \/   |/_  __/ ____/ __ \
  / / / / /   /  |/ / /| | / /_/ / /_/ /  / / / / /_/ / / / / /| | / / / __/ / /_/ /
 / /_/ / /___/ /|  / ___ |/ ____/ ____/  / /_/ / ____/ /_/ / ___ |/ / / /___/ _, _/ 
/_____/\____/_/ |_/_/  |_/_/   /_/       \____/_/   /_____/_/  |_/_/ /_____/_/ |_|  

''')
    print('\33[0m')

    if not os.path.isfile('DCNAPP.exe'):
        print(f'\33[93m* You need to keep the updater with DCNAPP.exe at the same folder \33[0m\n')
        console('pause')
        

    loading("Checking for updates")

    if ReadVersion() == config['latest-version']:
        print('\nThere is no new update ):\n')
        console('pause')
        exit()
    
    print('\n')

    print(f'latest version of DCNAPP = {VersionNumber}\n')

    # print('Your DCNAPP version = ' + ReadVersion())

    print('\n')

    if ReadVersion() != config['latest-version'] or ReadVersion() == 'Cannot find version.txt':
        print('Type "start" to download the new version\n')
        start = input('\33[90m~ \33[0m')

        if start.lower() == 'start':
            print('\n')

            delete('DCNAPP.exe')
            loading("Downloading")
            download('DCNAPP.exe')

    print('\n')
    console('pause')

if __name__ == "__main__":
    main()