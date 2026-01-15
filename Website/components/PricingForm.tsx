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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="border border-border p-12 max-w-3xl mx-auto relative bg-background/50 backdrop-blur-sm">
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

            <div className="pt-4">
              <button
                type="submit"
                className="w-full border border-foreground px-8 py-4 text-sm font-light text-foreground hover:bg-foreground hover:text-background transition-all uppercase tracking-wide relative overflow-hidden group"
              >
                <span className="relative z-10">Отправить заявку</span>
                <span className="absolute inset-0 bg-purple-300/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}

