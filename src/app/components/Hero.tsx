import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Users, FileText } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#c7d2fe_1px,transparent_1px)] [background-size:28px_28px] opacity-40"></div>

      {/* Angled color band — NOT a blob, just a sharp diagonal strip */}
      <div
        className="absolute inset-y-0 right-0 w-1/2 pointer-events-none"
        style={{
          background: 'linear-gradient(120deg, transparent 40%, #dbeafe 40%, #e0e7ff 100%)',
          opacity: 0.55,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-extrabold text-blue-950 leading-[1.08] mb-6 tracking-tight">
              Build Your Profile.{' '}
              <span className="text-blue-500">Shape Your Future.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Giải pháp toàn diện giúp sinh viên{' '}
              <span className="whitespace-nowrap">Đại học Ngoại ngữ – ĐHQGHN</span>{' '}
              chuẩn bị hồ sơ thực tập chủ động, khoa học và hiệu quả.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#criteria"
                className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white text-lg font-bold hover:bg-blue-700 hover:-translate-y-0.5 transition-all shadow-[0_6px_24px_rgba(37,99,235,0.35)]"
              >
                Khám phá tiêu chí <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#about"
                className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-700 text-lg font-bold hover:bg-blue-50 border border-blue-200 transition-all shadow-sm"
              >
                Tìm hiểu thêm
              </a>
            </div>

            {/* Quick stats */}
            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-base text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-500" />
                <span>4 Tiêu chí A1–A4</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-500" />
                <span>Kho hồ sơ mẫu</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-500" />
                <span>Cộng đồng ULIS</span>
              </div>
            </div>
          </motion.div>

          {/* Right — image with thin offset frame */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: 'easeOut' }}
            className="relative hidden lg:block ml-auto w-full max-w-lg"
          >
            {/* Thin colored frame offset */}
            <div className="absolute -top-3 -left-3 w-full h-full rounded-[2rem] border-2 border-blue-300 z-0" />
            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-[2rem] border-2 border-indigo-200 z-0" />

            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_16px_48px_rgba(37,99,235,0.15)] z-10 border border-white">
              <img
                src="https://images.unsplash.com/photo-1701627091488-027ddbf45dfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwc3R1ZGVudCUyMHN0dWR5aW5nfGVufDF8fHx8MTc3NjU2MTg5OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Sinh viên ULIS học tập"
                className="w-full h-[480px] object-cover"
              />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm border border-blue-100 rounded-2xl p-5 shadow-md flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-extrabold text-xl shadow">
                  A+
                </div>
                <div>
                  <h3 className="font-bold text-base text-blue-950">Sẵn sàng thực tập</h3>
                  <p className="text-sm text-slate-500 mt-0.5">Hoàn thiện hồ sơ ngay hôm nay</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
