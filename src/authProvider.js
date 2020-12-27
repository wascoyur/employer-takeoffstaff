export default {
  login: ({username, password}) =>{
    let auth = true
    fetch(`http://localhost:3001/users?username=${username}`)
      .then (resp => resp.json())
      .then(out =>{
        auth = out[0].password === password ? true : false;
        localStorage.setItem('password' , out[0].password)
      })
    if (auth){
      return Promise.resolve()
    } else {
      return Promise.reject()
    }
  },
  logout:()=>{
    localStorage.removeItem('password');
    return Promise.resolve();
  },
  checkError:({status})=>{
    if (status === '401' || status === '403') {
      localStorage.removeItem('password');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: ()=>{
    return localStorage.getItem('password')
    ?Promise.resolve()
      :Promise.reject()
  },
  getPermissions:()=>{
    return Promise.resolve();
  }
}