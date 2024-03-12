export interface Monster {
    slug: string
    desc: string
    name: string
    size: string
    type: string
    subtype: string
    group: any
    alignment: string
    armor_class: number
    armor_desc: string
    hit_points: number
    hit_dice: string
    speed: Speed
    strength: number
    dexterity: number
    constitution: number
    intelligence: number
    wisdom: number
    charisma: number
    strength_save: any
    dexterity_save: any
    constitution_save: number
    intelligence_save: number
    wisdom_save: number
    charisma_save: any
    perception: number
    skills: Skills
    damage_vulnerabilities: string
    damage_resistances: string
    damage_immunities: string
    condition_immunities: string
    senses: string
    languages: string
    challenge_rating: string
    cr: number
    actions: Action[]
    bonus_actions: any
    reactions: any
    legendary_desc: string
    legendary_actions: LegendaryAction[]
    special_abilities: SpecialAbility[]
    spell_list: any[]
    page_no: number
    environments: string[]
    img_main: string
    document__slug: string
    document__title: string
    document__license_url: string
    document__url: string
}

export interface Speed {
    walk: number
    swim: number
}

export interface Skills {
    history: number
    perception: number
}

export interface Action {
    name: string
    desc: string
    attack_bonus?: number
    damage_dice?: string
    damage_bonus?: number
}

export interface LegendaryAction {
    name: string
    desc: string
}

export interface SpecialAbility {
    name: string
    desc: string
}
