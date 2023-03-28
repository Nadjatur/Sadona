function myFunction() {
    document.getElementById("dropdown-content").classList.toggle("show");
  }

  function showDrop() {
    document.getElementById("menu").classList.toggle("menu_show");
  }


var i=1;
  function photoOne(){
    i=1;
    document.getElementById('hero_im').style.backgroundImage = "url('assets/920.png')";
    document.getElementById('hero_im').style.objectFit= "cover";
  }

  function photoTwo(){
    i=2;
    document.getElementById('hero_im').style.backgroundImage = "url('assets/17657126.png')";
    document.getElementById('hero_im').style.backgroundSize= "cover";
  }

  function photoThree(){
    i=3;
    document.getElementById('hero_im').style.backgroundImage = "url('assets/3118774.png')";
    document.getElementById('hero_im').style.backgroundSize= "cover";
  }

  function photoFour(){
    i=4;
    document.getElementById('hero_im').style.backgroundImage= "url('assets/Cezanne-Stylign-Line.png')";
    document.getElementById('hero_im').style.backgroundSize= "cover";
  }


  function next(){
    if(i>=1 && i<4){
      i++;
      if(i==1){document.getElementById('hero_im').style.backgroundImage = "url('assets/920.png')";
      document.getElementById('hero_im').style.objectFit= "cover";}
      else if(i==2){document.getElementById('hero_im').style.backgroundImage = "url('assets/17657126.png')";
      document.getElementById('hero_im').style.backgroundSize= "cover";}
      else if(i==3){document.getElementById('hero_im').style.backgroundImage = "url('assets/3118774.png')";
      document.getElementById('hero_im').style.backgroundSize= "cover";}
      else if(i==4){document.getElementById('hero_im').style.backgroundImage= "url('assets/Cezanne-Stylign-Line.png')";
      document.getElementById('hero_im').style.backgroundSize= "cover";}
      console.log(i);
    }
  }
  function prev(){
    if(i<=4 && i>1){
    i--;
    if(i==1){document.getElementById('hero_im').style.backgroundImage = "url('assets/920.png')";
    document.getElementById('hero_im').style.objectFit= "cover";}
      else if(i==2){document.getElementById('hero_im').style.backgroundImage = "url('assets/17657126.png')";
      document.getElementById('hero_im').style.backgroundSize= "cover";}
      else if(i==3){document.getElementById('hero_im').style.backgroundImage = "url('assets/3118774.png')";
      document.getElementById('hero_im').style.backgroundSize= "cover";}
      else if(i==4){document.getElementById('hero_im').style.backgroundImage= "url('assets/Cezanne-Stylign-Line.png')";
      document.getElementById('hero_im').style.backgroundSize= "cover";}
    console.log(i);
}
  }


