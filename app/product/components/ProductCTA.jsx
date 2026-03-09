import Link from "next/link";

export default function ProductCTA() {
  return (
    <section className="py-20 bg-[#111111]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-6">
          Özel Fiyat Teklifi Alın
        </h2>
        <p className="text-xl text-[#8a8580] mb-8">
          İhtiyaçlarınıza özel çözümler ve rekabetçi fiyatlar için bizimle iletişime geçin.
        </p>
        <Link
          href="/#iletisim"
          className="inline-block px-8 py-4 bg-white text-[#111111] rounded-[6px] font-semibold hover:bg-[#f0ede8] transition-all duration-300"
        >
          Teklif Al
        </Link>
      </div>
    </section>
  );
}
