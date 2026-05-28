import { FaStethoscope, FaMagic, FaAward, FaUsers } from 'react-icons/fa'

const features = [
  {
    icon: <FaStethoscope />,
    title: 'Diagnóstico personalizado',
    text: 'Estudiamos cada caso de forma individual para ofrecer un tratamiento adaptado a tus necesidades reales.',
  },
  {
    icon: <FaMagic />,
    title: 'Tecnología TAC avanzada',
    text: 'Utilizamos diagnóstico 3D de alta precisión para planificar tratamientos más seguros y eficaces.',
  },
  {
    icon: <FaAward />,
    title: 'Más de 30 años de experiencia',
    text: 'La experiencia clínica y la formación continua nos permiten ofrecer tratamientos de máxima confianza.',
  },
  {
    icon: <FaUsers />,
    title: 'Atención cercana y familiar',
    text: 'Acompañamos a cada paciente durante todo el proceso para que se sienta cómodo y seguro en cada visita.',
  },
]

const HowWeWork = () => {
  return (
    <section className="bg-blue-50 py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold text-blue-800 sm:text-4xl">
            ¿Cómo trabajamos en Clínica dental Dr Luciano?
          </h2>

          <p className="mt-4 text-neutral-600">
            Un proceso diseñado para cuidar tu salud bucodental desde la primera
            visita en Carabanchel
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(37,99,235,0.08)] md:p-12">
          <div className="grid gap-10 md:grid-cols-2">
            {features.map((item, index) => (
              <div key={index} className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-700 text-xl text-white">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-blue-800">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-neutral-700">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowWeWork