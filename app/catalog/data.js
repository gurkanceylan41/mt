// İthalat Kataloğu - Tüm Kategoriler ve Ürünler

export const catalogCategories = [
  {
    id: "oyuncaklar",
    title: "Oyuncaklar",
    subtitle: "Çocuklar için Güvenli & Eğlenceli",
    description:
      "CE sertifikalı, güvenlik standartlarına uygun ithal oyuncaklar. Eğitici oyuncaklardan peluşlara, yapı bloklarından uzaktan kumandalı araçlara kadar geniş ürün yelpazesi.",
    image:
      "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=800&h=600&fit=crop",
    icon: "🧸",
    color: "from-pink-500 to-rose-500",
    stats: { products: 150, brands: 25 },
    featured: true,
  },
  {
    id: "cocuk-guvenlik",
    title: "Çocuk Koruma Malzemeleri",
    subtitle: "Güvenlik Her Şeyden Önce",
    description:
      "Bebek güvenlik kilitleri, köşe koruyucular, parmak koruyucular, priz koruma ve daha fazlası. Evinizi çocuklar için güvenli hale getirin. PLAYSAFE ve AGUBUGU markalarından geniş ürün yelpazesi.",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/d5db7203-1618-4734-92c3-74ecb1e63246-fc5-20.jpg",
    icon: "🛡️",
    color: "from-emerald-500 to-teal-500",
    stats: { products: 102, brands: 2 },
    featured: true,
  },
  {
    id: "strec-film",
    title: "Streç Filmler",
    subtitle: "Endüstriyel & Gıda Ambalaj",
    description:
      "Makine tipi, el tipi ve gıda sertifikalı streç filmler. Yüksek kalite, dayanıklılık ve ekonomik fiyatlarla ambalaj çözümleri.",
    image: "/products/otomatik.jpg",
    icon: "📦",
    color: "from-blue-500 to-indigo-500",
    stats: { products: 3, brands: 1 },
    featured: true,
  },
  {
    id: "ambalaj",
    title: "Ambalaj Malzemeleri",
    subtitle: "Profesyonel Paketleme Çözümleri",
    description:
      "Karton kutular, balonlu naylon, kraft kağıt, bantlar ve paketleme malzemeleri. E-ticaret ve endüstriyel kullanım için ideal.",
    image:
      "https://images.unsplash.com/photo-1607166452427-7e4477079cb9?w=800&h=600&fit=crop",
    icon: "🎁",
    color: "from-amber-500 to-orange-500",
    stats: { products: 120, brands: 20 },
    featured: false,
  },
  {
    id: "ev-mutfak",
    title: "Ev & Mutfak Ürünleri",
    subtitle: "Pratik Yaşam Çözümleri",
    description:
      "Mutfak organizatörleri, saklama kapları, temizlik malzemeleri ve ev düzenleme ürünleri. Yaşam alanlarınız için fonksiyonel çözümler.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
    icon: "🏠",
    color: "from-cyan-500 to-blue-500",
    stats: { products: 200, brands: 30 },
    featured: false,
  },
  {
    id: "tekstil",
    title: "Tekstil Ürünleri",
    subtitle: "Kaliteli Kumaş & Aksesuarlar",
    description:
      "İthal kumaşlar, ev tekstili, havlu setleri ve tekstil aksesuarları. Toptan ve perakende satış için uygun fiyatlı seçenekler.",
    image:
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=600&fit=crop",
    icon: "🧵",
    color: "from-violet-500 to-purple-500",
    stats: { products: 180, brands: 35 },
    featured: false,
  },
  {
    id: "kirtasiye",
    title: "Kırtasiye & Ofis",
    subtitle: "İş ve Okul Malzemeleri",
    description:
      "Defterler, kalemler, dosyalar, ofis organizatörleri ve okul malzemeleri. Toplu alımlarda özel fiyatlar.",
    image:
      "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=800&h=600&fit=crop",
    icon: "✏️",
    color: "from-red-500 to-pink-500",
    stats: { products: 250, brands: 40 },
    featured: false,
  },
  {
    id: "elektronik-aksesuar",
    title: "Elektronik Aksesuarlar",
    subtitle: "Teknoloji Yan Ürünleri",
    description:
      "Telefon kılıfları, şarj kabloları, kulaklıklar ve teknoloji aksesuarları. Uyumlu ve kaliteli ithal ürünler.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop",
    icon: "📱",
    color: "from-slate-600 to-slate-800",
    stats: { products: 300, brands: 50 },
    featured: false,
  },
];

// Oyuncaklar Kategorisi Ürünleri
export const toyProducts = [
  {
    id: "toy-1",
    title: "Eğitici Yapı Blokları Seti",
    category: "oyuncaklar",
    subcategory: "Eğitici Oyuncaklar",
    image:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=400&fit=crop",
    description:
      "500 parçalık renkli yapı blokları seti. Yaratıcılığı ve motor becerilerini geliştirir.",
    features: ["CE Sertifikalı", "BPA İçermez", "3+ Yaş", "500 Parça"],
    minOrder: 50,
    tag: "En Çok Satan",
  },
  {
    id: "toy-2",
    title: "Peluş Oyuncak Koleksiyonu",
    category: "oyuncaklar",
    subcategory: "Peluş Oyuncaklar",
    image:
      "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=600&h=400&fit=crop",
    description:
      "Yumuşak ve sevimli peluş hayvan koleksiyonu. Antibakteriyel dolgu malzemesi.",
    features: ["Antibakteriyel", "Yıkanabilir", "0+ Yaş", "Çeşitli Boyutlar"],
    minOrder: 100,
    tag: "Popüler",
  },
  {
    id: "toy-3",
    title: "Uzaktan Kumandalı Araba",
    category: "oyuncaklar",
    subcategory: "RC Oyuncaklar",
    image:
      "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=600&h=400&fit=crop",
    description:
      "Şarj edilebilir, yüksek hızlı uzaktan kumandalı yarış arabası.",
    features: ["Şarj Edilebilir", "30m Menzil", "6+ Yaş", "LED Işıklar"],
    minOrder: 30,
    tag: "Yeni",
  },
  {
    id: "toy-4",
    title: "Ahşap Puzzle Seti",
    category: "oyuncaklar",
    subcategory: "Puzzle & Bulmacalar",
    image:
      "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=600&h=400&fit=crop",
    description: "Doğal ahşaptan üretilmiş eğitici puzzle seti. 6 farklı tema.",
    features: ["Doğal Ahşap", "Toksik Değil", "2+ Yaş", "6 Farklı Puzzle"],
    minOrder: 80,
    tag: null,
  },
  {
    id: "toy-5",
    title: "Bebek Çıngırak Seti",
    category: "oyuncaklar",
    subcategory: "Bebek Oyuncakları",
    image:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=400&fit=crop",
    description:
      "Renkli ve sesli bebek çıngırak seti. Duyusal gelişimi destekler.",
    features: ["BPA İçermez", "Dişlik Özellikli", "0+ Ay", "5 Parça Set"],
    minOrder: 150,
    tag: "Sertifikalı",
  },
  {
    id: "toy-6",
    title: "Barbie Bebek Seti",
    category: "oyuncaklar",
    subcategory: "Bebekler",
    image:
      "https://images.unsplash.com/photo-1613682988402-a12e5e158d42?w=600&h=400&fit=crop",
    description:
      "Aksesuarlı moda bebek seti. Kıyafet ve aksesuar koleksiyonu dahil.",
    features: ["Orijinal Lisans", "Aksesuar Dahil", "3+ Yaş", "Premium Kalite"],
    minOrder: 40,
    tag: "Lisanslı",
  },
];

