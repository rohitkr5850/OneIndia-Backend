// FULL OFFLINE HINGLISH TRANSLITERATOR FOR 5 LANGUAGES

export const toHinglish = (text = "") => {
  if (!text) return "";

  // Devanagari (Hindi / Marathi)
  const devanagari = {
    "अ": "a", "आ": "aa", "इ": "i", "ई": "ee", "उ": "u", "ऊ": "oo",
    "ए": "e", "ऐ": "ai", "ओ": "o", "औ": "au",

    "ा": "a", "ि": "i", "ी": "ee", "ु": "u", "ू": "oo",
    "े": "e", "ै": "ai", "ो": "o", "ौ": "au",

    "क": "ka", "ख": "kha", "ग": "ga", "घ": "gha",
    "च": "cha", "छ": "chha", "ज": "ja", "झ": "jha",
    "ट": "ta", "ठ": "tha", "ड": "da", "ढ": "dha", "ण": "na",
    "त": "ta", "थ": "tha", "द": "da", "ध": "dha", "न": "na",
    "प": "pa", "फ": "fa", "ब": "ba", "भ": "bha", "म": "ma",
    "य": "ya", "र": "ra", "ल": "la", "व": "va",
    "श": "sha", "ष": "sha", "स": "sa", "ह": "ha",

    "ृ": "ri", "ं": "n", "ः": "h", "ँ": "n"
  };

  // Kannada
  const kannada = {
    "ಅ": "a", "ಆ": "aa", "ಇ": "i", "ಈ": "ee", "ಉ": "u", "ಊ": "oo",
    "ಎ": "e", "ಏ": "e", "ಐ": "ai", "ಒ": "o", "ಓ": "oo", "ಔ": "au",

    "ಾ": "aa", "ಿ": "i", "ೀ": "ee", "ು": "u", "ೂ": "oo",
    "ೆ": "e", "ೇ": "e", "ೈ": "ai", "ೊ": "o", "ೋ": "oo", "ೌ": "au",

    "ಕ": "ka", "ಖ": "kha", "ಗ": "ga", "ಘ": "gha",
    "ಚ": "cha", "ಛ": "chha", "ಜ": "ja", "ಝ": "jha",
    "ಟ": "ta", "ಠ": "tha", "ಡ": "da", "ಢ": "dha", "ಣ": "na",
    "ತ": "ta", "ಥ": "tha", "ದ": "da", "ಧ": "dha", "ನ": "na",
    "ಪ": "pa", "ಫ": "fa", "ಬ": "ba", "ಭ": "bha", "ಮ": "ma",
    "ಯ": "ya", "ರ": "ra", "ಲ": "la", "ವ": "va",
    "ಶ": "sha", "ಷ": "sha", "ಸ": "sa", "ಹ": "ha",
  };

  // Tamil
  const tamil = {
    "அ": "a", "ஆ": "aa", "இ": "i", "ஈ": "ee",
    "உ": "u", "ஊ": "oo", "எ": "e", "ஏ": "e",
    "ஐ": "ai", "ஒ": "o", "ஓ": "oo", "ஔ": "au",

    "க": "ka", "ங": "nga", "ச": "sa", "ஞ": "nya",
    "ட": "ta", "ண": "na", "த": "tha", "ந": "na",
    "ப": "pa", "ம": "ma", "ய": "ya", "ர": "ra",
    "ல": "la", "வ": "va", "ஶ": "sha", "ஷ": "sha",
    "ஸ": "sa", "ஹ": "ha",
  };

  // Telugu
  const telugu = {
    "అ": "a", "ఆ": "aa", "ఇ": "i", "ఈ": "ee", "ఉ": "u", "ఊ": "oo",
    "ఎ": "e", "ఏ": "e", "ఐ": "ai", "ఒ": "o", "ఓ": "oo", "ఔ": "au",

    "ా": "aa", "ి": "i", "ీ": "ee", "ు": "u", "ూ": "oo",
    "ె": "e", "ే": "e", "ై": "ai", "ొ": "o", "ో": "oo", "ౌ": "au",

    "క": "ka", "ఖ": "kha", "గ": "ga", "ఘ": "gha",
    "చ": "cha", "ఛ": "chha", "జ": "ja", "ఝ": "jha",
    "ట": "ta", "ఠ": "tha", "డ": "da", "ఢ": "dha", "ణ": "na",
    "త": "ta", "థ": "tha", "ద": "da", "ధ": "dha", "న": "na",
    "ప": "pa", "ఫ": "fa", "బ": "ba", "భ": "bha", "మ": "ma",
    "య": "ya", "ర": "ra", "ల": "la", "వ": "va",
    "శ": "sha", "ష": "sha", "స": "sa", "హ": "ha",
  };

  const maps = [devanagari, kannada, tamil, telugu];

  let output = "";

  for (let ch of text) {
    let replaced = ch;
    for (let m of maps) {
      if (m[ch]) {
        replaced = m[ch];
        break;
      }
    }
    output += replaced;
  }

  return output;
};
