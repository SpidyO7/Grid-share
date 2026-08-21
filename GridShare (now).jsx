// src/App.jsx
import { useState as useState10, useEffect as useEffect3, useMemo as useMemo3, useCallback } from "react";

// src/components/Landing.jsx
import { Zap, Sparkles, ArrowRight, Gauge, ShoppingCart, Wallet, Leaf } from "lucide-react";

// src/components/FlowDiagram.jsx
import React from "react";
import { Sun, Home, Battery, Store } from "lucide-react";
function FlowDiagram({ compact }) {
  const steps = [
    { icon: Sun, label: "Solar & biogas" },
    { icon: Home, label: "Households" },
    { icon: Battery, label: "Surplus pool" },
    { icon: Store, label: "P2P market" },
    { icon: Home, label: "Neighboring home" }
  ];
  return <div className={`flex ${compact ? "flex-col" : "flex-col sm:flex-row"} items-center gap-1`}>
      {steps.map((s, i) => <React.Fragment key={s.label}>
          <div className="flex flex-col items-center gap-1.5 shrink-0 group">
            <div
    className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center relative overflow-hidden transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5"
    style={{ animation: `nodeGlow 3s ease-in-out ${i * 0.4}s infinite` }}
  >
              <s.icon className="w-5 h-5 text-emerald-600" />
            </div>
            <span className="text-[10px] font-medium text-stone-500 text-center leading-tight w-16">{s.label}</span>
          </div>
          {i < steps.length - 1 && <div className={`flex items-center justify-center ${compact ? "h-6" : "h-6 sm:h-auto sm:w-6"}`}>
              <div className={`relative ${compact ? "w-px h-full" : "w-full h-px sm:w-6 sm:h-px"} bg-emerald-200 overflow-visible`}>
                <span
    className={`absolute rounded-full bg-emerald-500 ${compact ? "w-1.5 h-1.5 left-1/2 -translate-x-1/2" : "w-1.5 h-1.5 top-1/2 -translate-y-1/2"}`}
    style={{
      animation: `${compact ? "flowV" : "flowH"} 1.6s linear ${i * 0.3}s infinite`
    }}
  />
              </div>
            </div>}
        </React.Fragment>)}
    </div>;
}

// src/components/Landing.jsx
function Landing({ onDemo, onMarket }) {
  return <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-white text-stone-900 relative overflow-hidden">
      <div className="absolute top-20 -left-24 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl anim-float-slow pointer-events-none" />
      <div className="absolute top-64 -right-16 w-80 h-80 bg-lime-200/30 rounded-full blur-3xl anim-float-slow2 pointer-events-none" />

      <header className="relative max-w-6xl mx-auto flex items-center justify-between px-6 py-6 anim-fade-up">
        <div className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center shadow-md shadow-emerald-600/30 transition-transform duration-300 group-hover:rotate-[18deg] group-hover:scale-110">
            <Zap className="w-5 h-5 text-white" fill="white" />
          </div>
          <span className="text-lg font-bold tracking-tight font-display">GridShare</span>
        </div>
        <button
    onClick={onDemo}
    className="text-sm font-semibold bg-stone-900 text-white px-4 py-2 rounded-full hover:bg-stone-800 transition-all btn-press hover:shadow-lg"
  >
          Explore Demo
        </button>
      </header>

      <section className="relative max-w-6xl mx-auto px-6 pt-10 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="anim-fade-up inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" /> Community microgrid, simulated
          </span>
          <h1
    className="anim-fade-up mt-5 text-4xl sm:text-5xl font-bold leading-[1.05] tracking-tight font-display"
    style={{ animationDelay: "60ms" }}
  >
            Share Energy.<br />
            <span className="text-emerald-600">Build a Greener</span><br />
            Community.
          </h1>
          <p className="anim-fade-up mt-5 text-stone-600 text-base sm:text-lg leading-relaxed max-w-lg" style={{ animationDelay: "120ms" }}>
            A peer-to-peer renewable energy marketplace that helps communities visualize,
            share and monetize locally generated clean energy.
          </p>
          <div className="anim-fade-up mt-8 flex flex-wrap gap-3" style={{ animationDelay: "180ms" }}>
            <button
    onClick={onDemo}
    className="inline-flex items-center gap-2 bg-emerald-600 text-white font-semibold px-5 py-3 rounded-full hover:bg-emerald-700 transition-all btn-press shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 group"
  >
              Explore Demo <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
            <button
    onClick={onMarket}
    className="inline-flex items-center gap-2 bg-white border border-stone-200 text-stone-800 font-semibold px-5 py-3 rounded-full hover:border-emerald-300 hover:shadow-md transition-all btn-press"
  >
              View Energy Market
            </button>
          </div>
          <p className="anim-fade-up mt-6 text-xs text-stone-400 max-w-md" style={{ animationDelay: "220ms" }}>
            This is a simulated prototype. No real electricity is transferred through this website —
            all generation, consumption and trades shown are demo data.
          </p>
        </div>

        <div className="relative anim-scale-spring" style={{ animationDelay: "160ms" }}>
          <div className="absolute -inset-6 bg-gradient-to-tr from-emerald-200/40 to-lime-200/30 rounded-[2.5rem] blur-2xl anim-float-slow" />
          <div className="relative bg-white border border-stone-100 rounded-[2rem] shadow-2xl shadow-emerald-900/10 p-6 card-interactive">
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-4">Live community flow</p>
            <FlowDiagram compact />
          </div>
        </div>
      </section>

      <section className="relative max-w-6xl mx-auto px-6 pb-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
    { icon: Gauge, title: "Monitor", body: "Track generation and consumption." },
    { icon: ShoppingCart, title: "Trade", body: "Share surplus energy with neighbors." },
    { icon: Wallet, title: "Save", body: "Reduce energy costs and grid dependency." },
    { icon: Leaf, title: "Impact", body: "Measure your environmental contribution." }
  ].map((f, i) => <div
    key={f.title}
    className="group anim-fade-up bg-white border border-stone-100 rounded-2xl p-5 card-interactive"
    style={{ animationDelay: `${260 + i * 70}ms` }}
  >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
              <f.icon className="w-5 h-5 text-emerald-600" />
            </div>
            <p className="font-semibold text-stone-800">{f.title}</p>
            <p className="text-sm text-stone-500 mt-1">{f.body}</p>
          </div>)}
      </section>
    </div>;
}

// src/components/Login.jsx
import { Zap as Zap2, User, ShieldCheck, ChevronRight } from "lucide-react";
function Login({ onLogin }) {
  return <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-stone-900 flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/30 mb-4">
            <Zap2 className="w-7 h-7 text-white" fill="white" />
          </div>
          <h1 className="text-2xl font-bold text-white font-display">GridShare</h1>
          <p className="text-emerald-200/70 text-sm mt-1">Guwahati Community Microgrid</p>
        </div>
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 space-y-3">
          <button
    onClick={() => onLogin("member")}
    className="w-full flex items-center justify-between bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-semibold rounded-2xl px-5 py-4 transition-colors"
  >
            <span className="flex items-center gap-3">
              <User className="w-5 h-5" /> Continue as Community Member
            </span>
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
    onClick={() => onLogin("admin")}
    className="w-full flex items-center justify-between bg-white/10 hover:bg-white/15 text-white font-semibold rounded-2xl px-5 py-4 transition-colors border border-white/10"
  >
            <span className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5" /> Continue as Admin
            </span>
            <ChevronRight className="w-4 h-4" />
          </button>
          <p className="text-center text-[11px] text-emerald-200/50 pt-2">
            Prototype demo — no account or password required.
          </p>
        </div>
      </div>
    </div>;
}

// src/components/Sidebar.jsx
import { useState } from "react";
import { Zap as Zap3, X } from "lucide-react";

// src/data/nav.js
import { LayoutDashboard, Store as Store2, Sun as Sun2, Receipt, Users, Leaf as Leaf2, User as User2 } from "lucide-react";
var NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "market", label: "Energy Market", icon: Store2 },
  { id: "myenergy", label: "My Energy", icon: Sun2 },
  { id: "transactions", label: "Transactions", icon: Receipt },
  { id: "community", label: "Community", icon: Users },
  { id: "impact", label: "Impact", icon: Leaf2 },
  { id: "profile", label: "Profile", icon: User2 }
];

