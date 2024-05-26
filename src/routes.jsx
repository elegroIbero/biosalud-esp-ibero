import { Routes, Route } from 'react-router-dom';
import { App } from './App';
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { Error404 } from './components/Error404';
import { Portafolio } from './components/Portafolio';

const AppRoutes = function () {
	return (
		<App>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/portafolio' element={<Portafolio />} />
				<Route path='*' element={<Error404 />} />
			</Routes>
		</App>
	);
};

export { AppRoutes };
