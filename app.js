const courses = {  "ancient-egyptian": {    title: "Ancient Egyptian basics",
    emoji: "𓆎𓅓𓏏",
    description: "Learn beginner hieroglyphs, transliteration, and simple sentence patterns.",
    lessons: {
      "basics-1": {
        title: "First words",
        intro: "You will learn how to form basic sentences and words (with hieroglyphs): 𓄤 good, 𓇋𓈖𓎡 I, 𓇳 sun",
        questions: [
          {
            type: "info",
            title: "New word: 𓂋𓂝𓇳 - sun",
            text: "𓂋𓂝𓇳 (ra, IPA: rꜥ)",
            example: "𓊪𓈖 𓂋𓂝𓇳 (pn ra, IPA: pn rꜥ) - this is sun",
            explanation: "IPA reading (International Phonetic Alphabet) is the standaralised way of writing language sounds. This word is writen with multiple glyphs (letter glyphs and 1 meaning glyph)."
          },
          {
            type: "info",
            title: "New word: 𓄤 - good/beautiful",
            text: "𓄤 (nfr)",
            example: "𓂋𓂝𓇳 𓄤 (ra nfr, IPA: rꜥ nfr) - the sun is beautiful",
            explanation: "This word is writen with a single glyph instead of multiple letters."
          },
          {
            type: "match",
            prompt: "Match the hieroglyphs to their reading.",
            subtitle: "Tap one item on the left, then the matching item on the right and then click check.",
            pairs: [
              ["𓂋𓂝𓇳", "ra, IPA: rꜥ"],
              ["𓄤", "nfr"],
            ],
            explanation: ""
          },
          {
            type: "info",
            title: "Ancient Egyptian grammar",
            text: "To be",
            example: "𓂋𓂝𓇳𓄤 (The sun is good)",
            explanation: "In Ancient Egyptian there is no to be, instead of saying \"A is B\" you just say \"A B\". But pronouns change their form if we want to \"add to be\" after them."
          },
          {
            type: "blocks",
            prompt: "Translate into English.",
            subtitle: "Build the English sentence from the blocks.",
            source: "𓂋𓂝𓇳𓄤",
            answer: ["The", "sun", "is", "beautiful"],
            words: ["The", "sun", "is", "beautiful", "I", "bad"],
            explanation: "𓂋𓂝𓇳𓄤 (ra nfr, IPA: rꜥ nfr) means \"the sun is beautiful.\""
          },
          {
            type: "info",
            title: "New word: 𓇋𓈖𓎡 - I",
            text: "𓇋𓈖𓎡 (ink)",
            example: "𓇋𓈖𓎡 𓄤 (ink nfr) - I am good",
            explanation: "This word is written in a bunch of glyphs representing diffrent letters (𓇋 - i, 𓈖 - n, 𓎡 - k)."
          },
          {
            type: "blocks",
            prompt: "Translate into English.",
            subtitle: "Build the English sentence from the blocks.",
            source: "𓇋𓈖𓎡 𓄤",
            answer: ["I", "am", "good"],
            words: ["I", "am", "good", "sun", "bad"],
            explanation: "𓇋𓈖𓎡 𓄤 (ink nfr) means \"I am good\""
          },
          {
            type: "blocks",
            prompt: "Translate into Ancient Egyptian hieroglyphs.",
            subtitle: "Build the hieroglyph sentence from the blocks.",
            source: "The sun is beautiful.",
            answer: ["𓂋𓂝𓇳", "𓄤"],
            words: ["𓂋𓂝𓇳", "𓄤", "𓇋𓈖𓎡"],
            explanation: "The answer is 𓂋𓂝𓇳𓄤 (ra nfr, IPA: rꜥ nfr), 𓂋𓂝𓇳 means sun and 𓄤 means good/beautiful."
          }
        ]
      },
      "basics-2": {
        title: "Hi, I like cats",
        intro: "You will learn how to say hi and use verbs in first person",
        questions: [
          {
            type: "info",
            title: "New word: 𓉔𓏏𓊪 - hi",
            text: "𓉔𓏏𓊪 (Htp, IPA: ḥ tp)",
            example: "𓉔𓏏𓊪. 𓊪𓈖 𓂋𓂝𓇳 (Htp. pn ra, IPA: ḥ tp. pn rꜥ) - Hi. This is sun",
            explanation: "This word is written in a bunch of glyphs representing diffrent letters (𓉔 - ḥ , 𓏏 - t, 𓊪 - p)."
          },
          {
            type: "info",
            title: "New word: 𓏇𓇋𓅱𓃠 - cat (feminine noun)",
            text: "𓏇𓇋𓅱𓃠 (miw)",
            example: "𓅓𓂋𓇋𓏇𓇋𓅱𓏏𓃠 (mr.i miwt) - I like cats",
            explanation: "This word is writen with multiple glyphs (letter glyphs and 1 meaning glyph)."
          },
          {
            type: "match",
            prompt: "Match the hieroglyphs to their reading.",
            subtitle: "Tap one item on the left, then the matching item on the right and then click check.",
            pairs: [
              ["𓂋𓂝𓇳", "sun"],
              ["𓏇𓇋𓅱𓃠", "cat"],
              ["𓉔𓏏𓊪", "hi"]
            ],
            explanation: ""
          },
          {
            type: "info",
            title: "Ancient Egyptian grammar",
            text: "Plural form of feminine nouns",
            example: "𓏇𓇋𓅱𓏏𓃠 (cats)",
            explanation: "In Ancient Egyptian there are masculine and feminine nouns, most of the times the ones that end with 𓏏 are feminine and the rest is masculine. The word 𓏇𓇋𓅱𓃠 is feminine even though it ends with an 𓅱 (𓃠 don't carry any sound). To make fem. noun plural you just add 𓅱𓏏, if the noun already have 𓅱 at the end, you add 𓏏 by itself."
          },
          {
            type: "match",
            prompt: "Match the hieroglyphs to their reading.",
            subtitle: "Tap one item on the left, then the matching item on the right and then click check.",
            pairs: [
              ["𓏇𓇋𓅱𓅱𓏏𓃠", "incorrect plural"],
              ["𓏇𓇋𓅱𓏏𓃠", "correct plural"]
            ],
            explanation: "The noun already have 𓅱 at the end so you add only 𓏏"
          },
          {
            type: "info",
            title: "New word: 𓅓𓂋 - to like",
            text: "𓅓𓂋(mr)",
            example: "𓅓𓂋𓇋𓏇𓇋𓅱𓏏𓃠 (mr.i miwt) - I like cats",
            explanation: "This word is written in a bunch of glyphs representing diffrent letters (𓅓 - m, 𓂋 - r)."
          },
          {
            type: "info",
            title: "Ancient Egyptian grammar",
            text: "Verbs in first person (I)",
            example: "𓅓𓂋𓇋 - I like",
            explanation: "To specify that you are the one doing the action you add 𓇋/𓀀 (i) at the of the verb. For example 𓅓𓂋 (to like) - 𓅓𓂋𓀀 (I like)"
          },
          {
            type: "blocks",
            prompt: "Translate into English.",
            subtitle: "Build the English sentence from the blocks.",
            source: "𓅓𓂋𓇋 𓏇𓇋𓅱𓏏𓃠",
            answer: ["I", "like", "cats"],
            words: ["The", "sun", "like", "cat", "I", "to like", "beautiful", "cats"],
            explanation: "𓅓𓂋𓇋𓏇𓇋𓅱𓏏𓃠 (mr.i miwt) means \"I like cats.\""
          },
        ]
      },
      "basics-3": {
        title: "My name is Abuyin Ibn Djadir Ibn Omar Kalid Ben Hadji Al Sharidi",
        intro: "You will learn more about adjectives and 2 new words",
        questions: [
          {
            type: "info",
            title: "New word: 𓉐𓏤 - house",
            text: "𓉐𓏤 (pr)",
            example: "𓉐𓏤𓇋𓄤 (pr.i nfr) - My house is good",
            explanation: "This word is written with 2 glyphs that represend meaning."
          },
          {
            type: "info",
            title: "New word: 𓂋𓈖 - name",
            text: "𓂋𓈖 (rn)",
            example: "𓂋𓈖𓀀X (mr.i X) - My name is X",
            explanation: "This word is written in a bunch of glyphs representing diffrent letters (𓂋 - r, 𓈖 - n)"
          },
          {
            type: "match",
            prompt: "Match the hieroglyphs to their reading.",
            subtitle: "Tap one item on the left, then the matching item on the right and then click check.",
            pairs: [
              ["𓂋𓈖", "name"],
              ["𓉐𓏤", "house"],
              ["𓏇𓇋𓅱𓃠", "cat"],
              ["𓉔𓏏𓊪", "hi"]
            ],
            explanation: ""
          },
          {
            type: "info",
            title: "Ancient Egyptian grammar",
            text: "Adjective endings",
            example: "𓄤𓏏𓏇𓇋𓅱𓃠 (good cat)",
            explanation: "In Ancient Egyptian adjectives have endings of the noun. While masculine nouns don't give adjectives any endings (if the noun isn't plural), feminine does and the ending that they give (if they're singular) is 𓏏. For example 𓏇𓇋𓅱𓃠 is feminine so it will be 𓄤𓏏𓏇𓇋𓅱𓃠 not 𓄤𓏇𓇋𓅱𓃠."
          },
          {
            type: "match",
            prompt: "Match the hieroglyphs to their reading.",
            subtitle: "Tap one item on the left, then the matching item on the right and then click check.",
            pairs: [
              ["𓏇𓇋𓅱𓃠𓄤", "nonesense, absolute bs"],
              ["𓏇𓇋𓅱𓃠𓄤𓏏", "good cat"]
            ],
            explanation: "𓏇𓇋𓅱𓃠 is feminine so you add 𓏏 to 𓄤𓏏"
          },
          {
            type: "blocks",
            prompt: "Translate into Ancient Egyptian hieroglyphs.",
            subtitle: "Build the hieroglyph sentence from the blocks.",
            source: "My house is beautiful.",
            answer: ["𓉐𓏤", "𓀀", "𓄤"],
            words: ["𓂋𓂝𓇳", "𓉐𓏤", "𓇋𓈖𓎡", "𓀀", "𓏇𓇋𓅱𓃠", "𓄤"],
            explanation: "The answer is 𓂋𓂝𓇳𓄤 (ra nfr, IPA: rꜥ nfr), 𓂋𓂝𓇳 means sun and 𓄤 means good/beautiful."
          },
          {
            type: "blocks",
            prompt: "Translate into Ancient Egyptian hieroglyphs.",
            subtitle: "Build the hieroglyph sentence from the blocks.",
            source: "My name is Abuyin Ibn Djadir Ibn Omar Kalid Ben Hadji Al Sharidi",
            answer: ["𓂋𓈖", "𓇋", "Abuyin Ibn Djadir Ibn Omar Kalid Ben Hadji Al Sharidi"],
            words: ["𓇋", "𓉐𓏤", "𓇋𓈖𓎡", "𓂋𓈖", "𓏇𓇋𓅱𓃠", "Abuyin Ibn Djadir Ibn Omar Kalid Ben Hadji Al Sharidi"],
            explanation: "The answer is 𓂋𓈖𓇋 Abuyin Ibn Djadir Ibn Omar Kalid Ben Hadji Al Sharidi (rn.i Abuyin Ibn Djadir Ibn Omar Kalid Ben Hadji Al Sharidi), 𓂋𓈖 means name, 𓇋 as well as 𓀀 means my and Abuyin Ibn Djadir Ibn Omar Kalid Ben Hadji Al Sharidi means Abuyin Ibn Djadir Ibn Omar Kalid Ben Hadji Al Sharidi."
          },
          {
            type: "blocks",
            prompt: "Translate into Ancient Egyptian hieroglyphs.",
            subtitle: "Build the hieroglyph sentence from the blocks.",
            source: "Beautiful cat",
            answer: ["𓏇𓇋𓅱𓃠", "𓄤", "𓏏"],
            words: ["𓇋", "𓏏", "𓇋𓈖𓎡", "𓄤", "𓏇𓇋𓅱𓃠"],
            explanation: "𓏇𓇋𓅱𓃠 means cat and 𓄤 means beautiful/good. The word cat is feminine so you add 𓏏 at the end of the adjcetive (𓄤)"
          }
        ]
      },
      "basics-4": {
        title: "Many fish swim",
        intro: "You will learn new vocab and new adjective endings",
        questions: [
          {
            type: "info",
            title: "New word: 𓂋𓅓𓆟 - fish",
            text: "𓂋𓅓𓆟 (rm)",
            example: "𓈖𓃀𓁶𓂋𓅓𓅱𓆟𓆈𓄿𓏥𓅱 (nbi rmu ysha, IPA: nbi rmu ʿš3) - Many fish swim",
            explanation: "This word is written with 2 glyphs that represend sounds and 1 that represent meaning."
          },
          {
            type: "info",
            title: "New word: 𓈖𓃀𓁶 - to swim",
            text: "𓈖𓃀𓁶 (nbi)",
            example: "𓈖𓃀𓁶𓂋𓅓𓅱𓆟𓆈𓄿𓏥𓅱 (nbi rmu ysha, IPA: nbi rmu ʿš3) - Many fish swim",
            explanation: "This word is written with 2 glyphs that represend sounds and 1 that represent meaning."
          },
          {
            type: "info",
            title: "Ancient Egyptian grammar",
            text: "Plural adjective endings",
            example: "𓂋𓅓𓅱𓆟𓄤𓅱 (good fish (pl.))",
            explanation: "Plural masculine adjective ending is 𓅱/𓏲 (w) and feminine 𓅱𓏏/𓏏 - wt/t (only 𓏏 if 𓅱 is already at the end)"
          },
          {
            type: "blocks",
            prompt: "Translate into Ancient Egyptian hieroglyphs.",
            subtitle: "Build the hieroglyph sentence from the blocks.",
            source: "I like good fish (pl.).",
            answer: ["𓅓𓂋", "𓀀", "𓂋𓅓𓅱𓆟", "𓄤", "𓅱"],
            words: ["𓅓𓂋", "𓉐𓏤", "𓅱", "𓇋𓈖𓎡", "𓀀", "𓏇𓇋𓅱𓃠", "𓄤", "𓂋𓅓𓅱𓆟", "𓂋𓅓𓆟"],
            explanation: "The answer is 𓅓𓂋𓀀𓂋𓅓𓅱𓆟𓄤𓅱 (mr.i rmu nfru), 𓅓𓂋 means to like, 𓀀 means I, 𓄤𓅱 means good (pl. masc.) and 𓂋𓅓𓅱𓆟 means fish (pl.)."
          },
          {
            type: "blocks",
            prompt: "Translate into Ancient Egyptian hieroglyphs.",
            subtitle: "Build the hieroglyph sentence from the blocks.",
            source: "Beautiful cats swim (pl.).",
            answer: ["𓈖𓃀𓁶", "𓏇𓇋𓅱𓏏𓃠", "𓄤", "𓅱𓏏"],
            words: ["𓈖𓃀𓁶", "𓅱𓏏", "𓅱", "𓇋𓈖𓎡", "𓏇𓇋𓅱𓏏𓃠", "𓏇𓇋𓅱𓃠", "𓄤", "𓂋𓅓𓅱𓆟", "𓂋𓅓𓆟"],
            explanation: "The answer is 𓈖𓃀𓁶𓏇𓇋𓅱𓏏𓃠𓄤𓅱𓏏 (nbi miwt nfrut), 𓈖𓃀𓁶 means to swim, 𓄤𓅱𓏏 means beautiful/good (feminine plural) and 𓏇𓇋𓅱𓏏𓃠 means cats."
          },
          {
            type: "info",
            title: "New word: 𓆈𓄿𓏥 - many, numerous",
            text: "𓆈𓄿𓏥 (~ysha, IPA: ʿš3)",
            example: "𓈖𓃀𓁶𓂋𓅓𓅱𓆟𓆈𓄿𓏥𓅱 (nbi rmu ysha, IPA: nbi rmu ʿš3) - Many fish swim",
            explanation: "This word is written with 2 glyphs that represend sounds (1 that represent multiple letters) and 1 that represent meaning."
          },
          {
            type: "blocks",
            prompt: "Translate into Ancient Egyptian hieroglyphs.",
            subtitle: "Build the hieroglyph sentence from the blocks.",
            source: "Many fish swim (pl.).",
            answer: ["𓈖𓃀𓁶", "𓂋𓅓𓅱𓆟", "𓆈𓄿𓏥", "𓅱"],
            words: ["𓈖𓃀𓁶", "𓅱𓏏", "𓅱", "𓇋𓈖𓎡", "𓂋𓅓𓆟", "𓏇𓇋𓅱𓃠", "𓄤", "𓂋𓅓𓅱𓆟", "𓆈𓄿𓏥"],
            explanation: "The answer is 𓈖𓃀𓁶𓏇𓇋𓅱𓏏𓃠𓄤𓅱𓏏 (nbi miwt nfrut), 𓈖𓃀𓁶 means to swim, 𓄤𓅱𓏏 means beautiful/good (feminine plural) and 𓏇𓇋𓅱𓏏𓃠 means cats."
          }
        ]
      },
      "basics-5": {
        title: "It is so pleasant",
        intro: "You will learn new vocabulary",
        questions: [
          {
            type: "info",
            title: "New word: 𓊪𓈖 - this (masc.)",
            text: "𓊪𓈖 (pn)",
            example: "𓇓𓅱𓂋𓅓𓆟 (pn rm) - This is a fish",
            explanation: "This word is written with 2 letters."
          },
          {
            type: "info",
            title: "New word: 𓏏𓈖 - this (fem.)",
            text: "𓏏𓈖 (tn)",
            example: "𓏏𓈖𓏇𓇋𓅱𓃠 (tn miw) - This is a cat",
            explanation: "This word is written with 2 letters."
          },
          {
            type: "info",
            title: "New word: 𓇛𓅓 - sweet, pleasant",
            text: "𓇛𓅓 (nDm)",
            example: "𓊪𓈖𓇛𓅓 (pn nDm) - This is sweet",
            explanation: "This word is written with 2 glyphs, 1 is a single letter and another makes sound of 2 letters."
          },
          {
            type: "blocks",
            prompt: "Translate into Ancient Egyptian hieroglyphs.",
            subtitle: "Build the hieroglyph sentence from the blocks.",
            source: "This is a cat.",
            answer: ["𓏏𓈖", "𓏇𓇋𓅱𓃠"],
            words: ["𓂋𓂝𓇳", "𓊪𓈖", "𓅱", "𓏏𓈖", "𓀀", "𓏇𓇋𓅱𓃠", "𓄤"],
            explanation: "The answer is 𓏏𓈖𓏇𓇋𓅱𓃠 (tn miw), 𓏏𓈖 means this (feminine), 𓊪𓈖 means this (masculine) and 𓏇𓇋𓅱𓃠 means cat."
          },
          {
            type: "blocks",
            prompt: "Translate into Ancient Egyptian hieroglyphs.",
            subtitle: "Build the hieroglyph sentence from the blocks.",
            source: "This is sweet.",
            answer: ["𓊪𓈖", "𓇛𓅓"],
            words: ["𓇛𓅓", "𓅱𓏏", "𓅱", "𓇋𓈖𓎡", "𓊪𓈖", "𓏇𓇋𓅱𓃠", "𓄤", "𓂋𓅓𓅱𓆟", "𓂋𓅓𓆟"],
            explanation: "The answer is 𓊪𓈖𓇛𓅓 (pn nDm), 𓊪𓈖 means this (masc) and 𓇛𓅓 means sweet, pleasant."
          },
          {
            type: "info",
            title: "New word: 𓅨𓂋𓏏 - very",
            text: "𓅨𓂋𓏏 (wrt)",
            example: "𓅨𓂋𓏏𓇛𓅓 (wrt nDm) - very sweet",
            explanation: "This word is written with 3 glyphs, 2 is are single letters and another makes sound of 2 letters but here it only is used for the beggining of it's sound (w instead if wr as 𓂋 is used for r here)."
          },
          {
            type: "blocks",
            prompt: "Translate into Ancient Egyptian hieroglyphs.",
            subtitle: "Build the hieroglyph sentence from the blocks.",
            source: "This is so pleasant.",
            answer: ["𓊪𓈖", "𓅨𓂋𓏏", "𓇛𓅓"],
            words: ["𓇛𓅓", "𓅨𓂋𓏏", "𓅱", "𓇋𓈖𓎡", "𓏇𓇋𓅱𓏏𓃠", "𓏏𓈖", "𓊪𓈖", "𓂋𓅓𓅱𓆟", "𓂋𓅓𓆟"],
            explanation: "The answer is 𓊪𓈖𓇛𓅓 (pn wrt nDm), 𓊪𓈖 means this (masc), 𓅨𓂋𓏏 means very and 𓇛𓅓 means sweet, pleasant."
          },
        ]
      },
      "basics-6": {
        title: "Red on green plants",
        intro: "You will learn new vocabulary",
        questions: [
          {
            type: "info",
            title: "New word: 𓇆 - green",
            text: "𓇆 (w3ḏ)",
            example: "𓇐𓅓𓆰𓅱 𓇆𓅱 (smw w3ḏw) - green plants",
            explanation: "𓇆 means green. In plural, adjectives take ending 𓅱."
          },
          {
            type: "info",
            title: "New word: 𓇐𓅓𓆰 - plant",
            text: "𓇐𓅓𓆰 (sm)",
            example: "𓇐𓅓𓆰𓅱 (smw) - plants",
            explanation: "𓇐𓅓𓆰 means plant. Plural is formed with 𓅱."
          },
          {
            type: "match",
            prompt: "Match the hieroglyphs to their meaning.",
            subtitle: "Tap one item on the left, then the matching item on the right.",
            pairs: [
              ["𓇆", "green"],
              ["𓇐𓅓𓆰", "plant"]
            ],
            explanation: ""
          },
          {
            type: "info",
            title: "New word: 𓅓 - in",
            text: "𓅓 (m)",
            example: "𓂋𓅓𓆟𓅱 𓅓 𓈙𓈇𓏤 (rmu m š) - fish in a lake",
            explanation: "𓅓 is a preposition meaning 'in'."
          },
          {
            type: "info",
            title: "New word: 𓈙𓈇𓏤 - lake",
            text: "𓈙𓈇𓏤 (š)",
            example: "𓅓 𓈙𓈇𓏤 (m š) - in a lake",
            explanation: "𓈙𓈇𓏤 means pool or lake."
          },
          {
            type: "match",
            prompt: "Match the hieroglyphs to their meaning.",
            subtitle: "Practice the new words.",
            pairs: [
              ["𓅓", "in"],
              ["𓈙𓈇𓏤", "lake"]
            ],
            explanation: ""
          },
          {
            type: "info",
            title: "New word: 𓂧𓈙𓂋 - red",
            text: "𓂧𓈙𓂋 (dshr, IPA: dšr)",
            example: " 𓁶𓏤 𓇐𓅓𓆰𓅱 (dshr tp smw) - red on plants",
            explanation: "𓂧𓈙𓂋 means red. It is associated with life, chaos, and power."
          },
          {
            type: "info",
            title: "New word: 𓁶𓏤 - on top",
            text: "𓁶𓏤 (tp)",
            example: "𓁶𓏤 𓇐𓅓𓆰𓅱 (tp smw) - on plants",
            explanation: "𓁶𓏤 means on or on top of something."
          },
          {
            type: "match",
            prompt: "Match the hieroglyphs to their meaning.",
            subtitle: "Final vocab check.",
            pairs: [
              ["𓂧𓈙𓂋", "red"],
              ["𓁶𓏤", "on top"]
            ],
            explanation: ""
          },
          {
            type: "blocks",
            prompt: "Translate into English.",
            subtitle: "Build the English sentence.",
            source: "𓈖𓃀𓁶 𓂋𓅓𓆟𓅱 𓅓 𓈙𓈇𓏤",
            answer: ["Fish", "swim", "in", "a", "lake"],
            words: ["Fish", "swim", "in", "a", "lake", "plants", "red"],
            explanation: "𓈖𓃀𓁶 𓂋𓅓𓆟𓅱 𓅓 𓈙𓈇𓏤 means 'Fish swim in a lake.'"
          },
          {
            type: "blocks",
            prompt: "Translate into English.",
            subtitle: "Build the English sentence.",
            source: "𓇋𓏏𓂋 𓁶𓏤 𓇐𓅓𓆰𓅱 𓇆𓅱",
            answer: ["Red", "is", "on", "green", "plants"],
            words: ["Red", "is", "on", "green", "plants", "fish", "lake"],
            explanation: "𓇋𓏏𓂋 𓁶𓏤 𓇐𓅓𓆰𓅱 𓇆𓅱 means 'Red is on green plants.'"
          }
        ]
      },
      "basics-7": {
  title: "Not good, not sweet",
  intro: "You will review how to negate sentences using 𓈖 (n) and 𓈖𓈖 (nn). No new vocabulary, just grammar!",
  questions: [
    {
      type: "info",
      title: "Ancient Egyptian grammar",
      text: "Negation with 𓈖 (n)",
      example: "𓈖 𓂋𓂝𓇳𓄤 (n ra nfr) - The sun is not beautiful",
      explanation: "To negate a sentence, you put 𓈖 (n) at the beginning. It works like 'not'."
    },
    {
      type: "info",
      title: "Ancient Egyptian grammar",
      text: "Stronger negation with 𓈖𓈖 (nn)",
      example: "𓈖𓈖 𓊪𓈖𓇛𓅓 (nn pn nDm) - This is not sweet",
      explanation: "𓈖𓈖 (nn) is a stronger negation. It can mean 'is not' or 'there is not'."
    },
    {
      type: "match",
      prompt: "Match the negated sentence with its meaning.",
      subtitle: "Practice recognizing negation.",
      pairs: [
        ["𓈖 𓂋𓂝𓇳𓄤", "The sun is not beautiful"],
        ["𓈖𓈖 𓊪𓈖𓇛𓅓", "This is not sweet"]
      ],
      explanation: ""
    },
    {
      type: "blocks",
      prompt: "Translate into English.",
      subtitle: "Build the English sentence.",
      source: "𓈖 𓇋𓈖𓎡 𓄤",
      answer: ["I", "am", "not", "good"],
      words: ["I", "am", "not", "good", "sun", "beautiful"],
      explanation: "𓈖 𓇋𓈖𓎡 𓄤 (n ink nfr) means 'I am not good.'"
    },
    {
      type: "blocks",
      prompt: "Translate into Ancient Egyptian hieroglyphs.",
      subtitle: "Build the hieroglyph sentence.",
      source: "This is not sweet.",
      answer: ["𓈖", "𓊪𓈖", "𓇛𓅓"],
      words: ["𓈖", "𓈖𓈖", "𓊪𓈖", "𓇛𓅓", "𓄤"],
      explanation: "𓈖 𓊪𓈖𓇛𓅓 (n pn nDm) means 'This is not sweet.'"
    },
    {
      type: "blocks",
      prompt: "Translate into Ancient Egyptian hieroglyphs.",
      subtitle: "Build the hieroglyph sentence.",
      source: "The sun is not beautiful.",
      answer: ["𓈖", "𓂋𓂝𓇳", "𓄤"],
      words: ["𓈖", "𓂋𓂝𓇳", "𓄤", "𓇋𓈖𓎡"],
      explanation: "𓈖 𓂋𓂝𓇳𓄤 (n ra nfr) means 'The sun is not beautiful.'"
    },
    {
      type: "blocks",
      prompt: "Translate into English.",
      subtitle: "Build the English sentence.",
      source: "𓈖𓈖 𓏏𓈖 𓏇𓇋𓅱𓃠",
      answer: ["This", "is", "not", "a", "cat"],
      words: ["This", "is", "not", "a", "cat", "fish", "good"],
      explanation: "𓈖𓈖 𓏏𓈖 𓏇𓇋𓅱𓃠 (nn tn miw) means 'This is not a cat.'"
    }
  ]
      },
      "stories-1": {
        title: "Read your first story",
        intro: "In this lesson you'll read a story and answer questions about it",
        questions: [
          {
            type: "info",
            title: "Hi, I'm Anna!",
            text: "𓉔𓏏𓊪. 𓂋𓈖𓇋𓄿𓈖𓈖𓄿. 𓅓𓂋𓇋𓂋𓅓𓅱𓆟. 𓂋𓅓𓏲𓆟𓅱𓂋𓏏𓏲𓄤𓏲. 𓈖𓅓𓂋𓇋𓏇𓇋𓅱𓏏𓃠. 𓉐𓏤𓇋𓄤.",
            example: "hint: If you add 𓇋 to a noun/verb then it will mean my/me/I as well as 𓀀 but 𓀀  is used only by men. Also 𓏲 makes a masculine noun plural just like 𓅱. If you don't know already 𓄿 is read as a and 𓈖 as n.",
            explanation: ""
          },
          {
            type: "match",
            prompt: "Match words to sentences according to the story you just read.",
            subtitle: "Tap one item on the left, then the matching item on the right and then click check.",
            pairs: [
              ["Ali", "name not existing in the story"],
              ["Anna", "name of the main character of the story"],
            ],
            explanation: "𓂋𓈖𓇋𓄿𓈖𓈖𓄿 means my name is Anna"
          },
         {
            type: "match",
            prompt: "Match words to sentences according to the story you just read.",
            subtitle: "Tap one item on the left, then the matching item on the right and then click check.",
            pairs: [
              ["cats", "Anna don't like them"],
              ["fish", "Anna like them and think they are very beautiful"]
            ],
            explanation: "𓅓𓂋𓇋𓂋𓅓𓅱𓆟 means I like fish. 𓂋𓅓𓏲𓆟𓅱𓂋𓏏𓏲𓄤𓏲 means fish are very beautiful. 𓈖𓅓𓂋𓇋𓏇𓇋𓅱𓏏𓃠 means I don't like cats."
          },
          {
            type: "blocks",
            prompt: "Translate into English.",
            subtitle: "Build the English sentence from the blocks.",
            source: "𓉐𓏤𓇋𓄤",
            answer: ["My", "house", "is", "beautiful"],
            words: ["The", "My", "is", "beautiful", "I", "house"],
            explanation: "𓉐𓏤𓇋𓄤 (pr.i nfr) means my house is beautiful"
          }
        ]
      },
      "basics-8": {
        "title": "Asking Questions about stuff and you",
        "intro": "You will learn to ask simple yes/no and what questions and how to say \"you\"",
        "questions": [
          {
            "type": "info",
            "title": "New word: 𓏏𓊪 - yes/no question marker",
            "text": "𓏏𓊪 (tp)",
            "example": "𓅓𓂋𓎡 𓏇𓇋𓅱𓏏𓃠 𓏏𓊪 - Do you (masculine) like cats?",
            "explanation": "Place 𓏏𓊪 at the end of a sentence to turn it into a yes/no question"
          },
          {
            "type": "info",
            "title": "New word: 𓄿𓏏 - what",
            "text": "𓄿𓏏 (it, it is read as \"it\" even though it's written as \"at\"",
            "example": "𓄿𓏏 𓏇𓇋𓅱𓃠? - What is the cat?",
            "explanation": "Use 𓄿𓏏 at the begining of the sentence to mark that it's a what question"
          },
          {
            "type": "info",
            "title": "Ancient Egyptian grammar",
            "text": "you",
            "example": "𓅓𓂋𓎡 𓏇𓇋𓅱𓏏𓃠 𓏏𓊪 - Do you (masc) like cats?\n𓅓𓂋𓍿 𓏇𓇋𓅱𓏏𓃠 𓏏𓊪 - Do you (fem) like cats?",
            "explanation": "Similary as when in the sentence you are doing an action you add 𓇋 or 𓀀 at the end of the verb, if you want to say to someone that he is doing an action you add 𓎡 (k) at the end of the verb (𓍿(T)/𓏏(t) if it's a woman)"
          },
          {
            "type": "blocks",
            "prompt": "Translate into English.",
            "subtitle": "Build the English sentence from the blocks.",
            "source": "𓅓𓂋𓎡 𓏇𓇋𓅱𓏏𓃠 𓏏𓊪",
            "answer": ["Do", "you", "like", "cats?"],
            "words": ["Do", "you", "like", "cats?", "sun", "beautiful"],
            "explanation": "𓅓𓂋𓎡 𓏇𓇋𓅱𓏏𓃠 𓏏𓊪 (mrk miwt tp) means do you (masc) like cats?'"
          },
          {
            "type": "blocks",
            "prompt": "Translate into Ancient Egyptian hieroglyphs.",
            "subtitle": "Build the hieroglyph sentence from the blocks.",
            "source": "Do you (fem) like cats?",
            "answer": ["𓅓𓂋𓍿", "𓏇𓇋𓅱𓏏𓃠", "𓏏𓊪"],
            "words": ["𓅓𓂋𓎡", "𓅓𓂋𓍿", "𓏇𓇋𓅱𓏏𓃠", "𓏏𓊪", "𓄿𓏏", "𓂋𓂝𓇳"],
            "explanation": "To form yes/no questions in Egyptian, put the verb with 'you' first, then the object, and finish with 𓏏𓊪 (tp), 𓍿 and 𓏏 are feminine you form verb endings"
          },
          {
            "type": "blocks",
            "prompt": "Translate into English.",
            "subtitle": "Build the English sentence from the blocks.",
            "source": "𓄿𓏏 𓏇𓇋𓅱𓃠?",
            "answer": ["What", "is", "a", "cat?"],
            "words": ["What", "is", "a", "cat?", "Do", "you", "like"],
            "explanation": "𓄿𓏏 𓏇𓇋𓅱𓃠? (it miw?) means \"what is a cat\""
          },
          {
            "type": "blocks",
            "prompt": "Translate into Ancient Egyptian hieroglyphs.",
            "subtitle": "Build the hieroglyph sentence from the blocks.",
            "source": "What is the sun?",
            "answer": ["𓄿𓏏", "𓂋𓂝𓇳"],
            "words": ["𓄿𓏏", "𓂋𓂝𓇳", "𓅓𓂋𓎡", "𓏏𓊪"],
            "explanation": "𓄿𓏏𓂋𓂝𓇳 (it ra) means \"what is the sun\""
          },
                {
                  type: "info",
                  title: "New word: 𓈖𓏏+𓎡/𓏏/𓍿 - you",
                  text: "𓈖𓏏+𓎡/𓏏/𓍿 (nt+k/t/T)\n𓎡 (k) - masculine, 𓏏 (t)/𓍿 (T) - feminine",
                  example: "𓈖𓏏𓎡 𓄤 (ntk nfr) - You (male) are beautiful",
                  explanation: "This word is written in a bunch of glyphs representing diffrent letters (𓈖 - n, 𓏏 - t, 𓎡/𓏏/𓍿 - k/t/T)."
                },
          {
            "type": "blocks",
            "prompt": "Translate into Ancient Egyptian hieroglyphs.",
            "subtitle": "Build the hieroglyph sentence from the blocks.",
            "source": "You are a cat (keep in mind that cat is a feminine noun)",
            "answer": ["𓈖𓏏𓍿", "𓏇𓇋𓅱𓃠"],
            "words": ["𓈖𓏏𓍿", "𓂋𓂝𓇳", "𓏇𓇋𓅱𓃠", "𓈖𓏏𓎡"],
            "explanation": "𓈖𓏏𓍿𓏇𓇋𓅱𓃠 (ntT miw) means \"you are a cat\". 𓈖𓏏𓍿 and 𓈖𓏏𓏏 are feminine you and 𓈖𓏏𓎡 is masculine you."
          },
        ]
      }
    }
  },
  "sumerian": {    title: "Sumerian basics",
    emoji: "𒅴𒂠",
    description: "Learn beginner cuneiform, transliteration, and simple sentence patterns.",
    lessons: {
        "basics-1": {
          "title": "I am a king",
          "intro": "You will learn basic Sumerian sentences, core grammar (SOV, A=B), simple verbs (du₃ / mu-du₃), basic cases, and essential vocabulary (king, house, I, you, this, that).",

          "questions": [
            {
              "type": "info",
              "title": "New word: lugal - king",
              "text": "𒈗 (lugal)",
              "example": "𒈗 - king",
              "explanation": "Basic noun meaning 'king'. No endings = neutral form (absolutive)."
            },
            {
              "type": "info",
              "title": "New word: e₂ - house",
              "text": "𒂍 (e₂)",
              "example": "𒂍 - house",
              "explanation": "Basic noun meaning 'house'."
            },
            {
              "type": "info",
              "title": "New word: ĝe26 - I",
              "text": "𒂊 (ĝe26)",
              "example": "𒂊 - I",
              "explanation": "First person pronoun. Used as subject or with nouns (I = X)."
            },
            {
              "type": "info",
              "title": "New word: ze₂ - you",
              "text": "𒍝 (ze₂)",
              "example": "𒍝 - you",
              "explanation": "Second person singular pronoun."
            },
            {
              "type": "info",
              "title": "New word: du₃ - to build",
              "text": "𒆕 (du₃)",
              "example": "𒆕 - to build",
              "explanation": "Basic verb root meaning 'to build'. This is the dictionary form."
            },
            {
              "type": "info",
              "title": "Verb form: mu-du₃ - built (past/completed action)",
              "text": "𒈬𒆕 (mu-du₃)",
              "example": "𒈬𒆕 - he built it",
              "explanation": "mu- is a verbal prefix marking completed or narrative past action. So yes: mu-du₃ often behaves like past tense ('built'), but Sumerian does not have true tense like English. It is aspect-based (focus on completed action, not time)."
            },
            {
              "type": "info",
              "title": "Grammar: SOV word order",
              "text": "Subject - Object - Verb",
              "example": "𒈗 𒂍 𒈬𒆕 - lugal e₂ mu-du₃ (The king built the house)",
              "explanation": "Sumerian normally places the verb at the end. However, case endings also show grammatical roles, so word order is flexible."
            },
            {
              "type": "info",
              "title": "Grammar: A = B (no 'to be' verb)",
              "text": "X Y = X is Y",
              "example": "𒂊 𒈗 - ĝe26 lugal (I am king)",
              "explanation": "Sumerian usually does not use a verb for 'to be'. Two nouns next to each other mean identity."
            },
            {
              "type": "info",
              "title": "New word: demonstratives - this / that",
              "text": "𒁉 (bi) = this/that (context-dependent)",
              "example": "𒁉 𒂍 - bi e₂ (this house / that house)",
              "explanation": "Sumerian often uses bi to point to something near or previously mentioned. Exact meaning depends on context."
            },
            {
              "type": "info",
              "title": "Case: -e (ergative)",
              "text": "𒂊 (e)",
              "example": "𒈗𒂊 - lugal-e (the king as doer)",
              "explanation": "Marks the subject of a transitive verb (the one who does the action)."
            },
            {
              "type": "blocks",
              "prompt": "Translate into English.",
              "subtitle": "Build the English sentence from the blocks.",
              "source": "𒈗𒂊 𒂍 𒈬𒆕 (lugal-e e₂ mu-du₃)",
              "answer": ["The", "king", "built", "the", "house"],
              "words": ["The", "king", "built", "the", "house", "is", "you", "this"],
              "explanation": "𒈗𒂊 𒂍 𒈬𒆕 (lugal-e e₂ mu-du₃) follows SOV order: king-house-built."
            },
            {
              "type": "blocks",
              "prompt": "Translate into Sumerian.",
              "subtitle": "Build the Sumerian sentence from the blocks.",
              "source": "I am a king",
              "answer": ["𒂊", "𒈗"],
              "words": ["𒂊", "𒈗", "𒂍", "𒍝", "𒈬𒆕"],
              "explanation": "A = B structure: ĝe26 lugal → I king → 'I am king'."
            },
            {
              "type": "blocks",
              "prompt": "Translate into English.",
              "subtitle": "Build the English sentence from the blocks.",
              "source": "𒍝𒂊 𒂍 𒈬𒆕",
              "answer": ["you", "build", "a house"],
              "words": ["my", "you", "his", "a house", "king", "build"],
              "explanation": "𒍝𒂍𒈬𒆕 (ze-e e₂  mu-du₃) means \"you build a house\"."
            }
          ]
        }
    }
  }
};

