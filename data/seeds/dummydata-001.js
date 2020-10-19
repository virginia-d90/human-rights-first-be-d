
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dummy_data').del()
    .then(function () {
      // Inserts seed entries
      return knex('dummy_data').insert([
            {
              "id": 0,
              "date_text": "June 3rd",
              "text": "Police throw tear-gas at protesters on a bridge.",
              "tags_str": "Projectiles",
              "LATITUDE": 29.963071000000006,
              "LONGITUDE": -90.160953,
              "Link1": "https://twitter.com/misaacstein/status/1268381797081022464",
              "Link2": "https://twitter.com/ckm_news/status/1268382403367763970"
            },
            {
              "id": 1,
              "date_text": "June 3rd",
              "text": "Police throw tear-gas at protesters on a bridge.",
              "tags_str": "Projectiles",
              "LATITUDE": 29.960484,
              "LONGITUDE": -90.075301,
              "Link1": "https://twitter.com/misaacstein/status/1268381797081022464",
              "Link2": "https://twitter.com/ckm_news/status/1268382403367763970"
            },
            {
              "id": 2,
              "date_text": "May 30th",
              "text": "Police assault protesters",
              "tags_str": "Hard",
              "LATITUDE": 30.210692,
              "LONGITUDE": -97.942749,
              "Link1": "https://gfycat.com/tautimaginativedore",
              "Link2": "https://www.reddit.com/r/2020PoliceBrutality/comments/hhhbeh/5302020_austin/"
            },
            {
              "id": 3,
              "date_text": "May 30th",
              "text": "Police assault protesters",
              "tags_str": "Hard",
              "LATITUDE": 30.2303,
              "LONGITUDE": -97.7144,
              "Link1": "https://gfycat.com/tautimaginativedore",
              "Link2": "https://www.reddit.com/r/2020PoliceBrutality/comments/hhhbeh/5302020_austin/"
            },
            {
              "id": 4,
              "date_text": "May 30th",
              "text": "Police assault protesters",
              "tags_str": "Hard",
              "LATITUDE": 30.505972,
              "LONGITUDE": -97.747187,
              "Link1": "https://gfycat.com/tautimaginativedore",
              "Link2": "https://www.reddit.com/r/2020PoliceBrutality/comments/hhhbeh/5302020_austin/"
            },
            {
              "id": 5,
              "date_text": "May 30th",
              "text": "Police shoot non-violent protester in the head",
              "tags_str": "Projectiles",
              "LATITUDE": 30.210692,
              "LONGITUDE": -97.942749,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/guwc4y/austin_tx_nonviolent_protestor_shot_in_the_head/",
              "Link2": "https://www.instagram.com/p/CA6TCIGnuWm/"
            },
            {
              "id": 6,
              "date_text": "May 30th",
              "text": "Police shoot non-violent protester in the head",
              "tags_str": "Projectiles",
              "LATITUDE": 30.2303,
              "LONGITUDE": -97.7144,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/guwc4y/austin_tx_nonviolent_protestor_shot_in_the_head/",
              "Link2": "https://www.instagram.com/p/CA6TCIGnuWm/"
            },
            {
              "id": 7,
              "date_text": "May 30th",
              "text": "Police shoot non-violent protester in the head",
              "tags_str": "Projectiles",
              "LATITUDE": 30.505972,
              "LONGITUDE": -97.747187,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/guwc4y/austin_tx_nonviolent_protestor_shot_in_the_head/",
              "Link2": "https://www.instagram.com/p/CA6TCIGnuWm/"
            },
            {
              "id": 8,
              "date_text": "May 30th",
              "text": "Police use tear gas & rubber bullets on protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 30.210692,
              "LONGITUDE": -97.942749,
              "Link1": "https://twitter.com/highsettler/status/1266876480929349633",
              "Link2": "https://imgur.com/gallery/VKuIIvu"
            },
            {
              "id": 9,
              "date_text": "May 30th",
              "text": "Police use tear gas & rubber bullets on protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 30.2303,
              "LONGITUDE": -97.7144,
              "Link1": "https://twitter.com/highsettler/status/1266876480929349633",
              "Link2": "https://imgur.com/gallery/VKuIIvu"
            },
            {
              "id": 10,
              "date_text": "May 30th",
              "text": "Police use tear gas & rubber bullets on protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 30.505972,
              "LONGITUDE": -97.747187,
              "Link1": "https://twitter.com/highsettler/status/1266876480929349633",
              "Link2": "https://imgur.com/gallery/VKuIIvu"
            },
            {
              "id": 11,
              "date_text": "May 30th",
              "text": "Police open fire on crowd with rubber bullets",
              "tags_str": "Projectiles",
              "LATITUDE": 30.210692,
              "LONGITUDE": -97.942749,
              "Link1": "https://twitter.com/ironfront7/status/1267133400156196870",
              "Link2": ""
            },
            {
              "id": 12,
              "date_text": "May 30th",
              "text": "Police open fire on crowd with rubber bullets",
              "tags_str": "Projectiles",
              "LATITUDE": 30.2303,
              "LONGITUDE": -97.7144,
              "Link1": "https://twitter.com/ironfront7/status/1267133400156196870",
              "Link2": ""
            },
            {
              "id": 13,
              "date_text": "May 30th",
              "text": "Police open fire on crowd with rubber bullets",
              "tags_str": "Projectiles",
              "LATITUDE": 30.505972,
              "LONGITUDE": -97.747187,
              "Link1": "https://twitter.com/ironfront7/status/1267133400156196870",
              "Link2": ""
            },
            {
              "id": 14,
              "date_text": "May 30th",
              "text": "Pregnant woman shot with bean bags by police",
              "tags_str": "Projectiles",
              "LATITUDE": 30.210692,
              "LONGITUDE": -97.942749,
              "Link1": "https://www.statesman.com/news/20200612/pregnant-woman-shot-with-beanbag-round-by-austin-police-wants-them-held-accountable",
              "Link2": "https://www.kvue.com/article/news/local/austin-texas-protest-chief-brian-manley-speaks/269-904cf6f3-e619-44ed-ab31-0582508e9c04"
            },
            {
              "id": 15,
              "date_text": "May 30th",
              "text": "Pregnant woman shot with bean bags by police",
              "tags_str": "Projectiles",
              "LATITUDE": 30.2303,
              "LONGITUDE": -97.7144,
              "Link1": "https://www.statesman.com/news/20200612/pregnant-woman-shot-with-beanbag-round-by-austin-police-wants-them-held-accountable",
              "Link2": "https://www.kvue.com/article/news/local/austin-texas-protest-chief-brian-manley-speaks/269-904cf6f3-e619-44ed-ab31-0582508e9c04"
            },
            {
              "id": 16,
              "date_text": "May 30th",
              "text": "Pregnant woman shot with bean bags by police",
              "tags_str": "Projectiles",
              "LATITUDE": 30.505972,
              "LONGITUDE": -97.747187,
              "Link1": "https://www.statesman.com/news/20200612/pregnant-woman-shot-with-beanbag-round-by-austin-police-wants-them-held-accountable",
              "Link2": "https://www.kvue.com/article/news/local/austin-texas-protest-chief-brian-manley-speaks/269-904cf6f3-e619-44ed-ab31-0582508e9c04"
            },
            {
              "id": 17,
              "date_text": "May 30th",
              "text": "Police use horses as weapons",
              "tags_str": "Other",
              "LATITUDE": 30.210692,
              "LONGITUDE": -97.942749,
              "Link1": "https://www.reddit.com/r/Bad_Cop_No_Donut/comments/h9wn2c/austin_police_used_horses_as_weapons/",
              "Link2": "https://www.fox7austin.com/news/man-arrested-for-striking-austin-police-horse-with-sign"
            },
            {
              "id": 18,
              "date_text": "May 30th",
              "text": "Police use horses as weapons",
              "tags_str": "Other",
              "LATITUDE": 30.2303,
              "LONGITUDE": -97.7144,
              "Link1": "https://www.reddit.com/r/Bad_Cop_No_Donut/comments/h9wn2c/austin_police_used_horses_as_weapons/",
              "Link2": "https://www.fox7austin.com/news/man-arrested-for-striking-austin-police-horse-with-sign"
            },
            {
              "id": 19,
              "date_text": "May 30th",
              "text": "Police use horses as weapons",
              "tags_str": "Other",
              "LATITUDE": 30.505972,
              "LONGITUDE": -97.747187,
              "Link1": "https://www.reddit.com/r/Bad_Cop_No_Donut/comments/h9wn2c/austin_police_used_horses_as_weapons/",
              "Link2": "https://www.fox7austin.com/news/man-arrested-for-striking-austin-police-horse-with-sign"
            },
            {
              "id": 20,
              "date_text": "May 31st",
              "text": "Police critically injure 20 year old black protester during protests against police violence",
              "tags_str": "Other",
              "LATITUDE": 30.210692,
              "LONGITUDE": -97.942749,
              "Link1": "https://www.reddit.com/r/Bad_Cop_No_Donut/comments/gwd37n/a_black_20yearold_student_justin_howell_is_in/",
              "Link2": "https://www.texastribune.org/2020/06/01/austin-police-george-floyd-mike-ramos/"
            },
            {
              "id": 21,
              "date_text": "May 31st",
              "text": "Police critically injure 20 year old black protester during protests against police violence",
              "tags_str": "Other",
              "LATITUDE": 30.2303,
              "LONGITUDE": -97.7144,
              "Link1": "https://www.reddit.com/r/Bad_Cop_No_Donut/comments/gwd37n/a_black_20yearold_student_justin_howell_is_in/",
              "Link2": "https://www.texastribune.org/2020/06/01/austin-police-george-floyd-mike-ramos/"
            },
            {
              "id": 22,
              "date_text": "May 31st",
              "text": "Police critically injure 20 year old black protester during protests against police violence",
              "tags_str": "Other",
              "LATITUDE": 30.505972,
              "LONGITUDE": -97.747187,
              "Link1": "https://www.reddit.com/r/Bad_Cop_No_Donut/comments/gwd37n/a_black_20yearold_student_justin_howell_is_in/",
              "Link2": "https://www.texastribune.org/2020/06/01/austin-police-george-floyd-mike-ramos/"
            },
            {
              "id": 23,
              "date_text": "May 31st",
              "text": "Police open fire on crowd after a protester throws water on them",
              "tags_str": "Projectiles",
              "LATITUDE": 30.210692,
              "LONGITUDE": -97.942749,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/gwfu8e/apd_gets_water_splashed_on_them_and_immediately/",
              "Link2": "https://tuckbot.tv/#/watch/gwfu8e"
            },
            {
              "id": 24,
              "date_text": "May 31st",
              "text": "Police open fire on crowd after a protester throws water on them",
              "tags_str": "Projectiles",
              "LATITUDE": 30.2303,
              "LONGITUDE": -97.7144,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/gwfu8e/apd_gets_water_splashed_on_them_and_immediately/",
              "Link2": "https://tuckbot.tv/#/watch/gwfu8e"
            },
            {
              "id": 25,
              "date_text": "May 31st",
              "text": "Police open fire on crowd after a protester throws water on them",
              "tags_str": "Projectiles",
              "LATITUDE": 30.505972,
              "LONGITUDE": -97.747187,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/gwfu8e/apd_gets_water_splashed_on_them_and_immediately/",
              "Link2": "https://tuckbot.tv/#/watch/gwfu8e"
            },
            {
              "id": 26,
              "date_text": "May 31st",
              "text": "Police spray a man in the face while he stands still ~3 feet away from them.",
              "tags_str": "Other",
              "LATITUDE": 30.210692,
              "LONGITUDE": -97.942749,
              "Link1": "https://old.reddit.com/r/Bad_Cop_No_Donut/comments/guhgfq/please_let_others_see_this_this_guy_did_not/",
              "Link2": "https://twitter.com/Grits4Breakfast/status/1267128210455588865"
            },
            {
              "id": 27,
              "date_text": "May 31st",
              "text": "Police spray a man in the face while he stands still ~3 feet away from them.",
              "tags_str": "Other",
              "LATITUDE": 30.2303,
              "LONGITUDE": -97.7144,
              "Link1": "https://old.reddit.com/r/Bad_Cop_No_Donut/comments/guhgfq/please_let_others_see_this_this_guy_did_not/",
              "Link2": "https://twitter.com/Grits4Breakfast/status/1267128210455588865"
            },
            {
              "id": 28,
              "date_text": "May 31st",
              "text": "Police spray a man in the face while he stands still ~3 feet away from them.",
              "tags_str": "Other",
              "LATITUDE": 30.505972,
              "LONGITUDE": -97.747187,
              "Link1": "https://old.reddit.com/r/Bad_Cop_No_Donut/comments/guhgfq/please_let_others_see_this_this_guy_did_not/",
              "Link2": "https://twitter.com/Grits4Breakfast/status/1267128210455588865"
            },
            {
              "id": 29,
              "date_text": "May 31st",
              "text": "Woman shot in face with bean bag",
              "tags_str": "Projectiles",
              "LATITUDE": 30.210692,
              "LONGITUDE": -97.942749,
              "Link1": "https://twitter.com/randomjhovall/status/1267309502845669376",
              "Link2": "https://twitter.com/randomjhovall/status/1272076416348291072"
            },
            {
              "id": 30,
              "date_text": "May 31st",
              "text": "Woman shot in face with bean bag",
              "tags_str": "Projectiles",
              "LATITUDE": 30.2303,
              "LONGITUDE": -97.7144,
              "Link1": "https://twitter.com/randomjhovall/status/1267309502845669376",
              "Link2": "https://twitter.com/randomjhovall/status/1272076416348291072"
            },
            {
              "id": 31,
              "date_text": "May 31st",
              "text": "Woman shot in face with bean bag",
              "tags_str": "Projectiles",
              "LATITUDE": 30.505972,
              "LONGITUDE": -97.747187,
              "Link1": "https://twitter.com/randomjhovall/status/1267309502845669376",
              "Link2": "https://twitter.com/randomjhovall/status/1272076416348291072"
            },
            {
              "id": 32,
              "date_text": "June 2nd",
              "text": "Police fire upon protesters seeking medical help",
              "tags_str": "Projectiles",
              "LATITUDE": 30.210692,
              "LONGITUDE": -97.942749,
              "Link1": "https://www.reddit.com/r/2020PoliceBrutality/comments/gvjjwg/volunteer_medics_advised_by_police_to_bring_a/",
              "Link2": "https://www.reddit.com/r/PublicFreakout/comments/gwbbjs/protestor_is_shot_in_head_with_rubber_bullet/"
            },
            {
              "id": 33,
              "date_text": "June 2nd",
              "text": "Police fire upon protesters seeking medical help",
              "tags_str": "Projectiles",
              "LATITUDE": 30.2303,
              "LONGITUDE": -97.7144,
              "Link1": "https://www.reddit.com/r/2020PoliceBrutality/comments/gvjjwg/volunteer_medics_advised_by_police_to_bring_a/",
              "Link2": "https://www.reddit.com/r/PublicFreakout/comments/gwbbjs/protestor_is_shot_in_head_with_rubber_bullet/"
            },
            {
              "id": 34,
              "date_text": "June 2nd",
              "text": "Police fire upon protesters seeking medical help",
              "tags_str": "Projectiles",
              "LATITUDE": 30.505972,
              "LONGITUDE": -97.747187,
              "Link1": "https://www.reddit.com/r/2020PoliceBrutality/comments/gvjjwg/volunteer_medics_advised_by_police_to_bring_a/",
              "Link2": "https://www.reddit.com/r/PublicFreakout/comments/gwbbjs/protestor_is_shot_in_head_with_rubber_bullet/"
            },
            {
              "id": 35,
              "date_text": "June 7th",
              "text": "Police violently arrest drummer",
              "tags_str": "Soft",
              "LATITUDE": 30.210692,
              "LONGITUDE": -97.942749,
              "Link1": "https://twitter.com/NacioMartinez/status/1269787142269607936",
              "Link2": ""
            },
            {
              "id": 36,
              "date_text": "June 7th",
              "text": "Police violently arrest drummer",
              "tags_str": "Soft",
              "LATITUDE": 30.2303,
              "LONGITUDE": -97.7144,
              "Link1": "https://twitter.com/NacioMartinez/status/1269787142269607936",
              "Link2": ""
            },
            {
              "id": 37,
              "date_text": "June 7th",
              "text": "Police violently arrest drummer",
              "tags_str": "Soft",
              "LATITUDE": 30.505972,
              "LONGITUDE": -97.747187,
              "Link1": "https://twitter.com/NacioMartinez/status/1269787142269607936",
              "Link2": ""
            },
            {
              "id": 38,
              "date_text": "June 12th",
              "text": "Police kneel on man's neck to make arrest",
              "tags_str": "Soft",
              "LATITUDE": 30.210692,
              "LONGITUDE": -97.942749,
              "Link1": "https://www.youtube.com/watch?v=Thrvojgme5I",
              "Link2": "https://www.reddit.com/r/Bad_Cop_No_Donut/comments/hc58jg/austin_police_are_investigating_a_use_of_force/"
            },
            {
              "id": 39,
              "date_text": "June 12th",
              "text": "Police kneel on man's neck to make arrest",
              "tags_str": "Soft",
              "LATITUDE": 30.2303,
              "LONGITUDE": -97.7144,
              "Link1": "https://www.youtube.com/watch?v=Thrvojgme5I",
              "Link2": "https://www.reddit.com/r/Bad_Cop_No_Donut/comments/hc58jg/austin_police_are_investigating_a_use_of_force/"
            },
            {
              "id": 40,
              "date_text": "June 12th",
              "text": "Police kneel on man's neck to make arrest",
              "tags_str": "Soft",
              "LATITUDE": 30.505972,
              "LONGITUDE": -97.747187,
              "Link1": "https://www.youtube.com/watch?v=Thrvojgme5I",
              "Link2": "https://www.reddit.com/r/Bad_Cop_No_Donut/comments/hc58jg/austin_police_are_investigating_a_use_of_force/"
            },
            {
              "id": 41,
              "date_text": "June 27th",
              "text": "Police punch arrestee on ground",
              "tags_str": "Soft, Hard",
              "LATITUDE": 30.210692,
              "LONGITUDE": -97.942749,
              "Link1": "https://twitter.com/AltUniverseWash/status/1277104706222002177",
              "Link2": ""
            },
            {
              "id": 42,
              "date_text": "June 27th",
              "text": "Police punch arrestee on ground",
              "tags_str": "Soft, Hard",
              "LATITUDE": 30.2303,
              "LONGITUDE": -97.7144,
              "Link1": "https://twitter.com/AltUniverseWash/status/1277104706222002177",
              "Link2": ""
            },
            {
              "id": 43,
              "date_text": "June 27th",
              "text": "Police punch arrestee on ground",
              "tags_str": "Soft, Hard",
              "LATITUDE": 30.505972,
              "LONGITUDE": -97.747187,
              "Link1": "https://twitter.com/AltUniverseWash/status/1277104706222002177",
              "Link2": ""
            },
            {
              "id": 44,
              "date_text": "July 17th",
              "text": "Livestreamer arrested and punched",
              "tags_str": "Soft, Hard",
              "LATITUDE": 30.210692,
              "LONGITUDE": -97.942749,
              "Link1": "https://streamable.com/srj5s7",
              "Link2": "https://twitter.com/greg_doucette/status/1284497853843415047"
            },
            {
              "id": 45,
              "date_text": "July 17th",
              "text": "Livestreamer arrested and punched",
              "tags_str": "Soft, Hard",
              "LATITUDE": 30.2303,
              "LONGITUDE": -97.7144,
              "Link1": "https://streamable.com/srj5s7",
              "Link2": "https://twitter.com/greg_doucette/status/1284497853843415047"
            },
            {
              "id": 46,
              "date_text": "July 17th",
              "text": "Livestreamer arrested and punched",
              "tags_str": "Soft, Hard",
              "LATITUDE": 30.505972,
              "LONGITUDE": -97.747187,
              "Link1": "https://streamable.com/srj5s7",
              "Link2": "https://twitter.com/greg_doucette/status/1284497853843415047"
            },
            {
              "id": 47,
              "date_text": "August 1st",
              "text": "Police shove and pepper spray protesters",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 30.210692,
              "LONGITUDE": -97.942749,
              "Link1": "https://www.youtube.com/watch?v=EmglMDC-OJU",
              "Link2": "https://www.reddit.com/r/2020PoliceBrutality/comments/i3meab/police_violently_break_up_memorial_of_murdered/"
            },
            {
              "id": 48,
              "date_text": "August 1st",
              "text": "Police shove and pepper spray protesters",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 30.2303,
              "LONGITUDE": -97.7144,
              "Link1": "https://www.youtube.com/watch?v=EmglMDC-OJU",
              "Link2": "https://www.reddit.com/r/2020PoliceBrutality/comments/i3meab/police_violently_break_up_memorial_of_murdered/"
            },
            {
              "id": 49,
              "date_text": "August 1st",
              "text": "Police shove and pepper spray protesters",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 30.505972,
              "LONGITUDE": -97.747187,
              "Link1": "https://www.youtube.com/watch?v=EmglMDC-OJU",
              "Link2": "https://www.reddit.com/r/2020PoliceBrutality/comments/i3meab/police_violently_break_up_memorial_of_murdered/"
            },
            {
              "id": 50,
              "date_text": "August 1st",
              "text": "Police push protesters with horses",
              "tags_str": "Other",
              "LATITUDE": 30.210692,
              "LONGITUDE": -97.942749,
              "Link1": "https://twitter.com/CandiceBernd/status/1289734363933028352",
              "Link2": ""
            },
            {
              "id": 51,
              "date_text": "August 1st",
              "text": "Police push protesters with horses",
              "tags_str": "Other",
              "LATITUDE": 30.2303,
              "LONGITUDE": -97.7144,
              "Link1": "https://twitter.com/CandiceBernd/status/1289734363933028352",
              "Link2": ""
            },
            {
              "id": 52,
              "date_text": "August 1st",
              "text": "Police push protesters with horses",
              "tags_str": "Other",
              "LATITUDE": 30.505972,
              "LONGITUDE": -97.747187,
              "Link1": "https://twitter.com/CandiceBernd/status/1289734363933028352",
              "Link2": ""
            },
            {
              "id": 53,
              "date_text": "June 2nd",
              "text": "Police officer tackles and knees man on the ground",
              "tags_str": "Hard",
              "LATITUDE": 29.746063,
              "LONGITUDE": -94.965265,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/gw2dpw/cop_in_baytown_tx_pulls_over_black_man_white_man/",
              "Link2": "https://www.facebook.com/isaiah.benavides.94/videos/2811815772219886/"
            },
            {
              "id": 54,
              "date_text": "May 30th",
              "text": "Police shoot unarmed woman in the face with a rubber bullet",
              "tags_str": "Projectiles",
              "LATITUDE": 32.996848,
              "LONGITUDE": -96.792113,
              "Link1": "https://twitter.com/KevinRKrause/status/1266898396339675137",
              "Link2": "https://i.redd.it/ns0uj557x0251.jpg"
            },
            {
              "id": 55,
              "date_text": "May 30th",
              "text": "Police shoot unarmed woman in the face with a rubber bullet",
              "tags_str": "Projectiles",
              "LATITUDE": 32.790439,
              "LONGITUDE": -96.80439,
              "Link1": "https://twitter.com/KevinRKrause/status/1266898396339675137",
              "Link2": "https://i.redd.it/ns0uj557x0251.jpg"
            },
            {
              "id": 56,
              "date_text": "May 30th",
              "text": "Man shot in the eye",
              "tags_str": "Projectiles",
              "LATITUDE": 32.996848,
              "LONGITUDE": -96.792113,
              "Link1": "https://twitter.com/HERCGTH/status/1266870616570900480",
              "Link2": "https://www.wfaa.com/article/news/local/dallas-county/dallas-police-investigating-possible-use-of-force-incidents-saturday/287-1d3851d2-656c-4d40-8eac-7deac44ddf2d"
            },
            {
              "id": 57,
              "date_text": "May 30th",
              "text": "Man shot in the eye",
              "tags_str": "Projectiles",
              "LATITUDE": 32.790439,
              "LONGITUDE": -96.80439,
              "Link1": "https://twitter.com/HERCGTH/status/1266870616570900480",
              "Link2": "https://www.wfaa.com/article/news/local/dallas-county/dallas-police-investigating-possible-use-of-force-incidents-saturday/287-1d3851d2-656c-4d40-8eac-7deac44ddf2d"
            },
            {
              "id": 58,
              "date_text": "May 31st",
              "text": "Police use flashbangs and tear gas on protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 32.996848,
              "LONGITUDE": -96.792113,
              "Link1": "https://twitter.com/xtranai/status/1266898175568338945",
              "Link2": "https://twitter.com/calvinwatkins"
            },
            {
              "id": 59,
              "date_text": "May 31st",
              "text": "Police use flashbangs and tear gas on protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 32.790439,
              "LONGITUDE": -96.80439,
              "Link1": "https://twitter.com/xtranai/status/1266898175568338945",
              "Link2": "https://twitter.com/calvinwatkins"
            },
            {
              "id": 60,
              "date_text": "June 1st",
              "text": "Police fire rubber bullet on peaceful protester",
              "tags_str": "Projectiles",
              "LATITUDE": 32.996848,
              "LONGITUDE": -96.792113,
              "Link1": "https://twitter.com/bubbaprog/status/1267542878118727680",
              "Link2": "https://twitter.com/elias_valverde/status/1267550636876447747"
            },
            {
              "id": 61,
              "date_text": "June 1st",
              "text": "Police fire rubber bullet on peaceful protester",
              "tags_str": "Projectiles",
              "LATITUDE": 32.790439,
              "LONGITUDE": -96.80439,
              "Link1": "https://twitter.com/bubbaprog/status/1267542878118727680",
              "Link2": "https://twitter.com/elias_valverde/status/1267550636876447747"
            },
            {
              "id": 62,
              "date_text": "June 2nd",
              "text": "Police maneuver protesters onto bridge and fire tear gas and rubber bullets",
              "tags_str": "Projectiles",
              "LATITUDE": 32.996848,
              "LONGITUDE": -96.792113,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/gx9a5n/these_protests_took_place_on_june_2nd_in_dallas/",
              "Link2": "https://www.google.com/maps/place/Margaret+Hunt+Hill+Bridge,+Dallas,+TX,+USA/@32.781075,-96.8186896,15z/data=!4m5!3m4!1s0x0:0xe296574de7914f9f!8m2!3d32.781075!4d-96.8186896"
            },
            {
              "id": 63,
              "date_text": "June 2nd",
              "text": "Police maneuver protesters onto bridge and fire tear gas and rubber bullets",
              "tags_str": "Projectiles",
              "LATITUDE": 32.790439,
              "LONGITUDE": -96.80439,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/gx9a5n/these_protests_took_place_on_june_2nd_in_dallas/",
              "Link2": "https://www.google.com/maps/place/Margaret+Hunt+Hill+Bridge,+Dallas,+TX,+USA/@32.781075,-96.8186896,15z/data=!4m5!3m4!1s0x0:0xe296574de7914f9f!8m2!3d32.781075!4d-96.8186896"
            },
            {
              "id": 64,
              "date_text": "May 31st",
              "text": "Police fire teargas canisters and projectiles into peaceful crowd of unarmed protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 31.758411,
              "LONGITUDE": -106.478311,
              "Link1": "https://twitter.com/greg_doucette/status/1267430869154902019",
              "Link2": ""
            },
            {
              "id": 65,
              "date_text": "May 29th",
              "text": "Police trample protester with horse",
              "tags_str": "Other",
              "LATITUDE": 29.596156,
              "LONGITUDE": -95.458709,
              "Link1": "https://twitter.com/vikthewild/status/1266538354939756544",
              "Link2": "https://abc13.com/hpd-uns-over-girl-police-on-horse-tramples-protester-george-floyd/6223240/"
            },
            {
              "id": 66,
              "date_text": "May 29th",
              "text": "Police trample protester with horse",
              "tags_str": "Other",
              "LATITUDE": 29.7652,
              "LONGITUDE": -95.3657,
              "Link1": "https://twitter.com/vikthewild/status/1266538354939756544",
              "Link2": "https://abc13.com/hpd-uns-over-girl-police-on-horse-tramples-protester-george-floyd/6223240/"
            },
            {
              "id": 67,
              "date_text": "May 29th",
              "text": "Officers shove a woman to the pavement",
              "tags_str": "Soft",
              "LATITUDE": 29.596156,
              "LONGITUDE": -95.458709,
              "Link1": "https://twitter.com/AbkTrauma/status/1266511972524269569",
              "Link2": ""
            },
            {
              "id": 68,
              "date_text": "May 29th",
              "text": "Officers shove a woman to the pavement",
              "tags_str": "Soft",
              "LATITUDE": 29.7652,
              "LONGITUDE": -95.3657,
              "Link1": "https://twitter.com/AbkTrauma/status/1266511972524269569",
              "Link2": ""
            },
            {
              "id": 69,
              "date_text": "Date Unknown",
              "text": "Officer pushs protester that is filming",
              "tags_str": "Other",
              "LATITUDE": 29.596156,
              "LONGITUDE": -95.458709,
              "Link1": "https://twitter.com/DomSkyeRN/status/1270185401060294656",
              "Link2": ""
            },
            {
              "id": 70,
              "date_text": "Date Unknown",
              "text": "Officer pushs protester that is filming",
              "tags_str": "Other",
              "LATITUDE": 29.7652,
              "LONGITUDE": -95.3657,
              "Link1": "https://twitter.com/DomSkyeRN/status/1270185401060294656",
              "Link2": ""
            },
            {
              "id": 71,
              "date_text": " June 2nd",
              "text": "Police beat protester with batons, then pepper spray another man for recording",
              "tags_str": "Hard, Projectiles, Chemical",
              "LATITUDE": 29.596156,
              "LONGITUDE": -95.458709,
              "Link1": "https://twitter.com/greg_doucette/status/1268392253665546245",
              "Link2": ""
            },
            {
              "id": 72,
              "date_text": " June 2nd",
              "text": "Police beat protester with batons, then pepper spray another man for recording",
              "tags_str": "Hard, Projectiles, Chemical",
              "LATITUDE": 29.7652,
              "LONGITUDE": -95.3657,
              "Link1": "https://twitter.com/greg_doucette/status/1268392253665546245",
              "Link2": ""
            },
            {
              "id": 73,
              "date_text": "June 2nd",
              "text": "Officers violently arrest protesters on the sidewalk",
              "tags_str": "Soft",
              "LATITUDE": 29.596156,
              "LONGITUDE": -95.458709,
              "Link1": "https://www.youtube.com/watch?v=1ppU0XVuQI4&t=2130s",
              "Link2": ""
            },
            {
              "id": 74,
              "date_text": "June 2nd",
              "text": "Officers violently arrest protesters on the sidewalk",
              "tags_str": "Soft",
              "LATITUDE": 29.7652,
              "LONGITUDE": -95.3657,
              "Link1": "https://www.youtube.com/watch?v=1ppU0XVuQI4&t=2130s",
              "Link2": ""
            },
            {
              "id": 75,
              "date_text": "June 2nd",
              "text": "Officers deploy tear gas against peaceful protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 33.046111,
              "LONGITUDE": -96.993889,
              "Link1": "https://twitter.com/psomeoki/status/1267987008380645376",
              "Link2": "https://www.crosstimbersgazette.com/2020/06/03/lewisville-police-release-details-about-arrests-at-protest/"
            },
            {
              "id": 76,
              "date_text": " May 31st",
              "text": "Police shoot man filming them with what were allegedly rubber bullets",
              "tags_str": "Projectiles",
              "LATITUDE": 29.468525,
              "LONGITUDE": -98.526352,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/gu3s6j/police_shoots_protestor_for_no_reason/",
              "Link2": "https://tuckbot.tv/#/watch/gu3s6j"
            },
            {
              "id": 77,
              "date_text": " May 31st",
              "text": "Police shoot man filming them with what were allegedly rubber bullets",
              "tags_str": "Projectiles",
              "LATITUDE": 29.644226,
              "LONGITUDE": -98.312774,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/gu3s6j/police_shoots_protestor_for_no_reason/",
              "Link2": "https://tuckbot.tv/#/watch/gu3s6j"
            },
            {
              "id": 78,
              "date_text": "June 2nd",
              "text": "Police fire on protesters without warning",
              "tags_str": "Projectiles",
              "LATITUDE": 29.468525,
              "LONGITUDE": -98.526352,
              "Link1": "https://twitter.com/SanAntonioProbz/status/1268027491987468288",
              "Link2": ""
            },
            {
              "id": 79,
              "date_text": "June 2nd",
              "text": "Police fire on protesters without warning",
              "tags_str": "Projectiles",
              "LATITUDE": 29.644226,
              "LONGITUDE": -98.312774,
              "Link1": "https://twitter.com/SanAntonioProbz/status/1268027491987468288",
              "Link2": ""
            },
            {
              "id": 80,
              "date_text": "June 1st",
              "text": "Fargo deputy police chief instigates unrest during protest",
              "tags_str": "Other",
              "LATITUDE": 46.90087800000001,
              "LONGITUDE": -96.793577,
              "Link1": "https://www.grandforksherald.com/opinion/6520779-Port-Fargo-Deputy-Chief-sends-apology-email-after-he-was-seen-at-George-Floyd-protest-with-a-beer-can-cursing-at-law-enforcement",
              "Link2": ""
            },
            {
              "id": 81,
              "date_text": "June 3rd",
              "text": "Police using selective enforcement on black individuals",
              "tags_str": "Other",
              "LATITUDE": 46.90087800000001,
              "LONGITUDE": -96.793577,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/gwm2mf/police_using_selective_enforcement_on_protestors/",
              "Link2": "https://twitter.com/Eggsalaaad/status/1268223118394392576"
            },
            {
              "id": 82,
              "date_text": "June 3",
              "text": "Police arrest two reporters",
              "tags_str": "Soft",
              "LATITUDE": 33.519,
              "LONGITUDE": -86.8014,
              "Link1": "https://www.al.com/news/birmingham/2020/06/two-reporters-taken-into-custody-after-covering-birmingham-protest.html",
              "Link2": ""
            },
            {
              "id": 83,
              "date_text": "June 3",
              "text": "Police arrest two reporters",
              "tags_str": "Soft",
              "LATITUDE": 33.401559000000006,
              "LONGITUDE": -86.705511,
              "Link1": "https://www.al.com/news/birmingham/2020/06/two-reporters-taken-into-custody-after-covering-birmingham-protest.html",
              "Link2": ""
            },
            {
              "id": 84,
              "date_text": "June 4",
              "text": "Police arrest journalist Michael Harriot",
              "tags_str": "Soft",
              "LATITUDE": 33.519,
              "LONGITUDE": -86.8014,
              "Link1": "https://www.theroot.com/a-letter-not-from-a-birmingham-jail-1843926346",
              "Link2": "https://www.al.com/news/birmingham/2020/06/journalist-michael-harriot-arrested-after-birmingham-protest.html"
            },
            {
              "id": 85,
              "date_text": "June 4",
              "text": "Police arrest journalist Michael Harriot",
              "tags_str": "Soft",
              "LATITUDE": 33.401559000000006,
              "LONGITUDE": -86.705511,
              "Link1": "https://www.theroot.com/a-letter-not-from-a-birmingham-jail-1843926346",
              "Link2": "https://www.al.com/news/birmingham/2020/06/journalist-michael-harriot-arrested-after-birmingham-protest.html"
            },
            {
              "id": 86,
              "date_text": "June 1st",
              "text": "Protester falls and is stepped on",
              "tags_str": "Other",
              "LATITUDE": 34.726865999999994,
              "LONGITUDE": -86.567318,
              "Link1": "https://twitter.com/ETfonehome97/status/1267657232411435008",
              "Link2": ""
            },
            {
              "id": 87,
              "date_text": "June 3rd",
              "text": "Police officer pepper sprays protesters for no reason",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 34.726865999999994,
              "LONGITUDE": -86.567318,
              "Link1": "https://twitter.com/bitchthot420/status/1268350308398268416",
              "Link2": ""
            },
            {
              "id": 88,
              "date_text": "June 3rd",
              "text": "Police tear gas reporters",
              "tags_str": "Projectiles",
              "LATITUDE": 34.726865999999994,
              "LONGITUDE": -86.567318,
              "Link1": "https://twitter.com/greg_doucette/status/1268397070563414016",
              "Link2": ""
            },
            {
              "id": 89,
              "date_text": "June 3rd",
              "text": "Police preemptively tear gas peaceful protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 34.726865999999994,
              "LONGITUDE": -86.567318,
              "Link1": "https://www.alreporter.com/2020/06/03/huntsville-police-deploy-tear-gas-rubber-bullets-on-protesters/",
              "Link2": "https://twitter.com/IanHoppe/status/1268350756186460164"
            },
            {
              "id": 90,
              "date_text": " June 5th",
              "text": "Police fire rubber bullets on dispersing crowd",
              "tags_str": "Projectiles",
              "LATITUDE": 34.726865999999994,
              "LONGITUDE": -86.567318,
              "Link1": "https://www.reddit.com/r/2020PoliceBrutality/comments/gyo2fh/huntsville_al_woman_documents_herself_struggling/",
              "Link2": ""
            },
            {
              "id": 91,
              "date_text": "May 30th",
              "text": "Peaceful protester tear gassed",
              "tags_str": "Projectiles",
              "LATITUDE": 44.073677,
              "LONGITUDE": -123.078757,
              "Link1": "https://www.youtube.com/watch?v=dPTr54DdTdY",
              "Link2": "https://www.reddit.com/r/Eugene/comments/gtbsvq/eugene_police_teargasses_downtown/"
            },
            {
              "id": 92,
              "date_text": "May 31st",
              "text": "Reporter shot with tear gas canister",
              "tags_str": "Projectiles",
              "LATITUDE": 44.073677,
              "LONGITUDE": -123.078757,
              "Link1": "https://www.youtube.com/watch?v=R7fqWI41vQY",
              "Link2": "https://www.reddit.com/r/Eugene/comments/guxme1/footage_of_epd_shooting_eugene_weekly_reporter/"
            },
            {
              "id": 93,
              "date_text": "June 1st",
              "text": "Officer shoots projectile from moving vehicle",
              "tags_str": "Projectiles",
              "LATITUDE": 44.073677,
              "LONGITUDE": -123.078757,
              "Link1": "https://www.reddit.com/r/Eugene/comments/gurr9r/police_shoot_projectile_from_moving_vehicle_hit/",
              "Link2": "https://streamable.com/9h2tk3"
            },
            {
              "id": 94,
              "date_text": "July 26th",
              "text": "Underage protester tackled and arrested",
              "tags_str": "Soft, Hard",
              "LATITUDE": 44.073677,
              "LONGITUDE": -123.078757,
              "Link1": "https://www.facebook.com/levimadison/videos/10220891720496082/",
              "Link2": ""
            },
            {
              "id": 95,
              "date_text": "May 30th",
              "text": "Police violently break up peaceful protest",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/IwriteOK/status/1266907719635632129",
              "Link2": "https://twitter.com/MrOlmos/status/1266916861267996673"
            },
            {
              "id": 96,
              "date_text": "May 30th",
              "text": "Police violently break up peaceful protest",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/IwriteOK/status/1266907719635632129",
              "Link2": "https://twitter.com/MrOlmos/status/1266916861267996673"
            },
            {
              "id": 97,
              "date_text": "May 30th",
              "text": "Police violently break up peaceful protest",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/IwriteOK/status/1266907719635632129",
              "Link2": "https://twitter.com/MrOlmos/status/1266916861267996673"
            },
            {
              "id": 98,
              "date_text": "May 30th",
              "text": "Officer pepper-sprays protester",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://www.youtube.com/watch?v=01oWE24O9Zw&feature=emb_title",
              "Link2": ""
            },
            {
              "id": 99,
              "date_text": "May 30th",
              "text": "Officer pepper-sprays protester",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://www.youtube.com/watch?v=01oWE24O9Zw&feature=emb_title",
              "Link2": ""
            },
            {
              "id": 100,
              "date_text": "May 30th",
              "text": "Officer pepper-sprays protester",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://www.youtube.com/watch?v=01oWE24O9Zw&feature=emb_title",
              "Link2": ""
            },
            {
              "id": 101,
              "date_text": "June 2nd",
              "text": "Police appear to tear-gas a homeless camp",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/AstuteAF/status/1268125169890938882",
              "Link2": ""
            },
            {
              "id": 102,
              "date_text": "June 2nd",
              "text": "Police appear to tear-gas a homeless camp",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/AstuteAF/status/1268125169890938882",
              "Link2": ""
            },
            {
              "id": 103,
              "date_text": "June 2nd",
              "text": "Police appear to tear-gas a homeless camp",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/AstuteAF/status/1268125169890938882",
              "Link2": ""
            },
            {
              "id": 104,
              "date_text": "June 2nd",
              "text": "Police shoot tear gas/flashbang grenade into a crowd",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/matcha_chai/status/1268043556913987584",
              "Link2": ""
            },
            {
              "id": 105,
              "date_text": "June 2nd",
              "text": "Police shoot tear gas/flashbang grenade into a crowd",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/matcha_chai/status/1268043556913987584",
              "Link2": ""
            },
            {
              "id": 106,
              "date_text": "June 2nd",
              "text": "Police shoot tear gas/flashbang grenade into a crowd",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/matcha_chai/status/1268043556913987584",
              "Link2": ""
            },
            {
              "id": 107,
              "date_text": "June 2nd",
              "text": "Police launch tear gas into a crowd",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrAndyNgo/status/1268224547272003585",
              "Link2": "https://twitter.com/greg_doucette/status/1268051560489193473"
            },
            {
              "id": 108,
              "date_text": "June 2nd",
              "text": "Police launch tear gas into a crowd",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrAndyNgo/status/1268224547272003585",
              "Link2": "https://twitter.com/greg_doucette/status/1268051560489193473"
            },
            {
              "id": 109,
              "date_text": "June 2nd",
              "text": "Police launch tear gas into a crowd",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrAndyNgo/status/1268224547272003585",
              "Link2": "https://twitter.com/greg_doucette/status/1268051560489193473"
            },
            {
              "id": 110,
              "date_text": " June 2nd",
              "text": "Tear gas fired across active street at protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/greg_doucette/status/1268190300209586177",
              "Link2": "https://www.pscp.tv/IwriteOK/1OyKAYjnPgrKb?t=52m23s"
            },
            {
              "id": 111,
              "date_text": " June 2nd",
              "text": "Tear gas fired across active street at protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/greg_doucette/status/1268190300209586177",
              "Link2": "https://www.pscp.tv/IwriteOK/1OyKAYjnPgrKb?t=52m23s"
            },
            {
              "id": 112,
              "date_text": " June 2nd",
              "text": "Tear gas fired across active street at protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/greg_doucette/status/1268190300209586177",
              "Link2": "https://www.pscp.tv/IwriteOK/1OyKAYjnPgrKb?t=52m23s"
            },
            {
              "id": 113,
              "date_text": "June 2nd",
              "text": "Protesters fleeing tear gas are pepper-sprayed and struck when they ask police where they are supposed to go",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://www.tiktok.com/@officersiggity/video/6834194381126323462",
              "Link2": "https://twitter.com/greg_doucette/status/1269082018542956545"
            },
            {
              "id": 114,
              "date_text": "June 2nd",
              "text": "Protesters fleeing tear gas are pepper-sprayed and struck when they ask police where they are supposed to go",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://www.tiktok.com/@officersiggity/video/6834194381126323462",
              "Link2": "https://twitter.com/greg_doucette/status/1269082018542956545"
            },
            {
              "id": 115,
              "date_text": "June 2nd",
              "text": "Protesters fleeing tear gas are pepper-sprayed and struck when they ask police where they are supposed to go",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://www.tiktok.com/@officersiggity/video/6834194381126323462",
              "Link2": "https://twitter.com/greg_doucette/status/1269082018542956545"
            },
            {
              "id": 116,
              "date_text": "June 3rd",
              "text": "Police SUV accelerates towards protesters",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/greg_doucette/status/1268317409095622658",
              "Link2": ""
            },
            {
              "id": 117,
              "date_text": "June 3rd",
              "text": "Police SUV accelerates towards protesters",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/greg_doucette/status/1268317409095622658",
              "Link2": ""
            },
            {
              "id": 118,
              "date_text": "June 3rd",
              "text": "Police SUV accelerates towards protesters",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/greg_doucette/status/1268317409095622658",
              "Link2": ""
            },
            {
              "id": 119,
              "date_text": "June 4th",
              "text": "Police shove member of the press",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/i/broadcasts/1ynKOpMqVeqGR",
              "Link2": "https://twitter.com/Human42LM/status/1268839807582523392"
            },
            {
              "id": 120,
              "date_text": "June 4th",
              "text": "Police shove member of the press",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/i/broadcasts/1ynKOpMqVeqGR",
              "Link2": "https://twitter.com/Human42LM/status/1268839807582523392"
            },
            {
              "id": 121,
              "date_text": "June 4th",
              "text": "Police shove member of the press",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/i/broadcasts/1ynKOpMqVeqGR",
              "Link2": "https://twitter.com/Human42LM/status/1268839807582523392"
            },
            {
              "id": 122,
              "date_text": "June 5th",
              "text": "Police shoot peaceful protesters on sidewalk",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/bigpieceoftoast/status/1269393272570437632",
              "Link2": ""
            },
            {
              "id": 123,
              "date_text": "June 5th",
              "text": "Police shoot peaceful protesters on sidewalk",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/bigpieceoftoast/status/1269393272570437632",
              "Link2": ""
            },
            {
              "id": 124,
              "date_text": "June 5th",
              "text": "Police shoot peaceful protesters on sidewalk",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/bigpieceoftoast/status/1269393272570437632",
              "Link2": ""
            },
            {
              "id": 125,
              "date_text": "June 5th",
              "text": "Tear gas fired at fleeing protesters & passing cars",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrOlmos/status/1268826151952121856",
              "Link2": ""
            },
            {
              "id": 126,
              "date_text": "June 5th",
              "text": "Tear gas fired at fleeing protesters & passing cars",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrOlmos/status/1268826151952121856",
              "Link2": ""
            },
            {
              "id": 127,
              "date_text": "June 5th",
              "text": "Tear gas fired at fleeing protesters & passing cars",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrOlmos/status/1268826151952121856",
              "Link2": ""
            },
            {
              "id": 128,
              "date_text": "June 6th",
              "text": "Officer attacks photographer with baton and pepper sprays him",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/chadloder/status/1269526243138928642",
              "Link2": "https://twitter.com/TVAyyyy/status/1269526590456643584"
            },
            {
              "id": 129,
              "date_text": "June 6th",
              "text": "Officer attacks photographer with baton and pepper sprays him",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/chadloder/status/1269526243138928642",
              "Link2": "https://twitter.com/TVAyyyy/status/1269526590456643584"
            },
            {
              "id": 130,
              "date_text": "June 6th",
              "text": "Officer attacks photographer with baton and pepper sprays him",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/chadloder/status/1269526243138928642",
              "Link2": "https://twitter.com/TVAyyyy/status/1269526590456643584"
            },
            {
              "id": 131,
              "date_text": " June 6th",
              "text": "Police push protest back, beating stragglers",
              "tags_str": "Hard",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/greg_doucette/status/1269313407985033216",
              "Link2": ""
            },
            {
              "id": 132,
              "date_text": " June 6th",
              "text": "Police push protest back, beating stragglers",
              "tags_str": "Hard",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/greg_doucette/status/1269313407985033216",
              "Link2": ""
            },
            {
              "id": 133,
              "date_text": " June 6th",
              "text": "Police push protest back, beating stragglers",
              "tags_str": "Hard",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/greg_doucette/status/1269313407985033216",
              "Link2": ""
            },
            {
              "id": 134,
              "date_text": "June 6th",
              "text": "Police fire tear gas at fleeing protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/BonnieSilkman/status/1269174980060696577",
              "Link2": ""
            },
            {
              "id": 135,
              "date_text": "June 6th",
              "text": "Police fire tear gas at fleeing protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/BonnieSilkman/status/1269174980060696577",
              "Link2": ""
            },
            {
              "id": 136,
              "date_text": "June 6th",
              "text": "Police fire tear gas at fleeing protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/BonnieSilkman/status/1269174980060696577",
              "Link2": ""
            },
            {
              "id": 137,
              "date_text": "June 6th",
              "text": "Police respond to thrown water bottle with excessive force",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrOlmos/status/1269177830505512961",
              "Link2": ""
            },
            {
              "id": 138,
              "date_text": "June 6th",
              "text": "Police respond to thrown water bottle with excessive force",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrOlmos/status/1269177830505512961",
              "Link2": ""
            },
            {
              "id": 139,
              "date_text": "June 6th",
              "text": "Police respond to thrown water bottle with excessive force",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrOlmos/status/1269177830505512961",
              "Link2": ""
            },
            {
              "id": 140,
              "date_text": " June 6th",
              "text": "Officer chases man filming, beats with baton and pepper sprays in the face twice",
              "tags_str": "Hard, Projectiles, Chemical",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://clips.twitch.tv/BoringMotionlessConsoleTebowing",
              "Link2": ""
            },
            {
              "id": 141,
              "date_text": " June 6th",
              "text": "Officer chases man filming, beats with baton and pepper sprays in the face twice",
              "tags_str": "Hard, Projectiles, Chemical",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://clips.twitch.tv/BoringMotionlessConsoleTebowing",
              "Link2": ""
            },
            {
              "id": 142,
              "date_text": " June 6th",
              "text": "Officer chases man filming, beats with baton and pepper sprays in the face twice",
              "tags_str": "Hard, Projectiles, Chemical",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://clips.twitch.tv/BoringMotionlessConsoleTebowing",
              "Link2": ""
            },
            {
              "id": 143,
              "date_text": "June 7th",
              "text": "Police pull departing protester from bike to arrest them",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/akamikeb/status/1269537214192476161",
              "Link2": ""
            },
            {
              "id": 144,
              "date_text": "June 7th",
              "text": "Police pull departing protester from bike to arrest them",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/akamikeb/status/1269537214192476161",
              "Link2": ""
            },
            {
              "id": 145,
              "date_text": "June 7th",
              "text": "Police pull departing protester from bike to arrest them",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/akamikeb/status/1269537214192476161",
              "Link2": ""
            },
            {
              "id": 146,
              "date_text": "June 7th",
              "text": "Police pepper-spray journalist",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/TheRealCoryElia/status/1269518318949380098",
              "Link2": ""
            },
            {
              "id": 147,
              "date_text": "June 7th",
              "text": "Police pepper-spray journalist",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/TheRealCoryElia/status/1269518318949380098",
              "Link2": ""
            },
            {
              "id": 148,
              "date_text": "June 7th",
              "text": "Police pepper-spray journalist",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/TheRealCoryElia/status/1269518318949380098",
              "Link2": ""
            },
            {
              "id": 149,
              "date_text": "June 7th",
              "text": "Police arrest people taking pictures, threaten to arrest press",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/AlexMilanTracy/status/1269577129265524736",
              "Link2": ""
            },
            {
              "id": 150,
              "date_text": "June 7th",
              "text": "Police arrest people taking pictures, threaten to arrest press",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/AlexMilanTracy/status/1269577129265524736",
              "Link2": ""
            },
            {
              "id": 151,
              "date_text": "June 7th",
              "text": "Police arrest people taking pictures, threaten to arrest press",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/AlexMilanTracy/status/1269577129265524736",
              "Link2": ""
            },
            {
              "id": 152,
              "date_text": "June 7th",
              "text": "Police beat protesters",
              "tags_str": "Hard",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/AlexMilanTracy/status/1269557908863283200",
              "Link2": ""
            },
            {
              "id": 153,
              "date_text": "June 7th",
              "text": "Police beat protesters",
              "tags_str": "Hard",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/AlexMilanTracy/status/1269557908863283200",
              "Link2": ""
            },
            {
              "id": 154,
              "date_text": "June 7th",
              "text": "Police beat protesters",
              "tags_str": "Hard",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/AlexMilanTracy/status/1269557908863283200",
              "Link2": ""
            },
            {
              "id": 155,
              "date_text": "June 7th",
              "text": "Police beat protesters in park",
              "tags_str": "Hard",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/greg_doucette/status/1269655789595213824",
              "Link2": ""
            },
            {
              "id": 156,
              "date_text": "June 7th",
              "text": "Police beat protesters in park",
              "tags_str": "Hard",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/greg_doucette/status/1269655789595213824",
              "Link2": ""
            },
            {
              "id": 157,
              "date_text": "June 7th",
              "text": "Police beat protesters in park",
              "tags_str": "Hard",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/greg_doucette/status/1269655789595213824",
              "Link2": ""
            },
            {
              "id": 158,
              "date_text": "June 8th",
              "text": "Officer forces press away from protest",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/45thabsurdist/status/1269882746656002049",
              "Link2": "https://www.oregonlive.com/coronavirus/2020/05/portland-curfew-begins-at-8-pm-saturday-in-response-to-overnight-riot-what-that-means-for-you.html"
            },
            {
              "id": 159,
              "date_text": "June 8th",
              "text": "Officer forces press away from protest",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/45thabsurdist/status/1269882746656002049",
              "Link2": "https://www.oregonlive.com/coronavirus/2020/05/portland-curfew-begins-at-8-pm-saturday-in-response-to-overnight-riot-what-that-means-for-you.html"
            },
            {
              "id": 160,
              "date_text": "June 8th",
              "text": "Officer forces press away from protest",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/45thabsurdist/status/1269882746656002049",
              "Link2": "https://www.oregonlive.com/coronavirus/2020/05/portland-curfew-begins-at-8-pm-saturday-in-response-to-overnight-riot-what-that-means-for-you.html"
            },
            {
              "id": 161,
              "date_text": "June 13th",
              "text": "Police charge protesters, using tear gas and flashbangs to disperse",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrOlmos/status/1271710837107875841",
              "Link2": "https://twitter.com/MrOlmos/status/1271713606954958848"
            },
            {
              "id": 162,
              "date_text": "June 13th",
              "text": "Police charge protesters, using tear gas and flashbangs to disperse",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrOlmos/status/1271710837107875841",
              "Link2": "https://twitter.com/MrOlmos/status/1271713606954958848"
            },
            {
              "id": 163,
              "date_text": "June 13th",
              "text": "Police charge protesters, using tear gas and flashbangs to disperse",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrOlmos/status/1271710837107875841",
              "Link2": "https://twitter.com/MrOlmos/status/1271713606954958848"
            },
            {
              "id": 164,
              "date_text": "June 13th",
              "text": "Protester shoved to ground and beaten",
              "tags_str": "Soft, Hard",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://www.tiktok.com/@officersiggity/video/6838314162192485638",
              "Link2": ""
            },
            {
              "id": 165,
              "date_text": "June 13th",
              "text": "Protester shoved to ground and beaten",
              "tags_str": "Soft, Hard",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://www.tiktok.com/@officersiggity/video/6838314162192485638",
              "Link2": ""
            },
            {
              "id": 166,
              "date_text": "June 13th",
              "text": "Protester shoved to ground and beaten",
              "tags_str": "Soft, Hard",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://www.tiktok.com/@officersiggity/video/6838314162192485638",
              "Link2": ""
            },
            {
              "id": 167,
              "date_text": "June 14th",
              "text": "Officer strikes journalist with baton",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/PDXzane/status/1272058454799028226",
              "Link2": ""
            },
            {
              "id": 168,
              "date_text": "June 14th",
              "text": "Officer strikes journalist with baton",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/PDXzane/status/1272058454799028226",
              "Link2": ""
            },
            {
              "id": 169,
              "date_text": "June 14th",
              "text": "Officer strikes journalist with baton",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/PDXzane/status/1272058454799028226",
              "Link2": ""
            },
            {
              "id": 170,
              "date_text": "June 15th",
              "text": "Police apply no-assembly order to journalists",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/TheRealCoryElia/status/1272427882359353344",
              "Link2": ""
            },
            {
              "id": 171,
              "date_text": "June 15th",
              "text": "Police apply no-assembly order to journalists",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/TheRealCoryElia/status/1272427882359353344",
              "Link2": ""
            },
            {
              "id": 172,
              "date_text": "June 15th",
              "text": "Police apply no-assembly order to journalists",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/TheRealCoryElia/status/1272427882359353344",
              "Link2": ""
            },
            {
              "id": 173,
              "date_text": "June 16th",
              "text": "Police disperse press, tell them to run",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrOlmos/status/1272796206071087105",
              "Link2": ""
            },
            {
              "id": 174,
              "date_text": "June 16th",
              "text": "Police disperse press, tell them to run",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrOlmos/status/1272796206071087105",
              "Link2": ""
            },
            {
              "id": 175,
              "date_text": "June 16th",
              "text": "Police disperse press, tell them to run",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrOlmos/status/1272796206071087105",
              "Link2": ""
            },
            {
              "id": 176,
              "date_text": "June 17th",
              "text": "Evidence of badges being hidden during the June 6th incident",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/alankesslr/status/1273299640310325250",
              "Link2": ""
            },
            {
              "id": 177,
              "date_text": "June 17th",
              "text": "Evidence of badges being hidden during the June 6th incident",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/alankesslr/status/1273299640310325250",
              "Link2": ""
            },
            {
              "id": 178,
              "date_text": "June 17th",
              "text": "Evidence of badges being hidden during the June 6th incident",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/alankesslr/status/1273299640310325250",
              "Link2": ""
            },
            {
              "id": 179,
              "date_text": "June 19th",
              "text": "Protester bleeding from head after he was shot by police",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://www.reddit.com/r/2020PoliceBrutality/comments/hchk22/portland_police_shot_a_protester_in_the_head/",
              "Link2": ""
            },
            {
              "id": 180,
              "date_text": "June 19th",
              "text": "Protester bleeding from head after he was shot by police",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://www.reddit.com/r/2020PoliceBrutality/comments/hchk22/portland_police_shot_a_protester_in_the_head/",
              "Link2": ""
            },
            {
              "id": 181,
              "date_text": "June 19th",
              "text": "Protester bleeding from head after he was shot by police",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://www.reddit.com/r/2020PoliceBrutality/comments/hchk22/portland_police_shot_a_protester_in_the_head/",
              "Link2": ""
            },
            {
              "id": 182,
              "date_text": "June 26th",
              "text": "Police tear gas fleeing protesters, pull individuals from cars",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/hungrybowtie/status/1276446115831803906",
              "Link2": ""
            },
            {
              "id": 183,
              "date_text": "June 26th",
              "text": "Police tear gas fleeing protesters, pull individuals from cars",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/hungrybowtie/status/1276446115831803906",
              "Link2": ""
            },
            {
              "id": 184,
              "date_text": "June 26th",
              "text": "Police tear gas fleeing protesters, pull individuals from cars",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/hungrybowtie/status/1276446115831803906",
              "Link2": ""
            },
            {
              "id": 185,
              "date_text": "June 26th",
              "text": "Police use flashbangs and tear gas to disperse protesters, catching lawyers and journalists in the fray",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/hungrybowtie/status/1276454928823668738",
              "Link2": "https://twitter.com/hungrybowtie/status/1276453955476680706"
            },
            {
              "id": 186,
              "date_text": "June 26th",
              "text": "Police use flashbangs and tear gas to disperse protesters, catching lawyers and journalists in the fray",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/hungrybowtie/status/1276454928823668738",
              "Link2": "https://twitter.com/hungrybowtie/status/1276453955476680706"
            },
            {
              "id": 187,
              "date_text": "June 26th",
              "text": "Police use flashbangs and tear gas to disperse protesters, catching lawyers and journalists in the fray",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/hungrybowtie/status/1276454928823668738",
              "Link2": "https://twitter.com/hungrybowtie/status/1276453955476680706"
            },
            {
              "id": 188,
              "date_text": "June 26th",
              "text": "Man shot in eye with stinger pellet",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/chadloder/status/1277360969228771329",
              "Link2": ""
            },
            {
              "id": 189,
              "date_text": "June 26th",
              "text": "Man shot in eye with stinger pellet",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/chadloder/status/1277360969228771329",
              "Link2": ""
            },
            {
              "id": 190,
              "date_text": "June 26th",
              "text": "Man shot in eye with stinger pellet",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/chadloder/status/1277360969228771329",
              "Link2": ""
            },
            {
              "id": 191,
              "date_text": "June 26th",
              "text": "Police fire explosives from behind barricade",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/greg_doucette/status/1277685523595788290",
              "Link2": ""
            },
            {
              "id": 192,
              "date_text": "June 26th",
              "text": "Police fire explosives from behind barricade",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/greg_doucette/status/1277685523595788290",
              "Link2": ""
            },
            {
              "id": 193,
              "date_text": "June 26th",
              "text": "Police fire explosives from behind barricade",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/greg_doucette/status/1277685523595788290",
              "Link2": ""
            },
            {
              "id": 194,
              "date_text": "June 27th",
              "text": "Police charge protesters, shoving them and beating them with batons",
              "tags_str": "Hard, Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://www.reddit.com/r/ThatsInsane/comments/hgr2ld/cops_gone_crazyportlandpolice_has_finally_lost/",
              "Link2": "https://www.youtube.com/watch?v=IGW5CpU2C6s"
            },
            {
              "id": 195,
              "date_text": "June 27th",
              "text": "Police charge protesters, shoving them and beating them with batons",
              "tags_str": "Hard, Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://www.reddit.com/r/ThatsInsane/comments/hgr2ld/cops_gone_crazyportlandpolice_has_finally_lost/",
              "Link2": "https://www.youtube.com/watch?v=IGW5CpU2C6s"
            },
            {
              "id": 196,
              "date_text": "June 27th",
              "text": "Police charge protesters, shoving them and beating them with batons",
              "tags_str": "Hard, Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://www.reddit.com/r/ThatsInsane/comments/hgr2ld/cops_gone_crazyportlandpolice_has_finally_lost/",
              "Link2": "https://www.youtube.com/watch?v=IGW5CpU2C6s"
            },
            {
              "id": 197,
              "date_text": "June 28th",
              "text": "Police tear gas protesters for no evident reason",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/hungrybowtie/status/1277125125934964736",
              "Link2": "https://twitter.com/hungrybowtie/status/1277125535483588609"
            },
            {
              "id": 198,
              "date_text": "June 28th",
              "text": "Police tear gas protesters for no evident reason",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/hungrybowtie/status/1277125125934964736",
              "Link2": "https://twitter.com/hungrybowtie/status/1277125535483588609"
            },
            {
              "id": 199,
              "date_text": "June 28th",
              "text": "Police tear gas protesters for no evident reason",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/hungrybowtie/status/1277125125934964736",
              "Link2": "https://twitter.com/hungrybowtie/status/1277125535483588609"
            },
            {
              "id": 200,
              "date_text": "June 28th",
              "text": "Police beat wrong person for vandalism",
              "tags_str": "Hard",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/hungrybowtie/status/1277156963449593856",
              "Link2": ""
            },
            {
              "id": 201,
              "date_text": "June 28th",
              "text": "Police beat wrong person for vandalism",
              "tags_str": "Hard",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/hungrybowtie/status/1277156963449593856",
              "Link2": ""
            },
            {
              "id": 202,
              "date_text": "June 28th",
              "text": "Police beat wrong person for vandalism",
              "tags_str": "Hard",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/hungrybowtie/status/1277156963449593856",
              "Link2": ""
            },
            {
              "id": 203,
              "date_text": "June 28th",
              "text": "Riot police charge, tackle and arrest protesters",
              "tags_str": "Soft, Hard",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/hungrybowtie/status/1277159562563317760",
              "Link2": "https://twitter.com/hungrybowtie/status/1277160091041447937"
            },
            {
              "id": 204,
              "date_text": "June 28th",
              "text": "Riot police charge, tackle and arrest protesters",
              "tags_str": "Soft, Hard",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/hungrybowtie/status/1277159562563317760",
              "Link2": "https://twitter.com/hungrybowtie/status/1277160091041447937"
            },
            {
              "id": 205,
              "date_text": "June 28th",
              "text": "Riot police charge, tackle and arrest protesters",
              "tags_str": "Soft, Hard",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/hungrybowtie/status/1277159562563317760",
              "Link2": "https://twitter.com/hungrybowtie/status/1277160091041447937"
            },
            {
              "id": 206,
              "date_text": "June 28th",
              "text": "Police retaliate to thrown water bottle with excessive force",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/hungrybowtie/status/1277169298000105473",
              "Link2": ""
            },
            {
              "id": 207,
              "date_text": "June 28th",
              "text": "Police retaliate to thrown water bottle with excessive force",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/hungrybowtie/status/1277169298000105473",
              "Link2": ""
            },
            {
              "id": 208,
              "date_text": "June 28th",
              "text": "Police retaliate to thrown water bottle with excessive force",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/hungrybowtie/status/1277169298000105473",
              "Link2": ""
            },
            {
              "id": 209,
              "date_text": "June 28th",
              "text": "Police charge crowd; shove multiple protesters",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/1misanthrophile/status/1277340069867601920",
              "Link2": ""
            },
            {
              "id": 210,
              "date_text": "June 28th",
              "text": "Police charge crowd; shove multiple protesters",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/1misanthrophile/status/1277340069867601920",
              "Link2": ""
            },
            {
              "id": 211,
              "date_text": "June 28th",
              "text": "Police charge crowd; shove multiple protesters",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/1misanthrophile/status/1277340069867601920",
              "Link2": ""
            },
            {
              "id": 212,
              "date_text": "June 28th",
              "text": "Police shove and mace protester with hands up",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/1misanthrophile/status/1277340657648984064",
              "Link2": ""
            },
            {
              "id": 213,
              "date_text": "June 28th",
              "text": "Police shove and mace protester with hands up",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/1misanthrophile/status/1277340657648984064",
              "Link2": ""
            },
            {
              "id": 214,
              "date_text": "June 28th",
              "text": "Police shove and mace protester with hands up",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/1misanthrophile/status/1277340657648984064",
              "Link2": ""
            },
            {
              "id": 215,
              "date_text": "June 29th",
              "text": "Journalist shot with foam round",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/defendpdx/status/1277905587771039744",
              "Link2": "https://twitter.com/defendpdx/status/1277899405568339974"
            },
            {
              "id": 216,
              "date_text": "June 29th",
              "text": "Journalist shot with foam round",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/defendpdx/status/1277905587771039744",
              "Link2": "https://twitter.com/defendpdx/status/1277899405568339974"
            },
            {
              "id": 217,
              "date_text": "June 29th",
              "text": "Journalist shot with foam round",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/defendpdx/status/1277905587771039744",
              "Link2": "https://twitter.com/defendpdx/status/1277899405568339974"
            },
            {
              "id": 218,
              "date_text": "June 29th",
              "text": "Police shove, tackle and kneel on protesters",
              "tags_str": "Soft, Hard",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/PredatorFiles/status/1277933736441479170",
              "Link2": "https://twitter.com/i/web/status/1277909390159306752"
            },
            {
              "id": 219,
              "date_text": "June 29th",
              "text": "Police shove, tackle and kneel on protesters",
              "tags_str": "Soft, Hard",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/PredatorFiles/status/1277933736441479170",
              "Link2": "https://twitter.com/i/web/status/1277909390159306752"
            },
            {
              "id": 220,
              "date_text": "June 29th",
              "text": "Police shove, tackle and kneel on protesters",
              "tags_str": "Soft, Hard",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/PredatorFiles/status/1277933736441479170",
              "Link2": "https://twitter.com/i/web/status/1277909390159306752"
            },
            {
              "id": 221,
              "date_text": "June 30th",
              "text": "Police pepper-spray, strike and shoot protesters at point-blank range",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://www.reddit.com/r/2020PoliceBrutality/comments/hjdh39/portland_or_police_mace_beat_and_shoot_rubber/",
              "Link2": "https://twitter.com/defendpdx/status/1278192323575218176"
            },
            {
              "id": 222,
              "date_text": "June 30th",
              "text": "Police pepper-spray, strike and shoot protesters at point-blank range",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://www.reddit.com/r/2020PoliceBrutality/comments/hjdh39/portland_or_police_mace_beat_and_shoot_rubber/",
              "Link2": "https://twitter.com/defendpdx/status/1278192323575218176"
            },
            {
              "id": 223,
              "date_text": "June 30th",
              "text": "Police pepper-spray, strike and shoot protesters at point-blank range",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://www.reddit.com/r/2020PoliceBrutality/comments/hjdh39/portland_or_police_mace_beat_and_shoot_rubber/",
              "Link2": "https://twitter.com/defendpdx/status/1278192323575218176"
            },
            {
              "id": 224,
              "date_text": "June 30th",
              "text": "Reporter arrested after identifying officer",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://www.pscp.tv/w/1lPKqLgBrBWxb",
              "Link2": "https://twitter.com/PNWResistance/status/1278247639708913664"
            },
            {
              "id": 225,
              "date_text": "June 30th",
              "text": "Reporter arrested after identifying officer",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://www.pscp.tv/w/1lPKqLgBrBWxb",
              "Link2": "https://twitter.com/PNWResistance/status/1278247639708913664"
            },
            {
              "id": 226,
              "date_text": "June 30th",
              "text": "Reporter arrested after identifying officer",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://www.pscp.tv/w/1lPKqLgBrBWxb",
              "Link2": "https://twitter.com/PNWResistance/status/1278247639708913664"
            },
            {
              "id": 227,
              "date_text": "June 30th",
              "text": "Police fire tear gas at protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/hj42i3/portland_police_fire_cs_gas_at_protestors/",
              "Link2": ""
            },
            {
              "id": 228,
              "date_text": "June 30th",
              "text": "Police fire tear gas at protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/hj42i3/portland_police_fire_cs_gas_at_protestors/",
              "Link2": ""
            },
            {
              "id": 229,
              "date_text": "June 30th",
              "text": "Police fire tear gas at protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/hj42i3/portland_police_fire_cs_gas_at_protestors/",
              "Link2": ""
            },
            {
              "id": 230,
              "date_text": "June 30th",
              "text": "Police arrest journalist",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/hjb863/portland_police_removing_journalists_press_badge/",
              "Link2": ""
            },
            {
              "id": 231,
              "date_text": "June 30th",
              "text": "Police arrest journalist",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/hjb863/portland_police_removing_journalists_press_badge/",
              "Link2": ""
            },
            {
              "id": 232,
              "date_text": "June 30th",
              "text": "Police arrest journalist",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/hjb863/portland_police_removing_journalists_press_badge/",
              "Link2": ""
            },
            {
              "id": 233,
              "date_text": " June 30th",
              "text": "Police tackle fleeing protesters",
              "tags_str": "Hard",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://www.tiktok.com/@dollface999/video/6845321520802467077",
              "Link2": "https://www.reddit.com/r/2020PoliceBrutality/comments/hkv6fb/what_kind_of_dystopian_police_state_shit_is_this/"
            },
            {
              "id": 234,
              "date_text": " June 30th",
              "text": "Police tackle fleeing protesters",
              "tags_str": "Hard",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://www.tiktok.com/@dollface999/video/6845321520802467077",
              "Link2": "https://www.reddit.com/r/2020PoliceBrutality/comments/hkv6fb/what_kind_of_dystopian_police_state_shit_is_this/"
            },
            {
              "id": 235,
              "date_text": " June 30th",
              "text": "Police tackle fleeing protesters",
              "tags_str": "Hard",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://www.tiktok.com/@dollface999/video/6845321520802467077",
              "Link2": "https://www.reddit.com/r/2020PoliceBrutality/comments/hkv6fb/what_kind_of_dystopian_police_state_shit_is_this/"
            },
            {
              "id": 236,
              "date_text": "July 2nd",
              "text": "Police shoot protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/KohzKah/status/1278578914613288961",
              "Link2": ""
            },
            {
              "id": 237,
              "date_text": "July 2nd",
              "text": "Police shoot protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/KohzKah/status/1278578914613288961",
              "Link2": ""
            },
            {
              "id": 238,
              "date_text": "July 2nd",
              "text": "Police shoot protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/KohzKah/status/1278578914613288961",
              "Link2": ""
            },
            {
              "id": 239,
              "date_text": "July 2nd",
              "text": "Journalist shot by police",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/PredatorFiles/status/1278635513746870276",
              "Link2": ""
            },
            {
              "id": 240,
              "date_text": "July 2nd",
              "text": "Journalist shot by police",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/PredatorFiles/status/1278635513746870276",
              "Link2": ""
            },
            {
              "id": 241,
              "date_text": "July 2nd",
              "text": "Journalist shot by police",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/PredatorFiles/status/1278635513746870276",
              "Link2": ""
            },
            {
              "id": 242,
              "date_text": "July 3rd",
              "text": "Police fire on gathered protesters from within Justice Center",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://mobile.twitter.com/Johnnthelefty/status/1278966824801931264",
              "Link2": ""
            },
            {
              "id": 243,
              "date_text": "July 3rd",
              "text": "Police fire on gathered protesters from within Justice Center",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://mobile.twitter.com/Johnnthelefty/status/1278966824801931264",
              "Link2": ""
            },
            {
              "id": 244,
              "date_text": "July 3rd",
              "text": "Police fire on gathered protesters from within Justice Center",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://mobile.twitter.com/Johnnthelefty/status/1278966824801931264",
              "Link2": ""
            },
            {
              "id": 245,
              "date_text": "July 3rd",
              "text": "Local and Federal Police fire on protesters, shove journalist",
              "tags_str": "Soft, Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://mobile.twitter.com/KohzKah/status/1278944647151104000",
              "Link2": "https://mobile.twitter.com/Johnnthelefty/status/1278969777831079937"
            },
            {
              "id": 246,
              "date_text": "July 3rd",
              "text": "Local and Federal Police fire on protesters, shove journalist",
              "tags_str": "Soft, Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://mobile.twitter.com/KohzKah/status/1278944647151104000",
              "Link2": "https://mobile.twitter.com/Johnnthelefty/status/1278969777831079937"
            },
            {
              "id": 247,
              "date_text": "July 3rd",
              "text": "Local and Federal Police fire on protesters, shove journalist",
              "tags_str": "Soft, Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://mobile.twitter.com/KohzKah/status/1278944647151104000",
              "Link2": "https://mobile.twitter.com/Johnnthelefty/status/1278969777831079937"
            },
            {
              "id": 248,
              "date_text": "July 3rd",
              "text": "Police declare riot, fire pepper balls and tear gas",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://mobile.twitter.com/LindseyPSmith7/status/1278947317740040192",
              "Link2": "https://mobile.twitter.com/LindseyPSmith7/status/1278949523939713024"
            },
            {
              "id": 249,
              "date_text": "July 3rd",
              "text": "Police declare riot, fire pepper balls and tear gas",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://mobile.twitter.com/LindseyPSmith7/status/1278947317740040192",
              "Link2": "https://mobile.twitter.com/LindseyPSmith7/status/1278949523939713024"
            },
            {
              "id": 250,
              "date_text": "July 3rd",
              "text": "Police declare riot, fire pepper balls and tear gas",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://mobile.twitter.com/LindseyPSmith7/status/1278947317740040192",
              "Link2": "https://mobile.twitter.com/LindseyPSmith7/status/1278949523939713024"
            },
            {
              "id": 251,
              "date_text": "July 4th",
              "text": "Police slash tires of snack van",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrOlmos/status/1279676776310923266",
              "Link2": "https://twitter.com/AbeReviate/status/1279666998809485312"
            },
            {
              "id": 252,
              "date_text": "July 4th",
              "text": "Police slash tires of snack van",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrOlmos/status/1279676776310923266",
              "Link2": "https://twitter.com/AbeReviate/status/1279666998809485312"
            },
            {
              "id": 253,
              "date_text": "July 4th",
              "text": "Police slash tires of snack van",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrOlmos/status/1279676776310923266",
              "Link2": "https://twitter.com/AbeReviate/status/1279666998809485312"
            },
            {
              "id": 254,
              "date_text": "July 5th",
              "text": "Police tear gas protesters from within Justice Center",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/PredatorFiles/status/1279734884852891648",
              "Link2": ""
            },
            {
              "id": 255,
              "date_text": "July 5th",
              "text": "Police tear gas protesters from within Justice Center",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/PredatorFiles/status/1279734884852891648",
              "Link2": ""
            },
            {
              "id": 256,
              "date_text": "July 5th",
              "text": "Police tear gas protesters from within Justice Center",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/PredatorFiles/status/1279734884852891648",
              "Link2": ""
            },
            {
              "id": 257,
              "date_text": "July 5th",
              "text": "Unknown officers tear gas and shoot at protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/PredatorFiles/status/1279728186197065730",
              "Link2": ""
            },
            {
              "id": 258,
              "date_text": "July 5th",
              "text": "Unknown officers tear gas and shoot at protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/PredatorFiles/status/1279728186197065730",
              "Link2": ""
            },
            {
              "id": 259,
              "date_text": "July 5th",
              "text": "Unknown officers tear gas and shoot at protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/PredatorFiles/status/1279728186197065730",
              "Link2": ""
            },
            {
              "id": 260,
              "date_text": "July 5th",
              "text": "Violent arrests made by police",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/1misanthrophile/status/1279909934449061888",
              "Link2": ""
            },
            {
              "id": 261,
              "date_text": "July 5th",
              "text": "Violent arrests made by police",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/1misanthrophile/status/1279909934449061888",
              "Link2": ""
            },
            {
              "id": 262,
              "date_text": "July 5th",
              "text": "Violent arrests made by police",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/1misanthrophile/status/1279909934449061888",
              "Link2": ""
            },
            {
              "id": 263,
              "date_text": "July 5th",
              "text": "Police tear gas and shove protesters",
              "tags_str": "Soft, Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrOlmos/status/1279682872484347905",
              "Link2": ""
            },
            {
              "id": 264,
              "date_text": "July 5th",
              "text": "Police tear gas and shove protesters",
              "tags_str": "Soft, Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrOlmos/status/1279682872484347905",
              "Link2": ""
            },
            {
              "id": 265,
              "date_text": "July 5th",
              "text": "Police tear gas and shove protesters",
              "tags_str": "Soft, Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrOlmos/status/1279682872484347905",
              "Link2": ""
            },
            {
              "id": 266,
              "date_text": "July 5th",
              "text": "Badgeless federal agents deployed to Portland; tear gas protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/StacyinSF/status/1280019912790953991",
              "Link2": "https://twitter.com/tuckwoodstock/status/1280008752502980609"
            },
            {
              "id": 267,
              "date_text": "July 5th",
              "text": "Badgeless federal agents deployed to Portland; tear gas protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/StacyinSF/status/1280019912790953991",
              "Link2": "https://twitter.com/tuckwoodstock/status/1280008752502980609"
            },
            {
              "id": 268,
              "date_text": "July 5th",
              "text": "Badgeless federal agents deployed to Portland; tear gas protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/StacyinSF/status/1280019912790953991",
              "Link2": "https://twitter.com/tuckwoodstock/status/1280008752502980609"
            },
            {
              "id": 269,
              "date_text": "July 6th",
              "text": "Confirmed report of U.S. Federal agents kneeling on protester",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/greg_doucette/status/1280217831079018496",
              "Link2": ""
            },
            {
              "id": 270,
              "date_text": "July 6th",
              "text": "Confirmed report of U.S. Federal agents kneeling on protester",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/greg_doucette/status/1280217831079018496",
              "Link2": ""
            },
            {
              "id": 271,
              "date_text": "July 6th",
              "text": "Confirmed report of U.S. Federal agents kneeling on protester",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/greg_doucette/status/1280217831079018496",
              "Link2": ""
            },
            {
              "id": 272,
              "date_text": "July 8th",
              "text": "Federal officers raid vigil for slain protester",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/hungrybowtie/status/1280758410602938370",
              "Link2": "https://twitter.com/hungrybowtie/status/1280759078826815489"
            },
            {
              "id": 273,
              "date_text": "July 8th",
              "text": "Federal officers raid vigil for slain protester",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/hungrybowtie/status/1280758410602938370",
              "Link2": "https://twitter.com/hungrybowtie/status/1280759078826815489"
            },
            {
              "id": 274,
              "date_text": "July 8th",
              "text": "Federal officers raid vigil for slain protester",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/hungrybowtie/status/1280758410602938370",
              "Link2": "https://twitter.com/hungrybowtie/status/1280759078826815489"
            },
            {
              "id": 275,
              "date_text": "July 11th",
              "text": "Federal agents fire tear gas during shift change",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/defendpdx/status/1281868957713141760",
              "Link2": "https://twitter.com/defendpdx/status/1281866496793346048"
            },
            {
              "id": 276,
              "date_text": "July 11th",
              "text": "Federal agents fire tear gas during shift change",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/defendpdx/status/1281868957713141760",
              "Link2": "https://twitter.com/defendpdx/status/1281866496793346048"
            },
            {
              "id": 277,
              "date_text": "July 11th",
              "text": "Federal agents fire tear gas during shift change",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/defendpdx/status/1281868957713141760",
              "Link2": "https://twitter.com/defendpdx/status/1281866496793346048"
            },
            {
              "id": 278,
              "date_text": "July 11th",
              "text": "LRAD used against protesters",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/hungrybowtie/status/1282193909716672512",
              "Link2": "https://twitter.com/GenResistance/status/1282200096482791430"
            },
            {
              "id": 279,
              "date_text": "July 11th",
              "text": "LRAD used against protesters",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/hungrybowtie/status/1282193909716672512",
              "Link2": "https://twitter.com/GenResistance/status/1282200096482791430"
            },
            {
              "id": 280,
              "date_text": "July 11th",
              "text": "LRAD used against protesters",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/hungrybowtie/status/1282193909716672512",
              "Link2": "https://twitter.com/GenResistance/status/1282200096482791430"
            },
            {
              "id": 281,
              "date_text": "July 11th",
              "text": "Federal agent shoves protester",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/whittlingbabe/status/1282372585984978944",
              "Link2": ""
            },
            {
              "id": 282,
              "date_text": "July 11th",
              "text": "Federal agent shoves protester",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/whittlingbabe/status/1282372585984978944",
              "Link2": ""
            },
            {
              "id": 283,
              "date_text": "July 11th",
              "text": "Federal agent shoves protester",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/whittlingbabe/status/1282372585984978944",
              "Link2": ""
            },
            {
              "id": 284,
              "date_text": "July 11th",
              "text": "Journalist shot by federal officers",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MathieuLRolland/status/1283549043864428544",
              "Link2": "https://twitter.com/MathieuLRolland/status/1283549985905074176"
            },
            {
              "id": 285,
              "date_text": "July 11th",
              "text": "Journalist shot by federal officers",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MathieuLRolland/status/1283549043864428544",
              "Link2": "https://twitter.com/MathieuLRolland/status/1283549985905074176"
            },
            {
              "id": 286,
              "date_text": "July 11th",
              "text": "Journalist shot by federal officers",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MathieuLRolland/status/1283549043864428544",
              "Link2": "https://twitter.com/MathieuLRolland/status/1283549985905074176"
            },
            {
              "id": 287,
              "date_text": "July 12th",
              "text": "Police fire tear gas and riot rounds at peaceful protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/hungrybowtie/status/1282217421739225088",
              "Link2": "https://twitter.com/KohzKah/status/1282218847018168321"
            },
            {
              "id": 288,
              "date_text": "July 12th",
              "text": "Police fire tear gas and riot rounds at peaceful protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/hungrybowtie/status/1282217421739225088",
              "Link2": "https://twitter.com/KohzKah/status/1282218847018168321"
            },
            {
              "id": 289,
              "date_text": "July 12th",
              "text": "Police fire tear gas and riot rounds at peaceful protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/hungrybowtie/status/1282217421739225088",
              "Link2": "https://twitter.com/KohzKah/status/1282218847018168321"
            },
            {
              "id": 290,
              "date_text": "July 12th",
              "text": "Police and federal agents chase down protester writing in chalk",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/R3volutionDaddy/status/1282341037554331649",
              "Link2": ""
            },
            {
              "id": 291,
              "date_text": "July 12th",
              "text": "Police and federal agents chase down protester writing in chalk",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/R3volutionDaddy/status/1282341037554331649",
              "Link2": ""
            },
            {
              "id": 292,
              "date_text": "July 12th",
              "text": "Police and federal agents chase down protester writing in chalk",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/R3volutionDaddy/status/1282341037554331649",
              "Link2": ""
            },
            {
              "id": 293,
              "date_text": "July 12th",
              "text": "Police strike journalist with tear gas canister",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/hungrybowtie/status/1282218575093096448",
              "Link2": ""
            },
            {
              "id": 294,
              "date_text": "July 12th",
              "text": "Police strike journalist with tear gas canister",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/hungrybowtie/status/1282218575093096448",
              "Link2": ""
            },
            {
              "id": 295,
              "date_text": "July 12th",
              "text": "Police strike journalist with tear gas canister",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/hungrybowtie/status/1282218575093096448",
              "Link2": ""
            },
            {
              "id": 296,
              "date_text": "July 12th",
              "text": "Police and federal agents tear gas protesters again",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/hungrybowtie/status/1282227070194446336",
              "Link2": "https://twitter.com/hungrybowtie/status/1282227456204607488"
            },
            {
              "id": 297,
              "date_text": "July 12th",
              "text": "Police and federal agents tear gas protesters again",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/hungrybowtie/status/1282227070194446336",
              "Link2": "https://twitter.com/hungrybowtie/status/1282227456204607488"
            },
            {
              "id": 298,
              "date_text": "July 12th",
              "text": "Police and federal agents tear gas protesters again",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/hungrybowtie/status/1282227070194446336",
              "Link2": "https://twitter.com/hungrybowtie/status/1282227456204607488"
            },
            {
              "id": 299,
              "date_text": "July 12th",
              "text": "Police and federal agents tackle, arrest, and tear gas protesters",
              "tags_str": "Soft, Hard, Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/hungrybowtie/status/1282246957256212481",
              "Link2": "https://twitter.com/hungrybowtie/status/1282241815022714880"
            },
            {
              "id": 300,
              "date_text": "July 12th",
              "text": "Police and federal agents tackle, arrest, and tear gas protesters",
              "tags_str": "Soft, Hard, Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/hungrybowtie/status/1282246957256212481",
              "Link2": "https://twitter.com/hungrybowtie/status/1282241815022714880"
            },
            {
              "id": 301,
              "date_text": "July 12th",
              "text": "Police and federal agents tackle, arrest, and tear gas protesters",
              "tags_str": "Soft, Hard, Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/hungrybowtie/status/1282246957256212481",
              "Link2": "https://twitter.com/hungrybowtie/status/1282241815022714880"
            },
            {
              "id": 302,
              "date_text": "July 12th",
              "text": "Protester shot in the head",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/zerosum24/status/1282275808413966337",
              "Link2": "https://twitter.com/hungrybowtie/status/1282176328305762307"
            },
            {
              "id": 303,
              "date_text": "July 12th",
              "text": "Protester shot in the head",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/zerosum24/status/1282275808413966337",
              "Link2": "https://twitter.com/hungrybowtie/status/1282176328305762307"
            },
            {
              "id": 304,
              "date_text": "July 12th",
              "text": "Protester shot in the head",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/zerosum24/status/1282275808413966337",
              "Link2": "https://twitter.com/hungrybowtie/status/1282176328305762307"
            },
            {
              "id": 305,
              "date_text": "July 12th",
              "text": "Photojournalist shows wounds from less-lethal rounds",
              "tags_str": "Presence",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/greg_doucette/status/1282338521802563584",
              "Link2": ""
            },
            {
              "id": 306,
              "date_text": "July 12th",
              "text": "Photojournalist shows wounds from less-lethal rounds",
              "tags_str": "Presence",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/greg_doucette/status/1282338521802563584",
              "Link2": ""
            },
            {
              "id": 307,
              "date_text": "July 12th",
              "text": "Photojournalist shows wounds from less-lethal rounds",
              "tags_str": "Presence",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/greg_doucette/status/1282338521802563584",
              "Link2": ""
            },
            {
              "id": 308,
              "date_text": "July 12th",
              "text": "Protest medics shoved and struck by batons after trying to give aid to protester",
              "tags_str": "Soft, Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/hpvxlp/federal_officers_in_portland_or_attacking_medics/",
              "Link2": ""
            },
            {
              "id": 309,
              "date_text": "July 12th",
              "text": "Protest medics shoved and struck by batons after trying to give aid to protester",
              "tags_str": "Soft, Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/hpvxlp/federal_officers_in_portland_or_attacking_medics/",
              "Link2": ""
            },
            {
              "id": 310,
              "date_text": "July 12th",
              "text": "Protest medics shoved and struck by batons after trying to give aid to protester",
              "tags_str": "Soft, Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/hpvxlp/federal_officers_in_portland_or_attacking_medics/",
              "Link2": ""
            },
            {
              "id": 311,
              "date_text": "July 12th",
              "text": "Federal officers fire directly at media",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/stoggrd/status/1282517318468165632",
              "Link2": "https://twitter.com/MikeAdamsUT/status/1282530270860636161"
            },
            {
              "id": 312,
              "date_text": "July 12th",
              "text": "Federal officers fire directly at media",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/stoggrd/status/1282517318468165632",
              "Link2": "https://twitter.com/MikeAdamsUT/status/1282530270860636161"
            },
            {
              "id": 313,
              "date_text": "July 12th",
              "text": "Federal officers fire directly at media",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/stoggrd/status/1282517318468165632",
              "Link2": "https://twitter.com/MikeAdamsUT/status/1282530270860636161"
            },
            {
              "id": 314,
              "date_text": "July 12th",
              "text": "Police slap phone out of protester's hand",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://clips.twitch.tv/NimbleGrossTildeSeemsGood",
              "Link2": ""
            },
            {
              "id": 315,
              "date_text": "July 12th",
              "text": "Police slap phone out of protester's hand",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://clips.twitch.tv/NimbleGrossTildeSeemsGood",
              "Link2": ""
            },
            {
              "id": 316,
              "date_text": "July 12th",
              "text": "Police slap phone out of protester's hand",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://clips.twitch.tv/NimbleGrossTildeSeemsGood",
              "Link2": ""
            },
            {
              "id": 317,
              "date_text": "July 13th",
              "text": "Police tear gas protesters in residential area",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/PDocumentarians/status/1282943193428811777",
              "Link2": "https://twitter.com/greg_doucette/status/1283029721077424130"
            },
            {
              "id": 318,
              "date_text": "July 13th",
              "text": "Police tear gas protesters in residential area",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/PDocumentarians/status/1282943193428811777",
              "Link2": "https://twitter.com/greg_doucette/status/1283029721077424130"
            },
            {
              "id": 319,
              "date_text": "July 13th",
              "text": "Police tear gas protesters in residential area",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/PDocumentarians/status/1282943193428811777",
              "Link2": "https://twitter.com/greg_doucette/status/1283029721077424130"
            },
            {
              "id": 320,
              "date_text": "July 13th",
              "text": "Police pepper-spray and kneel on protesters",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/PDocumentarians/status/1282946442089205761",
              "Link2": ""
            },
            {
              "id": 321,
              "date_text": "July 13th",
              "text": "Police pepper-spray and kneel on protesters",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/PDocumentarians/status/1282946442089205761",
              "Link2": ""
            },
            {
              "id": 322,
              "date_text": "July 13th",
              "text": "Police pepper-spray and kneel on protesters",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/PDocumentarians/status/1282946442089205761",
              "Link2": ""
            },
            {
              "id": 323,
              "date_text": "July 14th",
              "text": "Police officer rips off protester's mask and pepper sprays them",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/safePDXprotest/status/1283286011942809601",
              "Link2": ""
            },
            {
              "id": 324,
              "date_text": "July 14th",
              "text": "Police officer rips off protester's mask and pepper sprays them",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/safePDXprotest/status/1283286011942809601",
              "Link2": ""
            },
            {
              "id": 325,
              "date_text": "July 14th",
              "text": "Police officer rips off protester's mask and pepper sprays them",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/safePDXprotest/status/1283286011942809601",
              "Link2": ""
            },
            {
              "id": 326,
              "date_text": "July 14th",
              "text": "Police pepper spray protesters with hands up",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/45thabsurdist/status/1282981954279731200",
              "Link2": ""
            },
            {
              "id": 327,
              "date_text": "July 14th",
              "text": "Police pepper spray protesters with hands up",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/45thabsurdist/status/1282981954279731200",
              "Link2": ""
            },
            {
              "id": 328,
              "date_text": "July 14th",
              "text": "Police pepper spray protesters with hands up",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/45thabsurdist/status/1282981954279731200",
              "Link2": ""
            },
            {
              "id": 329,
              "date_text": "July 15th",
              "text": "Federal agents use explosive munitions to clear protesters",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/PDocumentarians/status/1283363463142666240",
              "Link2": "https://twitter.com/PDocumentarians/status/1283364835909005314"
            },
            {
              "id": 330,
              "date_text": "July 15th",
              "text": "Federal agents use explosive munitions to clear protesters",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/PDocumentarians/status/1283363463142666240",
              "Link2": "https://twitter.com/PDocumentarians/status/1283364835909005314"
            },
            {
              "id": 331,
              "date_text": "July 15th",
              "text": "Federal agents use explosive munitions to clear protesters",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/PDocumentarians/status/1283363463142666240",
              "Link2": "https://twitter.com/PDocumentarians/status/1283364835909005314"
            },
            {
              "id": 332,
              "date_text": "July 15th",
              "text": "Federal agents arrest protester without identifying themselves or stating charges",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/matcha_chai/status/1283328232033411072",
              "Link2": "https://twitter.com/sparrowmedia/status/1283605418883899397"
            },
            {
              "id": 333,
              "date_text": "July 15th",
              "text": "Federal agents arrest protester without identifying themselves or stating charges",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/matcha_chai/status/1283328232033411072",
              "Link2": "https://twitter.com/sparrowmedia/status/1283605418883899397"
            },
            {
              "id": 334,
              "date_text": "July 15th",
              "text": "Federal agents arrest protester without identifying themselves or stating charges",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/matcha_chai/status/1283328232033411072",
              "Link2": "https://twitter.com/sparrowmedia/status/1283605418883899397"
            },
            {
              "id": 335,
              "date_text": "July 15th",
              "text": "Officer leaving Justice Center shoves protester and threatens with gun",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://clips.twitch.tv/CooperativeFlirtyLouseTriHard",
              "Link2": "https://www.reddit.com/r/2020PoliceBrutality/comments/hsgfyz/plane_clothes_cop_pulls_gun_on_protesters_in/"
            },
            {
              "id": 336,
              "date_text": "July 15th",
              "text": "Officer leaving Justice Center shoves protester and threatens with gun",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://clips.twitch.tv/CooperativeFlirtyLouseTriHard",
              "Link2": "https://www.reddit.com/r/2020PoliceBrutality/comments/hsgfyz/plane_clothes_cop_pulls_gun_on_protesters_in/"
            },
            {
              "id": 337,
              "date_text": "July 15th",
              "text": "Officer leaving Justice Center shoves protester and threatens with gun",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://clips.twitch.tv/CooperativeFlirtyLouseTriHard",
              "Link2": "https://www.reddit.com/r/2020PoliceBrutality/comments/hsgfyz/plane_clothes_cop_pulls_gun_on_protesters_in/"
            },
            {
              "id": 338,
              "date_text": "July 16th",
              "text": "Police tackle protester off bike and into lightpole",
              "tags_str": "Hard",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/DanMcKATU/status/1283748895600721920",
              "Link2": "https://twitter.com/DanMcKATU/status/1283822343081431040"
            },
            {
              "id": 339,
              "date_text": "July 16th",
              "text": "Police tackle protester off bike and into lightpole",
              "tags_str": "Hard",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/DanMcKATU/status/1283748895600721920",
              "Link2": "https://twitter.com/DanMcKATU/status/1283822343081431040"
            },
            {
              "id": 340,
              "date_text": "July 16th",
              "text": "Police tackle protester off bike and into lightpole",
              "tags_str": "Hard",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/DanMcKATU/status/1283748895600721920",
              "Link2": "https://twitter.com/DanMcKATU/status/1283822343081431040"
            },
            {
              "id": 341,
              "date_text": "July 16th",
              "text": "Police and Federal Agents deploy tear gas, pepper balls and flashbangs in half hour push along 3rd Avenue",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/lorenajw_x/status/1284019566864035840",
              "Link2": "https://twitter.com/lorenajw_x/status/1284022090350227456"
            },
            {
              "id": 342,
              "date_text": "July 16th",
              "text": "Police and Federal Agents deploy tear gas, pepper balls and flashbangs in half hour push along 3rd Avenue",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/lorenajw_x/status/1284019566864035840",
              "Link2": "https://twitter.com/lorenajw_x/status/1284022090350227456"
            },
            {
              "id": 343,
              "date_text": "July 16th",
              "text": "Police and Federal Agents deploy tear gas, pepper balls and flashbangs in half hour push along 3rd Avenue",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/lorenajw_x/status/1284019566864035840",
              "Link2": "https://twitter.com/lorenajw_x/status/1284022090350227456"
            },
            {
              "id": 344,
              "date_text": "July 16th",
              "text": "Protester shows wound left by less-lethal round",
              "tags_str": "Presence",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrOlmos/status/1284020482556047360",
              "Link2": "https://twitter.com/tuckwoodstock/status/1284017153448927233"
            },
            {
              "id": 345,
              "date_text": "July 16th",
              "text": "Protester shows wound left by less-lethal round",
              "tags_str": "Presence",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrOlmos/status/1284020482556047360",
              "Link2": "https://twitter.com/tuckwoodstock/status/1284017153448927233"
            },
            {
              "id": 346,
              "date_text": "July 16th",
              "text": "Protester shows wound left by less-lethal round",
              "tags_str": "Presence",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrOlmos/status/1284020482556047360",
              "Link2": "https://twitter.com/tuckwoodstock/status/1284017153448927233"
            },
            {
              "id": 347,
              "date_text": "July 16th",
              "text": "Bystander recounts experience being tear-gassed while walking home",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrOlmos/status/1284025326612254720",
              "Link2": ""
            },
            {
              "id": 348,
              "date_text": "July 16th",
              "text": "Bystander recounts experience being tear-gassed while walking home",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrOlmos/status/1284025326612254720",
              "Link2": ""
            },
            {
              "id": 349,
              "date_text": "July 16th",
              "text": "Bystander recounts experience being tear-gassed while walking home",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrOlmos/status/1284025326612254720",
              "Link2": ""
            },
            {
              "id": 350,
              "date_text": "July 16th",
              "text": "Protester and reporter struck by impact munitions",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrOlmos/status/1284017462162276353",
              "Link2": "https://twitter.com/MrOlmos/status/1284017462162276353"
            },
            {
              "id": 351,
              "date_text": "July 16th",
              "text": "Protester and reporter struck by impact munitions",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrOlmos/status/1284017462162276353",
              "Link2": "https://twitter.com/MrOlmos/status/1284017462162276353"
            },
            {
              "id": 352,
              "date_text": "July 16th",
              "text": "Protester and reporter struck by impact munitions",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrOlmos/status/1284017462162276353",
              "Link2": "https://twitter.com/MrOlmos/status/1284017462162276353"
            },
            {
              "id": 353,
              "date_text": "July 16th",
              "text": "Police charge, strike and arrest protesters",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/Or_St14/status/1284015646880104449",
              "Link2": ""
            },
            {
              "id": 354,
              "date_text": "July 16th",
              "text": "Police charge, strike and arrest protesters",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/Or_St14/status/1284015646880104449",
              "Link2": ""
            },
            {
              "id": 355,
              "date_text": "July 16th",
              "text": "Police charge, strike and arrest protesters",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/Or_St14/status/1284015646880104449",
              "Link2": ""
            },
            {
              "id": 356,
              "date_text": "July 16th",
              "text": "Medic shows rubber bullet wound",
              "tags_str": "Presence, Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/peyhubbard/status/1284784447225618435",
              "Link2": ""
            },
            {
              "id": 357,
              "date_text": "July 16th",
              "text": "Medic shows rubber bullet wound",
              "tags_str": "Presence, Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/peyhubbard/status/1284784447225618435",
              "Link2": ""
            },
            {
              "id": 358,
              "date_text": "July 16th",
              "text": "Medic shows rubber bullet wound",
              "tags_str": "Presence, Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/peyhubbard/status/1284784447225618435",
              "Link2": ""
            },
            {
              "id": 359,
              "date_text": "July 17th",
              "text": "Police fire second round of tear gas at protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrOlmos/status/1284054261899247617",
              "Link2": "https://twitter.com/MrOlmos/status/1284057651358228480"
            },
            {
              "id": 360,
              "date_text": "July 17th",
              "text": "Police fire second round of tear gas at protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrOlmos/status/1284054261899247617",
              "Link2": "https://twitter.com/MrOlmos/status/1284057651358228480"
            },
            {
              "id": 361,
              "date_text": "July 17th",
              "text": "Police fire second round of tear gas at protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrOlmos/status/1284054261899247617",
              "Link2": "https://twitter.com/MrOlmos/status/1284057651358228480"
            },
            {
              "id": 362,
              "date_text": "July 17th",
              "text": "Police shove protesters down street",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/GriffinMalone6/status/1284032499832651778",
              "Link2": "https://twitter.com/GriffinMalone6/status/1284033524043878403"
            },
            {
              "id": 363,
              "date_text": "July 17th",
              "text": "Police shove protesters down street",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/GriffinMalone6/status/1284032499832651778",
              "Link2": "https://twitter.com/GriffinMalone6/status/1284033524043878403"
            },
            {
              "id": 364,
              "date_text": "July 17th",
              "text": "Police shove protesters down street",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/GriffinMalone6/status/1284032499832651778",
              "Link2": "https://twitter.com/GriffinMalone6/status/1284033524043878403"
            },
            {
              "id": 365,
              "date_text": "July 17th",
              "text": "Police break windows of car, then ram car when it reverses",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/PDXRosieRiddle/status/1284020202145902593",
              "Link2": "https://twitter.com/PDXRosieRiddle/status/1284020202145902593"
            },
            {
              "id": 366,
              "date_text": "July 17th",
              "text": "Police break windows of car, then ram car when it reverses",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/PDXRosieRiddle/status/1284020202145902593",
              "Link2": "https://twitter.com/PDXRosieRiddle/status/1284020202145902593"
            },
            {
              "id": 367,
              "date_text": "July 17th",
              "text": "Police break windows of car, then ram car when it reverses",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/PDXRosieRiddle/status/1284020202145902593",
              "Link2": "https://twitter.com/PDXRosieRiddle/status/1284020202145902593"
            },
            {
              "id": 368,
              "date_text": "July 17th",
              "text": "Federal officers tear gas protesters outside Justice Center",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/alex_zee/status/1284357333993152513",
              "Link2": ""
            },
            {
              "id": 369,
              "date_text": "July 17th",
              "text": "Federal officers tear gas protesters outside Justice Center",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/alex_zee/status/1284357333993152513",
              "Link2": ""
            },
            {
              "id": 370,
              "date_text": "July 17th",
              "text": "Federal officers tear gas protesters outside Justice Center",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/alex_zee/status/1284357333993152513",
              "Link2": ""
            },
            {
              "id": 371,
              "date_text": " July 17th",
              "text": "Police and federal officers arrest protester writing in chalk",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/JuniperLSimonis/status/1284575697168560129",
              "Link2": "https://twitter.com/JuniperLSimonis/status/1284574919934660608"
            },
            {
              "id": 372,
              "date_text": " July 17th",
              "text": "Police and federal officers arrest protester writing in chalk",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/JuniperLSimonis/status/1284575697168560129",
              "Link2": "https://twitter.com/JuniperLSimonis/status/1284574919934660608"
            },
            {
              "id": 373,
              "date_text": " July 17th",
              "text": "Police and federal officers arrest protester writing in chalk",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/JuniperLSimonis/status/1284575697168560129",
              "Link2": "https://twitter.com/JuniperLSimonis/status/1284574919934660608"
            },
            {
              "id": 374,
              "date_text": "July 18th",
              "text": "Police charge at and trample protesters",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/alex_zee/status/1284357164396457984",
              "Link2": "https://twitter.com/alex_zee/status/1284357260374753280"
            },
            {
              "id": 375,
              "date_text": "July 18th",
              "text": "Police charge at and trample protesters",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/alex_zee/status/1284357164396457984",
              "Link2": "https://twitter.com/alex_zee/status/1284357260374753280"
            },
            {
              "id": 376,
              "date_text": "July 18th",
              "text": "Police charge at and trample protesters",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/alex_zee/status/1284357164396457984",
              "Link2": "https://twitter.com/alex_zee/status/1284357260374753280"
            },
            {
              "id": 377,
              "date_text": "July 18th",
              "text": "Police repeatedly shove protester",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/GriffinMalone6/status/1284430958142210147",
              "Link2": ""
            },
            {
              "id": 378,
              "date_text": "July 18th",
              "text": "Police repeatedly shove protester",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/GriffinMalone6/status/1284430958142210147",
              "Link2": ""
            },
            {
              "id": 379,
              "date_text": "July 18th",
              "text": "Police repeatedly shove protester",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/GriffinMalone6/status/1284430958142210147",
              "Link2": ""
            },
            {
              "id": 380,
              "date_text": "July 18th",
              "text": "Federal agents fire tear gas and impact munitions at crowd",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/alex_zee/status/1284411261719994368",
              "Link2": "https://twitter.com/alex_zee/status/1284411261719994368"
            },
            {
              "id": 381,
              "date_text": "July 18th",
              "text": "Federal agents fire tear gas and impact munitions at crowd",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/alex_zee/status/1284411261719994368",
              "Link2": "https://twitter.com/alex_zee/status/1284411261719994368"
            },
            {
              "id": 382,
              "date_text": "July 18th",
              "text": "Federal agents fire tear gas and impact munitions at crowd",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/alex_zee/status/1284411261719994368",
              "Link2": "https://twitter.com/alex_zee/status/1284411261719994368"
            },
            {
              "id": 383,
              "date_text": "July 18th",
              "text": "Police chase, shove and punch protesters",
              "tags_str": "Soft, Hard",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/GriffinMalone6/status/1284430729477099520",
              "Link2": ""
            },
            {
              "id": 384,
              "date_text": "July 18th",
              "text": "Police chase, shove and punch protesters",
              "tags_str": "Soft, Hard",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/GriffinMalone6/status/1284430729477099520",
              "Link2": ""
            },
            {
              "id": 385,
              "date_text": "July 18th",
              "text": "Police chase, shove and punch protesters",
              "tags_str": "Soft, Hard",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/GriffinMalone6/status/1284430729477099520",
              "Link2": ""
            },
            {
              "id": 386,
              "date_text": "July 18th",
              "text": "Police gas and shoot protesters early in the morning",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/GriffinMalone6/status/1284445097329717248",
              "Link2": ""
            },
            {
              "id": 387,
              "date_text": "July 18th",
              "text": "Police gas and shoot protesters early in the morning",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/GriffinMalone6/status/1284445097329717248",
              "Link2": ""
            },
            {
              "id": 388,
              "date_text": "July 18th",
              "text": "Police gas and shoot protesters early in the morning",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/GriffinMalone6/status/1284445097329717248",
              "Link2": ""
            },
            {
              "id": 389,
              "date_text": "July 18th",
              "text": "Police shove protesters obeying directions",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/PDocumentarians/status/1284420156760834050",
              "Link2": ""
            },
            {
              "id": 390,
              "date_text": "July 18th",
              "text": "Police shove protesters obeying directions",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/PDocumentarians/status/1284420156760834050",
              "Link2": ""
            },
            {
              "id": 391,
              "date_text": "July 18th",
              "text": "Police shove protesters obeying directions",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/PDocumentarians/status/1284420156760834050",
              "Link2": ""
            },
            {
              "id": 392,
              "date_text": "July 18th",
              "text": "Police and federal agents fire impact munitions at crowd",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/Johnnthelefty/status/1284462376624877568",
              "Link2": ""
            },
            {
              "id": 393,
              "date_text": "July 18th",
              "text": "Police and federal agents fire impact munitions at crowd",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/Johnnthelefty/status/1284462376624877568",
              "Link2": ""
            },
            {
              "id": 394,
              "date_text": "July 18th",
              "text": "Police and federal agents fire impact munitions at crowd",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/Johnnthelefty/status/1284462376624877568",
              "Link2": ""
            },
            {
              "id": 395,
              "date_text": "July 18th",
              "text": "Police officer hurls protester to the ground",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/Johnnthelefty/status/1284414146373578752",
              "Link2": ""
            },
            {
              "id": 396,
              "date_text": "July 18th",
              "text": "Police officer hurls protester to the ground",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/Johnnthelefty/status/1284414146373578752",
              "Link2": ""
            },
            {
              "id": 397,
              "date_text": "July 18th",
              "text": "Police officer hurls protester to the ground",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/Johnnthelefty/status/1284414146373578752",
              "Link2": ""
            },
            {
              "id": 398,
              "date_text": "July 18th",
              "text": "Protest struck repeatedly and pepper-sprayed",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/thechadallan/status/1284749219857760256",
              "Link2": "https://twitter.com/greg_doucette/status/1284735073057746944"
            },
            {
              "id": 399,
              "date_text": "July 18th",
              "text": "Protest struck repeatedly and pepper-sprayed",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/thechadallan/status/1284749219857760256",
              "Link2": "https://twitter.com/greg_doucette/status/1284735073057746944"
            },
            {
              "id": 400,
              "date_text": "July 18th",
              "text": "Protest struck repeatedly and pepper-sprayed",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/thechadallan/status/1284749219857760256",
              "Link2": "https://twitter.com/greg_doucette/status/1284735073057746944"
            },
            {
              "id": 401,
              "date_text": "July 18th",
              "text": "Two USNA graduates pepper sprayed",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://www.youtube.com/watch?v=OmAdEp6pAp4",
              "Link2": ""
            },
            {
              "id": 402,
              "date_text": "July 18th",
              "text": "Two USNA graduates pepper sprayed",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://www.youtube.com/watch?v=OmAdEp6pAp4",
              "Link2": ""
            },
            {
              "id": 403,
              "date_text": "July 18th",
              "text": "Two USNA graduates pepper sprayed",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://www.youtube.com/watch?v=OmAdEp6pAp4",
              "Link2": ""
            },
            {
              "id": 404,
              "date_text": "July 18th",
              "text": "Federal officers fire on Moms Against Police Brutality",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/lamestreamtv/status/1284759765156073474",
              "Link2": "https://twitter.com/LindseyPSmith7/status/1284725756539490304"
            },
            {
              "id": 405,
              "date_text": "July 18th",
              "text": "Federal officers fire on Moms Against Police Brutality",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/lamestreamtv/status/1284759765156073474",
              "Link2": "https://twitter.com/LindseyPSmith7/status/1284725756539490304"
            },
            {
              "id": 406,
              "date_text": "July 18th",
              "text": "Federal officers fire on Moms Against Police Brutality",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/lamestreamtv/status/1284759765156073474",
              "Link2": "https://twitter.com/LindseyPSmith7/status/1284725756539490304"
            },
            {
              "id": 407,
              "date_text": "July 18th",
              "text": "Journalist shows wound from impact munition",
              "tags_str": "Presence",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/defendpdx/status/1284410083661582337",
              "Link2": ""
            },
            {
              "id": 408,
              "date_text": "July 18th",
              "text": "Journalist shows wound from impact munition",
              "tags_str": "Presence",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/defendpdx/status/1284410083661582337",
              "Link2": ""
            },
            {
              "id": 409,
              "date_text": "July 18th",
              "text": "Journalist shows wound from impact munition",
              "tags_str": "Presence",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/defendpdx/status/1284410083661582337",
              "Link2": ""
            },
            {
              "id": 410,
              "date_text": "July 18th",
              "text": "Police charge and tear gas protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/tuckwoodstock/status/1284730852404899840",
              "Link2": ""
            },
            {
              "id": 411,
              "date_text": "July 18th",
              "text": "Police charge and tear gas protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/tuckwoodstock/status/1284730852404899840",
              "Link2": ""
            },
            {
              "id": 412,
              "date_text": "July 18th",
              "text": "Police charge and tear gas protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/tuckwoodstock/status/1284730852404899840",
              "Link2": ""
            },
            {
              "id": 413,
              "date_text": "July 18th",
              "text": "Police charge protesters",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/tuckwoodstock/status/1284734198926852097",
              "Link2": ""
            },
            {
              "id": 414,
              "date_text": "July 18th",
              "text": "Police charge protesters",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/tuckwoodstock/status/1284734198926852097",
              "Link2": ""
            },
            {
              "id": 415,
              "date_text": "July 18th",
              "text": "Police charge protesters",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/tuckwoodstock/status/1284734198926852097",
              "Link2": ""
            },
            {
              "id": 416,
              "date_text": "July 18th",
              "text": "Police drop gas out window",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/defendpdx/status/1284382114067017728",
              "Link2": ""
            },
            {
              "id": 417,
              "date_text": "July 18th",
              "text": "Police drop gas out window",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/defendpdx/status/1284382114067017728",
              "Link2": ""
            },
            {
              "id": 418,
              "date_text": "July 18th",
              "text": "Police drop gas out window",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/defendpdx/status/1284382114067017728",
              "Link2": ""
            },
            {
              "id": 419,
              "date_text": "July 18th",
              "text": "Police shoot and gas protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/defendpdx/status/1284356286469955584",
              "Link2": "https://twitter.com/defendpdx/status/1284357202866663425"
            },
            {
              "id": 420,
              "date_text": "July 18th",
              "text": "Police shoot and gas protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/defendpdx/status/1284356286469955584",
              "Link2": "https://twitter.com/defendpdx/status/1284357202866663425"
            },
            {
              "id": 421,
              "date_text": "July 18th",
              "text": "Police shoot and gas protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/defendpdx/status/1284356286469955584",
              "Link2": "https://twitter.com/defendpdx/status/1284357202866663425"
            },
            {
              "id": 422,
              "date_text": "July 18th",
              "text": "Federal officers tear gas protesters outside Justice Center",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/LindseyPSmith7/status/1284726076124524544",
              "Link2": "https://twitter.com/LindseyPSmith7/status/1284726641193652225"
            },
            {
              "id": 423,
              "date_text": "July 18th",
              "text": "Federal officers tear gas protesters outside Justice Center",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/LindseyPSmith7/status/1284726076124524544",
              "Link2": "https://twitter.com/LindseyPSmith7/status/1284726641193652225"
            },
            {
              "id": 424,
              "date_text": "July 18th",
              "text": "Federal officers tear gas protesters outside Justice Center",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/LindseyPSmith7/status/1284726076124524544",
              "Link2": "https://twitter.com/LindseyPSmith7/status/1284726641193652225"
            },
            {
              "id": 425,
              "date_text": "July 18th",
              "text": "Federal officers tear gas protesters outside Justice Center a second time",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/LindseyPSmith7/status/1284729433329332226",
              "Link2": "https://twitter.com/LindseyPSmith7/status/1284733851344834560"
            },
            {
              "id": 426,
              "date_text": "July 18th",
              "text": "Federal officers tear gas protesters outside Justice Center a second time",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/LindseyPSmith7/status/1284729433329332226",
              "Link2": "https://twitter.com/LindseyPSmith7/status/1284733851344834560"
            },
            {
              "id": 427,
              "date_text": "July 18th",
              "text": "Federal officers tear gas protesters outside Justice Center a second time",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/LindseyPSmith7/status/1284729433329332226",
              "Link2": "https://twitter.com/LindseyPSmith7/status/1284733851344834560"
            },
            {
              "id": 428,
              "date_text": "July 18th",
              "text": "Police shove legal observer",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/greg_doucette/status/1284888506486095872",
              "Link2": ""
            },
            {
              "id": 429,
              "date_text": "July 18th",
              "text": "Police shove legal observer",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/greg_doucette/status/1284888506486095872",
              "Link2": ""
            },
            {
              "id": 430,
              "date_text": "July 18th",
              "text": "Police shove legal observer",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/greg_doucette/status/1284888506486095872",
              "Link2": ""
            },
            {
              "id": 431,
              "date_text": "July 19th",
              "text": "Police arrest snack van driver; threaten car behind",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/ekkabeen/status/1284454435473637377",
              "Link2": ""
            },
            {
              "id": 432,
              "date_text": "July 19th",
              "text": "Police arrest snack van driver; threaten car behind",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/ekkabeen/status/1284454435473637377",
              "Link2": ""
            },
            {
              "id": 433,
              "date_text": "July 19th",
              "text": "Police arrest snack van driver; threaten car behind",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/ekkabeen/status/1284454435473637377",
              "Link2": ""
            },
            {
              "id": 434,
              "date_text": "July 19th",
              "text": "Federal agents shoot at protesters behind fence",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/DonovanFarley/status/1285098045235838976",
              "Link2": ""
            },
            {
              "id": 435,
              "date_text": "July 19th",
              "text": "Federal agents shoot at protesters behind fence",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/DonovanFarley/status/1285098045235838976",
              "Link2": ""
            },
            {
              "id": 436,
              "date_text": "July 19th",
              "text": "Federal agents shoot at protesters behind fence",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/DonovanFarley/status/1285098045235838976",
              "Link2": ""
            },
            {
              "id": 437,
              "date_text": "July 19th",
              "text": "Journalist displays wound received",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/DonovanFarley/status/1285106726740480002",
              "Link2": "https://twitter.com/DonovanFarley/status/1285107209085480960"
            },
            {
              "id": 438,
              "date_text": "July 19th",
              "text": "Journalist displays wound received",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/DonovanFarley/status/1285106726740480002",
              "Link2": "https://twitter.com/DonovanFarley/status/1285107209085480960"
            },
            {
              "id": 439,
              "date_text": "July 19th",
              "text": "Journalist displays wound received",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/DonovanFarley/status/1285106726740480002",
              "Link2": "https://twitter.com/DonovanFarley/status/1285107209085480960"
            },
            {
              "id": 440,
              "date_text": "July 19th",
              "text": "Federal agents fire tear gas, impact munitions and flashbangs at protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/hungrybowtie/status/1285107328312766465",
              "Link2": "https://twitter.com/hungrybowtie/status/1285107667917107201"
            },
            {
              "id": 441,
              "date_text": "July 19th",
              "text": "Federal agents fire tear gas, impact munitions and flashbangs at protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/hungrybowtie/status/1285107328312766465",
              "Link2": "https://twitter.com/hungrybowtie/status/1285107667917107201"
            },
            {
              "id": 442,
              "date_text": "July 19th",
              "text": "Federal agents fire tear gas, impact munitions and flashbangs at protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/hungrybowtie/status/1285107328312766465",
              "Link2": "https://twitter.com/hungrybowtie/status/1285107667917107201"
            },
            {
              "id": 443,
              "date_text": "July 20th",
              "text": "Federal agents continue to push protesters",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/Clypian/status/1285110508153012224",
              "Link2": "https://twitter.com/MrOlmos/status/1285111874694987776"
            },
            {
              "id": 444,
              "date_text": "July 20th",
              "text": "Federal agents continue to push protesters",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/Clypian/status/1285110508153012224",
              "Link2": "https://twitter.com/MrOlmos/status/1285111874694987776"
            },
            {
              "id": 445,
              "date_text": "July 20th",
              "text": "Federal agents continue to push protesters",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/Clypian/status/1285110508153012224",
              "Link2": "https://twitter.com/MrOlmos/status/1285111874694987776"
            },
            {
              "id": 446,
              "date_text": "July 20th",
              "text": "Federal officer fire tear gas during retreat, filmer shot in hand",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/PDXAndy_/status/1285111515897421825",
              "Link2": ""
            },
            {
              "id": 447,
              "date_text": "July 20th",
              "text": "Federal officer fire tear gas during retreat, filmer shot in hand",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/PDXAndy_/status/1285111515897421825",
              "Link2": ""
            },
            {
              "id": 448,
              "date_text": "July 20th",
              "text": "Federal officer fire tear gas during retreat, filmer shot in hand",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/PDXAndy_/status/1285111515897421825",
              "Link2": ""
            },
            {
              "id": 449,
              "date_text": "July 20th",
              "text": "Federal officers fire tear gas and pepper balls at protesters",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/SmileItsNathan/status/1285120572779663362",
              "Link2": ""
            },
            {
              "id": 450,
              "date_text": "July 20th",
              "text": "Federal officers fire tear gas and pepper balls at protesters",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/SmileItsNathan/status/1285120572779663362",
              "Link2": ""
            },
            {
              "id": 451,
              "date_text": "July 20th",
              "text": "Federal officers fire tear gas and pepper balls at protesters",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/SmileItsNathan/status/1285120572779663362",
              "Link2": ""
            },
            {
              "id": 452,
              "date_text": "July 20th",
              "text": "Federal officers fire tear gas and impact munitions at protesters; shoot journalist",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/i/broadcasts/1MnxndjVOQXGO",
              "Link2": ""
            },
            {
              "id": 453,
              "date_text": "July 20th",
              "text": "Federal officers fire tear gas and impact munitions at protesters; shoot journalist",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/i/broadcasts/1MnxndjVOQXGO",
              "Link2": ""
            },
            {
              "id": 454,
              "date_text": "July 20th",
              "text": "Federal officers fire tear gas and impact munitions at protesters; shoot journalist",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/i/broadcasts/1MnxndjVOQXGO",
              "Link2": ""
            },
            {
              "id": 455,
              "date_text": "July 20th",
              "text": "Indiscriminate tear gas after protesters light small fire",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/Clypian/status/1285134827990036480",
              "Link2": ""
            },
            {
              "id": 456,
              "date_text": "July 20th",
              "text": "Indiscriminate tear gas after protesters light small fire",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/Clypian/status/1285134827990036480",
              "Link2": ""
            },
            {
              "id": 457,
              "date_text": "July 20th",
              "text": "Indiscriminate tear gas after protesters light small fire",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/Clypian/status/1285134827990036480",
              "Link2": ""
            },
            {
              "id": 458,
              "date_text": "July 20th",
              "text": "Journalist shot in leg",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/greg_doucette/status/1285405004883468294",
              "Link2": "https://twitter.com/SmileItsNathan/status/1285106514374594560"
            },
            {
              "id": 459,
              "date_text": "July 20th",
              "text": "Journalist shot in leg",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/greg_doucette/status/1285405004883468294",
              "Link2": "https://twitter.com/SmileItsNathan/status/1285106514374594560"
            },
            {
              "id": 460,
              "date_text": "July 20th",
              "text": "Journalist shot in leg",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/greg_doucette/status/1285405004883468294",
              "Link2": "https://twitter.com/SmileItsNathan/status/1285106514374594560"
            },
            {
              "id": 461,
              "date_text": "July 20th",
              "text": "Protester shot in head with munition",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/tuckwoodstock/status/1285137479696146442",
              "Link2": ""
            },
            {
              "id": 462,
              "date_text": "July 20th",
              "text": "Protester shot in head with munition",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/tuckwoodstock/status/1285137479696146442",
              "Link2": ""
            },
            {
              "id": 463,
              "date_text": "July 20th",
              "text": "Protester shot in head with munition",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/tuckwoodstock/status/1285137479696146442",
              "Link2": ""
            },
            {
              "id": 464,
              "date_text": "July 21st",
              "text": "Federal officers retaliate to protesters with tear gas, flashbangs and impact munitions",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/ByMikeBaker/status/1285465270685859841",
              "Link2": "https://twitter.com/ByMikeBaker/status/1285477503117561858"
            },
            {
              "id": 465,
              "date_text": "July 21st",
              "text": "Federal officers retaliate to protesters with tear gas, flashbangs and impact munitions",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/ByMikeBaker/status/1285465270685859841",
              "Link2": "https://twitter.com/ByMikeBaker/status/1285477503117561858"
            },
            {
              "id": 466,
              "date_text": "July 21st",
              "text": "Federal officers retaliate to protesters with tear gas, flashbangs and impact munitions",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/ByMikeBaker/status/1285465270685859841",
              "Link2": "https://twitter.com/ByMikeBaker/status/1285477503117561858"
            },
            {
              "id": 467,
              "date_text": "July 21st",
              "text": "Indiscriminate shooting of less-lethal projectiles",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/ByMikeBaker/status/1285485252794699776",
              "Link2": ""
            },
            {
              "id": 468,
              "date_text": "July 21st",
              "text": "Indiscriminate shooting of less-lethal projectiles",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/ByMikeBaker/status/1285485252794699776",
              "Link2": ""
            },
            {
              "id": 469,
              "date_text": "July 21st",
              "text": "Indiscriminate shooting of less-lethal projectiles",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/ByMikeBaker/status/1285485252794699776",
              "Link2": ""
            },
            {
              "id": 470,
              "date_text": "July 21st",
              "text": "Federal officers shoot at reporter",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/defendpdx/status/1285509358806134785",
              "Link2": "https://twitter.com/PDocumentarians/status/1285510200514842627"
            },
            {
              "id": 471,
              "date_text": "July 21st",
              "text": "Federal officers shoot at reporter",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/defendpdx/status/1285509358806134785",
              "Link2": "https://twitter.com/PDocumentarians/status/1285510200514842627"
            },
            {
              "id": 472,
              "date_text": "July 21st",
              "text": "Federal officers shoot at reporter",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/defendpdx/status/1285509358806134785",
              "Link2": "https://twitter.com/PDocumentarians/status/1285510200514842627"
            },
            {
              "id": 473,
              "date_text": "July 21st",
              "text": "Federal officers retaliate to fire and thrown water bottles",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/ByMikeBaker/status/1285509636666175488",
              "Link2": "https://twitter.com/ByMikeBaker/status/1285510986288427008"
            },
            {
              "id": 474,
              "date_text": "July 21st",
              "text": "Federal officers retaliate to fire and thrown water bottles",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/ByMikeBaker/status/1285509636666175488",
              "Link2": "https://twitter.com/ByMikeBaker/status/1285510986288427008"
            },
            {
              "id": 475,
              "date_text": "July 21st",
              "text": "Federal officers retaliate to fire and thrown water bottles",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/ByMikeBaker/status/1285509636666175488",
              "Link2": "https://twitter.com/ByMikeBaker/status/1285510986288427008"
            },
            {
              "id": 476,
              "date_text": "July 21st",
              "text": "Federal officers shove protesters, pepper spray journalist",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/itsmikebivins/status/1285480935098667008",
              "Link2": "https://twitter.com/itsmikebivins/status/1285486725406457856"
            },
            {
              "id": 477,
              "date_text": "July 21st",
              "text": "Federal officers shove protesters, pepper spray journalist",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/itsmikebivins/status/1285480935098667008",
              "Link2": "https://twitter.com/itsmikebivins/status/1285486725406457856"
            },
            {
              "id": 478,
              "date_text": "July 21st",
              "text": "Federal officers shove protesters, pepper spray journalist",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/itsmikebivins/status/1285480935098667008",
              "Link2": "https://twitter.com/itsmikebivins/status/1285486725406457856"
            },
            {
              "id": 479,
              "date_text": "July 21st",
              "text": "Federal officers use tear gas to push protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/GriffinMalone6/status/1285821216280829952",
              "Link2": "https://twitter.com/GriffinMalone6/status/1285822445853700096"
            },
            {
              "id": 480,
              "date_text": "July 21st",
              "text": "Federal officers use tear gas to push protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/GriffinMalone6/status/1285821216280829952",
              "Link2": "https://twitter.com/GriffinMalone6/status/1285822445853700096"
            },
            {
              "id": 481,
              "date_text": "July 21st",
              "text": "Federal officers use tear gas to push protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/GriffinMalone6/status/1285821216280829952",
              "Link2": "https://twitter.com/GriffinMalone6/status/1285822445853700096"
            },
            {
              "id": 482,
              "date_text": "July 21st",
              "text": "Flashbang thrown at press and legal observers",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/GriffinMalone6/status/1285854874500911104",
              "Link2": ""
            },
            {
              "id": 483,
              "date_text": "July 21st",
              "text": "Flashbang thrown at press and legal observers",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/GriffinMalone6/status/1285854874500911104",
              "Link2": ""
            },
            {
              "id": 484,
              "date_text": "July 21st",
              "text": "Flashbang thrown at press and legal observers",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/GriffinMalone6/status/1285854874500911104",
              "Link2": ""
            },
            {
              "id": 485,
              "date_text": "July 21st",
              "text": "Moms Against Police Brutality tear-gassed",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/hungrybowtie/status/1285829230958268417",
              "Link2": "https://twitter.com/hungrybowtie/status/1285828096461922304"
            },
            {
              "id": 486,
              "date_text": "July 21st",
              "text": "Moms Against Police Brutality tear-gassed",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/hungrybowtie/status/1285829230958268417",
              "Link2": "https://twitter.com/hungrybowtie/status/1285828096461922304"
            },
            {
              "id": 487,
              "date_text": "July 21st",
              "text": "Moms Against Police Brutality tear-gassed",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/hungrybowtie/status/1285829230958268417",
              "Link2": "https://twitter.com/hungrybowtie/status/1285828096461922304"
            },
            {
              "id": 488,
              "date_text": "July 21st",
              "text": "Officer destroys individual's flashlight",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/EndSoundtrack/status/1286022905835339776",
              "Link2": ""
            },
            {
              "id": 489,
              "date_text": "July 21st",
              "text": "Officer destroys individual's flashlight",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/EndSoundtrack/status/1286022905835339776",
              "Link2": ""
            },
            {
              "id": 490,
              "date_text": "July 21st",
              "text": "Officer destroys individual's flashlight",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/EndSoundtrack/status/1286022905835339776",
              "Link2": ""
            },
            {
              "id": 491,
              "date_text": "July 21st",
              "text": "Protester bowing on sidewalk is pepper sprayed",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/begoniacloak/status/1285516032459673600",
              "Link2": ""
            },
            {
              "id": 492,
              "date_text": "July 21st",
              "text": "Protester bowing on sidewalk is pepper sprayed",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/begoniacloak/status/1285516032459673600",
              "Link2": ""
            },
            {
              "id": 493,
              "date_text": "July 21st",
              "text": "Protester bowing on sidewalk is pepper sprayed",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/begoniacloak/status/1285516032459673600",
              "Link2": ""
            },
            {
              "id": 494,
              "date_text": "July 21st",
              "text": "History professor shot in head",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://www.facebook.com/557037716/posts/10157448233977717/",
              "Link2": "https://twitter.com/Amy_Siskind/status/1287768253356441601/photo/1"
            },
            {
              "id": 495,
              "date_text": "July 21st",
              "text": "History professor shot in head",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://www.facebook.com/557037716/posts/10157448233977717/",
              "Link2": "https://twitter.com/Amy_Siskind/status/1287768253356441601/photo/1"
            },
            {
              "id": 496,
              "date_text": "July 21st",
              "text": "History professor shot in head",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://www.facebook.com/557037716/posts/10157448233977717/",
              "Link2": "https://twitter.com/Amy_Siskind/status/1287768253356441601/photo/1"
            },
            {
              "id": 497,
              "date_text": "July 22nd",
              "text": "Protester shoved onto tear gas canister, which then explodes",
              "tags_str": "Soft, Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/GriffinMalone6/status/1285848158044483586",
              "Link2": ""
            },
            {
              "id": 498,
              "date_text": "July 22nd",
              "text": "Protester shoved onto tear gas canister, which then explodes",
              "tags_str": "Soft, Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/GriffinMalone6/status/1285848158044483586",
              "Link2": ""
            },
            {
              "id": 499,
              "date_text": "July 22nd",
              "text": "Protester shoved onto tear gas canister, which then explodes",
              "tags_str": "Soft, Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/GriffinMalone6/status/1285848158044483586",
              "Link2": ""
            },
            {
              "id": 500,
              "date_text": "July 22nd",
              "text": "Photographer shoved onto their back",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/PDocumentarians/status/1285868284684890113",
              "Link2": ""
            },
            {
              "id": 501,
              "date_text": "July 22nd",
              "text": "Photographer shoved onto their back",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/PDocumentarians/status/1285868284684890113",
              "Link2": ""
            },
            {
              "id": 502,
              "date_text": "July 22nd",
              "text": "Photographer shoved onto their back",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/PDocumentarians/status/1285868284684890113",
              "Link2": ""
            },
            {
              "id": 503,
              "date_text": "July 22nd",
              "text": "Federal officers use flashbangs, tear gas and impact munitions to push protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/hungrybowtie/status/1285851228732141569",
              "Link2": "https://twitter.com/hungrybowtie/status/1285851909702610944"
            },
            {
              "id": 504,
              "date_text": "July 22nd",
              "text": "Federal officers use flashbangs, tear gas and impact munitions to push protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/hungrybowtie/status/1285851228732141569",
              "Link2": "https://twitter.com/hungrybowtie/status/1285851909702610944"
            },
            {
              "id": 505,
              "date_text": "July 22nd",
              "text": "Federal officers use flashbangs, tear gas and impact munitions to push protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/hungrybowtie/status/1285851228732141569",
              "Link2": "https://twitter.com/hungrybowtie/status/1285851909702610944"
            },
            {
              "id": 506,
              "date_text": "July 22nd",
              "text": "Federal officers use flashbangs, tear gas and impact munitions to push protesters a third time",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/defendpdx/status/1285865757566328832",
              "Link2": "https://twitter.com/defendpdx/status/1285866491275931649"
            },
            {
              "id": 507,
              "date_text": "July 22nd",
              "text": "Federal officers use flashbangs, tear gas and impact munitions to push protesters a third time",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/defendpdx/status/1285865757566328832",
              "Link2": "https://twitter.com/defendpdx/status/1285866491275931649"
            },
            {
              "id": 508,
              "date_text": "July 22nd",
              "text": "Federal officers use flashbangs, tear gas and impact munitions to push protesters a third time",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/defendpdx/status/1285865757566328832",
              "Link2": "https://twitter.com/defendpdx/status/1285866491275931649"
            },
            {
              "id": 509,
              "date_text": "July 22nd",
              "text": "Federal officers make violent arrest",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/LindseyPSmith7/status/1285863778471436288",
              "Link2": ""
            },
            {
              "id": 510,
              "date_text": "July 22nd",
              "text": "Federal officers make violent arrest",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/LindseyPSmith7/status/1285863778471436288",
              "Link2": ""
            },
            {
              "id": 511,
              "date_text": "July 22nd",
              "text": "Federal officers make violent arrest",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/LindseyPSmith7/status/1285863778471436288",
              "Link2": ""
            },
            {
              "id": 512,
              "date_text": "July 22nd",
              "text": "Federal officers remove individuals from their vehicles",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/LindseyPSmith7/status/1285872974847897600",
              "Link2": "https://twitter.com/hungrybowtie/status/1285886001932427265"
            },
            {
              "id": 513,
              "date_text": "July 22nd",
              "text": "Federal officers remove individuals from their vehicles",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/LindseyPSmith7/status/1285872974847897600",
              "Link2": "https://twitter.com/hungrybowtie/status/1285886001932427265"
            },
            {
              "id": 514,
              "date_text": "July 22nd",
              "text": "Federal officers remove individuals from their vehicles",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/LindseyPSmith7/status/1285872974847897600",
              "Link2": "https://twitter.com/hungrybowtie/status/1285886001932427265"
            },
            {
              "id": 515,
              "date_text": "July 22nd",
              "text": "Federal officers shove protesters, chase journalists",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/hungrybowtie/status/1285871044851462144",
              "Link2": "https://twitter.com/45thabsurdist/status/1285861571546066944"
            },
            {
              "id": 516,
              "date_text": "July 22nd",
              "text": "Federal officers shove protesters, chase journalists",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/hungrybowtie/status/1285871044851462144",
              "Link2": "https://twitter.com/45thabsurdist/status/1285861571546066944"
            },
            {
              "id": 517,
              "date_text": "July 22nd",
              "text": "Federal officers shove protesters, chase journalists",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/hungrybowtie/status/1285871044851462144",
              "Link2": "https://twitter.com/45thabsurdist/status/1285861571546066944"
            },
            {
              "id": 518,
              "date_text": "July 22nd",
              "text": "Journalist shot with rubber bullets",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/hungrybowtie/status/1285832629556637696",
              "Link2": "https://twitter.com/hungrybowtie/status/1285833430769360896"
            },
            {
              "id": 519,
              "date_text": "July 22nd",
              "text": "Journalist shot with rubber bullets",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/hungrybowtie/status/1285832629556637696",
              "Link2": "https://twitter.com/hungrybowtie/status/1285833430769360896"
            },
            {
              "id": 520,
              "date_text": "July 22nd",
              "text": "Journalist shot with rubber bullets",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/hungrybowtie/status/1285832629556637696",
              "Link2": "https://twitter.com/hungrybowtie/status/1285833430769360896"
            },
            {
              "id": 521,
              "date_text": "July 22nd",
              "text": "Federal officer tackles two protesters",
              "tags_str": "Hard",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrOlmos/status/1285861227336351744",
              "Link2": ""
            },
            {
              "id": 522,
              "date_text": "July 22nd",
              "text": "Federal officer tackles two protesters",
              "tags_str": "Hard",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrOlmos/status/1285861227336351744",
              "Link2": ""
            },
            {
              "id": 523,
              "date_text": "July 22nd",
              "text": "Federal officer tackles two protesters",
              "tags_str": "Hard",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrOlmos/status/1285861227336351744",
              "Link2": ""
            },
            {
              "id": 524,
              "date_text": "July 22nd",
              "text": "Livestreamer shot with tear gas canister",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://mobile.twitter.com/chefboykhari/status/1285967763878494213",
              "Link2": "https://mobile.twitter.com/chefboykhari/status/1285968225243561984"
            },
            {
              "id": 525,
              "date_text": "July 22nd",
              "text": "Livestreamer shot with tear gas canister",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://mobile.twitter.com/chefboykhari/status/1285967763878494213",
              "Link2": "https://mobile.twitter.com/chefboykhari/status/1285968225243561984"
            },
            {
              "id": 526,
              "date_text": "July 22nd",
              "text": "Livestreamer shot with tear gas canister",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://mobile.twitter.com/chefboykhari/status/1285967763878494213",
              "Link2": "https://mobile.twitter.com/chefboykhari/status/1285968225243561984"
            },
            {
              "id": 527,
              "date_text": "July 22nd",
              "text": "Federal officers use excessive force to push protesters",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/defendpdx/status/1286192680741949442",
              "Link2": "https://twitter.com/defendpdx/status/1286185530812579841"
            },
            {
              "id": 528,
              "date_text": "July 22nd",
              "text": "Federal officers use excessive force to push protesters",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/defendpdx/status/1286192680741949442",
              "Link2": "https://twitter.com/defendpdx/status/1286185530812579841"
            },
            {
              "id": 529,
              "date_text": "July 22nd",
              "text": "Federal officers use excessive force to push protesters",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/defendpdx/status/1286192680741949442",
              "Link2": "https://twitter.com/defendpdx/status/1286185530812579841"
            },
            {
              "id": 530,
              "date_text": "July 22nd",
              "text": "Portland mayor caught in tear gas",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrOlmos/status/1286194373739155456",
              "Link2": "https://twitter.com/MrOlmos/status/1286194652513673216"
            },
            {
              "id": 531,
              "date_text": "July 22nd",
              "text": "Portland mayor caught in tear gas",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrOlmos/status/1286194373739155456",
              "Link2": "https://twitter.com/MrOlmos/status/1286194652513673216"
            },
            {
              "id": 532,
              "date_text": "July 22nd",
              "text": "Portland mayor caught in tear gas",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrOlmos/status/1286194373739155456",
              "Link2": "https://twitter.com/MrOlmos/status/1286194652513673216"
            },
            {
              "id": 533,
              "date_text": "July 22nd",
              "text": "Officer throws explosive at reporter",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/defendpdx/status/1286185049054879744",
              "Link2": ""
            },
            {
              "id": 534,
              "date_text": "July 22nd",
              "text": "Officer throws explosive at reporter",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/defendpdx/status/1286185049054879744",
              "Link2": ""
            },
            {
              "id": 535,
              "date_text": "July 22nd",
              "text": "Officer throws explosive at reporter",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/defendpdx/status/1286185049054879744",
              "Link2": ""
            },
            {
              "id": 536,
              "date_text": "July 22nd",
              "text": "Two protesters hospitalized after being shot by less-lethal munitions",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://www.oregonlive.com/portland/2020/07/two-portlanders-hospitalized-after-shot-with-munitions-if-that-round-had-hit-me-in-the-neck-i-definitely-would-have-died.html",
              "Link2": ""
            },
            {
              "id": 537,
              "date_text": "July 22nd",
              "text": "Two protesters hospitalized after being shot by less-lethal munitions",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://www.oregonlive.com/portland/2020/07/two-portlanders-hospitalized-after-shot-with-munitions-if-that-round-had-hit-me-in-the-neck-i-definitely-would-have-died.html",
              "Link2": ""
            },
            {
              "id": 538,
              "date_text": "July 22nd",
              "text": "Two protesters hospitalized after being shot by less-lethal munitions",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://www.oregonlive.com/portland/2020/07/two-portlanders-hospitalized-after-shot-with-munitions-if-that-round-had-hit-me-in-the-neck-i-definitely-would-have-died.html",
              "Link2": ""
            },
            {
              "id": 539,
              "date_text": "July 23rd",
              "text": "Federal officers again use excessive force to push protesters",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/LindseyPSmith7/status/1286196710625042441",
              "Link2": "https://twitter.com/LindseyPSmith7/status/1286201158445330432"
            },
            {
              "id": 540,
              "date_text": "July 23rd",
              "text": "Federal officers again use excessive force to push protesters",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/LindseyPSmith7/status/1286196710625042441",
              "Link2": "https://twitter.com/LindseyPSmith7/status/1286201158445330432"
            },
            {
              "id": 541,
              "date_text": "July 23rd",
              "text": "Federal officers again use excessive force to push protesters",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/LindseyPSmith7/status/1286196710625042441",
              "Link2": "https://twitter.com/LindseyPSmith7/status/1286201158445330432"
            },
            {
              "id": 542,
              "date_text": "July 23rd",
              "text": "Federal officers deploy tear gas a second time",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/LindseyPSmith7/status/1286239830725124099",
              "Link2": ""
            },
            {
              "id": 543,
              "date_text": "July 23rd",
              "text": "Federal officers deploy tear gas a second time",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/LindseyPSmith7/status/1286239830725124099",
              "Link2": ""
            },
            {
              "id": 544,
              "date_text": "July 23rd",
              "text": "Federal officers deploy tear gas a second time",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/LindseyPSmith7/status/1286239830725124099",
              "Link2": ""
            },
            {
              "id": 545,
              "date_text": "July 23rd",
              "text": "Federal officers drag protester away, fire munitions at crowd to cover",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/TheRealCoryElia/status/1286217242909134848",
              "Link2": ""
            },
            {
              "id": 546,
              "date_text": "July 23rd",
              "text": "Federal officers drag protester away, fire munitions at crowd to cover",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/TheRealCoryElia/status/1286217242909134848",
              "Link2": ""
            },
            {
              "id": 547,
              "date_text": "July 23rd",
              "text": "Federal officers drag protester away, fire munitions at crowd to cover",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/TheRealCoryElia/status/1286217242909134848",
              "Link2": ""
            },
            {
              "id": 548,
              "date_text": "July 23rd",
              "text": "Federal officer kicks tear gas at protesters, fires at short range",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrOlmos/status/1286218372103823360",
              "Link2": ""
            },
            {
              "id": 549,
              "date_text": "July 23rd",
              "text": "Federal officer kicks tear gas at protesters, fires at short range",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrOlmos/status/1286218372103823360",
              "Link2": ""
            },
            {
              "id": 550,
              "date_text": "July 23rd",
              "text": "Federal officer kicks tear gas at protesters, fires at short range",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrOlmos/status/1286218372103823360",
              "Link2": ""
            },
            {
              "id": 551,
              "date_text": "July 24th",
              "text": "Federal officers fire tear gas in response to fire",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/defendpdx/status/1286565904956846080",
              "Link2": "https://twitter.com/defendpdx/status/1286571452523638787"
            },
            {
              "id": 552,
              "date_text": "July 24th",
              "text": "Federal officers fire tear gas in response to fire",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/defendpdx/status/1286565904956846080",
              "Link2": "https://twitter.com/defendpdx/status/1286571452523638787"
            },
            {
              "id": 553,
              "date_text": "July 24th",
              "text": "Federal officers fire tear gas in response to fire",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/defendpdx/status/1286565904956846080",
              "Link2": "https://twitter.com/defendpdx/status/1286571452523638787"
            },
            {
              "id": 554,
              "date_text": "July 24th",
              "text": "Journalist shot in hand with explosive",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/Rjaellis/status/1286578718693978113",
              "Link2": ""
            },
            {
              "id": 555,
              "date_text": "July 24th",
              "text": "Journalist shot in hand with explosive",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/Rjaellis/status/1286578718693978113",
              "Link2": ""
            },
            {
              "id": 556,
              "date_text": "July 24th",
              "text": "Journalist shot in hand with explosive",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/Rjaellis/status/1286578718693978113",
              "Link2": ""
            },
            {
              "id": 557,
              "date_text": "July 24th",
              "text": "Protesters struck in face",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrOlmos/status/1286583315324010496",
              "Link2": ""
            },
            {
              "id": 558,
              "date_text": "July 24th",
              "text": "Protesters struck in face",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrOlmos/status/1286583315324010496",
              "Link2": ""
            },
            {
              "id": 559,
              "date_text": "July 24th",
              "text": "Protesters struck in face",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrOlmos/status/1286583315324010496",
              "Link2": ""
            },
            {
              "id": 560,
              "date_text": "July 24th",
              "text": "Federal officer fire second round of tear gas",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrOlmos/status/1286576074680233984",
              "Link2": "https://twitter.com/MrOlmos/status/1286576915617157127"
            },
            {
              "id": 561,
              "date_text": "July 24th",
              "text": "Federal officer fire second round of tear gas",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrOlmos/status/1286576074680233984",
              "Link2": "https://twitter.com/MrOlmos/status/1286576915617157127"
            },
            {
              "id": 562,
              "date_text": "July 24th",
              "text": "Federal officer fire second round of tear gas",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrOlmos/status/1286576074680233984",
              "Link2": "https://twitter.com/MrOlmos/status/1286576915617157127"
            },
            {
              "id": 563,
              "date_text": "July 24th",
              "text": "Journalist shot, allegedly in the face",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MathieuLRolland/status/1286618588757991424",
              "Link2": ""
            },
            {
              "id": 564,
              "date_text": "July 24th",
              "text": "Journalist shot, allegedly in the face",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MathieuLRolland/status/1286618588757991424",
              "Link2": ""
            },
            {
              "id": 565,
              "date_text": "July 24th",
              "text": "Journalist shot, allegedly in the face",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MathieuLRolland/status/1286618588757991424",
              "Link2": ""
            },
            {
              "id": 566,
              "date_text": "July 24th",
              "text": "Officers fire tear gas at protesters without apparent cause",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/Rjaellis/status/1286586303170060289",
              "Link2": "https://twitter.com/Rjaellis/status/1286589941170892800"
            },
            {
              "id": 567,
              "date_text": "July 24th",
              "text": "Officers fire tear gas at protesters without apparent cause",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/Rjaellis/status/1286586303170060289",
              "Link2": "https://twitter.com/Rjaellis/status/1286589941170892800"
            },
            {
              "id": 568,
              "date_text": "July 24th",
              "text": "Officers fire tear gas at protesters without apparent cause",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/Rjaellis/status/1286586303170060289",
              "Link2": "https://twitter.com/Rjaellis/status/1286589941170892800"
            },
            {
              "id": 569,
              "date_text": "July 24th",
              "text": "Officers fire tear gas as they leave the scene",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/hungrybowtie/status/1286599900759695361",
              "Link2": ""
            },
            {
              "id": 570,
              "date_text": "July 24th",
              "text": "Officers fire tear gas as they leave the scene",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/hungrybowtie/status/1286599900759695361",
              "Link2": ""
            },
            {
              "id": 571,
              "date_text": "July 24th",
              "text": "Officers fire tear gas as they leave the scene",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/hungrybowtie/status/1286599900759695361",
              "Link2": ""
            },
            {
              "id": 572,
              "date_text": "July 24th",
              "text": "Federal officers respond to breach in fence with tear gas",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/hungrybowtie/status/1286587655942103040",
              "Link2": "https://twitter.com/hungrybowtie/status/1286588583067807745"
            },
            {
              "id": 573,
              "date_text": "July 24th",
              "text": "Federal officers respond to breach in fence with tear gas",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/hungrybowtie/status/1286587655942103040",
              "Link2": "https://twitter.com/hungrybowtie/status/1286588583067807745"
            },
            {
              "id": 574,
              "date_text": "July 24th",
              "text": "Federal officers respond to breach in fence with tear gas",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/hungrybowtie/status/1286587655942103040",
              "Link2": "https://twitter.com/hungrybowtie/status/1286588583067807745"
            },
            {
              "id": 575,
              "date_text": "July 24th",
              "text": "Journalist struck in hand and knee by tear gas canister",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/wyattreed13/status/1286588240636518400",
              "Link2": "https://twitter.com/wyattreed13/status/1286595550523961348"
            },
            {
              "id": 576,
              "date_text": "July 24th",
              "text": "Journalist struck in hand and knee by tear gas canister",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/wyattreed13/status/1286588240636518400",
              "Link2": "https://twitter.com/wyattreed13/status/1286595550523961348"
            },
            {
              "id": 577,
              "date_text": "July 24th",
              "text": "Journalist struck in hand and knee by tear gas canister",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/wyattreed13/status/1286588240636518400",
              "Link2": "https://twitter.com/wyattreed13/status/1286595550523961348"
            },
            {
              "id": 578,
              "date_text": "July 24th",
              "text": "Federal officers arrest woman dancing with flowers",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/wyattreed13/status/1286627567630344194",
              "Link2": ""
            },
            {
              "id": 579,
              "date_text": "July 24th",
              "text": "Federal officers arrest woman dancing with flowers",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/wyattreed13/status/1286627567630344194",
              "Link2": ""
            },
            {
              "id": 580,
              "date_text": "July 24th",
              "text": "Federal officers arrest woman dancing with flowers",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/wyattreed13/status/1286627567630344194",
              "Link2": ""
            },
            {
              "id": 581,
              "date_text": "July 24th",
              "text": "Federal officer tackle man to the ground",
              "tags_str": "Hard",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/wyattreed13/status/1286613058903670784",
              "Link2": ""
            },
            {
              "id": 582,
              "date_text": "July 24th",
              "text": "Federal officer tackle man to the ground",
              "tags_str": "Hard",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/wyattreed13/status/1286613058903670784",
              "Link2": ""
            },
            {
              "id": 583,
              "date_text": "July 24th",
              "text": "Federal officer tackle man to the ground",
              "tags_str": "Hard",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/wyattreed13/status/1286613058903670784",
              "Link2": ""
            },
            {
              "id": 584,
              "date_text": "July 24th",
              "text": "Federal officers fire tear gas, flashbangs and pepper balls at crowd",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/ByMikeBaker/status/1286905515809705988",
              "Link2": "https://twitter.com/ByMikeBaker/status/1286906277994483712"
            },
            {
              "id": 585,
              "date_text": "July 24th",
              "text": "Federal officers fire tear gas, flashbangs and pepper balls at crowd",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/ByMikeBaker/status/1286905515809705988",
              "Link2": "https://twitter.com/ByMikeBaker/status/1286906277994483712"
            },
            {
              "id": 586,
              "date_text": "July 24th",
              "text": "Federal officers fire tear gas, flashbangs and pepper balls at crowd",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/ByMikeBaker/status/1286905515809705988",
              "Link2": "https://twitter.com/ByMikeBaker/status/1286906277994483712"
            },
            {
              "id": 587,
              "date_text": "July 24th",
              "text": "Federal officers fire impact munitions at point blank",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrOlmos/status/1286915839686373378",
              "Link2": "https://twitter.com/GriffinMalone6/status/1286911691628765184"
            },
            {
              "id": 588,
              "date_text": "July 24th",
              "text": "Federal officers fire impact munitions at point blank",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrOlmos/status/1286915839686373378",
              "Link2": "https://twitter.com/GriffinMalone6/status/1286911691628765184"
            },
            {
              "id": 589,
              "date_text": "July 24th",
              "text": "Federal officers fire impact munitions at point blank",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrOlmos/status/1286915839686373378",
              "Link2": "https://twitter.com/GriffinMalone6/status/1286911691628765184"
            },
            {
              "id": 590,
              "date_text": "July 24th",
              "text": "Disabled veteran hit directly by tear gas canister",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/tyler_ensign/status/1286940248006512640",
              "Link2": ""
            },
            {
              "id": 591,
              "date_text": "July 24th",
              "text": "Disabled veteran hit directly by tear gas canister",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/tyler_ensign/status/1286940248006512640",
              "Link2": ""
            },
            {
              "id": 592,
              "date_text": "July 24th",
              "text": "Disabled veteran hit directly by tear gas canister",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/tyler_ensign/status/1286940248006512640",
              "Link2": ""
            },
            {
              "id": 593,
              "date_text": "July 24th",
              "text": "Journalist shot in hand and face",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/danielvmedia/status/1287101427144253440",
              "Link2": "https://twitter.com/AlexMilanTracy/status/1286929119767224322"
            },
            {
              "id": 594,
              "date_text": "July 24th",
              "text": "Journalist shot in hand and face",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/danielvmedia/status/1287101427144253440",
              "Link2": "https://twitter.com/AlexMilanTracy/status/1286929119767224322"
            },
            {
              "id": 595,
              "date_text": "July 24th",
              "text": "Journalist shot in hand and face",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/danielvmedia/status/1287101427144253440",
              "Link2": "https://twitter.com/AlexMilanTracy/status/1286929119767224322"
            },
            {
              "id": 596,
              "date_text": "July 25th",
              "text": "Unlawful assembly declared; federal officers fire tear gas",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/hungrybowtie/status/1286933684403105792",
              "Link2": "https://twitter.com/hungrybowtie/status/1286938539960053763"
            },
            {
              "id": 597,
              "date_text": "July 25th",
              "text": "Unlawful assembly declared; federal officers fire tear gas",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/hungrybowtie/status/1286933684403105792",
              "Link2": "https://twitter.com/hungrybowtie/status/1286938539960053763"
            },
            {
              "id": 598,
              "date_text": "July 25th",
              "text": "Unlawful assembly declared; federal officers fire tear gas",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/hungrybowtie/status/1286933684403105792",
              "Link2": "https://twitter.com/hungrybowtie/status/1286938539960053763"
            },
            {
              "id": 599,
              "date_text": "July 25th",
              "text": "Federal officers use tear gas and impact munitions to cover retreat",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/hungrybowtie/status/1286966546187747329",
              "Link2": "https://twitter.com/hungrybowtie/status/1286966936882909184"
            },
            {
              "id": 600,
              "date_text": "July 25th",
              "text": "Federal officers use tear gas and impact munitions to cover retreat",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/hungrybowtie/status/1286966546187747329",
              "Link2": "https://twitter.com/hungrybowtie/status/1286966936882909184"
            },
            {
              "id": 601,
              "date_text": "July 25th",
              "text": "Federal officers use tear gas and impact munitions to cover retreat",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/hungrybowtie/status/1286966546187747329",
              "Link2": "https://twitter.com/hungrybowtie/status/1286966936882909184"
            },
            {
              "id": 602,
              "date_text": "July 25th",
              "text": "Federal officer shoots at protesters without apparent justification",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/gravemorgan/status/1286948398273196032",
              "Link2": ""
            },
            {
              "id": 603,
              "date_text": "July 25th",
              "text": "Federal officer shoots at protesters without apparent justification",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/gravemorgan/status/1286948398273196032",
              "Link2": ""
            },
            {
              "id": 604,
              "date_text": "July 25th",
              "text": "Federal officer shoots at protesters without apparent justification",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/gravemorgan/status/1286948398273196032",
              "Link2": ""
            },
            {
              "id": 605,
              "date_text": "July 25th",
              "text": "Officer pepper sprays crowd without apparent justification",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrOlmos/status/1286919425782775811",
              "Link2": ""
            },
            {
              "id": 606,
              "date_text": "July 25th",
              "text": "Officer pepper sprays crowd without apparent justification",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrOlmos/status/1286919425782775811",
              "Link2": ""
            },
            {
              "id": 607,
              "date_text": "July 25th",
              "text": "Officer pepper sprays crowd without apparent justification",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrOlmos/status/1286919425782775811",
              "Link2": ""
            },
            {
              "id": 608,
              "date_text": "July 25th",
              "text": "Police respond to pallet fire with tear gas; do not extinguish fire",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/LindseyPSmith7/status/1286967609401831424",
              "Link2": "https://twitter.com/LindseyPSmith7/status/1286958049756815361"
            },
            {
              "id": 609,
              "date_text": "July 25th",
              "text": "Police respond to pallet fire with tear gas; do not extinguish fire",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/LindseyPSmith7/status/1286967609401831424",
              "Link2": "https://twitter.com/LindseyPSmith7/status/1286958049756815361"
            },
            {
              "id": 610,
              "date_text": "July 25th",
              "text": "Police respond to pallet fire with tear gas; do not extinguish fire",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/LindseyPSmith7/status/1286967609401831424",
              "Link2": "https://twitter.com/LindseyPSmith7/status/1286958049756815361"
            },
            {
              "id": 611,
              "date_text": "July 25th",
              "text": "Federal officers pepper spray protesters across fence",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/arfbradford/status/1287271089362542592",
              "Link2": "https://twitter.com/MrOlmos/status/1287278027009736705"
            },
            {
              "id": 612,
              "date_text": "July 25th",
              "text": "Federal officers pepper spray protesters across fence",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/arfbradford/status/1287271089362542592",
              "Link2": "https://twitter.com/MrOlmos/status/1287278027009736705"
            },
            {
              "id": 613,
              "date_text": "July 25th",
              "text": "Federal officers pepper spray protesters across fence",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/arfbradford/status/1287271089362542592",
              "Link2": "https://twitter.com/MrOlmos/status/1287278027009736705"
            },
            {
              "id": 614,
              "date_text": "July 25th",
              "text": "Mom shot in head",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/Amy_Siskind/status/1287614684418408448",
              "Link2": "https://imgur.com/WMLxsAQ"
            },
            {
              "id": 615,
              "date_text": "July 25th",
              "text": "Mom shot in head",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/Amy_Siskind/status/1287614684418408448",
              "Link2": "https://imgur.com/WMLxsAQ"
            },
            {
              "id": 616,
              "date_text": "July 25th",
              "text": "Mom shot in head",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/Amy_Siskind/status/1287614684418408448",
              "Link2": "https://imgur.com/WMLxsAQ"
            },
            {
              "id": 617,
              "date_text": "July 25th",
              "text": "Reporter shot after object thrown at police by someone else",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://mobile.twitter.com/GriffinMalone6/status/1286968297980755968",
              "Link2": ""
            },
            {
              "id": 618,
              "date_text": "July 25th",
              "text": "Reporter shot after object thrown at police by someone else",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://mobile.twitter.com/GriffinMalone6/status/1286968297980755968",
              "Link2": ""
            },
            {
              "id": 619,
              "date_text": "July 25th",
              "text": "Reporter shot after object thrown at police by someone else",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://mobile.twitter.com/GriffinMalone6/status/1286968297980755968",
              "Link2": ""
            },
            {
              "id": 620,
              "date_text": "July 25th",
              "text": "Exchange of tear gas and fireworks between federal officers and protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/PDocumentarians/status/1287272963482333185",
              "Link2": "https://twitter.com/MrOlmos/status/1287270494647930887"
            },
            {
              "id": 621,
              "date_text": "July 25th",
              "text": "Exchange of tear gas and fireworks between federal officers and protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/PDocumentarians/status/1287272963482333185",
              "Link2": "https://twitter.com/MrOlmos/status/1287270494647930887"
            },
            {
              "id": 622,
              "date_text": "July 25th",
              "text": "Exchange of tear gas and fireworks between federal officers and protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/PDocumentarians/status/1287272963482333185",
              "Link2": "https://twitter.com/MrOlmos/status/1287270494647930887"
            },
            {
              "id": 623,
              "date_text": "July 25th",
              "text": "Image shows effect of stinger grenade",
              "tags_str": "Presence",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/revnatscider/status/1287293162508050432",
              "Link2": "https://twitter.com/revnatscider/status/1287295229742075904"
            },
            {
              "id": 624,
              "date_text": "July 25th",
              "text": "Image shows effect of stinger grenade",
              "tags_str": "Presence",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/revnatscider/status/1287293162508050432",
              "Link2": "https://twitter.com/revnatscider/status/1287295229742075904"
            },
            {
              "id": 625,
              "date_text": "July 25th",
              "text": "Image shows effect of stinger grenade",
              "tags_str": "Presence",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/revnatscider/status/1287293162508050432",
              "Link2": "https://twitter.com/revnatscider/status/1287295229742075904"
            },
            {
              "id": 626,
              "date_text": "July 26th",
              "text": "Federal officers respond to thrown water bottle with excessive force",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/PDocumentarians/status/1287355449222680578",
              "Link2": ""
            },
            {
              "id": 627,
              "date_text": "July 26th",
              "text": "Federal officers respond to thrown water bottle with excessive force",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/PDocumentarians/status/1287355449222680578",
              "Link2": ""
            },
            {
              "id": 628,
              "date_text": "July 26th",
              "text": "Federal officers respond to thrown water bottle with excessive force",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/PDocumentarians/status/1287355449222680578",
              "Link2": ""
            },
            {
              "id": 629,
              "date_text": "July 26th",
              "text": "Tear gas canister shot through window of car",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrOlmos/status/1287312287557066752",
              "Link2": ""
            },
            {
              "id": 630,
              "date_text": "July 26th",
              "text": "Tear gas canister shot through window of car",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrOlmos/status/1287312287557066752",
              "Link2": ""
            },
            {
              "id": 631,
              "date_text": "July 26th",
              "text": "Tear gas canister shot through window of car",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrOlmos/status/1287312287557066752",
              "Link2": ""
            },
            {
              "id": 632,
              "date_text": "July 26th",
              "text": "Police charge protesters",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrOlmos/status/1287317374664810496",
              "Link2": "https://twitter.com/itsmikebivins/status/1287317505262813184"
            },
            {
              "id": 633,
              "date_text": "July 26th",
              "text": "Police charge protesters",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrOlmos/status/1287317374664810496",
              "Link2": "https://twitter.com/itsmikebivins/status/1287317505262813184"
            },
            {
              "id": 634,
              "date_text": "July 26th",
              "text": "Police charge protesters",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrOlmos/status/1287317374664810496",
              "Link2": "https://twitter.com/itsmikebivins/status/1287317505262813184"
            },
            {
              "id": 635,
              "date_text": "July 26th",
              "text": "Second exchange of tear gas and impact munitions between federal officers and protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrOlmos/status/1287301148748046336",
              "Link2": "https://twitter.com/MrOlmos/status/1287301721530671109"
            },
            {
              "id": 636,
              "date_text": "July 26th",
              "text": "Second exchange of tear gas and impact munitions between federal officers and protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrOlmos/status/1287301148748046336",
              "Link2": "https://twitter.com/MrOlmos/status/1287301721530671109"
            },
            {
              "id": 637,
              "date_text": "July 26th",
              "text": "Second exchange of tear gas and impact munitions between federal officers and protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrOlmos/status/1287301148748046336",
              "Link2": "https://twitter.com/MrOlmos/status/1287301721530671109"
            },
            {
              "id": 638,
              "date_text": "July 26th",
              "text": "Vietnam veteran pepper sprayed in the face",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/andrewkimmel/status/1287319466120904704",
              "Link2": ""
            },
            {
              "id": 639,
              "date_text": "July 26th",
              "text": "Vietnam veteran pepper sprayed in the face",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/andrewkimmel/status/1287319466120904704",
              "Link2": ""
            },
            {
              "id": 640,
              "date_text": "July 26th",
              "text": "Vietnam veteran pepper sprayed in the face",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/andrewkimmel/status/1287319466120904704",
              "Link2": ""
            },
            {
              "id": 641,
              "date_text": "July 26th",
              "text": "Federal officer pepper sprays journalist",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/hungrybowtie/status/1287312203045978112",
              "Link2": ""
            },
            {
              "id": 642,
              "date_text": "July 26th",
              "text": "Federal officer pepper sprays journalist",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/hungrybowtie/status/1287312203045978112",
              "Link2": ""
            },
            {
              "id": 643,
              "date_text": "July 26th",
              "text": "Federal officer pepper sprays journalist",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/hungrybowtie/status/1287312203045978112",
              "Link2": ""
            },
            {
              "id": 644,
              "date_text": "July 26th",
              "text": "Officers hold arrestee down in tear gas",
              "tags_str": "Soft, Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/sarahjeong/status/1287687503940448256",
              "Link2": "https://twitter.com/PDXzane/status/1287305145290616833"
            },
            {
              "id": 645,
              "date_text": "July 26th",
              "text": "Officers hold arrestee down in tear gas",
              "tags_str": "Soft, Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/sarahjeong/status/1287687503940448256",
              "Link2": "https://twitter.com/PDXzane/status/1287305145290616833"
            },
            {
              "id": 646,
              "date_text": "July 26th",
              "text": "Officers hold arrestee down in tear gas",
              "tags_str": "Soft, Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/sarahjeong/status/1287687503940448256",
              "Link2": "https://twitter.com/PDXzane/status/1287305145290616833"
            },
            {
              "id": 647,
              "date_text": " July 26th",
              "text": "Riot police shove woman to the ground",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://www.reddit.com/r/Portland/comments/hy4fza/police_charge_after_dispersing_protesters_and/",
              "Link2": ""
            },
            {
              "id": 648,
              "date_text": " July 26th",
              "text": "Riot police shove woman to the ground",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://www.reddit.com/r/Portland/comments/hy4fza/police_charge_after_dispersing_protesters_and/",
              "Link2": ""
            },
            {
              "id": 649,
              "date_text": " July 26th",
              "text": "Riot police shove woman to the ground",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://www.reddit.com/r/Portland/comments/hy4fza/police_charge_after_dispersing_protesters_and/",
              "Link2": ""
            },
            {
              "id": 650,
              "date_text": "July 26th",
              "text": "Officers beat protesters who are unable to run",
              "tags_str": "Hard",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/KohzKah/status/1287449509929213952",
              "Link2": ""
            },
            {
              "id": 651,
              "date_text": "July 26th",
              "text": "Officers beat protesters who are unable to run",
              "tags_str": "Hard",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/KohzKah/status/1287449509929213952",
              "Link2": ""
            },
            {
              "id": 652,
              "date_text": "July 26th",
              "text": "Officers beat protesters who are unable to run",
              "tags_str": "Hard",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/KohzKah/status/1287449509929213952",
              "Link2": ""
            },
            {
              "id": 653,
              "date_text": "July 26th",
              "text": "Protester shot in eye",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://imgur.com/uAR94Ou",
              "Link2": "https://www.reddit.com/r/Portland/comments/hy56r2/one_person_threw_a_water_bottle_now_this_kid_is/"
            },
            {
              "id": 654,
              "date_text": "July 26th",
              "text": "Protester shot in eye",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://imgur.com/uAR94Ou",
              "Link2": "https://www.reddit.com/r/Portland/comments/hy56r2/one_person_threw_a_water_bottle_now_this_kid_is/"
            },
            {
              "id": 655,
              "date_text": "July 26th",
              "text": "Protester shot in eye",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://imgur.com/uAR94Ou",
              "Link2": "https://www.reddit.com/r/Portland/comments/hy56r2/one_person_threw_a_water_bottle_now_this_kid_is/"
            },
            {
              "id": 656,
              "date_text": "July 26th",
              "text": "Officer kneels on protesters neck",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/DonovanFarley/status/1287316973882183680",
              "Link2": "https://twitter.com/jiLLy834n/status/1287318126820913152"
            },
            {
              "id": 657,
              "date_text": "July 26th",
              "text": "Officer kneels on protesters neck",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/DonovanFarley/status/1287316973882183680",
              "Link2": "https://twitter.com/jiLLy834n/status/1287318126820913152"
            },
            {
              "id": 658,
              "date_text": "July 26th",
              "text": "Officer kneels on protesters neck",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/DonovanFarley/status/1287316973882183680",
              "Link2": "https://twitter.com/jiLLy834n/status/1287318126820913152"
            },
            {
              "id": 659,
              "date_text": "July 26th",
              "text": "Journalist arrested without cause",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/gravemorgan/status/1287805624969904129",
              "Link2": ""
            },
            {
              "id": 660,
              "date_text": "July 26th",
              "text": "Journalist arrested without cause",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/gravemorgan/status/1287805624969904129",
              "Link2": ""
            },
            {
              "id": 661,
              "date_text": "July 26th",
              "text": "Journalist arrested without cause",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/gravemorgan/status/1287805624969904129",
              "Link2": ""
            },
            {
              "id": 662,
              "date_text": "July 26th",
              "text": "Medic shot in chest",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://www.instagram.com/tv/CDGUFMgpVSa/",
              "Link2": "https://imgur.com/a/72v6naZ"
            },
            {
              "id": 663,
              "date_text": "July 26th",
              "text": "Medic shot in chest",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://www.instagram.com/tv/CDGUFMgpVSa/",
              "Link2": "https://imgur.com/a/72v6naZ"
            },
            {
              "id": 664,
              "date_text": "July 26th",
              "text": "Medic shot in chest",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://www.instagram.com/tv/CDGUFMgpVSa/",
              "Link2": "https://imgur.com/a/72v6naZ"
            },
            {
              "id": 665,
              "date_text": "July 27th",
              "text": "Violent arrest made by federal officers",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/TheRealCoryElia/status/1287664107726938112",
              "Link2": ""
            },
            {
              "id": 666,
              "date_text": "July 27th",
              "text": "Violent arrest made by federal officers",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/TheRealCoryElia/status/1287664107726938112",
              "Link2": ""
            },
            {
              "id": 667,
              "date_text": "July 27th",
              "text": "Violent arrest made by federal officers",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/TheRealCoryElia/status/1287664107726938112",
              "Link2": ""
            },
            {
              "id": 668,
              "date_text": "July 27th",
              "text": "First round of tear gas fired by federal officers",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrOlmos/status/1287646631798517760",
              "Link2": "https://twitter.com/MrOlmos/status/1287646958882963457"
            },
            {
              "id": 669,
              "date_text": "July 27th",
              "text": "First round of tear gas fired by federal officers",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrOlmos/status/1287646631798517760",
              "Link2": "https://twitter.com/MrOlmos/status/1287646958882963457"
            },
            {
              "id": 670,
              "date_text": "July 27th",
              "text": "First round of tear gas fired by federal officers",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrOlmos/status/1287646631798517760",
              "Link2": "https://twitter.com/MrOlmos/status/1287646958882963457"
            },
            {
              "id": 671,
              "date_text": "July 27th",
              "text": "Second round of tear gas fired by federal officers",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrOlmos/status/1287659354200498176",
              "Link2": "https://twitter.com/MrOlmos/status/1287659523633639429"
            },
            {
              "id": 672,
              "date_text": "July 27th",
              "text": "Second round of tear gas fired by federal officers",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrOlmos/status/1287659354200498176",
              "Link2": "https://twitter.com/MrOlmos/status/1287659523633639429"
            },
            {
              "id": 673,
              "date_text": "July 27th",
              "text": "Second round of tear gas fired by federal officers",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrOlmos/status/1287659354200498176",
              "Link2": "https://twitter.com/MrOlmos/status/1287659523633639429"
            },
            {
              "id": 674,
              "date_text": "July 27th",
              "text": "Third round of tear gas fired by federal officers",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrOlmos/status/1287679352256094208",
              "Link2": "https://twitter.com/MrOlmos/status/1287681179143954433"
            },
            {
              "id": 675,
              "date_text": "July 27th",
              "text": "Third round of tear gas fired by federal officers",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrOlmos/status/1287679352256094208",
              "Link2": "https://twitter.com/MrOlmos/status/1287681179143954433"
            },
            {
              "id": 676,
              "date_text": "July 27th",
              "text": "Third round of tear gas fired by federal officers",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrOlmos/status/1287679352256094208",
              "Link2": "https://twitter.com/MrOlmos/status/1287681179143954433"
            },
            {
              "id": 677,
              "date_text": "July 27th",
              "text": "Livestreamer shot in hand while sitting on ground",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/TheRealCoryElia/status/1287659096179499009",
              "Link2": "https://twitter.com/TheRealCoryElia/status/1287659620094210048"
            },
            {
              "id": 678,
              "date_text": "July 27th",
              "text": "Livestreamer shot in hand while sitting on ground",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/TheRealCoryElia/status/1287659096179499009",
              "Link2": "https://twitter.com/TheRealCoryElia/status/1287659620094210048"
            },
            {
              "id": 679,
              "date_text": "July 27th",
              "text": "Livestreamer shot in hand while sitting on ground",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/TheRealCoryElia/status/1287659096179499009",
              "Link2": "https://twitter.com/TheRealCoryElia/status/1287659620094210048"
            },
            {
              "id": 680,
              "date_text": "July 27th",
              "text": "Violent arrest made by federal officers",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/hyur0s/a_young_woman_is_arrested_she_yells_i_cant_breath/",
              "Link2": "https://www.reddit.com/r/PublicFreakout/comments/hyys5p/2_ladys_get_arrested_by_federal_police_in_portland/"
            },
            {
              "id": 681,
              "date_text": "July 27th",
              "text": "Violent arrest made by federal officers",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/hyur0s/a_young_woman_is_arrested_she_yells_i_cant_breath/",
              "Link2": "https://www.reddit.com/r/PublicFreakout/comments/hyys5p/2_ladys_get_arrested_by_federal_police_in_portland/"
            },
            {
              "id": 682,
              "date_text": "July 27th",
              "text": "Violent arrest made by federal officers",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/hyur0s/a_young_woman_is_arrested_she_yells_i_cant_breath/",
              "Link2": "https://www.reddit.com/r/PublicFreakout/comments/hyys5p/2_ladys_get_arrested_by_federal_police_in_portland/"
            },
            {
              "id": 683,
              "date_text": "July 27th",
              "text": "Officer pepper sprays protester",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://clips.twitch.tv/MotionlessSplendidArtichokeTF2John",
              "Link2": "https://www.reddit.com/r/2020PoliceBrutality/comments/hyofxj/portland_fed_maces_protestor_at_pointblank_range/"
            },
            {
              "id": 684,
              "date_text": "July 27th",
              "text": "Officer pepper sprays protester",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://clips.twitch.tv/MotionlessSplendidArtichokeTF2John",
              "Link2": "https://www.reddit.com/r/2020PoliceBrutality/comments/hyofxj/portland_fed_maces_protestor_at_pointblank_range/"
            },
            {
              "id": 685,
              "date_text": "July 27th",
              "text": "Officer pepper sprays protester",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://clips.twitch.tv/MotionlessSplendidArtichokeTF2John",
              "Link2": "https://www.reddit.com/r/2020PoliceBrutality/comments/hyofxj/portland_fed_maces_protestor_at_pointblank_range/"
            },
            {
              "id": 686,
              "date_text": "July 27th",
              "text": "Press shot and tear gassed",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://clips.twitch.tv/BlueImpartialMonkeySoonerLater",
              "Link2": "https://www.reddit.com/r/2020PoliceBrutality/comments/hyozr3/portland_feds_gas_flashbang_several_times_and/"
            },
            {
              "id": 687,
              "date_text": "July 27th",
              "text": "Press shot and tear gassed",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://clips.twitch.tv/BlueImpartialMonkeySoonerLater",
              "Link2": "https://www.reddit.com/r/2020PoliceBrutality/comments/hyozr3/portland_feds_gas_flashbang_several_times_and/"
            },
            {
              "id": 688,
              "date_text": "July 27th",
              "text": "Press shot and tear gassed",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://clips.twitch.tv/BlueImpartialMonkeySoonerLater",
              "Link2": "https://www.reddit.com/r/2020PoliceBrutality/comments/hyozr3/portland_feds_gas_flashbang_several_times_and/"
            },
            {
              "id": 689,
              "date_text": "July 27th",
              "text": "Journalist shot in the face",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://mobile.twitter.com/TripPersonal/status/1287828370995081217",
              "Link2": "https://mobile.twitter.com/TripPersonal/status/1287831867937325057"
            },
            {
              "id": 690,
              "date_text": "July 27th",
              "text": "Journalist shot in the face",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://mobile.twitter.com/TripPersonal/status/1287828370995081217",
              "Link2": "https://mobile.twitter.com/TripPersonal/status/1287831867937325057"
            },
            {
              "id": 691,
              "date_text": "July 27th",
              "text": "Journalist shot in the face",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://mobile.twitter.com/TripPersonal/status/1287828370995081217",
              "Link2": "https://mobile.twitter.com/TripPersonal/status/1287831867937325057"
            },
            {
              "id": 692,
              "date_text": "July 27th",
              "text": "First round of tear gas launched by federal officers",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/TheRealCoryElia/status/1287997393351241728",
              "Link2": "https://twitter.com/TheRealCoryElia/status/1288000640887603200"
            },
            {
              "id": 693,
              "date_text": "July 27th",
              "text": "First round of tear gas launched by federal officers",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/TheRealCoryElia/status/1287997393351241728",
              "Link2": "https://twitter.com/TheRealCoryElia/status/1288000640887603200"
            },
            {
              "id": 694,
              "date_text": "July 27th",
              "text": "First round of tear gas launched by federal officers",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/TheRealCoryElia/status/1287997393351241728",
              "Link2": "https://twitter.com/TheRealCoryElia/status/1288000640887603200"
            },
            {
              "id": 695,
              "date_text": "July 27th",
              "text": "Man shot while filming from balcony",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://streamable.com/pdyy9s",
              "Link2": "https://www.reddit.com/r/pics/comments/hz596o/trip_jennings_shot_in_the_face_by_federal/fzh7f6i/"
            },
            {
              "id": 696,
              "date_text": "July 27th",
              "text": "Man shot while filming from balcony",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://streamable.com/pdyy9s",
              "Link2": "https://www.reddit.com/r/pics/comments/hz596o/trip_jennings_shot_in_the_face_by_federal/fzh7f6i/"
            },
            {
              "id": 697,
              "date_text": "July 27th",
              "text": "Man shot while filming from balcony",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://streamable.com/pdyy9s",
              "Link2": "https://www.reddit.com/r/pics/comments/hz596o/trip_jennings_shot_in_the_face_by_federal/fzh7f6i/"
            },
            {
              "id": 698,
              "date_text": "July 27th",
              "text": "Trumpet player shot in face",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/TheHannahRay/status/1287671181479297025",
              "Link2": "https://twitter.com/MaranieRae/status/1290436340685975552"
            },
            {
              "id": 699,
              "date_text": "July 27th",
              "text": "Trumpet player shot in face",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/TheHannahRay/status/1287671181479297025",
              "Link2": "https://twitter.com/MaranieRae/status/1290436340685975552"
            },
            {
              "id": 700,
              "date_text": "July 27th",
              "text": "Trumpet player shot in face",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/TheHannahRay/status/1287671181479297025",
              "Link2": "https://twitter.com/MaranieRae/status/1290436340685975552"
            },
            {
              "id": 701,
              "date_text": "July 28th",
              "text": "Second round of tear gas launched by federal officers",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrOlmos/status/1288012346837700609",
              "Link2": "https://twitter.com/MrOlmos/status/1288012627617054720"
            },
            {
              "id": 702,
              "date_text": "July 28th",
              "text": "Second round of tear gas launched by federal officers",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrOlmos/status/1288012346837700609",
              "Link2": "https://twitter.com/MrOlmos/status/1288012627617054720"
            },
            {
              "id": 703,
              "date_text": "July 28th",
              "text": "Second round of tear gas launched by federal officers",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrOlmos/status/1288012346837700609",
              "Link2": "https://twitter.com/MrOlmos/status/1288012627617054720"
            },
            {
              "id": 704,
              "date_text": "July 28th",
              "text": "Federal officers use tear gas to push protesters through the park",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/oh_rome/status/1288019583509512193",
              "Link2": "https://twitter.com/sunnymok/status/1288017016557772801"
            },
            {
              "id": 705,
              "date_text": "July 28th",
              "text": "Federal officers use tear gas to push protesters through the park",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/oh_rome/status/1288019583509512193",
              "Link2": "https://twitter.com/sunnymok/status/1288017016557772801"
            },
            {
              "id": 706,
              "date_text": "July 28th",
              "text": "Federal officers use tear gas to push protesters through the park",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/oh_rome/status/1288019583509512193",
              "Link2": "https://twitter.com/sunnymok/status/1288017016557772801"
            },
            {
              "id": 707,
              "date_text": "July 28th",
              "text": "Violent arrest made by federal officers",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/begoniacloak/status/1287785075459756040",
              "Link2": ""
            },
            {
              "id": 708,
              "date_text": "July 28th",
              "text": "Violent arrest made by federal officers",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/begoniacloak/status/1287785075459756040",
              "Link2": ""
            },
            {
              "id": 709,
              "date_text": "July 28th",
              "text": "Violent arrest made by federal officers",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/begoniacloak/status/1287785075459756040",
              "Link2": ""
            },
            {
              "id": 710,
              "date_text": "July 28th",
              "text": "Police shine strobe light at protesters, destroy umbrella",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/begoniacloak/status/1287795370358013952",
              "Link2": ""
            },
            {
              "id": 711,
              "date_text": "July 28th",
              "text": "Police shine strobe light at protesters, destroy umbrella",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/begoniacloak/status/1287795370358013952",
              "Link2": ""
            },
            {
              "id": 712,
              "date_text": "July 28th",
              "text": "Police shine strobe light at protesters, destroy umbrella",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/begoniacloak/status/1287795370358013952",
              "Link2": ""
            },
            {
              "id": 713,
              "date_text": " July 28th",
              "text": "Protester struck with tear gas canister",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/chadloder/status/1288154159196172288",
              "Link2": ""
            },
            {
              "id": 714,
              "date_text": " July 28th",
              "text": "Protester struck with tear gas canister",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/chadloder/status/1288154159196172288",
              "Link2": ""
            },
            {
              "id": 715,
              "date_text": " July 28th",
              "text": "Protester struck with tear gas canister",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/chadloder/status/1288154159196172288",
              "Link2": ""
            },
            {
              "id": 716,
              "date_text": "July 28th",
              "text": "Protester in wheelchair struck repeatedly",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://clips.twitch.tv/PlacidBusyKaleTebowing",
              "Link2": "https://www.reddit.com/r/Portland/comments/hzcyju/me_and_my_wheelchair_got_hit_with_a_decent_amount/"
            },
            {
              "id": 717,
              "date_text": "July 28th",
              "text": "Protester in wheelchair struck repeatedly",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://clips.twitch.tv/PlacidBusyKaleTebowing",
              "Link2": "https://www.reddit.com/r/Portland/comments/hzcyju/me_and_my_wheelchair_got_hit_with_a_decent_amount/"
            },
            {
              "id": 718,
              "date_text": "July 28th",
              "text": "Protester in wheelchair struck repeatedly",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://clips.twitch.tv/PlacidBusyKaleTebowing",
              "Link2": "https://www.reddit.com/r/Portland/comments/hzcyju/me_and_my_wheelchair_got_hit_with_a_decent_amount/"
            },
            {
              "id": 719,
              "date_text": "July 29th",
              "text": "Federal officers push protesters from courthouse",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/R3volutionDaddy/status/1288412044660576256",
              "Link2": "https://twitter.com/R3volutionDaddy/status/1288413882881576960"
            },
            {
              "id": 720,
              "date_text": "July 29th",
              "text": "Federal officers push protesters from courthouse",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/R3volutionDaddy/status/1288412044660576256",
              "Link2": "https://twitter.com/R3volutionDaddy/status/1288413882881576960"
            },
            {
              "id": 721,
              "date_text": "July 29th",
              "text": "Federal officers push protesters from courthouse",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/R3volutionDaddy/status/1288412044660576256",
              "Link2": "https://twitter.com/R3volutionDaddy/status/1288413882881576960"
            },
            {
              "id": 722,
              "date_text": "July 29th",
              "text": "Independent journalist arrested",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/FancyJenkins/status/1288427279291265024",
              "Link2": "https://twitter.com/EndSoundtrack/status/1288425411844571136"
            },
            {
              "id": 723,
              "date_text": "July 29th",
              "text": "Independent journalist arrested",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/FancyJenkins/status/1288427279291265024",
              "Link2": "https://twitter.com/EndSoundtrack/status/1288425411844571136"
            },
            {
              "id": 724,
              "date_text": "July 29th",
              "text": "Independent journalist arrested",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/FancyJenkins/status/1288427279291265024",
              "Link2": "https://twitter.com/EndSoundtrack/status/1288425411844571136"
            },
            {
              "id": 725,
              "date_text": "July 29th",
              "text": "Individual pepper-sprayed by federal police",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/TheHannahRay/status/1288425603205488643",
              "Link2": ""
            },
            {
              "id": 726,
              "date_text": "July 29th",
              "text": "Individual pepper-sprayed by federal police",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/TheHannahRay/status/1288425603205488643",
              "Link2": ""
            },
            {
              "id": 727,
              "date_text": "July 29th",
              "text": "Individual pepper-sprayed by federal police",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/TheHannahRay/status/1288425603205488643",
              "Link2": ""
            },
            {
              "id": 728,
              "date_text": "July 29th",
              "text": "Officers fire tear gas at peaceful protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/TheRealCoryElia/status/1288716099224104961",
              "Link2": "https://twitter.com/hungrybowtie/status/1288715582112591872"
            },
            {
              "id": 729,
              "date_text": "July 29th",
              "text": "Officers fire tear gas at peaceful protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/TheRealCoryElia/status/1288716099224104961",
              "Link2": "https://twitter.com/hungrybowtie/status/1288715582112591872"
            },
            {
              "id": 730,
              "date_text": "July 29th",
              "text": "Officers fire tear gas at peaceful protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/TheRealCoryElia/status/1288716099224104961",
              "Link2": "https://twitter.com/hungrybowtie/status/1288715582112591872"
            },
            {
              "id": 731,
              "date_text": "July 29th",
              "text": "Livestreamer shot with marking rounds",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/TheRealCoryElia/status/1288725204886147074",
              "Link2": "https://twitter.com/TheRealCoryElia/status/1288728124457250816"
            },
            {
              "id": 732,
              "date_text": "July 29th",
              "text": "Livestreamer shot with marking rounds",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/TheRealCoryElia/status/1288725204886147074",
              "Link2": "https://twitter.com/TheRealCoryElia/status/1288728124457250816"
            },
            {
              "id": 733,
              "date_text": "July 29th",
              "text": "Livestreamer shot with marking rounds",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/TheRealCoryElia/status/1288725204886147074",
              "Link2": "https://twitter.com/TheRealCoryElia/status/1288728124457250816"
            },
            {
              "id": 734,
              "date_text": "July 29th",
              "text": "Officers fire tear gas at protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/hungrybowtie/status/1288723596093734913",
              "Link2": "https://twitter.com/hungrybowtie/status/1288724064043859969"
            },
            {
              "id": 735,
              "date_text": "July 29th",
              "text": "Officers fire tear gas at protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/hungrybowtie/status/1288723596093734913",
              "Link2": "https://twitter.com/hungrybowtie/status/1288724064043859969"
            },
            {
              "id": 736,
              "date_text": "July 29th",
              "text": "Officers fire tear gas at protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/hungrybowtie/status/1288723596093734913",
              "Link2": "https://twitter.com/hungrybowtie/status/1288724064043859969"
            },
            {
              "id": 737,
              "date_text": "July 29th",
              "text": "Officers pepper spray kneeling protester",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/1misanthrophile/status/1288740269911707648",
              "Link2": "https://twitter.com/hungrybowtie/status/1288740931827429376"
            },
            {
              "id": 738,
              "date_text": "July 29th",
              "text": "Officers pepper spray kneeling protester",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/1misanthrophile/status/1288740269911707648",
              "Link2": "https://twitter.com/hungrybowtie/status/1288740931827429376"
            },
            {
              "id": 739,
              "date_text": "July 29th",
              "text": "Officers pepper spray kneeling protester",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/1misanthrophile/status/1288740269911707648",
              "Link2": "https://twitter.com/hungrybowtie/status/1288740931827429376"
            },
            {
              "id": 740,
              "date_text": "July 29th",
              "text": "Officers use tear gas to push protesters from Justice Center",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/hungrybowtie/status/1288728631800295424",
              "Link2": "https://twitter.com/hungrybowtie/status/1288731525568028673"
            },
            {
              "id": 741,
              "date_text": "July 29th",
              "text": "Officers use tear gas to push protesters from Justice Center",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/hungrybowtie/status/1288728631800295424",
              "Link2": "https://twitter.com/hungrybowtie/status/1288731525568028673"
            },
            {
              "id": 742,
              "date_text": "July 29th",
              "text": "Officers use tear gas to push protesters from Justice Center",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/hungrybowtie/status/1288728631800295424",
              "Link2": "https://twitter.com/hungrybowtie/status/1288731525568028673"
            },
            {
              "id": 743,
              "date_text": "July 30th",
              "text": "Protester singled out and arrested",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/hungrybowtie/status/1288737289862930432",
              "Link2": ""
            },
            {
              "id": 744,
              "date_text": "July 30th",
              "text": "Protester singled out and arrested",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/hungrybowtie/status/1288737289862930432",
              "Link2": ""
            },
            {
              "id": 745,
              "date_text": "July 30th",
              "text": "Protester singled out and arrested",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/hungrybowtie/status/1288737289862930432",
              "Link2": ""
            },
            {
              "id": 746,
              "date_text": "July 30th",
              "text": "Officers deploy tear gas and stun grenades against small group of protesters",
              "tags_str": "Projectiles, Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/hungrybowtie/status/1288753690795364352",
              "Link2": "https://twitter.com/hungrybowtie/status/1288754104492204033"
            },
            {
              "id": 747,
              "date_text": "July 30th",
              "text": "Officers deploy tear gas and stun grenades against small group of protesters",
              "tags_str": "Projectiles, Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/hungrybowtie/status/1288753690795364352",
              "Link2": "https://twitter.com/hungrybowtie/status/1288754104492204033"
            },
            {
              "id": 748,
              "date_text": "July 30th",
              "text": "Officers deploy tear gas and stun grenades against small group of protesters",
              "tags_str": "Projectiles, Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/hungrybowtie/status/1288753690795364352",
              "Link2": "https://twitter.com/hungrybowtie/status/1288754104492204033"
            },
            {
              "id": 749,
              "date_text": "July 30th",
              "text": "Officer shoots at protesters without apparent cause",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/hungrybowtie/status/1288734291334053888",
              "Link2": ""
            },
            {
              "id": 750,
              "date_text": "July 30th",
              "text": "Officer shoots at protesters without apparent cause",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/hungrybowtie/status/1288734291334053888",
              "Link2": ""
            },
            {
              "id": 751,
              "date_text": "July 30th",
              "text": "Officer shoots at protesters without apparent cause",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/hungrybowtie/status/1288734291334053888",
              "Link2": ""
            },
            {
              "id": 752,
              "date_text": "July 30th",
              "text": "Reporter shot in knee",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MaranieRae/status/1288941481995071488",
              "Link2": "https://twitter.com/MaranieRae/status/1289371801579950080"
            },
            {
              "id": 753,
              "date_text": "July 30th",
              "text": "Reporter shot in knee",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MaranieRae/status/1288941481995071488",
              "Link2": "https://twitter.com/MaranieRae/status/1289371801579950080"
            },
            {
              "id": 754,
              "date_text": "July 30th",
              "text": "Reporter shot in knee",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MaranieRae/status/1288941481995071488",
              "Link2": "https://twitter.com/MaranieRae/status/1289371801579950080"
            },
            {
              "id": 755,
              "date_text": "August 1st",
              "text": "Journalist shoved and pepper-sprayed",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/FancyJenkins/status/1289808596243374082",
              "Link2": "https://twitter.com/hungrybowtie/status/1289807143961427970"
            },
            {
              "id": 756,
              "date_text": "August 1st",
              "text": "Journalist shoved and pepper-sprayed",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/FancyJenkins/status/1289808596243374082",
              "Link2": "https://twitter.com/hungrybowtie/status/1289807143961427970"
            },
            {
              "id": 757,
              "date_text": "August 1st",
              "text": "Journalist shoved and pepper-sprayed",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/FancyJenkins/status/1289808596243374082",
              "Link2": "https://twitter.com/hungrybowtie/status/1289807143961427970"
            },
            {
              "id": 758,
              "date_text": "August 1st",
              "text": "Police charge, tackle, and pepper spray protesters",
              "tags_str": "Hard, Projectiles, Chemical",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/hungrybowtie/status/1289791877223350273",
              "Link2": "https://twitter.com/hungrybowtie/status/1289792999291985922"
            },
            {
              "id": 759,
              "date_text": "August 1st",
              "text": "Police charge, tackle, and pepper spray protesters",
              "tags_str": "Hard, Projectiles, Chemical",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/hungrybowtie/status/1289791877223350273",
              "Link2": "https://twitter.com/hungrybowtie/status/1289792999291985922"
            },
            {
              "id": 760,
              "date_text": "August 1st",
              "text": "Police charge, tackle, and pepper spray protesters",
              "tags_str": "Hard, Projectiles, Chemical",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/hungrybowtie/status/1289791877223350273",
              "Link2": "https://twitter.com/hungrybowtie/status/1289792999291985922"
            },
            {
              "id": 761,
              "date_text": "August 1st",
              "text": "Police slash journalist's tires",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/hungrybowtie/status/1289793915332079617",
              "Link2": "https://www.pscp.tv/w/1MnGndnYllExO"
            },
            {
              "id": 762,
              "date_text": "August 1st",
              "text": "Police slash journalist's tires",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/hungrybowtie/status/1289793915332079617",
              "Link2": "https://www.pscp.tv/w/1MnGndnYllExO"
            },
            {
              "id": 763,
              "date_text": "August 1st",
              "text": "Police slash journalist's tires",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/hungrybowtie/status/1289793915332079617",
              "Link2": "https://www.pscp.tv/w/1MnGndnYllExO"
            },
            {
              "id": 764,
              "date_text": "August 1st",
              "text": "Police charge at protesters",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://github.com/2020PB/police-brutality/issues/1270",
              "Link2": ""
            },
            {
              "id": 765,
              "date_text": "August 1st",
              "text": "Police charge at protesters",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://github.com/2020PB/police-brutality/issues/1270",
              "Link2": ""
            },
            {
              "id": 766,
              "date_text": "August 1st",
              "text": "Police charge at protesters",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://github.com/2020PB/police-brutality/issues/1270",
              "Link2": ""
            },
            {
              "id": 767,
              "date_text": "August 3rd",
              "text": "Police charge and assault protesters",
              "tags_str": "Hard",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/1misanthrophile/status/1290547444766277633",
              "Link2": "https://twitter.com/1misanthrophile/status/1290550512731828225"
            },
            {
              "id": 768,
              "date_text": "August 3rd",
              "text": "Police charge and assault protesters",
              "tags_str": "Hard",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/1misanthrophile/status/1290547444766277633",
              "Link2": "https://twitter.com/1misanthrophile/status/1290550512731828225"
            },
            {
              "id": 769,
              "date_text": "August 3rd",
              "text": "Police charge and assault protesters",
              "tags_str": "Hard",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/1misanthrophile/status/1290547444766277633",
              "Link2": "https://twitter.com/1misanthrophile/status/1290550512731828225"
            },
            {
              "id": 770,
              "date_text": "August 3rd",
              "text": "Police pepper spray protester",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/R3volutionDaddy/status/1290559156756213761",
              "Link2": ""
            },
            {
              "id": 771,
              "date_text": "August 3rd",
              "text": "Police pepper spray protester",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/R3volutionDaddy/status/1290559156756213761",
              "Link2": ""
            },
            {
              "id": 772,
              "date_text": "August 3rd",
              "text": "Police pepper spray protester",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/R3volutionDaddy/status/1290559156756213761",
              "Link2": ""
            },
            {
              "id": 773,
              "date_text": "August 3rd",
              "text": "Individuals pepper sprayed",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/TheHannahRay/status/1290550066814410753",
              "Link2": ""
            },
            {
              "id": 774,
              "date_text": "August 3rd",
              "text": "Individuals pepper sprayed",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/TheHannahRay/status/1290550066814410753",
              "Link2": ""
            },
            {
              "id": 775,
              "date_text": "August 3rd",
              "text": "Individuals pepper sprayed",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/TheHannahRay/status/1290550066814410753",
              "Link2": ""
            },
            {
              "id": 776,
              "date_text": "August 4th",
              "text": "Journalist hospitalized after arrest; protesters and journalists pepper sprayed",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrOlmos/status/1290932904139210753",
              "Link2": "https://twitter.com/MrOlmos/status/1290933119139188737"
            },
            {
              "id": 777,
              "date_text": "August 4th",
              "text": "Journalist hospitalized after arrest; protesters and journalists pepper sprayed",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrOlmos/status/1290932904139210753",
              "Link2": "https://twitter.com/MrOlmos/status/1290933119139188737"
            },
            {
              "id": 778,
              "date_text": "August 4th",
              "text": "Journalist hospitalized after arrest; protesters and journalists pepper sprayed",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrOlmos/status/1290932904139210753",
              "Link2": "https://twitter.com/MrOlmos/status/1290933119139188737"
            },
            {
              "id": 779,
              "date_text": "August 4th",
              "text": "Police throw explosives as they leave",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/garbagefilth/status/1290916978509529089",
              "Link2": "https://twitter.com/garbagefilth/status/1290912827322974208"
            },
            {
              "id": 780,
              "date_text": "August 4th",
              "text": "Police throw explosives as they leave",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/garbagefilth/status/1290916978509529089",
              "Link2": "https://twitter.com/garbagefilth/status/1290912827322974208"
            },
            {
              "id": 781,
              "date_text": "August 4th",
              "text": "Police throw explosives as they leave",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/garbagefilth/status/1290916978509529089",
              "Link2": "https://twitter.com/garbagefilth/status/1290912827322974208"
            },
            {
              "id": 782,
              "date_text": "August 5th",
              "text": "Police respond to vandalism with excessive force",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/hungrybowtie/status/1291240005281562624",
              "Link2": "https://twitter.com/hungrybowtie/status/1291240595759886336"
            },
            {
              "id": 783,
              "date_text": "August 5th",
              "text": "Police respond to vandalism with excessive force",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/hungrybowtie/status/1291240005281562624",
              "Link2": "https://twitter.com/hungrybowtie/status/1291240595759886336"
            },
            {
              "id": 784,
              "date_text": "August 5th",
              "text": "Police respond to vandalism with excessive force",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/hungrybowtie/status/1291240005281562624",
              "Link2": "https://twitter.com/hungrybowtie/status/1291240595759886336"
            },
            {
              "id": 785,
              "date_text": "August 5th",
              "text": "Police charge protesters a second time",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrOlmos/status/1291246658760486913",
              "Link2": "https://twitter.com/MrOlmos/status/1291246658760486913"
            },
            {
              "id": 786,
              "date_text": "August 5th",
              "text": "Police charge protesters a second time",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrOlmos/status/1291246658760486913",
              "Link2": "https://twitter.com/MrOlmos/status/1291246658760486913"
            },
            {
              "id": 787,
              "date_text": "August 5th",
              "text": "Police charge protesters a second time",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrOlmos/status/1291246658760486913",
              "Link2": "https://twitter.com/MrOlmos/status/1291246658760486913"
            },
            {
              "id": 788,
              "date_text": "August 5th",
              "text": "Police shove members of the press during arrests",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/R3volutionDaddy/status/1291246837005815808",
              "Link2": ""
            },
            {
              "id": 789,
              "date_text": "August 5th",
              "text": "Police shove members of the press during arrests",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/R3volutionDaddy/status/1291246837005815808",
              "Link2": ""
            },
            {
              "id": 790,
              "date_text": "August 5th",
              "text": "Police shove members of the press during arrests",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/R3volutionDaddy/status/1291246837005815808",
              "Link2": ""
            },
            {
              "id": 791,
              "date_text": "August 6th",
              "text": "Police puncture tires of Snack Van",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/PDXzane/status/1291608110591692800",
              "Link2": "https://twitter.com/MrOlmos/status/1291610788033990656"
            },
            {
              "id": 792,
              "date_text": "August 6th",
              "text": "Police puncture tires of Snack Van",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/PDXzane/status/1291608110591692800",
              "Link2": "https://twitter.com/MrOlmos/status/1291610788033990656"
            },
            {
              "id": 793,
              "date_text": "August 6th",
              "text": "Police puncture tires of Snack Van",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/PDXzane/status/1291608110591692800",
              "Link2": "https://twitter.com/MrOlmos/status/1291610788033990656"
            },
            {
              "id": 794,
              "date_text": "August 6th",
              "text": "Police shove man with disability",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/GriffinMalone6/status/1291644306323673090",
              "Link2": "https://twitter.com/Muzzakh/status/1291741137896476672"
            },
            {
              "id": 795,
              "date_text": "August 6th",
              "text": "Police shove man with disability",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/GriffinMalone6/status/1291644306323673090",
              "Link2": "https://twitter.com/Muzzakh/status/1291741137896476672"
            },
            {
              "id": 796,
              "date_text": "August 6th",
              "text": "Police shove man with disability",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/GriffinMalone6/status/1291644306323673090",
              "Link2": "https://twitter.com/Muzzakh/status/1291741137896476672"
            },
            {
              "id": 797,
              "date_text": "August 6th",
              "text": "Officer singles out and pepper sprays protester without apparent cause",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/GriffinMalone6/status/1291649145363554309",
              "Link2": ""
            },
            {
              "id": 798,
              "date_text": "August 6th",
              "text": "Officer singles out and pepper sprays protester without apparent cause",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/GriffinMalone6/status/1291649145363554309",
              "Link2": ""
            },
            {
              "id": 799,
              "date_text": "August 6th",
              "text": "Officer singles out and pepper sprays protester without apparent cause",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/GriffinMalone6/status/1291649145363554309",
              "Link2": ""
            },
            {
              "id": 800,
              "date_text": "August 6th",
              "text": "Police shove members of the press",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrOlmos/status/1291611855819964416",
              "Link2": "https://twitter.com/hungrybowtie/status/1291613303114883072"
            },
            {
              "id": 801,
              "date_text": "August 6th",
              "text": "Police shove members of the press",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrOlmos/status/1291611855819964416",
              "Link2": "https://twitter.com/hungrybowtie/status/1291613303114883072"
            },
            {
              "id": 802,
              "date_text": "August 6th",
              "text": "Police shove members of the press",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrOlmos/status/1291611855819964416",
              "Link2": "https://twitter.com/hungrybowtie/status/1291613303114883072"
            },
            {
              "id": 803,
              "date_text": "August 6th",
              "text": "Woman arrested and pepper sprayed after yelling at police",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/_WhatRiot/status/1291631618319253505",
              "Link2": "https://www.reddit.com/r/PublicFreakout/comments/i6dg76/portland_police_arrest_women_for_standing_on/"
            },
            {
              "id": 804,
              "date_text": "August 6th",
              "text": "Woman arrested and pepper sprayed after yelling at police",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/_WhatRiot/status/1291631618319253505",
              "Link2": "https://www.reddit.com/r/PublicFreakout/comments/i6dg76/portland_police_arrest_women_for_standing_on/"
            },
            {
              "id": 805,
              "date_text": "August 6th",
              "text": "Woman arrested and pepper sprayed after yelling at police",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/_WhatRiot/status/1291631618319253505",
              "Link2": "https://www.reddit.com/r/PublicFreakout/comments/i6dg76/portland_police_arrest_women_for_standing_on/"
            },
            {
              "id": 806,
              "date_text": "August 7th",
              "text": "Member of the press pepper sprayed",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/GriffinMalone6/status/1291645839681576960",
              "Link2": ""
            },
            {
              "id": 807,
              "date_text": "August 7th",
              "text": "Member of the press pepper sprayed",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/GriffinMalone6/status/1291645839681576960",
              "Link2": ""
            },
            {
              "id": 808,
              "date_text": "August 7th",
              "text": "Member of the press pepper sprayed",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/GriffinMalone6/status/1291645839681576960",
              "Link2": ""
            },
            {
              "id": 809,
              "date_text": "August 7th",
              "text": "Officers grab and shove protesters",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/GriffinMalone6/status/1291647242022137856",
              "Link2": ""
            },
            {
              "id": 810,
              "date_text": "August 7th",
              "text": "Officers grab and shove protesters",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/GriffinMalone6/status/1291647242022137856",
              "Link2": ""
            },
            {
              "id": 811,
              "date_text": "August 7th",
              "text": "Officers grab and shove protesters",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/GriffinMalone6/status/1291647242022137856",
              "Link2": ""
            },
            {
              "id": 812,
              "date_text": "August 7th",
              "text": "Officers shove press during dispersal order",
              "tags_str": "Other, Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/R3volutionDaddy/status/1291652345613312000",
              "Link2": "https://twitter.com/R3volutionDaddy/status/1291676448026050560"
            },
            {
              "id": 813,
              "date_text": "August 7th",
              "text": "Officers shove press during dispersal order",
              "tags_str": "Other, Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/R3volutionDaddy/status/1291652345613312000",
              "Link2": "https://twitter.com/R3volutionDaddy/status/1291676448026050560"
            },
            {
              "id": 814,
              "date_text": "August 7th",
              "text": "Officers shove press during dispersal order",
              "tags_str": "Other, Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/R3volutionDaddy/status/1291652345613312000",
              "Link2": "https://twitter.com/R3volutionDaddy/status/1291676448026050560"
            },
            {
              "id": 815,
              "date_text": "August 7th",
              "text": "Reporter arrested",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/GriffinMalone6/status/1291959372268990464",
              "Link2": "https://twitter.com/GriffinMalone6/status/1291959457295904769"
            },
            {
              "id": 816,
              "date_text": "August 7th",
              "text": "Reporter arrested",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/GriffinMalone6/status/1291959372268990464",
              "Link2": "https://twitter.com/GriffinMalone6/status/1291959457295904769"
            },
            {
              "id": 817,
              "date_text": "August 7th",
              "text": "Reporter arrested",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/GriffinMalone6/status/1291959372268990464",
              "Link2": "https://twitter.com/GriffinMalone6/status/1291959457295904769"
            },
            {
              "id": 818,
              "date_text": "August 7th",
              "text": "Officer knocks helmet off protester's head; officers refuse to allow him to retrieve it",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/danielvmedia/status/1292228817889554432",
              "Link2": ""
            },
            {
              "id": 819,
              "date_text": "August 7th",
              "text": "Officer knocks helmet off protester's head; officers refuse to allow him to retrieve it",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/danielvmedia/status/1292228817889554432",
              "Link2": ""
            },
            {
              "id": 820,
              "date_text": "August 7th",
              "text": "Officer knocks helmet off protester's head; officers refuse to allow him to retrieve it",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/danielvmedia/status/1292228817889554432",
              "Link2": ""
            },
            {
              "id": 821,
              "date_text": "August 7th",
              "text": "Officers strike individual with batons",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/danielvmedia/status/1292228819588452359",
              "Link2": ""
            },
            {
              "id": 822,
              "date_text": "August 7th",
              "text": "Officers strike individual with batons",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/danielvmedia/status/1292228819588452359",
              "Link2": ""
            },
            {
              "id": 823,
              "date_text": "August 7th",
              "text": "Officers strike individual with batons",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/danielvmedia/status/1292228819588452359",
              "Link2": ""
            },
            {
              "id": 824,
              "date_text": "August 8th",
              "text": "Individual held on the ground, pepper sprayed, punched, and arrested",
              "tags_str": "Soft, Hard, Projectiles, Chemical",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/_WhatRiot/status/1292012255714787330",
              "Link2": ""
            },
            {
              "id": 825,
              "date_text": "August 8th",
              "text": "Individual held on the ground, pepper sprayed, punched, and arrested",
              "tags_str": "Soft, Hard, Projectiles, Chemical",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/_WhatRiot/status/1292012255714787330",
              "Link2": ""
            },
            {
              "id": 826,
              "date_text": "August 8th",
              "text": "Individual held on the ground, pepper sprayed, punched, and arrested",
              "tags_str": "Soft, Hard, Projectiles, Chemical",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/_WhatRiot/status/1292012255714787330",
              "Link2": ""
            },
            {
              "id": 827,
              "date_text": "August 8th",
              "text": "Violent charge made by police",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/R3volutionDaddy/status/1292023755502497792",
              "Link2": "https://twitter.com/R3volutionDaddy/status/1292024802333675521"
            },
            {
              "id": 828,
              "date_text": "August 8th",
              "text": "Violent charge made by police",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/R3volutionDaddy/status/1292023755502497792",
              "Link2": "https://twitter.com/R3volutionDaddy/status/1292024802333675521"
            },
            {
              "id": 829,
              "date_text": "August 8th",
              "text": "Violent charge made by police",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/R3volutionDaddy/status/1292023755502497792",
              "Link2": "https://twitter.com/R3volutionDaddy/status/1292024802333675521"
            },
            {
              "id": 830,
              "date_text": "August 8th",
              "text": "Police use tear gas and impact munitions against protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/KohzKah/status/1292352907367477249",
              "Link2": "https://twitter.com/GriffinMalone6/status/1292363451025694720"
            },
            {
              "id": 831,
              "date_text": "August 8th",
              "text": "Police use tear gas and impact munitions against protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/KohzKah/status/1292352907367477249",
              "Link2": "https://twitter.com/GriffinMalone6/status/1292363451025694720"
            },
            {
              "id": 832,
              "date_text": "August 8th",
              "text": "Police use tear gas and impact munitions against protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/KohzKah/status/1292352907367477249",
              "Link2": "https://twitter.com/GriffinMalone6/status/1292363451025694720"
            },
            {
              "id": 833,
              "date_text": "August 8th",
              "text": "Journalist shot in arm",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/suzettesmith/status/1292357734357069824",
              "Link2": "https://twitter.com/suzettesmith/status/1292357933552947201"
            },
            {
              "id": 834,
              "date_text": "August 8th",
              "text": "Journalist shot in arm",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/suzettesmith/status/1292357734357069824",
              "Link2": "https://twitter.com/suzettesmith/status/1292357933552947201"
            },
            {
              "id": 835,
              "date_text": "August 8th",
              "text": "Journalist shot in arm",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/suzettesmith/status/1292357734357069824",
              "Link2": "https://twitter.com/suzettesmith/status/1292357933552947201"
            },
            {
              "id": 836,
              "date_text": "August 8th",
              "text": "Journalist shoved by police",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/Shauna_Sowersby/status/1292354667901407232",
              "Link2": ""
            },
            {
              "id": 837,
              "date_text": "August 8th",
              "text": "Journalist shoved by police",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/Shauna_Sowersby/status/1292354667901407232",
              "Link2": ""
            },
            {
              "id": 838,
              "date_text": "August 8th",
              "text": "Journalist shoved by police",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/Shauna_Sowersby/status/1292354667901407232",
              "Link2": ""
            },
            {
              "id": 839,
              "date_text": "August 9th",
              "text": "Police throw explosives at crowd as they drive away",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/Shauna_Sowersby/status/1292365400403881984",
              "Link2": ""
            },
            {
              "id": 840,
              "date_text": "August 9th",
              "text": "Police throw explosives at crowd as they drive away",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/Shauna_Sowersby/status/1292365400403881984",
              "Link2": ""
            },
            {
              "id": 841,
              "date_text": "August 9th",
              "text": "Police throw explosives at crowd as they drive away",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/Shauna_Sowersby/status/1292365400403881984",
              "Link2": ""
            },
            {
              "id": 842,
              "date_text": "August 9th",
              "text": "Journalist shoved by police",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/1misanthrophile/status/1292694939311017992",
              "Link2": "https://twitter.com/PDocumentarians/status/1292703127053819904"
            },
            {
              "id": 843,
              "date_text": "August 9th",
              "text": "Journalist shoved by police",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/1misanthrophile/status/1292694939311017992",
              "Link2": "https://twitter.com/PDocumentarians/status/1292703127053819904"
            },
            {
              "id": 844,
              "date_text": "August 9th",
              "text": "Journalist shoved by police",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/1misanthrophile/status/1292694939311017992",
              "Link2": "https://twitter.com/PDocumentarians/status/1292703127053819904"
            },
            {
              "id": 845,
              "date_text": "August 10th",
              "text": "Bystander shot in the head",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/Mestizo43/status/1292758596128665600",
              "Link2": ""
            },
            {
              "id": 846,
              "date_text": "August 10th",
              "text": "Bystander shot in the head",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/Mestizo43/status/1292758596128665600",
              "Link2": ""
            },
            {
              "id": 847,
              "date_text": "August 10th",
              "text": "Bystander shot in the head",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/Mestizo43/status/1292758596128665600",
              "Link2": ""
            },
            {
              "id": 848,
              "date_text": "August 10th",
              "text": "Police charge at protesters",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrOlmos/status/1293069575597121536",
              "Link2": "https://twitter.com/MrOlmos/status/1293070710970056705"
            },
            {
              "id": 849,
              "date_text": "August 10th",
              "text": "Police charge at protesters",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrOlmos/status/1293069575597121536",
              "Link2": "https://twitter.com/MrOlmos/status/1293070710970056705"
            },
            {
              "id": 850,
              "date_text": "August 10th",
              "text": "Police charge at protesters",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrOlmos/status/1293069575597121536",
              "Link2": "https://twitter.com/MrOlmos/status/1293070710970056705"
            },
            {
              "id": 851,
              "date_text": "August 10th",
              "text": "Police threaten journalist",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrOlmos/status/1293073348444864513",
              "Link2": ""
            },
            {
              "id": 852,
              "date_text": "August 10th",
              "text": "Police threaten journalist",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrOlmos/status/1293073348444864513",
              "Link2": ""
            },
            {
              "id": 853,
              "date_text": "August 10th",
              "text": "Police threaten journalist",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrOlmos/status/1293073348444864513",
              "Link2": ""
            },
            {
              "id": 854,
              "date_text": "August 11th",
              "text": "Police shove members of the press",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/matlockartist/status/1293113555101683714",
              "Link2": "https://twitter.com/Mestizo43/status/1293120463715983360"
            },
            {
              "id": 855,
              "date_text": "August 11th",
              "text": "Police shove members of the press",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/matlockartist/status/1293113555101683714",
              "Link2": "https://twitter.com/Mestizo43/status/1293120463715983360"
            },
            {
              "id": 856,
              "date_text": "August 11th",
              "text": "Police shove members of the press",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/matlockartist/status/1293113555101683714",
              "Link2": "https://twitter.com/Mestizo43/status/1293120463715983360"
            },
            {
              "id": 857,
              "date_text": "August 12th",
              "text": "Police shove and arrest protester",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/hungrybowtie/status/1293804460309807104",
              "Link2": ""
            },
            {
              "id": 858,
              "date_text": "August 12th",
              "text": "Police shove and arrest protester",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/hungrybowtie/status/1293804460309807104",
              "Link2": ""
            },
            {
              "id": 859,
              "date_text": "August 12th",
              "text": "Police shove and arrest protester",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/hungrybowtie/status/1293804460309807104",
              "Link2": ""
            },
            {
              "id": 860,
              "date_text": "August 13th",
              "text": "Police assault protesters with batons",
              "tags_str": "Hard, Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrOlmos/status/1293807939925417985",
              "Link2": "https://twitter.com/BitterTier/status/1293860665422041089"
            },
            {
              "id": 861,
              "date_text": "August 13th",
              "text": "Police assault protesters with batons",
              "tags_str": "Hard, Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrOlmos/status/1293807939925417985",
              "Link2": "https://twitter.com/BitterTier/status/1293860665422041089"
            },
            {
              "id": 862,
              "date_text": "August 13th",
              "text": "Police assault protesters with batons",
              "tags_str": "Hard, Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrOlmos/status/1293807939925417985",
              "Link2": "https://twitter.com/BitterTier/status/1293860665422041089"
            },
            {
              "id": 863,
              "date_text": "August 13th",
              "text": "Police tear gas protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrOlmos/status/1293807939925417985",
              "Link2": "https://twitter.com/MrOlmos/status/1293815460715089920"
            },
            {
              "id": 864,
              "date_text": "August 13th",
              "text": "Police tear gas protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrOlmos/status/1293807939925417985",
              "Link2": "https://twitter.com/MrOlmos/status/1293815460715089920"
            },
            {
              "id": 865,
              "date_text": "August 13th",
              "text": "Police tear gas protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrOlmos/status/1293807939925417985",
              "Link2": "https://twitter.com/MrOlmos/status/1293815460715089920"
            },
            {
              "id": 866,
              "date_text": "August 13th",
              "text": "Police shove protesters on staircase, punch arrestee in stomach",
              "tags_str": "Soft, Hard",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://mobile.twitter.com/1misanthrophile/status/1293812124204978176",
              "Link2": "https://mobile.twitter.com/Johnnthelefty/status/1293827373075279872"
            },
            {
              "id": 867,
              "date_text": "August 13th",
              "text": "Police shove protesters on staircase, punch arrestee in stomach",
              "tags_str": "Soft, Hard",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://mobile.twitter.com/1misanthrophile/status/1293812124204978176",
              "Link2": "https://mobile.twitter.com/Johnnthelefty/status/1293827373075279872"
            },
            {
              "id": 868,
              "date_text": "August 13th",
              "text": "Police shove protesters on staircase, punch arrestee in stomach",
              "tags_str": "Soft, Hard",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://mobile.twitter.com/1misanthrophile/status/1293812124204978176",
              "Link2": "https://mobile.twitter.com/Johnnthelefty/status/1293827373075279872"
            },
            {
              "id": 869,
              "date_text": "August 13th",
              "text": "Police slash tires of van",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://mobile.twitter.com/IwriteOK/status/1293812356640735232",
              "Link2": "https://mobile.twitter.com/IwriteOK/status/1293820768661381122"
            },
            {
              "id": 870,
              "date_text": "August 13th",
              "text": "Police slash tires of van",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://mobile.twitter.com/IwriteOK/status/1293812356640735232",
              "Link2": "https://mobile.twitter.com/IwriteOK/status/1293820768661381122"
            },
            {
              "id": 871,
              "date_text": "August 13th",
              "text": "Police slash tires of van",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://mobile.twitter.com/IwriteOK/status/1293812356640735232",
              "Link2": "https://mobile.twitter.com/IwriteOK/status/1293820768661381122"
            },
            {
              "id": 872,
              "date_text": "August 13th",
              "text": "Police throw protester to the ground",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://mobile.twitter.com/Johnnthelefty/status/1293807313417957376",
              "Link2": ""
            },
            {
              "id": 873,
              "date_text": "August 13th",
              "text": "Police throw protester to the ground",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://mobile.twitter.com/Johnnthelefty/status/1293807313417957376",
              "Link2": ""
            },
            {
              "id": 874,
              "date_text": "August 13th",
              "text": "Police throw protester to the ground",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://mobile.twitter.com/Johnnthelefty/status/1293807313417957376",
              "Link2": ""
            },
            {
              "id": 875,
              "date_text": "August 14th",
              "text": "Police charge at and beat protesters with shields",
              "tags_str": "Hard, Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrOlmos/status/1294506475809681409",
              "Link2": "https://twitter.com/1misanthrophile/status/1294507402188865537"
            },
            {
              "id": 876,
              "date_text": "August 14th",
              "text": "Police charge at and beat protesters with shields",
              "tags_str": "Hard, Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrOlmos/status/1294506475809681409",
              "Link2": "https://twitter.com/1misanthrophile/status/1294507402188865537"
            },
            {
              "id": 877,
              "date_text": "August 14th",
              "text": "Police charge at and beat protesters with shields",
              "tags_str": "Hard, Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrOlmos/status/1294506475809681409",
              "Link2": "https://twitter.com/1misanthrophile/status/1294507402188865537"
            },
            {
              "id": 878,
              "date_text": "August 14th",
              "text": "Officer stomps on protester trapped under shield",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/danielvmedia/status/1294671439581212677",
              "Link2": ""
            },
            {
              "id": 879,
              "date_text": "August 14th",
              "text": "Officer stomps on protester trapped under shield",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/danielvmedia/status/1294671439581212677",
              "Link2": ""
            },
            {
              "id": 880,
              "date_text": "August 14th",
              "text": "Officer stomps on protester trapped under shield",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/danielvmedia/status/1294671439581212677",
              "Link2": ""
            },
            {
              "id": 881,
              "date_text": "August 14th",
              "text": "Officer shoves stumbling protester",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrOlmos/status/1294508631845552128",
              "Link2": ""
            },
            {
              "id": 882,
              "date_text": "August 14th",
              "text": "Officer shoves stumbling protester",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrOlmos/status/1294508631845552128",
              "Link2": ""
            },
            {
              "id": 883,
              "date_text": "August 14th",
              "text": "Officer shoves stumbling protester",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrOlmos/status/1294508631845552128",
              "Link2": ""
            },
            {
              "id": 884,
              "date_text": "August 14th",
              "text": "Officer shoves reporter",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/hungrybowtie/status/1294530884587069440",
              "Link2": ""
            },
            {
              "id": 885,
              "date_text": "August 14th",
              "text": "Officer shoves reporter",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/hungrybowtie/status/1294530884587069440",
              "Link2": ""
            },
            {
              "id": 886,
              "date_text": "August 14th",
              "text": "Officer shoves reporter",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/hungrybowtie/status/1294530884587069440",
              "Link2": ""
            },
            {
              "id": 887,
              "date_text": "August 14th",
              "text": "Officer shove compliant protesters",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/hungrybowtie/status/1294515890990411776",
              "Link2": ""
            },
            {
              "id": 888,
              "date_text": "August 14th",
              "text": "Officer shove compliant protesters",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/hungrybowtie/status/1294515890990411776",
              "Link2": ""
            },
            {
              "id": 889,
              "date_text": "August 14th",
              "text": "Officer shove compliant protesters",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/hungrybowtie/status/1294515890990411776",
              "Link2": ""
            },
            {
              "id": 890,
              "date_text": "August 14th",
              "text": "Officer shoves protester on the sidewalk",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/1misanthrophile/status/1294507959553126400",
              "Link2": ""
            },
            {
              "id": 891,
              "date_text": "August 14th",
              "text": "Officer shoves protester on the sidewalk",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/1misanthrophile/status/1294507959553126400",
              "Link2": ""
            },
            {
              "id": 892,
              "date_text": "August 14th",
              "text": "Officer shoves protester on the sidewalk",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/1misanthrophile/status/1294507959553126400",
              "Link2": ""
            },
            {
              "id": 893,
              "date_text": "August 14th",
              "text": "Police repeatedly shove drummer",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrOlmos/status/1294507048663543808",
              "Link2": ""
            },
            {
              "id": 894,
              "date_text": "August 14th",
              "text": "Police repeatedly shove drummer",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrOlmos/status/1294507048663543808",
              "Link2": ""
            },
            {
              "id": 895,
              "date_text": "August 14th",
              "text": "Police repeatedly shove drummer",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrOlmos/status/1294507048663543808",
              "Link2": ""
            },
            {
              "id": 896,
              "date_text": "August 15th",
              "text": "Police slash tires of bystander vehicle",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/badbirdiebad/status/1294540208600301570",
              "Link2": "https://twitter.com/hungrybowtie/status/1294551688959811584"
            },
            {
              "id": 897,
              "date_text": "August 15th",
              "text": "Police slash tires of bystander vehicle",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/badbirdiebad/status/1294540208600301570",
              "Link2": "https://twitter.com/hungrybowtie/status/1294551688959811584"
            },
            {
              "id": 898,
              "date_text": "August 15th",
              "text": "Police slash tires of bystander vehicle",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/badbirdiebad/status/1294540208600301570",
              "Link2": "https://twitter.com/hungrybowtie/status/1294551688959811584"
            },
            {
              "id": 899,
              "date_text": "August 15th",
              "text": "Officer shoves protester to the ground",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://www.pscp.tv/w/1rmGPYnZjeMJN?t=17m6s",
              "Link2": "https://twitter.com/bogwitchenergy/status/1294558853640548353"
            },
            {
              "id": 900,
              "date_text": "August 15th",
              "text": "Officer shoves protester to the ground",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://www.pscp.tv/w/1rmGPYnZjeMJN?t=17m6s",
              "Link2": "https://twitter.com/bogwitchenergy/status/1294558853640548353"
            },
            {
              "id": 901,
              "date_text": "August 15th",
              "text": "Officer shoves protester to the ground",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://www.pscp.tv/w/1rmGPYnZjeMJN?t=17m6s",
              "Link2": "https://twitter.com/bogwitchenergy/status/1294558853640548353"
            },
            {
              "id": 902,
              "date_text": "August 15th",
              "text": "Livestreamer shoved from behind",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/PDocumentarians/status/1294584539201695744",
              "Link2": ""
            },
            {
              "id": 903,
              "date_text": "August 15th",
              "text": "Livestreamer shoved from behind",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/PDocumentarians/status/1294584539201695744",
              "Link2": ""
            },
            {
              "id": 904,
              "date_text": "August 15th",
              "text": "Livestreamer shoved from behind",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/PDocumentarians/status/1294584539201695744",
              "Link2": ""
            },
            {
              "id": 905,
              "date_text": "August 15th",
              "text": "Police charge protesters with shields",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrOlmos/status/1294896664847634432",
              "Link2": "https://www.youtube.com/watch?v=qSS8h63z5Fc"
            },
            {
              "id": 906,
              "date_text": "August 15th",
              "text": "Police charge protesters with shields",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrOlmos/status/1294896664847634432",
              "Link2": "https://www.youtube.com/watch?v=qSS8h63z5Fc"
            },
            {
              "id": 907,
              "date_text": "August 15th",
              "text": "Police charge protesters with shields",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrOlmos/status/1294896664847634432",
              "Link2": "https://www.youtube.com/watch?v=qSS8h63z5Fc"
            },
            {
              "id": 908,
              "date_text": "August 15th",
              "text": "Officer tackles multiple protesters",
              "tags_str": "Hard",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/KohzKah/status/1295016916625395713",
              "Link2": ""
            },
            {
              "id": 909,
              "date_text": "August 15th",
              "text": "Officer tackles multiple protesters",
              "tags_str": "Hard",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/KohzKah/status/1295016916625395713",
              "Link2": ""
            },
            {
              "id": 910,
              "date_text": "August 15th",
              "text": "Officer tackles multiple protesters",
              "tags_str": "Hard",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/KohzKah/status/1295016916625395713",
              "Link2": ""
            },
            {
              "id": 911,
              "date_text": "August 15th",
              "text": "Officer shoots then clubs protester",
              "tags_str": "Projectiles",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://mobile.twitter.com/gravemorgan/status/1295116634583994369",
              "Link2": ""
            },
            {
              "id": 912,
              "date_text": "August 15th",
              "text": "Officer shoots then clubs protester",
              "tags_str": "Projectiles",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://mobile.twitter.com/gravemorgan/status/1295116634583994369",
              "Link2": ""
            },
            {
              "id": 913,
              "date_text": "August 15th",
              "text": "Officer shoots then clubs protester",
              "tags_str": "Projectiles",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://mobile.twitter.com/gravemorgan/status/1295116634583994369",
              "Link2": ""
            },
            {
              "id": 914,
              "date_text": "August 16th",
              "text": "Police throw stun grenade at retreating protesters",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrOlmos/status/1294898551013572609",
              "Link2": ""
            },
            {
              "id": 915,
              "date_text": "August 16th",
              "text": "Police throw stun grenade at retreating protesters",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrOlmos/status/1294898551013572609",
              "Link2": ""
            },
            {
              "id": 916,
              "date_text": "August 16th",
              "text": "Police throw stun grenade at retreating protesters",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrOlmos/status/1294898551013572609",
              "Link2": ""
            },
            {
              "id": 917,
              "date_text": "August 16th",
              "text": "Police slash the tires of vehicles supporting protesters",
              "tags_str": "Other",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrOlmos/status/1294899117865316352",
              "Link2": "https://twitter.com/alex_zee/status/1294899596297084930"
            },
            {
              "id": 918,
              "date_text": "August 16th",
              "text": "Police slash the tires of vehicles supporting protesters",
              "tags_str": "Other",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrOlmos/status/1294899117865316352",
              "Link2": "https://twitter.com/alex_zee/status/1294899596297084930"
            },
            {
              "id": 919,
              "date_text": "August 16th",
              "text": "Police slash the tires of vehicles supporting protesters",
              "tags_str": "Other",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrOlmos/status/1294899117865316352",
              "Link2": "https://twitter.com/alex_zee/status/1294899596297084930"
            },
            {
              "id": 920,
              "date_text": "August 16th",
              "text": "Police shove press on the sidewalk",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/MrOlmos/status/1294900330488926208",
              "Link2": ""
            },
            {
              "id": 921,
              "date_text": "August 16th",
              "text": "Police shove press on the sidewalk",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/MrOlmos/status/1294900330488926208",
              "Link2": ""
            },
            {
              "id": 922,
              "date_text": "August 16th",
              "text": "Police shove press on the sidewalk",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/MrOlmos/status/1294900330488926208",
              "Link2": ""
            },
            {
              "id": 923,
              "date_text": "August 16th",
              "text": "Police shove protester from behind",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/PDocumentarians/status/1294936995014119424",
              "Link2": ""
            },
            {
              "id": 924,
              "date_text": "August 16th",
              "text": "Police shove protester from behind",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/PDocumentarians/status/1294936995014119424",
              "Link2": ""
            },
            {
              "id": 925,
              "date_text": "August 16th",
              "text": "Police shove protester from behind",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/PDocumentarians/status/1294936995014119424",
              "Link2": ""
            },
            {
              "id": 926,
              "date_text": "August 16th",
              "text": "Police shove protesters and confiscate guitar",
              "tags_str": "Soft",
              "LATITUDE": 45.442919,
              "LONGITUDE": -122.615092,
              "Link1": "https://twitter.com/Spronsenite/status/1294954167874670596",
              "Link2": ""
            },
            {
              "id": 927,
              "date_text": "August 16th",
              "text": "Police shove protesters and confiscate guitar",
              "tags_str": "Soft",
              "LATITUDE": 45.498819,
              "LONGITUDE": -122.690258,
              "Link1": "https://twitter.com/Spronsenite/status/1294954167874670596",
              "Link2": ""
            },
            {
              "id": 928,
              "date_text": "August 16th",
              "text": "Police shove protesters and confiscate guitar",
              "tags_str": "Soft",
              "LATITUDE": 45.443343,
              "LONGITUDE": -122.775974,
              "Link1": "https://twitter.com/Spronsenite/status/1294954167874670596",
              "Link2": ""
            },
            {
              "id": 929,
              "date_text": "June 4th",
              "text": "Before firing tear gas, Salem PD warns white armed men",
              "tags_str": "Projectiles",
              "LATITUDE": 44.926039,
              "LONGITUDE": -122.979692,
              "Link1": "https://twitter.com/greg_doucette/status/1268940700944605187",
              "Link2": "https://www.buzzfeednews.com/article/davidmack/salem-oregon-cop-warn-white-armed-men-playing-favorites"
            },
            {
              "id": 930,
              "date_text": "June 4th",
              "text": "Before firing tear gas, Salem PD warns white armed men",
              "tags_str": "Projectiles",
              "LATITUDE": 44.958846,
              "LONGITUDE": -123.075323,
              "Link1": "https://twitter.com/greg_doucette/status/1268940700944605187",
              "Link2": "https://www.buzzfeednews.com/article/davidmack/salem-oregon-cop-warn-white-armed-men-playing-favorites"
            },
            {
              "id": 931,
              "date_text": "July 29th",
              "text": "Police charge protesters, make violent arrest",
              "tags_str": "Soft",
              "LATITUDE": 44.06106,
              "LONGITUDE": -123.015259,
              "Link1": "https://twitter.com/mgbelka/status/1288685187849625601",
              "Link2": "https://twitter.com/fancy_mustard88/status/1288685989850943494"
            },
            {
              "id": 932,
              "date_text": "June 1st",
              "text": "Police fire tear gas at peaceful protest",
              "tags_str": "Projectiles",
              "LATITUDE": 33.976097,
              "LONGITUDE": -83.363174,
              "Link1": "https://twitter.com/greg_doucette/status/1267978682951491585",
              "Link2": "https://twitter.com/tmckenzie_photo/status/1267313794956562432"
            },
            {
              "id": 933,
              "date_text": "May 29th",
              "text": "Officer body slams woman onto ground",
              "tags_str": "Other",
              "LATITUDE": 33.749788,
              "LONGITUDE": -84.31685,
              "Link1": "https://www.cnn.com/2020/06/05/us/atlanta-police-body-slam-woman/index.html",
              "Link2": ""
            },
            {
              "id": 934,
              "date_text": "May 29th",
              "text": "Officer body slams woman onto ground",
              "tags_str": "Other",
              "LATITUDE": 33.7564,
              "LONGITUDE": -84.3918,
              "Link1": "https://www.cnn.com/2020/06/05/us/atlanta-police-body-slam-woman/index.html",
              "Link2": ""
            },
            {
              "id": 935,
              "date_text": "May 29th",
              "text": "Officer shoves a woman with his bike",
              "tags_str": "Soft",
              "LATITUDE": 33.749788,
              "LONGITUDE": -84.31685,
              "Link1": "https://twitter.com/ava/status/1266797973834395648",
              "Link2": "https://twitter.com/Brittm_tv/status/1266497944796225538"
            },
            {
              "id": 936,
              "date_text": "May 29th",
              "text": "Officer shoves a woman with his bike",
              "tags_str": "Soft",
              "LATITUDE": 33.7564,
              "LONGITUDE": -84.3918,
              "Link1": "https://twitter.com/ava/status/1266797973834395648",
              "Link2": "https://twitter.com/Brittm_tv/status/1266497944796225538"
            },
            {
              "id": 937,
              "date_text": "May 30th",
              "text": "Cops pull people out of their car, tase them",
              "tags_str": "Other",
              "LATITUDE": 33.749788,
              "LONGITUDE": -84.31685,
              "Link1": "https://twitter.com/danielvankirk/status/1266947767840063489",
              "Link2": "https://www.instagram.com/p/CA27quMhqJA/"
            },
            {
              "id": 938,
              "date_text": "May 30th",
              "text": "Cops pull people out of their car, tase them",
              "tags_str": "Other",
              "LATITUDE": 33.7564,
              "LONGITUDE": -84.3918,
              "Link1": "https://twitter.com/danielvankirk/status/1266947767840063489",
              "Link2": "https://www.instagram.com/p/CA27quMhqJA/"
            },
            {
              "id": 939,
              "date_text": "May 30th",
              "text": "Police punch man on the ground, then tackle woman to ground who objects",
              "tags_str": "Hard",
              "LATITUDE": 33.749788,
              "LONGITUDE": -84.31685,
              "Link1": "https://twitter.com/ANGELCUCCl/status/1266939757252280321",
              "Link2": ""
            },
            {
              "id": 940,
              "date_text": "May 30th",
              "text": "Police punch man on the ground, then tackle woman to ground who objects",
              "tags_str": "Hard",
              "LATITUDE": 33.7564,
              "LONGITUDE": -84.3918,
              "Link1": "https://twitter.com/ANGELCUCCl/status/1266939757252280321",
              "Link2": ""
            },
            {
              "id": 941,
              "date_text": "May 30th",
              "text": "Photographer tackled to the ground by four police officers",
              "tags_str": "Hard",
              "LATITUDE": 33.749788,
              "LONGITUDE": -84.31685,
              "Link1": "https://twitter.com/DanWolken/status/1266877753015570433",
              "Link2": "https://www.google.ca/maps/@33.7579387,-84.3934527,3a,75y,90.87h,90t/data=!3m7!1e1!3m5!1sHv2SqQHuYHJLG3QMKJ5srw!2e0!6s%2F%2Fgeo3.ggpht.com%2Fcbk%3Fpanoid%3DHv2SqQHuYHJLG3QMKJ5srw%26output%3Dthumbnail%26cb_client%3Dmaps_sv.tactile.gps%26thumb%3D2%26w%3D203%26h%3D100%26yaw%3D91.04821%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192"
            },
            {
              "id": 942,
              "date_text": "May 30th",
              "text": "Photographer tackled to the ground by four police officers",
              "tags_str": "Hard",
              "LATITUDE": 33.7564,
              "LONGITUDE": -84.3918,
              "Link1": "https://twitter.com/DanWolken/status/1266877753015570433",
              "Link2": "https://www.google.ca/maps/@33.7579387,-84.3934527,3a,75y,90.87h,90t/data=!3m7!1e1!3m5!1sHv2SqQHuYHJLG3QMKJ5srw!2e0!6s%2F%2Fgeo3.ggpht.com%2Fcbk%3Fpanoid%3DHv2SqQHuYHJLG3QMKJ5srw%26output%3Dthumbnail%26cb_client%3Dmaps_sv.tactile.gps%26thumb%3D2%26w%3D203%26h%3D100%26yaw%3D91.04821%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192"
            },
            {
              "id": 943,
              "date_text": "May 31st",
              "text": "Police shove and shoot protesters",
              "tags_str": "Soft, Projectiles",
              "LATITUDE": 33.749788,
              "LONGITUDE": -84.31685,
              "Link1": "https://www.facebook.com/onlettingo/videos/10157072617626056",
              "Link2": "https://www.facebook.com/kristajeannettewilliamson/posts/3334778089868526"
            },
            {
              "id": 944,
              "date_text": "May 31st",
              "text": "Police shove and shoot protesters",
              "tags_str": "Soft, Projectiles",
              "LATITUDE": 33.7564,
              "LONGITUDE": -84.3918,
              "Link1": "https://www.facebook.com/onlettingo/videos/10157072617626056",
              "Link2": "https://www.facebook.com/kristajeannettewilliamson/posts/3334778089868526"
            },
            {
              "id": 945,
              "date_text": "May 30th",
              "text": "Man tased in back for speaking up after man on ground is punched in face by cop",
              "tags_str": "Hard",
              "LATITUDE": 33.9435,
              "LONGITUDE": -83.9643,
              "Link1": "https://twitter.com/ftn_shark/status/1266854056506667009?s=19",
              "Link2": "https://twitter.com/throneofmorac/status/1266870493858185217?s=09"
            },
            {
              "id": 946,
              "date_text": "June 3rd",
              "text": "Sheriff scuffles with protester over \"F\\*ck Trump\" sign",
              "tags_str": "Other",
              "LATITUDE": 30.810578000000003,
              "LONGITUDE": -83.27716600000002,
              "Link1": "https://twitter.com/airguitarsolos/status/1268357926739197952",
              "Link2": "https://twitter.com/wsingergrl/status/1268619104492990464"
            },
            {
              "id": 947,
              "date_text": "June 4th",
              "text": "Sheriff arrests woman for sign containing profanity",
              "tags_str": "Soft",
              "LATITUDE": 30.810578000000003,
              "LONGITUDE": -83.27716600000002,
              "Link1": "https://www.wctv.tv/content/news/Lowndes-County-arrests-protester-for-obscene-sign-571035091.html",
              "Link2": ""
            },
            {
              "id": 948,
              "date_text": "June 5th",
              "text": "Officer repeatedly uses stun gun on suspect who said he couldn't breathe",
              "tags_str": "Other",
              "LATITUDE": 38.860353,
              "LONGITUDE": -77.264937,
              "Link1": "https://ktla.com/news/nationworld/a-virginia-police-officer-faces-charges-for-use-of-stun-gun-on-a-black-man/",
              "Link2": "https://forthuntherald.com/mount-vernon-police-officer-who-forcefully-apprehended-a-black-man-charged-with-assault-battery/"
            },
            {
              "id": 949,
              "date_text": "June 5th",
              "text": "Officer repeatedly uses stun gun on suspect who said he couldn't breathe",
              "tags_str": "Other",
              "LATITUDE": 38.845826,
              "LONGITUDE": -77.324151,
              "Link1": "https://ktla.com/news/nationworld/a-virginia-police-officer-faces-charges-for-use-of-stun-gun-on-a-black-man/",
              "Link2": "https://forthuntherald.com/mount-vernon-police-officer-who-forcefully-apprehended-a-black-man-charged-with-assault-battery/"
            },
            {
              "id": 950,
              "date_text": "May 31st",
              "text": "Police fire tear gas at peaceful protest",
              "tags_str": "Projectiles",
              "LATITUDE": 38.299538,
              "LONGITUDE": -77.477152,
              "Link1": "https://twitter.com/Dannyklein69/status/1267261733376229379",
              "Link2": "https://twitter.com/Dannyklein69/status/1267261914138267649"
            },
            {
              "id": 951,
              "date_text": "May 31st",
              "text": "Police fire tear gas at peaceful protest",
              "tags_str": "Projectiles",
              "LATITUDE": 38.26880300000001,
              "LONGITUDE": -77.547584,
              "Link1": "https://twitter.com/Dannyklein69/status/1267261733376229379",
              "Link2": "https://twitter.com/Dannyklein69/status/1267261914138267649"
            },
            {
              "id": 952,
              "date_text": "May 31st",
              "text": "Police fire tear gas at peaceful protest",
              "tags_str": "Projectiles",
              "LATITUDE": 38.3242,
              "LONGITUDE": -77.4685,
              "Link1": "https://twitter.com/Dannyklein69/status/1267261733376229379",
              "Link2": "https://twitter.com/Dannyklein69/status/1267261914138267649"
            },
            {
              "id": 953,
              "date_text": "May 30",
              "text": "Officers pepper-spray Virginia state delegate peacefully protesting",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 38.7518,
              "LONGITUDE": -77.4728,
              "Link1": "https://twitter.com/tristanshields/status/1266994214878932993",
              "Link2": "https://www.facebook.com/isaiahknightVA/videos/1144330232600106/"
            },
            {
              "id": 954,
              "date_text": "May 30",
              "text": "Officers pepper-spray Virginia state delegate peacefully protesting",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 38.7776,
              "LONGITUDE": -77.5197,
              "Link1": "https://twitter.com/tristanshields/status/1266994214878932993",
              "Link2": "https://www.facebook.com/isaiahknightVA/videos/1144330232600106/"
            },
            {
              "id": 955,
              "date_text": "May 30",
              "text": "Officers pepper-spray Virginia state delegate peacefully protesting",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 38.841111,
              "LONGITUDE": -77.53805600000003,
              "Link1": "https://twitter.com/tristanshields/status/1266994214878932993",
              "Link2": "https://www.facebook.com/isaiahknightVA/videos/1144330232600106/"
            },
            {
              "id": 956,
              "date_text": "May 30th",
              "text": "Police SUV jumps median toward protesters",
              "tags_str": "Other",
              "LATITUDE": 37.453158,
              "LONGITUDE": -77.469798,
              "Link1": "https://www.reddit.com/r/Bad_Cop_No_Donut/comments/heif6m/an_older_video_from_the_beginning_of_protests_in/",
              "Link2": ""
            },
            {
              "id": 957,
              "date_text": "May 30th",
              "text": "Police SUV jumps median toward protesters",
              "tags_str": "Other",
              "LATITUDE": 37.582473,
              "LONGITUDE": -77.519657,
              "Link1": "https://www.reddit.com/r/Bad_Cop_No_Donut/comments/heif6m/an_older_video_from_the_beginning_of_protests_in/",
              "Link2": ""
            },
            {
              "id": 958,
              "date_text": "May 30th",
              "text": "Police SUV jumps median toward protesters",
              "tags_str": "Other",
              "LATITUDE": 37.5594,
              "LONGITUDE": -77.4472,
              "Link1": "https://www.reddit.com/r/Bad_Cop_No_Donut/comments/heif6m/an_older_video_from_the_beginning_of_protests_in/",
              "Link2": ""
            },
            {
              "id": 959,
              "date_text": "May 31st",
              "text": "Officer sprays a man watching from his balcony",
              "tags_str": "Other",
              "LATITUDE": 37.453158,
              "LONGITUDE": -77.469798,
              "Link1": "https://www.reddit.com/r/rva/comments/gtwdzi/someone_got_pepper_sprayed_from_his_second_floor/",
              "Link2": "https://twitter.com/ADeliciousBear/status/1268048506247405568"
            },
            {
              "id": 960,
              "date_text": "May 31st",
              "text": "Officer sprays a man watching from his balcony",
              "tags_str": "Other",
              "LATITUDE": 37.582473,
              "LONGITUDE": -77.519657,
              "Link1": "https://www.reddit.com/r/rva/comments/gtwdzi/someone_got_pepper_sprayed_from_his_second_floor/",
              "Link2": "https://twitter.com/ADeliciousBear/status/1268048506247405568"
            },
            {
              "id": 961,
              "date_text": "May 31st",
              "text": "Officer sprays a man watching from his balcony",
              "tags_str": "Other",
              "LATITUDE": 37.5594,
              "LONGITUDE": -77.4472,
              "Link1": "https://www.reddit.com/r/rva/comments/gtwdzi/someone_got_pepper_sprayed_from_his_second_floor/",
              "Link2": "https://twitter.com/ADeliciousBear/status/1268048506247405568"
            },
            {
              "id": 962,
              "date_text": "June 1st",
              "text": "Tear gas fired at peaceful protest",
              "tags_str": "Projectiles",
              "LATITUDE": 37.453158,
              "LONGITUDE": -77.469798,
              "Link1": "https://twitter.com/i/status/1267650345947271176",
              "Link2": "https://twitter.com/i/status/1267613150112858116"
            },
            {
              "id": 963,
              "date_text": "June 1st",
              "text": "Tear gas fired at peaceful protest",
              "tags_str": "Projectiles",
              "LATITUDE": 37.582473,
              "LONGITUDE": -77.519657,
              "Link1": "https://twitter.com/i/status/1267650345947271176",
              "Link2": "https://twitter.com/i/status/1267613150112858116"
            },
            {
              "id": 964,
              "date_text": "June 1st",
              "text": "Tear gas fired at peaceful protest",
              "tags_str": "Projectiles",
              "LATITUDE": 37.5594,
              "LONGITUDE": -77.4472,
              "Link1": "https://twitter.com/i/status/1267650345947271176",
              "Link2": "https://twitter.com/i/status/1267613150112858116"
            },
            {
              "id": 965,
              "date_text": "June 1st",
              "text": "Officer spits on detained protester",
              "tags_str": "Other",
              "LATITUDE": 37.453158,
              "LONGITUDE": -77.469798,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/guzgf9/police_officer_in_richmond_va_spits_on_and_near_a/",
              "Link2": "https://twitter.com/greg_doucette/status/1269504306836799489"
            },
            {
              "id": 966,
              "date_text": "June 1st",
              "text": "Officer spits on detained protester",
              "tags_str": "Other",
              "LATITUDE": 37.582473,
              "LONGITUDE": -77.519657,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/guzgf9/police_officer_in_richmond_va_spits_on_and_near_a/",
              "Link2": "https://twitter.com/greg_doucette/status/1269504306836799489"
            },
            {
              "id": 967,
              "date_text": "June 1st",
              "text": "Officer spits on detained protester",
              "tags_str": "Other",
              "LATITUDE": 37.5594,
              "LONGITUDE": -77.4472,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/guzgf9/police_officer_in_richmond_va_spits_on_and_near_a/",
              "Link2": "https://twitter.com/greg_doucette/status/1269504306836799489"
            },
            {
              "id": 968,
              "date_text": "June 4th",
              "text": "Law enforcement officer fires tear gas at vehicle only to discover it's a police vehicle",
              "tags_str": "Projectiles",
              "LATITUDE": 37.453158,
              "LONGITUDE": -77.469798,
              "Link1": "https://twitter.com/BeQueerDoCrime/status/1268648919623442432",
              "Link2": ""
            },
            {
              "id": 969,
              "date_text": "June 4th",
              "text": "Law enforcement officer fires tear gas at vehicle only to discover it's a police vehicle",
              "tags_str": "Projectiles",
              "LATITUDE": 37.582473,
              "LONGITUDE": -77.519657,
              "Link1": "https://twitter.com/BeQueerDoCrime/status/1268648919623442432",
              "Link2": ""
            },
            {
              "id": 970,
              "date_text": "June 4th",
              "text": "Law enforcement officer fires tear gas at vehicle only to discover it's a police vehicle",
              "tags_str": "Projectiles",
              "LATITUDE": 37.5594,
              "LONGITUDE": -77.4472,
              "Link1": "https://twitter.com/BeQueerDoCrime/status/1268648919623442432",
              "Link2": ""
            },
            {
              "id": 971,
              "date_text": " June 13th",
              "text": "Police SUV pushes through protesters, knocks over protester on bike",
              "tags_str": "Other",
              "LATITUDE": 37.453158,
              "LONGITUDE": -77.469798,
              "Link1": "https://twitter.com/BreRVA/status/1271982379180138502",
              "Link2": "https://richmond.com/news/local/crime/richmond-prosecutor-clears-richmond-police-in-several-complaints-related-to-civil-unrest/article_7bb5a33f-0b35-5d19-9416-a3049a9670b0.html"
            },
            {
              "id": 972,
              "date_text": " June 13th",
              "text": "Police SUV pushes through protesters, knocks over protester on bike",
              "tags_str": "Other",
              "LATITUDE": 37.582473,
              "LONGITUDE": -77.519657,
              "Link1": "https://twitter.com/BreRVA/status/1271982379180138502",
              "Link2": "https://richmond.com/news/local/crime/richmond-prosecutor-clears-richmond-police-in-several-complaints-related-to-civil-unrest/article_7bb5a33f-0b35-5d19-9416-a3049a9670b0.html"
            },
            {
              "id": 973,
              "date_text": " June 13th",
              "text": "Police SUV pushes through protesters, knocks over protester on bike",
              "tags_str": "Other",
              "LATITUDE": 37.5594,
              "LONGITUDE": -77.4472,
              "Link1": "https://twitter.com/BreRVA/status/1271982379180138502",
              "Link2": "https://richmond.com/news/local/crime/richmond-prosecutor-clears-richmond-police-in-several-complaints-related-to-civil-unrest/article_7bb5a33f-0b35-5d19-9416-a3049a9670b0.html"
            },
            {
              "id": 974,
              "date_text": "June 14th",
              "text": "Police pepper spray protesters on sidewalk",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 37.453158,
              "LONGITUDE": -77.469798,
              "Link1": "https://twitter.com/aeringle/status/1272347287902130177",
              "Link2": ""
            },
            {
              "id": 975,
              "date_text": "June 14th",
              "text": "Police pepper spray protesters on sidewalk",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 37.582473,
              "LONGITUDE": -77.519657,
              "Link1": "https://twitter.com/aeringle/status/1272347287902130177",
              "Link2": ""
            },
            {
              "id": 976,
              "date_text": "June 14th",
              "text": "Police pepper spray protesters on sidewalk",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 37.5594,
              "LONGITUDE": -77.4472,
              "Link1": "https://twitter.com/aeringle/status/1272347287902130177",
              "Link2": ""
            },
            {
              "id": 977,
              "date_text": "June 14th",
              "text": "Police respond to thrown water bottle with excessive force",
              "tags_str": "Other",
              "LATITUDE": 37.453158,
              "LONGITUDE": -77.469798,
              "Link1": "https://twitter.com/aeringle/status/1272357473211559936",
              "Link2": "https://twitter.com/aeringle/status/1272358269122723846"
            },
            {
              "id": 978,
              "date_text": "June 14th",
              "text": "Police respond to thrown water bottle with excessive force",
              "tags_str": "Other",
              "LATITUDE": 37.582473,
              "LONGITUDE": -77.519657,
              "Link1": "https://twitter.com/aeringle/status/1272357473211559936",
              "Link2": "https://twitter.com/aeringle/status/1272358269122723846"
            },
            {
              "id": 979,
              "date_text": "June 14th",
              "text": "Police respond to thrown water bottle with excessive force",
              "tags_str": "Other",
              "LATITUDE": 37.5594,
              "LONGITUDE": -77.4472,
              "Link1": "https://twitter.com/aeringle/status/1272357473211559936",
              "Link2": "https://twitter.com/aeringle/status/1272358269122723846"
            },
            {
              "id": 980,
              "date_text": "June 15th",
              "text": "Police fire tear gas and rubber bullets at peaceful protest",
              "tags_str": "Projectiles",
              "LATITUDE": 37.453158,
              "LONGITUDE": -77.469798,
              "Link1": "https://twitter.com/ZyahnaB/status/1272716305813118976",
              "Link2": "https://twitter.com/ZyahnaB/status/1272716632541089792"
            },
            {
              "id": 981,
              "date_text": "June 15th",
              "text": "Police fire tear gas and rubber bullets at peaceful protest",
              "tags_str": "Projectiles",
              "LATITUDE": 37.582473,
              "LONGITUDE": -77.519657,
              "Link1": "https://twitter.com/ZyahnaB/status/1272716305813118976",
              "Link2": "https://twitter.com/ZyahnaB/status/1272716632541089792"
            },
            {
              "id": 982,
              "date_text": "June 15th",
              "text": "Police fire tear gas and rubber bullets at peaceful protest",
              "tags_str": "Projectiles",
              "LATITUDE": 37.5594,
              "LONGITUDE": -77.4472,
              "Link1": "https://twitter.com/ZyahnaB/status/1272716305813118976",
              "Link2": "https://twitter.com/ZyahnaB/status/1272716632541089792"
            },
            {
              "id": 983,
              "date_text": "June 21st",
              "text": "Police pepper-spray journalist",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 37.453158,
              "LONGITUDE": -77.469798,
              "Link1": "https://twitter.com/aeringle/status/1274898298923606017",
              "Link2": "https://www.reddit.com/r/2020PoliceBrutality/comments/hdycck/more_video_from_richmond_last_night_police_spray/"
            },
            {
              "id": 984,
              "date_text": "June 21st",
              "text": "Police pepper-spray journalist",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 37.582473,
              "LONGITUDE": -77.519657,
              "Link1": "https://twitter.com/aeringle/status/1274898298923606017",
              "Link2": "https://www.reddit.com/r/2020PoliceBrutality/comments/hdycck/more_video_from_richmond_last_night_police_spray/"
            },
            {
              "id": 985,
              "date_text": "June 21st",
              "text": "Police pepper-spray journalist",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 37.5594,
              "LONGITUDE": -77.4472,
              "Link1": "https://twitter.com/aeringle/status/1274898298923606017",
              "Link2": "https://www.reddit.com/r/2020PoliceBrutality/comments/hdycck/more_video_from_richmond_last_night_police_spray/"
            },
            {
              "id": 986,
              "date_text": "June 23rd",
              "text": "Police escalate against protesters outside city hall",
              "tags_str": "Other",
              "LATITUDE": 37.453158,
              "LONGITUDE": -77.469798,
              "Link1": "https://twitter.com/NotLevar/status/1275368795444588544",
              "Link2": "https://twitter.com/NotLevar/status/1275368797466243073"
            },
            {
              "id": 987,
              "date_text": "June 23rd",
              "text": "Police escalate against protesters outside city hall",
              "tags_str": "Other",
              "LATITUDE": 37.582473,
              "LONGITUDE": -77.519657,
              "Link1": "https://twitter.com/NotLevar/status/1275368795444588544",
              "Link2": "https://twitter.com/NotLevar/status/1275368797466243073"
            },
            {
              "id": 988,
              "date_text": "June 23rd",
              "text": "Police escalate against protesters outside city hall",
              "tags_str": "Other",
              "LATITUDE": 37.5594,
              "LONGITUDE": -77.4472,
              "Link1": "https://twitter.com/NotLevar/status/1275368795444588544",
              "Link2": "https://twitter.com/NotLevar/status/1275368797466243073"
            },
            {
              "id": 989,
              "date_text": "June 26th",
              "text": "Man struck in face by explosive round",
              "tags_str": "Other",
              "LATITUDE": 37.453158,
              "LONGITUDE": -77.469798,
              "Link1": "https://twitter.com/woznyphoto/status/1276734657237864448",
              "Link2": ""
            },
            {
              "id": 990,
              "date_text": "June 26th",
              "text": "Man struck in face by explosive round",
              "tags_str": "Other",
              "LATITUDE": 37.582473,
              "LONGITUDE": -77.519657,
              "Link1": "https://twitter.com/woznyphoto/status/1276734657237864448",
              "Link2": ""
            },
            {
              "id": 991,
              "date_text": "June 26th",
              "text": "Man struck in face by explosive round",
              "tags_str": "Other",
              "LATITUDE": 37.5594,
              "LONGITUDE": -77.4472,
              "Link1": "https://twitter.com/woznyphoto/status/1276734657237864448",
              "Link2": ""
            },
            {
              "id": 992,
              "date_text": "June 26th",
              "text": "Police drag protester off bike",
              "tags_str": "Other",
              "LATITUDE": 37.453158,
              "LONGITUDE": -77.469798,
              "Link1": "https://twitter.com/woznyphoto/status/1276727667979694081",
              "Link2": ""
            },
            {
              "id": 993,
              "date_text": "June 26th",
              "text": "Police drag protester off bike",
              "tags_str": "Other",
              "LATITUDE": 37.582473,
              "LONGITUDE": -77.519657,
              "Link1": "https://twitter.com/woznyphoto/status/1276727667979694081",
              "Link2": ""
            },
            {
              "id": 994,
              "date_text": "June 26th",
              "text": "Police drag protester off bike",
              "tags_str": "Other",
              "LATITUDE": 37.5594,
              "LONGITUDE": -77.4472,
              "Link1": "https://twitter.com/woznyphoto/status/1276727667979694081",
              "Link2": ""
            },
            {
              "id": 995,
              "date_text": "June 26th",
              "text": "Police shove and pepper-spray protester",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 37.453158,
              "LONGITUDE": -77.469798,
              "Link1": "https://twitter.com/woznyphoto/status/1276865711835623424",
              "Link2": "https://twitter.com/DomicoPhillips/status/1276723211879755777"
            },
            {
              "id": 996,
              "date_text": "June 26th",
              "text": "Police shove and pepper-spray protester",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 37.582473,
              "LONGITUDE": -77.519657,
              "Link1": "https://twitter.com/woznyphoto/status/1276865711835623424",
              "Link2": "https://twitter.com/DomicoPhillips/status/1276723211879755777"
            },
            {
              "id": 997,
              "date_text": "June 26th",
              "text": "Police shove and pepper-spray protester",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 37.5594,
              "LONGITUDE": -77.4472,
              "Link1": "https://twitter.com/woznyphoto/status/1276865711835623424",
              "Link2": "https://twitter.com/DomicoPhillips/status/1276723211879755777"
            },
            {
              "id": 998,
              "date_text": "June 26th",
              "text": "Attorney arrested for photographing police staging area",
              "tags_str": "Soft",
              "LATITUDE": 37.453158,
              "LONGITUDE": -77.469798,
              "Link1": "https://twitter.com/rva_charlie/status/1276739841951248384",
              "Link2": "https://twitter.com/rva_charlie/status/1276740854410027008"
            },
            {
              "id": 999,
              "date_text": "June 26th",
              "text": "Attorney arrested for photographing police staging area",
              "tags_str": "Soft",
              "LATITUDE": 37.582473,
              "LONGITUDE": -77.519657,
              "Link1": "https://twitter.com/rva_charlie/status/1276739841951248384",
              "Link2": "https://twitter.com/rva_charlie/status/1276740854410027008"
            },
            {
              "id": 1000,
              "date_text": "June 26th",
              "text": "Attorney arrested for photographing police staging area",
              "tags_str": "Soft",
              "LATITUDE": 37.5594,
              "LONGITUDE": -77.4472,
              "Link1": "https://twitter.com/rva_charlie/status/1276739841951248384",
              "Link2": "https://twitter.com/rva_charlie/status/1276740854410027008"
            },
            {
              "id": 1001,
              "date_text": "June 26th",
              "text": "Police fire tear gas at protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 37.453158,
              "LONGITUDE": -77.469798,
              "Link1": "https://twitter.com/greg_doucette/status/1287252197487648768",
              "Link2": ""
            },
            {
              "id": 1002,
              "date_text": "June 26th",
              "text": "Police fire tear gas at protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 37.582473,
              "LONGITUDE": -77.519657,
              "Link1": "https://twitter.com/greg_doucette/status/1287252197487648768",
              "Link2": ""
            },
            {
              "id": 1003,
              "date_text": "June 26th",
              "text": "Police fire tear gas at protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 37.5594,
              "LONGITUDE": -77.4472,
              "Link1": "https://twitter.com/greg_doucette/status/1287252197487648768",
              "Link2": ""
            },
            {
              "id": 1004,
              "date_text": "July 25th",
              "text": "Police tear gas protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 37.453158,
              "LONGITUDE": -77.469798,
              "Link1": "https://twitter.com/aeringle/status/1287225259356192769",
              "Link2": "https://twitter.com/aeringle/status/1287225570028400640"
            },
            {
              "id": 1005,
              "date_text": "July 25th",
              "text": "Police tear gas protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 37.582473,
              "LONGITUDE": -77.519657,
              "Link1": "https://twitter.com/aeringle/status/1287225259356192769",
              "Link2": "https://twitter.com/aeringle/status/1287225570028400640"
            },
            {
              "id": 1006,
              "date_text": "July 25th",
              "text": "Police tear gas protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 37.5594,
              "LONGITUDE": -77.4472,
              "Link1": "https://twitter.com/aeringle/status/1287225259356192769",
              "Link2": "https://twitter.com/aeringle/status/1287225570028400640"
            },
            {
              "id": 1007,
              "date_text": "July 25th",
              "text": "Police attempt to arrest press",
              "tags_str": "Soft",
              "LATITUDE": 37.453158,
              "LONGITUDE": -77.469798,
              "Link1": "https://twitter.com/JLJLovesRVA/status/1287242052284096513",
              "Link2": "https://twitter.com/edace2936/status/1287226623348137984"
            },
            {
              "id": 1008,
              "date_text": "July 25th",
              "text": "Police attempt to arrest press",
              "tags_str": "Soft",
              "LATITUDE": 37.582473,
              "LONGITUDE": -77.519657,
              "Link1": "https://twitter.com/JLJLovesRVA/status/1287242052284096513",
              "Link2": "https://twitter.com/edace2936/status/1287226623348137984"
            },
            {
              "id": 1009,
              "date_text": "July 25th",
              "text": "Police attempt to arrest press",
              "tags_str": "Soft",
              "LATITUDE": 37.5594,
              "LONGITUDE": -77.4472,
              "Link1": "https://twitter.com/JLJLovesRVA/status/1287242052284096513",
              "Link2": "https://twitter.com/edace2936/status/1287226623348137984"
            },
            {
              "id": 1010,
              "date_text": "July 26th",
              "text": "Reporter handcuffed and detained",
              "tags_str": "Other",
              "LATITUDE": 37.453158,
              "LONGITUDE": -77.469798,
              "Link1": "https://twitter.com/aeringle/status/1287576731658997760",
              "Link2": "https://twitter.com/aeringle/status/1287577232484061184"
            },
            {
              "id": 1011,
              "date_text": "July 26th",
              "text": "Reporter handcuffed and detained",
              "tags_str": "Other",
              "LATITUDE": 37.582473,
              "LONGITUDE": -77.519657,
              "Link1": "https://twitter.com/aeringle/status/1287576731658997760",
              "Link2": "https://twitter.com/aeringle/status/1287577232484061184"
            },
            {
              "id": 1012,
              "date_text": "July 26th",
              "text": "Reporter handcuffed and detained",
              "tags_str": "Other",
              "LATITUDE": 37.5594,
              "LONGITUDE": -77.4472,
              "Link1": "https://twitter.com/aeringle/status/1287576731658997760",
              "Link2": "https://twitter.com/aeringle/status/1287577232484061184"
            },
            {
              "id": 1013,
              "date_text": "July 26th",
              "text": "Protester arrested without probable cause, later released without charges",
              "tags_str": "Soft",
              "LATITUDE": 37.453158,
              "LONGITUDE": -77.469798,
              "Link1": "https://twitter.com/GoadGatsby/status/1287599473619861504",
              "Link2": "https://twitter.com/GoadGatsby/status/1287600241068449792"
            },
            {
              "id": 1014,
              "date_text": "July 26th",
              "text": "Protester arrested without probable cause, later released without charges",
              "tags_str": "Soft",
              "LATITUDE": 37.582473,
              "LONGITUDE": -77.519657,
              "Link1": "https://twitter.com/GoadGatsby/status/1287599473619861504",
              "Link2": "https://twitter.com/GoadGatsby/status/1287600241068449792"
            },
            {
              "id": 1015,
              "date_text": "July 26th",
              "text": "Protester arrested without probable cause, later released without charges",
              "tags_str": "Soft",
              "LATITUDE": 37.5594,
              "LONGITUDE": -77.4472,
              "Link1": "https://twitter.com/GoadGatsby/status/1287599473619861504",
              "Link2": "https://twitter.com/GoadGatsby/status/1287600241068449792"
            },
            {
              "id": 1016,
              "date_text": "July 31st",
              "text": "Encapment serving food and water dismantled; protester arrested and tased",
              "tags_str": "Soft",
              "LATITUDE": 37.453158,
              "LONGITUDE": -77.469798,
              "Link1": "https://twitter.com/RVAdirt/status/1288825356305207296",
              "Link2": "https://imgur.com/Ye9Sy5Y"
            },
            {
              "id": 1017,
              "date_text": "July 31st",
              "text": "Encapment serving food and water dismantled; protester arrested and tased",
              "tags_str": "Soft",
              "LATITUDE": 37.582473,
              "LONGITUDE": -77.519657,
              "Link1": "https://twitter.com/RVAdirt/status/1288825356305207296",
              "Link2": "https://imgur.com/Ye9Sy5Y"
            },
            {
              "id": 1018,
              "date_text": "July 31st",
              "text": "Encapment serving food and water dismantled; protester arrested and tased",
              "tags_str": "Soft",
              "LATITUDE": 37.5594,
              "LONGITUDE": -77.4472,
              "Link1": "https://twitter.com/RVAdirt/status/1288825356305207296",
              "Link2": "https://imgur.com/Ye9Sy5Y"
            },
            {
              "id": 1019,
              "date_text": "May 29th",
              "text": "Police pepper spray protesters attempting to record them",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 41.0716,
              "LONGITUDE": -85.1367,
              "Link1": "https://twitter.com/greg_doucette/status/1266745200656990208",
              "Link2": "https://twitter.com/_isabel_a/status/1266580681251000321"
            },
            {
              "id": 1020,
              "date_text": "May 29th",
              "text": "Police tear gas journalist",
              "tags_str": "Projectiles",
              "LATITUDE": 41.0716,
              "LONGITUDE": -85.1367,
              "Link1": "https://pressfreedomtracker.us/all-incidents/wpta-journalist-hit-tear-gas-canister-while-covering-indiana-protest/",
              "Link2": "https://twitter.com/Karli_VanCleave/status/1266618555484823554"
            },
            {
              "id": 1021,
              "date_text": "May 30th",
              "text": "Police tear gas peaceful protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 41.0716,
              "LONGITUDE": -85.1367,
              "Link1": "https://twitter.com/blazedyukhei/status/1266533569029177346",
              "Link2": ""
            },
            {
              "id": 1022,
              "date_text": "May 30th",
              "text": "Toddler tear-gassed by police",
              "tags_str": "Projectiles",
              "LATITUDE": 41.0716,
              "LONGITUDE": -85.1367,
              "Link1": "https://wpta21.com/2020/05/31/toddler-tear-gassed-photo-goes-viral/#.XtUVqwf8OnF.facebook",
              "Link2": "https://www.aclu-in.org/sites/default/files/field_documents/ft_wayne_protest_complaint.pdf"
            },
            {
              "id": 1023,
              "date_text": "May 31st",
              "text": "Protester hit in the face with a gas canister",
              "tags_str": "Projectiles",
              "LATITUDE": 41.0716,
              "LONGITUDE": -85.1367,
              "Link1": "https://i.redd.it/4qzvp2gd54251.jpg",
              "Link2": "https://twitter.com/notbalin/status/1266972999296704513"
            },
            {
              "id": 1024,
              "date_text": "June 14th",
              "text": "Police break up a small protest and shoots at them as they leave",
              "tags_str": "Projectiles",
              "LATITUDE": 41.0716,
              "LONGITUDE": -85.1367,
              "Link1": "https://vm.tiktok.com/J1Vja3J/",
              "Link2": "https://vm.tiktok.com/J1bkxrf/"
            },
            {
              "id": 1025,
              "date_text": "May 29th",
              "text": "Police confiscate medical supplies from medical station",
              "tags_str": "Other",
              "LATITUDE": 39.938417,
              "LONGITUDE": -86.13894,
              "Link1": "https://www.facebook.com/AlexandraIndy/videos/10219444419838711",
              "Link2": ""
            },
            {
              "id": 1026,
              "date_text": "May 29th",
              "text": "Police confiscate medical supplies from medical station",
              "tags_str": "Other",
              "LATITUDE": 39.775006,
              "LONGITUDE": -86.109348,
              "Link1": "https://www.facebook.com/AlexandraIndy/videos/10219444419838711",
              "Link2": ""
            },
            {
              "id": 1027,
              "date_text": "May 31st",
              "text": "Police tear gas peaceful protest, including worshipping congregation",
              "tags_str": "Projectiles",
              "LATITUDE": 39.938417,
              "LONGITUDE": -86.13894,
              "Link1": "https://www.theindychannel.com/news/local-news/police-apologize-after-non-violent-protesters-tear-gassed-on-monument-circle",
              "Link2": "https://twitter.com/greg_doucette/status/1268404518326276096"
            },
            {
              "id": 1028,
              "date_text": "May 31st",
              "text": "Police tear gas peaceful protest, including worshipping congregation",
              "tags_str": "Projectiles",
              "LATITUDE": 39.775006,
              "LONGITUDE": -86.109348,
              "Link1": "https://www.theindychannel.com/news/local-news/police-apologize-after-non-violent-protesters-tear-gassed-on-monument-circle",
              "Link2": "https://twitter.com/greg_doucette/status/1268404518326276096"
            },
            {
              "id": 1029,
              "date_text": "May 31st",
              "text": "Police beat woman with batons and shoot pepper balls, shove another to the ground",
              "tags_str": "Soft, Hard, Projectiles, Chemical",
              "LATITUDE": 39.938417,
              "LONGITUDE": -86.13894,
              "Link1": "https://www.washingtonpost.com/national/protests-police-brutality-video/2020/06/05/a9e66568-a768-11ea-b473-04905b1af82b_story.html",
              "Link2": "https://www.reddit.com/r/PublicFreakout/comments/guffju/indianapolis_police_on_women_rights/"
            },
            {
              "id": 1030,
              "date_text": "May 31st",
              "text": "Police beat woman with batons and shoot pepper balls, shove another to the ground",
              "tags_str": "Soft, Hard, Projectiles, Chemical",
              "LATITUDE": 39.775006,
              "LONGITUDE": -86.109348,
              "Link1": "https://www.washingtonpost.com/national/protests-police-brutality-video/2020/06/05/a9e66568-a768-11ea-b473-04905b1af82b_story.html",
              "Link2": "https://www.reddit.com/r/PublicFreakout/comments/guffju/indianapolis_police_on_women_rights/"
            },
            {
              "id": 1031,
              "date_text": "Possibly May 31st",
              "text": "Officer drops tear gas into peaceful protest without warning",
              "tags_str": "Projectiles",
              "LATITUDE": 40.417743,
              "LONGITUDE": -86.888358,
              "Link1": "https://www.facebook.com/ctchoula/videos/10163707272210302/",
              "Link2": "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/101254362_755196441884833_7192544661301362688_n.jpg?_nc_cat=103&_nc_sid=110474&_nc_ohc=wjDZM1x0RLYAX9sKPft&_nc_ht=scontent-ort2-2.xx&oh=606a9dbf10d30a680c5dcb2c8ae8d7ce&oe=5EFD314B."
            },
            {
              "id": 1032,
              "date_text": "May 30th",
              "text": "Police pepper spray and arrest protester holding sign",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 39.163189,
              "LONGITUDE": -94.569882,
              "Link1": "https://www.kansascity.com/news/local/article243188436.html",
              "Link2": "https://www.facebook.com/KuhlPics/photos/a.467614509924515/3214027235283215/?type=3&theater"
            },
            {
              "id": 1033,
              "date_text": "May 30th",
              "text": "Police pepper spray and arrest protester holding sign",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 39.10005,
              "LONGITUDE": -94.601849,
              "Link1": "https://www.kansascity.com/news/local/article243188436.html",
              "Link2": "https://www.facebook.com/KuhlPics/photos/a.467614509924515/3214027235283215/?type=3&theater"
            },
            {
              "id": 1034,
              "date_text": "May 30th",
              "text": "Police pepper spray and arrest protester holding sign",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 39.213876,
              "LONGITUDE": -94.63318,
              "Link1": "https://www.kansascity.com/news/local/article243188436.html",
              "Link2": "https://www.facebook.com/KuhlPics/photos/a.467614509924515/3214027235283215/?type=3&theater"
            },
            {
              "id": 1035,
              "date_text": "May 31st",
              "text": "Police pepper spray protesters walking away and later arrest one of them",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 39.163189,
              "LONGITUDE": -94.569882,
              "Link1": "https://twitter.com/RayVaca/status/1266959833753890816",
              "Link2": "https://twitter.com/whoareyoujudy_/status/1266968858159702017"
            },
            {
              "id": 1036,
              "date_text": "May 31st",
              "text": "Police pepper spray protesters walking away and later arrest one of them",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 39.10005,
              "LONGITUDE": -94.601849,
              "Link1": "https://twitter.com/RayVaca/status/1266959833753890816",
              "Link2": "https://twitter.com/whoareyoujudy_/status/1266968858159702017"
            },
            {
              "id": 1037,
              "date_text": "May 31st",
              "text": "Police pepper spray protesters walking away and later arrest one of them",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 39.213876,
              "LONGITUDE": -94.63318,
              "Link1": "https://twitter.com/RayVaca/status/1266959833753890816",
              "Link2": "https://twitter.com/whoareyoujudy_/status/1266968858159702017"
            },
            {
              "id": 1038,
              "date_text": "May 31st",
              "text": "Police tear gas a park",
              "tags_str": "Projectiles",
              "LATITUDE": 39.163189,
              "LONGITUDE": -94.569882,
              "Link1": "https://twitter.com/imunoz03/status/1266908372881768448",
              "Link2": ""
            },
            {
              "id": 1039,
              "date_text": "May 31st",
              "text": "Police tear gas a park",
              "tags_str": "Projectiles",
              "LATITUDE": 39.10005,
              "LONGITUDE": -94.601849,
              "Link1": "https://twitter.com/imunoz03/status/1266908372881768448",
              "Link2": ""
            },
            {
              "id": 1040,
              "date_text": "May 31st",
              "text": "Police tear gas a park",
              "tags_str": "Projectiles",
              "LATITUDE": 39.213876,
              "LONGITUDE": -94.63318,
              "Link1": "https://twitter.com/imunoz03/status/1266908372881768448",
              "Link2": ""
            },
            {
              "id": 1041,
              "date_text": "May 31st",
              "text": "Kansas City police attempt to arrest a man leading the protest then spray the crowd",
              "tags_str": "Soft",
              "LATITUDE": 39.163189,
              "LONGITUDE": -94.569882,
              "Link1": "https://twitter.com/Elise_Villa/status/1267310319526989824",
              "Link2": "https://old.reddit.com/r/PublicFreakout/comments/guswxo/he_wasnt_even_addressing_the_police/"
            },
            {
              "id": 1042,
              "date_text": "May 31st",
              "text": "Kansas City police attempt to arrest a man leading the protest then spray the crowd",
              "tags_str": "Soft",
              "LATITUDE": 39.10005,
              "LONGITUDE": -94.601849,
              "Link1": "https://twitter.com/Elise_Villa/status/1267310319526989824",
              "Link2": "https://old.reddit.com/r/PublicFreakout/comments/guswxo/he_wasnt_even_addressing_the_police/"
            },
            {
              "id": 1043,
              "date_text": "May 31st",
              "text": "Kansas City police attempt to arrest a man leading the protest then spray the crowd",
              "tags_str": "Soft",
              "LATITUDE": 39.213876,
              "LONGITUDE": -94.63318,
              "Link1": "https://twitter.com/Elise_Villa/status/1267310319526989824",
              "Link2": "https://old.reddit.com/r/PublicFreakout/comments/guswxo/he_wasnt_even_addressing_the_police/"
            },
            {
              "id": 1044,
              "date_text": "May 31st",
              "text": "Police arrest peaceful protester, pepper-spray others",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 39.163189,
              "LONGITUDE": -94.569882,
              "Link1": "https://www.tiktok.com/@keraclark2/video/6833017428105055494",
              "Link2": "https://twitter.com/lovlitae/status/1268676585269473280"
            },
            {
              "id": 1045,
              "date_text": "May 31st",
              "text": "Police arrest peaceful protester, pepper-spray others",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 39.10005,
              "LONGITUDE": -94.601849,
              "Link1": "https://www.tiktok.com/@keraclark2/video/6833017428105055494",
              "Link2": "https://twitter.com/lovlitae/status/1268676585269473280"
            },
            {
              "id": 1046,
              "date_text": "May 31st",
              "text": "Police arrest peaceful protester, pepper-spray others",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 39.213876,
              "LONGITUDE": -94.63318,
              "Link1": "https://www.tiktok.com/@keraclark2/video/6833017428105055494",
              "Link2": "https://twitter.com/lovlitae/status/1268676585269473280"
            },
            {
              "id": 1047,
              "date_text": "June 1st",
              "text": "Police arrest man for speaking and tear-gas nearby protesters",
              "tags_str": "Soft, Projectiles",
              "LATITUDE": 39.163189,
              "LONGITUDE": -94.569882,
              "Link1": "https://www.cnn.com/2020/06/02/us/kansas-city-police-spray-protester-who-yelled/index.html",
              "Link2": "https://twitter.com/weslyinfinity/status/1267321172309544960?"
            },
            {
              "id": 1048,
              "date_text": "June 1st",
              "text": "Police arrest man for speaking and tear-gas nearby protesters",
              "tags_str": "Soft, Projectiles",
              "LATITUDE": 39.10005,
              "LONGITUDE": -94.601849,
              "Link1": "https://www.cnn.com/2020/06/02/us/kansas-city-police-spray-protester-who-yelled/index.html",
              "Link2": "https://twitter.com/weslyinfinity/status/1267321172309544960?"
            },
            {
              "id": 1049,
              "date_text": "June 1st",
              "text": "Police arrest man for speaking and tear-gas nearby protesters",
              "tags_str": "Soft, Projectiles",
              "LATITUDE": 39.213876,
              "LONGITUDE": -94.63318,
              "Link1": "https://www.cnn.com/2020/06/02/us/kansas-city-police-spray-protester-who-yelled/index.html",
              "Link2": "https://twitter.com/weslyinfinity/status/1267321172309544960?"
            },
            {
              "id": 1050,
              "date_text": "June 1st",
              "text": "Police pull away protester and pepper sprays others",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.163189,
              "LONGITUDE": -94.569882,
              "Link1": "https://www.reddit.com/r/2020PoliceBrutality/comments/gut8n1/in_kansas_city/",
              "Link2": "https://www.google.ca/maps/place/Giralda/@39.0425007,-94.5880276,3a,75y,208.49h,97.09t/data=!3m6!1e1!3m4!1sJzy4NglPGxJe3YarImT1Og!2e0!7i16384!8i8192!4m5!3m4!1s0x87c0efb6174d21e9:0xa50781025e9c6d35!8m2!3d39.0417847!4d-94.5879815"
            },
            {
              "id": 1051,
              "date_text": "June 1st",
              "text": "Police pull away protester and pepper sprays others",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.10005,
              "LONGITUDE": -94.601849,
              "Link1": "https://www.reddit.com/r/2020PoliceBrutality/comments/gut8n1/in_kansas_city/",
              "Link2": "https://www.google.ca/maps/place/Giralda/@39.0425007,-94.5880276,3a,75y,208.49h,97.09t/data=!3m6!1e1!3m4!1sJzy4NglPGxJe3YarImT1Og!2e0!7i16384!8i8192!4m5!3m4!1s0x87c0efb6174d21e9:0xa50781025e9c6d35!8m2!3d39.0417847!4d-94.5879815"
            },
            {
              "id": 1052,
              "date_text": "June 1st",
              "text": "Police pull away protester and pepper sprays others",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.213876,
              "LONGITUDE": -94.63318,
              "Link1": "https://www.reddit.com/r/2020PoliceBrutality/comments/gut8n1/in_kansas_city/",
              "Link2": "https://www.google.ca/maps/place/Giralda/@39.0425007,-94.5880276,3a,75y,208.49h,97.09t/data=!3m6!1e1!3m4!1sJzy4NglPGxJe3YarImT1Og!2e0!7i16384!8i8192!4m5!3m4!1s0x87c0efb6174d21e9:0xa50781025e9c6d35!8m2!3d39.0417847!4d-94.5879815"
            },
            {
              "id": 1053,
              "date_text": "June 2nd",
              "text": "Couple pepper-sprayed; woman knocked unconscious; man blinded by rubber bullet",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.163189,
              "LONGITUDE": -94.569882,
              "Link1": "https://www.thepitchkc.com/showing-up-as-an-ally-i-didnt-expect-the-police-to-blind-me-forever-but-ive-mad-my-piece/",
              "Link2": ""
            },
            {
              "id": 1054,
              "date_text": "June 2nd",
              "text": "Couple pepper-sprayed; woman knocked unconscious; man blinded by rubber bullet",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.10005,
              "LONGITUDE": -94.601849,
              "Link1": "https://www.thepitchkc.com/showing-up-as-an-ally-i-didnt-expect-the-police-to-blind-me-forever-but-ive-mad-my-piece/",
              "Link2": ""
            },
            {
              "id": 1055,
              "date_text": "June 2nd",
              "text": "Couple pepper-sprayed; woman knocked unconscious; man blinded by rubber bullet",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.213876,
              "LONGITUDE": -94.63318,
              "Link1": "https://www.thepitchkc.com/showing-up-as-an-ally-i-didnt-expect-the-police-to-blind-me-forever-but-ive-mad-my-piece/",
              "Link2": ""
            },
            {
              "id": 1056,
              "date_text": "June 2nd",
              "text": "Florissant officer hits man with unmarked police vehicle",
              "tags_str": "Other",
              "LATITUDE": 38.806865,
              "LONGITUDE": -90.340097,
              "Link1": "https://www.ksdk.com/article/news/local/video-shows-florissant-officer-in-unmarked-car-hit-man-who-appears-to-be-running-away/63-5db688ff-2f31-4e55-9d24-0707ecdb677f",
              "Link2": "https://www.facebook.com/realstlnews/videos/2610967669219012/"
            },
            {
              "id": 1057,
              "date_text": "June 27th",
              "text": "Police push protesters off lawn",
              "tags_str": "Other",
              "LATITUDE": 38.806865,
              "LONGITUDE": -90.340097,
              "Link1": "https://twitter.com/NassimBnchabane/status/1277054826858323969",
              "Link2": "https://twitter.com/theMARCHstl/status/1277129811245359104"
            },
            {
              "id": 1058,
              "date_text": "July 5th",
              "text": "Police shove, pepper spray, and arrest protesters",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 38.806865,
              "LONGITUDE": -90.340097,
              "Link1": "https://twitter.com/xshularx/status/1279961776050917376",
              "Link2": "https://twitter.com/xshularx/status/1279970172955230210"
            },
            {
              "id": 1059,
              "date_text": "July 6th",
              "text": "Police shoot at protesters in designated protest area",
              "tags_str": "Projectiles",
              "LATITUDE": 38.806865,
              "LONGITUDE": -90.340097,
              "Link1": "https://twitter.com/CopWatchSTL/status/1280342740706959361",
              "Link2": "https://twitter.com/search4swag/status/1280332765859319810"
            },
            {
              "id": 1060,
              "date_text": "June 1st",
              "text": "Student journalist struck by ricocheting foam bullet",
              "tags_str": "Other",
              "LATITUDE": 35.0936,
              "LONGITUDE": -106.6423,
              "Link1": "https://twitter.com/i/broadcasts/1DXxyeqvodExM",
              "Link2": "https://pressfreedomtracker.us/all-incidents/student-journalists-fired-upon-foam-rounds-one-struck-ricochet-amid-albuquerque-protests/"
            },
            {
              "id": 1061,
              "date_text": "July 25th",
              "text": "Officers refuse to give badge numbers",
              "tags_str": "Other",
              "LATITUDE": 38.992488,
              "LONGITUDE": -94.674769,
              "Link1": "https://www.reddit.com/r/Bad_Cop_No_Donut/comments/hyclgn/officers_refuse_to_give_badge_numbers_in_op_kansas/",
              "Link2": ""
            },
            {
              "id": 1062,
              "date_text": "May 31st",
              "text": "Police officer maces woman and kicks her in the head",
              "tags_str": "Other",
              "LATITUDE": 42.125962,
              "LONGITUDE": -80.08601,
              "Link1": "https://twitter.com/ItsKadynC/status/1266967646345613317",
              "Link2": "https://twitter.com/the7goonies/status/1266989439160590336"
            },
            {
              "id": 1063,
              "date_text": "May 30th",
              "text": "Police pepperspray protesters helping someone stand up",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 40.261767,
              "LONGITUDE": -76.88307900000002,
              "Link1": "https://twitter.com/greg_doucette/status/1266862623041167362",
              "Link2": ""
            },
            {
              "id": 1064,
              "date_text": "May 30th",
              "text": "Police beat down man",
              "tags_str": "Hard",
              "LATITUDE": 39.864998,
              "LONGITUDE": -75.275196,
              "Link1": "https://twitter.com/UR_Ninja/status/1266913490301792257",
              "Link2": ""
            },
            {
              "id": 1065,
              "date_text": "May 30th",
              "text": "Police beat down man",
              "tags_str": "Hard",
              "LATITUDE": 40.1162,
              "LONGITUDE": -75.0141,
              "Link1": "https://twitter.com/UR_Ninja/status/1266913490301792257",
              "Link2": ""
            },
            {
              "id": 1066,
              "date_text": " May 30th",
              "text": "Protester fleeing police jumps in stranger's car; driver pulls over; police beat fleeing protester, then arrest him, the driver and a passerby filming",
              "tags_str": "Soft, Hard",
              "LATITUDE": 39.864998,
              "LONGITUDE": -75.275196,
              "Link1": "https://youtu.be/QDcCFN_LQPA",
              "Link2": "https://twitter.com/greg_doucette/status/1269303637060325377"
            },
            {
              "id": 1067,
              "date_text": " May 30th",
              "text": "Protester fleeing police jumps in stranger's car; driver pulls over; police beat fleeing protester, then arrest him, the driver and a passerby filming",
              "tags_str": "Soft, Hard",
              "LATITUDE": 40.1162,
              "LONGITUDE": -75.0141,
              "Link1": "https://youtu.be/QDcCFN_LQPA",
              "Link2": "https://twitter.com/greg_doucette/status/1269303637060325377"
            },
            {
              "id": 1068,
              "date_text": "May 30th",
              "text": "Police repeatedly shove protester",
              "tags_str": "Soft",
              "LATITUDE": 39.864998,
              "LONGITUDE": -75.275196,
              "Link1": "https://twitter.com/MeKatharine/status/1266870362433822720",
              "Link2": ""
            },
            {
              "id": 1069,
              "date_text": "May 30th",
              "text": "Police repeatedly shove protester",
              "tags_str": "Soft",
              "LATITUDE": 40.1162,
              "LONGITUDE": -75.0141,
              "Link1": "https://twitter.com/MeKatharine/status/1266870362433822720",
              "Link2": ""
            },
            {
              "id": 1070,
              "date_text": "May 31st",
              "text": "Philadelphia cops beat man and forcefully put his fingers on their baton.",
              "tags_str": "Hard, Other",
              "LATITUDE": 39.864998,
              "LONGITUDE": -75.275196,
              "Link1": "https://metro.co.uk/2020/06/01/cop-put-baton-george-floyd-protesters-hand-put-knee-neck-12789427/",
              "Link2": "https://twitter.com/mkultranews/status/1267305587206807553"
            },
            {
              "id": 1071,
              "date_text": "May 31st",
              "text": "Philadelphia cops beat man and forcefully put his fingers on their baton.",
              "tags_str": "Hard, Other",
              "LATITUDE": 40.1162,
              "LONGITUDE": -75.0141,
              "Link1": "https://metro.co.uk/2020/06/01/cop-put-baton-george-floyd-protesters-hand-put-knee-neck-12789427/",
              "Link2": "https://twitter.com/mkultranews/status/1267305587206807553"
            },
            {
              "id": 1072,
              "date_text": "May 31st",
              "text": "Police fire tear gas down empty streets",
              "tags_str": "Projectiles",
              "LATITUDE": 39.864998,
              "LONGITUDE": -75.275196,
              "Link1": "https://twitter.com/cynthiaschemmer/status/1267199590987714560",
              "Link2": "https://twitter.com/greg_doucette/status/1267859272639164416"
            },
            {
              "id": 1073,
              "date_text": "May 31st",
              "text": "Police fire tear gas down empty streets",
              "tags_str": "Projectiles",
              "LATITUDE": 40.1162,
              "LONGITUDE": -75.0141,
              "Link1": "https://twitter.com/cynthiaschemmer/status/1267199590987714560",
              "Link2": "https://twitter.com/greg_doucette/status/1267859272639164416"
            },
            {
              "id": 1074,
              "date_text": "June 1st",
              "text": "Philadelphia Police Trap Protesters on Highway, Then Tear Gas Them and Shoot Rubber Bullets",
              "tags_str": "Other",
              "LATITUDE": 39.864998,
              "LONGITUDE": -75.275196,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/guve5f/philadelphia_police_traps_protesters_on_highway/",
              "Link2": "https://twitter.com/bbcease/status/1267582823428501508"
            },
            {
              "id": 1075,
              "date_text": "June 1st",
              "text": "Philadelphia Police Trap Protesters on Highway, Then Tear Gas Them and Shoot Rubber Bullets",
              "tags_str": "Other",
              "LATITUDE": 40.1162,
              "LONGITUDE": -75.0141,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/guve5f/philadelphia_police_traps_protesters_on_highway/",
              "Link2": "https://twitter.com/bbcease/status/1267582823428501508"
            },
            {
              "id": 1076,
              "date_text": "believed to be June 1st",
              "text": "Police officer pepper-sprays three people on their knees",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.864998,
              "LONGITUDE": -75.275196,
              "Link1": "https://twitter.com/d0wnrrrrr/status/1267691766188310528",
              "Link2": ""
            },
            {
              "id": 1077,
              "date_text": "believed to be June 1st",
              "text": "Police officer pepper-sprays three people on their knees",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 40.1162,
              "LONGITUDE": -75.0141,
              "Link1": "https://twitter.com/d0wnrrrrr/status/1267691766188310528",
              "Link2": ""
            },
            {
              "id": 1078,
              "date_text": "Jun 1st",
              "text": "Police shove protesters and strike man across the face with a baton",
              "tags_str": "Soft, Other",
              "LATITUDE": 39.864998,
              "LONGITUDE": -75.275196,
              "Link1": "https://www.inquirer.com/news/philadelphia-police-beating-temple-student-evan-gorski-protest-20200604.html",
              "Link2": "https://twitter.com/greg_doucette/status/1268766216161763328"
            },
            {
              "id": 1079,
              "date_text": "Jun 1st",
              "text": "Police shove protesters and strike man across the face with a baton",
              "tags_str": "Soft, Other",
              "LATITUDE": 40.1162,
              "LONGITUDE": -75.0141,
              "Link1": "https://www.inquirer.com/news/philadelphia-police-beating-temple-student-evan-gorski-protest-20200604.html",
              "Link2": "https://twitter.com/greg_doucette/status/1268766216161763328"
            },
            {
              "id": 1080,
              "date_text": "June 1st",
              "text": "Officer attacks woman for no apparent reason",
              "tags_str": "Other",
              "LATITUDE": 39.864998,
              "LONGITUDE": -75.275196,
              "Link1": "https://twitter.com/tippedminimum/status/1268001268406136832",
              "Link2": ""
            },
            {
              "id": 1081,
              "date_text": "June 1st",
              "text": "Officer attacks woman for no apparent reason",
              "tags_str": "Other",
              "LATITUDE": 40.1162,
              "LONGITUDE": -75.0141,
              "Link1": "https://twitter.com/tippedminimum/status/1268001268406136832",
              "Link2": ""
            },
            {
              "id": 1082,
              "date_text": "June 1st",
              "text": "Police selectively enforce curfew and dispersal orders",
              "tags_str": "Other",
              "LATITUDE": 39.864998,
              "LONGITUDE": -75.275196,
              "Link1": "https://www.facebook.com/groups/fishtownisawesome/permalink/2696046047166116/",
              "Link2": "https://twitter.com/StreetsDept/status/1269031817253982215"
            },
            {
              "id": 1083,
              "date_text": "June 1st",
              "text": "Police selectively enforce curfew and dispersal orders",
              "tags_str": "Other",
              "LATITUDE": 40.1162,
              "LONGITUDE": -75.0141,
              "Link1": "https://www.facebook.com/groups/fishtownisawesome/permalink/2696046047166116/",
              "Link2": "https://twitter.com/StreetsDept/status/1269031817253982215"
            },
            {
              "id": 1084,
              "date_text": "June 1st",
              "text": "Police pepper spray protesters on their knees",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.864998,
              "LONGITUDE": -75.275196,
              "Link1": "https://twitter.com/d0wnrrrrr/status/1267848782689054723",
              "Link2": ""
            },
            {
              "id": 1085,
              "date_text": "June 1st",
              "text": "Police pepper spray protesters on their knees",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 40.1162,
              "LONGITUDE": -75.0141,
              "Link1": "https://twitter.com/d0wnrrrrr/status/1267848782689054723",
              "Link2": ""
            },
            {
              "id": 1086,
              "date_text": " June 3rd",
              "text": "Police kneel on man who says \"I can't breathe\", officer yells profanities back",
              "tags_str": "Other",
              "LATITUDE": 39.864998,
              "LONGITUDE": -75.275196,
              "Link1": "https://twitter.com/greg_doucette/status/1268200800649707526",
              "Link2": ""
            },
            {
              "id": 1087,
              "date_text": " June 3rd",
              "text": "Police kneel on man who says \"I can't breathe\", officer yells profanities back",
              "tags_str": "Other",
              "LATITUDE": 40.1162,
              "LONGITUDE": -75.0141,
              "Link1": "https://twitter.com/greg_doucette/status/1268200800649707526",
              "Link2": ""
            },
            {
              "id": 1088,
              "date_text": "June 13th",
              "text": "Reporter is harassed and assaulted by pro-Columbus supporters; police tell reporter to leave the scene",
              "tags_str": "Hard",
              "LATITUDE": 39.864998,
              "LONGITUDE": -75.275196,
              "Link1": "https://vimeo.com/428917635",
              "Link2": "https://www.reddit.com/r/PublicFreakout/comments/hbaove/philadelphia_police_threaten_unicorn_riot/"
            },
            {
              "id": 1089,
              "date_text": "June 13th",
              "text": "Reporter is harassed and assaulted by pro-Columbus supporters; police tell reporter to leave the scene",
              "tags_str": "Hard",
              "LATITUDE": 40.1162,
              "LONGITUDE": -75.0141,
              "Link1": "https://vimeo.com/428917635",
              "Link2": "https://www.reddit.com/r/PublicFreakout/comments/hbaove/philadelphia_police_threaten_unicorn_riot/"
            },
            {
              "id": 1090,
              "date_text": "June 23rd",
              "text": "Counter-Terrorism Unit detains reporter",
              "tags_str": "Other",
              "LATITUDE": 39.864998,
              "LONGITUDE": -75.275196,
              "Link1": "https://twitter.com/samanthamelamed/status/1275522909604372481",
              "Link2": "https://twitter.com/samanthamelamed/status/1275523337716973570"
            },
            {
              "id": 1091,
              "date_text": "June 23rd",
              "text": "Counter-Terrorism Unit detains reporter",
              "tags_str": "Other",
              "LATITUDE": 40.1162,
              "LONGITUDE": -75.0141,
              "Link1": "https://twitter.com/samanthamelamed/status/1275522909604372481",
              "Link2": "https://twitter.com/samanthamelamed/status/1275523337716973570"
            },
            {
              "id": 1092,
              "date_text": "May 30th",
              "text": "Police tear-gas, shoot and arrest protester confused by contradicting police instructions",
              "tags_str": "Soft, Projectiles",
              "LATITUDE": 40.474536,
              "LONGITUDE": -79.952524,
              "Link1": "https://pittsburgh.cbslocal.com/2020/06/03/protester-hopes-cell-phone-video-clears-his-name/",
              "Link2": "https://twitter.com/greg_doucette/status/1270149233673469957"
            },
            {
              "id": 1093,
              "date_text": "June 1st",
              "text": "Officer pepper-sprays a woman who is on her knees with her hands up",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 40.474536,
              "LONGITUDE": -79.952524,
              "Link1": "https://www.youtube.com/watch?v=TxHxU6nhzzQ",
              "Link2": "https://twitter.com/PaulaReedWard/status/1268547369618026503"
            },
            {
              "id": 1094,
              "date_text": "June 1st",
              "text": "Police fire tear gas and rubber bullets on peaceful assembly",
              "tags_str": "Projectiles",
              "LATITUDE": 40.474536,
              "LONGITUDE": -79.952524,
              "Link1": "https://www.reddit.com/r/pittsburgh/comments/guzshz/police_declaring_an_unlawful_assembly_against_a/",
              "Link2": "https://www.facebook.com/BenjaminKFerris/posts/3091613010894973"
            },
            {
              "id": 1095,
              "date_text": "June 1st",
              "text": "Police pepper spray two kneeling protesters",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 40.474536,
              "LONGITUDE": -79.952524,
              "Link1": "https://twitter.com/messiest_headd/status/1267816842413740034",
              "Link2": "https://twitter.com/stabpossum/status/1268203842174361600"
            },
            {
              "id": 1096,
              "date_text": "June 1st",
              "text": "Police arrest protester then tear gas crowd",
              "tags_str": "Soft, Projectiles",
              "LATITUDE": 40.474536,
              "LONGITUDE": -79.952524,
              "Link1": "https://www.youtube.com/watch?v=chgIx7AToIw",
              "Link2": "https://www.pghcitypaper.com/pittsburgh/video-shows-pittsburgh-police-arresting-and-pinning-woman-to-ground-in-east-liberty-before-deploying-tear-gas-at-onlookers/Content?oid=17432474"
            },
            {
              "id": 1097,
              "date_text": "July 25th",
              "text": "Protester shoved into median",
              "tags_str": "Soft",
              "LATITUDE": 40.474536,
              "LONGITUDE": -79.952524,
              "Link1": "https://twitter.com/jackohrman/status/1287258983149993984",
              "Link2": ""
            },
            {
              "id": 1098,
              "date_text": "August 15th",
              "text": "Protest marshal abducted by officers in unmarked van",
              "tags_str": "Other",
              "LATITUDE": 40.474536,
              "LONGITUDE": -79.952524,
              "Link1": "https://www.pghcitypaper.com/pittsburgh/photos-civil-saturday-protest-disrupted-when-marshal-is-arrested-by-heavily-armed-pittsburgh-police-in-unmarked-van/Content?oid=17823887",
              "Link2": "https://twitter.com/savlucy420/status/1294753559263817728"
            },
            {
              "id": 1099,
              "date_text": "June 14th",
              "text": "Man struck by counter-protester while police look on",
              "tags_str": "Other",
              "LATITUDE": 38.94236,
              "LONGITUDE": -84.09195,
              "Link1": "https://www.youtube.com/watch?v=6GVbOjgBUCc",
              "Link2": "https://www.youtube.com/watch?v=ltabht5GsL0"
            },
            {
              "id": 1100,
              "date_text": "May 29th",
              "text": "Police spray mace, fire tear gas and flashbangs at protesters, even after they have dispersed",
              "tags_str": "Projectiles",
              "LATITUDE": 40.827,
              "LONGITUDE": -81.3853,
              "Link1": "https://www.facebook.com/dustin.j.teeters/videos/10157947506156001/",
              "Link2": "https://www.facebook.com/dustin.j.teeters/videos/10157947685856001/"
            },
            {
              "id": 1101,
              "date_text": "May 29th",
              "text": "Police spray mace, fire tear gas and flashbangs at protesters, even after they have dispersed",
              "tags_str": "Projectiles",
              "LATITUDE": 40.7962,
              "LONGITUDE": -81.3768,
              "Link1": "https://www.facebook.com/dustin.j.teeters/videos/10157947506156001/",
              "Link2": "https://www.facebook.com/dustin.j.teeters/videos/10157947685856001/"
            },
            {
              "id": 1102,
              "date_text": "May 30th",
              "text": "Police disperse peaceful protest with tear gas, flashbangs and pepper bullets",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.091293,
              "LONGITUDE": -84.277383,
              "Link1": "https://twitter.com/kodyfishertv/status/1266901735198638082",
              "Link2": ""
            },
            {
              "id": 1103,
              "date_text": "May 30th",
              "text": "Police disperse peaceful protest with tear gas, flashbangs and pepper bullets",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.1063,
              "LONGITUDE": -84.5356,
              "Link1": "https://twitter.com/kodyfishertv/status/1266901735198638082",
              "Link2": ""
            },
            {
              "id": 1104,
              "date_text": "May 30th",
              "text": "Peaceful protester on sidewalk pepper sprayed",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.091293,
              "LONGITUDE": -84.277383,
              "Link1": "https://mobile.twitter.com/JakeTalks2Much/status/1266902493151334401",
              "Link2": "https://mobile.twitter.com/JakeTalks2Much/status/1266931927161896961"
            },
            {
              "id": 1105,
              "date_text": "May 30th",
              "text": "Peaceful protester on sidewalk pepper sprayed",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.1063,
              "LONGITUDE": -84.5356,
              "Link1": "https://mobile.twitter.com/JakeTalks2Much/status/1266902493151334401",
              "Link2": "https://mobile.twitter.com/JakeTalks2Much/status/1266931927161896961"
            },
            {
              "id": 1106,
              "date_text": "May 31st",
              "text": "Police violently disperse crowds, before curfew and allegedly without provocation",
              "tags_str": "Other",
              "LATITUDE": 39.091293,
              "LONGITUDE": -84.277383,
              "Link1": "https://www.facebook.com/story.php?story_fbid=10157718199384132&id=697759131",
              "Link2": "https://www.cincinnati.com/story/news/2020/05/31/cincinnati-protests-george-floyd-live-updates/5300281002/"
            },
            {
              "id": 1107,
              "date_text": "May 31st",
              "text": "Police violently disperse crowds, before curfew and allegedly without provocation",
              "tags_str": "Other",
              "LATITUDE": 39.1063,
              "LONGITUDE": -84.5356,
              "Link1": "https://www.facebook.com/story.php?story_fbid=10157718199384132&id=697759131",
              "Link2": "https://www.cincinnati.com/story/news/2020/05/31/cincinnati-protests-george-floyd-live-updates/5300281002/"
            },
            {
              "id": 1108,
              "date_text": "May 31st",
              "text": "Protesters kept in a courtyard, with no bathroom breaks, water, or food, for ten hours",
              "tags_str": "Other",
              "LATITUDE": 39.091293,
              "LONGITUDE": -84.277383,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/gusqeg/video_from_inside_the_concrete_courtyard_peaceful/?utm_source=share&amp;utm_medium=ios_app&amp;utm_name=iossmf",
              "Link2": "https://i.imgur.com/mECPaWe.jpg"
            },
            {
              "id": 1109,
              "date_text": "May 31st",
              "text": "Protesters kept in a courtyard, with no bathroom breaks, water, or food, for ten hours",
              "tags_str": "Other",
              "LATITUDE": 39.1063,
              "LONGITUDE": -84.5356,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/gusqeg/video_from_inside_the_concrete_courtyard_peaceful/?utm_source=share&amp;utm_medium=ios_app&amp;utm_name=iossmf",
              "Link2": "https://i.imgur.com/mECPaWe.jpg"
            },
            {
              "id": 1110,
              "date_text": "May 31st",
              "text": "Tattoo artist arrested while painting the outside of his shop; police fail to deescalate",
              "tags_str": "Soft",
              "LATITUDE": 39.091293,
              "LONGITUDE": -84.277383,
              "Link1": "https://www.instagram.com/p/CA6Aa5TB1Ml/",
              "Link2": "https://instagram.fric1-2.fna.fbcdn.net/v/t50.2886-16/100852726_279345510107610_3998981863448833499_n.mp4?_nc_ht=instagram.fric1-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=YFSefphKcIYAX_M32_q&oe=5F09000E&oh=6775ecc754bbee9e3d7929587e31bf72"
            },
            {
              "id": 1111,
              "date_text": "May 31st",
              "text": "Tattoo artist arrested while painting the outside of his shop; police fail to deescalate",
              "tags_str": "Soft",
              "LATITUDE": 39.1063,
              "LONGITUDE": -84.5356,
              "Link1": "https://www.instagram.com/p/CA6Aa5TB1Ml/",
              "Link2": "https://instagram.fric1-2.fna.fbcdn.net/v/t50.2886-16/100852726_279345510107610_3998981863448833499_n.mp4?_nc_ht=instagram.fric1-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=YFSefphKcIYAX_M32_q&oe=5F09000E&oh=6775ecc754bbee9e3d7929587e31bf72"
            },
            {
              "id": 1112,
              "date_text": "June 1st",
              "text": "Police arrest reporter and force him to ground, grab another reporter",
              "tags_str": "Soft",
              "LATITUDE": 39.091293,
              "LONGITUDE": -84.277383,
              "Link1": "https://twitter.com/nswartsell/status/1267612155840528385",
              "Link2": ""
            },
            {
              "id": 1113,
              "date_text": "June 1st",
              "text": "Police arrest reporter and force him to ground, grab another reporter",
              "tags_str": "Soft",
              "LATITUDE": 39.1063,
              "LONGITUDE": -84.5356,
              "Link1": "https://twitter.com/nswartsell/status/1267612155840528385",
              "Link2": ""
            },
            {
              "id": 1114,
              "date_text": "June 2nd",
              "text": "Officer refuses to give diabetic arrestee her insulin back",
              "tags_str": "Soft",
              "LATITUDE": 39.091293,
              "LONGITUDE": -84.277383,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/gvte8e/cop_refuses_to_give_diabetic_woman_her_insulin/",
              "Link2": "https://www.tiktok.com/@zestaz/video/6833912697436867845"
            },
            {
              "id": 1115,
              "date_text": "June 2nd",
              "text": "Officer refuses to give diabetic arrestee her insulin back",
              "tags_str": "Soft",
              "LATITUDE": 39.1063,
              "LONGITUDE": -84.5356,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/gvte8e/cop_refuses_to_give_diabetic_woman_her_insulin/",
              "Link2": "https://www.tiktok.com/@zestaz/video/6833912697436867845"
            },
            {
              "id": 1116,
              "date_text": "believed to be May 30th",
              "text": "Officer swings baton at protesters, beats one who is trying to keep crowd back",
              "tags_str": "Hard, Other",
              "LATITUDE": 41.4918,
              "LONGITUDE": -81.6757,
              "Link1": "https://twitter.com/greg_doucette/status/1267114065819770880",
              "Link2": ""
            },
            {
              "id": 1117,
              "date_text": "May 30th",
              "text": "Police fire tear gas at peaceful protest",
              "tags_str": "Projectiles",
              "LATITUDE": 41.4918,
              "LONGITUDE": -81.6757,
              "Link1": "https://twitter.com/rachelscotton/status/1266840734906318848",
              "Link2": ""
            },
            {
              "id": 1118,
              "date_text": "May 30th",
              "text": "Police injure numerous protesters with rubber bullets",
              "tags_str": "Projectiles",
              "LATITUDE": 41.4918,
              "LONGITUDE": -81.6757,
              "Link1": "https://twitter.com/NEO_Scan/status/1266848874163027970",
              "Link2": "https://www.cleveland.com/court-justice/2020/06/cleveland-police-gave-order-for-george-floyd-protesters-to-disperse-legal-observers-witnesses-said-no-one-heard-it.html"
            },
            {
              "id": 1119,
              "date_text": "May 30th",
              "text": "Protester shot in head with rubber bullet",
              "tags_str": "Projectiles",
              "LATITUDE": 41.4918,
              "LONGITUDE": -81.6757,
              "Link1": "https://twitter.com/LUVRGRLLANI/status/1266866301001179136",
              "Link2": ""
            },
            {
              "id": 1120,
              "date_text": "May 30th",
              "text": "Protester shot in the eye with pellet round",
              "tags_str": "Projectiles",
              "LATITUDE": 41.4918,
              "LONGITUDE": -81.6757,
              "Link1": "https://www.youtube.com/watch?v=BYOKsLpsP4Y",
              "Link2": "https://twitter.com/OGJohnTee/status/1283816646864523264"
            },
            {
              "id": 1121,
              "date_text": "May 30th",
              "text": "Protester pepper sprayed without cause",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 41.4918,
              "LONGITUDE": -81.6757,
              "Link1": "https://www.youtube.com/watch?v=A2OTcgS-t9g",
              "Link2": "https://www.cleveland.com/court-justice/2020/08/body-camera-video-shows-cleveland-police-officer-pepper-sprayed-peaceful-protester-in-the-face.html"
            },
            {
              "id": 1122,
              "date_text": "May 29th",
              "text": "Cop hits a protester in the face, escalates to whole crowd being pepper sprayed",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 40.1444,
              "LONGITUDE": -82.9789,
              "Link1": "https://www.facebook.com/story.php?story_fbid=1137997739900780&id=100010716946743",
              "Link2": ""
            },
            {
              "id": 1123,
              "date_text": "May 29th",
              "text": "Cop hits a protester in the face, escalates to whole crowd being pepper sprayed",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 40.105155,
              "LONGITUDE": -83.010069,
              "Link1": "https://www.facebook.com/story.php?story_fbid=1137997739900780&id=100010716946743",
              "Link2": ""
            },
            {
              "id": 1124,
              "date_text": "May 30th",
              "text": "Congresswoman Joyce Beatty reportedly sprayed with \"mace or pepper spray\"",
              "tags_str": "Hard, Projectiles, Chemical",
              "LATITUDE": 40.1444,
              "LONGITUDE": -82.9789,
              "Link1": "https://www.cnn.com/2020/05/30/politics/joyce-beatty-ohio-pepper-sprayed-columbus-protest/index.html",
              "Link2": "https://twitter.com/politico/status/1266866982919516160"
            },
            {
              "id": 1125,
              "date_text": "May 30th",
              "text": "Congresswoman Joyce Beatty reportedly sprayed with \"mace or pepper spray\"",
              "tags_str": "Hard, Projectiles, Chemical",
              "LATITUDE": 40.105155,
              "LONGITUDE": -83.010069,
              "Link1": "https://www.cnn.com/2020/05/30/politics/joyce-beatty-ohio-pepper-sprayed-columbus-protest/index.html",
              "Link2": "https://twitter.com/politico/status/1266866982919516160"
            },
            {
              "id": 1126,
              "date_text": "May 30th",
              "text": "Peaceful protester sprayed in the face with mace",
              "tags_str": "Other",
              "LATITUDE": 40.1444,
              "LONGITUDE": -82.9789,
              "Link1": "https://twitter.com/rottenstrwbry/status/1266805467990446081",
              "Link2": ""
            },
            {
              "id": 1127,
              "date_text": "May 30th",
              "text": "Peaceful protester sprayed in the face with mace",
              "tags_str": "Other",
              "LATITUDE": 40.105155,
              "LONGITUDE": -83.010069,
              "Link1": "https://twitter.com/rottenstrwbry/status/1266805467990446081",
              "Link2": ""
            },
            {
              "id": 1128,
              "date_text": "May 30th",
              "text": "Police pepperspray protesters for chanting",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 40.1444,
              "LONGITUDE": -82.9789,
              "Link1": "https://twitter.com/greg_doucette/status/1266878189537824772",
              "Link2": ""
            },
            {
              "id": 1129,
              "date_text": "May 30th",
              "text": "Police pepperspray protesters for chanting",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 40.105155,
              "LONGITUDE": -83.010069,
              "Link1": "https://twitter.com/greg_doucette/status/1266878189537824772",
              "Link2": ""
            },
            {
              "id": 1130,
              "date_text": "May 30th",
              "text": "Officer chases reporter and pepper sprays her",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 40.1444,
              "LONGITUDE": -82.9789,
              "Link1": "https://pressfreedomtracker.us/all-incidents/student-journalist-chased-pepper-sprayed-during-protests-columbus/",
              "Link2": "https://twitter.com/julialwashere/status/1266730657436315649"
            },
            {
              "id": 1131,
              "date_text": "May 30th",
              "text": "Officer chases reporter and pepper sprays her",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 40.105155,
              "LONGITUDE": -83.010069,
              "Link1": "https://pressfreedomtracker.us/all-incidents/student-journalist-chased-pepper-sprayed-during-protests-columbus/",
              "Link2": "https://twitter.com/julialwashere/status/1266730657436315649"
            },
            {
              "id": 1132,
              "date_text": "May 30th",
              "text": "Police pepper spray protesters; rip mask off protester",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 40.1444,
              "LONGITUDE": -82.9789,
              "Link1": "https://twitter.com/bwk1992/status/1266833971570237442",
              "Link2": ""
            },
            {
              "id": 1133,
              "date_text": "May 30th",
              "text": "Police pepper spray protesters; rip mask off protester",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 40.105155,
              "LONGITUDE": -83.010069,
              "Link1": "https://twitter.com/bwk1992/status/1266833971570237442",
              "Link2": ""
            },
            {
              "id": 1134,
              "date_text": "May 31st",
              "text": "Police pepper-spray a medic",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 40.1444,
              "LONGITUDE": -82.9789,
              "Link1": "https://twitter.com/Katy38105157/status/1266816739444166656",
              "Link2": "https://twitter.com/SAColumbus/status/1266867613872857094"
            },
            {
              "id": 1135,
              "date_text": "May 31st",
              "text": "Police pepper-spray a medic",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 40.105155,
              "LONGITUDE": -83.010069,
              "Link1": "https://twitter.com/Katy38105157/status/1266816739444166656",
              "Link2": "https://twitter.com/SAColumbus/status/1266867613872857094"
            },
            {
              "id": 1136,
              "date_text": "May 31st",
              "text": "Police mace a woman as she walks away",
              "tags_str": "Other",
              "LATITUDE": 40.1444,
              "LONGITUDE": -82.9789,
              "Link1": "https://twitter.com/lalaitskelcey2/status/1266821476122058752",
              "Link2": "https://twitter.com/MarioLeUgly/status/1266933807929798656"
            },
            {
              "id": 1137,
              "date_text": "May 31st",
              "text": "Police mace a woman as she walks away",
              "tags_str": "Other",
              "LATITUDE": 40.105155,
              "LONGITUDE": -83.010069,
              "Link1": "https://twitter.com/lalaitskelcey2/status/1266821476122058752",
              "Link2": "https://twitter.com/MarioLeUgly/status/1266933807929798656"
            },
            {
              "id": 1138,
              "date_text": "May 31st",
              "text": "Police intimidating campus protesters by driving car towards them",
              "tags_str": "Other",
              "LATITUDE": 40.1444,
              "LONGITUDE": -82.9789,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/gtq7i4/columbus_police_officer_trying_to_use_his_car_to/",
              "Link2": ""
            },
            {
              "id": 1139,
              "date_text": "May 31st",
              "text": "Police intimidating campus protesters by driving car towards them",
              "tags_str": "Other",
              "LATITUDE": 40.105155,
              "LONGITUDE": -83.010069,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/gtq7i4/columbus_police_officer_trying_to_use_his_car_to/",
              "Link2": ""
            },
            {
              "id": 1140,
              "date_text": "May 31st",
              "text": "Police pepper spray two kneeling protesters",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 40.1444,
              "LONGITUDE": -82.9789,
              "Link1": "https://twitter.com/DabinDhillo/status/1266892095702392832",
              "Link2": "https://twitter.com/taesvangogh/status/1266907922308558848"
            },
            {
              "id": 1141,
              "date_text": "May 31st",
              "text": "Police pepper spray two kneeling protesters",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 40.105155,
              "LONGITUDE": -83.010069,
              "Link1": "https://twitter.com/DabinDhillo/status/1266892095702392832",
              "Link2": "https://twitter.com/taesvangogh/status/1266907922308558848"
            },
            {
              "id": 1142,
              "date_text": "May 31st",
              "text": "Police pepper spray African-American photographer",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 40.1444,
              "LONGITUDE": -82.9789,
              "Link1": "https://i.redd.it/4ix8f3j6dy151.jpg",
              "Link2": "https://old.reddit.com/r/Columbus/comments/gtk192/photographer_being_pepper_sprayed_by_police/"
            },
            {
              "id": 1143,
              "date_text": "May 31st",
              "text": "Police pepper spray African-American photographer",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 40.105155,
              "LONGITUDE": -83.010069,
              "Link1": "https://i.redd.it/4ix8f3j6dy151.jpg",
              "Link2": "https://old.reddit.com/r/Columbus/comments/gtk192/photographer_being_pepper_sprayed_by_police/"
            },
            {
              "id": 1144,
              "date_text": "May 31st",
              "text": "Police pepper spray sitting protesters",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 40.1444,
              "LONGITUDE": -82.9789,
              "Link1": "https://twitter.com/greg_doucette/status/1267102580070592512",
              "Link2": ""
            },
            {
              "id": 1145,
              "date_text": "May 31st",
              "text": "Police pepper spray sitting protesters",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 40.105155,
              "LONGITUDE": -83.010069,
              "Link1": "https://twitter.com/greg_doucette/status/1267102580070592512",
              "Link2": ""
            },
            {
              "id": 1146,
              "date_text": "May 31st",
              "text": "Woman holding a sign is shot with rubber bullets",
              "tags_str": "Projectiles",
              "LATITUDE": 40.1444,
              "LONGITUDE": -82.9789,
              "Link1": "https://mobile.twitter.com/chadloder/status/1267113315613806592",
              "Link2": "https://twitter.com/greg_doucette/status/1267122343454953472"
            },
            {
              "id": 1147,
              "date_text": "May 31st",
              "text": "Woman holding a sign is shot with rubber bullets",
              "tags_str": "Projectiles",
              "LATITUDE": 40.105155,
              "LONGITUDE": -83.010069,
              "Link1": "https://mobile.twitter.com/chadloder/status/1267113315613806592",
              "Link2": "https://twitter.com/greg_doucette/status/1267122343454953472"
            },
            {
              "id": 1148,
              "date_text": " May 31st",
              "text": "Man pepper-sprayed at close range",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 40.1444,
              "LONGITUDE": -82.9789,
              "Link1": "https://twitter.com/snowmanonfire/status/1267122517614964743",
              "Link2": "https://twitter.com/greg_doucette/status/1269118992540749831"
            },
            {
              "id": 1149,
              "date_text": " May 31st",
              "text": "Man pepper-sprayed at close range",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 40.105155,
              "LONGITUDE": -83.010069,
              "Link1": "https://twitter.com/snowmanonfire/status/1267122517614964743",
              "Link2": "https://twitter.com/greg_doucette/status/1269118992540749831"
            },
            {
              "id": 1150,
              "date_text": "May 31st",
              "text": "Woman shot in hand by wooden bullet",
              "tags_str": "Projectiles",
              "LATITUDE": 40.1444,
              "LONGITUDE": -82.9789,
              "Link1": "https://www.facebook.com/meatambulance/videos/10220498765450514/",
              "Link2": "https://www.facebook.com/1573913165/posts/10220477908769110"
            },
            {
              "id": 1151,
              "date_text": "May 31st",
              "text": "Woman shot in hand by wooden bullet",
              "tags_str": "Projectiles",
              "LATITUDE": 40.105155,
              "LONGITUDE": -83.010069,
              "Link1": "https://www.facebook.com/meatambulance/videos/10220498765450514/",
              "Link2": "https://www.facebook.com/1573913165/posts/10220477908769110"
            },
            {
              "id": 1152,
              "date_text": " June 1st",
              "text": "Police casually pepper spray passers by",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 40.1444,
              "LONGITUDE": -82.9789,
              "Link1": "https://twitter.com/aaron_rigg/status/1267814008859443202",
              "Link2": "https://twitter.com/aaron_rigg/status/1267649768668495878"
            },
            {
              "id": 1153,
              "date_text": " June 1st",
              "text": "Police casually pepper spray passers by",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 40.105155,
              "LONGITUDE": -83.010069,
              "Link1": "https://twitter.com/aaron_rigg/status/1267814008859443202",
              "Link2": "https://twitter.com/aaron_rigg/status/1267649768668495878"
            },
            {
              "id": 1154,
              "date_text": "June 1st",
              "text": "Police push and pepper spray reporters from The Lantern newspaper",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 40.1444,
              "LONGITUDE": -82.9789,
              "Link1": "https://www.thelantern.com/2020/06/columbus-mayor-police-chief-address-protest-policing-pepper-spray-of-lantern-journalists/",
              "Link2": "https://twitter.com/TheLantern/status/1267644471317090305"
            },
            {
              "id": 1155,
              "date_text": "June 1st",
              "text": "Police push and pepper spray reporters from The Lantern newspaper",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 40.105155,
              "LONGITUDE": -83.010069,
              "Link1": "https://www.thelantern.com/2020/06/columbus-mayor-police-chief-address-protest-policing-pepper-spray-of-lantern-journalists/",
              "Link2": "https://twitter.com/TheLantern/status/1267644471317090305"
            },
            {
              "id": 1156,
              "date_text": "June 5th",
              "text": "Bronze star veteran recounts injuries from police at protests",
              "tags_str": "Other",
              "LATITUDE": 40.1444,
              "LONGITUDE": -82.9789,
              "Link1": "https://www.dispatch.com/news/20200607/bronze-star-veteran-ryan-mcmullen-served-in-afghanistan-but-didnt-get-hurt-until-protesting-in-columbus",
              "Link2": "https://americanmilitarynews.com/2020/06/bronze-star-veteran-ryan-mcmullen-served-in-afghanistan-but-didnt-get-hurt-until-protesting-in-columbus/amp/"
            },
            {
              "id": 1157,
              "date_text": "June 5th",
              "text": "Bronze star veteran recounts injuries from police at protests",
              "tags_str": "Other",
              "LATITUDE": 40.105155,
              "LONGITUDE": -83.010069,
              "Link1": "https://www.dispatch.com/news/20200607/bronze-star-veteran-ryan-mcmullen-served-in-afghanistan-but-didnt-get-hurt-until-protesting-in-columbus",
              "Link2": "https://americanmilitarynews.com/2020/06/bronze-star-veteran-ryan-mcmullen-served-in-afghanistan-but-didnt-get-hurt-until-protesting-in-columbus/amp/"
            },
            {
              "id": 1158,
              "date_text": " June 6th",
              "text": "Police drive up to protesters, jump out and tackle them",
              "tags_str": "Hard",
              "LATITUDE": 40.1444,
              "LONGITUDE": -82.9789,
              "Link1": "https://www.tiktok.com/@frecklesandstitches/video/6835226979596340485",
              "Link2": "https://twitter.com/TrekkieByBirth/status/1276719505528492033"
            },
            {
              "id": 1159,
              "date_text": " June 6th",
              "text": "Police drive up to protesters, jump out and tackle them",
              "tags_str": "Hard",
              "LATITUDE": 40.105155,
              "LONGITUDE": -83.010069,
              "Link1": "https://www.tiktok.com/@frecklesandstitches/video/6835226979596340485",
              "Link2": "https://twitter.com/TrekkieByBirth/status/1276719505528492033"
            },
            {
              "id": 1160,
              "date_text": "June 21st",
              "text": "Man maced by police",
              "tags_str": "Other",
              "LATITUDE": 40.1444,
              "LONGITUDE": -82.9789,
              "Link1": "https://www.reddit.com/r/Columbus/comments/hdf4hu/cpd_just_hit_and_maced_a_double_amputee_bravo_you/",
              "Link2": "https://www.reddit.com/r/Columbus/comments/hddsqd/gotta_love_the_cop_dual_wielding_pepper_spray_cans/"
            },
            {
              "id": 1161,
              "date_text": "June 21st",
              "text": "Man maced by police",
              "tags_str": "Other",
              "LATITUDE": 40.105155,
              "LONGITUDE": -83.010069,
              "Link1": "https://www.reddit.com/r/Columbus/comments/hdf4hu/cpd_just_hit_and_maced_a_double_amputee_bravo_you/",
              "Link2": "https://www.reddit.com/r/Columbus/comments/hddsqd/gotta_love_the_cop_dual_wielding_pepper_spray_cans/"
            },
            {
              "id": 1162,
              "date_text": "June 21st",
              "text": "Protester dragged into street, thrown to ground and arrested",
              "tags_str": "Soft",
              "LATITUDE": 40.1444,
              "LONGITUDE": -82.9789,
              "Link1": "https://www.reddit.com/r/Bad_Cop_No_Donut/comments/hdj106/062120_columbus_ohio_police_dragging_medic_into/",
              "Link2": ""
            },
            {
              "id": 1163,
              "date_text": "June 21st",
              "text": "Protester dragged into street, thrown to ground and arrested",
              "tags_str": "Soft",
              "LATITUDE": 40.105155,
              "LONGITUDE": -83.010069,
              "Link1": "https://www.reddit.com/r/Bad_Cop_No_Donut/comments/hdj106/062120_columbus_ohio_police_dragging_medic_into/",
              "Link2": ""
            },
            {
              "id": 1164,
              "date_text": "June 21st",
              "text": "Police shove protesters, ram them with bikes",
              "tags_str": "Soft",
              "LATITUDE": 40.1444,
              "LONGITUDE": -82.9789,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/hdwgfb/columbus_ohio_cops_ram_protesters_with_bikes/",
              "Link2": ""
            },
            {
              "id": 1165,
              "date_text": "June 21st",
              "text": "Police shove protesters, ram them with bikes",
              "tags_str": "Soft",
              "LATITUDE": 40.105155,
              "LONGITUDE": -83.010069,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/hdwgfb/columbus_ohio_cops_ram_protesters_with_bikes/",
              "Link2": ""
            },
            {
              "id": 1166,
              "date_text": "June 29th",
              "text": "Police drag seated protester, body slam a second",
              "tags_str": "Other",
              "LATITUDE": 40.1444,
              "LONGITUDE": -82.9789,
              "Link1": "https://twitter.com/greg_doucette/status/1277660155354796033",
              "Link2": "https://www.instagram.com/tv/CCAZGCWjqG1"
            },
            {
              "id": 1167,
              "date_text": "June 29th",
              "text": "Police drag seated protester, body slam a second",
              "tags_str": "Other",
              "LATITUDE": 40.105155,
              "LONGITUDE": -83.010069,
              "Link1": "https://twitter.com/greg_doucette/status/1277660155354796033",
              "Link2": "https://www.instagram.com/tv/CCAZGCWjqG1"
            },
            {
              "id": 1168,
              "date_text": "May 30th",
              "text": "Police fire multiple cans of tear gas at protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 39.765396,
              "LONGITUDE": -84.099802,
              "Link1": "https://www.facebook.com/daytondailynews/videos/276588847040795",
              "Link2": ""
            },
            {
              "id": 1169,
              "date_text": "May 30th",
              "text": "Police fire multiple cans of tear gas at protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 39.7578,
              "LONGITUDE": -84.1777,
              "Link1": "https://www.facebook.com/daytondailynews/videos/276588847040795",
              "Link2": ""
            },
            {
              "id": 1170,
              "date_text": "June 1st",
              "text": "Police tear gas peaceful protest",
              "tags_str": "Projectiles",
              "LATITUDE": 39.765396,
              "LONGITUDE": -84.099802,
              "Link1": "https://twitter.com/greg_doucette/status/1279832182463365125",
              "Link2": ""
            },
            {
              "id": 1171,
              "date_text": "June 1st",
              "text": "Police tear gas peaceful protest",
              "tags_str": "Projectiles",
              "LATITUDE": 39.7578,
              "LONGITUDE": -84.1777,
              "Link1": "https://twitter.com/greg_doucette/status/1279832182463365125",
              "Link2": ""
            },
            {
              "id": 1172,
              "date_text": "May 30th",
              "text": "Police use tear gas on protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 41.642,
              "LONGITUDE": -83.5438,
              "Link1": "https://www.facebook.com/thetoledoblade/videos/2407373416227629",
              "Link2": "https://www.facebook.com/thetoledoblade/videos/745938859545308"
            },
            {
              "id": 1173,
              "date_text": "May 30th",
              "text": "Police use tear gas on protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 41.642,
              "LONGITUDE": -83.5438,
              "Link1": "https://www.facebook.com/thetoledoblade/videos/2407373416227629",
              "Link2": "https://www.facebook.com/thetoledoblade/videos/745938859545308"
            },
            {
              "id": 1174,
              "date_text": "June 9th",
              "text": "USA Today journalist arrested",
              "tags_str": "Soft",
              "LATITUDE": 39.156639,
              "LONGITUDE": -75.535983,
              "Link1": "https://www.usatoday.com/story/news/nation/2020/06/09/george-floyd-protests-usa-today-network-reporter-arrested-delaware/5331163002/",
              "Link2": "https://v.redd.it/u78faokca3451"
            },
            {
              "id": 1175,
              "date_text": "June 9th",
              "text": "Police make violent arrests; arrest woman filming",
              "tags_str": "Soft",
              "LATITUDE": 39.156639,
              "LONGITUDE": -75.535983,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/hew8sz/dover_nurse_gets_tackled_and_arrested_by_cops_for/",
              "Link2": "https://www.youtube.com/watch?v=oXh2Qr2Enbo"
            },
            {
              "id": 1176,
              "date_text": "June 1st",
              "text": "Police arrest woman and reporter",
              "tags_str": "Soft",
              "LATITUDE": 40.235571,
              "LONGITUDE": -74.029486,
              "Link1": "https://www.northjersey.com/story/news/local/how-we-live/2020/06/01/app-reporter-apparently-arrested-asbury-park-george-floyd-protest/5314750002/",
              "Link2": "https://twitter.com/greg_doucette/status/1270480487249776641"
            },
            {
              "id": 1177,
              "date_text": "May 29th",
              "text": "Police repeatedly shoot tear gas into crowd, even after crowd has dispersed",
              "tags_str": "Projectiles",
              "LATITUDE": 41.6005,
              "LONGITUDE": -93.6088,
              "Link1": "https://www.kcci.com/article/developing-protesters-face-off-with-police-in-downtown-des-moines/32717301",
              "Link2": ""
            },
            {
              "id": 1178,
              "date_text": "May 29th",
              "text": "Police repeatedly shoot tear gas into crowd, even after crowd has dispersed",
              "tags_str": "Projectiles",
              "LATITUDE": 41.6005,
              "LONGITUDE": -93.6088,
              "Link1": "https://www.kcci.com/article/developing-protesters-face-off-with-police-in-downtown-des-moines/32717301",
              "Link2": ""
            },
            {
              "id": 1179,
              "date_text": "May 30th",
              "text": "Police truck shoots at cars, hitting mother and breaking her finger",
              "tags_str": "Projectiles",
              "LATITUDE": 41.6005,
              "LONGITUDE": -93.6088,
              "Link1": "https://www.reddit.com/r/2020PoliceBrutality/comments/gxlfdo/police_truck_shoots_at_cars_hitting_mother_and/?utm_source=share&utm_medium=web2x",
              "Link2": "https://www.tiktok.com/@jakegracey/video/6834936818799004934?source=h5_m"
            },
            {
              "id": 1180,
              "date_text": "May 30th",
              "text": "Police truck shoots at cars, hitting mother and breaking her finger",
              "tags_str": "Projectiles",
              "LATITUDE": 41.6005,
              "LONGITUDE": -93.6088,
              "Link1": "https://www.reddit.com/r/2020PoliceBrutality/comments/gxlfdo/police_truck_shoots_at_cars_hitting_mother_and/?utm_source=share&utm_medium=web2x",
              "Link2": "https://www.tiktok.com/@jakegracey/video/6834936818799004934?source=h5_m"
            },
            {
              "id": 1181,
              "date_text": "May 30th",
              "text": "Police tear gas, pepper spray and beat peaceful protesters",
              "tags_str": "Hard, Projectiles, Chemical",
              "LATITUDE": 41.6005,
              "LONGITUDE": -93.6088,
              "Link1": "https://www.facebook.com/andre.develliott.9/videos/260083008434875/",
              "Link2": "https://www.reddit.com/r/desmoines/comments/gxkoii/some_additional_footage_from_saturday_night/"
            },
            {
              "id": 1182,
              "date_text": "May 30th",
              "text": "Police tear gas, pepper spray and beat peaceful protesters",
              "tags_str": "Hard, Projectiles, Chemical",
              "LATITUDE": 41.6005,
              "LONGITUDE": -93.6088,
              "Link1": "https://www.facebook.com/andre.develliott.9/videos/260083008434875/",
              "Link2": "https://www.reddit.com/r/desmoines/comments/gxkoii/some_additional_footage_from_saturday_night/"
            },
            {
              "id": 1183,
              "date_text": "May 31st",
              "text": "Police detain Des Moines Register reporter while covering event",
              "tags_str": "Other",
              "LATITUDE": 41.6005,
              "LONGITUDE": -93.6088,
              "Link1": "https://twitter.com/RachelSB/status/1267260438900867074",
              "Link2": "https://www.desmoinesregister.com/story/news/2020/05/31/register-reporter-arrested-while-covering-protest/5304560002/"
            },
            {
              "id": 1184,
              "date_text": "May 31st",
              "text": "Police detain Des Moines Register reporter while covering event",
              "tags_str": "Other",
              "LATITUDE": 41.6005,
              "LONGITUDE": -93.6088,
              "Link1": "https://twitter.com/RachelSB/status/1267260438900867074",
              "Link2": "https://www.desmoinesregister.com/story/news/2020/05/31/register-reporter-arrested-while-covering-protest/5304560002/"
            },
            {
              "id": 1185,
              "date_text": "May 31st",
              "text": "Police fire gas at peaceful protesters across active street",
              "tags_str": "Projectiles",
              "LATITUDE": 41.6005,
              "LONGITUDE": -93.6088,
              "Link1": "https://www.reddit.com/r/desmoines/comments/guds5i/tear_gas_being_fired_at_protestors/",
              "Link2": ""
            },
            {
              "id": 1186,
              "date_text": "May 31st",
              "text": "Police fire gas at peaceful protesters across active street",
              "tags_str": "Projectiles",
              "LATITUDE": 41.6005,
              "LONGITUDE": -93.6088,
              "Link1": "https://www.reddit.com/r/desmoines/comments/guds5i/tear_gas_being_fired_at_protestors/",
              "Link2": ""
            },
            {
              "id": 1187,
              "date_text": "June 1st",
              "text": "Police pepper spray Des Moines Register reporter even as she repeatedly announced herself as press",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 41.6005,
              "LONGITUDE": -93.6088,
              "Link1": "https://twitter.com/katie_akin/status/1267694434847731713",
              "Link2": "https://www.desmoinesregister.com/story/news/2020/06/02/des-moines-police-pepper-spray-journalist-iowa-george-floyd-protest-des-moines-register-reporter/3126478001/"
            },
            {
              "id": 1188,
              "date_text": "June 1st",
              "text": "Police pepper spray Des Moines Register reporter even as she repeatedly announced herself as press",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 41.6005,
              "LONGITUDE": -93.6088,
              "Link1": "https://twitter.com/katie_akin/status/1267694434847731713",
              "Link2": "https://www.desmoinesregister.com/story/news/2020/06/02/des-moines-police-pepper-spray-journalist-iowa-george-floyd-protest-des-moines-register-reporter/3126478001/"
            },
            {
              "id": 1189,
              "date_text": " June 2nd",
              "text": "Police use or threaten to use pepper-spray in an elevator on apartment residents trying to go home",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 41.6005,
              "LONGITUDE": -93.6088,
              "Link1": "https://twitter.com/greg_doucette/status/1268235074580987906",
              "Link2": ""
            },
            {
              "id": 1190,
              "date_text": " June 2nd",
              "text": "Police use or threaten to use pepper-spray in an elevator on apartment residents trying to go home",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 41.6005,
              "LONGITUDE": -93.6088,
              "Link1": "https://twitter.com/greg_doucette/status/1268235074580987906",
              "Link2": ""
            },
            {
              "id": 1191,
              "date_text": "June 4th",
              "text": "Police arrest a nonviolent Black cyclist at a BLM supply drop-off event",
              "tags_str": "Soft",
              "LATITUDE": 41.6005,
              "LONGITUDE": -93.6088,
              "Link1": "https://twitter.com/DesMoinesBLM/status/1268710416219242496?s=19&fbclid=IwAR3z0SHL6ULykmUX_V6Um-nOHiRQACj-r9XDDmvtIc-o5D10zVi9_3OTVaE",
              "Link2": ""
            },
            {
              "id": 1192,
              "date_text": "June 4th",
              "text": "Police arrest a nonviolent Black cyclist at a BLM supply drop-off event",
              "tags_str": "Soft",
              "LATITUDE": 41.6005,
              "LONGITUDE": -93.6088,
              "Link1": "https://twitter.com/DesMoinesBLM/status/1268710416219242496?s=19&fbclid=IwAR3z0SHL6ULykmUX_V6Um-nOHiRQACj-r9XDDmvtIc-o5D10zVi9_3OTVaE",
              "Link2": ""
            },
            {
              "id": 1193,
              "date_text": "June 5th",
              "text": "Armed police raid gay bar helping wounded Black Lives Matter protesters on the first day of Pride Month",
              "tags_str": "Other",
              "LATITUDE": 41.6005,
              "LONGITUDE": -93.6088,
              "Link1": "https://www.pinknews.co.uk/2020/06/05/police-raid-blazing-saddle-des-moines-iowa-black-lives-matter-stonewall/?fbclid=IwAR20SUPSke3O_U2jqXaicl3dOcKwKPYlG5eOc131oao76Z2rEXXz0-ASORQ",
              "Link2": "http://iowainformer.com/politics/2020/06/des-moines-gay-bar-raided-amid-black-lives-matter-protests-as-pride-month-begins/"
            },
            {
              "id": 1194,
              "date_text": "June 5th",
              "text": "Armed police raid gay bar helping wounded Black Lives Matter protesters on the first day of Pride Month",
              "tags_str": "Other",
              "LATITUDE": 41.6005,
              "LONGITUDE": -93.6088,
              "Link1": "https://www.pinknews.co.uk/2020/06/05/police-raid-blazing-saddle-des-moines-iowa-black-lives-matter-stonewall/?fbclid=IwAR20SUPSke3O_U2jqXaicl3dOcKwKPYlG5eOc131oao76Z2rEXXz0-ASORQ",
              "Link2": "http://iowainformer.com/politics/2020/06/des-moines-gay-bar-raided-amid-black-lives-matter-protests-as-pride-month-begins/"
            },
            {
              "id": 1195,
              "date_text": "June 22nd",
              "text": "Police make violent arrests & harass protesters filming",
              "tags_str": "Soft",
              "LATITUDE": 41.6005,
              "LONGITUDE": -93.6088,
              "Link1": "https://twitter.com/greg_doucette/status/1275641933671673859",
              "Link2": ""
            },
            {
              "id": 1196,
              "date_text": "June 22nd",
              "text": "Police make violent arrests & harass protesters filming",
              "tags_str": "Soft",
              "LATITUDE": 41.6005,
              "LONGITUDE": -93.6088,
              "Link1": "https://twitter.com/greg_doucette/status/1275641933671673859",
              "Link2": ""
            },
            {
              "id": 1197,
              "date_text": "June 22nd",
              "text": "Police push, shove and pepper-spray protesters",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 41.6005,
              "LONGITUDE": -93.6088,
              "Link1": "https://www.instagram.com/tv/CBw5mKxjHPq/",
              "Link2": "https://www.desmoinesregister.com/story/news/crime-and-courts/2020/06/23/police-used-aggressive-kettling-tactics-des-moines-protesters-say/3241518001/"
            },
            {
              "id": 1198,
              "date_text": "June 22nd",
              "text": "Police push, shove and pepper-spray protesters",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 41.6005,
              "LONGITUDE": -93.6088,
              "Link1": "https://www.instagram.com/tv/CBw5mKxjHPq/",
              "Link2": "https://www.desmoinesregister.com/story/news/crime-and-courts/2020/06/23/police-used-aggressive-kettling-tactics-des-moines-protesters-say/3241518001/"
            },
            {
              "id": 1199,
              "date_text": "July 1st",
              "text": "Police arrest 17 people during a peaceful protest for Black Lives Matter at the State Capitol",
              "tags_str": "Soft",
              "LATITUDE": 41.6005,
              "LONGITUDE": -93.6088,
              "Link1": "https://twitter.com/shelbyfleig/status/1278399613683339265",
              "Link2": "https://www.desmoinesregister.com/story/news/2020/07/01/black-lives-matter-protest-state-capitol-results-arrests/5358305002/"
            },
            {
              "id": 1200,
              "date_text": "July 1st",
              "text": "Police arrest 17 people during a peaceful protest for Black Lives Matter at the State Capitol",
              "tags_str": "Soft",
              "LATITUDE": 41.6005,
              "LONGITUDE": -93.6088,
              "Link1": "https://twitter.com/shelbyfleig/status/1278399613683339265",
              "Link2": "https://www.desmoinesregister.com/story/news/2020/07/01/black-lives-matter-protest-state-capitol-results-arrests/5358305002/"
            },
            {
              "id": 1201,
              "date_text": "June 3rd",
              "text": "Iowa State Police use tear gas & flashbangs against crowd of civilians attempting to enter I-80 and later against Iowa City EMS.",
              "tags_str": "Projectiles",
              "LATITUDE": 41.654899,
              "LONGITUDE": -91.511192,
              "Link1": "https://twitter.com/DJPAIMON/status/1268399580753858561",
              "Link2": "https://www.reddit.com/r/IowaCity/comments/gwx86v/another_angle_of_the_police_firing_upon_us/"
            },
            {
              "id": 1202,
              "date_text": "June 27th",
              "text": "Aurora police violently disperse violin vigil",
              "tags_str": "Other",
              "LATITUDE": 39.73780900000001,
              "LONGITUDE": -104.815233,
              "Link1": "https://www.reddit.com/r/Bad_Cop_No_Donut/comments/hhfrh8/062820_musicians_in_aurora_colorado_honoring/",
              "Link2": "https://www.reddit.com/r/2020PoliceBrutality/comments/hhh6fe/aurora_co_during_a_vigil_with_live_violinists_for/"
            },
            {
              "id": 1203,
              "date_text": "June 27th",
              "text": "Aurora police violently disperse violin vigil",
              "tags_str": "Other",
              "LATITUDE": 39.736788,
              "LONGITUDE": -104.864618,
              "Link1": "https://www.reddit.com/r/Bad_Cop_No_Donut/comments/hhfrh8/062820_musicians_in_aurora_colorado_honoring/",
              "Link2": "https://www.reddit.com/r/2020PoliceBrutality/comments/hhh6fe/aurora_co_during_a_vigil_with_live_violinists_for/"
            },
            {
              "id": 1204,
              "date_text": "June 1st",
              "text": "Multiple cops pin man to ground while repeatedly punching him",
              "tags_str": "Hard",
              "LATITUDE": 38.8335,
              "LONGITUDE": -104.8206,
              "Link1": "https://www.facebook.com/Shawn.R.Russ/videos/10221345617964005/",
              "Link2": "https://www.kktv.com/content/news/Colorado-Springs-police-issue-statement-following-use-of-force-arrest-during-protest-570969681.html"
            },
            {
              "id": 1205,
              "date_text": "June 1st",
              "text": "Police use LRAD, tear gas and pepper spray to dispers protesters",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 38.8335,
              "LONGITUDE": -104.8206,
              "Link1": "https://www.youtube.com/watch?v=NrxBDk2g9H4",
              "Link2": "https://twitter.com/KristaWitiakTV/status/1267692960105353217"
            },
            {
              "id": 1206,
              "date_text": "May 28th",
              "text": "Reporter shot with multiple pepper balls",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.840562,
              "LONGITUDE": -105.007985,
              "Link1": "https://www.denverpost.com/2020/05/29/denver-post-photographer-pepper-balls-george-floyd-protest/",
              "Link2": "https://www.nytimes.com/2020/06/01/business/media/reporters-protests-george-floyd.html"
            },
            {
              "id": 1207,
              "date_text": "May 28th",
              "text": "Reporter shot with multiple pepper balls",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.6941,
              "LONGITUDE": -104.8786,
              "Link1": "https://www.denverpost.com/2020/05/29/denver-post-photographer-pepper-balls-george-floyd-protest/",
              "Link2": "https://www.nytimes.com/2020/06/01/business/media/reporters-protests-george-floyd.html"
            },
            {
              "id": 1208,
              "date_text": "May 28th",
              "text": "Reporter shot with multiple pepper balls",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.7507,
              "LONGITUDE": -104.989,
              "Link1": "https://www.denverpost.com/2020/05/29/denver-post-photographer-pepper-balls-george-floyd-protest/",
              "Link2": "https://www.nytimes.com/2020/06/01/business/media/reporters-protests-george-floyd.html"
            },
            {
              "id": 1209,
              "date_text": "May 28th",
              "text": "Reporter shot with multiple pepper balls",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.746931,
              "LONGITUDE": -105.062036,
              "Link1": "https://www.denverpost.com/2020/05/29/denver-post-photographer-pepper-balls-george-floyd-protest/",
              "Link2": "https://www.nytimes.com/2020/06/01/business/media/reporters-protests-george-floyd.html"
            },
            {
              "id": 1210,
              "date_text": "May 29th",
              "text": "Police pepperspray people trying to record",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.840562,
              "LONGITUDE": -105.007985,
              "Link1": "https://twitter.com/greg_doucette/status/1266758227930333188",
              "Link2": "https://twitter.com/Dizzle14Double/status/1266615473816260609"
            },
            {
              "id": 1211,
              "date_text": "May 29th",
              "text": "Police pepperspray people trying to record",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.6941,
              "LONGITUDE": -104.8786,
              "Link1": "https://twitter.com/greg_doucette/status/1266758227930333188",
              "Link2": "https://twitter.com/Dizzle14Double/status/1266615473816260609"
            },
            {
              "id": 1212,
              "date_text": "May 29th",
              "text": "Police pepperspray people trying to record",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.7507,
              "LONGITUDE": -104.989,
              "Link1": "https://twitter.com/greg_doucette/status/1266758227930333188",
              "Link2": "https://twitter.com/Dizzle14Double/status/1266615473816260609"
            },
            {
              "id": 1213,
              "date_text": "May 29th",
              "text": "Police pepperspray people trying to record",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.746931,
              "LONGITUDE": -105.062036,
              "Link1": "https://twitter.com/greg_doucette/status/1266758227930333188",
              "Link2": "https://twitter.com/Dizzle14Double/status/1266615473816260609"
            },
            {
              "id": 1214,
              "date_text": "May 29th",
              "text": "Denver law enforcement shoot at reporters",
              "tags_str": "Projectiles",
              "LATITUDE": 39.840562,
              "LONGITUDE": -105.007985,
              "Link1": "https://twitter.com/AdiGTV/status/1266554320717099008",
              "Link2": "https://pressfreedomtracker.us/all-incidents/photojournalist-covering-denver-protests-hit-multiple-pepper-balls/"
            },
            {
              "id": 1215,
              "date_text": "May 29th",
              "text": "Denver law enforcement shoot at reporters",
              "tags_str": "Projectiles",
              "LATITUDE": 39.6941,
              "LONGITUDE": -104.8786,
              "Link1": "https://twitter.com/AdiGTV/status/1266554320717099008",
              "Link2": "https://pressfreedomtracker.us/all-incidents/photojournalist-covering-denver-protests-hit-multiple-pepper-balls/"
            },
            {
              "id": 1216,
              "date_text": "May 29th",
              "text": "Denver law enforcement shoot at reporters",
              "tags_str": "Projectiles",
              "LATITUDE": 39.7507,
              "LONGITUDE": -104.989,
              "Link1": "https://twitter.com/AdiGTV/status/1266554320717099008",
              "Link2": "https://pressfreedomtracker.us/all-incidents/photojournalist-covering-denver-protests-hit-multiple-pepper-balls/"
            },
            {
              "id": 1217,
              "date_text": "May 29th",
              "text": "Denver law enforcement shoot at reporters",
              "tags_str": "Projectiles",
              "LATITUDE": 39.746931,
              "LONGITUDE": -105.062036,
              "Link1": "https://twitter.com/AdiGTV/status/1266554320717099008",
              "Link2": "https://pressfreedomtracker.us/all-incidents/photojournalist-covering-denver-protests-hit-multiple-pepper-balls/"
            },
            {
              "id": 1218,
              "date_text": "May 29th",
              "text": "Denver SWAT shoot at woman trying to stop armored car",
              "tags_str": "Projectiles",
              "LATITUDE": 39.840562,
              "LONGITUDE": -105.007985,
              "Link1": "https://twitter.com/DoughertyKMGH/status/1266560264918491138/video/1",
              "Link2": ""
            },
            {
              "id": 1219,
              "date_text": "May 29th",
              "text": "Denver SWAT shoot at woman trying to stop armored car",
              "tags_str": "Projectiles",
              "LATITUDE": 39.6941,
              "LONGITUDE": -104.8786,
              "Link1": "https://twitter.com/DoughertyKMGH/status/1266560264918491138/video/1",
              "Link2": ""
            },
            {
              "id": 1220,
              "date_text": "May 29th",
              "text": "Denver SWAT shoot at woman trying to stop armored car",
              "tags_str": "Projectiles",
              "LATITUDE": 39.7507,
              "LONGITUDE": -104.989,
              "Link1": "https://twitter.com/DoughertyKMGH/status/1266560264918491138/video/1",
              "Link2": ""
            },
            {
              "id": 1221,
              "date_text": "May 29th",
              "text": "Denver SWAT shoot at woman trying to stop armored car",
              "tags_str": "Projectiles",
              "LATITUDE": 39.746931,
              "LONGITUDE": -105.062036,
              "Link1": "https://twitter.com/DoughertyKMGH/status/1266560264918491138/video/1",
              "Link2": ""
            },
            {
              "id": 1222,
              "date_text": "May 29th",
              "text": "Police discharge tear gas into group of protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 39.840562,
              "LONGITUDE": -105.007985,
              "Link1": "https://www.reddit.com/r/Denver/comments/gslcxb/the_moment_the_cops_tear_gassed_the_protesters_at/",
              "Link2": ""
            },
            {
              "id": 1223,
              "date_text": "May 29th",
              "text": "Police discharge tear gas into group of protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 39.6941,
              "LONGITUDE": -104.8786,
              "Link1": "https://www.reddit.com/r/Denver/comments/gslcxb/the_moment_the_cops_tear_gassed_the_protesters_at/",
              "Link2": ""
            },
            {
              "id": 1224,
              "date_text": "May 29th",
              "text": "Police discharge tear gas into group of protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 39.7507,
              "LONGITUDE": -104.989,
              "Link1": "https://www.reddit.com/r/Denver/comments/gslcxb/the_moment_the_cops_tear_gassed_the_protesters_at/",
              "Link2": ""
            },
            {
              "id": 1225,
              "date_text": "May 29th",
              "text": "Police discharge tear gas into group of protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 39.746931,
              "LONGITUDE": -105.062036,
              "Link1": "https://www.reddit.com/r/Denver/comments/gslcxb/the_moment_the_cops_tear_gassed_the_protesters_at/",
              "Link2": ""
            },
            {
              "id": 1226,
              "date_text": "May 30th",
              "text": "Police throw reporter into fire",
              "tags_str": "Projectiles",
              "LATITUDE": 39.840562,
              "LONGITUDE": -105.007985,
              "Link1": "https://twitter.com/tessrmalle/status/1266945413258653696",
              "Link2": "https://www.reddit.com/r/2020PoliceBrutality/comments/gunfut/denver_officer_pushed_a_photographer_into_a_fire/"
            },
            {
              "id": 1227,
              "date_text": "May 30th",
              "text": "Police throw reporter into fire",
              "tags_str": "Projectiles",
              "LATITUDE": 39.6941,
              "LONGITUDE": -104.8786,
              "Link1": "https://twitter.com/tessrmalle/status/1266945413258653696",
              "Link2": "https://www.reddit.com/r/2020PoliceBrutality/comments/gunfut/denver_officer_pushed_a_photographer_into_a_fire/"
            },
            {
              "id": 1228,
              "date_text": "May 30th",
              "text": "Police throw reporter into fire",
              "tags_str": "Projectiles",
              "LATITUDE": 39.7507,
              "LONGITUDE": -104.989,
              "Link1": "https://twitter.com/tessrmalle/status/1266945413258653696",
              "Link2": "https://www.reddit.com/r/2020PoliceBrutality/comments/gunfut/denver_officer_pushed_a_photographer_into_a_fire/"
            },
            {
              "id": 1229,
              "date_text": "May 30th",
              "text": "Police throw reporter into fire",
              "tags_str": "Projectiles",
              "LATITUDE": 39.746931,
              "LONGITUDE": -105.062036,
              "Link1": "https://twitter.com/tessrmalle/status/1266945413258653696",
              "Link2": "https://www.reddit.com/r/2020PoliceBrutality/comments/gunfut/denver_officer_pushed_a_photographer_into_a_fire/"
            },
            {
              "id": 1230,
              "date_text": "May 30th",
              "text": "Police tear gas and shoot protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 39.840562,
              "LONGITUDE": -105.007985,
              "Link1": "https://twitter.com/moneyroe99/status/1266956171409346566",
              "Link2": ""
            },
            {
              "id": 1231,
              "date_text": "May 30th",
              "text": "Police tear gas and shoot protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 39.6941,
              "LONGITUDE": -104.8786,
              "Link1": "https://twitter.com/moneyroe99/status/1266956171409346566",
              "Link2": ""
            },
            {
              "id": 1232,
              "date_text": "May 30th",
              "text": "Police tear gas and shoot protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 39.7507,
              "LONGITUDE": -104.989,
              "Link1": "https://twitter.com/moneyroe99/status/1266956171409346566",
              "Link2": ""
            },
            {
              "id": 1233,
              "date_text": "May 30th",
              "text": "Police tear gas and shoot protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 39.746931,
              "LONGITUDE": -105.062036,
              "Link1": "https://twitter.com/moneyroe99/status/1266956171409346566",
              "Link2": ""
            },
            {
              "id": 1234,
              "date_text": "May 30th",
              "text": "Denver law enforcement shoot at reporter standing on the sidewalk",
              "tags_str": "Projectiles",
              "LATITUDE": 39.840562,
              "LONGITUDE": -105.007985,
              "Link1": "https://youtu.be/xNLZ7exVxq4?t=110",
              "Link2": ""
            },
            {
              "id": 1235,
              "date_text": "May 30th",
              "text": "Denver law enforcement shoot at reporter standing on the sidewalk",
              "tags_str": "Projectiles",
              "LATITUDE": 39.6941,
              "LONGITUDE": -104.8786,
              "Link1": "https://youtu.be/xNLZ7exVxq4?t=110",
              "Link2": ""
            },
            {
              "id": 1236,
              "date_text": "May 30th",
              "text": "Denver law enforcement shoot at reporter standing on the sidewalk",
              "tags_str": "Projectiles",
              "LATITUDE": 39.7507,
              "LONGITUDE": -104.989,
              "Link1": "https://youtu.be/xNLZ7exVxq4?t=110",
              "Link2": ""
            },
            {
              "id": 1237,
              "date_text": "May 30th",
              "text": "Denver law enforcement shoot at reporter standing on the sidewalk",
              "tags_str": "Projectiles",
              "LATITUDE": 39.746931,
              "LONGITUDE": -105.062036,
              "Link1": "https://youtu.be/xNLZ7exVxq4?t=110",
              "Link2": ""
            },
            {
              "id": 1238,
              "date_text": "May 30th",
              "text": "Bystander claims police shoot him in the eye",
              "tags_str": "Projectiles",
              "LATITUDE": 39.840562,
              "LONGITUDE": -105.007985,
              "Link1": "https://www.denverpost.com/2020/06/09/denver-protest-bystander-blinded/",
              "Link2": "https://denver.cbslocal.com/2020/06/08/denver-protests-george-floyd-jax-feldmann-denver-police-foam-bullet/"
            },
            {
              "id": 1239,
              "date_text": "May 30th",
              "text": "Bystander claims police shoot him in the eye",
              "tags_str": "Projectiles",
              "LATITUDE": 39.6941,
              "LONGITUDE": -104.8786,
              "Link1": "https://www.denverpost.com/2020/06/09/denver-protest-bystander-blinded/",
              "Link2": "https://denver.cbslocal.com/2020/06/08/denver-protests-george-floyd-jax-feldmann-denver-police-foam-bullet/"
            },
            {
              "id": 1240,
              "date_text": "May 30th",
              "text": "Bystander claims police shoot him in the eye",
              "tags_str": "Projectiles",
              "LATITUDE": 39.7507,
              "LONGITUDE": -104.989,
              "Link1": "https://www.denverpost.com/2020/06/09/denver-protest-bystander-blinded/",
              "Link2": "https://denver.cbslocal.com/2020/06/08/denver-protests-george-floyd-jax-feldmann-denver-police-foam-bullet/"
            },
            {
              "id": 1241,
              "date_text": "May 30th",
              "text": "Bystander claims police shoot him in the eye",
              "tags_str": "Projectiles",
              "LATITUDE": 39.746931,
              "LONGITUDE": -105.062036,
              "Link1": "https://www.denverpost.com/2020/06/09/denver-protest-bystander-blinded/",
              "Link2": "https://denver.cbslocal.com/2020/06/08/denver-protests-george-floyd-jax-feldmann-denver-police-foam-bullet/"
            },
            {
              "id": 1242,
              "date_text": "May 30th",
              "text": "Police spray two people who are backing away",
              "tags_str": "Other",
              "LATITUDE": 39.840562,
              "LONGITUDE": -105.007985,
              "Link1": "https://twitter.com/BySajaHindi/status/1266935262774517760",
              "Link2": "https://twitter.com/EliseSchmelzer/status/1266938828603961344"
            },
            {
              "id": 1243,
              "date_text": "May 30th",
              "text": "Police spray two people who are backing away",
              "tags_str": "Other",
              "LATITUDE": 39.6941,
              "LONGITUDE": -104.8786,
              "Link1": "https://twitter.com/BySajaHindi/status/1266935262774517760",
              "Link2": "https://twitter.com/EliseSchmelzer/status/1266938828603961344"
            },
            {
              "id": 1244,
              "date_text": "May 30th",
              "text": "Police spray two people who are backing away",
              "tags_str": "Other",
              "LATITUDE": 39.7507,
              "LONGITUDE": -104.989,
              "Link1": "https://twitter.com/BySajaHindi/status/1266935262774517760",
              "Link2": "https://twitter.com/EliseSchmelzer/status/1266938828603961344"
            },
            {
              "id": 1245,
              "date_text": "May 30th",
              "text": "Police spray two people who are backing away",
              "tags_str": "Other",
              "LATITUDE": 39.746931,
              "LONGITUDE": -105.062036,
              "Link1": "https://twitter.com/BySajaHindi/status/1266935262774517760",
              "Link2": "https://twitter.com/EliseSchmelzer/status/1266938828603961344"
            },
            {
              "id": 1246,
              "date_text": "May 30th",
              "text": "Crowd of journalists tear gassed",
              "tags_str": "Projectiles",
              "LATITUDE": 39.840562,
              "LONGITUDE": -105.007985,
              "Link1": "https://twitter.com/LEFendt/status/1267274100793212929",
              "Link2": "https://twitter.com/LEFendt/status/1266953418871984128"
            },
            {
              "id": 1247,
              "date_text": "May 30th",
              "text": "Crowd of journalists tear gassed",
              "tags_str": "Projectiles",
              "LATITUDE": 39.6941,
              "LONGITUDE": -104.8786,
              "Link1": "https://twitter.com/LEFendt/status/1267274100793212929",
              "Link2": "https://twitter.com/LEFendt/status/1266953418871984128"
            },
            {
              "id": 1248,
              "date_text": "May 30th",
              "text": "Crowd of journalists tear gassed",
              "tags_str": "Projectiles",
              "LATITUDE": 39.7507,
              "LONGITUDE": -104.989,
              "Link1": "https://twitter.com/LEFendt/status/1267274100793212929",
              "Link2": "https://twitter.com/LEFendt/status/1266953418871984128"
            },
            {
              "id": 1249,
              "date_text": "May 30th",
              "text": "Crowd of journalists tear gassed",
              "tags_str": "Projectiles",
              "LATITUDE": 39.746931,
              "LONGITUDE": -105.062036,
              "Link1": "https://twitter.com/LEFendt/status/1267274100793212929",
              "Link2": "https://twitter.com/LEFendt/status/1266953418871984128"
            },
            {
              "id": 1250,
              "date_text": "May 31st",
              "text": "Police fire pepper balls at car with pregnant woman",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.840562,
              "LONGITUDE": -105.007985,
              "Link1": "https://www.reddit.com/r/2020PoliceBrutality/comments/gumff6/denver_police_fire_pepper_balls_at_a_car_with_a/",
              "Link2": "https://www.denverpost.com/2020/06/04/denver-police-investigation-pepper-balls-shot-pregnant-woman-in-car/"
            },
            {
              "id": 1251,
              "date_text": "May 31st",
              "text": "Police fire pepper balls at car with pregnant woman",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.6941,
              "LONGITUDE": -104.8786,
              "Link1": "https://www.reddit.com/r/2020PoliceBrutality/comments/gumff6/denver_police_fire_pepper_balls_at_a_car_with_a/",
              "Link2": "https://www.denverpost.com/2020/06/04/denver-police-investigation-pepper-balls-shot-pregnant-woman-in-car/"
            },
            {
              "id": 1252,
              "date_text": "May 31st",
              "text": "Police fire pepper balls at car with pregnant woman",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.7507,
              "LONGITUDE": -104.989,
              "Link1": "https://www.reddit.com/r/2020PoliceBrutality/comments/gumff6/denver_police_fire_pepper_balls_at_a_car_with_a/",
              "Link2": "https://www.denverpost.com/2020/06/04/denver-police-investigation-pepper-balls-shot-pregnant-woman-in-car/"
            },
            {
              "id": 1253,
              "date_text": "May 31st",
              "text": "Police fire pepper balls at car with pregnant woman",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.746931,
              "LONGITUDE": -105.062036,
              "Link1": "https://www.reddit.com/r/2020PoliceBrutality/comments/gumff6/denver_police_fire_pepper_balls_at_a_car_with_a/",
              "Link2": "https://www.denverpost.com/2020/06/04/denver-police-investigation-pepper-balls-shot-pregnant-woman-in-car/"
            },
            {
              "id": 1254,
              "date_text": "May 31st",
              "text": "Police officer fires at protester while driving away",
              "tags_str": "Projectiles",
              "LATITUDE": 39.840562,
              "LONGITUDE": -105.007985,
              "Link1": "https://twitter.com/heyydnae/status/1267139396278661121?s=21",
              "Link2": ""
            },
            {
              "id": 1255,
              "date_text": "May 31st",
              "text": "Police officer fires at protester while driving away",
              "tags_str": "Projectiles",
              "LATITUDE": 39.6941,
              "LONGITUDE": -104.8786,
              "Link1": "https://twitter.com/heyydnae/status/1267139396278661121?s=21",
              "Link2": ""
            },
            {
              "id": 1256,
              "date_text": "May 31st",
              "text": "Police officer fires at protester while driving away",
              "tags_str": "Projectiles",
              "LATITUDE": 39.7507,
              "LONGITUDE": -104.989,
              "Link1": "https://twitter.com/heyydnae/status/1267139396278661121?s=21",
              "Link2": ""
            },
            {
              "id": 1257,
              "date_text": "May 31st",
              "text": "Police officer fires at protester while driving away",
              "tags_str": "Projectiles",
              "LATITUDE": 39.746931,
              "LONGITUDE": -105.062036,
              "Link1": "https://twitter.com/heyydnae/status/1267139396278661121?s=21",
              "Link2": ""
            },
            {
              "id": 1258,
              "date_text": "Believed to be May 31st or June 1st",
              "text": "Police pepper sprays peaceful protester and fires tear gas on crowd",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.840562,
              "LONGITUDE": -105.007985,
              "Link1": "https://www.reddit.com/r/2020PoliceBrutality/comments/gvhisl/police_rip_sign_out_of_peaceful_protesters_hands/",
              "Link2": "https://www.tiktok.com/@yazzdazzz/video/6832896487207243014"
            },
            {
              "id": 1259,
              "date_text": "Believed to be May 31st or June 1st",
              "text": "Police pepper sprays peaceful protester and fires tear gas on crowd",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.6941,
              "LONGITUDE": -104.8786,
              "Link1": "https://www.reddit.com/r/2020PoliceBrutality/comments/gvhisl/police_rip_sign_out_of_peaceful_protesters_hands/",
              "Link2": "https://www.tiktok.com/@yazzdazzz/video/6832896487207243014"
            },
            {
              "id": 1260,
              "date_text": "Believed to be May 31st or June 1st",
              "text": "Police pepper sprays peaceful protester and fires tear gas on crowd",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.7507,
              "LONGITUDE": -104.989,
              "Link1": "https://www.reddit.com/r/2020PoliceBrutality/comments/gvhisl/police_rip_sign_out_of_peaceful_protesters_hands/",
              "Link2": "https://www.tiktok.com/@yazzdazzz/video/6832896487207243014"
            },
            {
              "id": 1261,
              "date_text": "Believed to be May 31st or June 1st",
              "text": "Police pepper sprays peaceful protester and fires tear gas on crowd",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.746931,
              "LONGITUDE": -105.062036,
              "Link1": "https://www.reddit.com/r/2020PoliceBrutality/comments/gvhisl/police_rip_sign_out_of_peaceful_protesters_hands/",
              "Link2": "https://www.tiktok.com/@yazzdazzz/video/6832896487207243014"
            },
            {
              "id": 1262,
              "date_text": "May 31st",
              "text": "Man's face injured by less-lethal round",
              "tags_str": "Other",
              "LATITUDE": 39.840562,
              "LONGITUDE": -105.007985,
              "Link1": "https://www.tiktok.com/@yazzdazzz/video/6832895812771646725",
              "Link2": ""
            },
            {
              "id": 1263,
              "date_text": "May 31st",
              "text": "Man's face injured by less-lethal round",
              "tags_str": "Other",
              "LATITUDE": 39.6941,
              "LONGITUDE": -104.8786,
              "Link1": "https://www.tiktok.com/@yazzdazzz/video/6832895812771646725",
              "Link2": ""
            },
            {
              "id": 1264,
              "date_text": "May 31st",
              "text": "Man's face injured by less-lethal round",
              "tags_str": "Other",
              "LATITUDE": 39.7507,
              "LONGITUDE": -104.989,
              "Link1": "https://www.tiktok.com/@yazzdazzz/video/6832895812771646725",
              "Link2": ""
            },
            {
              "id": 1265,
              "date_text": "May 31st",
              "text": "Man's face injured by less-lethal round",
              "tags_str": "Other",
              "LATITUDE": 39.746931,
              "LONGITUDE": -105.062036,
              "Link1": "https://www.tiktok.com/@yazzdazzz/video/6832895812771646725",
              "Link2": ""
            },
            {
              "id": 1266,
              "date_text": "May 31st",
              "text": "Journalist injured by tear gas, less-than-lethal round",
              "tags_str": "Projectiles",
              "LATITUDE": 39.840562,
              "LONGITUDE": -105.007985,
              "Link1": "https://twitter.com/alex_burness/status/1267287093643902977",
              "Link2": "https://twitter.com/alex_burness/status/1267319325846917120"
            },
            {
              "id": 1267,
              "date_text": "May 31st",
              "text": "Journalist injured by tear gas, less-than-lethal round",
              "tags_str": "Projectiles",
              "LATITUDE": 39.6941,
              "LONGITUDE": -104.8786,
              "Link1": "https://twitter.com/alex_burness/status/1267287093643902977",
              "Link2": "https://twitter.com/alex_burness/status/1267319325846917120"
            },
            {
              "id": 1268,
              "date_text": "May 31st",
              "text": "Journalist injured by tear gas, less-than-lethal round",
              "tags_str": "Projectiles",
              "LATITUDE": 39.7507,
              "LONGITUDE": -104.989,
              "Link1": "https://twitter.com/alex_burness/status/1267287093643902977",
              "Link2": "https://twitter.com/alex_burness/status/1267319325846917120"
            },
            {
              "id": 1269,
              "date_text": "May 31st",
              "text": "Journalist injured by tear gas, less-than-lethal round",
              "tags_str": "Projectiles",
              "LATITUDE": 39.746931,
              "LONGITUDE": -105.062036,
              "Link1": "https://twitter.com/alex_burness/status/1267287093643902977",
              "Link2": "https://twitter.com/alex_burness/status/1267319325846917120"
            },
            {
              "id": 1270,
              "date_text": "June 1st",
              "text": "Officer incites violence on social media",
              "tags_str": "Other",
              "LATITUDE": 39.840562,
              "LONGITUDE": -105.007985,
              "Link1": "https://twitter.com/DenverPolice/status/1267571824054775808",
              "Link2": "https://twitter.com/DenverPolice/status/1267933192805216256"
            },
            {
              "id": 1271,
              "date_text": "June 1st",
              "text": "Officer incites violence on social media",
              "tags_str": "Other",
              "LATITUDE": 39.6941,
              "LONGITUDE": -104.8786,
              "Link1": "https://twitter.com/DenverPolice/status/1267571824054775808",
              "Link2": "https://twitter.com/DenverPolice/status/1267933192805216256"
            },
            {
              "id": 1272,
              "date_text": "June 1st",
              "text": "Officer incites violence on social media",
              "tags_str": "Other",
              "LATITUDE": 39.7507,
              "LONGITUDE": -104.989,
              "Link1": "https://twitter.com/DenverPolice/status/1267571824054775808",
              "Link2": "https://twitter.com/DenverPolice/status/1267933192805216256"
            },
            {
              "id": 1273,
              "date_text": "June 1st",
              "text": "Officer incites violence on social media",
              "tags_str": "Other",
              "LATITUDE": 39.746931,
              "LONGITUDE": -105.062036,
              "Link1": "https://twitter.com/DenverPolice/status/1267571824054775808",
              "Link2": "https://twitter.com/DenverPolice/status/1267933192805216256"
            },
            {
              "id": 1274,
              "date_text": "June 2nd",
              "text": "Police shoot protester from behind with tear gas canister",
              "tags_str": "Projectiles",
              "LATITUDE": 39.840562,
              "LONGITUDE": -105.007985,
              "Link1": "https://www.reddit.com/r/Denver/comments/gvhqs2/elisabeth_epps_use_of_force_committee_member_for/",
              "Link2": "https://www.denverpost.com/2020/06/02/denver-protests-police-force-tear-gas-george-floyd/"
            },
            {
              "id": 1275,
              "date_text": "June 2nd",
              "text": "Police shoot protester from behind with tear gas canister",
              "tags_str": "Projectiles",
              "LATITUDE": 39.6941,
              "LONGITUDE": -104.8786,
              "Link1": "https://www.reddit.com/r/Denver/comments/gvhqs2/elisabeth_epps_use_of_force_committee_member_for/",
              "Link2": "https://www.denverpost.com/2020/06/02/denver-protests-police-force-tear-gas-george-floyd/"
            },
            {
              "id": 1276,
              "date_text": "June 2nd",
              "text": "Police shoot protester from behind with tear gas canister",
              "tags_str": "Projectiles",
              "LATITUDE": 39.7507,
              "LONGITUDE": -104.989,
              "Link1": "https://www.reddit.com/r/Denver/comments/gvhqs2/elisabeth_epps_use_of_force_committee_member_for/",
              "Link2": "https://www.denverpost.com/2020/06/02/denver-protests-police-force-tear-gas-george-floyd/"
            },
            {
              "id": 1277,
              "date_text": "June 2nd",
              "text": "Police shoot protester from behind with tear gas canister",
              "tags_str": "Projectiles",
              "LATITUDE": 39.746931,
              "LONGITUDE": -105.062036,
              "Link1": "https://www.reddit.com/r/Denver/comments/gvhqs2/elisabeth_epps_use_of_force_committee_member_for/",
              "Link2": "https://www.denverpost.com/2020/06/02/denver-protests-police-force-tear-gas-george-floyd/"
            },
            {
              "id": 1278,
              "date_text": "June 4th",
              "text": "Police tackle group of peaceful protesters",
              "tags_str": "Hard",
              "LATITUDE": 39.840562,
              "LONGITUDE": -105.007985,
              "Link1": "https://www.reddit.com/r/Denver/comments/gwdg85/denver_swat_unit_tackles_group_of_peaceful/",
              "Link2": ""
            },
            {
              "id": 1279,
              "date_text": "June 4th",
              "text": "Police tackle group of peaceful protesters",
              "tags_str": "Hard",
              "LATITUDE": 39.6941,
              "LONGITUDE": -104.8786,
              "Link1": "https://www.reddit.com/r/Denver/comments/gwdg85/denver_swat_unit_tackles_group_of_peaceful/",
              "Link2": ""
            },
            {
              "id": 1280,
              "date_text": "June 4th",
              "text": "Police tackle group of peaceful protesters",
              "tags_str": "Hard",
              "LATITUDE": 39.7507,
              "LONGITUDE": -104.989,
              "Link1": "https://www.reddit.com/r/Denver/comments/gwdg85/denver_swat_unit_tackles_group_of_peaceful/",
              "Link2": ""
            },
            {
              "id": 1281,
              "date_text": "June 4th",
              "text": "Police tackle group of peaceful protesters",
              "tags_str": "Hard",
              "LATITUDE": 39.746931,
              "LONGITUDE": -105.062036,
              "Link1": "https://www.reddit.com/r/Denver/comments/gwdg85/denver_swat_unit_tackles_group_of_peaceful/",
              "Link2": ""
            },
            {
              "id": 1282,
              "date_text": " June 5th",
              "text": "Protester struck in head at short range with explosive projectile",
              "tags_str": "Other",
              "LATITUDE": 39.840562,
              "LONGITUDE": -105.007985,
              "Link1": "https://www.reddit.com/r/protest/comments/gx7voh/denver_police_knocking_a_kid_out_and_losing/",
              "Link2": ""
            },
            {
              "id": 1283,
              "date_text": " June 5th",
              "text": "Protester struck in head at short range with explosive projectile",
              "tags_str": "Other",
              "LATITUDE": 39.6941,
              "LONGITUDE": -104.8786,
              "Link1": "https://www.reddit.com/r/protest/comments/gx7voh/denver_police_knocking_a_kid_out_and_losing/",
              "Link2": ""
            },
            {
              "id": 1284,
              "date_text": " June 5th",
              "text": "Protester struck in head at short range with explosive projectile",
              "tags_str": "Other",
              "LATITUDE": 39.7507,
              "LONGITUDE": -104.989,
              "Link1": "https://www.reddit.com/r/protest/comments/gx7voh/denver_police_knocking_a_kid_out_and_losing/",
              "Link2": ""
            },
            {
              "id": 1285,
              "date_text": " June 5th",
              "text": "Protester struck in head at short range with explosive projectile",
              "tags_str": "Other",
              "LATITUDE": 39.746931,
              "LONGITUDE": -105.062036,
              "Link1": "https://www.reddit.com/r/protest/comments/gx7voh/denver_police_knocking_a_kid_out_and_losing/",
              "Link2": ""
            },
            {
              "id": 1286,
              "date_text": "June 6th",
              "text": "Police pepper spray protesters without apparent cause",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.840562,
              "LONGITUDE": -105.007985,
              "Link1": "https://mobile.twitter.com/greg_doucette/status/1287247799483092992",
              "Link2": ""
            },
            {
              "id": 1287,
              "date_text": "June 6th",
              "text": "Police pepper spray protesters without apparent cause",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.6941,
              "LONGITUDE": -104.8786,
              "Link1": "https://mobile.twitter.com/greg_doucette/status/1287247799483092992",
              "Link2": ""
            },
            {
              "id": 1288,
              "date_text": "June 6th",
              "text": "Police pepper spray protesters without apparent cause",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.7507,
              "LONGITUDE": -104.989,
              "Link1": "https://mobile.twitter.com/greg_doucette/status/1287247799483092992",
              "Link2": ""
            },
            {
              "id": 1289,
              "date_text": "June 6th",
              "text": "Police pepper spray protesters without apparent cause",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.746931,
              "LONGITUDE": -105.062036,
              "Link1": "https://mobile.twitter.com/greg_doucette/status/1287247799483092992",
              "Link2": ""
            },
            {
              "id": 1290,
              "date_text": " June 21st",
              "text": "Police pepper spray protester with hands up",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.840562,
              "LONGITUDE": -105.007985,
              "Link1": "https://twitter.com/wisenoons/status/1274743833410994176",
              "Link2": ""
            },
            {
              "id": 1291,
              "date_text": " June 21st",
              "text": "Police pepper spray protester with hands up",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.6941,
              "LONGITUDE": -104.8786,
              "Link1": "https://twitter.com/wisenoons/status/1274743833410994176",
              "Link2": ""
            },
            {
              "id": 1292,
              "date_text": " June 21st",
              "text": "Police pepper spray protester with hands up",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.7507,
              "LONGITUDE": -104.989,
              "Link1": "https://twitter.com/wisenoons/status/1274743833410994176",
              "Link2": ""
            },
            {
              "id": 1293,
              "date_text": " June 21st",
              "text": "Police pepper spray protester with hands up",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.746931,
              "LONGITUDE": -105.062036,
              "Link1": "https://twitter.com/wisenoons/status/1274743833410994176",
              "Link2": ""
            },
            {
              "id": 1294,
              "date_text": "July 1st",
              "text": "Police use excessive force to clear protester tent encampment",
              "tags_str": "Other",
              "LATITUDE": 39.840562,
              "LONGITUDE": -105.007985,
              "Link1": "https://www.youtube.com/watch?v=1OFDLRa9wFc&feature=youtu.be&t=5326",
              "Link2": "https://www.reddit.com/r/DenverProtests/comments/hjszf5/denver_police_uses_cs_gas_impact_irritants_pepper/"
            },
            {
              "id": 1295,
              "date_text": "July 1st",
              "text": "Police use excessive force to clear protester tent encampment",
              "tags_str": "Other",
              "LATITUDE": 39.6941,
              "LONGITUDE": -104.8786,
              "Link1": "https://www.youtube.com/watch?v=1OFDLRa9wFc&feature=youtu.be&t=5326",
              "Link2": "https://www.reddit.com/r/DenverProtests/comments/hjszf5/denver_police_uses_cs_gas_impact_irritants_pepper/"
            },
            {
              "id": 1296,
              "date_text": "July 1st",
              "text": "Police use excessive force to clear protester tent encampment",
              "tags_str": "Other",
              "LATITUDE": 39.7507,
              "LONGITUDE": -104.989,
              "Link1": "https://www.youtube.com/watch?v=1OFDLRa9wFc&feature=youtu.be&t=5326",
              "Link2": "https://www.reddit.com/r/DenverProtests/comments/hjszf5/denver_police_uses_cs_gas_impact_irritants_pepper/"
            },
            {
              "id": 1297,
              "date_text": "July 1st",
              "text": "Police use excessive force to clear protester tent encampment",
              "tags_str": "Other",
              "LATITUDE": 39.746931,
              "LONGITUDE": -105.062036,
              "Link1": "https://www.youtube.com/watch?v=1OFDLRa9wFc&feature=youtu.be&t=5326",
              "Link2": "https://www.reddit.com/r/DenverProtests/comments/hjszf5/denver_police_uses_cs_gas_impact_irritants_pepper/"
            },
            {
              "id": 1298,
              "date_text": "July 19th",
              "text": "Police pepper spray BLM counter-protesters at pro-police rally",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.840562,
              "LONGITUDE": -105.007985,
              "Link1": "https://www.denverpost.com/2020/07/19/pro-police-rally-denver-cific-center-counter-protest/",
              "Link2": "https://twitter.com/ShellyBradbury/status/1284980898958540803"
            },
            {
              "id": 1299,
              "date_text": "July 19th",
              "text": "Police pepper spray BLM counter-protesters at pro-police rally",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.6941,
              "LONGITUDE": -104.8786,
              "Link1": "https://www.denverpost.com/2020/07/19/pro-police-rally-denver-cific-center-counter-protest/",
              "Link2": "https://twitter.com/ShellyBradbury/status/1284980898958540803"
            },
            {
              "id": 1300,
              "date_text": "July 19th",
              "text": "Police pepper spray BLM counter-protesters at pro-police rally",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.7507,
              "LONGITUDE": -104.989,
              "Link1": "https://www.denverpost.com/2020/07/19/pro-police-rally-denver-cific-center-counter-protest/",
              "Link2": "https://twitter.com/ShellyBradbury/status/1284980898958540803"
            },
            {
              "id": 1301,
              "date_text": "July 19th",
              "text": "Police pepper spray BLM counter-protesters at pro-police rally",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 39.746931,
              "LONGITUDE": -105.062036,
              "Link1": "https://www.denverpost.com/2020/07/19/pro-police-rally-denver-cific-center-counter-protest/",
              "Link2": "https://twitter.com/ShellyBradbury/status/1284980898958540803"
            },
            {
              "id": 1302,
              "date_text": "July 29th",
              "text": "Denver Public School official struck in head",
              "tags_str": "Other",
              "LATITUDE": 39.840562,
              "LONGITUDE": -105.007985,
              "Link1": "https://www.denverpost.com/2020/07/29/tay-anderson-police-protest-hospital/",
              "Link2": "https://www.reddit.com/r/PublicFreakout/comments/i07lqt/denver_public_school_board_director_tay_anderson/"
            },
            {
              "id": 1303,
              "date_text": "July 29th",
              "text": "Denver Public School official struck in head",
              "tags_str": "Other",
              "LATITUDE": 39.6941,
              "LONGITUDE": -104.8786,
              "Link1": "https://www.denverpost.com/2020/07/29/tay-anderson-police-protest-hospital/",
              "Link2": "https://www.reddit.com/r/PublicFreakout/comments/i07lqt/denver_public_school_board_director_tay_anderson/"
            },
            {
              "id": 1304,
              "date_text": "July 29th",
              "text": "Denver Public School official struck in head",
              "tags_str": "Other",
              "LATITUDE": 39.7507,
              "LONGITUDE": -104.989,
              "Link1": "https://www.denverpost.com/2020/07/29/tay-anderson-police-protest-hospital/",
              "Link2": "https://www.reddit.com/r/PublicFreakout/comments/i07lqt/denver_public_school_board_director_tay_anderson/"
            },
            {
              "id": 1305,
              "date_text": "July 29th",
              "text": "Denver Public School official struck in head",
              "tags_str": "Other",
              "LATITUDE": 39.746931,
              "LONGITUDE": -105.062036,
              "Link1": "https://www.denverpost.com/2020/07/29/tay-anderson-police-protest-hospital/",
              "Link2": "https://www.reddit.com/r/PublicFreakout/comments/i07lqt/denver_public_school_board_director_tay_anderson/"
            },
            {
              "id": 1306,
              "date_text": "May 30th",
              "text": "Officer pepper-sprays or maces protester walking backwards with arms raised",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 43.073,
              "LONGITUDE": -89.3817,
              "Link1": "https://twitter.com/NeonMarionette/status/1266962885957292032?s=20",
              "Link2": ""
            },
            {
              "id": 1307,
              "date_text": "May 30th",
              "text": "Police pepper spray protesters with hands up",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 43.073,
              "LONGITUDE": -89.3817,
              "Link1": "https://www.tiktok.com/@michelle_but_not_obama/video/6833371052198857990",
              "Link2": "https://twitter.com/shadow_roses1/status/1268246561798205442"
            },
            {
              "id": 1308,
              "date_text": "June 2nd",
              "text": "Police on bikes restrain man using knee on neck",
              "tags_str": "Other",
              "LATITUDE": 43.0343,
              "LONGITUDE": -87.9151,
              "Link1": "http://www.milwaukeeindependent.com/articles/milwaukee-common-council-calls-investigation-use-knee-police-restrain-protestor/",
              "Link2": "https://medium.com/@danbarrett/north-6th-street-and-mckinley-avenue-milwaukee-wisconsin-7-15-to-7-28-p-m-part-1-89ad38a5532f"
            },
            {
              "id": 1309,
              "date_text": "June 2nd",
              "text": "Police use excessive force to disperse protesters",
              "tags_str": "Other",
              "LATITUDE": 43.0343,
              "LONGITUDE": -87.9151,
              "Link1": "https://www.instagram.com/p/CA_heaaHWrc/?igshid=m5v0m438blws",
              "Link2": "https://www.reddit.com/r/milwaukee/comments/gyn6ya/milwaukee_police_fire_rubber_bullets_and_tear_gas/"
            },
            {
              "id": 1310,
              "date_text": "June 2nd",
              "text": "Police cut off protesters on Hoan Bridge",
              "tags_str": "Other",
              "LATITUDE": 43.0343,
              "LONGITUDE": -87.9151,
              "Link1": "https://www.youtube.com/watch?v=huAvoVlJVgc",
              "Link2": "https://twitter.com/StupidNeel/status/1268014836786528257"
            },
            {
              "id": 1311,
              "date_text": "May 29th",
              "text": "Officer charges through other officers to attack a protester who is backing away",
              "tags_str": "Other",
              "LATITUDE": 42.347429,
              "LONGITUDE": -83.06039799999998,
              "Link1": "https://twitter.com/joeguillen/status/1266563974658744321",
              "Link2": ""
            },
            {
              "id": 1312,
              "date_text": "May 29th",
              "text": "Riot police charge peaceful protesters",
              "tags_str": "Other",
              "LATITUDE": 42.347429,
              "LONGITUDE": -83.06039799999998,
              "Link1": "https://twitter.com/julietmariaa/status/1266568356976635904",
              "Link2": ""
            },
            {
              "id": 1313,
              "date_text": "May 30th",
              "text": "Police shove and scream at men walking down the street",
              "tags_str": "Soft",
              "LATITUDE": 42.347429,
              "LONGITUDE": -83.06039799999998,
              "Link1": "https://twitter.com/AkramG03/status/1266876680142049282",
              "Link2": "https://youtu.be/yRoAXw8cGT4"
            },
            {
              "id": 1314,
              "date_text": "May 30th",
              "text": "Police pepper-spray reporter holding up media badge",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 42.347429,
              "LONGITUDE": -83.06039799999998,
              "Link1": "https://twitter.com/jcreindl/status/1266925170192715782",
              "Link2": "https://twitter.com/DetroitReporter/status/1266957225114861568"
            },
            {
              "id": 1315,
              "date_text": "May 30th",
              "text": "Police shoot rubber bullets at reporters",
              "tags_str": "Projectiles",
              "LATITUDE": 42.347429,
              "LONGITUDE": -83.06039799999998,
              "Link1": "https://twitter.com/reporterdavidj/status/1266966021077962752",
              "Link2": ""
            },
            {
              "id": 1316,
              "date_text": "May 30th",
              "text": "Woman is charged by police and thrown to the ground",
              "tags_str": "Other",
              "LATITUDE": 42.347429,
              "LONGITUDE": -83.06039799999998,
              "Link1": "https://twitter.com/TheModLibrarian/status/1266587927783620613",
              "Link2": ""
            },
            {
              "id": 1317,
              "date_text": "May 31st",
              "text": "Reporter detained without apparent cause",
              "tags_str": "Other",
              "LATITUDE": 42.347429,
              "LONGITUDE": -83.06039799999998,
              "Link1": "https://www.facebook.com/DetroitNews/videos/855231228320197/",
              "Link2": "https://twitter.com/MKurlyandchik/status/1267269219789529090"
            },
            {
              "id": 1318,
              "date_text": "June 2nd",
              "text": "Police charge protesters and press",
              "tags_str": "Other",
              "LATITUDE": 42.347429,
              "LONGITUDE": -83.06039799999998,
              "Link1": "https://twitter.com/MCmuckraker/status/1267982859991728130",
              "Link2": "https://twitter.com/MCmuckraker/status/1268011179986870273"
            },
            {
              "id": 1319,
              "date_text": "June 2nd",
              "text": "Police use LRAD (sound cannon) to disperse protesters",
              "tags_str": "Other",
              "LATITUDE": 42.347429,
              "LONGITUDE": -83.06039799999998,
              "Link1": "https://twitter.com/MedvisJackson/status/1267984069905784832",
              "Link2": ""
            },
            {
              "id": 1320,
              "date_text": "June 28th",
              "text": "Police run over protesters",
              "tags_str": "Other",
              "LATITUDE": 42.347429,
              "LONGITUDE": -83.06039799999998,
              "Link1": "https://twitter.com/DJEazyTwist/status/1277430912653950976",
              "Link2": ""
            },
            {
              "id": 1321,
              "date_text": "July 11th",
              "text": "Riot police officer chokes protester. Tear gas was also used.",
              "tags_str": "Projectiles",
              "LATITUDE": 42.347429,
              "LONGITUDE": -83.06039799999998,
              "Link1": "https://twitter.com/AttorneyCrump/status/1282107085812047873",
              "Link2": "https://www.instagram.com/p/CCfSTAnjv_k/"
            },
            {
              "id": 1322,
              "date_text": "May 31st",
              "text": "Police spray unarmed man with pepper-spray and shoot him in the face with a teargas canister",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 42.9704,
              "LONGITUDE": -85.6738,
              "Link1": "https://old.reddit.com/r/Bad_Cop_No_Donut/comments/gub8fx/police_shoot_protestor_point_blank_in_the_face/",
              "Link2": "https://www.fox17online.com/news/local-news/grand-rapids/grpd-conducting-internal-investigation-after-viral-video-of-man-being-pepper-sprayed"
            },
            {
              "id": 1323,
              "date_text": "May 31st",
              "text": "Law enforcement push and shove a crowd of protesters.",
              "tags_str": "Soft",
              "LATITUDE": 42.9704,
              "LONGITUDE": -85.6738,
              "Link1": "https://twitter.com/DJR2C2/status/1267006669583720448",
              "Link2": "https://twitter.com/sparrowsongs_/status/1266948928966139904"
            },
            {
              "id": 1324,
              "date_text": "July 12th",
              "text": "Police assault peaceful protesters, among them Breonna Taylor's family members",
              "tags_str": "Hard",
              "LATITUDE": 42.9704,
              "LONGITUDE": -85.6738,
              "Link1": "https://twitter.com/OfficAlyNicole/status/1283181085577420810",
              "Link2": "https://twitter.com/greg_doucette/status/1283027373018013699"
            },
            {
              "id": 1325,
              "date_text": "June 1st",
              "text": "Police fire tear gas at prone protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 42.27356500000001,
              "LONGITUDE": -85.545653,
              "Link1": "https://twitter.com/i/status/1267677463850745858",
              "Link2": "https://www.facebook.com/BlaineBurnett11/videos/963503949886/"
            },
            {
              "id": 1326,
              "date_text": "June 2nd",
              "text": "Police fire tear gas at peaceful protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 42.27356500000001,
              "LONGITUDE": -85.545653,
              "Link1": "https://streamable.com/xvlky1",
              "Link2": "https://streamable.com/0wfiu3"
            },
            {
              "id": 1327,
              "date_text": "August 15th",
              "text": "Reporter covering Proud Boys arrested",
              "tags_str": "Soft",
              "LATITUDE": 42.27356500000001,
              "LONGITUDE": -85.545653,
              "Link1": "https://twitter.com/Phil_Lewis_/status/1294732715221286913",
              "Link2": "https://twitter.com/samueljrob/status/1294741751425568771"
            },
            {
              "id": 1328,
              "date_text": "August 15th",
              "text": "Police charge, pepper spray, and tackle protesters",
              "tags_str": "Hard, Projectiles, Chemical",
              "LATITUDE": 42.27356500000001,
              "LONGITUDE": -85.545653,
              "Link1": "https://www.reddit.com/r/2020PoliceBrutality/comments/iaki6j/police_charge_antifascist_protestors_today_in/",
              "Link2": ""
            },
            {
              "id": 1329,
              "date_text": "June 1st",
              "text": "Law enforcement tear-gas a crowd chanting “we want peace” right after exiting the building.",
              "tags_str": "Projectiles",
              "LATITUDE": 36.357703,
              "LONGITUDE": -94.22242,
              "Link1": "https://twitter.com/courtenay_roche/status/1267653137969623040",
              "Link2": "https://twitter.com/peyjobe/status/1267656498525753344"
            },
            {
              "id": 1330,
              "date_text": "May 30th",
              "text": "Protesters tear gas protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 34.748342,
              "LONGITUDE": -92.281939,
              "Link1": "https://www.youtube.com/watch?v=Pfn65qaXosU",
              "Link2": "https://www.youtube.com/watch?v=p7z-u_a8qo0"
            },
            {
              "id": 1331,
              "date_text": "May 31st",
              "text": "Peaceful protesters kneeling are shot with an explosive projectile.",
              "tags_str": "Projectiles",
              "LATITUDE": 34.748342,
              "LONGITUDE": -92.281939,
              "Link1": "https://twitter.com/KATVShelby/status/1267554421019475972",
              "Link2": "https://twitter.com/KATVNews/status/1267509911954440194"
            },
            {
              "id": 1332,
              "date_text": "May 30th",
              "text": "Person with hands up struck in chest by projectile",
              "tags_str": "Other",
              "LATITUDE": 35.3337,
              "LONGITUDE": -97.4922,
              "Link1": "https://twitter.com/BruceBrownJr/status/1266979654499479552",
              "Link2": ""
            },
            {
              "id": 1333,
              "date_text": "May 30th",
              "text": "Person with hands up struck in chest by projectile",
              "tags_str": "Other",
              "LATITUDE": 35.473,
              "LONGITUDE": -97.5177,
              "Link1": "https://twitter.com/BruceBrownJr/status/1266979654499479552",
              "Link2": ""
            },
            {
              "id": 1334,
              "date_text": "May 30th",
              "text": "Law enforcement uses tear-gas several times",
              "tags_str": "Projectiles",
              "LATITUDE": 35.3337,
              "LONGITUDE": -97.4922,
              "Link1": "https://twitter.com/benfelder_okc/status/1266950330161532928",
              "Link2": "https://twitter.com/benfelder_okc/status/1266956993669017600"
            },
            {
              "id": 1335,
              "date_text": "May 30th",
              "text": "Law enforcement uses tear-gas several times",
              "tags_str": "Projectiles",
              "LATITUDE": 35.473,
              "LONGITUDE": -97.5177,
              "Link1": "https://twitter.com/benfelder_okc/status/1266950330161532928",
              "Link2": "https://twitter.com/benfelder_okc/status/1266956993669017600"
            },
            {
              "id": 1336,
              "date_text": "May 30th",
              "text": "Police try to snatch sign, make violent arrests and cause scuffle",
              "tags_str": "Soft",
              "LATITUDE": 35.3337,
              "LONGITUDE": -97.4922,
              "Link1": "https://twitter.com/greg_doucette/status/1269790337075228679",
              "Link2": ""
            },
            {
              "id": 1337,
              "date_text": "May 30th",
              "text": "Police try to snatch sign, make violent arrests and cause scuffle",
              "tags_str": "Soft",
              "LATITUDE": 35.473,
              "LONGITUDE": -97.5177,
              "Link1": "https://twitter.com/greg_doucette/status/1269790337075228679",
              "Link2": ""
            },
            {
              "id": 1338,
              "date_text": "June 1st",
              "text": "Reporters shot by pepper balls on air",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 36.05566,
              "LONGITUDE": -96.060229,
              "Link1": "https://twitter.com/KTULNews/status/1267388909937405952",
              "Link2": ""
            },
            {
              "id": 1339,
              "date_text": "June 1st",
              "text": "Reporters shot by pepper balls on air",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 36.1504,
              "LONGITUDE": -95.9953,
              "Link1": "https://twitter.com/KTULNews/status/1267388909937405952",
              "Link2": ""
            },
            {
              "id": 1340,
              "date_text": "May 31st",
              "text": "Man beaten with baton while being taken into custody",
              "tags_str": "Hard, Other",
              "LATITUDE": 42.35760300000001,
              "LONGITUDE": -71.068432,
              "Link1": "https://www.wcvb.com/article/boston-police-confront-protesters-in-downtown-crossing/32724753",
              "Link2": ""
            },
            {
              "id": 1341,
              "date_text": "Unknown Date",
              "text": "A cop takes someone's protest sign and destroys it.",
              "tags_str": "Other",
              "LATITUDE": 42.35760300000001,
              "LONGITUDE": -71.068432,
              "Link1": "https://www.youtube.com/watch?v=egvPF75vWOA",
              "Link2": ""
            },
            {
              "id": 1342,
              "date_text": "June 1st",
              "text": "Worcester police officers cover badge numbers during protest",
              "tags_str": "Other",
              "LATITUDE": 42.2621,
              "LONGITUDE": -71.8034,
              "Link1": "https://twitter.com/sebishop99/status/1267877928391659521/photo/1",
              "Link2": ""
            },
            {
              "id": 1343,
              "date_text": "June 1st",
              "text": "Riot police throw protester to the ground",
              "tags_str": "Other",
              "LATITUDE": 42.2621,
              "LONGITUDE": -71.8034,
              "Link1": "https://twitter.com/sebishop99/status/1267890659484143616",
              "Link2": "https://twitter.com/sebishop99/status/1267905527390113798"
            },
            {
              "id": 1344,
              "date_text": "June 1st",
              "text": "Riot police fire on protesters without provocation",
              "tags_str": "Projectiles",
              "LATITUDE": 42.2621,
              "LONGITUDE": -71.8034,
              "Link1": "https://twitter.com/sebishop99/status/1267913459938844673",
              "Link2": ""
            },
            {
              "id": 1345,
              "date_text": "June 1st",
              "text": "Numerous eyewitness report being tackled by police officers",
              "tags_str": "Hard",
              "LATITUDE": 42.2621,
              "LONGITUDE": -71.8034,
              "Link1": "https://twitter.com/sebishop99/status/1267948306182922245",
              "Link2": "https://twitter.com/sebishop99/status/1267950415443787777"
            },
            {
              "id": 1346,
              "date_text": "May 31st",
              "text": "Police shove a woman down to her knees",
              "tags_str": "Soft",
              "LATITUDE": 26.121561,
              "LONGITUDE": -80.128778,
              "Link1": "https://twitter.com/thickliljawn/status/1267239498083110913",
              "Link2": "https://www.reddit.com/r/PublicFreakout/comments/gubleh/officer_gets_confronted_by_another_officer_for/"
            },
            {
              "id": 1347,
              "date_text": "May 31st",
              "text": "Law enforcement shoot a woman in the head",
              "tags_str": "Projectiles",
              "LATITUDE": 26.121561,
              "LONGITUDE": -80.128778,
              "Link1": "https://www.miamiherald.com/news/local/community/broward/article243193481.html",
              "Link2": "https://twitter.com/MrEvanRoss/status/1270440535518560256"
            },
            {
              "id": 1348,
              "date_text": "May 31st",
              "text": "Police laugh and joke when they think their body cams are off",
              "tags_str": "Other",
              "LATITUDE": 26.121561,
              "LONGITUDE": -80.128778,
              "Link1": "https://www.youtube.com/watch?v=JJx9NgTe8Ns",
              "Link2": "https://www.miamiherald.com/news/local/community/broward/article243932047.html"
            },
            {
              "id": 1349,
              "date_text": "May 30th",
              "text": "Peaceful protester tackled",
              "tags_str": "Hard",
              "LATITUDE": 30.3163,
              "LONGITUDE": -81.4175,
              "Link1": "https://twitter.com/joiahhh/status/1266914558519775235",
              "Link2": ""
            },
            {
              "id": 1350,
              "date_text": "May 30th",
              "text": "Peaceful protester tackled",
              "tags_str": "Hard",
              "LATITUDE": 30.0759,
              "LONGITUDE": -81.5803,
              "Link1": "https://twitter.com/joiahhh/status/1266914558519775235",
              "Link2": ""
            },
            {
              "id": 1351,
              "date_text": "May 31st",
              "text": "Man tackled to ground after speaking to police",
              "tags_str": "Hard",
              "LATITUDE": 25.779,
              "LONGITUDE": -80.1982,
              "Link1": "https://twitter.com/BillyCorben/status/1267644127178563588",
              "Link2": ""
            },
            {
              "id": 1352,
              "date_text": "June 27th",
              "text": "Police deployed two rounds of tear gas against peaceful protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 25.779,
              "LONGITUDE": -80.1982,
              "Link1": "https://twitter.com/inaminorkey/status/1277070049518465032",
              "Link2": "https://twitter.com/inaminorkey/status/1277078077303132160"
            },
            {
              "id": 1353,
              "date_text": "July 1st",
              "text": "Police officer grabs arrestee's breast; police violently arrest protester",
              "tags_str": "Soft",
              "LATITUDE": 25.779,
              "LONGITUDE": -80.1982,
              "Link1": "https://www.instagram.com/p/CCHywZpjAYw/",
              "Link2": "https://www.miaminewtimes.com/news/video-shows-miami-police-grab-breast-of-protester-11661608"
            },
            {
              "id": 1354,
              "date_text": "July 16th",
              "text": "Police roughly arrest protest organizer",
              "tags_str": "Soft",
              "LATITUDE": 25.779,
              "LONGITUDE": -80.1982,
              "Link1": "https://www.youtube.com/watch?v=-4h4uAIt52Q&feature=youtu.be",
              "Link2": "https://www.reddit.com/r/PublicFreakout/comments/hshrzh/blm_organizer_attacked_arrested_alongwith_friends/"
            },
            {
              "id": 1355,
              "date_text": "May 31st",
              "text": "Police use tear gas and flashbangs against peaceful protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 28.498821000000003,
              "LONGITUDE": -80.58248,
              "Link1": "https://www.youtube.com/watch?v=vH5YyL-Q0-Q",
              "Link2": "https://www.reddit.com/r/protest/comments/gx86zm/53120_orlando_pd_deploys_tear_gas_on_peaceful_i4/"
            },
            {
              "id": 1356,
              "date_text": "May 31st",
              "text": "Police use tear gas and flashbangs against peaceful protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 28.539882,
              "LONGITUDE": -81.372668,
              "Link1": "https://www.youtube.com/watch?v=vH5YyL-Q0-Q",
              "Link2": "https://www.reddit.com/r/protest/comments/gx86zm/53120_orlando_pd_deploys_tear_gas_on_peaceful_i4/"
            },
            {
              "id": 1357,
              "date_text": "June 1st",
              "text": "Police tackle & pepper spray peaceful protesters",
              "tags_str": "Hard, Projectiles, Chemical",
              "LATITUDE": 28.498821000000003,
              "LONGITUDE": -80.58248,
              "Link1": "https://twitter.com/Concerned407/status/1268339148131307524",
              "Link2": ""
            },
            {
              "id": 1358,
              "date_text": "June 1st",
              "text": "Police tackle & pepper spray peaceful protesters",
              "tags_str": "Hard, Projectiles, Chemical",
              "LATITUDE": 28.539882,
              "LONGITUDE": -81.372668,
              "Link1": "https://twitter.com/Concerned407/status/1268339148131307524",
              "Link2": ""
            },
            {
              "id": 1359,
              "date_text": "June 1st",
              "text": "Police pepper spray protesters during arrest",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 28.498821000000003,
              "LONGITUDE": -80.58248,
              "Link1": "https://www.facebook.com/probably.not.you/videos/3518978511449150/",
              "Link2": ""
            },
            {
              "id": 1360,
              "date_text": "June 1st",
              "text": "Police pepper spray protesters during arrest",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 28.539882,
              "LONGITUDE": -81.372668,
              "Link1": "https://www.facebook.com/probably.not.you/videos/3518978511449150/",
              "Link2": ""
            },
            {
              "id": 1361,
              "date_text": "June 2nd",
              "text": "Police use excessive force during an arrest",
              "tags_str": "Soft",
              "LATITUDE": 28.498821000000003,
              "LONGITUDE": -80.58248,
              "Link1": "https://twitter.com/ewcfilms/status/1268003421786906627",
              "Link2": ""
            },
            {
              "id": 1362,
              "date_text": "June 2nd",
              "text": "Police use excessive force during an arrest",
              "tags_str": "Soft",
              "LATITUDE": 28.539882,
              "LONGITUDE": -81.372668,
              "Link1": "https://twitter.com/ewcfilms/status/1268003421786906627",
              "Link2": ""
            },
            {
              "id": 1363,
              "date_text": "June 2nd",
              "text": "Police tackle injured man leaving protest",
              "tags_str": "Hard",
              "LATITUDE": 28.498821000000003,
              "LONGITUDE": -80.58248,
              "Link1": "https://twitter.com/kailakerouac/status/1268010871797792773",
              "Link2": "https://twitter.com/kailakerouac/status/1268011180989337602"
            },
            {
              "id": 1364,
              "date_text": "June 2nd",
              "text": "Police tackle injured man leaving protest",
              "tags_str": "Hard",
              "LATITUDE": 28.539882,
              "LONGITUDE": -81.372668,
              "Link1": "https://twitter.com/kailakerouac/status/1268010871797792773",
              "Link2": "https://twitter.com/kailakerouac/status/1268011180989337602"
            },
            {
              "id": 1365,
              "date_text": "June 2nd",
              "text": "Police shove protesters with bikes",
              "tags_str": "Soft",
              "LATITUDE": 28.498821000000003,
              "LONGITUDE": -80.58248,
              "Link1": "https://twitter.com/Flygirl4477/status/1267968890975522816",
              "Link2": ""
            },
            {
              "id": 1366,
              "date_text": "June 2nd",
              "text": "Police shove protesters with bikes",
              "tags_str": "Soft",
              "LATITUDE": 28.539882,
              "LONGITUDE": -81.372668,
              "Link1": "https://twitter.com/Flygirl4477/status/1267968890975522816",
              "Link2": ""
            },
            {
              "id": 1367,
              "date_text": "June 2nd",
              "text": "Police fire on protesters outside city hall",
              "tags_str": "Projectiles",
              "LATITUDE": 28.498821000000003,
              "LONGITUDE": -80.58248,
              "Link1": "https://twitter.com/greg_doucette/status/1269017349727928320",
              "Link2": "https://twitter.com/Concerned407/status/1276277655545905152"
            },
            {
              "id": 1368,
              "date_text": "June 2nd",
              "text": "Police fire on protesters outside city hall",
              "tags_str": "Projectiles",
              "LATITUDE": 28.539882,
              "LONGITUDE": -81.372668,
              "Link1": "https://twitter.com/greg_doucette/status/1269017349727928320",
              "Link2": "https://twitter.com/Concerned407/status/1276277655545905152"
            },
            {
              "id": 1369,
              "date_text": "June 3rd",
              "text": "Woman stopped by police while leaving protest; police break her car window",
              "tags_str": "Other",
              "LATITUDE": 28.498821000000003,
              "LONGITUDE": -80.58248,
              "Link1": "https://twitter.com/edgarcomellas/status/1268555233065668608",
              "Link2": "https://www.orlandosentinel.com/news/crime/os-ne-orlando-george-floyd-protest-traffic-stop-deputy-breaks-window-20200604-y52jqcaogjfw5nzfcmu6tlgzhi-story.html"
            },
            {
              "id": 1370,
              "date_text": "June 3rd",
              "text": "Woman stopped by police while leaving protest; police break her car window",
              "tags_str": "Other",
              "LATITUDE": 28.539882,
              "LONGITUDE": -81.372668,
              "Link1": "https://twitter.com/edgarcomellas/status/1268555233065668608",
              "Link2": "https://www.orlandosentinel.com/news/crime/os-ne-orlando-george-floyd-protest-traffic-stop-deputy-breaks-window-20200604-y52jqcaogjfw5nzfcmu6tlgzhi-story.html"
            },
            {
              "id": 1371,
              "date_text": "May 31st",
              "text": "Police fire rubber bullets at protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 28.0879,
              "LONGITUDE": -82.4593,
              "Link1": "https://twitter.com/greg_doucette/status/1268765546662805505",
              "Link2": "https://twitter.com/flawlessfatigue/status/1267600280130109440"
            },
            {
              "id": 1372,
              "date_text": "May 31st",
              "text": "Police fire rubber bullets at protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 27.9428,
              "LONGITUDE": -82.4549,
              "Link1": "https://twitter.com/greg_doucette/status/1268765546662805505",
              "Link2": "https://twitter.com/flawlessfatigue/status/1267600280130109440"
            },
            {
              "id": 1373,
              "date_text": "May 31st",
              "text": "Police pepper-spray peaceful protesters",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 28.0879,
              "LONGITUDE": -82.4593,
              "Link1": "https://twitter.com/greg_doucette/status/1268765759783796736",
              "Link2": "https://twitter.com/breezybee97/status/1267244817786048512"
            },
            {
              "id": 1374,
              "date_text": "May 31st",
              "text": "Police pepper-spray peaceful protesters",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 27.9428,
              "LONGITUDE": -82.4549,
              "Link1": "https://twitter.com/greg_doucette/status/1268765759783796736",
              "Link2": "https://twitter.com/breezybee97/status/1267244817786048512"
            },
            {
              "id": 1375,
              "date_text": "June 4th",
              "text": "One woman is pinned to the ground and another is pepper-sprayed",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 28.0879,
              "LONGITUDE": -82.4593,
              "Link1": "https://twitter.com/walkin_da_talk/status/1268718193679499266",
              "Link2": "https://twitter.com/jamiebullockk/status/1268658254806163460"
            },
            {
              "id": 1376,
              "date_text": "June 4th",
              "text": "One woman is pinned to the ground and another is pepper-sprayed",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 27.9428,
              "LONGITUDE": -82.4549,
              "Link1": "https://twitter.com/walkin_da_talk/status/1268718193679499266",
              "Link2": "https://twitter.com/jamiebullockk/status/1268658254806163460"
            },
            {
              "id": 1377,
              "date_text": "June 4th",
              "text": "Police fire tear gas at peaceful protest",
              "tags_str": "Projectiles",
              "LATITUDE": 28.0879,
              "LONGITUDE": -82.4593,
              "Link1": "https://twitter.com/greg_doucette/status/1268694786485166081",
              "Link2": ""
            },
            {
              "id": 1378,
              "date_text": "June 4th",
              "text": "Police fire tear gas at peaceful protest",
              "tags_str": "Projectiles",
              "LATITUDE": 27.9428,
              "LONGITUDE": -82.4549,
              "Link1": "https://twitter.com/greg_doucette/status/1268694786485166081",
              "Link2": ""
            },
            {
              "id": 1379,
              "date_text": "June 5th",
              "text": "Police fire on medic",
              "tags_str": "Projectiles",
              "LATITUDE": 28.0879,
              "LONGITUDE": -82.4593,
              "Link1": "https://twitter.com/greg_doucette/status/1270491699832401920",
              "Link2": "https://twitter.com/greg_doucette/status/1268765759783796736"
            },
            {
              "id": 1380,
              "date_text": "June 5th",
              "text": "Police fire on medic",
              "tags_str": "Projectiles",
              "LATITUDE": 27.9428,
              "LONGITUDE": -82.4549,
              "Link1": "https://twitter.com/greg_doucette/status/1270491699832401920",
              "Link2": "https://twitter.com/greg_doucette/status/1268765759783796736"
            },
            {
              "id": 1381,
              "date_text": "July 4th",
              "text": "Police assault protesters without apparent cause",
              "tags_str": "Hard",
              "LATITUDE": 28.0879,
              "LONGITUDE": -82.4593,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/hmhcgz/tampa_police_department_4th_of_july_unprovoked/",
              "Link2": "https://www.youtube.com/watch?v=_uFeu1zUYIo"
            },
            {
              "id": 1382,
              "date_text": "July 4th",
              "text": "Police assault protesters without apparent cause",
              "tags_str": "Hard",
              "LATITUDE": 27.9428,
              "LONGITUDE": -82.4549,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/hmhcgz/tampa_police_department_4th_of_july_unprovoked/",
              "Link2": "https://www.youtube.com/watch?v=_uFeu1zUYIo"
            },
            {
              "id": 1383,
              "date_text": "August 12th",
              "text": "BLM Organizer hospitalized after officer kneels on her neck",
              "tags_str": "Other",
              "LATITUDE": 28.0879,
              "LONGITUDE": -82.4593,
              "Link1": "https://www.instagram.com/p/CDzyyQOAKEh/",
              "Link2": "https://www.instagram.com/tv/CDz27yPp1wN/"
            },
            {
              "id": 1384,
              "date_text": "August 12th",
              "text": "BLM Organizer hospitalized after officer kneels on her neck",
              "tags_str": "Other",
              "LATITUDE": 27.9428,
              "LONGITUDE": -82.4549,
              "Link1": "https://www.instagram.com/p/CDzyyQOAKEh/",
              "Link2": "https://www.instagram.com/tv/CDz27yPp1wN/"
            },
            {
              "id": 1385,
              "date_text": "May 31st",
              "text": "Police fire tear gas and rubber bullets at protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 35.597075,
              "LONGITUDE": -82.556533,
              "Link1": "https://www.wyff4.com/article/tear-gas-rubber-bullets-reported-at-asheville-protest/32725369",
              "Link2": "https://www.citizen-times.com/story/news/local/2020/05/31/bowen-bridge-shut-down-protesters-block-highway/5304001002/"
            },
            {
              "id": 1386,
              "date_text": "June 2nd",
              "text": "Police surround approved medical station and destroy supplies",
              "tags_str": "Other",
              "LATITUDE": 35.597075,
              "LONGITUDE": -82.556533,
              "Link1": "https://twitter.com/AngelaMWilhelm/status/1268056986102444033",
              "Link2": "https://twitter.com/AngelaMWilhelm/status/1267974081577717762"
            },
            {
              "id": 1387,
              "date_text": "Date Unknown",
              "text": "Man shot in head with pepper ball",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 35.597075,
              "LONGITUDE": -82.556533,
              "Link1": "https://twitter.com/greg_doucette/status/1270378392454672390",
              "Link2": "https://twitter.com/greg_doucette/status/1270378863219138561"
            },
            {
              "id": 1388,
              "date_text": "June 2nd",
              "text": "Law enforcement close on protesters from both sides with pepper bullets, tear gas, and flashbangs",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 35.2269,
              "LONGITUDE": -80.8433,
              "Link1": "https://www.instagram.com/tv/CA9UOKAj7MC/",
              "Link2": "https://twitter.com/greg_doucette/status/1268030671706099717"
            },
            {
              "id": 1389,
              "date_text": "June 8th",
              "text": "Police arrest representative from The Bail Project",
              "tags_str": "Soft",
              "LATITUDE": 35.2269,
              "LONGITUDE": -80.8433,
              "Link1": "https://twitter.com/greg_doucette/status/1270185252665864193",
              "Link2": "https://twitter.com/kaitlinwa24/status/1270113046606864389"
            },
            {
              "id": 1390,
              "date_text": "June 18th",
              "text": "Charlotte Sheriff declares Jail Support station unlawful; officer assaults press during mass arrests",
              "tags_str": "Soft, Hard",
              "LATITUDE": 35.2269,
              "LONGITUDE": -80.8433,
              "Link1": "https://www.facebook.com/queencitynerve/videos/302573580898919/",
              "Link2": ""
            },
            {
              "id": 1391,
              "date_text": "July 25th",
              "text": "Police shove and pepper spray protesters",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 35.2269,
              "LONGITUDE": -80.8433,
              "Link1": "https://www.wbtv.com/2020/07/25/protesters-supporting-back-blue-defund-police-confront-marshall-park/",
              "Link2": ""
            },
            {
              "id": 1392,
              "date_text": "July 22nd",
              "text": "Police with live ammo arrest protesters sitting in cars",
              "tags_str": "Soft",
              "LATITUDE": 35.244917,
              "LONGITUDE": -81.219449,
              "Link1": "https://twitter.com/jordangreentcb/status/1286110757223006208",
              "Link2": "https://twitter.com/jordangreentcb/status/1286110760284893184"
            },
            {
              "id": 1393,
              "date_text": "May 30th",
              "text": "Police fire tear gas at peaceful protests",
              "tags_str": "Projectiles",
              "LATITUDE": 35.772701,
              "LONGITUDE": -78.632439,
              "Link1": "https://www.newsobserver.com/news/local/article243114301.html",
              "Link2": "https://twitter.com/vizjourno/status/1266954106998009857"
            },
            {
              "id": 1394,
              "date_text": "May 31st",
              "text": "Police use tear gas to clear road",
              "tags_str": "Projectiles",
              "LATITUDE": 35.772701,
              "LONGITUDE": -78.632439,
              "Link1": "https://twitter.com/KateMurphyNews/status/1267227888811741190",
              "Link2": "https://www.cbs17.com/news/local-news/wake-county-news/about-100-march-during-protest-in-downtown-raleigh-sunday-afternoon/"
            },
            {
              "id": 1395,
              "date_text": "May 31st",
              "text": "Police shoot fleeing man at short range",
              "tags_str": "Projectiles",
              "LATITUDE": 35.772701,
              "LONGITUDE": -78.632439,
              "Link1": "https://twitter.com/greg_doucette/status/1267295157885505537",
              "Link2": "https://twitter.com/greg_doucette/status/1267836827328819200"
            },
            {
              "id": 1396,
              "date_text": "May 31st",
              "text": "Police fire tear gas at peacful protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 35.772701,
              "LONGITUDE": -78.632439,
              "Link1": "https://twitter.com/greg_doucette/status/1266951077183868928",
              "Link2": "https://youtu.be/hZsQY1XagKc"
            },
            {
              "id": 1397,
              "date_text": "May 31st",
              "text": "Police fire riot control rounds into protest",
              "tags_str": "Projectiles",
              "LATITUDE": 35.772701,
              "LONGITUDE": -78.632439,
              "Link1": "https://twitter.com/LiamCurrie16/status/1266948510022320130",
              "Link2": "https://www.youtube.com/watch?v=_ciMl0fLcgY&feature=youtu.be"
            },
            {
              "id": 1398,
              "date_text": "June 2nd",
              "text": "Police shoot to intimidate owner of LGBTQ bar",
              "tags_str": "Projectiles",
              "LATITUDE": 35.772701,
              "LONGITUDE": -78.632439,
              "Link1": "https://www.instagram.com/p/CA51AJxH7S9 (on the sixth page)",
              "Link2": "https://www.newsobserver.com/news/local/article243202416.html"
            },
            {
              "id": 1399,
              "date_text": "June 4th",
              "text": "Police target, follow and arrest protester",
              "tags_str": "Soft",
              "LATITUDE": 35.772701,
              "LONGITUDE": -78.632439,
              "Link1": "https://indyweek.com/news/wake/conrad-james-raleigh-city-council-arrest/",
              "Link2": "https://twitter.com/LeighTauss/status/1269100075323662339"
            },
            {
              "id": 1400,
              "date_text": "June 18th",
              "text": "Raleigh police roughly arrest protesters",
              "tags_str": "Soft",
              "LATITUDE": 35.772701,
              "LONGITUDE": -78.632439,
              "Link1": "https://www.wral.com/two-arrested-after-n-c-born-protest-in-downtown-raleigh/19151333/",
              "Link2": "https://twitter.com/raleighpolice/status/1273786583913771009"
            },
            {
              "id": 1401,
              "date_text": "June 3rd",
              "text": "Police kneel to lure protesters closer before firing",
              "tags_str": "Other",
              "LATITUDE": 34.225304,
              "LONGITUDE": -77.93785600000002,
              "Link1": "https://twitter.com/greg_doucette/status/1268047376008216576",
              "Link2": "https://twitter.com/greg_doucette/status/1268047092079112198"
            },
            {
              "id": 1402,
              "date_text": "July 3rd",
              "text": "Native protesters shot at and arrested on native land",
              "tags_str": "Soft, Projectiles",
              "LATITUDE": 43.969604,
              "LONGITUDE": -103.335235,
              "Link1": "https://www.pscp.tv/w/1BRKjYOAEMpxw",
              "Link2": "https://twitter.com/Te_Taipo/status/1279224285660250113"
            },
            {
              "id": 1403,
              "date_text": "May 30th",
              "text": "Police pull down and assault a protester",
              "tags_str": "Hard",
              "LATITUDE": 41.885847,
              "LONGITUDE": -87.618123,
              "Link1": "https://twitter.com/alyssa_taylor45/status/1266895002904539137?s=20",
              "Link2": ""
            },
            {
              "id": 1404,
              "date_text": "May 30th",
              "text": "Police pepper-spray reporter for recording",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 41.885847,
              "LONGITUDE": -87.618123,
              "Link1": "https://twitter.com/JCB_Journo/status/1266897672545480706",
              "Link2": ""
            },
            {
              "id": 1405,
              "date_text": " May 30th",
              "text": "Police remove badges",
              "tags_str": "Other",
              "LATITUDE": 41.885847,
              "LONGITUDE": -87.618123,
              "Link1": "https://old.reddit.com/r/PublicFreakout/comments/gtmbmh/cops_remove_badges_minutes_before_assault/",
              "Link2": ""
            },
            {
              "id": 1406,
              "date_text": "May 31st",
              "text": "Police harass and assault John Cusack",
              "tags_str": "Hard",
              "LATITUDE": 41.885847,
              "LONGITUDE": -87.618123,
              "Link1": "https://twitter.com/johncusack/status/1266938983575101441",
              "Link2": "https://www.youtube.com/watch?v=J4oRyvPJgnE&feature=youtu.be"
            },
            {
              "id": 1407,
              "date_text": "May 31st",
              "text": "Police pull black women out of the car and throw them to the ground",
              "tags_str": "Other",
              "LATITUDE": 41.885847,
              "LONGITUDE": -87.618123,
              "Link1": "https://twitter.com/cruzzzyc/status/1267185423333199874",
              "Link2": "https://twitter.com/AdrienneWrites/status/1267534983054254081"
            },
            {
              "id": 1408,
              "date_text": "May 31st",
              "text": "Cops hit Chicago Police Board President",
              "tags_str": "Other",
              "LATITUDE": 41.885847,
              "LONGITUDE": -87.618123,
              "Link1": "https://news.wttw.com/2020/06/05/police-board-president-officers-struck-me-5-times-their-batons-during-protest",
              "Link2": ""
            },
            {
              "id": 1409,
              "date_text": "May 31st",
              "text": "Officers cover badges and remove body cams",
              "tags_str": "Other",
              "LATITUDE": 41.885847,
              "LONGITUDE": -87.618123,
              "Link1": "https://twitter.com/KyleWilkins/status/1267268393809387520/photo/1",
              "Link2": "https://twitter.com/CHICAGOCREATUR1/status/1268607315902697478"
            },
            {
              "id": 1410,
              "date_text": "June 1st",
              "text": "Video showing CPD officer punching protester in Uptown under investigation",
              "tags_str": "Presence, Hard",
              "LATITUDE": 41.885847,
              "LONGITUDE": -87.618123,
              "Link1": "https://www.youtube.com/watch?time_continue=44&v=_urY-W8otNA",
              "Link2": "https://twitter.com/greg_doucette/status/1268323060026937345"
            },
            {
              "id": 1411,
              "date_text": "June 1st",
              "text": "CPD chase down protester on TV",
              "tags_str": "Other",
              "LATITUDE": 41.885847,
              "LONGITUDE": -87.618123,
              "Link1": "https://twitter.com/BLMChi/status/1267486699321544704",
              "Link2": ""
            },
            {
              "id": 1412,
              "date_text": "June 2nd",
              "text": "Police grab protester and throw into brick wall",
              "tags_str": "Other",
              "LATITUDE": 41.885847,
              "LONGITUDE": -87.618123,
              "Link1": "https://twitter.com/ChrisDitton/status/1267675836892708864",
              "Link2": ""
            },
            {
              "id": 1413,
              "date_text": "June 2nd",
              "text": "Police push protester on bike, slap phone out of his hand",
              "tags_str": "Other",
              "LATITUDE": 41.885847,
              "LONGITUDE": -87.618123,
              "Link1": "https://www.tiktok.com/@gonzalosanchez75/video/6833934911506746629",
              "Link2": ""
            },
            {
              "id": 1414,
              "date_text": " June 3rd",
              "text": "Police hit several protesters with batons",
              "tags_str": "Other",
              "LATITUDE": 41.885847,
              "LONGITUDE": -87.618123,
              "Link1": "https://twitter.com/TomSchuba/status/1268312957752160257",
              "Link2": ""
            },
            {
              "id": 1415,
              "date_text": " June 4th",
              "text": "Police seen without badges",
              "tags_str": "Other",
              "LATITUDE": 41.885847,
              "LONGITUDE": -87.618123,
              "Link1": "https://www.tiktok.com/@sarahsoch/video/6834688359969918214",
              "Link2": "https://twitter.com/punishmegrant/status/1268966252707487745"
            },
            {
              "id": 1416,
              "date_text": "July 17th",
              "text": "Cop suddenly punches activist",
              "tags_str": "Hard",
              "LATITUDE": 41.885847,
              "LONGITUDE": -87.618123,
              "Link1": "https://twitter.com/GKMC18/status/1284347396311388161",
              "Link2": "https://m.facebook.com/story.php?story_fbid=177411500432063&id=100044896430818"
            },
            {
              "id": 1417,
              "date_text": "July 17th",
              "text": "Violent arrests made in Grant Park",
              "tags_str": "Soft",
              "LATITUDE": 41.885847,
              "LONGITUDE": -87.618123,
              "Link1": "https://twitter.com/poonfarm/status/1284289077530054656",
              "Link2": "https://twitter.com/DominicGwinn/status/1284291163940429831"
            },
            {
              "id": 1418,
              "date_text": "July 17th",
              "text": "Police strike protester with baton while attempting to seize bike",
              "tags_str": "Other",
              "LATITUDE": 41.885847,
              "LONGITUDE": -87.618123,
              "Link1": "https://twitter.com/KeepinKidsSafe/status/1284289666615844871",
              "Link2": ""
            },
            {
              "id": 1419,
              "date_text": "July 17th",
              "text": "Journalist harassed, threatened and shoved by police",
              "tags_str": "Soft",
              "LATITUDE": 41.885847,
              "LONGITUDE": -87.618123,
              "Link1": "https://twitter.com/colinbphoto/status/1284301680524382208",
              "Link2": ""
            },
            {
              "id": 1420,
              "date_text": "July 17th",
              "text": "Phone knocked out of reporter's hand",
              "tags_str": "Other",
              "LATITUDE": 41.885847,
              "LONGITUDE": -87.618123,
              "Link1": "https://twitter.com/MarParNews/status/1284306440971325440",
              "Link2": ""
            },
            {
              "id": 1421,
              "date_text": " July 17th",
              "text": "Police indiscriminately pepper spray protesters",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 41.885847,
              "LONGITUDE": -87.618123,
              "Link1": "https://twitter.com/frantheman10/status/1284911153785778177",
              "Link2": ""
            },
            {
              "id": 1422,
              "date_text": "July 18th",
              "text": "Police vehicle drives on sidewalk, collides with protesters",
              "tags_str": "Other",
              "LATITUDE": 41.885847,
              "LONGITUDE": -87.618123,
              "Link1": "https://twitter.com/jamaicaponders/status/1284680046473621505",
              "Link2": ""
            },
            {
              "id": 1423,
              "date_text": "August 15th",
              "text": "Police shove protesters with bikes",
              "tags_str": "Soft",
              "LATITUDE": 41.885847,
              "LONGITUDE": -87.618123,
              "Link1": "https://twitter.com/BaburRealer/status/1294834101988597766",
              "Link2": ""
            },
            {
              "id": 1424,
              "date_text": "August 15th",
              "text": "Police shove and pepper spray protesters",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 41.885847,
              "LONGITUDE": -87.618123,
              "Link1": "https://twitter.com/ChicagoCritter/status/1294827198961061888",
              "Link2": "https://twitter.com/exfratbro/status/1295044305338474496"
            },
            {
              "id": 1425,
              "date_text": "August 15th",
              "text": "White-shirted officer shoves his way through a crowd of protesters",
              "tags_str": "Soft",
              "LATITUDE": 41.885847,
              "LONGITUDE": -87.618123,
              "Link1": "https://twitter.com/dudgedudy/status/1294762556901535744",
              "Link2": "https://twitter.com/dudgedudy/status/1294849796583362560"
            },
            {
              "id": 1426,
              "date_text": "August 15th",
              "text": "Police shove and strike protesters",
              "tags_str": "Soft",
              "LATITUDE": 41.885847,
              "LONGITUDE": -87.618123,
              "Link1": "https://twitter.com/luz_mayancela/status/1294802015483318276",
              "Link2": ""
            },
            {
              "id": 1427,
              "date_text": "August 15th",
              "text": "Police grab umbrellas from protesters, then escalate force",
              "tags_str": "Other",
              "LATITUDE": 41.885847,
              "LONGITUDE": -87.618123,
              "Link1": "https://twitter.com/dudgedudy/status/1294849257896316929",
              "Link2": "https://twitter.com/delvecchiograce/status/1294770082816696325"
            },
            {
              "id": 1428,
              "date_text": "August 15th",
              "text": "Police pepper spray fleeing protesters",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 41.885847,
              "LONGITUDE": -87.618123,
              "Link1": "https://mobile.twitter.com/lukeharuki92/status/1295167889876692992",
              "Link2": ""
            },
            {
              "id": 1429,
              "date_text": "May 31st",
              "text": "Officers grabs someone by the neck then more cops pile on",
              "tags_str": "Soft",
              "LATITUDE": 41.527154,
              "LONGITUDE": -88.08241,
              "Link1": "https://www.youtube.com/watch?v=rllO2sdj1Ek",
              "Link2": "https://twitter.com/OrozcoJustina/status/1268262843801010179"
            },
            {
              "id": 1430,
              "date_text": "May 30th",
              "text": "Police beat and arrest bystanders",
              "tags_str": "Soft, Hard",
              "LATITUDE": 42.292233,
              "LONGITUDE": -89.116118,
              "Link1": "https://www.youtube.com/watch?v=VfRZkKR9l3w",
              "Link2": ""
            },
            {
              "id": 1431,
              "date_text": "July 31st",
              "text": "Police arrest, pepper spray, and tear gas protesters",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 42.292233,
              "LONGITUDE": -89.116118,
              "Link1": "https://www.rrstar.com/news/20200731/protesters-arrested-after-blocking-traffic-in-downtown-rockford",
              "Link2": "https://www.rrstar.com/news/20200801/protesters-arrested-for-second-straight-day-in-rockford"
            },
            {
              "id": 1432,
              "date_text": "May 30th",
              "text": "Officer tackles and arrests person walking home from protest",
              "tags_str": "Soft, Hard",
              "LATITUDE": 33.451,
              "LONGITUDE": -112.0685,
              "Link1": "https://twitter.com/PhxProtestLIVE/status/1268390978571825156?s=20",
              "Link2": ""
            },
            {
              "id": 1433,
              "date_text": "May 30th",
              "text": "Officers arrest dozens of people, fail to exhibit probable cause",
              "tags_str": "Soft",
              "LATITUDE": 33.451,
              "LONGITUDE": -112.0685,
              "Link1": "https://www.abc15.com/news/local-news/investigations/phoenix-police-arrests-dozens-with-copy-and-paste-evidence",
              "Link2": "https://www.youtube.com/watch?v=ecwUweozAXE&feature=emb_title"
            },
            {
              "id": 1434,
              "date_text": "May 30th",
              "text": "Photographer injured by rubber bullets",
              "tags_str": "Projectiles",
              "LATITUDE": 33.451,
              "LONGITUDE": -112.0685,
              "Link1": "https://www.abc15.com/news/region-phoenix-metro/valley-photographer-injured-in-phoenix-protest-released-from-hospital",
              "Link2": "https://pressfreedomtracker.us/all-incidents/head-wound-bruised-lung-and-concussion-photographer-covering-phoenix-protests/"
            },
            {
              "id": 1435,
              "date_text": "May 31st",
              "text": "Officer arrests a woman on the sidewalk outside her home for curfew violation",
              "tags_str": "Soft",
              "LATITUDE": 33.451,
              "LONGITUDE": -112.0685,
              "Link1": "https://www.azcentral.com/story/news/local/phoenix/2020/06/01/residents-phoenix-garfield-neighborhood-say-police-not-protesters-were-problem-protest/5312347002/?utm_campaign=snd-autopilot&cid=twitter_azcentral",
              "Link2": "https://docs.google.com/document/d/1BxK7bi8Iim-bOb_A03pUQ1ATFRZfcxAdbCCnowo2kbI/edit?fbclid=IwAR1ofant2QVqUhgOjy6OkB7SSURXA6Vik3i38Mm7X0hTgL1ZtCv7iHVzRVY#"
            },
            {
              "id": 1436,
              "date_text": "June 23rd",
              "text": "Protests at Trump rally met with pepper spray",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 33.451,
              "LONGITUDE": -112.0685,
              "Link1": "https://twitter.com/JoshuaPotash/status/1275585545499021313",
              "Link2": "https://twitter.com/gaminogabriel/status/1275573699622494208"
            },
            {
              "id": 1437,
              "date_text": "June 27th",
              "text": "Police pepper spray protesters on sidewalk",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 33.4273,
              "LONGITUDE": -111.9307,
              "Link1": "https://twitter.com/greg_doucette/status/1277432629353238535",
              "Link2": "https://www.instagram.com/tv/CB91jGvh25c/"
            },
            {
              "id": 1438,
              "date_text": "July 27th",
              "text": "Police charge and arrest protesters",
              "tags_str": "Soft",
              "LATITUDE": 33.4273,
              "LONGITUDE": -111.9307,
              "Link1": "https://twitter.com/azfamily/status/1287983623971508224",
              "Link2": "https://www.azfamily.com/news/demonstrators-clash-with-police-during-protests-in-tempe/article_0a2cf712-d080-11ea-b06d-634862a713a1.html"
            },
            {
              "id": 1439,
              "date_text": "May 31st",
              "text": "Police tackle and detain 6 protesters",
              "tags_str": "Hard",
              "LATITUDE": 41.558,
              "LONGITUDE": -73.0519,
              "Link1": "https://twitter.com/mattaustinTV/status/1267189278691528706",
              "Link2": "https://www.facebook.com/100006204547796/videos/2541882326028561/?id=100006204547796"
            },
            {
              "id": 1440,
              "date_text": "May 31st",
              "text": "Police detain protesters",
              "tags_str": "Other",
              "LATITUDE": 41.558,
              "LONGITUDE": -73.0519,
              "Link1": "https://www.facebook.com/lisha.watson/videos/vb.1314669862/10222859537459698/?type=2&video_source=user_video_tab",
              "Link2": "https://twitter.com/Calibud_Art/status/1268274760250777600"
            },
            {
              "id": 1441,
              "date_text": "June 3rd",
              "text": "Officer forces woman into car and wrestles with another",
              "tags_str": "Other",
              "LATITUDE": 41.558,
              "LONGITUDE": -73.0519,
              "Link1": "https://twitter.com/Youbeenafannn/status/1268253924471037959",
              "Link2": "https://www.facebook.com/1810145782/videos/10213301759497738/"
            },
            {
              "id": 1442,
              "date_text": "May 29th",
              "text": "Police arrest a man for speaking at them from a distance.",
              "tags_str": "Soft",
              "LATITUDE": 36.172082,
              "LONGITUDE": -115.122366,
              "Link1": "https://twitter.com/itsraiialex/status/1266770032719040513",
              "Link2": ""
            },
            {
              "id": 1443,
              "date_text": "May 29th",
              "text": "Police shove numerous protesters to the ground",
              "tags_str": "Soft",
              "LATITUDE": 36.172082,
              "LONGITUDE": -115.122366,
              "Link1": "https://twitter.com/bridgetkbennett/status/1266561128185819136",
              "Link2": ""
            },
            {
              "id": 1444,
              "date_text": "May 31st",
              "text": "Police charge into peaceful crowd shouting \"grab anybody\"",
              "tags_str": "Other",
              "LATITUDE": 36.172082,
              "LONGITUDE": -115.122366,
              "Link1": "https://mobile.twitter.com/chadloder/status/1267168204863926274",
              "Link2": ""
            },
            {
              "id": 1445,
              "date_text": "May 31st",
              "text": "Police shove and drag man through the street",
              "tags_str": "Soft",
              "LATITUDE": 36.172082,
              "LONGITUDE": -115.122366,
              "Link1": "https://twitter.com/LasVegasLocally/status/1267210841595604992",
              "Link2": "https://www.instagram.com/p/CA14rooHIC6/?utm_source=ig_web_copy_link"
            },
            {
              "id": 1446,
              "date_text": "June 1st",
              "text": "Police jump out of car to shove protesters",
              "tags_str": "Soft",
              "LATITUDE": 36.172082,
              "LONGITUDE": -115.122366,
              "Link1": "https://www.tiktok.com/@lord.vizi/video/6833826921755741445",
              "Link2": "https://www.tiktok.com/@lord.vizi/video/6833963763486461190"
            },
            {
              "id": 1447,
              "date_text": "June 20th",
              "text": "Police charge and shove protesters",
              "tags_str": "Soft",
              "LATITUDE": 36.172082,
              "LONGITUDE": -115.122366,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/hcfocc/cops_rush_protest_crowd_in_las_vegas/",
              "Link2": "https://twitter.com/SodASierra/status/1274719985416286209"
            },
            {
              "id": 1448,
              "date_text": "May 26th",
              "text": "Police hit press in neck and head with wooden baton",
              "tags_str": "Other",
              "LATITUDE": 45.049582,
              "LONGITUDE": -93.246095,
              "Link1": "https://youtu.be/XAa5xb6JitI?t=5982",
              "Link2": "https://gfycat.com/distinctsecretgrasshopper-minneapolis-protest-police-acab"
            },
            {
              "id": 1449,
              "date_text": "May 26th",
              "text": "Police hit press in neck and head with wooden baton",
              "tags_str": "Other",
              "LATITUDE": 44.983473,
              "LONGITUDE": -93.268251,
              "Link1": "https://youtu.be/XAa5xb6JitI?t=5982",
              "Link2": "https://gfycat.com/distinctsecretgrasshopper-minneapolis-protest-police-acab"
            },
            {
              "id": 1450,
              "date_text": "May 26th",
              "text": "Man has his gun confiscated in an open carry state, violating his 2nd amendment rights",
              "tags_str": "Other",
              "LATITUDE": 45.049582,
              "LONGITUDE": -93.246095,
              "Link1": "https://www.facebook.com/damicedsota.thespiritflow/videos/10216865788705633/UzpfSTEwMDAxMTAzODkyNjEwMzpWSzoyNjczNDU4ODUyOTMzODE2/",
              "Link2": ""
            },
            {
              "id": 1451,
              "date_text": "May 26th",
              "text": "Man has his gun confiscated in an open carry state, violating his 2nd amendment rights",
              "tags_str": "Other",
              "LATITUDE": 44.983473,
              "LONGITUDE": -93.268251,
              "Link1": "https://www.facebook.com/damicedsota.thespiritflow/videos/10216865788705633/UzpfSTEwMDAxMTAzODkyNjEwMzpWSzoyNjczNDU4ODUyOTMzODE2/",
              "Link2": ""
            },
            {
              "id": 1452,
              "date_text": "believed to be May 26th or 27th",
              "text": "Police shoot flashbang grenades into crowd",
              "tags_str": "Projectiles",
              "LATITUDE": 45.049582,
              "LONGITUDE": -93.246095,
              "Link1": "https://www.facebook.com/1462345700/posts/10220863688809651",
              "Link2": "https://www.facebook.com/1462345700/posts/10220863812572745"
            },
            {
              "id": 1453,
              "date_text": "believed to be May 26th or 27th",
              "text": "Police shoot flashbang grenades into crowd",
              "tags_str": "Projectiles",
              "LATITUDE": 44.983473,
              "LONGITUDE": -93.268251,
              "Link1": "https://www.facebook.com/1462345700/posts/10220863688809651",
              "Link2": "https://www.facebook.com/1462345700/posts/10220863812572745"
            },
            {
              "id": 1454,
              "date_text": "May 30th",
              "text": "Police storm gas station, attacking reporters who show press badges",
              "tags_str": "Presence, Projectiles",
              "LATITUDE": 45.049582,
              "LONGITUDE": -93.246095,
              "Link1": "https://twitter.com/MichaelAdams317/status/1266945268567678976",
              "Link2": "https://twitter.com/rsdaza/status/1267200011659554824"
            },
            {
              "id": 1455,
              "date_text": "May 30th",
              "text": "Police storm gas station, attacking reporters who show press badges",
              "tags_str": "Presence, Projectiles",
              "LATITUDE": 44.983473,
              "LONGITUDE": -93.268251,
              "Link1": "https://twitter.com/MichaelAdams317/status/1266945268567678976",
              "Link2": "https://twitter.com/rsdaza/status/1267200011659554824"
            },
            {
              "id": 1456,
              "date_text": "May 30th",
              "text": "Continuation of gas station event; Awaijane family told to go inside gas station, they comply and seek shelter inside, police then shoot rubber bullets and tear gas inside the building",
              "tags_str": "Projectiles",
              "LATITUDE": 45.049582,
              "LONGITUDE": -93.246095,
              "Link1": "https://youtu.be/46qWpv-yFE8?t=268",
              "Link2": ""
            },
            {
              "id": 1457,
              "date_text": "May 30th",
              "text": "Continuation of gas station event; Awaijane family told to go inside gas station, they comply and seek shelter inside, police then shoot rubber bullets and tear gas inside the building",
              "tags_str": "Projectiles",
              "LATITUDE": 44.983473,
              "LONGITUDE": -93.268251,
              "Link1": "https://youtu.be/46qWpv-yFE8?t=268",
              "Link2": ""
            },
            {
              "id": 1458,
              "date_text": "May 30th",
              "text": "Police drive by spraying",
              "tags_str": "Other",
              "LATITUDE": 45.049582,
              "LONGITUDE": -93.246095,
              "Link1": "https://www.youtube.com/watch?v=O3qj4cfsd7g",
              "Link2": "https://twitter.com/stribrooks/status/1266186985041022976"
            },
            {
              "id": 1459,
              "date_text": "May 30th",
              "text": "Police drive by spraying",
              "tags_str": "Other",
              "LATITUDE": 44.983473,
              "LONGITUDE": -93.268251,
              "Link1": "https://www.youtube.com/watch?v=O3qj4cfsd7g",
              "Link2": "https://twitter.com/stribrooks/status/1266186985041022976"
            },
            {
              "id": 1460,
              "date_text": "May 30th",
              "text": "CNN Reporter arrested",
              "tags_str": "Soft",
              "LATITUDE": 45.049582,
              "LONGITUDE": -93.246095,
              "Link1": "https://www.youtube.com/watch?v=aNuzzVpDZTY",
              "Link2": ""
            },
            {
              "id": 1461,
              "date_text": "May 30th",
              "text": "CNN Reporter arrested",
              "tags_str": "Soft",
              "LATITUDE": 44.983473,
              "LONGITUDE": -93.268251,
              "Link1": "https://www.youtube.com/watch?v=aNuzzVpDZTY",
              "Link2": ""
            },
            {
              "id": 1462,
              "date_text": "May 30th",
              "text": "WCCO photojournalist arrested",
              "tags_str": "Soft",
              "LATITUDE": 45.049582,
              "LONGITUDE": -93.246095,
              "Link1": "https://www.youtube.com/watch?v=wmpic2NU1RM&feature=youtu.be",
              "Link2": "https://twitter.com/greg_doucette/status/1266958068807544839"
            },
            {
              "id": 1463,
              "date_text": "May 30th",
              "text": "WCCO photojournalist arrested",
              "tags_str": "Soft",
              "LATITUDE": 44.983473,
              "LONGITUDE": -93.268251,
              "Link1": "https://www.youtube.com/watch?v=wmpic2NU1RM&feature=youtu.be",
              "Link2": "https://twitter.com/greg_doucette/status/1266958068807544839"
            },
            {
              "id": 1464,
              "date_text": "May 30th",
              "text": "CNN crew shot at with rubber bullets and tear gas while live on air",
              "tags_str": "Projectiles",
              "LATITUDE": 45.049582,
              "LONGITUDE": -93.246095,
              "Link1": "https://mobile.twitter.com/chadloder/status/1266962631887224837",
              "Link2": ""
            },
            {
              "id": 1465,
              "date_text": "May 30th",
              "text": "CNN crew shot at with rubber bullets and tear gas while live on air",
              "tags_str": "Projectiles",
              "LATITUDE": 44.983473,
              "LONGITUDE": -93.268251,
              "Link1": "https://mobile.twitter.com/chadloder/status/1266962631887224837",
              "Link2": ""
            },
            {
              "id": 1466,
              "date_text": "May 30th",
              "text": "Swiss journalists shot at with rubber bullets by police",
              "tags_str": "Projectiles",
              "LATITUDE": 45.049582,
              "LONGITUDE": -93.246095,
              "Link1": "https://www.srf.ch/play/tv/news-clip/video/schweizer-journalisten-werden-mit-gummischrot-attackiert?id=67d44dd8-f16e-4db0-b690-799ab827956a&startTime=9",
              "Link2": "https://www.srf.ch/news/international/pressefreiheit-unter-beschuss-schweizer-journalisten-in-den-usa-von-polizei-attackiert"
            },
            {
              "id": 1467,
              "date_text": "May 30th",
              "text": "Swiss journalists shot at with rubber bullets by police",
              "tags_str": "Projectiles",
              "LATITUDE": 44.983473,
              "LONGITUDE": -93.268251,
              "Link1": "https://www.srf.ch/play/tv/news-clip/video/schweizer-journalisten-werden-mit-gummischrot-attackiert?id=67d44dd8-f16e-4db0-b690-799ab827956a&startTime=9",
              "Link2": "https://www.srf.ch/news/international/pressefreiheit-unter-beschuss-schweizer-journalisten-in-den-usa-von-polizei-attackiert"
            },
            {
              "id": 1468,
              "date_text": "May 30th",
              "text": "Camera man shot by police",
              "tags_str": "Projectiles",
              "LATITUDE": 45.049582,
              "LONGITUDE": -93.246095,
              "Link1": "https://twitter.com/brianstelter/status/1266910826797113347",
              "Link2": ""
            },
            {
              "id": 1469,
              "date_text": "May 30th",
              "text": "Camera man shot by police",
              "tags_str": "Projectiles",
              "LATITUDE": 44.983473,
              "LONGITUDE": -93.268251,
              "Link1": "https://twitter.com/brianstelter/status/1266910826797113347",
              "Link2": ""
            },
            {
              "id": 1470,
              "date_text": "May 30th",
              "text": "CBS crew fired upon by police.",
              "tags_str": "Projectiles",
              "LATITUDE": 45.049582,
              "LONGITUDE": -93.246095,
              "Link1": "https://twitter.com/MikeGeorgeCBS/status/1267087091122528256",
              "Link2": "https://twitter.com/MikeGeorgeCBS/status/1266919447970942986"
            },
            {
              "id": 1471,
              "date_text": "May 30th",
              "text": "CBS crew fired upon by police.",
              "tags_str": "Projectiles",
              "LATITUDE": 44.983473,
              "LONGITUDE": -93.268251,
              "Link1": "https://twitter.com/MikeGeorgeCBS/status/1267087091122528256",
              "Link2": "https://twitter.com/MikeGeorgeCBS/status/1266919447970942986"
            },
            {
              "id": 1472,
              "date_text": "May 30th",
              "text": "Medics talk about police destroying tent and slashing tires.",
              "tags_str": "Other",
              "LATITUDE": 45.049582,
              "LONGITUDE": -93.246095,
              "Link1": "https://www.youtube.com/watch?v=gfb_zJiMTFU",
              "Link2": ""
            },
            {
              "id": 1473,
              "date_text": "May 30th",
              "text": "Medics talk about police destroying tent and slashing tires.",
              "tags_str": "Other",
              "LATITUDE": 44.983473,
              "LONGITUDE": -93.268251,
              "Link1": "https://www.youtube.com/watch?v=gfb_zJiMTFU",
              "Link2": ""
            },
            {
              "id": 1474,
              "date_text": "May 30th",
              "text": "Law enforcement officers slash car tires.",
              "tags_str": "Other",
              "LATITUDE": 45.049582,
              "LONGITUDE": -93.246095,
              "Link1": "https://twitter.com/val_ebertz/status/1266975058230235137",
              "Link2": "https://twitter.com/Jeff_Wagner4/status/1266933139303268353"
            },
            {
              "id": 1475,
              "date_text": "May 30th",
              "text": "Law enforcement officers slash car tires.",
              "tags_str": "Other",
              "LATITUDE": 44.983473,
              "LONGITUDE": -93.268251,
              "Link1": "https://twitter.com/val_ebertz/status/1266975058230235137",
              "Link2": "https://twitter.com/Jeff_Wagner4/status/1266933139303268353"
            },
            {
              "id": 1476,
              "date_text": "May 31st",
              "text": "Police shoot at a woman on her porch",
              "tags_str": "Projectiles",
              "LATITUDE": 45.049582,
              "LONGITUDE": -93.246095,
              "Link1": "https://twitter.com/tkerssen/status/1266921821653385225",
              "Link2": ""
            },
            {
              "id": 1477,
              "date_text": "May 31st",
              "text": "Police shoot at a woman on her porch",
              "tags_str": "Projectiles",
              "LATITUDE": 44.983473,
              "LONGITUDE": -93.268251,
              "Link1": "https://twitter.com/tkerssen/status/1266921821653385225",
              "Link2": ""
            },
            {
              "id": 1478,
              "date_text": "May 31st",
              "text": "LA Times employee recounts getting shot",
              "tags_str": "Projectiles",
              "LATITUDE": 45.049582,
              "LONGITUDE": -93.246095,
              "Link1": "https://mobile.twitter.com/mollyhf/status/1266911382613692422",
              "Link2": "https://twitter.com/mollyhf/status/1269003675063799810"
            },
            {
              "id": 1479,
              "date_text": "May 31st",
              "text": "LA Times employee recounts getting shot",
              "tags_str": "Projectiles",
              "LATITUDE": 44.983473,
              "LONGITUDE": -93.268251,
              "Link1": "https://mobile.twitter.com/mollyhf/status/1266911382613692422",
              "Link2": "https://twitter.com/mollyhf/status/1269003675063799810"
            },
            {
              "id": 1480,
              "date_text": "May 31st",
              "text": "Reporter's car window broken by police projectile",
              "tags_str": "Other",
              "LATITUDE": 45.049582,
              "LONGITUDE": -93.246095,
              "Link1": "https://twitter.com/JaredGoyette/status/1266961243476299778",
              "Link2": "https://twitter.com/RyanFaircloth/status/1266967500383834114"
            },
            {
              "id": 1481,
              "date_text": "May 31st",
              "text": "Reporter's car window broken by police projectile",
              "tags_str": "Other",
              "LATITUDE": 44.983473,
              "LONGITUDE": -93.268251,
              "Link1": "https://twitter.com/JaredGoyette/status/1266961243476299778",
              "Link2": "https://twitter.com/RyanFaircloth/status/1266967500383834114"
            },
            {
              "id": 1482,
              "date_text": "May 31st",
              "text": "Police slashes tires",
              "tags_str": "Other",
              "LATITUDE": 45.049582,
              "LONGITUDE": -93.246095,
              "Link1": "https://www.motherjones.com/anti-racism-police-protest/2020/06/videos-show-cops-slashing-car-tires-at-protests-in-minneapolis/",
              "Link2": "https://youtu.be/sP7hM_sdpkQ?t=4209"
            },
            {
              "id": 1483,
              "date_text": "May 31st",
              "text": "Police slashes tires",
              "tags_str": "Other",
              "LATITUDE": 44.983473,
              "LONGITUDE": -93.268251,
              "Link1": "https://www.motherjones.com/anti-racism-police-protest/2020/06/videos-show-cops-slashing-car-tires-at-protests-in-minneapolis/",
              "Link2": "https://youtu.be/sP7hM_sdpkQ?t=4209"
            },
            {
              "id": 1484,
              "date_text": "May 31st",
              "text": "CBS news crew shot with rubber bullets",
              "tags_str": "Projectiles",
              "LATITUDE": 45.049582,
              "LONGITUDE": -93.246095,
              "Link1": "https://mobile.twitter.com/chadloder/status/1266971884001693696",
              "Link2": "https://twitter.com/MikeGeorgeCBS/status/1266916104951214080"
            },
            {
              "id": 1485,
              "date_text": "May 31st",
              "text": "CBS news crew shot with rubber bullets",
              "tags_str": "Projectiles",
              "LATITUDE": 44.983473,
              "LONGITUDE": -93.268251,
              "Link1": "https://mobile.twitter.com/chadloder/status/1266971884001693696",
              "Link2": "https://twitter.com/MikeGeorgeCBS/status/1266916104951214080"
            },
            {
              "id": 1486,
              "date_text": "May 31st",
              "text": "Police throw flashbangs at reporter",
              "tags_str": "Other",
              "LATITUDE": 45.049582,
              "LONGITUDE": -93.246095,
              "Link1": "https://twitter.com/atrupar/status/1266910910137995264",
              "Link2": ""
            },
            {
              "id": 1487,
              "date_text": "May 31st",
              "text": "Police throw flashbangs at reporter",
              "tags_str": "Other",
              "LATITUDE": 44.983473,
              "LONGITUDE": -93.268251,
              "Link1": "https://twitter.com/atrupar/status/1266910910137995264",
              "Link2": ""
            },
            {
              "id": 1488,
              "date_text": "May 31st",
              "text": "Police blind a reporter with rubber bullet",
              "tags_str": "Projectiles",
              "LATITUDE": 45.049582,
              "LONGITUDE": -93.246095,
              "Link1": "https://mobile.twitter.com/KillerMartinis/status/1266618525600399361?s=19",
              "Link2": "https://twitter.com/chadloder/status/1267059540190625792"
            },
            {
              "id": 1489,
              "date_text": "May 31st",
              "text": "Police blind a reporter with rubber bullet",
              "tags_str": "Projectiles",
              "LATITUDE": 44.983473,
              "LONGITUDE": -93.268251,
              "Link1": "https://mobile.twitter.com/KillerMartinis/status/1266618525600399361?s=19",
              "Link2": "https://twitter.com/chadloder/status/1267059540190625792"
            },
            {
              "id": 1490,
              "date_text": "May 31st",
              "text": "Police shoot Reuters reporters with rubber bullets",
              "tags_str": "Projectiles",
              "LATITUDE": 45.049582,
              "LONGITUDE": -93.246095,
              "Link1": "https://www.reuters.com/article/us-minneapolis-police-protest-update/reuters-cameraman-hit-by-rubber-bullets-as-police-disperse-protesters-idUSKBN237050",
              "Link2": ""
            },
            {
              "id": 1491,
              "date_text": "May 31st",
              "text": "Police shoot Reuters reporters with rubber bullets",
              "tags_str": "Projectiles",
              "LATITUDE": 44.983473,
              "LONGITUDE": -93.268251,
              "Link1": "https://www.reuters.com/article/us-minneapolis-police-protest-update/reuters-cameraman-hit-by-rubber-bullets-as-police-disperse-protesters-idUSKBN237050",
              "Link2": ""
            },
            {
              "id": 1492,
              "date_text": "May 31st",
              "text": "Police shoot at, threaten to arrest reporter",
              "tags_str": "Soft, Projectiles",
              "LATITUDE": 45.049582,
              "LONGITUDE": -93.246095,
              "Link1": "https://www.youtube.com/watch?v=NN8ISwuiX68",
              "Link2": ""
            },
            {
              "id": 1493,
              "date_text": "May 31st",
              "text": "Police shoot at, threaten to arrest reporter",
              "tags_str": "Soft, Projectiles",
              "LATITUDE": 44.983473,
              "LONGITUDE": -93.268251,
              "Link1": "https://www.youtube.com/watch?v=NN8ISwuiX68",
              "Link2": ""
            },
            {
              "id": 1494,
              "date_text": "May 31st",
              "text": "Police stop SUV to drive-by pepper-spray protesters through window",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.049582,
              "LONGITUDE": -93.246095,
              "Link1": "https://twitter.com/keycodez/status/1267235529311113216/video/1",
              "Link2": ""
            },
            {
              "id": 1495,
              "date_text": "May 31st",
              "text": "Police stop SUV to drive-by pepper-spray protesters through window",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 44.983473,
              "LONGITUDE": -93.268251,
              "Link1": "https://twitter.com/keycodez/status/1267235529311113216/video/1",
              "Link2": ""
            },
            {
              "id": 1496,
              "date_text": "May 31st",
              "text": "Patient care assistant reports being shot with rubber bullets while treating injured protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 45.049582,
              "LONGITUDE": -93.246095,
              "Link1": "https://mobile.twitter.com/chadloder/status/1266957030285127687",
              "Link2": ""
            },
            {
              "id": 1497,
              "date_text": "May 31st",
              "text": "Patient care assistant reports being shot with rubber bullets while treating injured protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 44.983473,
              "LONGITUDE": -93.268251,
              "Link1": "https://mobile.twitter.com/chadloder/status/1266957030285127687",
              "Link2": ""
            },
            {
              "id": 1498,
              "date_text": "May 31st",
              "text": "Journalists pepper sprayed and hit with flashbangs and batons",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 45.049582,
              "LONGITUDE": -93.246095,
              "Link1": "https://twitter.com/edouphoto/status/1267958349477249024",
              "Link2": "https://twitter.com/edouphoto/status/1267981849537609728"
            },
            {
              "id": 1499,
              "date_text": "May 31st",
              "text": "Journalists pepper sprayed and hit with flashbangs and batons",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 44.983473,
              "LONGITUDE": -93.268251,
              "Link1": "https://twitter.com/edouphoto/status/1267958349477249024",
              "Link2": "https://twitter.com/edouphoto/status/1267981849537609728"
            },
            {
              "id": 1500,
              "date_text": "Date Unknown",
              "text": "Woman kicked in head",
              "tags_str": "Other",
              "LATITUDE": 45.049582,
              "LONGITUDE": -93.246095,
              "Link1": "https://www.tiktok.com/@montygeer/video/6840314007954509062",
              "Link2": ""
            },
            {
              "id": 1501,
              "date_text": "Date Unknown",
              "text": "Woman kicked in head",
              "tags_str": "Other",
              "LATITUDE": 44.983473,
              "LONGITUDE": -93.268251,
              "Link1": "https://www.tiktok.com/@montygeer/video/6840314007954509062",
              "Link2": ""
            },
            {
              "id": 1502,
              "date_text": "May 31st",
              "text": "Police respond to broken windows with excessive force",
              "tags_str": "Other",
              "LATITUDE": 47.012906,
              "LONGITUDE": -122.87631100000002,
              "Link1": "https://www.youtube.com/watch?v=s7MM1VauRHo",
              "Link2": ""
            },
            {
              "id": 1503,
              "date_text": "May 30th",
              "text": "Officer pins protester by pushing his knee into his neck",
              "tags_str": "Other",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://mobile.twitter.com/chadloder/status/1267011092045115392",
              "Link2": ""
            },
            {
              "id": 1504,
              "date_text": "May 31st",
              "text": "Police beat unarmed man on the ground",
              "tags_str": "Hard",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/gunduzbaba1905/status/1266937500607614982",
              "Link2": ""
            },
            {
              "id": 1505,
              "date_text": "May 31st",
              "text": "Police indiscriminately pepper spray peaceful protesters",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://www.reddit.com/r/Bad_Cop_No_Donut/comments/gtt3w8/i_caught_the_moment_seattle_police_pepper_sprayed/",
              "Link2": ""
            },
            {
              "id": 1506,
              "date_text": "May 31st",
              "text": "Police pepper spray young child",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://www.fox10phoenix.com/news/video-shows-milk-poured-over-face-of-child-pepper-sprayed-in-seattle-protest",
              "Link2": ""
            },
            {
              "id": 1507,
              "date_text": "May 31st",
              "text": "Police throw tear gas at peaceful protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://www.reddit.com/r/Seattle/comments/gu3qq1/cop_just_casually_tosses_tear_gas_at_my_feet_like/",
              "Link2": "https://www.google.ca/maps/@47.6117535,-122.3363867,3a,75y,340.76h,98.03t/data=!3m7!1e1!3m5!1s3_dezBzQDIEjlJ1L0qu2QA!2e0!6s%2F%2Fgeo1.ggpht.com%2Fcbk%3Fpanoid%3D3_dezBzQDIEjlJ1L0qu2QA%26output%3Dthumbnail%26cb_client%3Dmaps_sv.tactile.gps%26thumb%3D2%26w%3D203%26h%3D100%26yaw%3D141.4241%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192"
            },
            {
              "id": 1508,
              "date_text": "May 31st",
              "text": "Police officer pulls protester to the ground unprovoked",
              "tags_str": "Other",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/EDDIFUL/status/1267338642617364481",
              "Link2": "https://www.reddit.com/r/PublicFreakout/comments/gv9g5n/the_police_were_spotted_instigating_violence/"
            },
            {
              "id": 1509,
              "date_text": "May 31st",
              "text": "Law enforcement officer punches pinned protester",
              "tags_str": "Hard",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/The_Stepover/status/1267236742278463488",
              "Link2": "https://twitter.com/eavu__/status/1267260549814870016"
            },
            {
              "id": 1510,
              "date_text": " May 31st",
              "text": "Law enforcement officers throw flashbangs into peaceful crowd",
              "tags_str": "Other",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/The_Stepover/status/1267237940184231936",
              "Link2": ""
            },
            {
              "id": 1511,
              "date_text": "June 1st",
              "text": "Police pepper spray crowd",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://www.reddit.com/r/Seattle/comments/gv0ru3/this_is_the_moment_it_all_happened/",
              "Link2": "https://www.reddit.com/r/PublicFreakout/comments/gv1spo/the_moment_seattle_police_instigate_a_riot_over_a/"
            },
            {
              "id": 1512,
              "date_text": "June 1st",
              "text": "Police strike active news crew with tear gas",
              "tags_str": "Projectiles",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/Acyn/status/1267673936659021830?s=20",
              "Link2": "https://twitter.com/greg_doucette/status/1267694239028334592"
            },
            {
              "id": 1513,
              "date_text": "June 1st",
              "text": "Police injure sleeping homeless man with flashbang",
              "tags_str": "Other",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://www.facebook.com/kg.farmer/videos/278656296661372",
              "Link2": ""
            },
            {
              "id": 1514,
              "date_text": "June 2nd",
              "text": "Officers deploy flashbangs and pepper spray peaceful protesters",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/catsayshello/status/1268073344814866432",
              "Link2": "https://www.instagram.com/tv/CA63KMnlVvu/?igshid=hfp3uoaqe23p"
            },
            {
              "id": 1515,
              "date_text": "June 5th",
              "text": "Protester targeted days after protest",
              "tags_str": "Other",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/greg_doucette/status/1269380431478173699",
              "Link2": "https://twitter.com/daeshikjr/status/1269328705752494081"
            },
            {
              "id": 1516,
              "date_text": "June 6th",
              "text": "Officer chokes and places knee on neck of woman",
              "tags_str": "Other",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/i/status/1269352173663592449",
              "Link2": ""
            },
            {
              "id": 1517,
              "date_text": "June 6th",
              "text": "Police kettle protesters to force them to disperse through tear-gas",
              "tags_str": "Projectiles",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/MikeApe7/status/1269533701194444800",
              "Link2": "https://twitter.com/MikeApe7/status/1269538201254805504"
            },
            {
              "id": 1518,
              "date_text": "June 6th",
              "text": "Police pepper spray protesters who can't move back",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/greg_doucette/status/1269479158998011906",
              "Link2": "https://www.reddit.com/r/2020PoliceBrutality/comments/gycscp/cant_go_1_day_without_teargaslighting_us/?utm_source=share&utm_medium=web2x"
            },
            {
              "id": 1519,
              "date_text": "June 7th",
              "text": "Woman hit with police projectile resumes breathing after CPR, delivered to hospital",
              "tags_str": "Other",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/chaseburnsy/status/1269890344331571201",
              "Link2": "https://www.reddit.com/r/Seattle/comments/gywxhz/folks_i_need_your_help/"
            },
            {
              "id": 1520,
              "date_text": "June 7th",
              "text": "During arrests, man yells at police; police retaliate against crowd",
              "tags_str": "Soft",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/menilivne/status/1269831790799159302",
              "Link2": ""
            },
            {
              "id": 1521,
              "date_text": "June 7th",
              "text": "Police shoot peaceful protester",
              "tags_str": "Projectiles",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/RisingAnons/status/1269904786108887045",
              "Link2": ""
            },
            {
              "id": 1522,
              "date_text": "June 7th",
              "text": "Police arrest homeless man",
              "tags_str": "Soft",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/slydesilva/status/1270120873345728512",
              "Link2": "https://twitter.com/slydesilva/status/1270120960440459264"
            },
            {
              "id": 1523,
              "date_text": "June 11th",
              "text": "Police pepper spray protesters standing in their way",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://www.facebook.com/natalie.bell.7334504/videos/949526905485027/",
              "Link2": ""
            },
            {
              "id": 1524,
              "date_text": "July 1st",
              "text": "Police strike and pepper spray protesters while marching on 13th Precinct",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/hjln90/seattle_police_department_retaking_the_13th/",
              "Link2": "https://twitter.com/greg_doucette/status/1278565827747471361"
            },
            {
              "id": 1525,
              "date_text": "July 1st",
              "text": "Police arrest protester during CHAZ/CHOP clearing",
              "tags_str": "Soft",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/greg_doucette/status/1278544686546911232",
              "Link2": "https://clips.twitch.tv/LittleProtectiveDillAsianGlow"
            },
            {
              "id": 1526,
              "date_text": "July 2nd",
              "text": "Officers tackle protesters, put a knee on least one of their necks",
              "tags_str": "Hard",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/sre_li/status/1278856204018565120",
              "Link2": "https://twitter.com/1stRoundFinish/status/1278854169743388672"
            },
            {
              "id": 1527,
              "date_text": "July 2nd",
              "text": "Violent arrests made at protests near CHOP",
              "tags_str": "Soft",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://www.facebook.com/joeywieser/videos/10158221953345491/",
              "Link2": "https://twitter.com/spekulation/status/1278593887410372608"
            },
            {
              "id": 1528,
              "date_text": "July 2nd",
              "text": "Police make violent arrest",
              "tags_str": "Soft",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/own_the_libs_/status/1278765129752907777",
              "Link2": "https://twitter.com/own_the_libs_/status/1278765575494266881"
            },
            {
              "id": 1529,
              "date_text": "July 3rd",
              "text": "Police harass man attempting to go to his apartment",
              "tags_str": "Other",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/slydesilva/status/1279107834739736576",
              "Link2": ""
            },
            {
              "id": 1530,
              "date_text": "July 9th",
              "text": "Police arrest peaceful protester",
              "tags_str": "Soft",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://www.reddit.com/r/Bad_Cop_No_Donut/comments/hobv3a/how_many_cops_does_it_take_to_arrest_one_black/",
              "Link2": "https://www.twitch.tv/videos/674606592"
            },
            {
              "id": 1531,
              "date_text": "July 10th",
              "text": "Police arrest journalist",
              "tags_str": "Soft",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/spekulation/status/1281656761296936961",
              "Link2": "https://www.reddit.com/r/PublicFreakout/comments/hovouj/seattle_police_officer_caught_making_up_a_false/"
            },
            {
              "id": 1532,
              "date_text": "July 20th",
              "text": "Protester violently arrested",
              "tags_str": "Soft",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/spekulation/status/1285468287334141952",
              "Link2": ""
            },
            {
              "id": 1533,
              "date_text": "July 25th",
              "text": "Officer holds down protester to arrest, pepper sprays nurse",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://mobile.twitter.com/mlbaruchman/status/1287189436745150464",
              "Link2": "https://mobile.twitter.com/SimoneReports/status/1287197567772553216"
            },
            {
              "id": 1534,
              "date_text": "July 25th",
              "text": "Officer shoots protester who bangs stick on ground",
              "tags_str": "Projectiles",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://mobile.twitter.com/pmalonedc/status/1287192637296934913",
              "Link2": ""
            },
            {
              "id": 1535,
              "date_text": "July 25th",
              "text": "Violent arrest made by police, tear gas deployed",
              "tags_str": "Soft, Projectiles",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/BrandiKruse/status/1287190206408400897",
              "Link2": "https://twitter.com/AGarlandPhoto/status/1287177533113262081"
            },
            {
              "id": 1536,
              "date_text": "July 25th",
              "text": "Police use bikes and pepper spray to push protesters",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/dailydigger19/status/1287194441858588672",
              "Link2": ""
            },
            {
              "id": 1537,
              "date_text": "July 25th",
              "text": "Police make violent arrests and pepper spray crowd",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/KittyLists/status/1287191491924779009",
              "Link2": ""
            },
            {
              "id": 1538,
              "date_text": "July 25th",
              "text": "Police make violent arrests and discharge pepper spray",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/VideosSeattle/status/1287195618247548928",
              "Link2": ""
            },
            {
              "id": 1539,
              "date_text": "July 25th",
              "text": "Police shove and pepper spray press and protesters",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/lukeryderrr/status/1287172224588214272",
              "Link2": "https://twitter.com/ZeldaWarriorCat/status/1287203846071099394"
            },
            {
              "id": 1540,
              "date_text": "July 25th",
              "text": "Police pepper spray protesters on sidewalk",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/richsssmith/status/1287172691540115456",
              "Link2": ""
            },
            {
              "id": 1541,
              "date_text": "July 25th",
              "text": "Police deploy tear gas and flashbangs against protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/menilivne/status/1287181347845365760",
              "Link2": ""
            },
            {
              "id": 1542,
              "date_text": "July 25th",
              "text": "Protester shot at point blank",
              "tags_str": "Projectiles",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/franceschogan/status/1287202059691814912",
              "Link2": ""
            },
            {
              "id": 1543,
              "date_text": "July 25th",
              "text": "Police pepper spray man holding bike",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/pmalonedc/status/1287213310505410562",
              "Link2": ""
            },
            {
              "id": 1544,
              "date_text": "July 25th",
              "text": "Police make violent arrest",
              "tags_str": "Soft",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/LizTurnbull5/status/1287226515642449920",
              "Link2": ""
            },
            {
              "id": 1545,
              "date_text": "July 25th",
              "text": "Violent arrest made near 11th and Pine",
              "tags_str": "Soft",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/richsssmith/status/1287176053073408000",
              "Link2": ""
            },
            {
              "id": 1546,
              "date_text": "July 25th",
              "text": "Police fire tear gas at protesters following directions",
              "tags_str": "Projectiles",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/davjhan/status/1287216171595345920",
              "Link2": "https://twitter.com/sean_roulette/status/1287216968320212993"
            },
            {
              "id": 1547,
              "date_text": "July 25th",
              "text": "Police shove and pepper spray protesters, grab signs",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/tetraphis_/status/1287238007406252032",
              "Link2": "https://twitter.com/tetraphis_/status/1287221855779090433"
            },
            {
              "id": 1548,
              "date_text": "July 25th",
              "text": "Police pepper spray man who is yelling at them",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/decolonizemars/status/1287236773345599488",
              "Link2": ""
            },
            {
              "id": 1549,
              "date_text": "July 25th",
              "text": "Police snatch and pepper spray protesters",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/slydesilva/status/1287236203876462592",
              "Link2": "https://twitter.com/GoldsteinStreet/status/1287236138604703746"
            },
            {
              "id": 1550,
              "date_text": "July 25th",
              "text": "Police ride bikes into crowd and arrest protesters",
              "tags_str": "Soft",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/slydesilva/status/1287240894219841536",
              "Link2": ""
            },
            {
              "id": 1551,
              "date_text": "July 25th",
              "text": "Police use pepper spray to push protesters back",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/daeshikjr/status/1287263163159781376",
              "Link2": ""
            },
            {
              "id": 1552,
              "date_text": "July 25th",
              "text": "Police charge and pepper-spray protesters",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/greg_doucette/status/1287413099788632065",
              "Link2": "https://twitter.com/greg_doucette/status/1287405595801325569"
            },
            {
              "id": 1553,
              "date_text": "July 25th",
              "text": "Cop tackles cyclist",
              "tags_str": "Hard",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/StellarArris/status/1287446170403508226",
              "Link2": ""
            },
            {
              "id": 1554,
              "date_text": "July 25th",
              "text": "Effects of flashbang",
              "tags_str": "Other",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/DickandSharon/status/1287653775042371585",
              "Link2": ""
            },
            {
              "id": 1555,
              "date_text": "July 25th",
              "text": "Protester struck in head by flashbang, gets 4 staples",
              "tags_str": "Other",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://www.facebook.com/david.calder3/videos/10217816303259717/",
              "Link2": "https://www.facebook.com/photo.php?fbid=10217824199217111&set=a.10201512323190405&type=3"
            },
            {
              "id": 1556,
              "date_text": "July 25th",
              "text": "Police violently push protesters down the street",
              "tags_str": "Other",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://www.youtube.com/watch?v=gvfPAYCwg2w",
              "Link2": "https://www.reddit.com/r/Bad_Cop_No_Donut/comments/hzdd88/police_brutality_seattlepd_push_protestorsfire/"
            },
            {
              "id": 1557,
              "date_text": "July 25th",
              "text": "Police pepper spray legal observer",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/NLG_Seattle/status/1287427693680582656",
              "Link2": "https://www.nlg.org/seattle/2020/07/26/legal-observers-from-seattles-national-lawyers-guild-aggressively-targeted-by-law-enforcement/"
            },
            {
              "id": 1558,
              "date_text": "August 13th",
              "text": "Police tackle protesters in street",
              "tags_str": "Hard",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://www.instagram.com/p/CD1oSRRA-R5/",
              "Link2": "https://twitter.com/spekulation/status/1294131614281129984"
            },
            {
              "id": 1559,
              "date_text": "August 14th",
              "text": "Police damage vehicles supporting protesters",
              "tags_str": "Other",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/RebellionBaby/status/1294535563110825985",
              "Link2": "https://twitter.com/TirisTogia/status/1294520513306300416"
            },
            {
              "id": 1560,
              "date_text": "August 16th",
              "text": "Legal observer shoved to the ground",
              "tags_str": "Soft",
              "LATITUDE": 47.611435,
              "LONGITUDE": -122.330456,
              "Link1": "https://twitter.com/FirecrowTV/status/1295242437456048130",
              "Link2": ""
            },
            {
              "id": 1561,
              "date_text": "June 1st",
              "text": "Police tackle man giving interview",
              "tags_str": "Hard",
              "LATITUDE": 42.896659,
              "LONGITUDE": -78.884575,
              "Link1": "https://twitter.com/secretlaith/status/1268251322467450880",
              "Link2": ""
            },
            {
              "id": 1562,
              "date_text": "June 4th",
              "text": "Police shove elderly man, causing him to fall and hit the back of his head",
              "tags_str": "Soft",
              "LATITUDE": 42.896659,
              "LONGITUDE": -78.884575,
              "Link1": "https://twitter.com/WBFO/status/1268712530358292484",
              "Link2": "https://news.wbfo.org/post/graphic-video-buffalo-police-officers-violently-shove-man-ground"
            },
            {
              "id": 1563,
              "date_text": "June 5th",
              "text": "Reporter shot at after identifying himself",
              "tags_str": "Projectiles",
              "LATITUDE": 42.896659,
              "LONGITUDE": -78.884575,
              "Link1": "https://twitter.com/PhotoJazzy/status/1269056626843099137",
              "Link2": ""
            },
            {
              "id": 1564,
              "date_text": "June 13th",
              "text": "Police officer stops abrubtly so protester bumps into him; police arrest him after this",
              "tags_str": "Soft",
              "LATITUDE": 40.71491500000001,
              "LONGITUDE": -73.556088,
              "Link1": "https://twitter.com/RexChapman/status/1271832001364979716",
              "Link2": ""
            },
            {
              "id": 1565,
              "date_text": "June 6th",
              "text": "Police charge and arrest peaceful protesters",
              "tags_str": "Soft",
              "LATITUDE": 40.668312,
              "LONGITUDE": -73.555001,
              "Link1": "https://twitter.com/greg_doucette/status/1269477723644276738",
              "Link2": "https://twitter.com/j_king4424/status/1269400645385289728"
            },
            {
              "id": 1566,
              "date_text": "May 31st",
              "text": "Police shoot at people filming",
              "tags_str": "Projectiles",
              "LATITUDE": 43.1683,
              "LONGITUDE": -77.6026,
              "Link1": "https://twitter.com/bleeezyy_/status/1266894195865931778",
              "Link2": ""
            },
            {
              "id": 1567,
              "date_text": "July 30th",
              "text": "Police shoot at and arrest Black Lives Matter protesters",
              "tags_str": "Soft, Projectiles",
              "LATITUDE": 43.080094,
              "LONGITUDE": -73.780644,
              "Link1": "https://www.instagram.com/tv/CDSXj7opmyw/",
              "Link2": "https://www.instagram.com/p/CDSdX-_nJ5h/"
            },
            {
              "id": 1568,
              "date_text": "May 30th",
              "text": "Police shove an old man with a cane to the ground",
              "tags_str": "Soft",
              "LATITUDE": 40.755851,
              "LONGITUDE": -111.896657,
              "Link1": "https://twitter.com/bubbaprog/status/1266908354821206016",
              "Link2": ""
            },
            {
              "id": 1569,
              "date_text": "May 30th",
              "text": "Police shoot man on the ground in the spine with a beanbag point-blank",
              "tags_str": "Projectiles",
              "LATITUDE": 40.755851,
              "LONGITUDE": -111.896657,
              "Link1": "https://www.reddit.com/r/nextfuckinglevel/comments/gtv4co/downtown_salt_lake_city_may_30th_2020_unarmed/",
              "Link2": ""
            },
            {
              "id": 1570,
              "date_text": "May 30th",
              "text": "Police shoot tear gas canister at man from close range, striking him in the chest",
              "tags_str": "Projectiles",
              "LATITUDE": 40.755851,
              "LONGITUDE": -111.896657,
              "Link1": "https://twitter.com/greg_doucette/status/1268333029526843392",
              "Link2": "https://www.instagram.com/p/CA148-0B14t6mQZqJZYzwq25KdoPzZ5CJmV3oQ0/"
            },
            {
              "id": 1571,
              "date_text": "June 1st",
              "text": "Police push and tackle man that is being vocal",
              "tags_str": "Hard",
              "LATITUDE": 40.755851,
              "LONGITUDE": -111.896657,
              "Link1": "https://v.redd.it/fl4y919v1q251",
              "Link2": ""
            },
            {
              "id": 1572,
              "date_text": "July 9th",
              "text": "Police beat protesters with shields and batons",
              "tags_str": "Hard, Other",
              "LATITUDE": 40.755851,
              "LONGITUDE": -111.896657,
              "Link1": "https://twitter.com/kylemoonsgirl/status/1281446209618493445",
              "Link2": "https://twitter.com/msternfield/status/1281584343882727424"
            },
            {
              "id": 1573,
              "date_text": "July 9th",
              "text": "Police chase journalist",
              "tags_str": "Other",
              "LATITUDE": 40.755851,
              "LONGITUDE": -111.896657,
              "Link1": "https://twitter.com/kylemoonsgirl/status/1281450911731052544",
              "Link2": ""
            },
            {
              "id": 1574,
              "date_text": "May 31st",
              "text": "Police Individually Target Peaceful Protester and Arrest Him",
              "tags_str": "Soft",
              "LATITUDE": 32.962223,
              "LONGITUDE": -79.86533,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/guxm5o/police_arresting_a_peaceful_protestor_for_simply/?utm_source=share&utm_medium=ios_app&utm_name=iossmf",
              "Link2": "https://www.reddit.com/r/iamatotalpieceofshit/comments/gugrfa/man_reaches_out_with_love_to_the_cops_and_they/"
            },
            {
              "id": 1575,
              "date_text": "May 31st",
              "text": "Police Individually Target Peaceful Protester and Arrest Him",
              "tags_str": "Soft",
              "LATITUDE": 32.779506,
              "LONGITUDE": -79.937069,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/guxm5o/police_arresting_a_peaceful_protestor_for_simply/?utm_source=share&utm_medium=ios_app&utm_name=iossmf",
              "Link2": "https://www.reddit.com/r/iamatotalpieceofshit/comments/gugrfa/man_reaches_out_with_love_to_the_cops_and_they/"
            },
            {
              "id": 1576,
              "date_text": "May 31st",
              "text": "APC collides with bystander car",
              "tags_str": "Other",
              "LATITUDE": 32.962223,
              "LONGITUDE": -79.86533,
              "Link1": "https://twitter.com/greg_doucette/status/1267228530368229376",
              "Link2": ""
            },
            {
              "id": 1577,
              "date_text": "May 31st",
              "text": "APC collides with bystander car",
              "tags_str": "Other",
              "LATITUDE": 32.779506,
              "LONGITUDE": -79.937069,
              "Link1": "https://twitter.com/greg_doucette/status/1267228530368229376",
              "Link2": ""
            },
            {
              "id": 1578,
              "date_text": "June 22nd",
              "text": "Police violently arrest protester",
              "tags_str": "Soft",
              "LATITUDE": 32.962223,
              "LONGITUDE": -79.86533,
              "Link1": "https://twitter.com/greg_doucette/status/1275254514501799939",
              "Link2": "https://www.live5news.com/2020/06/23/police-make-one-arrest-during-monday-night-calhoun-statue-protests/"
            },
            {
              "id": 1579,
              "date_text": "June 22nd",
              "text": "Police violently arrest protester",
              "tags_str": "Soft",
              "LATITUDE": 32.779506,
              "LONGITUDE": -79.937069,
              "Link1": "https://twitter.com/greg_doucette/status/1275254514501799939",
              "Link2": "https://www.live5news.com/2020/06/23/police-make-one-arrest-during-monday-night-calhoun-statue-protests/"
            },
            {
              "id": 1580,
              "date_text": "June 26th",
              "text": "Beverly Hills police use LRAD (sound cannon) at protest",
              "tags_str": "Other",
              "LATITUDE": 34.0732,
              "LONGITUDE": -118.3927,
              "Link1": "https://youtu.be/doQMq8Iwcjc?t=94",
              "Link2": "https://twitter.com/bfeinzimer/status/1277014331968782339"
            },
            {
              "id": 1581,
              "date_text": "June 2nd",
              "text": "Law enforcement gas teenagers at a park",
              "tags_str": "Projectiles",
              "LATITUDE": 37.915442,
              "LONGITUDE": -121.909967,
              "Link1": "https://twitter.com/CorinneAllen20/status/1268000716884283393",
              "Link2": "https://twitter.com/CliffBraun/status/1268038070667849728"
            },
            {
              "id": 1582,
              "date_text": "May 31st",
              "text": "Police beat person on the ground",
              "tags_str": "Hard",
              "LATITUDE": 33.890654,
              "LONGITUDE": -118.239044,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/gvdl01/they_secluded_him_behind_a_wall_and_looked_around/",
              "Link2": "https://laist.com/2020/06/10/los_angeles_deputies_compton_video_violent_arrest_dalvin_price.php"
            },
            {
              "id": 1583,
              "date_text": "June 21st",
              "text": "Sheriff's Deputies fire less-lethal rounds, tear gas at protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 33.890654,
              "LONGITUDE": -118.239044,
              "Link1": "https://twitter.com/LATACO/status/1274874827786997761",
              "Link2": "https://twitter.com/LATACO/status/1274881935664267264"
            },
            {
              "id": 1584,
              "date_text": "June 3rd",
              "text": "Law enforcement concealing badge",
              "tags_str": "Other",
              "LATITUDE": 33.677710999999995,
              "LONGITUDE": -117.909623,
              "Link1": "https://old.reddit.com/r/orangecounty/comments/gvn42k/oc_sheriff_deputy_forgoing_his_name_badge_to_wear/",
              "Link2": ""
            },
            {
              "id": 1585,
              "date_text": "June 28th",
              "text": "Protesters attacked; police shake hands of attackers; tell protesters to wait in patrol cars",
              "tags_str": "Other",
              "LATITUDE": 37.242456,
              "LONGITUDE": -121.003965,
              "Link1": "https://twitter.com/stussycastro/status/1277345103862837249",
              "Link2": "https://twitter.com/stussycastro/status/1277347410855907328"
            },
            {
              "id": 1586,
              "date_text": "June 1st",
              "text": "Police fire at protesters on ground",
              "tags_str": "Projectiles",
              "LATITUDE": 33.7152,
              "LONGITUDE": -118.0088,
              "Link1": "https://twitter.com/Ricardo_4715/status/1267334754119999488",
              "Link2": ""
            },
            {
              "id": 1587,
              "date_text": "May 30th",
              "text": "Law enforcement shoot and throw tear gas at protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 32.760431,
              "LONGITUDE": -117.011541,
              "Link1": "https://twitter.com/mamitbh/status/1267030342243778561",
              "Link2": ""
            },
            {
              "id": 1588,
              "date_text": "May 31st",
              "text": "Police shoot woman in the face with bean bag",
              "tags_str": "Projectiles",
              "LATITUDE": 32.760431,
              "LONGITUDE": -117.011541,
              "Link1": "https://www.facebook.com/100010947670361/videos/1115087385532840",
              "Link2": "https://mobile.twitter.com/MarajYikes/status/1267030131563827200"
            },
            {
              "id": 1589,
              "date_text": "May 31st",
              "text": "Reporter shot in neck by rubber bullet",
              "tags_str": "Projectiles",
              "LATITUDE": 33.7705,
              "LONGITUDE": -118.1885,
              "Link1": "https://laist.com/2020/05/31/reporters_injured_protests_police.php",
              "Link2": "https://twitter.com/AGuzmanLopez/status/1267269781805137920"
            },
            {
              "id": 1590,
              "date_text": "June 1st",
              "text": "Woman struck in finger by projectile; police quell crowd with tear gas",
              "tags_str": "Projectiles",
              "LATITUDE": 33.7705,
              "LONGITUDE": -118.1885,
              "Link1": "https://www.tiktok.com/@scottmbark/video/6833632749052628230",
              "Link2": "https://www.tiktok.com/@scottmbark/video/6833477841808657669"
            },
            {
              "id": 1591,
              "date_text": "May 29th",
              "text": "Police use tear gas and riot rounds against protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://vimeo.com/424352612",
              "Link2": "https://www.reddit.com/r/LosAngeles/comments/gti4eg/la_riots_5292020_police_line_advances_with_their/"
            },
            {
              "id": 1592,
              "date_text": " May 30th",
              "text": "Protester shot in head",
              "tags_str": "Projectiles",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://twitter.com/greg_doucette/status/1268052132252602368",
              "Link2": "https://twitter.com/andrewcurryla/status/1266906677820833793"
            },
            {
              "id": 1593,
              "date_text": "May 30th",
              "text": "LAPD officer beats multiple protesters who are filming them during a protest in Beverley Hills",
              "tags_str": "Hard",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://www.reddit.com/r/2020PoliceBrutality/comments/gxjk67/reposted_wo_officer_name_footage_of_lapd_at_last/",
              "Link2": ""
            },
            {
              "id": 1594,
              "date_text": "May 30th",
              "text": "Los Angeles law enforcement beat protesters with batons",
              "tags_str": "Hard, Other",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://twitter.com/larryprincxpark/status/1266883515431505920",
              "Link2": "https://twitter.com/kendrick38/status/1266997131430133761"
            },
            {
              "id": 1595,
              "date_text": "May 30th",
              "text": "ABC7 reporters are hit by tear gas",
              "tags_str": "Projectiles",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://twitter.com/GMA/status/1266934049098121216",
              "Link2": ""
            },
            {
              "id": 1596,
              "date_text": "May 30th",
              "text": "Police beat protesters with batons",
              "tags_str": "Hard, Other",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://www.reddit.com/r/2020PoliceBrutality/comments/gxjk67/reposted_wo_officer_name_footage_of_lapd_at_last/",
              "Link2": "https://twitter.com/greg_doucette/status/1269101214706421760"
            },
            {
              "id": 1597,
              "date_text": "May 30th",
              "text": "Los Angeles law enforcement beat protesters with batons while they have their hands up",
              "tags_str": "Hard, Other",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://twitter.com/MattMcGorry/status/1267217360894562306",
              "Link2": "https://twitter.com/greg_doucette/status/1267605209745887233"
            },
            {
              "id": 1598,
              "date_text": "May 30th",
              "text": "Los Angeles law enforcement hit protester in the face with rubber bullet",
              "tags_str": "Projectiles",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://www.instagram.com/p/CA20QYJgaU6/",
              "Link2": "https://www.instagram.com/p/CA1U9L9g_LD/"
            },
            {
              "id": 1599,
              "date_text": "May 30th",
              "text": "Riot police fire tear gas at peaceful protest, then use mace to corral protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://www.reddit.com/r/2020PoliceBrutality/comments/h7q97a/using_mace_to_direct_protestors_through_teargas/",
              "Link2": ""
            },
            {
              "id": 1600,
              "date_text": "May 30th",
              "text": "Protester shot in the head by rubber bullet",
              "tags_str": "Projectiles",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://i.redd.it/xpn4dnw342551.jpg",
              "Link2": "https://www.reddit.com/r/LosAngeles/comments/h9e7i8/protesters_hid_from_lapd_shooting_rubber_bullets/"
            },
            {
              "id": 1601,
              "date_text": "May 30th",
              "text": "Police fire at bystander filming from apartment",
              "tags_str": "Projectiles",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://www.pscp.tv/w/1OwxWQXvOAjGQ",
              "Link2": "https://twitter.com/Sarah_Mojarad/status/1266633046591078400"
            },
            {
              "id": 1602,
              "date_text": "May 30th",
              "text": "Police fire rubber bullets at small group of peaceful protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://www.youtube.com/watch?v=UDLxeshoPnI",
              "Link2": "https://www.reddit.com/r/LosAngeles/comments/gtjd0p/rubber_bullets_at_2am_dtla/"
            },
            {
              "id": 1603,
              "date_text": "May 31st",
              "text": "Police fire rubber/pepper bullets at peaceful protesters",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://twitter.com/MatthewSantoro/status/1266916709304201216",
              "Link2": ""
            },
            {
              "id": 1604,
              "date_text": "May 31st",
              "text": "Police officer puts his knee on a protesters neck, is pulled off",
              "tags_str": "Other",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/gturig/cop_has_his_knee_on_a_womans_neck_even_though/",
              "Link2": ""
            },
            {
              "id": 1605,
              "date_text": "May 31st",
              "text": "Police shoot rubber bullets at protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://twitter.com/SUNDAYLOVERBOY/status/1266890947888996352",
              "Link2": ""
            },
            {
              "id": 1606,
              "date_text": "May 31st",
              "text": "Man shot in the head with deterrent rounds, is sent to hospital",
              "tags_str": "Projectiles",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://www.foxnews.com/media/marine-corps-veteran-shot-with-rubber-bullets-by-police-at-protest-i-had-my-hands-up",
              "Link2": "https://www.latimes.com/california/story/2020-07-31/video-protester-had-hands-up-when-lapd-officer-shot"
            },
            {
              "id": 1607,
              "date_text": "May 31st",
              "text": "Police tackle and arrest protester, indiscriminately beat others with batons and shoot them with less lethals",
              "tags_str": "Soft, Hard, Projectiles",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://twitter.com/greg_doucette/status/1267095100166987778",
              "Link2": "https://twitter.com/sleepydayhana/status/1266930544811671552"
            },
            {
              "id": 1608,
              "date_text": "May 31st",
              "text": "LAPD SUV drives into protesters, speeds away",
              "tags_str": "Other",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://twitter.com/greg_doucette/status/1267277826354556928",
              "Link2": "https://twitter.com/SophiaLeeHyun/status/1267216604388978689"
            },
            {
              "id": 1609,
              "date_text": "May 31st",
              "text": "Los Angeles law enforcement shoot at a man on his own balcony",
              "tags_str": "Projectiles",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://twitter.com/cwellborn3/status/1267318753571811329",
              "Link2": ""
            },
            {
              "id": 1610,
              "date_text": " May 31st",
              "text": "Police shoot crowd of unarmed protesters with rubber bullets",
              "tags_str": "Projectiles",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://www.tiktok.com/@w17ard/video/6833082563913977093?lang=en",
              "Link2": ""
            },
            {
              "id": 1611,
              "date_text": " May 31st",
              "text": "Police beat kneeling protesters",
              "tags_str": "Hard",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://twitter.com/jkishore/status/1267216022634999808",
              "Link2": ""
            },
            {
              "id": 1612,
              "date_text": "May 31st",
              "text": "Police beat and pepper spray protesters",
              "tags_str": "Hard, Projectiles, Chemical",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://twitter.com/r0seghoul/status/1268729811066740737",
              "Link2": "https://www.tiktok.com/@laurenxorose/video/6833031215541521669"
            },
            {
              "id": 1613,
              "date_text": "June 1st",
              "text": "Police shoot rubber bullets at two peaceful protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://twitter.com/liveinochi/status/1267504585926557696",
              "Link2": "https://tikitoks.com/@jacksonmonroe/video/6833397689187716358"
            },
            {
              "id": 1614,
              "date_text": " June 1st",
              "text": "LAPD destroy car to drag out occupants",
              "tags_str": "Other",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://twitter.com/GadiNBC/status/1268016449320177665",
              "Link2": ""
            },
            {
              "id": 1615,
              "date_text": "June 1st",
              "text": "Business owner flags down police for protection from looters; she is arrested",
              "tags_str": "Soft",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://www.cbsnews.com/news/police-handcuff-good-samaritans-protect-store-looters/",
              "Link2": "https://twitter.com/bubbaprog/status/1267641851215036416"
            },
            {
              "id": 1616,
              "date_text": "June 1st",
              "text": "Police arrest protesters en masse and detain them in poor conditions",
              "tags_str": "Soft",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://nlg-la.org/wp-content/uploads/sites/5/2020/06/AMENDED-COMPLAINT-ECF.pdf",
              "Link2": "https://www.instagram.com/p/CBBNXXkJs0a/?igshid=jgeposybda4a"
            },
            {
              "id": 1617,
              "date_text": "June 2nd",
              "text": "Police arrest protesters en masse and detain them in poor conditions",
              "tags_str": "Soft",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://nlg-la.org/wp-content/uploads/sites/5/2020/06/AMENDED-COMPLAINT-ECF.pdf",
              "Link2": "https://www.lataco.com/protest-arrests-horror-accounts/"
            },
            {
              "id": 1618,
              "date_text": "June 2nd",
              "text": "LAPD officers fire at passers by out of the window of a patrol car",
              "tags_str": "Projectiles",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://twitter.com/balleralert/status/1268014113105555456",
              "Link2": "https://twitter.com/theweirdingwayy/status/1268048483920928768"
            },
            {
              "id": 1619,
              "date_text": "June 2nd",
              "text": "Police shoot unarmed man in a wheelchair in the face",
              "tags_str": "Projectiles",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://www.reddit.com/r/LosAngeles/comments/gwzgn8/lapd_shoots_less_than_lethal_rounds_directly_at/",
              "Link2": "https://www.dailynews.com/2020/06/03/dozens-arrested-in-downtown-los-angeles-tuesday-night-after-day-of-peaceful-protests/"
            },
            {
              "id": 1620,
              "date_text": "June 2nd",
              "text": "Police fire into backs of protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://twitter.com/MattMcGorry/status/1268455032032133122",
              "Link2": ""
            },
            {
              "id": 1621,
              "date_text": " June 2nd",
              "text": "Officer strikes peaceful crowd with baton, police then fire riot rounds",
              "tags_str": "Projectiles",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://twitter.com/ricci_sergienko/status/1267685230799777793",
              "Link2": ""
            },
            {
              "id": 1622,
              "date_text": "June 3rd",
              "text": "Protester shows wound inflicted by less-lethal round",
              "tags_str": "Presence",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://www.instagram.com/p/CBBpSZPnyke/",
              "Link2": ""
            },
            {
              "id": 1623,
              "date_text": "June 5th",
              "text": "Police fire projectiles at protesters and discharge teargas",
              "tags_str": "Projectiles",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://abc7.com/lakewood-protest-tear-gas-black-lives-matter-fired-during/6235358/",
              "Link2": "https://www.reddit.com/r/longbeach/comments/gyma59/lakewoods_peaceful_protest_ends_in_cops_shooting/ftb8mvt?utm_source=share&utm_medium=web2x"
            },
            {
              "id": 1624,
              "date_text": "June 8th",
              "text": "Medic treats rubber bullet wound",
              "tags_str": "Projectiles",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://www.instagram.com/p/CBKohCXnJld/",
              "Link2": ""
            },
            {
              "id": 1625,
              "date_text": "July 15th",
              "text": "Police make violent arrests, including ripping a protester out of his wheelchair and inducing an asthma attack",
              "tags_str": "Soft",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://www.reddit.com/r/2020PoliceBrutality/comments/hrwunn/cops_assaulting_blm_protesters_including_a_man_in",
              "Link2": "https://www.instagram.com/p/CCsYvr7n-Rg/"
            },
            {
              "id": 1626,
              "date_text": "July 25th",
              "text": "Violent arrests after police initiate scuffle",
              "tags_str": "Soft",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://twitter.com/KTLA/status/1287241665703374848",
              "Link2": "https://ktla.com/news/local-news/hundreds-of-protesters-gather-in-downtown-l-a-as-some-march-onto-101-freeway/"
            },
            {
              "id": 1627,
              "date_text": "July 25th",
              "text": "Police officer fires riot gun at protester; other officers then fire as well",
              "tags_str": "Projectiles",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://www.reddit.com/r/2020PoliceBrutality/comments/hzol2y/lapd_standoff_with_protesters_during_a_portland/",
              "Link2": ""
            },
            {
              "id": 1628,
              "date_text": "July 25th",
              "text": "Woman recording peaceful protests shot by less lethals",
              "tags_str": "Projectiles",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://twitter.com/Jas20274433/status/1288141598698610689",
              "Link2": "https://twitter.com/Jas20274433/status/1288141708484464641"
            },
            {
              "id": 1629,
              "date_text": "July 31st",
              "text": "Man filming arrests is thrown to the ground",
              "tags_str": "Soft",
              "LATITUDE": 33.973093,
              "LONGITUDE": -118.247896,
              "Link1": "https://twitter.com/chadloder/status/1289385606099812352",
              "Link2": "https://twitter.com/chadloder/status/1289395335211540481"
            },
            {
              "id": 1630,
              "date_text": "June 29th",
              "text": "Woman struck by white supremacist while police look on",
              "tags_str": "Other",
              "LATITUDE": 33.94,
              "LONGITUDE": -117.553333,
              "Link1": "https://twitter.com/le_maria21/status/1277801107033481216",
              "Link2": "https://twitter.com/le_maria21/status/1277800993984413696"
            },
            {
              "id": 1631,
              "date_text": " May 30th",
              "text": "Officer runs down protesters with police cruiser",
              "tags_str": "Other",
              "LATITUDE": 37.780595,
              "LONGITUDE": -122.216587,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/gttdkj/cop_driving_into_crowds_of_protestors/",
              "Link2": "https://tuckbot.tv/#/watch/gttdkj"
            },
            {
              "id": 1632,
              "date_text": "May 31st",
              "text": "Oakland law enforcement shoot a reporter",
              "tags_str": "Projectiles",
              "LATITUDE": 37.780595,
              "LONGITUDE": -122.216587,
              "Link1": "https://twitter.com/SarahBelleLin/status/1266980899301683200",
              "Link2": ""
            },
            {
              "id": 1633,
              "date_text": "June 2nd",
              "text": "Water bottle tossed at police; police retaliate against crowd",
              "tags_str": "Other",
              "LATITUDE": 37.780595,
              "LONGITUDE": -122.216587,
              "Link1": "https://twitter.com/byjacobward/status/1267695808784199680",
              "Link2": "https://twitter.com/greg_doucette/status/1270490060287344642"
            },
            {
              "id": 1634,
              "date_text": "July 26th",
              "text": "Protester singled out, chased and arrested",
              "tags_str": "Soft",
              "LATITUDE": 37.780595,
              "LONGITUDE": -122.216587,
              "Link1": "https://twitter.com/SarahBelleLin/status/1287321616636997632",
              "Link2": ""
            },
            {
              "id": 1635,
              "date_text": "June 2nd",
              "text": "Law enforcement break a car window for no apparent reason",
              "tags_str": "Other",
              "LATITUDE": 33.9924,
              "LONGITUDE": -117.369421,
              "Link1": "https://old.reddit.com/r/PublicFreakout/comments/gv2lku/news_chopper_pans_out_as_riverside_county_sheriff/",
              "Link2": ""
            },
            {
              "id": 1636,
              "date_text": "May 30th",
              "text": "Man severely injured by tear gas and impact munitions",
              "tags_str": "Projectiles",
              "LATITUDE": 38.5816,
              "LONGITUDE": -121.4933,
              "Link1": "https://www.kcra.com/article/sacramento-resident-needs-surgery-head-injuries-george-floyd-protest/32801846",
              "Link2": ""
            },
            {
              "id": 1637,
              "date_text": "May 30th",
              "text": "Police shoot protester in the head",
              "tags_str": "Projectiles",
              "LATITUDE": 38.5816,
              "LONGITUDE": -121.4933,
              "Link1": "https://youtu.be/pRmBO34aXME",
              "Link2": "https://twitter.com/mynameschazz/status/1266978442722947072"
            },
            {
              "id": 1638,
              "date_text": "May 31st",
              "text": "Sacramento law enforcement shoot protesters and then announce their assembly is unlawful",
              "tags_str": "Projectiles",
              "LATITUDE": 38.5816,
              "LONGITUDE": -121.4933,
              "Link1": "https://www.facebook.com/danny.garza.167/videos/10222535335080905/",
              "Link2": "https://www.abc10.com/article/news/local/sacramento/sacramento-police-sued-for-exessive-force-allegation/103-3ae82150-782c-4606-a5e5-6d25bb10bb00?fbclid=IwAR0ru-oqE9MEgTpBdSE81XM19qxsxngBjtjgavg0WPWG9-HnB3y6ft0DhGE"
            },
            {
              "id": 1639,
              "date_text": "May 31st",
              "text": "Police fire tear gas and flashbangs without apparent cause",
              "tags_str": "Projectiles",
              "LATITUDE": 38.5816,
              "LONGITUDE": -121.4933,
              "Link1": "https://www.reddit.com/r/Sacramento/comments/gul234/last_night_sacramento_protesters_for_george_floyd/",
              "Link2": "https://www.youtube.com/watch?v=TSshaAoTuUw"
            },
            {
              "id": 1640,
              "date_text": "June 1st",
              "text": "Police choke man and push woman filming event to the ground",
              "tags_str": "Other",
              "LATITUDE": 38.5816,
              "LONGITUDE": -121.4933,
              "Link1": "https://twitter.com/greg_doucette/status/1268334584443342850",
              "Link2": "https://twitter.com/reereeisme65/status/1267378345894789125"
            },
            {
              "id": 1641,
              "date_text": "May 31st",
              "text": "Police kettle and fire on fleeing protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 32.71852,
              "LONGITUDE": -117.159316,
              "Link1": "https://www.youtube.com/watch?v=6uNySPSwhAI&feature=youtu.be",
              "Link2": "https://www.youtube.com/watch?v=dHji5Xrcbo8&feature=youtu.be"
            },
            {
              "id": 1642,
              "date_text": "May 31st",
              "text": "Woman shot in the face with a rubber bullet",
              "tags_str": "Projectiles",
              "LATITUDE": 32.71852,
              "LONGITUDE": -117.159316,
              "Link1": "https://twitter.com/chadloder/status/1267290221562871809",
              "Link2": "https://twitter.com/MarajYikes/status/1267030131563827200"
            },
            {
              "id": 1643,
              "date_text": "May 31st",
              "text": "Police fire on dancing protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 32.71852,
              "LONGITUDE": -117.159316,
              "Link1": "https://twitter.com/mariahalize3/status/1267225330093191168",
              "Link2": ""
            },
            {
              "id": 1644,
              "date_text": "June 4th",
              "text": "Police abduct woman in unmarked van",
              "tags_str": "Other",
              "LATITUDE": 32.71852,
              "LONGITUDE": -117.159316,
              "Link1": "https://twitter.com/greg_doucette/status/1269009907367493634",
              "Link2": ""
            },
            {
              "id": 1645,
              "date_text": "May 31st",
              "text": "San Francisco law enforcement shove man off the sidewalk onto the ground",
              "tags_str": "Soft",
              "LATITUDE": 37.775,
              "LONGITUDE": -122.4183,
              "Link1": "https://twitter.com/caseylc9/status/1267285516262596608",
              "Link2": ""
            },
            {
              "id": 1646,
              "date_text": "May 31st",
              "text": "San Francisco law enforcement shove man off the sidewalk onto the ground",
              "tags_str": "Soft",
              "LATITUDE": 37.621944,
              "LONGITUDE": -122.381944,
              "Link1": "https://twitter.com/caseylc9/status/1267285516262596608",
              "Link2": ""
            },
            {
              "id": 1647,
              "date_text": "May 29th",
              "text": "Police shoot a projectile at a protester",
              "tags_str": "Projectiles",
              "LATITUDE": 37.3894,
              "LONGITUDE": -121.8868,
              "Link1": "https://twitter.com/junkieanteater/status/1266603252839141377",
              "Link2": "https://www.reddit.com/r/PublicFreakout/comments/gtksgq/cop_decides_to_shoot_at_protestor_who_hurt_his/"
            },
            {
              "id": 1648,
              "date_text": "May 29th",
              "text": "Officer puts knee on neck of protester",
              "tags_str": "Other",
              "LATITUDE": 37.3894,
              "LONGITUDE": -121.8868,
              "Link1": "https://twitter.com/DeadByDawn101/status/1268825100385521665",
              "Link2": ""
            },
            {
              "id": 1649,
              "date_text": "May 29th",
              "text": "Police fire on community activist",
              "tags_str": "Projectiles",
              "LATITUDE": 37.3894,
              "LONGITUDE": -121.8868,
              "Link1": "https://twitter.com/greg_doucette/status/1269267786792144898",
              "Link2": "https://abc7news.com/man-who-trains-san-jose-police-about-bias-severely-injured-by-riot-gun-during-protest/6234212/"
            },
            {
              "id": 1650,
              "date_text": "May 29th",
              "text": "Police knocks phone out of protester's hand; riot control measures follow",
              "tags_str": "Other",
              "LATITUDE": 37.3894,
              "LONGITUDE": -121.8868,
              "Link1": "https://twitter.com/itssdelilahh/status/1266575145537163269",
              "Link2": ""
            },
            {
              "id": 1651,
              "date_text": "May 29th",
              "text": "Man struck by rubber bullet and explosive device",
              "tags_str": "Projectiles",
              "LATITUDE": 37.3894,
              "LONGITUDE": -121.8868,
              "Link1": "https://www.youtube.com/watch?v=89mUHzu3480",
              "Link2": ""
            },
            {
              "id": 1652,
              "date_text": "May 29th",
              "text": "Woman shot in the head with foam round",
              "tags_str": "Projectiles",
              "LATITUDE": 37.3894,
              "LONGITUDE": -121.8868,
              "Link1": "https://abc7news.com/video/embed/?pid=6326456",
              "Link2": "https://abc7news.com/san-jose-police-department-sjpd-lawsuit-george-floyd-protest-civil-rights/6325926/"
            },
            {
              "id": 1653,
              "date_text": "May 29th",
              "text": "Man struck in face by police, severely injured",
              "tags_str": "Other",
              "LATITUDE": 37.3894,
              "LONGITUDE": -121.8868,
              "Link1": "https://twitter.com/abc7newsbayarea/status/1266527253862719488",
              "Link2": "https://www.sanjoseinside.com/news/hundreds-of-rubber-bullets-later-san-jose-starts-to-reckon-with-human-toll-of-tactics/"
            },
            {
              "id": 1654,
              "date_text": "May 30th",
              "text": "Police shoot at woman in apartment",
              "tags_str": "Projectiles",
              "LATITUDE": 37.3894,
              "LONGITUDE": -121.8868,
              "Link1": "https://abc7news.com/video/embed/?pid=6260831",
              "Link2": "https://abc7news.com/new-excessive-force-complaint-against-sjpd/6260863/"
            },
            {
              "id": 1655,
              "date_text": "May 31st",
              "text": "Police strike man with motorcycle",
              "tags_str": "Other",
              "LATITUDE": 37.3894,
              "LONGITUDE": -121.8868,
              "Link1": "https://www.mercurynews.com/2020/06/03/video-of-police-motorcycle-hitting-man-brings-more-scrutiny-to-sjpd/",
              "Link2": ""
            },
            {
              "id": 1656,
              "date_text": "June 3rd",
              "text": "Police shoot small group of unarmed protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 37.3894,
              "LONGITUDE": -121.8868,
              "Link1": "https://twitter.com/ex_Tesla/status/1268341102211297280",
              "Link2": "https://twitter.com/greg_doucette/status/1269985578474524673"
            },
            {
              "id": 1657,
              "date_text": "June 1st",
              "text": "Law enforcement fire on crowd with their arms up chanting",
              "tags_str": "Projectiles",
              "LATITUDE": 35.26345300000001,
              "LONGITUDE": -120.650933,
              "Link1": "https://twitter.com/ma7dz/status/1267697838244298752",
              "Link2": ""
            },
            {
              "id": 1658,
              "date_text": "May 31st",
              "text": "Police open fire on protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 33.75016,
              "LONGITUDE": -117.857665,
              "Link1": "https://twitter.com/YourAnonCentral/status/1266991237355069442",
              "Link2": ""
            },
            {
              "id": 1659,
              "date_text": "May 31st",
              "text": "Police fire pepper bullets into apartment",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 34.017628,
              "LONGITUDE": -118.490708,
              "Link1": "https://twitter.com/GIFsZP/status/1267241803750813703",
              "Link2": ""
            },
            {
              "id": 1660,
              "date_text": "May 31st",
              "text": "Police arrest protesters en masse, confine them for long periods, and improperly zip tie them",
              "tags_str": "Soft",
              "LATITUDE": 34.017628,
              "LONGITUDE": -118.490708,
              "Link1": "https://www.instagram.com/p/CA88dZmFPPT/",
              "Link2": "https://www.instagram.com/p/CBB2mn6A8pi/"
            },
            {
              "id": 1661,
              "date_text": "June 1st",
              "text": "Police fatally shoot unarmed 22 year old",
              "tags_str": "Projectiles",
              "LATITUDE": 38.148345,
              "LONGITUDE": -122.249333,
              "Link1": "https://www.theguardian.com/us-news/2020/jun/04/vallejo-police-kill-unarmed-man-california",
              "Link2": "https://www.theguardian.com/us-news/2019/jun/12/willie-mccoy-shooting-vallejo-police-55-shots"
            },
            {
              "id": 1662,
              "date_text": "June 1st",
              "text": "Armored law enforcement vehicle threatens protesters, deploys tear gas on highway",
              "tags_str": "Projectiles",
              "LATITUDE": 37.875317,
              "LONGITUDE": -122.070259,
              "Link1": "https://www.instagram.com/p/CA7KMc9pX5S/",
              "Link2": "https://jalopnik.com/cop-in-armored-truck-tells-peaceful-protesters-if-you-1843886752"
            },
            {
              "id": 1663,
              "date_text": "June 1st",
              "text": "Police arrest man using excessive force, dogs",
              "tags_str": "Soft",
              "LATITUDE": 37.875317,
              "LONGITUDE": -122.070259,
              "Link1": "https://www.mercurynews.com/2020/06/06/protester-recounts-getting-attacked-by-police-dogs-tear-gassed-at-walnut-creek-demonstration/",
              "Link2": "https://sanfrancisco.cbslocal.com/2020/06/17/walnut-creek-police-discuss-protest-response-critics-not-impressed/"
            },
            {
              "id": 1664,
              "date_text": "June 2nd",
              "text": "Police fire tear gas at peaceful protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 37.875317,
              "LONGITUDE": -122.070259,
              "Link1": "https://www.tiktok.com/@ieuanofficial/video/6833597510926241029",
              "Link2": ""
            },
            {
              "id": 1665,
              "date_text": "July 29th",
              "text": "Protesters violently arrested without apparent reason",
              "tags_str": "Soft",
              "LATITUDE": 34.001119,
              "LONGITUDE": -118.037139,
              "Link1": "https://twitter.com/datLOUDchick/status/1288343247970906112",
              "Link2": "https://twitter.com/datLOUDchick/status/1288375164590125056"
            },
            {
              "id": 1666,
              "date_text": "May 31st",
              "text": "Sheriffs tear gas crowd after accidental vandalism",
              "tags_str": "Projectiles",
              "LATITUDE": 35.0455,
              "LONGITUDE": -85.3081,
              "Link1": "https://www.youtube.com/watch?v=Jkj3EfktVkM",
              "Link2": "https://www.youtube.com/watch?v=MeIV1kSsPZg"
            },
            {
              "id": 1667,
              "date_text": "May 31st",
              "text": "Police swarm a woman without provocation",
              "tags_str": "Presence",
              "LATITUDE": 35.0337,
              "LONGITUDE": -89.9343,
              "Link1": "https://twitter.com/Desi_Stennett/status/1266996885824380929",
              "Link2": ""
            },
            {
              "id": 1668,
              "date_text": "May 31st",
              "text": "Police tear gas peaceful protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 35.7913,
              "LONGITUDE": -86.35700000000001,
              "Link1": "https://twitter.com/mjhubbard1/status/1267253396245020674",
              "Link2": "https://twitter.com/aConCitizen/status/1267251533655289860"
            },
            {
              "id": 1669,
              "date_text": "June 23rd",
              "text": "Police confiscate protester supplies",
              "tags_str": "Other",
              "LATITUDE": 36.167028,
              "LONGITUDE": -86.778441,
              "Link1": "https://twitter.com/brotherjones_/status/1275520373472268292",
              "Link2": "https://twitter.com/brotherjones_/status/1275539159030140929"
            },
            {
              "id": 1670,
              "date_text": "June 25th",
              "text": "Police confiscate protester supplies",
              "tags_str": "Other",
              "LATITUDE": 36.167028,
              "LONGITUDE": -86.778441,
              "Link1": "https://twitter.com/brotherjones_/status/1276133377863749637",
              "Link2": "https://twitter.com/brotherjones_/status/1276139027612291073"
            },
            {
              "id": 1671,
              "date_text": "June 26th",
              "text": "Police target activist leader",
              "tags_str": "Other",
              "LATITUDE": 36.167028,
              "LONGITUDE": -86.778441,
              "Link1": "https://twitter.com/TheTNHoller/status/1276713817284792324",
              "Link2": "https://twitter.com/brotherjones_/status/1276767990449668096"
            },
            {
              "id": 1672,
              "date_text": "June 29th",
              "text": "Police arrest protesters on questionable charges, harm protesters with zip ties",
              "tags_str": "Soft",
              "LATITUDE": 36.167028,
              "LONGITUDE": -86.778441,
              "Link1": "https://twitter.com/brotherjones_/status/1277580136284651521",
              "Link2": "https://twitter.com/brotherjones_/status/1277694340534546433"
            },
            {
              "id": 1673,
              "date_text": "July 4th",
              "text": "Police drag protesters down Capitol steps",
              "tags_str": "Other",
              "LATITUDE": 36.167028,
              "LONGITUDE": -86.778441,
              "Link1": "https://twitter.com/brotherjones_/status/1280211300082122758",
              "Link2": ""
            },
            {
              "id": 1674,
              "date_text": "July 31st",
              "text": "Protesters shoved down stairs and arrested",
              "tags_str": "Soft",
              "LATITUDE": 36.167028,
              "LONGITUDE": -86.778441,
              "Link1": "https://twitter.com/plaza_tn/status/1289065103556587520",
              "Link2": "https://twitter.com/plaza_tn/status/1289066779541745665"
            },
            {
              "id": 1675,
              "date_text": "May 30th",
              "text": "Police shoot rubber bullets at reporter",
              "tags_str": "Projectiles",
              "LATITUDE": 38.2435,
              "LONGITUDE": -85.7639,
              "Link1": "https://www.reddit.com/r/PublicFreakout/comments/gt69qe/police_start_shooting_press_with_some_kinda/",
              "Link2": "https://twitter.com/greg_doucette/status/1266557059606163456"
            },
            {
              "id": 1676,
              "date_text": "May 30th",
              "text": "Police shoot young woman in the head with a rubber bullet",
              "tags_str": "Projectiles",
              "LATITUDE": 38.2435,
              "LONGITUDE": -85.7639,
              "Link1": "https://i.imgur.com/1KGZsXW.mp4",
              "Link2": "https://twitter.com/shannynsharyse/status/1267015577266249728"
            },
            {
              "id": 1677,
              "date_text": "May 30th",
              "text": "Police shoot man in the head with rubber bullet while he is walking away",
              "tags_str": "Projectiles",
              "LATITUDE": 38.2435,
              "LONGITUDE": -85.7639,
              "Link1": "https://www.wave3.com/2020/06/12/protester-shot-head-files-lawsuit-against-law-enforcement/",
              "Link2": "https://www.wdrb.com/news/lawsuit-claims-lmpd-ksp-officers-fired-weapons-at-peaceful-protester/article_c3a4e82c-acdf-11ea-9a51-dfc711c18342.html"
            },
            {
              "id": 1678,
              "date_text": "May 30th",
              "text": "Police shoot at cars in traffic from overpass",
              "tags_str": "Projectiles",
              "LATITUDE": 38.2435,
              "LONGITUDE": -85.7639,
              "Link1": "https://m.twitch.tv/tchcreigo/clip/GentleRelentlessWalrusPoooound",
              "Link2": "https://twitter.com/Itz5500Gillz/status/1267454024288292867"
            },
            {
              "id": 1679,
              "date_text": "May 31st",
              "text": "Police smashing water bottles",
              "tags_str": "Other",
              "LATITUDE": 38.2435,
              "LONGITUDE": -85.7639,
              "Link1": "https://twitter.com/nataliealund/status/1266877181164089349",
              "Link2": "https://twitter.com/WFPLNews/status/1266923468102262784"
            },
            {
              "id": 1680,
              "date_text": "May 31st",
              "text": "5 police officers use batons to beat protester",
              "tags_str": "Hard, Other",
              "LATITUDE": 38.2435,
              "LONGITUDE": -85.7639,
              "Link1": "https://wfpl.org/wp-content/uploads/2020/06/File-169x300.jpg",
              "Link2": "https://wfpl.org/protesters-say-they-were-assaulted-before-arrest-fear-covid-19-in-jail/"
            },
            {
              "id": 1681,
              "date_text": "Believed to be June 1st",
              "text": "Louisville police swarm and beat a man screaming on the ground",
              "tags_str": "Presence, Hard",
              "LATITUDE": 38.2435,
              "LONGITUDE": -85.7639,
              "Link1": "https://reddit.com/r/PublicFreakout/comments/gutezm/multiple_kentucky_state_police_troopers_tackled/",
              "Link2": ""
            },
            {
              "id": 1682,
              "date_text": "June 1st",
              "text": "Restaurant owner shot and killed",
              "tags_str": "Projectiles",
              "LATITUDE": 38.2435,
              "LONGITUDE": -85.7639,
              "Link1": "https://edition.cnn.com/2020/06/02/us/david-mcatee-louisville-what-we-know-trnd/index.html",
              "Link2": "https://edition.cnn.com/2020/06/01/us/louisville-protests-man-shot-dead/index.html"
            },
            {
              "id": 1683,
              "date_text": "June 1st",
              "text": "Pastor violently arrested during protest",
              "tags_str": "Soft",
              "LATITUDE": 38.2435,
              "LONGITUDE": -85.7639,
              "Link1": "https://www.youtube.com/watch?time_continue=38&v=NGwUsz_8T48",
              "Link2": "https://www.wlky.com/article/pastor-suing-city-of-st-matthews-police-after-being-forced-to-ground-during-protest/33127467"
            },
            {
              "id": 1684,
              "date_text": "June 3rd",
              "text": "Protesters in St. Matthews shot with pepper rounds",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 38.2435,
              "LONGITUDE": -85.7639,
              "Link1": "https://www.reddit.com/r/Louisville/comments/gw5joa/peaceful_protesters_marching_in_st_mathews_get/",
              "Link2": ""
            },
            {
              "id": 1685,
              "date_text": "Believed to be June 15th",
              "text": "Police shove woman and then fire pepper balls at people who try to help her",
              "tags_str": "Soft, Projectiles, Chemical",
              "LATITUDE": 38.2435,
              "LONGITUDE": -85.7639,
              "Link1": "https://twitter.com/JasonRileyWDRB/status/1272965516286705665",
              "Link2": "https://twitter.com/greg_doucette/status/1273127612546678786"
            },
            {
              "id": 1686,
              "date_text": "June 16th",
              "text": "Police tackle protester, then target witness",
              "tags_str": "Hard",
              "LATITUDE": 38.2435,
              "LONGITUDE": -85.7639,
              "Link1": "https://twitter.com/kenjiboijoi/status/1272708377349668864",
              "Link2": "https://drive.google.com/file/d/1p6FDE2y_T9bi_D3iakcnzOkS9vQIex5k/view?usp=sharing"
            },
            {
              "id": 1687,
              "date_text": "June 19th",
              "text": "Protester medic beaten and arrested",
              "tags_str": "Soft, Hard",
              "LATITUDE": 38.2435,
              "LONGITUDE": -85.7639,
              "Link1": "https://mobile.twitter.com/martasmom98/status/1278231132753080321",
              "Link2": "https://mobile.twitter.com/martasmom98/status/1278231277649514496"
            },
            {
              "id": 1688,
              "date_text": "June 30th",
              "text": "Livestreamer arrested while filming protest",
              "tags_str": "Soft",
              "LATITUDE": 38.2435,
              "LONGITUDE": -85.7639,
              "Link1": "https://www.youtube.com/watch?v=Xfs8XJc1Rm0",
              "Link2": "https://www.reddit.com/r/Louisville/comments/hj3cqn/jason_downey_just_got_arrested_for_filming_the/"
            },
            {
              "id": 1689,
              "date_text": "July 1st",
              "text": "LMPD Bearcat strikes vehicle; police initially state vehicle hit them, then retract the statement; in addition, bystander filming is arrested",
              "tags_str": "Soft",
              "LATITUDE": 38.2435,
              "LONGITUDE": -85.7639,
              "Link1": "https://www.wdrb.com/news/police-backtrack-claim-that-lmpd-swat-vehicle-was-rammed-by-protester-in-downtown-louisville/article_17f3108a-bc70-11ea-b6e2-7f7210b6f14d.html",
              "Link2": "https://www.facebook.com/madi.sellmer/videos/10216971900878292/UzpfSTg5NzQ4NTM2MzoxMDE2MzgyMzY0NTEzMDM2NA/"
            },
            {
              "id": 1690,
              "date_text": "July 1st",
              "text": "Police target independent journalists and livestreamers for second consecutive night",
              "tags_str": "Other",
              "LATITUDE": 38.2435,
              "LONGITUDE": -85.7639,
              "Link1": "https://www.wdrb.com/news/aclu-raises-first-amendment-concerns-after-louisville-police-arrest-independent-media-livestreaming-protests/article_9fc52ade-bcd4-11ea-b2a1-47cb6faa91e6.html",
              "Link2": "https://www.facebook.com/milkymesstv/videos/876015052808877/"
            },
            {
              "id": 1691,
              "date_text": "July 7th",
              "text": "Police respond to splashed water with excessive force",
              "tags_str": "Other",
              "LATITUDE": 38.2435,
              "LONGITUDE": -85.7639,
              "Link1": "https://twitter.com/bloosemore/status/1280659724015480837",
              "Link2": "https://twitter.com/bloosemore/status/1280692574949462025"
            },
            {
              "id": 1692,
              "date_text": "July 9th",
              "text": "Police fire at peaceful protesters",
              "tags_str": "Projectiles",
              "LATITUDE": 38.2435,
              "LONGITUDE": -85.7639,
              "Link1": "https://twitter.com/HayesGardner/status/1281393307805978624",
              "Link2": "https://twitter.com/greg_doucette/status/1281447373294776321"
            },
            {
              "id": 1693,
              "date_text": "July 10th",
              "text": "Protester pepper sprayed through open door",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 38.2435,
              "LONGITUDE": -85.7639,
              "Link1": "https://www.courier-journal.com/videos/news/local/2020/08/03/video-shows-jefferson-county-deputy-pepper-spray-louisville-protester/5558102002/",
              "Link2": "https://www.courier-journal.com/story/news/local/2020/08/03/louisville-protester-sues-sheriff-after-being-pepper-sprayed/5555497002/"
            },
            {
              "id": 1694,
              "date_text": "May 31st",
              "text": "Police arrest protesters leaving scene",
              "tags_str": "Soft",
              "LATITUDE": 40.8169,
              "LONGITUDE": -96.7103,
              "Link1": "https://journalstar.com/news/local/crime-and-courts/watch-now-arrested-lincoln-protester-felt-violated-we-did-nothing-wrong-but-exercise-our-constitutional/article_aa0216d0-b79b-524b-9b6a-5db44a2d49dc.html",
              "Link2": "https://twitter.com/greg_doucette/status/1268772480153460736"
            },
            {
              "id": 1695,
              "date_text": "May 31st",
              "text": "Reporter shows tear gas canister fired at him by police",
              "tags_str": "Presence, Projectiles",
              "LATITUDE": 40.8169,
              "LONGITUDE": -96.7103,
              "Link1": "https://twitter.com/ChrisDunkerLJS/status/1268938853945167873",
              "Link2": "https://twitter.com/ChrisDunkerLJS/status/1268981851164684290"
            },
            {
              "id": 1696,
              "date_text": "May 31st",
              "text": "Woman bleeding from face after being shot by police",
              "tags_str": "Projectiles",
              "LATITUDE": 40.8169,
              "LONGITUDE": -96.7103,
              "Link1": "https://www.youtube.com/watch?v=GhZieEDPfv4",
              "Link2": "https://www.facebook.com/LincolnJournalStar/videos/253681835838738/"
            },
            {
              "id": 1697,
              "date_text": "May 31st",
              "text": "Police Mace, shoot pepper bullets at protesters sitting on the ground",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 41.261,
              "LONGITUDE": -95.9376,
              "Link1": "https://twitter.com/XruthxNthr/status/1266903223220097024",
              "Link2": ""
            },
            {
              "id": 1698,
              "date_text": "May 31st",
              "text": "Police Mace, shoot pepper bullets at protesters sitting on the ground",
              "tags_str": "Projectiles, Chemical",
              "LATITUDE": 41.168343,
              "LONGITUDE": -96.209633,
              "Link1": "https://twitter.com/XruthxNthr/status/1266903223220097024",
              "Link2": ""
            },
            {
              "id": 1699,
              "date_text": "June 1",
              "text": "Peaceful protesters arrested for breaking curfew",
              "tags_str": "Soft",
              "LATITUDE": 41.261,
              "LONGITUDE": -95.9376,
              "Link1": "https://twitter.com/reecereports/status/1267629669093978117",
              "Link2": "https://twitter.com/greg_doucette/status/1267649720215834626"
            },
            {
              "id": 1700,
              "date_text": "June 1",
              "text": "Peaceful protesters arrested for breaking curfew",
              "tags_str": "Soft",
              "LATITUDE": 41.168343,
              "LONGITUDE": -96.209633,
              "Link1": "https://twitter.com/reecereports/status/1267629669093978117",
              "Link2": "https://twitter.com/greg_doucette/status/1267649720215834626"
            },
            {
              "id": 1701,
              "date_text": "July 25th",
              "text": "Police officer shoves protester on bike; police then escalate",
              "tags_str": "Soft",
              "LATITUDE": 41.261,
              "LONGITUDE": -95.9376,
              "Link1": "https://twitter.com/greg_doucette/status/1287403828086738944",
              "Link2": "https://twitter.com/greg_doucette/status/1287404544893358081"
            },
            {
              "id": 1702,
              "date_text": "July 25th",
              "text": "Police officer shoves protester on bike; police then escalate",
              "tags_str": "Soft",
              "LATITUDE": 41.168343,
              "LONGITUDE": -96.209633,
              "Link1": "https://twitter.com/greg_doucette/status/1287403828086738944",
              "Link2": "https://twitter.com/greg_doucette/status/1287404544893358081"
            }
      ]);
    });
};