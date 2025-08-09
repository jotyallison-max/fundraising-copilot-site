export const metadata = { title: "Pricing — DonorAxis" };

export default function PricingPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold">Pricing</h1>
      <ul className="mt-6 space-y-3 text-slate-700 list-disc list-inside">
        <li><b>Donor Intel</b> — $295/mo</li>
        <li><b>Campaign Co-Pilot</b> — $795/mo</li>
        <li><b>Full Service</b> — $2,995/mo</li>
      </ul>
    </main>
  );
}
