
###`/switch` triggers migration of data from last used slice to the one it switched to. How it is accomplished:
<br>
* when `/switch` triggers change of slice, all the content of the `images` key is copied from the previously used slice to the one it is switched to. 
* `lrange` command in redis is used to copy all data without popping it out. 
* code is available on `infrastructure.js`.
