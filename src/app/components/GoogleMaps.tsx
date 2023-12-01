'use client';

import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import toast, { Toaster } from 'react-hot-toast';

export default function GoogleMaps() {
  const position = { lat: 19.685194977033984, lng: -101.21509657138347 };
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    // Handle the case where the API key is not defined
    toast.error('Google Maps API key is not defined.');
    return null; // or display an error message
  }

  return (
    <div className='sm:mx-auto sm:max-w-4xl mb-10'>
      <Toaster   
        position="top-center" 
        reverseOrder={false}
      />
      <div className='mx-auto max-w-[510px] text-center mb-10'>
        <h2 className='mb-3 text-3xl text-black font-bold leading-[1.2] text-dark sm:text-4xl md:text-[40px]'>
          Dónde estamos{' '}
        </h2>
        <p className='text-base text-body-color text-black'>
        Calz La Huerta 2211, Los Pinos de Michoacán, 58057 Morelia, Mich.<br/> (enfrente de la Coca-Cola).
        </p>
      </div>

      <section className='rounded-lg'>
        <APIProvider apiKey={apiKey}>
          <div style={{ height: '60vh' }}>
            <Map
              center={position}
              zoom={16}
              mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID_KEY}
            >
              <Marker 
                position={position} 
                />

                Pinveiw
            </Map>
          </div>
        </APIProvider>
      </section>
    </div>
  );
}
