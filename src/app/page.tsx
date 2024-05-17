/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { useRef } from 'react'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import LoadingData from './components/lottie/loading.json'
import { useRouter } from 'next/navigation'
const page = () => {
  const router = useRouter()
  setTimeout(()=>{
    router.push('/main')
  },5000)
  const loadingRef=useRef<LottieRefCurrentProps>(null)
  return (
    <div className='bg-black w-screen h-screen flex flex-col justify-center items-center overflow-hidden fixed inset-0'>
      <Lottie lottieRef={loadingRef} loop={true} animationData={LoadingData} className='w-[300px] h-[300px] sm:w-[250px] sm:h-[250px] sm:mb-[120px] md:mb-0'/>
    </div>
  )
}

export default page