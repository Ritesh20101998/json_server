const jsonserver = require("json-server")
const cors = require("cors")
const path = require("path")

const server=jsonserver.create();
const router=jsonserver.router("db.json")

const middleware=jsonserver.defaults();

server.use(cors());
server.use(middleware);
server.use(router);
server.use(jsonserver.bodyParser);

server.listen(4110,()=>{
    console.log("server is listning on port 4110")
})