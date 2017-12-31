import axios from 'axios'
import './http'
import domains from './domains'
/* eslint-disable */
export const homebanner = (p) => axios.post(domains.pro1 + '/home_banner/JZMIAATOUH', {p: p})
