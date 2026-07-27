import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        organization: '',
        phone: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Success Message */}
      {submitted && (
        <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
          ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
        </div>
      )}

      {/* Full Name and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all"
          />
        </div>
      </div>

      {/* Organization and Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            name="organization"
            placeholder="Organization"
            value={formData.organization}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all"
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <textarea
          name="message"
          placeholder="How can we help?"
          value={formData.message}
          onChange={handleChange}
          required
          rows="6"
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all resize-none"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          className="px-8 py-3 rounded-full bg-gray-900 hover:bg-gray-800 text-white font-semibold text-sm transition-all hover:shadow-lg active:scale-95 border border-white/10"
        >
          Submit Inquiry
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
