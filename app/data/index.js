// Ürünler
export const products = [
  {
    id: 1,
    title: "Makina Streç Film",
    category: "endustriyel",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    description:
      "Yüksek hacimli sarma işlemleri için otomatik sistemlerde kullanılan profesyonel çözüm.",
    features: ["Yüksek verimlilik", "Düşük maliyet", "Otomatik uyumlu"],
    tag: "En Çok Satan",
  },
  {
    id: 2,
    title: "El Streç Film",
    category: "endustriyel",
    image:
      "https://images.unsplash.com/photo-1553413077-9574ffd25e49?w=600&h=400&fit=crop",
    description: "Manuel paketleme için ergonomik ve dayanıklı tasarım.",
    features: ["Kolay kullanım", "Ergonomik", "Ekonomik"],
    tag: null,
  },
  {
    id: 3,
    title: "Pre Streç Film",
    category: "endustriyel",
    image:
      "https://images.unsplash.com/photo-1566140967404-b8b3932483f5?w=600&h=400&fit=crop",
    description: "Önceden gerilmiş teknoloji ile %30 tasarruf sağlar.",
    features: ["Tasarruf", "Hafif", "Güçlü tutuş"],
    tag: "Yeni",
  },
  {
    id: 4,
    title: "Jumbo Streç",
    category: "endustriyel",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&h=400&fit=crop",
    description: "Büyük ölçekli endüstriyel projeler için geniş boy çözümler.",
    features: ["Geniş boy", "Endüstriyel", "Toplu kullanım"],
    tag: null,
  },
  {
    id: 5,
    title: "Renkli Streç",
    category: "gida",
    image:
      "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?w=600&h=400&fit=crop",
    description: "Ürün ayrımı ve görsel tanıma için renkli seçenekler.",
    features: ["Renkli kodlama", "Görsel ayırım", "Marka imajı"],
    tag: "Popüler",
  },
  {
    id: 6,
    title: "Gıda Streç",
    category: "gida",
    image: "/images/3.jpg",
    description: "Gıda güvenliği sertifikalı hijyenik paketleme çözümü.",
    features: ["Gıda onaylı", "Hijyenik", "Güvenli"],
    tag: "Sertifikalı",
  },
];

// Müşteri Yorumları
export const testimonials = [
  {
    name: "Ahmet Yılmaz",
    company: "GlobalTrade GmbH",
    role: "İthalat Müdürü",
    text: "Almanya'ya yaptığımız ithalatlarda Merkez Tedarik'i tercih ediyoruz. Geniş ürün yelpazesi ve profesyonel ihracat süreçleri işimizi çok kolaylaştırıyor.",
    avatar: "AY",
  },
  {
    name: "Sarah Johnson",
    company: "UK Wholesale Ltd.",
    role: "Purchasing Director",
    text: "Merkez Tedarik has been our trusted supplier for toys and home products. Their quality standards and competitive pricing make them stand out in the market.",
    avatar: "SJ",
  },
  {
    name: "Mehmet Kaya",
    company: "Kaya Ticaret A.Ş.",
    role: "Genel Müdür",
    text: "8 farklı kategoride toptan alım yapabilmek büyük avantaj. Tek tedarikçiden tüm ihtiyaçlarımızı karşılıyoruz. Fiyat-performans açısından piyasadaki en iyiler.",
    avatar: "MK",
  },
];

// İstatistikler
export const stats = [
  { number: "15+", label: "Yıllık Deneyim", suffix: "" },
  { number: "50+", label: "İhracat Ülkesi", suffix: "" },
  { number: "1000+", label: "Ürün Çeşidi", suffix: "" },
  { number: "8", label: "Farklı Kategori", suffix: "" },
];

// Navigasyon Linkleri
export const navLinks = [
  { name: "Ana Sayfa", href: "/#anasayfa" },
  { name: "Ürünler", href: "/catalog" },
  { name: "Hakkımızda", href: "/#hakkimizda" },
  { name: "İletişim", href: "/#iletisim" },
];

// Özellikler
export const features = [
  {
    title: "8 Farklı Kategori",
    desc: "Oyuncaktan elektroniğe geniş ürün yelpazesi",
  },
  {
    title: "Global İhracat",
    desc: "50+ ülkeye güvenli teslimat",
  },
  {
    title: "Toptan Fiyat",
    desc: "Rekabetçi fiyatlarla toplu alım avantajı",
  },
  {
    title: "15+ Yıl Deneyim",
    desc: "Uluslararası ticarette güvenilir partner",
  },
];

// İletişim Bilgileri
export const contactInfo = [
  {
    title: "Telefon",
    info: "+90 555 123 45 67",
    subInfo: "+90 555 765 43 21",
    href: "tel:+905551234567",
  },
  {
    title: "E-posta",
    info: "info@merkeztedarik.com",
    subInfo: "satis@merkeztedarik.com",
    href: "mailto:info@merkeztedarik.com",
  },
  {
    title: "Adres",
    info: "Organize Sanayi Bölgesi",
    subInfo: "İstanbul, Türkiye",
    href: "#",
  },
];

// Kategori Filtreleri
export const categories = [
  { key: "tumu", label: "Tüm Ürünler" },
  { key: "endustriyel", label: "Endüstriyel" },
  { key: "gida", label: "Gıda" },
  { key: "cocuk-guvenlik", label: "Çocuk Güvenliği" },
];
