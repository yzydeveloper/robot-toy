import { DINGTALK_BASE_URL, WECOM_BASE_URL, WECOM_APP_ID, WECOM_APP_SECRET, DINGTALK_APP_ID, DINGTALK_APP_SECRET, TIAN_BASE_URL, TIAN_APP_SECRET } from '../constants'
import { Fetch, fetchClient } from './fetch'

function createWecomFetchClient() {
    return new Fetch({
        async onRequest({ options }) {
            const tokenData = await fetchClient.get(`${WECOM_BASE_URL}/cgi-bin/gettoken`, {
                params: {
                    corpid: WECOM_APP_ID,
                    corpsecret: WECOM_APP_SECRET
                }
            })
            !options.params && (options.params = {})
            options.params.access_token = tokenData.access_token
        },
        parseResponse(_response) {
            const response = JSON.parse(_response)
            return response.data ? response.data : response
        }
    })
}

function createDingtalkFetchClient() {
    return new Fetch({
        async onRequest({ options }) {
            const tokenData = await fetchClient.get(`${DINGTALK_BASE_URL}/gettoken`, {
                params: {
                    appkey: DINGTALK_APP_ID,
                    appsecret: DINGTALK_APP_SECRET
                }
            })
            !options.headers && (options.headers = {})
            options.headers = {
                'x-acs-dingtalk-access-token': tokenData.access_token
            }
        },
        parseResponse(_response) {
            const response = JSON.parse(_response)
            return response.data ? response.data : response
        }
    })
}

function createTianFetchClient() {
    return new Fetch({
        baseURL: TIAN_BASE_URL,
        async onRequest({ options }) {
            !options.params && (options.params = {})
            options.params.key = TIAN_APP_SECRET
        },
        parseResponse(_response) {
            const response = JSON.parse(_response)
            if (response.code === 200) {
                return response.newslist
            }
        }
    })
}

export const dingtalkFetchClient = createDingtalkFetchClient()

export const wecomFetchClient = createWecomFetchClient()

export const tianFetchClient = createTianFetchClient()
