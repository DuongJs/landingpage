import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Users, Lightbulb, Briefcase } from 'lucide-react';
import a1Image1 from '../../imports/a1/1.jpg';
import a1Image2 from '../../imports/a1/2.jpg';
import a1Image3 from '../../imports/a1/3.jpg';
import a1Image4 from '../../imports/a1/4.jpg';
import a2Image1 from '../../imports/a2/1.jpg';
import a2Image2 from '../../imports/a2/2.jpg';
import a2Image3 from '../../imports/a2/3.jpg';
import a2Image4 from '../../imports/a2/4.jpg';
import a3Image1 from '../../imports/a3/1.jpg';
import a3Image2 from '../../imports/a3/2.jpg';
import a3Image3 from '../../imports/a3/3.jpg';
import a3Image4 from '../../imports/a3/4.jpg';
import a4Image1 from '../../imports/a4/1.jpg';
import a4Image2 from '../../imports/a4/2.jpg';
import a4Image3 from '../../imports/a4/3.jpg';
import a4Image4 from '../../imports/a4/4.jpg';

const criteriaTabs = [
  { id: 'A1', title: 'Kỹ năng bổ trợ', label: 'A1', icon: BookOpen, desc: 'Tham gia 4 khoá học, hội thảo, hội nghị, chương trình hoạt động... do các đơn vị trong và ngoài trường tổ chức nhằm phát triển các kỹ năng bổ trợ và các phẩm chất để hoàn thiện bản thân.' },
  { id: 'A2', title: 'Hoạt động ngoại khoá', label: 'A2', icon: Users, desc: 'Tham gia 4 hoạt động ngoại khoá, hoạt động tập thể, chương trình sinh hoạt theo chuyên đề, các cuộc thi văn hoá, văn nghệ, thể thao, Câu lạc bộ do Khoa, Trường, hoặc các tổ chức hợp pháp khác triển khai.' },
  { id: 'A3', title: 'Nghiên cứu khoa học', label: 'A3', icon: Lightbulb, desc: 'Tham gia 2 hoạt động nghiên cứu khoa học, hoạt động sáng tạo khởi nghiệp, khoa học kỹ thuật và chuyển giao tri thức hoặc các cuộc thi chuyên môn do Khoa, Trường và các tổ chức hợp pháp trong và ngoài nước triển khai.' },
  { id: 'A4', title: 'Thực hành & Thực tập', label: 'A4', icon: Briefcase, desc: 'Tham gia các hoạt động thực hành, thực tập (có đánh giá với thời gian tối thiểu 30 ngày làm việc) tại các phòng ban chức năng, các đơn vị trong và ngoài trường, các cơ quan đơn vị, tổ chức đảm bảo về mặt pháp lý.' },
];

const criteriaLinks: Record<string, { title: string; link: string }[]> = {
  A1: [
    { title: 'Toạ đàm phát triển kỹ năng', link: 'https://www.facebook.com/photo?fbid=800236719790433&set=a.170099706137474' },
    { title: 'Hội thảo định hướng nghề nghiệp', link: 'https://www.facebook.com/photo/?fbid=796604346820337&set=a.170099706137474' },
    { title: 'Khoá học kỹ năng mềm', link: 'https://www.facebook.com/photo?fbid=800367993110639&set=a.170099706137474' },
    { title: 'Chương trình huấn luyện sinh viên', link: 'https://www.facebook.com/photo?fbid=800068459807259&set=a.116237401523705' },
  ],
  A2: [
    { title: 'Giao lưu câu lạc bộ sinh viên', link: 'https://www.facebook.com/photo/?fbid=697249486755824&set=a.177489428731835' },
    { title: 'Giải thể thao truyền thống', link: 'https://www.facebook.com/photo/?fbid=697300926750680&set=a.116237401523705' },
    { title: 'Hoạt động tình nguyện mùa hè xanh', link: 'https://www.facebook.com/photo/?fbid=423293577484751&set=a.116237401523705' },
    { title: 'Cuộc thi văn nghệ toàn trường', link: 'https://www.facebook.com/photo/?fbid=312015138612596&set=a.116237401523705' },
  ],
  A3: [
    { title: 'Hội nghị sinh viên NCKH cấp Trường', link: 'https://www.facebook.com/photo?fbid=176828215464623&set=a.116237401523705' },
    { title: 'Cuộc thi sáng tạo khởi nghiệp', link: 'https://www.facebook.com/photo/?fbid=179063828574395&set=a.177489428731835' },
    { title: 'Dự án chuyển giao tri thức', link: 'https://www.facebook.com/photo?fbid=813425791804859&set=a.170099706137474' },
    { title: 'Cuộc thi chuyên môn các khoa', link: 'https://www.facebook.com/photo/?fbid=753810817766357&set=a.116237401523705' },
  ],
  A4: [
    { title: 'Thực tập tại doanh nghiệp đối tác', link: 'https://www.facebook.com/photo/?fbid=764222776725161&set=a.114991644981614' },
    { title: 'Kiến tập tại cơ quan nhà nước', link: 'https://www.facebook.com/photo/?fbid=651824397965000&set=a.114991644981614' },
    { title: 'Thực hành chuyên môn tại phòng ban', link: 'https://www.facebook.com/photo/?fbid=633772153103558&set=a.114991644981614' },
    { title: 'Làm việc dự án có đánh giá', link: 'https://www.facebook.com/photo/?fbid=629014326912674&set=a.114991644981614' },
  ],
};

