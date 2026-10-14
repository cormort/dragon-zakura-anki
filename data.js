// 兩份教材資料；key 沿用舊頁的 localStorage 鍵以保留學習紀錄
const DECKS = [
 {
  "key": "anki_progress_1_龍櫻100例句_勵志名言篇_ANKI中英對照.html",
  "title": "教材 1 · 勵志名言篇",
  "sub": "龍櫻 100 例句",
  "items": [
   {
    "id": 1,
    "en": "Education is the door to freedom.",
    "zh": "教育是通向自由之門。"
   },
   {
    "id": 2,
    "en": "Challenges make life interesting.",
    "zh": "挑戰使生活變得有趣。"
   },
   {
    "id": 3,
    "en": "Difficulties make life worth living.",
    "zh": "困難讓生活有價值。"
   },
   {
    "id": 4,
    "en": "Nothing in the world can take the place of persistence.",
    "zh": "世界上沒有任何東西可以取代堅持。"
   },
   {
    "id": 5,
    "en": "It’s impossible to defeat a person who never gives up.",
    "zh": "打敗一個永不放棄的人是不可能的。"
   },
   {
    "id": 6,
    "en": "The most important thing in life is to have a great aim and the determination to attain it.",
    "zh": "生活中最重要的事情就是有一個遠大的目標，並有決心實現它。"
   },
   {
    "id": 7,
    "en": "If you can dream it, you can do it.",
    "zh": "只要你想得到，你就做得到。"
   },
   {
    "id": 8,
    "en": "Actions speak louder than words.",
    "zh": "行動比語言更具有說服力。"
   },
   {
    "id": 9,
    "en": "Deeds are more powerful than words.",
    "zh": "行為比言語更強大。"
   },
   {
    "id": 10,
    "en": "Mistakes show us what we still need to learn.",
    "zh": "從錯誤中我們知道該學什麼。"
   },
   {
    "id": 11,
    "en": "Difficult times show us who our true friends are.",
    "zh": "艱難歲月讓我們知道誰是真正的朋友。／患難見真情。"
   },
   {
    "id": 12,
    "en": "It doesn’t cost anything to be nice.",
    "zh": "做好人是不費吹灰之力的。"
   },
   {
    "id": 13,
    "en": "Believe in what you can become.",
    "zh": "相信自己的潛力。"
   },
   {
    "id": 14,
    "en": "Think and your mind will stay fresh.",
    "zh": "思考能使大腦保持清醒。"
   },
   {
    "id": 15,
    "en": "You win because you think you can.",
    "zh": "你成功是因為你認為你能成功。"
   },
   {
    "id": 16,
    "en": "By helping others, you will feel good about yourself.",
    "zh": "幫助他人，其樂無窮。"
   },
   {
    "id": 17,
    "en": "Lost time is never found again.",
    "zh": "時間一去不復返。"
   },
   {
    "id": 18,
    "en": "Rome wasn’t built in a day.",
    "zh": "羅馬不是一天建成的。"
   },
   {
    "id": 19,
    "en": "Never put off until tomorrow what you can do today.",
    "zh": "永遠不要把今天能做的事拖延到明天。"
   },
   {
    "id": 20,
    "en": "Remember to smile when you wake up.",
    "zh": "記得在醒來的時候微笑。"
   },
   {
    "id": 21,
    "en": "Oversleeping will never make your dreams come true.",
    "zh": "睡懶覺永遠不能使你夢想成真。"
   },
   {
    "id": 22,
    "en": "Praise twice as much as you criticize.",
    "zh": "多表揚，少批評。"
   },
   {
    "id": 23,
    "en": "The way to be happy is to make others happy.",
    "zh": "快樂的方式就是先讓別人快樂。"
   },
   {
    "id": 24,
    "en": "Life is too short to spend time worrying.",
    "zh": "生命太短了，不要花在焦慮上。"
   },
   {
    "id": 25,
    "en": "What pains us trains us.",
    "zh": "使我們痛苦的東西在真正鍛造我們。"
   },
   {
    "id": 26,
    "en": "What doesn’t kill us makes us stronger.",
    "zh": "沒有要我們命的事情讓我們更強大。"
   },
   {
    "id": 27,
    "en": "What hurts us most teaches us the best.",
    "zh": "傷害我們最深的對我們教育最深。"
   },
   {
    "id": 28,
    "en": "The dictionary is the only place where success comes before work.",
    "zh": "只有在字典中，成功才會出現在工作之前。"
   },
   {
    "id": 29,
    "en": "To be a great leader, you must have great hopes!",
    "zh": "要想成為偉大的領導者，就必須有偉大的抱負。"
   },
   {
    "id": 30,
    "en": "He who is ashamed of asking is ashamed of learning.",
    "zh": "恥於問者恥於學。"
   },
   {
    "id": 31,
    "en": "He who fails to plan, plans to fail.",
    "zh": "不計畫的人是註定要失敗的。"
   },
   {
    "id": 32,
    "en": "He who makes no mistakes makes nothing.",
    "zh": "不犯錯誤的人將一事無成。"
   },
   {
    "id": 33,
    "en": "Imagination is more important than knowledge.",
    "zh": "想像力比知識更重要。"
   },
   {
    "id": 34,
    "en": "The hotter the fire, the harder the steel.",
    "zh": "火燒得越旺，鋼鐵就越堅硬。"
   },
   {
    "id": 35,
    "en": "Do not let what you cannot do interfere with what you can do.",
    "zh": "決不要讓你不能做的事妨礙你能做的事。"
   },
   {
    "id": 36,
    "en": "It’s how you deal with failure that determines how you achieve success.",
    "zh": "你如何對待失敗註定了你如何取得成功。"
   },
   {
    "id": 37,
    "en": "Help others achieve their dreams and you will achieve yours.",
    "zh": "幫助他人實現他們的夢想，而你也將因此實現你自己的夢想。"
   },
   {
    "id": 38,
    "en": "The achievement of your goal is assured the moment you commit yourself to it.",
    "zh": "一旦你全心投入，你目標的實現就得到了保證。"
   },
   {
    "id": 39,
    "en": "You become a winner the moment you believe you can win.",
    "zh": "當你相信自己能贏的時候，你就成為了勝利者。"
   },
   {
    "id": 40,
    "en": "Time and energy spent worrying are wasted.",
    "zh": "擔憂煩惱，浪費時間，也是浪費精力。"
   },
   {
    "id": 41,
    "en": "The best way to predict the future is to create it.",
    "zh": "預測未來的最佳方案就是創造未來。"
   },
   {
    "id": 42,
    "en": "Your brain needs exercise to stay fit, just like your body.",
    "zh": "大腦需要鍛煉才能保持健康，就像你的身體一樣。"
   },
   {
    "id": 43,
    "en": "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    "zh": "我們最大的弱點就在於放棄。成功最有把握的方法就是盡力再試一次。"
   },
   {
    "id": 44,
    "en": "Putting off an easy thing makes it hard. Putting off a hard thing makes it impossible.",
    "zh": "簡單的事情因為拖延而變得困難；困難的事情因為拖延而變得不可能（完成）。"
   },
   {
    "id": 45,
    "en": "The only good luck many great men ever had was being born with the ability to overcome bad luck.",
    "zh": "對於許多偉大的人來說，他們唯一的幸運之處就是他們具有征服厄運的天賦。"
   },
   {
    "id": 46,
    "en": "The greatest discovery of our generation is that a human being can alter his life by altering his attitudes.",
    "zh": "我們這一代人的最大發現就是：人類可以通過改變態度來改變自己的生活。"
   },
   {
    "id": 47,
    "en": "It is not what happens to you; it is what you do with what happens to you.",
    "zh": "重要的不是在你身上發生了什麼，而是應變是你所做的事情。"
   },
   {
    "id": 48,
    "en": "It is not what other people think of you, it is what you think of yourself that counts.",
    "zh": "重要的不是別人如何看待你，而是你如何看待你自己。"
   },
   {
    "id": 49,
    "en": "As long as you are dreaming, believing, and doing, you can go anywhere and achieve anything.",
    "zh": "只要你有夢想、有信念、有行動，你就可以無往不利，無所不勝。"
   },
   {
    "id": 50,
    "en": "Whatever you do, do it whole-heartedly.",
    "zh": "無論你做什麼，都要全心全意地做。"
   },
   {
    "id": 51,
    "en": "Success is how high you bounce when you hit bottom.",
    "zh": "成功是墜落到底反彈的高度。"
   },
   {
    "id": 52,
    "en": "Success is measured not by how much money you have made, but by how many people you have helped.",
    "zh": "衡量成功的標準不是看你賺了多少錢，而是看你幫助了多少人。"
   },
   {
    "id": 53,
    "en": "Great works are performed not by strength, but by perseverance.",
    "zh": "完成偉大的事業不在於體力，而在於堅忍不拔的毅力。"
   },
   {
    "id": 54,
    "en": "Man is not judged by his words, but by his deeds.",
    "zh": "評判一個人不是看他的言語，而是看他的行動。"
   },
   {
    "id": 55,
    "en": "No one can humiliate or disturb us unless we let him.",
    "zh": "沒有任何人能侮辱我們、困擾我們，除非我們自己允許。"
   },
   {
    "id": 56,
    "en": "No one can make you feel inferior without your consent.",
    "zh": "沒有你的同意，沒有人能讓你自卑。"
   },
   {
    "id": 57,
    "en": "To reach your goals, work hard, participate, practice, and do the best you can.",
    "zh": "要達成你的目標，你就必須苦幹、參與、操練，以及盡你所能做到最好。"
   },
   {
    "id": 58,
    "en": "Genius is the ability to put into effect what is in your mind.",
    "zh": "天才就是將心中所想付諸行動的能力。"
   },
   {
    "id": 59,
    "en": "Life doesn’t require that we be the best, only that we try our best.",
    "zh": "生活並不要求我們是最好的，只要求我們能做到最好。"
   },
   {
    "id": 60,
    "en": "The most important single ingredient in the formula of success is knowing how to get along with people.",
    "zh": "成功公式中最重要的一個因素就是知道如何與人相處。"
   },
   {
    "id": 61,
    "en": "Success is not measured by the position you reach in life; it’s measured by the obstacles you overcome.",
    "zh": "成功不是用你一生取得的地位來衡量的，而是看你克服了多少障礙。"
   },
   {
    "id": 62,
    "en": "It is in your moments of decision that your destiny is shaped.",
    "zh": "人生就註定於你做決定的那一刻。"
   },
   {
    "id": 63,
    "en": "The surest way not to fail is to determine to succeed.",
    "zh": "不致失敗的最可靠的方法是決心成功。"
   },
   {
    "id": 64,
    "en": "What would life be if we had no courage to attempt anything?",
    "zh": "如果我們對任何事情都沒有勇氣嘗試，人生還有什麼意義？"
   },
   {
    "id": 65,
    "en": "The world belongs to the energetic.",
    "zh": "世界屬於充滿活力的人。"
   },
   {
    "id": 66,
    "en": "Early to bed and early to rise keeps a man healthy, wealthy and wise.",
    "zh": "早睡早起讓人健康、富足和智慧。"
   },
   {
    "id": 67,
    "en": "The human will can be strengthened like a muscle!",
    "zh": "人類的意志可以像肌肉一樣被增強。"
   },
   {
    "id": 68,
    "en": "Success grows out of the struggle to overcome difficulties.",
    "zh": "成功來自於克服困難的鬥爭。"
   },
   {
    "id": 69,
    "en": "Each day, take at least one step toward your goal. The step doesn’t have to be big, moving forward even a small amount is progress.",
    "zh": "每天至少向你的目標邁進一步。這一步不一定要很大，哪怕是向前一點，都是進步。"
   },
   {
    "id": 70,
    "en": "Remind yourself to laugh and smile. You can always make room for happiness.",
    "zh": "提醒自己大笑、微笑。你總可以找到歡樂。"
   },
   {
    "id": 71,
    "en": "Everyone is important. Anyone can change the world. No one should underestimate his power!",
    "zh": "人人都是重要的。任何人都可以改變世界。沒有人會低估他自己的力量。"
   },
   {
    "id": 72,
    "en": "Only a fool criticizes what he does not understand.",
    "zh": "只有傻瓜才會批評他不懂的事。"
   },
   {
    "id": 73,
    "en": "You don’t need an invitation to help others. Help before you are asked.",
    "zh": "幫助別人是不需要邀請的。在別人開口之前就伸出援助之手吧！"
   },
   {
    "id": 74,
    "en": "Push yourself to do more than others believe you can do. Then, encourage others to push themselves just as hard.",
    "zh": "逼自己做出超越別人期望的事。然後，幫助別人也一樣努力去逼迫自己前進。"
   },
   {
    "id": 75,
    "en": "The future belongs to those who believe in the beauty of their dreams.",
    "zh": "未來屬於那些相信自己夢想的人。"
   },
   {
    "id": 76,
    "en": "Harsh advice is the most instructive.",
    "zh": "忠言逆耳利於行。"
   },
   {
    "id": 77,
    "en": "Don’t wait for the world to change. Change it yourself.",
    "zh": "不要等待世界改變。去改變世界吧！"
   },
   {
    "id": 78,
    "en": "The only true failure is the failure to try.",
    "zh": "惟一真正的失敗是沒有去嘗試。"
   },
   {
    "id": 79,
    "en": "Nothing great was ever achieved without enthusiasm.",
    "zh": "無熱情無以成偉業。"
   },
   {
    "id": 80,
    "en": "There is no challenge more challenging than improving yourself.",
    "zh": "沒什麼挑戰比提高自我更有挑戰。"
   },
   {
    "id": 81,
    "en": "Confidence is contagious. So is lack of confidence.",
    "zh": "自信是具有感染力的。不自信也一樣。"
   },
   {
    "id": 82,
    "en": "Confidence is half of victory.",
    "zh": "自信就是成功的一半。"
   },
   {
    "id": 83,
    "en": "Attitude is just as important as ability.",
    "zh": "態度和能力一樣重要。"
   },
   {
    "id": 84,
    "en": "You’re unique with special gifts; use them.",
    "zh": "你是獨一無二的，你有獨特的才能。發揮它們吧！"
   },
   {
    "id": 85,
    "en": "We’re all capable if we have faith and passion.",
    "zh": "只要我們有信仰、有激情，我們就都是有能力的。"
   },
   {
    "id": 86,
    "en": "Diligence is the mother of good luck.",
    "zh": "勤奮是好運之母。"
   },
   {
    "id": 87,
    "en": "If you are doing your best, you will not have to worry about failure.",
    "zh": "如果你盡力而為，你就不必擔憂失敗。"
   },
   {
    "id": 88,
    "en": "Those who turn back never reach the summit.",
    "zh": "中途折返的人永遠都達到不了頂峰。"
   },
   {
    "id": 89,
    "en": "A winner never stops trying.",
    "zh": "成功者永不停止嘗試。"
   },
   {
    "id": 90,
    "en": "The first and best victory is to conquer yourself.",
    "zh": "最重要的勝利是戰勝自己。"
   },
   {
    "id": 91,
    "en": "Take chances, make mistakes. That’s how you grow.",
    "zh": "去冒險，去犯錯誤！你就是這樣成長起來的！"
   },
   {
    "id": 92,
    "en": "True strength flows from a healthy body and mind working in harmony.",
    "zh": "真正的力量來自於健康身體和健康大腦的合作無間。"
   },
   {
    "id": 93,
    "en": "Failure is the sauce that gives success its flavor.",
    "zh": "失敗是成功的調味品。"
   },
   {
    "id": 94,
    "en": "Failure teaches you more than success.",
    "zh": "失敗的價值大於成功。／從失敗中，我們學到更多。"
   },
   {
    "id": 95,
    "en": "Make full use of whatever happens to you. There is something to learn from every experience.",
    "zh": "充分利用發生在你身上的任何事情。任何的經歷都有值得學習的地方。"
   },
   {
    "id": 96,
    "en": "Goodness is the only investment that never fails.",
    "zh": "善良是惟一不會失敗的投資。"
   },
   {
    "id": 97,
    "en": "Life is a struggle that must be accepted. Accepting the struggle happily or miserably is up to you to decide.",
    "zh": "生活是你必須接受的鬥爭。快樂地接受還是悲慘地接受就要由你決定了。"
   },
   {
    "id": 98,
    "en": "If you cannot be an excellent loser, you’ll never succeed.",
    "zh": "如果你不能成為一個優秀的失敗者，你就永遠不能成功！"
   },
   {
    "id": 99,
    "en": "No matter how hard you try or how much time you spend worrying, some things just cannot be changed. Accept them and move on.",
    "zh": "不管你多麼努力地嘗試，不管你花多少時間擔憂，總有些事是無法改變的。接受它們，繼續前行吧！"
   },
   {
    "id": 100,
    "en": "Continuous effort—not strength or intelligence—is the key to unlocking our potential.",
    "zh": "釋放潛能的關鍵不是力量，也不是智慧，而是不斷的努力。"
   }
  ]
 },
 {
  "key": "anki_progress_2_龍櫻基本英文100_竹岡廣信英作文篇_ANKI中英對照.html",
  "title": "教材 2 · 英作文篇",
  "sub": "龍櫻基本英文 100（竹岡廣信）",
  "items": [
   {
    "id": 1,
    "en": "It would be dangerous to drink two bottles of whiskey a day and drive a car.",
    "zh": "一天喝光兩瓶威士忌還開車是很危險的。",
    "jp": "ウィスキーのボトルを1日2本も空けて車を運転するのは危険だ。"
   },
   {
    "id": 2,
    "en": "It is very dangerous to cross a busy street before the light turns green.",
    "zh": "在號誌還沒變綠燈前穿越交通繁忙的街道是非常危險的。",
    "jp": "交通量の多い通りを、信号が青に変わらないうちに横断するのはとても危険です。"
   },
   {
    "id": 3,
    "en": "It is really pleasant to take a walk early in the morning, listening to birds sing.",
    "zh": "一大清早聽著鳥鳴散步真是令人心曠神怡。",
    "jp": "早朝、鳥のさえずりを聞きながら散歩するのは本当に気持ちがいい。"
   },
   {
    "id": 4,
    "en": "Most Japanese high school students go to a cram school to prepare for college entrance exams.",
    "zh": "大多數的日本高中生為了準備大學入學考試而去補習班。",
    "jp": "日本の高校生の大半が、大学入試に備えるために塾に行く。"
   },
   {
    "id": 5,
    "en": "When waiting for the elevator to come or the traffic light to change, most Japanese people become irritated in only thirty seconds.",
    "zh": "在等電梯或等紅綠燈時，大多數日本人只要短短30秒就會開始感到焦躁。",
    "jp": "日本人は、エレベーターや信号待ちだと、わずか30秒でイライラし始める。"
   },
   {
    "id": 6,
    "en": "An elderly woman sitting next to me on the train asked me where I was going.",
    "zh": "在火車上坐我隔壁的老婦人問我要去哪裡。",
    "jp": "列車で隣に座ったおばあさんに、どこまで行くのと尋ねられた。"
   },
   {
    "id": 7,
    "en": "Tom told us that we should rent a car to get around the city because the public transportation was inconvenient.",
    "zh": "湯姆對我們說，因為大眾運輸工具很不方便，不如租車四處遊覽這座城市吧。",
    "jp": "公共の交通機関では不便だから、レンタカーを借りてその街をあちこち見て回るのはどうだろうと、トムは言った。"
   },
   {
    "id": 8,
    "en": "Everyone should be free to decide when to get married and whether to have children.",
    "zh": "何時結婚、生不生小孩，應該由每個人自由決定。",
    "jp": "いつ結婚するか、子供を産むか生まないかは各人の自由な判断によるべきだ。"
   },
   {
    "id": 9,
    "en": "It is impossible to predict where and when there will be a major earthquake.",
    "zh": "大地震何時何地會發生是無法預測的。",
    "jp": "大地震がいつどこで起こるかは予測不可能だ。"
   },
   {
    "id": 10,
    "en": "Tom insisted that everything would be all right, but I couldn't help feeling worried.",
    "zh": "湯姆堅稱一切都會沒問題，但我還是忍不住感到擔心。",
    "jp": "トムは万事うまくいくと言い張ったが、私は心配で仕方がなかった。"
   },
   {
    "id": 11,
    "en": "It never occurred to me that my remark might hurt her feelings.",
    "zh": "我從未想過我的發言會傷害到她的感情。",
    "jp": "僕の発言が彼女を傷つけるなんて思いもしなかった。"
   },
   {
    "id": 12,
    "en": "\"Tom, dinner is ready.\" \"OK, Mom. I'm coming.\"",
    "zh": "「湯姆，開飯囉。」「好，媽，我馬上來。」",
    "jp": "「トム、ご飯ですよ」「わかった。すぐ行くよ」"
   },
   {
    "id": 13,
    "en": "I'll call you when I get to Narita Airport.",
    "zh": "我到成田機場後會打電話給你。",
    "jp": "成田空港に着いたら電話します。"
   },
   {
    "id": 14,
    "en": "If you take the train to Tokyo Disneyland from here, you have to change trains three times.",
    "zh": "如果從這裡搭電車去東京迪士尼樂園，必須轉車三次。",
    "jp": "ここから東京ディズニーランドまで電車で行くなら、3回も乗り換えが必要になります。"
   },
   {
    "id": 15,
    "en": "I've decided to look for a job abroad when I graduate from college.",
    "zh": "我已經決定大學畢業後要在海外找工作。",
    "jp": "大学を卒業したら海外で仕事を探すことに決めている。"
   },
   {
    "id": 16,
    "en": "This dryer doesn't work. Something seems to be wrong with it.",
    "zh": "這台吹風機不會動耶，好像故障了。",
    "jp": "このドライヤー、動かないわ。壊れたみたい。"
   },
   {
    "id": 17,
    "en": "The best thing about my stay with an American family was that the parents treated me just like their daughter.",
    "zh": "在美國寄宿家庭最開心的事，就是寄宿家庭的父母把我當成自己的女兒一樣對待。",
    "jp": "アメリカのホームステイで一番うれしかったことは、ホストファミリーの両親が私を自分の娘のように扱ってくれたことです。"
   },
   {
    "id": 18,
    "en": "I lived in Canada for three years when I was in my teens because my father was transferred there.",
    "zh": "十幾歲的時候，因為父親工作調動的關係，我在加拿大住過三年。",
    "jp": "10代のころ、父の仕事の関係でカナダに3年間住んだことがある。"
   },
   {
    "id": 19,
    "en": "The Internet is widely used, so sales of personal computers have been rapidly increasing over the last few years.",
    "zh": "隨著網際網路的普及，這幾年個人電腦的銷量正在急速成長。",
    "jp": "インターネットの普及とともに、ここ数年パソコンの売り上げが急速に伸びている。"
   },
   {
    "id": 20,
    "en": "I've often heard Tom boast that he is very good at swimming, but I've never actually seen him swim.",
    "zh": "我常聽湯姆誇口說他是游泳高手，卻從沒實際看過他游泳。",
    "jp": "トムが水泳の名人だと度々聞いたことがあるが、実際に泳いでいるところを見たことがない。"
   },
   {
    "id": 21,
    "en": "It has been only a week since I began a part-time job at a convenience store, but I'm already used to it.",
    "zh": "在便利商店開始打工才不過一週，但我已經完全習慣這份工作了。",
    "jp": "コンビニでアルバイトを始めてから一週間にしかならないが、もうすっかり仕事に慣れた。"
   },
   {
    "id": 22,
    "en": "When I got on the train this morning, I couldn't find an empty seat.",
    "zh": "今天早上搭電車時，找不到空位。",
    "jp": "今朝電車に乗った時、空いた席が見つからなかった。"
   },
   {
    "id": 23,
    "en": "I'm not wearing glasses now, so I can't make out what the sign says.",
    "zh": "我現在沒戴眼鏡，所以看不清楚那個標誌上寫了什麼。",
    "jp": "今は眼鏡をかけていないので、あの標識に何と書かれてあるのかわかりません。"
   },
   {
    "id": 24,
    "en": "Less than twenty-four hours after I return to my hometown, without realizing it, I start to talk in the local dialect.",
    "zh": "我回到故鄉後不到24小時，就會不知不覺地講起當地的方言。",
    "jp": "私は故郷に帰れば24時間もしないうちに、自然と地元の方言を話している。"
   },
   {
    "id": 25,
    "en": "Humans learn to express what they think by the age of five or six.",
    "zh": "人類到了五、六歲左右，就會具備表達自己想法的能力。",
    "jp": "人間は5~6歳になるころには、思ったことを表現できる能力を持つようになる。"
   },
   {
    "id": 26,
    "en": "Thanks to the map you drew me the other day, I managed to get here without getting lost.",
    "zh": "多虧了你前幾天幫我畫的地圖，我才能不迷路順利來到這裡。",
    "jp": "先日描いてもらった地図のおかげで、迷わずにここまで来ることができました。"
   },
   {
    "id": 27,
    "en": "Last summer I took two weeks off and went on a trip to Europe with my wife.",
    "zh": "今年夏天我休了兩週的假，和妻子去歐洲旅行了。",
    "jp": "この夏に2週間の休みを取り、妻とヨーロッパ旅行に行きました。"
   },
   {
    "id": 28,
    "en": "Bob had changed a lot, so when I saw him at a class reunion, I didn't recognize him.",
    "zh": "鮑伯變了好多，所以上次在同學會遇到時，我沒認出他來。",
    "jp": "ボブはずいぶんと変わっていたので、この前クラス会であった時に彼だとわからなかった。"
   },
   {
    "id": 29,
    "en": "When I visited my hometown for the first time in twenty years, I found that it was no longer what it used to be.",
    "zh": "睽違20年造訪的故鄉已經完全變了樣，不再留有昔日的面貌。",
    "jp": "20年ぶりに訪れた故郷はすっかり変わってしまい、昔の面影をとどめてなかった。"
   },
   {
    "id": 30,
    "en": "I stayed up till four last night preparing for the math lesson, so I feel very sleepy.",
    "zh": "昨晚為了忙數學預習而熬夜到四點，所以現在非常想睡。",
    "jp": "昨日は数学の予習に追われて4時まで起きていたのでとても眠い。"
   },
   {
    "id": 31,
    "en": "I've finished reading the novel I borrowed from the library yesterday, so now I have nothing to do.",
    "zh": "我把昨天從圖書館借來的小說看完了，所以現在沒事可做。",
    "jp": "図書館から昨日借りてきた小説を読み終えたので、今はすることがない。"
   },
   {
    "id": 32,
    "en": "If you had taken this medicine and stayed in bed, you would probably have got well in two or three days.",
    "zh": "要是你當時有吃這個藥並臥床休息，大概兩三天就會康復了。",
    "jp": "この薬を飲んで寝ていれば、たぶん2~3日で良くなっていたのに。"
   },
   {
    "id": 33,
    "en": "The teacher says that we should wait here for a while because if we left now, we might get caught in a thunderstorm on the way.",
    "zh": "老師說如果就這樣出發可能會在半路遇上雷雨，所以最好在這裡稍等一下。",
    "jp": "先生は、このまま出発すると雷雨に見舞われる危険があるので、しばらくここで待ったほうがいいと言っています。"
   },
   {
    "id": 34,
    "en": "People wish they could live forever and never become older. However, if this wish came true, there would be too many people on the earth.",
    "zh": "長生不老是人類的夢想。然而，如果這實現了，地球就會人滿為患。",
    "jp": "不老不死は人間の夢である。しかし、もしこれが実現したら地球は人であふれてしまう。"
   },
   {
    "id": 35,
    "en": "Ann looks happy. Something good must have happened to her.",
    "zh": "安看起來很開心的樣子，一定是發生了什麼好事。",
    "jp": "アンはうれしそうな顔をしているね。何かいいことがあったに違いない。"
   },
   {
    "id": 36,
    "en": "If you have been to old European cities, you must have been impressed by the beautiful streets.",
    "zh": "只要是去過歐洲古都的人，一定都會對美麗的街道景致感動不已。",
    "jp": "ヨーロッパの古都に行ったことのある人ならば、街並みの美しさに感動したに違いない。"
   },
   {
    "id": 37,
    "en": "Without fossil fuels such as oil and coal, the history of the 20th century would have been completely different.",
    "zh": "如果沒有石油與煤炭等化石燃料，20世紀的歷史肯定會截然不同。",
    "jp": "もし石油や石炭などの化石燃料がなかったら、20世紀の歴史は全く異なったものになっていたに違いない。"
   },
   {
    "id": 38,
    "en": "Some students coming to the library act as if they were in a coffee shop.",
    "zh": "有些來圖書館的學生，舉止表現得簡直就像在咖啡廳裡一樣。",
    "jp": "図書館に来る学生の中には、まるで喫茶店にいるかのように振舞う者がいる。"
   },
   {
    "id": 39,
    "en": "When I was a child, I often wished my house were a little larger.",
    "zh": "小時候，我常希望自己的家能夠再寬敞一點。",
    "jp": "子供のころ、もう少し家が広ければと思ったものでした。"
   },
   {
    "id": 40,
    "en": "I'd like to work as a volunteer helping victims of natural disasters, such as floods or earthquakes.",
    "zh": "我想擔任志工，去協助洪水或地震等自然災害的受災戶。",
    "jp": "洪水や地震などの被災者を手助けするボランティアとして活動したい。"
   },
   {
    "id": 41,
    "en": "Tom has nice drums, and he never lets anyone else play them.",
    "zh": "湯姆有一套很棒的爵士鼓，但他從不讓別人打。",
    "jp": "トムは素晴らしいドラムを持っていますが、だれにも使わせません。"
   },
   {
    "id": 42,
    "en": "At first, I thought Tom was joking, but later I realized he was serious.",
    "zh": "起初我以為湯姆是在開玩笑，但後來才明白他是認真的。",
    "jp": "最初トムは冗談を言っているのかと思ったが、後で本気だとわかった。"
   },
   {
    "id": 43,
    "en": "Last Sunday I tried making some Italian food for the first time, and it was delicious.",
    "zh": "上週日我有生以來第一次挑戰做義大利菜，結果做出了非常美味的料理。",
    "jp": "この前の日曜日、生まれて初めてイタリア料理に挑戦してみましたが、とってもおいしいものができました。"
   },
   {
    "id": 44,
    "en": "Some people say that they don't like summer because it is so hot that they don't feel like doing anything. However, I like the heat of summer because I can swim in the sea.",
    "zh": "有些人說討厭夏天，因為熱到什麼事都不想做；但我卻喜歡夏天的炎熱，因為可以去海裡游泳。",
    "jp": "夏は暑くて何をする気にもなれないから嫌いだという人がいます。しかし、海で泳ぐことができるので、私はその夏の暑さが好きです。"
   },
   {
    "id": 45,
    "en": "James came to Japan eight years ago not only because he wanted to visit temples, but also because he had a Japanese girlfriend.",
    "zh": "詹姆斯八年前來到日本，不僅是因為想參訪寺廟，也是因為他有一位日本女友。",
    "jp": "ジェームズが8年前日本に来たのは、お寺巡りがしたかっただけでなく日本人の彼女がいたからだ。"
   },
   {
    "id": 46,
    "en": "I am against human cloning. That is because it could cause duplication of dictators.",
    "zh": "我反對複製人，因為那可能會導致獨裁者製造出自己的複製品。",
    "jp": "私はヒトクローンに反対します。なぜなら独裁者が自らの複製を作り出すことになるかもしれないからです。"
   },
   {
    "id": 47,
    "en": "The graph shows that in Japan the birth rate has been decreasing since 1985. This decrease is partly because it costs a lot of money to raise children.",
    "zh": "從圖表來看，日本的出生率自1985年以來一直在下降。原因之一在於養育小孩非常花錢。",
    "jp": "グラフを見ると、日本における出生率は1985年以降減少している。理由の一つは子育てにお金がかかるからだ。"
   },
   {
    "id": 48,
    "en": "I apologized to Ann for being late, but she didn't forgive me.",
    "zh": "我向安為遲到一事道歉，但她並沒有原諒我。",
    "jp": "私はアンに遅刻したことを謝ったが、許してくれなかった。"
   },
   {
    "id": 49,
    "en": "During the math class, my cell phone began to ring, and the teacher severely scolded me. I regretted that I hadn't turned it off.",
    "zh": "數學課上到一半我的手機響了起來，被老師嚴厲地斥責了一頓。我非常後悔沒有先把電源關掉。",
    "jp": "数学の授業中に携帯電話が鳴りだして先生にひどく叱られた。電源を切っておかなかったことをとても後悔した。"
   },
   {
    "id": 50,
    "en": "I'm so busy doing the housework every day that I have no time to see a movie.",
    "zh": "我每天忙於家務，連去看場電影的空閒都沒有。",
    "jp": "毎日家事がとても忙しく、映画を見に行く暇がない。"
   },
   {
    "id": 51,
    "en": "This wooden desk is too heavy for me to carry upstairs alone.",
    "zh": "這張木桌太重了，我一個人沒辦法搬上二樓。",
    "jp": "この木の机は重いので私1人では2階まで運べない。"
   },
   {
    "id": 52,
    "en": "While traveling in Europe, I was disappointed that wherever I went, there were many Japanese tourists.",
    "zh": "在歐洲旅行期間，無論去到哪個國家都會遇到許多日本遊客，讓我感到很掃興。",
    "jp": "ヨーロッパ旅行中、どこの国に行っても多くの日本人旅行者に出会うのでうんざりしました。"
   },
   {
    "id": 53,
    "en": "I was very happy when I saw my mother going to work wearing the earrings I had bought her.",
    "zh": "看到母親戴著我送她的耳環去上班，我感到非常開心。",
    "jp": "私がプレゼントしたイヤリングをして母が会社に行くのを見て、とてもうれしかった。"
   },
   {
    "id": 54,
    "en": "If you expect that schools only teach academic subjects, then this proves that you don't understand what schools are for.",
    "zh": "如果你認為學校只是教導學科知識的地方，這就證明了你並不了解學校的真正功能。",
    "jp": "学校は勉強だけを教えているところだと思うのは、学校の役割を理解していない証拠です。"
   },
   {
    "id": 55,
    "en": "Most Japanese people spend most of their time working to live.",
    "zh": "大多數日本人為了生存，把大部分的時間都花在工作上。",
    "jp": "たいていの日本人は、大部分の時間を生きるために働いて過ごす。"
   },
   {
    "id": 56,
    "en": "Japanese people usually express their feelings as indirectly as possible so that they won't offend others.",
    "zh": "日本人為了不傷害他人，通常會盡可能委婉間接地表達自己的感受。",
    "jp": "日本人は他人を傷つけないように自分の気持ちはできるだけ間接的に表現するのが普通だ。"
   },
   {
    "id": 57,
    "en": "Whether a college is good or bad depends not only on how many books its library has and how good they are. It also depends on how intelligent its teachers and students are.",
    "zh": "一所大學的優劣，不僅取決於其圖書館的藏書量與品質，也取決於教師與學生的素質。",
    "jp": "大学の優劣は、図書館の質や規模だけでなく、教師と学生の能力に左右される。"
   },
   {
    "id": 58,
    "en": "The increase in the amount of CO2 in the atmosphere is closely connected with global warming.",
    "zh": "大氣中二氧化碳含量的增加，與全球暖化有密切的關聯。",
    "jp": "大気中のCO2の増加は、地球温暖化と密接な関連がある。"
   },
   {
    "id": 59,
    "en": "The more modern civilization advances, the longer we are forced to stay up at night, and the less sleep we get.",
    "zh": "現代文明越是進步，我們就越被迫過著夜貓子般的生活，導致睡眠不足。",
    "jp": "現代文明が進めば進むほど、夜型の生活が強いられて睡眠不足になる。"
   },
   {
    "id": 60,
    "en": "Doctors and teachers are alike in that both of them deal not with things but with people.",
    "zh": "醫師與教師的相似之處在於，兩者面對的都不是物品，而是人。",
    "jp": "医師と教師の似ているところは、どちらも物ではなく人を扱うところである。"
   },
   {
    "id": 61,
    "en": "Professional baseball is far more exciting at a stadium than on TV.",
    "zh": "職棒在球場現場看，比在電視上看要有趣上一百倍。",
    "jp": "プロ野球はテレビで見るより球場で見たほうが100倍面白い。"
   },
   {
    "id": 62,
    "en": "This motorbike is about twice as expensive in the U.K. as in Japan.",
    "zh": "這輛機車在英國的價格大約是日本的兩倍。",
    "jp": "このバイクは、イギリスでは日本のおよそ2倍の値段です。"
   },
   {
    "id": 63,
    "en": "Just because young people today read less than they used to, it doesn't always follow that they are less eager to learn.",
    "zh": "不能僅因為現在的年輕人閱讀量減少，就斷定他們的求知慾變低了。",
    "jp": "本を読む量が減ったからと言って、今の若者の知的欲求が少なくなったということにはならない。"
   },
   {
    "id": 64,
    "en": "Frankly speaking, the entrance exams I took yesterday were far more difficult than I had expected.",
    "zh": "坦白說，我昨天參加的入學考試比我原先預期的還要難上許多。",
    "jp": "率直に言って、私が昨日受けた入学試験は思っていたよりもはるかに難しかった。"
   },
   {
    "id": 65,
    "en": "A lot of people have personal computers, but very few of them know how to use them effectively.",
    "zh": "擁有個人電腦的人很多，但懂得如何充分善用它的人卻少之又少。",
    "jp": "パソコンを持っている人は多いが、十分に活用する方法を知っている人は極めて少ない。"
   },
   {
    "id": 66,
    "en": "A lot of housewives complain that prices are too high.",
    "zh": "有許多家庭主婦抱怨物價太高了。",
    "jp": "物価が高すぎると不平を言う主婦が多い。"
   },
   {
    "id": 67,
    "en": "In some countries people have too much food, while in others tens of thousands of children are starving.",
    "zh": "世界上有些國家糧食過剩，但同時卻有些國家有成千上萬的兒童正在餓死。",
    "jp": "世界には食料が有り余っている国もあれば、何万人もの子供が餓死している国もある。"
   },
   {
    "id": 68,
    "en": "Don't forget to turn off the air conditioner before you go to bed, or you'll catch a cold.",
    "zh": "睡前記得一定要關冷氣，否則你可能會感冒喔。",
    "jp": "寝る前に必ずエアコンを消しなさい。さもないと風邪をひくかもしれないよ。"
   },
   {
    "id": 69,
    "en": "There is a saying that a cold can cause a variety of diseases. Take care not to catch a cold.",
    "zh": "俗話說感冒是萬病之源，請多加小心別感冒了。",
    "jp": "風邪は万病の元と言います。風邪をひかないように注意しなさい。"
   },
   {
    "id": 70,
    "en": "On the Internet, you can exchange thoughts and ideas with people all over the world, regardless of their age, sex, or nationality.",
    "zh": "在網際網路上，你可以跨越年齡、性別與國籍的差異，與世界各地的人交換意見。",
    "jp": "インターネットでは、世界中の人々と年齢や性別や国籍の違いを超えて意見の交換ができる。"
   },
   {
    "id": 71,
    "en": "However much exercise you get, you won't lose weight unless you count your calories.",
    "zh": "無論你做多少運動，如果不計算卡路里的話是沒辦法減肥的喔。",
    "jp": "いくら運動しても、カロリー計算をしていないと減量は無理だよ。"
   },
   {
    "id": 72,
    "en": "Although you believe you know a word, you may learn something new if you look it up in the dictionary.",
    "zh": "即使是自以為已經知道意思的單字，查一下字典往往也會有新的發現。",
    "jp": "意味を知っているつもりの単語でも、辞書で引いてみると新たな発見があるものだ。"
   },
   {
    "id": 73,
    "en": "Some Japanese tourists lack common sense and carry a lot of cash in their back pockets.",
    "zh": "有些日本觀光客很缺乏常識，會把大筆現金放在褲子後方的口袋裡隨身攜帶。",
    "jp": "日本人観光客の中には、非常識にも多くの現金をズボンの後ろのポケットに入れて持ち歩くものがいる。"
   },
   {
    "id": 74,
    "en": "In order to stay healthy, you should have a balanced diet and get regular exercise.",
    "zh": "維持健康的秘訣在於均衡飲食並定期運動。",
    "jp": "健康を維持する秘訣はバランスのとれた食事をし、定期的に運動することです。"
   },
   {
    "id": 75,
    "en": "If you live in a developing country for a while, you have an opportunity to look at Japan from a different point of view.",
    "zh": "在開發中國家生活一陣子，會是讓你從不同角度重新審視日本的好機會。",
    "jp": "発展途上国でしばらく暮らしてみることは、日本を違った角度から見直す良い機会になる。"
   },
   {
    "id": 76,
    "en": "It is not until you go abroad that you realize how many neon lights there are in big Japanese cities.",
    "zh": "直到出國之後，才會意識到日本大都市裡的霓虹燈有多麼多。",
    "jp": "外国に行って初めて、日本の大都市のネオンの多さに気づく。"
   },
   {
    "id": 77,
    "en": "It is a pity that many Japanese people mistakenly believe that they have only to speak English to be internationally-minded.",
    "zh": "很遺憾有許多日本人誤以為只要會講英文就能成為國際化的人。",
    "jp": "英語を話せさえすれば国際人になれると勘違いしている日本人が多いのは残念だ。"
   },
   {
    "id": 78,
    "en": "It is surprising that many Americans don't care how you pronounce English as long as they can understand what you are trying to say.",
    "zh": "令人驚訝的是，只要意思能夠溝通，許多美國人並不在意對方的英語發音好不好。",
    "jp": "意味が通じる限り、相手の英語の発音の良し悪しを気にしないアメリカ人が多いのは驚きです。"
   },
   {
    "id": 79,
    "en": "The best things you can do to protect nature are to reduce garbage and to use environmentally friendly products.",
    "zh": "說到為了保護環境所能做的事，大概就是減少垃圾並盡量使用環保產品了。",
    "jp": "環境を守るためにできることと言ったら、ごみを減らしてできるだけ環境にやさしい製品を使うことぐらいだ。"
   },
   {
    "id": 80,
    "en": "It is said that seven out of ten young Japanese people don't believe in religion.",
    "zh": "據說十個日本年輕人當中，就有七個人完全沒有宗教信仰。",
    "jp": "日本の若者の10人のうち7人は、まったく無宗教だといわれる。"
   },
   {
    "id": 81,
    "en": "Ways of greeting vary from country to country. In Japan, bowing is more common than shaking hands.",
    "zh": "打招呼的方式因國家而異，但在日本，鞠躬比握手更為普遍。",
    "jp": "挨拶の仕方は国によりさまざまだが、日本では握手よりお辞儀のほうが普通だ。"
   },
   {
    "id": 82,
    "en": "Hamamatsu is located east of Lake Hamana, which is famous for its beautiful scenery and delicious fish.",
    "zh": "濱松市位於以美景與鮮美海產聞名的濱名湖東側。",
    "jp": "浜松は、美しい景色と海産物で有名な浜名湖の東に位置しています。"
   },
   {
    "id": 83,
    "en": "Quite a few elderly women look down on their husbands, who cannot do anything by themselves and ask too much of them.",
    "zh": "有不少年長女性看不起那些什麼事都無法自己做、只會緊抓著妻子不放的丈夫。",
    "jp": "年配の女性の中には、1人で何もすることができず妻にしがみついて離れない夫を軽蔑する人も少なくない。"
   },
   {
    "id": 84,
    "en": "The movie theater is about twenty minutes' walk from here, but it takes only five minutes to get there by subway.",
    "zh": "到那間電影院步行大約要20分鐘，但搭地鐵的話只要5分鐘就能到。",
    "jp": "その映画館までは、徒歩でおよそ20分ですが、地下鉄なら5分で行くことができます。"
   },
   {
    "id": 85,
    "en": "It cost ten thousand yen to have this bike repaired.",
    "zh": "請人修理這輛腳踏車花了我一萬日圓。",
    "jp": "この自転車を修理してもらうのに1万円かかりました。"
   },
   {
    "id": 86,
    "en": "There are four people in my family. Our apartment is on the fifth floor of this building.",
    "zh": "我們家有四口人，住在這棟公寓大樓的五樓。",
    "jp": "うちは4人家族で、家はこのマンションの5階にあります。"
   },
   {
    "id": 87,
    "en": "The tendency for young people to believe everything that is printed is nothing new.",
    "zh": "年輕人只要看到白紙黑字就全盤盡信的這種傾向，並不是現在才開始的。",
    "jp": "若者が活字なら何でも鵜呑みにしてしまうという傾向は、今に始まったことではない。"
   },
   {
    "id": 88,
    "en": "When I was studying in Paris, a famous painter bought me a meal at a first-class restaurant.",
    "zh": "以前在巴黎留學時，曾有一位知名畫家在高級餐廳請我吃過一頓飯。",
    "jp": "パリに留学していた頃、ある有名な画家に高級レストランでごちそうしてもらった経験がある。"
   },
   {
    "id": 89,
    "en": "Tom finally realized his dream of becoming an astronaut, but at the expense of many other things.",
    "zh": "在犧牲了許多事物之後，湯姆終於實現了成為太空人的夢想。",
    "jp": "多くのものを犠牲にして、トムはついに宇宙飛行士になるという夢を実現した。"
   },
   {
    "id": 90,
    "en": "If city life gives you stress and fatigue, it is best to relax in the mountains or on beaches in order to relieve them.",
    "zh": "為了消除都市生活所累積的壓力與疲勞，到大自然中悠閒度過是最好的方法。",
    "jp": "都会の生活でたまったストレスや疲れをとるためには、自然の中でのんびりするのが一番です。"
   },
   {
    "id": 91,
    "en": "In Japan, women have difficulty getting promoted or returning to their jobs after giving birth and raising their children.",
    "zh": "在日本，女性於生產、育兒之後，在復職與升遷上會處於不利的地位。",
    "jp": "日本では、女性は出産・育児の後は復職や昇進において不利になる。"
   },
   {
    "id": 92,
    "en": "In the U.S., parents drive their children everywhere until they are old enough to get a driver's license.",
    "zh": "在美國，在孩子達到可以自己開車的年齡之前，無論去哪裡都是由父母開車接送。",
    "jp": "アメリカでは、自分で運転できる年齢に達するまで、子供はどこに行くにも親に車で送ってもらう。"
   },
   {
    "id": 93,
    "en": "\"Excuse me. Could you tell me how to get to the post office?\" \"Go straight for two blocks, then turn left. You'll find it on your right.\"",
    "zh": "「不好意思，請問去郵局要怎麼走？」「直走兩個街口後左轉，就在你的右手邊。」",
    "jp": "「すみませんが、郵便局までどういったらいいですか」「2筋目を左です。右にあります」"
   },
   {
    "id": 94,
    "en": "\"What do you think of our new teacher?\" \"There is something about her that attracts me.\"",
    "zh": "「你覺得我們新來的老師怎麼樣？」「她身上有一種吸引人的魅力呢。」",
    "jp": "「今度の先生をどう思う?」「どこか魅力的なところがあるよね」"
   },
   {
    "id": 95,
    "en": "People who don't feel guilty about occupying two seats on a crowded train really make me angry.",
    "zh": "在擁擠的電車上看到霸佔兩個人的座位卻還一副若無其事的人，真的會讓我很火大。",
    "jp": "混雑した電車で、2人分の席を占領して平気な顔をしている人を見ると本当に腹が立つ。"
   },
   {
    "id": 96,
    "en": "Everyone is born with a talent. The question is whether they can find it or not.",
    "zh": "每個人生來都具有某種才華，問題只在於能否發掘出它。",
    "jp": "人は誰でも生まれながらにして何らかの才能を持っているが、問題はそれを見つけられるかどうかだ。"
   },
   {
    "id": 97,
    "en": "When I left the office for lunch, I ran into an old friend from high school.",
    "zh": "當我離開辦公室去吃午飯時，偶然巧遇了高中時代的朋友。",
    "jp": "昼ご飯を食べに会社を出たら、高校時代の友達にばったり出会った。"
   },
   {
    "id": 98,
    "en": "This music is worth listening to over and over again. I recommend it.",
    "zh": "這首音樂值得反覆聆聽，非常推薦你也聽聽看。",
    "jp": "この音楽は何度も繰り返して聞く価値がある。君も是非聞いてみたらいいよ。"
   },
   {
    "id": 99,
    "en": "Teeth play an important part in your health. If you want to stay healthy, you should brush your teeth after every meal.",
    "zh": "牙齒對健康扮演著重要的角色。如果想要保持健康，就必須落實每餐飯後刷牙。",
    "jp": "歯は健康にとって大切な役割を果たしています。健康で居たければ、毎食後の歯磨きを励行しなければなりません。"
   },
   {
    "id": 100,
    "en": "Bear in mind that if you have enthusiasm, you can succeed in anything.",
    "zh": "請銘記在心：只要有熱忱，無論做什麼事都能夠成功。",
    "jp": "やる気さえあれば何事においても成功できる、ということを心に留めておきなさい。"
   }
  ]
 }
];
