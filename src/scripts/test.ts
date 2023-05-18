import { CheerioWebBaseLoader } from "langchain/document_loaders/web/cheerio"

const loader = new CheerioWebBaseLoader(
  "https://news.ycombinator.com/item?id=34817881",
  {
    selector: "body",
  }
)
console.log("🚀 ~ file: test.ts:9 ~ loader:", await loader.load())