// Çocuk Koruma Malzemeleri Ürünleri (Eduland.com.tr)
export const safetyProducts = [
  // KÖŞE KORUYUCULAR
  {
    id: "edu-1",
    title: "4'lü Jumbo V Tipi Beyaz Köşe Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/1.jpg",
    images: [
      "/products/koruma/1.jpg",
      "/products/koruma/2.jpg",
      "/products/koruma/3.jpg",
      "/products/koruma/4.jpg",
    ],
    description:
      "4'lü Jumbo V Tipi Beyaz Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["Jumbo Boyut", "V Profil", "Beyaz Renk", "4 Adet"],
    minOrder: 100,
    tag: "En Çok Satan",
  },
  {
    id: "edu-2",
    title: "4'lü Ekstrem V Tipi Gri Köşe Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/5.png",
    images: ["/products/koruma/5.png", "/products/koruma/6.webp"],
    description:
      "4'lü Ekstrem V Tipi Gri Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["Ekstrem Dayanıklı", "V Profil", "Gri Renk", "4 Adet"],
    minOrder: 100,
    tag: "Popüler",
  },
  {
    id: "edu-3",
    title: "4'lü Jumbo V Tipi Krem Köşe Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/7.jpg",
    images: ["/products/koruma/7.jpg", "/products/koruma/8.jpg"],
    description:
      "4'lü Jumbo V Tipi Krem Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["Jumbo Boyut", "V Profil", "Krem Renk", "4 Adet"],
    minOrder: 100,
    tag: "Yeni",
  },
  {
    id: "edu-4",
    title: "4'lü Jumbo V Tipi Gri Köşe Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/9.jpg",
    images: ["/products/koruma/9.jpg"],
    description:
      "4'lü Jumbo V Tipi Gri Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["Jumbo Boyut", "V Profil", "Gri Renk", "4 Adet"],
    minOrder: 100,
    tag: "Premium",
  },
  {
    id: "edu-5",
    title: "4'lü Jumbo V Tipi Siyah Köşe Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/10.jpg",
    images: ["/products/koruma/10.jpg", "/products/koruma/11.jpg"],
    description:
      "4'lü Jumbo V Tipi Siyah Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["Jumbo Boyut", "V Profil", "Siyah Renk", "4 Adet"],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-6",
    title: "4'lü Jumbo V Tipi Kahverengi Köşe Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/12.jpg",
    images: ["/products/koruma/12.jpg", "/products/koruma/13.jpg"],
    description:
      "4'lü Jumbo V Tipi Kahverengi Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["Jumbo Boyut", "V Profil", "Kahverengi Renk", "4 Adet"],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-7",
    title: "4'lü V Tipi Pembe Köşe Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/14.jpg",
    images: ["/products/koruma/14.webp", "/products/koruma/15.jpg"],
    description:
      "4'lü V Tipi Pembe Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["V Profil", "Pembe Renk", "4 Adet", "Kolay Montaj"],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-8",
    title: "4'lü V Tipi Krem Köşe Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/16.jpg",
    images: ["/products/koruma/16.jpg"],
    description:
      "4'lü V Tipi Krem Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["V Profil", "Krem Renk", "4 Adet", "Kolay Montaj"],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-9",
    title: "4'lü V Tipi Siyah Köşe Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/17.jpg",
    images: ["/products/koruma/17.jpg", "/products/koruma/18.jpg"],
    description:
      "4'lü V Tipi Siyah Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["V Profil", "Siyah Renk", "4 Adet", "Kolay Montaj"],
    minOrder: 100,
    tag: "En Çok Satan",
  },
  {
    id: "edu-10",
    title: "4'lü U Tipi Krem Köşe Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/19.jpg",
    images: [
      "/products/koruma/19.webp",
      "/products/koruma/20.jpg",
      "/products/koruma/21.webp",
    ],
    description:
      "4'lü U Tipi Krem Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["U Profil", "Krem Renk", "4 Adet", "Kolay Montaj"],
    minOrder: 100,
    tag: "Popüler",
  },
  {
    id: "edu-11",
    title: "4'lü U Tipi Kahverengi Köşe Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/22.jpg",
    images: [
      "/products/koruma/22.webp",
      "/products/koruma/23.jpg",
      "/products/koruma/24.webp",
    ],
    description:
      "4'lü U Tipi Kahverengi Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["U Profil", "Kahverengi Renk", "4 Adet", "Kolay Montaj"],
    minOrder: 100,
    tag: "Yeni",
  },
  {
    id: "edu-12",
    title: "4'lü XXL Jumbo V Tipi Kırmızı Köşe Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/25.jpg",
    images: ["/products/koruma/25.jpg"],
    description:
      "4'lü XXL Jumbo V Tipi Kırmızı Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["Jumbo Boyut", "V Profil", "Kırmızı Renk", "4 Adet"],
    minOrder: 100,
    tag: "Premium",
  },
  {
    id: "edu-13",
    title: "4'lü XXL Jumbo V Tipi Sarı Köşe Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/26.jpg",
    images: ["/products/koruma/26.jpg"],
    description:
      "4'lü XXL Jumbo V Tipi Sarı Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["Jumbo Boyut", "V Profil", "Sarı Renk", "4 Adet"],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-14",
    title: "4'lü XXL Jumbo V Tipi Yeşil Köşe Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/27.jpg",
    images: ["/products/koruma/27.jpg"],
    description:
      "4'lü XXL Jumbo V Tipi Yeşil Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["Jumbo Boyut", "V Profil", "Yeşil Renk", "4 Adet"],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-15",
    title: "4'lü XXL Jumbo V Tipi Mavi Köşe Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/28.jpg",
    images: ["/products/koruma/28.jpg"],
    description:
      "4'lü XXL Jumbo V Tipi Mavi Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["Jumbo Boyut", "V Profil", "Mavi Renk", "4 Adet"],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-16",
    title: "4'lü 3 Açılı Silikon Gri Köşe Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/29.webp",
    images: [
      "/products/koruma/29.webp",
      "/products/koruma/30.webp",
      "/products/koruma/31.webp",
    ],
    description:
      "4'lü 3 Açılı Silikon Gri Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["Silikon Malzeme", "Gri Renk", "4 Adet", "Kolay Montaj"],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-17",
    title: "4'lü Silikon Oluklu Şeffaf Köşe Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/32.jpg",
    images: [
      "/products/koruma/32.jpg",
      "/products/koruma/33.jpg",
      "/products/koruma/34.jpg",
    ],
    description:
      "4'lü Silikon Oluklu Şeffaf Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["Silikon Malzeme", "Şeffaf Tasarım", "4 Adet", "Kolay Montaj"],
    minOrder: 100,
    tag: "En Çok Satan",
  },
  {
    id: "edu-18",
    title: "4'lü Silikon V Tipi Şeffaf Köşe Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/35.jpg",
    images: ["/products/koruma/35.webp", "/products/koruma/36.webp"],
    description:
      "4'lü Silikon V Tipi Şeffaf Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["Silikon Malzeme", "V Profil", "Şeffaf Tasarım", "4 Adet"],
    minOrder: 100,
    tag: "Popüler",
  },
  {
    id: "edu-19",
    title: "4'lü Silikon Şeffaf Köşe Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/37.jpg",
    images: ["/products/koruma/37.webp", "/products/koruma/38.webp"],
    description:
      "4'lü Silikon Şeffaf Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: ["Silikon Malzeme", "Şeffaf Tasarım", "4 Adet", "Kolay Montaj"],
    minOrder: 100,
    tag: "Yeni",
  },
  {
    id: "edu-20",
    title: "Sevimli Silikon Köşe Koruyucu – Beyaz / Yeşil / Kahverengi",
    category: "cocuk-guvenlik",
    subcategory: "Köşe Koruyucular",
    image: "/products/koruma/39.jpg",
    images: [
      "/products/koruma/39.jpg",
      "/products/koruma/40.webp",
      "/products/koruma/41.jpg",
    ],
    description:
      "Silikon Sevimli Beyaz Köşe Koruyucu. Mobilya köşelerini güvenli hale getirir, darbelere karşı koruma sağlar.",
    features: [
      "Silikon Malzeme",
      "Beyaz Renk",
      "Kolay Montaj",
      "Güçlü Yapışkan",
    ],
    minOrder: 100,
    tag: "Premium",
  },

  {
    id: "edu-21",
    title: "Ekstrem 2 Mt. Kenar Ve 4 Ad. Köşe Koruyucu Gri",
    category: "cocuk-guvenlik",
    subcategory: "Köşe-Kenar Koruyucu Setler",
    image: "/products/koruma/42.webp",
    images: [
      "/products/koruma/42.webp",
      "/products/koruma/43.webp",
      "/products/koruma/44.webp",
    ],
    description:
      "Ekstrem 2 Mt. Kenar Ve 4 Ad. Köşe Koruyucu Gri. Kenar ve köşe koruyucu komple set, kapsamlı koruma.",
    features: ["Ekstrem Dayanıklı", "Gri Renk", "2 Mt Uzunluk", "Komple Set"],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-22",
    title: "Jumbo 2 Mt. Kenar Ve 4 Ad. Köşe Koruyucu Gri",
    category: "cocuk-guvenlik",
    subcategory: "Köşe-Kenar Koruyucu Setler",
    image: "/products/koruma/45.webp",
    images: ["/products/koruma/45.webp"],
    description:
      "Jumbo 2 Mt. Kenar Ve 4 Ad. Köşe Koruyucu Gri. Kenar ve köşe koruyucu komple set, kapsamlı koruma.",
    features: ["Jumbo Boyut", "Gri Renk", "2 Mt Uzunluk", "Komple Set"],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-23",
    title: "Jumbo 2 Mt. Kenar Ve 4 Ad. Köşe Koruyucu Krem",
    category: "cocuk-guvenlik",
    subcategory: "Köşe-Kenar Koruyucu Setler",
    image: "/products/koruma/46.webp",
    images: [
      "/products/koruma/46.webp",
      "/products/koruma/47.webp",
      "/products/koruma/48.webp",
    ],
    description:
      "Jumbo 2 Mt. Kenar Ve 4 Ad. Köşe Koruyucu Krem. Kenar ve köşe koruyucu komple set, kapsamlı koruma.",
    features: ["Jumbo Boyut", "Krem Renk", "2 Mt Uzunluk", "Komple Set"],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-24",
    title: "Jumbo 2 Mt. Kenar Ve 4 Ad. Köşe Koruyucu Kahverengi",
    category: "cocuk-guvenlik",
    subcategory: "Köşe-Kenar Koruyucu Setler",
    image: "/products/koruma/49.jpg",
    images: ["/products/koruma/49.jpg", "/products/koruma/50.jpg"],
    description:
      "Jumbo 2 Mt. Kenar Ve 4 Ad. Köşe Koruyucu Kahverengi. Kenar ve köşe koruyucu komple set, kapsamlı koruma.",
    features: ["Jumbo Boyut", "Kahverengi Renk", "2 Mt Uzunluk", "Komple Set"],
    minOrder: 100,
    tag: "En Çok Satan",
  },

  {
    id: "edu-25",
    title: "Slim 2 Mt. Kenar Koruyucu ve 4 Ad. Köşe Koruyucu Kahverengi",
    category: "cocuk-guvenlik",
    subcategory: "Köşe-Kenar Koruyucu Setler",
    image: "/products/koruma/51.webp",
    images: [
      "/products/koruma/51.webp",
      "/products/koruma/52.webp",
      "/products/koruma/53.webp",
    ],
    description:
      "Slim 2 Mt. Kenar Koruyucu ve 4 Ad. Köşe Koruyucu Kahverengi. Kenar ve köşe koruyucu komple set, kapsamlı koruma.",
    features: ["Slim Profil", "Kahverengi Renk", "2 Mt Uzunluk", "Komple Set"],
    minOrder: 100,
    tag: "Yeni",
  },
  {
    id: "edu-26",
    title: "Jumbo 2 Mt. Kenar Ve 4 Ad. Köşe Koruyucu Siyah",
    category: "cocuk-guvenlik",
    subcategory: "Köşe-Kenar Koruyucu Setler",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/ef2980f6-30a7-4957-8a52-0569a5b291f0--cef38.png",
    description:
      "Jumbo 2 Mt. Kenar Ve 4 Ad. Köşe Koruyucu Siyah. Kenar ve köşe koruyucu komple set, kapsamlı koruma.",
    features: ["Jumbo Boyut", "Siyah Renk", "2 Mt Uzunluk", "Komple Set"],
    minOrder: 100,
    tag: "Popüler",
  },
  {
    id: "edu-44",
    title: "Slim 2 Mt. Kenar Koruyucu ve 4 Ad. Köşe Koruyucu Krem",
    category: "cocuk-guvenlik",
    subcategory: "Köşe-Kenar Koruyucu Setler",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/c0abf59f-370f-4374-bf59-4e91cd010089-54bcb5.png",
    description:
      "Slim 2 Mt. Kenar Koruyucu ve 4 Ad. Köşe Koruyucu Krem. Kenar ve köşe koruyucu komple set, kapsamlı koruma.",
    features: ["Slim Profil", "Krem Renk", "2 Mt Uzunluk", "Komple Set"],
    minOrder: 100,
    tag: "Premium",
  },
  {
    id: "edu-45",
    title: "Slim 2 Mt. Kenar Koruyucu ve 4 Ad. Köşe Koruyucu Siyah",
    category: "cocuk-guvenlik",
    subcategory: "Köşe-Kenar Koruyucu Setler",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/slim-2-mt.-kenar-koruyucu-ve-4-ad-d91-96.png",
    description:
      "Slim 2 Mt. Kenar Koruyucu ve 4 Ad. Köşe Koruyucu Siyah. Kenar ve köşe koruyucu komple set, kapsamlı koruma.",
    features: ["Slim Profil", "Siyah Renk", "2 Mt Uzunluk", "Komple Set"],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-46",
    title: "Slim 2 Mt. Kenar Koruyucu ve 4 Ad. Köşe Koruyucu Beyaz",
    category: "cocuk-guvenlik",
    subcategory: "Köşe-Kenar Koruyucu Setler",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/ac44eb0d-3810-49f2-8a69-7e5b6b01e50c-20c35d.png",
    description:
      "Slim 2 Mt. Kenar Koruyucu ve 4 Ad. Köşe Koruyucu Beyaz. Kenar ve köşe koruyucu komple set, kapsamlı koruma.",
    features: ["Slim Profil", "Beyaz Renk", "2 Mt Uzunluk", "Komple Set"],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-47",
    title: "5'li Jumbo 2 Mt. Kenar Ve 4 Ad. Köşe Koruyucu Set Siyah",
    category: "cocuk-guvenlik",
    subcategory: "Köşe-Kenar Koruyucu Setler",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/ef2980f6-30a7-4957-8a52-0569a5b291f0--cef38.png",
    description:
      "5'li Jumbo 2 Mt. Kenar Ve 4 Ad. Köşe Koruyucu Set Siyah. Kenar ve köşe koruyucu komple set, kapsamlı koruma.",
    features: ["Jumbo Boyut", "Siyah Renk", "2 Mt Uzunluk", "5'li Set"],
    minOrder: 80,
    tag: null,
  },
  {
    id: "edu-48",
    title: "5'li Jumbo 2 Mt. Kenar Ve 4 Ad. Köşe Koruyucu Set Krem",
    category: "cocuk-guvenlik",
    subcategory: "Köşe-Kenar Koruyucu Setler",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/7acf3761-bccf-44a2-8417-b2138bc6660d-4096-b.png",
    description:
      "5'li Jumbo 2 Mt. Kenar Ve 4 Ad. Köşe Koruyucu Set Krem. Kenar ve köşe koruyucu komple set, kapsamlı koruma.",
    features: ["Jumbo Boyut", "Krem Renk", "2 Mt Uzunluk", "5'li Set"],
    minOrder: 80,
    tag: null,
  },
  {
    id: "edu-49",
    title: "5'li Jumbo 2 Mt. Kenar Ve 4 Ad. Köşe Koruyucu Set Kahverengi",
    category: "cocuk-guvenlik",
    subcategory: "Köşe-Kenar Koruyucu Setler",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/fc5151f0-575a-4944-8c6a-4a568913675a-dfa9e0.jpg",
    description:
      "5'li Jumbo 2 Mt. Kenar Ve 4 Ad. Köşe Koruyucu Set Kahverengi. Kenar ve köşe koruyucu komple set, kapsamlı koruma.",
    features: ["Jumbo Boyut", "Kahverengi Renk", "2 Mt Uzunluk", "5'li Set"],
    minOrder: 80,
    tag: "En Çok Satan",
  },
  {
    id: "edu-50",
    title: "5'li Jumbo 2 Mt. Kenar Ve 4 Ad. Köşe Koruyucu Set Gri",
    category: "cocuk-guvenlik",
    subcategory: "Köşe-Kenar Koruyucu Setler",
    image:
      "https://static.ticimax.cloud/55427/uploads/urunresimleri/buyuk/-jumbo-2-mt.-kenar-ve-4-ad-d1-44d.png",
    description:
      "5'li Jumbo 2 Mt. Kenar Ve 4 Ad. Köşe Koruyucu Set Gri. Kenar ve köşe koruyucu komple set, kapsamlı koruma.",
    features: ["Jumbo Boyut", "Gri Renk", "2 Mt Uzunluk", "5'li Set"],
    minOrder: 80,
    tag: "Popüler",
  },
  {
    id: "edu-51",
    title: "10'lu Jumbo 2 Mt. Kenar Ve 4 Ad. Köşe Koruyucu Set Siyah",
    category: "cocuk-guvenlik",
    subcategory: "Köşe-Kenar Koruyucu Setler",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/10lu-jumbo-2-mt.-kenar-ve-4-ad--b2ec-.jpg",
    description:
      "10'lu Jumbo 2 Mt. Kenar Ve 4 Ad. Köşe Koruyucu Set Siyah. Kenar ve köşe koruyucu komple set, kapsamlı koruma.",
    features: ["Jumbo Boyut", "Siyah Renk", "2 Mt Uzunluk", "10 Adet Set"],
    minOrder: 80,
    tag: "Yeni",
  },
  {
    id: "edu-52",
    title: "10'lu Jumbo 2 Mt. Kenar Ve 4 Ad. Köşe Koruyucu Set Krem",
    category: "cocuk-guvenlik",
    subcategory: "Köşe-Kenar Koruyucu Setler",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/10lu-jumbo-2-mt.-kenar-ve-4-ad--b2ec-.jpg",
    description:
      "10'lu Jumbo 2 Mt. Kenar Ve 4 Ad. Köşe Koruyucu Set Krem. Kenar ve köşe koruyucu komple set, kapsamlı koruma.",
    features: ["Jumbo Boyut", "Krem Renk", "2 Mt Uzunluk", "10 Adet Set"],
    minOrder: 80,
    tag: "Premium",
  },
  {
    id: "edu-53",
    title: "10'lu Jumbo 2 Mt. Kenar Ve 4 Ad. Köşe Koruyucu Set Kahverengi",
    category: "cocuk-guvenlik",
    subcategory: "Köşe-Kenar Koruyucu Setler",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/-10lu-jumbo-2-mt.-kenar-ve-4-ad--43c0-.jpg",
    description:
      "10'lu Jumbo 2 Mt. Kenar Ve 4 Ad. Köşe Koruyucu Set Kahverengi. Kenar ve köşe koruyucu komple set, kapsamlı koruma.",
    features: ["Jumbo Boyut", "Kahverengi Renk", "2 Mt Uzunluk", "10 Adet Set"],
    minOrder: 80,
    tag: null,
  },
  {
    id: "edu-54",
    title: "10'lu Jumbo 2 Mt. Kenar Ve 4 Ad. Köşe Koruyucu Set Gri",
    category: "cocuk-guvenlik",
    subcategory: "Köşe-Kenar Koruyucu Setler",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/-10lu-jumbo-2-mt.-kenar-ve-4-ad-a891-4.jpg",
    description:
      "10'lu Jumbo 2 Mt. Kenar Ve 4 Ad. Köşe Koruyucu Set Gri. Kenar ve köşe koruyucu komple set, kapsamlı koruma.",
    features: ["Jumbo Boyut", "Gri Renk", "2 Mt Uzunluk", "10 Adet Set"],
    minOrder: 80,
    tag: null,
  },
  // KENAR KORUYUCULAR
  {
    id: "edu-55",
    title: "3'lü 40 cm Kauçuk Jumbo Kenar Koruyucu Gri",
    category: "cocuk-guvenlik",
    subcategory: "Kenar Koruyucular",
    image:
      "https://static.ticimax.cloud/55427/uploads/urunresimleri/buyuk/3lu-40-cm-kaucuk-jumbo-kenar-kor-5d1-21.jpg",
    description:
      "3'lü 40 cm Kauçuk Jumbo Kenar Koruyucu Gri. Mobilya kenarlarını kaplayan koruyucu bant, darbelere karşı güvenli.",
    features: ["Jumbo Boyut", "Doğal Kauçuk", "Gri Renk", "40 cm Uzunluk"],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-56",
    title: "3'lü 40 cm Kauçuk Jumbo Kenar Koruyucu Krem",
    category: "cocuk-guvenlik",
    subcategory: "Kenar Koruyucular",
    image:
      "https://static.ticimax.cloud/55427/uploads/urunresimleri/buyuk/3lu-40-cm-kaucuk-jumbo-kenar-kor-f60f-9.jpg",
    description:
      "3'lü 40 cm Kauçuk Jumbo Kenar Koruyucu Krem. Mobilya kenarlarını kaplayan koruyucu bant, darbelere karşı güvenli.",
    features: ["Jumbo Boyut", "Doğal Kauçuk", "Krem Renk", "40 cm Uzunluk"],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-57",
    title: "Jumbo 2 Mt. Beyaz Kenar Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Kenar Koruyucular",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/jumbo-2-mt-22a-c0.jpg",
    description:
      "Jumbo 2 Mt. Beyaz Kenar Koruyucu. Mobilya kenarlarını kaplayan koruyucu bant, darbelere karşı güvenli.",
    features: [
      "Jumbo Boyut",
      "Beyaz Renk",
      "2 Mt Uzunluk",
      "Yapışkanlı Montaj",
    ],
    minOrder: 100,
    tag: "En Çok Satan",
  },
  {
    id: "edu-58",
    title: "Extrem Jumbo 2 Mt Gri Kenar Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Kenar Koruyucular",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/a0333b7d-8db6-4444-87e6-9415ce465114-2eec1b.png",
    description:
      "Extrem Jumbo 2 Mt Gri Kenar Koruyucu. Mobilya kenarlarını kaplayan koruyucu bant, darbelere karşı güvenli.",
    features: ["Jumbo Boyut", "Gri Renk", "2 Mt Uzunluk", "Yapışkanlı Montaj"],
    minOrder: 100,
    tag: "Popüler",
  },
  {
    id: "edu-59",
    title: "Jumbo 2 Mt. Gri Kenar Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Kenar Koruyucular",
    image:
      "https://static.ticimax.cloud/55427/uploads/urunresimleri/buyuk/jumbo-2-mt-4c65-b.jpg",
    description:
      "Jumbo 2 Mt. Gri Kenar Koruyucu. Mobilya kenarlarını kaplayan koruyucu bant, darbelere karşı güvenli.",
    features: ["Jumbo Boyut", "Gri Renk", "2 Mt Uzunluk", "Yapışkanlı Montaj"],
    minOrder: 100,
    tag: "Yeni",
  },
  {
    id: "edu-60",
    title: "Jumbo 2 Mt. Siyah Kenar Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Kenar Koruyucular",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/jumbo-2-mt-4c65-b.jpg",
    description:
      "Jumbo 2 Mt. Siyah Kenar Koruyucu. Mobilya kenarlarını kaplayan koruyucu bant, darbelere karşı güvenli.",
    features: [
      "Jumbo Boyut",
      "Siyah Renk",
      "2 Mt Uzunluk",
      "Yapışkanlı Montaj",
    ],
    minOrder: 100,
    tag: "Premium",
  },
  {
    id: "edu-61",
    title: "Jumbo 2 Mt. Kahverengi Kenar Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Kenar Koruyucular",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/72561f0b-ef71-4339-b064-e4a56088e842-3bacec.jpg",
    description:
      "Jumbo 2 Mt. Kahverengi Kenar Koruyucu. Mobilya kenarlarını kaplayan koruyucu bant, darbelere karşı güvenli.",
    features: [
      "Jumbo Boyut",
      "Kahverengi Renk",
      "2 Mt Uzunluk",
      "Yapışkanlı Montaj",
    ],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-62",
    title: "Jumbo 2 Mt. Krem Kenar Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Kenar Koruyucular",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/9bb62737-ef54-4a01-a695-8031234ef33a-ac-86d.jpg",
    description:
      "Jumbo 2 Mt. Krem Kenar Koruyucu. Mobilya kenarlarını kaplayan koruyucu bant, darbelere karşı güvenli.",
    features: ["Jumbo Boyut", "Krem Renk", "2 Mt Uzunluk", "Yapışkanlı Montaj"],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-63",
    title: "Orta 2 Mt. Kahverengi Kenar Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Kenar Koruyucular",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/orta-2-mt-805-ba.jpg",
    description:
      "Orta 2 Mt. Kahverengi Kenar Koruyucu. Mobilya kenarlarını kaplayan koruyucu bant, darbelere karşı güvenli.",
    features: [
      "Orta Profil",
      "Kahverengi Renk",
      "2 Mt Uzunluk",
      "Yapışkanlı Montaj",
    ],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-64",
    title: "Orta 2 Mt. Gri Kenar Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Kenar Koruyucular",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/orta-2-mt-77f-3c.png",
    description:
      "Orta 2 Mt. Gri Kenar Koruyucu. Mobilya kenarlarını kaplayan koruyucu bant, darbelere karşı güvenli.",
    features: ["Orta Profil", "Gri Renk", "2 Mt Uzunluk", "Yapışkanlı Montaj"],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-65",
    title: "Orta 2 Mt. Krem Kenar Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Kenar Koruyucular",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/orta-2-mt-1f-87c.jpg",
    description:
      "Orta 2 Mt. Krem Kenar Koruyucu. Mobilya kenarlarını kaplayan koruyucu bant, darbelere karşı güvenli.",
    features: ["Orta Profil", "Krem Renk", "2 Mt Uzunluk", "Yapışkanlı Montaj"],
    minOrder: 100,
    tag: "En Çok Satan",
  },
  {
    id: "edu-66",
    title: "Orta 2 Mt. Siyah Kenar Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Kenar Koruyucular",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/orta-2-mt-3aa3cd.png",
    description:
      "Orta 2 Mt. Siyah Kenar Koruyucu. Mobilya kenarlarını kaplayan koruyucu bant, darbelere karşı güvenli.",
    features: [
      "Orta Profil",
      "Siyah Renk",
      "2 Mt Uzunluk",
      "Yapışkanlı Montaj",
    ],
    minOrder: 100,
    tag: "Popüler",
  },
  {
    id: "edu-67",
    title: "U Tipi Kauçuk Kenar Koruyucu Krem",
    category: "cocuk-guvenlik",
    subcategory: "Kenar Koruyucular",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/u-tipi-kaucuk-kenar-koruyucu-kremm--1a60b3.png",
    description:
      "U Tipi Kauçuk Kenar Koruyucu Krem. Mobilya kenarlarını kaplayan koruyucu bant, darbelere karşı güvenli.",
    features: ["Doğal Kauçuk", "U Profil", "Krem Renk", "Yapışkanlı Montaj"],
    minOrder: 100,
    tag: "Yeni",
  },
  {
    id: "edu-68",
    title: "2 Mt. Şeffaf Kenar Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Kenar Koruyucular",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/6b31de86-6940-4595-a68b-ddb8843ef738-49a9-8.png",
    description:
      "2 Mt. Şeffaf Kenar Koruyucu. Mobilya kenarlarını kaplayan koruyucu bant, darbelere karşı güvenli.",
    features: [
      "Şeffaf Tasarım",
      "2 Mt Uzunluk",
      "Yapışkanlı Montaj",
      "Kolay Kesim",
    ],
    minOrder: 100,
    tag: "Premium",
  },
  {
    id: "edu-69",
    title: "Şeffaf U Tipi Kenar Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Kenar Koruyucular",
    image:
      "https://static.ticimax.cloud/55427/uploads/urunresimleri/buyuk/seffaf-u-tipi-kenar-koruyucu--e54-a0.jpg",
    description:
      "Şeffaf U Tipi Kenar Koruyucu. Mobilya kenarlarını kaplayan koruyucu bant, darbelere karşı güvenli.",
    features: [
      "U Profil",
      "Şeffaf Tasarım",
      "Yapışkanlı Montaj",
      "Kolay Kesim",
    ],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-70",
    title: "Slim 2 Mt. Kenar Koruyucu Gri",
    category: "cocuk-guvenlik",
    subcategory: "Kenar Koruyucular",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/caa1d9e6-8b14-4c83-b2ff-c7434650faab-59-895.jpg",
    description:
      "Slim 2 Mt. Kenar Koruyucu Gri. Mobilya kenarlarını kaplayan koruyucu bant, darbelere karşı güvenli.",
    features: ["Slim Profil", "Gri Renk", "2 Mt Uzunluk", "Yapışkanlı Montaj"],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-71",
    title: "Slim 2 Mt. Kenar Koruyucu Krem",
    category: "cocuk-guvenlik",
    subcategory: "Kenar Koruyucular",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/6e18e93c-c31e-45e7-a5fa-d43f9c0d5e1a-0-40e1.jpg",
    description:
      "Slim 2 Mt. Kenar Koruyucu Krem. Mobilya kenarlarını kaplayan koruyucu bant, darbelere karşı güvenli.",
    features: ["Slim Profil", "Krem Renk", "2 Mt Uzunluk", "Yapışkanlı Montaj"],
    minOrder: 100,
    tag: null,
  },
  // KAPI KOLU KORUYUCULAR
  {
    id: "edu-72",
    title: "Beyaz Kapı Kolu Güvenlik Kilidi",
    category: "cocuk-guvenlik",
    subcategory: "Kapı Kolu Koruyucular",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/944a7b1f-9dd6-453a-bb7a-42e3a56ab0e3-0e-815.jpg",
    description:
      "Beyaz Kapı Kolu Güvenlik Kilidi. Kapı kollarına takılan koruyucu, çocukların kapıyı açmasını engeller.",
    features: ["Beyaz Renk", "Evrensel Uyum", "Kolay Takma", "Dayanıklı"],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-73",
    title: "Gri-Beyaz Kapı Kolu Güvenlik Kilidi Dikey Katlamalı",
    category: "cocuk-guvenlik",
    subcategory: "Kapı Kolu Koruyucular",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/f81e86d4-bd64-465e-8164-8fdd53d82af7--ae25-.jpg",
    description:
      "Gri-Beyaz Kapı Kolu Güvenlik Kilidi Dikey Katlamalı. Kapı kollarına takılan koruyucu, çocukların kapıyı açmasını engeller.",
    features: ["Beyaz Renk", "Evrensel Uyum", "Kolay Takma", "Dayanıklı"],
    minOrder: 100,
    tag: "En Çok Satan",
  },
  {
    id: "edu-74",
    title: "2'li Silikon Noktalı Pembe Kapı Kolu Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Kapı Kolu Koruyucular",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/e0420195-404e-4fc5-a832-80acd90f77eb-28ff-c.png",
    description:
      "2'li Silikon Noktalı Pembe Kapı Kolu Koruyucu. Kapı kollarına takılan koruyucu, çocukların kapıyı açmasını engeller.",
    features: ["Silikon Malzeme", "Pembe Renk", "2 Adet", "Evrensel Uyum"],
    minOrder: 100,
    tag: "Popüler",
  },
  {
    id: "edu-75",
    title: "2'li Silikon Noktalı Yeşil Kapı Kolu Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Kapı Kolu Koruyucular",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/3d364090-8d53-44de-ae32-89a3279715df-f5fbb7.jpg",
    description:
      "2'li Silikon Noktalı Yeşil Kapı Kolu Koruyucu. Kapı kollarına takılan koruyucu, çocukların kapıyı açmasını engeller.",
    features: ["Silikon Malzeme", "Yeşil Renk", "2 Adet", "Evrensel Uyum"],
    minOrder: 100,
    tag: "Yeni",
  },
  {
    id: "edu-76",
    title: "2'li Silikon Noktalı Kahverengi Kapı Kolu Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Kapı Kolu Koruyucular",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/3d364090-8d53-44de-ae32-89a3279715df-f5fbb7.jpg",
    description:
      "2'li Silikon Noktalı Kahverengi Kapı Kolu Koruyucu. Kapı kollarına takılan koruyucu, çocukların kapıyı açmasını engeller.",
    features: ["Silikon Malzeme", "Kahverengi Renk", "2 Adet", "Evrensel Uyum"],
    minOrder: 100,
    tag: "Premium",
  },
  {
    id: "edu-77",
    title: "2 Adet Kapı Kolu Koruma Kılıfı Sarı-Gri",
    category: "cocuk-guvenlik",
    subcategory: "Kapı Kolu Koruyucular",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/654cd7b0-6c54-470c-9c50-6e9e8abb5135-e8de52.jpg",
    description:
      "2 Adet Kapı Kolu Koruma Kılıfı Sarı-Gri. Kapı kollarına takılan koruyucu, çocukların kapıyı açmasını engeller.",
    features: ["Gri Renk", "2 Adet", "Evrensel Uyum", "Kolay Takma"],
    minOrder: 100,
    tag: null,
  },
  // GÜVENLIK KILITLERI
  {
    id: "edu-78",
    title:
      "Play Safe Diamond Çok Fonksiyonlu Ayarlanabilir Uzun Güvenlik Kilidi Beyaz",
    category: "cocuk-guvenlik",
    subcategory: "Güvenlik Kilitleri",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/4d57aea8-c359-42e4-974b-a9a8b75633dc-95-874.png",
    description:
      "Play Safe Diamond Çok Fonksiyonlu Ayarlanabilir Uzun Güvenlik Kilidi Beyaz. Dolap ve çekmeceleri çocuklara karşı güvenli hale getirir.",
    features: [
      "Beyaz Renk",
      "PLAYSAFE Marka",
      "Diamond Serisi",
      "Güvenli Tasarım",
    ],
    minOrder: 60,
    tag: null,
  },
  {
    id: "edu-79",
    title: "Play Safe Diamond Extra Dayanıklı Sağ Açılı Dolap Kilidi Beyaz",
    category: "cocuk-guvenlik",
    subcategory: "Güvenlik Kilitleri",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/961ab418-cda3-4d1e-a4b4-d5ead4039ca1--87ef-.png",
    description:
      "Play Safe Diamond Extra Dayanıklı Sağ Açılı Dolap Kilidi Beyaz. Dolap ve çekmeceleri çocuklara karşı güvenli hale getirir.",
    features: [
      "Beyaz Renk",
      "PLAYSAFE Marka",
      "Diamond Serisi",
      "Güvenli Tasarım",
    ],
    minOrder: 60,
    tag: null,
  },
  {
    id: "edu-80",
    title: "Play Safe 6'lı Şeffaf Çok Fonksiyonlu Bebek Güvenlik Kilidi",
    category: "cocuk-guvenlik",
    subcategory: "Güvenlik Kilitleri",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/8333f96c-bc5f-4afd-ab69-3999a2285aef-dc9136.png",
    description:
      "Play Safe 6'lı Şeffaf Çok Fonksiyonlu Bebek Güvenlik Kilidi. Dolap ve çekmeceleri çocuklara karşı güvenli hale getirir.",
    features: [
      "Şeffaf Tasarım",
      "PLAYSAFE Marka",
      "6 Adet Set",
      "Güvenli Tasarım",
    ],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-81",
    title: "Play Safe 6'lı Şeffaf Çekmece Dolap Güvenlik Kilidi",
    category: "cocuk-guvenlik",
    subcategory: "Güvenlik Kilitleri",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/17c7d21f-0a92-4d5a-8407-2e349071622d-8-2503.png",
    description:
      "Play Safe 6'lı Şeffaf Çekmece Dolap Güvenlik Kilidi. Dolap ve çekmeceleri çocuklara karşı güvenli hale getirir.",
    features: [
      "Şeffaf Tasarım",
      "PLAYSAFE Marka",
      "6 Adet Set",
      "Güvenli Tasarım",
    ],
    minOrder: 100,
    tag: "En Çok Satan",
  },
  {
    id: "edu-82",
    title: "Şeffaf Numaratör Şifreli Çok Amaçlı Esnek Dolap ve Çekmece Kilidi",
    category: "cocuk-guvenlik",
    subcategory: "Güvenlik Kilitleri",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/abea1b6c-0ea4-4b23-8695-8cd8937b26e6-2c072c.jpg",
    description:
      "Şeffaf Numaratör Şifreli Çok Amaçlı Esnek Dolap ve Çekmece Kilidi. Dolap ve çekmeceleri çocuklara karşı güvenli hale getirir.",
    features: [
      "Şeffaf Tasarım",
      "Güvenli Tasarım",
      "Kolay Kurulum",
      "Dayanıklı",
    ],
    minOrder: 100,
    tag: "Popüler",
  },
  {
    id: "edu-83",
    title: "Play Safe Beyaz Kapı Kilidi",
    category: "cocuk-guvenlik",
    subcategory: "Güvenlik Kilitleri",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/944a7b1f-9dd6-453a-bb7a-42e3a56ab0e3-0e-815.jpg",
    description:
      "Play Safe Beyaz Kapı Kilidi. Dolap ve çekmeceleri çocuklara karşı güvenli hale getirir.",
    features: [
      "Beyaz Renk",
      "PLAYSAFE Marka",
      "Güvenli Tasarım",
      "Kolay Kurulum",
    ],
    minOrder: 100,
    tag: "Yeni",
  },
  {
    id: "edu-84",
    title: "Fırın Kapağı Kilidi",
    category: "cocuk-guvenlik",
    subcategory: "Güvenlik Kilitleri",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/95837d60-c918-43e9-9915-2c4b41617839-3ed-43.jpg",
    description:
      "Fırın Kapağı Kilidi. Dolap ve çekmeceleri çocuklara karşı güvenli hale getirir.",
    features: [
      "Güvenli Tasarım",
      "Kolay Kurulum",
      "Dayanıklı",
      "Çocuk Emniyeti",
    ],
    minOrder: 100,
    tag: "Premium",
  },
  // PRIZ KORUYUCULAR
  {
    id: "edu-85",
    title: "10 Adet Beyaz Yeniden Kullanılabilir ve Evrensel Priz Koruyucu Set",
    category: "cocuk-guvenlik",
    subcategory: "Priz Koruyucular",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/cecbfec8-7e11-4d1f-90cb-ccb72994b1b7-3f6dff.jpg",
    description:
      "10 Adet Beyaz Yeniden Kullanılabilir ve Evrensel Priz Koruyucu Set. Elektrik prizlerini çocuklara karşı güvenli hale getirir.",
    features: ["Beyaz Renk", "10 Adet Set", "Evrensel Uyum", "Kolay Çıkarma"],
    minOrder: 80,
    tag: null,
  },
  // PARMAK KORUYUCULAR
  {
    id: "edu-86",
    title: "Playsafe Kapı Tutucu Parmak Koruyucu Beyaz",
    category: "cocuk-guvenlik",
    subcategory: "Parmak Koruyucular",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/5635d860-15cb-4175-9805-493219a9043a-84d-44.jpg",
    description:
      "Playsafe Kapı Tutucu Parmak Koruyucu Beyaz. Kapı menteşelerinde parmak sıkışmasını önleyen koruyucu.",
    features: [
      "Beyaz Renk",
      "PLAYSAFE Marka",
      "Kapı Menteşe Uyumlu",
      "Kolay Montaj",
    ],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-87",
    title: "Playsafe Kapı Tutucu Parmak Koruyucu Kahverengi",
    category: "cocuk-guvenlik",
    subcategory: "Parmak Koruyucular",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/5635d860-15cb-4175-9805-493219a9043a-84d-44.jpg",
    description:
      "Playsafe Kapı Tutucu Parmak Koruyucu Kahverengi. Kapı menteşelerinde parmak sıkışmasını önleyen koruyucu.",
    features: [
      "Kahverengi Renk",
      "PLAYSAFE Marka",
      "Kapı Menteşe Uyumlu",
      "Kolay Montaj",
    ],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-88",
    title: "Körüklü Parmak Koruyucu 180 cm Krem",
    category: "cocuk-guvenlik",
    subcategory: "Parmak Koruyucular",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/33e505c8-04d2-4f38-a47b-c0dc772cc648-09-aba.jpg",
    description:
      "Körüklü Parmak Koruyucu 180 cm Krem. Kapı menteşelerinde parmak sıkışmasını önleyen koruyucu.",
    features: [
      "Krem Renk",
      "180 cm Uzunluk",
      "Kapı Menteşe Uyumlu",
      "Kolay Montaj",
    ],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-89",
    title: "Körüklü Parmak Koruyucu 180 cm Beyaz",
    category: "cocuk-guvenlik",
    subcategory: "Parmak Koruyucular",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/33e505c8-04d2-4f38-a47b-c0dc772cc648-09-aba.jpg",
    description:
      "Körüklü Parmak Koruyucu 180 cm Beyaz. Kapı menteşelerinde parmak sıkışmasını önleyen koruyucu.",
    features: [
      "Beyaz Renk",
      "180 cm Uzunluk",
      "Kapı Menteşe Uyumlu",
      "Kolay Montaj",
    ],
    minOrder: 100,
    tag: "En Çok Satan",
  },
  {
    id: "edu-90",
    title: "Körüklü Geniş Açılım Parmak Koruyucu Gri",
    category: "cocuk-guvenlik",
    subcategory: "Parmak Koruyucular",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/6cdd616d-6e21-48ce-83d4-1dc3b652653b-89eb18.jpg",
    description:
      "Körüklü Geniş Açılım Parmak Koruyucu Gri. Kapı menteşelerinde parmak sıkışmasını önleyen koruyucu.",
    features: ["Gri Renk", "Kapı Menteşe Uyumlu", "Kolay Montaj", "Dayanıklı"],
    minOrder: 100,
    tag: "Popüler",
  },
  {
    id: "edu-91",
    title: "Körüklü Geniş Açılım Parmak Koruyucu Beyaz",
    category: "cocuk-guvenlik",
    subcategory: "Parmak Koruyucular",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/6cdd616d-6e21-48ce-83d4-1dc3b652653b-89eb18.jpg",
    description:
      "Körüklü Geniş Açılım Parmak Koruyucu Beyaz. Kapı menteşelerinde parmak sıkışmasını önleyen koruyucu.",
    features: [
      "Beyaz Renk",
      "Kapı Menteşe Uyumlu",
      "Kolay Montaj",
      "Dayanıklı",
    ],
    minOrder: 100,
    tag: "Yeni",
  },
  {
    id: "edu-92",
    title: "Körüklü Geniş Açılım Parmak Koruyucu Krem",
    category: "cocuk-guvenlik",
    subcategory: "Parmak Koruyucular",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/6cdd616d-6e21-48ce-83d4-1dc3b652653b-89eb18.jpg",
    description:
      "Körüklü Geniş Açılım Parmak Koruyucu Krem. Kapı menteşelerinde parmak sıkışmasını önleyen koruyucu.",
    features: ["Krem Renk", "Kapı Menteşe Uyumlu", "Kolay Montaj", "Dayanıklı"],
    minOrder: 100,
    tag: "Premium",
  },
  {
    id: "edu-93",
    title: "Playsafe 150 cm Parmak Koruyucu Beyaz",
    category: "cocuk-guvenlik",
    subcategory: "Parmak Koruyucular",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/5635d860-15cb-4175-9805-493219a9043a-84d-44.jpg",
    description:
      "Playsafe 150 cm Parmak Koruyucu Beyaz. Kapı menteşelerinde parmak sıkışmasını önleyen koruyucu.",
    features: [
      "Beyaz Renk",
      "150 cm Uzunluk",
      "PLAYSAFE Marka",
      "Kapı Menteşe Uyumlu",
    ],
    minOrder: 100,
    tag: null,
  },
  // KAPI KORUYUCULAR
  {
    id: "edu-94",
    title: "3 Adet Sevimli Fonksiyonel Yumuşak Kapı Stoperi",
    category: "cocuk-guvenlik",
    subcategory: "Kapı Koruyucular",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/c2b5aead-4220-4e62-8e7c-3f2a1b0d9c4e-1f-4d3.jpg",
    description:
      "3 Adet Sevimli Fonksiyonel Yumuşak Kapı Stoperi. Kapılarda parmak sıkışmasını ve çarpmasını önler.",
    features: ["3 Adet", "Kolay Takma", "Yumuşak Malzeme", "Sessiz Kapanma"],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-95",
    title: "Yeşil Silikon Halkalı Kapı Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Kapı Koruyucular",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/9cd24bfe-87fc-4a4c-a9ab-8f34346e81b1-84-808.jpg",
    description:
      "Yeşil Silikon Halkalı Kapı Koruyucu. Kapılarda parmak sıkışmasını ve çarpmasını önler.",
    features: [
      "Silikon Malzeme",
      "Yeşil Renk",
      "Kolay Takma",
      "Yumuşak Malzeme",
    ],
    minOrder: 100,
    tag: null,
  },
  {
    id: "edu-96",
    title: "Gri Silikon Halkalı Kapı Koruyucu",
    category: "cocuk-guvenlik",
    subcategory: "Kapı Koruyucular",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/80d7dcd8-9d9e-42f9-b60b-09b287bc6029-c-410c.jpg",
    description:
      "Gri Silikon Halkalı Kapı Koruyucu. Kapılarda parmak sıkışmasını ve çarpmasını önler.",
    features: ["Silikon Malzeme", "Gri Renk", "Kolay Takma", "Yumuşak Malzeme"],
    minOrder: 100,
    tag: null,
  },
  // PENCERE KILITLERI
  {
    id: "edu-97",
    title: "Penkid Çelik Halatlı Kablolu Kapı Pencere Kilidi Beyaz",
    category: "cocuk-guvenlik",
    subcategory: "Pencere Kilitleri",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/4d57aea8-c359-42e4-974b-a9a8b75633dc-95-874.png",
    description:
      "Penkid Çelik Halatlı Kablolu Kapı Pencere Kilidi Beyaz. Pencere ve kapılarda güvenlik sağlayan çelik halatlı kilit sistemi.",
    features: ["Çelik Halat", "Beyaz Renk", "Pencere Uyumlu", "Güvenli Kilit"],
    minOrder: 100,
    tag: "En Çok Satan",
  },
  {
    id: "edu-98",
    title: "Penkid Çelik Halatlı Kablolu Kapı Pencere Kilidi Gri",
    category: "cocuk-guvenlik",
    subcategory: "Pencere Kilitleri",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/961ab418-cda3-4d1e-a4b4-d5ead4039ca1--87ef-.png",
    description:
      "Penkid Çelik Halatlı Kablolu Kapı Pencere Kilidi Gri. Pencere ve kapılarda güvenlik sağlayan çelik halatlı kilit sistemi.",
    features: ["Çelik Halat", "Gri Renk", "Pencere Uyumlu", "Güvenli Kilit"],
    minOrder: 100,
    tag: "Popüler",
  },
  {
    id: "edu-99",
    title: "Penkid Çelik Halatlı Kablolu Kapı Pencere Kilidi Siyah",
    category: "cocuk-guvenlik",
    subcategory: "Pencere Kilitleri",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/8333f96c-bc5f-4afd-ab69-3999a2285aef-dc9136.png",
    description:
      "Penkid Çelik Halatlı Kablolu Kapı Pencere Kilidi Siyah. Pencere ve kapılarda güvenlik sağlayan çelik halatlı kilit sistemi.",
    features: ["Çelik Halat", "Siyah Renk", "Pencere Uyumlu", "Güvenli Kilit"],
    minOrder: 100,
    tag: "Yeni",
  },
  {
    id: "edu-100",
    title: "Penkid Çelik Halatlı Kablolu Kapı Pencere Kilidi Kahverengi",
    category: "cocuk-guvenlik",
    subcategory: "Pencere Kilitleri",
    image:
      "https://static.ticimax.cloud/55427/Uploads/UrunResimleri/buyuk/17c7d21f-0a92-4d5a-8407-2e349071622d-8-2503.png",
    description:
      "Penkid Çelik Halatlı Kablolu Kapı Pencere Kilidi Kahverengi. Pencere ve kapılarda güvenlik sağlayan çelik halatlı kilit sistemi.",
    features: [
      "Çelik Halat",
      "Kahverengi Renk",
      "Pencere Uyumlu",
      "Güvenli Kilit",
    ],
    minOrder: 100,
    tag: "Premium",
  },
];

