import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Check,
  MoveRight,
  Star,
  Shield,
  Zap,
  Camera,
  Building2,
  Cpu,
  Sparkles,
} from "lucide-react";

/* =========================================================
   ДАННЫЕ
   ========================================================= */

// Проекты портфолио (каждый с набором кадров)
const portfolio = [
  {
    title: "Загородный дом — вечер",
    cat: "Экстерьеры",
    images: [
      "https://cdn-edge.kwork.ru/files/portfolio/t0/90/86dc14a1e666ee9c51520b5f1a50986603d4b1f1-1753866290.webp",
      "https://cdn-edge.kwork.ru/files/portfolio/t0/92/453292ee2770e44bb679a57bc6ef3288a4ea433c-1753866292.webp",
      "https://cdn-edge.kwork.ru/files/portfolio/t0/96/31031c9c8a9da091dd92a688cf767f140939784f-1753866296.webp",
    ],
    cover:
      "https://cdn-edge.kwork.ru/files/portfolio/t0/90/86dc14a1e666ee9c51520b5f1a50986603d4b1f1-1753866290.webp",
  },
  {
    title: "Интерьер — living room",
    cat: "Интерьеры",
    images: [
      "https://cdn-edge.kwork.ru/files/portfolio/t0/09/3037b1d49d420aa3e9cccd4041e5f6041fb6ef7f-1753879709.webp",
    ],
    cover:
      "https://cdn-edge.kwork.ru/files/portfolio/t0/09/3037b1d49d420aa3e9cccd4041e5f6041fb6ef7f-1753879709.webp",
  },
  {
    title: "Коммерческая — lobby",
    cat: "Коммерческие",
    images: [
      "https://cdn-edge.kwork.ru/files/portfolio/t0/10/73c93bc766488b868e0d166fed66dd6260898aa6-1753879710.webp",
    ],
    cover:
      "https://cdn-edge.kwork.ru/files/portfolio/t0/10/73c93bc766488b868e0d166fed66dd6260898aa6-1753879710.webp",
  },
];

const categories = ["Все", "Экстерьеры", "Интерьеры", "Коммерческие", "Мастер-план"];

// Прайс: базовый продукт + допы
const BASE_PRODUCT = {
  title:
    "Продающая фотореалистичная 3D-визуализация экстерьера вашего проекта",
  description:
    "Включено: 3D-моделирование проекта + визуализация до 3 ракурсов в 4K.",
  price: 10000, // ₽
};

const ADDONS = [
  { key: "extraAngle", label: "Дополнительный ракурс", price: 2000 },
  { key: "extraTimeOfDay", label: "Доп. вариант: другое время суток", price: 1500 },
  { key: "extraSeason", label: "Доп. вариант: другое время года", price: 1500 },
  { key: "extraWeather", label: "Доп. вариант: другая погода", price: 1500 },
];

/* =========================================================
   МЕЛКИЕ КОМПОНЕНТЫ
   ========================================================= */

const Feature = ({ icon: Icon, title, text }) => (
  <div className="flex gap-4">
    <div className="h-12 w-12 rounded-2xl bg-neutral-800 flex items-center justify-center">
      <Icon className="h-6 w-6 text-emerald-400" />
    </div>
    <div>
      <h4 className="font-semibold text-gray-100">{title}</h4>
      <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
    </div>
  </div>
);

const Stat = ({ value, label }) => (
  <div className="text-center p-4">
    <div className="text-3xl font-bold">{value}</div>
    <div className="text-sm text-gray-400">{label}</div>
  </div>
);

// Устойчивый FAQ на <details> без «дёрганий»
function QA({ q, a }) {
  return (
    <details className="group border border-neutral-800 rounded-xl overflow-hidden">
      <summary className="list-none cursor-pointer p-4 flex items-center justify-between">
        <span className="font-medium">{q}</span>
        <svg
          className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </summary>
      <div className="px-4 pb-4 text-sm text-gray-300">{a}</div>
    </details>
  );
}

/* =========================================================
   ПОРТФОЛИО (табы + сетка + лайтбокс-слайдер)
   ========================================================= */

