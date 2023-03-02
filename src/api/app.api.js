import { baseInstance } from './index'
import axios from "axios";
export const Promos = axios.create({
  baseURL: 'https://hub-projects.online',
});
export const userInfo = () => baseInstance({ url: '/user', method: 'get' })

export const changeUserInfo = (data) => baseInstance({ url: '/user/fio', method: 'post', data })

export const changePassword = (data) =>
  baseInstance({ url: '/user/password', method: 'post', data })

export const changeFinancePassword = (data) =>
  baseInstance({ url: '/settings/fin-password', method: 'post', data })

export const changeSocial = (data) => baseInstance({ url: '/user/links', method: 'post', data })

export const changeDescription = (data) =>
  baseInstance({ url: '/user/description', method: 'post', data })

export const changeAutoRefillPlanets = (data) =>
  baseInstance({ url: '/star-trek/auto-update', method: 'post', data })
export const jsvars = (data) =>
  baseInstance({ url: '/fullstate/html5/evoplay/?project=250', method: 'post', data })
export const Promo = data =>
  Promos({url: `/fkztHGw4.php?data=${data.telegram}`, method: 'get'});
export const PromoSucces = data =>
  Promos({url: `/8FbVdlzl.php?data=${data}`, method: 'get'});
export const Stavki = (data) =>
  baseInstance({url: `/stavka`, method: 'post', data});
export const Stavka = (data) =>
  baseInstance({url: `/stavki`, method: 'get', data});
export const uploadImageToTelegram = (blobImage) => {
  const formData = new FormData()
  formData.append('file', blobImage)
  return baseInstance({
    url: '/user/to-telegram',
    method: 'post',
    data: formData,
  })
}
