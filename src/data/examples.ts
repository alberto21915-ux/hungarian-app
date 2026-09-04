// Example sentences for each vocabulary word, keyed by the Hungarian headword
// exactly as it appears in content.ts.
//
// Constraint: these use only grammar and vocabulary introduced by the
// Introduction and Unit 1 of "Colloquial Hungarian". In particular the verb
// 'to be' (van/vannak) is NOT used, because the book introduces it in Unit 2 —
// the only exceptions are the 'hol' examples, where Hungarian grammar requires
// it and leaving it out would be wrong.

export interface Example {
  hu: string
  en: string
}

export const examples: Record<string, Example[]> = {
  // --- Unit 1, Dialogue 1 ---
  'a(z)': [
    { hu: 'A tanár magyar.', en: 'The teacher is Hungarian.' },
    { hu: 'Az ablak új.', en: 'The window is new.' },
    { hu: 'A diákok fiatalok.', en: 'The students are young.' },
  ],
  apa: [
    { hu: 'Az apa tanár.', en: 'The father is a teacher.' },
    { hu: 'Ő az apa.', en: 'He is the father.' },
  ],
  budapesti: [
    { hu: 'Ő budapesti.', en: 'He is from Budapest.' },
    { hu: 'A budapesti diákok fiatalok.', en: 'The Budapest students are young.' },
  ],
  egy: [
    { hu: 'Ez egy könyv.', en: 'This is a book.' },
    { hu: 'Az egy toll.', en: 'That is a pen.' },
  ],
  fekete: [
    { hu: 'A toll fekete.', en: 'The pen is black.' },
    { hu: 'Ez egy fekete füzet.', en: 'This is a black notebook.' },
  ],
  férfi: [
    { hu: 'Ő egy férfi.', en: 'He is a man.' },
    { hu: 'A férfi tanár.', en: 'The man is a teacher.' },
  ],
  'Hogy mondják magyarul?': [
    { hu: 'Hogy mondják magyarul: teacher?', en: 'How do you say "teacher" in Hungarian?' },
    { hu: 'Hogy mondják magyarul: window?', en: 'How do you say "window" in Hungarian?' },
  ],
  igen: [
    { hu: 'Igen, ő magyar.', en: 'Yes, he is Hungarian.' },
    { hu: 'Igen, ez egy szótár.', en: 'Yes, this is a dictionary.' },
  ],
  ki: [
    { hu: 'Ki ő?', en: 'Who is he?' },
    { hu: 'Ki az?', en: 'Who is that?' },
    { hu: 'Kik ők?', en: 'Who are they?' },
  ],
  külföldi: [
    { hu: 'Ő külföldi.', en: 'He is a foreigner.' },
    { hu: 'A külföldi család amerikai.', en: 'The family from abroad is American.' },
  ],
  magyar: [
    { hu: 'Ő magyar.', en: 'He is Hungarian.' },
    { hu: 'Ez egy magyar könyv.', en: 'This is a Hungarian book.' },
  ],
  nem: [
    { hu: 'Nem, ő nem tanár.', en: 'No, he is not a teacher.' },
    { hu: 'A könyv nem új.', en: 'The book is not new.' },
  ],
  név: [
    { hu: 'Gábor egy magyar név.', en: 'Gábor is a Hungarian name.' },
    { hu: 'Ez egy tipikus név.', en: 'This is a typical name.' },
  ],
  ő: [
    { hu: 'Ő tanár.', en: 'He is a teacher.' },
    { hu: 'Ő nem amerikai.', en: 'She is not American.' },
  ],
  óh: [
    { hu: 'Óh, persze!', en: 'Oh, of course!' },
    { hu: 'Óh, ez érdekes.', en: 'Oh, that is interesting.' },
  ],
  persze: [
    { hu: 'Persze, ő magyar.', en: 'Of course, he is Hungarian.' },
    { hu: 'Igen, persze.', en: 'Yes, of course.' },
  ],
  tanár: [
    { hu: 'Az apa tanár.', en: 'The father is a teacher.' },
    { hu: 'A tanárok fiatalok.', en: 'The teachers are young.' },
  ],
  tipikus: [
    { hu: 'Ez egy tipikus magyar név.', en: 'This is a typical Hungarian name.' },
    { hu: 'Gábor tipikus férfi név.', en: 'Gábor is a typical man’s name.' },
  ],

  // --- Unit 1, Dialogue 2 (professions) ---
  amerikai: [
    { hu: 'Melanie amerikai.', en: 'Melanie is American.' },
    { hu: 'Ők amerikaiak.', en: 'They are American.' },
  ],
  anya: [
    { hu: 'Az anya filmrendező.', en: 'The mother is a film director.' },
    { hu: 'Ő az anya.', en: 'She is the mother.' },
  ],
  csak: [
    { hu: 'Csak Gabriel magyar.', en: 'Only Gabriel is Hungarian.' },
    { hu: 'Csak egy könyv.', en: 'Only one book.' },
  ],
  család: [
    { hu: 'Ez egy érdekes család.', en: 'This is an interesting family.' },
    { hu: 'A család magyar.', en: 'The family is Hungarian.' },
  ],
  de: [
    { hu: 'A könyv jó, de drága.', en: 'The book is good, but expensive.' },
    { hu: 'Ő magyar, de nem budapesti.', en: 'He is Hungarian, but not from Budapest.' },
  ],
  egyetemista: [
    { hu: 'Max egyetemista.', en: 'Max is a college student.' },
    { hu: 'Az egyetemisták fiatalok.', en: 'The college students are young.' },
  ],
  érdekes: [
    { hu: 'Ez egy érdekes könyv.', en: 'This is an interesting book.' },
    { hu: 'A család érdekes.', en: 'The family is interesting.' },
  ],
  és: [
    { hu: 'Gabriel és Melanie.', en: 'Gabriel and Melanie.' },
    { hu: 'A tanár és a diák.', en: 'The teacher and the student.' },
  ],
  ez: [
    { hu: 'Ez egy toll.', en: 'This is a pen.' },
    { hu: 'Mi ez?', en: 'What is this?' },
    { hu: 'Ezek füzetek.', en: 'These are notebooks.' },
  ],
  fiatal: [
    { hu: 'A zenész fiatal.', en: 'The musician is young.' },
    { hu: 'Fiatal diákok.', en: 'Young students.' },
  ],
  filmrendező: [
    { hu: 'Melanie filmrendező.', en: 'Melanie is a film director.' },
    { hu: 'A filmrendező amerikai.', en: 'The film director is American.' },
  ],
  foglalkozás: [
    { hu: 'Ez egy érdekes foglalkozás.', en: 'This is an interesting profession.' },
    { hu: 'Tanár — ez egy jó foglalkozás.', en: 'Teacher — that is a good profession.' },
  ],
  hanem: [
    { hu: 'Ő nem tanár, hanem zenész.', en: 'He is not a teacher, but a musician.' },
    { hu: 'Ezek nem ceruzák, hanem tollak.', en: 'These are not pencils, but pens.' },
  ],
  is: [
    { hu: 'Ő is amerikai.', en: 'He is American too.' },
    { hu: 'Ez is egy könyv.', en: 'This is a book too.' },
  ],
  pedig: [
    { hu: 'Ez egy tanterem, az pedig egy iroda.', en: 'This is a classroom, and that is an office.' },
    { hu: 'Gabriel magyar, Melanie pedig amerikai.', en: 'Gabriel is Hungarian, and Melanie is American.' },
  ],
  szerintem: [
    { hu: 'Szerintem érdekes.', en: 'I think it is interesting.' },
    { hu: 'Szerintem is.', en: 'I think so too.' },
  ],
  zenész: [
    { hu: 'Mike zenész.', en: 'Mike is a musician.' },
    { hu: 'A zenész fiatal.', en: 'The musician is young.' },
  ],

  // --- Unit 1, Dialogue 3 (things in the room) ---
  ablak: [
    { hu: 'Az ablak új.', en: 'The window is new.' },
    { hu: 'Az ott az ablak.', en: 'That over there is the window.' },
  ],
  angol: [
    { hu: 'Ez egy magyar-angol szótár.', en: 'This is a Hungarian-English dictionary.' },
    { hu: 'Az angol könyv drága.', en: 'The English book is expensive.' },
  ],
  asztal: [
    { hu: 'Ez egy asztal.', en: 'This is a table.' },
    { hu: 'Az asztal új.', en: 'The table is new.' },
  ],
  automata: [
    { hu: 'Az egy Túró Rudi automata.', en: 'That is a Túró Rudi vending machine.' },
    { hu: 'Ez egy automata.', en: 'This is a vending machine.' },
  ],
  az: [
    { hu: 'Mi az?', en: 'What is that?' },
    { hu: 'Az egy szék.', en: 'That is a chair.' },
    { hu: 'Azok füzetek.', en: 'Those are notebooks.' },
  ],
  büfé: [
    { hu: 'Ez a büfé.', en: 'This is the snack bar.' },
    { hu: 'Ez itt a büfé.', en: 'This here is the snack bar.' },
  ],
  ceruza: [
    { hu: 'Ez egy ceruza.', en: 'This is a pencil.' },
    { hu: 'Ezek ceruzák.', en: 'These are pencils.' },
  ],
  füzet: [
    { hu: 'Az egy füzet.', en: 'That is a notebook.' },
    { hu: 'A füzetek újak.', en: 'The notebooks are new.' },
  ],
  hol: [
    { hu: 'Hol van a szótár?', en: 'Where is the dictionary?' },
    { hu: 'Hol van a tanterem?', en: 'Where is the classroom?' },
  ],
  iroda: [
    { hu: 'Az egy iroda.', en: 'That is an office.' },
    { hu: 'Ez az iroda.', en: 'This is the office.' },
  ],
  könyv: [
    { hu: 'Ez egy könyv.', en: 'This is a book.' },
    { hu: 'A könyv drága.', en: 'The book is expensive.' },
    { hu: 'Ezek könyvek.', en: 'These are books.' },
  ],
  mi: [
    { hu: 'Mi ez?', en: 'What is this?' },
    { hu: 'Mi az?', en: 'What is that?' },
    { hu: 'Mik ezek?', en: 'What are these?' },
  ],
  ott: [
    { hu: 'Mi az ott?', en: 'What is that over there?' },
    { hu: 'Az ott a tábla.', en: 'That over there is the blackboard.' },
  ],
  szék: [
    { hu: 'Az egy szék.', en: 'That is a chair.' },
    { hu: 'A székek újak.', en: 'The chairs are new.' },
  ],
  szótár: [
    { hu: 'Ez egy magyar-angol szótár.', en: 'This is a Hungarian-English dictionary.' },
    { hu: 'A szótárak drágák.', en: 'The dictionaries are expensive.' },
  ],
  tábla: [
    { hu: 'Az ott a tábla.', en: 'That over there is the blackboard.' },
    { hu: 'A tábla fekete.', en: 'The blackboard is black.' },
  ],
  tanterem: [
    { hu: 'Ez egy tanterem.', en: 'This is a classroom.' },
    { hu: 'A tanterem új.', en: 'The classroom is new.' },
  ],
  toll: [
    { hu: 'Ez egy toll.', en: 'This is a pen.' },
    { hu: 'Ezek nem ceruzák, hanem tollak.', en: 'These are not pencils, but pens.' },
  ],

  // --- Unit 1, Dialogue 4 (Budapest friends) ---
  antropológus: [
    { hu: 'Zsófia antropológus.', en: 'Zsófia is an anthropologist.' },
    { hu: 'Az antropológus magyar.', en: 'The anthropologist is Hungarian.' },
  ],
  '-né': [
    { hu: 'Szabó Zoltánné.', en: 'Mrs Zoltán Szabó.' },
    { hu: 'Szabóné tanár.', en: 'Mrs Szabó is a teacher.' },
  ],
  itt: [
    { hu: 'Ez itt a tanterem.', en: 'This here is the classroom.' },
    { hu: 'Ez itt Zsófia.', en: 'This here is Zsófia.' },
  ],
  jogász: [
    { hu: 'Zoltán jogász.', en: 'Zoltán is a lawyer.' },
    { hu: 'A jogász budapesti.', en: 'The lawyer is from Budapest.' },
  ],
  szabó: [
    { hu: 'Szabó egy magyar név.', en: 'Szabó is a Hungarian name.' },
    { hu: 'Ő Szabó Zoltán.', en: 'He is Zoltán Szabó.' },
  ],
  szülő: [
    { hu: 'Ők a szülők.', en: 'They are the parents.' },
    { hu: 'A szülők magyarok.', en: 'The parents are Hungarian.' },
  ],

  // --- Unit 1, Dialogue 5 (students and teachers) ---
  barát: [
    { hu: 'Új barátok!', en: 'New friends!' },
    { hu: 'A barátok budapestiek.', en: 'The friends are from Budapest.' },
  ],
  'De jó!': [
    { hu: 'Új barátok! De jó!', en: 'New friends! Great!' },
    { hu: 'De jó, ez egy új könyv!', en: 'Great, this is a new book!' },
  ],
  diák: [
    { hu: 'Ő diák.', en: 'He is a student.' },
    { hu: 'A diákok fiatalok.', en: 'The students are young.' },
  ],
  férfiak: [
    { hu: 'Ők férfiak.', en: 'They are men.' },
    { hu: 'A férfiak tanárok.', en: 'The men are teachers.' },
  ],
  fiú: [
    { hu: 'Ő egy fiú.', en: 'He is a boy.' },
    { hu: 'A fiúk diákok.', en: 'The boys are students.' },
  ],
  ismerős: [
    { hu: 'Új ismerősök!', en: 'New acquaintances!' },
    { hu: 'Ők ismerősök.', en: 'They are acquaintances.' },
  ],
  lány: [
    { hu: 'Ő egy lány.', en: 'She is a girl.' },
    { hu: 'A lányok diákok.', en: 'The girls are students.' },
  ],
  nő: [
    { hu: 'Ő egy nő.', en: 'She is a woman.' },
    { hu: 'A nők tanárok.', en: 'The women are teachers.' },
  ],
  papír: [
    { hu: 'Ez egy papír.', en: 'This is a piece of paper.' },
    { hu: 'Ezek papírok.', en: 'These are papers.' },
  ],
  tessék: [
    { hu: 'Zsuzsi! — Tessék.', en: 'Zsuzsi! — Yes?' },
    { hu: 'Tessék, ez a könyv.', en: 'Here you are, this is the book.' },
  ],
  'tessék?': [
    { hu: 'Tessék? Ezek ceruzák?', en: 'Excuse me? Are these pencils?' },
    { hu: 'Tessék? Mi ez?', en: 'Excuse me? What is this?' },
  ],
  új: [
    { hu: 'Ez egy új könyv.', en: 'This is a new book.' },
    { hu: 'Az új diákok és tanárok.', en: 'The new students and teachers.' },
  ],
  újság: [
    { hu: 'Ez egy újság.', en: 'This is a newspaper.' },
    { hu: 'Az újságok újak.', en: 'The newspapers are new.' },
  ],

  // --- Unit 1, Dialogue 6 (describing things) ---
  drága: [
    { hu: 'A szótár drága.', en: 'The dictionary is expensive.' },
    { hu: 'Ezek a könyvek drágák.', en: 'These books are expensive.' },
  ],
  elég: [
    { hu: 'A szótár elég drága.', en: 'The dictionary is rather expensive.' },
    { hu: 'A könyv elég jó.', en: 'The book is fairly good.' },
  ],
  jó: [
    { hu: 'A könyv jó.', en: 'The book is good.' },
    { hu: 'Ezek nagyon jók.', en: 'These are very good.' },
    { hu: 'De jó!', en: 'Great!' },
  ],
  milyen: [
    { hu: 'Milyen a magyar nyelv?', en: 'What is the Hungarian language like?' },
    { hu: 'Milyen könyv ez?', en: 'What kind of book is this?' },
    { hu: 'Milyenek a szótárak?', en: 'What are the dictionaries like?' },
  ],
  nagyon: [
    { hu: 'A magyar nyelv nagyon szép.', en: 'The Hungarian language is very beautiful.' },
    { hu: 'Ez nagyon érdekes.', en: 'This is very interesting.' },
  ],
  regény: [
    { hu: 'Ez egy új regény.', en: 'This is a new novel.' },
    { hu: 'A regények érdekesek.', en: 'The novels are interesting.' },
  ],
  szép: [
    { hu: 'A magyar nyelv szép.', en: 'The Hungarian language is beautiful.' },
    { hu: 'Ez egy szép név.', en: 'This is a beautiful name.' },
  ],
}
