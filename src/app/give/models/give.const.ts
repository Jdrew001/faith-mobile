import { OfferingCategory } from "./offering.model";

export class GivingConst {
    public static OFFERING_CATEGORIES: Array<OfferingCategory> = [
        {value: 'General Offering', label: 'General Offering', disabled: false},
        {value: 'S. S. Offering', label: 'S. S. Offering', disabled: false},
        {value: 'Building Fund', label: 'Building Fund', disabled: false},
        {value: 'Foreign Missions', label: 'Foreign Missions', disabled: false},
        {value: 'Home Missions', label: 'Home Missions', disabled: false},
        {value: 'Youth Ministry', label: 'Youth Ministry',disabled: false},
        {value: 'Other', label: 'Other', disabled: false }
    ]
}