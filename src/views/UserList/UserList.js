import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import api from '../../services/api';

import { UsersToolbar, UsersTable } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

// async function getStudents(){
//     event.preventDefault();

//     await api.get('/students/index', {
//       headers: {

//       }
//     }).then((res) => {
//       const { status, data } = res;

//       if (status === 200) {
//         localStorage.setItem('user', JSON.stringify(data.user));

//         history.push("/dashboard", { user: data });
//       }
//     }).catch((e) => {
//       const { status, data } = e.response;

//       if (status === 400) {
//         setMessageError(data.error);
//         setOpen(true);
//       }
//     })
// }

const UserList = (props) => {
  const classes = useStyles();
  const { user } = props;

  const [ users , setUsers] = useState([]);

  api.get('/students/index', {
    headers: {
      teacher: user._id
    }
  }).then((res) => {
    const { status, data } = res; 
    console.log(status, data)
    setUsers(data.response);
  }).catch((e) => {
    console.log(e)
  });


  return (
    <div className={classes.root}>
      <UsersToolbar />
      <div className={classes.content}>
        <UsersTable users={users} />
      </div>
    </div>
  );
};

export default UserList;
