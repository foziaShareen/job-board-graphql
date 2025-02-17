we cannot open sqlite3 in vscode as it is</br>
binary , we have to install extention for it </br>
we will install sqlite by florian<br>
date is not present in our database, rather it is present in database as createdAt</br>
but we want to display it as date field there are many ways to do it</br>
Job:{
        // date:()=>'12-2022-4' we can  do it hardcoded 
}
or dynamic as below<br>
Job:{
     date:(job)=>{
            console.log("resolving job",job)
            return job.createdAt
        }
}
this date contain time also we can slice to get only yyy-mmm-ddd 
