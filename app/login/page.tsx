import styles from './page.module.css';

export default function Login() {
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
            <div className="mb-lg">
              <span className={`${styles.materialSymbolsOutlined} material-symbols-outlined text-4xl text-primary`}>
                auto_stories
              </span>
            </div>
            <h1 className="font-serif text-[48px] leading-tight font-semibold tracking-tighter mb-md text-white">
              Lumina Lexicon
            </h1>
            <p className="font-body-lg text-white/80 leading-relaxed">
              Step into a curated sanctuary for the modern mind. Experience reading as it was meant to be: focused, elegant, and illuminating.
            </p>
            <div className="mt-xl flex gap-base items-center">
              <div className="flex -space-x-2">
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
            <div className="w-full max-w-lg flex flex-col gap-md rounded-4x1  border-surface-variant/60 bg-white px-6 py-8 shadow-lg md:px-10 md:py-10">
                <div className="md:hidden flex flex-col items-center mb-md">
                <span className={`${styles.materialSymbolsOutlined} material-symbols-outlined text-3xl text-primary mb-xs`}>
                    auto_stories
                </span>
                <h2 className="font-serif text-h1 text-primary tracking-tighter">Lumina Lexicon</h2>
                </div>

                <div className="space-y-3">
                <h2 className="font-h1 text-h1 text-zinc-950 tracking-tight">Welcome back</h2>
                <p className="font-body-md text-zinc-500">Enter your credentials to access your library.</p>
                </div>
            <form className="flex flex-col gap-6 w-full items-center   mt-sm">
                <div className="flex flex-col gap-1 w-full">
                    <label className="font-label-md text-zinc-500" htmlFor="email">
                    Email Address
                    </label>
                    <input
                    className="w-full px-4 text-black py-3 bg-surface-container-low rounded-2xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none text-on-surface font-body-md"
                    id="email"
                    placeholder="name@domain.com"
                    type="email"
                    />
                </div>

                <div className="flex flex-col gap-xs w-full">
                    <div className="flex justify-between items-center gap-2">
                        <label className="font-label-md text-zinc-500" htmlFor="password">
                            Password
                        </label>
                        <a className="font-label-md text-blue-400 text-primary hover:underline" href="#">
                        Forgot?
                        </a>
                    </div>
                <div className="relative gap-2 flex items-center flex-col">
                  <input
                    className="w-full text-black px-4 py-3 bg-surface-container-low rounded-2xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none text-on-surface font-body-md"
                    id="password"
                    placeholder="••••••••"
                    type="password"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant" type="button">
                    <span className="material-symbols-outlined text-[20px]"></span>
                  </button>
                </div>
              </div>

              <button
                className=" w-3xs py-4 bg-blue-400 text-white font-bold font-label-md rounded-2xl shadow-lg shadow-primary/10 hover:bg-primary-container active:scale-[0.98] transition-all duration-200 hover:bg-white hover:text-primary hover:shadow-md hover:text-blue-400"
                type="submit"
              >
                Sign In to My Library
              </button>
            </form>

            <div className="relative flex items-center py-sm mt-3.5">
              <div className="flex-grow border-t border-outline-variant" />
              <span className="flex-shrink mx-4 text-caption text-zinc-500 font-medium uppercase tracking-widest">OR CONTINUE WITH</span>
              <div className="flex-grow border-t border-outline-variant" />
            </div>

            <div className="grid grid-cols-2 gap-gutter">
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
                <span className="material-symbols-outlined text-[20px]">ios</span>
                <span className="font-label-md">Apple</span>
              </button>
            </div>

            <div className="mt-md text-center">
              <p className="font-body-md text-zinc-500">
                New to Lumina?
                <a className="text-primary font-semibold hover:underline" href="#">
                  Join the collective
                </a>
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
