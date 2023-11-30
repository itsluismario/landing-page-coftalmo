import Link from 'next/link'
import icon from './../../../public/coftalmo.svg';
import Image from "next/image";

export default function Navbar() {
    return (
        <div className="bg-white pb-5 pt-10 sm:px-10 ">
        <div className="relative px-6 pb-8 sm:mx-auto sm:max-w-2xl border-b border-gray-900/10">
          <div className="mx-auto max-w-full">
            <div className="divide-y divide-gray-300/50">
            <Link href='/'>
                <Image
                src={icon}
                style={{ width: '10rem', height: 'auto' }}
                alt="Coftalmo"
                />
            </Link>
          </div>
        </div>
      </div>
      </div>
    )
}