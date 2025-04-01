const fs = require("fs");


function calculateTotalTime(records){
    let  totalMinutes = 0 ; 
    let lastInTime = null ; 
    for(let record of records){
        if(record.action == "IN"){
            lastInTime = new Date(record.timestamp)
        }else if(record.action == "OUT" && lastInTime){ 
            const outTime = new Date(record.timestamp);
            const diffMinutes = (outTime - lastInTime)/(1000*60); // Convert milliseconds to minutes
            totalMinutes += diffMinutes;
            lastInTime = null ;
        }
    }

    const hours = Math.floor(totalMinutes/60);
    const minutes = totalMinutes % 60 ; 
    return { hours , minutes};
}

fs.readFile("./attendence.log" , "utf8" , (err, data)=>{
    console.log(data);
    let arrData = data.split(" ");
    let reportJson = [];
    for(let i=0 ; i<=arrData.length ; i+=4){
        let empId = arrData[i+1];
        let timestamp = arrData[i];
        let action = arrData[i+2];
        let entryFound = false;
        if(empId!== undefined && empId?.length !== 0){
            empId = empId.replace(/[\[\]]/g , "")
            timestamp = timestamp.replace(/[\[\]\r\n]/g , "")
            action = action.replace(/[\[\]]/g , "")

                for(let entry of reportJson){
                    if(entry.employeeId == empId){
                        entry.records = [...entry.records , { "timestamp": timestamp , "action": action }]
                        entryFound = true;
                    }
                }

            if(!entryFound){
                reportJson.push({
                    "employeeId": empId,
                    "totalHours": 8,
                    "records": [{ "timestamp": timestamp , "action": action }]
                })
            }
            
        }
    }
    for(let record of reportJson){
        const { hours , minutes} = calculateTotalTime(record.records);
        record.totalHours = `${hours} hours and ${minutes} minutes`
    }

    fs.writeFile("./report.json" ,JSON.stringify(reportJson , null , 4),(err)=>{
        if (err) {
            console.error("Error writing to file:", err);
        } else {
            console.log("Data successfully written to report.json");
        }
    });
})