const hieroglyphDictionary = [
  // Lesson 1
  { glyph: "𓂋𓂝𓇳", translit: "rꜥ", meaning: "sun", note: "Lesson 1: first words" },
  { glyph: "𓄤", translit: "nfr", meaning: "good / beautiful", note: "Lesson 1: first words" },
  { glyph: "𓇋𓈖𓎡", translit: "ink", meaning: "I", note: "Lesson 1: first words" },

  // Lesson 2
  { glyph: "𓉔𓏏𓊪", translit: "ḥtp", meaning: "hi", note: "Lesson 2: greeting" },
  { glyph: "𓏇𓇋𓅱𓃠", translit: "miw", meaning: "cat (feminine)", note: "Lesson 2: noun" },
  { glyph: "𓅓𓂋", translit: "mr", meaning: "to like", note: "Lesson 2: verb" },

  // Lesson 3
  { glyph: "𓉐𓏤", translit: "pr", meaning: "house", note: "Lesson 3: noun" },
  { glyph: "𓂋𓈖", translit: "rn", meaning: "name", note: "Lesson 3: noun" },
  { glyph: "𓇋 / 𓀀", translit: "i", meaning: "my / I (suffix/pronoun marker)", note: "Lesson 3: grammar" },

  // Lesson 4
  { glyph: "𓂋𓅓𓆟", translit: "rm", meaning: "fish", note: "Lesson 4: noun" },
  { glyph: "𓈖𓃀𓁶", translit: "nbi", meaning: "to swim", note: "Lesson 4: verb" },
  { glyph: "𓆈𓄿𓏥", translit: "ʿš3", meaning: "many / numerous", note: "Lesson 4: adjective" },

  // Lesson 5
  { glyph: "𓊪𓈖", translit: "pn", meaning: "this (masculine)", note: "Lesson 5: demonstrative" },
  { glyph: "𓏏𓈖", translit: "tn", meaning: "this (feminine)", note: "Lesson 5: demonstrative" },
  { glyph: "𓇛𓅓", translit: "nDm", meaning: "sweet / pleasant", note: "Lesson 5: adjective" },
  { glyph: "𓅨𓂋𓏏", translit: "wrt", meaning: "very", note: "Lesson 5: adverb" },

  // Lesson 6
  { glyph: "𓇆", translit: "w3ḏ", meaning: "green", note: "Lesson 6: adjective" },
  { glyph: "𓇐𓅓𓆰", translit: "sm", meaning: "plant", note: "Lesson 6: noun" },
  { glyph: "𓅓", translit: "m", meaning: "in", note: "Lesson 6: preposition" },
  { glyph: "𓂧𓈙𓂋", translit: "dšr", meaning: "red", note: "Lesson 6: adjective" },
  { glyph: "𓁶𓏤", translit: "tp", meaning: "on / on top", note: "Lesson 6: preposition" },
  { glyph: "𓈙𓈇𓏤", translit: "š", meaning: "pool / lake", note: "Lesson 6: noun" },

// Lesson 7
  { glyph: "𓈖", translit: "n", meaning: "not (basic negation, denying action)", note: "Lesson 7: negation particle" },
  { glyph: "𓈖𓈖", translit: "nn", meaning: "not / there is not (strong negation, denying existence)", note: "Lesson 7: negation particle" },

// Lesson 9
{ glyph: "𓏏𓊪", translit: "tp", meaning: "question marker (yes/no)", note: "Lesson 9: grammar" },
{ glyph: "𓄿𓏏", translit: "it", meaning: "what", note: "Lesson 9: question word" },

// "you" independent pronouns
{ glyph: "𓈖𓏏𓎡", translit: "ntk", meaning: "you (masculine)", note: "Lesson 9: pronoun" },
{ glyph: "𓈖𓏏𓏏", translit: "ntt", meaning: "you (feminine)", note: "Lesson 9: pronoun" },
{ glyph: "𓈖𓏏𓍿", translit: "ntT", meaning: "you (feminine alt.)", note: "Lesson 9: pronoun" },

// verb endings for "you"
{ glyph: "𓎡", translit: "k", meaning: "you (masc, suffix)", note: "Lesson 9: grammar" },
{ glyph: "𓏏 / 𓍿", translit: "t / T", meaning: "you (fem, suffix)", note: "Lesson 9: grammar" }
];

