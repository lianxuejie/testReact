import { create } from "zustand";
import {persist} from "zustand/middleware"
import crypto from '@/command/edcode'

type localState = {
  appId?: string,
  version?: string,
  deviceId?: string,
  platform?: string,
  name?: string,
  gender?: string,
  isVip?: string,
  city?: string,
  country?: string,
  language?: string,
  accountType?: number,
  birthday?: string,
  userType?: string,
  email?: string,
  avatar?: string,
  uid?: string,
  token?: string,
  introduce?: string,
  campaign?: string,
  sourceCode?: string,
  adeptLanguage?: string,
  translateLanguage?: string,
  timezone?: string,
  appsflyerId?: string,
  advertisingId?: string,
  countrySource?: number,
  multiCountry?: string,
  distinctId?: string,
  versionCode?: string,
  invitationCode?: string,
  g_email?: string,
  g_name?: string,
}
type State = {
  local: localState
}
type Actions = {
  getKey: (key: string) => any, // ಠ_ಠ
  setKeyValue: (key: string, value: string | number) => void,
  removeKey: (key: string) => void,
  clear: () => void
}
const initialInfo = {
  appId: undefined,
  version: undefined,
  deviceId: undefined,
  platform: undefined,
  name: undefined,
  gender: undefined,
  isVip: undefined,
  city: undefined,
  country: undefined,
  language: undefined,
  accountType: 1,
  birthday: undefined,
  userType: undefined,
  email: undefined,
  avatar: undefined,
  uid: undefined,
  token: undefined,
  introduce: undefined,
  campaign: undefined,
  sourceCode: undefined,
  adeptLanguage: undefined,
  translateLanguage: undefined,
  timezone: undefined,
  appsflyerId: undefined,
  advertisingId: undefined,
  countrySource: 0,
  multiCountry: undefined,
  distinctId: undefined,
  versionCode: undefined,
  invitationCode: undefined,
  g_email: undefined,
  g_name: undefined,
}

const useLocalStore = create(
  persist<State & Actions>((set, get) => ({
    local: Object.assign({}, initialInfo),
    getKey: (key) => (state:any) => { return state.local[key] },
    setKeyValue: (key, value) => ((state:any) => state.local[key] = value),
    removeKey: (key) => (state:any) => state.local[key] = undefined,
    clear: () => (state:any) => {
      state.local.keys().forEach((key: string) => {
        state.local[key] = undefined
      })
    }
  }), { name: 'local'})
)

const encode = (key: string, value: string) => {
  let ret = value
  if (key === 'accessToken') {
    ret = crypto.encode(value)
  }
  return ret
}
const decode = (key: string, value: string) => {
  let ret = value
  if (key === 'accessToken') {
    ret = crypto.decode(value)
  }
  return ret
}

const getToken = () => {
  const getKey = useLocalStore((state) => state.getKey)
  const key = 'accessToken'
  const ret = getKey(key)
  if (ret) {
    return decode(key, getKey(key))
  }
  return ret
}

const setLocal = (key: string, value: string) => {
  const localStore = useLocalStore()
  localStore.setKeyValue(key, encode(key, value))
}
const getLocal = (key: string) => {
  const getKey = useLocalStore((state) => state.getKey)
  return getKey(key)
}
const remove = (key: string) => {
  const removeKey = useLocalStore((state) => state.removeKey)
  removeKey(key)
}
const clear = () => {
  const clear = useLocalStore((state) => state.clear)
  clear()
}

const localstore = {
  setLocal,
  getLocal,
  getToken,
  remove,
  clear
}

export default localstore
