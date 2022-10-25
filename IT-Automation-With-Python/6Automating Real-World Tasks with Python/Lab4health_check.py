"""
This is the last part of the lab, where you will have to write a Python script named health_check.py that will run in the background monitoring
some of your system statistics: CPU usage, disk space, available memory and name resolution. Moreover, this Python script should send an email if 
there are problems, such as:

Report an error if CPU usage is over 80%
Report an error if available disk space is lower than 20%
Report an error if available memory is less than 500MB
Report an error if the hostname "localhost" cannot be resolved to "127.0.0.1"
"""
#!/usr/bin/env python3

import os
import socket
import shutil
import psutil
import emails
