export const products = [
  {
    id: 1,
    title: "Makine Tipi Streç Film",
    slug: "makine-tipi-strec-film",
    category: "endustriyel",
    image: "/products/otomatik.jpg",
    shortDesc: "Otomatik makinelerle yapılan ambalajlama işleminde kullanılır.",
    description:
      "Ürünleri sıcak, soğuk, yağış, toz ve kir gibi dış etkenlerden korur. Dış yüzeyi parlak ve kaygan olan ürün, toz ve kir tutmaz. Paletlerin birbirine yapışmasını önler. Saydam, hafif ve ekonomiktir, her türlü hava koşullarına dayanıklıdır.",
    features: [
      "Otomatik makinelerle yapılan ambalajlama işleminde kullanılır",
      "Eni 50 cm'dir",
      "Rulo sarım uzunluğu min 750 metre, max 1500 metredir",
      "9 ile 50 micron arasında istenilen kalınlıkta üretilebilir",
      "İsteğe bağlı olarak renkli üretim yapılabilir",
    ],
    specs: {
      width: "50 cm",
      length: "750 - 1500 metre",
      thickness: "9 - 50 micron",
      color: "Şeffaf / İsteğe bağlı renkli",
    },
    tag: "En Çok Satan",
  },
  {
    id: 2,
    title: "El Tipi (Manuel) Streç Film",
    slug: "el-tipi-strec-film",
    category: "endustriyel",
    image: "/products/manuel.jpg",
    shortDesc: "Makine gerektirmeden sarma işlemlerinde kullanılır.",
    description:
      "El tipi streç film ruloları makine gerektirmeden sarma işlemlerinde kullanılmaktadır. Ürün makine rulolarından daha hafif ve kısadır ve kullanıcı için kullanım kolaylığı sağlar. Paletlerdeki kolilerin ve yüklerin dağılmasını engellemek için tasarlanmıştır.",
    features: [
      "Makine gerektirmeden kullanılır",
      "Hafif ve kolay taşınabilir",
      "Kullanıcı dostu ergonomik tasarım",
      "Nemden ve tozdan koruma sağlar",
      "İstenilen renk ve kalınlıkta üretilebilir",
    ],
    specs: {
      width: "Çeşitli genişlikler",
      length: "Talebe göre",
      thickness: "İsteğe bağlı",
      color: "Şeffaf / Renkli",
    },
    tag: "Popüler",
  },
  {
    id: 3,
    title: "Gıda Streç Film",
    slug: "gida-strec-film",
    category: "gida",
    image: "/products/gida-strec.jpg",
    shortDesc: "Gıda malzemelerinin paketlendiği her yerde kullanılır.",
    description:
      "Ayba Ambalaj Gıda Streç Film'i, Evler, Şarküteriler, Pastaneler, Restoranlar başta olmak üzere gıda malzemelerin paketlendiği her yerde kullanılır. Yüksek oksijen ve nemi tutarak gıda malzemelerin ömrünü önemli ölçüde uzatır.",
    features: [
      "Gıda güvenliği sertifikalı",
      "Yüksek oksijen ve nem bariyeri",
      "Buzdolabı ve açık alan kullanımı",
      "Sıcak ve soğuk gıdalarda koruma",
      "Geri dönüştürülebilir, çevre dostu",
    ],
    specs: {
      width: "Müşteri talebi doğrultusunda",
      length: "Müşteri talebi doğrultusunda",
      thickness: "8 - 12 micron",
      color: "Şeffaf",
    },
    tag: "Sertifikalı",
  },
];

export const categories = [
  { key: "tumu", label: "Tüm Ürünler" },
  { key: "endustriyel", label: "Endüstriyel" },
  { key: "gida", label: "Gıda" },
];
