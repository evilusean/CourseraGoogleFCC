"""
Once the PDF is generated, you need to send the email using the emails.generate_email() and emails.send_email() methods.

Create emails.py using the nano editor

Define generate_email and send_email methods by importing necessary libraries.

Once you have finished editing the emails.py script, save the file by typing Ctrl-o, Enter key, and Ctrl-x.

Now, open the report_email.py script using the nano editor:

nano ~/report_email.py
Copied!
Once you define the generate_email and send_email methods, call the methods under the main method after creating the PDF report:

if __name__ == "__main__":
Copied!
Use the following details to pass the parameters to emails.generate_email():

From: automation@example.com
To: username@example.com
Replace username with the username given in the Connection Details Panel on the right hand side.
Subject line: Upload Completed - Online Fruit Store
E-mail Body: All fruits are uploaded to our website successfully. A detailed list is attached to this email.
Attachment: Attach the path to the file processed.pdf
Once you have finished editing the report_email.py script, save the file by typing Ctrl-o, Enter key, and Ctrl-x.

Grant executable permissions to the script report_email.py.

Run the report_email.py script.

./report_email.py
Copied!
Now, check the webmail by visiting [linux-instance-external-IP]/webmail. Here, you'll need a login to roundcube using the username and 
password mentioned in the Connection Details Panel on the left hand side, followed by clicking Login.

Now you should be able to see your inbox, with one unread email. Open the mail by double clicking on it. There should be a report in PDF 
format attached to the mail. View the report by opening it.
"""
#!/usr/bin/env python3
import os
import emails
import smtplib
import mimetypes

def generate_email(sender, recipient, subject, body, attachment_path):
    #Creates an email with attachment
    message = email.message.EmailMessage()
    message["From"] = sender
    message["To"] = recipient
    message["Subject"] = subject
    message.set_content(body)

    #if the attachment is empty no email sent
    if not attachment_path == "":
        #Process the attachment and add it to the email
        attachment_filename = os.path.basename(attachment_path)
        mime_type, _ = mimetypes.guess_type(attachment_path)
        mime_type, mime_subtype = mime_type.split('/', 1)

        with open(attachment_path, 'rb') as ap:
            message.add_attachment(ap.read(), maintype=mime_type, subtype=mime_subtype,
                                   filename=attachment_filename)

    return message


def send_email(message):
    #Sends the message to the SMTP server
    mail_server = smtplib.SMTP('localhost')
    mail_server.send_message(message)
    mail_server.quit()
