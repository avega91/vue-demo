import trae from 'trae'
import configService from './config'

const demoMusicService = trae.create({
  baseUrl: configService.apiUrl
})

export default demoMusicService