const cuneiformDictionary = [
  // Lesson 1
  { glyph: "𒈗", translit: "lugal", meaning: "king", note: "Lesson 1: noun" },
  { glyph: "𒂍", translit: "e₂", meaning: "house", note: "Lesson 1: noun" },
  { glyph: "𒂊", translit: "ĝe26", meaning: "I", note: "Lesson 1: pronoun" },
  { glyph: "𒍝", translit: "ze₂", meaning: "you", note: "Lesson 1: pronoun" },
  { glyph: "𒆕", translit: "du₃", meaning: "to build", note: "Lesson 1: verb root" },
  { glyph: "𒈬𒆕", translit: "mu-du₃", meaning: "built / has built", note: "Lesson 1: completed verb form" },
  { glyph: "𒁉", translit: "bi", meaning: "this / that", note: "Lesson 1: demonstrative" },
  { glyph: "-𒂊", translit: "-e", meaning: "ergative case ending (doer of action)", note: "Lesson 1: grammar" }
];

const $ = (id) => document.getElementById(id);

function getParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    courseId: params.get("course") || "ancient-egyptian",
    lessonId: params.get("lesson") || "basics-1"
  };
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function setProgress(current, total) {
  const progressText = $("progressText");
  const progressBar = $("progressBar");
  if (progressText) progressText.textContent = `${current} / ${total}`;
  if (progressBar) progressBar.style.width = `${(current / total) * 100}%`;
}

