//import { NotasInRAMRepository } from './notas.in.ram.repository.js';
import { NotasInLocalStorageRepository } from './notas.in.local.storage.repository.js';

//export const repositorioDeNotasEnUso = new NotasInRAMRepository();
export const repositorioDeNotasEnUso = new NotasInLocalStorageRepository();