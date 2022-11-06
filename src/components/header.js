import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from "react-router-dom";


function AppHeader() {

    const location = useLocation()['pathname'];

    return(
        <header className='absolute top-0 p-2.5 z-10 w-full'>
            { location !== '/play' && location !== '/' &&
                <Link className='text-slate-300 underline' to='/' >
                    <span className="material-icons text-4xl">
                        arrow_back
                    </span>
                </Link>
            }
        </header>
    );
}
export default AppHeader;