import React from "react";

const Job = ({job,search,handleSearch}) => {
    function srch(element) {
        if(search.includes(element)){
           let mySearch = search.filter(item => {return item!== element})
           handleSearch(mySearch) 
        }
        else{
            let mySearch = [...search , element]
            handleSearch(mySearch)
        }
    }
    return(
    <div className={`${job.featured ? "feature " : ""}container mb-4 px-4 py-3 job`}>
        <div className="d-flex justify-content-center align-items-center info">
            <img src={job.logo} alt=""/>
            <div className="ms-3 texts">
                <div className="company-div">
                    <p className="company">{job.company}</p>
                    {
                        job.new && 
                        <p className="ms-3 new">NEW!</p>
                    }
                    {
                        job.featured && 
                        <p className="ms-2 featured">FEATURED</p>
                    }
                </div>
                <p className="position">{job.position}</p>
                <div className="text-infos">
                    <p>{job.postedAt}</p>
                    <p>{job.contract}</p>
                    <p>{job.location}</p>
                </div>
            </div>
        </div>
        <div className="tags">
            <p onClick={() => srch(job.role)} className="tag">{job.role}</p>
            <p onClick={() => srch(job.level)} className="tag">{job.level}</p>
            {
                job.languages.map(e =>{
                    return (<p onClick={() => srch(e)} className="tag">{e}</p>)
                })
            }
            {
                job.tools.map(e =>{
                    return (<p onClick={() => srch(e)} className="tag">{e}</p>)
                })
            }
        </div> 
    </div>
    )
}
export default Job