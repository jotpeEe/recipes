import { cn } from '@/lib/utils';

export const GitHub: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={cn('fill-current', className)}
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity={0.7}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.82 16.4464L20.8218 16.4425C21.3903 15.2548 21.5 13.9274 21.5 12.7759C21.5 11.3027 21.1355 9.84806 20.2426 8.61288C20.3649 8.11865 20.4269 7.60925 20.4269 7.09781C20.4269 6.16093 20.1975 5.65041 19.8441 4.93343L19.6305 4.5H19.1549C18.3391 4.5 17.6208 4.57861 16.9333 4.80259C16.3491 4.99289 15.816 5.27864 15.2799 5.67065C14.43 5.4914 13.561 5.40906 12.7023 5.40906C11.7452 5.40906 10.7849 5.49887 9.84019 5.69886C9.29917 5.30243 8.7628 5.01017 8.17433 4.8142C7.48188 4.58361 6.75811 4.5 5.93086 4.5H5.45299L5.24016 4.93631C4.89303 5.64796 4.65886 6.15949 4.65886 7.09781C4.65886 7.60746 4.7183 8.12406 4.84218 8.62896C3.94782 9.83596 3.5 11.2746 3.5 12.7759C3.5 13.9724 3.70442 15.2956 4.27496 16.4512L4.27634 16.454C5.10261 18.1114 6.65509 18.852 8.20158 19.1904C9.6334 19.5038 11.196 19.5015 12.4314 19.4997L12.6989 19.4995L12.8931 19.4996C14.1178 19.5005 15.6549 19.5017 17.0567 19.1766C18.5493 18.8303 20.0264 18.0821 20.82 16.4464ZM19.6554 7.09781C19.6554 7.67122 19.5663 8.24113 19.3914 8.78306C20.3343 9.91589 20.7286 11.3109 20.7286 12.7759C20.7286 13.8913 20.6189 15.073 20.1286 16.0975C19.3818 17.6366 17.8844 18.2704 16.2603 18.5312C16.5829 18.4373 16.8953 18.3188 17.1894 18.1699C17.784 17.8686 18.3222 17.4336 18.7078 16.8129C19.0943 16.1908 19.2954 15.4337 19.2954 14.5419C19.2954 13.6222 19.0219 12.7144 18.4605 12.0213C17.8868 11.3131 17.04 10.8672 16.004 10.8672C15.4293 10.8672 14.8619 10.9527 14.3498 11.0298L14.3497 11.0298C14.2227 11.049 14.099 11.0676 13.9794 11.0843L13.9663 11.0862C13.5025 11.1592 13.032 11.1889 12.5377 11.1889C12.0472 11.1889 11.5764 11.1593 11.1084 11.0861L11.0977 11.0845C10.9861 11.0687 10.8704 11.0512 10.7514 11.0331L10.7511 11.0331C10.2359 10.955 9.65741 10.8672 9.07144 10.8672C8.03545 10.8672 7.18864 11.3131 6.61497 12.0213C6.05359 12.7144 5.78001 13.6222 5.78001 14.5419C5.78001 15.4332 5.98155 16.1899 6.36815 16.8117C6.75386 17.432 7.29199 17.867 7.88617 18.1684C8.12887 18.2915 8.38404 18.3938 8.64702 18.4787C7.09349 18.1885 5.68348 17.5407 4.964 16.0975C4.46343 15.0835 4.27143 13.8913 4.27143 12.7759C4.27143 11.3109 4.748 9.92638 5.69429 8.80404C5.516 8.25161 5.43029 7.67122 5.43029 7.09781C5.43029 6.34609 5.59829 5.96848 5.93086 5.28669C7.484 5.28669 8.47829 5.60136 9.66114 6.54538C10.6554 6.30413 11.6771 6.19574 12.7023 6.19574C13.628 6.19574 14.5606 6.29714 15.4589 6.51741C16.6246 5.58388 17.6189 5.28669 19.1549 5.28669C19.4909 5.96848 19.6554 6.34609 19.6554 7.09781ZM14.4899 11.8042L14.4897 11.8043L14.4897 11.8043C14.3555 11.8244 14.2204 11.8447 14.084 11.8637C13.5732 11.9441 13.0623 11.9756 12.5377 11.9756C12.0166 11.9756 11.5057 11.9441 10.9914 11.8637C10.8652 11.8458 10.7394 11.8268 10.6139 11.8079C10.1022 11.7306 9.59457 11.6539 9.07144 11.6539C7.46687 11.6539 6.55144 13.007 6.55144 14.5419C6.55144 17.6117 9.30801 18.0838 11.708 18.0838H13.3606C15.7709 18.0838 18.524 17.6152 18.524 14.5419C18.524 13.007 17.6086 11.6539 16.004 11.6539C15.4918 11.6539 14.9966 11.7282 14.4899 11.8042ZM9.39403 16.4678C10.2786 16.4678 10.6523 15.272 10.6523 14.5413C10.6523 13.8105 10.2786 12.6147 9.39403 12.6147C8.50946 12.6147 8.13574 13.8105 8.13574 14.5413C8.13574 15.272 8.50946 16.4678 9.39403 16.4678ZM15.6919 12.6147C14.8073 12.6147 14.4336 13.8105 14.4336 14.5412C14.4336 15.272 14.8073 16.4677 15.6919 16.4677C16.5765 16.4677 16.9502 15.272 16.9502 14.5412C16.9502 13.8105 16.5765 12.6147 15.6919 12.6147Z"
    />
  </svg>
);

