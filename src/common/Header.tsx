import Image from 'next/image'
import React from 'react'
import dressCodeLogo from '../images/dressCodeLogo.svg'
import { Button } from '@mui/material'
import { useRouter } from 'next/router'

const Header = () => {

  const router = useRouter()

  return (
    <div className={`bg-[#aeeec8] h-full flex items-center justify-between px-[3%] pb-2.5`}>
      <Image src={dressCodeLogo} alt='dressCodeLogo_breake' className={``} width={50} height={50} />
      <div>
        <Button className={`w-full bg-blue-700`} onClick={() => router.push(`/user/login`)} variant="contained">Login</Button>
      </div>
    </div>
  )
}

export default Header