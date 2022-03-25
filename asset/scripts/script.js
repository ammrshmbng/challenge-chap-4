function getPilihanComputer(){
    let comp = Math.random();
    if(comp < 0.34) return 'gunting';
    if(comp >= 0.34 && comp < 0.67) return 'batu';
    return 'kertas'
    
}

function getHasil(comp,player){
   
      if(player == comp) return "DRAW!";
      if(player == 'gunting') return (comp == 'kertas') ? 'YOU WIN!' : 'YOU LOSE!';
      if(player == 'kertas') return (comp == 'gunting') ? 'YOU LOSE!' : 'YOU WIN!';
      if(player == 'batu') return (comp == 'gunting') ? 'YOU WIN!' : 'YOU LOSE!';
                            return 'salah input';
      
}

// const player = prompt("pilih gunting kertas batu");
// const com = getPilihanComputer();
// console.log(`${player} vs ${com} = ${getHasil(com,player)}`);

function putar(){
    const imgComputer = document.querySelectorAll(".computer img");
    const gambar = ["gunting","kertas","batu"];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        if(imgComputer[i].classList.contains("bg-trans")==true){
            imgComputer[i].classList.remove("bg-trans");
        }else{
            imgComputer[i].classList.add("bg-trans");
        }
        i++
        if(i == gambar.length) i=0;
    },100)
}

const pilihan = document.querySelectorAll(".player img");
const computerImg = document.querySelectorAll(".computer img");
const info = document.querySelector(".result h1");
// pilihan.forEach(function(pil){
//     pil.addEventListener("click",function(){
//         const pilihanComputer = getPilihanComputer();
//         const pilihanPlayer = pil.className.split(" ")[0];
//         const hasil = getHasil(pilihanComputer,pilihanPlayer);


//         // console.log(`${pilihanPlayer} vs ${pilihanComputer} = ${hasil}`);
//         // putar();

//             // const imgComputer = document.querySelector(".img-computer");
//             // imgComputer.setAttribute("src",`img/${pilihanComputer}.png`);

//             const info = document.querySelector(".result h1");
//             info.innerHTML = hasil;

//         // setTimeout(function(){
            
//         // },1000)
        
//     })
// });


// toglle bg-img


pilihan[0].addEventListener("click",function(e){
    putar()
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = e.target.className.split(" ")[0];
    const hasil = getHasil(pilihanComputer,pilihanPlayer);

      // menghapus bg selain nya jika ada
      if(pilihan[1].classList.contains("bg-trans")==true || pilihan[2].classList.contains("bg-trans")==true) {
        pilihan[1].classList.remove("bg-trans");
        pilihan[2].classList.remove("bg-trans");
        
    }
    if(pilihan[0].classList.contains("bg-trans")==true){
        pilihan[0].classList.add("bg-trans");
       
        
        
    }else{
        pilihan[0].classList.toggle("bg-trans");
        
    }

    setTimeout(function(){
       
    // console.log(`${pilihanPlayer} vs ${pilihanComputer} = ${hasil}`);
    // putar();

        // const imgComputer = document.querySelector(".img-computer");
        // imgComputer.setAttribute("src",`img/${pilihanComputer}.png`);

        const info = document.querySelector(".result h1");
        info.innerHTML = hasil;
        info.classList.add("win");

      


    // menampilkan pilihan bg komputer 
    if(computerImg[0].className.split(" ")[0]==pilihanComputer){
        computerImg[1].classList.remove("bg-trans")
        computerImg[2].classList.remove("bg-trans")
        computerImg[0].classList.add("bg-trans")
    }else if(computerImg[1].className.split(" ")[0]==pilihanComputer){
        computerImg[0].classList.remove("bg-trans")
        computerImg[2].classList.remove("bg-trans")
        computerImg[1].classList.add("bg-trans")
    }else if(computerImg[2].className.split(" ")[0]==pilihanComputer){
        computerImg[0].classList.remove("bg-trans")
        computerImg[1].classList.remove("bg-trans")
        computerImg[2].classList.add("bg-trans")
    }
    },1000)
    
})

