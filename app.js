const percentSelect = document.getElementById("percentage");
const totalIntput = document.getElementById("totalid");
const presentInput = document.getElementById("presentid");
const btnInput = document.getElementById("btnid");
const resultBox = document.getElementById("result");

btnInput.addEventListener("click", () => {
    let percentage = parseInt(percentSelect.value);
    let present = parseInt(presentInput.value);
    let total = parseInt(totalIntput.value);



    if(present<0 || total<present || total<=0)
    {
        return (resultBox.innerHTML="Please Enter Right Value ¯\\_(ツ)_/¯");
    }
    
    if(present/total >= percentage/100)
    {
        const holidays = dayHoliday(present, total, percentage);
        return (resultBox.innerHTML=holidayText(holidays, present, total));

    }

    const needClass= reqClass(present, total, percentage);
    return (resultBox.innerHTML=attendClassText(needClass, present, total, percentage));


});
const reqClass = (present, total, percentage) => {
    return Math.ceil((percentage*total-100 * present)/(100-percentage));

};
const dayHoliday=(present, total, percentage)=>{
    return Math.floor((100*present-percentage*total)/percentage);
};
const holidayText = (holidays, present, total) =>
  `You can bunk only <strong>${holidays}</strong> Classes.<br>Current Attendance: <strong>${present}/${total}</strong> -> <strong>${(
    (present / total) *100).toFixed(2)}%</strong><br>Attendance Then: <strong>${present}/${
    holidays + total
  }</strong> -> <strong>${(
    (present / (holidays + total)) *100 ).toFixed(2)}%</strong>`;


  const attendClassText = (needClass, present, total, percentage) =>
  `You need to attend <strong>${needClass}</strong> more classes to attain ${percentage}% attendance<br>Current Attendance: <strong>${present}/${total}</strong> ->  <strong>${(
    (present / total) *
    100
  ).toFixed(2)}%</strong><br>Attendance Required: <strong>${
    needClass + present
  }/${needClass + total};</strong> -> <strong>${(
    ((needClass + present) / (needClass + total)) *
    100
  ).toFixed(2)}%</strong>`;
