import { notification } from 'antd'

export const error = (message) => notification['error']({
  message: message
})

export const info = (message) => notification['info']({
  message: message
})

export const success = (message) => notification['success']({
  message: message
})

const NotificationService = {
  error,
  info,
  success
}

export default NotificationService