pilihan[1].addEventListener("click",function(e){
    putar()
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = e.target.className.split(" ")[0];
    const hasil = getHasil(pilihanComputer,pilihanPlayer);
    
    // menghapus bg selain nya jika ada 
    if(pilihan[0].classList.contains("bg-trans")==true || pilihan[2].classList.contains("bg-trans")==true) {
        pilihan[0].classList.remove("bg-trans");
        pilihan[2].classList.remove("bg-trans");
    }
    if(pilihan[1].classList.contains("bg-trans")==true){
        pilihan[1].classList.add("bg-trans");
        
    }else{
        pilihan[1].classList.toggle("bg-trans");
    }
    setTimeout(function(){
        

    // console.log(`${pilihanPlayer} vs ${pilihanComputer} = ${hasil}`);
    // putar();

        // const imgComputer = document.querySelector(".img-computer");
        // imgComputer.setAttribute("src",`img/${pilihanComputer}.png`);

       
        info.innerHTML = hasil;
        info.classList.add("win");


    

    // menampilkan pilihan bg komputer 
    if(computerImg[0].className.split(" ")[0]==pilihanComputer){
        computerImg[1].classList.remove("bg-trans")
        computerImg[2].classList.remove("bg-trans")
        computerImg[0].classList.add("bg-trans")
    }else if(computerImg[1].className.split(" ")[0]==pilihanComputer){
        computerImg[0].classList.remove("bg-trans")
        computerImg[2].classList.remove("bg-trans")
        computerImg[1].classList.add("bg-trans")
    }else if(computerImg[2].className.split(" ")[0]==pilihanComputer){
        computerImg[0].classList.remove("bg-trans")
        computerImg[1].classList.remove("bg-trans")
        computerImg[2].classList.add("bg-trans")
    }
    },1000)
})

pilihan[2].addEventListener("click",function(e){
    putar()
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = e.target.className.split(" ")[0];
    const hasil = getHasil(pilihanComputer,pilihanPlayer);

    // menghapus bg selain nya jika ada
    if(pilihan[0].classList.contains("bg-trans")==true || pilihan[1].classList.contains("bg-trans")==true) {
        pilihan[0].classList.remove("bg-trans");
        pilihan[1].classList.remove("bg-trans");
    }
    if(pilihan[2].classList.contains("bg-trans")==true){
        pilihan[2].classList.add("bg-trans");
        
    }else{
        pilihan[2].classList.toggle("bg-trans");
    }
    setTimeout(function(){

    // console.log(`${pilihanPlayer} vs ${pilihanComputer} = ${hasil}`);
    // putar();

        // const imgComputer = document.querySelector(".img-computer");
        // imgComputer.setAttribute("src",`img/${pilihanComputer}.png`);

        
        info.innerHTML = hasil;
        info.classList.add("win");

    

    // menampilkan pilihan bg komputer 
    if(computerImg[0].className.split(" ")[0]==pilihanComputer){
        computerImg[1].classList.remove("bg-trans")
        computerImg[2].classList.remove("bg-trans")
        computerImg[0].classList.add("bg-trans")
    }else if(computerImg[1].className.split(" ")[0]==pilihanComputer){
        computerImg[0].classList.remove("bg-trans")
        computerImg[2].classList.remove("bg-trans")
        computerImg[1].classList.add("bg-trans")
    }else if(computerImg[2].className.split(" ")[0]==pilihanComputer){
        computerImg[0].classList.remove("bg-trans")
        computerImg[1].classList.remove("bg-trans")
        computerImg[2].classList.add("bg-trans")
    }
    },1000)
})




const refresh = document.querySelector(".refresh")
refresh.addEventListener("click",function (){
    computerImg.forEach(function(e){
       e.classList.remove("bg-trans");
    })

    pilihan.forEach(function(e){
        e.classList.remove("bg-trans");
    })

    info.classList.remove("win");
    info.innerHTML="VS";

})