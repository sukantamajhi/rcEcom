import Image from 'next/image'
import React from 'react'
import dressCodeLogo from '../images/dressCodeLogo.svg'

const Header = () => {
  return (
    <div className={`bg-[#ffd36b] h-full px-[3%] pb-2.5`}>
        <Image src={dressCodeLogo} alt='dressCodeLogo_breake' className={``} width={50} height={50} />
    </div>
  )
}

export default Header