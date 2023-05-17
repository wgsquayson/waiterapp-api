# WaiterApp - Api

Hi! Welcome to WaiterApp, a system that manages the orders at a restaurant, with real-time updates.

This system is a personal project, and has other two parts, [web](https://github.com/wgsquayson/waiterapp-web) and [mobile](https://github.com/wgsquayson/waiterapp-mobile). The api part connects the web and mobile clients to a database, and sends real-time updates from mobile to web whenever an order comes in.

- [Express](https://expressjs.com)
- [Typescript](https://www.typescriptlang.org)
- [MongoDB](https://www.mongodb.com) for database
- [Socket.IO](https://socket.io) for real-time updates
- [Multer](https://www.npmjs.com/package/multer) for file upload

## How to run this api

- Clone this repository
- Run `yarn` on the root folder to install the project dependencies
- Setup your connection to the mongo database on `src/index.ts`
- Run `yarn dev` to start the server

## Preview

The app was built in brazilian portuguese, but it's pretty straight forward: when a order comes in, the api sends a message to the web client with the order data through the websocket protocol. The web server then immediatly renders the new order. It is possible to manipulate orders, categories and products via api.

<video src="https://github.com/wgsquayson/waiterapp-web/assets/43099794/e4f2f58e-e02d-4115-b6a5-677b902232de" /> 



