import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import Post from './Page/Post';
import Delete from "./Page/Delete"
import Nav from "./Page/Nav"
import Get from "./Page/Get"
import Up from './Page/Up';
import Form from "./Page/Form"
import Login from "./Page/Login"
import Forget from "./Page/Forget"

function App() {
  return (
    <div>

<Nav/>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/post" element={<Post />} />
  <Route path="/get" element={<Get />} />
  <Route path="/del" element={<Delete></Delete>}/>

  <Route path="/update" element={<Up></Up>}/>
  <Route path="/form" element={<Form></Form>}/>
  <Route path="/login" element={<Login></Login>}/>
  <Route path="/forget" element={<Forget></Forget>}/>
  </Routes>

    </div>
  )
}

export default App