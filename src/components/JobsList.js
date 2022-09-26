import Job from "./Job"
const JobsList = ({jobs,search,handleSearch}) =>{

    function isSubArray(A,D,C,E,B)
{
    let count = 0
    let len = B.length
    if(len === 0) return true
    B.forEach(element => {
        if(A.includes(element)){
            count++
        }
        else if(D.includes(element)){
            count++
        }
        else if(C.includes(element)){
            count++
        }
        else if(E.includes(element)){
            count++
        }
    });
    if(count === len) return true
    else return false
}
    let nJob = jobs.filter(job=>{
        return isSubArray(job.languages,job.tools,job.role,job.level,search)
    })
    return(
        <div className="container jobslist">
            {
                nJob.map(job =>{
                    return(
                        <Job key={job.id} search={search} job ={job} handleSearch={handleSearch}/>
                    )
                })
            }
        </div>
    )
}
export default JobsList