'use client'

import { useState } from 'react'

interface PlanGroup {
  name: string
  plans: string[]
}

export default function PricingForm() {
  const [selectedGroup, setSelectedGroup] = useState<string>('')
  const [selectedPlan, setSelectedPlan] = useState<string>('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
    smsConsent: false,
  })

  const planGroups: PlanGroup[] = [
    {
      name: 'Basic Plans',
      plans: ['Take All'],
    },
    {
      name: 'Premium Plans',
      plans: ['Take All +'],
    },
    {
      name: 'Elite Plans',
      plans: ['VIP'],
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь будет логика отправки формы
    // TODO: Добавить интеграцию с API для отправки формы
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value
    const name = target.name

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <div className="border border-border p-12 max-w-3xl mx-auto relative bg-background/80 backdrop-blur-sm">
      <h3 className="text-3xl font-light text-foreground mb-12 tracking-tight text-center uppercase">
        Выберите тариф
      </h3>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Группы тарифов */}
        <div>
          <label className="block text-sm text-muted font-light uppercase tracking-wide mb-6">
            Группа тарифов
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {planGroups.map((group) => (
              <button
                key={group.name}
                type="button"
                onClick={() => {
                  setSelectedGroup(group.name)
                  setSelectedPlan('')
                }}
                className={`border p-6 text-left transition-all relative ${
                  selectedGroup === group.name
                    ? 'border-foreground bg-foreground/5'
                    : 'border-border hover:border-foreground/50 hover:bg-purple-50'
                }`}
              >
                <div className="text-sm font-light text-foreground uppercase tracking-wide mb-2">
                  {group.name}
                </div>
                <div className="text-xs text-muted font-light">
                  {group.plans.length} план(ов)
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Выбор плана */}
        {selectedGroup && (
          <div className="animate-fade-in">
            <label className="block text-sm text-muted font-light uppercase tracking-wide mb-6">
              Выберите план
            </label>
            <div className="grid grid-cols-1 gap-4">
              {planGroups
                .find((g) => g.name === selectedGroup)
                ?.plans.map((plan) => (
                  <button
                    key={plan}
                    type="button"
                    onClick={() => setSelectedPlan(plan)}
                    className={`border p-6 text-left transition-all ${
                      selectedPlan === plan
                        ? 'border-foreground bg-foreground/5'
                        : 'border-border hover:border-foreground/50 hover:bg-purple-50'
                    }`}
                  >
                    <div className="text-base font-light text-foreground uppercase tracking-wide">
                      {plan}
                    </div>
                  </button>
                ))}
            </div>
          </div>
        )}

        {/* Форма контакта */}
        {selectedPlan && (
          <div className="space-y-6 animate-fade-in border-t border-border pt-8">
            <div>
              <label htmlFor="name" className="block text-sm text-muted font-light uppercase tracking-wide mb-2">
                Имя
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full border border-border bg-background px-4 py-3 text-foreground font-light focus:outline-none focus:border-purple-300 transition-all hover:border-purple-200"
                placeholder="Ваше имя"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-muted font-light uppercase tracking-wide mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full border border-border bg-background px-4 py-3 text-foreground font-light focus:outline-none focus:border-purple-300 transition-all hover:border-purple-200"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm text-muted font-light uppercase tracking-wide mb-2">
                Телефон
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full border border-border bg-background px-4 py-3 text-foreground font-light focus:outline-none focus:border-purple-300 transition-all hover:border-purple-200"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-muted font-light uppercase tracking-wide mb-2">
                Сообщение (необязательно)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full border border-border bg-background px-4 py-3 text-foreground font-light focus:outline-none focus:border-purple-300 transition-all hover:border-purple-200 resize-none"
                placeholder="Расскажите о ваших целях..."
              />
            </div>

            {/* Чекбокс согласия */}
            <div className="pt-2 space-y-4">
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex-shrink-0 mt-0.5">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    required
                    className="sr-only peer"
                  />
                  <div className="w-5 h-5 border-2 border-border rounded-sm bg-background transition-all duration-300 peer-checked:bg-purple-500 peer-checked:border-purple-500 peer-focus:ring-2 peer-focus:ring-purple-500/20 group-hover:border-purple-400/50 flex items-center justify-center">
                    {formData.consent && (
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-xs md:text-sm text-muted font-light leading-relaxed flex-1 group-hover:text-foreground/80 transition-colors">
                  Я даю согласие на обработку персональных данных и получение личных сообщений от Go Offer, включая информацию о тарифах, услугах и специальных предложениях
                </span>
              </label>

              {/* SMS согласие (опционально) */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex-shrink-0 mt-0.5">
                  <input
                    type="checkbox"
                    id="smsConsent"
                    name="smsConsent"
                    checked={formData.smsConsent}
                    onChange={handleInputChange}
                    className="sr-only peer"
                  />
                  <div className="w-5 h-5 border-2 border-border rounded-sm bg-background transition-all duration-300 peer-checked:bg-purple-500 peer-checked:border-purple-500 peer-focus:ring-2 peer-focus:ring-purple-500/20 group-hover:border-purple-400/50 flex items-center justify-center">
                    {formData.smsConsent && (
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-xs md:text-sm text-muted font-light leading-relaxed flex-1 group-hover:text-foreground/80 transition-colors">
                  <span className="block mb-1">I agree to receive SMS notifications from Go Offer (optional)</span>
                  <span className="block text-[10px] md:text-xs text-muted/70">
                    We use SMS only for reminders and service-related updates. You can use the service without SMS. Reply STOP to unsubscribe.
                  </span>
                </span>
              </label>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={!formData.consent}
                className="w-full border border-foreground px-8 py-4 text-sm font-light text-foreground hover:bg-foreground hover:text-background transition-all uppercase tracking-wide relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-foreground"
              >
                <span className="relative z-10">Отправить заявку</span>
                <span className="absolute inset-0 bg-purple-300/10 opacity-0 group-hover:opacity-100 transition-opacity group-disabled:opacity-0"></span>
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}

