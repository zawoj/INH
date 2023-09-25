import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section
          className='relative bg-white overflow-hidden'
          style={{
            backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
            backgroundPosition: "center",
          }}
        >
          <div className='bg-transparent'>
            <nav className='flex justify-between p-6 px-4'>
              <div className='flex justify-between items-center w-full'>
                <div className='w-1/2 xl:w-1/3'>
                  <a className='block max-w-max' href='#'>
                    <img
                      className='h-8'
                      src='images/zlex-ui-blue-light-1.svg'
                      alt=''
                    />
                  </a>
                </div>
                <div className='w-1/2 xl:w-1/3'>
                  <ul className='flex justify-center'>
                    <li className='mr-12'>
                      <a
                        className='text-coolGray-500 hover:text-coolGray-900 font-medium'
                        href='#features'
                      >
                        O projekcie
                      </a>
                    </li>
                    <li className='mr-12'>
                      <a
                        className='text-coolGray-500 hover:text-coolGray-900 font-medium'
                        href='#download'
                      >
                        Pobierz
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='w-1/2 xl:w-1/3'>
                  <div className='flex items-center justify-end'></div>
                </div>
              </div>
            </nav>
          </div>
          <div className='relative pt-16 md:pt-24 pb-20 md:pb-28 lg:pb-56'>
            <div className='container px-4 mx-auto'>
              <div className='relative z-10 flex flex-wrap -mx-4'>
                <div className='w-full md:w-1/2 px-4 mb-12 md:mb-0'>
                  <span className='inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-blue-500 uppercase rounded-9xl'>
                    Header
                  </span>
                  <h1 className='mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight text-coolGray-900 font-bold tracking-tight'>
                    Start-up Puzzle Canvas
                  </h1>
                  <p className='mb-8 text-lg md:text-xl text-coolGray-500 font-medium'>
                    Zdefiniujmy tworzenie startupów na nowo!
                  </p>
                  <div className='flex flex-wrap mb-8 md:mb-16'>
                    <div className='w-full md:w-auto py-1 md:py-0 md:mr-4'>
                      <a
                        className='inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-blue-50 font-medium text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md shadow-sm'
                        href='#download'
                      >
                        Pobierz Demo
                      </a>
                    </div>
                    <div className='w-full md:w-auto py-1 md:py-0' />
                  </div>
                  <p className='mb-6 md:mb-4 text-sm text-coolGray-400 font-medium text-center md:text-left'>
                    Dotychczas zainteresowanie współpracą wykazały między
                    innymi…
                  </p>
                  <div className='flex flex-wrap -mx-3'>
                    <div className='w-full md:w-auto px-3 mb-6 lg:mb-0'>
                      <img
                        className='mx-auto'
                        src='flex-ui-assets/brands/welytics-light.svg'
                        alt=''
                      />
                    </div>
                    <div className='w-full md:w-auto px-3 mb-6 lg:mb-0'>
                      <img
                        className='mx-auto'
                        src='flex-ui-assets/brands/jiggle-light.svg'
                        alt=''
                      />
                    </div>
                    <div className='w-full md:w-auto px-3 mb-6 lg:mb-0'>
                      <img
                        className='mx-auto'
                        src='flex-ui-assets/brands/wishelp-light.svg'
                        alt=''
                      />
                    </div>
                    <div className='w-full md:w-auto px-3'>
                      <img
                        className='mx-auto'
                        src='flex-ui-assets/brands/resecurb-light.svg'
                        alt=''
                      />
                    </div>
                  </div>
                </div>
                <div className='w-full md:hidden px-4'>
                  <div className='relative max-w-max mx-auto'>
                    <img
                      className='absolute p-1 ml-11 top-1 left-0 z-10 h-52 object-cover'
                      src='flex-ui-assets/elements/dashboard.png'
                    />
                    <img
                      className='h-56 mx-auto object-cover'
                      src='flex-ui-assets/images/headers/mockup-light1.png'
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='md:absolute md:-right-80 md:top-1/2 md:transform md:-translate-y-1/2 md:translate-x-64 lg:translate-x-32 xl:-translate-x-7 md:mt-12 hidden md:block'>
              <img
                className='absolute left-12 top-1/2 transform -translate-y-64'
                src='flex-ui-assets/elements/circle4-violet.svg'
                alt=''
              />
              <img
                className='relative z-10'
                src='flex-ui-assets/images/headers/mockup-light2.png'
                alt=''
              />
              <img
                className='absolute z-20 top-6 left-36 transform translate-x-4'
                src='images/Screenshot-2023-09-25-173124.png'
              />
            </div>
          </div>
        </section>
        <section
          className='py-24 bg-white'
          style={{
            backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
            backgroundPosition: "center",
          }}
          id='features'
        >
          <div className='container px-4 mx-auto'>
            <div className='xl:max-w-4xl mb-12 mx-auto text-center'>
              <span className='inline-block py-px px-2 mb-4 text-xs leading-5 text-blue-500 bg-blue-100 font-medium uppercase rounded-full shadow-sm'>
                O PROJECKIE
              </span>
              <h1 className='mb-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter'>
                Start-up Puzzle Canvas
              </h1>
              <p className='text-lg md:text-xl text-coolGray-500 font-medium'>
                Dlaczego Start-up Puzzle Canvas powstaje i dlaczego jest tak
                ważny w kwestii rynku start-upów?
              </p>
            </div>
            <div className='flex flex-wrap -mx-4'>
              <div className='w-full lg:w-1/3 px-4 lg:pt-6 mb-8 lg:mb-0'>
                <div className='p-8 lg:mb-6 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200'>
                  <div className='inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-blue-500 rounded-lg'>
                    <svg
                      width={24}
                      height={21}
                      viewBox='0 0 24 21'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M17 18.63H5C4.20435 18.63 3.44129 18.3139 2.87868 17.7513C2.31607 17.1887 2 16.4257 2 15.63V7.63C2 7.36479 1.89464 7.11043 1.70711 6.9229C1.51957 6.73536 1.26522 6.63 1 6.63C0.734784 6.63 0.48043 6.73536 0.292893 6.9229C0.105357 7.11043 0 7.36479 0 7.63L0 15.63C0 16.9561 0.526784 18.2279 1.46447 19.1655C2.40215 20.1032 3.67392 20.63 5 20.63H17C17.2652 20.63 17.5196 20.5246 17.7071 20.3371C17.8946 20.1496 18 19.8952 18 19.63C18 19.3648 17.8946 19.1104 17.7071 18.9229C17.5196 18.7354 17.2652 18.63 17 18.63ZM21 0.630005H7C6.20435 0.630005 5.44129 0.946075 4.87868 1.50868C4.31607 2.07129 4 2.83436 4 3.63V13.63C4 14.4257 4.31607 15.1887 4.87868 15.7513C5.44129 16.3139 6.20435 16.63 7 16.63H21C21.7956 16.63 22.5587 16.3139 23.1213 15.7513C23.6839 15.1887 24 14.4257 24 13.63V3.63C24 2.83436 23.6839 2.07129 23.1213 1.50868C22.5587 0.946075 21.7956 0.630005 21 0.630005ZM20.59 2.63L14.71 8.51C14.617 8.60373 14.5064 8.67813 14.3846 8.7289C14.2627 8.77966 14.132 8.8058 14 8.8058C13.868 8.8058 13.7373 8.77966 13.6154 8.7289C13.4936 8.67813 13.383 8.60373 13.29 8.51L7.41 2.63H20.59ZM22 13.63C22 13.8952 21.8946 14.1496 21.7071 14.3371C21.5196 14.5246 21.2652 14.63 21 14.63H7C6.73478 14.63 6.48043 14.5246 6.29289 14.3371C6.10536 14.1496 6 13.8952 6 13.63V4L11.88 9.88C12.4425 10.4418 13.205 10.7574 14 10.7574C14.795 10.7574 15.5575 10.4418 16.12 9.88L22 4V13.63Z'
                        fill='currentColor'
                      />
                    </svg>
                  </div>
                  <h3 className='mb-4 text-xl md:text-2xl leading-tight font-bold'>
                    Po co?
                  </h3>
                  <p className='text-coolGray-500 font-medium'>
                    Start-Up Puzzle Canvas (SPC), inaczej modułowy szablon
                    modelu biznesowego, to nasz autorski Canvas, który powstał
                    po to, aby umożliwić startupom tworzenie własnych modeli
                    biznesowych w klarowniejszy i wygodniejszy sposób. Dzięki
                    temu narzędziu, canvas nie musi być wypełniany intuicyjnie i
                    na oko, lecz jest dostosowany do osób korzystających -
                    młodych startupowców.
                  </p>
                </div>
                <div className='p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200'>
                  <div className='inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-blue-500 rounded-lg'>
                    <svg
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M5 18H9.24C9.37161 18.0008 9.50207 17.9755 9.62391 17.9258C9.74574 17.876 9.85656 17.8027 9.95 17.71L16.87 10.78L19.71 8C19.8037 7.90704 19.8781 7.79644 19.9289 7.67458C19.9797 7.55272 20.0058 7.42201 20.0058 7.29C20.0058 7.15799 19.9797 7.02728 19.9289 6.90542C19.8781 6.78356 19.8037 6.67296 19.71 6.58L15.47 2.29C15.377 2.19627 15.2664 2.12188 15.1446 2.07111C15.0227 2.02034 14.892 1.9942 14.76 1.9942C14.628 1.9942 14.4973 2.02034 14.3754 2.07111C14.2536 2.12188 14.143 2.19627 14.05 2.29L11.23 5.12L4.29 12.05C4.19732 12.1434 4.12399 12.2543 4.07423 12.3761C4.02446 12.4979 3.99924 12.6284 4 12.76V17C4 17.2652 4.10536 17.5196 4.29289 17.7071C4.48043 17.8946 4.73478 18 5 18ZM14.76 4.41L17.59 7.24L16.17 8.66L13.34 5.83L14.76 4.41ZM6 13.17L11.93 7.24L14.76 10.07L8.83 16H6V13.17ZM21 20H3C2.73478 20 2.48043 20.1054 2.29289 20.2929C2.10536 20.4804 2 20.7348 2 21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21C22 20.7348 21.8946 20.4804 21.7071 20.2929C21.5196 20.1054 21.2652 20 21 20Z'
                        fill='currentColor'
                      />
                    </svg>
                  </div>
                  <h3 className='mb-4 text-xl md:text-2xl leading-tight font-bold'>
                    Co umożliwa ?
                  </h3>
                  <p className='text-coolGray-500 font-medium'>
                    Połączenie trzonu modelu (bazy) z nakładkami oraz puzzlami
                    tworzonymi we współpracy z partnerami (specjalizującymi się
                    w danej dziedzinie działalności start-upu) umożliwi
                    founderom stworzenie sensownego start-upowego canvasu, który
                    może zwiększyć ich szanse podczas kolejnych rund spotkań z
                    funduszami VC oraz aniołami biznesu, a co ważniejsze
                    skuteczniej wspomaga w procesie planowania przyszłego
                    biznesu.
                  </p>
                </div>
              </div>
              <div className='w-full lg:w-1/3 px-4 mb-8 lg:mb-0'>
                <img
                  className='mx-auto'
                  src='images/circles-elements-our-mission.webp'
                  alt=''
                />
              </div>
              <div className='w-full lg:w-1/3 lg:pt-6 px-4'>
                <div className='p-8 lg:mb-6 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200'>
                  <div className='inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-blue-500 rounded-lg'>
                    <svg
                      width={22}
                      height={12}
                      viewBox='0 0 22 12'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M20.71 1.29C20.617 1.19627 20.5064 1.12188 20.3846 1.07111C20.2627 1.02034 20.132 0.994202 20 0.994202C19.868 0.994202 19.7373 1.02034 19.6154 1.07111C19.4936 1.12188 19.383 1.19627 19.29 1.29L13 7.59L8.71 3.29C8.61704 3.19627 8.50644 3.12188 8.38458 3.07111C8.26272 3.02034 8.13201 2.9942 8 2.9942C7.86799 2.9942 7.73728 3.02034 7.61542 3.07111C7.49356 3.12188 7.38296 3.19627 7.29 3.29L1.29 9.29C1.19627 9.38296 1.12188 9.49356 1.07111 9.61542C1.02034 9.73728 0.994202 9.86799 0.994202 10C0.994202 10.132 1.02034 10.2627 1.07111 10.3846C1.12188 10.5064 1.19627 10.617 1.29 10.71C1.38296 10.8037 1.49356 10.8781 1.61542 10.9289C1.73728 10.9797 1.86799 11.0058 2 11.0058C2.13201 11.0058 2.26272 10.9797 2.38458 10.9289C2.50644 10.8781 2.61704 10.8037 2.71 10.71L8 5.41L12.29 9.71C12.383 9.80373 12.4936 9.87812 12.6154 9.92889C12.7373 9.97966 12.868 10.0058 13 10.0058C13.132 10.0058 13.2627 9.97966 13.3846 9.92889C13.5064 9.87812 13.617 9.80373 13.71 9.71L20.71 2.71C20.8037 2.61704 20.8781 2.50644 20.9289 2.38458C20.9797 2.26272 21.0058 2.13201 21.0058 2C21.0058 1.86799 20.9797 1.73728 20.9289 1.61542C20.8781 1.49356 20.8037 1.38296 20.71 1.29Z'
                        fill='currentColor'
                      />
                    </svg>
                  </div>
                  <h3 className='mb-4 text-xl md:text-2xl leading-tight font-bold'>
                    Co daje ?
                  </h3>
                  <p className='text-coolGray-500 font-medium'>
                    Główną przewagą naszego Canvasu nad pierwowzorami jest jego
                    modułowość. Modułowy szablon daje niemal nieograniczone
                    możliwości z zakresu personalizacji i dostosowywania modelu
                    do potrzeb użytkownika - możliwe są modyfikacje i
                    dopasowania pod względem produktu, sektora, branży,
                    finansowania, ochrony patentowej itp. - daje to szansę na
                    bardziej elastyczne podejście do projektowania startupów.
                  </p>
                </div>
                <div className='p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200'>
                  <div className='inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-blue-500 rounded-lg'>
                    <svg
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M10 13H3C2.73478 13 2.48043 13.1054 2.29289 13.2929C2.10536 13.4804 2 13.7348 2 14V21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H10C10.2652 22 10.5196 21.8946 10.7071 21.7071C10.8946 21.5196 11 21.2652 11 21V14C11 13.7348 10.8946 13.4804 10.7071 13.2929C10.5196 13.1054 10.2652 13 10 13ZM9 20H4V15H9V20ZM21 2H14C13.7348 2 13.4804 2.10536 13.2929 2.29289C13.1054 2.48043 13 2.73478 13 3V10C13 10.2652 13.1054 10.5196 13.2929 10.7071C13.4804 10.8946 13.7348 11 14 11H21C21.2652 11 21.5196 10.8946 21.7071 10.7071C21.8946 10.5196 22 10.2652 22 10V3C22 2.73478 21.8946 2.48043 21.7071 2.29289C21.5196 2.10536 21.2652 2 21 2V2ZM20 9H15V4H20V9ZM21 13H14C13.7348 13 13.4804 13.1054 13.2929 13.2929C13.1054 13.4804 13 13.7348 13 14V21C13 21.2652 13.1054 21.5196 13.2929 21.7071C13.4804 21.8946 13.7348 22 14 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V14C22 13.7348 21.8946 13.4804 21.7071 13.2929C21.5196 13.1054 21.2652 13 21 13ZM20 20H15V15H20V20ZM10 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V10C2 10.2652 2.10536 10.5196 2.29289 10.7071C2.48043 10.8946 2.73478 11 3 11H10C10.2652 11 10.5196 10.8946 10.7071 10.7071C10.8946 10.5196 11 10.2652 11 10V3C11 2.73478 10.8946 2.48043 10.7071 2.29289C10.5196 2.10536 10.2652 2 10 2V2ZM9 9H4V4H9V9Z'
                        fill='currentColor'
                      />
                    </svg>
                  </div>
                  <h3 className='mb-4 text-xl md:text-2xl leading-tight font-bold'>
                    Skalowalność
                  </h3>
                  <p className='text-coolGray-500 font-medium'>
                    Wciąż rozbudujemy ilość naszych puzlli.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className='py-24 bg-white'
          style={{
            backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
            backgroundPosition: "center",
          }}
          id='download'
        >
          <div className='container px-4 mx-auto'>
            <div className='max-w-4xl mx-auto mb-12 text-center'>
              <span className='inline-block py-px px-2 mb-4 text-xs leading-5 text-blue-500 bg-blue-100 font-medium uppercase rounded-full shadow-sm'>
                WSZYSTKO JEST DLA WAS
              </span>
              <h3 className='mb-4 text-3xl md:text-4xl leading-tight text-coolGray-900 font-bold tracking-tighter'>
                Pobierz
              </h3>
              <p className='text-lg md:text-xl text-coolGray-500 font-medium'>
                Pobierz co jest Tobie najbardziej potrzebne
              </p>
            </div>
            <div className='max-w-3xl mx-auto'>
              <a
                className='group block mb-6'
                href='/Innovation-Hub.fig'
                download={true}
              >
                <div className='flex items-center justify-between flex-wrap p-10 bg-coolGray-50 group-hover:bg-coolGray-100 rounded-md shadow-md transition duration-200'>
                  <div className='w-full md:w-1/2 mb-2 md:mb-0'>
                    <h3 className='text-lg md:text-xl text-coolGray-800 group-hover:text-coolGray-900 font-semibold'>
                      Full puzzles
                    </h3>
                  </div>
                  <div className='w-full md:w-1/2 md:text-right'>
                    <div className='inline-flex items-center leading-6 text-blue-500 group-hover:text-blue-600 font-medium transition duration-200'>
                      <span className='mr-2'>Get</span>
                      <svg
                        width={20}
                        height={20}
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M13.71 10.71C13.801 10.6149 13.8724 10.5028 13.92 10.38C14.02 10.1365 14.02 9.86346 13.92 9.62C13.8724 9.49725 13.801 9.3851 13.71 9.29L10.71 6.29C10.5217 6.1017 10.2663 5.99591 10 5.99591C9.7337 5.99591 9.47831 6.1017 9.29 6.29C9.1017 6.4783 8.99591 6.7337 8.99591 7C8.99591 7.2663 9.1017 7.5217 9.29 7.71L10.59 9L7 9C6.73479 9 6.48043 9.10536 6.2929 9.29289C6.10536 9.48043 6 9.73478 6 10C6 10.2652 6.10536 10.5196 6.2929 10.7071C6.48043 10.8946 6.73479 11 7 11L10.59 11L9.29 12.29C9.19628 12.383 9.12188 12.4936 9.07111 12.6154C9.02034 12.7373 8.99421 12.868 8.99421 13C8.99421 13.132 9.02034 13.2627 9.07111 13.3846C9.12188 13.5064 9.19628 13.617 9.29 13.71C9.38297 13.8037 9.49357 13.8781 9.61543 13.9289C9.73729 13.9797 9.86799 14.0058 10 14.0058C10.132 14.0058 10.2627 13.9797 10.3846 13.9289C10.5064 13.8781 10.617 13.8037 10.71 13.71L13.71 10.71ZM20 10C20 8.02219 19.4135 6.08879 18.3147 4.4443C17.2159 2.79981 15.6541 1.51808 13.8268 0.761204C11.9996 0.00432792 9.98891 -0.193706 8.0491 0.192146C6.10929 0.577999 4.32746 1.53041 2.92894 2.92893C1.53041 4.32746 0.578004 6.10929 0.192152 8.0491C-0.1937 9.98891 0.00433294 11.9996 0.761209 13.8268C1.51809 15.6541 2.79981 17.2159 4.4443 18.3147C6.08879 19.4135 8.02219 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C17.9997 16.1425 18.7363 15.0401 19.2388 13.8268C19.7413 12.6136 20 11.3132 20 10ZM2 10C2 8.41775 2.4692 6.87103 3.34825 5.55544C4.2273 4.23985 5.47673 3.21446 6.93854 2.60896C8.40035 2.00346 10.0089 1.84504 11.5607 2.15372C13.1126 2.4624 14.538 3.22433 15.6569 4.34315C16.7757 5.46197 17.5376 6.88743 17.8463 8.43928C18.155 9.99113 17.9965 11.5997 17.391 13.0615C16.7855 14.5233 15.7602 15.7727 14.4446 16.6518C13.129 17.5308 11.5823 18 10 18C7.87827 18 5.84344 17.1571 4.34315 15.6569C2.84286 14.1566 2 12.1217 2 10Z'
                          fill='currentColor'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
              <a className='group block mb-6' download={true} href='/Base.pdf'>
                <div className='flex items-center justify-between flex-wrap p-10 bg-coolGray-50 group-hover:bg-coolGray-100 rounded-md shadow-md transition duration-200'>
                  <div className='w-full md:w-1/2 mb-2 md:mb-0'>
                    <h3 className='text-lg md:text-xl text-coolGray-800 group-hover:text-coolGray-900 font-semibold'>
                      Base
                    </h3>
                  </div>
                  <div className='w-full md:w-1/2 md:text-right'>
                    <div className='inline-flex items-center leading-6 text-blue-500 group-hover:text-blue-600 font-medium transition duration-200'>
                      <span className='mr-2'>Get</span>
                      <svg
                        width={20}
                        height={20}
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M13.71 10.71C13.801 10.6149 13.8724 10.5028 13.92 10.38C14.02 10.1365 14.02 9.86346 13.92 9.62C13.8724 9.49725 13.801 9.3851 13.71 9.29L10.71 6.29C10.5217 6.1017 10.2663 5.99591 10 5.99591C9.7337 5.99591 9.47831 6.1017 9.29 6.29C9.1017 6.4783 8.99591 6.7337 8.99591 7C8.99591 7.2663 9.1017 7.5217 9.29 7.71L10.59 9L7 9C6.73479 9 6.48043 9.10536 6.2929 9.29289C6.10536 9.48043 6 9.73478 6 10C6 10.2652 6.10536 10.5196 6.2929 10.7071C6.48043 10.8946 6.73479 11 7 11L10.59 11L9.29 12.29C9.19628 12.383 9.12188 12.4936 9.07111 12.6154C9.02034 12.7373 8.99421 12.868 8.99421 13C8.99421 13.132 9.02034 13.2627 9.07111 13.3846C9.12188 13.5064 9.19628 13.617 9.29 13.71C9.38297 13.8037 9.49357 13.8781 9.61543 13.9289C9.73729 13.9797 9.86799 14.0058 10 14.0058C10.132 14.0058 10.2627 13.9797 10.3846 13.9289C10.5064 13.8781 10.617 13.8037 10.71 13.71L13.71 10.71ZM20 10C20 8.02219 19.4135 6.08879 18.3147 4.4443C17.2159 2.79981 15.6541 1.51808 13.8268 0.761204C11.9996 0.00432792 9.98891 -0.193706 8.0491 0.192146C6.10929 0.577999 4.32746 1.53041 2.92894 2.92893C1.53041 4.32746 0.578004 6.10929 0.192152 8.0491C-0.1937 9.98891 0.00433294 11.9996 0.761209 13.8268C1.51809 15.6541 2.79981 17.2159 4.4443 18.3147C6.08879 19.4135 8.02219 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C17.9997 16.1425 18.7363 15.0401 19.2388 13.8268C19.7413 12.6136 20 11.3132 20 10ZM2 10C2 8.41775 2.4692 6.87103 3.34825 5.55544C4.2273 4.23985 5.47673 3.21446 6.93854 2.60896C8.40035 2.00346 10.0089 1.84504 11.5607 2.15372C13.1126 2.4624 14.538 3.22433 15.6569 4.34315C16.7757 5.46197 17.5376 6.88743 17.8463 8.43928C18.155 9.99113 17.9965 11.5997 17.391 13.0615C16.7855 14.5233 15.7602 15.7727 14.4446 16.6518C13.129 17.5308 11.5823 18 10 18C7.87827 18 5.84344 17.1571 4.34315 15.6569C2.84286 14.1566 2 12.1217 2 10Z'
                          fill='currentColor'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
              <a className='group block mb-6' href='#'>
                <div className='flex items-center justify-between flex-wrap p-10 bg-coolGray-50 group-hover:bg-coolGray-100 rounded-md shadow-md transition duration-200'>
                  <div className='w-full md:w-1/2 mb-2 md:mb-0'>
                    <h3 className='text-lg md:text-xl text-coolGray-800 group-hover:text-coolGray-900 font-semibold'>
                      Additional 1
                    </h3>
                  </div>
                  <div className='w-full md:w-1/2 md:text-right'>
                    <div className='inline-flex items-center leading-6 text-blue-500 group-hover:text-blue-600 font-medium transition duration-200'>
                      <span className='mr-2'>Get</span>
                      <svg
                        width={20}
                        height={20}
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M13.71 10.71C13.801 10.6149 13.8724 10.5028 13.92 10.38C14.02 10.1365 14.02 9.86346 13.92 9.62C13.8724 9.49725 13.801 9.3851 13.71 9.29L10.71 6.29C10.5217 6.1017 10.2663 5.99591 10 5.99591C9.7337 5.99591 9.47831 6.1017 9.29 6.29C9.1017 6.4783 8.99591 6.7337 8.99591 7C8.99591 7.2663 9.1017 7.5217 9.29 7.71L10.59 9L7 9C6.73479 9 6.48043 9.10536 6.2929 9.29289C6.10536 9.48043 6 9.73478 6 10C6 10.2652 6.10536 10.5196 6.2929 10.7071C6.48043 10.8946 6.73479 11 7 11L10.59 11L9.29 12.29C9.19628 12.383 9.12188 12.4936 9.07111 12.6154C9.02034 12.7373 8.99421 12.868 8.99421 13C8.99421 13.132 9.02034 13.2627 9.07111 13.3846C9.12188 13.5064 9.19628 13.617 9.29 13.71C9.38297 13.8037 9.49357 13.8781 9.61543 13.9289C9.73729 13.9797 9.86799 14.0058 10 14.0058C10.132 14.0058 10.2627 13.9797 10.3846 13.9289C10.5064 13.8781 10.617 13.8037 10.71 13.71L13.71 10.71ZM20 10C20 8.02219 19.4135 6.08879 18.3147 4.4443C17.2159 2.79981 15.6541 1.51808 13.8268 0.761204C11.9996 0.00432792 9.98891 -0.193706 8.0491 0.192146C6.10929 0.577999 4.32746 1.53041 2.92894 2.92893C1.53041 4.32746 0.578004 6.10929 0.192152 8.0491C-0.1937 9.98891 0.00433294 11.9996 0.761209 13.8268C1.51809 15.6541 2.79981 17.2159 4.4443 18.3147C6.08879 19.4135 8.02219 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C17.9997 16.1425 18.7363 15.0401 19.2388 13.8268C19.7413 12.6136 20 11.3132 20 10ZM2 10C2 8.41775 2.4692 6.87103 3.34825 5.55544C4.2273 4.23985 5.47673 3.21446 6.93854 2.60896C8.40035 2.00346 10.0089 1.84504 11.5607 2.15372C13.1126 2.4624 14.538 3.22433 15.6569 4.34315C16.7757 5.46197 17.5376 6.88743 17.8463 8.43928C18.155 9.99113 17.9965 11.5997 17.391 13.0615C16.7855 14.5233 15.7602 15.7727 14.4446 16.6518C13.129 17.5308 11.5823 18 10 18C7.87827 18 5.84344 17.1571 4.34315 15.6569C2.84286 14.1566 2 12.1217 2 10Z'
                          fill='currentColor'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
              <a className='group block mb-6' href='#'></a>
              <a className='group block' href='#'></a>
            </div>
          </div>
        </section>
        <section
          className='bg-white'
          style={{
            backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
            backgroundPosition: "center",
          }}
        >
          <div className='container px-4 mx-auto'>
            <div className='pt-24 pb-11 mx-auto max-w-4xl'>
              <a className='block md:mx-auto mb-5 max-w-max' href='#'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width={95}
                  height={32}
                  viewBox='0 0 95 32'
                  fill='none'
                  className='text-blue-500'
                >
                  <g clipPath='url(#clip0_3_203)'>
                    <path
                      d='M49.1458 5.71631V25.0909H44.6687V5.71631H49.1458Z'
                      fill='#2A3342'
                    />
                    <path
                      d='M66.1618 17.5505C66.1618 17.9694 66.1357 18.4058 66.0833 18.8596H55.9509C56.0207 19.7673 56.3087 20.4654 56.8149 20.9542C57.3386 21.4254 57.9757 21.6611 58.7262 21.6611C59.8433 21.6611 60.62 21.1898 61.0564 20.2473H65.8215C65.5771 21.2073 65.132 22.0713 64.4862 22.8393C63.8578 23.6073 63.0637 24.2094 62.1037 24.6458C61.1437 25.0822 60.0702 25.3004 58.8833 25.3004C57.452 25.3004 56.1778 24.9949 55.0607 24.384C53.9437 23.7731 53.0709 22.9004 52.4426 21.7658C51.8142 20.6313 51.5 19.3047 51.5 17.7862C51.5 16.2676 51.8055 14.9411 52.4164 13.8065C53.0447 12.672 53.9175 11.7993 55.0346 11.1884C56.1517 10.5774 57.4346 10.272 58.8833 10.272C60.2971 10.272 61.5538 10.5687 62.6535 11.1622C63.7531 11.7556 64.6084 12.6022 65.2193 13.7018C65.8477 14.8014 66.1618 16.0844 66.1618 17.5505ZM61.58 16.3724C61.58 15.6044 61.3182 14.9934 60.7946 14.5396C60.2709 14.0858 59.6164 13.8589 58.8309 13.8589C58.0804 13.8589 57.4433 14.0771 56.9197 14.5134C56.4135 14.9498 56.0993 15.5694 55.9771 16.3724H61.58Z'
                      fill='#2A3342'
                    />
                    <path
                      d='M77.1638 25.0909L74.3624 21.0327L72.006 25.0909H67.1624L71.9798 17.6291L67.0315 10.4814H72.0584L74.8598 14.5134L77.2162 10.4814H82.0598L77.1638 17.8385L82.1907 25.0909H77.1638Z'
                      fill='#2A3342'
                    />
                    <g filter='url(#filter0_d_3_203)'>
                      <path
                        d='M30.4989 8.50867L18.6887 28.9788H42V32H13L26.6034 8.50867H30.4989ZM24.5629 23.4297L36.3731 3.02119H13V0H42L28.4584 23.4297H24.5629Z'
                        fill='#397DEC'
                      />
                    </g>
                  </g>
                  <defs>
                    <filter
                      id='filter0_d_3_203'
                      x={-97}
                      y={-110}
                      width={249}
                      height={252}
                      filterUnits='userSpaceOnUse'
                      colorInterpolationFilters='sRGB'
                    >
                      <feFlood floodOpacity={0} result='BackgroundImageFix' />
                      <feColorMatrix
                        in='SourceAlpha'
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation={55} />
                      <feComposite in2='hardAlpha' operator='out' />
                      <feColorMatrix
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0'
                      />
                      <feBlend
                        mode='normal'
                        in2='BackgroundImageFix'
                        result='effect1_dropShadow_3_203'
                      />
                      <feBlend
                        mode='normal'
                        in='SourceGraphic'
                        in2='effect1_dropShadow_3_203'
                        result='shape'
                      />
                    </filter>
                    <clipPath id='clip0_3_203'>
                      <rect width={95} height={32} fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <div className='flex flex-wrap justify-center -mx-3 lg:-mx-6'>
                <div className='w-full md:w-auto p-3 md:px-6' />
                <div className='w-full md:w-auto p-3 md:px-6'>
                  <a
                    className='inline-block text-lg md:text-xl text-coolGray-500 hover:text-coolGray-600 font-medium'
                    href='#'
                  >
                    Features
                  </a>
                </div>
                <div className='w-full md:w-auto p-3 md:px-6'>
                  <a
                    className='inline-block text-lg md:text-xl text-coolGray-500 hover:text-coolGray-600 font-medium'
                    href='#'
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='border-b border-coolGray-100' />
          <div className='container px-4 mx-auto'></div>
        </section>
      </>
    </React.Fragment>
  );
}
