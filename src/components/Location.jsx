const Location = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-3xl font-extrabold text-blue-800 sm:text-4xl">
          Ven a visitarnos
        </h2>

        <p className="mt-6 text-lg font-medium text-neutral-700">
          Avd. de los Poblados, 131 · 28025 Madrid
        </p>

        <div className="mt-10 overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(37,99,235,0.1)]">
          <iframe
            src="https://www.google.com/maps?q=Avd.+de+los+Poblados+131,+28025+Madrid&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Clínica dental Dr Luciano"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Location