const criteriaImages: Record<string, string[]> = {
  A1: [a1Image1, a1Image2, a1Image3, a1Image4],
  A2: [a2Image1, a2Image2, a2Image3, a2Image4],
  A3: [a3Image1, a3Image2, a3Image3, a3Image4],
  A4: [a4Image1, a4Image2, a4Image3, a4Image4],
};

export function Criteria() {
  const [activeTab, setActiveTab] = useState('A1');
  const activeData = criteriaTabs.find(t => t.id === activeTab);
  const activeLinks = criteriaLinks[activeTab] || [];
  const activeImages = criteriaImages[activeTab] || [];

  return (
    <section
      id="criteria"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 45%, #6366f1 100%)' }}
    >
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 bg-white/20 text-white font-bold tracking-wider uppercase text-xs mb-4 rounded-full border border-white/30"
          >
            Hệ thống Tiêu chí
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight"
          >
            4 Nhóm Minh Chứng Cốt Lõi
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-blue-100 leading-relaxed"
          >
            Khám phá chi tiết các yêu cầu bắt buộc để xây dựng bộ hồ sơ thực tập hoàn chỉnh, không sai sót.
          </motion.p>
        </div>

        {/* Segmented Tab Control */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white/10 backdrop-blur-sm p-1.5 rounded-2xl border border-white/20 gap-1">
            {criteriaTabs.map(tab => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-base transition-all duration-300 ${
                    isActive ? 'text-blue-700' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-white rounded-xl shadow-md"
                    />
                  )}
                  <span className="relative z-10 hidden sm:inline">{tab.label}. {tab.title}</span>
                  <span className="relative z-10 sm:hidden font-extrabold">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="grid lg:grid-cols-12 gap-8 items-start"
          >
            {/* Left: Description — on gradient, white text */}
            <div className="lg:col-span-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 flex flex-col gap-6">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white border border-white/25">
                {activeData && <activeData.icon className="w-7 h-7" />}
              </div>
              <div>
                <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-3 py-1 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-200 inline-block" />
                  <span className="text-white/70 text-xs font-semibold">Tiêu chí {activeData?.label}</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-4 tracking-tight leading-snug">
                  {activeData?.title}
                </h3>
                <p className="text-sm text-blue-100 leading-relaxed">
                  {activeData?.desc}
                </p>
              </div>
            </div>

            {/* Right: 2×2 Glass Cards */}
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
              {activeLinks.map((item: any, index: number) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(0,0,0,0.28)] shadow-[0_6px_24px_rgba(0,0,0,0.22)] transition-all duration-300"
                >
                  {/* Image */}
                  <div className="h-56 overflow-hidden relative shrink-0">
                    <img
                      src={activeImages[index]}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 via-blue-800/20 to-transparent" />
                    <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-white/25 backdrop-blur-sm border border-white/40 flex items-center justify-center text-white font-extrabold text-xs">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col gap-3 flex-1 bg-white">
                    <p className="font-semibold text-slate-800 text-sm leading-snug flex-1 group-hover:text-blue-700 transition-colors duration-200">
                      {item.title}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
