'use client'

import { useState, useEffect } from 'react'

export default function PromoTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Количество мест по ограниченному предложению
  const [spotsLeft, setSpotsLeft] = useState(5)

  useEffect(() => {
    // Фиксированная дата начала первого цикла
    // Все пользователи видят одинаковое время на таймере
    // Таймер автоматически перезапускается каждые 3 дня
    const cycleStartDate = new Date('2025-01-01T00:00:00').getTime()
    const cycleDuration = 3 * 24 * 60 * 60 * 1000 // 3 дня в миллисекундах

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      
      // Вычисляем сколько времени прошло с начала первого цикла
      const elapsed = now - cycleStartDate
      
      // Вычисляем остаток от деления на длительность цикла
      // Это даст нам сколько времени прошло с начала текущего 3-дневного цикла
      const timeInCurrentCycle = elapsed % cycleDuration
      
      // Вычисляем сколько времени осталось до конца текущего цикла
      const remaining = cycleDuration - timeInCurrentCycle

      const days = Math.floor(remaining / (1000 * 60 * 60 * 24))
      const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((remaining % (1000 * 60)) / 1000)

      return { days, hours, minutes, seconds }
    }

    // Обновляем сразу
    setTimeLeft(calculateTimeLeft())

    // Обновляем каждую секунду
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="border border-purple-500/30 p-4 sm:p-6 md:p-8 relative overflow-hidden group hover:border-purple-400/50 transition-all duration-500 animate-scale-in hover-purple-glow">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Бейдж с количеством мест в правом верхнем углу */}
      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20">
        <div className="text-[10px] sm:text-xs text-red-600 font-medium px-2 sm:px-2.5 py-0.5 sm:py-1 bg-red-500/10 border border-red-500/30 rounded-md backdrop-blur-sm">
          Осталось мест: <span className="font-semibold text-red-600">{spotsLeft}</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12 relative z-10">
        <div className="text-center md:text-left flex-1 min-w-0">
          <div className="mb-3 sm:mb-4">
            <span className="text-[10px] sm:text-xs text-purple-600 font-light uppercase tracking-wide">
              Ограниченное предложение
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-light mb-2 sm:mb-3 tracking-tight leading-tight break-words overflow-wrap-anywhere">
            <span className="text-foreground">В подарок </span>
            <span className="gradient-text whitespace-normal">250 подач руками ассистентов</span>
          </h3>
          <p className="text-xs sm:text-sm text-muted font-light">
            При покупке любого тарифа до окончания таймера
          </p>
        </div>

        <div className="flex-shrink-0 w-full md:w-auto">
          <div className="text-center mb-4 sm:mb-6">
            <p className="text-[10px] sm:text-xs text-muted font-light uppercase tracking-wide mb-4 sm:mb-6">
              До конца акции осталось:
            </p>
          </div>
          <div className="flex gap-2 sm:gap-3 md:gap-4 justify-center">
            <div className="border border-purple-500/30 bg-purple-500/5 p-2 sm:p-3 md:p-4 min-w-[50px] sm:min-w-[55px] md:min-w-[60px] text-center group/item hover:border-purple-400/50 hover:bg-purple-500/10 transition-all duration-300 rounded-lg">
              <div className="text-2xl sm:text-2xl md:text-3xl font-light text-purple-600 mb-1 sm:mb-2 tracking-tight group-hover/item:scale-110 transition-transform">
                {String(timeLeft.days).padStart(2, '0')}
              </div>
              <div className="text-[10px] sm:text-xs text-muted uppercase font-light tracking-wide">дней</div>
            </div>
            <div className="border border-blue-500/30 bg-blue-500/5 p-2 sm:p-3 md:p-4 min-w-[50px] sm:min-w-[55px] md:min-w-[60px] text-center group/item hover:border-blue-400/50 hover:bg-blue-500/10 transition-all duration-300 rounded-lg">
              <div className="text-2xl sm:text-2xl md:text-3xl font-light text-blue-600 mb-1 sm:mb-2 tracking-tight group-hover/item:scale-110 transition-transform">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <div className="text-[10px] sm:text-xs text-muted uppercase font-light tracking-wide">часов</div>
            </div>
            <div className="border border-pink-500/30 bg-pink-500/5 p-2 sm:p-3 md:p-4 min-w-[50px] sm:min-w-[55px] md:min-w-[60px] text-center group/item hover:border-pink-400/50 hover:bg-pink-500/10 transition-all duration-300 rounded-lg">
              <div className="text-2xl sm:text-2xl md:text-3xl font-light text-pink-600 mb-1 sm:mb-2 tracking-tight group-hover/item:scale-110 transition-transform">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <div className="text-[10px] sm:text-xs text-muted uppercase font-light tracking-wide">минут</div>
            </div>
            <div className="border border-cyan-500/30 bg-cyan-500/5 p-2 sm:p-3 md:p-4 min-w-[50px] sm:min-w-[55px] md:min-w-[60px] text-center group/item hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300 rounded-lg">
              <div className="text-2xl sm:text-2xl md:text-3xl font-light text-cyan-600 mb-1 sm:mb-2 tracking-tight group-hover/item:scale-110 transition-transform">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <div className="text-[10px] sm:text-xs text-muted uppercase font-light tracking-wide">секунд</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
