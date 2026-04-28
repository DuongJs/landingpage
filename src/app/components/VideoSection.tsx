import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'Gợi ý cách trình bày CV cho sinh viên chưa có nhiều kinh nghiệm',
  'Nhấn mạnh các hoạt động, kỹ năng và minh chứng liên quan',
  'Giúp hồ sơ thực tập nhìn rõ ràng, dễ theo dõi hơn',
  'Phù hợp để sinh viên tham khảo trước khi hoàn thiện hồ sơ',
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
              Chuẩn bị CV và hồ sơ{' '}
              <span className="text-blue-400">thực tập chỉn chu</span>
            </h2>
            <p className="text-blue-200 text-base leading-relaxed mb-8">
              Một video tham khảo ngắn gọn về cách viết CV cho sinh viên, giúp bạn có thêm góc nhìn khi sắp xếp kinh nghiệm, kỹ năng và minh chứng trong hồ sơ thực tập.
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
                src="https://www.youtube.com/embed/dDMkDfLXeOQ"
                title="Cách viết CV xin việc cho sinh viên khi chưa có kinh nghiệm"
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
