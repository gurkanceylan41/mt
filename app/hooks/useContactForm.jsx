"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_2kxehnp";
const EMAILJS_TEMPLATE_ID = "template_blmow8m";
const EMAILJS_PUBLIC_KEY = "h7mXj8YuesAZ7y9DM";

export function useContactForm() {
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

  return {
    formRef,
    formData,
    formStatus,
    handleInputChange,
    handleSubmit,
  };
}
