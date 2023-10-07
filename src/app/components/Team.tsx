export default function Team() {
    const teamMembers = [
        {
          name: "Doctora Rita Ríos",
          role: "Asesora de retina y uveítis en oftalmología",
          place: "Centro Médico Nacional Siglo XXI I.M.S.S."
        },
        {
          name: "Doctor Miguel Jiménez",
          role: "Asesor de retina y oftalmología pediátrica",
          place: "Hospital General S.S.A Oaxaca"
        },
        {
          name: "Doctor José Adrián Rojas Dosal",
          role: "Ex-director y oftalmólogo",
          place: "Hospital Juárez de México S.S.A / Academia Mexicana de Cirugía"
        },
        {
          name: "Doctor Eduardo Corzo",
          role: "Retina y visión sub-normal",
          place: "Centro Médico Nacional Siglo XXI I.M.S.S."
        },
        {
          name: "Doctora Dolores González Palomero",
          role: "Ex-jefa del servicio de retina",
          place: "Centro Médico Nacional Siglo XXI I.M.S.S."
        },
        {
          name: "Doctor José Luis Del Río",
          role: "Ex-jefe del servicio de retina",
          place: "Centro Médico Nacional Siglo XXI I.M.S.S."
        },
        {
          name: "Doctor Mario Mercado",
          role: "Trasplante de córnea",
          place: "Centro Médico Nacional Siglo XXI I.M.S.S."
        },
        {
          name: "Doctor Marco Antonio Ramírez Ortiz",
          role: "Asesor de oftalmología pediátrica",
          place: "Hospital Infantil Federico Gómez"
        },
        {
          name: "Doctora Enriqueta Hofman Blancas",
          role: "Asesor de oftalmología pediátrica",
          place: "Hospital de ediatría del Centro Médico Nacional Siglo XXI I.M.S.S."
        },
        {
          name: "Doctor Juan Carlos Bravo Ortiz",
          role: "Asesor de retina y oftalmología pediátrica",
          place: "Centro Médico Nacional Siglo XXI I.M.S.S."
        },
        {
          name: "Doctor Mario Duarte Tortoriello",
          role: "Ex-director del servicio de oftalmología",
          place: "Hospital Juárez de México S.S.A."
        },
        {
          name: "Doctora Guadalupe Campos Hurtado",
          role: "Asesora de oftalmología",
          place: "Centro Médico Nacional Siglo XXI I.M.S.S."
        },
        {
          name: "Luis Mario",
          role: "Fundador / CEO",
          place: "Tec de Monterrey / Harvard"
        },  
    ];
  
    return (
      <div className="bg-white mb-10 sm:mb-10 py-10 sm:mx-auto sm:max-w-full sm:px-10">
        <div className="mx-auto grid max-w-2xl gap-x-8 gap-y-10 px-6 lg:px-8 xl:grid-cols-1">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Conoce a nuestro equipo
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Conformados por directores de hosptiales, oftalmólogos especialistas, investigadores de alto nivel y emprendedores en tecnología.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-8 xl:col-span-2">
            {teamMembers.map((member, index) => (
              <li key={index}>
                <div className="flex items-center gap-x-6">
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-blue-600">
                      {member.role}
                    </p>
                    <p className="text-xs font-semibold leading-6 text-blue-600/60">
                      {member.place}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  