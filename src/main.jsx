import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { StrictMode } from 'react';
import './index.scss';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	</StrictMode>
);
