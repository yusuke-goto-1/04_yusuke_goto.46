"use strict";
// 1行目に記載している "use strict" は削除しないでください

// 意識するべきこと

// 論理的思考力の強化（物語を整理して説明できる能力）
// 自走力の強化（知らないことを言語化して聞ける能力と、AIを頼る相手でなく相談できる相手として付き合えるための下地作り）
// 多言語の違いを楽しむことができる能力（違いと意図を自分に吸収できること）
// ＝トラブルシューティングができること（問題の原因が判断できること）



// const cl = {syokui:"CL_syokui",simei:"CL_Name",naiyou:"CLnaiyou"};
// const gl = {syokui:"GL_syokui",simei:"GL_Name",naiyou:"GLnaiyou"};
// const tl = {syokui:"TL_syokui",simei:"TL_Name",naiyou:"TLnaiyou"};
// const m1 = {syokui:"T-1",simei:"T-1Name",ikisaki:"T-1ikisaki",gyoumu:"T-1gyoumu"};
// const m2 = {syokui:"T-2",simei:"T-2Name",ikisaki:"T-2ikisaki",gyoumu:"T-2gyoumu"};
// const m3 = {syokui:"T-3",simei:"T-3Name",ikisaki:"T-3ikisaki",gyoumu:"T-3gyoumu"};
// const m4 = {syokui:"T-4",simei:"T-4Name",ikisaki:"T-4ikisaki",gyoumu:"T-4gyoumu"};
// const m5 = {syokui:"T-5",simei:"T-5Name",ikisaki:"T-5ikisaki",gyoumu:"T-5gyoumu"};
// const m6 = {syokui:"T-6",simei:"T-6Name",ikisaki:"T-6ikisaki",gyoumu:"T-6gyoumu"};
// const m7 = {syokui:"T-7",simei:"T-7Name",ikisaki:"T-7ikisaki",gyoumu:"T-7gyoumu"};
// const m8 = {syokui:"T-8",simei:"T-8Name",ikisaki:"T-8ikisaki",gyoumu:"T-8gyoumu"};
// const m9 = {syokui:"T-9",simei:"T-9Name",ikisaki:"T-9ikisaki",gyoumu:"T-9gyoumu"};
// const m10 = {syokui:"T-10",simei:"T-10Name",ikisaki:"T-10ikisaki",gyoumu:"T-10gyoumu"};
// const m11 = {syokui:"T-11",simei:"T-11Name",ikisaki:"T-11ikisaki",gyoumu:"T-11gyoumu"};
// const m12 = {syokui:"T-12",simei:"T-12Name",ikisaki:"T-12ikisaki",gyoumu:"T-12gyoumu"};
// const m13 = {syokui:"T-13",simei:"T-13Name",ikisaki:"T-13ikisaki",gyoumu:"T-13gyoumu"};

const cl = {syokui:"工長",simei:"Oさん",naiyou:"現場のために頑張ろう！"};
const gl = {syokui:"組長",simei:"SUM",naiyou:"、、、、、、、へ！？"};
const tl = {syokui:"TL",simei:"Bさん",naiyou:"安全第一！"};
const m1 = {syokui:"SX",simei:"F",ikisaki:"DOJO",gyoumu:"製作"};
const m2 = {syokui:"EX",simei:"O",ikisaki:"DOJO",gyoumu:"製作"};
const m3 = {syokui:"EX",simei:"M",ikisaki:"House",gyoumu:"解析・修正"};
const m4 = {syokui:"-",simei:"T",ikisaki:"Dojo",gyoumu:"設計"};
const m5 = {syokui:"-",simei:"M",ikisaki:"XR",gyoumu:"VR開発"};
const m6 = {syokui:"-",simei:"T",ikisaki:"Dojo",gyoumu:"設計・加工Iot"};
const m7 = {syokui:"-",simei:"I",ikisaki:"HOUSE",gyoumu:"デジタル開発・加工"};
const m8 = {syokui:"-",simei:"K",ikisaki:"HOUSE",gyoumu:"デジタル開発"};
const m9 = {syokui:"-",simei:"H",ikisaki:"HO",gyoumu:"デジタル開発"};
const m10 = {syokui:"-",simei:"F",ikisaki:"XR",gyoumu:"VR開発"};
const m11 = {syokui:"応援",simei:"Y",ikisaki:"HOUSE",gyoumu:"教育"};
const m12 = {syokui:"",simei:"",ikisaki:"",gyoumu:""};
const m13 = {syokui:"",simei:"",ikisaki:"",gyoumu:""};
// const data = [cl, gl, tl, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13];


