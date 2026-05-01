import bulb from "../assets/bulb.png";

function About() {
  return (
    <section
      className="border-t border-[var(--color-border)] bg-[var(--color-surface)]"
      id="about"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-14 md:grid-cols-2 md:px-10">

        {/* TEXT */}
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-[#0f172a] md:text-4xl leading-tight">
            New England Family Insurance & Financial Solutions Inc.
          </h2>

          {/* divider */}
          <div className="mt-3 h-1 w-20 bg-[var(--color-primary)]" />

          <div className="mt-6 space-y-4 text-sm leading-7 text-slate-700 md:text-base md:leading-8">
            
            <p>
              Did you know in Massachusetts it’s partly your responsibility to understand your insurance policy and ensure your coverage is adequate?
            </p>

            <p>
              Many insurance companies operate in Massachusetts and Rhode Island, making it difficult to choose the right one based on your needs and budget. We simplify this process and help you find the best coverage at the right price.
            </p>

            <p>
              New England Family Insurance & Financial Solutions, Inc. is recognized as one of the top insurance intermediaries in Massachusetts and Rhode Island, trusted by clients for transparency and service.
            </p>

            <p>
              We specialize in Business, Auto, Home, Workers Compensation, Renters, and Life Insurance — backed by experienced professionals who guide you every step of the way.
            </p>

            <p>
              Our goal is simple: keep you informed, protected, and confident in your coverage decisions.
            </p>

          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src={bulb}
            alt="Our legacy icon"
            className="
              w-64 h-64
              sm:w-72 sm:h-72
              md:w-80 md:h-80
              lg:w-[380px] lg:h-[380px]
              object-contain
            "
          />
        </div>

      </div>
    </section>
  );
}

export default About;