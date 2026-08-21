import { createRootRoute, createRoute } from '@tanstack/react-router';
import Index from './routes/index';

// Crear la ruta raíz
const rootRoute = createRootRoute();

// Crear la ruta de inicio
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
});

// Exportar el árbol de rutas
export const routeTree = rootRoute.addChildren([indexRoute]);