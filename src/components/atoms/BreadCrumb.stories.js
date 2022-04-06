import React from 'react'

import BreadCrumb from 'components/atoms/BreadCrumb'

export default {
  title: 'Components/BreadCrumb',
  component: BreadCrumb
}

const items = [
  { id: 1, label: 'Início', link: '/' },
  { id: 2, label: 'Sobre', link: '/sobre' }
]

export const usage = () => <BreadCrumb items={items} />
