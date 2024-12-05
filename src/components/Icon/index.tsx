export default function Icon({name, width, height, color}: {
  name: string;
  width?: string | number;
  height?: string | number;
  color?: string;
}) {
  const w = width || 24
  const h = height || 24

  const renderIcon = () => {
    switch (name) {
      case 'chevron-down':
        return (
          <div style={{width: w, height: h, aspectRatio: 1}}>
            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke={color || "currentColor"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        )
      case 'playstore':
        return (
          <div style={{width: w, height: h, aspectRatio: 1}}>
            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3.40072C3 2.9194 3.13283 2.54772 3.35755 2.30823C3.2101 2.46537 3.10221 2.67951 3.04545 2.9441C3.0157 3.08276 3 3.23522 3 3.40072Z" fill="url(#paint0_linear_654_17927)"/>
              <path d="M3.75 3.65358L12.0377 11.9992L3.75 20.3442V3.65358Z" fill="url(#paint1_linear_654_17927)"/>
              <path d="M20.0804 11.9999C20.0804 12.0433 20.0504 12.2419 19.6484 12.4723L16.2978 14.3891L13.9258 11.9995L16.2977 9.61121L19.6489 11.5284C20.0506 11.7583 20.0804 11.9566 20.0804 11.9999Z" fill="url(#paint2_linear_654_17927)"/>
              <g filter="url(#filter0_i_654_17927)">
                <path d="M5.57227 20.5269L12.9833 13.0641L15.024 15.1189L5.57227 20.5269Z" fill="url(#paint3_linear_654_17927)"/>
              </g>
              <path d="M12.9838 10.936L15.024 8.88069L5.57227 3.47327L12.9838 10.936Z" fill="url(#paint4_linear_654_17927)"/>
              <defs>
                <filter id="filter0_i_654_17927" x="5.57227" y="13.0641" width="9.45215" height="7.46289" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="-0.18"/>
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
                  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_654_17927"/>
                </filter>
                <linearGradient id="paint0_linear_654_17927" x1="12.9819" y1="2.25145" x2="2.90394" y2="2.30511" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1AF7A9"/>
                  <stop offset="1" stopColor="#08CDDA"/>
                </linearGradient>
                <linearGradient id="paint1_linear_654_17927" x1="12.9819" y1="2.25145" x2="2.90394" y2="2.30511" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1AF7A9"/>
                  <stop offset="1" stopColor="#08CDDA"/>
                </linearGradient>
                <linearGradient id="paint2_linear_654_17927" x1="20.0804" y1="9.6112" x2="13.8673" y2="9.68845" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1AF7A9"/>
                  <stop offset="1" stopColor="#08CDDA"/>
                </linearGradient>
                <linearGradient id="paint3_linear_654_17927" x1="15.024" y1="13.0641" x2="5.48246" y2="13.1807" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1AF7A9"/>
                  <stop offset="1" stopColor="#08CDDA"/>
                </linearGradient>
                <linearGradient id="paint4_linear_654_17927" x1="15.024" y1="3.47326" x2="5.48246" y2="3.5899" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1AF7A9"/>
                  <stop offset="1" stopColor="#08CDDA"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        )
      case 'appstore':
        return (
          <div style={{width: w, height: h, aspectRatio: 1}}>
            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.9252 12.6265L16.9252 12.6265L16.9252 12.6367C16.9271 14.4338 17.8712 16.1217 19.3617 17.0444C19.0933 17.7691 18.7382 18.4567 18.3044 19.091L18.2992 19.0987L18.2941 19.1065C17.8909 19.7285 17.5261 20.264 17.1235 20.6517C16.7355 21.0254 16.368 21.2073 15.9568 21.2142L15.9515 21.2143C15.4919 21.2252 15.1998 21.0983 14.7443 20.8983C14.2691 20.6897 13.6726 20.4324 12.7711 20.4324C11.8738 20.4324 11.2742 20.6686 10.7829 20.8803C10.755 20.8923 10.7277 20.9041 10.701 20.9156C10.2693 21.1022 9.9811 21.2267 9.55274 21.2454C9.22052 21.2575 8.85485 21.0906 8.41726 20.6671C7.98023 20.2441 7.57403 19.6655 7.15648 19.0499C6.39057 17.8949 5.69688 16.2437 5.40266 14.5235C5.10712 12.7955 5.22909 11.0907 5.97582 9.75752L5.9759 9.75757L5.98152 9.74715C6.65846 8.49273 7.95266 7.6848 9.32213 7.63741C9.78243 7.62873 10.2623 7.79017 10.8068 8.01193C10.8696 8.03747 10.935 8.06458 11.0019 8.09232C11.2023 8.17532 11.4162 8.26394 11.6118 8.33319C11.8724 8.42543 12.1898 8.51767 12.5157 8.51767C12.8539 8.51767 13.1994 8.40375 13.4692 8.30336C13.6163 8.2486 13.8042 8.17197 13.9878 8.09709C14.1228 8.04204 14.2555 7.98794 14.368 7.94417C14.9963 7.69956 15.5869 7.53031 16.1422 7.59041L16.1705 7.59348L16.199 7.5944C17.1231 7.62421 18.0295 8.02943 18.6994 8.69739C17.6028 9.68213 16.944 11.122 16.9252 12.6265ZM14.6516 4.74233C14.2698 5.23199 13.7371 5.58301 13.1583 5.74931C13.2651 5.10843 13.5417 4.49945 13.956 4.01329L13.9562 4.01306C14.3651 3.53278 14.8795 3.17295 15.448 2.95822C15.3428 3.60764 15.0726 4.22102 14.6597 4.73213L14.6596 4.73206L14.6516 4.74233Z" fill="url(#paint0_linear_612_24090)" stroke="url(#paint1_linear_612_24090)" strokeWidth="1.50802"/>
              <defs>
              <linearGradient id="paint0_linear_612_24090" x1="20.2792" y1="1.99998" x2="4.34862" y2="2.12129" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1AF7A9"/>
              <stop offset="1" stopColor="#08CDDA"/>
              </linearGradient>
              <linearGradient id="paint1_linear_612_24090" x1="20.2792" y1="1.99998" x2="4.34862" y2="2.12129" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1AF7A9"/>
              <stop offset="1" stopColor="#08CDDA"/>
              </linearGradient>
              </defs>
            </svg>
          </div>
        )
      case 'logo-horizontal':
        return (
          <svg width="245" height="88" viewBox="0 0 245 88" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M43.884 73.5615C64.7884 73.5615 81.7347 56.6152 81.7347 35.7108C81.7347 27.0336 78.8149 19.0384 73.9042 12.6541L63.6998 22.784C66.1287 26.4997 67.5407 30.9403 67.5407 35.7108C67.5407 48.776 56.9492 59.3675 43.884 59.3675C30.8187 59.3675 20.2272 48.776 20.2272 35.7108C20.2272 30.7418 21.7592 26.1307 24.3766 22.3239L14.2008 12.2224C9.08692 18.6762 6.0332 26.8369 6.0332 35.7108C6.0332 56.6152 22.9796 73.5615 43.884 73.5615Z" fill="url(#paint0_linear_742_14201)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M43.8836 54.8762C54.4185 54.8762 62.9587 46.336 62.9587 35.8012C62.9587 32.3403 62.037 29.0946 60.4256 26.2964L55.0547 31.6281C55.5401 32.9269 55.8055 34.333 55.8055 35.8012C55.8055 42.3855 50.4679 47.7231 43.8836 47.7231C37.2993 47.7231 31.9617 42.3855 31.9617 35.8012C31.9617 34.2273 32.2667 32.7247 32.8208 31.3491L27.4848 26.052C25.785 28.905 24.8086 32.2391 24.8086 35.8012C24.8086 46.336 33.3488 54.8762 43.8836 54.8762Z" fill="url(#paint1_linear_742_14201)"/>
            <circle cx="43.9843" cy="37.5226" r="4.21672" fill="url(#paint2_linear_742_14201)"/>
            <path d="M115.576 60.66C113.127 60.66 110.963 60.154 109.086 59.142C107.209 58.13 105.735 56.7147 104.664 54.896C103.608 53.0627 103.08 50.914 103.08 48.45V28.342L107.04 28.32V48.12C107.04 49.616 107.289 50.9213 107.788 52.036C108.301 53.136 108.976 54.0527 109.812 54.786C110.648 55.5193 111.565 56.0693 112.562 56.436C113.574 56.788 114.579 56.964 115.576 56.964C116.588 56.964 117.6 56.7807 118.612 56.414C119.624 56.0473 120.541 55.5047 121.362 54.786C122.198 54.0527 122.865 53.1287 123.364 52.014C123.863 50.8993 124.112 49.6013 124.112 48.12V28.32H128.072V48.45C128.072 50.8993 127.537 53.0407 126.466 54.874C125.41 56.7073 123.943 58.13 122.066 59.142C120.189 60.154 118.025 60.66 115.576 60.66ZM133.352 59.978L133.374 56.458L147.432 43.808C148.606 42.752 149.39 41.7547 149.786 40.816C150.197 39.8627 150.402 38.8873 150.402 37.89C150.402 36.6727 150.124 35.5727 149.566 34.59C149.009 33.6073 148.246 32.83 147.278 32.258C146.325 31.686 145.24 31.4 144.022 31.4C142.761 31.4 141.639 31.7007 140.656 32.302C139.674 32.8887 138.896 33.6733 138.324 34.656C137.767 35.6387 137.496 36.7093 137.51 37.868H133.506C133.506 35.8733 133.968 34.1133 134.892 32.588C135.816 31.048 137.07 29.8453 138.654 28.98C140.253 28.1 142.064 27.66 144.088 27.66C146.054 27.66 147.814 28.1147 149.368 29.024C150.923 29.9187 152.148 31.1433 153.042 32.698C153.952 34.238 154.406 35.9833 154.406 37.934C154.406 39.3127 154.23 40.508 153.878 41.52C153.541 42.532 153.013 43.4707 152.294 44.336C151.576 45.1867 150.674 46.096 149.588 47.064L137.906 57.558L137.4 56.238H154.406V59.978H133.352ZM159.67 60V28.32H169.438C169.761 28.32 170.325 28.3273 171.132 28.342C171.939 28.3567 172.709 28.4153 173.442 28.518C175.891 28.8407 177.937 29.7353 179.58 31.202C181.237 32.654 182.484 34.502 183.32 36.746C184.156 38.99 184.574 41.4613 184.574 44.16C184.574 46.8587 184.156 49.33 183.32 51.574C182.484 53.818 181.237 55.6733 179.58 57.14C177.937 58.592 175.891 59.4793 173.442 59.802C172.709 59.89 171.931 59.9487 171.11 59.978C170.303 59.9927 169.746 60 169.438 60H159.67ZM163.696 56.26H169.438C169.995 56.26 170.619 56.2453 171.308 56.216C171.997 56.172 172.599 56.106 173.112 56.018C174.843 55.6953 176.243 54.9693 177.314 53.84C178.385 52.7107 179.169 51.3027 179.668 49.616C180.167 47.9293 180.416 46.1107 180.416 44.16C180.416 42.1653 180.159 40.3247 179.646 38.638C179.147 36.9513 178.363 35.5507 177.292 34.436C176.221 33.3213 174.828 32.61 173.112 32.302C172.599 32.1993 171.99 32.1333 171.286 32.104C170.582 32.0747 169.966 32.06 169.438 32.06H163.696V56.26ZM189.619 60V28.32H202.137C202.445 28.32 202.812 28.3347 203.237 28.364C203.662 28.3787 204.073 28.4227 204.469 28.496C206.185 28.76 207.622 29.3467 208.781 30.256C209.954 31.1653 210.834 32.3167 211.421 33.71C212.008 35.0887 212.301 36.6213 212.301 38.308C212.301 39.98 212 41.5127 211.399 42.906C210.812 44.2847 209.932 45.436 208.759 46.36C207.6 47.2693 206.17 47.856 204.469 48.12C204.073 48.1787 203.662 48.2227 203.237 48.252C202.812 48.2813 202.445 48.296 202.137 48.296H193.535V60H189.619ZM193.535 44.578H202.005C202.284 44.578 202.599 44.5633 202.951 44.534C203.318 44.5047 203.662 44.4533 203.985 44.38C204.997 44.1453 205.818 43.72 206.449 43.104C207.094 42.4733 207.564 41.74 207.857 40.904C208.15 40.0533 208.297 39.188 208.297 38.308C208.297 37.428 208.15 36.57 207.857 35.734C207.564 34.8833 207.094 34.1427 206.449 33.512C205.818 32.8813 204.997 32.456 203.985 32.236C203.662 32.148 203.318 32.0967 202.951 32.082C202.599 32.0527 202.284 32.038 202.005 32.038H193.535V44.578ZM216.689 60V28.32H220.649L237.171 53.07V28.32H241.131V60H237.171L220.649 35.228V60H216.689Z" fill="#DEDEDE"/>
            <defs>
              <linearGradient id="paint0_linear_742_14201" x1="81.7347" y1="73.5616" x2="5.31336" y2="72.6512" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1AF7A9"/>
                <stop offset="1" stopColor="#08CDDA"/>
              </linearGradient>
              <linearGradient id="paint1_linear_742_14201" x1="62.9587" y1="54.8763" x2="24.4466" y2="54.3843" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1AF7A9"/>
                <stop offset="1" stopColor="#08CDDA"/>
              </linearGradient>
              <linearGradient id="paint2_linear_742_14201" x1="48.201" y1="33.3059" x2="39.687" y2="33.3881" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1AF7A9"/>
                <stop offset="1" stopColor="#08CDDA"/>
              </linearGradient>
            </defs>
          </svg>
        )
      case 'menu':
				return (
					<div style={{width: w, height: h, aspectRatio: 1}}>
						<svg
							viewBox="0 0 700 1000"
							fill={color || "currentColor"}
							height="100%"
							width="100%"
						>
							<path d="M650 450c14.667 0 26.667 5 36 15 9.333 10 14 21.667 14 35 0 13.333-5 25-15 35s-21.667 15-35 15H50c-13.333 0-25-5-35-15S0 513.333 0 500c0-13.333 4.667-25 14-35s21.333-15 36-15h600M50 350c-13.333 0-25-5-35-15S0 313.333 0 300c0-13.333 4.667-25 14-35s21.333-15 36-15h600c14.667 0 26.667 5 36 15 9.333 10 14 21.667 14 35 0 13.333-5 25-15 35s-21.667 15-35 15H50m600 300c14.667 0 26.667 5 36 15 9.333 10 14 21.667 14 35 0 13.333-5 25-15 35s-21.667 15-35 15H50c-13.333 0-25-5-35-15S0 713.333 0 700c0-13.333 4.667-25 14-35s21.333-15 36-15h600" />
						</svg>
					</div>
				)
        case 'close':
          return (
            <div style={{width: w, height: h, aspectRatio: 1}}>
              <svg
                viewBox="0 0 512 512"
                fill={color || "currentColor"}
                height="100%"
                width="100%"
              >
                <path
                  fill="none"
                  stroke={color || "currentColor"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={32}
                  d="M368 368L144 144M368 144L144 368"
                />
              </svg>
            </div>
          )
        case 'upRight':
          return (
            <div style={{width: w, height: h, aspectRatio: 1}}>
              <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.66699 11.3332L11.3337 4.6665" stroke="#DEDEDE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.66699 4.6665H11.3337V11.3332" stroke="#DEDEDE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
          )
      default:
        return null
    }
  }

  return renderIcon()
}