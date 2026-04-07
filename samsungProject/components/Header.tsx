import {useState, useRef} from "react";
import {menuData} from "../data/menuData";

type HeaderProps = {
  wrapBase: string;
};

const innerUlTitle = " !text-gray-600 pb-1 text-[15px]";
const innerLi = " pb-2 font-normal w-max hover:invert-50";
const innerBox =
  "flex gap-1 py-3  items-center rounded-xl bg-gray-100 w-[210px] hover:bg-gray-200! ";
const innerMenu =
  "flex bg-white absolute  w-screen  justify-between left-0 pt-15 px-10 pb-10 top-[90%] opacity-0 origin-top duration-100 ease-in scale-y-0";

export default function Header({wrapBase}: HeaderProps) {
  const [openHeader, setopenHeader] = useState(false);
  const [innerMenuHover, setinnerMenuHover] = useState(0);
  const [bottomMenuHover, setbottomMenuHover] = useState(0);
  return (
    <header
      className={`relative font-[NotoSans]  duration-200 ease-in ${openHeader ? "on" : ""}`}
      onMouseLeave={() => {
        setopenHeader(false);
        setinnerMenuHover(0);
        setbottomMenuHover(0);
      }}>
      <div className={`wrap ${wrapBase} px-5 py-2.5`}>
        <ul className="headerTop flex gap-2.5 justify-end gap-y-2 py-1.25 text-white font-medium text-[0.8rem]">
          <li
            onMouseEnter={() => {
              setopenHeader(true);
              setinnerMenuHover(1);
            }}>
            <a href="#" className="h-full w-full flex items-center p-1 ">
              고객지원
            </a>
            <div
              className={`${innerMenu} innerMenu ${innerMenuHover === 1 ? "on" : ""}`}>
              <ul className="pr-50 w-200px">
                <li className={innerUlTitle}>제품지원</li>
                <li className={innerLi}>
                  <a href="#">무엇을 도와드릴까요?</a>
                </li>
                <li className={innerLi}>
                  <a href="#">고객서비스 알림</a>
                </li>
              </ul>
              <ul className="pr-30 w-200px ">
                <li className={innerUlTitle}>서비스</li>
                <li className={innerLi}>
                  <a href="#" className="w-full flex gap-0.5 hover:invert-50 ">
                    전화상담 예약
                    <img
                      className="w-3 top-0.5 aspect-square  "
                      src="./images/icon-new-window-black.svg"
                      alt="new-window "
                    />
                  </a>
                </li>
                <li className={innerLi}>
                  <a href="#" className="w-full flex gap-0.5 hover:invert-50 ">
                    출장 서비스 예약
                    <img
                      className="w-3  top-0.5 aspect-square invert "
                      src="./images/icon-new-window-black.svg"
                      alt="new-window "
                    />
                  </a>
                </li>
                <li className={innerLi}>
                  <a href="#">갤럭시 수리모드</a>
                </li>
                <li className={innerLi}>
                  <a href="#">삼성케어플러스 모바일/PC</a>
                </li>
                <li className={innerLi}>
                  <a href="#">삼성케어플러스 가전/TV</a>
                </li>
                <li className={innerLi}>
                  <a href="#">오늘보장 & 시간 맞춤 설치 서비스</a>
                </li>
              </ul>
              <ul className="pr-40">
                <li className={innerUlTitle}>제휴 문의</li>
                <li className={innerLi}>
                  <a href="#">임직원 복지몰 개설 문의</a>
                </li>
              </ul>
              <div className="grid grid-rows-2  grid-cols-2 text-base gap-4.5 pl-5 box-border border-l border-[#e2e2e2]">
                <a href="#" className={innerBox}>
                  <img
                    src="../images/headerTop/headerTopImg_1.png"
                    alt="headerTopImg_1"
                    className="w-15 h-auto block"
                  />
                  <p>워런티</p>
                </a>
                <a href="#" className={innerBox}>
                  <img
                    src="../images/headerTop/headerTopImg_2.png"
                    alt="headerTopImg_1"
                    className="w-15 h-auto block"
                  />
                  <p>메뉴얼&다운로드</p>
                </a>
                <a href="#" className={innerBox}>
                  <img
                    src="../images/headerTop/headerTopImg_3.png"
                    alt="headerTopImg_1"
                    className="w-15 h-auto block"
                  />
                  <p>서비스센터 찾기</p>
                </a>
                <a href="#" className={innerBox}>
                  <img
                    src="../images/headerTop/headerTopImg_4.png"
                    alt="headerTopImg_1"
                    className="w-15 h-auto block"
                  />
                  <p>삼성닷컴 FAQ</p>
                </a>
              </div>
            </div>
          </li>
          <li
            onMouseEnter={() => {
              setopenHeader(false);
              setinnerMenuHover(0);
            }}>
            <a href="#" className="h-full w-full flex gap-0.5  leading-[2.1]">
              비즈니스
              <img
                className="w-3  top-0.5 aspect-square invert"
                src="./images/icon-new-window-black.svg"
                alt="new-window "
              />
            </a>
          </li>
          <li
            onMouseEnter={() => {
              setopenHeader(false);
              setinnerMenuHover(0);
            }}>
            <a href="#" className="h-full w-full flex gap-0.5 leading-[2.1]">
              사업자몰
              <img
                className="w-3  top-0.5 aspect-square invert "
                src="./images/icon-new-window-black.svg"
                alt="new-window "
              />
            </a>
          </li>
          <li
            onMouseEnter={() => {
              setopenHeader(true);
              setinnerMenuHover(2);
            }}>
            <a
              href="#"
              className="h-full w-full flex items-center p-1 leading-2.1">
              삼성스토어
            </a>
            <div
              className={`${innerMenu} innerMenu ${innerMenuHover === 2 ? "on" : ""}`}>
              <ul className="pr-50 w-200px">
                <li className={innerUlTitle}>안내</li>
                <li className={innerLi}>
                  <a href="#">삼성스토어</a>
                </li>
                <li className={innerLi}>
                  <a href="#">신규 오픈 스토어</a>
                </li>
                <li className={innerLi}>
                  <a href="#">삼성 강남</a>
                </li>
              </ul>
              <ul className="pr-40 w-200px ">
                <li className={innerUlTitle}>혜택</li>
                <li className={innerLi}>
                  <a href="#" className="w-full flex gap-0.5 hover:invert-50 ">
                    삼성스토어옴니
                    <img
                      className="w-3  top-0.5 aspect-square invert "
                      src="./images/icon-new-window-black.svg"
                      alt="new-window "
                    />
                  </a>
                </li>
                <li className={innerLi}>
                  <a href="#" className="w-full flex gap-0.5 hover:invert-50 ">
                    혼수고객 특별 혜택
                  </a>
                </li>
                <li className={innerLi}>
                  <a href="#" className="w-full flex gap-0.5 hover:invert-50 ">
                    입주·이사고객 특별 혜택
                  </a>
                </li>
              </ul>
              <div className="grid grid-rows-2  grid-cols-2 text-base gap-4.5 pl-5 border-l border-[#e2e2e2] ">
                <a href="#" className={innerBox}>
                  <img
                    src="../images/headerTop/headerTopImg_5.png"
                    alt="headerTopImg_1"
                    className="w-15 h-auto block"
                  />
                  <p>삼성스토어 찾기</p>
                </a>
                <a href="#" className={innerBox}>
                  <img
                    src="../images/headerTop/headerTopImg_6.png"
                    alt="headerTopImg_1"
                    className="w-15 h-auto block"
                  />
                  <p>
                    삼성스토어
                    <br />
                    상담 예약
                  </p>
                </a>
                <a href="#" className={innerBox}>
                  <img
                    src="../images/headerTop/headerTopImg_7.png"
                    alt="headerTopImg_1"
                    className="w-15 h-auto block"
                  />
                  <p>
                    삼성스토어
                    <br />
                    진열 할인 제품
                  </p>
                </a>
              </div>
            </div>
          </li>
          <li
            onMouseEnter={() => {
              setopenHeader(false);
              setinnerMenuHover(0);
            }}>
            <a href="#" className="h-full w-full flex items-center p-1">
              지속가능경영
            </a>
          </li>
        </ul>
        <div className="headerBottom  flex relative  items-center gap-12.5 py-2 font-[NotoSans] font-medium  text-white ">
          <svg
            version="1.1"
            id="Layer_2"
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="19"
            viewBox="0 0 120 19"
            x="0px"
            y="0px"
            fill="currentColor"
            data-di-res-id="c6ba377e-8d9e9c54"
            data-di-rand="1774950555195">
            <path d="M0,13.835V12.482H4.609V14.2a1.558,1.558,0,0,0,1.724,1.6A1.509,1.509,0,0,0,8,14.6a2.237,2.237,0,0,0-.03-1.322C7.076,10.976.981,9.931.208,6.333a6.531,6.531,0,0,1-.029-2.4C.654,1.045,3.122,0,6.184,0c2.438,0,5.8.585,5.8,4.458V5.719H7.7V4.612a1.492,1.492,0,0,0-1.605-1.6,1.452,1.452,0,0,0-1.575,1.2,2.468,2.468,0,0,0,.03.922c.5,2.059,7.017,3.167,7.73,6.887a8.481,8.481,0,0,1,.029,2.921C11.892,17.893,9.336,19,6.244,19,3,19,0,17.8,0,13.835Zm55.837-.062V12.421h4.549v1.691a1.533,1.533,0,0,0,1.695,1.6,1.49,1.49,0,0,0,1.665-1.168,2.147,2.147,0,0,0-.029-1.292c-.863-2.274-6.9-3.319-7.671-6.917a6.37,6.37,0,0,1-.03-2.367c.476-2.859,2.944-3.9,5.946-3.9,2.409,0,5.739.615,5.739,4.427v1.23H63.449V4.643a1.485,1.485,0,0,0-1.575-1.6,1.4,1.4,0,0,0-1.546,1.168,2.463,2.463,0,0,0,.029.922C60.832,7.194,67.284,8.27,68,11.959a8.314,8.314,0,0,1,.029,2.89c-.416,2.952-2.943,4.028-6.005,4.028C58.811,18.877,55.837,17.678,55.837,13.773Zm16.293.647A7.18,7.18,0,0,1,72.1,13.25V.523h4.341V13.65a5.023,5.023,0,0,0,.029.677,1.682,1.682,0,0,0,3.271,0,4.852,4.852,0,0,0,.03-.677V.523h4.341V13.25c0,.339-.03.984-.03,1.169-.3,3.319-2.825,4.4-5.976,4.4S72.428,17.739,72.13,14.419Zm35.739-.185a9.539,9.539,0,0,1-.059-1.168V5.6c0-.308.029-.861.059-1.169.386-3.319,2.973-4.365,6.036-4.365,3.033,0,5.708,1.045,6.006,4.365A8.781,8.781,0,0,1,119.94,5.6v.584H115.6V5.2a3.791,3.791,0,0,0-.059-.677,1.777,1.777,0,0,0-3.42,0,3.772,3.772,0,0,0-.059.829v8.117a5.1,5.1,0,0,0,.03.677,1.707,1.707,0,0,0,1.813,1.291,1.633,1.633,0,0,0,1.754-1.291,2.554,2.554,0,0,0,.03-.677V10.883h-1.754V8.3H120v4.765a9.377,9.377,0,0,1-.06,1.168c-.3,3.228-3,4.366-6.036,4.366S108.166,17.462,107.869,14.235Zm-60.5,4.027L47.245,1.845,44.272,18.262H39.931L36.987,1.845l-.118,16.417H32.587L32.943.554h6.988L42.1,14.388,44.272.554h6.987l.386,17.708Zm-22.835,0L22.211,1.845,19.831,18.262H15.194L18.344.554h7.642l3.152,17.708Zm72.665-.184L92.884,3.352l.238,14.726H88.9V.554h6.363l4.044,14.265L99.068.554h4.251V18.078Z"></path>
          </svg>
          <ul className="flex text-base gap-5 h-max ">
            <li
              className="h-max"
              onMouseEnter={() => {
                setopenHeader(true);
                setbottomMenuHover(1);
              }}>
              <a href="#">기획전</a>
            </li>
            <li
              className="h-max"
              onMouseEnter={() => {
                setopenHeader(true);
                setbottomMenuHover(2);
              }}>
              <a href="#">모바일</a>
            </li>
            <li
              onMouseEnter={() => {
                setopenHeader(true);
              }}>
              <a href="#">TV/영상∙음향</a>
            </li>
            <li
              onMouseEnter={() => {
                setopenHeader(true);
              }}>
              <a href="#">주방가전</a>
            </li>
            <li
              onMouseEnter={() => {
                setopenHeader(true);
              }}>
              <a href="#">리빙가전</a>
            </li>
            <li
              onMouseEnter={() => {
                setopenHeader(true);
              }}>
              <a href="#">PC/주변기기</a>
            </li>
            <li
              onMouseEnter={() => {
                setopenHeader(true);
              }}>
              <a href="#">하만</a>
            </li>
            <li
              onMouseEnter={() => {
                setopenHeader(true);
              }}>
              <a href="#">웨어러블</a>
            </li>
            <li
              onMouseEnter={() => {
                setopenHeader(true);
              }}>
              <a href="#">소모품/액세서리</a>
            </li>
            <li
              onMouseEnter={() => {
                setopenHeader(true);
              }}>
              <a href="#">AI 구독클럽</a>
            </li>
            <li
              onMouseEnter={() => {
                setopenHeader(true);
              }}>
              <a href="#">AI 신혼가전</a>
            </li>
          </ul>
          <div className="iconWrap flex gap-2.5 ml-auto items-center ">
            <div className="icon_1 aspect-square flex justify-center  items-center rounded-full bg-[#ffffff2d] w-7.75 border-solid border border-[#ffffff68]">
              <svg
                xmlns="http://www.w3.org/2000/svg bg-[#555]"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
                data-di-res-id="34a557a-6e32fc92"
                data-di-rand="1775027549652">
                <rect width="16" height="16" fill="none"></rect>
                <path
                  d="M102.923,196.841a6.084,6.084,0,0,1,4.587,10.081l4.209,4.208-.589.589-4.209-4.208a6.084,6.084,0,1,1-4-10.67Zm0,.833a5.25,5.25,0,1,0,5.251,5.25A5.25,5.25,0,0,0,102.923,197.674Z"
                  transform="translate(-96.28 -196.28)"></path>
              </svg>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              data-di-res-id="34a557a-d95520f9"
              data-di-rand="1775027549652">
              <rect width="24" height="24" fill="none"></rect>
              <path
                d="M643.456,213.832a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,643.456,213.832Zm-8.736,0a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,634.72,213.832Zm8.736,1.25a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,643.456,215.082Zm-8.736,0a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,634.72,215.082Zm-6.049-17.832a.965.965,0,0,1,.9.663l.013.046.8,3.073H647.9a.806.806,0,0,1,.8.979l-.01.045-2.349,9.073a.965.965,0,0,1-.865.708l-.049,0H632.645a.967.967,0,0,1-.9-.662l-.013-.047-3.3-12.629h-2.9v-1.25Zm18.662,5.032h-16.62l2.168,8.307h12.3Z"
                transform="translate(-625.251 -196)"></path>
            </svg>
            <svg
              id="icon-svg-mypage"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              data-di-res-id="34a557a-cd043815"
              data-di-rand="1775027549652">
              <rect width="26" height="26" fill="none"></rect>
              <path
                d="M204,256.875a7.661,7.661,0,0,1,7.625,7.389v1.986a.875.875,0,0,1-.875.875h-13.5a.875.875,0,0,1-.875-.875v-1.986A7.661,7.661,0,0,1,204,256.875Zm0,1.25a6.413,6.413,0,0,0-6.375,6.139v1.611h12.75v-1.611a6.412,6.412,0,0,0-6.272-6.138Zm0-13.25A5.125,5.125,0,1,1,198.875,250,5.125,5.125,0,0,1,204,244.875Zm0,1.25A3.875,3.875,0,1,0,207.875,250,3.876,3.876,0,0,0,204,246.125Z"
                transform="translate(-192 -243.875)"></path>
            </svg>
          </div>
          <div
            className={`bottomInnerMenu ${bottomMenuHover == 1 ? "on" : ""}  flex bg-white absolute w-screen  border-box gap-5 left-[-1.3rem] pt-15 px-10 pb-10 top-[90%] origin-top duration-100 ease-in  scale-y-0 invisible`}>
            <div className="grid grid-rows-2 grid-cols-7 gap-5">
              {menuData.headerBottom_1.innerTap.map((item) => (
                <a
                  className={`contItem ${item.new ? "new" : ""} w-28 px-4 flex flex-col items-center gap-2 cursor-pointer relative `}
                  key={item.id}
                  href={item.href}>
                  <img
                    className="h-max-[80px] duration-200 ease-in"
                    src={item.src}
                    alt={item.name}
                    duration-300
                    ease-in
                  />
                  <p className="text-black w-max text-sm whitespace-pre-line text-center">
                    {item.name}
                  </p>
                </a>
              ))}
            </div>
            <ul className="text-black flex flex-col gap-y-1.5 font-medium text-sm ml-3 pl-8 border-l border-[#e3e3e3]">
              <li className="text-xs! text-[#9f9f9f]!">더 알아보기 </li>
              <li>
                <a className="hover:text-[#9f9f9f]!" href="#">
                  삼성닷컴에서 더 많은 혜택을
                </a>
              </li>
              <li>
                <a className="hover:text-[#9f9f9f]!" href="#">
                  삼성 AI 신혼가전
                </a>
              </li>
              <li>
                <a className="hover:text-[#9f9f9f]!" href="#">
                  삼성닷컴 앱 다운로드
                </a>
              </li>
              <li>
                <a className="hover:text-[#9f9f9f]!" href="#">
                  스마트싱스
                </a>
              </li>
              <li>
                <a className="hover:text-[#9f9f9f]!" href="#">
                  삼성케어플러스 모바일/PC
                </a>
              </li>
              <li>
                <a className="hover:text-[#9f9f9f]!" href="#">
                  삼성케어플러스 가전/TV
                </a>
              </li>
              <li>
                <a className="hover:text-[#9f9f9f]!" href="#">
                  갤럭시 캠퍼스
                </a>
              </li>
              <li>
                <a className="hover:text-[#9f9f9f]!" href="#">
                  갤럭시 AI 클래스
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
