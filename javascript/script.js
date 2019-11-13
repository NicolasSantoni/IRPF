function calcular() {
  var sal = document.getElementById("bruto").value;
  var nome = document.getElementById("nome").value;
  var pINSS;
  var pIRPF;
  var dIRPF;
  var INSS;
  var IRPF;
  if (sal<1751.82) {
    pINSS=8;
    INSS=sal*(pINSS/100);
  }
  else if (sal>1751.81&&sal<2919.73) {
    pINSS=9;
    INSS=sal*(pINSS/100);
  }
  else if (sal>2919.72&&sal<5839.46) {
    pINSS=11;
    INSS=sal*(pINSS/100);
  }
  else if (sal>5839.45) {
    pINSS=642.34;
    INSS=642.34;
  }
  if (sal<1903.99) {
    pIRPF=0;
    dIRPF=0;
  }
  else if (sal>1903.98&&sal<2826.66) {
    pIRPF=7.5;
    dIRPF=142.80;
  }
  else if (sal>2826.65&&sal<3751.06) {
    pIRPF=15;
    dIRPF=354.80;
  }
  else if (sal>3751.05&&sal<4664.69) {
    pIRPF=22.5;
    dIRPF=636.13;
  }
  else if (sal>4664.68) {
    pIRPF=27.5;
    dIRPF=869.36;
  }
  IRPF=sal*(pIRPF/100)-dIRPF;
  var arreINSS=parseFloat(INSS.toFixed(2));
  var arreIRPF=parseFloat(IRPF.toFixed(2));
  var salLiq=sal-INSS-IRPF;
  var arredondado = parseFloat(salLiq.toFixed(2));
  if (sal>5839.45) {
    document.getElementsByTagName('table')[0].innerHTML+="<tr><th>"+nome+"</td><td>R$"+sal+"</td><td>R$"+pINSS+"</td><td>R$"+arreINSS+"</td><td>"+pIRPF+"%</td><td>"+arreIRPF+"</td><td>"+arredondado+"</td><tr>";
  }
  else {
    document.getElementsByTagName('table')[0].innerHTML+="<tr><th>"+nome+"</td><td>R$"+sal+"</td><td>"+pINSS+"%</td><td>R$"+arreINSS+"</td><td>"+pIRPF+"%</td><td>R$"+arreIRPF+"</td><td>R$"+arredondado+"</td><tr>";
  }

}
