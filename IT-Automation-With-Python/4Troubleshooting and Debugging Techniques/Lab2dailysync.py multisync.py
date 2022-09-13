#/home/student-00-daf1b469dacb
"""
#!/usr/bin/env python
import subprocess
src = "/data/prod/"
dest = "/data/prod_backup/"
subprocess.call(["rsync", "-arq", src, dest])
"""
#!/usr/bin/env python
import subprocess
from multiprocessing import Pool
import os

global src
src = "/home/student-00-daf1b469dacb/data/prod/"
 
 
def sync_data(folder):
    dest = "/home/student-00-daf1b469dacb/data/prod_backup/"
    subprocess.call(["rsync", "-arq", folder, dest])
    print("Handling {}".format(folder))
 

if __name__ == "__main__":
    folders = []
    root = next(os.walk(src))[0]
    dirs = next(os.walk(src))[1]
 
    for dir in dirs:
        folders.append(os.path.join(root, dir))
        pool = Pool(len(folders)) if len(folders) != 0 else Pool(1)
        pool.map(sync_data, folders)

        
#Multisync.py

#!/usr/bin/env python3
from multiprocessing import Pool
def run(task):
  # Do something with task here
    print("Handling {}".format(task))
if __name__ == "__main__":
  tasks = ['task1', 'task2', 'task3']
  # Create a pool of specific number of CPUs
  p = Pool(len(tasks))
  # Start each task within the pool
  p.map(run, tasks)

