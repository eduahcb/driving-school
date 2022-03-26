import React from 'react'

import { FaCar, FaKey, FaMap, FaAccessibleIcon } from 'react-icons/fa'

import Grid from 'components/atoms/Grid'
import Feature from 'components/atoms/Feature'

export default {
  title: 'Components/Feature',
  component: Feature
}

export const usage = ({ title }) => (
  <Feature icon={<FaCar />} title={title}>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
  </Feature>
)

usage.args = {
  title: 'Título'
}

export const withGrid = () => (
  <Grid sm={2} md={4}>
    <Feature icon={<FaCar />} title="Maior e melhor frota">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
    </Feature>

    <Feature icon={<FaKey />} title="Habilitação mais rápida">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
    </Feature>

    <Feature icon={<FaMap />} title="Excelente localização">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
    </Feature>

    <Feature icon={<FaAccessibleIcon />} title="Acessibilidade">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
    </Feature>
  </Grid>
)
