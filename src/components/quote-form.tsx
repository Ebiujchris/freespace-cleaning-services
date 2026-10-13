"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

const serviceOptions = [
  { value: "home", label: "Home cleaning" },
  { value: "office", label: "Office cleaning" },
  { value: "deep", label: "Deep cleaning" },
  { value: "move", label: "Move-in / move-out" },
  { value: "laundry", label: "Laundry & ironing" },
  { value: "exterior", label: "Roof & exterior" },
];

import { business } from "@/lib/business";

export default function QuoteForm({ initialService = "home" }: { initialService?: string }) {
  const [service, setService] = useState(initialService);
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const serviceLabel = serviceOptions.find((option) => option.value === service)?.label;
    const request = [
      `Hello ${business.name}, I would like to enquire about your services.`,
      `Name: ${String(formData.get("name"))}`,
      `Phone: ${String(formData.get("phone"))}`,
      `Area: ${String(formData.get("area"))}`,
      `Service: ${serviceLabel}`,
      `Details: ${String(formData.get("details") || "Not provided")}`,
    ].join("\n");

    window.open(
      `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(request)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setStatus("Review the prepared message and send it in WhatsApp. Your request is not booked until our team confirms it.");
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <div>
          <h3>Enquire about a service</h3>
          <p>Share your contact details and what you need.</p>
        </div>
        <span className="form-heading-icon"><Sparkles size={17} /></span>
      </div>
      <div className="form-grid">
        <label className="form-field">
          Your name
          <input autoComplete="name" name="name" placeholder="Full name" required />
        </label>
        <label className="form-field">
          Phone number
          <input autoComplete="tel" name="phone" type="tel" placeholder="+256 ..." required />
        </label>
        <label className="form-field">
          Service
          <select name="service" value={service} onChange={(event) => setService(event.target.value)}>
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>
        <label className="form-field form-field-wide">
          Your area
          <input autoComplete="address-level2" name="area" placeholder="e.g. Ntinda, Entebbe, Kira" required />
        </label>
        <label className="form-field form-field-wide">
          {service === "laundry" ? "Laundry details (optional)" : "Anything else? (optional)"}
          <textarea name="details" rows={3} placeholder={service === "laundry" ? "e.g. clothes, bedding, ironing, or timing" : "Tell us about your space or preferred timing"} />
        </label>
      </div>
      <button className="button button-green form-submit" type="submit">
        Continue in WhatsApp <ArrowRight size={16} />
      </button>
      {status && <p className="form-status" role="status">{status}</p>}
      <p className="estimate-note"><MessageCircle size={12} /> This opens a WhatsApp draft. No booking is confirmed until our team replies.</p>
    </form>
  );
}