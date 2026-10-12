"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

const serviceOptions = [
  { value: "home", label: "Home cleaning", base: 140_000 },
  { value: "office", label: "Office cleaning", base: 220_000 },
  { value: "deep", label: "Deep cleaning", base: 190_000 },
  { value: "move", label: "Move-in / move-out", base: 240_000 },
  { value: "laundry", label: "Laundry & ironing", base: 65_000 },
  { value: "exterior", label: "Roof & exterior", base: 260_000 },
];

const extras = [
  { value: "windows", label: "Interior windows", cost: 25_000 },
  { value: "fridge", label: "Fridge interior", cost: 20_000 },
  { value: "oven", label: "Oven interior", cost: 25_000 },
];

const recurringFactors: Record<string, number> = {
  once: 1,
  weekly: 0.88,
  fortnightly: 0.94,
};

const whatsappNumber = "256700123456";

function formatUGX(amount: number) {
  return `UGX ${new Intl.NumberFormat("en-UG").format(amount)}`;
}

function estimatePrice(
  service: string,
  rooms: number,
  frequency: string,
  selectedExtras: string[],
) {
  const selectedService = serviceOptions.find((option) => option.value === service);
  const extraTotal = extras
    .filter((extra) => selectedExtras.includes(extra.value))
    .reduce((total, extra) => total + extra.cost, 0);
  const subtotal = (selectedService?.base ?? serviceOptions[0].base) +
    Math.max(0, rooms - 1) * 25_000 +
    extraTotal;
  const recurringFactor = recurringFactors[frequency] ?? 1;

  return Math.round((subtotal * recurringFactor) / 5_000) * 5_000;
}

export default function QuoteForm({ initialService = "home" }: { initialService?: string }) {
  const [estimate, setEstimate] = useState<number | null>(null);
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60_000)
      .toISOString()
      .slice(0, 10);
    if (String(formData.get("date")) < today) {
      setStatus("Choose today or a future date for your cleaning request.");
      setEstimate(null);
      return;
    }
    const service = String(formData.get("service"));
    const rooms = Number(formData.get("rooms"));
    const frequency = String(formData.get("frequency"));
    const selectedExtras = formData.getAll("extras").map(String);
    const price = estimatePrice(service, rooms, frequency, selectedExtras);
    const serviceLabel = serviceOptions.find((option) => option.value === service)?.label;
    const extrasLabel = extras
      .filter((extra) => selectedExtras.includes(extra.value))
      .map((extra) => extra.label);
    const request = [
      "Hello FreshSpace Laundry & Cleaning Services, I would like a service estimate.",
      `Name: ${String(formData.get("name"))}`,
      `Phone: ${String(formData.get("phone"))}`,
      `Area: ${String(formData.get("area"))}`,
      `Service: ${serviceLabel}`,
      `Rooms / work areas: ${rooms}`,
      `Frequency: ${frequency}`,
      `Preferred date: ${String(formData.get("date"))}`,
      `Extras: ${extrasLabel.length ? extrasLabel.join(", ") : "None"}`,
      `Starting estimate: ${formatUGX(price)} (please confirm after reviewing the space)`,
    ].join("\n");

    setEstimate(price);
    setStatus("");
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(request)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setStatus("Review the prepared message and send it in WhatsApp to reach our team.");
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <div>
          <h3>Let’s get you an estimate</h3>
          <p>A few details are all we need to get started.</p>
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
          What needs cleaning?
          <select name="service" defaultValue={initialService}>
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>
        <label className="form-field">
          How often?
          <select name="frequency" defaultValue="once">
            <option value="once">One-time clean</option>
            <option value="weekly">Weekly</option>
            <option value="fortnightly">Every two weeks</option>
          </select>
        </label>
        <label className="form-field">
          Rooms / work areas
          <input name="rooms" type="number" min="1" max="30" defaultValue="2" required />
        </label>
        <label className="form-field">
          Preferred date
          <input name="date" type="date" required />
        </label>
        <label className="form-field form-field-wide">
          Your area in Kampala or Wakiso
          <input autoComplete="address-level2" name="area" placeholder="e.g. Ntinda, Entebbe, Kira" required />
        </label>
        <fieldset className="form-field form-field-wide extras-field">
          <legend>Any extras? <span>Optional</span></legend>
          <div className="extras-options">
            {extras.map((extra) => (
              <label key={extra.value}>
                <input name="extras" type="checkbox" value={extra.value} />
                <span>{extra.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>
      <button className="button button-green form-submit" type="submit">
        Get my estimate <ArrowRight size={16} />
      </button>
      {estimate !== null && (
        <div className="estimate-result" role="status">
          <strong>Starting from {formatUGX(estimate)}</strong>
          <span>Final pricing is confirmed with you after we review the space and service details.</span>
        </div>
      )}
      {status && <p className="form-status">{status}</p>}
      <p className="estimate-note"><MessageCircle size={12} /> Your request opens a WhatsApp message for our team. Nothing is booked until we confirm together.</p>
    </form>
  );
}