# FreshSpace Laundry & Cleaning Services

Responsive Next.js website for laundry, home, and commercial cleaning services in Kampala and Wakiso, Uganda.

## Run locally

```powershell
npm install
npm run dev
```

Open http://localhost:3000.

## Quote flow

The quote form validates customer details, estimates a starting price in UGX, and prepares a WhatsApp message with the service, space size, frequency, date, area, and extras. The customer reviews and sends the message; no booking is confirmed by the form.

Starting prices and recurring discounts are example values in `src/components/quote-form.tsx`. Confirm actual rates, minimum charges, taxes, travel fees, and discount policy with the business before publishing.

## Before launch

- Replace the sample phone number and email in `src/app/page.tsx` and the WhatsApp number in `src/components/quote-form.tsx` with verified business contacts.
- Confirm the Kampala and Wakiso coverage areas, service list, operating hours, and estimate rules.
- Replace the Unsplash photo URLs with approved business photography when available.
- Add a server and database if customer enquiries need to be stored or assigned to staff.

## Production checks

```powershell
npm run lint
npm run build
```