// Streç Film Ürünleri
export const stretchFilmProducts = [
  {
    id: "stretch-1",
    title: "Makine Tipi Streç Film",
    category: "strec-film",
    subcategory: "Endüstriyel",
    image: "/products/otomatik.jpg",
    description:
      "Otomatik sarma makineleri için yüksek performanslı streç film. 750-1500 metre.",
    features: [
      "50cm Genişlik",
      "9-50 Micron",
      "Yüksek Gerilme",
      "Şeffaf/Renkli",
    ],
    minOrder: 100,
    tag: "En Çok Satan",
  },
  {
    id: "stretch-2",
    title: "El Tipi Streç Film",
    category: "strec-film",
    subcategory: "Manuel",
    image: "/products/manuel.jpg",
    description:
      "Manuel paketleme için ergonomik streç film ruloları. Hafif ve kullanışlı.",
    features: ["Ergonomik", "Hafif Rulo", "Çeşitli Boyutlar", "Ekonomik"],
    minOrder: 200,
    tag: "Popüler",
  },
  {
    id: "stretch-3",
    title: "Gıda Streç Film",
    category: "strec-film",
    subcategory: "Gıda Sertifikalı",
    image: "/products/gida-strec.jpg",
    description:
      "Gıda güvenliği sertifikalı streç film. Ev ve profesyonel kullanım için.",
    features: ["FDA Onaylı", "8-12 Micron", "Yüksek Yapışma", "Kokusuz"],
    minOrder: 500,
    tag: "Sertifikalı",
  },
];

