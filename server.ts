import path from 'path'
import express, { Express } from 'express'
import WebSocket from 'ws'

const app = express()

const wsServer = new WebSocket.Server({ port: 8080 })

wsServer.on('connection', (socket: WebSocket, req) => {
  socket.on('message', (inMsg) => {
    console.log('inMsg: ', inMsg)
    socket.send(inMsg)
  })
})