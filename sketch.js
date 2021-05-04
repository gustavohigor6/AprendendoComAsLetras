var x = 205, y = 217, largura = 480, altura = 45, opcao = 1, tela = 0;

let plan1, plan2, plan3, caracol1, myFont, btnVoltar, prof2, ft1, ft2, casa, triangulo;

function preload()
{
  plan1 = loadImage('plan3-1.jpg');
  caracol1 = loadImage('caracol1.jpg');
  myFont = loadFont('Bouncy-PERSONAL_USE_ONLY.otf');
  btnVoltar = loadImage('btnVoltar.jpg');
  prof2 = loadImage('prof3.jpg');
  ft1 = loadImage('ft_mykaelly2.jpg');
  ft2 = loadImage('ft_gustavo.jpg');
  casa = loadImage('casa.jpg');
  plan2 = loadImage('planjogo1.jpg');
  plan3 = loadImage('planjogo2.jpg');
  peteca = loadImage('peteca1.jpg');
  triangulo = loadImage('triangulo2.jpg');
  retangulo = loadImage('retangulo1.jpg');
  coelho = loadImage('coelho1.jpg');
  fundo = loadImage('fundo4.png');
}

function Telamenu()
{
  image(plan1, 0, 0);
  //Configuração dos textos
  textFont(myFont);
  textAlign(CENTER);
  fill(20, 40, 130);
  
  //Título
  textSize(48);
  text("Aprendendo com as letras", 400, 120);
  
  //Iniciar
  textFont(myFont);
  textSize(32);
  text("Iniciar", 400, 250);
  
  //Informações + Instruções
  text("Informações + Instruções", 400, 370);
  
  //Créditos
  text("Créditos", 400, 490);
}


function VisRet()
{
  if(mouseX > x && mouseX < x + largura && mouseY > y && mouseY < y + altura)
  { 
    stroke(100);
    noFill();
    rect(170, 217, largura, altura, 15);
    if (mouseIsPressed)
      {
        if (mouseButton == LEFT)
          {
            tela = 1;
          }
      }
  }
  if (mouseX > 205 && mouseX < 325 + largura && mouseY > 337 && mouseY < 337 + altura)
    {
      stroke(100);
      noFill();
      rect(170, 337, largura, altura, 15);
      if (mouseIsPressed)
      {
        if (mouseButton == LEFT)
          {
            tela = 2;
          }
      }
    }
  if (mouseX > 205 && mouseX < 325 + largura && mouseY > 457 && mouseY < 457 + altura)
    {
      stroke(100);
      noFill();
      rect(170, 457, largura, altura, 15);
      if (mouseIsPressed)
      {
        if (mouseButton == LEFT)
          {
            tela = 3;
          }
      }
    }
}

function TelaInstrucoes()
{
  //Título
  background(240);
  textAlign(CENTER);
  fill(20, 40, 130);
  textSize(44);
  textFont(myFont);
  text('Informações e Instruções', 440, 80);
  

  //Botão Voltar e imagem (Instruções)
  image(btnVoltar,10, 10);
  image(prof2, 120, 140);
  if(mouseX >10 && mouseX < 10 +100 && mouseY > 10 && mouseY < 10 + 100)
  {
      
    stroke(20)
    noFill()
    rect(10,10,100,100,20)
      if(mouseIsPressed)
      {
        if(mouseButton == LEFT)
        {
          tela = 0;
        }
      }
  }
}

function TelaCreditos()
{
  //Configurações das imagens
  background(240);
  image(plan1, 0, 0);
  image(ft1, 70, 130);
  image(ft2, 70, 370);
  
  //Configurações do título
  textAlign(CENTER);
  fill(20, 40, 130);
  textSize(44);
  textFont(myFont);
  text('Créditos', 420, 80);
  
  //Configurações dos textos
  //Mykaelly e Gustavo
  textAlign(CENTER);
  fill(20, 40, 130);
  textSize(20);
  textFont(myFont);
  text('Orientadora: Mykaelly Aryane Gomes Freitas', 490, 170);
  text('Graduação em Pedagogia (sétimo período)', 490, 205);
  text('Universidade Potiguar do Rio Grande do Norte\n(UNP)', 505, 240);
  text('Aluno/DEV: Gustavo Higor da Câmara Paulino', 490, 410);
  text('Bacharelado em Ciências e Tecnologia', 490, 445);
  text('Universidade Federal do Rio Grande do Norte \n(UFRN)', 505, 480);
  
  //Configuração do botão voltar
  image(btnVoltar,10, 10);
  if(mouseX >10 && mouseX < 10 +100 && mouseY > 10 && mouseY < 10 + 100)
  {  
    stroke(20)
    noFill()
    rect(10,10,100,100,20)
      if(mouseIsPressed)
      {
        if(mouseButton == LEFT)
        {
          tela = 0;
        }
      }
  }
}

/*Nível 1---> De Tela Inicial (1) até Tela1p4 (1.4)
  Nível 2---> De Tela4 (4) até Tela4p6 (4.6)
  Nível 3---> De Tela5 (5) até Tela5p9 (5.9)
  Nível 4---> De Tela6 (6) até Tela6p
  Nível 5---> De Tela7 (7) até Tela7p6 (7.6)*/