// Ambalaj Malzemeleri Ürünleri
export const packagingProducts = [
  {
    id: "pack-1",
    title: "Balonlu Naylon Rulo",
    category: "ambalaj",
    subcategory: "Koruyucu Ambalaj",
    image:
      "https://images.unsplash.com/photo-1607166452427-7e4477079cb9?w=600&h=400&fit=crop",
    description:
      "Kırılacak eşyalar için koruyucu balonlu naylon. Farklı boy seçenekleri.",
    features: [
      "50cm/100cm Genişlik",
      "50m/100m Uzunluk",
      "Büyük Balon",
      "Dayanıklı",
    ],
    minOrder: 50,
    tag: "En Çok Satan",
  },
  {
    id: "pack-2",
    title: "Kraft Kağıt Rulo",
    category: "ambalaj",
    subcategory: "Kağıt Ambalaj",
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop",
    description:
      "Çevre dostu kraft kağıt ruloları. Paketleme ve dolgu için ideal.",
    features: ["80gr/m²", "Geri Dönüşümlü", "50cm Genişlik", "300m Uzunluk"],
    minOrder: 30,
    tag: "Eko",
  },
  {
    id: "pack-3",
    title: "Koli Bandı (72 Adet)",
    category: "ambalaj",
    subcategory: "Bantlar",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    description: "Yüksek yapışma gücüne sahip şeffaf koli bandı. 45mm x 100m.",
    features: ["Güçlü Yapışma", "Şeffaf", "45mm x 100m", "72 Adet/Koli"],
    minOrder: 10,
    tag: null,
  },
  {
    id: "pack-4",
    title: "Karton Koli Seti",
    category: "ambalaj",
    subcategory: "Kutular",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&h=400&fit=crop",
    description: "E-ticaret için hazır karton koli seti. 5 farklı boyut.",
    features: ["5 Farklı Boy", "Baskısız", "Kraft Renk", "Kolay Katlama"],
    minOrder: 100,
    tag: "E-Ticaret",
  },
];

