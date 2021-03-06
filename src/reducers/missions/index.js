// @flow

import {aftermath, getAftermathGoalText} from './aftermath';
import {aNewThreat, getANewThreatGoalText} from './aNewThreat';
import {armedAndOperational, getArmedAndOperationalGoalText} from './armedAndOperational';
import {aSimpleTask, getASimpleTaskGoalText} from './aSimpleTask';
import {binaryRevolution, getBinaryRevolutionGoalText} from './binaryRevolution';
import {braceForImpact, getBraceForImpactGoalText} from './braceForImpact';
import {breakingPoint, getBreakingPointGoalText} from './breakingPoint';
import {brushfire, getBrushfireGoalText} from './brushfire';
import {canyonRun, getCanyonRunGoalText} from './canyonRun';
import {captured, getCapturedGoalText} from './captured';
import {celebration, getCelebrationGoalText} from './celebration';
import {chainOfCommand, getChainOfCommandGoalText} from './chainOfCommand';
import {darkObsession, getDarkObsessionGoalText} from './darkObsession';
import {desperateHour, getDesperateHourGoalText} from './desperateHour';
import {drawnIn, getDrawnInGoalText} from './drawnIn';
import {escapeFromCloudCity, getEscapeFromCloudCityGoalText} from './escapeFromCloudCity';
import {fireInTheSky, getFireInTheSkyGoalText} from './fireInTheSky';
import {flySolo, getFlySoloGoalText} from './flySolo';
import {forestAmbush, getForestAmbushGoalText} from './forestAmbush';
import {friendsOfOld, getFriendsOfOldGoalText} from './friendsOfOld';
import {generousDonations, getGenerousDonationsGoalText} from './generousDonations';
import {getHighMoonGoalText, highMoon} from './highMoon';
import {getHomecomingGoalText, homecoming} from './homecoming';
import {getHomeFrontGoalText, homeFront} from './homeFront';
import {getHuntedDownGoalText, huntedDown} from './huntedDown';
import {getImperialEntanglementsGoalText, imperialEntanglements} from './imperialEntanglements';
import {getImperialHospitalityGoalText, imperialHospitality} from './imperialHospitality';
import {getImpoundedGoalText, impounded} from './impounded';
import {getIncomingGoalText, incoming} from './incoming';
import {getIndebtedGoalText, indebted} from './indebted';
import {getInfectionGoalText, infection} from './infection';
import {getInfiltratedGoalText, infiltrated} from './infiltrated';
import {getLastStandGoalText, lastStand} from './lastStand';
import {getLooseCannonGoalText, looseCannon} from './looseCannon';
import {getLuxuryCruiseGoalText, luxuryCruise} from './luxuryCruise';
import {getMeansOfProductionGoalText, meansOfProduction} from './meansOfProduction';
import {getPastLifeEnemiesGoalText, pastLifeEnemies} from './pastLifeEnemies';
import {getShadyDealingsGoalText, shadyDealings} from './shadyDealings';
import {getSorryAboutTheMessGoalText, sorryAboutTheMess} from './sorryAboutTheMess';
import {getSurvivalOfTheFittestGoalText, survivalOfTheFittest} from './survivalOfTheFittest';
import {
  getSympathyForTheRebellionGoalText,
  sympathyForTheRebellion,
} from './sympathyForTheRebellion';
import {getTargetOfOpportunityGoalText, targetOfOpportunity} from './targetOfOpportunity';
import {getTemptationGoalText, temptation} from './temptation';
import {getTheBattleOfHothGoalText, theBattleOfHoth} from './theBattleOfHoth';
import {getTheHardWayGoalText, theHardWay} from './theHardWay';
import {getTheSourceGoalText, theSource} from './theSource';
import {getTheSpiceJobGoalText, theSpiceJob} from './theSpiceJob';
import {getUnderSiegeGoalText, underSiege} from './underSiege';
import {getVipersDenGoalText, vipersDen} from './vipersDen';
import {getWantedGoalText, wanted} from './wanted';
import {getWhiteNoiseGoalText, whiteNoise} from './whiteNoise';

export default {
  aNewThreat,
  aSimpleTask,
  aftermath,
  armedAndOperational,
  binaryRevolution,
  braceForImpact,
  breakingPoint,
  brushfire,
  canyonRun,
  captured,
  celebration,
  chainOfCommand,
  darkObsession,
  desperateHour,
  drawnIn,
  escapeFromCloudCity,
  fireInTheSky,
  flySolo,
  forestAmbush,
  friendsOfOld,
  generousDonations,
  getANewThreatGoalText,
  getASimpleTaskGoalText,
  getAftermathGoalText,
  getArmedAndOperationalGoalText,
  getBinaryRevolutionGoalText,
  getBraceForImpactGoalText,
  getBreakingPointGoalText,
  getBrushfireGoalText,
  getCanyonRunGoalText,
  getCapturedGoalText,
  getCelebrationGoalText,
  getChainOfCommandGoalText,
  getDarkObsessionGoalText,
  getDesperateHourGoalText,
  getDrawnInGoalText,
  getEscapeFromCloudCityGoalText,
  getFireInTheSkyGoalText,
  getFlySoloGoalText,
  getForestAmbushGoalText,
  getFriendsOfOldGoalText,
  getGenerousDonationsGoalText,
  getHighMoonGoalText,
  getHomeFrontGoalText,
  getHomecomingGoalText,
  getHuntedDownGoalText,
  getImperialEntanglementsGoalText,
  getImperialHospitalityGoalText,
  getImpoundedGoalText,
  getIncomingGoalText,
  getIndebtedGoalText,
  getInfectionGoalText,
  getInfiltratedGoalText,
  getLastStandGoalText,
  getLooseCannonGoalText,
  getLuxuryCruiseGoalText,
  getMeansOfProductionGoalText,
  getPastLifeEnemiesGoalText,
  getShadyDealingsGoalText,
  getSorryAboutTheMessGoalText,
  getSurvivalOfTheFittestGoalText,
  getSympathyForTheRebellionGoalText,
  getTargetOfOpportunityGoalText,
  getTemptationGoalText,
  getTheBattleOfHothGoalText,
  getTheHardWayGoalText,
  getTheSourceGoalText,
  getTheSpiceJobGoalText,
  getUnderSiegeGoalText,
  getVipersDenGoalText,
  getWantedGoalText,
  getWhiteNoiseGoalText,
  highMoon,
  homeFront,
  homecoming,
  huntedDown,
  imperialEntanglements,
  imperialHospitality,
  impounded,
  incoming,
  indebted,
  infection,
  infiltrated,
  lastStand,
  looseCannon,
  luxuryCruise,
  meansOfProduction,
  pastLifeEnemies,
  shadyDealings,
  sorryAboutTheMess,
  survivalOfTheFittest,
  sympathyForTheRebellion,
  targetOfOpportunity,
  temptation,
  theBattleOfHoth,
  theHardWay,
  theSource,
  theSpiceJob,
  underSiege,
  vipersDen,
  wanted,
  whiteNoise,
};
