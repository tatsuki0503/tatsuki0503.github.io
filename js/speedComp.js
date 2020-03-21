const useNum = [2, 5, 10, 31, 30, 0, 1.1, 0.9];

// 連想配列定義
const comphosei = {
    hoseiUp: "up",
    hoseiNomal: "nomal",
    hoseiDown: "down"
};

//CSVファイル読み込み
function getCSV(){
    var req = new XMLHttpRequest();
    req.open("get", "../resourse/csv/sordAndSheeld.csv", true);
    req.send(null); // HTTPリクエストの発行

    req.onload = function(){
	convertCSVtoArray(req.responseText);
    }
}
 
// 配列格納とセレクトボックス設定
function convertCSVtoArray(str){
    var result = [];
    // 改行を区切り文字として行を要素とした配列を生成
    var tmp = str.split("\n");
 
    // ステータスを配列格納
    for(var i=0;i<tmp.length;++i){
        result[i] = tmp[i].split(',');
    }
    // 色々するやつ
    util(result);
}

function util(result){

    var pokemonSpd = [];

    for(var i=0;i<result.length;i++){
        if(Object.is(result[i][0], document.getElementById("pokemon1").value)){
            pokemonSpd[0] = result[i][6];
        } else if(Object.is(result[i][0], document.getElementById("pokemon2").value)){
            pokemonSpd[1] = result[i][6];
        }
    }

    // 努力値の取得・算出
    var resultOfEffectNUm = [];

    // テキストボックスから入力値を取得
    var numJudge1 = document.getElementById("effectNum1").value;
    var numJudge2 = document.getElementById("effectNum2").value;

    if(numJudge1 == null && numJudge2 == null){
        window.alert("努力値入れてね");
    } else if(numJudge1 == null || numJudge2 == null){
        window.alert("努力値入れてね");
    }else{
        // 数値判定
        numJudge1 = Number(numJudge1, 10);
        numJudge2 = Number(numJudge2, 10);

        if(!Number.isInteger(numJudge1) && !Number.isInteger(numJudge2)){
            window.alert("努力値には数字入れてね");
        } else if(!Number.isInteger(numJudge1) || !Number.isInteger(numJudge2)){
            window.alert("努力値には数字入れてね");
        } else{
            
        }
    }

    resultOfEffectNUm = effectNumCalc(numJudge1, numJudge2);

    speedCompCalc(pokemonSpd, resultOfEffectNUm);
}

function effectNumCalc(effectNum1, effectNum2){

    var result = [];

    // 252以上の値は252に変換して計算、テキストの値も更新する
    // 0以下の値は0に変換して計算、テキストの値も更新する
    if(effectNum1 > 252){
        effectNum1 = 252;
    } else{

    }

    if(effectNum1 < 0){
        effectNum1 = 0;
    }else{

    }

    if(effectNum2 > 252){
        effectNum2 = 252;
    } else{

    }

    if(effectNum2 < 0){
        effectNum2 = 0;
    }else{

    }

    var result1 = effectNum1 / 4;
    var result2 = effectNum2 / 4;

    // 小数点以下切り捨て
    result1 = parseInt(result1, 10);
    result2 = parseInt(result2, 10);

    result[0] = result1;
    result[1] = result2;

    return result;
}

