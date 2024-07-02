import * as mitt from 'mitt';
import { Emitter } from 'mitt';

declare class EasyTutorial<K extends string = string, A extends Array<any> = any> {
    private _currentTutorial;
    private _tutorials;
    private _emitter;
    on: {
        <Key extends keyof TutorialEvents>(type: Key, handler: mitt.Handler<TutorialEvents[Key]>): void;
        (type: "*", handler: mitt.WildcardHandler<TutorialEvents>): void;
    };
    off: {
        <Key extends keyof TutorialEvents>(type: Key, handler?: mitt.Handler<TutorialEvents[Key]> | undefined): void;
        (type: "*", handler: mitt.WildcardHandler<TutorialEvents>): void;
    };
    emit: {
        <Key extends keyof TutorialEvents>(type: Key, event: TutorialEvents[Key]): void;
        <Key extends keyof TutorialEvents>(type: undefined extends TutorialEvents[Key] ? Key : never): void;
    };
    addTutorial(name: K): TutorialData<A>;
    start(name: K): void;
    private stop;
    next(waiter?: () => boolean): void;
    currentTutorial(): Record<K, TutorialData<A>>[K] | undefined;
    currentRender(): RenderFunc<A> | undefined;
    currentTargetQuery(): string | undefined;
    isTutorialRunning(): boolean;
}
declare class TutorialData<A extends Array<any>> {
    private _steps;
    private _stopFunc;
    private _currentStepIdx;
    private _emitter;
    private _defaultRender;
    constructor(emitter: TutorialEmitter, stopFunc: () => void);
    private currentStepObj;
    private nextStepObj;
    private prevStepObj;
    totalStepLegth(): number;
    currentStepIdx(): number;
    currentRender(): RenderFunc<A> | undefined;
    currentTargetQuery(): string | undefined;
    currentPlacement(): Placement | undefined;
    currentContent(): JSX.Element | undefined;
    overrideDefaultRender(render: RenderFunc<A>): void;
    noticeMeta(type: CheckCanRenderType): EasyTutorialNoticeMeta;
    effectRender(): void;
    private checkCanRender;
    start(): boolean;
    stop(): void;
    next(): false | undefined;
    forceNext(): void;
    prev(): false | undefined;
    isLastStep(): boolean;
    isFirstStep(): boolean;
    stepType(): StepType;
    addStep({ targetQuery, content, render, scrollInView, noticeMsg, noticeTitle, backNoticeMsg, backNoticeTitle, noticeDuration, placement, canRender, }: AddStepParams<A>): void;
}
type CheckCanRenderType = "current" | "next" | "prev";
type StepType = "last" | "first" | "common" | "single";
type Placement = "top-left" | "top-right" | "top-center" | "bottom-left" | "bottom-right" | "bottom-center" | "left-top" | "left-bottom" | "left-center" | "right-top" | "right-bottom" | "right-center";
type RenderFuncBasicArg = {
    targetElem: Element;
    stepType: StepType;
    next: () => void;
    prev: () => void;
    stop: () => void;
    placement: Placement;
    totalStep: number;
    currentStep: number;
    currentContent: JSX.Element;
};
type RenderFunc<A extends Array<any>> = (basicArg: RenderFuncBasicArg, ...args: A) => JSX.Element;
type TutorialStep<A extends Array<any>> = {
    targetQuery: string;
    content: JSX.Element;
    render: RenderFunc<A>;
    noticeMsg: string;
    noticeTitle: string;
    backNoticeMsg: string;
    backNoticeTitle: string;
    noticeDuration: number;
    scrollInView: boolean;
    placement: Placement;
    canRender: () => boolean;
};
type AddStepParams<A extends Array<any>> = Partial<Omit<TutorialStep<A>, "targetQuery" | "content">> & {
    targetQuery: string;
    content?: JSX.Element;
};
type EasyTutorialNoticeMeta = {
    msg: string;
    title: string;
    duration: number;
};
type TutorialEvents = {
    nextStep: void;
    prevStep: void;
    start: void;
    stop: void;
    canNotRender: EasyTutorialNoticeMeta;
};
type TutorialEmitter = Emitter<TutorialEvents>;

declare const findElemByEasyTutorialQuery: (query: string) => Element | null;

type NoticeRenderer = React.FC<{
    dataSource: EasyTutorial;
    extendRenderArgs?: any[];
}>;
declare const EasyTutorialNoticeRenderer: NoticeRenderer;

type Renderer = React.FC<{
    dataSource: EasyTutorial;
    extendRenderArgs?: any[];
}>;
declare const EasyTutorialRenderer: Renderer;

export { EasyTutorial, EasyTutorialNoticeRenderer, EasyTutorialRenderer, type NoticeRenderer, type RenderFunc, type RenderFuncBasicArg, type Renderer, findElemByEasyTutorialQuery };
