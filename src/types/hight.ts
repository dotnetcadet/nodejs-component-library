import { OnMedia } from "./media";

export type HightSize = '0.5' | '1' | '1.5' | '2' | '2.5' | '3' | '3.5' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '14' | '16' | '20' | '24' | '28' | '32' | '36' | '40' | '44' | '48' | '52' | '56' | '60' | '64' | '72' | '80' | '96' | 'auto' | '1/2' | '1/3' | '2/3' | '1/4' | '2/4' | '3/4' | '1/5' | '2/5' | '3/5' | '4/5' | '1/6' | '2/6' | '3/6' | '4/6' | '5/6' | 'full' | 'screen' | 'min' | 'max' | 'fit'
export type HightMax = {
    max: HightSize | OnMedia<HightSize>
}
export type HightMin = {
    min: HightSize | OnMedia<HightSize>
}
export type Hight = HightSize | OnMedia<HightSize> | HightMax | HightMin | {
    value: HightSize
}