"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CalendarClock,
  CheckCircle2,
  Download,
  Eye,
  Files,
  FolderCheck,
  History,
  LockKeyhole,
  MessageCircle,
  MousePointerClick,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Wand2,
  Zap
} from "lucide-react";

const downloadUrl =
  "https://www.mediafire.com/file/mclgdda28frh9kf/%25D8%25A8%25D8%25B1%25D9%2586%25D8%25A7%25D9%2585%25D8%25AC_%25D8%25B1%25D8%25AA%25D8%25A8%25D9%2587%25D8%25A7.zip/file";
const whatsappUrl = "https://wa.me/966573730430";

const navItems = [
  ["المميزات", "#features"],
  ["الصور", "#screenshots"],
  ["الخصوصية", "#privacy"],
  ["التواصل", "#contact"]
] as const;

const features = [
  {
    icon: FolderCheck,
    title: "تنظيم ذكي",
    text: "رتب الملفات حسب النوع أو التاريخ أو الامتداد، مع خيارات واضحة قبل التنفيذ."
  },
  {
    icon: Eye,
    title: "معاينة قبل الترتيب",
    text: "راجع ما سيحدث لملفاتك قبل الضغط على زر الترتيب، حتى تبقى كل خطوة تحت سيطرتك."
  },
  {
    icon: RotateCcw,
    title: "تراجع عند الحاجة",
    text: "لو غيرت رأيك، يمكنك الرجوع عن آخر عملية ترتيب بطريقة سهلة ومباشرة."
  },
  {
    icon: ShieldCheck,
    title: "آمن على ملفاتك",
    text: "يتعامل مع ملفاتك محلياً داخل جهازك، مع تجنب ملفات النظام والملفات الحساسة."
  },
  {
    icon: CalendarClock,
    title: "مراقبة تلقائية",
    text: "اختر مجلداً وقاعدة ترتيب، واترك رتبها يحافظ على المكان منظماً باستمرار."
  },
  {
    icon: Sparkles,
    title: "واجهة عربية حديثة",
    text: "تصميم ويندوز 11، خط عربي واضح، وثيم داكن مريح للاستخدام اليومي."
  }
];

const useCases = [
  "سطح مكتب مزدحم بالاختصارات والملفات",
  "مجلد التنزيلات بعد تحميل صور وفواتير وبرامج",
  "فرز المستندات حسب التاريخ أو نوع الملف",
  "ترتيب الصور والملفات قبل الأرشفة أو النسخ الاحتياطي"
];

const steps = [
  {
    icon: MousePointerClick,
    title: "اختر المكان",
    text: "سطح المكتب، التنزيلات، المستندات، الصور، الأقراص، أو مجلد مخصص."
  },
  {
    icon: Wand2,
    title: "حدد طريقة الترتيب",
    text: "رتب حسب النوع، التاريخ، أو الامتداد مع خيارات إضافية عند الحاجة."
  },
  {
    icon: CheckCircle2,
    title: "راجع ثم نفذ",
    text: "اعرض المعاينة، ثم اضغط رتب الآن، واسترجع العملية إذا احتجت."
  }
];

