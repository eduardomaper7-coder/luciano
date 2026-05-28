import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Tecnología TAC Dental',
    description:
      'Diagnósticos 3D de alta precisión para planificar tratamientos con mayor seguridad, exactitud y mejores resultados.',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Ortodoncia e Invisalign',
    description:
      'Corrige la posición dental con alineadores transparentes y planificación digital personalizada para resultados visibles.',
    image:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Implantes y Prótesis Dentales',
    description:
      'Recupera funcionalidad, comodidad y estética con soluciones duraderas adaptadas a cada paciente.',
    image:
      'https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=800&q=80',
  },
  {
  title: 'Odontología Integral',
  description:
    'Endodoncia, estética dental, periodoncia y revisiones preventivas para cuidar tu sonrisa a largo plazo.',
  image:
    'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
},
]

const Treatments = () => {
  return (
    <section id="servicios" className="scroll-mt-28 bg-blue-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            Todo lo que tu sonrisa necesita
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-blue-800 sm:text-4xl">
            Especialidades dentales en Carabanchel
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-neutral-600 sm:text-xl">
            En Clínica dental Dr Luciano abordamos tu salud bucodental desde una
            visión integral, combinando experiencia clínica, tecnología avanzada
            y atención personalizada.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(37,99,235,0.10)] transition hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(37,99,235,0.16)] sm:flex-row"
            >
              <div className="h-56 w-full sm:h-auto sm:w-[40%]">
                <img
                  src={service.image}
                  alt={`${service.title} - Clínica dental Dr Luciano`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="flex w-full flex-col justify-between p-6 sm:w-[60%]">
                <div>
                  <h3 className="text-xl font-extrabold text-blue-800 sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-base leading-8 text-neutral-600 sm:text-lg">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6">
                  <Link
                    to="/tratamientos"
                    className="inline-flex items-center gap-2 text-base font-semibold text-blue-700 transition hover:text-blue-900"
                  >
                    Saber más →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-white p-8 text-center shadow-lg">
          <h3 className="text-2xl font-extrabold text-blue-800">
            Mucho más que tratamientos dentales
          </h3>

          <p className="mx-auto mt-4 max-w-4xl text-lg text-neutral-600">
            Más de 30 años de experiencia, tecnología TAC integrada, atención
            familiar y planificación personalizada para ofrecerte tratamientos
            más seguros, precisos y predecibles.
          </p>

          <Link
            to="/tratamientos"
            className="mt-6 inline-flex items-center rounded-xl bg-blue-700 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-blue-800"
          >
            Ver todos los tratamientos
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Treatments