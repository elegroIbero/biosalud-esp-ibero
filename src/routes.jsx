import { Routes, Route } from 'react-router-dom';
import { App } from './App';
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { Galery } from './components/Galery';
import { Error404 } from './components/Error404';

const AppRoutes = function () {
	return (
		<App>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/galery' element={<Galery />} />
				<Route path='*' element={<Error404 />} />
			</Routes>
		</App>
	);
};

export { AppRoutes };
