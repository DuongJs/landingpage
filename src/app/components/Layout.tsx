import { useState, useEffect } from 'react';
import { Facebook, FileText, Mail, MapPin, Menu, MessageCircle, Video, X } from 'lucide-react';
import logoImg from '../../imports/upscalemedia-transformed.png';

const navItems = [
  { href: '#about', label: 'Giới thiệu' },
  { href: '#criteria', label: 'Tiêu chí' },
  { href: '#resources', label: 'Kho hồ sơ' },
  { href: '#video', label: 'Video' },
  { href: '#advice', label: 'Góc chia sẻ' },
  { href: '#contact', label: 'Liên hệ' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-sm shadow-blue-100/50 border-b border-blue-100/60'
            : 'bg-white/70 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-18 py-3 gap-4">

            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 shrink-0 lg:min-w-[230px]">
              <img
                src={logoImg}
                alt="ULIS InternHub logo"
                className="h-11 w-auto object-contain hover:opacity-80 transition-opacity"
              />
              <span className="hidden sm:flex flex-col leading-tight">
                <span className="text-base font-extrabold text-blue-950 tracking-tight">ULIS InternHub</span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-500">Build Your Profile</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center justify-center gap-1">
              {navItems.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center justify-end gap-3 xl:min-w-[190px]">
              <a
                href="#contact"
                className="hidden md:inline-flex px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold hover:bg-indigo-600 transition-colors shadow-sm shadow-blue-300/40 whitespace-nowrap"
              >
                Bắt đầu ngay
              </a>

              {/* Hamburger - mobile and tablet */}
              <button
                onClick={() => setOpen(true)}
                className="xl:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-all"
                aria-label="Mở menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[60] bg-blue-950/40 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[70] w-72 bg-white shadow-2xl transition-transform duration-300 ease-out xl:hidden flex flex-col ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <a href="#home" onClick={() => setOpen(false)} className="flex items-center gap-3">
            <img src={logoImg} alt="ULIS InternHub" className="h-9 w-auto object-contain" />
            <span className="text-base font-extrabold text-blue-950 tracking-tight">ULIS InternHub</span>
          </a>
          <button
            onClick={() => setOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-xl border border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-300 transition-all"
            aria-label="Đóng menu"
          >
            <X className="w-4.5 h-4.5" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-1">
          {navItems.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-all"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <span className="w-6 h-6 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 text-xs font-extrabold shrink-0">
                {i + 1}
              </span>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div className="px-4 pb-8 pt-4 border-t border-slate-100">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block w-full text-center py-3.5 rounded-xl bg-blue-600 hover:bg-indigo-600 text-white font-bold text-base transition-colors shadow-sm shadow-blue-300/40"
          >
            Bắt đầu ngay →
          </a>
          <p className="text-center text-xs text-slate-400 mt-3">
            ULIS InternHub · Build Your Profile.
          </p>
        </div>
      </div>
    </>
  );
}

export function Footer() {
  const footerColumns = [
    {
      title: 'Khám phá',
      links: [
        { label: 'Về ULIS InternHub', href: '#about' },
        { label: 'Hệ thống tiêu chí', href: '#criteria' },
        { label: 'Kho hồ sơ mẫu', href: '#resources' },
        { label: 'Video hướng dẫn', href: '#video' },
      ],
    },
    {
      title: 'Cộng đồng',
      links: [
        { label: 'Góc chia sẻ', href: '#advice' },
        { label: 'Phản hồi sinh viên', href: '#feedback' },
        { label: 'Liên hệ hỗ trợ', href: '#contact' },
      ],
    },
  ];

  const contactLinks = [
    {
      icon: Mail,
      label: 'internhub@ulis.vnu.edu.vn',
      href: 'mailto:internhub@ulis.vnu.edu.vn',
    },
    {
      icon: Facebook,
      label: 'Fanpage ULIS InternHub',
      href: 'https://facebook.com',
    },
    {
      icon: MapPin,
      label: '144 Xuân Thủy, Cầu Giấy, Hà Nội',
      href: 'https://maps.google.com',
    },
  ];

  return (
    <footer
      className="relative overflow-hidden text-slate-300 border-t border-blue-900/20"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #172554 52%, #1e1b4b 100%)' }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:42px_42px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-14 lg:py-16 grid lg:grid-cols-[1.35fr_1fr] gap-12 border-b border-white/10">
          <div>
            <a href="#home" className="inline-flex items-center gap-4 mb-6">
              <img
                src={logoImg}
                alt="ULIS InternHub logo"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
              <span className="flex flex-col leading-tight">
                <span className="text-xl font-extrabold text-white tracking-tight">ULIS InternHub</span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">Build Your Profile</span>
              </span>
            </a>
            <p className="text-base md:text-lg text-slate-300 max-w-xl leading-relaxed">
              Giải pháp toàn diện giúp sinh viên Đại học Ngoại ngữ - ĐHQGHN chuẩn bị hồ sơ thực tập chủ động, khoa học và hiệu quả.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#criteria"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-500 text-white text-sm font-bold hover:bg-blue-400 transition-colors shadow-sm shadow-blue-950/30"
              >
                <FileText className="w-4 h-4" />
                Xem tiêu chí
              </a>
              <a
                href="#video"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/15 bg-white/5 text-white text-sm font-bold hover:bg-white/10 transition-colors"
              >
                <Video className="w-4 h-4" />
                Video hướng dẫn
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-9">
            {footerColumns.map(column => (
              <div key={column.title}>
                <h4 className="font-bold text-white mb-5 text-xs uppercase tracking-widest">{column.title}</h4>
                <ul className="space-y-3 text-sm text-slate-400">
                  {column.links.map(link => (
                    <li key={link.label}>
                      <a href={link.href} className="hover:text-blue-300 transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4 className="font-bold text-white mb-5 text-xs uppercase tracking-widest">Liên hệ</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                {contactLinks.map(item => {
                  const Icon = item.icon;
                  return (
                    <li key={item.label}>
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 hover:text-blue-300 transition-colors">
                        <Icon className="w-4 h-4 mt-0.5 shrink-0 text-blue-300" />
                        <span>{item.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="py-7 text-sm text-slate-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 ULIS InternHub. Được phát triển cho sinh viên ULIS.</p>
          <div className="flex flex-wrap justify-center gap-x-7 gap-y-2">
            <a href="#contact" className="hover:text-white transition-colors">Liên hệ hỗ trợ</a>
            <a href="#resources" className="hover:text-white transition-colors">Kho hồ sơ mẫu</a>
            <a href="#advice" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <MessageCircle className="w-4 h-4" />
              Góc chia sẻ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