function reflashData(){

    const syokui = inputSyokui.value;
    const simei = inputSimei.value;
    const ikisaki = inputIkisaki.value;
    const gyoumu = inputGyoumu.value;

    console.log("HeadNumber = "+headNumber.value ,syokui, simei, ikisaki, gyoumu,);

    switch(headNumber.value){
        case "cl":
            cl.syokui = syokui;
            cl.simei = simei;
            // cl.ikisaki = ikisaki;
            cl.naiyou = gyoumu;
            break;

        case "gl":
            gl.syokui = syokui;
            gl.simei = simei;
            // gl.ikisaki = ikisaki;
            gl.naiyou = gyoumu;
            break;

        case "tl":
            tl.syokui = syokui;
            tl.simei = simei;
            // tl.ikisaki = ikisaki;
            tl.naiyou = gyoumu;
            break;

        case "m1":
            m1.syokui = syokui;
            m1.simei = simei;
            m1.ikisaki = ikisaki;
            m1.gyoumu = gyoumu;
            break;

        case "m2":
            m2.syokui = syokui;
            m2.simei = simei;
            m2.ikisaki = ikisaki;
            m2.gyoumu = gyoumu;
            break;
            
        case "m3":
            m3.syokui = syokui;
            m3.simei = simei;
            m3.ikisaki = ikisaki;
            m3.gyoumu = gyoumu;
            break;
            
        case "m4":
            m4.syokui = syokui;
            m4.simei = simei;
            m4.ikisaki = ikisaki;
            m4.gyoumu = gyoumu;
            break;
            
        case "m5":
            m5.syokui = syokui;
            m5.simei = simei;
            m5.ikisaki = ikisaki;
            m5.gyoumu = gyoumu;
            break;
            
        case "m6":
            m6.syokui = syokui;
            m6.simei = simei;
            m6.ikisaki = ikisaki;
            m6.gyoumu = gyoumu;
            break;
            
        case "m7":
            m7.syokui = syokui;
            m7.simei = simei;
            m7.ikisaki = ikisaki;
            m7.gyoumu = gyoumu;
            break;
            
        case "m8":
            m8.syokui = syokui;
            m8.simei = simei;
            m8.ikisaki = ikisaki;
            m8.gyoumu = gyoumu;
            break;
            
        case "m9":
            m9.syokui = syokui;
            m9.simei = simei;
            m9.ikisaki = ikisaki;
            m9.gyoumu = gyoumu;
            break;
            
        case "m10":
            m10.syokui = syokui;
            m10.simei = simei;
            m10.ikisaki = ikisaki;
            m10.gyoumu = gyoumu;
            break;
            
        case "m11":
            m11.syokui = syokui;
            m11.simei = simei;
            m11.ikisaki = ikisaki;
            m11.gyoumu = gyoumu;
            break;
            
        case "m12":
            m12.syokui = syokui;
            m12.simei = simei;
            m12.ikisaki = ikisaki;
            m12.gyoumu = gyoumu;
            break;
            
        case "m13":
            m13.syokui = syokui;
            m13.simei = simei;
            m13.ikisaki = ikisaki;
            m13.gyoumu = gyoumu;
            break;
        
        default:
            window.alert("IDが不適合です 半角で入力してください");
            
        

    }

    reflash();
}

