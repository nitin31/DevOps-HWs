
###`/switch` 
`/switch` route added to switch between the blue and green slice. The way switching works: 
* `infrastructure.js` started using forever, command used: `forever -e start infrastructure.js`.
* in `main.js`, a `/switch` route restarts the service using `forever restart`.
* when the rervice restarts, redis used to switch between slices. 

####Screenshots

* `infrastructure.js` starts with BLUE as default on CLI
<br><br>
![infra1](https://cloud.githubusercontent.com/assets/9297464/7016219/ee155b62-dcad-11e4-86bd-7bc440743aa2.png)
<br><br>
* on the browser
<br><br>
![browser](https://cloud.githubusercontent.com/assets/9297464/7016228/321ae6a6-dcae-11e4-822c-6fb0a2210164.png)
<br><br>
* after switching on CLI
<br><br>
![infra2](https://cloud.githubusercontent.com/assets/9297464/7016245/8e052378-dcae-11e4-9fff-3988ea5380f6.png)
<br><br>
* switching window on browser
<br><br>
![browser2](https://cloud.githubusercontent.com/assets/9297464/7016254/bf1e9ba6-dcae-11e4-988a-fb12ebd1142a.png)
<br><br>
* after switching home page shows change in slice
<br><br>
![browser3](https://cloud.githubusercontent.com/assets/9297464/7016259/d999ffac-dcae-11e4-8a3f-f097210de7af.png)
<br><br>
