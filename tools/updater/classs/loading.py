import os
import time



class loading:
    def mainLoading(self,
                    delay,
                    loadingWord):
        animation = ["|", "/", "-", "\\"]
        for j in range(int(delay)):
            for i in animation:
                print(loadingWord, i, end='\r')
                time.sleep(0.1)
        print(loadingWord, '\33[92mDone\33[0m')

    def Search(self): self.mainLoading(delay=15, loadingWord='Checking for updates...')

    def download(self): self.mainLoading(delay=10, loadingWord='Downloading...')



Loading = loading()

