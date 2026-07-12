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
        id: 'revida',
        title: 'Re-vida',
        artist: 'Tim e Vanessa',
        key: 'Eb',
        content: `
Capotraste na 3ª casa

[Am]Incomparável [Am9/B]escuridão, 
[C]noite mista de tortura[Am9/B]
[F7M]E de vazios abissais, 
[F7M]sou todo [G]sofregui[Am]dão

[Am]Os "ais" não escutam [Am9/B]os "ais", 
[C]o silêncio me acu[Am9/B]sa
[F7M]Meu pensamento se esvai, 
[F7M]um uni[G]verso sem cor[Am]

[Am]Mas em meio a eter[G]nidades um[D9/F#] rumor
[C]Ascende em prece e a[G]cende claridade
[C]E [C]resplandece, e a[G]calma tempestades

[C]          [G]      Ouô...

[C]Onde [G6/B]o         [Am]gládio que nos pu[Am7/G]ne?
[F]Onde [F7M(9)/E]o                 [Dm7] peso de gra[G]nitos?
[C]Onde a sen[Em]tença que [Am]zune [Am/G],
se o [F]amor é maior[F7M(9)/E] que meu fim[G]?

[F]A ora[G]ção, a vi[Em]da, a espe[Am]rança, 
[F]me aca[G]lenta,[C] Deus!
[F]Sinto um [G]sono e um sei[Em]o me en[Am]volve, 

[F]crian[G]ça se[C]rei...

[C]Onde [G6/B]o         [Am]gládio que nos pu[Am7/G]ne?
[F]Onde [F7M(9)/E]o                 [Dm7] peso de gra[G]nitos?
[C]Onde a sen[Em]tença que [Am]zune [Am/G],
se o [F]amor é maior[F7M(9)/E] que meu fim[G]?

[F]A ora[G]ção, a [Em]vida, a esperan[Am]ça, 
[F]me aca[G]lenta,[C] Deus!

[F]Sinto um [G]sono e um sei[Em]o me en[Am]volve, 
[F]crian[G]ça se[C]rei...

[F]crian[G]ça se[C]rei...
        `
      },
      {
        id: 'vestes-do-amor',
        title: 'Vestes do Amor',
        artist: 'Tim e Vanessa',
        key: 'A',
        content: `
[D] Quem me tocou?
[A] Pois eu senti[Db7] saindo de mim [F#m]uma virtude[D]
[A] Em meio [Db7]à [F#m]multidão
[D] Perdão, Senhor, [A]me entrego a ti
[Db7]Pois te toquei [F#m]buscando [D]saúde
E [A]logo meu [Db7]sangue [F#m]estancou
[Db7]Quem me tocou?[F#m]
[Db7]Quem me curou?[F#m]
[Bm7]A esperança [A]nos [E]liga [A]ao céu
[D]Toque [A]divino nas [Db7]vestes [F#m]do amor
[D]A ternura [A]é o [E/G#]orvalho[F#m]
[D]Ao sedento [A]via[E4]jor[E]
[D]O sol da [A]escuta é [E/G#]o agasalho[F#m]
[D]A [A]quem [E4]precisa [E]de ca[E4]lor  [E]
[E]Vai em [A]paz minha [E/G#]irmã [F#m]
[D]Foi a tua [A]fé que [E4]te salvou... [E]
[D]Foi a tua [D9]fé que [C#]te salvou... [A4]        `
      },
      {
        id: 'zaqueu',
        title: 'Zaqueu',
        artist: 'Tim e Vanessa',
        key: 'B',
        content: `

[B]Quero [E]ver o [F#]esperado Ra[B]bi na mul[E]tidão.  [F#]
[B]Quero [E]ver o [F#]esperado Ra[B]bi na mul[E]tidão.  [F#]

[G#m]Sei que[G#m/G] passa[G#m/F]rá por [Eb5+]aqui
[E]Sou peque[B/Eb]no e não posso ver[C#m], sua es[Eb7]tatura
[G#m]Tento à [G#m/G]frente, [G#m/F#]procuro[Eb5+] encontrar
[E]Um lugar de onde[B/Eb] O veja[C#m], uma ár[Eb7]vore ao céu

[G#m7]Me elev[F#/A#]arei[B] do[E] [F#]chão
Meu espírito [G#m7]deseja [Ebm9] re[E]tirar [E/Eb]a es[C#m]cama-véu
[F#/A#]E contemplar-te a visão  [B]   [E]   [F#]   [B]   [E]   [F#]

[B]Le[E]van[F#]tando Teu[F#] olhar
[B]Tu me [E]vês em [F#]meu lugar
[B]Me con[E]vidas a [F#]cear
Em [B]minha [E]casa vais[F#] entrar

[G#m]Não me[G#m/G]reço, sou [G#m/F#]Za[Eb5+]queu
[E]Mais um [B/Eb]servo no engano[C#m], sou um[Eb7] publicano
[G#m]Se des[G#m/G]tituí[G#m/F#] a quem [Eb5+]for
[E]Pagarei[B/Eb] com jus[C#m]teza qua[Eb7]tro vezes mais
[G#m7]Me eleva[F#/A#]rei[B] do[E] [F#]chão
Meu espí[G#m7]rito deseja[Ebm9] [E]retirar[E/Eb] a es[C#m]cama-véu
[F#/A#]E contemplar-te a visão  [B]   [E]   [F#]   [B]   [E]   [F#]

 G#m  G#m/G  G#m/F#  Eb5+ 
 E  B/Eb  C#m  Eb7  G#m7  F#/A#  B  E  F# 
 G#m7  Ebm9  E  E/Eb  C#m  F#/A#  B  E  F#  B  E  F# 

[B]Hoje [E]entrou em [F#]minha casa
A Verdade, [B]a Sal[E]vação   [F#]
E a Ti[B] eu [E]ofereço   [F#]
O ofí[B]cio de [E]meu pão   [F#]

G#m G#m/G G#m/F# Eb5+
[G#m]Já en[G#m/G]tendo o[G#m/F#] que [Eb5+]queres dizer:
[E] “Vinde a mim os[B/Eb] pequenos[C#m]..."
Os sicômo[Eb7]ros galgar

[G#m7]Me eleva[F#/A#]rei[B] do[E] [F#]chão
Meu espíri[G#m7]to deseja[Ebm9] re[E]tirar[E/Eb] a es[C#m]cama-véu
[F#/A#]E contemplar-te a visão   [B]   [E]   [F#]

[G#m7]Me eleva[F#/A#]rei[B] do[E]   [F#]chão
Meu espíri[G#m7]to deseja[Ebm9] re[E]tirar[E/Eb] a es[C#m]cama-véu
[F#/A#]E contemplar-te a visão   [B]   [E]    [F#]
[B]E contemplar-te a visão         [B]  [B4]   [B]        `
      },
      {
        id: 'cantaro',
        title: 'Cântaro',
        artist: 'Tim e Vanessa',
        key: 'B',
        content: `
Intro:  B   F#sus4/Bb    G#m7/E    F#sus4/E

   (3x)   F#7/9

[B]Como falas[F#sus4/Bb] tu comigo, [G#m7]sendo eu [G#m7/F#]samaritana
[E]Te revelas [E/D#]meu amigo, [E]C#]justo eu [F#7/9]mulher 
insana
    
[B]Oh, Gali[F#sus4/Bb]leu     [G#m7/E]
Junto ao[F#sus4/E] poço busco [B]água[F#sus4/Bb]          [G#m7/E]
E me [F#sus4/E]trazes a água[B] viva[F#sus4/Bb]          [G#m7/E]
Tu me compree[D#m7]ndes[E], no incons[D#m7]ciente[E], tenho 
sede [E/F]n'alma ven[F#7/9]cida
               
[B]Com teus [F#sus4/Bb]olhos me divi[G#m7]sas e me[G#m7/F#] livras da 
armadilha
[E]Onde os homens, [E/D#]os maridos, [E/C#]os altares 
[F#7/9]deste mundo
[B]Oh, Galileu[F#sus4/Bb]     [G#m7/E]
Junto ao[F#sus4/E] poço busco [B]água[F#sus4/Bb]          [G#m7/E]
E me [F#sus4/E]trazes a água[B] viva[F#sus4/Bb]          [G#m7/E]
Tu me com[D#m7]preendes[E], no incons[D#m7]ciente[E], tenho 
sede [E/F]n'alma ven[F#7/9]cida

[G#m]Se soubes[G#m/G]ses quem te[G#m/F#] pede de [G#m7]beber     [G#m7]
Busca[D#m7]ria [C#m7/9]água pura que [B]brota do espí[F#7/9]rito

[B]Estou plena,[F#sus4/Bb] estou viva, [G#m7]Siloé já não[G#m7/F#] sacia
[E]Me buscaste [E/D#]no mais fundo do[E/C#] meu ser eu te 
[F#7/9]encontro
[B]Oh, Galileu[F#sus4/Bb]          [G#m7/E]
[F#sus4/E]Tua presença me conforta
É verda[F#sus4/E]de que li[B]berta[F#sus4/Bb]          [G#m7/E]
Levarei teu [D#m7]cantaro[E]
[E]Eu direi aos [D#m7]ávidos
[E]Já habita em nós [E/F]o Messi[F#7/9]as

B  F#sus4/Bb    G#m7/E    F#sus4/E   (3x)  
Oh Galileu

[B]Junto ao poço eu te encontrei

        `
      },
      {
        id: 'a-casa-lar',
        title: 'A Casa-Lar',
        artist: 'Tim e Vanessa',
        key: 'A',
        content: `
        
[Intro] E  E/D#  E/C#  E/B  A9

E              A9
O ser no corpo é um passarinho
E   E/D#  E/C#  E/B  A9
Na janela quer voar
F#m7(4)/C#      C#m7          G#m7/D#
O pensar evola, vibra harmonias pelo   
  A9        A6(9)
éter, pelo ar

E              A9
Sofre os olhos deita a vista
E      E/D#  E/C#  E/B  A9
Sobre o mar, sobre amar
F#m7(4)/C#            C#m7      G#m7/D#  
Cativeiro, marinheiro, marear, homem ao 
A9  A6(9)
mar

A9
Mas o teu corpo
           E      E/D#     E/C#   E/B  A9
É teu meio de cantar de sentir, de sonhar
                  E   E/D#  E/C#  E/B  A9
Saborear ar e mar amorear, sensorear
                   E           
É tua casa, casulo, testemunhos, 
E/D#
estremunhos
A9                 E     E/D#     A9
A casa-lar, a casa, a casa, a casa
        `
      },
      {
        id: 'mediuns',
        title: 'Médiuns',
        artist: 'Tim e Vanessa',
        key: 'G',
        content: `
Intro] G  B7  C  Cm
        G  A4/G  C  D4  G


E|---2-0------------| 
B|-------1-0--------| 
G|-----------2-0----| 
D|-0--------------0-| 
A|------------------| 
E|------------------| 

G                      B7
Em verdade eu vos digo
             C         Cm
Que se eles se calarem
     G                A4/G
As pedras é que falarão
            C              D4
Vossos velhos terão sonhos
           C         D4    G
Vossos jovens profetizarão
G                      B7
Em verdade eu vos digo
             C         Cm
Que se eles se calarem
     G                A4/G
As pedras é que falarão
            C              D4
Vossos velhos terão sonhos
           C         D4    G
Vossos jovens profetizarão
Em               Bm
Cajado de Moisés
C                G
O manto de Elias
Em             Bm
Escada de Jacó
C                D7
As visões de Jeremias
G                    D
Hoje médiuns, antes, profetas
C               D7
Faculdades não mais ocultas
G                     D
Quantos falam, quantos sentem
C                        D7    G  D7
Quantos ouvem, quantas línguas
         G             B7
Em verdade eu vos digo
             C         Cm
Que se eles se calarem
     G                  A4/G
As pedras é que falarão
            C              D4
Vossos velhos terão sonhos
           C         D4    G
Vossos jovens profetizarão
G                      B7
Em verdade eu vos digo
             C         Cm
Que se eles se calarem
     G                A4/G
As pedras é que falarão
            C                D4
Vossos velhos terão sonhos
           C         D4    G
Vossos jovens profetizarão
Em                  Bm
Nas Bodas de Caná
C                    G
Na cura das feridas
Em                Bm
Na Transfiguração
C       C#m5-         D7
Nos dando a água viva
G                         D
Sempre Mestre, sempre Profeta
C                D7
Ser divino, Ser o Guia
G                       D
Quantos calam, quantos sentem
C                        D7    G  D7
Quantos ouvem o médium da Vida
G                      B7
Em verdade eu vos digo
             C         Cm
Que se eles se calarem
     G                A4/G
As pedras é que falarão
            C              D4
Vossos velhos terão sonhos
           C         D4    G
Vossos jovens profetizarão

( G  A  C  D4 )        `
      }
    ]
  },
  {
    id: 'block-b',
    name: 'Bloco B',
    songs: [
      {
        id: 'para-sempre',
        title: 'Para sempre em meu coração',
        artist: 'Meu Cantar',
        key: 'E',
        content: `
[Primeira Parte]

E                            E7M
Nem se eu pudesse ter o pôr do sol
   A                              Am6
A lua ou as estrelas, toda natureza
E                           E7M
Nem se eu tivesse todo ouro
   A                               Am6
E não tivesse um amigo... Nada teria
A                      B7            
  Pois quando eu começasse a me sentir 
    G#m   C#m
sozinho
A               B7        E  E7
Quem é que me consolaria?
A               B7                  G#m  
Mas Deus é bom botou você em meu caminho
C#m

                      F#m    B7
Pra que não me falte alegria

[Refrão]
            E        E7M                 
Você vai estar para sempre dentro do meu 
     A
coração
         Am6    E
Vou lembrar de nós
              E7M                     A  
Sempre que alguém contar esta canção!
Am6


[Segunda Parte]

E                                  E7M
Nem se eu soubesse muitas palavras
A                                    Am6
Nem se eu as transformasse em poesia
E                              E7M
Não diria tudo o que há pra dizer
A                          Am6
A inspiração de certo faltaria
E               B7           G#m   C#m
Mas se algum dia me faltar o seu abraço?
A           B7            E  E7
Não será triste a saudade
A             B             G#m        C#m
Pois sei que nos encontraremos no espaço
       F#m           B7
Meu amigo de verdade        `
      },
      {
        id: 'apenas-amar',
        title: 'Apenas Amar',
        artist: 'Denis Soares',
        key: 'C',
        content: `
  C                F7M              
Todo o Céu se organiza para vir nos 
 C            C7M
transformar
   C                F7M           G/C  
O Cristo já nos auxilia para vida nova 
    G
alçar
C                   F7M               
Ondas de atos belos podem vir de nossas 
    C          C7M
próprias mãos
C                F7M               G/C   
Sentimentos triunfantes brotam naturais, 
   G
então

F7M           Em          F7M          Em
Vou por dentro me preparar pra sem rebeldia
 aceitar
F7M         Em           F7M         G
Invencível expande o amor em fraternidade

F       F7M    C
E eu desejo apenas amar, e todo um mar
F    F7M        C
De afetos cativar
F    F7M                 C
Uma luz vem pra resplandecer, dentro do ser
F         F7M          C
Para ao Pai glorificar        `
      },
      {
        id: 'amigo-presente',
        title: 'Amigo presente',
        artist: 'Xará - Luiz Ricardo',
        key: 'F',
        content: `
Dm           Gm
Vem lá do infinito
     C               Dm
Me amar em meio ao silêncio
                Gm
E pelos meus caminhos
    C           Dm
Se faz amigo presente
C                     Dm
Que Jesus te cubra de amor e luz
A                         C
Possa eu acompanhar teus passos
                 Gm                Dm    C
Pois entre teus braços me sinto feliz
            Dm     C
Me sinto feliz...
            Dm     C
me sinto feliz...
            Dm
me sinto feliz
        `
      },
      {
        id: 'bilha',
        title: 'Bilha',
        artist: 'Tim e Vanessa',
        key: 'Bb',
        content: `

Bb          Eb     F
Uo Uo Uo Uo Uoooooo

Bb
O evangelho nas areias
Eb                    Bb    Eb
Áquila e Prisca, a família  uououoooo
Bb
Na pureza de bondade
Eb                      Bb    Eb
Abrem suas portas ao errante  uououoooo

[Refrão]

D#
És bem vindo à nossa casa
Bb
Toma a água, eis a bilha
Eb            F      Bb
Dessendenta nela tua vida
Eb            F       Bb
Vem beber do vaso que sacia

Gm         Dm         D#
Ouço as histórias, tua casa, o teu pai
Gm         Dm         D#
Teu passado e minha agonia
Gm         Dm         D#       Eb
Já enxergo agora, no trabalho, no tear
D#         Dm
Vou tecendo meu falar e
D#                   F
A nossa amizade é um culto

[Refrão]

D#
És bem vindo à nossa casa
Bb
Toma a água, eis a bilha
Eb           F       Bb
Dessendenta nela tua vida
Eb            F       Bb
Vem beber do vaso que sacia

Gm         Dm
Sou cristão confesso
D#
Digo mais, eu fui tão cego
Gm         Dm         D#
Que tantos remorsos carrego
Gm         Dm
No afã de ter sucesso
D#
Inaugurei perseguições
Eb         Dm
São incontáveis as ações
D#                                 F
Foi quando eu mergulhei o olhar em Estevão
         D#   F    Bb
Uo Uo Uo Uooo Uooo Uooo
D#  F   Bb
Uoooôoooôooo
D#  F   Bb
Uoooôoooôooo

Gm        Dm     D#
Devo ir embora, tua casa é um altar
Gm           Dm        D#  Eb  F
Sou estorvo à tua harmonia

D#                      F
És presente em nossa tenda
D#                        F
Qualquer um que se arrependa
Eb         F            Bb
E conosco sirva O Bom Amigo
Eb           F           Bb
Sois ovelha que volta ao aprisco
Bb       Eb   F
Uoooôoooôooo
Bb       Eb   F
Uoooôoooôooo

[Refrão]

D#
És bem vindo à nossa casa
Bb
Toma a água, eis a bilha
Eb          F        Bb
Dessendenta nela tua vida
Eb            F        Bb
Vem beber do vaso que sacia
        Eb   F
Uoooôoooôooo
Bb
Uoooôooo
  Eb           F        Bb
… Pois serás o vaso que sacia
        `
      },
      {
        id: 'uma-prece',
        title: 'Uma prece',
        artist: 'Cacau',
        key: 'D',
        content: `
[Intro] Bm  G  Bm  G

  Bm                       G             
Ó poderosa águia que há no alto do totem
D/F#

Em                  A
Dá-me tuas asas, me ensina a voar
   Bm                         G            
Cruzar os horizontes, vencer montes e mares
  D/F#

      Em                     A
Com a luz do saber, pela virtude de amar

Bm                                  G    
Com tua força tamanha, ó urso, me ajude a
          D/F#
 derrubar
Em                                
As barreiras da vida que eu venha a 
  F#
encontrar

             Bm                           
E eu venho pedir a ti, ó tartaruga, que o 
         G              D/F#
totem estás a sustentar
Em                               F#
Dá-me tua certeza de um dia eu poder chegar
             Bm                 G
A ver-te nas asas da águia, na força do 
urso
Em                        A
Em todas as coisas criadas por ti
 Bm                   G              D/F#
Eleva minh'alma, me faz tão perfeito
    Em                     A         F#
Me leva a saber que estás dentro de mim

Bm                        G    D/F#
Ó Pai Nosso que estás no céu
Em                      F#
Santificado seja o teu nome
                   Bm
Em favor de todos nós

[Final] Bm  G  Em  A
        Bm  G  Em  A        `
      },
      {
        id: 'de-bem',
        title: 'De bem com a vida',
        artist: 'Tim e Vanessa',
        key: 'A',
        content: `
A         Bm       A
Qual andorinhas felizes
D        D9/C#      E
Bailando soltas no ar
D      D9/C# E
Ouve a suave música
   D     D9/C#   E
De Deus, melodia sem par

A      Bm        A
Nela embala teus sonhos
D       D9/C#   E
Tua fé, tuas quimeras
D        D9/C#  E
Na brisa quente dos verões
D          D9/C#    E      E7
No perfume das primaveras

D           Bm       E
E no encantamento da vida
  D         B7/D#  E
Glorifica o eterno criador
D           Bm         E
Viverás, assim, na alegria
D          B7/D#  E      A
Do mais sublime e puro amor
        `
      }
    ]
  },
  {
    id: 'block-c',
    name: 'Bloco C',
    songs: [
      {
        id: 'apostolo',
        title: 'Apóstolo da Samaria',
        artist: 'Tim e Vanessa',
        key: 'D',
        content: `
D                      G
Foi assim que o Senhor derramou
 D                        G   A
Vinho e azeite em nossa ferida
  D                   G
Foi assim que o Messias fiou
     D            G  A  Bm
Saga santa, novelo de vida

  G            A       Bm
Salva o próximo e ti salvarás
   G       A         Bm
Não olvides o amor em tuas mãos
    F#m             Bm
Faze isso e, então, viverás
     G         D        A
Vê teu lume no olhar dos irmãos

  D           G      A
Pela verdade viveu Simeão
   D          G            A
Eis o estandarte na cruz Um ancião
   G           D
O apóstolo da Samaria
   G          D
Verbo vivo, poesia

 D                   G
Foi assim que o Senhor semeou
 D                   G
Grão sagrado em solo profano
 D                   G
Foi assim que Jesus nos legou
   D               G  A Bm
A bondade de um samaritano

   G              A    Bm
Pulsa o conto, conta o Mashal
  G        A               Bm
Fez-se um mártir Em honra do bem
F#m                Bm
Seu madeiro ferindo o mal
G              D      A
Como arado a cortar o Siquém
        `
      },
      {
        id: 'veredas',
        title: 'Veredas',
        artist: 'Tim e Vanessa',
        key: 'E',
        content: `
E
Elias no Carmelo
     A         Am
Na defesa do Torá
 E     B      C#m
Ateia fogo às toras
     F#             B    A    B
Condenando os adoradores de Baal

E
Ei-lo, João Batista
      A          Am
Na aurora do Evangelho
E       B    C#m
Clama a todo povo
       F#m            B
O arrependimento dos homens
A       B        E
Pois já vem o Messias

    A                        B
Rejubila desde o ventre de Izabel
        E             A        B
Já não chora os seus filhos a Raquel
        A                       B
Luz que arde nos desertos de Israel
        E
Não se cansa
       A          B
O seu verbo é um bordão
       C#m       G#m         A   G#m F#m
Vai em peles de camelo, gafanhoto e  mel

E          B          C#m
Voz que calaram na bandeja
        G#m        A
Ainda estronda no Jordão
       E          B       A
Sob a Pena de Talião a reparação
F#m      G#m
Benção divina
A      B               E
Pedagogia da reencarnação

[Refrão]

E       A                  E
Endireitai as veredas do amor
        A                     E
Reconduzindo o rebanho ao Pastor
        A            E
Água e fogo na evolução
        A       B      E
Na geração da Regeneração
        `
      },
      {
        id: 'parnaso',
        title: 'Parnaso de além túmulo',
        artist: 'Tim e Vanessa',
        key: 'A',
        content: `
A9   A9/G#     F#m7/4  E4
Além       do túmulo
            D           D#m5-
O espírito canta, inda canta
        A       Bm/A     A7+      D
Seus ideais de paz, de amor e de luz
            A     D    C#m7
No ditoso país onde Jesus
   Bm7         C#m7       D
Impera com bondade sacrossanta
 A9    A9/G#     F#m7/4  E4
Nessas       mansões
          D           D#m5-
A lira levanta, se levanta
        A        Bm/A       A7+   D
Glorificando o amor que em Deus transluz
                A       D      C#m7
Para o bem exalçar que nos conduz
     Bm7      E          A
À divina alegria pura e santa
A         E/G#   D  E
Nessa castália eterna
A        E/G#     D  E
Da harmonia transborda
   A     E/G#        D  E
A luz excelsa da poesia
       A     E/G#        D        E
Que a Terra toda inunda de esplendor
 F#m           D           A             
Hinos das esperanças espargindo sobre os 
 E/G#
homens
    D              D#m5-
Tornando-os mais unidos
         A          E      D
Na ascensão para o belo e para o amor
        `
      },
      {
        id: 'juventude',
        title: 'Juventude e Vida',
        artist: 'Tim e Vanessa',
        key: 'C',
        content: `
C
Vida na Verdade
   G/B
È plena Liberdade
F                G
Enriquecida de Amor
F                 G            C
Força da vida , o Bem em plenitude
   Em             F
Os braços da Juventude
E                  Am       G4 G G4 G
Garantindo uma estrada florida
F                G               C
Como linda borboleta que sai do casulo
   Em            F
De asas tão coloridas
  D7(9)/F#     G
Surpresa descoberta
F              G            C    G
É a Liberdade já quase perfeita
      C    Em
Juventude e Vida
F                 G
O Saber namora o coração
 C          Em
O Pai conta com a definição
F                  G             C   G
De quem na Verdade valoriza a vida        `
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


