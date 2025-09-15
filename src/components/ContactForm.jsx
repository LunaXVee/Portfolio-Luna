// ContactForm.jsx - React Component with Firebase
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Dynamically import Firebase modules
      const { initializeApp } = await import('firebase/app');
      const { getFirestore, collection, addDoc, serverTimestamp } = await import('firebase/firestore');
      
      // Firebase config - replace with your actual config
      const firebaseConfig = {
        apiKey: "AIzaSyCtahjLjjOl61mJzCgf_2p0sNcS8kT-GO0",
        authDomain: "luna-portfolio-248a5.firebaseapp.com",
        projectId: "luna-portfolio-248a5",
        storageBucket: "luna-portfolio-248a5.firebasestorage.app",
        messagingSenderId: "192164670810",
        appId: "1:192164670810:web:096af3e4c913872b8dd763",
        measurementId: "G-QL8N358GME"
      };

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
      
      // Add document to Firestore
      await addDoc(collection(db, 'contact-messages'), {
        email: formData.email,
        message: formData.message,
        timestamp: serverTimestamp(),
        status: 'unread'
      });
      
      // Reset form on success
      setFormData({ email: '', message: '' });
      setSubmitStatus('success');
      
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0A3044] mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-[#6c757d] max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#0A3044] font-semibold">Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="input input-bordered w-full bg-gray-50 border-gray-200 focus:border-teal-500 focus:bg-white transition-all duration-200"
                required
              />
            </div>

            {/* Message Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#0A3044] font-semibold">Your Message</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project, ideas, or just say hello..."
                className="textarea textarea-bordered w-full h-32 bg-gray-50 border-gray-200 focus:border-teal-500 focus:bg-white transition-all duration-200 resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn btn-lg px-8 border-none text-white font-semibold transition-all duration-300 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-teal-600 hover:bg-teal-700 hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="alert alert-success">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Thanks! Your message has been sent successfully.</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="alert alert-error">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Oops! Something went wrong. Please try again.</span>
              </div>
            )}
          </form>
        </div>

        {/* Additional Contact Info */}
        <div className="text-center mt-12">
          <p className="text-[#6c757d] mb-4">
            Or reach out directly at
          </p>
          <a 
            href="mailto:majahav@africau.edu" 
            className="text-teal-600 hover:text-teal-700 font-semibold text-lg transition-colors duration-200"
          >
            majahav@africau.edu
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;