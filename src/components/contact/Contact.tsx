import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
  MessageCircle,
} from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // ✅ FormSubmit bilan real jo'natish
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitted(false);

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/Abdulhakimovhojiakbar123@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Server error");
      }

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert("Xabar yuborishda xatolik. Keyinroq yana urinib ko'ring.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="relative w-full py-48 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 font-display"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <span className="text-gray-900 dark:text-white">Biz bilan </span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-emerald-400">
              Bog'laning
            </span>
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            AI Muhofiz loyihasi uchun biz bilan bog'laning. Mutaxassislarimiz
            sizga yordam berishdan mamnun bo'lishadi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-white/10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Xabar yuborish
            </h3>

            {isSubmitted ? (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}>
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Xabar yuborildi!
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Tez orada siz bilan bog'lanamiz.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Ism
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/90 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-primary focus:bg-white dark:focus:bg-white/15 transition-all"
                      placeholder="To'liq ismingiz"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/90 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-primary focus:bg-white dark:focus:bg-white/15 transition-all"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/90 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-primary focus:bg-white dark:focus:bg-white/15 transition-all"
                    placeholder="+998 XX XXX XX XX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Xabar
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/90 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-primary focus:bg-white dark:focus:bg-white/15 transition-all resize-none"
                    placeholder="Loyiha haqida qisqacha ma'lumot..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-linear-to-r from-primary to-emerald-500 text-white rounded-lg font-semibold hover:from-primary/90 hover:to-emerald-500/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}>
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Yuborilmoqda...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Xabar yuborish
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}>
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-white/10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Aloqa ma'lumotlari
              </h3>

              <div className="space-y-6">
                <motion.div
                  className="flex items-start gap-4 group cursor-pointer"
                  whileHover={{ x: 5 }}>
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-semibold mb-1">
                      Email
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      hojiakbardevs@gmail.com
                    </p>
                    <p className="text-primary text-sm">
                      Hojiakbar Abdulhakimov
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 group cursor-pointer"
                  whileHover={{ x: 5 }}>
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-semibold mb-1">
                      Telefon
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      +998 88 624 64 40
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Hojiakbar Abdulhakimov
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 group cursor-pointer"
                  whileHover={{ x: 5 }}>
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-semibold mb-1">
                      Manzil
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Toshkent, O'zbekiston
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Sun'iy intellekt tadqiqotlar instituti
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Quick Response */}
            <motion.div
              className="bg-linear-to-r from-primary/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-6 border border-primary/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}>
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="text-gray-900 dark:text-white font-semibold mb-2">
                    Tezkor javob
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Barcha so'rovlarga 24 soat ichida javob beramiz. Muhim
                    loyihalar uchun tezkor konsultatsiya mavjud.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}>
              <h4 className="text-gray-900 dark:text-white font-semibold mb-4">
                Ijtimoiy tarmoqlar
              </h4>
              <div className="flex gap-3">
                <motion.a
                  href="https://github.com/Hojiakbardevs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 dark:bg-white/10 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  <Github className="w-4 h-4" />
                  GitHub
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/hojiakbardev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 dark:bg-white/10 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </motion.a>
                <motion.a
                  href="https://t.me/Alpha_development"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 dark:bg-white/10 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  <MessageCircle className="w-4 h-4" />
                  Telegram
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
