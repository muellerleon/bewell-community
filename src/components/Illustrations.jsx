/* Flat-vector illustration system for BeWell Community.
   Drawn only from the CCA illustration palette (Brand Guidelines v1.0, p.14):
   #FBFAF1 #FCEBCA #FCBA39 #A44F28 #F7CAC9 #FBB5AD #F59069 #B490E4 #D3EFE8 #55ACA3 #006C77 #003232

   Every scene is one <svg> drawn in a 400×300 box and sliced like a photograph, so the same
   artwork works in a portrait tile, a square card and a wide page banner. Scenes take a colour
   scheme, so a repeated scene never looks like a repeated image. */

export const SCHEMES = {
  mint: { sky: '#D3EFE8', sky2: '#B6E4DA', ground: '#55ACA3', leaf: '#006C77', sun: '#FCBA39', prop: '#F59069', prop2: '#B490E4', light: '#FBFAF1' },
  sand: { sky: '#FCEBCA', sky2: '#FADFAE', ground: '#FCBA39', leaf: '#55ACA3', sun: '#F59069', prop: '#55ACA3', prop2: '#A44F28', light: '#FBFAF1' },
  coral: { sky: '#FBB5AD', sky2: '#F7CAC9', ground: '#F59069', leaf: '#006C77', sun: '#FCBA39', prop: '#006C77', prop2: '#A44F28', light: '#FBFAF1' },
  lilac: { sky: '#E3D8F6', sky2: '#D3C2F0', ground: '#B490E4', leaf: '#55ACA3', sun: '#FCBA39', prop: '#55ACA3', prop2: '#F59069', light: '#FBFAF1' },
  teal: { sky: '#A9DED5', sky2: '#8FD0C5', ground: '#2B7272', leaf: '#55ACA3', sun: '#FCBA39', prop: '#FBB5AD', prop2: '#F59069', light: '#FBFAF1' },
  blush: { sky: '#F7CAC9', sky2: '#F2B9B8', ground: '#B490E4', leaf: '#55ACA3', sun: '#FCBA39', prop: '#55ACA3', prop2: '#F59069', light: '#FBFAF1' },
}

const SKIN = ['#F4C89A', '#E0A870', '#B87A4E', '#8A5233']
const HAIR = ['#3A2A21', '#5E3A22', '#1F1D1B', '#A44F28', '#6B4A8A']
const INK = '#143D3D'

/* ---------------------------------------------------------------- primitives */

function Face({ smile = true }) {
  return (
    <>
      <circle cx="25" cy="19" r="1.8" fill={INK} />
      <circle cx="35" cy="19" r="1.8" fill={INK} />
      {smile && <path d="M26 25 q4 4 8 0" stroke={INK} strokeWidth="1.8" fill="none" strokeLinecap="round" />}
    </>
  )
}

function Head({ skin, hair, long = false }) {
  return (
    <>
      <circle cx="30" cy="20" r="14" fill={skin} />
      {long && <path d="M14 22 q0 -18 16 -18 q16 0 16 18 l0 16 q-4 -8 -6 -12 l-20 0 q-2 4 -6 12 z" fill={hair} />}
      {!long && <path d="M15 19 q1 -16 15 -16 q14 0 15 16 q-6 -7 -15 -7 q-9 0 -15 7 z" fill={hair} />}
      <Face />
    </>
  )
}

