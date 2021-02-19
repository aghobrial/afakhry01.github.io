import React, { Fragment, useEffect, useState } from 'react';
import { useEasybase } from 'easybase-react';
import Project from './Project';


const ProjectsList = () => {
  const { Query } = useEasybase();
  const [ data, setData ] = useState([]);

  useEffect(() => {
    Query({ queryName: "ALL-PROJECTS", tableName: "PROJECTS", descending: true, sortBy: "last_modified"})
    .then(res => {
      setData(res);
    });
  }, [])

  return (
    <Fragment>
      {data.map(item => {
        return <Project data={item}/>
      })}
    </Fragment>
  );
}
 
export default ProjectsList;