import styles from './page.module.css';

const continueBooks = [
  {
    title: 'The Architecture of Silence',
    author: 'Elena Richardson',
    percent: '65% Completed',
    pagesLeft: '120 pages left',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAU7f1990LQvXn9PnzXFunG5XKyoPSnNLj6WSfX35tI0AQ3robaNTrd7xFoAFiABMt9cWNSx-R6KWaJ_YrPRN-yjXLONYyy0bGEYjxBSFL8yLbEXkuMugmN8tWjDEGySJCpf1WsGmFHRwJUto8JvxHwKy6IKvFQAMeeUhEKXKi3nvdjpAhPmOKODed_7HT3f_sbzz2AJxp41uh8qq5SEoDl-pWL9_MyY58I5VkfEhiFSzNiTvXlThrnKLncKjXNNXKnKmDcB3zaGA0',
    progress: 'w-[65%]',
  },
  {
    title: 'Natural Philosophy',
    author: 'Dr. Marcus Thorne',
    percent: '28% Completed',
    pagesLeft: '314 pages left',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBV023z4DC1rUvoxmwtwTu3UkCZN4QSzzISt-UDJ1_KXX_d2aClDSSHpcYaFgwSpTaf6zYQCeLqtsUVy2hIY8KKN2e_fHpulHjgEiMnK5elOuKurmnq8c3poXayTNcPrT-ow-lU3khOve-9AOAzCxbcqh4yFkAQWNiareOdQdG1x8xx3u56XbVbUI-gvpxB7rGEihUiZZ5ifOqTCcTadhX1YkVQfifzQJvltDjsosKH3yLGVoVZb5DsdoalzckMErUSDYWaOfHf-p0',
    progress: 'w-[28%]',
  },
  {
    title: 'Ethereal Perspectives',
    author: 'Sarah Jenkins',
    percent: '92% Completed',
    pagesLeft: '12 pages left',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCx8CNzFOhWqxiCqAUYujzKljUwU3NmnVb3VZHQnSVgWf7S8s9ANfPac7PtEM7KyI364aBYNLLJShBfU4udo4kbTLy0W2toITtrA6QDngFi-oBwCsc3kmvTkexbw02D0AdaaHELtxJ3tWfbrG1JImPC6RJdE1RirqaDT4zhYd3a1YmPC6RJdE1RirqaDT4zhYd3a1YmPC6RJdE1RirqaDT4zhYd3a1YmPC6RJdE1RirqaDT4zhYd3a1YmPC6RJdE1RirqaDT4zhYd3a1YmPC6RJdE1RirqaDT4zhYd3a7Q3Zopu26Ero-feX8TTee7nsKBMg3RJdeMByjWPj3wCvga-wZiwn2AVVhAhQf2A11K_tb6eju5E',
    progress: 'w-[92%]',
  },
];

