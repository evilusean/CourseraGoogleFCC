#!/usr/bin/env python3
import sys
import subprocess

with open(sys.argv[1], 'r') as f:
        for filename in f.readlines():
                newFilename = filename[:-1].strip().replace{"jane", "jdoe")
                subprocess.run(['mv', "~/" +filename[:-1], "~/" + newFilename])
###Not Working
#Attempt 2
#!/usr/bin/env python3
import sys
import subprocess

myFile = open("oldFiles.txt", "r")
data = myFile.read()
new_string = data.replace('jane', 'jdoe')
print(new_string)
subprocess.run(["mv", myFile, new_string])
