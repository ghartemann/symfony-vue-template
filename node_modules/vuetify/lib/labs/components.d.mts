import * as vue from 'vue';
import { ComponentPropsOptions, ExtractPropTypes, VNodeChild, VNode, Ref, PropType } from 'vue';

declare const block: readonly ["top", "bottom"];
declare const inline: readonly ["start", "end", "left", "right"];
type Tblock = typeof block[number];
type Tinline = typeof inline[number];
type Anchor = Tblock | Tinline | 'center' | 'center center' | `${Tblock} ${Tinline | 'center'}` | `${Tinline} ${Tblock | 'center'}`;

type SlotsToProps<U extends RawSlots, T = MakeInternalSlots<U>> = {
    $children?: (VNodeChild | (T extends {
        default: infer V;
    } ? V : {}) | {
        [K in keyof T]?: T[K];
    });
    'v-slots'?: {
        [K in keyof T]?: T[K] | false;
    };
} & {
    [K in keyof T as `v-slot:${K & string}`]?: T[K] | false;
};
type RawSlots = Record<string, unknown>;
type Slot<T> = [T] extends [never] ? () => VNodeChild : (arg: T) => VNodeChild;
type VueSlot<T> = [T] extends [never] ? () => VNode[] : (arg: T) => VNode[];
type MakeInternalSlots<T extends RawSlots> = {
    [K in keyof T]: Slot<T[K]>;
};
type MakeSlots<T extends RawSlots> = {
    [K in keyof T]: VueSlot<T[K]>;
};
type GenericProps<Props, Slots extends Record<string, unknown>> = {
    $props: Props & SlotsToProps<Slots>;
    $slots: MakeSlots<Slots>;
};
interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): Partial<Pick<T, U>>;
}

type VConfirmEditSlots<T> = {
    default: {
        model: Ref<T>;
        get actions(): VNode;
    };
};
declare const VConfirmEdit: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        cancelText: string;
        okText: string;
    } & {
        color?: string | undefined;
    } & {
        onCancel?: (() => any) | undefined;
    }, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
        cancel: () => true;
        save: (value: any) => true;
        'update:modelValue': (value: any) => true;
    }, "$children" | "v-slot:default" | "v-slots" | "modelValue" | "update:modelValue" | "save">, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        cancelText: string;
        okText: string;
    } & {
        color?: string | undefined;
    } & {
        onCancel?: (() => any) | undefined;
    }, {
        cancelText: string;
        okText: string;
    }, true, {}, vue.SlotsType<Partial<{
        default: (arg: {
            model: Ref<unknown>;
            readonly actions: VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>;
        }) => VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
    }>>, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        cancelText: string;
        okText: string;
    } & {
        color?: string | undefined;
    } & {
        onCancel?: (() => any) | undefined;
    }, {}, {}, {}, {}, {
        cancelText: string;
        okText: string;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    cancelText: string;
    okText: string;
} & {
    color?: string | undefined;
} & {
    onCancel?: (() => any) | undefined;
}, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
    cancel: () => true;
    save: (value: any) => true;
    'update:modelValue': (value: any) => true;
}, "$children" | "v-slot:default" | "v-slots" | "modelValue" | "update:modelValue" | "save">, string, {
    cancelText: string;
    okText: string;
}, {}, string, vue.SlotsType<Partial<{
    default: (arg: {
        model: Ref<unknown>;
        readonly actions: VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>;
    }) => VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new <T>(props: {
    modelValue?: T | undefined;
    'onUpdate:modelValue'?: ((value: T) => void) | undefined;
    onSave?: ((value: T) => void) | undefined;
}, slots: VConfirmEditSlots<T>) => GenericProps<{
    modelValue?: T | undefined;
    'onUpdate:modelValue'?: ((value: T) => void) | undefined;
    onSave?: ((value: T) => void) | undefined;
}, VConfirmEditSlots<T>>) & FilterPropsOptions<{
    modelValue: null;
    color: StringConstructor;
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    okText: {
        type: StringConstructor;
        default: string;
    };
}, vue.ExtractPropTypes<{
    modelValue: null;
    color: StringConstructor;
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    okText: {
        type: StringConstructor;
        default: string;
    };
}>>;
type VConfirmEdit = InstanceType<typeof VConfirmEdit>;

