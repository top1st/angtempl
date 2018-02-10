export enum NavType {
    item, collapse, group
}

export interface Nav {
    title: string
    type: NavType
    icon?: string
    children?: Nav[]
    url?: string
}
