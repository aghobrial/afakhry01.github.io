import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useEasybase } from 'easybase-react';
import Project from './Project';
import { ProjectsContext } from '../../contexts/ProjectsContext';

const ProjectsList = () => {
  const { Query } = useEasybase();
  const { state, dispatch } = useContext(ProjectsContext);

  useEffect(() => {
    Query({ queryName: "ALL-PROJECTS", tableName: "PROJECTS", descending: true, sortBy: "last_modified"})
    .then(res => {
      dispatch({type: 'SET_PROJECTS', payload: res})
    });
  }, [])

  return (
    <Fragment>
      {state.projects.map(item => {
        return <Project key={item._id} data={item}/>
      })}
    </Fragment>
  );
}
 
export default ProjectsList;
