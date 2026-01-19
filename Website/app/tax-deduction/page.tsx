'use client'

import { useEffect, useMemo, useState, type ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import ScrollReveal from '@/components/ScrollReveal'
import AnimatedStars from '@/components/AnimatedStars'
import StructuredData from '@/components/StructuredData'

const StepBadge = ({ value }: { value: string }) => (
  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-purple-500/50 bg-purple-500/20 text-xs font-medium text-foreground">
    {value}
  </span>
)

const Dot = ({ className }: { className?: string }) => (
  <span className={`inline-flex h-2.5 w-2.5 rounded-full ${className ?? ''}`} aria-hidden="true" />
)

const IconCircle = ({ children, className }: { children: ReactNode; className?: string }) => (
  <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full ${className ?? ''}`}>
    {children}
  </span>
)

const CheckIcon = () => (
  <IconCircle className="bg-emerald-500/15 text-emerald-200">
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </IconCircle>
)

const CrossIcon = () => (
  <IconCircle className="bg-rose-500/15 text-rose-200">
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 6l12 12M18 6l-12 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </IconCircle>
)

const ChartIcon = () => (
  <IconCircle className="bg-blue-500/15 text-blue-200">
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 19h16M8 16V9m4 7V5m4 11v-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </IconCircle>
)

const ChatIcon = () => (
  <IconCircle className="bg-purple-500/25 text-foreground">
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 8h10M7 12h6M5 19l3-3h9a3 3 0 003-3V7a3 3 0 00-3-3H7a3 3 0 00-3 3v12z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </IconCircle>
)

const WarningIcon = () => (
  <IconCircle className="bg-amber-500/15 text-amber-200">
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 9v4m0 4h.01" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.3 4.6l-7 12.1A2 2 0 005 20h14a2 2 0 001.7-3.3l-7-12.1a2 2 0 00-3.4 0z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </IconCircle>
)

const BookIcon = () => (
  <IconCircle className="bg-slate-500/15 text-slate-200">
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 6a2 2 0 012-2h10a2 2 0 012 2v12a1 1 0 01-1 1H6a2 2 0 01-2-2V6z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 8h8M8 12h6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </IconCircle>
)

export default function TaxDeductionPage() {
  const [tariff, setTariff] = useState<'custom' | 'takeall' | 'takeallplus' | 'vip'>('custom')
  const [programCost, setProgramCost] = useState('3000')
  const [taxRate, setTaxRate] = useState('22')
  const [useAutoRate, setUseAutoRate] = useState(true)
  const [income, setIncome] = useState('85000')
  const [filingType, setFilingType] = useState<'itemized' | 'standard'>('itemized')
  const [employmentType, setEmploymentType] = useState<'w2' | 'self'>('w2')
  const [state, setState] = useState<'ca' | 'ny' | 'nj' | 'ma' | 'other'>('other')
  const [includeSuccessFee, setIncludeSuccessFee] = useState(false)
  const [successFee, setSuccessFee] = useState('0')
  const [copyState, setCopyState] = useState<'idle' | 'done'>('idle')

  const formatter = useMemo(
    () =>
      new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      }),
    []
  )

  useEffect(() => {
    if (tariff === 'custom') {
      return
    }
    if (tariff === 'takeall') {
      setProgramCost('2850')
    }
    if (tariff === 'takeallplus') {
      setProgramCost('4950')
    }
    if (tariff === 'vip') {
      setProgramCost('7750')
    }
  }, [tariff])

  useEffect(() => {
    if (employmentType === 'w2' && includeSuccessFee) {
      setIncludeSuccessFee(false)
    }
  }, [employmentType, includeSuccessFee])

  const derivedRate = useMemo(() => {
    const incomeValue = Number.parseFloat(income.replace(',', '.')) || 0
    if (incomeValue <= 0) {
      return Number.parseFloat(taxRate) || 0
    }
    if (incomeValue < 40000) return 10
    if (incomeValue < 85000) return 22
    if (incomeValue < 160000) return 24
    return 32
  }, [income, taxRate])

  const calculator = useMemo(() => {
    const baseCost = Number.parseFloat(programCost.replace(',', '.')) || 0
    const feeCost = Number.parseFloat(successFee.replace(',', '.')) || 0
    const rateValue = useAutoRate ? derivedRate : Number.parseFloat(taxRate) || 0
    const rate = rateValue / 100
    const totalCost = baseCost + (includeSuccessFee ? feeCost : 0)

    let eligible = true
    let note = 'Оценка ориентировочная. Точную сумму уточните у CPA.'
    let status: 'available' | 'limited' | 'unavailable' = 'available'

    if (employmentType === 'w2') {
      if (filingType === 'standard') {
        eligible = false
        status = 'unavailable'
        note =
          'Для W-2 со стандартным вычетом налоговый возврат за карьерные расходы обычно недоступен.'
      } else if (state === 'other') {
        eligible = false
        status = 'limited'
        note =
          'Для W-2 федеральный вычет временно приостановлен. Он возможен только в некоторых штатах (CA, NY, NJ, MA).'
      } else {
        status = 'limited'
        note =
          'Для W-2 возврат возможен на уровне штата (CA, NY, NJ, MA) при детализированной декларации.'
      }
    }

    const estimatedRefund = eligible ? totalCost * rate : 0
    return {
      baseCost,
      totalCost,
      rate,
      eligible,
      note,
      estimatedRefund,
      status,
      rateValue,
    }
  }, [
    derivedRate,
    employmentType,
    filingType,
    includeSuccessFee,
    programCost,
    successFee,
    state,
    taxRate,
    useAutoRate,
  ])

  const refundRange = useMemo(() => {
    const min = calculator.totalCost * 0.1
    const max = calculator.totalCost * 0.3
    return { min, max }
  }, [calculator.totalCost])

  const stateNote = useMemo(() => {
    if (state === 'other') {
      return 'В большинстве штатов расходы на карьерные услуги не дают федеральный вычет для W‑2.'
    }
    return 'В некоторых штатах (CA, NY, NJ, MA) возможен дополнительный state tax refund.'
  }, [state])

  const statusConfig = {
    available: {
      label: 'Вычет доступен',
      className: 'border-emerald-500/50 bg-emerald-500/20 text-foreground',
    },
    limited: {
      label: 'Вычет с ограничениями',
      className: 'border-amber-500/50 bg-amber-500/20 text-foreground',
    },
    unavailable: {
      label: 'Вычет недоступен',
      className: 'border-rose-500/50 bg-rose-500/20 text-foreground',
    },
  }[calculator.status]

  const handleCopy = async () => {
    const summary = [
      `Стоимость программы: ${formatter.format(calculator.baseCost)}`,
      `Ставка: ${calculator.rateValue}%`,
      `Оценочный возврат: ${formatter.format(calculator.estimatedRefund)}`,
      `Диапазон 10–30%: ${formatter.format(refundRange.min)} – ${formatter.format(refundRange.max)}`,
      `Статус: ${statusConfig.label}`,
    ].join('\n')

    try {
      await navigator.clipboard.writeText(summary)
      setCopyState('done')
      setTimeout(() => setCopyState('idle'), 1500)
    } catch {
      setCopyState('idle')
    }
  }

  return (
    <>
      <StructuredData />
      <main className="relative">
        <AnimatedStars />
        <div className="relative z-10">
          <Header />
          <Breadcrumbs />
          
          <section className="py-16 md:py-20 border-t border-border relative">
            <div className="absolute inset-0 opacity-15">
              <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-float animation-delay-2000"></div>
            </div>
            <div className="container mx-auto px-6 lg:px-8 relative z-10">
              <ScrollReveal animation="fade-in">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-12 md:mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 md:mb-6 tracking-tight">
                      <span className="text-foreground">Налоговый </span>
                      <span className="gradient-text">вычет</span>
                    </h1>
                    <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto font-light">
                      Узнайте, как получить налоговый вычет за услуги Go Offer
                    </p>
                  </div>

                  <div className="relative z-20 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-pink-500/10 rounded-xl sm:rounded-2xl border border-purple-500/20 p-6 sm:p-8 md:p-10 backdrop-blur-sm mb-8">
                    <div className="space-y-10 text-foreground/85 font-light leading-relaxed">
                      <div className="rounded-xl border border-purple-500/20 bg-background/30 p-5 sm:p-6 space-y-6">
                        <div className="flex flex-col gap-2">
                          <h2 className="text-2xl md:text-3xl font-light text-foreground">
                            Интерактивный калькулятор налогового вычета
                          </h2>
                          <p className="text-sm text-foreground/70">
                            Введите данные и получите ориентировочную сумму возврата.
                          </p>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2 md:col-span-2">
                            <label className="text-sm text-foreground">Тариф</label>
                            <select
                              className="w-full rounded-lg border border-border/60 bg-background/60 px-4 py-3 text-sm text-foreground outline-none focus:border-purple-500/60 transition-colors"
                              value={tariff}
                              onChange={(event) =>
                                setTariff(event.target.value as 'custom' | 'takeall' | 'takeallplus' | 'vip')
                              }
                            >
                              <option value="custom">Указать вручную</option>
                              <option value="takeall">Take All — $2,850</option>
                              <option value="takeallplus">Take All+ — $4,950</option>
                              <option value="vip">VIP — $7,750</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm text-foreground">Стоимость программы ($)</label>
                            <input
                              type="number"
                              inputMode="decimal"
                              min="0"
                              className="w-full rounded-lg border border-border/60 bg-background/60 px-4 py-3 text-sm text-foreground outline-none focus:border-purple-500/60 transition-colors"
                              value={programCost}
                              onChange={(event) => setProgramCost(event.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm text-foreground">Годовой доход ($)</label>
                            <input
                              type="number"
                              inputMode="numeric"
                              min="0"
                              className="w-full rounded-lg border border-border/60 bg-background/60 px-4 py-3 text-sm text-foreground outline-none focus:border-purple-500/60 transition-colors"
                              value={income}
                              onChange={(event) => setIncome(event.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm text-foreground">Налоговая ставка (%)</label>
                            <select
                              className="w-full rounded-lg border border-border/60 bg-background/60 px-4 py-3 text-sm text-foreground outline-none focus:border-purple-500/60 transition-colors"
                              value={useAutoRate ? String(derivedRate) : taxRate}
                              onChange={(event) => setTaxRate(event.target.value)}
                              disabled={useAutoRate}
                            >
                              <option value="10">10%</option>
                              <option value="12">12%</option>
                              <option value="22">22%</option>
                              <option value="24">24%</option>
                              <option value="32">32%</option>
                              <option value="35">35%</option>
                            </select>
                            <label className="flex items-center gap-2 text-xs text-foreground/70">
                              <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-border/60 bg-background/60 text-purple-500 focus:ring-purple-500/50"
                                checked={useAutoRate}
                                onChange={(event) => setUseAutoRate(event.target.checked)}
                              />
                              Авто‑расчёт ставки по доходу
                            </label>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm text-foreground">Тип занятости</label>
                            <select
                              className="w-full rounded-lg border border-border/60 bg-background/60 px-4 py-3 text-sm text-foreground outline-none focus:border-purple-500/60 transition-colors"
                              value={employmentType}
                              onChange={(event) => setEmploymentType(event.target.value as 'w2' | 'self')}
                            >
                              <option value="w2">W-2 (наёмный сотрудник)</option>
                              <option value="self">Self-employed / 1099</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm text-foreground">Тип декларации</label>
                            <select
                              className="w-full rounded-lg border border-border/60 bg-background/60 px-4 py-3 text-sm text-foreground outline-none focus:border-purple-500/60 transition-colors"
                              value={filingType}
                              onChange={(event) => setFilingType(event.target.value as 'itemized' | 'standard')}
                            >
                              <option value="itemized">Itemized deductions</option>
                              <option value="standard">Standard deduction</option>
                            </select>
                          </div>
                          <div className="space-y-2 md:col-span-2">
                            <label className="text-sm text-foreground">Штат проживания</label>
                            <select
                              className="w-full rounded-lg border border-border/60 bg-background/60 px-4 py-3 text-sm text-foreground outline-none focus:border-purple-500/60 transition-colors"
                              value={state}
                              onChange={(event) => setState(event.target.value as 'ca' | 'ny' | 'nj' | 'ma' | 'other')}
                            >
                              <option value="other">Другой штат</option>
                              <option value="ca">California</option>
                              <option value="ny">New York</option>
                              <option value="nj">New Jersey</option>
                              <option value="ma">Massachusetts</option>
                            </select>
                            <p className="text-xs text-foreground/70">{stateNote}</p>
                          </div>
                        </div>

                        <div className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-4 space-y-3">
                          <div className={`inline-flex items-center rounded-full border px-3 py-1 text-xs ${statusConfig.className}`}>
                            {statusConfig.label}
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="inline-flex items-center gap-2">
                              <span>Расходы для расчёта</span>
                              <span className="inline-flex items-center rounded-full border border-emerald-500/60 bg-emerald-500/30 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-foreground">
                                Доступен налоговый вычет
                              </span>
                            </span>
                            <span className="text-foreground">
                              {formatter.format(calculator.totalCost || 0)}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span>Оценочный возврат</span>
                            <span className="text-foreground text-lg">
                              {formatter.format(calculator.estimatedRefund || 0)}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span>Диапазон возврата (10–30%)</span>
                            <span className="text-foreground">
                              {formatter.format(refundRange.min)} – {formatter.format(refundRange.max)}
                            </span>
                          </div>
                          <p className="text-xs text-foreground/70">{calculator.note}</p>
                          <button
                            type="button"
                            onClick={handleCopy}
                            className="inline-flex items-center justify-center rounded-lg border border-purple-500/30 px-4 py-2 text-xs text-foreground hover:border-purple-500/60 transition-colors"
                          >
                            {copyState === 'done' ? 'Скопировано' : 'Скопировать результат'}
                          </button>
                        </div>

                        <div className="rounded-lg border border-purple-500/20 bg-background/30 p-4 space-y-3 text-sm">
                          <label className="flex items-start gap-3">
                            <input
                              type="checkbox"
                              className="mt-1 h-4 w-4 rounded border-border/60 bg-background/60 text-purple-500 focus:ring-purple-500/50"
                              checked={includeSuccessFee}
                              onChange={(event) => setIncludeSuccessFee(event.target.checked)}
                              disabled={employmentType === 'w2'}
                            />
                            <span>
                              Учитывать Success Fee (доступно для self-employed / 1099)
                            </span>
                          </label>
                          <div className="grid gap-2 md:grid-cols-[1fr_auto] items-center">
                            <input
                              type="number"
                              inputMode="decimal"
                              min="0"
                              className="w-full rounded-lg border border-border/60 bg-background/60 px-4 py-3 text-sm text-foreground outline-none focus:border-purple-500/60 transition-colors"
                              value={successFee}
                              onChange={(event) => setSuccessFee(event.target.value)}
                              disabled={!includeSuccessFee || employmentType === 'w2'}
                            />
                            <span className="text-xs text-foreground/70">Сумма Success Fee ($)</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h2 className="flex flex-wrap items-center gap-3 text-2xl md:text-3xl font-light text-foreground">
                          <StepBadge value="1" />
                          <span>Инструкция для клиентов: как получить налоговый вычет за покупку Go Offer</span>
                        </h2>
                        <p>
                          Оплата программы Go Offer может относиться к категории{' '}
                          <span className="text-foreground">“job search expenses”</span> или{' '}
                          <span className="text-foreground">“career development services”</span> — расходов, которые уменьшают
                          ваш налогооблагаемый доход при подаче декларации в США.
                        </p>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4">
                            <p className="text-foreground mb-2">Что можно включить:</p>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-start gap-2">
                                <CheckIcon />
                                <span>Стоимость программы Go Offer (вся сумма оплаты)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CrossIcon />
                                <span>Проценты банка или комиссии по кредиту — не включаются</span>
                              </li>
                            </ul>
                          </div>
                          <div className="rounded-lg border border-purple-500/20 bg-background/30 p-4">
                            <p className="text-sm">
                              Если клиент оплачивает через рассрочку или кредит, вычет всё равно идёт на сумму самой
                              программы, а не на проценты.
                            </p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <p className="text-foreground">От чего зависит сумма возврата:</p>
                          <ol className="list-decimal pl-5 space-y-2 text-sm">
                            <li>
                              <span className="text-foreground">Налоговая ставка клиента (tax bracket):</span> чем выше доход,
                              тем выше экономия. Обычно возврат составляет <span className="text-foreground">10–30%</span> от
                              стоимости программы.
                            </li>
                            <li>
                              <span className="text-foreground">Тип декларации:</span> вычет работает, если клиент подаёт с
                              itemized deductions (детализированные расходы).
                            </li>
                            <li>
                              <span className="text-foreground">Штат проживания:</span> некоторые штаты (CA, NY, NJ, MA)
                              позволяют учитывать профессиональные расходы дополнительно.
                            </li>
                          </ol>
                        </div>
                        <div className="space-y-3">
                          <p className="text-foreground">Как оформить:</p>
                          <ol className="list-decimal pl-5 space-y-2 text-sm">
                            <li>Сохранить инвойс и подтверждение оплаты.</li>
                            <li>При подаче декларации указать оплату как Job Search Expenses или Career Coaching Services.</li>
                            <li>Если клиент использует TurboTax, H&amp;R Block или CPA — передать им чек от Go Offer.</li>
                            <li>Возврат приходит через 2–8 недель после подачи декларации.</li>
                          </ol>
                        </div>
                        <div className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-4">
                          <p className="text-sm flex items-start gap-2">
                            <ChartIcon />
                            <span>
                              Пример: стоимость программы — $3000, средняя налоговая ставка — 22% → клиент может вернуть
                              ≈ <span className="text-foreground">$660</span> через IRS.
                            </span>
                          </p>
                        </div>
                      </div>

                      <div className="border-t border-border/40 pt-8 space-y-4">
                        <h2 className="flex flex-wrap items-center gap-3 text-2xl md:text-3xl font-light text-foreground">
                          <StepBadge value="2" />
                          <span>Можно ли вернуть налоговый вычет за Success Fee (процент с оффера)</span>
                        </h2>
                        <ul className="list-disc pl-5 space-y-2 text-sm">
                          <li>Прямо через IRS (на федеральном уровне) Success Fee не относится к стандартным вычетам.</li>
                          <li>
                            Для self-employed, контракторов (1099) — Success Fee можно включить в business expenses как career
                            coaching / job placement services (через Schedule C).
                          </li>
                          <li>
                            В некоторых штатах (CA, NY, NJ, MA) CPA может частично учесть Success Fee в state tax return как
                            профессиональный расход, если он напрямую связан с получением дохода.
                          </li>
                        </ul>
                        <div className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-4 text-sm">
                          <p className="flex items-start gap-2">
                            <ChartIcon />
                            <span>
                              Пример для self-employed: оффер $100,000 → Success Fee $5,000, налоговая ставка 24% → экономия
                              ≈ <span className="text-foreground">$1,200</span>
                            </span>
                          </p>
                        </div>
                        <div className="rounded-lg border border-purple-500/20 bg-background/30 p-4 text-sm">
                          <p className="text-foreground mb-2 flex items-center gap-2">
                            <ChatIcon />
                            <span>Что говорить клиенту:</span>
                          </p>
                          <p>
                            «Success Fee напрямую не входит в стандартный налоговый вычет, но если вы работаете как контрактор
                            или self-employed, CPA может включить эту сумму в расходы бизнеса — как career coaching или job
                            placement services. В некоторых штатах, например в Калифорнии и Нью-Йорке, часть Success Fee можно
                            учесть и при подаче налоговой декларации на уровне штата.»
                          </p>
                        </div>
                      </div>

                      <div className="border-t border-border/40 pt-8 space-y-4">
                        <h2 className="flex flex-wrap items-center gap-3 text-2xl md:text-3xl font-light text-foreground">
                          <StepBadge value="3" />
                          <span>От чего зависит % налогового вычета для клиента</span>
                          <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-2 py-0.5 text-xs text-blue-200">
                            US
                          </span>
                        </h2>
                        <p>
                          Размер налогового вычета не фиксирован — он зависит от дохода клиента, типа декларации и штата.
                        </p>
                        <div className="space-y-3">
                          <p className="text-foreground flex items-center gap-2">
                            <StepBadge value="1" />
                            <span>Уровень дохода (tax bracket)</span>
                          </p>
                          <p className="text-sm">
                            IRS возвращает процент, исходя из налоговой ставки клиента. Чем выше доход — тем больше сумма
                            возврата.
                          </p>
                          <div className="overflow-x-auto rounded-lg border border-purple-500/20">
                            <table className="w-full text-sm">
                              <thead className="bg-background/40 text-foreground">
                                <tr>
                                  <th className="px-4 py-3 text-left font-light">Годовой доход</th>
                                  <th className="px-4 py-3 text-left font-light">Ставка налога</th>
                                  <th className="px-4 py-3 text-left font-light">Примерный возврат с $3000</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-border/40">
                                <tr>
                                  <td className="px-4 py-3">$40–85K</td>
                                  <td className="px-4 py-3">22%</td>
                                  <td className="px-4 py-3">≈ $660</td>
                                </tr>
                                <tr>
                                  <td className="px-4 py-3">$85–160K</td>
                                  <td className="px-4 py-3">24%</td>
                                  <td className="px-4 py-3">≈ $720</td>
                                </tr>
                                <tr>
                                  <td className="px-4 py-3">$160K+</td>
                                  <td className="px-4 py-3">32–35%</td>
                                  <td className="px-4 py-3">$960–$1050</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <p className="text-sm">
                            В среднем клиенты получают <span className="text-foreground">10–30% возврата</span> от стоимости
                            программы.
                          </p>
                        </div>
                        <div className="space-y-3">
                          <p className="text-foreground flex items-center gap-2">
                            <StepBadge value="2" />
                            <span>Тип налоговой декларации</span>
                          </p>
                          <p className="text-sm">
                            Чтобы использовать вычет, клиент должен подавать декларацию с itemized deductions, то есть
                            указывать детализированные расходы (не стандартный вычет). Если клиент пользуется CPA, TurboTax
                            или H&amp;R Block, бухгалтер может легко внести оплату Go Offer как Job Search Expense или Career
                            Coaching Service.
                          </p>
                        </div>
                        <div className="space-y-3">
                          <p className="text-foreground flex items-center gap-2">
                            <StepBadge value="3" />
                            <span>Штат проживания</span>
                          </p>
                          <p className="text-sm">
                            Некоторые штаты США позволяют дополнительно учитывать расходы на карьерные и образовательные
                            услуги. Работает, например, в: California, New York, New Jersey, Massachusetts. Там клиент может
                            получить дополнительный state tax refund.
                          </p>
                        </div>
                        <div className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-4 text-sm">
                          <p className="flex items-start gap-2">
                            <ChatIcon />
                            <span>
                              Формулировка для клиента: «Размер налогового возврата зависит от дохода и штата. Обычно клиенты
                              получают назад 10–30% от стоимости программы — IRS считает это расходом на карьерное развитие или
                              поиск работы.»
                            </span>
                          </p>
                        </div>
                      </div>

                      <div className="border-t border-border/40 pt-8 space-y-4">
                        <h2 className="flex flex-wrap items-center gap-3 text-2xl md:text-3xl font-light text-foreground">
                          <StepBadge value="4" />
                          <span>Категория, к которой относится Go Offer</span>
                        </h2>
                        <div className="rounded-lg border border-purple-500/20 bg-background/30 p-4 text-sm">
                          <p className="text-foreground mb-2 flex items-center gap-2">
                            <CheckIcon />
                            <span>В договоре:</span>
                          </p>
                          <p>
                            Career Support Services Agreement — документальное подтверждение, что это не рекрутинг и не
                            обучение, а сопровождение и стратегическая поддержка в поиске работы.
                          </p>
                        </div>
                        <div className="rounded-lg border border-purple-500/20 bg-background/30 p-4 text-sm">
                          <p className="text-foreground mb-2 flex items-center gap-2">
                            <CheckIcon />
                            <span>Для налоговых деклараций IRS / CPA:</span>
                          </p>
                          <p>
                            рекомендуется указывать расходы как “Career Coaching / Job Search Expenses / Professional
                            Development Services”.
                          </p>
                        </div>
                        <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-4 text-sm">
                          <p className="text-foreground mb-2 flex items-center gap-2">
                            <WarningIcon />
                            <span>Что важно не говорить:</span>
                          </p>
                          <p className="mb-2">
                            Не позиционировать Go Offer как education tuition (образовательный курс) или employment placement
                            agency, потому что:
                          </p>
                          <ul className="list-disc pl-5 space-y-2">
                            <li>tuition deductions регулируются отдельно (Form 1098-T);</li>
                            <li>employment agency services относятся к другой налоговой категории.</li>
                          </ul>
                          <p className="mt-3">
                            Go Offer — это career consulting &amp; coaching, не рекрутинг и не обучение в классическом смысле.
                          </p>
                        </div>
                      </div>

                      <div className="border-t border-border/40 pt-8 space-y-4">
                        <h2 className="flex flex-wrap items-center gap-3 text-2xl md:text-3xl font-light text-foreground">
                          <StepBadge value="5" />
                          <span>Инструкция: кому налоговый вычет недоступен</span>
                        </h2>
                        <p className="text-sm">
                          Важно понимать: не всем клиентам можно оформить налоговый вычет. Используйте эту информацию, чтобы
                          корректно объяснить клиенту, когда возврат не сработает.
                        </p>
                        <div className="space-y-4 text-sm">
                          <div className="rounded-lg border border-purple-500/20 bg-background/30 p-4">
                            <p className="text-foreground mb-2 flex items-center gap-2">
                              <StepBadge value="1" />
                              <span>Клиенты, которые не подают налоговую декларацию в США</span>
                            </p>
                            <p>Если у человека нет дохода в США или он не отчитывается в IRS — вычет сделать невозможно.</p>
                            <p className="mt-2 italic">
                              «Чтобы вернуть часть денег, нужно подавать налоговую декларацию. Если доход пока не
                              декларируется — вычет не применяется.»
                            </p>
                          </div>
                          <div className="rounded-lg border border-purple-500/20 bg-background/30 p-4">
                            <p className="text-foreground mb-2 flex items-center gap-2">
                              <StepBadge value="2" />
                              <span>Клиенты, которые используют стандартный вычет (Standard Deduction)</span>
                            </p>
                            <p>
                              Большинство сотрудников по найму (W-2) подают декларацию со стандартным вычетом. В этом случае
                              дополнительные расходы, такие как карьерные услуги, не учитываются.
                            </p>
                            <p className="mt-2 italic">
                              «Вычет работает только при детализированной декларации. Если у вас стандартный вычет — IRS не
                              позволяет добавить эти расходы.»
                            </p>
                          </div>
                          <div className="rounded-lg border border-purple-500/20 bg-background/30 p-4">
                            <p className="text-foreground mb-2 flex items-center gap-2">
                              <StepBadge value="3" />
                              <span>Клиенты, работающие по найму (W-2) и живущие не в льготных штатах</span>
                            </p>
                            <p>
                              С 2018 по 2025 год федеральный вычет за поиск работы временно приостановлен. Он доступен только
                              на уровне некоторых штатов: California, New York, New Jersey, Massachusetts.
                            </p>
                            <p className="mt-2 italic">
                              «Федеральный вычет для наёмных сотрудников сейчас приостановлен, но в некоторых штатах CPA может
                              оформить возврат на уровне штата.»
                            </p>
                          </div>
                          <div className="rounded-lg border border-purple-500/20 bg-background/30 p-4">
                            <p className="text-foreground mb-2 flex items-center gap-2">
                              <StepBadge value="4" />
                              <span>Клиенты, которые оплачивают программу не от себя, а от компании</span>
                            </p>
                            <p>
                              Если платёж идёт от юрлица — это корпоративный расход, не личный. Налоговый вычет для физлица в
                              таком случае не применяется.
                            </p>
                            <p className="mt-2 italic">
                              «Если программа оплачена от имени компании, вычет оформляется только как корпоративный расход —
                              личный возврат не положен.»
                            </p>
                          </div>
                          <div className="rounded-lg border border-purple-500/20 bg-background/30 p-4">
                            <p className="text-foreground mb-2 flex items-center gap-2">
                              <StepBadge value="5" />
                              <span>Клиенты, которые пытаются использовать образовательный кредит (AOTC или LLC)</span>
                            </p>
                            <p>
                              Эти кредиты работают только для аккредитованных учебных заведений (университетов, колледжей).
                              Программы Go Offer под них не попадают.
                            </p>
                            <p className="mt-2 italic">
                              «Наши программы относятся к карьерным услугам, а не университетскому обучению, поэтому
                              образовательные кредиты IRS здесь не применяются.»
                            </p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <p className="text-foreground flex items-center gap-2">
                            <BookIcon />
                            <span>Кратко запомнить:</span>
                          </p>
                          <div className="overflow-x-auto rounded-lg border border-purple-500/20">
                            <table className="w-full text-sm">
                              <thead className="bg-background/40 text-foreground">
                                <tr>
                                  <th className="px-4 py-3 text-left font-light">Категория клиента</th>
                                  <th className="px-4 py-3 text-left font-light">Может получить вычет?</th>
                                  <th className="px-4 py-3 text-left font-light">Комментарий</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-border/40">
                                <tr>
                                  <td className="px-4 py-3">Self-employed / 1099</td>
                                  <td className="px-4 py-3">
                                    <span className="inline-flex items-center gap-2">
                                      <CheckIcon />
                                      <span>Да</span>
                                    </span>
                                  </td>
                                  <td className="px-4 py-3">Как бизнес-расход (Schedule C)</td>
                                </tr>
                                <tr>
                                  <td className="px-4 py-3">W-2, itemized + льготный штат</td>
                                  <td className="px-4 py-3">
                                    <span className="inline-flex items-center gap-2">
                                      <Dot className="bg-amber-400" />
                                      <span>Возможно</span>
                                    </span>
                                  </td>
                                  <td className="px-4 py-3">Только через CPA, на уровне штата</td>
                                </tr>
                                <tr>
                                  <td className="px-4 py-3">W-2, стандартный вычет</td>
                                  <td className="px-4 py-3">
                                    <span className="inline-flex items-center gap-2">
                                      <CrossIcon />
                                      <span>Нет</span>
                                    </span>
                                  </td>
                                  <td className="px-4 py-3">Вычет не применяется</td>
                                </tr>
                                <tr>
                                  <td className="px-4 py-3">Нет дохода / не подаёт декларацию</td>
                                  <td className="px-4 py-3">
                                    <span className="inline-flex items-center gap-2">
                                      <CrossIcon />
                                      <span>Нет</span>
                                    </span>
                                  </td>
                                  <td className="px-4 py-3">IRS не возвращает</td>
                                </tr>
                                <tr>
                                  <td className="px-4 py-3">Оплата от юрлица</td>
                                  <td className="px-4 py-3">
                                    <span className="inline-flex items-center gap-2">
                                      <CrossIcon />
                                      <span>Нет</span>
                                    </span>
                                  </td>
                                  <td className="px-4 py-3">Это корпоративный платёж</td>
                                </tr>
                                <tr>
                                  <td className="px-4 py-3">Образовательный кредит (AOTC/LLC)</td>
                                  <td className="px-4 py-3">
                                    <span className="inline-flex items-center gap-2">
                                      <CrossIcon />
                                      <span>Нет</span>
                                    </span>
                                  </td>
                                  <td className="px-4 py-3">Не подходит по типу услуги</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-4 text-sm">
                          <p className="flex items-start gap-2">
                            <ChatIcon />
                            <span>
                              Универсальная безопасная формулировка: «Налоговый вычет доступен не всем — всё зависит от
                              вашего статуса, дохода и штата. В среднем клиенты возвращают 10–30%, если подают детализированную
                              декларацию. Чтобы точно понять, подходит ли вам вычет, можно уточнить это у вашего CPA.»
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <a
                      href="/#pricing"
                      className="inline-flex items-center gap-2 px-8 py-4 border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 uppercase tracking-wide text-sm font-light rounded-lg group"
                    >
                      <span>Вернуться к тарифам</span>
                      <svg 
                        className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:-translate-x-0.5 transition-all" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </>
  )
}
