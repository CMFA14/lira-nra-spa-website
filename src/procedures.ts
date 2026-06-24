export type Procedure = {
  description: string;
  benefits: string[];
};

// Mapa de procedimentos: nome do item -> descrição e benefícios
export const procedures: Record<string, Procedure> = {
  // ─── Estética Facial ───────────────────────────────────────────
  'Limpeza de Pele': {
    description:
      'Procedimento profundo de higienização facial que remove impurezas, cravos, células mortas e o excesso de oleosidade, preparando a pele para receber ativos e tratamentos.',
    benefits: [
      'Remove cravos e impurezas profundas',
      'Desobstrui os poros e controla a oleosidade',
      'Renova e ilumina a pele',
      'Melhora a absorção de cosméticos',
    ],
  },
  'Peeling de Diamante': {
    description:
      'Esfoliação mecânica com ponteira diamantada que promove a renovação celular, suavizando a textura da pele de forma segura e indolor.',
    benefits: [
      'Renovação celular acelerada',
      'Reduz manchas e marcas superficiais',
      'Suaviza linhas finas',
      'Pele mais lisa, uniforme e luminosa',
    ],
  },
  'Hidratação Facial': {
    description:
      'Reposição intensa de água e nutrientes na pele através de ativos hidratantes de alta performance, devolvendo viço e maciez.',
    benefits: [
      'Repõe a hidratação natural da pele',
      'Devolve viço e elasticidade',
      'Previne o envelhecimento precoce',
      'Conforto imediato e sensação de pele saudável',
    ],
  },
  'Revitalização Facial': {
    description:
      'Conjunto de técnicas que estimulam a renovação e revitalização da pele, devolvendo energia, firmeza e um aspecto descansado ao rosto.',
    benefits: [
      'Estimula a renovação da pele',
      'Melhora firmeza e elasticidade',
      'Reduz o aspecto de cansaço',
      'Realça o brilho natural',
    ],
  },
  Rejuvenescimento: {
    description:
      'Protocolos avançados focados na redução de sinais do tempo, estimulando colágeno e firmeza para um rosto mais jovem e harmonioso.',
    benefits: [
      'Estimula a produção de colágeno',
      'Atenua rugas e linhas de expressão',
      'Melhora o contorno facial',
      'Efeito lifting e rejuvenescedor',
    ],
  },
  'Rejuvenescimento Facial': {
    description:
      'Protocolos avançados focados na redução de sinais do tempo, estimulando colágeno e firmeza para um rosto mais jovem e harmonioso.',
    benefits: [
      'Estimula a produção de colágeno',
      'Atenua rugas e linhas de expressão',
      'Melhora o contorno facial',
      'Efeito lifting e rejuvenescedor',
    ],
  },
  'Protocolos Capilares': {
    description:
      'Tratamentos voltados à saúde do couro cabeludo e dos fios, combatendo queda, oleosidade e fortalecendo o crescimento saudável.',
    benefits: [
      'Fortalece os fios e reduz a queda',
      'Equilibra o couro cabeludo',
      'Estimula o crescimento saudável',
      'Cabelos mais fortes e brilhantes',
    ],
  },
  'Extensão de Cílios': {
    description:
      'Aplicação fio a fio de cílios para realçar o olhar com naturalidade e elegância, dispensando o uso de máscara no dia a dia.',
    benefits: [
      'Olhar marcante e expressivo',
      'Aspecto natural e duradouro',
      'Dispensa o uso de rímel',
      'Praticidade na rotina de beleza',
    ],
  },

  // ─── Estética Corporal ─────────────────────────────────────────
  'Drenagem Linfática': {
    description:
      'Massagem manual suave e ritmada que estimula o sistema linfático, eliminando toxinas e o excesso de líquidos retidos no corpo.',
    benefits: [
      'Reduz o inchaço e a retenção de líquidos',
      'Elimina toxinas do organismo',
      'Melhora a circulação',
      'Sensação de leveza e bem-estar',
    ],
  },
  'Pós-operatório': {
    description:
      'Atendimento especializado para o período de recuperação após cirurgias, acelerando a cicatrização e reduzindo edemas com segurança.',
    benefits: [
      'Acelera a recuperação pós-cirúrgica',
      'Reduz edemas e desconfortos',
      'Previne fibroses e aderências',
      'Acompanhamento seguro e humanizado',
    ],
  },
  'Massagem Modeladora': {
    description:
      'Massagem firme e vigorosa que atua na modelagem do corpo, quebrando gordura localizada e definindo o contorno corporal.',
    benefits: [
      'Combate a gordura localizada',
      'Define e modela o contorno corporal',
      'Melhora a circulação',
      'Auxilia na redução de medidas',
    ],
  },
  Emagrecimento: {
    description:
      'Protocolos integrados que combinam técnicas manuais e ativos para potencializar a perda de medidas e a definição corporal.',
    benefits: [
      'Auxilia na redução de medidas',
      'Ativa o metabolismo local',
      'Melhora a aparência da pele',
      'Resultados visíveis e progressivos',
    ],
  },
  'Celulite & Flacidez': {
    description:
      'Tratamentos específicos que atuam na redução dos furos da celulite e no estímulo de colágeno para combater a flacidez.',
    benefits: [
      'Suaviza o aspecto da celulite',
      'Estimula firmeza e tonicidade',
      'Melhora a textura da pele',
      'Contorno corporal mais harmônico',
    ],
  },
  Bambuterapia: {
    description:
      'Massagem realizada com roletes de bambu de diferentes tamanhos que modela o corpo e relaxa a musculatura profundamente.',
    benefits: [
      'Modela e tonifica o corpo',
      'Relaxa a musculatura profunda',
      'Reduz medidas e celulite',
      'Promove bem-estar e leveza',
    ],
  },
  'Pedras Quentes': {
    description:
      'Terapia que utiliza pedras vulcânicas aquecidas posicionadas em pontos estratégicos do corpo, proporcionando relaxamento profundo.',
    benefits: [
      'Relaxamento muscular profundo',
      'Alivia tensões e dores',
      'Melhora a circulação',
      'Equilíbrio energético e mental',
    ],
  },

  // ─── Spa e Relaxamento ─────────────────────────────────────────
  'Spa dos Pés': {
    description:
      'Ritual completo de cuidado para os pés, combinando esfoliação, hidratação e massagem relaxante para renovar suas energias.',
    benefits: [
      'Hidrata e renova a pele dos pés',
      'Alivia o cansaço e a tensão',
      'Estimula pontos relaxantes',
      'Sensação de bem-estar total',
    ],
  },
  'Escalda-pés Relaxante': {
    description:
      'Imersão dos pés em água morna com ervas e sais aromáticos, proporcionando relaxamento profundo do corpo e da mente.',
    benefits: [
      'Relaxa o corpo inteiro',
      'Alivia o cansaço dos pés',
      'Reduz o estresse',
      'Promove uma noite de sono melhor',
    ],
  },
  Aromaterapia: {
    description:
      'Uso terapêutico de óleos essenciais naturais que atuam no equilíbrio emocional, no relaxamento e na harmonização da energia.',
    benefits: [
      'Reduz ansiedade e estresse',
      'Equilibra as emoções',
      'Promove relaxamento profundo',
      'Estimula sensação de bem-estar',
    ],
  },
  'Experiências Sensoriais': {
    description:
      'Vivências que envolvem todos os sentidos com aromas, sons, texturas e iluminação para uma desconexão completa do dia a dia.',
    benefits: [
      'Desperta todos os sentidos',
      'Promove desconexão e calma',
      'Reduz o estresse acumulado',
      'Experiência única e memorável',
    ],
  },
  'Rituais de Relaxamento': {
    description:
      'Sequência de cuidados pensada para conduzir o corpo e a mente a um estado profundo de tranquilidade e renovação.',
    benefits: [
      'Relaxamento profundo de corpo e mente',
      'Reduz tensões acumuladas',
      'Renova as energias',
      'Equilíbrio e serenidade',
    ],
  },

  // ─── Beleza e Cuidados ─────────────────────────────────────────
  'Manicure & Pedicure': {
    description:
      'Cuidado completo de mãos e pés com técnicas higiênicas, hidratação e esmaltação impecável para unhas sempre bonitas.',
    benefits: [
      'Mãos e pés bem cuidados',
      'Hidratação e saúde das unhas',
      'Acabamento impecável',
      'Autoestima e bem-estar',
    ],
  },
  'Alongamento de Unhas': {
    description:
      'Técnica de alongamento que proporciona unhas longas, resistentes e perfeitamente desenhadas, com durabilidade e beleza.',
    benefits: [
      'Unhas longas e resistentes',
      'Formato perfeito e personalizado',
      'Alta durabilidade',
      'Acabamento elegante',
    ],
  },
  'Depilação Corporal': {
    description:
      'Remoção dos pelos com técnicas seguras e cuidadosas que deixam a pele lisa, macia e livre de pelos por mais tempo.',
    benefits: [
      'Pele lisa e macia',
      'Resultado duradouro',
      'Reduz o crescimento dos pelos',
      'Procedimento seguro e higiênico',
    ],
  },

  // ─── Terapias Integrativas ─────────────────────────────────────
  Reiki: {
    description:
      'Terapia energética japonesa que canaliza energia vital através das mãos, promovendo equilíbrio físico, mental e emocional.',
    benefits: [
      'Equilibra a energia vital',
      'Reduz ansiedade e estresse',
      'Promove paz interior',
      'Auxilia no bem-estar físico e emocional',
    ],
  },
  Auriculoterapia: {
    description:
      'Técnica da medicina tradicional chinesa que estimula pontos específicos da orelha para tratar diversas questões de saúde.',
    benefits: [
      'Alivia dores e tensões',
      'Reduz ansiedade e insônia',
      'Equilibra o organismo',
      'Tratamento natural e não invasivo',
    ],
  },
  'Harmonização Energética': {
    description:
      'Conjunto de práticas que reequilibram os campos de energia do corpo, restaurando a harmonia e a vitalidade.',
    benefits: [
      'Reequilibra a energia do corpo',
      'Restaura a vitalidade',
      'Promove clareza mental',
      'Sensação de leveza e renovação',
    ],
  },
  'Limpeza Energética': {
    description:
      'Processo de remoção de energias densas e bloqueios energéticos, renovando o campo energético e trazendo bem-estar.',
    benefits: [
      'Remove energias densas',
      'Renova o campo energético',
      'Traz clareza e tranquilidade',
      'Sensação de alívio e leveza',
    ],
  },
  'Alinhamento dos Chakras': {
    description:
      'Trabalho energético focado em desbloquear e equilibrar os sete centros de energia do corpo para a harmonia plena.',
    benefits: [
      'Equilibra os centros de energia',
      'Desbloqueia fluxos energéticos',
      'Promove equilíbrio emocional',
      'Aumenta a vitalidade',
    ],
  },

  // ─── Espiritualidade ───────────────────────────────────────────
  'Tarot & Runas': {
    description:
      'Leituras intuitivas com tarot e runas que oferecem orientação, clareza e novos olhares sobre os caminhos da sua vida.',
    benefits: [
      'Oferece clareza e direção',
      'Auxilia em tomadas de decisão',
      'Amplia o autoconhecimento',
      'Novas perspectivas sobre desafios',
    ],
  },
  'Mapa Astral': {
    description:
      'Estudo completo do seu mapa de nascimento, revelando talentos, desafios e potenciais para um maior autoconhecimento.',
    benefits: [
      'Revela talentos e potenciais',
      'Aprofunda o autoconhecimento',
      'Compreende padrões de comportamento',
      'Orientação para a jornada pessoal',
    ],
  },
  'Leituras Intuitivas': {
    description:
      'Sessões de leitura energética e intuitiva que trazem mensagens e orientações para o momento que você está vivendo.',
    benefits: [
      'Mensagens de orientação',
      'Clareza para o momento presente',
      'Conexão com sua intuição',
      'Acolhimento e direcionamento',
    ],
  },
  'Orientação Energética': {
    description:
      'Aconselhamento energético que ajuda a compreender e direcionar suas energias para alcançar equilíbrio e objetivos.',
    benefits: [
      'Direciona suas energias',
      'Apoio em momentos de decisão',
      'Promove equilíbrio',
      'Clareza sobre seus caminhos',
    ],
  },
  'Desenvolvimento Pessoal': {
    description:
      'Acompanhamento focado no seu crescimento interior, fortalecendo a autoestima, a confiança e o propósito de vida.',
    benefits: [
      'Fortalece a autoestima',
      'Desenvolve confiança e propósito',
      'Estimula o crescimento interior',
      'Apoio na evolução pessoal',
    ],
  },

  // ─── Mesas Radiônicas ──────────────────────────────────────────
  'Mesa para Prosperidade': {
    description:
      'Trabalho radiônico voltado a desbloquear e atrair a energia da abundância e prosperidade para a sua vida.',
    benefits: [
      'Atrai energia de abundância',
      'Desbloqueia a prosperidade',
      'Remove crenças limitantes',
      'Abre caminhos financeiros',
    ],
  },
  'Mesa para Amor': {
    description:
      'Tratamento radiônico focado em harmonizar relacionamentos, atrair o amor e curar feridas emocionais do coração.',
    benefits: [
      'Harmoniza relacionamentos',
      'Atrai o amor verdadeiro',
      'Cura feridas emocionais',
      'Equilibra o coração',
    ],
  },
  'Mesa Profissional': {
    description:
      'Trabalho radiônico direcionado à área profissional, abrindo caminhos para o crescimento, reconhecimento e realização na carreira.',
    benefits: [
      'Abre caminhos profissionais',
      'Estimula crescimento na carreira',
      'Remove bloqueios profissionais',
      'Atrai novas oportunidades',
    ],
  },

  // ─── Psicanálise ───────────────────────────────────────────────
  Acolhimento: {
    description:
      'Espaço seguro e acolhedor de escuta empática, onde você pode falar livremente e ser compreendido sem julgamentos.',
    benefits: [
      'Escuta acolhedora e empática',
      'Ambiente seguro e sem julgamentos',
      'Alívio emocional',
      'Primeiro passo para o autoconhecimento',
    ],
  },
  'Análise do Inconsciente': {
    description:
      'Trabalho psicanalítico que investiga conteúdos inconscientes, ajudando a compreender padrões, conflitos e comportamentos.',
    benefits: [
      'Compreende padrões inconscientes',
      'Resolve conflitos internos',
      'Promove transformação profunda',
      'Maior consciência de si mesmo',
    ],
  },
  Autoconhecimento: {
    description:
      'Jornada de descoberta interior que amplia a consciência sobre quem você é, seus desejos e seu propósito.',
    benefits: [
      'Amplia a consciência de si',
      'Compreende desejos e emoções',
      'Fortalece a identidade',
      'Caminho para escolhas mais conscientes',
    ],
  },
  'Equilíbrio Emocional': {
    description:
      'Acompanhamento que auxilia na compreensão e na regulação das emoções, promovendo serenidade e saúde mental.',
    benefits: [
      'Regula as emoções',
      'Reduz ansiedade e angústia',
      'Promove serenidade',
      'Fortalece a saúde mental',
    ],
  },
};
