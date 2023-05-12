
fetch('./data/data.json')
.then(response =>  response.json())
.then((data) => {
  printHtml(data);
})



const printHtml = (data) =>  {
  const summaryWrap = document.querySelector('.wrap-sumary-info');

  const inicialValue = 0;
  const sumScore = data.reduce((accu, currentValue) => accu + currentValue.score , inicialValue);
   
  const  r = document.createTextNode(Math.floor(sumScore / 4));
  const  result = document.querySelector('.result');
  result.appendChild(r);

    data.forEach(element => {
      
    const wrapSumary = document.createElement('div');
    const wrapTask = document.createElement('div');
    const img = document.createElement('img');
    const pTask = document.createElement('p');
    const wrapScore = document.createElement('div');
    const pScore = document.createElement('p');
    const spanScore = document.createElement('span');
    const textTask = document.createTextNode(element.category);
    const textScore = document.createTextNode(element.score);
    const textSpan = document.createTextNode(' / 100');
    img.src = element.icon;
    wrapSumary.className = 'wrap-sumary-content';
    wrapTask.className = 'wrap-sumary-task';
    wrapScore.className = 'wrap-sumary-score';
    wrapSumary.appendChild(wrapTask);
    wrapSumary.appendChild(wrapScore);
    wrapTask.appendChild(img);
    wrapTask.appendChild(pTask);
    pTask.appendChild(textTask);
    wrapScore.appendChild(pScore);
    pScore.appendChild(textScore);
    pScore.appendChild(spanScore);
    spanScore.appendChild(textSpan);

    summaryWrap.appendChild(wrapSumary);
  
    });
  
}


