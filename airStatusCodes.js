
/* Desired return object shape 
{
  code: '', 
  shortDesc: '', // for tooltips
  longDesc: '', // for further details
  fields: [field], // fields that determine code value, 
  possibleValues: [
      {
          fieldName: '',
          value: '',
          code: '',
      }, 
      ...
  ] 
} 

*/

// FUNCTION: take in an array of fields and an object with field values and return above status code object

const getAirStatusCodes = ([field], value = null, type = null) => {
    // console.log({ field, value, type });
    // console.log(typeof value);
    // let possibleValues = {
    //     boarded: 'BK',
    //     checkedIn: 'CH',
    //     confirmed: 'HK',
    // };
    // // FUNCTION: if no value return all possible values for field
    // if (value) {
    //     // FUNCTION: check if field type/value is boolean or enum
    //     if (typeof value == 'boolean') {
    //         return {
    //             name: '',
    //             code: value ? 'AB' : 'CD',
    //             shortDesc: '',
    //             longDesc: '',
    //         }
    //     } else {
    //         return {
    //             name: '',
    //             code: possibleValues[value],
    //             shortDesc: '',
    //             longDesc: '',
    //         }
    //     }
    // } else {
    //     // FUNCTION: return default field Values 
    //     return allStatusCodes;
    // }
}

const allStatusCodes = {

}

let result = getAirStatusCodes('isCheckedIn', 'boarded');
console.log({ result })



