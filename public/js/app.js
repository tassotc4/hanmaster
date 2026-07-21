
// H. Multi-Language Translations & Study Reminders Setup
let currentAppLang = 'en';
try { currentAppLang = localStorage.getItem('app_lang') || 'en'; } catch(e) {}

const OFFLINE_DICTIONARY = {
  "es": {
    "'+text+'": "'+texto+'",
    "+ suggestedAnswer +": "+ respuesta sugerida +",
    ", e);\n  }\n}\n\nfunction sim(a,b){\n  const cleanA = a.replace(/[.,\\/#!$%\\^&\\*;:{}=\\-_`~()？。，！、\\s]/g,": ", e);\n  }\n}\n\nfunción sim(a,b){\n  const cleanA = a.replace(/[.,\\/#!$%\\^&\\*;:{}=\\-_`~()？。，！、\\s]/g,",
    "1st Tone — High flat": "1er tono: bemol alto",
    "2nd Tone — Rising": "2do tono: ascendente",
    "3rd Tone — Dipping": "3.er tono: inmersión",
    "4th Tone — Falling": "Cuarto tono: caída",
    "<b>A + 比 + B + Adj + (Complement)</b><br><br>&bull; 他比我高 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他比我高', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He is taller than me)<br>&bull; 苹果比西瓜便宜 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('苹果比西瓜便宜', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Apples are cheaper than watermelons)<br>&bull; 他跑得比我快得多 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他跑得比我快得多', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He runs much faster than me)": "<b>A + 比 + B + Adj + (Complemento)</b><br><br>• 他比我高 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); hablar('他比我高', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Es más alto que yo)<br>• 苹果比西瓜便宜 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); hablar('苹果比西瓜便宜', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Las manzanas son más baratas que sandías)<br>• 他跑得比我快得多 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); hablar('他跑得比我快得多', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Corre mucho más rápido que yo)",
    "<b>Obj + 被 + Agent + Verb + Result</b><br><br>&bull; 信已经被寄走了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('信已经被寄走了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (The letter has already been sent)<br>&bull; 他被老师批评了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他被老师批评了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He was criticized by the teacher)<br>&bull; 蛋糕被弟弟吃光了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('蛋糕被弟弟吃光了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (The cake was completely eaten by younger brother)": "<b>Obj + 被 + Agente + Verbo + Resultado</b><br><br>• 信已经被寄走了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); hablar('信已经被寄走了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (La carta ya ha sido enviada)<br>• 他被老师批评了 <span class=\"sp-btn\" onclick=\"event.stopPropagation() talk('他被老师批评了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Fue criticado por el profesor)<br>• 蛋糕被弟弟吃光了 <span class=\"sp-btn\" onclick=\"event.stopPropagation() talk('蛋糕被弟弟吃光了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (El hermano menor se comió completamente el pastel)",
    "<b>Subj + 把 + Obj + Verb + Result</b><br><br>&bull; 我把门关了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我把门关了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (I closed the door)<br>&bull; 她把衣服洗干净了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('她把衣服洗干净了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (She washed the clothes clean)<br>&bull; 请把手机关掉 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('请把手机关掉', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Please turn off your phone)<br><br>Object must be specific.": "<b>Sujeto + 把 + Obj + Verbo + Resultado</b><br><br>• 我把门关了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); hablar('我把门关了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Cerré la puerta)<br>• 她把衣服洗干净了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); hablar('她把衣服洗干净了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Lavó la ropa clean)<br>• 请把手机关掉 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('请把手机关掉', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Apague su teléfono)<br><br>El objeto debe ser específico.",
    "<b>Subj + 是 + Detail + Verb + 的</b><br><br>&bull; 我们是昨天认识的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我们是昨天认识的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (We met yesterday - time)<br>&bull; 这本书是在北京买的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('这本书是在北京买的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (This book was bought in Beijing - place)<br>&bull; 他是和朋友一起来的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他是和朋友一起来的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He came with friends - manner)": "<b>Sujeto + 是 + Detalle + Verbo + 的</b><br><br>• 我们是昨天认识的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); hablar('我们是昨天认识的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Nos conocimos ayer - hora)<br>• 这本书是在北京买的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); hablar('这本书是在北京买的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Este libro fue comprado en Beijing - lugar)<br>• 他是和朋友一起来的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); hablar('他是和朋友一起来的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Vino con amigos - modales)",
    "<b>Verb + 了 + Obj</b><br><br>&bull; 他去学校了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他去学校了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He went to school)<br>&bull; 我喝了三杯咖啡 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我喝了三杯咖啡', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (I drank three cups of coffee)<br>&bull; 你吃饭了吗？ <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('你吃饭了吗？', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Have you eaten?)": "<b>Verbo + 了 + Obj</b><br><br>• 他去学校了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); hablar('他去学校了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Fue a escuela)<br>• 我喝了三杯咖啡 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); hablar('我喝了三杯咖啡', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Bebí tres tazas de café)<br>• 你吃饭了吗？ <span class=\"sp-btn\" onclick=\"event.stopPropagation(); hablar('你吃饭了吗？', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (¿Has comido?)",
    "<b>一边 + Verb 1 + 一边 + Verb 2</b><br><br>&bull; 我喜欢一边听音乐一边跑步 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我喜欢一边听音乐一边跑步', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (I like running while listening to music)<br>&bull; 不要一边开车一边玩手机 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('不要一边开车一边玩手机', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Do not play with your phone while driving)<br>&bull; 我们一边喝茶一边聊天吧 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我们一边喝茶一边聊天吧', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Let's drink tea while chatting)": "<b>一边 + Verbo 1 + 一边 + Verbo 2</b><br><br>• 我喜欢一边听音乐一边跑步 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); hablar('我喜欢一边听音乐一边跑步', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Me gusta correr mientras escucho música)<br>• 不要一边开车一边玩手机 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); hablar('不要一边开车一边玩手机', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (No juegues con tu teléfono mientras conduces)<br>•我们一边喝茶一边聊天吧 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); hablar('我们一边喝茶一边聊天吧', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Bebamos té mientras charlamos)",
    "<b>太 + Adj/Verb + 了</b><br><br>&bull; 这个太贵了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('这个太贵了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (This is too expensive)<br>&bull; 他太累了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他太累了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He is too tired)<br>&bull; 太好了！<span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('太好了！', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Extremely good! / Great!)": "<b>太 + Adj/Verbo + 了</b><br><br>• 这个太贵了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); hablar('这个太贵了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Esto también es caro)<br>• 他太累了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); hablar('他太累了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Está demasiado cansado)<br>• 太好了！<span class=\"sp-btn\" onclick=\"event.stopPropagation(); hablar('太好了！', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (¡Extremadamente bueno! / ¡Genial!)",
    "<b>虽然... 但是...</b><br><br>&bull; 虽然天气不好，但是他还是出去了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然天气不好，但是他还是出去了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Although the weather was bad, he still went out)<br>&bull; 虽然这件衣服很贵，但是我很喜欢 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然这件衣服很贵，但是我很喜欢', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Although this clothing is expensive, I like it very much)<br>&bull; 虽然他病了，但是他坚持工作 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然他病了，但是他坚持工作', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Although he was sick, he persisted in working)": "<b>虽然... 但是...</b><br><br>• 虽然天气不好,但是他还是出去了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); hablar('虽然天气不好，但是他还是出去了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Aunque hacía mal tiempo, aun así salió)<br>•虽然这件衣服很贵，但是我很喜欢 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); hablar('虽然这件衣服很贵，但是我很喜欢', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Aunque esta ropa es cara, me gusta mucho)<br>• 虽然他病了，但是他坚持工作 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); hablar('虽然他病了，但是他坚持工作', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Aunque estaba enfermo, persistió en trabajar)",
    "A little fever. I don't want to go to the hospital, I want to take some medicine.": "Un poco de fiebre. No quiero ir al hospital, quiero tomar algún medicamento.",
    "A proposal or project plan.": "Una propuesta o plan de proyecto.",
    "Achieving a positive outcome.": "Logrando un resultado positivo.",
    "Add 吗 to make any statement a yes/no question.": "Agregue 吗 para hacer que cualquier afirmación sea una pregunta de sí o no.",
    "After playing soccer we can also go sing karaoke, how about that?": "Después de jugar al fútbol también podemos ir a cantar al karaoke, ¿qué te parece?",
    "Although Chinese is hard, it is very interesting.": "Aunque el chino es difícil, es muy interesante.",
    "Are you preparing to bring a suitcase or a backpack?": "¿Estás preparándote para traer una maleta o una mochila?",
    "At the Restaurant": "en el restaurante",
    "Basic Greetings": "Saludos básicos",
    "Be late": "llegar tarde",
    "Beijing is great! Have you bought the train ticket?": "¡Pekín es genial! ¿Has comprado el billete de tren?",
    "Body / health": "Cuerpo / salud",
    "Both family and physical home.": "Tanto la familia como el hogar físico.",
    "Bring a camera, you can take many nice photos.": "Trae una cámara, puedes tomar muchas fotos bonitas.",
    "Buy ticket": "comprar boleto",
    "Camera": "Cámara",
    "Can it be a bit cheaper? Is two hundred and fifty okay?": "¿Puede ser un poco más barato? ¿Están bien doscientos cincuenta?",
    "Catch a cold": "Resfriarse",
    "Character": "Personaje",
    "Cheap / inexpensive": "Barato / barato",
    "Click to view vocabulary": "Haga clic para ver el vocabulario",
    "Clothes": "Ropa",
    "Colleague / coworker": "colega/compañero de trabajo",
    "Community of people.": "Comunidad de personas.",
    "Company": "Compañía",
    "Conjunction Embora/Mas": "Conjunción Embora/Mas",
    "Convenience of travel.": "Comodidad de viajar.",
    "Cooked rice": "arroz cocido",
    "Correct. Then how much money do you have?": "Correcto. Entonces ¿cuánto dinero tienes?",
    "Dad": "Papá",
    "Dad, mom, an older sister, and me.": "Papá, mamá, una hermana mayor y yo.",
    "Daily Routine": "Rutina diaria",
    "Daughter": "Hija",
    "Deep study of a subject.": "Estudio profundo de un tema.",
    "Do you have a fever? Do you need to go to the hospital to see a doctor?": "¿Tienes fiebre? ¿Necesita ir al hospital a ver a un médico?",
    "Do you like sports? For example, playing basketball?": "¿Te gustan los deportes? Por ejemplo, ¿jugar baloncesto?",
    "Do you often meet with your manager?": "¿Se reúne a menudo con su jefe?",
    "Document of work history.": "Documento de historial laboral.",
    "Does your older sister work?": "¿Tu hermana mayor trabaja?",
    "Drinking more water and sleeping more will make your body recover faster.": "Beber más agua y dormir más hará que tu cuerpo se recupere más rápido.",
    "Eat breakfast": "desayunar",
    "Excellent, I look forward to it!": "Excelente, lo espero con ansias!",
    "Exercise": "Ejercicio",
    "Expensive": "Caro",
    "Expresses exchanging views.": "Expresa el intercambio de opiniones.",
    "Face-to-face evaluation.": "Evaluación presencial.",
    "Family / home": "Familia / hogar",
    "Field of study or expertise.": "Campo de estudio o especialización.",
    "General term for garments.": "Término general para prendas de vestir.",
    "Get off work": "salir del trabajo",
    "Get sick": "enfermarse",
    "Get up": "Levantarse",
    "Giving consent.": "Dar consentimiento.",
    "Go to work": "ir a trabajar",
    "Good, then I want a bowl of beef noodles, and another bowl of rice.": "Bien, entonces quiero un plato de fideos con carne y otro plato de arroz.",
    "Goodbye": "Adiós",
    "Goodbye teacher!": "¡Adiós maestro!",
    "Great! Do you have a daughter and a son?": "¡Excelente! ¿Tienes una hija y un hijo?",
    "Great! I am going to play soccer on Saturday, do you want to join?": "¡Excelente! Voy a jugar al fútbol el sábado, ¿quieres unirte?",
    "Great, thank you for telling me!": "Genial, gracias por decírmelo!",
    "Growth and expansion.": "Crecimiento y expansión.",
    "Having great significance.": "Teniendo gran importancia.",
    "He is eating while watching TV.": "Él está comiendo mientras ve la televisión.",
    "Health & Body": "Salud y cuerpo",
    "Hello": "Hola",
    "Hello!": "¡Hola!",
    "Hello! How many apples do you have?": "¡Hola! ¿Cuántas manzanas tienes?",
    "Hello! What clothes do you want to buy?": "¡Hola! ¿Qué ropa quieres comprar?",
    "Hobbies & Sports": "Pasatiempos y deportes",
    "Hospital": "Hospital",
    "Hotel / guesthouse": "Hotel/casa de huéspedes",
    "How are you?": "¿Cómo estás?",
    "How is the relationship between colleagues? Do they help each other?": "¿Cómo es la relación entre compañeros? ¿Se ayudan entre sí?",
    "How many / how much": "cuantos/cuanto",
    "How many people in your family?": "¿Cuántas personas en tu familia?",
    "Hundred": "Centenar",
    "I am ready, I believe this plan will succeed.": "Estoy listo, creo que este plan tendrá éxito.",
    "I am ready, and I have three years of experience.": "Estoy listo y tengo tres años de experiencia.",
    "I am very busy, studying a lot.": "Estoy muy ocupada, estudiando mucho.",
    "I arrive at the company very early every day, never late.": "Llego a la empresa todos los días muy temprano, nunca tarde.",
    "I booked a hotel near Tiananmen Square.": "Reservé un hotel cerca de la plaza de Tiananmen.",
    "I bought a book.": "Compré un libro.",
    "I came by plane.": "Vine en avión.",
    "I don't have, I'm not married yet.": "No tengo, todavía no estoy casado.",
    "I don't like playing basketball, I like playing soccer.": "No me gusta jugar baloncesto, me gusta jugar fútbol.",
    "I eat breakfast first, then go to the park to run and exercise.": "Primero desayuno y luego voy al parque a correr y hacer ejercicio.",
    "I feel a headache, I might be sick.": "Siento dolor de cabeza, puede que esté enfermo.",
    "I get up at 6:30 every morning.": "Me levanto a las 6:30 todas las mañanas.",
    "I go to sleep at eleven o'clock sharp at night.": "Me voy a dormir a las once en punto de la noche.",
    "I go to work at eight, going by subway.": "Voy a trabajar a las ocho, en metro.",
    "I have three apples.": "Tengo tres manzanas.",
    "I have two hundred yuan.": "Tengo doscientos yuanes.",
    "I haven't bought the ticket yet, I will go buy it tomorrow.": "Aún no he comprado el billete, mañana iré a comprarlo.",
    "I like listening to music and watching movies at home.": "Me gusta escuchar música y ver películas en casa.",
    "I make dinner, watch TV, and then read books and study.": "Preparo la cena, veo televisión y luego leo libros y estudio.",
    "I plan to travel to Beijing. I heard Beijing is very beautiful.": "Planeo viajar a Beijing. He oído que Beijing es muy hermosa.",
    "I put the book on the table.": "Dejo el libro sobre la mesa.",
    "I think it is suitable, we can sign the contract.": "Creo que es adecuado, podemos firmar el contrato.",
    "I want a cup of ice water, thank you.": "Quiero un vaso de agua helada, gracias.",
    "I want to buy a red coat.": "Quiero comprar un abrigo rojo.",
    "I want to buy, how much is one book?": "Quiero comprar ¿cuanto cuesta un libro?",
    "I want to eat noodles. Which noodles are the most delicious here?": "Quiero comer fideos. ¿Qué fideos son los más deliciosos aquí?",
    "I will bring a large suitcase because I have many clothes.": "Llevaré una maleta grande porque tengo mucha ropa.",
    "I work for a computer technology company.": "Trabajo para una empresa de tecnología informática.",
    "I'm also very good. Have you been busy lately?": "Yo también soy muy bueno. ¿Has estado ocupado últimamente?",
    "I'm very good": "soy muy bueno",
    "I'm very good, thanks! And you?": "Estoy muy bien, gracias! ¿Y tú?",
    "Impact on something.": "Impacto en algo.",
    "Increasing quality or level.": "Aumento de calidad o nivel.",
    "Informal term for father.": "Término informal para padre.",
    "Informal term for mother.": "Término informal para madre.",
    "Introducing Family": "Presentando a la familia",
    "Is the work tiring? What time do you get off work?": "¿El trabajo es agotador? ¿A qué hora sales del trabajo?",
    "Is there cold medicine at home?": "¿Hay medicamentos para el resfriado en casa?",
    "Is your work busy? What tasks do you have every day?": "¿Tu trabajo está ocupado? ¿Qué tareas tienes todos los días?",
    "Job & Workplace": "Empleo y lugar de trabajo",
    "Job / work": "Trabajo / trabajo",
    "Leasing living space.": "Arrendamiento de espacio habitable.",
    "Legal binding document.": "Documento legalmente vinculante.",
    "Listen to music": "escuchar musica",
    "Literally 'again meet' — see you!": "Literalmente \"volvemos a encontrarnos\", ¡nos vemos!",
    "Literally 'buy the list'.": "Literalmente 'comprar la lista'.",
    "Literally 'don't be polite'.": "Literalmente \"no seas educado\".",
    "Literally 'eat medicine' in Chinese.": "Literalmente \"comer medicina\" en chino.",
    "Literally 'electric shadow'.": "Literalmente 'sombra eléctrica'.",
    "Look at this coat, how is it? Very beautiful.": "Mira este abrigo, ¿cómo es? Muy hermoso.",
    "Making a resolution.": "Tomando una resolución.",
    "Manager": "Gerente",
    "Measure word": "medir palabra",
    "Meet at the school playground at 3:00 PM.": "Nos reuniremos en el patio del colegio a las 15:00 horas.",
    "Meeting / conference": "Reunión / conferencia",
    "Menu": "Menú",
    "Mom": "Mamá",
    "Monthly payment.": "Pago mensual.",
    "Movie / film": "Película / película",
    "My dad is a doctor, my mom is a teacher.": "Mi papá es médico, mi mamá es maestra.",
    "Negated with 没 (e.g. 没有).": "Negado con 没 (por ejemplo, 没有).",
    "No problem, I will definitely arrive on time.": "No hay problema, definitivamente llegaré a tiempo.",
    "No problem, please wait a moment, the food will be served shortly.": "No hay problema, espere un momento, la comida se servirá en breve.",
    "Number / digit": "Número / dígito",
    "Numbers & Counting": "Números y conteo",
    "Okay, I drank a lot of hot water, I am going to sleep now.": "Vale, bebí mucha agua caliente, ahora me voy a dormir.",
    "Okay, I have already put the camera in the box.": "Bien, ya puse la cámara en la caja.",
    "Okay, I will go to the fitting room to try it on.": "Vale, iré al probador a probármelo.",
    "Okay, are you ready to order now?": "Bien, ¿estás listo para hacer el pedido ahora?",
    "Okay, checkout, here is the money!": "Bien, paga, ¡aquí está el dinero!",
    "Okay, thank you teacher.": "Vale, gracias profesor.",
    "Okay, you can have it for two hundred and fifty. Do you want to try it on?": "Vale, puedes quedártelo por doscientos cincuenta. ¿Quieres probártelo?",
    "Okay. Would you like something to drink?": "Bueno. ¿Quieres algo de beber?",
    "One book is ten yuan. Two hundred yuan can buy twenty books.": "Un libro cuesta diez yuanes. Con doscientos yuanes se pueden comprar veinte libros.",
    "One, two, three": "Uno, dos, tres",
    "Opposite of 上班.": "Lo contrario de 上班.",
    "Opposite of 贵.": "Lo contrario de 贵.",
    "Order food": "pedir comida",
    "Ordering Food": "ordenar comida",
    "Our beef noodles are very famous and delicious.": "Nuestros fideos con carne son muy famosos y deliciosos.",
    "Owner of the property.": "Dueño de la propiedad.",
    "Pay the bill": "pagar la factura",
    "Physical training.": "Entrenamiento físico.",
    "Pitch curve plots here": "Gráficos de curva de tono aquí",
    "Play basketball": "jugar baloncesto",
    "Play soccer": "Jugar fútbol",
    "Please introduce your major and work experience.": "Por favor introduce tu especialización y experiencia laboral.",
    "Really? I want to go too! What time does it start?": "¿En realidad? ¡Yo también quiero ir! ¿A qué hora empieza eso?",
    "Researching the development of society is very important.": "Investigar el desarrollo de la sociedad es muy importante.",
    "Rest": "Descansar",
    "Security money paid upfront.": "Dinero de seguridad pagado por adelantado.",
    "Select a tone below to practice": "Selecciona un tono a continuación para practicar",
    "She doesn't work, she is a student.": "Ella no trabaja, es estudiante.",
    "Shopping & Prices": "Compras y precios",
    "Simultaneous Actions": "Acciones simultáneas",
    "Skill level or power.": "Nivel de habilidad o potencia.",
    "Skills gained over time.": "Habilidades adquiridas con el tiempo.",
    "Sleep": "Dormir",
    "Soft 'x' — like a gentle 'sh'.": "'x' suave, como una 'sh' suave.",
    "Son": "Hijo",
    "Speak to visualize tone": "Habla para visualizar el tono.",
    "Sports / exercise": "Deportes / ejercicio",
    "Store / shop": "Tienda / tienda",
    "Suitcase / luggage": "Maleta/equipaje",
    "Take medicine": "tomar medicina",
    "Taking charge of a task.": "Hacerse cargo de una tarea.",
    "Thank you": "Gracias",
    "Thank you for your care, see you tomorrow.": "Gracias por su atención, nos vemos mañana.",
    "Thank you teacher, I will show you photos when I get back!": "Gracias profesora, cuando vuelva les mostraré fotos!",
    "That is very convenient! Wish you a pleasant trip!": "¡Eso es muy conveniente! ¡Te deseo un agradable viaje!",
    "That's great! Are you ever late for work?": "¡Genial! ¿Alguna vez llegas tarde al trabajo?",
    "That's too hard! You should rest more.": "¡Eso es demasiado difícil! Deberías descansar más.",
    "The Completion Particle 了": "La partícula de finalización 了",
    "The action of consuming solid food.": "La acción de consumir alimentos sólidos.",
    "The colleagues are all very nice, supporting each other in work.": "Todos los compañeros son muy amables y se apoyan mutuamente en el trabajo.",
    "The first three numbers in Chinese.": "Los tres primeros números en chino.",
    "The general measure word for people/things.": "La palabra de medida general para personas/cosas.",
    "The most common Chinese greeting. Use it anytime.": "El saludo chino más común. Úselo en cualquier momento.",
    "The transportation here is very convenient, do you think the rent is suitable?": "El transporte aquí es muy conveniente, ¿crees que el alquiler es adecuado?",
    "The wallet was stolen.": "Le robaron la billetera.",
    "The 太...了 Structure": "La estructura 太...了",
    "The 把 Sentence": "La 把 Sentencia",
    "The 是...的 Focus Structure": "La estructura de enfoque 是...的",
    "The 比 Comparison": "La comparación 比",
    "The 被 Passive": "El 被 Pasivo",
    "Then take the medicine immediately, and go lie down in bed to rest.": "Luego tome el medicamento inmediatamente y acuéstese en la cama para descansar.",
    "There are five people here.": "Hay cinco personas aquí.",
    "There are four people in my family.": "Hay cuatro personas en mi familia.",
    "Third tone. Do not confuse with 卖 (mài = to sell).": "Tercer tono. No confundir con 卖 (mài = vender).",
    "This is four hundred yuan, now on sale for three hundred.": "Son cuatrocientos yuanes, ahora a la venta por trescientos.",
    "This is very beautiful, but a bit expensive. How much?": "Esto es muy bonito, pero un poco caro. ¿Cuánto cuesta?",
    "Time to study Chinese! 汉": "¡Es hora de estudiar chino! 汉",
    "To buy": "comprar",
    "To drink": "beber",
    "To eat": "para comer",
    "To have / exist": "tener / existir",
    "To sing": "cantar",
    "To travel / tourism": "Viajar/turismo",
    "To try on / test": "Para probar/probar",
    "Today is colder than yesterday.": "Hoy hace más frío que ayer.",
    "Today is too hot.": "Hoy hace demasiado calor.",
    "Today we need to discuss the new plan, are you ready?": "Hoy necesitamos discutir el nuevo plan, ¿estás listo?",
    "Tone Pitch Visualizer": "Visualizador de tono",
    "Train ticket": "billete de tren",
    "Travel Plans": "Planes de viaje",
    "Two (quantity)": "Dos (cantidad)",
    "Two hundred yuan can buy many books. Do you want to buy books?": "Con doscientos yuanes se pueden comprar muchos libros. ¿Quieres comprar libros?",
    "Two hundred yuan in total. Thank you for coming!": "Doscientos yuanes en total. ¡Gracias por venir!",
    "Use 两 instead of 二 before measure words.": "Utilice 两 en lugar de 二 antes de las palabras de medida.",
    "Used for beverages/soups.": "Utilizado para bebidas/sopas.",
    "Used for business gatherings.": "Utilizado para reuniones de negocios.",
    "Used for counting hundreds (e.g. 一百 = 100).": "Se utiliza para contar centenas (por ejemplo, 一百 = 100).",
    "Used to describe high prices.": "Se utiliza para describir precios altos.",
    "Verb + 了 for action completion.": "Verbo + 了 para completar la acción.",
    "Verb for testing clothes or trying them.": "Verbo para probar ropa o probarla.",
    "Very busy every day, many meetings to attend.": "Muy ocupado todos los días, muchas reuniones a las que asistir.",
    "Very good! Then how many people are here?": "¡Muy bien! ¿Entonces cuántas personas hay aquí?",
    "Very suitable! Shall I pack it for you?": "¡Muy adecuado! ¿Te lo empaco?",
    "Vocab List": "Lista de vocabulario",
    "Waiter, check please! How much is it in total?": "¡Camarero, consulte por favor! ¿Cuanto es en total?",
    "Waiter, please bring the menu.": "Camarero, por favor traiga el menú.",
    "What do you do after getting off work and going home?": "¿Qué haces después de salir del trabajo y volver a casa?",
    "What do you like to do on weekends?": "¿Qué te gusta hacer los fines de semana?",
    "What do your dad and mom do for work?": "¿Qué hacen tu papá y tu mamá en el trabajo?",
    "What time do you get up every day?": "¿A qué hora te levantas todos los días?",
    "What time do you go to sleep every day?": "¿A qué hora te vas a dormir todos los días?",
    "What time do you go to work? How do you go?": "¿A qué hora vas a trabajar? ¿Cómo vas?",
    "What's wrong? You don't look very well.": "¿Qué ocurre? No te ves muy bien.",
    "Where do you want to travel next month?": "¿Adónde quieres viajar el próximo mes?",
    "Which company do you work for?": "¿Para qué empresa trabajas?",
    "Which hotel do you plan to stay at? Have you booked it?": "¿En qué hotel piensas quedarte? ¿Lo has reservado?",
    "Who are they?": "¿Quiénes son?",
    "Work is a bit tiring, I get off at 5:30 in the afternoon.": "El trabajo es un poco agotador, salgo a las 5:30 de la tarde.",
    "Yes, I bought some cold medicine yesterday.": "Sí, ayer compré un medicamento para el resfriado.",
    "Yes, it has a profound influence on improving standard of living.": "Sí, tiene una profunda influencia en la mejora del nivel de vida.",
    "Yes, the manager holds a meeting with us every morning.": "Sí, el gerente se reúne con nosotros todas las mañanas.",
    "You get up so early! What do you do after getting up?": "¡Te levantas tan temprano! ¿Qué haces después de levantarte?",
    "You're welcome": "De nada",
    "You're welcome. That's all for today, goodbye!": "De nada. Eso es todo por hoy, ¡adiós!",
    "ability / capability": "habilidad / capacidad",
    "airplane": "avión",
    "and / harmony": "y / armonía",
    "apple": "manzana",
    "big": "grande",
    "car": "auto",
    "cat": "gato",
    "chair": "silla",
    "click card again to close": "haga clic en la tarjeta nuevamente para cerrar",
    "contract / agreement": "contrato / acuerdo",
    "cup": "taza",
    "cup / glass": "taza / vaso",
    "daughter": "hija",
    "day/sky": "día/cielo",
    "deposit": "depósito",
    "dog": "perro",
    "drink": "beber",
    "eat": "comer",
    "experience": "experiencia",
    "father": "padre",
    "friend": "amigo",
    "good": "bien",
    "good / well": "bien / bien",
    "he / him": "él / él",
    "hello": "Hola",
    "hospital": "hospital",
    "hot": "caliente",
    "important": "importante",
    "influence / effect": "influencia / efecto",
    "items": "elementos",
    "landlord": "propietario",
    "major / professional": "mayor / profesional",
    "meeting / conference": "reunión / conferencia",
    "middle/China": "medio/China",
    "money": "dinero",
    "mother": "madre",
    "not have / no": "no tener / no",
    "o'clock / point": "en punto / punto",
    "older sister": "hermana mayor",
    "person": "persona",
    "plural suffix": "sufijo plural",
    "rent money": "alquilar dinero",
    "resume / CV": "currículum vitae",
    "rice": "arroz",
    "scheme / plan": "esquema / plan",
    "school": "escuela",
    "she / her": "ella / ella",
    "small": "pequeño",
    "society": "sociedad",
    "son": "hijo",
    "steam / gas": "vapor/gas",
    "store": "almacenar",
    "student": "alumno",
    "study": "estudiar",
    "success / successful": "éxito / exitoso",
    "suggestion particle": "partícula de sugerencia",
    "table / desk": "mesa/escritorio",
    "tea": "té",
    "teacher": "maestro",
    "to agree": "estar de acuerdo",
    "to ask": "preguntar",
    "to be responsible for": "ser responsable de",
    "to call / be named": "llamar / ser nombrado",
    "to decide": "decidir",
    "to develop": "desarrollar",
    "to discuss": "discutir",
    "to do": "hacer",
    "to drink": "beber",
    "to eat": "comer",
    "to improve / raise": "mejorar / elevar",
    "to interview / job interview": "entrevistar / entrevista de trabajo",
    "to rent a house/apartment": "alquilar una casa/apartamento",
    "to research": "investigar",
    "to shine / photo": "brillar / foto",
    "train": "tren",
    "transportation / traffic": "transporte / tráfico",
    "water": "agua",
    "what": "qué",
    "you": "tú",
    "younger sister": "hermana menor",
    "一边 + Verb 1 + 一边 + Verb 2": "一边 + Verbo 1 + 一边 + Verbo 2",
    "上=go to, 班=shift.": "上=ir a, 班=cambiar.",
    "买=buy, 票=ticket.": "买=comprar, 票=boleto.",
    "休=rest on tree, 息=breath.": "休=descanso en el árbol, 息=respiración.",
    "会=gather, 议=discuss.": "会=reunir, 议=discutir.",
    "儿=child, 子=noun suffix.": "儿=niño, 子=sufijo sustantivo.",
    "公=public, 司=manage. Company.": "公=público, 司=administrar. Compañía.",
    "医=medical, 院=courtyard.": "医=médico, 院=patio.",
    "同=together, 事=business.": "同=juntos, 事=negocios.",
    "听=hear/listen, 音乐=music.": "听=escuchar/escuchar, 音乐=música.",
    "唱=sing(v), 歌=song(n).": "唱=cantar(v), 歌=canción(n).",
    "商=commerce, 店=shop.": "商=comercio, primitivo=tienda.",
    "多=many, 少=few. Together = quantity.": "多=muchos, 少=pocos. Juntos = cantidad.",
    "太 + Adj + 了 for intensification.": "太 + Adj + 了 para intensificación.",
    "女=female, 儿=child.": "女=mujer, 儿=niño.",
    "宾=guest, 馆=building.": "宾=invitado, 馆=edificio.",
    "工=work/craft, 作=make. Work.": "工=trabajo/artesanía, 作=hacer. Trabajar.",
    "很 links subject and adjective here.": "很 enlaza sujeto y adjetivo aquí.",
    "感=feel, 冒=risk/emit. Cold.": "感=sentir, 冒=arriesgar/emitir. Frío.",
    "打=hit/play, 篮球=basketball.": "打=golpear/jugar, 篮球=baloncesto.",
    "把 for disposal.": "把 para su eliminación.",
    "数=count, 字=character.": "数=recuento, 字=personaje.",
    "旅=traveler, 游=wander/swim.": "旅=viajero, 游=pasear/nadar.",
    "早饭=morning meal.": "早饭=comida de la mañana.",
    "是...的 to emphasize time, place, or manner.": "是...的 para enfatizar el tiempo, el lugar o la manera.",
    "比 for comparison.": "比 para comparar.",
    "火车=train, 票=ticket.": "火车=tren, 票=boleto.",
    "点=select/order, 菜=dish.": "点=seleccionar/ordenar, 菜=plato.",
    "照相=take photo, 机=machine.": "照相=tomar foto, 机=máquina.",
    "生=grow/beget, 病=illness.": "生=crecer/engendrar, 病=enfermedad.",
    "睡=sleep(v), 觉=sleep(n).": "睡=dormir(v), 觉=dormir(n).",
    "米=raw rice, 饭=cooked meal.": "米=arroz crudo, 饭=comida cocida.",
    "经=manage, 理=logic. Manager.": "经=administrar, 理=lógica. Gerente.",
    "菜=dish, 单=list. Food list = menu.": "菜=plato, 单=lista. Lista de comida = menú.",
    "虽然 + A, 但是 + B": "虽然 + A, 但是 + B",
    "行李=baggage, 箱=box.": "行李=equipaje, 箱=caja.",
    "被 for passive.": "被 para pasivo.",
    "起=rise, 床=bed.": "起=levantarse, 床=cama.",
    "踢=kick, 足球=football.": "踢=patada, 足球=fútbol.",
    "身=body, 体=form. Together = health.": "身=cuerpo, 体=forma. Juntos = salud.",
    "运=move, 动=action.": "运=mover, 动=acción.",
    "迟=late, 到=arrive.": "迟=tarde, 到=llegar.",
    "Speaking":"Hablante A","Speaker B":"Hablante B","Waiter":"Camarero","Customer":"Cliente","Friend A":"Amigo A","Friend B":"Amigo B","Customs Officer":"Oficial de Aduanas","Passenger":"Pasajero",
    "Student":"Estudiante","Roleplay Characters Assigned":"Personajes Asignados","Bot":"Bot","You":"Tú",
    "Teaching...":"Enseñando...","Listen to":"Escuchar a","speaking":"hablando","Type your response in the box below":"Escribe tu respuesta en el cuadro de abajo",
    "Your turn":"Tu turno","type below":"escribe abajo","replay":"repetir","speak":"habla","lines":"líneas",
    "Your Turn":"Tu Turno","Type Chinese below or press mic":"Escribe chino abajo o presiona micrófono",
    "No audio recorded. Try again.":"No se grabó audio. Intenta de nuevo.",
    "Recording... tap mic to stop":"Grabando... toca micrófono para detener",
    "Mic access denied. Use text box.":"Micrófono denegado. Usa el cuadro de texto.",
    "Transcribing...":"Transcribiendo...","Transcribing audio...":"Transcribiendo audio...",
    "Rate limited, retrying in ":"Límite alcanzado, reintentando en ","s...":"s...",
    "Heard: ":"Escuchado: ","Use":"Usar","Cancel":"Cancelar",
    "No speech detected — tap mic and speak clearly":"No se detectó habla — toca micrófono y habla claro",
    "No speech detected":"No se detectó habla","Transcription error: ":"Error de transcripción: ",
    "Error:":"Error:","Cancelled — tap mic to try again":"Cancelado — toca micrófono para intentar de nuevo",
    "Cancelled. Tap mic to speak again.":"Cancelado. Toca micrófono para hablar de nuevo.",
    "Your browser does not support microphone input. Use the text box instead.":"Tu navegador no soporta entrada de micrófono. Usa el cuadro de texto.",
    "Allow microphone access when prompted...":"Permite el acceso al micrófono cuando se solicite...",
    "Tap microphone again to start speaking.":"Toca el micrófono de nuevo para empezar a hablar.",
    "Mic Denied: Tap aA (or settings icon) in Safari address bar → Website Settings → Set Microphone to Allow → Reload page.":"Micrófono Denegado: Toca aA (o icono de ajustes) en la barra de direcciones de Safari → Ajustes del Sitio → Configurar Micrófono a Permitir → Recarga la página.",
    "Listening...":"Escuchando...","Auto-switching to recording...":"Cambiando a grabación...",
    "Mic Error":"Error de Micrófono","Try text box":"Prueba cuadro de texto",
    "Type Chinese characters first":"Escribe caracteres chinos primero",
    "Great!":"¡Excelente!","Getting there":"Casi listo","Keep practicing":"Sigue practicando",
    "Matched transcript:":"Transcripción coincidente:","Score:":"Puntuación:","/100":"/100",
    "Excellent!":"¡Excelente!","Good effort!":"¡Buen esfuerzo!",
    "Keep practicing!":"¡Sigue practicando!","Lesson Complete!":"¡Lección Completada!",
    "Average:":"Promedio:","Select another lesson above to continue.":"Selecciona otra lección arriba para continuar.",
    "Lesson complete!":"¡Lección completada!","Select a lesson above":"Selecciona una lección arriba",
    "Initials":"Iniciales","Finals":"Finales","Four Tones":"Cuatro Tonos",
    "Listen":"Escuchar","Practice":"Practicar","pts":"pts","See Results":"Ver Resultados",
    "Perfect starting point!":"¡Punto de partida perfecto!","Solid HSK 3 foundation!":"¡Base sólida de HSK 3!","Ready for HSK 2!":"¡Listo para HSK 2!",
    "Your Level:":"Tu Nivel:","/10":"/10",
    "Current":"Actual","Again (1m)":"Repetir (1m)","Hard (12h)":"Difícil (12h)","Good (1d)":"Bueno (1d)","Easy (4d)":"Fácil (4d)",
    "Card rescheduled:":"Tarjeta reprogramada:",
    "Flat (1st Tone)":"Plano (1er Tono)","Rising (2nd Tone)":"Ascendente (2do Tono)","Dipping (3rd Tone)":"Descendente (3er Tono)","Falling (4th Tone)":"Caída (4to Tono)",
    "Practice:":"Práctica:","Hum/Speak now...":"Tararea/Habla ahora...",
    "Analysis complete. Choose another tone to test!":"Análisis completo. ¡Elige otro tono para probar!",
    "Processing audio...":"Procesando audio...","Type or speak Chinese here — e.g. 你好":"Escribe o habla chino aquí — ej. 你好",
    "Transcription failed. Try typing.":"Transcripción fallida. Intenta escribir.",
    "Mic denied. Type instead.":"Micrófono denegado. Escribe en su lugar.",
    "Listening... Speak in Mandarin":"Escuchando... Habla en Mandarín",
    "Reviews due: ":"Revisiones pendientes: ","None":"Ninguno",
    "No vocabulary items loaded.":"No hay vocabulario cargado.",
    "Progress updated!":"¡Progreso actualizado!","Speaking speed: ":"Velocidad de habla: ",
    "Settings Saved! Mode: ":"¡Ajustes guardados! Modo: ","Live AI":"AI en Vivo","Simulated":"Simulado",
    "Thinking...":"Pensando...","Error":"Error","press mic":"presiona micrófono",
    "Live AI Mode:":"Modo AI en Vivo:","Connecting to Gemini to chat about":"Conectando con Gemini para hablar sobre",
    "Loaded ":"Cargado ","! Start speaking now.":"! Empieza a hablar ahora.",
    "Loaded a free lesson!":"¡Lección gratuita cargada!",
    "Hint selected! Speak now or click Submit.":"¡Pista seleccionada! Habla ahora o haz clic en Enviar.",
    "Unlock ":"Desbloquear ","Loaded HSK ":"HSK cargado "," lessons for you!":" lecciones para ti!",
    "Dialogue Roleplay Mode Active! Speak your role lines.":"¡Modo de Juego de Roles Activo! Habla tus líneas de personaje.",
    "Returned to Dialogue Study Mode.":"Volviste al Modo de Estudio de Diálogo.",
    "Study":"Estudiar","Roleplay":"Juego de Roles",
    "Correct! Well done!":"¡Correcto! ¡Bien hecho!","Incorrect. Try again!":"¡Incorrecto! ¡Intenta de nuevo!",
    "lessons":"lecciones","Your turn — press mic":"Tu turno — presiona micrófono",
    "Your Turn — speak":"Tu Turno — habla","Roleplay — Your Turn":"Juego de Roles — Tu Turno",
    "Roleplay — ":"Juego de Roles — ","Your Turn — type below":"Tu Turno — escribe abajo",
    "Type Chinese below or press mic":"Escribe chino abajo o presiona micrófono",
    "type below":"escribe abajo","speaking":"hablando","lines":"líneas","Listen to":"Escucha",
    "Live AI":"IA en Vivo","Simulated":"Simulado","Live AI Mode:":"Modo IA en Vivo:",
    "Avg":"Promedio","Select a lesson to begin":"Selecciona una lección para comenzar",
    "Current":"Actual","Next":"Siguiente","pts":"pts","Score:":"Puntuación:",
    "/10":"/10","/100":"/100","Average:":"Promedio:","items":"elementos",
    "First Meeting":"Primera Reunión",
    "Select a lesson above and respond by typing Chinese.":"Selecciona una lección arriba y responde escribiendo chino.",
    "Current Phrase":"Frase Actual",
    "No audio recorded. Try again.":"No se grabó audio. Intenta de nuevo.",
    "No speech detected":"No se detectó voz",
    "Mic Error":"Error de Micrófono","Try text box":"Usa el cuadro de texto",
    "Type your response in the box below":"Escribe tu respuesta en el cuadro abajo"
  },
  "fr": {
    "'+text+'": "'+texte+'",
    "+ suggestedAnswer +": "+Réponse suggérée +",
    ", e);\n  }\n}\n\nfunction sim(a,b){\n  const cleanA = a.replace(/[.,\\/#!$%\\^&\\*;:{}=\\-_`~()？。，！、\\s]/g,": ", e);\n  }\n}\n\nfonction sim(a,b){\n  const cleanA = a.replace(/[.,\\/#!$%\\^&\\*;:{}=\\-_`~()？。，！、\\s]/g,",
    "1st Tone — High flat": "1er ton — Aigu bémol",
    "2nd Tone — Rising": "2e ton – Montant",
    "3rd Tone — Dipping": "3ème ton – Trempage",
    "4th Tone — Falling": "4ème ton – Chute",
    "<b>A + 比 + B + Adj + (Complement)</b><br><br>&bull; 他比我高 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他比我高', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He is taller than me)<br>&bull; 苹果比西瓜便宜 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('苹果比西瓜便宜', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Apples are cheaper than watermelons)<br>&bull; 他跑得比我快得多 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他跑得比我快得多', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He runs much faster than me)": "<b>A + 比 + B + Adj + (Complément)</b><br><br>• 他比我高 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他比我高', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Il est plus grand que moi)<br>• 苹果比西瓜便宜 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('苹果比西瓜便宜', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Les pommes sont moins chères que les pastèques)<br>•他跑得比我快得多 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他跑得比我快得多', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Il court beaucoup plus vite que moi)",
    "<b>Obj + 被 + Agent + Verb + Result</b><br><br>&bull; 信已经被寄走了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('信已经被寄走了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (The letter has already been sent)<br>&bull; 他被老师批评了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他被老师批评了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He was criticized by the teacher)<br>&bull; 蛋糕被弟弟吃光了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('蛋糕被弟弟吃光了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (The cake was completely eaten by younger brother)": "<b>Obj + 被 + Agent + Verbe + Résultat</b><br><br>• 信已经被寄走了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('信已经被寄走了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (La lettre a déjà été envoyée)<br>• 他被老师批评了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他被老师批评了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Il a été critiqué par le professeur)<br>• 蛋糕被弟弟吃光了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('蛋糕被弟弟吃光了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Le gâteau a été complètement mangé par le jeune frère)",
    "<b>Subj + 把 + Obj + Verb + Result</b><br><br>&bull; 我把门关了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我把门关了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (I closed the door)<br>&bull; 她把衣服洗干净了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('她把衣服洗干净了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (She washed the clothes clean)<br>&bull; 请把手机关掉 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('请把手机关掉', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Please turn off your phone)<br><br>Object must be specific.": "<b>Subj + 把 + Obj + Verbe + Résultat</b><br><br>• 我把门关了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我把门关了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (J'ai fermé le porte)<br>• 她把衣服洗干净了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('她把衣服洗干净了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Elle a lavé les vêtements clean)<br>• 请把手机关掉 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('请把手机关掉', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Veuillez éteindre votre téléphone)<br><br>L'objet doit être spécifique.",
    "<b>Subj + 是 + Detail + Verb + 的</b><br><br>&bull; 我们是昨天认识的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我们是昨天认识的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (We met yesterday - time)<br>&bull; 这本书是在北京买的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('这本书是在北京买的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (This book was bought in Beijing - place)<br>&bull; 他是和朋友一起来的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他是和朋友一起来的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He came with friends - manner)": "<b>Subj + 是 + Détail + Verbe + 的</b><br><br>• 我们是昨天认识的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我们是昨天认识的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Nous nous sommes rencontrés hier - heure)<br>• 这本书是在北京买的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('这本书是在北京买的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Ce livre a été acheté à Pékin - endroit)<br>• 他是和朋友一起来的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他是和朋友一起来的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Il est venu avec des amis - manière)",
    "<b>Verb + 了 + Obj</b><br><br>&bull; 他去学校了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他去学校了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He went to school)<br>&bull; 我喝了三杯咖啡 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我喝了三杯咖啡', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (I drank three cups of coffee)<br>&bull; 你吃饭了吗？ <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('你吃饭了吗？', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Have you eaten?)": "<b>Verbe + 了 + Obj</b><br><br>• 他去学校了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他去学校了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Il est allé à école)<br>• 我喝了三杯咖啡 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我喝了三杯咖啡', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (J'ai bu trois tasses de café)<br>•你吃饭了吗？ <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('你吃饭了吗？', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Avez-vous mangé ?)",
    "<b>一边 + Verb 1 + 一边 + Verb 2</b><br><br>&bull; 我喜欢一边听音乐一边跑步 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我喜欢一边听音乐一边跑步', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (I like running while listening to music)<br>&bull; 不要一边开车一边玩手机 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('不要一边开车一边玩手机', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Do not play with your phone while driving)<br>&bull; 我们一边喝茶一边聊天吧 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我们一边喝茶一边聊天吧', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Let's drink tea while chatting)": "<b>一边 + Verbe 1 + 一边 + Verbe 2</b><br><br>• 我喜欢一边听音乐一边跑步 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我喜欢一边听音乐一边跑步', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (J'aime courir en écoutant de la musique)<br>• 不要一边开车一边玩手机 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('不要一边开车一边玩手机', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Ne jouez pas avec votre téléphone en conduisant)<br>• <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我们一边喝茶一边聊天吧', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Buvons du thé en discutant)",
    "<b>太 + Adj/Verb + 了</b><br><br>&bull; 这个太贵了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('这个太贵了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (This is too expensive)<br>&bull; 他太累了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他太累了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He is too tired)<br>&bull; 太好了！<span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('太好了！', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Extremely good! / Great!)": "<b>太 + Adj/Verbe + 了</b><br><br>• 这个太贵了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('这个太贵了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (C'est aussi cher)<br>• 他太累了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他太累了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Il est trop fatigué)<br>• 太好了！<span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('太好了！', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Extrêmement bien ! / Génial !)",
    "<b>虽然... 但是...</b><br><br>&bull; 虽然天气不好，但是他还是出去了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然天气不好，但是他还是出去了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Although the weather was bad, he still went out)<br>&bull; 虽然这件衣服很贵，但是我很喜欢 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然这件衣服很贵，但是我很喜欢', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Although this clothing is expensive, I like it very much)<br>&bull; 虽然他病了，但是他坚持工作 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然他病了，但是他坚持工作', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Although he was sick, he persisted in working)": "<b>虽然... 但是...</b><br><br>• 虽然天气不好，但是他还是出去了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然天气不好，但是他还是出去了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Même si le temps était mauvais, il est quand même sorti)<br>•虽然这件衣服很贵，但是我很喜欢 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Bien que ces vêtements soient chers, je les aime beaucoup)<br>• 虽然他病了，但是他坚持工作 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然他病了，但是他坚持工作', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Bien qu'il soit malade, il a persisté à travailler)",
    "A little fever. I don't want to go to the hospital, I want to take some medicine.": "Un peu de fièvre. Je ne veux pas aller à l'hôpital, je veux prendre des médicaments.",
    "A proposal or project plan.": "Une proposition ou un plan de projet.",
    "Achieving a positive outcome.": "Obtenir un résultat positif.",
    "Add 吗 to make any statement a yes/no question.": "Ajoutez 吗 pour faire de toute déclaration une question oui/non.",
    "After playing soccer we can also go sing karaoke, how about that?": "Après avoir joué au football, on peut aussi aller chanter au karaoké, que diriez-vous de ça ?",
    "Although Chinese is hard, it is very interesting.": "Même si le chinois est difficile, il est très intéressant.",
    "Are you preparing to bring a suitcase or a backpack?": "Vous vous préparez à apporter une valise ou un sac à dos ?",
    "At the Restaurant": "Au restaurant",
    "Basic Greetings": "Salutations de base",
    "Be late": "Être en retard",
    "Beijing is great! Have you bought the train ticket?": "Pékin c'est génial ! Avez-vous acheté le billet de train ?",
    "Body / health": "Corps / santé",
    "Both family and physical home.": "Maison familiale et physique.",
    "Bring a camera, you can take many nice photos.": "Apportez un appareil photo, vous pouvez prendre de nombreuses belles photos.",
    "Buy ticket": "Acheter un billet",
    "Camera": "Caméra",
    "Can it be a bit cheaper? Is two hundred and fifty okay?": "Est-ce que ça peut être un peu moins cher ? Est-ce que deux cent cinquante, ça va ?",
    "Catch a cold": "Attraper un rhume",
    "Character": "Personnage",
    "Cheap / inexpensive": "Pas cher / bon marché",
    "Click to view vocabulary": "Cliquez pour voir le vocabulaire",
    "Clothes": "Vêtements",
    "Colleague / coworker": "Collègue/collègue",
    "Community of people.": "Communauté de personnes.",
    "Company": "Entreprise",
    "Conjunction Embora/Mas": "Conjonction Embora/Mas",
    "Convenience of travel.": "Commodité du voyage.",
    "Cooked rice": "Riz cuit",
    "Correct. Then how much money do you have?": "Correct. Alors combien d'argent as-tu ?",
    "Dad": "Papa",
    "Dad, mom, an older sister, and me.": "Papa, maman, une sœur aînée et moi.",
    "Daily Routine": "Routine quotidienne",
    "Daughter": "Fille",
    "Deep study of a subject.": "Etude approfondie d'un sujet.",
    "Do you have a fever? Do you need to go to the hospital to see a doctor?": "Avez-vous de la fièvre ? Devez-vous aller à l’hôpital pour consulter un médecin ?",
    "Do you like sports? For example, playing basketball?": "Aimez-vous le sport? Par exemple, jouer au basket ?",
    "Do you often meet with your manager?": "Rencontrez-vous souvent votre manager ?",
    "Document of work history.": "Document d'historique de travail.",
    "Does your older sister work?": "Votre sœur aînée travaille-t-elle ?",
    "Drinking more water and sleeping more will make your body recover faster.": "Boire plus d’eau et dormir davantage permettra à votre corps de récupérer plus rapidement.",
    "Eat breakfast": "Prendre le petit déjeuner",
    "Excellent, I look forward to it!": "Génial, j'attends ça avec impatience !",
    "Exercise": "Exercice",
    "Expensive": "Cher",
    "Expresses exchanging views.": "Exprime un échange de vues.",
    "Face-to-face evaluation.": "Évaluation en face à face.",
    "Family / home": "Famille / maison",
    "Field of study or expertise.": "Domaine d’études ou d’expertise.",
    "General term for garments.": "Terme général désignant les vêtements.",
    "Get off work": "Quitter le travail",
    "Get sick": "Tomber malade",
    "Get up": "Se lever",
    "Giving consent.": "Donner son consentement.",
    "Go to work": "Aller au travail",
    "Good, then I want a bowl of beef noodles, and another bowl of rice.": "Bien, alors je veux un bol de nouilles au bœuf et un autre bol de riz.",
    "Goodbye": "Au revoir",
    "Goodbye teacher!": "Au revoir professeur !",
    "Great! Do you have a daughter and a son?": "Super! Avez-vous une fille et un fils ?",
    "Great! I am going to play soccer on Saturday, do you want to join?": "Super! Je vais jouer au football samedi, tu veux nous rejoindre ?",
    "Great, thank you for telling me!": "Super, merci de me l'avoir dit !",
    "Growth and expansion.": "Croissance et expansion.",
    "Having great significance.": "Avoir une grande signification.",
    "He is eating while watching TV.": "Il mange en regardant la télévision.",
    "Health & Body": "Santé et corps",
    "Hello": "Bonjour",
    "Hello!": "Bonjour!",
    "Hello! How many apples do you have?": "Bonjour! Combien de pommes as-tu ?",
    "Hello! What clothes do you want to buy?": "Bonjour! Quels vêtements souhaitez-vous acheter ?",
    "Hobbies & Sports": "Loisirs et sports",
    "Hospital": "Hôpital",
    "Hotel / guesthouse": "Hôtel / maison d'hôtes",
    "How are you?": "Comment vas-tu?",
    "How is the relationship between colleagues? Do they help each other?": "Comment se passent les relations entre collègues ? Est-ce qu'ils s'entraident ?",
    "How many / how much": "Combien / combien",
    "How many people in your family?": "Combien de personnes dans votre famille ?",
    "Hundred": "Cent",
    "I am ready, I believe this plan will succeed.": "Je suis prêt, je crois que ce plan réussira.",
    "I am ready, and I have three years of experience.": "Je suis prêt et j'ai trois ans d'expérience.",
    "I am very busy, studying a lot.": "Je suis très occupé, j'étudie beaucoup.",
    "I arrive at the company very early every day, never late.": "J'arrive chaque jour à l'entreprise très tôt, jamais en retard.",
    "I booked a hotel near Tiananmen Square.": "J'ai réservé un hôtel près de la place Tiananmen.",
    "I bought a book.": "J'ai acheté un livre.",
    "I came by plane.": "Je suis venu en avion.",
    "I don't have, I'm not married yet.": "Je n'en ai pas, je ne suis pas encore marié.",
    "I don't like playing basketball, I like playing soccer.": "Je n'aime pas jouer au basket, j'aime jouer au football.",
    "I eat breakfast first, then go to the park to run and exercise.": "Je prends d'abord mon petit-déjeuner, puis je vais au parc pour courir et faire de l'exercice.",
    "I feel a headache, I might be sick.": "J'ai mal à la tête, je pourrais être malade.",
    "I get up at 6:30 every morning.": "Je me lève à 6h30 tous les matins.",
    "I go to sleep at eleven o'clock sharp at night.": "Je me couche à onze heures précises du soir.",
    "I go to work at eight, going by subway.": "Je vais au travail à huit heures, en métro.",
    "I have three apples.": "J'ai trois pommes.",
    "I have two hundred yuan.": "J'ai deux cents yuans.",
    "I haven't bought the ticket yet, I will go buy it tomorrow.": "Je n'ai pas encore acheté le billet, j'irai l'acheter demain.",
    "I like listening to music and watching movies at home.": "J'aime écouter de la musique et regarder des films à la maison.",
    "I make dinner, watch TV, and then read books and study.": "Je prépare le dîner, je regarde la télévision, puis je lis des livres et j'étudie.",
    "I plan to travel to Beijing. I heard Beijing is very beautiful.": "J'ai l'intention de voyager à Pékin. J'ai entendu dire que Pékin est très belle.",
    "I put the book on the table.": "J'ai posé le livre sur la table.",
    "I think it is suitable, we can sign the contract.": "Je pense que c'est convenable, nous pouvons signer le contrat.",
    "I want a cup of ice water, thank you.": "Je veux une tasse d'eau glacée, merci.",
    "I want to buy a red coat.": "Je veux acheter un manteau rouge.",
    "I want to buy, how much is one book?": "Je veux acheter, combien coûte un livre ?",
    "I want to eat noodles. Which noodles are the most delicious here?": "Je veux manger des nouilles. Quelles nouilles sont les plus délicieuses ici ?",
    "I will bring a large suitcase because I have many clothes.": "J'apporterai une grande valise car j'ai beaucoup de vêtements.",
    "I work for a computer technology company.": "Je travaille pour une entreprise de technologie informatique.",
    "I'm also very good. Have you been busy lately?": "Je suis aussi très bon. Avez-vous été occupé ces derniers temps ?",
    "I'm very good": "je vais très bien",
    "I'm very good, thanks! And you?": "Je vais très bien, merci ! Et toi?",
    "Impact on something.": "Impact sur quelque chose.",
    "Increasing quality or level.": "Augmentation de la qualité ou du niveau.",
    "Informal term for father.": "Terme informel pour père.",
    "Informal term for mother.": "Terme informel pour mère.",
    "Introducing Family": "Présentation de la famille",
    "Is the work tiring? What time do you get off work?": "Le travail est-il fatiguant ? À quelle heure quittez-vous le travail ?",
    "Is there cold medicine at home?": "Y a-t-il des médicaments contre le rhume à la maison ?",
    "Is your work busy? What tasks do you have every day?": "Votre travail est-il chargé ? Quelles tâches avez-vous chaque jour ?",
    "Job & Workplace": "Emploi et lieu de travail",
    "Job / work": "Emploi/travail",
    "Leasing living space.": "Location d'espace habitable.",
    "Legal binding document.": "Document juridiquement contraignant.",
    "Listen to music": "Écouter de la musique",
    "Literally 'again meet' — see you!": "Littéralement « se revoir » — à bientôt !",
    "Literally 'buy the list'.": "Littéralement « achetez la liste ».",
    "Literally 'don't be polite'.": "Littéralement « ne soyez pas poli ».",
    "Literally 'eat medicine' in Chinese.": "Littéralement « manger des médicaments » en chinois.",
    "Literally 'electric shadow'.": "Littéralement « ombre électrique ».",
    "Look at this coat, how is it? Very beautiful.": "Regarde ce manteau, comment est-il ? Très beau.",
    "Making a resolution.": "Prendre une résolution.",
    "Manager": "Directeur",
    "Measure word": "Mesurer le mot",
    "Meet at the school playground at 3:00 PM.": "Rendez-vous à la cour de récréation de l'école à 15h00.",
    "Meeting / conference": "Réunion / conférence",
    "Menu": "Menu",
    "Mom": "Maman",
    "Monthly payment.": "Paiement mensuel.",
    "Movie / film": "Film / cinéma",
    "My dad is a doctor, my mom is a teacher.": "Mon père est médecin, ma mère est enseignante.",
    "Negated with 没 (e.g. 没有).": "Nié avec 没 (par exemple 没有).",
    "No problem, I will definitely arrive on time.": "Pas de problème, j'arriverai certainement à l'heure.",
    "No problem, please wait a moment, the food will be served shortly.": "Pas de problème, veuillez patienter un instant, la nourriture sera servie sous peu.",
    "Number / digit": "Nombre / chiffre",
    "Numbers & Counting": "Nombres et comptage",
    "Okay, I drank a lot of hot water, I am going to sleep now.": "Bon, j'ai bu beaucoup d'eau chaude, je vais dormir maintenant.",
    "Okay, I have already put the camera in the box.": "D'accord, j'ai déjà mis l'appareil photo dans la boîte.",
    "Okay, I will go to the fitting room to try it on.": "D'accord, je vais à la cabine d'essayage pour l'essayer.",
    "Okay, are you ready to order now?": "D'accord, êtes-vous prêt à commander maintenant ?",
    "Okay, checkout, here is the money!": "OK, passez à la caisse, voici l'argent !",
    "Okay, thank you teacher.": "D'accord, merci professeur.",
    "Okay, you can have it for two hundred and fifty. Do you want to try it on?": "D'accord, vous pouvez l'avoir pour deux cent cinquante. Voulez-vous l'essayer?",
    "Okay. Would you like something to drink?": "D'accord. Voulez-vous boire quelque chose?",
    "One book is ten yuan. Two hundred yuan can buy twenty books.": "Un livre coûte dix yuans. Deux cents yuans peuvent acheter vingt livres.",
    "One, two, three": "Un deux trois",
    "Opposite of 上班.": "Le contraire de 上班.",
    "Opposite of 贵.": "Le contraire de 贵.",
    "Order food": "Commander de la nourriture",
    "Ordering Food": "Commander de la nourriture",
    "Our beef noodles are very famous and delicious.": "Nos nouilles au bœuf sont très réputées et délicieuses.",
    "Owner of the property.": "Propriétaire de la propriété.",
    "Pay the bill": "Payer la facture",
    "Physical training.": "Entraînement physique.",
    "Pitch curve plots here": "Traces de courbe de hauteur ici",
    "Play basketball": "Jouer au basket",
    "Play soccer": "Jouer au football",
    "Please introduce your major and work experience.": "Veuillez présenter votre spécialité et votre expérience professionnelle.",
    "Really? I want to go too! What time does it start?": "Vraiment? Moi aussi je veux y aller ! A quelle heure ça commence?",
    "Researching the development of society is very important.": "La recherche sur le développement de la société est très importante.",
    "Rest": "Repos",
    "Security money paid upfront.": "Argent de sécurité payé d’avance.",
    "Select a tone below to practice": "Sélectionnez un ton ci-dessous pour vous entraîner",
    "She doesn't work, she is a student.": "Elle ne travaille pas, elle est étudiante.",
    "Shopping & Prices": "Achats et prix",
    "Simultaneous Actions": "Actions simultanées",
    "Skill level or power.": "Niveau de compétence ou puissance.",
    "Skills gained over time.": "Compétences acquises au fil du temps.",
    "Sleep": "Dormir",
    "Soft 'x' — like a gentle 'sh'.": "Un « x » doux – comme un « ch » doux.",
    "Son": "Fils",
    "Speak to visualize tone": "Parlez pour visualiser le ton",
    "Sports / exercise": "Sport / exercice",
    "Store / shop": "Magasin / boutique",
    "Suitcase / luggage": "Valise/bagage",
    "Take medicine": "Prendre des médicaments",
    "Taking charge of a task.": "Prendre en charge une tâche.",
    "Thank you": "Merci",
    "Thank you for your care, see you tomorrow.": "Merci pour vos soins, à demain.",
    "Thank you teacher, I will show you photos when I get back!": "Merci professeur, je vous montrerai des photos à mon retour !",
    "That is very convenient! Wish you a pleasant trip!": "C'est très pratique ! Je vous souhaite un agréable voyage !",
    "That's great! Are you ever late for work?": "C'est super! Êtes-vous parfois en retard au travail ?",
    "That's too hard! You should rest more.": "C'est trop dur ! Tu devrais te reposer davantage.",
    "The Completion Particle 了": "La particule de complétion 了",
    "The action of consuming solid food.": "Action de consommer des aliments solides.",
    "The colleagues are all very nice, supporting each other in work.": "Les collègues sont tous très gentils et se soutiennent mutuellement dans le travail.",
    "The first three numbers in Chinese.": "Les trois premiers chiffres en chinois.",
    "The general measure word for people/things.": "Le mot de mesure générale pour les personnes/choses.",
    "The most common Chinese greeting. Use it anytime.": "La salutation chinoise la plus courante. Utilisez-le à tout moment.",
    "The transportation here is very convenient, do you think the rent is suitable?": "Le transport ici est très pratique, pensez-vous que le loyer est adapté ?",
    "The wallet was stolen.": "Le portefeuille a été volé.",
    "The 太...了 Structure": "La structure 太...了",
    "The 把 Sentence": "La phrase 把",
    "The 是...的 Focus Structure": "La structure de concentration 是...的",
    "The 比 Comparison": "La comparaison 比",
    "The 被 Passive": "Le passif 被",
    "Then take the medicine immediately, and go lie down in bed to rest.": "Ensuite, prenez le médicament immédiatement et allez vous allonger au lit pour vous reposer.",
    "There are five people here.": "Il y a cinq personnes ici.",
    "There are four people in my family.": "Il y a quatre personnes dans ma famille.",
    "Third tone. Do not confuse with 卖 (mài = to sell).": "Troisième ton. Ne pas confondre avec 卖 (mài = vendre).",
    "This is four hundred yuan, now on sale for three hundred.": "C'est quatre cents yuans, maintenant en vente pour trois cents.",
    "This is very beautiful, but a bit expensive. How much?": "C'est très beau, mais un peu cher. Combien?",
    "Time to study Chinese! 汉": "Il est temps d'étudier le chinois ! 汉",
    "To buy": "Acheter",
    "To drink": "Boire",
    "To eat": "Manger",
    "To have / exist": "Avoir/exister",
    "To sing": "Chanter",
    "To travel / tourism": "Voyager/tourisme",
    "To try on / test": "A essayer / tester",
    "Today is colder than yesterday.": "Aujourd'hui il fait plus froid qu'hier.",
    "Today is too hot.": "Aujourd'hui, il fait trop chaud.",
    "Today we need to discuss the new plan, are you ready?": "Aujourd'hui, nous devons discuter du nouveau plan, êtes-vous prêt ?",
    "Tone Pitch Visualizer": "Visualiseur de hauteur de tonalité",
    "Train ticket": "Billet de train",
    "Travel Plans": "Projets de voyage",
    "Two (quantity)": "Deux (quantité)",
    "Two hundred yuan can buy many books. Do you want to buy books?": "Deux cents yuans peuvent acheter de nombreux livres. Voulez-vous acheter des livres?",
    "Two hundred yuan in total. Thank you for coming!": "Deux cents yuans au total. Merci d'être venu !",
    "Use 两 instead of 二 before measure words.": "Utilisez 两 au lieu de 二 avant de mesurer les mots.",
    "Used for beverages/soups.": "Utilisé pour les boissons/soupes.",
    "Used for business gatherings.": "Utilisé pour les réunions d'affaires.",
    "Used for counting hundreds (e.g. 一百 = 100).": "Utilisé pour compter des centaines (par exemple 一百 = 100).",
    "Used to describe high prices.": "Utilisé pour décrire des prix élevés.",
    "Verb + 了 for action completion.": "Verbe + 了 pour l'achèvement de l'action.",
    "Verb for testing clothes or trying them.": "Verbe pour tester des vêtements ou les essayer.",
    "Very busy every day, many meetings to attend.": "Très occupé chaque jour, de nombreuses réunions à assister.",
    "Very good! Then how many people are here?": "Très bien! Alors combien de personnes sont ici ?",
    "Very suitable! Shall I pack it for you?": "Très approprié ! Dois-je l'emballer pour vous ?",
    "Vocab List": "Liste de vocabulaire",
    "Waiter, check please! How much is it in total?": "Serveur, vérifiez s'il vous plaît ! C'est combien au total ?",
    "Waiter, please bring the menu.": "Serveur, s'il vous plaît, apportez le menu.",
    "What do you do after getting off work and going home?": "Que faites-vous après avoir quitté le travail et rentré chez vous ?",
    "What do you like to do on weekends?": "Qu’aimez-vous faire le week-end ?",
    "What do your dad and mom do for work?": "Que font ton père et ta mère comme travail ?",
    "What time do you get up every day?": "À quelle heure te lèves-tu chaque jour ?",
    "What time do you go to sleep every day?": "À quelle heure te couche-tu chaque jour ?",
    "What time do you go to work? How do you go?": "À quelle heure vas-tu travailler ? Comment vas-tu ?",
    "What's wrong? You don't look very well.": "Qu'est-ce qui ne va pas? Vous n'avez pas l'air très bien.",
    "Where do you want to travel next month?": "Où souhaitez-vous voyager le mois prochain ?",
    "Which company do you work for?": "Pour quelle entreprise travaillez-vous ?",
    "Which hotel do you plan to stay at? Have you booked it?": "Dans quel hôtel comptez-vous séjourner ? L'avez-vous réservé ?",
    "Who are they?": "Qui sont-ils ?",
    "Work is a bit tiring, I get off at 5:30 in the afternoon.": "Le travail est un peu fatigant, je descends à 17h30.",
    "Yes, I bought some cold medicine yesterday.": "Oui, j'ai acheté des médicaments contre le rhume hier.",
    "Yes, it has a profound influence on improving standard of living.": "Oui, cela a une profonde influence sur l’amélioration du niveau de vie.",
    "Yes, the manager holds a meeting with us every morning.": "Oui, le manager nous rencontre tous les matins.",
    "You get up so early! What do you do after getting up?": "Tu te lèves si tôt ! Que fais-tu après t'être levé ?",
    "You're welcome": "Vous êtes les bienvenus",
    "You're welcome. That's all for today, goodbye!": "Vous êtes les bienvenus. C'est tout pour aujourd'hui, au revoir !",
    "ability / capability": "capacité / capacité",
    "airplane": "avion",
    "and / harmony": "et/harmonie",
    "apple": "pomme",
    "big": "grand",
    "car": "voiture",
    "cat": "chat",
    "chair": "chaise",
    "click card again to close": "cliquez à nouveau sur la carte pour la fermer",
    "contract / agreement": "contrat / accord",
    "cup": "tasse",
    "cup / glass": "tasse / verre",
    "daughter": "fille",
    "day/sky": "jour/ciel",
    "deposit": "dépôt",
    "dog": "chien",
    "drink": "boire",
    "eat": "manger",
    "experience": "expérience",
    "father": "père",
    "friend": "ami",
    "good": "bien",
    "good / well": "bien / bien",
    "he / him": "il/lui",
    "hello": "Bonjour",
    "hospital": "hôpital",
    "hot": "chaud",
    "important": "important",
    "influence / effect": "influence / effet",
    "items": "articles",
    "landlord": "propriétaire",
    "major / professional": "majeur / professionnel",
    "meeting / conference": "réunion/conférence",
    "middle/China": "milieu/Chine",
    "money": "argent",
    "mother": "mère",
    "not have / no": "ne pas avoir / non",
    "o'clock / point": "heures / point",
    "older sister": "sœur aînée",
    "person": "personne",
    "plural suffix": "suffixe pluriel",
    "rent money": "argent du loyer",
    "resume / CV": "curriculum vitae / CV",
    "rice": "riz",
    "scheme / plan": "schéma/plan",
    "school": "école",
    "she / her": "elle/elle",
    "small": "petit",
    "society": "société",
    "son": "fils",
    "steam / gas": "vapeur / gaz",
    "store": "magasin",
    "student": "étudiant",
    "study": "étude",
    "success / successful": "succès / réussi",
    "suggestion particle": "particule de suggestion",
    "table / desk": "table / bureau",
    "tea": "thé",
    "teacher": "professeur",
    "to agree": "être d'accord",
    "to ask": "demander",
    "to be responsible for": "être responsable de",
    "to call / be named": "appeler / être nommé",
    "to decide": "décider",
    "to develop": "développer",
    "to discuss": "discuter",
    "to do": "faire",
    "to drink": "boire",
    "to eat": "manger",
    "to improve / raise": "améliorer / élever",
    "to interview / job interview": "passer un entretien / un entretien d'embauche",
    "to rent a house/apartment": "louer une maison/un appartement",
    "to research": "faire des recherches",
    "to shine / photo": "briller / photo",
    "train": "former",
    "transportation / traffic": "transport / trafic",
    "water": "eau",
    "what": "quoi",
    "you": "toi",
    "younger sister": "sœur cadette",
    "一边 + Verb 1 + 一边 + Verb 2": "一边 + Verbe 1 + 一边 + Verbe 2",
    "上=go to, 班=shift.": "上=aller à, 班=changer.",
    "买=buy, 票=ticket.": "买=acheter, 票=billet.",
    "休=rest on tree, 息=breath.": "休=repos sur un arbre, 息=respiration.",
    "会=gather, 议=discuss.": "会=rassembler, 议=discuter.",
    "儿=child, 子=noun suffix.": "儿=enfant, 子=suffixe du nom.",
    "公=public, 司=manage. Company.": "公=public, 司=gérer. Entreprise.",
    "医=medical, 院=courtyard.": "医=médical, 院=cour.",
    "同=together, 事=business.": "同=ensemble, 事=entreprise.",
    "听=hear/listen, 音乐=music.": "听=entendre/écouter, 音乐=musique.",
    "唱=sing(v), 歌=song(n).": "唱=chanter(v), 歌=chanson(n).",
    "商=commerce, 店=shop.": "商=commerce, 店=boutique.",
    "多=many, 少=few. Together = quantity.": "多=beaucoup, 少=peu. Ensemble = quantité.",
    "太 + Adj + 了 for intensification.": "太 + Adj + 了 pour l'intensification.",
    "女=female, 儿=child.": "女=femme, 儿=enfant.",
    "宾=guest, 馆=building.": "宾=invité, 馆=bâtiment.",
    "工=work/craft, 作=make. Work.": "工=travail/artisanat, 作=faire. Travail.",
    "很 links subject and adjective here.": "很 relie le sujet et l'adjectif ici.",
    "感=feel, 冒=risk/emit. Cold.": "感=sensation, 冒=risque/émission. Froid.",
    "打=hit/play, 篮球=basketball.": "打=frapper/jouer, 篮球=basketball.",
    "把 for disposal.": "把 pour élimination.",
    "数=count, 字=character.": "数=compte, 字=caractère.",
    "旅=traveler, 游=wander/swim.": "旅=voyageur, 游=errer/nager.",
    "早饭=morning meal.": "早饭=repas du matin.",
    "是...的 to emphasize time, place, or manner.": "是...的 pour souligner l'heure, le lieu ou la manière.",
    "比 for comparison.": "比 à titre de comparaison.",
    "火车=train, 票=ticket.": "火车=train, 票=billet.",
    "点=select/order, 菜=dish.": "点=sélectionner/commander, 菜=plat.",
    "照相=take photo, 机=machine.": "照相=prendre une photo, 机=machine.",
    "生=grow/beget, 病=illness.": "生=grandir/engendrer, 病=maladie.",
    "睡=sleep(v), 觉=sleep(n).": "睡=sommeil(v), 觉=sommeil(n).",
    "米=raw rice, 饭=cooked meal.": "米=riz cru, 饭=plat cuisiné.",
    "经=manage, 理=logic. Manager.": "经=gérer, 理=logique. Directeur.",
    "菜=dish, 单=list. Food list = menu.": "菜=plat, 单=liste. Liste des aliments = menu.",
    "虽然 + A, 但是 + B": "虽然 + A, 但是 + B",
    "行李=baggage, 箱=box.": "行李=bagage, 箱=boîte.",
    "被 for passive.": "被 pour passif.",
    "起=rise, 床=bed.": "起 = lever, 床 = lit.",
    "踢=kick, 足球=football.": "踢=coup de pied, 足球=football.",
    "身=body, 体=form. Together = health.": "身=corps, 体=forme. Ensemble = santé.",
    "运=move, 动=action.": "运=déplacement, 动=action.",
    "迟=late, 到=arrive.": "迟=en retard, 到=arriver."
  },
  "ja": {
    "'+text+'": "'+テキスト+'",
    "+ suggestedAnswer +": "+ 提案された回答 +",
    ", e);\n  }\n}\n\nfunction sim(a,b){\n  const cleanA = a.replace(/[.,\\/#!$%\\^&\\*;:{}=\\-_`~()？。，！、\\s]/g,": "、e);\n  }\n}\n\n関数 sim(a,b){\n  const cleanA = a.replace(/[.,\\/#!$%\\^&\\*;:{}=\\-_`~()?。，！、\\s]/g,",
    "1st Tone — High flat": "1stトーン — ハイフラット",
    "2nd Tone — Rising": "2 番目のトーン — 立ち上がり",
    "3rd Tone — Dipping": "3 番目のトーン — ディッピング",
    "4th Tone — Falling": "4番目のトーン — 立ち下がり",
    "<b>A + 比 + B + Adj + (Complement)</b><br><br>&bull; 他比我高 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他比我高', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He is taller than me)<br>&bull; 苹果比西瓜便宜 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('苹果比西瓜便宜', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Apples are cheaper than watermelons)<br>&bull; 他跑得比我快得多 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他跑得比我快得多', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He runs much faster than me)": "<b>A + 比 + B + Adj + (補語)</b><br><br>• 他比我高 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speech('比他我高', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (彼は私より背が高いです)<br>• 苹果比西瓜便宜 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speech('苹果比西瓜便宜', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (リンゴはスイカより安いです)<br>• 他跑得比我快得 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speech('他跑得比我快得多', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (彼は私よりはるかに速く走ります)",
    "<b>Obj + 被 + Agent + Verb + Result</b><br><br>&bull; 信已经被寄走了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('信已经被寄走了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (The letter has already been sent)<br>&bull; 他被老师批评了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他被老师批评了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He was criticized by the teacher)<br>&bull; 蛋糕被弟弟吃光了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('蛋糕被弟弟吃光了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (The cake was completely eaten by younger brother)": "<b>Obj + 被 + エージェント + 動詞 + 結果</b><br><br>• 信已经被寄走了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speech('信已经被寄走了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (手紙はすでに送信されています)<br>•他被老师批评了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speech('他被老师批评了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (彼は教師に批判されました)<br>• タンパク質糕被弟吃光了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speech('蛋糕被弟弟吃光了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (ケーキは弟に完食されました)",
    "<b>Subj + 把 + Obj + Verb + Result</b><br><br>&bull; 我把门关了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我把门关了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (I closed the door)<br>&bull; 她把衣服洗干净了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('她把衣服洗干净了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (She washed the clothes clean)<br>&bull; 请把手机关掉 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('请把手机关掉', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Please turn off your phone)<br><br>Object must be specific.": "<b>Subj + 握 + Obj + 動詞 + 結果</b><br><br>• 我掴门关了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speech('我掴门关了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (ドアを閉めました)<br>•她ハンドル洗濯干净了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speech('她ハンドル洗濯干净了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (彼女は衣服をきれいに洗いました)<br>• 请ハンドル手机关掉 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speech('请握手机关掉', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (携帯電話の電源を切ってください)<br><br>オブジェクトは特定である必要があります。",
    "<b>Subj + 是 + Detail + Verb + 的</b><br><br>&bull; 我们是昨天认识的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我们是昨天认识的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (We met yesterday - time)<br>&bull; 这本书是在北京买的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('这本书是在北京买的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (This book was bought in Beijing - place)<br>&bull; 他是和朋友一起来的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他是和朋友一起来的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He came with friends - manner)": "<b>Subj + 是 + 詳細 + 動詞 + 的</b><br><br>• 我们は昨天认识的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speech('我们は昨天认识的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (私たちは昨日会いました - time)<br>• 这本书是在北京买的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speech('这本书是在北京买的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (この本は北京で購入しました - 場所)<br>• 彼是和朋友一起来的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speech('他是和朋友一起的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (彼は友達と一緒に来ました - マナー)",
    "<b>Verb + 了 + Obj</b><br><br>&bull; 他去学校了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他去学校了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He went to school)<br>&bull; 我喝了三杯咖啡 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我喝了三杯咖啡', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (I drank three cups of coffee)<br>&bull; 你吃饭了吗？ <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('你吃饭了吗？', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Have you eaten?)": "<b>動詞 + 了 + Obj</b><br><br>• 他去学校了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speech('他去学校了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (彼は学校に行きました)<br>• 我喝了三杯咖啡 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speech('我喝了三杯咖啡', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (私はコーヒーを３杯飲みました)<br>• 你吃饭了吗? <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speech('你吃饭了吗?', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (食べましたか?)",
    "<b>一边 + Verb 1 + 一边 + Verb 2</b><br><br>&bull; 我喜欢一边听音乐一边跑步 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我喜欢一边听音乐一边跑步', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (I like running while listening to music)<br>&bull; 不要一边开车一边玩手机 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('不要一边开车一边玩手机', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Do not play with your phone while driving)<br>&bull; 我们一边喝茶一边聊天吧 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我们一边喝茶一边聊天吧', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Let's drink tea while chatting)": "<b>一边 + 動詞 1 + 一边 + 動詞 2</b><br><br>• 我喜欢一边听音乐一边跑步 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speech('我喜欢一边听音乐一边跑步', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (音楽を聴きながらランニングするのが好きです)<br>• 不要一边开车一边玩手机 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speech('不要一边开车一边玩手机', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (運転中に携帯電話をいじらないでください)<br>• 我们一边喝茶一边聊天吧 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speech('我们一边喝茶一边聊天吧', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (お茶を飲みながらおしゃべりしましょう)",
    "<b>太 + Adj/Verb + 了</b><br><br>&bull; 这个太贵了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('这个太贵了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (This is too expensive)<br>&bull; 他太累了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他太累了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He is too tired)<br>&bull; 太好了！<span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('太好了！', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Extremely good! / Great!)": "<b>太 + Adj/動詞 + 了</b><br><br>• 这个太贵了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speech('这个太贵了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (これは高すぎます)<br>• 他太贵了<span class=\"sp-btn\" onclick=\"event.stopPropagation(); speech('他太蓄積了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (彼はとても疲れています)<br>• 太好了！<span class=\"sp-btn\" onclick=\"event.stopPropagation(); speech('太好了！', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (非常に良い! / 素晴らしい!)",
    "<b>虽然... 但是...</b><br><br>&bull; 虽然天气不好，但是他还是出去了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然天气不好，但是他还是出去了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Although the weather was bad, he still went out)<br>&bull; 虽然这件衣服很贵，但是我很喜欢 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然这件衣服很贵，但是我很喜欢', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Although this clothing is expensive, I like it very much)<br>&bull; 虽然他病了，但是他坚持工作 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然他病了，但是他坚持工作', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Although he was sick, he persisted in working)": "<b>虽然... ただし...</b><br><br>• 虽然天气不好，但是他还是出去了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speech('虽然天气不好，但是他还是出去了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (天気は悪かったが、彼はまだ外出した)<br>• 虽然这件衣服很贵，但是我很喜欢 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speech('虽然这件衣服很贵，但是我很喜欢', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (この服は高価ですが、とても気に入っています)<br>• 虽然他病了，但他坚持工作 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speech('虽然病了，ただし他坚持工作', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (彼は病気でしたが、仕事を続けました)",
    "A little fever. I don't want to go to the hospital, I want to take some medicine.": "少し発熱。病院には行きたくない、薬を飲みたい。",
    "A proposal or project plan.": "提案書またはプロジェクト計画。",
    "Achieving a positive outcome.": "ポジティブな結果を達成する。",
    "Add 吗 to make any statement a yes/no question.": "「吗」を追加すると、任意の発言を「はい/いいえ」の質問にできます。",
    "After playing soccer we can also go sing karaoke, how about that?": "サッカーをした後はカラオケに行くこともできますが、いかがですか？",
    "Although Chinese is hard, it is very interesting.": "中国語は難しいですが、とても面白いです。",
    "Are you preparing to bring a suitcase or a backpack?": "スーツケースやバックパックを持っていく準備はできていますか？",
    "At the Restaurant": "レストランで",
    "Basic Greetings": "基本的な挨拶",
    "Be late": "遅刻する",
    "Beijing is great! Have you bought the train ticket?": "北京はすごいですね！電車の切符は購入しましたか？",
    "Body / health": "身体・健康",
    "Both family and physical home.": "家族でもあり、物理的な家でもあります。",
    "Bring a camera, you can take many nice photos.": "カメラを持ってきて、素敵な写真をたくさん撮ってください。",
    "Buy ticket": "チケットを購入する",
    "Camera": "カメラ",
    "Can it be a bit cheaper? Is two hundred and fifty okay?": "もう少し安くてもいいでしょうか？二百五十は大丈夫ですか？",
    "Catch a cold": "風邪をひく",
    "Character": "キャラクター",
    "Cheap / inexpensive": "安い/安い",
    "Click to view vocabulary": "クリックして語彙を表示",
    "Clothes": "服",
    "Colleague / coworker": "同僚/同僚",
    "Community of people.": "人々のコミュニティ。",
    "Company": "会社",
    "Conjunction Embora/Mas": "接続詞エンボラ/マス",
    "Convenience of travel.": "旅行の利便性。",
    "Cooked rice": "米飯",
    "Correct. Then how much money do you have?": "正しい。それではお金はいくらありますか？",
    "Dad": "お父さん",
    "Dad, mom, an older sister, and me.": "お父さん、お母さん、お姉ちゃん、そして私。",
    "Daily Routine": "日課",
    "Daughter": "娘",
    "Deep study of a subject.": "ある主題についての深い研究。",
    "Do you have a fever? Do you need to go to the hospital to see a doctor?": "熱はありますか？医師の診察を受けるために病院に行く必要がありますか?",
    "Do you like sports? For example, playing basketball?": "スポーツは好きですか？例えばバスケットボールをするとか？",
    "Do you often meet with your manager?": "マネージャーとはよく会いますか？",
    "Document of work history.": "職務経歴書。",
    "Does your older sister work?": "お姉さんは働いていますか？",
    "Drinking more water and sleeping more will make your body recover faster.": "より多くの水を飲み、より多く眠ると、体の回復が早くなります。",
    "Eat breakfast": "朝食を食べる",
    "Excellent, I look forward to it!": "素晴らしいですね、楽しみにしています！",
    "Exercise": "エクササイズ",
    "Expensive": "高い",
    "Expresses exchanging views.": "意見交換を表明。",
    "Face-to-face evaluation.": "対面での評価。",
    "Family / home": "家族・自宅",
    "Field of study or expertise.": "研究分野または専門知識。",
    "General term for garments.": "衣服の総称。",
    "Get off work": "仕事を休む",
    "Get sick": "病気になる",
    "Get up": "起きる",
    "Giving consent.": "同意を与える。",
    "Go to work": "仕事に行く",
    "Good, then I want a bowl of beef noodles, and another bowl of rice.": "よし、それなら牛肉麺とご飯をもう一杯食べたい。",
    "Goodbye": "さようなら",
    "Goodbye teacher!": "さようなら先生！",
    "Great! Do you have a daughter and a son?": "素晴らしい！娘と息子がいますか？",
    "Great! I am going to play soccer on Saturday, do you want to join?": "素晴らしい！土曜日にサッカーをする予定なのですが、参加しませんか？",
    "Great, thank you for telling me!": "素晴らしい、教えてくれてありがとう！",
    "Growth and expansion.": "成長と拡大。",
    "Having great significance.": "大きな意義を持っています。",
    "He is eating while watching TV.": "彼はテレビを見ながら食事をしています。",
    "Health & Body": "健康と身体",
    "Hello": "こんにちは",
    "Hello!": "こんにちは！",
    "Hello! How many apples do you have?": "こんにちは！あなたはリンゴを何個持っていますか？",
    "Hello! What clothes do you want to buy?": "こんにちは！どのような服を買いたいですか？",
    "Hobbies & Sports": "趣味とスポーツ",
    "Hospital": "病院",
    "Hotel / guesthouse": "ホテル・ゲストハウス",
    "How are you?": "元気ですか？",
    "How is the relationship between colleagues? Do they help each other?": "同僚との関係はどうですか？彼らはお互いに助け合っていますか？",
    "How many / how much": "何個 / いくら",
    "How many people in your family?": "あなたの家族は何人ですか?",
    "Hundred": "百",
    "I am ready, I believe this plan will succeed.": "準備はできています、この計画は成功すると信じています。",
    "I am ready, and I have three years of experience.": "私には準備ができています、そして私には3年の経験があります。",
    "I am very busy, studying a lot.": "私はとても忙しくて、たくさん勉強しています。",
    "I arrive at the company very early every day, never late.": "私は毎日とても早く会社に到着し、遅刻することはありません。",
    "I booked a hotel near Tiananmen Square.": "天安門広場近くのホテルを予約しました。",
    "I bought a book.": "本を買いました。",
    "I came by plane.": "飛行機で来ました。",
    "I don't have, I'm not married yet.": "持っていない、まだ結婚していない。",
    "I don't like playing basketball, I like playing soccer.": "私はバスケットボールをするのは好きではありません、サッカーをするのが好きです。",
    "I eat breakfast first, then go to the park to run and exercise.": "まず朝食を食べてから、公園に行って走ったり運動したりします。",
    "I feel a headache, I might be sick.": "頭が痛い、病気かもしれない。",
    "I get up at 6:30 every morning.": "私は毎朝6時半に起きます。",
    "I go to sleep at eleven o'clock sharp at night.": "夜は11時ちょうどに寝ます。",
    "I go to work at eight, going by subway.": "私は地下鉄で8時に仕事に行きます。",
    "I have three apples.": "私はリンゴを 3 つ持っています。",
    "I have two hundred yuan.": "私は二百元を持っています。",
    "I haven't bought the ticket yet, I will go buy it tomorrow.": "まだチケットを買っていないので、明日買いに行きます。",
    "I like listening to music and watching movies at home.": "私は家で音楽を聴いたり映画を見るのが好きです。",
    "I make dinner, watch TV, and then read books and study.": "夕食を作り、テレビを見て、それから本を読んだり勉強したりします。",
    "I plan to travel to Beijing. I heard Beijing is very beautiful.": "北京へ旅行する予定です。北京はとても美しいと聞きました。",
    "I put the book on the table.": "私は本を​​テーブルの上に置きました。",
    "I think it is suitable, we can sign the contract.": "適切だと思いますので、契約できます。",
    "I want a cup of ice water, thank you.": "氷水を一杯いただきたいのですが、ありがとう。",
    "I want to buy a red coat.": "赤いコートを買いたいです。",
    "I want to buy, how much is one book?": "購入したいのですが、1冊いくらですか？",
    "I want to eat noodles. Which noodles are the most delicious here?": "麺類が食べたいです。ここの麺はどれが一番美味しいですか？",
    "I will bring a large suitcase because I have many clothes.": "洋服が多いので大きなスーツケースを持っていきます。",
    "I work for a computer technology company.": "私はコンピューター技術会社で働いています。",
    "I'm also very good. Have you been busy lately?": "私もとても元気です。最近忙しかったですか？",
    "I'm very good": "とても元気です",
    "I'm very good, thanks! And you?": "とても元気です、ありがとう！あなたも？",
    "Impact on something.": "何かに影響を与える。",
    "Increasing quality or level.": "品質またはレベルの向上。",
    "Informal term for father.": "父親を指す非公式な用語。",
    "Informal term for mother.": "母親を指す非公式な用語。",
    "Introducing Family": "家族の紹介",
    "Is the work tiring? What time do you get off work?": "仕事は疲れますか？何時に仕事を降りますか？",
    "Is there cold medicine at home?": "家に風邪薬はありますか？",
    "Is your work busy? What tasks do you have every day?": "仕事は忙しいですか？毎日どんな仕事をしていますか？",
    "Job & Workplace": "仕事と職場",
    "Job / work": "仕事・仕事",
    "Leasing living space.": "居住空間を賃貸すること。",
    "Legal binding document.": "法的拘束力のある文書。",
    "Listen to music": "音楽を聴く",
    "Literally 'again meet' — see you!": "文字通り「また会いましょう」、また会いましょう!",
    "Literally 'buy the list'.": "文字通り「リストを買う」。",
    "Literally 'don't be polite'.": "文字通り「礼儀正しくない」。",
    "Literally 'eat medicine' in Chinese.": "中国語で文字通り「薬を食べる」。",
    "Literally 'electric shadow'.": "文字通り「電気の影」。",
    "Look at this coat, how is it? Very beautiful.": "このコートを見てください、どうですか？とても美しい。",
    "Making a resolution.": "決議をする。",
    "Manager": "マネージャー",
    "Measure word": "単語を測定する",
    "Meet at the school playground at 3:00 PM.": "午後3時に学校の運動場に集合してください。",
    "Meeting / conference": "会議・会議",
    "Menu": "メニュー",
    "Mom": "お母さん",
    "Monthly payment.": "月々のお支払い。",
    "Movie / film": "映画・フィルム",
    "My dad is a doctor, my mom is a teacher.": "私の父は医者で、母は教師です。",
    "Negated with 没 (e.g. 没有).": "否定されます (例: 没有)。",
    "No problem, I will definitely arrive on time.": "大丈夫、必ず時間通りに到着します。",
    "No problem, please wait a moment, the food will be served shortly.": "問題ありません。すぐにお料理が提供されますので、しばらくお待ちください。",
    "Number / digit": "数字/桁",
    "Numbers & Counting": "数字と数え方",
    "Okay, I drank a lot of hot water, I am going to sleep now.": "さて、お湯をたくさん飲んだので、もう寝ます。",
    "Okay, I have already put the camera in the box.": "さて、カメラはすでに箱に入れておきました。",
    "Okay, I will go to the fitting room to try it on.": "さて、試着室に行って試着してみます。",
    "Okay, are you ready to order now?": "さて、今から注文してもいいですか？",
    "Okay, checkout, here is the money!": "さて、チェックアウト、これがお金です！",
    "Okay, thank you teacher.": "わかりました、先生、ありがとう。",
    "Okay, you can have it for two hundred and fifty. Do you want to try it on?": "わかりました、250 円でいただけます。試着してみますか？",
    "Okay. Would you like something to drink?": "わかった。何かお飲み物はいかがですか？",
    "One book is ten yuan. Two hundred yuan can buy twenty books.": "一冊10元です。 200元あれば20冊の本が買える。",
    "One, two, three": "1 2 3",
    "Opposite of 上班.": "上班の向かい側。",
    "Opposite of 贵.": "贵の反対。",
    "Order food": "食べ物を注文する",
    "Ordering Food": "食べ物の注文",
    "Our beef noodles are very famous and delicious.": "当店の牛肉麺はとても有名で美味しいです。",
    "Owner of the property.": "物件の所有者。",
    "Pay the bill": "請求書を支払う",
    "Physical training.": "フィジカルトレーニング。",
    "Pitch curve plots here": "ピッチカーブプロットはこちら",
    "Play basketball": "バスケットボールをする",
    "Play soccer": "サッカーをする",
    "Please introduce your major and work experience.": "あなたの専攻と職歴を紹介してください。",
    "Really? I want to go too! What time does it start?": "本当に？私も行きたいです！何時に始まりますか？",
    "Researching the development of society is very important.": "社会の発展を研究することは非常に重要です。",
    "Rest": "休む",
    "Security money paid upfront.": "保証金は前払いとなります。",
    "Select a tone below to practice": "練習するには以下の音色を選択してください",
    "She doesn't work, she is a student.": "彼女は働いていません、学生です。",
    "Shopping & Prices": "ショッピングと価格",
    "Simultaneous Actions": "同時アクション",
    "Skill level or power.": "スキルレベルまたはパワー。",
    "Skills gained over time.": "時間をかけて獲得したスキル。",
    "Sleep": "寝る",
    "Soft 'x' — like a gentle 'sh'.": "柔らかい「x」 — 穏やかな「sh」のようなもの。",
    "Son": "息子",
    "Speak to visualize tone": "口調を視覚化するために話す",
    "Sports / exercise": "スポーツ・運動",
    "Store / shop": "店舗・ショップ",
    "Suitcase / luggage": "スーツケース・手荷物",
    "Take medicine": "薬を飲む",
    "Taking charge of a task.": "任務を担当する。",
    "Thank you": "ありがとう",
    "Thank you for your care, see you tomorrow.": "お気遣いありがとうございます、また明日。",
    "Thank you teacher, I will show you photos when I get back!": "先生ありがとう、帰ったら写真見せますね！",
    "That is very convenient! Wish you a pleasant trip!": "それはとても便利です！楽しい旅になりますように！",
    "That's great! Are you ever late for work?": "それは素晴らしいことです！仕事に遅刻することはありますか?",
    "That's too hard! You should rest more.": "それは難しすぎるよ！もっと休んだほうがいいよ。",
    "The Completion Particle 了": "完了粒子 了",
    "The action of consuming solid food.": "固形食品を摂取する行為。",
    "The colleagues are all very nice, supporting each other in work.": "同僚は皆とても優しく、お互いをサポートしながら仕事をしています。",
    "The first three numbers in Chinese.": "中国語の最初の 3 つの数字。",
    "The general measure word for people/things.": "人や物を表す一般的な尺度の言葉。",
    "The most common Chinese greeting. Use it anytime.": "中国語で最も一般的な挨拶。いつでもご利用ください。",
    "The transportation here is very convenient, do you think the rent is suitable?": "ここは交通がとても便利ですが、家賃は妥当だと思いますか？",
    "The wallet was stolen.": "財布が盗まれました。",
    "The 太...了 Structure": "太...了の構造",
    "The 把 Sentence": "取った文",
    "The 是...的 Focus Structure": "それは…のフォーカス構造",
    "The 比 Comparison": "比の比較",
    "The 被 Passive": "受動的",
    "Then take the medicine immediately, and go lie down in bed to rest.": "その後、すぐに薬を飲み、ベッドに横になって休んでください。",
    "There are five people here.": "ここには5人います。",
    "There are four people in my family.": "私の家族には4人います。",
    "Third tone. Do not confuse with 卖 (mài = to sell).": "3番目の音。 「卖」（mài = 売る）と混同しないでください。",
    "This is four hundred yuan, now on sale for three hundred.": "これは400元ですが、現在は300元で販売されています。",
    "This is very beautiful, but a bit expensive. How much?": "これはとても美しいですが、少し高価です。いくら？",
    "Time to study Chinese! 汉": "中国語を勉強する時間です！ 汉",
    "To buy": "購入するには",
    "To drink": "飲むために",
    "To eat": "食べる",
    "To have / exist": "持つ/存在する",
    "To sing": "歌うこと",
    "To travel / tourism": "旅行・観光へ",
    "To try on / test": "試着/テストするには",
    "Today is colder than yesterday.": "今日は昨日より寒いです。",
    "Today is too hot.": "今日は暑すぎます。",
    "Today we need to discuss the new plan, are you ready?": "今日は新しい計画について話し合う必要がありますが、準備はできていますか?",
    "Tone Pitch Visualizer": "トーンピッチビジュアライザー",
    "Train ticket": "電車の切符",
    "Travel Plans": "旅行計画",
    "Two (quantity)": "2個（数量）",
    "Two hundred yuan can buy many books. Do you want to buy books?": "200元あればたくさんの本が買えます。本を買いたいですか？",
    "Two hundred yuan in total. Thank you for coming!": "合計二百元。来てくれてありがとう！",
    "Use 两 instead of 二 before measure words.": "メジャーワードの前に二の代わりに两を使用します。",
    "Used for beverages/soups.": "飲み物/スープに使用されます。",
    "Used for business gatherings.": "ビジネスの集まりなどに利用されています。",
    "Used for counting hundreds (e.g. 一百 = 100).": "百の数を数えるのに使用されます (例: 一百 = 100)。",
    "Used to describe high prices.": "高い価格を説明するために使用されます。",
    "Verb + 了 for action completion.": "動作完了を表す動詞 + 了。",
    "Verb for testing clothes or trying them.": "服を試す、または試着することを表す動詞。",
    "Very busy every day, many meetings to attend.": "毎日とても忙しく、たくさんの会議に出席する必要があります。",
    "Very good! Then how many people are here?": "とても良い！では、ここには何人いますか？",
    "Very suitable! Shall I pack it for you?": "とても適しています！梱包しましょうか？",
    "Vocab List": "語彙リスト",
    "Waiter, check please! How much is it in total?": "ウェイター、確認してください！合計いくらですか?",
    "Waiter, please bring the menu.": "ウェイターさん、メニューを持ってきてください。",
    "What do you do after getting off work and going home?": "仕事を終えて家に帰った後は何をしますか？",
    "What do you like to do on weekends?": "週末は何をするのが好きですか?",
    "What do your dad and mom do for work?": "あなたのお父さんとお母さんは仕事で何をしていますか。",
    "What time do you get up every day?": "あなたは毎日何時に起きますか？",
    "What time do you go to sleep every day?": "あなたは毎日何時に寝ますか？",
    "What time do you go to work? How do you go?": "何時に仕事に行きますか？どうやって行きますか？",
    "What's wrong? You don't look very well.": "どうしたの？見た目はあまり良くありません。",
    "Where do you want to travel next month?": "来月どこに旅行したいですか？",
    "Which company do you work for?": "どの会社で働いていますか?",
    "Which hotel do you plan to stay at? Have you booked it?": "どのホテルに泊まる予定ですか？予約しましたか？",
    "Who are they?": "彼らは誰なの？",
    "Work is a bit tiring, I get off at 5:30 in the afternoon.": "仕事は少し疲れたので、午後5時半に退社します。",
    "Yes, I bought some cold medicine yesterday.": "はい、昨日風邪薬を買いました。",
    "Yes, it has a profound influence on improving standard of living.": "そうです、それは生活水準の向上に大きな影響を与えています。",
    "Yes, the manager holds a meeting with us every morning.": "はい、マネージャーは毎朝私たちとミーティングを行っています。",
    "You get up so early! What do you do after getting up?": "とても早く起きますね！起きた後は何をしますか？",
    "You're welcome": "どういたしまして",
    "You're welcome. That's all for today, goodbye!": "どういたしまして。今日はここまで、さようなら！",
    "ability / capability": "能力/能力",
    "airplane": "飛行機",
    "and / harmony": "そして/ハーモニー",
    "apple": "りんご",
    "big": "大きい",
    "car": "車",
    "cat": "猫",
    "chair": "椅子",
    "click card again to close": "カードをもう一度クリックして閉じます",
    "contract / agreement": "契約書/同意書",
    "cup": "カップ",
    "cup / glass": "カップ/グラス",
    "daughter": "娘",
    "day/sky": "日/空",
    "deposit": "デポジット",
    "dog": "犬",
    "drink": "飲む",
    "eat": "食べる",
    "experience": "経験",
    "father": "父親",
    "friend": "友人",
    "good": "良い",
    "good / well": "良い/まあ",
    "he / him": "彼/彼",
    "hello": "こんにちは",
    "hospital": "病院",
    "hot": "熱い",
    "important": "重要",
    "influence / effect": "影響・効果",
    "items": "アイテム",
    "landlord": "家主",
    "major / professional": "専攻/専門職",
    "meeting / conference": "会議/カンファレンス",
    "middle/China": "中部/中国",
    "money": "お金",
    "mother": "母親",
    "not have / no": "持っていない/いいえ",
    "o'clock / point": "時/ポイント",
    "older sister": "姉",
    "person": "人",
    "plural suffix": "複数の接尾語",
    "rent money": "お金を借りる",
    "resume / CV": "履歴書/CV",
    "rice": "米",
    "scheme / plan": "計画/計画",
    "school": "学校",
    "she / her": "彼女/彼女",
    "small": "小さい",
    "society": "社会",
    "son": "息子",
    "steam / gas": "蒸気・ガス",
    "store": "店",
    "student": "学生",
    "study": "勉強",
    "success / successful": "成功/成功",
    "suggestion particle": "示唆助詞",
    "table / desk": "テーブル/机",
    "tea": "お茶",
    "teacher": "教師",
    "to agree": "同意する",
    "to ask": "尋ねる",
    "to be responsible for": "責任を負う",
    "to call / be named": "電話する/名前を付けられる",
    "to decide": "決める",
    "to develop": "開発する",
    "to discuss": "議論する",
    "to do": "すること",
    "to drink": "飲む",
    "to eat": "食べる",
    "to improve / raise": "改善する/高める",
    "to interview / job interview": "面接へ/就職面接へ",
    "to rent a house/apartment": "家/アパートを借りるには",
    "to research": "研究する",
    "to shine / photo": "輝く/写真",
    "train": "電車",
    "transportation / traffic": "交通・交通",
    "water": "水",
    "what": "何",
    "you": "あなた",
    "younger sister": "妹",
    "一边 + Verb 1 + 一边 + Verb 2": "一边 + 動詞 1 + 一边 + 動詞 2",
    "上=go to, 班=shift.": "上=移動、班=シフト。",
    "买=buy, 票=ticket.": "买=買う、票=チケット。",
    "休=rest on tree, 息=breath.": "休＝木の上で休む、息＝呼吸。",
    "会=gather, 议=discuss.": "会＝集まる、议＝話し合う。",
    "儿=child, 子=noun suffix.": "儿=子供、子=名詞接尾辞。",
    "公=public, 司=manage. Company.": "公＝公開、司＝管理。会社。",
    "医=medical, 院=courtyard.": "医＝医療、院＝中庭。",
    "同=together, 事=business.": "同＝一緒、事＝ビジネス。",
    "听=hear/listen, 音乐=music.": "听=聞く/聞く、音乐=音楽。",
    "唱=sing(v), 歌=song(n).": "唱=sing(v)、歌=song(n)。",
    "商=commerce, 店=shop.": "商＝コマース、店＝ショップ。",
    "多=many, 少=few. Together = quantity.": "多=多い、少=少ない。一緒に=量。",
    "太 + Adj + 了 for intensification.": "太 + Adj + 了を強化します。",
    "女=female, 儿=child.": "女＝女性、儿＝子供。",
    "宾=guest, 馆=building.": "宾=ゲスト、馆=建物。",
    "工=work/craft, 作=make. Work.": "工＝仕事/工芸、作＝作る。仕事。",
    "很 links subject and adjective here.": "「很」は主語と形容詞をここでリンクします。",
    "感=feel, 冒=risk/emit. Cold.": "感=感じる、冒=リスク/発散。寒い。",
    "打=hit/play, 篮球=basketball.": "打=打つ/遊ぶ、篮球=バスケットボール。",
    "把 for disposal.": "廃棄用の取っ手です。",
    "数=count, 字=character.": "数=カウント、文字=文字。",
    "旅=traveler, 游=wander/swim.": "旅 = 旅行者、游 = さまよう/泳ぐ。",
    "早饭=morning meal.": "早饭=朝の食事。",
    "是...的 to emphasize time, place, or manner.": "それは、時間、場所、または方法を強調することです。",
    "比 for comparison.": "比較のための比。",
    "火车=train, 票=ticket.": "火车=電車、票=切符。",
    "点=select/order, 菜=dish.": "点=選択/注文、菜=料理。",
    "照相=take photo, 机=machine.": "照相=写真を撮る、机=機械。",
    "生=grow/beget, 病=illness.": "生＝成長する/生む、病＝病気。",
    "睡=sleep(v), 觉=sleep(n).": "睡=sleep(v)、觉=sleep(n)。",
    "米=raw rice, 饭=cooked meal.": "米＝生米、饭＝炊き込みご飯。",
    "经=manage, 理=logic. Manager.": "经＝管理、理＝論理。マネージャー。",
    "菜=dish, 单=list. Food list = menu.": "菜=料理、单=リスト。フードリスト＝メニュー。",
    "虽然 + A, 但是 + B": "虽然 + A、但是 + B",
    "行李=baggage, 箱=box.": "行李=荷物、箱=箱。",
    "被 for passive.": "受動的な被。",
    "起=rise, 床=bed.": "起＝起きる、床＝ベッド。",
    "踢=kick, 足球=football.": "踢=キック、足球=サッカー。",
    "身=body, 体=form. Together = health.": "身=体、体=形。一緒に=健康。",
    "运=move, 动=action.": "运=移動、動=動作。",
    "迟=late, 到=arrive.": "迟=遅れ、到=到着。"
  },
  "ko": {
    "'+text+'": "'+텍스트+'",
    "+ suggestedAnswer +": "+ 제안답변 +",
    ", e);\n  }\n}\n\nfunction sim(a,b){\n  const cleanA = a.replace(/[.,\\/#!$%\\^&\\*;:{}=\\-_`~()？。，！、\\s]/g,": ", e);\n  }\n}\n\n함수 시뮬레이션(a,b){\n  const cleanA = a.replace(/[.,\\/#!$%\\^&\\*;:{}=\\-_`~()?。，！、\\s]/g,",
    "1st Tone — High flat": "첫 번째 톤 — 하이 플랫",
    "2nd Tone — Rising": "두 번째 성조 - 상승",
    "3rd Tone — Dipping": "세 번째 성조 — 담그기",
    "4th Tone — Falling": "4성 — 하강",
    "<b>A + 比 + B + Adj + (Complement)</b><br><br>&bull; 他比我高 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他比我高', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He is taller than me)<br>&bull; 苹果比西瓜便宜 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('苹果比西瓜便宜', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Apples are cheaper than watermelons)<br>&bull; 他跑得比我快得多 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他跑得比我快得多', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He runs much faster than me)": "<b>A + 比 + B + Adj + (보완)</b><br><br>• 他比我高 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('他比我高', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (그는 나보다 키가 큽니다)<br>•苹果比西瓜便宜 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('苹果比西瓜便宜', 0.7)\"><i class=\"fas fa-volume-high\"></i></span>(사과는 수박보다 저렴합니다)<br>•他跑得比我快得多 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('他跑得比我快得多', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (그는 나보다 훨씬 빨리 달린다)",
    "<b>Obj + 被 + Agent + Verb + Result</b><br><br>&bull; 信已经被寄走了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('信已经被寄走了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (The letter has already been sent)<br>&bull; 他被老师批评了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他被老师批评了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He was criticized by the teacher)<br>&bull; 蛋糕被弟弟吃光了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('蛋糕被弟弟吃光了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (The cake was completely eaten by younger brother)": "<b>Obj + 被 + 에이전트 + 동사 + 결과</b><br><br>• 信已经被寄走了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('信已经被寄走了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (편지는 이미 발송되었습니다)<br>• 他被老师批评了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('他被老师批评了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (선생님으로부터 비난을 받았습니다)<br>• 蛋糕被弟弟吃光了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('蛋糕被弟弟吃光了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (동생이 케이크를 다 먹어버렸어요)",
    "<b>Subj + 把 + Obj + Verb + Result</b><br><br>&bull; 我把门关了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我把门关了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (I closed the door)<br>&bull; 她把衣服洗干净了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('她把衣服洗干净了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (She washed the clothes clean)<br>&bull; 请把手机关掉 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('请把手机关掉', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Please turn off your phone)<br><br>Object must be specific.": "<b>Subj + 把 + Obj + 동사 + 결과</b><br><br>• 我把门关了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('我把门关了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (나는 닫았습니다 문)<br>• 她把衣服洗干净了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('她把衣服洗干净了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (그녀는 옷을 빨았습니다 clean)<br>• 请把手机关掉 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speech('请把手机关掉', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (휴대폰을 꺼주세요)<br><br>개체는 구체적이어야 합니다.",
    "<b>Subj + 是 + Detail + Verb + 的</b><br><br>&bull; 我们是昨天认识的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我们是昨天认识的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (We met yesterday - time)<br>&bull; 这本书是在北京买的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('这本书是在北京买的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (This book was bought in Beijing - place)<br>&bull; 他是和朋友一起来的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他是和朋友一起来的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He came with friends - manner)": "<b>Subj + 是 + 세부 정보 + 동사 + 的</b><br><br>• 我们是昨天认识的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('我们是昨天认识的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (어제 만났어요 - 시간)<br>• 这本书是在北京买的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('这本书是在北京买的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (이 책 베이징에서 구입했습니다 - 장소)<br>• 他是和朋友一起来的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('他是和朋友一起来的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (그는 친구와 함께 왔습니다 - 방식)",
    "<b>Verb + 了 + Obj</b><br><br>&bull; 他去学校了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他去学校了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He went to school)<br>&bull; 我喝了三杯咖啡 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我喝了三杯咖啡', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (I drank three cups of coffee)<br>&bull; 你吃饭了吗？ <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('你吃饭了吗？', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Have you eaten?)": "<b>동사 + 了 + Obj</b><br><br>• 他去school校了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('他去school校了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He goes to school)<br>•我喝了三杯咖啡 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('我喝了三杯咖啡', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (커피 3잔 마셨습니다)<br>•你吃饭了吗？ <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('你吃饭了吗?', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (식사하셨나요?)",
    "<b>一边 + Verb 1 + 一边 + Verb 2</b><br><br>&bull; 我喜欢一边听音乐一边跑步 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我喜欢一边听音乐一边跑步', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (I like running while listening to music)<br>&bull; 不要一边开车一边玩手机 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('不要一边开车一边玩手机', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Do not play with your phone while driving)<br>&bull; 我们一边喝茶一边聊天吧 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我们一边喝茶一边聊天吧', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Let's drink tea while chatting)": "<b>一边 + 동사 1 + 一边 + 동사 2</b><br><br>• 我喜欢一边听음을乐一边跑步 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('我喜欢一边听음을乐一边跑步', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (음악을 들으면서 달리는 것을 좋아합니다)<br>• 不要一边开车一边玩手机 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('不要一边开车一边玩手机', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (운전 중에는 휴대폰을 가지고 놀지 마세요)<br>• 我们一边喝tea一边聊天吧 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('我们一边喝tea一边聊天吧', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (수담하면서 차 마시자)",
    "<b>太 + Adj/Verb + 了</b><br><br>&bull; 这个太贵了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('这个太贵了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (This is too expensive)<br>&bull; 他太累了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他太累了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He is too tired)<br>&bull; 太好了！<span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('太好了！', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Extremely good! / Great!)": "<b>태 + 형용사/동사 + 了</b><br><br>• 这个太贵了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('这个太贵了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (이것도 마찬가지입니다) 비싸다)<br>• 他太累了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speech('他太累了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (그는 너무 피곤하다)<br>• 大好了!<span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('太好了!', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (매우 좋음! / 훌륭함!)",
    "<b>虽然... 但是...</b><br><br>&bull; 虽然天气不好，但是他还是出去了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然天气不好，但是他还是出去了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Although the weather was bad, he still went out)<br>&bull; 虽然这件衣服很贵，但是我很喜欢 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然这件衣服很贵，但是我很喜欢', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Although this clothing is expensive, I like it very much)<br>&bull; 虽然他病了，但是他坚持工作 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然他病了，但是他坚持工作', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Although he was sick, he persisted in working)": "<b>虽然... 但是...</b><br><br>• 虽然天气不好，但是他还是出去了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('虽然天气不好，但是他还是take去了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (날씨가 좋지 않았는데도 나갔음)<br>•虽然这件衣服很贵，但是我很喜欢 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('虽然这件衣服很贵，但是我很喜欢', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (이 옷은 비싸지만 너무 마음에 듭니다)<br>• 虽然他病了，但是他坚持工作 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('虽然他病了，但是他坚持工作', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (아팠음에도 불구하고 그는 계속 일했습니다)",
    "A little fever. I don't want to go to the hospital, I want to take some medicine.": "약간의 발열. 병원에 가고 싶지 않고 약을 먹고 싶어요.",
    "A proposal or project plan.": "제안서 또는 프로젝트 계획.",
    "Achieving a positive outcome.": "긍정적인 결과 달성.",
    "Add 吗 to make any statement a yes/no question.": "어떤 진술이라도 예/아니요 질문으로 만들려면 吗를 추가하세요.",
    "After playing soccer we can also go sing karaoke, how about that?": "축구를 하고 나면 노래방에 가서 노래도 할 수 있는데, 어때요?",
    "Although Chinese is hard, it is very interesting.": "중국어는 어렵지만 매우 흥미롭습니다.",
    "Are you preparing to bring a suitcase or a backpack?": "여행가방이나 배낭을 가져갈 준비를 하고 계시나요?",
    "At the Restaurant": "레스토랑에서",
    "Basic Greetings": "기본 인사말",
    "Be late": "늦다",
    "Beijing is great! Have you bought the train ticket?": "베이징은 훌륭해요! 기차표를 샀나요?",
    "Body / health": "신체 / 건강",
    "Both family and physical home.": "가족과 실제 집 모두.",
    "Bring a camera, you can take many nice photos.": "카메라를 가져오시면 멋진 사진을 많이 찍으실 수 있습니다.",
    "Buy ticket": "티켓 구매",
    "Camera": "카메라",
    "Can it be a bit cheaper? Is two hundred and fifty okay?": "좀 더 저렴할 수 있나요? 이백 오십 괜찮나요?",
    "Catch a cold": "감기에 걸리다",
    "Character": "성격",
    "Cheap / inexpensive": "저렴하다/저렴하다",
    "Click to view vocabulary": "어휘를 보려면 클릭하세요.",
    "Clothes": "옷",
    "Colleague / coworker": "동료/동료",
    "Community of people.": "사람들의 커뮤니티.",
    "Company": "회사",
    "Conjunction Embora/Mas": "접속사 Embora/Mas",
    "Convenience of travel.": "여행의 편리함.",
    "Cooked rice": "밥",
    "Correct. Then how much money do you have?": "옳은. 그러면 돈이 얼마나 있나요?",
    "Dad": "아빠",
    "Dad, mom, an older sister, and me.": "아빠, 엄마, 언니, 그리고 나.",
    "Daily Routine": "일일 루틴",
    "Daughter": "딸",
    "Deep study of a subject.": "주제에 대한 깊은 연구.",
    "Do you have a fever? Do you need to go to the hospital to see a doctor?": "열이 있나요? 의사를 만나기 위해 병원에 가야 합니까?",
    "Do you like sports? For example, playing basketball?": "당신은 스포츠를 좋아합니까? 예를 들어 농구를 하시나요?",
    "Do you often meet with your manager?": "매니저님과 자주 만나시나요?",
    "Document of work history.": "근무 이력 문서.",
    "Does your older sister work?": "언니는 일해요?",
    "Drinking more water and sleeping more will make your body recover faster.": "물을 많이 마시고 잠을 많이 자면 몸이 더 빨리 회복됩니다.",
    "Eat breakfast": "아침을 먹어라",
    "Excellent, I look forward to it!": "훌륭해요, 기대됩니다!",
    "Exercise": "운동",
    "Expensive": "값비싼",
    "Expresses exchanging views.": "의견 교환을 표현합니다.",
    "Face-to-face evaluation.": "대면 평가.",
    "Family / home": "가족 / 집",
    "Field of study or expertise.": "연구 분야 또는 전문 분야.",
    "General term for garments.": "의복의 총칭.",
    "Get off work": "퇴근하세요",
    "Get sick": "아프다",
    "Get up": "일어나",
    "Giving consent.": "동의합니다.",
    "Go to work": "일하러 가세요",
    "Good, then I want a bowl of beef noodles, and another bowl of rice.": "좋아요, 그럼 쇠고기 국수 한 그릇과 밥 한 그릇 더 주세요.",
    "Goodbye": "안녕히 가세요",
    "Goodbye teacher!": "선생님 안녕히 계세요!",
    "Great! Do you have a daughter and a son?": "엄청난! 딸과 아들이 있나요?",
    "Great! I am going to play soccer on Saturday, do you want to join?": "엄청난! 토요일에 축구할 예정인데 같이 갈래?",
    "Great, thank you for telling me!": "좋습니다. 알려주셔서 감사합니다!",
    "Growth and expansion.": "성장과 확장.",
    "Having great significance.": "큰 의미가 있습니다.",
    "He is eating while watching TV.": "그는 TV를 보면서 식사를 하고 있다.",
    "Health & Body": "건강 및 신체",
    "Hello": "안녕하세요",
    "Hello!": "안녕하세요!",
    "Hello! How many apples do you have?": "안녕하세요! 당신은 사과를 몇 개 가지고 있나요?",
    "Hello! What clothes do you want to buy?": "안녕하세요! 어떤 옷을 사고 싶어요?",
    "Hobbies & Sports": "취미 및 스포츠",
    "Hospital": "병원",
    "Hotel / guesthouse": "호텔/게스트하우스",
    "How are you?": "어떻게 지내세요?",
    "How is the relationship between colleagues? Do they help each other?": "동료간의 관계는 어떤가요? 그들은 서로를 돕는가?",
    "How many / how much": "몇 개/얼마나",
    "How many people in your family?": "귀하의 가족은 몇 명입니까?",
    "Hundred": "백",
    "I am ready, I believe this plan will succeed.": "나는 준비가 되었습니다. 나는 이 계획이 성공할 것이라고 믿습니다.",
    "I am ready, and I have three years of experience.": "나는 준비가 되어 있고 3년의 경험을 가지고 있습니다.",
    "I am very busy, studying a lot.": "나는 매우 바쁘고, 공부도 많이 하고 있습니다.",
    "I arrive at the company very early every day, never late.": "나는 매일 아주 일찍 회사에 도착하고 결코 늦지 않습니다.",
    "I booked a hotel near Tiananmen Square.": "천안문광장 근처 호텔을 예약했어요.",
    "I bought a book.": "나는 책을 샀다.",
    "I came by plane.": "나는 비행기로 왔습니다.",
    "I don't have, I'm not married yet.": "없어요, 아직 결혼도 안 했어요.",
    "I don't like playing basketball, I like playing soccer.": "나는 농구를 좋아하지 않고 축구를 좋아합니다.",
    "I eat breakfast first, then go to the park to run and exercise.": "아침을 먼저 먹고 공원에 가서 조깅도 하고 운동도 해요.",
    "I feel a headache, I might be sick.": "머리가 아프네요. 아플 수도 있어요.",
    "I get up at 6:30 every morning.": "나는 매일 아침 6시 30분에 일어난다.",
    "I go to sleep at eleven o'clock sharp at night.": "나는 밤 열한시 정각에 잠자리에 든다.",
    "I go to work at eight, going by subway.": "나는 8시에 지하철을 타고 출근합니다.",
    "I have three apples.": "나는 사과 세 개를 가지고 있어요.",
    "I have two hundred yuan.": "나에겐 200위안이 있다.",
    "I haven't bought the ticket yet, I will go buy it tomorrow.": "아직 표를 사지 않았는데 내일 사러 가겠습니다.",
    "I like listening to music and watching movies at home.": "나는 집에서 음악 듣는 것과 영화 보는 것을 좋아합니다.",
    "I make dinner, watch TV, and then read books and study.": "저녁을 준비하고, TV를 보고, 책을 읽고 공부합니다.",
    "I plan to travel to Beijing. I heard Beijing is very beautiful.": "나는 베이징으로 여행을 갈 계획이다. 베이징이 매우 아름답다고 들었습니다.",
    "I put the book on the table.": "나는 그 책을 탁자 위에 올려놓았다.",
    "I think it is suitable, we can sign the contract.": "제 생각에는 그것이 적합하다고 생각합니다. 계약에 서명할 수 있습니다.",
    "I want a cup of ice water, thank you.": "얼음물 한 잔 주세요. 감사합니다.",
    "I want to buy a red coat.": "빨간 코트를 사고 싶어요.",
    "I want to buy, how much is one book?": "사고 싶은데 한 권에 얼마인가요?",
    "I want to eat noodles. Which noodles are the most delicious here?": "국수를 먹고 싶어요. 여기서는 어떤 국수가 가장 맛있나요?",
    "I will bring a large suitcase because I have many clothes.": "옷이 많으니까 큰 여행가방을 가져갈게요.",
    "I work for a computer technology company.": "저는 컴퓨터 기술 회사에서 일하고 있습니다.",
    "I'm also very good. Have you been busy lately?": "나도 아주 좋다. 최근에 바빴나요?",
    "I'm very good": "나는 아주 좋다",
    "I'm very good, thanks! And you?": "난 아주 괜찮아요, 고마워요! 당신은요?",
    "Impact on something.": "무언가에 영향을 미칩니다.",
    "Increasing quality or level.": "품질이나 레벨이 높아집니다.",
    "Informal term for father.": "아버지를 가리키는 비공식적 용어.",
    "Informal term for mother.": "어머니를 가리키는 비공식적인 용어.",
    "Introducing Family": "가족을 소개합니다",
    "Is the work tiring? What time do you get off work?": "일이 피곤합니까? 몇시에 퇴근해요?",
    "Is there cold medicine at home?": "집에 감기약 있나요?",
    "Is your work busy? What tasks do you have every day?": "일이 바쁜가요? 매일 어떤 작업을 하시나요?",
    "Job & Workplace": "직업 및 직장",
    "Job / work": "직업/일",
    "Leasing living space.": "생활 공간을 임대합니다.",
    "Legal binding document.": "법적 구속력이 있는 문서.",
    "Listen to music": "음악 듣기",
    "Literally 'again meet' — see you!": "말 그대로 '다시 만나다' — 또 만나요!",
    "Literally 'buy the list'.": "말 그대로 '목록을 구매하세요'.",
    "Literally 'don't be polite'.": "말 그대로 '예의를 갖추지 마세요'.",
    "Literally 'eat medicine' in Chinese.": "중국어로 말 그대로 '약을 먹다'.",
    "Literally 'electric shadow'.": "말 그대로 '전기 그림자'.",
    "Look at this coat, how is it? Very beautiful.": "이 코트 좀 보세요, 어때요? 매우 아름답습니다.",
    "Making a resolution.": "결의안을 작성합니다.",
    "Manager": "관리자",
    "Measure word": "단어 측정",
    "Meet at the school playground at 3:00 PM.": "오후 3시에 학교 운동장에서 만나세요.",
    "Meeting / conference": "회의/컨퍼런스",
    "Menu": "메뉴",
    "Mom": "엄마",
    "Monthly payment.": "월별 지불.",
    "Movie / film": "영화 / 영화",
    "My dad is a doctor, my mom is a teacher.": "우리 아빠는 의사이고, 우리 엄마는 선생님이에요.",
    "Negated with 没 (e.g. 没有).": "没로 부정합니다(예: 没有).",
    "No problem, I will definitely arrive on time.": "문제 없습니다. 제 시간에 꼭 도착하겠습니다.",
    "No problem, please wait a moment, the food will be served shortly.": "문제 없습니다. 잠시 기다려 주세요. 음식이 곧 제공됩니다.",
    "Number / digit": "숫자/숫자",
    "Numbers & Counting": "숫자 및 계산",
    "Okay, I drank a lot of hot water, I am going to sleep now.": "응, 나 뜨거운 물 많이 마셨어, 이제 자러 갈게.",
    "Okay, I have already put the camera in the box.": "좋아요, 저는 이미 카메라를 상자에 넣었어요.",
    "Okay, I will go to the fitting room to try it on.": "좋아요, 피팅룸에 가서 입어보겠습니다.",
    "Okay, are you ready to order now?": "좋아요, 이제 주문할 준비가 되셨나요?",
    "Okay, checkout, here is the money!": "알겠습니다. 결제하세요. 여기 돈이 있습니다!",
    "Okay, thank you teacher.": "그렇군요, 선생님 감사합니다.",
    "Okay, you can have it for two hundred and fifty. Do you want to try it on?": "좋습니다. 250달러에 드실 수 있습니다. 입어보고 싶나요?",
    "Okay. Would you like something to drink?": "좋아요. 마실 것 좀 드시겠어요?",
    "One book is ten yuan. Two hundred yuan can buy twenty books.": "책 한권은 10위안입니다. 200위안이면 20권의 책을 살 수 있습니다.",
    "One, two, three": "하나 둘 셋",
    "Opposite of 上班.": "上班의 반대.",
    "Opposite of 贵.": "贵의 반대.",
    "Order food": "음식 주문",
    "Ordering Food": "음식 주문",
    "Our beef noodles are very famous and delicious.": "우리 쇠고기 국수는 매우 유명하고 맛있습니다.",
    "Owner of the property.": "부동산의 소유자입니다.",
    "Pay the bill": "청구서를 지불하다",
    "Physical training.": "신체 훈련.",
    "Pitch curve plots here": "여기에 피치 커브 플롯이 표시됩니다.",
    "Play basketball": "농구를 하세요",
    "Play soccer": "축구를 하다",
    "Please introduce your major and work experience.": "전공과 경력을 소개해주세요.",
    "Really? I want to go too! What time does it start?": "정말? 나도 가고 싶다! 몇시에 시작하나요?",
    "Researching the development of society is very important.": "사회의 발전을 연구하는 것은 매우 중요합니다.",
    "Rest": "나머지",
    "Security money paid upfront.": "보증금을 선불로 지불했습니다.",
    "Select a tone below to practice": "연습하려면 아래 톤을 선택하세요.",
    "She doesn't work, she is a student.": "그녀는 일하지 않고 학생입니다.",
    "Shopping & Prices": "쇼핑 및 가격",
    "Simultaneous Actions": "동시 작업",
    "Skill level or power.": "스킬 레벨이나 파워.",
    "Skills gained over time.": "시간이 지남에 따라 얻은 기술.",
    "Sleep": "잠",
    "Soft 'x' — like a gentle 'sh'.": "부드러운 'x' — 부드러운 'sh'와 같습니다.",
    "Son": "아들",
    "Speak to visualize tone": "어조를 시각화하기 위해 말하세요",
    "Sports / exercise": "스포츠 / 운동",
    "Store / shop": "상점 / 상점",
    "Suitcase / luggage": "여행가방/수하물",
    "Take medicine": "약을 먹어라",
    "Taking charge of a task.": "업무를 담당합니다.",
    "Thank you": "감사합니다",
    "Thank you for your care, see you tomorrow.": "배려해주셔서 감사합니다. 내일 뵙겠습니다.",
    "Thank you teacher, I will show you photos when I get back!": "선생님 감사합니다. 돌아가면 사진 보여드릴게요!",
    "That is very convenient! Wish you a pleasant trip!": "정말 편리해요! 즐거운 여행 되시기 바랍니다!",
    "That's great! Are you ever late for work?": "훌륭해요! 혹시 회사에 늦었나요?",
    "That's too hard! You should rest more.": "너무 힘들어요! 더 쉬어야 해요.",
    "The Completion Particle 了": "완성입자 了",
    "The action of consuming solid food.": "고형음식을 섭취하는 행위.",
    "The colleagues are all very nice, supporting each other in work.": "동료들은 모두 매우 친절하고, 일할 때 서로를 지원합니다.",
    "The first three numbers in Chinese.": "중국어의 처음 세 숫자.",
    "The general measure word for people/things.": "사람/사물에 대한 일반적인 측정어입니다.",
    "The most common Chinese greeting. Use it anytime.": "가장 흔한 중국어 인사말. 언제든지 사용하세요.",
    "The transportation here is very convenient, do you think the rent is suitable?": "이곳은 교통이 매우 편리합니다. 임대료가 적당하다고 생각하시나요?",
    "The wallet was stolen.": "지갑을 도난당했습니다.",
    "The 太...了 Structure": "大...了 구조",
    "The 把 Sentence": "把 문장",
    "The 是...的 Focus Structure": "The ...의 초점 구조",
    "The 比 Comparison": "比 비교",
    "The 被 Passive": "被 패시브",
    "Then take the medicine immediately, and go lie down in bed to rest.": "그런 다음 즉시 약을 복용하고 침대에 누워 휴식을 취하십시오.",
    "There are five people here.": "여기에는 5명이 있습니다.",
    "There are four people in my family.": "우리 가족은 4명이에요.",
    "Third tone. Do not confuse with 卖 (mài = to sell).": "세 번째 톤.卖(mài = 팔다)와 혼동하지 마세요.",
    "This is four hundred yuan, now on sale for three hundred.": "이것은 400위안인데 현재 300위안으로 판매되고 있습니다.",
    "This is very beautiful, but a bit expensive. How much?": "이것은 매우 아름답지만 조금 비쌉니다. 얼마나 많이?",
    "Time to study Chinese! 汉": "중국어 공부 시간! 汉",
    "To buy": "구매하려면",
    "To drink": "마시다",
    "To eat": "먹다",
    "To have / exist": "갖다/존재하다",
    "To sing": "노래하다",
    "To travel / tourism": "여행 / 관광",
    "To try on / test": "입어보기/테스트하기",
    "Today is colder than yesterday.": "오늘은 어제보다 더 춥습니다.",
    "Today is too hot.": "오늘은 너무 덥습니다.",
    "Today we need to discuss the new plan, are you ready?": "오늘 우리는 새로운 계획에 대해 논의해야 합니다. 준비되셨나요?",
    "Tone Pitch Visualizer": "톤 피치 시각화 장치",
    "Train ticket": "기차표",
    "Travel Plans": "여행 계획",
    "Two (quantity)": "2개(수량)",
    "Two hundred yuan can buy many books. Do you want to buy books?": "200위안이면 많은 책을 살 수 있다. 책을 사고 싶나요?",
    "Two hundred yuan in total. Thank you for coming!": "총 200위안. 와주셔서 감사합니다!",
    "Use 两 instead of 二 before measure words.": "단어를 측정하기 전에 two 대신 两를 사용합니다.",
    "Used for beverages/soups.": "음료/스프에 사용됩니다.",
    "Used for business gatherings.": "비즈니스 모임에 사용됩니다.",
    "Used for counting hundreds (e.g. 一百 = 100).": "수백을 셀 때 사용됩니다(예: 一百 = 100).",
    "Used to describe high prices.": "높은 가격을 설명하는 데 사용됩니다.",
    "Verb + 了 for action completion.": "동작 완료를 나타내는 동사 + 了입니다.",
    "Verb for testing clothes or trying them.": "옷을 시험해 보거나 시험해 본다는 뜻의 동사입니다.",
    "Very busy every day, many meetings to attend.": "매일 매우 바쁘고 참석해야 할 회의도 많습니다.",
    "Very good! Then how many people are here?": "매우 좋은! 그럼 여기에는 몇 명이 있나요?",
    "Very suitable! Shall I pack it for you?": "매우 적합합니다! 제가 포장해 드릴까요?",
    "Vocab List": "어휘 목록",
    "Waiter, check please! How much is it in total?": "웨이터님, 확인해 주세요! 총 얼마인가요?",
    "Waiter, please bring the menu.": "웨이터님, 메뉴판을 가져다 주세요.",
    "What do you do after getting off work and going home?": "퇴근하고 집에 가면 무엇을 하시나요?",
    "What do you like to do on weekends?": "주말에 무엇을 하고 싶나요?",
    "What do your dad and mom do for work?": "당신의 아빠와 엄마는 일을 위해 무엇을 하시나요?",
    "What time do you get up every day?": "매일 몇시에 일어나나요?",
    "What time do you go to sleep every day?": "매일 몇시에 잠자리에 드시나요?",
    "What time do you go to work? How do you go?": "몇 시에 회사에 가나요? 어떻게 가나요?",
    "What's wrong? You don't look very well.": "무슨 일이야? 당신은 별로 안 좋아 보이는군요.",
    "Where do you want to travel next month?": "다음 달에는 어디로 여행을 가고 싶나요?",
    "Which company do you work for?": "어느 회사에서 일하시나요?",
    "Which hotel do you plan to stay at? Have you booked it?": "어느 호텔에 묵을 계획인가요? 예약하셨나요?",
    "Who are they?": "그들은 누구입니까?",
    "Work is a bit tiring, I get off at 5:30 in the afternoon.": "일이 좀 피곤해서 오후 5시 30분에 퇴근해요.",
    "Yes, I bought some cold medicine yesterday.": "네, 어제 감기약을 샀어요.",
    "Yes, it has a profound influence on improving standard of living.": "그렇습니다. 생활 수준을 향상시키는 데 큰 영향을 미칩니다.",
    "Yes, the manager holds a meeting with us every morning.": "네, 매니저님이 매일 아침 저희와 미팅을 하십니다.",
    "You get up so early! What do you do after getting up?": "너무 일찍 일어나다니! 일어나서 무엇을 합니까?",
    "You're welcome": "천만에요",
    "You're welcome. That's all for today, goodbye!": "천만에요. 오늘은 여기까지입니다. 안녕!",
    "ability / capability": "능력/능력",
    "airplane": "비행기",
    "and / harmony": "그리고/조화",
    "apple": "사과",
    "big": "큰",
    "car": "자동차",
    "cat": "고양이",
    "chair": "의자",
    "click card again to close": "닫으려면 카드를 다시 클릭하세요.",
    "contract / agreement": "계약 / 합의",
    "cup": "컵",
    "cup / glass": "컵 / 유리",
    "daughter": "딸",
    "day/sky": "낮/하늘",
    "deposit": "보증금",
    "dog": "개",
    "drink": "마시다",
    "eat": "먹다",
    "experience": "경험",
    "father": "아버지",
    "friend": "친구",
    "good": "좋은",
    "good / well": "좋다/좋다",
    "he / him": "그 / 그",
    "hello": "안녕하세요",
    "hospital": "병원",
    "hot": "더운",
    "important": "중요한",
    "influence / effect": "영향/효과",
    "items": "아이템",
    "landlord": "주인",
    "major / professional": "전공 / 전문",
    "meeting / conference": "회의/회의",
    "middle/China": "중/중국",
    "money": "돈",
    "mother": "어머니",
    "not have / no": "없다 / 없다",
    "o'clock / point": "시 / 지점",
    "older sister": "언니",
    "person": "사람",
    "plural suffix": "복수 접미사",
    "rent money": "돈을 빌리다",
    "resume / CV": "이력서 / CV",
    "rice": "쌀",
    "scheme / plan": "계획 / 계획",
    "school": "학교",
    "she / her": "그녀 / 그녀",
    "small": "작은",
    "society": "사회",
    "son": "아들",
    "steam / gas": "증기/가스",
    "store": "가게",
    "student": "학생",
    "study": "공부하다",
    "success / successful": "성공 / 성공",
    "suggestion particle": "제안 입자",
    "table / desk": "테이블 / 책상",
    "tea": "차",
    "teacher": "선생님",
    "to agree": "동의하다",
    "to ask": "묻다",
    "to be responsible for": "책임을 지다",
    "to call / be named": "부르다 / 이름을 부르다",
    "to decide": "결정하다",
    "to develop": "개발하다",
    "to discuss": "토론하다",
    "to do": "할 일",
    "to drink": "마시다",
    "to eat": "먹다",
    "to improve / raise": "개선하다 / 높이다",
    "to interview / job interview": "면접 / 취업 면접",
    "to rent a house/apartment": "집/아파트를 임대하다",
    "to research": "연구하다",
    "to shine / photo": "빛나다 / 사진",
    "train": "기차",
    "transportation / traffic": "교통 / 교통",
    "water": "물",
    "what": "무엇",
    "you": "너",
    "younger sister": "여동생",
    "一边 + Verb 1 + 一边 + Verb 2": "一边 + 동사 1 + 一边 + 동사 2",
    "上=go to, 班=shift.": "上=가다, 班=교대.",
    "买=buy, 票=ticket.": "买=구매, 票=티켓.",
    "休=rest on tree, 息=breath.": "休=나무 위에서 쉬다, 息=숨.",
    "会=gather, 议=discuss.": "会=모이다, 议=토론하다.",
    "儿=child, 子=noun suffix.": "儿=자녀, 子=명사접미사.",
    "公=public, 司=manage. Company.": "公=공개, 事=관리. 회사.",
    "医=medical, 院=courtyard.": "医=의료, 院=안뜰.",
    "同=together, 事=business.": "同=함께, 일=사업.",
    "听=hear/listen, 音乐=music.": "听=듣다/듣다, sound乐=음악.",
    "唱=sing(v), 歌=song(n).": "唱=노래(v), 歌=노래(n).",
    "商=commerce, 店=shop.": "商=상점, 店=상점.",
    "多=many, 少=few. Together = quantity.": "多=많다, 少=적다. 함께 = 수량.",
    "太 + Adj + 了 for intensification.": "太 + Adj + 了는 강화를 의미합니다.",
    "女=female, 儿=child.": "女=여자, 儿=아이.",
    "宾=guest, 馆=building.": "宾=손님, 馆=건물.",
    "工=work/craft, 作=make. Work.": "工=작업/공예, 作=만들다. 일하다.",
    "很 links subject and adjective here.": "很는 여기에 주어와 형용사를 연결합니다.",
    "感=feel, 冒=risk/emit. Cold.": "感=느낌, 冒=위험/방출. 추운.",
    "打=hit/play, 篮球=basketball.": "打=히트/플레이, 篮球=농구.",
    "把 for disposal.": "폐기를 위해 把.",
    "数=count, 字=character.": "数=개수, 字=문자.",
    "旅=traveler, 游=wander/swim.": "旅=여행자, 游=방황/수영.",
    "早饭=morning meal.": "早饭=아침 식사.",
    "是...的 to emphasize time, place, or manner.": "시간, 장소, 방식을 강조하다.",
    "比 for comparison.": "비교를 위해 比.",
    "火车=train, 票=ticket.": "화차=기차, 票=티켓.",
    "点=select/order, 菜=dish.": "点=선택/주문, 菜=요리.",
    "照相=take photo, 机=machine.": "사진=사진 찍기, 机=기계.",
    "生=grow/beget, 病=illness.": "生=자라다/ 낳다, 病=병.",
    "睡=sleep(v), 觉=sleep(n).": "睡=수면(v), 觉=수면(n).",
    "米=raw rice, 饭=cooked meal.": "米=생쌀, 饭=요리.",
    "经=manage, 理=logic. Manager.": "经=관리, 理=논리. 관리자.",
    "菜=dish, 单=list. Food list = menu.": "菜=요리, 单=목록. 음식 목록 = 메뉴.",
    "虽然 + A, 但是 + B": "虽然 + A, 但是 + B",
    "行李=baggage, 箱=box.": "行里=수하물, 箱=상자.",
    "被 for passive.": "패시브의 경우 被.",
    "起=rise, 床=bed.": "起=상승, 床=침대.",
    "踢=kick, 足球=football.": "踢=킥, 足球=축구.",
    "身=body, 体=form. Together = health.": "身=신체, 体=형태. 함께 = 건강.",
    "运=move, 动=action.": "运=이동, 动=동작.",
    "迟=late, 到=arrive.": "迟=늦다, 到=도착."
  },
  "de": {
    "'+text+'": "'+text+'",
    "+ suggestedAnswer +": "+ vorgeschlagenAntwort +",
    ", e);\n  }\n}\n\nfunction sim(a,b){\n  const cleanA = a.replace(/[.,\\/#!$%\\^&\\*;:{}=\\-_`~()？。，！、\\s]/g,": ", e);\n  }\n}\n\nFunktion sim(a,b){\n  const cleanA = a.replace(/[.,\\/#!$%\\^&\\*;:{}=\\-_`~()？。，！、\\s]/g,",
    "1st Tone — High flat": "1. Ton – Hoch, flach",
    "2nd Tone — Rising": "2. Ton – Steigend",
    "3rd Tone — Dipping": "3. Ton – Eintauchen",
    "4th Tone — Falling": "4. Ton – Fallen",
    "<b>A + 比 + B + Adj + (Complement)</b><br><br>&bull; 他比我高 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他比我高', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He is taller than me)<br>&bull; 苹果比西瓜便宜 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('苹果比西瓜便宜', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Apples are cheaper than watermelons)<br>&bull; 他跑得比我快得多 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他跑得比我快得多', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He runs much faster than me)": "<b>A + 比 + B + Adj + (Komplement)</b><br><br>• 他比我高 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他比我高', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Er ist größer als ich)<br>•苹果比西瓜便宜 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('苹果比西瓜便宜', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Äpfel sind billiger als Wassermelonen)<br>• (Er läuft viel schneller als ich)",
    "<b>Obj + 被 + Agent + Verb + Result</b><br><br>&bull; 信已经被寄走了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('信已经被寄走了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (The letter has already been sent)<br>&bull; 他被老师批评了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他被老师批评了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He was criticized by the teacher)<br>&bull; 蛋糕被弟弟吃光了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('蛋糕被弟弟吃光了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (The cake was completely eaten by younger brother)": "<b>Obj + 被 + Agent + Verb + Ergebnis</b><br><br>• 信已经被寄走了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('信已经被寄走了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Der Brief wurde bereits gesendet)<br>• 他被老师批评了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他被老师批评了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Er wurde vom Lehrer kritisiert)<br>• 蛋糕被弟弟吃光了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('蛋糕被弟弟吃光了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Der Kuchen wurde vollständig vom jüngeren Bruder aufgegessen)",
    "<b>Subj + 把 + Obj + Verb + Result</b><br><br>&bull; 我把门关了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我把门关了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (I closed the door)<br>&bull; 她把衣服洗干净了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('她把衣服洗干净了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (She washed the clothes clean)<br>&bull; 请把手机关掉 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('请把手机关掉', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Please turn off your phone)<br><br>Object must be specific.": "<b>Subj + 把 + Obj + Verb + Ergebnis</b><br><br>• 我把门关了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我把门关了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Ich habe das geschlossen Tür)<br>• 她把衣服洗干净了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('她把衣服洗干净了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Sie wusch die Kleidung clean)<br>• 请把手机关掉 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('请把手机关掉', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Bitte schalten Sie Ihr Telefon aus)<br><br>Das Objekt muss spezifisch sein.",
    "<b>Subj + 是 + Detail + Verb + 的</b><br><br>&bull; 我们是昨天认识的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我们是昨天认识的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (We met yesterday - time)<br>&bull; 这本书是在北京买的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('这本书是在北京买的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (This book was bought in Beijing - place)<br>&bull; 他是和朋友一起来的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他是和朋友一起来的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He came with friends - manner)": "<b>Subj + 是 + Detail + Verb + 的</b><br><br>• 我们是昨天认识的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我们是昨天认识的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Wir haben uns gestern getroffen - Zeit)<br>• 这本书是在北京买的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('这本书是在北京买的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Dieses Buch wurde in Peking gekauft - Ort)<br>• 他是和朋友一起来的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他是和朋友一起来的', 0,7)\"><i class=\"fas fa-volume-high\"></i></span> (Er kam mit Freunden – Art und Weise)",
    "<b>Verb + 了 + Obj</b><br><br>&bull; 他去学校了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他去学校了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He went to school)<br>&bull; 我喝了三杯咖啡 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我喝了三杯咖啡', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (I drank three cups of coffee)<br>&bull; 你吃饭了吗？ <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('你吃饭了吗？', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Have you eaten?)": "<b>Verb + 了 + Obj</b><br><br>• 他去学校了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他去学校了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Er ging zur Schule)<br>•我喝了三杯咖啡 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我喝了三杯咖啡', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Ich habe drei Tassen Kaffee getrunken)<br>•你吃饭了吗？ <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('你吃饭了吗？', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Haben Sie gegessen?)",
    "<b>一边 + Verb 1 + 一边 + Verb 2</b><br><br>&bull; 我喜欢一边听音乐一边跑步 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我喜欢一边听音乐一边跑步', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (I like running while listening to music)<br>&bull; 不要一边开车一边玩手机 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('不要一边开车一边玩手机', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Do not play with your phone while driving)<br>&bull; 我们一边喝茶一边聊天吧 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我们一边喝茶一边聊天吧', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Let's drink tea while chatting)": "<b>一边 + Verb 1 + 一边 + Verb 2</b><br><br>• 我喜欢一边听音乐一边跑步 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我喜欢一边听音乐一边跑步', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Ich laufe gern, während ich Musik höre)<br>• 不要一边开车一边玩手机 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('不要一边开车一边玩手机', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Spielen Sie nicht mit Ihrem Telefon während der Fahrt)<br>•我们一边喝茶一边聊天吧 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我们一边喝茶一边聊天吧', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Lass uns beim Chatten Tee trinken)",
    "<b>太 + Adj/Verb + 了</b><br><br>&bull; 这个太贵了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('这个太贵了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (This is too expensive)<br>&bull; 他太累了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他太累了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He is too tired)<br>&bull; 太好了！<span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('太好了！', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Extremely good! / Great!)": "<b>太 + Adj/Verb + 了</b><br><br>• 这个太贵了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('这个太贵了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Das ist auch teuer)<br>• 他太累了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他太累了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Er ist zu müde)<br>• 太好了！<span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('太好了！', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Extrem gut! / Großartig!)",
    "<b>虽然... 但是...</b><br><br>&bull; 虽然天气不好，但是他还是出去了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然天气不好，但是他还是出去了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Although the weather was bad, he still went out)<br>&bull; 虽然这件衣服很贵，但是我很喜欢 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然这件衣服很贵，但是我很喜欢', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Although this clothing is expensive, I like it very much)<br>&bull; 虽然他病了，但是他坚持工作 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然他病了，但是他坚持工作', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Although he was sick, he persisted in working)": "<b>虽然... 但是...</b><br><br>• 虽然天气不好, 但是他还是出去了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然天气不好，但是他还是出去了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Obwohl das Wetter schlecht war, ging er trotzdem aus)<br>•虽然这件衣服很贵，但是我很喜欢 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然这件衣服很贵，但是我很喜欢', 0,7)\"><i class=\"fas fa-volume-high\"></i></span> (Obwohl diese Kleidung teuer ist, gefällt sie mir sehr)<br>• 虽然他病了，但是他坚持工作 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然他病了，但是他坚持工作', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Obwohl er krank war, arbeitete er weiter)",
    "A little fever. I don't want to go to the hospital, I want to take some medicine.": "Ein bisschen Fieber. Ich möchte nicht ins Krankenhaus, ich möchte Medikamente nehmen.",
    "A proposal or project plan.": "Ein Vorschlag oder Projektplan.",
    "Achieving a positive outcome.": "Ein positives Ergebnis erzielen.",
    "Add 吗 to make any statement a yes/no question.": "Fügen Sie 吗 hinzu, um jede Aussage zu einer Ja/Nein-Frage zu machen.",
    "After playing soccer we can also go sing karaoke, how about that?": "Nach dem Fußballspiel können wir auch Karaoke singen gehen, wie wäre es damit?",
    "Although Chinese is hard, it is very interesting.": "Obwohl Chinesisch schwer ist, ist es sehr interessant.",
    "Are you preparing to bring a suitcase or a backpack?": "Bereiten Sie sich darauf vor, einen Koffer oder einen Rucksack mitzubringen?",
    "At the Restaurant": "Im Restaurant",
    "Basic Greetings": "Grundlegende Grüße",
    "Be late": "Komm zu spät",
    "Beijing is great! Have you bought the train ticket?": "Peking ist großartig! Haben Sie das Bahnticket gekauft?",
    "Body / health": "Körper / Gesundheit",
    "Both family and physical home.": "Sowohl in der Familie als auch im physischen Zuhause.",
    "Bring a camera, you can take many nice photos.": "Bringen Sie eine Kamera mit, Sie können viele schöne Fotos machen.",
    "Buy ticket": "Ticket kaufen",
    "Camera": "Kamera",
    "Can it be a bit cheaper? Is two hundred and fifty okay?": "Darf es etwas günstiger sein? Sind zweihundertfünfzig in Ordnung?",
    "Catch a cold": "Erkälte dich",
    "Character": "Charakter",
    "Cheap / inexpensive": "Günstig / preiswert",
    "Click to view vocabulary": "Klicken Sie hier, um den Wortschatz anzuzeigen",
    "Clothes": "Kleidung",
    "Colleague / coworker": "Kollege/Kollege",
    "Community of people.": "Gemeinschaft von Menschen.",
    "Company": "Unternehmen",
    "Conjunction Embora/Mas": "Konjunktion Embora/Mas",
    "Convenience of travel.": "Bequemlichkeit des Reisens.",
    "Cooked rice": "Gekochter Reis",
    "Correct. Then how much money do you have?": "Richtig. Wie viel Geld hast du dann?",
    "Dad": "Papa",
    "Dad, mom, an older sister, and me.": "Papa, Mama, eine ältere Schwester und ich.",
    "Daily Routine": "Tagesablauf",
    "Daughter": "Tochter",
    "Deep study of a subject.": "Tiefes Studium eines Themas.",
    "Do you have a fever? Do you need to go to the hospital to see a doctor?": "Hast Du Fieber? Müssen Sie ins Krankenhaus, um einen Arzt aufzusuchen?",
    "Do you like sports? For example, playing basketball?": "Magst du Sport? Zum Beispiel Basketball spielen?",
    "Do you often meet with your manager?": "Treffen Sie sich häufig mit Ihrem Vorgesetzten?",
    "Document of work history.": "Dokument der beruflichen Laufbahn.",
    "Does your older sister work?": "Arbeitet Ihre ältere Schwester?",
    "Drinking more water and sleeping more will make your body recover faster.": "Wenn Sie mehr Wasser trinken und mehr schlafen, erholt sich Ihr Körper schneller.",
    "Eat breakfast": "Frühstücken",
    "Excellent, I look forward to it!": "Ausgezeichnet, ich freue mich darauf!",
    "Exercise": "Übung",
    "Expensive": "Teuer",
    "Expresses exchanging views.": "Bringt den Meinungsaustausch zum Ausdruck.",
    "Face-to-face evaluation.": "Persönliche Bewertung.",
    "Family / home": "Familie / Zuhause",
    "Field of study or expertise.": "Studienfach oder Fachwissen.",
    "General term for garments.": "Allgemeiner Begriff für Kleidungsstücke.",
    "Get off work": "Geh von der Arbeit",
    "Get sick": "Werde krank",
    "Get up": "Aufstehen",
    "Giving consent.": "Einwilligung erteilen.",
    "Go to work": "Geh zur Arbeit",
    "Good, then I want a bowl of beef noodles, and another bowl of rice.": "Gut, dann möchte ich eine Schüssel Rindernudeln und eine weitere Schüssel Reis.",
    "Goodbye": "Auf Wiedersehen",
    "Goodbye teacher!": "Auf Wiedersehen Lehrer!",
    "Great! Do you have a daughter and a son?": "Großartig! Hast du eine Tochter und einen Sohn?",
    "Great! I am going to play soccer on Saturday, do you want to join?": "Großartig! Ich werde am Samstag Fußball spielen. Möchtest du mitmachen?",
    "Great, thank you for telling me!": "Großartig, danke, dass du es mir erzählt hast!",
    "Growth and expansion.": "Wachstum und Expansion.",
    "Having great significance.": "Von großer Bedeutung.",
    "He is eating while watching TV.": "Er isst, während er fernsieht.",
    "Health & Body": "Gesundheit & Körper",
    "Hello": "Hallo",
    "Hello!": "Hallo!",
    "Hello! How many apples do you have?": "Hallo! Wie viele Äpfel hast du?",
    "Hello! What clothes do you want to buy?": "Hallo! Welche Kleidung möchtest du kaufen?",
    "Hobbies & Sports": "Hobbys und Sport",
    "Hospital": "Krankenhaus",
    "Hotel / guesthouse": "Hotel / Pension",
    "How are you?": "Wie geht es dir?",
    "How is the relationship between colleagues? Do they help each other?": "Wie ist das Verhältnis zwischen Kollegen? Helfen sie einander?",
    "How many / how much": "Wie viele / wie viel",
    "How many people in your family?": "Wie viele Personen sind in Ihrer Familie?",
    "Hundred": "Hundert",
    "I am ready, I believe this plan will succeed.": "Ich bin bereit, ich glaube, dass dieser Plan gelingen wird.",
    "I am ready, and I have three years of experience.": "Ich bin bereit und habe drei Jahre Erfahrung.",
    "I am very busy, studying a lot.": "Ich bin sehr beschäftigt und lerne viel.",
    "I arrive at the company very early every day, never late.": "Ich komme jeden Tag sehr früh im Unternehmen an, nie zu spät.",
    "I booked a hotel near Tiananmen Square.": "Ich habe ein Hotel in der Nähe des Platzes des Himmlischen Friedens gebucht.",
    "I bought a book.": "Ich habe ein Buch gekauft.",
    "I came by plane.": "Ich bin mit dem Flugzeug angereist.",
    "I don't have, I'm not married yet.": "Das habe ich nicht, ich bin noch nicht verheiratet.",
    "I don't like playing basketball, I like playing soccer.": "Ich spiele nicht gern Basketball, ich spiele gern Fußball.",
    "I eat breakfast first, then go to the park to run and exercise.": "Ich frühstücke zuerst und gehe dann in den Park, um zu laufen und Sport zu treiben.",
    "I feel a headache, I might be sick.": "Ich habe Kopfschmerzen, ich könnte krank sein.",
    "I get up at 6:30 every morning.": "Ich stehe jeden Morgen um 6:30 Uhr auf.",
    "I go to sleep at eleven o'clock sharp at night.": "Ich gehe pünktlich um elf Uhr abends schlafen.",
    "I go to work at eight, going by subway.": "Ich gehe um acht zur Arbeit und fahre mit der U-Bahn.",
    "I have three apples.": "Ich habe drei Äpfel.",
    "I have two hundred yuan.": "Ich habe zweihundert Yuan.",
    "I haven't bought the ticket yet, I will go buy it tomorrow.": "Ich habe das Ticket noch nicht gekauft, ich werde es morgen kaufen.",
    "I like listening to music and watching movies at home.": "Ich höre gerne Musik und schaue zu Hause Filme.",
    "I make dinner, watch TV, and then read books and study.": "Ich koche Abendessen, schaue fern, lese dann Bücher und lerne.",
    "I plan to travel to Beijing. I heard Beijing is very beautiful.": "Ich habe vor, nach Peking zu reisen. Ich habe gehört, Peking sei sehr schön.",
    "I put the book on the table.": "Ich lege das Buch auf den Tisch.",
    "I think it is suitable, we can sign the contract.": "Ich denke, es ist passend, wir können den Vertrag unterschreiben.",
    "I want a cup of ice water, thank you.": "Ich möchte eine Tasse Eiswasser, danke.",
    "I want to buy a red coat.": "Ich möchte einen roten Mantel kaufen.",
    "I want to buy, how much is one book?": "Ich möchte kaufen, wie viel kostet ein Buch?",
    "I want to eat noodles. Which noodles are the most delicious here?": "Ich möchte Nudeln essen. Welche Nudeln sind hier am leckersten?",
    "I will bring a large suitcase because I have many clothes.": "Ich werde einen großen Koffer mitbringen, da ich viele Kleidungsstücke habe.",
    "I work for a computer technology company.": "Ich arbeite für ein Computertechnologieunternehmen.",
    "I'm also very good. Have you been busy lately?": "Mir geht es auch sehr gut. Waren Sie in letzter Zeit beschäftigt?",
    "I'm very good": "Mir geht es sehr gut",
    "I'm very good, thanks! And you?": "Mir geht es sehr gut, danke! Und du?",
    "Impact on something.": "Einfluss auf etwas.",
    "Increasing quality or level.": "Steigerung der Qualität oder des Niveaus.",
    "Informal term for father.": "Informelle Bezeichnung für Vater.",
    "Informal term for mother.": "Informeller Begriff für Mutter.",
    "Introducing Family": "Familie vorstellen",
    "Is the work tiring? What time do you get off work?": "Ist die Arbeit ermüdend? Um wie viel Uhr haben Sie Feierabend?",
    "Is there cold medicine at home?": "Gibt es Erkältungsmedikamente zu Hause?",
    "Is your work busy? What tasks do you have every day?": "Ist Ihre Arbeit beschäftigt? Welche Aufgaben haben Sie jeden Tag?",
    "Job & Workplace": "Job & Arbeitsplatz",
    "Job / work": "Job / Arbeit",
    "Leasing living space.": "Wohnraum vermieten.",
    "Legal binding document.": "Rechtsverbindliches Dokument.",
    "Listen to music": "Hören Sie Musik",
    "Literally 'again meet' — see you!": "Wörtlich „Wiedersehen“ – wir sehen uns!",
    "Literally 'buy the list'.": "Wörtlich: „Kaufen Sie die Liste“.",
    "Literally 'don't be polite'.": "Wörtlich: „Seien Sie nicht höflich“.",
    "Literally 'eat medicine' in Chinese.": "Wörtlich übersetzt „Medizin essen“ auf Chinesisch.",
    "Literally 'electric shadow'.": "Wörtlich „elektrischer Schatten“.",
    "Look at this coat, how is it? Very beautiful.": "Schauen Sie sich diesen Mantel an, wie ist er? Sehr schön.",
    "Making a resolution.": "Einen Beschluss fassen.",
    "Manager": "Manager",
    "Measure word": "Wort messen",
    "Meet at the school playground at 3:00 PM.": "Treffpunkt ist um 15:00 Uhr auf dem Schulhof.",
    "Meeting / conference": "Treffen / Konferenz",
    "Menu": "Speisekarte",
    "Mom": "Mama",
    "Monthly payment.": "Monatliche Zahlung.",
    "Movie / film": "Film/Film",
    "My dad is a doctor, my mom is a teacher.": "Mein Vater ist Arzt, meine Mutter ist Lehrerin.",
    "Negated with 没 (e.g. 没有).": "Negiert mit 没 (z. B. 没有).",
    "No problem, I will definitely arrive on time.": "Kein Problem, ich werde auf jeden Fall pünktlich ankommen.",
    "No problem, please wait a moment, the food will be served shortly.": "Kein Problem, bitte warten Sie einen Moment, das Essen wird in Kürze serviert.",
    "Number / digit": "Zahl/Ziffer",
    "Numbers & Counting": "Zahlen und Zählen",
    "Okay, I drank a lot of hot water, I am going to sleep now.": "Okay, ich habe viel heißes Wasser getrunken, ich gehe jetzt schlafen.",
    "Okay, I have already put the camera in the box.": "Okay, ich habe die Kamera bereits in den Karton gelegt.",
    "Okay, I will go to the fitting room to try it on.": "Okay, ich werde in die Umkleidekabine gehen, um es anzuprobieren.",
    "Okay, are you ready to order now?": "Okay, sind Sie jetzt bereit zur Bestellung?",
    "Okay, checkout, here is the money!": "Okay, Kasse, hier ist das Geld!",
    "Okay, thank you teacher.": "Okay, danke Lehrer.",
    "Okay, you can have it for two hundred and fifty. Do you want to try it on?": "Okay, du kannst es für zweihundertfünfzig haben. Möchtest du es anprobieren?",
    "Okay. Would you like something to drink?": "Okay. Möchten Sie etwas trinken möchte?",
    "One book is ten yuan. Two hundred yuan can buy twenty books.": "Ein Buch kostet zehn Yuan. Für zweihundert Yuan kann man zwanzig Bücher kaufen.",
    "One, two, three": "Eins zwei drei",
    "Opposite of 上班.": "Gegenteil von 上班.",
    "Opposite of 贵.": "Gegenteil von 贵.",
    "Order food": "Essen bestellen",
    "Ordering Food": "Essen bestellen",
    "Our beef noodles are very famous and delicious.": "Unsere Rindernudeln sind sehr berühmt und lecker.",
    "Owner of the property.": "Eigentümer der Immobilie.",
    "Pay the bill": "Bezahlen Sie die Rechnung",
    "Physical training.": "Körperliches Training.",
    "Pitch curve plots here": "Tonhöhenkurvendiagramme hier",
    "Play basketball": "Basketball spielen",
    "Play soccer": "Fußball spielen",
    "Please introduce your major and work experience.": "Bitte geben Sie Ihr Hauptfach und Ihre Berufserfahrung an.",
    "Really? I want to go too! What time does it start?": "Wirklich? Ich will auch gehen! Um wie viel Uhr geht es los?",
    "Researching the development of society is very important.": "Die Erforschung der Entwicklung der Gesellschaft ist sehr wichtig.",
    "Rest": "Ausruhen",
    "Security money paid upfront.": "Sicherheitsgeld im Voraus bezahlt.",
    "Select a tone below to practice": "Wählen Sie unten einen Ton zum Üben aus",
    "She doesn't work, she is a student.": "Sie arbeitet nicht, sie ist Studentin.",
    "Shopping & Prices": "Einkaufen & Preise",
    "Simultaneous Actions": "Gleichzeitige Aktionen",
    "Skill level or power.": "Fähigkeitsniveau oder Kraft.",
    "Skills gained over time.": "Im Laufe der Zeit erworbene Fähigkeiten.",
    "Sleep": "Schlafen",
    "Soft 'x' — like a gentle 'sh'.": "Weiches „x“ – wie ein sanftes „sch“.",
    "Son": "Sohn",
    "Speak to visualize tone": "Sprechen Sie, um den Ton zu visualisieren",
    "Sports / exercise": "Sport / Bewegung",
    "Store / shop": "Geschäft / Geschäft",
    "Suitcase / luggage": "Koffer/Gepäck",
    "Take medicine": "Nimm Medikamente",
    "Taking charge of a task.": "Eine Aufgabe übernehmen.",
    "Thank you": "Danke",
    "Thank you for your care, see you tomorrow.": "Vielen Dank für Ihre Fürsorge, bis morgen.",
    "Thank you teacher, I will show you photos when I get back!": "Danke Lehrer, ich werde dir Fotos zeigen, wenn ich zurückkomme!",
    "That is very convenient! Wish you a pleasant trip!": "Das ist sehr praktisch! Wünsche dir eine angenehme Reise!",
    "That's great! Are you ever late for work?": "Das ist großartig! Kommen Sie manchmal zu spät zur Arbeit?",
    "That's too hard! You should rest more.": "Das ist zu schwer! Du solltest dich mehr ausruhen.",
    "The Completion Particle 了": "Das Vervollständigungsteilchen 了",
    "The action of consuming solid food.": "Die Wirkung des Verzehrs fester Nahrung.",
    "The colleagues are all very nice, supporting each other in work.": "Die Kollegen sind alle sehr nett und unterstützen sich gegenseitig bei der Arbeit.",
    "The first three numbers in Chinese.": "Die ersten drei Zahlen auf Chinesisch.",
    "The general measure word for people/things.": "Das allgemeine Maßwort für Personen/Dinge.",
    "The most common Chinese greeting. Use it anytime.": "Die gebräuchlichste chinesische Begrüßung. Benutzen Sie es jederzeit.",
    "The transportation here is very convenient, do you think the rent is suitable?": "Der Transport hierher ist sehr bequem. Halten Sie die Miete für angemessen?",
    "The wallet was stolen.": "Das Portemonnaie wurde gestohlen.",
    "The 太...了 Structure": "Die 太...了-Struktur",
    "The 把 Sentence": "Der 把-Satz",
    "The 是...的 Focus Structure": "Die 是...的 Fokusstruktur",
    "The 比 Comparison": "Der 比-Vergleich",
    "The 被 Passive": "Das 被 Passiv",
    "Then take the medicine immediately, and go lie down in bed to rest.": "Nehmen Sie das Arzneimittel dann sofort ein und legen Sie sich zur Ruhe ins Bett.",
    "There are five people here.": "Es sind fünf Leute hier.",
    "There are four people in my family.": "In meiner Familie gibt es vier Personen.",
    "Third tone. Do not confuse with 卖 (mài = to sell).": "Dritter Ton. Nicht verwechseln mit 卖 (mài = verkaufen).",
    "This is four hundred yuan, now on sale for three hundred.": "Das sind vierhundert Yuan, jetzt für dreihundert Yuan im Angebot.",
    "This is very beautiful, but a bit expensive. How much?": "Das ist sehr schön, aber etwas teuer. Wie viel?",
    "Time to study Chinese! 汉": "Zeit, Chinesisch zu lernen! 汉",
    "To buy": "Zu kaufen",
    "To drink": "Zum Trinken",
    "To eat": "Zum Essen",
    "To have / exist": "Haben/existieren",
    "To sing": "Zum Singen",
    "To travel / tourism": "Reisen / Tourismus",
    "To try on / test": "Zum Anprobieren/Testen",
    "Today is colder than yesterday.": "Heute ist es kälter als gestern.",
    "Today is too hot.": "Heute ist es zu heiß.",
    "Today we need to discuss the new plan, are you ready?": "Heute müssen wir den neuen Plan besprechen. Sind Sie bereit?",
    "Tone Pitch Visualizer": "Tonhöhen-Visualisierer",
    "Train ticket": "Bahnticket",
    "Travel Plans": "Reisepläne",
    "Two (quantity)": "Zwei (Menge)",
    "Two hundred yuan can buy many books. Do you want to buy books?": "Für zweihundert Yuan kann man viele Bücher kaufen. Möchten Sie Bücher kaufen?",
    "Two hundred yuan in total. Thank you for coming!": "Insgesamt zweihundert Yuan. Vielen Dank für Ihr Kommen!",
    "Use 两 instead of 二 before measure words.": "Verwenden Sie 两 anstelle von 二 vor Taktwörtern.",
    "Used for beverages/soups.": "Wird für Getränke/Suppen verwendet.",
    "Used for business gatherings.": "Wird für Geschäftstreffen genutzt.",
    "Used for counting hundreds (e.g. 一百 = 100).": "Wird zum Hunderterzählen verwendet (z. B. 一百 = 100).",
    "Used to describe high prices.": "Wird verwendet, um hohe Preise zu beschreiben.",
    "Verb + 了 for action completion.": "Verb + 了 für den Abschluss einer Aktion.",
    "Verb for testing clothes or trying them.": "Verb zum Testen oder Anprobieren von Kleidung.",
    "Very busy every day, many meetings to attend.": "Jeden Tag sehr beschäftigt, viele Besprechungen müssen besucht werden.",
    "Very good! Then how many people are here?": "Sehr gut! Wie viele Leute sind dann hier?",
    "Very suitable! Shall I pack it for you?": "Sehr geeignet! Soll ich es für dich einpacken?",
    "Vocab List": "Vokabelliste",
    "Waiter, check please! How much is it in total?": "Kellner, überprüfen Sie bitte! Wie viel kostet es insgesamt?",
    "Waiter, please bring the menu.": "Kellner, bitte bringen Sie die Speisekarte mit.",
    "What do you do after getting off work and going home?": "Was machen Sie, nachdem Sie von der Arbeit kommen und nach Hause gehen?",
    "What do you like to do on weekends?": "Was machst du am Wochenende gerne?",
    "What do your dad and mom do for work?": "Was machen deine Eltern beruflich?",
    "What time do you get up every day?": "Um wie viel Uhr stehen Sie jeden Tag auf?",
    "What time do you go to sleep every day?": "Um wie viel Uhr gehst du jeden Tag schlafen?",
    "What time do you go to work? How do you go?": "Um wie viel Uhr gehst du zur Arbeit? Wie geht es dir?",
    "What's wrong? You don't look very well.": "Was ist los? Du siehst nicht sehr gut aus.",
    "Where do you want to travel next month?": "Wohin möchtest du nächsten Monat reisen?",
    "Which company do you work for?": "Für welches Unternehmen arbeiten Sie?",
    "Which hotel do you plan to stay at? Have you booked it?": "In welchem ​​Hotel möchten Sie übernachten? Haben Sie es gebucht?",
    "Who are they?": "Wer sind Sie?",
    "Work is a bit tiring, I get off at 5:30 in the afternoon.": "Die Arbeit ist etwas anstrengend, ich habe um 17:30 Uhr Feierabend.",
    "Yes, I bought some cold medicine yesterday.": "Ja, ich habe gestern ein Erkältungsmittel gekauft.",
    "Yes, it has a profound influence on improving standard of living.": "Ja, es hat einen tiefgreifenden Einfluss auf die Verbesserung des Lebensstandards.",
    "Yes, the manager holds a meeting with us every morning.": "Ja, der Manager trifft sich jeden Morgen mit uns.",
    "You get up so early! What do you do after getting up?": "Du stehst so früh auf! Was machst du nach dem Aufstehen?",
    "You're welcome": "Gern geschehen",
    "You're welcome. That's all for today, goodbye!": "Gern geschehen. Das ist alles für heute, auf Wiedersehen!",
    "ability / capability": "Fähigkeit / Fähigkeit",
    "airplane": "Flugzeug",
    "and / harmony": "und / Harmonie",
    "apple": "Apfel",
    "big": "groß",
    "car": "Auto",
    "cat": "Katze",
    "chair": "Stuhl",
    "click card again to close": "Klicken Sie erneut auf die Karte, um sie zu schließen",
    "contract / agreement": "Vertrag / Vereinbarung",
    "cup": "Tasse",
    "cup / glass": "Tasse / Glas",
    "daughter": "Tochter",
    "day/sky": "Tag/Himmel",
    "deposit": "Kaution",
    "dog": "Hund",
    "drink": "trinken",
    "eat": "essen",
    "experience": "Erfahrung",
    "father": "Vater",
    "friend": "Freund",
    "good": "Gut",
    "good / well": "gut / gut",
    "he / him": "er/ihm",
    "hello": "Hallo",
    "hospital": "Krankenhaus",
    "hot": "heiß",
    "important": "wichtig",
    "influence / effect": "Einfluss / Wirkung",
    "items": "Artikel",
    "landlord": "Vermieter",
    "major / professional": "Hauptfach/Profi",
    "meeting / conference": "Treffen / Konferenz",
    "middle/China": "Mitte/China",
    "money": "Geld",
    "mother": "Mutter",
    "not have / no": "nicht haben / nein",
    "o'clock / point": "Uhr / Punkt",
    "older sister": "ältere Schwester",
    "person": "Person",
    "plural suffix": "Pluralsuffix",
    "rent money": "Geld mieten",
    "resume / CV": "Lebenslauf / Lebenslauf",
    "rice": "Reis",
    "scheme / plan": "Schema / Plan",
    "school": "Schule",
    "she / her": "sie/sie",
    "small": "klein",
    "society": "Gesellschaft",
    "son": "Sohn",
    "steam / gas": "Dampf / Gas",
    "store": "speichern",
    "student": "Student",
    "study": "Studie",
    "success / successful": "Erfolg / erfolgreich",
    "suggestion particle": "Vorschlagspartikel",
    "table / desk": "Tisch / Schreibtisch",
    "tea": "Tee",
    "teacher": "Lehrer",
    "to agree": "zustimmen",
    "to ask": "fragen",
    "to be responsible for": "verantwortlich sein",
    "to call / be named": "anrufen / genannt werden",
    "to decide": "zu entscheiden",
    "to develop": "zu entwickeln",
    "to discuss": "zu besprechen",
    "to do": "zu tun",
    "to drink": "zu trinken",
    "to eat": "zu essen",
    "to improve / raise": "verbessern / erhöhen",
    "to interview / job interview": "zum Vorstellungsgespräch / Vorstellungsgespräch",
    "to rent a house/apartment": "ein Haus/eine Wohnung mieten",
    "to research": "zu recherchieren",
    "to shine / photo": "glänzen / Foto",
    "train": "Zug",
    "transportation / traffic": "Transport / Verkehr",
    "water": "Wasser",
    "what": "Was",
    "you": "Du",
    "younger sister": "jüngere Schwester",
    "一边 + Verb 1 + 一边 + Verb 2": "一边 + Verb 1 + 一边 + Verb 2",
    "上=go to, 班=shift.": "上=gehe zu, 班=verschieben.",
    "买=buy, 票=ticket.": "买=kaufen, 票=Ticket.",
    "休=rest on tree, 息=breath.": "休=Ruhe auf Baum, 息=Atem.",
    "会=gather, 议=discuss.": "会=versammeln, 议=diskutieren.",
    "儿=child, 子=noun suffix.": "儿=Kind, 子=Substantivsuffix.",
    "公=public, 司=manage. Company.": "公=öffentlich, 司=verwalten. Unternehmen.",
    "医=medical, 院=courtyard.": "医=medizinisch, 院=Hof.",
    "同=together, 事=business.": "同=zusammen, 事=Geschäft.",
    "听=hear/listen, 音乐=music.": "听=hören/zuhören, 音乐=Musik.",
    "唱=sing(v), 歌=song(n).": "唱=sing(v), 歌=song(n).",
    "商=commerce, 店=shop.": "商=Handel, HQ=Shop.",
    "多=many, 少=few. Together = quantity.": "多=viele, 少=wenige. Zusammen = Menge.",
    "太 + Adj + 了 for intensification.": "太 + Adj + 了 für Intensivierung.",
    "女=female, 儿=child.": "女=weiblich, 儿=Kind.",
    "宾=guest, 馆=building.": "宾=Gast, 馆=Gebäude.",
    "工=work/craft, 作=make. Work.": "工=Arbeit/Handwerk, 作=machen. Arbeiten.",
    "很 links subject and adjective here.": "很 verknüpft hier Subjekt und Adjektiv.",
    "感=feel, 冒=risk/emit. Cold.": "感=fühlen, 冒=risiko/emittieren. Kalt.",
    "打=hit/play, 篮球=basketball.": "打=schlagen/spielen, 篮球=Basketball.",
    "把 for disposal.": "把 zur Entsorgung.",
    "数=count, 字=character.": "数=Anzahl, 字=Zeichen.",
    "旅=traveler, 游=wander/swim.": "旅=Reisender, 游=wandern/schwimmen.",
    "早饭=morning meal.": "早饭=Morgenmahlzeit.",
    "是...的 to emphasize time, place, or manner.": "是...的 um Zeit, Ort oder Art hervorzuheben.",
    "比 for comparison.": "比 zum Vergleich.",
    "火车=train, 票=ticket.": "火车=Zug, 票=Fahrkarte.",
    "点=select/order, 菜=dish.": "点=auswählen/bestellen, 菜=Gericht.",
    "照相=take photo, 机=machine.": "照相=Foto machen, 机=Maschine.",
    "生=grow/beget, 病=illness.": "生=wachsen/zeugen, 病=Krankheit.",
    "睡=sleep(v), 觉=sleep(n).": "睡=sleep(v), 觉=sleep(n).",
    "米=raw rice, 饭=cooked meal.": "米=roher Reis, 饭=gekochte Mahlzeit.",
    "经=manage, 理=logic. Manager.": "经=verwalten, 理=Logik. Manager.",
    "菜=dish, 单=list. Food list = menu.": "菜=Gericht, 单=Liste. Lebensmittelliste = Menü.",
    "虽然 + A, 但是 + B": "虽然 + A, 但是 + B",
    "行李=baggage, 箱=box.": "行李=Gepäck, 箱=Box.",
    "被 for passive.": "被 für passiv.",
    "起=rise, 床=bed.": "起=Aufstehen, 床=Bett.",
    "踢=kick, 足球=football.": "踢=Kick, 足球=Fußball.",
    "身=body, 体=form. Together = health.": "身=Körper, 体=Form. Zusammen = Gesundheit.",
    "运=move, 动=action.": "运=bewegen, 动=Aktion.",
    "迟=late, 到=arrive.": "迟=spät, 到=ankommen."
  },
  "pt": {
    "'+text+'": "'+texto+'",
    "+ suggestedAnswer +": "+ sugeridoResposta +",
    ", e);\n  }\n}\n\nfunction sim(a,b){\n  const cleanA = a.replace(/[.,\\/#!$%\\^&\\*;:{}=\\-_`~()？。，！、\\s]/g,": ", e);\n  }\n}\n\nfunção sim(a,b){\n  const cleanA = a.replace(/[.,\\/#!$%\\^&\\*;:{}=\\-_`~()？。，！、\\s]/g,",
    "1st Tone — High flat": "1º Tom - bemol agudo",
    "2nd Tone — Rising": "2º Tom – Subindo",
    "3rd Tone — Dipping": "3º tom – imersão",
    "4th Tone — Falling": "4º Tom – Caindo",
    "<b>A + 比 + B + Adj + (Complement)</b><br><br>&bull; 他比我高 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他比我高', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He is taller than me)<br>&bull; 苹果比西瓜便宜 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('苹果比西瓜便宜', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Apples are cheaper than watermelons)<br>&bull; 他跑得比我快得多 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他跑得比我快得多', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He runs much faster than me)": "<b>A + 比 + B + Adj + (Complemento)</b><br><br>• 他比我高 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他比我高', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Ele é mais alto que eu)<br>• 苹果比西瓜便宜 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('苹果比西瓜便宜', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Maçãs são mais baratas que melancias)<br>•他跑得比我快得多 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他跑得比我快得多', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Ele corre muito mais rápido que eu)",
    "<b>Obj + 被 + Agent + Verb + Result</b><br><br>&bull; 信已经被寄走了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('信已经被寄走了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (The letter has already been sent)<br>&bull; 他被老师批评了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他被老师批评了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He was criticized by the teacher)<br>&bull; 蛋糕被弟弟吃光了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('蛋糕被弟弟吃光了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (The cake was completely eaten by younger brother)": "<b>Obj + 被 + Agente + Verbo + Resultado</b><br><br>• 信已经被寄走了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('信已经被寄走了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (A carta já foi enviada)<br>• 他被老师批评了 <span class=\"sp-btn\" onclick=\"event.stopPropagation() speak('他被老师批评了', 0.7)\"><i class=\"fas; fa-volume-high\"></i></span> (Ele foi criticado pelo professor)<br>• 蛋糕被弟弟吃光了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('蛋糕被弟弟吃光了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (O bolo foi completamente comido pelo irmão mais novo)",
    "<b>Subj + 把 + Obj + Verb + Result</b><br><br>&bull; 我把门关了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我把门关了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (I closed the door)<br>&bull; 她把衣服洗干净了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('她把衣服洗干净了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (She washed the clothes clean)<br>&bull; 请把手机关掉 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('请把手机关掉', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Please turn off your phone)<br><br>Object must be specific.": "<b>Subj + 把 + Obj + Verbo + Resultado</b><br><br>• 我把门关了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我把门关了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (fechei o porta)<br>• 她把衣服洗干净了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('她把衣服洗干净了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Ela lavou as roupas clean)<br>• 请把手机关掉 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('请把手机关掉', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Desligue o telefone)<br><br>O objeto deve ser específico.",
    "<b>Subj + 是 + Detail + Verb + 的</b><br><br>&bull; 我们是昨天认识的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我们是昨天认识的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (We met yesterday - time)<br>&bull; 这本书是在北京买的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('这本书是在北京买的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (This book was bought in Beijing - place)<br>&bull; 他是和朋友一起来的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他是和朋友一起来的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He came with friends - manner)": "<b>Assunto + 是 + Detalhe + Verbo + 的</b><br><br>• 我们是昨天认识的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我们是昨天认识的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Nos conhecemos ontem - hora)<br>• 这本书是在北京买的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('这本书是在北京买的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Este livro foi comprado em Pequim - local)<br>• 他是和朋友一起来的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他是和朋友一起来的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Ele veio com amigos - maneira)",
    "<b>Verb + 了 + Obj</b><br><br>&bull; 他去学校了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他去学校了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He went to school)<br>&bull; 我喝了三杯咖啡 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我喝了三杯咖啡', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (I drank three cups of coffee)<br>&bull; 你吃饭了吗？ <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('你吃饭了吗？', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Have you eaten?)": "<b>Verbo + 了 + Obj</b><br><br>• 他去学校了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他去学校了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Ele foi para a escola)<br>•我喝了三杯咖啡 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我喝了三杯咖啡', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (bebi três xícaras de café)<br>•你吃饭了吗？ <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('你吃饭了吗？', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Você já comeu?)",
    "<b>一边 + Verb 1 + 一边 + Verb 2</b><br><br>&bull; 我喜欢一边听音乐一边跑步 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我喜欢一边听音乐一边跑步', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (I like running while listening to music)<br>&bull; 不要一边开车一边玩手机 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('不要一边开车一边玩手机', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Do not play with your phone while driving)<br>&bull; 我们一边喝茶一边聊天吧 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我们一边喝茶一边聊天吧', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Let's drink tea while chatting)": "<b>一边 + Verbo 1 + 一边 + Verbo 2</b><br><br>• 我喜欢一边听音乐一边跑步 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我喜欢一边听音乐一边跑步', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Gosto de correr enquanto ouço música)<br>• 不要一边开车一边玩手机 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('不要一边开车一边玩手机', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Não brinque com seu telefone enquanto dirige)<br>•我们一边喝茶一边聊天吧 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我们一边喝茶一边聊天吧', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Vamos tomar chá enquanto conversamos)",
    "<b>太 + Adj/Verb + 了</b><br><br>&bull; 这个太贵了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('这个太贵了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (This is too expensive)<br>&bull; 他太累了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他太累了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He is too tired)<br>&bull; 太好了！<span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('太好了！', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Extremely good! / Great!)": "<b>太 + Adj/Verbo + 了</b><br><br>• 这个太贵了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('这个太贵了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Isso também é caro)<br>• 他太累了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他太累了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Ele está muito cansado)<br>• 太好了！<span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('太好了！', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Extremamente bom! / Ótimo!)",
    "<b>虽然... 但是...</b><br><br>&bull; 虽然天气不好，但是他还是出去了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然天气不好，但是他还是出去了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Although the weather was bad, he still went out)<br>&bull; 虽然这件衣服很贵，但是我很喜欢 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然这件衣服很贵，但是我很喜欢', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Although this clothing is expensive, I like it very much)<br>&bull; 虽然他病了，但是他坚持工作 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然他病了，但是他坚持工作', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Although he was sick, he persisted in working)": "<b>虽然... 但是...</b><br><br>• 虽然天气不好, 但是他还是出去了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然天气不好，但是他还是出去了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Embora o tempo estivesse ruim, ele ainda saiu)<br>•虽然这件衣服很贵，但是我很喜欢 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然这件衣服很贵，但是我很喜欢', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Embora essas roupas sejam caras, eu gosto muito delas)<br>• 虽然他病了，但是他坚持工作 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然他病了，但是他坚持工作', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Embora estivesse doente, ele persistiu em trabalhar)",
    "A little fever. I don't want to go to the hospital, I want to take some medicine.": "Um pouco de febre. Não quero ir para o hospital, quero tomar um remédio.",
    "A proposal or project plan.": "Uma proposta ou plano de projeto.",
    "Achieving a positive outcome.": "Alcançar um resultado positivo.",
    "Add 吗 to make any statement a yes/no question.": "Adicione 吗 para transformar qualquer afirmação em uma pergunta de sim/não.",
    "After playing soccer we can also go sing karaoke, how about that?": "Depois de jogar futebol também podemos ir cantar no karaokê, que tal?",
    "Although Chinese is hard, it is very interesting.": "Embora o chinês seja difícil, é muito interessante.",
    "Are you preparing to bring a suitcase or a backpack?": "Você está se preparando para trazer uma mala ou mochila?",
    "At the Restaurant": "No restaurante",
    "Basic Greetings": "Saudações Básicas",
    "Be late": "Chegue atrasado",
    "Beijing is great! Have you bought the train ticket?": "Pequim é ótima! Você comprou a passagem de trem?",
    "Body / health": "Corpo / saúde",
    "Both family and physical home.": "Família e casa física.",
    "Bring a camera, you can take many nice photos.": "Traga uma câmera, você pode tirar muitas fotos legais.",
    "Buy ticket": "Comprar ingresso",
    "Camera": "Câmera",
    "Can it be a bit cheaper? Is two hundred and fifty okay?": "Pode ser um pouco mais barato? Duzentos e cinquenta estão bem?",
    "Catch a cold": "Pegar um resfriado",
    "Character": "Personagem",
    "Cheap / inexpensive": "Barato / barato",
    "Click to view vocabulary": "Clique para ver o vocabulário",
    "Clothes": "Roupas",
    "Colleague / coworker": "Colega / colega de trabalho",
    "Community of people.": "Comunidade de pessoas.",
    "Company": "Empresa",
    "Conjunction Embora/Mas": "Conjunção Embora/Mas",
    "Convenience of travel.": "Conveniência de viagem.",
    "Cooked rice": "Arroz cozido",
    "Correct. Then how much money do you have?": "Correto. Então quanto dinheiro você tem?",
    "Dad": "Pai",
    "Dad, mom, an older sister, and me.": "Papai, mãe, uma irmã mais velha e eu.",
    "Daily Routine": "Rotina Diária",
    "Daughter": "Filha",
    "Deep study of a subject.": "Estudo profundo de um assunto.",
    "Do you have a fever? Do you need to go to the hospital to see a doctor?": "Você está com febre? Você precisa ir ao hospital para consultar um médico?",
    "Do you like sports? For example, playing basketball?": "Você gosta de esportes? Por exemplo, jogando basquete?",
    "Do you often meet with your manager?": "Você costuma se reunir com seu gerente?",
    "Document of work history.": "Documento de histórico de trabalho.",
    "Does your older sister work?": "Sua irmã mais velha trabalha?",
    "Drinking more water and sleeping more will make your body recover faster.": "Beber mais água e dormir mais fará com que seu corpo se recupere mais rapidamente.",
    "Eat breakfast": "Tome café da manhã",
    "Excellent, I look forward to it!": "Excelente, estou ansioso!",
    "Exercise": "Exercício",
    "Expensive": "Caro",
    "Expresses exchanging views.": "Expressa troca de opiniões.",
    "Face-to-face evaluation.": "Avaliação presencial.",
    "Family / home": "Família / casa",
    "Field of study or expertise.": "Campo de estudo ou especialização.",
    "General term for garments.": "Termo geral para roupas.",
    "Get off work": "Saia do trabalho",
    "Get sick": "Ficar doente",
    "Get up": "Levantar",
    "Giving consent.": "Dando consentimento.",
    "Go to work": "Vá trabalhar",
    "Good, then I want a bowl of beef noodles, and another bowl of rice.": "Bom, então quero uma tigela de macarrão de carne e outra tigela de arroz.",
    "Goodbye": "Adeus",
    "Goodbye teacher!": "Adeus professor!",
    "Great! Do you have a daughter and a son?": "Ótimo! Você tem uma filha e um filho?",
    "Great! I am going to play soccer on Saturday, do you want to join?": "Ótimo! Vou jogar futebol no sábado, quer participar?",
    "Great, thank you for telling me!": "Ótimo, obrigado por me contar!",
    "Growth and expansion.": "Crescimento e expansão.",
    "Having great significance.": "Tendo grande significado.",
    "He is eating while watching TV.": "Ele está comendo enquanto assiste TV.",
    "Health & Body": "Saúde e Corpo",
    "Hello": "Olá",
    "Hello!": "Olá!",
    "Hello! How many apples do you have?": "Olá! Quantas maçãs você tem?",
    "Hello! What clothes do you want to buy?": "Olá! Que roupas você quer comprar?",
    "Hobbies & Sports": "Passatempos e esportes",
    "Hospital": "Hospital",
    "Hotel / guesthouse": "Hotel/pousada",
    "How are you?": "Como vai você?",
    "How is the relationship between colleagues? Do they help each other?": "Como é o relacionamento entre os colegas? Eles se ajudam?",
    "How many / how much": "Quantos / quanto",
    "How many people in your family?": "Quantas pessoas na sua família?",
    "Hundred": "Centenas",
    "I am ready, I believe this plan will succeed.": "Estou pronto, acredito que este plano terá sucesso.",
    "I am ready, and I have three years of experience.": "Estou pronto e tenho três anos de experiência.",
    "I am very busy, studying a lot.": "Estou muito ocupado, estudando muito.",
    "I arrive at the company very early every day, never late.": "Chego na empresa todos os dias bem cedo, nunca atrasado.",
    "I booked a hotel near Tiananmen Square.": "Reservei um hotel perto da Praça Tiananmen.",
    "I bought a book.": "Eu comprei um livro.",
    "I came by plane.": "Eu vim de avião.",
    "I don't have, I'm not married yet.": "Não tenho, ainda não sou casado.",
    "I don't like playing basketball, I like playing soccer.": "Não gosto de jogar basquete, gosto de jogar futebol.",
    "I eat breakfast first, then go to the park to run and exercise.": "Tomo primeiro o café da manhã e depois vou ao parque correr e fazer exercícios.",
    "I feel a headache, I might be sick.": "Sinto dor de cabeça, posso estar doente.",
    "I get up at 6:30 every morning.": "Eu acordo às 6h30 todas as manhãs.",
    "I go to sleep at eleven o'clock sharp at night.": "Vou dormir às onze horas da noite em ponto.",
    "I go to work at eight, going by subway.": "Vou trabalhar às oito, vou de metrô.",
    "I have three apples.": "Eu tenho três maçãs.",
    "I have two hundred yuan.": "Eu tenho duzentos yuans.",
    "I haven't bought the ticket yet, I will go buy it tomorrow.": "Ainda não comprei o ingresso, irei comprá-lo amanhã.",
    "I like listening to music and watching movies at home.": "Gosto de ouvir música e assistir filmes em casa.",
    "I make dinner, watch TV, and then read books and study.": "Faço o jantar, assisto TV e depois leio livros e estudo.",
    "I plan to travel to Beijing. I heard Beijing is very beautiful.": "Pretendo viajar para Pequim. Ouvi dizer que Pequim é muito bonita.",
    "I put the book on the table.": "Coloquei o livro sobre a mesa.",
    "I think it is suitable, we can sign the contract.": "Acho que é adequado, podemos assinar o contrato.",
    "I want a cup of ice water, thank you.": "Quero um copo de água gelada, obrigado.",
    "I want to buy a red coat.": "Quero comprar um casaco vermelho.",
    "I want to buy, how much is one book?": "Quero comprar, quanto custa um livro?",
    "I want to eat noodles. Which noodles are the most delicious here?": "Eu quero comer macarrão. Qual macarrão é o mais delicioso aqui?",
    "I will bring a large suitcase because I have many clothes.": "Vou trazer uma mala grande porque tenho muitas roupas.",
    "I work for a computer technology company.": "Eu trabalho para uma empresa de tecnologia de informática.",
    "I'm also very good. Have you been busy lately?": "Eu também estou muito bem. Você tem estado ocupado ultimamente?",
    "I'm very good": "estou muito bem",
    "I'm very good, thanks! And you?": "Estou muito bem, obrigado! E você?",
    "Impact on something.": "Impacto em algo.",
    "Increasing quality or level.": "Aumentando a qualidade ou nível.",
    "Informal term for father.": "Termo informal para pai.",
    "Informal term for mother.": "Termo informal para mãe.",
    "Introducing Family": "Apresentando a família",
    "Is the work tiring? What time do you get off work?": "O trabalho é cansativo? A que horas você sai do trabalho?",
    "Is there cold medicine at home?": "Existe remédio para resfriado em casa?",
    "Is your work busy? What tasks do you have every day?": "Seu trabalho está ocupado? Que tarefas você tem todos os dias?",
    "Job & Workplace": "Emprego e local de trabalho",
    "Job / work": "Trabalho / trabalho",
    "Leasing living space.": "Locação de espaço residencial.",
    "Legal binding document.": "Documento legal vinculativo.",
    "Listen to music": "Ouvir música",
    "Literally 'again meet' — see you!": "Literalmente 'encontrar-nos novamente' - até mais!",
    "Literally 'buy the list'.": "Literalmente 'compre a lista'.",
    "Literally 'don't be polite'.": "Literalmente 'não seja educado'.",
    "Literally 'eat medicine' in Chinese.": "Literalmente 'coma remédio' em chinês.",
    "Literally 'electric shadow'.": "Literalmente 'sombra elétrica'.",
    "Look at this coat, how is it? Very beautiful.": "Olha esse casaco, como está? Muito bonito.",
    "Making a resolution.": "Fazendo uma resolução.",
    "Manager": "Gerente",
    "Measure word": "Medir palavra",
    "Meet at the school playground at 3:00 PM.": "Encontro no pátio da escola às 15h.",
    "Meeting / conference": "Reunião/conferência",
    "Menu": "Menu",
    "Mom": "Mãe",
    "Monthly payment.": "Pagamento mensal.",
    "Movie / film": "Filme / filme",
    "My dad is a doctor, my mom is a teacher.": "Meu pai é médico, minha mãe é professora.",
    "Negated with 没 (e.g. 没有).": "Negado com 没 (por exemplo, 没有).",
    "No problem, I will definitely arrive on time.": "Não tem problema, com certeza chegarei na hora certa.",
    "No problem, please wait a moment, the food will be served shortly.": "Não tem problema, aguarde um momento, a comida será servida em breve.",
    "Number / digit": "Número / dígito",
    "Numbers & Counting": "Números e contagem",
    "Okay, I drank a lot of hot water, I am going to sleep now.": "Ok, bebi muita água quente, vou dormir agora.",
    "Okay, I have already put the camera in the box.": "Ok, já coloquei a câmera na caixa.",
    "Okay, I will go to the fitting room to try it on.": "Ok, irei ao provador para experimentar.",
    "Okay, are you ready to order now?": "Ok, você está pronto para fazer o pedido agora?",
    "Okay, checkout, here is the money!": "Ok, finalize a compra, aqui está o dinheiro!",
    "Okay, thank you teacher.": "Ok, obrigado professor.",
    "Okay, you can have it for two hundred and fifty. Do you want to try it on?": "Ok, você pode tê-lo por duzentos e cinquenta. Você quer experimentar?",
    "Okay. Would you like something to drink?": "OK. Posso servir alguma bebida?",
    "One book is ten yuan. Two hundred yuan can buy twenty books.": "Um livro custa dez yuans. Duzentos yuans podem comprar vinte livros.",
    "One, two, three": "Um dois três",
    "Opposite of 上班.": "Oposto de 上班.",
    "Opposite of 贵.": "Oposto de 贵.",
    "Order food": "Pedir comida",
    "Ordering Food": "Pedindo comida",
    "Our beef noodles are very famous and delicious.": "Nosso macarrão bovino é muito famoso e delicioso.",
    "Owner of the property.": "Proprietário do imóvel.",
    "Pay the bill": "Pague a conta",
    "Physical training.": "Treinamento físico.",
    "Pitch curve plots here": "Gráficos de curva de pitch aqui",
    "Play basketball": "Jogue basquete",
    "Play soccer": "Jogue futebol",
    "Please introduce your major and work experience.": "Por favor, apresente sua especialização e experiência de trabalho.",
    "Really? I want to go too! What time does it start?": "Realmente? Eu quero ir também! Que horas vai começar?",
    "Researching the development of society is very important.": "Pesquisar o desenvolvimento da sociedade é muito importante.",
    "Rest": "Descansar",
    "Security money paid upfront.": "Dinheiro de segurança pago antecipadamente.",
    "Select a tone below to practice": "Selecione um tom abaixo para praticar",
    "She doesn't work, she is a student.": "Ela não trabalha, ela é estudante.",
    "Shopping & Prices": "Compras e preços",
    "Simultaneous Actions": "Ações Simultâneas",
    "Skill level or power.": "Nível de habilidade ou poder.",
    "Skills gained over time.": "Habilidades adquiridas ao longo do tempo.",
    "Sleep": "Dormir",
    "Soft 'x' — like a gentle 'sh'.": "'x' suave - como um 'sh' suave.",
    "Son": "Filho",
    "Speak to visualize tone": "Fale para visualizar o tom",
    "Sports / exercise": "Esportes/exercício",
    "Store / shop": "Loja / loja",
    "Suitcase / luggage": "Mala / bagagem",
    "Take medicine": "Tome remédio",
    "Taking charge of a task.": "Assumir o comando de uma tarefa.",
    "Thank you": "Obrigado",
    "Thank you for your care, see you tomorrow.": "Obrigado pelo carinho, até amanhã.",
    "Thank you teacher, I will show you photos when I get back!": "Obrigado professor, mostrarei fotos quando voltar!",
    "That is very convenient! Wish you a pleasant trip!": "Isso é muito conveniente! Desejo-lhe uma boa viagem!",
    "That's great! Are you ever late for work?": "Isso é ótimo! Você já se atrasou para o trabalho?",
    "That's too hard! You should rest more.": "Isso é muito difícil! Você deveria descansar mais.",
    "The Completion Particle 了": "A Partícula de Conclusão",
    "The action of consuming solid food.": "A ação de consumir alimentos sólidos.",
    "The colleagues are all very nice, supporting each other in work.": "Os colegas são todos muito simpáticos, apoiando-se mutuamente no trabalho.",
    "The first three numbers in Chinese.": "Os três primeiros números em chinês.",
    "The general measure word for people/things.": "A palavra de medida geral para pessoas/coisas.",
    "The most common Chinese greeting. Use it anytime.": "A saudação chinesa mais comum. Use-o a qualquer hora.",
    "The transportation here is very convenient, do you think the rent is suitable?": "O transporte aqui é muito cômodo, você acha que o aluguel é adequado?",
    "The wallet was stolen.": "A carteira foi roubada.",
    "The 太...了 Structure": "A Estrutura 太...了",
    "The 把 Sentence": "A frase 把",
    "The 是...的 Focus Structure": "A Estrutura de Foco 是...的",
    "The 比 Comparison": "A Comparação",
    "The 被 Passive": "O 被 Passivo",
    "Then take the medicine immediately, and go lie down in bed to rest.": "Então tome o remédio imediatamente e deite-se na cama para descansar.",
    "There are five people here.": "Há cinco pessoas aqui.",
    "There are four people in my family.": "Há quatro pessoas na minha família.",
    "Third tone. Do not confuse with 卖 (mài = to sell).": "Terceiro tom. Não confunda com 卖 (mài = vender).",
    "This is four hundred yuan, now on sale for three hundred.": "São quatrocentos yuans, agora à venda por trezentos.",
    "This is very beautiful, but a bit expensive. How much?": "Isso é muito bonito, mas um pouco caro. Quanto?",
    "Time to study Chinese! 汉": "É hora de estudar chinês! 汉",
    "To buy": "Comprar",
    "To drink": "Para beber",
    "To eat": "Para comer",
    "To have / exist": "Ter/existir",
    "To sing": "Para cantar",
    "To travel / tourism": "Para viajar/turismo",
    "To try on / test": "Para experimentar / testar",
    "Today is colder than yesterday.": "Hoje está mais frio que ontem.",
    "Today is too hot.": "Hoje está muito quente.",
    "Today we need to discuss the new plan, are you ready?": "Hoje precisamos discutir o novo plano, você está pronto?",
    "Tone Pitch Visualizer": "Visualizador de tom",
    "Train ticket": "Bilhete de trem",
    "Travel Plans": "Planos de viagem",
    "Two (quantity)": "Dois (quantidade)",
    "Two hundred yuan can buy many books. Do you want to buy books?": "Duzentos yuans podem comprar muitos livros. Você quer comprar livros?",
    "Two hundred yuan in total. Thank you for coming!": "Duzentos yuans no total. Obrigado por ter vindo!",
    "Use 两 instead of 二 before measure words.": "Use 两 em vez de 二 antes de medir palavras.",
    "Used for beverages/soups.": "Usado para bebidas/sopas.",
    "Used for business gatherings.": "Usado para reuniões de negócios.",
    "Used for counting hundreds (e.g. 一百 = 100).": "Usado para contar centenas (por exemplo, 一百 = 100).",
    "Used to describe high prices.": "Usado para descrever preços altos.",
    "Verb + 了 for action completion.": "Verbo + 了 para conclusão da ação.",
    "Verb for testing clothes or trying them.": "Verbo para testar roupas ou experimentá-las.",
    "Very busy every day, many meetings to attend.": "Muito ocupado todos os dias, muitas reuniões para participar.",
    "Very good! Then how many people are here?": "Muito bom! Então quantas pessoas estão aqui?",
    "Very suitable! Shall I pack it for you?": "Muito adequado! Devo embalar para você?",
    "Vocab List": "Lista de vocabulário",
    "Waiter, check please! How much is it in total?": "Garçom, verifique por favor! Quanto é no total?",
    "Waiter, please bring the menu.": "Garçom, por favor traga o cardápio.",
    "What do you do after getting off work and going home?": "O que você faz depois de sair do trabalho e ir para casa?",
    "What do you like to do on weekends?": "O que você gosta de fazer nos finais de semana?",
    "What do your dad and mom do for work?": "O que seu pai e sua mãe fazem no trabalho?",
    "What time do you get up every day?": "A que horas você acorda todos os dias?",
    "What time do you go to sleep every day?": "A que horas você vai dormir todos os dias?",
    "What time do you go to work? How do you go?": "A que horas você vai trabalhar? Como você vai?",
    "What's wrong? You don't look very well.": "O que está errado? Você não parece muito bem.",
    "Where do you want to travel next month?": "Para onde você quer viajar no próximo mês?",
    "Which company do you work for?": "Para qual empresa você trabalha?",
    "Which hotel do you plan to stay at? Have you booked it?": "Em qual hotel você pretende ficar? Você reservou?",
    "Who are they?": "Quem são eles?",
    "Work is a bit tiring, I get off at 5:30 in the afternoon.": "O trabalho é um pouco cansativo, saio às 5h30 da tarde.",
    "Yes, I bought some cold medicine yesterday.": "Sim, comprei um remédio para resfriado ontem.",
    "Yes, it has a profound influence on improving standard of living.": "Sim, tem uma influência profunda na melhoria do padrão de vida.",
    "Yes, the manager holds a meeting with us every morning.": "Sim, o gerente realiza uma reunião conosco todas as manhãs.",
    "You get up so early! What do you do after getting up?": "Você acorda tão cedo! O que você faz depois de se levantar?",
    "You're welcome": "De nada",
    "You're welcome. That's all for today, goodbye!": "De nada. Por hoje é tudo, adeus!",
    "ability / capability": "habilidade / capacidade",
    "airplane": "avião",
    "and / harmony": "e / harmonia",
    "apple": "maçã",
    "big": "grande",
    "car": "carro",
    "cat": "gato",
    "chair": "cadeira",
    "click card again to close": "clique no cartão novamente para fechar",
    "contract / agreement": "contrato / acordo",
    "cup": "xícara",
    "cup / glass": "xícara / copo",
    "daughter": "filha",
    "day/sky": "dia/céu",
    "deposit": "depósito",
    "dog": "cachorro",
    "drink": "bebida",
    "eat": "comer",
    "experience": "experiência",
    "father": "pai",
    "friend": "amigo",
    "good": "bom",
    "good / well": "bom / bem",
    "he / him": "ele / ele",
    "hello": "olá",
    "hospital": "hospital",
    "hot": "quente",
    "important": "importante",
    "influence / effect": "influência / efeito",
    "items": "Unid",
    "landlord": "senhorio",
    "major / professional": "principal / profissional",
    "meeting / conference": "reunião / conferência",
    "middle/China": "meio/China",
    "money": "dinheiro",
    "mother": "mãe",
    "not have / no": "não tenho / não",
    "o'clock / point": "horas / ponto",
    "older sister": "irmã mais velha",
    "person": "pessoa",
    "plural suffix": "sufixo plural",
    "rent money": "alugar dinheiro",
    "resume / CV": "currículo / currículo",
    "rice": "arroz",
    "scheme / plan": "esquema / plano",
    "school": "escola",
    "she / her": "ela / ela",
    "small": "pequeno",
    "society": "sociedade",
    "son": "filho",
    "steam / gas": "vapor / gás",
    "store": "loja",
    "student": "estudante",
    "study": "estudar",
    "success / successful": "sucesso / sucesso",
    "suggestion particle": "partícula de sugestão",
    "table / desk": "mesa / secretária",
    "tea": "chá",
    "teacher": "professor",
    "to agree": "concordar",
    "to ask": "perguntar",
    "to be responsible for": "ser responsável por",
    "to call / be named": "chamar / ser nomeado",
    "to decide": "decidir",
    "to develop": "desenvolver",
    "to discuss": "discutir",
    "to do": "pendência",
    "to drink": "beber",
    "to eat": "comer",
    "to improve / raise": "melhorar / aumentar",
    "to interview / job interview": "para entrevista / entrevista de emprego",
    "to rent a house/apartment": "alugar uma casa/apartamento",
    "to research": "pesquisar",
    "to shine / photo": "brilhar / foto",
    "train": "trem",
    "transportation / traffic": "transporte / trânsito",
    "water": "água",
    "what": "o que",
    "you": "você",
    "younger sister": "irmã mais nova",
    "一边 + Verb 1 + 一边 + Verb 2": "一边 + Verbo 1 + 一边 + Verbo 2",
    "上=go to, 班=shift.": "上=ir para, 班=mudança.",
    "买=buy, 票=ticket.": "买=comprar, 票=ingresso.",
    "休=rest on tree, 息=breath.": "休=descanso na árvore, 息=respiração.",
    "会=gather, 议=discuss.": "会=reunir, 议=discutir.",
    "儿=child, 子=noun suffix.": "儿=filho, 子=sufixo do substantivo.",
    "公=public, 司=manage. Company.": "公=público, 司=gerenciar. Empresa.",
    "医=medical, 院=courtyard.": "医=médico, 院=pátio.",
    "同=together, 事=business.": "同=juntos, 事=negócios.",
    "听=hear/listen, 音乐=music.": "听=ouvir/ouvir, 音乐=música.",
    "唱=sing(v), 歌=song(n).": "唱=cantar(v), 歌=música(n).",
    "商=commerce, 店=shop.": "商=comércio, 店=loja.",
    "多=many, 少=few. Together = quantity.": "多=muitos, 少=poucos. Juntos = quantidade.",
    "太 + Adj + 了 for intensification.": "太 + Adj + 了 para intensificação.",
    "女=female, 儿=child.": "女=feminino, 儿=criança.",
    "宾=guest, 馆=building.": "宾=convidado, 馆=edifício.",
    "工=work/craft, 作=make. Work.": "工=trabalho/artesanato, 作=fazer. Trabalhar.",
    "很 links subject and adjective here.": "很 vincula assunto e adjetivo aqui.",
    "感=feel, 冒=risk/emit. Cold.": "感=sentir, 冒=risco/emitir. Frio.",
    "打=hit/play, 篮球=basketball.": "打=bater/jogar, 篮球=basquete.",
    "把 for disposal.": "把 para descarte.",
    "数=count, 字=character.": "数=contagem, 字=caractere.",
    "旅=traveler, 游=wander/swim.": "旅=viajante, 游=vagar/nadar.",
    "早饭=morning meal.": "早饭=refeição matinal.",
    "是...的 to emphasize time, place, or manner.": "是...的 para enfatizar tempo, lugar ou maneira.",
    "比 for comparison.": "比 para comparação.",
    "火车=train, 票=ticket.": "火车=trem, 票=passagem.",
    "点=select/order, 菜=dish.": "点=selecionar/pedir, 菜=prato.",
    "照相=take photo, 机=machine.": "照相=tirar foto, 机=máquina.",
    "生=grow/beget, 病=illness.": "生=crescer/gerar, 病=doença.",
    "睡=sleep(v), 觉=sleep(n).": "睡=sono(v), 觉=sono(n).",
    "米=raw rice, 饭=cooked meal.": "米=arroz cru, 饭=refeição cozida.",
    "经=manage, 理=logic. Manager.": "经=gerenciar, 理=lógica. Gerente.",
    "菜=dish, 单=list. Food list = menu.": "菜=prato, 单=lista. Lista de comida = cardápio.",
    "虽然 + A, 但是 + B": "虽然 + A, 但是 + B",
    "行李=baggage, 箱=box.": "行李=bagagem, 箱=caixa.",
    "被 for passive.": "被 para passivo.",
    "起=rise, 床=bed.": "起=levantar, 床=cama.",
    "踢=kick, 足球=football.": "踢=chute, 足球=futebol.",
    "身=body, 体=form. Together = health.": "身=corpo, 体=forma. Juntos = saúde.",
    "运=move, 动=action.": "运=mover, 动=ação.",
    "迟=late, 到=arrive.": "迟=tarde, 到=chegar."
  },
  "it": {
    "'+text+'": "'+testo+'",
    "+ suggestedAnswer +": "+risposta suggerita+",
    ", e);\n  }\n}\n\nfunction sim(a,b){\n  const cleanA = a.replace(/[.,\\/#!$%\\^&\\*;:{}=\\-_`~()？。，！、\\s]/g,": ", e);\n  }\n}\n\nfunzione sim(a,b){\n  const cleanA = a.replace(/[.,\\/#!$%\\^&\\*;:{}=\\-_`~()？。,!、\\s]/g,",
    "1st Tone — High flat": "1° tono: acuto e bemolle",
    "2nd Tone — Rising": "2° tono: Alzarsi",
    "3rd Tone — Dipping": "3° tono: abbassamento",
    "4th Tone — Falling": "4° tono: Caduta",
    "<b>A + 比 + B + Adj + (Complement)</b><br><br>&bull; 他比我高 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他比我高', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He is taller than me)<br>&bull; 苹果比西瓜便宜 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('苹果比西瓜便宜', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Apples are cheaper than watermelons)<br>&bull; 他跑得比我快得多 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他跑得比我快得多', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He runs much faster than me)": "<b>A + 比 + B + Adj + (Complemento)</b><br><br>• 他比我高 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他比我高', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (È più alto di me)<br>• 苹果比西瓜便宜 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('苹果比西瓜便宜', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Le mele costano meno delle angurie)<br>•他跑得比我快得多 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他跑得比我快得多', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Corre molto più veloce di me)",
    "<b>Obj + 被 + Agent + Verb + Result</b><br><br>&bull; 信已经被寄走了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('信已经被寄走了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (The letter has already been sent)<br>&bull; 他被老师批评了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他被老师批评了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He was criticized by the teacher)<br>&bull; 蛋糕被弟弟吃光了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('蛋糕被弟弟吃光了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (The cake was completely eaten by younger brother)": "<b>Oggetto + 被 + Agente + Verbo + Risultato</b><br><br>• 信已经被寄走了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('信已经被寄走了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (La lettera è già stata inviata)<br>• 他被老师批评了 <span class=\"sp-btn\" onclick=\"event.stopPropagation('他被老师批评了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (È stato criticato dall'insegnante)<br>• 蛋糕被弟弟吃光了 <span class=\"sp-btn\" onclick=\"event.stopPropagation('蛋糕被弟弟吃光了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (La torta è stata completamente mangiata dal fratello minore)",
    "<b>Subj + 把 + Obj + Verb + Result</b><br><br>&bull; 我把门关了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我把门关了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (I closed the door)<br>&bull; 她把衣服洗干净了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('她把衣服洗干净了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (She washed the clothes clean)<br>&bull; 请把手机关掉 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('请把手机关掉', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Please turn off your phone)<br><br>Object must be specific.": "<b>Soggetto + 把 + Obj + Verbo + Risultato</b><br><br>• 我把门关了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我把门关了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Ho chiuso il porta)<br>• 她把衣服洗干净了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('她把衣服洗干净了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Ha lavato i vestiti clean)<br>• 请把手机关掉 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('请把手机关掉', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Spegni il telefono)<br><br>L'oggetto deve essere specifico.",
    "<b>Subj + 是 + Detail + Verb + 的</b><br><br>&bull; 我们是昨天认识的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我们是昨天认识的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (We met yesterday - time)<br>&bull; 这本书是在北京买的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('这本书是在北京买的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (This book was bought in Beijing - place)<br>&bull; 他是和朋友一起来的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他是和朋友一起来的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He came with friends - manner)": "<b>Soggetto + 是 + Dettaglio + Verbo + 的</b><br><br>• 我们是昨天认识的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我们是昨天认识的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Ci siamo incontrati ieri - ora)<br>• 这本书是在北京买的 <span class=\"sp-btn\" onclick=\"event.stopPropagation('这本书是在北京买的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Questo libro è stato acquistato a Pechino - luogo)<br>• 他是和朋友一起来的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他是和朋友一起来的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (È venuto con gli amici - maniera)",
    "<b>Verb + 了 + Obj</b><br><br>&bull; 他去学校了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他去学校了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He went to school)<br>&bull; 我喝了三杯咖啡 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我喝了三杯咖啡', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (I drank three cups of coffee)<br>&bull; 你吃饭了吗？ <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('你吃饭了吗？', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Have you eaten?)": "<b>Verbo + 了 + Obj</b><br><br>• 他去学校了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他去学校了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Andò a scuola)<br>•我喝了三杯咖啡 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我喝了三杯咖啡', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Ho bevuto tre tazze di caffè)<br>•你吃饭了吗？ <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('你吃饭了吗？', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Hai mangiato?)",
    "<b>一边 + Verb 1 + 一边 + Verb 2</b><br><br>&bull; 我喜欢一边听音乐一边跑步 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我喜欢一边听音乐一边跑步', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (I like running while listening to music)<br>&bull; 不要一边开车一边玩手机 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('不要一边开车一边玩手机', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Do not play with your phone while driving)<br>&bull; 我们一边喝茶一边聊天吧 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我们一边喝茶一边聊天吧', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Let's drink tea while chatting)": "<b>一边 + Verbo 1 + 一边 + Verbo 2</b><br><br>• 我喜欢一边听音乐一边跑步 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我喜欢一边听音乐一边跑步', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (mi piace correre ascoltando musica)<br>• 不要一边开车一边玩手机 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('不要一边开车一边玩手机', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Non giocare con il telefono durante la guida)<br>•我们一边喝茶一边聊天吧 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我们一边喝茶一边聊天吧', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Beviamo il tè chiacchierando)",
    "<b>太 + Adj/Verb + 了</b><br><br>&bull; 这个太贵了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('这个太贵了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (This is too expensive)<br>&bull; 他太累了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他太累了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He is too tired)<br>&bull; 太好了！<span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('太好了！', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Extremely good! / Great!)": "<b>太 + Agg/Verbo + 了</b><br><br>• 这个太贵了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('这个太贵了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Anche questo costoso)<br>• 他太累了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他太累了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (È troppo stanco)<br>• 太好了!<span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('太好了!', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Estremamente buono! / Fantastico!)",
    "<b>虽然... 但是...</b><br><br>&bull; 虽然天气不好，但是他还是出去了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然天气不好，但是他还是出去了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Although the weather was bad, he still went out)<br>&bull; 虽然这件衣服很贵，但是我很喜欢 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然这件衣服很贵，但是我很喜欢', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Although this clothing is expensive, I like it very much)<br>&bull; 虽然他病了，但是他坚持工作 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然他病了，但是他坚持工作', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Although he was sick, he persisted in working)": "<b>虽然... 但是...</b><br><br>• 虽然天气不好,但是他还是出去了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然天气不好，但是他还是出去了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Nonostante il tempo fosse brutto, uscì comunque)<br>•虽然这件衣服很贵,但是我很喜欢 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然这件衣服很贵,但是我很喜欢', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Anche se questi vestiti sono costosi, mi piacciono molto)<br>• 虽然他病了,但是他坚持工作 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然他病了，但是他坚持工作', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Sebbene fosse malato, persisteva a lavorare)",
    "A little fever. I don't want to go to the hospital, I want to take some medicine.": "Un po' di febbre. Non voglio andare in ospedale, voglio prendere delle medicine.",
    "A proposal or project plan.": "Una proposta o un piano di progetto.",
    "Achieving a positive outcome.": "Raggiungere un risultato positivo.",
    "Add 吗 to make any statement a yes/no question.": "Aggiungi 吗 per rendere qualsiasi affermazione una domanda sì/no.",
    "After playing soccer we can also go sing karaoke, how about that?": "Dopo aver giocato a calcio possiamo anche andare a cantare al karaoke, che ne dici?",
    "Although Chinese is hard, it is very interesting.": "Sebbene il cinese sia difficile, è molto interessante.",
    "Are you preparing to bring a suitcase or a backpack?": "Ti stai preparando a portare una valigia o uno zaino?",
    "At the Restaurant": "Al Ristorante",
    "Basic Greetings": "Saluti di base",
    "Be late": "Fai tardi",
    "Beijing is great! Have you bought the train ticket?": "Pechino è fantastica! Hai comprato il biglietto del treno?",
    "Body / health": "Corpo/salute",
    "Both family and physical home.": "Sia la famiglia che la casa fisica.",
    "Bring a camera, you can take many nice photos.": "Portatevi una macchina fotografica, potrete scattare tante belle foto.",
    "Buy ticket": "Acquista il biglietto",
    "Camera": "Telecamera",
    "Can it be a bit cheaper? Is two hundred and fifty okay?": "Può essere un po' più economico? Duecentocinquanta vanno bene?",
    "Catch a cold": "Prendi un raffreddore",
    "Character": "Carattere",
    "Cheap / inexpensive": "Economico/economico",
    "Click to view vocabulary": "Fare clic per visualizzare il vocabolario",
    "Clothes": "Vestiti",
    "Colleague / coworker": "Collega/collaboratore",
    "Community of people.": "Comunità di persone.",
    "Company": "Azienda",
    "Conjunction Embora/Mas": "Congiunzione Embora/Mas",
    "Convenience of travel.": "Comodità di viaggio.",
    "Cooked rice": "Riso cotto",
    "Correct. Then how much money do you have?": "Corretto. Allora quanti soldi hai?",
    "Dad": "Papà",
    "Dad, mom, an older sister, and me.": "Papà, mamma, una sorella maggiore e io.",
    "Daily Routine": "Routine quotidiana",
    "Daughter": "Figlia",
    "Deep study of a subject.": "Studio approfondito di un argomento.",
    "Do you have a fever? Do you need to go to the hospital to see a doctor?": "Hai la febbre? Hai bisogno di andare in ospedale per vedere un medico?",
    "Do you like sports? For example, playing basketball?": "Ti piace lo sport? Ad esempio, giocare a basket?",
    "Do you often meet with your manager?": "Ti incontri spesso con il tuo manager?",
    "Document of work history.": "Documento di storia lavorativa.",
    "Does your older sister work?": "Tua sorella maggiore lavora?",
    "Drinking more water and sleeping more will make your body recover faster.": "Bere più acqua e dormire di più farà sì che il tuo corpo si riprenda più velocemente.",
    "Eat breakfast": "Fai colazione",
    "Excellent, I look forward to it!": "Ottimo, lo aspetto con ansia!",
    "Exercise": "Esercizio",
    "Expensive": "Costoso",
    "Expresses exchanging views.": "Esprime lo scambio di opinioni.",
    "Face-to-face evaluation.": "Valutazione faccia a faccia.",
    "Family / home": "Famiglia/casa",
    "Field of study or expertise.": "Campo di studio o di competenza.",
    "General term for garments.": "Termine generale per indumenti.",
    "Get off work": "Scendi dal lavoro",
    "Get sick": "Ammalati",
    "Get up": "Alzarsi",
    "Giving consent.": "Dare il consenso.",
    "Go to work": "Vai a lavorare",
    "Good, then I want a bowl of beef noodles, and another bowl of rice.": "Bene, allora voglio una ciotola di noodles di manzo e un'altra ciotola di riso.",
    "Goodbye": "Arrivederci",
    "Goodbye teacher!": "Addio insegnante!",
    "Great! Do you have a daughter and a son?": "Grande! Hai una figlia e un figlio?",
    "Great! I am going to play soccer on Saturday, do you want to join?": "Grande! Sabato giocherò a calcio, vuoi unirti?",
    "Great, thank you for telling me!": "Ottimo, grazie per avermelo detto!",
    "Growth and expansion.": "Crescita ed espansione.",
    "Having great significance.": "Di grande significato.",
    "He is eating while watching TV.": "Sta mangiando mentre guarda la TV.",
    "Health & Body": "Salute e corpo",
    "Hello": "Ciao",
    "Hello!": "Ciao!",
    "Hello! How many apples do you have?": "Ciao! Quante mele hai?",
    "Hello! What clothes do you want to buy?": "Ciao! Che vestiti vuoi comprare?",
    "Hobbies & Sports": "Hobby e sport",
    "Hospital": "Ospedale",
    "Hotel / guesthouse": "Albergo/pensione",
    "How are you?": "Come stai?",
    "How is the relationship between colleagues? Do they help each other?": "Com’è il rapporto tra colleghi? Si aiutano a vicenda?",
    "How many / how much": "Quanti/quanto",
    "How many people in your family?": "Quante persone nella tua famiglia?",
    "Hundred": "Centinaio",
    "I am ready, I believe this plan will succeed.": "Sono pronto, credo che questo piano avrà successo.",
    "I am ready, and I have three years of experience.": "Sono pronto e ho tre anni di esperienza.",
    "I am very busy, studying a lot.": "Sono molto impegnato, studio molto.",
    "I arrive at the company very early every day, never late.": "Arrivo in azienda molto presto ogni giorno, mai in ritardo.",
    "I booked a hotel near Tiananmen Square.": "Ho prenotato un hotel vicino a Piazza Tiananmen.",
    "I bought a book.": "Ho comprato un libro.",
    "I came by plane.": "Sono venuto in aereo.",
    "I don't have, I'm not married yet.": "Non ce l'ho, non sono ancora sposato.",
    "I don't like playing basketball, I like playing soccer.": "Non mi piace giocare a basket, mi piace giocare a calcio.",
    "I eat breakfast first, then go to the park to run and exercise.": "Prima faccio colazione, poi vado al parco a correre e fare esercizio.",
    "I feel a headache, I might be sick.": "Ho mal di testa, potrei stare male.",
    "I get up at 6:30 every morning.": "Mi alzo alle 6:30 ogni mattina.",
    "I go to sleep at eleven o'clock sharp at night.": "Vado a dormire alle undici in punto di sera.",
    "I go to work at eight, going by subway.": "Vado a lavorare alle otto, prendendo la metropolitana.",
    "I have three apples.": "Ho tre mele.",
    "I have two hundred yuan.": "Ho duecento yuan.",
    "I haven't bought the ticket yet, I will go buy it tomorrow.": "Non ho ancora comprato il biglietto, andrò a comprarlo domani.",
    "I like listening to music and watching movies at home.": "Mi piace ascoltare musica e guardare film a casa.",
    "I make dinner, watch TV, and then read books and study.": "Preparo la cena, guardo la TV, poi leggo libri e studio.",
    "I plan to travel to Beijing. I heard Beijing is very beautiful.": "Ho intenzione di viaggiare a Pechino. Ho sentito che Pechino è molto bella.",
    "I put the book on the table.": "Ho messo il libro sul tavolo.",
    "I think it is suitable, we can sign the contract.": "Penso che sia adatto, possiamo firmare il contratto.",
    "I want a cup of ice water, thank you.": "Voglio una tazza di acqua ghiacciata, grazie.",
    "I want to buy a red coat.": "Voglio comprare un cappotto rosso.",
    "I want to buy, how much is one book?": "Voglio comprare, quanto costa un libro?",
    "I want to eat noodles. Which noodles are the most delicious here?": "Voglio mangiare le tagliatelle. Quali noodles sono i più deliziosi qui?",
    "I will bring a large suitcase because I have many clothes.": "Porterò una valigia grande perché ho tanti vestiti.",
    "I work for a computer technology company.": "Lavoro per un'azienda di tecnologia informatica.",
    "I'm also very good. Have you been busy lately?": "Sono anche molto bravo. Sei stato occupato ultimamente?",
    "I'm very good": "Sono molto bravo",
    "I'm very good, thanks! And you?": "Sto molto bene, grazie! E tu?",
    "Impact on something.": "Impatto su qualcosa.",
    "Increasing quality or level.": "Aumentare la qualità o il livello.",
    "Informal term for father.": "Termine informale per padre.",
    "Informal term for mother.": "Termine informale per madre.",
    "Introducing Family": "Presentazione della Famiglia",
    "Is the work tiring? What time do you get off work?": "Il lavoro è faticoso? A che ora esci dal lavoro?",
    "Is there cold medicine at home?": "C'è una medicina per il raffreddore a casa?",
    "Is your work busy? What tasks do you have every day?": "Il tuo lavoro è occupato? Quali compiti hai ogni giorno?",
    "Job & Workplace": "Lavoro e posto di lavoro",
    "Job / work": "Lavoro/lavoro",
    "Leasing living space.": "Locazione spazio abitativo.",
    "Legal binding document.": "Documento giuridicamente vincolante.",
    "Listen to music": "Ascolta la musica",
    "Literally 'again meet' — see you!": "Letteralmente \"incontrarci di nuovo\": ci vediamo!",
    "Literally 'buy the list'.": "Letteralmente \"acquista la lista\".",
    "Literally 'don't be polite'.": "Letteralmente \"non essere educato\".",
    "Literally 'eat medicine' in Chinese.": "Letteralmente \"mangia medicine\" in cinese.",
    "Literally 'electric shadow'.": "Letteralmente 'ombra elettrica'.",
    "Look at this coat, how is it? Very beautiful.": "Guarda questo cappotto, com'è? Molto bello.",
    "Making a resolution.": "Prendere una decisione.",
    "Manager": "Manager",
    "Measure word": "Misurare la parola",
    "Meet at the school playground at 3:00 PM.": "Incontro nel cortile della scuola alle 15:00.",
    "Meeting / conference": "Incontro/conferenza",
    "Menu": "Menu",
    "Mom": "Mamma",
    "Monthly payment.": "Pagamento mensile.",
    "Movie / film": "Film/film",
    "My dad is a doctor, my mom is a teacher.": "Mio padre è un medico, mia madre è un'insegnante.",
    "Negated with 没 (e.g. 没有).": "Negato con 没 (es. 没有).",
    "No problem, I will definitely arrive on time.": "Nessun problema, arriverò sicuramente in tempo.",
    "No problem, please wait a moment, the food will be served shortly.": "Nessun problema, aspetta un attimo, il cibo verrà servito a breve.",
    "Number / digit": "Numero/cifra",
    "Numbers & Counting": "Numeri e conteggio",
    "Okay, I drank a lot of hot water, I am going to sleep now.": "Ok, ho bevuto molta acqua calda, ora vado a dormire.",
    "Okay, I have already put the camera in the box.": "Ok, ho già messo la fotocamera nella scatola.",
    "Okay, I will go to the fitting room to try it on.": "Ok, andrò nel camerino a provarlo.",
    "Okay, are you ready to order now?": "Ok, sei pronto per ordinare adesso?",
    "Okay, checkout, here is the money!": "Ok, fai il checkout, ecco i soldi!",
    "Okay, thank you teacher.": "Ok, grazie insegnante.",
    "Okay, you can have it for two hundred and fifty. Do you want to try it on?": "Ok, puoi averlo per duecentocinquanta. Vuoi provarlo?",
    "Okay. Would you like something to drink?": "Va bene. Vuoi qualcosa da bere?",
    "One book is ten yuan. Two hundred yuan can buy twenty books.": "Un libro costa dieci yuan. Con duecento yuan si possono comprare venti libri.",
    "One, two, three": "Uno due tre",
    "Opposite of 上班.": "Contrario di 上班.",
    "Opposite of 贵.": "Contrario di 贵.",
    "Order food": "Ordina cibo",
    "Ordering Food": "Ordinare cibo",
    "Our beef noodles are very famous and delicious.": "I nostri noodles di manzo sono molto famosi e deliziosi.",
    "Owner of the property.": "Proprietario dell'immobile.",
    "Pay the bill": "Paga il conto",
    "Physical training.": "Allenamento fisico.",
    "Pitch curve plots here": "La curva del passo viene tracciata qui",
    "Play basketball": "Gioca a basket",
    "Play soccer": "Gioca a calcio",
    "Please introduce your major and work experience.": "Per favore presenta la tua specializzazione e la tua esperienza lavorativa.",
    "Really? I want to go too! What time does it start?": "Veramente? Voglio andare anch'io! A che ora inizia?",
    "Researching the development of society is very important.": "La ricerca sullo sviluppo della società è molto importante.",
    "Rest": "Riposo",
    "Security money paid upfront.": "Soldi per la cauzione pagati in anticipo.",
    "Select a tone below to practice": "Seleziona un tono qui sotto per esercitarti",
    "She doesn't work, she is a student.": "Non lavora, è una studentessa.",
    "Shopping & Prices": "Acquisti e prezzi",
    "Simultaneous Actions": "Azioni simultanee",
    "Skill level or power.": "Livello di abilità o potenza.",
    "Skills gained over time.": "Competenze acquisite nel tempo.",
    "Sleep": "Sonno",
    "Soft 'x' — like a gentle 'sh'.": "Una \"x\" morbida: come una \"sh\" gentile.",
    "Son": "Figlio",
    "Speak to visualize tone": "Parla per visualizzare il tono",
    "Sports / exercise": "Sport/esercizio fisico",
    "Store / shop": "Negozio/negozio",
    "Suitcase / luggage": "Valigia/bagaglio",
    "Take medicine": "Prendi la medicina",
    "Taking charge of a task.": "Assumersi la responsabilità di un compito.",
    "Thank you": "Grazie",
    "Thank you for your care, see you tomorrow.": "Grazie per l'attenzione, a domani.",
    "Thank you teacher, I will show you photos when I get back!": "Grazie maestra, ti mostrerò le foto al mio ritorno!",
    "That is very convenient! Wish you a pleasant trip!": "Questo è molto conveniente! Ti auguro un piacevole viaggio!",
    "That's great! Are you ever late for work?": "È fantastico! Sei mai in ritardo al lavoro?",
    "That's too hard! You should rest more.": "È troppo difficile! Dovresti riposare di più.",
    "The Completion Particle 了": "La particella di completamento 了",
    "The action of consuming solid food.": "L'azione di consumare cibi solidi.",
    "The colleagues are all very nice, supporting each other in work.": "I colleghi sono tutti molto gentili, si sostengono a vicenda nel lavoro.",
    "The first three numbers in Chinese.": "I primi tre numeri in cinese.",
    "The general measure word for people/things.": "La parola di misura generale per persone/cose.",
    "The most common Chinese greeting. Use it anytime.": "Il saluto cinese più comune. Usalo in qualsiasi momento.",
    "The transportation here is very convenient, do you think the rent is suitable?": "Il trasporto qui è molto conveniente, pensi che l'affitto sia adatto?",
    "The wallet was stolen.": "Il portafoglio è stato rubato.",
    "The 太...了 Structure": "La struttura 太...了",
    "The 把 Sentence": "La frase 把",
    "The 是...的 Focus Structure": "La struttura del focus 是...的",
    "The 比 Comparison": "Il confronto 比",
    "The 被 Passive": "Il 被 Passivo",
    "Then take the medicine immediately, and go lie down in bed to rest.": "Allora prendi subito la medicina e vai a sdraiarti sul letto per riposare.",
    "There are five people here.": "Ci sono cinque persone qui.",
    "There are four people in my family.": "Ci sono quattro persone nella mia famiglia.",
    "Third tone. Do not confuse with 卖 (mài = to sell).": "Terzo tono. Da non confondere con 卖 (mài = vendere).",
    "This is four hundred yuan, now on sale for three hundred.": "Sono quattrocento yuan, ora in vendita a trecento.",
    "This is very beautiful, but a bit expensive. How much?": "Questo è molto bello, ma un po' caro. Quanto?",
    "Time to study Chinese! 汉": "È ora di studiare il cinese! 汉",
    "To buy": "Per comprare",
    "To drink": "Da bere",
    "To eat": "Per mangiare",
    "To have / exist": "Avere/esistere",
    "To sing": "Cantare",
    "To travel / tourism": "Viaggiare/turismo",
    "To try on / test": "Da provare/testare",
    "Today is colder than yesterday.": "Oggi è più freddo di ieri.",
    "Today is too hot.": "Oggi fa troppo caldo.",
    "Today we need to discuss the new plan, are you ready?": "Oggi dobbiamo discutere del nuovo piano, siete pronti?",
    "Tone Pitch Visualizer": "Visualizzatore del tono",
    "Train ticket": "Biglietto del treno",
    "Travel Plans": "Piani di viaggio",
    "Two (quantity)": "Due (quantità)",
    "Two hundred yuan can buy many books. Do you want to buy books?": "Con duecento yuan si possono comprare molti libri. Vuoi comprare libri?",
    "Two hundred yuan in total. Thank you for coming!": "Duecento yuan in totale. Grazie per essere venuto!",
    "Use 两 instead of 二 before measure words.": "Usa 两 invece di 二 prima delle parole misura.",
    "Used for beverages/soups.": "Utilizzato per bevande/zuppe.",
    "Used for business gatherings.": "Utilizzato per riunioni di lavoro.",
    "Used for counting hundreds (e.g. 一百 = 100).": "Utilizzato per contare centinaia (ad esempio 一百 = 100).",
    "Used to describe high prices.": "Utilizzato per descrivere prezzi elevati.",
    "Verb + 了 for action completion.": "Verbo + 了 per completare l'azione.",
    "Verb for testing clothes or trying them.": "Verbo per testare i vestiti o provarli.",
    "Very busy every day, many meetings to attend.": "Molto impegnato ogni giorno, molti incontri a cui partecipare.",
    "Very good! Then how many people are here?": "Molto bene! Allora quante persone ci sono qui?",
    "Very suitable! Shall I pack it for you?": "Molto adatto! Te lo preparo?",
    "Vocab List": "Elenco dei vocaboli",
    "Waiter, check please! How much is it in total?": "Cameriere, controlli per favore! Quanto costa in totale?",
    "Waiter, please bring the menu.": "Cameriere, per favore porta il menu.",
    "What do you do after getting off work and going home?": "Cosa fai dopo essere uscito dal lavoro e tornato a casa?",
    "What do you like to do on weekends?": "Cosa ti piace fare nei fine settimana?",
    "What do your dad and mom do for work?": "Cosa fanno tuo padre e tua madre per lavoro?",
    "What time do you get up every day?": "A che ora ti alzi ogni giorno?",
    "What time do you go to sleep every day?": "A che ora vai a dormire ogni giorno?",
    "What time do you go to work? How do you go?": "A che ora vai al lavoro? Come vai?",
    "What's wrong? You don't look very well.": "Cosa c'è che non va? Non hai un bell'aspetto.",
    "Where do you want to travel next month?": "Dove vuoi viaggiare il mese prossimo?",
    "Which company do you work for?": "Per quale azienda lavori?",
    "Which hotel do you plan to stay at? Have you booked it?": "In quale hotel intendi soggiornare? Lo hai prenotato?",
    "Who are they?": "Chi sono?",
    "Work is a bit tiring, I get off at 5:30 in the afternoon.": "Il lavoro è un po' faticoso, scendo alle 5:30 del pomeriggio.",
    "Yes, I bought some cold medicine yesterday.": "Sì, ieri ho comprato delle medicine per il raffreddore.",
    "Yes, it has a profound influence on improving standard of living.": "Sì, ha una profonda influenza sul miglioramento del tenore di vita.",
    "Yes, the manager holds a meeting with us every morning.": "Sì, il direttore tiene un incontro con noi ogni mattina.",
    "You get up so early! What do you do after getting up?": "Ti alzi così presto! Cosa fai dopo esserti alzato?",
    "You're welcome": "Prego",
    "You're welcome. That's all for today, goodbye!": "Prego. Per oggi è tutto, arrivederci!",
    "ability / capability": "abilità/capacità",
    "airplane": "aereo",
    "and / harmony": "e/armonia",
    "apple": "mela",
    "big": "grande",
    "car": "auto",
    "cat": "gatto",
    "chair": "sedia",
    "click card again to close": "fare nuovamente clic sulla scheda per chiudere",
    "contract / agreement": "contratto/accordo",
    "cup": "tazza",
    "cup / glass": "tazza/bicchiere",
    "daughter": "figlia",
    "day/sky": "giorno/cielo",
    "deposit": "depositare",
    "dog": "cane",
    "drink": "bere",
    "eat": "mangiare",
    "experience": "esperienza",
    "father": "padre",
    "friend": "amico",
    "good": "Bene",
    "good / well": "bene/bene",
    "he / him": "lui/lui",
    "hello": "Ciao",
    "hospital": "Ospedale",
    "hot": "caldo",
    "important": "importante",
    "influence / effect": "influenza/effetto",
    "items": "elementi",
    "landlord": "proprietario",
    "major / professional": "maggiore/professionale",
    "meeting / conference": "riunione/conferenza",
    "middle/China": "medio/Cina",
    "money": "soldi",
    "mother": "madre",
    "not have / no": "non avere / no",
    "o'clock / point": "ore / punto",
    "older sister": "sorella maggiore",
    "person": "persona",
    "plural suffix": "suffisso plurale",
    "rent money": "affittare soldi",
    "resume / CV": "curriculum / CV",
    "rice": "riso",
    "scheme / plan": "schema/piano",
    "school": "scuola",
    "she / her": "lei/lei",
    "small": "piccolo",
    "society": "società",
    "son": "figlio",
    "steam / gas": "vapore/gas",
    "store": "negozio",
    "student": "studente",
    "study": "studio",
    "success / successful": "successo/successo",
    "suggestion particle": "particella di suggestione",
    "table / desk": "tavolo/scrivania",
    "tea": "tè",
    "teacher": "insegnante",
    "to agree": "essere d'accordo",
    "to ask": "chiedere",
    "to be responsible for": "essere responsabile di",
    "to call / be named": "chiamare/essere nominato",
    "to decide": "decidere",
    "to develop": "sviluppare",
    "to discuss": "discutere",
    "to do": "fare",
    "to drink": "bere",
    "to eat": "mangiare",
    "to improve / raise": "migliorare/aumentare",
    "to interview / job interview": "fare un colloquio/colloquio di lavoro",
    "to rent a house/apartment": "affittare una casa/appartamento",
    "to research": "alla ricerca",
    "to shine / photo": "brillare / foto",
    "train": "treno",
    "transportation / traffic": "trasporto/traffico",
    "water": "acqua",
    "what": "Che cosa",
    "you": "Voi",
    "younger sister": "sorella minore",
    "一边 + Verb 1 + 一边 + Verb 2": "一边 + Verbo 1 + 一边 + Verbo 2",
    "上=go to, 班=shift.": "上=vai a, 班=sposta.",
    "买=buy, 票=ticket.": "买=acquista, 票=biglietto.",
    "休=rest on tree, 息=breath.": "休=posa sull'albero, 息=respiro.",
    "会=gather, 议=discuss.": "会=raccogliere, 议=discutere.",
    "儿=child, 子=noun suffix.": "儿=bambino, 子=suffisso del sostantivo.",
    "公=public, 司=manage. Company.": "公=pubblico, 司=gestisci. Azienda.",
    "医=medical, 院=courtyard.": "医=medico, 院=cortile.",
    "同=together, 事=business.": "同=insieme, 事=affari.",
    "听=hear/listen, 音乐=music.": "听=sentire/ascoltare, 音乐=musica.",
    "唱=sing(v), 歌=song(n).": "唱=cantare(v), 歌=canzone(n).",
    "商=commerce, 店=shop.": "商=commercio, 店=negozio.",
    "多=many, 少=few. Together = quantity.": "多=molti, 少=pochi. Insieme = quantità.",
    "太 + Adj + 了 for intensification.": "太 + Adj + 了 per intensificazione.",
    "女=female, 儿=child.": "女=femmina, 儿=bambina.",
    "宾=guest, 馆=building.": "宾=ospite, 馆=edificio.",
    "工=work/craft, 作=make. Work.": "工=lavoro/artigianato, 作=creare. Lavoro.",
    "很 links subject and adjective here.": "很 collega qui soggetto e aggettivo.",
    "感=feel, 冒=risk/emit. Cold.": "感=sentire, 冒=rischia/emetti. Freddo.",
    "打=hit/play, 篮球=basketball.": "打=colpisci/gioca, 篮球=basket.",
    "把 for disposal.": "把 per lo smaltimento.",
    "数=count, 字=character.": "数=conteggio, 字=carattere.",
    "旅=traveler, 游=wander/swim.": "旅=viaggiatore, 游=vagare/nuotare.",
    "早饭=morning meal.": "早饭=pasto mattutino.",
    "是...的 to emphasize time, place, or manner.": "是...的 per enfatizzare il tempo, il luogo o il modo.",
    "比 for comparison.": "比 per confronto.",
    "火车=train, 票=ticket.": "火车=treno, 票=biglietto.",
    "点=select/order, 菜=dish.": "点=seleziona/ordina, 菜=piatto.",
    "照相=take photo, 机=machine.": "照相=scattare foto, 机=macchina.",
    "生=grow/beget, 病=illness.": "生=crescere/generare, 病=malattia.",
    "睡=sleep(v), 觉=sleep(n).": "睡=sonno(v), 觉=sonno(n).",
    "米=raw rice, 饭=cooked meal.": "米=riso crudo, 饭=pasto cotto.",
    "经=manage, 理=logic. Manager.": "经=gestire, 理=logica. Manager.",
    "菜=dish, 单=list. Food list = menu.": "菜=piatto, 单=lista. Lista del cibo = menu.",
    "虽然 + A, 但是 + B": "虽然 + A, 但是 + B",
    "行李=baggage, 箱=box.": "行李=bagaglio, 箱=scatola.",
    "被 for passive.": "被 per passivo.",
    "起=rise, 床=bed.": "起=alzarsi, 床=letto.",
    "踢=kick, 足球=football.": "踢=calcio, 足球=calcio.",
    "身=body, 体=form. Together = health.": "身=corpo, 体=forma. Insieme = salute.",
    "运=move, 动=action.": "运=movimento, 动=azione.",
    "迟=late, 到=arrive.": "迟=tardi, 到=arrivare."
  },
  "ru": {
    "'+text+'": "'+текст+'",
    "+ suggestedAnswer +": "+ предложенныйОтвет +",
    ", e);\n  }\n}\n\nfunction sim(a,b){\n  const cleanA = a.replace(/[.,\\/#!$%\\^&\\*;:{}=\\-_`~()？。，！、\\s]/g,": ", е);\n  }\n}\n\nфункция сим(а,б){\n  const cleanA = a.replace(/[.,\\/#!$%\\^&\\*;:{}=\\-_`~()？。，！、\\s]/g,",
    "1st Tone — High flat": "1-й тон — Высокая бемоль.",
    "2nd Tone — Rising": "2-й тон — восходящий",
    "3rd Tone — Dipping": "3-й тон — погружение",
    "4th Tone — Falling": "4-й тон — Падающий",
    "<b>A + 比 + B + Adj + (Complement)</b><br><br>&bull; 他比我高 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他比我高', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He is taller than me)<br>&bull; 苹果比西瓜便宜 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('苹果比西瓜便宜', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Apples are cheaper than watermelons)<br>&bull; 他跑得比我快得多 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他跑得比我快得多', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He runs much faster than me)": "<b>A + 比 + B + Adj + (дополнение)</b><br><br>• 他比我高 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('他比我高', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Он выше меня)<br>• 苹果比西瓜便宜 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('苹果比西瓜便宜', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Яблоки дешевле, чем арбузы)<br>• 他跑得比我快得多 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('他跑得比我快得多', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Он много бегает быстрее меня)",
    "<b>Obj + 被 + Agent + Verb + Result</b><br><br>&bull; 信已经被寄走了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('信已经被寄走了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (The letter has already been sent)<br>&bull; 他被老师批评了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他被老师批评了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He was criticized by the teacher)<br>&bull; 蛋糕被弟弟吃光了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('蛋糕被弟弟吃光了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (The cake was completely eaten by younger brother)": "<b>Объект + 被 + Агент + Команда + Результат</b><br><br>• 信已经被寄走了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('信已经被寄走了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Письмо уже отправлено)<br>• 他被老师批评了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('他被老师批评了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (его раскритиковал учитель)<br>• 蛋糕被弟弟吃光了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('蛋糕被弟弟吃光了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Торт был полностью съеден младшим братом)",
    "<b>Subj + 把 + Obj + Verb + Result</b><br><br>&bull; 我把门关了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我把门关了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (I closed the door)<br>&bull; 她把衣服洗干净了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('她把衣服洗干净了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (She washed the clothes clean)<br>&bull; 请把手机关掉 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('请把手机关掉', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Please turn off your phone)<br><br>Object must be specific.": "<b>Subj + 把 + Obj + Verb + Result</b><br><br>• 我把门关了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('我把门关了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Я закрыла дверь)<br>• 她把衣服洗干净了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('她把衣服洗干净了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Она чисто выстирал одежду)<br>• 请把手机关掉 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('请把手机关掉', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Пожалуйста, выключите телефон)<br><br>Объект должен быть конкретный.",
    "<b>Subj + 是 + Detail + Verb + 的</b><br><br>&bull; 我们是昨天认识的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我们是昨天认识的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (We met yesterday - time)<br>&bull; 这本书是在北京买的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('这本书是在北京买的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (This book was bought in Beijing - place)<br>&bull; 他是和朋友一起来的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他是和朋友一起来的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He came with friends - manner)": "<b>Subj + 是 + Detail + Verb + 的</b><br><br>• 我们是昨天认识的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('我们是昨天认识的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Мы встретились вчера - время)<br>• 这本书是在北京买的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('这本书是在北京买的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Эта книга была куплена в Пекине - место)<br>• 他是和朋友一起来的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('他是和朋友一起来的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Он пришел с друзьями - манера)",
    "<b>Verb + 了 + Obj</b><br><br>&bull; 他去学校了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他去学校了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He went to school)<br>&bull; 我喝了三杯咖啡 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我喝了三杯咖啡', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (I drank three cups of coffee)<br>&bull; 你吃饭了吗？ <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('你吃饭了吗？', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Have you eaten?)": "<b>Глагол + 了 + Obj</b><br><br>• 他去学校了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('他去学校了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Он пошел в school)<br>• 我喝了三杯咖啡 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('我喝了三杯咖啡', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (я выпил три чашки кофе)<br>• 你吃饭了吗？ <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('你吃饭了吗？', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Вы ели?)",
    "<b>一边 + Verb 1 + 一边 + Verb 2</b><br><br>&bull; 我喜欢一边听音乐一边跑步 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我喜欢一边听音乐一边跑步', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (I like running while listening to music)<br>&bull; 不要一边开车一边玩手机 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('不要一边开车一边玩手机', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Do not play with your phone while driving)<br>&bull; 我们一边喝茶一边聊天吧 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我们一边喝茶一边聊天吧', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Let's drink tea while chatting)": "<b>一边 + глагол 1 + 一边 + глагол 2</b><br><br>• 我喜欢一边听音乐一边跑步 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('我喜欢一边听音乐一边跑步', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Мне нравится бегать, слушая музыку)<br>• 不要一边开车一边玩手机 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('不要一边开车一边玩手机', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Не играйте с телефоном во время вождения)<br>• <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('我们一边喝茶一边聊天吧', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Давайте попьем чаю за беседой)",
    "<b>太 + Adj/Verb + 了</b><br><br>&bull; 这个太贵了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('这个太贵了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (This is too expensive)<br>&bull; 他太累了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他太累了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He is too tired)<br>&bull; 太好了！<span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('太好了！', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Extremely good! / Great!)": "<b>太 + Adj/Verb + 了</b><br><br>• 这个太贵了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('这个太贵了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Это слишком дорого)<br>• 他太累了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('他太累了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Он слишком устал)<br>• 太好了！<span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('太好了！', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Очень хорошо! / Отлично!)",
    "<b>虽然... 但是...</b><br><br>&bull; 虽然天气不好，但是他还是出去了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然天气不好，但是他还是出去了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Although the weather was bad, he still went out)<br>&bull; 虽然这件衣服很贵，但是我很喜欢 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然这件衣服很贵，但是我很喜欢', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Although this clothing is expensive, I like it very much)<br>&bull; 虽然他病了，但是他坚持工作 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然他病了，但是他坚持工作', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Although he was sick, he persisted in working)": "<b>虽然... 但是...</b><br><br>• 虽然天气不好，但是他还是出去了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('虽然天气不好，但是他还是出去了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Хотя погода была плохая, он все равно вышел)<br>•虽然这件衣服很贵，但是我很喜欢 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('虽然这件衣服很贵，但是我很喜欢', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Хотя эта одежда дорогая, она мне очень нравится)<br>•虽然他病了，但是他坚持工作 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); talk('虽然他病了,但是他坚持工作', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Хотя он был болен, он продолжал работать)",
    "A little fever. I don't want to go to the hospital, I want to take some medicine.": "Небольшая лихорадка. Я не хочу идти в больницу, я хочу принять лекарство.",
    "A proposal or project plan.": "Предложение или план проекта.",
    "Achieving a positive outcome.": "Достижение положительного результата.",
    "Add 吗 to make any statement a yes/no question.": "Добавьте 吗, чтобы сделать любое утверждение вопросом «да/нет».",
    "After playing soccer we can also go sing karaoke, how about that?": "После игры в футбол мы можем пойти спеть в караоке, как насчет этого?",
    "Although Chinese is hard, it is very interesting.": "Хотя китайский язык труден, он очень интересен.",
    "Are you preparing to bring a suitcase or a backpack?": "Собираетесь взять с собой чемодан или рюкзак?",
    "At the Restaurant": "В ресторане",
    "Basic Greetings": "Основные приветствия",
    "Be late": "Опаздывать",
    "Beijing is great! Have you bought the train ticket?": "Пекин великолепен! Вы купили билет на поезд?",
    "Body / health": "Тело/здоровье",
    "Both family and physical home.": "И семья, и физический дом.",
    "Bring a camera, you can take many nice photos.": "Возьмите с собой фотоаппарат, вы сможете сделать много хороших фотографий.",
    "Buy ticket": "Купить билет",
    "Camera": "Камера",
    "Can it be a bit cheaper? Is two hundred and fifty okay?": "Может быть немного дешевле? Двести пятьдесят — это нормально?",
    "Catch a cold": "Простудиться",
    "Character": "Характер",
    "Cheap / inexpensive": "Дешево/недорого",
    "Click to view vocabulary": "Нажмите, чтобы просмотреть словарь",
    "Clothes": "Одежда",
    "Colleague / coworker": "Коллега/коллега",
    "Community of people.": "Сообщество людей.",
    "Company": "Компания",
    "Conjunction Embora/Mas": "Союз Эмбора/Мас",
    "Convenience of travel.": "Удобство путешествия.",
    "Cooked rice": "Вареный рис",
    "Correct. Then how much money do you have?": "Правильный. Тогда сколько у тебя денег?",
    "Dad": "Папа",
    "Dad, mom, an older sister, and me.": "Папа, мама, старшая сестра и я.",
    "Daily Routine": "Распорядок дня",
    "Daughter": "Дочь",
    "Deep study of a subject.": "Глубокое изучение предмета.",
    "Do you have a fever? Do you need to go to the hospital to see a doctor?": "У вас жар? Нужно ли идти в больницу, чтобы обратиться к врачу?",
    "Do you like sports? For example, playing basketball?": "Вам нравится спорт? Например, играя в баскетбол?",
    "Do you often meet with your manager?": "Вы часто встречаетесь со своим руководителем?",
    "Document of work history.": "Документ об истории работы.",
    "Does your older sister work?": "Твоя старшая сестра работает?",
    "Drinking more water and sleeping more will make your body recover faster.": "Если вы будете пить больше воды и больше спать, ваше тело быстрее восстановится.",
    "Eat breakfast": "Завтракать",
    "Excellent, I look forward to it!": "Отлично, жду с нетерпением!",
    "Exercise": "Упражнение",
    "Expensive": "Дорогой",
    "Expresses exchanging views.": "Выражает обмен мнениями.",
    "Face-to-face evaluation.": "Очная оценка.",
    "Family / home": "Семья/дом",
    "Field of study or expertise.": "Область исследования или специализации.",
    "General term for garments.": "Общий термин для одежды.",
    "Get off work": "Уйди с работы",
    "Get sick": "Заболеть",
    "Get up": "Вставать",
    "Giving consent.": "Даём согласие.",
    "Go to work": "Иди на работу",
    "Good, then I want a bowl of beef noodles, and another bowl of rice.": "Хорошо, тогда я хочу тарелку говяжьей лапши и еще тарелку риса.",
    "Goodbye": "До свидания",
    "Goodbye teacher!": "Прощай, учитель!",
    "Great! Do you have a daughter and a son?": "Большой! У вас есть дочь и сын?",
    "Great! I am going to play soccer on Saturday, do you want to join?": "Большой! В субботу я собираюсь играть в футбол, хочешь присоединиться?",
    "Great, thank you for telling me!": "Отлично, спасибо, что рассказали!",
    "Growth and expansion.": "Рост и расширение.",
    "Having great significance.": "Имеющий большое значение.",
    "He is eating while watching TV.": "Он ест, смотря телевизор.",
    "Health & Body": "Здоровье и тело",
    "Hello": "Привет",
    "Hello!": "Привет!",
    "Hello! How many apples do you have?": "Привет! Сколько у тебя яблок?",
    "Hello! What clothes do you want to buy?": "Привет! Какую одежду вы хотите купить?",
    "Hobbies & Sports": "Хобби и спорт",
    "Hospital": "Больница",
    "Hotel / guesthouse": "Отель / гостевой дом",
    "How are you?": "Как вы?",
    "How is the relationship between colleagues? Do they help each other?": "Как складываются отношения между коллегами? Помогают ли они друг другу?",
    "How many / how much": "Сколько/сколько",
    "How many people in your family?": "Сколько человек в вашей семье?",
    "Hundred": "сто",
    "I am ready, I believe this plan will succeed.": "Я готов, я верю, что этот план удастся.",
    "I am ready, and I have three years of experience.": "Я готов, и у меня есть трехлетний опыт.",
    "I am very busy, studying a lot.": "Я очень занят, много учусь.",
    "I arrive at the company very early every day, never late.": "Я каждый день прихожу в компанию очень рано и никогда не опаздываю.",
    "I booked a hotel near Tiananmen Square.": "Я забронировал отель недалеко от площади Тяньаньмэнь.",
    "I bought a book.": "Я купил книгу.",
    "I came by plane.": "Я прилетел на самолете.",
    "I don't have, I'm not married yet.": "У меня нет, я еще не женат.",
    "I don't like playing basketball, I like playing soccer.": "Я не люблю играть в баскетбол, я люблю играть в футбол.",
    "I eat breakfast first, then go to the park to run and exercise.": "Сначала я завтракаю, затем иду в парк бегать и заниматься спортом.",
    "I feel a headache, I might be sick.": "У меня болит голова, возможно, я заболел.",
    "I get up at 6:30 every morning.": "Я встаю в 6:30 каждое утро.",
    "I go to sleep at eleven o'clock sharp at night.": "Я ложусь спать ровно в одиннадцать часов вечера.",
    "I go to work at eight, going by subway.": "Я иду на работу в восемь, еду на метро.",
    "I have three apples.": "У меня есть три яблока.",
    "I have two hundred yuan.": "У меня есть двести юаней.",
    "I haven't bought the ticket yet, I will go buy it tomorrow.": "Билет еще не купил, завтра пойду покупать.",
    "I like listening to music and watching movies at home.": "Я люблю слушать музыку и смотреть фильмы дома.",
    "I make dinner, watch TV, and then read books and study.": "Я готовлю ужин, смотрю телевизор, а затем читаю книги и учусь.",
    "I plan to travel to Beijing. I heard Beijing is very beautiful.": "Я планирую поехать в Пекин. Я слышал, что Пекин очень красив.",
    "I put the book on the table.": "Я положил книгу на стол.",
    "I think it is suitable, we can sign the contract.": "Я думаю, это подходит, мы можем подписать контракт.",
    "I want a cup of ice water, thank you.": "Я хочу чашку ледяной воды, спасибо.",
    "I want to buy a red coat.": "Я хочу купить красное пальто.",
    "I want to buy, how much is one book?": "Я хочу купить, сколько стоит одна книга?",
    "I want to eat noodles. Which noodles are the most delicious here?": "Я хочу съесть лапшу. Какая лапша здесь самая вкусная?",
    "I will bring a large suitcase because I have many clothes.": "Я принесу большой чемодан, потому что у меня много одежды.",
    "I work for a computer technology company.": "Я работаю в компании компьютерных технологий.",
    "I'm also very good. Have you been busy lately?": "Я тоже очень хорош. Вы были заняты в последнее время?",
    "I'm very good": "мне очень хорошо",
    "I'm very good, thanks! And you?": "Мне очень хорошо, спасибо! А ты?",
    "Impact on something.": "Воздействие на что-либо.",
    "Increasing quality or level.": "Повышение качества или уровня.",
    "Informal term for father.": "Неофициальный термин для отца.",
    "Informal term for mother.": "Неофициальный термин для матери.",
    "Introducing Family": "Представляем семью",
    "Is the work tiring? What time do you get off work?": "Работа утомительна? Во сколько ты уходишь с работы?",
    "Is there cold medicine at home?": "Есть ли дома лекарства от простуды?",
    "Is your work busy? What tasks do you have every day?": "Ваша работа занята? Какие задачи у вас есть каждый день?",
    "Job & Workplace": "Работа и рабочее место",
    "Job / work": "Работа/работа",
    "Leasing living space.": "Сдача жилплощади в аренду.",
    "Legal binding document.": "Юридический обязательный документ.",
    "Listen to music": "Слушать музыку",
    "Literally 'again meet' — see you!": "Буквально «вновь встретимся» — увидимся!",
    "Literally 'buy the list'.": "Буквально «купить список».",
    "Literally 'don't be polite'.": "Буквально «не будь вежливым».",
    "Literally 'eat medicine' in Chinese.": "Буквально «ешьте лекарство» по-китайски.",
    "Literally 'electric shadow'.": "Буквально «электрическая тень».",
    "Look at this coat, how is it? Very beautiful.": "Посмотрите на это пальто, как оно? Очень красивый.",
    "Making a resolution.": "Принятие резолюции.",
    "Manager": "Менеджер",
    "Measure word": "Измерить слово",
    "Meet at the school playground at 3:00 PM.": "Встречаемся на школьной площадке в 15:00.",
    "Meeting / conference": "Встреча/конференция",
    "Menu": "Меню",
    "Mom": "Мама",
    "Monthly payment.": "Ежемесячная оплата.",
    "Movie / film": "Фильм / фильм",
    "My dad is a doctor, my mom is a teacher.": "Мой папа – врач, моя мама – учитель.",
    "Negated with 没 (e.g. 没有).": "Отрицается с помощью 没 (например, 没有).",
    "No problem, I will definitely arrive on time.": "Нет проблем, я обязательно приеду вовремя.",
    "No problem, please wait a moment, the food will be served shortly.": "Нет проблем, пожалуйста, подождите немного, еда будет подана в ближайшее время.",
    "Number / digit": "Номер/цифра",
    "Numbers & Counting": "Числа и счет",
    "Okay, I drank a lot of hot water, I am going to sleep now.": "Ладно, я выпил много горячей воды, сейчас пойду спать.",
    "Okay, I have already put the camera in the box.": "Хорошо, я уже положил камеру в коробку.",
    "Okay, I will go to the fitting room to try it on.": "Хорошо, я пойду в примерочную примерять.",
    "Okay, are you ready to order now?": "Хорошо, вы готовы сделать заказ прямо сейчас?",
    "Okay, checkout, here is the money!": "Хорошо, оформляйте заказ, вот деньги!",
    "Okay, thank you teacher.": "Хорошо, спасибо, учитель.",
    "Okay, you can have it for two hundred and fifty. Do you want to try it on?": "Хорошо, ты можешь получить его за двести пятьдесят. Хотите попробовать?",
    "Okay. Would you like something to drink?": "Хорошо. Хотите чего-нибудь выпить?",
    "One book is ten yuan. Two hundred yuan can buy twenty books.": "Одна книга стоит десять юаней. На двести юаней можно купить двадцать книг.",
    "One, two, three": "Один два три",
    "Opposite of 上班.": "Противоположность 上班.",
    "Opposite of 贵.": "Противоположность 贵.",
    "Order food": "Заказать еду",
    "Ordering Food": "Заказ еды",
    "Our beef noodles are very famous and delicious.": "Наша лапша с говядиной очень популярна и вкусна.",
    "Owner of the property.": "Владелец недвижимости.",
    "Pay the bill": "Оплатить счет",
    "Physical training.": "Физическая подготовка.",
    "Pitch curve plots here": "Графики кривой шага здесь",
    "Play basketball": "Играть в баскетбол",
    "Play soccer": "Играть в футбол",
    "Please introduce your major and work experience.": "Укажите, пожалуйста, вашу специальность и опыт работы.",
    "Really? I want to go too! What time does it start?": "Действительно? Я тоже хочу пойти! Во сколько начало?",
    "Researching the development of society is very important.": "Очень важно исследовать развитие общества.",
    "Rest": "Отдых",
    "Security money paid upfront.": "Деньги за охрану заплатили вперед.",
    "Select a tone below to practice": "Выберите тон ниже, чтобы попрактиковаться",
    "She doesn't work, she is a student.": "Она не работает, она студентка.",
    "Shopping & Prices": "Покупки и цены",
    "Simultaneous Actions": "Одновременные действия",
    "Skill level or power.": "Уровень навыка или сила.",
    "Skills gained over time.": "Навыки, приобретенные со временем.",
    "Sleep": "Спать",
    "Soft 'x' — like a gentle 'sh'.": "Мягкое «х» — как нежное «ш».",
    "Son": "Сын",
    "Speak to visualize tone": "Говорите, чтобы визуализировать тон",
    "Sports / exercise": "Спорт / упражнения",
    "Store / shop": "Магазин / магазин",
    "Suitcase / luggage": "Чемодан/багаж",
    "Take medicine": "Примите лекарство",
    "Taking charge of a task.": "Берем на себя задачу.",
    "Thank you": "Спасибо",
    "Thank you for your care, see you tomorrow.": "Спасибо за заботу, увидимся завтра.",
    "Thank you teacher, I will show you photos when I get back!": "Спасибо, учитель, я покажу вам фотографии, когда вернусь!",
    "That is very convenient! Wish you a pleasant trip!": "Это очень удобно! Желаю вам приятного путешествия!",
    "That's great! Are you ever late for work?": "Замечательно! Вы когда-нибудь опаздывали на работу?",
    "That's too hard! You should rest more.": "Это слишком сложно! Тебе следует больше отдыхать.",
    "The Completion Particle 了": "Частица завершения 了",
    "The action of consuming solid food.": "Действие употребления твердой пищи.",
    "The colleagues are all very nice, supporting each other in work.": "Коллеги все очень хорошие, поддерживают друг друга в работе.",
    "The first three numbers in Chinese.": "Первые три цифры на китайском.",
    "The general measure word for people/things.": "Общее мерное слово для людей/вещей.",
    "The most common Chinese greeting. Use it anytime.": "Самое распространенное китайское приветствие. Используйте его в любое время.",
    "The transportation here is very convenient, do you think the rent is suitable?": "Транспорт здесь очень удобный, как вы думаете, подойдет ли аренда?",
    "The wallet was stolen.": "Кошелек был украден.",
    "The 太...了 Structure": "Структура 太...了",
    "The 把 Sentence": "Предложение 把",
    "The 是...的 Focus Structure": "是...的 Фокусная структура",
    "The 比 Comparison": "Сравнение 比",
    "The 被 Passive": "被 Пассив",
    "Then take the medicine immediately, and go lie down in bed to rest.": "Затем немедленно примите лекарство и лягте в постель отдохнуть.",
    "There are five people here.": "Здесь пять человек.",
    "There are four people in my family.": "В моей семье четыре человека.",
    "Third tone. Do not confuse with 卖 (mài = to sell).": "Третий тон. Не путайте с卖 (май = продавать).",
    "This is four hundred yuan, now on sale for three hundred.": "Это четыреста юаней, сейчас продается за триста.",
    "This is very beautiful, but a bit expensive. How much?": "Это очень красиво, но немного дорого. Сколько?",
    "Time to study Chinese! 汉": "Время изучать китайский язык! 汉",
    "To buy": "Купить",
    "To drink": "Пить",
    "To eat": "Есть",
    "To have / exist": "Иметь/существовать",
    "To sing": "Петь",
    "To travel / tourism": "Путешествия/туризм",
    "To try on / test": "Примерить/проверить",
    "Today is colder than yesterday.": "Сегодня холоднее, чем вчера.",
    "Today is too hot.": "Сегодня слишком жарко.",
    "Today we need to discuss the new plan, are you ready?": "Сегодня нам нужно обсудить новый план, вы готовы?",
    "Tone Pitch Visualizer": "Визуализатор высоты тона",
    "Train ticket": "Билет на поезд",
    "Travel Plans": "Планы путешествий",
    "Two (quantity)": "Два (количество)",
    "Two hundred yuan can buy many books. Do you want to buy books?": "На двести юаней можно купить много книг. Вы хотите купить книги?",
    "Two hundred yuan in total. Thank you for coming!": "Всего двести юаней. Спасибо, что пришли!",
    "Use 两 instead of 二 before measure words.": "Используйте 两 вместо 二 перед измерением слов.",
    "Used for beverages/soups.": "Используется для напитков/супов.",
    "Used for business gatherings.": "Используется для деловых встреч.",
    "Used for counting hundreds (e.g. 一百 = 100).": "Используется для счета сотен (например, 一百 = 100).",
    "Used to describe high prices.": "Используется для описания высоких цен.",
    "Verb + 了 for action completion.": "Глагол + 了 для завершения действия.",
    "Verb for testing clothes or trying them.": "Глагол, обозначающий тестирование одежды или ее примерку.",
    "Very busy every day, many meetings to attend.": "Каждый день очень занят, нужно посетить много встреч.",
    "Very good! Then how many people are here?": "Очень хороший! Тогда сколько здесь людей?",
    "Very suitable! Shall I pack it for you?": "Очень подходит! Мне упаковать это для тебя?",
    "Vocab List": "Список слов",
    "Waiter, check please! How much is it in total?": "Официант, проверьте, пожалуйста! Сколько это всего?",
    "Waiter, please bring the menu.": "Официант, принесите, пожалуйста, меню.",
    "What do you do after getting off work and going home?": "Что вы делаете после того, как заканчиваете работу и идете домой?",
    "What do you like to do on weekends?": "Что ты любишь делать по выходным?",
    "What do your dad and mom do for work?": "Чем твои папа и мама работают?",
    "What time do you get up every day?": "Во сколько ты встаешь каждый день?",
    "What time do you go to sleep every day?": "В какое время ты каждый день ложишься спать?",
    "What time do you go to work? How do you go?": "В какое время ты идешь на работу? Как дела?",
    "What's wrong? You don't look very well.": "В чем дело? Ты не очень хорошо выглядишь.",
    "Where do you want to travel next month?": "Куда вы хотите поехать в следующем месяце?",
    "Which company do you work for?": "В какой компании вы работаете?",
    "Which hotel do you plan to stay at? Have you booked it?": "В каком отеле вы планируете остановиться? Вы забронировали его?",
    "Who are they?": "Кто они?",
    "Work is a bit tiring, I get off at 5:30 in the afternoon.": "Работа немного утомляет, я заканчиваю в 5:30 вечера.",
    "Yes, I bought some cold medicine yesterday.": "Да, я вчера купил лекарство от простуды.",
    "Yes, it has a profound influence on improving standard of living.": "Да, это оказывает глубокое влияние на повышение уровня жизни.",
    "Yes, the manager holds a meeting with us every morning.": "Да, менеджер каждое утро проводит с нами встречу.",
    "You get up so early! What do you do after getting up?": "Ты встаешь так рано! Что ты делаешь после того, как встаешь?",
    "You're welcome": "Пожалуйста",
    "You're welcome. That's all for today, goodbye!": "Пожалуйста. На сегодня всё, до свидания!",
    "ability / capability": "способность / способность",
    "airplane": "самолет",
    "and / harmony": "и/гармония",
    "apple": "яблоко",
    "big": "большой",
    "car": "машина",
    "cat": "кот",
    "chair": "стул",
    "click card again to close": "нажмите карточку еще раз, чтобы закрыть",
    "contract / agreement": "контракт / соглашение",
    "cup": "чашка",
    "cup / glass": "чашка/стакан",
    "daughter": "дочь",
    "day/sky": "день/небо",
    "deposit": "депозит",
    "dog": "собака",
    "drink": "напиток",
    "eat": "есть",
    "experience": "опыт",
    "father": "отец",
    "friend": "друг",
    "good": "хороший",
    "good / well": "хорошо / хорошо",
    "he / him": "он / он",
    "hello": "привет",
    "hospital": "больница",
    "hot": "горячий",
    "important": "важный",
    "influence / effect": "влияние/эффект",
    "items": "предметы",
    "landlord": "домовладелец",
    "major / professional": "майор/профессиональный",
    "meeting / conference": "встреча/конференция",
    "middle/China": "средний/Китай",
    "money": "деньги",
    "mother": "мать",
    "not have / no": "нет / нет",
    "o'clock / point": "час/точка",
    "older sister": "старшая сестра",
    "person": "человек",
    "plural suffix": "суффикс множественного числа",
    "rent money": "деньги на аренду",
    "resume / CV": "резюме / резюме",
    "rice": "рис",
    "scheme / plan": "схема/план",
    "school": "школа",
    "she / her": "она / она",
    "small": "маленький",
    "society": "общество",
    "son": "сын",
    "steam / gas": "пар/газ",
    "store": "магазин",
    "student": "студент",
    "study": "изучать",
    "success / successful": "успех / успешный",
    "suggestion particle": "частица предложения",
    "table / desk": "стол / письменный стол",
    "tea": "чай",
    "teacher": "учитель",
    "to agree": "согласиться",
    "to ask": "спросить",
    "to be responsible for": "нести ответственность за",
    "to call / be named": "позвонить / быть названным",
    "to decide": "решать",
    "to develop": "развивать",
    "to discuss": "обсудить",
    "to do": "делать",
    "to drink": "пить",
    "to eat": "есть",
    "to improve / raise": "улучшить/повысить",
    "to interview / job interview": "пройти собеседование / собеседование",
    "to rent a house/apartment": "снять дом/квартиру",
    "to research": "исследовать",
    "to shine / photo": "сиять / фото",
    "train": "тренироваться",
    "transportation / traffic": "транспорт / движение",
    "water": "вода",
    "what": "что",
    "you": "ты",
    "younger sister": "младшая сестра",
    "一边 + Verb 1 + 一边 + Verb 2": "一边 + глагол 1 + 一边 + глагол 2",
    "上=go to, 班=shift.": "上=перейти, 班=сдвиг.",
    "买=buy, 票=ticket.": "买=купить, 票=билет.",
    "休=rest on tree, 息=breath.": "休=отдых на дереве, 息=дыхание.",
    "会=gather, 议=discuss.": "会=собирать, 议=обсуждать.",
    "儿=child, 子=noun suffix.": "儿=ребёнок, 子=суффикс существительного.",
    "公=public, 司=manage. Company.": "公=публичный, 司=управлять. Компания.",
    "医=medical, 院=courtyard.": "医=медицинский, 院=двор.",
    "同=together, 事=business.": "同=вместе, 事=бизнес.",
    "听=hear/listen, 音乐=music.": "听=слушать/слушать, 音乐=музыка.",
    "唱=sing(v), 歌=song(n).": "唱=петь(v), 歌=песня(n).",
    "商=commerce, 店=shop.": "商=торговля, 店=магазин.",
    "多=many, 少=few. Together = quantity.": "多=много, 少=мало. Вместе = количество.",
    "太 + Adj + 了 for intensification.": "太 + Adj + 了 для усиления.",
    "女=female, 儿=child.": "女=женщина, 儿=ребёнок.",
    "宾=guest, 馆=building.": "宾=гость, 馆=здание.",
    "工=work/craft, 作=make. Work.": "工=работа/ремесло, 作=делать. Работа.",
    "很 links subject and adjective here.": "很 здесь связывает подлежащее и прилагательное.",
    "感=feel, 冒=risk/emit. Cold.": "感=чувствовать, 冒=риск/излучение. Холодный.",
    "打=hit/play, 篮球=basketball.": "打=удар/игра, 篮球=баскетбол.",
    "把 for disposal.": "把 на утилизацию.",
    "数=count, 字=character.": "数=число, 字=символ.",
    "旅=traveler, 游=wander/swim.": "旅=путешественник, 游=странствовать/плавать.",
    "早饭=morning meal.": "早饭=утренний прием пищи.",
    "是...的 to emphasize time, place, or manner.": "是...的, чтобы подчеркнуть время, место или манеру речи.",
    "比 for comparison.": "比 для сравнения.",
    "火车=train, 票=ticket.": "火车=поезд, 票=билет.",
    "点=select/order, 菜=dish.": "点=выбрать/заказать, 菜=блюдо.",
    "照相=take photo, 机=machine.": "照相=сфотографировать, 机=машина.",
    "生=grow/beget, 病=illness.": "生=вырастить/родить, 病=болезнь.",
    "睡=sleep(v), 觉=sleep(n).": "睡=сон(v), 觉=сон(n).",
    "米=raw rice, 饭=cooked meal.": "米=сырой рис, 饭=приготовленная еда.",
    "经=manage, 理=logic. Manager.": "经=управление, 理=логика. Менеджер.",
    "菜=dish, 单=list. Food list = menu.": "菜=блюдо, 单=список. Список блюд = меню.",
    "虽然 + A, 但是 + B": "虽然 + A, 但是 + B",
    "行李=baggage, 箱=box.": "行李=багаж, 箱=коробка.",
    "被 for passive.": "被 для пассивного.",
    "起=rise, 床=bed.": "起=подниматься, 床=кровать.",
    "踢=kick, 足球=football.": "踢=удар, 足球=футбол.",
    "身=body, 体=form. Together = health.": "身=тело, 体=форма. Вместе = здоровье.",
    "运=move, 动=action.": "运=движение, 动=действие.",
    "迟=late, 到=arrive.": "迟=опаздывать, 到=приходить."
  },
  "vi": {
    "'+text+'": "'+văn bản+'",
    "+ suggestedAnswer +": "+ Câu trả lời gợi ý +",
    ", e);\n  }\n}\n\nfunction sim(a,b){\n  const cleanA = a.replace(/[.,\\/#!$%\\^&\\*;:{}=\\-_`~()？。，！、\\s]/g,": ", đ);\n  }\n}\n\nhàm sim(a,b){\n  const cleanA = a.replace(/[.,\\/#!$%\\^&\\*;:{}=\\-_`~()？。，!、\\s]/g,",
    "1st Tone — High flat": "Giai điệu thứ nhất - Âm cao",
    "2nd Tone — Rising": "Giai điệu thứ 2 - Tăng",
    "3rd Tone — Dipping": "Giai điệu thứ 3 - Ngâm",
    "4th Tone — Falling": "Giai điệu thứ 4 - Rơi",
    "<b>A + 比 + B + Adj + (Complement)</b><br><br>&bull; 他比我高 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他比我高', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He is taller than me)<br>&bull; 苹果比西瓜便宜 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('苹果比西瓜便宜', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Apples are cheaper than watermelons)<br>&bull; 他跑得比我快得多 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他跑得比我快得多', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He runs much faster than me)": "<b>A + 比 + B + Adj + (Bổ sung)</b><br><br>Ã 他比我高 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他比我高', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Anh ấy cao hơn tôi)<br>©苹果比西瓜便宜 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('苹果比西瓜便宜', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Táo rẻ hơn dưa hấu)<br>©他跑得比我快得多 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他跑得比我快得多', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Anh ấy chạy nhanh hơn tôi rất nhiều)",
    "<b>Obj + 被 + Agent + Verb + Result</b><br><br>&bull; 信已经被寄走了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('信已经被寄走了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (The letter has already been sent)<br>&bull; 他被老师批评了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他被老师批评了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He was criticized by the teacher)<br>&bull; 蛋糕被弟弟吃光了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('蛋糕被弟弟吃光了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (The cake was completely eaten by younger brother)": "<b>Obj + 被 + Tác nhân + Động từ + Kết quả</b><br><br>→ 信已经被寄走了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('信已经被寄走了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Thư đã được gửi)<br>Ã 他被老师批评了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他被老师批评了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He bị giáo viên phê bình)<br>→ 蛋糕被弟弟吃光了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('蛋糕被弟弟吃光了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Bánh đã bị trẻ ăn hết hoàn toàn anh trai)",
    "<b>Subj + 把 + Obj + Verb + Result</b><br><br>&bull; 我把门关了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我把门关了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (I closed the door)<br>&bull; 她把衣服洗干净了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('她把衣服洗干净了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (She washed the clothes clean)<br>&bull; 请把手机关掉 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('请把手机关掉', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Please turn off your phone)<br><br>Object must be specific.": "<b>Subj + 把 + Obj + Động từ + Kết quả</b><br><br>→ 我把门关了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我把门关了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Tôi đã đóng Door)<br>→ 她把衣服洗干净了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('她把衣服洗干净了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Cô ấy đã giặt sạch quần áo)<br>Ã请把手机关掉 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('请把手机关掉', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Vui lòng tắt điện thoại của bạn)<br><br>Đối tượng phải cụ thể.",
    "<b>Subj + 是 + Detail + Verb + 的</b><br><br>&bull; 我们是昨天认识的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我们是昨天认识的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (We met yesterday - time)<br>&bull; 这本书是在北京买的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('这本书是在北京买的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (This book was bought in Beijing - place)<br>&bull; 他是和朋友一起来的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他是和朋友一起来的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He came with friends - manner)": "<b>Subj + 是 + Chi tiết + Động từ + 的</b><br><br>→ 我们是昨天认识的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我们是昨天认识的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Chúng ta đã gặp nhau ngày hôm qua - thời gian)<br>Ã 这本书是在北京买的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('这本书是在北京买的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Cuốn sách này được mua ở Bắc Kinh - nơi)<br>→ 他是和朋友一起来的 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他是和朋友一起来的', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Anh ấy đến cùng bạn bè - phong thái)",
    "<b>Verb + 了 + Obj</b><br><br>&bull; 他去学校了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他去学校了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He went to school)<br>&bull; 我喝了三杯咖啡 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我喝了三杯咖啡', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (I drank three cups of coffee)<br>&bull; 你吃饭了吗？ <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('你吃饭了吗？', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Have you eaten?)": "<b>Động từ + 了 + Obj</b><br><br>Ã 他去学校了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他去学校了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Anh ấy đã đi học)<br>©我喝了三杯咖啡 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我喝了三杯咖啡', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Tôi đã uống ba tách cà phê)<br>©你吃饭了吗？ <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('你吃饭了吗？', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Bạn đã ăn gì chưa?)",
    "<b>一边 + Verb 1 + 一边 + Verb 2</b><br><br>&bull; 我喜欢一边听音乐一边跑步 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我喜欢一边听音乐一边跑步', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (I like running while listening to music)<br>&bull; 不要一边开车一边玩手机 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('不要一边开车一边玩手机', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Do not play with your phone while driving)<br>&bull; 我们一边喝茶一边聊天吧 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我们一边喝茶一边聊天吧', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Let's drink tea while chatting)": "<b>一边 + Động từ 1 + 一边 + Động từ 2</b><br><br>→ 我喜欢一边听音乐一边跑步 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我喜欢一边听音乐一边跑步', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Tôi thích vừa chạy vừa nghe nhạc)<br>Ã 不要一边开车一边玩手机 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('不要一边开车一边玩手机', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Không nghịch điện thoại khi đang lái xe)<br>→我们一边喝茶一边聊天吧 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('我们一边喝茶一边聊天吧', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Hãy uống trà trong khi trò chuyện)",
    "<b>太 + Adj/Verb + 了</b><br><br>&bull; 这个太贵了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('这个太贵了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (This is too expensive)<br>&bull; 他太累了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他太累了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (He is too tired)<br>&bull; 太好了！<span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('太好了！', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Extremely good! / Great!)": "<b>太 + Tính từ/Động từ + 了</b><br><br>Ã 这个太贵了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('这个太贵了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Cái này đắt quá)<br>他太累了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('他太累了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Anh ấy quá mệt mỏi)<br>→ 太好了!<span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('太好了!', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Cực kỳ tốt! / Tuyệt vời!)",
    "<b>虽然... 但是...</b><br><br>&bull; 虽然天气不好，但是他还是出去了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然天气不好，但是他还是出去了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Although the weather was bad, he still went out)<br>&bull; 虽然这件衣服很贵，但是我很喜欢 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然这件衣服很贵，但是我很喜欢', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Although this clothing is expensive, I like it very much)<br>&bull; 虽然他病了，但是他坚持工作 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然他病了，但是他坚持工作', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Although he was sick, he persisted in working)": "<b>虽然... 但是...</b><br><br>Ã 虽然天气不好，但是他还是出去了 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然天气不好，但是他还是出去了', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Mặc dù thời tiết xấu nhưng anh ấy vẫn đi ra ngoài)<br>©虽然这件衣服很贵，但是我很喜欢 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然这件衣服很贵，但是我很喜欢', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Mặc dù bộ quần áo này đắt tiền nhưng tôi rất thích nó)<br>Ã 虽然他病了，但是他坚持工作 <span class=\"sp-btn\" onclick=\"event.stopPropagation(); speak('虽然他病了，但是他坚持工作', 0.7)\"><i class=\"fas fa-volume-high\"></i></span> (Mặc dù bị ốm nhưng anh ấy vẫn kiên trì làm việc)",
    "A little fever. I don't want to go to the hospital, I want to take some medicine.": "Một chút sốt. Tôi không muốn đến bệnh viện, tôi muốn uống thuốc.",
    "A proposal or project plan.": "Một đề xuất hoặc kế hoạch dự án.",
    "Achieving a positive outcome.": "Đạt được một kết quả tích cực.",
    "Add 吗 to make any statement a yes/no question.": "Thêm 吗 để biến bất kỳ câu phát biểu nào thành câu hỏi có/không.",
    "After playing soccer we can also go sing karaoke, how about that?": "Sau khi chơi bóng đá chúng ta cũng có thể đi hát karaoke, thế thì sao?",
    "Although Chinese is hard, it is very interesting.": "Tiếng Trung tuy khó nhưng lại rất thú vị.",
    "Are you preparing to bring a suitcase or a backpack?": "Bạn đang chuẩn bị xách vali hay ba lô?",
    "At the Restaurant": "Tại nhà hàng",
    "Basic Greetings": "Lời chào cơ bản",
    "Be late": "Đến muộn",
    "Beijing is great! Have you bought the train ticket?": "Bắc Kinh thật tuyệt vời! Bạn đã mua vé tàu chưa?",
    "Body / health": "Cơ thể/sức khỏe",
    "Both family and physical home.": "Cả gia đình và mái ấm vật chất.",
    "Bring a camera, you can take many nice photos.": "Mang theo máy ảnh, bạn có thể chụp được nhiều bức ảnh đẹp.",
    "Buy ticket": "Mua vé",
    "Camera": "Máy ảnh",
    "Can it be a bit cheaper? Is two hundred and fifty okay?": "Có thể rẻ hơn một chút được không? Hai trăm năm mươi có được không?",
    "Catch a cold": "Bị cảm lạnh",
    "Character": "Tính cách",
    "Cheap / inexpensive": "Rẻ/rẻ",
    "Click to view vocabulary": "Bấm vào để xem từ vựng",
    "Clothes": "Quần áo",
    "Colleague / coworker": "Đồng nghiệp/đồng nghiệp",
    "Community of people.": "Cộng đồng người.",
    "Company": "Công ty",
    "Conjunction Embora/Mas": "Liên từ Embora/Mas",
    "Convenience of travel.": "Thuận tiện đi lại.",
    "Cooked rice": "Cơm nấu chín",
    "Correct. Then how much money do you have?": "Chính xác. Thế thì bạn có bao nhiêu tiền?",
    "Dad": "Bố",
    "Dad, mom, an older sister, and me.": "Bố, mẹ, một chị gái và tôi.",
    "Daily Routine": "Thói quen hàng ngày",
    "Daughter": "Con gái",
    "Deep study of a subject.": "Nghiên cứu sâu về một chủ đề.",
    "Do you have a fever? Do you need to go to the hospital to see a doctor?": "Bạn có bị sốt không? Có cần đến bệnh viện để khám bác sĩ không?",
    "Do you like sports? For example, playing basketball?": "Bạn có thích thể thao không? Ví dụ như chơi bóng rổ?",
    "Do you often meet with your manager?": "Bạn có thường xuyên gặp người quản lý của mình không?",
    "Document of work history.": "Tài liệu về lịch sử công việc.",
    "Does your older sister work?": "Chị gái của bạn có làm việc không?",
    "Drinking more water and sleeping more will make your body recover faster.": "Uống nhiều nước và ngủ nhiều hơn sẽ khiến cơ thể phục hồi nhanh hơn.",
    "Eat breakfast": "Ăn sáng",
    "Excellent, I look forward to it!": "Tuyệt vời, tôi mong chờ nó!",
    "Exercise": "Bài tập",
    "Expensive": "Đắt",
    "Expresses exchanging views.": "Bày tỏ quan điểm trao đổi.",
    "Face-to-face evaluation.": "Đánh giá trực tiếp.",
    "Family / home": "Gia đình/nhà",
    "Field of study or expertise.": "Lĩnh vực nghiên cứu hoặc chuyên môn.",
    "General term for garments.": "Thuật ngữ chung cho hàng may mặc.",
    "Get off work": "Nghỉ làm",
    "Get sick": "Bị ốm",
    "Get up": "Thức dậy",
    "Giving consent.": "Đưa ra sự đồng ý.",
    "Go to work": "Đi làm",
    "Good, then I want a bowl of beef noodles, and another bowl of rice.": "Được rồi, tôi muốn một bát mì bò và một bát cơm nữa.",
    "Goodbye": "Tạm biệt",
    "Goodbye teacher!": "Tạm biệt thầy!",
    "Great! Do you have a daughter and a son?": "Tuyệt vời! Bạn có một con gái và một con trai?",
    "Great! I am going to play soccer on Saturday, do you want to join?": "Tuyệt vời! Tôi sẽ chơi bóng đá vào thứ bảy, bạn có muốn tham gia không?",
    "Great, thank you for telling me!": "Tuyệt vời, cảm ơn bạn đã nói cho tôi biết!",
    "Growth and expansion.": "Tăng trưởng và mở rộng.",
    "Having great significance.": "Có ý nghĩa to lớn.",
    "He is eating while watching TV.": "Anh ấy đang ăn trong khi xem TV.",
    "Health & Body": "Sức khỏe & Cơ thể",
    "Hello": "Xin chào",
    "Hello!": "Xin chào!",
    "Hello! How many apples do you have?": "Xin chào! Bạn có bao nhiêu quả táo?",
    "Hello! What clothes do you want to buy?": "Xin chào! Bạn muốn mua quần áo gì?",
    "Hobbies & Sports": "Sở thích & Thể thao",
    "Hospital": "Bệnh viện",
    "Hotel / guesthouse": "Khách sạn/nhà nghỉ",
    "How are you?": "Bạn có khỏe không?",
    "How is the relationship between colleagues? Do they help each other?": "Mối quan hệ giữa các đồng nghiệp như thế nào? Họ có giúp đỡ lẫn nhau không?",
    "How many / how much": "Bao nhiêu/bao nhiêu",
    "How many people in your family?": "Có bao nhiêu người trong gia đình bạn?",
    "Hundred": "Trăm",
    "I am ready, I believe this plan will succeed.": "Tôi đã sẵn sàng, tôi tin kế hoạch này sẽ thành công.",
    "I am ready, and I have three years of experience.": "Tôi đã sẵn sàng và tôi có ba năm kinh nghiệm.",
    "I am very busy, studying a lot.": "Tôi rất bận, học rất nhiều.",
    "I arrive at the company very early every day, never late.": "Tôi đến công ty rất sớm mỗi ngày, không bao giờ muộn.",
    "I booked a hotel near Tiananmen Square.": "Tôi đặt một khách sạn gần Quảng trường Thiên An Môn.",
    "I bought a book.": "Tôi đã mua một cuốn sách.",
    "I came by plane.": "Tôi đến bằng máy bay.",
    "I don't have, I'm not married yet.": "Tôi không có, tôi chưa kết hôn.",
    "I don't like playing basketball, I like playing soccer.": "Tôi không thích chơi bóng rổ, tôi thích chơi bóng đá.",
    "I eat breakfast first, then go to the park to run and exercise.": "Tôi ăn sáng trước, sau đó đi công viên chạy bộ và tập thể dục.",
    "I feel a headache, I might be sick.": "Tôi cảm thấy đau đầu, có thể tôi bị bệnh.",
    "I get up at 6:30 every morning.": "Tôi thức dậy lúc 6h30 mỗi sáng.",
    "I go to sleep at eleven o'clock sharp at night.": "Tôi đi ngủ lúc mười một giờ đêm.",
    "I go to work at eight, going by subway.": "Tôi đi làm lúc tám giờ, đi bằng tàu điện ngầm.",
    "I have three apples.": "Tôi có ba quả táo.",
    "I have two hundred yuan.": "Tôi có hai trăm nhân dân tệ.",
    "I haven't bought the ticket yet, I will go buy it tomorrow.": "Tôi chưa mua vé, ngày mai tôi sẽ đi mua.",
    "I like listening to music and watching movies at home.": "Tôi thích nghe nhạc và xem phim ở nhà.",
    "I make dinner, watch TV, and then read books and study.": "Tôi nấu bữa tối, xem TV, sau đó đọc sách và học bài.",
    "I plan to travel to Beijing. I heard Beijing is very beautiful.": "Tôi dự định đi du lịch đến Bắc Kinh. Tôi nghe nói Bắc Kinh rất đẹp.",
    "I put the book on the table.": "Tôi đặt cuốn sách lên bàn.",
    "I think it is suitable, we can sign the contract.": "Tôi nghĩ nó phù hợp, chúng ta có thể ký hợp đồng.",
    "I want a cup of ice water, thank you.": "Tôi muốn một cốc nước đá, cảm ơn bạn.",
    "I want to buy a red coat.": "Tôi muốn mua một chiếc áo khoác màu đỏ.",
    "I want to buy, how much is one book?": "Mình muốn mua 1 cuốn giá bao nhiêu?",
    "I want to eat noodles. Which noodles are the most delicious here?": "Tôi muốn ăn mì. Món mì nào ngon nhất ở đây?",
    "I will bring a large suitcase because I have many clothes.": "Tôi sẽ mang theo một chiếc vali lớn vì tôi có nhiều quần áo.",
    "I work for a computer technology company.": "Tôi làm việc cho một công ty công nghệ máy tính.",
    "I'm also very good. Have you been busy lately?": "Tôi cũng rất tốt. Gần đây bạn có bận không?",
    "I'm very good": "tôi rất tốt",
    "I'm very good, thanks! And you?": "Tôi rất khỏe, cảm ơn! Và bạn?",
    "Impact on something.": "Tác động lên cái gì đó.",
    "Increasing quality or level.": "Tăng chất lượng hoặc mức độ.",
    "Informal term for father.": "Thuật ngữ không chính thức cho cha.",
    "Informal term for mother.": "Thuật ngữ không chính thức cho mẹ.",
    "Introducing Family": "Giới thiệu gia đình",
    "Is the work tiring? What time do you get off work?": "Công việc có mệt mỏi không? Bạn tan làm lúc mấy giờ?",
    "Is there cold medicine at home?": "Ở nhà có thuốc cảm không?",
    "Is your work busy? What tasks do you have every day?": "Công việc của bạn có bận không? Hàng ngày bạn có nhiệm vụ gì?",
    "Job & Workplace": "Công việc & Nơi làm việc",
    "Job / work": "Công việc/việc làm",
    "Leasing living space.": "Cho thuê không gian sống.",
    "Legal binding document.": "Văn bản ràng buộc pháp lý.",
    "Listen to music": "Nghe nhạc",
    "Literally 'again meet' — see you!": "Nghĩa đen là 'gặp lại' - hẹn gặp lại!",
    "Literally 'buy the list'.": "Nghĩa đen là 'mua danh sách'.",
    "Literally 'don't be polite'.": "Nghĩa đen là 'không lịch sự'.",
    "Literally 'eat medicine' in Chinese.": "Nghĩa đen là 'ăn thuốc' trong tiếng Trung.",
    "Literally 'electric shadow'.": "Nghĩa đen là 'bóng điện'.",
    "Look at this coat, how is it? Very beautiful.": "Nhìn chiếc áo khoác này xem, nó thế nào? Rất đẹp.",
    "Making a resolution.": "Đưa ra quyết định.",
    "Manager": "Giám đốc",
    "Measure word": "Đo từ",
    "Meet at the school playground at 3:00 PM.": "Gặp nhau tại sân chơi của trường lúc 3 giờ chiều.",
    "Meeting / conference": "Cuộc họp/hội nghị",
    "Menu": "Thực đơn",
    "Mom": "Mẹ",
    "Monthly payment.": "Thanh toán hàng tháng.",
    "Movie / film": "Phim / phim",
    "My dad is a doctor, my mom is a teacher.": "Bố tôi là bác sĩ, mẹ tôi là giáo viên.",
    "Negated with 没 (e.g. 没有).": "Phủ định bằng 没 (ví dụ: 没有).",
    "No problem, I will definitely arrive on time.": "Không sao đâu, tôi chắc chắn sẽ đến đúng giờ.",
    "No problem, please wait a moment, the food will be served shortly.": "Không vấn đề gì, vui lòng đợi một lát, đồ ăn sẽ được phục vụ ngay.",
    "Number / digit": "Số/chữ số",
    "Numbers & Counting": "Số & Đếm",
    "Okay, I drank a lot of hot water, I am going to sleep now.": "Được rồi, tôi đã uống nhiều nước nóng rồi, giờ tôi đi ngủ đây.",
    "Okay, I have already put the camera in the box.": "Được rồi, tôi đã cất máy ảnh vào hộp rồi.",
    "Okay, I will go to the fitting room to try it on.": "Được rồi, tôi sẽ đến phòng thử đồ để thử nó.",
    "Okay, are you ready to order now?": "Được rồi, bây giờ bạn đã sẵn sàng đặt hàng chưa?",
    "Okay, checkout, here is the money!": "Được rồi, thanh toán, tiền đây!",
    "Okay, thank you teacher.": "Được rồi, cảm ơn thầy.",
    "Okay, you can have it for two hundred and fifty. Do you want to try it on?": "Được rồi, bạn có thể mua nó với giá hai trăm năm mươi. Bạn có muốn thử nó không?",
    "Okay. Would you like something to drink?": "Được rồi. Bạn có muốn uống gì không?",
    "One book is ten yuan. Two hundred yuan can buy twenty books.": "Một cuốn sách là mười nhân dân tệ. Hai trăm nhân dân tệ có thể mua được hai mươi cuốn sách.",
    "One, two, three": "Một, hai, ba",
    "Opposite of 上班.": "Ngược lại với 上班.",
    "Opposite of 贵.": "Ngược lại với 贵.",
    "Order food": "Đặt món ăn",
    "Ordering Food": "Đặt món ăn",
    "Our beef noodles are very famous and delicious.": "Mì bò của chúng tôi rất nổi tiếng và ngon.",
    "Owner of the property.": "Chủ sở hữu tài sản.",
    "Pay the bill": "Thanh toán hóa đơn",
    "Physical training.": "Rèn luyện thể chất.",
    "Pitch curve plots here": "Sơ đồ đường cong sân ở đây",
    "Play basketball": "Chơi bóng rổ",
    "Play soccer": "Chơi bóng đá",
    "Please introduce your major and work experience.": "Hãy giới thiệu chuyên ngành và kinh nghiệm làm việc của bạn.",
    "Really? I want to go too! What time does it start?": "Thật sự? Tôi cũng muốn đi! Nó bắt đầu lúc mấy giờ?",
    "Researching the development of society is very important.": "Việc nghiên cứu sự phát triển của xã hội là rất quan trọng.",
    "Rest": "Nghỉ ngơi",
    "Security money paid upfront.": "Tiền bảo đảm được trả trước.",
    "Select a tone below to practice": "Chọn một giai điệu dưới đây để thực hành",
    "She doesn't work, she is a student.": "Cô ấy không làm việc, cô ấy là sinh viên.",
    "Shopping & Prices": "Mua sắm & Giá cả",
    "Simultaneous Actions": "Hành động đồng thời",
    "Skill level or power.": "Cấp độ kỹ năng hoặc sức mạnh.",
    "Skills gained over time.": "Kỹ năng đạt được theo thời gian.",
    "Sleep": "Ngủ",
    "Soft 'x' — like a gentle 'sh'.": "Chữ 'x' mềm — giống như chữ 'sh' nhẹ nhàng.",
    "Son": "Con trai",
    "Speak to visualize tone": "Nói để hình dung giọng điệu",
    "Sports / exercise": "Thể thao/tập thể dục",
    "Store / shop": "Cửa hàng/cửa hàng",
    "Suitcase / luggage": "Vali/hành lý",
    "Take medicine": "Uống thuốc",
    "Taking charge of a task.": "Đảm nhận một nhiệm vụ.",
    "Thank you": "Cảm ơn",
    "Thank you for your care, see you tomorrow.": "Cảm ơn bạn đã quan tâm, hẹn gặp bạn vào ngày mai.",
    "Thank you teacher, I will show you photos when I get back!": "Cảm ơn thầy, khi về em sẽ cho thầy xem ảnh!",
    "That is very convenient! Wish you a pleasant trip!": "Điều đó rất thuận tiện! Chúc bạn có một chuyến đi vui vẻ!",
    "That's great! Are you ever late for work?": "Thật tuyệt vời! Bạn có bao giờ đi làm muộn không?",
    "That's too hard! You should rest more.": "Điều đó quá khó! Bạn nên nghỉ ngơi nhiều hơn.",
    "The Completion Particle 了": "Hạt hoàn thiện 了",
    "The action of consuming solid food.": "Hành động tiêu thụ thực phẩm rắn.",
    "The colleagues are all very nice, supporting each other in work.": "Các đồng nghiệp đều rất tốt bụng, hỗ trợ nhau trong công việc.",
    "The first three numbers in Chinese.": "Ba số đầu tiên trong tiếng Trung.",
    "The general measure word for people/things.": "Từ đo lường chung cho người/vật.",
    "The most common Chinese greeting. Use it anytime.": "Lời chào phổ biến nhất của Trung Quốc. Sử dụng nó bất cứ lúc nào.",
    "The transportation here is very convenient, do you think the rent is suitable?": "Giao thông ở đây rất thuận tiện, bạn thấy giá thuê có phù hợp không?",
    "The wallet was stolen.": "Chiếc ví đã bị đánh cắp.",
    "The 太...了 Structure": "Cấu trúc 太...了",
    "The 把 Sentence": "Câu 把",
    "The 是...的 Focus Structure": "Cấu trúc trọng tâm 是...的",
    "The 比 Comparison": "Sự so sánh 比",
    "The 被 Passive": "被 Bị động",
    "Then take the medicine immediately, and go lie down in bed to rest.": "Sau đó uống thuốc ngay và nằm lên giường nghỉ ngơi.",
    "There are five people here.": "Có năm người ở đây.",
    "There are four people in my family.": "Có bốn người trong gia đình tôi.",
    "Third tone. Do not confuse with 卖 (mài = to sell).": "Âm thứ ba. Đừng nhầm lẫn với 卖 (mài = bán).",
    "This is four hundred yuan, now on sale for three hundred.": "Đây là bốn trăm nhân dân tệ, hiện đang được bán với giá ba trăm.",
    "This is very beautiful, but a bit expensive. How much?": "Cái này rất đẹp, nhưng hơi đắt. Bao nhiêu?",
    "Time to study Chinese! 汉": "Đã đến lúc học tiếng Trung! 汉",
    "To buy": "Để mua",
    "To drink": "uống",
    "To eat": "để ăn",
    "To have / exist": "Có/tồn tại",
    "To sing": "Hát",
    "To travel / tourism": "Đi du lịch/du lịch",
    "To try on / test": "Để thử / kiểm tra",
    "Today is colder than yesterday.": "Hôm nay lạnh hơn hôm qua.",
    "Today is too hot.": "Hôm nay nóng quá.",
    "Today we need to discuss the new plan, are you ready?": "Hôm nay chúng ta cần thảo luận về kế hoạch mới, bạn đã sẵn sàng chưa?",
    "Tone Pitch Visualizer": "Công cụ hiển thị giai điệu",
    "Train ticket": "Vé tàu",
    "Travel Plans": "kế hoạch du lịch",
    "Two (quantity)": "Hai (số lượng)",
    "Two hundred yuan can buy many books. Do you want to buy books?": "Hai trăm nhân dân tệ có thể mua được nhiều sách. Bạn có muốn mua sách không?",
    "Two hundred yuan in total. Thank you for coming!": "Tổng cộng là hai trăm nhân dân tệ. Cảm ơn bạn đã đến!",
    "Use 两 instead of 二 before measure words.": "Sử dụng 两 thay vì 二 trước các từ đo lường.",
    "Used for beverages/soups.": "Dùng để đựng đồ uống/súp.",
    "Used for business gatherings.": "Được sử dụng cho các cuộc họp mặt kinh doanh.",
    "Used for counting hundreds (e.g. 一百 = 100).": "Được sử dụng để đếm hàng trăm (ví dụ: 一百 = 100).",
    "Used to describe high prices.": "Được sử dụng để mô tả giá cao.",
    "Verb + 了 for action completion.": "Động từ + 了 để hoàn thành hành động.",
    "Verb for testing clothes or trying them.": "Động từ để thử quần áo hoặc thử chúng.",
    "Very busy every day, many meetings to attend.": "Mỗi ngày rất bận rộn, nhiều cuộc họp phải tham dự.",
    "Very good! Then how many people are here?": "Rất tốt! Thế thì có bao nhiêu người ở đây?",
    "Very suitable! Shall I pack it for you?": "Rất phù hợp! Tôi gói nó cho bạn nhé?",
    "Vocab List": "Danh sách từ vựng",
    "Waiter, check please! How much is it in total?": "Người phục vụ, vui lòng kiểm tra! Tổng cộng là bao nhiêu?",
    "Waiter, please bring the menu.": "Người phục vụ, vui lòng mang thực đơn tới.",
    "What do you do after getting off work and going home?": "Bạn làm gì sau khi tan sở và về nhà?",
    "What do you like to do on weekends?": "Bạn thích làm gì vào cuối tuần?",
    "What do your dad and mom do for work?": "Bố và mẹ bạn làm nghề gì?",
    "What time do you get up every day?": "Hàng ngày bạn thức dậy lúc mấy giờ?",
    "What time do you go to sleep every day?": "Hàng ngày bạn đi ngủ lúc mấy giờ?",
    "What time do you go to work? How do you go?": "Bạn đi làm lúc mấy giờ? Bạn đi như thế nào?",
    "What's wrong? You don't look very well.": "Có chuyện gì thế? Trông bạn không được khỏe lắm.",
    "Where do you want to travel next month?": "Bạn muốn đi du lịch đâu vào tháng tới?",
    "Which company do you work for?": "Bạn làm việc cho công ty nào?",
    "Which hotel do you plan to stay at? Have you booked it?": "Bạn dự định ở khách sạn nào? Bạn đã đặt nó chưa?",
    "Who are they?": "Họ là ai?",
    "Work is a bit tiring, I get off at 5:30 in the afternoon.": "Công việc hơi mệt, tôi tan làm lúc 5h30 chiều.",
    "Yes, I bought some cold medicine yesterday.": "Vâng, hôm qua tôi đã mua một ít thuốc cảm.",
    "Yes, it has a profound influence on improving standard of living.": "Vâng, nó có ảnh hưởng sâu sắc đến việc cải thiện mức sống.",
    "Yes, the manager holds a meeting with us every morning.": "Có, người quản lý tổ chức cuộc họp với chúng tôi vào mỗi buổi sáng.",
    "You get up so early! What do you do after getting up?": "Cậu dậy sớm thế! Bạn làm gì sau khi thức dậy?",
    "You're welcome": "Không có gì",
    "You're welcome. That's all for today, goodbye!": "Không có gì. Hôm nay chỉ vậy thôi, tạm biệt!",
    "ability / capability": "khả năng/khả năng",
    "airplane": "máy bay",
    "and / harmony": "và / hòa hợp",
    "apple": "quả táo",
    "big": "to lớn",
    "car": "xe hơi",
    "cat": "con mèo",
    "chair": "cái ghế",
    "click card again to close": "bấm vào thẻ một lần nữa để đóng",
    "contract / agreement": "hợp đồng/thỏa thuận",
    "cup": "tách",
    "cup / glass": "cốc/ly",
    "daughter": "con gái",
    "day/sky": "ngày/bầu trời",
    "deposit": "tiền gửi",
    "dog": "chó",
    "drink": "uống",
    "eat": "ăn",
    "experience": "kinh nghiệm",
    "father": "bố",
    "friend": "người bạn",
    "good": "Tốt",
    "good / well": "tốt / tốt",
    "he / him": "anh ấy / anh ấy",
    "hello": "Xin chào",
    "hospital": "bệnh viện",
    "hot": "nóng",
    "important": "quan trọng",
    "influence / effect": "ảnh hưởng/hiệu ứng",
    "items": "mặt hàng",
    "landlord": "chủ nhà",
    "major / professional": "chuyên ngành/chuyên nghiệp",
    "meeting / conference": "cuộc họp/hội nghị",
    "middle/China": "giữa/Trung Quốc",
    "money": "tiền bạc",
    "mother": "mẹ",
    "not have / no": "không có / không",
    "o'clock / point": "giờ / điểm",
    "older sister": "chị gái",
    "person": "người",
    "plural suffix": "hậu tố số nhiều",
    "rent money": "thuê tiền",
    "resume / CV": "sơ yếu lý lịch/CV",
    "rice": "cơm",
    "scheme / plan": "kế hoạch/kế hoạch",
    "school": "trường học",
    "she / her": "cô ấy / cô ấy",
    "small": "bé nhỏ",
    "society": "xã hội",
    "son": "con trai",
    "steam / gas": "hơi nước/khí",
    "store": "cửa hàng",
    "student": "học sinh",
    "study": "học",
    "success / successful": "thành công/thành công",
    "suggestion particle": "hạt gợi ý",
    "table / desk": "bàn/bàn",
    "tea": "trà",
    "teacher": "giáo viên",
    "to agree": "đồng ý",
    "to ask": "hỏi",
    "to be responsible for": "chịu trách nhiệm về",
    "to call / be named": "gọi/gọi tên",
    "to decide": "quyết định",
    "to develop": "để phát triển",
    "to discuss": "để thảo luận",
    "to do": "làm",
    "to drink": "uống",
    "to eat": "ăn",
    "to improve / raise": "cải thiện/nâng cao",
    "to interview / job interview": "đến phỏng vấn/phỏng vấn xin việc",
    "to rent a house/apartment": "thuê nhà/căn hộ",
    "to research": "để nghiên cứu",
    "to shine / photo": "tỏa sáng / ảnh",
    "train": "xe lửa",
    "transportation / traffic": "vận tải/giao thông",
    "water": "Nước",
    "what": "Gì",
    "you": "Bạn",
    "younger sister": "em gái",
    "一边 + Verb 1 + 一边 + Verb 2": "一边 + Động từ 1 + 一边 + Động từ 2",
    "上=go to, 班=shift.": "上=đi tới, 班=shift.",
    "买=buy, 票=ticket.": "买=mua, 票=vé.",
    "休=rest on tree, 息=breath.": "休=nghiêng trên cây, 息=hơi thở.",
    "会=gather, 议=discuss.": "会=tập hợp, 议=thảo luận.",
    "儿=child, 子=noun suffix.": "儿=con, 子=hậu tố danh từ.",
    "公=public, 司=manage. Company.": "公=công khai, 司=quản lý. Công ty.",
    "医=medical, 院=courtyard.": "医=y tế, 院=sân.",
    "同=together, 事=business.": "同=cùng nhau, 事=kinh doanh.",
    "听=hear/listen, 音乐=music.": "听=nghe/nghe, 音乐=âm nhạc.",
    "唱=sing(v), 歌=song(n).": "唱=hát(v), 歌=bài hát(n).",
    "商=commerce, 店=shop.": "商=thương mại, 店=cửa hàng.",
    "多=many, 少=few. Together = quantity.": "多=nhiều, 少=ít. Cùng nhau = số lượng.",
    "太 + Adj + 了 for intensification.": "太 + Adj + 了 để tăng cường.",
    "女=female, 儿=child.": "女=nữ, 儿=trẻ em.",
    "宾=guest, 馆=building.": "宾=khách, 馆=tòa nhà.",
    "工=work/craft, 作=make. Work.": "工=công việc/thủ công, 作=làm. Công việc.",
    "很 links subject and adjective here.": "很 liên kết chủ ngữ và tính từ ở đây.",
    "感=feel, 冒=risk/emit. Cold.": "感=cảm giác, 冒=rủi ro/phát thải. Lạnh lẽo.",
    "打=hit/play, 篮球=basketball.": "打=đánh/chơi, 篮球=bóng rổ.",
    "把 for disposal.": "把 để xử lý.",
    "数=count, 字=character.": "数=số đếm, 字=ký tự.",
    "旅=traveler, 游=wander/swim.": "旅=du khách, 游=đi lang thang/bơi lội.",
    "早饭=morning meal.": "早饭=bữa sáng.",
    "是...的 to emphasize time, place, or manner.": "是...的 để nhấn mạnh thời gian, địa điểm hoặc cách thức.",
    "比 for comparison.": "比 để so sánh.",
    "火车=train, 票=ticket.": "火车=tàu, 票=vé.",
    "点=select/order, 菜=dish.": "点=chọn/đặt hàng, 菜=món ăn.",
    "照相=take photo, 机=machine.": "照相=chụp ảnh, 机=máy.",
    "生=grow/beget, 病=illness.": "生=lớn lên/sinh ra, 病=bệnh tật.",
    "睡=sleep(v), 觉=sleep(n).": "睡=ngủ(v), 觉=ngủ(n).",
    "米=raw rice, 饭=cooked meal.": "米=gạo sống, 饭=bữa ăn đã nấu chín.",
    "经=manage, 理=logic. Manager.": "经=quản lý, 理=logic. Giám đốc.",
    "菜=dish, 单=list. Food list = menu.": "菜=món ăn, 单=danh sách. Danh sách thực phẩm = thực đơn.",
    "虽然 + A, 但是 + B": "虽然 + A, 但是 + B",
    "行李=baggage, 箱=box.": "行李=hành lý, 箱=hộp.",
    "被 for passive.": "被 mang nghĩa thụ động.",
    "起=rise, 床=bed.": "起=đứng lên, 床=giường.",
    "踢=kick, 足球=football.": "踢=đá, 足球=bóng đá.",
    "身=body, 体=form. Together = health.": "身=cơ thể, 体=hình thức. Cùng nhau = sức khỏe.",
    "运=move, 动=action.": "运=di chuyển, 动=hành động.",
    "迟=late, 到=arrive.": "迟=muộn, 到=đến.",
    "Tutor":"Tutor","Lessons":"Lecciones","Grammar":"Gramática","Dict":"Diccionario","Trans":"Traducir","Test":"Examen","Progress":"Progreso",
    "AI Tutor":"Tutor AI","Dictionary":"Diccionario","Level Test":"Prueba de Nivel",
    "MandarinCourse":"Curso de Mandarín","Settings":"Ajustes",
    "Cloud Account & Sync":"Cuenta y Sincronización","Sign In / Register":"Iniciar Sesión / Registrarse",
    "Sync Progress":"Sincronizar Progreso","Sign Out":"Cerrar Sesión",
    "AI Speaking Speed":"Velocidad del AI","Normal Speed (1.0x)":"Velocidad Normal (1.0x)",
    "Slower (0.8x)":"Más Lento (0.8x)","Slowest (0.7x)":"Muy Lento (0.7x)",
    "Tutor Mode":"Modo Tutor","Simulated Mode (HSK static lessons)":"Modo Simulado (lecciones HSK estáticas)",
    "Live AI Mode (Dynamic conversations)":"Modo AI en Vivo (conversaciones dinámicas)",
    "App Language (Translations)":"Idioma de la App (Traducciones)",
    "Study Reminders":"Recordatorios de Estudio","No Reminders":"Sin Recordatorios",
    "Every Day (Daily)":"Cada Día (Diario)","Every Week (Weekly)":"Cada Semana (Semanal)",
    "Save Reminder Schedule":"Guardar Horario","Close":"Cerrar",
    "AI-Powered Speaking Tutor":"Tutor de Conversación con IA",
    "Learn Mandarin with AI":"Aprende Mandarín con IA",
    "HSK 1 Free · HSK 2–9 $9/mo":"HSK 1 Gratis · HSK 2–9 $9/mes",
    "Master Chinese speaking, tones, and character writing with real-time interactive voice grading, stroke order tracing, and personalized review decks.":"Domina el chino hablado, los tonos y la escritura con calificación de voz interactiva en tiempo real, trazo de orden de caracteres y repasos personalizados.",
    "Start Speaking Lesson":"Empezar Lección","Take Level Test":"Hacer Prueba de Nivel",
    "Levels":"Niveles","Topics":"Temas","Learners":"Estudiantes",
    "AI Speaking Tutor":"Tutor de Conversación AI",
    "Your Personal Chinese Speaking Teacher":"Tu Profesor Personal de Chino",
    "Listen to the AI speak Chinese, then respond by typing Chinese in the text box below.":"Escucha al AI hablar chino, luego responde escribiendo chino en el cuadro de texto.",
    "Bite-Sized Lessons":"Lecciones Pequeñas","10-15 Minute Lessons":"Lecciones de 10-15 Minutos",
    "Topics Grid":"Cuadrícula de Temas","Study Flashcards":"Tarjetas de Estudio",
    "Radical Explorer":"Explorador de Radicales","Common Radicals":"Radicales Comunes",
    "Translation & Meaning":"Traducción y Significado","Example Phrase":"Frase de Ejemplo",
    "Prev":"Anterior","Next":"Siguiente","Again":"Otra vez","Hard":"Difícil","Good":"Bien","Easy":"Fácil",
    "Instant Translation":"Traducción Instantánea","Translate Any Phrase":"Traduce Cualquier Frase",
    "Translate any language to Chinese with AI. Supports English, Spanish, French, Japanese, Korean, German, Portuguese, Italian, Russian, and Vietnamese.":"Traduce cualquier idioma al chino con IA. Soporta inglés, español, francés, japonés, coreano, alemán, portugués, italiano, ruso y vietnamita.",
    "Translate":"Traducir","Enter text to translate...":"Ingresa texto para traducir...",
    "Speak":"Hablar","Copy to Tutor":"Copiar al Tutor",
    "HSK Dictionary":"Diccionario HSK","Browse HSK Vocabulary":"Explorar Vocabulario HSK",
    "Browse all HSK vocabulary with pinyin and English translations.":"Explora todo el vocabulario HSK con pinyin y traducciones al inglés.",
    "Search characters or pinyin...":"Buscar caracteres o pinyin...",
    "Grammar Deep Dive":"Gramática en Profundidad","Understand Grammar":"Entiende la Gramática",
    "Level Assessment":"Evaluación de Nivel","Know Your Level in 5 Minutes":"Conoce tu Nivel en 5 Minutos",
    "Quick Assessment":"Evaluación Rápida","10 questions.":"10 preguntas.","Start Test":"Comenzar Examen",
    "Retake":"Repetir","Start Lessons":"Comenzar Lecciones",
    "HSK Progress":"Progreso HSK","9 Levels to Fluency":"9 Niveles para la Fluidez",
    "Today's Progress":"Progreso de Hoy","Words":"Palabras","Chars":"Caracteres",
    "Spoken":"Hablado","Reference":"Referencia","Your Writing Grid":"Tu Cuadrícula de Escritura",
    "Animate":"Animar","Quiz":"Examen",
    "Grammar Practice":"Práctica de Gramática","Reconstruct the sentence:":"Reconstruye la oración:",
    "Reset":"Reiniciar","Check":"Verificar",
    "MandarinCourse Premium":"Premium de Curso de Mandarín","Sign In":"Iniciar Sesión",
    "Email":"Correo Electrónico","your@email.com":"tu@email.com","Password":"Contraseña",
    "Min 6 characters":"Mín. 6 caracteres",
    "Frequently Asked Questions":"Preguntas Frecuentes",
    "Learn More About MandarinCourse":"Más Información sobre Curso de Mandarín",
    "Direct answers about our features, offline compatibility, and pronunciation grading.":"Respuestas directas sobre nuestras funciones, compatibilidad sin conexión y calificación de pronunciación.",
    "Correct":"Correcto","Vocab":"Vocabulario","Time":"Tiempo",
    "Record Accent":"Grabar Acento","Due Reviews Only":"Solo Revisiones Pendientes",
    "Reviews due: 0":"Revisiones pendientes: 0",
    "Outline":"Contorno","Hint":"Pista"
  },
  "fr": {
    "Tutor":"Tuteur","Lessons":"Leçons","Grammar":"Grammaire","Dict":"Dictionnaire","Trans":"Traduire","Test":"Examen","Progress":"Progrès",
    "AI Tutor":"Tuteur IA","Dictionary":"Dictionnaire","Level Test":"Test de Niveau",
    "MandarinCourse":"Cours de Mandarin","Settings":"Paramètres",
    "Cloud Account & Sync":"Compte et Synchronisation","Sign In / Register":"Connexion / Inscription",
    "Sync Progress":"Synchroniser le Progrès","Sign Out":"Déconnexion",
    "AI Speaking Speed":"Vitesse de l'IA","Normal Speed (1.0x)":"Vitesse Normale (1.0x)",
    "Slower (0.8x)":"Plus Lent (0.8x)","Slowest (0.7x)":"Très Lent (0.7x)",
    "Tutor Mode":"Mode Tuteur","Simulated Mode (HSK static lessons)":"Mode Simulé (leçons HSK statiques)",
    "Live AI Mode (Dynamic conversations)":"Mode IA en Direct (conversations dynamiques)",
    "App Language (Translations)":"Langue de l'App (Traductions)",
    "Study Reminders":"Rappels d'Étude","No Reminders":"Pas de Rappels",
    "Every Day (Daily)":"Chaque Jour (Quotidien)","Every Week (Weekly)":"Chaque Semaine (Hebdomadaire)",
    "Save Reminder Schedule":"Enregistrer le Planning","Close":"Fermer",
    "AI-Powered Speaking Tutor":"Tuteur de Conversation IA",
    "Learn Mandarin with AI":"Apprenez le Mandarin avec l'IA",
    "HSK 1 Free · HSK 2–9 $9/mo":"HSK 1 Gratuit · HSK 2–9 $9/mois",
    "Master Chinese speaking, tones, and character writing with real-time interactive voice grading, stroke order tracing, and personalized review decks.":"Maîtrisez le chinois parlé, les tons et l'écriture avec une évaluation vocale interactive en temps réel, le tracé des caractères et des révisions personnalisées.",
    "Start Speaking Lesson":"Commencer la Leçon","Take Level Test":"Passer le Test de Niveau",
    "Levels":"Niveaux","Topics":"Sujets","Learners":"Apprenants",
    "AI Speaking Tutor":"Tuteur de Conversation IA",
    "Your Personal Chinese Speaking Teacher":"Votre Professeur de Chinois Personnel",
    "Listen to the AI speak Chinese, then respond by typing Chinese in the text box below.":"Écoutez l'IA parler chinois, puis répondez en tapant du chinois dans la zone de texte.",
    "Bite-Sized Lessons":"Leçons Courtes","10-15 Minute Lessons":"Leçons de 10-15 Minutes",
    "Topics Grid":"Grille de Sujets","Study Flashcards":"Cartes Mémoire",
    "Radical Explorer":"Explorateur de Radicaux","Common Radicals":"Radicaux Courants",
    "Translation & Meaning":"Traduction et Sens","Example Phrase":"Exemple de Phrase",
    "Prev":"Précédent","Next":"Suivant","Again":"Répéter","Hard":"Difficile","Good":"Bien","Easy":"Facile",
    "Instant Translation":"Traduction Instantanée","Translate Any Phrase":"Traduire N'importe Quelle Phrase",
    "Translate any language to Chinese with AI. Supports English, Spanish, French, Japanese, Korean, German, Portuguese, Italian, Russian, and Vietnamese.":"Traduisez n'importe quelle langue en chinois avec l'IA. Prend en charge l'anglais, l'espagnol, le français, le japonais, le coréen, l'allemand, le portugais, l'italien, le russe et le vietnamien.",
    "Translate":"Traduire","Enter text to translate...":"Entrez le texte à traduire...",
    "Speak":"Parler","Copy to Tutor":"Copier vers le Tuteur",
    "HSK Dictionary":"Dictionnaire HSK","Browse HSK Vocabulary":"Parcourir le Vocabulaire HSK",
    "Browse all HSK vocabulary with pinyin and English translations.":"Parcourez tout le vocabulaire HSK avec pinyin et traductions anglaises.",
    "Search characters or pinyin...":"Rechercher des caractères ou du pinyin...",
    "Grammar Deep Dive":"Grammaire Approfondie","Understand Grammar":"Comprendre la Grammaire",
    "Level Assessment":"Évaluation de Niveau","Know Your Level in 5 Minutes":"Connaissez Votre Niveau en 5 Minutes",
    "Quick Assessment":"Évaluation Rapide","10 questions.":"10 questions.","Start Test":"Commencer le Test",
    "Retake":"Reprendre","Start Lessons":"Commencer les Leçons",
    "HSK Progress":"Progrès HSK","9 Levels to Fluency":"9 Niveaux vers la Fluidité",
    "Today's Progress":"Progrès d'Aujourd'hui","Words":"Mots","Chars":"Caractères",
    "Spoken":"Parlé","Reference":"Référence","Your Writing Grid":"Votre Grille d'Écriture",
    "Animate":"Animer","Quiz":"Quiz",
    "Grammar Practice":"Pratique de Grammaire","Reconstruct the sentence:":"Reconstruisez la phrase :",
    "Reset":"Réinitialiser","Check":"Vérifier",
    "MandarinCourse Premium":"Premium Cours de Mandarin","Sign In":"Connexion",
    "Email":"E-mail","your@email.com":"votre@email.com","Password":"Mot de Passe",
    "Min 6 characters":"Min 6 caractères",
    "Frequently Asked Questions":"Foire Aux Questions",
    "Learn More About MandarinCourse":"En Savoir Plus sur Cours de Mandarin",
    "Direct answers about our features, offline compatibility, and pronunciation grading.":"Réponses directes sur nos fonctionnalités, la compatibilité hors ligne et l'évaluation de la prononciation.",
    "Correct":"Correct","Vocab":"Vocabulaire","Time":"Temps",
    "Record Accent":"Enregistrer l'Accent","Due Reviews Only":"Révisions Attendues Uniquement",
    "Reviews due: 0":"Révisions en attente : 0",
    "Outline":"Contour","Hint":"Indice",
    "Speaking":"Interlocuteur A","Speaker B":"Interlocuteur B","Waiter":"Serveur","Customer":"Client","Friend A":"Ami A","Friend B":"Ami B","Customs Officer":"Agent des Douanes","Passenger":"Passager",
    "Student":"Étudiant","Roleplay Characters Assigned":"Rôles Attribués","Bot":"Bot","You":"Toi",
    "Teaching...":"Enseignement...","Listen to":"Écouter","speaking":"parle","Type your response in the box below":"Tapez votre réponse dans la case ci-dessous",
    "Your turn":"À votre tour","type below":"tapez ci-dessous","replay":"répéter","speak":"parle","lines":"lignes",
    "Your Turn":"Votre Tour","Type Chinese below or press mic":"Tapez le chinois ci-dessous ou appuyez sur micro",
    "No audio recorded. Try again.":"Aucun audio enregistré. Réessayez.","Recording... tap mic to stop":"Enregistrement... appuyez sur micro pour arrêter",
    "Mic access denied. Use text box.":"Micro refusé. Utilisez le texte.","Transcribing...":"Transcription...","Transcribing audio...":"Transcription audio...",
    "Rate limited, retrying in ":"Limite atteinte, nouvelle tentative dans ","s...":"s...",
    "Heard: ":"Entendu : ","Use":"Utiliser","Cancel":"Annuler",
    "No speech detected — tap mic and speak clearly":"Aucune parole détectée — appuyez sur micro et parlez clairement",
    "No speech detected":"Aucune parole détectée","Transcription error: ":"Erreur de transcription : ","Error:":"Erreur :",
    "Cancelled — tap mic to try again":"Annulé — appuyez sur micro pour réessayer",
    "Cancelled. Tap mic to speak again.":"Annulé. Appuyez sur micro pour reparler.",
    "Your browser does not support microphone input. Use the text box instead.":"Votre navigateur ne supporte pas le micro. Utilisez le texte.",
    "Allow microphone access when prompted...":"Autorisez l'accès au micro quand demandé...",
    "Tap microphone again to start speaking.":"Appuyez à nouveau sur le micro pour parler.",
    "Mic Denied: Tap aA (or settings icon) in Safari address bar → Website Settings → Set Microphone to Allow → Reload page.":"Micro Refusé : Appuyez sur aA dans Safari → Paramètres du site → Micro → Autoriser → Rechargez.",
    "Listening...":"Écoute...","Auto-switching to recording...":"Basculement automatique vers l'enregistrement...",
    "Mic Error":"Erreur Micro","Try text box":"Essayez le texte",
    "Type Chinese characters first":"Tapez d'abord des caractères chinois",
    "Great!":"Génial!","Getting there":"Presque","Keep practicing":"Continuez à pratiquer",
    "Matched transcript:":"Transcription correspondante:","Score:":"Score:","/100":"/100",
    "Excellent!":"Excellent!","Good effort!":"Bon effort!","Keep practicing!":"Continuez à pratiquer!",
    "Lesson Complete!":"Leçon Terminée!","Average:":"Moyenne:",
    "Select another lesson above to continue.":"Sélectionnez une autre leçon ci-dessus pour continuer.",
    "Lesson complete!":"Leçon terminée!","Select a lesson above":"Sélectionnez une leçon ci-dessus",
    "Initials":"Initiales","Finals":"Finales","Four Tones":"Quatre Tons",
    "Listen":"Écouter","Practice":"Pratiquer","pts":"pts","See Results":"Voir les Résultats",
    "Perfect starting point!":"Point de départ parfait!","Solid HSK 3 foundation!":"Base solide HSK 3!","Ready for HSK 2!":"Prêt pour HSK 2!",
    "Your Level:":"Votre Niveau:","/10":"/10","Current":"Actuel",
    "Again (1m)":"Répéter (1m)","Hard (12h)":"Difficile (12h)","Good (1d)":"Bon (1j)","Easy (4d)":"Facile (4j)",
    "Card rescheduled:":"Carte reprogrammée:","Flat (1st Tone)":"Plat (1er Ton)","Rising (2nd Tone)":"Montant (2e Ton)",
    "Dipping (3rd Tone)":"Descendant (3e Ton)","Falling (4th Tone)":"Tombant (4e Ton)",
    "Practice:":"Pratique:","Hum/Speak now...":"Chante/Parle maintenant...",
    "Analysis complete. Choose another tone to test!":"Analyse terminée. Choisissez un autre ton à tester!",
    "Processing audio...":"Traitement audio...","Type or speak Chinese here — e.g. 你好":"Tapez ou parlez chinois ici — ex. 你好",
    "Transcription failed. Try typing.":"Transcription échouée. Essayez de taper.","Mic denied. Type instead.":"Micro refusé. Tapez à la place.",
    "Listening... Speak in Mandarin":"Écoute... Parle en mandarin","Reviews due: ":"Révisions en attente : ","None":"Aucun",
    "No vocabulary items loaded.":"Aucun vocabulaire chargé.","Progress updated!":"Progrès mis à jour!",
    "Speaking speed: ":"Vitesse de parole : ","Settings Saved! Mode: ":"Paramètres sauvegardés! Mode : ",
    "Live AI":"IA en Direct","Simulated":"Simulé","Thinking...":"Réflexion...","Error":"Erreur","press mic":"appuyez sur micro",
    "Live AI Mode:":"Mode IA en Direct:","Connecting to Gemini to chat about":"Connexion à Gemini pour parler de",
    "Loaded ":"Chargé ","! Start speaking now.":"! Commencez à parler maintenant.",
    "Loaded a free lesson!":"Leçon gratuite chargée!",
    "Hint selected! Speak now or click Submit.":"Indice sélectionné! Parlez maintenant ou cliquez sur Envoyer.",
    "Unlock ":"Déverrouiller ","Loaded HSK ":"HSK chargé "," lessons for you!":" leçons pour vous!",
    "Dialogue Roleplay Mode Active! Speak your role lines.":"Mode Jeu de Rôle Actif! Parlez vos lignes.",
    "Returned to Dialogue Study Mode.":"Retour au Mode d'Étude de Dialogue.","Study":"Étudier","Roleplay":"Jeu de Rôle",
    "Correct! Well done!":"Correct! Bien joué!","Incorrect. Try again!":"Incorrect. Réessayez!",
    "lessons":"leçons","Your turn — press mic":"À votre tour — appuyez sur micro",
    "Your Turn — speak":"Votre Tour — parlez","Roleplay — Your Turn":"Jeu de Rôle — Votre Tour",
    "Roleplay — ":"Jeu de Rôle — ","Your Turn — type below":"Votre Tour — tapez ci-dessous",
    "Type Chinese below or press mic":"Tapez le chinois ci-dessous ou appuyez sur micro",
    "type below":"tapez ci-dessous","speaking":"parle","lines":"lignes","Listen to":"Écoutez",
    "Live AI":"IA en Direct","Simulated":"Simulé","Live AI Mode:":"Mode IA en Direct:",
    "Avg":"Moy","Select a lesson to begin":"Sélectionnez une leçon pour commencer",
    "Current":"Actuel","Next":"Suivant","pts":"pts","Score:":"Score:",
    "/10":"/10","/100":"/100","Average:":"Moyenne:","items":"éléments",
    "First Meeting":"Première Rencontre",
    "Select a lesson above and respond by typing Chinese.":"Sélectionnez une leçon ci-dessus et répondez en tapant du chinois.",
    "Current Phrase":"Phrase Actuelle",
    "No audio recorded. Try again.":"Aucun audio enregistré. Réessayez.",
    "No speech detected":"Aucune parole détectée",
    "Mic Error":"Erreur Micro","Try text box":"Essayez la zone de texte",
    "Type your response in the box below":"Tapez votre réponse dans la case ci-dessous"
  },
  "de": {
    "Tutor":"Tutor","Lessons":"Lektionen","Grammar":"Grammatik","Dict":"Wörterbuch","Trans":"Übersetzen","Test":"Test","Progress":"Fortschritt",
    "AI Tutor":"AI Tutor","Dictionary":"Wörterbuch","Level Test":"Einstufungstest",
    "MandarinCourse":"Mandarin-Kurs","Settings":"Einstellungen",
    "Cloud Account & Sync":"Konto und Synchronisation","Sign In / Register":"Anmelden / Registrieren",
    "Sync Progress":"Fortschritt synchronisieren","Sign Out":"Abmelden",
    "AI Speaking Speed":"KI-Sprechgeschwindigkeit","Normal Speed (1.0x)":"Normale Geschwindigkeit (1.0x)",
    "Slower (0.8x)":"Langsamer (0.8x)","Slowest (0.7x)":"Sehr Langsam (0.7x)",
    "Tutor Mode":"Tutor-Modus","Simulated Mode (HSK static lessons)":"Simulierter Modus (statische HSK-Lektionen)",
    "Live AI Mode (Dynamic conversations)":"Live-KI-Modus (dynamische Gespräche)",
    "App Language (Translations)":"App-Sprache (Übersetzungen)",
    "Study Reminders":"Lern-Erinnerungen","No Reminders":"Keine Erinnerungen",
    "Every Day (Daily)":"Jeden Tag (Täglich)","Every Week (Weekly)":"Jede Woche (Wöchentlich)",
    "Save Reminder Schedule":"Zeitplan speichern","Close":"Schließen",
    "AI-Powered Speaking Tutor":"KI-gestützter Konversationstutor",
    "Learn Mandarin with AI":"Lerne Mandarin mit KI",
    "HSK 1 Free · HSK 2–9 $9/mo":"HSK 1 Kostenlos · HSK 2–9 $9/Monat",
    "Master Chinese speaking, tones, and character writing with real-time interactive voice grading, stroke order tracing, and personalized review decks.":"Meistere Chinesisch sprechen, Töne und Schriftzeichen mit interaktiver Echtzeit-Sprachbewertung, Strichfolgen-Nachzeichnung und personalisierten Wiederholungskarten.",
    "Start Speaking Lesson":"Sprechstunde beginnen","Take Level Test":"Einstufungstest machen",
    "Levels":"Stufen","Topics":"Themen","Learners":"Lernende",
    "AI Speaking Tutor":"KI-Konversationstutor",
    "Your Personal Chinese Speaking Teacher":"Dein persönlicher Chinesisch-Lehrer",
    "Listen to the AI speak Chinese, then respond by typing Chinese in the text box below.":"Höre der KI beim Chinesischsprechen zu und antworte, indem du Chinesisch in das Textfeld unten eingibst.",
    "Bite-Sized Lessons":"Kurze Lektionen","10-15 Minute Lessons":"10-15-minütige Lektionen",
    "Topics Grid":"Themenraster","Study Flashcards":"Lernkarten",
    "Radical Explorer":"Radikal-Entdecker","Common Radicals":"Häufige Radikale",
    "Translation & Meaning":"Übersetzung und Bedeutung","Example Phrase":"Beispielsatz",
    "Prev":"Zurück","Next":"Weiter","Again":"Wiederholen","Hard":"Schwer","Good":"Gut","Easy":"Leicht",
    "Instant Translation":"Sofortübersetzung","Translate Any Phrase":"Jede Phrase übersetzen",
    "Translate any language to Chinese with AI. Supports English, Spanish, French, Japanese, Korean, German, Portuguese, Italian, Russian, and Vietnamese.":"Übersetze jede Sprache mit KI ins Chinesische. Unterstützt Englisch, Spanisch, Französisch, Japanisch, Koreanisch, Deutsch, Portugiesisch, Italienisch, Russisch und Vietnamesisch.",
    "Translate":"Übersetzen","Enter text to translate...":"Text zum Übersetzen eingeben...",
    "Speak":"Sprechen","Copy to Tutor":"In Tutor kopieren",
    "HSK Dictionary":"HSK Wörterbuch","Browse HSK Vocabulary":"HSK Wortschatz durchsuchen",
    "Browse all HSK vocabulary with pinyin and English translations.":"Durchsuche den gesamten HSK-Wortschatz mit Pinyin und englischen Übersetzungen.",
    "Search characters or pinyin...":"Zeichen oder Pinyin suchen...",
    "Grammar Deep Dive":"Grammatik vertiefen","Understand Grammar":"Grammatik verstehen",
    "Level Assessment":"Stufenbewertung","Know Your Level in 5 Minutes":"Finde dein Niveau in 5 Minuten",
    "Quick Assessment":"Schnellbewertung","10 questions.":"10 Fragen.","Start Test":"Test starten",
    "Retake":"Wiederholen","Start Lessons":"Lektionen starten",
    "HSK Progress":"HSK Fortschritt","9 Levels to Fluency":"9 Stufen zur Flüssigkeit",
    "Today's Progress":"Heutiger Fortschritt","Words":"Wörter","Chars":"Zeichen",
    "Spoken":"Gesprochen","Reference":"Referenz","Your Writing Grid":"Dein Schreibgitter",
    "Animate":"Animieren","Quiz":"Quiz",
    "Grammar Practice":"Grammatikübung","Reconstruct the sentence:":"Rekonstruiere den Satz:",
    "Reset":"Zurücksetzen","Check":"Prüfen",
    "MandarinCourse Premium":"Mandarin-Kurs Premium","Sign In":"Anmelden",
    "Email":"E-Mail","your@email.com":"deine@email.com","Password":"Passwort",
    "Min 6 characters":"Mind. 6 Zeichen",
    "Frequently Asked Questions":"Häufig gestellte Fragen",
    "Learn More About MandarinCourse":"Mehr über Mandarin-Kurs erfahren",
    "Direct answers about our features, offline compatibility, and pronunciation grading.":"Direkte Antworten zu unseren Funktionen, Offline-Kompatibilität und Aussprachebewertung.",
    "Correct":"Richtig","Vocab":"Wortschatz","Time":"Zeit",
    "Record Accent":"Akzent aufnehmen","Due Reviews Only":"Nur fällige Wiederholungen",
    "Reviews due: 0":"Fällige Wiederholungen: 0",
    "Outline":"Umriss","Hint":"Hinweis",
    "Teaching...":"Unterrichte...","Listening...":"Höre zu...","Thinking...":"Denke nach...",
    "Great!":"Großartig!","Excellent!":"Hervorragend!","Good effort!":"Gute Anstrengung!",
    "Keep practicing":"Übe weiter","Getting there":"Fast da","Current":"Aktuell",
    "Listen":"Hören","Practice":"Üben","Next":"Weiter","See Results":"Ergebnisse sehen",
    "Initials":"Initialen","Finals":"Finale","Four Tones":"Vier Töne",
    "Use":"Verwenden","Cancel":"Abbrechen","Roleplay":"Rollenspiel","Study":"Studieren",
    "lessons":"Lektionen","pts":"Pkt","Your Level:":"Dein Niveau:","/10":"/10",
    "Lesson Complete!":"Lektion abgeschlossen!","Lesson complete!":"Lektion abgeschlossen!",
    "Your turn":"Du bist dran","type below":"unten eingeben","replay":"wiederholen",
    "speaking":"spricht","speak":"sprich","lines":"Zeilen","Your Turn":"Du bist dran",
    "Recording... tap mic to stop":"Aufnahme... tippe auf Mikro zum Stoppen",
    "Transcribing...":"Transkribiere...","Error":"Fehler",
    "Again (1m)":"Wiederholen (1m)","Hard (12h)":"Schwer (12h)","Good (1d)":"Gut (1d)","Easy (4d)":"Leicht (4d)",
    "Flat (1st Tone)":"Flach (1. Ton)","Rising (2nd Tone)":"Steigend (2. Ton)",
    "Dipping (3rd Tone)":"Fallend (3. Ton)","Falling (4th Tone)":"Absteigend (4. Ton)",
    "Practice:":"Übung:","Reviews due: ":"Fällige Wiederholungen: ","None":"Keine",
    "Progress updated!":"Fortschritt aktualisiert!","Speaking speed: ":"Sprechgeschwindigkeit: ",
    "Correct! Well done!":"Richtig! Gut gemacht!","Incorrect. Try again!":"Falsch. Versuche es erneut!",
    "Live AI":"Live-KI","Simulated":"Simuliert","Live AI Mode:":"Live-KI-Modus:",
    "Avg":"Durchschn.","Select a lesson to begin":"Wähle eine Lektion zum Starten",
    "items":"Einträge","First Meeting":"Erstes Treffen",
    "Select a lesson above and respond by typing Chinese.":"Wähle eine Lektion oben und antworte durch chinesisches Tippen.",
    "Current Phrase":"Aktueller Satz",
    "No audio recorded. Try again.":"Keine Aufnahme. Versuche es erneut.",
    "No speech detected":"Keine Sprache erkannt",
    "Mic Error":"Mikro-Fehler","Try text box":"Textfeld versuchen",
    "Type your response in the box below":"Gib deine Antwort in das Feld unten ein"
  },
  "pt": {
    "Tutor":"Tutor","Lessons":"Lições","Grammar":"Gramática","Dict":"Dicionário","Trans":"Traduzir","Test":"Teste","Progress":"Progresso",
    "AI Tutor":"Tutor IA","Dictionary":"Dicionário","Level Test":"Teste de Nível",
    "MandarinCourse":"Curso de Mandarim","Settings":"Configurações",
    "Cloud Account & Sync":"Conta e Sincronização","Sign In / Register":"Entrar / Registrar",
    "Sync Progress":"Sincronizar Progresso","Sign Out":"Sair",
    "AI Speaking Speed":"Velocidade da IA","Normal Speed (1.0x)":"Velocidade Normal (1.0x)",
    "Slower (0.8x)":"Mais Lento (0.8x)","Slowest (0.7x)":"Muito Lento (0.7x)",
    "Tutor Mode":"Modo Tutor","Simulated Mode (HSK static lessons)":"Modo Simulado (lições HSK estáticas)",
    "Live AI Mode (Dynamic conversations)":"Modo IA ao Vivo (conversas dinâmicas)",
    "App Language (Translations)":"Idioma do App (Traduções)",
    "Study Reminders":"Lembretes de Estudo","No Reminders":"Sem Lembretes",
    "Every Day (Daily)":"Todos os Dias (Diário)","Every Week (Weekly)":"Todas as Semanas (Semanal)",
    "Save Reminder Schedule":"Salvar Agenda","Close":"Fechar",
    "AI-Powered Speaking Tutor":"Tutor de Conversação com IA",
    "Learn Mandarin with AI":"Aprenda Mandarim com IA",
    "HSK 1 Free · HSK 2–9 $9/mo":"HSK 1 Grátis · HSK 2–9 $9/mês",
    "Master Chinese speaking, tones, and character writing with real-time interactive voice grading, stroke order tracing, and personalized review decks.":"Domine o chinês falado, tons e escrita de caracteres com avaliação de voz interativa em tempo real, traçado de ordem dos traços e revisões personalizadas.",
    "Start Speaking Lesson":"Começar Lição","Take Level Test":"Fazer Teste de Nível",
    "Levels":"Níveis","Topics":"Tópicos","Learners":"Alunos",
    "AI Speaking Tutor":"Tutor de Conversação IA",
    "Your Personal Chinese Speaking Teacher":"Seu Professor Pessoal de Chinês",
    "Listen to the AI speak Chinese, then respond by typing Chinese in the text box below.":"Ouça a IA falar chinês, depois responda digitando chinês na caixa de texto abaixo.",
    "Bite-Sized Lessons":"Lições Curtas","10-15 Minute Lessons":"Lições de 10-15 Minutos",
    "Topics Grid":"Grade de Tópicos","Study Flashcards":"Flashcards de Estudo",
    "Radical Explorer":"Explorador de Radicais","Common Radicals":"Radicais Comuns",
    "Translation & Meaning":"Tradução e Significado","Example Phrase":"Frase de Exemplo",
    "Prev":"Anterior","Next":"Próximo","Again":"Repetir","Hard":"Difícil","Good":"Bom","Easy":"Fácil",
    "Instant Translation":"Tradução Instantânea","Translate Any Phrase":"Traduza Qualquer Frase",
    "Translate any language to Chinese with AI. Supports English, Spanish, French, Japanese, Korean, German, Portuguese, Italian, Russian, and Vietnamese.":"Traduza qualquer idioma para chinês com IA. Suporta inglês, espanhol, francês, japonês, coreano, alemão, português, italiano, russo e vietnamita.",
    "Translate":"Traduzir","Enter text to translate...":"Digite o texto para traduzir...",
    "Speak":"Falar","Copy to Tutor":"Copiar para o Tutor",
    "HSK Dictionary":"Dicionário HSK","Browse HSK Vocabulary":"Explorar Vocabulário HSK",
    "Browse all HSK vocabulary with pinyin and English translations.":"Explore todo o vocabulário HSK com pinyin e traduções em inglês.",
    "Search characters or pinyin...":"Buscar caracteres ou pinyin...",
    "Grammar Deep Dive":"Gramática Aprofundada","Understand Grammar":"Entender Gramática",
    "Level Assessment":"Avaliação de Nível","Know Your Level in 5 Minutes":"Conheça Seu Nível em 5 Minutos",
    "Quick Assessment":"Avaliação Rápida","10 questions.":"10 perguntas.","Start Test":"Iniciar Teste",
    "Retake":"Refazer","Start Lessons":"Iniciar Lições",
    "HSK Progress":"Progresso HSK","9 Levels to Fluency":"9 Níveis para Fluência",
    "Today's Progress":"Progresso de Hoje","Words":"Palavras","Chars":"Caracteres",
    "Spoken":"Falado","Reference":"Referência","Your Writing Grid":"Sua Grade de Escrita",
    "Animate":"Animar","Quiz":"Quiz",
    "Grammar Practice":"Prática de Gramática","Reconstruct the sentence:":"Reconstrua a frase:",
    "Reset":"Redefinir","Check":"Verificar",
    "MandarinCourse Premium":"Premium do Curso de Mandarim","Sign In":"Entrar",
    "Email":"E-mail","your@email.com":"seu@email.com","Password":"Senha",
    "Min 6 characters":"Mín. 6 caracteres",
    "Frequently Asked Questions":"Perguntas Frequentes",
    "Learn More About MandarinCourse":"Saiba Mais sobre o Curso de Mandarim",
    "Direct answers about our features, offline compatibility, and pronunciation grading.":"Respostas diretas sobre nossos recursos, compatibilidade offline e avaliação de pronúncia.",
    "Correct":"Correto","Vocab":"Vocabulário","Time":"Tempo",
    "Record Accent":"Gravar Sotaque","Due Reviews Only":"Apenas Revisões Pendentes",
    "Reviews due: 0":"Revisões pendentes: 0",
    "Outline":"Contorno","Hint":"Dica",
    "Teaching...":"Ensinando...","Listening...":"Ouvindo...","Thinking...":"Pensando...",
    "Great!":"Ótimo!","Excellent!":"Excelente!","Good effort!":"Bom esforço!",
    "Keep practicing":"Continue praticando","Getting there":"Quase lá","Current":"Atual",
    "Listen":"Ouvir","Practice":"Praticar","Next":"Próximo","See Results":"Ver Resultados",
    "Initials":"Iniciais","Finals":"Finais","Four Tones":"Quatro Tons",
    "Use":"Usar","Cancel":"Cancelar","Roleplay":"Interpretar","Study":"Estudar",
    "lessons":"lições","pts":"pts","Your Level:":"Seu Nível:","/10":"/10",
    "Lesson Complete!":"Lição Concluída!","Your turn":"Sua vez","type below":"digite abaixo",
    "replay":"repetir","speaking":"falando","speak":"fale","lines":"linhas","Your Turn":"Sua Vez",
    "Recording... tap mic to stop":"Gravando... toque no mic para parar",
    "Transcribing...":"Transcrevendo...","Error":"Erro",
    "Again (1m)":"Repetir (1m)","Hard (12h)":"Difícil (12h)","Good (1d)":"Bom (1d)","Easy (4d)":"Fácil (4d)",
    "Flat (1st Tone)":"Plano (1º Tom)","Rising (2nd Tone)":"Ascendente (2º Tom)",
    "Dipping (3rd Tone)":"Descendente (3º Tom)","Falling (4th Tone)":"Caída (4º Tom)",
    "Practice:":"Prática:","Reviews due: ":"Revisões pendentes: ","None":"Nenhum",
    "Progress updated!":"Progresso atualizado!","Speaking speed: ":"Velocidade de fala: ",
    "Correct! Well done!":"Correto! Muito bem!","Incorrect. Try again!":"Incorreto. Tente novamente!",
    "Live AI":"IA ao Vivo","Simulated":"Simulado","Live AI Mode:":"Modo IA ao Vivo:",
    "Avg":"Méd","Select a lesson to begin":"Selecione uma lição para começar",
    "items":"itens","First Meeting":"Primeiro Encontro",
    "Select a lesson above and respond by typing Chinese.":"Selecione uma lição acima e responda digitando chinês.",
    "Current Phrase":"Frase Atual",
    "No audio recorded. Try again.":"Nenhum áudio gravado. Tente novamente.",
    "No speech detected":"Nenhuma fala detectada",
    "Mic Error":"Erro de Microfone","Try text box":"Tente caixa de texto",
    "Type your response in the box below":"Digite sua resposta na caixa abaixo"
  },
  "it": {
    "Tutor":"Tutor","Lessons":"Lezioni","Grammar":"Grammatica","Dict":"Dizionario","Trans":"Tradurre","Test":"Test","Progress":"Progressi",
    "AI Tutor":"Tutor IA","Dictionary":"Dizionario","Level Test":"Test di Livello",
    "MandarinCourse":"Corso di Mandarino","Settings":"Impostazioni",
    "Cloud Account & Sync":"Account e Sincronizzazione","Sign In / Register":"Accedi / Registrati",
    "Sync Progress":"Sincronizza Progressi","Sign Out":"Esci",
    "AI Speaking Speed":"Velocità IA","Normal Speed (1.0x)":"Velocità Normale (1.0x)",
    "Slower (0.8x)":"Più Lento (0.8x)","Slowest (0.7x)":"Molto Lento (0.7x)",
    "Tutor Mode":"Modalità Tutor","Simulated Mode (HSK static lessons)":"Modalità Simulata (lezioni HSK statiche)",
    "Live AI Mode (Dynamic conversations)":"Modalità IA in Diretta (conversazioni dinamiche)",
    "App Language (Translations)":"Lingua App (Traduzioni)",
    "Study Reminders":"Promemoria di Studio","No Reminders":"Nessun Promemoria",
    "Every Day (Daily)":"Ogni Giorno (Giornaliero)","Every Week (Weekly)":"Ogni Settimana (Settimanale)",
    "Save Reminder Schedule":"Salva Programma","Close":"Chiudi",
    "AI-Powered Speaking Tutor":"Tutor di Conversazione con IA",
    "Learn Mandarin with AI":"Impara il Mandarino con l'IA",
    "HSK 1 Free · HSK 2–9 $9/mo":"HSK 1 Gratuito · HSK 2–9 $9/mese",
    "Master Chinese speaking, tones, and character writing with real-time interactive voice grading, stroke order tracing, and personalized review decks.":"Padroneggia il cinese parlato, i toni e la scrittura dei caratteri con valutazione vocale interattiva in tempo reale, tracciamento dell'ordine dei tratti e revisioni personalizzate.",
    "Start Speaking Lesson":"Inizia Lezione","Take Level Test":"Fai il Test di Livello",
    "Levels":"Livelli","Topics":"Argomenti","Learners":"Studenti",
    "AI Speaking Tutor":"Tutor di Conversazione IA",
    "Your Personal Chinese Speaking Teacher":"Il Tuo Insegnante Personale di Cinese",
    "Listen to the AI speak Chinese, then respond by typing Chinese in the text box below.":"Ascolta l'IA parlare cinese, poi rispondi digitando cinese nella casella di testo qui sotto.",
    "Bite-Sized Lessons":"Lezioni Brevi","10-15 Minute Lessons":"Lezioni da 10-15 Minuti",
    "Topics Grid":"Griglia Argomenti","Study Flashcards":"Flashcard di Studio",
    "Radical Explorer":"Esploratore di Radicali","Common Radicals":"Radicali Comuni",
    "Translation & Meaning":"Traduzione e Significato","Example Phrase":"Frase di Esempio",
    "Prev":"Precedente","Next":"Successivo","Again":"Ripeti","Hard":"Difficile","Good":"Buono","Easy":"Facile",
    "Instant Translation":"Traduzione Istantanea","Translate Any Phrase":"Traduci Qualsiasi Frase",
    "Translate any language to Chinese with AI. Supports English, Spanish, French, Japanese, Korean, German, Portuguese, Italian, Russian, and Vietnamese.":"Traduci qualsiasi lingua in cinese con l'IA. Supporta inglese, spagnolo, francese, giapponese, coreano, tedesco, portoghese, italiano, russo e vietnamita.",
    "Translate":"Traduci","Enter text to translate...":"Inserisci il testo da tradurre...",
    "Speak":"Parla","Copy to Tutor":"Copia al Tutor",
    "HSK Dictionary":"Dizionario HSK","Browse HSK Vocabulary":"Sfoglia il Vocabolario HSK",
    "Browse all HSK vocabulary with pinyin and English translations.":"Sfoglia tutto il vocabolario HSK con pinyin e traduzioni in inglese.",
    "Search characters or pinyin...":"Cerca caratteri o pinyin...",
    "Grammar Deep Dive":"Grammatica Approfondita","Understand Grammar":"Capire la Grammatica",
    "Level Assessment":"Valutazione del Livello","Know Your Level in 5 Minutes":"Conosci il Tuo Livello in 5 Minuti",
    "Quick Assessment":"Valutazione Rapida","10 questions.":"10 domande.","Start Test":"Inizia Test",
    "Retake":"Riprova","Start Lessons":"Inizia Lezioni",
    "HSK Progress":"Progressi HSK","9 Levels to Fluency":"9 Livelli verso la Fluidità",
    "Today's Progress":"Progressi di Oggi","Words":"Parole","Chars":"Caratteri",
    "Spoken":"Parlato","Reference":"Riferimento","Your Writing Grid":"La Tua Griglia di Scrittura",
    "Animate":"Animare","Quiz":"Quiz",
    "Grammar Practice":"Pratica di Grammatica","Reconstruct the sentence:":"Ricostruisci la frase:",
    "Reset":"Reimposta","Check":"Controlla",
    "MandarinCourse Premium":"Premium Corso di Mandarino","Sign In":"Accedi",
    "Email":"Email","your@email.com":"tua@email.com","Password":"Password",
    "Min 6 characters":"Min. 6 caratteri",
    "Frequently Asked Questions":"Domande Frequenti",
    "Learn More About MandarinCourse":"Scopri di Più sul Corso di Mandarino",
    "Direct answers about our features, offline compatibility, and pronunciation grading.":"Risposte dirette sulle nostre funzionalità, compatibilità offline e valutazione della pronuncia.",
    "Correct":"Corretto","Vocab":"Vocabolario","Time":"Tempo",
    "Record Accent":"Registra Accento","Due Reviews Only":"Solo Revisioni in Scadenza",
    "Reviews due: 0":"Revisioni in attesa: 0",
    "Outline":"Contorno","Hint":"Suggerimento",
    "Teaching...":"Insegnando...","Listening...":"Ascoltando...","Thinking...":"Pensando...",
    "Great!":"Ottimo!","Excellent!":"Eccellente!","Good effort!":"Bel sforzo!",
    "Keep practicing":"Continua a praticare","Getting there":"Quasi","Current":"Corrente",
    "Listen":"Ascolta","Practice":"Praticare","See Results":"Vedi Risultati",
    "Initials":"Iniziali","Finals":"Finali","Four Tones":"Quattro Toni",
    "Use":"Usa","Cancel":"Annulla","Roleplay":"Gioco di Ruolo","Study":"Studia",
    "lessons":"lezioni","Your Level:":"Il Tuo Livello:",
    "Lesson Complete!":"Lezione Completata!","Your turn":"Il tuo turno","replay":"ripeti",
    "Recording... tap mic to stop":"Registrazione... tocca mic per fermare",
    "Transcribing...":"Trascrivendo...","Again (1m)":"Ripeti (1m)","Hard (12h)":"Difficile (12h)",
    "Good (1d)":"Buono (1g)","Easy (4d)":"Facile (4g)",
    "Flat (1st Tone)":"Piatto (1° Tono)","Rising (2nd Tone)":"Crescente (2° Tono)",
    "Dipping (3rd Tone)":"Decrescente (3° Tono)","Falling (4th Tone)":"Caduta (4° Tono)",
    "Practice:":"Pratica:","Reviews due: ":"Revisioni in attesa: ","None":"Nessuno",
    "Progress updated!":"Progressi aggiornati!","Speaking speed: ":"Velocità di parola: ",
    "Correct! Well done!":"Corretto! Ben fatto!","Incorrect. Try again!":"Errato. Riprova!",
    "Live AI":"IA dal Vivo","Simulated":"Simulato","Live AI Mode:":"Modalità IA dal Vivo:",
    "Avg":"Media","Select a lesson to begin":"Seleziona una lezione per iniziare",
    "items":"elementi","First Meeting":"Primo Incontro",
    "Select a lesson above and respond by typing Chinese.":"Seleziona una lezione sopra e rispondi digitando cinese.",
    "Current Phrase":"Frase Corrente",
    "No audio recorded. Try again.":"Nessun audio registrato. Riprova.",
    "No speech detected":"Nessun discorso rilevato",
    "Mic Error":"Errore Microfono","Try text box":"Prova casella di testo",
    "Type your response in the box below":"Digita la tua risposta nella casella qui sotto"
  },
  "ru": {
    "Tutor":"Репетитор","Lessons":"Уроки","Grammar":"Грамматика","Dict":"Словарь","Trans":"Перевод","Test":"Тест","Progress":"Прогресс",
    "AI Tutor":"ИИ Репетитор","Dictionary":"Словарь","Level Test":"Тест Уровня",
    "MandarinCourse":"Курс Китайского","Settings":"Настройки",
    "Cloud Account & Sync":"Аккаунт и Синхронизация","Sign In / Register":"Войти / Регистрация",
    "Sync Progress":"Синхронизировать Прогресс","Sign Out":"Выйти",
    "AI Speaking Speed":"Скорость ИИ","Normal Speed (1.0x)":"Нормальная Скорость (1.0x)",
    "Slower (0.8x)":"Медленнее (0.8x)","Slowest (0.7x)":"Очень Медленно (0.7x)",
    "Tutor Mode":"Режим Репетитора","Simulated Mode (HSK static lessons)":"Симуляция (статические уроки HSK)",
    "Live AI Mode (Dynamic conversations)":"Живой Режим ИИ (динамические беседы)",
    "App Language (Translations)":"Язык Приложения (Переводы)",
    "Study Reminders":"Напоминания","No Reminders":"Без Напоминаний",
    "Every Day (Daily)":"Каждый День (Ежедневно)","Every Week (Weekly)":"Каждую Неделю (Еженедельно)",
    "Save Reminder Schedule":"Сохранить Расписание","Close":"Закрыть",
    "AI-Powered Speaking Tutor":"Разговорный Репетитор на ИИ",
    "Learn Mandarin with AI":"Учите Китайский с ИИ",
    "HSK 1 Free · HSK 2–9 $9/mo":"HSK 1 Бесплатно · HSK 2–9 $9/мес",
    "Master Chinese speaking, tones, and character writing with real-time interactive voice grading, stroke order tracing, and personalized review decks.":"Освойте разговорный китайский, тоны и письменность с интерактивной оценкой произношения в реальном времени, отслеживанием порядка черт и персонализированными карточками для повторения.",
    "Start Speaking Lesson":"Начать Урок","Take Level Test":"Пройти Тест Уровня",
    "Levels":"Уровни","Topics":"Темы","Learners":"Ученики",
    "AI Speaking Tutor":"Разговорный Репетитор ИИ",
    "Your Personal Chinese Speaking Teacher":"Ваш Личный Учитель Китайского",
    "Listen to the AI speak Chinese, then respond by typing Chinese in the text box below.":"Слушайте, как ИИ говорит по-китайски, затем отвечайте, вводя китайский текст в поле ниже.",
    "Bite-Sized Lessons":"Короткие Уроки","10-15 Minute Lessons":"Уроки по 10-15 Минут",
    "Topics Grid":"Сетка Тем","Study Flashcards":"Карточки для Заучивания",
    "Radical Explorer":"Исследователь Радикалов","Common Radicals":"Распространённые Радикалы",
    "Translation & Meaning":"Перевод и Значение","Example Phrase":"Пример Фразы",
    "Prev":"Назад","Next":"Далее","Again":"Повторить","Hard":"Сложно","Good":"Хорошо","Easy":"Легко",
    "Instant Translation":"Мгновенный Перевод","Translate Any Phrase":"Перевести Любую Фразу",
    "Translate any language to Chinese with AI. Supports English, Spanish, French, Japanese, Korean, German, Portuguese, Italian, Russian, and Vietnamese.":"Переведите любой язык на китайский с помощью ИИ. Поддерживает английский, испанский, французский, японский, корейский, немецкий, португальский, итальянский, русский и вьетнамский.",
    "Translate":"Перевести","Enter text to translate...":"Введите текст для перевода...",
    "Speak":"Говорить","Copy to Tutor":"Скопировать Репетитору",
    "HSK Dictionary":"HSK Словарь","Browse HSK Vocabulary":"Просмотр Лексики HSK",
    "Browse all HSK vocabulary with pinyin and English translations.":"Просмотрите всю лексику HSK с пиньинем и переводом на английский.",
    "Search characters or pinyin...":"Поиск иероглифов или пиньиня...",
    "Grammar Deep Dive":"Углублённая Грамматика","Understand Grammar":"Понимать Грамматику",
    "Level Assessment":"Оценка Уровня","Know Your Level in 5 Minutes":"Узнайте Свой Уровень за 5 Минут",
    "Quick Assessment":"Быстрая Оценка","10 questions.":"10 вопросов.","Start Test":"Начать Тест",
    "Retake":"Пересдать","Start Lessons":"Начать Уроки",
    "HSK Progress":"Прогресс HSK","9 Levels to Fluency":"9 Уровней к Свободному Владению",
    "Today's Progress":"Прогресс Сегодня","Words":"Слова","Chars":"Иероглифы",
    "Spoken":"Произнесено","Reference":"Справка","Your Writing Grid":"Ваша Сетка для Письма",
    "Animate":"Анимация","Quiz":"Тест",
    "Grammar Practice":"Практика Грамматики","Reconstruct the sentence:":"Восстановите предложение:",
    "Reset":"Сброс","Check":"Проверить",
    "MandarinCourse Premium":"Премиум Курса Китайского","Sign In":"Войти",
    "Email":"Эл. почта","your@email.com":"ваш@email.com","Password":"Пароль",
    "Min 6 characters":"Мин. 6 символов",
    "Frequently Asked Questions":"Часто Задаваемые Вопросы",
    "Learn More About MandarinCourse":"Узнать Больше о Курсе Китайского",
    "Direct answers about our features, offline compatibility, and pronunciation grading.":"Прямые ответы о наших функциях, офлайн-совместимости и оценке произношения.",
    "Correct":"Верно","Vocab":"Лексика","Time":"Время",
    "Record Accent":"Записать Акцент","Due Reviews Only":"Только Просроченные Повторения",
    "Reviews due: 0":"Повторений ожидается: 0",
    "Outline":"Контур","Hint":"Подсказка",
    "Teaching...":"Обучение...","Listening...":"Слушаю...","Thinking...":"Думаю...",
    "Great!":"Отлично!","Excellent!":"Превосходно!","Good effort!":"Хорошая попытка!",
    "Keep practicing":"Продолжайте практиковаться","Getting there":"Почти","Current":"Текущий",
    "Listen":"Слушать","Practice":"Практиковать","See Results":"Смотреть результаты",
    "Initials":"Инициали","Finals":"Финали","Four Tones":"Четыре Тона",
    "Use":"Использовать","Cancel":"Отмена","Roleplay":"Ролевая игра","Study":"Учить",
    "lessons":"уроки","Your Level:":"Ваш Уровень:",
    "Lesson Complete!":"Урок Завершён!","Your turn":"Ваша очередь","replay":"повтор",
    "Recording... tap mic to stop":"Запись... нажмите микрофон для остановки",
    "Transcribing...":"Расшифровка...","Again (1m)":"Снова (1м)","Hard (12h)":"Сложно (12ч)",
    "Good (1d)":"Хорошо (1д)","Easy (4d)":"Легко (4д)",
    "Flat (1st Tone)":"Ровный (1-й Тон)","Rising (2nd Tone)":"Восходящий (2-й Тон)",
    "Dipping (3rd Tone)":"Нисходящий (3-й Тон)","Falling (4th Tone)":"Падающий (4-й Тон)",
    "Practice:":"Практика:","Reviews due: ":"Повторений: ","None":"Нет",
    "Progress updated!":"Прогресс обновлён!","Speaking speed: ":"Скорость речи: ",
    "Correct! Well done!":"Верно! Молодец!","Incorrect. Try again!":"Неверно. Попробуйте снова!",
    "Live AI":"ИИ в Реальном Времени","Simulated":"Симуляция","Live AI Mode:":"Режим ИИ в Реальном Времени:",
    "Avg":"Средн.","Select a lesson to begin":"Выберите урок для начала",
    "items":"элементов","First Meeting":"Первая Встреча",
    "Select a lesson above and respond by typing Chinese.":"Выберите урок выше и ответьте, введя китайский текст.",
    "Current Phrase":"Текущая Фраза",
    "No audio recorded. Try again.":"Аудио не записано. Попробуйте снова.",
    "No speech detected":"Речь не обнаружена",
    "Mic Error":"Ошибка Микрофона","Try text box":"Используйте текстовое поле",
    "Type your response in the box below":"Введите ответ в поле ниже"
  },
  "vi": {
    "Tutor":"Gia sư","Lessons":"Bài học","Grammar":"Ngữ pháp","Dict":"Từ điển","Trans":"Dịch","Test":"Kiểm tra","Progress":"Tiến bộ",
    "AI Tutor":"Gia sư AI","Dictionary":"Từ điển","Level Test":"Kiểm tra Trình độ",
    "MandarinCourse":"Khóa học Tiếng Trung","Settings":"Cài đặt",
    "Cloud Account & Sync":"Tài khoản & Đồng bộ","Sign In / Register":"Đăng nhập / Đăng ký",
    "Sync Progress":"Đồng bộ Tiến độ","Sign Out":"Đăng xuất",
    "AI Speaking Speed":"Tốc độ Nói AI","Normal Speed (1.0x)":"Tốc độ Thường (1.0x)",
    "Slower (0.8x)":"Chậm hơn (0.8x)","Slowest (0.7x)":"Rất Chậm (0.7x)",
    "Tutor Mode":"Chế độ Gia sư","Simulated Mode (HSK static lessons)":"Chế độ Mô phỏng (bài học HSK tĩnh)",
    "Live AI Mode (Dynamic conversations)":"Chế độ AI Trực tiếp (hội thoại động)",
    "App Language (Translations)":"Ngôn ngữ Ứng dụng (Bản dịch)",
    "Study Reminders":"Nhắc nhở Học tập","No Reminders":"Không Nhắc nhở",
    "Every Day (Daily)":"Mỗi Ngày (Hàng ngày)","Every Week (Weekly)":"Mỗi Tuần (Hàng tuần)",
    "Save Reminder Schedule":"Lưu Lịch trình","Close":"Đóng",
    "AI-Powered Speaking Tutor":"Gia sư Hội thoại AI",
    "Learn Mandarin with AI":"Học Tiếng Trung với AI",
    "HSK 1 Free · HSK 2–9 $9/mo":"HSK 1 Miễn phí · HSK 2–9 $9/tháng",
    "Master Chinese speaking, tones, and character writing with real-time interactive voice grading, stroke order tracing, and personalized review decks.":"Làm chủ kỹ năng nói tiếng Trung, thanh điệu và viết chữ với đánh giá giọng nói tương tác thời gian thực, theo dõi thứ tự nét và thẻ ôn tập cá nhân hóa.",
    "Start Speaking Lesson":"Bắt đầu Bài học Nói","Take Level Test":"Làm Bài Kiểm tra Trình độ",
    "Levels":"Cấp độ","Topics":"Chủ đề","Learners":"Học viên",
    "AI Speaking Tutor":"Gia sư Hội thoại AI",
    "Your Personal Chinese Speaking Teacher":"Giáo viên Tiếng Trung Cá nhân của Bạn",
    "Listen to the AI speak Chinese, then respond by typing Chinese in the text box below.":"Lắng nghe AI nói tiếng Trung, sau đó trả lời bằng cách gõ tiếng Trung vào ô văn bản bên dưới.",
    "Bite-Sized Lessons":"Bài học Ngắn","10-15 Minute Lessons":"Bài học 10-15 Phút",
    "Topics Grid":"Lưới Chủ đề","Study Flashcards":"Thẻ Ghi nhớ",
    "Radical Explorer":"Khám phá Bộ thủ","Common Radicals":"Bộ thủ Thông dụng",
    "Translation & Meaning":"Dịch nghĩa","Example Phrase":"Ví dụ Câu",
    "Prev":"Trước","Next":"Sau","Again":"Lặp lại","Hard":"Khó","Good":"Tốt","Easy":"Dễ",
    "Instant Translation":"Dịch Tức thì","Translate Any Phrase":"Dịch Bất kỳ Cụm từ nào",
    "Translate any language to Chinese with AI. Supports English, Spanish, French, Japanese, Korean, German, Portuguese, Italian, Russian, and Vietnamese.":"Dịch bất kỳ ngôn ngữ nào sang tiếng Trung với AI. Hỗ trợ tiếng Anh, Tây Ban Nha, Pháp, Nhật, Hàn, Đức, Bồ Đào Nha, Ý, Nga và Việt.",
    "Translate":"Dịch","Enter text to translate...":"Nhập văn bản cần dịch...",
    "Speak":"Nói","Copy to Tutor":"Sao chép cho Gia sư",
    "HSK Dictionary":"Từ điển HSK","Browse HSK Vocabulary":"Duyệt Từ vựng HSK",
    "Browse all HSK vocabulary with pinyin and English translations.":"Duyệt tất cả từ vựng HSK kèm pinyin và bản dịch tiếng Anh.",
    "Search characters or pinyin...":"Tìm kiếm chữ hoặc pinyin...",
    "Grammar Deep Dive":"Ngữ pháp Chuyên sâu","Understand Grammar":"Hiểu Ngữ pháp",
    "Level Assessment":"Đánh giá Trình độ","Know Your Level in 5 Minutes":"Biết Trình độ của Bạn trong 5 Phút",
    "Quick Assessment":"Đánh giá Nhanh","10 questions.":"10 câu hỏi.","Start Test":"Bắt đầu Kiểm tra",
    "Retake":"Thi lại","Start Lessons":"Bắt đầu Bài học",
    "HSK Progress":"Tiến độ HSK","9 Levels to Fluency":"9 Cấp độ đến Sự Lưu loát",
    "Today's Progress":"Tiến độ Hôm nay","Words":"Từ","Chars":"Chữ",
    "Spoken":"Đã nói","Reference":"Tham khảo","Your Writing Grid":"Lưới Viết của Bạn",
    "Animate":"Hoạt hình","Quiz":"Bài kiểm tra",
    "Grammar Practice":"Luyện tập Ngữ pháp","Reconstruct the sentence:":"Tái tạo câu:",
    "Reset":"Đặt lại","Check":"Kiểm tra",
    "MandarinCourse Premium":"Cao cấp Khóa học Tiếng Trung","Sign In":"Đăng nhập",
    "Email":"Email","your@email.com":"email@cua-ban.com","Password":"Mật khẩu",
    "Min 6 characters":"Tối thiểu 6 ký tự",
    "Frequently Asked Questions":"Câu hỏi Thường gặp",
    "Learn More About MandarinCourse":"Tìm hiểu Thêm về Khóa học Tiếng Trung",
    "Direct answers about our features, offline compatibility, and pronunciation grading.":"Câu trả lời trực tiếp về các tính năng, khả năng ngoại tuyến và đánh giá phát âm.",
    "Correct":"Đúng","Vocab":"Từ vựng","Time":"Thời gian",
    "Record Accent":"Ghi Âm Giọng","Due Reviews Only":"Chỉ Ôn tập Đến hạn",
    "Reviews due: 0":"Bài ôn tập đến hạn: 0",
    "Outline":"Đường viền","Hint":"Gợi ý",
    "Teaching...":"Đang dạy...","Listening...":"Đang nghe...","Thinking...":"Đang suy nghĩ...",
    "Great!":"Tuyệt vời!","Excellent!":"Xuất sắc!","Good effort!":"Cố gắng tốt!",
    "Keep practicing":"Hãy tiếp tục luyện tập","Getting there":"Sắp tới rồi","Current":"Hiện tại",
    "Listen":"Nghe","Practice":"Luyện tập","See Results":"Xem Kết quả",
    "Initials":"Phụ âm đầu","Finals":"Vần","Four Tones":"Bốn Thanh",
    "Use":"Dùng","Cancel":"Hủy","Roleplay":"Nhập vai","Study":"Học",
    "lessons":"bài học","Your Level:":"Trình độ của bạn:",
    "Lesson Complete!":"Bài học Hoàn thành!","Your turn":"Lượt của bạn","replay":"phát lại",
    "Recording... tap mic to stop":"Đang ghi... chạm mic để dừng",
    "Transcribing...":"Đang phiên âm...","Again (1m)":"Lại (1p)","Hard (12h)":"Khó (12g)",
    "Good (1d)":"Tốt (1n)","Easy (4d)":"Dễ (4n)",
    "Flat (1st Tone)":"Bằng (Thanh 1)","Rising (2nd Tone)":"Lên (Thanh 2)",
    "Dipping (3rd Tone)":"Xuống (Thanh 3)","Falling (4th Tone)":"Rơi (Thanh 4)",
    "Practice:":"Luyện:","Reviews due: ":"Ôn tập: ","None":"Không",
    "Progress updated!":"Tiến độ đã cập nhật!","Speaking speed: ":"Tốc độ nói: ",
    "Correct! Well done!":"Đúng! Làm tốt lắm!","Incorrect. Try again!":"Sai! Thử lại!",
    "type below":"gõ bên dưới","speaking":"đang nói","lines":"dòng","Listen to":"Nghe",
    "Live AI":"AI Trực tiếp","Simulated":"Mô phỏng","Live AI Mode:":"Chế độ AI Trực tiếp:",
    "No audio recorded. Try again.":"Không có âm thanh nào được ghi. Thử lại.",
    "No speech detected":"Không phát hiện giọng nói",
    "Mic Error":"Lỗi Mic","Try text box":"Dùng hộp văn bản",
    "Avg":"TB","Study":"Học",
    "Select a lesson to begin":"Chọn một bài học để bắt đầu",
    "Select a lesson above":"Chọn một bài học ở trên",
    "Select another lesson above to continue.":"Chọn bài học khác ở trên để tiếp tục.",
    "Current":"Hiện tại","Next":"Tiếp","See Results":"Xem Kết quả",
    "pts":"đ","Score:":"Điểm:","/100":"/100","/10":"/10",
    "Average:":"Trung bình:","items":"mục","lessons":"bài học",
    "Click to view vocabulary":"Nhấn để xem từ vựng",
    "Vocab List":"Danh sách Từ vựng",
    "Perfect starting point!":"Điểm khởi đầu hoàn hảo!",
    "Ready for HSK 2!":"Sẵn sàng cho HSK 2!",
    "Solid HSK 3 foundation!":"Nền tảng HSK 3 vững chắc!",
    "Connecting to Gemini to chat about":"Đang kết nối Gemini để nói về",
    "Select a tone below to practice":"Chọn một thanh điệu bên dưới để luyện",
    "Tone Pitch Visualizer":"Trực quan Cao độ Thanh điệu",
    "Pitch curve plots here":"Đường cong cao độ hiển thị tại đây",
    "Speak to visualize tone":"Nói để trực quan hóa thanh điệu",
    "Analysis complete. Choose another tone to test!":"Phân tích hoàn tất. Chọn thanh điệu khác để kiểm tra!",
    "Hum/Speak now...":"Ngân/Nói ngay...",
    "Auto-switching to recording...":"Tự động chuyển sang ghi âm...",
    "Matched transcript:":"Bản ghi khớp:",
    "Heard: ":"Đã nghe: ",
    "Transcribing audio...":"Đang phiên âm âm thanh...",
    "Transcription error: ":"Lỗi phiên âm: ",
    "Error:":"Lỗi:",
    "Cancelled - tap mic to try again":"Đã hủy - chạm mic để thử lại",
    "Cancelled. Tap mic to speak again.":"Đã hủy. Chạm mic để nói lại.",
    "Type Chinese below or press mic":"Gõ tiếng Trung bên dưới hoặc nhấn mic",
    "Type Chinese characters first":"Gõ chữ Trung trước",
    "Type your response in the box below":"Gõ câu trả lời của bạn vào ô bên dưới",
    "Type or speak Chinese here - e.g. 你好":"Gõ hoặc nói tiếng Trung tại đây - vd: 你好",
    "Mic access denied. Use text box.":"Từ chối mic. Dùng hộp văn bản.",
    "Mic denied. Type instead.":"Mic bị từ chối. Hãy gõ thay thế.",
    "Mic Denied: Tap aA (or settings icon) in Safari address bar → Website Settings → Set Microphone to Allow → Reload page.":"Mic Bị Từ Chối: Nhấn aA trong thanh địa chỉ Safari → Cài đặt Trang → Đặt Mic thành Cho phép → Tải lại trang.",
    "Process audio...":"Xử lý âm thanh...",
    "Processing audio...":"Đang xử lý âm thanh...",
    "Rate limited, retrying in ":"Giới hạn tốc độ, thử lại trong ","s...":"giây...",
    "Your browser does not support microphone input. Use the text box instead.":"Trình duyệt không hỗ trợ mic. Dùng hộp văn bản.",
    "Listening... Speak in Mandarin":"Đang nghe... Nói tiếng Trung",
    "Settings Saved! Mode: ":"Đã lưu Cài đặt! Chế độ: ",
    "Transcription failed. Try typing.":"Phiên âm thất bại. Hãy gõ.",
    "No speech detected — tap mic and speak clearly":"Không phát hiện giọng nói — chạm mic và nói rõ ràng",
    "First Meeting":"Gặp gỡ Đầu tiên",
    "Select a lesson above and respond by typing Chinese.":"Chọn bài học ở trên và trả lời bằng cách gõ tiếng Trung.",
    "Current Phrase":"Cụm từ Hiện tại",
    "click card again to close":"nhấn thẻ lại để đóng"
  },
  "ja": {
    "Tutor":"チューター","Lessons":"レッスン","Grammar":"文法","Dict":"辞書","Trans":"翻訳","Test":"テスト","Progress":"進捗",
    "AI Tutor":"AIチューター","Dictionary":"辞書","Level Test":"レベルテスト",
    "MandarinCourse":"中国語コース","Settings":"設定",
    "Cloud Account & Sync":"アカウントと同期","Sign In / Register":"ログイン / 登録",
    "Sync Progress":"進捗を同期","Sign Out":"ログアウト",
    "AI Speaking Speed":"AIの話す速度","Normal Speed (1.0x)":"通常速度 (1.0x)",
    "Slower (0.8x)":"遅い (0.8x)","Slowest (0.7x)":"最も遅い (0.7x)",
    "Tutor Mode":"チューターモード","Simulated Mode (HSK static lessons)":"シミュレーションモード（HSK固定レッスン）",
    "Live AI Mode (Dynamic conversations)":"ライブAIモード（動的会話）",
    "App Language (Translations)":"アプリ言語（翻訳）",
    "Study Reminders":"学習リマインダー","No Reminders":"リマインダーなし",
    "Every Day (Daily)":"毎日","Every Week (Weekly)":"毎週",
    "Save Reminder Schedule":"スケジュールを保存","Close":"閉じる",
    "AI-Powered Speaking Tutor":"AI搭載スピーキングチューター",
    "Learn Mandarin with AI":"AIで中国語を学ぶ",
    "HSK 1 Free · HSK 2–9 $9/mo":"HSK 1 無料 · HSK 2–9 $9/月",
    "Master Chinese speaking, tones, and character writing with real-time interactive voice grading, stroke order tracing, and personalized review decks.":"リアルタイムの音声評価、筆順トレース、パーソナライズされた復習デッキで中国語の会話、声調、文字書きをマスターしましょう。",
    "Start Speaking Lesson":"レッスンを開始","Take Level Test":"レベルテストを受ける",
    "Levels":"レベル","Topics":"トピック","Learners":"学習者",
    "AI Speaking Tutor":"AIスピーキングチューター",
    "Your Personal Chinese Speaking Teacher":"あなただけの中国語教師",
    "Listen to the AI speak Chinese, then respond by typing Chinese in the text box below.":"AIが中国語を話すのを聞いて、下のテキストボックスに中国語を入力して応答してください。",
    "Bite-Sized Lessons":"短時間レッスン","10-15 Minute Lessons":"10〜15分のレッスン",
    "Topics Grid":"トピックグリッド","Study Flashcards":"フラッシュカード",
    "Radical Explorer":"部首エクスプローラー","Common Radicals":"よく使う部首",
    "Translation & Meaning":"翻訳と意味","Example Phrase":"例文",
    "Prev":"前へ","Next":"次へ","Again":"もう一度","Hard":"難しい","Good":"良い","Easy":"簡単",
    "Instant Translation":" instant翻訳","Translate Any Phrase":"どんなフレーズも翻訳",
    "Translate any language to Chinese with AI. Supports English, Spanish, French, Japanese, Korean, German, Portuguese, Italian, Russian, and Vietnamese.":"AIを使ってあらゆる言語を中国語に翻訳。英語、スペイン語、フランス語、日本語、韓国語、ドイツ語、ポルトガル語、イタリア語、ロシア語、ベトナム語に対応。",
    "Translate":"翻訳","Enter text to translate...":"翻訳するテキストを入力...",
    "Speak":"話す","Copy to Tutor":"チューターにコピー",
    "HSK Dictionary":"HSK辞書","Browse HSK Vocabulary":"HSK語彙を閲覧",
    "Browse all HSK vocabulary with pinyin and English translations.":"ピンインと英語訳付きの全HSK語彙を閲覧できます。",
    "Search characters or pinyin...":"漢字またはピンインを検索...",
    "Grammar Deep Dive":"文法を深く学ぶ","Understand Grammar":"文法を理解する",
    "Level Assessment":"レベル診断","Know Your Level in 5 Minutes":"5分であなたのレベルを診断",
    "Quick Assessment":"クイック診断","10 questions.":"10問。","Start Test":"テスト開始",
    "Retake":"再受験","Start Lessons":"レッスンを開始",
    "HSK Progress":"HSK進捗","9 Levels to Fluency":"9レベルで流暢に",
    "Today's Progress":"今日の進捗","Words":"単語","Chars":"文字",
    "Spoken":"発話","Reference":"参考","Your Writing Grid":"あなたの書き方グリッド",
    "Animate":"アニメーション","Quiz":"クイズ",
    "Grammar Practice":"文法練習","Reconstruct the sentence:":"文を再構築してください：",
    "Reset":"リセット","Check":"確認",
    "MandarinCourse Premium":"プレミアム中国語コース","Sign In":"ログイン",
    "Email":"メール","your@email.com":"your@email.com","Password":"パスワード",
    "Min 6 characters":"6文字以上",
    "Frequently Asked Questions":"よくある質問",
    "Learn More About MandarinCourse":"中国語コースの詳細",
    "Direct answers about our features, offline compatibility, and pronunciation grading.":"機能、オフライン対応、発音評価についての直接的な回答。",
    "Correct":"正解","Vocab":"語彙","Time":"時間",
    "Record Accent":"アクセント録音","Due Reviews Only":"復習予定のみ",
    "Reviews due: 0":"復習予定: 0",
    "Outline":"輪郭","Hint":"ヒント",
    "Teaching...":"教え中...","Listening...":"聴き中...","Thinking...":"考え中...",
    "Great!":"素晴らしい！","Excellent!":"優秀！","Good effort!":"よく頑張りました！",
    "Keep practicing":"練習を続けてください","Getting there":"もう少し","Current":"現在",
    "Listen":"聞く","Practice":"練習","See Results":"結果を見る",
    "Initials":"声母","Finals":"韻母","Four Tones":"四声",
    "Use":"使用","Cancel":"キャンセル","Roleplay":"ロールプレイ","Study":"学習",
    "lessons":"レッスン","Your Level:":"あなたのレベル：",
    "Lesson Complete!":"レッスン完了！","Your turn":"あなたの番です","replay":"再生",
    "Recording... tap mic to stop":"録音中...マイクをタップして停止",
    "Transcribing...":"文字起こし中...","Again (1m)":"もう一度(1分)","Hard (12h)":"難しい(12時間)",
    "Good (1d)":"良い(1日)","Easy (4d)":"簡単(4日)",
    "Flat (1st Tone)":"平ら(第1声)","Rising (2nd Tone)":"上昇(第2声)",
    "Dipping (3rd Tone)":"下降(第3声)","Falling (4th Tone)":"急降下(第4声)",
    "Practice:":"練習：","Reviews due: ":"復習予定：","None":"なし",
    "Progress updated!":"進捗を更新しました！","Speaking speed: ":"再生速度：",
    "Correct! Well done!":"正解！よくできました！","Incorrect. Try again!":"不正解。もう一度！",
    "type below":"以下に入力","speaking":"話し中","lines":"行","Listen to":"聞く",
    "Live AI":"ライブAI","Simulated":"シミュレーション","Live AI Mode:":"ライブAIモード：",
    "No audio recorded. Try again.":"音声が記録されていません。もう一度お試しください。",
    "No speech detected":"音声が検出されませんでした",
    "Mic Error":"マイクエラー","Try text box":"テキストボックスを使用",
    "Avg":"平均","Select a lesson to begin":"レッスンを選択して開始",
    "Select a lesson above":"上のレッスンを選択","Current":"現在","Next":"次へ",
    "pts":"点","Score:":"スコア：","/100":"/100","/10":"/10",
    "Average:":"平均：","items":"項目","Click to view vocabulary":"クリックして語彙を見る",
    "Vocab List":"語彙リスト","Perfect starting point!":"完璧な出発点！",
    "Ready for HSK 2!":"HSK 2の準備完了！",
    "Solid HSK 3 foundation!":"確かなHSK 3の基礎！",
    "Select another lesson above to continue.":"続けるには上の別のレッスンを選択してください。",
    "Connecting to Gemini to chat about":"Geminiに接続中：",
    "Type Chinese below or press mic":"下に中国語を入力するかマイクを押す",
    "Type Chinese characters first":"最初に中国語の文字を入力",
    "Type your response in the box below":"下のボックスに回答を入力",
    "Type or speak Chinese here - e.g. 你好":"ここに中国語を入力または話す - 例：你好",
    "Mic access denied. Use text box.":"マイクが拒否されました。テキストボックスを使用。",
    "Mic denied. Type instead.":"マイク拒否。代わりに入力。",
    "Processing audio...":"音声処理中...",
    "Transcription failed. Try typing.":"文字起こし失敗。入力をお試しください。",
    "No speech detected — tap mic and speak clearly":"音声未検出 — マイクをタップしてはっきり話す",
    "Transcribing audio...":"音声文字起こし中...",
    "Transcription error: ":"文字起こしエラー：",
    "Error:":"エラー：",
    "Heard: ":"聞いた内容：",
    "Rate limited, retrying in ":"レート制限、","s...":"秒後に再試行...",
    "Auto-switching to recording...":"録音に自動切り替え...",
    "Matched transcript:":"一致した文字起こし：",
    "Cancelled - tap mic to try again":"キャンセル - マイクをタップして再試行",
    "Cancelled. Tap mic to speak again.":"キャンセル。マイクをタップしてもう一度話す。",
    "Your browser does not support microphone input. Use the text box instead.":"お使いのブラウザはマイク入力をサポートしていません。代わりにテキストボックスを使用。",
    "Listening... Speak in Mandarin":"聴き中...中国語で話す",
    "Settings Saved! Mode: ":"設定を保存！モード：",
    "Hum/Speak now...":"ハミング/話す...",
    "Analysis complete. Choose another tone to test!":"分析完了。別の声調をテスト！",
    "Select a tone below to practice":"練習する声調を選択",
    "Tone Pitch Visualizer":"声調ピッチ可視化",
    "Pitch curve plots here":"ピッチ曲線はここに表示",
    "Speak to visualize tone":"話して声調を可視化",
    "First Meeting":"初対面",
    "Select a lesson above and respond by typing Chinese.":"上のレッスンを選択し、中国語を入力して応答。",
    "Current Phrase":"現在のフレーズ",
    "click card again to close":"もう一度カードをクリックして閉じる",
    "Mic Denied: Tap aA (or settings icon) in Safari address bar → Website Settings → Set Microphone to Allow → Reload page.":"マイク拒否：SafariアドレスバーのaAをタップ→サイト設定→マイクを許可→ページを再読み込み。"
  },
  "ko": {
    "Tutor":"튜터","Lessons":"레슨","Grammar":"문법","Dict":"사전","Trans":"번역","Test":"테스트","Progress":"진행도",
    "AI Tutor":"AI 튜터","Dictionary":"사전","Level Test":"레벨 테스트",
    "MandarinCourse":"중국어 코스","Settings":"설정",
    "Cloud Account & Sync":"계정 및 동기화","Sign In / Register":"로그인 / 회원가입",
    "Sync Progress":"진행도 동기화","Sign Out":"로그아웃",
    "AI Speaking Speed":"AI 말하기 속도","Normal Speed (1.0x)":"보통 속도 (1.0x)",
    "Slower (0.8x)":"느리게 (0.8x)","Slowest (0.7x)":"가장 느리게 (0.7x)",
    "Tutor Mode":"튜터 모드","Simulated Mode (HSK static lessons)":"시뮬레이션 모드 (HSK 고정 레슨)",
    "Live AI Mode (Dynamic conversations)":"라이브 AI 모드 (동적 대화)",
    "App Language (Translations)":"앱 언어 (번역)",
    "Study Reminders":"학습 알림","No Reminders":"알림 없음",
    "Every Day (Daily)":"매일","Every Week (Weekly)":"매주",
    "Save Reminder Schedule":"일정 저장","Close":"닫기",
    "AI-Powered Speaking Tutor":"AI 기반 회화 튜터",
    "Learn Mandarin with AI":"AI로 중국어 배우기",
    "HSK 1 Free · HSK 2–9 $9/mo":"HSK 1 무료 · HSK 2–9 $9/월",
    "Master Chinese speaking, tones, and character writing with real-time interactive voice grading, stroke order tracing, and personalized review decks.":"실시간 음성 평가, 필순 추적, 맞춤형 복습 카드로 중국어 회화, 성조, 한자 쓰기를 마스터하세요.",
    "Start Speaking Lesson":"회화 레슨 시작","Take Level Test":"레벨 테스트 보기",
    "Levels":"레벨","Topics":"주제","Learners":"학습자",
    "AI Speaking Tutor":"AI 회화 튜터",
    "Your Personal Chinese Speaking Teacher":"당신의 개인 중국어 선생님",
    "Listen to the AI speak Chinese, then respond by typing Chinese in the text box below.":"AI가 중국어로 말하는 것을 듣고, 아래 텍스트 상자에 중국어를 입력하여 응답하세요.",
    "Bite-Sized Lessons":"짧은 레슨","10-15 Minute Lessons":"10-15분 레슨",
    "Topics Grid":"주제 그리드","Study Flashcards":"플래시카드",
    "Radical Explorer":"부수 탐험","Common Radicals":"자주 쓰는 부수",
    "Translation & Meaning":"번역 및 의미","Example Phrase":"예문",
    "Prev":"이전","Next":"다음","Again":"다시","Hard":"어려움","Good":"좋음","Easy":"쉬움",
    "Instant Translation":"즉시 번역","Translate Any Phrase":"모든 문장 번역",
    "Translate any language to Chinese with AI. Supports English, Spanish, French, Japanese, Korean, German, Portuguese, Italian, Russian, and Vietnamese.":"AI로 모든 언어를 중국어로 번역하세요. 영어, 스페인어, 프랑스어, 일본어, 한국어, 독일어, 포르투갈어, 이탈리아어, 러시아어, 베트남어를 지원합니다.",
    "Translate":"번역","Enter text to translate...":"번역할 텍스트 입력...",
    "Speak":"말하기","Copy to Tutor":"튜터에게 복사",
    "HSK Dictionary":"HSK 사전","Browse HSK Vocabulary":"HSK 어휘 찾아보기",
    "Browse all HSK vocabulary with pinyin and English translations.":"병음과 영어 번역이 포함된 모든 HSK 어휘를 찾아보세요.",
    "Search characters or pinyin...":"한자 또는 병음 검색...",
    "Grammar Deep Dive":"문법 심층 학습","Understand Grammar":"문법 이해하기",
    "Level Assessment":"레벨 평가","Know Your Level in 5 Minutes":"5분 안에 당신의 레벨을 알아보세요",
    "Quick Assessment":"빠른 평가","10 questions.":"10문제.","Start Test":"테스트 시작",
    "Retake":"재응시","Start Lessons":"레슨 시작",
    "HSK Progress":"HSK 진행도","9 Levels to Fluency":"9레벨로 유창하게",
    "Today's Progress":"오늘의 진행도","Words":"단어","Chars":"글자",
    "Spoken":"말하기","Reference":"참조","Your Writing Grid":"필기 그리드",
    "Animate":"애니메이션","Quiz":"퀴즈",
    "Grammar Practice":"문법 연습","Reconstruct the sentence:":"문장을 재구성하세요:",
    "Reset":"초기화","Check":"확인",
    "MandarinCourse Premium":"프리미엄 중국어 코스","Sign In":"로그인",
    "Email":"이메일","your@email.com":"your@email.com","Password":"비밀번호",
    "Min 6 characters":"최소 6자",
    "Frequently Asked Questions":"자주 묻는 질문",
    "Learn More About MandarinCourse":"중국어 코스 자세히 알아보기",
    "Direct answers about our features, offline compatibility, and pronunciation grading.":"기능, 오프라인 호환성 및 발음 평가에 대한 직접적인 답변.",
    "Correct":"정답","Vocab":"어휘","Time":"시간",
    "Record Accent":"발음 녹음","Due Reviews Only":"복습 예정만",
    "Reviews due: 0":"복습 예정: 0",
    "Outline":"외곽선","Hint":"힌트",
    "Teaching...":"가르치는 중...","Listening...":"듣는 중...","Thinking...":"생각 중...",
    "Great!":"훌륭합니다!","Excellent!":"최고입니다!","Good effort!":"잘했어요!",
    "Keep practicing":"계속 연습하세요","Getting there":"거의 다 됐어요","Current":"현재",
    "Listen":"듣기","Practice":"연습","See Results":"결과 보기",
    "Initials":"성모","Finals":"운모","Four Tones":"사성",
    "Use":"사용","Cancel":"취소","Roleplay":"역할극","Study":"학습",
    "lessons":"레슨","Your Level:":"당신의 레벨:",
    "Lesson Complete!":"레슨 완료!","Your turn":"당신 차례입니다","replay":"다시 듣기",
    "Recording... tap mic to stop":"녹음 중... 마이크를 눌러 중지",
    "Transcribing...":"변환 중...","Again (1m)":"다시(1분)","Hard (12h)":"어려움(12시간)",
    "Good (1d)":"좋음(1일)","Easy (4d)":"쉬움(4일)",
    "Flat (1st Tone)":"평성(1성)","Rising (2nd Tone)":"상성(2성)",
    "Dipping (3rd Tone)":"거성(3성)","Falling (4th Tone)":"입성(4성)",
    "Practice:":"연습:","Reviews due: ":"복습 예정: ","None":"없음",
    "Progress updated!":"진도가 업데이트되었습니다!","Speaking speed: ":"말하기 속도: ",
    "Correct! Well done!":"정답! 잘했습니다!","Incorrect. Try again!":"틀렸습니다. 다시 시도하세요!",
    "type below":"아래에 입력","speaking":"말하는 중","lines":"줄","Listen to":"듣기",
    "Live AI":"라이브 AI","Simulated":"시뮬레이션","Live AI Mode:":"라이브 AI 모드:",
    "No audio recorded. Try again.":"녹음된 오디오가 없습니다. 다시 시도하세요.",
    "No speech detected":"음성이 감지되지 않음",
    "Mic Error":"마이크 오류","Try text box":"텍스트 상자 사용",
    "Avg":"평균","Select a lesson to begin":"레슨을 선택하여 시작",
    "Select a lesson above":"위의 레슨 선택","Current":"현재","Next":"다음",
    "pts":"점","Score:":"점수:","/100":"/100","/10":"/10",
    "Average:":"평균:","items":"항목","Click to view vocabulary":"클릭하여 어휘 보기",
    "Vocab List":"어휘 목록","Perfect starting point!":"완벽한 시작점!",
    "Ready for HSK 2!":"HSK 2 준비 완료!",
    "Solid HSK 3 foundation!":"탄탄한 HSK 3 기초!",
    "Select another lesson above to continue.":"계속하려면 위에서 다른 레슨을 선택하세요.",
    "Connecting to Gemini to chat about":"Gemini에 연결 중:",
    "Type Chinese below or press mic":"아래에 중국어 입력 또는 마이크 누름",
    "Type Chinese characters first":"먼저 중국어 입력","Type your response in the box below":"아래 상자에 답변 입력",
    "Type or speak Chinese here - e.g. 你好":"여기에 중국어 입력 또는 말하기 - 예: 你好",
    "Mic access denied. Use text box.":"마이크 접근 거부됨. 텍스트 상자 사용.",
    "Mic denied. Type instead.":"마이크 거부됨. 대신 입력.",
    "Processing audio...":"오디오 처리 중...",
    "Transcription failed. Try typing.":"변환 실패. 입력해 보세요.",
    "No speech detected — tap mic and speak clearly":"음성 미감지 — 마이크를 탭하고 또렷이 말하세요",
    "Transcribing audio...":"오디오 변환 중...","Transcription error: ":"변환 오류: ",
    "Error:":"오류:","Heard: ":"들음: ",
    "Rate limited, retrying in ":"속도 제한, ","s...":"초 후 재시도...",
    "Auto-switching to recording...":"자동으로 녹음 전환...",
    "Matched transcript:":"일치하는 변환:",
    "Cancelled - tap mic to try again":"취소됨 - 마이크를 탭하여 다시 시도",
    "Cancelled. Tap mic to speak again.":"취소됨. 마이크를 탭하여 다시 말하기.",
    "Your browser does not support microphone input. Use the text box instead.":"브라우저가 마이크 입력을 지원하지 않습니다. 텍스트 상자를 사용하세요.",
    "Listening... Speak in Mandarin":"듣는 중... 중국어로 말하세요",
    "Settings Saved! Mode: ":"설정 저장됨! 모드: ",
    "Hum/Speak now...":"흥얼거리기/말하기...",
    "Analysis complete. Choose another tone to test!":"분석 완료. 테스트할 성조를 선택하세요!",
    "Select a tone below to practice":"연습할 성조를 선택",
    "Tone Pitch Visualizer":"성조 피치 시각화",
    "Pitch curve plots here":"피치 곡선이 여기에 표시됩니다",
    "Speak to visualize tone":"말하여 성조 시각화",
    "First Meeting":"첫 만남",
    "Select a lesson above and respond by typing Chinese.":"위의 레슨을 선택하고 중국어를 입력하여 응답하세요.",
    "Current Phrase":"현재 구문",
    "click card again to close":"카드를 다시 클릭하여 닫기",
    "Mic Denied: Tap aA (or settings icon) in Safari address bar → Website Settings → Set Microphone to Allow → Reload page.":"마이크 거부: Safari 주소 표시줄의 aA 탭 → 사이트 설정 → 마이크를 허용으로 설정 → 페이지 새로고침."
  }
};

function t(englishString) {
  if (englishString == null) return '';
  englishString = String(englishString);
  if (!englishString) return '';
  if (currentAppLang === 'en') return englishString;
  const dict = OFFLINE_DICTIONARY[currentAppLang];
  if (dict && dict[englishString]) {
    return dict[englishString];
  }
  if (dict) {
    const cleanStr = englishString.replace(/[."']/g, "").trim();
    for (let key in dict) {
      if (key.replace(/[."']/g, "").trim().toLowerCase() === cleanStr.toLowerCase()) {
        return dict[key];
      }
    }
  }
  return englishString;
}



if (typeof HSK_EXTRA !== 'undefined' && typeof HSK_WORDS !== 'undefined') {
  for (const w of HSK_EXTRA) HSK_WORDS.push({l:w[0],c:w[1],p:w[2],e:w[3]});
}
const TL=[
...(typeof MORE_TUTOR_LESSONS !== 'undefined' ? MORE_TUTOR_LESSONS : []),
...(typeof EXTRA_TUTOR_LESSONS !== 'undefined' ? EXTRA_TUTOR_LESSONS : []),
{title:"Basic Greetings",level:"HSK 1",icon:"fa-hand-peace",
words:[
{cn:"你好",py:"nǐ hǎo",en:"Hello",tip:"The most common Chinese greeting. Use it anytime."},
{cn:"你好吗",py:"nǐ hǎo ma",en:"How are you?",tip:"Add 吗 to make any statement a yes/no question."},
{cn:"我很好",py:"wǒ hěn hǎo",en:"I'm very good",tip:"很 links subject and adjective here."},
{cn:"谢谢",py:"xiè xie",en:"Thank you",tip:"Soft 'x' — like a gentle 'sh'."},
{cn:"不客气",py:"bú kè qi",en:"You're welcome",tip:"Literally 'don't be polite'."},
{cn:"再见",py:"zài jiàn",en:"Goodbye",tip:"Literally 'again meet' — see you!"}
],
dialogue:[
{who:"bot",cn:"你好！",en:"Hello!"},
{who:"you",cn:"你好！",en:"Hello!"},
{who:"bot",cn:"你好吗？",en:"How are you?"},
{who:"you",cn:"我很好，谢谢！你呢？",en:"I'm very good, thanks! And you?"},
{who:"bot",cn:"我也很好。你最近忙不忙？",en:"I'm also very good. Have you been busy lately?"},
{who:"you",cn:"我很忙，学习很多。",en:"I am very busy, studying a lot."},
{who:"bot",cn:"太辛苦了！你要多休息。",en:"That's too hard! You should rest more."},
{who:"you",cn:"好的，谢谢老师。",en:"Okay, thank you teacher."},
{who:"bot",cn:"不客气。今天就到这里，再见！",en:"You're welcome. That's all for today, goodbye!"},
{who:"you",cn:"老师再见！",en:"Goodbye teacher!"}
]},
{title:"Numbers & Counting",level:"HSK 1",icon:"fa-calculator",
words:[
{cn:"数字",py:"shù zì",en:"Number / digit",tip:"数=count, 字=character."},
{cn:"一二三",py:"yī èr sān",en:"One, two, three",tip:"The first three numbers in Chinese."},
{cn:"多少",py:"duō shǎo",en:"How many / how much",tip:"多=many, 少=few. Together = quantity."},
{cn:"个",py:"gè",en:"Measure word",tip:"The general measure word for people/things."},
{cn:"百",py:"bǎi",en:"Hundred",tip:"Used for counting hundreds (e.g. 一百 = 100)."},
{cn:"两",py:"liǎng",en:"Two (quantity)",tip:"Use 两 instead of 二 before measure words."}
],
dialogue:[
{who:"bot",cn:"你好！请问你有几个苹果？",en:"Hello! How many apples do you have?"},
{who:"you",cn:"我有三个苹果。",en:"I have three apples."},
{who:"bot",cn:"很好！那这里有多少个人？",en:"Very good! Then how many people are here?"},
{who:"you",cn:"这里有五个人。",en:"There are five people here."},
{who:"bot",cn:"对。那你有多少钱？",en:"Correct. Then how much money do you have?"},
{who:"you",cn:"我有两百块钱。",en:"I have two hundred yuan."},
{who:"bot",cn:"两百块可以买很多书。你想买书吗？",en:"Two hundred yuan can buy many books. Do you want to buy books?"},
{who:"you",cn:"我想买，一本书多少钱？",en:"I want to buy, how much is one book?"},
{who:"bot",cn:"一本书十块钱。两百块可以买二十本。",en:"One book is ten yuan. Two hundred yuan can buy twenty books."},
{who:"you",cn:"太好了，谢谢你告诉我！",en:"Great, thank you for telling me!"}
]},
{title:"Introducing Family",level:"HSK 1",icon:"fa-people-roof",
words:[
{cn:"爸爸",py:"bà ba",en:"Dad",tip:"Informal term for father."},
{cn:"妈妈",py:"mā ma",en:"Mom",tip:"Informal term for mother."},
{cn:"家",py:"jiā",en:"Family / home",tip:"Both family and physical home."},
{cn:"有",py:"yǒu",en:"To have / exist",tip:"Negated with 没 (e.g. 没有)."},
{cn:"女儿",py:"nǚ 'ér",en:"Daughter",tip:"女=female, 儿=child."},
{cn:"儿子",py:"ér zi",en:"Son",tip:"儿=child, 子=noun suffix."}
],
dialogue:[
{who:"bot",cn:"你家有几个人？",en:"How many people in your family?"},
{who:"you",cn:"我家有四个人。",en:"There are four people in my family."},
{who:"bot",cn:"他们都是谁？",en:"Who are they?"},
{who:"you",cn:"爸爸，妈妈，一个姐姐和我。",en:"Dad, mom, an older sister, and me."},
{who:"bot",cn:"你姐姐工作了吗？",en:"Does your older sister work?"},
{who:"you",cn:"她没有工作，她是学生。",en:"She doesn't work, she is a student."},
{who:"bot",cn:"你爸爸妈妈做什么工作？",en:"What do your dad and mom do for work?"},
{who:"you",cn:"我爸爸是医生，我妈妈是老师。",en:"My dad is a doctor, my mom is a teacher."},
{who:"bot",cn:"真好！你有女儿和儿子吗？",en:"Great! Do you have a daughter and a son?"},
{who:"you",cn:"我没有，我还没结婚呢。",en:"I don't have, I'm not married yet."}
]},
{title:"At the Restaurant",level:"HSK 2",icon:"fa-utensils",
words:[
{cn:"菜单",py:"cài dān",en:"Menu",tip:"菜=dish, 单=list. Food list = menu."},
{cn:"吃",py:"chī",en:"To eat",tip:"The action of consuming solid food."},
{cn:"点菜",py:"diǎn cài",en:"Order food",tip:"点=select/order, 菜=dish."},
{cn:"米饭",py:"mǐ fàn",en:"Cooked rice",tip:"米=raw rice, 饭=cooked meal."},
{cn:"喝",py:"hē",en:"To drink",tip:"Used for beverages/soups."},
{cn:"买单",py:"mǎi dān",en:"Pay the bill",tip:"Literally 'buy the list'."}
],
dialogue:[
{who:"bot",cn:"服务员，请拿一下菜单。",en:"Waiter, please bring the menu."},
{who:"you",cn:"好的，请问你们现在点菜吗？",en:"Okay, are you ready to order now?"},
{who:"bot",cn:"我想吃面条。这里什么面最好吃？",en:"I want to eat noodles. Which noodles are the most delicious here?"},
{who:"you",cn:"我们的牛肉面非常有名，很好吃。",en:"Our beef noodles are very famous and delicious."},
{who:"bot",cn:"好，那我要一碗牛肉面，再要一碗米饭。",en:"Good, then I want a bowl of beef noodles, and another bowl of rice."},
{who:"you",cn:"好的。请问你们要喝点什么吗？",en:"Okay. Would you like something to drink?"},
{who:"bot",cn:"我要一杯冰水，谢谢。",en:"I want a cup of ice water, thank you."},
{who:"you",cn:"没问题，请稍等，菜马上来。",en:"No problem, please wait a moment, the food will be served shortly."},
{who:"bot",cn:"服务员，买单！一共多少钱？",en:"Waiter, check please! How much is it in total?"},
{who:"you",cn:"一共两百块钱。谢谢光临！",en:"Two hundred yuan in total. Thank you for coming!"}
]},
{title:"Shopping & Prices",level:"HSK 2",icon:"fa-cart-shopping",
words:[
{cn:"商店",py:"shāng diàn",en:"Store / shop",tip:"商=commerce, 店=shop."},
{cn:"衣服",py:"yī fu",en:"Clothes",tip:"General term for garments."},
{cn:"贵",py:"guì",en:"Expensive",tip:"Used to describe high prices."},
{cn:"便宜",py:"pián yi",en:"Cheap / inexpensive",tip:"Opposite of 贵."},
{cn:"买",py:"mǎi",en:"To buy",tip:"Third tone. Do not confuse with 卖 (mài = to sell)."},
{cn:"试",py:"shì",en:"To try on / test",tip:"Verb for testing clothes or trying them."}
],
dialogue:[
{who:"bot",cn:"你好！你想买什么衣服？",en:"Hello! What clothes do you want to buy?"},
{who:"you",cn:"我想买一件红色的外套。",en:"I want to buy a red coat."},
{who:"bot",cn:"你看这件外套怎么样？非常漂亮。",en:"Look at this coat, how is it? Very beautiful."},
{who:"you",cn:"这件很漂亮，但是有点贵。多少钱？",en:"This is very beautiful, but a bit expensive. How much?"},
{who:"bot",cn:"这件四百块钱，现在打折，三百块。",en:"This is four hundred yuan, now on sale for three hundred."},
{who:"you",cn:"可以便宜一点吗？两百五十块可以吗？",en:"Can it be a bit cheaper? Is two hundred and fifty okay?"},
{who:"bot",cn:"好吧，给你两百五十块。你想试一下吗？",en:"Okay, you can have it for two hundred and fifty. Do you want to try it on?"},
{who:"you",cn:"好的，我去试衣间试一下。",en:"Okay, I will go to the fitting room to try it on."},
{who:"bot",cn:"非常合适！给你打包好吗？",en:"Very suitable! Shall I pack it for you?"},
{who:"you",cn:"好的，买单，给你钱！",en:"Okay, checkout, here is the money!"}
]},
{title:"Hobbies & Sports",level:"HSK 2",icon:"fa-basketball",
words:[
{cn:"运动",py:"yùn dòng",en:"Sports / exercise",tip:"运=move, 动=action."},
{cn:"唱歌",py:"chàng gē",en:"To sing",tip:"唱=sing(v), 歌=song(n)."},
{cn:"打篮球",py:"dǎ lán qiú",en:"Play basketball",tip:"打=hit/play, 篮球=basketball."},
{cn:"踢足球",py:"tī zú qiú",en:"Play soccer",tip:"踢=kick, 足球=football."},
{cn:"听音乐",py:"tīng yīn yuè",en:"Listen to music",tip:"听=hear/listen, 音乐=music."},
{cn:"电影",py:"diàn yǐng",en:"Movie / film",tip:"Literally 'electric shadow'."}
],
dialogue:[
{who:"bot",cn:"你周末喜欢做什么？",en:"What do you like to do on weekends?"},
{who:"you",cn:"我喜欢在家里听音乐和看电影。",en:"I like listening to music and watching movies at home."},
{who:"bot",cn:"你喜欢运动吗？比如打篮球？",en:"Do you like sports? For example, playing basketball?"},
{who:"you",cn:"我不喜欢打篮球，我喜欢踢足球。",en:"I don't like playing basketball, I like playing soccer."},
{who:"bot",cn:"太好了！我星期六去踢足球，你想一起去吗？",en:"Great! I am going to play soccer on Saturday, do you want to join?"},
{who:"you",cn:"真的吗？我也想去！几点开始？",en:"Really? I want to go too! What time does it start?"},
{who:"bot",cn:"下午三点在学校操场集合。",en:"Meet at the school playground at 3:00 PM."},
{who:"you",cn:"没问题，我一定准时到。",en:"No problem, I will definitely arrive on time."},
{who:"bot",cn:"踢完足球我们还可以去唱歌，怎么样？",en:"After playing soccer we can also go sing karaoke, how about that?"},
{who:"you",cn:"太棒了，我很期待！",en:"Excellent, I look forward to it!"}
]},
{title:"Daily Routine",level:"HSK 3",icon:"fa-clock",
words:[
{cn:"起床",py:"qǐ chuáng",en:"Get up",tip:"起=rise, 床=bed."},
{cn:"吃早饭",py:"chī zǎo fàn",en:"Eat breakfast",tip:"早饭=morning meal."},
{cn:"上班",py:"shàng bān",en:"Go to work",tip:"上=go to, 班=shift."},
{cn:"下班",py:"xià bān",en:"Get off work",tip:"Opposite of 上班."},
{cn:"锻炼",py:"duàn liàn",en:"Exercise",tip:"Physical training."},
{cn:"睡觉",py:"shuì jiào",en:"Sleep",tip:"睡=sleep(v), 觉=sleep(n)."}
],
dialogue:[
{who:"bot",cn:"你每天几点起床？",en:"What time do you get up every day?"},
{who:"you",cn:"我每天早上六点半起床。",en:"I get up at 6:30 every morning."},
{who:"bot",cn:"起得真早！你起床后做什么？",en:"You get up so early! What do you do after getting up?"},
{who:"you",cn:"我先吃早饭，然后去公园跑步锻炼。",en:"I eat breakfast first, then go to the park to run and exercise."},
{who:"bot",cn:"你几点去上班呢？怎么去？",en:"What time do you go to work? How do you go?"},
{who:"you",cn:"我八点去上班，坐地铁去。",en:"I go to work at eight, going by subway."},
{who:"bot",cn:"工作累不累？几点下班？",en:"Is the work tiring? What time do you get off work?"},
{who:"you",cn:"工作有一点累，我下午五点半下班。",en:"Work is a bit tiring, I get off at 5:30 in the afternoon."},
{who:"bot",cn:"下班回家后你做什么？",en:"What do you do after getting off work and going home?"},
{who:"you",cn:"我做晚饭，看看电视，然后看书学习。",en:"I make dinner, watch TV, and then read books and study."},
{who:"bot",cn:"你每天几点睡觉？",en:"What time do you go to sleep every day?"},
{who:"you",cn:"我晚上十一点准时睡觉。",en:"I go to sleep at eleven o'clock sharp at night."}
]},
{title:"Travel Plans",level:"HSK 3",icon:"fa-plane",
words:[
{cn:"旅游",py:"lǚ yóu",en:"To travel / tourism",tip:"旅=traveler, 游=wander/swim."},
{cn:"火车票",py:"huǒ chē piào",en:"Train ticket",tip:"火车=train, 票=ticket."},
{cn:"买票",py:"mǎi piào",en:"Buy ticket",tip:"买=buy, 票=ticket."},
{cn:"行李箱",py:"xíng li xiāng",en:"Suitcase / luggage",tip:"行李=baggage, 箱=box."},
{cn:"照相机",py:"zhào xiàng jī",en:"Camera",tip:"照相=take photo, 机=machine."},
{cn:"宾馆",py:"bīn guǎn",en:"Hotel / guesthouse",tip:"宾=guest, 馆=building."}
],
dialogue:[
{who:"bot",cn:"下个月你想去哪儿旅游？",en:"Where do you want to travel next month?"},
{who:"you",cn:"我计划去北京旅游。听说北京非常漂亮。",en:"I plan to travel to Beijing. I heard Beijing is very beautiful."},
{who:"bot",cn:"北京很棒！你买好火车票了吗？",en:"Beijing is great! Have you bought the train ticket?"},
{who:"you",cn:"我还没买到票，明天去买。",en:"I haven't bought the ticket yet, I will go buy it tomorrow."},
{who:"bot",cn:"你准备带行李箱还是背包？",en:"Are you preparing to bring a suitcase or a backpack?"},
{who:"you",cn:"我带一个大行李箱，因为有很多衣服。",en:"I will bring a large suitcase because I have many clothes."},
{who:"bot",cn:"带个照相机吧，可以拍很多好看的照片。",en:"Bring a camera, you can take many nice photos."},
{who:"you",cn:"好的，我已经把照相机放进箱子里了。",en:"Okay, I have already put the camera in the box."},
{who:"bot",cn:"你打算住在哪家宾馆？订好了吗？",en:"Which hotel do you plan to stay at? Have you booked it?"},
{who:"you",cn:"我订了一家靠近天安门广场的宾馆。",en:"I booked a hotel near Tiananmen Square."},
{who:"bot",cn:"那很方便！祝你旅游愉快！",en:"That is very convenient! Wish you a pleasant trip!"},
{who:"you",cn:"谢谢老师，回来给你看照片！",en:"Thank you teacher, I will show you photos when I get back!"}
]},
{title:"Health & Body",level:"HSK 3",icon:"fa-heartpulse",
words:[
{cn:"身体",py:"shēn tǐ",en:"Body / health",tip:"身=body, 体=form. Together = health."},
{cn:"生病",py:"shēng bìng",en:"Get sick",tip:"生=grow/beget, 病=illness."},
{cn:"医院",py:"yī yuàn",en:"Hospital",tip:"医=medical, 院=courtyard."},
{cn:"感冒",py:"gǎn mào",en:"Catch a cold",tip:"感=feel, 冒=risk/emit. Cold."},
{cn:"吃药",py:"chī yào",en:"Take medicine",tip:"Literally 'eat medicine' in Chinese."},
{cn:"休息",py:"xiū xi",en:"Rest",tip:"休=rest on tree, 息=breath."}
],
dialogue:[
{who:"bot",cn:"你怎么了？脸色看起来不太好。",en:"What's wrong? You don't look very well."},
{who:"you",cn:"我觉得头疼，可能生病了。",en:"I feel a headache, I might be sick."},
{who:"bot",cn:"发烧吗？要去医院看医生吗？",en:"Do you have a fever? Do you need to go to the hospital to see a doctor?"},
{who:"you",cn:"有点发烧。我不想去医院，我想吃点药。",en:"A little fever. I don't want to go to the hospital, I want to take some medicine."},
{who:"bot",cn:"家里有感冒药吗？",en:"Is there cold medicine at home?"},
{who:"you",cn:"有，我昨天买了一些感冒药。",en:"Yes, I bought some cold medicine yesterday."},
{who:"bot",cn:"那就赶紧吃药，然后去床上躺着休息。",en:"Then take the medicine immediately, and go lie down in bed to rest."},
{who:"you",cn:"好的，我喝了很多热水，现在就去睡觉。",en:"Okay, I drank a lot of hot water, I am going to sleep now."},
{who:"bot",cn:"多喝水、多睡觉身体才能好得快。",en:"Drinking more water and sleeping more will make your body recover faster."},
{who:"you",cn:"谢谢你的关心，明天见。",en:"Thank you for your care, see you tomorrow."}
]},
{title:"Job & Workplace",level:"HSK 3",icon:"fa-briefcase",
words:[
{cn:"工作",py:"gōng zuò",en:"Job / work",tip:"工=work/craft, 作=make. Work."},
{cn:"公司",py:"gōng sī",en:"Company",tip:"公=public, 司=manage. Company."},
{cn:"会议",py:"huì yì",en:"Meeting / conference",tip:"会=gather, 议=discuss."},
{cn:"经理",py:"jīng lǐ",en:"Manager",tip:"经=manage, 理=logic. Manager."},
{cn:"同事",py:"tóng shì",en:"Colleague / coworker",tip:"同=together, 事=business."},
{cn:"迟到",py:"chí dào",en:"Be late",tip:"迟=late, 到=arrive."}
],
dialogue:[
{who:"bot",cn:"你在哪家公司工作？",en:"Which company do you work for?"},
{who:"you",cn:"我在一家电脑科技公司工作。",en:"I work for a computer technology company."},
{who:"bot",cn:"你的工作忙吗？每天有什么任务？",en:"Is your work busy? What tasks do you have every day?"},
{who:"you",cn:"每天都很忙，有很多会议要开。",en:"Very busy every day, many meetings to attend."},
{who:"bot",cn:"你经常和你的经理一起开会吗？",en:"Do you often meet with your manager?"},
{who:"you",cn:"是的，经理每天早上都找我们开会。",en:"Yes, the manager holds a meeting with us every morning."},
{who:"bot",cn:"同事们关系怎么样？大家互相帮助吗？",en:"How is the relationship between colleagues? Do they help each other?"},
{who:"you",cn:"同事们人都很好，工作上经常互相支持。",en:"The colleagues are all very nice, supporting each other in work."},
{who:"bot",cn:"那很不错！你上班会迟到吗？",en:"That's great! Are you ever late for work?"},
{who:"you",cn:"我每天都很早到公司，从来不迟到。",en:"I arrive at the company very early every day, never late."}
]}
];

const LV=[{n:'HSK 1',d:'350 words — Basic',ls:45,tp:['Greetings','Numbers','Family','Food','Time'],dn:true,pc:100},{n:'HSK 2',d:'550 words — Daily',ls:50,tp:['Shopping','Transport','Weather','Hobbies','Dates'],dn:true,pc:100},{n:'HSK 3',d:'750 words — Opinions',ls:55,tp:['Travel','Work','Health','Education','Culture'],dn:false,pc:72},{n:'HSK 4',d:'950 words — Complex',ls:50,tp:['Society','Technology','Environment','Media','Sports'],dn:false,pc:35},{n:'HSK 5',d:'1,150 words — Professional',ls:50,tp:['Business','Politics','Literature','Science','Philosophy'],dn:false,pc:0},{n:'HSK 6',d:'1,350 words — Near-native',ls:45,tp:['Academic','Idioms','Classical','Debate','Abstract'],dn:false,pc:0},{n:'HSK 7',d:'1,550 words — Advanced',ls:35,tp:['Formal Writing','Analysis','Research','Translation'],dn:false,pc:0},{n:'HSK 8',d:'1,750 words — Proficient',ls:30,tp:['Specialized','Cross-cultural','Presentation'],dn:false,pc:0},{n:'HSK 9',d:'1,889 words — Mastery',ls:25,tp:['Literary','Creative Writing','Scholarship'],dn:false,pc:0}];
let curLv = 0;
const TD={Greetings:['Self Intro','Hello/Goodbye','Thank You','Titles','Polite'],Numbers:['1-10','11-99','100-10K','Phone','Prices'],Family:['Members','Age','Occupations','Appearance','Personality'],Food:['Fruits/Veg','Meals','Restaurant','Drinks','Cooking'],Time:['Weekdays','Months','Clock','Duration','Frequency'],Shopping:['Clothes','Colors','Bargaining','Payment','Returns'],Transport:['Directions','Taxi','Bus/Subway','Train','Traffic'],Weather:['Basic','Seasons','Temperature','Forecast','Activities'],Hobbies:['Sports','Music','Movies','Reading','Games'],Dates:['Birthdays','Anniversaries','Holidays','Invitations','Scheduling'],Travel:['Airport','Hotel','Sightseeing','Help','Emergencies'],Work:['Office','Meetings','Emails','Phone','Cards'],Health:['Doctor','Symptoms','Medicine','Insurance','Fitness'],Education:['Subjects','Classroom','Exams','Homework','Graduation'],Culture:['Festivals','Traditions','Food','Calligraphy','Kung Fu'],Society:['Population','Housing','Community','Social Media','Trends'],Technology:['Internet','Smartphones','Apps','AI','E-commerce'],Environment:['Nature','Climate','Pollution','Recycling','Animals'],Media:['News','Social Media','Ads','Journalism','Entertainment'],Sports:['Olympics','Basketball','Soccer','Martial Arts','Esports'],Business:['Negotiation','Contracts','Partnership','Finance','Marketing'],Politics:['Government','Elections','Policy','International','History'],Literature:['Poetry','Novels','Essays','Authors','Devices'],Science:['Physics','Biology','Chemistry','Space','Medicine'],Philosophy:['Confucius','Laozi','Buddhism','Ethics','Logic'],Academic:['Research','Papers','Conferences','Peer Review','Citations'],Idioms:['Chengyu','Common','Animal','Number','Nature'],Classical:['Classical','Poetry','Historical','Philosophical','Parallel Prose'],Debate:['Structure','Counter-arguments','Rhetoric','Formal','Persuasion'],Abstract:['Concepts','Theories','Hypotheses','Analysis','Synthesis'],'Formal Writing':['Reports','Proposals','Letters','Essays','Summaries'],Analysis:['Data','Case Studies','Comparative','Critical','Synthesis'],Research:['Literature Review','Methodology','Fieldwork','Data','Publication'],Translation:['Theory','Techniques','Literary','Technical','Interpreting'],'Specialized':['Legal','Medical','Financial','Technical','Diplomatic'],'Cross-cultural':['Differences','Etiquette','Styles','Stereotypes','Adaptation'],Presentation:['Public Speaking','Slides','Q&A','Persuasive','Impromptu'],'Literary Analysis':['Poetry','Novel','Drama','Essay','Comparative'],'Creative Writing':['Stories','Poetry','Essay','Drama','Experimental'],'Scholarship':['Proposals','Grant Writing','Publishing','Papers','Collaboration']};
const PYI=['b','p','m','f','d','t','n','l','g','k','h','j','q','x','zh','ch','sh','r','z','c','s','y','w'];
const PYF=['a','o','e','i','u','ü','ai','ei','ui','ao','ou','iu','ie','üe','er','an','en','in','un','ün','ang','eng','ing','ong'];
const TONES=[{c:'mā',m:'mother',t:'1st Tone — High flat',p:'M20,35 L60,35 L100,35 L140,35 L180,35'},{c:'má',m:'hemp',t:'2nd Tone — Rising',p:'M20,38 Q60,36 100,20 Q140,8 180,5'},{c:'mǎ',m:'horse',t:'3rd Tone — Dipping',p:'M20,15 Q50,40 100,40 Q150,40 180,15'},{c:'mà',m:'to scold',t:'4th Tone — Falling',p:'M20,5 Q60,8 100,25 Q140,35 180,40'}];
const GR = [...(typeof EXTRA_GRAMMAR !== 'undefined' ? EXTRA_GRAMMAR : [])];
const QZ = [...(typeof EXTRA_QUIZ !== 'undefined' ? EXTRA_QUIZ : [])];
const WCH = typeof EXTRA_WRITING_CHARS !== 'undefined' ? EXTRA_WRITING_CHARS : "你好学习中文".split('');

let tutLesson=null,tutStep=0,tutScores=[],srOn=false,recognition=null,micAvailable=false,geminiHistory=[],currentLiveTarget='',suggestedUserTarget=''; let mediaRecorder=null, audioChunks=[], lastUserAudioUrl=null, currentTurnId='', userAudioEl=null, activeMicStream=null; let _cachedChineseVoice=null; const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || (navigator.maxTouchPoints && navigator.maxTouchPoints > 2) || (window.matchMedia && window.matchMedia('(any-pointer: coarse)').matches);
let qIdx=0,qScore=0,qStartT=0,strokeCnt=0,curWI=0,drawing=false,ctx,canvas;
// PWA & Advanced features globals
let writer = null;
let srsFilterActive = false;
let audioCtx = null;
let toneAnalyser = null;
let toneMicStream = null;
let toneRafId = null;
let isTrackingPitch = false;
let pitchHistory = [];
let activeToneIndex = -1;

document.addEventListener('DOMContentLoaded',()=>{
  initCapacitorPurchases();
  createFloatingCharacters();
  syncReminderInputs();
  // Register Service Worker for PWA Offline mode with auto-reload updates
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(reg => {
      console.log('ServiceWorker registration successful:', reg.scope);
      reg.addEventListener('updatefound', () => {
        const newWorker = reg.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              console.log("New service worker installed. Force reloading...");
              toast("New update installed! Reloading page...", "var(--green)");
              setTimeout(() => {
                window.location.reload();
              }, 1200);
            }
          });
        }
      });
      let refreshing = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!refreshing) {
          refreshing = true;
          window.location.reload();
        }
      });
    }).catch(() => {});
  }
  // Cache the best Chinese voice for TTS quality
  getChineseVoice();
  const _origOnVoicesChanged = speechSynthesis.onvoiceschanged;
  speechSynthesis.onvoiceschanged = () => {
    _cachedChineseVoice = null;
    getChineseVoice();
    if (_origOnVoicesChanged) _origOnVoicesChanged();
  };
  // Must register before any init calls in case one throws
  window.openTutorTopic = function(topic, levelIdx) {
    openTopicLesson(topic, levelIdx);
  };
  buildTutorTabs();buildHero();buildLvTabs();buildTopics();buildPyTabs();buildPy(0);buildGr();buildHSK();initCv();translateUI();
  // Force reveal all scroll-animation elements immediately to ensure visibility on mobile
  document.querySelectorAll('.fu').forEach(el => el.classList.add('v'));
  document.getElementById('tDay').textContent=new Date().toLocaleDateString('en-US',{weekday:'long',month:'short',day:'numeric'});
  observeFu();checkMic();loadGeminiSettings();updateProgress();updatePremiumUI();
  document.getElementById('tutTypeInput').addEventListener('keydown',e=>{if(e.key==='Enter')tutTypeSubmit()});
  initSupabase();
  initPayPalSDK();
});

function initPayPalSDK() {
  if (document.querySelector('script[src*="paypal.com/sdk/js"]')) return;
  const s = document.createElement('script');
  s.src = 'https://www.paypal.com/sdk/js?client-id=' + MANDARINCOURSE_CONFIG.PAYPAL_CLIENT_ID + '&currency=USD';
  s.onload = () => { if (document.getElementById('premiumModal').style.display === 'flex') renderPayPalButtons(); };
  document.body.appendChild(s);
}

function syncNow() {
  if (!supabaseClient) { toast('Not signed in.', 'var(--accent)'); return; }
  supabaseClient.auth.getSession().then(({ data: { session } }) => {
    if (session) { saveProgressToCloud(session.user.id); syncProgressFromCloud(session.user.id); }
  });
}

function togglePremiumModal() {
  const modal = document.getElementById('premiumModal');
  modal.style.display = modal.style.display === 'none' ? 'flex' : 'none';
  if (modal.style.display === 'flex' && typeof paypal !== 'undefined') renderPayPalButtons();
}

function checkMic(){
  const hasAPI = ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window);
  const isSecure = (window.location.protocol === 'https:' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
  const hasFallback = !!(window.MediaRecorder && navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  
  if (!hasAPI && !hasFallback) {
    micAvailable = false;
    addTutMsg('warn', '<i class="fas fa-exclamation-triangle mr-1"></i> <b>Mic Not Available:</b> Your browser does not support Speech Recognition or Media Recording.');
    return;
  }
  
  if (!isSecure && hasAPI) {
    addTutMsg('warn', '<i class="fas fa-exclamation-triangle mr-1"></i> <b>Secure HTTPS Recommended:</b> Speech Recognition requires HTTPS. The app will try the audio recording fallback instead. If mic access is denied, use <code style="background:var(--card);padding:1px 6px;border-radius:4px;font-size:11px">https://mandarincourse.app</code> or <code style="background:var(--card);padding:1px 6px;border-radius:4px;font-size:11px">http://localhost:8080</code>.');
  }
  
  micAvailable = true;
}

function buildHero(){const bg=document.getElementById('heroBg');const ch='你好学中文说话听说读写拼音汉字';for(let i=0;i<16;i++){const d=document.createElement('div');d.className='hc';d.style.left=Math.random()*100+'%';d.style.fontSize=(30+Math.random()*50)+'px';d.style.animationDelay=Math.random()*25+'s';d.textContent=ch[i%ch.length];bg.appendChild(d)}}
function scrollTo(s) {
  const el = document.querySelector(s);
  if (el) {
    try {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch(e) {
      const yOffset = -60;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}

function navTo(selector, btn) {
  unlockIOSAudio();
  scrollTo(selector);
  document.querySelectorAll('.mnb').forEach(b => b.classList.remove('act'));
  if (btn) btn.classList.add('act');
  
  // Force reveal all elements in the navigated section to prevent viewport scroll observer locks
  const target = document.querySelector(selector);
  if (target) {
    target.querySelectorAll('.fu').forEach(el => el.classList.add('v'));
    if (target.classList.contains('fu')) target.classList.add('v');
  }
}
function observeFu(){const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('v')}),{threshold:.06});document.querySelectorAll('.fu').forEach(e=>o.observe(e))}
function toast(m,c){const t=document.getElementById('toast');t.textContent=m;t.style.borderColor=c||'var(--border)';t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2800)}
function getChineseVoice(){
  if (_cachedChineseVoice) return _cachedChineseVoice;
  const voices = speechSynthesis.getVoices();
  _cachedChineseVoice = voices.find(v => v.lang.startsWith('zh') && /neural|natural|premium|online|xiaoxiao|yunxi|yunyang|huihui/i.test(v.name))
    || voices.find(v => v.lang.startsWith('zh'));
  return _cachedChineseVoice;
}

function speak(t, rate){
  try {
    // Abort active recognition if speaking to avoid feedback loops
    if (recognition) {
      try {
        recognition.onend = null;
        recognition.onerror = null;
        recognition.abort();
      } catch(e) {}
    }
    srOn = false;
    const btn = document.getElementById('tutMic');
    const ic = document.getElementById('tutMicIc');
    if (btn && ic) {
      btn.classList.remove('on');
      ic.className = 'fas fa-microphone text-xl';
      ic.style.color = 'var(--accent)';
    }

    if (!window.speechSynthesis) {
      console.warn("SpeechSynthesis API not supported in this browser.");
      return;
    }

    const u = new SpeechSynthesisUtterance(t);
    u.lang = 'zh-CN';
    u.rate = rate || parseFloat(localStorage.getItem('speech_rate')) || 1.0;
    const voice = getChineseVoice();
    if (voice) { u.voice = voice; console.log("TTS voice:", voice.name); }

    // Mobile vs Desktop safety check:
    // Calling speechSynthesis.cancel() on mobile Chrome/Safari causes the speech engine to lock up permanently.
    if (isMobileDevice) {
      try {
        speechSynthesis.speak(u);
        console.log("Native TTS queued successfully on mobile.");
      } catch(err) {
        console.error("Mobile speak failure:", err);
      }
    } else {
      // On desktop, cancel is safe to interrupt previous speech
      let isSpeaking = false;
      try { isSpeaking = speechSynthesis.speaking; } catch(e) {}

      if (isSpeaking) {
        try { if (!isMobileDevice) { speechSynthesis.cancel(); } } catch(e) {}
        setTimeout(() => {
          try {
            speechSynthesis.speak(u);
            console.log("Native TTS started after cancellation.");
          } catch(err) {
            console.error("Desktop speak post-cancel failure:", err);
          }
        }, 50);
      } else {
        try {
          speechSynthesis.speak(u);
          console.log("Native TTS started directly.");
        } catch(err) {
          console.error("Desktop speak direct failure:", err);
        }
      }
    }
  } catch(e) {
    console.error("Global speak exception caught:", e);
  }
}

function sim(a,b){
  const cleanA = a.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()？。，！、\s]/g,"").toLowerCase();
  const cleanB = b.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()？。，！、\s]/g,"").toLowerCase();
  
  if (cleanA === cleanB) return 1;
  if (!cleanA || !cleanB) return 0;
  
  // Calculate Levenshtein Distance
  const track = Array(cleanB.length + 1).fill(null).map(() => 
    Array(cleanA.length + 1).fill(null)
  );
  
  for (let i = 0; i <= cleanB.length; i += 1) track[i][0] = i;
  for (let j = 0; j <= cleanA.length; j += 1) track[0][j] = j;
  
  for (let i = 1; i <= cleanB.length; i += 1) {
    for (let j = 1; j <= cleanA.length; j += 1) {
      const indicator = cleanB[i - 1] === cleanA[j - 1] ? 0 : 1;
      track[i][j] = Math.min(
        track[i - 1][j] + 1, // deletion
        track[i][j - 1] + 1, // insertion
        track[i - 1][j - 1] + indicator // substitution
      );
    }
  }
  
  const distance = track[cleanB.length][cleanA.length];
  const maxLength = Math.max(cleanA.length, cleanB.length);
  return 1 - (distance / maxLength);
}


// ===== TUTOR =====
function startTutor(idx){
  const isPremium = (localStorage.getItem('is_premium') === 'true');
  const lesson = TL[idx];
  if (lesson && lesson.level && lesson.level.startsWith('HSK') && !isPremium) {
    const levelNum = parseInt(lesson.level.replace('HSK ', ''));
    if (levelNum >= 2) {
      showPremiumPaywall(lesson.level);
      return;
    }
  }
  tutLesson=TL[idx];tutStep=0;tutScores=[];
  document.getElementById('tutTotal').textContent='--';
  document.getElementById('tutChat').innerHTML='';
  addTutMsg('sys','<i class="fas fa-graduation-cap mr-1"></i> <b>'+tutLesson.title+'</b> — '+tutLesson.level);
  if (isRoleplayActive) {
    let botRole = t("Speaker A"), userRole = t("Speaker B");
    const title = tutLesson.title.toLowerCase();
    if (title.includes('restaurant')) { botRole = t("Waiter"); userRole = t("Customer"); }
    else if (title.includes('family') || title.includes('introducing')) { botRole = t("Friend A"); userRole = t("Friend B"); }
    else if (title.includes('airport')) { botRole = t("Customs Officer"); userRole = t("Passenger"); }
    else { botRole = t("Tutor"); userRole = t("Student"); }
    addTutMsg('sys', '🎭 <b>'+t("Roleplay Characters Assigned")+'</b>: '+t("Bot")+' = <b>'+botRole+'</b> &middot; '+t("You")+' = <b>'+userRole+'</b>');
  }
  let vh='<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:6px;margin-top:8px">';
    tutLesson.words.forEach(w=>{vh+='<div style="background:var(--card2);padding:8px 10px;border-radius:10px;text-align:center"><div class="fc font-bold" style="font-size:18px">'+w.cn+'</div><div style="font-size:12px;color:var(--muted)">'+w.py+'</div><div style="font-size:12px;color:var(--fg2)">'+t(w.en)+'</div></div>'});
  vh+='</div>';
  addTutMsg('sys',vh);
  setTimeout(()=>advanceTutor(),600);
  document.getElementById('tutStatus').textContent=t('Teaching...');
  setBtns(true);
}

function advanceTutor(){
  if(!tutLesson||tutStep>=tutLesson.dialogue.length){finishTutor();return}
  const line=tutLesson.dialogue[tutStep];
  const w=tutLesson.words.find(w=>line.cn.includes(w.cn));
  document.getElementById('tutWd').textContent=line.cn;
  document.getElementById('tutWp').textContent=w?w.py:'';
  document.getElementById('tutWm').textContent=line.en;
  document.getElementById('tutTip').style.display=w?'block':'none';
  if(w)document.getElementById('tutTip').textContent=w.tip;
  document.getElementById('scoreWrap').style.display='none';
  let botRole = t("Tutor"), userRole = t("Student");
  if (isRoleplayActive) {
    const title = tutLesson.title.toLowerCase();
    if (title.includes('restaurant')) { botRole = t("Waiter"); userRole = t("Customer"); }
    else if (title.includes('family') || title.includes('introducing')) { botRole = t("Friend A"); userRole = t("Friend B"); }
    else if (title.includes('airport')) { botRole = t("Customs Officer"); userRole = t("Passenger"); }
  }
  if(line.who==='bot'){
    document.getElementById('tutHint').textContent=isRoleplayActive ? t('Listen to')+' ['+botRole+'] '+t('speaking') : t('Type your response in the box below');
    document.getElementById('tutHint').style.color='var(--accent)';
    document.getElementById('tutStatus').textContent=isRoleplayActive ? t('Roleplay')+' — ['+botRole+'] '+t('speaking') : t('Your turn')+' — '+t('type below');
    setTimeout(()=>tutListen(),500);
    addTutMsg('bot','<div class="fc font-bold" style="font-size:20px;margin-bottom:4px">'+line.cn+'</div><div style="font-size:14px;color:var(--muted);margin-bottom:6px">'+t(line.en)+'</div><span style="font-size:11px;color:var(--blue);cursor:pointer" onclick="speak(\''+line.cn+'\')"><i class="fas fa-volume-high"></i> '+t('replay')+'</span>');
  } else {
    document.getElementById('tutHint').textContent=isRoleplayActive ? t('Your turn')+' — '+t('speak')+' ['+userRole+'] '+t('lines') : t('Type Chinese below or press mic');
    document.getElementById('tutHint').style.color='var(--accent)';
    document.getElementById('tutStatus').textContent=isRoleplayActive ? t('Roleplay')+' — '+t('Your Turn')+' ['+userRole+']' : t('Your turn')+' — '+t('type below');
  }
}

function tutListen(){
  const isLive = localStorage.getItem('tutor_mode') === 'live';
  if(isLive) {
    if(currentLiveTarget) speak(currentLiveTarget);
  } else {
    if(!tutLesson||tutStep>=tutLesson.dialogue.length)return;
    speak(tutLesson.dialogue[tutStep].cn);
  }
  const hWave = document.getElementById('hWave'); if(hWave) hWave.classList.remove('off');
  setTimeout(()=> { const hWave = document.getElementById('hWave'); if(hWave) hWave.classList.add('off'); }, 2000);
}

let _recAudioMode = false;

function startAudioRecording(btn, ic) {
  if (_recAudioMode) {
    console.log("Stopping audio recording...");
    _recAudioMode = false;
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.onstop = () => {
        console.log("MediaRecorder onstop fired, chunks:", audioChunks.length);
        if (activeMicStream) {
          try { activeMicStream.getTracks().forEach(t => t.stop()); } catch(e) {}
          activeMicStream = null;
        }
        const chunks = audioChunks;
        audioChunks = [];
        if (chunks.length === 0) {
          console.warn("No audio chunks recorded");
          document.getElementById('tutHint').textContent = t('No audio recorded. Try again.');
          return;
        }
        console.log("Audio chunks:", chunks.length, "total size:", chunks.reduce((a,c) => a + c.size, 0));
        const mime = window._audioMime || 'audio/mp4';
        const blob = new Blob(chunks, { type: mime });
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64 = reader.result.split(',')[1];
          console.log("Audio base64 length:", base64.length, "mime:", mime);
          sendAudioToGemini(base64, 3, mime);
        };
        reader.readAsDataURL(blob);
      };
      mediaRecorder.stop();
    }
    srOn = false;
    btn.classList.remove('on');
    ic.className = 'fas fa-microphone text-xl';
    ic.style.color = 'var(--accent)';
    return;
  }
  console.log("Starting audio recording...");
  _recAudioMode = true;
  srOn = true;
  btn.classList.add('on');
  ic.className = 'fas fa-stop text-xl';
  ic.style.color = 'var(--green)';
  // Stop any TTS playback immediately to prevent feedback loop
  if (!isMobileDevice) { try { speechSynthesis.cancel(); } catch(e) {} }
  document.getElementById('tutHint').textContent = t('Recording... tap mic to stop');
  const wave = document.getElementById('tutVoiceWave');
  if (wave) wave.style.display = 'inline-flex';
  document.getElementById('tutHint').style.color = 'var(--green)';
  currentTurnId = 'voice-' + Date.now();
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true } }).then(stream => {
      console.log("getUserMedia succeeded for recording fallback");
      // Amplify audio gain to help Whisper detect speech
      let recordStream = stream;
      try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const source = audioCtx.createMediaStreamSource(stream);
        const gain = audioCtx.createGain();
        gain.gain.value = 2.5;
        const dest = audioCtx.createMediaStreamDestination();
        source.connect(gain).connect(dest);
        recordStream = dest.stream;
        console.log("Audio gain amplification applied (2.5x)");
      } catch(e) {
        console.warn("Could not apply gain amplification, using raw stream:", e.message);
      }
      activeMicStream = stream; // keep original for cleanup
      audioChunks = [];
      let mime = 'audio/webm';
      if (typeof MediaRecorder.isTypeSupported === 'function') {
        if (!MediaRecorder.isTypeSupported(mime)) mime = 'audio/mp4';
        if (!MediaRecorder.isTypeSupported(mime)) mime = 'audio/ogg;codecs=opus';
        if (!MediaRecorder.isTypeSupported(mime)) mime = '';
      }
      if (!mime) { console.error("No supported audio mime type"); return; }
      window._audioMime = mime;
      console.log("Using mime type:", mime);
      try {
        mediaRecorder = new MediaRecorder(recordStream, { mimeType: mime });
      } catch(e) {
        console.warn("Failed with", mime, "trying without mimeType");
        mediaRecorder = new MediaRecorder(recordStream);
        mime = mediaRecorder.mimeType || '';
        window._audioMime = mime;
      }
      mediaRecorder.ondataavailable = e => {
        if (e.data.size > 0) audioChunks.push(e.data);
      };
      mediaRecorder.start();
    }).catch(err => {
      console.error("Audio recording fallback failed:", err);
      _recAudioMode = false;
      srOn = false;
      btn.classList.remove('on');
      ic.className = 'fas fa-microphone text-xl';
      ic.style.color = 'var(--accent)';
          document.getElementById('tutHint').textContent = t('Mic access denied. Use text box.');
    });
  } else {
    console.error("No getUserMedia available");
  }
}

function sendAudioToGemini(base64Audio, retries, mimeType) {
  if (retries === undefined) retries = 3;
  if (!mimeType) mimeType = window._audioMime || 'audio/mp4';
  console.log("Sending audio to Gemini, length:", base64Audio.length, "mime:", mimeType, "retries left:", retries);
  const payload = {
    contents: [{ role: "user", parts: [{ inlineData: { mimeType: mimeType, data: base64Audio } }] }],
    systemInstruction: "Transcribe the Mandarin Chinese speech in this audio accurately. Return ONLY the transcription in Chinese characters, nothing else."
  };
  document.getElementById('tutStatus').textContent = t('Transcribing...');
  const loaderId = 'loader-' + Date.now();
  addTutMsg('bot', '<div id="' + loaderId + '" class="animate-pulse">'+t('Transcribing audio...')+'</div>');
  fetch('/api/chat', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  }).then(res => {
    console.log("Gemini response status:", res.status);
    if (res.status === 429 && retries > 0) {
      const wait = (4 - retries) * 3000;
      document.getElementById('tutHint').textContent = t('Rate limited, retrying in ') + (wait/1000) + t('s...');
      return new Promise(r => setTimeout(r, wait)).then(() => sendAudioToGemini(base64Audio, retries - 1));
    }
    if (!res.ok) return res.json().then(errData => { throw new Error(errData.error?.error?.message || errData.error?.message || errData.error || "HTTP " + res.status); });
    return res.json();
  }).then(data => {
    if (!data) return;
    console.log("Gemini response:", JSON.stringify(data).substring(0, 200));
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || '(No response)';
    console.log("Gemini reply text:", reply.substring(0, 100));
    let transcript = reply.replace(/^TRANSCRIPTION:\s*/i, '').trim();
    if (transcript && transcript !== '(No response)' && !/no audio|no speech|没有音频|unable to transcribe|therefore no|no transcription/i.test(transcript)) {
      console.log("Transcription result:", transcript);
      document.getElementById('tutStatus').textContent = t('Heard: ') + transcript;
      // Show confirmation before sending to AI
      const confirmId = 'confirm-' + Date.now();
      addTutMsg('user', '<div class="fc font-bold" style="font-size:18px;margin-bottom:4px;letter-spacing:1px">' + transcript + '</div><div style="font-size:13px;color:var(--muted)">(voice input)</div><div id="' + confirmId + '" style="margin-top:6px;display:flex;gap:8px;"><button onclick="confirmTranscript(\'' + transcript.replace(/'/g, "\\'") + '\',\'' + loaderId + '\')" style="background:var(--green);color:#fff;border:none;padding:6px 16px;border-radius:4px;cursor:pointer;font-size:13px">✓ '+t('Use')+'</button><button onclick="rejectTranscript(\'' + confirmId + '\',\'' + loaderId + '\')" style="background:var(--accent);color:#fff;border:none;padding:6px 16px;border-radius:4px;cursor:pointer;font-size:13px">✕ '+t('Cancel')+'</button></div>');
    } else {
      console.warn("Empty or no-speech transcription");
      document.getElementById('tutHint').textContent = t('No speech detected — tap mic and speak clearly');
      document.getElementById('tutStatus').textContent = t('No speech detected');
    }
    if (loaderId) { const el = document.getElementById(loaderId); if (el) el.remove(); }
  }).catch(err => {
    console.error("Audio transcription failed:", err);
    document.getElementById('tutHint').textContent = t('Transcription error: ') + err.message;
    document.getElementById('tutStatus').textContent = t('Error:') + ' ' + err.message;
    if (loaderId) { const el = document.getElementById(loaderId); if (el) el.remove(); }
  });
}

function confirmTranscript(transcript, loaderId) {
  if (loaderId) { const el = document.getElementById(loaderId); if (el) el.remove(); }
  sendToGemini(transcript);
}

function rejectTranscript(confirmId, loaderId) {
  if (loaderId) { const el = document.getElementById(loaderId); if (el) el.remove(); }
  const el = document.getElementById(confirmId);
  if (el) el.innerHTML = '<span style="color:var(--muted);font-size:11px">'+t('Cancelled — tap mic to try again')+'</span>';
  document.getElementById('tutHint').textContent = t('Cancelled. Tap mic to speak again.');
}

function tutSpeak(){
  const isLive = localStorage.getItem('tutor_mode') === 'live';
  if(!isLive) {
    if(!tutLesson||tutStep>=tutLesson.dialogue.length)return;
  }
  if(!micAvailable){
    const hasAPI = ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window);
    const hasFallback = !!(window.MediaRecorder && navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
    if (!hasAPI && !hasFallback) {
      toast(t('Your browser does not support microphone input. Use the text box instead.'),'var(--gold)');
      return;
    }
    micAvailable = true;
  }
  
  // iOS Audio Unlock: Only initialize if not on iOS Safari (where recording is bypassed)
  if (!isMobileDevice) {
    userAudioEl = new Audio();
    try {
      userAudioEl.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAAA';
      userAudioEl.load();
      userAudioEl.play().catch(e=>{});
    } catch(e) {}
  }
  
  // Cancel any active SpeechSynthesis before starting microphone
  if (!isMobileDevice) { speechSynthesis.cancel(); }
  
  unlockIOSAudio();
  const target=localStorage.getItem('tutor_mode') === 'live' ? currentLiveTarget : tutLesson.dialogue[tutStep].cn;
  const btn=document.getElementById('tutMic'),ic=document.getElementById('tutMicIc');
  
  // On mobile, if mic permission has not been explicitly prompted/granted, trigger it via getUserMedia first
  if (isMobileDevice && !localStorage.getItem('mic_prompted')) {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      document.getElementById('tutHint').textContent = t("Allow microphone access when prompted...");
      navigator.mediaDevices.getUserMedia({ audio: { channelCount: 1, echoCancellation: true, noiseSuppression: true } })
        .then(stream => {
          stream.getTracks().forEach(t => t.stop());
          localStorage.setItem('mic_prompted', 'true');
          console.log("Mobile microphone permission verified.");
          document.getElementById('tutHint').textContent = t("Tap microphone again to start speaking.");
        })
        .catch(err => {
          console.error("Microphone permission denied:", err);
          document.getElementById('tutHint').innerHTML = '<span style="color:var(--accent2);font-size:11px;font-weight:700;"><i class="fas fa-exclamation-triangle"></i> '+t('Mic Denied: Tap aA (or settings icon) in Safari address bar → Website Settings → Set Microphone to Allow → Reload page.')+'</span>';
        });
      return;
    }
  }
  
  // Clear stale fallback flag — try SpeechRecognition first on desktop
  localStorage.removeItem('_useAudioFallback');
  window._useAudioFallback = false;
  
  if(srOn){
    stopMediaRecorder();
    if (recognition) {
      try {
        recognition.stop();
      } catch(e) {}
    }
    srOn=false;
    btn.classList.remove('on');
    ic.className='fas fa-microphone text-xl';
    ic.style.color='var(--accent)';
    return;
  }
  
  // On non-secure HTTP, SpeechRecognition requires HTTPS — skip straight to recording fallback
  if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    window._useAudioFallback = true;
    localStorage.setItem('_useAudioFallback', 'true');
    return startAudioRecording(btn, ic);
  }
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  if (!SR) {
    window._useAudioFallback = true;
    localStorage.setItem('_useAudioFallback', 'true');
    return startAudioRecording(btn, ic);
  }
  try {
    recognition=new SR();
    recognition.lang='zh-CN';
    recognition.interimResults=false;
    recognition.maxAlternatives=3;
    
    recognition.onstart=()=>{
      srOn=true;
      btn.classList.add('on');
      ic.className='fas fa-stop text-xl';
      ic.style.color='var(--green)';
      document.getElementById('tutHint').textContent=t('Listening...');
      const wave = document.getElementById('tutVoiceWave');
      if (wave) wave.style.display = 'inline-flex';
      document.getElementById('tutHint').style.color='var(--green)';
      currentTurnId = 'voice-' + Date.now();
    };
    
    recognition.onresult=e=>{
      const res=[];
      for(let i=0;i<e.results[0].length;i++)res.push(e.results[0][i].transcript);
      stopMediaRecorder();
      const isLive = localStorage.getItem('tutor_mode') === 'live';
      let best = e.results[0][0].transcript;
      let bs = 0;
      if (isLive) {
        const matchesHint = suggestedUserTarget && sim(best, suggestedUserTarget) > 0.45;
        if (matchesHint) {
          bs = sim(best, suggestedUserTarget);
          for(let i=1;i<e.results[0].length;i++){
            const s = sim(e.results[0][i].transcript, suggestedUserTarget);
            if(s>bs){bs=s; best=e.results[0][i].transcript;}
          }
        } else {
          bs = 0.95;
        }
      } else {
        bs = sim(best, target);
        for(let i=1;i<e.results[0].length;i++){
          const s = sim(e.results[0][i].transcript, target);
          if(s>bs){bs=s; best=e.results[0][i].transcript;}
        }
      }
      const percentageScore = Math.round(bs * 100);
      processScore(best, percentageScore, target, currentTurnId);
      srOn=false;
      btn.classList.remove('on');
      ic.className='fas fa-microphone text-xl';
      ic.style.color='var(--accent)';
    };
    
    recognition.onerror=(e)=>{
      console.error("Speak Mic Error:", e.error);
      stopMediaRecorder();
      srOn=false;
      btn.classList.remove('on');
      ic.className='fas fa-microphone text-xl';
      ic.style.color='var(--accent)';
      if (e.error === 'no-speech') {
        console.warn("no-speech detected: switching to audio recording fallback");
        window._useAudioFallback = true;
        localStorage.setItem('_useAudioFallback', 'true');
        document.getElementById('tutHint').innerHTML='<span style="color:var(--gold)"><i class="fas fa-info-circle"></i> '+t('Auto-switching to recording...')+'</span>';
        clearTimeout(window._srFailTimer);
        setTimeout(() => {
          console.log("Starting audio recording fallback now");
          startAudioRecording(btn, ic);
        }, 300);
      } else {
        document.getElementById('tutHint').innerHTML='<span style="color:var(--accent)"><i class="fas fa-exclamation-triangle"></i> '+t('Mic Error')+' ('+e.error+') — '+t('Try text box')+'</span>';
      }
    };
    
    recognition.onend=()=>{
      if (_recAudioMode) return;
      stopMediaRecorder();
      srOn=false;
      btn.classList.remove('on');
      ic.className='fas fa-microphone text-xl';
      ic.style.color='var(--accent)';
    };
    
    recognition.start();
  } catch(e) {
    console.error("Failed to start SpeechRecognition:", e);
    window._useAudioFallback = true;
    localStorage.setItem('_useAudioFallback', 'true');
    startAudioRecording(btn, ic);
  }
}


function tutTypeSubmit(){
  const input=document.getElementById('tutTypeInput');const text=input.value.trim();
  if(!text){toast(t('Type Chinese characters first'),'var(--gold');return}
  if(!tutLesson||tutStep>=tutLesson.dialogue.length)return;
  const target=localStorage.getItem('tutor_mode') === 'live' ? currentLiveTarget : tutLesson.dialogue[tutStep].cn;
  const sc=Math.round(sim(text,target)*100);
  processScore(text,sc);input.value='';
}

function processScore(text,sc,target,turnId){
  tutScores.push(sc);
  const avg=Math.round(tutScores.reduce((a,b)=>a+b,0)/tutScores.length);
  document.getElementById('tutTotal').textContent=avg;
  const ring=document.getElementById('scoreRing');ring.setAttribute('stroke-dashoffset',264-(264*sc/100));
  ring.setAttribute('stroke',sc>=80?'var(--green)':sc>=50?'var(--gold)':'var(--accent)');
  document.getElementById('tutSc').textContent=sc;
  document.getElementById('tutSc').style.color=sc>=80?'var(--green2)':sc>=50?'var(--gold)':'var(--accent2)';
  document.getElementById('scoreWrap').style.display='block';
  let fb=sc>=80?'<span style="color:var(--green2)"><i class="fas fa-check-circle"></i> '+t('Great!')+'</span>':sc>=50?'<span style="color:var(--gold)"><i class="fas fa-star-half-stroke"></i> '+t('Getting there')+'</span>':'<span style="color:var(--accent2)"><i class="fas fa-rotate-left"></i> '+t('Keep practicing')+'</span>';
  document.getElementById('tutHint').innerHTML=fb;
  addTutMsg('user','<div class="fc font-bold" style="font-size:20px;margin-bottom:4px;letter-spacing:1px">'+colorCodePronunciation(target, text)+'</div><div style="font-size:13px;color:var(--muted)">'+t('Matched transcript:')+' "'+text+'" • '+t('Score:')+' '+sc+t('/100')+'</div><div id="'+turnId+'" style="margin-top:6px;"></div>');
  if (localStorage.getItem('tutor_mode') === 'live') {
    setTimeout(() => {
      sendToGemini(text);
    }, 1200);
  } else {
    setTimeout(()=>{tutStep++;advanceTutor()},1200);
  }
}

function tutSkip(){if(!tutLesson)return;tutStep++;advanceTutor()}

function finishTutor(){
  const avg=tutScores.length?Math.round(tutScores.reduce((a,b)=>a+b,0)/tutScores.length):0;
  let g=avg>=80?'<span style="color:var(--green2)"><i class="fas fa-trophy"></i> '+t('Excellent!')+'</span>':avg>=50?'<span style="color:var(--gold)"><i class="fas fa-star"></i> '+t('Good effort!')+'</span>':'<span style="color:var(--accent2)"><i class="fas fa-seedling"></i> '+t('Keep practicing!')+'</span>';
  addTutMsg('sys','<div style="padding:10px"><b>'+t('Lesson Complete!')+'</b><br>'+t('Average:')+' <span style="color:var(--gold);font-size:18px;font-weight:800">'+avg+t('/100')+'</span><br>'+g+'<br><span style="font-size:11px;color:var(--muted)">'+t('Select another lesson above to continue.')+'</span></div>');
  document.getElementById('tutStatus').textContent=t('Lesson complete!'); const hw = document.getElementById('tutHintWrapper'); if(hw) hw.style.display='none';
  document.getElementById('tutHint').textContent=t('Select a lesson above');document.getElementById('tutHint').style.color='var(--muted)';
  document.getElementById('tutWd').textContent='--';document.getElementById('tutWp').textContent='--';document.getElementById('tutWm').textContent='--';
  document.getElementById('scoreWrap').style.display='none';document.getElementById('tutTip').style.display='none';
  setBtns(false);
}

function resetTutor(){if(tutLesson)startTutor(TL.indexOf(tutLesson))}
function addTutMsg(type,html){const d=document.createElement('div');d.className='cb '+(type==='bot'?'cai':type==='user'?'cus':type==='warn'?'cwarn':'csys');d.innerHTML=html;document.getElementById('tutChat').appendChild(d);document.getElementById('tutChat').scrollTop=9999}
function setBtns(on){['tutPlayBtn','tutMic','tutSkipBtn','tutTypeInput','tutSubmitBtn','tutInputMic'].forEach(id=>document.getElementById(id).disabled=!on)}

function buildTutorTabs(){
  const c=document.getElementById('tutLvTabs');
  const g=document.getElementById('tutTopicBtns');
  if(!c||!g)return;
  c.innerHTML='';g.innerHTML='';
  const levels=[...new Set(TL.map(l=>l.level).filter(Boolean))];
  const lvOrder=['HSK 1','HSK 2','HSK 3','HSK 4','HSK 5','HSK 6','HSK 7','HSK 8','HSK 9'];
  levels.sort((a,b)=>lvOrder.indexOf(a)-lvOrder.indexOf(b));
  const sel=document.createElement('select');
  sel.className='tb-select';
  levels.forEach((lv,i)=>{
    const opt=document.createElement('option');
    opt.value=i;opt.textContent=t(lv);sel.appendChild(opt);
  });
  sel.onchange=()=>{
    const idx=parseInt(sel.value),lv=levels[idx];
    g.innerHTML='';
    const ts=document.createElement('select');ts.className='tb-select';
    const lessons=TL.filter(l=>l.level===lv);
    lessons.forEach((lesson,i)=>{
      const o=document.createElement('option');
      o.value=i;o.textContent=t(lesson.title);ts.appendChild(o);
    });
    ts.onchange=()=>{const ls=lessons[parseInt(ts.value)];if(ls)openTutorTopic(ls.title,idx);};
    g.appendChild(ts);
    if(lessons.length)ts.dispatchEvent(new Event('change'));
  };
  c.appendChild(sel);
  sel.dispatchEvent(new Event('change'));
}

// ===== LESSONS =====
function buildLvTabs(){const c=document.getElementById('lvTabs');LV.forEach((l,i)=>{const b=document.createElement('button');b.className='tb'+(i===0?' on':'');b.textContent=t(l.n);b.onclick=()=>{
      curLv=i;
      c.querySelectorAll('.tb').forEach(x=>x.classList.remove('on'));
      b.classList.add('on');
      const isPremium = (localStorage.getItem('is_premium') === 'true');
      if (i >= 1 && !isPremium) {
        showPremiumPaywall('HSK ' + (i + 1));
        return;
      }
      if (lessonsMode === 'topics') {
        buildTopics();
      } else {
        buildFlashcards();
      }
    };c.appendChild(b)})}
function buildTopics(){
  const g=document.getElementById('tpGrid');
  if(!g) return;
  g.innerHTML='';
  const lv=LV[curLv];
  lv.tp.forEach(topicName=>{
    const ls=TD[topicName]||['L1','L2','L3'];
    const done=lv.dn?ls.length:Math.floor(ls.length*lv.pc/100);
    const d=document.createElement('div');
    d.className='cd p-5 cursor-pointer';
    d.onclick=()=>openTopicLesson(topicName);
    d.innerHTML='<div class="flex items-start justify-between mb-3"><div><h3 class="font-bold text-sm mb-1">'+t(topicName)+'</h3><p class="text-xs" style="color:var(--muted)">'+ls.length+' '+t('lessons')+'</p></div><span class="text-xs font-bold px-2 py-0.5 rounded-full" style="background:'+(lv.dn?'rgba(56,169,106,.1)':'rgba(212,166,79,.1)')+';color:'+(lv.dn?'var(--green)':'var(--gold)')+'">'+done+'/'+ls.length+'</span></div><div style="height:3px;background:var(--card2);border-radius:2px;overflow:hidden"><div class="pf" style="width:'+(done/ls.length*100)+'%;background:'+(lv.dn?'var(--green)':'linear-gradient(90deg,var(--accent),var(--gold))')+'"></div></div>';
    g.appendChild(d);
  });
}

// ===== PINYIN =====
function buildPyTabs(){
  const c=document.getElementById('pyTabs');
  if(!c) return;
  ['Initials','Finals','Four Tones'].forEach((n,i)=>{
    const b=document.createElement('button');
    b.className='tb'+(i===0?' on':'');
    b.textContent=t(n);
    b.onclick=()=>{
      c.querySelectorAll('.tb').forEach(x=>x.classList.remove('on'));
      b.classList.add('on');
      buildPy(i);
    };
    c.appendChild(b);
  });
}
function buildPy(tab){const c=document.getElementById('pyCon'); if(!c) return;
if(tab===0)c.innerHTML='<div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">'+PYI.map(p=>'<div class="pyc" onclick="playPy(this,\''+p+'\')"><div class="fc text-lg font-bold">'+p+'</div></div>').join('')+'</div>';
else if(tab===1)c.innerHTML='<div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">'+PYF.map(p=>'<div class="pyc" onclick="playPy(this,\''+p+'\')"><div class="fc text-lg font-bold">'+p+'</div></div>').join('')+'</div>';
else {
  c.innerHTML = `
    <!-- TONES VISUALIZER PANEL -->
    <div class="cd p-4 mb-4" style="border:1px solid var(--border); background:var(--card); border-radius:12px;">
      <div class="flex items-center justify-between mb-3">
        <h4 class="font-bold text-xs text-white"><i class="fas fa-wave-square text-[var(--blue)] mr-1.5"></i>${t('Tone Pitch Visualizer')}</h4>
        <span class="text-[10px] text-muted" id="toneStatus" style="color:var(--gold)">${t('Select a tone below to practice')}</span>
      </div>
      <div class="flex gap-3 items-center">
        <div class="relative flex-1 h-[70px] border border-[var(--border)] rounded-lg overflow-hidden" style="background:var(--card2)">
          <canvas id="toneCanvas" class="w-full h-full" style="display:block;"></canvas>
          <div id="toneOverlayLabel" class="absolute inset-0 flex items-center justify-center pointer-events-none text-[10px] text-muted opacity-60">${t('Pitch curve plots here')}</div>
        </div>
        <button id="toneRecordBtn" onclick="toggleToneCapture()" class="w-10 h-10 rounded-full flex items-center justify-center bg-[rgba(72,152,213,.08)] hover:bg-[rgba(72,152,213,.15)] transition border-none cursor-pointer" title="${t('Speak to visualize tone')}" disabled style="outline:none;">
          <i class="fas fa-microphone text-base" style="color:var(--muted)" id="toneMicIc"></i>
        </button>
      </div>
    </div>
    
    <div class="grid gap-2.5">
      ` + TONES.map((tone, idx) => `
        <div class="cd p-4 flex items-center gap-4 cursor-pointer" onclick="selectTone(event, ${idx}, '${tone.c}')" id="toneCard-${idx}">
          <div class="flex-1">
            <div class="fc text-xl font-black mb-0.5">${tone.c}</div>
            <div class="text-xs" style="color:var(--fg2)">${t(tone.m)}</div>
            <div class="text-[10px]" style="color:var(--muted)">${t(tone.t)}</div>
          </div>
          <svg width="120" height="40" viewBox="0 0 200 50">
            <line x1="10" y1="40" x2="190" y2="40" stroke="var(--border)" stroke-width="1"/>
            <path d="${tone.p}" stroke="var(--gold)" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          </svg>
        </div>
      `).join('') + `
    </div>
  `;
  setTimeout(() => drawToneCanvas(), 100);
}}
function playPy(el,py){document.querySelectorAll('.pyc.pl').forEach(e=>e.classList.remove('pl'));if(el&&el.classList)el.classList.add('pl');speak(py);setTimeout(()=>{if(el&&el.classList)el.classList.remove('pl')},600)}

// ===== GRAMMAR =====
function buildGr(){
  const g = document.getElementById('grGrid');
  if (!g) return;
  g.innerHTML = '';
  
  GR.forEach(gr => {
    const d = document.createElement('div');
    d.className = 'flip';
    d.style.height = '260px';
    d.onclick = () => d.classList.toggle('on');
    
    d.innerHTML = `
      <div class="fi">
        <!-- Card Front -->
        <div class="ff">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold px-2 py-0.5 rounded-full" style="background:rgba(212,166,79,.1);color:var(--gold)">${gr.lv}</span>
            <i class="fas fa-rotate text-xs" style="color:var(--muted)"></i>
          </div>
          <h3 class="font-bold text-sm mb-2">${t(gr.t)}</h3>
          
          <div class="flex items-center justify-between gap-2 mb-1">
            <div class="fc text-lg font-bold text-white">${gr.cn}</div>
            <button onclick="event.stopPropagation(); speak('${gr.cn.replace(/'/g, "\'")}', 0.7)" class="w-7 h-7 rounded-full flex items-center justify-center text-[var(--blue)] bg-[rgba(72,152,213,.08)] hover:bg-[rgba(72,152,213,.15)] transition border-none cursor-pointer" title="'+t('Listen')+'">
              <i class="fas fa-volume-high text-[10px]"></i>
            </button>
          </div>
          
          <div class="text-xs font-semibold" style="color:var(--gold)">${gr.py}</div>
          <div class="text-xs mb-3 italic" style="color:var(--fg2); opacity:.85; margin-top:2px;">"${t(gr.en)}"</div>
          <p class="text-xs font-bold uppercase tracking-wider text-muted mt-2">${t(gr.f)}</p>
          <!-- Practice Button -->
          <button onclick="event.stopPropagation(); startGrammarPractice('${(gr.t||'').replace(/'/g, "\\'")}', '${(gr.cn||'').replace(/'/g, "\\'")}', '${(gr.en||'').replace(/'/g, "\\'")}')" class="absolute bottom-4 right-4 px-2 py-1 rounded text-[9px] font-bold border border-[var(--border)] cursor-pointer" style="background:var(--card2); color:var(--gold); outline:none;">
            <i class="fas fa-gamepad mr-1"></i>'+t('Practice')+'
          </button>
        </div>
        
        <!-- Card Back -->
        <div class="fb" style="overflow-y:auto">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold px-2 py-0.5 rounded-full" style="background:rgba(212,166,79,.1);color:var(--gold)">${gr.lv}</span>
            <i class="fas fa-rotate text-xs" style="color:var(--muted)"></i>
          </div>
          <h3 class="font-bold text-sm mb-3">${t(gr.t)}</h3>
          <div class="text-[12.5px] leading-relaxed" style="color:var(--fg2)">${t(gr.b)}</div>
        </div>
      </div>
    `;
    g.appendChild(d);
  });
}

// ===== QUIZ =====

// ===== QUIZ SPEECH =====
function speakQuizWord() {
  if (typeof QZ !== 'undefined' && typeof qIdx !== 'undefined') {
    const q = QZ[qIdx];
    if (q && q.c) {
      speak(q.c, 0.7); // Speak at 0.7 speed
    }
  }
}


// ===== iOS SAFARI AUDIO UNLOCK =====
let iosAudioUnlocked = false;
function unlockIOSAudio() {
  if (iosAudioUnlocked) return;
  if (window.speechSynthesis) {
    try {
      const u = new SpeechSynthesisUtterance('');
      u.volume = 0;
      window.speechSynthesis.speak(u);
      iosAudioUnlocked = true;
      console.log("iOS Safari SpeechSynthesis unlocked via user gesture.");
    } catch(err) {
      console.error("Failed to unlock iOS SpeechSynthesis:", err);
    }
  }
}

function startQ(){qIdx=0;qScore=0;qStartT=Date.now();document.getElementById('qSt').style.display='none';document.getElementById('qAc').style.display='block';document.getElementById('qRe').style.display='none';showQ()}
function showQ(){const q=QZ[qIdx];document.getElementById('qN').textContent=qIdx+1;document.getElementById('qSc').textContent=qScore+' '+t('pts');document.getElementById('qBr').style.width=((qIdx+1)/10*100)+'%';document.getElementById('qC').textContent=q.c;document.getElementById('qP').textContent=q.p;const o=document.getElementById('qOp');o.innerHTML='';q.o.forEach((opt,i)=>{const b=document.createElement('button');b.className='bq';b.textContent=opt;b.onclick=()=>ansQ(i,b);o.appendChild(b)});document.getElementById('qNW').style.display='none'; speakQuizWord();}
function ansQ(i,btn){document.querySelectorAll('.bq').forEach(b=>b.disabled=true);if(i===QZ[qIdx].a){btn.classList.add('ok');qScore+=10}else{btn.classList.add('no');document.querySelectorAll('.bq')[QZ[qIdx].a].classList.add('ok')}document.getElementById('qNW').style.display='block';document.getElementById('qNB').innerHTML=qIdx<9?t('Next')+' <i class="fas fa-arrow-right ml-1.5"></i>':t('See Results')+' <i class="fas fa-trophy ml-1.5"></i>'}
function nxtQ(){if(qIdx<9){qIdx++;showQ()}else showRes()}
function showRes(){
  const t=Math.round((Date.now()-qStartT)/60000);
  let lv='HSK 1',de=t('Perfect starting point!'),ic='<i class="fas fa-seedling text-3xl" style="color:var(--green)"></i>',vo='150';
  recommendedLvIdx = 0;
  
  if(qScore>=70){
    lv='HSK 3';de=t('Solid HSK 3 foundation!');ic='<i class="fas fa-bolt text-3xl" style="color:var(--accent)"></i>';vo='600';
    recommendedLvIdx = 2;
  }else if(qScore>=40){
    lv='HSK 2';de=t('Ready for HSK 2!');ic='<i class="fas fa-book text-3xl" style="color:var(--blue)"></i>';vo='300';
    recommendedLvIdx = 1;
  }
document.getElementById('qAc').style.display='none';document.getElementById('qRe').style.display='block';document.getElementById('rIc').innerHTML=ic;document.getElementById('rTi').innerHTML=t('Your Level:')+' '+lv;document.getElementById('rDe').textContent=de;document.getElementById('rLv').textContent=lv;document.getElementById('rCo').textContent=qScore/10+t('/10');document.getElementById('rVo').textContent=vo;document.getElementById('rTm').textContent=t+'m'}
function rstQ(){document.getElementById('qRe').style.display='none';document.getElementById('qSt').style.display='block'}

// ===== HSK =====
function buildHSK(){
  const c = document.getElementById('hskL');
  if (!c) return;
  c.innerHTML = '';
  
  LV.forEach((l, i) => {
    const isPremium = (localStorage.getItem('is_premium') === 'true');
    let cls = 'background:var(--card2);color:var(--muted)';
    if (isPremium) {
      cls = (i === curLv) ? 'background:var(--accent);color:#fff;box-shadow:0 4px 14px rgba(200,53,37,.3)' : 'background:var(--green);color:#fff';
    } else {
      cls = i < 1 ? 'background:var(--green);color:#fff' : i === 1 ? 'background:var(--accent);color:#fff;box-shadow:0 4px 14px rgba(200,53,37,.3)' : 'background:var(--card2);color:var(--muted)';
    }
    
    // Container wrapper for card + collapsible words list
    const wrapper = document.createElement('div');
    wrapper.className = 'flex flex-col mb-3';
    
    // Level Card
    const d = document.createElement('div');
    d.className = 'cd p-4 flex items-center gap-4 cursor-pointer';
    d.innerHTML = '<div class="ldd" style="'+cls+'">'+(i+1)+'</div><div class="flex-1 min-w-0"><div class="flex items-center gap-2 mb-0.5"><h4 class="font-bold text-sm">'+t(l.n)+'</h4>'+(i===2?'<span class="text-xs px-2 py-0.5 rounded-full" style="background:rgba(200,53,37,.1);color:var(--accent)">'+t('Current')+'</span>':'')+'</div><p class="text-xs mb-2" style="color:var(--muted)">'+t(l.d)+' ('+t('Click to view vocabulary')+')</p><div style="height:3px;background:var(--card2);border-radius:2px;overflow:hidden"><div class="pf" style="width:'+l.pc+'%;background:'+(l.dn?'var(--green)':'linear-gradient(90deg,var(--accent),var(--gold))')+'"></div></div></div><div class="text-right flex-shrink-0"><div class="text-sm font-bold" style="color:'+(l.dn?'var(--green)':'var(--gold)')+'">'+l.pc+'%</div><div class="text-xs" style="color:var(--muted)">'+t(l.ls)+'</div></div>';
    
    // Collapsible Words list
    const wordsDiv = document.createElement('div');
    wordsDiv.id = 'hskWords-' + i;
    wordsDiv.className = 'p-4 border-t border-[var(--border)] rounded-b-xl';
    wordsDiv.style.background = 'var(--card)';
    wordsDiv.style.display = 'none';
    
    // Gather vocabulary words for this HSK level from our TL database
    const levelName = l.n;
    const words = [];
    getLessonsForLevel(i).forEach(lesson => {
      lesson.words.forEach(w => {
        if (!words.some(item => item.cn === w.cn)) {
          words.push(w);
        }
      });
    });
    
    let wordsHTML = '<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 mt-2">';
    words.forEach(w => {
      wordsHTML += `
        <div class="flex items-center justify-between p-2.5 rounded-xl border border-[var(--border)]" style="background:var(--card2)">
          <div class="min-w-0 pr-2">
            <div class="flex items-baseline gap-1.5 flex-wrap">
              <span class="fc font-black text-sm text-white">${w.cn}</span>
              <span class="text-xs font-semibold" style="color:var(--gold)">${w.py}</span>
            </div>
            <div class="text-[10px] mt-0.5 text-muted truncate">${t(w.en)}</div>
          </div>
          <button onclick="event.stopPropagation(); speak('${w.cn.replace(/'/g, "\'")}', 0.7)" class="w-7 h-7 rounded-full flex items-center justify-center text-[var(--blue)] bg-[rgba(72,152,213,.08)] hover:bg-[rgba(72,152,213,.15)] transition border-none cursor-pointer" title="Listen">
            <i class="fas fa-volume-high text-[10px]"></i>
          </button>
        </div>
      `;
    });
    wordsHTML += '</div>';
    
    wordsDiv.innerHTML = `
      <div class="text-xs font-semibold uppercase tracking-wider mb-2 text-muted flex justify-between items-center">
        <span>${t(levelName)} ${t('Vocab List')} (${words.length} ${t('items')})</span>
        <span class="text-[9px] lowercase font-normal italic text-muted">${t('click card again to close')}</span>
      </div>
      ${wordsHTML}
    `;
    
    d.onclick = () => {
      const isPremium = (localStorage.getItem('is_premium') === 'true');
      if (i >= 1 && !isPremium) {
        showPremiumPaywall(levelName);
        return;
      }
      const isClosed = (wordsDiv.style.display === 'none');
      
      // Close all other lists
      document.querySelectorAll('[id^="hskWords-"]').forEach(el => {
        el.style.display = 'none';
        // restore border-radius to card sibling if closed
        const cardSib = el.previousSibling;
        if (cardSib) cardSib.style.borderRadius = '';
      });
      
      if (isClosed) {
        wordsDiv.style.display = 'block';
        d.style.borderRadius = '12px 12px 0 0'; // Flatten bottom corners when open
        
        // Update current level selection
        curLv = i;
        document.querySelectorAll('#lvTabs .tb').forEach((b, bi) => {
          b.classList.toggle('on', bi === i);
        });
        buildTopics();
      } else {
        wordsDiv.style.display = 'none';
        d.style.borderRadius = '';
      }
    };
    
    wrapper.appendChild(d);
    wrapper.appendChild(wordsDiv);
    c.appendChild(wrapper);
  });
}

// ===== CANVAS / HANZI WRITER INTEGRATION =====
function initCv(){
  const charEl = document.getElementById('rfCh');
  const char = charEl ? charEl.textContent : '你';
  initHanziWriter(char);
}
function initHanziWriter(char) {
  if (typeof HanziWriter === 'undefined') {
    console.warn("HanziWriter library not loaded yet.");
    return;
  }
  const target = document.getElementById('character-target');
  if (!target) return;
  target.innerHTML = '';
  
  const toggle = document.getElementById('writeOutlineToggle');
  const showOutline = toggle ? toggle.checked : true;
  
  writer = HanziWriter.create('character-target', char, {
    width: 200,
    height: 200,
    showCharacter: false,
    showOutline: showOutline,
    padding: 5,
    strokeColor: '#F5EDE6',
    outlineColor: '#3d3028',
    drawingColor: '#c83525'
  });
  writer.quiz();
}
function animateCh() {
  if (writer) writer.animateCharacter();
}
function quizCh() {
  if (writer) writer.quiz();
}

function speakCurrentWritingChar() {
  const charEl = document.getElementById('rfCh');
  const char = charEl ? charEl.textContent : '';
  if (char && char !== '--') {
    speak(char, 0.7);
  }
}

function clrCv() {
  const charEl = document.getElementById('rfCh');
  const char = charEl ? charEl.textContent : '你';
  initHanziWriter(char);
}
function nxtCh(){
  curWI = (curWI + 1) % WCH.length;
  const ch = WCH[curWI];
  const rfCh = document.getElementById('rfCh');
  if (rfCh) rfCh.textContent = ch.c;
  const rfPy = document.getElementById('rfPy');
  if (rfPy) rfPy.textContent = ch.py;
  const rfMn = document.getElementById('rfMn');
  if (rfMn) rfMn.textContent = ch.m;
  clrCv();
  speak(ch.c, 0.7);
}
function toggleWriteOutline() {
  const toggle = document.getElementById('writeOutlineToggle');
  if (!writer) return;
  if (toggle.checked) {
    writer.showOutline();
  } else {
    writer.hideOutline();
  }
}

// ===== FLASHCARDS SRS SCHEDULER =====
function rateFlashcard(score) {
  if (flashcardList.length === 0) return;
  const word = flashcardList[curFcIdx];
  
  const intervals = [0, 60 * 1000, 12 * 60 * 60 * 1000, 24 * 60 * 60 * 1000, 4 * 24 * 60 * 60 * 1000];
  const offset = intervals[score];
  const nextReview = Date.now() + offset;
  
  const srsState = JSON.parse(localStorage.getItem('hsk_srs_state') || '{}');
  srsState[word.cn] = {
    box: score,
    due: nextReview
  };
  localStorage.setItem('hsk_srs_state', JSON.stringify(srsState));
  
  if (score >= 3) {
    const learnedWords = JSON.parse(localStorage.getItem('learned_words') || '[]');
    if (!learnedWords.includes(word.cn)) {
      learnedWords.push(word.cn);
      localStorage.setItem('learned_words', JSON.stringify(learnedWords));
    }
  }
  
  const rates = ["", t("Again (1m)"), t("Hard (12h)"), t("Good (1d)"), t("Easy (4d)")];
  toast(t("Card rescheduled: ") + rates[score], "var(--green)");
  
  nextFlashcard();
}
function toggleSrsDueFilter() {
  const toggle = document.getElementById('srsDueFilter');
  srsFilterActive = toggle ? toggle.checked : false;
  buildFlashcards();
}

// ===== PINYIN TONE PITCH VISUALIZER =====
function selectTone(e, idx, py) {
  if (e) e.stopPropagation();
  
  playPy(document.getElementById('toneCard-' + idx), py);
  
  activeToneIndex = idx;
  const recordBtn = document.getElementById('toneRecordBtn');
  if (recordBtn) {
    recordBtn.disabled = false;
    const ic = document.getElementById('toneMicIc');
    if (ic) ic.style.color = 'var(--accent)';
  }
  
  const toneNames = [t("Flat (1st Tone)"), t("Rising (2nd Tone)"), t("Dipping (3rd Tone)"), t("Falling (4th Tone)")];
  document.getElementById('toneStatus').textContent = t('Practice:')+' ' + py + ' (' + toneNames[idx] + ')';
  document.getElementById('toneOverlayLabel').style.display = 'none';
  
  drawToneCanvas();
}
function toggleToneCapture() {
  if (isTrackingPitch) {
    stopToneCapture();
  } else {
    startToneCapture();
  }
}
function startToneCapture() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    toast("Microphone access not supported in this browser.", "var(--accent)");
    return;
  }
  
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      toneMicStream = stream;
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const source = audioCtx.createMediaStreamSource(stream);
      toneAnalyser = audioCtx.createAnalyser();
      toneAnalyser.fftSize = 2048;
      source.connect(toneAnalyser);
      
      isTrackingPitch = true;
      pitchHistory = [];
      const btn = document.getElementById('toneRecordBtn');
      const ic = document.getElementById('toneMicIc');
      if (btn && ic) {
        btn.style.background = 'rgba(56,169,106,.1)';
        ic.className = 'fas fa-stop text-base';
        ic.style.color = 'var(--green)';
      }
      document.getElementById('toneStatus').textContent = t('Hum/Speak now...');
      
      trackPitch();
    })
    .catch(err => {
      console.error("Failed to access microphone for tone practice:", err);
      toast("Microphone access denied.", "var(--accent)");
    });
}
function stopToneCapture() {
  isTrackingPitch = false;
  if (toneRafId) cancelAnimationFrame(toneRafId);
  if (toneMicStream) {
    toneMicStream.getTracks().forEach(t => t.stop());
    toneMicStream = null;
  }
  if (audioCtx) {
    audioCtx.close();
    audioCtx = null;
  }
  
  const btn = document.getElementById('toneRecordBtn');
  const ic = document.getElementById('toneMicIc');
  if (btn && ic) {
    btn.style.background = 'rgba(72,152,213,.08)';
    ic.className = 'fas fa-microphone text-base';
    ic.style.color = 'var(--accent)';
  }
  document.getElementById('toneStatus').textContent = t('Analysis complete. Choose another tone to test!');
}
function trackPitch() {
  if (!isTrackingPitch) return;
  const buffer = new Float32Array(toneAnalyser.fftSize);
  toneAnalyser.getFloatTimeDomainData(buffer);
  
  const pitch = autoCorrelate(buffer, audioCtx.sampleRate);
  if (pitch !== -1 && pitch > 60 && pitch < 400) {
    pitchHistory.push(pitch);
    if (pitchHistory.length > 80) pitchHistory.shift();
  }
  
  drawToneCanvas();
  toneRafId = requestAnimationFrame(trackPitch);
}
function autoCorrelate(buffer, sampleRate) {
  let SIZE = buffer.length;
  let rms = 0;
  for (let i = 0; i < SIZE; i++) {
    const val = buffer[i];
    rms += val * val;
  }
  rms = Math.sqrt(rms / SIZE);
  if (rms < 0.008) return -1;
  
  let r1 = 0, r2 = SIZE - 1;
  let thres = 0.15;
  for (let i = 0; i < SIZE / 2; i++) {
    if (Math.abs(buffer[i]) < thres) { r1 = i; break; }
  }
  for (let i = SIZE - 1; i >= SIZE / 2; i--) {
    if (Math.abs(buffer[i]) < thres) { r2 = i; break; }
  }
  buffer = buffer.slice(r1, r2);
  SIZE = buffer.length;
  
  let c = new Float32Array(SIZE);
  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE - i; j++) {
      c[i] = c[i] + buffer[j] * buffer[j + i];
    }
  }
  
  let d = 0;
  while (c[d] > c[d + 1]) d++;
  let maxval = -1, maxpos = -1;
  for (let i = d; i < SIZE; i++) {
    if (c[i] > maxval) {
      maxval = c[i];
      maxpos = i;
    }
  }
  let T0 = maxpos;
  
  let x1 = c[T0 - 1], x2 = c[T0], x3 = c[T0 + 1];
  let a = (x1 + x3 - 2 * x2) / 2;
  let b = (x3 - x1) / 2;
  if (a) T0 = T0 - b / (2 * a);
  
  return sampleRate / T0;
}
function drawToneCanvas() {
  const canvas = document.getElementById('toneCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  const r = canvas.getBoundingClientRect();
  canvas.width = r.width;
  canvas.height = r.height;
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  ctx.strokeStyle = 'rgba(212,166,79,0.06)';
  ctx.lineWidth = 1;
  for (let y = 15; y < canvas.height; y += 15) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }
  
  if (activeToneIndex !== -1) {
    ctx.strokeStyle = 'rgba(212,166,79,0.25)';
    ctx.lineWidth = 4;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    
    const w = canvas.width;
    const h = canvas.height;
    
    if (activeToneIndex === 0) {
      ctx.moveTo(15, h * 0.25);
      ctx.lineTo(w - 15, h * 0.25);
    } else if (activeToneIndex === 1) {
      ctx.moveTo(15, h * 0.75);
      ctx.lineTo(w - 15, h * 0.25);
    } else if (activeToneIndex === 2) {
      ctx.moveTo(15, h * 0.4);
      ctx.quadraticCurveTo(w / 2, h * 0.9, w - 15, h * 0.3);
    } else if (activeToneIndex === 3) {
      ctx.moveTo(15, h * 0.2);
      ctx.lineTo(w - 15, h * 0.8);
    }
    ctx.stroke();
    ctx.setLineDash([]);
  }
  
  if (pitchHistory.length > 1) {
    ctx.strokeStyle = '#4898d5';
    ctx.lineWidth = 3.5;
    ctx.lineCap = 'round';
    ctx.beginPath();
    
    const minPitch = 80;
    const maxPitch = 250;
    
    pitchHistory.forEach((p, idx) => {
      const x = (idx / 80) * (canvas.width - 30) + 15;
      let pct = (p - minPitch) / (maxPitch - minPitch);
      pct = Math.max(0, Math.min(1, pct));
      const y = canvas.height - (pct * (canvas.height - 20) + 10);
      
      if (idx === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.stroke();
  }
}

let inputSpeechRecognition = null;
let isInputListening = false;
let _inputRecAudioMode = false;

function inputAudioFallback(ic, input) {
  if (_inputRecAudioMode) {
    stopMediaRecorder();
    _inputRecAudioMode = false;
    isInputListening = false;
    ic.className = 'fas fa-microphone';
    input.placeholder = t('Processing audio...');
    const chunks = audioChunks;
    audioChunks = [];
    if (chunks.length === 0) {
      input.placeholder = t('Type or speak Chinese here — e.g. 你好');
      return;
    }
    const mime = window._audioMime || 'audio/mp4';
    const blob = new Blob(chunks, { type: mime });
    const reader = new FileReader();
    reader.onloadend = () => {
      const b64 = reader.result.split(',')[1];
      fetch('/api/chat', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ inlineData: { mimeType: mime, data: b64 } }] }],
          systemInstruction: "Transcribe the Chinese speech in this audio. Return ONLY the transcription, nothing else."
        })
      }).then(r => r.json()).then(d => {
        const text = d.candidates?.[0]?.content?.parts?.[0]?.text || '';
        input.value = text;
        input.placeholder = t('Type or speak Chinese here — e.g. 你好');
      }).catch(() => {
        input.placeholder = t('Transcription failed. Try typing.');
      });
    };
    reader.readAsDataURL(blob);
    return;
  }
  _inputRecAudioMode = true;
  isInputListening = true;
  ic.className = 'fas fa-stop text-accent';
  input.placeholder = t('Recording... tap mic to stop');
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ audio: { channelCount: 1, echoCancellation: true, noiseSuppression: true } }).then(stream => {
      activeMicStream = stream;
      audioChunks = [];
      let mime = 'audio/mp4';
      if (typeof MediaRecorder.isTypeSupported === 'function') {
        if (!MediaRecorder.isTypeSupported(mime)) mime = 'audio/ogg;codecs=opus';
        if (!MediaRecorder.isTypeSupported(mime)) mime = 'audio/webm';
      }
      window._audioMime = mime;
      mediaRecorder = new MediaRecorder(stream, { mimeType: mime, audioBitsPerSecond: 192000 });
      mediaRecorder.ondataavailable = e => { if (e.data.size > 0) audioChunks.push(e.data); };
      mediaRecorder.start(250);
    }).catch(() => {
      _inputRecAudioMode = false;
      isInputListening = false;
      ic.className = 'fas fa-microphone';
      input.placeholder = t('Mic denied. Type instead.');
    });
  }
}

function toggleInputSpeech() {
  const btn = document.getElementById('tutInputMic');
  const ic = document.getElementById('tutInputMicIc');
  const input = document.getElementById('tutTypeInput');
  
  // Use audio recording fallback if SpeechRecognition previously failed
  if (window._useAudioFallback || localStorage.getItem('_useAudioFallback')) {
    window._useAudioFallback = true;
    return inputAudioFallback(ic, input);
  }
  
  // On non-secure HTTP, skip SpeechRecognition — go straight to recording fallback
  if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    window._useAudioFallback = true;
    localStorage.setItem('_useAudioFallback', 'true');
    return inputAudioFallback(ic, input);
  }
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    window._useAudioFallback = true;
    localStorage.setItem('_useAudioFallback', 'true');
    return inputAudioFallback(ic, input);
  }
  
  if (isInputListening) {
    if (inputSpeechRecognition) {
      inputSpeechRecognition.stop();
    }
    return;
  }
  
  if (!isMobileDevice) { speechSynthesis.cancel(); }
  
  try {
    inputSpeechRecognition = new SpeechRecognition();
    inputSpeechRecognition.lang = 'zh-CN';
    inputSpeechRecognition.interimResults = true;
    inputSpeechRecognition.maxAlternatives = 1;
    
    inputSpeechRecognition.onstart = () => {
      isInputListening = true;
      ic.className = 'fas fa-stop text-accent';
      input.placeholder = t('Listening... Speak in Mandarin');
    };
    
    inputSpeechRecognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      input.value = transcript;
    };
    
    inputSpeechRecognition.onerror = (e) => {
      console.error("Input Speech Error:", e.error);
      if (e.error === 'no-speech') {
        window._useAudioFallback = true;
        localStorage.setItem('_useAudioFallback', 'true');
        input.placeholder = t('Auto-switching to recording...');
        setTimeout(() => inputAudioFallback(ic, input), 300);
      } else {
        toast("Speech Error: " + e.error, "var(--accent)");
      }
    };
    
    inputSpeechRecognition.onend = () => {
      isInputListening = false;
      ic.className = 'fas fa-microphone';
      input.placeholder = t('Type or speak Chinese here — e.g. 你好');
    };
    
    inputSpeechRecognition.start();
  } catch(err) {
    console.error("Failed to start Input SpeechRecognition:", err);
    window._useAudioFallback = true;
    localStorage.setItem('_useAudioFallback', 'true');
    inputAudioFallback(ic, input);
  }
}

// ===== GEMINI LIVE AI TUTOR INTEGRATION =====
function toggleSettingsModal() {
  const modal = document.getElementById('geminiModal');
  if (modal) {
    modal.style.display = modal.style.display === 'none' ? 'flex' : 'none';
  }
}

function saveGeminiSettings() {
  const mode = document.getElementById('tutorModeSelect').value;
  const rate = document.getElementById('speechRateSelect').value;
  
  localStorage.setItem('tutor_mode', mode);
  localStorage.setItem('speech_rate', rate);
  
  updateSpeechRateDisplay(rate);
  toast(t("Settings Saved! Mode: ") + (mode === 'live' ? t('Live AI') : t('Simulated')), "var(--green)");
  toggleSettingsModal();
  if (tutLesson) {
    startTutor(TL.indexOf(tutLesson));
  }
}

function loadGeminiSettings() {
  const mode = localStorage.getItem('tutor_mode') || "static";
  const rate = localStorage.getItem('speech_rate') || "1.0";
  
  const modeSelect = document.getElementById('tutorModeSelect');
  const rateSelect = document.getElementById('speechRateSelect');
  
  if (modeSelect) modeSelect.value = mode;
  if (rateSelect) rateSelect.value = rate;
  
  updateSpeechRateDisplay(rate);
}

function sendToGemini(userText) {
  const statusText = document.getElementById('tutStatus');
  if(statusText) statusText.textContent = t("Thinking...");
  
  if (!userText.startsWith("你好！")) {
    geminiHistory.push({ role: "user", parts: [{ text: userText }] });
  }
  
  const loaderId = "loader-" + Date.now();
  addTutMsg('bot', '<div id="' + loaderId + '" class="animate-pulse">'+t('Thinking...')+'</div>');
  
  const langName = currentAppLang === 'es' ? 'Spanish' : currentAppLang === 'fr' ? 'French' : currentAppLang === 'ja' ? 'Japanese' : currentAppLang === 'ko' ? 'Korean' : currentAppLang === 'de' ? 'German' : currentAppLang === 'pt' ? 'Portuguese' : currentAppLang === 'it' ? 'Italian' : currentAppLang === 'ru' ? 'Russian' : currentAppLang === 'vi' ? 'Vietnamese' : 'English';
  
  let systemInstruction = "You are Li Laoshi, a Chinese language tutor. CRITICAL: Respond in Chinese first, then provide a " + langName + " translation. Format your response exactly like this:\n\n[Chinese text here]\n\n" + langName + ": [" + langName + " translation here]\n\nExample:\n你好！今天天气很好，你最喜欢做什么？\n\n" + langName + ": Hello! The weather is nice today, what do you like to do most?\n\nKeep Chinese to 2-3 simple sentences for HSK learners.";
  
  if (isRoleplayActive) {
    const activeTopic = localStorage.getItem('active_topic_name') || "Greetings";
    const setup = getRoleplaySetup(activeTopic);
    systemInstruction = "You are participating in an immersive Chinese roleplay scenario. CRITICAL: Respond in Chinese first, then provide a " + langName + " translation. Format your response exactly like this:\n\n[Chinese text here]\n\n" + langName + ": [" + langName + " translation here]\n\nAct strictly in character. Here are your roleplay parameters:\n" +
      "1. Scenario setup: " + setup.prompt + "\n" +
      "2. Your character role: " + setup.botRole + "\n" +
      "3. User's character role: " + setup.userRole + "\n" +
      "4. Keep Chinese replies to 2-3 simple sentences in character.";
  }
  
  const payload = {
    contents: geminiHistory,
    systemInstruction: systemInstruction
  };
  
  fetch('/api/chat', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  })
  .then(res => {
    if (!res.ok) return res.json().then(errData => { throw new Error(errData.error?.error?.message || errData.error?.message || errData.error || "HTTP error " + res.status); });
    return res.json();
  })
  .then(data => {
    const loader = document.getElementById(loaderId);
    if (loader) loader.remove();
    
    let reply = data.candidates[0].content.parts[0].text.trim();
    
    // Parse Chinese and English from the response
    let cleanReply = reply;
    let englishTranslation = "";
    
    // Parse Chinese and the translation from the response (matches any language label like "English:", "Vietnamese:", etc.)
    const langMatch = reply.match(/\n\s*[A-Z][a-z]+(\s[A-Z][a-z]+)?\s*:\s*([\s\S]*)/);
    if (langMatch) {
      englishTranslation = langMatch[2].trim();
      cleanReply = reply.replace(/\n\s*[A-Z][a-z]+(\s[A-Z][a-z]+)?\s*:\s*[\s\S]*/, "").trim();
    } else {
      // Fallback: try to split by newline, take first block as Chinese
      const parts = reply.split('\n').filter(l => l.trim());
      cleanReply = parts.filter(l => /[\u4e00-\u9fa5]/.test(l)).join('\n') || parts[0];
    }
    
    let suggestedAnswer = cleanReply.split(/[？！。.\n]/).filter(s => s.trim().length > 0)[0] || cleanReply;
    
    // Set targets for pronunciation matching
    currentLiveTarget = cleanReply;
    suggestedUserTarget = suggestedAnswer;
    
    // Show in side panel
    document.getElementById('tutWd').textContent = cleanReply;
    document.getElementById('tutWp').textContent = suggestedAnswer;
    document.getElementById('tutWm').textContent = englishTranslation;
    
    // Append response to history (store the original full reply)
    geminiHistory.push({ role: "model", parts: [{ text: reply }] });
    
    // Add message to chat and speak
    addTutMsg('bot', '<div class="fc font-bold" style="font-size:20px;margin-bottom:4px">' + cleanReply + '</div>' + (englishTranslation ? '<div style="font-size:14px;color:var(--muted);margin-bottom:8px;line-height:1.4">' + englishTranslation + '</div>' : '') + '<span style="font-size:11px;color:var(--blue);cursor:pointer" onclick="speak(\'' + cleanReply.replace(/'/g, "\'") + '\')"><i class="fas fa-volume-high"></i> replay</span>');
    speak(cleanReply);
    
    // Immersive Roleplay Status Updates for Live Mode
    let botRole = "Tutor", userRole = "Student";
    if (isRoleplayActive) {
      const activeTopic = localStorage.getItem('active_topic_name') || "Greetings";
      const setup = getRoleplaySetup(activeTopic);
      botRole = setup.botRole.split(' ')[0];
      userRole = setup.userRole.split(' ')[0];
    }
    if (isRoleplayActive) {
      if (statusText) statusText.textContent = t('Roleplay')+' — '+t('Your Turn')+' ['+userRole+']';
      document.getElementById('tutHint').textContent = t('Your Turn')+' — '+t('speak')+' ['+userRole+'] '+t('lines');
    } else {
      if (statusText) statusText.textContent = t("Your turn")+' — '+t("press mic");
      document.getElementById('tutHint').textContent = t("Type Chinese below or press mic");
    }
  })
  .catch(err => {
    console.error("Gemini Error:", err);
    const loader = document.getElementById(loaderId);
    if (loader) loader.remove();
    addTutMsg('warn', '⚠️ <b>Tutor Connection Failed:</b> Error generating reply. Please try again.');
    if (statusText) statusText.textContent = t("Error");
  });
}

function useHint() {
  if (!suggestedUserTarget) return;
  // 1. Speak the suggested answer so they can hear it
  speak(suggestedUserTarget);
  // 2. Fill the input text box
  const input = document.getElementById('tutTypeInput');
  if (input) {
    input.value = suggestedUserTarget;
  }
  toast(t("Hint selected! Speak now or click Submit."), "var(--gold)");
}

// ===== MAPPING HSK CARDS TO TUTOR LESSONS =====
function openTopicLesson(topicName, lvIdx) {
  if (lvIdx === undefined || lvIdx === true) lvIdx = curLv;
  const isPremium = (localStorage.getItem('is_premium') === 'true');
  if (lvIdx >= 1 && !isPremium) {
    showPremiumPaywall(LV[lvIdx].n);
    return;
  }
  localStorage.setItem('active_topic_name', topicName);
  const name = topicName.toLowerCase();
  const isLive = localStorage.getItem('tutor_mode') === 'live';
  
  if (isLive) {
    // Start Live AI Mode on this topic dynamically
    tutLesson = TL[0]; // dummy placeholder
    tutScores = [];
    geminiHistory = [];
    currentLiveTarget = "";
    suggestedUserTarget = "";
    
    const chat = document.getElementById('tutChat');
    if (chat) chat.innerHTML = '';
    
    let activePrompt = "今天的对话主题是：" + topicName + "。请用中文打招呼，然后问一个关于这个话题的简单问题。";
    
    if (isRoleplayActive) {
      const setup = getRoleplaySetup(topicName);
      activePrompt = setup.prompt;
      addTutMsg('sys', `🎭 <b>Roleplay Characters Assigned</b>:<br>&bull; Bot Role: <b>${setup.botRole}</b><br>&bull; Your Role: <b>${setup.userRole}</b>`);
    } else {
      addTutMsg('sys', '🤖 <b>'+t('Live AI Mode:')+'</b> '+t('Connecting to Gemini to chat about')+' <b>' + topicName + '</b>...');
    }
    
    sendToGemini(activePrompt);
    setBtns(true);
    scrollTo('#tutor');
    
    // Update bottom nav highlights
    document.querySelectorAll('.mnb').forEach(b => b.classList.remove('act'));
    const tutNavBtn = document.querySelector('.mnb[onclick*="tutor"]');
    if (tutNavBtn) tutNavBtn.classList.add('act');
    
  } else {
    // Simulated/Static mode — look up lesson by title or keyword
    const firstFree = TL.findIndex(l => l.level === 'HSK 1');
    let tlIdx = firstFree >= 0 ? firstFree : 0;
    // Try exact title match first
    const exactMatch = TL.findIndex(l => l.title === topicName);
    if (exactMatch !== -1) {
      tlIdx = exactMatch;
    } else {
      const simKey = [['greeting','Basic Greetings'],['numbers','Numbers & Counting'],['family','Introducing Family'],['food','Restaurant'],['restaurant','Restaurant'],['shopping','Shopping & Prices'],['hobby','Hobbies & Sports'],['sport','Hobbies & Sports'],['routine','Daily Routine'],['travel','Travel Plans'],['health','Health & Body'],['job','Job & Workplace'],['workplace','Job & Workplace'],['business','Business Meeting'],['online','Online Shopping'],['environment','Environmental Protection'],['travel plan','Travel Plans'],['technology','Technology & AI'],['ai','Technology & AI'],['fitness','Health & Fitness'],['social','Social Media & Internet'],['movie','Movie & Entertainment'],['economy','Global Economy'],['philosophy','Chinese Philosophy']];
      for (const [kw, title] of simKey) {
        if (name.includes(kw)) { const found = TL.findIndex(l => l.title.includes(title)); if (found !== -1) tlIdx = found; break; }
      }
    }
    
    if (tlIdx >= 0) {
      startTutor(tlIdx);
      scrollTo('#tutor');
      
      document.querySelectorAll('.mnb').forEach(b => b.classList.remove('act'));
      const tutNavBtn = document.querySelector('.mnb[onclick*="tutor"]');
      if (tutNavBtn) tutNavBtn.classList.add('act');
      
      toast(t("Loaded ") + TL[tlIdx].title + t("! Start speaking now."), "var(--green)");
    } else {
      const fallback = TL.findIndex(l => l.level === 'HSK 1');
      startTutor(fallback >= 0 ? fallback : 0);
      scrollTo('#tutor');
      toast(t("Loaded a free lesson!"), "var(--gold)");
    }
  }
}

// ===== AI TUTOR SPEAKING RATE CYCLE AND DISPLAY =====
function updateSpeechRateDisplay(rate) {
  const btn = document.getElementById('tutSpeedBtn');
  if (btn) btn.textContent = rate + "x";
  const select = document.getElementById('speechRateSelect');
  if (select) select.value = rate.toString();
}

function cycleSpeechRate() {
  let current = parseFloat(localStorage.getItem('speech_rate')) || 1.0;
  let next = 1.0;
  if (current === 1.0) next = 0.8;
  else if (current === 0.8) next = 0.7;
  else next = 1.0;
  
  localStorage.setItem('speech_rate', next.toString());
  updateSpeechRateDisplay(next);
  toast(t("Speaking speed: ") + next + "x", "var(--blue)");
}

// ===== INTERACTIVE 3D VOCABULARY FLASHCARDS MODE =====
let flashcardList = [];
let curFcIdx = 0;
let lessonsMode = 'topics';

function switchLessonsMode(mode) {
  lessonsMode = mode;
  const topicsCon = document.getElementById('tpGrid');
  const flashcardsCon = document.getElementById('flashcardsCon');
  const radicalsCon = document.getElementById('radicalsCon');
  const topicsBtn = document.getElementById('modeTopicsBtn');
  const flashcardsBtn = document.getElementById('modeFlashcardsBtn');
  const radicalsBtn = document.getElementById('modeRadicalsBtn');
  
  if (topicsCon) topicsCon.style.display = (mode === 'topics') ? 'grid' : 'none';
  if (flashcardsCon) flashcardsCon.style.display = (mode === 'flashcards') ? 'block' : 'none';
  if (radicalsCon) radicalsCon.style.display = (mode === 'radicals') ? 'block' : 'none';
  
  if (topicsBtn) { if (mode === 'topics') topicsBtn.classList.add('on'); else topicsBtn.classList.remove('on'); }
  if (flashcardsBtn) { if (mode === 'flashcards') flashcardsBtn.classList.add('on'); else flashcardsBtn.classList.remove('on'); }
  if (radicalsBtn) { if (mode === 'radicals') radicalsBtn.classList.add('on'); else radicalsBtn.classList.remove('on'); }
  
  if (mode === 'topics') {
    buildTopics();
  } else if (mode === 'flashcards') {
    buildFlashcards();
  } else if (mode === 'radicals') {
    buildRadicals();
  }
}

function buildFlashcards() {
  const levelName = LV[curLv].n;
  flashcardList = [];
  
  const srsState = JSON.parse(localStorage.getItem('hsk_srs_state') || '{}');
  const now = Date.now();
  
  let allWords = [];
  getLessonsForLevel(curLv).forEach(lesson => {
    lesson.words.forEach(w => {
      if (!allWords.some(item => item.cn === w.cn)) {
        allWords.push(w);
      }
    });
  });
  
  // Calculate due reviews count
  let dueCount = 0;
  allWords.forEach(w => {
    const state = srsState[w.cn];
    if (!state || state.due <= now) {
      dueCount++;
    }
  });
  const statsDisp = document.getElementById('srsStatsDisplay');
  if (statsDisp) statsDisp.textContent = t("Reviews due: ") + dueCount;
  
  allWords.forEach(w => {
    const state = srsState[w.cn];
    if (srsFilterActive) {
      if (state && state.due > now) {
        return; // Skip this card as it's not due yet
      }
    }
    
    let exCn = "", exEn = "";
    getLessonsForLevel(curLv).forEach(lesson => {
      const diag = lesson.dialogue.find(d => d.cn.includes(w.cn));
      if (diag) {
        exCn = diag.cn;
        exEn = diag.en;
      }
    });
    
    flashcardList.push({
      cn: w.cn,
      py: w.py,
      en: w.en,
      tip: w.tip || "",
      exCn: exCn || w.cn,
      exEn: exEn || w.en,
      level: levelName
    });
  });
  
  curFcIdx = 0;
  showFlashcard();
}

function showFlashcard() {
  const card = document.getElementById('flashcard');
  if (card) card.classList.remove('flipped');
  
  if (flashcardList.length === 0) {
    document.getElementById('fcFrontCn').textContent = t("None");
    document.getElementById('fcFrontPy').textContent = "";
    document.getElementById('fcBackEn').textContent = t("No vocabulary items loaded.");
    document.getElementById('fcBackTip').textContent = "";
    document.getElementById('fcIndexDisplay').textContent = "0 / 0";
    return;
  }
  
  const word = flashcardList[curFcIdx];
  document.getElementById('fcFrontLevel').textContent = word.level;
  document.getElementById('fcFrontCn').textContent = word.cn;
  document.getElementById('fcFrontPy').textContent = word.py;
  document.getElementById('fcBackEn').textContent = t(word.en);
  document.getElementById('fcBackTip').textContent = t(word.tip);
  document.getElementById('fcBackExCn').textContent = word.exCn;
  document.getElementById('fcBackExEn').textContent = t(word.exEn);
  
  document.getElementById('fcIndexDisplay').textContent = (curFcIdx + 1) + " / " + flashcardList.length;
}

function flipFlashcard() {
  const card = document.getElementById('flashcard');
  if (card) card.classList.toggle('flipped');
}

function speakFlashcard() {
  if (flashcardList.length > 0) {
    const word = flashcardList[curFcIdx];
    speak(word.cn, 0.7);
  }
}

function markFlashcardLearned() {
  if (flashcardList.length === 0) return;
  const word = flashcardList[curFcIdx];
  const learnedWords = JSON.parse(localStorage.getItem('learned_words') || '{}');
  
  if (learnedWords[word.cn]) {
    delete learnedWords[word.cn];
  } else {
    learnedWords[word.cn] = true;
  }
  localStorage.setItem('learned_words', JSON.stringify(learnedWords));
  
  updateProgress();
  showFlashcard();
  toast(t("Progress updated!"), "var(--green)");
}

function prevFlashcard() {
  if (curFcIdx > 0) {
    curFcIdx--;
    showFlashcard();
  }
}

function nextFlashcard() {
  if (curFcIdx < flashcardList.length - 1) {
    curFcIdx++;
    showFlashcard();
  }
}

function updateProgress() {
  const learnedWords = JSON.parse(localStorage.getItem('learned_words') || '{}');
  
  LV.forEach((l, li) => {
    let totalWords = 0;
    let learnedCount = 0;
    
    getLessonsForLevel(li).forEach(lesson => {
      lesson.words.forEach(w => {
        totalWords++;
        if (learnedWords[w.cn]) learnedCount++;
      });
    });
    
    if (totalWords > 0) {
      l.pc = Math.round((learnedCount / totalWords) * 100);
      l.dn = (l.pc === 100);
    } else {
      l.pc = 0;
      l.dn = false;
    }
  });
  
  buildHSK();
}

// ===== APPLY LEVEL ASSESSMENT RECOMMENDATIONS =====
let recommendedLvIdx = 0;

function applyRecommendedLevel() {
  curLv = recommendedLvIdx;
  
  // Update level selector tabs
  const tabs = document.querySelectorAll('#lvTabs .tb');
  if (tabs.length > curLv) {
    tabs.forEach((b, bi) => {
      b.classList.toggle('on', bi === curLv);
    });
  }
  
  // Switch to topics mode
  switchLessonsMode('topics');
  
  // Scroll to lessons section
  scrollTo('#lessons');
  
  // Highlight bottom navigation lessons tab
  document.querySelectorAll('.mnb').forEach(b => b.classList.remove('act'));
  const lessonsNavBtn = document.querySelector('.mnb[onclick*="lessons"]');
  if (lessonsNavBtn) lessonsNavBtn.classList.add('act');
  
  toast(t("Loaded HSK ") + (curLv + 1) + t(" lessons for you!"), "var(--green)");
}

// ===== CHARACTER-BY-CHARACTER COLOR-CODED PRONUNCIATION FEEDBACK =====
function colorCodePronunciation(target, spoken) {
  if (!target) return spoken;
  let html = "";
  const normSpoken = spoken.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()？。，！；：\s]/g, "");
  
  for (let i = 0; i < target.length; i++) {
    const char = target[i];
    if (/[.,\/#!$%\^&\*;:{}=\-_`~()？。，！；：\s]/.test(char)) {
      html += char;
      continue;
    }
    if (normSpoken.includes(char)) {
      html += '<span style="color:#4ade80; font-weight:bold;">' + char + '</span>';
    } else {
      html += '<span style="color:#f87171; font-weight:bold;">' + char + '</span>';
    }
  }
  return html;
}

// ===== WRITING CANVAS TRACING TEMPLATE OUTLINE =====
function drawDottedOutline() {
  // Bypassed for Hanzi Writer integration
}

function toggleWriteOutline() {
  clrCv();
}

// ===== PREMIUM SUBSCRIPTION PAYWALL MODAL =====
function showPremiumPaywall(levelName) {
  const title = document.getElementById('premTitle');
  if (title) title.textContent = t("Unlock ") + levelName;
  const modal = document.getElementById('premiumModal');
  if (modal) modal.style.display = 'flex';
  if (typeof paypal !== 'undefined') renderPayPalButtons();
}

async function initCapacitorPurchases() {
  if (typeof Capacitor !== 'undefined' && Capacitor.isNativePlatform()) {
    try {
      const { Purchases } = Capacitor.Plugins;
      if (Purchases) {
        // Set RevenueCat credentials based on platform
        const apiKey = Capacitor.getPlatform() === 'ios' ? 'REVENUECAT_IOS_API_KEY' : 'REVENUECAT_ANDROID_API_KEY';
        await Purchases.configure({ apiKey: apiKey });
        console.log("Capacitor Purchases configured successfully.");
        
        // Sync subscription state on load
        const customerInfo = await Purchases.getCustomerInfo();
        if (customerInfo && customerInfo.entitlements.active["premium_unlock"]) {
          localStorage.setItem('is_premium', 'true');
          updatePremiumUI();
        } else {
          localStorage.removeItem('is_premium');
        }
      }
    } catch(e) {
      console.error("Capacitor Purchases initialization failed:", e);
    }
  }
}

async function subscribePremium() {
  const isNative = typeof Capacitor !== 'undefined' && Capacitor.isNativePlatform();
  
  if (isNative) {
    try {
      const { Purchases } = Capacitor.Plugins;
      if (!Purchases) {
        toast("Billing plugin not found.", "var(--accent)");
        return;
      }
      
      toast("Contacting App Store Billing...", "var(--gold)");
      
      const offerings = await Purchases.getOfferings();
      if (offerings.current && offerings.current.availablePackages.length > 0) {
        const pkg = offerings.current.availablePackages[0]; // lifetime or monthly package
        const purchaseResult = await Purchases.purchasePackage({ aPackage: pkg });
        
        if (purchaseResult.customerInfo.entitlements.active["premium_unlock"]) {
          localStorage.setItem('is_premium', 'true');
          togglePremiumModal();
          updatePremiumUI();
          if (lessonsMode === 'topics') buildTopics(); else buildFlashcards();
          toast("Purchase successful! Welcome to Premium.", "var(--green)");
        } else {
          toast("Entitlement activation failed.", "var(--accent)");
        }
      } else {
        toast("No premium products available currently.", "var(--gold)");
      }
    } catch (err) {
      console.error("Native purchase error:", err);
      toast(err.message || "Purchase cancelled.", "var(--accent)");
    }
  } else {
    // Fallback: Web / PWA simulated check-out
    toast("Contacting Simulated App Store Billing...", "var(--gold)");
    setTimeout(() => {
      localStorage.setItem('is_premium', 'true');
      togglePremiumModal();
      updatePremiumUI();
      if (lessonsMode === 'topics') {
        buildTopics();
      } else {
        buildFlashcards();
      }
      toast("Welcome to MandarinCourse Premium! HSK 1-9 Unlocked.", "var(--green)");
    }, 1200);
  }
}

// ===== PREMIUM UNLOCK & HSK 4-9 DYNAMIC LESSON GENERATOR =====
function getLessonsForLevel(levelIdx) {
  const levelNames = ["HSK 1", "HSK 2", "HSK 3", "HSK 4", "HSK 5", "HSK 6", "HSK 7", "HSK 8", "HSK 9"];
  const levelName = levelNames[levelIdx];
  const staticLessons = TL.filter(l => l.level === levelName);
  if (staticLessons.length > 0) return staticLessons;
  
  const mockLessons = [];
  const levelNum = levelIdx + 1;
  
  // Create 3 premium HSK topics dynamically for testing HSK 4 to HSK 9
  for (let i = 1; i <= 3; i++) {
    const topicId = levelIdx * 3 + i;
    let title = "";
    let words = [];
    let dialogue = [];
    
    if (levelNum === 4) {
      if (i === 1) {
        title = "Business Meeting (会议)";
        words = [
          { cn: "会议", py: "huì yì", en: "meeting / conference", tip: "Used for business gatherings." },
          { cn: "讨论", py: "tǎo lùn", en: "to discuss", tip: "Expresses exchanging views." },
          { cn: "方案", py: "fāng àn", en: "scheme / plan", tip: "A proposal or project plan." },
          { cn: "决定", py: "jué dìng", en: "to decide", tip: "Making a resolution." },
          { cn: "同意", py: "tóng yì", en: "to agree", tip: "Giving consent." },
          { cn: "成功", py: "chéng gōng", en: "success / successful", tip: "Achieving a positive outcome." }
        ];
        dialogue = [
          { role: "tutor", cn: "今天我们要讨论新的方案，你准备好了吗？", py: "Jīntiān wǒmen yào tǎolùn xīn de fāng'àn, nǐ zhǔnbèi hǎo le ma?", en: "Today we need to discuss the new plan, are you ready?" },
          { role: "user", cn: "我准备好了，我相信这个方案会成功。", py: "Wǒ zhǔnbèi hǎo le, wǒ xiāngxìn zhège fāng'àn huì chénggōng.", en: "I am ready, I believe this plan will succeed." }
        ];
      } else if (i === 2) {
        title = "Job Interview (面试)";
        words = [
          { cn: "面试", py: "miàn shì", en: "to interview / job interview", tip: "Face-to-face evaluation." },
          { cn: "简历", py: "jiǎn lì", en: "resume / CV", tip: "Document of work history." },
          { cn: "经验", py: "jīng yàn", en: "experience", tip: "Skills gained over time." },
          { cn: "专业", py: "zhuān yè", en: "major / professional", tip: "Field of study or expertise." },
          { cn: "能力", py: "néng lì", en: "ability / capability", tip: "Skill level or power." },
          { cn: "负责", py: "fù zé", en: "to be responsible for", tip: "Taking charge of a task." }
        ];
        dialogue = [
          { role: "tutor", cn: "请介绍一下你的专业和工作经验。", py: "Qǐng jièshào yīxià nǐ de zhuānyè hé gōngzuò jīngyàn.", en: "Please introduce your major and work experience." },
          { role: "user", cn: "我准备好了，我有三年的负责经验。", py: "Wǒ zhǔnbèi hǎo le, wǒ yǒu sān nián de fùzé jīngyàn.", en: "I am ready, and I have three years of experience." }
        ];
      } else {
        title = "Rental Apartment (租房)";
        words = [
          { cn: "租房", py: "zū fáng", en: "to rent a house/apartment", tip: "Leasing living space." },
          { cn: "合同", py: "hé tong", en: "contract / agreement", tip: "Legal binding document." },
          { cn: "房东", py: "fáng dōng", en: "landlord", tip: "Owner of the property." },
          { cn: "押金", py: "yā jīn", en: "deposit", tip: "Security money paid upfront." },
          { cn: "房租", py: "fáng zū", en: "rent money", tip: "Monthly payment." },
          { cn: "交通", py: "jiāo tōng", en: "transportation / traffic", tip: "Convenience of travel." }
        ];
        dialogue = [
          { role: "tutor", cn: "这里的交通很方便，房租你觉得合适吗？", py: "Zhèlǐ de jiāotōng hěn fāngbiàn, fángzū nǐ juéde héshì ma?", en: "The transportation here is very convenient, do you think the rent is suitable?" },
          { role: "user", cn: "我觉得合适，我们可以签合同。", py: "Wǒ juéde héshì, wǒmen kěyǐ qiān hétóng.", en: "I think it is suitable, we can sign the contract." }
        ];
      }
    } else {
      title = levelName + " - Topic " + i + " (Advanced)";
      words = [
        { cn: "研究", py: "yán jiū", en: "to research", tip: "Deep study of a subject." },
        { cn: "社会", py: "shè huì", en: "society", tip: "Community of people." },
        { cn: "影响", py: "yǐng xiǎng", en: "influence / effect", tip: "Impact on something." },
        { cn: "提高", py: "tí gāo", en: "to improve / raise", tip: "Increasing quality or level." },
        { cn: "重要", py: "zhòng yào", en: "important", tip: "Having great significance." },
        { cn: "发展", py: "fā zhǎn", en: "to develop", tip: "Growth and expansion." }
      ];
      dialogue = [
        { role: "tutor", cn: "研究社会的发展是非常重要的。", py: "Yánjiū shèhuì de fāzhǎn shì fēicháng zhòngyào de.", en: "Researching the development of society is very important." },
        { role: "user", cn: "对，提高生活水平有深远的影响。", py: "Duì, tígāo shēnghuó shuǐpíng yǒu shēnyuǎn de yǐngxiǎng.", en: "Yes, it has a profound influence on improving standard of living." }
      ];
    }
    
    mockLessons.push({
      id: topicId,
      level: levelName,
      title: title,
      icon: "fa-graduation-cap",
      desc: "Advanced reading and conversational practice for " + levelName + ".",
      words: words,
      dialogue: dialogue
    });
  }
  return mockLessons;
}

function updatePremiumUI() {
  const isPremium = (localStorage.getItem('is_premium') === 'true');
  
  // Add premium badge to the logo if active
  const logo = document.querySelector('h1.font-black');
  if (logo && !logo.querySelector('.fa-crown')) {
    logo.innerHTML = '<i class="fas fa-crown text-[var(--gold)] mr-2"></i>' + logo.textContent;
  }
  
  // Re-build HSK progress list to show colored active states
  buildHSK();
}

// ===== FLOATING DIAGNOSTICS CONSOLE LOGGING =====
const logs = [];

function logToDebug(msg, type = 'info') {
  const color = type === 'error' ? 'var(--accent2)' : type === 'warn' ? 'var(--gold)' : '#fff';
  logs.push(`<div style="color:${color};margin-bottom:3px;border-bottom:1px solid #1a1a1a;padding-bottom:2px;">[${new Date().toLocaleTimeString()}] ${msg}</div>`);
  if (logs.length > 40) logs.shift();
  const debugLogs = document.getElementById('debugLogs');
  if (debugLogs) {
    debugLogs.innerHTML = logs.join('');
    debugLogs.scrollTop = debugLogs.scrollHeight;
  }
}

const _log = console.log;
const _error = console.error;
const _warn = console.warn;

console.log = function(...args) {
  _log.apply(console, args);
  logToDebug(args.join(' '), 'info');
};
console.error = function(...args) {
  _error.apply(console, args);
  logToDebug(args.join(' '), 'error');
};
console.warn = function(...args) {
  _warn.apply(console, args);
  logToDebug(args.join(' '), 'warn');
};

window.onerror = function(message, source, lineno, colno, error) {
  console.error(`${message} at ${source}:${lineno}:${colno}`);
  return false;
};

function toggleDebugConsole() {
  const con = document.getElementById('debugConsole');
  if (!con) return;
  const isHidden = con.style.display === 'none';
  con.style.display = isHidden ? 'block' : 'none';
  
  if (isHidden) {
    const hasAPI = ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window);
    const hasTTS = ('speechSynthesis' in window);
    const debugEnv = document.getElementById('debugEnv');
    if (debugEnv) {
      debugEnv.innerHTML = `
        <b>URL:</b> ${window.location.href.split('?')[0]}<br>
        <b>Secure Context:</b> ${window.isSecureContext}<br>
        <b>STT API (Microphone):</b> ${hasAPI}<br>
        <b>TTS API (Speaker):</b> ${hasTTS}<br>
        <b>MicAvailable Var:</b> ${micAvailable}
      `;
    }
  }
}

// ===== USER VOICE RECORDING & PLAYBACK =====

// ===== USER VOICE RECORDING & PLAYBACK =====
function stopMediaRecorder() {
  const wave = document.getElementById('tutVoiceWave');
  if (wave) wave.style.display = 'none';
  if (mediaRecorder && mediaRecorder.state !== 'inactive') {
    try {
      mediaRecorder.stop();
    } catch(e) {
      console.error("Error stopping MediaRecorder:", e);
    }
  }
  // Force stop all microphone tracks immediately
  if (activeMicStream) {
    try {
      activeMicStream.getTracks().forEach(track => track.stop());
      console.log("Microphone stream tracks stopped successfully.");
    } catch(e) {
      console.error("Error stopping activeMicStream tracks:", e);
    }
    activeMicStream = null;
  }
}

function playRecordedVoice(url) {
  if (!url) return;
  try {
    // Since clicking the button is a direct user gesture, creating a new Audio element is 100% safe
    const audio = new Audio(url);
    audio.play().catch(e => console.error("Direct playback failed:", e));
  } catch (e) {
    console.error("playRecordedVoice exception:", e);
  }
}

// ===== ADVANCED UPGRADES CORE LOGIC =====

// Auto-apply saved theme on script load
(function() {
  const savedTheme = localStorage.getItem('hsk_theme');
  if (savedTheme && savedTheme !== 'default') {
    document.documentElement.classList.add('theme-' + savedTheme);
  }
})();

// A. Theme Color Toggler
// DUPLICATE THEME & RADICAL EXPLORER SECTION DELETED TO PREVENT REDECLARATION SYNTAX ERRORS
// C. Dialogue Roleplay Mode
let isRoleplayActive = false;
function getRoleplaySetup(topicName) {
  let botRole = "老师 🎓", userRole = "学生 📝";
  let prompt = "我们来做一个角色扮演对话。你是中文老师，我是学生。请用中文跟我说话，用简单的汉语。";
  const t = topicName.toLowerCase();
  if (t.includes('restaurant') || t.includes('food') || t.includes('eat') || t.includes('hsk 1 lesson 2')) {
    botRole = "服务员 🧑‍🍳";
    userRole = "顾客 🍽️";
    prompt = "我们来做一个角色扮演对话。你是餐厅的服务员，我是顾客。请先用中文跟我打招呼，问我想吃什么。";
  } else if (t.includes('family') || t.includes('friend') || t.includes('introducing') || t.includes('hsk 1 lesson 3')) {
    botRole = "朋友 A 👥";
    userRole = "朋友 B 👥";
    prompt = "我们来做一个角色扮演对话。你是朋友A，我是朋友B，我们在咖啡馆见面。请先用中文跟我打招呼，问我家人怎么样。";
  } else if (t.includes('airport') || t.includes('travel') || t.includes('hsk 1 lesson 4')) {
    botRole = "海关人员 👮";
    userRole = "乘客 ✈️";
    prompt = "我们来做一个角色扮演对话。你是北京机场的海关人员，我是乘客。请先用中文跟我打招呼，要看我的护照。";
  // Extended roleplay scenarios from tutor-data.js
  } else if (typeof EXTRA_ROLEPLAY_SCENARIOS !== 'undefined') {
    for (const s of EXTRA_ROLEPLAY_SCENARIOS) {
      if (s.match.some(m => t.includes(m))) {
        botRole = s.botRole;
        userRole = s.userRole;
        prompt = s.prompt;
        break;
      }
    }
  }
  return { botRole, userRole, prompt };
}

function toggleRoleplayMode() {
  isRoleplayActive = !isRoleplayActive;
  const btn = document.getElementById('tutRoleplayBtn');
  if (!btn) return;
  
  if (isRoleplayActive) {
    btn.innerHTML = '<i class="fas fa-theater-masks mr-1"></i>'+t('Roleplay');
    btn.style.color = 'var(--gold)';
    btn.style.background = 'rgba(212,166,79,.1)';
    toast(t("Dialogue Roleplay Mode Active! Speak your role lines."), "var(--green)");
    
    // Assign roleplay character immediately
    const activeTopic = localStorage.getItem('active_topic_name') || (tutLesson ? tutLesson.title : "Greetings");
    const setup = getRoleplaySetup(activeTopic);
    addTutMsg('sys', `🎭 <b>Roleplay Characters Assigned</b>:<br>&bull; Bot Role: <b>${setup.botRole}</b><br>&bull; Your Role: <b>${setup.userRole}</b>`);
    
    if (localStorage.getItem('tutor_mode') === 'live') {
      geminiHistory = [
        { role: "user", parts: [{ text: setup.prompt }] }
      ];
      sendToGemini("你好！请用中文跟我聊天。");
    }
  } else {
    btn.innerHTML = '<i class="fas fa-user-friends mr-1"></i>'+t('Study');
    btn.style.color = 'var(--muted)';
    btn.style.background = 'var(--card2)';
    toast(t("Returned to Dialogue Study Mode."), "var(--gold)");
    
    if (localStorage.getItem('tutor_mode') === 'live') {
      geminiHistory = [];
      sendToGemini("你好！请用中文跟我聊天。我是你的学生。");
    }
  }
  
  if (localStorage.getItem('tutor_mode') !== 'live') {
    resetTutor();
  }
}

// D. Accent Comparison Recorder
let compRecorder = null;
let compChunks = [];
let compUserVoiceUrl = null;
let isCompRecording = false;
function toggleComparisonRecord() {
  if (isCompRecording) {
    stopComparisonRecord();
  } else {
    startComparisonRecord();
  }
}
function startComparisonRecord() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    toast("Recording not supported.", "var(--accent)");
    return;
  }
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      compRecorder = new MediaRecorder(stream);
      compChunks = [];
      compRecorder.ondataavailable = e => compChunks.push(e.data);
      compRecorder.onstop = () => {
        const blob = new Blob(compChunks, { type: 'audio/wav' });
        compUserVoiceUrl = URL.createObjectURL(blob);
        document.getElementById('compPlayUserBtn').disabled = false;
        document.getElementById('compPlayUserBtn').style.color = 'var(--green)';
        toast("Accent voice recorded successfully!", "var(--green)");
      };
      
      compRecorder.start();
      isCompRecording = true;
      
      const btn = document.getElementById('compRecBtn');
      const ic = document.getElementById('compRecIc');
      if (btn && ic) {
        btn.style.background = 'rgba(200,53,37,.1)';
        btn.style.color = 'var(--accent)';
        ic.className = 'fas fa-stop text-[8px]';
      }
      toast("Recording voice accent...", "var(--gold)");
    })
    .catch(err => {
      console.error("Accent recording failed:", err);
      toast("Recording access denied.", "var(--accent)");
    });
}
function stopComparisonRecord() {
  isCompRecording = false;
  if (compRecorder) {
    compRecorder.stop();
    compRecorder.stream.getTracks().forEach(t => t.stop());
  }
  const btn = document.getElementById('compRecBtn');
  const ic = document.getElementById('compRecIc');
  if (btn && ic) {
    btn.style.background = 'var(--card)';
    btn.style.color = 'var(--fg)';
    ic.className = 'fas fa-microphone text-[8px]';
  }
}
function playComparisonAudio(type) {
  if (type === 'ai') {
    if (flashcardList.length > 0) {
      const word = flashcardList[curFcIdx];
      speak(word.cn, 0.7);
    }
  } else if (type === 'user') {
    if (compUserVoiceUrl) {
      const audio = new Audio(compUserVoiceUrl);
      audio.play().catch(e => console.error("Me playback failed:", e));
    }
  }
}

// E. Grammar Practice Builder
let currentGrScrambled = [];
let currentGrAnswer = [];
let currentGrTarget = '';
let currentGrEn = '';
function startGrammarPractice(title, cn, en) {
  currentGrTarget = cn;
  currentGrEn = en;
  currentGrAnswer = [];
  
  currentGrScrambled = cn.split('');
  currentGrScrambled.sort(() => Math.random() - 0.5);
  
  document.getElementById('grPracticeTitle').textContent = t("Practice:") + " " + title;
  document.getElementById('grPracticeEn').textContent = en;
  
  renderGrPracticeGrid();
  document.getElementById('grammarPracticeModal').style.display = 'flex';
}
function closeGrammarPractice() {
  document.getElementById('grammarPracticeModal').style.display = 'none';
}
function renderGrPracticeGrid() {
  const scrambledCon = document.getElementById('grScrambledCon');
  const answerCon = document.getElementById('grAnswerCon');
  if (!scrambledCon || !answerCon) return;
  
  scrambledCon.innerHTML = '';
  currentGrScrambled.forEach((char, idx) => {
    const btn = document.createElement('button');
    btn.className = 'px-3 py-1.5 rounded-lg text-sm font-bold border border-[var(--border)] cursor-pointer text-white';
    btn.style.background = 'var(--card2)';
    btn.onclick = () => {
      currentGrAnswer.push(char);
      currentGrScrambled.splice(idx, 1);
      renderGrPracticeGrid();
    };
    btn.textContent = char;
    scrambledCon.appendChild(btn);
  });
  
  answerCon.innerHTML = '';
  currentGrAnswer.forEach((char, idx) => {
    const btn = document.createElement('button');
    btn.className = 'px-3 py-1.5 rounded-lg text-sm font-bold border border-[var(--accent)] cursor-pointer text-white';
    btn.style.background = 'rgba(200,53,37,.1)';
    btn.onclick = () => {
      currentGrScrambled.push(char);
      currentGrAnswer.splice(idx, 1);
      renderGrPracticeGrid();
    };
    btn.textContent = char;
    answerCon.appendChild(btn);
  });
}
function resetGrammarPractice() {
  currentGrAnswer = [];
  currentGrScrambled = currentGrTarget.split('');
  renderGrPracticeGrid();
}
function checkGrammarPractice() {
  const answerStr = currentGrAnswer.join('');
  if (answerStr === currentGrTarget) {
    toast(t("Correct! Well done!"), "var(--green)");
    speak(currentGrTarget, 0.7);
    setTimeout(() => closeGrammarPractice(), 1200);
  } else {
    toast(t("Incorrect. Try again!"), "var(--accent)");
  }
}

// G. Floating Characters Background Particle Generator
function createFloatingCharacters() {
  const container = document.getElementById('heroBg');
  if (!container) return;
  const chars = ['汉', '语', '学', '中', '文', '说', '写', '拼', '音', '字'];
  const count = 16;
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'float-char';
    el.textContent = chars[Math.floor(Math.random() * chars.length)];
    const size = Math.floor(Math.random() * 24) + 16;
    const left = Math.floor(Math.random() * 95);
    const delay = Math.random() * 15;
    const duration = Math.random() * 10 + 15;
    
    el.style.fontSize = size + 'px';
    el.style.left = left + '%';
    el.style.animationDelay = delay + 's';
    el.style.animationDuration = duration + 's';
    container.appendChild(el);
  }
}

// Translations moved to top

function translateUI() {
  document.querySelectorAll('[data-tr]').forEach(el => {
    const key = el.getAttribute('data-tr');
    if (!key) return;
    const tr = t(key);
    if (el.hasAttribute('placeholder')) {
      el.setAttribute('placeholder', tr);
    } else if (el.hasAttribute('title')) {
      el.setAttribute('title', tr);
    } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.value = tr;
    } else {
      // For elements with icons, replace last text node only
      const childNodes = el.childNodes;
      let lastText = null;
      for (let i = childNodes.length - 1; i >= 0; i--) {
        if (childNodes[i].nodeType === 3 && childNodes[i].textContent.trim()) {
          lastText = childNodes[i];
          break;
        }
      }
      if (lastText) lastText.textContent = ' ' + tr;
      else el.textContent = tr;
    }
  });
}

function changeAppLanguage(lang) {
  currentAppLang = lang;
  localStorage.setItem('app_lang', lang);
  
  // Re-build all visual elements to apply translations instantly
  if (lessonsMode === 'topics') buildTopics(); else buildFlashcards();
  buildTutorTabs();
  buildLvTabs();
  buildGr();
  buildHSK();
  buildPy();
  buildRadicals();
  buildHero();
  translateUI();
  
  const dropdown = document.getElementById('langDropdown');
  if (dropdown) dropdown.style.display = 'none';
  
  const selectLang = document.getElementById('appLanguageSelect');
  if (selectLang) selectLang.value = lang;
  
  // Restart the current active lesson/tutor session in the new language
  const activeTopic = localStorage.getItem('active_topic_name') || "Greetings";
  openTopicLesson(activeTopic);
  
  toast("Language changed to: " + lang.toUpperCase(), "var(--green)");
}

async function saveReminderSettings() {
  const interval = document.getElementById('reminderIntervalSelect').value;
  const time = document.getElementById('reminderTimeInput').value;
  localStorage.setItem('reminder_interval', interval);
  localStorage.setItem('reminder_time', time);
  
  if (interval === 'none') {
    if (typeof Capacitor !== 'undefined' && Capacitor.isNativePlatform()) {
      try {
        const { LocalNotifications } = Capacitor.Plugins;
        if (LocalNotifications) await LocalNotifications.cancel({ notifications: [{ id: 1 }] });
      } catch(e) { console.error(e); }
    }
    toast("Study Reminders turned off.", "var(--gold)");
    return;
  }
  
  const [hours, minutes] = time.split(':').map(Number);
  const isNative = typeof Capacitor !== 'undefined' && Capacitor.isNativePlatform();
  
  if (isNative) {
    try {
      const { LocalNotifications } = Capacitor.Plugins;
      if (LocalNotifications) {
        const permResult = await LocalNotifications.requestPermissions();
        if (permResult.display === 'granted') {
          await LocalNotifications.cancel({ notifications: [{ id: 1 }] });
          await LocalNotifications.schedule({
            notifications: [
              {
                title: "Time to study Chinese! 汉",
                body: "Keep up your streak and review your flashcards on MandarinCourse!",
                id: 1,
                schedule: {
                  every: interval === 'daily' ? 'day' : 'week',
                  on: { hour: hours, minute: minutes }
                }
              }
            ]
          });
          toast("Native reminders scheduled successfully!", "var(--green)");
        } else {
          toast("Notification permission denied.", "var(--accent)");
        }
      }
    } catch(err) {
      console.error(err);
      toast("Failed scheduling native notifications.", "var(--accent)");
    }
  } else {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.ready.then(registration => {
            registration.showNotification("Study Reminders Active", {
              body: `We will remind you ${interval} at ${time}!`,
              icon: "https://cdn-icons-png.flaticon.com/512/3898/3898083.png"
            });
          });
        }
        toast(`Web reminders scheduled: ${interval} at ${time}`, "var(--green)");
      } else {
        toast("Notification permissions denied.", "var(--accent)");
      }
    } else {
      toast("Browser does not support notifications.", "var(--accent)");
    }
  }
}

// A. Theme & Language Dropdowns
function toggleThemeDropdown(e) {
  if (e) e.stopPropagation();
  const dropdown = document.getElementById('themeDropdown');
  if (dropdown) dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
  const langDropdown = document.getElementById('langDropdown');
  if (langDropdown) langDropdown.style.display = 'none';
}

function toggleLangDropdown(e) {
  if (e) e.stopPropagation();
  const dropdown = document.getElementById('langDropdown');
  if (dropdown) dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
  const themeDropdown = document.getElementById('themeDropdown');
  if (themeDropdown) themeDropdown.style.display = 'none';
}

function changeTheme(themeName) {
  document.documentElement.classList.remove('theme-jade', 'theme-sapphire', 'theme-amber');
  if (themeName !== 'default') {
    document.documentElement.classList.add('theme-' + themeName);
  }
  localStorage.setItem('hsk_theme', themeName);
  const dropdown = document.getElementById('themeDropdown');
  if (dropdown) dropdown.style.display = 'none';
  toast("Theme updated: " + themeName, "var(--green)");
}

document.addEventListener('click', (e) => {
  const target = e.target;
  const langDropdown = document.getElementById('langDropdown');
  const themeDropdown = document.getElementById('themeDropdown');
  const langBtn = document.getElementById('langBtn');
  const themeBtn = document.getElementById('themeBtn');
  if (langDropdown && !langDropdown.contains(target) && target !== langBtn && !(langBtn && langBtn.contains(target))) langDropdown.style.display = 'none';
  if (themeDropdown && !themeDropdown.contains(target) && target !== themeBtn && !(themeBtn && themeBtn.contains(target))) themeDropdown.style.display = 'none';
});

// B. Radical Explorer data & grid rendering
const RADICALS = typeof EXTRA_RADICALS !== 'undefined' ? EXTRA_RADICALS : [{r:'氵',n:'Water',m:'Water',ex:['河','海']}];
let activeRadIndex = -1;
function buildRadicals() {
  const grid = document.getElementById('radicalsListGrid');
  if (!grid) return;
  grid.innerHTML = RADICALS.map((rad, idx) => `
    <button onclick="selectRadical(${idx})" class="w-full aspect-square rounded-xl border border-[var(--border)] bg-[var(--card2)] flex flex-col items-center justify-center cursor-pointer transition hover:border-[var(--accent)]" style="outline:none;">
      <span class="text-2xl font-black text-white">${rad.r}</span>
      <span class="text-[9px] text-muted font-bold mt-1">${rad.n.split(' ')[0]}</span>
    </button>
  `).join('');
  if (activeRadIndex === -1) selectRadical(0);
}
const RADICAL_EXAMPLES_DICT = {
  '喝': { py: 'hē', en: 'to drink' },
  '汽': { py: 'qì', en: 'steam / gas' },
  '没': { py: 'méi', en: 'not have / no' },
  '水': { py: 'shuǐ', en: 'water' },
  '你': { py: 'nǐ', en: 'you' },
  '他': { py: 'tā', en: 'he / him' },
  '们': { py: 'men', en: 'plural suffix' },
  '做': { py: 'zuò', en: 'to do' },
  '什': { py: 'shén', en: 'what' },
  '吃': { py: 'chī', en: 'to eat' },
  '叫': { py: 'jiào', en: 'to call / be named' },
  '和': { py: 'hé', en: 'and / harmony' },
  '问': { py: 'wèn', en: 'to ask' },
  '吧': { py: 'ba', en: 'suggestion particle' },
  '杯': { py: 'bēi', en: 'cup / glass' },
  '桌': { py: 'zhuō', en: 'table / desk' },
  '椅': { py: 'yǐ', en: 'chair' },
  '校': { py: 'xiào', en: 'school' },
  '热': { py: 'rè', en: 'hot' },
  '点': { py: 'diǎn', en: 'o\'clock / point' },
  '照': { py: 'zhào', en: 'to shine / photo' },
  '好': { py: 'hǎo', en: 'good / well' },
  '她': { py: 'tā', en: 'she / her' },
  '妈': { py: 'mā', en: 'mother' },
  '姐': { py: 'jiě', en: 'older sister' },
  '妹': { py: 'mèi', en: 'younger sister' }
};

function selectRadical(idx) {
  activeRadIndex = idx;
  const rad = RADICALS[idx];
  document.getElementById('radDisplayChar').textContent = rad.r;
  document.getElementById('radDisplayName').textContent = rad.n;
  document.getElementById('radDisplayMeaning').textContent = rad.m;
  
  const listCon = document.getElementById('radExampleList');
  if (!listCon) return;
  listCon.innerHTML = '';
  
  rad.examples.forEach(char => {
    let wordItem = { cn: char, py: '', en: 'Character' };
    if (RADICAL_EXAMPLES_DICT[char]) {
      wordItem = { cn: char, py: RADICAL_EXAMPLES_DICT[char].py, en: RADICAL_EXAMPLES_DICT[char].en };
    }
    const btn = document.createElement('button');
    btn.className = 'cd p-2.5 rounded-xl border border-[var(--border)] bg-[var(--card)] text-left flex items-center justify-between gap-3 cursor-pointer hover:border-[var(--accent)]';
    btn.style.minWidth = '120px';
    btn.onclick = () => speak(wordItem.cn, 0.7);
    btn.innerHTML = `
      <div>
        <div class="fc text-sm font-bold text-white">${wordItem.cn}</div>
        <div class="text-[9px] text-[var(--gold)] font-semibold">${wordItem.py}</div>
        <div class="text-[8px] text-muted truncate max-w-[80px]">${t(wordItem.en)}</div>
      </div>
      <i class="fas fa-volume-high text-[9px] text-muted"></i>
    `;
    listCon.appendChild(btn);
  });
}


function syncReminderInputs() {
  const interval = localStorage.getItem('reminder_interval') || 'none';
  const time = localStorage.getItem('reminder_time') || '10:00';
  const lang = localStorage.getItem('app_lang') || 'en';
  
  const selectInt = document.getElementById('reminderIntervalSelect');
  const inputTime = document.getElementById('reminderTimeInput');
  const selectLang = document.getElementById('appLanguageSelect');
  
  if (selectInt) selectInt.value = interval;
  if (inputTime) inputTime.value = time;
  if (selectLang) selectLang.value = lang;
}
function buildDictionary(level) {
  const lv = level || 1;
  document.querySelectorAll('.dict-tab').forEach(t => t.classList.toggle('on', +t.dataset.lv === lv));
  const list = document.getElementById('dictList');
  if (!list) return;
  const words = typeof HSK_WORDS !== 'undefined' ? HSK_WORDS.filter(w => w.l === lv) : [];
  list.innerHTML = words.map(w => '<div class="dict-item" onclick="speak(\''+w.c+'\')"><div class="fc text-xl font-bold dict-cn">'+w.c+'</div><div style="color:var(--fg2);font-size:13px">'+w.p+'</div><div style="color:var(--muted);font-size:12px">'+w.e+'</div></div>').join('');
}
function filterDictionary() {
  const q = document.getElementById('dictSearch').value.trim().toLowerCase();
  const activeLv = document.querySelector('.dict-tab.on');
  const lv = activeLv ? +activeLv.dataset.lv : 1;
  const list = document.getElementById('dictList');
  if (!list) return;
  const words = typeof HSK_WORDS !== 'undefined' ? HSK_WORDS.filter(w => w.l === lv && (!q || w.c.includes(q) || w.p.includes(q) || w.e.toLowerCase().includes(q))) : [];
  list.innerHTML = words.map(w => '<div class="dict-item" onclick="speak(\''+w.c+'\')"><div class="fc text-xl font-bold dict-cn">'+w.c+'</div><div style="color:var(--fg2);font-size:13px">'+w.p+'</div><div style="color:var(--muted);font-size:12px">'+w.e+'</div></div>').join('');
}
document.addEventListener('DOMContentLoaded', function() {
  if (typeof initTranslate === 'function') initTranslate();
  buildDictionary(1);
});