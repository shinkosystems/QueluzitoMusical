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

[Primeira Parte]

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

[Segunda Parte]

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

[Terceira Parte]

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

[Quarta Parte]

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

[Quinta Parte]

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

[Sexta Parte]

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
        id: 'patria',
        title: 'Pátria do Evangelho',
        artist: 'Tim e Vanessa',
        key: 'A',
        content: `
A        Bm
Brasil amado
E           E7       A   A7
És a Pátria do Evangelho
       D  Dm       A   F#m
És do mundo a esperança
     Bm   E     A
O sensível coração
    Bm         E         A
Teu povo tem muitas cores
F#m             Bm     E  A
A Das raças a perfeita união

A             Bm
Observas em silêncio
E             E7 A A7
A beleza do céu
   D  Dm       A   F#m
Estrelas cintilantes
        Bm    E      A
Nos lembrando o cruzeiro
   Bm      E          A          F#m
Sugerem refletir a bênção de Deus
      Bm        E          A
Na presença do Mestre Jesus
         Bm        E    A   F#m
Junto ao solo brasileiro        `
      },
      {
        id: 'jesus-mestre',
        title: 'Jesus, o Mestre',
        artist: 'Tim e Vanessa',
        key: 'D',
        content: `
A6            G6/D
Jesus é o nosso Mestre
A6          G6/D
Ele veio ensinar
Bm                F#m
De Deus a sábia vontade
G                    A
E por Ele ao Pai chegar
      G A6    G6/D
E por Ele    chegar

A6               G6/D
Em cada passo um exemplo
A6            G6/D
De amor ao semelhante
Bm                    F#m
Deus sempre espera de nós
G                     A
Testemunho a todo instante
G A6      G6/D   A6
A todo instante
        `
      }
    ]
  },
  {
    id: 'block-d',
    name: 'Bloco D',
    songs: [
      {
        id: 'caminhando-juntos',
        title: 'Caminhando Juntos',
        artist: 'Tim e Vanessa',
        key: 'A',
        content: `A                  A/G#
Quando me sinto cansado
D                                  A
Olhando as trevas que devo enfrentar
A                      A/G#
Quando eu olho o passado
D                       A
E vejo o quanto eu já fiz sofrer
D                A
Quero saber quem sou eu
         A/G#
Saber quem me fez
E           A
Porque estou aqui
D               A
Ouço uma voz que me diz
 A/G#            E             A
Que trago as respostas bem junto de mim

D                              A
Quem sou eu que não vê que a chuva
  A/G#       E         A         A7
Não escolhe o solo que vai irrigar e 
dessedentar
 D                   A
Apenas cumpre sua missão
   A/G#   E          A
E os ventos divinos irão te levar
 D                            A
Quem sou eu que não vê que ao lado
 A/G#         E               A
Um ser encantado me chama de irmão
 A7         D
E me estende a mão
 A
Me dizendo que juntos
 A/G#                E           A
Iremos mais longe que eu possa sonhar
 D                                     A
Quem sou eu que não vê que meu Deus
 A/G#   E                   A
Acima de tudo vem cuidar de mim
 D                             A
Quem sou eu, sou um ser tão feliz
  A/G#          E            A
Pois eu já descobri que eu tenho você`
      },
      {
        id: 'alivio',
        title: 'Alívio',
        artist: 'Tim e Vanessa',
        key: 'A',
        content: `A        E/G#   F#m     A/E
Caminheiro, no caminho
D        D/C#    Bm      Bm/A
Em busca da direção
E/G#        D/F#    E
Da expulsão do Paraíso
D        E        A
À Terra da Promissão
A        E/G#     F#m     A/E
Do suor do vosso rosto
D       D/C#   Bm      Bm/A
Angariareis o pão
E/G#      D/F#          E
Do estertor de vossos partos
D         E      A
O maná da evolução
A           C#m7
Viver é crescer
   D6           Dm6
E crescer é sofrido
Bm       Bm/A
Caridade, oração
E/G#           D   D9   A
Alívio do coração
A    E/G#   F#m      A/E
Semeador, em meio à dor
  D        D/C#     Bm      E
 "Vinde à mim se estais cansados
A             C#m7     D6     Dm6
Meu peso é leve,      jugo suave”
Bm          Bm/A          E/G#
Já não é sentida dor
                D    D9    A
Bendito Consolador`
      },
      {
        id: 'aprendiz',
        title: 'Aprendiz',
        artist: 'Tim e Vanessa',
        key: 'D (forma dos acordes no tom de C)',
        content: `Capotraste na 2ª casa
C                     F7M
Como alguém que encontrasse a luz
    Dm             Dm/C              
Depois de andar e andar procurando o 
 F7M   G4(6)
caminho
         C                 F7M
Como alguém que enfim já pudesse ouvir
    Dm                 Dm/C               
Respostas que trazem consolo e sentido ao 
 F7M   G4(6)
destino

          C        G6/B         F7M       
Eu encontrei tuas páginas e sequei minhas 
Fm7(13)
lágrimas
     C        G6/B      F7M     G4(7/9) 
Percebi que a dor da semente é o parto  
G7(13)(9)  C G6/B F7M     G4(7/9) G7(13)(9)
     da vida

C                    F7M
Como alguém que já quer seguir
    Dm                  Dm/C       
Os passos do mestre com fé e razão 
     F7M   G4(6)
conscientes
         C                   F7M
Como alguém que em si já soubesse ouvir
    Dm                   Dm/C           
As vozes dos seres que habitam o espaço 
    F7M   G4(6)
infinito

          C        G6/B         F7M       
Eu encontrei tuas páginas e sequei minhas 
Fm7(13)
lágrimas
     C        G6/B      F7M     G4(7/9) 
Percebi que a dor da semente é o parto  
G7(13)(9)  C G6/B F7M     G4(7/9) G7(13)(9)
     da vida

      C       G6/B   F7M     G4(7/9) 
Minha dor me trouxe aqui pra     
G7(13)(9)     C        G6/B   F7M
entender       a flor que brota em mim
G4(7/9) G7(13)(9) C  G6/B   F7M     
Meu            amor é aprendiz      
G4(7/9) G7(13)(9)   C      G6/B   F7M     
    de um bem    maior que seja assim
G4(7/9)

             C   G6/B        F7M     
Nesse vai e vem sei que voltarei
Fm7(13)

                C   G6/B           F7M     
Pra cuidar da flor, pra acalmar a dor e ser
G4(7/9) G7(13)(9)
 feliz`
      },
      {
        id: 'madalena',
        title: 'História de Madalena',
        artist: 'Tim e Vanessa',
        key: 'F',
        content: `   Am          Em          Fadd9
Naquela tarde em Jerusalém
Fadd9     G6          Am    Em
 O céu estava tão cinzento
      Fadd9   G6
Até o vento
Am            Em        Fadd9
se escondera pra chorar
                G6        Am    Em
E eu também chorava amargamente
                    Fadd9   G6
Lembrando em minha mente
         Am    Em
Os teus olhos
Fadd9            G6
Aquela chama em teu olhar
         Am    Em
Os teus olhos
Fadd9           G6  G#°
De quem sabia amar
Dm       Cadd9
Meu coração de mulher
      A#add9     Gm       Am
Muito tempo buscou o amor
       A#add9         Cadd9
Que enfim em ti encontrei
Dm      Cadd9
Como viver sem você
   A#add9      Gm
Sem a tua amizade
      Am     F7M      G
Seu o teu cari......nho
   Am          Em
Naquela manhã em Jerusalém
Fadd9    G6       Am
A     saudade foi maior
    Em          Faad9     G6
E então fui em busca de ti
      Am              Em        Fadd9
Mas a pedra não estava no lugar
     G6        Am
O sepulcro era vazio
    Em      Fadd9
Uma voz me chamou
      G6
Então vi
         Am   Em
Os teus olhos
Fadd9           G6
Aquela chama em teu olhar
         Am   Em
Os teus olhos
Fadd9           G6  G#°
De quem sabia amar
  Am  Am/G  D/F#       G
Então,     você está aqui
  C      G/B    Am  Am/G
E tudo está em paz`
      },
      {
        id: 'eden',
        title: 'Eden',
        artist: 'Tim e Vanessa',
        key: 'D',
        content: `Introdução:  Bm(11)  F#m7(11)/C#  G9  

A9(13)  A4(9)  A4  A4(9)  A4  A4(9)

Bm11 F#m7(11)/C#  G9
Ouve,   ó Isra.....el
  A(9)(13)           A4(9) A4  A4(9) A4 
A voz do Senhor, teu Deus
A4(9)

Em               D/F#    G
Nos homens-trevas eis a luz
                      D
Adões e evas, sede Jesus
Em   D/F#        G     D/F#     E  E4
Sob a guia de Moisés deixai Ramsés
G           D/F#           E  E4
Ardei nos desertos vossas fés
G   F#          Bm(11)     Bm(11)/A   
Paradigmas em dilúvio, subi a arca de 
G#m7(b5)
Noé
G     D/F#         E E4 G           F#    
As trombetas anunciam   quedas de muralhas
Bm(11)

    Bm(11)/A  G#m7(b5)
Nos homens-Jericó
G                D/F#        E
Não olheis para trás, segui Ló
     E4            G      D/F#      E      
Aos homens-Elias o arrebatamento em carros 
       E4
de fogo
G  A6/G      D
   Na paz de Jó

D                         E/D
Filhos de Abraão cantai o canto Salomão
G        A6/G       D
Sob os arpejos de Davi
D                        E/D
Amansai leões nos homens-Daniéis
     G           A6/G              D   D9  
Abri celas e grilhões de homens-Babéis
D9/C#


Bm(11) F#m7(11)/C#  G9
Deus, Javé,       Eloim,
A(9)(13)   A4(9)  A4   A4(9)   A4   A4(9)
Bíblia,   Vedas, Sutra, Alcorão
Em           D/F#        E  E4
Santidade, Nirvana, Samadhi
G           D/F#      E  E4
Anjo, Deva, Iogue-Bakti
G   A6/G          D
Messias, Jesus, Rabi

D                             E/D
Vinde ver e ouvir, ninguém pregou assim
G         A6/G          D
Ninguém jamais viveu assim
D                             E/D
Vinde ver e ouvir, ninguém pregou assim
G         A6/G          D
Ninguém jamais viveu assim

Em            D/F#  G
Marias, Ruths, Madalenas
  A6/G         D
Joanas, Verônicas
Em              D/F#     G
Com as serpentes a seus pés
   D/F#       E    E4 G   D/F#        E    
Cavatinas penitentes, caridades cantilenas
E4

G   F#             Bm(11)     Bm(11)/A   
Nem bestas, nem dragões, nem demônios, 
   G#m7/D
nem leões
G      D/F#          E    E4
Pedros, Paulos e Estevãos
G     A6/G       D
Josés, Lucas e Joões

D                       E/D
Terra Prometida, Éden, Shangrilá
G      A6/G       D
Além, Nova Jerusalém
D                      E/D
Alvorada Nova, Sirius, Nosso Lar
G       A6/G        D
Moradas da Casa do Pai`
      },
      {
        id: 'assim-seja',
        title: 'Assim seja',
        artist: 'Tim e Vanessa',
        key: 'E',
        content: `E  F#m  G#m   A     G#m    F#m
Seja na Terra como é no céu
A         B    G#m  C#m
Feita a Vossa Vontade
F#m                B
Sem acusador, nem réu
          A  A/F#   F#m    E
Só justiça em      claridade
F#m             A                E
Se és por nós, quem será contra nós? }2x
E          A      F#m     B             E
A toda criatura Deus      chama pelo nome
       A        F#m        B           E
Pra despertar o ser     e ser um anjo-homem

          A            E         A     
Não existem potestades, não existe mal 
     E
algum
            F#m        A             E
Que nos possa apartar do amor de Deus

E   F#m   G#m A  G#m   F#m
És Pai e nosso, de todos nós
A   B   G#m  C#m
Bendito sejas
F#m             B
que ouviu nossa voz
  A   A/F#    F#m  E
Hosana !      Aleluia !
F#m    A       E
Oum ! Assim Seja !
F#m    A       E
Oum ! Amém!
F#m    A       E
Oum ! Assim Seja !
F#m    A       E
Oum ! Amém!`
      }
    ]
  },
  {
    id: 'block-e',
    name: 'Bloco E',
    songs: [
      {
        id: 'chicos',
        title: 'Chicos',
        artist: 'Tim e Vanessa',
        key: 'E',
        content: `E/G# E7M(9) A E 
Duas estrelas da pobreza 
Dbm7 Dbm7 A F#m7 E 
Em dois paletós e um bu.....rel 
E/G# E7M(9) A E 
Da bondade a beleza 
Dbm7 F#m7 A 
A Terra espelha o céu 
E E/D# A F#m7 E 
O pequeno de Assis estremece o Va...ti........cano 
F#m7/4 Abm(b6) F#m7/4 Abm(b6) 
Toma a cruz, renega a si 
A E E7M(9) A Am 
O zênite franciscano 
E/G# E7M(9) A Am E/G# E7M(9) A Am 
Oito séculos de história, Cristianismo é caridade 
E/G# E7M(9) A Am E/G# E7M(9) A Am 
Lápis, pedra-preciosa, é o Chico da Mediunidade 
E/G# E7M(9) A Am 
São dois vasos escolhidos na estrada da humildade 
E/G# E7M(9) A Am 
São dois servos à serviço da luz 
E/G# E7M(9) A Am 
São dois pobres, são dois ricos, tamanha claridade 
E/G# E7M(9) A Am 
Vão trazer no corpo a história do amor 
E F#m7/4 Abm(b6) B4 
Pe.....lo Cris...........to, 
A(add9) Abm(b6) F#m7/4 B7 
são fran.............cis...............cos, 
A(add9) Abm(b6) B7 E 
são dois chi......cos.`
      },
      {
        id: 'aos-pes',
        title: 'Aos pés do Monte',
        artist: 'Tim e Vanessa',
        key: 'Am',
        content: `[Intro] Am  F7+  G  C  E7
        Am  F7+  G  C  E7
        Am  F7+  G  Am


       Am             F7+                 
E|-----------------------------------------
B|-----1p0---0h1--------1p0---0h1---------0
G|----2----2----2-----2-----2-----2--------
D|------------------3----------------------
A|--0--------------------------------------
E|--------------------------------------3--
  G              C        E
E|-----0-1----0--------0---| 
B|-1-3-----------3-1-------| 
G|-------------------------| 
D|-------------------------| 
A|------------3------------| 
E|---------------------0---| 


         Am           F7+                 
E|-----------------------------------------
B|-----1p0---0h1--------1p0---0h1---------0
G|----2----2----2-----2-----2-----2--------
D|------------------3----------------------
A|--0--------------------------------------
E|--------------------------------------3--
  G              C        E
E|-----0-1----0--------0---| 
B|-1-3-----------3-1-------| 
G|-------------------------| 
D|-------------------------| 
A|------------3------------| 
E|---------------------0---| 


        Am                    F7+          
E|--------------------------------3--------
B|-----1p0---0h1--------1p0---0h1---------0
G|----2----2----2-----2-----2--------------
D|------------------3----------------------
A|--0--------------------------------------
E|--------------------------------------3--
        G              Am
E|----------------| 
B|-1-3-1-0---1----| 
G|----------------| 
D|----------------| 
A|-----------0----| 
E|----------------| 

Am                Dm
Um sentimento me ronda
G                      C        E
Não sei dizer, tudo é novo pra mim
Am               Dm
Meu coração se renova
  G                   C          E
Sinto a esperança invadir o meu ser

   Am      Am/C        Dm        Dm/F
Quero ser manso, ser limpo, ser justo
   Am         E      Am
E pobre de espírito ser
 Dm             G
Tua palavra me sonda
             C           G/B       Am
Me conta do Reino que espera por mim
Dm                  G
Eu te ofereço meu pranto
              C                 E
As dores da alma que quer renascer

    Am       Dm
Eu ouvi tua voz
      G         C      E7
Teu falar me encantou
      Am         Dm
Quis seguir, caminhar
      G             C
Quis saber pra onde vou
        Dm   Dm/F
Eis-me aqui
       E E/G#          Am
Minha dor   serenou`
      },
      {
        id: 'sempre-jovens',
        title: 'Sempre jovens',
        artist: 'Tim e Vanessa',
        key: 'D',
        content: `D9               D9/C#
 Essa energia que pulsa em nós
 Bm                      F#m
 Segue um farol que nos guia a Deus
 G    G#m5-       D       Bm
 É o Evangelho do Irmão Maior
 Em           A7
 Medianeiro do Pai
 D9                 D9/C#
 Nosso impulso de inovação
 Bm                F#m
 Enche a vida de emoção
 G    G#m5-/  D    Bm
 A Juventude espírita
 Em       A7       D
 Segue cantando assim:
 A7     A/G  D9/F#
 Sempre a__migos
  A7       A/G      D9/F#
 Cativando mais alguém
 A7  A/G  D9/F#
 Sempre  juntos
 A7     A/G       D9/F#
 Nessa Geração do Bem
 A7  A/G  D9/F#
 Sempre    Jovens
 A7          A/G     D9/F#
 Construindo nosso     lar
 A7  A/G  D9/F#
 Sempre   unidos
 A7          A/G      D9
 Para a vida transformar`
      },
      {
        id: 'suplica',
        title: 'Súplica de um galho',
        artist: 'Tim e Vanessa',
        key: 'D',
        content: `Intro: D  D7M(9)  Gm/D  G6/D

D           D7M(9)
Sou um galho assustado
G              Gm7         F#m7
Decepado de uma árvore frondosa
         Bm4       Bm4/A
Que enfeitava o jardim
G/E G/D   G6/C#    A7/4 D  A7
De mansão rica e formosa

D                D7M(9)
Não sei o porquê da violência
G               Gm7          F#m7
Nem falo do susto ou da minha dor
Bm4    Bm4/A      G/E     G/D
Apenas trago nas fibras sensíveis
      A7             A7/4 A7
Uma súplica de amor

   G                D(add9)
Na ânsia de fincar raízes
  D9/C#       Bm4 Bm4/A     G
O solo fértil eu possa encontrar
Em   D/F#     G   G6/Ab     D
Para flores e frutos - só Tu sabes
  A7               G
A vida eu volte a doar

G              D(add9)
Mas, se por Tua vontade
D9/C#  Bm4 Bm4/A   G
Minha força se esgotar
Em         D/F#    G  G6/Ab
Permita que eu apodreça
   D(add9) A7            G
Tornando o solo a fertilizar

D(add9)         D7M(9)
Alimentarei os vermes, bem sei
 G             Gm7
Misturado ao lixo abundante
D(add9)         D7M(9)
Minha seiva humo se tornará
G              Gm7      D          A7/4 A7
Novo verde surgirá iluminado e vibrante

G             D(add9)
E as sementes novas
  D9/C#            Bm4     Bm4/A G
Saltando alegres das mãos do semeador
Em      D/F#     G   G6/Ab D(add9)
Terão da mãe natureza      a resposta
A7          G     G#7/4(9) G#m7(9) 
A vida renovada, a bênção         do 
       D
Criador`
      },
      {
        id: 'luzes',
        title: 'Luzes da Luz',
        artist: 'Tim e Vanessa',
        key: 'D',
        content: ` D6
Um frêmito da Grande Luz
          G/D
E luzes jorraram em profusão
       D6
Houve tempo na eternidade
  G/D
Espaço na imensidão
D6
Sustentar a vibração divina
   G/D
Tornou-se o nosso afã
        D6
Surgiu a bipolaridade
        G/D
Agora há Homem e há Mulher
Bm(11)         F#m7(11)/C#
Presença, ausência, luz, não-luz
G            A7
Calor, frio, ato, inação
Bm(11)        F#m7(11)/C#
Dorme mineral, desperta vegetal
G                 A7
Segue instintos o animal
  Em                  A7
O Homem se ergue na figura de Adão
Em               A7    A4        D(add9)/F# Em A7 A4
Ama e aprende a ser o Rei da Criação
D(add9)/F#      Em
Queremos voltar a ti ó Pai
   G           A7       A4     D(add9)/F#
As luzes querem, anseiam a Mãe Luz
D(add9)/F#    Em
Luzes perdidas, asserenai
G            A7      A4  D(add9)/F#
Eis o roteiro: segue Jesus
D(add9)/F#    Em
A luz da Luz, a Luz das luzes
G               A7  A4 D(add9)/F#
Luzes da Luz, segue Jesus`
      },
      {
        id: 'aurora',
        title: 'Aurora',
        artist: 'Tim e Vanessa',
        key: 'B',
        content: `[[Intro] G#m  F#4  E  D#m13-  F#11

Uma grande noite abate a Terra, que se abate
Treva imensa, não sem estrelas
Passados milênios, um abrasamento
Tisna o horizonte clareando esperança
Prenúncio milenar do amanhece

B9   B       B9 B
Bem vinda Aurora
E  E/D#    E/C#    E/B    F#/A#         G#m
A terra sofreu          noites convulsivas
F#/A#    E7M          D#m7
Verteu lágrimas, rangeu dentes
   G#m          F#4
Mas gestou-se, majestou-se
 B4       B4  C#m/G#      E/G#
No parto regenerativo deu-se à luz
   F#4     F#
Na Remissão

B B9    B   B9
Bem vinda Aurora
E  E/D# E/C#    E/B       F#/A# G#m
O lobo pasta   junto ao cordeiro
F#/A#  E7M          D#m7
Crianças brincam com a serpente
   G#m      F#4
E os anjos andarilham
B4       B4
Com os homens que volitam
C#m/G#  E/G#     F#4    F#
No amor    da Promissão

B  B9    B   B9
Bem vinda Alvorada
E       E11+     E E11+
Artefazendo o belo bom
 F#/A#
Entreflorindo olhar
G#m     D#m7
A aliança homem-Deus
B4      B4   C#m/G#      E/G#
Já não     é só arco-íris
   F#4    F#
É comunhão

      B   B9 B
Bem vindo dia
B9     E  E11 E E11
Bem vinda Luz
      B B9   B
Bem vindo dia
B9     E  E11+   E E11+
Bem vinda Luz

        B    B9 B
Bem vinda Aurora
B9     E  E11 E E11
Bem vinda Luz
        B    B9  B
Bem vinda Alvorada
B9     E  E11 E E11
Bem vinda Luz`
      }
    ]
  },
  {
    id: 'block-f',
    name: 'Bloco F',
    songs: [
      {
        id: 'concepcao',
        title: 'Concepção Astral',
        artist: 'Tim e Vanessa',
        key: 'A',
        content: `Introdução: A  A9 

A    A9        A     A9 
Nebulosa implodiu 
D9/F#                           A4/E 
Pólens de luz floriram o céu 
       A        A9 
Cosmos-jardim 
D9/F  
Primavera de estrelas 
                  A4/F# 
Mundos quais borboletas 
     A              A9 
Cortejaram astros-reis 

A         E/G#      F#m  F#m/E 
Deus fogo e água casou 
               B7 
Na estação da cria 
Gestou, se abriu 
          D9      D9/C# 
Concebeu crias e proles 
D9/B       E4 
Semen... teou 

A         E/G#       F#m  F#m/E 
Homem surgiu, vida uniu 
        B7 
Éter no ar 
                        D9 
Homem cresceu, multiplicou 
  D9/C#  D9/B     E4 
O bem floriu, aflorou 

A         D9/B A4/E 
Alma, animal animou 
A      D9/B A4/E  A 
Vida viveu, acasalou 
D9/B       A D9/B  D9/A 
Amor... teceu 
A     D9/B A4/E    A       D9/B 
Gerou vida, regerou vida de amor 
A4/E    A      A4/E  A      A9    A 
Homem viveu, regenerou
`
      },
      {
        id: 'tres-horas',
        title: 'Três horas',
        artist: 'Tim e Vanessa',
        key: 'D',
        content: `Introdução:  G   G(5b)   D/F#   Em   G/D   

A7/C#    Em   G/D   A7/C#

G         G(b5)  Bm7/F#
Primeira hora: troa a trombeta
Em       G/D      A7/C#
Olho por olho é a Lei
Em       G/D      A7/C#    Bm(11)       A
Toda justiça se fez pela clava de Moisés
       G           A6/G
Deus é um, Deus é o único
   D   Em7     F#m7(11)
Pastor que nos guia
  G     A6/G    G  A6/G  G  A7/C#
Nada nos faltará

G       G(b5)    Bm7/F#
Segunda hora: Clarins, Serafins
Em G/D       A7/C#
Murmúrios de bem
Em  G/D    A7/C#
Enfestam Belém
      Bm(11)      A
Eis a Luz na manjedoura
       G      A6/G
É o amor de Jesus
     D  Em7    F#m7(11)
Que vem de Deus-Pai
     G     A6/G G  A6/G   G   A7/C#
Ninguém se perderá

G       G(b5) Bm7/F#
Terceira hora: é paz na Terra
Em    G/D   A7/C#
Sabedoria e amor
  Em      G/D        A7/C#
O homem já se fez senhor
     Bm(11)       A
Todo véu se descortina
      G               A6/G
Ressurgindo em cada espírito
  D Em7  F#m7(11)
A vida da vida
   G          A6/G
De Deus e para Deus
    G  A6/G G A6/G G A7/C# G
O amor vencerá`
      },
      {
        id: 'perdao',
        title: 'Perdão',
        artist: 'Tim e Vanessa',
        key: 'D',
        content: `D(add9)      C/D
Toda a luz de uma estrela
G7M           A
Não consegue clarear
Em
Como o gesto de beleza
     A           A7
De quem está a perdoar

D(add9)    C/D
No exemplo de amor
G7M        A
Se revela o cristão
Em
Abraçando o inimigo
 A            A7
Com os braços do perdão`
      },
      {
        id: 'reconciliacao',
        title: 'Reconciliação e paz',
        artist: 'Tim e Vanessa',
        key: 'A',
        content: `A              Bm
Antes mesmo da tua oferta
E                A  E/G#     F#m
Mostra ao Pai a tua boa intenção
       B7               E
Reconcilia-te com teu irmão
  D        E7        A
A Com um aperto de mão
A            Bm
Se desejas a união
    E
De todos os povos
     A      E/G#  F#m
Em paz, em comunhão
        B7
Ensina hoje à criança
   E
O bem que o amor
 D     E7         A  A7
Faz ao nosso coração

          D
Paz no porvir
E/D       A
Reconciliação
F#m     B7
Ensina hoje à criança
   E
O bem que o amor
 D       E7       A
Faz ao nosso coração`
      },
      {
        id: 'jesus-mestre-f',
        title: 'Jesus, o Mestre',
        artist: 'Tim e Vanessa',
        key: 'D',
        content: `A6            G6/D
Jesus é o nosso Mestre
A6          G6/D
Ele veio ensinar
Bm                F#m
De Deus a sábia vontade
G                    A
E por Ele ao Pai chegar
      G A6    G6/D
E por Ele    chegar

A6               G6/D
Em cada passo um exemplo
A6            G6/D
De amor ao semelhante
Bm                    F#m
Deus sempre espera de nós
G                     A
Testemunho a todo instante
G A6      G6/D   A6
A todo instante`
      },
      {
        id: 'porto-amor',
        title: 'Porto Amor',
        artist: 'Tim e Vanessa',
        key: 'D',
        content: `D      A7    D
Com Jesus no leme
G/B              D   A7
Meu barquinho a navegar
D      A7     D
Com Jesus no leme
G/B           D   A7
Não tememos este mar

G            D/F#
Não há tempestade
Em         F#m
Não há vendaval
G             D/F#       A7  A7/G
Nada que me impeça de chegar
            D  A7  D  A7  D
Ao Porto Amor
D     A7     D
Com Jesus no leme
G/B               D   A7
Meu barquinho a deslizar
D     A7      D
Com Jesus no leme
G/B           D       A7
Meu barquinho vai chegar
G            D/F#
Não há tempestade
Em          F#m
Não há vendaval
G             D/F#         A7   A7/G
Nada que me impeça de chegar
            D   A7  D  A7  D
Ao Porto Amor`
      }
    ]
  },
  {
    id: 'block-g',
    name: 'Bloco G',
    songs: [
      {
        id: 'familia',
        title: 'Família Universal',
        artist: 'Tim e Vanessa',
        key: 'D',
        content: `[Intro] D  D7M(9)/F#  G7M  A6/G  D

D          Em
Em nome do Pai
G7M           A6/G           D
Aprendo a ser forte como o sol
           Em
Em nome da Mãe
G7M          A6/G            D
Aprendo os encantos de uma lua
              Em
Em nome do irmão
G7M           A6/G             D
Aprendo as virtudes de um cristão

D7M(9)/F#
Jesus
 G7M        D7M(9)/F# Em   Bm11
É mãe, pai, filho, irmão celeste
  A
Ó Mestre
     G7M  D7M(9)/F#
Sou um universo
       Em    Bm11          A
Dentro do universo da família
   G7M  D7M(9)/F# Em  A7   D
A caminho do milênio do amor

[Intro] ( D  D7M(9)/F#  G7M  A6/G  D )

D          Em
Em nome do Pai
G7M           A6/G           D
Aprendo a ser forte como o sol
           Em
Em nome da Mãe
G7M          A6/G            D
Aprendo os encantos de uma lua
              Em
Em nome do irmão
G7M           A6/G             D
Aprendo as virtudes de um cristão

D7M(9)/F#
Jesus
 G7M        D7M(9)/F# Em   Bm11
É mãe, pai, filho, irmão celeste
  A
Ó Mestre
     G7M  D7M(9)/F#
Sou um universo
       Em    Bm11          A
Dentro do universo da família
   G7M  D7M(9)/F# Em  A7   D
A caminho do milênio do amor

[Intro] ( D  D7M(9)/F#  G7M  A6/G  D )
`
      },
      {
        id: 'fala-com-deus',
        title: 'Fala com Deus',
        artist: 'Tim e Vanessa',
        key: 'C',
        content: `  C           Em    F           Em
Acenda a esperança, a palavra induz
Dm7          C   Dm7           C
Fortalece a fé, sustentando a paz
   C          Em     F             Em
Espalhe a Boa Nova, plante as boas obras
Dm7                C      Dm7     
Multiplicando os pães pra alimentar 
        C
multidões
   Dm7        G             C
Trabalho é esforço de evolução

  F                  Em
A língua fala com os homens
    Dm7               C
E o coração fala com Deus
  F                  Em
A língua fala com os homens
    Dm7               C
E o coração fala com Deus

C             Em        F            Em
Respeito e justiça, bondade, compreensão
Dm7            C       Dm7             C
Construímos a vida que hoje temos nas mãos
C         Em    F          Em
Pense alegria, fale consolação
Dm7               C  Dm7                C
Faça um céu todo dia para abrigar seu irmão
   Dm7       G             C
Bendita é a voz que fala amor`
      },
      {
        id: 'duplo-eterno',
        title: 'Duplo eterno',
        artist: 'Tim e Vanessa',
        key: 'A',
        content: `Introdução: A A/G#   D/F#   D/E   A4/E   

E7(11)

        A  A(add9)/G#
Sejamos um
      F#m7          A/E        D9/B   D9/A
E cada um de nós se sentirá melhor
         D9/B          C#m7
Buscando compreender a vida
C#7           F#m  F#m/E
Pelas mãos do Criador
D      A         E/G#         F#m
Ele me fez bem maior do que estou
    Dº        D             D#º13
Mas sinto que cresço a cada passo
       E4           E
A cada laço que nos une

        A A(add9)/G#
Sejamos um
        F#m           A/E
Na tradução do Amor Maior
             D9/B  D9/A
Que vibra em nós
        D9/B       C#m7
Com confiança e respeito
C#7         F#m       F#m/E
Pelo dom que Deus nos deu
D          D#º13       A
De sentir a vida com prazer
    D            A
Na comunhão dos corpos
E/G#             F#m7
Quando a mente é sã
E                A
Quando o olhar é puro
D                  A
Quando a voz é um canto
D                  D#º
Quando as mãos são formas
      E4          E
De dizer que te aceito

        A A(add9)/G#
Sejamos um
      F#m7          E         A   
E cada um de nós se sentirá maior
A(add9)/G#

        F#m7          E                 A
Na tradução do Amor Maior que vibra em nós
`
      },
      {
        id: 'se',
        title: 'Sê',
        artist: 'Tim e Vanessa',
        key: 'C',
        content: `C9            F7+/13
Olha o mundo a tua volta
C9                     F7+/13
Mas não te esqueças de ti
Am               Em
Tens a força das árvores
Am            Em
A beleza das flores
F            Am7/C          G
A pureza das águas e muito mais ...
C9             F7+/13
Tu tens a importância do sol
C9             F7+/13
E o encanto da lua
Am              Em
A liberdade dos pássaros
Am             Em
O poder das sementes
F             Am7/C            G
A fluidez dos ventos e muito mais...
C                C/B
Tu és mais que matéria
         F          Dm7
Que atração e sensação
Am                Em
Que instinto e mecânica
     F              Dm7/G              C  Dm7  Dm7/G
Não ignores a força que nos faz especiais
C9            F7+/13
Rega-te flor, acende-te sol
C9           F7+/13
Fortalece-te tronco
    C9               F7+/13
Purifica-te água, liberta-te pássaro
C9             F7+/13
Flui-te ó doce vento
F      Em   Dm7  Dm7/G     C
Voa em ti,  sê   pelos   seres
Dm7   Dm7/G    C      Dm7          Dm7/G   C9
Sê   deus  prá eles, quanto Deus é  para  ti`
      },
      {
        id: 'caim-abel',
        title: 'Caim e Abel',
        artist: 'Tim e Vanessa',
        key: 'C',
        content: `Dm7(13)      Em7            Csus4
Caim, onde está teu irmão Abel?
G7/B                 F9
Perante a voz do Sem-Fim
    F9(b5)   Em    Em/D Am  Am/G
Treslouca-se o homicida-réu
Dm7(13)          Em7 Dm7(13)            Em
Mas o sangue de Caim será o sangue em Abel
Csus4      C             Csus4 C
Céu na terra, na terra do céu
Dm7(13)      Em7
O rangido de dentes
Dm7(13)           Em7
Se aquieta sob um teto
Csus4     C  Csus4   C   Csus4 C  G4   G
Serão parentes, parturiente, feto

C    C7M/G           Am7/9       G7/B      C#4
Pelos laços fraternos Deus reconcilia, asserena
G7/B               F9 F9(b5)  C
Os desafetos no altar da família
F(add9) C/E  F(add9) C/E  F(add9) C/E F(add9) C/E
Pai,    mãe, ir......mão, cora....ção em pe...daços
   F(add9)   C/E         F(add9) C/E  F(add9) G4   G
Cativa,    partilha e cria       laços

Dm7(13)     Em7       C#4
Um vagido corusca o luto
G7/B            F9
E a treva se reluz
F9(b5)         C     F(add9)
Bendito é o fruto do vosso ventre
   C/E
Jesus
  F(add9)       C/E
Do vosso ventre
F(add9)      C/E
Ventre de Jesus`
      },
      {
        id: 'ramas',
        title: 'Ramas',
        artist: 'Tim e Vanessa',
        key: 'D',
        content: `D         D7+
Árvore cresceu   
    G        F#m7
De mudas-mocidades 
Em         A      D
Seiva, nutriente-céu
 D             D7+
Galhos são as mãos
  G         F#m7
Ramagem de amizades
 Em         A        D
Flores no pomar, vergeu

 F#               Bm
Juventude, terra culta
 A        D
Em ti brotou
    G     D
Um grão-semente
 F#   Bm    E      A
Da vontade de ser pão
     G        D
Frutifica maravilhas
 F#         Bm    E       A
Vence os desafios da Estação

 G          F#
Que do teu chão
       Bm         Gm
Nasçam brotos de luz
 D               A            G
Para alimentar.......a todos nós`
      }
    ]
  }
];


