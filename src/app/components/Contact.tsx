import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Facebook, Send, CheckCircle2 } from 'lucide-react';

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'internhub@ulis.vnu.edu.vn',
    href: 'mailto:internhub@ulis.vnu.edu.vn',
  },
  {
    icon: Phone,
    label: 'Điện thoại',
    value: '024 3754 7891',
    href: 'tel:02437547891',
  },
  {
    icon: MapPin,
    label: 'Địa chỉ',
    value: 'Phòng 101, Nhà A – 144 Xuân Thuỷ, Cầu Giấy, Hà Nội',
    href: 'https://maps.google.com',
  },
  {
    icon: Facebook,
    label: 'Fanpage',
    value: 'fb.com/ulisinternhub',
    href: 'https://facebook.com',
  },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    studentId: '',
    classYear: '',
    email: '',
    phone: '',
    note: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-white border-t border-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 bg-blue-100 text-blue-700 font-bold tracking-wider uppercase text-xs mb-4 rounded-full border border-blue-200"
          >
            Liên hệ & Đăng ký
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-4 tracking-tight"
          >
            Sẵn sàng bắt đầu?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-base leading-relaxed"
          >
            Đăng ký tham gia để nhận thông báo sớm nhất về các buổi hướng dẫn, deadline nộp hồ sơ và tài liệu mới nhất.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <div
              className="rounded-3xl p-8 text-white"
              style={{ background: 'linear-gradient(135deg, #2563eb 0%, #6366f1 100%)' }}
            >
              <h3 className="text-xl font-extrabold mb-2 tracking-tight">Thông tin liên lạc</h3>
              <p className="text-blue-100 text-sm mb-8 leading-relaxed">
                Ban tổ chức luôn sẵn sàng hỗ trợ mọi thắc mắc về quy trình và hồ sơ thực tập.
              </p>

              <ul className="space-y-5">
                {contactItems.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/20 border border-white/25 flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-colors">
                        <item.icon className="w-4.5 h-4.5 text-white" />
                      </div>
                      <div>
                        <p className="text-blue-200 text-xs font-semibold uppercase tracking-wide mb-0.5">{item.label}</p>
                        <p className="text-white text-sm font-medium group-hover:text-blue-200 transition-colors leading-snug">{item.value}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: Registration form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-slate-50 rounded-3xl p-8 border border-blue-50">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                    <CheckCircle2 className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-blue-950">Đăng ký thành công!</h3>
                  <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                    Cảm ơn bạn đã đăng ký. Ban tổ chức sẽ liên hệ qua email trong vòng 24 giờ.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', studentId: '', classYear: '', email: '', phone: '', note: '' }); }}
                    className="mt-2 text-sm text-blue-600 font-bold hover:text-indigo-600 transition-colors"
                  >
                    Đăng ký thêm →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h3 className="text-xl font-extrabold text-blue-950 mb-1">Form đăng ký tham gia</h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Họ và tên *</label>
                      <input
                        required
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Nguyễn Văn A"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder:text-slate-300 transition"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Mã sinh viên *</label>
                      <input
                        required
                        name="studentId"
                        value={form.studentId}
                        onChange={handleChange}
                        placeholder="21010123"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder:text-slate-300 transition"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Lớp / Khoá *</label>
                      <input
                        required
                        name="classYear"
                        value={form.classYear}
                        onChange={handleChange}
                        placeholder="K55 Ngôn ngữ Anh"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder:text-slate-300 transition"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Số điện thoại</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="0912 345 678"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder:text-slate-300 transition"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Email *</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="sinhvien@vnu.edu.vn"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder:text-slate-300 transition"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Ghi chú / Câu hỏi</label>
                    <textarea
                      name="note"
                      value={form.note}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Bạn cần hỗ trợ gì thêm?"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder:text-slate-300 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-600 hover:bg-indigo-600 text-white font-bold text-base transition-colors duration-200 shadow-sm shadow-blue-300/40 mt-1"
                  >
                    <Send className="w-4 h-4" />
                    Gửi đăng ký
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
