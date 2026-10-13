const phoneNumber = "+256 700 123 456";

export const business = {
  name: "FreshSpace Laundry & Cleaning Services",
  phoneNumber,
  phoneHref: `tel:${phoneNumber.replaceAll(" ", "")}`,
  whatsappNumber: phoneNumber.replace(/\D/g, ""),
  email: "hello@freshspace.ug",
  serviceArea: "Kampala & Wakiso, Uganda",
  hours: "Monday – Saturday, 8:00 am – 6:00 pm",
};
