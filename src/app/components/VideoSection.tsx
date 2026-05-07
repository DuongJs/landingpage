import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'Giới thiệu nhanh các khu vực chính trên website',
  'Hướng dẫn xem tiêu chí, kho hồ sơ mẫu và tài liệu tham khảo',
  'Chỉ cách tìm thông tin liên hệ và gửi form đăng ký hỗ trợ',
  'Phù hợp để sinh viên tham khảo trước khi bắt đầu sử dụng web',
];

export function VideoSection() {
  return (
    <section
      id="video"
      className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-900"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="inline-block px-3 py-1 bg-white/10 text-blue-200 font-bold tracking-wider uppercase text-xs mb-5 rounded-full border border-white/20">
              Video Hướng Dẫn
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Video hướng dẫn{' '}
              <span className="text-blue-400">sử dụng website</span>
            </h2>
            <p className="text-blue-200 text-base leading-relaxed mb-8">
              Một video ngắn gọn hướng dẫn bạn cách sử dụng ULIS InternHub, từ xem tiêu chí, tham khảo kho hồ sơ mẫu đến đăng ký nhận hỗ trợ khi cần.
            </p>

            <ul className="space-y-3">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-blue-100 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: video embed */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.5)] border border-white/10 aspect-video bg-slate-800">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Ih67XlrSPcY"
                title="Video hướng dẫn sử dụng website ULIS InternHub"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Decorative glow */}
            <div className="absolute -inset-4 rounded-3xl bg-blue-600/20 blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
