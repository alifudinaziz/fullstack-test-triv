import { Link } from 'react-router'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/common/Accordion'
import { ChevronRight } from 'lucide-react'

import heroBackground from '@/assets/tradingfest/hero-bg.webp'
import heroCharImage from '@/assets/tradingfest/hero-image.webp'
import rewardAllImage from '@/assets/tradingfest/reward-all.webp'
import rewardJuara1 from '@/assets/tradingfest/juara1.webp'
import rewardJuara2 from '@/assets/tradingfest/juara2.webp'
import rewardJuara3 from '@/assets/tradingfest/juara3.webp'
import rewardHarapan1 from '@/assets/tradingfest/harapan1.webp'
import rewardHarapan2 from '@/assets/tradingfest/harapan2.webp'
import rewardHarapan3 from '@/assets/tradingfest/harapan3.webp'
import bgLinkQuest from '@/assets/tradingfest/bg-blue-flow.webp'
import linkSideQuest from '@/assets/tradingfest/k-63-group.webp'
import linkWeeklyQuestJourney from '@/assets/tradingfest/by-percentage-return.webp'
import pendaftaranBackground from '@/assets/tradingfest/pendaftaran-bg.webp'
import trivOnLaptop from '@/assets/tradingfest/mobile.webp'
import leaderboardTimer from '@/assets/tradingfest/leaderboard-timer.webp'
import leaderboardPodium from '@/assets/tradingfest/podium.webp'
import leaderboardRankBg from '@/assets/tradingfest/bg-list-rank.webp'
import leaderboardRank1 from '@/assets/tradingfest/rank-1.webp'
import leaderboardRank2 from '@/assets/tradingfest/rank-2.webp'
import leaderboardRank3 from '@/assets/tradingfest/rank-3.webp'

type LeaderboardData = {
  name: string
  amount: string
}

