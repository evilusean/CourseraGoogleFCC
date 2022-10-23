"""
Write a Python script named run.py to process the text files (001.txt, 003.txt ...)
from the supplier-data/descriptions directory. The script should turn the data into a JSON dictionary by adding all the required fields,
including the image associated with the fruit (image_name), and uploading it to http://[linux-instance-external-IP]/fruits using the Python requests 
library.

Now, you'll have to process the .txt files (named 001.txt, 002.txt, ...) in the supplier-data/descriptions/ directory and save them in a 
data structure so that you can then upload them via JSON. Note that all files are written in the following format, with each piece of information
on its own line:
name
weight (in lbs)
description
The data model in the Django application fruit has the following fields: name, weight, description and image_name. 
The weight field is defined as an integer field. So when you process the weight information of the fruit from the .txt file, you need to convert
it into an integer. For example if the weight is "500 lbs", you need to drop "lbs" and convert "500" to an integer.

The image_name field will allow the system to find the image associated with the fruit. Don't forget to add all fields, including the image_name! 
The final JSON object should be similar to:

{"name": "Watermelon", "weight": 500, "description": "Watermelon is good for relieving heat, eliminating annoyance and quenching thirst.
It contains a lot of water, which is good for relieving the symptoms of acute fever immediately. The sugar and salt contained in watermelon can
diuretic and eliminate kidney inflammation. Watermelon also contains substances that can lower blood pressure.", "image_name": "010.jpeg"}

Iterate over all the fruits and use post method from Python requests library to upload all the data to the 
URL http://[linux-instance-external-IP]/fruits
"""
#! /usr/bin/env python3
import os
import requests

#gets long alphanumeric username
user = os.getenv('USER')

#image directory
description_directory = '/home/{}/supplier-data/descriptions/'.format(user)

def catalog_data(url, description_dir):
    """This function will return a list of dictionaries with name, weight, description, image_name.
    It also changes the weight to integer format.
    """
    fruit = {}
    for item in os.listdir(description_dir):
        fruit.clear()
        filename = os.path.join(description_dir, item)
        with open(filename) as f:
            line = f.readlines()
            description = ""
            for i in range(2, len(line)):
                description = description + line[i].strip('\n').replace(u'\xa0', u'')
            fruit["description"] = description
            fruit["weight"] = int(line[1].strip('\n').strip('lbs'))
            fruit["name"] = line[0].strip('\n')
            fruit["image_name"] = (item.strip('.txt')) + '.jpeg'
            print(fruit)
            if url != "":
                response = requests.post(url, json=fruit)
                print(response.request.url)
                print(response.status_code)
    return 0


if __name__ == '__main__':
    url = 'http://localhost/fruits/'
    catalog_data(url, description_directory)
