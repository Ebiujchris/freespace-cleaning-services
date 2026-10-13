# FreshSpace Laundry & Cleaning Services

Responsive Next.js website for laundry, home, and commercial cleaning services in Kampala and Wakiso, Uganda.

## Run locally

```powershell
npm install
npm run dev
```

Open http://localhost:3000.

## Quote flow

The enquiry form collects a name, phone number, service, area, and optional details, then prepares a WhatsApp message for the customer to review and send. It does not calculate prices, store submissions, or confirm bookings.

The enquiry form does not quote prices. Confirm actual rates, minimum charges, taxes, travel fees, and discount policy directly with customers before publishing prices.

## Before launch

- Verify the phone number, WhatsApp number, and email in `src/lib/business.ts` before launch.
- Confirm the Kampala and Wakiso coverage areas, service list, operating hours, and estimate rules.
- Replace the Unsplash photo URLs with approved business photography when available.
- Add a server and database if customer enquiries need to be stored or assigned to staff.

## Production checks

```powershell
npm run lint
npm run build
```
