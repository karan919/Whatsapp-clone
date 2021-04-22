# Whatsapp-clone
Demo app for whatsapp which use React as FrontEnd and Node, Express, Pusher for Backend.

### How it works
The frontend send data to mongo. The pusher is watching the mongo and its send the changes to frontend. The front end is also subscribed to pusher, so it receicve the changes from pusher. Thus creating a real time chat communication system.


## How to start
1. Go in whatsapp_mern ( Frontend ) and run "npm install" command.
2. Then run "npm start" command.
3. Open new terminal and open whatsapp-backend and run "npm install" command.
4. Then run "nodemon server.js"

Thats all folks!!
![Screenshot from 2021-04-22 12-41-15](https://user-images.githubusercontent.com/20773128/115672161-e8a53700-a368-11eb-990a-57c70be51022.png)



