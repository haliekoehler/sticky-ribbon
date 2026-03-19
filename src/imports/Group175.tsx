import clsx from "clsx";
import svgPaths from "./svg-hnxac9wltf";
type RibbonHelperProps = {
  additionalClassNames?: string;
};

function RibbonHelper({ children, additionalClassNames = "" }: React.PropsWithChildren<RibbonHelperProps>) {
  return (
    <div className={clsx("flex-none", additionalClassNames)}>
      <p className="font-['Lato:Black',sans-serif] leading-[normal] not-italic relative text-[12px] text-white tracking-[0.6px] whitespace-nowrap">{children}</p>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute flex h-[93.86px] items-center justify-center left-[16px] top-[76px] w-[113.817px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[-22.89deg]">
          <div className="h-[60.505px] relative w-[98px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 98 60.5049">
              <ellipse cx="49" cy="30.2524" fill="var(--fill-0, #F36C21)" id="Ellipse 5" rx="49" ry="30.2524" />
            </svg>
          </div>
        </div>
      </div>
      <a className="absolute contents cursor-pointer left-0 top-0" data-name="Ribbon" href="https://codepen.io/manab_27/pen/poZXZe">
        <div className="absolute flex h-[96.092px] items-center justify-center left-0 top-0 w-[132.238px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="flex-none rotate-30">
            <div className="h-[34.199px] relative w-[132.951px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132.951 34.1649">
                <path d={svgPaths.p2dbef900} fill="url(#paint0_linear_1_19)" id="Rectangle 6" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_19" x1="0" x2="132.951" y1="17.0656" y2="17.0656">
                    <stop stopColor="#5F4CBC" />
                    <stop offset="1" stopColor="#212151" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[95.103px] items-center justify-center left-[2.36px] top-[53.12px] w-[130.724px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="-rotate-30 -scale-y-100 flex-none">
            <div className="h-[34px] relative w-[131.317px]">
              <div className="absolute inset-[0.43%_0.52%_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130.633 33.8549">
                  <path d={svgPaths.pd727900} fill="url(#paint0_linear_1_17)" id="Rectangle 7" />
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_17" x1="130.722" x2="0" y1="16.8549" y2="16.8549">
                      <stop stopColor="#5F4CBC" />
                      <stop offset="1" stopColor="#212151" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[51.559px] items-center justify-center left-[22.36px] top-[19.85px] w-[84.028px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
          <RibbonHelper additionalClassNames="rotate-[26.67deg]">{`CELEBRATING `}</RibbonHelper>
        </div>
        <div className="absolute flex h-[26.596px] items-center justify-center left-[50px] top-[87px] w-[34.9px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
          <RibbonHelper additionalClassNames="rotate-[-25.96deg]">YOU!</RibbonHelper>
        </div>
      </a>
      <div className="absolute flex h-[39.354px] items-center justify-center left-[49px] top-[108px] w-[56.893px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[-25.95deg]">
          <p className="decoration-solid font-['Lato:Black',sans-serif] leading-[normal] not-italic relative text-[14px] text-white tracking-[0.7px] underline whitespace-nowrap">Join Us!</p>
        </div>
      </div>
    </div>
  );
}