// src/components/Sidebar.jsx
function Sidebar({ active, setActive, mobileOpen, setMobileOpen }) {
  const [hovered, setHovered] = useState(null);
  const activeIndex = NAV_ITEMS.findIndex((i) => i.id === active);
  return <>
      {mobileOpen && <div className="fixed inset-0 bg-black/40 z-40 lg:hidden anim-fade-in" onClick={() => setMobileOpen(false)} />}
      <aside
    className={`fixed lg:sticky top-0 left-0 h-screen w-64 bg-white border-r border-stone-100 flex flex-col z-50 transition-transform duration-300 ease-out lg:translate-x-0 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
  >
        <div className="flex items-center justify-between px-5 py-5">
          <div className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 flex items-center justify-center transition-transform duration-300 group-hover:rotate-[18deg] group-hover:scale-110">
              <Zap3 className="w-4 h-4 text-white" fill="white" />
            </div>
            <span className="font-bold text-stone-800 font-display">GridShare</span>
          </div>
          <button className="lg:hidden text-stone-400 btn-press" onClick={() => setMobileOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="relative flex-1 px-3 py-2 space-y-1 overflow-y-auto">
          {
    /* sliding active pill */
  }
          {activeIndex >= 0 && <div
    className="absolute left-3 right-3 h-10 rounded-xl bg-emerald-50 border border-emerald-100 transition-all duration-300 ease-out pointer-events-none"
    style={{ top: `${8 + activeIndex * 44}px` }}
  />}
          {NAV_ITEMS.map((item) => {
    const isActive = active === item.id;
    const isHovered = hovered === item.id;
    return <button
      key={item.id}
      onMouseEnter={() => setHovered(item.id)}
      onMouseLeave={() => setHovered(null)}
      onClick={() => {
        setActive(item.id);
        setMobileOpen(false);
      }}
      className={`relative z-10 w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200 ${isActive ? "text-emerald-700" : "text-stone-500 hover:text-stone-800"}`}
    >
                <item.icon
      className={`w-[18px] h-[18px] transition-transform duration-200 ${isActive ? "text-emerald-600" : "text-stone-400"} ${isHovered && !isActive ? "-translate-y-0.5 scale-110" : ""}`}
    />
                {item.label}
                {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-500 anim-glow-pulse" />}
              </button>;
  })}
        </nav>

        <div className="relative p-4 mx-3 mb-4 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-700 text-white overflow-hidden card-interactive">
          <div className="absolute -right-6 -top-6 w-20 h-20 bg-white/10 rounded-full anim-float-slow" />
          <p className="text-xs font-semibold text-emerald-100 relative">Grid dependency</p>
          <p className="text-2xl font-bold mt-1 font-mono relative">31%</p>
          <p className="text-[11px] text-emerald-100/80 mt-1 relative">Lower than last week</p>
        </div>
      </aside>
    </>;
}

// src/components/BottomNav.jsx
function BottomNav({ active, setActive }) {
  const items = NAV_ITEMS.slice(0, 5);
  return <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-stone-100 flex lg:hidden z-40 px-1 pb-[max(env(safe-area-inset-bottom),4px)]">
      {items.map((item) => {
    const isActive = active === item.id;
    return <button
      key={item.id}
      onClick={() => setActive(item.id)}
      className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2.5"
    >
            <item.icon className={`w-5 h-5 ${isActive ? "text-emerald-600" : "text-stone-400"}`} />
            <span className={`text-[10px] font-medium ${isActive ? "text-emerald-600" : "text-stone-400"}`}>
              {item.label.split(" ")[0]}
            </span>
          </button>;
  })}
    </nav>;
}

// src/components/TopBar.jsx
import { useEffect, useRef, useState as useState2 } from "react";
import { Menu, MapPin, ChevronDown, Bell } from "lucide-react";

// src/utils/format.js
var fmt = (n, d = 1) => Number(n).toFixed(d);
var inr = (n) => `\u20B9${Number(n).toFixed(2)}`;
var timeAgo = (ts) => {
  const mins = Math.floor((Date.now() - ts) / 6e4);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
};

// src/components/TopBar.jsx
function TopBar({ onMenu, notifications, onOpenNotifications, notifOpen, onMarkRead, user, liveTime }) {
  const unread = notifications.filter((n) => !n.read).length;
  const prevUnread = useRef(unread);
  const [shake, setShake] = useState2(false);
  useEffect(() => {
    if (unread > prevUnread.current) {
      setShake(true);
      const t = setTimeout(() => setShake(false), 600);
      return () => clearTimeout(t);
    }
    prevUnread.current = unread;
  }, [unread]);
  return <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-stone-100">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3.5">
        <div className="flex items-center gap-3 min-w-0">
          <button className="lg:hidden text-stone-500 btn-press" onClick={onMenu}>
            <Menu className="w-5 h-5" />
          </button>
          <div className="hidden sm:flex items-center gap-2 bg-stone-50 border border-stone-100 rounded-full px-3 py-1.5 text-sm text-stone-600 font-medium transition-colors hover:bg-stone-100 cursor-default">
            <MapPin className="w-3.5 h-3.5 text-emerald-500" />
            GridShare Guwahati
            <ChevronDown className="w-3.5 h-3.5 text-stone-400" />
          </div>
          <div className="hidden md:flex items-center gap-1.5 text-xs text-stone-400 font-medium">
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 ring-ping" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            Live · {liveTime}
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative">
            <button
    onClick={onOpenNotifications}
    className={`relative w-9 h-9 rounded-full bg-stone-50 hover:bg-stone-100 flex items-center justify-center transition-colors btn-press ${shake ? "animate-[wiggle_0.5s_ease-in-out]" : ""}`}
    style={shake ? { animation: "wiggle 0.5s ease-in-out" } : void 0}
  >
              <Bell className="w-[18px] h-[18px] text-stone-600" />
              {unread > 0 && <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-rose-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center anim-scale-spring">
                  {unread}
                </span>}
            </button>
            {notifOpen && <div className="absolute right-0 mt-2 w-80 max-w-[85vw] bg-white border border-stone-100 rounded-2xl shadow-xl shadow-stone-900/10 overflow-hidden anim-scale-spring origin-top-right">
                <div className="px-4 py-3 border-b border-stone-100 font-semibold text-sm text-stone-700">
                  Notifications
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {notifications.length === 0 && <p className="text-sm text-stone-400 px-4 py-6 text-center">You're all caught up.</p>}
                  {notifications.map((n, i) => <button
    key={n.id}
    onClick={() => onMarkRead(n.id)}
    style={{ animationDelay: `${i * 40}ms` }}
    className={`anim-fade-up w-full text-left px-4 py-3 border-b border-stone-50 last:border-0 flex gap-2.5 hover:bg-stone-50 transition-colors ${n.read ? "opacity-50" : ""}`}
  >
                      <span className="text-lg leading-none mt-0.5">{n.icon}</span>
                      <span className="min-w-0">
                        <p className="text-sm text-stone-700 leading-snug">{n.text}</p>
                        <p className="text-[11px] text-stone-400 mt-0.5">{timeAgo(n.time)}</p>
                      </span>
                      {!n.read && <span className="ml-auto mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 anim-glow-pulse" />}
                    </button>)}
                </div>
              </div>}
          </div>
          <div className="flex items-center gap-2 pl-2 sm:border-l border-stone-100 group cursor-default">
            <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold transition-transform duration-200 group-hover:scale-110">
              {user.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
            </div>
            <div className="hidden sm:block leading-tight">
              <p className="text-xs font-semibold text-stone-700">{user.name.split(" ")[0]}</p>
              <p className="text-[11px] text-stone-400">House #{user.houseNumber}</p>
            </div>
          </div>
        </div>
      </div>
    </div>;
}

// src/components/SellModal.jsx
import { useState as useState3 } from "react";
import { Sun as Sun3, Minus, Plus, CheckCircle2 } from "lucide-react";

// src/components/Modal.jsx
import { X as X2 } from "lucide-react";
function Modal({ title, onClose, children, icon: Icon }) {
  return <div className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-stone-900/50 backdrop-blur-sm animate-fadeIn" onClick={onClose} />
      <div className="relative bg-white rounded-t-3xl sm:rounded-3xl w-full sm:max-w-md max-h-[92vh] overflow-y-auto anim-scale-spring shadow-2xl">
        <div className="sticky top-0 bg-white flex items-center justify-between px-5 sm:px-6 py-4 border-b border-stone-100 rounded-t-3xl">
          <div className="flex items-center gap-2">
            {Icon && <Icon className="w-[18px] h-[18px] text-emerald-600" />}
            <p className="font-bold text-stone-800">{title}</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-stone-50 hover:bg-stone-100 flex items-center justify-center btn-press transition-colors">
            <X2 className="w-4 h-4 text-stone-500" />
          </button>
        </div>
        <div className="px-5 sm:px-6 py-5">{children}</div>
      </div>
    </div>;
}

// src/components/Confetti.jsx
import React2, { useMemo } from "react";
var COLORS = ["#059669", "#a3e635", "#fbbf24", "#34d399", "#65a30d"];
function Confetti({ count = 16 }) {
  const pieces = useMemo(
    () => Array.from({ length: count }, (_, i) => ({
      id: i,
      left: 8 + Math.random() * 84,
      delay: Math.random() * 0.15,
      duration: 0.7 + Math.random() * 0.5,
      color: COLORS[i % COLORS.length],
      size: 5 + Math.random() * 5,
      rotate: Math.random() * 360
    })),
    [count]
  );
  return <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((p) => <span
    key={p.id}
    className="absolute top-1/3 rounded-sm"
    style={{
      left: `${p.left}%`,
      width: p.size,
      height: p.size * 1.6,
      backgroundColor: p.color,
      transform: `rotate(${p.rotate}deg)`,
      animation: `confettiFall ${p.duration}s ease-in ${p.delay}s both`
    }}
  />)}
    </div>;
}

// src/components/SellModal.jsx
function SellModal({ user, onClose, onSubmit }) {
  const [amount, setAmount] = useState3(Math.min(2.5, user.mySurplus || 1));
  const [price, setPrice] = useState3(6.5);
  const [duration, setDuration] = useState3("3h");
  const [confirming, setConfirming] = useState3(false);
  const durations = [["1h", "1 hour"], ["3h", "3 hours"], ["6h", "6 hours"], ["today", "Today"]];
  const potential = amount * price;
  const maxAmt = Math.max(user.mySurplus, 0.1);
  function handleList() {
    setConfirming(true);
    setTimeout(() => onSubmit({ amount, price, duration }), 850);
  }
  return <Modal title="Sell surplus energy" icon={Sun3} onClose={onClose}>
      {confirming ? <div className="relative flex flex-col items-center justify-center py-10 text-center">
          <Confetti />
          <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center anim-scale-spring">
            <CheckCircle2 className="w-8 h-8 text-emerald-600" />
          </div>
          <p className="font-bold text-stone-800 mt-4 anim-fade-up" style={{ animationDelay: "120ms" }}>
            Listed on the market
          </p>
          <p className="text-sm text-stone-400 mt-1 anim-fade-up" style={{ animationDelay: "180ms" }}>
            {fmt(amount)} kWh at {inr(price)}/kWh
          </p>
        </div> : <div className="space-y-5">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-semibold text-stone-500">Energy to sell</label>
              <span className="text-xs text-stone-400">Available: {fmt(user.mySurplus)} kWh</span>
            </div>
            <div className="flex items-center gap-2 bg-stone-50 rounded-xl px-3 py-2.5">
              <button onClick={() => setAmount((a) => Math.max(0.5, +(a - 0.5).toFixed(1)))} className="w-7 h-7 rounded-lg bg-white border border-stone-200 flex items-center justify-center btn-press hover:border-emerald-300">
                <Minus className="w-3.5 h-3.5 text-stone-500" />
              </button>
              <input
    type="number"
    value={amount}
    min={0.5}
    max={maxAmt}
    step={0.1}
    onChange={(e) => setAmount(Math.min(maxAmt, Math.max(0.5, +e.target.value || 0)))}
    className="flex-1 bg-transparent text-center font-bold text-stone-800 outline-none font-mono"
  />
              <span className="text-xs text-stone-400 pr-1">kWh</span>
              <button onClick={() => setAmount((a) => Math.min(maxAmt, +(a + 0.5).toFixed(1)))} className="w-7 h-7 rounded-lg bg-white border border-stone-200 flex items-center justify-center btn-press hover:border-emerald-300">
                <Plus className="w-3.5 h-3.5 text-stone-500" />
              </button>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-stone-500 mb-1.5 block">Price per kWh</label>
            <div className="flex items-center gap-2 bg-stone-50 rounded-xl px-3 py-2.5">
              <span className="text-stone-400 font-semibold pl-1">₹</span>
              <input
    type="number"
    value={price}
    min={4}
    max={12}
    step={0.1}
    onChange={(e) => setPrice(Math.max(4, +e.target.value || 0))}
    className="flex-1 bg-transparent text-center font-bold text-stone-800 outline-none font-mono"
  />
              <span className="text-xs text-stone-400 pr-1">/kWh</span>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-stone-500 mb-1.5 block">Selling duration</label>
            <div className="grid grid-cols-4 gap-2">
              {durations.map(([k, l]) => <button
    key={k}
    onClick={() => setDuration(k)}
    className={`text-xs font-semibold py-2 rounded-lg border transition-all btn-press ${duration === k ? "bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/25" : "border-stone-200 text-stone-500 hover:border-emerald-300"}`}
  >
                  {l}
                </button>)}
            </div>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-4 space-y-1.5 transition-transform duration-300">
            <div className="flex justify-between text-xs text-emerald-700"><span>Energy</span><span className="font-semibold">{fmt(amount)} kWh</span></div>
            <div className="flex justify-between text-xs text-emerald-700"><span>Rate</span><span className="font-semibold">{inr(price)}/kWh</span></div>
            <div className="flex justify-between text-sm text-emerald-800 pt-1.5 border-t border-emerald-100">
              <span className="font-semibold">Potential earnings</span>
              <span className="font-bold">{inr(potential)}</span>
            </div>
          </div>

          <button
    onClick={handleList}
    className="w-full bg-emerald-600 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/25 text-white font-semibold rounded-xl py-3.5 transition-all btn-press"
  >
            List energy
          </button>
        </div>}
    </Modal>;
}

// src/components/BuyModal.jsx
import { useState as useState4 } from "react";
import { ShoppingCart as ShoppingCart2, Home as Home2, Minus as Minus2, Plus as Plus2, CheckCircle2 as CheckCircle22 } from "lucide-react";

// src/components/SourceTag.jsx
import { Sun as Sun4, Flame } from "lucide-react";
function SourceTag({ source }) {
  const isSolar = source === "Rooftop Solar";
  return <span
    className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-1 rounded-full ${isSolar ? "bg-amber-50 text-amber-700" : "bg-lime-50 text-lime-700"}`}
  >
      {isSolar ? <Sun4 className="w-3 h-3" /> : <Flame className="w-3 h-3" />}
      {source}
    </span>;
}

