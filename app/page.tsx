'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Search, Plus, ChevronRight, FileText, Activity, Salad, BookOpen, BarChart2, Settings, User, Brain, ClipboardList, Play
} from 'lucide-react';

const Card: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">{children}</div>
);
const Pill: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <span className="px-3 py-1 rounded-full text-xs bg-gray-100">{children}</span>
);

const child = {
  id: 'CH-1024',
  name: 'Nikolai Attar',
  age: 8,
  pronouns: 'he/him',
  parentCarer: 'Nadia Attar',
  school: 'Marina Primary',
  goals: [
    { id: 'G1', area: 'Communication', target: 'Mands for help with 2-word phrases', status: 'Active' },
    { id: 'G2', area: 'Behavior', target: 'Reduce head-hitting (baseline 5/day) by 60%', status: 'Active' },
    { id: 'G3', area: 'Nutrition', target: 'Increase vegetable acceptance from 1 to 4 foods', status: 'Active' },
  ],
};

const navItems = [
  { key: 'overview', label: 'Overview', icon: Activity },
  { key: 'consultant', label: 'AI Consultant', icon: Brain },
  { key: 'slt', label: 'SLT Assessment', icon: ClipboardList },
  { key: 'ot', label: 'OT Assessment', icon: ClipboardList },
  { key: 'physio', label: 'Physiotherapy', icon: Activity },
  { key: 'neurofeedback', label: 'Neurofeedback', icon: Brain },
  { key: 'biomarkers', label: 'Biomarkers', icon: BarChart2 },
  { key: 'eyfs', label: 'EYFS Curriculum', icon: BookOpen },
  { key: 'teaching', label: 'Teaching Instructions', icon: BookOpen },
  { key: 'targets', label: 'Target Sheets', icon: ClipboardList },
  { key: 'elearn', label: 'E-Learning Player', icon: Play },
  { key: 'autoslides', label: 'Auto-Slide Generator', icon: FileText },
  { key: 'gamify', label: 'Gamified Learning', icon: BarChart2 },
  { key: 'ceodash', label: 'Revenue & Analytics', icon: BarChart2 },
  { key: 'storefront', label: 'Course Storefront', icon: BookOpen },
  { key: 'reports', label: 'Reports (EHCP-Ready)', icon: FileText },
  { key: 'settings', label: 'Settings', icon: Settings },
] as const;

function Topbar() {
  return (
    <div className="sticky top-0 z-10 bg-white/70 backdrop-blur border-b border-gray-100 px-6 py-3 flex items-center gap-3">
      <div className="text-xl font-semibold">Active Autism AI</div>
      <div className="flex-1" />
      <div className="relative w-80 hidden md:block">
        <input className="w-full border rounded-xl pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Search child, goal, report…" />
        <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
      </div>
      <button className="ml-3 px-3 py-2 rounded-xl bg-indigo-600 text-white text-sm flex items-center gap-2 hover:bg-indigo-700"><Plus className="w-4 h-4"/> New intake</button>
      <div className="ml-2 w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center"><User className="w-5 h-5 text-indigo-600"/></div>
    </div>
  );
}

function Sidebar({ current, setCurrent }: { current: string; setCurrent: (k:string)=>void }) {
  return (
    <div className="w-72 hidden md:flex flex-col border-r border-gray-100 p-4 gap-2">
      {navItems.map(({ key, label, icon: Icon }) => (
        <button key={key} onClick={() => setCurrent(key)} className={`flex items-center gap-3 px-3 py-2 rounded-xl text-left hover:bg-gray-50 ${current===key ? 'bg-gray-50 border border-gray-100' : ''}`}>
          <Icon className="w-4 h-4" />
          <span>{label}</span>
        </button>
      ))}
      <div className="mt-auto text-[10px] text-gray-400 px-3">
        Educational use only. Not a diagnostic tool. Seek guidance from licensed school/clinicians.
      </div>
    </div>
  );
}

