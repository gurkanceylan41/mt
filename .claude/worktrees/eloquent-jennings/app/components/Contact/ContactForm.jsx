"use client";

import { ArrowRight, CheckCircle, X, Loader2 } from "lucide-react";
import { useThemeContext } from "@/app/contexts/ThemeContext";

export default function ContactForm({
  formRef,
  formData,
  formStatus,
  onInputChange,
  onSubmit,
}) {
  const { darkMode, theme } = useThemeContext();

  const inputClassName = `form-input ${
    darkMode ? "form-input-dark" : "form-input-light"
  }`;

  const selectClassName = `form-input form-select ${
    darkMode ? "form-input-dark form-select-dark" : "form-input-light"
  }`;

  return (
    <div
      className={`p-8 sm:p-10 rounded-3xl ${
        darkMode
          ? "bg-zinc-900/70 border border-zinc-800"
          : "bg-white shadow-2xl shadow-zinc-200/50"
      }`}
    >
      <h3 className={`text-2xl font-bold mb-8 ${theme.text}`}>
        Bize Mesaj Gönderin
      </h3>

      {/* Başarı Mesajı */}
      {formStatus.success && (
        <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3">
          <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
          <span className="text-green-500 font-medium">
            Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
          </span>
        </div>
      )}

      {/* Hata Mesajı */}
      {formStatus.error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3">
          <X className="text-red-500 flex-shrink-0" size={20} />
          <span className="text-red-500 font-medium">
            Mesaj gönderilemedi. Lütfen tekrar deneyin veya bizi telefonla arayın.
          </span>
        </div>
      )}

      <form ref={formRef} onSubmit={onSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Ad Soyad */}
          <div className="space-y-2">
            <label className={`block text-sm font-semibold ${theme.text}`}>
              Ad Soyad <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={onInputChange}
              required
              className={inputClassName}
              placeholder="Adınız Soyadınız"
            />
          </div>

          {/* E-posta */}
          <div className="space-y-2">
            <label className={`block text-sm font-semibold ${theme.text}`}>
              E-posta <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={onInputChange}
              required
              className={inputClassName}
              placeholder="ornek@email.com"
            />
          </div>
        </div>

        {/* Telefon */}
        <div className="space-y-2">
          <label className={`block text-sm font-semibold ${theme.text}`}>
            Telefon
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={onInputChange}
            className={inputClassName}
            placeholder="+90 5XX XXX XX XX"
          />
        </div>

        {/* Konu */}
        <div className="space-y-2">
          <label className={`block text-sm font-semibold ${theme.text}`}>
            Konu <span className="text-red-500">*</span>
          </label>
          <select
            name="subject"
            value={formData.subject}
            onChange={onInputChange}
            required
            className={selectClassName}
          >
            <option value="">Bir konu seçin</option>
            <option value="Fiyat Teklifi">Fiyat Teklifi</option>
            <option value="Ürün Bilgisi">Ürün Bilgisi</option>
            <option value="Sipariş Takibi">Sipariş Takibi</option>
            <option value="Diğer">Diğer</option>
          </select>
        </div>

        {/* Mesaj */}
        <div className="space-y-2">
          <label className={`block text-sm font-semibold ${theme.text}`}>
            Mesajınız <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={5}
            name="message"
            value={formData.message}
            onChange={onInputChange}
            required
            className={`${inputClassName} resize-none`}
            placeholder="Mesajınızı buraya yazın..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={formStatus.loading}
          className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
            formStatus.loading
              ? "bg-zinc-400 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:shadow-lg hover:shadow-blue-500/30"
          } text-white`}
        >
          {formStatus.loading ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              <span>Gönderiliyor...</span>
            </>
          ) : (
            <>
              <span>Mesajı Gönder</span>
              <ArrowRight size={20} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
