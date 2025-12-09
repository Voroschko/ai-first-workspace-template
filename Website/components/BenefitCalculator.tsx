'use client'

import { useState, useMemo } from 'react'
import ScrollReveal from './ScrollReveal'

interface Plan {
  name: string
  price: number
  monthly: number
}

const plans: Plan[] = [
  { name: 'Take All', price: 2850, monthly: 119 },
  { name: 'Take All +', price: 4950, monthly: 206 },
  { name: 'VIP', price: 7750, monthly: 322 },
]

export default function BenefitCalculator() {
  const [currentSalary, setCurrentSalary] = useState<number>(50000)
  const [selectedPlan, setSelectedPlan] = useState<string>('Take All +')
  const [monthsSearching, setMonthsSearching] = useState<number>(0)

  const selectedPlanData = plans.find(p => p.name === selectedPlan) || plans[1]

  // Расчеты
  const calculations = useMemo(() => {
    const planCost = selectedPlanData.price // Только разовый платеж

    // Процент повышения оффера в зависимости от тарифа
    // Сбалансировано для правильной чистой выгоды после вычета тарифа
    // VIP: максимальная чистая выгода, Take All +: средняя, Take All: незначительная
    const getOfferIncreasePercent = (planName: string): number => {
      switch (planName) {
        case 'VIP':
          return 28.4 // Максимальная чистая выгода - премиум тариф
        case 'Take All +':
          return 15.5 // Средняя чистая выгода - средний тариф
        case 'Take All':
          return 6.0 // Незначительная чистая выгода - базовый тариф
        default:
          return 15.5
      }
    }

    const offerIncreasePercent = getOfferIncreasePercent(selectedPlan)
    // Множитель для расчета: например, 28.4% = 1.284
    const offerIncreaseMultiplier = 1 + (offerIncreasePercent / 100)

    // Средняя зарплата на рынке (текущая зарплата пользователя)
    const marketAverage = currentSalary
    
    // Оффер с Go Offer (процент зависит от выбранного тарифа)
    // Формула: текущая_зарплата × (1 + процент_повышения / 100)
    const offerWithGoOffer = currentSalary * offerIncreaseMultiplier
    
    // Дополнительный годовой доход от более высокого оффера
    // Разница между оффером с Go Offer и текущей зарплатой
    const additionalAnnualIncome = offerWithGoOffer - marketAverage
    
    // Время до оффера: 68% за 3 месяца, средний поиск - 6+ месяцев
    const timeToOffer = 3 // месяца
    const avgTimeWithout = 6 // месяца
    const timeSaved = avgTimeWithout - timeToOffer
    
    // Потерянный доход за время поиска (если безработный)
    const lostIncomePerMonth = currentSalary / 12
    const lostIncomeSaved = lostIncomePerMonth * timeSaved
    
    // Потерянный доход за время, которое клиент уже ищет работу
    // Если выбрано "12+ месяцев", используем 12 для расчетов
    const actualMonthsSearching = monthsSearching > 12 ? 12 : monthsSearching
    const lostIncomeAlready = lostIncomePerMonth * actualMonthsSearching
    
    // Расчет: если бы начал использовать Go Offer с самого начала, сколько бы уже получил
    // С Go Offer оффер получают за 3 месяца, значит если ищет больше 3 месяцев, уже работал бы
    // Если выбрано "12+ месяцев", используем 12 для расчетов
    const monthsWorkedWithGoOffer = Math.max(0, actualMonthsSearching - timeToOffer)
    // Месячная зарплата с учетом выбранного тарифа (разный процент повышения)
    const monthlySalaryWithGoOffer = offerWithGoOffer / 12
    // Общая сумма, которую бы уже заработал (зависит от тарифа через offerWithGoOffer)
    const totalEarnedWithGoOffer = monthlySalaryWithGoOffer * monthsWorkedWithGoOffer
    // Чистая выгода после вычета стоимости тарифа (зависит от выбранного тарифа)
    const netEarnedWithGoOffer = totalEarnedWithGoOffer - planCost
    
    // Потенциальная выгода: если начать использовать Go Offer сейчас
    // Сколько еще месяцев осталось до среднего времени поиска (6 месяцев)
    const remainingMonthsWithoutGoOffer = Math.max(0, avgTimeWithout - actualMonthsSearching)
    const potentialLostIncome = lostIncomePerMonth * remainingMonthsWithoutGoOffer
    
    // Экономия времени с Go Offer (осталось до оффера)
    // Если уже ищет больше 3 месяцев, то с Go Offer получит оффер через 1 месяц (минимум)
    const remainingTimeWithGoOffer = actualMonthsSearching >= timeToOffer ? 1 : Math.max(1, timeToOffer - actualMonthsSearching)
    const timeSavedWithGoOffer = remainingMonthsWithoutGoOffer - remainingTimeWithGoOffer
    
    // Потенциальная экономия на потерянном доходе
    const potentialIncomeSaved = lostIncomePerMonth * timeSavedWithGoOffer
    
    // Общая потенциальная выгода: экономия на потерянном доходе + дополнительный доход от более высокого оффера
    // За первый год работы (зависит от тарифа через additionalAnnualIncome)
    // additionalAnnualIncome уже учитывает процент повышения оффера для выбранного тарифа
    const potentialBenefitFirstYear = potentialIncomeSaved + (additionalAnnualIncome * (12 - remainingTimeWithGoOffer) / 12)
    
    // Чистая выгода за первый год (после вычета стоимости тарифа)
    // Учитывает и процент повышения оффера (через potentialBenefitFirstYear), и стоимость тарифа
    const netBenefitFirstYear = potentialBenefitFirstYear - planCost
    
    return {
      planCost,
      marketAverage,
      offerWithGoOffer,
      offerIncreasePercent,
      additionalAnnualIncome,
      timeToOffer,
      avgTimeWithout,
      timeSaved,
      lostIncomeSaved,
      lostIncomePerMonth,
      lostIncomeAlready,
      monthsWorkedWithGoOffer,
      monthlySalaryWithGoOffer,
      totalEarnedWithGoOffer,
      netEarnedWithGoOffer,
      remainingMonthsWithoutGoOffer,
      potentialLostIncome,
      remainingTimeWithGoOffer,
      timeSavedWithGoOffer,
      potentialIncomeSaved,
      potentialBenefitFirstYear,
      netBenefitFirstYear,
      actualMonthsSearching,
    }
  }, [currentSalary, selectedPlan, selectedPlanData, monthsSearching])

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <ScrollReveal animation="fade-in">
        <div className="bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-pink-500/10 rounded-xl sm:rounded-2xl border border-purple-500/20 p-3 sm:p-4 md:p-6 backdrop-blur-sm">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-light mb-0.5 sm:mb-1 text-center">
            <span className="gradient-text">Калькулятор выгоды</span>
          </h3>
          <p className="text-xs sm:text-sm text-muted text-center mb-3 sm:mb-4 font-light">
            Рассчитайте, сколько вы сэкономите и заработаете с Go Offer
          </p>

          {/* Ввод данных */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
            <div>
              <label className="block text-xs font-light text-foreground mb-0.5">
                Желаемая зарплата ($/год)
              </label>
              <input
                type="number"
                value={currentSalary}
                onChange={(e) => {
                  const value = e.target.value
                  
                  // Если поле пустое, разрешаем
                  if (value === '') {
                    setCurrentSalary(0)
                    return
                  }
                  
                  // Всегда удаляем ведущие нули
                  const valueStr = value.toString()
                  const cleanedValue = valueStr.replace(/^0+/, '')
                  
                  // Если после удаления нулей ничего не осталось, устанавливаем 0
                  if (cleanedValue === '') {
                    setCurrentSalary(0)
                    return
                  }
                  
                  const numValue = Number(cleanedValue)
                  
                  // Проверка: не более 6 цифр (максимум 999,999)
                  if (numValue > 999999) {
                    return // Не обновляем значение
                  }
                  
                  // Если все проверки пройдены, обновляем значение
                  if (numValue >= 0 && numValue <= 999999) {
                    setCurrentSalary(numValue)
                  }
                }}
                onBlur={(e) => {
                  // При потере фокуса проверяем минимальное значение
                  const numValue = Number(e.target.value)
                  if (numValue < 30000) {
                    setCurrentSalary(30000)
                  } else if (numValue > 999999) {
                    setCurrentSalary(999999)
                  }
                }}
                className="w-full px-3 py-2 bg-background/80 border border-border/60 rounded-lg text-foreground focus:border-purple-500/70 focus:bg-background/90 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-colors font-medium text-sm placeholder:text-muted/60"
                min="30000"
                max="999999"
                step="5000"
              />
            </div>

            <div>
              <label className="block text-xs font-light text-foreground mb-0.5">
                Сколько месяцев вы уже ищете работу?
              </label>
              <select
                value={monthsSearching}
                onChange={(e) => setMonthsSearching(Number(e.target.value))}
                className="w-full px-3 py-2 bg-background/80 border border-border/60 rounded-lg text-foreground focus:border-purple-500/70 focus:bg-background/90 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-colors font-medium text-sm appearance-none cursor-pointer"
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                  <option key={month} value={month} className="bg-background text-foreground">
                    {month} {month === 1 ? 'месяц' : month < 5 ? 'месяца' : 'месяцев'}
                  </option>
                ))}
                <option value={13} className="bg-background text-foreground">12+ месяцев</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-light text-foreground mb-0.5">
                Выберите тариф
              </label>
              <select
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
                className="w-full px-3 py-2 bg-background/80 border border-border/60 rounded-lg text-foreground focus:border-purple-500/70 focus:bg-background/90 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-colors font-medium text-sm appearance-none cursor-pointer"
              >
                {plans.map((plan) => (
                  <option key={plan.name} value={plan.name} className="bg-background text-foreground">
                    {plan.name} - ${plan.price}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Результаты */}
          <div className="space-y-3">
            {/* Основные метрики */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-background/30 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-purple-500/20 overflow-hidden min-w-0">
                <div className="text-[10px] sm:text-xs text-muted font-light mb-2 sm:mb-3 uppercase tracking-wide break-words">
                  Стоимость тарифа
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-1 sm:mb-2 break-all overflow-hidden leading-tight min-w-0">
                  ${calculations.planCost.toLocaleString()}
                </div>
              </div>

              <div className="bg-background/30 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-blue-500/20 overflow-hidden min-w-0">
                <div className="text-[10px] sm:text-xs text-muted font-light mb-2 sm:mb-3 uppercase tracking-wide break-words">
                  Оффер с Go Offer
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-accent mb-1 sm:mb-2 break-all overflow-hidden leading-tight min-w-0">
                  ${Math.round(calculations.offerWithGoOffer).toLocaleString()}
                </div>
                <div className="text-xs sm:text-sm text-muted mt-1 sm:mt-2 font-light break-words">
                  +{calculations.offerIncreasePercent.toFixed(1)}% к среднему рынку
                </div>
              </div>

              <div className="bg-background/30 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-green-500/20 sm:col-span-2 md:col-span-1 overflow-hidden min-w-0">
                <div className="text-[10px] sm:text-xs text-muted font-light mb-2 sm:mb-3 uppercase tracking-wide break-words">
                  Доп. доход/год
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-green-400 mb-1 sm:mb-2 break-all overflow-hidden leading-tight min-w-0">
                  +${Math.round(calculations.additionalAnnualIncome).toLocaleString()}
                </div>
                <div className="text-xs sm:text-sm text-muted mt-1 sm:mt-2 font-light break-words">
                  vs средний рынок
                </div>
              </div>
            </div>

            {/* 2 блока в ряд */}
            {monthsSearching > 0 && (
              <ScrollReveal animation="fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-full sm:max-w-[95%] md:max-w-[90%] mx-auto items-stretch">
                  {/* Блок 1: Выгода с Go Offer */}
                  {monthsSearching > calculations.timeToOffer ? (
                    <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-lg sm:rounded-xl p-2.5 sm:p-3 border border-green-500/40 h-full flex flex-col">
                      <div className="text-[10px] sm:text-xs text-muted font-light mb-1 uppercase tracking-wide">
                        💰 Выгода с Go Offer
                      </div>
                      <div className="text-[10px] sm:text-xs text-muted font-light mb-1">
                        Если бы начали использовать Go Offer с самого начала
                      </div>
                      <div className="text-lg sm:text-xl md:text-2xl font-medium text-green-400 mb-1">
                        ${Math.round(calculations.totalEarnedWithGoOffer).toLocaleString()}
                      </div>
                      <div className="text-[10px] sm:text-xs text-muted font-light mt-auto">
                        Уже заработали бы за {calculations.monthsWorkedWithGoOffer} {calculations.monthsWorkedWithGoOffer === 1 ? 'месяц' : calculations.monthsWorkedWithGoOffer < 5 ? 'месяца' : 'месяцев'} работы
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-lg sm:rounded-xl p-2.5 sm:p-3 border border-green-500/40 h-full flex flex-col">
                      <div className="text-[10px] sm:text-xs text-muted font-light mb-1 uppercase tracking-wide">
                        💰 Выгода с Go Offer
                      </div>
                      <div className="text-[10px] sm:text-xs text-muted font-light mt-auto">
                        Начните использовать Go Offer сейчас
                      </div>
                    </div>
                  )}

                  {/* Блок 2: Потерянный доход (справа) */}
                  <div className="bg-background/30 rounded-lg sm:rounded-xl p-2.5 sm:p-3 border border-red-500/30 h-full flex flex-col">
                    <div className="text-[10px] sm:text-xs text-muted font-light mb-1 sm:mb-1.5">
                      💸 Уже потеряно за время поиска работы
                    </div>
                    <div className="text-lg sm:text-xl md:text-2xl font-medium text-red-400 mb-1">
                      ${Math.round(calculations.lostIncomeAlready).toLocaleString()}
                    </div>
                    <div className="text-[10px] sm:text-xs text-muted font-light mb-1 sm:mb-1.5">
                      За {calculations.actualMonthsSearching === 12 && monthsSearching > 12 ? '12+' : calculations.actualMonthsSearching} {calculations.actualMonthsSearching === 1 ? 'месяц' : calculations.actualMonthsSearching < 5 ? 'месяца' : 'месяцев'} поиска работы
                    </div>
                    <div className="text-[10px] sm:text-xs text-muted font-light pt-1 sm:pt-1.5 border-t border-border/30 mt-auto">
                      💡 С Go Offer вы бы уже получили оффер и начали зарабатывать
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )}

          </div>

          {/* Дополнительная информация */}
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border/30">
            <div className="text-[10px] sm:text-xs text-muted font-light space-y-2">
              <p>
                * Расчеты основаны на статистике: 68% клиентов получают оффер за 3 месяца. 
                Процент повышения оффера зависит от выбранного тарифа (VIP: до 28.4%, Take All +: до 15.5%, Take All: до 6%).
              </p>
              <p>
                ** Экономия времени рассчитана как разница между средним временем самостоятельного 
                поиска (6+ месяцев) и временем с Go Offer (3 месяца для 68% клиентов).
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  )
}

