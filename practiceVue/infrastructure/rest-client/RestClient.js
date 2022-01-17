export default class RestClient {
    /**
     * 必要に応じてオーバーライド
     */
    get defaultConfig() {
        return {
            headers: {
                ...this.defaultHeaders,
                Authorization: this.auth
            }
        }
    }

    /**
     * 必要に応じてオーバーライド
     */
    get defaultHeaders() {
        return {}
    }

    /**
     * @param {string} baseUrl
     */
    constructor(axios, baseUrl) {
        this.axios = axios;
        this.baseUrl = baseUrl;
        //const session = localStorage.getItem('idm_GEAR_SESSION');
        //this.auth = JSON.parse(session)['key'];
    }

    /**
     * @param {string} url
     * @param {object} config
     */
    get(url, config) {
        return this.axios.get(`${this.baseUrl}/${url}`, {...this.defaultConfig, ...config});
    }

    /**
     * @param {string} url
     * @param {object} body
     * @param {object} config
     * @returns
     */
    post(url, body, config) {
        return this.axios.post(`${this.baseUrl}/${url}`, body, {...this.defaultConfig, ...config});
    }

    /**
     * @param {string} url
     * @param {object} body
     * @param {object} config
     * @returns
     */
    put(url, body, config) {
        return this.axios.put(`${this.baseUrl}/${url}`, body, {...this.defaultConfig, ...config});
    }

    /**
     * @param {string} url
     * @param {object} config
     * @returns
     */
    delete(url, config) {
        return this.axios.delete(`${this.baseUrl}/${url}`, {...this.defaultConfig, ...config});
    }

    /**
     * @param {string} url
     * @param {object} config
     * @returns
     */
     $get(url, config) {
        return this.get(url, config).then(rsp => rsp.data);
    }

    /**
     * @param {string} url
     * @param {object} body
     * @param {object} config
     * @returns
     */
    $post(url, body, config) {
        return this.post(url, body, config).then(rsp => rsp.data);
    }

    /**
     * @param {string} url
     * @param {object} body
     * @param {object} config
     * @returns
     */
     $put(url, body, config) {
        return this.put(url, body, config).then(rsp => rsp.data);
    }

    /**
     * @param {string} url
     * @param {object} config
     * @returns
     */
     $delete(url, config) {
        return this.delete(url, config).then(rsp => rsp.data);
    }
}