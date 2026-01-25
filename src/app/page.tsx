import Image from "next/image";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next"

const about = "https://www.instagram.com/p/DTQauwTjrN5/?igsh=MTR6eHM3eDd6azdibg==";
const contact = "";
const portfolio = "https://www.instagram.com/inovart.designer_?igsh=MTkxOXlxdG80bHcydg==";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-300 select-none">
      <main
        className="
          min-h-screen
          w-full
          bg-linear-to-r from-zinc-300 via-zinc-100 to-zinc-300
          shadow-[inset_60px_0_80px_-40px_rgba(0,0,0,0.30),inset_-60px_0_80px_-40px_rgba(0,0,0,0.30)]
        ">
          <Analytics/>
          <header className="flex p-1.5 md:p-2.5 justify-center">
            <div className="w-full max-w-2xs md:max-w-5xl mt-20">
              <Link href="#" className="bg-[#e4600f] p-2.5 text-xs md:text-base text-white rounded-2xl">
                Home
              </Link>
            </div>
          </header>
          <div className="flex flex-row p-8 justify-center">
            <div className="flex flex-col gap-3 md:gap-10 -rotate-z-6">
              <h1 className="text-2xl md:text-8xl font-kagitingan text-gray-700">Inov<span className="text-[#e4600f]">art</span> Designer</h1>
              <h1 className="text-xl md:text-6xl font-brittany text-gray-700">Inovação + Arte, em cada detalhe!</h1>
            </div>
            <div className="max-w-24 md:max-w-3xl">
              <Image
                src="/images/inovart-logo.png"
                alt="logo"
                width={300}
                height={200}
                priority
              />
            </div>
          </div>
          
          <div className="flex flex-row p-8 justify-center gap-3 md:gap-5">
            <Link href={about} className="bg-[#e4600f] px-4 md:px-8 p-1.5 md:p-2.5 text-xs md:text-base text-white rounded-2xl" >SOBRE</Link>
            <Link href={contact} className="bg-[#e4600f] px-4 md:px-8 p-1.5 md:p-2.5 text-xs md:text-base text-white rounded-2xl" >CONTATO</Link>
            <Link href={portfolio} className="bg-[#e4600f] px-4 md:px-8 p-1.5 md:p-2.5 text-xs md:text-base text-white rounded-2xl" >PORTFÓLIO</Link>
          </div>

          <div className="flex flex-col md:flex-row p-8 justify-center gap-5">
            <div className="w-85">
              <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-zinc-900 shadow-lg">
                <div className="relative h-47.5 w-full">
                  <Image
                    src="/images/camisa.jpg"
                    alt="Fardamentos"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/25 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h2 className="text-3xl font-bold text-white">Fardamentos</h2>
                  <p className="mt-1 max-w-[26ch] text-sm font-medium text-white/80">
                    Futebol, faculdade, empresas, entre outras.
                  </p>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/20" />
              </div>
            </div>

            <div className="w-85">
              <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-zinc-900 shadow-lg">
                <div className="relative h-47.5 w-full">
                  <Image
                    src="/images/identidade-visual.png"
                    alt="Logo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/25 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h2 className="text-3xl font-bold text-white">Identidade Visual</h2>
                  <p className="mt-1 max-w-[26ch] text-sm font-medium text-white/80">
                    Sua empresa ou negócio transmitindo a imagem correta.
                  </p>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/20" />
              </div>
            </div>

            <div className="w-85">
              <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-zinc-900 shadow-lg">
                <div className="relative h-47.5 w-full">
                  <Image
                    src="/images/banner.png"
                    alt="Artes"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/25 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h2 className="text-3xl font-bold text-white">Artes Digitais</h2>
                  <p className="mt-1 max-w-[26ch] text-sm font-medium text-white/80">
                    Divulgação de eventos de toda e qualquer espécie.
                  </p>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/20" />
              </div>
            </div>
          </div>

          <footer className="w-full">
          <div className="mx-auto max-w-6xl px-4 py-6">
            <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-center md:text-center">
              <div className="text-sm text-zinc-900">
                <span className="font-semibold text-zinc-700">Inovart Design</span> ·
                <span className="ml-2">Girau do Ponciano · AL</span>
              </div>
            </div>

            <div className="mt-4 text-center text-xs text-zinc-500 md:text-center">
              © {new Date().getFullYear()} Inovart Design. Todos os direitos reservados. <br />
              Developed by <Link href="https://instagram.com/tiallyssoncosta">Tiallysson Costa</Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
