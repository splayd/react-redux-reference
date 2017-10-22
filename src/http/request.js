// @flow
import fetch from 'node-fetch'

type Request = {
  url: string
}

type JSON = null | boolean | number | string | Array<JSON> | { [string]: JSON }

export default async function({ url }: Request): Promise<JSON> {
  const response = await fetch(url)
  return response.json()
}