// src/components/BuyModal.jsx
function BuyModal({ listing, onClose, onSubmit }) {
  const [qty, setQty] = useState4(Math.min(2, listing.remainingEnergy));
  const [confirming, setConfirming] = useState4(false);
  const total = qty * listing.pricePerKwh;
  function handleConfirm() {
    setConfirming(true);
    setTimeout(() => onSubmit({ qty, total }), 850);
  }
  return <Modal title="Buy renewable energy" icon={ShoppingCart2} onClose={onClose}>
      {confirming ? <div className="relative flex flex-col items-center justify-center py-10 text-center">
          <Confetti />
          <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center anim-scale-spring">
            <CheckCircle22 className="w-8 h-8 text-emerald-600" />
          </div>
          <p className="font-bold text-stone-800 mt-4 anim-fade-up" style={{ animationDelay: "120ms" }}>
            Purchase confirmed
          </p>
          <p className="text-sm text-stone-400 mt-1 anim-fade-up" style={{ animationDelay: "180ms" }}>
            {fmt(qty)} kWh from House #{listing.houseNumber}
          </p>
        </div> : <div className="space-y-5">
          <div className="flex items-center gap-3 bg-stone-50 rounded-2xl p-4 transition-colors hover:bg-stone-100">
            <div className="w-11 h-11 rounded-xl bg-white border border-stone-200 flex items-center justify-center">
              <Home2 className="w-5 h-5 text-stone-500" />
            </div>
            <div>
              <p className="font-semibold text-stone-800 text-sm">House #{listing.houseNumber}</p>
              <SourceTag source={listing.source} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-stone-50 rounded-xl p-3">
              <p className="text-[11px] text-stone-400">Available</p>
              <p className="font-bold text-stone-800 font-mono">{fmt(listing.remainingEnergy)} kWh</p>
            </div>
            <div className="bg-stone-50 rounded-xl p-3">
              <p className="text-[11px] text-stone-400">Price</p>
              <p className="font-bold text-stone-800 font-mono">{inr(listing.pricePerKwh)}/kWh</p>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-stone-500 mb-1.5 block">Quantity</label>
            <div className="flex items-center gap-2 bg-stone-50 rounded-xl px-3 py-2.5">
              <button
    onClick={() => setQty((q) => Math.max(0.5, +(q - 0.5).toFixed(1)))}
    className="w-7 h-7 rounded-lg bg-white border border-stone-200 flex items-center justify-center btn-press hover:border-emerald-300"
  >
                <Minus2 className="w-3.5 h-3.5 text-stone-500" />
              </button>
              <input
    type="number"
    value={qty}
    min={0.5}
    max={listing.remainingEnergy}
    step={0.1}
    onChange={(e) => setQty(Math.min(listing.remainingEnergy, Math.max(0.5, +e.target.value || 0)))}
    className="flex-1 bg-transparent text-center font-bold text-stone-800 outline-none font-mono"
  />
              <span className="text-xs text-stone-400 pr-1">kWh</span>
              <button
    onClick={() => setQty((q) => Math.min(listing.remainingEnergy, +(q + 0.5).toFixed(1)))}
    className="w-7 h-7 rounded-lg bg-white border border-stone-200 flex items-center justify-center btn-press hover:border-emerald-300"
  >
                <Plus2 className="w-3.5 h-3.5 text-stone-500" />
              </button>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-4 flex justify-between items-center transition-transform duration-200">
            <span className="text-sm font-semibold text-emerald-800">Total</span>
            <span className="text-xl font-bold text-emerald-700 font-mono">{inr(total)}</span>
          </div>

          <button
    onClick={handleConfirm}
    className="w-full bg-emerald-600 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/25 text-white font-semibold rounded-xl py-3.5 transition-all btn-press"
  >
            Confirm purchase
          </button>
        </div>}
    </Modal>;
}

// src/components/HouseModal.jsx
import { Home as Home3 } from "lucide-react";

// src/components/StatusDot.jsx
function StatusDot({ status }) {
  const map = {
    surplus: "bg-emerald-500",
    balanced: "bg-amber-400",
    deficit: "bg-rose-400"
  };
  return <span className={`inline-block w-2.5 h-2.5 rounded-full ${map[status]}`} />;
}

// src/components/HouseModal.jsx
function HouseModal({ house, onClose }) {
  return <Modal title={`House #${house.houseNumber}`} icon={Home3} onClose={onClose}>
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <StatusDot status={house.status} />
          <span className="text-xs font-medium text-stone-500 capitalize">{house.status}</span>
          <span className="ml-auto"><SourceTag source={house.energySource} /></span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-stone-50 rounded-xl p-3">
            <p className="text-[11px] text-stone-400">Generation</p>
            <p className="font-bold text-stone-800 font-mono">{fmt(house.generation)} kWh</p>
          </div>
          <div className="bg-stone-50 rounded-xl p-3">
            <p className="text-[11px] text-stone-400">Consumption</p>
            <p className="font-bold text-stone-800 font-mono">{fmt(house.consumption)} kWh</p>
          </div>
          <div className="bg-stone-50 rounded-xl p-3">
            <p className="text-[11px] text-stone-400">Surplus</p>
            <p className="font-bold text-emerald-600 font-mono">{fmt(house.surplus)} kWh</p>
          </div>
        </div>
        {house.surplus > 0 ? <div className="bg-emerald-50 rounded-2xl p-4">
            <p className="text-xs font-semibold text-emerald-700 mb-1">Available for trade</p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-emerald-800 font-mono">{fmt(house.surplus)} kWh</span>
              <span className="font-bold text-emerald-800 font-mono">₹6.50/kWh</span>
            </div>
          </div> : <div className="bg-rose-50 rounded-2xl p-4 text-xs text-rose-600 font-medium">No surplus currently available for trade.</div>}
        <p className="text-[11px] text-stone-400">{fmt(house.distance)} km from your home · Simulated data</p>
      </div>
    </Modal>;
}

// src/components/ToastStack.jsx
import { CheckCircle2 as CheckCircle23 } from "lucide-react";
function ToastStack({ toasts }) {
  return <div className="fixed top-4 right-4 z-[100] flex flex-col gap-2 w-[92vw] max-w-sm">
      {toasts.map((t) => <div
    key={t.id}
    className="anim-slide-right relative overflow-hidden bg-white border border-emerald-200 shadow-lg shadow-emerald-900/10 rounded-2xl px-4 py-3 flex items-start gap-3"
  >
          <div className="mt-0.5 shrink-0 w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center anim-scale-spring">
            <CheckCircle23 className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-stone-800 leading-snug">{t.title}</p>
            {t.desc && <p className="text-xs text-stone-500 mt-0.5 leading-snug">{t.desc}</p>}
          </div>
          <div className="absolute bottom-0 left-0 h-0.5 bg-emerald-400" style={{ animation: "shrinkWidth 3.5s linear forwards" }} />
        </div>)}
    </div>;
}

// src/pages/DashboardPage.jsx
import { Sun as Sun6, Home as Home5, Battery as Battery3, Leaf as Leaf3 } from "lucide-react";

// src/components/KpiCard.jsx
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

// src/components/CountUp.jsx
import React3, { useEffect as useEffect2, useRef as useRef2, useState as useState5 } from "react";
function CountUp({ value, decimals = 1, duration = 700, prefix = "", suffix = "" }) {
  const [display, setDisplay] = useState5(value);
  const fromRef = useRef2(value);
  const rafRef = useRef2(null);
  useEffect2(() => {
    const from = fromRef.current;
    const to = value;
    if (from === to) return;
    const start = performance.now();
    function tick(now) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = from + (to - from) * eased;
      setDisplay(current);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        fromRef.current = to;
      }
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [value]);
  return <span>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>;
}

