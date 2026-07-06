import type { SVGProps } from 'react'

/** Decorative editorial-style illustration for the hero section. */
export default function HeroIllustration(props: SVGProps<SVGSVGElement>) {
  const ink = '#000000'
  const paper = '#f5f5f5'
  const accent = '#ef4444'

  return (
    <svg viewBox="0 0 520 420" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <circle cx="330" cy="188" r="150" fill={ink} opacity="0.035" />
      <line x1="34" y1="386" x2="486" y2="386" stroke={ink} strokeWidth="3" strokeLinecap="round" />

      {/* Plant */}
      <path d="M58 336H92L86 382H64L58 336Z" fill={ink} />
      <line x1="75" y1="246" x2="75" y2="336" stroke={ink} strokeWidth="2.4" strokeLinecap="round" />
      {[256, 278, 300, 322].map((y, i) => (
        <g key={y}>
          <circle cx="75" cy={y} r="11.5" fill={paper} stroke={ink} strokeWidth="2" />
          <path
            d={i % 2 === 0 ? `M75 ${y}C61 ${y - 4} 54 ${y - 14} 52 ${y - 22}` : `M75 ${y}C89 ${y - 4} 96 ${y - 14} 98 ${y - 22}`}
            stroke={ink}
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </g>
      ))}

      {/* Background board */}
      <rect x="300" y="108" width="172" height="112" fill={paper} stroke={ink} strokeWidth="2.2" />
      <rect x="300" y="108" width="172" height="18" fill={paper} stroke={ink} strokeWidth="2.2" />
      <circle cx="312" cy="117" r="3" fill={ink} opacity="0.35" />
      <circle cx="324" cy="117" r="3" fill={ink} opacity="0.2" />
      <rect x="322" y="138" width="24" height="40" fill={paper} stroke={ink} strokeWidth="1.8" />
      <path d="M329 138V130H339V138" stroke={ink} strokeWidth="1.6" strokeLinecap="round" />
      <rect x="364" y="148" width="54" height="28" fill={paper} stroke={ink} strokeWidth="1.6" />
      <rect x="388" y="176" width="56" height="28" fill={paper} stroke={ink} strokeWidth="1.6" />
      <rect x="412" y="136" width="40" height="24" fill={paper} stroke={ink} strokeWidth="1.6" />
      <line x1="376" y1="160" x2="428" y2="160" stroke={ink} strokeOpacity="0.32" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="328" y1="212" x2="440" y2="212" stroke={ink} strokeOpacity="0.14" strokeWidth="2" strokeDasharray="5 8" />

      {/* Chair */}
      <path d="M138 246C138 232 148 222 162 222H178C192 222 202 232 202 246V300H138V246Z" fill={paper} stroke={ink} strokeWidth="2.4" />
      <path d="M138 260H126C114 260 106 252 106 240C106 228 114 220 126 220H140" stroke={ink} strokeWidth="2.4" strokeLinecap="round" />
      <line x1="154" y1="300" x2="148" y2="386" stroke={ink} strokeWidth="3" strokeLinecap="round" />
      <line x1="188" y1="300" x2="196" y2="386" stroke={ink} strokeWidth="3" strokeLinecap="round" />

      {/* Head: side profile */}
      <path
        d="M190 120C209 120 223 133 223 151C223 166 214 180 200 186C192 190 183 190 174 187C159 181 149 167 149 151C149 134 163 120 190 120Z"
        fill={paper}
        stroke={ink}
        strokeWidth="2.4"
      />
      <path d="M155 149C157 130 172 112 196 112C212 112 226 120 232 138C221 132 209 130 197 130C182 130 169 136 155 149Z" fill={ink} />
      <path d="M166 137C177 126 192 124 206 126" stroke={ink} strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="187" cy="156" r="2.8" fill={ink} />
      <path d="M170 152C166 148 163 143 161 138" stroke={ink} strokeWidth="4.4" strokeLinecap="round" />
      <path d="M210 145C214 149 216 153 217 159" stroke={ink} strokeWidth="4.4" strokeLinecap="round" />
      <path d="M194 158C197 161 201 161 205 159" stroke={ink} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M199 160L194 170C198 172 203 171 207 167" stroke={ink} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M197 178C203 181 210 178 214 173" stroke={ink} strokeWidth="2" strokeLinecap="round" />

      {/* Neck and torso */}
      <path d="M181 186H201V200C201 206 196 211 191 211C185 211 181 206 181 200V186Z" fill={paper} stroke={ink} strokeWidth="2.2" />
      <path
        d="M150 210C154 196 168 188 191 188C214 188 228 198 232 214L232 274H145V214L150 210Z"
        fill={paper}
        stroke={ink}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path d="M165 201C170 194 179 190 191 190C203 190 212 194 217 201L206 214C202 208 197 205 191 205C185 205 180 208 176 214L165 201Z" fill={ink} />
      <line x1="183" y1="214" x2="181" y2="244" stroke={ink} strokeWidth="2" strokeLinecap="round" />
      <line x1="199" y1="214" x2="201" y2="244" stroke={ink} strokeWidth="2" strokeLinecap="round" />
      <circle cx="181" cy="247" r="2.2" fill={ink} />
      <circle cx="201" cy="247" r="2.2" fill={ink} />

      {/* Left forearm resting toward keyboard */}
      <path d="M152 246C167 244 182 247 198 255L244 270L238 282L188 270C174 266 163 264 152 264V246Z" fill={paper} stroke={ink} strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M236 271L279 276L276 286L234 281Z" fill={paper} stroke={ink} strokeWidth="2" strokeLinejoin="round" />

      {/* Desk */}
      <rect x="228" y="286" width="214" height="12" rx="2" fill={paper} stroke={ink} strokeWidth="2.2" />
      <line x1="254" y1="298" x2="246" y2="386" stroke={ink} strokeWidth="3" strokeLinecap="round" />
      <line x1="420" y1="298" x2="428" y2="386" stroke={ink} strokeWidth="3" strokeLinecap="round" />

      {/* Laptop: lower, wider, angled like reference */}
      <path d="M308 224H398L414 330H324L308 224Z" fill={ink} />
      <circle cx="357" cy="286" r="7.2" fill={paper} />
      <path d="M292 330H424L410 348H306L292 330Z" fill={ink} />

      {/* Lower body seated */}
      <path d="M165 274H228L222 386H203L199 316L194 386H175L165 274Z" fill={paper} stroke={ink} strokeWidth="2.4" strokeLinejoin="round" />

      {/* Accent dots */}
      <circle cx="270" cy="106" r="6.5" fill={ink} opacity="0.14" />
      <circle cx="476" cy="186" r="7" fill={accent} />
      <circle cx="474" cy="86" r="5.5" fill={ink} opacity="0.1" />
    </svg>
  )
}
