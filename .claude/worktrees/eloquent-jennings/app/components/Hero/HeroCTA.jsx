import { ArrowRight } from "lucide-react";

export default function HeroCTA() {
  return (
    <div className="flex flex-wrap gap-4 mb-16">
      <a
        href="/product"
        className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold btn-primary"
      >
        <span>Ürünleri Keşfet</span>
        <ArrowRight
          size={18}
          className="group-hover:translate-x-1 transition-transform"
        />
      </a>
    </div>
  );
}
