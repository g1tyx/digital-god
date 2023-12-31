import '../../node_modules/i18next/i18next.min.js'



const responseChs = await fetch('./javascript/jsfiles/chs.json');
const responseEn = await fetch('./javascript/jsfiles/en.json');
const responseRu = await fetch('./javascript/jsfiles/ru.json');
const translationsEnData = await responseEn.json();
const translationsRuData = await responseRu.json();
const translationsChsData = await responseChs.json();
await i18next.init({
    lng: currentLanguage,
    resources: {
        chs: { translation: translationsChsData },
        en: { translation: translationsEnData },
        ru: { translation: translationsRuData }
    }
});

// Загрузка переводов
const loadTranslations = async() => {
    try {
        coinsCount.innerHTML = i18next.t('moneyCount', { money: formatNumber(money) });
        coinsGain.innerHTML = i18next.t('moneyPerSec', { gainPerSec: formatBoost(gainPerSecond * 20) });

        // crystalCount.innerHTML = i18next.t('crystalCount', { crystals: formatNumber(crystals)});

        // if (money >= 1e15) {
        //     doPrestige.innerHTML = i18next.t('prestigeEnabled', { crystalsTemp: formatNumber(crystalsTemp)});
        // }
        // else doPrestige.innerHTML = i18next.t('prestigeDisabled');

        if (maxOrNoVar) {
            maxOrNoUpgrades.innerHTML = i18next.t('maxUpgradesTrue');
        } else {
            maxOrNoUpgrades.innerHTML = i18next.t('maxUpgradesFalse');
        }

        // newsTab.innerHTML = i18next.t('newsButton');
        settingsSelect.innerHTML = i18next.t('settingsButton');
        mainSelect.innerHTML = i18next.t('clickerButton');
        achSelect.innerHTML = i18next.t('achievementsButton');
        infoSelect.innerHTML = i18next.t('informationSubButton');
        statisticsSelect.innerHTML = i18next.t('statisticsSubButton');
        shopSelect.innerHTML = i18next.t('shopButton');
        multiplierSelect.innerHTML = i18next.t('multipliersSubButton');
        aboutGameSelect.innerHTML = i18next.t('aboutButton');
        saveSelect.innerHTML = i18next.t('saveButton');
        graphicSelect.innerHTML = i18next.t('graphicButton');
        otherSelect.innerHTML = i18next.t('otherButton');
        coinsSelect.innerHTML = i18next.t('moneyButton');
        overdriveSelect.innerHTML = i18next.t('overdriveButton');

        settingsTitle.innerHTML = i18next.t('saveTitle');
        settingsTitle2.innerHTML = i18next.t('graphicTitle');
        settingsTitle3.innerHTML = i18next.t('otherTitle');

        savingGame.innerHTML = i18next.t('saveGame');
        loadingGame.innerHTML = i18next.t('loadGame');
        autoSavingGame.innerHTML = i18next.t('autosaveGame', { autoSave: autoSaving });
        impSave.innerHTML = i18next.t('importGame');
        fileUploader.innerHTML = i18next.t('importGameFromAFile');
        expSave.innerHTML = i18next.t('exportGame');
        changingLanguage.innerHTML = i18next.t('changeLanguage');
        changelogOpen.innerHTML = i18next.t('changelog');
        hardRes.innerHTML = i18next.t('hardReset');
        gameLore.innerHTML = i18next.t('gameLore');
        howToPlay.innerHTML = i18next.t('howToPlay');
        hotkeys.innerHTML = i18next.t('hotkeys');
        autoSaverTimer += 0.05
        autoTimer.innerHTML = i18next.t('autoSave', { autoSaverTimer: autoSaverTimer.toFixed(2) });

        resetTitle = i18next.t('resetConfirm');
        NaNedTitle = i18next.t('oopsNaNed');

        yes.innerHTML = i18next.t('yes');
        no.innerHTML = i18next.t('no');

        umultiplierBoost.innerHTML = i18next.t('umultiplierText', { umultipliercount: formatNumber(umultipliercount), umultiplier: formatBoost(umultiplier), umultiplierCost: formatNumber(umultiplierCost) });
        upowerBoost.innerHTML = i18next.t('upowerText', { upowercount: formatNumber(upowercount), upower: formatPower(upower), upowerCost: formatNumber(upowerCost) });

        maxbuy.innerHTML = i18next.t('maxBuy');

        buyableU1.innerHTML = i18next.t('firstBuyable', { firstBuyableAmount: formatNumber(firstBuyable.amount), firstBuyableEffect: formatNumber(firstBuyableEffect), firstBuyablePrice: formatNumber(firstBuyable.price) });
        buyableU2.innerHTML = i18next.t('secondBuyable', { secondBuyableAmount: formatNumber(secondBuyable.amount), secondBuyableEffect: formatNumber(secondBuyableEffect * 10), secondBuyablePrice: formatNumber(secondBuyable.price) });
        buyableU3.innerHTML = i18next.t('thirdBuyable', { thirdBuyableAmount: formatNumber(thirdBuyable.amount), thirdBuyableEffect: formatBoost(thirdBuyableEffect), thirdBuyablePrice: formatNumber(thirdBuyable.price) });
        buyableU4.innerHTML = i18next.t('fourthBuyable', { fourthBuyableAmount: formatNumber(fourthBuyable.amount), fourthBuyableEffect: formatBoost(fourthBuyableEffect), fourthBuyablePrice: formatNumber(fourthBuyable.price) });
        buyableU5.innerHTML = i18next.t('fifthBuyable', { fifthBuyableAmount: formatNumber(fifthBuyable.amount), fifthBuyableEffect: formatPower(fifthBuyableEffect), fifthBuyablePrice: formatNumber(fifthBuyable.price) });

        capped = i18next.t('capped');
        notCapped = i18next.t('notCapped');

        overdriveType1Name.innerHTML = i18next.t('overdriveType1Name');
        progressBarGain.innerHTML = i18next.t('overdriveType1Progress', { overdrivePercent: formatBoost(overdriveType1.percent), overdriveEffect: formatBoost(overdriveType1.effect), overdrivePrice: formatNumber(overdriveType1.price) });

        singleU1.innerHTML = i18next.t('firstSingle', { firstSingleEffect: formatBoost(firstSingleEffect), firstSinglePrice: firstSingle.priceText });
        if (firstSingle.amount == 0) {
            firstSingle.priceText = i18next.t('firstSinglePriceText')
        } else firstSingle.priceText = ""
        singleU2.innerHTML = i18next.t('secondSingle', { secondSingleEffect: formatBoost(secondSingleEffect), secondSinglePrice: secondSingle.priceText });
        if (secondSingle.amount == 0) {
            secondSingle.priceText = i18next.t('secondSinglePriceText')
        } else secondSingle.priceText = ""
        singleU3.innerHTML = i18next.t('thirdSingle', { thirdSingleEffect: formatBoost(thirdSingleEffect), thirdSinglePrice: thirdSingle.priceText });
        if (thirdSingle.amount == 0) {
            thirdSingle.priceText = i18next.t('thirdSinglePriceText')
        } else thirdSingle.priceText = ""
        singleU4.innerHTML = i18next.t('fourthSingle', { fourthSingleEffect: formatBoost(fourthSingleEffect), fourthSinglePrice: fourthSingle.priceText });
        if (fourthSingle.amount == 0) {
            fourthSingle.priceText = i18next.t('fourthSinglePriceText')
        } else fourthSingle.priceText = ""
        singleU5.innerHTML = i18next.t('fifthSingle', { fifthSingleEffect: formatBoost(fifthSingleEffect), fifthSinglePrice: fifthSingle.priceText });
        if (fifthSingle.amount == 0) {
            fifthSingle.priceText = i18next.t('fifthSinglePriceText')
        } else fifthSingle.priceText = ""
        singleU6.innerHTML = i18next.t('sixthSingle', { sixthSingleEffect: formatBoost(sixthSingleEffect), sixthSinglePrice: sixthSingle.priceText });
        if (sixthSingle.amount == 0) {
            sixthSingle.priceText = i18next.t('sixthSinglePriceText')
        } else sixthSingle.priceText = ""
        if (seventhSingleEffect == 100) {
            singleU7.innerHTML = i18next.t('seventhSingle', { isCapped: capped, seventhSingleEffect: formatBoost(seventhSingleEffect), seventhSinglePrice: seventhSingle.priceText });
        } else {
            singleU7.innerHTML = i18next.t('seventhSingle', { isCapped: notCapped, seventhSingleEffect: formatBoost(seventhSingleEffect), seventhSinglePrice: seventhSingle.priceText });
        }

        if (seventhSingle.amount == 0) {
            seventhSingle.priceText = i18next.t('seventhSinglePriceText')
        } else seventhSingle.priceText = ""
        singleU8.innerHTML = i18next.t('eighthSingle', { eighthSingleEffect: formatBoost(eighthSingleEffect), eighthSinglePrice: eighthSingle.priceText });
        if (eighthSingle.amount == 0) {
            eighthSingle.priceText = i18next.t('eighthSinglePriceText')
        } else eighthSingle.priceText = ""
        if (ninthSingleEffect == 2) {
            singleU9.innerHTML = i18next.t('ninthSingle', { isCapped: capped, ninthSingleEffect: formatPower(ninthSingleEffect), ninthSinglePrice: ninthSingle.priceText });
        } else {
            singleU9.innerHTML = i18next.t('ninthSingle', { isCapped: notCapped, ninthSingleEffect: formatPower(ninthSingleEffect), ninthSinglePrice: ninthSingle.priceText });
        }
        if (ninthSingle.amount == 0) {
            ninthSingle.priceText = i18next.t('ninthSinglePriceText')
        } else ninthSingle.priceText = ""
        singleU10.innerHTML = i18next.t('tenthSingle', { tenthSingleEffect: formatBoost(tenthSingleEffect), tenthSinglePrice: tenthSingle.priceText });
        if (tenthSingle.amount == 0) {
            tenthSingle.priceText = i18next.t('tenthSinglePriceText')
        } else tenthSingle.priceText = ""

        achievementsTitle.innerHTML = i18next.t('achievementsTitle');
        achievementsDesc.innerHTML = i18next.t('achievementsDesc');
        achBonus.innerHTML = i18next.t('achievementsBonus', { achievementBonus: formatBoost(achievementBonus) });
        for (var i = 0; i < 9; i++) {
            achRow1.name[i] = i18next.t(`achRow1.name.${i}`);
            document.getElementsByClassName("tooltip")[i].innerHTML = i18next.t(`achievement1${i+1}Desc`);
        }
        document.getElementById('tooltip-ach20').innerHTML = i18next.t('achievement20Desc');

        statsTitle.innerHTML = i18next.t('stastisticsTitle');

        totalCoins.innerHTML = i18next.t('totalMoney', { totalCoins: formatNumber(total) });
        totalSuperCoinsStats.innerHTML = i18next.t('totalSuperMoney', { totalSuperCoins: formatNumber(totalSuperCoins) });
        // totalCrystalsStats.innerHTML = i18next.t('totalCrystals', {totalCrystals: formatNumber(totalCrystals)});
        gameTime.innerHTML = i18next.t('gameTime', { gameDaysText: gameDaysText, gameHoursText: gameHoursText, gameMinutesText: gameMinutesText, gameSecondsText: gameSecondsText });
        totalClicks.innerHTML = i18next.t('totalClicks', { clickCount })

        multiplierTitle.innerHTML = i18next.t('multipliersTitle');

        gainPerClickTitle = i18next.t('clickTitle')
        gainPerSecondTitle = i18next.t('secondTitle')
        gainTitle = i18next.t('gainTitle')

        if (multIdentifier == 0) { multBreakdownTitle.innerHTML = gainPerClickTitle } else if (multIdentifier == 1) { multBreakdownTitle.innerHTML = gainPerSecondTitle } else if (multIdentifier == 2) { multBreakdownTitle.innerHTML = gainTitle }

        chooseClick.innerHTML = i18next.t('clickTitle')
        chooseSecond.innerHTML = i18next.t('secondTitle')
        chooseGain.innerHTML = i18next.t('gainTitle')

        postE13coinsSoftcapClickStats.innerHTML = i18next.t('postE13CoinSoftcap')
        postE13coinsSoftcapSecondStats.innerHTML = i18next.t('postE13CoinSoftcap')

        doublerStats.innerHTML = i18next.t('doublerName');
        midasCursorStats.innerHTML = i18next.t('midasCursorName');
        rewardForFeatsStats.innerHTML = i18next.t('rewardName');
        goldenGloveStats.innerHTML = i18next.t('goldenGloveName');
        gainStats.innerHTML = i18next.t('gainName');
        alphaPowerStats.innerHTML = i18next.t('alphaPowerName');

        summaryClickStats.innerHTML = i18next.t('totalMultiplier');

        smallInvestmentStats.innerHTML = i18next.t('smallInvestmentName');
        multiplierUpgradeStats.innerHTML = i18next.t('multiplierName');
        richFameStats.innerHTML = i18next.t('richFameName');
        negativeAlphaStats.innerHTML = i18next.t('negativeAlphaName');
        gain2Stats.innerHTML = i18next.t('gainName');
        summarySecondStats.innerHTML = i18next.t('totalMultiplier');
        achievement15Stats.innerHTML = i18next.t('achievement15Name');
        goldenClockStats.innerHTML = i18next.t('goldenClockName');

        doublerPlusStats.innerHTML = i18next.t('doublerPlusName');
        cashBackStats.innerHTML = i18next.t('cashBack');
        goldenKeyStats.innerHTML = i18next.t('goldenKeyName');
        overdriveType1Stats.innerHTML = i18next.t('overdrive');
        achievementsStats.innerHTML = i18next.t('achievementsName');
        umultiplierStats.innerHTML = i18next.t('umultiplierName');
        upowerStats.innerHTML = i18next.t('upowerName');
        summaryGainStats.innerHTML = i18next.t('totalMultiplier');

        aboutGameTitle.innerHTML = i18next.t('aboutGameTitle');

        aboutGame.innerHTML = i18next.t('aboutGame');
        galaxyClickButton.innerHTML = i18next.t('galaxyClickText');
        discordButton.innerHTML = i18next.t('discordText');
        telegramChannelButton.innerHTML = i18next.t('telegramChannelText');
        telegramChatButton.innerHTML = i18next.t('telegramChatText');
        gmailButton.innerHTML = i18next.t('gmailText');

        shopDesc.innerHTML = i18next.t('shopDesc');
        shopTitle.innerHTML = i18next.t('shopTitle2');
        superCount.innerHTML = i18next.t('superCoinCount', { supercoins: formatNumber(superCoins) });
        respecShop.innerHTML = i18next.t('respecShop');

        shopBuyableU1.innerHTML = i18next.t('firstShopBuyable', { fshbAmount: formatNumber(firstShopBuyable.amount), fshbEffect: formatPercent(firstShopBuyableEffect), fshbPrice: firstShopBuyable.priceText });
        if (firstShopBuyable.amount < 100) {
            firstShopBuyable.priceText = i18next.t('firstShopBuyablePriceText', { fshbPrice: formatNumber(firstShopBuyable.price) });
        } else firstShopBuyable.priceText = ''
        shopBuyableU2.innerHTML = i18next.t('secondShopBuyable', { sshbAmount: formatNumber(secondShopBuyable.amount), sshbEffect: formatPercent(secondShopBuyableEffect), sshbPrice: secondShopBuyable.priceText });
        if (secondShopBuyable.amount < 100) {
            secondShopBuyable.priceText = i18next.t('secondShopBuyablePriceText', { sshbPrice: formatNumber(secondShopBuyable.price) });
        } else secondShopBuyable.priceText = ''
        shopBuyableU3.innerHTML = i18next.t('thirdShopBuyable', { tshbAmount: formatNumber(thirdShopBuyable.amount), tshbEffect: formatPercent(thirdShopBuyableEffect), tshbPrice: thirdShopBuyable.priceText });
        if (thirdShopBuyable.amount < 100) {
            thirdShopBuyable.priceText = i18next.t('thirdShopBuyablePriceText', { tshbPrice: formatNumber(thirdShopBuyable.price) });
        } else thirdShopBuyable.priceText = ''
        shopBuyableU4.innerHTML = i18next.t('fourthShopBuyable', { foshbAmount: formatNumber(fourthShopBuyable.amount), foshbEffect: formatPercent(fourthShopBuyableEffect), foshbPrice: fourthShopBuyable.priceText });
        if (fourthShopBuyable.amount < 100) {
            fourthShopBuyable.priceText = i18next.t('fourthShopBuyablePriceText', { foshbPrice: formatNumber(fourthShopBuyable.price) });
        } else fourthShopBuyable.priceText = ''

        shopSingleU1.innerHTML = i18next.t('firstShopSingle', { fshsPrice: firstShopSingle.priceText });
        if (firstShopSingle.amount < 1) {
            firstShopSingle.priceText = i18next.t('firstShopSinglePriceText', { fshsPrice: formatNumber(firstShopSingle.price) });
        } else firstShopSingle.priceText = ''


        offlineGainTitle.innerHTML = i18next.t('offlineGainTitle');
        offlineShowGain.innerHTML = i18next.t('offlineGain', { timeDifference: timeDifference, moneyTemp: formatNumber(moneyTemp), superCoinsTemp: formatNumber(superCoinsTemp) });

        saveNotify = i18next.t('saveGameNotification');
        loadNotify = i18next.t('loadGameNotification');
        exportNotify = i18next.t('exportGameNotification');
        importNotify = i18next.t('importGameNotification');
        hardNotify = i18next.t('resetGameNotification');
        achNotify = i18next.t('achievementGameNotification');
        loreNotify = i18next.t('loreGameNotification');

        startDesc = i18next.t('startDescription');
        changelogTitle.innerHTML = i18next.t('changeLogTitleText');

        startChapDesc = i18next.t('startLoreDescription');
        loreTitle.innerHTML = i18next.t('storyTitleText');

        startHelpDesc = i18next.t('startHelpDescription');
        helpTitle.innerHTML = i18next.t('helpTitleText');

        code = document.getElementById('codeInput').value

        if (code == 'digitalgod' && code1Check == false) {
            codeReward = code1Reward
        }

        inputText.innerHTML = i18next.t('codeInput');

        code1Reward = i18next.t('code1Reward');

        codeIsFalse = i18next.t('codeIsFalse', { code: code });
        codeIsTrue = i18next.t('codeIsTrue', { code: code, codeReward: codeReward });
        codeIsUsed = i18next.t('codeIsUsed', { code: code });
        if (dailySeconds == 0 && dailyMinutes == 0 && dailyHours == 0) {
            getDailyReward.innerHTML = i18next.t('getDailyReward');
        } else {
            getDailyReward.innerHTML = ("0" + formatNumber(dailyHours)).slice(-2) + ":" + ("0" + formatNumber(dailyMinutes)).slice(-2) + ":" + ("0" + formatNumber(dailySeconds)).slice(-2)
            if (dailySeconds >= 55 && dailyMinutes >= 59 && dailyHours >= 23) convertingTime2()
        }
        superCoinsTemp2 = randomNumber(15, 40)
        dailyIsTrue = i18next.t('dailyIsTrue', { superCoinsTemp2: superCoinsTemp2 });
        dailyIsFalse = i18next.t('dailyIsFalse', { dailySeconds: formatNumber(dailySeconds), dailyMinutes: formatNumber(dailyMinutes), dailyHours: formatNumber(dailyHours) });


        desc00 = i18next.t('version00');
        desc01 = i18next.t('version01');
        desc02 = i18next.t('version02');
        desc03 = i18next.t('version03');
        desc04 = i18next.t('version04');
        desc05 = i18next.t('version05');
        desc051 = i18next.t('version051');
        desc06 = i18next.t('version06');
        desc07 = i18next.t('version07');
        desc071 = i18next.t('version071');
        desc08 = i18next.t('version08');
        desc0801 = i18next.t('version0801');
        desc09 = i18next.t('version09');
        desc091 = i18next.t('version091');
        desc092 = i18next.t('version092');

        chapter1Tab.innerHTML = i18next.t('chapter1Name');
        chapter2Tab.innerHTML = i18next.t('chapter2Name');
        chapter3Tab.innerHTML = i18next.t('chapter3Name');
        chapter4Tab.innerHTML = i18next.t('chapter4Name');

        chapter1 = i18next.t('chapter1');
        chapter2 = i18next.t('chapter2');
        chapter3 = i18next.t('chapter3');
        chapter4 = i18next.t('chapter4');

        helpTab1.innerHTML = i18next.t('help1Name');
        helpName1 = i18next.t('help1Name');
        helpTab2.innerHTML = i18next.t('help2Name');
        helpName2 = i18next.t('help2Name');
        helpTab3.innerHTML = i18next.t('help3Name');
        helpName3 = i18next.t('help3Name');
        helpTab4.innerHTML = i18next.t('help4Name');
        helpName4 = i18next.t('help4Name');
        helpTab5.innerHTML = i18next.t('help5Name');
        helpName5 = i18next.t('help5Name');
        helpTab6.innerHTML = i18next.t('help6Name');
        helpName6 = i18next.t('help6Name');
        helpTab7.innerHTML = i18next.t('help7Name');
        helpName7 = i18next.t('help7Name');

        help1 = i18next.t('help1');
        help2 = i18next.t('help2');
        help3 = i18next.t('help3');
        help4 = i18next.t('help4');
        help5 = i18next.t('help5');
        help6 = i18next.t('help6');
        help7 = i18next.t('help7');

    } catch (error) {
        console.error('Ошибка загрузки и инициализации переводов:', error);
    }
};

