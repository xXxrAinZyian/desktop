import { setPassword, getPassword, deletePassword } from 'keytar'

function setItem(key: string, login: string, value: string) {
  return setPassword(key, login, value)
}

function getItem(key: string, login: string) {
  return getPassword(key, login)
}

function deleteItem(key: string, login: string) {
  return deletePassword(key, login)
}

export const TokenStore = {
  setItem,
  getItem,
  deleteItem,
}
