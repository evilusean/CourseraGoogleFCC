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

#Listing all files in image directory
files = os.listdir(image_directory)

#parse through all images
for image_name in files:

    #gets all images in jpeg format
    if not image_name.startswith('.') and 'jpeg' in image_name:

        #create path for each image
        image_path = image_directory + image_name

        #uploads jpeg to webserver
        with open(image_path, 'rb') as opened:
            r = requests.post(url, files={'file': opened})