setInterval(loadTranslations, 50)

function formatNumber(number) {
    if (number < 1000000) {
        return number.toFixed(0);
    } else {
        return number.toExponential(2).replace("+", "");
    }
}

// Функция для форматирования значения усиления в соответствии с условиями
function formatBoost(boost) {
    if (boost < 100) {
        return boost.toFixed(2);
    } else if (boost >= 100 && boost < 1000000) {
        return boost.toFixed(0);
    } else {
        return boost.toExponential(2).replace("+", "");
    }
}

function formatPower(power) {
    if (power < 10) {
        return power.toFixed(3);
    } else if (power >= 10 && power < 1000000) {
        return power.toFixed(0);
    } else {
        return power.toExponential(2).replace("+", "");
    }
}

function formatPercent(percent) {
    percent *= 100
    if (percent / 100 < 10) {
        return percent.toFixed(2);
    } else if (percent / 100 >= 10 && percent / 100 < 1000000) {
        return percent.toFixed(0);
    } else {
        return percent.toExponential(2).replace("+", "");
    }
}

document.getElementById('changingLanguage').addEventListener('click', () => {

    // currentLanguage = i18next.language === 'ru' ? 'en' : 'ru';
    currentLanguage = i18next.language === 'chs' ? 'en' : 'chs';
    // console.log(currentLanguage)
    i18next.changeLanguage(currentLanguage, () => {
        // Обновление текста после смены языка
        loadTranslations();
        showChangelog(startDesc)
        showStory(startChapDesc)
        showHelpPage(startHelpDesc, empty)
        if (multIdentifier == 0) { multBreakdownTitle.innerHTML = gainPerClickTitle } else if (multIdentifier == 1) { multBreakdownTitle.innerHTML = gainPerSecondTitle } else if (multIdentifier == 2) { multBreakdownTitle.innerHTML = gainTitle }
    });
});

