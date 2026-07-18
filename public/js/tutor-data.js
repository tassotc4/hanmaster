const EXTRA_TUTOR_LESSONS = [
  {title:"Business Meeting",level:"HSK 4",icon:"fa-handshake",
  words:[
    {cn:"会议",py:"huì yì",en:"Meeting / conference",tip:"会=gather, 议=discuss."},
    {cn:"讨论",py:"tǎo lùn",en:"To discuss / debate",tip:"讨=discuss, 论=argument."},
    {cn:"方案",py:"fāng àn",en:"Plan / proposal",tip:"方=method, 案=case."},
    {cn:"决定",py:"jué dìng",en:"To decide / decision",tip:"决=decide, 定=fix."},
    {cn:"合作",py:"hé zuò",en:"To cooperate / collaboration",tip:"合=together, 作=work."},
    {cn:"合同",py:"hé tong",en:"Contract / agreement",tip:"合=union, 同=same."}
  ],
  dialogue:[
    {who:"bot",cn:"王总，这是我们新的合作方案，请您过目。",en:"President Wang, this is our new collaboration proposal, please take a look."},
    {who:"you",cn:"好的，我先看一下。这个方案很有创意。",en:"OK, let me take a look first. This proposal is very creative."},
    {who:"bot",cn:"谢谢。如果您同意，我们可以下周签合同。",en:"Thank you. If you agree, we can sign the contract next week."},
    {who:"you",cn:"我同意。细节我们再讨论一下。",en:"I agree. Let's discuss the details further."},
    {who:"bot",cn:"没问题。明天下午我们再开一次会，可以吗？",en:"No problem. Can we have another meeting tomorrow afternoon?"},
    {who:"you",cn:"可以，明天下午两点，我办公室见。",en:"Fine, tomorrow at 2 PM, see you in my office."}
  ]},
  {title:"Online Shopping",level:"HSK 4",icon:"fa-cart-plus",
  words:[
    {cn:"购物",py:"gòu wù",en:"Shopping",tip:"购=purchase, 物=goods."},
    {cn:"快递",py:"kuài dì",en:"Express delivery",tip:"快=fast, 递=hand over."},
    {cn:"退货",py:"tuì huò",en:"Return goods",tip:"退=return, 货=goods."},
    {cn:"退款",py:"tuì kuǎn",en:"Refund",tip:"退=return, 款=money."},
    {cn:"评价",py:"píng jià",en:"Review / rate",tip:"评=comment, 价=value."},
    {cn:"优惠",py:"yōu huì",en:"Discount / special offer",tip:"优=superior, 惠=kindness."}
  ],
  dialogue:[
    {who:"bot",cn:"你好，我在淘宝上看中了一件衣服，你觉得怎么样？",en:"Hi, I've found a nice piece of clothing on Taobao, what do you think?"},
    {who:"you",cn:"这件衣服很漂亮。价格也优惠，可以买。",en:"This clothing is beautiful. The price is also a good deal, you can buy it."},
    {who:"bot",cn:"那我下单了。你最近网购了什么好东西？",en:"Then I'll place the order. Have you bought anything good online lately?"},
    {who:"you",cn:"我买了一个新手机，快递两天就到了。",en:"I bought a new phone, the express delivery arrived in two days."},
    {who:"bot",cn:"这么快！你给卖家好评了吗？",en:"So fast! Did you give the seller a good review?"},
    {who:"you",cn:"给了，服务很好，质量也不错。",en:"Yes, the service was great and the quality is good too."}
  ]},
  {title:"Environmental Protection",level:"HSK 4",icon:"fa-leaf",
  words:[
    {cn:"环境",py:"huán jìng",en:"Environment",tip:"环=surround, 境=boundary."},
    {cn:"污染",py:"wū rǎn",en:"Pollution",tip:"污=dirty, 染=dye. Pollution."},
    {cn:"回收",py:"huí shōu",en:"Recycle",tip:"回=return, 收=collect."},
    {cn:"节约",py:"jié yuē",en:"Save / economize",tip:"节=section, 约=restrict."},
    {cn:"能源",py:"néng yuán",en:"Energy resources",tip:"能=energy, 源=source."},
    {cn:"保护",py:"bǎo hù",en:"Protect",tip:"保=defend, 护=guard."}
  ],
  dialogue:[
    {who:"bot",cn:"你觉得我们应该怎么保护环境？",en:"How do you think we should protect the environment?"},
    {who:"you",cn:"我觉得应该少用塑料袋，做好垃圾分类。",en:"I think we should use fewer plastic bags and sort garbage properly."},
    {who:"bot",cn:"对，还有节约用水用电也很重要。",en:"Right, and saving water and electricity is also important."},
    {who:"you",cn:"没错。我出门都带环保袋，不买瓶装水。",en:"Exactly. I always bring a reusable bag when I go out and don't buy bottled water."},
    {who:"bot",cn:"你真棒！每个人都应该向你学习。",en:"You're great! Everyone should learn from you."},
    {who:"you",cn:"谢谢，保护环境要从自己做起。",en:"Thank you, protecting the environment starts with ourselves."}
  ]},
  {title:"Travel & Culture",level:"HSK 4",icon:"fa-map-marked-alt",
  words:[
    {cn:"文化",py:"wén huà",en:"Culture",tip:"文=writing, 化=transform."},
    {cn:"景点",py:"jǐng diǎn",en:"Scenic spot",tip:"景=scenery, 点=point."},
    {cn:"导游",py:"dǎo yóu",en:"Tour guide",tip:"导=guide, 游=travel."},
    {cn:"纪念品",py:"jì niàn pǐn",en:"Souvenir",tip:"纪=record, 念=think, 品=product."},
    {cn:"风俗",py:"fēng sú",en:"Custom / tradition",tip:"风=wind, 俗=custom."},
    {cn:"体验",py:"tǐ yàn",en:"Experience",tip:"体=body, 验=test."}
  ],
  dialogue:[
    {who:"bot",cn:"你去过中国吗？最喜欢哪个城市？",en:"Have you been to China? Which city do you like the most?"},
    {who:"you",cn:"我去过北京和西安。北京的古迹非常多。",en:"I've been to Beijing and Xi'an. Beijing has a lot of historical sites."},
    {who:"bot",cn:"西安的兵马俑你看了吗？很震撼吧？",en:"Did you see the Terracotta Warriors in Xi'an? Very impressive, right?"},
    {who:"you",cn:"看了！简直是奇迹。我还买了很多纪念品。",en:"Yes! It's simply a miracle. I also bought a lot of souvenirs."},
    {who:"bot",cn:"中国的文化博大精深，下次可以去上海看看。",en:"Chinese culture is vast and profound. Next time you can visit Shanghai."},
    {who:"you",cn:"好的，我计划明年再去中国旅游。",en:"OK, I'm planning to travel to China again next year."}
  ]},
  {title:"Technology & AI",level:"HSK 5",icon:"fa-robot",
  words:[
    {cn:"人工智能",py:"rén gōng zhì néng",en:"Artificial intelligence",tip:"人工=man-made, 智能=smart."},
    {cn:"数据",py:"shù jù",en:"Data",tip:"数=number, 据=evidence."},
    {cn:"算法",py:"suàn fǎ",en:"Algorithm",tip:"算=calculate, 法=method."},
    {cn:"创新",py:"chuàng xīn",en:"Innovation",tip:"创=create, 新=new."},
    {cn:"自动化",py:"zì dòng huà",en:"Automation",tip:"自=self, 动=move."},
    {cn:"机器人",py:"jī qì rén",en:"Robot",tip:"机=machine, 器=appliance, 人=human."}
  ],
  dialogue:[
    {who:"bot",cn:"你对人工智能的发展有什么看法？",en:"What's your opinion on the development of AI?"},
    {who:"you",cn:"我觉得AI会改变我们的生活方式，很期待。",en:"I think AI will change our way of life, I'm looking forward to it."},
    {who:"bot",cn:"是的，但是也有人担心AI会取代很多工作。",en:"Yes, but some people worry that AI will replace many jobs."},
    {who:"you",cn:"AI确实会替代一些重复性工作，但也会创造新机会。",en:"AI will indeed replace some repetitive jobs, but it will also create new opportunities."},
    {who:"bot",cn:"你说得对。我们应该学习新技能来适应变化。",en:"You're right. We should learn new skills to adapt to the changes."},
    {who:"you",cn:"没错，终身学习很重要。",en:"Exactly, lifelong learning is very important."}
  ]},
  {title:"Health & Fitness",level:"HSK 5",icon:"fa-heart-pulse",
  words:[
    {cn:"健康",py:"jiàn kāng",en:"Health",tip:"健=strong, 康=peace."},
    {cn:"锻炼",py:"duàn liàn",en:"To exercise",tip:"锻=forge, 炼=refine."},
    {cn:"营养",py:"yíng yǎng",en:"Nutrition",tip:"营=manage, 养=nourish."},
    {cn:"饮食",py:"yǐn shí",en:"Diet / food & drink",tip:"饮=drink, 食=food."},
    {cn:"休息",py:"xiū xi",en:"Rest",tip:"休=pause, 息=breathe."},
    {cn:"压力",py:"yā lì",en:"Stress / pressure",tip:"压=press, 力=force."}
  ],
  dialogue:[
    {who:"bot",cn:"你平时怎么保持健康？",en:"How do you stay healthy in your daily life?"},
    {who:"you",cn:"我每周去健身房锻炼三次，注意饮食。",en:"I go to the gym three times a week and watch my diet."},
    {who:"bot",cn:"很好。最近工作压力大吗？",en:"Good. Have you been under a lot of work stress lately?"},
    {who:"you",cn:"有点大，所以我每天会冥想十五分钟放松。",en:"A bit, so I meditate for 15 minutes every day to relax."},
    {who:"bot",cn:"冥想是个好方法。睡眠质量怎么样？",en:"Meditation is a good method. How's your sleep quality?"},
    {who:"you",cn:"还不错，我每天都睡七到八个小时。",en:"Not bad, I sleep seven to eight hours every day."}
  ]},
  {title:"Social Media & Internet",level:"HSK 5",icon:"fa-share-nodes",
  words:[
    {cn:"社交媒体",py:"shè jiāo méi tǐ",en:"Social media",tip:"社交=social, 媒体=media."},
    {cn:"网红",py:"wǎng hóng",en:"Internet celebrity",tip:"网=net, 红=red (popular)."},
    {cn:"粉丝",py:"fěn sī",en:"Fans / followers",tip:"Phonetic loan from 'fans'."},
    {cn:"直播",py:"zhí bō",en:"Live streaming",tip:"直=direct, 播=broadcast."},
    {cn:"点赞",py:"diǎn zàn",en:"To like / thumb up",tip:"点=click, 赞=praise."},
    {cn:"关注",py:"guān zhù",en:"To follow / pay attention to",tip:"关=close, 注=fix."}
  ],
  dialogue:[
    {who:"bot",cn:"你平时用哪些社交媒体？",en:"Which social media platforms do you usually use?"},
    {who:"you",cn:"我用微信和抖音，你呢？",en:"I use WeChat and Douyin (TikTok), what about you?"},
    {who:"bot",cn:"我也用抖音，还喜欢看直播带货。",en:"I also use Douyin, and I like watching live-stream shopping."},
    {who:"you",cn:"直播带货确实很有意思，我有时候也会买。",en:"Live-stream shopping is really interesting, I sometimes buy things too."},
    {who:"bot",cn:"你关注了几个网红？",en:"How many influencers do you follow?"},
    {who:"you",cn:"不多，大概十来个。他们的内容很有创意。",en:"Not many, about a dozen. Their content is very creative."}
  ]},
  {title:"Movie & Entertainment",level:"HSK 5",icon:"fa-film",
  words:[
    {cn:"电影",py:"diàn yǐng",en:"Movie / film",tip:"电=electric, 影=shadow."},
    {cn:"导演",py:"dǎo yǎn",en:"Director",tip:"导=guide, 演=perform."},
    {cn:"演员",py:"yǎn yuán",en:"Actor / actress",tip:"演=perform, 员=person."},
    {cn:"剧情",py:"jù qíng",en:"Plot / storyline",tip:"剧=drama, 情=feeling."},
    {cn:"票房",py:"piào fáng",en:"Box office",tip:"票=ticket, 房=house."},
    {cn:"上映",py:"shàng yìng",en:"To release (a film)",tip:"上=up, 映=reflect."}
  ],
  dialogue:[
    {who:"bot",cn:"你最近看了什么电影吗？",en:"Have you watched any movies recently?"},
    {who:"you",cn:"我刚看了《流浪地球3》，特效特别棒！",en:"I just watched 'The Wandering Earth 3', the special effects were amazing!"},
    {who:"bot",cn:"这部电影票房很高吧？",en:"This movie has a high box office, right?"},
    {who:"you",cn:"对，已经破了纪录。剧情也很有深度。",en:"Yes, it's already broken records. The plot is also very deep."},
    {who:"bot",cn:"我也想去看看。你觉得哪个演员演得最好？",en:"I want to see it too. Which actor do you think performed the best?"},
    {who:"you",cn:"男主角的表演非常精彩，推荐你去看！",en:"The lead actor's performance was brilliant, I recommend you go see it!"}
  ]},
  {title:"Global Economy",level:"HSK 6",icon:"fa-chart-line",
  words:[
    {cn:"经济",py:"jīng jì",en:"Economy",tip:"经=manage, 济=aid."},
    {cn:"市场",py:"shì chǎng",en:"Market",tip:"市=city, 场=field."},
    {cn:"投资",py:"tóu zī",en:"Investment",tip:"投=throw, 资=capital."},
    {cn:"贸易",py:"mào yì",en:"Trade",tip:"贸=exchange, 易=easy."},
    {cn:"通货膨胀",py:"tōng huò péng zhàng",en:"Inflation",tip:"通=through, 货=goods, 膨胀=expand."},
    {cn:"GDP",py:"G D P",en:"Gross Domestic Product",tip:"Abbreviation for 国内生产总值."}
  ],
  dialogue:[
    {who:"bot",cn:"你对全球经济形势有什么看法？",en:"What's your view on the global economic situation?"},
    {who:"you",cn:"我觉得目前全球经济面临着很多挑战。",en:"I think the global economy is facing many challenges right now."},
    {who:"bot",cn:"确实，通货膨胀和贸易摩擦都是大问题。",en:"Indeed, inflation and trade frictions are both big issues."},
    {who:"you",cn:"对，不过新兴市场的发展也带来了新的机会。",en:"Right, but the development of emerging markets also brings new opportunities."},
    {who:"bot",cn:"你认为哪些行业最有投资价值？",en:"Which industries do you think have the most investment value?"},
    {who:"you",cn:"新能源和人工智能领域前景很好。",en:"The new energy and artificial intelligence sectors have great prospects."}
  ]},
  {title:"Chinese Philosophy",level:"HSK 6",icon:"fa-yin-yang",
  words:[
    {cn:"哲学",py:"zhé xué",en:"Philosophy",tip:"哲=wise, 学=study."},
    {cn:"儒家",py:"rú jiā",en:"Confucianism",tip:"儒=scholar, 家=school."},
    {cn:"道家",py:"dào jiā",en:"Taoism",tip:"道=way, 家=school."},
    {cn:"和谐",py:"hé xié",en:"Harmony",tip:"和=peace, 谐=agree."},
    {cn:"道德",py:"dào dé",en:"Morality / virtue",tip:"道=way, 德=virtue."},
    {cn:"中庸",py:"zhōng yōng",en:"The Doctrine of the Mean",tip:"中=middle, 庸=ordinary."}
  ],
  dialogue:[
    {who:"bot",cn:"你对中国的传统哲学感兴趣吗？",en:"Are you interested in traditional Chinese philosophy?"},
    {who:"you",cn:"非常感兴趣。我觉得儒家思想对现代社会很有启发。",en:"Very interested. I think Confucian thought is very enlightening for modern society."},
    {who:"bot",cn:"儒家强调仁爱和礼仪，确实很重要。",en:"Confucianism emphasizes benevolence and etiquette, which are indeed important."},
    {who:"you",cn:"对，道家讲的顺其自然也很深刻。",en:"Yes, Taoist idea of going with the flow is also very profound."},
    {who:"bot",cn:"你喜欢老子的《道德经》吗？",en:"Do you like Laozi's 'Tao Te Ching'?"},
    {who:"you",cn:"特别喜欢，\"道可道，非常道\"这句话太妙了。",en:"I especially love it. The line 'The Tao that can be told is not the eternal Tao' is brilliant."}
  ]}
];

