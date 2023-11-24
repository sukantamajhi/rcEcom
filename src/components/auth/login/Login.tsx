import Image from 'next/image'
import React from 'react'
import logo from '../../../images/dressCodeLogo.svg'
import TextFieldInput from '../../../common/inputField/TextFieldInput'
import { Button } from '@mui/material'
import { useRouter } from 'next/router'

const Login = () => {

  const router = useRouter()

  return (
    <div className={`flex justify-center items-center w-full h-screen`}>
      <div className={`flex flex-col justify-center items-center loginShadow w-[50%] rounded-md px-[4%] pt-[3%] pb-[4%]`}>
        <Image src={logo} alt='logo_break' height={100} width={100} className={`cursor-pointer`} onClick={()=> router.push(`/`)}/>
        <div className={`w-full flex flex-col gap-4`}>
          <TextFieldInput label={`Email`} />
          <TextFieldInput label={`Passwoard`} />
          <div className={`flex flex-row gap-8 mt-6`}>
            <Button className={`w-full bg-blue-700`} type='submit' variant="contained">Login</Button>
            <Button className={`w-full bg-blue-400`} variant="contained">Signup</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login