import {getJobs} from './db/jobs.js'

export const resolvers = {
    Query: {
        jobs: async ()=> getJobs()
            
    },
    Job:{
        // date:()=>'12-2022-4' we can  do it hardcoded 
        // date:(job)=>{
        //     console.log("resolving job",job)
        //     return job.createdAt
        // }
        date:(job)=>toIsoDate(job.createdAt)
    }
   
    }
    function toIsoDate(value){
        return value.slice(0,'yyyy-mm.dd'.length)
}

        
    