function renderIndex() {
  const grid = $("courseGrid");
  if (!grid) return;

  grid.innerHTML = Object.entries(courses).map(([courseId, course]) => {
    const lessonCount = Object.keys(course.lessons).length;
    return `
      <article class="course-card">
        <div class="course-top">
          <div class="course-badge">${course.emoji}</div>
          <div style="flex:1">
            <h3>${course.title}</h3>
            <p>${course.description}</p>
          </div>
        </div>
        <ul class="lesson-list">
          <li>
            <div>
              <strong>${lessonCount} lesson${lessonCount === 1 ? "" : "s"}</strong><br>
              <small>Open the course page or jump straight into lesson 1.</small>
            </div>
            <a class="lesson-link" href="course.html?course=${encodeURIComponent(courseId)}">Open</a>
          </li>
        </ul>
      </article>
    `;
  }).join("");
}

function renderCoursePage() {
  const courseTitle = $("courseTitle");
  const lessonList = $("lessonList");
  if (!courseTitle || !lessonList) return;

  const { courseId } = getParams();
  const course = courses[courseId];

  if (!course) {
    courseTitle.textContent = "Course not found";
    const intro = $("courseIntro");
    if (intro) intro.textContent = "Go back and choose a valid course.";
    lessonList.innerHTML = "";
    return;
  }

  document.title = `${course.title} | LinguaPath`;
  const badge = $("courseBadge");
  if (badge) badge.textContent = `${course.emoji} ${course.title}`;
  courseTitle.textContent = course.title;
  const intro = $("courseIntro");
  if (intro) intro.textContent = course.description;

  const lessons = Object.entries(course.lessons).map(([lessonId, lesson], index) => `
    <li>
      <div>
        <strong>Lesson ${index + 1}: ${lesson.title}</strong><br>
        <small>${lesson.intro}</small>
      </div>
      <a class="lesson-link" href="lesson.html?course=${encodeURIComponent(courseId)}&lesson=${encodeURIComponent(lessonId)}">Start</a>
    </li>
  `).join("");

  lessonList.innerHTML = lessons;

  const dictLink = $("dictionaryLink");
  if (dictLink) dictLink.href = `dictionary.html?course=${encodeURIComponent(courseId)}`;
}

