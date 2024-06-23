import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from "./components/layout/index.tsx";
import { useThemeStore } from "./store/darkTheme.ts";
import Home from './screens/home/index.tsx'
import Signin from './screens/signin/index.tsx'
import User from './screens/toDoList/index.tsx'

import { AuthProvider } from "./auth/AuthContext.tsx";
import ProtectedRoute from "./auth/ProtectedRoute.tsx";

const App: React.FC = () =>{
    const { darkMode } = useThemeStore()

        return (
            <AuthProvider>
                <Router>
                    <GlobalStyles theme={{darkTheme: darkMode}}/>
                        <Routes>
                            <Route exact path="/" Component={Home}/>
                            <Route exact path="/login" Component={Signin}/>
                            <Route element = {<ProtectedRoute/>}>
                                <Route path="/user" Component={User}/>
                            </Route>
                        </Routes>
                </Router>
            </AuthProvider>
        )
    }

export default App
