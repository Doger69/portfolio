import React from 'react'
import type { IconType } from 'react-icons'
import {
  SiFlutter,
  SiKotlin,
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
} from 'react-icons/si'

/**
 * CONFIGURATION
 * Easily tweak speeds, colors, or sizes here.
 */
const ORBIT_CONFIG = {
  ringColor: '#F59E0B', // Soft amber/gold matching the reference
  ringSecondaryColor: '#D97706',
  orbitSpeed: '20s', // Period for full 360-degree orbit revolution
  ringRotateSpeed: '28s', // Independent rotation speed for the glowing ring
  streakRotateSpeed: '46s', // Independent rotation speed for the comet / brush streak
  pulseDuration: '3.6s', // Gentle breathing pulse cycle for the badges
}

interface OrbitSkill {
  name: string
  icon: IconType
  left: string // Percentage position directly on the circular ring line
  top: string
  bgGradient: string
  iconColor: string
  borderColor: string
  glowColor: string
  delay: string
}

/**
 * Mathematically exact coordinates on a circle of radius 50% centered at (50%, 50%):
 * left = 50% + 50% * cos(angle)
 * top  = 50% + 50% * sin(angle)
 *
 * Angles (evenly spaced every 60 degrees):
 * - Flutter:    -90deg (12 o'clock) -> (50.0%, 0.0%)
 * - React:      -30deg (2 o'clock)  -> (93.3%, 25.0%)
 * - JavaScript:  30deg (4 o'clock)  -> (93.3%, 75.0%)
 * - Kotlin:      90deg (6 o'clock)  -> (50.0%, 100.0%)
 * - MongoDB:    150deg (8 o'clock)  -> (6.7%,  75.0%)
 * - Node.js:    210deg (10 o'clock) -> (6.7%,  25.0%)
 */
const ORBIT_SKILLS: OrbitSkill[] = [
  {
    name: 'Flutter',
    icon: SiFlutter,
    left: '50%',
    top: '0%',
    bgGradient: 'from-[#02569B] via-[#0269BE] to-[#014175]',
    iconColor: '#FFFFFF',
    borderColor: 'rgba(71, 197, 251, 0.55)',
    glowColor: 'rgba(2, 86, 155, 0.55)',
    delay: '0s',
  },
  {
    name: 'React',
    icon: SiReact,
    left: '93.3%',
    top: '25%',
    bgGradient: 'from-[#1E293B] via-[#0F172A] to-[#0A0F1D]',
    iconColor: '#61DAFB',
    borderColor: 'rgba(97, 218, 251, 0.5)',
    glowColor: 'rgba(97, 218, 251, 0.45)',
    delay: '0.6s',
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    left: '93.3%',
    top: '75%',
    bgGradient: 'from-[#F7DF1E] via-[#F3D709] to-[#D6BE0B]',
    iconColor: '#000000',
    borderColor: 'rgba(255, 255, 255, 0.55)',
    glowColor: 'rgba(247, 223, 30, 0.45)',
    delay: '1.2s',
  },
  {
    name: 'Kotlin',
    icon: SiKotlin,
    left: '50%',
    top: '100%',
    bgGradient: 'from-[#7F52FF] via-[#9F35E8] to-[#C711E1]',
    iconColor: '#FFFFFF',
    borderColor: 'rgba(199, 17, 225, 0.55)',
    glowColor: 'rgba(127, 82, 255, 0.55)',
    delay: '1.8s',
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    left: '6.7%',
    top: '75%',
    bgGradient: 'from-[#0E1F14] via-[#08150D] to-[#040A06]',
    iconColor: '#00ED64',
    borderColor: 'rgba(0, 237, 100, 0.5)',
    glowColor: 'rgba(0, 237, 100, 0.45)',
    delay: '2.4s',
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    left: '6.7%',
    top: '25%',
    bgGradient: 'from-[#1B3E1B] via-[#142F14] to-[#0D1F0D]',
    iconColor: '#5FA04E',
    borderColor: 'rgba(95, 160, 78, 0.55)',
    glowColor: 'rgba(95, 160, 78, 0.45)',
    delay: '3.0s',
  },
]