function renderDictionaryPage() {
  const list = $("dictionaryGrid");
  if (!list) return;

  const search = $("search");
  const egyptBtn = $("egyptBtn");
  const sumerBtn = $("sumerBtn");

  let currentDict = hieroglyphDictionary;

  function setActive(btn) {
    egyptBtn.classList.remove("active");
    sumerBtn.classList.remove("active");
    btn.classList.add("active");
  }

  const render = () => {
    const term = (search?.value || "").trim().toLowerCase();

    const filtered = currentDict.filter(entry => {
      const haystack = `${entry.glyph} ${entry.translit} ${entry.meaning} ${entry.note}`.toLowerCase();
      return haystack.includes(term);
    });

    list.innerHTML = filtered.map(entry => `
      <article class="dict-card">
        <div class="glyph">${entry.glyph}</div>
        <h3>${entry.meaning}</h3>
        <p><strong>${entry.translit}</strong></p>
        <p>${entry.note}</p>
      </article>
    `).join("") || `<p class="small">No matches.</p>`;
  };

  egyptBtn?.addEventListener("click", () => {
    currentDict = hieroglyphDictionary;
    setActive(egyptBtn);
    render();
  });

  sumerBtn?.addEventListener("click", () => {
    currentDict = cuneiformDictionary;
    setActive(sumerBtn);
    render();
  });

  search?.addEventListener("input", render);

  render();
}

