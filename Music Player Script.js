
let musics=[

    {
        id:1,
        name:"Suck it and See",
        artist:"Arctic Monkeys",
        audioSrc:"Arctic Monkeys - Suck It And See (Live on KEXP).mp3",
        imageSrc:"Acoustic 15.webp"

    },

    {
        id:2,
        name:"Mardy Bum",
        artist:"Arctic Monkeys",
        audioSrc:"Alex Turner  (Arctic Monkeys)  - Mardy Bum Acoustic.mp3",
        imageSrc:"Acoustic 15.webp"

    },
    
    {
        id:3,
        name:"Snap Out of it",
        artist:"Arctic Monkeys",
        audioSrc:"Arctic Monkeys - Snap Out of It (acoustic) - FM 94_9.mp3",
        imageSrc:"Acoustic 15.webp"

    },

    {
        id:4,
        name:"Cornerstone",
        artist:"Arctic Monkeys",
        audioSrc:"Arctic Monkeys - Cornerstone (Live Session for KEXP).mp3",
        imageSrc:"Acoustic 15.webp"

    },

    {
        id:5,
        name:"Love is Laserquest",
        artist:"Arctic Monkeys",
        audioSrc:"Arctic Monkeys - Love is a Laserquest (Acoustic KEXP Version).mp3",
        imageSrc:"Acoustic 15.webp"

    },

    {
        id:6,
        name:"No Buses",
        artist:"Arctic Monkeys",
        audioSrc:"Alex Turner - No Buses (Acoustic).mp3",
        imageSrc:"Acoustic 15.webp"

    },

    {
        id:7,
        name:"Mad Sounds",
        artist:"Arctic Monkeys",
        audioSrc:"Arctic Monkeys - Mad Sounds (Live from Avatar Studios).mp3",
        imageSrc:"Acoustic 15.webp"

    },

    {
        id:8,
        name:"I Wanna Be Yours",
        artist:"Arctic Monkeys",
        audioSrc:"Arctic Monkeys - I Wanna Be Yours - Session Acoustique OÜI FM.mp3",
        imageSrc:"Acoustic 15.webp"

    },

    {
        id:9,
        name:"Piledriver Waltz",
        artist:"Arctic Monkeys",
        audioSrc:"Arctic Monkeys - Piledriver Waltz (Acoustic).mp3",
        imageSrc:"Acoustic 15.webp"

    },

    {
        id:10,
        name:"Fluorescent Adolescent",
        artist:"Arctic Monkeys",
        audioSrc:"Arctic Monkeys - Fluorescent Adolescent (WRXP Sessions).mp3",
        imageSrc:"Acoustic 15.webp"

    },

    {
        id:11,
        name:"Why'd You Only Call Me When You're High?",
        artist:"Arctic Monkeys",
        audioSrc:"Arctic Monkeys - Why'd You Only Call Me When You're High_ (Live & Acoustic).mp3",
        imageSrc:"Acoustic 15.webp"

    },

    {
        id:12,
        name:"Do I Wanna Know",
        artist:"Arctic Monkeys",
        audioSrc:"Arctic Monkeys - Do I Wanna Know_ (Live at Avatar Studios).mp3",
        imageSrc:"Acoustic 15.webp"

    },

    {
        id:13,
        name:"Crying Lightning",
        artist:"Arctic Monkeys",
        audioSrc:"Arctic Monkeys - Crying Lightning Acoustic.mp3",
        imageSrc:"Acoustic 15.webp"

    },

    {
        id:14,
        name:"Miracle Aligner",
        artist:"The Last Shadow Puppets",
        audioSrc:"The Last Shadow Puppets - Miracle Aligner [Acoustic version] (Live at Vox Studios).mp3",
        imageSrc:"Miracle Aligner.jpg"

    },

    {
        id:15,
        name:"Feels Like We Only Go Backwards",
        artist:"Arctic Monkeys",
        audioSrc:"Arctic Monkeys - Feels Like We Only Go Backwards (Cover) HD.mp3",
        imageSrc:"Feels like we only go backwards.jpg"

    },

    {
        id:16,
        name:"Hold On, We're Going Home",
        artist:"Arctic Monkeys",
        audioSrc:"Arctic Monkeys- Hold On, We're Going Home (Drake) Subtitulada Español-ingles.mp3",
        imageSrc:"Hold on, We're Going Home.jpg"

    },
]
for(let i=0;i<musics.length;i++)
{
    let tile=document.createElement("div")
    tile.classList.add("tile")

    let thumbnail=document.createElement("div")
    thumbnail.classList.add("thumbnail")

    let img=document.createElement("img")
    img.src=musics[i].imageSrc

    thumbnail.append(img)
    tile.append(thumbnail)

    let description=document.createElement("div")
    description.classList.add("description")

    let h2=document.createElement("h2")
    h2.append(musics[i].name)
    description.append(h2)

    let h3=document.createElement("h3")
    h3.append(musics[i].artist)
    description.append(h3)
  
    tile.append(description)

    let playpause=document.createElement("div")
    playpause.classList.add("playpause")

    //let j=document.createElement("img")
    //j.src="16427.png"
    //playpause.append(j)
    tile.append(playpause)

    tile.addEventListener("click",function(){
        playMusic(musics[i]);
    });

    document.querySelector(".songs").append(tile)
}
function playMusic(music)
{
    //console.log(music)
    document.querySelector(".player").style.marginLeft="0"
    document.querySelector(".main-thumbnail-img").src=music.imageSrc
    document.querySelector(".song-name").innerText=music.name;
    document.querySelector(".song-artist").innerText=music.artist;
    document.querySelector(".audio").src=music.audioSrc
    document.querySelector(".audio").play()
}
function closePlayer()
{
    document.querySelector(".player").style.marginLeft="100%"
}
