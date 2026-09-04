// Course content, extracted from "Colloquial Hungarian" (Rounds & Sólyom).
// Unit 0 = pronunciation intro. Units 1-15 = the book's chapters.
// Only unit 0 and unit 1 are filled in so far — units 2-15 are the next batch.

export interface DialogueLine {
  speaker: string
  hu: string
  en: string
}

export interface VocabItem {
  hu: string
  en: string
}

export interface Track {
  label: string
  storagePath: string // path inside the Supabase 'audio' storage bucket
}

export interface Lesson {
  id: string
  unit: number
  day: number
  titleHu: string
  titleEn: string
  note?: string
  dialogue: DialogueLine[]
  vocab: VocabItem[]
  tracks: Track[]
}

export const lessons: Lesson[] = [
  {
    id: 'intro-1',
    unit: 0,
    day: 1,
    titleHu: 'Kiejtés',
    titleEn: 'Pronunciation warm-up',
    note: 'One-time warm-up before Unit 1 — the alphabet, consonants, vowels, and intonation. Listen and repeat each clip; no vocab review for this one.',
    dialogue: [],
    vocab: [],
    tracks: [
      { label: 'Introduction', storagePath: 'Intro/intro/01-introduction.mp3' },
      { label: 'Alphabet', storagePath: 'Intro/intro/02-alphabet.mp3' },
      { label: 'Consonants (different to English)', storagePath: 'Intro/intro/03-consonants.mp3' },
      { label: 'Palatal consonants', storagePath: 'Intro/intro/04-palatal-consonants.mp3' },
      { label: 'Consonant lengths', storagePath: 'Intro/intro/05-consonant-lengths.mp3' },
      { label: 'Vowels', storagePath: 'Intro/intro/06-vowels.mp3' },
      { label: 'Intonation', storagePath: 'Intro/intro/07-intonation.mp3' },
    ],
  },
  {
    id: 'u1-d1',
    unit: 1,
    day: 1,
    titleHu: 'A külföldi család',
    titleEn: 'The family from abroad',
    dialogue: [
      { speaker: 'Zsolt', hu: 'Ki ő?', en: 'Who is he?' },
      { speaker: 'Ildikó', hu: 'Ő Fekete Gabriel. Tanár. Ő az apa.', en: 'He is Gabriel Fekete. He’s a teacher. He is the father.' },
      { speaker: 'Zsolt', hu: 'Az apa magyar?', en: 'Is the father Hungarian?' },
      { speaker: 'Ildikó', hu: 'Igen. Budapesti.', en: 'Yes. He’s from Budapest.' },
      { speaker: 'Zsolt', hu: 'A Gabriel magyar név?', en: 'Is Gabriel a Hungarian name?' },
      { speaker: 'Ildikó', hu: 'Nem.', en: 'No.' },
      { speaker: 'Zsolt', hu: 'Hogy mondják magyarul: Gabriel?', en: 'How do you say Gabriel in Hungarian?' },
      { speaker: 'Ildikó', hu: 'Gábor.', en: 'Gábor.' },
      { speaker: 'Zsolt', hu: 'Óh, persze. Egy tipikus magyar név.', en: 'Oh, of course. It’s a typical Hungarian name.' },
      { speaker: 'Ildikó', hu: 'Igen, tipikus férfi név.', en: 'Yes, a typical man’s name.' },
    ],
    vocab: [
      { hu: 'a(z)', en: 'the' },
      { hu: 'apa', en: 'father' },
      { hu: 'budapesti', en: 'person from Budapest' },
      { hu: 'egy', en: 'one, a' },
      { hu: 'fekete', en: 'black' },
      { hu: 'férfi', en: 'man' },
      { hu: 'Hogy mondják magyarul?', en: 'How do you say... in Hungarian?' },
      { hu: 'igen', en: 'yes' },
      { hu: 'ki', en: 'who' },
      { hu: 'külföldi', en: 'foreign(er)' },
      { hu: 'magyar', en: 'Hungarian' },
      { hu: 'nem', en: 'no' },
      { hu: 'név', en: 'name' },
      { hu: 'ő', en: 'he, she' },
      { hu: 'óh', en: 'oh' },
      { hu: 'persze', en: 'of course' },
      { hu: 'tanár', en: 'teacher' },
      { hu: 'tipikus', en: 'typical' },
    ],
    tracks: [
      { label: 'Dialogue 1', storagePath: 'u1/u1/08-dialogue-1.mp3' },
      { label: 'Vocabulary', storagePath: 'u1/u1/09-dialogue-1-vocab.mp3' },
    ],
  },
  {
    id: 'u1-d2',
    unit: 1,
    day: 2,
    titleHu: 'Kérdezés',
    titleEn: 'Asking questions',
    note: 'Grammar drill (Ki? Mi? — "Who? What?") and practice exercise — no dialogue text in the book for this one, just listen and repeat.',
    dialogue: [],
    vocab: [],
    tracks: [
      { label: 'Asking questions', storagePath: 'u1/u1/10-asking-questions.mp3' },
      { label: 'Asking questions — exercise', storagePath: 'u1/u1/11-asking-questions-exercise.mp3' },
    ],
  },
  {
    id: 'u1-d3',
    unit: 1,
    day: 3,
    titleHu: 'Foglalkozások',
    titleEn: 'Professions',
    dialogue: [
      { speaker: 'Zsolt', hu: 'És ő is amerikai?', en: 'And him? Is he American too?' },
      { speaker: 'Ildikó', hu: 'Igen. Ő Max. Ő amerikai egyetemista.', en: 'Yes. He is Max. He is an American college student.' },
      { speaker: 'Zsolt', hu: 'És ki ez?', en: 'And who is this?' },
      { speaker: 'Ildikó', hu: 'Mike. Ő is amerikai. Ő nem egyetemista, hanem fiatal zenész.', en: 'This is Mike. He is American, too. He is not a college student; rather, he is a young musician.' },
      { speaker: 'Zsolt', hu: 'Az anya Melanie? Ő is magyar?', en: 'Is the mother Melanie? Is she Hungarian, too?' },
      { speaker: 'Ildikó', hu: 'Igen, az anya Melanie, de ő nem magyar. Csak Gabriel magyar, Melanie pedig amerikai. Gabriel tanár, és Melanie filmrendező.', en: 'Yes, the mother is Melanie, but she is not Hungarian. Only Gabriel is Hungarian, and Melanie is American. Gabriel is a teacher and Melanie is a film director.' },
      { speaker: 'Zsolt', hu: 'Ez egy érdekes család.', en: 'This is an interesting family.' },
      { speaker: 'Ildikó', hu: 'Szerintem is.', en: 'I think so, too.' },
    ],
    vocab: [
      { hu: 'amerikai', en: 'American' },
      { hu: 'anya', en: 'mother' },
      { hu: 'csak', en: 'only' },
      { hu: 'család', en: 'family' },
      { hu: 'de', en: 'but' },
      { hu: 'egyetemista', en: 'college student' },
      { hu: 'érdekes', en: 'interesting' },
      { hu: 'és', en: 'and' },
      { hu: 'ez', en: 'this' },
      { hu: 'fiatal', en: 'young' },
      { hu: 'filmrendező', en: 'film director' },
      { hu: 'foglalkozás', en: 'profession, job' },
      { hu: 'hanem', en: 'but, rather' },
      { hu: 'is', en: 'also' },
      { hu: 'pedig', en: 'and, but, however' },
      { hu: 'szerintem', en: 'I think [that]...' },
      { hu: 'zenész', en: 'musician' },
    ],
    tracks: [
      { label: 'Dialogue 2', storagePath: 'u1/u1/12-dialogue-2.mp3' },
      { label: 'Dialogue 2 — comprehension', storagePath: 'u1/u1/13-dialogue-2-comprehension.mp3' },
    ],
  },
  {
    id: 'u1-d4',
    unit: 1,
    day: 4,
    titleHu: 'A Túró Rudi automata',
    titleEn: 'The cottage-cheese candy vending machine',
    dialogue: [
      { speaker: 'Mike', hu: 'Mi ez?', en: 'What is this?' },
      { speaker: 'Zsuzsi', hu: 'Ez a büfé.', en: 'This is the snack bar.' },
      { speaker: 'Mike', hu: 'Mi az?', en: 'What is that?' },
      { speaker: 'Zsuzsi', hu: 'Az egy Túró Rudi automata.', en: 'That is a Túró Rudi vending machine.' },
      { speaker: 'Mike', hu: 'Érdekes. És mi ez?', en: 'Interesting. And what is this?' },
      { speaker: 'Zsuzsi', hu: 'Ez egy tanterem. Az pedig egy iroda.', en: 'This is a classroom. That, on the other hand, is an office.' },
      { speaker: 'Mike', hu: 'És ez mi?', en: 'And what is this?' },
      { speaker: 'Zsuzsi', hu: 'Ez (egy) ceruza, és ez (egy) toll. Az pedig (egy) füzet. Ez (egy) asztal, az (egy) szék.', en: 'This is a pencil, and this is a pen. That, though, is a notebook. This is a table, that is a chair.' },
      { speaker: 'Mike', hu: 'Mi az ott?', en: 'What is that there?' },
      { speaker: 'Zsuzsi', hu: 'Az ott a tábla, az az ablak, és az egy könyv. A könyv egy magyar-angol szótár.', en: 'That over there is the blackboard, that is the window, and that is a book. The book is a Hungarian–English dictionary.' },
    ],
    vocab: [
      { hu: 'ablak', en: 'window' },
      { hu: 'angol', en: 'English' },
      { hu: 'asztal', en: 'table' },
      { hu: 'automata', en: 'vending machine' },
      { hu: 'az', en: 'that' },
      { hu: 'büfé', en: 'snack bar' },
      { hu: 'ceruza', en: 'pencil' },
      { hu: 'füzet', en: 'notebook' },
      { hu: 'hol', en: 'where?' },
      { hu: 'iroda', en: 'office' },
      { hu: 'könyv', en: 'book' },
      { hu: 'mi', en: 'what' },
      { hu: 'ott', en: 'there' },
      { hu: 'szék', en: 'chair' },
      { hu: 'szótár', en: 'dictionary' },
      { hu: 'tábla', en: '(black)board' },
      { hu: 'tanterem', en: 'classroom' },
      { hu: 'toll', en: 'pen' },
    ],
    tracks: [
      { label: 'Dialogue 3', storagePath: 'u1/u1/14-dialogue-3.mp3' },
      { label: 'Exercise', storagePath: 'u1/u1/15-exercise.mp3' },
    ],
  },
  {
    id: 'u1-d5',
    unit: 1,
    day: 5,
    titleHu: 'Budapesti barátok',
    titleEn: 'Friends from Budapest',
    dialogue: [
      { speaker: 'Csilla', hu: 'Kik ők?', en: 'Who are they?' },
      { speaker: 'Péter', hu: 'Ők a szülők.', en: 'They are the parents.' },
      { speaker: 'Csilla', hu: 'Ők amerikaiak?', en: 'Are they American?' },
      { speaker: 'Péter', hu: 'Nem, ők nem amerikaiak, hanem magyarok.', en: 'No, they are not American, but Hungarian.' },
      { speaker: 'Csilla', hu: 'Ki ő?', en: 'Who is he?' },
      { speaker: 'Péter', hu: 'Ő Szabó Zoltán.', en: 'He is Zoltán Szabó.' },
      { speaker: 'Csilla', hu: 'És ez itt, a Szabó Zoltánné?', en: 'And this one here, is she Mrs Zoltán Szabó?' },
      { speaker: 'Péter', hu: 'Igen, a Szabóné Egri Zsófia.', en: 'Yes, she is Mrs Szabó, Zsófia Egri.' },
      { speaker: 'Csilla', hu: 'Ők tanárok?', en: 'Are they teachers?' },
      { speaker: 'Péter', hu: 'Nem, nem tanárok. Zoltán jogász, Zsófia pedig antropológus.', en: 'No, they are not teachers. Zoltán is a lawyer and Zsófia is an anthropologist.' },
    ],
    vocab: [
      { hu: 'antropológus', en: 'anthropologist' },
      { hu: '-né', en: 'Mrs' },
      { hu: 'itt', en: 'here' },
      { hu: 'jogász', en: 'lawyer' },
      { hu: 'szabó', en: 'tailor' },
      { hu: 'szülő', en: 'parent' },
    ],
    tracks: [
      { label: 'Dialogue 4', storagePath: 'u1/u1/16-dialogue-4.mp3' },
      { label: 'Dialogue 4 — comprehension', storagePath: 'u1/u1/17-dialogue-4-comprehension.mp3' },
    ],
  },
  {
    id: 'u1-d6',
    unit: 1,
    day: 6,
    titleHu: 'Diákok és tanárok',
    titleEn: 'Students and teachers',
    dialogue: [
      { speaker: 'Mike', hu: 'Zsuzsi!', en: 'Zsuzsi!' },
      { speaker: 'Zsuzsi', hu: 'Tessék.', en: 'Yes.' },
      { speaker: 'Mike', hu: 'Mik ezek?', en: 'What are these?' },
      { speaker: 'Zsuzsi', hu: 'Ezek füzetek, újságok, papírok és ceruzák.', en: 'These are notebooks, newspapers, papers and pencils.' },
      { speaker: 'Mike', hu: 'Ezek is ceruzák?', en: 'Are these pencils, too?' },
      { speaker: 'Zsuzsi', hu: 'Tessék?', en: 'Excuse me?' },
      { speaker: 'Mike', hu: 'Ezek is ceruzák?', en: 'Are these pencils, too?' },
      { speaker: 'Zsuzsi', hu: 'Nem, ezek nem ceruzák, hanem tollak. Azok ott az új diákok és tanárok – fiúk és lányok, férfiak és nők.', en: 'No, these are not pencils, but pens. Those people over there are the new students and teachers, boys and girls, men and women.' },
      { speaker: 'Mike', hu: 'De jó! Új ismerősök! Új barátok!', en: 'Great! New acquaintances! New friends!' },
    ],
    vocab: [
      { hu: 'barát', en: 'friend' },
      { hu: 'De jó!', en: 'How great! That’s great!' },
      { hu: 'diák', en: 'student' },
      { hu: 'férfiak', en: 'men' },
      { hu: 'fiú', en: 'boy' },
      { hu: 'ismerős', en: 'acquaintance' },
      { hu: 'lány', en: 'girl' },
      { hu: 'nő', en: 'woman' },
      { hu: 'papír', en: 'paper' },
      { hu: 'tessék', en: 'yes, I’m listening, go ahead' },
      { hu: 'tessék?', en: 'excuse me, what did you say?' },
      { hu: 'új', en: 'new' },
      { hu: 'újság', en: 'newspaper' },
    ],
    tracks: [
      { label: 'Dialogue 5', storagePath: 'u1/u1/18-dialogue-5.mp3' },
      { label: 'Exercise', storagePath: 'u1/u1/19-exercise.mp3' },
    ],
  },
  {
    id: 'u1-d7',
    unit: 1,
    day: 7,
    titleHu: 'A magyar nyelv szép',
    titleEn: 'The Hungarian language is beautiful',
    dialogue: [
      { speaker: 'Mike', hu: 'Milyen a magyar nyelv?', en: 'What is the Hungarian language like?' },
      { speaker: 'Melanie', hu: 'Szép! A magyar nyelv nagyon szép!', en: 'Beautiful! The Hungarian language is very beautiful!' },
      { speaker: 'Mike', hu: 'Milyenek a magyar-angol szótárak?', en: 'What are Hungarian–English dictionaries like?' },
      { speaker: 'Melanie', hu: 'Azok nagyon jók, de elég drágák!', en: 'They are very good, but rather expensive.' },
      { speaker: 'Mike', hu: 'Milyen könyv ez?', en: 'What kind of book is this?' },
      { speaker: 'Melanie', hu: 'Ez egy új és érdekes regény. Azok is regények. Azok is érdekesek, de nem újak.', en: 'This is a new and interesting novel. Those are novels, too. Those are interesting also, but they are not new.' },
    ],
    vocab: [
      { hu: 'drága', en: 'expensive, dear' },
      { hu: 'elég', en: 'rather, fairly' },
      { hu: 'jó', en: 'good' },
      { hu: 'milyen', en: 'what kind of?' },
      { hu: 'nagyon', en: 'very' },
      { hu: 'regény', en: 'novel' },
      { hu: 'szép', en: 'beautiful, nice' },
    ],
    tracks: [
      { label: 'Dialogue 6', storagePath: 'u1/u1/20-dialogue-6.mp3' },
    ],
  },
]