function renderLessonPage() {
  const exercise = $("exercise");
  if (!exercise) return;

  const { courseId, lessonId } = getParams();
  const backBtn = $("backToCourse");
  if (backBtn) {
      backBtn.href = `course.html?course=${encodeURIComponent(courseId)}`;
  }
  const course = courses[courseId];
  const lesson = course?.lessons?.[lessonId];

  if (!course || !lesson) {
    const courseTitle = $("courseTitle");
    const lessonTitle = $("lessonTitle");
    if (courseTitle) courseTitle.textContent = "Lesson not found";
    if (lessonTitle) lessonTitle.textContent = "Go back to the course page and choose a valid lesson.";
    exercise.innerHTML = `<p>Unknown course or lesson.</p>`;
    $("checkBtn")?.classList.add("hidden");
    $("nextBtn")?.classList.add("hidden");
    $("feedback")?.classList.add("hidden");
    $("explanation")?.classList.add("hidden");
    return;
  }

  document.title = `${lesson.title} | ${course.title}`;
  $("lessonBadge").textContent = `${course.emoji} ${course.title}`;
  $("courseTitle").textContent = course.title;
  $("lessonTitle").textContent = `${lesson.title} · ${lesson.intro}`;
  $("questionIndex").textContent = "Question 1";
  $("typeLabel").textContent = "";
  $("feedback").className = "feedback";
  $("explanation").className = "explanation";
  $("checkBtn").classList.remove("hidden");
  $("nextBtn").classList.add("hidden");
  $("checkBtn").disabled = false;
  $("nextBtn").textContent = "Next";

  const state = {
    index: 0,
    selectedLeft: null,
    selectedRight: null,
    answerTokens: [],
    answerTokenIndices: [],
    usedWordIndices: new Set(),
    answered: false
  };

  const total = lesson.questions.length;
  setProgress(1, total);

  function currentQuestion() {
    return lesson.questions[state.index];
  }

  function clearMessages() {
    $("feedback").className = "feedback";
    $("feedback").textContent = "";
    $("explanation").className = "explanation";
    $("explanation").textContent = "";
  }

  function showFeedback(ok, text) {
    const feedback = $("feedback");
    feedback.className = `feedback show ${ok ? "correct" : "wrong"}`;
    feedback.textContent = text;
  }

  function showExplanation(text) {
    const box = $("explanation");
    box.className = "explanation show";
    box.textContent = text || "";
  }

  function renderQuestion() {
    const q = currentQuestion();
    state.selectedLeft = null;
    state.selectedRight = null;
    state.answerTokens = [];
    state.answerTokenIndices = [];
    state.usedWordIndices = new Set();
    state.answered = false;

    $("questionIndex").textContent = `Question ${state.index + 1}`;
    $("prompt").textContent = q.title || q.prompt || "";
    $("subtitle").textContent = q.subtitle || "";
    $("checkBtn").disabled = false;
    $("nextBtn").classList.add("hidden");
    $("checkBtn").classList.remove("hidden");
    clearMessages();

    if (q.type === "info") {
      $("typeLabel").textContent = "Introduction";
      $("checkBtn").classList.add("hidden");
      $("nextBtn").classList.remove("hidden");
      $("nextBtn").textContent = state.index === total - 1 ? "Finish" : "Next";
      exercise.innerHTML = `
        <div class="info-card">
          <div class="info-glyph">${q.text || ""}</div>
          ${q.example ? `<div class="info-example">${q.example}</div>` : ""}
        </div>
      `;
      showExplanation(q.explanation || "");
      return;
    }

    $("typeLabel").textContent = q.type === "match" ? "Match pairs" : "Translate with blocks";

    if (q.type === "match") {
      const left = shuffle(q.pairs.map((pair, i) => ({ label: pair[0], id: i })));
      const right = shuffle(q.pairs.map((pair, i) => ({ label: pair[1], id: i })));

      exercise.innerHTML = `
        <div class="match-help">Tap one card on the left and one on the right to make a pair.</div>
        <div class="match-layout">
          <div class="column" id="leftColumn"></div>
          <div class="column" id="rightColumn"></div>
        </div>
      `;

      const leftCol = $("leftColumn");
      const rightCol = $("rightColumn");

      leftCol.innerHTML = left.map(item => `
        <button class="option" data-side="left" data-id="${item.id}" type="button">${item.label}</button>
      `).join("");

      rightCol.innerHTML = right.map(item => `
        <button class="option" data-side="right" data-id="${item.id}" type="button">${item.label}</button>
      `).join("");

      [...exercise.querySelectorAll(".option")].forEach(btn => {
        btn.addEventListener("click", () => {
          if (state.answered) return;
          const side = btn.dataset.side;
          const id = Number(btn.dataset.id);

          if (side === "left") {
            state.selectedLeft = id;
            leftCol.querySelectorAll('.option[data-side="left"]').forEach(b => {
              b.classList.toggle("selected", Number(b.dataset.id) === id);
            });
          } else {
            state.selectedRight = id;
            rightCol.querySelectorAll('.option[data-side="right"]').forEach(b => {
              b.classList.toggle("selected", Number(b.dataset.id) === id);
            });
          }
        });
      });
    }

    if (q.type === "blocks") {
      exercise.innerHTML = `
        <div class="builder">
          <div class="source-box">Translate: ${q.source}</div>
          <div class="answer-box" id="answerBox" aria-label="Answer area"></div>
          <div class="word-bank" id="wordBank"></div>
          <div class="small">Click a word to add it. Click a word in the answer area to remove it.</div>
        </div>
      `;

      const answerBox = $("answerBox");
      const wordBank = $("wordBank");

      wordBank.innerHTML = q.words.map((word, idx) => `
        <button class="word" type="button" data-index="${idx}">${word}</button>
      `).join("");

      function renderAnswer() {
        answerBox.innerHTML = "";

        if (state.answerTokens.length === 0) {
          answerBox.innerHTML = `<span class="small">Your answer will appear here</span>`;
          return;
        }

        state.answerTokens.forEach((word, idx) => {
          const chip = document.createElement("button");
          chip.type = "button";
          chip.className = "chip";
          chip.textContent = word;
          chip.addEventListener("click", () => {
            if (state.answered) return;
            const wordIndex = state.answerTokenIndices[idx];
            state.answerTokens.splice(idx, 1);
            state.answerTokenIndices.splice(idx, 1);
            state.usedWordIndices.delete(wordIndex);
            renderAnswer();
            syncWordBank();
          });
          answerBox.appendChild(chip);
        });
      }

      function syncWordBank() {
        [...wordBank.querySelectorAll(".word")].forEach(btn => {
          const idx = Number(btn.dataset.index);
          const used = state.usedWordIndices.has(idx);
          btn.classList.toggle("used", used);
          btn.disabled = used || state.answered;
        });
      }

      wordBank.querySelectorAll(".word").forEach(btn => {
        btn.addEventListener("click", () => {
          if (state.answered) return;
          const idx = Number(btn.dataset.index);
          if (state.usedWordIndices.has(idx)) return;

          state.usedWordIndices.add(idx);
          state.answerTokens.push(btn.textContent);
          state.answerTokenIndices.push(idx);
          renderAnswer();
          syncWordBank();
        });
      });

      renderAnswer();
      syncWordBank();
    }
  }

  function evaluate() {
    const q = currentQuestion();

    if (q.type === "match") {
      if (state.selectedLeft === null || state.selectedRight === null) {
        showFeedback(false, "Pick one item on each side first.");
        return false;
      }

      const isCorrect = state.selectedLeft === state.selectedRight;
      const leftBtn = exercise.querySelector(`.option[data-side="left"][data-id="${state.selectedLeft}"]`);
      const rightBtn = exercise.querySelector(`.option[data-side="right"][data-id="${state.selectedRight}"]`);

      if (isCorrect) {
        if (leftBtn) {
          leftBtn.classList.add("correct", "matched");
          leftBtn.disabled = true;
        }
        if (rightBtn) {
          rightBtn.classList.add("correct", "matched");
          rightBtn.disabled = true;
        }
        state.selectedLeft = null;
        state.selectedRight = null;
        showFeedback(true, "Correct pair!");
        const allMatched = exercise.querySelectorAll(".option.matched").length / 2 === q.pairs.length;
        return allMatched;
      }

      if (leftBtn) leftBtn.classList.add("wrong");
      if (rightBtn) rightBtn.classList.add("wrong");

      setTimeout(() => {
        if (leftBtn && !leftBtn.classList.contains("matched")) leftBtn.classList.remove("wrong", "selected");
        if (rightBtn && !rightBtn.classList.contains("matched")) rightBtn.classList.remove("wrong", "selected");
      }, 700);

      state.selectedLeft = null;
      state.selectedRight = null;
      showFeedback(false, "That pair is not correct. Try again.");
      return false;
    }

    if (q.type === "blocks") {
      const correct = JSON.stringify(state.answerTokens) === JSON.stringify(q.answer);
      if (correct) {
        showFeedback(true, "Correct sentence!");
        return true;
      }
      showFeedback(false, "Not quite. Check the word order and try again.");
      return false;
    }

    return false;
  }

  function lockQuestion() {
    state.answered = true;
    $("checkBtn").disabled = true;
    $("nextBtn").classList.remove("hidden");
    showExplanation(currentQuestion().explanation || "");
    $("nextBtn").textContent = state.index === total - 1 ? "Finish" : "Next";
  }

  $("checkBtn").onclick = () => {
    if (state.answered) return;
    const ok = evaluate();
    if (ok) lockQuestion();
  };

  $("nextBtn").onclick = () => {
    if (state.index < total - 1) {
      state.index += 1;
      setProgress(state.index + 1, total);
      renderQuestion();
    } else {
      $("prompt").textContent = "Lesson complete!";
      $("subtitle").textContent = "You finished every item in this lesson.";
      $("typeLabel").textContent = "";
      $("exercise").innerHTML = `
        <div style="text-align:center;padding:28px 10px;">
          <div style="font-size:54px;margin-bottom:10px;">🎉</div>
          <h3 style="margin:0 0 10px;font-size:28px;">Nice work.</h3>
          <p style="margin:0;color:var(--muted);line-height:1.7;">Go back to the course page or open the dictionary.</p>
        </div>
      `;
      $("feedback").className = "feedback";
      $("explanation").className = "explanation";
      $("checkBtn").classList.add("hidden");
      $("nextBtn").classList.add("hidden");
      setProgress(total, total);
    }
  };

  renderQuestion();
}

document.addEventListener("DOMContentLoaded", () => {
  renderIndex();
  renderCoursePage();
  renderDictionaryPage();
  renderLessonPage();
});