function Overview() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Card>
        <div className="flex items-start justify-between">
          <div>
            <div className="text-sm text-gray-500">Child</div>
            <div className="text-lg font-semibold">
              {child.name} <span className="text-gray-400 font-normal">· {child.age} yrs</span>
            </div>
            <div className="text-sm text-gray-500 mt-1">Parent/Carer: {child.parentCarer}</div>
            <div className="mt-3 flex gap-2 flex-wrap">
              <Pill>ID: {child.id}</Pill>
              <Pill>School: {child.school}</Pill>
              <Pill>Pronouns: {child.pronouns}</Pill>
            </div>
          </div>
          <img alt="avatar" src="https://placehold.co/80x80" className="rounded-2xl border" />
        </div>

        <div className="mt-5">
          <div className="font-medium mb-2">Active goals</div>
          <div className="space-y-2">
            {child.goals.map(g => (
              <div key={g.id} className="flex items-start justify-between p-3 rounded-xl border hover:shadow-sm">
                <div>
                  <div className="text-sm font-medium">{g.area}</div>
                  <div className="text-sm text-gray-600">{g.target}</div>
                </div>
                <Pill>{g.status}</Pill>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <Card>
        <div className="font-medium mb-3">Today · Data capture</div>
        <div className="space-y-3">
          {['ABC event', 'Meal log', 'Skill probe'].map((t, i) => (
            <button key={i} className="w-full flex items-center justify-between p-3 rounded-xl border hover:bg-gray-50">
              <div className="flex items-center gap-3"><Play className="w-4 h-4" /><span>{t}</span></div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          ))}
        </div>
        <div className="mt-4 text-xs text-gray-500">Quick actions to log antecedent–behaviour–consequence, meals, and trial results.</div>
      </Card>

      <Card>
        <div className="font-medium mb-3">Risk & safeguarding (UK)</div>
        <div className="text-sm text-gray-700">No active incidents. Last review: 03 Nov 2025 · <span className="text-green-600">Low risk</span></div>
        <div className="mt-3 text-xs text-gray-500">Follow your organisation's safeguarding policy and KCSIE. In an emergency, dial 999.</div>
      </Card>
    </div>
  );
}

function SimpleStub({ title, body }: { title: string; body: string }) {
  return <Card><div className="font-medium mb-2">{title}</div><div className="text-sm text-gray-600">{body}</div></Card>;
}

export default function Page() {
  const [current, setCurrent] = React.useState('overview');
  return (
    <div className="min-h-screen bg-gray-50">
      <Topbar />
      <div className="flex">
        <Sidebar current={current} setCurrent={setCurrent} />
        <main className="flex-1 p-6 space-y-4">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
            {current === 'overview' && <Overview />}
            {current === 'consultant' && <SimpleStub title="AI Consultant" body="Cross-links FBA, SLT, OT, Physio, Nutrition, and Biomarkers. Not diagnostic." />}
            {current === 'slt' && <SimpleStub title="SLT Assessment" body="Expressive/receptive baseline, language sampling, articulation screen, social communication audit." />}
            {current === 'ot' && <SimpleStub title="OT Assessment" body="Fine motor, sensory profile (non-proprietary), handwriting, ADLs, motor planning." />}
            {current === 'physio' && <SimpleStub title="Physiotherapy" body="Gross motor screen, gait observations, balance, tone & endurance logs." />}
            {current === 'neurofeedback' && <SimpleStub title="Neurofeedback" body="Session logs, pre/post regulation ratings, protocol tracking (non-diagnostic)." />}
            {current === 'biomarkers' && <SimpleStub title="Biomarkers" body="Caregiver-entered micronutrients & sleep metrics. Not diagnostic." />}
            {current === 'eyfs' && <SimpleStub title="EYFS Curriculum" body="Targets for joint attention, play skills, regulation & readiness." />}
            {current === 'teaching' && <SimpleStub title="Teaching Instructions" body="Multimodal prompts: visual, verbal, gestural, modelling, physical, AAC." />}
            {current === 'targets' && <SimpleStub title="Target Sheets" body="SMART goals with baseline, mastery criteria, generalisation plan." />}
            {current === 'elearn' && <SimpleStub title="E-Learning Player" body="Lessons, transcript, workbook, progress & comments (stub)." />}
            {current === 'autoslides' && <SimpleStub title="Auto-Slide Generator" body="Paste lesson text → branded slides & exports (stub)." />}
            {current === 'gamify' && <SimpleStub title="Gamified Learning" body="XP, levels, streaks, badges, leaderboards (stub)." />}
            {current === 'ceodash' && <SimpleStub title="Revenue & Analytics" body="Sales, funnels, LTV, conversions, abandoned checkouts (stub)." />}
            {current === 'storefront' && <SimpleStub title="Course Storefront" body="Udemy-style marketplace with filters, ratings & bundles (stub)." />}
            {current === 'reports' && <SimpleStub title="Reports (EHCP-Ready)" body="Parent/carer-friendly report generator with visuals & goals (stub)." />}
            {current === 'settings' && <SimpleStub title="Settings" body="Org profile, roles, data retention, localisation." />}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
async function startCheckout(priceId: string) {
  const res = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ priceId }),
  });
  const data = await res.json();
  if (data.url) window.location.href = data.url;
  else alert(data.error || "Could not start checkout");
}
