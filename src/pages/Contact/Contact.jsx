import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactForm from './components/ContactForm';

const Contact = () => {
  return (
    <div className="relative w-full overflow-hidden bg-background text-white">
      <div className="absolute top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Contact Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
        {/* Background glows */}
        <div
          className="absolute -top-40 right-1/3 w-[600px] h-[600px] pointer-events-none z-0"
          style={{
            background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(34,211,238,0.15) 0%, transparent 70%)',
          }}
        />

        {/* Page Header */}
        <div className="mb-16 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            Get in Touch
          </div>
          <h1 className="text-[60px] font-extrabold leading-[70px] bg-gradient-to-r from-[#B4F1FF] via-[#B4F1FF] to-[#357CCE] bg-clip-text text-transparent">
            Send Us A Message
          </h1>
          <p className="mt-4 text-[17px] font-normal leading-normal text-white">
            Tell us about your organization and we'll get back to you.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
          {/* Form - takes 2/3 on desktop */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Contact Information - takes 1/3 on desktop */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Contact Information</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Reach out to us through any of the following channels.
              </p>
            </div>

            {/* Email */}
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-2">Email</h4>
              <a
                href="mailto:info@neuroturing.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors break-all"
              >
                info@neuroturing.com
              </a>
            </div>

            {/* Phone */}
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-2">Phone</h4>
              <a
                href="tel:+18001234567"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                +1 (800) 123-4567
              </a>
            </div>

            {/* Address */}
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-2">Address</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                404, 4th Floor<br />
                Arihant Aura<br />
                Turbhe, Navi Mumbai<br />
                400705, India
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