/* A person in a 60×120 box, feet at the bottom. */
export function Person({ x = 0, y = 0, s = 1, pose = 'stand', skin = 0, hair = 0, long = false, shirt = '#F59069', legs = '#2B7272', flip = false }) {
  const sk = SKIN[skin % SKIN.length]
  const hr = HAIR[hair % HAIR.length]
  const body = {
    stand: (
      <>
        <rect x="20" y="76" width="9" height="40" rx="4.5" fill={legs} />
        <rect x="31" y="76" width="9" height="40" rx="4.5" fill={legs} />
        <rect x="17" y="112" width="14" height="8" rx="4" fill={INK} />
        <rect x="29" y="112" width="14" height="8" rx="4" fill={INK} />
        <rect x="16" y="34" width="28" height="46" rx="13" fill={shirt} />
        <rect x="8" y="38" width="8" height="36" rx="4" fill={shirt} />
        <rect x="44" y="38" width="8" height="36" rx="4" fill={shirt} />
        <circle cx="12" cy="76" r="4.5" fill={sk} />
        <circle cx="48" cy="76" r="4.5" fill={sk} />
      </>
    ),
    lotus: (
      <>
        <path d="M6 104 q24 -16 48 0 q2 10 -6 12 l-36 0 q-8 -2 -6 -12 z" fill={legs} />
        <rect x="16" y="46" width="28" height="60" rx="14" fill={shirt} />
        <path d="M14 58 q-8 24 -2 44 q4 6 10 2" stroke={shirt} strokeWidth="9" fill="none" strokeLinecap="round" />
        <path d="M46 58 q8 24 2 44 q-4 6 -10 2" stroke={shirt} strokeWidth="9" fill="none" strokeLinecap="round" />
        <circle cx="18" cy="103" r="4.5" fill={sk} />
        <circle cx="42" cy="103" r="4.5" fill={sk} />
      </>
    ),
    sit: (
      <>
        <rect x="18" y="84" width="38" height="12" rx="6" fill={legs} />
        <rect x="45" y="92" width="11" height="24" rx="5.5" fill={legs} />
        <rect x="42" y="112" width="17" height="8" rx="4" fill={INK} />
        <rect x="16" y="42" width="28" height="46" rx="13" fill={shirt} />
        <path d="M42 56 q14 6 16 20" stroke={shirt} strokeWidth="9" fill="none" strokeLinecap="round" />
        <circle cx="58" cy="78" r="4.5" fill={sk} />
      </>
    ),
    walk: (
      <>
        <path d="M28 76 l-8 40" stroke={legs} strokeWidth="10" fill="none" strokeLinecap="round" />
        <path d="M32 76 l10 38" stroke={legs} strokeWidth="10" fill="none" strokeLinecap="round" />
        <rect x="13" y="112" width="14" height="8" rx="4" fill={INK} />
        <rect x="37" y="110" width="14" height="8" rx="4" fill={INK} />
        <rect x="16" y="34" width="28" height="46" rx="13" fill={shirt} />
        <path d="M18 42 l-8 28" stroke={shirt} strokeWidth="8" fill="none" strokeLinecap="round" />
        <path d="M43 42 l9 26" stroke={shirt} strokeWidth="8" fill="none" strokeLinecap="round" />
        <circle cx="10" cy="72" r="4.5" fill={sk} />
        <circle cx="53" cy="70" r="4.5" fill={sk} />
      </>
    ),
    run: (
      <>
        <path d="M28 74 l-14 26" stroke={legs} strokeWidth="10" fill="none" strokeLinecap="round" />
        <path d="M32 74 l16 20 l-4 14" stroke={legs} strokeWidth="10" fill="none" strokeLinecap="round" />
        <rect x="6" y="96" width="15" height="8" rx="4" fill={INK} />
        <rect x="38" y="106" width="15" height="8" rx="4" fill={INK} />
        <rect x="16" y="32" width="28" height="44" rx="13" fill={shirt} />
        <path d="M18 40 l-12 14" stroke={shirt} strokeWidth="8" fill="none" strokeLinecap="round" />
        <path d="M43 40 l12 12" stroke={shirt} strokeWidth="8" fill="none" strokeLinecap="round" />
        <circle cx="6" cy="55" r="4.5" fill={sk} />
        <circle cx="56" cy="53" r="4.5" fill={sk} />
      </>
    ),
    reach: (
      <>
        <rect x="20" y="76" width="9" height="40" rx="4.5" fill={legs} />
        <rect x="31" y="76" width="9" height="40" rx="4.5" fill={legs} />
        <rect x="17" y="112" width="14" height="8" rx="4" fill={INK} />
        <rect x="29" y="112" width="14" height="8" rx="4" fill={INK} />
        <rect x="16" y="34" width="28" height="46" rx="13" fill={shirt} />
        <path d="M18 40 q-14 -6 -12 -26" stroke={shirt} strokeWidth="8" fill="none" strokeLinecap="round" />
        <path d="M43 42 l10 28" stroke={shirt} strokeWidth="8" fill="none" strokeLinecap="round" />
        <circle cx="6" cy="12" r="4.5" fill={sk} />
        <circle cx="54" cy="72" r="4.5" fill={sk} />
      </>
    ),
  }[pose]

  return (
    <g transform={`translate(${x} ${y}) scale(${s}) ${flip ? 'scale(-1 1) translate(-60 0)' : ''}`}>
      {body}
      <g transform={pose === 'lotus' ? 'translate(0 12)' : pose === 'sit' ? 'translate(0 8)' : ''}>
        <Head skin={sk} hair={hr} long={long} />
      </g>
    </g>
  )
}

