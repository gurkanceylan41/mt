"use client";

import { useThemeContext } from "@/app/contexts/ThemeContext";
import { useContactForm } from "@/app/hooks/useContactForm";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  const { theme } = useThemeContext();
  const { formRef, formData, formStatus, handleInputChange, handleSubmit } =
    useContactForm();

  return (
    <section id="iletisim" className={`py-24 ${theme.bg} relative`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ContactInfo />
          <ContactForm
            formRef={formRef}
            formData={formData}
            formStatus={formStatus}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </section>
  );
}
