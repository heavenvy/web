#!/bin/sh
# crontab -e (as user heavenvy)
# @reboot /home/heavenvy/web/cron.start.sh

if [ $(ps -e -o uid,cmd | grep $UID | grep node | grep -v grep | wc -l | tr -s "\n") -eq 0 ]
then
        export PATH=/usr/local/bin:$PATH
        node /home/heavenvy/web/index.js >> /home/heavenvy/logs/node.log 2>&1
fi

