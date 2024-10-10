import { http } from '@/shared/http'
import type { Profile } from '../../match/types'
import type { AxiosResponse } from 'axios'

export async function getProfiles(): Promise<AxiosResponse<Profile[]>> {
  return http.get('/profiles')
}