// function lo(lognumber, number){
// 	return Math.log(number)/Math.log(lognumber)
// }


function hidePiece(condition, idOfPiece, idOfPiecePercent, summary) {
    if (condition > 1) {
        idOfPiece.style.display = 'flex'
        idOfPiece.style.height = findRatio(condition, summary) + '%'
        if (findRatio(condition, summary) >= 4.5) {
            idOfPiecePercent.innerHTML = findRatio(condition, summary) + '%'
        } else idOfPiecePercent.innerHTML = ''
    } else {
        idOfPiece.style.display = 'none'
    }
}

setInterval(() => { //multi breakdown click
    doublerStatsEffect.innerHTML = "x" + formatBoost(thirdBuyableEffect)
    midasCursorStatsEffect.innerHTML = "x" + formatBoost(secondSingleEffect)
    rewardForFeatsStatsEffect.innerHTML = "x" + formatBoost(eighthSingleEffect)
    goldenGloveStatsEffect.innerHTML = "x" + formatBoost(1 + firstShopBuyableEffect)
    gainStatsEffect.innerHTML = "x" + formatBoost(gain)
    alphaPowerStatsEffect.innerHTML = "^" + formatPower(fifthBuyableEffect)
    let summ = Math.pow((thirdBuyableEffect * secondSingleEffect * eighthSingleEffect * (1 + firstShopBuyableEffect) * gain), fifthBuyableEffect)
    let summWithoutPower = thirdBuyableEffect * secondSingleEffect * eighthSingleEffect * (1 + firstShopBuyableEffect) * gain
    let alphaPowerMulti = findMultiplier(summWithoutPower, fifthBuyableEffect)
    hidePiece(thirdBuyableEffect, doublerPiece, doublerPiecePercent, summ)
    hidePiece(secondSingleEffect, midasCursorPiece, midasCursorPiecePercent, summ)
    hidePiece(eighthSingleEffect, rewardPiece, rewardPiecePercent, summ)
    hidePiece((1 + firstShopBuyableEffect), goldenGlovePiece, goldenGlovePiecePercent, summ)
    hidePiece(gain, gainClickPiece, gainClickPiecePercent, summ)
    hidePiece(alphaPowerMulti, alphaPowerPiece, alphaPowerPiecePercent, summ)
    if (summ < 1e13) {
        postE13SoftcapClick.style.display = 'none'
    } else {
        postE13SoftcapClick.style.display = 'flex'
    }
    summ = softCap(summ, 1e13, 0.5)
    summaryClickStatsEffect.innerHTML = "x" + formatBoost(summ)
}, 50);

