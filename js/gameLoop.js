var canvas;
var context;
var player;
var timer;
var interval = 1000/200;


canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

player = new GameObject(canvas.width/2,canvas.height/2,100,100,"blue");
player.vx = 0;
player.vy = 0;

npc1 = new GameObject(300, canvas.height/2, 100, 100, "lime")
npc2 = new GameObject(600, canvas.height/2, 100, 100, "hotpink")
npc3 = new GameObject(900, canvas.height/2, 100, 100, "yellow")

timer = setInterval(animate, interval);

function animate()
{
    context.clearRect(0,0,canvas.width,canvas.height);

    if (d)
    {
        player.x += 4;
    }

    if (a)
    {
        player.x -= 4;
    }

    player.move();
    if(player.x > canvas.width - player.width/2 || player.x < 0 + player.width/2)
    {
        player.vx*=-1
        player.color = "purple";
    }

    if(player.y > canvas.height - player.height/2 || player.y < 0 + player.height/2)
    {
        player.vy*=-1
        player.color = "darkblue";
    }
    player.drawCirc();

    npc1.drawCirc();
    npc2.drawCirc();
    npc3.drawRect();

}

