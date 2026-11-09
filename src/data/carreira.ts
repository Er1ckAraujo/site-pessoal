// Trajetória, conferida cargo a cargo com o LinkedIn em 2026-11-09.
// start/end no formato AAAA-MM; end vazio = cargo atual. Nada da Efí além do que já é público.
export type Cargo = {
  role: string;
  org: string;
  period: string;
  start: string;
  end?: string;
  text: string;
};

export const carreira: Cargo[] = [
  {
    role: 'Engenheiro de Dados',
    org: 'Efí Bank',
    period: 'jan/2026 – hoje',
    start: '2026-01',
    text: 'Construo e mantenho os fluxos de dados que levam os dados de arquivos brutos até tabelas prontas para análise e para a operação. Faço a modelagem das camadas, defino regras de qualidade e de manutenibilidade e documento cada tabela. Também conduzo migrações de fontes com validação entre ambientes, para que nada regrida. Transformo validações que levavam dias em operações que rodam em minutos. Os temas principais são conciliação financeira, receitas, crédito e meios de pagamento.',
  },
  {
    role: 'Analista de MIS e Sistemas de Crédito II',
    org: 'Efí Bank',
    period: 'mar/2025 – dez/2025',
    start: '2025-03',
    end: '2025-12',
    text: 'Cuidava dos indicadores, dashboards e bases que acompanhavam as operações e os produtos de crédito. Automatizei rotinas com Python e SQL e construí processos de conciliação entre sistemas financeiros, que apontavam as divergências e o que precisava ser corrigido. Foi nesse cargo que juntei a base técnica e de negócio para a mudança para engenharia de dados.',
  },
  {
    role: 'Assistente de Dados',
    org: 'Efí Bank',
    period: 'out/2022 – mar/2025',
    start: '2022-10',
    end: '2025-03',
    text: 'No time de MIS, fazia a ponte entre o time técnico de dados e as áreas de negócio. Transformava as necessidades de cada área em painéis, apresentações e processos automatizados, gerando os indicadores usados nas decisões.',
  },
  {
    role: 'Estagiário em Estatística',
    org: 'Oper',
    period: 'jun/2021 – out/2022',
    start: '2021-06',
    end: '2022-10',
    text: 'Atuei como consultor estatístico em formação, com foco em ciência de dados: analisava e interpretava dados para apoiar decisões de empresas, preparava bases, construía indicadores e apresentava os resultados. As ferramentas principais eram R, R Shiny e Excel.',
  },
  {
    role: 'Diretor de Projetos',
    org: 'Estatis Jr · UFOP',
    period: 'abr – nov/2019',
    start: '2019-04',
    end: '2019-11',
    text: 'Na empresa júnior do curso de Estatística da UFOP, coordenava o planejamento e a execução dos projetos, acompanhava o cronograma de entregas e propunha formas de ampliar os serviços. Também cuidei das redes sociais da empresa na diretoria de marketing.',
  },
];
