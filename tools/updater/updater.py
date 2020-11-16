import os
import requests
from classs.loading import Loading


def console(msg): os.system(msg)

console('cls')

def ReadJson(Key):
    r = requests.get('https://senpai-10.github.io/DCNAPP/config/version.json')
    rj = r.json()

    return(rj[Key])



def download(name): 
    with requests.get(ReadJson("download-url")) as rq:
        with open(f'{name}', 'wb') as f:
            f.write(rq.content)

    # if os.path.isfile(name): print('\nDownloading \33[92mDone\33[0m\n')


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
        

    Loading.Search()

    if ReadVersion() == ReadJson('latest-version'):
        print('\nThere is no new update ):\n')
        console('pause')
        exit()
    
    print('\n')

    LatestVersion = ReadJson('latest-version')

    print(f'latest version of DCNAPP = {LatestVersion}\n')

    print('Your DCNAPP version = ' + ReadVersion())

    print('\n')

    

    if ReadVersion() != ReadJson('latest-version') or ReadVersion() == 'Cannot find version.txt':
        print('Type "start" to download the new version\n')
        start = input('\33[90m~ \33[0m')

        if start.lower() == 'start':
            print('\n')

            delete('DCNAPP.exe')
            Loading.download()
            download('DCNAPP.exe')

    print('\n')
    console('pause')

if __name__ == "__main__":
    main()