export function BanglaDate(englishDate){
    const finalEnlishToBanglaNumber = {
        '0': '০',
        '1': '১',
        '2': '২',
        '3': '৩',
        '4': '৪',
        '5': '৫',
        '6': '৬',
        '7': '৭',
        '8': '৮',
        '9': '৯'
    };
    const banglaMonth = {
        "1" : "জানুয়ারি",
        "2" : "ফেব্রুয়ারি",
        "3" : "মার্চ",
        "4" : "এপ্রিল",
        "5" : "মে",
        "6" : "জুন",
        "7" : "জুলাই",
        "8" : "আগস্ট",
        "9" : "সেপ্টেম্বর",
        "10" : "অক্টোবর",
        "11" : "নভেম্বর",
        "12" : "ডিসেম্বর",
    };

    englishDate = englishDate.split("-")
    for (const x in finalEnlishToBanglaNumber){
        englishDate[0] = englishDate[0].replace(new RegExp(x, 'g'), finalEnlishToBanglaNumber[x])
        englishDate[1] = englishDate[1].replace(new RegExp(x, 'g'), banglaMonth[x])
        englishDate[2] = englishDate[2].replace(new RegExp(x, 'g'), finalEnlishToBanglaNumber[x])
    }
    englishDate = [englishDate[2] ,englishDate[1],englishDate[0]]
    return englishDate.join("-").replace('undefined', "")
}

export function EnglishNumberToBangla(num){
    const finalEnlishToBanglaNumber = {
        '0': '০',
        '1': '১',
        '2': '২',
        '3': '৩',
        '4': '৪',
        '5': '৫',
        '6': '৬',
        '7': '৭',
        '8': '৮',
        '9': '৯'
    };
    num = num.toString()
    for (const x in finalEnlishToBanglaNumber){
        num = num.replace(new RegExp(x, 'g'), finalEnlishToBanglaNumber[x])
    }
    return num;
}
export default {BanglaDate, EnglishNumberToBangla}