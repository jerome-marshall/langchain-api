import dotenv from "dotenv"
import express, { Request } from "express"
import routes from "./routes.js"
import cors from "cors"

dotenv.config()

const app = express()

app.use(cors<Request>())

app.listen(3000, () => {
  console.log("App listening on port 3000!")

  routes(app)
})
