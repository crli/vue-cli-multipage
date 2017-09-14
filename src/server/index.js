import axios from 'axios'
import './http'
import domains from './domains'
/* eslint-disable */
export const homebanner = () => axios.post(domains.home_banner, {})
