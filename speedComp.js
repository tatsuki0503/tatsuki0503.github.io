//CSVファイル読み込み
function getCSV(){
    var req = new XMLHttpRequest();
    req.open("get", "sordAndSheeld.csv", true);
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
 
    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for(var i=0;i<tmp.length;++i){
        result[i] = tmp[i].split(',');
    }
    // 検索・計算
    calc(result);
}

function calc(result){

    for(var i=0;i<result.length;i++){
        if(Object.is(result[i][0], document.getElementById("pokemon1").value)){
            var pokemon1Spd = result[i][6];
        } else if(Object.is(result[i][0], document.getElementById("pokemon2").value)){
            var pokemon2Spd = result[i][6];
        }
    }

    var calc1 = ((parseInt(pokemon1Spd, 10) * 2 + 31 + 63) / 2 + 5) * 1.1;
    var calc2 = ((parseInt(pokemon2Spd, 10) * 2 + 31 + 63) / 2 + 5) * 1.1;

    window.alert(parseInt(calc1));
    window.alert(parseInt(calc2));

}