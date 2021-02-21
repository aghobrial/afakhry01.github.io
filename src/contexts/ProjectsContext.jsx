import React, { useReducer } from 'react';
import projectsInitialState from '../initialStates/projectsInitialState';
import projectsReducer from '../reducers/projectsReducer';


export const ProjectsContext = React.createContext();

const ProjectsContextProvider = ({children}) => {
  const [ state, dispatch ] = useReducer(projectsReducer, projectsInitialState);

  return (
    <ProjectsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProjectsContext.Provider>
  );
}

export default ProjectsContextProvider;
