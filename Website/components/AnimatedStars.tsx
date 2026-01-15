'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
}

export default function AnimatedStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePosRef = useRef({ x: 0, y: 0 })
  const particlesRef = useRef<Particle[]>([])
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    if (typeof window === 'undefined') return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Создаем частицы
    const particleCount = 90
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      radius: Math.random() * 0.4 + 0.3,
      opacity: Math.random() * 0.2 + 0.4,
    }))

    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        particle.y = Math.max(0, Math.min(canvas.height, particle.y))
      })

      const connectionDistance = 180
      const particles = particlesRef.current

      const mousePos = mousePosRef.current
      const distances = particles.map((particle, index) => ({
        index,
        distance: Math.sqrt(
          Math.pow(particle.x - mousePos.x, 2) + Math.pow(particle.y - mousePos.y, 2)
        ),
      }))

      distances.sort((a, b) => a.distance - b.distance)
      const nearest10 = distances.slice(0, 10).filter((d) => d.distance < connectionDistance)

      // Темные соединения для видимости на белом фоне
      nearest10.forEach(({ index }) => {
        const particle = particles[index]
        const distance = Math.sqrt(
          Math.pow(particle.x - mousePos.x, 2) + Math.pow(particle.y - mousePos.y, 2)
        )
        const opacity = Math.max(0, (1 - distance / connectionDistance) * 0.5)

        const gradient = ctx.createLinearGradient(mousePos.x, mousePos.y, particle.x, particle.y)
        gradient.addColorStop(0, `rgba(0, 0, 0, ${opacity * 0.6})`)
        gradient.addColorStop(1, `rgba(0, 0, 0, ${opacity * 0.25})`)

        ctx.beginPath()
        ctx.moveTo(mousePos.x, mousePos.y)
        ctx.lineTo(particle.x, particle.y)
        ctx.strokeStyle = gradient
        ctx.lineWidth = 1
        ctx.stroke()

        nearest10.forEach(({ index: otherIndex }) => {
          if (otherIndex !== index) {
            const otherParticle = particles[otherIndex]
            const particleDistance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + Math.pow(particle.y - otherParticle.y, 2)
            )
            if (particleDistance < connectionDistance) {
              const particleOpacity = Math.max(0, (1 - particleDistance / connectionDistance) * 0.35)
              const particleGradient = ctx.createLinearGradient(particle.x, particle.y, otherParticle.x, otherParticle.y)
              particleGradient.addColorStop(0, `rgba(0, 0, 0, ${particleOpacity * 0.4})`)
              particleGradient.addColorStop(1, `rgba(0, 0, 0, ${particleOpacity * 0.15})`)

              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.strokeStyle = particleGradient
              ctx.lineWidth = 0.5
              ctx.stroke()
            }
          }
        })
      })

      // Рисуем темные частицы для видимости на белом фоне
      particles.forEach((particle) => {
        // Темная частица с уменьшенной непрозрачностью
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 0, 0, ${Math.min(0.5, particle.opacity * 0.6)})`
        ctx.globalAlpha = 1.0
        ctx.fill()

        // Внешнее темное свечение (более тонкое)
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius * 1.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 0, 0, ${particle.opacity * 0.08})`
        ctx.globalAlpha = 1.0
        ctx.fill()
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ 
        opacity: 1.0,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh'
      }}
    />
  )
}
