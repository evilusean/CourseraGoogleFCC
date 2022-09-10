"""
#original code:
#!/usr/bin/env python
import subprocess
src = "/data/prod/"
dest = "/data/prod_backup/"
subprocess.call(["rsync", "-arq", src, dest])
"""