function TelaInicial()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(casa, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  
  //Título
  textSize(36);
  text("Encontre a primeira letra da imagem: ", 405, 62);
  stroke(70);
  noFill();
  rect(10, 27, 780, 50, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(450, 380, 60, 3);
  rect(530, 380, 60, 3);
  rect(610, 380, 60, 3);
  rect(690, 380, 60, 3);
  
  //Configurações do teclado de letras 3x3
  stroke(0, 0, 128);
  noFill();
  rect(43, 112, 330, 270, 15);
  stroke(0, 0, 0);
  noFill();
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(54, 210, 100, 70, 15);//4º
  rect(158, 210, 100, 70, 15);//5º
  rect(262, 210, 100, 70, 15);//6º
  rect(54, 296, 100, 70, 15);//7º
  rect(158, 296, 100, 70, 15);//8º
  rect(262, 296, 100, 70, 15);//9º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('H', 105, 170);
  text('S', 105, 256);
  text('J', 105, 342);
  text('A', 210, 170);
  text('C', 210, 256);
  text('L', 210, 342);
  text('I', 315, 170);
  text('E', 315, 256);
  text('D', 315, 342);
  
  //Configurações da mudança do rect
  if (mouseX > 158 && mouseX < 258 && mouseY > 210 && mouseY < 280)
      {
        stroke(220, 220, 220);
        fill(0, 0, 0);
        rect(158, 210, 100, 70, 15);//5º
        textFont(myFont);
        fill(220, 220, 220);
        textSize(46);
        text('C', 210, 256);
      }
  
  //Configurações das resposta
  //textFont(myFont);
  //fill(105, 105, 105);
  //textSize(50);
  /*if (mouseX > 158 && mouseX < 258 && mouseY > 210 && mouseY < 280)
    if (mouseIsPressed)
      if (mouseButton == LEFT)
      {
        tela = 1.1;
      }*/
  //text('C', 480, 367);
  //text('A', 560, 367);
  //text('S', 640, 367);
  //text('A', 720, 367);
  stroke(128, 0, 0);
  fill(255, 0, 0);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(250, 250, 250);
  text("primeiro nível", 605, 120);
}

function Tela1p1()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(casa, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  
  //Título
  textSize(36);
  text("Encontre a segunda letra da imagem: ", 405, 62);
  stroke(70);
  noFill();
  rect(10, 27, 780, 50, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(450, 380, 60, 3);
  rect(530, 380, 60, 3);
  rect(610, 380, 60, 3);
  rect(690, 380, 60, 3);
  
  //Configurações do teclado de letras 3x3
  stroke(0, 0, 128);
  noFill();
  rect(43, 112, 330, 270, 15);
  stroke(0, 0, 0);
  noFill();
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(54, 210, 100, 70, 15);//4º
  rect(158, 210, 100, 70, 15);//5º
  rect(262, 210, 100, 70, 15);//6º
  rect(54, 296, 100, 70, 15);//7º
  rect(158, 296, 100, 70, 15);//8º
  rect(262, 296, 100, 70, 15);//9º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('H', 105, 170);
  text('S', 105, 256);
  text('J', 105, 342);
  text('A', 210, 170);
  text('C', 210, 256);
  text('L', 210, 342);
  text('I', 315, 170);
  text('E', 315, 256);
  text('D', 315, 342);
  
  //Configurações das resposta
  //textFont(myFont);
  //fill(105, 105, 105);
  //textSize(50);
  /*if (mouseX > 158 && mouseX < 258 && mouseY > 210 && mouseY < 280)
    if (mouseIsPressed)
      if (mouseButton == LEFT)
      {
        tela = 1.1;
      }
  if (mouseX > 158 && mouseX < 258 && mouseY > 124 && mouseY < 194)
    if (mouseIsPressed)
      if (mouseButton == LEFT)
      {
        tela = 1.2;
      }*/
  text('C', 480, 367);
  //text('A', 560, 367);
  //text('S', 640, 367);
  //text('A', 720, 367);
  if (mouseX > 158 && mouseX < 258 && mouseY > 124 && mouseY < 194)
    {
      stroke(220, 220, 220);
      fill(0, 0, 0);
      rect(158, 124, 100, 70, 15);//2º
      textFont(myFont);
      fill(220, 220, 220);
      textSize(46);
      text('A', 210, 170);
    }
  stroke(128, 0, 0);
  fill(255, 0, 0);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(250, 250, 250);
  text("primeiro nível", 605, 120);
}

function Tela1p2()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(casa, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  
  //Título
  textSize(36);
  text("Encontre a terceira letra da imagem: ", 405, 62);
  stroke(70);
  noFill();
  rect(10, 27, 780, 50, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(450, 380, 60, 3);
  rect(530, 380, 60, 3);
  rect(610, 380, 60, 3);
  rect(690, 380, 60, 3);
  
  //Configurações do teclado de letras 3x3
  stroke(0, 0, 128);
  noFill();
  rect(43, 112, 330, 270, 15);
  stroke(0, 0, 0);
  noFill();
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(54, 210, 100, 70, 15);//4º
  rect(158, 210, 100, 70, 15);//5º
  rect(262, 210, 100, 70, 15);//6º
  rect(54, 296, 100, 70, 15);//7º
  rect(158, 296, 100, 70, 15);//8º
  rect(262, 296, 100, 70, 15);//9º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('H', 105, 170);
  text('S', 105, 256);
  text('J', 105, 342);
  text('A', 210, 170);
  text('C', 210, 256);
  text('L', 210, 342);
  text('I', 315, 170);
  text('E', 315, 256);
  text('D', 315, 342);
  
  //Configurações das resposta
  //textFont(myFont);
  //fill(105, 105, 105);
  //textSize(50);
  /*if (mouseX > 158 && mouseX < 258 && mouseY > 210 && mouseY < 280)
    if (mouseIsPressed)
      if (mouseButton == LEFT)
      {
        tela = 1.3;
      }*/
  /*if (mouseX > 158 && mouseX < 258 && mouseY > 124 && mouseY < 194)
    if (mouseIsPressed)
      if (mouseButton == LEFT)
      {
        tela = 1.2;
      }*/
  text('C', 480, 367);
  text('A', 560, 367);
  //text('S', 640, 367);
  //text('A', 720, 367);
  if (mouseX > 54 && mouseX < 158 && mouseY > 210 && mouseY < 280)
    {
      stroke(220, 220, 220);
      fill(0, 0, 0);
      rect(54, 210, 100, 70, 15);//4º
      textFont(myFont);
      fill(220, 220, 220);
      textSize(46);
      text('S', 105, 256);
    }
  stroke(128, 0, 0);
  fill(255, 0, 0);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(250, 250, 250);
  text("primeiro nível", 605, 120);
}

function Tela1p3()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(casa, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  
  //Título
  textSize(36);
  text("Encontre a quarta letra da imagem: ", 405, 62);
  stroke(70);
  noFill();
  rect(10, 27, 780, 50, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(450, 380, 60, 3);
  rect(530, 380, 60, 3);
  rect(610, 380, 60, 3);
  rect(690, 380, 60, 3);
  
  //Configurações do teclado de letras 3x3
  stroke(0, 0, 128);
  noFill();
  rect(43, 112, 330, 270, 15);
  stroke(0, 0, 0);
  noFill();
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(54, 210, 100, 70, 15);//4º
  rect(158, 210, 100, 70, 15);//5º
  rect(262, 210, 100, 70, 15);//6º
  rect(54, 296, 100, 70, 15);//7º
  rect(158, 296, 100, 70, 15);//8º
  rect(262, 296, 100, 70, 15);//9º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('H', 105, 170);
  text('S', 105, 256);
  text('J', 105, 342);
  text('A', 210, 170);
  text('C', 210, 256);
  text('L', 210, 342);
  text('I', 315, 170);
  text('E', 315, 256);
  text('D', 315, 342);
  
  //Configurações das resposta
  //textFont(myFont);
  //fill(105, 105, 105);
  //textSize(50);
  /*if (mouseX > 158 && mouseX < 258 && mouseY > 124 && mouseY < 194)
    if (mouseIsPressed)
      if (mouseButton == LEFT)
      {
        tela = 1.2;
      }*/
  text('C', 480, 367);
  text('A', 560, 367);
  text('S', 640, 367);
  //text('A', 720, 367);
  if (mouseX > 158 && mouseX < 257 && mouseY > 124 && mouseY < 194)
    {
      stroke(220, 220, 220);
      fill(0, 0, 0);
      rect(158, 124, 100, 70, 15);//2º
      textFont(myFont);
      fill(220, 220, 220);
      textSize(46);
      text('A', 210, 170);
    }
  stroke(128, 0, 0);
  fill(255, 0, 0);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(250, 250, 250);
  text("primeiro nível", 605, 120);
}

function Tela1p4()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(casa, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  
  //Título
  textSize(54);
  fill(0,128,0);
  text("PARABÉNS!!", 405, 62);
  stroke(0,128,0);
  noFill();
  rect(215, 13, 370, 63, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(450, 380, 60, 3);
  rect(530, 380, 60, 3);
  rect(610, 380, 60, 3);
  rect(690, 380, 60, 3);
  
  //Configurações do teclado de letras 3x3
  stroke(0, 0, 128);
  noFill();
  rect(43, 112, 330, 270, 15);
  stroke(0, 0, 0);
  noFill();
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(54, 210, 100, 70, 15);//4º
  rect(158, 210, 100, 70, 15);//5º
  rect(262, 210, 100, 70, 15);//6º
  rect(54, 296, 100, 70, 15);//7º
  rect(158, 296, 100, 70, 15);//8º
  rect(262, 296, 100, 70, 15);//9º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('H', 105, 170);
  text('S', 105, 256);
  text('J', 105, 342);
  text('A', 210, 170);
  text('C', 210, 256);
  text('L', 210, 342);
  text('I', 315, 170);
  text('E', 315, 256);
  text('D', 315, 342);
  
  //Configurações das resposta
  //textFont(myFont);
  //fill(105, 105, 105);
  //textSize(50);
  /*if (mouseX > 158 && mouseX < 258 && mouseY > 124 && mouseY < 194)
    if (mouseIsPressed)
      if (mouseButton == LEFT)
      {
        tela = 1.2;
      }*/
  text('C', 480, 367);
  text('A', 560, 367);
  text('S', 640, 367);
  text('A', 720, 367);
  
  //Configurações do texto final
  stroke(0, 0, 0);
  fill(0, 100, 0);
  rect(110, 395, 380, 55, 15);
  textFont(myFont);
  textSize(42);
  fill(220, 220, 220);
  text('Nível concluido', 295, 435);
  
  //Configurações do botão próximo
  stroke(0, 0, 0);
  noFill();
  rect(540, 413, 200, 57, 15);
  textFont(myFont);
  textSize(40);
  fill(0, 0, 128);
  text('PRóXIMO', 640, 455);
  //Mudaça de cor do botao próximo
  if (mouseX > 540 && mouseX < 740 && mouseY > 413 && mouseY < 470)
      {
        stroke(250, 250, 250);
        fill(28, 28, 28);
        rect(540, 413, 200, 57, 15);
        textFont(myFont);
        textSize(40);
        fill(220, 220, 220);
        text('PRóXIMO', 640, 455);
      }
  stroke(128, 0, 0);
  fill(255, 0, 0);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(250, 250, 250);
  text("primeiro nível", 605, 120);
}

function Tela4()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(peteca, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  //Título
  textSize(36);
  text("Encontre a primeira letra da imagem: ", 405, 62);
  stroke(70);
  noFill();
  rect(10, 27, 780, 50, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(420, 440, 45, 3);
  rect(480, 440, 45, 3);
  rect(540, 440, 45, 3);
  rect(600, 440, 45, 3);
  rect(660, 440, 45, 3);
  rect(720, 440, 45, 3);
  
  //Configurações do teclado de letras 3x4
  stroke(0, 0, 128);
  noFill();
  rect(50, 120, 421, 250, 15);
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(366, 124, 100, 70, 15);//4º
  rect(54, 210, 100, 70, 15);//5º
  rect(158, 210, 100, 70, 15);//6º
  rect(262, 210, 100, 70, 15);//7º
  rect(366, 210, 100, 70, 15);//8º
  rect(54, 296, 100, 70, 15);//9º
  rect(158, 296, 100, 70, 15);//10º
  rect(262, 296, 100, 70, 15);//11º
  rect(366, 296, 100, 70, 15);//12º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('D', 105, 170);
  text('P', 105, 256);
  text('T', 105, 342);
  text('O', 210, 170);
  text('G', 210, 256);
  text('B', 210, 342);
  text('F', 315, 170);
  text('C', 315, 256);
  text('I', 315, 342);
  text('E', 420, 170);
  text('J', 420, 256);
  text('A', 420, 342);

  //Configurações das resposta
  /*textFont(myFont);
  textSize(50);
  text('P', 445, 427);
  text('E', 505, 427);
  text('T', 565, 427);
  text('E', 625, 427);
  text('C', 685, 427);
  text('A', 745, 427);*/
  
  //Configurações do título do nível
  stroke(128, 0, 0);
  fill(255,215,0);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(0, 0, 0);
  text("segundo nível", 605, 120); 
  //Configurações da mudança do rect
  if (mouseX > 54 && mouseX < 154 && mouseY > 210 && mouseY < 280)
    {
      stroke(0, 0, 0);
      fill(0, 0, 0);
      rect(54, 210, 100, 70, 15);//5º
      textFont(myFont);
      fill(220, 220, 220);
      textSize(46);
      text('P', 105, 256);
    }
  
}

function Tela4p1()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(peteca, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  //Título
  textSize(36);
  text("Encontre a segunda letra da imagem: ", 405, 62);
  stroke(70);
  noFill();
  rect(10, 27, 780, 50, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(420, 440, 45, 3);
  rect(480, 440, 45, 3);
  rect(540, 440, 45, 3);
  rect(600, 440, 45, 3);
  rect(660, 440, 45, 3);
  rect(720, 440, 45, 3);
  
  //Configurações do teclado de letras 3x4
  stroke(0, 0, 128);
  noFill();
  rect(50, 120, 421, 250, 15);
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(366, 124, 100, 70, 15);//4º
  rect(54, 210, 100, 70, 15);//5º
  rect(158, 210, 100, 70, 15);//6º
  rect(262, 210, 100, 70, 15);//7º
  rect(366, 210, 100, 70, 15);//8º
  rect(54, 296, 100, 70, 15);//9º
  rect(158, 296, 100, 70, 15);//10º
  rect(262, 296, 100, 70, 15);//11º
  rect(366, 296, 100, 70, 15);//12º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('D', 105, 170);
  text('P', 105, 256);
  text('T', 105, 342);
  text('O', 210, 170);
  text('G', 210, 256);
  text('B', 210, 342);
  text('F', 315, 170);
  text('C', 315, 256);
  text('I', 315, 342);
  text('E', 420, 170);
  text('J', 420, 256);
  text('A', 420, 342);

  //Configurações das resposta
  textFont(myFont);
  textSize(50);
  text('P', 445, 427);
  /*text('E', 505, 427);
  text('T', 565, 427);
  text('E', 625, 427);
  text('C', 685, 427);
  text('A', 745, 427);*/
  
  //Configurações do título do nível
  stroke(128, 0, 0);
  fill(255,215,0);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(0, 0, 0);
  text("segundo nível", 605, 120); 
  //Configurações da mudança do rect
  if (mouseX > 366 && mouseX < 466 && mouseY > 124 && mouseY < 194)
    {
      stroke(0, 0, 0);
      fill(0, 0, 0);
      rect(366, 124, 100, 70, 15);//4º
      textFont(myFont);
      fill(220, 220, 220);
      textSize(46);
      text('E', 420, 170);
    }
  
}

function Tela4p2()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(peteca, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  //Título
  textSize(36);
  text("Encontre a terceira letra da imagem: ", 405, 62);
  stroke(70);
  noFill();
  rect(10, 27, 780, 50, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(420, 440, 45, 3);
  rect(480, 440, 45, 3);
  rect(540, 440, 45, 3);
  rect(600, 440, 45, 3);
  rect(660, 440, 45, 3);
  rect(720, 440, 45, 3);
  
  //Configurações do teclado de letras 3x4
  stroke(0, 0, 128);
  noFill();
  rect(50, 120, 421, 250, 15);
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(366, 124, 100, 70, 15);//4º
  rect(54, 210, 100, 70, 15);//5º
  rect(158, 210, 100, 70, 15);//6º
  rect(262, 210, 100, 70, 15);//7º
  rect(366, 210, 100, 70, 15);//8º
  rect(54, 296, 100, 70, 15);//9º
  rect(158, 296, 100, 70, 15);//10º
  rect(262, 296, 100, 70, 15);//11º
  rect(366, 296, 100, 70, 15);//12º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('D', 105, 170);
  text('P', 105, 256);
  text('T', 105, 342);
  text('O', 210, 170);
  text('G', 210, 256);
  text('B', 210, 342);
  text('F', 315, 170);
  text('C', 315, 256);
  text('I', 315, 342);
  text('E', 420, 170);
  text('J', 420, 256);
  text('A', 420, 342);

  //Configurações das resposta
  textFont(myFont);
  textSize(50);
  text('P', 445, 427);
  text('E', 505, 427);
  /*text('T', 565, 427);
  text('E', 625, 427);
  text('C', 685, 427);
  text('A', 745, 427);*/
  
  //Configurações do título do nível
  stroke(128, 0, 0);
  fill(255,215,0);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(0, 0, 0);
  text("segundo nível", 605, 120); 
  //Configurações da mudança do rect
  if (mouseX > 54 && mouseX < 154 && mouseY > 296 && mouseY < 366)
    {
      stroke(0, 0, 0);
      fill(0, 0, 0);
      rect(54, 296, 100, 70, 15);//9º
      textFont(myFont);
      fill(220, 220, 220);
      textSize(46);
      text('T', 105, 342);
    }
  
}

function Tela4p3()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(peteca, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  //Título
  textSize(36);
  text("Encontre a quarta letra da imagem: ", 405, 62);
  stroke(70);
  noFill();
  rect(10, 27, 780, 50, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(420, 440, 45, 3);
  rect(480, 440, 45, 3);
  rect(540, 440, 45, 3);
  rect(600, 440, 45, 3);
  rect(660, 440, 45, 3);
  rect(720, 440, 45, 3);
  
  //Configurações do teclado de letras 3x4
  stroke(0, 0, 128);
  noFill();
  rect(50, 120, 421, 250, 15);
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(366, 124, 100, 70, 15);//4º
  rect(54, 210, 100, 70, 15);//5º
  rect(158, 210, 100, 70, 15);//6º
  rect(262, 210, 100, 70, 15);//7º
  rect(366, 210, 100, 70, 15);//8º
  rect(54, 296, 100, 70, 15);//9º
  rect(158, 296, 100, 70, 15);//10º
  rect(262, 296, 100, 70, 15);//11º
  rect(366, 296, 100, 70, 15);//12º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('D', 105, 170);
  text('P', 105, 256);
  text('T', 105, 342);
  text('O', 210, 170);
  text('G', 210, 256);
  text('B', 210, 342);
  text('F', 315, 170);
  text('C', 315, 256);
  text('I', 315, 342);
  text('E', 420, 170);
  text('J', 420, 256);
  text('A', 420, 342);

  //Configurações das resposta
  textFont(myFont);
  textSize(50);
  text('P', 445, 427);
  text('E', 505, 427);
  text('T', 565, 427);
  /*text('E', 625, 427);
  text('C', 685, 427);
  text('A', 745, 427);*/
  
  //Configurações do título do nível
  stroke(128, 0, 0);
  fill(255,215,0);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(0, 0, 0);
  text("segundo nível", 605, 120); 
  //Configurações da mudança do rect
  if (mouseX > 366 && mouseX < 466 && mouseY > 124 && mouseY < 194)
    {
      stroke(0, 0, 0);
      fill(0, 0, 0);
      rect(366, 124, 100, 70, 15);//4º
      textFont(myFont);
      fill(220, 220, 220);
      textSize(46);
      text('E', 420, 170);
    }
   
}

function Tela4p4()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(peteca, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  //Título
  textSize(36);
  text("Encontre a quinta letra da imagem: ", 405, 62);
  stroke(70);
  noFill();
  rect(10, 27, 780, 50, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(420, 440, 45, 3);
  rect(480, 440, 45, 3);
  rect(540, 440, 45, 3);
  rect(600, 440, 45, 3);
  rect(660, 440, 45, 3);
  rect(720, 440, 45, 3);
  
  //Configurações do teclado de letras 3x4
  stroke(0, 0, 128);
  noFill();
  rect(50, 120, 421, 250, 15);
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(366, 124, 100, 70, 15);//4º
  rect(54, 210, 100, 70, 15);//5º
  rect(158, 210, 100, 70, 15);//6º
  rect(262, 210, 100, 70, 15);//7º
  rect(366, 210, 100, 70, 15);//8º
  rect(54, 296, 100, 70, 15);//9º
  rect(158, 296, 100, 70, 15);//10º
  rect(262, 296, 100, 70, 15);//11º
  rect(366, 296, 100, 70, 15);//12º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('D', 105, 170);
  text('P', 105, 256);
  text('T', 105, 342);
  text('O', 210, 170);
  text('G', 210, 256);
  text('B', 210, 342);
  text('F', 315, 170);
  text('C', 315, 256);
  text('I', 315, 342);
  text('E', 420, 170);
  text('J', 420, 256);
  text('A', 420, 342);

  //Configurações das resposta
  textFont(myFont);
  textSize(50);
  text('P', 445, 427);
  text('E', 505, 427);
  text('T', 565, 427);
  text('E', 625, 427);
  /*text('C', 685, 427);
  text('A', 745, 427);*/
  
  //Configurações do título do nível
  stroke(128, 0, 0);
  fill(255,215,0);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(0, 0, 0);
  text("segundo nível", 605, 120); 
  //Configurações da mudança do rect
  if (mouseX > 262 && mouseX < 362 && mouseY > 210 && mouseY < 280)
    {
      stroke(0, 0, 0);
      fill(0, 0, 0);
      rect(262, 210, 100, 70, 15);//7º
      textFont(myFont);
      fill(220, 220, 220);
      textSize(46);
      text('C', 315, 256);
    }
   
}

function Tela4p5()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(peteca, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  //Título
  textSize(36);
  text("Encontre a sexta letra da imagem: ", 405, 62);
  stroke(70);
  noFill();
  rect(10, 27, 780, 50, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(420, 440, 45, 3);
  rect(480, 440, 45, 3);
  rect(540, 440, 45, 3);
  rect(600, 440, 45, 3);
  rect(660, 440, 45, 3);
  rect(720, 440, 45, 3);
  
  //Configurações do teclado de letras 3x4
  stroke(0, 0, 128);
  noFill();
  rect(50, 120, 421, 250, 15);
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(366, 124, 100, 70, 15);//4º
  rect(54, 210, 100, 70, 15);//5º
  rect(158, 210, 100, 70, 15);//6º
  rect(262, 210, 100, 70, 15);//7º
  rect(366, 210, 100, 70, 15);//8º
  rect(54, 296, 100, 70, 15);//9º
  rect(158, 296, 100, 70, 15);//10º
  rect(262, 296, 100, 70, 15);//11º
  rect(366, 296, 100, 70, 15);//12º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('D', 105, 170);
  text('P', 105, 256);
  text('T', 105, 342);
  text('O', 210, 170);
  text('G', 210, 256);
  text('B', 210, 342);
  text('F', 315, 170);
  text('C', 315, 256);
  text('I', 315, 342);
  text('E', 420, 170);
  text('J', 420, 256);
  text('A', 420, 342);

  //Configurações das resposta
  textFont(myFont);
  textSize(50);
  text('P', 445, 427);
  text('E', 505, 427);
  text('T', 565, 427);
  text('E', 625, 427);
  text('C', 685, 427);
  //text('A', 745, 427);
  
  //Configurações do título do nível
  stroke(128, 0, 0);
  fill(255,215,0);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(0, 0, 0);
  text("segundo nível", 605, 120); 
  //Configurações da mudança do rect
  if (mouseX > 366 && mouseX < 466 && mouseY > 296 && mouseY < 366)
    {
      stroke(0, 0, 0);
      fill(0, 0, 0);
      rect(366, 296, 100, 70, 15);//12º
      textFont(myFont);
      fill(220, 220, 220);
      textSize(46);
      text('A', 420, 342);
    }
  
}

function Tela4p6()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(peteca, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  //Título
  textSize(54);
  fill(0,128,0);
  text("PARABÉNS!!", 405, 62);
  stroke(0,128,0);
  noFill();
  rect(215, 13, 370, 63, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(420, 440, 45, 3);
  rect(480, 440, 45, 3);
  rect(540, 440, 45, 3);
  rect(600, 440, 45, 3);
  rect(660, 440, 45, 3);
  rect(720, 440, 45, 3);
  
  //Configurações do teclado de letras 3x4
  stroke(0, 0, 128);
  noFill();
  rect(50, 120, 421, 250, 15);
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(366, 124, 100, 70, 15);//4º
  rect(54, 210, 100, 70, 15);//5º
  rect(158, 210, 100, 70, 15);//6º
  rect(262, 210, 100, 70, 15);//7º
  rect(366, 210, 100, 70, 15);//8º
  rect(54, 296, 100, 70, 15);//9º
  rect(158, 296, 100, 70, 15);//10º
  rect(262, 296, 100, 70, 15);//11º
  rect(366, 296, 100, 70, 15);//12º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('D', 105, 170);
  text('P', 105, 256);
  text('T', 105, 342);
  text('O', 210, 170);
  text('G', 210, 256);
  text('B', 210, 342);
  text('F', 315, 170);
  text('C', 315, 256);
  text('I', 315, 342);
  text('E', 420, 170);
  text('J', 420, 256);
  text('A', 420, 342);

  //Configurações das resposta
  textFont(myFont);
  textSize(50);
  text('P', 445, 427);
  text('E', 505, 427);
  text('T', 565, 427);
  text('E', 625, 427);
  text('C', 685, 427);
  text('A', 745, 427);
  
  //Configurações do título do nível
  stroke(128, 0, 0);
  fill(255,215,0);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(0, 0, 0);
  text("segundo nível", 605, 120);
  
  //Configurações do texto final
  stroke(0, 0, 0);
  fill(0, 100, 0);
  rect(110, 450, 380, 55, 15);
  textFont(myFont);
  textSize(42);
  fill(220, 220, 220);
  text('Nível concluido', 295, 490);
  
  //Configurações do botão próximo
  stroke(0, 0, 0);
  noFill();
  rect(540, 453, 200, 57, 15);
  textFont(myFont);
  textSize(40);
  fill(0, 0, 128);
  text('PRóXIMO', 640, 495);
  //Mudaça de cor do botao próximo
  if (mouseX > 540 && mouseX < 740 && mouseY > 453 && mouseY < 510)
      {
        stroke(250, 250, 250);
        fill(28, 28, 28);
        rect(540, 453, 200, 57, 15);
        textFont(myFont);
        textSize(40);
        fill(220, 220, 220);
        text('PRóXIMO', 640, 495);
      }
  //Configurações da mudança do rect
  /*if (mouseX > 366 && mouseX < 466 && mouseY > 296 && mouseY < 366)
    {
      stroke(0, 0, 0);
      fill(0, 0, 0);
      rect(366, 296, 100, 70, 15);//12º
      textFont(myFont);
      fill(220, 220, 220);
      textSize(46);
      text('A', 420, 342);
    }
  */
}

function Tela5()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(triangulo, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  //Título
  textSize(32);
  text("Encontre as letras da forma geométrica: ", 405, 62);
  stroke(70);
  noFill();
  rect(10, 27, 780, 50, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(360, 440, 45, 3);
  rect(300, 440, 45, 3);
  rect(240, 440, 45, 3);
  rect(420, 440, 45, 3);
  rect(480, 440, 45, 3);
  rect(540, 440, 45, 3);
  rect(600, 440, 45, 3);
  rect(660, 440, 45, 3);
  rect(720, 440, 45, 3);
  
  //Configurações do teclado de letras 3x4
  stroke(0, 0, 128);
  noFill();
  rect(50, 120, 421, 250, 15);
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(366, 124, 100, 70, 15);//4º
  rect(54, 210, 100, 70, 15);//5º
  rect(158, 210, 100, 70, 15);//6º
  rect(262, 210, 100, 70, 15);//7º
  rect(366, 210, 100, 70, 15);//8º
  rect(54, 296, 100, 70, 15);//9º
  rect(158, 296, 100, 70, 15);//10º
  rect(262, 296, 100, 70, 15);//11º
  rect(366, 296, 100, 70, 15);//12º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('Â', 105, 170);
  text('O', 105, 256);
  text('T', 105, 342);
  text('R', 210, 170);
  text('G', 210, 256);
  text('B', 210, 342);
  text('N', 315, 170);
  text('L', 315, 256);
  text('I', 315, 342);
  text('U', 420, 170);
  text('J', 420, 256);
  text('A', 420, 342);

  //Configurações das resposta
  /*textFont(myFont);
  textSize(50);
  text('T', 265, 427);
  text('R', 325, 427);
  text('I', 385, 427);
  text('Â', 445, 427);
  text('N', 505, 427);
  text('G', 565, 427);
  text('U', 625, 427);
  text('L', 685, 427);
  text('O', 745, 427);*/
  
  //Configurações do título do nível
  stroke(0, 0, 0);
  fill(154,205,50);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(0, 0, 0);
  text("terceiro nível", 605, 120); 
  
  //Configurações da mudança do rect
  if (mouseX > 54 && mouseX < 154 && mouseY > 296 && mouseY < 366)
    {
      stroke(0, 0, 0);
      fill(0, 0, 0);
      rect(54, 296, 100, 70, 15);//9º
      textFont(myFont);
      fill(220, 220, 220);
      textSize(46);
      text('T', 105, 342);
    }
}

function Tela5p1()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(triangulo, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  //Título
  textSize(32);
  text("Encontre as letras da forma geométrica: ", 405, 62);
  stroke(70);
  noFill();
  rect(10, 27, 780, 50, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(360, 440, 45, 3);
  rect(300, 440, 45, 3);
  rect(240, 440, 45, 3);
  rect(420, 440, 45, 3);
  rect(480, 440, 45, 3);
  rect(540, 440, 45, 3);
  rect(600, 440, 45, 3);
  rect(660, 440, 45, 3);
  rect(720, 440, 45, 3);
  
  //Configurações do teclado de letras 3x4
  stroke(0, 0, 128);
  noFill();
  rect(50, 120, 421, 250, 15);
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(366, 124, 100, 70, 15);//4º
  rect(54, 210, 100, 70, 15);//5º
  rect(158, 210, 100, 70, 15);//6º
  rect(262, 210, 100, 70, 15);//7º
  rect(366, 210, 100, 70, 15);//8º
  rect(54, 296, 100, 70, 15);//9º
  rect(158, 296, 100, 70, 15);//10º
  rect(262, 296, 100, 70, 15);//11º
  rect(366, 296, 100, 70, 15);//12º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('Â', 105, 170);
  text('O', 105, 256);
  text('T', 105, 342);
  text('R', 210, 170);
  text('G', 210, 256);
  text('B', 210, 342);
  text('N', 315, 170);
  text('L', 315, 256);
  text('I', 315, 342);
  text('U', 420, 170);
  text('J', 420, 256);
  text('A', 420, 342);

  //Configurações das resposta
  textFont(myFont);
  textSize(50);
  text('T', 265, 427);
  /*text('R', 325, 427);
  text('I', 385, 427);
  text('Â', 445, 427);
  text('N', 505, 427);
  text('G', 565, 427);
  text('U', 625, 427);
  text('L', 685, 427);
  text('O', 745, 427);*/
  
  //Configurações do título do nível
  stroke(0, 0, 0);
  fill(154,205,50);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(0, 0, 0);
  text("terceiro nível", 605, 120); 
  
  //Configurações da mudança do rect
  if (mouseX > 158 && mouseX < 258 && mouseY > 124 && mouseY < 194)
    {
      stroke(0, 0, 0);
      fill(0, 0, 0);
      rect(158, 124, 100, 70, 15);//2º
      textFont(myFont);
      fill(220, 220, 220);
      textSize(46);
      text('R', 210, 170);
    }
}

function Tela5p2()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(triangulo, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  //Título
  textSize(32);
  text("Encontre as letras da forma geométrica: ", 405, 62);
  stroke(70);
  noFill();
  rect(10, 27, 780, 50, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(360, 440, 45, 3);
  rect(300, 440, 45, 3);
  rect(240, 440, 45, 3);
  rect(420, 440, 45, 3);
  rect(480, 440, 45, 3);
  rect(540, 440, 45, 3);
  rect(600, 440, 45, 3);
  rect(660, 440, 45, 3);
  rect(720, 440, 45, 3);
  
  //Configurações do teclado de letras 3x4
  stroke(0, 0, 128);
  noFill();
  rect(50, 120, 421, 250, 15);
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(366, 124, 100, 70, 15);//4º
  rect(54, 210, 100, 70, 15);//5º
  rect(158, 210, 100, 70, 15);//6º
  rect(262, 210, 100, 70, 15);//7º
  rect(366, 210, 100, 70, 15);//8º
  rect(54, 296, 100, 70, 15);//9º
  rect(158, 296, 100, 70, 15);//10º
  rect(262, 296, 100, 70, 15);//11º
  rect(366, 296, 100, 70, 15);//12º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('Â', 105, 170);
  text('O', 105, 256);
  text('T', 105, 342);
  text('R', 210, 170);
  text('G', 210, 256);
  text('B', 210, 342);
  text('N', 315, 170);
  text('L', 315, 256);
  text('I', 315, 342);
  text('U', 420, 170);
  text('J', 420, 256);
  text('A', 420, 342);

  //Configurações das resposta
  textFont(myFont);
  textSize(50);
  text('T', 265, 427);
  text('R', 325, 427);
  /*text('I', 385, 427);
  text('Â', 445, 427);
  text('N', 505, 427);
  text('G', 565, 427);
  text('U', 625, 427);
  text('L', 685, 427);
  text('O', 745, 427);*/
  
  //Configurações do título do nível
  stroke(0, 0, 0);
  fill(154,205,50);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(0, 0, 0);
  text("terceiro nível", 605, 120); 
  
  //Configurações da mudança do rect
  if (mouseX > 262 && mouseX < 362 && mouseY > 296 && mouseY < 366)
    {
      stroke(0, 0, 0);
      fill(0, 0, 0);
      rect(262, 296, 100, 70, 15);//11º
      textFont(myFont);
      fill(220, 220, 220);
      textSize(46);
      text('I', 315, 342);
    }
}

function Tela5p3()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(triangulo, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  //Título
  textSize(32);
  text("Encontre as letras da forma geométrica: ", 405, 62);
  stroke(70);
  noFill();
  rect(10, 27, 780, 50, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(360, 440, 45, 3);
  rect(300, 440, 45, 3);
  rect(240, 440, 45, 3);
  rect(420, 440, 45, 3);
  rect(480, 440, 45, 3);
  rect(540, 440, 45, 3);
  rect(600, 440, 45, 3);
  rect(660, 440, 45, 3);
  rect(720, 440, 45, 3);
  
  //Configurações do teclado de letras 3x4
  stroke(0, 0, 128);
  noFill();
  rect(50, 120, 421, 250, 15);
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(366, 124, 100, 70, 15);//4º
  rect(54, 210, 100, 70, 15);//5º
  rect(158, 210, 100, 70, 15);//6º
  rect(262, 210, 100, 70, 15);//7º
  rect(366, 210, 100, 70, 15);//8º
  rect(54, 296, 100, 70, 15);//9º
  rect(158, 296, 100, 70, 15);//10º
  rect(262, 296, 100, 70, 15);//11º
  rect(366, 296, 100, 70, 15);//12º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('Â', 105, 170);
  text('O', 105, 256);
  text('T', 105, 342);
  text('R', 210, 170);
  text('G', 210, 256);
  text('B', 210, 342);
  text('N', 315, 170);
  text('L', 315, 256);
  text('I', 315, 342);
  text('U', 420, 170);
  text('J', 420, 256);
  text('A', 420, 342);

  //Configurações das resposta
  textFont(myFont);
  textSize(50);
  text('T', 265, 427);
  text('R', 325, 427);
  text('I', 385, 427);
  /*text('Â', 445, 427);
  text('N', 505, 427);
  text('G', 565, 427);
  text('U', 625, 427);
  text('L', 685, 427);
  text('O', 745, 427);*/
  
  //Configurações do título do nível
  stroke(0, 0, 0);
  fill(154,205,50);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(0, 0, 0);
  text("terceiro nível", 605, 120); 
  
  //Configurações da mudança do rect
  if (mouseX > 54 && mouseX < 154 && mouseY > 124 && mouseY < 194)
    {
      stroke(0, 0, 0);
      fill(0, 0, 0);
      rect(54, 124, 100, 70, 15);//1º
      textFont(myFont);
      fill(220, 220, 220);
      textSize(46);
      text('Â', 105, 170);
    }
}

function Tela5p4()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(triangulo, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  //Título
  textSize(32);
  text("Encontre as letras da forma geométrica: ", 405, 62);
  stroke(70);
  noFill();
  rect(10, 27, 780, 50, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(360, 440, 45, 3);
  rect(300, 440, 45, 3);
  rect(240, 440, 45, 3);
  rect(420, 440, 45, 3);
  rect(480, 440, 45, 3);
  rect(540, 440, 45, 3);
  rect(600, 440, 45, 3);
  rect(660, 440, 45, 3);
  rect(720, 440, 45, 3);
  
  //Configurações do teclado de letras 3x4
  stroke(0, 0, 128);
  noFill();
  rect(50, 120, 421, 250, 15);
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(366, 124, 100, 70, 15);//4º
  rect(54, 210, 100, 70, 15);//5º
  rect(158, 210, 100, 70, 15);//6º
  rect(262, 210, 100, 70, 15);//7º
  rect(366, 210, 100, 70, 15);//8º
  rect(54, 296, 100, 70, 15);//9º
  rect(158, 296, 100, 70, 15);//10º
  rect(262, 296, 100, 70, 15);//11º
  rect(366, 296, 100, 70, 15);//12º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('Â', 105, 170);
  text('O', 105, 256);
  text('T', 105, 342);
  text('R', 210, 170);
  text('G', 210, 256);
  text('B', 210, 342);
  text('N', 315, 170);
  text('L', 315, 256);
  text('I', 315, 342);
  text('U', 420, 170);
  text('J', 420, 256);
  text('A', 420, 342);

  //Configurações das resposta
  textFont(myFont);
  textSize(50);
  text('T', 265, 427);
  text('R', 325, 427);
  text('I', 385, 427);
  text('Â', 445, 427);
  /*text('N', 505, 427);
  text('G', 565, 427);
  text('U', 625, 427);
  text('L', 685, 427);
  text('O', 745, 427);*/
  
  //Configurações do título do nível
  stroke(0, 0, 0);
  fill(154,205,50);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(0, 0, 0);
  text("terceiro nível", 605, 120); 
  
  //Configurações da mudança do rect
  if (mouseX > 262 && mouseX < 362 && mouseY > 124 && mouseY < 194)
    {
      stroke(0, 0, 0);
      fill(0, 0, 0);
      rect(262, 124, 100, 70, 15);//3º
      textFont(myFont);
      fill(220, 220, 220);
      textSize(46);
      text('N', 315, 170);
    }
}

function Tela5p5()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(triangulo, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  //Título
  textSize(32);
  text("Encontre as letras da forma geométrica: ", 405, 62);
  stroke(70);
  noFill();
  rect(10, 27, 780, 50, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(360, 440, 45, 3);
  rect(300, 440, 45, 3);
  rect(240, 440, 45, 3);
  rect(420, 440, 45, 3);
  rect(480, 440, 45, 3);
  rect(540, 440, 45, 3);
  rect(600, 440, 45, 3);
  rect(660, 440, 45, 3);
  rect(720, 440, 45, 3);
  
  //Configurações do teclado de letras 3x4
  stroke(0, 0, 128);
  noFill();
  rect(50, 120, 421, 250, 15);
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(366, 124, 100, 70, 15);//4º
  rect(54, 210, 100, 70, 15);//5º
  rect(158, 210, 100, 70, 15);//6º
  rect(262, 210, 100, 70, 15);//7º
  rect(366, 210, 100, 70, 15);//8º
  rect(54, 296, 100, 70, 15);//9º
  rect(158, 296, 100, 70, 15);//10º
  rect(262, 296, 100, 70, 15);//11º
  rect(366, 296, 100, 70, 15);//12º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('Â', 105, 170);
  text('O', 105, 256);
  text('T', 105, 342);
  text('R', 210, 170);
  text('G', 210, 256);
  text('B', 210, 342);
  text('N', 315, 170);
  text('L', 315, 256);
  text('I', 315, 342);
  text('U', 420, 170);
  text('J', 420, 256);
  text('A', 420, 342);

  //Configurações das resposta
  textFont(myFont);
  textSize(50);
  text('T', 265, 427);
  text('R', 325, 427);
  text('I', 385, 427);
  text('Â', 445, 427);
  text('N', 505, 427);
  /*text('G', 565, 427);
  text('U', 625, 427);
  text('L', 685, 427);
  text('O', 745, 427);*/
  
  //Configurações do título do nível
  stroke(0, 0, 0);
  fill(154,205,50);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(0, 0, 0);
  text("terceiro nível", 605, 120); 
  
  //Configurações da mudança do rect
  if (mouseX > 158 && mouseX < 258 && mouseY > 210 && mouseY < 280)
    {
      stroke(0, 0, 0);
      fill(0, 0, 0);
      rect(158, 210, 100, 70, 15);//6º
      textFont(myFont);
      fill(220, 220, 220);
      textSize(46);
      text('G', 210, 256);
    }
}

function Tela5p6()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(triangulo, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  //Título
  textSize(32);
  text("Encontre as letras da forma geométrica: ", 405, 62);
  stroke(70);
  noFill();
  rect(10, 27, 780, 50, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(360, 440, 45, 3);
  rect(300, 440, 45, 3);
  rect(240, 440, 45, 3);
  rect(420, 440, 45, 3);
  rect(480, 440, 45, 3);
  rect(540, 440, 45, 3);
  rect(600, 440, 45, 3);
  rect(660, 440, 45, 3);
  rect(720, 440, 45, 3);
  
  //Configurações do teclado de letras 3x4
  stroke(0, 0, 128);
  noFill();
  rect(50, 120, 421, 250, 15);
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(366, 124, 100, 70, 15);//4º
  rect(54, 210, 100, 70, 15);//5º
  rect(158, 210, 100, 70, 15);//6º
  rect(262, 210, 100, 70, 15);//7º
  rect(366, 210, 100, 70, 15);//8º
  rect(54, 296, 100, 70, 15);//9º
  rect(158, 296, 100, 70, 15);//10º
  rect(262, 296, 100, 70, 15);//11º
  rect(366, 296, 100, 70, 15);//12º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('Â', 105, 170);
  text('O', 105, 256);
  text('T', 105, 342);
  text('R', 210, 170);
  text('G', 210, 256);
  text('B', 210, 342);
  text('N', 315, 170);
  text('L', 315, 256);
  text('I', 315, 342);
  text('U', 420, 170);
  text('J', 420, 256);
  text('A', 420, 342);

  //Configurações das resposta
  textFont(myFont);
  textSize(50);
  text('T', 265, 427);
  text('R', 325, 427);
  text('I', 385, 427);
  text('Â', 445, 427);
  text('N', 505, 427);
  text('G', 565, 427);
  /*text('U', 625, 427);
  text('L', 685, 427);
  text('O', 745, 427);*/
  
  //Configurações do título do nível
  stroke(0, 0, 0);
  fill(154,205,50);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(0, 0, 0);
  text("terceiro nível", 605, 120); 
  
  //Configurações da mudança do rect
  if (mouseX > 366 && mouseX < 466 && mouseY > 124 && mouseY < 194)
    {
      stroke(0, 0, 0);
      fill(0, 0, 0);
      rect(366, 124, 100, 70, 15);//4º
      textFont(myFont);
      fill(220, 220, 220);
      textSize(46);
      text('U', 420, 170);
    }
}

function Tela5p7()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(triangulo, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  //Título
  textSize(32);
  text("Encontre as letras da forma geométrica: ", 405, 62);
  stroke(70);
  noFill();
  rect(10, 27, 780, 50, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(360, 440, 45, 3);
  rect(300, 440, 45, 3);
  rect(240, 440, 45, 3);
  rect(420, 440, 45, 3);
  rect(480, 440, 45, 3);
  rect(540, 440, 45, 3);
  rect(600, 440, 45, 3);
  rect(660, 440, 45, 3);
  rect(720, 440, 45, 3);
  
  //Configurações do teclado de letras 3x4
  stroke(0, 0, 128);
  noFill();
  rect(50, 120, 421, 250, 15);
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(366, 124, 100, 70, 15);//4º
  rect(54, 210, 100, 70, 15);//5º
  rect(158, 210, 100, 70, 15);//6º
  rect(262, 210, 100, 70, 15);//7º
  rect(366, 210, 100, 70, 15);//8º
  rect(54, 296, 100, 70, 15);//9º
  rect(158, 296, 100, 70, 15);//10º
  rect(262, 296, 100, 70, 15);//11º
  rect(366, 296, 100, 70, 15);//12º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('Â', 105, 170);
  text('O', 105, 256);
  text('T', 105, 342);
  text('R', 210, 170);
  text('G', 210, 256);
  text('B', 210, 342);
  text('N', 315, 170);
  text('L', 315, 256);
  text('I', 315, 342);
  text('U', 420, 170);
  text('J', 420, 256);
  text('A', 420, 342);

  //Configurações das resposta
  textFont(myFont);
  textSize(50);
  text('T', 265, 427);
  text('R', 325, 427);
  text('I', 385, 427);
  text('Â', 445, 427);
  text('N', 505, 427);
  text('G', 565, 427);
  text('U', 625, 427);
  /*text('L', 685, 427);
  text('O', 745, 427);*/
  
  //Configurações do título do nível
  stroke(0, 0, 0);
  fill(154,205,50);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(0, 0, 0);
  text("terceiro nível", 605, 120); 
  
  //Configurações da mudança do rect
  if (mouseX > 262 && mouseX < 362 && mouseY > 210 && mouseY < 280)
    {
      stroke(0, 0, 0);
      fill(0, 0, 0);
      rect(262, 210, 100, 70, 15);//7º
      textFont(myFont);
      fill(220, 220, 220);
      textSize(46);
      text('L', 315, 256);
    }
}

function Tela5p8()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(triangulo, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  //Título
  textSize(32);
  text("Encontre as letras da forma geométrica: ", 405, 62);
  stroke(70);
  noFill();
  rect(10, 27, 780, 50, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(360, 440, 45, 3);
  rect(300, 440, 45, 3);
  rect(240, 440, 45, 3);
  rect(420, 440, 45, 3);
  rect(480, 440, 45, 3);
  rect(540, 440, 45, 3);
  rect(600, 440, 45, 3);
  rect(660, 440, 45, 3);
  rect(720, 440, 45, 3);
  
  //Configurações do teclado de letras 3x4
  stroke(0, 0, 128);
  noFill();
  rect(50, 120, 421, 250, 15);
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(366, 124, 100, 70, 15);//4º
  rect(54, 210, 100, 70, 15);//5º
  rect(158, 210, 100, 70, 15);//6º
  rect(262, 210, 100, 70, 15);//7º
  rect(366, 210, 100, 70, 15);//8º
  rect(54, 296, 100, 70, 15);//9º
  rect(158, 296, 100, 70, 15);//10º
  rect(262, 296, 100, 70, 15);//11º
  rect(366, 296, 100, 70, 15);//12º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('Â', 105, 170);
  text('O', 105, 256);
  text('T', 105, 342);
  text('R', 210, 170);
  text('G', 210, 256);
  text('B', 210, 342);
  text('N', 315, 170);
  text('L', 315, 256);
  text('I', 315, 342);
  text('U', 420, 170);
  text('J', 420, 256);
  text('A', 420, 342);

  //Configurações das resposta
  textFont(myFont);
  textSize(50);
  text('T', 265, 427);
  text('R', 325, 427);
  text('I', 385, 427);
  text('Â', 445, 427);
  text('N', 505, 427);
  text('G', 565, 427);
  text('U', 625, 427);
  text('L', 685, 427);
  //text('O', 745, 427);
  
  //Configurações do título do nível
  stroke(0, 0, 0);
  fill(154,205,50);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(0, 0, 0);
  text("terceiro nível", 605, 120); 
  
  //Configurações da mudança do rect
  if (mouseX > 54 && mouseX < 154 && mouseY > 210 && mouseY < 280)
    {
      stroke(0, 0, 0);
      fill(0, 0, 0);
      rect(54, 210, 100, 70, 15);//5º
      textFont(myFont);
      fill(220, 220, 220);
      textSize(46);
      text('O', 105, 256);
    }
}

function Tela5p9()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(triangulo, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  //Título
  textSize(54);
  fill(0,128,0);
  text("PARABÉNS!!", 405, 62);
  stroke(0,128,0);
  noFill();
  rect(215, 13, 370, 63, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(360, 440, 45, 3);
  rect(300, 440, 45, 3);
  rect(240, 440, 45, 3);
  rect(420, 440, 45, 3);
  rect(480, 440, 45, 3);
  rect(540, 440, 45, 3);
  rect(600, 440, 45, 3);
  rect(660, 440, 45, 3);
  rect(720, 440, 45, 3);
  
  //Configurações do teclado de letras 3x4
  stroke(0, 0, 128);
  noFill();
  rect(50, 120, 421, 250, 15);
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(366, 124, 100, 70, 15);//4º
  rect(54, 210, 100, 70, 15);//5º
  rect(158, 210, 100, 70, 15);//6º
  rect(262, 210, 100, 70, 15);//7º
  rect(366, 210, 100, 70, 15);//8º
  rect(54, 296, 100, 70, 15);//9º
  rect(158, 296, 100, 70, 15);//10º
  rect(262, 296, 100, 70, 15);//11º
  rect(366, 296, 100, 70, 15);//12º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('Â', 105, 170);
  text('O', 105, 256);
  text('T', 105, 342);
  text('R', 210, 170);
  text('G', 210, 256);
  text('B', 210, 342);
  text('N', 315, 170);
  text('L', 315, 256);
  text('I', 315, 342);
  text('U', 420, 170);
  text('J', 420, 256);
  text('A', 420, 342);

  //Configurações das resposta
  textFont(myFont);
  textSize(50);
  text('T', 265, 427);
  text('R', 325, 427);
  text('I', 385, 427);
  text('Â', 445, 427);
  text('N', 505, 427);
  text('G', 565, 427);
  text('U', 625, 427);
  text('L', 685, 427);
  text('O', 745, 427);
  
  //Configurações do título do nível
  stroke(0, 0, 0);
  fill(154,205,50);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(0, 0, 0);
  text("terceiro nível", 605, 120);
  
  //Configurações do texto final
  stroke(0, 0, 0);
  fill(0, 100, 0);
  rect(110, 450, 380, 55, 15);
  textFont(myFont);
  textSize(42);
  fill(220, 220, 220);
  text('Nível concluido', 295, 490);
  
  //Configurações do botão próximo
  stroke(0, 0, 0);
  noFill();
  rect(540, 453, 200, 57, 15);
  textFont(myFont);
  textSize(40);
  fill(0, 0, 128);
  text('PRóXIMO', 640, 495);
  //Mudaça de cor do botao próximo
  if (mouseX > 540 && mouseX < 740 && mouseY > 453 && mouseY < 510)
      {
        stroke(250, 250, 250);
        fill(28, 28, 28);
        rect(540, 453, 200, 57, 15);
        textFont(myFont);
        textSize(40);
        fill(220, 220, 220);
        text('PRóXIMO', 640, 495);
      }
  //Configurações da mudança do rect
  /*if (mouseX > 366 && mouseX < 466 && mouseY > 296 && mouseY < 366)
    {
      stroke(0, 0, 0);
      fill(0, 0, 0);
      rect(366, 296, 100, 70, 15);//12º
      textFont(myFont);
      fill(220, 220, 220);
      textSize(46);
      text('A', 420, 342);
    }
  */
}

function Tela6()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(retangulo, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  //Título
  textSize(32);
  text("Encontre as letras da forma geométrica: ", 405, 62);
  stroke(70);
  noFill();
  rect(10, 27, 780, 50, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(360, 440, 45, 3);
  rect(300, 440, 45, 3);
  rect(240, 440, 45, 3);
  rect(420, 440, 45, 3);
  rect(480, 440, 45, 3);
  rect(540, 440, 45, 3);
  rect(600, 440, 45, 3);
  rect(660, 440, 45, 3);
  rect(720, 440, 45, 3);
  
  //Configurações do teclado de letras 3x4
  stroke(0, 0, 128);
  noFill();
  rect(50, 120, 421, 250, 15);
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(366, 124, 100, 70, 15);//4º
  rect(54, 210, 100, 70, 15);//5º
  rect(158, 210, 100, 70, 15);//6º
  rect(262, 210, 100, 70, 15);//7º
  rect(366, 210, 100, 70, 15);//8º
  rect(54, 296, 100, 70, 15);//9º
  rect(158, 296, 100, 70, 15);//10º
  rect(262, 296, 100, 70, 15);//11º
  rect(366, 296, 100, 70, 15);//12º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('Â', 105, 170);
  text('U', 105, 256);
  text('T', 105, 342);
  text('R', 210, 170);
  text('Q', 210, 256);
  text('L', 210, 342);
  text('N', 315, 170);
  text('G', 315, 256);
  text('I', 315, 342);
  text('E', 420, 170);
  text('O', 420, 256);
  text('A', 420, 342);

  //Configurações das resposta
  /*textFont(myFont);
  textSize(50);
  text('R', 265, 427);
  text('E', 325, 427);
  text('T', 385, 427);
  text('Â', 445, 427);
  text('N', 505, 427);
  text('G', 565, 427);
  text('U', 625, 427);
  text('L', 685, 427);
  text('O', 745, 427);*/
  
  //Configurações do título do nível
  stroke(0, 0, 0);
  fill(0,0,205);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(0, 0, 0);
  text("quarto nível", 605, 120); 
  
  //Configurações da mudança do rect
  if (mouseX > 158 && mouseX < 258 && mouseY > 124 && mouseY < 194)
    {
      stroke(0, 0, 0);
      fill(0, 0, 0);
      rect(158, 124, 100, 70, 15);//2º
      textFont(myFont);
      fill(220, 220, 220);
      textSize(46);
      text('R', 210, 170);
    }
}

function Tela6p1()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(retangulo, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  //Título
  textSize(32);
  text("Encontre as letras da forma geométrica: ", 405, 62);
  stroke(70);
  noFill();
  rect(10, 27, 780, 50, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(360, 440, 45, 3);
  rect(300, 440, 45, 3);
  rect(240, 440, 45, 3);
  rect(420, 440, 45, 3);
  rect(480, 440, 45, 3);
  rect(540, 440, 45, 3);
  rect(600, 440, 45, 3);
  rect(660, 440, 45, 3);
  rect(720, 440, 45, 3);
  
  //Configurações do teclado de letras 3x4
  stroke(0, 0, 128);
  noFill();
  rect(50, 120, 421, 250, 15);
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(366, 124, 100, 70, 15);//4º
  rect(54, 210, 100, 70, 15);//5º
  rect(158, 210, 100, 70, 15);//6º
  rect(262, 210, 100, 70, 15);//7º
  rect(366, 210, 100, 70, 15);//8º
  rect(54, 296, 100, 70, 15);//9º
  rect(158, 296, 100, 70, 15);//10º
  rect(262, 296, 100, 70, 15);//11º
  rect(366, 296, 100, 70, 15);//12º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('Â', 105, 170);
  text('U', 105, 256);
  text('T', 105, 342);
  text('R', 210, 170);
  text('Q', 210, 256);
  text('L', 210, 342);
  text('N', 315, 170);
  text('G', 315, 256);
  text('I', 315, 342);
  text('E', 420, 170);
  text('O', 420, 256);
  text('A', 420, 342);

  //Configurações das resposta
  textFont(myFont);
  textSize(50);
  text('R', 265, 427);
  /*text('E', 325, 427);
  text('T', 385, 427);
  text('Â', 445, 427);
  text('N', 505, 427);
  text('G', 565, 427);
  text('U', 625, 427);
  text('L', 685, 427);
  text('O', 745, 427);*/
  
  //Configurações do título do nível
  stroke(0, 0, 0);
  fill(0,0,205);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(0, 0, 0);
  text("quarto nível", 605, 120); 
  
  //Configurações da mudança do rect
  if (mouseX > 366 && mouseX < 466 && mouseY > 124 && mouseY < 194)
    {
      stroke(0, 0, 0);
      fill(0, 0, 0);
      rect(366, 124, 100, 70, 15);//4º
      textFont(myFont);
      fill(220, 220, 220);
      textSize(46);
      text('E', 420, 170);
    }
}

function Tela6p2()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(retangulo, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  //Título
  textSize(32);
  text("Encontre as letras da forma geométrica: ", 405, 62);
  stroke(70);
  noFill();
  rect(10, 27, 780, 50, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(360, 440, 45, 3);
  rect(300, 440, 45, 3);
  rect(240, 440, 45, 3);
  rect(420, 440, 45, 3);
  rect(480, 440, 45, 3);
  rect(540, 440, 45, 3);
  rect(600, 440, 45, 3);
  rect(660, 440, 45, 3);
  rect(720, 440, 45, 3);
  
  //Configurações do teclado de letras 3x4
  stroke(0, 0, 128);
  noFill();
  rect(50, 120, 421, 250, 15);
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(366, 124, 100, 70, 15);//4º
  rect(54, 210, 100, 70, 15);//5º
  rect(158, 210, 100, 70, 15);//6º
  rect(262, 210, 100, 70, 15);//7º
  rect(366, 210, 100, 70, 15);//8º
  rect(54, 296, 100, 70, 15);//9º
  rect(158, 296, 100, 70, 15);//10º
  rect(262, 296, 100, 70, 15);//11º
  rect(366, 296, 100, 70, 15);//12º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('Â', 105, 170);
  text('U', 105, 256);
  text('T', 105, 342);
  text('R', 210, 170);
  text('Q', 210, 256);
  text('L', 210, 342);
  text('N', 315, 170);
  text('G', 315, 256);
  text('I', 315, 342);
  text('E', 420, 170);
  text('O', 420, 256);
  text('A', 420, 342);

  //Configurações das resposta
  textFont(myFont);
  textSize(50);
  text('R', 265, 427);
  text('E', 325, 427);
  /*text('T', 385, 427);
  text('Â', 445, 427);
  text('N', 505, 427);
  text('G', 565, 427);
  text('U', 625, 427);
  text('L', 685, 427);
  text('O', 745, 427);*/
  
  //Configurações do título do nível
  stroke(0, 0, 0);
  fill(0,0,205);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(0, 0, 0);
  text("quarto nível", 605, 120); 
  
  //Configurações da mudança do rect
  if (mouseX > 54 && mouseX < 154 && mouseY > 296 && mouseY < 366)
    {
      stroke(0, 0, 0);
      fill(0, 0, 0);
      rect(54, 296, 100, 70, 15);//9º
      textFont(myFont);
      fill(220, 220, 220);
      textSize(46);
      text('T', 105, 342);
    }
}

function Tela6p3()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(retangulo, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  //Título
  textSize(32);
  text("Encontre as letras da forma geométrica: ", 405, 62);
  stroke(70);
  noFill();
  rect(10, 27, 780, 50, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(360, 440, 45, 3);
  rect(300, 440, 45, 3);
  rect(240, 440, 45, 3);
  rect(420, 440, 45, 3);
  rect(480, 440, 45, 3);
  rect(540, 440, 45, 3);
  rect(600, 440, 45, 3);
  rect(660, 440, 45, 3);
  rect(720, 440, 45, 3);
  
  //Configurações do teclado de letras 3x4
  stroke(0, 0, 128);
  noFill();
  rect(50, 120, 421, 250, 15);
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(366, 124, 100, 70, 15);//4º
  rect(54, 210, 100, 70, 15);//5º
  rect(158, 210, 100, 70, 15);//6º
  rect(262, 210, 100, 70, 15);//7º
  rect(366, 210, 100, 70, 15);//8º
  rect(54, 296, 100, 70, 15);//9º
  rect(158, 296, 100, 70, 15);//10º
  rect(262, 296, 100, 70, 15);//11º
  rect(366, 296, 100, 70, 15);//12º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('Â', 105, 170);
  text('U', 105, 256);
  text('T', 105, 342);
  text('R', 210, 170);
  text('Q', 210, 256);
  text('L', 210, 342);
  text('N', 315, 170);
  text('G', 315, 256);
  text('I', 315, 342);
  text('E', 420, 170);
  text('O', 420, 256);
  text('A', 420, 342);

  //Configurações das resposta
  textFont(myFont);
  textSize(50);
  text('R', 265, 427);
  text('E', 325, 427);
  text('T', 385, 427);
  /*text('Â', 445, 427);
  text('N', 505, 427);
  text('G', 565, 427);
  text('U', 625, 427);
  text('L', 685, 427);
  text('O', 745, 427);*/
  
  //Configurações do título do nível
  stroke(0, 0, 0);
  fill(0,0,205);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(0, 0, 0);
  text("quarto nível", 605, 120); 
  
  //Configurações da mudança do rect
  if (mouseX > 54 && mouseX < 154 && mouseY > 124 && mouseY < 194)
    {
      stroke(0, 0, 0);
      fill(0, 0, 0);
      rect(54, 124, 100, 70, 15);//1º
      textFont(myFont);
      fill(220, 220, 220);
      textSize(46);
      text('Â', 105, 170);
    }
}

function Tela6p4()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(retangulo, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  //Título
  textSize(32);
  text("Encontre as letras da forma geométrica: ", 405, 62);
  stroke(70);
  noFill();
  rect(10, 27, 780, 50, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(360, 440, 45, 3);
  rect(300, 440, 45, 3);
  rect(240, 440, 45, 3);
  rect(420, 440, 45, 3);
  rect(480, 440, 45, 3);
  rect(540, 440, 45, 3);
  rect(600, 440, 45, 3);
  rect(660, 440, 45, 3);
  rect(720, 440, 45, 3);
  
  //Configurações do teclado de letras 3x4
  stroke(0, 0, 128);
  noFill();
  rect(50, 120, 421, 250, 15);
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(366, 124, 100, 70, 15);//4º
  rect(54, 210, 100, 70, 15);//5º
  rect(158, 210, 100, 70, 15);//6º
  rect(262, 210, 100, 70, 15);//7º
  rect(366, 210, 100, 70, 15);//8º
  rect(54, 296, 100, 70, 15);//9º
  rect(158, 296, 100, 70, 15);//10º
  rect(262, 296, 100, 70, 15);//11º
  rect(366, 296, 100, 70, 15);//12º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('Â', 105, 170);
  text('U', 105, 256);
  text('T', 105, 342);
  text('R', 210, 170);
  text('Q', 210, 256);
  text('L', 210, 342);
  text('N', 315, 170);
  text('G', 315, 256);
  text('I', 315, 342);
  text('E', 420, 170);
  text('O', 420, 256);
  text('A', 420, 342);

  //Configurações das resposta
  textFont(myFont);
  textSize(50);
  text('R', 265, 427);
  text('E', 325, 427);
  text('T', 385, 427);
  text('Â', 445, 427);
  /*text('N', 505, 427);
  text('G', 565, 427);
  text('U', 625, 427);
  text('L', 685, 427);
  text('O', 745, 427);*/
  
  //Configurações do título do nível
  stroke(0, 0, 0);
  fill(0,0,205);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(0, 0, 0);
  text("quarto nível", 605, 120); 
  
  //Configurações da mudança do rect
  if (mouseX > 262 && mouseX < 362 && mouseY > 124 && mouseY < 194)
    {
      stroke(0, 0, 0);
      fill(0, 0, 0);
      rect(262, 124, 100, 70, 15);//3º
      textFont(myFont);
      fill(220, 220, 220);
      textSize(46);
      text('N', 315, 170);
    }
}

function Tela6p5()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(retangulo, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  //Título
  textSize(32);
  text("Encontre as letras da forma geométrica: ", 405, 62);
  stroke(70);
  noFill();
  rect(10, 27, 780, 50, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(360, 440, 45, 3);
  rect(300, 440, 45, 3);
  rect(240, 440, 45, 3);
  rect(420, 440, 45, 3);
  rect(480, 440, 45, 3);
  rect(540, 440, 45, 3);
  rect(600, 440, 45, 3);
  rect(660, 440, 45, 3);
  rect(720, 440, 45, 3);
  
  //Configurações do teclado de letras 3x4
  stroke(0, 0, 128);
  noFill();
  rect(50, 120, 421, 250, 15);
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(366, 124, 100, 70, 15);//4º
  rect(54, 210, 100, 70, 15);//5º
  rect(158, 210, 100, 70, 15);//6º
  rect(262, 210, 100, 70, 15);//7º
  rect(366, 210, 100, 70, 15);//8º
  rect(54, 296, 100, 70, 15);//9º
  rect(158, 296, 100, 70, 15);//10º
  rect(262, 296, 100, 70, 15);//11º
  rect(366, 296, 100, 70, 15);//12º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('Â', 105, 170);
  text('U', 105, 256);
  text('T', 105, 342);
  text('R', 210, 170);
  text('Q', 210, 256);
  text('L', 210, 342);
  text('N', 315, 170);
  text('G', 315, 256);
  text('I', 315, 342);
  text('E', 420, 170);
  text('O', 420, 256);
  text('A', 420, 342);

  //Configurações das resposta
  textFont(myFont);
  textSize(50);
  text('R', 265, 427);
  text('E', 325, 427);
  text('T', 385, 427);
  text('Â', 445, 427);
  text('N', 505, 427);
  /*text('G', 565, 427);
  text('U', 625, 427);
  text('L', 685, 427);
  text('O', 745, 427);*/
  
  //Configurações do título do nível
  stroke(0, 0, 0);
  fill(0,0,205);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(0, 0, 0);
  text("quarto nível", 605, 120); 
  
  //Configurações da mudança do rect
  if (mouseX > 262 && mouseX < 362 && mouseY > 210 && mouseY < 280)
    {
      stroke(0, 0, 0);
      fill(0, 0, 0);
      rect(262, 210, 100, 70, 15);//7º
      textFont(myFont);
      fill(220, 220, 220);
      textSize(46);
      text('G', 315, 256);
    }
}

function Tela6p6()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(retangulo, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  //Título
  textSize(32);
  text("Encontre as letras da forma geométrica: ", 405, 62);
  stroke(70);
  noFill();
  rect(10, 27, 780, 50, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(360, 440, 45, 3);
  rect(300, 440, 45, 3);
  rect(240, 440, 45, 3);
  rect(420, 440, 45, 3);
  rect(480, 440, 45, 3);
  rect(540, 440, 45, 3);
  rect(600, 440, 45, 3);
  rect(660, 440, 45, 3);
  rect(720, 440, 45, 3);
  
  //Configurações do teclado de letras 3x4
  stroke(0, 0, 128);
  noFill();
  rect(50, 120, 421, 250, 15);
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(366, 124, 100, 70, 15);//4º
  rect(54, 210, 100, 70, 15);//5º
  rect(158, 210, 100, 70, 15);//6º
  rect(262, 210, 100, 70, 15);//7º
  rect(366, 210, 100, 70, 15);//8º
  rect(54, 296, 100, 70, 15);//9º
  rect(158, 296, 100, 70, 15);//10º
  rect(262, 296, 100, 70, 15);//11º
  rect(366, 296, 100, 70, 15);//12º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('Â', 105, 170);
  text('U', 105, 256);
  text('T', 105, 342);
  text('R', 210, 170);
  text('Q', 210, 256);
  text('L', 210, 342);
  text('N', 315, 170);
  text('G', 315, 256);
  text('I', 315, 342);
  text('E', 420, 170);
  text('O', 420, 256);
  text('A', 420, 342);

  //Configurações das resposta
  textFont(myFont);
  textSize(50);
  text('R', 265, 427);
  text('E', 325, 427);
  text('T', 385, 427);
  text('Â', 445, 427);
  text('N', 505, 427);
  text('G', 565, 427);
  /*text('U', 625, 427);
  text('L', 685, 427);
  text('O', 745, 427);*/
  
  //Configurações do título do nível
  stroke(0, 0, 0);
  fill(0,0,205);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(0, 0, 0);
  text("quarto nível", 605, 120); 
  
  //Configurações da mudança do rect
  if (mouseX > 54 && mouseX < 154 && mouseY > 210 && mouseY < 280)
    {
      stroke(0, 0, 0);
      fill(0, 0, 0);
      rect(54, 210, 100, 70, 15);//5º
      textFont(myFont);
      fill(220, 220, 220);
      textSize(46);
      text('U', 105, 256);
    }
}

function Tela6p7()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(retangulo, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  //Título
  textSize(32);
  text("Encontre as letras da forma geométrica: ", 405, 62);
  stroke(70);
  noFill();
  rect(10, 27, 780, 50, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(360, 440, 45, 3);
  rect(300, 440, 45, 3);
  rect(240, 440, 45, 3);
  rect(420, 440, 45, 3);
  rect(480, 440, 45, 3);
  rect(540, 440, 45, 3);
  rect(600, 440, 45, 3);
  rect(660, 440, 45, 3);
  rect(720, 440, 45, 3);
  
  //Configurações do teclado de letras 3x4
  stroke(0, 0, 128);
  noFill();
  rect(50, 120, 421, 250, 15);
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(366, 124, 100, 70, 15);//4º
  rect(54, 210, 100, 70, 15);//5º
  rect(158, 210, 100, 70, 15);//6º
  rect(262, 210, 100, 70, 15);//7º
  rect(366, 210, 100, 70, 15);//8º
  rect(54, 296, 100, 70, 15);//9º
  rect(158, 296, 100, 70, 15);//10º
  rect(262, 296, 100, 70, 15);//11º
  rect(366, 296, 100, 70, 15);//12º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('Â', 105, 170);
  text('U', 105, 256);
  text('T', 105, 342);
  text('R', 210, 170);
  text('Q', 210, 256);
  text('L', 210, 342);
  text('N', 315, 170);
  text('G', 315, 256);
  text('I', 315, 342);
  text('E', 420, 170);
  text('O', 420, 256);
  text('A', 420, 342);

  //Configurações das resposta
  textFont(myFont);
  textSize(50);
  text('R', 265, 427);
  text('E', 325, 427);
  text('T', 385, 427);
  text('Â', 445, 427);
  text('N', 505, 427);
  text('G', 565, 427);
  text('U', 625, 427);
  /*text('L', 685, 427);
  text('O', 745, 427);*/
  
  //Configurações do título do nível
  stroke(0, 0, 0);
  fill(0,0,205);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(0, 0, 0);
  text("quarto nível", 605, 120); 
  
  //Configurações da mudança do rect
  if (mouseX > 158 && mouseX < 258 && mouseY > 296 && mouseY < 366)
    {
      stroke(0, 0, 0);
      fill(0, 0, 0);
      rect(158, 296, 100, 70, 15);//10º
      textFont(myFont);
      fill(220, 220, 220);
      textSize(46);
      text('L', 210, 342);
    }
}

function Tela6p8()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(retangulo, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  //Título
  textSize(32);
  text("Encontre as letras da forma geométrica: ", 405, 62);
  stroke(70);
  noFill();
  rect(10, 27, 780, 50, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(360, 440, 45, 3);
  rect(300, 440, 45, 3);
  rect(240, 440, 45, 3);
  rect(420, 440, 45, 3);
  rect(480, 440, 45, 3);
  rect(540, 440, 45, 3);
  rect(600, 440, 45, 3);
  rect(660, 440, 45, 3);
  rect(720, 440, 45, 3);
  
  //Configurações do teclado de letras 3x4
  stroke(0, 0, 128);
  noFill();
  rect(50, 120, 421, 250, 15);
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(366, 124, 100, 70, 15);//4º
  rect(54, 210, 100, 70, 15);//5º
  rect(158, 210, 100, 70, 15);//6º
  rect(262, 210, 100, 70, 15);//7º
  rect(366, 210, 100, 70, 15);//8º
  rect(54, 296, 100, 70, 15);//9º
  rect(158, 296, 100, 70, 15);//10º
  rect(262, 296, 100, 70, 15);//11º
  rect(366, 296, 100, 70, 15);//12º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('Â', 105, 170);
  text('U', 105, 256);
  text('T', 105, 342);
  text('R', 210, 170);
  text('Q', 210, 256);
  text('L', 210, 342);
  text('N', 315, 170);
  text('G', 315, 256);
  text('I', 315, 342);
  text('E', 420, 170);
  text('O', 420, 256);
  text('A', 420, 342);

  //Configurações das resposta
  textFont(myFont);
  textSize(50);
  text('R', 265, 427);
  text('E', 325, 427);
  text('T', 385, 427);
  text('Â', 445, 427);
  text('N', 505, 427);
  text('G', 565, 427);
  text('U', 625, 427);
  text('L', 685, 427);
  //text('O', 745, 427);
  
  //Configurações do título do nível
  stroke(0, 0, 0);
  fill(0,0,205);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(0, 0, 0);
  text("quarto nível", 605, 120); 
  
  //Configurações da mudança do rect
  if (mouseX > 366 && mouseX < 466 && mouseY > 210 && mouseY < 280)
    {
      stroke(0, 0, 0);
      fill(0, 0, 0);
      rect(366, 210, 100, 70, 15);//8º
      textFont(myFont);
      fill(220, 220, 220);
      textSize(46);
      text('O', 420, 256);
    }
}

function Tela6p9()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(retangulo, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  //Título
  textSize(54);
  fill(0,128,0);
  text("PARABÉNS!!", 405, 62);
  stroke(0,128,0);
  noFill();
  rect(215, 13, 370, 63, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(360, 440, 45, 3);
  rect(300, 440, 45, 3);
  rect(240, 440, 45, 3);
  rect(420, 440, 45, 3);
  rect(480, 440, 45, 3);
  rect(540, 440, 45, 3);
  rect(600, 440, 45, 3);
  rect(660, 440, 45, 3);
  rect(720, 440, 45, 3);
  
  //Configurações do teclado de letras 3x4
  stroke(0, 0, 128);
  noFill();
  rect(50, 120, 421, 250, 15);
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(366, 124, 100, 70, 15);//4º
  rect(54, 210, 100, 70, 15);//5º
  rect(158, 210, 100, 70, 15);//6º
  rect(262, 210, 100, 70, 15);//7º
  rect(366, 210, 100, 70, 15);//8º
  rect(54, 296, 100, 70, 15);//9º
  rect(158, 296, 100, 70, 15);//10º
  rect(262, 296, 100, 70, 15);//11º
  rect(366, 296, 100, 70, 15);//12º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('Â', 105, 170);
  text('U', 105, 256);
  text('T', 105, 342);
  text('R', 210, 170);
  text('Q', 210, 256);
  text('L', 210, 342);
  text('N', 315, 170);
  text('G', 315, 256);
  text('I', 315, 342);
  text('E', 420, 170);
  text('O', 420, 256);
  text('A', 420, 342);

  //Configurações das resposta
  textFont(myFont);
  textSize(50);
  text('R', 265, 427);
  text('E', 325, 427);
  text('T', 385, 427);
  text('Â', 445, 427);
  text('N', 505, 427);
  text('G', 565, 427);
  text('U', 625, 427);
  text('L', 685, 427);
  text('O', 745, 427);
  
  //Configurações do título do nível
  stroke(0, 0, 0);
  fill(0,0,205);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(0, 0, 0);
  text("quarto nível", 605, 120);
  
  //Configurações do texto final
  stroke(0, 0, 0);
  fill(0, 100, 0);
  rect(110, 450, 380, 55, 15);
  textFont(myFont);
  textSize(42);
  fill(220, 220, 220);
  text('Nível concluido', 295, 490);
  
  //Configurações do botão próximo
  stroke(0, 0, 0);
  noFill();
  rect(540, 453, 200, 57, 15);
  textFont(myFont);
  textSize(40);
  fill(0, 0, 128);
  text('PRóXIMO', 640, 495);
  //Mudaça de cor do botao próximo
  if (mouseX > 540 && mouseX < 740 && mouseY > 453 && mouseY < 510)
      {
        stroke(250, 250, 250);
        fill(28, 28, 28);
        rect(540, 453, 200, 57, 15);
        textFont(myFont);
        textSize(40);
        fill(220, 220, 220);
        text('PRóXIMO', 640, 495);
      }
  //Configurações da mudança do rect
  /*if (mouseX > 366 && mouseX < 466 && mouseY > 296 && mouseY < 366)
    {
      stroke(0, 0, 0);
      fill(0, 0, 0);
      rect(366, 296, 100, 70, 15);//12º
      textFont(myFont);
      fill(220, 220, 220);
      textSize(46);
      text('A', 420, 342);
    }
  */
}

function Tela7()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(coelho, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  //Título
  textSize(32);
  text("Encontre as letras do seguinte animal: ", 405, 62);
  stroke(70);
  noFill();
  rect(10, 27, 780, 50, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(420, 440, 45, 3);
  rect(480, 440, 45, 3);
  rect(540, 440, 45, 3);
  rect(600, 440, 45, 3);
  rect(660, 440, 45, 3);
  rect(720, 440, 45, 3);
  
  //Configurações do teclado de letras 3x4
  stroke(0, 0, 128);
  noFill();
  rect(50, 120, 421, 250, 15);
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(366, 124, 100, 70, 15);//4º
  rect(54, 210, 100, 70, 15);//5º
  rect(158, 210, 100, 70, 15);//6º
  rect(262, 210, 100, 70, 15);//7º
  rect(366, 210, 100, 70, 15);//8º
  rect(54, 296, 100, 70, 15);//9º
  rect(158, 296, 100, 70, 15);//10º
  rect(262, 296, 100, 70, 15);//11º
  rect(366, 296, 100, 70, 15);//12º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('O', 105, 170);
  text('U', 105, 256);
  text('C', 105, 342);
  text('Y', 210, 170);
  text('D', 210, 256);
  text('M', 210, 342);
  text('R', 315, 170);
  text('H', 315, 256);
  text('L', 315, 342);
  text('E', 420, 170);
  text('T', 420, 256);
  text('I', 420, 342);

  //Configurações das resposta
  /*textFont(myFont);
  textSize(50);
  text('C', 445, 427);
  text('O', 505, 427);
  text('E', 565, 427);
  text('L', 625, 427);
  text('H', 685, 427);
  text('O', 745, 427);*/
  
  //Configurações do título do nível
  stroke(0, 0, 0);
  fill(138,43,226);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(0, 0, 0);
  text("quinto nível", 605, 120); 
  
  //Configurações da mudança do rect
  if (mouseX > 54 && mouseX < 154 && mouseY > 296 && mouseY < 366)
    {
      stroke(0, 0, 0);
      fill(0, 0, 0);
      rect(54, 296, 100, 70, 15);//9º
      textFont(myFont);
      fill(220, 220, 220);
      textSize(46);
      text('C', 105, 342);
    }
}

function Tela7p1()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(coelho, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  //Título
  textSize(32);
  text("Encontre as letras do seguinte animal: ", 405, 62);
  stroke(70);
  noFill();
  rect(10, 27, 780, 50, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(420, 440, 45, 3);
  rect(480, 440, 45, 3);
  rect(540, 440, 45, 3);
  rect(600, 440, 45, 3);
  rect(660, 440, 45, 3);
  rect(720, 440, 45, 3);
  
  //Configurações do teclado de letras 3x4
  stroke(0, 0, 128);
  noFill();
  rect(50, 120, 421, 250, 15);
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(366, 124, 100, 70, 15);//4º
  rect(54, 210, 100, 70, 15);//5º
  rect(158, 210, 100, 70, 15);//6º
  rect(262, 210, 100, 70, 15);//7º
  rect(366, 210, 100, 70, 15);//8º
  rect(54, 296, 100, 70, 15);//9º
  rect(158, 296, 100, 70, 15);//10º
  rect(262, 296, 100, 70, 15);//11º
  rect(366, 296, 100, 70, 15);//12º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('O', 105, 170);
  text('U', 105, 256);
  text('C', 105, 342);
  text('Y', 210, 170);
  text('D', 210, 256);
  text('M', 210, 342);
  text('R', 315, 170);
  text('H', 315, 256);
  text('L', 315, 342);
  text('E', 420, 170);
  text('T', 420, 256);
  text('I', 420, 342);

  //Configurações das resposta
  textFont(myFont);
  textSize(50);
  text('C', 445, 427);
  /*text('O', 505, 427);
  text('E', 565, 427);
  text('L', 625, 427);
  text('H', 685, 427);
  text('O', 745, 427);*/
  
  //Configurações do título do nível
  stroke(0, 0, 0);
  fill(138,43,226);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(0, 0, 0);
  text("quinto nível", 605, 120); 
  
  //Configurações da mudança do rect
  if (mouseX > 54 && mouseX < 154 && mouseY > 124 && mouseY < 194)
    {
      stroke(0, 0, 0);
      fill(0, 0, 0);
      rect(54, 124, 100, 70, 15);//1º
      textFont(myFont);
      fill(220, 220, 220);
      textSize(46);
      text('O', 105, 170);
    }
}

function Tela7p2()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(coelho, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  //Título
  textSize(32);
  text("Encontre as letras do seguinte animal: ", 405, 62);
  stroke(70);
  noFill();
  rect(10, 27, 780, 50, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(420, 440, 45, 3);
  rect(480, 440, 45, 3);
  rect(540, 440, 45, 3);
  rect(600, 440, 45, 3);
  rect(660, 440, 45, 3);
  rect(720, 440, 45, 3);
  
  //Configurações do teclado de letras 3x4
  stroke(0, 0, 128);
  noFill();
  rect(50, 120, 421, 250, 15);
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(366, 124, 100, 70, 15);//4º
  rect(54, 210, 100, 70, 15);//5º
  rect(158, 210, 100, 70, 15);//6º
  rect(262, 210, 100, 70, 15);//7º
  rect(366, 210, 100, 70, 15);//8º
  rect(54, 296, 100, 70, 15);//9º
  rect(158, 296, 100, 70, 15);//10º
  rect(262, 296, 100, 70, 15);//11º
  rect(366, 296, 100, 70, 15);//12º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('O', 105, 170);
  text('U', 105, 256);
  text('C', 105, 342);
  text('Y', 210, 170);
  text('D', 210, 256);
  text('M', 210, 342);
  text('R', 315, 170);
  text('H', 315, 256);
  text('L', 315, 342);
  text('E', 420, 170);
  text('T', 420, 256);
  text('I', 420, 342);

  //Configurações das resposta
  textFont(myFont);
  textSize(50);
  text('C', 445, 427);
  text('O', 505, 427);
  /*text('E', 565, 427);
  text('L', 625, 427);
  text('H', 685, 427);
  text('O', 745, 427);*/
  
  //Configurações do título do nível
  stroke(0, 0, 0);
  fill(138,43,226);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(0, 0, 0);
  text("quinto nível", 605, 120); 
  
  //Configurações da mudança do rect
  if (mouseX > 366 && mouseX < 466 && mouseY > 124 && mouseY < 194)
    {
      stroke(0, 0, 0);
      fill(0, 0, 0);
      rect(366, 124, 100, 70, 15);//4º
      textFont(myFont);
      fill(220, 220, 220);
      textSize(46);
      text('E', 420, 170);
    }
}

function Tela7p3()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(coelho, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  //Título
  textSize(32);
  text("Encontre as letras do seguinte animal: ", 405, 62);
  stroke(70);
  noFill();
  rect(10, 27, 780, 50, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(420, 440, 45, 3);
  rect(480, 440, 45, 3);
  rect(540, 440, 45, 3);
  rect(600, 440, 45, 3);
  rect(660, 440, 45, 3);
  rect(720, 440, 45, 3);
  
  //Configurações do teclado de letras 3x4
  stroke(0, 0, 128);
  noFill();
  rect(50, 120, 421, 250, 15);
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(366, 124, 100, 70, 15);//4º
  rect(54, 210, 100, 70, 15);//5º
  rect(158, 210, 100, 70, 15);//6º
  rect(262, 210, 100, 70, 15);//7º
  rect(366, 210, 100, 70, 15);//8º
  rect(54, 296, 100, 70, 15);//9º
  rect(158, 296, 100, 70, 15);//10º
  rect(262, 296, 100, 70, 15);//11º
  rect(366, 296, 100, 70, 15);//12º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('O', 105, 170);
  text('U', 105, 256);
  text('C', 105, 342);
  text('Y', 210, 170);
  text('D', 210, 256);
  text('M', 210, 342);
  text('R', 315, 170);
  text('H', 315, 256);
  text('L', 315, 342);
  text('E', 420, 170);
  text('T', 420, 256);
  text('I', 420, 342);

  //Configurações das resposta
  textFont(myFont);
  textSize(50);
  text('C', 445, 427);
  text('O', 505, 427);
  text('E', 565, 427);
  /*text('L', 625, 427);
  text('H', 685, 427);
  text('O', 745, 427);*/
  
  //Configurações do título do nível
  stroke(0, 0, 0);
  fill(138,43,226);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(0, 0, 0);
  text("quinto nível", 605, 120); 
  
  //Configurações da mudança do rect
  if (mouseX > 262 && mouseX < 362 && mouseY > 296 && mouseY < 366)
    {
      stroke(0, 0, 0);
      fill(0, 0, 0);
      rect(262, 296, 100, 70, 15);//11º
      textFont(myFont);
      fill(220, 220, 220);
      textSize(46);
      text('L', 315, 342);
    }
}

function Tela7p4()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(coelho, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  //Título
  textSize(32);
  text("Encontre as letras do seguinte animal: ", 405, 62);
  stroke(70);
  noFill();
  rect(10, 27, 780, 50, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(420, 440, 45, 3);
  rect(480, 440, 45, 3);
  rect(540, 440, 45, 3);
  rect(600, 440, 45, 3);
  rect(660, 440, 45, 3);
  rect(720, 440, 45, 3);
  
  //Configurações do teclado de letras 3x4
  stroke(0, 0, 128);
  noFill();
  rect(50, 120, 421, 250, 15);
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(366, 124, 100, 70, 15);//4º
  rect(54, 210, 100, 70, 15);//5º
  rect(158, 210, 100, 70, 15);//6º
  rect(262, 210, 100, 70, 15);//7º
  rect(366, 210, 100, 70, 15);//8º
  rect(54, 296, 100, 70, 15);//9º
  rect(158, 296, 100, 70, 15);//10º
  rect(262, 296, 100, 70, 15);//11º
  rect(366, 296, 100, 70, 15);//12º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('O', 105, 170);
  text('U', 105, 256);
  text('C', 105, 342);
  text('Y', 210, 170);
  text('D', 210, 256);
  text('M', 210, 342);
  text('R', 315, 170);
  text('H', 315, 256);
  text('L', 315, 342);
  text('E', 420, 170);
  text('T', 420, 256);
  text('I', 420, 342);

  //Configurações das resposta
  textFont(myFont);
  textSize(50);
  text('C', 445, 427);
  text('O', 505, 427);
  text('E', 565, 427);
  text('L', 625, 427);
  /*text('H', 685, 427);
  text('O', 745, 427);*/
  
  //Configurações do título do nível
  stroke(0, 0, 0);
  fill(138,43,226);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(0, 0, 0);
  text("quinto nível", 605, 120); 
  
  //Configurações da mudança do rect
  if (mouseX > 262 && mouseX < 362 && mouseY > 210 && mouseY < 280)
    {
      stroke(0, 0, 0);
      fill(0, 0, 0);
      rect(262, 210, 100, 70, 15);//7º
      textFont(myFont);
      fill(220, 220, 220);
      textSize(46);
      text('H', 315, 256);
    }
}

function Tela7p5()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(coelho, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  //Título
  textSize(32);
  text("Encontre as letras do seguinte animal: ", 405, 62);
  stroke(70);
  noFill();
  rect(10, 27, 780, 50, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(420, 440, 45, 3);
  rect(480, 440, 45, 3);
  rect(540, 440, 45, 3);
  rect(600, 440, 45, 3);
  rect(660, 440, 45, 3);
  rect(720, 440, 45, 3);
  
  //Configurações do teclado de letras 3x4
  stroke(0, 0, 128);
  noFill();
  rect(50, 120, 421, 250, 15);
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(366, 124, 100, 70, 15);//4º
  rect(54, 210, 100, 70, 15);//5º
  rect(158, 210, 100, 70, 15);//6º
  rect(262, 210, 100, 70, 15);//7º
  rect(366, 210, 100, 70, 15);//8º
  rect(54, 296, 100, 70, 15);//9º
  rect(158, 296, 100, 70, 15);//10º
  rect(262, 296, 100, 70, 15);//11º
  rect(366, 296, 100, 70, 15);//12º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('O', 105, 170);
  text('U', 105, 256);
  text('C', 105, 342);
  text('Y', 210, 170);
  text('D', 210, 256);
  text('M', 210, 342);
  text('R', 315, 170);
  text('H', 315, 256);
  text('L', 315, 342);
  text('E', 420, 170);
  text('T', 420, 256);
  text('I', 420, 342);

  //Configurações das resposta
  textFont(myFont);
  textSize(50);
  text('C', 445, 427);
  text('O', 505, 427);
  text('E', 565, 427);
  text('L', 625, 427);
  text('H', 685, 427);
  //text('O', 745, 427);
  
  //Configurações do título do nível
  stroke(0, 0, 0);
  fill(138,43,226);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(0, 0, 0);
  text("quinto nível", 605, 120); 
  
  //Configurações da mudança do rect
  if (mouseX > 54 && mouseX < 154 && mouseY > 124 && mouseY < 194)
    {
      stroke(0, 0, 0);
      fill(0, 0, 0);
      rect(54, 124, 100, 70, 15);//1º
      textFont(myFont);
      fill(220, 220, 220);
      textSize(46);
      text('O', 105, 170);
    }
}

function Tela7p6()
{
  //Configurações das imagens
  background(240);
  image(plan3, 0, 0);
  image(coelho, 520, 140);
  stroke(28, 28, 28);
  noFill();
  rect(517, 138, 165, 130, 15);
  
  //Formatação do texto
  textFont(myFont);
  textAlign(CENTER);
  fill(28, 28, 28);
  //Título
  textSize(54);
  fill(0,128,0);
  text("PARABÉNS!!", 405, 62);
  stroke(0,128,0);
  noFill();
  rect(215, 13, 370, 63, 15);
  
  //Configuração da linha de resposta
  fill(0);
  rect(420, 440, 45, 3);
  rect(480, 440, 45, 3);
  rect(540, 440, 45, 3);
  rect(600, 440, 45, 3);
  rect(660, 440, 45, 3);
  rect(720, 440, 45, 3);
  
  //Configurações do teclado de letras 3x4
  stroke(0, 0, 128);
  noFill();
  rect(50, 120, 421, 250, 15);
  rect(54, 124, 100, 70, 15);//1º
  rect(158, 124, 100, 70, 15);//2º
  rect(262, 124, 100, 70, 15);//3º
  rect(366, 124, 100, 70, 15);//4º
  rect(54, 210, 100, 70, 15);//5º
  rect(158, 210, 100, 70, 15);//6º
  rect(262, 210, 100, 70, 15);//7º
  rect(366, 210, 100, 70, 15);//8º
  rect(54, 296, 100, 70, 15);//9º
  rect(158, 296, 100, 70, 15);//10º
  rect(262, 296, 100, 70, 15);//11º
  rect(366, 296, 100, 70, 15);//12º
  textFont(myFont);
  fill(0, 0, 128);
  textSize(46);
  text('O', 105, 170);
  text('U', 105, 256);
  text('C', 105, 342);
  text('Y', 210, 170);
  text('D', 210, 256);
  text('M', 210, 342);
  text('R', 315, 170);
  text('H', 315, 256);
  text('L', 315, 342);
  text('E', 420, 170);
  text('T', 420, 256);
  text('I', 420, 342);

  //Configurações das resposta
  textFont(myFont);
  textSize(50);
  text('C', 445, 427);
  text('O', 505, 427);
  text('E', 565, 427);
  text('L', 625, 427);
  text('H', 685, 427);
  text('O', 745, 427);
  
  //Configurações do título do nível
  stroke(0, 0, 0);
  fill(138,43,226);
  rect(475, 90, 260, 40, 15);
  textFont(myFont);
  textSize(31);
  textAlign(CENTER);
  fill(0, 0, 0);
  text("quinto nível", 605, 120);
  
  //Configurações do texto final
  stroke(0, 0, 0);
  fill(0, 100, 0);
  rect(110, 450, 380, 55, 15);
  textFont(myFont);
  textSize(42);
  fill(220, 220, 220);
  text('Jogo concluido', 295, 490);
  
  //Configurações do botão próximo
  stroke(0, 0, 0);
  noFill();
  rect(540, 453, 200, 57, 15);
  textFont(myFont);
  textSize(40);
  fill(0, 0, 128);
  text('PRóXIMO', 640, 495);
  //Mudaça de cor do botao próximo
  if (mouseX > 540 && mouseX < 740 && mouseY > 453 && mouseY < 510)
      {
        stroke(250, 250, 250);
        fill(28, 28, 28);
        rect(540, 453, 200, 57, 15);
        textFont(myFont);
        textSize(40);
        fill(220, 220, 220);
        text('PRóXIMO', 640, 495);
      }
  //Configurações da mudança do rect
  /*if (mouseX > 366 && mouseX < 466 && mouseY > 296 && mouseY < 366)
    {
      stroke(0, 0, 0);
      fill(0, 0, 0);
      rect(366, 296, 100, 70, 15);//12º
      textFont(myFont);
      fill(220, 220, 220);
      textSize(46);
      text('A', 420, 342);
    }
  */
}

function TelaFinal()
{
  //Configurações do plano de fundo
  background(240);
  image(fundo, 0, 0);
  
  //Título
  stroke((28,28,28));
  fill(255,250,250);
  rect(52, 63, 666, 112, 15);
  textFont(myFont);
  textAlign(CENTER);
  textSize(42);
  fill(28,28,28);
  text("Chegamos na etapa final de", 380, 102);
  text("nosso jogo.", 380, 162);
  
  //Corpo do jogo
  textFont(myFont);
  textAlign(CENTER);
  textSize(30);
  fill(106,90,205);
  text("Estas foram as palavras feitas", 380, 202);
  text("durante nosso aprendizado", 380, 235);
  
  //Palavras feitas no aprendizado
  //Configurações da primeira imagem
  image(casa, 75, 250);
  stroke(28, 28, 28);
  noFill();
  rect(75, 250, 165, 130, 15);
  
  //Configurações da segunda imagem
  image(peteca, 305, 250);
  stroke(28, 28, 28);
  noFill();
  rect(305, 250, 165, 130, 15);
  
  //Configurações da terceira imagem
  image(triangulo, 535, 250);
  stroke(28, 28, 28);
  noFill();
  rect(535, 250, 165, 130, 15);
  
  //Configurações da quarta imagem
  image(retangulo, 100, 390);
  stroke(28, 28, 28);
  noFill();
  rect(100, 390, 165, 130, 15);
  
  //Configurações da quarta imagem
  image(coelho, 510, 390);
  stroke(28, 28, 28);
  noFill();
  rect(510, 390, 165, 130, 15);
  
  //Visualização das palavras com o mouse
  if (mouseX > 75 && mouseX < 240 && mouseY > 250 && mouseY < 380 )
    {
  textFont(myFont);
  textAlign(CENTER);
  textSize(38);
  fill(255, 0, 0);
  text("CASA", 390, 450);
    }
  if (mouseX > 305 && mouseX < 470 && mouseY > 250 && mouseY < 380 )
    {
  textFont(myFont);
  textAlign(CENTER);
  textSize(38);
  fill(255,215,0);
  text("PETECA", 390, 450);
    }
  if (mouseX > 535 && mouseX < 700 && mouseY > 250 && mouseY < 380 )
    {
  textFont(myFont);
  textAlign(CENTER);
  textSize(38);
  fill(154,205,50);
  text("TRIÂNGULO", 390, 450);
    }
  if (mouseX > 100 && mouseX < 265 && mouseY > 390 && mouseY < 520 )
    {
  textFont(myFont);
  textAlign(CENTER);
  textSize(38);
  fill(0,0,205);
  text("RETÂNGULO", 390, 450);
    }
  if (mouseX > 510 && mouseX < 675 && mouseY > 390 && mouseY < 520 )
    {
  textFont(myFont);
  textAlign(CENTER);
  textSize(38);
  fill(138,43,226);
  text("COELHO", 390, 450);
    }
  
  //Configurações do botão Início
  stroke(0, 0, 0);
  fill(250, 250, 250);
  rect(100, 530, 165, 30, 15);
  textFont(myFont);
  textAlign(CENTER);
  textSize(28);
  fill(0, 0, 0);
  text("INÍCIO", 182, 553);
  
  
  if (mouseX > 100 && mouseX < 265 && mouseY > 530 && mouseY < 560)
    {
      stroke(0, 0, 0);
      fill(106,90,205);
      rect(100, 530, 165, 30, 15);
      textFont(myFont);
      textAlign(CENTER);
      textSize(28);
      fill(0, 0, 0);
      text("INÍCIO", 182, 553);
    }
}

function AvancoTela1()
{
  if (tela == 1)
    if (mouseX > 158 && mouseX < 258 && mouseY > 210 && mouseY < 280)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
        {
          tela = 1.1;
        }
  if (tela == 1.1)
    if (mouseX > 158 && mouseX < 258 && mouseY > 124 && mouseY < 194)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
        {
          tela = 1.2;
        }
  if (tela == 1.2)
    if (mouseX > 54 && mouseX < 154 && mouseY > 210 && mouseY < 280)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
        {
          tela = 1.3;
        }
  if (tela == 1.3)
    if (mouseX > 158 && mouseX < 258 && mouseY > 124 && mouseY < 194)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
        {
          tela = 1.4;
        }
  if (tela == 1.4)
    if (mouseX > 540 && mouseX < 740 && mouseY > 413 && mouseY < 470)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
        {
          tela = 4;
        } 
}

function AvancoTela2()
{
  if (tela == 4)
    if (mouseX > 54 && mouseX < 154 && mouseY > 210 && mouseY < 280)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
          {
            tela = 4.1;
          }
  if (tela == 4.1)
    if (mouseX > 366 && mouseX < 466 && mouseY > 124 && mouseY < 194)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
          {
            tela = 4.2;
          }
  if (tela == 4.2)
    if (mouseX > 54 && mouseX < 154 && mouseY > 296 && mouseY < 366)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
          {
            tela = 4.3;
          }
  if (tela == 4.3)
    if (mouseX > 366 && mouseX < 466 && mouseY > 124 && mouseY < 194)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
          {
            tela = 4.4;
          }
  if (tela == 4.4)
    if (mouseX > 262 && mouseX < 362 && mouseY > 210 && mouseY < 280)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
          {
            tela = 4.5;
          }
  if (tela == 4.5)
    if (mouseX > 366 && mouseX < 466 && mouseY > 296 && mouseY < 366)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
          {
            tela = 4.6;
          }
  if (tela == 4.6)
    if (mouseX > 540 && mouseX < 740 && mouseY > 453 && mouseY < 510)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
          {
            tela = 5;
          }
  //Desenvolver nível 3...
}

function AvancoTela3()
{
  if (tela == 5)
    if (mouseX > 54 && mouseX < 154 && mouseY > 296 && mouseY < 366)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
          {
            tela = 5.1;
          }
  if (tela == 5.1)
    if (mouseX > 158 && mouseX < 258 && mouseY > 124 && mouseY < 194)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
          {
            tela = 5.2;
          }
  if (tela == 5.2)
    if (mouseX > 262 && mouseX < 362 && mouseY > 296 && mouseY < 366)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
          {
            tela = 5.3;
          }
  if (tela == 5.3)
    if (mouseX > 54 && mouseX < 154 && mouseY > 124 && mouseY < 194)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
          {
            tela = 5.4;
          }
  if (tela == 5.4)
    if (mouseX > 262 && mouseX < 362 && mouseY > 124 && mouseY < 194)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
          {
            tela = 5.5;
          }
  if (tela == 5.5)
    if (mouseX > 158 && mouseX < 258 && mouseY > 210 && mouseY < 280)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
          {
            tela = 5.6;
          }
  if (tela == 5.6)
    if (mouseX > 366 && mouseX < 466 && mouseY > 124 && mouseY < 194)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
          {
            tela = 5.7;
          }
  if (tela == 5.7)
    if (mouseX > 262 && mouseX < 362 && mouseY > 210 && mouseY < 280)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
          {
            tela = 5.8;
          }
  if (tela == 5.8)
    if (mouseX > 54 && mouseX < 154 && mouseY > 210 && mouseY < 280)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
          {
            tela = 5.9;
          }
  if (tela == 5.9)
    if (mouseX > 540 && mouseX < 740 && mouseY > 453 && mouseY < 510)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
          {
            tela = 6;
          }
  
}

function AvancoTela4()
{
  if (tela == 6)
    if (mouseX > 158 && mouseX < 258 && mouseY > 124 && mouseY < 194)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
          {
            tela = 6.1;
          }
  if (tela == 6.1)
    if (mouseX > 366 && mouseX < 466 && mouseY > 124 && mouseY < 194)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
          {
            tela = 6.2;
          }
  if (tela == 6.2)
    if (mouseX > 54 && mouseX < 154 && mouseY > 296 && mouseY < 366)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
          {
            tela = 6.3;
          }
  if (tela == 6.3)
    if (mouseX > 54 && mouseX < 154 && mouseY > 124 && mouseY < 194)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
          {
            tela = 6.4;
          }
  if (tela == 6.4)
    if (mouseX > 262 && mouseX < 362 && mouseY > 124 && mouseY < 194)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
          {
            tela = 6.5;
          }
  if (tela == 6.5)
    if (mouseX > 262 && mouseX < 362 && mouseY > 210 && mouseY < 280)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
          {
            tela = 6.6;
          }
  if (tela == 6.6)
    if (mouseX > 54 && mouseX < 154 && mouseY > 210 && mouseY < 280)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
          {
            tela = 6.7;
          }
  if (tela == 6.7)
    if (mouseX > 158 && mouseX < 258 && mouseY > 296 && mouseY < 366)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
          {
            tela = 6.8;
          }
  if (tela == 6.8)
    if (mouseX > 366 && mouseX < 466 && mouseY > 210 && mouseY < 280)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
          {
            tela = 6.9;
          }
  if (tela == 6.9)
    if (mouseX > 540 && mouseX < 740 && mouseY > 453 && mouseY < 510)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
          {
            tela = 7;
          }
  
}

function AvancoTela5()
{
  if (tela == 7)
    if (mouseX > 54 && mouseX < 154 && mouseY > 296 && mouseY < 366)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
          {
            tela = 7.1;
          }
  if (tela == 7.1)
    if (mouseX > 54 && mouseX < 154 && mouseY > 124 && mouseY < 194)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
          {
            tela = 7.2;
          }
  if (tela == 7.2)
    if (mouseX > 366 && mouseX < 466 && mouseY > 124 && mouseY < 194)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
          {
            tela = 7.3;
          }
  if (tela == 7.3)
    if (mouseX > 262 && mouseX < 362 && mouseY > 296 && mouseY < 366)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
          {
            tela = 7.4;
          }
  if (tela == 7.4)
    if (mouseX > 262 && mouseX < 362 && mouseY > 210 && mouseY < 280)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
          {
            tela = 7.5;
          }
  if (tela == 7.5)
    if (mouseX > 54 && mouseX < 154 && mouseY > 124 && mouseY < 194)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
          {
            tela = 7.6;
          }
  if (tela == 7.6)
    if (mouseX > 540 && mouseX < 740 && mouseY > 453 && mouseY < 510)
      if (mouseIsPressed)
        if (mouseButton == LEFT)
          {
            tela = 8;
          }
}


function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  if (tela === 0)
    {
      Telamenu();
      VisRet();
    }
  //Grupo de telas da primeira fase
  if (tela == 1)
    {
      TelaInicial();
      AvancoTela1();
    }
  if (tela == 1.1)
    {
      Tela1p1();
      AvancoTela1();
    }
  if (tela == 1.2)
    {
      Tela1p2();
      AvancoTela1();
    }
  if (tela == 1.3)
    {
      Tela1p3();
      AvancoTela1();
    }
  if (tela == 1.4)
    {
      Tela1p4();
      AvancoTela1();
    }
  if (tela == 4)
    {
      Tela4();
      AvancoTela2();
    }
  if (tela == 4.1)
    {
      Tela4p1();
      AvancoTela2();
    }
  if (tela == 4.2)
    {
      Tela4p2();
      AvancoTela2();
    }
  if (tela == 4.3)
    {
      Tela4p3();
      AvancoTela2();
    }
  if (tela == 4.4)
    {
      Tela4p4();
      AvancoTela2();
    }
  if (tela == 4.5)
    {
      Tela4p5();
      AvancoTela2();
    }
  if (tela == 4.6)
    {
      Tela4p6();
      AvancoTela2();
    }
  if (tela == 5)
    {
      Tela5();
      AvancoTela3();
    }
  if (tela == 5.1)
    {
      Tela5p1();
      AvancoTela3();
    }
  if (tela == 5.2)
    {
      Tela5p2();
      AvancoTela3();
    }
  if (tela == 5.3)
    {
      Tela5p3();
      AvancoTela3();
    }
  if (tela == 5.4)
    {
      Tela5p4();
      AvancoTela3();
    }
  if (tela == 5.5)
    {
      Tela5p5();
      AvancoTela3();
    }
  if (tela == 5.6)
    {
      Tela5p6();
      AvancoTela3();
    }
  if (tela == 5.7)
    {
      Tela5p7();
      AvancoTela3();
    }
  if (tela == 5.8)
    {
      Tela5p8();
      AvancoTela3();
    }
  if (tela == 5.9)
    {
      Tela5p9();
      AvancoTela3();
    }
  if (tela == 6)
    {
      Tela6();
      AvancoTela4();
    }
  if (tela == 6.1)
    {
      Tela6p1();
      AvancoTela4();
    }
  if (tela == 6.2)
    {
      Tela6p2();
      AvancoTela4();
    }
  if (tela == 6.3)
    {
      Tela6p3();
      AvancoTela4();
    }
  if (tela == 6.4)
    {
      Tela6p4();
      AvancoTela4();
    }
  if (tela == 6.5)
    {
      Tela6p5();
      AvancoTela4();
    }
  if (tela == 6.6)
    {
      Tela6p6();
      AvancoTela4();
    }
  if (tela == 6.7)
    {
      Tela6p7();
      AvancoTela4();
    }
  if (tela == 6.8)
    {
      Tela6p8();
      AvancoTela4();
    }
  if (tela == 6.9)
    {
      Tela6p9();
      AvancoTela4();
    }
  if (tela == 7)
    {
      Tela7();
      AvancoTela5();
    }
  if (tela == 7.1)
    {
      Tela7p1();
      AvancoTela5();
    }
  if (tela == 7.2)
    {
      Tela7p2();
      AvancoTela5();
    }
  if (tela == 7.3)
    {
      Tela7p3();
      AvancoTela5();
    }
  if (tela == 7.4)
    {
      Tela7p4();
      AvancoTela5();
    }
  if (tela == 7.5)
    {
      Tela7p5();
      AvancoTela5();
    }
  if (tela == 7.6)
    {
      Tela7p6();
      AvancoTela5();
    }
  if (tela == 8)
    {
      TelaFinal();
      if (tela == 8)
        if (mouseX > 100 && mouseX < 265 && mouseY > 530 && mouseY < 560)
          if (mouseIsPressed)
            if (mouseButton == LEFT)
              {
                tela = 0;
              }
    }
  if (tela == 2)
    {
      TelaInstrucoes();
    }
  if (tela == 3)
    {
      TelaCreditos();
    }
}

//Precisa criar a tela créditos
//Rascunhos
//Configuração de letras 4x3
/*
  stroke(0, 0, 128);
  noFill();
  rect(50, 120, 421, 270, 15);
  rect(54, 124, 100, 70, 15);
  rect(158, 124, 100, 70, 15);
  rect(262, 124, 100, 70, 15);
  rect(366, 124, 100, 70, 15);
  rect(54, 210, 100, 70, 15);
  rect(158, 210, 100, 70, 15);
  rect(262, 210, 100, 70, 15);
  rect(366, 210, 100, 70, 15);
  rect(54, 296, 100, 70, 15);
  rect(158, 296, 100, 70, 15);
  rect(262, 296, 100, 70, 15);
  rect(366, 296, 100, 70, 15);*/