const TradingFestPage = () => {
  const dataLeaderboard: LeaderboardData[] = [
    {
      name: 'Moch****',
      amount: 'Rp27,6m',
    },
    {
      name: 'Irna****',
      amount: 'Rp20,9m',
    },
    {
      name: 'linatul********',
      amount: 'Rp5,82m',
    },
  ]
  const leaderboardRankImages = [
    leaderboardRank1,
    leaderboardRank2,
    leaderboardRank3,
  ]
  const leaderboardRankOrderClasses = [
    'lg:order-2 lg:h-[22rem]',
    'lg:order-1 lg:h-[21rem] lg:mt-[4rem]',
    'lg:order-3 lg:h-[21rem] lg:mt-[4rem]',
  ]

  return (
    <main>
      <section className="hero-section bg-cover md:bg-right lg:bg-center bg-no-repeat px-3"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      >
        <div className="md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-[82rem] mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-10 py-6 md:py-[6rem] lg:py-[8rem]">
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-[2.75rem] md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              Triv Trading Competition
            </h1>
            <p className="text-[1.5rem] md:text-[2rem] mt-8 md:mt-11 font-medium text-white md:leading-8">
              Calling all Investor and Trader Karena
            </p>
            <p className="italic text-[1.5rem] md:text-[2rem] font-bold text-white md:leading-8">
              #SemuaBisaMenang
            </p>
            <Link
              to="https://triv.co.id/id/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full md:w-max items-center justify-center mt-4 text-lg md:text-xl rounded-sm bg-[#3289C6] px-6 py-4 font-medium text-white transition hover:bg-[#0087E6]"
            >
              Daftar Sekarang <ChevronRight className="h-6 w-6" />
            </Link>
            <p className="italic font-medium text-[#fde090] text-[17px] md:text-lg xl:text-xl mt-4">
              <sup className="relative top-[1px] text-lg md:text-[20px] xl:text-[22px]">*</sup>Periode kompetisi 20 Juni 2022 - 20 Juli 2022
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={heroCharImage}
              alt="Triv Trading Competition"
              className="mx-auto w-full max-w-md object-contain md:max-w-xl"
            />
          </div>
        </div>
      </section>

      <section className="reward-section bg-[#242424] px-3">
        <div className="md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-[82rem] mx-auto py-6 md:py-[3rem]">
          <div className="flex flex-col-reverse md:flex-row md:items-start justify-between gap-8 md:gap-10">
            <div className="text-center md:w-1/2 md:text-left">
              <p className="text-[1.5rem] md:text-[2rem] xl:text-[2.25rem] font-bold text-white leading-7 md:leading-8 lg:leading-9 xl:leading-10 tracking-tight">
                #SemuaBisaMenang karena semakin banyak kamu trading semakin banyak hadiah yang bisa kamu dapatkan!
              </p>
              <p className="mt-3 text-[1.25rem] md:text-[1.5rem] xl:text-[1.625rem] font-medium text-[#a4acbe] leading-6 md:leading-7 lg:leading-8 tracking-tight">
                Mulai trading hanya dengan 50rb rupiah di Triv dan dapatkan hadiahnya.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src={rewardAllImage}
                alt="Triv Reward All"
                className="mx-auto w-full max-w-md object-contain md:max-w-xl"
              />
            </div>
          </div>
          <div className="w-full h-[2rem] bg-[radial-gradient(50%_18px_at_50%_0%,#000_0%,transparent_100%)] mt-12 mb-8 md:mt-14 md:mb-10">
            &nbsp;
          </div>
          <div className="mb-[3rem]">
            <div className="text-center mb-[2rem]">
              <span className="text-[2rem] lg:text-[2.75rem] font-extrabold text-white [text-shadow:_-9.2px_3.9px_0_rgba(0,0,0,0.4)] lg:[text-shadow:_8.1px_5.9px_0_rgba(0,0,0,0.4)] leading-10 border border-x-0 border-t-0 border-b-[#4D75B3] border-b-[1rem]">
                TRIV QUEST REWARD
              </span>
            </div>
            <div className="w-full pt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <div className="mx-auto flex h-[15rem] w-[13rem] lg:h-[20rem] lg:w-[17rem] items-center justify-center">
                    <img
                      src={rewardJuara1}
                      alt="Juara 1"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p className="text-[1.5rem] font-medium text-white text-center -mt-2">Motor Vario</p>
                </div>
                <div>
                  <div className="mx-auto flex h-[15rem] w-[13rem] lg:h-[20rem] lg:w-[17rem] items-center justify-center">
                    <img
                      src={rewardJuara2}
                      alt="Juara 2"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p className="text-[1.5rem] font-medium text-white text-center -mt-2">Macbook Air M1 2020</p>
                </div>
                <div>
                  <div className="mx-auto flex h-[15rem] w-[13rem] lg:h-[20rem] lg:w-[17rem] items-center justify-center">
                    <img
                      src={rewardJuara3}
                      alt="Juara 3"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p className="text-[1.5rem] font-medium text-white text-center -mt-2">Samsung Galaxy Tab S7+</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center mb-[2rem]">
              <span className="text-[2rem] lg:text-[2.75rem] font-extrabold text-white [text-shadow:_-9.2px_3.9px_0_rgba(0,0,0,0.4)] lg:[text-shadow:_8.1px_5.9px_0_rgba(0,0,0,0.4)] leading-10 border border-x-0 border-t-0 border-b-[#4D75B3] border-b-[1rem]">
                TRIV HEROES
              </span>
            </div>
            <div className="w-full pt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <div className="mx-auto flex h-[15rem] w-[13rem] lg:h-[20rem] lg:w-[17rem] items-center justify-center">
                    <img
                      src={rewardHarapan1}
                      alt="Harapan 1"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p className="text-[1.5rem] font-medium text-white text-center -mt-2">Samsung S22 5G</p>
                </div>
                <div>
                  <div className="mx-auto flex h-[15rem] w-[13rem] lg:h-[20rem] lg:w-[17rem] items-center justify-center">
                    <img
                      src={rewardHarapan2}
                      alt="Harapan 2"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p className="text-[1.5rem] font-medium text-white text-center -mt-2">Samsung S21 FE 5G</p>
                </div>
                <div>
                  <div className="mx-auto flex h-[15rem] w-[13rem] lg:h-[20rem] lg:w-[17rem] items-center justify-center">
                    <img
                      src={rewardHarapan3}
                      alt="Harapan 3"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p className="text-[1.5rem] font-medium text-white text-center -mt-2">Samsung S20 FE</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[2rem] bg-[radial-gradient(50%_18px_at_50%_0%,#000_0%,transparent_100%)] mt-12 mb-8 md:mt-14 md:mb-10">
            &nbsp;
          </div>
          <div className="space-y-[3rem]">
            <div className="px-2 md:px-8 lg:px-3 xl:px-2">
              <Link
                to="https://bit.ly/sidequestsubmission"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <div className="flex justify-center">
                  <div className="w-full max-w-[28.5rem] md:max-w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-10 bg-cover bg-center bg-no-repeat rounded-[10px]"
                    style={{
                      backgroundImage: `url(${bgLinkQuest})`,
                    }}
                  >
                    <div className="w-full md:w-1/2 md:text-left p-7">
                      <p className="text-[1.5rem] lg:text-[2.5rem] font-extrabold text-white">SIDE QUEST</p>
                      <p className="leading-6 text-lg md:text-[19px] lg:text-[1.75rem] font-medium text-white tracking-tight">Klik untuk lihat info detail <ChevronRight className="inline-flex -ml-2.5 size-5 lg:-ml-3 lg:-mt-1 lg:size-7" /></p>
                      <p className="leading-6 text-lg md:text-[19px] lg:text-[1.75rem] font-medium text-white">Juara Favorit:</p>
                      <p className="leading-6 text-lg md:text-[19px] lg:text-[1.75rem] font-bold text-white">Xiaomi Watch S1 Active</p>
                    </div>
                    <div className="md:w-1/2 p-7 lg:p-0 relative lg:left-10 xl:left-15">
                      <img
                        src={linkSideQuest}
                        alt="Side Quest"
                        className="mx-auto w-full max-w-md object-contain md:max-w-xl"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="px-2 md:px-8 lg:px-3 xl:px-2 flex justify-center">
              <div className="w-full max-w-[28.5rem] md:max-w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-10 bg-cover bg-center bg-no-repeat rounded-[10px]"
                style={{
                  backgroundImage: `url(${bgLinkQuest})`,
                }}
              >
                <div className="w-full md:w-1/2 md:text-left p-7">
                  <p className="text-[1.5rem] lg:text-[2.5rem] font-extrabold text-white">WEEKLY QUEST JOURNEY</p>
                  <p className="leading-6 text-lg md:text-[19px] lg:text-[1.75rem] font-medium text-white tracking-tight">Updated every week!!</p>
                  <p className="leading-6 text-lg md:text-[19px] lg:text-[1.75rem] font-medium text-white">Juara Mingguan</p>
                  <p className="leading-6 text-lg md:text-[19px] lg:text-[1.75rem] font-bold text-white">Total Hadiah 10 juta + Triv Merch</p>
                </div>
                <div className="md:w-1/2 p-7 lg:p-0 relative lg:left-10 xl:left-15">
                  <img
                    src={linkWeeklyQuestJourney}
                    alt="Weekly Quest Journey"
                    className="mx-auto w-full max-w-md object-contain md:max-w-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pendaftaran-section overflow-hidden bg-cover bg-left bg-no-repeat"
        style={{
          backgroundImage: `url(${pendaftaranBackground})`,
        }}
      >
        <div className="max-w-[96rem] mx-auto flex flex-col items-center justify-between gap-8 py-15 md:flex-row md:items-center md:gap-0 lg:py-[4rem]">
          <div className="z-10 w-full text-center md:text-left md:w-[48%] md:pl-6 lg:pl-11">
            <p className="text-[1.5rem] lg:text-[2rem] xl:text-[2.25rem] font-bold text-white leading-7 md:leading-8 xl:leading-10 tracking-tight">
              Cara Pendaftaran
            </p>
            <p className="mt-3 text-lg lg:text-[1.5rem] xl:text-[1.625rem] font-medium text-white leading-6 md:leading-7 lg:leading-8 tracking-tight">
              Cukup Memiliki Akun Triv dan Trading di Triv Selama Durasi Event
            </p>
            <div className="px-3 md:px-0">
              <Link
                to="https://triv.co.id/id/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full md:w-max items-center justify-center mt-4 text-lg md:text-xl rounded-sm bg-[#3289C6] px-6 py-4 font-medium text-white transition hover:bg-[#0087E6]"
              >
                Daftar Sekarang <ChevronRight className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="relative flex w-full justify-end md:w-[52%]">
            <img
              src={trivOnLaptop}
              alt="Triv on laptop"
              className="w-full object-cover lg:object-fill object-left max-w-[30rem] md:h-[24rem] lg:h-[30rem] md:max-w-none -mr-[6rem] sm:-mr-[9rem] md:-mr-[10%]"
            />
          </div>
        </div>
      </section>

      <section className="leaderboard-section bg-[#515151] px-3">
        <div className="md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-[82rem] mx-auto py-6 md:py-[3rem]">
          <div className="space-y-[3rem]">
            <div className="text-center">
              <span className="text-[2rem] lg:text-[2.75rem] font-extrabold text-white [text-shadow:_-9.2px_3.9px_0_rgba(0,0,0,0.4)] lg:[text-shadow:_8.1px_5.9px_0_rgba(0,0,0,0.4)] leading-10 border border-x-0 border-t-0 border-b-[#4D75B3] border-b-[1rem]">
                LEADERBOARD SAAT INI
              </span>
            </div>
            <div className="space-y-4 lg:space-y-1 md:px-8">
              <div className="space-y-[2rem] lg:space-y-[6rem]">
                <div className="w-full bg-[#161c2a] px-4 py-2.5 lg:px-6 lg:py-4 flex items-center gap-4 lg:gap-8 h-[3.5rem] lg:h-[5rem] rounded-[1.25rem]">
                  <img
                    src={leaderboardTimer}
                    alt="Leaderboard timer"
                    className="size-[1.5rem] lg:size-[3rem]"
                  />
                  <p className="text-lg lg:text-[2rem] text-white font-bold">EXPIRED</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-4">
                  {dataLeaderboard.map((item: LeaderboardData, index) => {
                    const rankImage = leaderboardRankImages[index]
                    const rankOrderClass = leaderboardRankOrderClasses[index]

                    return (
                      <div
                        key={index}
                        className={`flex flex-row lg:flex-col w-full items-center gap-4 lg:gap-7 rounded-[1.25rem] bg-black bg-cover bg-center bg-no-repeat px-[2rem] py-[1.75rem] lg:pt-0 ${rankOrderClass}`}
                        style={{
                          backgroundImage: `url(${leaderboardRankBg})`,
                        }}
                      >
                        <img
                          src={rankImage}
                          alt={`Leaderboard rank ${index + 1}`}
                          className="size-[4rem] lg:size-[10rem] lg:-mt-[25%] lg:mix-blend-lighten"
                        />
                        <div className="lg:space-y-5">
                          <p className="text-xl lg:text-[2rem] text-white font-semibold lg:text-center">{item.name}</p>
                          <p className="text-2xl lg:text-[2.625rem] text-[#58bd7d] font-extrabold lg:text-center">{item.amount}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <img
                src={leaderboardPodium}
                alt="Leaderboard podium"
                className="w-full"
              />
            </div>
            <div className="text-center mx-3 md:mx-[4rem]">
              <Link
                to="https://triv.co.id/id/tradingfest/leaderboard"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full lg:w-max items-center justify-center text-lg md:text-xl rounded-sm bg-[#3289C6] px-6 py-4 font-medium text-white transition hover:bg-[#0087E6]"
              >
                Lihat Semua <ChevronRight className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="peraturan-section bg-[#242424] px-3">
        <div className="md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-[82rem] mx-auto py-6 md:py-[3rem]">
          <div className="space-y-[3rem]">
            <div className="text-center">
              <span className="text-[2rem] lg:text-[2.75rem] font-extrabold text-white [text-shadow:_-9.2px_3.9px_0_rgba(0,0,0,0.4)] lg:[text-shadow:_8.1px_5.9px_0_rgba(0,0,0,0.4)] leading-10 border border-x-0 border-t-0 border-b-[#4D75B3] border-b-[1rem]">
                PERATURAN KOMPETISI
              </span>
            </div>
            <Accordion className="space-y-4">
              <AccordionItem value="item-1" className="bg-[#333333] rounded-[1.25rem] py-[1rem] px-[2.5rem] md:py-[2rem]">
                <AccordionTrigger className="text-xl md:text-2xl text-white font-bold">
                  General Rules
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  <ol className="list-decimal space-y-2 pl-6 text-left">
                    <li className="font-medium md:text-lg">Wajib memiliki Akun Triv</li>
                    <li className="font-medium md:text-lg">Lakukan transaksi untuk mendapatkan persentase keuntungan sebesar-besarnya selama periode kompetisi.</li>
                    <li className="font-medium md:text-lg">Periode kompetisi dimulai pada 20 Juni 2022 - 20 Juli 2022.</li>
                    <li className="font-medium md:text-lg">Kompetisi ini diberlakukan untuk seluruh member Triv tanpa terkecuali.</li>
                    <li className="font-medium md:text-lg">Pemenang Side Quest (Juara Harapan) bisa diraih dengan mengikuti aturan di halaman Triv Quest Reward.</li>
                    <li className="font-medium md:text-lg">
                      Gabung dengan komunitas member Triv lainnya di <Link
                      to="https://t.me/TrivofficialGroup"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0C6FFD]">Telegram</Link> untuk mendapatkan update seputar market untuk membantumu menganalisa pergerakan harga.
                    </li>
                    <li className="font-medium md:text-lg">
                      Follow <Link
                      to="https://www.instagram.com/trivindo/?hl=id"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0C6FFD]">Instagram</Link> dan <Link
                      to="https://www.facebook.com/TrivIndonesia/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0C6FFD]">Facebook</Link>  untuk mendapatkan update seputar pemenang Mingguan.
                    </li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-[#333333] rounded-[1.25rem] py-[1rem] px-[2.5rem] md:py-[2rem]">
                <AccordionTrigger className="text-xl md:text-2xl text-white font-bold">
                  Requirement
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  <ul className="list-disc space-y-2 pl-6 text-left">
                    <li className="font-medium md:text-lg">Peserta harus memiliki KTP</li>
                    <li className="font-medium md:text-lg">Peserta boleh perorangan maupun korporasi</li>
                    <li className="font-medium md:text-lg">Peserta hanya melakukan transaksi jual beli saja (staking dan gadai tidak termasuk)</li>
                    <li className="font-medium md:text-lg">Hasil Likuidasi posisi di atas tanggal 20 Juli 2022 tidak dihitung</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  )
}

export default TradingFestPage
