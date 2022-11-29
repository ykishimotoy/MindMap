// 開始位置の要素
let start = document.getElementById("box-start-01");
// 終了位置の要素
let end = document.getElementById("box-middle-01");
const setting = {size: 2, color:'black', path: 'grid',startPlug: 'behind', endPlug: 'behind'};

/** 線を弾くleader-line.jsの関数
 * start 開始位置の要素,
 * end 終了位置の要素
 */
new LeaderLine(document.getElementById("box-start-01"), document.getElementById("box-middle-01"), setting);
new LeaderLine(document.getElementById("box-start-01"), document.getElementById("box-middle-02"), setting);
new LeaderLine(document.getElementById("box-start-01"), document.getElementById("box-middle-03"), setting);
new LeaderLine(document.getElementById("box-middle-01"), document.getElementById("box-end-01"), setting);
new LeaderLine(document.getElementById("box-middle-01"), document.getElementById("box-end-02"), setting);
new LeaderLine(document.getElementById("box-middle-01"), document.getElementById("box-end-03"), setting);
new LeaderLine(document.getElementById("box-middle-02"), document.getElementById("box-end-04"), setting);
new LeaderLine(document.getElementById("box-middle-02"), document.getElementById("box-end-05"), setting);
new LeaderLine(document.getElementById("box-middle-02"), document.getElementById("box-end-06"), setting);
new LeaderLine(document.getElementById("box-middle-03"), document.getElementById("box-end-07"), setting);
new LeaderLine(document.getElementById("box-middle-03"), document.getElementById("box-end-08"), setting);
new LeaderLine(document.getElementById("box-middle-03"), document.getElementById("box-end-09"), setting);