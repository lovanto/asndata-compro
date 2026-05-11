export const LOGO_SRC = "/logo.png";

export const NAV_LINKS = [
  { href: "#background", label: "Latar Belakang" },
  { href: "#jama", label: "JAMA/JAPIA" },
  { href: "#pillars", label: "Tiga Pilar" },
  { href: "#measures", label: "10 Langkah" },
  { href: "#partners", label: "Mitra" },
  { href: "#remote", label: "WFH Security" },
];

export const HERO_METRICS = [
  { num: "245", suffix: "+", label: "Supplier Peserta" },
  { num: "60", suffix: "", label: "Item Kontrol JAMA/JAPIA" },
  { num: "100", suffix: "%", label: "Target Des 2026" },
  { num: "30", suffix: "%", label: "Efisiensi Biaya" },
];

export const STAT_CARDS = [
  {
    big: "~26%",
    color: "red",
    desc: "insiden siber global menargetkan manufaktur — sektor paling banyak diserang di seluruh dunia.",
    source: "Sumber: IBM X-Force Threat Intelligence",
  },
  {
    big: "£1.9B",
    color: "red",
    desc: "Dampak finansial dari satu serangan siber — Jaguar Land Rover UK, Agustus 2025.",
    source: "Sumber: BBC.com",
  },
  {
    big: "3.64M",
    color: "cyan",
    desc: "Serangan siber tercatat oleh BSSN di Indonesia, Januari–Juli 2025.",
    source: "Sumber: BSSN Indonesia",
  },
];

export const JAMA_CARDS = [
  {
    year: "2023",
    items: "28 Item (V.1)",
    achievement: "47% (114/245)",
    achievementColor: "#ff6680",
    progress: 47,
    active: false,
  },
  {
    year: "2024",
    items: "60 Item (V.2)",
    achievement: "13% (32/245)",
    achievementColor: "#ff6680",
    progress: 13,
    active: false,
  },
  {
    year: "2025",
    items: "60 Item",
    achievement: "34% (84/245)",
    achievementColor: "#ff6680",
    progress: 34,
    active: false,
  },
  {
    year: "2026",
    items: "100% dari 60 Item",
    achievement: "2.0 / 2.0",
    achievementColor: "",
    progress: 100,
    active: true,
    isTarget: true,
  },
];

export const PILLARS = [
  {
    num: "01",
    title: "Awareness Management",
    desc: "Pelatihan kesadaran siber berbasis peran, simulasi phishing realistis, pelacakan sertifikasi kepatuhan, dan dasbor analitik untuk mengukur risiko manusia di seluruh organisasi.",
  },
  {
    num: "02",
    title: "Security Operations Center (SOC)",
    desc: "Pemantauan ancaman IT/OT 24/7, respons insiden cepat, intelijen ancaman spesifik OT, dan pelaporan kepatuhan untuk visibilitas penuh secara real-time di semua sistem.",
    highlighted: true,
  },
  {
    num: "03",
    title: "Infrastructure & Security Improvement",
    desc: "Akses jarak jauh yang aman, manajemen kerentanan, segmentasi jaringan OT/IT, serta solusi IAM yang kuat dengan Multi-Factor Authentication (MFA).",
  },
];

export const MEASURES = [
  {
    n: "1",
    title: "Security Operations Center (SOC)",
    desc: "Pemantauan, deteksi, dan respons terpusat 24/7. Platform SIEM dengan visibilitas real-time di semua aset.",
    badge: "Wajib",
    badgeColor: "red",
  },
  {
    n: "2",
    title: "Web Gateway",
    desc: "Secure Web Gateway (SWG) untuk memantau & mengontrol seluruh lalu lintas web. Melindungi dari phishing, malware, dan situs tidak patuh.",
    badge: "Wajib",
    badgeColor: "red",
  },
  {
    n: "3",
    title: "Email Gateway",
    desc: "Secure Email Gateway (SEG) untuk memfilter phishing, lampiran berbahaya, dan ancaman Business Email Compromise (BEC).",
    badge: "Wajib",
    badgeColor: "red",
  },
  {
    n: "4",
    title: "Enforce MFA",
    desc: "Multi-Factor Authentication untuk semua akses jarak jauh, sistem kritis, dan IAM menggunakan autentikasi SSO berbasis paspor.",
    badge: "Wajib",
    badgeColor: "red",
  },
  {
    n: "5",
    title: "EDR (Endpoint Detection & Response)",
    desc: "Pemantauan endpoint berkelanjutan dengan deteksi ancaman berbasis AI, respons otomatis, dan perlindungan anti-ransomware.",
    badge: "Wajib",
    badgeColor: "red",
  },
  {
    n: "6",
    title: "Cybersecurity Awareness",
    desc: "Pelatihan berbasis peran, simulasi phishing, pembentukan CSIRT, dan program e-learning untuk membangun pertahanan lapisan manusia.",
    badge: "Tinggi",
    badgeColor: "blue",
  },
  {
    n: "7",
    title: "Threat & Vulnerability Management",
    desc: "Pemindaian aset berkelanjutan, prioritas kerentanan berbasis risiko, VAPT (Vulnerability Assessment & Penetration Testing).",
    badge: "Tinggi",
    badgeColor: "blue",
  },
  {
    n: "8",
    title: "Patching & Configuration Management",
    desc: "Kebijakan patch terstruktur dengan deployment otomatis dan pemantauan kepatuhan konfigurasi di seluruh sistem.",
    badge: "Tinggi",
    badgeColor: "blue",
  },
  {
    n: "9",
    title: "Anti-Virus",
    desc: "Perlindungan endpoint dasar terhadap malware, trojan, dan ransomware dengan pemindaian real-time dan definisi yang selalu diperbarui.",
    badge: "Sedang",
    badgeColor: "cyan",
  },
  {
    n: "10",
    title: "Backups & Business Continuity (BCP)",
    desc: "Strategi backup offline (model 3-2-1), rencana DR terdokumentasi, dan latihan BCP rutin untuk meminimalkan downtime.",
    badge: "Tinggi",
    badgeColor: "blue",
  },
];

