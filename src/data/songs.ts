// @sos-edit: false

export interface Song {
  id: string;
  title: string;
  artist: string;
  key: string;
  content: string; // Formato ChordPro: [Chord]letra...
}

export interface SongBlock {
  id: string;
  name: string;
  songs: Song[];
}

export const SONG_BLOCKS: SongBlock[] = [

  {
    id: 'block-a',
    name: 'Bloco A',
    songs: [
      {
        id: 'menino-da-porteira',
        title: 'Menino da Porteira',
        artist: 'Sérgio Reis',
        key: 'A',
        content: `
[Intro]
E  A  E  A 
E  A  E  A  E  A

\Primeira Parte\

A
  Toda vez que eu viajava 
                      E
Pela estrada de Ouro Fino

De longe eu avistava 
                  A
A figura de um menino

Que corria abrir a porteira 
                     E
E depois vinha me pedindo

Toque o berrante, seu moço 
                      A
Que é pra eu ficar ouvindo

\Segunda Parte\

       D
Quando a boiada passava 
                  E
E a poeira ia baixando
                                  A
Eu jogava uma moeda e ele saía pulando

Obrigado, boiadeiro
                        E
Que Deus vá lhe acompanhando

Pra aquele sertão afora 
                   A
Meu berrante ia tocando

( E  A  E  A )
( E  A  E  A  E  A )

\Terceira Parte\

A
  Nos caminhos desta vida 
                          E
Muitos espinhos eu encontrei

Mas nenhum calou mais fundo 
                       A
Do que isso que eu passei

Na minha viagem de volta 
                      E
Qualquer coisa eu cismei

Vendo a porteira fechada
                  A
O menino não avistei

\Quarta Parte\

   D
Apeei do meu cavalo 
                         E
E no ranchinho à beira chão

Vi uma mulher chorando
                     A
Quis saber qual a razão

Boiadeiro veio tarde
                     E
Veja a cruz no estradão

Quem matou o meu filhinho 
                    A
Foi um boi sem coração

( E  A  E  A )
( E  A  E  A  E  A )

\Quinta Parte\

A
  Lá pras bandas de Ouro Fino 
                 E
Levando gado selvagem

Quando passo na porteira 
                 A
Até vejo a sua imagem

O seu rangido tão triste 
                    E
Mais parece uma mensagem

Daquele rosto trigueiro 
                   A
Desejando-me boa viagem

\Sexta Parte\

    D
A cruzinha no estradão 
                   E
Do pensamento não sai

Eu já fiz um juramento 
                   A
Que não esqueço jamais

Nem que o meu gado estoure
                     E
Que eu precise ir atrás

Neste pedaço de chão 
                      A
Berrante eu não toco mais

( E  A  E  A )
( E  A  E  A  E  A )
        `
      },
      {
        id: 'cuitelinho',
        title: 'Cuitelinho',
        artist: 'Pena Branca e Xavantinho',
        key: 'A',
        content: `
  A
Cheguei na beira do porto
                    E
Onde as ondas se espáia
    A
As garça dá meia volta
                     E
E senta na beira da praia
                     E7
E o cuitelinho não gosta
                     A
Que o botão de rosa caia, ai, ai, ai

( E  D  E  A ) 

             A
Aí quando eu vim de minha terra
                 E
Despedi da parentaia
      A
Eu entrei no Mato Grosso
                    E
Dei em terras paraguaia
               E7
Lá tinha revolução
                   A
Enfrentei fortes bataia, ai, ai, ai

( E  D  E  A ) 

   A
A tua saudade corta
              E
Como aço de navaia
      A
O coração fica aflito
                   E
Bate uma, a outra faia
                    E7
Os óio se enche d'água
                       A
Que até a vista se atrapaia, ai, ai, ai

[Final] E  D  E  A `
      },
      {
        id: 'joao-de-barro',
        title: 'João de Barro',
        artist: 'Sérgio Reis',
        key: 'A',
        content: `
[Intro]

           E7                      A
O João de Barro pra ser feliz como eu
                E7                     A
Certo dia resolveu arranjar uma companheira
           E7        D           A
Num vai e vem com o barro da biquinha
               Bm          E7          A
Ele fez uma casinha lá no galho da Paineira

      E7                   A
Toda manhã o pedreiro da floresta
                 Bm         E7            A
Cantava fazendo festa pra'quela que tanto amava
           E7      D          A
Mas quando ele ia buscar o raminho
                    Bm          E7          A
Para construir seu ninho, seu amor lhe enganava

           E7          D            A
Mas nesse mundo o mal feito é descoberto
                      Bm          E7         A
João de Barro viu de perto sua esperança perdida
         E7            D     E7   A
Cego de dor trancou a porta da morada
                Bm            E7          A
Deixando lá sua amada presa pro resto da vida

          E7         D          A
Que semelhança entre o nosso fadário
                     Bm              E7           A
Só que eu fiz o contrário do que o João de Barro fez
          E7         D           A
Nosso Senhor me deu força nesta hora
                      Bm       E7           A
A ingrata eu pus pra fora onde anda eu não sei
        `
      },
      {
        id: 'inhambu-xitã-e-o-xororó',
        title: 'Inhambu-xitã e o Xororó',
        artist: 'Élcio Dias & Amorim',
        key: 'A',
        content: `
[Intro] A  E7  A  E7  A

A                       E7
Eu não troco meu ranchinho
                 A
Amarradinho de cipó
                 E7
Por'uma casa na cidade
                   A
Nem que seja bangalô
        A7          D
Eu moro lá no deserto
                      A
Sem vizinho, eu vivo só
                     E7
Só me alegra quando pia
                    A
Lá pr'aqueles cafundó

              E7        A
O inhambu-xintã e o xororó
              E7        A
É o inhambu-xintã e o xororó

                     E7
Quando rompe a madrugada
                  A
Canta o galo carijó
               E7
Pia triste a coruja
                   A
Na cunhera do paiól
        A7             D
Quando chega o entardecer
               A
Pia triste o jaó
                    E7
Só me alegra quando pia
                    A
Lá pr'aqueles cafundó

A                        E7
Não me dou com a terra roxa
                      A
Com a seca larga o pó
                 E7
Na baixada do areião
                      A
Eu sinto  prazer maior
       A7          D
Ver rolinha quando anda
                   A
No areião faz caracó
                     E7
Só me alegra quando pia
                    A
Lá pr'aqueles cafundó

A                 E7
Eu faço minha caçada
                  A
Bem ante de sair o sol
                     E7
Espingarda cartucheira
                 A
Patrona de tiracó
         A7           D
Tenho buzina e cachorro
                 A
Pra fazer forrobodó
                     E7
Só me alegra quando pia
                    A
Lá pr'aqueles cafundó

A                       E7
Quando eu sei de uma notícia
                    A
Que outro canta mió
                     E7
Meu coração da um balanço
                A
Fica meio banzaró
          A7           D
Suspiro sai do meu peito
                  A
Que nem bala joveló
                     E7
Só me alegra quando pia
                    A
Lá pr'aqueles cafundó
               E7          A
É o inhambu-xintã e o xororó
               E7          A
É o inhambu-xintã e o xororó
        `
      },
      {
        id: 'cavalo-preto',
        title: 'Cavalo Preto',
        artist: 'Sérgio Reis',
        key: 'A',
        content: `
        
[Intro] E7  A  E7  A
        E7  A  E7  A

[Primeira Parte] 

                  E7
Tenho um cavalo preto
                  A
Por nome de ventania
D                E7
Um laço de doze braças
                   A
No couro de uma novilha
 D                   E7
Tenho um cachorro bragado
                       A
Que é pra minha companhia
                   Bm  E7
Sou um caboclo folgado
                   A
Ai eu não tenho família

[Solo] E7  A  E7  A 

[Segunda Parte]

                   E7
No lombo do meu cavalo
                  A
Eu viajo o dia inteiro
 D                E7
Vou dum estado pro outro
                  A
Eu não tenho paradeiro
  D                    E7
Quem quiser ser meu patrão
                    A
Me ofereça mais dinheiro
                   Bm  E7
Eu sou muito conhecido
                   A
Por esse Brasil inteiro

[Solo] E7  A  E7  A 

[Terceira parte]

                 E7
Tenho uma capa gaúcha
                              A
Que eu troquei com um boi carreiro
 D                  E7
Tenho dois pelegos grandes
                     A
Que é pura lã de carneiro
D                  E7
Um me serve de colchão
                  A
E outro de travesseiro
                 Bm   E7
Com minha capa gaúcha
                       A
Eu me cubro o corpo inteiro

[Solo] E7  A  E7  A

[Quarta Parte]

                        E7
Adeus que eu já vou partindo
                     A
Vou pousar noutra cidade
 D                   E7
Depois de amanhã bem cedo
                   A
Quero estar em Piedade
 D                  Bm  E7
Deus me deu esse destino
               A
E muita felicidade
                           E7
Quando eu passo com o meu pingo
                       A  
Deixo um rastro de saudade

[Final] E7  A
        `
      },
      {
        id: 'chalana',
        title: 'Chalana',
        artist: 'Almir Sater',
        key: 'D',
        content: `
[Primeira Parte]

D
  Lá vai uma chalana
     A7(13)   D
Bem longe se vai

Navegando no remanso
             A7
Do rio Paraguai

[Refrão]

G
Oh! Chalana sem querer
 D
Tu aumentas minha dor
 A7
Nessas águas tão serenas
                  D
Vai levando meu amor

G
Oh! Chalana sem querer
 D
Tu aumentas minha dor
 A7(13)
Nessas águas tão serenas
                  D
Vai levando meu amor

[Segunda Parte]

E assim ela se foi
                    A7(13)
Nem de mim se despediu
  G
A   chalana vai sumindo
    A7          D
Na curva lá do rio

E se ela vai magoada
                      A7
Eu bem sei que tem razão

Fui ingrato
                         D
Eu feri o seu meigo coração

[Refrão]

G
Oh! Chalana sem querer
 D
Tu aumentas minha dor
 A7(13)
Nessas águas tão serenas
                  D
Vai levando meu amor

G
Oh! Chalana sem querer
 D
Tu aumentas minha dor
 A7
Nessas águas tão serenas
                  D
Vai levando meu amor

E|---------------------------------------------------|
        `
      }
    ]
  },
  {
    id: 'block-b',
    name: 'Bloco B',
    songs: [
      {
        id: 'saudade-da-minha-terra',
        title: 'Saudade da Minha Terra',
        artist: 'Chitãozinho e Xororó',
        key: 'C',
        content: `
[Intro] G  C  G  F 
        C/E  G/D  C

[Primeira Parte]

             C
De que me adianta viver na cidade
                               G
Se a felicidade não me acompanhar

Adeus, paulistinha do meu coração
                               C
Lá pro meu sertão eu quero voltar
            F
Ver a madrugada quando a passarada
             D7              G
Fazendo alvorada começa a cantar

Com satisfação arreio o burrão
                 F   C/E    G/D  C
Cortando o estradão saio  a galo__par
           F               G
E vou escutando o gado berrando
                            C   
O Sabiá cantando no jequitibá

[Interlúdio 1] G  C  G  F 
               C/E  G/D  C

[Segunda Parte]

              C
Por nossa senhora

Meu sertão querido
                                G
Vivo arrependido por ter te deixado

Esta nova vida aqui na cidade
                               C
De tanta saudade, eu tenho chorado
             F
Aqui tem alguém, diz que me quer bem
               D7              G
Mas não me convém, eu tenho pensado

Eu digo com pena, mas esta morena
               F     C/E     G/D    C
Não sabe o sistema que    eu fui   criado
            F                   G
Tô aqui cantando, de longe escutando

Alguém está chorando
               C
Com o rádio ligado

[Interlúdio 2] G  C  D# C# 
               G#/C D#/A#G# 

[Terceira Parte]

              G#
Que saudade imensa do campo e do mato
                                   D#
Do manso regato que corta as campinas

Aos domingos ia passear de canoa
                                  G#
Nas lindas lagoas de águas cristalinas
              C#
Que doce lembrança daquelas festanças
             A#7               D#
Onde tinham danças e lindas meninas

Eu vivo hoje em dia sem ter alegria
           C#   G#/C    D#/A#  G#
O mundo judia, mas  também  ensina
             C#                  D#
Estou contrariado, mas não derrotado
                                G#
Eu sou bem guiado pelas mãos divinas

[Interlúdio 3] D# G# G  F 
               C/E  G/D  C

[Quarta Parte]

              C
Pra minha mãezinha já telegrafei
                            G
E já me cansei de tanto sofrer

Nesta madrugada estarei de partida
                                 C
Pra terra querida que me viu nascer
            F
Já ouço sonhando o galo cantando
            D             G
O inhambu piando no escurecer

A lua prateada clareando a estrada
            F    C/E   G/D   C
A relva molhada desde o anoitecer
           F                 G
Eu preciso ir pra ver tudo ali
                               C  
Foi lá que nasci, lá quero morrer

[Final] G7  C
`
      },
      {
        id: 'asa-branca',
        title: 'Asa Branca',
        artist: 'Luiz Gonzaga',
        key: 'G',
        content: `
Intro] 

Parte 2 de 3

[Primeira Parte] 

G                        C
  Quando oiei a terra ardendo
         G     D7/F#   G
Qual fogueira de São João
          G7            C
Eu perguntei a Deus do céu, ai
           D7         G
Por quê tamanha judiação
          G7            C
Eu perguntei a Deus do céu, ai
           D7         G  (Passagem)
Por quê tamanha judiação

( G )

[Segunda Parte]

        G             C
Que braseiro, que fornaia
        G      D7/F#  G
Nem um pé de prant___ção
            G7              C
Por farta d'água perdi meu gado
           D7           G
Morreu de sede, meu alazão
            G7              C
Por farta d'água perdi meu gado
           D7           G  (Passagem)
Morreu de sede, meu alazão

[Terceira Parte]

G                    C
  Inté mesmo a asa branca
        G      D7/F#  G
Bateu asas do sert____ão
          G7             C
Então eu disse, adeus Rosinha
           D7           G
Guarda contigo meu coração
          G7             C
Então eu disse, adeus Rosinha
           D7           G  (Passagem)
Guarda contigo meu coração

[Quarta Parte]

G                     C
  Hoje longe, muitas légua
       G     D7/F#  G
Numa triste soli___dão
           G7           C
Espero a chuva cair de novo
            D7             G
Pra mim voltar pro meu sertão
           G7           C
Espero a chuva cair de novo
            D7             G  (Passagem)
Pra mim voltar pro meu sertão

[Quinta Parte]

                        C
Quando o verde dos teus óio
       G        D7/F#  G
Se espaiar na pranta__ção
           G7             C
Eu te asseguro não chore não, viu?
           D7                  G
Que eu voltarei, viu, meu coração
           G7             C
Eu te asseguro não chore não, viu?
           D7                  G
Que eu voltarei, viu, meu coração

[Passagem]

[Final] 

( F/A  G )
        `
      },
      {
        id: 'xote-da-alegria',
        title: 'Xote da Alegria',
        artist: 'Falamansa',
        key: 'A',
        content: `

Intro] A  E  F#m  E 
        A  E  F#m  E

[Primeira Parte]

A        E            F#m
   Se um dia alguém mandou
           C#m            D
Ser o que sou e o que gostar
              A          E
Não sei quem sou e vou mudar
                               A
Pra ser aquilo que eu sempre quis

       E        F#m
E se acaso você diz
              C#m          D
Que sonha um dia em ser feliz
            A   E  D#
Vê se fala sério

[Pré-Refrão]

D             A      E    D#
  Pra que chorar sua mágoa?
D        A          E  D#
  Se afogando em agonia
D                 A            
  Contra a tempestade 
          E   D#
Em copo d'água
D          A          Bm
  Dance o xote da alegria
C#m   D   E
Aaah haa hei hei

[Refrão]

A                     E
   Se cum dêrum dêrum dêio
            F#m
Dêrum derundê um dêrum dêrum
 C#m         D               
Dê iô iô iê iê um dêrum dêrum
 A        E
Dêrum derôdô

A                     E
   Se cum dêrum dêrum dêio
            F#m
Dêrum derundê um dêrum dêrum
 C#m         D               
Dê iô iô iê iê um dêrum dêrum
 A        E
Dêrum derôdô

( A  E  F#m  E )
( A  E  F#m  E )

[Primeira Parte]

A        E            F#m
   Se um dia alguém mandou
           C#m            D
Ser o que sou e o que gostar
              A          E
Não sei quem sou e vou mudar
                               A
Pra ser aquilo que eu sempre quis

       E        F#m
E se acaso você diz
              C#m          D
Que sonha um dia em ser feliz
            A   E  D#
Vê se fala sério

[Pré-Refrão]

D             A      E    D#
  Pra que chorar sua mágoa?
D        A          E  D#
  Se afogando em agonia
D                 A            
  Contra a tempestade 
          E   D#
Em copo d'água
D          A          Bm
  Dance o xote da alegria
C#m   D   E
Aaah haa hei hei

[Refrão]

A                     E
   Se cum dêrum dêrum dêio
            F#m
Dêrum derundê um dêrum dêrum
 C#m         D               
Dê iô iô iê iê um dêrum dêrum
 A        E
Dêrum derôdô

A                     E
   Se cum dêrum dêrum dêio
            F#m
Dêrum derundê um dêrum dêrum
 C#m         D               
Dê iô iô iê iê um dêrum dêrum
 A        E
Dêrum derôdô

( A  E  F#m  E )
( A  E  F#m  E )

[Pré-Refrão]

D             A      E    D#
  Pra que chorar sua mágoa?
D        A          E  D#
  Se afogando em agonia
D                 A           
  Contra a tempestade 
          E   D#
Em copo d'água
D          A          Bm
  Dance o xote da alegria
C#m   D   E
Aaah haa hei hei

[Refrão]

A                     E
   Se cum dêrum dêrum dêio
            F#m
Dêrum derundê um dêrum dêrum
 C#m         D               
Dê iô iô iê iê um dêrum dêrum
 A        E
Dêrum derôdô

A                     E
   Se cum dêrum dêrum dêio
            F#m
Dêrum derundê um dêrum dêrum
 C#m         D               
Dê iô iô iê iê um dêrum dêrum
 A        E
Dêrum derôdô

A                     E
   Se cum dêrum dêrum dêio
            F#m
Dêrum derundê um dêrum dêrum
 C#m         D               
Dê iô iô iê iê um dêrum dêrum
 A        E  A
Dêrum derôdô

        `
      },
      {
        id: 'lambada-de-serpente',
        title: 'Lambada de Serpente',
        artist: 'Pierre Simões',
        key: 'E',
        content: `
[  A           E/G#
Cuidar do pé de milho
      F#m   B    E
Que demora na semente
    A            E/G#
Meu pai disse: "Meu filho
      F#m     B    E
Noite fria, tempo quente"
  A         E/G#
Lambada de serpente
     F#m        E
A traição me enfeitiçou
     A         E/G#
Quem tem amor ausente
       F#m  B     E
Já viveu a minha dor
    F#m     B     E
Do chão da minha terra
      F#m    B   E
Um lamento de corrente
    F#m     B      E
Um grão de pé de guerra
    F#m     B         E
Pra colher dente por dente
   A           E/G#
Lambada de serpente
     F#m   B     E
A traição me enfeitiçou
     E       E/G#
Quem tem amor ausente
     F#m    B      E
Já viveu a minha dor        `
      },
      {
        id: 'solidao',
        title: 'Solidão',
        artist: 'Milionário & José Rico',
        key: 'A',
        content: `
        [Intro] E  A  B  E  A  E  B

               E
Alguém me falou

Que você me enganou
             F#m
Eu não posso acreditar
              A
Eu preciso saber
              B
Se foi mesmo você
                  E  E7
Que mandou me avisar

( E  F#m E/G# )

A           B
Eu preciso partir
 G#m                   C#m
Sei que não vou resistir
          F#m     B
Esta solidão do amor
            E      E7
Para o meu coração

( E  F#m E/G# )

A           B
Eu preciso partir
 G#m                   C#m
Sei que não vou resistir
          F#m     B
Esta solidão do amor
            E      E7
Para o meu coração

( E  A  B  E  A  E  B )

               E
Alguém me falou

Que você me enganou
             F#m
Eu não posso acreditar
              A
Eu preciso saber
              B
Se foi mesmo você
                  E  E7
Que mandou me avisar

( E  F#m E/G# )

A           B
Eu preciso partir
 G#m                   C#m
Sei que não vou resistir
          F#m     B
Esta solidão do amor
            E      E7
Para o meu coração

( E  F#m E/G# )

A           B
Eu preciso partir
 G#m                   C#m
Sei que não vou resistir
          F#m     B
Esta solidão do amor
            E      B  A
Para o meu coração

( C  A  B )

E      A               B
  Amor, eu gostaria saber
                E
Se foi mesmo você
Que mandou me avisar
Porque se for verdade

( E  F#m E/G# )

A           B
Eu preciso partir
 G#m                   C#m
Sei que não vou resistir
          F#m     B
Esta solidão do amor
            E      E7
Para o meu coração

A           B
Eu preciso partir
 G#m                   C#m
Sei que não vou resistir
          F#m     B
Esta solidão do amor
            E
Para o meu coração

            E
Para o meu coração

            E
Para o meu coração
 `
      }
    ]
  },
  {
    id: 'block-c',
    name: 'Bloco C',
    songs: [
      {
        id: 'cafezal',
        title: 'Cafezal',
        artist: 'Cascatinha e Inhana',
        key: 'D',
        content: `

                A7                        D 
Meu cafezal em flor, quanta flor meu cafezal 
                A7                        D 
Meu cafezal em flor, quanta flor meu cafezal 
      A          D            A          D 
Ai menina, meu amor, branca flor do cafezal 
      A          D            A          D 
Ai menina, meu amor, branca flor do cafezal 
        A           G             D 
Era florada, lindo véu de branca renda 
                      A7                          D 
Se estendeu sobre a fazenda, igual a um manto nupcial 
           A           G              D 
E de mãos dadas fomos juntos pela estrada 
                   A7                     D 
Toda branca e perfumada, fina flor do cafezal 
                A7                        D 
Meu cafezal em flor, quanta flor meu cafezal 
                A7                        D 
Meu cafezal em flor, quanta flor meu cafezal 
      A          D            A          D 
Ai menina, meu amor, branca flor do cafezal 
      A          D            A          D 
Ai menina, meu amor, branca flor do cafezal 
            A           G            D 
Passa-se a noite vem o sol ardente bruto 
                        A7                      D 
Morre a flor e nasce o fruto no lugar de cada flor 
            A              G             D 
Passa-se o tempo em que a vida é todo encanto 
                        A7                          D 
Morre o amor e nasce o pranto, fruto amargo de uma dor 
                A7                        D 
Meu cafezal em flor, quanta flor meu cafezal 
                A7                        D 
Meu cafezal em flor, quanta flor meu cafezal 
        `
      },
      {
        id: 'viva-a-vida',
        title: 'Viva a Vida',
        artist: 'Milionário & José Rico',
        key: 'E',
        content: `
[Intro] A  E  B7  E  E7
        A  E  B7  E

     E
Quebrei a taça da amargura
Atirei seus pedaços ao vento
                         B7
Gritei bem alto: Viva a vida
O sol que andava meio ausente
Voltou a brilhar novamente
       A                 E
No sorriso da mulher querida

           E
As minhas lágrimas secaram para sempre
Sua presença mandou a saudade embora
           E7                  A
Não sinto mais esta ansiedade louca
                                E
Quando de amor estava quase morrendo
                                   B7
Senti seus lábios para vida me trazendo
                           E    E7
Qual respiração de boca a boca

       A
Só o amor vale tudo na vida
                      E
Só o amor é a inspiração
                           B7
Sem amor a esperança é perdida
                       E
Por amor escrevi esta canção
       A
Só o amor vale tudo na vida
                      E
Só o amor é a inspiração
                           B7
Sem amor a esperança é perdida
                       E
Por amor escrevi esta canção

( A  E  B7  E  E7 )
( A  E  B7  E )

           E
As minhas lágrimas secaram para sempre
Sua presença mandou a saudade embora
           E7                  A
Não sinto mais esta ansiedade louca
                                E
Quando de amor estava quase morrendo
                                   B7
Senti seus lábios para vida me trazendo
                           E    E7
Qual respiração de boca a boca

       A
Só o amor vale tudo na vida
                      E
Só o amor é a inspiração
                           B7
Sem amor a esperança é perdida
                       E
Por amor escrevi esta canção
       A
Só o amor vale tudo na vida
                      E
Só o amor é a inspiração
                           B7
Sem amor a esperança é perdida
                       E
Por amor escrevi esta canção

[Final] E  B7  E

        `
      },
      {
        id: 'telefone-mudo',
        title: 'Telefone Mudo',
        artist: 'Trio Parada Dura',
        key: 'G',
        content: `
[Intro] G  F/A  G/B  
        C  G  D  G
        C  G  D  G

[Primeira Parte]

     C
Eu quero que risque
                    G
O meu nome da sua agenda
    D              C
Esqueça o meu telefone
           G
Não me ligue mais
     C
Porque já estou cansado
            G
De ser o remédio
                 D
Pra curar o seu tédio
                              G  
Quando seus amores não lhe satisfaz

(D/F#  C6/E)

[Refrão]

    D
Cansei de ser o seu palhaço
   C             G
Fazer o que sempre quis
                     D
Cansei de curar sua fossa
             C               G  
Quando você não se sentia feliz

(D/F#  C6/E)

    D
Por isso é que decidi
   C            G
O meu telefone cortar
                        D
Você vai discar várias vezes
          C        D    G 
Telefone mudo não pode chamar

[Solo]  G  F/A  G/B  
        C  G  D  G
        C  G  D  G

[Primeira Parte]

     C
Eu quero que risque
                    G
O meu nome da sua agenda
    D              C
Esqueça o meu telefone
           G
Não me ligue mais
     C
Porque já estou cansado
            G
De ser o remédio
                 D
Pra curar o seu tédio
                              G  
Quando seus amores não lhe satisfaz

(D/F#  C6/E)

[Refrão]

    D
Cansei de ser o seu palhaço
   C             G
Fazer o que sempre quis
                     D
Cansei de curar sua fossa
             C               G  
Quando você não se sentia feliz

(D/F#  C6/E)

    D
Por isso é que decidi
   C            G
O meu telefone cortar
                        D
Você vai discar várias vezes
          C        D    G 
Telefone mudo não pode chamar

[Solo final]

D  G  D  G 
`
      },
      {
        id: 'andorinhas',
        title: 'Andorinhas',
        artist: 'Tonico e Tinoco',
        key: 'G',
        content: `
[Intro] G  D  G  D  C

G                  D                    G
As andorinhas voltaram e eu também voltei
                 D                         G
Pousar no velho ninho que um dia aqui deixei

               D                                    
Nós somos andorinhas que vão e que vem a procura de 
  G
amor
                   D                                  
Às vezes volta cansada ferida machucada mas volta pra 
 C                 D                G
casa batendo suas asas com grande dor
             D                                       G
Igual a andorinha eu parti sonhando mas foi tudo em vão

               D
Voltei sem felicidade porque na verdade
   C                D                 G
Uma andorinha voando sozinha não faz verão   (repete)
`
      },
      {
        id: 'eu-sou-terrivel',
        title: 'Eu sou terrível',
        artist: 'Roberto Carlos',
        key: 'A',
        content: `
Intro: A 
          
Eu sou terrível e é bom parar

De desse jeito, me provocar
         D 
Você não sabe, de onde eu venho 
                          
O que eu sou e o que tenho
         A 
Eu sou terrível, vou lhe dizer 

E ponho mesmo, pra derreter
  E7                     D 
Estou com a razão no que digo 
    E7                  D  
Não tenho medo nem do perigo 
  E7                    D 
Minha caranga é máquina quente 
         A  
Eu sou terrível e é bom parar 

Porque agora, vou decolar
         D            
Não é preciso, nem avião 

Eu vôo mesmo, aqui no chão
         A 
Eu sou terrível, vou lhe contar 

Não vai ser mole, me acompanhar
  E7                    D 
Garota que andar do meu lado 
    E7                        D 
Vai ver que eu ando mesmo apressado 
  E7                    D      
Minha caranga é máquina quente 
         A                       E7 
Eu sou terrível, eu sou terrível 

Instrumental: A D A E7 
D A E7 

         A 
Eu sou terrível e é bom parar 

De desse jeito, me provocar
         D 
Você não sabe, de onde eu venho 
                          
O que eu sou e o que tenho
         A 
Eu sou terrível, vou lhe dizer 

E ponho mesmo, pra derreter
  E7                     D 
Estou com a razão no que digo 
    E7                  D  
Não tenho medo nem do perigo 
  E7                    D 
Minha caranga é máquina quente 
         A                        
Eu sou terrível, eu sou terrível 

Eu sou terrível...
        `
      }
    ]
  },
  {
    id: 'block-d',
    name: 'Bloco D',
    songs: [
      {
        id: 'whisky-a-go-go',
        title: 'Whisky a Go Go',
        artist: 'Roupa Nova',
        key: 'A',
        content: `[Intro] A7

[Primeira Parte] 

          A7
Foi numa festa, gelo e Cuba Libre

E na vitrola Whisky a Go Go

À meia luz o som do Jonnhy Rivers

Aquele tempo que você sonhou

          D7
Senti na pele a tua energia
           A7 
Quando peguei de leve a tua mão
           D7
A noite inteira passa num segundo
         A7  
O tempo voa mais do que a canção

          E 
Quase no fim da festa 
     D                        A7 
Num beijo, então, você se rendeu
          E                      
Na minha fantasia
   D               A7  E
O mundo era você e eu

[Refrão] 

A                        F#m7
  Eu perguntava, do you wanna dance?
A                        F#m7
  E te abraçava, do you wanna dance?
     D            
Lembrar você
    E                    A  E
Um sonho a mais não faz mal

A                        F#m7
  Eu perguntava, do you wanna dance?
A                        F#m7
  E te abraçava, do you wanna dance?
     D            
Lembrar você
    E                    A  E
Um sonho a mais não faz mal

[Primeira Parte] 

          A7
Foi numa festa, gelo e Cuba Libre

E na vitrola Whisky a Go Go

À meia luz o som do Jonnhy Rivers

Aquele tempo que você sonhou

          D7
Senti na pele a tua energia
           A7 
Quando peguei de leve a tua mão
           D7
A noite inteira passa num segundo
         A7  
O tempo voa mais do que a canção

          E 
Quase no fim da festa 
     D                        A7 
Num beijo, então, você se rendeu
          E                      
Na minha fantasia
   D               A7  E
O mundo era você e eu

[Refrão] 

A                        F#m7
  Eu perguntava, do you wanna dance?
A                        F#m7
  E te abraçava, do you wanna dance?
     D            
Lembrar você
    E                    A  E
Um sonho a mais não faz mal

A                        F#m7
  Eu perguntava, do you wanna dance?
A                        F#m7
  E te abraçava, do you wanna dance?
     D            
Lembrar você
    E                    A  E
Um sonho a mais não faz mal

[Solo] A7  D7  A7  E  D  A7  E

[Terceira Parte] 

Hei, hei - hei hei 

Hei, hei hei - hei, hei hei

Hei - hei, ho - ho

Hei - hei, ho - ho
E
Ôoooo oo oo

[Refrão Final] 

A                        F#m7
  Eu perguntava, do you wanna dance?
A                        F#m7
  E te abraçava, do you wanna dance?
     D            
Lembrar você
    E                    A  E
Um sonho a mais não faz mal

A                        F#m7
  Eu perguntava, do you wanna dance?
A                        F#m7
  E te abraçava, do you wanna dance?
     D            
Lembrar você
    E                    A  F#m7
Um sonho a mais não faz mal
     D            
Lembrar você
    E                    A  F#m7
Um sonho a mais não faz mal
     D            
Lembrar você
    E                    A 
Um sonho a mais não faz mal

[Final] A7

E|------------------------------------------|
`
      },
      {
        id: 'tocando-em-frente',
        title: 'Tocando em Frente',
        artist: 'Almir Sater',
        key: 'D',
        content: `Primeira Parte]

A                                G9
   Ando devagar porque já tive pressa

E levo esse sorriso
            D
Porque já chorei demais
A                          
   Hoje me sinto mais forte
                 G9
Mais feliz quem sabe

Eu só levo a certeza
              D
De que muito pouco eu sei
    A
Ou nada sei

[Refrão]

G9               Em             G9
    Conhecer as manhas e as manhãs
             Em             D
O sabor das massas e das maçãs
G9                Em               G9
    É preciso o amor pra poder pulsar
           Em               G9
É preciso paz pra poder sorrir
              D
É preciso a chuva para florir

[Segunda Parte]

 A                     
Penso que cumprir a vida
             G9
Seja simplesmente

Compreender a marcha
                  D
E ir tocando em frente
 A              
Como um velho boiadeiro
             G9
Levando a boiada

Eu vou tocando os dias
               D
Pela longa estrada eu vou
       A
De estrada eu sou

[Refrão]

G9               Em             G9
    Conhecer as manhas e as manhãs
             Em             D
O sabor das massas e das maçãs
G9                Em               G9
    É preciso o amor pra poder pulsar
           Em               G9
É preciso paz pra poder sorrir
              D
É preciso a chuva para florir

[Terceira Parte]

 A                     
Todo mundo ama um dia
             G9
Todo mundo chora

Um dia a gente chega
                D
No outro vai embora
A                                  G9
   Cada um de nós compõe a sua história

E cada ser em si
                  D
Carrega o dom de ser capaz
    A
De ser feliz

[Refrão]

G9               Em             G9
    Conhecer as manhas e as manhãs
             Em             D
O sabor das massas e das maçãs
G9                Em               G9
    É preciso o amor pra poder pulsar
           Em               G9
É preciso paz pra poder sorrir
              D
É preciso a chuva para florir

A                                G9
   Ando devagar porque já tive pressa

E levo esse sorriso
            D
Porque já chorei demais
A                          
   Hoje me sinto mais forte
                 G9
Mais feliz quem sabe

Eu só levo a certeza
              D
De que muito pouco eu sei
    A
Ou nada sei

[Passagem Final]

E|--------------3---------------------------|
`
      }
    ]
  }
];


