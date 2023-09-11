export default function Team() {
    // Define an array of team members with name, role, and place attributes
    const teamMembers = [
      {
        name: "Luis Mario",
        role: "Co-Founder / CEO",
        place: "Tec de Monterrey / Harvard",
      },
      {
        name: "Fernando Herrera Garza",
        role: "Co-Founder / COO",
        place: "Tec de Monterrey",
      },
      {
        name: "Dr. Miguel Jiménez",
        role: "Asesor de retina y oftalmología pedíatrica",
        place: "Hospital General de Zona Oaxaca, Oaxaca",
      },
      {
        name: "Dr. José Adrian Rojas Dosal",
        role: "Ex-director y oftalmólogo",
        place: "Hospital Juárez de México S.S.A",
      },
      {
        name: "Dr. Marco Antonio Ramírez Ortiz",
        role: "Asesor de oftalmología pedíatrica",
        place: "Hospital Infantil Federico Gómez",
      },
      {
        name: "Dr. Juan Carlos Bravo Ortiz",
        role: "Oftalmólogo",
        place: "Centro Médico Nacional siglo XII IMSS",
      },
      {
        name: "Dr. Mario Duarte Tortillero",
        role: "Oftalmólogo",
        place: "Hospital Juárez De México S.S.A",
      },
      {
        name: "Dra. Rita Ríos",
        role: "Oftalmólogo",
        place: "Centro Médico Nacional siglo XII IMSS",
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
            {/* Map over the teamMembers array and generate JSX for each member */}
            {teamMembers.map((member, index) => (
              <li key={index}>
                <div className="flex items-center gap-x-6">
                  {/* <img
                    className="h-16 w-16 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  /> */}
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
  