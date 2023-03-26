//items

export interface Item {
    id: number;
    value: string;
    opacity?: Array<number>;
    x?: Array<number>;
}

export type Items = Array<Item>

//swap

export type Swap = {item1: number, item2: number} | null;

//sorting steps

export interface SortingStep {
    array: Items; 
    swap: Swap;
}

export type SortingSteps = Array<SortingStep> | undefined;

//user sorting Steps

export type UserSortingStep = Items;

export type UserSortingSteps = Array<UserSortingSteps>;


//challenge info

export type ChallengeInfo = Array<{
    message: string;
    swap: Swap
}> 
    

