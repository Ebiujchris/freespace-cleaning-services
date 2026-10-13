export const servicePages = [
  {
    slug: "home-cleaning",
    name: "Home cleaning",
    formService: "home",
    description:
      "Home cleaning in Kampala and Wakiso for the rooms and routines that matter to you.",
    introduction:
      "Tell us which rooms need attention and what a good clean means for your home. We will agree on the scope with you before confirming a visit.",
    details: [
      "Choose the rooms and tasks you want included.",
      "Share any priorities or areas that need extra attention.",
      "Confirm timing and price with the team before booking.",
    ],
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1500&q=90",
    imageAlt: "A cleaner caring for a bright home",
  },
  {
    slug: "office-cleaning",
    name: "Office cleaning",
    formService: "office",
    description:
      "Office cleaning in Kampala and Wakiso, planned around your workplace and schedule.",
    introduction:
      "Keep your work environment ready for the day. Tell us about the space, areas to be cleaned, and a suitable time so we can discuss a practical service plan.",
    details: [
      "Describe your office size and shared work areas.",
      "Tell us which spaces should be prioritized.",
      "Discuss one-time or recurring visits and access arrangements.",
    ],
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1500&q=90",
    imageAlt: "A bright modern office workspace",
  },
  {
    slug: "deep-cleaning",
    name: "Deep cleaning",
    formService: "deep",
    description:
      "Detailed deep cleaning in Kampala and Wakiso, scoped to the areas that need extra attention.",
    introduction:
      "When a regular clean is not enough, tell us what has been missed or needs a closer clean. We will review the requested areas and confirm the scope and price before work begins.",
    details: [
      "Identify the rooms and surfaces you want us to focus on.",
      "Mention built-up dirt or specific cleaning concerns.",
      "Allow the team to confirm timing and the work involved.",
    ],
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1500&q=90",
    imageAlt: "Cleaning supplies ready for a detailed clean",
  },
  {
    slug: "move-in-move-out-cleaning",
    name: "Move-in & move-out",
    formService: "move",
    description:
      "Move-in and move-out cleaning in Kampala and Wakiso, arranged around your handover date.",
    introduction:
      "Prepare a place for its next chapter. Share the property type, areas to be cleaned, and your handover timing so we can confirm whether the requested work fits the schedule.",
    details: [
      "Tell us whether you are moving in or moving out.",
      "Describe the property and the areas to be included.",
      "Share your handover date so availability can be checked.",
    ],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1500&q=90",
    imageAlt: "A home ready for a new resident",
  },
  {
    slug: "roof-exterior-cleaning",
    name: "Roof & exterior",
    formService: "exterior",
    description:
      "Roof, gutter, and exterior cleaning enquiries in Kampala and Wakiso, reviewed for site access and scope.",
    introduction:
      "Every exterior job depends on the property and access. Tell us what needs cleaning and where it is; the team will review the site details before confirming whether the work can be scheduled.",
    details: [
      "Describe the roof, gutter, or exterior area involved.",
      "Share the property location and any access details.",
      "Confirm site requirements and scope with the team before booking.",
    ],
    image:
      "/images/roof cleaning.jpg",
    imageAlt: "Exterior roof maintenance at a residential property",
  },
] as const;

export const serviceMenuLinks = [
  { label: "Laundry & ironing", href: "/laundry-services-kampala" },
  ...servicePages.map((service) => ({
    label: service.name,
    href: `/services/${service.slug}`,
  })),
];
