import { motion } from 'motion/react';
import { Target, Compass, Users, Rocket } from 'lucide-react';

const highlights = [
  {
    icon: Target,
    title: 'Tiếp cận thông tin',
    desc: 'Cung cấp đầy đủ tiêu chí hồ sơ, tài liệu mẫu, và minh chứng cần thiết trực quan.',
    accent: 'blue',
  },
  {
    icon: Compass,
    title: 'Xây dựng lộ trình',
    desc: 'Giúp sinh viên tạo ra lộ trình cá nhân hoá và theo dõi tiến độ hoàn thiện sát sao.',
    accent: 'indigo',
  },
  {
    icon: Users,
    title: 'Cộng đồng kết nối',
    desc: 'Trao đổi kinh nghiệm với các anh chị khoá trước và mạng lưới sinh viên ULIS.',
    accent: 'sky',
  },
  {
    icon: Rocket,
    title: 'Chủ động & Hiệu quả',
    desc: 'Giảm thiểu khó khăn thường gặp, biến quá trình chuẩn bị trở nên dễ dàng.',
    accent: 'violet',
  },
];

const accentMap: Record<string, { bg: string; icon: string; tag: string; border: string }> = {
  blue: {
    bg: 'bg-blue-600',
    icon: 'bg-blue-500/30 text-white',
    tag: 'bg-blue-500/20 text-blue-100',
    border: '',
  },
  indigo: {
    bg: 'bg-indigo-100',
    icon: 'bg-indigo-200 text-indigo-700',
    tag: 'bg-indigo-100 text-indigo-600',
    border: 'border border-indigo-100',
  },
  sky: {
    bg: 'bg-sky-50',
    icon: 'bg-sky-200 text-sky-700',
    tag: 'bg-sky-100 text-sky-600',
    border: 'border border-sky-100',
  },
  violet: {
    bg: 'bg-blue-50',
    icon: 'bg-blue-200 text-blue-700',
    tag: 'bg-blue-100 text-blue-600',
    border: 'border border-blue-100',
  },
};

export function About() {
  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #ffffff 0%, #eff6ff 50%, #eef2ff 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 bg-blue-100 text-blue-700 font-bold tracking-wider uppercase text-xs mb-4 rounded-full border border-blue-200"
          >
            Về chúng tôi
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-5 tracking-tight"
          >
            Giải pháp chuyên biệt<br />cho sinh viên ULIS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Nền tảng trực tuyến giúp sinh viên quản lý và hoàn thiện hồ sơ thực tập một cách chủ động nhất.
          </motion.p>
        </div>

        {/* Bento grid — 2 large + 2 smaller */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            const a = accentMap[item.accent];
            const isDark = item.accent === 'blue';
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl p-8 flex flex-col group transition-all hover:-translate-y-1 hover:shadow-lg ${a.bg} ${a.border ?? ''}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${a.icon}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className={`font-bold mb-3 text-xl ${isDark ? 'text-white' : 'text-blue-950'}`}>
                  {item.title}
                </h3>
                <p className={`text-base leading-relaxed ${isDark ? 'text-blue-100' : 'text-slate-600'}`}>
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 grid grid-cols-3 divide-x divide-blue-100 bg-white rounded-2xl border border-blue-100 shadow-sm overflow-hidden"
        >
          {[
            { value: '4', label: 'Nhóm tiêu chí' },
            { value: '16+', label: 'Minh chứng mẫu' },
            { value: '100%', label: 'Miễn phí hoàn toàn' },
          ].map((stat, i) => (
            <div key={i} className="py-8 text-center">
              <div className="text-3xl font-extrabold text-blue-600 mb-1">{stat.value}</div>
              <div className="text-sm font-semibold text-slate-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
