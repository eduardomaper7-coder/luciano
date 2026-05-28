const treatments = [
  {
    name: 'Implantes dentales',
    image:
      'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Endodoncia',
    image:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Fundas de porcelana',
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Fundas de zirconio',
    image:
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Ortodoncia e Invisalign',
    image:
      'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Tratamiento periodontal',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    note: 'Raspajes y cuidado de encías',
  },
  {
    name: 'Blanqueamiento dental',
    image:
      'https://images.unsplash.com/photo-1598257006626-48b0c252070d?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Prótesis dentales',
    image:
      'https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Limpieza dental',
    image:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Empastes',
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Cirugía oral',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    note: 'Extracción de cordales',
  },
  {
    name: 'Exodoncia',
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
  },
]

const AllTreatments = () => {
  return (
    <main className="bg-blue-50 pt-32 pb-20">
      <section className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-blue-700 px-5 py-2 text-sm font-bold text-white">
            Primera valoración personalizada
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-blue-800 sm:text-5xl">
            Tratamientos dentales
          </h1>

          <p className="mt-5 text-lg leading-8 text-neutral-700">
            Consulta nuestros tratamientos dentales en Carabanchel. En Clínica
            dental Dr Luciano te ofrecemos soluciones personalizadas para cuidar
            tu salud bucodental.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-3xl bg-white shadow-[0_10px_30px_rgba(37,99,235,0.10)] transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(37,99,235,0.16)]"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={treatment.image}
                  alt={`${treatment.name} en Carabanchel - Clínica dental Dr Luciano`}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <div>
                  <h2 className="text-2xl font-extrabold text-blue-800">
                    {treatment.name}
                  </h2>

                  {treatment.note && (
                    <p className="mt-1 text-sm font-semibold text-neutral-500">
                      {treatment.note}
                    </p>
                  )}
                </div>

                <a
                  href="/#contacto"
                  className="mt-6 inline-flex font-bold text-blue-700 transition hover:text-blue-900"
                >
                  Más información →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-5xl rounded-3xl bg-white px-8 py-10 text-center shadow-[0_10px_30px_rgba(37,99,235,0.10)]">
          <h2 className="text-3xl font-extrabold text-blue-800">
            ¿Necesitas otro tratamiento?
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-neutral-700">
            Si necesitas información sobre otro tratamiento, nuestro equipo estará
            encantado de atenderte personalmente o por teléfono en el{' '}
            <a
              href="tel:913623008"
              className="inline-block whitespace-nowrap font-extrabold text-blue-700 hover:underline"
            >
              913 62 30 08
            </a>
            .
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/#contacto"
              className="rounded-xl bg-blue-700 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-blue-800"
            >
              Más información
            </a>

            <a
              href="tel:913623008"
              className="rounded-xl border-2 border-blue-700 px-8 py-4 text-lg font-bold text-blue-700 transition hover:bg-blue-700 hover:text-white"
            >
              Llamar ahora
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AllTreatments