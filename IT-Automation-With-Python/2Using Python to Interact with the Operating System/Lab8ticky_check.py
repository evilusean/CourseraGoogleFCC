#!/usr/bin/env python3

import re
import csv
import operator
import sys

per_user = {}
errors = {}

logfile = 'syslog.log'
f = open(logfile, 'r')

errorfile = 'error_message.csv'
userfile = 'user_statistics.csv'

for log in f:
        result = re.search(r"ticky: ([\w+]*):? ([\w' ]*) [\[[0-9#]*\]?]? ?\((.*)\)$", log)
        if result.group(2) not in errors.keys():
                errors[result.group(2)] = 0
        errors[result.group(2)] += 1
        if result.group(3) not in per_user.keys():
                per_user[result.group(3)] = {}
                per_user[result.group(3)]["INFO"] = 0
                per_user[result.group(3)]["ERROR"] = 0

        if result.group(1) == "INFO":
                per_user[result.group(3)]["INFO"] += 1
        elif result.group(1) == "ERROR":
                per_user[result.group(3)]["ERROR"] += 1

errors = sorted(errors.items(), key = operator.itemgetter(1), reverse = True)
per_user = sorted(per_user.items())

f.close()
errors.insert(0, ('Error', 'Count'))

with open(errorfile, 'w',newline='') as f:
     err=csv.writer(f)
     for error in errors:
         a,b = error
         err.writerow([a,b])


with open(userfile, 'w',newline='') as f:
     
     user=csv.writer(f)
     for stats in per_user:
         a, b = stats
         user.writerow([a,b["INFO"],b["ERROR"]])
