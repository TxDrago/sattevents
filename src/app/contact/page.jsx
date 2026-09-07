import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact | SATT Event Planners",
  description:
    "Tell SATT Event Planners about your next event and let us create an experience worth remembering.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[var(--satt-bg-primary)] text-[var(--satt-text-primary)]">

        {/* =========================================================
            HERO
        ========================================================= */}

        <section className="relative overflow-hidden py-28 md:py-40">
          <div className="mx-auto max-w-[1600px] px-6 xl:px-10">

            <div className="max-w-5xl">

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
                Get In Touch
              </span>

              <h1 className="mt-6 font-heading text-5xl leading-[1.05] sm:text-6xl lg:text-8xl">
                Let's create
                <span className="block text-[var(--satt-gold-dark)]">
                  something unforgettable.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-sm leading-7 text-[var(--satt-text-secondary)] md:text-base">
                Whether you're planning a corporate event, destination
                wedding, festival, conference or celebration, tell us what
                you're imagining. We'll help turn the idea into an experience
                worth remembering.
              </p>

            </div>

          </div>
        </section>


        {/* =========================================================
            CONTACT CONTENT
        ========================================================= */}

        <section className="pb-28 md:pb-40">
          <div className="mx-auto max-w-[1600px] px-6 xl:px-10">

            <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

              {/* =====================================================
                  CONTACT INFORMATION
              ===================================================== */}

              <div>

                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
                  Start a Conversation
                </span>

                <h2 className="mt-5 max-w-xl font-heading text-4xl leading-tight md:text-5xl">
                  Tell us about
                  <span className="block">
                    your event.
                  </span>
                </h2>

                <p className="mt-6 max-w-md text-sm leading-7 text-[var(--satt-text-secondary)]">
                  Every great event begins with a conversation. Share a few
                  details with us and our team will get back to you to
                  understand your vision.
                </p>


                {/* CONTACT DETAILS */}

                <div className="mt-12 space-y-8">

                  {/* EMAIL */}

                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[var(--satt-gold-dark)]">
                      Email
                    </span>

                    <a
                      href="mailto:visit.sattevents@gmail.com"
                      className="mt-2 block text-lg transition-colors duration-300 hover:text-[var(--satt-gold-dark)]"
                    >
                      visit.sattevents@gmail.com
                    </a>
                  </div>


                  {/* PHONE */}

                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[var(--satt-gold-dark)]">
                      Phone
                    </span>

                    <a
                      href="tel:+917415077724"
                      className="mt-2 block text-lg transition-colors duration-300 hover:text-[var(--satt-gold-dark)]"
                    >
                      +91 74150-77724
                    </a>
                  </div>


                  {/* LOCATION */}

                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[var(--satt-gold-dark)]">
                      Based In
                    </span>

                    <p className="mt-2 text-lg">
                      Indore, Madhya Pradesh
                    </p>
                  </div>


                  {/* HOURS */}

                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[var(--satt-gold-dark)]">
                      Working Hours
                    </span>

                    <p className="mt-2 text-lg">
                      Monday — Saturday
                    </p>

                    <p className="mt-1 text-sm text-[var(--satt-text-secondary)]">
                      10:00 AM — 7:00 PM
                    </p>
                  </div>

                </div>

              </div>


              {/* =====================================================
                  FORM
              ===================================================== */}

              <div className="bg-white p-7 md:p-10 lg:p-14">
                <ContactForm />
              </div>

            </div>

          </div>
        </section>


        {/* =========================================================
            WHAT HAPPENS NEXT
        ========================================================= */}

        <section className="border-y border-[var(--satt-gold)]/30 bg-white py-24 md:py-32">

          <div className="mx-auto max-w-[1600px] px-6 xl:px-10">

            <div className="max-w-3xl">

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
                What Happens Next
              </span>

              <h2 className="mt-5 font-heading text-4xl md:text-6xl">
                From conversation
                <span className="text-[var(--satt-gold-dark)]">
                  {" "}to celebration.
                </span>
              </h2>

            </div>


            <div className="mt-16 grid gap-10 md:grid-cols-3">

              {/* STEP 01 */}

              <div className="border-t border-[var(--satt-gold)] pt-6">

                {/* <span className="text-[10px] tracking-[0.2em] text-[var(--satt-gold-dark)]">
                  01
                </span> */}

                <h3 className="mt-5 font-heading text-2xl md:text-3xl">
                  Tell us your vision.
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--satt-text-secondary)]">
                  Share your event idea, requirements, expectations and
                  anything that matters to you.
                </p>

              </div>


              {/* STEP 02 */}

              <div className="border-t border-[var(--satt-gold)] pt-6">

                {/* <span className="text-[10px] tracking-[0.2em] text-[var(--satt-gold-dark)]">
                  02
                </span> */}

                <h3 className="mt-5 font-heading text-2xl md:text-3xl">
                  We shape the experience.
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--satt-text-secondary)]">
                  Our team works with you to develop the right concept,
                  experience and execution plan.
                </p>

              </div>


              {/* STEP 03 */}

              <div className="border-t border-[var(--satt-gold)] pt-6">

                {/* <span className="text-[10px] tracking-[0.2em] text-[var(--satt-gold-dark)]">
                  03
                </span> */}

                <h3 className="mt-5 font-heading text-2xl md:text-3xl">
                  We bring it to life.
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--satt-text-secondary)]">
                  From planning and production to the final moment, we take
                  care of the details that make the experience memorable.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================================
            FINAL CTA
        ========================================================= */}

        <section className="py-28 md:py-40">

          <div className="mx-auto max-w-[1200px] px-6 text-center">

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
              Your Event Starts Here
            </span>

            <h2 className="mx-auto mt-6 max-w-4xl font-heading text-5xl leading-tight sm:text-6xl md:text-7xl">
              Let's create a moment
              <span className="block text-[var(--satt-gold-dark)]">
                worth remembering.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[var(--satt-text-secondary)]">
              Have an idea? Have a date? Or simply have a dream?
              Let's start with a conversation.
            </p>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}