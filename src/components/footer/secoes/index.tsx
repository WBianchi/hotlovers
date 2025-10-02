import Link from "next/link";

interface SecoesProps {
  className?: string;
}

const secoes = [
  {
    titulo: "Plataforma",
    links: [
      { href: "/", label: "Início" },
      { href: "/modelos", label: "Modelos" },
      { href: "/modelos-hot", label: "Hot Models" },
      { href: "/hot-videos", label: "Hot Vídeos" },
      { href: "/sobre", label: "Sobre Nós" },
      { href: "/blog", label: "Blog" }
    ]
  },
  {
    titulo: "Para Modelos",
    links: [
      { href: "/cadastro?tipo=modelo", label: "Seja Modelo" },
      { href: "/modelo/visao-geral", label: "Painel Modelo" },
      { href: "/politicas-modelos", label: "Políticas" },
      { href: "/atendimento", label: "Suporte" },
      { href: "/ganhos-modelo", label: "Como Ganhar" }
    ]
  },
  {
    titulo: "Para Assinantes",
    links: [
      { href: "/cadastro?tipo=assinante", label: "Assinar Agora" },
      { href: "/assinante/minha-assinatura", label: "Minha Conta" },
      { href: "/planos", label: "Planos" },
      { href: "/duvidas-frequentes", label: "FAQ" },
      { href: "/como-funciona", label: "Como Funciona" }
    ]
  },
  {
    titulo: "Programa de Afiliados",
    links: [
      { href: "/afiliados", label: "Seja Afiliado" },
      { href: "/afiliados/como-funciona", label: "Como Funciona" },
      { href: "/afiliados/comissoes", label: "Comissões" },
      { href: "/afiliados/materiais", label: "Materiais" }
    ]
  },
  {
    titulo: "Legal & Suporte",
    links: [
      { href: "/termos-condicoes", label: "Termos de Uso" },
      { href: "/politicas-privacidade", label: "Privacidade" },
      { href: "/cookies", label: "Política de Cookies" },
      { href: "/atendimento", label: "Contato" },
      { href: "/seguranca", label: "Segurança" }
    ]
  }
];

export function Secoes({ className }: SecoesProps) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 ${className || ""}`}>
      {secoes.map((secao) => (
        <div key={secao.titulo}>
          <h3 className="font-bold text-lg mb-4 text-hotlovers-red">
            {secao.titulo}
          </h3>
          <ul className="space-y-3">
            {secao.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground hover:text-hotlovers-red transition-colors duration-300 text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Secoes;
