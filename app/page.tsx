\
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Search, Plus, ChevronRight, FileText, Activity, Salad, BookOpen, BarChart2, Settings, User, Brain, ClipboardList, Play, Calendar
} from "lucide-react";

const Card: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">{children}</div>
);

const Pill: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <span className="px-3 py-1 rounded-full text-xs bg-gray-100">{children}</span>
);

// Mock child record
const child = {
  id: "CH-1024",
  name: "Nikolai Attar",
  age: 8,
  pronouns: "he/him",
  parentCarer: "Nadia Attar",
  school: "Marina Primary",
  goals: [
    { id: "G1", area: "Communication", target: "Mands for help with 2-word phrases", status: "Active" },
    { id: "G2", area: "Behavior", target: "Reduce head-hitting (baseline 5/day) by 60%", status: "Active" },
    { id: "G3", area: "Nutrition", target: "Increase vegetable acceptance from 1 to 4 foods", status: "Active" },
  ],
};

const navItems = [
  { key: "overview", label: "Overview", icon: Activity },
  { key: "consultant", label: "AI Consultant", icon: Brain },
  { key: "slt", label: "SLT Assessment", icon: ClipboardList },
  { key: "ot", label: "OT Assessment", icon: ClipboardList },
  { key: "physio", label: "Physiotherapy", icon: Activity },
  { key: "neurofeedback", label: "Neurofeedback", icon: Brain },
  { key: "biomarkers", label: "Biomarkers", icon: BarChart2 },
  { key: "eyfs", label: "EYFS Curriculum", icon: BookOpen },
  { key: "teaching", label: "Teaching Instructions", icon: BookOpen },
  { key: "targets", label: "Target Sheets", icon: ClipboardList },
  { key: "elearn", label: "E‑Learning Player", icon: Play },
  { key: "autoslides", label: "Auto‑Slide Generator", icon: FileText },
  { key: "gamify", label: "Gamified Learning", icon: BarChart2 },
  { key: "ceodash", label: "Revenue & Analytics", icon: BarChart2 },
  { key: "storefront", label: "Course Storefront", icon: BookOpen },
  { key: "reports", label: "Reports (EHCP-Ready)", icon: FileText },
  { key: "settings", label: "Settings", icon: Settings },
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

function Sidebar({ current, setCurrent }: {current: string; setCurrent: (k:string)=>void}) {
  return (
    <div className="w-64 hidden md:flex flex-col border-r border-gray-100 p-4 gap-2">
      {navItems.map(({ key, label, icon: Icon }) => (
        <button key={key} onClick={() => setCurrent(key)} className={`flex items-center gap-3 px-3 py-2 rounded-xl text-left hover:bg-gray-50 ${current===key?"bg-gray-50 border border-gray-100":""}`}>
          <Icon className="w-4 h-4"/>
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
            <div className="text-lg font-semibold">{child.name} <span className="text-gray-400 font-normal">· {child.age} yrs</span></div>
            <div className="text-sm text-gray-500 mt-1">Parent/Carer: {child.parentCarer}</div>
            <div className="mt-3 flex gap-2 flex-wrap">
              <Pill>ID: {child.id}</Pill>
              <Pill>School: {child.school}</Pill>
              <Pill>Pronouns: {child.pronouns}</Pill>
            </div>
          </div>
          <img alt="avatar" src="https://placehold.co/80x80" className="rounded-2xl border"/>
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
          {["ABC event", "Meal log", "Skill probe"].map((t,i)=> (
            <button key={i} className="w-full flex items-center justify-between p-3 rounded-xl border hover:bg-gray-50">
              <div className="flex items-center gap-3"><Play className="w-4 h-4"/><span>{t}</span></div>
              <ChevronRight className="w-4 h-4 text-gray-400"/>
            </button>
          ))}
        </div>
        <div className="mt-4 text-xs text-gray-500">Quick actions to log antecedent–behavior–consequence, meals, and trial results.</div>
      </Card>

      <Card>
        <div className="font-medium mb-3">Risk & safeguarding (UK)</div>
        <div className="text-sm text-gray-700">No active incidents. Last review: 03 Nov 2025 · <span className="text-green-600">Low risk</span></div>
        <div className="mt-3 text-xs text-gray-500">Follow your organisation's safeguarding policy and KCSIE. In an emergency, dial 999.</div>
      </Card>
    </div>
  );
}

// Stubs for core features
function Consultant() { return <Card><div className="font-medium mb-2">AI Consultant</div><div className="text-sm text-gray-600">Cross-links FBA, SLT, OT, Physio, Nutrition, and Biomarkers. Provides rationale & confidence. Not diagnostic.</div></Card>; }
function SLT() { return <Card><div className="font-medium mb-2">SLT Assessment Tools</div><div className="text-sm text-gray-600">Expressive/receptive baseline, language sampling, articulation screening, social communication audit.</div></Card>; }
function OTAssess() { return <Card><div className="font-medium mb-2">OT Assessment Tools</div><div className="text-sm text-gray-600">Fine motor, sensory profile (non-proprietary), handwriting, ADLs, motor planning.</div></Card>; }
function Physio() { return <Card><div className="font-medium mb-2">Physiotherapy Tools</div><div className="text-sm text-gray-600">Gross motor screening, gait observations, balance tasks, tone and endurance logs.</div></Card>; }
function Neurofeedback() { return <Card><div className="font-medium mb-2">Neurofeedback</div><div className="text-sm text-gray-600">Session logs, pre/post regulation ratings, protocol tracking (non-diagnostic).</div></Card>; }
function Biomarkers() { return <Card><div className="font-medium mb-2">Biomarkers</div><div className="text-sm text-gray-600">Optional caregiver-entered data: micronutrients, sleep metrics; not diagnostic.</div></Card>; }

// E-learning features
function ELearningPlayer() {
  const lessons = [
    { id: "L1", title: "Welcome & Goals", video: "https://example.com/video1.mp4", transcript: "Welcome to Behaviour Principles 101…", workbook: "workbook-L1.pdf" },
    { id: "L2", title: "Reinforcement Basics", video: "https://example.com/video2.mp4", transcript: "Positive vs negative reinforcement…", workbook: "workbook-L2.pdf" },
    { id: "L3", title: "Prompting & Fading", video: "https://example.com/video3.mp4", transcript: "Least-to-most, time delay…", workbook: "workbook-L3.pdf" },
  ];
  const STORAGE_KEY = "aaai-elearn-progress";
  const [index, setIndex] = React.useState(0);
  const [completed, setCompleted] = React.useState<Record<string, boolean>>({});
  const [comments, setComments] = React.useState<Record<string, {name:string; text:string; ts:string}[]>>({});
  const current = lessons[index];

  React.useEffect(() => {
    try {
      const cached = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      if (cached.index !== undefined) setIndex(cached.index);
      if (cached.completed) setCompleted(cached.completed);
      if (cached.comments) setComments(cached.comments);
    } catch {}
  }, []);

  React.useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ index, completed, comments }));
  }, [index, completed, comments]);

  const markComplete = () => setCompleted(prev => ({ ...prev, [current.id]: true }));
  const addComment = (text: string) => {
    if (!text?.trim()) return;
    const entry = { name: "Learner", text: text.trim(), ts: new Date().toISOString() };
    setComments(prev => ({ ...prev, [current.id]: [ ...(prev[current.id]||[]), entry ] }));
  };

  return (
    <Card>
      <div className="font-medium mb-2">E‑Learning Player — Behaviour Principles 101</div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-1 p-3 border rounded-2xl bg-white max-h-[60vh] overflow-auto">
          <div className="text-sm font-medium mb-2">Lessons</div>
          <ul className="space-y-1">
            {lessons.map((l,i)=> (
              <li key={l.id}>
                <button onClick={()=>setIndex(i)} className={`w-full text-left px-3 py-2 rounded-xl border ${i===index?"bg-indigo-50 border-indigo-200":"hover:bg-gray-50"}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">{i+1}. {l.title}</span>
                    {completed[l.id] && <span className="text-xs text-emerald-600">✓</span>}
                  </div>
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-3 text-xs text-gray-500">Progress: {Object.values(completed).filter(Boolean).length}/{lessons.length} completed</div>
        </div>

        <div className="lg:col-span-3 space-y-3">
          <div className="aspect-video w-full bg-black/5 rounded-2xl border flex items-center justify-center">
            <div className="text-sm text-gray-500">Embedded video placeholder<br/>({current.video})</div>
          </div>
          <div className="p-3 border rounded-2xl">
            <div className="text-sm font-medium">Transcript</div>
            <div className="text-sm text-gray-700 mt-1 whitespace-pre-wrap">{current.transcript}</div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={()=>setIndex(Math.max(0,index-1))} className="px-3 py-2 rounded-xl border text-sm">Back</button>
            <button onClick={()=>setIndex(Math.min(lessons.length-1,index+1))} className="px-3 py-2 rounded-xl border text-sm">Next</button>
            <button onClick={markComplete} className="px-3 py-2 rounded-xl bg-emerald-600 text-white text-sm">Mark as complete</button>
            <button className="px-3 py-2 rounded-xl bg-indigo-600 text-white text-sm">Download Workbook</button>
          </div>

          <div className="p-3 border rounded-2xl">
            <div className="text-sm font-medium mb-2">Discussion</div>
            <CommentBox onSubmit={addComment} />
            <div className="mt-2 space-y-2 max-h-48 overflow-auto">
              {(comments[current.id]||[]).map((c,idx)=> (
                <div key={idx} className="p-2 border rounded-xl">
                  <div className="text-xs text-gray-500">{c.name} · {new Date(c.ts).toLocaleString()}</div>
                  <div className="text-sm">{c.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

function CommentBox({ onSubmit }: { onSubmit: (t:string)=>void }) {
  const [text, setText] = React.useState("");
  return (
    <div className="flex gap-2">
      <input value={text} onChange={e=>setText(e.target.value)} placeholder="Add a comment…" className="flex-1 border rounded-xl px-3 py-2 text-sm"/>
      <button onClick={()=>{ onSubmit(text); setText(""); }} className="px-3 py-2 rounded-xl bg-gray-900 text-white text-sm">Post</button>
    </div>
  );
}

function AutoSlides() {
  return (
    <Card>
      <div className="font-medium mb-2">Auto‑Slide Generator</div>
      <div className="text-sm text-gray-600">Paste lesson text to auto‑create branded slides with icons, diagrams, and summaries. (Export stub)</div>
      <textarea placeholder="Paste lesson text…" className="w-full border rounded-xl px-3 py-2 mt-2 min-h-[120px]"></textarea>
      <button className="mt-3 px-3 py-2 rounded-xl bg-indigo-600 text-white text-sm">Generate Slides</button>
    </Card>
  );
}

function Gamify() {
  const stats = [
    { label: "XP", value: 1280 },
    { label: "Level", value: 7 },
    { label: "Streak", value: "12 days" },
  ];
  return (
    <Card>
      <div className="font-medium mb-2">Gamified Learning</div>
      <div className="text-sm text-gray-600">XP points, levels, streaks, badges, leaderboards.</div>
      <div className="mt-3 grid grid-cols-3 gap-3">
        {stats.map((s,i)=> (
          <div key={i} className="p-3 border rounded-2xl text-center">
            <div className="text-xs text-gray-500">{s.label}</div>
            <div className="text-xl font-semibold">{s.value}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function CEODash() {
  const cards = [
    { name: "Total Sales", value: "£12,480" },
    { name: "Revenue / Course", value: "£3,120" },
    { name: "Conversion Rate", value: "4.8%" },
    { name: "Abandoned Checkouts", value: "37" },
  ];
  return (
    <Card>
      <div className="font-medium mb-2">Revenue & Analytics</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {cards.map((c,i)=> (
          <div key={i} className="p-3 border rounded-2xl">
            <div className="text-xs text-gray-500">{c.name}</div>
            <div className="text-lg font-semibold">{c.value}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function Storefront() {
  const cats = ["Behaviour", "Autism", "EYFS", "PBS", "Physio", "SLT", "OT"];
  const courses = [
    { title: "Behaviour Principles 101", rating: 4.8, reviews: 214, price: 39 },
    { title: "Autism Essentials", rating: 4.7, reviews: 178, price: 29 },
    { title: "FBA Deep Dive", rating: 4.9, reviews: 121, price: 49 },
  ];
  return (
    <Card>
      <div className="font-medium mb-2">Course Storefront</div>
      <div className="flex gap-2 overflow-auto pb-2">{cats.map((c,i)=> (<Pill key={i}>{c}</Pill>))}</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
        {courses.map((c,i)=> (
          <div key={i} className="p-4 border rounded-2xl bg-white">
            <div className="font-medium text-indigo-700">{c.title}</div>
            <div className="text-sm text-gray-600">Rating {c.rating} ★ ({c.reviews})</div>
            <div className="mt-2 font-semibold">£{c.price}</div>
            <div className="mt-2 flex gap-2">
              <button className="px-3 py-2 rounded-xl bg-indigo-600 text-white text-sm">View</button>
              <button className="px-3 py-2 rounded-xl bg-emerald-600 text-white text-sm">Buy now</button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default function Page() {
  const [current, setCurrent] = React.useState("overview");
  return (
    <div className="min-h-screen bg-gray-50">
      <Topbar/>
      <div className="flex">
        <Sidebar current={current} setCurrent={setCurrent}/>
        <main className="flex-1 p-6 space-y-4">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
            {current === "overview" && <Overview/>}
            {current === "consultant" && <Consultant/>}
            {current === "slt" && <SLT/>}
            {current === "ot" && <OTAssess/>}
            {current === "physio" && <Physio/>}
            {current === "neurofeedback" && <Neurofeedback/>}
            {current === "biomarkers" && <Biomarkers/>}
            {current === "eyfs" && <Card><div className="font-medium mb-2">EYFS Curriculum</div><div className="text-sm text-gray-600">Early targets for joint attention, play skills, regulation, and readiness.</div></Card>}
            {current === "teaching" && <Card><div className="font-medium mb-2">Teaching Instructions</div><div className="text-sm text-gray-600">Multimodal prompts: visual, verbal, gestural, modeling, physical, AAC.</div></Card>}
            {current === "targets" && <Card><div className="font-medium mb-2">Target Sheets</div><div className="text-sm text-gray-600">SMART goals with baseline, mastery criteria, generalisation plan.</div></Card>}
            {current === "elearn" && <ELearningPlayer/>}
            {current === "autoslides" && <AutoSlides/>}
            {current === "gamify" && <Gamify/>}
            {current === "ceodash" && <CEODash/>}
            {current === "storefront" && <Storefront/>}
            {current === "reports" && <Card><div className="font-medium mb-2">Reports</div><div className="text-sm text-gray-600">EHCP-ready summaries and appendices (stub).</div></Card>}
            {current === "settings" && <Card><div className="font-medium mb-2">Settings</div><div className="text-sm text-gray-600">Org profile, roles, data retention, localisation.</div></Card>}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
