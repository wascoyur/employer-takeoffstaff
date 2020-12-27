import {getUserPermissions} from './users'

export default {
  login: ({username, password}) =>{
    localStorage.setItem('username', username);
    const auth = getUserPermissions(username, password)
    
    return (auth?
      Promise.resolve():
        Promise.reject(console.log(`check password/username
         ${username}, ${password}`))
    )
  },
  logout:()=>{
    localStorage.removeItem('username');
    return Promise.resolve();
  },
  checkError:({status})=>{
    if (status === '401' || status === '403') {
      localStorage.removeItem('username');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: ()=>{
    return localStorage.getItem('username')
    ?Promise.resolve()
      :Promise.reject()
  },
  getPermissions:()=>{
    return Promise.resolve();
  }
}