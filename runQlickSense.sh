#!/bin/bash

COUTPUT=$(curl "Accept: application/json" -H "Content-Type: application/json" http://localhost:3000/qlicksense)
echo $COUTPUT
# MOUTPUT=$(mail -r hariom.devops@gmail.com -s "My Dashboard | QlickSense | $(date) " -a /home/automation/QLICK_SENSE.jpeg hariom.devops@gmail.com <<< "My Dashboard | QlickSense [$(date)] -  Automation - $COUTPUT")
# echo $MOUTPUT
CONTENT="<html> <head></head> <body>  <img src='cid:QLICK_SENSE.jpeg' /> 
</br> </br> This is an automatically generated email [$(date)] - Dynamic Scraper </body> </html>"
echo $CONTENT | tee /home/automation/qc.html
MOUTPUT=$(mutt -e "my_hdr From:hariom.devops@gmail.com;set content_type=text/html" hariom.devops@gmail.com -s "My Dashboard | QlickSense | $(date) " -a /home/automation/QLICK_SENSE.jpeg </home/automation/qc.html)
echo $MOUTPUT
rm /home/automation/qc.html
