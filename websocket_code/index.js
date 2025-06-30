import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
    console.log("The websocket is connected");
    ws.send("Hello from the server");
    // setInterval(() => {
        //     ws.send("This is a random number " + Math.random());
        // }, 1000)
        ws.on("message", (e) => {
            if (e.toString() === "ping") {
                ws.send("pong");
            }
            else {
                ws.send(e.toString());
            }
        })
        
})