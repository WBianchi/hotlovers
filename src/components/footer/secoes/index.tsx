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
    ]
  },
  {
    titulo: "Para Modelos",
    links: [
      { href: "/cadastro?tipo=modelo", label: "Seja Modelo" },
      { href: "/modelo/visao-geral", label: "Painel Modelo" },
      { href: "/politicas-modelos", label: "Políticas para Modelos" },
      { href: "/atendimento", label: "Suporte" },
    ]
  },
  {
    titulo: "Para Assinantes",
    links: [
      { href: "/cadastro?tipo=assinante", label: "Assinar" },
      { href: "/assinante/minha-assinatura", label: "Minha Conta" },
      { href: "/politicas-assinantes", label: "Políticas" },
      { href: "/duvidas-frequentes", label: "FAQ" },
    ]
  },
  {
    titulo: "Legal",
    links: [
      { href: "/termos-condicoes", label: "Termos e Condições" },
      { href: "/politicas-privacidade", label: "Privacidade" },
      { href: "/cookies", label: "Cookies" },
      { href: "/atendimento", label: "Contato" },
    ]
  },
];

export function Secoes({ className }: SecoesProps) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${className || ""}`}>
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
