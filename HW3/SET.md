
## STEP 1

####`/set`
`/set` generates  a key and stores it on Redis. Screenshots of CLI, Browser and Redis Client included below:
    <br><br>
![Screenshot set cli](https://cloud.githubusercontent.com/assets/9297464/6850932/6867690a-d3b2-11e4-82c3-b81a6951e29a.png)
    <br><br>  
![Screenshot set browser](https://cloud.githubusercontent.com/assets/9297464/6850981/a158d74e-d3b2-11e4-971c-1a6f6a5dab13.png)
    <br><br>
![Screenshot set redis](https://cloud.githubusercontent.com/assets/9297464/6851577/5bc35d86-d3b6-11e4-9912-e4f726cfca57.png)
    <br><br>
####`/get`
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

