import Image from "next/image";
import aao from './../../../public/aao.jpeg'

export default function SeenUs() {
    return (
      <div className="bg-white shadow-xl mb-10 sm:mb-10 ring-1 ring-gray-900/5 py-16 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
        <div className="mx-auto grid max-w-3xl gap-x-8 gap-y-10 px-6 lg:px-8 xl:grid-cols-1">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-2xl text-center">
              Dónde has escuchado de nosotros
            </h2>
          </div>
          <ul role="list" className="grid grid-cols-1 sm:grid-cols-3">
            <li className="flex justify-center items-center"> {/* Center the content */}
              <div>
                <Image
                  src="https://imgs.search.brave.com/RNlP-lFZo6wUkUFSgefCWc4BmO3IFClvN4gJM-hAj9M/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQyZjY4ZmE2NTE1/YjFlMGFkNzViMjIu/cG5n"
                  width={100}
                  height={150}
                  alt="Harvard logo"
                />
              </div>
            </li>
            <li className="flex justify-center items-center"> {/* Center the content */}
              <div>
                <Image
                  src="https://imgs.search.brave.com/JgIhTUqbkDKv9rzgV0S1yZ0cmM5In9vhxoL1YV1KEIM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9maW5k/dmVjdG9ybG9nby5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTkvMTEvdGVjbm9s/b2dpY28tZGUtbW9u/dGVycmV5LXZlY3Rv/ci1sb2dvLnBuZw"
                  width={500}
                  height={500}
                  alt="Tec logo"
                />
              </div>
            </li>
            <li className="flex justify-center items-center"> {/* Center the content */}
              <div>
                <Image
                  src={aao}
                  width={500}
                  height={500}
                  alt="Tec logo"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  