const EXTRA_ROLEPLAY_SCENARIOS = [
  {
    name: "Doctor Visit",
    match: ["doctor", "hospital", "sick", "health", "hsk 4 health"],
    botRole: "Doctor 👨‍⚕️",
    userRole: "Patient 🤒",
    prompt: "Let's do a roleplay conversation. You are a Chinese Doctor (医生) at a hospital, and I am a Patient (病人). I came to see you because I don't feel well. Speak first in Chinese, ask me what symptoms I have."
  },
  {
    name: "Hotel Check-in",
    match: ["hotel", "check in", "hotel check", "travel hotel", "hsk 4 hotel"],
    botRole: "Hotel Staff 🏨",
    userRole: "Guest 🧳",
    prompt: "Let's do a roleplay conversation. You are a Chinese Hotel Receptionist (前台) and I am a Guest (客人). I want to check into the hotel. Speak first in Chinese, greet me and ask if I have a reservation."
  },
  {
    name: "Job Interview",
    match: ["job", "interview", "work", "hsk 4 job", "career"],
    botRole: "Interviewer 💼",
    userRole: "Candidate 🎓",
    prompt: "Let's do a roleplay conversation. You are a Chinese HR Manager (面试官) conducting a job interview, and I am a Candidate (面试者). Speak first in Chinese, welcome me and ask me to introduce myself and my work experience."
  },
  {
    name: "Library & Study",
    match: ["library", "study", "book", "hsk classroom", "student"],
    botRole: "Librarian 📚",
    userRole: "Student 🎒",
    prompt: "Let's do a roleplay conversation. You are a Chinese Librarian (图书管理员) and I am a Student (学生). I come to the library looking for Chinese learning materials. Speak first in Chinese, greet me and ask how you can help me."
  },
  {
    name: "Taxi Ride",
    match: ["taxi", "cab", "ride", "transport", "hsk 4 transport", "direction"],
    botRole: "Taxi Driver 🚕",
    userRole: "Passenger 🚶",
    prompt: "Let's do a roleplay conversation. You are a Chinese Taxi Driver (出租车司机) and I am a Passenger (乘客). I need a ride to a famous landmark. Speak first in Chinese, greet me and ask where I want to go."
  }
];
