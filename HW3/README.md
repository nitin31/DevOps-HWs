Cache, Proxies, Queues
=========================

## Option 2

* <h3>Step 1</h3>
<h4>`/set`</h4> 
`/set` generates  a key and stores it on Redis. Screenshots of CLI, Browser and Redis Client included below:
    <br><br>
![Screenshot set cli](https://cloud.githubusercontent.com/assets/9297464/6850932/6867690a-d3b2-11e4-82c3-b81a6951e29a.png)
    <br><br>  
![Screenshot set browser](https://cloud.githubusercontent.com/assets/9297464/6850981/a158d74e-d3b2-11e4-971c-1a6f6a5dab13.png)
    <br><br>
![Screenshot set redis](https://cloud.githubusercontent.com/assets/9297464/6851577/5bc35d86-d3b6-11e4-9912-e4f726cfca57.png)
    <br><br>
<h4> `/get`</h4>
`/get` returns the value of the `key` from Redis to the client. Screenshots of CLI and Browser included below:
<br><br>
![Screenshot get cli](https://cloud.githubusercontent.com/assets/9297464/6851316/b55beac2-d3b4-11e4-8f8f-1f9b7c170bb3.png)
<br><br>
![Screenshot get browser](https://cloud.githubusercontent.com/assets/9297464/6851319/b8f33262-d3b4-11e4-8ec1-1556fa90816c.png)
<br><br>
The `key` is set to auto delete in 10 sec, so below are the screenshots after 10 seconds showing that the key gets deleted: 
<br><br>
![Screenshot get cli - null](https://cloud.githubusercontent.com/assets/9297464/6851422/4f6d9a20-d3b5-11e4-931e-faafed954d82.png)
<br><br>
![Screenshot get browser - null](https://cloud.githubusercontent.com/assets/9297464/6851424/53efe742-d3b5-11e4-8620-59c1ec54cb5f.png)
<br><br>
* <h3>Step 2</h3>
<h4>`/recent`</h4>
`/recent` displays the 5 most recent visited routes. The top 5 routes are queued up in Redis using `lpush` and `ltrim`. The screenshots of CLI and Browser are included below:
<br><br>
![Screenshot recent CLI](https://cloud.githubusercontent.com/assets/9297464/6851998/9e51bfc4-d3b8-11e4-81ae-7f4b7fe18a95.png)
<br><br>
![Screenshot recent Browser](https://cloud.githubusercontent.com/assets/9297464/6852000/a11179b6-d3b8-11e4-9fec-827a19eaeac9.png)
<br><br>

* <h3>Step 3</h3>

Implement `/upload` and `/meow `. For details please check UPLOAD.md

* <h3>Step 4 & Step 5</h3>

Show multiple services running. For details please check PROXY.md