// src/components/KpiCard.jsx
function KpiCard({ icon: Icon, label, value, decimals = 1, unit, trend, trendLabel, tint }) {
  const positive = trend >= 0;
  return <div className="group bg-white border border-stone-100 rounded-2xl p-5 card-interactive">
      <div className="flex items-center justify-between">
        <div
    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${tint}`}
  >
          <Icon className="w-5 h-5" />
        </div>
        <span
    className={`inline-flex items-center gap-0.5 text-xs font-semibold px-2 py-1 rounded-full transition-transform duration-200 group-hover:scale-105 ${positive ? "text-emerald-700 bg-emerald-50" : "text-rose-600 bg-rose-50"}`}
  >
          {positive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
          {Math.abs(trend)}%
        </span>
      </div>
      <p className="text-2xl font-bold text-stone-800 mt-4 font-mono">
        <CountUp value={value} decimals={decimals} />
        <span className="text-sm text-stone-400 font-medium ml-1">{unit}</span>
      </p>
      <p className="text-xs text-stone-400 mt-1">{label} · {trendLabel}</p>
    </div>;
}

// src/components/LiveStatusCard.jsx
import { Sun as Sun5, Home as Home4, Battery as Battery2, Activity } from "lucide-react";
function LiveStatusCard({ live }) {
  const rows = [
    { label: "Generation", value: live.generation, icon: Sun5, color: "text-emerald-600" },
    { label: "Consumption", value: live.consumption, icon: Home4, color: "text-stone-600" },
    { label: "Current surplus", value: live.surplus, icon: Battery2, color: "text-lime-600" }
  ];
  return <div className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-stone-900 rounded-2xl p-6 text-white relative overflow-hidden card-interactive">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl anim-float-slow" />
      <div className="absolute -bottom-14 -left-10 w-36 h-36 bg-lime-400/10 rounded-full blur-3xl anim-float-slow2" />
      <div className="flex items-center justify-between relative">
        <div className="flex items-center gap-2">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-lime-400 ring-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400" />
          </span>
          <p className="text-xs font-bold tracking-widest text-emerald-200 uppercase">Live microgrid status</p>
        </div>
        <Activity className="w-4 h-4 text-emerald-300 animate-pulse" />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-5 relative">
        {rows.map((r, i) => <div key={r.label} className="anim-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
            <r.icon className={`w-4 h-4 ${r.color} mb-1.5 opacity-80`} />
            <p className="text-xl sm:text-2xl font-bold font-mono">
              <CountUp value={r.value} decimals={2} /><span className="text-xs text-emerald-200/70 ml-0.5">kW</span>
            </p>
            <p className="text-[11px] text-emerald-200/60 mt-0.5">{r.label}</p>
          </div>)}
      </div>
      <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between relative">
        <div>
          <p className="text-[11px] text-emerald-200/60">Grid dependency</p>
          <p className="text-lg font-bold font-mono"><CountUp value={live.gridDependency} decimals={0} suffix="%" /></p>
        </div>
        <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
          <div
    className="h-full bg-gradient-to-r from-lime-500 to-lime-300 rounded-full transition-all duration-700 ease-out"
    style={{ width: `${live.gridDependency}%` }}
  />
        </div>
      </div>
    </div>;
}

// src/components/GenerationChart.jsx
import { useState as useState6 } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// src/data/mockData.js
var SOURCES = ["Rooftop Solar", "Rooftop Solar", "Rooftop Solar", "Biogas"];
var NAMES = [
  "Snehadri Bhattacharya",
  "Rina Das",
  "Manoj Gogoi",
  "Priya Sarma",
  "Arindam Baruah",
  "Kavita Deka",
  "Tridib Kalita",
  "Meera Nath",
  "Suman Chetia",
  "Anjali Phukan",
  "Rajib Saikia",
  "Deepa Bora"
];
function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}
function buildHouses() {
  const rnd = seededRandom(42);
  return NAMES.map((name, i) => {
    const houseNumber = 100 + i * 17 + Math.floor(rnd() * 7);
    const source = SOURCES[i % SOURCES.length];
    const capacity = source === "Biogas" ? 3 + rnd() * 2 : 4 + rnd() * 4;
    const generation = +(capacity * (0.55 + rnd() * 0.4)).toFixed(1);
    const consumption = +(3 + rnd() * 5).toFixed(1);
    const surplus = Math.max(0, +(generation - consumption).toFixed(1));
    const distance = +(0.2 + rnd() * 2.6).toFixed(1);
    const status = surplus > 1 ? "surplus" : surplus > 0 ? "balanced" : "deficit";
    return {
      id: `H${i + 1}`,
      name,
      houseNumber,
      role: i === 0 ? "prosumer" : "member",
      energySource: source,
      capacity: +capacity.toFixed(1),
      generation,
      consumption,
      surplus,
      status,
      distance,
      pos: { x: 8 + i * 137 % 84, y: 12 + i * 71 % 76 },
      totalShared: +(20 + rnd() * 40).toFixed(1),
      co2Avoided: +(10 + rnd() * 60).toFixed(1),
      earnings: +(80 + rnd() * 400).toFixed(2),
      balance: +(150 + rnd() * 300).toFixed(2)
    };
  });
}
function buildListings(houses) {
  const rnd = seededRandom(7);
  return houses.filter((h) => h.id !== "H1" && h.surplus > 0.6).map((h, i) => {
    const energyAmount = +(0.8 + rnd() * 3.5).toFixed(1);
    const base = h.energySource === "Biogas" ? 5.4 : 6.1;
    const pricePerKwh = +(base + rnd() * 1.4).toFixed(2);
    return {
      id: `L${i + 1}`,
      sellerId: h.id,
      houseNumber: h.houseNumber,
      energyAmount,
      remainingEnergy: energyAmount,
      pricePerKwh,
      source: h.energySource,
      distance: h.distance,
      status: "active",
      createdAt: Date.now() - Math.floor(rnd() * 3 * 3600 * 1e3)
    };
  });
}
function buildChartData24h() {
  const data = [];
  for (let h = 0; h < 24; h++) {
    const solarShape = Math.max(0, Math.sin((h - 6) / 12 * Math.PI));
    const generation = +(solarShape * 9.4 + (h > 5 && h < 20 ? 0.3 : 0)).toFixed(2);
    const morning = Math.exp(-Math.pow(h - 7.5, 2) / 3) * 4.2;
    const evening = Math.exp(-Math.pow(h - 19.5, 2) / 4) * 6.8;
    const base = 1.6;
    const consumption = +(base + morning + evening).toFixed(2);
    const surplus = +Math.max(0, generation - consumption).toFixed(2);
    data.push({
      time: `${h.toString().padStart(2, "0")}:00`,
      hour: h,
      generation,
      consumption,
      surplus
    });
  }
  return data;
}
function buildChartData7d() {
  const rnd = seededRandom(101);
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return days.map((d) => ({
    time: d,
    generation: +(90 + rnd() * 60).toFixed(1),
    consumption: +(70 + rnd() * 40).toFixed(1),
    surplus: +(15 + rnd() * 30).toFixed(1)
  }));
}
function buildChartData30d() {
  const rnd = seededRandom(202);
  return Array.from({ length: 30 }, (_, i) => ({
    time: `${i + 1}`,
    generation: +(85 + rnd() * 70).toFixed(1),
    consumption: +(65 + rnd() * 45).toFixed(1),
    surplus: +(10 + rnd() * 35).toFixed(1)
  }));
}
var SOURCE_MIX = [
  { name: "Solar", value: 68, color: "#059669" },
  { name: "Biogas", value: 14, color: "#84cc16" },
  { name: "Grid", value: 12, color: "#94a3b8" },
  { name: "Other", value: 6, color: "#facc15" }
];
var BADGES = ["Solar Pioneer", "Energy Contributor", "Green Champion", "Community Hero"];
var INITIAL_HOUSES = buildHouses();
var INITIAL_LISTINGS = buildListings(INITIAL_HOUSES);
var CHART_DATA_24H = buildChartData24h();
var CHART_DATA_7D = buildChartData7d();
var CHART_DATA_30D = buildChartData30d();

// src/components/GenerationChart.jsx
function GenerationChart() {
  const [range, setRange] = useState6("today");
  const data = range === "today" ? CHART_DATA_24H : range === "7d" ? CHART_DATA_7D : CHART_DATA_30D;
  return <div className="bg-white border border-stone-100 rounded-2xl p-5 sm:p-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <p className="font-semibold text-stone-800">Generation vs consumption</p>
          <p className="text-xs text-stone-400 mt-0.5">Simulated readings across the community microgrid</p>
        </div>
        <div className="flex bg-stone-50 rounded-full p-1 text-xs font-semibold">
          {[["today", "Today"], ["7d", "7 Days"], ["30d", "30 Days"]].map(([k, l]) => <button
    key={k}
    onClick={() => setRange(k)}
    className={`px-3 py-1.5 rounded-full transition-colors ${range === k ? "bg-white text-emerald-700 shadow-sm" : "text-stone-400"}`}
  >
              {l}
            </button>)}
        </div>
      </div>
      <div className="h-64 mt-4 -ml-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="gGen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#059669" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#059669" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gCon" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#78716c" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#78716c" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gSur" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a3e635" stopOpacity={0.45} />
                <stop offset="95%" stopColor="#a3e635" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f4" />
            <XAxis dataKey="time" tick={{ fontSize: 11, fill: "#a8a29e" }} axisLine={false} tickLine={false} interval={range === "today" ? 3 : range === "30d" ? 4 : 0} />
            <YAxis tick={{ fontSize: 11, fill: "#a8a29e" }} axisLine={false} tickLine={false} width={32} />
            <Tooltip
    contentStyle={{ borderRadius: 12, border: "1px solid #f1f5f4", fontSize: 12, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
    formatter={(v, n) => [`${v} kWh`, n[0].toUpperCase() + n.slice(1)]}
  />
            <Area type="monotone" dataKey="generation" stroke="#059669" fill="url(#gGen)" strokeWidth={2} />
            <Area type="monotone" dataKey="consumption" stroke="#78716c" fill="url(#gCon)" strokeWidth={2} />
            <Area type="monotone" dataKey="surplus" stroke="#65a30d" fill="url(#gSur)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center gap-5 mt-2 text-xs text-stone-500 font-medium">
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-600" /> Generation</span>
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-stone-400" /> Consumption</span>
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-lime-500" /> Surplus</span>
      </div>
    </div>;
}

// src/components/MyEnergyCard.jsx
function MyEnergyCard({ user, onSell }) {
  return <div className="bg-white border border-stone-100 rounded-2xl p-5 sm:p-6 card-interactive">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-stone-800">My energy</p>
        <SourceTag source={user.energySource} />
      </div>
      <div className="grid grid-cols-3 gap-3 mt-4">
        <div className="transition-transform duration-200 hover:-translate-y-0.5">
          <p className="text-lg font-bold text-stone-800 font-mono"><CountUp value={user.generation} /></p>
          <p className="text-[11px] text-stone-400">Solar gen. (kWh)</p>
        </div>
        <div className="transition-transform duration-200 hover:-translate-y-0.5">
          <p className="text-lg font-bold text-stone-800 font-mono"><CountUp value={user.consumption} /></p>
          <p className="text-[11px] text-stone-400">Consumption (kWh)</p>
        </div>
        <div className="transition-transform duration-200 hover:-translate-y-0.5">
          <p className="text-lg font-bold text-emerald-600 font-mono"><CountUp value={user.mySurplus} /></p>
          <p className="text-[11px] text-stone-400">Available surplus</p>
        </div>
      </div>
      <div className="mt-4 bg-emerald-50 rounded-xl px-4 py-3 flex items-center justify-between transition-colors duration-200 hover:bg-emerald-100">
        <span className="text-xs font-medium text-emerald-700">Today's earnings</span>
        <span className="text-base font-bold text-emerald-700 font-mono">
          <CountUp value={user.todaysEarnings} decimals={2} prefix="₹" />
        </span>
      </div>
      <div className="flex gap-2 mt-4">
        <button
    onClick={onSell}
    disabled={user.mySurplus <= 0}
    className="flex-1 bg-emerald-600 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/25 disabled:bg-stone-200 disabled:text-stone-400 disabled:shadow-none text-white text-sm font-semibold rounded-xl py-2.5 transition-all btn-press"
  >
          Sell surplus
        </button>
        <button className="flex-1 border border-stone-200 hover:border-emerald-300 hover:text-emerald-700 text-stone-600 text-sm font-semibold rounded-xl py-2.5 transition-colors btn-press">
          View details
        </button>
      </div>
    </div>;
}

// src/components/Recommendations.jsx
import { useState as useState7 } from "react";
import { Sparkles as Sparkles2, Info } from "lucide-react";
function Recommendations({ marketPrice, demand, user }) {
  const [openIdx, setOpenIdx] = useState7(null);
  const items = [
    {
      icon: "\u2600\uFE0F",
      title: "High solar generation expected",
      body: "Your community is likely to generate surplus energy between 11 AM and 2 PM.",
      why: "Based on the historical 24-hour generation curve, solar output peaks near midday when panel irradiance is highest across all rooftop installations."
    },
    {
      icon: "\u{1F4B0}",
      title: "Good time to sell",
      body: `Current demand is ${demand.toLowerCase()} and the average market price is ${inr(marketPrice)}/kWh.`,
      why: "GridShare Intelligence compares live listing volume against recent purchase activity \u2014 when demand outpaces supply, prices trend upward."
    },
    {
      icon: "\u{1F331}",
      title: "Reduce your carbon footprint",
      body: `Your household has avoided approximately ${fmt(user.co2Avoided)} kg of CO\u2082 this month.`,
      why: "Estimated using the difference between your renewable generation and the regional grid's average emissions factor."
    },
    {
      icon: "\u26A1",
      title: "Energy-saving opportunity",
      body: "Your consumption is 14% higher than the community average during evening hours.",
      why: "Calculated by comparing your 6\u201310 PM consumption readings against the anonymized community median for the same window."
    }
  ];
  return <div className="bg-white border border-stone-100 rounded-2xl p-5 sm:p-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-lime-100 flex items-center justify-center">
          <Sparkles2 className="w-4 h-4 text-lime-700" />
        </div>
        <div>
          <p className="font-semibold text-stone-800 leading-tight">GridShare Intelligence</p>
          <p className="text-[11px] text-stone-400">Simple rule-based recommendations</p>
        </div>
      </div>
      <div className="space-y-2">
        {items.map((it, i) => <div key={it.title} className="border border-stone-100 rounded-xl px-4 py-3">
            <div className="flex items-start gap-3">
              <span className="text-lg leading-none">{it.icon}</span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-stone-800">{it.title}</p>
                <p className="text-xs text-stone-500 mt-0.5 leading-relaxed">{it.body}</p>
                <button
    onClick={() => setOpenIdx(openIdx === i ? null : i)}
    className="text-[11px] font-semibold text-emerald-600 mt-1.5 inline-flex items-center gap-1"
  >
                  <Info className="w-3 h-3" /> {openIdx === i ? "Hide details" : "Why?"}
                </button>
                {openIdx === i && <p className="text-[11px] text-stone-400 mt-1.5 leading-relaxed bg-stone-50 rounded-lg p-2.5">{it.why}</p>}
              </div>
            </div>
          </div>)}
      </div>
    </div>;
}

// src/pages/DashboardPage.jsx
function DashboardPage({ user, live, communityStats, onSell, price, demand }) {
  return <div className="space-y-5">
      <div className="anim-fade-up">
        <h1 className="text-2xl font-bold text-stone-800 font-display">
          Good afternoon, {user.name.split(" ")[0]}{" "}
          <span className="inline-block animate-[wiggle_1.8s_ease-in-out_infinite]">👋</span>
        </h1>
        <p className="text-sm text-stone-500 mt-1">Here's what's happening in your community microgrid today.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
    { icon: Sun6, label: "Energy generated", value: communityStats.generation, unit: "kWh", trend: 12.4, trendLabel: "today", tint: "bg-emerald-50 text-emerald-600" },
    { icon: Home5, label: "Energy consumed", value: communityStats.consumption, unit: "kWh", trend: -3.2, trendLabel: "today", tint: "bg-stone-100 text-stone-600" },
    { icon: Battery3, label: "Community surplus", value: communityStats.surplus, unit: "kWh", trend: 6.1, trendLabel: "available for trading", tint: "bg-lime-50 text-lime-600" },
    { icon: Leaf3, label: "CO\u2082 avoided", value: communityStats.co2, unit: "kg", trend: 4.4, trendLabel: "today's impact", tint: "bg-amber-50 text-amber-600" }
  ].map((k, i) => <div key={k.label} className="anim-fade-up" style={{ animationDelay: `${i * 70}ms` }}>
            <KpiCard {...k} />
          </div>)}
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-1 anim-fade-up" style={{ animationDelay: "120ms" }}>
          <LiveStatusCard live={live} />
        </div>
        <div className="lg:col-span-2 anim-fade-up" style={{ animationDelay: "180ms" }}>
          <GenerationChart />
        </div>
      </div>

      <div className="bg-white border border-stone-100 rounded-2xl p-5 sm:p-6 card-interactive anim-fade-up" style={{ animationDelay: "220ms" }}>
        <p className="font-semibold text-stone-800 mb-4">Microgrid energy flow</p>
        <FlowDiagram />
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        <div className="anim-fade-up" style={{ animationDelay: "260ms" }}>
          <MyEnergyCard user={user} onSell={onSell} />
        </div>
        <div className="anim-fade-up" style={{ animationDelay: "300ms" }}>
          <Recommendations marketPrice={price} demand={demand} user={user} />
        </div>
      </div>
    </div>;
}

// src/pages/MarketPage.jsx
import { useMemo as useMemo2, useState as useState8 } from "react";
import { Home as Home6, MapPin as MapPin2, ShoppingCart as ShoppingCart3, Search, SlidersHorizontal } from "lucide-react";
function ListingCard({ listing, onBuy, delay }) {
  return <div
    className="group bg-white border border-stone-100 rounded-2xl p-5 card-interactive anim-fade-up flex flex-col"
    style={{ animationDelay: `${delay}ms` }}
  >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
            <Home6 className="w-[18px] h-[18px] text-emerald-600" />
          </div>
          <p className="font-semibold text-stone-800 text-sm">House #{listing.houseNumber}</p>
        </div>
        <SourceTag source={listing.source} />
      </div>
      <div className="flex items-end justify-between mt-4">
        <div>
          <p className="text-[11px] text-stone-400">Surplus available</p>
          <p className="text-lg font-bold text-stone-800 font-mono">
            <CountUp value={listing.remainingEnergy} /> kWh
          </p>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-emerald-600 font-mono">{inr(listing.pricePerKwh)}</p>
          <p className="text-[11px] text-stone-400">per kWh</p>
        </div>
      </div>
      <div className="flex items-center gap-1 text-[11px] text-stone-400 mt-3">
        <MapPin2 className="w-3 h-3" /> {fmt(listing.distance)} km away
      </div>
      <button
    onClick={() => onBuy(listing)}
    className="mt-4 w-full bg-stone-900 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-700/25 text-white text-sm font-semibold rounded-xl py-2.5 transition-all btn-press flex items-center justify-center gap-1.5 anim-bounce-icon"
  >
        <ShoppingCart3 className="w-3.5 h-3.5" /> Buy energy
      </button>
    </div>;
}
function MarketPage({ listings, onBuy, marketStats }) {
  const [sort, setSort] = useState8("price");
  const [source, setSource] = useState8("all");
  const [query, setQuery] = useState8("");
  const filtered = useMemo2(() => {
    let list = listings.filter((l) => l.remainingEnergy > 0.05);
    if (source === "solar") list = list.filter((l) => l.source === "Rooftop Solar");
    if (source === "biogas") list = list.filter((l) => l.source === "Biogas");
    if (query) list = list.filter((l) => `${l.houseNumber}`.includes(query));
    if (sort === "price") list = [...list].sort((a, b) => a.pricePerKwh - b.pricePerKwh);
    if (sort === "availability") list = [...list].sort((a, b) => b.remainingEnergy - a.remainingEnergy);
    if (sort === "nearest") list = [...list].sort((a, b) => a.distance - b.distance);
    return list;
  }, [listings, sort, source, query]);
  return <div className="space-y-5">
      <div className="anim-fade-up">
        <h1 className="text-2xl font-bold text-stone-800 font-display">Community Energy Market</h1>
        <p className="text-sm text-stone-500 mt-1">Buy locally generated renewable energy from your neighbors.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-stone-100 rounded-2xl p-4 card-interactive anim-fade-up">
          <p className="text-[11px] text-stone-400">Available energy</p>
          <p className="text-xl font-bold text-stone-800 mt-1 font-mono"><CountUp value={marketStats.available} /> kWh</p>
        </div>
        <div className="bg-white border border-stone-100 rounded-2xl p-4 card-interactive anim-fade-up" style={{ animationDelay: "60ms" }}>
          <p className="text-[11px] text-stone-400">Active sellers</p>
          <p className="text-xl font-bold text-stone-800 mt-1 font-mono"><CountUp value={marketStats.sellers} decimals={0} /></p>
        </div>
        <div className="bg-white border border-stone-100 rounded-2xl p-4 card-interactive anim-fade-up" style={{ animationDelay: "120ms" }}>
          <p className="text-[11px] text-stone-400">Average price</p>
          <p className="text-xl font-bold text-emerald-600 mt-1 font-mono"><CountUp value={marketStats.avgPrice} decimals={2} prefix="₹" /></p>
        </div>
        <div className="bg-white border border-stone-100 rounded-2xl p-4 card-interactive anim-fade-up" style={{ animationDelay: "180ms" }}>
          <p className="text-[11px] text-stone-400">Current demand</p>
          <p className={`text-xl font-bold mt-1 ${marketStats.demand === "High" ? "text-rose-500" : "text-amber-500"}`}>{marketStats.demand}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-2 bg-white border border-stone-200 rounded-full px-3 py-2 flex-1 min-w-[160px] transition-shadow focus-within:shadow-md focus-within:border-emerald-300">
          <Search className="w-4 h-4 text-stone-400" />
          <input
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    placeholder="Search house number"
    className="bg-transparent outline-none text-sm flex-1 min-w-0"
  />
        </div>
        {[["price", "Lowest price"], ["availability", "Highest availability"], ["nearest", "Nearest"]].map(([k, l]) => <button
    key={k}
    onClick={() => setSort(k)}
    className={`text-xs font-semibold px-3 py-2 rounded-full border transition-all btn-press ${sort === k ? "bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/20" : "border-stone-200 text-stone-500 hover:border-emerald-300"}`}
  >
            {l}
          </button>)}
        <div className="w-px h-5 bg-stone-200 mx-1 hidden sm:block" />
        {[["all", "All sources"], ["solar", "Solar only"], ["biogas", "Biogas"]].map(([k, l]) => <button
    key={k}
    onClick={() => setSource(k)}
    className={`text-xs font-semibold px-3 py-2 rounded-full border transition-all btn-press ${source === k ? "bg-lime-500 text-white border-lime-500 shadow-md shadow-lime-500/20" : "border-stone-200 text-stone-500 hover:border-lime-300"}`}
  >
            {l}
          </button>)}
      </div>

      {filtered.length === 0 ? <div className="bg-white border border-dashed border-stone-200 rounded-2xl py-16 text-center anim-fade-in">
          <SlidersHorizontal className="w-8 h-8 text-stone-300 mx-auto mb-3" />
          <p className="font-semibold text-stone-600">No listings match your filters</p>
          <p className="text-sm text-stone-400 mt-1">Try adjusting a filter or check back once neighbors list surplus energy.</p>
        </div> : <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((l, i) => <ListingCard key={l.id} listing={l} onBuy={onBuy} delay={i * 60} />)}
        </div>}
    </div>;
}

// src/pages/MyEnergyPage.jsx
import { AreaChart as AreaChart2, Area as Area2, XAxis as XAxis2, YAxis as YAxis2, CartesianGrid as CartesianGrid2, Tooltip as Tooltip2, ResponsiveContainer as ResponsiveContainer2 } from "recharts";
import { Sun as Sun7, Home as Home7, Battery as Battery4 } from "lucide-react";
function MyEnergyPage({ user, onSell }) {
  return <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-stone-800 font-display">My Energy</h1>
        <p className="text-sm text-stone-500 mt-1">Your rooftop generation, household use and surplus, in one place.</p>
      </div>
      <div className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-5">
          <div className="bg-white border border-stone-100 rounded-2xl p-5 sm:p-6">
            <p className="font-semibold text-stone-800 mb-4">Your 24-hour profile</p>
            <div className="h-56">
              <ResponsiveContainer2 width="100%" height="100%">
                <AreaChart2 data={CHART_DATA_24H}>
                  <CartesianGrid2 strokeDasharray="3 3" vertical={false} stroke="#f1f5f4" />
                  <XAxis2 dataKey="time" tick={{ fontSize: 10, fill: "#a8a29e" }} axisLine={false} tickLine={false} interval={3} />
                  <YAxis2 tick={{ fontSize: 10, fill: "#a8a29e" }} axisLine={false} tickLine={false} width={28} />
                  <Tooltip2 contentStyle={{ borderRadius: 12, border: "1px solid #f1f5f4", fontSize: 12 }} />
                  <Area2 type="monotone" dataKey="generation" stroke="#059669" fill="#05966922" strokeWidth={2} />
                  <Area2 type="monotone" dataKey="consumption" stroke="#78716c" fill="#78716c15" strokeWidth={2} />
                </AreaChart2>
              </ResponsiveContainer2>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white border border-stone-100 rounded-2xl p-4">
              <Sun7 className="w-4 h-4 text-amber-500 mb-2" />
              <p className="text-xl font-bold text-stone-800 font-mono">{fmt(user.generation)} kWh</p>
              <p className="text-[11px] text-stone-400">Generation today</p>
            </div>
            <div className="bg-white border border-stone-100 rounded-2xl p-4">
              <Home7 className="w-4 h-4 text-stone-500 mb-2" />
              <p className="text-xl font-bold text-stone-800 font-mono">{fmt(user.consumption)} kWh</p>
              <p className="text-[11px] text-stone-400">Consumption today</p>
            </div>
            <div className="bg-white border border-stone-100 rounded-2xl p-4">
              <Battery4 className="w-4 h-4 text-emerald-500 mb-2" />
              <p className="text-xl font-bold text-emerald-600 font-mono">{fmt(user.mySurplus)} kWh</p>
              <p className="text-[11px] text-stone-400">Surplus available</p>
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <MyEnergyCard user={user} onSell={onSell} />
          <div className="bg-white border border-stone-100 rounded-2xl p-5">
            <p className="font-semibold text-stone-800 mb-3 text-sm">Installation</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-stone-400">Source</span><span className="font-medium text-stone-700">{user.energySource}</span></div>
              <div className="flex justify-between"><span className="text-stone-400">Capacity</span><span className="font-medium text-stone-700">{user.capacity} kW</span></div>
              <div className="flex justify-between"><span className="text-stone-400">Prosumer ID</span><span className="font-medium text-stone-700">GS-{user.houseNumber}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}

// src/pages/TransactionsPage.jsx
import { useState as useState9 } from "react";
import { Receipt as Receipt2, Zap as Zap4, CheckCircle2 as CheckCircle24 } from "lucide-react";
function TransactionsPage({ transactions }) {
  const [tab, setTab] = useState9("all");
  const filtered = transactions.filter((t) => tab === "all" ? true : t.type === tab);
  const bought = transactions.filter((t) => t.type === "bought");
  const sold = transactions.filter((t) => t.type === "sold");
  const totals = {
    boughtKwh: bought.reduce((s, t) => s + t.energyAmount, 0),
    soldKwh: sold.reduce((s, t) => s + t.energyAmount, 0),
    spent: bought.reduce((s, t) => s + t.totalAmount, 0),
    earned: sold.reduce((s, t) => s + t.totalAmount, 0)
  };
  return <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-stone-800 font-display">Transactions</h1>
        <p className="text-sm text-stone-500 mt-1">Every trade on GridShare, tracked in one ledger.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-stone-100 rounded-2xl p-4">
          <p className="text-[11px] text-stone-400">Total energy bought</p>
          <p className="text-lg font-bold text-stone-800 mt-1 font-mono">{fmt(totals.boughtKwh)} kWh</p>
        </div>
        <div className="bg-white border border-stone-100 rounded-2xl p-4">
          <p className="text-[11px] text-stone-400">Total energy sold</p>
          <p className="text-lg font-bold text-stone-800 mt-1 font-mono">{fmt(totals.soldKwh)} kWh</p>
        </div>
        <div className="bg-white border border-stone-100 rounded-2xl p-4">
          <p className="text-[11px] text-stone-400">Total spent</p>
          <p className="text-lg font-bold text-rose-500 mt-1 font-mono">{inr(totals.spent)}</p>
        </div>
        <div className="bg-white border border-stone-100 rounded-2xl p-4">
          <p className="text-[11px] text-stone-400">Total earned</p>
          <p className="text-lg font-bold text-emerald-600 mt-1 font-mono">{inr(totals.earned)}</p>
        </div>
      </div>

      <div className="flex bg-stone-50 rounded-full p-1 text-xs font-semibold w-fit">
        {[["all", "All"], ["bought", "Bought"], ["sold", "Sold"]].map(([k, l]) => <button
    key={k}
    onClick={() => setTab(k)}
    className={`px-4 py-2 rounded-full transition-colors ${tab === k ? "bg-white text-emerald-700 shadow-sm" : "text-stone-400"}`}
  >
            {l}
          </button>)}
      </div>

      {filtered.length === 0 ? <div className="bg-white border border-dashed border-stone-200 rounded-2xl py-16 text-center">
          <Receipt2 className="w-8 h-8 text-stone-300 mx-auto mb-3" />
          <p className="font-semibold text-stone-600">No transactions yet</p>
          <p className="text-sm text-stone-400 mt-1">Buy or sell energy to see it show up here.</p>
        </div> : <div className="bg-white border border-stone-100 rounded-2xl divide-y divide-stone-50 overflow-hidden">
          {filtered.map((t) => {
    const isBought = t.type === "bought";
    return <div key={t.id} className="flex items-center gap-3 px-5 py-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${isBought ? "bg-rose-50" : "bg-emerald-50"}`}>
                  <Zap4 className={`w-[18px] h-[18px] ${isBought ? "text-rose-500" : "text-emerald-600"}`} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-stone-800">Energy {isBought ? "purchase" : "sale"}</p>
                  <p className="text-xs text-stone-400">
                    {new Date(t.timestamp).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })} · {fmt(t.energyAmount)} kWh
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className={`text-sm font-bold font-mono ${isBought ? "text-stone-800" : "text-emerald-600"}`}>
                    {isBought ? "" : "+"}{inr(t.totalAmount)}
                  </p>
                  <p className="text-[11px] text-stone-400">{isBought ? "From" : "To"} House #{isBought ? t.sellerHouse : t.buyerHouse}</p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full shrink-0">
                  <CheckCircle24 className="w-3 h-3" /> Completed
                </span>
              </div>;
  })}
        </div>}
    </div>;
}

