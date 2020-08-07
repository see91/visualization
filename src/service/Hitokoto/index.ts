import Api from '../Api'
import { get } from '../request'

const getContent = (params: {}) => get(Api.getContent, params);

export { getContent }