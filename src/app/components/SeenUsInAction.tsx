import Image from 'next/image';
import jorge from './../../../public/jorge.jpg';
import kids from './../../../public/kids.png';
import software from './../../../public/software.png';
import talkingToUsers from './../../../public/talkingToUsers.png';
import internet from './../../../public/internet.jpg';
import place from './../../../public/place.png';

export default function SeenUs() {
  return (
    <div className='sm:mx-auto sm:max-w-4xl mt-10'>
      <div className='mx-auto max-w-[510px] text-center '>
        <h2 className='mb-3 text-3xl text-black font-bold leading-[1.2] text-dark sm:text-4xl md:text-[40px]'>
          Venos en{' '}
          <a className='underline decoration-pink-500 text-gray-900'>acción</a>
        </h2>
        <p className='text-base text-body-color text-black'>
          Llevamos el servicio a donde no es atentido como debería ser
        </p>
      </div>

      <section>
        <div className='container mx-auto px-5 py-2 lg:px-32 lg:pt-10'>
          <div className='-m-1 flex flex-wrap md:-m-2'>
            <div className='flex w-1/2 flex-wrap'>
              <div className='w-1/2 p-1 md:p-2'>
                <Image
                  src={jorge}
                  style={{ width: 'auto', height: 'auto' }}
                  alt='jorge'
                  className='block h-full w-full rounded-lg object-cover object-center'
                />
              </div>
              <div className='w-1/2 p-1 md:p-2'>
                <Image
                  src={kids}
                  style={{ width: 'auto', height: 'auto' }}
                  alt='kids'
                  className='block h-full w-full rounded-lg object-cover object-center'
                />
              </div>
              <div className='w-full p-1 md:p-2'>
                <Image
                  src={talkingToUsers}
                  style={{ width: 'auto', height: 'auto' }}
                  alt='software'
                  className='block h-full w-full rounded-lg object-cover object-center'
                />
              </div>
            </div>
            <div className='flex w-1/2 flex-wrap'>
              <div className='w-full p-1 md:p-2'>
                <Image
                  src={software}
                  style={{ width: 'auto', height: 'auto' }}
                  alt='talkingToUsers'
                  className='block h-full w-full rounded-lg object-cover object-center'
                />
              </div>
              <div className='w-1/2 p-1 md:p-2'>
                <Image
                  src={internet}
                  style={{ width: 'auto', height: 'auto' }}
                  alt='internet'
                  className='block h-full w-full rounded-lg object-cover object-center'
                />
              </div>
              <div className='w-1/2 p-1 md:p-2'>
                <Image
                  src={place}
                  style={{ width: 'auto', height: 'auto' }}
                  alt='place'
                  className='block h-full w-full rounded-lg object-cover object-center'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
