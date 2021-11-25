let params = (new URL(document.location)).searchParams;
let songName = params.get("s");
if(songName !== null) {
    console.log(songName);
    document.getElementById("sss").innerHTML = songName.toString();
}
let art = params.get("aa");
if(art !== null) {
    console.log(art);
}