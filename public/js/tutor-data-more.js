const MORE_TUTOR_LESSONS = [
  // ============================
  // HSK 1: Greetings & Introductions (1-5)
  // ============================
  {
    title: "初次见面 - First Meeting",
    level: "HSK 1",
    icon: "fa-hand-peace",
    words: [
      { cn: "你好", py: "nǐ hǎo", en: "hello", tip: "Most common greeting" },
      { cn: "我叫", py: "wǒ jiào", en: "my name is", tip: "Introduce your name" },
      { cn: "认识", py: "rènshi", en: "to know / to meet", tip: "Use for meeting someone new" },
      { cn: "很高兴", py: "hěn gāoxìng", en: "very glad", tip: "Pleasure to meet someone" },
      { cn: "也", py: "yě", en: "also / too", tip: "Placed before the verb" },
      { cn: "再见", py: "zàijiàn", en: "goodbye", tip: "Literally: see you again" }
    ],
    dialogue: [
      { who: "bot", cn: "你好！我叫小明，你叫什么？", en: "Hello! I'm called Xiaoming, what are you called?" },
      { who: "you", cn: "你好！我叫大卫。认识你很高兴。", en: "Hello! I'm called David. Nice to meet you." },
      { who: "bot", cn: "认识你我也很高兴！你是中国人吗？", en: "Nice to meet you too! Are you Chinese?" },
      { who: "you", cn: "不是，我是美国人。你也是学生吗？", en: "No, I'm American. Are you also a student?" },
      { who: "bot", cn: "是，我是学生。我学习中文。", en: "Yes, I am a student. I study Chinese." },
      { who: "you", cn: "很好！我要回家了，再见！", en: "Great! I need to go home, goodbye!" },
      { who: "bot", cn: "再见！", en: "Goodbye!" }
    ]
  },
  {
    title: "问候朋友 - Greeting Friends",
    level: "HSK 1",
    icon: "fa-face-smile",
    words: [
      { cn: "早上好", py: "zǎoshang hǎo", en: "good morning", tip: "Use before noon" },
      { cn: "朋友", py: "péngyou", en: "friend", tip: "Close friend or acquaintance" },
      { cn: "好", py: "hǎo", en: "good / fine", tip: "One of the first characters learned" },
      { cn: "吗", py: "ma", en: "question particle", tip: "Added to make yes/no questions" },
      { cn: "最近", py: "zuìjìn", en: "recently / lately", tip: "Common small talk word" },
      { cn: "忙", py: "máng", en: "busy", tip: "Use with 很: 很忙" }
    ],
    dialogue: [
      { who: "bot", cn: "早上好！朋友，你好吗？", en: "Good morning! Friend, how are you?" },
      { who: "you", cn: "我很好，谢谢你。你最近忙吗？", en: "I'm very well, thank you. Are you busy lately?" },
      { who: "bot", cn: "我很忙。你呢？", en: "I'm busy. And you?" },
      { who: "you", cn: "我不太忙。今天天气很好。", en: "I'm not too busy. The weather today is good." },
      { who: "bot", cn: "是，天气很好。我们去走走吗？", en: "Yes, the weather is good. Shall we go for a walk?" },
      { who: "you", cn: "好的，我们走吧！", en: "Okay, let's go!" }
    ]
  },
  {
    title: "感谢与道歉 - Thanks & Apologies",
    level: "HSK 1",
    icon: "fa-handshake",
    words: [
      { cn: "谢谢", py: "xièxie", en: "thank you", tip: "Can repeat for politeness" },
      { cn: "不客气", py: "bú kèqì", en: "you're welcome", tip: "Reply to 谢谢" },
      { cn: "对不起", py: "duìbuqǐ", en: "sorry", tip: "Use for apologies" },
      { cn: "没关系", py: "méi guānxi", en: "it doesn't matter", tip: "Reply to 对不起" },
      { cn: "请", py: "qǐng", en: "please", tip: "Polite request marker" },
      { cn: "问题", py: "wèntí", en: "problem / question", tip: "Also means 'question'" }
    ],
    dialogue: [
      { who: "bot", cn: "谢谢你的帮助！", en: "Thank you for your help!" },
      { who: "you", cn: "不客气！", en: "You're welcome!" },
      { who: "bot", cn: "对不起，我迟到了。", en: "I'm sorry, I'm late." },
      { who: "you", cn: "没关系，请进来坐。", en: "It's fine, please come in and sit." },
      { who: "bot", cn: "谢谢你等我。", en: "Thank you for waiting for me." },
      { who: "you", cn: "没有问题，我们是朋友。", en: "No problem, we are friends." },
      { who: "bot", cn: "你真好！", en: "You're so kind!" }
    ]
  },
  {
    title: "介绍家人 - Introducing Family",
    level: "HSK 1",
    icon: "fa-people-roof",
    words: [
      { cn: "爸爸", py: "bàba", en: "dad / father", tip: "Reduplicated syllable" },
      { cn: "妈妈", py: "māma", en: "mom / mother", tip: "Same tone pattern as 爸爸" },
      { cn: "哥哥", py: "gēge", en: "older brother", tip: "Use 弟弟 for younger brother" },
      { cn: "姐姐", py: "jiějie", en: "older sister", tip: "Use 妹妹 for younger sister" },
      { cn: "爱", py: "ài", en: "to love", tip: "Strong emotional verb" },
      { cn: "家", py: "jiā", en: "family / home", tip: "Means both family and home" }
    ],
    dialogue: [
      { who: "bot", cn: "你家有几口人？", en: "How many people are in your family?" },
      { who: "you", cn: "我家有四口人，爸爸、妈妈、姐姐和我。", en: "My family has four people: dad, mom, older sister, and me." },
      { who: "bot", cn: "你有哥哥吗？", en: "Do you have an older brother?" },
      { who: "you", cn: "我没有哥哥，只有一个姐姐。", en: "I don't have an older brother, only an older sister." },
      { who: "bot", cn: "我爱我的家人。你爱你家人吗？", en: "I love my family. Do you love your family?" },
      { who: "you", cn: "当然爱！我家人很好。", en: "Of course I do! My family is great." }
    ]
  },
  {
    title: "你从哪里来 - Where Are You From",
    level: "HSK 1",
    icon: "fa-earth-asia",
    words: [
      { cn: "中国", py: "Zhōngguó", en: "China", tip: "Middle Kingdom" },
      { cn: "美国", py: "Měiguó", en: "America", tip: "Beautiful Country" },
      { cn: "哪", py: "nǎ", en: "which / where", tip: "Question word" },
      { cn: "国", py: "guó", en: "country", tip: "Common suffix for country names" },
      { cn: "人", py: "rén", en: "person / people", tip: "Also means 'person'" },
      { cn: "学生", py: "xuéshēng", en: "student", tip: "学 = study, 生 = person" }
    ],
    dialogue: [
      { who: "bot", cn: "你是哪国人？", en: "Which country are you from?" },
      { who: "you", cn: "我是美国人。你是中国人吗？", en: "I am American. Are you Chinese?" },
      { who: "bot", cn: "是，我是中国人。你在中国学习吗？", en: "Yes, I am Chinese. Are you studying in China?" },
      { who: "you", cn: "是，我是学生。我学习中文。", en: "Yes, I'm a student. I study Chinese." },
      { who: "bot", cn: "你的中文很好！", en: "Your Chinese is very good!" },
      { who: "you", cn: "谢谢！中国很美。", en: "Thank you! China is very beautiful." },
      { who: "bot", cn: "欢迎你来中国！", en: "Welcome to China!" }
    ]
  },

  // ============================
  // HSK 1: Numbers, Counting, Age, Phone (6-10)
  // ============================
  {
    title: "数字一到十 - Numbers One to Ten",
    level: "HSK 1",
    icon: "fa-calculator",
    words: [
      { cn: "一", py: "yī", en: "one", tip: "Changes to yí before fourth tone" },
      { cn: "二", py: "èr", en: "two", tip: "Use 两 (liǎng) with measure words" },
      { cn: "三", py: "sān", en: "three", tip: "Same as 'san' in Spanish" },
      { cn: "四", py: "sì", en: "four", tip: "Sounds like 'suh'" },
      { cn: "五", py: "wǔ", en: "five", tip: "Third tone, hold the dip" },
      { cn: "十", py: "shí", en: "ten", tip: "Second tone, hold steady" }
    ],
    dialogue: [
      { who: "bot", cn: "你会数数吗？一、二、三、四、五。", en: "Can you count? One, two, three, four, five." },
      { who: "you", cn: "我会！六、七、八、九、十。", en: "I can! Six, seven, eight, nine, ten." },
      { who: "bot", cn: "很好！一加二是多少？", en: "Very good! What is one plus two?" },
      { who: "you", cn: "一加二是三。", en: "One plus two is three." },
      { who: "bot", cn: "那三加四呢？", en: "What about three plus four?" },
      { who: "you", cn: "三加四是七。", en: "Three plus four is seven." },
      { who: "bot", cn: "你学得很快！", en: "You learn very fast!" }
    ]
  },
  {
    title: "你几岁 - How Old Are You",
    level: "HSK 1",
    icon: "fa-cake-candles",
    words: [
      { cn: "几", py: "jǐ", en: "how many / a few", tip: "For small numbers" },
      { cn: "岁", py: "suì", en: "years old", tip: "Age measure word" },
      { cn: "了", py: "le", en: "particle (change)", tip: "Indicates completed action" },
      { cn: "大", py: "dà", en: "big / old", tip: "Opposite of 小 (small)" },
      { cn: "小", py: "xiǎo", en: "small / young", tip: "Also means 'young'" },
      { cn: "今年", py: "jīnnián", en: "this year", tip: "今年 vs 明年 (next year)" }
    ],
    dialogue: [
      { who: "bot", cn: "你今年几岁？", en: "How old are you this year?" },
      { who: "you", cn: "我今年二十岁。你呢？", en: "I'm twenty years old this year. And you?" },
      { who: "bot", cn: "我今年二十一岁了。", en: "I'm twenty-one years old." },
      { who: "you", cn: "你比我大一点。", en: "You're a bit older than me." },
      { who: "bot", cn: "我有一个小妹妹，她今年五岁。", en: "I have a little sister, she's five this year." },
      { who: "you", cn: "她很可爱吧？", en: "She's very cute, right?" },
      { who: "bot", cn: "是，她很可爱！", en: "Yes, she's very cute!" }
    ]
  },
  {
    title: "电话号码 - Phone Numbers",
    level: "HSK 1",
    icon: "fa-phone",
    words: [
      { cn: "电话", py: "diànhuà", en: "telephone", tip: "电 = electricity, 话 = speech" },
      { cn: "号码", py: "hàomǎ", en: "number", tip: "Can be phone or ID number" },
      { cn: "多少", py: "duōshao", en: "how much / how many", tip: "For larger numbers" },
      { cn: "零", py: "líng", en: "zero", tip: "Also read as 〇 in phone numbers" },
      { cn: "八", py: "bā", en: "eight", tip: "Lucky number in Chinese" },
      { cn: "六", py: "liù", en: "six", tip: "Also considered lucky" }
    ],
    dialogue: [
      { who: "bot", cn: "你的电话号码是多少？", en: "What is your phone number?" },
      { who: "you", cn: "我的号码是一三八一二三四五六七。", en: "My number is 138-1234-567." },
      { who: "bot", cn: "一二三四五六七八，很好记！", en: "One two three four five six seven eight, very easy to remember!" },
      { who: "you", cn: "你的电话呢？", en: "What about your phone?" },
      { who: "bot", cn: "我的号码是零九一二三零零四。", en: "My number is 091-230-04." },
      { who: "you", cn: "好的，我记下了。", en: "Okay, I've written it down." }
    ]
  },
  {
    title: "多少钱 - How Much",
    level: "HSK 1",
    icon: "fa-coins",
    words: [
      { cn: "钱", py: "qián", en: "money", tip: "Essential shopping word" },
      { cn: "块", py: "kuài", en: "yuan (unit)", tip: "Colloquial for 元 (yuán)" },
      { cn: "毛", py: "máo", en: "jiao (unit)", tip: "10 毛 = 1 块" },
      { cn: "买", py: "mǎi", en: "to buy", tip: "Opposite of 卖 (mài)" },
      { cn: "贵", py: "guì", en: "expensive", tip: "Opposite: 便宜 (piányi)" },
      { cn: "便宜", py: "piányi", en: "cheap", tip: "便宜一点 = a bit cheaper" }
    ],
    dialogue: [
      { who: "bot", cn: "这个苹果多少钱？", en: "How much is this apple?" },
      { who: "you", cn: "三块五一斤。", en: "Three yuan fifty per jin." },
      { who: "bot", cn: "那这个水呢？", en: "What about this water?" },
      { who: "you", cn: "两块钱一瓶。", en: "Two yuan per bottle." },
      { who: "bot", cn: "太贵了！便宜一点可以吗？", en: "Too expensive! Can it be a bit cheaper?" },
      { who: "you", cn: "可以，一块五毛吧。", en: "Okay, one yuan fifty." },
      { who: "bot", cn: "好，我买两个。", en: "Okay, I'll buy two." }
    ]
  },
  {
    title: "几个朋友 - A Few Friends",
    level: "HSK 1",
    icon: "fa-user-group",
    words: [
      { cn: "个", py: "gè", en: "piece (measure word)", tip: "Most common measure word" },
      { cn: "两", py: "liǎng", en: "two (with measure words)", tip: "Use 两 not 二 with 个" },
      { cn: "有", py: "yǒu", en: "to have / there is", tip: "Indicates possession" },
      { cn: "没有", py: "méiyǒu", en: "to not have", tip: "Negative form of 有" },
      { cn: "同学", py: "tóngxué", en: "classmate", tip: "Same + study = classmate" },
      { cn: "几", py: "jǐ", en: "how many", tip: "For numbers under 10" }
    ],
    dialogue: [
      { who: "bot", cn: "你有几个同学？", en: "How many classmates do you have?" },
      { who: "you", cn: "我有三个中国同学。", en: "I have three Chinese classmates." },
      { who: "bot", cn: "他们人好吗？", en: "Are they good people?" },
      { who: "you", cn: "他们都很好！他们是我的朋友。", en: "They're all very good! They are my friends." },
      { who: "bot", cn: "你有几个好朋友？", en: "How many good friends do you have?" },
      { who: "you", cn: "我有两个好朋友，没有很多。", en: "I have two good friends, not many." },
      { who: "bot", cn: "两个好朋友就够了。", en: "Two good friends is enough." }
    ]
  },

  // ============================
  // HSK 1: Family & People (11-15)
  // ============================
  {
    title: "我的家庭 - My Family",
    level: "HSK 1",
    icon: "fa-people-roof",
    words: [
      { cn: "父亲", py: "fùqīn", en: "father (formal)", tip: "More formal than 爸爸" },
      { cn: "母亲", py: "mǔqīn", en: "mother (formal)", tip: "More formal than 妈妈" },
      { cn: "儿子", py: "érzi", en: "son", tip: "儿 = child, 子 = suffix" },
      { cn: "女儿", py: "nǚ'ér", en: "daughter", tip: "女 = woman / female" },
      { cn: "孩子", py: "háizi", en: "child", tip: "孩 + 子 = child" },
      { cn: "工作", py: "gōngzuò", en: "to work / job", tip: "工 = work, 作 = do" }
    ],
    dialogue: [
      { who: "bot", cn: "你家有孩子吗？", en: "Does your family have children?" },
      { who: "you", cn: "有，我是我父母的儿子。", en: "Yes, I am my parents' son." },
      { who: "bot", cn: "你父亲做什么工作？", en: "What does your father do for work?" },
      { who: "you", cn: "我父亲是老师，母亲也是老师。", en: "My father is a teacher, my mother is also a teacher." },
      { who: "bot", cn: "那你呢？你工作吗？", en: "And you? Do you work?" },
      { who: "you", cn: "我不工作，我是学生。", en: "I don't work, I'm a student." },
      { who: "bot", cn: "你的家人很好。", en: "Your family is great." }
    ]
  },
  {
    title: "爷爷奶奶 - Grandparents",
    level: "HSK 1",
    icon: "fa-person-cane",
    words: [
      { cn: "爷爷", py: "yéye", en: "grandpa (father's side)", tip: "Paternal grandfather" },
      { cn: "奶奶", py: "nǎinai", en: "grandma (father's side)", tip: "Paternal grandmother" },
      { cn: "外公", py: "wàigōng", en: "grandpa (mother's side)", tip: "Maternal grandfather" },
      { cn: "外婆", py: "wàipó", en: "grandma (mother's side)", tip: "Maternal grandmother" },
      { cn: "老", py: "lǎo", en: "old", tip: "Also prefix for respect (老师)" },
      { cn: "健康", py: "jiànkāng", en: "healthy", tip: "Common wish for elders" }
    ],
    dialogue: [
      { who: "bot", cn: "你的爷爷和奶奶好吗？", en: "Are your grandpa and grandma well?" },
      { who: "you", cn: "他们都很好，很健康。", en: "They are both well, very healthy." },
      { who: "bot", cn: "我外公外婆也很健康。", en: "My maternal grandpa and grandma are also very healthy." },
      { who: "you", cn: "老人健康是好事。", en: "It's good that the elders are healthy." },
      { who: "bot", cn: "是，我们都很爱他们。", en: "Yes, we all love them very much." },
      { who: "you", cn: "我常常去看爷爷奶奶。", en: "I often visit grandpa and grandma." }
    ]
  },
  {
    title: "朋友之间 - Between Friends",
    level: "HSK 1",
    icon: "fa-handshake",
    words: [
      { cn: "朋友", py: "péngyou", en: "friend", tip: "Pen + you = friend" },
      { cn: "好", py: "hǎo", en: "good", tip: "Can mean 'very' before adjectives" },
      { cn: "一起", py: "yìqǐ", en: "together", tip: "一 (one) + 起 (rise)" },
      { cn: "玩", py: "wán", en: "to play / have fun", tip: "Very common with friends" },
      { cn: "高兴", py: "gāoxìng", en: "happy", tip: "高 (high) + 兴 (excited)" },
      { cn: "说", py: "shuō", en: "to speak / to say", tip: "Also 'to scold' in some contexts" }
    ],
    dialogue: [
      { who: "bot", cn: "你和朋友一起玩什么？", en: "What do you do with your friends?" },
      { who: "you", cn: "我们一起去公园玩。", en: "We go to the park together." },
      { who: "bot", cn: "和朋友一起很高兴吧？", en: "It's very happy being with friends, right?" },
      { who: "you", cn: "是，我很高兴。", en: "Yes, I am very happy." },
      { who: "bot", cn: "你们说什么？", en: "What do you talk about?" },
      { who: "you", cn: "我们用中文说话。", en: "We speak in Chinese." },
      { who: "bot", cn: "太好了！朋友可以帮你学中文。", en: "Great! Friends can help you learn Chinese." }
    ]
  },
  {
    title: "她是谁 - Who Is She",
    level: "HSK 1",
    icon: "fa-circle-question",
    words: [
      { cn: "谁", py: "shéi", en: "who / whom", tip: "Also pronounced shuí" },
      { cn: "他", py: "tā", en: "he / him", tip: "Same sound as 她 (she)" },
      { cn: "她", py: "tā", en: "she / her", tip: "Different character, same sound" },
      { cn: "名字", py: "míngzì", en: "name", tip: "名 = name, 字 = character" },
      { cn: "老师", py: "lǎoshī", en: "teacher", tip: "老 (old) + 师 (master)" },
      { cn: "学生", py: "xuéshēng", en: "student", tip: "Review: 学 = study" }
    ],
    dialogue: [
      { who: "bot", cn: "她是谁？", en: "Who is she?" },
      { who: "you", cn: "她是我的中文老师。", en: "She is my Chinese teacher." },
      { who: "bot", cn: "老师叫什么名字？", en: "What is the teacher's name?" },
      { who: "you", cn: "她叫王老师。", en: "She is called Teacher Wang." },
      { who: "bot", cn: "他是谁？", en: "Who is he?" },
      { who: "you", cn: "他是我的同学。", en: "He is my classmate." },
      { who: "bot", cn: "你们都是学生吗？", en: "Are you both students?" },
      { who: "you", cn: "是，我们都是学生。", en: "Yes, we are both students." }
    ]
  },
  {
    title: "我们是一家人 - We Are Family",
    level: "HSK 1",
    icon: "fa-house-chimney",
    words: [
      { cn: "我们", py: "wǒmen", en: "we / us", tip: "我 + 们 (plural suffix)" },
      { cn: "他们", py: "tāmen", en: "they / them", tip: "他 + 们 = they (male/mixed)" },
      { cn: "和", py: "hé", en: "and / with", tip: "Connects nouns, not sentences" },
      { cn: "都", py: "dōu", en: "all / both", tip: "Always comes before the verb" },
      { cn: "住", py: "zhù", en: "to live / to stay", tip: "住 + 在 = live at" },
      { cn: "一起", py: "yìqǐ", en: "together", tip: "Review: common word" }
    ],
    dialogue: [
      { who: "bot", cn: "你们一家人住在一起吗？", en: "Do your family members live together?" },
      { who: "you", cn: "是，我和爸爸妈妈都住在一起。", en: "Yes, my mom, dad, and I all live together." },
      { who: "bot", cn: "你们和爷爷奶奶一起住吗？", en: "Do you live with your grandpa and grandma too?" },
      { who: "you", cn: "爷爷奶奶不住在一起，他们住得很近。", en: "Grandpa and grandma don't live with us, they live very close." },
      { who: "bot", cn: "我家有四个人，我们和外婆住。", en: "My family has four people, we live with grandma." },
      { who: "you", cn: "真好啊！一家人在一起很高兴。", en: "How nice! A family together is very happy." },
      { who: "bot", cn: "是，我们都爱我们的家。", en: "Yes, we all love our home." }
    ]
  },

  // ============================
  // HSK 1: Food & Eating (16-20)
  // ============================
  {
    title: "中国菜 - Chinese Food",
    level: "HSK 1",
    icon: "fa-utensils",
    words: [
      { cn: "米饭", py: "mǐfàn", en: "cooked rice", tip: "米 (rice) + 饭 (meal)" },
      { cn: "菜", py: "cài", en: "dish / vegetable", tip: "Can mean either" },
      { cn: "吃", py: "chī", en: "to eat", tip: "Essential dining verb" },
      { cn: "好吃", py: "hǎochī", en: "delicious", tip: "好 (good) + 吃 (eat)" },
      { cn: "很", py: "hěn", en: "very", tip: "Before adjectives, not verbs" },
      { cn: "想", py: "xiǎng", en: "to want / to think", tip: "想 + verb = want to" }
    ],
    dialogue: [
      { who: "bot", cn: "你想吃什么？", en: "What do you want to eat?" },
      { who: "you", cn: "我想吃米饭和菜。", en: "I want to eat rice and dishes." },
      { who: "bot", cn: "中国菜很好吃！", en: "Chinese food is very delicious!" },
      { who: "you", cn: "是，我很喜欢吃中国菜。", en: "Yes, I really like eating Chinese food." },
      { who: "bot", cn: "你吃过北京菜吗？", en: "Have you eaten Beijing cuisine?" },
      { who: "you", cn: "没吃过，但是我很想吃。", en: "I haven't, but I really want to try it." },
      { who: "bot", cn: "下次我们一起去吃。", en: "Next time let's go eat together." }
    ]
  },
  {
    title: "喝茶 - Drinking Tea",
    level: "HSK 1",
    icon: "fa-mug-saucer",
    words: [
      { cn: "茶", py: "chá", en: "tea", tip: "China's national drink" },
      { cn: "水", py: "shuǐ", en: "water", tip: "Also 'boiled water'" },
      { cn: "喝", py: "hē", en: "to drink", tip: "First tone, short sound" },
      { cn: "杯", py: "bēi", en: "cup (measure word)", tip: "一杯茶 = one cup of tea" },
      { cn: "热", py: "rè", en: "hot", tip: "Antonym: 冷 (lěng) cold" },
      { cn: "喜欢", py: "xǐhuān", en: "to like", tip: "喜 = happy, 欢 = joyous" }
    ],
    dialogue: [
      { who: "bot", cn: "你喜欢喝茶吗？", en: "Do you like drinking tea?" },
      { who: "you", cn: "喜欢！我喜欢喝中国茶。", en: "Yes! I like drinking Chinese tea." },
      { who: "bot", cn: "来一杯热茶吧。", en: "Have a cup of hot tea." },
      { who: "you", cn: "谢谢。这茶很好喝。", en: "Thank you. This tea is very good to drink." },
      { who: "bot", cn: "你还喜欢喝什么？", en: "What else do you like to drink?" },
      { who: "you", cn: "我也喜欢喝水。", en: "I also like drinking water." },
      { who: "bot", cn: "喝水对身体好。", en: "Drinking water is good for health." }
    ]
  },
  {
    title: "水果 - Fruits",
    level: "HSK 1",
    icon: "fa-apple-whole",
    words: [
      { cn: "苹果", py: "píngguǒ", en: "apple", tip: "苹 = apple, 果 = fruit" },
      { cn: "水果", py: "shuǐguǒ", en: "fruit", tip: "水 (water) + 果 (fruit)" },
      { cn: "西瓜", py: "xīguā", en: "watermelon", tip: "西 (west) + 瓜 (melon)" },
      { cn: "很甜", py: "hěn tián", en: "very sweet", tip: "甜 is sweet" },
      { cn: "要", py: "yào", en: "to want", tip: "More direct than 想" },
      { cn: "新鲜", py: "xīnxiān", en: "fresh", tip: "新 (new) + 鲜 (fresh)" }
    ],
    dialogue: [
      { who: "bot", cn: "你要买水果吗？", en: "Do you want to buy fruit?" },
      { who: "you", cn: "是，我要买苹果和西瓜。", en: "Yes, I want to buy apples and watermelon." },
      { who: "bot", cn: "这个苹果很新鲜。", en: "This apple is very fresh." },
      { who: "you", cn: "西瓜很甜吗？", en: "Is the watermelon very sweet?" },
      { who: "bot", cn: "很甜！你尝尝。", en: "Very sweet! Try it." },
      { who: "you", cn: "真的很好吃。我买一个。", en: "It's really delicious. I'll buy one." },
      { who: "bot", cn: "还要别的吗？", en: "Do you need anything else?" },
      { who: "you", cn: "不要了，谢谢。", en: "No need, thank you." }
    ]
  },
  {
    title: "在餐厅 - At a Restaurant",
    level: "HSK 1",
    icon: "fa-bowl-food",
    words: [
      { cn: "餐厅", py: "cāntīng", en: "restaurant", tip: "餐 (meal) + 厅 (hall)" },
      { cn: "菜单", py: "càidān", en: "menu", tip: "菜 (dish) + 单 (list)" },
      { cn: "点菜", py: "diǎn cài", en: "to order food", tip: "点 (order) + 菜 (dish)" },
      { cn: "碗", py: "wǎn", en: "bowl", tip: "Measure word for bowls" },
      { cn: "筷子", py: "kuàizi", en: "chopsticks", tip: "筷 (chopstick) + 子 (suffix)" },
      { cn: "米饭", py: "mǐfàn", en: "rice", tip: "Review: staple food" }
    ],
    dialogue: [
      { who: "bot", cn: "欢迎来餐厅！你想吃什么？", en: "Welcome to the restaurant! What would you like to eat?" },
      { who: "you", cn: "请给我看菜单。", en: "Please show me the menu." },
      { who: "bot", cn: "好的，这是菜单。", en: "Okay, here is the menu." },
      { who: "you", cn: "我要一碗米饭和一个菜。", en: "I want one bowl of rice and one dish." },
      { who: "bot", cn: "好的，我用筷子吃，你呢？", en: "Okay, I eat with chopsticks. What about you?" },
      { who: "you", cn: "我也用筷子。", en: "I also use chopsticks." },
      { who: "bot", cn: "你筷子用得真好！", en: "You use chopsticks very well!" },
      { who: "you", cn: "谢谢，菜很好吃。", en: "Thank you, the food is very delicious." }
    ]
  },
  {
    title: "做菜 - Cooking",
    level: "HSK 1",
    icon: "fa-kitchen-set",
    words: [
      { cn: "做", py: "zuò", en: "to do / to make", tip: "做菜 = to cook" },
      { cn: "鸡蛋", py: "jīdàn", en: "egg", tip: "鸡 (chicken) + 蛋 (egg)" },
      { cn: "肉", py: "ròu", en: "meat", tip: "猪肉 = pork, 牛肉 = beef" },
      { cn: "汤", py: "tāng", en: "soup", tip: "Also 'broth'" },
      { cn: "盐", py: "yán", en: "salt", tip: "Essential seasoning" },
      { cn: "油", py: "yóu", en: "oil", tip: "Also 'fat' or 'grease'" }
    ],
    dialogue: [
      { who: "bot", cn: "你喜欢做菜吗？", en: "Do you like cooking?" },
      { who: "you", cn: "喜欢，我会做鸡蛋和肉。", en: "Yes, I can cook eggs and meat." },
      { who: "bot", cn: "你会做汤吗？", en: "Can you make soup?" },
      { who: "you", cn: "会，我会做鸡蛋汤。", en: "Yes, I can make egg soup." },
      { who: "bot", cn: "做菜要放盐和油。", en: "Cooking needs to add salt and oil." },
      { who: "you", cn: "我知道，放一点盐就好吃。", en: "I know, adding a little salt makes it delicious." },
      { who: "bot", cn: "下次你教我做好吗？", en: "Next time will you teach me to cook?" }
    ]
  },

  // ============================
  // HSK 1: Time & Date (21-25)
  // ============================
  {
    title: "今天星期几 - What Day Is Today",
    level: "HSK 1",
    icon: "fa-calendar-day",
    words: [
      { cn: "今天", py: "jīntiān", en: "today", tip: "今 (now) + 天 (day)" },
      { cn: "明天", py: "míngtiān", en: "tomorrow", tip: "明 (bright/next) + 天" },
      { cn: "昨天", py: "zuótiān", en: "yesterday", tip: "昨 (yesterday) + 天" },
      { cn: "星期", py: "xīngqī", en: "week", tip: "星期一 = Monday" },
      { cn: "天", py: "tiān", en: "day / sky", tip: "Both meanings" },
      { cn: "号", py: "hào", en: "day of month / number", tip: "几号? = What date?" }
    ],
    dialogue: [
      { who: "bot", cn: "今天星期几？", en: "What day is it today?" },
      { who: "you", cn: "今天星期一。", en: "Today is Monday." },
      { who: "bot", cn: "今天是几号？", en: "What is the date today?" },
      { who: "you", cn: "今天是一号。", en: "Today is the 1st." },
      { who: "bot", cn: "明天是星期二，对吗？", en: "Tomorrow is Tuesday, right?" },
      { who: "you", cn: "对，明天是星期二。", en: "Right, tomorrow is Tuesday." },
      { who: "bot", cn: "昨天星期天，我去了公园。", en: "Yesterday was Sunday, I went to the park." }
    ]
  },
  {
    title: "现在几点 - What Time Is It",
    level: "HSK 1",
    icon: "fa-clock",
    words: [
      { cn: "现在", py: "xiànzài", en: "now / at present", tip: "现 (current) + 在 (at)" },
      { cn: "点", py: "diǎn", en: "o'clock", tip: "一点 = 1 o'clock" },
      { cn: "分", py: "fēn", en: "minute", tip: "Used after numbers" },
      { cn: "半", py: "bàn", en: "half", tip: "三点半 = 3:30" },
      { cn: "早上", py: "zǎoshang", en: "morning", tip: "早 (early) + 上 (on/up)" },
      { cn: "晚上", py: "wǎnshang", en: "evening", tip: "晚 (late) + 上" }
    ],
    dialogue: [
      { who: "bot", cn: "现在几点？", en: "What time is it now?" },
      { who: "you", cn: "现在早上八点。", en: "It's 8:00 in the morning now." },
      { who: "bot", cn: "你早上几点起床？", en: "What time do you get up in the morning?" },
      { who: "you", cn: "我早上六点半起床。", en: "I wake up at 6:30 in the morning." },
      { who: "bot", cn: "晚上你几点睡觉？", en: "What time do you sleep at night?" },
      { who: "you", cn: "我晚上十点睡觉。", en: "I sleep at 10:00 at night." },
      { who: "bot", cn: "你睡得很早。", en: "You sleep quite early." }
    ]
  },
  {
    title: "年月日 - Year Month Day",
    level: "HSK 1",
    icon: "fa-calendar",
    words: [
      { cn: "年", py: "nián", en: "year", tip: "去年 = last year, 明年 = next year" },
      { cn: "月", py: "yuè", en: "month", tip: "一月 = January" },
      { cn: "日", py: "rì", en: "day (formal)", tip: "Same as 天 but formal" },
      { cn: "今年", py: "jīnnián", en: "this year", tip: "今 (now) + 年 (year)" },
      { cn: "生日", py: "shēngrì", en: "birthday", tip: "生 (birth) + 日 (day)" },
      { cn: "快乐", py: "kuàilè", en: "happy / joyful", tip: "生日快乐 = Happy Birthday" }
    ],
    dialogue: [
      { who: "bot", cn: "今年是哪一年？", en: "What year is it this year?" },
      { who: "you", cn: "今年是2025年。", en: "This year is 2025." },
      { who: "bot", cn: "你的生日是几月几号？", en: "What month and date is your birthday?" },
      { who: "you", cn: "我的生日是五月十号。", en: "My birthday is May 10th." },
      { who: "bot", cn: "生日快乐！", en: "Happy birthday!" },
      { who: "you", cn: "谢谢！你的生日是几月？", en: "Thank you! What month is your birthday?" },
      { who: "bot", cn: "我的生日是十二月。", en: "My birthday is in December." },
      { who: "you", cn: "那你的生日快了。", en: "Then your birthday is coming soon." }
    ]
  },
  {
    title: "每天的生活 - Daily Life",
    level: "HSK 1",
    icon: "fa-sun",
    words: [
      { cn: "每天", py: "měitiān", en: "every day", tip: "每 (each) + 天 (day)" },
      { cn: "起床", py: "qǐchuáng", en: "to get up", tip: "起 (rise) + 床 (bed)" },
      { cn: "吃饭", py: "chīfàn", en: "to eat a meal", tip: "吃 (eat) + 饭 (rice/meal)" },
      { cn: "去", py: "qù", en: "to go", tip: "Opposite: 来 (to come)" },
      { cn: "学校", py: "xuéxiào", en: "school", tip: "学 (learn) + 校 (school)" },
      { cn: "回家", py: "huí jiā", en: "to return home", tip: "回 (return) + 家 (home)" }
    ],
    dialogue: [
      { who: "bot", cn: "你每天几点起床？", en: "What time do you get up every day?" },
      { who: "you", cn: "我每天早上七点起床。", en: "I get up at 7:00 every morning." },
      { who: "bot", cn: "然后你吃饭吗？", en: "Then do you eat breakfast?" },
      { who: "you", cn: "是，我早上八点去学校。", en: "Yes, I go to school at 8:00." },
      { who: "bot", cn: "你几点回家？", en: "What time do you go home?" },
      { who: "you", cn: "我下午四点回家。", en: "I go home at 4:00 in the afternoon." },
      { who: "bot", cn: "每天的生活很规律。", en: "Your daily life is very regular." }
    ]
  },
  {
    title: "周末计划 - Weekend Plans",
    level: "HSK 1",
    icon: "fa-calendar-week",
    words: [
      { cn: "周末", py: "zhōumò", en: "weekend", tip: "周 (week) + 末 (end)" },
      { cn: "准备", py: "zhǔnbèi", en: "to prepare", tip: "Prepare / plan to" },
      { cn: "去", py: "qù", en: "to go", tip: "Review: common movement verb" },
      { cn: "商场", py: "shāngchǎng", en: "shopping mall", tip: "商 (commerce) + 场 (place)" },
      { cn: "电影", py: "diànyǐng", en: "movie", tip: "电 (electric) + 影 (shadow)" },
      { cn: "看", py: "kàn", en: "to see / to watch", tip: "看书, 看电影" }
    ],
    dialogue: [
      { who: "bot", cn: "周末你准备做什么？", en: "What are you planning to do on the weekend?" },
      { who: "you", cn: "我要去商场买东西。", en: "I'm going to the mall to buy things." },
      { who: "bot", cn: "然后呢？", en: "And then?" },
      { who: "you", cn: "我还要看一个电影。", en: "I'm also going to watch a movie." },
      { who: "bot", cn: "有什么好电影？", en: "What good movies are there?" },
      { who: "you", cn: "有一个中国电影很好看。", en: "There's a Chinese movie that's very good." },
      { who: "bot", cn: "周末我也想去。", en: "I also want to go on the weekend." },
      { who: "you", cn: "我们一起去看吧！", en: "Let's go watch it together!" }
    ]
  },

  // ============================
  // HSK 1: Daily Life (26-30)
  // ============================
  {
    title: "去商店 - Going to the Store",
    level: "HSK 1",
    icon: "fa-store",
    words: [
      { cn: "商店", py: "shāngdiàn", en: "store / shop", tip: "商 (commerce) + 店 (shop)" },
      { cn: "东西", py: "dōngxi", en: "thing / stuff", tip: "东 (east) + 西 (west)" },
      { cn: "可以", py: "kěyǐ", en: "can / may", tip: "Permission or possibility" },
      { cn: "看", py: "kàn", en: "to look / see", tip: "看看 = take a look" },
      { cn: "来", py: "lái", en: "to come", tip: "Opposite of 去" },
      { cn: "买", py: "mǎi", en: "to buy", tip: "Review: essential verb" }
    ],
    dialogue: [
      { who: "bot", cn: "你要去商店吗？", en: "Are you going to the store?" },
      { who: "you", cn: "是，我想去买东西。", en: "Yes, I want to go buy some things." },
      { who: "bot", cn: "我可以和你一起去吗？", en: "Can I go with you?" },
      { who: "you", cn: "可以，我们走吧。", en: "Sure, let's go." },
      { who: "bot", cn: "这个商店有很多好东西。", en: "This store has a lot of good stuff." },
      { who: "you", cn: "我来看看。哇，这个很漂亮！", en: "Let me take a look. Wow, this is very pretty!" },
      { who: "bot", cn: "你要买吗？", en: "Are you going to buy it?" },
      { who: "you", cn: "太贵了，我不买了。", en: "Too expensive, I won't buy it." }
    ]
  },
  {
    title: "在家里 - At Home",
    level: "HSK 1",
    icon: "fa-house",
    words: [
      { cn: "看书", py: "kàn shū", en: "to read a book", tip: "看 (read) + 书 (book)" },
      { cn: "写字", py: "xiě zì", en: "to write characters", tip: "写 (write) + 字 (character)" },
      { cn: "电视", py: "diànshì", en: "television", tip: "电 + 视 (vision)" },
      { cn: "听", py: "tīng", en: "to listen", tip: "听音乐 = listen to music" },
      { cn: "音乐", py: "yīnyuè", en: "music", tip: "音 (sound) + 乐 (music)" },
      { cn: "开", py: "kāi", en: "to open / to turn on", tip: "开电视 = turn on TV" }
    ],
    dialogue: [
      { who: "bot", cn: "你在家做什么？", en: "What do you do at home?" },
      { who: "you", cn: "我喜欢在家里看书。", en: "I like to read books at home." },
      { who: "bot", cn: "我也喜欢看书。你还做什么？", en: "I also like reading. What else do you do?" },
      { who: "you", cn: "我听听音乐，看看电视。", en: "I listen to music and watch TV." },
      { who: "bot", cn: "你开电视吗？", en: "Do you turn on the TV?" },
      { who: "you", cn: "是，我下午开电视看中文节目。", en: "Yes, I turn on the TV in the afternoon to watch Chinese shows." },
      { who: "bot", cn: "写字呢？你写汉字吗？", en: "And writing? Do you write Chinese characters?" },
      { who: "you", cn: "写，我每天写汉字。", en: "Yes, I write Chinese characters every day." }
    ]
  },
  {
    title: "在城市里 - In the City",
    level: "HSK 1",
    icon: "fa-city",
    words: [
      { cn: "坐", py: "zuò", en: "to sit / to ride", tip: "坐车 = ride a vehicle" },
      { cn: "车", py: "chē", en: "vehicle / car", tip: "火车 = train" },
      { cn: "路", py: "lù", en: "road / way", tip: "走路 = to walk" },
      { cn: "走", py: "zǒu", en: "to walk", tip: "走 = walk, 跑 = run" },
      { cn: "医院", py: "yīyuàn", en: "hospital", tip: "医 (medical) + 院 (institution)" },
      { cn: "公园", py: "gōngyuán", en: "park", tip: "公 (public) + 园 (garden)" }
    ],
    dialogue: [
      { who: "bot", cn: "你怎么去公园？", en: "How do you go to the park?" },
      { who: "you", cn: "我走路去公园。", en: "I walk to the park." },
      { who: "bot", cn: "远吗？", en: "Is it far?" },
      { who: "you", cn: "不远，走十分钟就到。", en: "Not far, just a ten-minute walk." },
      { who: "bot", cn: "医院在公园旁边吗？", en: "Is the hospital next to the park?" },
      { who: "you", cn: "是，医院在路的那边。", en: "Yes, the hospital is on the other side of the road." },
      { who: "bot", cn: "我们坐车去吧。", en: "Let's take a car." },
      { who: "you", cn: "好，我坐你的车。", en: "Okay, I'll ride in your car." }
    ]
  },
  {
    title: "购物清单 - Shopping List",
    level: "HSK 1",
    icon: "fa-cart-shopping",
    words: [
      { cn: "要", py: "yào", en: "to want / need", tip: "More active than 想" },
      { cn: "买", py: "mǎi", en: "to buy", tip: "Review: use with 要" },
      { cn: "衣服", py: "yīfu", en: "clothing", tip: "衣 (clothes) + 服 (garment)" },
      { cn: "鞋", py: "xié", en: "shoe", tip: "一双鞋 = a pair of shoes" },
      { cn: "大", py: "dà", en: "big / large", tip: "Size description" },
      { cn: "小", py: "xiǎo", en: "small", tip: "Opposite of 大" }
    ],
    dialogue: [
      { who: "bot", cn: "你要买什么？", en: "What do you want to buy?" },
      { who: "you", cn: "我要买衣服和鞋。", en: "I want to buy clothes and shoes." },
      { who: "bot", cn: "你要大的还是小的？", en: "Do you want big or small?" },
      { who: "you", cn: "衣服要大号，鞋要小号。", en: "Clothes in large, shoes in small." },
      { who: "bot", cn: "这件衣服怎么样？", en: "What about this piece of clothing?" },
      { who: "you", cn: "很好看！多少钱？", en: "Very nice! How much is it?" },
      { who: "bot", cn: "八十块，不贵。", en: "Eighty yuan, not expensive." },
      { who: "you", cn: "好的，我买了。", en: "Okay, I'll take it." }
    ]
  },
  {
    title: "累了 - Feeling Tired",
    level: "HSK 1",
    icon: "fa-bed",
    words: [
      { cn: "累", py: "lèi", en: "tired", tip: "我很累 = I'm very tired" },
      { cn: "睡觉", py: "shuìjiào", en: "to sleep", tip: "睡 (sleep) + 觉 (sense)" },
      { cn: "休息", py: "xiūxi", en: "to rest", tip: "休 (stop) + 息 (rest)" },
      { cn: "回家", py: "huí jiā", en: "go home", tip: "回 (return) + 家 (home)" },
      { cn: "做", py: "zuò", en: "to do", tip: "做工 = do work" },
      { cn: "想", py: "xiǎng", en: "to want / would like", tip: "我想睡觉 = I want to sleep" }
    ],
    dialogue: [
      { who: "bot", cn: "你累了吗？", en: "Are you tired?" },
      { who: "you", cn: "是，我今天做了很多事，很累。", en: "Yes, I did a lot of things today, very tired." },
      { who: "bot", cn: "你应该休息一下。", en: "You should rest a bit." },
      { who: "you", cn: "我想回家睡觉。", en: "I want to go home and sleep." },
      { who: "bot", cn: "回家好好休息吧。", en: "Go home and have a good rest." },
      { who: "you", cn: "好的，明天见！", en: "Okay, see you tomorrow!" },
      { who: "bot", cn: "明天见，晚安！", en: "See you tomorrow, good night!" }
    ]
  },

  // ============================
  // HSK 1: Location & Direction (31-35)
  // ============================
  {
    title: "在哪儿 - Where Is It",
    level: "HSK 1",
    icon: "fa-map-pin",
    words: [
      { cn: "在", py: "zài", en: "at / to be at", tip: "在 + place = at a place" },
      { cn: "哪儿", py: "nǎr", en: "where", tip: "哪 + 儿 (r-suffix)" },
      { cn: "这里", py: "zhèlǐ", en: "here", tip: "这 (this) + 里 (inside)" },
      { cn: "那里", py: "nàlǐ", en: "there", tip: "那 (that) + 里 (inside)" },
      { cn: "里", py: "lǐ", en: "inside", tip: "Used in locations" },
      { cn: "面", py: "miàn", en: "side / face", tip: "前面 = front, 后面 = back" }
    ],
    dialogue: [
      { who: "bot", cn: "你的学校在哪儿？", en: "Where is your school?" },
      { who: "you", cn: "我的学校在这里。", en: "My school is here." },
      { who: "bot", cn: "那商店在那里？", en: "Is the store there?" },
      { who: "you", cn: "不，商店在学校里面。", en: "No, the store is inside the school." },
      { who: "bot", cn: "请问，洗手间在前面吗？", en: "Excuse me, is the restroom up ahead?" },
      { who: "you", cn: "是，在前面。", en: "Yes, it's up ahead." },
      { who: "bot", cn: "谢谢，我找到了。", en: "Thanks, I found it." }
    ]
  },
  {
    title: "在学校 - At School",
    level: "HSK 1",
    icon: "fa-school",
    words: [
      { cn: "学校", py: "xuéxiào", en: "school", tip: "Review: 学 + 校" },
      { cn: "教室", py: "jiàoshì", en: "classroom", tip: "教 (teach) + 室 (room)" },
      { cn: "老师", py: "lǎoshī", en: "teacher", tip: "Review: 老 + 师" },
      { cn: "同学", py: "tóngxué", en: "classmate", tip: "同 (same) + 学 (study)" },
      { cn: "书", py: "shū", en: "book", tip: "书本 = books" },
      { cn: "读", py: "dú", en: "to read aloud", tip: "读书 = study (read books)" }
    ],
    dialogue: [
      { who: "bot", cn: "你在学校做什么？", en: "What do you do at school?" },
      { who: "you", cn: "我在教室读书。", en: "I read books in the classroom." },
      { who: "bot", cn: "老师好吗？", en: "Is the teacher good?" },
      { who: "you", cn: "老师很好，同学们也很好。", en: "The teacher is very good, and my classmates are good too." },
      { who: "bot", cn: "你读什么书？", en: "What book are you reading?" },
      { who: "you", cn: "我读中文书。", en: "I'm reading a Chinese book." },
      { who: "bot", cn: "你的书在哪儿？", en: "Where is your book?" },
      { who: "you", cn: "在我的桌子上。", en: "On my desk." }
    ]
  },
  {
    title: "在家附近 - Near Home",
    level: "HSK 1",
    icon: "fa-tree",
    words: [
      { cn: "家", py: "jiā", en: "home", tip: "Review: my home" },
      { cn: "旁边", py: "pángbiān", en: "beside / next to", tip: "旁 (side) + 边 (edge)" },
      { cn: "前", py: "qián", en: "front / before", tip: "前面 = in front" },
      { cn: "后", py: "hòu", en: "back / behind", tip: "后面 = behind" },
      { cn: "商店", py: "shāngdiàn", en: "store", tip: "Review: 商 + 店" },
      { cn: "医院", py: "yīyuàn", en: "hospital", tip: "Review: 医 + 院" }
    ],
    dialogue: [
      { who: "bot", cn: "你家旁边有什么？", en: "What's next to your home?" },
      { who: "you", cn: "我家旁边有一个商店。", en: "Next to my home there is a store." },
      { who: "bot", cn: "医院在你家前面吗？", en: "Is the hospital in front of your home?" },
      { who: "you", cn: "不，医院在我家后面。", en: "No, the hospital is behind my home." },
      { who: "bot", cn: "那很方便。", en: "That's very convenient." },
      { who: "you", cn: "是，买东西很近。", en: "Yes, buying things is very close by." }
    ]
  },
  {
    title: "地址 - Address",
    level: "HSK 1",
    icon: "fa-map-location-dot",
    words: [
      { cn: "地址", py: "dìzhǐ", en: "address", tip: "地 (place) + 址 (site)" },
      { cn: "路", py: "lù", en: "road / street", tip: "马路 = main road" },
      { cn: "号", py: "hào", en: "number", tip: "Used in addresses" },
      { cn: "房间", py: "fángjiān", en: "room", tip: "房 (house) + 间 (room)" },
      { cn: "地方", py: "dìfang", en: "place", tip: "地 (ground) + 方 (direction)" },
      { cn: "知道", py: "zhīdào", en: "to know", tip: "知 (know) + 道 (way)" }
    ],
    dialogue: [
      { who: "bot", cn: "你知道他的地址吗？", en: "Do you know his address?" },
      { who: "you", cn: "知道，他住在和平路十号。", en: "Yes, he lives at No. 10 Heping Road." },
      { who: "bot", cn: "是哪个房间？", en: "Which room?" },
      { who: "you", cn: "三零二号房间。", en: "Room 302." },
      { who: "bot", cn: "那个地方远吗？", en: "Is that place far?" },
      { who: "you", cn: "不远，在学校旁边。", en: "Not far, it's next to the school." },
      { who: "bot", cn: "好的我知道了，谢谢！", en: "Okay, I see. Thanks!" }
    ]
  },
  {
    title: "方位 - Directions",
    level: "HSK 1",
    icon: "fa-compass",
    words: [
      { cn: "上", py: "shàng", en: "up / on top", tip: "Opposite: 下 (xià)" },
      { cn: "下", py: "xià", en: "down / below", tip: "山下 = at the foot of the mountain" },
      { cn: "左", py: "zuǒ", en: "left", tip: "左边 = left side" },
      { cn: "右", py: "yòu", en: "right", tip: "右边 = right side" },
      { cn: "里", py: "lǐ", en: "inside", tip: "外面 (wàimiàn) = outside" },
      { cn: "外", py: "wài", en: "outside", tip: "门外 = outside the door" }
    ],
    dialogue: [
      { who: "bot", cn: "图书馆在哪儿？", en: "Where is the library?" },
      { who: "you", cn: "在学校的左边。", en: "It's to the left of the school." },
      { who: "bot", cn: "那食堂呢？", en: "And the cafeteria?" },
      { who: "you", cn: "在右边，学校的里面。", en: "On the right, inside the school." },
      { who: "bot", cn: "我的书在桌子上面。", en: "My book is on the desk." },
      { who: "you", cn: "不，在桌子下面！", en: "No, it's under the desk!" },
      { who: "bot", cn: "啊，看到了，谢谢！", en: "Ah, I see it, thanks!" }
    ]
  },

  // ============================
  // HSK 1: Weather & Seasons (36-38)
  // ============================
  {
    title: "天气怎么样 - How's the Weather",
    level: "HSK 1",
    icon: "fa-cloud-sun",
    words: [
      { cn: "天气", py: "tiānqì", en: "weather", tip: "天 (sky) + 气 (air)" },
      { cn: "冷", py: "lěng", en: "cold", tip: "Antonym: 热" },
      { cn: "热", py: "rè", en: "hot", tip: "天气很热 = The weather is hot" },
      { cn: "好", py: "hǎo", en: "good", tip: "好天气 = good weather" },
      { cn: "坏", py: "huài", en: "bad", tip: "坏天气 = bad weather" },
      { cn: "太", py: "tài", en: "too / extremely", tip: "太好了! = Great!" }
    ],
    dialogue: [
      { who: "bot", cn: "今天天气怎么样？", en: "How's the weather today?" },
      { who: "you", cn: "今天天气很好，不冷不热。", en: "The weather today is very good, neither cold nor hot." },
      { who: "bot", cn: "太好了！我们出去玩吧。", en: "Great! Let's go out and play." },
      { who: "you", cn: "昨天天气很坏，下雨了。", en: "Yesterday the weather was bad, it rained." },
      { who: "bot", cn: "是，昨天太冷了。今天真好。", en: "Yes, yesterday was too cold. Today is really nice." },
      { who: "you", cn: "你喜欢好天气吗？", en: "Do you like good weather?" },
      { who: "bot", cn: "当然喜欢！好天气让人高兴。", en: "Of course! Good weather makes people happy." }
    ]
  },
  {
    title: "春夏秋冬 - Four Seasons",
    level: "HSK 1",
    icon: "fa-seedling",
    words: [
      { cn: "春天", py: "chūntiān", en: "spring", tip: "春 (spring) + 天" },
      { cn: "夏天", py: "xiàtiān", en: "summer", tip: "夏 (summer) + 天" },
      { cn: "秋天", py: "qiūtiān", en: "autumn", tip: "秋 (autumn) + 天" },
      { cn: "冬天", py: "dōngtiān", en: "winter", tip: "冬 (winter) + 天" },
      { cn: "暖和", py: "nuǎnhuo", en: "warm", tip: "Spring is warm" },
      { cn: "凉快", py: "liángkuai", en: "cool", tip: "Autumn is cool" }
    ],
    dialogue: [
      { who: "bot", cn: "你喜欢什么季节？", en: "What season do you like?" },
      { who: "you", cn: "我喜欢春天，很暖和。", en: "I like spring, it's very warm." },
      { who: "bot", cn: "夏天很热，秋天很凉快。", en: "Summer is hot, autumn is cool." },
      { who: "you", cn: "冬天很冷，我不喜欢冬天。", en: "Winter is cold, I don't like winter." },
      { who: "bot", cn: "但是冬天可以看雪。", en: "But in winter you can see snow." },
      { who: "you", cn: "对，雪很漂亮。", en: "True, snow is very beautiful." },
      { who: "bot", cn: "四个季节我都喜欢。", en: "I like all four seasons." }
    ]
  },
  {
    title: "下雨了 - It's Raining",
    level: "HSK 1",
    icon: "fa-cloud-rain",
    words: [
      { cn: "下雨", py: "xià yǔ", en: "to rain", tip: "下 (descend) + 雨 (rain)" },
      { cn: "雨", py: "yǔ", en: "rain", tip: "大雨 = heavy rain" },
      { cn: "风", py: "fēng", en: "wind", tip: "大风 = strong wind" },
      { cn: "雪", py: "xuě", en: "snow", tip: "下雪 = to snow" },
      { cn: "天", py: "tiān", en: "sky / day", tip: "今天 = today" },
      { cn: "带", py: "dài", en: "to bring / to carry", tip: "带伞 = bring umbrella" }
    ],
    dialogue: [
      { who: "bot", cn: "今天下雨了。", en: "It's raining today." },
      { who: "you", cn: "是，雨很大。你带伞了吗？", en: "Yes, the rain is heavy. Did you bring an umbrella?" },
      { who: "bot", cn: "没有，我没带伞。", en: "No, I didn't bring an umbrella." },
      { who: "you", cn: "我们一起用我的伞吧。", en: "Let's share my umbrella." },
      { who: "bot", cn: "谢谢！明天会有风吗？", en: "Thanks! Will there be wind tomorrow?" },
      { who: "you", cn: "不知道，但是不会下雪。", en: "I don't know, but it won't snow." },
      { who: "bot", cn: "太好了。我不喜欢雨天。", en: "Great. I don't like rainy days." }
    ]
  },

  // ============================
  // HSK 1: School & Study (39-42)
  // ============================
  {
    title: "学中文 - Learning Chinese",
    level: "HSK 1",
    icon: "fa-language",
    words: [
      { cn: "学习", py: "xuéxí", en: "to study / to learn", tip: "学 (learn) + 习 (practice)" },
      { cn: "中文", py: "Zhōngwén", en: "Chinese (language)", tip: "中 (China) + 文 (writing)" },
      { cn: "汉字", py: "Hànzì", en: "Chinese characters", tip: "汉 (Han) + 字 (character)" },
      { cn: "拼音", py: "pīnyīn", en: "pinyin", tip: "拼 (spell) + 音 (sound)" },
      { cn: "难", py: "nán", en: "difficult", tip: "Opposite: 容易 (easy)" },
      { cn: "容易", py: "róngyì", en: "easy", tip: "容 (contain) + 易 (change)" }
    ],
    dialogue: [
      { who: "bot", cn: "你在学习中文吗？", en: "Are you studying Chinese?" },
      { who: "you", cn: "是，我在学习中文和汉字。", en: "Yes, I'm studying Chinese and Chinese characters." },
      { who: "bot", cn: "汉字难吗？", en: "Are Chinese characters difficult?" },
      { who: "you", cn: "有一点难，但是很有意思。", en: "A bit difficult, but very interesting." },
      { who: "bot", cn: "拼音比较容易。", en: "Pinyin is relatively easy." },
      { who: "you", cn: "对，拼音对我很有帮助。", en: "Right, pinyin is very helpful to me." },
      { who: "bot", cn: "你学得很好！", en: "You're learning very well!" }
    ]
  },
  {
    title: "看书 - Reading Books",
    level: "HSK 1",
    icon: "fa-book",
    words: [
      { cn: "看书", py: "kàn shū", en: "to read a book", tip: "看 (read) + 书 (book)" },
      { cn: "书", py: "shū", en: "book", tip: "一本书 = one book" },
      { cn: "字", py: "zì", en: "character / word", tip: "汉字 = Chinese character" },
      { cn: "读", py: "dú", en: "to read aloud", tip: "Reading aloud" },
      { cn: "写", py: "xiě", en: "to write", tip: "Write characters" },
      { cn: "本", py: "běn", en: "measure word (books)", tip: "一本书, 三本本子" }
    ],
    dialogue: [
      { who: "bot", cn: "你每天看书吗？", en: "Do you read books every day?" },
      { who: "you", cn: "是，我每天看中文书。", en: "Yes, I read Chinese books every day." },
      { who: "bot", cn: "你看什么书？", en: "What book are you reading?" },
      { who: "you", cn: "我看一本很有意思的书。", en: "I'm reading a very interesting book." },
      { who: "bot", cn: "你读出来，我听听。", en: "Read it aloud, let me listen." },
      { who: "you", cn: "好的，我读。这个字怎么读？", en: "Okay, I'll read. How do you read this character?" },
      { who: "bot", cn: "这个字读'爱'，爱。", en: "This character reads 'ài', love." },
      { who: "you", cn: "谢谢，我会了。", en: "Thanks, I got it." }
    ]
  },
  {
    title: "在课堂上 - In Class",
    level: "HSK 1",
    icon: "fa-chalkboard-user",
    words: [
      { cn: "上课", py: "shàng kè", en: "to attend class", tip: "上 (go up) + 课 (class)" },
      { cn: "下课", py: "xià kè", en: "to finish class", tip: "下 (go down) + 课" },
      { cn: "问题", py: "wèntí", en: "question", tip: "问 (ask) + 题 (topic)" },
      { cn: "回答", py: "huídá", en: "to answer", tip: "回 (return) + 答 (reply)" },
      { cn: "明白", py: "míngbai", en: "to understand", tip: "明 (bright) + 白 (clear)" },
      { cn: "对", py: "duì", en: "correct", tip: "不对 = not correct" }
    ],
    dialogue: [
      { who: "bot", cn: "上课了，请坐好。", en: "Class begins, please sit properly." },
      { who: "you", cn: "老师好！", en: "Hello teacher!" },
      { who: "bot", cn: "今天学第五课。我有个问题。", en: "Today we study lesson 5. I have a question." },
      { who: "you", cn: "老师请说。", en: "Teacher, please go ahead." },
      { who: "bot", cn: "你明白了吗？", en: "Do you understand?" },
      { who: "you", cn: "明白了。这个问题我知道怎么回答。", en: "I understand. I know how to answer this question." },
      { who: "bot", cn: "回答得很好，对了！", en: "Very good answer, correct!" },
      { who: "you", cn: "谢谢老师！", en: "Thank you, teacher!" }
    ]
  },
  {
    title: "作业 - Homework",
    level: "HSK 1",
    icon: "fa-pencil",
    words: [
      { cn: "作业", py: "zuòyè", en: "homework", tip: "作 (do) + 业 (work/industry)" },
      { cn: "做作业", py: "zuò zuòyè", en: "to do homework", tip: "做 (do) + 作业" },
      { cn: "会", py: "huì", en: "can / know how to", tip: "我会中文 = I can speak Chinese" },
      { cn: "教", py: "jiāo", en: "to teach", tip: "Different from 教 (jiào)" },
      { cn: "完", py: "wán", en: "to finish", tip: "做完 = finish doing" },
      { cn: "帮助", py: "bāngzhù", en: "to help", tip: "帮 (assist) + 助 (help)" }
    ],
    dialogue: [
      { who: "bot", cn: "今天的作业做完了吗？", en: "Have you finished today's homework?" },
      { who: "you", cn: "还没有，我不会做这个题。", en: "Not yet, I don't know how to do this problem." },
      { who: "bot", cn: "要我教你吗？", en: "Do you want me to teach you?" },
      { who: "you", cn: "好的，谢谢你帮助我。", en: "Okay, thank you for helping me." },
      { who: "bot", cn: "你做完了就明白了。", en: "Once you finish it, you'll understand." },
      { who: "you", cn: "是，我现在会了。", en: "Yes, I can do it now." },
      { who: "bot", cn: "那明天的课你也会的。", en: "Then you'll be good for tomorrow's class too." }
    ]
  },

  // ============================
  // HSK 1: Hobbies (43-45)
  // ============================
  {
    title: "爱好 - Hobbies",
    level: "HSK 1",
    icon: "fa-heart",
    words: [
      { cn: "喜欢", py: "xǐhuān", en: "to like", tip: "Review: common verb" },
      { cn: "唱歌", py: "chàng gē", en: "to sing", tip: "唱 (sing) + 歌 (song)" },
      { cn: "画画", py: "huà huà", en: "to draw / paint", tip: "画 (draw) + 画 (picture)" },
      { cn: "游泳", py: "yóu yǒng", en: "to swim", tip: "游 (swim) + 泳 (swim)" },
      { cn: "看书", py: "kàn shū", en: "to read", tip: "Reading is a hobby too" },
      { cn: "运动", py: "yùndòng", en: "sports / exercise", tip: "运 (move) + 动 (action)" }
    ],
    dialogue: [
      { who: "bot", cn: "你有什么爱好？", en: "What hobbies do you have?" },
      { who: "you", cn: "我喜欢唱歌和画画。", en: "I like singing and drawing." },
      { who: "bot", cn: "你会游泳吗？", en: "Can you swim?" },
      { who: "you", cn: "会，我也喜欢游泳。", en: "Yes, I also like swimming." },
      { who: "bot", cn: "你喜欢什么运动？", en: "What sports do you like?" },
      { who: "you", cn: "我喜欢看书和运动。", en: "I like reading and sports." },
      { who: "bot", cn: "你的爱好很多！", en: "You have a lot of hobbies!" }
    ]
  },
  {
    title: "运动时间 - Sports Time",
    level: "HSK 1",
    icon: "fa-basketball",
    words: [
      { cn: "跑步", py: "pǎo bù", en: "to run / jog", tip: "跑 (run) + 步 (step)" },
      { cn: "球", py: "qiú", en: "ball", tip: "足球 = soccer, 篮球 = basketball" },
      { cn: "玩", py: "wán", en: "to play", tip: "玩球 = play ball" },
      { cn: "朋友", py: "péngyou", en: "friend", tip: "Review: play with friends" },
      { cn: "操场", py: "cāochǎng", en: "sports field", tip: "操 (drill) + 场 (field)" },
      { cn: "锻炼", py: "duànliàn", en: "to exercise", tip: "锻 (forge) + 炼 (refine)" }
    ],
    dialogue: [
      { who: "bot", cn: "你喜欢做什么运动？", en: "What sports do you like to do?" },
      { who: "you", cn: "我喜欢跑步和打球。", en: "I like running and playing ball." },
      { who: "bot", cn: "你在哪里跑步？", en: "Where do you run?" },
      { who: "you", cn: "我在操场上跑步。", en: "I run on the sports field." },
      { who: "bot", cn: "你和朋友一起玩球吗？", en: "Do you play ball with friends?" },
      { who: "you", cn: "是，我们一起锻炼身体。", en: "Yes, we exercise together." },
      { who: "bot", cn: "真好，锻炼对身体好。", en: "Great, exercise is good for health." }
    ]
  },
  {
    title: "听音乐 - Listening to Music",
    level: "HSK 1",
    icon: "fa-headphones",
    words: [
      { cn: "听", py: "tīng", en: "to listen", tip: "听 = listen" },
      { cn: "音乐", py: "yīnyuè", en: "music", tip: "音 (sound) + 乐 (music)" },
      { cn: "歌", py: "gē", en: "song", tip: "唱歌 = sing a song" },
      { cn: "好", py: "hǎo", en: "good", tip: "好听 = pleasant to hear" },
      { cn: "手机", py: "shǒujī", en: "mobile phone", tip: "手 (hand) + 机 (machine)" },
      { cn: "时间", py: "shíjiān", en: "time", tip: "时 (time) + 间 (interval)" }
    ],
    dialogue: [
      { who: "bot", cn: "你喜欢听音乐吗？", en: "Do you like listening to music?" },
      { who: "you", cn: "非常喜欢！我每天听音乐。", en: "I like it a lot! I listen to music every day." },
      { who: "bot", cn: "你喜欢听什么歌？", en: "What songs do you like listening to?" },
      { who: "you", cn: "我喜欢听中文歌。", en: "I like listening to Chinese songs." },
      { who: "bot", cn: "你用手机听吗？", en: "Do you listen on your phone?" },
      { who: "you", cn: "是，我用手机听。很方便。", en: "Yes, I listen on my phone. Very convenient." },
      { who: "bot", cn: "你什么时候听音乐？", en: "When do you listen to music?" },
      { who: "you", cn: "我休息的时候听。", en: "I listen when I'm resting." }
    ]
  },

  // ============================
  // HSK 2: Shopping (46-51)
  // ============================
  {
    title: "逛街购物 - Window Shopping",
    level: "HSK 2",
    icon: "fa-bag-shopping",
    words: [
      { cn: "逛街", py: "guàng jiē", en: "to stroll / go shopping", tip: "逛 (stroll) + 街 (street)" },
      { cn: "颜色", py: "yánsè", en: "color", tip: "颜 (face) + 色 (color)" },
      { cn: "红色", py: "hóngsè", en: "red", tip: "红 (red) + 色" },
      { cn: "蓝色", py: "lánsè", en: "blue", tip: "蓝 (blue) + 色" },
      { cn: "白色", py: "báisè", en: "white", tip: "白 (white) + 色" },
      { cn: "黑色", py: "hēisè", en: "black", tip: "黑 (black) + 色" }
    ],
    dialogue: [
      { who: "bot", cn: "今天我们去逛街吧！", en: "Let's go shopping today!" },
      { who: "you", cn: "好啊！我想买一件衣服。", en: "Great! I want to buy a piece of clothing." },
      { who: "bot", cn: "你喜欢什么颜色？", en: "What color do you like?" },
      { who: "you", cn: "我喜欢红色和蓝色。", en: "I like red and blue." },
      { who: "bot", cn: "这件红色的衣服很好看。", en: "This red dress looks very nice." },
      { who: "you", cn: "白色的也很好看。哪个便宜？", en: "The white one also looks nice. Which is cheaper?" },
      { who: "bot", cn: "红色的便宜，只要五十块。", en: "The red one is cheap, only fifty yuan." },
      { who: "you", cn: "那我要红色的！", en: "Then I'll take the red one!" }
    ]
  },
  {
    title: "讨价还价 - Bargaining",
    level: "HSK 2",
    icon: "fa-hand-holding-dollar",
    words: [
      { cn: "贵", py: "guì", en: "expensive", tip: "太贵了 = too expensive" },
      { cn: "便宜", py: "piányi", en: "cheap", tip: "便宜一点 = a bit cheaper" },
      { cn: "打折", py: "dǎzhé", en: "to discount", tip: "打 (hit) + 折 (discount)" },
      { cn: "块", py: "kuài", en: "yuan (colloquial)", tip: "Same as 元" },
      { cn: "送", py: "sòng", en: "to give / to gift", tip: "送给你 = give to you" },
      { cn: "便宜点", py: "piányi diǎn", en: "cheaper please", tip: "Common bargaining phrase" }
    ],
    dialogue: [
      { who: "bot", cn: "这个包很漂亮，你买吗？", en: "This bag is very pretty. Are you buying it?" },
      { who: "you", cn: "多少钱？", en: "How much is it?" },
      { who: "bot", cn: "二百块。", en: "Two hundred yuan." },
      { who: "you", cn: "太贵了！能便宜点吗？", en: "Too expensive! Can you make it cheaper?" },
      { who: "bot", cn: "那你说多少钱？", en: "Then how much are you saying?" },
      { who: "you", cn: "一百五十块，可以吗？", en: "One hundred fifty yuan, okay?" },
      { who: "bot", cn: "好吧，送给你了。", en: "Alright, it's yours." },
      { who: "you", cn: "太好了，谢谢你！", en: "Great, thank you!" }
    ]
  },
  {
    title: "买衣服 - Buying Clothes",
    level: "HSK 2",
    icon: "fa-shirt",
    words: [
      { cn: "衣服", py: "yīfu", en: "clothing", tip: "衣 + 服 = clothes" },
      { cn: "裤子", py: "kùzi", en: "pants / trousers", tip: "裤 (pants) + 子" },
      { cn: "试", py: "shì", en: "to try", tip: "试试 = have a try" },
      { cn: "大小", py: "dàxiǎo", en: "size", tip: "大 (big) + 小 (small)" },
      { cn: "合适", py: "héshì", en: "suitable / fitting", tip: "合 (fit) + 适 (proper)" },
      { cn: "穿", py: "chuān", en: "to wear", tip: "穿上 = put on" }
    ],
    dialogue: [
      { who: "bot", cn: "你要买什么衣服？", en: "What clothes do you want to buy?" },
      { who: "you", cn: "我想买一条裤子和一件衣服。", en: "I want to buy a pair of pants and a shirt." },
      { who: "bot", cn: "你可以试试大小。", en: "You can try on the size." },
      { who: "you", cn: "这件衣服太小了。有大号吗？", en: "This shirt is too small. Do you have a large?" },
      { who: "bot", cn: "有，大号在这里。你穿上看看。", en: "Yes, the large size is here. Put it on and see." },
      { who: "you", cn: "这件很合适！我买了。", en: "This fits perfectly! I'll take it." },
      { who: "bot", cn: "裤子也要试吗？", en: "Do you want to try the pants too?" },
      { who: "you", cn: "要，也给我试试。", en: "Yes, let me try them too." }
    ]
  },
  {
    title: "鞋店 - Shoe Store",
    level: "HSK 2",
    icon: "fa-shoe-prints",
    words: [
      { cn: "鞋", py: "xié", en: "shoes", tip: "一双鞋 = a pair of shoes" },
      { cn: "双", py: "shuāng", en: "pair (measure word)", tip: "两双鞋 = two pairs of shoes" },
      { cn: "运动鞋", py: "yùndòng xié", en: "sneakers", tip: "运动 (sports) + 鞋" },
      { cn: "皮鞋", py: "píxié", en: "leather shoes", tip: "皮 (leather) + 鞋" },
      { cn: "舒服", py: "shūfu", en: "comfortable", tip: "舒 (comfort) + 服 (satisfied)" },
      { cn: "漂亮", py: "piàoliang", en: "beautiful", tip: "Can describe appearance" }
    ],
    dialogue: [
      { who: "bot", cn: "欢迎来鞋店！你想看什么鞋？", en: "Welcome to the shoe store! What shoes would you like to see?" },
      { who: "you", cn: "我想看看运动鞋。", en: "I want to look at sneakers." },
      { who: "bot", cn: "这双黑色的很漂亮。", en: "This black pair is very nice." },
      { who: "you", cn: "我可以试穿吗？", en: "Can I try them on?" },
      { who: "bot", cn: "当然，这双很舒服。", en: "Of course, this pair is very comfortable." },
      { who: "you", cn: "嗯，很舒服。多少钱？", en: "Hmm, very comfortable. How much?" },
      { who: "bot", cn: "原价三百，现在打折二百。", en: "Original price three hundred, now on sale for two hundred." },
      { who: "you", cn: "好，我买这双。", en: "Okay, I'll buy this pair." }
    ]
  },
  {
    title: "超市购物 - Supermarket Shopping",
    level: "HSK 2",
    icon: "fa-cart-plus",
    words: [
      { cn: "超市", py: "chāoshì", en: "supermarket", tip: "超 (super) + 市 (market)" },
      { cn: "购物", py: "gòuwù", en: "shopping", tip: "购 (purchase) + 物 (goods)" },
      { cn: "东西", py: "dōngxi", en: "things", tip: "Review: 东 + 西" },
      { cn: "需要", py: "xūyào", en: "to need", tip: "需 (require) + 要 (want)" },
      { cn: "牛奶", py: "niúnǎi", en: "milk", tip: "牛 (cow) + 奶 (milk)" },
      { cn: "面包", py: "miànbāo", en: "bread", tip: "面 (flour) + 包 (bun)" }
    ],
    dialogue: [
      { who: "bot", cn: "你要去超市吗？", en: "Are you going to the supermarket?" },
      { who: "you", cn: "是，我需要买一些东西。", en: "Yes, I need to buy some things." },
      { who: "bot", cn: "你要买什么？", en: "What do you want to buy?" },
      { who: "you", cn: "我要买牛奶和面包。", en: "I want to buy milk and bread." },
      { who: "bot", cn: "我也需要牛奶。我们一起吧。", en: "I also need milk. Let's go together." },
      { who: "you", cn: "好的。超市的东西很多。", en: "Okay. The supermarket has many things." },
      { who: "bot", cn: "买完东西，我们回家吧。", en: "After shopping, let's go home." }
    ]
  },
  {
    title: "退货 - Returning Items",
    level: "HSK 2",
    icon: "fa-rotate-left",
    words: [
      { cn: "退", py: "tuì", en: "to return", tip: "退货 = return goods" },
      { cn: "换", py: "huàn", en: "to exchange", tip: "换一个 = change one" },
      { cn: "发票", py: "fāpiào", en: "invoice / receipt", tip: "发 (issue) + 票 (ticket)" },
      { cn: "质量问题", py: "zhìliàng wèntí", en: "quality issue", tip: "质量 (quality) + 问题" },
      { cn: "号", py: "hào", en: "number / size", tip: "多大号 = what size" },
      { cn: "满意", py: "mǎnyì", en: "satisfied", tip: "满 (full) + 意 (idea)" }
    ],
    dialogue: [
      { who: "bot", cn: "你好，这个衣服我想退。", en: "Hello, I want to return this piece of clothing." },
      { who: "you", cn: "为什么？有问题吗？", en: "Why? Is there a problem?" },
      { who: "bot", cn: "号码不对，太大了。", en: "The size is wrong, it's too big." },
      { who: "you", cn: "你有发票吗？", en: "Do you have the receipt?" },
      { who: "bot", cn: "有，在这里。我想换一个小号的。", en: "Yes, here it is. I want to exchange for a small one." },
      { who: "you", cn: "好的，我帮你换。你满意吗？", en: "Okay, I'll help you exchange it. Are you satisfied?" },
      { who: "bot", cn: "很满意，谢谢！", en: "Very satisfied, thank you!" }
    ]
  },

  // ============================
  // HSK 2: Transportation (52-57)
  // ============================
  {
    title: "坐地铁 - Taking the Subway",
    level: "HSK 2",
    icon: "fa-train-subway",
    words: [
      { cn: "地铁", py: "dìtiě", en: "subway", tip: "地 (ground) + 铁 (iron)" },
      { cn: "坐", py: "zuò", en: "to ride / sit", tip: "坐地铁 = take subway" },
      { cn: "站", py: "zhàn", en: "station / stop", tip: "车站 = station" },
      { cn: "换乘", py: "huànchéng", en: "to transfer", tip: "换 (change) + 乘 (ride)" },
      { cn: "出口", py: "chūkǒu", en: "exit", tip: "出 (out) + 口 (mouth)" },
      { cn: "票", py: "piào", en: "ticket", tip: "买票 = buy ticket" }
    ],
    dialogue: [
      { who: "bot", cn: "你坐地铁去学校吗？", en: "Do you take the subway to school?" },
      { who: "you", cn: "是，我每天坐地铁。", en: "Yes, I take the subway every day." },
      { who: "bot", cn: "坐几号线？", en: "Which line do you take?" },
      { who: "you", cn: "一号线，坐五站就到了。", en: "Line one, five stops and I'm there." },
      { who: "bot", cn: "要换乘吗？", en: "Do you need to transfer?" },
      { who: "you", cn: "不用，直接到。出口在A口。", en: "No, it goes directly. Exit is at gate A." },
      { who: "bot", cn: "很方便。地铁票贵吗？", en: "Very convenient. Are subway tickets expensive?" },
      { who: "you", cn: "不贵，四块钱。", en: "Not expensive, four yuan." }
    ]
  },
  {
    title: "公交车上 - On the Bus",
    level: "HSK 2",
    icon: "fa-bus",
    words: [
      { cn: "公交", py: "gōngjiāo", en: "public bus", tip: "公 (public) + 交 (transport)" },
      { cn: "上车", py: "shàng chē", en: "to get on a vehicle", tip: "上 (up) + 车 (car)" },
      { cn: "下车", py: "xià chē", en: "to get off", tip: "请下车 = please get off" },
      { cn: "刷卡", py: "shuā kǎ", en: "to swipe a card", tip: "刷 (swipe) + 卡 (card)" },
      { cn: "座位", py: "zuòwèi", en: "seat", tip: "坐 (sit) + 位 (position)" },
      { cn: "让座", py: "ràng zuò", en: "to offer a seat", tip: "让 (let) + 座 (seat)" }
    ],
    dialogue: [
      { who: "bot", cn: "你坐公交去公司吗？", en: "Do you take the bus to the company?" },
      { who: "you", cn: "有时候坐。今天人多吗？", en: "Sometimes. Is it crowded today?" },
      { who: "bot", cn: "早上很多人，上车要刷卡。", en: "Many people in the morning. You need to swipe your card to board." },
      { who: "you", cn: "有座位吗？", en: "Are there seats?" },
      { who: "bot", cn: "没有了，大家都站着。", en: "None left, everyone is standing." },
      { who: "you", cn: "老人上车了，我们要让座。", en: "An elderly person got on, we need to offer a seat." },
      { who: "bot", cn: "对，应该让座。", en: "Right, we should offer a seat." }
    ]
  },
  {
    title: "骑自行车 - Riding a Bike",
    level: "HSK 2",
    icon: "fa-bicycle",
    words: [
      { cn: "自行车", py: "zìxíngchē", en: "bicycle", tip: "自 (self) + 行 (go) + 车" },
      { cn: "骑车", py: "qí chē", en: "to ride a bike", tip: "骑 (ride) + 车" },
      { cn: "慢", py: "màn", en: "slow", tip: "Antonym: 快 (kuài)" },
      { cn: "快", py: "kuài", en: "fast / quick", tip: "快走 = walk fast" },
      { cn: "方便", py: "fāngbiàn", en: "convenient", tip: "方 (way) + 便 (convenient)" },
      { cn: "安全", py: "ānquán", en: "safe / safety", tip: "安 (peace) + 全 (whole)" }
    ],
    dialogue: [
      { who: "bot", cn: "你会骑自行车吗？", en: "Can you ride a bicycle?" },
      { who: "you", cn: "会，我每天都骑车去学校。", en: "Yes, I ride my bike to school every day." },
      { who: "bot", cn: "骑车很方便，也很快。", en: "Riding a bike is very convenient and fast." },
      { who: "you", cn: "但是要注意安全，不能骑太快。", en: "But you need to be safe, can't ride too fast." },
      { who: "bot", cn: "对，慢一点安全。", en: "Right, slower is safer." },
      { who: "you", cn: "你也喜欢骑车吗？", en: "Do you also like riding a bike?" },
      { who: "bot", cn: "喜欢，周末我们一起骑车吧。", en: "Yes, let's ride bikes together on the weekend." }
    ]
  },
  {
    title: "走路去 - Going on Foot",
    level: "HSK 2",
    icon: "fa-person-walking",
    words: [
      { cn: "走路", py: "zǒu lù", en: "to walk", tip: "走 (walk) + 路 (road)" },
      { cn: "近", py: "jìn", en: "near / close", tip: "很近 = very close" },
      { cn: "远", py: "yuǎn", en: "far", tip: "很远 = very far" },
      { cn: "分钟", py: "fēnzhōng", en: "minute", tip: "分 (minute) + 钟 (clock)" },
      { cn: "过马路", py: "guò mǎlù", en: "to cross the street", tip: "过 (cross) + 马路 (road)" },
      { cn: "红绿灯", py: "hónglǜdēng", en: "traffic light", tip: "红 (red) + 绿 (green) + 灯" }
    ],
    dialogue: [
      { who: "bot", cn: "你家离学校远吗？", en: "Is your home far from school?" },
      { who: "you", cn: "不远，走路十分钟就到了。", en: "Not far, just a ten-minute walk." },
      { who: "bot", cn: "那很方便，不用坐车。", en: "That's convenient, no need to take a vehicle." },
      { who: "you", cn: "是，但过马路要看红绿灯。", en: "Yes, but you need to look at the traffic lights when crossing." },
      { who: "bot", cn: "安全最重要。", en: "Safety is the most important." },
      { who: "you", cn: "对，走路对身体也好。", en: "Right, walking is also good for health." },
      { who: "bot", cn: "我们以后多走路吧。", en: "Let's walk more from now on." }
    ]
  },
  {
    title: "打车 - Taking a Taxi",
    level: "HSK 2",
    icon: "fa-taxi",
    words: [
      { cn: "打车", py: "dǎ chē", en: "to take a taxi", tip: "打 (call) + 车" },
      { cn: "司机", py: "sījī", en: "driver", tip: "司 (manage) + 机 (machine)" },
      { cn: "快", py: "kuài", en: "fast", tip: "比较快 = relatively fast" },
      { cn: "堵车", py: "dǔ chē", en: "traffic jam", tip: "堵 (block) + 车" },
      { cn: "目的地", py: "mùdìdì", en: "destination", tip: "目 (eye) + 的 (target) + 地" },
      { cn: "停车", py: "tíng chē", en: "to park / stop", tip: "停 (stop) + 车" }
    ],
    dialogue: [
      { who: "bot", cn: "我们去机场打车吧。", en: "Let's take a taxi to the airport." },
      { who: "you", cn: "好的，现在路上堵车吗？", en: "Okay, is there a traffic jam on the road now?" },
      { who: "bot", cn: "下午不堵车，打车很快。", en: "No traffic jam in the afternoon, taking a taxi is fast." },
      { who: "you", cn: "那很好。在哪儿打车？", en: "That's good. Where do we get a taxi?" },
      { who: "bot", cn: "在门口打车。司机来了。", en: "At the entrance. Here comes the driver." },
      { who: "you", cn: "司机您好，我们去这个地址。", en: "Hello driver, we're going to this address." },
      { who: "bot", cn: "好的，到了目的地我告诉你。", en: "Okay, I'll tell you when we arrive at the destination." },
      { who: "you", cn: "到了，请停车。谢谢！", en: "We've arrived, please stop. Thank you!" }
    ]
  },
  {
    title: "问路 - Asking Directions",
    level: "HSK 2",
    icon: "fa-signs-post",
    words: [
      { cn: "请问", py: "qǐngwèn", en: "excuse me / may I ask", tip: "请 (please) + 问 (ask)" },
      { cn: "怎么走", py: "zěnme zǒu", en: "how to get there", tip: "怎么 (how) + 走 (go)" },
      { cn: "往", py: "wǎng", en: "toward / in direction of", tip: "往左 = toward left" },
      { cn: "转", py: "zhuǎn", en: "to turn", tip: "转左 = turn left" },
      { cn: "一直", py: "yìzhí", en: "straight / all along", tip: "一直走 = go straight" },
      { cn: "路口", py: "lùkǒu", en: "intersection", tip: "路 (road) + 口 (mouth)" }
    ],
    dialogue: [
      { who: "bot", cn: "请问，去火车站怎么走？", en: "Excuse me, how do I get to the train station?" },
      { who: "you", cn: "一直往前走，到路口往右转。", en: "Go straight ahead, turn right at the intersection." },
      { who: "bot", cn: "往右转，然后呢？", en: "Turn right, and then?" },
      { who: "you", cn: "再走五分钟就到了。", en: "Walk another five minutes and you'll be there." },
      { who: "bot", cn: "远不远？", en: "Is it far?" },
      { who: "you", cn: "不远，走路十分钟。", en: "Not far, a ten-minute walk." },
      { who: "bot", cn: "谢谢你告诉我。", en: "Thank you for telling me." },
      { who: "you", cn: "不客气！", en: "You're welcome!" }
    ]
  },

  // ============================
  // HSK 2: Daily Routine (58-63)
  // ============================
  {
    title: "早上起床 - Morning Routine",
    level: "HSK 2",
    icon: "fa-sunrise",
    words: [
      { cn: "起床", py: "qǐchuáng", en: "to get up", tip: "起 (rise) + 床 (bed)" },
      { cn: "洗澡", py: "xǐ zǎo", en: "to take a shower", tip: "洗 (wash) + 澡 (bath)" },
      { cn: "刷牙", py: "shuā yá", en: "to brush teeth", tip: "刷 (brush) + 牙 (tooth)" },
      { cn: "洗脸", py: "xǐ liǎn", en: "to wash face", tip: "洗 (wash) + 脸 (face)" },
      { cn: "早饭", py: "zǎofàn", en: "breakfast", tip: "早 (morning) + 饭 (meal)" },
      { cn: "准备", py: "zhǔnbèi", en: "to prepare", tip: "准备出门 = prepare to go out" }
    ],
    dialogue: [
      { who: "bot", cn: "你早上几点起床？", en: "What time do you get up in the morning?" },
      { who: "you", cn: "我六点半起床，然后刷牙洗脸。", en: "I get up at 6:30, then brush my teeth and wash my face." },
      { who: "bot", cn: "你洗澡吗？", en: "Do you take a shower?" },
      { who: "you", cn: "早上不洗澡，晚上洗。", en: "I don't shower in the morning, I shower at night." },
      { who: "bot", cn: "吃早饭吗？", en: "Do you eat breakfast?" },
      { who: "you", cn: "吃，我七点吃早饭，然后准备去学校。", en: "Yes, I eat breakfast at 7:00, then prepare to go to school." },
      { who: "bot", cn: "你每天都很规律。", en: "Your daily routine is very regular." }
    ]
  },
  {
    title: "上班 - Going to Work",
    level: "HSK 2",
    icon: "fa-briefcase",
    words: [
      { cn: "上班", py: "shàng bān", en: "to go to work", tip: "上 (go) + 班 (shift)" },
      { cn: "下班", py: "xià bān", en: "to get off work", tip: "下 (descend) + 班" },
      { cn: "工作", py: "gōngzuò", en: "work / job", tip: "Review: 工 + 作" },
      { cn: "公司", py: "gōngsī", en: "company", tip: "公 (public) + 司 (manage)" },
      { cn: "同事", py: "tóngshì", en: "colleague", tip: "同 (same) + 事 (matter)" },
      { cn: "加班", py: "jiā bān", en: "to work overtime", tip: "加 (add) + 班 (shift)" }
    ],
    dialogue: [
      { who: "bot", cn: "你每天几点上班？", en: "What time do you go to work every day?" },
      { who: "you", cn: "我早上八点半上班。", en: "I go to work at 8:30 in the morning." },
      { who: "bot", cn: "你的公司远吗？", en: "Is your company far?" },
      { who: "you", cn: "不太远，坐地铁三十分钟。", en: "Not too far, thirty minutes by subway." },
      { who: "bot", cn: "你和同事关系好吗？", en: "Are your relationships with colleagues good?" },
      { who: "you", cn: "很好，同事们都很友好。", en: "Very good, my colleagues are all very friendly." },
      { who: "bot", cn: "你经常加班吗？", en: "Do you often work overtime?" },
      { who: "you", cn: "不经常，我一般六点下班。", en: "Not often, I usually get off work at 6:00." }
    ]
  },
  {
    title: "晚上 - Evening Time",
    level: "HSK 2",
    icon: "fa-moon",
    words: [
      { cn: "回家", py: "huí jiā", en: "go home", tip: "回 (return) + 家 (home)" },
      { cn: "做饭", py: "zuò fàn", en: "to cook a meal", tip: "做 (make) + 饭 (rice/meal)" },
      { cn: "看电视", py: "kàn diànshì", en: "watch TV", tip: "看 (watch) + 电视 (TV)" },
      { cn: "睡觉", py: "shuìjiào", en: "sleep", tip: "Review: 睡 (sleep) + 觉" },
      { cn: "昨天", py: "zuótiān", en: "yesterday", tip: "Review: 昨 + 天" },
      { cn: "今天", py: "jīntiān", en: "today", tip: "Review: 今 + 天" }
    ],
    dialogue: [
      { who: "bot", cn: "昨天你下班以后做什么？", en: "What did you do after work yesterday?" },
      { who: "you", cn: "我回家以后做饭吃。", en: "I went home and cooked dinner." },
      { who: "bot", cn: "然后呢？", en: "Then what?" },
      { who: "you", cn: "看了一会儿电视，然后洗澡睡觉。", en: "Watched TV for a while, then showered and slept." },
      { who: "bot", cn: "今天早上你几点起床？", en: "What time did you get up this morning?" },
      { who: "you", cn: "今天早上七点起床。", en: "I got up at 7:00 this morning." },
      { who: "bot", cn: "晚上应该早点睡觉。", en: "You should sleep earlier at night." },
      { who: "you", cn: "你说得对。", en: "You're right." }
    ]
  },
  {
    title: "周末安排 - Weekend Schedule",
    level: "HSK 2",
    icon: "fa-calendar-check",
    words: [
      { cn: "周末", py: "zhōumò", en: "weekend", tip: "周 (week) + 末 (end)" },
      { cn: "打算", py: "dǎsuàn", en: "to plan / intend", tip: "打 (make) + 算 (calculate)" },
      { cn: "打扫", py: "dǎsǎo", en: "to clean", tip: "打 (do) + 扫 (sweep)" },
      { cn: "洗衣服", py: "xǐ yīfu", en: "to do laundry", tip: "洗 (wash) + 衣服" },
      { cn: "逛街", py: "guàng jiē", en: "to go shopping", tip: "逛 (stroll) + 街 (street)" },
      { cn: "休息", py: "xiūxi", en: "to rest", tip: "Review: 休 + 息" }
    ],
    dialogue: [
      { who: "bot", cn: "这个周末你打算做什么？", en: "What do you plan to do this weekend?" },
      { who: "you", cn: "星期六上午我要打扫房间。", en: "Saturday morning I need to clean the room." },
      { who: "bot", cn: "下午呢？", en: "What about the afternoon?" },
      { who: "you", cn: "下午洗衣服，然后逛街。", en: "Do laundry in the afternoon, then go shopping." },
      { who: "bot", cn: "星期天呢？", en: "What about Sunday?" },
      { who: "you", cn: "星期天在家休息，看看书。", en: "Rest at home on Sunday, read some books." },
      { who: "bot", cn: "周末安排得很好。", en: "Your weekend plan is very good." },
      { who: "you", cn: "是，周末可以放松一下。", en: "Yes, I can relax on the weekend." }
    ]
  },
  {
    title: "日常习惯 - Daily Habits",
    level: "HSK 2",
    icon: "fa-arrows-rotate",
    words: [
      { cn: "习惯", py: "xíguàn", en: "habit", tip: "习 (practice) + 惯 (accustomed)" },
      { cn: "每天", py: "měitiān", en: "every day", tip: "每 (each) + 天 (day)" },
      { cn: "总是", py: "zǒngshì", en: "always", tip: "总 (always) + 是 (be)" },
      { cn: "有时候", py: "yǒu shíhou", en: "sometimes", tip: "有 + 时候 (time)" },
      { cn: "先", py: "xiān", en: "first / in advance", tip: "先...然后... = first... then..." },
      { cn: "然后", py: "ránhòu", en: "then / after that", tip: "然 (thus) + 后 (after)" }
    ],
    dialogue: [
      { who: "bot", cn: "你有什么好习惯？", en: "What good habits do you have?" },
      { who: "you", cn: "我每天先刷牙洗脸，然后吃早饭。", en: "Every day I first brush my teeth and wash my face, then eat breakfast." },
      { who: "bot", cn: "我总是喝一杯水再吃早饭。", en: "I always drink a glass of water before breakfast." },
      { who: "you", cn: "这是个好习惯！", en: "That's a good habit!" },
      { who: "bot", cn: "有时候我晚上跑步。", en: "Sometimes I run in the evening." },
      { who: "you", cn: "我晚上总是看书，然后睡觉。", en: "I always read at night, then sleep." },
      { who: "bot", cn: "你的习惯也很好。", en: "Your habits are also good." }
    ]
  },
  {
    title: "作息时间 - Daily Schedule",
    level: "HSK 2",
    icon: "fa-clock",
    words: [
      { cn: "时间表", py: "shíjiān biǎo", en: "schedule / timetable", tip: "时间 (time) + 表 (chart)" },
      { cn: "从", py: "cóng", en: "from", tip: "从...到... = from... to..." },
      { cn: "到", py: "dào", en: "to / until", tip: "从八点到五点 = 8 to 5" },
      { cn: "晚", py: "wǎn", en: "late", tip: "今天晚了 = today is late" },
      { cn: "早", py: "zǎo", en: "early", tip: "早一点 = a bit early" },
      { cn: "准时", py: "zhǔnshí", en: "on time / punctual", tip: "准 (accurate) + 时 (time)" }
    ],
    dialogue: [
      { who: "bot", cn: "你的时间表是怎样的？", en: "What is your schedule like?" },
      { who: "you", cn: "我从早上八点到下午五点上班。", en: "I work from 8 AM to 5 PM." },
      { who: "bot", cn: "你早上到公司准时吗？", en: "Do you arrive at the company on time?" },
      { who: "you", cn: "我总是准时到，从来不晚。", en: "I always arrive on time, never late." },
      { who: "bot", cn: "回家以后做什么？", en: "What do you do after going home?" },
      { who: "you", cn: "从六点到八点学习中文。", en: "From 6 to 8 I study Chinese." },
      { who: "bot", cn: "很努力！", en: "Very diligent!" },
      { who: "you", cn: "谢谢，早点学会中文就好了。", en: "Thanks, I hope to learn Chinese early." }
    ]
  },

  // ============================
  // HSK 2: Weather & Nature (64-68)
  // ============================
  {
    title: "下雨天 - Rainy Day",
    level: "HSK 2",
    icon: "fa-cloud-rain",
    words: [
      { cn: "下雨", py: "xià yǔ", en: "to rain", tip: "下 (fall) + 雨 (rain)" },
      { cn: "雨伞", py: "yǔsǎn", en: "umbrella", tip: "雨 (rain) + 伞 (umbrella)" },
      { cn: "刮风", py: "guā fēng", en: "to be windy", tip: "刮 (blow) + 风 (wind)" },
      { cn: "阴天", py: "yīn tiān", en: "overcast sky", tip: "阴 (dark/cloudy) + 天" },
      { cn: "晴天", py: "qíng tiān", en: "sunny day", tip: "晴 (clear/sunny) + 天" },
      { cn: "暖和", py: "nuǎnhuo", en: "warm", tip: "Review: warm weather" }
    ],
    dialogue: [
      { who: "bot", cn: "今天天气怎么样？", en: "How's the weather today?" },
      { who: "you", cn: "今天早上阴天，现在下雨了。", en: "It was overcast this morning, now it's raining." },
      { who: "bot", cn: "你带雨伞了吗？", en: "Did you bring an umbrella?" },
      { who: "you", cn: "带了。明天会刮风吗？", en: "Yes. Will it be windy tomorrow?" },
      { who: "bot", cn: "天气预报说不会，明天是晴天。", en: "Weather forecast says no, tomorrow will be sunny." },
      { who: "you", cn: "那太好了，天气会暖和一点。", en: "That's great, the weather will be warmer." },
      { who: "bot", cn: "晴天我们出去走走吧。", en: "On a sunny day let's go out for a walk." }
    ]
  },
  {
    title: "天气预报 - Weather Forecast",
    level: "HSK 2",
    icon: "fa-tv",
    words: [
      { cn: "预报", py: "yùbào", en: "forecast", tip: "预 (pre) + 报 (report)" },
      { cn: "温度", py: "wēndù", en: "temperature", tip: "温 (warm) + 度 (degree)" },
      { cn: "度", py: "dù", en: "degree", tip: "三十度 = 30 degrees" },
      { cn: "冷", py: "lěng", en: "cold", tip: "今天很冷 = today is cold" },
      { cn: "热", py: "rè", en: "hot", tip: "Review: 热 = hot" },
      { cn: "温暖", py: "wēnnuǎn", en: "warm (pleasant)", tip: "温 (warm) + 暖 (warm)" }
    ],
    dialogue: [
      { who: "bot", cn: "你看天气预报了吗？", en: "Did you watch the weather forecast?" },
      { who: "you", cn: "看了，今天最高温度二十五度。", en: "Yes, today's high is 25 degrees." },
      { who: "bot", cn: "那很温暖，不冷也不热。", en: "That's warm, neither cold nor hot." },
      { who: "you", cn: "明天会冷一点，只有十八度。", en: "Tomorrow will be a bit colder, only 18 degrees." },
      { who: "bot", cn: "要多穿衣服了。", en: "Need to wear more clothes." },
      { who: "you", cn: "对，不能感冒了。", en: "Right, can't catch a cold." }
    ]
  },
  {
    title: "四季变化 - Season Changes",
    level: "HSK 2",
    icon: "fa-tree",
    words: [
      { cn: "春天", py: "chūntiān", en: "spring", tip: "Review: 春 + 天" },
      { cn: "夏天", py: "xiàtiān", en: "summer", tip: "Review: 夏 + 天" },
      { cn: "秋天", py: "qiūtiān", en: "autumn", tip: "Review: 秋 + 天" },
      { cn: "冬天", py: "dōngtiān", en: "winter", tip: "Review: 冬 + 天" },
      { cn: "季节", py: "jìjié", en: "season", tip: "季 (season) + 节 (segment)" },
      { cn: "天气", py: "tiānqì", en: "weather", tip: "Review: 天 + 气" }
    ],
    dialogue: [
      { who: "bot", cn: "你最喜欢哪个季节？", en: "Which season do you like the most?" },
      { who: "you", cn: "我最喜欢秋天，天气很凉快。", en: "I like autumn the most, the weather is cool." },
      { who: "bot", cn: "春天也很好，很暖和。", en: "Spring is also nice, very warm." },
      { who: "you", cn: "夏天太热了，冬天又太冷。", en: "Summer is too hot, and winter is too cold." },
      { who: "bot", cn: "对，但是冬天可以看雪。", en: "True, but in winter you can see snow." },
      { who: "you", cn: "雪很漂亮，不过我还是喜欢秋天。", en: "Snow is beautiful, but I still prefer autumn." },
      { who: "bot", cn: "每个季节都有好处。", en: "Every season has its good points." }
    ]
  },
  {
    title: "雾霾 - Haze",
    level: "HSK 2",
    icon: "fa-smog",
    words: [
      { cn: "雾霾", py: "wùmái", en: "haze / smog", tip: "雾 (fog) + 霾 (haze)" },
      { cn: "空气", py: "kōngqì", en: "air", tip: "空 (empty) + 气 (air)" },
      { cn: "干净", py: "gānjìng", en: "clean", tip: "干 (dry) + 净 (clean)" },
      { cn: "脏", py: "zāng", en: "dirty", tip: "空气很脏 = the air is dirty" },
      { cn: "口罩", py: "kǒuzhào", en: "face mask", tip: "口 (mouth) + 罩 (cover)" },
      { cn: "减少", py: "jiǎnshǎo", en: "to reduce", tip: "减 (subtract) + 少 (few)" }
    ],
    dialogue: [
      { who: "bot", cn: "今天空气不好，有雾霾。", en: "The air is not good today, there's haze." },
      { who: "you", cn: "你戴口罩了吗？", en: "Did you wear a mask?" },
      { who: "bot", cn: "戴了，出门一定要戴口罩。", en: "Yes, I must wear a mask when going out." },
      { who: "you", cn: "雾霾天气要减少外出。", en: "In hazy weather you should reduce going out." },
      { who: "bot", cn: "是，希望空气能干净一点。", en: "Yes, I hope the air can be cleaner." },
      { who: "you", cn: "我们要保护环境。", en: "We need to protect the environment." },
      { who: "bot", cn: "你说得很对。", en: "You're absolutely right." }
    ]
  },
  {
    title: "美好的天气 - Beautiful Weather",
    level: "HSK 2",
    icon: "fa-sun",
    words: [
      { cn: "阳光", py: "yángguāng", en: "sunlight", tip: "阳 (sun) + 光 (light)" },
      { cn: "蓝天", py: "lán tiān", en: "blue sky", tip: "蓝 (blue) + 天 (sky)" },
      { cn: "白云", py: "bái yún", en: "white clouds", tip: "白 (white) + 云 (cloud)" },
      { cn: "风", py: "fēng", en: "wind", tip: "微风 = breeze" },
      { cn: "凉快", py: "liángkuai", en: "cool (weather)", tip: "凉 (cool) + 快 (fast)" },
      { cn: "舒服", py: "shūfu", en: "comfortable", tip: "天气很舒服" }
    ],
    dialogue: [
      { who: "bot", cn: "今天阳光真好，蓝天白云。", en: "The sunlight is really nice today, blue sky and white clouds." },
      { who: "you", cn: "是，还有微风，很舒服。", en: "Yes, there's a gentle breeze too, very comfortable." },
      { who: "bot", cn: "天气很凉快，不冷不热。", en: "The weather is cool, neither cold nor hot." },
      { who: "you", cn: "这样的天气最适合出去玩了。", en: "This weather is perfect for going out." },
      { who: "bot", cn: "我们去公园散步吧。", en: "Let's go for a walk in the park." },
      { who: "you", cn: "好主意！走走对身体好。", en: "Good idea! Walking is good for health." }
    ]
  },

  // ============================
  // HSK 2: Hobbies & Leisure (69-73)
  // ============================
  {
    title: "跑步健身 - Running & Fitness",
    level: "HSK 2",
    icon: "fa-person-running",
    words: [
      { cn: "跑步", py: "pǎo bù", en: "to jog / run", tip: "跑 (run) + 步 (step)" },
      { cn: "健身", py: "jiànshēn", en: "to exercise / fitness", tip: "健 (health) + 身 (body)" },
      { cn: "减肥", py: "jiǎn féi", en: "to lose weight", tip: "减 (reduce) + 肥 (fat)" },
      { cn: "身体", py: "shēntǐ", en: "body / health", tip: "身 (body) + 体 (body)" },
      { cn: "出汗", py: "chū hàn", en: "to sweat", tip: "出 (out) + 汗 (sweat)" },
      { cn: "坚持", py: "jiānchí", en: "to persevere", tip: "坚 (firm) + 持 (hold)" }
    ],
    dialogue: [
      { who: "bot", cn: "你经常跑步吗？", en: "Do you often go running?" },
      { who: "you", cn: "是，我每天早上跑半小时。", en: "Yes, I run for half an hour every morning." },
      { who: "bot", cn: "跑步对身体很好，还可以减肥。", en: "Running is very good for the body, and can help lose weight." },
      { who: "you", cn: "对，每次跑完都出一身汗。", en: "Right, I sweat a lot after each run." },
      { who: "bot", cn: "你坚持了多久了？", en: "How long have you kept it up?" },
      { who: "you", cn: "三个月了。跑步让我很健康。", en: "Three months. Running makes me very healthy." },
      { who: "bot", cn: "真了不起！我也要开始跑。", en: "Amazing! I should start running too." }
    ]
  },
  {
    title: "看电影 - Watching Movies",
    level: "HSK 2",
    icon: "fa-film",
    words: [
      { cn: "电影", py: "diànyǐng", en: "movie / film", tip: "电 (electric) + 影 (shadow)" },
      { cn: "电影院", py: "diànyǐngyuàn", en: "cinema", tip: "电影 + 院 (hall)" },
      { cn: "票", py: "piào", en: "ticket", tip: "电影票 = movie ticket" },
      { cn: "座位", py: "zuòwèi", en: "seat", tip: "选座位 = choose seats" },
      { cn: "喜欢", py: "xǐhuān", en: "to like", tip: "喜欢看电影 = like watching movies" },
      { cn: "好看", py: "hǎokàn", en: "good looking / nice", tip: "电影好看 = the movie is good" }
    ],
    dialogue: [
      { who: "bot", cn: "你喜欢看电影吗？", en: "Do you like watching movies?" },
      { who: "you", cn: "很喜欢！我每周都看电影。", en: "I like it a lot! I watch movies every week." },
      { who: "bot", cn: "我们周末去电影院吧。", en: "Let's go to the cinema on the weekend." },
      { who: "you", cn: "好啊，我想看那个新电影。", en: "Great, I want to see that new movie." },
      { who: "bot", cn: "我已经买好票了，座位很好。", en: "I already bought the tickets, the seats are good." },
      { who: "you", cn: "太好了！听说那个电影很好看。", en: "Great! I heard that movie is very good." },
      { who: "bot", cn: "看完电影我们一起去吃饭。", en: "After the movie, let's go eat together." }
    ]
  },
  {
    title: "跳舞 - Dancing",
    level: "HSK 2",
    icon: "fa-music",
    words: [
      { cn: "跳舞", py: "tiào wǔ", en: "to dance", tip: "跳 (jump) + 舞 (dance)" },
      { cn: "音乐", py: "yīnyuè", en: "music", tip: "跳舞要听音乐" },
      { cn: "喜欢", py: "xǐhuān", en: "to like", tip: "喜欢跳舞 = like dancing" },
      { cn: "快乐", py: "kuàilè", en: "happy / joyful", tip: "跳舞很快乐" },
      { cn: "学习", py: "xuéxí", en: "to learn", tip: "学习跳舞 = learn to dance" },
      { cn: "会", py: "huì", en: "can / know how to", tip: "我会跳舞 = I can dance" }
    ],
    dialogue: [
      { who: "bot", cn: "你会跳舞吗？", en: "Can you dance?" },
      { who: "you", cn: "会一点，我正在学习跳舞。", en: "A little, I'm learning to dance." },
      { who: "bot", cn: "你喜欢什么音乐？", en: "What music do you like?" },
      { who: "you", cn: "我喜欢快节奏的音乐，跳舞很快乐。", en: "I like fast rhythm music, dancing is very happy." },
      { who: "bot", cn: "我也想学习跳舞。", en: "I also want to learn to dance." },
      { who: "you", cn: "我们可以一起去跳舞啊！", en: "We can go dancing together!" },
      { who: "bot", cn: "好，周末一起去！", en: "Good, let's go together on the weekend!" }
    ]
  },
  {
    title: "听音乐 - Listening to Music",
    level: "HSK 2",
    icon: "fa-headphones",
    words: [
      { cn: "流行", py: "liúxíng", en: "popular / trendy", tip: "流 (flow) + 行 (go)" },
      { cn: "歌手", py: "gēshǒu", en: "singer", tip: "歌 (song) + 手 (hand/person)" },
      { cn: "歌词", py: "gēcí", en: "lyrics", tip: "歌 (song) + 词 (word)" },
      { cn: "好听", py: "hǎotīng", en: "pleasant to hear", tip: "这首歌很好听" },
      { cn: "放松", py: "fàngsōng", en: "to relax", tip: "放 (let go) + 松 (loose)" },
      { cn: "心情", py: "xīnqíng", en: "mood / feelings", tip: "心 (heart) + 情 (emotion)" }
    ],
    dialogue: [
      { who: "bot", cn: "你最近在听什么音乐？", en: "What music have you been listening to lately?" },
      { who: "you", cn: "我在听中国流行音乐。", en: "I've been listening to Chinese pop music." },
      { who: "bot", cn: "哪个歌手你最喜欢？", en: "Which singer do you like the most?" },
      { who: "you", cn: "我喜欢周杰伦，他的歌很好听。", en: "I like Jay Chou, his songs are very pleasant." },
      { who: "bot", cn: "你看得懂歌词吗？", en: "Can you understand the lyrics?" },
      { who: "you", cn: "看不太懂，但是听音乐可以放松心情。", en: "Not completely, but listening to music relaxes my mood." },
      { who: "bot", cn: "音乐无国界。", en: "Music has no borders." }
    ]
  },
  {
    title: "周末活动 - Weekend Activities",
    level: "HSK 2",
    icon: "fa-person-hiking",
    words: [
      { cn: "爬山", py: "pá shān", en: "to climb a mountain", tip: "爬 (climb) + 山 (mountain)" },
      { cn: "公园", py: "gōngyuán", en: "park", tip: "去公园散步" },
      { cn: "散步", py: "sàn bù", en: "to take a walk", tip: "散 (scatter) + 步 (step)" },
      { cn: "照相", py: "zhào xiàng", en: "to take a photo", tip: "照 (shine) + 相 (picture)" },
      { cn: "风景", py: "fēngjǐng", en: "scenery / landscape", tip: "风 (wind) + 景 (view)" },
      { cn: "开心", py: "kāixīn", en: "happy / delighted", tip: "开 (open) + 心 (heart)" }
    ],
    dialogue: [
      { who: "bot", cn: "这个周末你想做什么？", en: "What do you want to do this weekend?" },
      { who: "you", cn: "我想去爬山，看看风景。", en: "I want to climb a mountain and see the scenery." },
      { who: "bot", cn: "好主意！山上风景很美。", en: "Good idea! The scenery on the mountain is beautiful." },
      { who: "you", cn: "我们可以照相留念。", en: "We can take photos as souvenirs." },
      { who: "bot", cn: "下午去公园散步怎么样？", en: "How about going for a walk in the park in the afternoon?" },
      { who: "you", cn: "好的，和朋友们一起会很开心。", en: "Okay, it will be very happy with friends." },
      { who: "bot", cn: "周末总是很愉快。", en: "Weekends are always enjoyable." }
    ]
  },

  // ============================
  // HSK 2: Travel & Vacation (74-78)
  // ============================
  {
    title: "预订酒店 - Booking a Hotel",
    level: "HSK 2",
    icon: "fa-hotel",
    words: [
      { cn: "酒店", py: "jiǔdiàn", en: "hotel", tip: "酒 (wine) + 店 (shop)" },
      { cn: "预订", py: "yùdìng", en: "to book / reserve", tip: "预 (advance) + 订 (order)" },
      { cn: "房间", py: "fángjiān", en: "room", tip: "单人间 = single room" },
      { cn: "价格", py: "jiàgé", en: "price", tip: "价 (price) + 格 (standard)" },
      { cn: "晚上", py: "wǎnshang", en: "evening / night", tip: "住几个晚上 = stay how many nights" },
      { cn: "行李", py: "xíngli", en: "luggage", tip: "行 (go) + 李 (plum)" }
    ],
    dialogue: [
      { who: "bot", cn: "你好，我想预订一个房间。", en: "Hello, I'd like to book a room." },
      { who: "you", cn: "好的，您要住几个晚上？", en: "Okay, how many nights will you stay?" },
      { who: "bot", cn: "两个晚上。价格是多少？", en: "Two nights. What's the price?" },
      { who: "you", cn: "一晚三百块，含早餐。", en: "Three hundred yuan per night, including breakfast." },
      { who: "bot", cn: "可以，我先放行李。", en: "Okay, let me drop off my luggage first." },
      { who: "you", cn: "好的，这是您的房间钥匙。", en: "Okay, here is your room key." },
      { who: "bot", cn: "谢谢！", en: "Thank you!" }
    ]
  },
  {
    title: "机票 - Plane Tickets",
    level: "HSK 2",
    icon: "fa-ticket",
    words: [
      { cn: "机票", py: "jīpiào", en: "plane ticket", tip: "机 (plane) + 票 (ticket)" },
      { cn: "飞机", py: "fēijī", en: "airplane", tip: "飞 (fly) + 机 (machine)" },
      { cn: "机场", py: "jīchǎng", en: "airport", tip: "飞 (fly) + 场 (field)" },
      { cn: "护照", py: "hùzhào", en: "passport", tip: "护 (protect) + 照 (certificate)" },
      { cn: "价格", py: "jiàgé", en: "price", tip: "机票价格 = ticket price" },
      { cn: "打折", py: "dǎzhé", en: "to discount", tip: "打折机票 = discounted ticket" }
    ],
    dialogue: [
      { who: "bot", cn: "请问，去北京的机票多少钱？", en: "Excuse me, how much is a ticket to Beijing?" },
      { who: "you", cn: "经济舱八百块，商务舱一千五。", en: "Economy class eight hundred, business class fifteen hundred." },
      { who: "bot", cn: "有打折的机票吗？", en: "Are there any discounted tickets?" },
      { who: "you", cn: "有，下周二的有打折。", en: "Yes, next Tuesday's tickets are discounted." },
      { who: "bot", cn: "我要一张。这是我的护照。", en: "I'll take one. Here is my passport." },
      { who: "you", cn: "好的，请确认您的信息。", en: "Okay, please confirm your information." },
      { who: "bot", cn: "没问题，谢谢！", en: "No problem, thanks!" }
    ]
  },
  {
    title: "旅游计划 - Travel Plans",
    level: "HSK 2",
    icon: "fa-map",
    words: [
      { cn: "旅游", py: "lǚyóu", en: "to travel", tip: "旅 (journey) + 游 (travel)" },
      { cn: "计划", py: "jìhuà", en: "plan", tip: "计 (calculate) + 划 (plan)" },
      { cn: "地方", py: "dìfang", en: "place", tip: "好地方 = good place" },
      { cn: "好玩", py: "hǎowán", en: "fun", tip: "好玩的地方 = fun place" },
      { cn: "记得", py: "jìde", en: "to remember", tip: "记 (record) + 得 (get)" },
      { cn: "照相", py: "zhào xiàng", en: "take photos", tip: "旅行一定要照相" }
    ],
    dialogue: [
      { who: "bot", cn: "暑假你打算去哪里旅游？", en: "Where do you plan to travel for summer vacation?" },
      { who: "you", cn: "我想去西安，那是一个好地方。", en: "I want to go to Xi'an, it's a great place." },
      { who: "bot", cn: "西安很好玩，有很多历史景点。", en: "Xi'an is very fun, there are many historical sites." },
      { who: "you", cn: "对，我计划去五天。", en: "Yes, I plan to go for five days." },
      { who: "bot", cn: "记得多照相！", en: "Remember to take lots of photos!" },
      { who: "you", cn: "一定！你去过西安吗？", en: "Definitely! Have you been to Xi'an?" },
      { who: "bot", cn: "去过，非常值得去。", en: "Yes, it's very worth visiting." }
    ]
  },
  {
    title: "在机场 - At the Airport",
    level: "HSK 2",
    icon: "fa-plane-departure",
    words: [
      { cn: "登机", py: "dēng jī", en: "to board a plane", tip: "登 (climb) + 机 (plane)" },
      { cn: "安检", py: "ānjiǎn", en: "security check", tip: "安 (safe) + 检 (check)" },
      { cn: "托运", py: "tuōyùn", en: "to check in luggage", tip: "托 (trust) + 运 (transport)" },
      { cn: "航班", py: "hángbān", en: "flight number", tip: "航 (navigate) + 班 (shift)" },
      { cn: "登机口", py: "dēngjī kǒu", en: "boarding gate", tip: "登机 + 口 (gate)" },
      { cn: "准时", py: "zhǔnshí", en: "on time", tip: "飞机会准时起飞吗？" }
    ],
    dialogue: [
      { who: "bot", cn: "你好，我要办理登机。", en: "Hello, I need to check in." },
      { who: "you", cn: "请给我您的护照和行李。", en: "Please give me your passport and luggage." },
      { who: "bot", cn: "这件行李要托运吗？", en: "Does this luggage need to be checked?" },
      { who: "you", cn: "是的，请放在这里。你的航班是CA1234。", en: "Yes, please put it here. Your flight is CA1234." },
      { who: "bot", cn: "登机口是哪个？", en: "Which is the boarding gate?" },
      { who: "you", cn: "登机口是12号，请准时登机。", en: "Boarding gate is 12, please board on time." },
      { who: "bot", cn: "谢谢！", en: "Thank you!" }
    ]
  },
  {
    title: "度假 - On Vacation",
    level: "HSK 2",
    icon: "fa-umbrella-beach",
    words: [
      { cn: "度假", py: "dù jià", en: "to go on vacation", tip: "度 (pass time) + 假 (holiday)" },
      { cn: "海边", py: "hǎi biān", en: "seaside / beach", tip: "海 (sea) + 边 (edge)" },
      { cn: "游泳", py: "yóu yǒng", en: "to swim", tip: "在海边游泳 = swim at the beach" },
      { cn: "太阳", py: "tàiyáng", en: "sun", tip: "太 (big) + 阳 (sun)" },
      { cn: "快乐", py: "kuàilè", en: "happy", tip: "度假很快乐 = vacation is happy" },
      { cn: "放松", py: "fàngsōng", en: "to relax", tip: "放 (let go) + 松 (loose)" }
    ],
    dialogue: [
      { who: "bot", cn: "你去哪里度假？", en: "Where are you going on vacation?" },
      { who: "you", cn: "我去海边度假。", en: "I'm going to the beach for vacation." },
      { who: "bot", cn: "太棒了！你可以在海边游泳。", en: "Awesome! You can swim at the beach." },
      { who: "you", cn: "是，还可以晒晒太阳，放松一下。", en: "Yes, I can also sunbathe and relax." },
      { who: "bot", cn: "度假让你快乐吗？", en: "Does vacation make you happy?" },
      { who: "you", cn: "当然，每个人都喜欢度假。", en: "Of course, everyone likes vacations." },
      { who: "bot", cn: "好好享受你的假期！", en: "Enjoy your holiday!" }
    ]
  },

  // ============================
  // HSK 2: Body & Health (79-83)
  // ============================
  {
    title: "身体不舒服 - Feeling Unwell",
    level: "HSK 2",
    icon: "fa-face-frown",
    words: [
      { cn: "身体", py: "shēntǐ", en: "body / health", tip: "身 (body) + 体 (body)" },
      { cn: "生病", py: "shēng bìng", en: "to get sick", tip: "生 (produce) + 病 (sickness)" },
      { cn: "头疼", py: "tóu téng", en: "headache", tip: "头 (head) + 疼 (pain)" },
      { cn: "感冒", py: "gǎnmào", en: "to catch a cold", tip: "感 (feel) + 冒 (risk)" },
      { cn: "药", py: "yào", en: "medicine", tip: "吃药 = take medicine" },
      { cn: "休息", py: "xiūxi", en: "to rest", tip: "多休息 = rest more" }
    ],
    dialogue: [
      { who: "bot", cn: "你怎么了？脸色不太好。", en: "What's wrong? Your face doesn't look good." },
      { who: "you", cn: "我身体不舒服，头疼。", en: "I feel unwell, I have a headache." },
      { who: "bot", cn: "是不是感冒了？", en: "Did you catch a cold?" },
      { who: "you", cn: "可能是，我昨晚没睡好。", en: "Maybe, I didn't sleep well last night." },
      { who: "bot", cn: "你应该吃药，多休息。", en: "You should take medicine and rest more." },
      { who: "you", cn: "好的，谢谢你的关心。", en: "Okay, thank you for your concern." },
      { who: "bot", cn: "不客气，希望你快点好起来。", en: "You're welcome, hope you get better soon." }
    ]
  },
  {
    title: "看医生 - Seeing a Doctor",
    level: "HSK 2",
    icon: "fa-stethoscope",
    words: [
      { cn: "医生", py: "yīshēng", en: "doctor", tip: "医 (medical) + 生 (person)" },
      { cn: "医院", py: "yīyuàn", en: "hospital", tip: "去医院看病" },
      { cn: "看病", py: "kàn bìng", en: "to see a doctor", tip: "看 (see) + 病 (sickness)" },
      { cn: "发烧", py: "fā shāo", en: "to have a fever", tip: "发 (emit) + 烧 (burn)" },
      { cn: "打针", py: "dǎ zhēn", en: "to get an injection", tip: "打 (hit) + 针 (needle)" },
      { cn: "检查", py: "jiǎnchá", en: "to examine", tip: "检 (check) + 查 (inspect)" }
    ],
    dialogue: [
      { who: "bot", cn: "医生，我身体不舒服。", en: "Doctor, I feel unwell." },
      { who: "you", cn: "你哪里不舒服？", en: "Where do you feel uncomfortable?" },
      { who: "bot", cn: "我头疼，还有点发烧。", en: "I have a headache and a bit of a fever." },
      { who: "you", cn: "让我检查一下，你感冒了。", en: "Let me check, you have a cold." },
      { who: "bot", cn: "需要打针吗？", en: "Do I need an injection?" },
      { who: "you", cn: "不用，吃几天药就好了。", en: "No, just take medicine for a few days." },
      { who: "bot", cn: "好的，谢谢医生。", en: "Okay, thank you doctor." }
    ]
  },
  {
    title: "运动健康 - Exercise & Health",
    level: "HSK 2",
    icon: "fa-heart-pulse",
    words: [
      { cn: "健康", py: "jiànkāng", en: "health / healthy", tip: "健 (strong) + 康 (peace)" },
      { cn: "运动", py: "yùndòng", en: "exercise / sports", tip: "多运动 = exercise more" },
      { cn: "早睡早起", py: "zǎo shuì zǎo qǐ", en: "early to bed, early to rise", tip: "Common health advice" },
      { cn: "重要", py: "zhòngyào", en: "important", tip: "重 (heavy) + 要 (vital)" },
      { cn: "水果", py: "shuǐguǒ", en: "fruit", tip: "多吃水果 = eat more fruit" },
      { cn: "蔬菜", py: "shūcài", en: "vegetables", tip: "蔬 (vegetable) + 菜 (dish)" }
    ],
    dialogue: [
      { who: "bot", cn: "怎样才能保持健康？", en: "How can we stay healthy?" },
      { who: "you", cn: "要多运动，吃水果和蔬菜。", en: "Exercise more, eat fruits and vegetables." },
      { who: "bot", cn: "早睡早起也很重要。", en: "Early to bed and early to rise is also important." },
      { who: "you", cn: "对，每天运动一小时对身体好。", en: "Right, exercising one hour a day is good for the body." },
      { who: "bot", cn: "你每天运动吗？", en: "Do you exercise every day?" },
      { who: "you", cn: "我每天跑步，周末去游泳。", en: "I run every day and swim on weekends." },
      { who: "bot", cn: "你的习惯真健康！", en: "Your habits are really healthy!" }
    ]
  },
  {
    title: "牙疼 - Toothache",
    level: "HSK 2",
    icon: "fa-tooth",
    words: [
      { cn: "牙疼", py: "yá téng", en: "toothache", tip: "牙 (tooth) + 疼 (pain)" },
      { cn: "牙医", py: "yáyī", en: "dentist", tip: "牙 (tooth) + 医 (doctor)" },
      { cn: "刷牙", py: "shuā yá", en: "to brush teeth", tip: "每天刷牙 = brush daily" },
      { cn: "疼", py: "téng", en: "painful / sore", tip: "很疼 = very painful" },
      { cn: "检查", py: "jiǎnchá", en: "to check / examine", tip: "检查牙齿 = check teeth" },
      { cn: "注意", py: "zhùyì", en: "to pay attention", tip: "注意健康 = pay attention to health" }
    ],
    dialogue: [
      { who: "bot", cn: "我的牙很疼，怎么办？", en: "My tooth is very painful, what should I do?" },
      { who: "you", cn: "你应该去看牙医。", en: "You should see a dentist." },
      { who: "bot", cn: "我害怕看牙医。", en: "I'm afraid of seeing the dentist." },
      { who: "you", cn: "不要怕，牙医会帮你检查。", en: "Don't be afraid, the dentist will examine you." },
      { who: "bot", cn: "以后我要注意刷牙。", en: "From now on I need to pay attention to brushing." },
      { who: "you", cn: "对，每天刷牙两次很重要。", en: "Right, brushing twice a day is important." },
      { who: "bot", cn: "你说得对，我现在就去医院。", en: "You're right, I'll go to the hospital now." }
    ]
  },
  {
    title: "在医院 - At the Hospital",
    level: "HSK 2",
    icon: "fa-hospital",
    words: [
      { cn: "住院", py: "zhù yuàn", en: "to be hospitalized", tip: "住 (stay) + 院 (institution)" },
      { cn: "病人", py: "bìngrén", en: "patient", tip: "病 (sick) + 人 (person)" },
      { cn: "护士", py: "hùshi", en: "nurse", tip: "护 (protect) + 士 (professional)" },
      { cn: "体温", py: "tǐwēn", en: "body temperature", tip: "体 (body) + 温 (warm)" },
      { cn: "手术", py: "shǒushù", en: "surgery", tip: "手 (hand) + 术 (technique)" },
      { cn: "恢复", py: "huīfù", en: "to recover", tip: "恢 (restore) + 复 (again)" }
    ],
    dialogue: [
      { who: "bot", cn: "护士，我什么时候可以出院？", en: "Nurse, when can I be discharged?" },
      { who: "you", cn: "你的体温正常了，明天可以出院。", en: "Your temperature is normal, you can be discharged tomorrow." },
      { who: "bot", cn: "太好了！我很想回家。", en: "Great! I really want to go home." },
      { who: "you", cn: "回家后要注意休息，慢慢恢复。", en: "After going home, pay attention to rest and recover slowly." },
      { who: "bot", cn: "谢谢你，护士。", en: "Thank you, nurse." },
      { who: "you", cn: "不客气，祝你健康！", en: "You're welcome, wish you health!" }
    ]
  },

  // ============================
  // HSK 2: Work & Study (84-88)
  // ============================
  {
    title: "考试 - Exams",
    level: "HSK 2",
    icon: "fa-file-lines",
    words: [
      { cn: "考试", py: "kǎoshì", en: "exam / test", tip: "考 (test) + 试 (try)" },
      { cn: "成绩", py: "chéngjì", en: "grade / result", tip: "成 (achieve) + 绩 (merit)" },
      { cn: "复习", py: "fùxí", en: "to review", tip: "复 (again) + 习 (study)" },
      { cn: "准备", py: "zhǔnbèi", en: "to prepare", tip: "准备考试 = prepare for exams" },
      { cn: "紧张", py: "jǐnzhāng", en: "nervous / tense", tip: "紧 (tight) + 张 (stretch)" },
      { cn: "通过", py: "tōngguò", en: "to pass", tip: "通过考试 = pass the exam" }
    ],
    dialogue: [
      { who: "bot", cn: "下个星期有考试，你准备好了吗？", en: "There's an exam next week, are you prepared?" },
      { who: "you", cn: "我还在复习，有点紧张。", en: "I'm still reviewing, a bit nervous." },
      { who: "bot", cn: "别紧张，你平时学得很好。", en: "Don't be nervous, you usually study well." },
      { who: "you", cn: "希望我能通过考试。", en: "I hope I can pass the exam." },
      { who: "bot", cn: "我们一起复习吧。", en: "Let's review together." },
      { who: "you", cn: "好的，两个人的力量大。", en: "Okay, two people are stronger." },
      { who: "bot", cn: "加油！你一定能考出好成绩。", en: "Keep it up! You'll definitely get good results." }
    ]
  },
  {
    title: "办公室 - In the Office",
    level: "HSK 2",
    icon: "fa-building",
    words: [
      { cn: "办公室", py: "bàngōngshì", en: "office", tip: "办 (do) + 公 (public) + 室 (room)" },
      { cn: "电脑", py: "diànnǎo", en: "computer", tip: "电 (electric) + 脑 (brain)" },
      { cn: "上网", py: "shàng wǎng", en: "to go online", tip: "上 (go) + 网 (net)" },
      { cn: "文件", py: "wénjiàn", en: "document / file", tip: "文 (text) + 件 (item)" },
      { cn: "打印", py: "dǎyìn", en: "to print", tip: "打 (hit) + 印 (stamp)" },
      { cn: "开会", py: "kāi huì", en: "to have a meeting", tip: "开 (open) + 会 (meeting)" }
    ],
    dialogue: [
      { who: "bot", cn: "你今天在办公室做什么？", en: "What are you doing in the office today?" },
      { who: "you", cn: "我用电脑上网查资料。", en: "I'm using the computer to look up information online." },
      { who: "bot", cn: "下午两点要开会，你记得吗？", en: "There's a meeting at 2 PM, do you remember?" },
      { who: "you", cn: "记得，我已经准备好了文件。", en: "Yes, I've already prepared the documents." },
      { who: "bot", cn: "请帮我打印一份。", en: "Please print a copy for me." },
      { who: "you", cn: "好的，马上打印。", en: "Okay, I'll print it right away." },
      { who: "bot", cn: "谢谢你的帮助。", en: "Thanks for your help." }
    ]
  },
  {
    title: "学英语 - Learning English",
    level: "HSK 2",
    icon: "fa-language",
    words: [
      { cn: "英语", py: "Yīngyǔ", en: "English", tip: "英 (England) + 语 (language)" },
      { cn: "单词", py: "dāncí", en: "word / vocabulary", tip: "单 (single) + 词 (word)" },
      { cn: "语法", py: "yǔfǎ", en: "grammar", tip: "语 (language) + 法 (method)" },
      { cn: "口语", py: "kǒuyǔ", en: "spoken language", tip: "口 (mouth) + 语 (language)" },
      { cn: "听力", py: "tīnglì", en: "listening comprehension", tip: "听 (listen) + 力 (ability)" },
      { cn: "进步", py: "jìnbù", en: "to progress / improve", tip: "进 (advance) + 步 (step)" }
    ],
    dialogue: [
      { who: "bot", cn: "你最近在学英语吗？", en: "Have you been learning English lately?" },
      { who: "you", cn: "是，我在背单词和学语法。", en: "Yes, I'm memorizing words and studying grammar." },
      { who: "bot", cn: "你的口语怎么样？", en: "How is your spoken English?" },
      { who: "you", cn: "口语还不太好，要多练习。", en: "It's not very good yet, I need to practice more." },
      { who: "bot", cn: "多听多说就会进步。", en: "Listen and speak more, and you'll improve." },
      { who: "you", cn: "对，我每天听英语广播。", en: "Right, I listen to English broadcasts every day." },
      { who: "bot", cn: "继续加油！", en: "Keep it up!" }
    ]
  },
  {
    title: "找工作 - Job Hunting",
    level: "HSK 2",
    icon: "fa-file-pen",
    words: [
      { cn: "工作", py: "gōngzuò", en: "job / work", tip: "找工作 = look for a job" },
      { cn: "简历", py: "jiǎnlì", en: "resume / CV", tip: "简 (simple) + 历 (history)" },
      { cn: "面试", py: "miànshì", en: "interview", tip: "面 (face) + 试 (test)" },
      { cn: "机会", py: "jīhuì", en: "opportunity", tip: "机 (opportunity) + 会 (chance)" },
      { cn: "工资", py: "gōngzī", en: "salary / wages", tip: "工 (work) + 资 (money)" },
      { cn: "合适", py: "héshì", en: "suitable", tip: "合适的工作 = suitable job" }
    ],
    dialogue: [
      { who: "bot", cn: "你找到工作了吗？", en: "Have you found a job?" },
      { who: "you", cn: "还在找，我已经发了很多简历。", en: "Still looking, I've sent out many resumes." },
      { who: "bot", cn: "有面试机会吗？", en: "Any interview opportunities?" },
      { who: "you", cn: "有一家公司让我去面试。", en: "One company asked me to interview." },
      { who: "bot", cn: "那很好！祝你成功！", en: "That's great! Wish you success!" },
      { who: "you", cn: "谢谢，希望工资也合适。", en: "Thanks, I hope the salary is suitable too." },
      { who: "bot", cn: "合适的工作很重要。", en: "A suitable job is very important." }
    ]
  },
  {
    title: "上网学习 - Learning Online",
    level: "HSK 2",
    icon: "fa-laptop",
    words: [
      { cn: "上网", py: "shàng wǎng", en: "to go online", tip: "上网学习 = learn online" },
      { cn: "网站", py: "wǎngzhàn", en: "website", tip: "网 (net) + 站 (station)" },
      { cn: "搜索", py: "sōusuǒ", en: "to search", tip: "搜 (search) + 索 (seek)" },
      { cn: "资料", py: "zīliào", en: "materials / data", tip: "资 (resource) + 料 (material)" },
      { cn: "下载", py: "xiàzài", en: "to download", tip: "下 (down) + 载 (load)" },
      { cn: "视频", py: "shìpín", en: "video", tip: "视 (vision) + 频 (frequency)" }
    ],
    dialogue: [
      { who: "bot", cn: "你喜欢上网学习吗？", en: "Do you like learning online?" },
      { who: "you", cn: "喜欢，在网上可以找到很多资料。", en: "Yes, I can find a lot of materials online." },
      { who: "bot", cn: "你用什么网站学习？", en: "What websites do you use to study?" },
      { who: "you", cn: "我用视频网站看学习视频，很方便。", en: "I use video sites to watch educational videos, very convenient." },
      { who: "bot", cn: "你可以下载资料慢慢看。", en: "You can download materials and study slowly." },
      { who: "you", cn: "对，上网学习节省时间。", en: "Right, learning online saves time." },
      { who: "bot", cn: "网络真是个好东西。", en: "The internet is really great." }
    ]
  },

  // ============================
  // HSK 2: Relationships (89-92)
  // ============================
  {
    title: "好朋友 - Good Friends",
    level: "HSK 2",
    icon: "fa-user-friends",
    words: [
      { cn: "友谊", py: "yǒuyì", en: "friendship", tip: "友 (friend) + 谊 (friendship)" },
      { cn: "互相", py: "hùxiāng", en: "mutually / each other", tip: "互 (mutual) + 相 (each)" },
      { cn: "了解", py: "liǎojiě", en: "to understand / know", tip: "了 (finish) + 解 (untie)" },
      { cn: "信任", py: "xìnrèn", en: "to trust", tip: "信 (believe) + 任 (rely)" },
      { cn: "帮助", py: "bāngzhù", en: "to help", tip: "朋友之间要互相帮助" },
      { cn: "分享", py: "fēnxiǎng", en: "to share", tip: "分 (divide) + 享 (enjoy)" }
    ],
    dialogue: [
      { who: "bot", cn: "真正的朋友很重要。", en: "True friends are very important." },
      { who: "you", cn: "对，好朋友要互相了解和信任。", en: "Yes, good friends need to understand and trust each other." },
      { who: "bot", cn: "你和你的好朋友认识多久了？", en: "How long have you known your good friend?" },
      { who: "you", cn: "我们认识五年了，经常互相帮助。", en: "We've known each other for five years, often help each other." },
      { who: "bot", cn: "你们会分享快乐和困难吗？", en: "Do you share happiness and difficulties?" },
      { who: "you", cn: "当然，好朋友就是一起分享一切。", en: "Of course, good friends share everything together." },
      { who: "bot", cn: "我要珍惜我的好朋友。", en: "I should cherish my good friends." }
    ]
  },
  {
    title: "邻居 - Neighbors",
    level: "HSK 2",
    icon: "fa-door-open",
    words: [
      { cn: "邻居", py: "línjū", en: "neighbor", tip: "邻 (adjacent) + 居 (reside)" },
      { cn: "客气", py: "kèqì", en: "polite / courteous", tip: "别客气 = don't be polite" },
      { cn: "帮助", py: "bāngzhù", en: "to help", tip: "邻居互相帮助" },
      { cn: "见面", py: "jiàn miàn", en: "to meet", tip: "见 (see) + 面 (face)" },
      { cn: "打招呼", py: "dǎ zhāohu", en: "to greet", tip: "打 (do) + 招呼 (greet)" },
      { cn: "关系", py: "guānxì", en: "relationship", tip: "关 (relation) + 系 (system)" }
    ],
    dialogue: [
      { who: "bot", cn: "你的邻居怎么样？", en: "How are your neighbors?" },
      { who: "you", cn: "他们很客气，也很有礼貌。", en: "They are very polite and courteous." },
      { who: "bot", cn: "你们经常见面吗？", en: "Do you often see each other?" },
      { who: "you", cn: "每天见面都会打招呼。", en: "We greet each other whenever we meet." },
      { who: "bot", cn: "邻居之间应该互相帮助。", en: "Neighbors should help each other." },
      { who: "you", cn: "是的，上周他们还帮了我一个忙。", en: "Yes, last week they helped me out." },
      { who: "bot", cn: "好的邻居关系让人开心。", en: "Good neighbor relationships make people happy." }
    ]
  },
  {
    title: "同学聚会 - Class Reunion",
    level: "HSK 2",
    icon: "fa-people-group",
    words: [
      { cn: "同学", py: "tóngxué", en: "classmate", tip: "同 (same) + 学 (study)" },
      { cn: "聚会", py: "jùhuì", en: "gathering / party", tip: "聚 (assemble) + 会 (meet)" },
      { cn: "聊天", py: "liáo tiān", en: "to chat", tip: "聊 (chat) + 天 (day)" },
      { cn: "回忆", py: "huíyì", en: "to recall / memory", tip: "回 (return) + 忆 (remember)" },
      { cn: "高兴", py: "gāoxìng", en: "happy", tip: "见到老同学很高兴" },
      { cn: "变化", py: "biànhuà", en: "change", tip: "变 (change) + 化 (transform)" }
    ],
    dialogue: [
      { who: "bot", cn: "这周末有同学聚会，你去吗？", en: "There's a class reunion this weekend, are you going?" },
      { who: "you", cn: "去！我很想见见老同学。", en: "Yes! I really want to see old classmates." },
      { who: "bot", cn: "我们可以一起聊天，回忆以前的事。", en: "We can chat together and remember old times." },
      { who: "you", cn: "不知道大家有什么变化。", en: "I wonder how everyone has changed." },
      { who: "bot", cn: "见面就知道了。一定很高兴。", en: "We'll know when we meet. It'll be very happy." },
      { who: "you", cn: "对，我很期待！", en: "Right, I'm really looking forward to it!" }
    ]
  },
  {
    title: "互相帮助 - Helping Each Other",
    level: "HSK 2",
    icon: "fa-hand-holding-heart",
    words: [
      { cn: "帮助", py: "bāngzhù", en: "to help", tip: "需要帮助 = need help" },
      { cn: "困难", py: "kùnnán", en: "difficulty", tip: "困 (difficult) + 难 (hard)" },
      { cn: "主动", py: "zhǔdòng", en: "initiative / active", tip: "主 (main) + 动 (move)" },
      { cn: "关心", py: "guānxīn", en: "to care about", tip: "关 (concern) + 心 (heart)" },
      { cn: "感动", py: "gǎndòng", en: "to be moved / touched", tip: "感 (feel) + 动 (move)" },
      { cn: "谢谢", py: "xièxie", en: "thank you", tip: "Always say 谢谢" }
    ],
    dialogue: [
      { who: "bot", cn: "在生活中，互相帮助很重要。", en: "In life, helping each other is important." },
      { who: "you", cn: "对，遇到困难时，朋友会主动帮忙。", en: "Yes, when encountering difficulties, friends take the initiative." },
      { who: "bot", cn: "上次我搬家，朋友都来帮忙了。", en: "Last time I moved, all my friends came to help." },
      { who: "you", cn: "他们真的很关心你。", en: "They really care about you." },
      { who: "bot", cn: "是，我很感动，也很感谢他们。", en: "Yes, I was very touched and grateful." },
      { who: "you", cn: "下次他们需要帮助，你也会帮忙的。", en: "Next time they need help, you'll help too." },
      { who: "bot", cn: "当然！互相帮助让世界更美好。", en: "Of course! Helping each other makes the world better." }
    ]
  },

  // ============================
  // HSK 2: Location & Description (93-95)
  // ============================
  {
    title: "在哪里 - Where Is It",
    level: "HSK 2",
    icon: "fa-location-crosshairs",
    words: [
      { cn: "旁边", py: "pángbiān", en: "beside / next to", tip: "旁边 = next to" },
      { cn: "对面", py: "duìmiàn", en: "opposite / across", tip: "对 (opposite) + 面 (side)" },
      { cn: "中间", py: "zhōngjiān", en: "middle / between", tip: "中 (middle) + 间 (between)" },
      { cn: "附近", py: "fùjìn", en: "nearby", tip: "附 (attach) + 近 (close)" },
      { cn: "左边", py: "zuǒbiān", en: "left side", tip: "左 (left) + 边 (side)" },
      { cn: "右边", py: "yòubiān", en: "right side", tip: "右 (right) + 边 (side)" }
    ],
    dialogue: [
      { who: "bot", cn: "请问，银行在哪里？", en: "Excuse me, where is the bank?" },
      { who: "you", cn: "银行在医院的旁边。", en: "The bank is next to the hospital." },
      { who: "bot", cn: "超市呢？", en: "What about the supermarket?" },
      { who: "you", cn: "超市在学校的对面。", en: "The supermarket is opposite the school." },
      { who: "bot", cn: "邮局在中间吗？", en: "Is the post office in the middle?" },
      { who: "you", cn: "是的，邮局在学校和超市中间。", en: "Yes, the post office is between the school and the supermarket." },
      { who: "bot", cn: "谢谢你，我现在知道了。", en: "Thank you, I know now." }
    ]
  },
  {
    title: "漂亮的地方 - Beautiful Places",
    level: "HSK 2",
    icon: "fa-image",
    words: [
      { cn: "漂亮", py: "piàoliang", en: "beautiful", tip: "漂亮的风景 = beautiful scenery" },
      { cn: "干净", py: "gānjìng", en: "clean", tip: "干 (dry) + 净 (clean)" },
      { cn: "安静", py: "ānjìng", en: "quiet", tip: "安 (peace) + 静 (still)" },
      { cn: "热闹", py: "rènao", en: "lively / bustling", tip: "热 (hot) + 闹 (noisy)" },
      { cn: "城市", py: "chéngshì", en: "city", tip: "城 (city) + 市 (market)" },
      { cn: "乡村", py: "xiāngcūn", en: "countryside / village", tip: "乡 (rural) + 村 (village)" }
    ],
    dialogue: [
      { who: "bot", cn: "你喜欢城市还是乡村？", en: "Do you like the city or the countryside?" },
      { who: "you", cn: "我喜欢乡村，那里很安静也很干净。", en: "I like the countryside, it's quiet and clean there." },
      { who: "bot", cn: "城市很热闹，也很漂亮。", en: "The city is very lively and also beautiful." },
      { who: "you", cn: "对，但是城市太吵了。", en: "True, but the city is too noisy." },
      { who: "bot", cn: "各有各的好处。", en: "Each has its benefits." },
      { who: "you", cn: "是啊，只要住得舒服就好。", en: "Yes, as long as it's comfortable to live in." }
    ]
  },
  {
    title: "描述东西 - Describing Things",
    level: "HSK 2",
    icon: "fa-eye",
    words: [
      { cn: "大", py: "dà", en: "big / large", tip: "很大 = very big" },
      { cn: "小", py: "xiǎo", en: "small / little", tip: "很小 = very small" },
      { cn: "长", py: "cháng", en: "long", tip: "很长 = very long" },
      { cn: "短", py: "duǎn", en: "short", tip: "很短 = very short" },
      { cn: "新", py: "xīn", en: "new", tip: "新衣服 = new clothes" },
      { cn: "旧", py: "jiù", en: "old / used", tip: "旧书 = used book" }
    ],
    dialogue: [
      { who: "bot", cn: "你的新手机怎么样？", en: "How is your new phone?" },
      { who: "you", cn: "屏幕很大，但是机身很小。", en: "The screen is very big, but the body is very small." },
      { who: "bot", cn: "我的手机旧了，也想换新的。", en: "My phone is old, I want to change to a new one too." },
      { who: "you", cn: "这款有长电池寿命，很好用。", en: "This model has long battery life, it's good to use." },
      { who: "bot", cn: "价格贵吗？", en: "Is it expensive?" },
      { who: "you", cn: "不贵，而且款式很新。", en: "Not expensive, and the design is very new." },
      { who: "bot", cn: "那我也去买一个。", en: "Then I'll go buy one too." }
    ]
  },

  // ============================
  // HSK 3: Work & Career (96-101)
  // ============================
  {
    title: "找新工作 - Finding a New Job",
    level: "HSK 3",
    icon: "fa-briefcase",
    words: [
      { cn: "经理", py: "jīnglǐ", en: "manager", tip: "经 (manage) + 理 (handle)" },
      { cn: "同事", py: "tóngshì", en: "colleague", tip: "同 (same) + 事 (matter)" },
      { cn: "工资", py: "gōngzī", en: "salary", tip: "基本工资 = base salary" },
      { cn: "面试", py: "miànshì", en: "interview", tip: "面试官 = interviewer" },
      { cn: "辞职", py: "cí zhí", en: "to resign", tip: "辞 (resign) + 职 (job)" },
      { cn: "升职", py: "shēng zhí", en: "to get promoted", tip: "升 (rise) + 职 (position)" }
    ],
    dialogue: [
      { who: "bot", cn: "我打算换一个新工作。", en: "I plan to change to a new job." },
      { who: "you", cn: "为什么？现在的工作不好吗？", en: "Why? Is your current job not good?" },
      { who: "bot", cn: "我想升职，但是公司没有机会。", en: "I want a promotion, but the company has no opportunities." },
      { who: "you", cn: "你辞职了吗？", en: "Did you resign?" },
      { who: "bot", cn: "已经辞职了，下周有个面试。", en: "Already resigned, I have an interview next week." },
      { who: "you", cn: "新公司的经理是我朋友，他很好。", en: "The manager of the new company is my friend, he's very nice." },
      { who: "bot", cn: "那太好了！希望工资也更高。", en: "That's great! I hope the salary is also higher." },
      { who: "you", cn: "祝你好运！", en: "Good luck!" }
    ]
  },
  {
    title: "办公室文化 - Office Culture",
    level: "HSK 3",
    icon: "fa-people-arrows",
    words: [
      { cn: "会议", py: "huìyì", en: "meeting / conference", tip: "开会 = have a meeting" },
      { cn: "报告", py: "bàogào", en: "report / to report", tip: "报 (report) + 告 (tell)" },
      { cn: "项目", py: "xiàngmù", en: "project", tip: "项 (item) + 目 (category)" },
      { cn: "计划", py: "jìhuà", en: "plan", tip: "工作计划 = work plan" },
      { cn: "完成", py: "wánchéng", en: "to complete", tip: "完 (finish) + 成 (achieve)" },
      { cn: "团队", py: "tuánduì", en: "team", tip: "团 (group) + 队 (squad)" }
    ],
    dialogue: [
      { who: "bot", cn: "下午的会议你准备好了吗？", en: "Are you ready for the afternoon meeting?" },
      { who: "you", cn: "准备好了，这是我的项目报告。", en: "Ready, here is my project report." },
      { who: "bot", cn: "你们团队的计划完成了吗？", en: "Has your team's plan been completed?" },
      { who: "you", cn: "已经完成了百分之八十。", en: "It's already 80% complete." },
      { who: "bot", cn: "很好，会上你来做报告。", en: "Very good, you'll give the report at the meeting." },
      { who: "you", cn: "好的，我会好好准备的。", en: "Okay, I'll prepare well." },
      { who: "bot", cn: "相信你们团队能成功。", en: "I believe your team can succeed." }
    ]
  },
  {
    title: "创业 - Starting a Business",
    level: "HSK 3",
    icon: "fa-rocket",
    words: [
      { cn: "创业", py: "chuàngyè", en: "to start a business", tip: "创 (create) + 业 (enterprise)" },
      { cn: "公司", py: "gōngsī", en: "company", tip: "开公司 = start a company" },
      { cn: "客户", py: "kèhù", en: "client / customer", tip: "客 (guest) + 户 (household)" },
      { cn: "市场", py: "shìchǎng", en: "market", tip: "市 (market) + 场 (field)" },
      { cn: "风险", py: "fēngxiǎn", en: "risk", tip: "风 (wind) + 险 (danger)" },
      { cn: "成功", py: "chénggōng", en: "success", tip: "成 (achieve) + 功 (merit)" }
    ],
    dialogue: [
      { who: "bot", cn: "我想自己创业，开一家公司。", en: "I want to start my own business and open a company." },
      { who: "you", cn: "很好的想法！你打算做什么行业？", en: "Great idea! What industry do you plan to be in?" },
      { who: "bot", cn: "电商市场很大，我想做这个。", en: "The e-commerce market is huge, I want to do this." },
      { who: "you", cn: "但是创业也有风险。", en: "But starting a business also has risks." },
      { who: "bot", cn: "我知道，我已经有了一些客户。", en: "I know, I already have some clients." },
      { who: "you", cn: "那你好好努力，祝你成功！", en: "Then work hard, and wish you success!" },
      { who: "bot", cn: "谢谢你的鼓励！", en: "Thanks for your encouragement!" }
    ]
  },
  {
    title: "加班 - Working Overtime",
    level: "HSK 3",
    icon: "fa-clock",
    words: [
      { cn: "加班", py: "jiā bān", en: "to work overtime", tip: "加 (add) + 班 (shift)" },
      { cn: "辛苦", py: "xīnkǔ", en: "hard / laborious", tip: "辛 (toilsome) + 苦 (bitter)" },
      { cn: "压力", py: "yālì", en: "pressure / stress", tip: "压 (press) + 力 (force)" },
      { cn: "效率", py: "xiàolǜ", en: "efficiency", tip: "效 (effect) + 率 (rate)" },
      { cn: "休息", py: "xiūxi", en: "to rest", tip: "需要休息 = need to rest" },
      { cn: "平衡", py: "pínghéng", en: "balance", tip: "平 (flat) + 衡 (balance)" }
    ],
    dialogue: [
      { who: "bot", cn: "你最近经常加班吗？", en: "Have you been working overtime a lot lately?" },
      { who: "you", cn: "是，这个月一直很忙。", en: "Yes, it's been very busy this month." },
      { who: "bot", cn: "工作压力大吗？", en: "Is the work pressure high?" },
      { who: "you", cn: "有一点，但我会注意效率。", en: "A bit, but I pay attention to efficiency." },
      { who: "bot", cn: "要注意休息，工作和生活要平衡。", en: "Pay attention to rest, work and life need balance." },
      { who: "you", cn: "你说得对，太辛苦了对身体不好。", en: "You're right, working too hard is bad for health." },
      { who: "bot", cn: "周末好好休息一下吧。", en: "Have a good rest on the weekend." }
    ]
  },
  {
    title: "职业发展 - Career Development",
    level: "HSK 3",
    icon: "fa-chart-line",
    words: [
      { cn: "职业", py: "zhíyè", en: "career / profession", tip: "职 (job) + 业 (industry)" },
      { cn: "发展", py: "fāzhǎn", en: "development / to grow", tip: "发 (issue) + 展 (expand)" },
      { cn: "培训", py: "péixùn", en: "training", tip: "培 (cultivate) + 训 (instruct)" },
      { cn: "能力", py: "nénglì", en: "ability / capability", tip: "能 (can) + 力 (power)" },
      { cn: "经验", py: "jīngyàn", en: "experience", tip: "经 (through) + 验 (test)" },
      { cn: "目标", py: "mùbiāo", en: "goal / target", tip: "目 (eye) + 标 (mark)" }
    ],
    dialogue: [
      { who: "bot", cn: "你对职业发展有什么目标？", en: "What goals do you have for career development?" },
      { who: "you", cn: "我想提高自己的能力，多学经验。", en: "I want to improve my abilities and gain more experience." },
      { who: "bot", cn: "公司有培训机会吗？", en: "Does the company have training opportunities?" },
      { who: "you", cn: "有，我下个月参加一个培训。", en: "Yes, I'm attending a training next month." },
      { who: "bot", cn: "不断学习才能有好的发展。", en: "Continuous learning leads to good development." },
      { who: "you", cn: "对，我的目标是五年内当经理。", en: "Right, my goal is to become a manager within five years." },
      { who: "bot", cn: "你一定可以的！", en: "You can definitely do it!" }
    ]
  },
  {
    title: "工作与家庭 - Work & Family",
    level: "HSK 3",
    icon: "fa-scale-balanced",
    words: [
      { cn: "家庭", py: "jiātíng", en: "family", tip: "家 (home) + 庭 (courtyard)" },
      { cn: "责任", py: "zérèn", en: "responsibility", tip: "责 (duty) + 任 (role)" },
      { cn: "照顾", py: "zhàogù", en: "to take care of", tip: "照 (shine) + 顾 (care)" },
      { cn: "支持", py: "zhīchí", en: "to support", tip: "支 (prop) + 持 (hold)" },
      { cn: "理解", py: "lǐjiě", en: "to understand", tip: "理 (reason) + 解 (untie)" },
      { cn: "幸福", py: "xìngfú", en: "happiness / happy", tip: "幸 (luck) + 福 (blessing)" }
    ],
    dialogue: [
      { who: "bot", cn: "你怎么平衡工作和家庭？", en: "How do you balance work and family?" },
      { who: "you", cn: "工作很重要，但家庭更重要。", en: "Work is important, but family is more important." },
      { who: "bot", cn: "你的家人支持你的工作吗？", en: "Does your family support your work?" },
      { who: "you", cn: "他们很理解，也会照顾我。", en: "They understand very much and also take care of me." },
      { who: "bot", cn: "有家人的支持就很幸福。", en: "Having family support is happiness." },
      { who: "you", cn: "对，照顾家庭是我的责任。", en: "Right, taking care of the family is my responsibility." },
      { who: "bot", cn: "你真是一个有责任感的人。", en: "You're really a responsible person." }
    ]
  },

  // ============================
  // HSK 3: Education (102-107)
  // ============================
  {
    title: "教室 - Classroom",
    level: "HSK 3",
    icon: "fa-chalkboard",
    words: [
      { cn: "教室", py: "jiàoshì", en: "classroom", tip: "教 (teach) + 室 (room)" },
      { cn: "黑板", py: "hēibǎn", en: "blackboard", tip: "黑 (black) + 板 (board)" },
      { cn: "粉笔", py: "fěnbǐ", en: "chalk", tip: "粉 (powder) + 笔 (pen)" },
      { cn: "桌子", py: "zhuōzi", en: "desk / table", tip: "课桌 = school desk" },
      { cn: "椅子", py: "yǐzi", en: "chair", tip: "一把椅子 = one chair" },
      { cn: "窗户", py: "chuānghu", en: "window", tip: "窗 (window) + 户 (door)" }
    ],
    dialogue: [
      { who: "bot", cn: "我们的教室在几楼？", en: "Which floor is our classroom on?" },
      { who: "you", cn: "在三楼，302教室。", en: "On the third floor, room 302." },
      { who: "bot", cn: "教室里有黑板和粉笔吗？", en: "Are there a blackboard and chalk in the classroom?" },
      { who: "you", cn: "有，还有新的桌子和椅子。", en: "Yes, there are also new desks and chairs." },
      { who: "bot", cn: "窗户开着吗？", en: "Is the window open?" },
      { who: "you", cn: "开着，让新鲜空气进来。", en: "It's open, to let fresh air in." },
      { who: "bot", cn: "这个教室真好。", en: "This classroom is really nice." }
    ]
  },
  {
    title: "作业 - Homework",
    level: "HSK 3",
    icon: "fa-book-open",
    words: [
      { cn: "作业", py: "zuòyè", en: "homework", tip: "布置作业 = assign homework" },
      { cn: "交作业", py: "jiāo zuòyè", en: "to submit homework", tip: "交 (submit) + 作业" },
      { cn: "题目", py: "tímù", en: "topic / problem", tip: "题 (topic) + 目 (item)" },
      { cn: "答案", py: "dá'àn", en: "answer", tip: "答 (answer) + 案 (case)" },
      { cn: "检查", py: "jiǎnchá", en: "to check", tip: "检查作业 = check homework" },
      { cn: "修改", py: "xiūgǎi", en: "to revise / edit", tip: "修 (repair) + 改 (change)" }
    ],
    dialogue: [
      { who: "bot", cn: "老师布置的作业你做好了吗？", en: "Have you finished the homework the teacher assigned?" },
      { who: "you", cn: "还没有，最后一道题目不会。", en: "Not yet, I don't know the last problem." },
      { who: "bot", cn: "让我看看，答案是什么。", en: "Let me see what the answer is." },
      { who: "you", cn: "我检查了几遍，还是不对。", en: "I checked several times, it's still not right." },
      { who: "bot", cn: "这里需要修改一下。", en: "You need to revise this part." },
      { who: "you", cn: "啊，我明白了！现在可以交作业了。", en: "Ah, I see! Now I can submit the homework." },
      { who: "bot", cn: "下次不会的题目可以问我。", en: "Next time you can ask me about problems you don't understand." }
    ]
  },
  {
    title: "留学 - Studying Abroad",
    level: "HSK 3",
    icon: "fa-graduation-cap",
    words: [
      { cn: "留学", py: "liúxué", en: "to study abroad", tip: "留 (stay) + 学 (study)" },
      { cn: "申请", py: "shēnqǐng", en: "to apply", tip: "申 (state) + 请 (request)" },
      { cn: "奖学金", py: "jiǎngxuéjīn", en: "scholarship", tip: "奖 (award) + 学 (study) + 金 (money)" },
      { cn: "宿舍", py: "sùshè", en: "dormitory", tip: "宿 (stay) + 舍 (house)" },
      { cn: "签证", py: "qiānzhèng", en: "visa", tip: "签 (sign) + 证 (certificate)" },
      { cn: "毕业", py: "bì yè", en: "to graduate", tip: "毕 (finish) + 业 (study)" }
    ],
    dialogue: [
      { who: "bot", cn: "我打算去中国留学。", en: "I plan to study abroad in China." },
      { who: "you", cn: "太好了！你申请了哪所大学？", en: "Great! Which university did you apply to?" },
      { who: "bot", cn: "北京大学，我拿到了奖学金。", en: "Peking University, I got a scholarship." },
      { who: "you", cn: "恭喜你！签证办好了吗？", en: "Congratulations! Is your visa ready?" },
      { who: "bot", cn: "正在办，学校还安排了宿舍。", en: "In progress, the school also arranged a dormitory." },
      { who: "you", cn: "毕业后你打算回国吗？", en: "Do you plan to return after graduation?" },
      { who: "bot", cn: "可能在中国工作几年。", en: "Maybe work in China for a few years." }
    ]
  },
  {
    title: "考试准备 - Exam Preparation",
    level: "HSK 3",
    icon: "fa-pen-to-square",
    words: [
      { cn: "复习", py: "fùxí", en: "to review", tip: "复 (again) + 习 (study)" },
      { cn: "重点", py: "zhòngdiǎn", en: "key point", tip: "重 (important) + 点 (point)" },
      { cn: "笔记", py: "bǐjì", en: "notes", tip: "笔 (pen) + 记 (record)" },
      { cn: "练习", py: "liànxí", en: "to practice", tip: "练 (train) + 习 (practice)" },
      { cn: "理解", py: "lǐjiě", en: "understanding", tip: "理解课文 = understand the text" },
      { cn: "认真", py: "rènzhēn", en: "serious / earnest", tip: "认 (recognize) + 真 (true)" }
    ],
    dialogue: [
      { who: "bot", cn: "期末快到了，你开始复习了吗？", en: "The finals are coming, have you started reviewing?" },
      { who: "you", cn: "开始了，我在看重点笔记。", en: "Yes, I'm looking at key point notes." },
      { who: "bot", cn: "每天都要认真练习。", en: "You need to practice seriously every day." },
      { who: "you", cn: "对，多做练习才能理解内容。", en: "Right, doing more practice helps understand the content." },
      { who: "bot", cn: "我们一起复习吧，互相帮助。", en: "Let's review together, help each other." },
      { who: "you", cn: "好主意！两个人一起效率更高。", en: "Good idea! Working together is more efficient." },
      { who: "bot", cn: "希望我们都能考好。", en: "Hope we all do well on the exam." }
    ]
  },
  {
    title: "大学 - University Life",
    level: "HSK 3",
    icon: "fa-university",
    words: [
      { cn: "大学", py: "dàxué", en: "university", tip: "上大学 = go to university" },
      { cn: "专业", py: "zhuānyè", en: "major / specialty", tip: "专 (special) + 业 (field)" },
      { cn: "课程", py: "kèchéng", en: "course / curriculum", tip: "课 (class) + 程 (process)" },
      { cn: "图书馆", py: "túshūguǎn", en: "library", tip: "图 (picture) + 书 (book) + 馆 (hall)" },
      { cn: "教授", py: "jiàoshòu", en: "professor", tip: "教 (teach) + 授 (confer)" },
      { cn: "论文", py: "lùnwén", en: "thesis / paper", tip: "论 (discuss) + 文 (writing)" }
    ],
    dialogue: [
      { who: "bot", cn: "你在大学学什么专业？", en: "What major are you studying in university?" },
      { who: "you", cn: "我学的是国际贸易专业。", en: "I'm studying international trade." },
      { who: "bot", cn: "课程难吗？", en: "Are the courses difficult?" },
      { who: "you", cn: "还可以，我经常去图书馆学习。", en: "Not too bad, I often go to the library to study." },
      { who: "bot", cn: "教授怎么样？", en: "How are the professors?" },
      { who: "you", cn: "教授们都很认真，对我们帮助很大。", en: "The professors are very serious and very helpful to us." },
      { who: "bot", cn: "你开始写论文了吗？", en: "Have you started writing your thesis?" },
      { who: "you", cn: "还没有，下个学期才开始。", en: "Not yet, it starts next semester." }
    ]
  },
  {
    title: "学习方法 - Study Methods",
    level: "HSK 3",
    icon: "fa-lightbulb",
    words: [
      { cn: "方法", py: "fāngfǎ", en: "method / way", tip: "方 (way) + 法 (method)" },
      { cn: "计划", py: "jìhuà", en: "plan", tip: "学习计划 = study plan" },
      { cn: "安排", py: "ānpái", en: "to arrange", tip: "安 (arrange) + 排 (line up)" },
      { cn: "总结", py: "zǒngjié", en: "to summarize", tip: "总 (overall) + 结 (tie)" },
      { cn: "效率", py: "xiàolǜ", en: "efficiency", tip: "提高效率 = improve efficiency" },
      { cn: "坚持", py: "jiānchí", en: "to persevere", tip: "坚持就是胜利" }
    ],
    dialogue: [
      { who: "bot", cn: "你有什么好的学习方法？", en: "What good study methods do you have?" },
      { who: "you", cn: "我会先做计划，然后按计划学习。", en: "I first make a plan, then study according to it." },
      { who: "bot", cn: "每天怎么安排时间？", en: "How do you arrange your time each day?" },
      { who: "you", cn: "早上复习，下午学新内容。", en: "Review in the morning, learn new content in the afternoon." },
      { who: "bot", cn: "你会做总结吗？", en: "Do you make summaries?" },
      { who: "you", cn: "会，每周总结一次，提高效率。", en: "Yes, summarize once a week to improve efficiency." },
      { who: "bot", cn: "最重要的还是坚持。", en: "The most important thing is to persevere." },
      { who: "you", cn: "没错，坚持才能进步。", en: "Exactly, only perseverance leads to progress." }
    ]
  },

  // ============================
  // HSK 3: Travel & Transport (108-113)
  // ============================
  {
    title: "护照与签证 - Passport & Visa",
    level: "HSK 3",
    icon: "fa-passport",
    words: [
      { cn: "护照", py: "hùzhào", en: "passport", tip: "护 (protect) + 照 (certificate)" },
      { cn: "签证", py: "qiānzhèng", en: "visa", tip: "签 (sign) + 证 (certificate)" },
      { cn: "有效期", py: "yǒuxiào qī", en: "validity period", tip: "有效 (valid) + 期 (period)" },
      { cn: "延期", py: "yán qī", en: "to extend", tip: "延 (extend) + 期 (time)" },
      { cn: "资料", py: "zīliào", en: "documents / materials", tip: "准备资料 = prepare documents" },
      { cn: "申请", py: "shēnqǐng", en: "to apply", tip: "申请签证 = apply for visa" }
    ],
    dialogue: [
      { who: "bot", cn: "你去中国需要签证吗？", en: "Do you need a visa to go to China?" },
      { who: "you", cn: "需要，我已经申请了旅游签证。", en: "Yes, I've already applied for a tourist visa." },
      { who: "bot", cn: "你的护照有效期够吗？", en: "Is your passport valid long enough?" },
      { who: "you", cn: "够的，还有两年才到期。", en: "Yes, still two years before it expires." },
      { who: "bot", cn: "申请签证需要什么资料？", en: "What documents are needed for the visa application?" },
      { who: "you", cn: "需要护照、照片和申请表。", en: "Need passport, photos, and application form." },
      { who: "bot", cn: "如果时间不够可以延期。", en: "If time isn't enough, you can extend it." },
      { who: "you", cn: "希望签证能顺利下来。", en: "Hope the visa is approved smoothly." }
    ]
  },
  {
    title: "火车站 - Train Station",
    level: "HSK 3",
    icon: "fa-train",
    words: [
      { cn: "火车站", py: "huǒchē zhàn", en: "train station", tip: "火车 (train) + 站 (station)" },
      { cn: "高铁", py: "gāotiě", en: "high-speed rail", tip: "高 (high) + 铁 (iron)" },
      { cn: "车票", py: "chēpiào", en: "train ticket", tip: "车 (vehicle) + 票 (ticket)" },
      { cn: "检票", py: "jiǎn piào", en: "to check tickets", tip: "检 (check) + 票 (ticket)" },
      { cn: "站台", py: "zhàntái", en: "platform", tip: "站 (station) + 台 (platform)" },
      { cn: "行李", py: "xíngli", en: "luggage / baggage", tip: "行 (go) + 李 (plum)" }
    ],
    dialogue: [
      { who: "bot", cn: "我们去火车站坐高铁吧。", en: "Let's go to the train station to take the high-speed rail." },
      { who: "you", cn: "好的，车票买了吗？", en: "Okay, have you bought the tickets?" },
      { who: "bot", cn: "买了，在手机上买的电子票。", en: "Yes, I bought e-tickets on my phone." },
      { who: "you", cn: "那很方便，到站台检票就行了。", en: "That's convenient, just check in at the platform." },
      { who: "bot", cn: "我们的站台在3号。", en: "Our platform is number 3." },
      { who: "you", cn: "行李多吗？我来帮你拿。", en: "Do you have a lot of luggage? Let me help you carry it." },
      { who: "bot", cn: "谢谢，只有一个箱子。", en: "Thanks, just one suitcase." }
    ]
  },
  {
    title: "飞机场 - Airport",
    level: "HSK 3",
    icon: "fa-plane",
    words: [
      { cn: "飞机场", py: "fēijī chǎng", en: "airport", tip: "飞机 (airplane) + 场 (field)" },
      { cn: "航班", py: "hángbān", en: "flight", tip: "航 (navigate) + 班 (scheduled)" },
      { cn: "起飞", py: "qǐfēi", en: "to take off", tip: "起 (rise) + 飞 (fly)" },
      { cn: "降落", py: "jiàngluò", en: "to land", tip: "降 (descend) + 落 (fall)" },
      { cn: "延误", py: "yánwù", en: "delay", tip: "延 (delay) + 误 (mistake)" },
      { cn: "转机", py: "zhuǎn jī", en: "to transfer flights", tip: "转 (transfer) + 机 (plane)" }
    ],
    dialogue: [
      { who: "bot", cn: "航班是几点起飞？", en: "What time does the flight take off?" },
      { who: "you", cn: "上午十点，但是可能延误。", en: "10 AM, but it might be delayed." },
      { who: "bot", cn: "为什么延误？", en: "Why is it delayed?" },
      { who: "you", cn: "因为天气不好，要等一个小时。", en: "Because of bad weather, need to wait an hour." },
      { who: "bot", cn: "我们要转机吗？", en: "Do we need to transfer?" },
      { who: "you", cn: "不用，这是直飞航班。", en: "No, this is a direct flight." },
      { who: "bot", cn: "那还好，降落时告诉我。", en: "That's okay, tell me when we land." }
    ]
  },
  {
    title: "导游 - Tour Guide",
    level: "HSK 3",
    icon: "fa-flag",
    words: [
      { cn: "导游", py: "dǎoyóu", en: "tour guide", tip: "导 (guide) + 游 (travel)" },
      { cn: "景点", py: "jǐngdiǎn", en: "scenic spot", tip: "景 (scenery) + 点 (spot)" },
      { cn: "历史", py: "lìshǐ", en: "history", tip: "历 (experience) + 史 (history)" },
      { cn: "文化", py: "wénhuà", en: "culture", tip: "文 (culture) + 化 (transform)" },
      { cn: "介绍", py: "jièshào", en: "to introduce", tip: "介 (introduce) + 绍 (connect)" },
      { cn: "著名", py: "zhùmíng", en: "famous", tip: "著 (notable) + 名 (name)" }
    ],
    dialogue: [
      { who: "bot", cn: "大家好，我是你们的导游。", en: "Hello everyone, I'm your tour guide." },
      { who: "you", cn: "今天我们去哪些景点参观？", en: "Which scenic spots are we visiting today?" },
      { who: "bot", cn: "我们先去故宫，那是一个著名的地方。", en: "We'll go to the Forbidden City first, it's a famous place." },
      { who: "you", cn: "我对中国的历史和文化很感兴趣。", en: "I'm very interested in Chinese history and culture." },
      { who: "bot", cn: "我会给大家详细介绍。", en: "I'll give everyone a detailed introduction." },
      { who: "you", cn: "太好了，期待今天的旅行。", en: "Great, looking forward to today's trip." },
      { who: "bot", cn: "我们出发吧！", en: "Let's set off!" }
    ]
  },
  {
    title: "自驾游 - Road Trip",
    level: "HSK 3",
    icon: "fa-car",
    words: [
      { cn: "自驾", py: "zìjià", en: "self-drive", tip: "自 (self) + 驾 (drive)" },
      { cn: "地图", py: "dìtú", en: "map", tip: "地 (place) + 图 (picture)" },
      { cn: "导航", py: "dǎoháng", en: "navigation / to navigate", tip: "导 (guide) + 航 (sail)" },
      { cn: "路线", py: "lùxiàn", en: "route", tip: "路 (road) + 线 (line)" },
      { cn: "加油站", py: "jiāyóu zhàn", en: "gas station", tip: "加 (add) + 油 (oil) + 站 (station)" },
      { cn: "休息区", py: "xiūxi qū", en: "rest area", tip: "休息 (rest) + 区 (area)" }
    ],
    dialogue: [
      { who: "bot", cn: "我们自驾去海边吧！", en: "Let's do a road trip to the beach!" },
      { who: "you", cn: "好啊！你用导航设好路线了吗？", en: "Great! Have you set the route on the navigation?" },
      { who: "bot", cn: "设好了，大约三个小时的车程。", en: "Yes, about a three-hour drive." },
      { who: "you", cn: "路上有加油站和休息区吗？", en: "Are there gas stations and rest areas along the way?" },
      { who: "bot", cn: "有，我看了地图，每50公里就有一个。", en: "Yes, I checked the map, there's one every 50 kilometers." },
      { who: "you", cn: "那我可以放心了。", en: "Then I can feel at ease." },
      { who: "bot", cn: "自驾旅行自由自在！", en: "Road trips are so free and easy!" }
    ]
  },
  {
    title: "旅行经历 - Travel Experience",
    level: "HSK 3",
    icon: "fa-suitcase-rolling",
    words: [
      { cn: "经历", py: "jīnglì", en: "experience", tip: "经 (through) + 历 (experience)" },
      { cn: "难忘", py: "nánwàng", en: "unforgettable", tip: "难 (difficult) + 忘 (forget)" },
      { cn: "风景", py: "fēngjǐng", en: "scenery / landscape", tip: "风 (wind) + 景 (view)" },
      { cn: "当地", py: "dāngdì", en: "local", tip: "当 (at) + 地 (place)" },
      { cn: "特色", py: "tèsè", en: "special / characteristic", tip: "特 (special) + 色 (color)" },
      { cn: "建议", py: "jiànyì", en: "suggestion / to suggest", tip: "建 (build) + 议 (opinion)" }
    ],
    dialogue: [
      { who: "bot", cn: "你去过最难忘的地方是哪里？", en: "Where is the most unforgettable place you've been?" },
      { who: "you", cn: "去年我去了云南，那里的风景太美了。", en: "Last year I went to Yunnan, the scenery was so beautiful." },
      { who: "bot", cn: "有什么当地特色吗？", en: "Are there any local specialties?" },
      { who: "you", cn: "有，小吃很特别，非常好吃。", en: "Yes, the snacks are very special and delicious." },
      { who: "bot", cn: "你有什么旅行建议？", en: "What travel suggestions do you have?" },
      { who: "you", cn: "建议去之前做好攻略，多了解当地文化。", en: "I suggest preparing well before going and learning about the local culture." },
      { who: "bot", cn: "下次我也想去云南看看。", en: "Next time I want to go to Yunnan too." }
    ]
  },

  // ============================
  // HSK 3: Food & Cooking (114-118)
  // ============================
  {
    title: "鸡蛋面条 - Egg Noodles",
    level: "HSK 3",
    icon: "fa-bowl-food",
    words: [
      { cn: "鸡蛋", py: "jīdàn", en: "egg", tip: "鸡 (chicken) + 蛋 (egg)" },
      { cn: "面条", py: "miàntiáo", en: "noodles", tip: "面 (flour) + 条 (strip)" },
      { cn: "饺子", py: "jiǎozi", en: "dumplings", tip: "饺 (dumpling) + 子" },
      { cn: "味道", py: "wèidào", en: "taste / flavor", tip: "味 (taste) + 道 (way)" },
      { cn: "酸辣", py: "suān là", en: "sour and spicy", tip: "酸 (sour) + 辣 (spicy)" },
      { cn: "咸", py: "xián", en: "salty", tip: "有点咸 = a bit salty" }
    ],
    dialogue: [
      { who: "bot", cn: "你吃过中国的面条吗？", en: "Have you eaten Chinese noodles?" },
      { who: "you", cn: "吃过，我最喜欢吃鸡蛋面条。", en: "Yes, I like egg noodles the most." },
      { who: "bot", cn: "你会做饺子吗？", en: "Can you make dumplings?" },
      { who: "you", cn: "会一点，但是味道不够好。", en: "A little, but the taste isn't good enough." },
      { who: "bot", cn: "酸辣味的饺子很好吃。", en: "Sour and spicy dumplings are delicious." },
      { who: "you", cn: "我下次试试，不要太咸就行了。", en: "I'll try next time, just not too salty." },
      { who: "bot", cn: "我可以教你包饺子。", en: "I can teach you to make dumplings." }
    ]
  },
  {
    title: "中国味道 - Chinese Flavors",
    level: "HSK 3",
    icon: "fa-pepper-hot",
    words: [
      { cn: "味道不错", py: "wèidào búcuò", en: "not bad taste", tip: "不错 = pretty good" },
      { cn: "糖醋", py: "táng cù", en: "sweet and sour", tip: "糖 (sugar) + 醋 (vinegar)" },
      { cn: "红烧", py: "hóngshāo", en: "red braised", tip: "红 (red) + 烧 (stewed)" },
      { cn: "清蒸", py: "qīngzhēng", en: "steamed", tip: "清 (clear) + 蒸 (steam)" },
      { cn: "食材", py: "shícái", en: "ingredients", tip: "食 (food) + 材 (material)" },
      { cn: "做法", py: "zuòfǎ", en: "cooking method", tip: "做 (do) + 法 (method)" }
    ],
    dialogue: [
      { who: "bot", cn: "中国菜的味道真多。", en: "Chinese food has so many flavors." },
      { who: "you", cn: "对，我喜欢糖醋排骨，味道不错。", en: "Yes, I like sweet and sour ribs, the taste is good." },
      { who: "bot", cn: "红烧肉也很好吃，但是比较油腻。", en: "Red braised pork is also good, but relatively oily." },
      { who: "you", cn: "清蒸鱼比较健康，保持食材原味。", en: "Steamed fish is healthier, keeping the original flavor of ingredients." },
      { who: "bot", cn: "做法不同，味道就不同。", en: "Different cooking methods give different tastes." },
      { who: "you", cn: "所以中国菜才这么丰富。", en: "That's why Chinese food is so rich and varied." },
      { who: "bot", cn: "你学会了几道菜的做法？", en: "How many dishes have you learned to cook?" }
    ]
  },
  {
    title: "学做中国菜 - Learning Chinese Cooking",
    level: "HSK 3",
    icon: "fa-kitchen-set",
    words: [
      { cn: "食谱", py: "shípǔ", en: "recipe", tip: "食 (food) + 谱 (chart)" },
      { cn: "切菜", py: "qiē cài", en: "to cut vegetables", tip: "切 (cut) + 菜 (vegetable)" },
      { cn: "炒", py: "chǎo", en: "to stir-fry", tip: "炒菜 = stir-fry" },
      { cn: "煮", py: "zhǔ", en: "to boil", tip: "煮面条 = boil noodles" },
      { cn: "调料", py: "tiáoliào", en: "seasoning / condiment", tip: "调 (season) + 料 (material)" },
      { cn: "口味", py: "kǒuwèi", en: "taste / flavor preference", tip: "口 (mouth) + 味 (taste)" }
    ],
    dialogue: [
      { who: "bot", cn: "你能教我做中国菜吗？", en: "Can you teach me to cook Chinese food?" },
      { who: "you", cn: "可以，我们先看看食谱。", en: "Sure, let's first look at a recipe." },
      { who: "bot", cn: "要先把菜切好对吗？", en: "We need to cut the vegetables first, right?" },
      { who: "you", cn: "对，然后开火放油，炒一下。", en: "Yes, then heat oil and stir-fry." },
      { who: "bot", cn: "需要加什么调料？", en: "What seasonings need to be added?" },
      { who: "you", cn: "加盐和酱油，看你喜欢什么口味。", en: "Add salt and soy sauce, depending on your taste preference." },
      { who: "bot", cn: "我喜欢辣的口味，多加辣椒。", en: "I like spicy flavors, add more chili." },
      { who: "you", cn: "那我们就做麻辣的！", en: "Then we'll make it Sichuan spicy!" }
    ]
  },
  {
    title: "餐厅推荐 - Restaurant Recommendations",
    level: "HSK 3",
    icon: "fa-star",
    words: [
      { cn: "推荐", py: "tuījiàn", en: "to recommend", tip: "推 (push) + 荐 (recommend)" },
      { cn: "服务", py: "fúwù", en: "service", tip: "服 (serve) + 务 (affair)" },
      { cn: "环境", py: "huánjìng", en: "environment / atmosphere", tip: "环 (ring) + 境 (boundary)" },
      { cn: "价格", py: "jiàgé", en: "price", tip: "价格合理 = reasonable price" },
      { cn: "菜单", py: "càidān", en: "menu", tip: "看菜单 = look at the menu" },
      { cn: "特色菜", py: "tèsè cài", en: "signature dish", tip: "特色 (special) + 菜 (dish)" }
    ],
    dialogue: [
      { who: "bot", cn: "你能推荐一个好餐厅吗？", en: "Can you recommend a good restaurant?" },
      { who: "you", cn: "我知道一家川菜馆，环境很好。", en: "I know a Sichuan restaurant, the atmosphere is great." },
      { who: "bot", cn: "价格贵不贵？服务怎么样？", en: "Is it expensive? How's the service?" },
      { who: "you", cn: "价格合理，服务员也很热情。", en: "Reasonable prices, and the servers are very warm." },
      { who: "bot", cn: "有什么特色菜推荐？", en: "Any signature dishes to recommend?" },
      { who: "you", cn: "他们的水煮鱼是特色菜，非常好吃。", en: "Their boiled fish is a signature dish, very delicious." },
      { who: "bot", cn: "那我们周末去尝尝！", en: "Then let's go try it on the weekend!" }
    ]
  },
  {
    title: "饮食习惯 - Eating Habits",
    level: "HSK 3",
    icon: "fa-utensils",
    words: [
      { cn: "饮食", py: "yǐnshí", en: "diet / food and drink", tip: "饮 (drink) + 食 (food)" },
      { cn: "早餐", py: "zǎocān", en: "breakfast", tip: "早 (early) + 餐 (meal)" },
      { cn: "午餐", py: "wǔcān", en: "lunch", tip: "午 (noon) + 餐 (meal)" },
      { cn: "晚餐", py: "wǎncān", en: "dinner", tip: "晚 (evening) + 餐 (meal)" },
      { cn: "营养", py: "yíngyǎng", en: "nutrition", tip: "营 (manage) + 养 (nourish)" },
      { cn: "习惯", py: "xíguàn", en: "habit", tip: "饮食习惯 = dietary habit" }
    ],
    dialogue: [
      { who: "bot", cn: "你的一日三餐怎么安排？", en: "How do you arrange your three meals a day?" },
      { who: "you", cn: "我早餐吃面包和牛奶，午餐吃米饭和菜。", en: "I have bread and milk for breakfast, rice and dishes for lunch." },
      { who: "bot", cn: "晚餐呢？", en: "What about dinner?" },
      { who: "you", cn: "晚餐吃得比较少，注意营养搭配。", en: "I eat less for dinner, focusing on nutritional balance." },
      { who: "bot", cn: "你的饮食习惯很健康。", en: "Your eating habits are very healthy." },
      { who: "you", cn: "好习惯对身体好。", en: "Good habits are good for the body." },
      { who: "bot", cn: "我以后也要注意饮食。", en: "I should pay attention to my diet too." }
    ]
  },

  // ============================
  // HSK 3: Social Life (119-123)
  // ============================
  {
    title: "结婚 - Getting Married",
    level: "HSK 3",
    icon: "fa-ring",
    words: [
      { cn: "结婚", py: "jié hūn", en: "to get married", tip: "结 (tie) + 婚 (marriage)" },
      { cn: "婚礼", py: "hūnlǐ", en: "wedding ceremony", tip: "婚 (marriage) + 礼 (ceremony)" },
      { cn: "新娘", py: "xīnniáng", en: "bride", tip: "新 (new) + 娘 (woman)" },
      { cn: "新郎", py: "xīnláng", en: "groom", tip: "新 (new) + 郎 (man)" },
      { cn: "礼物", py: "lǐwù", en: "gift / present", tip: "礼 (gift) + 物 (thing)" },
      { cn: "祝福", py: "zhùfú", en: "to wish / blessings", tip: "祝 (wish) + 福 (fortune)" }
    ],
    dialogue: [
      { who: "bot", cn: "我朋友下个月结婚。", en: "My friend is getting married next month." },
      { who: "you", cn: "恭喜他！婚礼在哪里举行？", en: "Congratulations to him! Where is the wedding?" },
      { who: "bot", cn: "在一个酒店，新娘很漂亮。", en: "In a hotel, the bride is very beautiful." },
      { who: "you", cn: "你准备了什么礼物？", en: "What gift did you prepare?" },
      { who: "bot", cn: "我送一个红包，祝福他们幸福。", en: "I'll give a red envelope, wishing them happiness." },
      { who: "you", cn: "新郎和新娘很般配。", en: "The groom and bride are a good match." },
      { who: "bot", cn: "是，希望他们永远幸福。", en: "Yes, hope they're happy forever." }
    ]
  },
  {
    title: "节日 - Festivals",
    level: "HSK 3",
    icon: "fa-holiday",
    words: [
      { cn: "节日", py: "jiérì", en: "festival / holiday", tip: "节 (segment) + 日 (day)" },
      { cn: "春节", py: "Chūn Jié", en: "Spring Festival", tip: "春 (spring) + 节 (festival)" },
      { cn: "中秋节", py: "Zhōngqiū Jié", en: "Mid-Autumn Festival", tip: "中 (middle) + 秋 (autumn)" },
      { cn: "传统", py: "chuántǒng", en: "tradition / traditional", tip: "传 (pass) + 统 (system)" },
      { cn: "庆祝", py: "qìngzhù", en: "to celebrate", tip: "庆 (celebrate) + 祝 (wish)" },
      { cn: "团圆", py: "tuányuán", en: "family reunion", tip: "团 (group) + 圆 (round)" }
    ],
    dialogue: [
      { who: "bot", cn: "你最喜欢中国的哪个节日？", en: "Which Chinese festival do you like the most?" },
      { who: "you", cn: "我最喜欢春节，全家人一起团圆。", en: "I like Spring Festival the most, the whole family reunites." },
      { who: "bot", cn: "传统节日都有特别的庆祝方式。", en: "Traditional festivals all have special ways of celebration." },
      { who: "you", cn: "中秋节吃月饼，春节吃饺子。", en: "Eat mooncakes for Mid-Autumn Festival, eat dumplings for Spring Festival." },
      { who: "bot", cn: "节日让家人有机会在一起。", en: "Festivals give families a chance to be together." },
      { who: "you", cn: "对，团圆是最重要的。", en: "Right, reunion is the most important." },
      { who: "bot", cn: "我喜欢这种传统。", en: "I like this tradition." }
    ]
  },
  {
    title: "生日派对 - Birthday Party",
    level: "HSK 3",
    icon: "fa-birthday-cake",
    words: [
      { cn: "生日", py: "shēngrì", en: "birthday", tip: "生 (birth) + 日 (day)" },
      { cn: "派对", py: "pàiduì", en: "party", tip: "派 (group) + 对 (pair) - transliteration" },
      { cn: "蛋糕", py: "dāngāo", en: "cake", tip: "蛋 (egg) + 糕 (cake)" },
      { cn: "蜡烛", py: "làzhú", en: "candle", tip: "蜡 (wax) + 烛 (candle)" },
      { cn: "许愿", py: "xǔ yuàn", en: "to make a wish", tip: "许 (allow) + 愿 (wish)" },
      { cn: "惊喜", py: "jīngxǐ", en: "surprise / pleasant surprise", tip: "惊 (surprise) + 喜 (joy)" }
    ],
    dialogue: [
      { who: "bot", cn: "明天是我的生日，我要办一个派对。", en: "Tomorrow is my birthday, I'm having a party." },
      { who: "you", cn: "生日快乐！我准备了一个惊喜给你。", en: "Happy birthday! I prepared a surprise for you." },
      { who: "bot", cn: "真的吗？是什么惊喜？", en: "Really? What surprise?" },
      { who: "you", cn: "到时候你就知道了。有蛋糕和蜡烛。", en: "You'll know then. There's cake and candles." },
      { who: "bot", cn: "我会在派对上许愿。", en: "I'll make a wish at the party." },
      { who: "you", cn: "希望你的愿望都能实现。", en: "Hope all your wishes come true." },
      { who: "bot", cn: "谢谢你，我很期待！", en: "Thank you, I'm really looking forward to it!" }
    ]
  },
  {
    title: "送礼 - Gift Giving",
    level: "HSK 3",
    icon: "fa-gift",
    words: [
      { cn: "送礼", py: "sòng lǐ", en: "to give a gift", tip: "送 (give) + 礼 (gift)" },
      { cn: "心意", py: "xīnyì", en: "heartfelt intention", tip: "心 (heart) + 意 (intention)" },
      { cn: "贵重", py: "guìzhòng", en: "valuable / precious", tip: "贵 (expensive) + 重 (heavy)" },
      { cn: "合适", py: "héshì", en: "suitable", tip: "合适的礼物 = suitable gift" },
      { cn: "感谢", py: "gǎnxiè", en: "to thank / be grateful", tip: "感 (feel) + 谢 (thank)" },
      { cn: "问候", py: "wènhòu", en: "to send regards", tip: "问 (ask) + 候 (situation)" }
    ],
    dialogue: [
      { who: "bot", cn: "朋友生日要到了，送什么礼物好？", en: "My friend's birthday is coming, what gift should I give?" },
      { who: "you", cn: "礼物最重要的是心意，不一定贵重。", en: "The most important thing about a gift is the heart, not necessarily value." },
      { who: "bot", cn: "那送一本书合适吗？", en: "Would a book be suitable?" },
      { who: "you", cn: "如果他喜欢看书，就很合适。", en: "If he likes reading, it's very suitable." },
      { who: "bot", cn: "我还会送上生日问候。", en: "I'll also send birthday greetings." },
      { who: "you", cn: "他一定会很感谢你的。", en: "He'll definitely be very grateful to you." },
      { who: "bot", cn: "希望他会喜欢。", en: "Hope he'll like it." }
    ]
  },
  {
    title: "聚会 - Social Gatherings",
    level: "HSK 3",
    icon: "fa-champagne-glasses",
    words: [
      { cn: "邀请", py: "yāoqǐng", en: "to invite", tip: "邀 (invite) + 请 (request)" },
      { cn: "参加", py: "cānjiā", en: "to participate", tip: "参 (join) + 加 (add)" },
      { cn: "活动", py: "huódòng", en: "activity / event", tip: "活 (live) + 动 (move)" },
      { cn: "热闹", py: "rènao", en: "lively / bustling", tip: "热 (hot) + 闹 (noisy)" },
      { cn: "聊天", py: "liáo tiān", en: "to chat", tip: "朋友一起聊天" },
      { cn: "开心", py: "kāixīn", en: "happy", tip: "玩得很开心 = had a great time" }
    ],
    dialogue: [
      { who: "bot", cn: "周末我邀请了几个朋友来家里玩。", en: "I invited a few friends over this weekend." },
      { who: "you", cn: "你也会参加吗？", en: "Will you also join?" },
      { who: "bot", cn: "当然，我是主人。有很多活动。", en: "Of course, I'm the host. There are many activities." },
      { who: "you", cn: "一定会很热闹吧？", en: "It'll be very lively, right?" },
      { who: "bot", cn: "对，我们一起聊天，吃东西，很开心。", en: "Yes, we'll chat and eat together, very happy." },
      { who: "you", cn: "我也想去！", en: "I want to go too!" },
      { who: "bot", cn: "当然欢迎你！", en: "You're certainly welcome!" }
    ]
  },

  // ============================
  // HSK 3: Health & Fitness (124-128)
  // ============================
  {
    title: "减肥计划 - Weight Loss Plan",
    level: "HSK 3",
    icon: "fa-weight-scale",
    words: [
      { cn: "减肥", py: "jiǎn féi", en: "to lose weight", tip: "减 (reduce) + 肥 (fat)" },
      { cn: "体重", py: "tǐzhòng", en: "body weight", tip: "体 (body) + 重 (weight)" },
      { cn: "瘦", py: "shòu", en: "thin / slim", tip: "Antonym: 胖 (fat)" },
      { cn: "胖", py: "pàng", en: "fat / plump", tip: "太胖了 = too fat" },
      { cn: "卡路里", py: "kǎlùlǐ", en: "calorie", tip: "低卡路里 = low calorie" },
      { cn: "效果", py: "xiàoguǒ", en: "result / effect", tip: "减肥效果 = weight loss effect" }
    ],
    dialogue: [
      { who: "bot", cn: "最近我胖了，想减肥。", en: "I gained weight recently, want to lose it." },
      { who: "you", cn: "你可以控制饮食，计算卡路里。", en: "You can control your diet and count calories." },
      { who: "bot", cn: "还要多运动才能瘦下来。", en: "Also need to exercise more to get slim." },
      { who: "you", cn: "对，少吃多运动效果最好。", en: "Right, eat less and exercise more gives the best results." },
      { who: "bot", cn: "我打算每天跑步半小时。", en: "I plan to run half an hour every day." },
      { who: "you", cn: "坚持三个月肯定能看到效果。", en: "Persist for three months and you'll definitely see results." },
      { who: "bot", cn: "好，我一定要瘦下去！", en: "Okay, I must get slim!" }
    ]
  },
  {
    title: "健身房 - Gym",
    level: "HSK 3",
    icon: "fa-dumbbell",
    words: [
      { cn: "健身房", py: "jiànshēn fáng", en: "gym / fitness center", tip: "健身 (fitness) + 房 (room)" },
      { cn: "锻炼", py: "duànliàn", en: "to exercise", tip: "锻 (forge) + 炼 (refine)" },
      { cn: "肌肉", py: "jīròu", en: "muscle", tip: "肌 (muscle) + 肉 (meat)" },
      { cn: "力量", py: "lìliàng", en: "strength", tip: "力 (power) + 量 (amount)" },
      { cn: "教练", py: "jiàoliàn", en: "coach / trainer", tip: "教 (teach) + 练 (train)" },
      { cn: "会员", py: "huìyuán", en: "member", tip: "会 (association) + 员 (member)" }
    ],
    dialogue: [
      { who: "bot", cn: "你平时去哪里锻炼？", en: "Where do you usually exercise?" },
      { who: "you", cn: "我办了一张健身房的会员卡。", en: "I got a gym membership card." },
      { who: "bot", cn: "健身房的教练专业吗？", en: "Are the gym trainers professional?" },
      { who: "you", cn: "很专业，他们教我怎么练肌肉。", en: "Very professional, they teach me how to build muscle." },
      { who: "bot", cn: "我力量不够，需要练一练。", en: "I don't have enough strength, need to train." },
      { who: "you", cn: "你跟我一起去吧，每周三次。", en: "Come with me, three times a week." },
      { who: "bot", cn: "好，我也要开始锻炼了。", en: "Okay, I need to start exercising too." }
    ]
  },
  {
    title: "健康饮食 - Healthy Diet",
    level: "HSK 3",
    icon: "fa-carrot",
    words: [
      { cn: "蛋白质", py: "dànbáizhì", en: "protein", tip: "蛋 (egg) + 白 (white) + 质 (substance)" },
      { cn: "维生素", py: "wéishēngsù", en: "vitamin", tip: "维 (maintain) + 生 (life) + 素 (element)" },
      { cn: "沙拉", py: "shālā", en: "salad", tip: "Transliteration" },
      { cn: "果汁", py: "guǒzhī", en: "fruit juice", tip: "果 (fruit) + 汁 (juice)" },
      { cn: "有机", py: "yǒujī", en: "organic", tip: "有 (have) + 机 (machine)" },
      { cn: "均衡", py: "jūnhéng", en: "balanced", tip: "均 (equal) + 衡 (balance)" }
    ],
    dialogue: [
      { who: "bot", cn: "吃什么最健康？", en: "What's the healthiest to eat?" },
      { who: "you", cn: "要均衡饮食，多吃蛋白质和维生素。", en: "Need a balanced diet, eat more protein and vitamins." },
      { who: "bot", cn: "我午饭经常吃沙拉和果汁。", en: "I often have salad and juice for lunch." },
      { who: "you", cn: "有机蔬菜和水果对健康更好。", en: "Organic vegetables and fruits are better for health." },
      { who: "bot", cn: "健康的饮食习惯让我精神很好。", en: "Healthy eating habits make me feel great." },
      { who: "you", cn: "对，健康的身体是最重要的。", en: "Right, a healthy body is the most important." }
    ]
  },
  {
    title: "运动比赛 - Sports Competition",
    level: "HSK 3",
    icon: "fa-trophy",
    words: [
      { cn: "比赛", py: "bǐsài", en: "competition / match", tip: "比 (compare) + 赛 (contest)" },
      { cn: "输", py: "shū", en: "to lose", tip: "输了 = lost the game" },
      { cn: "赢", py: "yíng", en: "to win", tip: "赢了 = won the game" },
      { cn: "冠军", py: "guànjūn", en: "champion", tip: "冠 (crown) + 军 (army)" },
      { cn: "观众", py: "guānzhòng", en: "audience / spectator", tip: "观 (watch) + 众 (crowd)" },
      { cn: "加油", py: "jiāyóu", en: "to cheer / go for it", tip: "加 (add) + 油 (oil)" }
    ],
    dialogue: [
      { who: "bot", cn: "今晚有篮球比赛，你想看吗？", en: "There's a basketball match tonight, do you want to watch?" },
      { who: "you", cn: "想！哪两个队比赛？", en: "Yes! Which two teams are playing?" },
      { who: "bot", cn: "中国队对美国队，一定很精彩。", en: "China vs USA, it'll be exciting." },
      { who: "you", cn: "你觉得谁能赢？", en: "Who do you think will win?" },
      { who: "bot", cn: "中国队最近状态很好，可能赢。", en: "China's team has been in good form, they might win." },
      { who: "you", cn: "我们一起去当观众，给他们加油！", en: "Let's go as spectators and cheer for them!" },
      { who: "bot", cn: "好，希望中国队得冠军！", en: "Okay, hope China wins the championship!" }
    ]
  },
  {
    title: "身体检查 - Health Checkup",
    level: "HSK 3",
    icon: "fa-stethoscope",
    words: [
      { cn: "体检", py: "tǐjiǎn", en: "health checkup", tip: "体 (body) + 检 (check)" },
      { cn: "结果", py: "jiéguǒ", en: "result / outcome", tip: "结 (conclude) + 果 (fruit)" },
      { cn: "正常", py: "zhèngcháng", en: "normal", tip: "正 (correct) + 常 (common)" },
      { cn: "血压", py: "xuèyā", en: "blood pressure", tip: "血 (blood) + 压 (pressure)" },
      { cn: "血糖", py: "xuètáng", en: "blood sugar", tip: "血 (blood) + 糖 (sugar)" },
      { cn: "建议", py: "jiànyì", en: "advice / suggestion", tip: "医生的建议 = doctor's advice" }
    ],
    dialogue: [
      { who: "bot", cn: "你每年都做体检吗？", en: "Do you get a health checkup every year?" },
      { who: "you", cn: "对，我上周刚做了体检。", en: "Yes, I just had a checkup last week." },
      { who: "bot", cn: "结果怎么样？一切都正常吗？", en: "How were the results? Everything normal?" },
      { who: "you", cn: "血压和血糖都正常，医生说我很健康。", en: "Blood pressure and blood sugar are normal, the doctor says I'm healthy." },
      { who: "bot", cn: "那太好了。我也应该去体检了。", en: "That's great. I should go for a checkup too." },
      { who: "you", cn: "定期体检很重要，可以早发现问题。", en: "Regular checkups are important, can catch problems early." },
      { who: "bot", cn: "谢谢你的建议。", en: "Thanks for the advice." }
    ]
  },

  // ============================
  // HSK 3: Environment (129-133)
  // ============================
  {
    title: "环境保护 - Environmental Protection",
    level: "HSK 3",
    icon: "fa-leaf",
    words: [
      { cn: "环境", py: "huánjìng", en: "environment", tip: "环 (ring) + 境 (boundary)" },
      { cn: "保护", py: "bǎohù", en: "to protect", tip: "保 (protect) + 护 (defend)" },
      { cn: "空气", py: "kōngqì", en: "air", tip: "空 (empty) + 气 (air)" },
      { cn: "污染", py: "wūrǎn", en: "pollution", tip: "污 (dirty) + 染 (contaminate)" },
      { cn: "垃圾", py: "lājī", en: "trash / garbage", tip: "垃圾分类 = trash sorting" },
      { cn: "回收", py: "huíshōu", en: "to recycle", tip: "回 (return) + 收 (collect)" }
    ],
    dialogue: [
      { who: "bot", cn: "环境问题越来越严重了。", en: "Environmental problems are becoming more serious." },
      { who: "you", cn: "对，空气污染和垃圾问题都需要解决。", en: "Yes, air pollution and trash problems both need to be solved." },
      { who: "bot", cn: "我们可以做什么来保护环境？", en: "What can we do to protect the environment?" },
      { who: "you", cn: "少用塑料袋，做好垃圾分类和回收。", en: "Use fewer plastic bags, sort and recycle trash properly." },
      { who: "bot", cn: "还要减少开车，多坐公交。", en: "Also reduce driving, take more buses." },
      { who: "you", cn: "每个人做一点，环境就会变好。", en: "If everyone does a little, the environment will improve." },
      { who: "bot", cn: "保护环境，人人有责。", en: "Protecting the environment is everyone's responsibility." }
    ]
  },
  {
    title: "种树 - Planting Trees",
    level: "HSK 3",
    icon: "fa-tree",
    words: [
      { cn: "种树", py: "zhòng shù", en: "to plant trees", tip: "种 (plant) + 树 (tree)" },
      { cn: "绿色", py: "lǜsè", en: "green", tip: "绿 (green) + 色 (color)" },
      { cn: "森林", py: "sēnlín", en: "forest", tip: "森 (woods) + 林 (grove)" },
      { cn: "氧气", py: "yǎngqì", en: "oxygen", tip: "氧 (oxygen) + 气 (gas)" },
      { cn: "绿化", py: "lǜhuà", en: "greening / to make green", tip: "绿 (green) + 化 (transform)" },
      { cn: "地球", py: "dìqiú", en: "the Earth", tip: "地 (ground) + 球 (ball)" }
    ],
    dialogue: [
      { who: "bot", cn: "明天是植树节，我们去种树吧。", en: "Tomorrow is Arbor Day, let's go plant trees." },
      { who: "you", cn: "好主意！多种树可以绿化环境。", en: "Good idea! Planting more trees can green the environment." },
      { who: "bot", cn: "森林可以提供氧气，对地球很好。", en: "Forests can provide oxygen, which is great for the Earth." },
      { who: "you", cn: "我们每个人种一棵，就会变成一片森林。", en: "If each of us plants one, it'll become a forest." },
      { who: "bot", cn: "绿色让城市更美丽。", en: "Green makes the city more beautiful." },
      { who: "you", cn: "对，我们要让地球更绿。", en: "Right, we need to make the Earth greener." },
      { who: "bot", cn: "保护环境从小事做起。", en: "Protecting the environment starts with small things." }
    ]
  },
  {
    title: "干净的城市 - Clean City",
    level: "HSK 3",
    icon: "fa-broom",
    words: [
      { cn: "干净", py: "gānjìng", en: "clean", tip: "打扫干净 = sweep clean" },
      { cn: "卫生", py: "wèishēng", en: "hygiene / sanitation", tip: "卫 (guard) + 生 (life)" },
      { cn: "垃圾桶", py: "lājī tǒng", en: "trash bin", tip: "垃圾 (trash) + 桶 (bucket)" },
      { cn: "扫地", py: "sǎo dì", en: "to sweep the floor", tip: "扫 (sweep) + 地 (floor)" },
      { cn: "乱扔", py: "luàn rēng", en: "to litter", tip: "乱 (messy) + 扔 (throw)" },
      { cn: "公共", py: "gōnggòng", en: "public", tip: "公 (public) + 共 (common)" }
    ],
    dialogue: [
      { who: "bot", cn: "这个城市真干净！", en: "This city is really clean!" },
      { who: "you", cn: "因为大家都很注意卫生，不乱扔垃圾。", en: "Because everyone pays attention to hygiene and doesn't litter." },
      { who: "bot", cn: "到处都有垃圾桶，很方便。", en: "There are trash bins everywhere, very convenient." },
      { who: "you", cn: "清洁工每天扫地，保持公共区域干净。", en: "Cleaners sweep every day to keep public areas clean." },
      { who: "bot", cn: "干净的环境让人心情愉快。", en: "A clean environment makes people happy." },
      { who: "you", cn: "所以每个人都要爱护环境。", en: "So everyone must take care of the environment." },
      { who: "bot", cn: "从小事做起，城市会更美。", en: "Start with small things, and the city will be more beautiful." }
    ]
  },
  {
    title: "节约能源 - Saving Energy",
    level: "HSK 3",
    icon: "fa-lightbulb",
    words: [
      { cn: "节约", py: "jiéyuē", en: "to save / economize", tip: "节 (save) + 约 (restrain)" },
      { cn: "能源", py: "néngyuán", en: "energy", tip: "能 (energy) + 源 (source)" },
      { cn: "水", py: "shuǐ", en: "water", tip: "节约用水 = save water" },
      { cn: "电", py: "diàn", en: "electricity", tip: "节约用电 = save electricity" },
      { cn: "关掉", py: "guān diào", en: "to turn off", tip: "关掉灯 = turn off the light" },
      { cn: "浪费", py: "làngfèi", en: "to waste", tip: "浪 (wave) + 费 (cost)" }
    ],
    dialogue: [
      { who: "bot", cn: "我们应该节约能源。", en: "We should save energy." },
      { who: "you", cn: "对，离开房间要关掉灯和空调。", en: "Right, turn off lights and AC when leaving the room." },
      { who: "bot", cn: "水也要节约，不能浪费。", en: "Water should also be saved, can't waste it." },
      { who: "you", cn: "洗菜的水可以用来浇花。", en: "Water used for washing vegetables can be used to water flowers." },
      { who: "bot", cn: "你做得很好，每个人都要这样做。", en: "You're doing well, everyone should do this." },
      { who: "you", cn: "地球的资源有限，我们要珍惜。", en: "The Earth's resources are limited, we must cherish them." },
      { who: "bot", cn: "节约能源，保护地球。", en: "Save energy, protect the Earth." }
    ]
  },
  {
    title: "环境变化 - Environmental Changes",
    level: "HSK 3",
    icon: "fa-temperature-high",
    words: [
      { cn: "变化", py: "biànhuà", en: "change", tip: "气候变化 = climate change" },
      { cn: "全球", py: "quánqiú", en: "global", tip: "全 (whole) + 球 (ball)" },
      { cn: "温度", py: "wēndù", en: "temperature", tip: "全球变暖 = global warming" },
      { cn: "天气", py: "tiānqì", en: "weather", tip: "极端天气 = extreme weather" },
      { cn: "灾难", py: "zāinàn", en: "disaster", tip: "灾 (calamity) + 难 (difficulty)" },
      { cn: "意识", py: "yìshí", en: "awareness / consciousness", tip: "意 (idea) + 识 (know)" }
    ],
    dialogue: [
      { who: "bot", cn: "全球气候在变暖，天气变化很大。", en: "The global climate is warming, weather changes a lot." },
      { who: "you", cn: "对，最近经常有极端天气和灾难。", en: "Yes, there have been frequent extreme weather and disasters lately." },
      { who: "bot", cn: "人类的活动对环境造成了很大影响。", en: "Human activities have had a big impact on the environment." },
      { who: "you", cn: "所以我们要提高环保意识。", en: "So we need to raise environmental awareness." },
      { who: "bot", cn: "每个人都付出努力，就能改变。", en: "If everyone makes an effort, we can make changes." },
      { who: "you", cn: "从自己做起，保护我们的地球。", en: "Start with ourselves to protect our Earth." },
      { who: "bot", cn: "希望未来的环境越来越好。", en: "Hope the environment gets better and better in the future." }
    ]
  },

  // ============================
  // HSK 3: Relationships (134-138)
  // ============================
  {
    title: "爱情 - Love",
    level: "HSK 3",
    icon: "fa-heart",
    words: [
      { cn: "爱情", py: "àiqíng", en: "love / romance", tip: "爱 (love) + 情 (feeling)" },
      { cn: "喜欢", py: "xǐhuān", en: "to like", tip: "我对你有好感" },
      { cn: "约会", py: "yuēhuì", en: "date / appointment", tip: "约 (arrange) + 会 (meet)" },
      { cn: "浪漫", py: "làngmàn", en: "romantic", tip: "浪 (wave) + 漫 (overflow)" },
      { cn: "关系", py: "guānxì", en: "relationship", tip: "男女朋友关系" },
      { cn: "幸福", py: "xìngfú", en: "happiness / happy", tip: "祝你们幸福" }
    ],
    dialogue: [
      { who: "bot", cn: "你有男朋友吗？", en: "Do you have a boyfriend?" },
      { who: "you", cn: "还没有，我在等待对的人。", en: "Not yet, I'm waiting for the right person." },
      { who: "bot", cn: "爱情需要缘分，不能着急。", en: "Love needs fate, can't rush it." },
      { who: "you", cn: "对，我希望有一段浪漫的爱情。", en: "Right, I hope for a romantic love." },
      { who: "bot", cn: "两个人在一起要互相理解和关心。", en: "Two people together need to understand and care for each other." },
      { who: "you", cn: "是，幸福的感情需要经营。", en: "Yes, a happy relationship needs nurturing." },
      { who: "bot", cn: "你会找到属于你的幸福的。", en: "You'll find your happiness." }
    ]
  },
  {
    title: "关心 - Caring For Others",
    level: "HSK 3",
    icon: "fa-hand-holding-heart",
    words: [
      { cn: "关心", py: "guānxīn", en: "to care about", tip: "关 (concern) + 心 (heart)" },
      { cn: "照顾", py: "zhàogù", en: "to take care of", tip: "照顾老人 = care for elders" },
      { cn: "温暖", py: "wēnnuǎn", en: "warm / warmth", tip: "温暖人心 = warm people's hearts" },
      { cn: "担心", py: "dānxīn", en: "to worry", tip: "担 (carry) + 心 (heart)" },
      { cn: "安慰", py: "ānwèi", en: "to comfort", tip: "安 (peace) + 慰 (console)" },
      { cn: "信任", py: "xìnrèn", en: "to trust", tip: "信 (believe) + 任 (rely)" }
    ],
    dialogue: [
      { who: "bot", cn: "我的朋友最近心情不好。", en: "My friend has been in a bad mood lately." },
      { who: "you", cn: "你应该多关心他，安慰他。", en: "You should care about him more and comfort him." },
      { who: "bot", cn: "我每天打电话给他，让他感到温暖。", en: "I call him every day to make him feel warm." },
      { who: "you", cn: "朋友之间要互相信任和支持。", en: "Friends need to trust and support each other." },
      { who: "bot", cn: "我有点担心他，希望他快点好起来。", en: "I'm a bit worried about him, hope he gets better soon." },
      { who: "you", cn: "有你的关心，他一定会好的。", en: "With your care, he'll definitely get better." },
      { who: "bot", cn: "我会一直照顾他的感受。", en: "I'll always take care of his feelings." }
    ]
  },
  {
    title: "吵架 - Arguments",
    level: "HSK 3",
    icon: "fa-face-angry",
    words: [
      { cn: "吵架", py: "chǎo jià", en: "to argue / quarrel", tip: "吵 (noisy) + 架 (frame)" },
      { cn: "生气", py: "shēng qì", en: "to be angry", tip: "生 (produce) + 气 (air)" },
      { cn: "道歉", py: "dào qiàn", en: "to apologize", tip: "道 (say) + 歉 (sorry)" },
      { cn: "原谅", py: "yuánliàng", en: "to forgive", tip: "原 (original) + 谅 (understand)" },
      { cn: "沟通", py: "gōutōng", en: "to communicate", tip: "沟 (ditch) + 通 (through)" },
      { cn: "解决", py: "jiějué", en: "to solve / resolve", tip: "解 (untie) + 决 (decide)" }
    ],
    dialogue: [
      { who: "bot", cn: "昨天我和朋友吵架了。", en: "Yesterday I had an argument with my friend." },
      { who: "you", cn: "为什么生气？", en: "Why were you angry?" },
      { who: "bot", cn: "为了一点小事，现在我很后悔。", en: "Over something small, now I regret it." },
      { who: "you", cn: "你应该跟他道歉，请求原谅。", en: "You should apologize to him and ask for forgiveness." },
      { who: "bot", cn: "沟通很重要，我想解决问题。", en: "Communication is important, I want to solve the problem." },
      { who: "you", cn: "吵架伤感情，有话好好说。", en: "Arguments hurt feelings, talk things through nicely." },
      { who: "bot", cn: "你说得对，我现在就去道歉。", en: "You're right, I'll go apologize now." }
    ]
  },
  {
    title: "道歉 - Apologizing",
    level: "HSK 3",
    icon: "fa-person-praying",
    words: [
      { cn: "抱歉", py: "bàoqiàn", en: "I'm sorry / regret", tip: "抱 (hold) + 歉 (sorry)" },
      { cn: "理解", py: "lǐjiě", en: "to understand", tip: "理 (reason) + 解 (untie)" },
      { cn: "态度", py: "tàidù", en: "attitude", tip: "态 (manner) + 度 (degree)" },
      { cn: "诚恳", py: "chéngkěn", en: "sincere / earnest", tip: "诚 (honest) + 恳 (earnest)" },
      { cn: "误会", py: "wùhuì", en: "misunderstanding", tip: "误 (mistake) + 会 (understand)" },
      { cn: "和好", py: "hé hǎo", en: "to reconcile", tip: "和 (peace) + 好 (good)" }
    ],
    dialogue: [
      { who: "bot", cn: "上次的事我很抱歉。", en: "I'm very sorry about what happened last time." },
      { who: "you", cn: "没关系，我能理解你的心情。", en: "It's okay, I can understand your feelings." },
      { who: "bot", cn: "我的态度不好，我诚恳道歉。", en: "My attitude was bad, I sincerely apologize." },
      { who: "you", cn: "那是一个误会，不用再放在心上了。", en: "It was a misunderstanding, no need to worry about it anymore." },
      { who: "bot", cn: "我们还是好朋友，对吗？", en: "We're still good friends, right?" },
      { who: "you", cn: "当然，以后有事好好沟通。", en: "Of course, let's communicate well from now on." },
      { who: "bot", cn: "谢谢你原谅我。", en: "Thank you for forgiving me." }
    ]
  },
  {
    title: "信任 - Trust",
    level: "HSK 3",
    icon: "fa-handshake",
    words: [
      { cn: "信任", py: "xìnrèn", en: "trust", tip: "信任是友谊的基础" },
      { cn: "诚实", py: "chéngshí", en: "honest / honesty", tip: "诚 (honest) + 实 (real)" },
      { cn: "真心", py: "zhēnxīn", en: "sincere / wholehearted", tip: "真 (true) + 心 (heart)" },
      { cn: "友情", py: "yǒuqíng", en: "friendship", tip: "友 (friend) + 情 (feeling)" },
      { cn: "忠诚", py: "zhōngchéng", en: "loyal / faithful", tip: "忠 (loyal) + 诚 (honest)" },
      { cn: "珍惜", py: "zhēnxī", en: "to cherish / value", tip: "珍 (precious) + 惜 (cherish)" }
    ],
    dialogue: [
      { who: "bot", cn: "朋友之间最重要的是信任。", en: "The most important thing between friends is trust." },
      { who: "you", cn: "对，没有信任就没有真正的友情。", en: "Right, without trust there's no true friendship." },
      { who: "bot", cn: "我珍惜每一个真心的朋友。", en: "I cherish every sincere friend." },
      { who: "you", cn: "对朋友要诚实，互相信任。", en: "Be honest with friends, trust each other." },
      { who: "bot", cn: "忠诚的友谊很难得。", en: "Loyal friendship is rare." },
      { who: "you", cn: "所以我们要珍惜身边的朋友。", en: "So we should cherish the friends around us." },
      { who: "bot", cn: "谢谢你对我的信任。", en: "Thank you for trusting me." }
    ]
  },

  // ============================
  // HSK 3: Technology (139-143)
  // ============================
  {
    title: "手机 - Mobile Phones",
    level: "HSK 3",
    icon: "fa-mobile-screen",
    words: [
      { cn: "手机", py: "shǒujī", en: "mobile phone", tip: "手 (hand) + 机 (machine)" },
      { cn: "充电", py: "chōng diàn", en: "to charge battery", tip: "充 (fill) + 电 (electricity)" },
      { cn: "电池", py: "diànchí", en: "battery", tip: "电 (electric) + 池 (pool)" },
      { cn: "流量", py: "liúliàng", en: "data / data plan", tip: "流 (flow) + 量 (amount)" },
      { cn: "信号", py: "xìnhào", en: "signal", tip: "信 (signal) + 号 (code)" },
      { cn: "屏幕", py: "píngmù", en: "screen", tip: "屏 (screen) + 幕 (curtain)" }
    ],
    dialogue: [
      { who: "bot", cn: "我的手机没电了，有充电器吗？", en: "My phone is dead, do you have a charger?" },
      { who: "you", cn: "有，在这里。你的电池耗电快吗？", en: "Yes, here. Does your battery drain fast?" },
      { who: "bot", cn: "有点快，而且屏幕碎了。", en: "A bit fast, and the screen is cracked." },
      { who: "you", cn: "你应该换一个新手机了。", en: "You should get a new phone." },
      { who: "bot", cn: "这个手机信号也不太好。", en: "The signal on this phone isn't great either." },
      { who: "you", cn: "用流量上网的话，信号很重要。", en: "For using data to go online, signal is important." },
      { who: "bot", cn: "是，我打算下个月买新的。", en: "Yes, I plan to buy a new one next month." }
    ]
  },
  {
    title: "电脑 - Computers",
    level: "HSK 3",
    icon: "fa-laptop",
    words: [
      { cn: "电脑", py: "diànnǎo", en: "computer", tip: "电 (electric) + 脑 (brain)" },
      { cn: "键盘", py: "jiànpán", en: "keyboard", tip: "键 (key) + 盘 (tray)" },
      { cn: "鼠标", py: "shǔbiāo", en: "mouse", tip: "鼠 (mouse) + 标 (mark)" },
      { cn: "软件", py: "ruǎnjiàn", en: "software", tip: "软 (soft) + 件 (item)" },
      { cn: "安装", py: "ānzhuāng", en: "to install", tip: "安 (set) + 装 (install)" },
      { cn: "系统", py: "xìtǒng", en: "system", tip: "操作系统 = operating system" }
    ],
    dialogue: [
      { who: "bot", cn: "你的电脑装了什么软件？", en: "What software do you have installed on your computer?" },
      { who: "you", cn: "我安装了办公软件和设计软件。", en: "I installed office software and design software." },
      { who: "bot", cn: "这个键盘很好用。", en: "This keyboard is very nice to use." },
      { who: "you", cn: "对，我还配了一个无线鼠标。", en: "Yes, I also got a wireless mouse." },
      { who: "bot", cn: "你的电脑系统快吗？", en: "Is your computer system fast?" },
      { who: "you", cn: "挺快的，用了两年了还很好。", en: "Pretty fast, still working well after two years." },
      { who: "bot", cn: "我也要换一个好用的电脑。", en: "I should get a good computer too." }
    ]
  },
  {
    title: "网络 - Internet",
    level: "HSK 3",
    icon: "fa-wifi",
    words: [
      { cn: "网络", py: "wǎngluò", en: "internet / network", tip: "网 (net) + 络 (network)" },
      { cn: "游戏", py: "yóuxì", en: "game", tip: "玩网络游戏 = play online games" },
      { cn: "微信", py: "Wēixìn", en: "WeChat", tip: "微 (micro) + 信 (message)" },
      { cn: "支付", py: "zhīfù", en: "to pay", tip: "支 (pay) + 付 (hand over)" },
      { cn: "密码", py: "mìmǎ", en: "password / code", tip: "密 (secret) + 码 (code)" },
      { cn: "账号", py: "zhànghào", en: "account", tip: "帐 (account) + 号 (number)" }
    ],
    dialogue: [
      { who: "bot", cn: "你用微信支付吗？", en: "Do you use WeChat Pay?" },
      { who: "you", cn: "用，现在出门都不用带钱包了。", en: "Yes, now I don't need to carry a wallet when going out." },
      { who: "bot", cn: "网络真是太方便了。", en: "The internet is so convenient." },
      { who: "you", cn: "对，但是要注意保护密码和账号。", en: "Yes, but pay attention to protecting passwords and accounts." },
      { who: "bot", cn: "你玩网络游戏吗？", en: "Do you play online games?" },
      { who: "you", cn: "有时候玩，但是不会花太多时间。", en: "Sometimes, but I don't spend too much time on it." },
      { who: "bot", cn: "适度娱乐就好了。", en: "Moderate entertainment is fine." }
    ]
  },
  {
    title: "游戏 - Video Games",
    level: "HSK 3",
    icon: "fa-gamepad",
    words: [
      { cn: "游戏机", py: "yóuxì jī", en: "game console", tip: "游戏 (game) + 机 (machine)" },
      { cn: "玩家", py: "wánjiā", en: "player / gamer", tip: "玩 (play) + 家 (expert)" },
      { cn: "下载", py: "xiàzài", en: "to download", tip: "下载游戏 = download games" },
      { cn: "更新", py: "gēngxīn", en: "to update", tip: "更 (renew) + 新 (new)" },
      { cn: "任务", py: "rènwù", en: "task / mission", tip: "任 (duty) + 务 (task)" },
      { cn: "等级", py: "děngjí", en: "level / rank", tip: "等 (class) + 级 (grade)" }
    ],
    dialogue: [
      { who: "bot", cn: "你最近玩什么游戏？", en: "What games have you been playing lately?" },
      { who: "you", cn: "我在玩一个新游戏，画面很漂亮。", en: "I'm playing a new game, the graphics are beautiful." },
      { who: "bot", cn: "游戏需要更新吗？", en: "Does the game need updates?" },
      { who: "you", cn: "需要，最近有一次大更新。", en: "Yes, there was a major update recently." },
      { who: "bot", cn: "你现在的等级是多少？", en: "What's your current level?" },
      { who: "you", cn: "五十级了，还在做任务升级。", en: "Level 50, still doing quests to level up." },
      { who: "bot", cn: "下载要很久吗？我也想玩。", en: "Does the download take long? I want to play too." },
      { who: "you", cn: "网络好的话，十几分钟就好了。", en: "If the internet is good, about ten minutes." }
    ]
  },
  {
    title: "社交媒体 - Social Media",
    level: "HSK 3",
    icon: "fa-share-nodes",
    words: [
      { cn: "朋友圈", py: "péngyou quān", en: "Moments / social feed", tip: "朋友 (friend) + 圈 (circle)" },
      { cn: "点赞", py: "diǎn zàn", en: "to like / thumbs up", tip: "点 (click) + 赞 (praise)" },
      { cn: "评论", py: "pínglùn", en: "to comment / review", tip: "评 (evaluate) + 论 (discuss)" },
      { cn: "分享", py: "fēnxiǎng", en: "to share", tip: "分享照片 = share photos" },
      { cn: "关注", py: "guānzhù", en: "to follow / attention", tip: "关 (concern) + 注 (focus)" },
      { cn: "粉丝", py: "fěnsī", en: "fan / follower", tip: "粉 (powder) + 丝 (silk)" }
    ],
    dialogue: [
      { who: "bot", cn: "你发朋友圈了吗？", en: "Did you post on Moments?" },
      { who: "you", cn: "发了，我分享了一些旅行照片。", en: "Yes, I shared some travel photos." },
      { who: "bot", cn: "我看到好多人都给你点赞和评论了。", en: "I saw many people gave you likes and comments." },
      { who: "you", cn: "是，还有几个新粉丝关注了我。", en: "Yes, a few new followers also followed me." },
      { who: "bot", cn: "社交网络让我们更容易联系。", en: "Social networks make it easier for us to connect." },
      { who: "you", cn: "对，但是也要注意不要花太多时间。", en: "Right, but also need to be careful not to spend too much time." },
      { who: "bot", cn: "适度使用就好。", en: "Moderate use is fine." }
    ]
  },

  // ============================
  // HSK 3: Feelings & Opinions (144-147)
  // ============================
  {
    title: "高兴 - Happiness",
    level: "HSK 3",
    icon: "fa-face-smile",
    words: [
      { cn: "高兴", py: "gāoxìng", en: "happy / glad", tip: "高 (high) + 兴 (excited)" },
      { cn: "难过", py: "nánguò", en: "sad / upset", tip: "难 (hard) + 过 (pass)" },
      { cn: "担心", py: "dānxīn", en: "to worry", tip: "你放心 = don't worry" },
      { cn: "相信", py: "xiāngxìn", en: "to believe", tip: "相 (each) + 信 (trust)" },
      { cn: "当然", py: "dāngrán", en: "of course", tip: "当 (proper) + 然 (so)" },
      { cn: "心情", py: "xīnqíng", en: "mood / feelings", tip: "心 (heart) + 情 (feeling)" }
    ],
    dialogue: [
      { who: "bot", cn: "你今天心情怎么样？", en: "How is your mood today?" },
      { who: "you", cn: "很高兴，因为考试通过了！", en: "Very happy, because I passed the exam!" },
      { who: "bot", cn: "我就相信你一定能通过。", en: "I believed all along that you could pass." },
      { who: "you", cn: "当然，我复习了好久。", en: "Of course, I reviewed for a long time." },
      { who: "bot", cn: "之前你还有点担心吧？", en: "You were a bit worried before, right?" },
      { who: "you", cn: "有一点难过和紧张，不过现在好了。", en: "A bit sad and nervous, but it's fine now." },
      { who: "bot", cn: "高兴的事要和朋友分享！", en: "Happy things should be shared with friends!" }
    ]
  },
  {
    title: "难过的时候 - When Feeling Down",
    level: "HSK 3",
    icon: "fa-face-sad-tear",
    words: [
      { cn: "难过", py: "nánguò", en: "sad / upset", tip: "心烦意乱 = upset" },
      { cn: "哭", py: "kū", en: "to cry", tip: "别哭了 = don't cry" },
      { cn: "微笑", py: "wēixiào", en: "to smile", tip: "微 (slight) + 笑 (laugh)" },
      { cn: "积极", py: "jījí", en: "positive / active", tip: "积 (accumulate) + 极 (extreme)" },
      { cn: "面对", py: "miànduì", en: "to face / confront", tip: "面 (face) + 对 (toward)" },
      { cn: "希望", py: "xīwàng", en: "hope / to wish", tip: "希 (rare) + 望 (look)" }
    ],
    dialogue: [
      { who: "bot", cn: "你看起来很难过，怎么了？", en: "You look sad, what's wrong?" },
      { who: "you", cn: "我养的小狗不见了，我哭了好久。", en: "My little dog is missing, I cried for a long time." },
      { who: "bot", cn: "不要难过，它可能自己会回来。", en: "Don't be sad, it might come back on its own." },
      { who: "you", cn: "希望如此，我很难面对这件事。", en: "I hope so, it's hard for me to face this." },
      { who: "bot", cn: "要保持积极的心情，笑一笑。", en: "Keep a positive mood, give a smile." },
      { who: "you", cn: "嗯，我要积极一点。谢谢你安慰我。", en: "Mm, I need to be more positive. Thanks for comforting me." },
      { who: "bot", cn: "微笑面对生活，一切都会好的。", en: "Smile and face life, everything will be fine." }
    ]
  },
  {
    title: "意见不同 - Different Opinions",
    level: "HSK 3",
    icon: "fa-comments",
    words: [
      { cn: "意见", py: "yìjiàn", en: "opinion / view", tip: "意 (idea) + 见 (view)" },
      { cn: "同意", py: "tóngyì", en: "to agree", tip: "同 (same) + 意 (idea)" },
      { cn: "反对", py: "fǎnduì", en: "to oppose", tip: "反 (against) + 对 (toward)" },
      { cn: "讨论", py: "tǎolùn", en: "to discuss", tip: "讨 (discuss) + 论 (debate)" },
      { cn: "决定", py: "juédìng", en: "to decide / decision", tip: "决 (decide) + 定 (fix)" },
      { cn: "看法", py: "kànfǎ", en: "point of view", tip: "看 (see) + 法 (method)" }
    ],
    dialogue: [
      { who: "bot", cn: "对这件事你有什么意见？", en: "What's your opinion on this matter?" },
      { who: "you", cn: "我的看法和你不太一样。", en: "My point of view is a bit different from yours." },
      { who: "bot", cn: "那我们来讨论一下。", en: "Then let's discuss it." },
      { who: "you", cn: "我同意你的部分想法，但有一点反对。", en: "I agree with some of your ideas, but I oppose one point." },
      { who: "bot", cn: "你说得也有道理，我们可以商量。", en: "What you say also makes sense, we can work it out." },
      { who: "you", cn: "最后一起做个决定吧。", en: "Let's make a decision together." },
      { who: "bot", cn: "好，互相尊重最重要。", en: "Okay, mutual respect is most important." }
    ]
  },
  {
    title: "表达感受 - Expressing Feelings",
    level: "HSK 3",
    icon: "fa-face-meh",
    words: [
      { cn: "感受", py: "gǎnshòu", en: "to feel / feeling", tip: "感 (feel) + 受 (receive)" },
      { cn: "满意", py: "mǎnyì", en: "satisfied", tip: "满 (full) + 意 (satisfaction)" },
      { cn: "失望", py: "shīwàng", en: "disappointed", tip: "失 (lose) + 望 (hope)" },
      { cn: "激动", py: "jīdòng", en: "excited / thrilling", tip: "激 (excite) + 动 (move)" },
      { cn: "平静", py: "píngjìng", en: "calm / peaceful", tip: "平 (flat) + 静 (still)" },
      { cn: "放松", py: "fàngsōng", en: "to relax", tip: "放 (let go) + 松 (loose)" }
    ],
    dialogue: [
      { who: "bot", cn: "你对自己的成绩满意吗？", en: "Are you satisfied with your results?" },
      { who: "you", cn: "有一点失望，没有达到我的目标。", en: "A bit disappointed, I didn't reach my goal." },
      { who: "bot", cn: "不要太激动，下次再努力。", en: "Don't get too worked up, try harder next time." },
      { who: "you", cn: "我现在平静多了，会继续加油。", en: "I'm much calmer now, I'll keep working hard." },
      { who: "bot", cn: "你的感受我完全能理解。", en: "I completely understand your feelings." },
      { who: "you", cn: "谢谢你，放松一下心情就好了。", en: "Thank you, just need to relax and I'll be fine." },
      { who: "bot", cn: "你是最棒的！", en: "You're the best!" }
    ]
  },

  // ============================
  // HSK 3: City Life (148-150)
  // ============================
  {
    title: "城市与乡村 - City & Countryside",
    level: "HSK 3",
    icon: "fa-city",
    words: [
      { cn: "城市", py: "chéngshì", en: "city", tip: "城 (city) + 市 (market)" },
      { cn: "博物馆", py: "bówùguǎn", en: "museum", tip: "博 (broad) + 物 (object) + 馆 (hall)" },
      { cn: "图书馆", py: "túshūguǎn", en: "library", tip: "图 (picture) + 书 (book) + 馆" },
      { cn: "超市", py: "chāoshì", en: "supermarket", tip: "超 (super) + 市 (market)" },
      { cn: "方便", py: "fāngbiàn", en: "convenient", tip: "城市生活很方便" },
      { cn: "拥挤", py: "yōngjǐ", en: "crowded", tip: "拥 (crowd) + 挤 (push)" }
    ],
    dialogue: [
      { who: "bot", cn: "你觉得城市生活怎么样？", en: "What do you think about city life?" },
      { who: "you", cn: "很方便，有博物馆、图书馆和超市。", en: "Very convenient, with museums, libraries, and supermarkets." },
      { who: "bot", cn: "但是城市太拥挤了，人很多。", en: "But the city is too crowded, many people." },
      { who: "you", cn: "是，交通也经常堵车。", en: "Yes, traffic is often jammed too." },
      { who: "bot", cn: "不过各种设施都很齐全。", en: "But all kinds of facilities are complete." },
      { who: "you", cn: "对，生活方便，机会也多。", en: "Right, life is convenient and there are many opportunities." },
      { who: "bot", cn: "各有利弊吧。", en: "Each has its pros and cons." }
    ]
  },
  {
    title: "公园 - Park Life",
    level: "HSK 3",
    icon: "fa-pagoda",
    words: [
      { cn: "散步", py: "sàn bù", en: "to take a walk", tip: "散 (scatter) + 步 (step)" },
      { cn: "打太极", py: "dǎ tàijí", en: "to practice Tai Chi", tip: "打 (do) + 太极 (Tai Chi)" },
      { cn: "广场舞", py: "guǎngchǎng wǔ", en: "square dancing", tip: "广场 (square) + 舞 (dance)" },
      { cn: "花草", py: "huā cǎo", en: "flowers and grass", tip: "花 (flower) + 草 (grass)" },
      { cn: "安静", py: "ānjìng", en: "quiet / peaceful", tip: "安 (peace) + 静 (still)" },
      { cn: "休息", py: "xiūxi", en: "to rest", tip: "在公园休息" }
    ],
    dialogue: [
      { who: "bot", cn: "你经常去公园吗？", en: "Do you often go to the park?" },
      { who: "you", cn: "去，晚饭后去公园散步很舒服。", en: "Yes, it's very comfortable to walk in the park after dinner." },
      { who: "bot", cn: "我看到老人们在打太极。", en: "I see old people practicing Tai Chi." },
      { who: "you", cn: "对，还有人在跳广场舞。", en: "Yes, some people are doing square dancing." },
      { who: "bot", cn: "公园里有很多花草，很漂亮。", en: "There are many flowers and grass in the park, very pretty." },
      { who: "you", cn: "空气也好，适合安静地休息。", en: "The air is also good, suitable for quiet rest." },
      { who: "bot", cn: "公园是城市里的好去处。", en: "Parks are great places in the city." }
    ]
  },
  {
    title: "公共交通 - Public Transport",
    level: "HSK 3",
    icon: "fa-bus-simple",
    words: [
      { cn: "地铁站", py: "dìtiě zhàn", en: "subway station", tip: "地铁 + 站 (station)" },
      { cn: "公交卡", py: "gōngjiāo kǎ", en: "bus pass / transit card", tip: "公交 (bus) + 卡 (card)" },
      { cn: "换乘", py: "huànchéng", en: "to transfer", tip: "换 (change) + 乘 (ride)" },
      { cn: "票价", py: "piàojià", en: "ticket price / fare", tip: "票 (ticket) + 价 (price)" },
      { cn: "路线图", py: "lùxiàn tú", en: "route map", tip: "路线 (route) + 图 (map)" },
      { cn: "末班车", py: "mò bān chē", en: "last train/bus", tip: "末 (last) + 班 (scheduled) + 车" }
    ],
    dialogue: [
      { who: "bot", cn: "地铁站离你家远吗？", en: "Is the subway station far from your home?" },
      { who: "you", cn: "走路五分钟就到了，很方便。", en: "It's a five-minute walk, very convenient." },
      { who: "bot", cn: "你有公交卡吗？", en: "Do you have a transit card?" },
      { who: "you", cn: "有，刷卡比买票便宜。", en: "Yes, swiping a card is cheaper than buying tickets." },
      { who: "bot", cn: "换乘复杂吗？", en: "Is the transfer complicated?" },
      { who: "you", cn: "不复杂，看路线图就知道了。", en: "Not complicated, just look at the route map." },
      { who: "bot", cn: "末班车是几点？", en: "What time is the last train?" },
      { who: "you", cn: "晚上十一点，别错过了。", en: "11 PM, don't miss it." }
    ]
  }
,
  {
    "title": "人口与城市",
    "level": "HSK 4",
    "icon": "fa-building-columns",
    "words": [
      {
        "cn": "人口",
        "py": "rénkǒu",
        "en": "population",
        "tip": "人口 is HSK 4 noun for number of people."
      },
      {
        "cn": "增长",
        "py": "zēngzhǎng",
        "en": "to grow",
        "tip": "增长 for population or economy."
      },
      {
        "cn": "城市",
        "py": "chéngshì",
        "en": "city",
        "tip": "城市 is a large urban area."
      },
      {
        "cn": "农村",
        "py": "nóngcūn",
        "en": "countryside",
        "tip": "农村 is rural area."
      },
      {
        "cn": "搬家",
        "py": "bānjiā",
        "en": "to move house",
        "tip": "搬家 is separable verb."
      },
      {
        "cn": "社区",
        "py": "shèqū",
        "en": "community",
        "tip": "社区 means neighborhood."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "你觉得城市人口越来越多是好事吗？",
        "en": "Is growing urban population good?"
      },
      {
        "who": "you",
        "cn": "不一定。城市和农村需要平衡发展。",
        "en": "Not necessarily. Balance city and countryside."
      },
      {
        "who": "bot",
        "cn": "很多人从农村搬到城市，社区变化很大。",
        "en": "Many move from rural to urban areas."
      },
      {
        "who": "you",
        "cn": "搬家不是容易的事，适应新环境需要时间。",
        "en": "Moving is not easy, adapting takes time."
      },
      {
        "who": "bot",
        "cn": "人口增长带来机会，也让房价更高。",
        "en": "Growth brings opportunities but higher prices."
      },
      {
        "who": "you",
        "cn": "每个城市都需要好好规划。",
        "en": "Every city needs good planning."
      },
      {
        "who": "bot",
        "cn": "平衡发展很重要。",
        "en": "Balanced development is important."
      }
    ]
  },
  {
    "title": "住房问题",
    "level": "HSK 4",
    "icon": "fa-building",
    "words": [
      {
        "cn": "租房子",
        "py": "zū fángzi",
        "en": "to rent",
        "tip": "租 is HSK 4 verb for renting."
      },
      {
        "cn": "房价",
        "py": "fángjià",
        "en": "housing price",
        "tip": "房价 is 房子 + 价格."
      },
      {
        "cn": "小区",
        "py": "xiǎoqū",
        "en": "residential complex",
        "tip": "小区 is gated community."
      },
      {
        "cn": "邻居",
        "py": "línjū",
        "en": "neighbor",
        "tip": "邻居 means people next door."
      },
      {
        "cn": "客厅",
        "py": "kètīng",
        "en": "living room",
        "tip": "客厅 is common area for guests."
      },
      {
        "cn": "装修",
        "py": "zhuāngxiū",
        "en": "to renovate",
        "tip": "装修 includes painting and flooring."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "你最近找到房子了吗？",
        "en": "Found an apartment?"
      },
      {
        "who": "you",
        "cn": "看了一个小区但房价太高了。",
        "en": "Saw a complex but price too high."
      },
      {
        "who": "bot",
        "cn": "你想租还是买？",
        "en": "Rent or buy?"
      },
      {
        "who": "you",
        "cn": "先租吧，客厅很大但需要装修。",
        "en": "Rent first, living room needs renovation."
      },
      {
        "who": "bot",
        "cn": "装修很麻烦。",
        "en": "Renovation is troublesome."
      },
      {
        "who": "you",
        "cn": "还要考虑邻居，不能太吵。",
        "en": "Consider neighbors."
      },
      {
        "who": "bot",
        "cn": "希望找到满意的房子。",
        "en": "Hope you find a good place."
      }
    ]
  },
  {
    "title": "社区生活",
    "level": "HSK 4",
    "icon": "fa-people-group",
    "words": [
      {
        "cn": "物业",
        "py": "wùyè",
        "en": "property mgmt",
        "tip": "物业 manages community."
      },
      {
        "cn": "保安",
        "py": "bǎoān",
        "en": "security guard",
        "tip": "保安 keeps safe."
      },
      {
        "cn": "活动",
        "py": "huódòng",
        "en": "activity",
        "tip": "活动 can be community event."
      },
      {
        "cn": "健身",
        "py": "jiànshēn",
        "en": "fitness",
        "tip": "健身 means to work out."
      },
      {
        "cn": "公园",
        "py": "gōngyuán",
        "en": "park",
        "tip": "公园 is public park."
      },
      {
        "cn": "散步",
        "py": "sànbù",
        "en": "to walk",
        "tip": "散步 is leisurely walk."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "你们小区有什么活动吗？",
        "en": "Any activities in your complex?"
      },
      {
        "who": "you",
        "cn": "物业组织大家健身或去公园散步。",
        "en": "Property organizes fitness or walks."
      },
      {
        "who": "bot",
        "cn": "保安也参加吗？",
        "en": "Do guards join?"
      },
      {
        "who": "you",
        "cn": "有时候。保安和我们关系很好。",
        "en": "Sometimes. Good relationships."
      },
      {
        "who": "bot",
        "cn": "这样的社区真好。",
        "en": "That community is nice."
      },
      {
        "who": "you",
        "cn": "可以建议物业组织活动。",
        "en": "Suggest activities."
      },
      {
        "who": "bot",
        "cn": "健康的生活需要运动。",
        "en": "Healthy life needs exercise."
      }
    ]
  },
  {
    "title": "互联网时代",
    "level": "HSK 4",
    "icon": "fa-globe",
    "words": [
      {
        "cn": "互联网",
        "py": "hùliánwǎng",
        "en": "internet",
        "tip": "互联网 is formal for internet."
      },
      {
        "cn": "网络",
        "py": "wǎngluò",
        "en": "network",
        "tip": "网络 is internet connection."
      },
      {
        "cn": "网站",
        "py": "wǎngzhàn",
        "en": "website",
        "tip": "网站 is web site."
      },
      {
        "cn": "搜索",
        "py": "sōusuǒ",
        "en": "to search",
        "tip": "搜索 to look up info."
      },
      {
        "cn": "信息",
        "py": "xìnxī",
        "en": "information",
        "tip": "信息 is data or news."
      },
      {
        "cn": "安全",
        "py": "ānquán",
        "en": "safety",
        "tip": "网络安全 is internet security."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "你每天都用互联网吗？",
        "en": "Use internet every day?"
      },
      {
        "who": "you",
        "cn": "互联网上信息太多太方便了。",
        "en": "So much info online."
      },
      {
        "who": "bot",
        "cn": "网络上也有些不安全的东西。",
        "en": "Unsafe things online too."
      },
      {
        "who": "you",
        "cn": "上网要注意安全，别打开陌生网站。",
        "en": "Be careful, don't open strange sites."
      },
      {
        "who": "bot",
        "cn": "你常用什么网站搜索？",
        "en": "What sites do you use?"
      },
      {
        "who": "you",
        "cn": "百度和其他学习网站。",
        "en": "Baidu and study sites."
      },
      {
        "who": "bot",
        "cn": "互联网让生活更好了。",
        "en": "Internet made life better."
      }
    ]
  },
  {
    "title": "智能手机",
    "level": "HSK 4",
    "icon": "fa-mobile-screen",
    "words": [
      {
        "cn": "手机",
        "py": "shǒujī",
        "en": "mobile phone",
        "tip": "手机 is common tech word."
      },
      {
        "cn": "屏幕",
        "py": "píngmù",
        "en": "screen",
        "tip": "屏幕 is display screen."
      },
      {
        "cn": "应用",
        "py": "yìngyòng",
        "en": "app",
        "tip": "应用 short for 应用程序."
      },
      {
        "cn": "下载",
        "py": "xiàzài",
        "en": "to download",
        "tip": "下载 is opposite of 上传."
      },
      {
        "cn": "聊天",
        "py": "liáotiān",
        "en": "to chat",
        "tip": "聊天 means casual talk."
      },
      {
        "cn": "支付",
        "py": "zhīfù",
        "en": "payment",
        "tip": "支付 for digital payments."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "你的手机屏幕好大！",
        "en": "Your screen is so big!"
      },
      {
        "who": "you",
        "cn": "看应用和聊天比较方便。",
        "en": "Convenient for apps and chat."
      },
      {
        "who": "bot",
        "cn": "下载新支付应用了吗？",
        "en": "Downloaded new payment app?"
      },
      {
        "who": "you",
        "cn": "手机支付太方便不用带钱包。",
        "en": "No wallet needed."
      },
      {
        "who": "bot",
        "cn": "出门只带手机就够了。",
        "en": "Only phone needed."
      },
      {
        "who": "you",
        "cn": "要注意手机安全。",
        "en": "Be careful about phone security."
      },
      {
        "who": "bot",
        "cn": "安全永远最重要。",
        "en": "Safety is always most important."
      }
    ]
  },
  {
    "title": "人工智能",
    "level": "HSK 4",
    "icon": "fa-robot",
    "words": [
      {
        "cn": "智能",
        "py": "zhìnéng",
        "en": "intelligent",
        "tip": "智能 means smart."
      },
      {
        "cn": "机器",
        "py": "jīqì",
        "en": "machine",
        "tip": "机器 is machinery."
      },
      {
        "cn": "学习",
        "py": "xuéxí",
        "en": "to learn",
        "tip": "机器学习 is ML."
      },
      {
        "cn": "语音",
        "py": "yǔyīn",
        "en": "voice",
        "tip": "语音 is spoken language."
      },
      {
        "cn": "帮助",
        "py": "bāngzhù",
        "en": "to help",
        "tip": "帮助 is verb or noun."
      },
      {
        "cn": "未来",
        "py": "wèilái",
        "en": "future",
        "tip": "未来 means time ahead."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "用过人工智能语音助手吗？",
        "en": "Used AI voice assistant?"
      },
      {
        "who": "you",
        "cn": "智能语音能帮助我做很多事情。",
        "en": "Helps me do many things."
      },
      {
        "who": "bot",
        "cn": "机器学习和AI发展太快了。",
        "en": "ML and AI develop fast."
      },
      {
        "who": "you",
        "cn": "未来很多工作可能由机器做。",
        "en": "Machines may do many jobs."
      },
      {
        "who": "bot",
        "cn": "你觉得是好事还是坏事？",
        "en": "Good or bad thing?"
      },
      {
        "who": "you",
        "cn": "有好有坏，AI帮助进步也有新问题。",
        "en": "Pros and cons."
      },
      {
        "who": "bot",
        "cn": "人类要好好学习与AI一起发展。",
        "en": "Humans need to learn with AI."
      }
    ]
  },
  {
    "title": "电子商务",
    "level": "HSK 4",
    "icon": "fa-cart-shopping",
    "words": [
      {
        "cn": "网上",
        "py": "wǎngshàng",
        "en": "online",
        "tip": "网上 means on the internet."
      },
      {
        "cn": "购物",
        "py": "gòuwù",
        "en": "shopping",
        "tip": "购物 is formal term."
      },
      {
        "cn": "快递",
        "py": "kuàidì",
        "en": "express delivery",
        "tip": "快递 is courier."
      },
      {
        "cn": "商品",
        "py": "shāngpǐn",
        "en": "product",
        "tip": "商品 is items for sale."
      },
      {
        "cn": "订单",
        "py": "dìngdān",
        "en": "order",
        "tip": "订单 is purchase order."
      },
      {
        "cn": "退货",
        "py": "tuìhuò",
        "en": "to return",
        "tip": "退货 means send back."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "你经常网上购物吗？",
        "en": "Shop online often?"
      },
      {
        "who": "you",
        "cn": "商品多价格也便宜。",
        "en": "Many products, low prices."
      },
      {
        "who": "bot",
        "cn": "最近下了什么订单？",
        "en": "What orders recently?"
      },
      {
        "who": "you",
        "cn": "买衣服和日用品，快递两天到。",
        "en": "Clothes, delivered in 2 days."
      },
      {
        "who": "bot",
        "cn": "不满意可以退货吗？",
        "en": "Can return if unhappy?"
      },
      {
        "who": "you",
        "cn": "七天无理由退货。",
        "en": "No-questions returns in 7 days."
      },
      {
        "who": "bot",
        "cn": "网购改变了生活方式。",
        "en": "Online shopping changed life."
      }
    ]
  },
  {
    "title": "自然与环保",
    "level": "HSK 4",
    "icon": "fa-leaf",
    "words": [
      {
        "cn": "自然",
        "py": "zìrán",
        "en": "nature",
        "tip": "自然 is natural world."
      },
      {
        "cn": "环境",
        "py": "huánjìng",
        "en": "environment",
        "tip": "环境 is key HSK 4 word."
      },
      {
        "cn": "保护",
        "py": "bǎohù",
        "en": "to protect",
        "tip": "保护 for environment."
      },
      {
        "cn": "空气",
        "py": "kōngqì",
        "en": "air",
        "tip": "空气质量 air quality."
      },
      {
        "cn": "绿色",
        "py": "lǜsè",
        "en": "green",
        "tip": "绿色 is color and eco."
      },
      {
        "cn": "地球",
        "py": "dìqiú",
        "en": "Earth",
        "tip": "地球 is our planet."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "怎么保护自然环境？",
        "en": "How to protect nature?"
      },
      {
        "who": "you",
        "cn": "从小事做起，节约用水。",
        "en": "Start with small things."
      },
      {
        "who": "bot",
        "cn": "绿色出行是好选择。",
        "en": "Green travel is good."
      },
      {
        "who": "you",
        "cn": "地球资源有限，人人有责。",
        "en": "Earth's resources are limited."
      },
      {
        "who": "bot",
        "cn": "城市环境比以前好了。",
        "en": "City environment is better."
      },
      {
        "who": "you",
        "cn": "越来越多人重视环保。",
        "en": "More people value environment."
      },
      {
        "who": "bot",
        "cn": "希望地球更绿色。",
        "en": "Hope Earth becomes greener."
      }
    ]
  },
  {
    "title": "气候变化",
    "level": "HSK 4",
    "icon": "fa-temperature-high",
    "words": [
      {
        "cn": "气候",
        "py": "qìhòu",
        "en": "climate",
        "tip": "气候 is long-term weather."
      },
      {
        "cn": "温度",
        "py": "wēndù",
        "en": "temperature",
        "tip": "温度 is heat degree."
      },
      {
        "cn": "升高",
        "py": "shēnggāo",
        "en": "to rise",
        "tip": "升高 means increase."
      },
      {
        "cn": "冬天",
        "py": "dōngtiān",
        "en": "winter",
        "tip": "冬天 is cold season."
      },
      {
        "cn": "夏天",
        "py": "xiàtiān",
        "en": "summer",
        "tip": "夏天 is hot season."
      },
      {
        "cn": "影响",
        "py": "yǐngxiǎng",
        "en": "to affect",
        "tip": "影响 can be verb or noun."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "发现气候有什么变化？",
        "en": "Notice any climate changes?"
      },
      {
        "who": "you",
        "cn": "夏天温度越来越高。",
        "en": "Summer temps rising."
      },
      {
        "who": "bot",
        "cn": "全球变暖影响很大。",
        "en": "Global warming impacts a lot."
      },
      {
        "who": "you",
        "cn": "有些地方太热，有些太多雨。",
        "en": "Some too hot, some too rainy."
      },
      {
        "who": "bot",
        "cn": "我们能做什么？",
        "en": "What can we do?"
      },
      {
        "who": "you",
        "cn": "少用能源减少浪费。",
        "en": "Use less energy."
      },
      {
        "who": "bot",
        "cn": "从小事做起很重要。",
        "en": "Starting small is important."
      }
    ]
  },
  {
    "title": "污染问题",
    "level": "HSK 4",
    "icon": "fa-smog",
    "words": [
      {
        "cn": "污染",
        "py": "wūrǎn",
        "en": "pollution",
        "tip": "污染 combined with 空气."
      },
      {
        "cn": "垃圾",
        "py": "lājī",
        "en": "trash",
        "tip": "垃圾 is household waste."
      },
      {
        "cn": "雾霾",
        "py": "wùmái",
        "en": "smog",
        "tip": "雾霾 common in cities."
      },
      {
        "cn": "排放",
        "py": "páifàng",
        "en": "to emit",
        "tip": "排放 for emissions."
      },
      {
        "cn": "减少",
        "py": "jiǎnshǎo",
        "en": "to reduce",
        "tip": "减少 means cut down."
      },
      {
        "cn": "严重",
        "py": "yánzhòng",
        "en": "severe",
        "tip": "严重 describes degree."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "你所在城市污染严重吗？",
        "en": "Is pollution serious?"
      },
      {
        "who": "you",
        "cn": "雾霾严重，空气灰蒙蒙的。",
        "en": "Smog is bad."
      },
      {
        "who": "bot",
        "cn": "主要原因是工厂和汽车。",
        "en": "Main causes: factories and cars."
      },
      {
        "who": "you",
        "cn": "想办法减少污染。",
        "en": "Find ways to reduce."
      },
      {
        "who": "bot",
        "cn": "垃圾分类有用吗？",
        "en": "Does sorting help?"
      },
      {
        "who": "you",
        "cn": "回收利用减少浪费。",
        "en": "Recycling reduces waste."
      },
      {
        "who": "bot",
        "cn": "我从今天开始分类。",
        "en": "I'll start sorting today."
      }
    ]
  },
  {
    "title": "回收利用",
    "level": "HSK 4",
    "icon": "fa-recycle",
    "words": [
      {
        "cn": "回收",
        "py": "huíshōu",
        "en": "to recycle",
        "tip": "回收 collect and reprocess."
      },
      {
        "cn": "利用",
        "py": "lìyòng",
        "en": "to utilize",
        "tip": "利用 means make use."
      },
      {
        "cn": "废纸",
        "py": "fèizhǐ",
        "en": "waste paper",
        "tip": "废纸 is recyclable."
      },
      {
        "cn": "塑料",
        "py": "sùliào",
        "en": "plastic",
        "tip": "塑料 common material."
      },
      {
        "cn": "瓶子",
        "py": "píngzi",
        "en": "bottle",
        "tip": "瓶子 glass or plastic."
      },
      {
        "cn": "分类",
        "py": "fēnlèi",
        "en": "to sort",
        "tip": "分类 separate categories."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "你们家垃圾分类吗？",
        "en": "Does your household sort?"
      },
      {
        "who": "you",
        "cn": "塑料废纸和瓶子分开回收。",
        "en": "Separate plastic, paper, bottles."
      },
      {
        "who": "bot",
        "cn": "回收能减少浪费吗？",
        "en": "Can recycling reduce waste?"
      },
      {
        "who": "you",
        "cn": "很多能做成新产品。",
        "en": "Many become new products."
      },
      {
        "who": "bot",
        "cn": "我以前不注意这些。",
        "en": "I didn't notice before."
      },
      {
        "who": "you",
        "cn": "每个人做好分类地球少垃圾。",
        "en": "Everyone sorts, less trash."
      },
      {
        "who": "bot",
        "cn": "一起努力！",
        "en": "Let's work together!"
      }
    ]
  },
  {
    "title": "新闻报道",
    "level": "HSK 4",
    "icon": "fa-newspaper",
    "words": [
      {
        "cn": "新闻",
        "py": "xīnwén",
        "en": "news",
        "tip": "新闻 is HSK 4 noun."
      },
      {
        "cn": "报道",
        "py": "bàodào",
        "en": "to report",
        "tip": "报道 verb or noun."
      },
      {
        "cn": "记者",
        "py": "jìzhě",
        "en": "journalist",
        "tip": "记者 reports news."
      },
      {
        "cn": "消息",
        "py": "xiāoxi",
        "en": "news",
        "tip": "消息 is tidings."
      },
      {
        "cn": "头条",
        "py": "tóutiáo",
        "en": "headline",
        "tip": "头条 is top story."
      },
      {
        "cn": "真实",
        "py": "zhēnshí",
        "en": "truthful",
        "tip": "真实 means authentic."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "你喜欢看新闻吗？",
        "en": "Do you like news?"
      },
      {
        "who": "you",
        "cn": "报道让我知道世界发生了什么。",
        "en": "Reports tell me what's happening."
      },
      {
        "who": "bot",
        "cn": "今天头条看了吗？",
        "en": "See today's headline?"
      },
      {
        "who": "you",
        "cn": "但有些消息不一定真实。",
        "en": "Some news may not be true."
      },
      {
        "who": "bot",
        "cn": "网上很多假消息。",
        "en": "Lots of fake news online."
      },
      {
        "who": "you",
        "cn": "要选择可靠来源。",
        "en": "Choose reliable sources."
      },
      {
        "who": "bot",
        "cn": "好记者报道事实。",
        "en": "Good journalists report facts."
      }
    ]
  },
  {
    "title": "社交媒体",
    "level": "HSK 4",
    "icon": "fa-hashtag",
    "words": [
      {
        "cn": "社交",
        "py": "shèjiāo",
        "en": "social",
        "tip": "社交 means socializing."
      },
      {
        "cn": "媒体",
        "py": "méitǐ",
        "en": "media",
        "tip": "媒体 mass communication."
      },
      {
        "cn": "分享",
        "py": "fēnxiǎng",
        "en": "to share",
        "tip": "分享 share experiences."
      },
      {
        "cn": "评论",
        "py": "pínglùn",
        "en": "to comment",
        "tip": "评论 leave comment."
      },
      {
        "cn": "粉丝",
        "py": "fěnsī",
        "en": "fans",
        "tip": "粉丝 loanword."
      },
      {
        "cn": "点赞",
        "py": "diǎnzàn",
        "en": "to like",
        "tip": "点赞 like button."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "经常用社交媒体？",
        "en": "Often use social media?"
      },
      {
        "who": "you",
        "cn": "喜欢分享照片和生活。",
        "en": "Like sharing photos."
      },
      {
        "who": "bot",
        "cn": "粉丝多吗？",
        "en": "Many followers?"
      },
      {
        "who": "you",
        "cn": "喜欢看评论和点赞。",
        "en": "Like seeing comments and likes."
      },
      {
        "who": "bot",
        "cn": "让人与人联系更紧密。",
        "en": "Brings people closer."
      },
      {
        "who": "you",
        "cn": "但不要花太多时间。",
        "en": "Don't spend too much time."
      },
      {
        "who": "bot",
        "cn": "平衡使用最好。",
        "en": "Balanced use is best."
      }
    ]
  },
  {
    "title": "娱乐新闻",
    "level": "HSK 4",
    "icon": "fa-masks-theater",
    "words": [
      {
        "cn": "娱乐",
        "py": "yúlè",
        "en": "entertainment",
        "tip": "娱乐 fun and leisure."
      },
      {
        "cn": "明星",
        "py": "míngxīng",
        "en": "celebrity",
        "tip": "明星 famous people."
      },
      {
        "cn": "电影",
        "py": "diànyǐng",
        "en": "movie",
        "tip": "电影 is film."
      },
      {
        "cn": "节目",
        "py": "jiémù",
        "en": "program",
        "tip": "节目 TV show."
      },
      {
        "cn": "粉丝",
        "py": "fěnsī",
        "en": "fan",
        "tip": "粉丝 borrowed word."
      },
      {
        "cn": "票房",
        "py": "piàofáng",
        "en": "box office",
        "tip": "票房 movie revenue."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "看了什么娱乐新闻？",
        "en": "What entertainment news?"
      },
      {
        "who": "you",
        "cn": "新电影票房很高。",
        "en": "New movie has high box office."
      },
      {
        "who": "bot",
        "cn": "喜欢什么节目？",
        "en": "What shows do you like?"
      },
      {
        "who": "you",
        "cn": "综艺节目轻松有趣。",
        "en": "Variety shows are fun."
      },
      {
        "who": "bot",
        "cn": "粉丝推荐的节目不错。",
        "en": "Fan recommendations are good."
      },
      {
        "who": "you",
        "cn": "娱乐让人放松别太当真。",
        "en": "Relaxing, don't take seriously."
      },
      {
        "who": "bot",
        "cn": "生活最重要。",
        "en": "Life is most important."
      }
    ]
  },
  {
    "title": "奥运会精神",
    "level": "HSK 4",
    "icon": "fa-trophy",
    "words": [
      {
        "cn": "奥运",
        "py": "àoyùn",
        "en": "Olympics",
        "tip": "奥运 short for 奥林匹克."
      },
      {
        "cn": "比赛",
        "py": "bǐsài",
        "en": "competition",
        "tip": "比赛 is contest."
      },
      {
        "cn": "金牌",
        "py": "jīnpái",
        "en": "gold medal",
        "tip": "金牌 top award."
      },
      {
        "cn": "运动员",
        "py": "yùndòngyuán",
        "en": "athlete",
        "tip": "运动员 sportsperson."
      },
      {
        "cn": "观众",
        "py": "guānzhòng",
        "en": "spectator",
        "tip": "观众 watching people."
      },
      {
        "cn": "加油",
        "py": "jiāyóu",
        "en": "to cheer",
        "tip": "加油 universal cheer."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "喜欢看奥运会吗？",
        "en": "Like Olympics?"
      },
      {
        "who": "you",
        "cn": "运动员为金牌付出很多努力。",
        "en": "Athletes work hard for gold."
      },
      {
        "who": "bot",
        "cn": "我为运动员加油。",
        "en": "I cheer for athletes."
      },
      {
        "who": "you",
        "cn": "奥运精神是参与和友谊。",
        "en": "Spirit is participation."
      },
      {
        "who": "bot",
        "cn": "每个运动员值得尊重。",
        "en": "Every athlete deserves respect."
      },
      {
        "who": "you",
        "cn": "希望去现场看比赛。",
        "en": "Hope to watch live."
      },
      {
        "who": "bot",
        "cn": "那会是棒的经历！",
        "en": "Amazing experience!"
      }
    ]
  },
  {
    "title": "篮球运动",
    "level": "HSK 4",
    "icon": "fa-basketball",
    "words": [
      {
        "cn": "篮球",
        "py": "lánqiú",
        "en": "basketball",
        "tip": "篮球 sport with hoop."
      },
      {
        "cn": "球队",
        "py": "qiúduì",
        "en": "team",
        "tip": "球队 sports team."
      },
      {
        "cn": "教练",
        "py": "jiàoliàn",
        "en": "coach",
        "tip": "教练 trains team."
      },
      {
        "cn": "进球",
        "py": "jìnqiú",
        "en": "to score",
        "tip": "进球 score goal."
      },
      {
        "cn": "防守",
        "py": "fángshǒu",
        "en": "defense",
        "tip": "防守 defensive strategy."
      },
      {
        "cn": "训练",
        "py": "xùnliàn",
        "en": "training",
        "tip": "训练 practice drills."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "喜欢打篮球？",
        "en": "Like basketball?"
      },
      {
        "who": "you",
        "cn": "每周跟球队训练。",
        "en": "Train with team weekly."
      },
      {
        "who": "bot",
        "cn": "教练怎么样？",
        "en": "How's the coach?"
      },
      {
        "who": "you",
        "cn": "严格教了很多防守技巧。",
        "en": "Strict, teaches defense."
      },
      {
        "who": "bot",
        "cn": "能进几个球？",
        "en": "How many baskets?"
      },
      {
        "who": "you",
        "cn": "看对手防守。多练就好。",
        "en": "Depends on defense."
      },
      {
        "who": "bot",
        "cn": "坚持训练会进步。",
        "en": "Persist and improve."
      }
    ]
  },
  {
    "title": "足球世界",
    "level": "HSK 4",
    "icon": "fa-futbol",
    "words": [
      {
        "cn": "足球",
        "py": "zúqiú",
        "en": "soccer",
        "tip": "足球 popular sport."
      },
      {
        "cn": "世界杯",
        "py": "shìjièbēi",
        "en": "World Cup",
        "tip": "世界杯 global championship."
      },
      {
        "cn": "球员",
        "py": "qiúyuán",
        "en": "player",
        "tip": "球员 sports player."
      },
      {
        "cn": "球场",
        "py": "qiúchǎng",
        "en": "stadium",
        "tip": "球场 playing field."
      },
      {
        "cn": "裁判",
        "py": "cáipàn",
        "en": "referee",
        "tip": "裁判 enforces rules."
      },
      {
        "cn": "冠军",
        "py": "guànjūn",
        "en": "champion",
        "tip": "冠军 is winner."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "看世界杯吗？",
        "en": "Watch World Cup?"
      },
      {
        "who": "you",
        "cn": "去球场和朋友们一起看。",
        "en": "Go to stadium with friends."
      },
      {
        "who": "bot",
        "cn": "最喜欢的球员？",
        "en": "Favorite player?"
      },
      {
        "who": "you",
        "cn": "梅西，他是真正冠军。",
        "en": "Messi, a true champion."
      },
      {
        "who": "bot",
        "cn": "裁判判罚让比赛紧张。",
        "en": "Referee calls make it tense."
      },
      {
        "who": "you",
        "cn": "裁判工作不容易尊重他们。",
        "en": "Ref's job isn't easy."
      },
      {
        "who": "bot",
        "cn": "希望下次更精彩。",
        "en": "Hope next is more exciting."
      }
    ]
  },
  {
    "title": "武术传统",
    "level": "HSK 4",
    "icon": "fa-hand-fist",
    "words": [
      {
        "cn": "武术",
        "py": "wǔshù",
        "en": "martial arts",
        "tip": "武术 Chinese martial arts."
      },
      {
        "cn": "功夫",
        "py": "gōngfu",
        "en": "kung fu",
        "tip": "功夫 skill through work."
      },
      {
        "cn": "太极",
        "py": "tàijí",
        "en": "tai chi",
        "tip": "太极 meditative art."
      },
      {
        "cn": "练习",
        "py": "liànxí",
        "en": "to practice",
        "tip": "练习 means train."
      },
      {
        "cn": "身体",
        "py": "shēntǐ",
        "en": "body",
        "tip": "身体 physical body."
      },
      {
        "cn": "健康",
        "py": "jiànkāng",
        "en": "healthy",
        "tip": "健康 HSK 4 word."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "练过武术吗？",
        "en": "Practice martial arts?"
      },
      {
        "who": "you",
        "cn": "练过功夫对身体好。",
        "en": "Kung fu is good for body."
      },
      {
        "who": "bot",
        "cn": "太极也是武术？",
        "en": "Is tai chi martial arts?"
      },
      {
        "who": "you",
        "cn": "太极动作慢但有力量。",
        "en": "Slow but powerful."
      },
      {
        "who": "bot",
        "cn": "想试试太极。",
        "en": "Want to try tai chi."
      },
      {
        "who": "you",
        "cn": "坚持练习有好处。",
        "en": "Good for body and mood."
      },
      {
        "who": "bot",
        "cn": "明天开始一起练习。",
        "en": "Start together tomorrow."
      }
    ]
  },
  {
    "title": "电子竞技",
    "level": "HSK 4",
    "icon": "fa-gamepad",
    "words": [
      {
        "cn": "电竞",
        "py": "diànjìng",
        "en": "esports",
        "tip": "电竞 short for 电子竞技."
      },
      {
        "cn": "游戏",
        "py": "yóuxì",
        "en": "game",
        "tip": "游戏 video games."
      },
      {
        "cn": "选手",
        "py": "xuǎnshǒu",
        "en": "player",
        "tip": "选手 contestant."
      },
      {
        "cn": "团队",
        "py": "tuánduì",
        "en": "team",
        "tip": "团队 working group."
      },
      {
        "cn": "策略",
        "py": "cèlüè",
        "en": "strategy",
        "tip": "策略 plan to win."
      },
      {
        "cn": "胜利",
        "py": "shènglì",
        "en": "victory",
        "tip": "胜利 winning."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "喜欢看电竞比赛？",
        "en": "Like esports?"
      },
      {
        "who": "you",
        "cn": "选手团队策略很精彩。",
        "en": "Team strategies exciting."
      },
      {
        "who": "bot",
        "cn": "玩游戏和看比赛一样？",
        "en": "Playing vs watching?"
      },
      {
        "who": "you",
        "cn": "自己玩动手看比赛学策略。",
        "en": "Play hands-on, watch learn."
      },
      {
        "who": "bot",
        "cn": "团队需要配合。",
        "en": "Teams need cooperation."
      },
      {
        "who": "you",
        "cn": "团队合作比个人技术重要。",
        "en": "Teamwork > individual skill."
      },
      {
        "who": "bot",
        "cn": "电竞成新体育文化。",
        "en": "Esports new sports culture."
      }
    ]
  },
  {
    "title": "法律常识",
    "level": "HSK 4",
    "icon": "fa-gavel",
    "words": [
      {
        "cn": "法律",
        "py": "fǎlǜ",
        "en": "law",
        "tip": "法律 system of rules."
      },
      {
        "cn": "规则",
        "py": "guīzé",
        "en": "rule",
        "tip": "规则 guideline."
      },
      {
        "cn": "权利",
        "py": "quánlì",
        "en": "right",
        "tip": "权利 entitlements."
      },
      {
        "cn": "义务",
        "py": "yìwù",
        "en": "obligation",
        "tip": "义务 what one must do."
      },
      {
        "cn": "合同",
        "py": "hétong",
        "en": "contract",
        "tip": "合同 binding agreement."
      },
      {
        "cn": "守法",
        "py": "shǒufǎ",
        "en": "abide by law",
        "tip": "守法 obey law."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "法律重要吗？",
        "en": "Is law important?"
      },
      {
        "who": "you",
        "cn": "保护权利规定义务。",
        "en": "Protects rights and duties."
      },
      {
        "who": "bot",
        "cn": "签合同注意什么？",
        "en": "What to note signing?"
      },
      {
        "who": "you",
        "cn": "仔细看每一条规则。",
        "en": "Read every rule."
      },
      {
        "who": "bot",
        "cn": "守法是公民责任。",
        "en": "Law-abiding is duty."
      },
      {
        "who": "you",
        "cn": "大家都守法才公平。",
        "en": "Fair when everyone follows."
      },
      {
        "who": "bot",
        "cn": "法律知识重要。",
        "en": "Legal knowledge matters."
      }
    ]
  },
  {
    "title": "理财基础",
    "level": "HSK 4",
    "icon": "fa-chart-line",
    "words": [
      {
        "cn": "理财",
        "py": "lǐcái",
        "en": "financial mgmt",
        "tip": "理财 manage finances."
      },
      {
        "cn": "银行",
        "py": "yínháng",
        "en": "bank",
        "tip": "银行 institution."
      },
      {
        "cn": "存钱",
        "py": "cúnqián",
        "en": "save money",
        "tip": "存钱 put in bank."
      },
      {
        "cn": "利息",
        "py": "lìxī",
        "en": "interest",
        "tip": "利息 earnings."
      },
      {
        "cn": "预算",
        "py": "yùsuàn",
        "en": "budget",
        "tip": "预算 financial plan."
      },
      {
        "cn": "投资",
        "py": "tóuzī",
        "en": "to invest",
        "tip": "投资 generate returns."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "怎么理财？",
        "en": "How manage finances?"
      },
      {
        "who": "you",
        "cn": "做预算先存钱到银行。",
        "en": "Budget and save."
      },
      {
        "who": "bot",
        "cn": "利息高吗？",
        "en": "Interest high?"
      },
      {
        "who": "you",
        "cn": "不高但安全。投资有风险。",
        "en": "Not high but safe."
      },
      {
        "who": "bot",
        "cn": "投资要小心。",
        "en": "Invest carefully."
      },
      {
        "who": "you",
        "cn": "理财先学习不能盲目。",
        "en": "Learn first."
      },
      {
        "who": "bot",
        "cn": "理财让生活有保障。",
        "en": "Finance gives security."
      }
    ]
  },
  {
    "title": "传统文化",
    "level": "HSK 4",
    "icon": "fa-dragon",
    "words": [
      {
        "cn": "传统",
        "py": "chuántǒng",
        "en": "tradition",
        "tip": "传统 customs passed down."
      },
      {
        "cn": "文化",
        "py": "wénhuà",
        "en": "culture",
        "tip": "文化 social customs."
      },
      {
        "cn": "春节",
        "py": "chūnjié",
        "en": "Spring Festival",
        "tip": "春节 Chinese New Year."
      },
      {
        "cn": "饺子",
        "py": "jiǎozi",
        "en": "dumplings",
        "tip": "饺子 traditional food."
      },
      {
        "cn": "红包",
        "py": "hóngbāo",
        "en": "red envelope",
        "tip": "红包 money gift."
      },
      {
        "cn": "团圆",
        "py": "tuányuán",
        "en": "reunion",
        "tip": "团圆 family gathering."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "春节是最重要节日。",
        "en": "Spring Festival is most important."
      },
      {
        "who": "you",
        "cn": "团圆吃饺子给红包。",
        "en": "Reunion, dumplings, envelopes."
      },
      {
        "who": "bot",
        "cn": "你喜欢过春节？",
        "en": "Like Spring Festival?"
      },
      {
        "who": "you",
        "cn": "家人可以聚在一起。",
        "en": "Family gets together."
      },
      {
        "who": "bot",
        "cn": "传统文化需要传承。",
        "en": "Tradition needs inheritance."
      },
      {
        "who": "you",
        "cn": "我们应了解并尊重传统。",
        "en": "Understand and respect."
      },
      {
        "who": "bot",
        "cn": "文化才能延续。",
        "en": "Culture continues."
      }
    ]
  },
  {
    "title": "节日习俗",
    "level": "HSK 4",
    "icon": "fa-calendar-days",
    "words": [
      {
        "cn": "节日",
        "py": "jiérì",
        "en": "festival",
        "tip": "节日 celebration day."
      },
      {
        "cn": "礼物",
        "py": "lǐwù",
        "en": "gift",
        "tip": "礼物 something given."
      },
      {
        "cn": "月饼",
        "py": "yuèbǐng",
        "en": "mooncake",
        "tip": "月饼 Mid-Autumn food."
      },
      {
        "cn": "灯笼",
        "py": "dēnglong",
        "en": "lantern",
        "tip": "灯笼 lit at festivals."
      },
      {
        "cn": "庆祝",
        "py": "qìngzhù",
        "en": "to celebrate",
        "tip": "庆祝 mark occasion."
      },
      {
        "cn": "祝福",
        "py": "zhùfú",
        "en": "blessing",
        "tip": "祝福 good wishes."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "中秋节怎么庆祝？",
        "en": "How celebrate Mid-Autumn?"
      },
      {
        "who": "you",
        "cn": "吃月饼挂灯笼祝福彼此。",
        "en": "Eat mooncakes, hang lanterns."
      },
      {
        "who": "bot",
        "cn": "送礼是传统？",
        "en": "Gift-giving tradition?"
      },
      {
        "who": "you",
        "cn": "礼物代表心意。",
        "en": "Gifts represent feelings."
      },
      {
        "who": "bot",
        "cn": "最重要的是和家人一起。",
        "en": "Most important is family."
      },
      {
        "who": "you",
        "cn": "团圆时光最珍贵。",
        "en": "Time together is precious."
      },
      {
        "who": "bot",
        "cn": "每个节日有意义。",
        "en": "Every festival has meaning."
      }
    ]
  },
  {
    "title": "心理健康",
    "level": "HSK 4",
    "icon": "fa-brain",
    "words": [
      {
        "cn": "心理",
        "py": "xīnlǐ",
        "en": "psychology",
        "tip": "心理 mind and emotions."
      },
      {
        "cn": "压力",
        "py": "yālì",
        "en": "stress",
        "tip": "压力 HSK 4 word."
      },
      {
        "cn": "情绪",
        "py": "qíngxù",
        "en": "emotion",
        "tip": "情绪 feelings."
      },
      {
        "cn": "放松",
        "py": "fàngsōng",
        "en": "to relax",
        "tip": "放松 unwind."
      },
      {
        "cn": "乐观",
        "py": "lèguān",
        "en": "optimistic",
        "tip": "乐观 positive outlook."
      },
      {
        "cn": "信心",
        "py": "xìnxīn",
        "en": "confidence",
        "tip": "信心 belief in self."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "心理压力大吗？",
        "en": "Feel psychological pressure?"
      },
      {
        "who": "you",
        "cn": "有压力但想办法放松。",
        "en": "Sometimes but I relax."
      },
      {
        "who": "bot",
        "cn": "怎么放松？",
        "en": "How to relax?"
      },
      {
        "who": "you",
        "cn": "运动听音乐保持乐观。",
        "en": "Exercise, music, stay optimistic."
      },
      {
        "who": "bot",
        "cn": "乐观的人更快乐。",
        "en": "Optimistic people happier."
      },
      {
        "who": "you",
        "cn": "有信心能解决问题。",
        "en": "Have confidence to solve."
      },
      {
        "who": "bot",
        "cn": "心理健康和身体一样重要。",
        "en": "Mental equals physical health."
      }
    ]
  },
  {
    "title": "时尚潮流",
    "level": "HSK 4",
    "icon": "fa-shirt",
    "words": [
      {
        "cn": "时尚",
        "py": "shíshàng",
        "en": "fashion",
        "tip": "时尚 current trends."
      },
      {
        "cn": "衣服",
        "py": "yīfu",
        "en": "clothes",
        "tip": "衣服 general clothing."
      },
      {
        "cn": "颜色",
        "py": "yánsè",
        "en": "color",
        "tip": "颜色 basic noun."
      },
      {
        "cn": "搭配",
        "py": "dāpèi",
        "en": "to match",
        "tip": "搭配 combine clothes."
      },
      {
        "cn": "风格",
        "py": "fēnggé",
        "en": "style",
        "tip": "风格 aesthetic."
      },
      {
        "cn": "流行",
        "py": "liúxíng",
        "en": "trendy",
        "tip": "流行 in vogue."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "喜欢什么时尚风格？",
        "en": "What fashion style?"
      },
      {
        "who": "you",
        "cn": "简单舒适颜色不复杂。",
        "en": "Simple and comfortable."
      },
      {
        "who": "bot",
        "cn": "今年流行什么颜色？",
        "en": "Trending colors?"
      },
      {
        "who": "you",
        "cn": "很多人穿亮色。",
        "en": "Many wear bright colors."
      },
      {
        "who": "bot",
        "cn": "时尚变化快。",
        "en": "Fashion changes fast."
      },
      {
        "who": "you",
        "cn": "穿适合自己的最重要。",
        "en": "Wear what suits you."
      },
      {
        "who": "bot",
        "cn": "自己风格最时尚。",
        "en": "Your style is most fashionable."
      }
    ]
  },
  {
    "title": "建筑之美",
    "level": "HSK 4",
    "icon": "fa-landmark",
    "words": [
      {
        "cn": "建筑",
        "py": "jiànzhù",
        "en": "architecture",
        "tip": "建筑 art and structure."
      },
      {
        "cn": "设计",
        "py": "shèjì",
        "en": "to design",
        "tip": "设计 plan form."
      },
      {
        "cn": "古老",
        "py": "gǔlǎo",
        "en": "ancient",
        "tip": "古老 historically old."
      },
      {
        "cn": "现代",
        "py": "xiàndài",
        "en": "modern",
        "tip": "现代 contemporary."
      },
      {
        "cn": "塔",
        "py": "tǎ",
        "en": "pagoda",
        "tip": "塔 tall structure."
      },
      {
        "cn": "桥",
        "py": "qiáo",
        "en": "bridge",
        "tip": "桥 connects sides."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "喜欢古老还是现代建筑？",
        "en": "Ancient or modern?"
      },
      {
        "who": "you",
        "cn": "塔和桥让我感受历史。",
        "en": "Pagodas and bridges feel historical."
      },
      {
        "who": "bot",
        "cn": "中国有很多古建筑。",
        "en": "China has many ancient buildings."
      },
      {
        "who": "you",
        "cn": "故宫和长城每块砖有故事。",
        "en": "Forbidden City and Great Wall."
      },
      {
        "who": "bot",
        "cn": "现代建筑也很有意思。",
        "en": "Modern buildings interesting."
      },
      {
        "who": "you",
        "cn": "东方明珠结合传统和现代。",
        "en": "Oriental Pearl combines."
      },
      {
        "who": "bot",
        "cn": "建筑是文化表达。",
        "en": "Architecture is cultural expression."
      }
    ]
  },
  {
    "title": "读书分享",
    "level": "HSK 4",
    "icon": "fa-book-open",
    "words": [
      {
        "cn": "读书",
        "py": "dúshū",
        "en": "to read",
        "tip": "读书 study or read."
      },
      {
        "cn": "作者",
        "py": "zuòzhě",
        "en": "author",
        "tip": "作者 book writer."
      },
      {
        "cn": "故事",
        "py": "gùshi",
        "en": "story",
        "tip": "故事 tale."
      },
      {
        "cn": "小说",
        "py": "xiǎoshuō",
        "en": "novel",
        "tip": "小说 long fiction."
      },
      {
        "cn": "人物",
        "py": "rénwù",
        "en": "character",
        "tip": "人物 in fiction."
      },
      {
        "cn": "感动",
        "py": "gǎndòng",
        "en": "to be moved",
        "tip": "感动 emotional."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "最近读什么书？",
        "en": "What book reading?"
      },
      {
        "who": "you",
        "cn": "读小说故事很感动。",
        "en": "Novel with touching story."
      },
      {
        "who": "bot",
        "cn": "人物怎么样？",
        "en": "How are characters?"
      },
      {
        "who": "you",
        "cn": "每个人物很真实。",
        "en": "Very real characters."
      },
      {
        "who": "bot",
        "cn": "读书了解不同世界。",
        "en": "Understand different worlds."
      },
      {
        "who": "you",
        "cn": "读书开阔眼界丰富内心。",
        "en": "Broadens horizons."
      },
      {
        "who": "bot",
        "cn": "好书像好朋友。",
        "en": "Good book like good friend."
      }
    ]
  },
  {
    "title": "低碳生活",
    "level": "HSK 4",
    "icon": "fa-tree",
    "words": [
      {
        "cn": "低碳",
        "py": "dītàn",
        "en": "low-carbon",
        "tip": "低碳 low emissions."
      },
      {
        "cn": "节约",
        "py": "jiéyuē",
        "en": "to conserve",
        "tip": "节约 use sparingly."
      },
      {
        "cn": "能源",
        "py": "néngyuán",
        "en": "energy",
        "tip": "能源 electricity fuel."
      },
      {
        "cn": "骑车",
        "py": "qíchē",
        "en": "ride a bike",
        "tip": "骑车 eco-friendly."
      },
      {
        "cn": "环保",
        "py": "huánbǎo",
        "en": "eco-friendly",
        "tip": "环保 short for 环境保护."
      },
      {
        "cn": "意识",
        "py": "yìshí",
        "en": "awareness",
        "tip": "意识 consciousness."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "听说过低碳生活？",
        "en": "Heard of low-carbon living?"
      },
      {
        "who": "you",
        "cn": "节约能源减少污染。",
        "en": "Save energy reduce pollution."
      },
      {
        "who": "bot",
        "cn": "怎么环保？",
        "en": "How be eco-friendly?"
      },
      {
        "who": "you",
        "cn": "短距离骑车不堵车低碳。",
        "en": "Bike for short trips."
      },
      {
        "who": "bot",
        "cn": "大家意识越来越强。",
        "en": "Awareness growing."
      },
      {
        "who": "you",
        "cn": "每个人努力让地球更好。",
        "en": "Everyone helps Earth."
      },
      {
        "who": "bot",
        "cn": "我也要提高意识。",
        "en": "I'll raise my awareness."
      }
    ]
  },
  {
    "title": "语言学习",
    "level": "HSK 4",
    "icon": "fa-language",
    "words": [
      {
        "cn": "语言",
        "py": "yǔyán",
        "en": "language",
        "tip": "语言 communication."
      },
      {
        "cn": "口语",
        "py": "kǒuyǔ",
        "en": "spoken",
        "tip": "口语 daily speech."
      },
      {
        "cn": "听力",
        "py": "tīnglì",
        "en": "listening",
        "tip": "听力 understand speech."
      },
      {
        "cn": "发音",
        "py": "fāyīn",
        "en": "pronunciation",
        "tip": "发音 how spoken."
      },
      {
        "cn": "词汇",
        "py": "cíhuì",
        "en": "vocabulary",
        "tip": "词汇 set of words."
      },
      {
        "cn": "练习",
        "py": "liànxí",
        "en": "to practice",
        "tip": "练习 repetition."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "学汉语多久了？",
        "en": "How long learning Chinese?"
      },
      {
        "who": "you",
        "cn": "一年多词汇口语在进步。",
        "en": "Over a year improving."
      },
      {
        "who": "bot",
        "cn": "听力还是发音难？",
        "en": "Listening or pronunciation harder?"
      },
      {
        "who": "you",
        "cn": "发音难但多练习好。",
        "en": "Pronunciation harder but practice helps."
      },
      {
        "who": "bot",
        "cn": "每天怎么练习？",
        "en": "Practice daily?"
      },
      {
        "who": "you",
        "cn": "听播客用中文聊天。",
        "en": "Podcasts and Chinese chat."
      },
      {
        "who": "bot",
        "cn": "坚持一定能进步。",
        "en": "Keep practicing improve."
      }
    ]
  },
  {
    "title": "饮食文化",
    "level": "HSK 4",
    "icon": "fa-utensils",
    "words": [
      {
        "cn": "饮食",
        "py": "yǐnshí",
        "en": "food and drink",
        "tip": "饮食 eating habits."
      },
      {
        "cn": "口味",
        "py": "kǒuwèi",
        "en": "taste",
        "tip": "口味 food preference."
      },
      {
        "cn": "辣",
        "py": "là",
        "en": "spicy",
        "tip": "辣 common flavor."
      },
      {
        "cn": "菜单",
        "py": "càidān",
        "en": "menu",
        "tip": "菜单 dishes list."
      },
      {
        "cn": "味道",
        "py": "wèidao",
        "en": "flavor",
        "tip": "味道 how food tastes."
      },
      {
        "cn": "特色",
        "py": "tèsè",
        "en": "specialty",
        "tip": "特色 distinctive."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "喜欢什么口味？",
        "en": "What taste do you like?"
      },
      {
        "who": "you",
        "cn": "喜欢辣的菜味道很足。",
        "en": "Spicy dishes with flavor."
      },
      {
        "who": "bot",
        "cn": "菜单有什么特色？",
        "en": "Menu specialties?"
      },
      {
        "who": "you",
        "cn": "麻辣火锅和宫保鸡丁。",
        "en": "Spicy hotpot and kung pao."
      },
      {
        "who": "bot",
        "cn": "饮食文化真丰富。",
        "en": "Food culture is rich."
      },
      {
        "who": "you",
        "cn": "不同地方不同口味。",
        "en": "Different places different tastes."
      },
      {
        "who": "bot",
        "cn": "多尝试不同饮食。",
        "en": "Try different foods."
      }
    ]
  },
  {
    "title": "旅游经历",
    "level": "HSK 4",
    "icon": "fa-plane",
    "words": [
      {
        "cn": "旅游",
        "py": "lǚyóu",
        "en": "to travel",
        "tip": "旅游 HSK 4 word."
      },
      {
        "cn": "风景",
        "py": "fēngjǐng",
        "en": "scenery",
        "tip": "风景 natural views."
      },
      {
        "cn": "酒店",
        "py": "jiǔdiàn",
        "en": "hotel",
        "tip": "酒店 place to stay."
      },
      {
        "cn": "地图",
        "py": "dìtú",
        "en": "map",
        "tip": "地图 navigation."
      },
      {
        "cn": "护照",
        "py": "hùzhào",
        "en": "passport",
        "tip": "护照 for travel."
      },
      {
        "cn": "纪念品",
        "py": "jìniànpǐn",
        "en": "souvenir",
        "tip": "纪念品 keepsake."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "最近旅游了？",
        "en": "Traveled recently?"
      },
      {
        "who": "you",
        "cn": "去云南风景特别美。",
        "en": "Yunnan, beautiful scenery."
      },
      {
        "who": "bot",
        "cn": "酒店怎么样？",
        "en": "How was hotel?"
      },
      {
        "who": "you",
        "cn": "很好还买了纪念品。",
        "en": "Good, bought souvenirs."
      },
      {
        "who": "bot",
        "cn": "准备好地图护照？",
        "en": "Prepared map and passport?"
      },
      {
        "who": "you",
        "cn": "都准备好了。旅游让生活精彩。",
        "en": "All ready. Travel enriches life."
      },
      {
        "who": "bot",
        "cn": "下次也想去。",
        "en": "Want to go too."
      }
    ]
  },
  {
    "title": "交通出行",
    "level": "HSK 4",
    "icon": "fa-train",
    "words": [
      {
        "cn": "地铁",
        "py": "dìtiě",
        "en": "subway",
        "tip": "地铁 urban rail."
      },
      {
        "cn": "公交",
        "py": "gōngjiāo",
        "en": "bus",
        "tip": "公交 short for 公共汽车."
      },
      {
        "cn": "打车",
        "py": "dǎchē",
        "en": "take a taxi",
        "tip": "打车 hail cab."
      },
      {
        "cn": "高铁",
        "py": "gāotiě",
        "en": "high-speed train",
        "tip": "高铁 over 300 km/h."
      },
      {
        "cn": "车站",
        "py": "chēzhàn",
        "en": "station",
        "tip": "车站 bus stop."
      },
      {
        "cn": "堵车",
        "py": "dǔchē",
        "en": "traffic jam",
        "tip": "堵车 city problem."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "怎么上班？",
        "en": "How commute to work?"
      },
      {
        "who": "you",
        "cn": "坐地铁赶时间打车。",
        "en": "Subway or taxi."
      },
      {
        "who": "bot",
        "cn": "地铁不堵车。",
        "en": "Subway no traffic."
      },
      {
        "who": "you",
        "cn": "但早高峰人很多。",
        "en": "Rush hour crowded."
      },
      {
        "who": "bot",
        "cn": "坐过高铁？",
        "en": "High-speed train?"
      },
      {
        "who": "you",
        "cn": "又快又舒服。",
        "en": "Fast and comfortable."
      },
      {
        "who": "bot",
        "cn": "交通越来越发达。",
        "en": "Transport developing."
      }
    ]
  },
  {
    "title": "节日礼物",
    "level": "HSK 4",
    "icon": "fa-gift",
    "words": [
      {
        "cn": "礼物",
        "py": "lǐwù",
        "en": "gift",
        "tip": "礼物 present."
      },
      {
        "cn": "卡片",
        "py": "kǎpiàn",
        "en": "card",
        "tip": "卡片 greeting card."
      },
      {
        "cn": "心意",
        "py": "xīnyì",
        "en": "regard",
        "tip": "心意 sincere feelings."
      },
      {
        "cn": "挑选",
        "py": "tiāoxuǎn",
        "en": "to choose",
        "tip": "挑选 carefully pick."
      },
      {
        "cn": "包装",
        "py": "bāozhuāng",
        "en": "wrapping",
        "tip": "包装 look nice."
      },
      {
        "cn": "惊喜",
        "py": "jīngxǐ",
        "en": "pleasant surprise",
        "tip": "惊喜 unexpected joy."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "准备了什么礼物？",
        "en": "What gift prepared?"
      },
      {
        "who": "you",
        "cn": "挑选了书和卡片。",
        "en": "Chose a book and card."
      },
      {
        "who": "bot",
        "cn": "包装漂亮吗？",
        "en": "Wrapping pretty?"
      },
      {
        "who": "you",
        "cn": "用他喜欢的颜色包装。",
        "en": "Wrapped in his color."
      },
      {
        "who": "bot",
        "cn": "朋友一定开心。",
        "en": "Friend must be happy."
      },
      {
        "who": "you",
        "cn": "礼物有心意最重要。",
        "en": "Thought counts."
      },
      {
        "who": "bot",
        "cn": "说得对。",
        "en": "You're right."
      }
    ]
  },
  {
    "title": "家庭关系",
    "level": "HSK 4",
    "icon": "fa-house-chimney",
    "words": [
      {
        "cn": "家庭",
        "py": "jiātíng",
        "en": "family",
        "tip": "家庭 basic unit."
      },
      {
        "cn": "父母",
        "py": "fùmǔ",
        "en": "parents",
        "tip": "父母 father mother."
      },
      {
        "cn": "丈夫",
        "py": "zhàngfu",
        "en": "husband",
        "tip": "丈夫 married man."
      },
      {
        "cn": "妻子",
        "py": "qīzi",
        "en": "wife",
        "tip": "妻子 married woman."
      },
      {
        "cn": "孩子",
        "py": "háizi",
        "en": "child",
        "tip": "孩子 children."
      },
      {
        "cn": "沟通",
        "py": "gōutōng",
        "en": "to communicate",
        "tip": "沟通 exchange ideas."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "和父母住一起？",
        "en": "Live with parents?"
      },
      {
        "who": "you",
        "cn": "有自己家庭和孩子。",
        "en": "Have own family."
      },
      {
        "who": "bot",
        "cn": "家庭沟通重要。",
        "en": "Family communication important."
      },
      {
        "who": "you",
        "cn": "每周视频聊天。",
        "en": "Video chat weekly."
      },
      {
        "who": "bot",
        "cn": "需要互相理解。",
        "en": "Need mutual understanding."
      },
      {
        "who": "you",
        "cn": "尊重和沟通让家幸福。",
        "en": "Respect and communication bring happiness."
      },
      {
        "who": "bot",
        "cn": "家是最温暖港湾。",
        "en": "Family warmest harbor."
      }
    ]
  },
  {
    "title": "健康生活",
    "level": "HSK 4",
    "icon": "fa-heart-pulse",
    "words": [
      {
        "cn": "健康",
        "py": "jiànkāng",
        "en": "health",
        "tip": "健康 HSK 4 core."
      },
      {
        "cn": "运动",
        "py": "yùndòng",
        "en": "exercise",
        "tip": "运动 physical activity."
      },
      {
        "cn": "睡眠",
        "py": "shuìmián",
        "en": "sleep",
        "tip": "睡眠 rest period."
      },
      {
        "cn": "早餐",
        "py": "zǎocān",
        "en": "breakfast",
        "tip": "早餐 first meal."
      },
      {
        "cn": "习惯",
        "py": "xíguàn",
        "en": "habit",
        "tip": "习惯 regular practice."
      },
      {
        "cn": "休息",
        "py": "xiūxi",
        "en": "to rest",
        "tip": "休息 take break."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "每天睡几小时？",
        "en": "Hours of sleep?"
      },
      {
        "who": "you",
        "cn": "七八个小时。",
        "en": "7-8 hours."
      },
      {
        "who": "bot",
        "cn": "吃早餐吗？",
        "en": "Eat breakfast?"
      },
      {
        "who": "you",
        "cn": "每天吃最重要一餐。",
        "en": "Every day important meal."
      },
      {
        "who": "bot",
        "cn": "运动习惯？",
        "en": "Exercise habits?"
      },
      {
        "who": "you",
        "cn": "每周三次记得休息。",
        "en": "3 times weekly."
      },
      {
        "who": "bot",
        "cn": "健康需要坚持。",
        "en": "Health needs persistence."
      }
    ]
  },
  {
    "title": "电影之夜",
    "level": "HSK 4",
    "icon": "fa-film",
    "words": [
      {
        "cn": "电影",
        "py": "diànyǐng",
        "en": "movie",
        "tip": "电影 generic term."
      },
      {
        "cn": "导演",
        "py": "dǎoyǎn",
        "en": "director",
        "tip": "导演 directs film."
      },
      {
        "cn": "演员",
        "py": "yǎnyuán",
        "en": "actor",
        "tip": "演员 performers."
      },
      {
        "cn": "剧情",
        "py": "jùqíng",
        "en": "plot",
        "tip": "剧情 narrative."
      },
      {
        "cn": "推荐",
        "py": "tuījiàn",
        "en": "to recommend",
        "tip": "推荐 suggest."
      },
      {
        "cn": "搞笑",
        "py": "gǎoxiào",
        "en": "funny",
        "tip": "搞笑 comedy."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "周末看电影？",
        "en": "Watch movie weekend?"
      },
      {
        "who": "you",
        "cn": "推荐一部好看的。",
        "en": "Recommend one."
      },
      {
        "who": "bot",
        "cn": "最近有新搞笑片。",
        "en": "New comedy."
      },
      {
        "who": "you",
        "cn": "剧情怎么样？",
        "en": "How's the plot?"
      },
      {
        "who": "bot",
        "cn": "很有趣评价好。",
        "en": "Interesting, good reviews."
      },
      {
        "who": "you",
        "cn": "就看这部。",
        "en": "Let's watch this."
      },
      {
        "who": "bot",
        "cn": "买好票等你。",
        "en": "Get tickets wait for you."
      }
    ]
  },
  {
    "title": "咖啡文化",
    "level": "HSK 4",
    "icon": "fa-mug-hot",
    "words": [
      {
        "cn": "咖啡",
        "py": "kāfēi",
        "en": "coffee",
        "tip": "咖啡 beverage."
      },
      {
        "cn": "杯子",
        "py": "bēizi",
        "en": "cup",
        "tip": "杯子 container."
      },
      {
        "cn": "味道",
        "py": "wèidao",
        "en": "flavor",
        "tip": "味道 taste."
      },
      {
        "cn": "苦",
        "py": "kǔ",
        "en": "bitter",
        "tip": "苦 basic taste."
      },
      {
        "cn": "牛奶",
        "py": "niúnǎi",
        "en": "milk",
        "tip": "牛奶 added."
      },
      {
        "cn": "提神",
        "py": "tíshén",
        "en": "to refresh",
        "tip": "提神 wake up."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "喜欢喝咖啡？",
        "en": "Like coffee?"
      },
      {
        "who": "you",
        "cn": "有点苦加牛奶。",
        "en": "A bit bitter, add milk."
      },
      {
        "who": "bot",
        "cn": "咖啡提神工作前来一杯。",
        "en": "Refreshes before work."
      },
      {
        "who": "you",
        "cn": "不能太多睡不着。",
        "en": "Not too much."
      },
      {
        "who": "bot",
        "cn": "最喜欢什么味道？",
        "en": "Favorite flavor?"
      },
      {
        "who": "you",
        "cn": "拿铁牛奶中和苦味。",
        "en": "Latte balances bitterness."
      },
      {
        "who": "bot",
        "cn": "改天去咖啡馆。",
        "en": "Coffee shop sometime."
      }
    ]
  },
  {
    "title": "音乐欣赏",
    "level": "HSK 4",
    "icon": "fa-music",
    "words": [
      {
        "cn": "音乐",
        "py": "yīnyuè",
        "en": "music",
        "tip": "音乐 art form."
      },
      {
        "cn": "歌手",
        "py": "gēshǒu",
        "en": "singer",
        "tip": "歌手 sings."
      },
      {
        "cn": "歌词",
        "py": "gēcí",
        "en": "lyrics",
        "tip": "歌词 song words."
      },
      {
        "cn": "旋律",
        "py": "xuánlǜ",
        "en": "melody",
        "tip": "旋律 tune."
      },
      {
        "cn": "感动",
        "py": "gǎndòng",
        "en": "to be moved",
        "tip": "感动 emotional."
      },
      {
        "cn": "放松",
        "py": "fàngsōng",
        "en": "to relax",
        "tip": "放松 unwind."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "喜欢什么音乐？",
        "en": "What music?"
      },
      {
        "who": "you",
        "cn": "旋律优美的抒情歌。",
        "en": "Lyrical songs with melody."
      },
      {
        "who": "bot",
        "cn": "喜欢哪位歌手？",
        "en": "Favorite singer?"
      },
      {
        "who": "you",
        "cn": "周杰伦歌词和旋律特别。",
        "en": "Jay Chou, special lyrics."
      },
      {
        "who": "bot",
        "cn": "音乐让人放松。",
        "en": "Music relaxes."
      },
      {
        "who": "you",
        "cn": "是最好的解压方式。",
        "en": "Best stress relief."
      },
      {
        "who": "bot",
        "cn": "下次演唱会一起去。",
        "en": "Concert together next time."
      }
    ]
  },
  {
    "title": "天气话题",
    "level": "HSK 4",
    "icon": "fa-cloud-sun",
    "words": [
      {
        "cn": "天气",
        "py": "tiānqì",
        "en": "weather",
        "tip": "天气 small talk."
      },
      {
        "cn": "晴天",
        "py": "qíngtiān",
        "en": "sunny day",
        "tip": "晴天 clear."
      },
      {
        "cn": "下雨",
        "py": "xiàyǔ",
        "en": "to rain",
        "tip": "下雨 rainfall."
      },
      {
        "cn": "刮风",
        "py": "guāfēng",
        "en": "to be windy",
        "tip": "刮风 windy."
      },
      {
        "cn": "暖和",
        "py": "nuǎnhuo",
        "en": "warm",
        "tip": "暖和 comfortable."
      },
      {
        "cn": "凉快",
        "py": "liángkuai",
        "en": "cool",
        "tip": "凉快 pleasant."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "今天天气怎么样？",
        "en": "How's weather today?"
      },
      {
        "who": "you",
        "cn": "晴天很暖和。",
        "en": "Sunny and warm."
      },
      {
        "who": "bot",
        "cn": "明天会下雨。",
        "en": "Rain tomorrow."
      },
      {
        "who": "you",
        "cn": "带伞出门。刮风吗？",
        "en": "Bring umbrella. Windy?"
      },
      {
        "who": "bot",
        "cn": "雨后会凉快。",
        "en": "Cooler after rain."
      },
      {
        "who": "you",
        "cn": "凉快天适合走走。",
        "en": "Cool weather for walks."
      },
      {
        "who": "bot",
        "cn": "别错过好天气。",
        "en": "Don't miss good weather."
      }
    ]
  },
  {
    "title": "摄影爱好",
    "level": "HSK 4",
    "icon": "fa-camera",
    "words": [
      {
        "cn": "摄影",
        "py": "shèyǐng",
        "en": "photography",
        "tip": "摄影 art of photos."
      },
      {
        "cn": "照片",
        "py": "zhàopiàn",
        "en": "photo",
        "tip": "照片 image."
      },
      {
        "cn": "相机",
        "py": "xiàngjī",
        "en": "camera",
        "tip": "相机 device."
      },
      {
        "cn": "光线",
        "py": "guāngxiàn",
        "en": "light",
        "tip": "光线 key factor."
      },
      {
        "cn": "景色",
        "py": "jǐngsè",
        "en": "scenic view",
        "tip": "景色 beautiful."
      },
      {
        "cn": "纪念",
        "py": "jìniàn",
        "en": "to commemorate",
        "tip": "纪念 keep memory."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "喜欢摄影？",
        "en": "Like photography?"
      },
      {
        "who": "you",
        "cn": "带相机拍不同景色。",
        "en": "Take camera for scenery."
      },
      {
        "who": "bot",
        "cn": "拍好照片关键？",
        "en": "Key to good photos?"
      },
      {
        "who": "you",
        "cn": "光线最重要。",
        "en": "Light is most important."
      },
      {
        "who": "bot",
        "cn": "照片用来纪念？",
        "en": "Photos to commemorate?"
      },
      {
        "who": "you",
        "cn": "记录生活美好纪念。",
        "en": "Record life, sweet memories."
      },
      {
        "who": "bot",
        "cn": "下次叫上我。",
        "en": "Call me next time."
      }
    ]
  },
  {
    "title": "宠物生活",
    "level": "HSK 4",
    "icon": "fa-dog",
    "words": [
      {
        "cn": "宠物",
        "py": "chǒngwù",
        "en": "pet",
        "tip": "宠物 companion."
      },
      {
        "cn": "狗",
        "py": "gǒu",
        "en": "dog",
        "tip": "狗 common pet."
      },
      {
        "cn": "猫",
        "py": "māo",
        "en": "cat",
        "tip": "猫 popular pet."
      },
      {
        "cn": "喂",
        "py": "wèi",
        "en": "to feed",
        "tip": "喂 give food."
      },
      {
        "cn": "可爱",
        "py": "kěài",
        "en": "cute",
        "tip": "可爱 endearing."
      },
      {
        "cn": "陪伴",
        "py": "péibàn",
        "en": "to accompany",
        "tip": "陪伴 keep company."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "养宠物了？",
        "en": "Have a pet?"
      },
      {
        "who": "you",
        "cn": "养猫非常可爱。",
        "en": "Have a cat, very cute."
      },
      {
        "who": "bot",
        "cn": "每天喂几次？",
        "en": "Feed how many times?"
      },
      {
        "who": "you",
        "cn": "早晚各一次。",
        "en": "Morning and evening."
      },
      {
        "who": "bot",
        "cn": "也想养狗。",
        "en": "Want dog too."
      },
      {
        "who": "you",
        "cn": "养狗需要更多时间。",
        "en": "Dog needs more time."
      },
      {
        "who": "bot",
        "cn": "不能冲动。",
        "en": "Can't act on impulse."
      }
    ]
  },
  {
    "title": "季节变化",
    "level": "HSK 4",
    "icon": "fa-seedling",
    "words": [
      {
        "cn": "季节",
        "py": "jìjié",
        "en": "season",
        "tip": "季节 four divisions."
      },
      {
        "cn": "春天",
        "py": "chūntiān",
        "en": "spring",
        "tip": "春天 after winter."
      },
      {
        "cn": "秋天",
        "py": "qiūtiān",
        "en": "autumn",
        "tip": "秋天 harvest."
      },
      {
        "cn": "叶子",
        "py": "yèzi",
        "en": "leaf",
        "tip": "叶子 change color."
      },
      {
        "cn": "开花",
        "py": "kāihuā",
        "en": "to bloom",
        "tip": "开花 flowers open."
      },
      {
        "cn": "收获",
        "py": "shōuhuò",
        "en": "to harvest",
        "tip": "收获 gaining."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "最喜欢哪个季节？",
        "en": "Which season most?"
      },
      {
        "who": "you",
        "cn": "春天花都开了。",
        "en": "Spring flowers bloom."
      },
      {
        "who": "bot",
        "cn": "秋天叶子金黄色。",
        "en": "Autumn leaves golden."
      },
      {
        "who": "you",
        "cn": "秋天是收获季节。",
        "en": "Autumn harvest season."
      },
      {
        "who": "bot",
        "cn": "每个季节有美丽。",
        "en": "Every season has beauty."
      },
      {
        "who": "you",
        "cn": "享受每个季节的快乐。",
        "en": "Enjoy each season."
      },
      {
        "who": "bot",
        "cn": "四季很神奇。",
        "en": "Four seasons amazing."
      }
    ]
  },
  {
    "title": "人生规划",
    "level": "HSK 4",
    "icon": "fa-road",
    "words": [
      {
        "cn": "计划",
        "py": "jìhuà",
        "en": "plan",
        "tip": "计划 pre-arranged."
      },
      {
        "cn": "目标",
        "py": "mùbiāo",
        "en": "goal",
        "tip": "目标 is aim."
      },
      {
        "cn": "努力",
        "py": "nǔlì",
        "en": "to strive",
        "tip": "努力 verb noun."
      },
      {
        "cn": "梦想",
        "py": "mèngxiǎng",
        "en": "dream",
        "tip": "梦想 aspiration."
      },
      {
        "cn": "坚持",
        "py": "jiānchí",
        "en": "to persist",
        "tip": "坚持 perseverance."
      },
      {
        "cn": "未来",
        "py": "wèilái",
        "en": "future",
        "tip": "未来 time ahead."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "未来有什么计划？",
        "en": "Future plans?"
      },
      {
        "who": "you",
        "cn": "目标五年内开店。",
        "en": "Goal to open shop in 5 years."
      },
      {
        "who": "bot",
        "cn": "梦想很好。",
        "en": "Great dream."
      },
      {
        "who": "you",
        "cn": "坚持不放弃会成功。",
        "en": "Persist and succeed."
      },
      {
        "who": "bot",
        "cn": "你很有信心。",
        "en": "You are confident."
      },
      {
        "who": "you",
        "cn": "有目标就有希望。",
        "en": "Goal means hope."
      },
      {
        "who": "bot",
        "cn": "一起努力。",
        "en": "Let's work hard."
      }
    ]
  },
  {
    "title": "兴趣爱好",
    "level": "HSK 4",
    "icon": "fa-palette",
    "words": [
      {
        "cn": "兴趣",
        "py": "xìngqù",
        "en": "interest",
        "tip": "兴趣 what you enjoy."
      },
      {
        "cn": "爱好",
        "py": "àihào",
        "en": "hobby",
        "tip": "爱好 pastime."
      },
      {
        "cn": "画画",
        "py": "huàhuà",
        "en": "to draw",
        "tip": "画画 drawing."
      },
      {
        "cn": "收集",
        "py": "shōují",
        "en": "to collect",
        "tip": "收集 gather."
      },
      {
        "cn": "手工",
        "py": "shǒugōng",
        "en": "handicraft",
        "tip": "手工 by hand."
      },
      {
        "cn": "有趣",
        "py": "yǒuqù",
        "en": "interesting",
        "tip": "有趣 engaging."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "有什么兴趣？",
        "en": "What interests?"
      },
      {
        "who": "you",
        "cn": "喜欢画画和手工。",
        "en": "Like drawing and crafts."
      },
      {
        "who": "bot",
        "cn": "收集东西吗？",
        "en": "Collect anything?"
      },
      {
        "who": "you",
        "cn": "收集邮票。",
        "en": "Collect stamps."
      },
      {
        "who": "bot",
        "cn": "兴趣让生活丰富。",
        "en": "Hobbies enrich life."
      },
      {
        "who": "you",
        "cn": "有爱好不会无聊。",
        "en": "Hobbies never boring."
      },
      {
        "who": "bot",
        "cn": "让我看看收藏。",
        "en": "Let me see collection."
      }
    ]
  },
  {
    "title": "城市交通",
    "level": "HSK 4",
    "icon": "fa-bus",
    "words": [
      {
        "cn": "交通",
        "py": "jiāotōng",
        "en": "transportation",
        "tip": "交通 transport system."
      },
      {
        "cn": "方便",
        "py": "fāngbiàn",
        "en": "convenient",
        "tip": "方便 easy."
      },
      {
        "cn": "司机",
        "py": "sījī",
        "en": "driver",
        "tip": "司机 drives."
      },
      {
        "cn": "红灯",
        "py": "hóngdēng",
        "en": "red light",
        "tip": "红灯 stop."
      },
      {
        "cn": "马路",
        "py": "mǎlù",
        "en": "road",
        "tip": "马路 street."
      },
      {
        "cn": "安全",
        "py": "ānquán",
        "en": "safety",
        "tip": "安全 safe."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "交通方便吗？",
        "en": "Transportation convenient?"
      },
      {
        "who": "you",
        "cn": "公交地铁都可以。",
        "en": "Buses and subways."
      },
      {
        "who": "bot",
        "cn": "司机守规则？",
        "en": "Drivers follow rules?"
      },
      {
        "who": "you",
        "cn": "大部分有人闯红灯。",
        "en": "Most do, some run lights."
      },
      {
        "who": "bot",
        "cn": "过马路注意安全。",
        "en": "Cross road safely."
      },
      {
        "who": "you",
        "cn": "安全第一。",
        "en": "Safety first."
      },
      {
        "who": "bot",
        "cn": "希望更方便安全。",
        "en": "Hope more convenient and safe."
      }
    ]
  },
  {
    "title": "工作选择",
    "level": "HSK 4",
    "icon": "fa-briefcase",
    "words": [
      {
        "cn": "工作",
        "py": "gōngzuò",
        "en": "work",
        "tip": "工作 noun and verb."
      },
      {
        "cn": "工资",
        "py": "gōngzī",
        "en": "salary",
        "tip": "工资 payment."
      },
      {
        "cn": "职业",
        "py": "zhíyè",
        "en": "career",
        "tip": "职业 formal occupation."
      },
      {
        "cn": "面试",
        "py": "miànshì",
        "en": "interview",
        "tip": "面试 evaluation."
      },
      {
        "cn": "简历",
        "py": "jiǎnlì",
        "en": "resume",
        "tip": "简历 summary."
      },
      {
        "cn": "升职",
        "py": "shēngzhí",
        "en": "promotion",
        "tip": "升职 move up."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "在找工作？",
        "en": "Looking for job?"
      },
      {
        "who": "you",
        "cn": "投了几份简历有面试。",
        "en": "Sent resumes have interview."
      },
      {
        "who": "bot",
        "cn": "有什么要求？",
        "en": "Requirements?"
      },
      {
        "who": "you",
        "cn": "工资合理有升职机会。",
        "en": "Reasonable salary growth."
      },
      {
        "who": "bot",
        "cn": "面试要自信。",
        "en": "Be confident."
      },
      {
        "who": "you",
        "cn": "谢谢会努力表现。",
        "en": "Thanks do my best."
      },
      {
        "who": "bot",
        "cn": "祝找到满意工作。",
        "en": "Find satisfying job."
      }
    ]
  },
  {
    "title": "社会公平",
    "level": "HSK 4",
    "icon": "fa-scale-balanced",
    "words": [
      {
        "cn": "公平",
        "py": "gōngpíng",
        "en": "fair",
        "tip": "公平 fairness."
      },
      {
        "cn": "机会",
        "py": "jīhuì",
        "en": "opportunity",
        "tip": "机会 chance."
      },
      {
        "cn": "教育",
        "py": "jiàoyù",
        "en": "education",
        "tip": "教育 social concept."
      },
      {
        "cn": "平等",
        "py": "píngděng",
        "en": "equality",
        "tip": "平等 equal status."
      },
      {
        "cn": "尊重",
        "py": "zūnzhòng",
        "en": "to respect",
        "tip": "尊重 esteem."
      },
      {
        "cn": "社会",
        "py": "shèhuì",
        "en": "society",
        "tip": "社会 community."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "社会公平吗？",
        "en": "Society fair?"
      },
      {
        "who": "you",
        "cn": "不完全但可争取机会。",
        "en": "Not completely but strive."
      },
      {
        "who": "bot",
        "cn": "教育让社会更平等。",
        "en": "Education promotes equality."
      },
      {
        "who": "you",
        "cn": "通过教育得到更多机会。",
        "en": "Through education, more opportunities."
      },
      {
        "who": "bot",
        "cn": "互相帮助促进公平。",
        "en": "Helping promotes fairness."
      },
      {
        "who": "you",
        "cn": "公平需要每个人努力。",
        "en": "Fairness needs everyone."
      },
      {
        "who": "bot",
        "cn": "从小事做起。",
        "en": "Start with small things."
      }
    ]
  },
  {
    "title": "商务谈判",
    "level": "HSK 5",
    "icon": "fa-handshake",
    "words": [
      {
        "cn": "谈判",
        "py": "tánpàn",
        "en": "negotiation",
        "tip": "谈判 formal discussion."
      },
      {
        "cn": "合作",
        "py": "hézuò",
        "en": "cooperation",
        "tip": "合作 working together."
      },
      {
        "cn": "协议",
        "py": "xiéyì",
        "en": "agreement",
        "tip": "协议 formal understanding."
      },
      {
        "cn": "利益",
        "py": "lìyì",
        "en": "benefit",
        "tip": "利益 gains."
      },
      {
        "cn": "条款",
        "py": "tiáokuǎn",
        "en": "clause",
        "tip": "条款 provisions."
      },
      {
        "cn": "达成",
        "py": "dáchéng",
        "en": "to reach",
        "tip": "达成 conclude."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "关于合作需要谈判。",
        "en": "Need negotiation on cooperation."
      },
      {
        "who": "you",
        "cn": "希望能达成满意协议。",
        "en": "Hope reach satisfactory agreement."
      },
      {
        "who": "bot",
        "cn": "有几个条款再讨论。",
        "en": "Several clauses need discussion."
      },
      {
        "who": "you",
        "cn": "重视双方利益。",
        "en": "Value mutual interests."
      },
      {
        "who": "bot",
        "cn": "价格让步可签长期合作。",
        "en": "Price concession for long-term."
      },
      {
        "who": "you",
        "cn": "希望付款条件更灵活。",
        "en": "Flexibility on payment."
      },
      {
        "who": "bot",
        "cn": "双方调整争取达成一致。",
        "en": "Adjust and reach consensus."
      }
    ]
  },
  {
    "title": "合同管理",
    "level": "HSK 5",
    "icon": "fa-file-signature",
    "words": [
      {
        "cn": "合同",
        "py": "hétong",
        "en": "contract",
        "tip": "合同 legally binding."
      },
      {
        "cn": "签署",
        "py": "qiānshǔ",
        "en": "to sign",
        "tip": "签署 formal signing."
      },
      {
        "cn": "有效期",
        "py": "yǒuxiàoqī",
        "en": "validity period",
        "tip": "有效期 valid time."
      },
      {
        "cn": "违约",
        "py": "wéiyuē",
        "en": "to breach",
        "tip": "违约 violate contract."
      },
      {
        "cn": "赔偿",
        "py": "péicháng",
        "en": "compensation",
        "tip": "赔偿 remedy."
      },
      {
        "cn": "争议",
        "py": "zhēngyì",
        "en": "dispute",
        "tip": "争议 disagreement."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "合同准备了请看看。",
        "en": "Contract ready, please review."
      },
      {
        "who": "you",
        "cn": "有效期多久？争议怎么解决？",
        "en": "Validity period? Dispute resolution?"
      },
      {
        "who": "bot",
        "cn": "两年有效期可仲裁。",
        "en": "Two years, can arbitrate."
      },
      {
        "who": "you",
        "cn": "违约赔偿标准？",
        "en": "Breach compensation?"
      },
      {
        "who": "bot",
        "cn": "赔偿实际损失。",
        "en": "Actual loss compensation."
      },
      {
        "who": "you",
        "cn": "明天可以签署。",
        "en": "Can sign tomorrow."
      },
      {
        "who": "bot",
        "cn": "期待长期合作。",
        "en": "Look forward to cooperation."
      }
    ]
  },
  {
    "title": "合作伙伴",
    "level": "HSK 5",
    "icon": "fa-hand-holding-hand",
    "words": [
      {
        "cn": "伙伴",
        "py": "huǒbàn",
        "en": "partner",
        "tip": "伙伴 companion."
      },
      {
        "cn": "资源",
        "py": "zīyuán",
        "en": "resource",
        "tip": "资源 assets."
      },
      {
        "cn": "共享",
        "py": "gòngxiǎng",
        "en": "to share",
        "tip": "共享 joint use."
      },
      {
        "cn": "信任",
        "py": "xìnrèn",
        "en": "trust",
        "tip": "信任 crucial."
      },
      {
        "cn": "共同",
        "py": "gòngtóng",
        "en": "common",
        "tip": "共同 joint."
      },
      {
        "cn": "发展",
        "py": "fāzhǎn",
        "en": "development",
        "tip": "发展 growth."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "合作信任最重要。",
        "en": "Trust is key."
      },
      {
        "who": "you",
        "cn": "信任上的合作才长久。",
        "en": "Trust-based cooperation lasts."
      },
      {
        "who": "bot",
        "cn": "有什么资源共享？",
        "en": "What resources share?"
      },
      {
        "who": "you",
        "cn": "有技术和市场渠道。",
        "en": "Technology and market channels."
      },
      {
        "who": "bot",
        "cn": "共同目标是什么？",
        "en": "Common goal?"
      },
      {
        "who": "you",
        "cn": "推动创新扩大份额。",
        "en": "Drive innovation, expand share."
      },
      {
        "who": "bot",
        "cn": "希望成长期伙伴。",
        "en": "Hope to be long-term partners."
      }
    ]
  },
  {
    "title": "市场营销",
    "level": "HSK 5",
    "icon": "fa-bullhorn",
    "words": [
      {
        "cn": "市场",
        "py": "shìchǎng",
        "en": "market",
        "tip": "市场 trade place."
      },
      {
        "cn": "营销",
        "py": "yíngxiāo",
        "en": "marketing",
        "tip": "营销 promotion."
      },
      {
        "cn": "品牌",
        "py": "pǐnpái",
        "en": "brand",
        "tip": "品牌 identity."
      },
      {
        "cn": "推广",
        "py": "tuīguǎng",
        "en": "to promote",
        "tip": "推广 spread."
      },
      {
        "cn": "消费者",
        "py": "xiāofèizhě",
        "en": "consumer",
        "tip": "消费者 end user."
      },
      {
        "cn": "竞争",
        "py": "jìngzhēng",
        "en": "competition",
        "tip": "竞争 rivalry."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "营销计划好了？",
        "en": "Marketing plan ready?"
      },
      {
        "who": "you",
        "cn": "社交媒体推广品牌。",
        "en": "Promote through social media."
      },
      {
        "who": "bot",
        "cn": "竞争激烈优势在哪？",
        "en": "Competition fierce, advantages?"
      },
      {
        "who": "you",
        "cn": "质量高价格有竞争力。",
        "en": "High quality, competitive price."
      },
      {
        "who": "bot",
        "cn": "消费者反馈？",
        "en": "Consumer feedback?"
      },
      {
        "who": "you",
        "cn": "满意90%以上。",
        "en": "Satisfaction over 90%."
      },
      {
        "who": "bot",
        "cn": "继续做好推广。",
        "en": "Keep promoting."
      }
    ]
  },
  {
    "title": "企业财务",
    "level": "HSK 5",
    "icon": "fa-coins",
    "words": [
      {
        "cn": "财务",
        "py": "cáiwù",
        "en": "finance",
        "tip": "财务 company money."
      },
      {
        "cn": "成本",
        "py": "chéngběn",
        "en": "cost",
        "tip": "成本 expense."
      },
      {
        "cn": "利润",
        "py": "lìrùn",
        "en": "profit",
        "tip": "利润 revenue minus cost."
      },
      {
        "cn": "预算",
        "py": "yùsuàn",
        "en": "budget",
        "tip": "预算 financial plan."
      },
      {
        "cn": "收支",
        "py": "shōuzhī",
        "en": "income expenses",
        "tip": "收支 flow."
      },
      {
        "cn": "报表",
        "py": "bàobiǎo",
        "en": "report",
        "tip": "报表 summary."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "季度报表利润增长。",
        "en": "Quarterly report profit up."
      },
      {
        "who": "you",
        "cn": "成本也上升了。",
        "en": "Costs also up."
      },
      {
        "who": "bot",
        "cn": "预算建议？",
        "en": "Budget suggestions?"
      },
      {
        "who": "you",
        "cn": "减少不必要支出。",
        "en": "Reduce unnecessary spending."
      },
      {
        "who": "bot",
        "cn": "财务健康很关键。",
        "en": "Financial health critical."
      },
      {
        "who": "you",
        "cn": "密切跟踪及时调整。",
        "en": "Monitor and adjust."
      },
      {
        "who": "bot",
        "cn": "好的财务管理重要。",
        "en": "Good finance important."
      }
    ]
  },
  {
    "title": "政府职能",
    "level": "HSK 5",
    "icon": "fa-landmark",
    "words": [
      {
        "cn": "政府",
        "py": "zhèngfǔ",
        "en": "government",
        "tip": "政府 governing body."
      },
      {
        "cn": "政策",
        "py": "zhèngcè",
        "en": "policy",
        "tip": "政策 guidelines."
      },
      {
        "cn": "制度",
        "py": "zhìdù",
        "en": "system",
        "tip": "制度 rules set."
      },
      {
        "cn": "改革",
        "py": "gǎigé",
        "en": "reform",
        "tip": "改革 improvement."
      },
      {
        "cn": "管理",
        "py": "guǎnlǐ",
        "en": "to manage",
        "tip": "管理 directing."
      },
      {
        "cn": "服务",
        "py": "fúwù",
        "en": "service",
        "tip": "服务 public service."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "政府最重要职能？",
        "en": "Government most important function?"
      },
      {
        "who": "you",
        "cn": "制定政策管理社会秩序。",
        "en": "Make policy, manage order."
      },
      {
        "who": "bot",
        "cn": "推行了不少改革。",
        "en": "Many reforms."
      },
      {
        "who": "you",
        "cn": "制度改革更公平。",
        "en": "Reforms made fairer."
      },
      {
        "who": "bot",
        "cn": "管理水平影响生活。",
        "en": "Management affects lives."
      },
      {
        "who": "you",
        "cn": "政府需不断进步。",
        "en": "Government needs progress."
      },
      {
        "who": "bot",
        "cn": "这是长期过程。",
        "en": "Long-term process."
      }
    ]
  },
  {
    "title": "选举制度",
    "level": "HSK 5",
    "icon": "fa-vote-yea",
    "words": [
      {
        "cn": "选举",
        "py": "xuǎnjǔ",
        "en": "election",
        "tip": "选举 choose reps."
      },
      {
        "cn": "投票",
        "py": "tóupiào",
        "en": "to vote",
        "tip": "投票 cast ballot."
      },
      {
        "cn": "候选人",
        "py": "hòuxuǎnrén",
        "en": "candidate",
        "tip": "候选人 running."
      },
      {
        "cn": "选民",
        "py": "xuǎnmín",
        "en": "voter",
        "tip": "选民 electorate."
      },
      {
        "cn": "民主",
        "py": "mínzhǔ",
        "en": "democracy",
        "tip": "民主 by people."
      },
      {
        "cn": "权利",
        "py": "quánlì",
        "en": "right",
        "tip": "权利 entitlement."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "投票给谁？",
        "en": "Who will you vote for?"
      },
      {
        "who": "you",
        "cn": "需了解候选人政策。",
        "en": "Need to know policies."
      },
      {
        "who": "bot",
        "cn": "选举是重要权利。",
        "en": "Election important right."
      },
      {
        "who": "you",
        "cn": "选民应认真行使。",
        "en": "Exercise rights seriously."
      },
      {
        "who": "bot",
        "cn": "民主让人民选择。",
        "en": "Democracy lets people choose."
      },
      {
        "who": "you",
        "cn": "要对自己的选择负责。",
        "en": "Be responsible for choice."
      },
      {
        "who": "bot",
        "cn": "说得有道理。",
        "en": "Makes sense."
      }
    ]
  },
  {
    "title": "国际关系",
    "level": "HSK 5",
    "icon": "fa-flag",
    "words": [
      {
        "cn": "国际",
        "py": "guójì",
        "en": "international",
        "tip": "国际 between nations."
      },
      {
        "cn": "外交",
        "py": "wàijiāo",
        "en": "diplomacy",
        "tip": "外交 conduct."
      },
      {
        "cn": "大使",
        "py": "dàshǐ",
        "en": "ambassador",
        "tip": "大使 diplomat."
      },
      {
        "cn": "合作",
        "py": "hézuò",
        "en": "cooperation",
        "tip": "合作 between countries."
      },
      {
        "cn": "冲突",
        "py": "chōngtū",
        "en": "conflict",
        "tip": "冲突 clash."
      },
      {
        "cn": "谈判",
        "py": "tánpàn",
        "en": "negotiation",
        "tip": "谈判 resolves."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "国际关系怎么样？",
        "en": "International relations?"
      },
      {
        "who": "you",
        "cn": "既有合作也有冲突。",
        "en": "Cooperation and conflict."
      },
      {
        "who": "bot",
        "cn": "外交维护和平。",
        "en": "Diplomacy maintains peace."
      },
      {
        "who": "you",
        "cn": "谈判解决分歧最好。",
        "en": "Negotiation best."
      },
      {
        "who": "bot",
        "cn": "合作带来发展。",
        "en": "Cooperation brings growth."
      },
      {
        "who": "you",
        "cn": "没有国家能独善其身。",
        "en": "No country stands alone."
      },
      {
        "who": "bot",
        "cn": "理解和包容是基石。",
        "en": "Understanding is foundation."
      }
    ]
  },
  {
    "title": "外交政策",
    "level": "HSK 5",
    "icon": "fa-handshake-simple",
    "words": [
      {
        "cn": "外交",
        "py": "wàijiāo",
        "en": "diplomacy",
        "tip": "外交 manages relationships."
      },
      {
        "cn": "战略",
        "py": "zhànlüè",
        "en": "strategy",
        "tip": "战略 grand plan."
      },
      {
        "cn": "利益",
        "py": "lìyì",
        "en": "interests",
        "tip": "利益 national."
      },
      {
        "cn": "主权",
        "py": "zhǔquán",
        "en": "sovereignty",
        "tip": "主权 authority."
      },
      {
        "cn": "联盟",
        "py": "liánméng",
        "en": "alliance",
        "tip": "联盟 union."
      },
      {
        "cn": "和平",
        "py": "hépíng",
        "en": "peace",
        "tip": "和平 no war."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "战略利益影响政策？",
        "en": "Strategic interests affect policy?"
      },
      {
        "who": "you",
        "cn": "国家优先维护主权。",
        "en": "Prioritize sovereignty."
      },
      {
        "who": "bot",
        "cn": "联盟关系常见。",
        "en": "Alliances common."
      },
      {
        "who": "you",
        "cn": "增强实力需承担义务。",
        "en": "Strengthen but duties."
      },
      {
        "who": "bot",
        "cn": "和平发展共同愿望。",
        "en": "Peaceful development common wish."
      },
      {
        "who": "you",
        "cn": "希望国际更和平。",
        "en": "Hope for more peace."
      },
      {
        "who": "bot",
        "cn": "这是期望。",
        "en": "Everyone hopes."
      }
    ]
  },
  {
    "title": "历史文化",
    "level": "HSK 5",
    "icon": "fa-timeline",
    "words": [
      {
        "cn": "历史",
        "py": "lìshǐ",
        "en": "history",
        "tip": "历史 past events."
      },
      {
        "cn": "朝代",
        "py": "cháodài",
        "en": "dynasty",
        "tip": "朝代 period."
      },
      {
        "cn": "皇帝",
        "py": "huángdì",
        "en": "emperor",
        "tip": "皇帝 ruler."
      },
      {
        "cn": "革命",
        "py": "gémìng",
        "en": "revolution",
        "tip": "革命 power change."
      },
      {
        "cn": "文明",
        "py": "wénmíng",
        "en": "civilization",
        "tip": "文明 advanced society."
      },
      {
        "cn": "遗产",
        "py": "yíchǎn",
        "en": "heritage",
        "tip": "遗产 inheritance."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "哪个朝代最感兴趣？",
        "en": "Which dynasty interests?"
      },
      {
        "who": "you",
        "cn": "唐朝文化繁荣。",
        "en": "Tang, culture prosperous."
      },
      {
        "who": "bot",
        "cn": "很多著名皇帝。",
        "en": "Many famous emperors."
      },
      {
        "who": "you",
        "cn": "文明影响到今天。",
        "en": "Civilization still influences."
      },
      {
        "who": "bot",
        "cn": "革命的作用？",
        "en": "Role of revolution?"
      },
      {
        "who": "you",
        "cn": "推动了社会变革。",
        "en": "Drives social change."
      },
      {
        "who": "bot",
        "cn": "历史是镜子。",
        "en": "History is mirror."
      }
    ]
  },
  {
    "title": "诗歌意境",
    "level": "HSK 5",
    "icon": "fa-feather-pointed",
    "words": [
      {
        "cn": "诗歌",
        "py": "shīgē",
        "en": "poetry",
        "tip": "诗歌 literary form."
      },
      {
        "cn": "诗人",
        "py": "shīrén",
        "en": "poet",
        "tip": "诗人 poetry writer."
      },
      {
        "cn": "意境",
        "py": "yìjìng",
        "en": "artistic conception",
        "tip": "意境 imaginative realm."
      },
      {
        "cn": "韵律",
        "py": "yùnlǜ",
        "en": "rhythm",
        "tip": "韵律 sound pattern."
      },
      {
        "cn": "抒情",
        "py": "shūqíng",
        "en": "lyrical",
        "tip": "抒情 deep feelings."
      },
      {
        "cn": "比喻",
        "py": "bǐyù",
        "en": "metaphor",
        "tip": "比喻 figure of speech."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "喜欢诗歌？",
        "en": "Like poetry?"
      },
      {
        "who": "you",
        "cn": "诗人用比喻和韵律。",
        "en": "Poets use metaphor and rhythm."
      },
      {
        "who": "bot",
        "cn": "最喜欢的诗人？",
        "en": "Favorite poet?"
      },
      {
        "who": "you",
        "cn": "李白抒情充满想象。",
        "en": "Li Bai lyrical and imaginative."
      },
      {
        "who": "bot",
        "cn": "语言简短意思深刻。",
        "en": "Brief but profound."
      },
      {
        "who": "you",
        "cn": "读诗像与古人对话。",
        "en": "Like dialogue with ancients."
      },
      {
        "who": "bot",
        "cn": "有意境才能动人。",
        "en": "Conception moves people."
      }
    ]
  },
  {
    "title": "小说创作",
    "level": "HSK 5",
    "icon": "fa-pen-fancy",
    "words": [
      {
        "cn": "小说",
        "py": "xiǎoshuō",
        "en": "novel",
        "tip": "小说 long fiction."
      },
      {
        "cn": "作家",
        "py": "zuòjiā",
        "en": "writer",
        "tip": "作家 author."
      },
      {
        "cn": "情节",
        "py": "qíngjié",
        "en": "plot",
        "tip": "情节 events."
      },
      {
        "cn": "人物",
        "py": "rénwù",
        "en": "character",
        "tip": "人物 individuals."
      },
      {
        "cn": "描写",
        "py": "miáoxiě",
        "en": "to describe",
        "tip": "描写 depiction."
      },
      {
        "cn": "主题",
        "py": "zhǔtí",
        "en": "theme",
        "tip": "主题 central idea."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "在读谁的小说？",
        "en": "Whose novel?"
      },
      {
        "who": "you",
        "cn": "余华的活着人物真实。",
        "en": "Yu Hua To Live, real characters."
      },
      {
        "who": "bot",
        "cn": "主题是什么？",
        "en": "Theme?"
      },
      {
        "who": "you",
        "cn": "生命和苦难。",
        "en": "Life and suffering."
      },
      {
        "who": "bot",
        "cn": "好小说让人思考。",
        "en": "Good novels make think."
      },
      {
        "who": "you",
        "cn": "我花时间读经典。",
        "en": "I spend time on classics."
      },
      {
        "who": "bot",
        "cn": "作家创造世界。",
        "en": "Writers create worlds."
      }
    ]
  },
  {
    "title": "古代散文",
    "level": "HSK 5",
    "icon": "fa-scroll",
    "words": [
      {
        "cn": "散文",
        "py": "sǎnwén",
        "en": "prose",
        "tip": "散文 non-fiction."
      },
      {
        "cn": "古文",
        "py": "gǔwén",
        "en": "classical prose",
        "tip": "古文 ancient."
      },
      {
        "cn": "哲理",
        "py": "zhélǐ",
        "en": "philosophical truth",
        "tip": "哲理 insight."
      },
      {
        "cn": "名句",
        "py": "míngjù",
        "en": "famous saying",
        "tip": "名句 well-known."
      },
      {
        "cn": "文言",
        "py": "wényán",
        "en": "classical Chinese",
        "tip": "文言 ancient language."
      },
      {
        "cn": "赏析",
        "py": "shǎngxī",
        "en": "to appreciate",
        "tip": "赏析 enjoy."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "能读懂古文？",
        "en": "Can read classical Chinese?"
      },
      {
        "who": "you",
        "cn": "简单的可以。",
        "en": "Simple ones okay."
      },
      {
        "who": "bot",
        "cn": "喜欢哪篇？",
        "en": "Which essay?"
      },
      {
        "who": "you",
        "cn": "岳阳楼记很多名句。",
        "en": "Record of Yueyang Tower."
      },
      {
        "who": "bot",
        "cn": "文言难懂有韵味。",
        "en": "Hard but charming."
      },
      {
        "who": "you",
        "cn": "赏析需要了解背景。",
        "en": "Need to know context."
      },
      {
        "who": "bot",
        "cn": "古人智慧值得学习。",
        "en": "Ancient wisdom worth learning."
      }
    ]
  },
  {
    "title": "文学批评",
    "level": "HSK 5",
    "icon": "fa-bookmark",
    "words": [
      {
        "cn": "批评",
        "py": "pīpíng",
        "en": "criticism",
        "tip": "文学批评 review."
      },
      {
        "cn": "分析",
        "py": "fēnxī",
        "en": "analysis",
        "tip": "分析 detail."
      },
      {
        "cn": "观点",
        "py": "guāndiǎn",
        "en": "viewpoint",
        "tip": "观点 perspective."
      },
      {
        "cn": "评价",
        "py": "píngjià",
        "en": "to evaluate",
        "tip": "评价 opinion."
      },
      {
        "cn": "深度",
        "py": "shēndù",
        "en": "depth",
        "tip": "深度 profundity."
      },
      {
        "cn": "解读",
        "py": "jiědú",
        "en": "to interpret",
        "tip": "解读 meaning."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "怎么看文学批评？",
        "en": "Literary criticism?"
      },
      {
        "who": "you",
        "cn": "是深度分析和解读。",
        "en": "It's in-depth analysis."
      },
      {
        "who": "bot",
        "cn": "需要独特观点。",
        "en": "Need unique perspective."
      },
      {
        "who": "you",
        "cn": "要用充分理由支持。",
        "en": "Support with reasons."
      },
      {
        "who": "bot",
        "cn": "帮助理解作品。",
        "en": "Helps understand works."
      },
      {
        "who": "you",
        "cn": "也能启发作家。",
        "en": "Inspires writers."
      },
      {
        "who": "bot",
        "cn": "有价值的对话。",
        "en": "Valuable dialogue."
      }
    ]
  },
  {
    "title": "物理学基础",
    "level": "HSK 5",
    "icon": "fa-atom",
    "words": [
      {
        "cn": "物理",
        "py": "wùlǐ",
        "en": "physics",
        "tip": "物理 matter energy."
      },
      {
        "cn": "能量",
        "py": "néngliàng",
        "en": "energy",
        "tip": "能量 capacity."
      },
      {
        "cn": "物质",
        "py": "wùzhì",
        "en": "matter",
        "tip": "物质 substance."
      },
      {
        "cn": "重力",
        "py": "zhònglì",
        "en": "gravity",
        "tip": "重力 force."
      },
      {
        "cn": "运动",
        "py": "yùndòng",
        "en": "motion",
        "tip": "运动 position change."
      },
      {
        "cn": "实验",
        "py": "shíyàn",
        "en": "experiment",
        "tip": "实验 test."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "对物理感兴趣？",
        "en": "Interested in physics?"
      },
      {
        "who": "you",
        "cn": "研究物质和能量关系。",
        "en": "Studies matter-energy."
      },
      {
        "who": "bot",
        "cn": "重力重要概念。",
        "en": "Gravity important concept."
      },
      {
        "who": "you",
        "cn": "做过运动测量实验。",
        "en": "Did motion experiments."
      },
      {
        "who": "bot",
        "cn": "帮助理解世界。",
        "en": "Helps understand world."
      },
      {
        "who": "you",
        "cn": "从微观到宇宙。",
        "en": "Micro to cosmos."
      },
      {
        "who": "bot",
        "cn": "科学让生活好。",
        "en": "Science makes life better."
      }
    ]
  },
  {
    "title": "生物学探索",
    "level": "HSK 5",
    "icon": "fa-dna",
    "words": [
      {
        "cn": "生物",
        "py": "shēngwù",
        "en": "biology",
        "tip": "生物 living."
      },
      {
        "cn": "细胞",
        "py": "xìbāo",
        "en": "cell",
        "tip": "细胞 life unit."
      },
      {
        "cn": "基因",
        "py": "jīyīn",
        "en": "gene",
        "tip": "基因 heredity."
      },
      {
        "cn": "进化",
        "py": "jìnhuà",
        "en": "evolution",
        "tip": "进化 change."
      },
      {
        "cn": "生态",
        "py": "shēngtài",
        "en": "ecology",
        "tip": "生态 relations."
      },
      {
        "cn": "物种",
        "py": "wùzhǒng",
        "en": "species",
        "tip": "物种 group."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "什么最着迷？",
        "en": "What fascinates?"
      },
      {
        "who": "you",
        "cn": "基因研究细胞内的基因。",
        "en": "Genes inside cells."
      },
      {
        "who": "bot",
        "cn": "进化论重要。",
        "en": "Evolution theory important."
      },
      {
        "who": "you",
        "cn": "物种通过进化适应。",
        "en": "Species adapt through evolution."
      },
      {
        "who": "bot",
        "cn": "生物技术发展快。",
        "en": "Biotech develops fast."
      },
      {
        "who": "you",
        "cn": "基因治疗更多疾病。",
        "en": "Gene tech treat diseases."
      },
      {
        "who": "bot",
        "cn": "科学前沿令人期待。",
        "en": "Frontier exciting."
      }
    ]
  },
  {
    "title": "化学世界",
    "level": "HSK 5",
    "icon": "fa-flask",
    "words": [
      {
        "cn": "化学",
        "py": "huàxué",
        "en": "chemistry",
        "tip": "化学 substances."
      },
      {
        "cn": "元素",
        "py": "yuánsù",
        "en": "element",
        "tip": "元素 building blocks."
      },
      {
        "cn": "分子",
        "py": "fēnzǐ",
        "en": "molecule",
        "tip": "分子 atoms."
      },
      {
        "cn": "反应",
        "py": "fǎnyìng",
        "en": "reaction",
        "tip": "反应 chemical change."
      },
      {
        "cn": "化合物",
        "py": "huàhéwù",
        "en": "compound",
        "tip": "化合物 elements."
      },
      {
        "cn": "实验室",
        "py": "shíyànshì",
        "en": "laboratory",
        "tip": "实验室 lab."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "做过化学实验？",
        "en": "Done chemistry experiments?"
      },
      {
        "who": "you",
        "cn": "实验室反应很有意思。",
        "en": "Reactions in lab interesting."
      },
      {
        "who": "bot",
        "cn": "背过元素周期表？",
        "en": "Periodic table memorized?"
      },
      {
        "who": "you",
        "cn": "一些。元素组成分子。",
        "en": "Some. Elements make molecules."
      },
      {
        "who": "bot",
        "cn": "反应在生活中无处不在。",
        "en": "Reactions everywhere."
      },
      {
        "who": "you",
        "cn": "食物消化是反应。",
        "en": "Digestion is reaction."
      },
      {
        "who": "bot",
        "cn": "化学奇妙。",
        "en": "Chemistry wonderful."
      }
    ]
  },
  {
    "title": "宇宙探索",
    "level": "HSK 5",
    "icon": "fa-rocket",
    "words": [
      {
        "cn": "宇宙",
        "py": "yǔzhòu",
        "en": "universe",
        "tip": "宇宙 all space."
      },
      {
        "cn": "行星",
        "py": "xíngxīng",
        "en": "planet",
        "tip": "行星 orbits."
      },
      {
        "cn": "卫星",
        "py": "wèixīng",
        "en": "satellite",
        "tip": "卫星 natural/artificial."
      },
      {
        "cn": "恒星",
        "py": "héngxīng",
        "en": "star",
        "tip": "恒星 luminous."
      },
      {
        "cn": "探索",
        "py": "tànsuǒ",
        "en": "to explore",
        "tip": "探索 investigate."
      },
      {
        "cn": "发射",
        "py": "fāshè",
        "en": "to launch",
        "tip": "发射 send to space."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "对宇宙探索感兴趣？",
        "en": "Interested in space?"
      },
      {
        "who": "you",
        "cn": "发射卫星去探索。",
        "en": "Launch satellites to explore."
      },
      {
        "who": "bot",
        "cn": "哪些行星有价值？",
        "en": "Which planets valuable?"
      },
      {
        "who": "you",
        "cn": "火星可能有生命。",
        "en": "Mars may have life."
      },
      {
        "who": "bot",
        "cn": "恒星和行星区别？",
        "en": "Difference?"
      },
      {
        "who": "you",
        "cn": "恒星发光行星反射。",
        "en": "Stars emit, planets reflect."
      },
      {
        "who": "bot",
        "cn": "还有很多奥秘。",
        "en": "Many mysteries."
      }
    ]
  },
  {
    "title": "医学进步",
    "level": "HSK 5",
    "icon": "fa-stethoscope",
    "words": [
      {
        "cn": "医学",
        "py": "yīxué",
        "en": "medicine",
        "tip": "医学 treat illness."
      },
      {
        "cn": "疫苗",
        "py": "yìmiáo",
        "en": "vaccine",
        "tip": "疫苗 immunity."
      },
      {
        "cn": "手术",
        "py": "shǒushù",
        "en": "surgery",
        "tip": "手术 procedure."
      },
      {
        "cn": "诊断",
        "py": "zhěnduàn",
        "en": "diagnosis",
        "tip": "诊断 identify."
      },
      {
        "cn": "药物",
        "py": "yàowù",
        "en": "medication",
        "tip": "药物 treatment."
      },
      {
        "cn": "治疗",
        "py": "zhìliáo",
        "en": "treatment",
        "tip": "治疗 care."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "最大进步是什么？",
        "en": "Biggest advance?"
      },
      {
        "who": "you",
        "cn": "疫苗拯救了无数生命。",
        "en": "Vaccines saved lives."
      },
      {
        "who": "bot",
        "cn": "手术技术提高。",
        "en": "Surgical improvement."
      },
      {
        "who": "you",
        "cn": "诊断药物有效治疗。",
        "en": "Diagnosis and meds treat."
      },
      {
        "who": "bot",
        "cn": "医学让人更长寿。",
        "en": "Medicine longer life."
      },
      {
        "who": "you",
        "cn": "预防比治疗重要。",
        "en": "Prevention better than cure."
      },
      {
        "who": "bot",
        "cn": "健康生活最好。",
        "en": "Healthy lifestyle best."
      }
    ]
  },
  {
    "title": "孔子思想",
    "level": "HSK 5",
    "icon": "fa-chinese-yuan",
    "words": [
      {
        "cn": "孔子",
        "py": "Kǒngzǐ",
        "en": "Confucius",
        "tip": "孔子 philosopher."
      },
      {
        "cn": "儒家",
        "py": "Rújiā",
        "en": "Confucianism",
        "tip": "儒家 school."
      },
      {
        "cn": "仁爱",
        "py": "rénài",
        "en": "benevolence",
        "tip": "仁爱 core virtue."
      },
      {
        "cn": "道德",
        "py": "dàodé",
        "en": "morality",
        "tip": "道德 ethics."
      },
      {
        "cn": "礼仪",
        "py": "lǐyí",
        "en": "etiquette",
        "tip": "礼仪 code of conduct."
      },
      {
        "cn": "君子",
        "py": "jūnzǐ",
        "en": "gentleman",
        "tip": "君子 noble."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "孔子思想了解吗？",
        "en": "Know Confucius?"
      },
      {
        "who": "you",
        "cn": "提倡仁爱和道德。",
        "en": "Advocated benevolence and morality."
      },
      {
        "who": "bot",
        "cn": "礼仪很重要？",
        "en": "Etiquette important?"
      },
      {
        "who": "you",
        "cn": "维持社会秩序的基础。",
        "en": "Foundation of social order."
      },
      {
        "who": "bot",
        "cn": "君子概念？",
        "en": "Gentleman concept?"
      },
      {
        "who": "you",
        "cn": "道德高尚的人。",
        "en": "Morally noble person."
      },
      {
        "who": "bot",
        "cn": "对今天仍有影响。",
        "en": "Still influences today."
      }
    ]
  },
  {
    "title": "老子与道家",
    "level": "HSK 5",
    "icon": "fa-yin-yang",
    "words": [
      {
        "cn": "老子",
        "py": "Lǎo Zǐ",
        "en": "Laozi",
        "tip": "老子 Daoism founder."
      },
      {
        "cn": "道家",
        "py": "Dàojiā",
        "en": "Daoism",
        "tip": "道家 philosophical."
      },
      {
        "cn": "道",
        "py": "dào",
        "en": "the Way",
        "tip": "道 universal principle."
      },
      {
        "cn": "自然",
        "py": "zìrán",
        "en": "nature",
        "tip": "自然 spontaneity."
      },
      {
        "cn": "无为",
        "py": "wúwéi",
        "en": "non-action",
        "tip": "无为 effortless."
      },
      {
        "cn": "平衡",
        "py": "pínghéng",
        "en": "balance",
        "tip": "平衡 harmony."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "和儒家什么不同？",
        "en": "How differs from Confucianism?"
      },
      {
        "who": "you",
        "cn": "主张顺其自然。",
        "en": "Advocates going with nature."
      },
      {
        "who": "bot",
        "cn": "无为意思？",
        "en": "Wuwei meaning?"
      },
      {
        "who": "you",
        "cn": "顺应规律不干预。",
        "en": "Act according to nature."
      },
      {
        "who": "bot",
        "cn": "重视平衡。",
        "en": "Values balance."
      },
      {
        "who": "you",
        "cn": "阴阳平衡核心。",
        "en": "Yin-yang balance is core."
      },
      {
        "who": "bot",
        "cn": "智慧启发千年。",
        "en": "Wisdom inspires millennia."
      }
    ]
  },
  {
    "title": "佛教哲学",
    "level": "HSK 5",
    "icon": "fa-dharmachakra",
    "words": [
      {
        "cn": "佛教",
        "py": "Fójiào",
        "en": "Buddhism",
        "tip": "佛教 religion."
      },
      {
        "cn": "因果",
        "py": "yīnguǒ",
        "en": "cause and effect",
        "tip": "因果 karma."
      },
      {
        "cn": "修行",
        "py": "xiūxíng",
        "en": "practice",
        "tip": "修行 cultivation."
      },
      {
        "cn": "慈悲",
        "py": "cíbēi",
        "en": "compassion",
        "tip": "慈悲 kindness."
      },
      {
        "cn": "智慧",
        "py": "zhìhuì",
        "en": "wisdom",
        "tip": "智慧 understanding."
      },
      {
        "cn": "放下",
        "py": "fàngxià",
        "en": "to let go",
        "tip": "放下 release."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "了解佛教哲学？",
        "en": "Know Buddhist philosophy?"
      },
      {
        "who": "you",
        "cn": "讲究因果和修行。",
        "en": "Karma and practice."
      },
      {
        "who": "bot",
        "cn": "慈悲是核心？",
        "en": "Compassion is core?"
      },
      {
        "who": "you",
        "cn": "慈悲和智慧都重要。",
        "en": "Both compassion and wisdom."
      },
      {
        "who": "bot",
        "cn": "放下意思？",
        "en": "Letting go meaning?"
      },
      {
        "who": "you",
        "cn": "放下执著得自由。",
        "en": "Release attachments for freedom."
      },
      {
        "who": "bot",
        "cn": "影响了很多人。",
        "en": "Influenced many."
      }
    ]
  },
  {
    "title": "伦理学",
    "level": "HSK 5",
    "icon": "fa-balance-scale",
    "words": [
      {
        "cn": "伦理",
        "py": "lúnlǐ",
        "en": "ethics",
        "tip": "伦理 moral."
      },
      {
        "cn": "道德",
        "py": "dàodé",
        "en": "morality",
        "tip": "道德 behavior."
      },
      {
        "cn": "正义",
        "py": "zhèngyì",
        "en": "justice",
        "tip": "正义 fairness."
      },
      {
        "cn": "责任",
        "py": "zérèn",
        "en": "responsibility",
        "tip": "责任 duty."
      },
      {
        "cn": "选择",
        "py": "xuǎnzé",
        "en": "choice",
        "tip": "选择 choose."
      },
      {
        "cn": "价值",
        "py": "jiàzhí",
        "en": "value",
        "tip": "价值 worth."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "伦理学讨论什么？",
        "en": "Ethics discuss?"
      },
      {
        "who": "you",
        "cn": "道德正义和人生价值。",
        "en": "Morality, justice, values."
      },
      {
        "who": "bot",
        "cn": "责任很重要。",
        "en": "Responsibility important."
      },
      {
        "who": "you",
        "cn": "每个选择要负责。",
        "en": "Each choice has responsibility."
      },
      {
        "who": "bot",
        "cn": "正义是什么？",
        "en": "What is justice?"
      },
      {
        "who": "you",
        "cn": "公平对待每个人。",
        "en": "Treat everyone fairly."
      },
      {
        "who": "bot",
        "cn": "帮我们做正确的事。",
        "en": "Helps do right thing."
      }
    ]
  },
  {
    "title": "逻辑思维",
    "level": "HSK 5",
    "icon": "fa-square-root-variable",
    "words": [
      {
        "cn": "逻辑",
        "py": "luóji",
        "en": "logic",
        "tip": "逻辑 reasoning."
      },
      {
        "cn": "推理",
        "py": "tuīlǐ",
        "en": "inference",
        "tip": "推理 deduce."
      },
      {
        "cn": "论证",
        "py": "lùnzhèng",
        "en": "argument",
        "tip": "论证 prove."
      },
      {
        "cn": "前提",
        "py": "qiántí",
        "en": "premise",
        "tip": "前提 start point."
      },
      {
        "cn": "结论",
        "py": "jiélùn",
        "en": "conclusion",
        "tip": "结论 result."
      },
      {
        "cn": "判断",
        "py": "pànduàn",
        "en": "judgment",
        "tip": "判断 decision."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "逻辑为什么重要？",
        "en": "Why logic important?"
      },
      {
        "who": "you",
        "cn": "帮助正确推理判断。",
        "en": "Helps reason and judge."
      },
      {
        "who": "bot",
        "cn": "论证需要前提结论。",
        "en": "Arguments need premise and conclusion."
      },
      {
        "who": "you",
        "cn": "好的论证可靠前提。",
        "en": "Good need reliable premises."
      },
      {
        "who": "bot",
        "cn": "逻辑避免错误。",
        "en": "Logic avoids errors."
      },
      {
        "who": "you",
        "cn": "学逻辑很有用。",
        "en": "Learning logic useful."
      },
      {
        "who": "bot",
        "cn": "理性思考重要。",
        "en": "Rational thinking important."
      }
    ]
  },
  {
    "title": "心理学导论",
    "level": "HSK 5",
    "icon": "fa-brain",
    "words": [
      {
        "cn": "心理学",
        "py": "xīnlǐxué",
        "en": "psychology",
        "tip": "心理学 mind."
      },
      {
        "cn": "意识",
        "py": "yìshí",
        "en": "consciousness",
        "tip": "意识 awareness."
      },
      {
        "cn": "行为",
        "py": "xíngwéi",
        "en": "behavior",
        "tip": "行为 actions."
      },
      {
        "cn": "认知",
        "py": "rènzhī",
        "en": "cognition",
        "tip": "认知 mental."
      },
      {
        "cn": "情感",
        "py": "qínggǎn",
        "en": "emotion",
        "tip": "情感 feelings."
      },
      {
        "cn": "人格",
        "py": "réngé",
        "en": "personality",
        "tip": "人格 character."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "心理学研究什么？",
        "en": "Psychology study?"
      },
      {
        "who": "you",
        "cn": "意识行为和情感。",
        "en": "Consciousness, behavior, emotion."
      },
      {
        "who": "bot",
        "cn": "认知心理学热门。",
        "en": "Cognitive psychology popular."
      },
      {
        "who": "you",
        "cn": "研究思考方式。",
        "en": "Studies how we think."
      },
      {
        "who": "bot",
        "cn": "人格怎么形成？",
        "en": "Personality formation?"
      },
      {
        "who": "you",
        "cn": "遗传环境共同影响。",
        "en": "Genes and environment."
      },
      {
        "who": "bot",
        "cn": "帮我们理解自己。",
        "en": "Helps understand ourselves."
      }
    ]
  },
  {
    "title": "社会学观察",
    "level": "HSK 5",
    "icon": "fa-users",
    "words": [
      {
        "cn": "社会学",
        "py": "shèhuìxué",
        "en": "sociology",
        "tip": "社会学 society."
      },
      {
        "cn": "阶层",
        "py": "jiēcéng",
        "en": "class",
        "tip": "阶层 stratum."
      },
      {
        "cn": "群体",
        "py": "qúntǐ",
        "en": "group",
        "tip": "群体 social group."
      },
      {
        "cn": "结构",
        "py": "jiégòu",
        "en": "structure",
        "tip": "结构 organization."
      },
      {
        "cn": "变迁",
        "py": "biànqiān",
        "en": "change",
        "tip": "变迁 transformation."
      },
      {
        "cn": "文化",
        "py": "wénhuà",
        "en": "culture",
        "tip": "文化 shared customs."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "社会学研究？",
        "en": "Sociology studies?"
      },
      {
        "who": "you",
        "cn": "结构阶层和文化变迁。",
        "en": "Structure, class, change."
      },
      {
        "who": "bot",
        "cn": "阶层影响生活？",
        "en": "Class affect life?"
      },
      {
        "who": "you",
        "cn": "影响教育和职业。",
        "en": "Affects education and career."
      },
      {
        "who": "bot",
        "cn": "群体行为有意思。",
        "en": "Group behavior interesting."
      },
      {
        "who": "you",
        "cn": "人在群体改变行为。",
        "en": "People change in groups."
      },
      {
        "who": "bot",
        "cn": "更了解社会。",
        "en": "Better understand society."
      }
    ]
  },
  {
    "title": "人类学视野",
    "level": "HSK 5",
    "icon": "fa-person-walking",
    "words": [
      {
        "cn": "人类学",
        "py": "rénlèixué",
        "en": "anthropology",
        "tip": "人类学 humans."
      },
      {
        "cn": "民族",
        "py": "mínzú",
        "en": "ethnic group",
        "tip": "民族 ethnic."
      },
      {
        "cn": "习俗",
        "py": "xísú",
        "en": "custom",
        "tip": "习俗 tradition."
      },
      {
        "cn": "仪式",
        "py": "yíshì",
        "en": "ritual",
        "tip": "仪式 ceremony."
      },
      {
        "cn": "起源",
        "py": "qǐyuán",
        "en": "origin",
        "tip": "起源 beginning."
      },
      {
        "cn": "文化",
        "py": "wénhuà",
        "en": "culture",
        "tip": "文化 way of life."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "人类学研究？",
        "en": "Anthropology study?"
      },
      {
        "who": "you",
        "cn": "人类起源文化和习俗。",
        "en": "Human origins, culture, customs."
      },
      {
        "who": "bot",
        "cn": "习俗为什么不同？",
        "en": "Why different customs?"
      },
      {
        "who": "you",
        "cn": "跟历史和环境有关。",
        "en": "Related to history and environment."
      },
      {
        "who": "bot",
        "cn": "仪式很重要。",
        "en": "Rituals important."
      },
      {
        "who": "you",
        "cn": "增强群体认同。",
        "en": "Strengthen group identity."
      },
      {
        "who": "bot",
        "cn": "扩宽视野。",
        "en": "Broadens view."
      }
    ]
  },
  {
    "title": "新闻与真相",
    "level": "HSK 5",
    "icon": "fa-newspaper",
    "words": [
      {
        "cn": "新闻",
        "py": "xīnwén",
        "en": "news",
        "tip": "新闻 current events."
      },
      {
        "cn": "记者",
        "py": "jìzhě",
        "en": "reporter",
        "tip": "记者 gathers."
      },
      {
        "cn": "编辑",
        "py": "biānjí",
        "en": "editor",
        "tip": "编辑 revises."
      },
      {
        "cn": "真相",
        "py": "zhēnxiàng",
        "en": "truth",
        "tip": "真相 facts."
      },
      {
        "cn": "客观",
        "py": "kèguān",
        "en": "objective",
        "tip": "客观 unbiased."
      },
      {
        "cn": "报道",
        "py": "bàodào",
        "en": "report",
        "tip": "报道 cover story."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "新闻最重要原则？",
        "en": "Most important principle?"
      },
      {
        "who": "you",
        "cn": "客观真相记者报道事实。",
        "en": "Objectivity and truth."
      },
      {
        "who": "bot",
        "cn": "编辑作用？",
        "en": "Editor role?"
      },
      {
        "who": "you",
        "cn": "确保准确客观。",
        "en": "Ensure accuracy."
      },
      {
        "who": "bot",
        "cn": "假新闻很多。",
        "en": "Fake news plentiful."
      },
      {
        "who": "you",
        "cn": "选择可信来源。",
        "en": "Choose reliable sources."
      },
      {
        "who": "bot",
        "cn": "新闻自由重要。",
        "en": "Press freedom important."
      }
    ]
  },
  {
    "title": "建筑设计",
    "level": "HSK 5",
    "icon": "fa-draw-polygon",
    "words": [
      {
        "cn": "建筑",
        "py": "jiànzhù",
        "en": "architecture",
        "tip": "建筑 structures."
      },
      {
        "cn": "设计",
        "py": "shèjì",
        "en": "design",
        "tip": "设计 creative plan."
      },
      {
        "cn": "空间",
        "py": "kōngjiān",
        "en": "space",
        "tip": "空间 area."
      },
      {
        "cn": "结构",
        "py": "jiégòu",
        "en": "structure",
        "tip": "结构 framework."
      },
      {
        "cn": "材料",
        "py": "cáiliào",
        "en": "material",
        "tip": "材料 matter."
      },
      {
        "cn": "功能",
        "py": "gōngnéng",
        "en": "function",
        "tip": "功能 purpose."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "建筑设计考虑？",
        "en": "Architecture design consider?"
      },
      {
        "who": "you",
        "cn": "功能空间材料利用。",
        "en": "Function, space, materials."
      },
      {
        "who": "bot",
        "cn": "结构和美学哪个重要？",
        "en": "Structure or beauty?"
      },
      {
        "who": "you",
        "cn": "两者应结合。",
        "en": "Both should combine."
      },
      {
        "who": "bot",
        "cn": "现代建筑特点？",
        "en": "Modern features?"
      },
      {
        "who": "you",
        "cn": "简洁实用新材料。",
        "en": "Simple, practical, new materials."
      },
      {
        "who": "bot",
        "cn": "改变城市面貌。",
        "en": "Changes cityscape."
      }
    ]
  },
  {
    "title": "设计思维",
    "level": "HSK 5",
    "icon": "fa-pen-ruler",
    "words": [
      {
        "cn": "设计",
        "py": "shèjì",
        "en": "design",
        "tip": "设计 process."
      },
      {
        "cn": "创意",
        "py": "chuàngyì",
        "en": "creativity",
        "tip": "创意 ideas."
      },
      {
        "cn": "用户",
        "py": "yònghù",
        "en": "user",
        "tip": "用户 person."
      },
      {
        "cn": "体验",
        "py": "tǐyàn",
        "en": "experience",
        "tip": "体验 how feels."
      },
      {
        "cn": "创新",
        "py": "chuàngxīn",
        "en": "innovation",
        "tip": "创新 new."
      },
      {
        "cn": "解决",
        "py": "jiějué",
        "en": "to solve",
        "tip": "解决 resolve."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "设计思维核心？",
        "en": "Design thinking core?"
      },
      {
        "who": "you",
        "cn": "从用户需求出发解决问题。",
        "en": "From user needs solve problems."
      },
      {
        "who": "bot",
        "cn": "创意多重要？",
        "en": "How important creativity?"
      },
      {
        "who": "you",
        "cn": "带来创新也要实用。",
        "en": "Innovation but practical."
      },
      {
        "who": "bot",
        "cn": "用户体验热门。",
        "en": "UX popular."
      },
      {
        "who": "you",
        "cn": "好体验让用户满意。",
        "en": "Good experience satisfies users."
      },
      {
        "who": "bot",
        "cn": "能改变世界。",
        "en": "Can change world."
      }
    ]
  },
  {
    "title": "法律与社会",
    "level": "HSK 5",
    "icon": "fa-gavel",
    "words": [
      {
        "cn": "法律",
        "py": "fǎlǜ",
        "en": "law",
        "tip": "法律 formal rules."
      },
      {
        "cn": "司法",
        "py": "sīfǎ",
        "en": "judiciary",
        "tip": "司法 administers."
      },
      {
        "cn": "法庭",
        "py": "fǎtíng",
        "en": "court",
        "tip": "法庭 venue."
      },
      {
        "cn": "律师",
        "py": "lǜshī",
        "en": "lawyer",
        "tip": "律师 represents."
      },
      {
        "cn": "证据",
        "py": "zhèngjù",
        "en": "evidence",
        "tip": "证据 proves."
      },
      {
        "cn": "公正",
        "py": "gōngzhèng",
        "en": "justice",
        "tip": "公正 fairness."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "司法如何起作用？",
        "en": "Judiciary role?"
      },
      {
        "who": "you",
        "cn": "通过法庭公正解决争议。",
        "en": "Resolves disputes in courts."
      },
      {
        "who": "bot",
        "cn": "律师角色？",
        "en": "Lawyer role?"
      },
      {
        "who": "you",
        "cn": "为当事人代理。",
        "en": "Legal representation."
      },
      {
        "who": "bot",
        "cn": "证据重要吗？",
        "en": "Evidence important?"
      },
      {
        "who": "you",
        "cn": "判决的基础。",
        "en": "Basis of judgment."
      },
      {
        "who": "bot",
        "cn": "公正是社会基石。",
        "en": "Justice is foundation."
      }
    ]
  },
  {
    "title": "学术研究",
    "level": "HSK 6",
    "icon": "fa-graduation-cap",
    "words": [
      {
        "cn": "研究",
        "py": "yánjiū",
        "en": "research",
        "tip": "研究 inquiry."
      },
      {
        "cn": "论文",
        "py": "lùnwén",
        "en": "thesis",
        "tip": "论文 writing."
      },
      {
        "cn": "数据",
        "py": "shùjù",
        "en": "data",
        "tip": "数据 info."
      },
      {
        "cn": "分析",
        "py": "fēnxī",
        "en": "analysis",
        "tip": "分析 examines."
      },
      {
        "cn": "理论",
        "py": "lǐlùn",
        "en": "theory",
        "tip": "理论 framework."
      },
      {
        "cn": "成果",
        "py": "chéngguǒ",
        "en": "result",
        "tip": "成果 output."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "研究课题是什么？",
        "en": "Research topic?"
      },
      {
        "who": "you",
        "cn": "写数据分析论文。",
        "en": "Writing data analysis paper."
      },
      {
        "who": "bot",
        "cn": "需要理论基础。",
        "en": "Need theory base."
      },
      {
        "who": "you",
        "cn": "理论指导研究方向。",
        "en": "Theory guides direction."
      },
      {
        "who": "bot",
        "cn": "有什么成果？",
        "en": "Results?"
      },
      {
        "who": "you",
        "cn": "初步分析完成了。",
        "en": "Preliminary analysis done."
      },
      {
        "who": "bot",
        "cn": "期待发表。",
        "en": "Look forward to publication."
      }
    ]
  },
  {
    "title": "学术会议",
    "level": "HSK 6",
    "icon": "fa-chalkboard-user",
    "words": [
      {
        "cn": "会议",
        "py": "huìyì",
        "en": "conference",
        "tip": "会议 gathering."
      },
      {
        "cn": "演讲",
        "py": "yǎnjiǎng",
        "en": "presentation",
        "tip": "演讲 delivery."
      },
      {
        "cn": "交流",
        "py": "jiāoliú",
        "en": "exchange",
        "tip": "交流 ideas."
      },
      {
        "cn": "学者",
        "py": "xuézhě",
        "en": "scholar",
        "tip": "学者 academic."
      },
      {
        "cn": "论文",
        "py": "lùnwén",
        "en": "paper",
        "tip": "论文 work."
      },
      {
        "cn": "提问",
        "py": "tíwèn",
        "en": "to question",
        "tip": "提问 audience."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "参加过学术会议？",
        "en": "Attended conferences?"
      },
      {
        "who": "you",
        "cn": "做过演讲有交流。",
        "en": "Gave presentation, exchanged ideas."
      },
      {
        "who": "bot",
        "cn": "学者交流重要。",
        "en": "Scholar exchange important."
      },
      {
        "who": "you",
        "cn": "会后提问讨论多。",
        "en": "Lots of Q&A."
      },
      {
        "who": "bot",
        "cn": "有什么收获？",
        "en": "What gained?"
      },
      {
        "who": "you",
        "cn": "了解前沿建立合作。",
        "en": "Learned frontier, built ties."
      },
      {
        "who": "bot",
        "cn": "促进科学发展。",
        "en": "Advances science."
      }
    ]
  },
  {
    "title": "同行评审",
    "level": "HSK 6",
    "icon": "fa-users-gear",
    "words": [
      {
        "cn": "评审",
        "py": "píngshěn",
        "en": "review",
        "tip": "评审 evaluate."
      },
      {
        "cn": "专家",
        "py": "zhuānjiā",
        "en": "expert",
        "tip": "专家 deep knowledge."
      },
      {
        "cn": "反馈",
        "py": "fǎnkuì",
        "en": "feedback",
        "tip": "反馈 response."
      },
      {
        "cn": "修改",
        "py": "xiūgǎi",
        "en": "to revise",
        "tip": "修改 improve."
      },
      {
        "cn": "发表",
        "py": "fābiǎo",
        "en": "to publish",
        "tip": "发表 release."
      },
      {
        "cn": "标准",
        "py": "biāozhǔn",
        "en": "standard",
        "tip": "标准 criteria."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "发表需要评审。",
        "en": "Publish needs review."
      },
      {
        "who": "you",
        "cn": "专家给出修改意见。",
        "en": "Experts give revision suggestions."
      },
      {
        "who": "bot",
        "cn": "标准很高。",
        "en": "Standards high."
      },
      {
        "who": "you",
        "cn": "根据反馈认真修改。",
        "en": "Revise based on feedback."
      },
      {
        "who": "bot",
        "cn": "质量保证。",
        "en": "Quality assurance."
      },
      {
        "who": "you",
        "cn": "严格但必要。",
        "en": "Strict but necessary."
      },
      {
        "who": "bot",
        "cn": "反复打磨。",
        "en": "Need polishing."
      }
    ]
  },
  {
    "title": "引用规范",
    "level": "HSK 6",
    "icon": "fa-quote-right",
    "words": [
      {
        "cn": "引用",
        "py": "yǐnyòng",
        "en": "citation",
        "tip": "引用 credit."
      },
      {
        "cn": "文献",
        "py": "wénxiàn",
        "en": "literature",
        "tip": "文献 source."
      },
      {
        "cn": "参考",
        "py": "cānkǎo",
        "en": "reference",
        "tip": "参考 consulted."
      },
      {
        "cn": "标注",
        "py": "biāozhù",
        "en": "to mark",
        "tip": "标注 indicate."
      },
      {
        "cn": "来源",
        "py": "láiyuán",
        "en": "source",
        "tip": "来源 original."
      },
      {
        "cn": "规范",
        "py": "guīfàn",
        "en": "standard",
        "tip": "规范 norm."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "引用要注意？",
        "en": "Citation notes?"
      },
      {
        "who": "you",
        "cn": "所有文献标注清楚。",
        "en": "All references marked."
      },
      {
        "who": "bot",
        "cn": "不规范是学术不端。",
        "en": "Improper is misconduct."
      },
      {
        "who": "you",
        "cn": "尊重别人劳动。",
        "en": "Respect others' work."
      },
      {
        "who": "bot",
        "cn": "知道几种格式？",
        "en": "How many formats?"
      },
      {
        "who": "you",
        "cn": "APA MLA按需使用。",
        "en": "APA MLA as required."
      },
      {
        "who": "bot",
        "cn": "体现学术诚信。",
        "en": "Shows integrity."
      }
    ]
  },
  {
    "title": "研究伦理",
    "level": "HSK 6",
    "icon": "fa-shield-halved",
    "words": [
      {
        "cn": "伦理",
        "py": "lúnlǐ",
        "en": "ethics",
        "tip": "伦理 principles."
      },
      {
        "cn": "诚信",
        "py": "chéngxìn",
        "en": "integrity",
        "tip": "诚信 honesty."
      },
      {
        "cn": "实验",
        "py": "shíyàn",
        "en": "experiment",
        "tip": "实验 trial."
      },
      {
        "cn": "隐私",
        "py": "yǐnsī",
        "en": "privacy",
        "tip": "隐私 confidentiality."
      },
      {
        "cn": "规范",
        "py": "guīfàn",
        "en": "norm",
        "tip": "规范 standard."
      },
      {
        "cn": "责任",
        "py": "zérèn",
        "en": "responsibility",
        "tip": "责任 obligation."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "重视研究伦理？",
        "en": "Value research ethics?"
      },
      {
        "who": "you",
        "cn": "保护隐私确保诚信。",
        "en": "Protect privacy, ensure integrity."
      },
      {
        "who": "bot",
        "cn": "实验注意？",
        "en": "Experiment notes?"
      },
      {
        "who": "you",
        "cn": "不能造假如实记录。",
        "en": "No falsification."
      },
      {
        "who": "bot",
        "cn": "不端后果？",
        "en": "Consequences?"
      },
      {
        "who": "you",
        "cn": "失去信誉甚至开除。",
        "en": "Lose credibility, expulsion."
      },
      {
        "who": "bot",
        "cn": "要对研究负责。",
        "en": "Be responsible."
      }
    ]
  },
  {
    "title": "学术写作",
    "level": "HSK 6",
    "icon": "fa-pencil",
    "words": [
      {
        "cn": "写作",
        "py": "xiězuò",
        "en": "writing",
        "tip": "写作 composition."
      },
      {
        "cn": "摘要",
        "py": "zhāiyào",
        "en": "abstract",
        "tip": "摘要 summary."
      },
      {
        "cn": "引言",
        "py": "yǐnyán",
        "en": "introduction",
        "tip": "引言 opening."
      },
      {
        "cn": "论证",
        "py": "lùnzhèng",
        "en": "argumentation",
        "tip": "论证 support."
      },
      {
        "cn": "结论",
        "py": "jiélùn",
        "en": "conclusion",
        "tip": "结论 final."
      },
      {
        "cn": "逻辑",
        "py": "luóji",
        "en": "logic",
        "tip": "逻辑 clarity."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "写作要求？",
        "en": "Writing requirements?"
      },
      {
        "who": "you",
        "cn": "结构清晰逻辑严密。",
        "en": "Clear structure, logic."
      },
      {
        "who": "bot",
        "cn": "摘要简洁有力。",
        "en": "Abstract concise."
      },
      {
        "who": "you",
        "cn": "引言说明背景目的。",
        "en": "Intro states background."
      },
      {
        "who": "bot",
        "cn": "结论回应问题。",
        "en": "Conclusion answers."
      },
      {
        "who": "you",
        "cn": "整体连贯逻辑。",
        "en": "Overall coherent logic."
      },
      {
        "who": "bot",
        "cn": "学者基本功。",
        "en": "Essential for scholars."
      }
    ]
  },
  {
    "title": "常用成语",
    "level": "HSK 6",
    "icon": "fa-font",
    "words": [
      {
        "cn": "成语",
        "py": "chéngyǔ",
        "en": "idiom",
        "tip": "成语 set phrase."
      },
      {
        "cn": "画蛇添足",
        "py": "huà shé tiān zú",
        "en": "to gild the lily",
        "tip": "画蛇添足 overdo unnecessary."
      },
      {
        "cn": "对牛弹琴",
        "py": "duì niú tán qín",
        "en": "casting pearls before swine",
        "tip": "对牛弹琴 pointless audience."
      },
      {
        "cn": "一帆风顺",
        "py": "yī fān fēng shùn",
        "en": "plain sailing",
        "tip": "一帆风顺 smooth journey."
      },
      {
        "cn": "马到成功",
        "py": "mǎ dào chéng gōng",
        "en": "instant success",
        "tip": "马到成功 achieve quickly."
      },
      {
        "cn": "心想事成",
        "py": "xīn xiǎng shì chéng",
        "en": "have wishes",
        "tip": "心想事成 everything you wish."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "你知道哪些成语？",
        "en": "Which idioms know?"
      },
      {
        "who": "you",
        "cn": "学习了一些常用成语。",
        "en": "Learned some common idioms."
      },
      {
        "who": "bot",
        "cn": "画蛇添足的故事？",
        "en": "Story of adding feet to snake?"
      },
      {
        "who": "you",
        "cn": "比喻做多余的事。",
        "en": "Means doing unnecessary things."
      },
      {
        "who": "bot",
        "cn": "对牛弹琴呢？",
        "en": "Playing lute to cow?"
      },
      {
        "who": "you",
        "cn": "跟不懂的人讲道理。",
        "en": "Talking to uncomprehending audience."
      },
      {
        "who": "bot",
        "cn": "成语很有意思。",
        "en": "Idioms are interesting."
      }
    ]
  },
  {
    "title": "动物成语",
    "level": "HSK 6",
    "icon": "fa-paw",
    "words": [
      {
        "cn": "成语",
        "py": "chéngyǔ",
        "en": "idiom",
        "tip": "成语 four-character."
      },
      {
        "cn": "狐假虎威",
        "py": "hú jiǎ hǔ wēi",
        "en": "bully by proxy",
        "tip": "狐假虎威 fox uses tiger might."
      },
      {
        "cn": "守株待兔",
        "py": "shǒu zhū dài tù",
        "en": "wait for luck",
        "tip": "守株待兔 wait passively."
      },
      {
        "cn": "亡羊补牢",
        "py": "wáng yáng bǔ láo",
        "en": "never too late",
        "tip": "亡羊补牢 fix after loss."
      },
      {
        "cn": "画龙点睛",
        "py": "huà lóng diǎn jīng",
        "en": "finishing touch",
        "tip": "画龙点睛 vital addition."
      },
      {
        "cn": "井底之蛙",
        "py": "jǐng dǐ zhī wā",
        "en": "frog in a well",
        "tip": "井底之蛙 limited view."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "动物成语很有意思。",
        "en": "Animal idioms interesting."
      },
      {
        "who": "you",
        "cn": "狐假虎威比喻仗势欺人。",
        "en": "Fox means bullying with power."
      },
      {
        "who": "bot",
        "cn": "守株待兔不好。",
        "en": "Waiting passive bad."
      },
      {
        "who": "you",
        "cn": "要主动不能等运气。",
        "en": "Be proactive."
      },
      {
        "who": "bot",
        "cn": "画龙点睛很重要。",
        "en": "Finishing touch vital."
      },
      {
        "who": "you",
        "cn": "点睛之笔让事物完美。",
        "en": "Perfects things."
      },
      {
        "who": "bot",
        "cn": "不要做井底之蛙。",
        "en": "Don't be frog in well."
      }
    ]
  },
  {
    "title": "数字成语",
    "level": "HSK 6",
    "icon": "fa-hashtag",
    "words": [
      {
        "cn": "成语",
        "py": "chéngyǔ",
        "en": "idiom",
        "tip": "成语 phrase."
      },
      {
        "cn": "一心一意",
        "py": "yī xīn yī yì",
        "en": "wholeheartedly",
        "tip": "一心一意 focus completely."
      },
      {
        "cn": "三心二意",
        "py": "sān xīn èr yì",
        "en": "half-hearted",
        "tip": "三心二意 lack focus."
      },
      {
        "cn": "四面八方",
        "py": "sì miàn bā fāng",
        "en": "all directions",
        "tip": "四面八方 everywhere."
      },
      {
        "cn": "五光十色",
        "py": "wǔ guāng shí sè",
        "en": "colorful",
        "tip": "五光十色 vibrant colors."
      },
      {
        "cn": "十全十美",
        "py": "shí quán shí měi",
        "en": "perfect",
        "tip": "十全十美 flawless."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "数字成语有意思。",
        "en": "Number idioms interesting."
      },
      {
        "who": "you",
        "cn": "一心一意才能成功。",
        "en": "Wholeheartedly succeeds."
      },
      {
        "who": "bot",
        "cn": "三心二意不好。",
        "en": "Half-hearted is bad."
      },
      {
        "who": "you",
        "cn": "集中注意力很重要。",
        "en": "Focus is important."
      },
      {
        "who": "bot",
        "cn": "五光十色形容什么？",
        "en": "Wuguang describe?"
      },
      {
        "who": "you",
        "cn": "颜色丰富多样。",
        "en": "Rich variety of colors."
      },
      {
        "who": "bot",
        "cn": "十全十美难做到。",
        "en": "Perfect is rare."
      }
    ]
  },
  {
    "title": "自然成语",
    "level": "HSK 6",
    "icon": "fa-mountain-sun",
    "words": [
      {
        "cn": "成语",
        "py": "chéngyǔ",
        "en": "idiom",
        "tip": "成语 saying."
      },
      {
        "cn": "山清水秀",
        "py": "shān qīng shuǐ xiù",
        "en": "scenic beauty",
        "tip": "山清水秀 beautiful landscape."
      },
      {
        "cn": "风调雨顺",
        "py": "fēng tiáo yǔ shùn",
        "en": "favorable weather",
        "tip": "风调雨顺 good climate."
      },
      {
        "cn": "春暖花开",
        "py": "chūn nuǎn huā kāi",
        "en": "spring blooms",
        "tip": "春暖花开 warm spring."
      },
      {
        "cn": "冰天雪地",
        "py": "bīng tiān xuě dì",
        "en": "icy cold",
        "tip": "冰天雪地 freezing."
      },
      {
        "cn": "海阔天空",
        "py": "hǎi kuò tiān kōng",
        "en": "boundless",
        "tip": "海阔天空 open vast."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "自然成语很美。",
        "en": "Nature idioms beautiful."
      },
      {
        "who": "you",
        "cn": "山清水秀形容风景。",
        "en": "Describes scenery."
      },
      {
        "who": "bot",
        "cn": "风调雨顺是丰收。",
        "en": "Good weather harvest."
      },
      {
        "who": "you",
        "cn": "农民希望风调雨顺。",
        "en": "Farmers wish for it."
      },
      {
        "who": "bot",
        "cn": "春暖花开温暖。",
        "en": "Spring warm blooms."
      },
      {
        "who": "you",
        "cn": "冰天雪地太冷。",
        "en": "Icy too cold."
      },
      {
        "who": "bot",
        "cn": "海阔天空心情好。",
        "en": "Boundless makes happy."
      }
    ]
  },
  {
    "title": "常用习语",
    "level": "HSK 6",
    "icon": "fa-message",
    "words": [
      {
        "cn": "习语",
        "py": "xíyǔ",
        "en": "idiom",
        "tip": "习语 expression."
      },
      {
        "cn": "实事求是",
        "py": "shí shì qiú shì",
        "en": "seek truth",
        "tip": "实事求是 fact-based."
      },
      {
        "cn": "与时俱进",
        "py": "yǔ shí jù jìn",
        "en": "keep pace",
        "tip": "与时俱进 keep updated."
      },
      {
        "cn": "自力更生",
        "py": "zì lì gēng shēng",
        "en": "self-reliance",
        "tip": "自力更生 rely on self."
      },
      {
        "cn": "见多识广",
        "py": "jiàn duō shí guǎng",
        "en": "experienced",
        "tip": "见多识广 knowledgeable."
      },
      {
        "cn": "精益求精",
        "py": "jīng yì qiú jīng",
        "en": "ever better",
        "tip": "精益求精 continuously improve."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "实事求是很重要。",
        "en": "Truth-seeking important."
      },
      {
        "who": "you",
        "cn": "基于事实做判断。",
        "en": "Judge based on facts."
      },
      {
        "who": "bot",
        "cn": "要与时俱进。",
        "en": "Keep up with times."
      },
      {
        "who": "you",
        "cn": "不学习就会被淘汰。",
        "en": "Without learning fall behind."
      },
      {
        "who": "bot",
        "cn": "自力更生的精神。",
        "en": "Self-reliance spirit."
      },
      {
        "who": "you",
        "cn": "独立自主解决问题。",
        "en": "Solve independently."
      },
      {
        "who": "bot",
        "cn": "精益求精追求完美。",
        "en": "Strive for better."
      }
    ]
  },
  {
    "title": "经典诗篇",
    "level": "HSK 6",
    "icon": "fa-book",
    "words": [
      {
        "cn": "诗经",
        "py": "Shījīng",
        "en": "Book of Songs",
        "tip": "诗经 earliest poetry."
      },
      {
        "cn": "唐诗",
        "py": "Tángshī",
        "en": "Tang poetry",
        "tip": "唐诗 golden age."
      },
      {
        "cn": "宋词",
        "py": "Sòngcí",
        "en": "Song lyrics",
        "tip": "宋词 lyrical form."
      },
      {
        "cn": "韵律",
        "py": "yùnlǜ",
        "en": "rhyme",
        "tip": "韵律 sound."
      },
      {
        "cn": "对仗",
        "py": "duìzhàng",
        "en": "antithesis",
        "tip": "对仗 paired lines."
      },
      {
        "cn": "典故",
        "py": "diǎngù",
        "en": "allusion",
        "tip": "典故 historical ref."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "中国古典诗歌很丰富。",
        "en": "Chinese poetry rich."
      },
      {
        "who": "you",
        "cn": "诗经是最早的诗歌集。",
        "en": "Book of Songs earliest."
      },
      {
        "who": "bot",
        "cn": "唐诗宋词各具特色。",
        "en": "Tang and Song distinctive."
      },
      {
        "who": "you",
        "cn": "唐诗重韵律宋词抒情。",
        "en": "Tang rhymes, Song lyrical."
      },
      {
        "who": "bot",
        "cn": "对仗是诗歌特点。",
        "en": "Antithesis is feature."
      },
      {
        "who": "you",
        "cn": "典故增加深度。",
        "en": "Allusions add depth."
      },
      {
        "who": "bot",
        "cn": "古典诗歌是文化瑰宝。",
        "en": "Classical poetry treasure."
      }
    ]
  },
  {
    "title": "古文名篇",
    "level": "HSK 6",
    "icon": "fa-scroll-old",
    "words": [
      {
        "cn": "古文",
        "py": "gǔwén",
        "en": "classical prose",
        "tip": "古文 ancient."
      },
      {
        "cn": "论语",
        "py": "Lúnyǔ",
        "en": "Analects",
        "tip": "论语 Confucius sayings."
      },
      {
        "cn": "孟子",
        "py": "Mèngzǐ",
        "en": "Mencius",
        "tip": "孟子 Confucian text."
      },
      {
        "cn": "史记",
        "py": "Shǐjì",
        "en": "Records",
        "tip": "史记 historical."
      },
      {
        "cn": "出师表",
        "py": "Chūshī Biǎo",
        "en": "Memorial",
        "tip": "出师表 loyalty."
      },
      {
        "cn": "醉翁亭记",
        "py": "Zuìwēng Tíng Jì",
        "en": "Drunkard Pavilion",
        "tip": "醉翁亭记 scenic."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "读过论语吗？",
        "en": "Read Analects?"
      },
      {
        "who": "you",
        "cn": "论语是孔子弟子的记录。",
        "en": "Record of Confucius."
      },
      {
        "who": "bot",
        "cn": "史记是历史巨著。",
        "en": "Records grand history."
      },
      {
        "who": "you",
        "cn": "司马迁写了史记。",
        "en": "Sima Qian wrote it."
      },
      {
        "who": "bot",
        "cn": "出师表很感人。",
        "en": "Memorial touching."
      },
      {
        "who": "you",
        "cn": "诸葛亮忠心可见。",
        "en": "Zhuge Liang's loyalty."
      },
      {
        "who": "bot",
        "cn": "古文底蕴深厚。",
        "en": "Classical prose profound."
      }
    ]
  },
  {
    "title": "古代哲学",
    "level": "HSK 6",
    "icon": "fa-yin-yang",
    "words": [
      {
        "cn": "哲学",
        "py": "zhéxué",
        "en": "philosophy",
        "tip": "哲学 wisdom."
      },
      {
        "cn": "儒家",
        "py": "Rújiā",
        "en": "Confucianism",
        "tip": "儒家 ethics."
      },
      {
        "cn": "道家",
        "py": "Dàojiā",
        "en": "Daoism",
        "tip": "道家 nature."
      },
      {
        "cn": "法家",
        "py": "Fǎjiā",
        "en": "Legalism",
        "tip": "法家 law."
      },
      {
        "cn": "墨家",
        "py": "Mòjiā",
        "en": "Mohism",
        "tip": "墨家 love."
      },
      {
        "cn": "兵家",
        "py": "Bīngjiā",
        "en": "Military",
        "tip": "兵家 strategy."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "诸子百家思想丰富。",
        "en": "Hundred schools rich."
      },
      {
        "who": "you",
        "cn": "儒家重仁义道家重自然。",
        "en": "Confucius ethics, Daoism nature."
      },
      {
        "who": "bot",
        "cn": "法家强调法治。",
        "en": "Legalism stresses law."
      },
      {
        "who": "you",
        "cn": "对现代法治有影响。",
        "en": "Influences modern law."
      },
      {
        "who": "bot",
        "cn": "墨家提倡兼爱。",
        "en": "Mohism universal love."
      },
      {
        "who": "you",
        "cn": "兵家的孙子兵法出名。",
        "en": "Sun Tzu art of war."
      },
      {
        "who": "bot",
        "cn": "中国传统思想多元。",
        "en": "Chinese thought diverse."
      }
    ]
  },
  {
    "title": "古典戏剧",
    "level": "HSK 6",
    "icon": "fa-masks-theater",
    "words": [
      {
        "cn": "戏剧",
        "py": "xìjù",
        "en": "drama",
        "tip": "戏剧 play."
      },
      {
        "cn": "元曲",
        "py": "yuánqǔ",
        "en": "Yuan opera",
        "tip": "元曲 Yuan period."
      },
      {
        "cn": "关汉卿",
        "py": "Guān Hànqīng",
        "en": "Guan Hanqing",
        "tip": "关汉卿 playwright."
      },
      {
        "cn": "窦娥冤",
        "py": "Dòu'é Yuān",
        "en": "Injustice",
        "tip": "窦娥冤 famous play."
      },
      {
        "cn": "西厢记",
        "py": "Xīxiāng Jì",
        "en": "West Chamber",
        "tip": "西厢记 love story."
      },
      {
        "cn": "牡丹亭",
        "py": "Mǔdān Tíng",
        "en": "Peony Pavilion",
        "tip": "牡丹亭 romance."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "元曲是古典戏剧高峰。",
        "en": "Yuan opera peak."
      },
      {
        "who": "you",
        "cn": "关汉卿是元曲大家。",
        "en": "Guan Hanqing master."
      },
      {
        "who": "bot",
        "cn": "窦娥冤悲剧深刻。",
        "en": "Injustice profound tragedy."
      },
      {
        "who": "you",
        "cn": "西厢记爱情故事。",
        "en": "West Chamber love story."
      },
      {
        "who": "bot",
        "cn": "牡丹亭浪漫动人。",
        "en": "Peony Pavilion romantic."
      },
      {
        "who": "you",
        "cn": "古典戏剧文化瑰宝。",
        "en": "Classical drama treasure."
      },
      {
        "who": "bot",
        "cn": "值得多了解。",
        "en": "Worth exploring."
      }
    ]
  },
  {
    "title": "历史典籍",
    "level": "HSK 6",
    "icon": "fa-book-atlas",
    "words": [
      {
        "cn": "典籍",
        "py": "diǎnjí",
        "en": "classic text",
        "tip": "典籍 ancient books."
      },
      {
        "cn": "资治通鉴",
        "py": "Zīzhì Tōngjiàn",
        "en": "Comprehensive Mirror",
        "tip": "资治通鉴 historical."
      },
      {
        "cn": "二十四史",
        "py": "Èrshísì Shǐ",
        "en": "24 Histories",
        "tip": "二十四史 official."
      },
      {
        "cn": "编年",
        "py": "biānnián",
        "en": "annals",
        "tip": "编年 chronological."
      },
      {
        "cn": "纪传",
        "py": "jìzhuàn",
        "en": "biography",
        "tip": "纪传 biographical."
      },
      {
        "cn": "考据",
        "py": "kǎojù",
        "en": "textual research",
        "tip": "考据 evidence."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "史书用编年体还是纪传体？",
        "en": "Annals or biography style?"
      },
      {
        "who": "you",
        "cn": "资治通鉴是编年体。",
        "en": "Comprehensive Mirror is annals."
      },
      {
        "who": "bot",
        "cn": "二十四史是纪传体。",
        "en": "24 Histories biographical."
      },
      {
        "who": "you",
        "cn": "史记是纪传体鼻祖。",
        "en": "Records the first biographical."
      },
      {
        "who": "bot",
        "cn": "考据学求真。",
        "en": "Textual research seeks truth."
      },
      {
        "who": "you",
        "cn": "清代考据学发达。",
        "en": "Qing dynasty prospered."
      },
      {
        "who": "bot",
        "cn": "历史典籍国之重器。",
        "en": "Historical texts national treasure."
      }
    ]
  },
  {
    "title": "诗词赏析",
    "level": "HSK 6",
    "icon": "fa-feather",
    "words": [
      {
        "cn": "赏析",
        "py": "shǎngxī",
        "en": "appreciation",
        "tip": "赏析 analyze."
      },
      {
        "cn": "意境",
        "py": "yìjìng",
        "en": "artistic conception",
        "tip": "意境 realm."
      },
      {
        "cn": "手法",
        "py": "shǒufǎ",
        "en": "technique",
        "tip": "手法 literary."
      },
      {
        "cn": "象征",
        "py": "xiàngzhēng",
        "en": "symbol",
        "tip": "象征 symbol."
      },
      {
        "cn": "寄情",
        "py": "jìqíng",
        "en": "express feelings",
        "tip": "寄情 through things."
      },
      {
        "cn": "寓理",
        "py": "yùlǐ",
        "en": "moral",
        "tip": "寓理 contain lesson."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "赏析诗歌看什么？",
        "en": "What to see in poems?"
      },
      {
        "who": "you",
        "cn": "意境手法和象征。",
        "en": "Conception, technique, symbols."
      },
      {
        "who": "bot",
        "cn": "诗人托物言志。",
        "en": "Poets express through objects."
      },
      {
        "who": "you",
        "cn": "借景抒情是常见手法。",
        "en": "Scene-lyric common technique."
      },
      {
        "who": "bot",
        "cn": "诗歌寓理于情。",
        "en": "Poems blend moral with feeling."
      },
      {
        "who": "you",
        "cn": "杜甫诗有社会关怀。",
        "en": "Du Fu has social concern."
      },
      {
        "who": "bot",
        "cn": "赏析需要慢慢品味。",
        "en": "Appreciation needs savoring."
      }
    ]
  },
  {
    "title": "辩论基础",
    "level": "HSK 6",
    "icon": "fa-comments",
    "words": [
      {
        "cn": "辩论",
        "py": "biànlùn",
        "en": "debate",
        "tip": "辩论 formal."
      },
      {
        "cn": "论点",
        "py": "lùndiǎn",
        "en": "argument",
        "tip": "论点 main point."
      },
      {
        "cn": "论据",
        "py": "lùnjù",
        "en": "evidence",
        "tip": "论据 support."
      },
      {
        "cn": "反驳",
        "py": "fǎnbó",
        "en": "rebuttal",
        "tip": "反驳 counter."
      },
      {
        "cn": "立论",
        "py": "lìlùn",
        "en": "proposition",
        "tip": "立论 establish."
      },
      {
        "cn": "破题",
        "py": "pòtí",
        "en": "approach",
        "tip": "破题 tackle."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "辩论需要什么？",
        "en": "What needed for debate?"
      },
      {
        "who": "you",
        "cn": "清晰论点和充分论据。",
        "en": "Clear argument, solid evidence."
      },
      {
        "who": "bot",
        "cn": "反驳对方观点。",
        "en": "Rebuttal of opponent."
      },
      {
        "who": "you",
        "cn": "找出逻辑漏洞。",
        "en": "Find logical flaws."
      },
      {
        "who": "bot",
        "cn": "立论要站稳。",
        "en": "Proposition must stand."
      },
      {
        "who": "you",
        "cn": "破题找对角度。",
        "en": "Find right angle."
      },
      {
        "who": "bot",
        "cn": "辩论锻炼思维。",
        "en": "Debate sharpens thinking."
      }
    ]
  },
  {
    "title": "立论与论证",
    "level": "HSK 6",
    "icon": "fa-building-columns",
    "words": [
      {
        "cn": "立论",
        "py": "lìlùn",
        "en": "proposition",
        "tip": "立论 establish claim."
      },
      {
        "cn": "论证",
        "py": "lùnzhèng",
        "en": "argumentation",
        "tip": "论证 prove."
      },
      {
        "cn": "演绎",
        "py": "yǎnyì",
        "en": "deduction",
        "tip": "演绎 general to specific."
      },
      {
        "cn": "归纳",
        "py": "guīnà",
        "en": "induction",
        "tip": "归纳 specific to general."
      },
      {
        "cn": "类比",
        "py": "lèibǐ",
        "en": "analogy",
        "tip": "类比 comparison."
      },
      {
        "cn": "因果",
        "py": "yīnguǒ",
        "en": "causality",
        "tip": "因果 cause effect."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "论证有哪些方法？",
        "en": "Methods of argumentation?"
      },
      {
        "who": "you",
        "cn": "演绎归纳类比因果。",
        "en": "Deduction, induction, analogy, cause."
      },
      {
        "who": "bot",
        "cn": "演绎是逻辑推理。",
        "en": "Deduction logical inference."
      },
      {
        "who": "you",
        "cn": "归纳从事实到结论。",
        "en": "Induction facts to conclusion."
      },
      {
        "who": "bot",
        "cn": "类比帮助理解。",
        "en": "Analogy aids understanding."
      },
      {
        "who": "you",
        "cn": "因果解释原因和结果。",
        "en": "Cause explains why."
      },
      {
        "who": "bot",
        "cn": "多种方法结合更有效。",
        "en": "Combine methods effective."
      }
    ]
  },
  {
    "title": "辩论技巧",
    "level": "HSK 6",
    "icon": "fa-microphone",
    "words": [
      {
        "cn": "技巧",
        "py": "jìqiǎo",
        "en": "technique",
        "tip": "技巧 skill."
      },
      {
        "cn": "语速",
        "py": "yǔsù",
        "en": "speech pace",
        "tip": "语速 speed."
      },
      {
        "cn": "逻辑",
        "py": "luóji",
        "en": "logic",
        "tip": "逻辑 reasoning."
      },
      {
        "cn": "气势",
        "py": "qìshì",
        "en": "momentum",
        "tip": "气势 presence."
      },
      {
        "cn": "设问",
        "py": "shèwèn",
        "en": "rhetorical question",
        "tip": "设问 ask then answer."
      },
      {
        "cn": "总结",
        "py": "zǒngjié",
        "en": "summary",
        "tip": "总结 conclude."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "辩论有什么技巧？",
        "en": "Debate techniques?"
      },
      {
        "who": "you",
        "cn": "语速适中逻辑严密。",
        "en": "Moderate pace, solid logic."
      },
      {
        "who": "bot",
        "cn": "气势要压住。",
        "en": "Need commanding presence."
      },
      {
        "who": "you",
        "cn": "但不能咄咄逼人。",
        "en": "But not aggressive."
      },
      {
        "who": "bot",
        "cn": "设问可引导观众。",
        "en": "Rhetorical questions guide audience."
      },
      {
        "who": "you",
        "cn": "总结要简洁有力。",
        "en": "Summary concise powerful."
      },
      {
        "who": "bot",
        "cn": "综合运用才算好。",
        "en": "Combined use is good."
      }
    ]
  },
  {
    "title": "辩论主题",
    "level": "HSK 6",
    "icon": "fa-scale-balanced",
    "words": [
      {
        "cn": "主题",
        "py": "zhǔtí",
        "en": "topic",
        "tip": "主题 subject."
      },
      {
        "cn": "正方",
        "py": "zhèngfāng",
        "en": "pro side",
        "tip": "正方 affirmative."
      },
      {
        "cn": "反方",
        "py": "fǎnfāng",
        "en": "con side",
        "tip": "反方 negative."
      },
      {
        "cn": "定义",
        "py": "dìngyì",
        "en": "definition",
        "tip": "定义 scope."
      },
      {
        "cn": "标准",
        "py": "biāozhǔn",
        "en": "criterion",
        "tip": "标准 measure."
      },
      {
        "cn": "价值",
        "py": "jiàzhí",
        "en": "value",
        "tip": "价值 worth."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "如何确定辩论主题？",
        "en": "How set topic?"
      },
      {
        "who": "you",
        "cn": "主题要有可辩性。",
        "en": "Topic must be debatable."
      },
      {
        "who": "bot",
        "cn": "正反方定义标准。",
        "en": "Both sides define terms."
      },
      {
        "who": "you",
        "cn": "定义影响辩论走向。",
        "en": "Definition affects direction."
      },
      {
        "who": "bot",
        "cn": "价值辩论关乎价值判断。",
        "en": "Value debate about judgment."
      },
      {
        "who": "you",
        "cn": "需要上升到价值层面。",
        "en": "Need to raise to value level."
      },
      {
        "who": "bot",
        "cn": "好主题一半成功。",
        "en": "Good topic half success."
      }
    ]
  },
  {
    "title": "辩论赛实践",
    "level": "HSK 6",
    "icon": "fa-trophy",
    "words": [
      {
        "cn": "赛制",
        "py": "sàizhì",
        "en": "format",
        "tip": "赛制 competition rules."
      },
      {
        "cn": "辩手",
        "py": "biànshǒu",
        "en": "debater",
        "tip": "辩手 participant."
      },
      {
        "cn": "陈词",
        "py": "chéncí",
        "en": "statement",
        "tip": "陈词 opening."
      },
      {
        "cn": "自由辩",
        "py": "zìyóubiàn",
        "en": "free debate",
        "tip": "自由辩 open."
      },
      {
        "cn": "结辩",
        "py": "jiébiàn",
        "en": "closing",
        "tip": "结辩 final."
      },
      {
        "cn": "评委",
        "py": "píngwěi",
        "en": "judge",
        "tip": "评委 evaluator."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "辩论赛怎么进行？",
        "en": "How debate run?"
      },
      {
        "who": "you",
        "cn": "先陈词后自由辩论。",
        "en": "Statement then free debate."
      },
      {
        "who": "bot",
        "cn": "辩手要配合。",
        "en": "Debaters need coordination."
      },
      {
        "who": "you",
        "cn": "自由辩反应要快。",
        "en": "Free debate quick thinking."
      },
      {
        "who": "bot",
        "cn": "结辩要升华。",
        "en": "Closing must elevate."
      },
      {
        "who": "you",
        "cn": "评委根据表现评分。",
        "en": "Judges score performance."
      },
      {
        "who": "bot",
        "cn": "辩论赛锻炼综合素质。",
        "en": "Debate builds all-round skills."
      }
    ]
  },
  {
    "title": "理论与假设",
    "level": "HSK 6",
    "icon": "fa-lightbulb",
    "words": [
      {
        "cn": "理论",
        "py": "lǐlùn",
        "en": "theory",
        "tip": "理论 system."
      },
      {
        "cn": "假设",
        "py": "jiǎshè",
        "en": "hypothesis",
        "tip": "假设 proposed."
      },
      {
        "cn": "模型",
        "py": "móxíng",
        "en": "model",
        "tip": "模型 representation."
      },
      {
        "cn": "验证",
        "py": "yànzhèng",
        "en": "verification",
        "tip": "验证 test."
      },
      {
        "cn": "变量",
        "py": "biànliàng",
        "en": "variable",
        "tip": "变量 factor."
      },
      {
        "cn": "框架",
        "py": "kuàngjià",
        "en": "framework",
        "tip": "框架 structure."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "理论如何形成？",
        "en": "How theory form?"
      },
      {
        "who": "you",
        "cn": "提出假设建立模型。",
        "en": "Hypothesis, build models."
      },
      {
        "who": "bot",
        "cn": "需要实验验证。",
        "en": "Need experiment verification."
      },
      {
        "who": "you",
        "cn": "控制变量分析结果。",
        "en": "Control variables analyze."
      },
      {
        "who": "bot",
        "cn": "理论框架指导研究。",
        "en": "Framework guides research."
      },
      {
        "who": "you",
        "cn": "好的理论可以预测。",
        "en": "Good theory predicts."
      },
      {
        "who": "bot",
        "cn": "科学不断修正理论。",
        "en": "Science revises theories."
      }
    ]
  },
  {
    "title": "分析与综合",
    "level": "HSK 6",
    "icon": "fa-magnifying-glass-chart",
    "words": [
      {
        "cn": "分析",
        "py": "fēnxī",
        "en": "analysis",
        "tip": "分析 examine."
      },
      {
        "cn": "综合",
        "py": "zōnghé",
        "en": "synthesis",
        "tip": "综合 combine."
      },
      {
        "cn": "归纳",
        "py": "guīnà",
        "en": "induction",
        "tip": "归纳 generalize."
      },
      {
        "cn": "演绎",
        "py": "yǎnyì",
        "en": "deduction",
        "tip": "演绎 deduce."
      },
      {
        "cn": "抽象",
        "py": "chōuxiàng",
        "en": "abstract",
        "tip": "抽象 concepts."
      },
      {
        "cn": "具体",
        "py": "jùtǐ",
        "en": "concrete",
        "tip": "具体 specific."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "分析是怎么做的？",
        "en": "How to analyze?"
      },
      {
        "who": "you",
        "cn": "把复杂问题分解。",
        "en": "Break down complex problems."
      },
      {
        "who": "bot",
        "cn": "综合是整合分析结果。",
        "en": "Synthesis integrates analysis."
      },
      {
        "who": "you",
        "cn": "从部分回到整体。",
        "en": "From parts back to whole."
      },
      {
        "who": "bot",
        "cn": "抽象和具体的关系？",
        "en": "Abstract vs concrete?"
      },
      {
        "who": "you",
        "cn": "抽象提炼共同特征。",
        "en": "Abstract extracts common features."
      },
      {
        "who": "bot",
        "cn": "分析综合相辅相成。",
        "en": "Analysis and synthesis complement."
      }
    ]
  },
  {
    "title": "批判思维",
    "level": "HSK 6",
    "icon": "fa-brain",
    "words": [
      {
        "cn": "批判",
        "py": "pīpàn",
        "en": "critique",
        "tip": "批判 examine."
      },
      {
        "cn": "质疑",
        "py": "zhìyí",
        "en": "question",
        "tip": "质疑 challenge."
      },
      {
        "cn": "反思",
        "py": "fǎnsī",
        "en": "reflect",
        "tip": "反思 look back."
      },
      {
        "cn": "逻辑",
        "py": "luóji",
        "en": "logic",
        "tip": "逻辑 reasoning."
      },
      {
        "cn": "偏见",
        "py": "piānjiàn",
        "en": "bias",
        "tip": "偏见 prejudice."
      },
      {
        "cn": "客观",
        "py": "kèguān",
        "en": "objective",
        "tip": "客观 unbiased."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "批判思维是什么？",
        "en": "What is critical thinking?"
      },
      {
        "who": "you",
        "cn": "质疑反思和逻辑判断。",
        "en": "Question, reflect, logic."
      },
      {
        "who": "bot",
        "cn": "要避免偏见。",
        "en": "Avoid bias."
      },
      {
        "who": "you",
        "cn": "偏见会影响客观。",
        "en": "Bias affects objectivity."
      },
      {
        "who": "bot",
        "cn": "如何培养批判思维？",
        "en": "How develop critical thinking?"
      },
      {
        "who": "you",
        "cn": "多角度思考多问为什么。",
        "en": "Multi-perspective, ask why."
      },
      {
        "who": "bot",
        "cn": "理性思考很重要。",
        "en": "Rational thinking important."
      }
    ]
  },
  {
    "title": "辩证思维",
    "level": "HSK 6",
    "icon": "fa-yin-yang",
    "words": [
      {
        "cn": "辩证",
        "py": "biànzhèng",
        "en": "dialectical",
        "tip": "辩证 opposing."
      },
      {
        "cn": "矛盾",
        "py": "máodùn",
        "en": "contradiction",
        "tip": "矛盾 opposite."
      },
      {
        "cn": "统一",
        "py": "tǒngyī",
        "en": "unity",
        "tip": "统一 integration."
      },
      {
        "cn": "对立",
        "py": "duìlì",
        "en": "opposition",
        "tip": "对立 contrast."
      },
      {
        "cn": "转化",
        "py": "zhuǎnhuà",
        "en": "transformation",
        "tip": "转化 change."
      },
      {
        "cn": "发展",
        "py": "fāzhǎn",
        "en": "development",
        "tip": "发展 progress."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "辩证思维核心？",
        "en": "Dialectical thinking core?"
      },
      {
        "who": "you",
        "cn": "矛盾对立统一。",
        "en": "Opposites unified."
      },
      {
        "who": "bot",
        "cn": "事物会转化。",
        "en": "Things transform."
      },
      {
        "who": "you",
        "cn": "坏事可以变好事。",
        "en": "Bad can become good."
      },
      {
        "who": "bot",
        "cn": "发展是螺旋上升。",
        "en": "Development spirals up."
      },
      {
        "who": "you",
        "cn": "否定之否定规律。",
        "en": "Negation of negation."
      },
      {
        "who": "bot",
        "cn": "辩证思维看问题全面。",
        "en": "Dialectics sees fully."
      }
    ]
  },
  {
    "title": "概念与范畴",
    "level": "HSK 6",
    "icon": "fa-sitemap",
    "words": [
      {
        "cn": "概念",
        "py": "gàiniàn",
        "en": "concept",
        "tip": "概念 idea."
      },
      {
        "cn": "范畴",
        "py": "fànchóu",
        "en": "category",
        "tip": "范畴 classification."
      },
      {
        "cn": "定义",
        "py": "dìngyì",
        "en": "definition",
        "tip": "定义 meaning."
      },
      {
        "cn": "外延",
        "py": "wàiyán",
        "en": "extension",
        "tip": "外延 scope."
      },
      {
        "cn": "内涵",
        "py": "nèihán",
        "en": "connotation",
        "tip": "内涵 content."
      },
      {
        "cn": "抽象",
        "py": "chōuxiàng",
        "en": "abstract",
        "tip": "抽象 general."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "概念如何定义？",
        "en": "How define concepts?"
      },
      {
        "who": "you",
        "cn": "明确内涵和外延。",
        "en": "Clear connotation and extension."
      },
      {
        "who": "bot",
        "cn": "范畴是概念的归类。",
        "en": "Category groups concepts."
      },
      {
        "who": "you",
        "cn": "抽象概念需要具体例子。",
        "en": "Abstract needs examples."
      },
      {
        "who": "bot",
        "cn": "概念的层次关系？",
        "en": "Concept hierarchy?"
      },
      {
        "who": "you",
        "cn": "上位下位范畴。",
        "en": "Superordinate and subordinate."
      },
      {
        "who": "bot",
        "cn": "概念系统构成知识。",
        "en": "Concept system forms knowledge."
      }
    ]
  },
  {
    "title": "经济学原理",
    "level": "HSK 6",
    "icon": "fa-chart-line",
    "words": [
      {
        "cn": "经济",
        "py": "jīngjì",
        "en": "economy",
        "tip": "经济 system."
      },
      {
        "cn": "供给",
        "py": "gōngjǐ",
        "en": "supply",
        "tip": "供给 provide."
      },
      {
        "cn": "需求",
        "py": "xūqiú",
        "en": "demand",
        "tip": "需求 need."
      },
      {
        "cn": "贸易",
        "py": "màoyì",
        "en": "trade",
        "tip": "贸易 exchange."
      },
      {
        "cn": "货币",
        "py": "huòbì",
        "en": "currency",
        "tip": "货币 money."
      },
      {
        "cn": "通胀",
        "py": "tōngzhàng",
        "en": "inflation",
        "tip": "通胀 rising prices."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "经济学研究什么？",
        "en": "Economics study?"
      },
      {
        "who": "you",
        "cn": "研究资源配置。",
        "en": "Resource allocation."
      },
      {
        "who": "bot",
        "cn": "供给需求决定价格。",
        "en": "Supply demand determine price."
      },
      {
        "who": "you",
        "cn": "市场调节资源。",
        "en": "Market allocates resources."
      },
      {
        "who": "bot",
        "cn": "国际贸易互利。",
        "en": "Trade benefits both."
      },
      {
        "who": "you",
        "cn": "货币和通胀关系密切。",
        "en": "Currency relates to inflation."
      },
      {
        "who": "bot",
        "cn": "经济学无处不在。",
        "en": "Economics everywhere."
      }
    ]
  },
  {
    "title": "国际政治",
    "level": "HSK 6",
    "icon": "fa-globe",
    "words": [
      {
        "cn": "政治",
        "py": "zhèngzhì",
        "en": "politics",
        "tip": "政治 power."
      },
      {
        "cn": "主权",
        "py": "zhǔquán",
        "en": "sovereignty",
        "tip": "主权 supreme."
      },
      {
        "cn": "全球化",
        "py": "quánqiúhuà",
        "en": "globalization",
        "tip": "全球化 integration."
      },
      {
        "cn": "外交",
        "py": "wàijiāo",
        "en": "diplomacy",
        "tip": "外交 relations."
      },
      {
        "cn": "制裁",
        "py": "zhìcái",
        "en": "sanctions",
        "tip": "制裁 penalties."
      },
      {
        "cn": "合作",
        "py": "hézuò",
        "en": "cooperation",
        "tip": "合作 collaboration."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "全球化影响大。",
        "en": "Globalization impacts big."
      },
      {
        "who": "you",
        "cn": "国家间互联互通。",
        "en": "Countries interconnected."
      },
      {
        "who": "bot",
        "cn": "主权和全球化冲突？",
        "en": "Sovereignty vs globalization?"
      },
      {
        "who": "you",
        "cn": "需要平衡。",
        "en": "Need balance."
      },
      {
        "who": "bot",
        "cn": "外交避免冲突。",
        "en": "Diplomacy avoids conflict."
      },
      {
        "who": "you",
        "cn": "对话合作最好。",
        "en": "Dialogue and cooperation best."
      },
      {
        "who": "bot",
        "cn": "国际秩序靠规则。",
        "en": "World order rules-based."
      }
    ]
  },
  {
    "title": "艺术批评",
    "level": "HSK 6",
    "icon": "fa-paintbrush",
    "words": [
      {
        "cn": "艺术",
        "py": "yìshù",
        "en": "art",
        "tip": "艺术 creative."
      },
      {
        "cn": "批评",
        "py": "pīpíng",
        "en": "critique",
        "tip": "批评 evaluation."
      },
      {
        "cn": "审美",
        "py": "shěnměi",
        "en": "aesthetic",
        "tip": "审美 taste."
      },
      {
        "cn": "风格",
        "py": "fēnggé",
        "en": "style",
        "tip": "风格 expression."
      },
      {
        "cn": "流派",
        "py": "liúpài",
        "en": "school",
        "tip": "流派 movement."
      },
      {
        "cn": "创作",
        "py": "chuàngzuò",
        "en": "creation",
        "tip": "创作 produce."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "艺术批评做什么？",
        "en": "Art critique do?"
      },
      {
        "who": "you",
        "cn": "分析作品审美价值。",
        "en": "Analyze aesthetic value."
      },
      {
        "who": "bot",
        "cn": "风格和流派有什么关系？",
        "en": "Style and school relation?"
      },
      {
        "who": "you",
        "cn": "流派是群体风格。",
        "en": "School is group style."
      },
      {
        "who": "bot",
        "cn": "创作背景重要。",
        "en": "Context important."
      },
      {
        "who": "you",
        "cn": "了解背景理解艺术。",
        "en": "Understand background."
      },
      {
        "who": "bot",
        "cn": "艺术批评需要专业知识。",
        "en": "Needs professional knowledge."
      }
    ]
  },
  {
    "title": "文化研究",
    "level": "HSK 6",
    "icon": "fa-building-columns",
    "words": [
      {
        "cn": "文化",
        "py": "wénhuà",
        "en": "culture",
        "tip": "文化 customs."
      },
      {
        "cn": "认同",
        "py": "rèntóng",
        "en": "identity",
        "tip": "认同 belonging."
      },
      {
        "cn": "多元",
        "py": "duōyuán",
        "en": "diverse",
        "tip": "多元 multiple."
      },
      {
        "cn": "传统",
        "py": "chuántǒng",
        "en": "tradition",
        "tip": "传统 heritage."
      },
      {
        "cn": "现代",
        "py": "xiàndài",
        "en": "modern",
        "tip": "现代 contemporary."
      },
      {
        "cn": "融合",
        "py": "rónghé",
        "en": "fusion",
        "tip": "融合 blend."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "文化研究关注什么？",
        "en": "Cultural studies focus?"
      },
      {
        "who": "you",
        "cn": "文化认同和多元性。",
        "en": "Identity and diversity."
      },
      {
        "who": "bot",
        "cn": "传统和现代如何融合？",
        "en": "Tradition and modern fusion?"
      },
      {
        "who": "you",
        "cn": "创造性转化创新性发展。",
        "en": "Creative transformation."
      },
      {
        "who": "bot",
        "cn": "全球化对文化影响？",
        "en": "Globalization effect on culture?"
      },
      {
        "who": "you",
        "cn": "交流互鉴不失去自我。",
        "en": "Exchange without losing self."
      },
      {
        "who": "bot",
        "cn": "文化自信很重要。",
        "en": "Cultural confidence important."
      }
    ]
  },
  {
    "title": "当代文学",
    "level": "HSK 6",
    "icon": "fa-book-open",
    "words": [
      {
        "cn": "文学",
        "py": "wénxué",
        "en": "literature",
        "tip": "文学 writing."
      },
      {
        "cn": "作家",
        "py": "zuòjiā",
        "en": "writer",
        "tip": "作家 author."
      },
      {
        "cn": "叙事",
        "py": "xùshì",
        "en": "narrative",
        "tip": "叙事 storytelling."
      },
      {
        "cn": "先锋",
        "py": "xiānfēng",
        "en": "avant-garde",
        "tip": "先锋 experimental."
      },
      {
        "cn": "现实",
        "py": "xiànshí",
        "en": "reality",
        "tip": "现实 realism."
      },
      {
        "cn": "创作",
        "py": "chuàngzuò",
        "en": "create",
        "tip": "创作 writing."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "当代文学特点？",
        "en": "Contemporary literature features?"
      },
      {
        "who": "you",
        "cn": "叙事多样先锋探索。",
        "en": "Diverse narratives, avant-garde."
      },
      {
        "who": "bot",
        "cn": "现实主义依然重要。",
        "en": "Realism still matters."
      },
      {
        "who": "you",
        "cn": "关注社会现实问题。",
        "en": "Focuses on social issues."
      },
      {
        "who": "bot",
        "cn": "中国作家国际获奖。",
        "en": "Chinese writers win awards."
      },
      {
        "who": "you",
        "cn": "莫言余华等代表。",
        "en": "Mo Yan, Yu Hua represent."
      },
      {
        "who": "bot",
        "cn": "文学反映时代。",
        "en": "Literature reflects times."
      }
    ]
  },
  {
    "title": "企业战略",
    "level": "HSK 5",
    "icon": "fa-chess",
    "words": [
      {
        "cn": "战略",
        "py": "zhànlüè",
        "en": "strategy",
        "tip": "战略 long-term plan."
      },
      {
        "cn": "目标",
        "py": "mùbiāo",
        "en": "objective",
        "tip": "目标 goal."
      },
      {
        "cn": "执行",
        "py": "zhíxíng",
        "en": "execute",
        "tip": "执行 implement."
      },
      {
        "cn": "创新",
        "py": "chuàngxīn",
        "en": "innovation",
        "tip": "创新 new ideas."
      },
      {
        "cn": "转型",
        "py": "zhuǎnxíng",
        "en": "transformation",
        "tip": "转型 change."
      },
      {
        "cn": "增长",
        "py": "zēngzhǎng",
        "en": "growth",
        "tip": "增长 increase."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "企业战略如何制定？",
        "en": "How set company strategy?"
      },
      {
        "who": "you",
        "cn": "明确目标和执行路径。",
        "en": "Clear goals and execution path."
      },
      {
        "who": "bot",
        "cn": "创新是核心动力。",
        "en": "Innovation is core."
      },
      {
        "who": "you",
        "cn": "不断产品创新保持竞争力。",
        "en": "Continuous product innovation."
      },
      {
        "who": "bot",
        "cn": "数字化转型是趋势。",
        "en": "Digital transformation trend."
      },
      {
        "who": "you",
        "cn": "传统企业需要转型升级。",
        "en": "Traditional needs upgrade."
      },
      {
        "who": "bot",
        "cn": "战略决定成败。",
        "en": "Strategy decides success."
      }
    ]
  },
  {
    "title": "投资理财",
    "level": "HSK 5",
    "icon": "fa-chart-pie",
    "words": [
      {
        "cn": "投资",
        "py": "tóuzī",
        "en": "investment",
        "tip": "投资 capital."
      },
      {
        "cn": "股票",
        "py": "gǔpiào",
        "en": "stock",
        "tip": "股票 shares."
      },
      {
        "cn": "基金",
        "py": "jījīn",
        "en": "fund",
        "tip": "基金 portfolio."
      },
      {
        "cn": "风险",
        "py": "fēngxiǎn",
        "en": "risk",
        "tip": "风险 danger."
      },
      {
        "cn": "回报",
        "py": "huíbào",
        "en": "return",
        "tip": "回报 gain."
      },
      {
        "cn": "理财",
        "py": "lǐcái",
        "en": "finance",
        "tip": "理财 management."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "投资要注意什么？",
        "en": "What note for investment?"
      },
      {
        "who": "you",
        "cn": "分散风险合理配置。",
        "en": "Diversify risk."
      },
      {
        "who": "bot",
        "cn": "股票和基金区别？",
        "en": "Stock vs fund difference?"
      },
      {
        "who": "you",
        "cn": "基金分散投资风险小。",
        "en": "Fund diversifies."
      },
      {
        "who": "bot",
        "cn": "回报和风险成正比。",
        "en": "Return vs risk."
      },
      {
        "who": "you",
        "cn": "高回报高风险。",
        "en": "High return high risk."
      },
      {
        "who": "bot",
        "cn": "理财需要学习。",
        "en": "Finance needs study."
      }
    ]
  },
  {
    "title": "国际贸易",
    "level": "HSK 5",
    "icon": "fa-ship",
    "words": [
      {
        "cn": "贸易",
        "py": "màoyì",
        "en": "trade",
        "tip": "贸易 exchange."
      },
      {
        "cn": "进口",
        "py": "jìnkǒu",
        "en": "import",
        "tip": "进口 bring in."
      },
      {
        "cn": "出口",
        "py": "chūkǒu",
        "en": "export",
        "tip": "出口 send out."
      },
      {
        "cn": "关税",
        "py": "guānshuì",
        "en": "tariff",
        "tip": "关税 tax."
      },
      {
        "cn": "壁垒",
        "py": "bìlěi",
        "en": "barrier",
        "tip": "壁垒 obstacle."
      },
      {
        "cn": "顺差",
        "py": "shùnchā",
        "en": "surplus",
        "tip": "顺差 positive."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "国际贸易格局在变。",
        "en": "Trade landscape changing."
      },
      {
        "who": "you",
        "cn": "中国是出口大国。",
        "en": "China big exporter."
      },
      {
        "who": "bot",
        "cn": "关税影响贸易。",
        "en": "Tariffs affect trade."
      },
      {
        "who": "you",
        "cn": "贸易壁垒阻碍发展。",
        "en": "Barriers hinder development."
      },
      {
        "who": "bot",
        "cn": "顺差逆差需平衡。",
        "en": "Balance surplus deficit."
      },
      {
        "who": "you",
        "cn": "互利共赢是目标。",
        "en": "Mutual benefit goal."
      },
      {
        "who": "bot",
        "cn": "全球化趋势不变。",
        "en": "Globalization continues."
      }
    ]
  },
  {
    "title": "人才管理",
    "level": "HSK 5",
    "icon": "fa-users-cog",
    "words": [
      {
        "cn": "人才",
        "py": "réncái",
        "en": "talent",
        "tip": "人才 skilled."
      },
      {
        "cn": "招聘",
        "py": "zhāopìn",
        "en": "recruit",
        "tip": "招聘 hire."
      },
      {
        "cn": "培训",
        "py": "péixùn",
        "en": "training",
        "tip": "培训 develop."
      },
      {
        "cn": "绩效",
        "py": "jìxiào",
        "en": "performance",
        "tip": "绩效 result."
      },
      {
        "cn": "激励",
        "py": "jīlì",
        "en": "motivate",
        "tip": "激励 encourage."
      },
      {
        "cn": "团队",
        "py": "tuánduì",
        "en": "team",
        "tip": "团队 group."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "如何管理人才？",
        "en": "How manage talent?"
      },
      {
        "who": "you",
        "cn": "招聘合适的人并培训。",
        "en": "Hire right and train."
      },
      {
        "who": "bot",
        "cn": "绩效考核公平吗？",
        "en": "Performance evaluation fair?"
      },
      {
        "who": "you",
        "cn": "要客观公正有标准。",
        "en": "Objective fair standards."
      },
      {
        "who": "bot",
        "cn": "激励员工很重要。",
        "en": "Motivating staff important."
      },
      {
        "who": "you",
        "cn": "物质精神双重激励。",
        "en": "Material and spiritual."
      },
      {
        "who": "bot",
        "cn": "好团队是成功基础。",
        "en": "Good team foundation."
      }
    ]
  },
  {
    "title": "领导力",
    "level": "HSK 5",
    "icon": "fa-crown",
    "words": [
      {
        "cn": "领导",
        "py": "lǐngdǎo",
        "en": "leadership",
        "tip": "领导 lead."
      },
      {
        "cn": "决策",
        "py": "juécè",
        "en": "decision",
        "tip": "决策 decide."
      },
      {
        "cn": "影响",
        "py": "yǐngxiǎng",
        "en": "influence",
        "tip": "影响 impact."
      },
      {
        "cn": "沟通",
        "py": "gōutōng",
        "en": "communication",
        "tip": "沟通 talk."
      },
      {
        "cn": "愿景",
        "py": "yuànjǐng",
        "en": "vision",
        "tip": "愿景 future."
      },
      {
        "cn": "责任",
        "py": "zérèn",
        "en": "responsibility",
        "tip": "责任 duty."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "好的领导者应具备什么？",
        "en": "What makes good leader?"
      },
      {
        "who": "you",
        "cn": "决策能力沟通能力。",
        "en": "Decision and communication."
      },
      {
        "who": "bot",
        "cn": "愿景指引方向。",
        "en": "Vision guides direction."
      },
      {
        "who": "you",
        "cn": "领导要承担责任。",
        "en": "Leader takes responsibility."
      },
      {
        "who": "bot",
        "cn": "影响力来自信任。",
        "en": "Influence from trust."
      },
      {
        "who": "you",
        "cn": "以身作则很重要。",
        "en": "Lead by example."
      },
      {
        "who": "bot",
        "cn": "领导力可以培养。",
        "en": "Leadership can be developed."
      }
    ]
  },
  {
    "title": "公共政策",
    "level": "HSK 5",
    "icon": "fa-file-lines",
    "words": [
      {
        "cn": "政策",
        "py": "zhèngcè",
        "en": "policy",
        "tip": "政策 guideline."
      },
      {
        "cn": "执行",
        "py": "zhíxíng",
        "en": "implement",
        "tip": "执行 carry out."
      },
      {
        "cn": "评估",
        "py": "pínggū",
        "en": "evaluate",
        "tip": "评估 assess."
      },
      {
        "cn": "监管",
        "py": "jiānguǎn",
        "en": "regulate",
        "tip": "监管 oversee."
      },
      {
        "cn": "福利",
        "py": "fúlì",
        "en": "welfare",
        "tip": "福利 benefit."
      },
      {
        "cn": "民生",
        "py": "mínshēng",
        "en": "livelihood",
        "tip": "民生 people life."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "公共政策如何影响民生？",
        "en": "How policy affects livelihood?"
      },
      {
        "who": "you",
        "cn": "好的政策提高生活质量。",
        "en": "Good policy improves life."
      },
      {
        "who": "bot",
        "cn": "执行很难。",
        "en": "Implementation hard."
      },
      {
        "who": "you",
        "cn": "需要有效监管。",
        "en": "Need effective regulation."
      },
      {
        "who": "bot",
        "cn": "政策要定期评估。",
        "en": "Policy needs regular evaluation."
      },
      {
        "who": "you",
        "cn": "根据反馈不断改进。",
        "en": "Improve based on feedback."
      },
      {
        "who": "bot",
        "cn": "为民造福是目的。",
        "en": "Purpose is people welfare."
      }
    ]
  },
  {
    "title": "社会变迁",
    "level": "HSK 5",
    "icon": "fa-arrow-trend-up",
    "words": [
      {
        "cn": "变迁",
        "py": "biànqiān",
        "en": "change",
        "tip": "变迁 transition."
      },
      {
        "cn": "城市",
        "py": "chéngshì",
        "en": "urban",
        "tip": "城市 urbanization."
      },
      {
        "cn": "现代",
        "py": "xiàndài",
        "en": "modern",
        "tip": "现代 modernization."
      },
      {
        "cn": "家庭",
        "py": "jiātíng",
        "en": "family",
        "tip": "家庭 structure."
      },
      {
        "cn": "人口",
        "py": "rénkǒu",
        "en": "population",
        "tip": "人口 demographics."
      },
      {
        "cn": "趋势",
        "py": "qūshì",
        "en": "trend",
        "tip": "趋势 direction."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "社会在快速变迁。",
        "en": "Society changing fast."
      },
      {
        "who": "you",
        "cn": "城市化进程加快。",
        "en": "Urbanization accelerating."
      },
      {
        "who": "bot",
        "cn": "家庭结构也在变。",
        "en": "Family structure changes."
      },
      {
        "who": "you",
        "cn": "小家庭成主流。",
        "en": "Smaller families mainstream."
      },
      {
        "who": "bot",
        "cn": "人口老龄化趋势。",
        "en": "Aging population trend."
      },
      {
        "who": "you",
        "cn": "对社会影响深远。",
        "en": "Profound social impact."
      },
      {
        "who": "bot",
        "cn": "需要积极应对。",
        "en": "Need proactive response."
      }
    ]
  },
  {
    "title": "公共关系",
    "level": "HSK 4",
    "icon": "fa-network-wired",
    "words": [
      {
        "cn": "公共",
        "py": "gōnggòng",
        "en": "public",
        "tip": "公共 public."
      },
      {
        "cn": "关系",
        "py": "guānxi",
        "en": "relations",
        "tip": "关系 relationship."
      },
      {
        "cn": "传播",
        "py": "chuánbō",
        "en": "communication",
        "tip": "传播 spread."
      },
      {
        "cn": "形象",
        "py": "xíngxiàng",
        "en": "image",
        "tip": "形象 perception."
      },
      {
        "cn": "危机",
        "py": "wēijī",
        "en": "crisis",
        "tip": "危机 emergency."
      },
      {
        "cn": "信任",
        "py": "xìnrèn",
        "en": "trust",
        "tip": "信任 faith."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "公关做什么？",
        "en": "What PR does?"
      },
      {
        "who": "you",
        "cn": "维护组织形象和传播。",
        "en": "Maintain image and communicate."
      },
      {
        "who": "bot",
        "cn": "危机公关很重要。",
        "en": "Crisis PR crucial."
      },
      {
        "who": "you",
        "cn": "真诚沟通化解危机。",
        "en": "Sincere communication resolves."
      },
      {
        "who": "bot",
        "cn": "信任是最重要的资产。",
        "en": "Trust is vital asset."
      },
      {
        "who": "you",
        "cn": "长期积累信任。",
        "en": "Build trust over time."
      },
      {
        "who": "bot",
        "cn": "公关需要策略。",
        "en": "PR needs strategy."
      }
    ]
  },
  {
    "title": "广告传播",
    "level": "HSK 5",
    "icon": "fa-bullhorn",
    "words": [
      {
        "cn": "广告",
        "py": "guǎnggào",
        "en": "advertising",
        "tip": "广告 promote."
      },
      {
        "cn": "媒介",
        "py": "méijiè",
        "en": "media",
        "tip": "媒介 channel."
      },
      {
        "cn": "受众",
        "py": "shòuzhòng",
        "en": "audience",
        "tip": "受众 target."
      },
      {
        "cn": "创意",
        "py": "chuàngyì",
        "en": "creative",
        "tip": "创意 idea."
      },
      {
        "cn": "品牌",
        "py": "pǐnpái",
        "en": "brand",
        "tip": "品牌 brand."
      },
      {
        "cn": "效果",
        "py": "xiàoguǒ",
        "en": "effect",
        "tip": "效果 result."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "广告如何影响消费者？",
        "en": "How ads affect consumers?"
      },
      {
        "who": "you",
        "cn": "通过创意和媒介传播。",
        "en": "Through creative media."
      },
      {
        "who": "bot",
        "cn": "品牌建设是长期过程。",
        "en": "Brand building long-term."
      },
      {
        "who": "you",
        "cn": "广告要明确受众。",
        "en": "Advertise to clear audience."
      },
      {
        "who": "bot",
        "cn": "效果如何衡量？",
        "en": "How measure effect?"
      },
      {
        "who": "you",
        "cn": "看转化率和品牌认知。",
        "en": "Conversion and brand awareness."
      },
      {
        "who": "bot",
        "cn": "广告也在数字化。",
        "en": "Ads digitizing."
      }
    ]
  },
  {
    "title": "环境保护法",
    "level": "HSK 5",
    "icon": "fa-leaf",
    "words": [
      {
        "cn": "环保",
        "py": "huánbǎo",
        "en": "environmental",
        "tip": "环保 protection."
      },
      {
        "cn": "立法",
        "py": "lìfǎ",
        "en": "legislation",
        "tip": "立法 make law."
      },
      {
        "cn": "排放",
        "py": "páifàng",
        "en": "emission",
        "tip": "排放 discharge."
      },
      {
        "cn": "处罚",
        "py": "chǔfá",
        "en": "penalty",
        "tip": "处罚 fine."
      },
      {
        "cn": "标准",
        "py": "biāozhǔn",
        "en": "standard",
        "tip": "标准 criterion."
      },
      {
        "cn": "监督",
        "py": "jiāndū",
        "en": "supervise",
        "tip": "监督 oversight."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "环保立法很重要。",
        "en": "Environmental legislation important."
      },
      {
        "who": "you",
        "cn": "约束企业排放行为。",
        "en": "Restrict corporate emissions."
      },
      {
        "who": "bot",
        "cn": "处罚力度要够。",
        "en": "Penalties must be strong."
      },
      {
        "who": "you",
        "cn": "违法成本高才有效。",
        "en": "High cost effective."
      },
      {
        "who": "bot",
        "cn": "执行和监督是关键。",
        "en": "Execution and oversight key."
      },
      {
        "who": "you",
        "cn": "公众也可监督。",
        "en": "Public can oversee too."
      },
      {
        "who": "bot",
        "cn": "保护环境人人有责。",
        "en": "Protecting environment everyone duty."
      }
    ]
  },
  {
    "title": "电子商务",
    "level": "HSK 5",
    "icon": "fa-laptop",
    "words": [
      {
        "cn": "电商",
        "py": "diànshāng",
        "en": "e-commerce",
        "tip": "电商 online business."
      },
      {
        "cn": "平台",
        "py": "píngtái",
        "en": "platform",
        "tip": "平台 marketplace."
      },
      {
        "cn": "支付",
        "py": "zhīfù",
        "en": "payment",
        "tip": "支付 pay."
      },
      {
        "cn": "物流",
        "py": "wùliú",
        "en": "logistics",
        "tip": "物流 delivery."
      },
      {
        "cn": "数据",
        "py": "shùjù",
        "en": "data",
        "tip": "数据 info."
      },
      {
        "cn": "用户",
        "py": "yònghù",
        "en": "user",
        "tip": "用户 customer."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "电商平台竞争激烈。",
        "en": "E-commerce platforms compete fiercely."
      },
      {
        "who": "you",
        "cn": "技术驱动用户体验。",
        "en": "Tech drives user experience."
      },
      {
        "who": "bot",
        "cn": "物流是核心竞争力。",
        "en": "Logistics is core."
      },
      {
        "who": "you",
        "cn": "快速配送赢得用户。",
        "en": "Fast delivery wins users."
      },
      {
        "who": "bot",
        "cn": "大数据精准推荐。",
        "en": "Big data recommends."
      },
      {
        "who": "you",
        "cn": "提高转化和留存。",
        "en": "Improve conversion retention."
      },
      {
        "who": "bot",
        "cn": "电商还在增长。",
        "en": "E-commerce still growing."
      }
    ]
  },
  {
    "title": "知识产权",
    "level": "HSK 5",
    "icon": "fa-copyright",
    "words": [
      {
        "cn": "知识",
        "py": "zhīshi",
        "en": "intellectual",
        "tip": "知识 knowledge."
      },
      {
        "cn": "产权",
        "py": "chǎnquán",
        "en": "property",
        "tip": "产权 rights."
      },
      {
        "cn": "专利",
        "py": "zhuānlì",
        "en": "patent",
        "tip": "专利 invention."
      },
      {
        "cn": "商标",
        "py": "shāngbiāo",
        "en": "trademark",
        "tip": "商标 brand mark."
      },
      {
        "cn": "侵权",
        "py": "qīnquán",
        "en": "infringement",
        "tip": "侵权 violate."
      },
      {
        "cn": "保护",
        "py": "bǎohù",
        "en": "protection",
        "tip": "保护 safeguard."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "保护知识产权为什么重要？",
        "en": "Why protect IP?"
      },
      {
        "who": "you",
        "cn": "鼓励创新保护创造者。",
        "en": "Encourages innovation."
      },
      {
        "who": "bot",
        "cn": "专利保护发明。",
        "en": "Patents protect inventions."
      },
      {
        "who": "you",
        "cn": "商标保护品牌。",
        "en": "Trademarks protect brands."
      },
      {
        "who": "bot",
        "cn": "侵权要负法律责任。",
        "en": "Infringement has legal liability."
      },
      {
        "who": "you",
        "cn": "维权成本有时很高。",
        "en": "Enforcement can be costly."
      },
      {
        "who": "bot",
        "cn": "要尊重知识产权。",
        "en": "Respect IP rights."
      }
    ]
  },
  {
    "title": "社会心态",
    "level": "HSK 5",
    "icon": "fa-heart",
    "words": [
      {
        "cn": "心态",
        "py": "xīntài",
        "en": "mindset",
        "tip": "心态 attitude."
      },
      {
        "cn": "焦虑",
        "py": "jiāolǜ",
        "en": "anxiety",
        "tip": "焦虑 worry."
      },
      {
        "cn": "幸福",
        "py": "xìngfú",
        "en": "happiness",
        "tip": "幸福 well-being."
      },
      {
        "cn": "压力",
        "py": "yālì",
        "en": "stress",
        "tip": "压力 pressure."
      },
      {
        "cn": "期望",
        "py": "qīwàng",
        "en": "expectation",
        "tip": "期望 hope."
      },
      {
        "cn": "满意",
        "py": "mǎnyì",
        "en": "satisfaction",
        "tip": "满意 content."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "当代社会普遍焦虑。",
        "en": "Contemporary society anxious."
      },
      {
        "who": "you",
        "cn": "生活节奏快压力大。",
        "en": "Fast pace high stress."
      },
      {
        "who": "bot",
        "cn": "幸福感在下降吗？",
        "en": "Is happiness declining?"
      },
      {
        "who": "you",
        "cn": "物质丰富但精神需关照。",
        "en": "Material rich but soul needs."
      },
      {
        "who": "bot",
        "cn": "期望管理很重要。",
        "en": "Expectation management key."
      },
      {
        "who": "you",
        "cn": "知足常乐心态好。",
        "en": "Contentment brings joy."
      },
      {
        "who": "bot",
        "cn": "社会心态反映时代。",
        "en": "Mindset reflects times."
      }
    ]
  },
  {
    "title": "组织行为",
    "level": "HSK 5",
    "icon": "fa-diagram-project",
    "words": [
      {
        "cn": "组织",
        "py": "zǔzhī",
        "en": "organization",
        "tip": "组织 group."
      },
      {
        "cn": "行为",
        "py": "xíngwéi",
        "en": "behavior",
        "tip": "行为 action."
      },
      {
        "cn": "文化",
        "py": "wénhuà",
        "en": "culture",
        "tip": "文化 norms."
      },
      {
        "cn": "变革",
        "py": "biàngé",
        "en": "change",
        "tip": "变革 reform."
      },
      {
        "cn": "效率",
        "py": "xiàolǜ",
        "en": "efficiency",
        "tip": "效率 output."
      },
      {
        "cn": "动力",
        "py": "dònglì",
        "en": "motivation",
        "tip": "动力 drive."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "组织如何提高效率？",
        "en": "How improve efficiency?"
      },
      {
        "who": "you",
        "cn": "文化建设激发动力。",
        "en": "Culture drives motivation."
      },
      {
        "who": "bot",
        "cn": "组织变革难推进。",
        "en": "Org change hard."
      },
      {
        "who": "you",
        "cn": "要处理好各方利益。",
        "en": "Handle interests carefully."
      },
      {
        "who": "bot",
        "cn": "好的制度很重要。",
        "en": "Good systems important."
      },
      {
        "who": "you",
        "cn": "制度规范行为。",
        "en": "Systems guide behavior."
      },
      {
        "who": "bot",
        "cn": "组织管理是艺术。",
        "en": "Management is art."
      }
    ]
  },
  {
    "title": "媒体素养",
    "level": "HSK 5",
    "icon": "fa-newspaper",
    "words": [
      {
        "cn": "媒体",
        "py": "méitǐ",
        "en": "media",
        "tip": "媒体 press."
      },
      {
        "cn": "素养",
        "py": "sùyǎng",
        "en": "literacy",
        "tip": "素养 competence."
      },
      {
        "cn": "判断",
        "py": "pànduàn",
        "en": "judgment",
        "tip": "判断 discern."
      },
      {
        "cn": "信息",
        "py": "xìnxī",
        "en": "information",
        "tip": "信息 content."
      },
      {
        "cn": "真假",
        "py": "zhēnjiǎ",
        "en": "truth vs false",
        "tip": "真假 authenticity."
      },
      {
        "cn": "理性",
        "py": "lǐxìng",
        "en": "rational",
        "tip": "理性 reason."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "媒体素养是什么？",
        "en": "What is media literacy?"
      },
      {
        "who": "you",
        "cn": "辨别信息真假的能力。",
        "en": "Ability to discern info."
      },
      {
        "who": "bot",
        "cn": "假新闻怎么识别？",
        "en": "How spot fake news?"
      },
      {
        "who": "you",
        "cn": "查来源比对多方信息。",
        "en": "Check sources, compare."
      },
      {
        "who": "bot",
        "cn": "理性判断很重要。",
        "en": "Rational judgment important."
      },
      {
        "who": "you",
        "cn": "不轻信不传谣。",
        "en": "Don't believe or spread rumors."
      },
      {
        "who": "bot",
        "cn": "媒体素养是必备能力。",
        "en": "Media literacy essential."
      }
    ]
  },
  {
    "title": "创业精神",
    "level": "HSK 5",
    "icon": "fa-rocket",
    "words": [
      {
        "cn": "创业",
        "py": "chuàngyè",
        "en": "startup",
        "tip": "创业 new venture."
      },
      {
        "cn": "创新",
        "py": "chuàngxīn",
        "en": "innovation",
        "tip": "创新 innovate."
      },
      {
        "cn": "商机",
        "py": "shāngjī",
        "en": "opportunity",
        "tip": "商机 chance."
      },
      {
        "cn": "团队",
        "py": "tuánduì",
        "en": "team",
        "tip": "团队 crew."
      },
      {
        "cn": "融资",
        "py": "róngzī",
        "en": "funding",
        "tip": "融资 raise."
      },
      {
        "cn": "风险",
        "py": "fēngxiǎn",
        "en": "risk",
        "tip": "风险 uncertainty."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "创业需要什么？",
        "en": "What needed for startup?"
      },
      {
        "who": "you",
        "cn": "发现商机组建团队。",
        "en": "Find opportunity, build team."
      },
      {
        "who": "bot",
        "cn": "融资是难点。",
        "en": "Funding is tough."
      },
      {
        "who": "you",
        "cn": "投资人也看重团队。",
        "en": "Investors value team."
      },
      {
        "who": "bot",
        "cn": "创业风险很大。",
        "en": "Startup risk big."
      },
      {
        "who": "you",
        "cn": "失败了也要学习。",
        "en": "Learn from failure."
      },
      {
        "who": "bot",
        "cn": "创新是创业的灵魂。",
        "en": "Innovation is soul."
      }
    ]
  },
  {
    "title": "危机管理",
    "level": "HSK 5",
    "icon": "fa-triangle-exclamation",
    "words": [
      {
        "cn": "危机",
        "py": "wēijī",
        "en": "crisis",
        "tip": "危机 emergency."
      },
      {
        "cn": "应对",
        "py": "yìngduì",
        "en": "respond",
        "tip": "应对 response."
      },
      {
        "cn": "预案",
        "py": "yù'àn",
        "en": "plan",
        "tip": "预案 preparation."
      },
      {
        "cn": "沟通",
        "py": "gōutōng",
        "en": "communication",
        "tip": "沟通 info."
      },
      {
        "cn": "恢复",
        "py": "huīfù",
        "en": "recovery",
        "tip": "恢复 rebound."
      },
      {
        "cn": "教训",
        "py": "jiàoxùn",
        "en": "lesson",
        "tip": "教训 learning."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "危机发生怎么应对？",
        "en": "How respond to crisis?"
      },
      {
        "who": "you",
        "cn": "第一时间启动预案。",
        "en": "Activate plan immediately."
      },
      {
        "who": "bot",
        "cn": "信息沟通要透明。",
        "en": "Communication transparent."
      },
      {
        "who": "you",
        "cn": "避免谣言平息恐慌。",
        "en": "Avoid rumors, calm panic."
      },
      {
        "who": "bot",
        "cn": "危机后要总结教训。",
        "en": "Learn from crisis."
      },
      {
        "who": "you",
        "cn": "改进管理防止再发。",
        "en": "Improve to prevent."
      },
      {
        "who": "bot",
        "cn": "危机也是转机。",
        "en": "Crisis is also opportunity."
      }
    ]
  },
  {
    "title": "创新思维",
    "level": "HSK 5",
    "icon": "fa-lightbulb",
    "words": [
      {
        "cn": "创新",
        "py": "chuàngxīn",
        "en": "innovation",
        "tip": "创新 novel."
      },
      {
        "cn": "思维",
        "py": "sīwéi",
        "en": "thinking",
        "tip": "思维 thought."
      },
      {
        "cn": "突破",
        "py": "tūpò",
        "en": "breakthrough",
        "tip": "突破 exceed."
      },
      {
        "cn": "发散",
        "py": "fāsàn",
        "en": "divergent",
        "tip": "发散 expand."
      },
      {
        "cn": "联想",
        "py": "liánxiǎng",
        "en": "associate",
        "tip": "联想 connect."
      },
      {
        "cn": "实践",
        "py": "shíjiàn",
        "en": "practice",
        "tip": "实践 apply."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "创新思维怎么培养？",
        "en": "How develop innovative thinking?"
      },
      {
        "who": "you",
        "cn": "发散思维多联想。",
        "en": "Divergent thinking, associate."
      },
      {
        "who": "bot",
        "cn": "突破常规很重要。",
        "en": "Breakthrough convention important."
      },
      {
        "who": "you",
        "cn": "不害怕犯错尝试。",
        "en": "Not afraid to try."
      },
      {
        "who": "bot",
        "cn": "创新要付诸实践。",
        "en": "Innovation needs practice."
      },
      {
        "who": "you",
        "cn": "理论结合实践。",
        "en": "Theory with practice."
      },
      {
        "who": "bot",
        "cn": "创新引领发展。",
        "en": "Innovation leads growth."
      }
    ]
  },
  {
    "title": "逻辑与论证",
    "level": "HSK 6",
    "icon": "fa-square-root-variable",
    "words": [
      {
        "cn": "逻辑",
        "py": "luóji",
        "en": "logic",
        "tip": "逻辑 reasoning."
      },
      {
        "cn": "论证",
        "py": "lùnzhèng",
        "en": "argumentation",
        "tip": "论证 prove."
      },
      {
        "cn": "推理",
        "py": "tuīlǐ",
        "en": "inference",
        "tip": "推理 deduce."
      },
      {
        "cn": "前提",
        "py": "qiántí",
        "en": "premise",
        "tip": "前提 foundation."
      },
      {
        "cn": "结论",
        "py": "jiélùn",
        "en": "conclusion",
        "tip": "结论 outcome."
      },
      {
        "cn": "有效",
        "py": "yǒuxiào",
        "en": "valid",
        "tip": "有效 sound."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "逻辑论证的核心？",
        "en": "Core of logical argument?"
      },
      {
        "who": "you",
        "cn": "前提真且推理有效。",
        "en": "True premise, valid reasoning."
      },
      {
        "who": "bot",
        "cn": "如何识别逻辑谬误？",
        "en": "How spot logical fallacies?"
      },
      {
        "who": "you",
        "cn": "偷换概念人身攻击等。",
        "en": "Straw man, ad hominem."
      },
      {
        "who": "bot",
        "cn": "论证要有结构。",
        "en": "Argument needs structure."
      },
      {
        "who": "you",
        "cn": "清晰展示推理链条。",
        "en": "Clear reasoning chain."
      },
      {
        "who": "bot",
        "cn": "逻辑是理性基础。",
        "en": "Logic is foundation."
      }
    ]
  },
  {
    "title": "科学方法论",
    "level": "HSK 6",
    "icon": "fa-flask",
    "words": [
      {
        "cn": "科学",
        "py": "kēxué",
        "en": "science",
        "tip": "科学 systematic."
      },
      {
        "cn": "方法",
        "py": "fāngfǎ",
        "en": "method",
        "tip": "方法 approach."
      },
      {
        "cn": "实证",
        "py": "shízhèng",
        "en": "empirical",
        "tip": "实证 evidence."
      },
      {
        "cn": "观察",
        "py": "guānchá",
        "en": "observation",
        "tip": "观察 observe."
      },
      {
        "cn": "实验",
        "py": "shíyàn",
        "en": "experiment",
        "tip": "实验 test."
      },
      {
        "cn": "理论",
        "py": "lǐlùn",
        "en": "theory",
        "tip": "理论 explanation."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "科学方法是什么？",
        "en": "What is scientific method?"
      },
      {
        "who": "you",
        "cn": "观察提出假设验证。",
        "en": "Observe, hypothesize, test."
      },
      {
        "who": "bot",
        "cn": "实证很重要。",
        "en": "Empirical evidence vital."
      },
      {
        "who": "you",
        "cn": "实验验证理论的预测。",
        "en": "Experiments test predictions."
      },
      {
        "who": "bot",
        "cn": "理论可被证伪。",
        "en": "Theories can be falsified."
      },
      {
        "who": "you",
        "cn": "这是科学的特质。",
        "en": "That's science feature."
      },
      {
        "who": "bot",
        "cn": "科学方法推动进步。",
        "en": "Method drives progress."
      }
    ]
  },
  {
    "title": "修辞技巧",
    "level": "HSK 6",
    "icon": "fa-comment-dots",
    "words": [
      {
        "cn": "修辞",
        "py": "xiūcí",
        "en": "rhetoric",
        "tip": "修辞 figure speech."
      },
      {
        "cn": "比喻",
        "py": "bǐyù",
        "en": "metaphor",
        "tip": "比喻 simile."
      },
      {
        "cn": "排比",
        "py": "páibǐ",
        "en": "parallelism",
        "tip": "排比 parallel."
      },
      {
        "cn": "反问",
        "py": "fǎnwèn",
        "en": "rhetorical question",
        "tip": "反问 question."
      },
      {
        "cn": "夸张",
        "py": "kuāzhāng",
        "en": "exaggeration",
        "tip": "夸张 overstate."
      },
      {
        "cn": "对比",
        "py": "duìbǐ",
        "en": "contrast",
        "tip": "对比 comparison."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "修辞有什么作用？",
        "en": "What does rhetoric do?"
      },
      {
        "who": "you",
        "cn": "增强语言表达效果。",
        "en": "Enhances expression effect."
      },
      {
        "who": "bot",
        "cn": "比喻让人理解。",
        "en": "Metaphor aids understanding."
      },
      {
        "who": "you",
        "cn": "排比增强气势。",
        "en": "Parallelism builds momentum."
      },
      {
        "who": "bot",
        "cn": "反问引人思考。",
        "en": "Rhetorical questions provoke thought."
      },
      {
        "who": "you",
        "cn": "夸张突出特征。",
        "en": "Exaggeration highlights."
      },
      {
        "who": "bot",
        "cn": "修辞让语言更生动。",
        "en": "Rhetoric enlivens language."
      }
    ]
  },
  {
    "title": "学术诚信",
    "level": "HSK 6",
    "icon": "fa-certificate",
    "words": [
      {
        "cn": "诚信",
        "py": "chéngxìn",
        "en": "integrity",
        "tip": "诚信 honest."
      },
      {
        "cn": "抄袭",
        "py": "chāoxí",
        "en": "plagiarism",
        "tip": "抄袭 copy."
      },
      {
        "cn": "引用",
        "py": "yǐnyòng",
        "en": "cite",
        "tip": "引用 credit."
      },
      {
        "cn": "规范",
        "py": "guīfàn",
        "en": "norm",
        "tip": "规范 rule."
      },
      {
        "cn": "处罚",
        "py": "chǔfá",
        "en": "penalty",
        "tip": "处罚 sanction."
      },
      {
        "cn": "声誉",
        "py": "shēngyù",
        "en": "reputation",
        "tip": "声誉 repute."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "学术诚信为什么重要？",
        "en": "Why academic integrity important?"
      },
      {
        "who": "you",
        "cn": "研究的基础是诚信。",
        "en": "Foundation of research."
      },
      {
        "who": "bot",
        "cn": "抄袭后果严重。",
        "en": "Plagiarism serious."
      },
      {
        "who": "you",
        "cn": "轻则批评重则开除。",
        "en": "Light criticism, heavy expulsion."
      },
      {
        "who": "bot",
        "cn": "引用规范要遵守。",
        "en": "Follow citation rules."
      },
      {
        "who": "you",
        "cn": "尊重他人研究成果。",
        "en": "Respect others work."
      },
      {
        "who": "bot",
        "cn": "声誉是学者的生命。",
        "en": "Reputation is scholar life."
      }
    ]
  },
  {
    "title": "文献综述",
    "level": "HSK 6",
    "icon": "fa-list",
    "words": [
      {
        "cn": "文献",
        "py": "wénxiàn",
        "en": "literature",
        "tip": "文献 sources."
      },
      {
        "cn": "综述",
        "py": "zōngshù",
        "en": "review",
        "tip": "综述 summary."
      },
      {
        "cn": "领域",
        "py": "lǐngyù",
        "en": "field",
        "tip": "领域 domain."
      },
      {
        "cn": "前沿",
        "py": "qiányán",
        "en": "frontier",
        "tip": "前沿 cutting-edge."
      },
      {
        "cn": "空白",
        "py": "kòngbái",
        "en": "gap",
        "tip": "空白 missing."
      },
      {
        "cn": "趋势",
        "py": "qūshì",
        "en": "trend",
        "tip": "趋势 direction."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "文献综述做什么？",
        "en": "What literature review does?"
      },
      {
        "who": "you",
        "cn": "梳理研究领域现状。",
        "en": "Map current research."
      },
      {
        "who": "bot",
        "cn": "找出研究空白。",
        "en": "Identify research gaps."
      },
      {
        "who": "you",
        "cn": "这是创新切入点。",
        "en": "Innovation entry point."
      },
      {
        "who": "bot",
        "cn": "前沿趋势要把握。",
        "en": "Grasp frontier trends."
      },
      {
        "who": "you",
        "cn": "了解方向避免重复。",
        "en": "Know direction, avoid duplication."
      },
      {
        "who": "bot",
        "cn": "好的综述奠定基础。",
        "en": "Good review lays foundation."
      }
    ]
  },
  {
    "title": "社会网络",
    "level": "HSK 6",
    "icon": "fa-share-nodes",
    "words": [
      {
        "cn": "网络",
        "py": "wǎngluò",
        "en": "network",
        "tip": "网络 connections."
      },
      {
        "cn": "社交",
        "py": "shèjiāo",
        "en": "social",
        "tip": "社交 ties."
      },
      {
        "cn": "节点",
        "py": "jiédiǎn",
        "en": "node",
        "tip": "节点 person."
      },
      {
        "cn": "关系",
        "py": "guānxi",
        "en": "relation",
        "tip": "关系 tie."
      },
      {
        "cn": "传播",
        "py": "chuánbō",
        "en": "spread",
        "tip": "传播 diffusion."
      },
      {
        "cn": "影响",
        "py": "yǐngxiǎng",
        "en": "influence",
        "tip": "影响 effect."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "社会网络如何影响信息传播？",
        "en": "How social network spreads info?"
      },
      {
        "who": "you",
        "cn": "节点之间的强关系弱关系。",
        "en": "Strong and weak ties."
      },
      {
        "who": "bot",
        "cn": "意见领袖影响大。",
        "en": "Influencers big impact."
      },
      {
        "who": "you",
        "cn": "信息通过社交圈扩散。",
        "en": "Info spreads through circles."
      },
      {
        "who": "bot",
        "cn": "网络结构影响传播速度。",
        "en": "Structure affects speed."
      },
      {
        "who": "you",
        "cn": "密集网络传播快。",
        "en": "Dense networks spread fast."
      },
      {
        "who": "bot",
        "cn": "网络分析很有用。",
        "en": "Network analysis useful."
      }
    ]
  },
  {
    "title": "文化批评",
    "level": "HSK 6",
    "icon": "fa-masks-theater",
    "words": [
      {
        "cn": "批评",
        "py": "pīpíng",
        "en": "critique",
        "tip": "批评 analysis."
      },
      {
        "cn": "大众",
        "py": "dàzhòng",
        "en": "mass",
        "tip": "大众 popular."
      },
      {
        "cn": "消费",
        "py": "xiāofèi",
        "en": "consumption",
        "tip": "消费 consume."
      },
      {
        "cn": "权力",
        "py": "quánlì",
        "en": "power",
        "tip": "权力 authority."
      },
      {
        "cn": "话语",
        "py": "huàyǔ",
        "en": "discourse",
        "tip": "话语 speech."
      },
      {
        "cn": "解构",
        "py": "jiěgòu",
        "en": "deconstruct",
        "tip": "解构 dismantle."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "文化批评做什么？",
        "en": "Cultural critique does?"
      },
      {
        "who": "you",
        "cn": "分析大众文化现象。",
        "en": "Analyze pop culture."
      },
      {
        "who": "bot",
        "cn": "消费主义需要批判。",
        "en": "Consumerism needs critique."
      },
      {
        "who": "you",
        "cn": "揭示背后的权力关系。",
        "en": "Reveal power behind."
      },
      {
        "who": "bot",
        "cn": "话语权很重要。",
        "en": "Discourse power important."
      },
      {
        "who": "you",
        "cn": "谁在说为谁说。",
        "en": "Who speaks for whom."
      },
      {
        "who": "bot",
        "cn": "反思文化价值。",
        "en": "Reflect on cultural values."
      }
    ]
  },
  {
    "title": "语言哲学",
    "level": "HSK 6",
    "icon": "fa-language",
    "words": [
      {
        "cn": "语言",
        "py": "yǔyán",
        "en": "language",
        "tip": "语言 system."
      },
      {
        "cn": "意义",
        "py": "yìyì",
        "en": "meaning",
        "tip": "意义 sense."
      },
      {
        "cn": "指称",
        "py": "zhǐchēng",
        "en": "reference",
        "tip": "指称 refer."
      },
      {
        "cn": "语用",
        "py": "yǔyòng",
        "en": "pragmatics",
        "tip": "语用 use."
      },
      {
        "cn": "语境",
        "py": "yǔjìng",
        "en": "context",
        "tip": "语境 situation."
      },
      {
        "cn": "诠释",
        "py": "quánshì",
        "en": "interpretation",
        "tip": "诠释 explain."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "语言和意义的关系？",
        "en": "Language meaning relation?"
      },
      {
        "who": "you",
        "cn": "语言符号指称对象。",
        "en": "Symbols refer to objects."
      },
      {
        "who": "bot",
        "cn": "语用学关注使用。",
        "en": "Pragmatics focuses on use."
      },
      {
        "who": "you",
        "cn": "语境决定意义。",
        "en": "Context determines meaning."
      },
      {
        "who": "bot",
        "cn": "诠释很重要。",
        "en": "Interpretation important."
      },
      {
        "who": "you",
        "cn": "同一句话不同理解。",
        "en": "Same words different meanings."
      },
      {
        "who": "bot",
        "cn": "语言哲学很深刻。",
        "en": "Language philosophy profound."
      }
    ]
  },
  {
    "title": "跨文化沟通",
    "level": "HSK 6",
    "icon": "fa-handshake",
    "words": [
      {
        "cn": "文化",
        "py": "wénhuà",
        "en": "culture",
        "tip": "文化 customs."
      },
      {
        "cn": "差异",
        "py": "chāyì",
        "en": "difference",
        "tip": "差异 gap."
      },
      {
        "cn": "沟通",
        "py": "gōutōng",
        "en": "communicate",
        "tip": "沟通 exchange."
      },
      {
        "cn": "理解",
        "py": "lǐjiě",
        "en": "understand",
        "tip": "理解 grasp."
      },
      {
        "cn": "包容",
        "py": "bāoróng",
        "en": "tolerance",
        "tip": "包容 accept."
      },
      {
        "cn": "适应",
        "py": "shìyìng",
        "en": "adapt",
        "tip": "适应 adjust."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "跨文化沟通挑战？",
        "en": "Cross-cultural challenges?"
      },
      {
        "who": "you",
        "cn": "价值观和行为差异。",
        "en": "Value and behavior differences."
      },
      {
        "who": "bot",
        "cn": "如何消除误解？",
        "en": "How eliminate misunderstandings?"
      },
      {
        "who": "you",
        "cn": "开放心态理解对方。",
        "en": "Open mind understand others."
      },
      {
        "who": "bot",
        "cn": "包容不同文化。",
        "en": "Tolerate different cultures."
      },
      {
        "who": "you",
        "cn": "适应环境灵活沟通。",
        "en": "Adapt and flexible communication."
      },
      {
        "who": "bot",
        "cn": "文化差异是财富不是障碍。",
        "en": "Differences are wealth, not barrier."
      }
    ]
  },
  {
    "title": "现象学",
    "level": "HSK 6",
    "icon": "fa-eye",
    "words": [
      {
        "cn": "现象",
        "py": "xiànxiàng",
        "en": "phenomenon",
        "tip": "现象 appearance."
      },
      {
        "cn": "本质",
        "py": "běnzhì",
        "en": "essence",
        "tip": "本质 core."
      },
      {
        "cn": "直观",
        "py": "zhíguān",
        "en": "intuition",
        "tip": "直观 immediate."
      },
      {
        "cn": "意向",
        "py": "yìxiàng",
        "en": "intention",
        "tip": "意向 consciousness."
      },
      {
        "cn": "还原",
        "py": "huányuán",
        "en": "reduction",
        "tip": "还原 suspend."
      },
      {
        "cn": "体验",
        "py": "tǐyàn",
        "en": "experience",
        "tip": "体验 lived."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "现象学关注什么？",
        "en": "What phenomenology focus?"
      },
      {
        "who": "you",
        "cn": "回到事物本身。",
        "en": "Back to things themselves."
      },
      {
        "who": "bot",
        "cn": "通过直观把握本质。",
        "en": "Intuition grasps essence."
      },
      {
        "who": "you",
        "cn": "悬置先入为主的判断。",
        "en": "Suspend preconceptions."
      },
      {
        "who": "bot",
        "cn": "意向性是其核心。",
        "en": "Intentionality is core."
      },
      {
        "who": "you",
        "cn": "意识总是关于某物。",
        "en": "Consciousness always about something."
      },
      {
        "who": "bot",
        "cn": "现象学方法独特。",
        "en": "Phenomenological method unique."
      }
    ]
  },
  {
    "title": "空间理论",
    "level": "HSK 6",
    "icon": "fa-location-dot",
    "words": [
      {
        "cn": "空间",
        "py": "kōngjiān",
        "en": "space",
        "tip": "空间 place."
      },
      {
        "cn": "地方",
        "py": "dìfang",
        "en": "place",
        "tip": "地方 location."
      },
      {
        "cn": "区域",
        "py": "qūyù",
        "en": "region",
        "tip": "区域 zone."
      },
      {
        "cn": "边界",
        "py": "biānjiè",
        "en": "boundary",
        "tip": "边界 line."
      },
      {
        "cn": "流动",
        "py": "liúdòng",
        "en": "flow",
        "tip": "流动 movement."
      },
      {
        "cn": "场所",
        "py": "chǎngsuǒ",
        "en": "site",
        "tip": "场所 spot."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "空间不仅是物理的。",
        "en": "Space not only physical."
      },
      {
        "who": "you",
        "cn": "社会空间生产理论。",
        "en": "Social production of space."
      },
      {
        "who": "bot",
        "cn": "边界划分权力。",
        "en": "Boundaries define power."
      },
      {
        "who": "you",
        "cn": "流动重构空间。",
        "en": "Flow restructures space."
      },
      {
        "who": "bot",
        "cn": "场所感很重要。",
        "en": "Sense of place important."
      },
      {
        "who": "you",
        "cn": "人赋予空间意义。",
        "en": "People give space meaning."
      },
      {
        "who": "bot",
        "cn": "空间理论跨学科。",
        "en": "Space theory interdisciplinary."
      }
    ]
  },
  {
    "title": "认知科学",
    "level": "HSK 6",
    "icon": "fa-brain",
    "words": [
      {
        "cn": "认知",
        "py": "rènzhī",
        "en": "cognition",
        "tip": "认知 knowing."
      },
      {
        "cn": "感知",
        "py": "gǎnzhī",
        "en": "perception",
        "tip": "感知 sense."
      },
      {
        "cn": "记忆",
        "py": "jìyì",
        "en": "memory",
        "tip": "记忆 recall."
      },
      {
        "cn": "语言",
        "py": "yǔyán",
        "en": "language",
        "tip": "语言 speech."
      },
      {
        "cn": "思维",
        "py": "sīwéi",
        "en": "thinking",
        "tip": "思维 thought."
      },
      {
        "cn": "意识",
        "py": "yìshí",
        "en": "consciousness",
        "tip": "意识 awareness."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "认知科学是什么？",
        "en": "What is cognitive science?"
      },
      {
        "who": "you",
        "cn": "研究心智和智能。",
        "en": "Study of mind and intelligence."
      },
      {
        "who": "bot",
        "cn": "跨学科领域。",
        "en": "Interdisciplinary field."
      },
      {
        "who": "you",
        "cn": "心理学神经科学语言学。",
        "en": "Psychology, neuroscience, linguistics."
      },
      {
        "who": "bot",
        "cn": "意识是核心难题。",
        "en": "Consciousness is core puzzle."
      },
      {
        "who": "you",
        "cn": "科学还在探索。",
        "en": "Science still exploring."
      },
      {
        "who": "bot",
        "cn": "认知科学前沿。",
        "en": "Cognitive science frontier."
      }
    ]
  },
  {
    "title": "前沿科技",
    "level": "HSK 4",
    "icon": "fa-microchip",
    "words": [
      {
        "cn": "科技",
        "py": "kējì",
        "en": "technology",
        "tip": "科技 tech."
      },
      {
        "cn": "量子",
        "py": "liàngzǐ",
        "en": "quantum",
        "tip": "量子 quantum."
      },
      {
        "cn": "纳米",
        "py": "nàmǐ",
        "en": "nano",
        "tip": "纳米 nano."
      },
      {
        "cn": "生物",
        "py": "shēngwù",
        "en": "bio",
        "tip": "生物 bio."
      },
      {
        "cn": "信息",
        "py": "xìnxī",
        "en": "information",
        "tip": "信息 info."
      },
      {
        "cn": "能源",
        "py": "néngyuán",
        "en": "energy",
        "tip": "能源 power."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "前沿科技发展趋势？",
        "en": "Tech development trends?"
      },
      {
        "who": "you",
        "cn": "量子计算生物技术。",
        "en": "Quantum computing, biotech."
      },
      {
        "who": "bot",
        "cn": "纳米材料应用广。",
        "en": "Nanomaterials wide use."
      },
      {
        "who": "you",
        "cn": "信息技术融合各领域。",
        "en": "IT integrates everywhere."
      },
      {
        "who": "bot",
        "cn": "新能源是未来。",
        "en": "New energy is future."
      },
      {
        "who": "you",
        "cn": "清洁能源转型加速。",
        "en": "Clean energy transition."
      },
      {
        "who": "bot",
        "cn": "科技改变世界。",
        "en": "Technology changes world."
      }
    ]
  },
  {
    "title": "大数据时代",
    "level": "HSK 5",
    "icon": "fa-database",
    "words": [
      {
        "cn": "数据",
        "py": "shùjù",
        "en": "data",
        "tip": "数据 information."
      },
      {
        "cn": "分析",
        "py": "fēnxī",
        "en": "analysis",
        "tip": "分析 examine."
      },
      {
        "cn": "隐私",
        "py": "yǐnsī",
        "en": "privacy",
        "tip": "隐私 privacy."
      },
      {
        "cn": "挖掘",
        "py": "wājué",
        "en": "mining",
        "tip": "挖掘 discover."
      },
      {
        "cn": "算法",
        "py": "suànfǎ",
        "en": "algorithm",
        "tip": "算法 procedure."
      },
      {
        "cn": "智能",
        "py": "zhìnéng",
        "en": "intelligence",
        "tip": "智能 smart."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "大数据影响我们生活。",
        "en": "Big data affects life."
      },
      {
        "who": "you",
        "cn": "算法推荐个性化服务。",
        "en": "Algorithm recommends personal service."
      },
      {
        "who": "bot",
        "cn": "数据隐私很担忧。",
        "en": "Data privacy concern."
      },
      {
        "who": "you",
        "cn": "需要法律法规保护。",
        "en": "Need law protection."
      },
      {
        "who": "bot",
        "cn": "数据挖掘有价值。",
        "en": "Data mining valuable."
      },
      {
        "who": "you",
        "cn": "发现模式和趋势。",
        "en": "Find patterns trends."
      },
      {
        "who": "bot",
        "cn": "大数据时代机遇挑战并存。",
        "en": "Big data era opportunities and challenges."
      }
    ]
  },
  {
    "title": "消费心理",
    "level": "HSK 5",
    "icon": "fa-cart-plus",
    "words": [
      {
        "cn": "消费",
        "py": "xiāofèi",
        "en": "consume",
        "tip": "消费 spend."
      },
      {
        "cn": "心理",
        "py": "xīnlǐ",
        "en": "psychology",
        "tip": "心理 mind."
      },
      {
        "cn": "需求",
        "py": "xūqiú",
        "en": "need",
        "tip": "需求 demand."
      },
      {
        "cn": "动机",
        "py": "dòngjī",
        "en": "motive",
        "tip": "动机 drive."
      },
      {
        "cn": "决策",
        "py": "juécè",
        "en": "decision",
        "tip": "决策 choose."
      },
      {
        "cn": "品牌",
        "py": "pǐnpái",
        "en": "brand",
        "tip": "品牌 image."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "消费者购买决策过程？",
        "en": "Consumer purchase process?"
      },
      {
        "who": "you",
        "cn": "需求认知信息搜索。",
        "en": "Need recognition, search."
      },
      {
        "who": "bot",
        "cn": "心理因素影响大。",
        "en": "Psychological factors big."
      },
      {
        "who": "you",
        "cn": "动机态度和感知。",
        "en": "Motivation attitude perception."
      },
      {
        "who": "bot",
        "cn": "品牌忠诚度怎么建立？",
        "en": "How build brand loyalty?"
      },
      {
        "who": "you",
        "cn": "提供价值建立信任。",
        "en": "Provide value build trust."
      },
      {
        "who": "bot",
        "cn": "消费心理很复杂。",
        "en": "Consumer psychology complex."
      }
    ]
  },
  {
    "title": "人工智能伦理",
    "level": "HSK 6",
    "icon": "fa-robot",
    "words": [
      {
        "cn": "伦理",
        "py": "lúnlǐ",
        "en": "ethics",
        "tip": "伦理 moral."
      },
      {
        "cn": "算法",
        "py": "suànfǎ",
        "en": "algorithm",
        "tip": "算法 algo."
      },
      {
        "cn": "偏见",
        "py": "piānjiàn",
        "en": "bias",
        "tip": "偏见 bias."
      },
      {
        "cn": "责任",
        "py": "zérèn",
        "en": "responsibility",
        "tip": "责任 accountability."
      },
      {
        "cn": "透明",
        "py": "tòumíng",
        "en": "transparency",
        "tip": "透明 open."
      },
      {
        "cn": "安全",
        "py": "ānquán",
        "en": "safety",
        "tip": "安全 secuity."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "AI带来哪些伦理问题？",
        "en": "What ethical issues AI brings?"
      },
      {
        "who": "you",
        "cn": "算法偏见歧视。",
        "en": "Algorithm bias and discrimination."
      },
      {
        "who": "bot",
        "cn": "谁为AI错误负责？",
        "en": "Who responsible for AI errors?"
      },
      {
        "who": "you",
        "cn": "责任归属复杂。",
        "en": "Accountability complex."
      },
      {
        "who": "bot",
        "cn": "需要透明可解释。",
        "en": "Need transparency explainability."
      },
      {
        "who": "you",
        "cn": "确保AI安全可控。",
        "en": "Ensure AI safe controlled."
      },
      {
        "who": "bot",
        "cn": "AI伦理亟需规范。",
        "en": "AI ethics needs regulation."
      }
    ]
  },
  {
    "title": "生态批评",
    "level": "HSK 4",
    "icon": "fa-leaf",
    "words": [
      {
        "cn": "生态",
        "py": "shēngtài",
        "en": "ecology",
        "tip": "生态 enviro."
      },
      {
        "cn": "批评",
        "py": "pīpíng",
        "en": "critique",
        "tip": "批评 review."
      },
      {
        "cn": "文学",
        "py": "wénxué",
        "en": "literature",
        "tip": "文学 writing."
      },
      {
        "cn": "自然",
        "py": "zìrán",
        "en": "nature",
        "tip": "自然 nature."
      },
      {
        "cn": "环境",
        "py": "huánjìng",
        "en": "environment",
        "tip": "环境 enviro."
      },
      {
        "cn": "责任",
        "py": "zérèn",
        "en": "responsibility",
        "tip": "责任 duty."
      }
    ],
    "dialogue": [
      {
        "who": "bot",
        "cn": "生态批评研究什么？",
        "en": "What ecocriticism study?"
      },
      {
        "who": "you",
        "cn": "文学与环境的关系。",
        "en": "Literature-environment relation."
      },
      {
        "who": "bot",
        "cn": "关注自然描写。",
        "en": "Focus on nature depiction."
      },
      {
        "who": "you",
        "cn": "反思人类中心主义。",
        "en": "Reflect anthropocentrism."
      },
      {
        "who": "bot",
        "cn": "文学有环保责任。",
        "en": "Literature has eco-duty."
      },
      {
        "who": "you",
        "cn": "唤起人们环保意识。",
        "en": "Raise eco-awareness."
      },
      {
        "who": "bot",
        "cn": "生态批评越来越重要。",
        "en": "Ecocriticism increasingly important."
      }
    ]
  }
,
  {title:'正式报告写作', level:'HSK 7', icon:'fa-scroll',
  words:[
    {cn:'撰写',py:'zhuànxiě',en:'to write/compose',tip:'Used for formal writing; 撰 implies careful composition.'},
    {cn:'综述',py:'zōngshù',en:'comprehensive summary',tip:'Often used in academic or report contexts.'},
    {cn:'论据',py:'lùnjù',en:'argument/evidence',tip:'Supporting points in an argumentative text.'},
    {cn:'严谨',py:'yánjǐn',en:'rigorous/precise',tip:'Describes thoroughness and attention to detail.'},
    {cn:'段落',py:'duànluò',en:'paragraph',tip:'Basic structural unit of formal writing.'},
    {cn:'附录',py:'fùlù',en:'appendix',tip:'Supplementary material at the end of a report.'}
  ],
  dialogue:[
    {who:'bot',cn:'请您概述一下这份报告的撰写思路。',en:'Please summarize your approach to writing this report.'},
    {who:'you',cn:'首先明确研究对象与范围，然后通过综述相关文献构建理论基础。',en:'First clarify the research subject and scope then build a theoretical foundation.'},
    {who:'bot',cn:'论据部分如何安排才能显得严谨？',en:'How should the evidence section be arranged to appear rigorous?'},
    {who:'you',cn:'应当遵循从宏观到微观的逻辑顺序，每个论点配以充分的数据支持。',en:'Follow a logical order from macro to micro with sufficient data support.'},
    {who:'bot',cn:'段落之间的过渡是否需要注意？',en:'Do we need to pay attention to transitions between paragraphs?'},
    {who:'you',cn:'是的，需要运用过渡句和衔接词以确保行文流畅。',en:'Yes transitional sentences and connective phrases ensure smooth flow.'},
    {who:'bot',cn:'附录中通常包含哪些内容？',en:'What content is usually included in the appendix?'},
    {who:'you',cn:'原始数据、问卷调查表、访谈记录等不宜放入正文的补充材料。',en:'Raw data questionnaires interview transcripts and other supplementary materials.'}
  ]},
  {title:'提案撰写', level:'HSK 7', icon:'fa-pen-fancy',
  words:[
    {cn:'提案',py:'tí\'àn',en:'proposal',tip:'Formal suggestion for consideration in business or government.'},
    {cn:'可行性',py:'kěxíngxìng',en:'feasibility',tip:'Assessing whether a plan can be successfully implemented.'},
    {cn:'预算',py:'yùsuàn',en:'budget',tip:'Financial plan for the proposed project.'},
    {cn:'时间表',py:'shíjiānbiǎo',en:'timeline',tip:'Key milestones and deadlines.'},
    {cn:'预期',py:'yùqī',en:'expected',tip:'Outcomes or results that are projected.'},
    {cn:'评估',py:'pínggū',en:'evaluation',tip:'Measuring effectiveness or impact.'}
  ],
  dialogue:[
    {who:'bot',cn:'这份提案的核心目标是什么？',en:'What is the core objective of this proposal?'},
    {who:'you',cn:'旨在优化现有流程，预计可将效率提升百分之三十。',en:'It aims to optimize existing processes and increase efficiency by 30 percent.'},
    {who:'bot',cn:'可行性研究是否已经完成？',en:'Has the feasibility study been completed?'},
    {who:'you',cn:'初步评估显示技术层面可行，但需要进一步确认预算分配。',en:'Preliminary assessment shows technical feasibility but budget needs confirmation.'},
    {who:'bot',cn:'请提供详细的时间表。',en:'Please provide a detailed timeline.'},
    {who:'you',cn:'第一阶段为三个月内完成调研，第二阶段用六个月实施试点项目。',en:'Phase one completes research in three months phase two implements a pilot.'},
    {who:'bot',cn:'预期成果如何量化评估？',en:'How will the expected outcomes be quantitatively evaluated?'},
    {who:'you',cn:'我们将设立关键绩效指标按月进行跟踪评估。',en:'We will establish key performance indicators and conduct monthly tracking.'}
  ]},
  {title:'官方信函', level:'HSK 7', icon:'fa-envelope',
  words:[
    {cn:'兹',py:'zī',en:'hereby',tip:'Classical Chinese word used at the start of formal letters.'},
    {cn:'函告',py:'hángào',en:'to inform by letter',tip:'Official notification in written correspondence.'},
    {cn:'事宜',py:'shìyí',en:'matters',tip:'Items or affairs to be dealt with.'},
    {cn:'收悉',py:'shōuxī',en:'received and noted',tip:'Formal acknowledgment of receipt.'},
    {cn:'特此',py:'tècǐ',en:'hereby',tip:'Used to emphasize the purpose of a formal letter.'},
    {cn:'此致',py:'cǐzhì',en:'with best regards',tip:'Standard closing for formal correspondence.'}
  ],
  dialogue:[
    {who:'bot',cn:'请问正式公函的开头应当如何书写？',en:'How should the opening of an official letter be written?'},
    {who:'you',cn:'通常以兹因或兹有引出事由，言简意赅。',en:'Usually begin with zī yīn or zī yǒu to introduce the subject concisely.'},
    {who:'bot',cn:'正文部分需要注意什么？',en:'What should be noted in the body?'},
    {who:'you',cn:'语言应当庄重得体，表述准确无误，避免歧义。',en:'Language should be dignified and appropriate with precise expression.'},
    {who:'bot',cn:'如果收到对方来函如何回复？',en:'How to reply upon receiving a letter?'},
    {who:'you',cn:'首先表明来函收悉，然后逐一回应对方提及的各项事宜。',en:'First acknowledge receipt then respond to each matter mentioned.'},
    {who:'bot',cn:'结尾处应当如何表达？',en:'How should the closing be expressed?'},
    {who:'you',cn:'常用特此函复或此致敬礼作为结束语。',en:'Common closings include tè cǐ hán fù or cǐ zhì jìng lǐ.'}
  ]},
  {title:'学术摘要', level:'HSK 7', icon:'fa-graduation-cap',
  words:[
    {cn:'摘要',py:'zhāiyào',en:'abstract',tip:'Concise summary of academic research.'},
    {cn:'关键词',py:'guānjiàncí',en:'keywords',tip:'Core terms that index the paper content.'},
    {cn:'方法论',py:'fāngfǎlùn',en:'methodology',tip:'Systematic approach to research.'},
    {cn:'实证',py:'shízhèng',en:'empirical',tip:'Based on observation or evidence rather than theory.'},
    {cn:'结论',py:'jiélùn',en:'conclusion',tip:'Final synthesis of research findings.'},
    {cn:'局限性',py:'júxiànxìng',en:'limitations',tip:'Constraints or weaknesses of the study.'}
  ],
  dialogue:[
    {who:'bot',cn:'学术摘要通常包含哪几个部分？',en:'What parts does an academic abstract usually include?'},
    {who:'you',cn:'研究背景目的方法主要发现和结论缺一不可。',en:'Research background purpose methods key findings and conclusions.'},
    {who:'bot',cn:'字数方面是否有限制？',en:'Is there a word limit?'},
    {who:'you',cn:'大多数期刊要求两百到三百字之间务必精炼。',en:'Most journals require between 200 and 300 words so it must be concise.'},
    {who:'bot',cn:'关键词应当如何选取？',en:'How should keywords be selected?'},
    {who:'you',cn:'选取三到五个最能反映研究核心内容的术语。',en:'Choose 3 to 5 terms that best reflect the core content.'},
    {who:'bot',cn:'摘要中是否需要提及研究局限性？',en:'Should limitations be mentioned in the abstract?'},
    {who:'you',cn:'通常不需要局限性在正文中详细讨论即可。',en:'Usually not limitations are discussed in detail within the main text.'}
  ]},
  {title:'商务函件', level:'HSK 7', icon:'fa-briefcase',
  words:[
    {cn:'询盘',py:'xúnpán',en:'inquiry',tip:'Request for information on goods or services.'},
    {cn:'报价',py:'bàojià',en:'quotation',tip:'Formal price offer in business.'},
    {cn:'条款',py:'tiáokuǎn',en:'terms and conditions',tip:'Specific provisions in a contract.'},
    {cn:'装运',py:'zhuāngyùn',en:'shipment',tip:'Loading and transporting goods.'},
    {cn:'发票',py:'fāpiào',en:'invoice',tip:'Document listing goods/services and payment due.'},
    {cn:'信用证',py:'xìnyòngzhèng',en:'letter of credit',tip:'Bank guarantee for payment in trade.'}
  ],
  dialogue:[
    {who:'bot',cn:'请问贵公司对这批货物的报价是多少？',en:'May I ask your company quotation for this batch of goods?'},
    {who:'you',cn:'我们的报价为每吨五百美元含运费和保险费。',en:'Our quotation is 500 USD per ton including freight and insurance.'},
    {who:'bot',cn:'付款条款方面有什么要求？',en:'What are the payment terms?'},
    {who:'you',cn:'我们要求以不可撤销信用证方式付款。',en:'We require payment by irrevocable letter of credit.'},
    {who:'bot',cn:'装运期能否提前？',en:'Can the shipment date be moved up?'},
    {who:'you',cn:'恐怕最早也要到下月中旬才能装运。',en:'The earliest shipment would be mid next month.'},
    {who:'bot',cn:'能否提供形式发票供我公司申请外汇？',en:'Can you provide a proforma invoice for foreign exchange?'},
    {who:'you',cn:'当然明天将形式发票电邮给您。',en:'Certainly we will email the proforma invoice to you tomorrow.'}
  ]},
  {title:'会议纪要', level:'HSK 7', icon:'fa-file-lines',
  words:[
    {cn:'纪要',py:'jìyào',en:'meeting minutes',tip:'Written record of meeting discussions.'},
    {cn:'与会者',py:'yùhuìzhě',en:'participant',tip:'People attending the meeting.'},
    {cn:'议程',py:'yìchéng',en:'agenda',tip:'List of topics to be discussed.'},
    {cn:'决议',py:'juéyì',en:'resolution',tip:'Formal decision reached at a meeting.'},
    {cn:'动议',py:'dòngyì',en:'motion',tip:'Formal proposal for discussion.'},
    {cn:'跟进',py:'gēnjìn',en:'follow-up',tip:'Actions to be taken after the meeting.'}
  ],
  dialogue:[
    {who:'bot',cn:'会议纪要的格式有什么规范？',en:'What are the formatting standards for meeting minutes?'},
    {who:'you',cn:'包括会议时间地点与会人员议题和决议等基本要素。',en:'Include time location attendees topics and resolutions.'},
    {who:'bot',cn:'每个人的发言都要记录吗？',en:'Should every persons remarks be recorded?'},
    {who:'you',cn:'不必逐字记录但关键观点和重要决策必须准确概括。',en:'Not verbatim but key viewpoints and decisions must be summarized.'},
    {who:'bot',cn:'动议的表决结果如何记录？',en:'How are voting results on motions recorded?'},
    {who:'you',cn:'注明赞成反对和弃权的票数。',en:'Note the number of votes for against and abstentions.'},
    {who:'bot',cn:'会后是否需要确认纪要？',en:'Is it necessary to confirm the minutes?'},
    {who:'you',cn:'需要请所有与会者审阅并提出修改意见。',en:'All attendees should review and provide feedback.'}
  ]},
  {title:'政策文件', level:'HSK 7', icon:'fa-landmark',
  words:[
    {cn:'颁布',py:'bānbù',en:'to promulgate',tip:'Official issuance of laws or policies.'},
    {cn:'实施',py:'shíshī',en:'implementation',tip:'Putting a policy into effect.'},
    {cn:'细则',py:'xìzé',en:'detailed rules',tip:'Specific regulations under a broader policy.'},
    {cn:'监督',py:'jiāndū',en:'supervision',tip:'Monitoring and oversight.'},
    {cn:'问责',py:'wènzé',en:'accountability',tip:'Holding responsible for outcomes.'},
    {cn:'长效机制',py:'chángxiào jīzhì',en:'long-term mechanism',tip:'Sustainable institutional framework.'}
  ],
  dialogue:[
    {who:'bot',cn:'这项政策从何时开始实施？',en:'When does this policy take effect?'},
    {who:'you',cn:'自颁布之日起三十日后正式实施。',en:'It will take effect 30 days after promulgation.'},
    {who:'bot',cn:'配套细则是否已经出台？',en:'Have the supporting rules been issued?'},
    {who:'you',cn:'相关部门正在制定实施细则预计下季度公布。',en:'Departments are drafting rules expected next quarter.'},
    {who:'bot',cn:'如何确保政策的有效监督？',en:'How will effective supervision be ensured?'},
    {who:'you',cn:'将成立专项督查组建立定期报告制度。',en:'A special inspection team with periodic reporting will be established.'},
    {who:'bot',cn:'违反政策会有什么问责措施？',en:'What accountability measures apply?'},
    {who:'you',cn:'视情节轻重予以警告通报批评或行政处分。',en:'Warnings criticism or administrative sanctions depending on severity.'}
  ]},
  {title:'数据分析', level:'HSK 7', icon:'fa-chart-line',
  words:[
    {cn:'数据',py:'shùjù',en:'data',tip:'Raw information for analysis.'},
    {cn:'统计',py:'tǒngjì',en:'statistics',tip:'Collection and interpretation of numerical data.'},
    {cn:'相关',py:'xiāngguān',en:'correlation',tip:'Relationship between two variables.'},
    {cn:'方差',py:'fāngchā',en:'variance',tip:'Measure of data dispersion.'},
    {cn:'回归',py:'huíguī',en:'regression',tip:'Statistical method for modeling relationships.'},
    {cn:'显著',py:'xiǎnzhù',en:'significant',tip:'Statistically meaningful result.'}
  ],
  dialogue:[
    {who:'bot',cn:'这批数据呈现什么样的分布趋势？',en:'What distribution trend does this data show?'},
    {who:'you',cn:'从散点图来看数据呈现明显的正态分布特征。',en:'The scatter plot shows clear normal distribution.'},
    {who:'bot',cn:'变量之间是否存在相关关系？',en:'Is there a correlation between the variables?'},
    {who:'you',cn:'相关系数为零点八三表明两者高度正相关。',en:'The correlation coefficient is 0.83 indicating strong positive correlation.'},
    {who:'bot',cn:'回归分析的结果如何？',en:'What are the regression results?'},
    {who:'you',cn:'模型的拟合优度达到零点九一解释力较强。',en:'The R-squared is 0.91 showing strong explanatory power.'},
    {who:'bot',cn:'P值是否达到了统计显著水平？',en:'Does the p-value reach significance?'},
    {who:'you',cn:'P值小于零点零一结果在统计上非常显著。',en:'The p-value is less than 0.01 highly significant.'}
  ]},
  {title:'文学评论', level:'HSK 7', icon:'fa-feather-pointed',
  words:[
    {cn:'叙事',py:'xùshì',en:'narrative',tip:'The way a story is told.'},
    {cn:'隐喻',py:'yǐnyù',en:'metaphor',tip:'Figure of speech implying comparison.'},
    {cn:'象征',py:'xiàngzhēng',en:'symbolism',tip:'Using objects to represent abstract ideas.'},
    {cn:'视角',py:'shìjiǎo',en:'perspective',tip:'The narrative angle of a story.'},
    {cn:'张力',py:'zhānglì',en:'tension',tip:'Dramatic tension in literature.'},
    {cn:'解构',py:'jiěgòu',en:'deconstruction',tip:'Critical approach analyzing underlying assumptions.'}
  ],
  dialogue:[
    {who:'bot',cn:'您如何评价这部小说的叙事结构？',en:'How do you evaluate the narrative structure of this novel?'},
    {who:'you',cn:'作者采用了非线性的叙事手法打破了传统的时间序列。',en:'The author uses a non-linear narrative breaking traditional chronology.'},
    {who:'bot',cn:'作品中的隐喻系统有什么特点？',en:'What are the characteristics of the metaphor system?'},
    {who:'you',cn:'水的意象贯穿全篇隐喻着生命的流转与无常。',en:'Water imagery runs throughout symbolizing the flow and impermanence of life.'},
    {who:'bot',cn:'叙事视角的转换是否自然？',en:'Is the shift in narrative perspective natural?'},
    {who:'you',cn:'多重视角的运用丰富了故事层次但有部分转换略显生硬。',en:'Multiple perspectives enrich the story though some shifts feel abrupt.'},
    {who:'bot',cn:'这部作品在文学史上有何地位？',en:'What is its status in literary history?'},
    {who:'you',cn:'它开创了新的写作范式对后世作家产生了深远影响。',en:'It pioneered a new paradigm and profoundly influenced later writers.'}
  ]},
  {title:'政策分析', level:'HSK 7', icon:'fa-scale-balanced',
  words:[
    {cn:'政策',py:'zhèngcè',en:'policy',tip:'Set of principles adopted by government.'},
    {cn:'评估',py:'pínggū',en:'evaluation',tip:'Systematic assessment of policy effects.'},
    {cn:'效益',py:'xiàoyì',en:'benefit',tip:'Positive outcomes or advantages.'},
    {cn:'成本',py:'chéngběn',en:'cost',tip:'Resources required or sacrificed.'},
    {cn:'利益相关者',py:'lìyì xiāngguānzhě',en:'stakeholder',tip:'Individuals or groups affected by policy.'},
    {cn:'优化',py:'yōuhuà',en:'optimization',tip:'Improving policy design or implementation.'}
  ],
  dialogue:[
    {who:'bot',cn:'这项政策的主要目标群体是谁？',en:'Who is the main target group of this policy?'},
    {who:'you',cn:'政策主要面向中小企业和初创企业。',en:'The policy targets SMEs and startups.'},
    {who:'bot',cn:'成本效益分析的结果如何？',en:'What were the results of the cost-benefit analysis?'},
    {who:'you',cn:'每投入一元可产生五点二元的社会效益。',en:'Every yuan invested generates 5.2 yuan in social benefits.'},
    {who:'bot',cn:'利益相关者的反馈如何？',en:'What is the feedback from stakeholders?'},
    {who:'you',cn:'大多数利益相关者支持该政策但部分担心执行力度不足。',en:'Most support the policy though some worry about enforcement.'},
    {who:'bot',cn:'您对政策优化有什么建议？',en:'What suggestions do you have for optimization?'},
    {who:'you',cn:'建议加强跨部门协调机制并设立中期评估节点。',en:'Strengthen cross-departmental coordination and set mid-term evaluations.'}
  ]},
  {title:'案例分析', level:'HSK 7', icon:'fa-magnifying-glass-chart',
  words:[
    {cn:'案例',py:'ànlì',en:'case study',tip:'In-depth examination of a real-world example.'},
    {cn:'背景',py:'bèijǐng',en:'background',tip:'Circumstances surrounding the case.'},
    {cn:'困境',py:'kùnjìng',en:'dilemma',tip:'Difficult situation requiring a choice.'},
    {cn:'对策',py:'duìcè',en:'countermeasure',tip:'Strategic response to a problem.'},
    {cn:'启示',py:'qǐshì',en:'insight',tip:'Lessons learned from the case.'},
    {cn:'归纳',py:'guīnà',en:'generalize',tip:'Deriving general principles from specifics.'}
  ],
  dialogue:[
    {who:'bot',cn:'请简述这个案例的核心问题。',en:'Please briefly describe the core issue.'},
    {who:'you',cn:'该公司面临的核心问题是市场份额持续下滑同时创新乏力。',en:'The core issue is market share decline with weak innovation.'},
    {who:'bot',cn:'造成这种困境的主要原因是什么？',en:'What are the main reasons?'},
    {who:'you',cn:'外部原因是竞争对手的崛起内部原因是管理层的决策失误。',en:'External competitor rise internal management errors.'},
    {who:'bot',cn:'他们采取了哪些应对措施？',en:'What countermeasures did they take?'},
    {who:'you',cn:'进行了组织架构重组同时加大了研发投入。',en:'They restructured and increased R and D investment.'},
    {who:'bot',cn:'从这个案例中可以归纳出哪些普遍启示？',en:'What general insights can be drawn?'},
    {who:'you',cn:'企业必须保持对市场变化的敏锐洞察力创新是持续发展的根本动力。',en:'Companies must maintain market insight innovation drives growth.'}
  ]},
  {title:'比较分析', level:'HSK 7', icon:'fa-not-equal',
  words:[
    {cn:'比较',py:'bǐjiào',en:'comparison',tip:'Examining similarities and differences.'},
    {cn:'差异',py:'chāyì',en:'difference',tip:'Distinguishing characteristics.'},
    {cn:'共性',py:'gòngxìng',en:'commonality',tip:'Shared features or attributes.'},
    {cn:'维度',py:'wéidù',en:'dimension',tip:'Aspect or facet of analysis.'},
    {cn:'参照',py:'cānzhào',en:'benchmark',tip:'Standard for comparison.'},
    {cn:'对比',py:'duìbǐ',en:'contrast',tip:'Highlighting differences side by side.'}
  ],
  dialogue:[
    {who:'bot',cn:'这两种方案的主要差异在哪里？',en:'What are the main differences between these plans?'},
    {who:'you',cn:'方案一注重短期收益方案二则着眼于长期可持续发展。',en:'Plan One focuses on short-term gains Plan Two on long-term growth.'},
    {who:'bot',cn:'它们之间有什么共性？',en:'What commonalities do they share?'},
    {who:'you',cn:'都强调成本控制和风险管理。',en:'Both emphasize cost control and risk management.'},
    {who:'bot',cn:'从哪些维度进行比较更为客观？',en:'From which dimensions is comparison more objective?'},
    {who:'you',cn:'应当从经济效益社会影响可行性和风险四个维度展开。',en:'Economic benefit social impact feasibility and risk.'},
    {who:'bot',cn:'以什么为参照标准？',en:'What is used as the benchmark?'},
    {who:'you',cn:'以行业平均水平和国际最佳实践作为参照系。',en:'Industry averages and international best practices.'}
  ]},
  {title:'趋势分析', level:'HSK 7', icon:'fa-chart-simple',
  words:[
    {cn:'趋势',py:'qūshì',en:'trend',tip:'General direction of change over time.'},
    {cn:'预测',py:'yùcè',en:'forecast',tip:'Estimating future outcomes based on data.'},
    {cn:'周期性',py:'zhōuqīxìng',en:'cyclicality',tip:'Recurring patterns at regular intervals.'},
    {cn:'波动',py:'bōdòng',en:'fluctuation',tip:'Irregular rise and fall.'},
    {cn:'拐点',py:'guǎidiǎn',en:'turning point',tip:'Point where a trend changes direction.'},
    {cn:'前瞻',py:'qiánzhān',en:'forward-looking',tip:'Focusing on future developments.'}
  ],
  dialogue:[
    {who:'bot',cn:'从历史数据来看市场呈现什么趋势？',en:'What trend does the market show?'},
    {who:'you',cn:'过去五年市场呈现稳步上升趋势年均增长率约百分之八。',en:'The market has shown steady upward trend with 8 percent annual growth.'},
    {who:'bot',cn:'有没有明显的周期性特征？',en:'Are there obvious cyclical characteristics?'},
    {who:'you',cn:'存在三年左右的短周期波动以及十年左右的长周期变化。',en:'Short cycles of about 3 years and long cycles of about 10 years.'},
    {who:'bot',cn:'预计什么时候出现拐点？',en:'When is the inflection point expected?'},
    {who:'you',cn:'基于当前数据模型预测明年第三季度可能迎来拐点。',en:'Based on models the inflection point may arrive in Q3 next year.'},
    {who:'bot',cn:'前瞻性的建议是什么？',en:'What is the forward-looking recommendation?'},
    {who:'you',cn:'建议提前布局新兴领域降低对传统市场的依赖。',en:'Lay out plans in emerging fields reduce reliance on traditional markets.'}
  ]},
  {title:'风险评估', level:'HSK 7', icon:'fa-triangle-exclamation',
  words:[
    {cn:'风险',py:'fēngxiǎn',en:'risk',tip:'Possibility of loss or harm.'},
    {cn:'概率',py:'gàilǜ',en:'probability',tip:'Likelihood of an event occurring.'},
    {cn:'影响',py:'yǐngxiǎng',en:'impact',tip:'Effect or consequence of a risk event.'},
    {cn:'缓解',py:'huǎnjiě',en:'mitigation',tip:'Reducing the severity of risk.'},
    {cn:'应急',py:'yìngjí',en:'emergency response',tip:'Immediate action in crisis situations.'},
    {cn:'预警',py:'yùjǐng',en:'early warning',tip:'Advance notice of potential threats.'}
  ],
  dialogue:[
    {who:'bot',cn:'这个项目的主要风险有哪些？',en:'What are the main risks of this project?'},
    {who:'you',cn:'技术风险市场风险和政策风险是三大主要风险来源。',en:'Technical market and policy risks are the three main sources.'},
    {who:'bot',cn:'每种风险的发生概率如何？',en:'What is the probability of each risk?'},
    {who:'you',cn:'技术风险概率较高约百分之四十市场和政策风险分别为百分之三十和十五。',en:'Technical 40 percent market and policy 30 and 15 percent.'},
    {who:'bot',cn:'有没有有效的缓解措施？',en:'Are there effective mitigation measures?'},
    {who:'you',cn:'建立多层次的风险缓冲机制包括技术备选方案和保险覆盖。',en:'Establish multi-level risk buffers including alternatives and insurance.'},
    {who:'bot',cn:'预警系统如何运作？',en:'How does the early warning system operate?'},
    {who:'you',cn:'通过实时监测关键指标一旦超出阈值即自动触发警报。',en:'It monitors key indicators and triggers alerts when thresholds are exceeded.'}
  ]},
  {title:'科学方法', level:'HSK 7', icon:'fa-flask',
  words:[
    {cn:'假设',py:'jiǎshè',en:'hypothesis',tip:'Proposed explanation to be tested.'},
    {cn:'变量',py:'biànliàng',en:'variable',tip:'Factor that can change in an experiment.'},
    {cn:'控制',py:'kòngzhì',en:'control',tip:'Standard for comparison in experiments.'},
    {cn:'重复',py:'chóngfù',en:'replication',tip:'Repeating an experiment to verify results.'},
    {cn:'验证',py:'yànzhèng',en:'verification',tip:'Confirming the accuracy of a hypothesis.'},
    {cn:'推导',py:'tuīdǎo',en:'deduction',tip:'Logical reasoning from premises.'}
  ],
  dialogue:[
    {who:'bot',cn:'科学探究的第一步是什么？',en:'What is the first step in scientific inquiry?'},
    {who:'you',cn:'提出一个可检验的研究假设。',en:'Formulate a testable research hypothesis.'},
    {who:'bot',cn:'如何设计实验来验证假设？',en:'How to design an experiment?'},
    {who:'you',cn:'设置实验组和对照组控制无关变量确保结果可靠性。',en:'Set up experimental and control groups control extraneous variables.'},
    {who:'bot',cn:'为什么重复实验很重要？',en:'Why is replication important?'},
    {who:'you',cn:'重复实验可以排除偶然因素增强研究结论的可信度。',en:'Replication rules out chance factors and increases credibility.'},
    {who:'bot',cn:'如何从实验结果进行推导？',en:'How to deduce from results?'},
    {who:'you',cn:'运用归纳和演绎逻辑从具体数据中得出一般性结论。',en:'Use inductive and deductive logic to draw general conclusions.'}
  ]},
  {title:'文献综述', level:'HSK 7', icon:'fa-book-open',
  words:[
    {cn:'文献',py:'wénxiàn',en:'literature',tip:'Scholarly publications on a topic.'},
    {cn:'综述',py:'zōngshù',en:'review',tip:'Comprehensive overview of existing research.'},
    {cn:'引用',py:'yǐnyòng',en:'citation',tip:'Referencing a source.'},
    {cn:'学术',py:'xuéshù',en:'academic',tip:'Scholarly or research-related.'},
    {cn:'前沿',py:'qiányán',en:'frontier',tip:'Leading edge of research.'},
    {cn:'空白',py:'kòngbái',en:'gap',tip:'Unexplored area in research.'}
  ],
  dialogue:[
    {who:'bot',cn:'文献综述的主要目的是什么？',en:'What is the main purpose of a literature review?'},
    {who:'you',cn:'梳理现有研究成果找出研究空白为自己的研究定位。',en:'Sort out existing research identify gaps position your own study.'},
    {who:'bot',cn:'如何选择合适的文献？',en:'How to select appropriate literature?'},
    {who:'you',cn:'优先选取核心期刊和权威学者的代表性著作。',en:'Prioritize core journals and authoritative scholars.'},
    {who:'bot',cn:'引用文献时需要注意什么？',en:'What should be noted when citing?'},
    {who:'you',cn:'确保引用的准确性和时效性避免断章取义。',en:'Ensure accuracy and timeliness avoid taking quotes out of context.'},
    {who:'bot',cn:'怎样判断研究前沿？',en:'How to identify research frontiers?'},
    {who:'you',cn:'关注近三到五年的高被引论文和顶级会议的最新成果。',en:'Focus on highly cited papers from the past 3 to 5 years.'}
  ]}
,
  {title:'研究方法', level:'HSK 7', icon:'fa-microscope',
  words:[
    {cn:'定性',py:'dìngxìng',en:'qualitative',tip:'Non-numerical research methods.'},
    {cn:'定量',py:'dìngliàng',en:'quantitative',tip:'Numerical measurement and analysis.'},
    {cn:'抽样',py:'chōuyàng',en:'sampling',tip:'Selecting a representative subset.'},
    {cn:'问卷',py:'wènjuàn',en:'questionnaire',tip:'Survey instrument for data collection.'},
    {cn:'访谈',py:'fǎngtán',en:'interview',tip:'Structured or semi-structured conversation.'},
    {cn:'三角',py:'sānjiǎo',en:'triangulation',tip:'Using multiple methods to validate findings.'}
  ],
  dialogue:[
    {who:'bot',cn:'定性和定量研究方法有什么区别？',en:'Difference between qualitative and quantitative methods?'},
    {who:'you',cn:'定性研究侧重于理解和解释定量研究侧重于测量和统计。',en:'Qualitative focuses on understanding quantitative on measurement.'},
    {who:'bot',cn:'如何确定样本量？',en:'How to determine sample size?'},
    {who:'you',cn:'根据研究设计和统计功效分析来确定合适的样本量。',en:'Based on research design and statistical power analysis.'},
    {who:'bot',cn:'问卷设计的要点是什么？',en:'Key points of questionnaire design?'},
    {who:'you',cn:'问题要清晰明确避免引导性提问选项要全面互斥。',en:'Clear questions avoid leading options exhaustive and exclusive.'},
    {who:'bot',cn:'什么是三角互证法？',en:'What is triangulation?'},
    {who:'you',cn:'运用多种数据来源或研究方法交叉验证研究结论。',en:'Using multiple data sources or methods to cross-validate conclusions.'}
  ]},
  {title:'研究发现', level:'HSK 7', icon:'fa-lightbulb',
  words:[
    {cn:'发现',py:'fāxiàn',en:'finding',tip:'Result or observation from research.'},
    {cn:'显著',py:'xiǎnzhù',en:'significant',tip:'Important or meaningful result.'},
    {cn:'异常',py:'yìcháng',en:'anomaly',tip:'Deviation from expected pattern.'},
    {cn:'关联',py:'guānlián',en:'association',tip:'Connection between variables.'},
    {cn:'效应',py:'xiàoyìng',en:'effect',tip:'The impact of one variable on another.'},
    {cn:'解释',py:'jiěshì',en:'interpretation',tip:'Explaining the meaning of findings.'}
  ],
  dialogue:[
    {who:'bot',cn:'研究中最主要的发现是什么？',en:'Most important finding of the research?'},
    {who:'you',cn:'我们发现A因素对B结果具有显著的正面效应。',en:'Factor A has a significant positive effect on Outcome B.'},
    {who:'bot',cn:'有没有出现预期之外的结果？',en:'Any unexpected results?'},
    {who:'you',cn:'确实有一个异常数据点值得进一步探究。',en:'An anomalous data point worth investigating.'},
    {who:'bot',cn:'这些发现与已有研究是否一致？',en:'Consistent with existing research?'},
    {who:'you',cn:'基本吻合但在某些细节上我们的发现有所不同。',en:'Largely consistent though differing in certain details.'},
    {who:'bot',cn:'如何解释这些研究发现？',en:'How to interpret these findings?'},
    {who:'you',cn:'我们认为这可能与样本特征和文化背景有关。',en:'This may relate to sample characteristics and cultural background.'}
  ]},
  {title:'讨论分析', level:'HSK 7', icon:'fa-comments',
  words:[
    {cn:'讨论',py:'tǎolùn',en:'discussion',tip:'Interpretation and evaluation of results.'},
    {cn:'对比',py:'duìbǐ',en:'comparison',tip:'Comparing with other studies.'},
    {cn:'佐证',py:'zuǒzhèng',en:'corroboration',tip:'Supporting evidence from other sources.'},
    {cn:'反驳',py:'fǎnbó',en:'refute',tip:'Contradicting a claim with evidence.'},
    {cn:'视角',py:'shìjiǎo',en:'perspective',tip:'Way of viewing the issue.'},
    {cn:'洞见',py:'dòngjiàn',en:'insight',tip:'Deep understanding of the topic.'}
  ],
  dialogue:[
    {who:'bot',cn:'如何展开研究讨论部分？',en:'How to develop the discussion section?'},
    {who:'you',cn:'先将本研究的主要发现与已有文献进行系统对比。',en:'Compare findings with existing literature systematically.'},
    {who:'bot',cn:'如果自己的发现与权威研究不一致怎么办？',en:'What if findings conflict with authoritative studies?'},
    {who:'you',cn:'应当审慎分析导致差异的可能原因而非急于否定。',en:'Carefully analyze possible reasons for the discrepancy.'},
    {who:'bot',cn:'如何为研究结论提供更有力的佐证？',en:'How to provide stronger corroboration?'},
    {who:'you',cn:'引用多源数据或运用不同方法交叉验证。',en:'Cite multi-source data or use different methods.'},
    {who:'bot',cn:'讨论部分需要提出新的洞见吗？',en:'Should the discussion offer new insights?'},
    {who:'you',cn:'研究的价值就在于提供独特的理论贡献和实践启示。',en:'The value lies in unique theoretical and practical contributions.'}
  ]},
  {title:'实验设计', level:'HSK 7', icon:'fa-vial',
  words:[
    {cn:'实验',py:'shíyàn',en:'experiment',tip:'Controlled test of a hypothesis.'},
    {cn:'随机',py:'suíjī',en:'random',tip:'Assignment without systematic bias.'},
    {cn:'对照',py:'duìzhào',en:'control group',tip:'Group receiving no treatment for comparison.'},
    {cn:'干预',py:'gānyù',en:'intervention',tip:'Treatment applied to experimental group.'},
    {cn:'偏差',py:'piānchā',en:'bias',tip:'Systematic error in research.'},
    {cn:'效度',py:'xiàodù',en:'validity',tip:'Extent a test measures what it claims.'}
  ],
  dialogue:[
    {who:'bot',cn:'实验设计的基本原则是什么？',en:'Basic principles of experimental design?'},
    {who:'you',cn:'随机化对照和重复是实验设计的三大原则。',en:'Randomization control and replication are the three principles.'},
    {who:'bot',cn:'如何避免实验偏差？',en:'How to avoid experimental bias?'},
    {who:'you',cn:'采用双盲设计即实验者和被试都不知道分组情况。',en:'Use double-blind design where neither knows group assignment.'},
    {who:'bot',cn:'样本量对实验效度有什么影响？',en:'Effect of sample size on validity?'},
    {who:'you',cn:'样本量越大统计效度越高但也要考虑成本限制。',en:'Larger sample gives higher validity but cost must be considered.'},
    {who:'bot',cn:'如何确保实验的内部效度？',en:'How to ensure internal validity?'},
    {who:'you',cn:'严格控制无关变量确保观察到的效应来自实验操作。',en:'Control extraneous variables to ensure effects are from the manipulation.'}
  ]},
  {title:'结论撰写', level:'HSK 7', icon:'fa-file-pen',
  words:[
    {cn:'结论',py:'jiélùn',en:'conclusion',tip:'Final synthesis of research.'},
    {cn:'贡献',py:'gòngxiàn',en:'contribution',tip:'Value added by the research.'},
    {cn:'局限',py:'júxiàn',en:'limitation',tip:'Constraints of the study.'},
    {cn:'展望',py:'zhǎnwàng',en:'outlook',tip:'Suggestions for future research.'},
    {cn:'总结',py:'zǒngjié',en:'summary',tip:'Concise restatement of key points.'},
    {cn:'启示',py:'qǐshì',en:'implications',tip:'Practical or theoretical significance.'}
  ],
  dialogue:[
    {who:'bot',cn:'结论部分应当包括哪些内容？',en:'What should the conclusion include?'},
    {who:'you',cn:'研究总结主要贡献局限性以及未来研究展望。',en:'Summary main contributions limitations and future outlook.'},
    {who:'bot',cn:'如何评价自己的研究贡献？',en:'How to evaluate ones own contributions?'},
    {who:'you',cn:'实事求是既不夸大也不贬低客观阐述创新点。',en:'Be realistic neither exaggerate nor downplay present innovations.'},
    {who:'bot',cn:'局限性是否会影响论文的质量？',en:'Do limitations affect paper quality?'},
    {who:'you',cn:'诚实承认局限性反而会增强论文的学术可信度。',en:'Honestly acknowledging limitations enhances academic credibility.'},
    {who:'bot',cn:'未来展望应该具体到什么程度？',en:'How specific should the outlook be?'},
    {who:'you',cn:'提出具体可行的研究方向而不是泛泛而谈。',en:'Propose specific feasible directions not vague generalities.'}
  ]},
  {title:'文学翻译', level:'HSK 7', icon:'fa-feather',
  words:[
    {cn:'翻译',py:'fānyì',en:'translation',tip:'Rendering text from one language to another.'},
    {cn:'忠实',py:'zhōngshí',en:'fidelity',tip:'Faithfulness to the original text.'},
    {cn:'流畅',py:'liúchàng',en:'fluency',tip:'Smooth and natural expression.'},
    {cn:'意境',py:'yìjìng',en:'artistic conception',tip:'The mood or artistic realm of a work.'},
    {cn:'归化',py:'guīhuà',en:'domestication',tip:'Adapting text to target culture.'},
    {cn:'异化',py:'yìhuà',en:'foreignization',tip:'Preserving source culture elements.'}
  ],
  dialogue:[
    {who:'bot',cn:'文学翻译中最难把握的是什么？',en:'Most difficult aspect of literary translation?'},
    {who:'you',cn:'在忠实原文和保持流畅之间找到平衡点。',en:'Finding balance between fidelity and fluency.'},
    {who:'bot',cn:'如何处理原文中的文化意象？',en:'How to handle cultural imagery?'},
    {who:'you',cn:'如果意象在目标语中有对应可以采用归化策略。',en:'If imagery has a counterpart domestication can be used.'},
    {who:'bot',cn:'什么时候应当采用异化策略？',en:'When should foreignization be used?'},
    {who:'you',cn:'当原文的文化元素具有独特价值和重要意义时。',en:'When source elements have unique value and significance.'},
    {who:'bot',cn:'诗歌翻译是否可能做到形神兼备？',en:'Can poetry translation maintain both form and spirit?'},
    {who:'you',cn:'极难做到通常需要牺牲部分形式来传达意境。',en:'Very difficult form is usually sacrificed for artistic conception.'}
  ]},
  {title:'技术翻译', level:'HSK 7', icon:'fa-gear',
  words:[
    {cn:'术语',py:'shùyǔ',en:'terminology',tip:'Specialized vocabulary in a field.'},
    {cn:'规范',py:'guīfàn',en:'standard',tip:'Accepted rules or conventions.'},
    {cn:'精确',py:'jīngquè',en:'precision',tip:'Accuracy and exactness.'},
    {cn:'一致',py:'yīzhì',en:'consistency',tip:'Uniform use of terms and style.'},
    {cn:'说明',py:'shuōmíng',en:'instruction',tip:'Explanatory text for technical content.'},
    {cn:'手册',py:'shǒucè',en:'manual',tip:'Reference document for users.'}
  ],
  dialogue:[
    {who:'bot',cn:'技术翻译与文学翻译最大的不同是什么？',en:'Biggest difference between technical and literary translation?'},
    {who:'you',cn:'技术翻译要求术语高度统一表达精确无误。',en:'Technical translation requires unified terminology and precision.'},
    {who:'bot',cn:'如何确保术语翻译的规范性？',en:'How to ensure terminology standardization?'},
    {who:'you',cn:'建立术语库参考行业标准和权威词典。',en:'Build a term database reference industry standards.'},
    {who:'bot',cn:'翻译用户手册时应该注意什么？',en:'What to note when translating manuals?'},
    {who:'you',cn:'语气要清晰直接避免歧义操作步骤要逻辑连贯。',en:'Clear direct tone avoid ambiguity keep steps logically coherent.'},
    {who:'bot',cn:'如何保持翻译的一致性？',en:'How to maintain translation consistency?'},
    {who:'you',cn:'使用翻译记忆工具并对同一项目的译员进行统一培训。',en:'Use translation memory tools and uniformly train all translators.'}
  ]},
  {title:'交替传译', level:'HSK 7', icon:'fa-microphone',
  words:[
    {cn:'口译',py:'kǒuyì',en:'interpreting',tip:'Oral translation in real time.'},
    {cn:'笔记',py:'bǐjì',en:'note-taking',tip:'Writing key points during interpreting.'},
    {cn:'记忆',py:'jìyì',en:'memory',tip:'Retaining information for short periods.'},
    {cn:'应变',py:'yìngbiàn',en:'improvisation',tip:'Adapting to unexpected situations.'},
    {cn:'语域',py:'yǔyù',en:'register',tip:'Level of formality in language.'},
    {cn:'达意',py:'dáyì',en:'convey meaning',tip:'Effectively communicating the intended message.'}
  ],
  dialogue:[
    {who:'bot',cn:'交替传译中最关键的技能是什么？',en:'Most critical skill in consecutive interpreting?'},
    {who:'you',cn:'高效的笔记系统和出色的短期记忆力缺一不可。',en:'Efficient note system and excellent short-term memory both needed.'},
    {who:'bot',cn:'如何处理发言人语速过快的情况？',en:'How to handle a fast speaker?'},
    {who:'you',cn:'礼貌地请对方适当放慢速度同时抓取核心信息。',en:'Politely ask to slow down while capturing core info.'},
    {who:'bot',cn:'遇到听不懂的术语怎么办？',en:'What to do with unfamiliar terms?'},
    {who:'you',cn:'根据上下文推测含义或请发言人解释。',en:'Infer from context or ask for clarification.'},
    {who:'bot',cn:'如何控制语域和语气？',en:'How to control register and tone?'},
    {who:'you',cn:'根据场合和听众调整正式场合用语庄重非正式场合可稍灵活。',en:'Adjust to occasion dignified for formal flexible for informal.'}
  ]},
  {title:'同声传译', level:'HSK 7', icon:'fa-headphones',
  words:[
    {cn:'同传',py:'tóngchuán',en:'simultaneous interpreting',tip:'Real-time interpreting with minimal delay.'},
    {cn:'耳机',py:'ěrjī',en:'earphone',tip:'Audio device for listening to source.'},
    {cn:'隔音',py:'géyīn',en:'soundproof',tip:'Preventing sound from entering or leaving.'},
    {cn:'预测',py:'yùcè',en:'anticipation',tip:'Predicting what the speaker will say.'},
    {cn:'分神',py:'fēnshén',en:'split attention',tip:'Dividing focus between listening and speaking.'},
    {cn:'简约',py:'jiǎnyuē',en:'simplification',tip:'Condensing speech to keep pace.'}
  ],
  dialogue:[
    {who:'bot',cn:'同声传译最大的挑战是什么？',en:'Biggest challenge in simultaneous interpreting?'},
    {who:'you',cn:'听说同步的大脑分工程度极高需要长期的专业训练。',en:'Simultaneous listening and speaking requires extensive training.'},
    {who:'bot',cn:'如何提高同传的预测能力？',en:'How to improve anticipation skills?'},
    {who:'you',cn:'熟悉会议主题和发言人风格积累相关背景知识。',en:'Know the topic and speaker style accumulate background knowledge.'},
    {who:'bot',cn:'跟不上发言速度时怎么办？',en:'What to do when you cannot keep up?'},
    {who:'you',cn:'进行概括性翻译舍弃次要信息确保核心信息传达到位。',en:'Summarize omit secondary info convey core messages.'},
    {who:'bot',cn:'同传箱里的工作环境是怎样的？',en:'What is the booth working environment?'},
    {who:'you',cn:'通常在隔音箱内佩戴耳机通过麦克风输出翻译。',en:'In a soundproof booth with headphones delivering through a microphone.'}
  ]},
  {title:'字幕翻译', level:'HSK 7', icon:'fa-closed-captioning',
  words:[
    {cn:'字幕',py:'zìmù',en:'subtitles',tip:'Text displayed on screen for video.'},
    {cn:'同步',py:'tóngbù',en:'synchronization',tip:'Matching text with audio timing.'},
    {cn:'压缩',py:'yāsuō',en:'compression',tip:'Condensing text to fit time and space.'},
    {cn:'断句',py:'duànjù',en:'segmentation',tip:'Splitting text into subtitle lines.'},
    {cn:'可读性',py:'kědúxìng',en:'readability',tip:'Ease of reading subtitles.'},
    {cn:'文化',py:'wénhuà',en:'cultural adaptation',tip:'Adjusting references for the target audience.'}
  ],
  dialogue:[
    {who:'bot',cn:'字幕翻译有哪些特殊限制？',en:'Special constraints of subtitle translation?'},
    {who:'you',cn:'时间和空间的限制最为突出每行最多三十五个字符。',en:'Time and space constraints max 35 characters per line.'},
    {who:'bot',cn:'如何保证字幕与音频同步？',en:'How to ensure subtitle synchronization?'},
    {who:'you',cn:'严格按照时间码进行校对确保每句字幕与语音吻合。',en:'Proofread by timecode matching each subtitle with speech.'},
    {who:'bot',cn:'遇到文化特定表达怎么办？',en:'What about culture-specific expressions?'},
    {who:'you',cn:'根据目标观众的理解水平进行文化适应或加注。',en:'Adapt culturally or add annotations for the audience.'},
    {who:'bot',cn:'字幕断句有什么技巧？',en:'Techniques for subtitle segmentation?'},
    {who:'you',cn:'在每个自然意群处断句保持语义完整便于阅读。',en:'Segment at natural sense groups maintaining completeness.'}
  ]}
,
  {title:'法律翻译', level:'HSK 7', icon:'fa-gavel',
  words:[
    {cn:'合同',py:'hétong',en:'contract',tip:'Legally binding agreement.'},
    {cn:'条款',py:'tiáokuǎn',en:'clause',tip:'Section of a legal document.'},
    {cn:'仲裁',py:'zhòngcái',en:'arbitration',tip:'Resolution of disputes outside court.'},
    {cn:'管辖',py:'guǎnxiá',en:'jurisdiction',tip:'Authority to hear legal cases.'},
    {cn:'生效',py:'shēngxiào',en:'take effect',tip:'When a legal document becomes valid.'},
    {cn:'违约',py:'wéiyuē',en:'breach of contract',tip:'Violation of contractual terms.'}
  ],
  dialogue:[
    {who:'bot',cn:'法律翻译对精确度的要求有多高？',en:'How high is the demand for precision in legal translation?'},
    {who:'you',cn:'极高一词之差可能导致完全不同的法律后果。',en:'Extremely high a single word changes legal consequences.'},
    {who:'bot',cn:'合同翻译中最容易出错的地方是什么？',en:'Most error-prone area in contract translation?'},
    {who:'you',cn:'限定性条款和免责条款的措辞必须极其谨慎。',en:'Qualifying and disclaimer clauses need extremely careful wording.'},
    {who:'bot',cn:'如何翻译法律术语？',en:'How to translate legal terminology?'},
    {who:'you',cn:'必须参照目标法域的法律体系找到最对等的概念。',en:'Reference the target legal system for equivalent concepts.'},
    {who:'bot',cn:'仲裁条款的翻译需要注意什么？',en:'What to note in translating arbitration clauses?'},
    {who:'you',cn:'明确指定仲裁机构和仲裁地点避免产生管辖争议。',en:'Specify the arbitration institution and venue avoid jurisdiction disputes.'}
  ]},
  {title:'商务翻译', level:'HSK 7', icon:'fa-handshake',
  words:[
    {cn:'洽谈',py:'qiàtán',en:'negotiation',tip:'Business discussions between parties.'},
    {cn:'协议',py:'xiéyì',en:'agreement',tip:'Mutual understanding or contract.'},
    {cn:'合资',py:'hézī',en:'joint venture',tip:'Business partnership between companies.'},
    {cn:'并购',py:'bìnggòu',en:'merger and acquisition',tip:'Corporate consolidation.'},
    {cn:'尽职',py:'jìnzhí',en:'due diligence',tip:'Investigation before business deal.'},
    {cn:'交割',py:'jiāogē',en:'closing',tip:'Final settlement of a transaction.'}
  ],
  dialogue:[
    {who:'bot',cn:'商务谈判翻译要注意哪些方面？',en:'What to note in business negotiation interpretation?'},
    {who:'you',cn:'不仅要准确传达信息还要把握谈判氛围和对方意图。',en:'Convey info accurately grasp atmosphere and the other partys intent.'},
    {who:'bot',cn:'合资协议的核心条款是什么？',en:'Core clauses of a joint venture agreement?'},
    {who:'you',cn:'股权比例董事会组成利润分配和退出机制。',en:'Equity ratio board composition profit distribution and exit.'},
    {who:'bot',cn:'尽职调查翻译需要注意什么？',en:'What to note in due diligence translation?'},
    {who:'you',cn:'数据要准确无误财务和法律术语必须专业规范。',en:'Data must be accurate financial and legal terms professional.'},
    {who:'bot',cn:'并购协议中的交割条件如何翻译？',en:'How to translate closing conditions in M and A?'},
    {who:'you',cn:'逐条列明确保每个先决条件都表述清晰无歧义。',en:'List each clause ensuring clear unambiguous prerequisites.'}
  ]},
  {title:'商务谈判', level:'HSK 7', icon:'fa-handshake',
  words:[
    {cn:'让步',py:'ràngbù',en:'concession',tip:'Giving in on certain points.'},
    {cn:'底线',py:'dǐxiàn',en:'bottom line',tip:'Minimum acceptable terms.'},
    {cn:'双赢',py:'shuāngyíng',en:'win-win',tip:'Mutually beneficial outcome.'},
    {cn:'僵局',py:'jiāngjú',en:'stalemate',tip:'Deadlock in negotiations.'},
    {cn:'妥协',py:'tuǒxié',en:'compromise',tip:'Reaching agreement through mutual concession.'},
    {cn:'共识',py:'gòngshí',en:'consensus',tip:'Shared understanding or agreement.'}
  ],
  dialogue:[
    {who:'bot',cn:'谈判开始前需要做哪些准备？',en:'Preparations needed before negotiation?'},
    {who:'you',cn:'明确己方底线研究对方背景制定谈判策略。',en:'Clarify bottom line research the other party plan strategy.'},
    {who:'bot',cn:'如何打破谈判僵局？',en:'How to break a negotiation deadlock?'},
    {who:'you',cn:'提出创造性方案或暂时搁置争议点先达成部分共识。',en:'Propose creative solutions or shelve disputes reach partial consensus.'},
    {who:'bot',cn:'什么时候应该做出让步？',en:'When should concessions be made?'},
    {who:'you',cn:'在不触及底线的原则下以小让步换取对方的大让步。',en:'Make small concessions for large ones without crossing the bottom line.'},
    {who:'bot',cn:'如何判断谈判是否达成了双赢？',en:'How to judge win-win outcome?'},
    {who:'you',cn:'双方均对结果感到满意并且合作关系得到加强。',en:'Both parties satisfied and relationship strengthened.'}
  ]},
  {title:'外交辞令', level:'HSK 7', icon:'fa-earth-asia',
  words:[
    {cn:'外交',py:'wàijiāo',en:'diplomacy',tip:'International relations conduct.'},
    {cn:'声明',py:'shēngmíng',en:'statement',tip:'Official announcement.'},
    {cn:'抗议',py:'kàngyì',en:'protest',tip:'Formal expression of objection.'},
    {cn:'磋商',py:'cuōshāng',en:'consultation',tip:'Formal discussion between parties.'},
    {cn:'共识',py:'gòngshí',en:'common ground',tip:'Areas of mutual agreement.'},
    {cn:'关切',py:'guānqiè',en:'concern',tip:'Official worry or interest in an issue.'}
  ],
  dialogue:[
    {who:'bot',cn:'外交照会中常用的措辞有哪些？',en:'Common phrasing in diplomatic notes?'},
    {who:'you',cn:'表示严重关切和不可接受是常用的外交辞令。',en:'Express grave concern and unacceptable are common expressions.'},
    {who:'bot',cn:'如何表达抗议而不使冲突升级？',en:'How to protest without escalating conflict?'},
    {who:'you',cn:'采用遗憾和担忧等缓和性词汇保留进一步行动的权利。',en:'Use moderated terms like regret and concern reserve action rights.'},
    {who:'bot',cn:'多边外交中如何寻求共识？',en:'How to seek consensus in multilateral diplomacy?'},
    {who:'you',cn:'通过非正式磋商预先沟通避免在正式场合直接对抗。',en:'Communicate via informal consultations avoid direct confrontation.'},
    {who:'bot',cn:'联合声明通常包含哪些要素？',en:'What elements in a joint statement?'},
    {who:'you',cn:'双方共同立场合作成果以及未来合作方向。',en:'Common positions achievements and future directions.'}
  ]},
  {title:'公开演讲', level:'HSK 7', icon:'fa-person-chalkboard',
  words:[
    {cn:'演讲',py:'yǎnjiǎng',en:'speech',tip:'Formal address to an audience.'},
    {cn:'开场',py:'kāichǎng',en:'opening',tip:'Beginning of a speech.'},
    {cn:'论点',py:'lùndiǎn',en:'argument',tip:'Key proposition in a speech.'},
    {cn:'举例',py:'jǔlì',en:'example',tip:'Using examples to support points.'},
    {cn:'互动',py:'hùdòng',en:'interaction',tip:'Engaging with the audience.'},
    {cn:'结尾',py:'jiéwěi',en:'conclusion',tip:'Closing remarks of a speech.'}
  ],
  dialogue:[
    {who:'bot',cn:'一场成功的公开演讲最关键的是什么？',en:'Most critical element of a successful speech?'},
    {who:'you',cn:'开场要引人入胜结尾要发人深省。',en:'Opening must captivate conclusion must inspire thought.'},
    {who:'bot',cn:'如何组织演讲的主体内容？',en:'How to organize main content of a speech?'},
    {who:'you',cn:'采用总-分-总结构每个论点辅以生动例证。',en:'Use general-specific-general structure with vivid examples.'},
    {who:'bot',cn:'如何与听众进行有效互动？',en:'How to interact with the audience?'},
    {who:'you',cn:'运用修辞问句眼神接触和适当的手势拉近距离。',en:'Use rhetorical questions eye contact and gestures.'},
    {who:'bot',cn:'演讲时如何克服紧张情绪？',en:'How to overcome nervousness?'},
    {who:'you',cn:'充分准备反复排练深呼吸放松专注于传递信息。',en:'Prepare rehearse breathe deeply and focus on the message.'}
  ]},
  {title:'危机沟通', level:'HSK 7', icon:'fa-bolt',
  words:[
    {cn:'危机',py:'wēijī',en:'crisis',tip:'Critical situation requiring urgent action.'},
    {cn:'公关',py:'gōngguān',en:'public relations',tip:'Managing public perception.'},
    {cn:'道歉',py:'dàoqiàn',en:'apology',tip:'Expression of regret for wrongdoing.'},
    {cn:'澄清',py:'chéngqīng',en:'clarification',tip:'Clearing up misunderstandings.'},
    {cn:'补救',py:'bǔjiù',en:'remediation',tip:'Actions to fix a problem.'},
    {cn:'信任',py:'xìnrèn',en:'trust',tip:'Public confidence in an organization.'}
  ],
  dialogue:[
    {who:'bot',cn:'危机发生后第一时间应该做什么？',en:'What to do immediately after a crisis?'},
    {who:'you',cn:'迅速发布声明表明已关注事态并将采取行动。',en:'Issue a statement acknowledging awareness and planned action.'},
    {who:'bot',cn:'道歉应该包含哪些要素？',en:'What elements should an apology include?'},
    {who:'you',cn:'明确承认错误表达真诚歉意提出具体补救措施。',en:'Acknowledge mistake sincerely apologize propose remediation.'},
    {who:'bot',cn:'如何应对媒体追问？',en:'How to handle persistent media?'},
    {who:'you',cn:'统一口径由发言人集中回应避免多人表态。',en:'Unified messaging with one spokesperson avoid mixed signals.'},
    {who:'bot',cn:'危机后如何重建信任？',en:'How to rebuild trust after crisis?'},
    {who:'you',cn:'保持透明度定期公布进展以实际行动兑现承诺。',en:'Stay transparent publish progress fulfill promises with actions.'}
  ]},
  {title:'媒体关系', level:'HSK 7', icon:'fa-newspaper',
  words:[
    {cn:'媒体',py:'méitǐ',en:'media',tip:'Mass communication channels.'},
    {cn:'新闻稿',py:'xīnwéngǎo',en:'press release',tip:'Official statement to the media.'},
    {cn:'采访',py:'cǎifǎng',en:'interview',tip:'Q and A session with journalists.'},
    {cn:'回应',py:'huíyìng',en:'response',tip:'Answer to media questions.'},
    {cn:'舆情',py:'yúqíng',en:'public sentiment',tip:'Public opinion about an issue.'},
    {cn:'曝光',py:'bàoguāng',en:'exposure',tip:'Media coverage often negative.'}
  ],
  dialogue:[
    {who:'bot',cn:'如何建立良好的媒体关系？',en:'How to establish good media relations?'},
    {who:'you',cn:'保持信息透明定期与媒体沟通尊重记者职业操守。',en:'Be transparent communicate regularly respect journalistic ethics.'},
    {who:'bot',cn:'新闻稿的写作要点是什么？',en:'Key points for a press release?'},
    {who:'you',cn:'采用倒金字塔结构标题醒目导语概括核心内容。',en:'Inverted pyramid with striking headline and lead.'},
    {who:'bot',cn:'面对负面报道如何应对？',en:'How to handle negative coverage?'},
    {who:'you',cn:'理性回应提供事实依据避免情绪化反击。',en:'Respond rationally provide facts avoid emotional attacks.'},
    {who:'bot',cn:'如何监测和分析舆情？',en:'How to monitor public opinion?'},
    {who:'you',cn:'利用大数据工具实时追踪分析舆论走向和情感倾向。',en:'Use big data tools to track trends and sentiment in real time.'}
  ]},
  {title:'跨部门协调', level:'HSK 7', icon:'fa-users-gear',
  words:[
    {cn:'协调',py:'xiétiáo',en:'coordination',tip:'Organizing efforts across groups.'},
    {cn:'沟通',py:'gōutōng',en:'communication',tip:'Exchange of information.'},
    {cn:'流程',py:'liúchéng',en:'process',tip:'Sequence of steps in work.'},
    {cn:'权责',py:'quánzé',en:'authority and responsibility',tip:'Rights and duties of a position.'},
    {cn:'对接',py:'duìjiē',en:'liaison',tip:'Connecting between departments.'},
    {cn:'壁垒',py:'bìléi',en:'barrier',tip:'Obstacles between departments.'}
  ],
  dialogue:[
    {who:'bot',cn:'跨部门协调中最常见的障碍是什么？',en:'Most common obstacles in cross-departmental coordination?'},
    {who:'you',cn:'信息不对称和部门利益冲突是主要障碍。',en:'Information asymmetry and departmental conflicts.'},
    {who:'bot',cn:'如何打破部门壁垒？',en:'How to break departmental barriers?'},
    {who:'you',cn:'建立定期沟通机制推动信息共享平台的建设。',en:'Establish regular communication and info-sharing platforms.'},
    {who:'bot',cn:'权责不清时应该怎么做？',en:'What to do when authority is unclear?'},
    {who:'you',cn:'制定明确的职责分工表通过正式文件确认。',en:'Create clear responsibility division and confirm formally.'},
    {who:'bot',cn:'如何确保协调工作的效率？',en:'How to ensure coordination efficiency?'},
    {who:'you',cn:'指定协调人设立明确的时间节点和可量化的目标。',en:'Designate a coordinator set clear milestones and quantifiable goals.'}
  ]},
  {title:'国际会议', level:'HSK 7', icon:'fa-globe',
  words:[
    {cn:'议程',py:'yìchéng',en:'agenda',tip:'Schedule of conference topics.'},
    {cn:'主旨',py:'zhǔzhǐ',en:'keynote',tip:'Main theme or principal address.'},
    {cn:'分会',py:'fēnhuì',en:'breakout session',tip:'Smaller group sessions within a conference.'},
    {cn:'纪要',py:'jìyào',en:'summary record',tip:'Official record of proceedings.'},
    {cn:'决议',py:'juéyì',en:'resolution',tip:'Formal decision adopted at conference.'},
    {cn:'宣言',py:'xuānyán',en:'declaration',tip:'Joint statement issued by conference.'}
  ],
  dialogue:[
    {who:'bot',cn:'国际会议筹备的第一要务是什么？',en:'Top priority in conference preparation?'},
    {who:'you',cn:'确定会议主题和议程框架确保各方认同。',en:'Set theme and agenda framework ensuring consensus.'},
    {who:'bot',cn:'如何做好多语种翻译安排？',en:'How to arrange multilingual interpretation?'},
    {who:'you',cn:'提前预约专业同传译员配备同传设备和接收器。',en:'Book interpreters equip booths and receivers.'},
    {who:'bot',cn:'会议决议的起草有什么规范？',en:'Norms for drafting resolutions?'},
    {who:'you',cn:'采用标准格式用语准确经全体讨论后表决通过。',en:'Standard format precise wording adopted by vote after discussion.'},
    {who:'bot',cn:'会后如何发布宣言？',en:'How to issue a declaration?'},
    {who:'you',cn:'汇总各方意见达成共识后以中英文对照形式联合发布。',en:'Consolidate consensus issue bilingually in Chinese and English.'}
  ]}
,
  {title:'医学汉语', level:'HSK 8', icon:'fa-stethoscope',
  words:[
    {cn:'诊断',py:'zhěnduàn',en:'diagnosis',tip:'Identifying a disease or condition.'},
    {cn:'症状',py:'zhèngzhuàng',en:'symptom',tip:'Physical or mental indications of illness.'},
    {cn:'处方',py:'chǔfāng',en:'prescription',tip:'Doctors written order for medication.'},
    {cn:'预后',py:'yùhòu',en:'prognosis',tip:'Likely course of a disease.'},
    {cn:'临床',py:'línchuáng',en:'clinical',tip:'Direct observation and treatment of patients.'},
    {cn:'病理',py:'bìnglǐ',en:'pathology',tip:'Study of disease processes.'}
  ],
  dialogue:[
    {who:'bot',cn:'患者的初步诊断是什么？',en:'What is the preliminary diagnosis?'},
    {who:'you',cn:'根据临床症状和检查结果初步诊断为急性肺炎。',en:'Based on symptoms and tests acute pneumonia.'},
    {who:'bot',cn:'需要如何治疗？',en:'What treatment is needed?'},
    {who:'you',cn:'开具抗生素处方建议住院观察三天。',en:'Prescribe antibiotics recommend three days observation.'},
    {who:'bot',cn:'预后如何？',en:'What is the prognosis?'},
    {who:'you',cn:'如果及时治疗预后良好但需警惕并发症。',en:'Good with timely treatment but watch for complications.'},
    {who:'bot',cn:'病理报告显示什么？',en:'What does pathology show?'},
    {who:'you',cn:'病理结果显示为良性病变未见恶性细胞。',en:'Results indicate benign lesion no malignant cells.'}
  ]},
  {title:'法律汉语', level:'HSK 8', icon:'fa-scale-balanced',
  words:[
    {cn:'诉讼',py:'sùsòng',en:'lawsuit',tip:'Legal proceeding in court.'},
    {cn:'辩护',py:'biànhù',en:'defense',tip:'Legal argument for the accused.'},
    {cn:'证据',py:'zhèngjù',en:'evidence',tip:'Facts presented in court.'},
    {cn:'裁决',py:'cáijué',en:'verdict',tip:'Courts final decision.'},
    {cn:'上诉',py:'shàngsù',en:'appeal',tip:'Request for higher court review.'},
    {cn:'判例',py:'pànlì',en:'legal precedent',tip:'Previous court decisions as reference.'}
  ],
  dialogue:[
    {who:'bot',cn:'本案的诉讼焦点是什么？',en:'Focus of the lawsuit in this case?'},
    {who:'you',cn:'焦点在于合同是否构成有效要约。',en:'Whether the contract constitutes a valid offer.'},
    {who:'bot',cn:'辩护方的主要论点是什么？',en:'Main argument of the defense?'},
    {who:'you',cn:'辩方主张当事人不具备签订合同的民事行为能力。',en:'Defense argues party lacked civil capacity.'},
    {who:'bot',cn:'有哪些关键证据？',en:'What key evidence is there?'},
    {who:'you',cn:'书面合同原件和双方的电子邮件往来记录。',en:'Original written contract and email correspondence.'},
    {who:'bot',cn:'如果裁决不利是否考虑上诉？',en:'Consider appeal if verdict unfavorable?'},
    {who:'you',cn:'是的我方已有相关判例作为上诉依据。',en:'Yes we have relevant precedents as appeal basis.'}
  ]},
  {title:'工程汉语', level:'HSK 8', icon:'fa-helmet-safety',
  words:[
    {cn:'施工',py:'shīgōng',en:'construction',tip:'Building or engineering work.'},
    {cn:'设计',py:'shèjì',en:'design',tip:'Planning and drawing specifications.'},
    {cn:'验收',py:'yànshōu',en:'acceptance check',tip:'Quality inspection and handover.'},
    {cn:'安全',py:'ānquán',en:'safety',tip:'Prevention of accidents and hazards.'},
    {cn:'荷载',py:'hèzài',en:'load',tip:'Weight or force on a structure.'},
    {cn:'抗震',py:'kàngzhèn',en:'earthquake resistance',tip:'Seismic design capability.'}
  ],
  dialogue:[
    {who:'bot',cn:'这个项目的施工进度如何？',en:'Construction progress on this project?'},
    {who:'you',cn:'主体结构已完成百分之八十预计提前两个月竣工。',en:'Main structure 80 percent complete two months ahead.'},
    {who:'bot',cn:'设计荷载参数是多少？',en:'Design load parameters?'},
    {who:'you',cn:'设计活荷载为每平方米五百公斤满足使用要求。',en:'Design live load 500 kg per sq meter.'},
    {who:'bot',cn:'抗震等级达到了什么标准？',en:'Seismic grade achieved?'},
    {who:'you',cn:'按八度设防进行设计符合当地抗震规范。',en:'Designed for intensity 8 seismic fortification.'},
    {who:'bot',cn:'何时进行竣工验收？',en:'When is completion acceptance?'},
    {who:'you',cn:'下周由质监站进行初步验收合格后正式移交。',en:'Quality station preliminary acceptance next week then handover.'}
  ]},
  {title:'金融汉语', level:'HSK 8', icon:'fa-chart-pie',
  words:[
    {cn:'资产',py:'zīchǎn',en:'assets',tip:'Economic resources owned by an entity.'},
    {cn:'负债',py:'fùzhài',en:'liabilities',tip:'Debts or financial obligations.'},
    {cn:'投资',py:'tóuzī',en:'investment',tip:'Allocating capital for expected returns.'},
    {cn:'利率',py:'lìlǜ',en:'interest rate',tip:'Cost of borrowing money.'},
    {cn:'估值',py:'gūzhí',en:'valuation',tip:'Estimated worth of an asset.'},
    {cn:'对冲',py:'duìchōng',en:'hedge',tip:'Reducing financial risk.'}
  ],
  dialogue:[
    {who:'bot',cn:'贵公司目前的资产负债状况如何？',en:'Current asset-liability situation?'},
    {who:'you',cn:'总资产五十亿元资产负债率百分之四十五。',en:'Total assets 5 billion debt ratio 45 percent.'},
    {who:'bot',cn:'这项投资的预期回报率是多少？',en:'Expected return rate on this investment?'},
    {who:'you',cn:'内部收益率测算为百分之十二高于资本成本。',en:'IRR estimated at 12 percent above cost of capital.'},
    {who:'bot',cn:'当前利率环境下应该采取什么策略？',en:'Strategy under current interest rates?'},
    {who:'you',cn:'利率处于上升通道建议缩短固定收益产品的久期。',en:'Rates rising shorten fixed-income duration.'},
    {who:'bot',cn:'如何对这家初创企业进行估值？',en:'How to value this startup?'},
    {who:'you',cn:'采用现金流折现法和可比公司法进行交叉验证。',en:'DCF and comparable company analysis cross-validation.'}
  ]},
  {title:'建筑汉语', level:'HSK 8', icon:'fa-building',
  words:[
    {cn:'结构',py:'jiégòu',en:'structure',tip:'Load-bearing framework of a building.'},
    {cn:'外观',py:'wàiguān',en:'facade',tip:'External appearance of a building.'},
    {cn:'节能',py:'jiénéng',en:'energy efficiency',tip:'Reducing energy consumption.'},
    {cn:'通风',py:'tōngfēng',en:'ventilation',tip:'Air circulation in buildings.'},
    {cn:'采光',py:'cǎiguāng',en:'daylighting',tip:'Natural light access in spaces.'},
    {cn:'空间',py:'kōngjiān',en:'space',tip:'Architectural volume and layout.'}
  ],
  dialogue:[
    {who:'bot',cn:'这座建筑的结构设计有什么特点？',en:'Structural design characteristics?'},
    {who:'you',cn:'采用钢框架结构大跨度无柱空间提高使用灵活性。',en:'Steel frame large-span column-free for flexibility.'},
    {who:'bot',cn:'外观设计融合了哪些元素？',en:'What elements in the facade design?'},
    {who:'you',cn:'将传统中式元素与现代玻璃幕墙相结合体现文化传承。',en:'Combines traditional Chinese with modern glass curtain wall.'},
    {who:'bot',cn:'节能设计方面采取了什么措施？',en:'Energy efficiency measures?'},
    {who:'you',cn:'采用了双层幕墙系统和智能遮阳百叶能耗降低百分之三十。',en:'Double-layer curtain wall and smart louvers reduce energy 30 percent.'},
    {who:'bot',cn:'室内采光和通风情况如何？',en:'Indoor lighting and ventilation?'},
    {who:'you',cn:'中庭设计保证了自然采光开启窗扇实现了自然通风。',en:'Atrium provides daylight operable windows for ventilation.'}
  ]},
  {title:'信息技术', level:'HSK 8', icon:'fa-microchip',
  words:[
    {cn:'算法',py:'suànfǎ',en:'algorithm',tip:'Step-by-step computational procedure.'},
    {cn:'架构',py:'jiàgòu',en:'architecture',tip:'Structure of software systems.'},
    {cn:'数据',py:'shùjù',en:'data',tip:'Digital information processed by computers.'},
    {cn:'安全',py:'ānquán',en:'security',tip:'Protection of information systems.'},
    {cn:'部署',py:'bùshǔ',en:'deployment',tip:'Releasing software to production.'},
    {cn:'优化',py:'yōuhuà',en:'optimization',tip:'Improving performance and efficiency.'}
  ],
  dialogue:[
    {who:'bot',cn:'系统的整体架构是如何设计的？',en:'How is the overall architecture designed?'},
    {who:'you',cn:'采用微服务架构各模块之间通过API网关进行通信。',en:'Microservices architecture modules communicate via API gateway.'},
    {who:'bot',cn:'数据存储方案选择了什么？',en:'What data storage solution?'},
    {who:'you',cn:'关系型与非关系型数据库结合使用满足不同场景需求。',en:'Relational and NoSQL combined for different scenarios.'},
    {who:'bot',cn:'如何保障系统的安全性？',en:'How to ensure system security?'},
    {who:'you',cn:'实施多层次的防护体系包括防火墙加密传输和权限控制。',en:'Multi-layer protection firewalls encryption access control.'},
    {who:'bot',cn:'部署策略是什么？',en:'Deployment strategy?'},
    {who:'you',cn:'采用容器化部署配合自动化运维工具实现持续交付。',en:'Containerized with automated ops tools for continuous delivery.'}
  ]},
  {title:'文化维度', level:'HSK 8', icon:'fa-globe',
  words:[
    {cn:'维度',py:'wéidù',en:'dimension',tip:'Aspect of cultural measurement.'},
    {cn:'集体',py:'jítǐ',en:'collectivism',tip:'Prioritizing the group over the individual.'},
    {cn:'个人',py:'gèrén',en:'individualism',tip:'Prioritizing individual over the group.'},
    {cn:'权力',py:'quánlì',en:'power distance',tip:'Acceptance of hierarchical authority.'},
    {cn:'规避',py:'guībì',en:'uncertainty avoidance',tip:'Comfort level with ambiguity.'},
    {cn:'长期',py:'chángqī',en:'long-term orientation',tip:'Focus on future rewards and persistence.'}
  ],
  dialogue:[
    {who:'bot',cn:'霍夫斯泰德文化维度理论的核心是什么？',en:'Core of Hofstedes cultural dimensions theory?'},
    {who:'you',cn:'它从六个维度分析不同文化的价值观差异。',en:'It analyzes value differences from six dimensions.'},
    {who:'bot',cn:'中国在权力距离维度上的表现如何？',en:'How does China perform on power distance?'},
    {who:'you',cn:'中国属于高权力距离文化尊重权威和等级制度。',en:'China is high power distance respecting authority and hierarchy.'},
    {who:'bot',cn:'集体主义文化在国际商务中有什么影响？',en:'Impact of collectivism in international business?'},
    {who:'you',cn:'决策过程通常更注重团队共识而非个人决断。',en:'Decision-making emphasizes team consensus.'},
    {who:'bot',cn:'长期导向对商业模式有什么影响？',en:'Effect of long-term orientation on business?'},
    {who:'you',cn:'长期导向的文化更注重关系建设和长远利益。',en:'Long-term oriented cultures focus on relationships and long-term benefits.'}
  ]},
  {title:'国际商务礼仪', level:'HSK 8', icon:'fa-handshake',
  words:[
    {cn:'礼仪',py:'lǐyí',en:'etiquette',tip:'Conventions of polite behavior.'},
    {cn:'问候',py:'wènhòu',en:'greeting',tip:'Initial salutation in social interaction.'},
    {cn:'名片',py:'míngpiàn',en:'business card',tip:'Card with contact and title details.'},
    {cn:'禁忌',py:'jìnjì',en:'taboo',tip:'Prohibited or avoided practices.'},
    {cn:'着装',py:'zhuózhuāng',en:'dress code',tip:'Appropriate attire for occasions.'},
    {cn:'赴宴',py:'fùyàn',en:'banquet attendance',tip:'Attending formal dinners.'}
  ],
  dialogue:[
    {who:'bot',cn:'与日本客户初次见面有哪些礼仪需要注意？',en:'Etiquette for meeting Japanese clients?'},
    {who:'you',cn:'鞠躬致意双手递接名片尊称对方的姓氏加敬语。',en:'Bow present cards with both hands use honorifics.'},
    {who:'bot',cn:'中东地区的商务禁忌有哪些？',en:'Business taboos in Middle East?'},
    {who:'you',cn:'避免用左手递物女性着装需保守斋月期间注意作息。',en:'Avoid left hand women dress conservative respect Ramadan.'},
    {who:'bot',cn:'欧美国家的商务着装有什么要求？',en:'Business dress code in Europe and America?'},
    {who:'you',cn:'通常要求商务正装深色西装搭配浅色衬衫为经典选择。',en:'Business formal dark suit with light shirt classic.'},
    {who:'bot',cn:'商务宴请的座次安排有什么讲究？',en:'Seating arrangements for business banquets?'},
    {who:'you',cn:'主宾坐于主人右侧重要客人靠近主人就座。',en:'Guest of honor at hosts right important guests nearby.'}
  ]},
  {title:'文化适应', level:'HSK 8', icon:'fa-arrows-spin',
  words:[
    {cn:'适应',py:'shìyìng',en:'adaptation',tip:'Adjusting to a new cultural environment.'},
    {cn:'冲击',py:'chōngjī',en:'shock',tip:'Disorientation experienced in a new culture.'},
    {cn:'认同',py:'rèntóng',en:'identity',tip:'Sense of belonging to a culture.'},
    {cn:'融合',py:'rónghé',en:'integration',tip:'Combining aspects of different cultures.'},
    {cn:'包容',py:'bāoróng',en:'tolerance',tip:'Acceptance of cultural differences.'},
    {cn:'边缘',py:'biānyuán',en:'marginalization',tip:'Feeling excluded from both cultures.'}
  ],
  dialogue:[
    {who:'bot',cn:'文化适应通常经历哪些阶段？',en:'Stages of cultural adaptation?'},
    {who:'you',cn:'蜜月期文化冲击期调整期和适应期四个阶段。',en:'Honeymoon shock adjustment and adaptation.'},
    {who:'bot',cn:'如何应对文化冲击带来的压力？',en:'How to cope with culture shock?'},
    {who:'you',cn:'保持开放心态主动学习当地文化建立社交支持网络。',en:'Keep open mind learn local culture build support networks.'},
    {who:'bot',cn:'文化融合与同化有什么区别？',en:'Difference between integration and assimilation?'},
    {who:'you',cn:'融合是保留母文化的同时接纳新文化同化则完全放弃。',en:'Integration retains original culture assimilation abandons it.'},
    {who:'bot',cn:'如何避免文化边缘化？',en:'How to avoid cultural marginalization?'},
    {who:'you',cn:'积极与两种文化群体互动找到平衡点而非偏废一方。',en:'Interact with both groups find balance.'}
  ]},
  {title:'全球领导力', level:'HSK 8', icon:'fa-user-tie',
  words:[
    {cn:'领导',py:'lǐngdǎo',en:'leadership',tip:'Guiding and directing teams.'},
    {cn:'愿景',py:'yuànjǐng',en:'vision',tip:'Future-oriented strategic direction.'},
    {cn:'授权',py:'shòuquán',en:'empowerment',tip:'Delegating power to subordinates.'},
    {cn:'激励',py:'jīlì',en:'motivation',tip:'Inspiring others to perform.'},
    {cn:'情商',py:'qíngshāng',en:'emotional quotient',tip:'Ability to manage emotions.'},
    {cn:'变革',py:'biàngé',en:'change management',tip:'Guiding organizational change.'}
  ],
  dialogue:[
    {who:'bot',cn:'全球领导者最重要的素质是什么？',en:'Most important quality of a global leader?'},
    {who:'you',cn:'文化智商和适应能力比专业知识更为关键。',en:'Cultural intelligence and adaptability are more critical.'},
    {who:'bot',cn:'如何有效领导多元化团队？',en:'How to lead diverse teams?'},
    {who:'you',cn:'尊重文化差异采取包容性领导风格因人制宜。',en:'Respect differences adopt inclusive style tailor approaches.'},
    {who:'bot',cn:'情商在跨文化领导中有什么作用？',en:'Role of EQ in cross-cultural leadership?'},
    {who:'you',cn:'高情商有助于理解不同文化背景下的情感表达和沟通方式。',en:'High EQ helps understand emotions across cultures.'},
    {who:'bot',cn:'如何进行跨文化变革管理？',en:'How to manage cross-cultural change?'},
    {who:'you',cn:'充分考虑不同文化对变革的态度采取循序渐进的策略。',en:'Consider cultural attitudes toward change adopt gradual strategy.'}
  ]}
,
  {title:'多元文化团队', level:'HSK 8', icon:'fa-users',
  words:[
    {cn:'多元',py:'duōyuán',en:'diversity',tip:'Variety of backgrounds and perspectives.'},
    {cn:'协作',py:'xiézuò',en:'collaboration',tip:'Working together effectively.'},
    {cn:'冲突',py:'chōngtū',en:'conflict',tip:'Disagreement or friction in teams.'},
    {cn:'共识',py:'gòngshí',en:'consensus',tip:'Mutual agreement within group.'},
    {cn:'包容',py:'bāoróng',en:'inclusion',tip:'Ensuring all members feel valued.'},
    {cn:'协同',py:'xiétóng',en:'synergy',tip:'Combined effect greater than sum of parts.'}
  ],
  dialogue:[
    {who:'bot',cn:'多元文化团队面临的最大挑战是什么？',en:'Biggest challenge for multicultural teams?'},
    {who:'you',cn:'沟通障碍和文化误解最容易导致团队效能下降。',en:'Communication barriers and cultural misunderstandings.'},
    {who:'bot',cn:'如何促进团队协作？',en:'How to promote collaboration?'},
    {who:'you',cn:'建立明确的团队规范鼓励开放式对话定期团建活动。',en:'Clear norms open dialogue regular team building.'},
    {who:'bot',cn:'团队成员之间产生冲突如何化解？',en:'How to resolve team conflicts?'},
    {who:'you',cn:'首先了解冲突的文化根源然后通过第三方调解。',en:'Understand cultural roots then use mediation.'},
    {who:'bot',cn:'如何发挥多元文化的协同效应？',en:'How to leverage multicultural synergy?'},
    {who:'you',cn:'将文化差异视为创新源泉充分利用多元视角解决问题。',en:'View differences as innovation source leverage diverse perspectives.'}
  ]},
  {title:'跨文化谈判', level:'HSK 8', icon:'fa-people-arrows',
  words:[
    {cn:'谈判',py:'tánpàn',en:'negotiation',tip:'Discussion to reach agreement.'},
    {cn:'风格',py:'fēnggé',en:'style',tip:'Characteristic approach to negotiation.'},
    {cn:'关系',py:'guānxì',en:'relationship',tip:'Personal connections crucial in China.'},
    {cn:'面子',py:'miànzi',en:'face',tip:'Social standing and respect.'},
    {cn:'间接',py:'jiànjiē',en:'indirect communication',tip:'Implying rather than stating directly.'},
    {cn:'耐心',py:'nàixīn',en:'patience',tip:'Tolerance for delay in negotiations.'}
  ],
  dialogue:[
    {who:'bot',cn:'中方和美方的谈判风格有什么不同？',en:'Differences between Chinese and American styles?'},
    {who:'you',cn:'中方注重关系先行美方更关注合同条款和效率。',en:'Chinese emphasize relationships Americans focus on contracts.'},
    {who:'bot',cn:'如何在谈判中顾及对方的面子？',en:'How to save face during negotiations?'},
    {who:'you',cn:'避免公开直接拒绝采用委婉的表达方式。',en:'Avoid public refusal use委婉 expressions.'},
    {who:'bot',cn:'间接沟通风格在谈判中有什么优势？',en:'Advantages of indirect communication?'},
    {who:'you',cn:'可以避免正面冲突为双方留下回旋余地。',en:'Avoids direct conflict leaves room for maneuvering.'},
    {who:'bot',cn:'跨文化谈判中最需要的是什么？',en:'What is most needed in cross-cultural negotiations?'},
    {who:'you',cn:'耐心和文化敏感性是达成成功协议的关键。',en:'Patience and cultural sensitivity are key.'}
  ]},
  {title:'会议报告', level:'HSK 8', icon:'fa-users-viewfinder',
  words:[
    {cn:'报告',py:'bàogào',en:'report',tip:'Formal delivery of information.'},
    {cn:'数据',py:'shùjù',en:'data',tip:'Quantitative information presented.'},
    {cn:'趋势',py:'qūshì',en:'trend',tip:'Pattern of change over time.'},
    {cn:'建议',py:'jiànyì',en:'recommendation',tip:'Suggested course of action.'},
    {cn:'反馈',py:'fǎnkuì',en:'feedback',tip:'Audience response to presentation.'},
    {cn:'总结',py:'zǒngjié',en:'summary',tip:'Recap of key points.'}
  ],
  dialogue:[
    {who:'bot',cn:'会议报告的开场应该怎样设计？',en:'How to design a meeting report opening?'},
    {who:'you',cn:'先感谢与会者然后简要说明报告的目的和结构。',en:'Thank attendees briefly explain purpose and structure.'},
    {who:'bot',cn:'如何呈现数据最为有效？',en:'How to present data most effectively?'},
    {who:'you',cn:'使用图表可视化展示关键数据避免信息过载。',en:'Use charts to visualize key data avoid overload.'},
    {who:'bot',cn:'分析趋势时应该注意什么？',en:'What to note when analyzing trends?'},
    {who:'you',cn:'既要指出积极趋势也要坦诚面对负面走势。',en:'Point out positives and honestly address negatives.'},
    {who:'bot',cn:'报告结束时如何提出建议？',en:'How to make recommendations?'},
    {who:'you',cn:'建议要具体可行并说明预期效果和所需资源。',en:'Specific feasible recommendations with expected effects and resources.'}
  ]},
  {title:'项目推介', level:'HSK 8', icon:'fa-rocket',
  words:[
    {cn:'项目',py:'xiàngmù',en:'project',tip:'Planned undertaking with clear goals.'},
    {cn:'提案',py:'tí\'àn',en:'proposal',tip:'Formal presentation of a project idea.'},
    {cn:'亮点',py:'liàngdiǎn',en:'highlight',tip:'Most distinctive or attractive feature.'},
    {cn:'竞争',py:'jìngzhēng',en:'competition',tip:'Rival offerings in the market.'},
    {cn:'优势',py:'yōushì',en:'advantage',tip:'Strengths over competitors.'},
    {cn:'回报',py:'huíbào',en:'return',tip:'Financial or strategic benefit.'}
  ],
  dialogue:[
    {who:'bot',cn:'项目推介的核心内容是什么？',en:'Core contents of a project pitch?'},
    {who:'you',cn:'项目概述市场分析核心优势预期回报和团队介绍。',en:'Overview market analysis advantages returns team intro.'},
    {who:'bot',cn:'如何突出项目的亮点？',en:'How to highlight project features?'},
    {who:'you',cn:'用数据和案例说话把最有吸引力的卖点放在前面。',en:'Let data and cases speak lead with attractive selling points.'},
    {who:'bot',cn:'竞争对手分析应该包括哪些方面？',en:'What to include in competitor analysis?'},
    {who:'you',cn:'竞争对手的优劣势市场定位以及差异化策略。',en:'Competitor strengths weaknesses positioning and differentiation.'},
    {who:'bot',cn:'投资回报率的预测需要多详细？',en:'How detailed should ROI projection be?'},
    {who:'you',cn:'至少提供三年期财务预测包含乐观和保守两种情景。',en:'At least 3-year forecast with optimistic and conservative scenarios.'}
  ]},
  {title:'视觉辅助', level:'HSK 8', icon:'fa-chart-bar',
  words:[
    {cn:'幻灯片',py:'huàndēngpiàn',en:'slides',tip:'Visual aid for presentations.'},
    {cn:'图表',py:'túbiǎo',en:'chart',tip:'Graphical representation of data.'},
    {cn:'配色',py:'pèisè',en:'color scheme',tip:'Color coordination for visuals.'},
    {cn:'字体',py:'zìtǐ',en:'font',tip:'Typeface used in slides.'},
    {cn:'动画',py:'dònghuà',en:'animation',tip:'Motion effects in presentations.'},
    {cn:'排版',py:'páibǎn',en:'layout',tip:'Arrangement of visual elements.'}
  ],
  dialogue:[
    {who:'bot',cn:'制作演示幻灯片的基本原则是什么？',en:'Basic principles of creating slides?'},
    {who:'you',cn:'少即是多每页聚焦一个核心信息避免文字堆砌。',en:'Less is more one core message per slide avoid text clutter.'},
    {who:'bot',cn:'如何选择合适的配色方案？',en:'How to choose color scheme?'},
    {who:'you',cn:'使用品牌色为主色调搭配一两种辅助色保持对比度。',en:'Brand colors as primary with one or two accents.'},
    {who:'bot',cn:'字体大小有什么讲究？',en:'Font size guidelines?'},
    {who:'you',cn:'标题至少三十二号正文二十四号以上确保后排可见。',en:'Title 32pt body 24pt or larger visible from back.'},
    {who:'bot',cn:'动画效果应该如何使用？',en:'How to use animations?'},
    {who:'you',cn:'适度使用仅在有需要时引导注意力避免花哨分散。',en:'Use sparingly only to guide attention avoid distractions.'}
  ]},
  {title:'问答技巧', level:'HSK 8', icon:'fa-circle-question',
  words:[
    {cn:'提问',py:'tíwèn',en:'questioning',tip:'Audience queries during Q and A.'},
    {cn:'回答',py:'huídá',en:'answering',tip:'Responding to audience questions.'},
    {cn:'应对',py:'yìngduì',en:'handle',tip:'Dealing with difficult questions.'},
    {cn:'控场',py:'kòngchǎng',en:'stage control',tip:'Managing the Q and A session.'},
    {cn:'引导',py:'yǐndǎo',en:'guide',tip:'Steering the conversation.'},
    {cn:'收尾',py:'shōuwěi',en:'wrap-up',tip:'Concluding the Q and A session.'}
  ],
  dialogue:[
    {who:'bot',cn:'问答环节应该安排在什么时候？',en:'When should Q and A be arranged?'},
    {who:'you',cn:'可以在演讲结束后集中进行也可以在每部分后穿插。',en:'At end or after each section.'},
    {who:'bot',cn:'遇到刁钻问题怎么办？',en:'How to handle tough questions?'},
    {who:'you',cn:'保持冷静先复述问题以示确认然后坦诚回答。',en:'Stay calm repeat question for confirmation answer honestly.'},
    {who:'bot',cn:'如果不知道答案如何应对？',en:'What if you dont know the answer?'},
    {who:'you',cn:'诚实说明并承诺会后提供补充信息。',en:'Honestly say so promise to follow up.'},
    {who:'bot',cn:'如何有效控制问答环节的时间？',en:'How to control Q and A timing?'},
    {who:'you',cn:'提前设定时限准备一两个备用问题用于引导。',en:'Set time limit prepare backup questions.'}
  ]},
  {title:'即兴演讲', level:'HSK 8', icon:'fa-bolt',
  words:[
    {cn:'即兴',py:'jíxìng',en:'impromptu',tip:'Spontaneous without preparation.'},
    {cn:'临场',py:'línchǎng',en:'on the spot',tip:'In the moment performance.'},
    {cn:'构思',py:'gòusī',en:'structure mentally',tip:'Quickly organizing thoughts.'},
    {cn:'开场',py:'kāichǎng',en:'opening line',tip:'First words of an impromptu speech.'},
    {cn:'条理',py:'tiáolǐ',en:'logical order',tip:'Clear and organized thinking.'},
    {cn:'应变',py:'yìngbiàn',en:'adaptability',tip:'Responding to unexpected events.'}
  ],
  dialogue:[
    {who:'bot',cn:'即兴演讲最大的难点是什么？',en:'Biggest challenge of impromptu speaking?'},
    {who:'you',cn:'在短时间内组织出有逻辑有层次的内容。',en:'Organizing logical content in short time.'},
    {who:'bot',cn:'有没有快速构思的方法？',en:'Quick structuring methods?'},
    {who:'you',cn:'可以采用观点-理由-例子-结论的四步法。',en:'Use opinion-reason-example-conclusion four steps.'},
    {who:'bot',cn:'开场白有什么技巧？',en:'Opening line techniques?'},
    {who:'you',cn:'可以用一个引人深思的问题或一个简短的故事开场。',en:'Start with a thought-provoking question or brief story.'},
    {who:'bot',cn:'如何确保即兴演讲的条理性？',en:'How to ensure clarity?'},
    {who:'you',cn:'使用首先其次最后等逻辑连接词划分层次。',en:'Use logical connectors like first second finally.'}
  ]},
  {title:'总结陈词', level:'HSK 8', icon:'fa-flag',
  words:[
    {cn:'总结',py:'zǒngjié',en:'summarize',tip:'Condensing key points.'},
    {cn:'强调',py:'qiángdiào',en:'emphasize',tip:'Stressing important messages.'},
    {cn:'呼吁',py:'hūyù',en:'appeal',tip:'Urging the audience to act.'},
    {cn:'展望',py:'zhǎnwàng',en:'outlook',tip:'Looking towards the future.'},
    {cn:'感谢',py:'gǎnxiè',en:'thanks',tip:'Expressing gratitude.'},
    {cn:'有力',py:'yǒulì',en:'powerful',tip:'Impactful closing delivery.'}
  ],
  dialogue:[
    {who:'bot',cn:'优秀的总结陈词应该达到什么效果？',en:'Effect of an excellent closing statement?'},
    {who:'you',cn:'让听众记住核心信息并受到激励采取行动。',en:'Make audience remember and feel motivated to act.'},
    {who:'bot',cn:'如何重新强调主要观点？',en:'How to re-emphasize main points?'},
    {who:'you',cn:'用更精炼的语言重述呼应演讲开头的承诺。',en:'Restate concisely echoing the opening promise.'},
    {who:'bot',cn:'呼吁行动应该怎样措辞？',en:'How to phrase call to action?'},
    {who:'you',cn:'使用祈使句直接明确让听众知道下一步该做什么。',en:'Use imperative sentences direct and clear.'},
    {who:'bot',cn:'结尾的感谢语有什么讲究？',en:'Tips for closing thanks?'},
    {who:'you',cn:'真诚而简洁配合适当的肢体语言留下良好印象。',en:'Sincere brief with appropriate body language.'}
  ]}
,
  {title:'学位论文', level:'HSK 8', icon:'fa-book',
  words:[
    {cn:'论文',py:'lùnwén',en:'thesis',tip:'Formal academic document.'},
    {cn:'选题',py:'xuǎntí',en:'topic selection',tip:'Choosing a research subject.'},
    {cn:'开题',py:'kāití',en:'proposal defense',tip:'Presenting and defending the research plan.'},
    {cn:'答辩',py:'dábiàn',en:'oral defense',tip:'Viva voce examination of thesis.'},
    {cn:'原创',py:'yuánchuàng',en:'originality',tip:'Novel contribution to knowledge.'},
    {cn:'引用',py:'yǐnyòng',en:'citation',tip:'Citing sources in academic work.'}
  ],
  dialogue:[
    {who:'bot',cn:'学位论文选题需要注意什么？',en:'What to note in choosing a dissertation topic?'},
    {who:'you',cn:'选题要有学术价值和创新性同时要兼顾可行性。',en:'Topic should have academic value novelty and feasibility.'},
    {who:'bot',cn:'开题报告包含哪些部分？',en:'What parts does the proposal include?'},
    {who:'you',cn:'研究背景文献综述研究问题方法设计和预期成果。',en:'Background literature review questions methodology outcomes.'},
    {who:'bot',cn:'如何确保论文的原创性？',en:'How to ensure originality?'},
    {who:'you',cn:'避免抄袭合理引用在已有研究基础上提出独立见解。',en:'Avoid plagiarism cite properly present independent views.'},
    {who:'bot',cn:'答辩时常见的问题有哪些？',en:'Common questions during defense?'},
    {who:'you',cn:'研究方法的选择依据结论的可靠性创新点和局限性。',en:'Methodology rationale conclusion reliability innovations limitations.'}
  ]},
  {title:'期刊文章', level:'HSK 8', icon:'fa-file-lines',
  words:[
    {cn:'期刊',py:'qīkān',en:'journal',tip:'Academic periodical publication.'},
    {cn:'投稿',py:'tóugǎo',en:'submission',tip:'Sending manuscript to a journal.'},
    {cn:'审稿',py:'shěngǎo',en:'peer review',tip:'Evaluation by subject experts.'},
    {cn:'修改',py:'xiūgǎi',en:'revision',tip:'Making corrections per reviewer comments.'},
    {cn:'采纳',py:'cǎinà',en:'acceptance',tip:'Manuscript approved for publication.'},
    {cn:'影响',py:'yǐngxiǎng',en:'impact factor',tip:'Journals citation influence metric.'}
  ],
  dialogue:[
    {who:'bot',cn:'向核心期刊投稿有哪些要求？',en:'Requirements for submitting to core journals?'},
    {who:'you',cn:'论文需符合期刊定位格式规范研究具有创新性。',en:'Align with journal focus follow format show innovation.'},
    {who:'bot',cn:'审稿周期一般多长？',en:'Typical review period?'},
    {who:'you',cn:'通常在三个月到半年之间顶级期刊可能更久。',en:'Three months to half a year top journals longer.'},
    {who:'bot',cn:'收到审稿意见后如何修改？',en:'How to revise after reviewer comments?'},
    {who:'you',cn:'逐条回应审稿人的意见说明修改内容礼貌解释不同观点。',en:'Address each comment explain revisions politely.'},
    {who:'bot',cn:'投稿被拒后应该怎么办？',en:'What to do after rejection?'},
    {who:'you',cn:'认真分析拒稿原因修改完善后改投其他合适期刊。',en:'Analyze reasons revise and resubmit to another journal.'}
  ]},
  {title:'基金申请', level:'HSK 8', icon:'fa-hand-holding-dollar',
  words:[
    {cn:'基金',py:'jījīn',en:'grant',tip:'Financial support for research.'},
    {cn:'申报',py:'shēnbào',en:'application',tip:'Formal request for funding.'},
    {cn:'预算',py:'yùsuàn',en:'budget',tip:'Detailed funding plan.'},
    {cn:'评审',py:'píngshěn',en:'review',tip:'Evaluation of grant proposals.'},
    {cn:'资助',py:'zīzhù',en:'funding',tip:'Financial award for research.'},
    {cn:'结题',py:'jiétí',en:'project completion',tip:'Final report and closeout.'}
  ],
  dialogue:[
    {who:'bot',cn:'基金申请书的核心要素是什么？',en:'Core elements of a grant proposal?'},
    {who:'you',cn:'科学问题的重要性研究方案的创新性和可行性团队能力。',en:'Importance innovation feasibility team capability.'},
    {who:'bot',cn:'预算编制需要注意什么？',en:'What to note in budget preparation?'},
    {who:'you',cn:'根据实际需求合理编制避免虚高或遗漏重要开支。',en:'Prepare reasonably based on actual needs.'},
    {who:'bot',cn:'如何提高基金申请的成功率？',en:'How to increase success rate?'},
    {who:'you',cn:'按照评审标准精心撰写突出前沿性和预期贡献。',en:'Follow criteria highlight frontier and expected contributions.'},
    {who:'bot',cn:'结题报告应包含哪些内容？',en:'What should the final report include?'},
    {who:'you',cn:'研究进展主要成果经费使用情况和后续研究计划。',en:'Progress achievements fund usage and follow-up plans.'}
  ]},
  {title:'文献综合', level:'HSK 8', icon:'fa-book-open',
  words:[
    {cn:'综述',py:'zōngshù',en:'literature review',tip:'Systematic analysis of published work.'},
    {cn:'脉络',py:'màiluò',en:'trajectory',tip:'Developmental path of research.'},
    {cn:'评述',py:'píngshù',en:'critical commentary',tip:'Evaluating existing research.'},
    {cn:'分类',py:'fēnlèi',en:'categorization',tip:'Grouping literature by theme.'},
    {cn:'比较',py:'bǐjiào',en:'comparison',tip:'Contrasting different studies.'},
    {cn:'整合',py:'zhěnghé',en:'synthesis',tip:'Combining insights from multiple sources.'}
  ],
  dialogue:[
    {who:'bot',cn:'文献综述如何组织才显得有逻辑？',en:'How to organize a literature review logically?'},
    {who:'you',cn:'按主题分类或按时间脉络梳理从宏观到微观递进。',en:'By theme or chronology macro to micro.'},
    {who:'bot',cn:'如何评价已有研究的贡献和不足？',en:'How to evaluate existing research?'},
    {who:'you',cn:'客观公正肯定前人成果指出方法论或视角上的局限。',en:'Be objective acknowledge achievements note limitations.'},
    {who:'bot',cn:'综述中是否需要表达自己的观点？',en:'Should you express your own views?'},
    {who:'you',cn:'需要在综合梳理的基础上提出评述和批判性思考。',en:'Yes offer commentary and critical thinking.'},
    {who:'bot',cn:'怎样才算一篇优秀的文献综述？',en:'What makes an excellent literature review?'},
    {who:'you',cn:'覆盖面广分类合理评述深刻清晰指出研究空白。',en:'Broad coverage reasonable categories profound comments identify gaps.'}
  ]},
  {title:'审稿回复', level:'HSK 8', icon:'fa-message',
  words:[
    {cn:'审稿',py:'shěngǎo',en:'peer review',tip:'Scholarly evaluation process.'},
    {cn:'修改',py:'xiūgǎi',en:'revision',tip:'Changes made to the manuscript.'},
    {cn:'回复',py:'huífù',en:'response',tip:'Authors reply to reviewers.'},
    {cn:'逐条',py:'zhútiáo',en:'point by point',tip:'Addressing each comment individually.'},
    {cn:'解释',py:'jiěshì',en:'explanation',tip:'Clarifying the rationale for decisions.'},
    {cn:'反驳',py:'fǎnbó',en:'rebuttal',tip:'Disagreeing with reviewer respectfully.'}
  ],
  dialogue:[
    {who:'bot',cn:'收到审稿意见后第一步应该做什么？',en:'First step after receiving reviewer comments?'},
    {who:'you',cn:'冷静通读所有意见区分关键问题和次要建议。',en:'Calmly read all distinguish critical from minor.'},
    {who:'bot',cn:'如何撰写回复信？',en:'How to write a response letter?'},
    {who:'you',cn:'逐条回复先致谢然后说明修改内容或解释原因。',en:'Respond point by point thank then explain.'},
    {who:'bot',cn:'如果不同意审稿人的意见怎么办？',en:'What if you disagree?'},
    {who:'you',cn:'礼貌地提出理由和证据态度谦逊措辞专业。',en:'Politely present reasons with humble professional wording.'},
    {who:'bot',cn:'修改稿提交后还需要注意什么？',en:'What to note after resubmission?'},
    {who:'you',cn:'耐心等待下一轮审稿同时可以准备备用计划。',en:'Wait patiently while preparing contingency plan.'}
  ]},
  {title:'研究计划', level:'HSK 8', icon:'fa-compass',
  words:[
    {cn:'计划',py:'jìhuà',en:'research plan',tip:'Blueprint for upcoming research.'},
    {cn:'目标',py:'mùbiāo',en:'objective',tip:'Specific aims of the study.'},
    {cn:'方法',py:'fāngfǎ',en:'method',tip:'Approach to conducting research.'},
    {cn:'进度',py:'jìndù',en:'timeline',tip:'Schedule of research activities.'},
    {cn:'风险',py:'fēngxiǎn',en:'risk',tip:'Potential obstacles and solutions.'},
    {cn:'成果',py:'chéngguǒ',en:'deliverable',tip:'Expected outputs of the research.'}
  ],
  dialogue:[
    {who:'bot',cn:'研究计划通常包括哪些部分？',en:'What does a research plan include?'},
    {who:'you',cn:'背景意义目标问题方法设计进度安排和预期成果。',en:'Background objectives methodology timeline outcomes.'},
    {who:'bot',cn:'研究目标应该如何设定？',en:'How to set research objectives?'},
    {who:'you',cn:'遵循SMART原则具体可衡量可实现相关和有时限。',en:'Follow SMART principle.'},
    {who:'bot',cn:'如何评估研究风险？',en:'How to assess research risks?'},
    {who:'you',cn:'列出潜在的技术管理和伦理风险制定应对措施。',en:'List technical management ethical risks plan countermeasures.'},
    {who:'bot',cn:'预期成果包括哪些形式？',en:'What forms do outcomes take?'},
    {who:'you',cn:'学术论文研究报告专利软件工具或政策建议。',en:'Papers reports patents software or policy recommendations.'}
  ]},
  {title:'调查报道', level:'HSK 8', icon:'fa-magnifying-glass',
  words:[
    {cn:'调查',py:'diàochá',en:'investigation',tip:'In-depth inquiry into a topic.'},
    {cn:'线索',py:'xiànsuǒ',en:'lead',tip:'Initial information for investigation.'},
    {cn:'取证',py:'qǔzhèng',en:'evidence gathering',tip:'Collecting proof for reporting.'},
    {cn:'核实',py:'héshí',en:'verification',tip:'Checking accuracy of information.'},
    {cn:'暗访',py:'ànfǎng',en:'undercover reporting',tip:'Investigating without revealing identity.'},
    {cn:'真相',py:'zhēnxiàng',en:'truth',tip:'Actual facts uncovered.'}
  ],
  dialogue:[
    {who:'bot',cn:'调查报道的第一步是什么？',en:'First step in investigative reporting?'},
    {who:'you',cn:'确定选题后广泛搜集线索建立初步信息框架。',en:'Determine topic collect leads build framework.'},
    {who:'bot',cn:'如何保护匿名信源？',en:'How to protect anonymous sources?'},
    {who:'you',cn:'加密通信不记录可识别信息必要时与律师沟通。',en:'Encrypt communication no identifiable info consult lawyer.'},
    {who:'bot',cn:'暗访的法律边界在哪里？',en:'Legal boundaries of undercover reporting?'},
    {who:'you',cn:'不得侵犯个人隐私权避免诱骗或违法取证。',en:'No privacy violations no entrapment.'},
    {who:'bot',cn:'如何确保报道内容的准确性？',en:'How to ensure accuracy?'},
    {who:'you',cn:'多方核实交叉验证每个事实至少有两个独立来源。',en:'Multi-source verification each fact at least two sources.'}
  ]},
  {title:'社论写作', level:'HSK 8', icon:'fa-pen-nib',
  words:[
    {cn:'社论',py:'shèlùn',en:'editorial',tip:'Newspapers official opinion piece.'},
    {cn:'立场',py:'lìchǎng',en:'standpoint',tip:'The publications position on an issue.'},
    {cn:'论点',py:'lùndiǎn',en:'argument',tip:'Central claim of the editorial.'},
    {cn:'论据',py:'lùnjù',en:'supporting evidence',tip:'Facts backing up the argument.'},
    {cn:'讽刺',py:'fěngcì',en:'satire',tip:'Rhetorical device for criticism.'},
    {cn:'呼吁',py:'hūyù',en:'appeal',tip:'Urging readers to action or thought.'}
  ],
  dialogue:[
    {who:'bot',cn:'社论写作与新闻报道有什么区别？',en:'Difference between editorial and news?'},
    {who:'you',cn:'社论带有鲜明的立场和观点新闻要求客观中立。',en:'Editorials have clear stance news is objective.'},
    {who:'bot',cn:'社论的结构通常如何安排？',en:'Typical editorial structure?'},
    {who:'you',cn:'开头点明立场中间展开论证结尾提出号召或建议。',en:'State stance develop arguments call to action.'},
    {who:'bot',cn:'如何在社论中运用讽刺手法？',en:'How to use satire in editorials?'},
    {who:'you',cn:'含蓄巧妙点到为止避免过度攻击性失去说服力。',en:'Subtle and restrained avoid excessive aggression.'},
    {who:'bot',cn:'社论的结尾为什么要强调呼吁？',en:'Why emphasize call to action?'},
    {who:'you',cn:'社论旨在影响舆论有力的呼吁激发读者行动。',en:'To influence opinion strong call inspires action.'}
  ]},
  {title:'纪录片脚本', level:'HSK 8', icon:'fa-film',
  words:[
    {cn:'纪录片',py:'jìlùpiàn',en:'documentary',tip:'Non-fiction film production.'},
    {cn:'脚本',py:'jiǎoběn',en:'script',tip:'Written plan for a film.'},
    {cn:'旁白',py:'pángbái',en:'narration',tip:'Voice-over commentary.'},
    {cn:'采访',py:'cǎifǎng',en:'interview',tip:'On-camera conversations.'},
    {cn:'场景',py:'chǎngjǐng',en:'scene',tip:'Specific location or segment.'},
    {cn:'剪辑',py:'jiǎnji',en:'editing',tip:'Assembling footage into final product.'}
  ],
  dialogue:[
    {who:'bot',cn:'纪录片脚本的写作从何入手？',en:'Where to start writing a documentary script?'},
    {who:'you',cn:'确定主题和核心叙事线然后设计段落结构和采访对象。',en:'Determine theme narrative arc design segments.'},
    {who:'bot',cn:'旁白在纪录片中起什么作用？',en:'Role of narration in documentaries?'},
    {who:'you',cn:'旁白串联画面提供背景信息引导观众情绪和思考。',en:'Connect visuals provide background guide emotions.'},
    {who:'bot',cn:'如何设计采访问题？',en:'How to design interview questions?'},
    {who:'you',cn:'开放性问题为主引导受访者讲述故事而非简单回答。',en:'Open-ended questions elicit stories not simple answers.'},
    {who:'bot',cn:'脚本如何为后期剪辑预留空间？',en:'How to leave room for editing?'},
    {who:'you',cn:'标注关键画面和可能的转场方式保持一定灵活性。',en:'Mark key visuals and transitions maintain flexibility.'}
  ]},
  {title:'采访技巧', level:'HSK 8', icon:'fa-microphone',
  words:[
    {cn:'采访',py:'cǎifǎng',en:'interview',tip:'Journalistic Q and A session.'},
    {cn:'提问',py:'tíwèn',en:'questioning',tip:'Asking effective questions.'},
    {cn:'倾听',py:'qīngtīng',en:'active listening',tip:'Paying close attention to answers.'},
    {cn:'追问',py:'zhuīwèn',en:'follow-up',tip:'Probing deeper into a response.'},
    {cn:'记录',py:'jìlù',en:'note-taking',tip:'Capturing key information.'},
    {cn:'引导',py:'yǐndǎo',en:'steering',tip:'Guiding the conversation.'}
  ],
  dialogue:[
    {who:'bot',cn:'采访前需要做哪些准备？',en:'Preparations before an interview?'},
    {who:'you',cn:'深入了解受访者背景拟定问题清单熟悉设备。',en:'Research background prepare questions know equipment.'},
    {who:'bot',cn:'如何打破采访中的沉默尴尬？',en:'How to break awkward silence?'},
    {who:'you',cn:'换个角度重新提问或分享相关信息引发回应。',en:'Rephrase or share info to prompt response.'},
    {who:'bot',cn:'怎样进行有效的追问？',en:'How to conduct effective follow-up?'},
    {who:'you',cn:'基于回答深入挖掘关注细节和前后矛盾之处。',en:'Delve deeper focus on details and inconsistencies.'},
    {who:'bot',cn:'采访记录应该如何处理？',en:'How to handle interview records?'},
    {who:'you',cn:'采访结束后尽快整理核对直接引语确保准确。',en:'Organize soon after verify direct quotes for accuracy.'}
  ]},
  {title:'新闻分析', level:'HSK 8', icon:'fa-chart-simple',
  words:[
    {cn:'新闻',py:'xīnwén',en:'news',tip:'Current events reporting.'},
    {cn:'分析',py:'fēnxī',en:'analysis',tip:'Examining news in depth.'},
    {cn:'背景',py:'bèijǐng',en:'background',tip:'Context of the news event.'},
    {cn:'影响',py:'yǐngxiǎng',en:'impact',tip:'Consequences of the event.'},
    {cn:'趋势',py:'qūshì',en:'trend',tip:'Broader patterns in events.'},
    {cn:'解读',py:'jiědú',en:'interpretation',tip:'Offering informed perspective.'}
  ],
  dialogue:[
    {who:'bot',cn:'新闻分析与纯新闻报道有什么不同？',en:'Difference between news analysis and reporting?'},
    {who:'you',cn:'新闻分析提供深度解读和前瞻性判断而非仅事实陈述。',en:'Analysis provides depth and foresight beyond facts.'},
    {who:'bot',cn:'如何挖掘新闻事件背后的深层原因？',en:'How to uncover deeper causes?'},
    {who:'you',cn:'从经济政治社会等多角度分析寻找因果链条。',en:'Analyze from economic political social angles.'},
    {who:'bot',cn:'分析中如何保持客观公正？',en:'How to remain objective?'},
    {who:'you',cn:'呈现多方观点明确指出分析中的假设和不确定因素。',en:'Present multiple views note assumptions and uncertainties.'},
    {who:'bot',cn:'新闻趋势预测的依据是什么？',en:'Basis for news trend forecasting?'},
    {who:'you',cn:'历史规律数据模型和专家意见的综合判断。',en:'Historical patterns data models and expert opinions.'}
  ]},
  {title:'新闻评论', level:'HSK 8', icon:'fa-comment',
  words:[
    {cn:'评论',py:'pínglùn',en:'commentary',tip:'Opinion-based analysis of news.'},
    {cn:'观点',py:'guāndiǎn',en:'viewpoint',tip:'The writers perspective.'},
    {cn:'尖锐',py:'jiānruì',en:'sharp',tip:'Forceful and direct criticism.'},
    {cn:'理性',py:'lǐxìng',en:'rationality',tip:'Logical and reasoned approach.'},
    {cn:'论战',py:'lùnzhàn',en:'debate',tip:'Public exchange of opposing views.'},
    {cn:'说服',py:'shuōfú',en:'persuasion',tip:'Convincing readers of a position.'}
  ],
  dialogue:[
    {who:'bot',cn:'新闻评论的核心要素是什么？',en:'Core elements of news commentary?'},
    {who:'you',cn:'鲜明的观点严密的逻辑和充分的论据支撑。',en:'Clear viewpoint rigorous logic sufficient evidence.'},
    {who:'bot',cn:'如何在评论中保持理性客观？',en:'How to stay rational and objective?'},
    {who:'you',cn:'基于事实进行论证避免情绪化语言和人身攻击。',en:'Argue based on facts avoid emotional language.'},
    {who:'bot',cn:'评论的标题有什么要求？',en:'Requirements for commentary titles?'},
    {who:'you',cn:'简洁有力准确概括核心观点吸引读者注意。',en:'Concise powerful summarize core point attract readers.'},
    {who:'bot',cn:'如何增强评论的说服力？',en:'How to enhance persuasiveness?'},
    {who:'you',cn:'运用权威数据典型案例和逻辑推理引发共鸣。',en:'Use authoritative data cases and reasoning to resonate.'}
  ]}
,
  {title:'诗经', level:'HSK 9', icon:'fa-feather',
  words:[
    {cn:'诗经',py:'Shī Jīng',en:'Classic of Poetry',tip:'Oldest Chinese poetry collection 305 poems.'},
    {cn:'风雅颂',py:'fēng yǎ sòng',en:'Airs Odes Hymns',tip:'Three sections of the Book of Songs.'},
    {cn:'赋比兴',py:'fù bǐ xìng',en:'narrative comparison evocative image',tip:'Three rhetorical techniques in classical poetry.'},
    {cn:'关雎',py:'guān jū',en:'Ospreys',tip:'Famous opening poem of the Book of Songs.'},
    {cn:'比兴',py:'bǐ xìng',en:'metaphor and association',tip:'Using imagery to evoke emotion.'},
    {cn:'四言',py:'sì yán',en:'four-character meter',tip:'Dominant meter in the Book of Songs.'}
  ],
  dialogue:[
    {who:'bot',cn:'诗经在中国文学史上的地位如何？',en:'Status of the Book of Songs in Chinese literature?'},
    {who:'you',cn:'它是中国最早的诗歌总集开创了现实主义诗歌传统。',en:'It is the earliest poetry collection founding realist tradition.'},
    {who:'bot',cn:'风雅颂分别代表什么？',en:'What do Feng Ya Song represent?'},
    {who:'you',cn:'风是民俗歌谣雅是宫廷乐曲颂是祭祀乐章。',en:'Feng folk songs Ya court music Song hymns.'},
    {who:'bot',cn:'赋比兴三种手法如何理解？',en:'How to understand Fu Bi Xing?'},
    {who:'you',cn:'赋是直述比是比喻兴是借物起兴引发联想。',en:'Fu is direct Bi is metaphor Xing is evocative association.'},
    {who:'bot',cn:'关雎这首诗的主题是什么？',en:'Theme of Guan Ju?'},
    {who:'you',cn:'以雎鸠和鸣起兴表达对美好爱情的向往。',en:'Uses osprey calls to evoke longing for love.'}
  ]},
  {title:'史记', level:'HSK 9', icon:'fa-book',
  words:[
    {cn:'史记',py:'Shǐ Jì',en:'Records of the Grand Historian',tip:'Sima Qians monumental history.'},
    {cn:'本纪',py:'běnjì',en:'imperial biographies',tip:'Records of emperors reigns.'},
    {cn:'列传',py:'lièzhuàn',en:'biographies',tip:'Accounts of notable individuals.'},
    {cn:'世家',py:'shìjiā',en:'hereditary houses',tip:'Records of noble families.'},
    {cn:'纪传体',py:'jìzhuàntǐ',en:'biographical history style',tip:'Historical writing format pioneered by Sima Qian.'},
    {cn:'太史公',py:'Tàishǐgōng',en:'Grand Scribe',tip:'Title of Sima Qian historian.'}
  ],
  dialogue:[
    {who:'bot',cn:'史记的史学价值体现在哪里？',en:'Historical value of Records of the Grand Historian?'},
    {who:'you',cn:'它是中国第一部纪传体通史记载了三千多年历史。',en:'First biographical general history covering 3000 years.'},
    {who:'bot',cn:'史记的文学成就如何？',en:'Literary achievements?'},
    {who:'you',cn:'鲁迅称其为史家之绝唱无韵之离骚。',en:'Lu Xun called it the masterpiece of historians.'},
    {who:'bot',cn:'本纪和列传有什么区别？',en:'Difference between Benji and Liezhuan?'},
    {who:'you',cn:'本纪记载帝王事迹列传记载各类代表人物。',en:'Benji for emperors Liezhuan for notable figures.'},
    {who:'bot',cn:'司马迁的写作风格有什么特点？',en:'Features of Sima Qians writing style?'},
    {who:'you',cn:'文笔生动刻画入微寓褒贬于叙事之中。',en:'Vivid writing subtle praise and criticism in narratives.'}
  ]},
  {title:'唐诗', level:'HSK 9', icon:'fa-feather-pointed',
  words:[
    {cn:'唐诗',py:'Táng Shī',en:'Tang poetry',tip:'Golden age of Chinese poetry 618-907 CE.'},
    {cn:'格律',py:'gélǜ',en:'metrical pattern',tip:'Strict tonal and rhyme rules.'},
    {cn:'绝句',py:'juéjù',en:'quatrain',tip:'Four-line poem with strict rules.'},
    {cn:'律诗',py:'lǜshī',en:'regulated verse',tip:'Eight-line poem with parallel couplets.'},
    {cn:'李白',py:'Lǐ Bái',en:'Li Bai',tip:'Famous Tang poet known as the Immortal Poet.'},
    {cn:'杜甫',py:'Dù Fǔ',en:'Du Fu',tip:'Famous Tang poet known as the Sage Poet.'}
  ],
  dialogue:[
    {who:'bot',cn:'为什么唐诗被认为是古典诗歌的巅峰？',en:'Why is Tang poetry considered the peak?'},
    {who:'you',cn:'题材广泛名家辈出艺术成就达到了前所未有的高度。',en:'Broad themes many masters unprecedented artistic achievement.'},
    {who:'bot',cn:'绝句和律诗有什么不同？',en:'Difference between Jueju and Lushi?'},
    {who:'you',cn:'绝句四句律诗八句律诗要求中间两联对仗。',en:'Jueju 4 lines Lushi 8 with parallel couplets.'},
    {who:'bot',cn:'李白和杜甫的诗风有何差异？',en:'Differences between Li Bai and Du Fu?'},
    {who:'you',cn:'李白浪漫豪放杜甫沉郁顿挫。',en:'Li Bai romantic and bold Du Fu somber and profound.'},
    {who:'bot',cn:'唐诗的格律要求严格吗？',en:'Are Tang poetry meter rules strict?'},
    {who:'you',cn:'非常严格讲究平仄对仗和押韵。',en:'Very strict tone parallelism and rhyme.'}
  ]},
  {title:'宋词', level:'HSK 9', icon:'fa-music',
  words:[
    {cn:'宋词',py:'Sòng Cí',en:'Song ci poetry',tip:'Lyric poetry from the Song dynasty.'},
    {cn:'词牌',py:'cí pái',en:'lyric pattern',tip:'Fixed tune name for ci poems.'},
    {cn:'婉约',py:'wǎnyuē',en:'graceful and restrained',tip:'Elegant subtle style of ci poetry.'},
    {cn:'豪放',py:'háofàng',en:'bold and unconstrained',tip:'Passionate expansive style of ci poetry.'},
    {cn:'苏轼',py:'Sū Shì',en:'Su Shi',tip:'Great Song poet and essayist.'},
    {cn:'李清照',py:'Lǐ Qīngzhào',en:'Li Qingzhao',tip:'Famous female ci poet of the Song.'}
  ],
  dialogue:[
    {who:'bot',cn:'宋词与唐诗的主要区别是什么？',en:'Main differences between Song ci and Tang poetry?'},
    {who:'you',cn:'词有词牌依声填词句式长短不一更富音乐性。',en:'Ci follows tune patterns irregular lines more musical.'},
    {who:'bot',cn:'婉约派和豪放派如何区分？',en:'How to distinguish Wan Yue and Hao Fang?'},
    {who:'you',cn:'婉约派含蓄细腻豪放派气势磅礴。',en:'Wanyue subtle and refined Haofang bold and powerful.'},
    {who:'bot',cn:'苏轼的词有哪些特点？',en:'Features of Su Shis ci?'},
    {who:'you',cn:'题材广阔意境高远开豪放派先河。',en:'Broad themes lofty vision pioneered haofang style.'},
    {who:'bot',cn:'李清照的词风是怎样的？',en:'Li Qingzhaos style?'},
    {who:'you',cn:'前期清新婉约后期凄婉深沉。',en:'Early fresh and elegant later sad and profound.'}
  ]},
  {title:'红楼梦', level:'HSK 9', icon:'fa-book',
  words:[
    {cn:'红楼梦',py:'Hóng Lóu Mèng',en:'Dream of the Red Chamber',tip:'Greatest classical Chinese novel by Cao Xueqin.'},
    {cn:'贾宝玉',py:'Jiǎ Bǎoyù',en:'Jia Baoyu',tip:'Protagonist and reincarnation of a divine stone.'},
    {cn:'林黛玉',py:'Lín Dàiyù',en:'Lin Daiyu',tip:'Tragic heroine talented and sensitive.'},
    {cn:'大观园',py:'Dàguān Yuán',en:'Grand View Garden',tip:'Extravagant estate central to the novel.'},
    {cn:'金陵',py:'Jīnlíng',en:'Jinling',tip:'Old name for Nanjing setting of the novel.'},
    {cn:'十二钗',py:'shí\'èr chāi',en:'Twelve Beauties',tip:'Twelve main female characters of the novel.'}
  ],
  dialogue:[
    {who:'bot',cn:'红楼梦在中国文学史上的地位如何？',en:'Status of Dream of the Red Chamber?'},
    {who:'you',cn:'被誉为中国古典小说的巅峰之作百科全书式巨著。',en:'Peak of classical Chinese fiction an encyclopedic masterpiece.'},
    {who:'bot',cn:'全书的主线是什么？',en:'Main narrative thread?'},
    {who:'you',cn:'以贾宝玉林黛玉薛宝钗的爱情悲剧为主线描写贾府兴衰。',en:'Love tragedy of Baoyu Daiyu Baochai and Jia clan decline.'},
    {who:'bot',cn:'大观园在书中有什么象征意义？',en:'Symbolic meaning of Grand View Garden?'},
    {who:'you',cn:'既是青春乐园也是封建社会的缩影终将幻灭。',en:'Both a paradise of youth and a microcosm of feudal society.'},
    {who:'bot',cn:'红楼梦的语言艺术有何成就？',en:'Linguistic achievements?'},
    {who:'you',cn:'语言精妙人物对话鲜活个性化堪称语言艺术典范。',en:'Exquisite language vivid dialogue a model of linguistic art.'}
  ]},
  {title:'论语', level:'HSK 9', icon:'fa-graduation-cap',
  words:[
    {cn:'论语',py:'Lún Yǔ',en:'Analects',tip:'Collection of Confucius teachings.'},
    {cn:'孔子',py:'Kǒngzǐ',en:'Confucius',tip:'Great Chinese philosopher 551-479 BCE.'},
    {cn:'仁',py:'rén',en:'benevolence',tip:'Core Confucian virtue.'},
    {cn:'礼',py:'lǐ',en:'ritual propriety',tip:'Proper conduct and social norms.'},
    {cn:'君子',py:'jūnzǐ',en:'exemplary person',tip:'Ideal moral character in Confucianism.'},
    {cn:'中庸',py:'zhōngyōng',en:'doctrine of the mean',tip:'Balanced approach avoiding extremes.'}
  ],
  dialogue:[
    {who:'bot',cn:'论语的核心思想是什么？',en:'Core ideas of the Analects?'},
    {who:'you',cn:'以仁为核心以礼为规范倡导德治教化。',en:'Benevolence as core ritual as guide moral governance.'},
    {who:'bot',cn:'仁的含义是什么？',en:'Meaning of Ren?'},
    {who:'you',cn:'爱人克己复礼为仁推己及人。',en:'Love others self-restraint return to ritual empathy.'},
    {who:'bot',cn:'孔子所说的君子是什么样的？',en:'What is a Junzi according to Confucius?'},
    {who:'you',cn:'君子喻于义小人喻于利修身齐家治国平天下。',en:'Junzi values righteousness cultivates self and serves society.'},
    {who:'bot',cn:'中庸之道对我们有什么启示？',en:'What can we learn from Zhongyong?'},
    {who:'you',cn:'做事把握适度原则避免过犹不及。',en:'Practice moderation avoid excess and deficiency.'}
  ]},
  {title:'道德经', level:'HSK 9', icon:'fa-yin-yang',
  words:[
    {cn:'道德经',py:'Dào Dé Jīng',en:'Tao Te Ching',tip:'Foundational Daoist text by Laozi.'},
    {cn:'道',py:'dào',en:'the Way',tip:'Ultimate principle of the universe.'},
    {cn:'德',py:'dé',en:'virtue',tip:'Manifestation of the Way in action.'},
    {cn:'无为',py:'wúwéi',en:'non-action',tip:'Acting without forced effort.'},
    {cn:'自然',py:'zìrán',en:'spontaneity',tip:'Following the natural way of things.'},
    {cn:'老子',py:'Lǎozǐ',en:'Laozi',tip:'Legendary founder of Daoism.'}
  ],
  dialogue:[
    {who:'bot',cn:'道德经的主要思想是什么？',en:'Main ideas of the Tao Te Ching?'},
    {who:'you',cn:'道法自然无为而治提倡柔弱胜刚强。',en:'The Way follows nature non-action overcomes by softness.'},
    {who:'bot',cn:'道的含义如何理解？',en:'How to understand Dao?'},
    {who:'you',cn:'道可道非常道它是宇宙的本源和规律。',en:'The Dao that can be told is not the eternal Dao.'},
    {who:'bot',cn:'无为是否意味着什么都不做？',en:'Does Wuwei mean doing nothing?'},
    {who:'you',cn:'并非不作为而是顺应自然不妄为不过度干预。',en:'Not inaction but acting naturally without over-intervention.'},
    {who:'bot',cn:'道德经对现代社会有什么启示？',en:'Relevance to modern society?'},
    {who:'you',cn:'提倡简朴自然反对过度追求物质利益。',en:'Advocates simplicity and naturalness against materialism.'}
  ]},
  {title:'庄子', level:'HSK 9', icon:'fa-dove',
  words:[
    {cn:'庄子',py:'Zhuāngzǐ',en:'Zhuangzi',tip:'Daoist classic by Zhuang Zhou.'},
    {cn:'逍遥',py:'xiāoyáo',en:'free and unfettered',tip:'Ideal state of spiritual freedom.'},
    {cn:'齐物',py:'qíwù',en:'equality of things',tip:'All things are fundamentally one.'},
    {cn:'寓言',py:'yùyán',en:'parable',tip:'Story with hidden meaning.'},
    {cn:'鲲鹏',py:'kūnpéng',en:'giant mythical bird',tip:'Symbol of boundless freedom.'},
    {cn:'蝶梦',py:'diémèng',en:'butterfly dream',tip:'Famous paradox questioning reality.'}
  ],
  dialogue:[
    {who:'bot',cn:'庄子和老子思想有什么不同？',en:'Differences between Zhuangzi and Laozi?'},
    {who:'you',cn:'庄子更注重精神自由和个体解放文风汪洋恣肆。',en:'Zhuangzi emphasizes spiritual freedom with expansive style.'},
    {who:'bot',cn:'逍遥游表达了什么境界？',en:'What state does Xiaoyaoyou express?'},
    {who:'you',cn:'超越世俗束缚达到物我两忘的精神绝对自由。',en:'Transcending worldly bonds absolute spiritual freedom.'},
    {who:'bot',cn:'庄周梦蝶的寓意是什么？',en:'Meaning of Zhuangzi butterfly dream?'},
    {who:'you',cn:'质疑现实与梦幻的界限探讨存在的本质问题。',en:'Questions boundary of reality and dream explores existence.'},
    {who:'bot',cn:'庄子寓言有什么特点？',en:'Features of Zhuangzis parables?'},
    {who:'you',cn:'想象瑰丽幽默风趣富有深刻的哲学意蕴。',en:'Imaginative humorous and deeply philosophical.'}
  ]}
,
  {title:'诗歌创作', level:'HSK 9', icon:'fa-feather-pointed',
  words:[
    {cn:'意象',py:'yìxiàng',en:'imagery',tip:'Mental images created by language.'},
    {cn:'韵律',py:'yùnlǜ',en:'rhyme and rhythm',tip:'Musical quality of poetry.'},
    {cn:'凝练',py:'níngliàn',en:'concise',tip:'Compact and powerful expression.'},
    {cn:'意境',py:'yìjìng',en:'poetic realm',tip:'Artistic atmosphere of a poem.'},
    {cn:'象征',py:'xiàngzhēng',en:'symbol',tip:'Object representing a deeper meaning.'},
    {cn:'抒情',py:'shūqíng',en:'lyrical expression',tip:'Expressing emotions in poetry.'}
  ],
  dialogue:[
    {who:'bot',cn:'诗歌创作最重要的是什么？',en:'Most important in poetry writing?'},
    {who:'you',cn:'意象的营造和情感的真诚表达最为关键。',en:'Crafting imagery and sincere emotional expression.'},
    {who:'bot',cn:'如何选择诗的韵律？',en:'How to choose poetic rhythm?'},
    {who:'you',cn:'古典诗讲究格律现代诗注重内在节奏感。',en:'Classical follows strict meter modern focuses on inner rhythm.'},
    {who:'bot',cn:'什么是好的诗歌意象？',en:'What makes good poetic imagery?'},
    {who:'you',cn:'新颖独特又能引发读者共鸣和联想。',en:'Original and evocative resonating with readers.'},
    {who:'bot',cn:'意境和意象有什么区别？',en:'Difference between Yijing and Yixiang?'},
    {who:'you',cn:'意象是具体画面意境是整体艺术氛围。',en:'Imagery is concrete scenes Yijing is the overall atmosphere.'}
  ]},
  {title:'短篇小说', level:'HSK 9', icon:'fa-book',
  words:[
    {cn:'短篇',py:'duǎnpiān',en:'short story',tip:'Brief fictional narrative.'},
    {cn:'情节',py:'qíngjié',en:'plot',tip:'Sequence of events in a story.'},
    {cn:'人物',py:'rénwù',en:'character',tip:'Individuals in a narrative.'},
    {cn:'冲突',py:'chōngtū',en:'conflict',tip:'Central struggle driving the plot.'},
    {cn:'高潮',py:'gāocháo',en:'climax',tip:'Most intense point of the story.'},
    {cn:'结局',py:'jiéjú',en:'ending',tip:'Resolution of the narrative.'}
  ],
  dialogue:[
    {who:'bot',cn:'短篇小说和长篇小说有什么区别？',en:'Difference between short story and novel?'},
    {who:'you',cn:'短篇聚焦一个事件或人物刻画更集中。',en:'Short story focuses on one event or character.'},
    {who:'bot',cn:'如何构建短篇的情节？',en:'How to construct short story plot?'},
    {who:'you',cn:'开端发展高潮结局结构紧凑不枝不蔓。',en:'Exposition rising action climax resolution be compact.'},
    {who:'bot',cn:'人物塑造的要点是什么？',en:'Key points in character development?'},
    {who:'you',cn:'通过对话行动和细节描写展现性格。',en:'Show personality through dialogue actions and details.'},
    {who:'bot',cn:'如何写出有力的结尾？',en:'How to write a powerful ending?'},
    {who:'you',cn:'结尾要出人意料又在情理之中余味悠长。',en:'Surprising yet fitting leave lasting impression.'}
  ]},
  {title:'散文随笔', level:'HSK 9', icon:'fa-pen',
  words:[
    {cn:'散文',py:'sǎnwén',en:'essay',tip:'Non-fiction literary composition.'},
    {cn:'随笔',py:'suíbǐ',en:'informal essay',tip:'Casual reflective writing.'},
    {cn:'形散',py:'xíng sǎn',en:'formally loose',tip:'Appearing unstructured in form.'},
    {cn:'神聚',py:'shén jù',en:'spiritually focused',tip:'Thematically coherent at core.'},
    {cn:'白描',py:'báimiáo',en:'plain description',tip:'Simple direct descriptive style.'},
    {cn:'真情',py:'zhēnqíng',en:'true feeling',tip:'Genuine emotion in writing.'}
  ],
  dialogue:[
    {who:'bot',cn:'散文写作的特点是什么？',en:'Characteristics of essay writing?'},
    {who:'you',cn:'形散神聚语言自然流露真情实感。',en:'Loose form focused spirit natural language true feelings.'},
    {who:'bot',cn:'随笔和正式散文有什么不同？',en:'Difference between casual and formal essays?'},
    {who:'you',cn:'随笔更加随性自由话题多为日常生活感悟。',en:'Casual essays are freer about daily life insights.'},
    {who:'bot',cn:'白描手法如何运用？',en:'How to use plain description?'},
    {who:'you',cn:'不加修饰直接勾勒事物特征传神写照。',en:'Sketch features directly without adornment.'},
    {who:'bot',cn:'写散文如何避免散乱无章？',en:'How to avoid being unfocused?'},
    {who:'you',cn:'先确立主题思想围绕核心展开各段落有内在联系。',en:'Establish a central theme keep paragraphs connected.'}
  ]},
  {title:'剧本写作', level:'HSK 9', icon:'fa-masks-theater',
  words:[
    {cn:'剧本',py:'jùběn',en:'script',tip:'Written work for performance.'},
    {cn:'对白',py:'duìbái',en:'dialogue',tip:'Conversation between characters.'},
    {cn:'舞台',py:'wǔtái',en:'stage',tip:'Performance space in theater.'},
    {cn:'场景',py:'chǎngjǐng',en:'scene',tip:'Unit of dramatic action.'},
    {cn:'冲突',py:'chōngtū',en:'dramatic conflict',tip:'Engine of dramatic tension.'},
    {cn:'台词',py:'táicí',en:'lines',tip:'Words spoken by actors.'}
  ],
  dialogue:[
    {who:'bot',cn:'剧本和小说在写法上有什么不同？',en:'Differences between script and novel writing?'},
    {who:'you',cn:'剧本以对白和动作为主借助台词推动情节。',en:'Scripts rely on dialogue and action to advance plot.'},
    {who:'bot',cn:'如何写出精彩的对白？',en:'How to write compelling dialogue?'},
    {who:'you',cn:'符合人物性格简洁有力潜台词丰富。',en:'Fit character personality concise with rich subtext.'},
    {who:'bot',cn:'剧本的结构应该如何安排？',en:'How to structure a script?'},
    {who:'you',cn:'通常采用三幕结构建置对抗解决。',en:'Usually three-act structure setup confrontation resolution.'},
    {who:'bot',cn:'场景转换有什么技巧？',en:'Techniques for scene transitions?'},
    {who:'you',cn:'利用灯光音效或人物上下场自然过渡。',en:'Use lighting sound or character entrances and exits.'}
  ]},
  {title:'文学评论', level:'HSK 9', icon:'fa-comment-dots',
  words:[
    {cn:'文学批评',py:'wénxué pīpíng',en:'literary criticism',tip:'Analysis and evaluation of literature.'},
    {cn:'理论',py:'lǐlùn',en:'theory',tip:'Framework for literary analysis.'},
    {cn:'文本',py:'wénběn',en:'text',tip:'The literary work itself.'},
    {cn:'解读',py:'jiědú',en:'interpretation',tip:'Reading and explaining meaning.'},
    {cn:'语境',py:'yǔjìng',en:'context',tip:'Historical and cultural setting.'},
    {cn:'审美',py:'shěnměi',en:'aesthetic',tip:'Appreciation of beauty in art.'}
  ],
  dialogue:[
    {who:'bot',cn:'文学评论的主要任务是什么？',en:'Main task of literary criticism?'},
    {who:'you',cn:'解读文本揭示深层意义评价艺术价值。',en:'Interpret text reveal deeper meaning evaluate artistic value.'},
    {who:'bot',cn:'如何选择批评角度？',en:'How to choose critical approach?'},
    {who:'you',cn:'可以从叙事学女性主义或后殖民等理论切入。',en:'From narratology feminism or post-colonial theory.'},
    {who:'bot',cn:'评论写作需要注意什么？',en:'What to note in critical writing?'},
    {who:'you',cn:'论据充分论证严密态度客观公正。',en:'Sufficient evidence rigorous argument objective attitude.'},
    {who:'bot',cn:'如何看待作品的时代局限性？',en:'How to view works historical limitations?'},
    {who:'you',cn:'辩证看待既尊重历史语境又不盲从。',en:'Dialectically respect historical context without blind following.'}
  ]},
  {title:'哲学探究', level:'HSK 9', icon:'fa-brain',
  words:[
    {cn:'哲学',py:'zhéxué',en:'philosophy',tip:'Study of fundamental questions.'},
    {cn:'本体',py:'běntǐ',en:'ontology',tip:'Study of being and existence.'},
    {cn:'认识',py:'rènshi',en:'epistemology',tip:'Study of knowledge and knowing.'},
    {cn:'伦理',py:'lúnlǐ',en:'ethics',tip:'Study of moral principles.'},
    {cn:'思辨',py:'sībiàn',en:'speculative reasoning',tip:'Logical abstract thinking.'},
    {cn:'命题',py:'mìngtí',en:'proposition',tip:'Statement to be examined.'}
  ],
  dialogue:[
    {who:'bot',cn:'哲学研究的基本问题有哪些？',en:'Basic questions of philosophical inquiry?'},
    {who:'you',cn:'存在与意识物质与精神自由与必然等根本问题。',en:'Existence and consciousness matter and spirit freedom and necessity.'},
    {who:'bot',cn:'本体论和认识论有什么区别？',en:'Difference between ontology and epistemology?'},
    {who:'you',cn:'本体论研究世界本质认识论研究认识来源和限度。',en:'Ontology studies reality epistemology studies knowledge.'},
    {who:'bot',cn:'伦理学的核心问题是什么？',en:'Core question of ethics?'},
    {who:'you',cn:'什么是善什么是恶人应当如何生活。',en:'What is good and evil how should one live.'},
    {who:'bot',cn:'如何进行哲学思辨？',en:'How to engage in philosophical reasoning?'},
    {who:'you',cn:'运用逻辑推理批判性思考不断追问和反思。',en:'Use logic critical thinking and continuous questioning.'}
  ]},
  {title:'理论框架', level:'HSK 9', icon:'fa-sitemap',
  words:[
    {cn:'理论',py:'lǐlùn',en:'theory',tip:'System of ideas explaining phenomena.'},
    {cn:'范式',py:'fànshì',en:'paradigm',tip:'Model or framework for research.'},
    {cn:'假设',py:'jiǎshè',en:'hypothesis',tip:'Testable proposition.'},
    {cn:'变量',py:'biànliàng',en:'variable',tip:'Measurable factor in research.'},
    {cn:'模型',py:'móxíng',en:'model',tip:'Simplified representation of reality.'},
    {cn:'验证',py:'yànzhèng',en:'verification',tip:'Testing the validity of a theory.'}
  ],
  dialogue:[
    {who:'bot',cn:'理论框架在研究中的作用是什么？',en:'Role of theoretical framework in research?'},
    {who:'you',cn:'为研究提供概念基础和解释逻辑指导方法选择。',en:'Provides conceptual foundation and guides methodology.'},
    {who:'bot',cn:'如何选择适合的理论框架？',en:'How to choose appropriate framework?'},
    {who:'you',cn:'根据研究问题结合文献综述选择最有解释力的理论。',en:'Based on research question select most explanatory theory.'},
    {who:'bot',cn:'范式的转变意味着什么？',en:'What does paradigm shift mean?'},
    {who:'you',cn:'科学革命的根本标志是研究范式的根本变革。',en:'Scientific revolutions are marked by fundamental paradigm change.'},
    {who:'bot',cn:'理论模型的构建步骤是什么？',en:'Steps in building theoretical models?'},
    {who:'you',cn:'界定概念提出假设设计变量关系建立逻辑体系。',en:'Define concepts propose hypotheses design variable relationships.'}
  ]},
  {title:'原创研究', level:'HSK 9', icon:'fa-flask',
  words:[
    {cn:'原创',py:'yuánchuàng',en:'original research',tip:'Novel contribution to knowledge.'},
    {cn:'创新',py:'chuàngxīn',en:'innovation',tip:'New approach or discovery.'},
    {cn:'贡献',py:'gòngxiàn',en:'contribution',tip:'Value added to the field.'},
    {cn:'数据',py:'shùjù',en:'data',tip:'Empirical evidence collected.'},
    {cn:'分析',py:'fēnxī',en:'analysis',tip:'Examination of data.'},
    {cn:'结论',py:'jiélùn',en:'findings',tip:'Results derived from research.'}
  ],
  dialogue:[
    {who:'bot',cn:'原创性研究的核心特征是什么？',en:'Core features of original research?'},
    {who:'you',cn:'提出新问题运用新方法发现新结论。',en:'New questions new methods new findings.'},
    {who:'bot',cn:'如何确保研究的原创性？',en:'How to ensure research originality?'},
    {who:'you',cn:'深入文献综述精确界定研究空白。',en:'Thorough literature review precisely identify gaps.'},
    {who:'bot',cn:'研究伦理在原创研究中有多重要？',en:'Importance of research ethics?'},
    {who:'you',cn:'极其重要必须遵守学术规范杜绝学术不端。',en:'Extremely important follow academic norms avoid misconduct.'},
    {who:'bot',cn:'原创成果如何被学术界认可？',en:'How are original contributions recognized?'},
    {who:'you',cn:'通过同行评审发表论文并在学术交流中接受检验。',en:'Through peer review publication and academic exchange.'}
  ]},
  {title:'学术答辩', level:'HSK 9', icon:'fa-microphone-lines',
  words:[
    {cn:'答辩',py:'dábiàn',en:'defense',tip:'Oral examination of research.'},
    {cn:'陈述',py:'chénshù',en:'presentation',tip:'Structured overview of research.'},
    {cn:'质疑',py:'zhìyí',en:'challenge',tip:'Critical questions from committee.'},
    {cn:'回应',py:'huíyìng',en:'response',tip:'Answering questions effectively.'},
    {cn:'论证',py:'lùnzhèng',en:'argumentation',tip:'Defending research choices.'},
    {cn:'自信',py:'zìxìn',en:'confidence',tip:'Poise and assurance in defense.'}
  ],
  dialogue:[
    {who:'bot',cn:'学术答辩应该做哪些准备？',en:'How to prepare for academic defense?'},
    {who:'you',cn:'熟悉论文全部内容预判可能问题准备应答策略。',en:'Know paper thoroughly anticipate questions plan responses.'},
    {who:'bot',cn:'陈述环节如何突出重点？',en:'How to highlight key points in presentation?'},
    {who:'you',cn:'精炼陈述核心发现和创新点控制时间。',en:'Focus on core findings and innovations manage time.'},
    {who:'bot',cn:'如何应对评委的尖锐质疑？',en:'How to handle challenging questions?'},
    {who:'you',cn:'保持冷静礼貌回应有理有据不卑不亢。',en:'Stay calm respond politely with evidence and respect.'},
    {who:'bot',cn:'答辩的结束语应该说什么？',en:'What to say in closing?'},
    {who:'you',cn:'感谢评委的指教和宝贵建议表达继续深造的意愿。',en:'Thank committee for guidance express intent to improve.'}
  ]},
  {title:'说服艺术', level:'HSK 9', icon:'fa-bullhorn',
  words:[
    {cn:'说服',py:'shuōfú',en:'persuasion',tip:'Convincing others of your view.'},
    {cn:'修辞',py:'xiūcí',en:'rhetoric',tip:'Art of effective speaking.'},
    {cn:'逻辑',py:'luóji',en:'logic',tip:'Structured reasoning.'},
    {cn:'情感',py:'qínggǎn',en:'emotion',tip:'Appealing to feelings.'},
    {cn:'信誉',py:'xìnyù',en:'credibility',tip:'Trustworthiness of the speaker.'},
    {cn:'论证',py:'lùnzhèng',en:'argumentation',tip:'Structured case making.'}
  ],
  dialogue:[
    {who:'bot',cn:'说服的三大要素是什么？',en:'Three elements of persuasion?'},
    {who:'you',cn:'逻辑诉诸理性情感诉诸情绪信誉诉诸人格。',en:'Logos pathos ethos logic emotion credibility.'},
    {who:'bot',cn:'如何在论述中运用逻辑？',en:'How to use logic in argumentation?'},
    {who:'you',cn:'使用演绎推理三段论或归纳推理提供事实。',en:'Use deductive syllogism or inductive reasoning.'},
    {who:'bot',cn:'情感诉求有什么作用？',en:'Role of emotional appeal?'},
    {who:'you',cn:'引发共情增强说服的感染力。',en:'Evoke empathy enhance persuasiveness.'},
    {who:'bot',cn:'如何建立自己的信誉？',en:'How to build credibility?'},
    {who:'you',cn:'展示专业知识和经验保持真诚态度。',en:'Show expertise and experience maintain sincerity.'}
  ]},
  {title:'论证技巧', level:'HSK 9', icon:'fa-scale-balanced',
  words:[
    {cn:'论点',py:'lùndiǎn',en:'claim',tip:'Main point being argued.'},
    {cn:'论据',py:'lùnjù',en:'evidence',tip:'Facts supporting a claim.'},
    {cn:'推理',py:'tuīlǐ',en:'reasoning',tip:'Drawing conclusions from evidence.'},
    {cn:'类比',py:'lèibǐ',en:'analogy',tip:'Comparison to illustrate a point.'},
    {cn:'因果',py:'yīnguǒ',en:'causality',tip:'Cause and effect reasoning.'},
    {cn:'反驳',py:'fǎnbó',en:'refutation',tip:'Countering opposing arguments.'}
  ],
  dialogue:[
    {who:'bot',cn:'有效论证的基本结构是什么？',en:'Basic structure of effective argumentation?'},
    {who:'you',cn:'提出论点提供论据进行推理得出结论。',en:'Make claim provide evidence reason draw conclusion.'},
    {who:'bot',cn:'类比论证有什么优势和风险？',en:'Advantages and risks of analogical argument?'},
    {who:'you',cn:'生动形象但可能忽略关键差异导致误导。',en:'Vivid but may ignore key differences.'},
    {who:'bot',cn:'如何进行有力的反驳？',en:'How to make strong refutations?'},
    {who:'you',cn:'找出对方论证的薄弱环节用事实和逻辑予以反击。',en:'Find weak points counter with facts and logic.'},
    {who:'bot',cn:'因果论证需要注意什么？',en:'What to note in causal arguments?'},
    {who:'you',cn:'区分因果和相关避免以偏概全。',en:'Distinguish cause from correlation avoid hasty generalizations.'}
  ]},
  {title:'修辞手法', level:'HSK 9', icon:'fa-pen-fancy',
  words:[
    {cn:'比喻',py:'bǐyù',en:'simile',tip:'Comparison using like or as.'},
    {cn:'排比',py:'páibǐ',en:'parallelism',tip:'Repeating similar structures for effect.'},
    {cn:'反问',py:'fǎnwèn',en:'rhetorical question',tip:'Question asked for effect not answer.'},
    {cn:'夸张',py:'kuāzhāng',en:'hyperbole',tip:'Exaggeration for emphasis.'},
    {cn:'反讽',py:'fǎnfěng',en:'irony',tip:'Saying the opposite of what is meant.'},
    {cn:'设问',py:'shèwèn',en:'hypophora',tip:'Raising a question then answering it.'}
  ],
  dialogue:[
    {who:'bot',cn:'修辞手法在演讲中起什么作用？',en:'Role of rhetorical devices in speech?'},
    {who:'you',cn:'增强语言的表现力和感染力帮助突出重点。',en:'Enhance expressiveness and impact highlight key points.'},
    {who:'bot',cn:'比喻和排比如何正确使用？',en:'How to use simile and parallelism?'},
    {who:'you',cn:'比喻要新颖贴切排比要层层递进。',en:'Simile should be fresh fitting parallelism should escalate.'},
    {who:'bot',cn:'反问句的效果是什么？',en:'Effect of rhetorical questions?'},
    {who:'you',cn:'引发听众思考增强说服力。',en:'Provoke thought and strengthen persuasion.'},
    {who:'bot',cn:'反讽的使用需要注意什么？',en:'What to note when using irony?'},
    {who:'you',cn:'语境要清晰避免被误解为字面意思。',en:'Context must be clear avoid literal misinterpretation.'}
  ]},
  {title:'语篇分析', level:'HSK 9', icon:'fa-align-left',
  words:[
    {cn:'语篇',py:'yǔpiān',en:'discourse',tip:'Extended units of language use.'},
    {cn:'衔接',py:'xiánjiē',en:'cohesion',tip:'Surface connections in text.'},
    {cn:'连贯',py:'liánguàn',en:'coherence',tip:'Logical consistency in meaning.'},
    {cn:'主位',py:'zhǔwèi',en:'theme',tip:'Starting point of a message.'},
    {cn:'述位',py:'shùwèi',en:'rheme',tip:'New information about the theme.'},
    {cn:'语境',py:'yǔjìng',en:'context',tip:'Situation surrounding discourse.'}
  ],
  dialogue:[
    {who:'bot',cn:'语篇分析研究什么？',en:'What does discourse analysis study?'},
    {who:'you',cn:'研究语言在真实使用中的结构与功能。',en:'Studies structure and function of language in use.'},
    {who:'bot',cn:'衔接和连贯有什么区别？',en:'Difference between cohesion and coherence?'},
    {who:'you',cn:'衔接是表层语言手段连贯是深层语义逻辑。',en:'Cohesion is surface links coherence is semantic logic.'},
    {who:'bot',cn:'主位和述位如何分析？',en:'How to analyze theme and rheme?'},
    {who:'you',cn:'主位是已知信息述位是核心新信息。',en:'Theme is given info rheme is new info.'},
    {who:'bot',cn:'语境对话语理解有多重要？',en:'Importance of context in discourse understanding?'},
    {who:'you',cn:'没有语境就无法正确理解话语的真正含义。',en:'Without context the true meaning cannot be understood.'}
  ]},
  {title:'非物质文化遗产', level:'HSK 9', icon:'fa-landmark',
  words:[
    {cn:'非遗',py:'fēiyí',en:'intangible cultural heritage',tip:'Non-material cultural heritage.'},
    {cn:'传承',py:'chuánchéng',en:'inheritance',tip:'Passing down traditions.'},
    {cn:'技艺',py:'jìyì',en:'craftsmanship',tip:'Traditional skills and techniques.'},
    {cn:'民俗',py:'mínsú',en:'folk custom',tip:'Traditional practices of a community.'},
    {cn:'保护',py:'bǎohù',en:'preservation',tip:'Safeguarding cultural heritage.'},
    {cn:'名录',py:'mínglù',en:'register',tip:'Official list of heritage items.'}
  ],
  dialogue:[
    {who:'bot',cn:'什么是非物质文化遗产？',en:'What is intangible cultural heritage?'},
    {who:'you',cn:'指被社区群体视为文化遗产的实践表演和知识技能。',en:'Practices performances and knowledge recognized as heritage.'},
    {who:'bot',cn:'保护非遗有什么重要意义？',en:'Importance of preserving intangible heritage?'},
    {who:'you',cn:'维护文化多样性促进文化可持续发展。',en:'Maintain cultural diversity promote sustainable development.'},
    {who:'bot',cn:'中国有哪些著名的非遗项目？',en:'Famous Chinese intangible heritage items?'},
    {who:'you',cn:'昆曲书法剪纸和端午节等。',en:'Kunqu opera calligraphy paper-cutting and Dragon Boat Festival.'},
    {who:'bot',cn:'非遗传承面临什么挑战？',en:'Challenges facing heritage transmission?'},
    {who:'you',cn:'传承人老龄化年轻人兴趣不足商业化冲击。',en:'Aging inheritors youth disinterest commercialization.'}
  ]},
  {title:'传统艺术', level:'HSK 9', icon:'fa-palette',
  words:[
    {cn:'国画',py:'guóhuà',en:'traditional Chinese painting',tip:'Classic Chinese painting style.'},
    {cn:'书法',py:'shūfǎ',en:'calligraphy',tip:'Art of beautiful handwriting.'},
    {cn:'瓷器',py:'cíqì',en:'porcelain',tip:'Chinese ceramic art.'},
    {cn:'京剧',py:'jīngjù',en:'Peking opera',tip:'Traditional Chinese opera form.'},
    {cn:'刺绣',py:'cìxiù',en:'embroidery',tip:'Decorative needlework art.'},
    {cn:'篆刻',py:'zhuànkè',en:'seal carving',tip:'Carving characters onto seals.'}
  ],
  dialogue:[
    {who:'bot',cn:'中国传统艺术的美学核心是什么？',en:'Aesthetic core of traditional Chinese art?'},
    {who:'you',cn:'追求意境讲求气韵生动形神兼备。',en:'Pursuit of artistic conception spirit resonance and harmony.'},
    {who:'bot',cn:'国画和西方绘画有什么不同？',en:'Differences between Chinese and Western painting?'},
    {who:'you',cn:'国画重写意西画重写实国画讲究留白。',en:'Chinese emphasizes expression Western realism Chinese uses negative space.'},
    {who:'bot',cn:'书法的艺术价值在哪里？',en:'Artistic value of calligraphy?'},
    {who:'you',cn:'通过线条的韵律表现情感和气质。',en:'Expresses emotion and character through rhythmic lines.'},
    {who:'bot',cn:'京剧的脸谱有什么含义？',en:'Meaning of Peking opera facial makeup?'},
    {who:'you',cn:'红色忠勇白色奸诈黑色刚正。',en:'Red loyalty white treachery black uprightness.'}
  ]},
  {title:'文化传承', level:'HSK 9', icon:'fa-hands-praying',
  words:[
    {cn:'文化',py:'wénhuà',en:'culture',tip:'Customs and beliefs of a society.'},
    {cn:'传承',py:'chuánchéng',en:'transmission',tip:'Passing culture across generations.'},
    {cn:'创新',py:'chuàngxīn',en:'innovation',tip:'Creative adaptation of tradition.'},
    {cn:'活化',py:'huóhuà',en:'revitalization',tip:'Bringing heritage to life.'},
    {cn:'认同',py:'rèntóng',en:'cultural identity',tip:'Sense of cultural belonging.'},
    {cn:'自信',py:'zìxìn',en:'cultural confidence',tip:'Pride in ones cultural heritage.'}
  ],
  dialogue:[
    {who:'bot',cn:'如何看待传统文化与现代创新的关系？',en:'Relationship between tradition and innovation?'},
    {who:'you',cn:'在传承中创新在创新中传承二者相辅相成。',en:'Innovate in inheritance inherit in innovation mutually reinforcing.'},
    {who:'bot',cn:'怎样让年轻人对传统文化产生兴趣？',en:'How to engage youth with traditional culture?'},
    {who:'you',cn:'运用现代科技和新媒体手段让传统时尚化。',en:'Use modern tech and new media to make tradition trendy.'},
    {who:'bot',cn:'文化自信的重要性是什么？',en:'Importance of cultural confidence?'},
    {who:'you',cn:'文化自信是民族复兴的精神基础。',en:'Cultural confidence is the spiritual foundation of national rejuvenation.'},
    {who:'bot',cn:'文化遗产如何活化利用？',en:'How to revitalize cultural heritage?'},
    {who:'you',cn:'开发文创产品融入现代生活让遗产活起来。',en:'Develop creative products integrate into modern life.'}
  ]},
  {title:'文化政策', level:'HSK 9', icon:'fa-file-contract',
  words:[
    {cn:'政策',py:'zhèngcè',en:'cultural policy',tip:'Government guidelines for culture.'},
    {cn:'立法',py:'lìfǎ',en:'legislation',tip:'Laws protecting cultural heritage.'},
    {cn:'资助',py:'zīzhù',en:'subsidy',tip:'Financial support for cultural projects.'},
    {cn:'交流',py:'jiāoliú',en:'cultural exchange',tip:'Cross-cultural dialogue and cooperation.'},
    {cn:'产业',py:'chǎnyè',en:'cultural industry',tip:'Commercial cultural sector.'},
    {cn:'软实力',py:'ruǎn shílì',en:'soft power',tip:'Cultural influence on global stage.'}
  ],
  dialogue:[
    {who:'bot',cn:'文化政策的主要目标是什么？',en:'Main objectives of cultural policy?'},
    {who:'you',cn:'保护文化遗产促进文化繁荣提升国家文化软实力。',en:'Protect heritage promote prosperity enhance soft power.'},
    {who:'bot',cn:'文化交流在国际关系中起什么作用？',en:'Role of cultural exchange in international relations?'},
    {who:'you',cn:'增进相互理解消除偏见促进和平发展。',en:'Enhance mutual understanding reduce prejudice promote peace.'},
    {who:'bot',cn:'政府对文化产业有哪些扶持措施？',en:'Government support for cultural industries?'},
    {who:'you',cn:'税收优惠政策资金补贴和人才培养计划。',en:'Tax incentives funding subsidies and talent programs.'},
    {who:'bot',cn:'如何通过文化政策提升软实力？',en:'How to enhance soft power through policy?'},
    {who:'you',cn:'推广本国语言支持文化出口讲述中国故事。',en:'Promote language support cultural exports tell Chinas story.'}
  ]}
]