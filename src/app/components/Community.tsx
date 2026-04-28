import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import avatarMinhAnh from '../../imports/avatars/testimonial-1.jpg';
import avatarDucAnh from '../../imports/avatars/testimonial-2.jpg';
import avatarPhuongLinh from '../../imports/avatars/testimonial-3.jpg';

const adviceCards = [
  {
    label: 'Khóa trên gợi ý',
    title: 'Đừng gom minh chứng vào sát hạn',
    content: 'Mỗi khi tham gia một hoạt động, hãy lưu ngay ảnh, giấy chứng nhận, link bài đăng và mô tả ngắn. Đến lúc nộp hồ sơ, bạn chỉ cần chọn lọc thay vì phải đi tìm lại từ đầu.',
    source: 'Kinh nghiệm từ sinh viên đã hoàn thành hồ sơ',
    avatar: '01',
    avatarBg: 'bg-blue-500',
  },
  {
    label: 'Cách chọn minh chứng',
    title: 'Ưu tiên minh chứng rõ vai trò của bạn',
    content: 'Một minh chứng tốt không chỉ cho thấy bạn có tham gia, mà còn cho thấy bạn đóng góp gì. Nếu có thể, hãy bổ sung mô tả nhiệm vụ, kết quả hoặc xác nhận từ đơn vị tổ chức.',
    source: 'Lời khuyên từ nhóm sinh viên khóa trước',
    avatar: '02',
    avatarBg: 'bg-indigo-500',
  },
  {
    label: 'Trình bày hồ sơ',
    title: 'Đặt tên file thống nhất ngay từ đầu',
    content: 'Hãy dùng một quy tắc đặt tên dễ hiểu theo tiêu chí A1-A4, thời gian và tên hoạt động. Cách này giúp bạn kiểm tra thiếu sót nhanh hơn và làm hồ sơ chuyên nghiệp hơn.',
    source: 'Gợi ý thực tế khi rà soát hồ sơ',
    avatar: '03',
    avatarBg: 'bg-sky-500',
  },
];

const feedbacks = [
  {
    name: 'Nguyễn Minh Anh',
    major: 'K54 Ngôn ngữ Anh',
    content: 'Mình thích nhất là cách hệ thống chia rõ từng nhóm A1-A4. Trước đây mình hay để minh chứng rải rác, còn bây giờ chỉ cần nhìn tiêu chí là biết hồ sơ đang thiếu gì.',
    avatar: avatarMinhAnh,
  },
  {
    name: 'Trần Đức Anh',
    major: 'K53 Ngôn ngữ Hàn Quốc',
    content: 'Kho hồ sơ mẫu giúp mình hình dung cách sắp xếp file và viết mô tả hoạt động gọn hơn. Phần này rất hữu ích nếu bạn mới bắt đầu chuẩn bị hồ sơ thực tập.',
    avatar: avatarDucAnh,
  },
  {
    name: 'Lê Phương Linh',
    major: 'K55 Sư phạm Tiếng Trung',
    content: 'Các lời khuyên từ khóa trên khá thực tế, nhất là phần lưu minh chứng ngay sau mỗi hoạt động. Nhờ vậy mình không bị cuống khi gần tới hạn nộp hồ sơ.',
    avatar: avatarPhuongLinh,
  },
];

export function Community() {
  return (
    <div>
      {/* Advice */}
      <section id="advice" className="py-24 relative overflow-hidden bg-white border-t border-blue-50">
        <div className="absolute inset-0 bg-[radial-gradient(#dbeafe_1px,transparent_1px)] [background-size:30px_30px] opacity-45" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 bg-blue-100 text-blue-700 font-bold tracking-wider uppercase text-xs mb-4 rounded-full border border-blue-200"
            >
              Góc Chia Sẻ
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-4 tracking-tight">
              Lời khuyên từ các khóa trên
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Những kinh nghiệm ngắn gọn giúp bạn chuẩn bị minh chứng và hồ sơ thực tập chủ động hơn.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {adviceCards.map((advice, index) => (
              <motion.article
                key={advice.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-[0_8px_32px_rgba(37,99,235,0.12)] border border-blue-100 flex flex-col hover:-translate-y-1.5 hover:shadow-[0_16px_42px_rgba(37,99,235,0.16)] transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                    {advice.label}
                  </span>
                  <Quote className="w-7 h-7 text-blue-200 shrink-0" />
                </div>
                <h3 className="text-xl font-extrabold text-blue-950 mb-4 leading-snug">
                  {advice.title}
                </h3>
                <p className="text-slate-700 text-base leading-relaxed mb-8 flex-1">
                  {advice.content}
                </p>
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full ${advice.avatarBg} text-white flex items-center justify-center font-bold text-sm shadow`}
                  >
                    {advice.avatar}
                  </div>
                  <p className="text-sm font-semibold text-slate-500 leading-snug">
                    {advice.source}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="feedback"
        className="py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(130deg, #3b82f6 0%, #6366f1 55%, #818cf8 100%)' }}
      >
        {/* Geometric grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 bg-white/20 text-white font-bold tracking-wider uppercase text-xs mb-4 rounded-full border border-white/30"
            >
              Phản Hồi Sinh Viên
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Họ nói gì về ULIS InternHub?
            </h2>
            <p className="text-lg text-blue-100">
              Trải nghiệm thực tế từ các sinh viên đã hoàn thành hồ sơ thực tập.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {feedbacks.map((feedback, index) => (
              <motion.div
                key={feedback.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.15)] flex flex-col hover:-translate-y-1.5 transition-transform duration-300"
              >
                <Quote className="w-8 h-8 text-blue-200 mb-5" />
                <p className="text-slate-700 text-base leading-relaxed mb-8 flex-1">
                  "{feedback.content}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={feedback.avatar}
                    alt={`Ảnh đại diện của ${feedback.name}`}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-100 shadow"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900">{feedback.name}</h4>
                    <p className="text-sm font-semibold text-blue-500 mt-0.5">{feedback.major}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
