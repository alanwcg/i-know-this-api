import { PopulateLevel } from './level';
import { PopulateTechnology } from './technology';

async function runSeed() {
  await PopulateLevel();
  await PopulateTechnology();
}

runSeed();
