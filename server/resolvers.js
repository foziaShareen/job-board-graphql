export const resolvers = {
    Query: {
        jobs:()=>{
            return [
                {
                    id:1,
                    title:"Job 1",
                    description:"This is job 1",
                },
                {
                    id:2,
                    title:"Job 2",
                    description:"This is job 2",
                }
            ]
        }
    }
};
        
    

