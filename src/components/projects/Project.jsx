import React from 'react';


const Project = ({data}) => {
  return (
    <div className="projects__container">
      <h2 className="projects__container__header">{data.title}</h2>
      {data.image ? (
        <img className="projects__container__image" src={data.image} alt="Piano Player" />
      ) : (null)}
      {data.video ? (
        <iframe className="projects__container__image" width="869" height="200" src={data.video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      ) : (null)}
      <p className="projects__container__description">{data.description}</p>
      <div className="projects__container__buttons">
        {data.preview ? (
          <button className="projects__button" onClick={(event) => {event.preventDefault(); window.open(data.preview);}}>Preview</button>
        ) : (null)}
        {data.source ? (
          <button className="projects__button" onClick={(event) => {event.preventDefault(); window.open(data.source);}}>Source</button>
        ) : (null)}
        {data.download ? (
          <button className="projects__button" onClick={(event) => {event.preventDefault(); window.open(data.download);}}>Download</button>
        ) : (null)}
      </div>
    </div>
  );
}

export default Project;
