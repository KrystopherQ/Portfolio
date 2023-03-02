import React from 'react';

function Project({ imgPreview, name, repoLink, deployedLink }) {
    return (
        <div className="card m-auto lg:m-2 lg:w-2/5 bg-base-100 border-2 border-black">
            <figure><img src={imgPreview} className="h-96" alt="Project preview" /></figure>

            <h3 className="card-title m-3">{name}</h3>
            <div className="card-actions justify-around m-3">
                <a href={deployedLink} target="_blank" className="btn btn-primary" rel="noreferrer">Visit Site</a>
                <a href={repoLink} target="_blank" className="btn btn-secondary" rel="noreferrer">Visit Repo</a>
            </div>
        </div>
    )
}

export default Project;