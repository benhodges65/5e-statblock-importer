export class BlockID {
    static armor = "armor";
    static actions = "actions";
    static abilities = "abilities";
    static bonusActions = "bonusActions";
    static challenge = "challenge";
    static conditionImmunities = "conditionImmunities";
    static damageImmunities = "damageImmunities";
    static damageResistances = "damageResistences";
    static damageVulnerabilities = "damageVulnerabilities";
    static features = "features";
    static health = "health";
    static lairActions = "lairActions";
    static languages = "languages";
    static legendaryActions = "legendaryActions";
    static mythicActions = "mythicActions";
    static proficiencyBonus = "proficiencyBonus";
    static racialDetails = "racialDetails";
    static reactions = "reactions";
    static savingThrows = "savingThrows";
    static senses = "senses";
    static skills = "skills";
    static souls = "souls";
    static speed = "speed";
    static traits = "traits";
    static utilitySpells = "utilitySpells";
    static villainActions = "villainActions";
}

export const TopBlocks = [
    BlockID.armor,
    BlockID.abilities,
    BlockID.challenge,
    BlockID.conditionImmunities,
    BlockID.damageImmunities,
    BlockID.damageResistances,
    BlockID.damageVulnerabilities,
    BlockID.health,
    BlockID.languages,
    BlockID.proficiencyBonus,
    BlockID.racialDetails,
    BlockID.savingThrows,
    BlockID.senses,
    BlockID.skills,
    BlockID.souls,
    BlockID.speed,
]

export class DamageConditionId {
    static immunities = "immunities";
    static resistances = "resistances";
    static vulnerabilities = "vulnerabilities";
}

export const KnownLanguages = [
    "aarakocra",
    "abyssal",
    "aquan",
    "auran",
    "celestial",
    "common",
    "deep",
    "draconic",
    "druidic",
    "dwarvish",
    "elvish",
    "giant",
    "gith",
    "gnoll",
    "gnomish",
    "goblin",
    "halfling",
    "ignan",
    "infernal",
    "orc",
    "primordial",
    "sylvan",
    "terran",
    "cant",
    "undercommon"
];

export const KnownCreatureTypes = [
    "aberration",
    "celestial",
    "dragon",
    "fey",
    "giant",
    "monstrosity",
    "plant",
    "beast",
    "construct",
    "elemental",
    "fiend",
    "humanoid",
    "ooze",
    "undead"
];

export class CreatureData {
    constructor(name) {
        this.name = name;                           // string
        this.size = null;                           // string
        this.type = null;                           // string
        this.alignment = null;                      // string
        this.armor_class = null;                    // int
        this.armor_desc = null;                     // string
        this.hit_points = null;                     // int
        this.hit_dice = null;                       // string
        this.speed_json = null;                     // string
        this.strength = null;                       // int
        this.dexterity = null;                      // int
        this.constitution = null;                   // int
        this.intelligence = null;                   // int
        this.wisdom = null;                         // int
        this.charisma = null;                       // int
        this.strength_save = null;                  // int
        this.dexterity_save = null;                 // int
        this.constitution_save = null;              // int
        this.intelligence_save = null;              // int
        this.wisdom_save = null;                    // int
        this.charisma_save = null;                  // int
        this.perception = null;                     // int
        this.skills_json = null;                    // string
        this.damage_vulnerabilities = null;         // string
        this.damage_resistances = null;             // string
        this.damage_immunities = null;              // string
        this.condition_immunities = null;           // string
        this.senses = null;                         // string
        this.languages = null;                      // string
        this.challenge_rating = null;               // string
        this.cr = null;                             // int
        this.actions_json = [];                     // NameValueData[]
        this.bonus_actions_json = [];               // NameValueData[]
        this.reactions_json = [];                   // NameValueData[]
        this.legendary_desc = null;                 // string
        this.legendary_actions_json = [];           // NameValueData[]
        this.spells_json = [];                      // NameValueData[]
        this.special_abilities_json = [];           // NameValueData[]
        this.desc = false;                          // boolean
        this.document = null;                       // string
        this.created_at = null;                     // string
        this.page_no = null;                        // string
        this.group = null;                          // string
    }
}

/*
name: string
value: object
*/
export class NameValueData {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}
