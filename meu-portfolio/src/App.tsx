import { useState } from "react";

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="pill">{children}</span>;
}

type Project = {
  id: string;
  title: string;
  year: string;
  type: string;
  image: string;
  description: string;
  video?: string;        // agora opcional
  images?: string[];     // galeria opcional
  disabled?: boolean;
};

export default function App() {

  // -------- dados dos projetos + estado do modal --------
  const projects: Project[] = [
    {
      id: "casa-mais",
      title: "Casa Mais Construção",
      year: "2024",
      type: "Web Application",
      image:
        "https://images.unsplash.com/photo-1567443024551-f3e3cc2be870?q=80&w=1600&auto=format&fit=crop",
      video: "/CasaMaisSite.mp4", // troque pelo link real
      description: `Casa Mais - Material de Construção.

✅- Criação de um site moderno e funcional para uma loja de material de construção, com foco em melhorar a experiência do cliente e otimizar o trabalho interno dos vendedores.
✅- Acompanhamento engajado com reels, carrossel de posts, gestão do design visual e da comunicação comercial no Instagram da empresa Casa Mais, especializada na venda objetiva e prática de produtos para construção.

🔧 Funcionalidades desenvolvidas:

🧑‍💼 Área do Vendedor (Sistema Interno):
- Registro de entregas realizadas.
- Visualização e controle de pedidos.
- Marcação de produtos em falta na loja.

🤖 Agente de Inteligência Artificial Personalizado:

- Treinado com todas as marcas e produtos que a loja trabalha.
- Capaz de responder dúvidas frequentes.`,
    },
    {
      id: "alpha-tech",
      title: "Alpha Tech",
      year: "2024",
      type: "Web Design & Development",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop",
      images: [
        "/alpha_1.png",
        "/alpha_2.png",
        "/alpha_3.png",
        "/alpha_4.png",
        "/alpha_5.png",
        "/alpha_1.jpg",
      ],
      description: `Alpha Tech.
Criação e gestão do design visual e da comunicação comercial no Instagram da empresa Alpha Tech. Desenvolvimento do layout e estrutura visual do site institucional da marca, especializada na venda de produtos tecnológicos e soluções técnicas.

🖥️ Catálogo de Produtos:
- Lista completa de celulares disponíveis, com imagens, preços e descrições.
- Filtro por marca, preço e características técnicas.
- Layout responsivo e clean, adaptado para mobile e desktop.

🧭 Navegação Intuitiva:
- Menu moderno com fácil acesso às categorias.
- Página de produto detalhada, com botão de compra, WhatsApp ou formulário de pedido.

🖌️ Design Moderno:
- Visual atual, com foco em cores neutras e elementos destacados.
- Tipografia legível, espaçamento equilibrado e banners promocionais.`,
    },
    {
      id: "saas-analytics",
      title: "SaaS Analytics",
      year: "2025",
      type: "Dashboard",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
      video: "",
      description: "Em desenvolvimento.",
      disabled: true,
    },
  ];

  const [selected, setSelected] = useState<Project | null>(null);


  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d0d0d] to-[#0b0b0f] text-white">
      {/* NAVBAR */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <h1 className="text-lg font-bold">Kauan Izar</h1>
        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#inicio" className="hover:text-white">Início</a>
          <a href="#sobre" className="hover:text-white">Sobre</a>
          <a href="#projetos" className="hover:text-white">Projetos</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="flex flex-col items-center text-center py-20">
        <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Designer{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Developer
          </span>
        </h2>
        <button className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 font-semibold shadow-lg hover:opacity-90">
          Ver Projetos
        </button>

        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
          {["UI/UX Design", "Frontend Development", "Brand Identity", "Full-Stack"].map((item) => (
            <span
              key={item}
              className="px-4 py-1 rounded-full border border-gray-700 hover:border-gray-500 transition"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* SOBRE MIM */}
      <section id="sobre" className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h3 className="text-3xl font-bold text-blue-400 mb-6">Sobre Mim</h3>
          <p className="mb-4 text-gray-300">
            Sou um profissional multidisciplinar especializado em criar experiências digitais únicas e impactantes. Minha paixão está em transformar ideias em realidade através do design e da tecnologia.
          </p>
          <p className="mb-4 text-gray-300">
            <strong className="text-white">Identidade Visual:</strong> Desenvolvo sistemas de identidade completos, desde logotipos até guidelines de marca, criando conexões autênticas entre empresas e seus públicos.
          </p>
          <p className="mb-4 text-gray-300">
            <strong className="text-white">Agente de I.A.:</strong> Trabalho com inteligência artificial para otimizar processos criativos e desenvolver soluções inovadoras que potencializam resultados.
          </p>
          <p className="text-gray-300">
            <strong className="text-white">Desenvolvimento Frontend:</strong> Especialista em criar interfaces modernas e responsivas, utilizando as mais recentes tecnologias para entregar experiências excepcionais.
          </p>
        </div>
        <div>
          <img
            src="/Kauan_Izar_Mano.jpg"
            alt="Foto"
            className="rounded-xl shadow-lg object-cover w-full h-[320px]"
          />
        </div>
      </section>

      {/* PROJETOS (refeito, com modal nos 2 primeiros) */}
      <section id="projetos" className="section py-16">
        <div className="mx-auto max-w-5xl">
          {/* filtros */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <button className="px-4 py-1 rounded-full text-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent shadow hover:opacity-90">
              Todos
            </button>
            <button className="px-4 py-1 rounded-full text-sm border border-white/10 text-white/80 hover:text-white hover:border-white/25 transition">
              Design
            </button>
            <button className="px-4 py-1 rounded-full text-sm border border-white/10 text-white/80 hover:text-white hover:border-white/25 transition">
              Development
            </button>
          </div>

          {/* grid centralizada */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
            {projects.map((p) => (
              <article
                key={p.id}
                onClick={() => !p.disabled && setSelected(p)}
                className={`group w-full max-w-sm rounded-2xl border border-white/10 bg-white/[0.03] transition relative ${p.disabled
                  ? "opacity-60 cursor-not-allowed"
                  : "hover:bg-white/[0.05] cursor-pointer"
                  }`}
              >
                <div className="relative overflow-hidden rounded-t-2xl h-40">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute left-3 bottom-3 text-[11px] font-medium rounded-full bg-blue-600/90 px-2 py-1">
                    {p.type}
                  </span>
                  <span className="absolute right-3 bottom-3 text-[11px] font-medium text-white/80">
                    {p.year}
                  </span>

                  {/* Hover "EM DESENVOLVIMENTO" no card 3 */}
                  {p.disabled && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition">
                      EM DESENVOLVIMENTO
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-1">{p.title}</h4>
                  <p className="text-sm text-white/70">
                    {p.description.split("\n")[0]}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {/* tags de exemplo */}
                    {p.id === "casa-mais" && (
                      <>
                        <span className="rounded-md bg-white/[0.06] border border-white/10 text-[11px] px-2 py-1 text-white/70">React</span>
                        <span className="rounded-md bg-white/[0.06] border border-white/10 text-[11px] px-2 py-1 text-white/70">Node.js</span>
                      </>
                    )}
                    {p.id === "alpha-tech" && (
                      <>
                        <span className="rounded-md bg-white/[0.06] border border-white/10 text-[11px] px-2 py-1 text-white/70">React</span>
                        <span className="rounded-md bg-white/[0.06] border border-white/10 text-[11px] px-2 py-1 text-white/70">Design</span>
                        <span className="rounded-md bg-white/[0.06] border border-white/10 text-[11px] px-2 py-1 text-white/70">+2</span>
                      </>
                    )}
                    {p.id === "saas-analytics" && (
                      <>
                        <span className="rounded-md bg-white/[0.06] border border-white/10 text-[11px] px-2 py-1 text-white/70">TypeScript</span>
                        <span className="rounded-md bg-white/[0.06] border border-white/10 text-[11px] px-2 py-1 text-white/70">Tailwind</span>
                      </>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* MODAL / OVERLAY */}
        {selected && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
            <div className="bg-[#0b0b0f] max-w-3xl w-full rounded-xl shadow-lg max-h-[90vh] overflow-y-auto">
              {/* header */}
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <div>
                  <h3 className="text-lg font-semibold">{selected.title}</h3>
                  <p className="text-xs text-white/60">{selected.type} • {selected.year}</p>
                </div>
                <button
                  className="text-white/70 hover:text-white text-2xl leading-none"
                  onClick={() => setSelected(null)}
                  aria-label="Fechar"
                >
                  ×
                </button>
              </div>

              {/* conteúdo (vídeo OU galeria) */}
              <div className="p-6 space-y-4">
                {selected.images?.length ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {selected.images.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`${selected.title} ${i + 1}`}
                        loading="lazy"
                        className="w-full aspect-[4/3] object-cover rounded-lg"
                      />
                    ))}
                  </div>
                ) : selected.video ? (
                  <iframe
                    className="w-full aspect-video rounded-lg"
                    src={selected.video}
                    title={selected.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : null}

                <pre className="whitespace-pre-wrap text-white/85 text-sm leading-relaxed">
                  {selected.description}
                </pre>
              </div>
            </div>
          </div>
        )}
      </section>

    </div>
  );
}