const recommendedBooks = [
  {
    title: 'The Quiet Room',
    category: 'Philosophy',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ4o66mZYib22uHkaI27dSNpb63CvJEIXtFyLHf6DcKAds_XhvIsxJMbmZ1W_ilDhIBSiFgwWB41zo6qflriUy53ftleBYtFPrg28JSu3lMLdNTUVFhYsn1JS3TwGNniLNOCy3MntlxMLi-cYks9WQDFmjcF3PcFkYPrvtDuyRtVJIKkIjEmuMP1MIvV9TFIK_tM4QiDOmrwKZazs1Wwl-pmQ-Ni5XiuM0X6H7AqQIZiggR2VKkDKXSyuPw-0V3JlDGvHd8_amny0',
  },
  {
    title: 'London After Dark',
    category: 'History',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDC0WT_QNNPi7ShUbXTjKVKYR0UmU10rIFcyL-7BOQJPPUjmabq4chIDqGhV6qRMJhtxXlCJHZs4jNo4J4zmd6ugIzBnWHstcZyeLvv93J-0fO9TNC-12NJFmt9oM0ik2po66SGbRSm7gMuHTfOT7aSq8i-7aJ6N_u0f_J6e12iQ0mCc8nxbEC9xN8OiBNpBp6pYaVps4AOLsKdk13NTcFyr00nmYEjW-SPPiEYNO__GX7xJEORfeo0k1EC_qJVIA0D0oG5F4APO8k',
  },
  {
    title: 'Zenith',
    category: 'Science Fiction',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGqNLguaac6uAtS9-uRAx2NePD03761dRd3yinuQpxYwcztYKRTVMJQJRfu1ldmDtkspdn6gVDeZSrTdKNsU3J1udDdzmPYAChfY6OoSQhmpFZZXOEcrZLph4y3qUmnPX93fCvH5wTrKEUWnNdvumt5mgT_NXcnrXVvVwPQOygqRJ3J-MJcDKr7yRkbuVBA6hZMw9GJhMCrMQ6i6oK2uameMQXgdxPVrESxbiWMIJhPXDuf5AhRkZUp17FIedpAYy-Paazc9Dkg80',
  },
  {
    title: 'Paper Trails',
    category: 'Memoir',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYrMszM4wPCj6Hj9dY8PO-J1d2IM2Buv7mOZ1luJ1oYKuqslB7g0jiD5Ai-jdscymOm3Na9UB13Zg5QDyPK3v_JCBnOf21T2MXCDmtmy8OCyMVS-oWFr9Zh6iPiWmFT179n-npmgbWZbu6eEusfAEB6nUAF02VcZbIgNuLHdouDZw60FDrbMrTcxIAlN5w-n1xyW_hl9UdEZRpPHh1q1Kr4fcZhx33qOSBZQcD1sZV0UsFTv90IS_AwdlwvtQT-tw-BGx1j0nr3vE',
  },
];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-surface-bright font-body-md text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
      <header className="bg-white border-b border-zinc-100 shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <div className="font-serif text-2xl font-semibold text-zinc-900 tracking-tighter">Atrium Verborum Books</div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex bg-surface-container-low px-4 py-2 rounded-full items-center gap-2 border border-outline-variant/30">
              <span className="material-symbols-outlined text-on-surface-variant text-[20px]">search</span>
              <input
                className="bg-transparent border-none focus:ring-0 text-sm w-48 font-label-md"
                placeholder="Search your library..."
                type="text"
              />
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-full hover:bg-zinc-50 transition-colors active:opacity-80 active:scale-[0.99]">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="p-2 rounded-full hover:bg-zinc-50 transition-colors active:opacity-80 active:scale-[0.99]">
                <span className="material-symbols-outlined">account_circle</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <nav className="hidden md:flex flex-col fixed left-0 top-0 h-full p-4 gap-2 bg-zinc-50 border-r border-zinc-100 z-40 pt-24 w-64">
        <div className="mb-8 px-2">
          <p className="font-serif text-xl font-bold text-zinc-900 mb-1">Library Member</p>
          <p className="font-sans text-sm tracking-wide text-zinc-500">Premium Reader</p>
        </div>
        <div className="flex flex-col gap-1">
          <a className="flex items-center gap-3 px-4 py-3 bg-white text-zinc-900 font-semibold rounded-lg shadow-sm translate-x-1 duration-150" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-sans text-sm tracking-wide">Dashboard</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-all" href="#">
            <span className="material-symbols-outlined">auto_stories</span>
            <span className="font-sans text-sm tracking-wide">Book Store</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-all" href="#">
            <span className="material-symbols-outlined">store_mall_directory</span>
            <span className="font-sans text-sm tracking-wide">Locations</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-all" href="#">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-sans text-sm tracking-wide">Settings</span>
          </a>
        </div>
      </nav>

      <div className="pt-24 pb-24 md:pb-8 md:pl-64 min-h-screen">
        <div className="px-margin_mobile md:px-margin_desktop max-w-6xl mx-auto space-y-xl">
          <section className="mt-8">
            <h1 className="font-h1 text-h1 text-primary">Good morning, Julian.</h1>
            <p className="font-body-md text-on-surface-variant mt-2 max-w-xl">
              Welcome back to your Atrium Verborum. Your current reading session is waiting for you.
            </p>
          </section>

          <section>
            <div className="flex items-end justify-between mb-md">
              <h2 className="font-h2 text-h2 text-primary">Library Overview</h2>
              <span className="font-label-md text-secondary border-b border-secondary/20 cursor-pointer">View full reports</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              <div className="bg-surface-container-lowest p-md rounded-xl border border-outline-variant/20 shadow-[0_4px_12px_rgba(0,0,0,0.03)] group hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary-container/10 rounded-lg text-primary">
                    <span className="material-symbols-outlined">payments</span>
                  </div>
                  <span className="font-label-md text-on-surface-variant">Total Sales</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <p className="text-h1 font-h1">$24,850</p>
                  <span className="text-caption text-emerald-600 font-medium">+12%</span>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-md rounded-xl border border-outline-variant/20 shadow-[0_4px_12px_rgba(0,0,0,0.03)] group hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-secondary-container/30 rounded-lg text-secondary">
                    <span className="material-symbols-outlined">group</span>
                  </div>
                  <span className="font-label-md text-on-surface-variant">Active Users</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <p className="text-h1 font-h1">1,204</p>
                  <span className="text-caption text-emerald-600 font-medium">+4.5%</span>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-md rounded-xl border border-outline-variant/20 shadow-[0_4px_12px_rgba(0,0,0,0.03)] group hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-tertiary-fixed/30 rounded-lg text-tertiary">
                    <span className="material-symbols-outlined">inventory_2</span>
                  </div>
                  <span className="font-label-md text-on-surface-variant">Books in Stock</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <p className="text-h1 font-h1">8,432</p>
                  <span className="text-caption text-secondary font-medium">Updated daily</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-end justify-between mb-md">
              <h2 className="font-h2 text-h2 text-primary">Continue Reading</h2>
              <div className="flex gap-2">
                <button className="p-2 rounded-full border border-outline-variant/30 hover:bg-white transition-colors">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="p-2 rounded-full border border-outline-variant/30 hover:bg-white transition-colors">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
            <div className={`flex gap-md overflow-x-auto ${styles.hideScrollbar} pb-4 snap-x`}>
              {continueBooks.map((book) => (
                <div key={book.title} className="min-w-[280px] md:min-w-[320px] snap-start group">
                  <div className="aspect-[2/3] rounded-xl overflow-hidden mb-sm relative shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-white/10">
                    <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={book.image} alt={book.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-md">
                      <button className="w-full py-3 bg-white text-primary rounded-full font-label-md shadow-lg active:scale-95 transition-transform">
                        Resume Reading
                      </button>
                    </div>
                  </div>
                  <p className="font-label-md text-on-surface truncate">{book.title}</p>
                  <p className="text-caption text-on-surface-variant mb-3">By {book.author}</p>
                  <div className="w-full h-1 bg-surface-container-high rounded-full overflow-hidden">
                    <div className={`h-full bg-primary ${book.progress} rounded-full`} />
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-caption text-on-surface-variant">{book.percent}</span>
                    <span className="text-caption text-secondary font-medium">{book.pagesLeft}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="pb-xl">
            <div className="flex items-end justify-between mb-md">
              <h2 className="font-h2 text-h2 text-primary">Curated for You</h2>
              <span className="font-label-md text-secondary cursor-pointer hover:text-primary transition-colors">Explore Library</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
              {recommendedBooks.map((card) => (
                <div key={card.title} className="group cursor-pointer">
                  <div className="aspect-[3/4] bg-surface-container-low rounded-xl mb-sm p-4 flex flex-col justify-between border border-outline-variant/10 group-hover:border-primary/20 transition-all">
                    <div className="w-full aspect-[2/3] shadow-md rounded-xl overflow-hidden">
                      <img className="w-full h-full object-cover" alt={card.title} src={card.img} />
                    </div>
                    <div className="mt-2">
                      <p className="font-label-md text-primary leading-tight">{card.title}</p>
                      <p className="text-caption text-on-surface-variant mt-1">{card.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pt-3 pb-8 bg-white/90 backdrop-blur-md z-50 rounded-t-2xl shadow-[0_-4px_12px_rgba(0,0,0,0.04)] border-t border-zinc-100">
        <a className="flex flex-col items-center justify-center text-zinc-900 scale-110 active:scale-95 duration-200" href="#">
          <span className="material-symbols-outlined">home</span>
          <span className="text-[10px] uppercase tracking-widest font-medium">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-zinc-400 active:bg-zinc-50 duration-200 rounded-full px-3 py-2" href="#">
          <span className="material-symbols-outlined">menu_book</span>
          <span className="text-[10px] uppercase tracking-widest font-medium">Store</span>
        </a>
        <a className="flex flex-col items-center justify-center text-zinc-400 active:bg-zinc-50 duration-200 rounded-full px-3 py-2" href="#">
          <span className="material-symbols-outlined">location_on</span>
          <span className="text-[10px] uppercase tracking-widest font-medium">Venues</span>
        </a>
        <a className="flex flex-col items-center justify-center text-zinc-400 active:bg-zinc-50 duration-200 rounded-full px-3 py-2" href="#">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] uppercase tracking-widest font-medium">Profile</span>
        </a>
      </nav>

      <button className="fixed bottom-24 right-6 md:bottom-8 md:right-8 bg-primary text-white p-4 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all z-40 flex items-center gap-2 group">
        <span className="material-symbols-outlined">add_circle</span>
        <span className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300 font-label-md">New Reading</span>
      </button>
    </main>
  );
}