// src/pages/CommunityPage.jsx
import { PieChart, Pie, Cell, Tooltip as Tooltip3, Legend, ResponsiveContainer as ResponsiveContainer3 } from "recharts";

// src/components/CommunityMap.jsx
import { Home as Home8 } from "lucide-react";
function CommunityMap({ houses, onSelect }) {
  return <div className="bg-gradient-to-br from-emerald-50 to-lime-50 border border-stone-100 rounded-2xl p-4 relative h-80 overflow-hidden card-interactive">
      <div
    className="absolute inset-0 opacity-[0.06]"
    style={{
      backgroundImage: "linear-gradient(#065f46 1px, transparent 1px), linear-gradient(90deg, #065f46 1px, transparent 1px)",
      backgroundSize: "24px 24px"
    }}
  />
      {houses.map((h, i) => <button
    key={h.id}
    onClick={() => onSelect(h)}
    style={{ left: `${h.pos.x}%`, top: `${h.pos.y}%`, animationDelay: `${i * 40}ms` }}
    className="anim-scale-spring absolute -translate-x-1/2 -translate-y-1/2 group"
  >
          {h.status === "surplus" && <span className="absolute inset-0 rounded-full bg-emerald-400 ring-ping" />}
          <span
    className={`relative flex items-center justify-center w-9 h-9 rounded-full shadow-md border-2 border-white transition-transform duration-200 group-hover:scale-125 group-hover:-translate-y-1 ${h.status === "surplus" ? "bg-emerald-500" : h.status === "balanced" ? "bg-amber-400" : "bg-rose-400"}`}
  >
            <Home8 className="w-4 h-4 text-white" />
          </span>
          <span className="absolute top-full mt-1 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-stone-600 bg-white/90 px-1.5 py-0.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            #{h.houseNumber}
          </span>
        </button>)}
      <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur rounded-xl px-3 py-2 flex items-center gap-3 text-[11px] font-medium text-stone-600 anim-fade-up">
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Surplus</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-400" /> Balanced</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-rose-400" /> Deficit</span>
      </div>
    </div>;
}

