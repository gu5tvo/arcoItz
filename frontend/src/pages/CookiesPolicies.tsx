import React from 'react'
import { BasePolicy } from '../features'
import DynamicHeader from '../layouts/Header'
// import { BasePolicies } from '../features'
// import policies from 'arquivo.md'
import cookies from '../../policies/cookies.json'
import Footer from '../layouts/Footer'

export default function CookiesPolicies() {
  return (
    <>
      <DynamicHeader registerBtn loginBtn searchBtn startBtn/>
      <BasePolicy color='#F8B0D6' content={cookies.content} lastUpdate={cookies.lastUpdate} pageTitle='Políticas de Cookies'/>
      <Footer/>
    </>
  )
}
