
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, BarChart3, Users, ShieldCheck, Zap, Mail, CheckCircle2 } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
const netData=[{month:"Mar",actual:289,scenario:700},{month:"Apr",actual:322,scenario:740},{month:"May",actual:-986,scenario:120},{month:"Jun",actual:648,scenario:980},{month:"Jul",actual:-318,scenario:410},];
const segmentData=[{name:"Major",value:12},{name:"Mid",value:58},{name:"General",value:410},{name:"Lapsed",value:96},];
export default function Page(){
 const [email,setEmail]=useState(""); const [org,setOrg]=useState(""); const [message,setMessage]=useState(""); const [submitted,setSubmitted]=useState(false);
 const submitLead=async()=>{ setSubmitted(true); };
 return (<div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
  <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b"><div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
   <div className="flex items-center gap-2"><div className="h-9 w-9 rounded-2xl bg-slate-900 text-white grid place-items-center"><Sparkles size={18}/></div><span className="font-semibold">DonorAxis</span></div>
   <nav className="hidden md:flex items-center gap-6 text-sm"><a href="#features" className="hover:text-slate-600">Features</a><a href="#platform" className="hover:text-slate-600">Platform</a><a href="#pricing" className="hover:text-slate-600">Pricing</a><a href="#contact" className="hover:text-slate-600">Contact</a></nav>
   <button className="rounded-2xl bg-slate-900 text-white px-4 py-2">Get a Demo</button></div></header>
  <section className="max-w-6xl mx-auto px-4 pt-14 pb-10 grid md:grid-cols-2 gap-10 items-center">
   <div>
    <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.5}} className="text-4xl md:text-5xl font-extrabold leading-tight">The future of fundraising belongs to those who combine data with heart</motion.h1>
    <p className="mt-4 text-slate-600 max-w-prose">Score donors, personalize outreach, draft grants, and forecast revenue — without hiring a data team. Plug into your CRM and start in days.</p>
    <div className="mt-6 flex gap-3"><button className="rounded-2xl bg-slate-900 text-white px-4 py-2 flex items-center">Start Pilot <ArrowRight className="ml-2" size={16}/></button><button className="rounded-2xl border px-4 py-2">See Live Demo</button></div>
    <div className="mt-4 text-xs text-slate-500 flex items-center gap-2"><ShieldCheck size={14}/> SOC2-ready vendors • GDPR/CCPA alignment • Least‑privilege access</div>
   </div>
   <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6,delay:.1}} className="bg-white rounded-3xl shadow-xl p-4 border"><DashboardPreview/></motion.div>
  </section>
  <section id="features" className="max-w-6xl mx-auto px-4 py-8"><div className="grid md:grid-cols-3 gap-5">
   <Feature icon={<BarChart3/>} title="Donor Intelligence" desc="RFA scoring, segments, next best action — refreshed nightly."/>
   <Feature icon={<Users/>} title="Personalized Outreach" desc="AI drafts 3‑touch sequences, thank‑yous, and call scripts that match donor affinities."/>
   <Feature icon={<Zap/>} title="Grant Co‑Writer" desc="Turn program notes into tailored need statements, budgets, and outcomes in minutes."/>
  </div></section>
  <section id="pricing" className="max-w-6xl mx-auto px-4 py-10"><h2 className="text-2xl font-bold mb-6">Simple pricing</h2>
   <div className="grid md:grid-cols-3 gap-5">
    <PriceCard title="Donor Intel" price="$295/mo" features={["RFA scoring & segments","Weekly grant alerts","Dashboard view","Email templates"]}/>
    <PriceCard title="Campaign Co‑Pilot" price="795/mo" features={["Everything in Intel","3‑touch sequences","Grant paragraphs","Board‑ready reports"]} highlighted/>
    <PriceCard title="Full Service" price="$2,995/mo" features={["Everything in Co‑Pilot","Grant drafting","Quarterly strategy","Custom CRM workflows"]}/>
   </div></section>
  <section id="contact" className="max-w-6xl mx-auto px-4 py-12"><div className="grid md:grid-cols-2 gap-8 items-start">
   <div><h2 className="text-2xl font-bold">Book a pilot</h2><p className="text-slate-600 mt-2">Tell us about your organization. We’ll set up a 30‑minute working session and share a customized demo.</p>
    <div className="mt-6 space-y-4">
     <div><label className="block text-sm mb-1" htmlFor="email">Work email</label><input id="email" placeholder="you@org.org" value={email} onChange={e=>setEmail(e.target.value)} className="rounded-2xl border px-3 py-2 w-full"/></div>
     <div><label className="block text-sm mb-1" htmlFor="org">Organization</label><input id="org" placeholder="Nonprofit name" value={org} onChange={e=>setOrg(e.target.value)} className="rounded-2xl border px-3 py-2 w-full"/></div>
     <div><label className="block text-sm mb-1" htmlFor="message">What’s your #1 fundraising challenge?</label><textarea id="message" rows={4} placeholder="e.g., Lapsed donors, grant capacity, board reporting…" value={message} onChange={e=>setMessage(e.target.value)} className="rounded-2xl border px-3 py-2 w-full"/></div>
     <button onClick={submitLead} className="rounded-2xl bg-slate-900 text-white px-4 py-2 flex items-center"><Mail className="mr-2" size={16}/> Request Demo</button>
     {submitted && (<div className="flex items-center gap-2 text-emerald-600 text-sm"><CheckCircle2 size={16}/> Thanks! We’ll be in touch soon.</div>)}
    </div></div>
   <div className="bg-white rounded-3xl shadow-lg border p-6"><h3 className="font-semibold">Implementation in days, not months</h3>
    <ul className="mt-3 text-slate-700 space-y-2 list-disc list-inside"><li>Clone Airtable base + Interface</li><li>Connect Zapier flows (scoring, content)</li><li>Point dashboard at your base</li><li>Add domain & email auth (SPF/DKIM)</li></ul></div>
  </div></section>
  <footer className="border-t"><div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-3">
   <span>© {new Date().getFullYear()} Fundraising Co‑Pilot</span>
   <div className="flex gap-4"><a href="#" className="hover:text-slate-900">Privacy</a><a href="#" className="hover:text-slate-900">Security</a><a href="#" className="hover:text-slate-900">Contact</a></div>
  </div></footer>
 </div>);
}
function Feature({ icon, title, desc }:{icon:React.ReactNode; title:string; desc:string;}){
 return (<div className="rounded-2xl border bg-white"><div className="p-6">
  <div className="h-10 w-10 rounded-xl bg-slate-900 text-white grid place-items-center">{icon}</div>
  <h3 className="mt-4 font-semibold text-lg">{title}</h3>
  <p className="text-slate-600 text-sm mt-1">{desc}</p>
 </div></div>);
}
function PriceCard({ title, price, features, highlighted=false }:{title:string; price:string; features:string[]; highlighted?:boolean;}){
 return (<div className={`rounded-2xl border ${highlighted?"ring-2 ring-slate-900":""} bg-white`}><div className="p-6">
  <h3 className="font-semibold text-lg">{title}</h3><div className="text-3xl font-bold mt-2">{price}</div>
  <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc list-inside">{features.map(f=><li key={f}>{f}</li>)}</ul>
  <button className="mt-5 w-full rounded-2xl bg-slate-900 text-white px-4 py-2">Choose plan</button>
 </div></div>);
}
function DashboardPreview(){
 return (<div>
  <div className="flex items-center justify-between"><h3 className="font-semibold">Revenue Forecast</h3><span className="text-xs text-slate-500">Demo data</span></div>
  <div className="h-48 mt-2"><ResponsiveContainer width="100%" height="100%"><AreaChart data={netData} margin={{top:10,right:20,left:0,bottom:0}}>
   <defs><linearGradient id="a" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#0f172a" stopOpacity={0.3}/><stop offset="95%" stopColor="#0f172a" stopOpacity={0}/></linearGradient>
   <linearGradient id="b" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#64748b" stopOpacity={0.3}/><stop offset="95%" stopColor="#64748b" stopOpacity={0}/></linearGradient></defs>
   <CartesianGrid strokeDasharray="3 3"/><XAxis dataKey="month"/><YAxis/><Tooltip/>
   <Area type="monotone" dataKey="actual" stroke="#0f172a" fill="url(#a)"/><Area type="monotone" dataKey="scenario" stroke="#64748b" fill="url(#b)"/></AreaChart></ResponsiveContainer></div>
  <div className="grid md:grid-cols-3 gap-3 mt-4">
   <div className="bg-slate-50 rounded-xl p-3 border"><div className="text-xs text-slate-500">This month</div><div className="text-2xl font-semibold">$82,400</div><div className="text-emerald-600 text-xs">+8% vs last month</div></div>
   <div className="bg-slate-50 rounded-xl p-3 border"><div className="text-xs text-slate-500">Projected 90‑day</div><div className="text-2xl font-semibold">$256,900</div><div className="text-emerald-600 text-xs">+12% with scenario</div></div>
   <div className="bg-slate-50 rounded-xl p-3 border"><div className="text-xs text-slate-500">Open actions</div><div className="text-2xl font-semibold">37</div><div className="text-slate-500 text-xs">25 due this week</div></div>
  </div>
  <div className="mt-6"><h4 className="font-medium">Segments</h4><div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">{segmentData.map(s=>(
    <div key={s.name} className="rounded-xl border p-3 bg-white"><div className="text-xs text-slate-500">{s.name}</div><div className="text-xl font-semibold">{s.value}</div></div>
  ))}</div></div>
 </div>);
}
