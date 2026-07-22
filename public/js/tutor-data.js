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
    {cn:"阴阳",py:"yīn yáng",en:"Yin and Yang (opposing forces)",tip:"阴=dark, 阳=light."},
    {cn:"道家",py:"dào jiā",en:"Daoism / Taoist school",tip:"道=way, 家=school."},
    {cn:"儒家",py:"rú jiā",en:"Confucianism",tip:"儒=scholar, 家=school."},
    {cn:"和谐",py:"hé xié",en:"Harmony",tip:"和=peace, 谐=agreement."},
    {cn:"自然",py:"zì rán",en:"Nature / natural",tip:"自=self, 然=thus."}
  ],
  dialogue:[
    {who:"bot",cn:"你对中国哲学了解多少？",en:"How much do you know about Chinese philosophy?"},
    {who:"you",cn:"我对儒家思想有一些了解。",en:"I have some understanding of Confucianism."},
    {who:"bot",cn:"孔子是儒家最重要的思想家。",en:"Confucius is the most important thinker of Confucianism."},
    {who:"you",cn:"他的\"仁\"的思想影响深远。",en:"His concept of 'benevolence' has far-reaching influence."},
    {who:"bot",cn:"对。还有道家，老子和庄子。",en:"Right. Also Daoism, with Laozi and Zhuangzi."},
    {who:"you",cn:"特别喜欢，\"道可道，非常道\"这句话太妙了。",en:"I especially love it. The line 'The Tao that can be told is not the eternal Tao' is brilliant."}
  ]},
  {title:"Formal Writing",level:"HSK 7",icon:"fa-pen-nib",
  words:[
    {cn:"论文",py:"lùn wén",en:"Thesis / academic paper",tip:"论=discuss, 文=writing."},
    {cn:"论述",py:"lùn shù",en:"To expound / discuss in detail",tip:"论=discuss, 述=narrate."},
    {cn:"论证",py:"lùn zhèng",en:"Argumentation / proof",tip:"论=discuss, 证=prove."},
    {cn:"观点",py:"guān diǎn",en:"Point of view / perspective",tip:"观=observe, 点=point."},
    {cn:"依据",py:"yī jù",en:"Basis / foundation",tip:"依=depend, 据=evidence."},
    {cn:"阐述",py:"chǎn shù",en:"To elaborate / expound",tip:"阐=explain, 述=narrate."}
  ],
  dialogue:[
    {who:"bot",cn:"这篇论文的论点还不够明确，需要进一步阐述。",en:"The thesis of this paper is not yet clear enough; it needs further elaboration."},
    {who:"you",cn:"您认为我应该从哪些方面入手？",en:"What aspects do you think I should start with?"},
    {who:"bot",cn:"首先，你要有一个清晰的理论框架作为依据。",en:"First, you need a clear theoretical framework as your foundation."},
    {who:"you",cn:"好的，我准备引用最近的研究数据来支持我的观点。",en:"OK, I plan to cite recent research data to support my viewpoint."},
    {who:"bot",cn:"这样很好。论述要有逻辑，论证要充分。",en:"That's good. The exposition must be logical, and the argumentation thorough."},
    {who:"you",cn:"我会按照引言、论证、结论的结构来写。",en:"I will follow the structure of introduction, argumentation, and conclusion."}
  ]},
  {title:"Analysis",level:"HSK 7",icon:"fa-chart-bar",
  words:[
    {cn:"分析",py:"fēn xī",en:"Analysis",tip:"分=divide, 析=separate."},
    {cn:"因素",py:"yīn sù",en:"Factor / element",tip:"因=cause, 素=element."},
    {cn:"趋势",py:"qū shì",en:"Trend / tendency",tip:"趋=tend, 势=force."},
    {cn:"对比",py:"duì bǐ",en:"Comparison / contrast",tip:"对=opposite, 比=compare."},
    {cn:"综合",py:"zōng hé",en:"Comprehensive / integrated",tip:"综=overall, 合=together."},
    {cn:"评估",py:"píng gū",en:"Assessment / evaluation",tip:"评=appraise, 估=estimate."}
  ],
  dialogue:[
    {who:"bot",cn:"请分析一下今年市场经济的发展趋势。",en:"Please analyze the development trend of this year's market economy."},
    {who:"you",cn:"从数据来看，消费市场正在稳步增长。",en:"According to the data, the consumer market is growing steadily."},
    {who:"bot",cn:"还有哪些因素影响了经济增长？",en:"What other factors have affected economic growth?"},
    {who:"you",cn:"技术创新和政府政策是两个重要因素。",en:"Technological innovation and government policy are two important factors."},
    {who:"bot",cn:"请综合对比一下今年和去年的数据。",en:"Please do a comprehensive comparison of this year's and last year's data."},
    {who:"you",cn":"经过综合评估，今年的增长率比去年提高了约百分之五。",en:"After comprehensive assessment, this year's growth rate has increased by about 5 percent compared to last year."}
  ]},
  {title:"Research",level:"HSK 7",icon:"fa-flask",
  words:[
    {cn:"研究",py:"yán jiū",en:"Research",tip:"研=grind, 究=examine."},
    {cn:"实验",py:"shí yàn",en:"Experiment",tip:"实=actual, 验=test."},
    {cn:"数据",py:"shù jù",en:"Data / statistics",tip:"数=number, 据=evidence."},
    {cn:"样本",py:"yàng běn",en:"Sample",tip:"样=model, 本=origin."},
    {cn:"结论",py:"jié lùn",en:"Conclusion",tip:"结=conclude, 论=argument."},
    {cn:"验证",py:"yàn zhèng",en:"To verify / validate",tip:"验=test, 证=prove."}
  ],
  dialogue:[
    {who:"bot",cn:"这个实验需要收集足够的样本来确保准确性。",en:"This experiment needs to collect enough samples to ensure accuracy."},
    {who:"you",cn:"我们已经收集了三百个样本，数据比较全面。",en:"We have collected 300 samples, and the data is quite comprehensive."},
    {who:"bot",cn:"请你分析一下实验结果的可靠性。",en:"Please analyze the reliability of the experimental results."},
    {who:"you",cn:"经过多次测试，结果具有高度一致性。",en:"After multiple tests, the results show high consistency."},
    {who:"bot",cn:"能否得出一个初步的结论？",en:"Can you draw a preliminary conclusion?"},
    {who:"you",cn:"根据数据验证，我们的假设基本成立。",en:"Based on data verification, our hypothesis is basically valid."}
  ]},
  {title:"Translation",level:"HSK 7",icon:"fa-language",
  words:[
    {cn:"翻译",py:"fān yì",en:"Translation / interpretation",tip:"翻=flip, 译=translate."},
    {cn:"准确",py:"zhǔn què",en:"Accurate / precise",tip:"准=standard, 确=exact."},
    {cn:"流畅",py:"liú chàng",en:"Fluent / smooth",tip:"流=flow, 畅=unimpeded."},
    {cn:"含义",py:"hán yì",en:"Meaning / implication",tip:"含=contain, 义=meaning."},
    {cn:"语境",py:"yǔ jìng",en:"Context / linguistic environment",tip:"语=language, 境=setting."},
    {cn:"忠实",py:"zhōng shí",en:"Faithful / true to the original",tip:"忠=loyal, 实=true."}
  ],
  dialogue:[
    {who:"bot",cn:"翻译这段古文要注意保持原意的准确性。",en:"When translating this classical text, pay attention to maintaining accuracy of the original meaning."},
    {who:"you",cn:"有些词语在现代汉语中含义已经改变了。",en:"Some words have changed meaning in modern Chinese."},
    {who:"bot",cn:"对，所以你要考虑当时的语境和用法。",en:"Right, so you need to consider the context and usage of that time."},
    {who:"you",cn:"我应该在忠实原文和流畅表达之间找到平衡。",en:"I should find a balance between faithfulness to the original and fluent expression."},
    {who:"bot",cn:"这正是优秀翻译的标准——既准确又自然。",en:"That is precisely the standard of good translation — both accurate and natural."},
    {who:"you",cn:"好的，我会逐句推敲，确保译文质量。",en:"OK, I'll deliberate sentence by sentence to ensure translation quality."}
  ]},
  {title:"Specialized Topics",level:"HSK 8",icon:"fa-microscope",
  words:[
    {cn:"专业",py:"zhuān yè",en:"Specialized / professional",tip:"专=special, 业=field."},
    {cn:"领域",py:"lǐng yù",en:"Domain / field",tip:"领=lead, 域=territory."},
    {cn:"学术",py:"xué shù",en:"Academic / scholarship",tip:"学=study, 术=technique."},
    {cn:"术语",py:"shù yǔ",en:"Terminology",tip:"术=technique, 语=language."},
    {cn:"前沿",py:"qián yán",en:"Frontier / cutting-edge",tip:"前=front, 沿=edge."},
    {cn:"突破",py:"tū pò",en:"Breakthrough",tip:"突=sudden, 破=break."}
  ],
  dialogue:[
    {who:"bot",cn:"你在哪个专业领域做研究？",en:"In which specialized field do you conduct research?"},
    {who:"you",cn:"我主要从事人工智能和自然语言处理的研究。",en:"I mainly research artificial intelligence and natural language processing."},
    {who:"bot",cn:"这个领域最近有什么前沿突破？",en:"What recent cutting-edge breakthroughs have there been in this field?"},
    {who:"you",cn:"大型语言模型的发展带来了很多新的可能性。",en:"The development of large language models has brought many new possibilities."},
    {who:"bot",cn:"这些专业术语对非专业人士来说不太容易理解。",en:"These specialized terms are not easy for non-professionals to understand."},
    {who:"you",cn:"是的，所以我们在写论文时要注意学术表达的准确性。",en:"Yes, so when writing papers, we must pay attention to the accuracy of academic expression."}
  ]},
  {title:"Cross-cultural Communication",level:"HSK 8",icon:"fa-globe-asia",
  words:[
    {cn:"跨文化",py:"kuà wén huà",en:"Cross-cultural",tip:"跨=cross, 文化=culture."},
    {cn:"差异",py:"chā yì",en:"Difference / disparity",tip:"差=difference, 异=different."},
    {cn:"包容",py:"bāo róng",en:"Tolerant / inclusive",tip:"包=contain, 容=tolerate."},
    {cn:"习俗",py:"xí sú",en:"Custom / tradition",tip:"习=habit, 俗=custom."},
    {cn:"价值观",py:"jià zhí guān",en:"Values / value system",tip:"价值=value, 观=view."},
    {cn:"沟通",py:"gōu tōng",en:"Communication",tip:"沟=ditch, 通=connect."}
  ],
  dialogue:[
    {who:"bot",cn:"跨文化沟通中最重要的是尊重对方的文化习俗。",en:"The most important thing in cross-cultural communication is respecting the other's cultural customs."},
    {who:"you",cn:"我发现中西方在价值观方面有很多差异。",en:"I've found that there are many differences between Chinese and Western values."},
    {who:"bot",cn:"比如集体主义和个人主义的区别就很明显。",en:"For example, the difference between collectivism and individualism is very clear."},
    {who:"you",cn:"了解这些差异有助于更好地进行跨文化合作。",en:"Understanding these differences helps with better cross-cultural collaboration."},
    {who:"bot",cn:"对。包容和理解是建立良好关系的基础。",en:"Right. Tolerance and understanding are the foundation of building good relationships."},
    {who:"you",cn:"我明白了，沟通时要多站在对方的角度思考。",en:"I understand. When communicating, I should consider things from the other person's perspective more."}
  ]},
  {title:"Presentation",level:"HSK 8",icon:"fa-chalkboard",
  words:[
    {cn:"演讲",py:"yǎn jiǎng",en:"Speech / presentation",tip:"演=perform, 讲=speak."},
    {cn:"听众",py:"tīng zhòng",en:"Audience",tip:"听=listen, 众=crowd."},
    {cn:"幻灯片",py:"huàn dēng piàn",en:"Slide (presentation)",tip:"幻灯=projector, 片=sheet."},
    {cn:"生动",py:"shēng dòng",en:"Vivid / lively",tip:"生=live, 动=move."},
    {cn:"逻辑",py:"luó ji",en:"Logic",tip:"逻=sequence, 辑=collect."},
    {cn:"互动",py:"hù dòng",en:"Interaction",tip:"互=mutual, 动=move."}
  ],
  dialogue:[
    {who:"bot",cn:"今天的演讲准备得怎么样了？",en:"How are the preparations for today's presentation going?"},
    {who:"you",cn:"幻灯片已经做好了，我还在练习演讲内容。",en:"The slides are ready, and I'm still practicing the speech content."},
    {who:"bot",cn:"注意演讲的逻辑要清晰，让听众容易理解。",en:"Make sure the presentation logic is clear, so the audience can easily understand."},
    {who:"you",cn:"我会尽量用生动的例子来帮助理解。",en:"I will try to use vivid examples to aid understanding."},
    {who:"bot",cn:"还可以设计一些互动环节来调动听众的积极性。",en:"You can also design some interactive segments to engage the audience."},
    {who:"you",cn:"好主意。我准备在最后留十分钟做问答互动。",en:"Good idea. I plan to leave ten minutes at the end for Q&A interaction."}
  ]},
  {title:"Literary Analysis",level:"HSK 9",icon:"fa-book-open",
  words:[
    {cn:"文学",py:"wén xué",en:"Literature",tip:"文=writing, 学=study."},
    {cn:"修辞",py:"xiū cí",en:"Rhetoric / figures of speech",tip:"修=embellish, 辞=words."},
    {cn:"象征",py:"xiàng zhēng",en:"Symbol / symbolize",tip:"象=image, 征=sign."},
    {cn:"意境",py:"yì jìng",en:"Artistic conception / mood",tip:"意=meaning, 境=realm."},
    {cn:"风格",py:"fēng gé",en:"Style",tip:"风=wind, 格=character."},
    {cn:"内涵",py:"nèi hán",en:"Connotation / depth",tip:"内=inner, 涵=contain."}
  ],
  dialogue:[
    {who:"bot",cn:"你最喜欢哪部中国文学作品？",en:"Which Chinese literary work do you like best?"},
    {who:"you",cn:"我最喜欢《红楼梦》，它的文学价值无可比拟。",en:"I like 'Dream of the Red Chamber' best; its literary value is unparalleled."},
    {who:"bot",cn:"这部小说的修辞手法和象征意义非常丰富。",en:"This novel's rhetorical techniques and symbolic meanings are very rich."},
    {who:"you",cn:"对，作者通过细腻的描写创造出了深远的意境。",en:"Yes, the author created profound artistic conceptions through delicate descriptions."},
    {who:"bot",cn:"你觉得它的风格和内涵有什么独特之处？",en:"What do you think is unique about its style and connotation?"},
    {who:"you",cn:"它的现实主义风格和对人性的深刻揭示使它成为了不朽之作。",en:"Its realistic style and profound revelation of human nature make it an immortal work."}
  ]},
  {title:"Creative Writing",level:"HSK 9",icon:"fa-feather",
  words:[
    {cn:"创作",py:"chuàng zuò",en:"Creative writing / creation",tip:"创=create, 作=make."},
    {cn:"灵感",py:"líng gǎn",en:"Inspiration",tip:"灵=spirit, 感=feel."},
    {cn:"情节",py:"qíng jié",en:"Plot",tip:"情=emotion, 节=segment."},
    {cn:"人物",py:"rén wù",en:"Character / figure",tip:"人=person, 物=thing."},
    {cn:"描写",py:"miáo xiě",en:"Description / depiction",tip:"描=trace, 写=write."},
    {cn:"叙事",py:"xù shì",en:"Narrative / narration",tip:"叙=narrate, 事=matter."}
  ],
  dialogue:[
    {who:"bot",cn:"你在创作什么新作品？灵感从哪里来？",en:"What new work are you creating? Where does your inspiration come from?"},
    {who:"you",cn:"我在写一部短篇小说，灵感来源于一次旅行。",en:"I'm writing a short story, inspired by a trip."},
    {who:"bot",cn:"小说的情节和人物设定好了吗？",en:"Have you set the plot and characters of the story?"},
    {who:"you",cn:"大致有了框架。主角是一个在异国他乡求学的年轻人。",en:"I have a rough framework. The protagonist is a young person studying abroad."},
    {who:"bot",cn:"环境的描写和叙事的方式也很重要。",en:"Environmental description and narrative style are also important."},
    {who:"you",cn:"我在尝试用第一人称叙事来增强代入感。",en:"I'm trying first-person narration to enhance the sense of immersion."}
  ]},
  {title:"Scholarship",level:"HSK 9",icon:"fa-graduation-cap",
  words:[
    {cn:"学术",py:"xué shù",en:"Academia / scholarship",tip:"学=study, 术=art."},
    {cn:"论文",py:"lùn wén",en:"Research paper",tip:"论=discuss, 文=writing."},
    {cn:"答辩",py:"dá biàn",en:"Thesis defense / oral exam",tip:"答=answer, 辩=argue."},
    {cn:"期刊",py:"qī kān",en:"Journal / periodical",tip:"期=period, 刊=publication."},
    {cn:"引用",py:"yǐn yòng",en:"Citation / reference",tip:"引=quote, 用=use."},
    {cn:"导师",py:"dǎo shī",en:"Advisor / supervisor",tip:"导=guide, 师=teacher."}
  ],
  dialogue:[
    {who:"bot",cn:"你的博士论文进展如何？",en:"How is your doctoral thesis progressing?"},
    {who:"you",cn:"初稿已经完成了，正在准备下个月的答辩。",en:"The first draft is complete, and I'm preparing for next month's defense."},
    {who:"bot",cn:"论文的引用文献需要再检查一遍。",en:"The cited references in the paper need to be checked again."},
    {who:"you",cn:"好的，我会确保所有引用都符合学术规范。",en:"OK, I'll make sure all citations meet academic standards."},
    {who:"bot",cn:"期刊投稿也可以开始考虑了。",en:"You can also start considering journal submissions."},
    {who:"you",cn:"导师建议我先在核心期刊上发表一篇。",en:"My advisor suggested I publish one paper in a core journal first."}
  ]}
];