export const SOC_FEATURES = [
  { icon: "🔍", text: "Visibilitas real-time ke seluruh event keamanan di lingkungan IT dan OT" },
  { icon: "⚡", text: "Deteksi dan respons lebih cepat — ancaman teridentifikasi sebelum berdampak operasional" },
  { icon: "🛡️", text: "Penanganan insiden rahasia untuk lingkungan manufaktur yang terhubung" },
  { icon: "📊", text: "Pelaporan kepatuhan selaras dengan JAMA/JAPIA dan regulasi nasional" },
];

export const PARTNERS = [
  {
    tag: "IT Infrastructure & Cyber Security",
    name: "PT. Media Telekomunikasi Mandiri (MTM)",
    desc: "Mendukung pemasok dalam menyelesaikan penilaian JAMA/JAPIA dan mengimplementasikan peningkatan keamanan dengan efisiensi biaya melalui managed services.",
  },
  {
    tag: "System Integration",
    name: "PT. Fujitsu Indonesia",
    desc: "Mitra integrasi sistem terpercaya yang memastikan adopsi standar yang efisien, andal, dan skalabel di seluruh ekosistem pemasok.",
    list: [
      "Dukungan integrasi sistem end-to-end",
      "Standarisasi implementasi keamanan siber",
      "Pemantauan terpusat dan visibilitas data",
      "Panduan teknis dan penyelarasan praktik terbaik",
      "Dukungan peningkatan berkelanjutan",
    ],
    highlighted: true,
  },
  {
    tag: "System Development & Maintenance",
    name: "PT. Lumicore Sinergi Awan",
    desc: "Mitra pengembangan dan pemeliharaan sistem — termasuk peningkatan, perbaikan bug, dan pembaruan rutin untuk mendukung kontinuitas operasional.",
  },
];

export const CSIRT_ITEMS = [
  "Akses platform intelijen ancaman siber",
  "Peringatan lalu lintas abnormal",
  "Dukungan pemulihan insiden",
  "Advisory keamanan berkala",
];

export const WFH_CARDS = [
  {
    title: "Kesiapan Infrastruktur",
    items: ["Laptop/PC dari perusahaan (spesifikasi standar)", "Antivirus / EDR terpasang", "Koneksi stabil ≥20 Mbps"],
  },
  {
    title: "Pengaturan Keamanan",
    items: [
      "Akses VPN (wajib)",
      "Multi-Factor Authentication (MFA)",
      "Akses berbasis peran (least privilege)",
      "DLP — tidak ada data sensitif tersimpan lokal",
    ],
  },
  {
    title: "Akses Sistem & Aplikasi",
    items: ["Email (Outlook / Gmail)", "Sistem internal (SAP, MES, Talend)", "File sharing (SharePoint, OneDrive)"],
  },
  {
    title: "Pemantauan Jaringan & VPN",
    items: ["Kapasitas VPN untuk pengguna bersamaan", "Pemantauan bandwidth", "Pencatatan aktivitas akses"],
  },
  {
    title: "Strategi Data & Backup",
    items: ["Cloud storage diberlakukan", "Auto backup aktif", "Version control aktif"],
  },
  {
    title: "Kelangsungan Bisnis",
    items: ["Backup IT PIC (redundansi)", "Rencana pemulihan bencana", "Prioritisasi sistem kritis"],
  },
];

export const SASE_ITEMS = [
  {
    title: "Akses Jarak Jauh Aman",
    desc: "Zero Trust Network Access memastikan koneksi terautentikasi dan terenkripsi dari lokasi mana pun.",
  },
  {
    title: "Infrastruktur Tersederhanakan",
    desc: "Manajemen terpusat mengkonsolidasikan operasi jaringan dan keamanan dalam satu platform.",
  },
  {
    title: "Pemantauan Penuh",
    desc: "Pemantauan real-time dan logging terpusat memberikan visibilitas lengkap atas aktivitas pengguna.",
  },
];
