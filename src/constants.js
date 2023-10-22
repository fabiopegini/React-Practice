import squall from './img/Ff8-squall.png'
import quistis from './img/Ff8-quistis.png'
import zell from './img/Ff8-zell.png'
import rinoa from './img/Ff8-rinoa.png'
import selphie from './img/Ff8-selphie.png'
import irvine from './img/Ff8-irvine.png'

export const characters = {
  squall: {name: 'Squall', source: squall},
  quistis: {name: 'Quistis', source: quistis},
  zell: {name: 'Zell', source: zell},
  rinoa: {name: 'Rinoa', source: rinoa},
  selphie: {name: 'Selphie', source: selphie},
  irvine: {name: 'Irvine', source: irvine}

}

import quezacotl from './img/quezacotl.jpg'
import shiva from './img/shiva.jpg'
import ifrit from './img/ifrit.webp'
import siren from './img/siren.webp'
import diablos from './img/diablos.webp'
import brothers from './img/brothers.webp'
import carbuncle from './img/carbuncle.webp'
import leviathan from './img/leviathan.webp'
import pandemona from './img/pandemona.webp'
import cerberus from './img/cerberus.webp'
import alexander from './img/alexander.webp'
import doomtrain from './img/doomtrain.webp'
import bahamut from './img/bahamut.webp'
import jumbocactuar from './img/jumbocactuar.webp'
import tonberryking from './img/tonberryking.webp'
import eden from './img/eden.webp'

export const gfs = [
  {name: 'quezacotl', source: quezacotl, id: 'qtz', statsAffected: ['Hp','Vit','Mag'] },
  {name: 'shiva', source: shiva, id: 'shv', statsAffected: ['Str','Vit','Spr'] },
  {name: 'ifrit', source: ifrit, id: 'ifr', statsAffected: ['Hp','Str'] },
  {name: 'siren', source: siren, id: 'sir', statsAffected: ['Mag'] },
  {name: 'diablos', source: diablos, id: 'dbl', statsAffected: ['Hp','Mag','Hit'] },
  {name: 'brothers', source: brothers, id: 'bro', statsAffected: ['Hp','Str','Spr'] },
  {name: 'carbuncle', source: carbuncle, id: 'car', statsAffected: ['Hp','Vit','Mag'] },
  {name: 'leviathan', source: leviathan, id: 'lev', statsAffected: ['Mag','Spr'] },
  {name: 'pandemona', source: pandemona, id: 'pan', statsAffected: ['Str','Spd'] },
  {name: 'cerberus', source: cerberus, id: 'cer', statsAffected: ['Str','Mag','Spr','Spd','Hit'] },
  {name: 'alexander', source: alexander, id: 'ale', statsAffected: ['Spr'] },
  {name: 'doomtrain', source: doomtrain, id: 'dom', statsAffected: [''] },
  {name: 'bahamut', source: bahamut, id: 'bah', statsAffected: [''] },
  {name: 'jumbocactuar', source: jumbocactuar, id: 'jum', statsAffected: ['Eva','Lck'] },
  {name: 'tonberryking', source: tonberryking, id: 'tom', statsAffected: [''] },
  {name: 'eden', source: eden, id: 'ede', statsAffected: ['Spd','Eva','Hit'] }
]

export const statsNames = [
  {name: 'Hp', id: "Hpstat"},
  {name: 'Str', id: "Strstat"},
  {name: 'Vit', id: "Vitstat"},
  {name: 'Mag', id: "Magstat"},
  {name: 'Spr', id: "Sprstat"},
  {name: 'Spd', id: "Spdstat"},
  {name: 'Eva', id: "Evastat"},
  {name: 'Hit', id: "Hitstat"},
  {name: 'Lck', id: "Lckstat"},
  {name: '-', id: "Fillerstat"}

]