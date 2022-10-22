"""
In a similar way, you are going to write a script named supplier_image_upload.py that takes the jpeg images from the supplier-data/images directory
that you've processed previously and uploads them to the web server fruit catalog.

Complete the script with the same technique as used in the file example_upload.py.
"""
#!/usr/bin/env python3

import os
import requests

#gets long alphanumeric username
user = os.getenv('USER')

#image directory
image_directory = '/home/{}/supplier-data/images/'.format(user)

url = "http://localhost/upload/"

with open('/usr/share/apache2/icons/icon.sheet.png', 'rb') as opened:
    r = requests.post(url, files={'file': opened})