const Sun = ({ c, cx = 330, cy = 62, r = 30 }) => <circle cx={cx} cy={cy} r={r} fill={c.sun} />

const Tree = ({ c, x, y, s = 1 }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <rect x="-5" y="-34" width="10" height="36" rx="4" fill="#A44F28" />
    <circle cx="0" cy="-48" r="26" fill={c.leaf} />
    <circle cx="-18" cy="-36" r="17" fill={c.leaf} />
    <circle cx="18" cy="-38" r="16" fill={c.leaf} />
  </g>
)

const Plant = ({ c, x, y, s = 1 }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <path d="M0 0 q-22 -6 -24 -28 q20 2 24 28z" fill={c.leaf} />
    <path d="M0 0 q22 -8 24 -30 q-20 4 -24 30z" fill={c.prop} />
    <path d="M-11 0 h22 l-3 16 h-16z" fill="#A44F28" />
  </g>
)

const Cloud = ({ x, y, s = 1, fill = '#FBFAF1' }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`} opacity="0.85">
    <rect x="-30" y="-9" width="60" height="18" rx="9" fill={fill} />
    <circle cx="-12" cy="-8" r="12" fill={fill} />
    <circle cx="8" cy="-11" r="15" fill={fill} />
  </g>
)

/* ------------------------------------------------------------------- scenes */

const SCENES = {
  meditation: (c) => (
    <>
      <rect width="400" height="300" fill={c.sky} />
      <Sun c={c} cx={60} cy={52} r={26} />
      <rect y="214" width="400" height="86" fill={c.sky2} />
      <Plant c={c} x={358} y={214} s={1.1} />
      <rect x="40" y="228" width="120" height="14" rx="7" fill={c.prop} />
      <rect x="180" y="222" width="130" height="15" rx="7.5" fill={c.prop2} />
      <Person x={60} y={112} s={0.95} pose="lotus" skin={1} hair={0} long shirt={c.light} legs={c.ground} />
      <Person x={200} y={104} s={1.05} pose="lotus" skin={3} hair={2} shirt={c.prop2} legs={c.ground} />
      <Person x={300} y={126} s={0.8} pose="lotus" skin={0} hair={3} long shirt={c.prop} legs={c.ground} />
    </>
  ),

  retreat: (c) => (
    <>
      <rect width="400" height="300" fill={c.sky} />
      <Sun c={c} cx={318} cy={58} r={32} />
      <Cloud x={90} y={56} s={1.1} />
      <path d="M0 196 q70 -78 150 -14 q60 48 120 -10 q70 -58 130 12 l0 116 l-400 0z" fill={c.ground} />
      <rect y="232" width="400" height="68" fill={c.sky2} />
      <path d="M0 246 q60 -14 120 0 q60 14 120 0 q60 -14 160 0" stroke={c.light} strokeWidth="4" fill="none" opacity=".7" />
      <path d="M0 274 q70 -14 140 0 q70 14 140 0 q60 -12 120 0" stroke={c.light} strokeWidth="4" fill="none" opacity=".5" />
      <Tree c={c} x={52} y={236} s={0.85} />
      <Person x={170} y={148} s={1.1} pose="lotus" skin={2} hair={0} shirt={c.prop} legs={c.prop2} />
    </>
  ),

  pottery: (c) => (
    <>
      <rect width="400" height="300" fill={c.sky} />
      <rect x="248" y="34" width="132" height="120" rx="10" fill={c.sky2} />
      <rect x="248" y="86" width="132" height="8" rx="4" fill={c.leaf} />
      <rect x="248" y="146" width="132" height="8" rx="4" fill={c.leaf} />
      <path d="M268 86 q-5 -18 8 -24 q-4 -7 3 -10 h7 q7 3 3 10 q13 6 8 24 z" fill={c.prop} />
      <path d="M312 86 q-4 -14 7 -19 q-3 -6 3 -8 h6 q6 2 3 8 q11 5 7 19 z" fill={c.sun} />
      <circle cx="356" cy="76" r="11" fill={c.prop2} />
      <path d="M286 146 q-5 -16 8 -22 q-4 -6 3 -9 h6 q7 3 3 9 q13 6 8 22 z" fill={c.sun} />
      <circle cx="334" cy="134" r="12" fill={c.prop} />
      <rect y="214" width="400" height="86" fill={c.sky2} />
      <Person x={96} y={62} s={1.05} pose="stand" skin={1} hair={4} long shirt={c.prop2} legs={c.ground} />
      <rect x="86" y="192" width="190" height="14" rx="6" fill="#A44F28" />
      <rect x="114" y="206" width="14" height="62" fill="#8A5233" />
      <rect x="234" y="206" width="14" height="62" fill="#8A5233" />
      <ellipse cx="196" cy="192" rx="34" ry="8" fill={c.leaf} />
      <path d="M176 190 q-7 -26 12 -35 q-5 -9 5 -14 h9 q9 5 4 14 q19 9 12 35 z" fill={c.light} />
      <path d="M180 176 q16 -6 32 0" stroke={c.prop} strokeWidth="4" fill="none" strokeLinecap="round" />
    </>
  ),

  craft: (c) => (
    <>
      <rect width="400" height="300" fill={c.sky} />
      <Plant c={c} x={46} y={196} s={1.2} />
      <rect y="206" width="400" height="94" fill={c.sky2} />
      <rect x="110" y="188" width="250" height="18" rx="7" fill="#A44F28" />
      <rect x="140" y="206" width="14" height="66" fill="#8A5233" />
      <rect x="318" y="206" width="14" height="66" fill="#8A5233" />
      <circle cx="196" cy="172" r="16" fill={c.sun} />
      <rect x="188" y="170" width="16" height="4" rx="2" fill={c.light} />
      <circle cx="248" cy="176" r="12" fill={c.prop} />
      <path d="M288 160 q22 0 22 16 q0 12 -22 12 q-22 0 -22 -12 q0 -16 22 -16z" fill={c.prop2} />
      <Person x={130} y={66} s={1.0} pose="sit" skin={0} hair={1} shirt={c.prop} legs={c.ground} />
      <Person x={276} y={66} s={1.0} pose="sit" skin={3} hair={2} long flip shirt={c.prop2} legs={c.ground} />
    </>
  ),

  dance: (c) => (
    <>
      <rect width="400" height="300" fill={c.sky} />
      <circle cx="200" cy="130" r="104" fill={c.sky2} />
      <rect y="228" width="400" height="72" fill={c.ground} opacity=".35" />
      <path d="M92 74 q14 -8 14 8 q0 12 -14 8 q-10 -4 0 -16z" fill={c.sun} />
      <rect x="104" y="60" width="4" height="26" rx="2" fill={c.sun} />
      <path d="M300 100 q14 -8 14 8 q0 12 -14 8 q-10 -4 0 -16z" fill={c.prop} />
      <rect x="312" y="86" width="4" height="26" rx="2" fill={c.prop} />
      <Person x={112} y={108} s={1.1} pose="reach" skin={0} hair={3} long shirt={c.light} legs={c.prop2} />
      <Person x={222} y={108} s={1.1} pose="reach" skin={2} hair={2} flip shirt={c.prop} legs={c.ground} />
    </>
  ),

  music: (c) => (
    <>
      <rect width="400" height="300" fill={c.sky} />
      <circle cx="322" cy="66" r="34" fill={c.sky2} />
      <rect y="226" width="400" height="74" fill={c.sky2} />
      <Plant c={c} x={370} y={230} s={1} />
      <Person x={80} y={84} s={1.0} pose="sit" skin={1} hair={0} shirt={c.prop} legs={c.ground} />
      <Person x={236} y={84} s={1.0} pose="sit" skin={3} hair={4} long flip shirt={c.prop2} legs={c.ground} />
      <g transform="translate(148 196)">
        <ellipse cx="0" cy="0" rx="27" ry="22" fill="#A44F28" />
        <circle cx="0" cy="0" r="8" fill={c.light} />
        <rect x="18" y="-30" width="44" height="7" rx="3.5" fill="#8A5233" transform="rotate(-24 18 -30)" />
      </g>
      <g transform="translate(266 196)">
        <ellipse cx="0" cy="0" rx="24" ry="20" fill={c.sun} />
        <ellipse cx="0" cy="-4" rx="24" ry="16" fill={c.light} opacity=".55" />
        <rect x="-26" y="-2" width="52" height="7" rx="3" fill="#A44F28" opacity=".55" />
      </g>
      <g fill={INK} opacity=".7">
        <circle cx="192" cy="72" r="7" />
        <rect x="197" y="42" width="4" height="32" rx="2" />
        <circle cx="238" cy="56" r="6" />
        <rect x="242" y="30" width="3.5" height="28" rx="1.75" />
      </g>
    </>
  ),

  volunteer: (c) => (
    <>
      <rect width="400" height="300" fill={c.sky} />
      <rect x="250" y="40" width="130" height="150" rx="10" fill={c.sky2} />
      <rect x="250" y="96" width="130" height="8" rx="4" fill={c.ground} />
      <rect x="250" y="150" width="130" height="8" rx="4" fill={c.ground} />
      <rect x="266" y="60" width="26" height="34" rx="4" fill={c.prop} />
      <rect x="300" y="66" width="26" height="28" rx="4" fill={c.sun} />
      <rect x="336" y="58" width="26" height="36" rx="4" fill={c.prop2} />
      <rect x="272" y="116" width="30" height="32" rx="4" fill={c.sun} />
      <rect x="312" y="112" width="28" height="36" rx="4" fill={c.prop} />
      <rect y="220" width="400" height="80" fill={c.sky2} />
      <rect x="40" y="196" width="120" height="66" rx="8" fill={c.prop2} />
      <rect x="40" y="212" width="120" height="8" fill={c.light} opacity=".5" />
      <Person x={130} y={92} s={1.05} pose="stand" skin={2} hair={0} shirt={c.prop} legs={c.ground} />
      <Person x={218} y={92} s={1.05} pose="stand" skin={0} hair={4} long flip shirt={c.light} legs={c.ground} />
      <rect x="182" y="128" width="46" height="36" rx="5" fill={c.sun} />
      <rect x="182" y="142" width="46" height="6" fill={c.light} opacity=".7" />
    </>
  ),

  garden: (c) => (
    <>
      <rect width="400" height="300" fill={c.sky} />
      <Sun c={c} cx={340} cy={56} r={28} />
      <Cloud x={96} y={54} s={1} />
      <rect y="186" width="400" height="114" fill={c.ground} opacity=".45" />
      <rect y="214" width="400" height="86" fill="#A44F28" opacity=".45" />
      {[34, 92, 300, 358].map((x, i) => (
        <g key={i} transform={`translate(${x} 218)`}>
          <rect x="-3" y="-30" width="6" height="32" rx="3" fill={c.leaf} />
          <circle cx="-10" cy="-32" r="10" fill={c.leaf} />
          <circle cx="10" cy="-36" r="9" fill={c.prop} />
        </g>
      ))}
      <Person x={150} y={98} s={1.05} pose="stand" skin={1} hair={1} shirt={c.prop2} legs={c.ground} />
      <g transform="translate(196 182)">
        <rect x="0" y="0" width="38" height="30" rx="7" fill={c.sun} />
        <path d="M38 8 l18 -10 l4 6 l-18 12z" fill={c.sun} />
        <path d="M6 0 q13 -14 26 0" stroke={c.sun} strokeWidth="5" fill="none" />
        <path d="M60 6 l-2 10 M66 8 l-3 9 M54 8 l-1 9" stroke={c.leaf} strokeWidth="3" strokeLinecap="round" />
      </g>
      <rect x="140" y="236" width="130" height="10" rx="5" fill="#8A5233" opacity=".8" />
    </>
  ),

  walk: (c) => (
    <>
      <rect width="400" height="300" fill={c.sky} />
      <Sun c={c} cx={66} cy={56} r={26} />
      <Cloud x={280} y={58} s={1.1} />
      <path d="M0 200 q80 -66 160 -10 q70 50 140 -6 q60 -48 100 6 l0 110 l-400 0z" fill={c.ground} opacity=".6" />
      <rect y="238" width="400" height="62" fill={c.sky2} />
      <path d="M40 300 q120 -46 330 -40" stroke={c.light} strokeWidth="14" fill="none" opacity=".8" strokeLinecap="round" />
      <Tree c={c} x={344} y={244} s={0.9} />
      <Tree c={c} x={44} y={250} s={0.7} />
      <Person x={130} y={140} s={1.0} pose="walk" skin={0} hair={3} long shirt={c.sun} legs={c.prop2} />
      <Person x={208} y={136} s={1.05} pose="walk" skin={3} hair={2} shirt={c.prop} legs={c.ground} />
    </>
  ),

  run: (c) => (
    <>
      <rect width="400" height="300" fill={c.sky} />
      <Sun c={c} cx={322} cy={60} r={30} />
      <rect y="220" width="400" height="80" fill={c.ground} opacity=".5" />
      <path d="M0 262 h400" stroke={c.light} strokeWidth="10" opacity=".7" />
      <Tree c={c} x={62} y={226} s={0.75} />
      <Tree c={c} x={342} y={230} s={0.6} />
      <Person x={110} y={140} s={1.05} pose="run" skin={2} hair={0} shirt={c.prop} legs={c.ground} />
      <Person x={216} y={150} s={0.9} pose="run" skin={0} hair={4} long shirt={c.sun} legs={c.prop2} />
    </>
  ),

  swim: (c) => (
    <>
      <rect width="400" height="300" fill={c.sky2} />
      <rect y="70" width="400" height="230" fill={c.ground} opacity=".55" />
      {[110, 160, 210, 260].map((y, i) => (
        <path key={i} d={`M0 ${y} q50 -12 100 0 q50 12 100 0 q50 -12 100 0 q50 12 100 0`} stroke={c.light} strokeWidth="5" fill="none" opacity={0.5 - i * 0.07} />
      ))}
      <ellipse cx="200" cy="168" rx="120" ry="38" fill={c.light} opacity=".28" />
      <circle cx="176" cy="150" r="20" fill={SKIN[1]} />
      <path d="M158 146 q0 -22 18 -22 q18 0 18 22 q-8 -8 -18 -8 q-10 0 -18 8z" fill={HAIR[0]} />
      <circle cx="171" cy="150" r="2" fill={INK} />
      <circle cx="183" cy="150" r="2" fill={INK} />
      <path d="M172 158 q5 4 10 0" stroke={INK} strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M196 166 q40 -18 66 -4" stroke={c.prop} strokeWidth="16" fill="none" strokeLinecap="round" />
      <path d="M160 176 q-38 6 -54 -8" stroke={c.prop} strokeWidth="16" fill="none" strokeLinecap="round" />
      <circle cx="268" cy="162" r="8" fill={SKIN[1]} />
      <circle cx="102" cy="166" r="8" fill={SKIN[1]} />
      <circle cx="318" cy="112" r="14" fill={c.sun} opacity=".85" />
      <circle cx="74" cy="104" r="9" fill={c.sun} opacity=".7" />
    </>
  ),

  discussion: (c) => (
    <>
      <rect width="400" height="300" fill={c.sky} />
      <rect x="28" y="30" width="110" height="82" rx="8" fill={c.sky2} />
      <rect x="28" y="30" width="110" height="82" rx="8" fill="none" stroke={c.ground} strokeWidth="5" />
      <Plant c={c} x={356} y={214} s={1.1} />
      <rect y="220" width="400" height="80" fill={c.sky2} />
      <ellipse cx="200" cy="246" rx="132" ry="30" fill="#A44F28" />
      <ellipse cx="200" cy="240" rx="132" ry="30" fill={c.sun} />
      <Person x={64} y={104} s={0.95} pose="sit" skin={0} hair={1} shirt={c.prop} legs={c.ground} />
      <Person x={166} y={96} s={1.0} pose="stand" skin={3} hair={2} long shirt={c.light} legs={c.ground} />
      <Person x={276} y={104} s={0.95} pose="sit" skin={1} hair={4} flip shirt={c.prop2} legs={c.ground} />
      <g opacity=".9">
        <rect x="150" y="34" width="72" height="42" rx="14" fill={c.light} />
        <path d="M168 76 l-2 16 l16 -14z" fill={c.light} />
        <circle cx="168" cy="55" r="4" fill={c.ground} />
        <circle cx="186" cy="55" r="4" fill={c.ground} />
        <circle cx="204" cy="55" r="4" fill={c.ground} />
      </g>
      <g opacity=".9">
        <rect x="248" y="58" width="58" height="34" rx="12" fill={c.prop} />
        <path d="M288 92 l4 14 l-16 -12z" fill={c.prop} />
      </g>
    </>
  ),

  community: (c) => (
    <>
      <rect width="400" height="300" fill={c.sky} />
      <Sun c={c} cx={342} cy={54} r={30} />
      <Cloud x={70} y={50} s={1.1} />
      <rect x="18" y="120" width="62" height="100" rx="8" fill={c.sky2} />
      <rect x="92" y="94" width="54" height="126" rx="8" fill={c.prop} opacity=".55" />
      <rect x="300" y="110" width="66" height="110" rx="8" fill={c.sky2} />
      <rect y="214" width="400" height="86" fill={c.sky2} />
      <Tree c={c} x={266} y={222} s={0.8} />
      <Person x={104} y={112} s={0.9} pose="stand" skin={0} hair={1} shirt={c.prop} legs={c.ground} />
      <Person x={168} y={104} s={1.0} pose="reach" skin={3} hair={2} long shirt={c.sun} legs={c.ground} />
      <Person x={234} y={116} s={0.85} pose="stand" skin={2} hair={4} shirt={c.light} legs={c.prop2} />
      <Person x={44} y={132} s={0.72} pose="walk" skin={1} hair={0} long shirt={c.prop2} legs={c.ground} />
    </>
  ),

  /* Member-story portraits: a bust, framed for the tall story card.
     A tall card only shows the middle ~200 units of the 400-wide box, so the bust is
     drawn centred on x=200 and runs off the bottom edge like a cropped photograph. */
  portrait: (c, v = 0) => {
    const skin = SKIN[v % SKIN.length]
    const hair = HAIR[v % HAIR.length]
    return (
      <>
        <rect width="400" height="300" fill={c.sky} />
        <circle cx="200" cy="148" r="104" fill={c.sky2} />
        <circle cx="96" cy="70" r="26" fill={c.sun} opacity=".8" />
        <path d="M112 300 q-10 -44 14 -60 q-2 26 10 60z" fill={c.leaf} opacity=".7" />
        <path d="M292 300 q12 -40 -12 -58 q4 26 -8 58z" fill={c.leaf} opacity=".5" />
        <path d="M132 300 q4 -66 68 -66 q64 0 68 66z" fill={c.prop} />
        <rect x="186" y="176" width="28" height="30" rx="12" fill={skin} />
        <circle cx="200" cy="150" r="44" fill={skin} />
        {v % 2 === 0 ? (
          <path d="M156 152 q-2 -48 44 -48 q46 0 44 48 l0 34 q-8 -20 -14 -28 l-60 0 q-6 8 -14 28z" fill={hair} />
        ) : (
          <path d="M157 148 q3 -46 43 -46 q40 0 43 46 q-17 -20 -43 -20 q-26 0 -43 20z" fill={hair} />
        )}
        <circle cx="186" cy="150" r="4" fill={INK} />
        <circle cx="214" cy="150" r="4" fill={INK} />
        <path d="M188 166 q12 10 24 0" stroke={INK} strokeWidth="4" fill="none" strokeLinecap="round" />
      </>
    )
  },

  /* Small square marks for the three concierge cards. */
  chat: (c) => (
    <>
      <rect width="400" height="300" fill={c.sky} />
      <rect x="60" y="66" width="200" height="110" rx="26" fill={c.light} />
      <path d="M96 176 l-6 44 l52 -38z" fill={c.light} />
      <circle cx="120" cy="120" r="10" fill={c.ground} />
      <circle cx="160" cy="120" r="10" fill={c.ground} />
      <circle cx="200" cy="120" r="10" fill={c.ground} />
      <rect x="182" y="150" width="150" height="86" rx="24" fill={c.prop} />
      <rect x="206" y="180" width="102" height="10" rx="5" fill={c.light} opacity=".85" />
      <rect x="206" y="202" width="66" height="10" rx="5" fill={c.light} opacity=".7" />
    </>
  ),

  call: (c) => (
    <>
      <rect width="400" height="300" fill={c.sky} />
      <circle cx="200" cy="150" r="98" fill={c.sky2} />
      <rect x="152" y="66" width="96" height="168" rx="22" fill={c.ground} />
      <rect x="164" y="84" width="72" height="120" rx="10" fill={c.light} />
      <circle cx="200" cy="218" r="8" fill={c.light} opacity=".8" />
      <circle cx="200" cy="140" r="26" fill={c.prop} />
      <path d="M190 128 q10 -6 20 0 l0 26 q-10 6 -20 0z" fill={c.light} />
      {[1, 2, 3].map((i) => (
        <path key={i} d={`M${262 + i * 14} ${150 - i * 18} a${i * 18} ${i * 18} 0 0 1 0 ${i * 36}`} stroke={c.sun} strokeWidth="7" fill="none" strokeLinecap="round" opacity={1 - i * 0.22} />
      ))}
    </>
  ),

  email: (c) => (
    <>
      <rect width="400" height="300" fill={c.sky} />
      <circle cx="120" cy="86" r="38" fill={c.sky2} />
      <rect x="76" y="96" width="248" height="152" rx="18" fill={c.light} />
      <path d="M76 112 l124 84 l124 -84" stroke={c.ground} strokeWidth="12" fill="none" strokeLinejoin="round" />
      <rect x="76" y="96" width="248" height="152" rx="18" fill="none" stroke={c.ground} strokeWidth="10" />
      <circle cx="318" cy="94" r="26" fill={c.prop} />
      <path d="M306 94 l8 8 l16 -18" stroke={c.light} strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
}

export const SCENE_NAMES = Object.keys(SCENES)

export default function Illustration({ name, scheme = 'mint', variant = 0, fit = 'slice', className, style, title }) {
  const draw = SCENES[name] || SCENES.community
  const c = SCHEMES[scheme] || SCHEMES.mint
  /* 'slice' crops like a photograph — right for tiles. 'meet' shows the whole scene and lets the
     scene's own sky colour run out to the edges — right for wide banners, which would otherwise
     magnify a 400-wide drawing to 1200 and show three enormous shapes. */
  return (
    <svg
      className={className}
      style={fit === 'meet' ? { background: c.sky, ...style } : style}
      viewBox="0 0 400 300"
      preserveAspectRatio={fit === 'meet' ? 'xMidYMid meet' : 'xMidYMid slice'}
      role={title ? 'img' : 'presentation'}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : 'true'}
    >
      {draw(c, variant)}
    </svg>
  )
}
