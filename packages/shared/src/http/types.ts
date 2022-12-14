interface ResponseMap {
    blob: Blob
    text: string
    arrayBuffer: ArrayBuffer
  }

export type ResponseType = keyof ResponseMap | 'json'

export type MappedType<R extends ResponseType, JsonType = any> = R extends keyof ResponseMap ? ResponseMap[R] : JsonType
