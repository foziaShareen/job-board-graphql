import {getJob, getJobs} from './db/jobs.js'
import {getCompany} from './db/companies.js'

export const resolvers = {
    Query:{
        job:(_root,{id})=>getJob(id),
        company:(_root,{id})=>getCompany(id),

    
     
        jobs: async ()=> getJobs()
            
    },
    Job:{
        company:(job)=>{
            console.log("resolving job",job)
            return getCompany(job.companyId)
        },
        date:(job)=>toIsoDate(job.createdAt)
    }
}

        
        
        // date:()=>'12-2022-4' we can  do it hardcoded 
        // date:(job)=>{
        //     console.log("resolving job",job)
        //     return job.createdAt
        // }
       
    
    
   
    
    function toIsoDate(value){
        return value.slice(0, 'yyyy-mm-dd'.length)
}

        
    