function Reveal({
  children,
  delay = 0
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.42, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

function PrimaryButton({
  href,
  children,
  icon
}: {
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className="focus-ring inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-[8px] bg-gradient-to-l from-ratbha-purple to-ratbha-blue px-6 text-base font-semibold text-white shadow-glow transition sm:w-auto"
    >
      {icon}
      {children}
    </motion.a>
  );
}

function SecondaryButton({
  href,
  children,
  icon
}: {
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className="focus-ring inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-[8px] border border-ratbha-border bg-ratbha-card px-6 text-base font-semibold text-white transition hover:bg-ratbha-cardHover sm:w-auto"
    >
      {icon}
      {children}
    </motion.a>
  );
}

function SectionTitle({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <Reveal>
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold text-ratbha-cyan">{eyebrow}</p>
        <h2 className="text-balance text-3xl font-semibold tracking-normal text-white md:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-base leading-8 text-ratbha-muted">{text}</p>
      </div>
    </Reveal>
  );
}

function AppMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
      className="brand-border relative hidden overflow-hidden rounded-[8px] bg-[#07101d] p-3 shadow-soft md:block"
    >
      <div className="flex h-[430px] gap-3 rounded-[8px] border border-ratbha-border bg-ratbha-bg p-4 max-sm:h-auto max-sm:flex-col">
        <aside className="w-44 rounded-[8px] border border-ratbha-border bg-[#07101d] p-4 max-sm:w-full">
          <Image
            src="/logo.png"
            alt="شعار رتبها"
            width={96}
            height={96}
            className="mx-auto h-20 w-20 object-contain"
            priority
          />
          <p className="mt-3 text-center text-xl font-semibold">رتبها</p>
          <div className="mt-6 space-y-2 text-sm font-medium">
            {["الرئيسية", "السجل", "القوالب", "الإعدادات"].map((item, index) => (
              <div
                key={item}
                className={`flex h-10 items-center justify-between rounded-[8px] px-3 ${
                  index === 0
                    ? "bg-[#1b3764] text-white"
                    : "text-ratbha-muted"
                }`}
              >
                <span>{item}</span>
                <span className="h-2 w-2 rounded-full bg-ratbha-blue" />
              </div>
            ))}
          </div>
        </aside>

        <main className="flex-1 space-y-3">
          <div className="rounded-[8px] border border-ratbha-border bg-ratbha-card p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold">رتبها</h3>
                <p className="mt-2 text-sm text-ratbha-muted">
                  رتب ملفاتك بسرعة وبشكل آمن مع معاينة قبل التنفيذ.
                </p>
              </div>
              <Image
                src="/logo.png"
                alt=""
                width={112}
                height={112}
                className="h-24 w-24 object-contain"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
            <div className="rounded-[8px] border border-ratbha-border bg-ratbha-card p-4">
              <span className="mb-4 block h-2 w-2 rounded-full bg-ratbha-blue" />
              <h4 className="text-lg font-semibold">اختيار الموقع</h4>
              <div className="mt-4 rounded-[8px] border border-ratbha-border bg-[#0b1728] px-4 py-3 text-sm">
                سطح المكتب
              </div>
              <div className="mt-3 grid gap-3 xl:grid-cols-[112px_1fr]">
                <div className="rounded-[8px] bg-[#1b3764] px-4 py-3 text-center text-sm">استعراض</div>
                <div className="min-w-0 truncate rounded-[8px] border border-ratbha-border bg-[#0b1728] px-4 py-3 text-left text-xs" dir="ltr">
                  C:\Users\essam\Desktop
                </div>
              </div>
            </div>
            <div className="rounded-[8px] border border-ratbha-border bg-ratbha-card p-4">
              <span className="mb-4 block h-2 w-2 rounded-full bg-ratbha-purple" />
              <h4 className="text-lg font-semibold">طريقة الترتيب</h4>
              <div className="mt-4 rounded-[8px] border border-ratbha-border bg-[#0b1728] px-4 py-3 text-sm">
                حسب النوع
              </div>
              <p className="mt-3 rounded-[8px] border border-ratbha-border px-4 py-3 text-sm text-ratbha-muted">
                المعاينة لا تنقل أي ملف، التنفيذ يبدأ بعد ضغط رتب الآن.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-3 rounded-[8px] border border-ratbha-border bg-ratbha-card p-4 max-sm:flex-col">
            <p className="text-sm font-semibold text-ratbha-muted">
              اختر موقعاً وطريقة ترتيب ثم ابدأ بالمعاينة.
            </p>
            <div className="flex gap-2">
              <span className="rounded-[8px] bg-[#1b3764] px-5 py-3 text-sm">تراجع</span>
              <span className="rounded-[8px] bg-ratbha-blue px-5 py-3 text-sm">معاينة</span>
              <span className="rounded-[8px] bg-gradient-to-l from-ratbha-purple to-ratbha-blue px-5 py-3 text-sm font-semibold">
                رتب الآن
              </span>
            </div>
          </div>
        </main>
      </div>
    </motion.div>
  );
}

function MobilePreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: 0.16 }}
      className="premium-card rounded-[8px] p-5 md:hidden"
    >
      <Image
        src="/logo.png"
        alt="شعار رتبها"
        width={150}
        height={150}
        className="mx-auto h-32 w-32 object-contain"
        priority
      />
      <div className="mt-5 grid grid-cols-2 gap-3">
        {["سطح المكتب", "حسب النوع", "معاينة", "تراجع"].map((item, index) => (
          <div
            key={item}
            className="rounded-[8px] border border-ratbha-border bg-[#0b1728] p-4 text-center text-sm font-medium"
          >
            <span
              className={`mx-auto mb-3 block h-2 w-2 rounded-full ${
                ["bg-ratbha-blue", "bg-ratbha-purple", "bg-ratbha-green", "bg-ratbha-yellow"][index]
              }`}
            />
            {item}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function BeforeAfter() {
  const before = ["IMG_3401.png", "invoice-final.pdf", "setup.exe", "notes.docx", "screen.mp4"];
  const after = ["صور", "مستندات", "برامج", "فيديو", "أرشيف"];

  return (
    <section className="site-shell py-20">
      <SectionTitle
        eyebrow="قبل وبعد"
        title="من فوضى الملفات إلى مساحة واضحة خلال لحظات"
        text="رتبها يحول المجلدات المزدحمة إلى تصنيفات مفهومة بدون خطوات كثيرة."
      />
      <div className="grid gap-5 md:grid-cols-2">
        <Reveal>
          <div className="premium-card rounded-[8px] p-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-ratbha-yellow" />
              <h3 className="text-xl font-semibold">قبل رتبها</h3>
            </div>
            <div className="space-y-3">
              {before.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-[8px] border border-ratbha-border bg-[#0b1728] p-4 text-ratbha-muted">
                  <Files className="h-5 w-5 text-ratbha-yellow" />
                  <span dir="ltr">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="premium-card rounded-[8px] p-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-ratbha-green" />
              <h3 className="text-xl font-semibold">بعد رتبها</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {after.map((item, index) => (
                <div key={item} className="rounded-[8px] border border-ratbha-border bg-[#0b1728] p-5">
                  <FolderCheck
                    className={`mb-4 h-7 w-7 ${
                      ["text-ratbha-purple", "text-ratbha-blue", "text-ratbha-green", "text-ratbha-yellow", "text-ratbha-cyan"][index]
                    }`}
                  />
                  <p className="text-lg font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function LandingPage() {
  return (
    <main className="overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-ratbha-bg/82 backdrop-blur-2xl">
        <nav className="site-shell flex min-h-20 items-center justify-between gap-4">
          <a href="#top" className="focus-ring flex items-center gap-3 rounded-[8px]">
            <Image
              src="/logo.png"
              alt="شعار رتبها"
              width={54}
              height={54}
              className="h-12 w-12 object-contain"
              priority
            />
            <span className="hidden text-xl font-semibold sm:inline">رتبها</span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-ratbha-muted md:flex">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="transition hover:text-white">
                {label}
              </a>
            ))}
          </div>
          <a
            href={downloadUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-[8px] bg-white px-4 text-sm font-semibold text-ratbha-bg transition hover:bg-ratbha-cyan"
          >
            <Download className="h-4 w-4" />
            حمل البرنامج
          </a>
        </nav>
      </header>

      <section id="top" className="site-shell relative py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-[8px] border border-ratbha-border bg-ratbha-card px-4 py-2 text-sm font-medium text-ratbha-muted">
              <Zap className="h-4 w-4 text-ratbha-yellow" />
              تنظيم سريع وآمن لملفات ويندوز
            </div>
            <h1 className="max-w-full text-balance text-3xl font-bold leading-[1.35] tracking-normal text-white sm:text-5xl md:text-6xl">
              سطح مكتبك مرتب دائماً.. بدون تعب
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-ratbha-muted">
              رتبها ينظم ملفاتك تلقائياً حسب النوع أو التاريخ أو الامتداد، ويحافظ على سطح المكتب والتنزيلات نظيفة وآمنة مع معاينة قبل التنفيذ وتراجع عند الحاجة.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 max-sm:flex-col">
              <PrimaryButton href={downloadUrl} icon={<Download className="h-5 w-5" />}>
                حمل البرنامج الآن
              </PrimaryButton>
              <SecondaryButton href={whatsappUrl} icon={<MessageCircle className="h-5 w-5 text-ratbha-green" />}>
                تواصل واتساب
              </SecondaryButton>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 text-center text-sm text-ratbha-muted sm:grid-cols-3">
              {["معاينة قبل التنفيذ", "تراجع سريع", "واجهة عربية"].map((item) => (
                <div key={item} className="rounded-[8px] border border-ratbha-border bg-ratbha-card px-3 py-4">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
          <AppMockup />
          <MobilePreview />
        </div>
      </section>

      <BeforeAfter />

      <section id="features" className="site-shell py-20">
        <SectionTitle
          eyebrow="لماذا رتبها؟"
          title="كل ما تحتاجه لتنظيف ملفاتك بدون تعقيد"
          text="صممنا رتبها ليكون قريباً من تجربة برامج Windows 11: واضح، سريع، ومريح للاستخدام اليومي."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={index * 0.03}>
                <motion.article
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className="premium-card h-full rounded-[8px] p-6"
                >
                  <Icon className="mb-5 h-8 w-8 text-ratbha-cyan" />
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-3 leading-8 text-ratbha-muted">{feature.text}</p>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section id="screenshots" className="site-shell py-20">
        <SectionTitle
          eyebrow="صور البرنامج"
          title="واجهة مرتبة وواضحة من أول تشغيل"
          text="لقطة من الواجهة الفعلية بعد تحسين اللغة العربية والتصميم، مع أزرار واضحة للمعاينة والترتيب والتراجع."
        />
        <Reveal>
          <div className="premium-card overflow-hidden rounded-[8px] p-3">
            <Image
              src="/screenshots/ratbha-app-home.png"
              alt="واجهة برنامج رتبها"
              width={855}
              height={670}
              className="h-auto w-full rounded-[8px] border border-ratbha-border object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="site-shell py-20">
        <SectionTitle
          eyebrow="حالات الاستخدام"
          title="مفيد لكل شخص يتعامل مع ملفات كثيرة"
          text="سواء كنت تنزل ملفات يومياً أو تجمع صور ومستندات للعمل، رتبها يحافظ على المساحة مفهومة."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {useCases.map((item, index) => (
            <Reveal key={item} delay={index * 0.04}>
              <div className="premium-card flex items-center gap-4 rounded-[8px] p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-ratbha-cardHover font-semibold text-ratbha-cyan">
                  {index + 1}
                </span>
                <p className="text-lg font-medium">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="site-shell py-20">
        <SectionTitle
          eyebrow="طريقة العمل"
          title="ثلاث خطوات فقط"
          text="بدون إعدادات معقدة أو نوافذ كثيرة. اختر، عاين، ثم رتب."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={index * 0.05}>
                <div className="premium-card h-full rounded-[8px] p-6">
                  <Icon className="mb-6 h-9 w-9 text-ratbha-purple" />
                  <p className="mb-3 text-sm font-semibold text-ratbha-cyan">الخطوة {index + 1}</p>
                  <h3 className="text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-4 leading-8 text-ratbha-muted">{step.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section id="privacy" className="site-shell py-20">
        <Reveal>
          <div className="premium-card grid items-center gap-8 rounded-[8px] p-8 md:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[8px] border border-ratbha-border bg-[#0b1728] p-8 text-center">
              <LockKeyhole className="mx-auto h-16 w-16 text-ratbha-green" />
              <p className="mt-5 text-2xl font-semibold">خصوصيتك أولاً</p>
            </div>
            <div>
              <p className="mb-3 text-sm font-semibold text-ratbha-green">آمن ومحلي</p>
              <h2 className="text-3xl font-semibold md:text-4xl">ملفاتك تبقى على جهازك</h2>
              <p className="mt-5 max-w-2xl text-lg leading-9 text-ratbha-muted">
                رتبها مصمم لتنظيم ملفات ويندوز محلياً. لا تحتاج إلى حساب، ولا يرفع ملفاتك إلى الإنترنت، ويعطيك معاينة واضحة قبل أي عملية ترتيب.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="contact" className="site-shell py-20">
        <div className="premium-card rounded-[8px] p-8 text-center">
          <Reveal>
            <Image
              src="/logo.png"
              alt="شعار رتبها"
              width={138}
              height={138}
              className="mx-auto h-32 w-32 object-contain"
            />
            <h2 className="mt-6 text-4xl font-bold">جاهز ترتب ملفاتك؟</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-9 text-ratbha-muted">
              حمل رتبها الآن وابدأ بتنظيم سطح المكتب والتنزيلات بطريقة أسرع وأنظف.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 max-sm:flex-col">
              <PrimaryButton href={downloadUrl} icon={<Download className="h-5 w-5" />}>
                حمل البرنامج الآن
              </PrimaryButton>
              <SecondaryButton href={whatsappUrl} icon={<MessageCircle className="h-5 w-5 text-ratbha-green" />}>
                تواصل مع المطور
              </SecondaryButton>
            </div>
            <p className="mt-5 text-sm text-ratbha-muted" dir="ltr">
              WhatsApp: +966573730430
            </p>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="site-shell flex flex-wrap items-center justify-between gap-4 text-sm text-ratbha-muted">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={36} height={36} className="h-9 w-9 object-contain" />
            <span>رتبها - برنامج تنظيم الملفات للويندوز</span>
          </div>
          <a href={downloadUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-white">
            حمل البرنامج
            <ArrowLeft className="h-4 w-4" />
          </a>
        </div>
      </footer>
    </main>
  );
}
