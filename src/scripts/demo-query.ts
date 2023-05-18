import { supabaseClient } from "../utils/supabase-client.js"
import { SupabaseVectorStore } from "langchain/vectorstores/supabase"
import { OpenAIEmbeddings } from "langchain/embeddings"
import { VectorDBQAChain } from "langchain/chains"
import { openai } from "../utils/openai-client.js"

const query = "What are some things to do in palm jumeirah"

const model = openai

async function searchForDocs() {
  const vectorStore = await SupabaseVectorStore.fromExistingIndex(
    new OpenAIEmbeddings(),
    {
      client: supabaseClient,
    }
  )

  /*uncomment below to test similarity search */
  const results = await vectorStore.similaritySearch(query, 2)

  console.log("results", results)

  const chain = VectorDBQAChain.fromLLM(model, vectorStore)

  //Ask a question
  const response = await chain.call({
    query: query,
  })

  console.log("response", response)
}

;(async () => {
  await searchForDocs()
})()
