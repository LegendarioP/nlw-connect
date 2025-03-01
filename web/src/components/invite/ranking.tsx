import { getRanking } from "@/http/nlw-api"
import Image from "next/image"
import cooper from "../../assets/medal-cooper.svg"
import gold from "../../assets/medal-gold.svg"
import silver from "../../assets/medal-silver.svg"

export default async function Ranking() {
  const { ranking } = await getRanking()

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {/* <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1º</span> | Diego Fernandes
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>
          <Image src={gold} alt="" className="absolute right-8 top-0" />
        </div>
         */}
        {ranking.map((item, index) => {
          return (
            <div
              key={item.id}
              className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
            >
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">{index + 1}º</span> |{" "}
                {item.name}
              </span>
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                {item.score}
              </span>
              {index + 1 === 1 && (
                <Image
                  src={gold}
                  alt="Gold Medal"
                  className="absolute right-8 top-0"
                />
              )}
              {index + 1 === 2 && (
                <Image
                  src={silver}
                  alt="Silver Medal"
                  className="absolute right-8 top-0"
                />
              )}
              {index + 1 === 3 && (
                <Image
                  src={cooper}
                  alt="Cooper Medal"
                  className="absolute right-8 top-0"
                />
              )}
            </div>
          )
        })}

        {/* <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2º</span> | Diego Fernandes
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>
          <Image src={silver} alt="" className="absolute right-8 top-0" />
        </div>
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3º</span> | Diego Fernandes
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>
          <Image src={cooper} alt="" className="absolute right-8 top-0" />
        </div> */}
      </div>
    </div>
  )
}
