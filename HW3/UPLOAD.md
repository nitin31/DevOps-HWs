
##STEP 3

####`/upload`

* `get` request to `/upload` displays a form on the client that can be used to upload any image.  
* Form sends a `post` request on submit. 
* `post` request handler stores this image in a queue on Redis using `lpush`.
* The screenshots are attached below. 

Upload form on the client:
<br><br>
![Upload Get](https://cloud.githubusercontent.com/assets/9297464/6856713/2a4e2804-d3d8-11e4-80df-da823d165646.png) 
<br><br>

Image data on the server: 
<br><br>
![Upload CLI](https://cloud.githubusercontent.com/assets/9297464/6856813/dc009c80-d3d8-11e4-9670-366094f6a5c3.png)
<br><br>

Image stored in Redis as seen on Redis Client:
<br><br>
![Upload Redis](https://cloud.githubusercontent.com/assets/9297464/6856869/2a7ed4bc-d3d9-11e4-953b-13106c0d7001.png)
<br><br>

####`/meow`

* `get` request to `/meow` pops an image from Redis and sends it to the client.
* Screenshots are included below.

Image as shown on the clinet:
<br><br>
![meow browser](https://cloud.githubusercontent.com/assets/9297464/6856981/ef81cf8a-d3d9-11e4-84f6-a2c9563b4abc.png)

<br><br>

CLI snapshot of `/meow` getting the image from Redis:
<br><br>
![meow CLI](https://cloud.githubusercontent.com/assets/9297464/6857022/390d29c4-d3da-11e4-95cf-d00fa799d5ac.png)
<br><br>

Redis client shows the image poped out and the queue empty:
<br><br>
![meow redis client](https://cloud.githubusercontent.com/assets/9297464/6857120/ffb21576-d3da-11e4-8bce-55c43a649745.png)

<br><br>

Browser when queue is empty:
<br><br>
![meow browser empty queue](https://cloud.githubusercontent.com/assets/9297464/6857151/2544f8b2-d3db-11e4-9624-97e699cdc828.png)
<br><br>