// Ev & Mutfak Ürünleri
export const homeProducts = [
  {
    id: "home-1",
    title: "Saklama Kabı Seti (24 Parça)",
    category: "ev-mutfak",
    subcategory: "Mutfak Organizasyon",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    description: "Hava geçirmez kapaklı saklama kabı seti. BPA içermez.",
    features: [
      "BPA Free",
      "Hava Geçirmez",
      "Bulaşık Makinesine Uygun",
      "24 Parça",
    ],
    minOrder: 50,
    tag: "En Çok Satan",
  },
  {
    id: "home-2",
    title: "Mutfak Düzenleyici Set",
    category: "ev-mutfak",
    subcategory: "Organizatörler",
    image:
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&h=400&fit=crop",
    description: "Çekmece ve dolap düzenleyici set. Modüler tasarım.",
    features: ["Modüler", "Beyaz/Şeffaf", "Kolay Temizlik", "10 Parça"],
    minOrder: 80,
    tag: "Popüler",
  },
  {
    id: "home-3",
    title: "Silikon Mutfak Seti",
    category: "ev-mutfak",
    subcategory: "Mutfak Aletleri",
    image:
      "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=600&h=400&fit=crop",
    description: "Isıya dayanıklı silikon mutfak gereçleri seti.",
    features: ["Isıya Dayanıklı", "Gıda Güvenli", "12 Parça", "Ahşap Saplı"],
    minOrder: 60,
    tag: "Yeni",
  },
];

