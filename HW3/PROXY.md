## STEP 4 & 5

#### Set up additional services to listen on ports 3001, 3002, 3003.

Snapshot of CLI showing 3 services running:
<br><br>
![Additional services](https://cloud.githubusercontent.com/assets/9297464/6857240/d6ba775c-d3db-11e4-9e72-aac527f87d6d.png)
<br><br>

#### Set up a proxy that uniformly delivers requests to the three services running. 

* We store the urls of services running in Redis.
* There is a loadbalancer running which looks up the services addresses in Redis and redirects the request to these servers in a round robin manner.
* When a server is chosen to redirect a request to, it is poped from the redis server and pushed at the end of the queue.
* In this example, loadbalancer runs on localhost:3000 and uses `res.redirect()` to distribute requests.
* To run this service, run both `node main.js` and `node loadbalancer.js`.
* Few screenshots are included below.

Different requests served to different servers depending on the queue values:
<br><br>
![loadbalancer](https://cloud.githubusercontent.com/assets/9297464/6857559/dfcb8e38-d3dd-11e4-8b4a-6d27260993eb.png)
<br><br>
The last request for the above screenshot served on the browser:
![lb browser](https://cloud.githubusercontent.com/assets/9297464/6857602/3d1c59be-d3de-11e4-9e51-95e10f42b7a9.png)
<br><br>
Redis with server addresses:
<br><br>
![redis servers](https://cloud.githubusercontent.com/assets/9297464/6857636/9c4349a2-d3de-11e4-88ae-595eee445a57.png)


