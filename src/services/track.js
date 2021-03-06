import demoMusicService from './demo-music'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'
  return demoMusicService.get('/search', {
    params: { q, type }
  }).then(res => res.data)
}

trackService.getById = function (id) {
  return demoMusicService.get(`/tracks/${id}`).then(res => res.data)
}

export default trackService
