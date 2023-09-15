import React from 'react'
import { BasePolicy } from '../features'
import DynamicHeader from '../layouts/Header'
import usage from '../../policies/usage.json'
import Footer from '../layouts/Footer'

export default function UsagePolicies() {
  return (
    <>
      <DynamicHeader registerBtn loginBtn searchBtn startBtn/>
      <BasePolicy color='#8DD9F0' content={usage.content} lastUpdate={usage.lastUpdate} pageTitle='Políticas de Uso'/>
      <Footer/>
    </>
  )
}
