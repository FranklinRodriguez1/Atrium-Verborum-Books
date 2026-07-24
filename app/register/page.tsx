"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register } = useAuth();
  const router = useRouter();

  async function handleSubmit() {
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    setNotice("");
    setIsSubmitting(true);
    const result = await register(name, email, password);
    setIsSubmitting(false);

    if (!result.success) {
      setError(result.message ?? "Could not create your account.");
      return;
    }

    if (result.requiresEmailConfirmation) {
      setNotice(result.message ?? "Check your email to confirm your account before signing in.");
      return;
    }

    router.push("/client/dashboard");
  }

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex items-stretch">

      {/* LEFT SIDE */}
      <div className="hidden md:flex md:w-1/2 relative overflow-hidden bg-primary">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6UHCyq-8Cg52ibjNaR9W38CYKTHaycs38RLVbV47Do7haqLgyroCRy-34_WT5K6IsraqOSlG5RfgJNZ58nQUx91ugYWpcZhCc7_ZdTrjcc46RN1-1ED7mV1Zg4W9n_Bj9NdJj7zSBPHG_nObB1DNDoMeJtus0p4byf2fDOQVdajF21bcpnhFR_8oWRt-iBPRpY7G6h9ehE9PYQIptMsHj2wivaRJQ9b4pWDHTld5KmoMbXVzsJwCOmWx9lnLXlN5wS-4yckRhhFU"
          alt="Library"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />

        <div className="relative z-10 p-12 flex flex-col justify-end h-full">
          <h2 className="font-serif italic text-white text-4xl mb-2">
            Lumina Lexicon
          </h2>
          <p className="text-on-primary-container max-w-md">
            Enter a space where every word matters. Your personal sanctuary for deep reading.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-12 bg-white">
        <div className="w-full max-w-md bg-white rounded-[32px]  border-surface-variant/70 shadow-[0_20px_60px_rgba(15,23,42,0.08)] px-6 py-8 md:px-10 md:py-10">

          {/* TITLE */}
          <div className="mb-10">
            <h1 className="text-3xl font-semibold text-zinc-950 mb-2">
              Create an account
            </h1>
            <p className="text-sm text-zinc-600">
              Join our community of thoughtful readers.
            </p>
          </div>

          {/* SOCIAL */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button className="flex items-center justify-center gap-2 py-3 px-4 border border-outline-variant rounded-2xl bg-surface-container-low text-zinc-700 hover:bg-surface-container-high transition-colors">
              Google
            </button>
            <button className="flex items-center justify-center gap-2 py-3 px-4 border border-outline-variant rounded-2xl bg-surface-container-low text-zinc-700 hover:bg-surface-container-high transition-colors">
              Apple
            </button>
          </div>

          {/* DIVIDER */}
          <div className="relative flex items-center justify-center mb-6">
            <div className="w-full border-t border-surface-variant" />
            <span className="absolute bg-white px-3 text-xs text-zinc-500 uppercase tracking-[0.24em]">
              or register with email
            </span>
          </div>

          {/* FORM */}
          <form className="space-y-5 text-zinc-950" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>

            {error ? (
              <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                {error}
              </p>
            ) : null}

            {notice ? (
              <p className="rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                {notice}
              </p>
            ) : null}

            <div>
              <label className="block text-sm font-medium text-zinc-600 mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Elias Thorne"
                className="w-full px-4 py-3 bg-slate-50 border border-outline-variant rounded-2xl text-zinc-950 focus:border-blue-400 focus:ring-1 focus:ring-blue-400/20 outline-none transition"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-600 mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="elias@lexicon.com"
                className="w-full px-4 py-3 bg-slate-50 border border-outline-variant rounded-2xl text-zinc-950 focus:border-blue-400 focus:ring-1 focus:ring-blue-400/20 outline-none transition"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-zinc-600 mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 bg-slate-50 border border-outline-variant rounded-2xl text-zinc-950 focus:border-blue-400 focus:ring-1 focus:ring-blue-400/20 outline-none transition"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-600 mb-2" htmlFor="confirm-password">
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full px-4 py-3 bg-slate-50 border border-outline-variant rounded-2xl text-zinc-950 focus:border-blue-400 focus:ring-1 focus:ring-blue-400/20 outline-none transition"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <input id="terms" type="checkbox" required className="mt-1 h-4 w-4 rounded border-outline-variant text-blue-400 focus:ring-blue-400" />
              <label htmlFor="terms" className="text-sm text-zinc-600" >
                I agree to the Terms of Service and Privacy Policy.
              </label>
            </div>

            <button
              className="w-full py-4 bg-gradient-to-r from-[#1a1f38] to-[#3b44a8] text-white rounded-2xl font-semibold shadow-[0_16px_32px_rgba(59,68,168,0.35)] transition-all duration-200 hover:from-[#232a4a] hover:to-[#4d57c4] hover:shadow-[0_20px_40px_rgba(59,68,168,0.45)] active:scale-[0.98] disabled:opacity-60 disabled:hover:from-[#1a1f38] disabled:hover:to-[#3b44a8]"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating account…" : "Create Account"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-zinc-500">
            Already have an account?{" "}
            <Link className="text-blue-400 hover:underline" href="/login">
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}
