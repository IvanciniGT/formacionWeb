//import { NotasInRAMRepository } from './notas.in.ram.repository.js';
//import { NotasInLocalStorageRepository } from './notas.in.local.storage.repository.js';
import { NotasRestRepository } from './notas.rest.repository.js';

//export const repositorioDeNotasEnUso = new NotasInRAMRepository();
//export const repositorioDeNotasEnUso = new NotasInLocalStorageRepository();
export const repositorioDeNotasEnUso = new NotasRestRepository();