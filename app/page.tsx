import Link from "next/link";
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, BarChart3, Users, ShieldCheck, Zap, Mail, CheckCircle2 } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const netData = [
  { month: "Mar", actual: 289, scenario: 700 },
  { month: "Apr", actual: 322, scenario: 740 },
  { month: "May", actual: -986, scenario: 120 },
  { month: "Jun", actual: 648, scenario: 980 },
  { month: "Jul", actual: -318, scenario: 410 },
];

const segmentData = [
  { name: "Major", value: 12 },
  { name: "Mid", value: 58 },
  { name: "General", value: 410 },
  { name: "Lapsed", value: 96 },
];

export default function Page() {
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submitLead = async () => {
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-slate-900 text-white grid place-items-center">
              <Sparkles size={18} />
            </div>
            <Link href="/" className="font-semibold">DonorAxis</Link>
          </div>

          {/* NAV: now using Next.js <Link> to real pages */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/features" className="hover:text-slate-600">Features</Link>
            {/* Add /platform later when you create that page */}
            {/* <Link href="/platform" className="hover:text-slate-600">Platform</Link> */}
            <Link href="/pricing" className="hover:text-slate-600">Pricing</Link>
            {/* Add /contact later when you create that page */}
            {/* <Link href="/contact" className="hover:text-slate-600">Contact</Link> */}
          </nav>

          <Link href="/demo" className="rounded-2xl bg-slate-900 text-white px-4 py-2">
            Get a Demo
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 pt-14 pb-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight"
          >
            The future of fundraising belongs to those who combine data with heart
          </motion.h1>
          <p className="mt-4 text-slate-600 max-w-prose">
            Identify your best donors, personalize outreach, draft grants, and forecast revenue —
            without hiring a data team. Connect your CRM and start in days.
          </p>

          <div className="mt-6 flex gap-3">
            {/* Route users to Pricing to start a pilot */}
            <Link href="/pricing" className="rounded-2xl bg-slate-900 text-white px-4 py-2 flex items-center">
              Start Pilot <ArrowRight className="ml-2" size={16} />
            </Link>
            {/* Route to Features for a live look */}
            <Link href="/features" className="rounded-2xl border px-4 py-2">
              See Live Demo
            </Link>
          </div>

          <div className="mt-4 text-xs text-slate-500 flex items-center gap-2">
            <ShieldCheck size={14} /> SOC2-ready vendors • GDPR/CCPA alignment • Least-privilege access
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-3xl shadow-xl p-4 border"
        >
          <DashboardPreview />
        </motion.div>
      </section>

      {/* FEATURES PREVIEW (homepage section still okay to keep) */}
      <section id="features" className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-5">
          <Feature icon={<BarChart3 />} title="Donor Intelligence" desc="RFA scoring, segments, next best action — refreshed nightly." />
          <Feature icon={<Users />} title="Personalized Outreach" desc="AI drafts 3-touch sequences, thank-yous, and call scripts that match donor affinities." />
          <Feature icon={<Zap />} title="Grant Co-Writer" desc="Turn program notes into tailored need statements, budgets, and outcomes in minutes." />
        </div>

        {/* Optional: Link down here to full features page */}
        <div className="mt-6">
          <Link href="/features" className="text-sm underline hover:no-underline">
            Explore all features →
          </Link>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-bold mb-6">Simple pricing</h2>
          <Link href="/pricing" className="text-sm underline hover:no-underline">See details →</Link>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <PriceCard
            title="Donor Intel"
            price="$295/mo"
            features={["RFA scoring & segments", "Weekly grant alerts", "Dashboard view", "Email templates"]}
          />
          <PriceCard
            title="Campaign Co-Pilot"
            price="$795/mo"
            features={["Everything in Intel", "3-touch sequences", "Grant paragraphs", "Board-ready reports"]}
            highlighted
          />
          <PriceCard
            title="Full Service"
            price="$2,995/mo"
            features={["Everything in Co-Pilot", "Grant drafting", "Quarterly strategy", "Custom CRM workflows"]}
          />
        </div>
      </section>

      {/* CONTACT / DEMO FORM */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-bold">Book a pilot</h2>
            <p className="text-slate-600 mt-2">
              Tell us about your organization. We’ll set up a 30-minute working session and share a customized demo.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-sm mb-1" htmlFor="email">Work email</label>
                <input
                  id="email"
                  placeholder="you@org.org"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="rounded-2xl border px-3 py-2 w-full"
                />
              </div>

              <div>
                <label className="block text-sm mb-1" htmlFor="org">Organization</label>
                <input
                  id="org"
                  placeholder="Nonprofit name"
                  value={org}
                  onChange={e => setOrg(e.target.value)}
                  className="rounded-2xl border px-3 py-2 w-full"
                />
              </div>

              <div>
                <label className="block text-sm mb-1" htmlFor="message">What’s your #1 fundraising challenge?</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="e.g., Lapsed donors, grant capacity, board reporting…"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="rounded-2xl border px-3 py-2 w-full"
                />
              </div>

              <button onClick={submitLead} className="rounded-2xl bg-slate-900 text-white px-4 py-2 flex items-center">
                <Mail className="mr-2" size={16} /> Request Demo
              </button>

              {submitted && (
                <div className="flex items-center gap-2 text-emerald-600 text-sm">
                  <CheckCircle2 size={16} /> Thanks! We’ll be in touch soon.
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border p-6">
            <h3 className="font-semibold">Investment into Speed & Simplicity for Growing Teams</h3>
            <ul className="mt-3 text-slate-700 space-y-2 list-disc list-inside">
              <li>Get started in days, not months</li>
              <li>No IT headaches</li>
              <li>Turn on your live donor insights</li>
              <li>Add domain & email auth (SPF/DKIM)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Fundraising Co-Pilot</span>
          <div className="flex gap-4">
            {/* Stub these routes when ready */}
            {/* <Link href="/privacy" className="hover:text-slate-900">Privacy</Link>
            <Link href="/security" className="hover:text-slate-900">Security</Link>
            <Link href="/contact" className="hover:text-slate-900">Contact</Link> */}
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Security</a>
            <a href="#" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border bg-white">
      <div className="p-6">
        <div className="h-10 w-10 rounded-xl bg-slate-900 text-white grid place-items-center">{icon}</div>
        <h3 className="mt-4 font-semibold text-lg">{title}</h3>
        <p className="text-slate-600 text-sm mt-1">{desc}</p>
      </div>
    </div>
  );
}

function PriceCard({
  title,
  price,
  features,
  highlighted = false,
}: {
  title: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}) {
  return (
    <div className={`rounded-2xl border ${highlighted ? "ring-2 ring-slate-900" : ""} bg-white`}>
      <div className="p-6">
        <h3 className="font-semibold text-lg">{title}</h3>
        <div className="text-3xl font-bold mt-2">{price}</div>
        <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc list-inside">
          {features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        {/* Send users to the full pricing page to choose */}
        <Link href="/pricing" className="mt-5 w-full inline-block text-center rounded-2xl bg-slate-900 text-white px-4 py-2">
          Choose plan
        </Link>
      </div>
    </div>
  );
}

function DashboardPreview() {
  return (
    <div>
      <div className="flex items-center justify-bet
