import dotenv from "dotenv"
import express, { Request } from "express"
import routes from "./routes.js"
import cors from "cors"

dotenv.config()

const app = express()

app.use(cors<Request>())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`)

  routes(app)
})
