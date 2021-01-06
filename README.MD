# Transponder simulator
A little mock that send vehicule position to a server in itervelled time for simulate service provider of transponder during a rallye

## Run project
npm install
npm start

## Server
The program will ask you the adress of a server for sending request.
The url of the route of the rallye server is : https://powerful-earth-91256.herokuapp.com/map/position

## Warning
Avoid to send request at higher frequency than 1000 ms on the Heroku server