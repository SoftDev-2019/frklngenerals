const todayDate = () => {
    var tempDate = new Date();
    var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1);
    const currDate = "Current Date= "+date;
    return (
      {currDate}
    );
  }

  export default todayDate;