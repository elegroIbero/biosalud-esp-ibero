import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Menu from './includes/Menu';
import Footer from './includes/Footer';

const App = function ({ children }) {
	return (
		<div className='App'>
			<Menu />
			{children}
			<Footer />
		</div>
	);
};
export { App };