function reflash(){
    console.log("reflash");
    document.getElementById("clSyokui").innerText = cl.syokui;
    document.getElementById("clSimei").innerText = cl.simei;
    document.getElementById("clNaiyou").innerText = cl.naiyou;
    document.getElementById("glSyokui").innerText = gl.syokui;
    document.getElementById("glSimei").innerText = gl.simei;
    document.getElementById("glNaiyou").innerText = gl.naiyou;
    document.getElementById("tlSyokui").innerText = tl.syokui;
    document.getElementById("tlSimei").innerText = tl.simei;
    document.getElementById("tlNaiyou").innerText = tl.naiyou;

    document.getElementById("syokui1").innerText = m1.syokui;
    document.getElementById("simei1").innerText = m1.simei;
    document.getElementById("ikisaki1").innerText = m1.ikisaki;
    document.getElementById("gyoumu1").innerText = m1.gyoumu;
    document.getElementById("syokui2").innerText = m2.syokui;
    document.getElementById("simei2").innerText = m2.simei;
    document.getElementById("ikisaki2").innerText = m2.ikisaki;
    document.getElementById("gyoumu2").innerText = m2.gyoumu;
    document.getElementById("syokui3").innerText = m3.syokui;
    document.getElementById("simei3").innerText = m3.simei;
    document.getElementById("ikisaki3").innerText = m3.ikisaki;
    document.getElementById("gyoumu3").innerText = m3.gyoumu;
    document.getElementById("syokui4").innerText = m4.syokui;
    document.getElementById("simei4").innerText = m4.simei;
    document.getElementById("ikisaki4").innerText = m4.ikisaki;
    document.getElementById("gyoumu4").innerText = m4.gyoumu;
    document.getElementById("syokui5").innerText = m5.syokui;
    document.getElementById("simei5").innerText = m5.simei;
    document.getElementById("ikisaki5").innerText = m5.ikisaki;
    document.getElementById("gyoumu5").innerText = m5.gyoumu;
    document.getElementById("syokui6").innerText = m6.syokui;
    document.getElementById("simei6").innerText = m6.simei;
    document.getElementById("ikisaki6").innerText = m6.ikisaki;
    document.getElementById("gyoumu6").innerText = m6.gyoumu;
    document.getElementById("syokui7").innerText = m7.syokui;
    document.getElementById("simei7").innerText = m7.simei;
    document.getElementById("ikisaki7").innerText = m7.ikisaki;
    document.getElementById("gyoumu7").innerText = m7.gyoumu;
    document.getElementById("syokui8").innerText = m8.syokui;
    document.getElementById("simei8").innerText = m8.simei;
    document.getElementById("ikisaki8").innerText = m8.ikisaki;
    document.getElementById("gyoumu8").innerText = m8.gyoumu;
    document.getElementById("syokui9").innerText = m9.syokui;
    document.getElementById("simei9").innerText = m9.simei;
    document.getElementById("ikisaki9").innerText = m9.ikisaki;
    document.getElementById("gyoumu9").innerText = m9.gyoumu;
    document.getElementById("syokui10").innerText = m10.syokui;
    document.getElementById("simei10").innerText = m10.simei;
    document.getElementById("ikisaki10").innerText = m10.ikisaki;
    document.getElementById("gyoumu10").innerText = m10.gyoumu;
    document.getElementById("syokui11").innerText = m11.syokui;
    document.getElementById("simei11").innerText = m11.simei;
    document.getElementById("ikisaki11").innerText = m11.ikisaki;
    document.getElementById("gyoumu11").innerText = m11.gyoumu;
    document.getElementById("syokui12").innerText = m12.syokui;
    document.getElementById("simei12").innerText = m12.simei;
    document.getElementById("ikisaki12").innerText = m12.ikisaki;
    document.getElementById("gyoumu12").innerText = m12.gyoumu;
    document.getElementById("syokui13").innerText = m13.syokui;
    document.getElementById("simei13").innerText = m13.simei;
    document.getElementById("ikisaki13").innerText = m13.ikisaki;
    document.getElementById("gyoumu13").innerText = m13.gyoumu;

}

const reflashButton = document.getElementById("inputButton");
reflashButton.addEventListener("click" , reflashData);
reflash();









// let xhr = null; // 使える場合はMicrosoft.XMLHTTP, 使えない場合はXMLHttpRequest
// try { xhr = new ActiveXObject("Microsoft.XMLHTTP"); } catch (e) { xhr = new XMLHttpRequest(); }

// let path = "draft.txt"; // 読み込む外部ファイル
// xhr.open("GET", path, true);
// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4) {
//         var data = xhr.responseText; // 外部ファイルの内容
//         console.log(data);
//     }
// };
// xhr.send();


// onmessage = async (tranceData) => {
//     const message = tranceData.data;

//     const root = await navigator.storage.getDirectory();
//     const draftHandle = await root.getFileHandle("draft.txt", { create: true});

//     const accessHandle = await draftHandle.createSyncAccessHandle();

//     const fileSize = accessHandle.getSize();

//     const buffer = new DataView(new ArrayBuffer(fileSize));
//     const readBuffer = accessHandle.read(buffer, { at:0});

//     const encoder = new TextEncoder();
//     const encodedMessage = encoder.encode(message);
//     const writeBuffer = accessHandle.write(encodedMessage, { at: readBuffer });

//     accessHandle.flash();
//     accessHandle.close();
// }

// cl.syokui = "工長"
// onmessage (cl.syokui);


