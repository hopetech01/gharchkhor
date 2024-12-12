// import BlurFade from "@/components/ui/blur-fade";

// Define the menu items
const menuItems = [
  {
    id: 1,
    name: "جوجه کباب ترش",
    description:
      "یک غذای لذیذ ایرانی که از گوشت مرغ تازه با طعم ترش و ادویه‌های خاص تهیه می‌شود. مناسب برای وعده‌های ناهار و شام.",
    // imageUrl: "https://picsum.photos/seed/1/800/600",
    iframeSrc: "https://sketchfab.com/models/fba387c74a6e4bee9bc08b4f4c6b2c71/embed",
  },
  {
    id: 2,
    name: "دونر کباب",
    description:
      "یک غذای محبوب ترکی و ایرانی که از گوشت نازک و خوشمزه در داخل نان پیچیده شده سرو می‌شود.",
    iframeSrc: "https://sketchfab.com/models/17810186cf094cdeae1252ecd11454af/embed",
  },
  {
    id: 3,
    name: "میکس کباب",
    description:
      "ترکیبی از انواع کباب‌های مختلف که به صورت یکجا سرو می‌شوند و تجربه‌ای بی‌نظیر از طعم‌ها را فراهم می‌کنند.",
    iframeSrc: "https://sketchfab.com/models/4fc7877056a84493aa00e2422bb1123c/embed",
  },
  {
    id: 4,
    name: "کوبیده کباب",
    description:
      "کبابی سنتی ایرانی که از مخلوط گوشت چرخ‌کرده گوسفندی و گاوی با ادویه‌های خاص تهیه می‌شود.",
    iframeSrc: "https://sketchfab.com/models/635ea9b1bdf44a45adf83e5bdb12e2a8/embed",
  },
  {
    id: 5,
    name: "کباب کوبیده",
    description:
      "نوعی کباب ایرانی که از گوشت چرخ‌کرده با پیاز و زعفران تهیه شده و به سیخ کشیده می‌شود.",
    iframeSrc: "https://sketchfab.com/models/0435112a36f643a780e231f572f232f7/embed",
  },
  {
    id: 6,
    name: "غافغاز کباب",
    description:
      "کبابی خوشمزه با طعم‌های منحصر به فرد که از ترکیب گوشت و ادویه‌های خاص تهیه می‌شود.",
    iframeSrc: "https://sketchfab.com/models/56be9948736b409eb74262049a4745e2/embed",
  },
  {
    id: 7,
    name: "سلطانی کباب",
    description:
      "یکی از انواع کباب‌های معروف ایرانی با گوشت نرم و خوش‌طعم که معمولا با برنج سرو می‌شود.",
    iframeSrc: "https://sketchfab.com/models/06b75936997e449a8c2c884ad5d6a6fd/embed",
  },
  {
    id: 8,
    name: "شیشلیک بره",
    description:
      "برش‌های نرم و لطیف بره که با ادویه‌های معطر کباب می‌شوند و طعمی بی‌نظیر دارند.",
    iframeSrc: "https://sketchfab.com/models/8936b1b0e5b14d6ab400eda63744cef6/embed",
  },
  {
    id: 9,
    name: "شاهی",
    description:
      "کبابی با ترکیبی از گوشت و سبزیجات که طعم و مزه‌ای خاص و دلپذیر دارد.",
    iframeSrc: "https://sketchfab.com/models/4b18ebc61262497ebe5fa1a85bb0196f/embed",
  },
  {
    id: 10,
    name: "کوبیده",
    description:
      "کبابی سنتی با طعم‌های اصیل ایرانی که از گوشت چرخ‌کرده و ادویه‌های خاص تهیه می‌شود.",
    iframeSrc: "https://sketchfab.com/models/e036d29ebed84de3b7a0c26608ebe3da/embed",
  },
  {
    id: 11,
    name: "اسکن تاریخ 2023-05-27",
    description:
      "مدل سه‌بعدی مربوط به اسکن تاریخ 2023-05-27 که نمایی دقیق از محصول ارائه می‌دهد.",
    iframeSrc: "https://sketchfab.com/models/d5c21f2b64504d0cb963d77a807d3021/embed?ui_infos=0",
  },
  {
    id: 12,
    name: "چیکن ساتای سیخ‌ها",
    description:
      "ساطی مرغ خوش‌طعم که با ادویه‌های خاصی مزین شده و بر روی سیخ کباب می‌شود.",
    iframeSrc: "https://sketchfab.com/models/7777c21998774760823c659a1cfdeaa1/embed",
  },
  {
    id: 13,
    name: "اسکن تاریخ 2023-05-07",
    description:
      "مدل سه‌بعدی مربوط به اسکن تاریخ 2023-05-07 که نمایی دقیق از محصول ارائه می‌دهد.",
    iframeSrc: "https://sketchfab.com/models/d5c21f2b64504d0cb963d77a807d3021/embed?ui_infos=0",
  },
];

export function Gallery() {
  return (
    <div className="container mx-auto px-12 py-10" dir="rtl">
      <section id="menu">
        <h2 className="text-3xl font-bold mb-8 text-center">منوی روز</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, _idx) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* <BlurFade delay={0.25 + idx * 0.05} inView>
                <img
                  className="w-full h-48 object-cover"
                  src={item.imageUrl}
                  alt={item.name}
                />
              </BlurFade> */}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-right">{item.name}</h3>
                <p className="text-gray-600 mb-4 text-right">{item.description}</p>
                <div className="sketchfab-embed-wrapper">
                  <iframe
                    title={item.name}
                    allowFullScreen
                    // mozallowfullscreen="true"
                    // webkitallowfullscreen="true"
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    xr-spatial-tracking
                    execution-while-out-of-viewport
                    execution-while-not-rendered
                    web-share
                    className="w-full h-64 rounded-lg"
                    src={item.iframeSrc}
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