const EXTRA_ROLEPLAY_SCENARIOS = [
  {
    name: "Doctor Visit",
    match: ["doctor", "hospital", "sick", "health", "hsk 4 health"],
    botRole: "医生 👨‍⚕️",
    userRole: "病人 🤒",
    prompt: "我们来做一个角色扮演对话。你是医院的医生，我是病人。我觉得不舒服来看病。请先用中文问我有什么症状。"
  },
  {
    name: "Hotel Check-in",
    match: ["hotel", "check in", "hotel check", "travel hotel", "hsk 4 hotel"],
    botRole: "前台 🏨",
    userRole: "客人 🧳",
    prompt: "我们来做一个角色扮演对话。你是酒店的前台，我是客人。我想办理入住。请先用中文打招呼，问我有没有预订。"
  },
  {
    name: "Job Interview",
    match: ["job", "interview", "work", "hsk 4 job", "career"],
    botRole: "面试官 💼",
    userRole: "面试者 🎓",
    prompt: "我们来做一个角色扮演对话。你是人事经理，我在面试工作。请先用中文欢迎我，让我介绍自己和工作经验。"
  },
  {
    name: "Library & Study",
    match: ["library", "study", "book", "hsk classroom", "student"],
    botRole: "图书管理员 📚",
    userRole: "学生 🎒",
    prompt: "我们来做一个角色扮演对话。你是图书管理员，我是学生。我来图书馆找中文学习资料。请先用中文打招呼，问我需要什么帮助。"
  },
  {
    name: "Taxi Ride",
    match: ["taxi", "cab", "ride", "transport", "hsk 4 transport", "direction"],
    botRole: "出租车司机 🚕",
    userRole: "乘客 🚶",
    prompt: "我们来做一个角色扮演对话。你是出租车司机，我是乘客。我要去一个著名的景点。请先用中文打招呼，问我去哪里。"
  }
];
