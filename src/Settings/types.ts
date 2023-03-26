export type taxBracket = {
  rate: string;
  over: number;
  under: number;
  plus: number;
}

export type taxTableBracketTypes = {
  single: taxBracket[];
  marriedFilingJointly: taxBracket[];
  marriedFillingSeparately: taxBracket[];
  headOfHousehold: taxBracket[];
}

export type taxTable = {
  brackets: taxTableBracketTypes;
}