// Tekstil Ürünleri
export const textileProducts = [
  {
    id: "textile-1",
    title: "Pamuklu Havlu Seti",
    category: "tekstil",
    subcategory: "Banyo Tekstili",
    image:
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=400&fit=crop",
    description: "100% pamuklu havlu seti. Yumuşak ve emici.",
    features: ["100% Pamuk", "500gr/m²", "6 Parça", "Çeşitli Renkler"],
    minOrder: 100,
    tag: "Premium",
  },
  {
    id: "textile-2",
    title: "Nevresim Takımı",
    category: "tekstil",
    subcategory: "Yatak Tekstili",
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=400&fit=crop",
    description: "Pamuk-polyester karışım nevresim takımı. Kolay ütülenir.",
    features: ["Kolay Ütü", "Çeşitli Boyutlar", "Modern Desenler", "4 Parça"],
    minOrder: 50,
    tag: "Popüler",
  },
];

// Kırtasiye Ürünleri
export const stationeryProducts = [
  {
    id: "stat-1",
    title: "Defter Seti (100 Adet)",
    category: "kirtasiye",
    subcategory: "Defterler",
    image:
      "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=600&h=400&fit=crop",
    description: "A4 ve A5 boyutlarında spiralli defter seti.",
    features: ["Spiralli", "80 Yaprak", "Çizgili/Kareli", "100 Adet Mix"],
    minOrder: 20,
    tag: "Okul",
  },
  {
    id: "stat-2",
    title: "Kalem Seti (500 Adet)",
    category: "kirtasiye",
    subcategory: "Yazı Gereçleri",
    image:
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=600&h=400&fit=crop",
    description: "Tükenmez kalem seti. Mavi, siyah, kırmızı renk seçenekleri.",
    features: ["0.7mm Uç", "Yumuşak Tutuş", "3 Renk", "500 Adet"],
    minOrder: 10,
    tag: "Toptan",
  },
];