// Twinkling particle dots scattered around the ring
const TWINKLE_PARTICLES = [
  { left: '22%', top: '14%', size: '3px', delay: '0.2s', duration: '2.8s' },
  { left: '78%', top: '16%', size: '4px', delay: '1.1s', duration: '3.2s' },
  { left: '94%', top: '50%', size: '3.5px', delay: '0.7s', duration: '2.5s' },
  { left: '76%', top: '86%', size: '3px', delay: '1.8s', duration: '3.4s' },
  { left: '24%', top: '88%', size: '4px', delay: '0.5s', duration: '2.9s' },
  { left: '6%', top: '52%', size: '3px', delay: '1.4s', duration: '3.1s' },
  { left: '42%', top: '8%', size: '2.5px', delay: '2.1s', duration: '2.6s' },
  { left: '60%', top: '92%', size: '3.5px', delay: '1.6s', duration: '3.0s' },
]

export default function HeroOrbit({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[340px] items-center justify-center sm:max-w-[400px] md:max-w-[460px] lg:max-w-[480px]">
      {/* ── 1. Rotating Comet / Brush Streak Accent (Behind Ring & Photo) ── */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center animate-orbit-streak"
        style={{ animationDuration: ORBIT_CONFIG.streakRotateSpeed }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 500 500"
          className="h-[95%] w-[95%] opacity-35 filter blur-[0.5px]"
          fill="none"
        >
          <defs>
            <linearGradient id="streakGrad1" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D97706" stopOpacity="0" />
              <stop offset="30%" stopColor="#F59E0B" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#FDE68A" stopOpacity="0.85" />
              <stop offset="70%" stopColor="#F59E0B" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#B45309" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="streakGrad2" x1="10%" y1="90%" x2="90%" y2="10%">
              <stop offset="0%" stopColor="#78350F" stopOpacity="0" />
              <stop offset="40%" stopColor="#F59E0B" stopOpacity="0.35" />
              <stop offset="60%" stopColor="#FDE68A" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
            </linearGradient>
            <filter id="streakGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Diagonal textured brush-strokes / comet trails */}
          <g filter="url(#streakGlow)">
            <path
              d="M 60 410 C 130 350, 200 280, 250 250 C 310 210, 390 130, 440 80 C 420 120, 350 210, 290 260 C 230 310, 140 380, 60 410 Z"
              fill="url(#streakGrad1)"
            />
            <path
              d="M 100 440 C 170 380, 220 320, 270 270 C 320 220, 390 150, 420 110 C 390 160, 320 240, 260 290 C 200 340, 150 400, 100 440 Z"
              fill="url(#streakGrad2)"
              opacity="0.8"
            />
            <path
              d="M 140 390 C 210 330, 280 260, 360 170 C 330 210, 260 290, 180 370 Z"
              fill="url(#streakGrad1)"
              opacity="0.6"
            />
          </g>
        </svg>
      </div>

      {/* ── 2. Glowing Rotating Ring (Concentric, Sits Just Outside Circular Photo) ── */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center animate-orbit-ring"
        style={{ animationDuration: ORBIT_CONFIG.ringRotateSpeed }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 500 500"
          className="h-full w-full"
          fill="none"
        >
          <defs>
            <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.9" />
              <stop offset="25%" stopColor="#FDE68A" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#D97706" stopOpacity="0.35" />
              <stop offset="75%" stopColor="#F59E0B" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#B45309" stopOpacity="0.35" />
            </linearGradient>
            <filter id="ringGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Primary glowing ring (r=190 in 500x500 box -> diameter is exactly 76%) */}
          <circle
            cx="250"
            cy="250"
            r="190"
            stroke="url(#ringGradient)"
            strokeWidth="2.5"
            filter="url(#ringGlow)"
          />

          {/* Secondary subtle dashed concentric track */}
          <circle
            cx="250"
            cy="250"
            r="198"
            stroke="#F59E0B"
            strokeWidth="1"
            strokeOpacity="0.25"
            strokeDasharray="6 10"
          />

          {/* Third inner faint concentric track */}
          <circle
            cx="250"
            cy="250"
            r="182"
            stroke="#F59E0B"
            strokeWidth="1"
            strokeOpacity="0.18"
          />

          {/* Glowing accent beads on the ring that rotate with it */}
          <circle cx="250" cy="60" r="3.5" fill="#FDE68A" filter="url(#ringGlow)" />
          <circle cx="440" cy="250" r="3" fill="#F59E0B" filter="url(#ringGlow)" />
          <circle cx="250" cy="440" r="3.5" fill="#FDE68A" filter="url(#ringGlow)" />
          <circle cx="60" cy="250" r="3" fill="#F59E0B" filter="url(#ringGlow)" />
          {/* Faint accent arcs */}
          <path
            d="M 115 115 A 190 190 0 0 1 185 71"
            stroke="#FDE68A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeOpacity="0.8"
            filter="url(#ringGlow)"
          />
          <path
            d="M 385 385 A 190 190 0 0 1 315 429"
            stroke="#FDE68A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeOpacity="0.8"
            filter="url(#ringGlow)"
          />
        </svg>
      </div>

      {/* ── 3. Faint Twinkling Particles ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {TWINKLE_PARTICLES.map((p, idx) => (
          <span
            key={idx}
            className="animate-orbit-twinkle absolute rounded-full bg-amber-400"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              boxShadow: '0 0 8px rgba(245, 158, 11, 0.75)',
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      {/* ── 4. Circular Profile Photo (Concentric, Centered Inside Ring) ── */}
      <div className="relative z-10 flex items-center justify-center">
        <div className="relative h-[230px] w-[230px] overflow-hidden rounded-full border-2 border-amber-400/30 bg-ink shadow-2xl shadow-ink/30 sm:h-[270px] sm:w-[270px] md:h-[310px] md:w-[310px]">
          {children}
        </div>
      </div>

      {/* ── 5. Continuously Revolving Orbit Container (Locked 100% On The Ring Line) ── */}
      {/*
        PRECISION GEOMETRY:
        - The SVG ring has radius r=190 in 500x500 space, meaning its diameter is 380/500 = 76%.
        - This orbit track container is sized to exactly w-[76%] h-[76%] and centered at (50%, 50%).
        - Therefore, the boundary of this container IS the golden ring line!
        - Each badge is positioned at (left, top) along this boundary, so its center sits directly on the line.
        - As this container rotates 360deg, all badges revolve in perfect synchronization along the ring line.
        - Counter-rotation keeps all icons and labels strictly upright throughout the full revolution.
      */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[76%] h-[76%] rounded-full animate-orbit-track z-20"
        style={{ animationDuration: ORBIT_CONFIG.orbitSpeed }}
        aria-label="Revolving skill orbit badges"
      >
        {ORBIT_SKILLS.map((skill) => {
          const Icon = skill.icon
          return (
            <div
              key={skill.name}
              className="absolute"
              style={{
                left: skill.left,
                top: skill.top,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {/* Counter-rotation layer cancels out parent orbit rotation, keeping icon upright */}
              <div
                className="animate-orbit-counter"
                style={{ animationDuration: ORBIT_CONFIG.orbitSpeed }}
              >
                {/* Subtle pulse layer (keeps center fixed on the line) */}
                <div
                  className="animate-orbit-pulse"
                  style={{
                    animationDuration: ORBIT_CONFIG.pulseDuration,
                    animationDelay: skill.delay,
                  }}
                >
                  {/* Interactive Badge centered directly on the golden ring line */}
                  <div
                    className="group pointer-events-auto relative cursor-pointer transition-transform duration-200 hover:scale-120"
                    title={skill.name}
                  >
                    <div
                      className={`relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br sm:h-13 sm:w-13 md:h-14 md:w-14 ${skill.bgGradient} border backdrop-blur-sm transition-all duration-300`}
                      style={{
                        borderColor: skill.borderColor,
                        boxShadow: `0 8px 24px rgba(0, 0, 0, 0.45), 0 0 16px ${skill.glowColor}`,
                      }}
                    >
                      {/* Subtle top specular shine highlight */}
                      <div
                        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/25 via-white/5 to-transparent"
                        aria-hidden="true"
                      />

                      {/* Tech Brand Icon */}
                      <Icon
                        className="relative z-10 text-xl transition-transform duration-200 group-hover:scale-110 sm:text-2xl md:text-3xl"
                        style={{ color: skill.iconColor }}
                        aria-hidden="true"
                      />

                      {/* Tooltip on hover */}
                      <span className="pointer-events-none absolute -bottom-7 left-1/2 z-30 -translate-x-1/2 whitespace-nowrap rounded-md bg-ink/90 px-2 py-0.5 text-[11px] font-semibold text-cream opacity-0 shadow-md backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
