import os
import requests



def console(msg): os.system(msg)

console('cls')

def ReadJson(Key):
    r = requests.get('https://senpai-10.github.io/DCNAPP/versions/version.json')
    rj = r.json()

    return(rj[Key])




def download(name): 
    with requests.get(ReadJson("download-url")) as rq:
        with open(f'{name}', 'wb') as f:
            f.write(rq.content)

    if os.path.isfile(name): print('\nDownloading \33[92mDone\33[0m\n')


def delete(name):
    if os.path.isfile(name): console(f'del {name}')



def main():
    print('####################################################')
    print('#                                                  #')
    print('#                  DCNAPP UPDATER                  #')
    print('#                                                  #')
    print('####################################################\n')

    v = ReadJson('latest-version')

    print(f'latest version of DCNAPP = {v}\n\n')

    print(f'\33[93m* You need to keep the updater with DCNAPP.exe at the same folder \33[0m\n')

    print(f'type "start" to donwload the latest version of DCNAPP\n')
    start = input(': ')

    if start.lower() == 'start': 
        delete('DCNAPP.exe')
        download('DCNAPP.exe')
    
    console('pause')

if __name__ == "__main__":
    main()