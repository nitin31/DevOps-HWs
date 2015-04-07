
#### Mirroring saves the images when uploaded using `/upload` in both slices.

* A `mirror` flag is given as argument to forever when starting `infrastructure.js` (screenshot included). 
<br><br>
![mirror_cli](https://cloud.githubusercontent.com/assets/9297464/7016422/c8014568-dcb1-11e4-86d1-f68522421c33.png)
<br><br>
* The flag is passed on to `main.js` from `infrastructure.js` as an argument with `forever`. `forever start --watch deploy/blue-www/main.js 3001 mirror`
* When `main.js` receives `mirror` as an argument from `infrastructure.js`, it writes images to both instances of Redis rather than just one. 
