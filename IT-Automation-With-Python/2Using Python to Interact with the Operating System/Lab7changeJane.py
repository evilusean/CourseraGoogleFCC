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
###Not working
#attempt 3
#!/usr/bin/env python3
import sys
import subprocess

f=open(sys.argv[1], "r")
path='/home/student-00-b5c7881ca4c3'
for line in f.readlines():
        old_name= line.strip()
        new_name= old_name.replace("jane", "jdoe")
        subprocess.run(["mv",path+old_name,path+new_name])
f.close()
####Try above; if fails try below tomorrow
#!/usr/bin/env python3
import sys
import subprocess
with open(sys.argv[1], 'r') as f:
    content1 = f.readlines()
    content2 = [x.strip() for x in content1]
    content3 = [item.replace("jane", "jdoe") for item in content2]
    res = dict(zip(content2, content3))
    for key, value in res.items():
        subprocess.run(['mv', '/home/student-00-b5c7881ca4c3/'+key, '/home/student-00-b5c7881ca4c3/'+value])