setInterval(() => { //multi breakdown second
    let achievement15Effect
    achRow1.completion[4] ? achievement15Effect = 1 + 0.0001 * clickCount : achievement15Effect = 1

    smallInvestmentStatsEffect.innerHTML = "+" + formatNumber(firstBuyableEffect)
    multiplierUpgradeStatsEffect.innerHTML = "x" + formatBoost(fourthBuyableEffect)
    richFameStatsEffect.innerHTML = "x" + formatBoost(firstSingleEffect)
    negativeAlphaStatsEffect.innerHTML = "x" + formatBoost(sixthSingleEffect)
    goldenClockStatsEffect.innerHTML = "x" + formatBoost(1 + secondShopBuyableEffect)
    achievement15StatsEffect.innerHTML = "x" + formatBoost(achievement15Effect)
    gain2StatsEffect.innerHTML = "x" + formatBoost(gain)
    let summ = firstBuyableEffect * fourthBuyableEffect * firstSingleEffect * sixthSingleEffect * (1 + secondShopBuyableEffect) * achievement15Effect * gain
    hidePiece(firstBuyableEffect, smallInvestmentPiece, smallInvestmentPiecePercent, summ)
    hidePiece(fourthBuyableEffect, multiplierPiece, multiplierPiecePercent, summ)
    hidePiece(firstSingleEffect, richFamePiece, richFamePiecePercent, summ)
    hidePiece(sixthSingleEffect, negativeAlphaPiece, negativeAlphaPiecePercent, summ)
    hidePiece((1 + secondShopBuyableEffect), goldenClockPiece, goldenClockPiecePercent, summ)
    hidePiece(achievement15Effect, achievement15Piece, achievement15PiecePercent, summ)
    hidePiece(gain, gainSecondPiece, gainSecondPiecePercent, summ)
    if (summ < 1e13) {
        postE13SoftcapSecond.style.display = 'none'
    } else {
        postE13SoftcapSecond.style.display = 'flex'
    }
    summ = softCap(summ, 1e13, 0.5)
    summarySecondStatsEffect.innerHTML = "x" + formatBoost(summ)
}, 50);

