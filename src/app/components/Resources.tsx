import { motion } from 'motion/react';
import { FileText, ExternalLink } from 'lucide-react';

const documents = [
  {
    title: '16.Qh.2021.SPAnh.130.Lê Mỹ Duyên.pdf',
    url: 'https://drive.google.com/file/d/1ONb629Hcv6HIvm4nCxiX7lIfAfndrId4/view',
  },
  {
    title: '15.Qh.2021.Pháp.130.Phạm Bảo Ngọc.pdf',
    url: 'https://drive.google.com/file/d/1yp5ylpI67-56wGObzg68rZF1-lBgXBGx/view',
  },
  {
    title: '04.Qh.2020.Anh.130.Đỗ Thị Khánh Huyền.pdf',
    url: 'https://drive.google.com/file/d/1E6R2mcaD9glGZ9Bu3MApSDugmCoV7qLa/view',
  },
  {
    title: '17.Qh.2021.SPAnh.130.Nguyễn Thị Linh Giang.pdf',
    url: 'https://drive.google.com/file/d/1S1paR-gzO0-QnhI4V_pGNolid_bphVJT/view',
  },
  {
    title: '14.Qh.2021.Nhật.140.TRẦN KIM CHI.pdf',
    url: 'https://drive.google.com/file/d/1XiUxM50Ulfap-QR56alN1k0jOFaVdxy2/view',
  },
  {
    title: '01. 19040794 _ Hoàng Thị Cúc _19E20_NN_SPTA.pdf',
    url: 'https://drive.google.com/file/d/1Ylk6NgC6nHXaDQHL-rcUK6QcC5CQ2MSr/view',
  },
];

export function Resources() {
  return (
    <section
      id="resources"
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(155deg, #eff6ff 0%, #ffffff 45%, #eef2ff 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="mb-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 bg-blue-100 text-blue-700 font-bold tracking-wider uppercase text-xs mb-4 rounded-full border border-blue-200"
            >
              Tài liệu tham khảo
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-5 tracking-tight">
              Kho Hồ Sơ Mẫu
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Nghiên cứu các hồ sơ thực tập đạt điểm tuyệt đối của sinh viên khóa trước để định hình cấu trúc và cách trình bày chuẩn mực nhất.
            </p>
          </div>

          <div className="space-y-3">
            {documents.map((doc, index) => (
              <motion.a
                key={doc.url}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-blue-100 hover:border-blue-300 hover:shadow-[0_4px_20px_rgba(37,99,235,0.1)] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-extrabold text-sm shrink-0 group-hover:bg-indigo-600 transition-colors">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-slate-800 text-base truncate group-hover:text-blue-700 transition-colors">
                    {doc.title.replace(/\.pdf$/i, '')}
                  </p>
                  <p className="text-sm text-slate-400 mt-0.5 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" /> PDF · Google Drive
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full border border-blue-100 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 shrink-0 transition-all">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </motion.a>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a href="#contact" className="text-blue-600 font-bold text-base hover:text-blue-800 flex items-center justify-center gap-2 transition-colors group">
              Cần thêm mẫu? Liên hệ BTC
              <span className="group-hover:translate-x-1 transition-transform inline-block">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
