const development = {
  API_BASE_URL: 'http://127.0.0.1', // 开发环境
}

const production = {
  API_BASE_URL: 'http://127.0.0.1',
}

const Config = process.env.NODE_ENV == "development" ? development : production

Config.APP_NAME = 'APP_NAME'

export default {
  ...Config
}