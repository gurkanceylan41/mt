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
      className={`p-8 sm:p-10 rounded-lg border ${
        darkMode
          ? "bg-[#161616] border-[#2a2825]"
          : "bg-white border-[#e8e5df]"
      }`}
    >
      <h3 className={`font-display text-2xl font-semibold mb-8 ${theme.text}`}>
        Bize Mesaj Gönderin
      </h3>

      {formStatus.success && (
        <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3">
          <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
          <span className="text-green-500 font-medium">
            Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
          </span>
        </div>
      )}

      {formStatus.error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3">
          <X className="text-red-500 flex-shrink-0" size={20} />
          <span className="text-red-500 font-medium">
            Mesaj gönderilemedi. Lütfen tekrar deneyin veya bizi telefonla arayın.
          </span>
        </div>
      )}

      <form ref={formRef} onSubmit={onSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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

        <button
          type="submit"
          disabled={formStatus.loading}
          className={`w-full py-4 rounded-[6px] font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
            formStatus.loading
              ? "bg-[#6b6b6b] cursor-not-allowed"
              : darkMode
              ? "bg-white text-[#111111] hover:bg-[#f0ede8]"
              : "bg-[#111111] text-white hover:bg-[#333333]"
          } ${formStatus.loading ? "text-white" : ""}`}
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
