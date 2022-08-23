import type { FetchOptions, FetchRequest } from 'ohmyfetch'
import type { ResponseType, MappedType } from './types'
import { $fetch } from 'ohmyfetch'

export class Fetch {
    private readonly options: Omit<FetchOptions, 'responseType'>

    // private client: $Fetch

    constructor(options: FetchOptions) {
        // $fetch.create is not a function ???
        // this.client = $fetch.create(options)
        this.options = options
    }

    get<T = any, R extends ResponseType = 'json'>(request: FetchRequest, opts: FetchOptions<R>): Promise<MappedType<R, T>> {
        return $fetch<T, R>(request, { ...this.options, ...opts, method: 'GET' })
    }

    post<T = any, R extends ResponseType = 'json'>(request: FetchRequest, opts: FetchOptions<R>): Promise<MappedType<R, T>> {
        return $fetch<T, R>(request, { ...this.options, ...opts, method: 'post' })
    }
}

export function createFetchClient() {
    return new Fetch({})
}

export const fetchClient = createFetchClient()
