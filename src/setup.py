import os
import random
from time import (sleep)

def console(msg): os.system(msg)

console('cls')

def setup_ascii():
    '''print the "SETUP" '''
    print('''\t\t
     _____   _____   _____   _   _   _____
    /  ___| |  ___| |_   _| | | | | | ___ \\
    \\ `--.  | |__     | |   | | | | | |_/ /
     `--. \\ |  __|    | |   | | | | |  __/
    /\\__/ / | |___    | |   | |_| | | |
    \\____/  \\____/    \\_/    \\___/  \\_|
    ''')

def isDone(ExeFileName):
    if os.path.isfile(ExeFileName): 
        print('\n\33[92mDone\33[0m\n')

def format_(py_name,exe_name):
    '''format the output files from pyintaller command'''
    py_name_without = py_name[:-3]
    console(f'cd __pycache__ && del * /S /Q')
    console(f'rmdir __pycache__')
    console(f'cd build && del * /S /Q')
    console(f'cd build && rmdir {py_name_without}')
    console(f'rmdir build')
    console(f'cd dist && move {py_name_without}.exe ../')
    console(f'rmdir dist')
    console(f'del {py_name_without}.spec')
    console(f'rename {py_name_without}.exe {exe_name}')


def setup(py_name,exe_name='main.exe',free_console=False,icon=None):
    '''

    This Function Takes:
        py_name      : The main python file       (str),
        exe_name     : The exe file name          (str),
        free_console : Run without console screen (bool),
        icon         : Add icon to the exe file   (str)

    How To Use:
        setup(
            options...
        )
        
    '''
    setup_ascii()
    if free_console == True and icon == None:
        console(f'python -m eel {py_name} web --noconsole --onefile')
        

    if free_console == True and icon != None:
        console(f'python -m eel {py_name} web --icon={icon} --noconsole --onefile')


    if free_console == False and icon == None:
        console(f'python -m eel {py_name} web --onefile')
        
    
    if free_console == False and icon != None:
        console(f'python -m eel {py_name} web --icon={icon} --onefile')

    format_(py_name,exe_name)

    isDone(exe_name)


config = {
    "PythonFileName": "main.py",
    "ExeFileName": "DCNAPP.exe",
    "IconFileName": "dc.ico"
}

setup(
    py_name=config["PythonFileName"],
    exe_name=config["ExeFileName"],
    icon=config["IconFileName"],
    free_console=True
)