import Link from "next/link";

export default function ProductCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-violet-600 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Özel Fiyat Teklifi Alın
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          İhtiyaçlarınıza özel çözümler ve rekabetçi fiyatlar için bizimle
          iletişime geçin.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/#iletisim"
            className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:shadow-xl transition-all"
          >
            Teklif Al
          </Link>
        </div>
      </div>
    </section>
  );
}
