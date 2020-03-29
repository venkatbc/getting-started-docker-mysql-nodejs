## Sample application to run nodejs with 2 containers, 1 ngnix container with load balance

## Step 1 Build Image of NodeJS

Goto docker-nodejs-mysql-container/loadbalancer/example1/nodejsservice folder

docker build -t nodejsmicroservice . 


## Step 2 Create two containers with ports 5001, 5002 from image nodejsmicroservice

docker container run -p 5001:5000 --name nodecontainer1 -d nodejsmicroservice:latest

docker container run -p 5002:5000 --name nodecontainer2 -d nodejsmicroservice:latest


## Step 3 Find the IP address of containers nodecontainer1 & nodecontainer2

docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' nodecontainer1

Example: output of above command is 172.0.2.36

docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' nodecontainer2

Example: output of above command is 172.0.2.36

## Step 4 Check website is up and running

http://172.0.2.36:5001
http://172.0.2.36:5002

## Step 5 Build Image of NGINX

Goto docker-nodejs-mysql-container/loadbalancer/example1/nginxsservice folder

docker build -t nginxservice

## Step 6 Create a container from nginxsservice image

docker container run -p 5000:80 -d nginxsservice:latest

## Step 7 Check the website using ngnixservice

http:172.0.2.36:5000
