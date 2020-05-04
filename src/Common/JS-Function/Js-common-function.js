import * as city from './../Const/cityAndCountery'
export function gregorian_to_jalali(g_y, g_m, g_d) {
    function div(a, b) {
        return parseInt((a / b));
    }

    var g_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var j_days_in_month = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
    var jalali = [];
    var gy = g_y - 1600;
    var gm = g_m - 1;
    var gd = g_d - 1;

    var g_day_no = 365 * gy + div(gy + 3, 4) - div(gy + 99, 100) + div(gy + 399, 400);

    for (var i = 0; i < gm; ++i)
        g_day_no += g_days_in_month[i];
    if (gm > 1 && ((gy % 4 === 0 && gy % 100 !== 0) || (gy % 400 === 0)))
    /* leap and after Feb */
        g_day_no++;
    g_day_no += gd;

    var j_day_no = g_day_no - 79;

    var j_np = div(j_day_no, 12053);
    /* 12053 = 365*33 + 32/4 */
    j_day_no = j_day_no % 12053;

    var jy = 979 + 33 * j_np + 4 * div(j_day_no, 1461);
    /* 1461 = 365*4 + 4/4 */

    j_day_no %= 1461;

    if (j_day_no >= 366) {
        jy += div(j_day_no - 1, 365);
        j_day_no = (j_day_no - 1) % 365;
    }
    for (  i = 0; i < 11 && j_day_no >= j_days_in_month[i]; ++i)
        j_day_no -= j_days_in_month[i];
    var jm = i + 1;
    var jd = j_day_no + 1;
    jalali[0] = jy;
    jalali[1] = jm;
    jalali[2] = jd;
    return jalali;
    //return jalali[0] + "_" + jalali[1] + "_" + jalali[2];
    //return jy + "/" + jm + "/" + jd;
}
export function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export function separate(Number)
{
    Number+= '';
    Number= Number.replace(',', '');
    let x = Number.split('.');
    let y = x[0];
    let z= x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(y))
        y= y.replace(rgx, '$1' + ',' + '$2');
    return y+ z;
}
export function getCity(ostan) {
    switch(ostan) {
        case "اصفهان":
            return city.Esfahan;
            break;
        case "البرز":
            return city.Alborz;
            break;
        case "ايلام":
            return city.Ilam;
            break;
        case "آذربايجان شرقي":
            return city.AzarbayjanSharghi;
            break;
        case "آذربايجان غربي":
            return city.Azarbayjangharbi;
            break;
        case "بوشهر":
            return city.Boshehr;
            break;
            case "تهران":
            return city.Tehran;
            break;
        case "چهارمحال وبختياري":
            return city.Charmahal;
            break;
        case "خراسان جنوبي":
            return city.KhorasanJonobi;
            break;
        case "خراسان رضوي":
            return city.KhorasanRazavi;
            break;
        case "خراسان شمالي":
            return city.KhorasanShomali;
            break;
        case "خوزستان":
            return city.Khozestan;
            break;
            case "زنجان":
            return city.zanjab;
            break;
        case "سمنان":
            return city.semnan;
            break;
        case "سيستان وبلوچستان":
            return city.Sistan;
            break;
        case "فارس":
            return city.Fars;
            break;
        case "قزوين":
            return city.ghazvin;
            break;
        case "قم":
            return city.Qom;
            break;
            case "كردستان":
            return city.Kordestan;
            break;
        case "كرمان":
            return city.Kerman;
            break;
            case "كرمانشاه":
            return city.Kermanshah;
            break;
        case "كهگيلويه وبويراحمد":
            return city.Kohkiloye;
            break;
        case "گلستان":
            return city.Golestan;
            break;
        case "گيلان":
            return city.Gilan;
            break;
        case "لرستان":
            return city.Lorestan;
            break;
        case "مازندران":
            return city.Mazandaran;
            break;
    case "مركزي":
            return city.Markazi;
            break;
        case "هرمزگان":
            return city.Hormozgan;
            break;
            case "همدان":
            return city.Hamedan;
            break;
        case "يزد":
            return city.Yazd;
            break;
        default:
            return city.Mazandaran;
        // code block
    };


}