// src/components/Leaderboard.jsx
import { Trophy } from "lucide-react";
function Leaderboard({ houses }) {
  const ranked = [...houses].sort((a, b) => b.totalShared - a.totalShared).slice(0, 8);
  const medals = ["\u{1F947}", "\u{1F948}", "\u{1F949}"];
  return <div className="bg-white border border-stone-100 rounded-2xl p-5 sm:p-6 card-interactive">
      <div className="flex items-center gap-2 mb-4">
        <Trophy className="w-[18px] h-[18px] text-amber-500" />
        <p className="font-semibold text-stone-800">Green Champions</p>
      </div>
      <div className="divide-y divide-stone-50">
        {ranked.map((h, i) => <div
    key={h.id}
    className="anim-fade-up group flex items-center gap-3 py-3 rounded-xl px-2 -mx-2 transition-colors duration-200 hover:bg-stone-50"
    style={{ animationDelay: `${i * 50}ms` }}
  >
            <span
    className={`w-7 text-center text-sm font-bold text-stone-400 transition-transform duration-200 group-hover:scale-125 ${i < 3 ? "text-base" : ""}`}
  >
              {medals[i] || i + 1}
            </span>
            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[11px] font-bold shrink-0 transition-transform duration-200 group-hover:scale-110">
              {h.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-stone-800 truncate">House #{h.houseNumber}</p>
              <p className="text-[11px] text-stone-400">{BADGES[i % BADGES.length]}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-emerald-600 font-mono"><CountUp value={h.totalShared} /> kWh</p>
              <p className="text-[11px] text-stone-400">shared</p>
            </div>
          </div>)}
      </div>
    </div>;
}

// src/pages/CommunityPage.jsx
function CommunityPage({ houses, communityStats, onSelectHouse }) {
  return <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-stone-800 font-display">Community</h1>
        <p className="text-sm text-stone-500 mt-1">A map of the GridShare Guwahati microgrid and its members.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <CommunityMap houses={houses} onSelect={onSelectHouse} />
        </div>
        <div className="bg-white border border-stone-100 rounded-2xl p-5">
          <p className="font-semibold text-stone-800 mb-3 text-sm">Community microgrid</p>
          <div className="grid grid-cols-2 gap-4">
            {[
    ["Active homes", houses.length],
    ["Generated", `${fmt(communityStats.generation)} kWh`],
    ["Consumed", `${fmt(communityStats.consumption)} kWh`],
    ["Shared", `${fmt(communityStats.surplus)} kWh`],
    ["CO\u2082 avoided", `${fmt(communityStats.co2 * 22, 0)} kg`]
  ].map(([l, v]) => <div key={l}>
                <p className="text-lg font-bold text-stone-800 font-mono">{v}</p>
                <p className="text-[11px] text-stone-400">{l}</p>
              </div>)}
          </div>
          <div className="h-40 mt-4">
            <ResponsiveContainer3 width="100%" height="100%">
              <PieChart>
                <Pie data={SOURCE_MIX} dataKey="value" nameKey="name" innerRadius={35} outerRadius={55} paddingAngle={3}>
                  {SOURCE_MIX.map((s) => <Cell key={s.name} fill={s.color} />)}
                </Pie>
                <Tooltip3 contentStyle={{ borderRadius: 10, fontSize: 11 }} />
                <Legend iconSize={8} wrapperStyle={{ fontSize: 11 }} />
              </PieChart>
            </ResponsiveContainer3>
          </div>
        </div>
      </div>

      <Leaderboard houses={houses} />
    </div>;
}

// src/pages/ImpactPage.jsx
import { BarChart, Bar, XAxis as XAxis3, YAxis as YAxis3, Tooltip as Tooltip4, Cell as Cell2, ResponsiveContainer as ResponsiveContainer4 } from "recharts";
import { ShoppingCart as ShoppingCart4, Leaf as Leaf4, Sun as Sun8, Wallet as Wallet2, TreePine, ArrowRight as ArrowRight2 } from "lucide-react";
function ImpactPage({ user }) {
  const treesEquivalent = (user.co2Avoided / 21).toFixed(1);
  return <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-stone-800 font-display">Environmental Impact</h1>
        <p className="text-sm text-stone-500 mt-1">The measurable footprint of clean energy shared across the community.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
    { icon: ShoppingCart4, label: "Energy shared", value: "386 kWh", tint: "bg-emerald-50 text-emerald-600" },
    { icon: Leaf4, label: "CO\u2082 avoided", value: "742 kg", tint: "bg-lime-50 text-lime-600" },
    { icon: Sun8, label: "Renewable generated", value: "1,248 kWh", tint: "bg-amber-50 text-amber-600" },
    { icon: Wallet2, label: "Community savings", value: "\u20B918,420", tint: "bg-stone-100 text-stone-600" }
  ].map((s) => <div key={s.label} className="bg-white border border-stone-100 rounded-2xl p-5">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${s.tint}`}>
              <s.icon className="w-5 h-5" />
            </div>
            <p className="text-xl font-bold text-stone-800 font-mono">{s.value}</p>
            <p className="text-xs text-stone-400 mt-1">{s.label}</p>
          </div>)}
      </div>

      <div className="bg-gradient-to-br from-emerald-900 to-stone-900 rounded-2xl p-6 sm:p-8 text-white">
        <p className="text-xs font-bold tracking-widest text-emerald-300 uppercase mb-4">Your impact</p>
        <div className="flex flex-wrap items-center gap-8">
          <div className="flex items-center gap-3">
            <Leaf4 className="w-8 h-8 text-lime-400" />
            <div>
              <p className="text-2xl font-bold font-mono">{fmt(user.co2Avoided)} kg CO₂</p>
              <p className="text-xs text-emerald-200/70">avoided this month</p>
            </div>
          </div>
          <ArrowRight2 className="w-5 h-5 text-emerald-400 hidden sm:block" />
          <div className="flex items-center gap-3">
            <TreePine className="w-8 h-8 text-lime-400" />
            <div>
              <p className="text-2xl font-bold font-mono">~{treesEquivalent} trees</p>
              <p className="text-xs text-emerald-200/70">grown for one year (estimated)</p>
            </div>
          </div>
        </div>
        <p className="text-[11px] text-emerald-200/50 mt-5">
          Equivalents are estimated using standard regional emissions and carbon-sequestration factors, for illustrative purposes only.
        </p>
      </div>

      <div className="bg-white border border-stone-100 rounded-2xl p-5 sm:p-6">
        <p className="font-semibold text-stone-800 mb-4">Community energy source mix</p>
        <div className="h-64">
          <ResponsiveContainer4 width="100%" height="100%">
            <BarChart data={SOURCE_MIX} layout="vertical" margin={{ left: 10 }}>
              <XAxis3 type="number" tick={{ fontSize: 11, fill: "#a8a29e" }} axisLine={false} tickLine={false} unit="%" />
              <YAxis3 type="category" dataKey="name" tick={{ fontSize: 12, fill: "#57534e" }} axisLine={false} tickLine={false} width={60} />
              <Tooltip4 contentStyle={{ borderRadius: 10, fontSize: 12 }} />
              <Bar dataKey="value" radius={[0, 8, 8, 0]}>
                {SOURCE_MIX.map((s) => <Cell2 key={s.name} fill={s.color} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer4>
        </div>
      </div>
    </div>;
}

// src/pages/ProfilePage.jsx
import { LogOut, Globe2 } from "lucide-react";
function ProfilePage({ user, communityStats, onLogout, role }) {
  return <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-stone-800 font-display">Profile</h1>
        <p className="text-sm text-stone-500 mt-1">Your GridShare prosumer account.</p>
      </div>

      <div className="bg-white border border-stone-100 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-5">
        <div className="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-xl font-bold shrink-0">
          {user.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
        </div>
        <div className="flex-1">
          <p className="text-lg font-bold text-stone-800">{user.name}</p>
          <p className="text-sm text-stone-400">Prosumer ID · GS-{user.houseNumber}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            <SourceTag source={user.energySource} />
            <span className="text-[11px] font-semibold px-2 py-1 rounded-full bg-stone-100 text-stone-600">{user.capacity} kW installed</span>
            <span className="text-[11px] font-semibold px-2 py-1 rounded-full bg-stone-100 text-stone-600 capitalize">{role}</span>
          </div>
        </div>
        <button onClick={onLogout} className="inline-flex items-center gap-2 text-sm font-semibold text-rose-500 hover:text-rose-600 border border-rose-100 hover:bg-rose-50 rounded-xl px-4 py-2.5 transition-colors">
          <LogOut className="w-4 h-4" /> Sign out
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
    ["Total generated", `${fmt(user.generation * 22)} kWh`],
    ["Total consumed", `${fmt(user.consumption * 22)} kWh`],
    ["Total sold", `${fmt(user.totalShared)} kWh`],
    ["Total earnings", inr(user.earnings)]
  ].map(([l, v]) => <div key={l} className="bg-white border border-stone-100 rounded-2xl p-4">
            <p className="text-lg font-bold text-stone-800 font-mono">{v}</p>
            <p className="text-[11px] text-stone-400 mt-1">{l}</p>
          </div>)}
      </div>

      <div className="bg-white border border-stone-100 rounded-2xl p-5">
        <p className="font-semibold text-stone-800 mb-3 text-sm">Community</p>
        <div className="flex items-center gap-3">
          <Globe2 className="w-9 h-9 text-emerald-600 bg-emerald-50 rounded-xl p-2" />
          <div>
            <p className="text-sm font-semibold text-stone-700">GridShare Guwahati</p>
            <p className="text-[11px] text-stone-400">{communityStats.homes} active homes</p>
          </div>
        </div>
      </div>
    </div>;
}

// src/pages/AdminPage.jsx
import { Sun as Sun9, Home as Home9, Users as Users2, Store as Store3, Zap as Zap5, ShieldCheck as ShieldCheck2 } from "lucide-react";
function AdminPage({ houses, transactions, communityStats, marketStats }) {
  return <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-stone-800 font-display">Admin overview</h1>
        <p className="text-sm text-stone-500 mt-1">System-wide view of the GridShare Guwahati microgrid.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
    ["Total generation", `${fmt(communityStats.generation)} kWh`, Sun9],
    ["Total consumption", `${fmt(communityStats.consumption)} kWh`, Home9],
    ["Active users", houses.length, Users2],
    ["Active trades", marketStats.sellers, Store3],
    ["Total energy traded", `${fmt(transactions.reduce((s, t) => s + t.energyAmount, 0))} kWh`, Zap5],
    ["System health", "Nominal", ShieldCheck2]
  ].map(([l, v, Icon]) => <div key={l} className="bg-white border border-stone-100 rounded-2xl p-5 flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-lg font-bold text-stone-800 font-mono">{v}</p>
              <p className="text-[11px] text-stone-400">{l}</p>
            </div>
          </div>)}
      </div>
    </div>;
}

// src/App.jsx
function App() {
  const [screen, setScreen] = useState10("landing");
  const [role, setRole] = useState10("member");
  const [active, setActive] = useState10("dashboard");
  const [mobileOpen, setMobileOpen] = useState10(false);
  const [notifOpen, setNotifOpen] = useState10(false);
  const [houses] = useState10(INITIAL_HOUSES);
  const [listings, setListings] = useState10(INITIAL_LISTINGS);
  const [transactions, setTransactions] = useState10([
    { id: "T0", type: "sold", energyAmount: 3, pricePerKwh: 6.5, totalAmount: 19.5, timestamp: Date.now() - 864e5, buyerHouse: 217, sellerHouse: 104 },
    { id: "T1", type: "bought", energyAmount: 1.5, pricePerKwh: 6.2, totalAmount: 9.3, timestamp: Date.now() - 3 * 36e5, buyerHouse: 104, sellerHouse: 309 }
  ]);
  const [notifications, setNotifications] = useState10([
    { id: "N1", icon: "\u2600\uFE0F", text: "Solar generation is currently high.", time: Date.now() - 20 * 6e4, read: false },
    { id: "N2", icon: "\u{1F4C8}", text: "Energy market price increased to \u20B96.80/kWh.", time: Date.now() - 60 * 6e4, read: false },
    { id: "N3", icon: "\u{1F331}", text: "You reached 50 kg CO\u2082 savings.", time: Date.now() - 5 * 36e5, read: true }
  ]);
  const [toasts, setToasts] = useState10([]);
  const [user, setUser] = useState10({
    ...INITIAL_HOUSES[0],
    mySurplus: Math.max(0, +(INITIAL_HOUSES[0].generation - INITIAL_HOUSES[0].consumption).toFixed(1)),
    todaysEarnings: 18.9
  });
  const [live, setLive] = useState10({ generation: 8.42, consumption: 5.71, surplus: 2.71, gridDependency: 31 });
  const [liveTime, setLiveTime] = useState10((/* @__PURE__ */ new Date()).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }));
  const [sellModal, setSellModal] = useState10(false);
  const [buyListing, setBuyListing] = useState10(null);
  const [houseModal, setHouseModal] = useState10(null);
  useEffect3(() => {
    const iv = setInterval(() => {
      setLive((prev) => {
        const gen = Math.max(1, +(prev.generation + (Math.random() - 0.5) * 0.6).toFixed(2));
        const cons = Math.max(1, +(prev.consumption + (Math.random() - 0.5) * 0.4).toFixed(2));
        const surplus = Math.max(0, +(gen - cons).toFixed(2));
        const gridDependency = Math.max(8, Math.min(60, Math.round(prev.gridDependency + (Math.random() - 0.5) * 4)));
        return { generation: gen, consumption: cons, surplus, gridDependency };
      });
      setLiveTime((/* @__PURE__ */ new Date()).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }));
    }, 4e3);
    return () => clearInterval(iv);
  }, []);
  const pushToast = useCallback((title, desc) => {
    const id = Math.random().toString(36).slice(2);
    setToasts((t) => [...t, { id, title, desc }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3500);
  }, []);
  const pushNotification = useCallback((icon, text) => {
    setNotifications((n) => [{ id: Math.random().toString(36).slice(2), icon, text, time: Date.now(), read: false }, ...n]);
  }, []);
  const communityStats = useMemo3(() => {
    const listingSurplusDelta = listings.reduce((s, l) => s + l.remainingEnergy, 0) - INITIAL_LISTINGS.reduce((s, l) => s + l.remainingEnergy, 0);
    return {
      generation: 128.6,
      consumption: 94.2,
      surplus: Math.max(0, +(34.4 + listingSurplusDelta).toFixed(1)),
      co2: 21.4,
      homes: houses.length
    };
  }, [houses, listings]);
  const marketStats = useMemo3(() => {
    const activeListings = listings.filter((l) => l.remainingEnergy > 0.05);
    const available = activeListings.reduce((s, l) => s + l.remainingEnergy, 0);
    const avgPrice = activeListings.length ? activeListings.reduce((s, l) => s + l.pricePerKwh, 0) / activeListings.length : 6.42;
    const demand = available < 20 ? "High" : available < 35 ? "Medium" : "Low";
    return { available, sellers: activeListings.length, avgPrice, demand };
  }, [listings]);
  const marketPrice = useMemo3(() => {
    const base = 6;
    const supplyFactor = Math.max(0.5, 1 - marketStats.available / 60);
    return +(base + supplyFactor * 1.4).toFixed(2);
  }, [marketStats.available]);
  function handleSell({ amount, price, duration }) {
    const newListing = {
      id: `L${Date.now()}`,
      sellerId: user.id,
      houseNumber: user.houseNumber,
      energyAmount: amount,
      remainingEnergy: amount,
      pricePerKwh: price,
      source: user.energySource,
      distance: 0,
      status: "active",
      createdAt: Date.now(),
      duration
    };
    setListings((l) => [newListing, ...l]);
    setUser((u) => ({ ...u, mySurplus: +(u.mySurplus - amount).toFixed(1) }));
    setSellModal(false);
    pushToast("Energy listed", `${fmt(amount)} kWh at ${inr(price)}/kWh is now live in the Energy Market.`);
    pushNotification("\u26A1", `Your listing of ${fmt(amount)} kWh at ${inr(price)}/kWh went live.`);
  }
  function handleBuy({ qty, total }) {
    const listing = buyListing;
    setListings(
      (ls) => ls.map((l) => l.id === listing.id ? { ...l, remainingEnergy: Math.max(0, +(l.remainingEnergy - qty).toFixed(1)) } : l)
    );
    setTransactions((ts) => [
      {
        id: `T${Date.now()}`,
        type: "bought",
        energyAmount: qty,
        pricePerKwh: listing.pricePerKwh,
        totalAmount: +total.toFixed(2),
        timestamp: Date.now(),
        buyerHouse: user.houseNumber,
        sellerHouse: listing.houseNumber
      },
      ...ts
    ]);
    setUser((u) => ({ ...u, balance: +(u.balance - total).toFixed(2) }));
    setBuyListing(null);
    pushToast("Energy purchase completed \u26A1", `You bought ${fmt(qty)} kWh from House #${listing.houseNumber} for ${inr(total)}.`);
    pushNotification("\u26A1", "Your energy listing was purchased.");
    setTimeout(() => pushNotification("\u{1F4B0}", `You earned ${inr(total)}.`), 600);
  }
  function markNotifRead(id) {
    setNotifications((n) => n.map((x) => x.id === id ? { ...x, read: true } : x));
  }
  function handleLogin(r) {
    setRole(r);
    setActive("dashboard");
    setScreen("app");
  }
  if (screen === "landing") {
    return <Landing onDemo={() => setScreen("login")} onMarket={() => setScreen("login")} />;
  }
  if (screen === "login") {
    return <Login onLogin={handleLogin} />;
  }
  return <div className="min-h-screen bg-stone-50 flex">
      <Sidebar active={active} setActive={setActive} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      <div className="flex-1 min-w-0 flex flex-col" onClick={() => notifOpen && setNotifOpen(false)}>
        <TopBar
    onMenu={() => setMobileOpen(true)}
    notifications={notifications}
    notifOpen={notifOpen}
    onOpenNotifications={(e) => {
      e.stopPropagation();
      setNotifOpen((o) => !o);
    }}
    onMarkRead={markNotifRead}
    user={user}
    liveTime={liveTime}
  />

        <main className="flex-1 px-4 sm:px-6 py-6 pb-24 lg:pb-6 max-w-7xl w-full mx-auto">
        <div key={active} className="anim-fade-up">
          {role === "admin" && active === "dashboard" ? <AdminPage houses={houses} transactions={transactions} communityStats={communityStats} marketStats={marketStats} /> : active === "dashboard" ? <DashboardPage
    user={user}
    live={live}
    communityStats={communityStats}
    onSell={() => setSellModal(true)}
    price={marketPrice}
    demand={marketStats.demand}
  /> : active === "market" ? <MarketPage listings={listings} onBuy={setBuyListing} marketStats={{ ...marketStats, avgPrice: marketPrice }} /> : active === "myenergy" ? <MyEnergyPage user={user} onSell={() => setSellModal(true)} /> : active === "transactions" ? <TransactionsPage transactions={transactions} /> : active === "community" ? <CommunityPage houses={houses} communityStats={communityStats} onSelectHouse={setHouseModal} /> : active === "impact" ? <ImpactPage user={user} /> : active === "profile" ? <ProfilePage
    user={user}
    communityStats={communityStats}
    role={role}
    onLogout={() => {
      setScreen("landing");
      setActive("dashboard");
    }}
  /> : null}
        </div>
        </main>
      </div>

      <BottomNav active={active} setActive={setActive} />

      {sellModal && <SellModal user={user} onClose={() => setSellModal(false)} onSubmit={handleSell} />}
      {buyListing && <BuyModal listing={buyListing} onClose={() => setBuyListing(null)} onSubmit={handleBuy} />}
      {houseModal && <HouseModal house={houseModal} onClose={() => setHouseModal(null)} />}

      <ToastStack toasts={toasts} />
    </div>;
}

