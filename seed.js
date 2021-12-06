require('dotenv').config();
require('./config/database');

const Character = require('./models/character');

(async function () {

    await Character.deleteMany({});
    const characters = await Character.create([
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Japanese_Hiragana_kyokashotai_A.svg/150px-Japanese_Hiragana_kyokashotai_A.svg.png",
            character: "A",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hiragana_%E3%81%82_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Japanese_Hiragana_kyokashotai_KA.svg/150px-Japanese_Hiragana_kyokashotai_KA.svg.png",
            character: "Ka",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/9/97/Hiragana_%E3%81%8B_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Japanese_Hiragana_kyokashotai_SA.svg/150px-Japanese_Hiragana_kyokashotai_SA.svg.png",
            character: "Sa",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/7/79/Hiragana_%E3%81%95_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Japanese_Hiragana_kyokashotai_TA.svg/150px-Japanese_Hiragana_kyokashotai_TA.svg.png",
            character: "Ta",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Hiragana_%E3%81%9F_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Japanese_Hiragana_kyokashotai_NA.svg/150px-Japanese_Hiragana_kyokashotai_NA.svg.png",
            character: "Na",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/8/83/Hiragana_%E3%81%AA_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Japanese_Hiragana_kyokashotai_HA.svg/150px-Japanese_Hiragana_kyokashotai_HA.svg.png",
            character: "Ha",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/4/43/Hiragana_%E3%81%AF_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Japanese_Hiragana_kyokashotai_MA.svg/150px-Japanese_Hiragana_kyokashotai_MA.svg.png",
            character: "Ma",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/6/65/Hiragana_%E3%81%BE_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Japanese_Hiragana_kyokashotai_YA.svg/150px-Japanese_Hiragana_kyokashotai_YA.svg.png",
            character: "Ya",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/0/07/Hiragana_%E3%82%84_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Japanese_Hiragana_kyokashotai_RA.svg/150px-Japanese_Hiragana_kyokashotai_RA.svg.png",
            character: "Ra",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Hiragana_%E3%82%89_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Japanese_Hiragana_kyokashotai_WA.svg/150px-Japanese_Hiragana_kyokashotai_WA.svg.png",
            character: "Wa",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Hiragana_%E3%82%8F_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Japanese_Hiragana_kyokashotai_E.svg/150px-Japanese_Hiragana_kyokashotai_E.svg.png",
            character: "E",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Hiragana_%E3%81%88_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Japanese_Hiragana_kyokashotai_KE.svg/150px-Japanese_Hiragana_kyokashotai_KE.svg.png",
            character: "Ke",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/5/57/Hiragana_%E3%81%91_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Japanese_Hiragana_kyokashotai_SE.svg/150px-Japanese_Hiragana_kyokashotai_SE.svg.png",
            character: "Se",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Hiragana_%E3%81%9B_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Japanese_Hiragana_kyokashotai_TE.svg/150px-Japanese_Hiragana_kyokashotai_TE.svg.png",
            character: "Te",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/1/15/Hiragana_%E3%81%A6_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Japanese_Hiragana_kyokashotai_NE.svg/150px-Japanese_Hiragana_kyokashotai_NE.svg.png",
            character: "Ne",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Hiragana_%E3%81%AD_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Japanese_Hiragana_kyokashotai_HE.svg/150px-Japanese_Hiragana_kyokashotai_HE.svg.png",
            character: "He",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/4/40/Hiragana_%E3%81%B8_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Japanese_Hiragana_kyokashotai_ME.svg/150px-Japanese_Hiragana_kyokashotai_ME.svg.png",
            character: "Me",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/5/58/Hiragana_%E3%82%81_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Japanese_Hiragana_kyokashotai_RE.svg/150px-Japanese_Hiragana_kyokashotai_RE.svg.png",
            character: "Re",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Hiragana_%E3%82%8C_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Japanese_Hiragana_kyokashotai_WE.svg/150px-Japanese_Hiragana_kyokashotai_WE.svg.png",
            character: "We",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Hiragana_%E3%82%91_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Japanese_Hiragana_kyokashotai_I.svg/150px-Japanese_Hiragana_kyokashotai_I.svg.png",
            character: "I",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Hiragana_%E3%81%84_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Japanese_Hiragana_kyokashotai_KI.svg/150px-Japanese_Hiragana_kyokashotai_KI.svg.png",
            character: "Ki",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/1/18/Hiragana_%E3%81%8D_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Japanese_Hiragana_kyokashotai_SI.svg/150px-Japanese_Hiragana_kyokashotai_SI.svg.png",
            character: "Shi",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Hiragana_%E3%81%97_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Japanese_Hiragana_kyokashotai_TI.svg/150px-Japanese_Hiragana_kyokashotai_TI.svg.png",
            character: "Chi",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/3/32/Hiragana_%E3%81%A1_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Japanese_Hiragana_kyokashotai_NI.svg/150px-Japanese_Hiragana_kyokashotai_NI.svg.png",
            character: "Ni",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/2/27/Hiragana_%E3%81%AB_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/%E3%81%B2_%E6%95%99%E7%A7%91%E6%9B%B8%E4%BD%93.svg/150px-%E3%81%B2_%E6%95%99%E7%A7%91%E6%9B%B8%E4%BD%93.svg.png",
            character: "Hi",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/4/40/Hiragana_%E3%81%B2_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Japanese_Hiragana_kyokashotai_MI.svg/150px-Japanese_Hiragana_kyokashotai_MI.svg.png",
            character: "Mi",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Hiragana_%E3%81%BF_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Japanese_Hiragana_kyokashotai_RI.svg/150px-Japanese_Hiragana_kyokashotai_RI.svg.png",
            character: "Ri",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Hiragana_%E3%82%8A_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Japanese_Hiragana_kyokashotai_WI.svg/150px-Japanese_Hiragana_kyokashotai_WI.svg.png",
            character: "Wi",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/3/31/Hiragana_%E3%82%90_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Japanese_Hiragana_kyokashotai_O.svg/150px-Japanese_Hiragana_kyokashotai_O.svg.png",
            character: "O",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Hiragana_%E3%81%8A_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Japanese_Hiragana_kyokashotai_KO.svg/150px-Japanese_Hiragana_kyokashotai_KO.svg.png",
            character: "Ko",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/8/83/Hiragana_%E3%81%93_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Japanese_Hiragana_kyokashotai_SO.svg/150px-Japanese_Hiragana_kyokashotai_SO.svg.png",
            character: "So",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Hiragana_%E3%81%9D_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Japanese_Hiragana_kyokashotai_TO.svg/150px-Japanese_Hiragana_kyokashotai_TO.svg.png",
            character: "To",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Hiragana_%E3%81%A8_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Japanese_Hiragana_kyokashotai_NO.svg/150px-Japanese_Hiragana_kyokashotai_NO.svg.png",
            character: "No",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/0/05/Hiragana_%E3%81%AE_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Japanese_Hiragana_kyokashotai_HO.svg/150px-Japanese_Hiragana_kyokashotai_HO.svg.png",
            character: "Ho",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/9/96/Hiragana_%E3%81%BB_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Japanese_Hiragana_kyokashotai_MO.svg/150px-Japanese_Hiragana_kyokashotai_MO.svg.png",
            character: "Mo",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Hiragana_%E3%82%82_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Japanese_Hiragana_kyokashotai_YO.svg/150px-Japanese_Hiragana_kyokashotai_YO.svg.png",
            character: "Yo",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/8/80/Hiragana_%E3%82%88_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Japanese_Hiragana_kyokashotai_RO.svg/150px-Japanese_Hiragana_kyokashotai_RO.svg.png",
            character: "Ro",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/3/35/Hiragana_%E3%82%8D_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Japanese_Hiragana_kyokashotai_WO.svg/150px-Japanese_Hiragana_kyokashotai_WO.svg.png",
            character: "Wo",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/6/64/Hiragana_%E3%82%92_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Japanese_Hiragana_kyokashotai_U.svg/150px-Japanese_Hiragana_kyokashotai_U.svg.png",
            character: "U",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Hiragana_%E3%81%86_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Japanese_Hiragana_kyokashotai_KU.svg/150px-Japanese_Hiragana_kyokashotai_KU.svg.png",
            character: "Ku",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/6/68/Hiragana_%E3%81%8F_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Japanese_Hiragana_kyokashotai_SU.svg/150px-Japanese_Hiragana_kyokashotai_SU.svg.png",
            character: "Su",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/0/05/Hiragana_%E3%81%99_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Japanese_Hiragana_kyokashotai_TU.svg/150px-Japanese_Hiragana_kyokashotai_TU.svg.png",
            character: "Tsu",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/0/08/Hiragana_%E3%81%A4_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Japanese_Hiragana_kyokashotai_NU.svg/150px-Japanese_Hiragana_kyokashotai_NU.svg.png",
            character: "Nu",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Hiragana_%E3%81%AC_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Japanese_Hiragana_kyokashotai_HU.svg/150px-Japanese_Hiragana_kyokashotai_HU.svg.png",
            character: "Fu",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Hiragana_%E3%81%B5_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Japanese_Hiragana_kyokashotai_MU.svg/150px-Japanese_Hiragana_kyokashotai_MU.svg.png",
            character: "Mu",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Hiragana_%E3%82%80_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Japanese_Hiragana_kyokashotai_YU.svg/150px-Japanese_Hiragana_kyokashotai_YU.svg.png",
            character: "Yu",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/7/78/Hiragana_%E3%82%86_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Japanese_Hiragana_kyokashotai_RU.svg/150px-Japanese_Hiragana_kyokashotai_RU.svg.png",
            character: "Ru",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/2/26/Hiragana_%E3%82%8B_stroke_order_animation.gif"
        },
        {
            characterType: 'H',
            img_path:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Japanese_Hiragana_kyokashotai_N.svg/150px-Japanese_Hiragana_kyokashotai_N.svg.png",
            character: "N",
            strokeOrder: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Hiragana_%E3%82%93_stroke_order_animation.gif"
        }
    ]);

    process.exit();

})();