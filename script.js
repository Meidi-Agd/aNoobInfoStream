// Fonction section snap
function snapMsg1(msg1, msg2)
{
    msg2.style.left = "-500px";
    msg1.style.left = "initial";
}
function snapMsg2(msg1, msg2) {

    msg1.style.left = "-500px";
    msg2.style.left = "initial";
}
function loopSnap(n)
{
    let msg1 = document.getElementById('msg1');
    let msg2 = document.getElementById('msg2');
    snapMsg1(msg1, msg2)
    for (let i = 0; i <= n; i++)
    {
        setInterval(snapMsg1, 7000, msg1, msg2);
        setInterval(snapMsg2, 14000, msg1, msg2);
    }
}

loopSnap(1000);


