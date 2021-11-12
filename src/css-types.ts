// custom jss-plugins:
import type { Style }       from '@cssfn/jss-plugin-extend'

// cssfn:
import type {
    Dictionary,
}                           from '@cssfn/types'  // cssfn's types

// others libs:
import type { Property }    from 'csstype'       // ts defs support for cssfn



export type { Property as Prop }



export namespace Cust {
    export type Decl         = `--${string}`
    export type RefOne       = `var(${Decl})`
    export type Ref          = RefOne|`var(${Decl},${RefOne})`|`var(${Decl},${string})`
    export type KeyframesRef = string
    export type General      = string|number
    export type Expr         = General|Ref | (General|Ref)[] | (General|Ref)[][]
}



export namespace PropEx {
    export type Keyframes = Dictionary<Style>
    export type Length    = 0 | string
}