function PortfolioTabs() {
  const [active, setActive] = useState("Все");
  const [lightbox, setLightbox] = useState(null); // { images:[], index:0, title:"" }
  const items = active === "Все" ? portfolio : portfolio.filter((i) => i.cat === active);

  const close = () => setLightbox(null);
  const next = () =>
    setLightbox((lb) => lb && { ...lb, index: (lb.index + 1) % lb.images.length });
  const prev = () =>
    setLightbox((lb) => lb && { ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length });

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <div>
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-4 py-2 rounded-full text-sm border transition ${
              active === c
                ? "bg-emerald-500 text-neutral-900 border-emerald-500"
                : "border-neutral-700 text-gray-300 hover:bg-neutral-900"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid md:grid-cols-3 gap-6">
        <AnimatePresence>
          {items.map((p, i) => (
            <motion.div
              key={`${p.title}-${i}-${active}`}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden rounded-2xl border border-neutral-800 cursor-pointer group relative"
              onClick={() => setLightbox({ images: p.images, index: 0, title: p.title })}
              whileHover={{ y: -6 }}
            >
              <img
                src={p.cover || p.images[0]}
                alt={p.title}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div className="p-4 flex items-center justify-between">
                <div className="text-sm text-gray-300 flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-emerald-400" />
                  {p.title}
                </div>
                <span className="text-xs text-gray-500">{p.cat}</span>
              </div>

              {p.images.length > 1 && (
                <div className="absolute top-2 right-2 text-[11px] bg-black/60 text-white px-2 py-1 rounded-full">
                  {p.images.length} фото
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* LIGHTBOX-СЛАЙДЕР */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <div className="absolute top-6 left-0 right-0 mx-auto max-w-4xl px-6 text-center text-sm text-gray-300">
              {lightbox.title}
            </div>

            <motion.img
              src={lightbox.images[lightbox.index]}
              alt={`${lightbox.title} — ${lightbox.index + 1}/${lightbox.images.length}`}
              className="max-h-[80vh] max-w-[90vw] rounded-2xl shadow-2xl"
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />

            {lightbox.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20"
                  aria-label="Предыдущий кадр"
                >
                  ←
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20"
                  aria-label="Следующий кадр"
                >
                  →
                </button>
              </>
            )}

            <div className="absolute bottom-6 left-0 right-0 mx-auto flex items-center justify-center gap-2">
              {lightbox.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightbox((lb) => ({ ...lb, index: idx }));
                  }}
                  className={`h-2 w-2 rounded-full ${idx === lightbox.index ? "bg-emerald-400" : "bg-white/40"}`}
                  aria-label={`Кадр ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
              className="absolute top-6 right-6 md:right-10 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20"
              aria-label="Закрыть"
            >
              Закрыть
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* =========================================================
   АНИМАЦИИ/ФОН
   ========================================================= */

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08 } }),
};

function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      {/* мягкая сетка */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      {/* радиальный свет */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[720px] rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(600px 300px at center, rgba(56,189,248,.6), transparent 60%)" }}
      />
    </div>
  );
}

/* =========================================================
   СТРАНИЦА
   ========================================================= */

export default function Landing3D() {
  return (
    <div className="min-h-screen bg-neutral-950 text-gray-100">
      <BackgroundFX />

      {/* NAV */}
      <header className="sticky top-0 z-40 bg-neutral-950/80 backdrop-blur border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-emerald-400" />
            <span className="font-semibold">blenderast</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#work" className="hover:opacity-70">Портфолио</a>
            <a href="#why" className="hover:opacity-70">Почему мы</a>
            <a href="#pricing" className="hover:opacity-70">Прайс</a>
            <a href="#about" className="hover:opacity-70">Обо мне</a>
            <a href="#faq" className="hover:opacity-70">FAQ</a>
            <a href="#brief" className="hover:opacity-70">Получить расчёт</a>
          </nav>
          <a href="#brief">
            <Button className="rounded-2xl bg-emerald-500 text-neutral-900">Расчёт проекта</Button>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                Фотореалистичная 3D-визуализация
              </span>{" "}
              без переплаты
            </h1>
            <p className="mt-4 text-gray-300 text-lg">
              Реализм выше рынка, стоимость ниже конкурентов. В среднем экономим заказчикам до 30–40% бюджета без потери качества.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#work">
                <Button className="rounded-2xl bg-emerald-500 text-neutral-900" variant="default">
                  Смотреть работы
                </Button>
              </a>
              <a href="#brief">
                <Button
                  className="rounded-2xl border-emerald-500 text-emerald-400 hover:bg-emerald-900/40"
                  variant="outline"
                >
                  Получить 3 кадра теста <MoveRight className="inline h-4 w-4 ml-1" />
                </Button>
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 md:w-3/4">
              <Stat value="10+" label="лет опыта" />
              <Stat value="> 200" label="проектов" />
              <Stat value="48ч" label="первые превью" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              initial={{ rotate: -6, y: 20 }}
              whileInView={{ rotate: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 70 }}
              className="grid grid-cols-2 gap-3"
            >
              {portfolio.slice(0, 4).map((p, i) => (
                <motion.img
                  key={i}
                  src={p.cover || p.images[0]}
                  alt={p.title}
                  className="rounded-2xl shadow-sm object-cover h-40 md:h-56 w-full"
                  whileHover={{ scale: 1.03 }}
                />
              ))}
            </motion.div>
            <motion.div
              className="pointer-events-none absolute inset-0 rounded-[40px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              style={{ boxShadow: "inset 0 0 120px rgba(255,255,255,0.06)" }}
            />
          </motion.div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="py-14 bg-neutral-900 border-y scroll-mt-24">
        <motion.div
          className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={sectionReveal} custom={0}>
            <Feature
              icon={Camera}
              title="Реализм как в фото"
              text="PBR-материалы, HDRI-свет, физическая камера. Детализация до фурнитуры и микрорельефов."
            />
          </motion.div>
          <motion.div variants={sectionReveal} custom={1}>
            <Feature
              icon={Cpu}
              title="Оптимизированный пайплайн"
              text="Скрипты/ноды и рендер-ферма → быстрые превью и предсказуемые сроки."
            />
          </motion.div>
          <motion.div variants={sectionReveal} custom={2}>
            <Feature
              icon={Shield}
              title="Прозрачные сроки и цена"
              text="Фикс по брифу. Исходники/кадры в срок, 2 раунда правок включены."
            />
          </motion.div>
        </motion.div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-16 bg-neutral-950 border-y scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between gap-4 mb-8">
            <h2 className="text-3xl font-bold">Прайс</h2>
            <p className="text-sm text-gray-400">
              База + быстрый выбор доп. опций. Смету фиксирую после брифа.
            </p>
          </div>

          <PricingConfigurator />
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-16 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between gap-4 mb-6">
            <h2 className="text-3xl font-bold">Портфолио</h2>
            <p className="text-sm text-gray-400">
              Фильтруйте по категориям: экстерьеры, интерьеры, коммерческие, мастер-план.
            </p>
          </div>
          <PortfolioTabs />
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-12 bg-neutral-950">
        <motion.div
          className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={sectionReveal} className="transition-transform hover:-translate-y-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-amber-500">
                  <Star className="h-5 w-5" />
                  <span className="font-semibold">98% довольных заказчиков</span>
                </div>
                <p className="text-sm text-gray-300 mt-2">
                  Средняя оценка 4.9/5. NDA — по запросу. Дедлайны соблюдаем.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={sectionReveal} className="transition-transform hover:-translate-y-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-emerald-400">
                  <Zap className="h-5 w-5" />
                  <span className="font-semibold">Первый драфт — 48 часов</span>
                </div>
                <p className="text-sm text-gray-300 mt-2">
                  Этапинг: бриф → серый каркас → материалы/свет → финал.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={sectionReveal} className="transition-transform hover:-translate-y-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-blue-500">
                  <Shield className="h-5 w-5" />
                  <span className="font-semibold">Гарантия правок</span>
                </div>
                <p className="text-sm text-gray-300 mt-2">
                  2 раунда базовых правок включены. Далее — почасово.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-4">Обо мне</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Я Марат — спец по архвизу. Делаю не «красивые картинки», а кадры, которые помогают продать идею проекта:
              они вызывают доверие у инвесторов и понятны покупателю, потому что выглядят как фото.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              На счету — 50+ проектов по России: от частных интерьеров до жилых комплексов. Среди клиентов: «Золотое
              Сечение», «Modul Modus», «Летник ПРО», «Базовый Модуль». Меня ценят за скорость и предсказуемость.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              В отличие от студий, где один кадр делают неделями, первые превью показываю через 48 часов — так быстрее
              согласовывать детали и экономить бюджет.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Политика простая: <span className="text-emerald-400 font-medium">правки входят в стоимость</span> до совпадения с ожиданиями. Поэтому вы заранее понимаете итог и сроки — без сюрпризов.
            </p>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-3">Что нужно от вас для старта</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Планировки/чертежи с размерами.</li>
              <li>Краткое описание: материалы, стилистика, особенности.</li>
              <li>Примеры/референсы желаемого результата.</li>
            </ul>
            <p className="mt-4 text-sm text-gray-400">
              Это поможет быстро оценить сроки и дать точную смету.
            </p>
          </div>
        </div>
      </section>

      {/* BRIEF FORM */}
      <section id="brief" className="py-16 scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Получить расчёт и тест-рендер</h2>
          <p className="text-gray-300 mt-2">
            Оставьте контакты — пришлю 3 тестовых кадра и смету. Отвечу в течение дня.
          </p>

          <Card className="mt-6 rounded-2xl">
            <CardContent className="p-6">
              <form method="POST" action="https://formspree.io/f/XXXXYYYY" className="grid md:grid-cols-2 gap-4">
                {/* Honeypot */}
                <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
                {/* Formspree meta */}
                <input type="hidden" name="_subject" value="Новый лид: blenderast — расчёт + тест-рендер" />
                <input type="hidden" name="_redirect" value="https://YOUR-DOMAIN/thank-you" />

                <Input required name="name" placeholder="Имя" />
                <Input required type="email" name="email" placeholder="E-mail" />
                <Input name="phone" placeholder="Телефон / WhatsApp" />
                <Input name="city" placeholder="Город / Часовой пояс" />
                <div className="md:col-span-2">
                  <Textarea
                    name="details"
                    placeholder="Опишите объект: площадь, стиль, сроки, референсы"
                    className="min-h-[120px]"
                  />
                </div>

                <div className="md:col-span-2 flex items-center justify-between gap-4">
                  <div className="text-xs text-gray-400">
                    Защита от спама: honeypot + ограничение частоты. Для боевого сайта добавьте Cloudflare Turnstile/reCAPTCHA.
                  </div>
                  <Button type="submit" className="rounded-2xl bg-emerald-500 text-neutral-900">
                    Отправить запрос
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-neutral-900 border-t scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold">FAQ — Вопросы и ответы</h2>
          <p className="mt-2 mb-6 text-gray-400">Здесь — практические вещи, которых нет в других блоках.</p>

          <div className="space-y-3">
            {[
              {
                q: "Этапы работы и сроки?",
                a: "Бриф → оценка → предоплата 30% → черновые ракурсы → финальные материалы/свет → релиз. Малые проекты: 3–5 рабочих дней, средние: 6–10, крупные считаются индивидуально.",
              },
              {
                q: "Что нужно для старта?",
                a: "Планировки/чертежи, краткое ТЗ (материалы, стилистика, ограничения), референсы. Если чего-то нет — помогу собрать.",
              },
              { q: "Можно ли подписать NDA?", a: "Да. По умолчанию материалы не публикуются без вашего согласия." },
              {
                q: "Сколько правок включено?",
                a: "Два раунда базовых правок входят в стоимость. Нестандартные изменения (смена брифа, новые ракурсы) — по согласованию.",
              },
              {
                q: "Какие права на изображения после оплаты?",
                a: "Передаю неисключительные права для маркетинга/презентаций/документации. Исходные 3D-сцены — по отдельной договорённости.",
              },
              {
                q: "Форматы и разрешения?",
                a: "По умолчанию 4K JPG/PNG. По запросу — TIFF, альфа-каналы, другие соотношения сторон, файлы под полиграфию.",
              },
              {
                q: "Как рассчитывается стоимость?",
                a: "Влияют метраж, детализация, сроки, число ракурсов. После брифа фиксирую цену в смете; доп. задачи — отдельной строкой.",
              },
              {
                q: "Оплата и предоплата?",
                a: "Безнал/карта/СБП. Предоплата 30%, остаток — после утверждения финальных кадров (до выдачи исходников).",
              },
            ].map((item, idx) => (
              <QA key={idx} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-gray-400">
        <div className="max-w-6xl mx-auto px-4">
          © {new Date().getFullYear()} blenderast — 3D архитектурная визуализация.{" "}
          <a className="underline" href="#brief">Связаться</a>
          <div className="mt-2">Политика конфиденциальности · Договор оферты</div>
        </div>
      </footer>
    </div>
  );
}

/* =========================================================
   КОМПОНЕНТ ПРАЙС-КОНФИГУРАТОР
   ========================================================= */

function PricingConfigurator() {
  const [qtyAngle, setQtyAngle] = useState(0);
  const [opt, setOpt] = useState({
    extraTimeOfDay: false,
    extraSeason: false,
    extraWeather: false,
  });

  // Пересчёт суммы
  const total =
    BASE_PRODUCT.price +
    qtyAngle * getAddon("extraAngle").price +
    (opt.extraTimeOfDay ? getAddon("extraTimeOfDay").price : 0) +
    (opt.extraSeason ? getAddon("extraSeason").price : 0) +
    (opt.extraWeather ? getAddon("extraWeather").price : 0);

  function getAddon(k) {
    return ADDONS.find((a) => a.key === k) || { price: 0 };
  }

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Карточка базового продукта */}
      <Card className="rounded-2xl border-neutral-800 ring-1 ring-neutral-800 lg:col-span-1">
        <CardHeader>
          <CardTitle className="text-xl">
            {BASE_PRODUCT.title}
          </CardTitle>
          <p className="text-sm text-gray-400">{BASE_PRODUCT.description}</p>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-2 text-emerald-400">
            <Check className="h-4 w-4" />
            <span>Фотореализм: высокий</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-400">
            <Check className="h-4 w-4" />
            <span>Первые превью — 48 часов</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-400">
            <Check className="h-4 w-4" />
            <span>До 3 ракурсов в 4K включено</span>
          </div>

          <div className="mt-4 text-4xl font-bold">
            {formatRub(BASE_PRODUCT.price)}
          </div>
          <div className="text-xs text-gray-500">Базовый пакет</div>
        </CardContent>
      </Card>

      {/* Карточка доп. услуг */}
      <Card className="rounded-2xl border-neutral-800 lg:col-span-1">
        <CardHeader>
          <CardTitle className="text-xl">Детали заказа и доп. услуги</CardTitle>
          <p className="text-sm text-gray-400">
            Добавьте опции — сумма пересчитается автоматически.
          </p>
        </CardHeader>
        <CardContent className="space-y-5">
          {/* Дополнительный ракурс (с количеством) */}
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="font-medium">Дополнительный ракурс</div>
              <div className="text-xs text-gray-400">+ {formatRub(getAddon("extraAngle").price)} за ракурс</div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQtyAngle(Math.max(0, qtyAngle - 1))}
                className="px-3 py-1 rounded-lg border border-neutral-700 hover:bg-neutral-900"
                aria-label="Минус ракурс"
              >
                −
              </button>
              <div className="w-10 text-center">{qtyAngle}</div>
              <button
                onClick={() => setQtyAngle(qtyAngle + 1)}
                className="px-3 py-1 rounded-lg border border-neutral-700 hover:bg-neutral-900"
                aria-label="Плюс ракурс"
              >
                +
              </button>
            </div>
          </div>

          {/* Тумблеры опций */}
          {[
            { k: "extraTimeOfDay", label: "Доп. вариант: другое время суток" },
            { k: "extraSeason", label: "Доп. вариант: другое время года" },
            { k: "extraWeather", label: "Доп. вариант: другая погода" },
          ].map((o) => (
            <label
              key={o.k}
              className="flex items-center justify-between gap-4 cursor-pointer"
            >
              <div>
                <div className="font-medium">{o.label}</div>
                <div className="text-xs text-gray-400">
                  + {formatRub(getAddon(o.k).price)}
                </div>
              </div>
              <input
                type="checkbox"
                className="h-5 w-5 accent-emerald-500"
                checked={opt[o.k]}
                onChange={(e) => setOpt({ ...opt, [o.k]: e.target.checked })}
              />
            </label>
          ))}
        </CardContent>
      </Card>

      {/* Итого + CTA */}
      <Card className="rounded-2xl border-neutral-800 lg:col-span-1">
        <CardHeader>
          <CardTitle className="text-xl">Итог</CardTitle>
          <p className="text-sm text-gray-400">
            Смета ориентировочная — финализируем после брифа.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-5xl font-extrabold bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent">
            {formatRub(total)}
          </div>
          <ul className="text-sm text-gray-300 space-y-2">
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-emerald-400" />
              <span>База: {formatRub(BASE_PRODUCT.price)}</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-emerald-400" />
              <span>Доп. ракурсы: {qtyAngle} × {formatRub(getAddon("extraAngle").price)}</span>
            </li>
            {opt.extraTimeOfDay && (
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-emerald-400" />
                <span>Другое время суток: {formatRub(getAddon("extraTimeOfDay").price)}</span>
              </li>
            )}
            {opt.extraSeason && (
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-emerald-400" />
                <span>Другое время года: {formatRub(getAddon("extraSeason").price)}</span>
              </li>
            )}
            {opt.extraWeather && (
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-emerald-400" />
                <span>Другая погода: {formatRub(getAddon("extraWeather").price)}</span>
              </li>
            )}
          </ul>

          <a href="#brief">
            <Button className="w-full rounded-2xl bg-emerald-500 text-neutral-900 mt-2">
              Зафиксировать смету и получить бриф
            </Button>
          </a>
          <p className="text-xs text-gray-500">
            Нажимая, вы перейдёте к форме — укажите контакты и приложите планировки/референсы.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

/* =========================================================
   УТИЛИТЫ
   ========================================================= */

function formatRub(n) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(n);
}