export const Google: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={cn('fill-current', className)}
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 12.3446C21 11.6734 20.9456 11.1836 20.8277 10.6757H13.1633V13.7052H17.6621C17.5715 14.458 17.0817 15.5918 15.9932 16.3537L15.978 16.4551L18.4013 18.3324L18.5692 18.3492C20.1111 16.9251 21 14.8299 21 12.3446Z"
      fill="url(#paint0_linear_8026_76)"
      fillOpacity="0.4"
    />
    <path
      d="M17.6621 13.3302H13.5383V11.0507H20.5226C20.5919 11.4315 20.625 11.8288 20.625 12.3446C20.625 14.6475 19.8344 16.5772 18.4782 17.9176L16.5329 16.4106C17.4932 15.5971 17.9423 14.5153 18.0345 13.75L18.085 13.3302H17.6621Z"
      stroke="white"
      strokeOpacity="0.2"
      strokeWidth="0.75"
    />
    <path
      d="M13.1632 20.3265C15.3672 20.3265 17.2175 19.6009 18.5691 18.3492L15.9931 16.3537C15.3038 16.8344 14.3786 17.17 13.1632 17.17C11.0045 17.17 9.17227 15.746 8.51915 13.7778L8.42341 13.7859L5.90359 15.736L5.87064 15.8276C7.21303 18.4943 9.9704 20.3265 13.1632 20.3265Z"
      fill="url(#paint1_linear_8026_76)"
      fillOpacity="0.4"
    />
    <path
      d="M15.9744 16.8135L17.9777 18.3654C16.7365 19.3691 15.1014 19.9515 13.1632 19.9515C10.2088 19.9515 7.64442 18.3072 6.32396 15.8849L8.32962 14.3327C9.14318 16.2174 10.9979 17.545 13.1632 17.545C14.3232 17.545 15.25 17.2556 15.9744 16.8135Z"
      stroke="white"
      strokeOpacity="0.2"
      strokeWidth="0.75"
    />
    <path
      d="M8.51924 13.7778C8.34691 13.2699 8.24717 12.7256 8.24717 12.1633C8.24717 11.6009 8.34691 11.0567 8.51017 10.5488L8.50561 10.4406L5.9542 8.45917L5.87073 8.49887C5.31746 9.60546 5 10.8481 5 12.1633C5 13.4785 5.31746 14.7211 5.87073 15.8277L8.51924 13.7778Z"
      fill="url(#paint2_linear_8026_76)"
      fillOpacity="0.4"
    />
    <path
      d="M7.87217 12.1633C7.87217 12.6754 7.94881 13.1718 8.08351 13.6409L6.01264 15.2436C5.60439 14.2951 5.375 13.2552 5.375 12.1633C5.375 11.0416 5.61707 9.9748 6.0464 9.00557L8.1018 10.6018C7.95875 11.0937 7.87217 11.619 7.87217 12.1633Z"
      stroke="white"
      strokeOpacity="0.2"
      strokeWidth="0.75"
    />
    <path
      d="M13.1632 7.15644C14.696 7.15644 15.73 7.81857 16.3196 8.37189L18.6235 6.12245C17.2085 4.80726 15.3672 4 13.1632 4C9.9704 4 7.21303 5.83218 5.87064 8.49883L8.51008 10.5487C9.17227 8.58049 11.0045 7.15644 13.1632 7.15644Z"
      fill="url(#paint3_linear_8026_76)"
      fillOpacity="0.4"
    />
    <path
      d="M16.3048 7.86229C15.6379 7.32472 14.6014 6.78144 13.1632 6.78144C11.016 6.78144 9.17515 8.08673 8.34394 9.94489L6.34919 8.39568C7.6769 5.99855 10.2275 4.375 13.1632 4.375C15.1182 4.375 16.7677 5.03782 18.0729 6.13591L16.3048 7.86229Z"
      stroke="white"
      strokeOpacity="0.2"
      strokeWidth="0.75"
    />
  </svg>
);

export const Send: React.FC<React.HTMLAttributes<SVGSVGElement>> = props => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="24" height="24" rx="7" className="fill-current" />
    <path
      d="M13 7.99902L17 11.999L13 15.999"
      className="fill-current stroke-white stroke-2 dark:stroke-black"
    />
    <path d="M17 12L7 12" className="stroke-white stroke-2 dark:stroke-black" />
  </svg>
);

