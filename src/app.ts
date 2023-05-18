import dotenv from "dotenv"
import express from "express"
import routes from "./routes.js"

dotenv.config()

const app = express()

app.listen(3000, () => {
  console.log("App listening on port 3000!")

  routes(app)
})