const GRIDSHARE_STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');

.font-display { font-family: 'Space Grotesk', sans-serif; }
.font-body { font-family: 'Inter', sans-serif; }
.font-mono { font-family: 'IBM Plex Mono', monospace; }

@keyframes fadeUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes scaleSpring { 0% { opacity: 0; transform: scale(0.9) translateY(12px); } 60% { opacity: 1; transform: scale(1.02) translateY(-2px); } 100% { opacity: 1; transform: scale(1) translateY(0); } }
@keyframes slideInRight { from { opacity: 0; transform: translateX(28px) scale(0.97); } to { opacity: 1; transform: translateX(0) scale(1); } }
@keyframes floatSlow { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(14px, -18px) scale(1.05); } }
@keyframes floatSlow2 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(-18px, 16px) scale(1.08); } }
@keyframes glowPulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(16,185,129,0.35); } 50% { box-shadow: 0 0 0 8px rgba(16,185,129,0); } }
@keyframes ringPulse { 0% { transform: scale(0.9); opacity: 0.9; } 70% { transform: scale(1.9); opacity: 0; } 100% { opacity: 0; } }
@keyframes nodeGlow { 0%, 100% { box-shadow: 0 0 0 0 rgba(16,185,129,0); } 50% { box-shadow: 0 0 14px 2px rgba(16,185,129,0.35); } }
@keyframes flowH { 0% { left: -4%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { left: 104%; opacity: 0; } }
@keyframes flowV { 0% { top: -4%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 104%; opacity: 0; } }
@keyframes wiggle { 0%, 100% { transform: rotate(0deg); } 20% { transform: rotate(-14deg); } 40% { transform: rotate(12deg); } 60% { transform: rotate(-8deg); } 80% { transform: rotate(6deg); } }
@keyframes shrinkWidth { from { width: 100%; } to { width: 0%; } }
@keyframes bounceIcon { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-3px) rotate(-6deg); } }
@keyframes confettiFall { 0% { transform: translateY(0) rotate(0deg); opacity: 1; } 100% { transform: translateY(120px) rotate(540deg); opacity: 0; } }

