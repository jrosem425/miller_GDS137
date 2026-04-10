var canvas;
var context;
var player;
var timer;
var interval = 1000/200;


canvas = document.getElementById("canvas");
context = canvas.getContext("2d");



//============================GAME OBJECTS================================


player = new GameObject(canvas.width/2,canvas.height/2,100,100,"blue");
player.vx = 0;
player.vy = 0;

npc1 = new GameObject(300, canvas.height/2, 100, 100, "lime")
npc2 = new GameObject(600, canvas.height/2, 100, 100, "hotpink")
npc3 = new GameObject(900, canvas.height/2, 100, 100, "yellow")

timer = setInterval(animate, interval);



//============================MOVEMENT================================


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

    //============================COLLISION LOGIC================================
    

    //NPC 1 Collision

    if (npc1.collisionCheck(player))
    {
        npc1.color = "yellow"
    }
    else
    {
        npc1.color = "lime"
    }
    
    //====================================


    //NPC 2 Collision

    if (npc2.collisionCheck(player))
    {
        context.strokeRect(npc2.x-npc2.width/2, npc2.y-npc2.height/2, npc2.width, npc2.height);
    }
   

    //NPC 3 Collision

    if (npc3.collisionCheck(player))
    {
        player.x=player.prevX;
    
    }
    else{
        player.prevX=player.x;
    }
    //draw player and npcs
    player.drawCirc();

    npc1.drawCirc();
    npc2.drawCirc();
    npc3.drawRect();

}

