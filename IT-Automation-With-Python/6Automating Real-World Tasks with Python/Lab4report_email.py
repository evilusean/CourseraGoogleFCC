"""
Create another script named report_email.py to process supplier fruit description data from supplier-data/descriptions directory.
Use the following command to create report_email.py.
Import all the necessary libraries(os, datetime and reports) that will be used to process the text data from the supplier-data/descriptions 
directory into the format below:

name: Apple

weight: 500 lbs

[blank line]

name: Avocado

weight: 200 lbs

[blank line]

...

Once you have completed this, call the main method which will process the data and call the generate_report method from the reports module:
You will need to pass the following arguments to the reports.generate_report method: the text description processed from the text files as the
paragraph argument, the report title as the title argument, and the file path of the PDF to be generated as the attachment argument 
(use ‘/tmp/processed.pdf')

"""
#!/usr/bin/env python3
import reports
import emails
import os

#gets long alphanumeric username
user = os.getenv('USER')

#image directory
image_directory = '/home/{}/supplier-data/images/'.format(user)
