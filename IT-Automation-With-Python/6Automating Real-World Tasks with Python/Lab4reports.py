"""
Create a script reports.py to generate PDF report to supplier using the nano editor:
Using the reportlab Python library, define the method generate_report to build the PDF reports.
We have already covered how to generate PDF reports in an earlier lesson; you will want to use similar concepts to create a PDF report named 
processed.pdf.

"""
#!/usr/bin/env python3
from reportlab.platypus import Paragraph, Spacer, Image, SimpleDocTemplate
from reportlab.lib.styles import getSampleStyleSheet


def generate_report(file, title, add_info):
    styles = getSampleStyleSheet()
    report = SimpleDocTemplate(file)
    report_title = Paragraph(title, styles['h1'])
    report_info = Paragraph(add_info, styles['BodyText'])
    empty_line = Spacer(1, 20)

    report.build([report_title, empty_line, report_info, empty_line])
