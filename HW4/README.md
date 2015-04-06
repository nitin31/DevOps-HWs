#HomeWork 4

##Deployment, Data Migration and Mirroring

###Steps followed for homework:
* Git/Hook set up just like the workshop. The code is available in /Deployment/deploy/blue.git(or green.git)/hooks/post-receive
* Gree/Blue infrastructure is set up like the workshop. Code available in /Deployment/infrastructure.js and /Deployment/deploy/blue-www(or green-www)
* `/switch` route is implemented in /App/main.js which is later deployed within the green/ blue infrastructure. Details given in SWITCH.md
* Migration of data happens in infrastructure.js. Details available in MIGRATION.md
* Mirroring of data is done in /App/main.js. Details available in MIRROR.md
