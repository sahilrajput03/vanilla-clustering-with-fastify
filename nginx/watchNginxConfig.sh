nodemon -w /etc/nginx/ -e conf -x 'sudo systemctl restart nginx'
# This script is super useful coz when we have errors in our nginx.conf file 
# we can see error straight away as we write our nging.conf file and that is 
# very helpful way to check and go for hit and trial method to see what exactly 
# is causing the nginx restart server command to fail. Yikes!!
# 
# You can stop nginx server with ```sudo systemctl stop nginx``` command.
# You can check nging server status with ```sudo systemctl status nginx``` command.
