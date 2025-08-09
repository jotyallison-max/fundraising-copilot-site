export default function PricingPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold">Pricing</h1>
      <p className="mt-4 text-slate-600">
        Simple, transparent pricing for teams of all sizes.
      </p>

      <div className="mt-8 grid gap-8 md:grid-cols-3">
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold">Donor Intel</h2>
          <p className="mt-2 text-slate-500">$295/mo</p>
          <ul className="mt-4 list-disc list-inside text-slate-700">
            <li>RFA scoring & smart segments</li>
            <li>Weekly grant alerts</li>
            <li>Fundraising dashboard</li>
            <li>Email templates</li>
          </ul>
        </div>

        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold">Campaign Co-Pilot</h2>
          <p className="mt-2 text-slate-500">$795/mo</p>
          <ul className="mt-4 list-disc list-inside text-slate-700">
            <li>Everything in Donor Intel</li>
            <li>3-touch donor sequences</li>
            <li>Grant content paragraphs</li>
            <li>Board-ready reports</li>
          </ul>
        </div>

        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold">Full Service</h2>
          <p className="mt-2 text-slate-500">$2,995/mo</p>
          <ul className="mt-4 list-disc list-inside text-slate-700">
            <li>Everything in Campaign Co-Pilot</li>
            <li>Full grant drafting</li>
            <li>Quarterly strategy sessions</li>
            <li>Custom CRM workflows</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
