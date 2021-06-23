class CalcController {

  constructor(){
    
    this._operation = [];
    this._locale = "pt-BR";
    this._displayCalcEl = document.querySelector("#display");
    this._dateEl = document.querySelector("#data");
    this._timeEl = document.querySelector("#hora");
    this._currentDate; 
    this.initialize();
    this.initButtonsEvents();
    


  }

  initialize(){

    this.setDisplayDateTime();

    setInterval(()=>{

      this.setDisplayDateTime();

    },1000);


    // setInterval(()=>{

    //   this.displayDate = this.currentDate.toLocaleDateString(this._locale);
    //   this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

    // },1000)
    

  }

  addEventListenerAll(btn, events, funcao){

    events.split(' ').forEach(event =>{

      btn.addEventListener(event, funcao, false);

    }); 

  }

  clearAll(){

    this._operation = [];
  }

  clearEntry(){

    this._operation.pop();

  }

  //ultima posiçao do array
  getLastOperation(){

    return this._operation[this._operation.length-1];

  }

  isOperator(operador){

   return ( ['+','-','*','%','/'].indexOf(operador) > -1)

    // if( ['+','-','*','%','/'].indexOf(operador) > -1){

    //   return true;

    // }else{

    //   return false;

    // }

  }

  addOperation(add_operador){

    console.log('a',isNaN(this.getLastOperation()));

    //console.log(this._operation);

    //isNaN: não é do tipo Number;
    //Se for string
    if(isNaN(this.getLastOperation())){
    
        if(this.isOperator(add_operador)){
          
          //Trocar(substituir) operador
          this._operation[this._operation.length -1] = addValue;

        }else if(isNaN(add_operador)){

          //outra ação
          //console.log(addValue);

        }else {

          this._operation.push(add_operador);

        }

    }else{

      //Concatenar numeros, antes converte em string para ser ajuntado  
      let newValue = this.getLastOperation().toString() + value.toString();
      this._operation.push(newValue);

    }

    console.log(this._operation); 

  }

  setError(){

    this.displayCalc = "Error";

  }

  execBtn(value_textBnt){

    switch (value_textBnt){

      case 'ac':
        this.clearAll();
        break;

      case 'ce':
        this.clearEntry();
        break;

      case 'soma':
        this.addOperation('+');
        break;

      case 'subtracao':
        this.addOperation('-');
        break;

      case 'divisao':
        this.addOperation('/');
        break;  

      case 'mutiplicacao':
        this.addOperation('*');
        break;  

      case 'porcento':
        this.addOperation('%');
        break;    

      case 'igual':
        
        break; 

      case 'ponto':
        this.addOperation('.');
        break;
      
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        this.addOperation(parseInt(value_textBnt));
        break;

      default:
        this.setError();
        break;

    }

  }

  initButtonsEvents(){

    let buttons = document.querySelectorAll("#buttons > g, #parts > g");

    buttons.forEach((btn, index)=>{
      
      this.addEventListenerAll(btn, "click drag", e =>{

        let textBtn = btn.className.baseVal.replace("btn-",""); 

        this.execBtn(textBtn);

      });

      this.addEventListenerAll(btn, "mouseover mouseup mousedown", e =>{

        btn.style.cursor = "pointer";

      });

    }); 

    // buttons.forEach((btn, index)=>{
      
    //   btn.addEventListener('click', e =>{

    //     console.log(btn.className.baseVal.replace("btn-",""));

    //   });

    // })
    

  }

  setDisplayDateTime(){

    this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
      day: "2-digit",
      month: "long",
      year: "numeric"
    });

    this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

  }
  
  get displayCalc() {
  
    return this._displayCalcEl.innerHTML;
  
  }

  set displayCalc(value){

    this._displayCalcEl.innerHTML = value;
  }

  get displayTime() {
  
    return this._timeEl.innerHTML;
  
  }

  set displayTime(time){

    this._timeEl.innerHTML = time;
  }

  get displayDate() {
  
    return this._dateEl.innerHTML;
  
  }

  set displayDate(date){

    this._dateEl.innerHTML = date;
  }

  get currentDate(){

    return new Date();

  }

  set currentDate(valuedate){

    this._currentDate = valuedate;

  }


}