setInterval(() => { //multi breakdown gain
    doublerPlusStatsEffect.innerHTML = "x" + formatBoost(thirdSingleEffect)
    cashBackStatsEffect.innerHTML = "x" + formatBoost(seventhSingleEffect)
    goldenKeyStatsEffect.innerHTML = "x" + formatBoost(1 + thirdShopBuyableEffect)
    overdriveType1StatsEffect.innerHTML = "x" + formatBoost(overdriveType1.effect)
    achievementsStatsEffect.innerHTML = "x" + formatBoost(achievementBonus)
    umultiplierStatsEffect.innerHTML = "x" + formatBoost(umultiplier)
    upowerStatsEffect.innerHTML = "^" + formatPower(upower)
    let summ = Math.pow((thirdSingleEffect * seventhSingleEffect * (1 + thirdShopBuyableEffect) * overdriveType1.effect * achievementBonus * umultiplier), upower)
    let summWithoutPower = thirdSingleEffect * seventhSingleEffect * (1 + thirdShopBuyableEffect) * overdriveType1.effect * achievementBonus * umultiplier
    let upowerMulti = findMultiplier(summWithoutPower, upower)
    hidePiece(thirdSingleEffect, doublerPlusPiece, doublerPlusPiecePercent, summ)
    hidePiece(seventhSingleEffect, cashBackPiece, cashBackPiecePercent, summ)
    hidePiece((1 + thirdShopBuyableEffect), goldenKeyPiece, goldenKeyPiecePercent, summ)
    hidePiece(overdriveType1.effect, overdriveType1Piece, overdriveType1PiecePercent, summ)
    hidePiece(achievementBonus, achievementsPiece, achievementsPiecePercent, summ)
    hidePiece(umultiplier, umultiplierPiece, umultiplierPiecePercent, summ)
    hidePiece(upowerMulti, upowerPiece, upowerPiecePercent, summ)
    summaryGainStatsEffect.innerHTML = "x" + formatBoost(summ)
}, 50);

//сделать в дивах мультипликатора проценты


loadingScreen.style.display = 'none'