export const TopLeftShine: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    width="659"
    height="537"
    viewBox="0 0 659 537"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g style={{ mixBlendMode: 'color-dodge' }} filter="url(#filter1_f_8026_43)">
      <ellipse
        cx="262.378"
        cy="-50.076"
        rx="26.5"
        ry="293.25"
        transform="rotate(5 262.378 -50.076)"
        fill="url(#paint1_linear_8026_43)"
        fillOpacity="0.5"
      />
    </g>
    <g style={{ mixBlendMode: 'lighten' }} filter="url(#filter2_f_8026_43)">
      <ellipse
        cx="359.106"
        cy="29.9931"
        rx="22.3794"
        ry="381.284"
        transform="rotate(-10 359.106 29.9931)"
        fill="url(#paint2_linear_8026_43)"
        fillOpacity="0.5"
      />
    </g>
    <g style={{ mixBlendMode: 'lighten' }} filter="url(#filter3_f_8026_43)">
      <ellipse
        cx="324.269"
        cy="-167.576"
        rx="22.3794"
        ry="180.667"
        transform="rotate(-10 324.269 -167.576)"
        fill="url(#paint3_linear_8026_43)"
        fillOpacity="0.5"
      />
    </g>
    <g style={{ mixBlendMode: 'lighten' }} filter="url(#filter4_f_8026_43)">
      <ellipse
        cx="168.788"
        cy="67.9388"
        rx="22.25"
        ry="381.5"
        transform="rotate(5 168.788 67.9388)"
        fill="url(#paint4_linear_8026_43)"
        fillOpacity="0.5"
      />
    </g>
    <g style={{ mixBlendMode: 'lighten' }} filter="url(#filter5_f_8026_43)">
      <ellipse
        cx="188.107"
        cy="-155.729"
        rx="321.5"
        ry="187.5"
        transform="rotate(5 188.107 -155.729)"
        fill="url(#paint5_linear_8026_43)"
        fillOpacity="0.5"
      />
    </g>
    <g style={{ mixBlendMode: 'lighten' }}>
      <ellipse
        cx="196.124"
        cy="-247.379"
        rx="160.5"
        ry="95.5"
        transform="rotate(5 196.124 -247.379)"
        fill="url(#paint6_linear_8026_43)"
        fillOpacity="0.5"
      />
    </g>
    <g style={{ mixBlendMode: 'lighten' }}>
      <ellipse
        cx="195.494"
        cy="-240.156"
        rx="135"
        ry="80.25"
        transform="rotate(5 195.494 -240.156)"
        fill="url(#paint7_linear_8026_43)"
        fillOpacity="0.5"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_8026_43"
        x="-39.0848"
        y="-403.13"
        width="388.448"
        height="729.588"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur stdDeviation="44.5" result="effect1_foregroundBlur_8026_43" />
      </filter>
      <filter
        id="filter1_f_8026_43"
        x="136.633"
        y="-431.219"
        width="251.489"
        height="762.287"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur stdDeviation="44.5" result="effect1_foregroundBlur_8026_43" />
      </filter>
      <filter
        id="filter2_f_8026_43"
        x="200.306"
        y="-434.518"
        width="317.6"
        height="929.023"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur stdDeviation="44.5" result="effect1_foregroundBlur_8026_43" />
      </filter>
      <filter
        id="filter3_f_8026_43"
        x="196.926"
        y="-434.542"
        width="254.687"
        height="533.932"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur stdDeviation="44.5" result="effect1_foregroundBlur_8026_43" />
      </filter>
      <filter
        id="filter4_f_8026_43"
        x="39.8235"
        y="-401.115"
        width="257.93"
        height="938.107"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur stdDeviation="44.5" result="effect1_foregroundBlur_8026_43" />
      </filter>
      <filter
        id="filter5_f_8026_43"
        x="-282.594"
        y="-494.631"
        width="941.402"
        height="677.805"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_8026_43" />
      </filter>
      <linearGradient
        id="paint0_linear_8026_43"
        x1="155.139"
        y1="-331.681"
        x2="155.139"
        y2="255.01"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_8026_43"
        x1="262.378"
        y1="-343.326"
        x2="262.378"
        y2="243.174"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_8026_43"
        x1="359.106"
        y1="-351.29"
        x2="359.106"
        y2="411.277"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_8026_43"
        x1="324.269"
        y1="-348.243"
        x2="324.269"
        y2="13.0914"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_8026_43"
        x1="168.788"
        y1="-313.561"
        x2="168.788"
        y2="449.439"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_8026_43"
        x1="188.107"
        y1="-343.229"
        x2="188.107"
        y2="31.7714"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_8026_43"
        x1="196.124"
        y1="-342.879"
        x2="196.124"
        y2="-151.879"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint7_linear_8026_43"
        x1="195.494"
        y1="-320.406"
        x2="195.494"
        y2="-159.906"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);