const airStatusCodes = [
    { fields: [], values: {}, code: 'AF', shortDesc: 'AA Advantage ticket' },
    { fields: [], values: {}, code: 'AK', shortDesc: 'Passive - Confirmed outside Galileo system (This is only applicable in 1G)' },
    { fields: [], values: {}, code: 'AL', shortDesc: 'Passive- Waitlisted outside Galileo system (This is only applicable in 1G)' },
    { fields: [], values: {}, code: 'AN', shortDesc: 'Passive- Requested outside Galileo system (This is only applicable in 1G)' },
    { fields: [], values: {}, code: 'BK', shortDesc: 'Passive- Booked with carrier. Will generate message to carrier when air segment is cancelled.' },
    { fields: [], values: {}, code: 'BL', shortDesc: 'Passive- Waitlist segment' },
    { fields: [], values: {}, code: 'BN', shortDesc: 'Requested outside Galileo system' },
    { fields: [], values: {}, code: 'CH', shortDesc: 'Passive- Code share holds confirmed' },
    { fields: [], values: {}, code: 'CK', shortDesc: 'Advance check-in. Boarding pass issued' },
    { fields: [], values: {}, code: 'CS', shortDesc: 'Code share sell segment' },
    { fields: [], values: {}, code: 'DK', shortDesc: 'Link book last seat' },
    { fields: [], values: {}, code: 'DL', shortDesc: 'Deferred waitlist' },
    { fields: [], values: {}, code: 'DS', shortDesc: 'Desires segment' },
    { fields: [], values: {}, code: 'DX', shortDesc: 'Passive - Broken marriage / Active-Authorized partial cancellation within a marriage' },
    { fields: [], values: {}, code: 'EK', shortDesc: 'EMD confirmed' },
    { fields: [], values: {}, code: 'FS', shortDesc: 'Free sale' },
    { fields: [], values: {}, code: 'GF', shortDesc: 'Firm booking' },
    { fields: [], values: {}, code: 'GK', shortDesc: 'Guaranteed/Merged. Also used in 1V as Passive - Group confirmed' },
    { fields: [], values: {}, code: 'GL', shortDesc: 'Waitlist with carrier' },
    { fields: [], values: {}, code: 'GN', shortDesc: 'Group booking' },
    { fields: [], values: {}, code: 'GO', shortDesc: 'No action taken on group request.' },
    { fields: [], values: {}, code: 'HA', shortDesc: 'Have requested. Airline requested one of their own segments' },
    { fields: [], values: {}, code: 'HD', shortDesc: 'Holding confirmed; EMD required' },
    { fields: [], values: {}, code: 'HI', shortDesc: 'Holding confirmed EMD issued (EMD can only be issued if Ticket is Issued)' },
    { fields: [], values: {}, code: 'HK', shortDesc: 'Holds confirmed' },
    { fields: [], values: {}, code: 'HL', shortDesc: 'Holds waitlist' },
    { fields: [], values: {}, code: 'HN', shortDesc: 'Holds need/confirmed' },
    { fields: [], values: {}, code: 'HQ', shortDesc: 'Space prev. request' },
    { fields: [], values: {}, code: 'HS', shortDesc: 'CO changes' },
    { fields: [], values: {}, code: 'HW', shortDesc: 'Have waitlisted. Airline waitlisted one of their own segments' },
    { fields: [], values: {}, code: 'HX', shortDesc: 'Cancel confirm hold' },
    { fields: [], values: {}, code: 'IG', shortDesc: 'Involuntary upgrade' },
    { fields: [], values: {}, code: 'IH', shortDesc: 'Inhibit status code' },
    { fields: [], values: {}, code: 'IK', shortDesc: 'Infant no seat' },
    { fields: [], values: {}, code: 'IN', shortDesc: 'If not holding need' },
    { fields: [], values: {}, code: 'IS', shortDesc: 'If not holding sell' },
    { fields: [], values: {}, code: 'IX', shortDesc: 'If holding cancel' },
    { fields: [], values: {}, code: 'KD', shortDesc: 'Issue EMD' },
    { fields: [], values: {}, code: 'KK', shortDesc: 'Carrier confirmed' },
    { fields: [], values: {}, code: 'KL', shortDesc: 'Waitlist confirmed' },
    { fields: [], values: {}, code: 'LK', shortDesc: 'Passive - Link booking - guaranteed sell' },
    { fields: [], values: {}, code: 'LL', shortDesc: 'Add to waitlist' },
    { fields: [], values: {}, code: 'MB', shortDesc: 'Move reaccommodation - Pax was on standby status for flight affected' },
    { fields: [], values: {}, code: 'MK', shortDesc: 'Non messaging Passive segment.' },
    { fields: [], values: {}, code: 'ML', shortDesc: 'Waitlisted' },
    { fields: [], values: {}, code: 'MN', shortDesc: 'Not available' },
    { fields: [], values: {}, code: 'MR', shortDesc: 'Requested' },
    { fields: [], values: {}, code: 'NA', shortDesc: 'Need alternate' },
    { fields: [], values: {}, code: 'NN', shortDesc: 'Requesting segment' },
    { fields: [], values: {}, code: 'NO', shortDesc: 'No action taken' },
    { fields: [], values: {}, code: 'NS', shortDesc: 'No show' },
    { fields: [], values: {}, code: 'OB', shortDesc: 'Overbook' },
    { fields: [], values: {}, code: 'OX', shortDesc: 'Cancel only if requested segment is available' },
    { fields: [], values: {}, code: 'PA', shortDesc: 'Priority waitlist-emergency travel' },
    { fields: [], values: {}, code: 'PB', shortDesc: 'Priority waitlist' },
    { fields: [], values: {}, code: 'PC', shortDesc: 'Priority waitlist' },
    { fields: [], values: {}, code: 'PD', shortDesc: 'Priority waitlist' },
    { fields: [], values: {}, code: 'PK', shortDesc: 'Discounted passenger.' },
    { fields: [], values: {}, code: 'PN', shortDesc: 'Pending need' },
    { fields: [], values: {}, code: 'PS', shortDesc: 'Passive' },
    { fields: [], values: {}, code: 'PW', shortDesc: 'Priority waitlist' },
    { fields: [], values: {}, code: 'RR', shortDesc: 'Reconfirm' },
    { fields: [], values: {}, code: 'SB', shortDesc: 'Boarded standBy' },
    { fields: [], values: {}, code: 'SC', shortDesc: 'Schedule change' },
    { fields: [], values: {}, code: 'SD', shortDesc: 'Schedule change/re-booking; EMD already issued. Document number must be included in the SSR' },
    { fields: [], values: {}, code: 'SP', shortDesc: 'Passive-space protected' },
    { fields: [], values: {}, code: 'SQ', shortDesc: 'Space request - bilateral use' },
    { fields: [], values: {}, code: 'SS', shortDesc: 'Sell segment' },
    { fields: [], values: {}, code: 'TK', shortDesc: 'Schedule Change. Advise passenger of new scheduled times.' },
    { fields: [], values: {}, code: 'TL', shortDesc: 'Schedule change waitlist. Advise passenger of new scheduled times.' },
    { fields: [], values: {}, code: 'TN', shortDesc: 'Schedule change. Is Pending Need. Advise passenger of new scheduled times.' },
    { fields: [], values: {}, code: 'UC', shortDesc: 'Unable to confirm or waitlist' },
    { fields: [], values: {}, code: 'UN', shortDesc: 'Unable - no flight' },
    { fields: [], values: {}, code: 'US', shortDesc: 'Unable to sell' },
    { fields: [], values: {}, code: 'UU', shortDesc: 'Unable to confirm. Waitlist requested' },
    { fields: [], values: {}, code: 'WK', shortDesc: 'Schedule change of a confirmed segment' },
    { fields: [], values: {}, code: 'WL', shortDesc: 'Schedule change of a waitlisted segment' },
    { fields: [], values: {}, code: 'WN', shortDesc: 'Schedule change of a needed segment' },
    { fields: [], values: {}, code: 'XK', shortDesc: 'Cancel seg with change' },
    { fields: [], values: {}, code: 'XX', shortDesc: 'Cancel segment' },
    { fields: [], values: {}, code: 'YG', shortDesc: 'Involuntary upgrade' },
    { fields: [], values: {}, code: 'YK', shortDesc: 'Hold confirmed Airline space' },
    { fields: [], values: {}, code: 'ZK', shortDesc: 'Passive- API booking' }
]