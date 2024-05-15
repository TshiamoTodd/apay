'use client';

import React from 'react'
import CountUp from 'react-countup'
const AnimatedCounter = ({amount}: {amount: number}) => {
  return (
    <CountUp end={amount} duration={2.75} decimals={2} prefix='R' separator=' ' decimal=',' />
  )
}

export default AnimatedCounter