function speedCompCalc(speed, effectNum){

    // 最終計算
    var resultOfCalc = [];

    // 引数の数値変換
    var pokemon1Spd = parseInt(speed[0]);
    var pokemon2Spd = parseInt(speed[1]);

    // 個体値
    // 
    var kotaichi1 = document.form1.k1;
    var kotaichi2 = document.form2.k2;

    for(var i=0; i<kotaichi1.length;i++){
        if(kotaichi1[i].checked){
            var kotaichiNum1 = kotaichi1[i].value;
        }
    }

    for(var j=0; j<kotaichi2.length;j++){
        if(kotaichi2[j].checked){
            var kotaichiNum2 = kotaichi2[j].value;
        }
    }

    var kNum1;
    var kNum2;

    if(Object.is(kotaichiNum1, "kotaichi1_31")){
        kNum1 = useNum[3];
    } else if(Object.is(kotaichiNum1, "kotaichi1_0")){
        kNum1 = useNum[5];
    }

    if(Object.is(kotaichiNum2, "kotaichi2_31")){
        kNum2 = useNum[3];
    } else if(Object.is(kotaichiNum2, "kotaichi2_0")){
        kNum2 = useNum[5];
    }

    // 性格補正
    var hosei1 = document.seikakuH1.h1;
    var hosei2 = document.seikakuH2.h2;

    for(var i=0; i<hosei1.length;i++){
        if(hosei1[i].checked){
            var seikakuHosei1 = hosei1[i].value;
        }
    }

    for(var j=0; j<hosei2.length;j++){
        if(hosei2[j].checked){
            var seikakuHosei2 = hosei2[j].value;
        }
    }

    // 補正判定
    /*
    var hoseiRN1 = compHosei(seikakuHosei1);
    var hoseiRN2 = compHosei(seikakuHosei2);
    */

    var realOfHoseiNu1 = useNum[2];
    var realOfHoseiNu2 = useNum[2];

    /*
    switch(hoseiRN1){
        case "up":
            realOfHoseiNu1 = useNum[6];
            break;
        case "nomal":
            realOfHoseiNu1 = useNum[6];
            break;
        case "down":
            realOfHoseiNum1 = useNum[7];
            break;
    }

    switch(hoseiRN2){
        case "up":
            realOfHoseiNum2 = useNum[6];
            break;
        case "nomal":
            realOfHoseiNum2 = useNum[6];
            break;
        case "down":
            realOfHoseiNum2 = useNum[7];
            break;
    }
    */

    var hoseiChecked1 = document.getElementById("hoseiIdId1");
    var hoseiChecked2 = document.getElementById("hoseiIdId2");
    // 計算式判定・結果
    if(Object.is(seikakuHosei1, "hoseiUp")){
        resultOfCalc[0] =
            parseInt((pokemon1Spd * useNum[0] + kNum1 + effectNum[0]) / useNum[0], 10) + useNum[1]; 

        resultOfCalc[0] += parseInt(resultOfCalc[0] / realOfHoseiNu1, 10);
    } else if(Object.is(seikakuHosei1, "hoseiNomal")){
        resultOfCalc[0] =
            parseInt((pokemon1Spd * useNum[0] + kNum1 + effectNum[0]) / useNum[0], 10) + useNum[1];
    } else if(Object.is(seikakuHosei1, "hoseiDown")){
        resultOfCalc[0] =
            (parseInt((pokemon1Spd * useNum[0] + kNum1 + effectNum[0]) / useNum[0], 10) + useNum[1])* 0.9; 

        resultOfCalc[0] = parseInt(resultOfCalc[0]);
    } else{

    }

    if(Object.is(seikakuHosei2, "hoseiUp")){
        resultOfCalc[1] =
            parseInt((pokemon2Spd * useNum[0] + kNum2 + effectNum[1]) / useNum[0], 10) + useNum[1]; 

        resultOfCalc[1] += parseInt(resultOfCalc[1] / realOfHoseiNu2, 10);
    } else if(Object.is(seikakuHosei2, "hoseiNomal")){
        resultOfCalc[1] =
            parseInt((pokemon2Spd * useNum[0] + kNum2 + effectNum[1]) / useNum[0], 10) + useNum[1];
    } else if(Object.is(seikakuHosei2, "hoseiDown")){
        resultOfCalc[1] =
            (parseInt((pokemon2Spd * useNum[0] + kNum2 + effectNum[1]) / useNum[0], 10) + useNum[1]) * 0.9; 

        resultOfCalc[1] = parseInt(resultOfCalc[1]);
    } else{

    }

    // 結果の表示
    window.alert(resultOfCalc[0] + "," + resultOfCalc[1]);
}

function compHosei(hosei){

    switch(hosei){
        case "hoseiUp":
            return comphosei["hoseiUp"];
            break;
        case "hoseiNomal":
            return comphosei["hoseiNomal"];
            break;
        case "hoseiDown":
            return comphosei["hoseiDown"];
            break;
    }
}