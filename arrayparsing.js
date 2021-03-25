// const SampleStatusCodeSet = [
//     { fields: ['isBoarded', 'anotherField'], values: { isBoarded: false, anotherField: true }, code: 'AF', shortDesc: 'AA Advantage ticket' },
//     { fields: ['isBoarded'], values: { isBoarded: false }, code: 'AK', shortDesc: 'Passive - Confirmed outside Galileo system (This is only applicable in 1G)' },
//     { fields: ['isCheckedIn'], values: { isCheckedIn: false }, code: 'AL', shortDesc: 'Passive- Waitlisted outside Galileo system (This is only applicable in 1G)' },
//     { fields: ['isBoarded', 'isCheckedIn'], values: { isBoarded: false, isCheckedIn: true }, code: 'AN', shortDesc: 'Passive- Requested outside Galileo system (This is only applicable in 1G)' },
//     { fields: ['anotherField'], values: { anotherField: true }, code: 'BK', shortDesc: 'Passive- Booked with carrier. Will generate message to carrier when air segment is cancelled.' },
//     { fields: [''], values: {}, code: 'BK', shortDesc: 'Passive- Booked with carrier. Will generate message to carrier when air segment is cancelled.' },
// ]

const airStatusCodes = [
    { fields: [], values: {}, code: 'AAK', shortDesc: 'Response to Block Owner Requests', group: 'MIBlockSpaceCodes' },
    { fields: [], values: {}, code: 'ACK', shortDesc: 'Acknowledge', group: 'PassengerReservationCodes' },
    { fields: [], values: {}, code: 'ACKI', shortDesc: 'Automated Check-In', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'ACKI', shortDesc: 'Automated Check-In', group: 'PassengerReservationCodes' },
    { fields: [], values: {}, code: 'ACON', shortDesc: 'Air Conditioning', group: 'PassengerReservationCodes' },
    { fields: [], values: {}, code: 'ADAC', shortDesc: 'Advise acceptance', group: 'PassengerReservationCodes' },
    { fields: [], values: {}, code: 'ADAR', shortDesc: 'Advise arrival', group: 'PassengerReservationCodes' },
    { fields: [], values: {}, code: 'ADB', shortDesc: 'Advise if duplicate booking', group: 'PassengerReservationCodes' },
    { fields: [], values: {}, code: 'ADMD', shortDesc: 'Advise Electronic Miscellaneous Document Number', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'ADPI', shortDesc: 'Advise Passenger Security Information', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'ADTK', shortDesc: 'Advise if ticketed', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'AF', shortDesc: 'AA Advantage ticket' },
    { fields: [], values: {}, code: 'AH', shortDesc: 'Already Holding (to be used with Marriage Logic)', group: 'statusCodes' },
    { fields: [], values: {}, code: 'AK', shortDesc: 'Confimed outside the CRS for participant and non-participant vendors. No teletype message sent, including notification of cancellation', group: 'statusCodes' },
    { fields: [], values: {}, code: 'AKA', shortDesc: 'Acknowledgement message for reservations', group: 'MIBilateralCodes' },
    { fields: [], values: {}, code: 'AKI', shortDesc: 'Increase Block Space Allocation by Member', group: 'MIBlockSpaceCodes' },
    { fields: [], values: {}, code: 'AKK', shortDesc: 'Create Block Space Allocation by Member', group: 'MIBlockSpaceCodes' },
    { fields: [], values: {}, code: 'AKK', shortDesc: 'Update Block Space Allocation by Member', group: 'MIBlockSpaceCodes' },
    { fields: [], values: {}, code: 'AKD', shortDesc: 'Decrease Block Space Allocation by Member', group: 'MIBlockSpaceCodes' },
    { fields: [], values: {}, code: 'AL', shortDesc: 'Waitlisted outside the CRS for participant and non-participant vendors. No teletype message sent, includng notification of cancellation', group: 'statusCodes' },
    { fields: [], values: {}, code: 'AN', shortDesc: 'Requested outside the CRS for participant and non-participant vendors. No teletype message sent, including notification of cancellation', group: 'statusCodes' },
    { fields: [], values: {}, code: 'AOXY', shortDesc: 'Airline Supplied Oxygen', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'AS', shortDesc: 'Flight Open or re-opened for automatic selling', longDesc: 'Flight Open or re-opened for automatic selling; or if a segment is included, the specified segment and all other segments included in that specified segment are opened or re-opend for Automatic Selling', group: 'sellReportCodes' },
    { fields: [], values: {}, code: 'ASA', shortDesc: 'Re-accommodation of Block Space Allocation by Member', group: 'MIBlockSpaceCodes' },
    { fields: [], values: {}, code: 'ASC', shortDesc: 'Advice of schedule change', group: 'MIReservationCodes' },
    { fields: [], values: {}, code: 'ASD', shortDesc: 'Schedule change, deferred notification', group: 'MIBilateralCodes' },
    { fields: [], values: {}, code: 'ASN', shortDesc: 'Schedule change, no notification', group: 'MIBilateralCodes' },
    { fields: [], values: {}, code: 'ASVC', shortDesc: 'Additional Service (bilateral agreement)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'ASVX', shortDesc: 'EMD document number in back-up message for EDIFACT System Cancel', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'ATX', shortDesc: 'Air Taxi', group: 'MIAuxServiceCodes' },
    { fields: [], values: {}, code: 'AVA', shortDesc: 'Availability Status', group: 'MIReservationCodes' },
    { fields: [], values: {}, code: 'AVA', shortDesc: 'RBDs by compartment', group: 'MIAvailabilityStatusCodes' },
    { fields: [], values: {}, code: 'AVC', shortDesc: 'Car Availability Status', group: 'MIReservationCodes' },
    { fields: [], values: {}, code: 'AVH', shortDesc: 'Hotel Availability Status (for A4A use only)', group: 'MIReservationCodes' },
    { fields: [], values: {}, code: 'AVIH', shortDesc: 'Animal in Hold - Specify details', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'AVO', shortDesc: 'Enhanced Availbality status', group: 'MIAvailabilityStatusCodes' },
    { fields: [], values: {}, code: 'AVN', shortDesc: 'Availability Status', group: 'MIReservationCodes' },
    { fields: [], values: {}, code: 'AVN', shortDesc: 'Numeric - Option 1', group: 'MIAvailabilityStatusCodes' },
    { fields: [], values: {}, code: 'AVN', shortDesc: 'Numerical Availability', group: 'MIBilateralCodes' },
    { fields: [], values: {}, code: 'AVML', shortDesc: 'Vegetarian Hindu meal', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'AVR', shortDesc: 'Availability Status', group: 'MIReservationCodes' },
    { fields: [], values: {}, code: 'AVR', shortDesc: 'Recap Response', group: 'MIAvailabilityStatusCodes' },
    { fields: [], values: {}, code: 'AVS', shortDesc: 'Availability Status', group: 'MIReservationCodes' },
    { fields: [], values: {}, code: 'AVS', shortDesc: 'First Closing', group: 'MIAvailabilityStatusCodes' },
    { fields: [], values: {}, code: 'AVS', shortDesc: 'Segment', group: 'MIAvailabilityStatusCodes' },
    { fields: [], values: {}, code: 'AVT', shortDesc: 'Tour availability status (for A4A use only)', group: 'MIReservationCodes' },
    { fields: [], values: {}, code: 'AW', shortDesc: 'Already Waitlisted - used with Married Segment Control to indicate that a segment has already been waitlisted and married', group: 'statusCodes' },
    { fields: [], values: {}, code: 'AUTK', shortDesc: 'Used to authorise another subscriber, not in control of the PNR, to issue a ticket (as bilaterally agreed). Ownership of the PNR is not transferred', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'BBML', shortDesc: 'Baby Meal', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'BIKE', shortDesc: 'Bicycle - Specify number', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'BLML', shortDesc: 'Bland Meal', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'BLND', shortDesc: 'Blind Passenger', longDesc: 'Blind Passenger - Specify if accompanied by seeing eye dog or other service animal', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'BSCT', shortDesc: 'Bassinet/carrycot/baby basket', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'BK', shortDesc: 'BookingConfirmed, manually/verbally confirmed. No message sent unless cancelled', group: 'statusCodes' },
    { fields: [], values: {}, code: 'BL', shortDesc: 'Booking Waitlist, manually/verbally confirmed. No message sent unless cancelled', group: 'statusCodes' },
    { fields: [], values: {}, code: 'BPR', shortDesc: 'Preresernved seat and boarding pass (bilateral agreement required)', group: 'MIReservationCodes' },
    { fields: [], values: {}, code: 'BN', shortDesc: 'Requested outside Galileo system' },
    { fields: [], values: {}, code: 'BULK', shortDesc: 'Bulky Baggage - Specify number, weight, size if known', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'CAR', shortDesc: 'Car Rental', group: 'MIAuxServiceCodes' },
    { fields: [], values: {}, code: 'CBBG', shortDesc: 'Cabin Baggage', longDesc: 'Cabin Baggage (for which an extra seat(s) has been purchased) - Specify number, weight and size if known', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'CC', shortDesc: 'Flight Closed - Waitlist List Closed', longDesc: 'Flight Closed - Waiting List Closed. Stop selling segments which include any leg(s) within the two points specified, do not waitlist', group: 'sellReportCodes' },
    { fields: [], values: {}, code: 'CCR', shortDesc: 'Car Rental (Automated Format)', group: 'MIAuxServiceCodes' },
    { fields: [], values: {}, code: 'CH', shortDesc: 'Code share holds confirmed', longDesc: 'Code Share Holding Confirmed - space already confirmed. Message sent between code share carrier and operating carrier when subsequent action required', group: 'statusCodes' },
    { fields: [], values: {}, code: 'CHG', shortDesc: 'Change for an optional element (directed to hotel/motel operator)', group: 'MIReservationCodes' },
    { fields: [], values: {}, code: 'CHLD', shortDesc: 'Child', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'CHML', shortDesc: 'Child meal', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'CK', shortDesc: 'Advance check-in. Boarding pass issued' },
    { fields: [], values: {}, code: 'CK', shortDesc: 'Code Share Guarnteed Sell - action taken as a result of previous access between computer systems. Message sent', group: 'ActionCodes' },
    { fields: [], values: {}, code: 'CKIN', shortDesc: 'Provides information for airport personnel for passenger handling at departure time for which no other SSR code exists and does not require a reply', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'CL', shortDesc: 'Flight Closed - Waiting List Open', longDesc: 'Flight Closed - Waiting List Open. Stop selling segments which include any leg(s) within the two points specified. Space may be waitlisted only', group: 'sellReportCodes' },
    { fields: [], values: {}, code: 'CL', shortDesc: 'Code Share Waitlist - Initial notification from code share carrier to operating carrier of the waitlist. Message sent', group:'ActionCodes' },
    { fields: [], values: {}, code: 'CLID', shortDesc: 'Client Identification (bilateral agreement only)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'CN', shortDesc: 'Flight Closed - NOOP flight', longDesc: 'Flight Closed - NOOP flight, or class, or date, or segment not operating. May be applied to any flight that will not operate for any reason, and is reflected in industry publications as operatin. Those carriers that cannot portray the NOOP condition will interpret the AVS code "CN" as "CR" or "CC', group: 'sellReportCodes' },
    { fields: [], values: {}, code: 'CN', shortDesc: 'Code Share Need - Initial notification from code share carrier to operating carrier of the space requested. Message sent', group:'ActionCodes' },
    { fields: [], values: {}, code: 'CM', shortDesc: 'Code Share non-Revenue Meal Listing - notification from code share carrier to operating carrier of meal listing. Message sent', group:'ActionCodes' },
    { fields: [], values: {}, code: 'COR', shortDesc: 'Correction to previous message', group: 'MICommunicationCodes' },
    { fields: [], values: {}, code: 'COUR', shortDesc: 'Courier', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'CR', shortDesc: 'Flight Closed - Request only.', longDesc: 'Stop selling segments, which include any leg(s) within the two points specified; space may be requested only', group: 'sellReportCodes' },
    { fields: [], values: {}, code: 'CRA', shortDesc: 'Create Block Space Allocation by Block Owner', group: 'MIBlockSpaceCodes' },
    { fields: [], values: {}, code: 'CRUZ', shortDesc: 'Cruise Passenger (bilateral agreement only)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'CQ', shortDesc: 'Code Share Holding Needed', longDesc: 'Code Share Holding Needed - Space already requested. message sent between code share carrier and operating carrier when subsequent action required', group: 'statusCodes' },
    { fields: [], values: {}, code: 'CS', shortDesc: 'Segment Closed - NOOP', longDesc: 'Segment Closed - NOOP. May be applied to any segment that will not operate for any reason, and is reflected in industry publications as operating. Those carriers that cannot portray the NOOP condition of a segment will interpret the AVS code as "CS" as "CR" or "CC" (between A4A Members only)', group: 'sellReportCodes' },
    { fields: [], values: {}, code: 'CS', shortDesc: 'Code Share Sell - Initial notification from code share carrier to operating carrier of the sell. Message sent', group:'ActionCodes' },
    { fields: [], values: {}, code: 'CTCE', shortDesc: 'Passenger contact information e-mail address', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'CTCM', shortDesc: 'Passenger contact information mobile phone number', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'CTCR', shortDesc: 'Passenger contact information refused', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'CU', shortDesc: 'Code Share Waitlist from request - already requested segment is waitlisted. Message sent from code share carrier to operational carrier to advise of waitlist', group:'ActionCodes' },
    { fields: [], values: {}, code: 'CW', shortDesc: 'Code Share Holding Waitlist - Space already waitlisted', longDesc: 'Code Share Holding Waitlist - space already waitlisted. Message sent between code share carrier and operating carrier when subsequent action required', group: 'statusCodes' },
    { fields: [], values: {}, code: 'CX', shortDesc: 'Code Share Cancel - Initial Notification from code share carrier to operating carrier of the cancel. Message sent', group: 'ActionCodes' },
    { fields: [], values: {}, code: 'DBML', shortDesc: 'Diabetic Meal', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'DPNA', shortDesc: 'Disabled Passenger', longDesc: 'Disabled Passenger with intellectual or developmental disability needing assistance (specify details)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'DC', shortDesc: 'Availability checked, inventory adjusted', group: 'ActionCodes' },
    { fields: [], values: {}, code: 'DCRW', shortDesc: 'Crew Bookings', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'DEAF', shortDesc: 'Deaf Passenger', longDesc: 'Deaf Passenger - Specify if accompanied by hearing dog or other service animal', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'DEC', shortDesc: 'Decrease Block Space Allocation by Block Owner', group: 'MIBlockSpaceCodes' },
    { fields: [], values: {}, code: 'DEPA', shortDesc: 'Deportee - Accompanied by an escort', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'DEPU', shortDesc: 'Deportee - unaccompanied', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'DK', shortDesc: 'Link book last seat' },
    { fields: [], values: {}, code: 'DK', shortDesc: 'Last seat link sell, inventory adjusted', group:'ActionCodes' },
    { fields: [], values: {}, code: 'DK', shortDesc: 'Direct Link confirmed; indicates that inventory has previously been deducted and acknowledged via an interactive method', group:'ActionCodes' },
    { fields: [], values: {}, code: 'DL', shortDesc: 'Deferred waitlist, no message sent', group: 'statusCodes' },
    { fields: [], values: {}, code: 'DOCA', shortDesc: 'API - Passenger Address Information', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'DOCO', shortDesc: 'API - Passenger Other Supplementary Information', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'DOCS', shortDesc: 'API - Passenger Travel Document', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'DS', shortDesc: 'Availability checked, inventory adjusted', group: 'ActionCodes' },
    { fields: [], values: {}, code: 'DS', shortDesc: 'Deferred segment, no message sent', group: 'statusCodes' },
    { fields: [], values: {}, code: 'DW', shortDesc: 'Direct Link waitlisted; indicates that waitlist inventory has previously been acknowledged', group:'ActionCodes' },
    { fields: [], values: {}, code: 'DX', shortDesc: 'Already Cancelled - used in a wrap-up message to indicate that an interactive cancel has occurred via the direct link', group: 'ActionCodes' },
    { fields: [], values: {}, code: 'DX', shortDesc: 'Passive - Broken marriage / Active-Authorized partial cancellation within a marriage' },
    { fields: [], values: {}, code: 'DVD', shortDesc: 'Divide PNR', group: 'MIReservationCodes' },
    { fields: [], values: {}, code: 'DVS', shortDesc: 'Divide Message sent from Memmber to originator', group: 'MIBilateralCodes' },
    { fields: [], values: {}, code: 'EK', shortDesc: 'EMD confirmed' },
    { fields: [], values: {}, code: 'EPAY', shortDesc: 'Electronic Payment Authorization', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'ETE', shortDesc: 'ET or EMD exchange/re-issue back-up message for EDIFACT System Cancel', group: 'MIElectronicTicketCodes' },
    { fields: [], values: {}, code: 'ETK', shortDesc: 'ET or EMD issue back-up message for EDIFACT System Cancel', group: 'MIElectronicTicketCodes' },
    { fields: [], values: {}, code: 'EX', shortDesc: 'The new carrier may use the electronic ticket coupon(s), exchange recommended', group: 'statusCodes' },
    { fields: [], values: {}, code: 'ESAN', shortDesc: 'Passenger with Emotional Support/Psychiatric Assistance Animal in Cabin (specify Details)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'EXST', shortDesc: 'Extra Seat', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'FB', shortDesc: 'Force booking, message sent', group:'ActionCodes' },
    { fields: [], values: {}, code: 'FC', shortDesc: 'The new carrier may use the electronic ticket coupon(s) system as is. The coupon(s) has not been updated to reflect the new or modified itinerary', group: 'statusCodes' },
    { fields: [], values: {}, code: 'FR', shortDesc: 'Force request, message sent', group:'ActionCodes' },
    { fields: [], values: {}, code: 'FOID', shortDesc: 'Form of Identification', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'FQTR', shortDesc: 'Frequent traveller award redemption journey (used by bilateral agreement only)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'FQTV', shortDesc: 'Frequent traveller mileage program information (used by bilateral agreement only)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'FQTU', shortDesc: 'Frequent traveller requesting redemption for upgrade', longDesc: 'Frequent traveller requesting redemption for upgrade at the same time as obtaining accrual (used by bilateral agreement only)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'FQTS', shortDesc: 'Frequent traveller service benefit information (used by bilateral agreement only)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'FPML', shortDesc: 'Fruit platter meal', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'FRAV', shortDesc: 'First Available', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'FRAG', shortDesc: 'Fragile Baggage - Specify number, weight, size, if known', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'FS', shortDesc: 'Sold. (On Free sale basis', group: 'ActionCodes' },
    { fields: [], values: {}, code: 'GA', shortDesc: 'Group request, no message sent', group:'ActionCodes' },
    { fields: [], values: {}, code: 'GC', shortDesc: 'Group request unable, no message sent', group:'AdviceCodes' },
    { fields: [], values: {}, code: 'GF', shortDesc: 'Firm booking' },
    { fields: [], values: {}, code: 'GFML', shortDesc: 'Gluten intolerant meal', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'GK', shortDesc: 'Group confirmed. manually/verbally confirmed. No message sent', group: 'statusCodes' },
    { fields: [], values: {}, code: 'GL', shortDesc: 'Group Waitlisted, no message sent', group: 'AdviceCodes' },
    { fields: [], values: {}, code: 'GN', shortDesc: 'Group request, message sent', group:'ActionCodes' },
    { fields: [], values: {}, code: 'GO', shortDesc: 'No action taken on group request. No message sent', group: 'AdviceCodes' },
    { fields: [], values: {}, code: 'GPST', shortDesc: 'Group Seat Request - (include Seat Preferences)', longDesc: 'Group Seat Request - No name or generic seating (may include number of seats followed by the zone code "N" or "S" preferences)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'GRPK', shortDesc: 'Group space passive notification', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'GRPS', shortDesc: 'Passengers travelling together over one or more segments utilizing a common identity assigned by the booking Member', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'GSTA', shortDesc: 'Goods and Services Tax Business Address', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'GSTE', shortDesc: 'Goods and Services Tax Business E-mail Contact', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'GSTP', shortDesc: 'Goods and Services Tax Business Phone Number(s)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'GSTN', shortDesc: 'Goods and Services Tax Number', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'GU', shortDesc: 'Group request unable, is waitlisted. No message sent', group:'AdviceCodes' },
    { fields: [], values: {}, code: 'GX', shortDesc: 'Action codes "GA", "GN", "GU", "GL" affected by schedule change, no message sent', group: 'statusCodes' },
    { fields: [], values: {}, code: 'HA', shortDesc: 'Have requested. - and inventory for segment specified has been adjusted. Update name record accordingly (bilateral)', group: 'statusCodes' },
    { fields: [], values: {}, code: 'HD', shortDesc: 'Holding confirmed; EMD required' },
    { fields: [], values: {}, code: 'HHL', shortDesc: 'Hotel Accommodation (Automated Format)', group: 'MIAuxServiceCodes' },
    { fields: [], values: {}, code: 'HI', shortDesc: 'Holding confirmed EMD issued (EMD can only be issued if Ticket is Issued)' },
    { fields: [], values: {}, code: 'HK', shortDesc: 'Holds confirmed', group: 'statusCodes' },
    { fields: [], values: {}, code: 'HL', shortDesc: 'Have Listed (On Waiting list)', group: 'statusCodes' },
    { fields: [], values: {}, code: 'HN', shortDesc: 'Have Requested - Holds need/confirmed', group: 'statusCodes' },
    { fields: [], values: {}, code: 'HNML', shortDesc: 'Hindu meal', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'HP', shortDesc: 'Confirmation Number Pending', group: 'statusCodes' },
    { fields: [], values: {}, code: 'HQ', shortDesc: 'Space already requested as SQ. Twelve hours not yet elapsed (Between A4A members and/or bilateral use only)', group: 'statusCodes' },
    { fields: [], values: {}, code: 'HS', shortDesc: 'Sold - We have sold and inventory for segment specified has been adjusted. Make name recod only (between A4A Members and/or bilateral use only)', group: 'statusCodes' },
    { fields: [], values: {}, code: 'HTL', shortDesc: 'Hotel Accommodation', group: 'MIAuxServiceCodes' },
    { fields: [], values: {}, code: 'HW', shortDesc: 'Have waitlisted - And inventory for segment specified has been adjusted. Update name record accordingly (bilateral)', group: 'statusCodes' },
    { fields: [], values: {}, code: 'HX', shortDesc: 'Cancelled - Company in control of inventory have cancelled for segment specified. The reason shall be stated in an SSR', group: 'AdviceCodes' },
    { fields: [], values: {}, code: 'IG', shortDesc: 'Involuntary upgrade' },
    { fields: [], values: {}, code: 'IH', shortDesc: 'Inhibit status code' },
    { fields: [], values: {}, code: 'IK', shortDesc: 'Infant no seat' },
    { fields: [], values: {}, code: 'IN', shortDesc: 'If not Holding, Need. Same as need; however, passenger may already be holding space. Check for duplicate reservation', group: 'ActionCodes' },
    { fields: [], values: {}, code: 'INAD', shortDesc: 'Inadmissible Passenger', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'INFT', shortDesc: 'Infant SSR Code', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'INC', shortDesc: 'Increase Block Space Allocation by Block Owner', group: 'MIBlockSpaceCodes' },
    { fields: [], values: {}, code: 'IROP', shortDesc: 'Irregular Operations', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'IRP', shortDesc: 'Request to Member for seats in Irregular Operations', group: 'MIReservationCodes' },
    { fields: [], values: {}, code: 'IS', shortDesc: 'If not Holding, Sold. Same as Sold; However, passenger may already be holding. Check for duplicate reservation', group: 'ActionCodes' },
    { fields: [], values: {}, code: 'IX', shortDesc: 'If holding cancel', group: 'ActionCodes' },
    { fields: [], values: {}, code: 'IW', shortDesc: 'If not holding, Waitlist. Same as "LL" but waitlist inventory may have already been deducted interactively', group:'ActionCodes' },
    { fields: [], values: {}, code: 'KD', shortDesc: 'Issue EMD' },
    { fields: [], values: {}, code: 'KG', shortDesc: 'Group confirmed, message sent', group:'AdviceCodes' },
    { fields: [], values: {}, code: 'KK', shortDesc: 'Confirming - Company in control of inventory confirming carrier', group: 'AdviceCodes' },
    { fields: [], values: {}, code: 'KL', shortDesc: 'Confirming from Waitlist', group:'AdviceCodes' },
    { fields: [], values: {}, code: 'KSML', shortDesc: 'Kosher meal', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'LA', shortDesc: 'Limit Sales, Removed', group: 'sellReportCodes' },
    { fields: [], values: {}, code: 'LANG', shortDesc: 'Specify Language(s) spoken', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'LC', shortDesc: 'Limit Sales, Waiting List Closed', group: 'sellReportCodes' },
    { fields: [], values: {}, code: 'LCML', shortDesc: 'Low calorie meal', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'LFML', shortDesc: 'Low fat meal', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'LG', shortDesc: 'Group waitlisted, message sent', group:'AdviceCodes' },
    { fields: [], values: {}, code: 'LK', shortDesc: 'Passive - Link booking - guaranteed sell' },
    { fields: [], values: {}, code: 'LK', shortDesc: 'Computer System generated Action/Avice Code to report action taken as a result of previous access between computer systems (depending on bilateral agreements)', group:'ActionCodes' },
    { fields: [], values: {}, code: 'LL', shortDesc: 'Limit Sales, Waitlist', group: 'sellReportCodes' },
    { fields: [], values: {}, code: 'LL', shortDesc: 'List (add to waiting list)', group:'ActionCodes' },
    { fields: [], values: {}, code: 'LN', shortDesc: 'Limit Sales, Landing Cancel - NOOP', longDesc: 'Limit Sales, Landing Cancel - NOOP. Prohibits sales or requests into and out of an en route city without affecting sales through that point. The flight will not operate into or out of the city specified and is in the industry publications as operating',  group: 'sellReportCodes' },
    { fields: [], values: {}, code: 'LR', shortDesc: 'Limit Sales, Request', group: 'sellReportCodes' },
    { fields: [], values: {}, code: 'LSML', shortDesc: 'Low salt meal', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'MA', shortDesc: 'Flight or flight segment is not under Selective Query Availability Status Conditions', group: 'sellReportCodes' },
    { fields: [], values: {}, code: 'MAAS', shortDesc: 'Meet and assist - specify details', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'MAS', shortDesc: 'Availability Status', group: 'MIReservationCodes' },
    { fields: [], values: {}, code: 'MAS', shortDesc: 'Numeric - Option 2', group: 'MIAvailabilityStatusCodes' },
    { fields: [], values: {}, code: 'MAS', shortDesc: 'Multiple Numeric Availability', group: 'MIBilateralCodes' },
    { fields: [], values: {}, code: 'MB', shortDesc: 'Move reaccommodation - Pax was on standby status for flight affected' },
    { fields: [], values: {}, code: 'MED', shortDesc: 'Advice of medical case', longDesc: 'Advice of medical case (not applicable to/from A4A carriers and A4A Associate Members unless bilaterally agreed', group: 'MIReservationCodes' },
    { fields: [], values: {}, code: 'MEDA', shortDesc: 'Medical Case (Caompany medical clearance may be required)', longDesc: 'Medical Case (Company medical clearance may be required). Refer to IATA Resolution 700 and AIRIMP 3.7.6 "Passengers with Reduced Mobility (PRM)" for guidelines. Not to be used for passengers with reduced mobility who only require special assistance or handling, and who do not require a emdical clearance', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'MEQT', shortDesc: 'Medical Equipment', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'MK', shortDesc: 'Corresponding inventory segment is "HK", no message sent', group: 'statusCodes' },
    { fields: [], values: {}, code: 'ML', shortDesc: 'Corresponding inventory segment is "HL", no message sent', group: 'statusCodes' },
    { fields: [], values: {}, code: 'MN', shortDesc: 'Segment changed, "MK" segment in NOOP. No message sent', group: 'statusCodes' },
    { fields: [], values: {}, code: 'MOML', shortDesc: 'Moslem meal', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'MR', shortDesc: 'Flight or flight segment is under Selective Query Availability Status Conditions', group: 'sellReportCodes' },
    { fields: [], values: {}, code: 'MS', shortDesc: 'Schedule change, "MK" is re-accommodated. No message sent', group: 'statusCodes' },
    { fields: [], values: {}, code: 'MW', shortDesc: 'Schedule change, "ML" is not re-accommodated. No message sent', group: 'statusCodes' },
    { fields: [], values: {}, code: 'MX', shortDesc: 'Schedule change, "MK" is not re-accommodated. No message sent', group: 'statusCodes' },
    { fields: [], values: {}, code: 'NA', shortDesc: 'Need the segment specified or alternate segment immediately following. Confirm specified segment if available and take no action on alternative. If not available, reply with appropriate code and act upon alternatives in the same manner', group: 'ActionCodes' },
    { fields: [], values: {}, code: 'NAC', shortDesc: 'No action taken on message', group: 'MIReservationCodes' },
    { fields: [], values: {}, code: 'NAME', shortDesc: 'Name change caused segment status change', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'NAR', shortDesc: 'New arrival information', group: 'MIReservationCodes' },
    { fields: [], values: {}, code: 'NCM', shortDesc: 'PNR Not claimed, negative acknowledgement', group: 'MIBilateralCodes' },
    { fields: [], values: {}, code: 'NCO', shortDesc: 'New continuation information', group: 'MIReservationCodes' },
    { fields: [], values: {}, code: 'NG', shortDesc: 'Group request, message sent', group:'ActionCodes' },
    { fields: [], values: {}, code: 'NI', shortDesc: 'Need. Reply required. To be used for involuntary rerouting', group:'ActionCodes' },
    { fields: [], values: {}, code: 'NK', shortDesc: 'Guaranteed booking, positive acknowledgement provided', group:'ActionCodes' },
    { fields: [], values: {}, code: 'NLML', shortDesc: 'Low lactose meal', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'NMC', shortDesc: 'New Married Condition', group: 'MIBilateralCodes' },
    { fields: [], values: {}, code: 'NN', shortDesc: 'Requesting segment' },
    { fields: [], values: {}, code: 'NN', shortDesc: 'Need. Reply required indicating action taken using appropriate code', group:'ActionCodes' },
    { fields: [], values: {}, code: 'NO', shortDesc: 'No action taken', longDesc: 'No action taken. In cases other than no action taken on a specified segment because of inability to confirm precieding segment(s), the reason may be stated in a Supprementary Element', group: 'AdviceCodes' },
    { fields: [], values: {}, code: 'NOML', shortDesc: 'No meal', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'NRC', shortDesc: 'No record Passenger', group: 'MIReservationCodes' },
    { fields: [], values: {}, code: 'NRL', shortDesc: 'Advice of Record Locator change', longDesc: 'Adivce of Record Locator change for PNR(s) transferred from one Member/CRS system to another Airline Reservation/CRS system', group: 'MIReservationCodes' },
    { fields: [], values: {}, code: 'NRSB', shortDesc: 'Non-Revenue Standby Passenger', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'NS', shortDesc: 'No show' },
    { fields: [], values: {}, code: 'NSSA', shortDesc: 'No Smoking Aisle Seat (specific seat number may be included in reply)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'NSSB', shortDesc: 'No Smoking Bulkhead Seat (specific seat number may be included in reply)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'NSSR', shortDesc: 'No Smoking Rear-Facing Seat (by bilateral agreement)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'NSST', shortDesc: 'No Smoking Seat (specific seat number may be included)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'NSSW', shortDesc: 'No Smoking Window Seat (specific seat number may be included in reply)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'NU', shortDesc: 'The new carrier may not use the electronic ticket coupon(s) for the new/modified itinerary', group: 'statusCodes' },
    { fields: [], values: {}, code: 'NV', shortDesc: 'The new carrier may use the electronic ticket coupon(s). Further action may be required', group: 'statusCodes' },
    { fields: [], values: {}, code: 'OB', shortDesc: 'Overbook' },
    { fields: [], values: {}, code: 'OK', shortDesc: 'Secured booking, positive acknowledgement provided', group:'AdviceCodes' },
    { fields: [], values: {}, code: 'OP', shortDesc: 'Open segment (information / servicing request)', group:'ActionCodes' },
    { fields: [], values: {}, code: 'OS', shortDesc: 'Conditional Sell - Subjected to confirmed (excluding waitlist) space on all other flights within the requested interline connection otherwise invetory is to be returned', group:'ActionCodes' },
    { fields: [], values: {}, code: 'OSI', shortDesc: 'Other Service Information', group: 'SECElementIdentifierCodes' },
    { fields: [], values: {}, code: 'OTHS', shortDesc: 'Requires action or provides reservations related information for which no SSR code exists and may or may not require a reply', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'OX', shortDesc: 'Cancel only if requested segment/auxiallary/SSR service is available', group: 'ActionCodes' },
    { fields: [], values: {}, code: 'PA', shortDesc: 'Priority A waitlist, emergency travel. Message sent', group: 'ActionCodes' },
    { fields: [], values: {}, code: 'PB', shortDesc: 'Priority B waitlist, message sent', group: 'ActionCodes' },
    { fields: [], values: {}, code: 'PC', shortDesc: 'Priority C waitlist, message sent', group: 'ActionCodes' },
    { fields: [], values: {}, code: 'PCTC', shortDesc: 'Passenger emergency contact information', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'PD', shortDesc: 'Priority D waitlist, message sent', group: 'ActionCodes' },
    { fields: [], values: {}, code: 'PDBG', shortDesc: 'Prepaid Baggage (Chargeable)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'PDCO', shortDesc: 'Carbon Offset (Chargeable)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'PDFF', shortDesc: 'Frequent Flyer (Chargeable)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'PDGT', shortDesc: 'Ground Transport and Non Air Services (Chargeable)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'PDIE', shortDesc: 'In-Flight Entertainment (Chargeable)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'PDLG', shortDesc: 'Lounge (Chargeable)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'PDM', shortDesc: 'Possible duplicate message', group: 'MICommunicationCodes' },
    { fields: [], values: {}, code: 'PDML', shortDesc: 'Meal/Beverage (Chargeable)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'PDPT', shortDesc: 'Pets (Chargeable)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'PDRO', shortDesc: 'Rule Override (Chargeable)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'PDSB', shortDesc: 'Standby (Chargeable)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'PDST', shortDesc: 'Store (Chargeable)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'PDTS', shortDesc: 'Travel Services (Chargeable)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'PDUG', shortDesc: 'Upgrades (Chargeable)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'PDUM', shortDesc: 'Unaccompanied Minor (Chargeable)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'PG', shortDesc: 'Priority Group waitlist, message sent', group:'ActionCodes' },
    { fields: [], values: {}, code: 'PK', shortDesc: 'Discounted passenger.' },
    { fields: [], values: {}, code: 'PK', shortDesc: 'Passive segment, confirmed', group:'ActionCodes' },
    { fields: [], values: {}, code: 'PL', shortDesc: 'Passive segment, waitlisted', group:'ActionCodes' },
    { fields: [], values: {}, code: 'PN', shortDesc: 'Pending need' },
    { fields: [], values: {}, code: 'POXY', shortDesc: 'Passenger Own Oxygen', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'PPOC', shortDesc: 'Personal Portable Oxygen Concentrator', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'PS', shortDesc: 'Passive' },
    { fields: [], values: {}, code: 'PS', shortDesc: 'Open segment action code', group:'ActionCodes' },
    { fields: [], values: {}, code: 'PTN', shortDesc: 'No passive segment notification agreement exists', group: 'MIElectronicTicketCodes' },
    { fields: [], values: {}, code: 'PU', shortDesc: 'Subsequent advise of passive segment to be used when reporting updates to a booking', group:'ActionCodes' },
    { fields: [], values: {}, code: 'PW', shortDesc: 'Priority waitlist, message sent', group: 'ActionCodes' },
    { fields: [], values: {}, code: 'PX', shortDesc: 'Passive segment, cancellation advisory', group:'ActionCodes' },
    { fields: [], values: {}, code: 'RAS', shortDesc: 'Request for Availability Status Messages', group: 'MIBilateralCodes' },
    { fields: [], values: {}, code: 'RDT', shortDesc: 'Redirected Message', longDesc: 'Redirected Message (to be used to forward Message Traffic recieved by the original PNR owner to the new PNR owner)', group: 'MIBilateralCodes' },
    { fields: [], values: {}, code: 'RFTV', shortDesc: 'Reason for Travel', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'RLOC', shortDesc: 'Record Locator', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'RLS', shortDesc: 'Send Record Locator following Divide made by Member', group: 'MIBilateralCodes' },
    { fields: [], values: {}, code: 'RR', shortDesc: 'Reconfirm - Reconfirmed.', group: 'statusCodes' },
    { fields: [], values: {}, code: 'RV', shortDesc: 'The new carrier amy use the electronic ticket coupon(s) which has been updated with the new or modified itineray', group: 'statusCodes' },
    { fields: [], values: {}, code: 'RVML', shortDesc: 'Vegetarian raw meal', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'RVR', shortDesc: 'Availability Status', group: 'MIReservationCodes' },
    { fields: [], values: {}, code: 'RVR', shortDesc: 'Recap Request', group: 'MIAvailabilityStatusCodes' },
    { fields: [], values: {}, code: 'RQST', shortDesc: 'Seat Request - include Specific number or preference', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'RQR', shortDesc: 'Request for Reply', group: 'MIReservationCodes' },
    { fields: [], values: {}, code: 'RLR', shortDesc: 'Record Locator request', group: 'MIBilateralCodes' },
    { fields: [], values: {}, code: 'SA', shortDesc: 'Flight or flight segment is under Selective Query Availability Status Conditions', group: 'sellReportCodes' },
    { fields: [], values: {}, code: 'SA', shortDesc: 'List space available ID passenger (bilateral use - must not be used in conjunction with any other confirmed or requested or waitlisted positive space)', group:'ActionCodes' },
    { fields: [], values: {}, code: 'SB', shortDesc: 'Boarded standBy' },
    { fields: [], values: {}, code: 'SC', shortDesc: 'Schedule change' },
    { fields: [], values: {}, code: 'SD', shortDesc: 'Schedule change/re-booking; EMD already issued. Document number must be included in the SSR' },
    { fields: [], values: {}, code: 'SDV', shortDesc: 'Divide and Synchronize message Identier (Option 1)', group: 'MIBilateralCodes' },
    { fields: [], values: {}, code: 'SEAT', shortDesc: 'Pre-reserved seat requested with intent to issue a boarding pass or notification that a boarding pass has been issued', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'SEMN', shortDesc: 'Ship\'s Crew - Seamen', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'SFML', shortDesc: 'Seafood meal', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'SI', shortDesc: 'Flight or flight segment is not under Selective Query Availability Status Conditions', group: 'sellReportCodes' },
    { fields: [], values: {}, code: 'SKD', shortDesc: 'Schedule Exchange Data', group: 'MIReservationCodes' },
    { fields: [], values: {}, code: 'SLPR', shortDesc: 'Berth/Bed in hte cabin but exludes stretcher', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'SNC', shortDesc: 'Synchronized message (Option 1)', group: 'MIBilateralCodes' },
    { fields: [], values: {}, code: 'SMSA', shortDesc: 'Smoking Aisle Seat (specific seat number may be included in reply)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'SMSB', shortDesc: 'Smoking Bulkhead Seat (specific seat number may be included in reply)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'SMSR', shortDesc: 'Smoking Rear-Facing Seat (by bilateral agreement)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'SMST', shortDesc: 'Smoking Seat (specific seat number may be included)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'SMSW', shortDesc: 'Smoking Window Seat (specific seat number may be included)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'SP', shortDesc: 'Passive-space protected' },
    { fields: [], values: {}, code: 'SPD', shortDesc: 'Service PNR denial', group: 'MIBilateralCodes' },
    { fields: [], values: {}, code: 'SPEQ', shortDesc: 'Sports Equipment - specify type of equipment, number, weight, size, if known', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'SPM', shortDesc: 'Service PNR message requesting PNR data for subsequent action', group: 'MIBilateralCodes' },
    { fields: [], values: {}, code: 'SPML', shortDesc: 'Special meal', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'SPN', shortDesc: 'Service PNR message providing PNR data for subsequent action', group: 'MIBilateralCodes' },
    { fields: [], values: {}, code: 'SPR', shortDesc: 'Service PNR response', group: 'MIBilateralCodes' },
    { fields: [], values: {}, code: 'SPT', shortDesc: 'PNR Data refresh at ticket issuance', group: 'MIBilateralCodes' },
    { fields: [], values: {}, code: 'SQ', shortDesc: 'Space requested. Reply only if not available (between A4A Members and/or bilateral use only)', group: 'ActionCodes' },
    { fields: [], values: {}, code: 'SRL', shortDesc: 'Synchronized record locator (Option 3)', group: 'MIBilateralCodes' },
    { fields: [], values: {}, code: 'SS', shortDesc: 'Sell segment' },
    { fields: [], values: {}, code: 'SS', shortDesc: 'Sold', group:'ActionCodes' },
    { fields: [], values: {}, code: 'SSR', shortDesc: 'Special Service Requirement', group: 'SECElementIdentifierCodes' },
    { fields: [], values: {}, code: 'STL', shortDesc: 'Subject to load (used for code share non-revenue passengers)', group: 'MIBilateralCodes' },
    { fields: [], values: {}, code: 'SUR', shortDesc: 'Surface Transport (Ship, Rail, Bus, etc)', group: 'MIAuxServiceCodes' },
    { fields: [], values: {}, code: 'SVAN', shortDesc: 'Passenger with Service Animal in Cabin (Specify Details)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'SVC', shortDesc: 'Additional Services - Non-Segment-Associated', group: 'MIAuxServiceCodes' },
    { fields: [], values: {}, code: 'SYD', shortDesc: 'Divide and Synchronize message (Option 3)', group: 'MIBilateralCodes' },
    { fields: [], values: {}, code: 'SYN', shortDesc: 'Synchronized message (Option 3)', group: 'MIBilateralCodes' },
    { fields: [], values: {}, code: 'STCR', shortDesc: 'Stretcher Passenger', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'TCD', shortDesc: 'Transfer claim denial', group: 'MIBilateralCodes' },
    { fields: [], values: {}, code: 'TCM', shortDesc: 'Transfer dlaim message', group: 'MIBilateralCodes' },
    { fields: [], values: {}, code: 'TCP', shortDesc: 'Unsolicited Transfer of PNR data from an airline to a CRS', group: 'MIBilateralCodes' },
    { fields: [], values: {}, code: 'TCR', shortDesc: 'Transfer dlaim response', group: 'MIBilateralCodes' },
    { fields: [], values: {}, code: 'TK', shortDesc: 'Schedule Change. Confirming/Holds confirmed. Advise passenger of new scheduled times/details', group: 'scheduleChangeCodes' },
    { fields: [], values: {}, code: 'TKA', shortDesc: 'PNR Migrated acknowledgement', group: 'MIBilateralCodes' },
    { fields: [], values: {}, code: 'TKNE', shortDesc: 'Ticket Number for Electronic Tickets', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'TKTL', shortDesc: 'Ticketing Time Limit', longDesc: 'Ticketing Time Limit (provide hour, oblique, date, month and city where ticket is to be purchased, if more than one airline segment is in the itinerary)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'TKNR', shortDesc: 'Notification that an electronically ticketed reservation has been changed', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'TKNX', shortDesc: 'ET document number in back-up message for EDIFACT System Cancel', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'TL', shortDesc: 'Schedule change. Placing on Waitlist/Holds waitlist. Advise passenger of new scheduled times/details', group: 'scheduleChangeCodes' },
    { fields: [], values: {}, code: 'TLAC', shortDesc: 'Ticket Limit Auto Cancel Exemption', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'TN', shortDesc: 'Schedule change. Is On request/Hold needed. Advise passenger of new scheduled times/details', group: 'scheduleChangeCodes' },
    { fields: [], values: {}, code: 'TOD', shortDesc: 'Ticket on departure', group: 'MIBilateralCodes' },
    { fields: [], values: {}, code: 'TRA', shortDesc: 'Synchronized message response (Option 2)', group: 'MIBilateralCodes' },
    { fields: [], values: {}, code: 'TRL', shortDesc: 'Migrated PNR Record Locator or Link Record Locator', group: 'MIBilateralCodes' },
    { fields: [], values: {}, code: 'TRF', shortDesc: 'PNR transferred', group: 'MIBilateralCodes' },
    { fields: [], values: {}, code: 'TRR', shortDesc: 'PNR re-transferred', group: 'MIBilateralCodes' },
    { fields: [], values: {}, code: 'TRV', shortDesc: 'Migrated PNR Update', group: 'MIBilateralCodes' },
    { fields: [], values: {}, code: 'TRV', shortDesc: 'Synchronized message (Option 2)', group: 'MIBilateralCodes' },
    { fields: [], values: {}, code: 'TUR', shortDesc: 'Tour Services - (Sightseeing, etc)', group: 'MIAuxServiceCodes' },
    { fields: [], values: {}, code: 'TWOV', shortDesc: 'Transit/transfer without Visa', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'UC', shortDesc: 'Waitlist closed. Unable to accept request, waitlist, or sale. The passenger is not confirmed and is not waitlisted', group: 'AdviceCodes' },
    { fields: [], values: {}, code: 'UH', shortDesc: 'Unablie to Hold', longDesc: 'Unable to Hold - used in interline marriage to indicate a negative advice code; the carrier will not allow this space to be held for the new travel option requested', group:'AdviceCodes' },
    { fields: [], values: {}, code: 'UMNR', shortDesc: 'Unacoompanied Minor', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'UN', shortDesc: 'Unable to confirm, flight does not operate or special service not provided', group: 'AdviceCodes' },
    { fields: [], values: {}, code: 'UPD', shortDesc: 'Update Block Space Allocation by Block Owner', group: 'MIBlockSpaceCodes' },
    { fields: [], values: {}, code: 'UPGR', shortDesc: 'Upgrade', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'US', shortDesc: 'Unable to accept sale - flight, class, date, segment closed, have waitlisted (times may be optionally included if incorrect times recieved)', group: 'AdviceCodes' },
    { fields: [], values: {}, code: 'UU', shortDesc: 'Unable to confirm. Request Waitlisted', group: 'AdviceCodes' },
    { fields: [], values: {}, code: 'UX', shortDesc: 'Cancel Denied - Used in response to a request for interactive cancel', group: 'AdviceCodes' },
    { fields: [], values: {}, code: 'VGML', shortDesc: 'Vegetarian vegan meal', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'VJML', shortDesc: 'Vegetarian Jain meal', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'VLML', shortDesc: 'Vegetarian Lacto-ovo meal', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'VOML', shortDesc: 'Vegetarian oriental meal', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'WCBD', shortDesc: 'Wheelchair - Non spillable battery', longDesc: 'Wheelchair - Non spillable battery to be transported by a passenger which will require advance notification and may require preparation/(dis)assembly. Weight and dimensions may be specified. Wheechair and battery must be claimed and rechecked at each interline transfer point (by bilateral agreement)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'WCBW', shortDesc: 'Wheelchair - Wet cell battery', longDesc: 'Wet cell battety to be transported by a passenger. Will require advance notificcation and may require preparation/(dis)assembly. Weight and dimensions may be specified. Wheelchair and battery must be claimed and rechecked at each interline transfer point (by bilateral agreement)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'WCHC', shortDesc: 'Wheelchair - C for Cabin seat. Passenger Completely immobile', longDesc: 'Wheelchair - C for Cabin seat. Passenger completely immobile. Requires wheelchair to/from aircraft/mobile loung and must be carried up/down steps and to/from cabin seat. When service animal is accompanying passenger, specify the type of animal in free text of SSR item', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'WCHR', shortDesc: 'Wheelchair - R for Ramp. Passenger requires wheelchair for distance to/from aircraft', longDesc: 'Wheelchair - R for Ramp. Passenger can ascend/descend steps and make own way to/from cabin seat, but requires wheelchair for distance to/from aircraft, i.e. accross ramp, fingerdock or to mobile lounge, as applicable. When service animal is accompanying passenger, specify the type of animal in free text of SSR item', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'WCHS', shortDesc: 'Wheelchair - S for Steps. Passenger cannot ascend/descend steps', longDesc: 'Wheelchair - S for Steps. Passenger cannot ascend/descend steps, but is able to make own way to/from cabin seat; requires wheelchair for distance to/from aircraft, i.e. accross ramp, fingerdock or to mobile lounge and must be carried up/down steps. When service animal is accompanying passenger, specify the type of animal in free text of SSR item', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'WCOB', shortDesc: 'On-board Wheelchair - Provided by airline (by bilateral agreement) - 48 hours notice recommended but not required', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'WCLB', shortDesc: 'Wheelchair - Lithium ion battery', longDesc: 'Wheelchair - Lithium icon battery to be transported by a passenger which will require advance notification/preparation. Weight and diments may be specified. Wheelchair and battery must be claimed and rechecked at each interline transfer point (by bilateral agreement)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'WCMP', shortDesc: 'Wheelchair - Manual power to be transported by a passenger. Weight and dimensions may be specified (by bilateral agreement)', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'WEAP', shortDesc: 'Weapons, Firearms or Ammunication booked and carried as Checked Baggage', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'WK', shortDesc: 'Schedule change of a confirmed segment' },
    { fields: [], values: {}, code: 'WL', shortDesc: 'Schedule change of a waitlisted segment' },
    { fields: [], values: {}, code: 'WN', shortDesc: 'Schedule change of a needed segment' },
    { fields: [], values: {}, code: 'XA', shortDesc: 'Cancel List space available (as bilaterally agreed)', group: 'ActionCodes' },
    { fields: [], values: {}, code: 'XBAG', shortDesc: 'Excess Baggage - Specify number, weight, size, if known', group: 'SECSSRCodes' },
    { fields: [], values: {}, code: 'XL', shortDesc: 'Cancel Lising (Waiting List)', group: 'ActionCodes' },
    { fields: [], values: {}, code: 'XK', shortDesc: 'Cancel seg with change' },
    { fields: [], values: {}, code: 'XR', shortDesc: 'Cancellation recommended (Indicate reason as on OSI Supplementary Element)', group: 'ActionCodes' },
    { fields: [], values: {}, code: 'XX', shortDesc: 'Cancel segement confirmed/reqeusted', group: 'ActionCodes' },
    { fields: [], values: {}, code: 'YG', shortDesc: 'Involuntary upgrade' },
    { fields: [], values: {}, code: 'YK', shortDesc: 'Hold confirmed Airline space' },
    { fields: [], values: {}, code: 'ZD', shortDesc: 'If not holding, need. Same as need; however, passenger may already be holding space. Check for duplicate reservation', group:'ActionCodes' },
    { fields: [], values: {}, code: 'ZE', shortDesc: 'If not holding, sold. Same as sold; however, passenger may already be holding space. Check for duplicate reservation', group:'ActionCodes' },
    { fields: [], values: {}, code: 'ZK', shortDesc: 'Holds Confirmed. Space already confirmed', group: 'statusCodes' },
    { fields: [], values: {}, code: 'ZL', shortDesc: 'List - add to Waitlist (if used as Action Code)', group: 'ActionCodes' },
    { fields: [], values: {}, code: 'ZL', shortDesc: 'Limit Sales, waitlist (if used as a Status Code)', group: 'statusCodes' },
    { fields: [], values: {}, code: 'ZN', shortDesc: 'Need. Reply required indicating action taken using appropriate code', group:'ActionCodes' },
    { fields: [], values: {}, code: 'ZR', shortDesc: 'Reconfirmed', group: 'statusCodes' },
    { fields: [], values: {}, code: 'ZS', shortDesc: 'Sold', group:'ActionCodes' },
    { fields: [], values: {}, code: 'ZX', shortDesc: 'Cancel Confirmed/requested', group: 'ActionCodes' },
]

const arr_diff = (a1, a2) => {
    var a = [], diff = [];
    for (var i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }
    for (var i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }
    for (var k in a) {
        diff.push(k);
    }
    return diff;
}

const getDifference = (groupName, arrayToCompare) => {
    let allGroupCodes = getCodeByGroup(groupName),
    a1 = allGroupCodes[groupName].sort(),
    b1 = arrayToCompare.sort(),
    a = [],
    diff = [];
    for (var i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }
    for (var i = 0; i < b1.length; i++) {
        if (a[b1[i]]) {
            delete a[b1[i]];
        } else {
            a[b1[i]] = true;
        }
    }
    for (var k in a) {
        diff.push(k);
    }
    return diff;
}

const getCodeDefinition = (code) => {
    console.log({code});
    return airStatusCodes.filter(codeObject => codeObject.code.includes(code))
}

const getCodeByGroup = (groupName) => {
    let groupMembers = airStatusCodes.filter(codeObject => codeObject.group == groupName);
    let returnObject = {}
    returnObject[groupName] = [...groupMembers.map(groupMember => groupMember.code)]
    return returnObject;
}

const getCodeGroups = () => {
    const groupedAirStatusCodes = airStatusCodes.filter(codeObject => codeObject.group ? true: false)
    let groupings = [...new Set(groupedAirStatusCodes.map(codeObject => codeObject.group))];
    let totalGroupings = {};
    groupings.forEach((group) => {
        totalGroupings[group] = [...groupedAirStatusCodes.filter(codeObject => codeObject.group == group)].length
    })
    totalGroupings.ungrouped = [...airStatusCodes.filter(codeObject => codeObject.group ? false: true)].length
    return totalGroupings
}

const arraysEqual = (a, b) => {
    // if (a === b) return true;
    // if (a == null || b == null) return false;
    // if (a.length !== b.length) return false;
    // for (var i = 0; i < a.length; ++i) {
    //   if (a[i] !== b[i]) return false;
    // }
    a1 = a.slice().sort()
    b1 = b.slice().sort()
    return JSON.stringify(a1) === JSON.stringify(b1);
  }

const airStatusCodesFields = airStatusCodes.map(code => code.values);

const getCodeIndices = (query) => {
    return airStatusCodesFields.map(field => {
        return query in field ? true : false;
    })
}

const getAllPossibleValues = (query) => {
    codeIndices = getCodeIndices(query)
    codesContainingQuery = [];
    codeIndices.forEach((codeIndex, i) => {
        if (codeIndex) {
            codesContainingQuery.push(airStatusCodes[i]);
        }
    });
    return codesContainingQuery
}

const getSpecificSingleFieldValue = (field, value) => {
    let allPossibleValues = getAllPossibleValues(field);
    let firstFilter = allPossibleValues.filter(codeObject => codeObject.values[field] == value && codeObject.fields.length === 1)
    return firstFilter[0];
}

const getSpecificMultiFieldValue = (payload) => {
    let fields = Object.keys(payload);
    let values = Object.values(payload);
    // console.log({fields, values});
    if (fields.length == 1) {
        return getSpecificSingleFieldValue(fields[0], values[0]);
    } else {
        let allPossibleValues = [];
        fields.forEach((field, i) => {
            allPossibleValues.push(...getAllPossibleValues(field))
        })
        let firstFilteredPossibleValues = allPossibleValues.filter(codeObject => codeObject.fields.length == fields.length)
        if (firstFilteredPossibleValues.length == 1) {
            return firstFilteredPossibleValues[0]
        } else {
            let secondFilteredPossibleValues = firstFilteredPossibleValues.filter(codeObject => {
                console.log(arraysEqual(codeObject.fields, fields))
                return arraysEqual(codeObject.fields, fields);
            })
            finalValues = secondFilteredPossibleValues.map((codeObject, i) => {
                return codeObject.values 
            });
            let exactCode = {};
            let finalIndex = null;
            finalValues.forEach((valueObj, i) => {
                let allValuesCorrect = null;
                fields.forEach((field, n) => {
                    console.log({field, n, valueObj, value: values[n], fieldInObj: valueObj[field]})
                    if(valueObj[field] == values[n]){
                        allValuesCorrect = true;
                    } else {
                        allValuesCorrect = false;
                    }
                    if(n == fields.length - 1 && allValuesCorrect == true){
                        finalIndex = i;
                        console.log({finalIndex})
                    }
                })
            })
            exactCode = secondFilteredPossibleValues[finalIndex];
            return exactCode
        }

    }
}

// EXPORTS: { getAllPossibleValues('fieldName'), getSpecificSingleFieldValue('fieldName', value), getSpecificMultiFieldValue({field: value, field2: value2}) }
// console.log(getSpecificMultiFieldValue({isCheckedIn: false}))
console.log(getCodeGroups())

let arrayTest = [
    'ASC', 'AVA', 'AVC', 'AVH',
    'AVN', 'AVR', 'AVS', 'AVT',
    'BPR', 'CHG', 'SEC', 'DVD', 'IRP',
    'MAS', 'MED', 'NAC', 'NAR',
    'NCO', 'NRC', 'NRL', 'RVR',
    'RQR', 'SKD','NRP']

console.log(getCodeByGroup('MIBlockSpaceCodes'))
console.log(getCodeDefinition('AAK'))
// console.log(getDifference('MIReservationCodes', arrayTest))