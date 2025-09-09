import React, { useState } from "react";
<div className="absolute inset-0 opacity-[0.04]"
style={{
backgroundImage:
"linear-gradient(to right, rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.6) 1px, transparent 1px)",
backgroundSize: "36px 36px",
}}
/>
<div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[720px] rounded-full blur-3xl opacity-20"
style={{ background: "radial-gradient(600px 300px at center, rgba(56,189,248,.6), transparent 60%)" }} />
</div>
);
}


// Компонент цены с доп. услугами
function PricingBlock() {
const extras = [
"Доп. ракурс",
"Вариант с другим временем суток",
"Вариант с другим временем года",
"Вариант с другой погодой"
];


return (
<section id="pricing" className="py-16 bg-neutral-900 border-t">
<div className="max-w-4xl mx-auto px-4">
<h2 className="text-3xl font-bold mb-8 text-center">Тарифы</h2>
<Card className="rounded-2xl border-neutral-800 overflow-hidden">
<CardHeader className="bg-neutral-800/50 p-6">
<CardTitle className="text-xl font-semibold">Продающая фотореалистичная 3D визуализация экстерьера</CardTitle>
</CardHeader>
<CardContent className="p-6 space-y-4">
<p className="text-emerald-400 text-2xl font-bold">10 000 ₽</p>
<p className="text-gray-300 text-sm">Включает: 3D моделирование проекта, визуализация до 3 ракурсов в 4К</p>
<div>
<h3 className="font-medium mb-2">Дополнительные услуги</h3>
<ul className="space-y-2 text-sm text-gray-300">
{extras.map((e, i) => (
<li key={i} className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" />{e}</li>
))}
</ul>
</div>
<Button className="rounded-2xl bg-emerald-500 text-neutral-900 mt-4">Заказать</Button>
</CardContent>
</Card>
</div>
</section>
);
}


export default function Landing3D() {
return (
<div className="min-h-screen bg-neutral-950 text-gray-100">
<BackgroundFX />
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
<a href="#about" className="hover:opacity-70">Обо мне</a>
<a href="#faq" className="hover:opacity-70">FAQ</a>
<a href="#pricing" className="hover:opacity-70">Цены</a>
<a href="#brief" className="hover:opacity-70">Получить расчёт</a>
</nav>
<a href="#brief"><Button className="rounded-2xl">Расчёт проекта</Button></a>
</div>
</header>


{/* Hero */}
<section className="relative overflow-hidden">...</section>


{/* Why */}
<section id="why" className="py-14 bg-neutral-900 border-y">...</section>


{/* About */}
<section id="about" className="py-16 scroll-mt-24">
<div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
{/* Левая колонка: коротко о специалисте */}
<div>
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
