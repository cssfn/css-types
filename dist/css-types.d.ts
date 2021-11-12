import type { Style } from '@cssfn/jss-plugin-extend';
import type { Dictionary } from '@cssfn/types';
import type { Property } from 'csstype';
export type { Property as Prop };
export declare namespace Cust {
    type Decl = `--${string}`;
    type RefOne = `var(${Decl})`;
    type Ref = RefOne | `var(${Decl},${RefOne})` | `var(${Decl},${string})`;
    type KeyframesRef = string;
    type General = string | number;
    type Expr = General | Ref | (General | Ref)[] | (General | Ref)[][];
}
export declare namespace PropEx {
    type Keyframes = Dictionary<Style>;
    type Length = 0 | string;
}
