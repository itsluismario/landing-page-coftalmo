import Link from 'next/link'

export default function Title() {
    return (
        <div className="bg-white pb-5 sm:py-10 pt-10 sm:px-10 ">
        <div className="relative px-6 pb-8 sm:mx-auto sm:max-w-2xl">
          <div className="mx-auto max-w-full">
            <div className="divide-y divide-gray-300/50">
              <div className="space-y-6 py-8 text-3xl font-bold tracking-tight text-gray-900/70 sm:text-4xl">
                <h1>Nuestra misión es <a className="underline decoration-pink-500 text-gray-900">evitar el 80% de la ceguera</a> en el LATAM</h1>
            </div>
            <Link           
                href="https://wa.me/524431280937"
                target="_blank"
                className="font-bold"
                rel="noopener noreferrer"
                >
                <button className="rounded-md group bg-sky-400 hover:bg-sky-400/90 ps-4 pe-2 py-2 flex items-center">
                <span>Contactarnos</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all"
                >
                    <polyline points="9 18 15 12 9 6" />
                </svg>
                </button>
            </Link>
          </div>
        </div>
      </div>
      </div>
    )
}