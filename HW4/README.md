#HomeWork 4

##Deployment, Data Migration and Mirroring

###Steps followed for homework:
* Git/Hook set up just like the workshop. The code is available in `/Deployment/deploy/blue.git(or green.git)/hooks/post-receive`
* Gree/Blue infrastructure is set up like the workshop. Code available in `/Deployment/infrastructure.js` and `/Deployment/deploy/blue-www(or green-www)`
* `/switch` route is implemented in `/App/main.js` which is later deployed within the green/blue infrastructure. Details given in [SWITCH.md](SWITCH.md)
* Migration of data happens in `infrastructure.js`. Details available in [MIGRATION.md](MIGRATION.md)
* Mirroring of data is done in `/App/main.js`. Details available in [MIRROR.md](MIRROR.md)
* To execute the code in your machine, change the absolute addresses in three places in `main.js` to match the location on your machine.
* To push to green and blue slices, read the comments on `main.js`.
