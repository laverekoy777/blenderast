import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, MoveRight, Star, Shield, Zap, Camera, Building2, Cpu, Sparkles } from "lucide-react";

// NOTE: Replace placeholder images with your renders. 1920x1080 recommended.
const gallery = [
  { src: "https://cdn-edge.kwork.ru/files/portfolio/t0/05/8958db0c58e0ea85151b13214e4539ea6463d0f4-1753879705.webp", alt: "Exterior render — blenderast" },
  { src: "https://cdn-edge.kwork.ru/files/portfolio/t0/09/3037b1d49d420aa3e9cccd4041e5f6041fb6ef7f-1753879709.webp", alt: "Interior render — blenderast" },
  { src: "https://cdn-edge.kwork.ru/files/portfolio/t0/10/73c93bc766488b868e0d166fed66dd6260898aa6-1753879710.webp", alt: "Kitchen render — blenderast" },
  { src: "https://cdn-edge.kwork.ru/files/portfolio/t0/05/8958db0c58e0ea85151b13214e4539ea6463d0f4-1753879705.webp", alt: "Exterior render — blenderast" },
];

const Feature = ({ icon: Icon, title, text }) => (
  <div className="flex gap-4">
    <div className="h-12 w-12 rounded-2xl bg-neutral-800 flex items-center justify-center"><Icon className="h-6 w-6" /></div>
    <div>
      <h4 className="font-semibold text-gray-900">{title}</h4>
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

const FAQItem = ({ q, a }) => (
  <Card className="border-neutral-800">
    <CardHeader>
      <CardTitle className="text-base">{q}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-gray-300 leading-relaxed">{a}</p>
    </CardContent>
  </Card>
);

export default function Landing3D() {
  return (
    <div className="min-h-screen bg-neutral-950 text-gray-100">
      {/* Nav */}
      <header className="sticky top-0 z-40 bg-neutral-950/80 backdrop-blur border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            <span className="font-semibold">blenderast</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#work" className="hover:opacity-70">Портфолио</a>
            <a href="#why" className="hover:opacity-70">Почему мы</a>
            <a href="#faq" className="hover:opacity-70">Q&A</a>
            <a href="#brief" className="hover:opacity-70">Получить расчёт</a>
          </nav>
          <a href="#brief"><Button className="rounded-2xl">Расчёт проекта</Button></a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Фотореалистичная 3D‑визуализация <span className="whitespace-nowrap">без переплаты</span>
            </h1>
            <p className="mt-4 text-gray-300 text-lg">
              Реализм выше рынка, стоимость ниже конкурентов. В среднем экономим заказчикам до 30–40% бюджета без потери качества.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#work"><Button className="rounded-2xl" variant="default">Смотреть работы</Button></a>
              <a href="#brief"><Button className="rounded-2xl" variant="outline">Получить 3 кадра теста <MoveRight className="inline h-4 w-4 ml-1"/></Button></a>
            </div>
            <div className="mt-8 grid grid-cols-3 md:w-3/4">
              <Stat value="10+" label="лет опыта" />
              <Stat value="> 200" label="проектов" />
              <Stat value="48ч" label="первые превью" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="grid grid-cols-2 gap-3">
            {gallery.map((g, i) => (
              <img key={i} src={g.src} alt={g.alt} className="rounded-2xl shadow-sm object-cover h-40 md:h-56 w-full"/>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why */}
      <section id="why" className="py-14 bg-neutral-900 border-y">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <Feature icon={Camera} title="Реализм как в фото" text="PBR‑материалы, HDRI‑свет, физическая камера. Детализация до фурнитуры и микрорельефов." />
          <Feature icon={Cpu} title="Оптимизированный пайплайн" text="Сценарии автоматизации, ноды и рендер‑ферма → быстрые превью и предсказуемые сроки." />
          <Feature icon={Shield} title="Прозрачные сроки и цена" text="Фикс по брифу. Отдаём исходники/кадры в срок, без доплат за базовые правки." />
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between gap-4 mb-6">
            <h2 className="text-3xl font-bold">Портфолио</h2>
            <p className="text-sm text-gray-400">Ещё кейсы по запросу: экстеръеры, интерьеры, коммерческая недвижимость.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {gallery.concat(gallery).slice(0,6).map((g, i) => (
              <Card key={i} className="overflow-hidden rounded-2xl">
                <img src={g.src} alt={g.alt} className="h-48 w-full object-cover" />
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 text-sm text-gray-300"><Building2 className="h-4 w-4"/>ЖК «Скайлайн» — экстерьер</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-12 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-amber-500"><Star className="h-5 w-5"/><span className="font-semibold">98% довольных заказчиков</span></div>
              <p className="text-sm text-gray-300 mt-2">Средняя оценка по проектам 4.9/5. Подписываем NDA, соблюдаем дедлайны.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-green-600"><Zap className="h-5 w-5"/><span className="font-semibold">Первый драфт — 48 часов</span></div>
              <p className="text-sm text-gray-300 mt-2">Чёткий этапинг: бриф → серый каркас → материалы/свет → финал.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-blue-600"><Shield className="h-5 w-5"/><span className="font-semibold">Гарантия правок</span></div>
              <p className="text-sm text-gray-300 mt-2">2 раунда базовых правок включены. Дальше — почасово по прайсу.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="py-14 bg-neutral-900" id="pricing">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Цена ниже, качество выше</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="rounded-2xl border-neutral-800">
              <CardHeader>
                <CardTitle>Рынок</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><Check className="h-4 w-4 text-gray-400"/>Качество: среднее/низкое</li>
                  <li className="flex items-start gap-2"><Check className="h-4 w-4 text-gray-400"/>Сроки: 7–14 дней</li>
                  <li className="flex items-start gap-2"><Check className="h-4 w-4 text-gray-400"/>Цена: условно X × 3</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border-neutral-800 ring-1 ring-neutral-800">
              <CardHeader>
                <CardTitle>Мы</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><Check className="h-4 w-4 text-emerald-500"/>Фотореализм: высокий</li>
                  <li className="flex items-start gap-2"><Check className="h-4 w-4 text-emerald-500"/>Сроки: превью 48ч</li>
                  <li className="flex items-start gap-2"><Check className="h-4 w-4 text-emerald-500"/>Цена: X (на 30–60% ниже)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Brief form */}
      <section id="brief" className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Получить расчёт и тест‑рендер</h2>
          <p className="text-gray-300 mt-2">Оставьте контакты — отправим 3 тестовых кадра и смету. Ответим в течение дня.</p>

          <Card className="mt-6 rounded-2xl">
            <CardContent className="p-6">
              <form method="POST" action="#" onSubmit={(e)=>{ e.preventDefault(); alert('Спасибо! Мы свяжемся с вами.'); }} className="grid md:grid-cols-2 gap-4">
                {/* Honeypot */}
                <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
                <Input required name="name" placeholder="Имя" />
                <Input required type="email" name="email" placeholder="E‑mail" />
                <Input name="phone" placeholder="Телефон / WhatsApp" />
                <Input name="city" placeholder="Город / Часовой пояс" />
                <div className="md:col-span-2">
                  <Textarea name="details" placeholder="Опишите объект: площадь, стиль, сроки, референсы" className="min-h-[120px]" />
                </div>
                <div className="md:col-span-2 flex items-center justify-between gap-4">
                  <div className="text-xs text-gray-400">Защита от спама: honeypot + ограничение частоты. Для боевого сайта добавьте Cloudflare Turnstile/reCAPTCHA.</div>
                  <Button type="submit" className="rounded-2xl">Отправить запрос</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-neutral-900 border-t">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          <h2 className="text-3xl font-bold">Вопросы и ответы</h2>
          <div className="space-y-4">
            <FAQItem q="Сколько стоит кадр?" a="Зависит от сложности и исходников. В среднем на 30–60% ниже рынка. Пришлите планировки — посчитаем за день." />
            <FAQItem q="Как быстро получу первый результат?" a="Через 48 часов покажем серый каркас или базовый свет/материалы на ключевых кадрах." />
            <FAQItem q="Какие программы используете?" a="3ds Max/Blender, Corona/V-Ray/Cycles, Substance, Photoshop. Отдаём исходники по согласованию." />
            <FAQItem q="Правки включены?" a="Да, два раунда базовых правок включены, дальше — по согласованной ставке." />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-gray-400">
        <div className="max-w-6xl mx-auto px-4">
          © {new Date().getFullYear()} blenderast — 3D архитектурная визуализация. <a className="underline" href="#brief">Связаться</a>
          <div className="mt-2">Политика конфиденциальности · Договор оферты</div>
        </div>
      </footer>
    </div>
  );
}
