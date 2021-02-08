import sagas from './index';

const modules = [
  sagas,
];

const registerSagas = (middleware: { run: Function }) => {
  modules.forEach(module => {
    const sagas = Array.isArray(module) ? module : Object.values(module);

    sagas.forEach(saga => middleware.run(saga));
  });
};

export default registerSagas;
