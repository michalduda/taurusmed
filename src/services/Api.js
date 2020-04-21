import axios from 'axios'

const post = async (url, data) => {
  try {
    const response = await axios({
      method: 'post',
      headers: { 'Content-Type': 'multipart/form-data' },
      url,
      data
    })

    if (response.data && response.data.status === 'mail_sent') {
      return response.data
    } else {
      throw new Error('Action failed')
    }
  } catch (error) {
    throw new Error(error)
  }
}

const sendNewsletterSignup = async (data) => {
  try {
    await post(process.env.VUE_APP_NEWSLETTER_API, data)
    return true
  } catch (error) {
    return false
  }
}
const sendContactForm = async (data) => {
  try {
    await post(process.env.VUE_APP_CONTACT_API, data)
    return true
  } catch (error) {
    return false
  }
}

export { sendNewsletterSignup, sendContactForm }
