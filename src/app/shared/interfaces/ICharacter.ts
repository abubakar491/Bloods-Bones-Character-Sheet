export interface ICharacter {
    name: string;
    baseAttributes: IBaseAttributes;
    combatAttributes: ICombatAttributes;
    skills: ISkills;
}

export interface IBaseAttributes {
    Strength: number;
    Dexterity: number;
    Mind: number;
    Presence: number;
}

export interface ICombatAttributes {
    Vitality: number;
    Evasion: number;
    Armor: number;
    Alacrity: number;
    Tenacity: number;
    Power: number;
}
export interface ISkills {
    Strength: ISkillStrength;
    Dexterity: ISkillDexterity;
    Mind: ISkillMind;
    Presence: ISkillPresence;
}

export interface ISkillStrength {
    Fighting: number;
}
export interface ISkillDexterity {
    Fighting: number;
    Thievery: number;
    Stealth: number;
    Archery: number;
}
export interface ISkillMind {
    Learned: number;
    Survival: number;
    Perception: number;
    Apothecary: number;
}
export interface ISkillPresence {
    Intimidation: number
    Performance: number
    Manipulation: number
    Insight: number
    Power: number
}