"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  X,
  Loader2,
} from "lucide-react";
import { contactInfo } from "../data";

// EmailJS Bilgileri
const EMAILJS_SERVICE_ID = "service_2kxehnp";
const EMAILJS_TEMPLATE_ID = "template_blmow8m";
const EMAILJS_PUBLIC_KEY = "h7mXj8YuesAZ7y9DM";

const icons = {
  0: <Phone size={24} />,
  1: <Mail size={24} />,
  2: <MapPin size={24} />,
};

export default function Contact({ darkMode, theme }) {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: false });

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      setFormStatus({ loading: false, success: true, error: false });
      setFormData({
        from_name: "",
        from_email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setFormStatus({ loading: false, success: false, error: false });
      }, 5000);
    } catch (error) {
      console.error("E-posta gönderimi başarısız:", error);
      setFormStatus({ loading: false, success: false, error: true });

      setTimeout(() => {
        setFormStatus({ loading: false, success: false, error: false });
      }, 5000);
    }
  };

  return (
    <section id="iletisim" className={`py-24 ${theme.bg} relative`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <div>
            <span
              className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 ${
                darkMode
                  ? "bg-blue-500/10 text-blue-400"
                  : "bg-blue-50 text-blue-600"
              }`}
            >
              İLETİŞİM
            </span>

            <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${theme.text}`}>
              Size Nasıl
              <span className="text-gradient"> Yardımcı Olabiliriz?</span>
            </h2>

            <p className={`text-lg leading-relaxed mb-12 ${theme.textMuted}`}>
              Sorularınız veya özel talepleriniz için bize ulaşın. Uzman
              ekibimiz en kısa sürede size dönüş yapacaktır.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className={`group flex items-start gap-5 p-6 rounded-2xl transition-all duration-300 ${
                    darkMode
                      ? "bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/50"
                      : "bg-white border border-zinc-100 hover:border-blue-200 shadow-sm hover:shadow-lg"
                  }`}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                    {icons[i]}
                  </div>
                  <div>
                    <h3 className={`font-bold mb-1 ${theme.text}`}>
                      {item.title}
                    </h3>
                    <p className={`font-medium ${theme.text}`}>{item.info}</p>
                    <p className={theme.textMuted}>{item.subInfo}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div
            className={`p-8 sm:p-10 rounded-3xl ${
              darkMode
                ? "bg-zinc-900/50 border border-zinc-800"
                : "bg-white shadow-xl shadow-zinc-200/50"
            }`}
          >
            <h3 className={`text-2xl font-bold mb-8 ${theme.text}`}>
              Bize Mesaj Gönderin
            </h3>

            {/* Başarı Mesajı */}
            {formStatus.success && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-green-500 font-medium">
                  Mesajınız başarıyla gönderildi! En kısa sürede size dönüş
                  yapacağız.
                </span>
              </div>
            )}

            {/* Hata Mesajı */}
            {formStatus.error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3">
                <X className="text-red-500" size={20} />
                <span className="text-red-500 font-medium">
                  Mesaj gönderilemedi. Lütfen tekrar deneyin veya bizi telefonla
                  arayın.
                </span>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${theme.text}`}
                  >
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3.5 rounded-xl border transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      darkMode
                        ? "bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500"
                        : "bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400"
                    }`}
                    placeholder="Adınız"
                  />
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${theme.text}`}
                  >
                    E-posta
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3.5 rounded-xl border transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      darkMode
                        ? "bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500"
                        : "bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400"
                    }`}
                    placeholder="ornek@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${theme.text}`}
                >
                  Telefon
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3.5 rounded-xl border transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    darkMode
                      ? "bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500"
                      : "bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400"
                  }`}
                  placeholder="+90 5XX XXX XX XX"
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${theme.text}`}
                >
                  Konu
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3.5 rounded-xl border transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    darkMode
                      ? "bg-zinc-800 border-zinc-700 text-white"
                      : "bg-zinc-50 border-zinc-200 text-zinc-900"
                  }`}
                >
                  <option value="">Konu seçin</option>
                  <option value="Fiyat Teklifi">Fiyat Teklifi</option>
                  <option value="Ürün Bilgisi">Ürün Bilgisi</option>
                  <option value="Sipariş Takibi">Sipariş Takibi</option>
                  <option value="Diğer">Diğer</option>
                </select>
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${theme.text}`}
                >
                  Mesajınız
                </label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3.5 rounded-xl border transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                    darkMode
                      ? "bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500"
                      : "bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400"
                  }`}
                  placeholder="Mesajınızı buraya yazın..."
                />
              </div>

              <button
                type="submit"
                disabled={formStatus.loading}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formStatus.loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Gönderiliyor...</span>
                  </>
                ) : (
                  <>
                    <span>Mesajı Gönder</span>
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
