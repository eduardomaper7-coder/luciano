import { FaCalendarCheck, FaCreditCard, FaUniversity } from 'react-icons/fa'

const paymentInfo = [
  {
    icon: <FaUniversity />,
    title: 'Financiación',
    items: ['Caixa', 'Kutxabank', 'Abanca', 'Banco Sabadell'],
  },
  {
    icon: <FaCreditCard />,
    title: 'Métodos de pago',
    items: ['Efectivo', 'Tarjeta', 'Transferencia bancaria'],
  },
  {
    icon: <FaCalendarCheck />,
    title: 'Política de citas',
    items: ['Puedes anular tu cita hasta las 17:00 del día anterior.'],
  },
]

const PaymentOptions = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            Flexibilidad y comodidad
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-blue-800 sm:text-4xl">
            Atención pensada para ti
          </h2>

          <p className="mt-4 text-lg leading-8 text-neutral-600">
            Adaptamos cada tratamiento a tus necesidades, ofreciendo opciones de
            financiación, diferentes métodos de pago y una política de citas clara.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {paymentInfo.map((item, index) => (
            <article
              key={index}
              className="rounded-2xl bg-blue-50 p-8 shadow-[0_10px_30px_rgba(37,99,235,0.08)] transition hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(37,99,235,0.14)]"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-2xl text-white">
                {item.icon}
              </div>

              <h3 className="text-2xl font-extrabold text-blue-800">
                {item.title}
              </h3>

              <ul className="mt-5 space-y-3 text-lg text-neutral-700">
                {item.items.map((text, itemIndex) => (
                  <li key={itemIndex} className="flex gap-3">
                    <span className="font-bold text-blue-700">✓</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PaymentOptions