.anim-fade-up { animation: fadeUp 0.5s cubic-bezier(0.22,1,0.36,1) both; }
.anim-fade-in { animation: fadeIn 0.35s ease-out both; }
.anim-scale-spring { animation: scaleSpring 0.45s cubic-bezier(0.22,1,0.36,1) both; }
.anim-slide-right { animation: slideInRight 0.3s cubic-bezier(0.22,1,0.36,1) both; }
.anim-float-slow { animation: floatSlow 9s ease-in-out infinite; }
.anim-float-slow2 { animation: floatSlow2 11s ease-in-out infinite; }
.anim-glow-pulse { animation: glowPulse 2.2s ease-out infinite; }
.anim-bounce-icon:hover svg { animation: bounceIcon 0.5s ease-in-out; }

.card-interactive { transition: transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s ease, border-color 0.25s ease; }
.card-interactive:hover { transform: translateY(-3px); box-shadow: 0 16px 32px -12px rgba(6,95,70,0.18); }

.btn-press { transition: transform 0.15s ease, box-shadow 0.2s ease, background-color 0.2s ease; }
.btn-press:active { transform: scale(0.96); }

.ring-ping { animation: ringPulse 2s cubic-bezier(0,0,0.2,1) infinite; }
`;

function GridShareStyledRoot() {
  return (
    <>
      <style>{GRIDSHARE_STYLES}</style>
      <App />
    </>
  );
}

export default GridShareStyledRoot;
