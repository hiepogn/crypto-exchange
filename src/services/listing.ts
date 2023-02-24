import api from 'api'

export const doGetListing = async () => {
  try {
    let res = await api.get('/listing')

    let data = res.data
    return data
  } catch (error) {
    console.log(error)
  }
}
