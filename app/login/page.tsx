"use client";
import { Suspense, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './page.module.css';
import { useAuth } from '../context/AuthContext';

const dashboardByRole = {
  client: '/client/dashboard',
  librarian: '/librarian/dashboard',
} as const;

function BookIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H7a3 3 0 0 0-3 3z" />
      <path d="M4 5.5v16" />
      <path d="M8 7h8" />
    </svg>
  );
}

function EyeIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export default function Login() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  async function handleSubmit() {
    setError('');
    setIsSubmitting(true);
    const result = await login(email, password);
    setIsSubmitting(false);

    if (!result.success) {
      setError(result.message ?? 'Invalid email or password.');
      return;
    }

    const next = searchParams.get('next');
    router.push(next ?? dashboardByRole[result.user?.role as keyof typeof dashboardByRole] ?? '/');
  }

  return (
    <main className="min-h-screen bg-white text-on-surface font-body-md flex items-center justify-center ">
      <section className="w-full min-h-screen flex flex-col md:flex-row overflow-hidden bg-white">
        <aside className="hidden md:flex md:w-1/2 relative overflow-hidden bg-slate-950 items-center justify-center p-xl">
          <div className="absolute inset-0 z-0">
            <img
              alt="Sunlit library interior"
              className="w-full h-full object-cover opacity-50"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6lSZEK4cMq_ol8e8RF7GgJ2Do00fxBxl5xIBb8kUFfZJ2RxDLPKfSxgDZMPEbUdpVTFImEhJ5TAxFaQhCOMUSuNZ6RQ3jLOeh1hMI7JNHxk_l0JiSiZj_bDsQca1aoVrQpnmb58cnbeMI358L1OULkINLGIwURs2LI7-Qh49trlvc0tAZPhHyQu9_MnBrT7ZmRMjsGmsp6tls4-VMYr7JXmv3S9kiNCaC22mmz4Khhe-gYdtQamaox4VHLthyl0uwOozJPBEbGeY"
            />
            <div className={`absolute inset-0 ${styles.readingGradient}`} />
          </div>
          <div className="relative z-10 max-w-md text-white">
            <div className="mb-lg text-primary">
              <BookIcon className="h-9 w-9" />
            </div>
            <h1 className="font-serif text-[48px] leading-tight font-semibold tracking-tighter mb-md text-white">
              Lumina Lexicon
            </h1>
            <p className="font-body-lg text-white/80 leading-relaxed">
              Step into a curated sanctuary for the modern mind. Experience reading as it was meant to be: focused, elegant, and illuminating.
            </p>
            <div className="mt-xl flex gap-base items-center">
              <div className="flex -space-x-2 gap-2.5">
                <img
                  alt="user"
                  className="h-10 w-10 rounded-full border-2 border-white"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp7nMXqDqhC1ByD6gd9RoezM4AJbdZktIDHyYggabpCXmje-1S3cSV8dLR0R_b4F51IFSD-IYDaAYoSvSTgTYMXRTqRuvRiMFlrtUw7-qYJlKlhPHPKoi7An9X3Zy2cC5ipmip4y_dy58MyKhNxRtJwb2gt5zOvaOo_9UjUbBPntXNg-ryqp4u7TGXoVFFuDYywPRjb1S-vbhAULW9QnX98Y1F1zsLGHtQ0z_NxBDv1VMdl-fgbpMICJLCSewk12J0ITECpNGpiOU"
                />
                <img
                  alt="user"
                  className="h-10 w-10 rounded-full border-2 border-white"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnO3sYpemE8z-YPSiOu1Xfy2srOvBb_DvUICgEfE5qwXQCyxFl5LBsxOODLKsxinao6rOabmjrdDKIgtuXbmCq9gOR3fQ6fDlIn6rV9_sgqtqqCjXDGm2h7ksB3J_4zWNyIZPmwxo-tKXPi3wu760AgHSX6F_RfoUOhZyC1qoYc4VDb82IJc_XAeixYoOvpN9vLmwzoNKFBAIfs7s0Pamf4WQkJOz8dzqgt23q0jJ-p65AToTWAU"
                />
                <img
                  alt="user"
                  className="h-10 w-10 rounded-full border-2 border-white"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-M7qeUYCoRJHOcWQ1bmkzAqgSu-MIbeSOSwVCMaQ3yaDA34mXUzrsUrup_oOMWMdKpblw4SXPj5OW9NN9FAEWad9wJ2aU74VhfrYljO5daDW5vb4loN_hiwUwoBireWHET2ggUqIxdo-pT71vBLNHvv_GP4QPDHDpy4wjfkGJVhoSWKufafqMsdkWS2rRTyVS2GbTNGbR2WlGH5t74Ctd0bqg5mFglzv6I-LxXcPQ5-9JC2vhyPr-zEFIHpzj0gTG13KXls6g-KM"
                />
              </div>
              <span className="text-caption text-white/70 font-medium uppercase tracking-widest ml-sm">
                Joined by 12k+ Readers
              </span>
            </div>
          </div>
        </aside>

        <section className="flex-1 flex items-center justify-center p-margin_mobile md:p-margin_desktop bg-white text-black ">
            <div className="w-full max-w-lg flex flex-col gap-3 px-6 py-8 md:px-10 md:py-10 ">
                <div className="md:hidden flex flex-col items-center mb-md">
                <span className="mb-xs text-primary">
                    <BookIcon className="h-8 w-8" />
                </span>
                <h2 className="font-serif text-h1 text-primary tracking-tighter">Lumina Lexicon</h2>
                </div>

                <div className="space-y-3">
                <h2 className="font-h1 text-h1 text-zinc-950 tracking-tight">Welcome back</h2>
                <p className="font-body-md text-zinc-500">Enter your credentials to access your library.</p>
                </div>
            <form
              className="flex flex-col gap-6 w-full items-center   mt-sm"
              onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}
            >
                {error ? (
                  <p className="w-full rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                    {error}
                  </p>
                ) : null}
                <div className="flex flex-col gap-2 w-full">
                    <label className="font-label-md text-zinc-500" htmlFor="email">
                    Email Address
                    </label>
                    <input
                    onChange={(e)=> {setEmail(e.target.value)}}
                    className="w-full px-4 text-black py-3 bg-surface-container-low rounded-2xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none text-on-surface font-body-md"
                    id="email"
                    placeholder="name@domain.com"
                    type="email"
                    value={email}
                    />
                </div>

                <div className="flex flex-col gap-2 w-full">
                    <div className="flex justify-between items-center gap-2">
                        <label className="font-label-md text-zinc-500" htmlFor="password">
                            Password
                        </label>
                        <a className="font-label-md text-blue-400 text-primary hover:underline" href="#">
                        Forgot?
                        </a>
                    </div>
                <div className="relative gap-2 flex items-center flex-col">
                  <input onChange={(e)=>{setPassword(e.target.value)}}
                    className="w-full text-black px-4 py-3 bg-surface-container-low rounded-2xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none text-on-surface font-body-md"
                    id="password"
                    placeholder="••••••••"
                    type="password"
                    value={password}
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant" type="button" >
                    <EyeIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <button
                className="w-full py-4 bg-gradient-to-r from-[#1a1f38] to-[#3b44a8] text-white font-bold font-label-md rounded-2xl shadow-[0_16px_32px_rgba(59,68,168,0.35)] transition-all duration-200 hover:from-[#232a4a] hover:to-[#4d57c4] hover:shadow-[0_20px_40px_rgba(59,68,168,0.45)] active:scale-[0.98] disabled:opacity-60 disabled:hover:from-[#1a1f38] disabled:hover:to-[#3b44a8]"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Signing in…' : 'Sign In to My Library'}
              </button>

              <p className="text-caption text-zinc-400 text-center">
                Demo: client@lumina.com / client123 · librarian@lumina.com / librarian123
              </p>
            </form>

            <div className="relative flex items-center py-sm mt-3.5">
              <div className="flex-grow border-t border-outline-variant" />
              <span className="flex-shrink mx-4 text-caption text-zinc-500 font-medium uppercase tracking-widest">OR CONTINUE WITH</span>
              <div className="flex-grow border-t border-outline-variant" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-xs py-3 border border-outline-variant rounded-2xl hover:bg-surface-container-low transition-colors active:scale-[0.98]">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span className="font-label-md">Google</span>
              </button>
              <button className="flex items-center justify-center gap-xs py-3 border border-outline-variant rounded-2xl hover:bg-surface-container-low transition-colors active:scale-[0.98]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.365 1.43c0 1.14-.462 2.24-1.213 3.05-.83.9-2.183 1.6-3.297 1.51-.146-1.1.44-2.26 1.19-3.03.83-.86 2.28-1.5 3.32-1.53zM20.6 17.06c-.55 1.27-.81 1.84-1.52 2.96-.99 1.56-2.39 3.5-4.13 3.51-1.54.02-1.94-1-4.03-.99-2.1.01-2.53 1.01-4.07.99-1.74-.02-3.06-1.77-4.05-3.32-2.78-4.32-3.07-9.4-1.35-12.1 1.21-1.94 3.12-3.08 4.92-3.08 1.83 0 2.98 1 4.5 1 1.47 0 2.36-1 4.5-1 1.6 0 3.31.87 4.53 2.38-3.98 2.18-3.34 7.86.7 9.65z" />
                </svg>
                <span className="font-label-md">Apple</span>
              </button>
            </div>

            <div className="mt-md text-center">
              <p className="font-body-md text-zinc-500">
                New to Lumina?{' '}
                <Link className="text-primary font-semibold hover:underline" href="/register">
                  Join the collective
                </Link>
              </p>
            </div>

            <footer className="mt-xl text-center md:text-left">
              <p className="text-caption text-zinc-400">
                © 2024 Lumina Lexicon. All rights reserved.
                <br className="md:hidden" />
                <a className="hover:text-zinc-600 underline decoration-outline-variant" href="#">
                  Privacy
                </a>{' '}
                •
                <a className="hover:text-zinc-600 underline decoration-outline-variant" href="#">
                  Terms
                </a>
              </p>
            </footer>
          </div>
        </section>
      </section>
    </main>
  );
}