// Elektronik Aksesuar Ürünleri
export const electronicProducts = [
  {
    id: "elec-1",
    title: "USB Şarj Kablosu Seti",
    category: "elektronik-aksesuar",
    subcategory: "Kablolar",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop",
    description:
      "Type-C, Lightning, Micro USB şarj kabloları. 1m ve 2m seçenekleri.",
    features: ["Hızlı Şarj", "Örgülü Kablo", "1m/2m", "3 Tip"],
    minOrder: 200,
    tag: "En Çok Satan",
  },
  {
    id: "elec-2",
    title: "Telefon Kılıfı Koleksiyonu",
    category: "elektronik-aksesuar",
    subcategory: "Kılıflar",
    image:
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&h=400&fit=crop",
    description: "iPhone ve Samsung modelleri için şık telefon kılıfları.",
    features: [
      "Şeffaf/Renkli",
      "Şok Emici",
      "Çeşitli Modeller",
      "Slim Tasarım",
    ],
    minOrder: 100,
    tag: "Popüler",
  },
];

// Tüm ürünleri birleştir
export const allCatalogProducts = [
  ...toyProducts,
  ...safetyProducts,
  ...stretchFilmProducts,
  ...packagingProducts,
  ...homeProducts,
  ...textileProducts,
  ...stationeryProducts,
  ...electronicProducts,
];

// Kategori bazlı ürün getirme fonksiyonu
export const getProductsByCategory = (categoryId) => {
  return allCatalogProducts.filter(
    (product) => product.category === categoryId
  );
};

// Kategori bilgisi getirme fonksiyonu
export const getCategoryById = (categoryId) => {
  return catalogCategories.find((cat) => cat.id === categoryId);
};