declare const VCalendar: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        text: string;
        disabled: boolean;
        day: Record<string, any>;
        nextIcon: string;
        prevIcon: string;
        viewMode: "day" | "month" | "week";
        showAdjacentMonths: boolean;
        weekdays: number[];
        hideHeader: boolean;
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
        intervalFormat: string | Function;
        intervalStart: number;
        hideDayHeader: boolean;
        intervals: number;
        hideWeekNumber: boolean;
    } & {
        max?: unknown;
        min?: unknown;
        title?: string | undefined;
        month?: string | number | undefined;
        year?: string | number | undefined;
        events?: any[] | undefined;
        modelValue?: unknown[] | undefined;
        allowedDates?: Function | unknown[] | undefined;
        displayValue?: unknown;
        dayIndex?: number | undefined;
    } & {
        $children?: {} | vue.VNodeChild | {
            header?: ((arg: {
                title: string;
            }) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            header?: false | ((arg: {
                title: string;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:header"?: false | ((arg: {
            title: string;
        }) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onNext?: ((...args: any[]) => any) | undefined;
        onPrev?: ((...args: any[]) => any) | undefined;
    }, {
        daysInMonth: vue.ComputedRef<{
            date: Date;
            isoDate: string;
            formatted: string;
            year: number;
            month: number;
            isDisabled: boolean;
            isWeekStart: boolean;
            isWeekEnd: boolean;
            isToday: boolean;
            isAdjacent: boolean;
            isHidden: boolean;
            isStart: boolean;
            isSelected: boolean;
            isEnd: boolean;
            isSame: boolean;
            localized: string;
        }[]>;
        daysInWeek: vue.ComputedRef<{
            date: Date;
            isoDate: string;
            formatted: string;
            year: number;
            month: number;
            isDisabled: boolean;
            isWeekStart: boolean;
            isWeekEnd: boolean;
            isToday: boolean;
            isAdjacent: boolean;
            isHidden: boolean;
            isStart: boolean;
            isSelected: boolean;
            isEnd: boolean;
            isSame: boolean;
            localized: string;
        }[]>;
        genDays: (days: Date[], today: Date) => {
            date: Date;
            isoDate: string;
            formatted: string;
            year: number;
            month: number;
            isDisabled: boolean;
            isWeekStart: boolean;
            isWeekEnd: boolean;
            isToday: boolean;
            isAdjacent: boolean;
            isHidden: boolean;
            isStart: boolean;
            isSelected: boolean;
            isEnd: boolean;
            isSame: boolean;
            localized: string;
        }[];
    }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
        next: null;
        prev: null;
        'update:modelValue': null;
    }, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        text: string;
        disabled: boolean;
        day: Record<string, any>;
        nextIcon: string;
        prevIcon: string;
        viewMode: "day" | "month" | "week";
        showAdjacentMonths: boolean;
        weekdays: number[];
        hideHeader: boolean;
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
        intervalFormat: string | Function;
        intervalStart: number;
        hideDayHeader: boolean;
        intervals: number;
        hideWeekNumber: boolean;
    } & {
        max?: unknown;
        min?: unknown;
        title?: string | undefined;
        month?: string | number | undefined;
        year?: string | number | undefined;
        events?: any[] | undefined;
        modelValue?: unknown[] | undefined;
        allowedDates?: Function | unknown[] | undefined;
        displayValue?: unknown;
        dayIndex?: number | undefined;
    } & {
        $children?: {} | vue.VNodeChild | {
            header?: ((arg: {
                title: string;
            }) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            header?: false | ((arg: {
                title: string;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:header"?: false | ((arg: {
            title: string;
        }) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onNext?: ((...args: any[]) => any) | undefined;
        onPrev?: ((...args: any[]) => any) | undefined;
    }, {
        text: string;
        disabled: boolean;
        day: Record<string, any>;
        nextIcon: string;
        prevIcon: string;
        viewMode: "day" | "month" | "week";
        showAdjacentMonths: boolean;
        weekdays: number[];
        hideHeader: boolean;
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
        intervalFormat: string | Function;
        intervalStart: number;
        hideDayHeader: boolean;
        intervals: number;
        hideWeekNumber: boolean;
    }, true, {}, vue.SlotsType<Partial<{
        header: (arg: {
            title: string;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
    }>>, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        text: string;
        disabled: boolean;
        day: Record<string, any>;
        nextIcon: string;
        prevIcon: string;
        viewMode: "day" | "month" | "week";
        showAdjacentMonths: boolean;
        weekdays: number[];
        hideHeader: boolean;
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
        intervalFormat: string | Function;
        intervalStart: number;
        hideDayHeader: boolean;
        intervals: number;
        hideWeekNumber: boolean;
    } & {
        max?: unknown;
        min?: unknown;
        title?: string | undefined;
        month?: string | number | undefined;
        year?: string | number | undefined;
        events?: any[] | undefined;
        modelValue?: unknown[] | undefined;
        allowedDates?: Function | unknown[] | undefined;
        displayValue?: unknown;
        dayIndex?: number | undefined;
    } & {
        $children?: {} | vue.VNodeChild | {
            header?: ((arg: {
                title: string;
            }) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            header?: false | ((arg: {
                title: string;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:header"?: false | ((arg: {
            title: string;
        }) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onNext?: ((...args: any[]) => any) | undefined;
        onPrev?: ((...args: any[]) => any) | undefined;
    }, {
        daysInMonth: vue.ComputedRef<{
            date: Date;
            isoDate: string;
            formatted: string;
            year: number;
            month: number;
            isDisabled: boolean;
            isWeekStart: boolean;
            isWeekEnd: boolean;
            isToday: boolean;
            isAdjacent: boolean;
            isHidden: boolean;
            isStart: boolean;
            isSelected: boolean;
            isEnd: boolean;
            isSame: boolean;
            localized: string;
        }[]>;
        daysInWeek: vue.ComputedRef<{
            date: Date;
            isoDate: string;
            formatted: string;
            year: number;
            month: number;
            isDisabled: boolean;
            isWeekStart: boolean;
            isWeekEnd: boolean;
            isToday: boolean;
            isAdjacent: boolean;
            isHidden: boolean;
            isStart: boolean;
            isSelected: boolean;
            isEnd: boolean;
            isSame: boolean;
            localized: string;
        }[]>;
        genDays: (days: Date[], today: Date) => {
            date: Date;
            isoDate: string;
            formatted: string;
            year: number;
            month: number;
            isDisabled: boolean;
            isWeekStart: boolean;
            isWeekEnd: boolean;
            isToday: boolean;
            isAdjacent: boolean;
            isHidden: boolean;
            isStart: boolean;
            isSelected: boolean;
            isEnd: boolean;
            isSame: boolean;
            localized: string;
        }[];
    }, {}, {}, {}, {
        text: string;
        disabled: boolean;
        day: Record<string, any>;
        nextIcon: string;
        prevIcon: string;
        viewMode: "day" | "month" | "week";
        showAdjacentMonths: boolean;
        weekdays: number[];
        hideHeader: boolean;
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
        intervalFormat: string | Function;
        intervalStart: number;
        hideDayHeader: boolean;
        intervals: number;
        hideWeekNumber: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    text: string;
    disabled: boolean;
    day: Record<string, any>;
    nextIcon: string;
    prevIcon: string;
    viewMode: "day" | "month" | "week";
    showAdjacentMonths: boolean;
    weekdays: number[];
    hideHeader: boolean;
    intervalDivisions: number;
    intervalDuration: number;
    intervalHeight: number;
    intervalFormat: string | Function;
    intervalStart: number;
    hideDayHeader: boolean;
    intervals: number;
    hideWeekNumber: boolean;
} & {
    max?: unknown;
    min?: unknown;
    title?: string | undefined;
    month?: string | number | undefined;
    year?: string | number | undefined;
    events?: any[] | undefined;
    modelValue?: unknown[] | undefined;
    allowedDates?: Function | unknown[] | undefined;
    displayValue?: unknown;
    dayIndex?: number | undefined;
} & {
    $children?: {} | vue.VNodeChild | {
        header?: ((arg: {
            title: string;
        }) => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        header?: false | ((arg: {
            title: string;
        }) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:header"?: false | ((arg: {
        title: string;
    }) => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onNext?: ((...args: any[]) => any) | undefined;
    onPrev?: ((...args: any[]) => any) | undefined;
}, {
    daysInMonth: vue.ComputedRef<{
        date: Date;
        isoDate: string;
        formatted: string;
        year: number;
        month: number;
        isDisabled: boolean;
        isWeekStart: boolean;
        isWeekEnd: boolean;
        isToday: boolean;
        isAdjacent: boolean;
        isHidden: boolean;
        isStart: boolean;
        isSelected: boolean;
        isEnd: boolean;
        isSame: boolean;
        localized: string;
    }[]>;
    daysInWeek: vue.ComputedRef<{
        date: Date;
        isoDate: string;
        formatted: string;
        year: number;
        month: number;
        isDisabled: boolean;
        isWeekStart: boolean;
        isWeekEnd: boolean;
        isToday: boolean;
        isAdjacent: boolean;
        isHidden: boolean;
        isStart: boolean;
        isSelected: boolean;
        isEnd: boolean;
        isSame: boolean;
        localized: string;
    }[]>;
    genDays: (days: Date[], today: Date) => {
        date: Date;
        isoDate: string;
        formatted: string;
        year: number;
        month: number;
        isDisabled: boolean;
        isWeekStart: boolean;
        isWeekEnd: boolean;
        isToday: boolean;
        isAdjacent: boolean;
        isHidden: boolean;
        isStart: boolean;
        isSelected: boolean;
        isEnd: boolean;
        isSame: boolean;
        localized: string;
    }[];
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    next: null;
    prev: null;
    'update:modelValue': null;
}, string, {
    text: string;
    disabled: boolean;
    day: Record<string, any>;
    nextIcon: string;
    prevIcon: string;
    viewMode: "day" | "month" | "week";
    showAdjacentMonths: boolean;
    weekdays: number[];
    hideHeader: boolean;
    intervalDivisions: number;
    intervalDuration: number;
    intervalHeight: number;
    intervalFormat: string | Function;
    intervalStart: number;
    hideDayHeader: boolean;
    intervals: number;
    hideWeekNumber: boolean;
}, {}, string, vue.SlotsType<Partial<{
    header: (arg: {
        title: string;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    nextIcon: {
        type: StringConstructor;
        default: string;
    };
    prevIcon: {
        type: StringConstructor;
        default: string;
    };
    title: StringConstructor;
    text: {
        type: StringConstructor;
        default: string;
    };
    viewMode: {
        type: vue.PropType<"day" | "month" | "week">;
        default: string;
    };
    day: {
        type: ObjectConstructor;
        default: () => {};
    };
    dayIndex: NumberConstructor;
    events: {
        (arrayLength: number): any[];
        (...items: any[]): any[];
        new (arrayLength: number): any[];
        new (...items: any[]): any[];
        isArray(arg: any): arg is any[];
        readonly prototype: any[];
        from<T>(arrayLike: ArrayLike<T>): T[];
        from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
        from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
        from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
        of<T_4>(...items: T_4[]): T_4[];
        readonly [Symbol.species]: ArrayConstructor;
    };
    intervalDivisions: {
        type: NumberConstructor;
        default: number;
    };
    intervalDuration: {
        type: NumberConstructor;
        default: number;
    };
    intervalHeight: {
        type: NumberConstructor;
        default: number;
    };
    intervalFormat: {
        type: (FunctionConstructor | StringConstructor)[];
        default: string;
    };
    intervalStart: {
        type: NumberConstructor;
        default: number;
    };
    hideDayHeader: BooleanConstructor;
    intervals: {
        type: NumberConstructor;
        default: number;
    };
    allowedDates: (FunctionConstructor | ArrayConstructor)[];
    disabled: BooleanConstructor;
    displayValue: vue.PropType<unknown>;
    modelValue: vue.PropType<unknown[] | undefined>;
    month: (StringConstructor | NumberConstructor)[];
    max: vue.PropType<unknown>;
    min: vue.PropType<unknown>;
    showAdjacentMonths: BooleanConstructor;
    year: (StringConstructor | NumberConstructor)[];
    weekdays: {
        type: {
            (arrayLength: number): number[];
            (...items: number[]): number[];
            new (arrayLength: number): number[];
            new (...items: number[]): number[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        };
        default: () => number[];
    };
    hideHeader: BooleanConstructor;
    hideWeekNumber: BooleanConstructor;
}, vue.ExtractPropTypes<{
    nextIcon: {
        type: StringConstructor;
        default: string;
    };
    prevIcon: {
        type: StringConstructor;
        default: string;
    };
    title: StringConstructor;
    text: {
        type: StringConstructor;
        default: string;
    };
    viewMode: {
        type: vue.PropType<"day" | "month" | "week">;
        default: string;
    };
    day: {
        type: ObjectConstructor;
        default: () => {};
    };
    dayIndex: NumberConstructor;
    events: {
        (arrayLength: number): any[];
        (...items: any[]): any[];
        new (arrayLength: number): any[];
        new (...items: any[]): any[];
        isArray(arg: any): arg is any[];
        readonly prototype: any[];
        from<T>(arrayLike: ArrayLike<T>): T[];
        from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
        from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
        from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
        of<T_4>(...items: T_4[]): T_4[];
        readonly [Symbol.species]: ArrayConstructor;
    };
    intervalDivisions: {
        type: NumberConstructor;
        default: number;
    };
    intervalDuration: {
        type: NumberConstructor;
        default: number;
    };
    intervalHeight: {
        type: NumberConstructor;
        default: number;
    };
    intervalFormat: {
        type: (FunctionConstructor | StringConstructor)[];
        default: string;
    };
    intervalStart: {
        type: NumberConstructor;
        default: number;
    };
    hideDayHeader: BooleanConstructor;
    intervals: {
        type: NumberConstructor;
        default: number;
    };
    allowedDates: (FunctionConstructor | ArrayConstructor)[];
    disabled: BooleanConstructor;
    displayValue: vue.PropType<unknown>;
    modelValue: vue.PropType<unknown[] | undefined>;
    month: (StringConstructor | NumberConstructor)[];
    max: vue.PropType<unknown>;
    min: vue.PropType<unknown>;
    showAdjacentMonths: BooleanConstructor;
    year: (StringConstructor | NumberConstructor)[];
    weekdays: {
        type: {
            (arrayLength: number): number[];
            (...items: number[]): number[];
            new (arrayLength: number): number[];
            new (...items: number[]): number[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        };
        default: () => number[];
    };
    hideHeader: BooleanConstructor;
    hideWeekNumber: BooleanConstructor;
}>>;
type VCalendar = InstanceType<typeof VCalendar>;

declare const VCalendarDay: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        day: Record<string, any>;
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
        intervalFormat: string | Function;
        intervalStart: number;
        hideDayHeader: boolean;
        intervals: number;
    } & {
        events?: any[] | undefined;
        dayIndex?: number | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    }, {
        intervals: vue.ComputedRef<number[]>;
    }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        day: Record<string, any>;
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
        intervalFormat: string | Function;
        intervalStart: number;
        hideDayHeader: boolean;
        intervals: number;
    } & {
        events?: any[] | undefined;
        dayIndex?: number | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    }, {
        day: Record<string, any>;
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
        intervalFormat: string | Function;
        intervalStart: number;
        hideDayHeader: boolean;
        intervals: number;
    }, true, {}, vue.SlotsType<Partial<{
        default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
    }>>, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        day: Record<string, any>;
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
        intervalFormat: string | Function;
        intervalStart: number;
        hideDayHeader: boolean;
        intervals: number;
    } & {
        events?: any[] | undefined;
        dayIndex?: number | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    }, {
        intervals: vue.ComputedRef<number[]>;
    }, {}, {}, {}, {
        day: Record<string, any>;
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
        intervalFormat: string | Function;
        intervalStart: number;
        hideDayHeader: boolean;
        intervals: number;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    day: Record<string, any>;
    intervalDivisions: number;
    intervalDuration: number;
    intervalHeight: number;
    intervalFormat: string | Function;
    intervalStart: number;
    hideDayHeader: boolean;
    intervals: number;
} & {
    events?: any[] | undefined;
    dayIndex?: number | undefined;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
}, {
    intervals: vue.ComputedRef<number[]>;
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    day: Record<string, any>;
    intervalDivisions: number;
    intervalDuration: number;
    intervalHeight: number;
    intervalFormat: string | Function;
    intervalStart: number;
    hideDayHeader: boolean;
    intervals: number;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    day: {
        type: ObjectConstructor;
        default: () => {};
    };
    dayIndex: NumberConstructor;
    events: {
        (arrayLength: number): any[];
        (...items: any[]): any[];
        new (arrayLength: number): any[];
        new (...items: any[]): any[];
        isArray(arg: any): arg is any[];
        readonly prototype: any[];
        from<T>(arrayLike: ArrayLike<T>): T[];
        from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
        from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
        from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
        of<T_4>(...items: T_4[]): T_4[];
        readonly [Symbol.species]: ArrayConstructor;
    };
    intervalDivisions: {
        type: NumberConstructor;
        default: number;
    };
    intervalDuration: {
        type: NumberConstructor;
        default: number;
    };
    intervalHeight: {
        type: NumberConstructor;
        default: number;
    };
    intervalFormat: {
        type: (FunctionConstructor | StringConstructor)[];
        default: string;
    };
    intervalStart: {
        type: NumberConstructor;
        default: number;
    };
    hideDayHeader: BooleanConstructor;
    intervals: {
        type: NumberConstructor;
        default: number;
    };
}, vue.ExtractPropTypes<{
    day: {
        type: ObjectConstructor;
        default: () => {};
    };
    dayIndex: NumberConstructor;
    events: {
        (arrayLength: number): any[];
        (...items: any[]): any[];
        new (arrayLength: number): any[];
        new (...items: any[]): any[];
        isArray(arg: any): arg is any[];
        readonly prototype: any[];
        from<T>(arrayLike: ArrayLike<T>): T[];
        from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
        from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
        from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
        of<T_4>(...items: T_4[]): T_4[];
        readonly [Symbol.species]: ArrayConstructor;
    };
    intervalDivisions: {
        type: NumberConstructor;
        default: number;
    };
    intervalDuration: {
        type: NumberConstructor;
        default: number;
    };
    intervalHeight: {
        type: NumberConstructor;
        default: number;
    };
    intervalFormat: {
        type: (FunctionConstructor | StringConstructor)[];
        default: string;
    };
    intervalStart: {
        type: NumberConstructor;
        default: number;
    };
    hideDayHeader: BooleanConstructor;
    intervals: {
        type: NumberConstructor;
        default: number;
    };
}>>;
type VCalendarDay = InstanceType<typeof VCalendarDay>;

declare const VCalendarHeader: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        text: string;
        nextIcon: string;
        prevIcon: string;
        viewMode: "day" | "month" | "week";
    } & {
        title?: string | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        "onClick:prev"?: (() => any) | undefined;
        "onClick:next"?: (() => any) | undefined;
        "onClick:toToday"?: (() => any) | undefined;
    }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
        'click:next': () => true;
        'click:prev': () => true;
        'click:toToday': () => true;
    }, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        text: string;
        nextIcon: string;
        prevIcon: string;
        viewMode: "day" | "month" | "week";
    } & {
        title?: string | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        "onClick:prev"?: (() => any) | undefined;
        "onClick:next"?: (() => any) | undefined;
        "onClick:toToday"?: (() => any) | undefined;
    }, {
        text: string;
        nextIcon: string;
        prevIcon: string;
        viewMode: "day" | "month" | "week";
    }, true, {}, vue.SlotsType<Partial<{
        default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
    }>>, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        text: string;
        nextIcon: string;
        prevIcon: string;
        viewMode: "day" | "month" | "week";
    } & {
        title?: string | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        "onClick:prev"?: (() => any) | undefined;
        "onClick:next"?: (() => any) | undefined;
        "onClick:toToday"?: (() => any) | undefined;
    }, {}, {}, {}, {}, {
        text: string;
        nextIcon: string;
        prevIcon: string;
        viewMode: "day" | "month" | "week";
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    text: string;
    nextIcon: string;
    prevIcon: string;
    viewMode: "day" | "month" | "week";
} & {
    title?: string | undefined;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
} & {
    "onClick:prev"?: (() => any) | undefined;
    "onClick:next"?: (() => any) | undefined;
    "onClick:toToday"?: (() => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'click:next': () => true;
    'click:prev': () => true;
    'click:toToday': () => true;
}, string, {
    text: string;
    nextIcon: string;
    prevIcon: string;
    viewMode: "day" | "month" | "week";
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    nextIcon: {
        type: StringConstructor;
        default: string;
    };
    prevIcon: {
        type: StringConstructor;
        default: string;
    };
    title: StringConstructor;
    text: {
        type: StringConstructor;
        default: string;
    };
    viewMode: {
        type: PropType<"day" | "month" | "week">;
        default: string;
    };
}, vue.ExtractPropTypes<{
    nextIcon: {
        type: StringConstructor;
        default: string;
    };
    prevIcon: {
        type: StringConstructor;
        default: string;
    };
    title: StringConstructor;
    text: {
        type: StringConstructor;
        default: string;
    };
    viewMode: {
        type: PropType<"day" | "month" | "week">;
        default: string;
    };
}>>;
type VCalendarHeader = InstanceType<typeof VCalendarHeader>;

declare const VCalendarInterval: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        index: number;
        day: Record<string, any>;
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
        intervalFormat: string | Function;
        intervalStart: number;
    } & {
        events?: any[] | undefined;
        dayIndex?: number | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    }, {
        interval: vue.ComputedRef<{
            label: string;
            start: unknown;
            end: unknown;
            events: any[];
        }>;
    }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        index: number;
        day: Record<string, any>;
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
        intervalFormat: string | Function;
        intervalStart: number;
    } & {
        events?: any[] | undefined;
        dayIndex?: number | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    }, {
        day: Record<string, any>;
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
        intervalFormat: string | Function;
        intervalStart: number;
    }, true, {}, vue.SlotsType<Partial<{
        default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
    }>>, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        index: number;
        day: Record<string, any>;
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
        intervalFormat: string | Function;
        intervalStart: number;
    } & {
        events?: any[] | undefined;
        dayIndex?: number | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    }, {
        interval: vue.ComputedRef<{
            label: string;
            start: unknown;
            end: unknown;
            events: any[];
        }>;
    }, {}, {}, {}, {
        day: Record<string, any>;
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
        intervalFormat: string | Function;
        intervalStart: number;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    index: number;
    day: Record<string, any>;
    intervalDivisions: number;
    intervalDuration: number;
    intervalHeight: number;
    intervalFormat: string | Function;
    intervalStart: number;
} & {
    events?: any[] | undefined;
    dayIndex?: number | undefined;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
}, {
    interval: vue.ComputedRef<{
        label: string;
        start: unknown;
        end: unknown;
        events: any[];
    }>;
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    day: Record<string, any>;
    intervalDivisions: number;
    intervalDuration: number;
    intervalHeight: number;
    intervalFormat: string | Function;
    intervalStart: number;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    day: {
        type: ObjectConstructor;
        default: () => {};
    };
    dayIndex: NumberConstructor;
    events: {
        (arrayLength: number): any[];
        (...items: any[]): any[];
        new (arrayLength: number): any[];
        new (...items: any[]): any[];
        isArray(arg: any): arg is any[];
        readonly prototype: any[];
        from<T>(arrayLike: ArrayLike<T>): T[];
        from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
        from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
        from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
        of<T_4>(...items: T_4[]): T_4[];
        readonly [Symbol.species]: ArrayConstructor;
    };
    intervalDivisions: {
        type: NumberConstructor;
        default: number;
    };
    intervalDuration: {
        type: NumberConstructor;
        default: number;
    };
    intervalHeight: {
        type: NumberConstructor;
        default: number;
    };
    intervalFormat: {
        type: (FunctionConstructor | StringConstructor)[];
        default: string;
    };
    intervalStart: {
        type: NumberConstructor;
        default: number;
    };
    index: {
        type: NumberConstructor;
        required: true;
    };
}, vue.ExtractPropTypes<{
    day: {
        type: ObjectConstructor;
        default: () => {};
    };
    dayIndex: NumberConstructor;
    events: {
        (arrayLength: number): any[];
        (...items: any[]): any[];
        new (arrayLength: number): any[];
        new (...items: any[]): any[];
        isArray(arg: any): arg is any[];
        readonly prototype: any[];
        from<T>(arrayLike: ArrayLike<T>): T[];
        from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
        from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
        from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
        of<T_4>(...items: T_4[]): T_4[];
        readonly [Symbol.species]: ArrayConstructor;
    };
    intervalDivisions: {
        type: NumberConstructor;
        default: number;
    };
    intervalDuration: {
        type: NumberConstructor;
        default: number;
    };
    intervalHeight: {
        type: NumberConstructor;
        default: number;
    };
    intervalFormat: {
        type: (FunctionConstructor | StringConstructor)[];
        default: string;
    };
    intervalStart: {
        type: NumberConstructor;
        default: number;
    };
    index: {
        type: NumberConstructor;
        required: true;
    };
}>>;
type VCalendarInterval = InstanceType<typeof VCalendarInterval>;

declare const VCalendarIntervalEvent: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        allDay: boolean;
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
    } & {
        interval?: Record<string, any> | undefined;
        event?: Record<string, any> | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        allDay: boolean;
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
    } & {
        interval?: Record<string, any> | undefined;
        event?: Record<string, any> | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    }, {
        allDay: boolean;
    }, true, {}, vue.SlotsType<Partial<{
        default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
    }>>, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        allDay: boolean;
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
    } & {
        interval?: Record<string, any> | undefined;
        event?: Record<string, any> | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        allDay: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    allDay: boolean;
    intervalDivisions: number;
    intervalDuration: number;
    intervalHeight: number;
} & {
    interval?: Record<string, any> | undefined;
    event?: Record<string, any> | undefined;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    allDay: boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    allDay: BooleanConstructor;
    interval: ObjectConstructor;
    intervalDivisions: {
        type: NumberConstructor;
        required: true;
    };
    intervalDuration: {
        type: NumberConstructor;
        required: true;
    };
    intervalHeight: {
        type: NumberConstructor;
        required: true;
    };
    event: ObjectConstructor;
}, vue.ExtractPropTypes<{
    allDay: BooleanConstructor;
    interval: ObjectConstructor;
    intervalDivisions: {
        type: NumberConstructor;
        required: true;
    };
    intervalDuration: {
        type: NumberConstructor;
        required: true;
    };
    intervalHeight: {
        type: NumberConstructor;
        required: true;
    };
    event: ObjectConstructor;
}>>;
type VCalendarIntervalEvent = InstanceType<typeof VCalendarIntervalEvent>;

declare const VCalendarMonthDay: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        active: boolean;
        disabled: boolean;
    } & {
        color?: string | undefined;
        title?: string | number | undefined;
        day?: Record<string, any> | undefined;
        events?: any[] | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
            content?: (() => vue.VNodeChild) | undefined;
            title?: ((arg: {
                title?: string | number | undefined;
            }) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
            content?: false | (() => vue.VNodeChild) | undefined;
            title?: false | ((arg: {
                title?: string | number | undefined;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:content"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: {
            title?: string | number | undefined;
        }) => vue.VNodeChild) | undefined;
    }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        active: boolean;
        disabled: boolean;
    } & {
        color?: string | undefined;
        title?: string | number | undefined;
        day?: Record<string, any> | undefined;
        events?: any[] | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
            content?: (() => vue.VNodeChild) | undefined;
            title?: ((arg: {
                title?: string | number | undefined;
            }) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
            content?: false | (() => vue.VNodeChild) | undefined;
            title?: false | ((arg: {
                title?: string | number | undefined;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:content"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: {
            title?: string | number | undefined;
        }) => vue.VNodeChild) | undefined;
    }, {
        active: boolean;
        disabled: boolean;
    }, true, {}, vue.SlotsType<Partial<{
        default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        content: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        title: (arg: {
            title?: string | number | undefined;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
    }>>, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        active: boolean;
        disabled: boolean;
    } & {
        color?: string | undefined;
        title?: string | number | undefined;
        day?: Record<string, any> | undefined;
        events?: any[] | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
            content?: (() => vue.VNodeChild) | undefined;
            title?: ((arg: {
                title?: string | number | undefined;
            }) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
            content?: false | (() => vue.VNodeChild) | undefined;
            title?: false | ((arg: {
                title?: string | number | undefined;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:content"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: {
            title?: string | number | undefined;
        }) => vue.VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        active: boolean;
        disabled: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    active: boolean;
    disabled: boolean;
} & {
    color?: string | undefined;
    title?: string | number | undefined;
    day?: Record<string, any> | undefined;
    events?: any[] | undefined;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
        content?: (() => vue.VNodeChild) | undefined;
        title?: ((arg: {
            title?: string | number | undefined;
        }) => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
        content?: false | (() => vue.VNodeChild) | undefined;
        title?: false | ((arg: {
            title?: string | number | undefined;
        }) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:content"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:title"?: false | ((arg: {
        title?: string | number | undefined;
    }) => vue.VNodeChild) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    active: boolean;
    disabled: boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    content: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    title: (arg: {
        title?: string | number | undefined;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    active: BooleanConstructor;
    color: StringConstructor;
    day: ObjectConstructor;
    disabled: BooleanConstructor;
    events: {
        (arrayLength: number): any[];
        (...items: any[]): any[];
        new (arrayLength: number): any[];
        new (...items: any[]): any[];
        isArray(arg: any): arg is any[];
        readonly prototype: any[];
        from<T>(arrayLike: ArrayLike<T>): T[];
        from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
        from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
        from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
        of<T_4>(...items: T_4[]): T_4[];
        readonly [Symbol.species]: ArrayConstructor;
    };
    title: (StringConstructor | NumberConstructor)[];
}, vue.ExtractPropTypes<{
    active: BooleanConstructor;
    color: StringConstructor;
    day: ObjectConstructor;
    disabled: BooleanConstructor;
    events: {
        (arrayLength: number): any[];
        (...items: any[]): any[];
        new (arrayLength: number): any[];
        new (...items: any[]): any[];
        isArray(arg: any): arg is any[];
        readonly prototype: any[];
        from<T>(arrayLike: ArrayLike<T>): T[];
        from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
        from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
        from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
        of<T_4>(...items: T_4[]): T_4[];
        readonly [Symbol.species]: ArrayConstructor;
    };
    title: (StringConstructor | NumberConstructor)[];
}>>;
type VCalendarMonthDay = InstanceType<typeof VCalendarMonthDay>;

declare const VPicker: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        style: vue.StyleValue;
        tag: string;
        landscape: boolean;
        hideHeader: boolean;
    } & {
        location?: Anchor | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        position?: "fixed" | "absolute" | "static" | "sticky" | "relative" | undefined;
        title?: string | undefined;
        class?: any;
        elevation?: string | number | undefined;
        theme?: string | undefined;
        rounded?: string | number | boolean | undefined;
        bgColor?: string | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            header?: (() => vue.VNodeChild) | undefined;
            default?: (() => vue.VNodeChild) | undefined;
            actions?: (() => vue.VNodeChild) | undefined;
            title?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            header?: false | (() => vue.VNodeChild) | undefined;
            default?: false | (() => vue.VNodeChild) | undefined;
            actions?: false | (() => vue.VNodeChild) | undefined;
            title?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:header"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:actions"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | (() => vue.VNodeChild) | undefined;
    }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        style: vue.StyleValue;
        tag: string;
        landscape: boolean;
        hideHeader: boolean;
    } & {
        location?: Anchor | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        position?: "fixed" | "absolute" | "static" | "sticky" | "relative" | undefined;
        title?: string | undefined;
        class?: any;
        elevation?: string | number | undefined;
        theme?: string | undefined;
        rounded?: string | number | boolean | undefined;
        bgColor?: string | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            header?: (() => vue.VNodeChild) | undefined;
            default?: (() => vue.VNodeChild) | undefined;
            actions?: (() => vue.VNodeChild) | undefined;
            title?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            header?: false | (() => vue.VNodeChild) | undefined;
            default?: false | (() => vue.VNodeChild) | undefined;
            actions?: false | (() => vue.VNodeChild) | undefined;
            title?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:header"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:actions"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | (() => vue.VNodeChild) | undefined;
    }, {
        style: vue.StyleValue;
        tag: string;
        landscape: boolean;
        rounded: string | number | boolean;
        hideHeader: boolean;
    }, true, {}, vue.SlotsType<Partial<{
        header: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        actions: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        title: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
    }>>, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        style: vue.StyleValue;
        tag: string;
        landscape: boolean;
        hideHeader: boolean;
    } & {
        location?: Anchor | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        position?: "fixed" | "absolute" | "static" | "sticky" | "relative" | undefined;
        title?: string | undefined;
        class?: any;
        elevation?: string | number | undefined;
        theme?: string | undefined;
        rounded?: string | number | boolean | undefined;
        bgColor?: string | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            header?: (() => vue.VNodeChild) | undefined;
            default?: (() => vue.VNodeChild) | undefined;
            actions?: (() => vue.VNodeChild) | undefined;
            title?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            header?: false | (() => vue.VNodeChild) | undefined;
            default?: false | (() => vue.VNodeChild) | undefined;
            actions?: false | (() => vue.VNodeChild) | undefined;
            title?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:header"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:actions"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | (() => vue.VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        style: vue.StyleValue;
        tag: string;
        landscape: boolean;
        rounded: string | number | boolean;
        hideHeader: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    style: vue.StyleValue;
    tag: string;
    landscape: boolean;
    hideHeader: boolean;
} & {
    location?: Anchor | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
    border?: string | number | boolean | undefined;
    color?: string | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    position?: "fixed" | "absolute" | "static" | "sticky" | "relative" | undefined;
    title?: string | undefined;
    class?: any;
    elevation?: string | number | undefined;
    theme?: string | undefined;
    rounded?: string | number | boolean | undefined;
    bgColor?: string | undefined;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        header?: (() => vue.VNodeChild) | undefined;
        default?: (() => vue.VNodeChild) | undefined;
        actions?: (() => vue.VNodeChild) | undefined;
        title?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        header?: false | (() => vue.VNodeChild) | undefined;
        default?: false | (() => vue.VNodeChild) | undefined;
        actions?: false | (() => vue.VNodeChild) | undefined;
        title?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:header"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:actions"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:title"?: false | (() => vue.VNodeChild) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    style: vue.StyleValue;
    tag: string;
    landscape: boolean;
    rounded: string | number | boolean;
    hideHeader: boolean;
}, {}, string, vue.SlotsType<Partial<{
    header: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    actions: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    title: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    position: {
        type: vue.PropType<"fixed" | "absolute" | "static" | "sticky" | "relative">;
        validator: (v: any) => boolean;
    };
    location: vue.PropType<Anchor>;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
    bgColor: StringConstructor;
    landscape: BooleanConstructor;
    title: StringConstructor;
    hideHeader: BooleanConstructor;
}, vue.ExtractPropTypes<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    position: {
        type: vue.PropType<"fixed" | "absolute" | "static" | "sticky" | "relative">;
        validator: (v: any) => boolean;
    };
    location: vue.PropType<Anchor>;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
    bgColor: StringConstructor;
    landscape: BooleanConstructor;
    title: StringConstructor;
    hideHeader: BooleanConstructor;
}>>;
type VPicker = InstanceType<typeof VPicker>;

declare const VPickerTitle: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        style: vue.StyleValue;
        tag: string;
    } & {
        class?: any;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    }, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        style: vue.StyleValue;
        tag: string;
    } & {
        class?: any;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    }, {
        style: vue.StyleValue;
        tag: string;
    }, true, {}, vue.SlotsType<Partial<{
        default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
    }>>, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        style: vue.StyleValue;
        tag: string;
    } & {
        class?: any;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    }, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>, {}, {}, {}, {
        style: vue.StyleValue;
        tag: string;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    style: vue.StyleValue;
    tag: string;
} & {
    class?: any;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    style: vue.StyleValue;
    tag: string;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}, vue.ExtractPropTypes<{
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>;
type VPickerTitle = InstanceType<typeof VPickerTitle>;

export { VCalendar, VCalendarDay, VCalendarHeader, VCalendarInterval, VCalendarIntervalEvent, VCalendarMonthDay, VConfirmEdit, VPicker, VPickerTitle };
