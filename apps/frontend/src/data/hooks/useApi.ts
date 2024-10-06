import { useCallback } from 'react'

const urlBase = process.env.NEXT_PUBLIC_API_URL

export default function useApi() {

  async function extractData(response: Response) {
    let content = ''
    try {
      content = await response.text()
      return JSON.parse(content)
    } catch (e) {
      console.error(e)
      return content
    }
  }

  const httpGet = useCallback(
    async function (path: string) {
      const uri = path.startsWith('/') ? path : `/${path}`
      const url = `${urlBase}${uri}`
      
      const response = await fetch(url)
      const data = await extractData(response)
      return data
    }, []
  )

  return {httpGet}
}