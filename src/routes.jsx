import { Routes, Route, useLocation } from 'react-router-dom';
import { App } from './App';
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { Error404 } from './components/Error404';
import { Portafolio } from './components/Portafolio';
import { Login } from './components/Login';
import { useEffect } from 'react';

const ScrollToTop = function () {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return null;
};

const AppRoutes = function () {
	return (
		<App>
			<ScrollToTop />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/portafolio' element={<Portafolio />} />
				<Route path='*' element={<Error404 />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</App>
	);
};

export { AppRoutes };
