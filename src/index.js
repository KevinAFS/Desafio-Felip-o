let nome = "Thorfinn"
let xp = 10000
let nvdh = ""
if (xp >= 0 && xp <= 1000){
    nvdh = "Ferro"
}
if (xp >= 1001 && xp <= 2000){
    nvdh = "Bronze"
}
if (xp >= 2001 && xp <= 5000){
    nvdh = "Prata"
}
if (xp >= 5001 && xp <= 7000){
    nvdh = "Ouro"
}
if (xp >= 7001 && xp <= 8000){
    nvdh = "Platina"
}
if (xp >= 8001 && xp <= 9000){
    nvdh = "ascedente"
}
if (xp >= 9001 && xp <= 10000){
    nvdh = "Imortal"
}
if (xp >= 10001){
    nvdh = "Radiante"
}

console.log ("O Herói de nome " + nome + " está no nível " + nvdh)