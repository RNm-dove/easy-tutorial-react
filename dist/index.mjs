var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// src/tutorial.tsx
import { css as css6 } from "@emotion/react";
import mitt from "mitt";

// src/utils.tsx
var buildPortalElem = () => {
  const portal = document.createElement("div");
  portal.id = "easy-tutorial-portal";
  portal.style.position = "absolute";
  portal.style.zIndex = "2000";
  portal.style.top = "0";
  portal.style.left = "0";
  return portal;
};
var getElemAbsPos = (elem) => {
  const rect = elem.getBoundingClientRect();
  const scrollTop = window.scrollY;
  const scrollLeft = window.scrollX;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft
  };
};
var findElemByXPath = (xpath) => {
  const result = document.evaluate(
    xpath,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  );
  return result.singleNodeValue;
};
var findElemByEasyTutorialQuery = (query) => {
  let result;
  try {
    result = findElemByXPath(query);
  } catch (error) {
    try {
      result = document.querySelector(query);
    } catch (error2) {
      console.error(
        `[EasyTutorial] can not find elem by query ${query}:`,
        error2
      );
      result = null;
    }
  }
  if (!result || !(result instanceof Element)) {
    return null;
  }
  return result;
};

// src/components/Stack.tsx
import { css } from "@emotion/react";

// src/components/theme.tsx
var colors = {
  white: "#fbfbfb",
  black: "#161617",
  gray100: "edf2f7",
  gray200: "#e2e8f0",
  gray300: "#e2e8f0",
  gray400: "#a0aec0",
  gray500: "#718096",
  gray600: "#4a5568",
  gray700: "#2d3748",
  gray800: "#1a202c",
  gray900: "#171923",
  whiteAlpha100: "rgba(255, 255, 255, 0.06)",
  whiteAlpha200: "rgba(255, 255, 255, 0.12)",
  whiteAlpha300: "rgba(255, 255, 255, 0.16)",
  whiteAlpha400: "rgba(255, 255, 255, 0.24)",
  whiteAlpha500: "rgba(255, 255, 255, 0.36)",
  whiteAlpha600: "rgba(255, 255, 255, 0.48)",
  whiteAlpha700: "rgba(255, 255, 255, 0.64)",
  whiteAlpha800: "rgba(255, 255, 255, 0.80)",
  whiteAlpha900: "rgba(255, 255, 255, 0.92)",
  blackAlpha100: "rgba(0, 0, 0, 0.06)",
  blackAlpha200: "rgba(0, 0, 0, 0.12)",
  blackAlpha300: "rgba(0, 0, 0, 0.16)",
  blackAlpha400: "rgba(0, 0, 0, 0.24)",
  blackAlpha500: "rgba(0, 0, 0, 0.36)",
  blackAlpha600: "rgba(0, 0, 0, 0.48)",
  blackAlpha700: "rgba(0, 0, 0, 0.64)",
  blackAlpha800: "rgba(0, 0, 0, 0.80)",
  blackAlpha900: "rgba(0, 0, 0, 0.92)",
  orangeLight: "#ffc069",
  orangeDark: "#d46b08"
};
var spacing = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem"
};
var borderRadius = {
  sm: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  full: "9999px"
};
var fontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem"
};
var boxSizes = {
  sm: "1rem",
  md: "1.5rem",
  lg: "2rem"
};

// src/components/Stack.tsx
import { jsx } from "@emotion/react/jsx-runtime";
function Stack({
  children,
  extCSS
}) {
  const elemCSS = css(
    {
      display: "flex",
      flexDirection: "column",
      gap: spacing[2],
      justifyContent: "center"
    },
    extCSS
  );
  return /* @__PURE__ */ jsx("div", { css: elemCSS, children });
}

// src/components/Spacer.tsx
import { css as css2 } from "@emotion/react";
import { jsx as jsx2 } from "@emotion/react/jsx-runtime";
function Spacer() {
  return /* @__PURE__ */ jsx2(
    "div",
    {
      css: css2({
        flex: 1
      })
    }
  );
}

// src/components/HStack.tsx
import { css as css3 } from "@emotion/react";
import { jsx as jsx3 } from "@emotion/react/jsx-runtime";
function HStack({
  children,
  extCSS
}) {
  const elemCSS = css3(
    {
      display: "flex",
      flexDirection: "row",
      gap: spacing[2],
      alignItems: "center",
      justifyContent: "flex-start"
    },
    extCSS
  );
  return /* @__PURE__ */ jsx3("div", { css: elemCSS, children });
}

// src/components/Text.tsx
import { css as css4 } from "@emotion/react";
import { jsx as jsx4 } from "@emotion/react/jsx-runtime";
function Text({
  children,
  extCSS,
  maybeDarkMode
}) {
  const componentCSS = {
    display: "flex",
    gap: spacing[4],
    alignItems: "center",
    justifyContent: "flex-start"
  };
  if (maybeDarkMode) {
    componentCSS.color = colors.white;
  } else {
    componentCSS.color = colors.black;
  }
  const elemCSS = css4(componentCSS, extCSS);
  return /* @__PURE__ */ jsx4("div", { css: elemCSS, children });
}

// src/components/Button.tsx
import { css as css5 } from "@emotion/react";
import { jsx as jsx5 } from "@emotion/react/jsx-runtime";
function Button({
  onClick,
  extCSS,
  maybeDarkMode,
  children
}) {
  let componentCSS = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: borderRadius.md,
    fontWeight: 700,
    fontSize: fontSizes.md,
    borderWidth: 0,
    cursor: "pointer",
    padding: `${spacing[2]} ${spacing[4]}`,
    appearance: "none",
    paddingInline: "none",
    paddingBlock: "none",
    transition: "all 0.2s"
  };
  if (maybeDarkMode) {
    componentCSS = {
      ...componentCSS,
      backgroundColor: colors.blackAlpha400,
      color: colors.white,
      ":hover": {
        backgroundColor: colors.blackAlpha600,
        borderColor: "none"
      },
      ":focus": {
        outline: "none"
      },
      ":focus-visible": {
        outline: "none"
      }
    };
  } else {
    componentCSS = {
      ...componentCSS,
      backgroundColor: colors.whiteAlpha700,
      color: colors.blackAlpha700,
      ":hover": {
        backgroundColor: colors.whiteAlpha900,
        borderColor: "none"
      },
      ":focus": {
        outline: "none"
      },
      ":focus-visible": {
        outline: "none"
      }
    };
  }
  const elemCSS = css5(componentCSS, extCSS);
  return /* @__PURE__ */ jsx5("button", { onClick, type: "button", css: elemCSS, children });
}

// src/tutorial.tsx
import { Fragment, jsx as jsx6, jsxs } from "@emotion/react/jsx-runtime";
var EasyTutorial = class {
  constructor() {
    __publicField(this, "_currentTutorial");
    __publicField(this, "_tutorials", {});
    __publicField(this, "_emitter", mitt());
    __publicField(this, "on", this._emitter.on);
    __publicField(this, "off", this._emitter.off);
    __publicField(this, "emit", this._emitter.emit);
  }
  addTutorial(name) {
    if (this._tutorials[name]) {
      console.error(
        `[EasyTutorial] Tutorial ${name} already exists, will override`
      );
    }
    const t = new TutorialData(this._emitter, this.stop.bind(this));
    this._tutorials[name] = t;
    return t;
  }
  start(name) {
    const ct = this._tutorials[name];
    if (!ct) {
      console.error(`[EasyTutorial] Tutorial ${name} not found when start`);
      return;
    }
    if (ct.start()) this._currentTutorial = name;
  }
  stop() {
    this._currentTutorial = void 0;
    this._emitter.emit("stop");
  }
  next(waiter) {
    const ct = this.currentTutorial();
    if (!ct) {
      console.error(`[EasyTutorial] currentTutorial is undefined`);
      return;
    }
    if (waiter) {
      const interval = setInterval(() => {
        if (waiter()) {
          clearInterval(interval);
          ct.forceNext();
        }
      }, 100);
      return;
    }
    ct.forceNext();
  }
  currentTutorial() {
    if (!this._currentTutorial) {
      return void 0;
    }
    return this._tutorials[this._currentTutorial];
  }
  currentRender() {
    return this.currentTutorial()?.currentRender();
  }
  currentTargetQuery() {
    return this.currentTutorial()?.currentTargetQuery();
  }
  isTutorialRunning() {
    return !!this._currentTutorial;
  }
};
var TutorialData = class {
  constructor(emitter, stopFunc) {
    __publicField(this, "_steps", []);
    __publicField(this, "_stopFunc");
    __publicField(this, "_currentStepIdx", 0);
    __publicField(this, "_emitter");
    __publicField(this, "_defaultRender", (basicArg, ...args) => {
      const {
        targetElem,
        stepType,
        next,
        prev,
        stop,
        placement,
        totalStep,
        currentStep,
        currentContent
      } = basicArg;
      if (!(targetElem instanceof HTMLElement)) {
        console.error(
          "[EasyTutorial] targetElem is not HTMLElement, default render only support HTMLElement"
        );
        return /* @__PURE__ */ jsx6(
          Stack,
          {
            extCSS: {
              position: "absolute",
              minWidth: "256px",
              minHeight: "128px",
              padding: spacing[4],
              borderRadius: borderRadius.md,
              backgroundColor: colors.gray600
            },
            children: "EasyTutorial default render only support HTMLElement, You should provide a custom render function."
          }
        );
      }
      const maybeDarkMode = () => {
        if (typeof args === "undefined") {
          return false;
        }
        const maybeColorMode = args[0];
        if (typeof maybeColorMode === "string") {
          return maybeColorMode === "dark";
        }
        return false;
      };
      const { top: targetTop, left: targetLeft } = getElemAbsPos(targetElem);
      const targetHeight = targetElem.offsetHeight;
      const targetWidth = targetElem.offsetWidth;
      const firstBtns = /* @__PURE__ */ jsxs(HStack, { children: [
        /* @__PURE__ */ jsx6(Text, { maybeDarkMode: maybeDarkMode(), children: `${currentStep + 1}/${totalStep}` }),
        /* @__PURE__ */ jsx6(Spacer, {}),
        /* @__PURE__ */ jsx6(Button, { onClick: next, maybeDarkMode: maybeDarkMode(), children: "Next" }),
        /* @__PURE__ */ jsx6(Button, { onClick: stop, maybeDarkMode: maybeDarkMode(), children: "Close" })
      ] });
      const commonBtns = /* @__PURE__ */ jsxs(HStack, { children: [
        /* @__PURE__ */ jsx6(Text, { maybeDarkMode: maybeDarkMode(), children: `${currentStep + 1}/${totalStep}` }),
        /* @__PURE__ */ jsx6(Spacer, {}),
        /* @__PURE__ */ jsx6(Button, { onClick: prev, maybeDarkMode: maybeDarkMode(), children: "Back" }),
        /* @__PURE__ */ jsx6(Button, { onClick: next, maybeDarkMode: maybeDarkMode(), children: "Next" }),
        /* @__PURE__ */ jsx6(Button, { onClick: stop, maybeDarkMode: maybeDarkMode(), children: "Close" })
      ] });
      const lastBtn = /* @__PURE__ */ jsxs(HStack, { children: [
        /* @__PURE__ */ jsx6(Text, { maybeDarkMode: maybeDarkMode(), children: `${currentStep + 1}/${totalStep}` }),
        /* @__PURE__ */ jsx6(Spacer, {}),
        /* @__PURE__ */ jsx6(Button, { onClick: prev, maybeDarkMode: maybeDarkMode(), children: "Back" }),
        /* @__PURE__ */ jsx6(Button, { onClick: stop, maybeDarkMode: maybeDarkMode(), children: "Close" })
      ] });
      const singleBtn = /* @__PURE__ */ jsxs(HStack, { children: [
        /* @__PURE__ */ jsx6(Text, { maybeDarkMode: maybeDarkMode(), children: `${currentStep + 1}/${totalStep}` }),
        /* @__PURE__ */ jsx6(Spacer, {}),
        /* @__PURE__ */ jsx6(Button, { onClick: stop, maybeDarkMode: maybeDarkMode(), children: "Close" })
      ] });
      const btns = () => {
        console.log("stepType", stepType);
        switch (stepType) {
          case "first":
            return firstBtns;
          case "last":
            return lastBtn;
          case "single":
            return singleBtn;
          default:
            return commonBtns;
        }
      };
      let focusEffectZIndex = Number(targetElem.style.zIndex) - 1;
      if (isNaN(focusEffectZIndex)) focusEffectZIndex = 0;
      const focusEffectPadding = 12;
      const space = 8;
      let top;
      let left;
      let transform;
      switch (placement) {
        case "top-left":
          top = targetTop - focusEffectPadding - space;
          left = targetLeft - focusEffectPadding;
          transform = "translateY(-100%)";
          break;
        case "top-center":
          top = targetTop - focusEffectPadding - space;
          left = targetLeft + targetElem.offsetWidth / 2;
          transform = "translate(-50%, -100%)";
          break;
        case "top-right":
          top = targetTop - focusEffectPadding - space;
          left = targetLeft + targetElem.offsetWidth + focusEffectPadding;
          transform = "translate(-100%, -100%)";
          break;
        case "left-top":
          top = targetTop - focusEffectPadding;
          left = targetLeft - focusEffectPadding - space;
          transform = "translateX(-100%)";
          break;
        case "left-center":
          top = targetTop + targetHeight / 2;
          left = targetLeft - focusEffectPadding - space;
          transform = "translate(-100%, -50%)";
          break;
        case "left-bottom":
          top = targetTop + targetHeight + focusEffectPadding;
          left = targetLeft - focusEffectPadding - space;
          transform = "translate(-100%, -100%)";
          break;
        case "right-top":
          top = targetTop - focusEffectPadding;
          left = targetLeft + targetWidth + focusEffectPadding + space;
          transform = void 0;
          break;
        case "right-center":
          top = targetTop + targetHeight / 2;
          left = targetLeft + targetWidth + focusEffectPadding + space;
          transform = "translateY(-50%)";
          break;
        case "right-bottom":
          top = targetTop + targetHeight + focusEffectPadding;
          left = targetLeft + targetWidth + focusEffectPadding + space;
          transform = "translateY(-100%)";
          break;
        case "bottom-right":
          top = targetTop + targetHeight + focusEffectPadding + space;
          left = targetLeft + targetWidth + focusEffectPadding;
          transform = "translateX(-100%)";
          break;
        case "bottom-center":
          top = targetTop + targetHeight + focusEffectPadding + space;
          left = targetLeft + targetWidth / 2;
          transform = "translateX(-50%)";
          break;
        default:
          top = targetTop + targetHeight + focusEffectPadding + space;
          left = targetLeft - focusEffectPadding;
          transform = void 0;
          break;
      }
      return /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs(
          Stack,
          {
            extCSS: {
              position: "absolute",
              top: `${top}px`,
              left: `${left}px`,
              transform,
              minWidth: "256px",
              minHeight: "128px",
              padding: spacing[4],
              borderRadius: borderRadius.md,
              backgroundColor: maybeDarkMode() ? colors.gray600 : colors.gray300,
              gap: 0
            },
            children: [
              currentContent,
              /* @__PURE__ */ jsx6(Spacer, {}),
              /* @__PURE__ */ jsx6("div", { css: css6({ marginTop: spacing[2] }), children: btns() })
            ]
          }
        ),
        /* @__PURE__ */ jsx6(
          "div",
          {
            css: css6({
              zIndex: focusEffectZIndex || "auto",
              position: "absolute",
              top: `${targetTop - focusEffectPadding}px`,
              left: `${targetLeft - focusEffectPadding}px`,
              width: `${targetWidth + focusEffectPadding * 2}px`,
              height: `${targetHeight + focusEffectPadding * 2}px`,
              border: `3px solid`,
              borderRadius: borderRadius.md,
              borderColor: maybeDarkMode() ? colors.orangeDark : colors.orangeLight,
              pointerEvents: "none"
            })
          }
        )
      ] });
    });
    this._emitter = emitter;
    this._stopFunc = stopFunc;
  }
  currentStepObj() {
    if (this._currentStepIdx >= this._steps.length || this._currentStepIdx < 0) {
      return void 0;
    }
    return this._steps[this._currentStepIdx];
  }
  nextStepObj() {
    const nextIdx = this._currentStepIdx + 1;
    if (nextIdx >= this._steps.length || nextIdx < 0) {
      return void 0;
    }
    return this._steps[nextIdx];
  }
  prevStepObj() {
    const prevIdx = this._currentStepIdx - 1;
    if (prevIdx >= this._steps.length || prevIdx < 0) {
      return void 0;
    }
    return this._steps[prevIdx];
  }
  totalStepLegth() {
    return this._steps.length;
  }
  currentStepIdx() {
    return this._currentStepIdx;
  }
  currentRender() {
    return this.currentStepObj()?.render;
  }
  currentTargetQuery() {
    return this.currentStepObj()?.targetQuery;
  }
  currentPlacement() {
    return this.currentStepObj()?.placement;
  }
  currentContent() {
    return this.currentStepObj()?.content;
  }
  overrideDefaultRender(render) {
    this._defaultRender = render;
  }
  noticeMeta(type) {
    let step;
    switch (type) {
      case "current":
        step = this.currentStepObj();
        break;
      case "next":
        step = this.nextStepObj();
        break;
      case "prev":
        step = this.prevStepObj();
        break;
      default:
        return { msg: "", title: "", duration: 0 };
    }
    if (!step) {
      return { msg: "", title: "", duration: 0 };
    }
    if (type === "prev") {
      return {
        msg: step.backNoticeMsg,
        title: step.backNoticeTitle,
        duration: step.noticeDuration
      };
    }
    return {
      msg: step.noticeMsg,
      title: step.noticeTitle,
      duration: step.noticeDuration
    };
  }
  effectRender() {
    const step = this.currentStepObj();
    if (!step) {
      console.error("[EasyTutorial] effectRender stepObj is undefined");
      return;
    }
    if (step.scrollInView) {
      const targetElem = findElemByEasyTutorialQuery(step.targetQuery);
      if (targetElem) {
        targetElem.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        });
      }
    }
    return;
  }
  checkCanRender(type) {
    let step;
    switch (type) {
      case "current":
        step = this.currentStepObj();
        break;
      case "next":
        step = this.nextStepObj();
        break;
      case "prev":
        step = this.prevStepObj();
        break;
      default:
        return false;
    }
    if (!step) {
      console.error("[EasyTutorial] checkCanRender stepObj is undefined", type);
      return false;
    }
    if (!step.canRender()) {
      this._emitter.emit("canNotRender", this.noticeMeta(type));
      return false;
    }
    return true;
  }
  start() {
    this._currentStepIdx = 0;
    if (!this.checkCanRender("current")) {
      return false;
    }
    this.effectRender();
    this._emitter.emit("start");
    return true;
  }
  stop() {
    this._currentStepIdx = 0;
    this._stopFunc();
  }
  next() {
    if (!this.checkCanRender("next")) {
      return false;
    }
    this._currentStepIdx++;
    this.effectRender();
    this._emitter.emit("nextStep");
  }
  forceNext() {
    this._currentStepIdx++;
    this.effectRender();
    this._emitter.emit("nextStep");
  }
  prev() {
    if (!this.checkCanRender("prev")) {
      return false;
    }
    this._currentStepIdx--;
    this.effectRender();
    this._emitter.emit("prevStep");
  }
  isLastStep() {
    return this._currentStepIdx >= this._steps.length - 1;
  }
  isFirstStep() {
    return this._currentStepIdx <= 0;
  }
  stepType() {
    if (this._steps.length === 1) {
      return "single";
    }
    if (this.isLastStep()) {
      return "last";
    }
    if (this.isFirstStep()) {
      return "first";
    }
    return "common";
  }
  addStep({
    targetQuery,
    content,
    render,
    scrollInView,
    noticeMsg,
    noticeTitle,
    backNoticeMsg,
    backNoticeTitle,
    noticeDuration,
    placement,
    canRender
  }) {
    this._steps.push({
      targetQuery,
      content: content ?? /* @__PURE__ */ jsx6(Fragment, {}),
      render: render ?? this._defaultRender,
      scrollInView: scrollInView ?? false,
      canRender: canRender ?? (() => true),
      noticeMsg: noticeMsg ?? "You need follow the tutorial.",
      noticeTitle: noticeTitle ?? "Can not go next",
      backNoticeMsg: backNoticeMsg ?? "You can't do previous step twice.",
      backNoticeTitle: backNoticeTitle ?? "Can not back",
      noticeDuration: noticeDuration ?? 3e3,
      placement: placement ?? "bottom-left"
    });
  }
};

// src/notice.tsx
import { useEffect, useRef, useState } from "react";

// src/components/Center.tsx
import { css as css7 } from "@emotion/react";
import { jsx as jsx7 } from "@emotion/react/jsx-runtime";
function Center({
  children,
  extCSS
}) {
  const elemCSS = css7(
    {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    extCSS
  );
  return /* @__PURE__ */ jsx7("div", { css: elemCSS, children });
}

// src/notice.tsx
import { css as css11 } from "@emotion/react";

// src/components/IconButton.tsx
import { css as css8 } from "@emotion/react";
import { jsx as jsx8 } from "@emotion/react/jsx-runtime";
function IconButton({
  icon,
  onClick,
  extCSS,
  maybeDarkMode
}) {
  let componentCSS = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: borderRadius.md,
    borderWidth: 0,
    cursor: "pointer",
    padding: 0,
    appearance: "none",
    paddingInline: "none",
    paddingBlock: "none",
    transition: "all 0.2s"
  };
  if (maybeDarkMode) {
    componentCSS = {
      ...componentCSS,
      backgroundColor: colors.blackAlpha400,
      color: colors.white,
      ":hover": {
        backgroundColor: colors.blackAlpha600
      }
    };
  } else {
    componentCSS = {
      ...componentCSS,
      backgroundColor: colors.whiteAlpha700,
      color: colors.blackAlpha700,
      ":hover": {
        backgroundColor: colors.whiteAlpha900
      }
    };
  }
  const elemCSS = css8(componentCSS, extCSS);
  return /* @__PURE__ */ jsx8("button", { onClick, type: "button", css: elemCSS, children: icon });
}

// src/components/CloseIcon.tsx
import { css as css9 } from "@emotion/react";
import { jsx as jsx9 } from "@emotion/react/jsx-runtime";
function CloseIcon({ boxSize }) {
  return /* @__PURE__ */ jsx9(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 24 24",
      css: css9({
        width: boxSizes[boxSize],
        height: boxSizes[boxSize]
      }),
      children: /* @__PURE__ */ jsx9(
        "path",
        {
          d: "M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z",
          fill: "currentColor"
        }
      )
    }
  );
}

// src/components/WarningIcon.tsx
import { css as css10 } from "@emotion/react";
import { jsx as jsx10 } from "@emotion/react/jsx-runtime";
function WarningIcon({ boxSize }) {
  return /* @__PURE__ */ jsx10(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 24 24",
      css: css10({
        width: boxSizes[boxSize],
        height: boxSizes[boxSize]
      }),
      children: /* @__PURE__ */ jsx10("g", { fill: "none", children: /* @__PURE__ */ jsx10(
        "path",
        {
          d: "M10.91 2.782a2.25 2.25 0 0 1 2.975.74l.083.138l7.759 14.009a2.25 2.25 0 0 1-1.814 3.334l-.154.006H4.243a2.25 2.25 0 0 1-2.041-3.197l.072-.143L10.031 3.66a2.25 2.25 0 0 1 .878-.878zm9.505 15.613l-7.76-14.008a.75.75 0 0 0-1.254-.088l-.057.088l-7.757 14.008a.75.75 0 0 0 .561 1.108l.095.006h15.516a.75.75 0 0 0 .696-1.028l-.04-.086l-7.76-14.008l7.76 14.008zM12 16.002a.999.999 0 1 1 0 1.997a.999.999 0 0 1 0-1.997zM11.995 8.5a.75.75 0 0 1 .744.647l.007.102l.004 4.502a.75.75 0 0 1-1.494.103l-.006-.102l-.004-4.502a.75.75 0 0 1 .75-.75z",
          fill: "currentColor"
        }
      ) })
    }
  );
}

// src/notice.tsx
import { jsx as jsx11, jsxs as jsxs2 } from "@emotion/react/jsx-runtime";
var closeTimer;
var EasyTutorialNoticeRenderer = ({
  dataSource,
  extendRenderArgs
}) => {
  if (typeof extendRenderArgs === "undefined") {
    extendRenderArgs = [];
  } else if (!Array.isArray(extendRenderArgs)) {
    console.error(
      "[EasyTutorial] extendRenderArgs must be an array, but got",
      extendRenderArgs
    );
    extendRenderArgs = [];
  }
  const [notice, setNotice] = useState(
    void 0
  );
  const [animationControl, setAnimationControl] = useState(void 0);
  const thisRef = useRef(null);
  useEffect(() => {
    dataSource.on("canNotRender", (meta) => {
      setAnimationControl(meta);
      setNotice(meta);
      closeTimer = setTimeout(() => {
        setAnimationControl(void 0);
      }, meta.duration);
    });
  }, [dataSource]);
  const maybeDarkMode = () => {
    if (typeof extendRenderArgs === "undefined") {
      return false;
    }
    const maybeColorMode = extendRenderArgs[0];
    if (typeof maybeColorMode === "string") {
      return maybeColorMode === "dark";
    }
    return false;
  };
  return /* @__PURE__ */ jsx11(
    "div",
    {
      ref: thisRef,
      style: { opacity: animationControl ? 1 : 0, transition: "all 0.5s" },
      onTransitionEnd: () => {
        if (!animationControl) {
          setNotice(void 0);
        }
      },
      children: notice && /* @__PURE__ */ jsx11(
        Center,
        {
          extCSS: {
            position: "fixed",
            bottom: spacing[6],
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2100
          },
          children: /* @__PURE__ */ jsxs2(
            "div",
            {
              css: css11({
                position: "relative",
                borderRadius: borderRadius.md,
                padding: spacing[4],
                backgroundColor: maybeDarkMode() ? colors.orangeDark : colors.orangeLight
              }),
              children: [
                /* @__PURE__ */ jsx11(
                  IconButton,
                  {
                    maybeDarkMode: maybeDarkMode(),
                    icon: /* @__PURE__ */ jsx11(CloseIcon, { boxSize: "md" }),
                    onClick: () => {
                      clearTimeout(closeTimer);
                      setAnimationControl(void 0);
                    },
                    extCSS: {
                      position: "absolute",
                      right: spacing[2],
                      top: spacing[2]
                    }
                  }
                ),
                /* @__PURE__ */ jsxs2(HStack, { children: [
                  /* @__PURE__ */ jsx11(Text, { maybeDarkMode: maybeDarkMode(), children: /* @__PURE__ */ jsx11(WarningIcon, { boxSize: "md" }) }),
                  /* @__PURE__ */ jsxs2(Stack, { children: [
                    /* @__PURE__ */ jsx11(
                      Text,
                      {
                        maybeDarkMode: maybeDarkMode(),
                        extCSS: css11({
                          fontSize: fontSizes.xl,
                          fontWeight: "bold"
                        }),
                        children: notice.title
                      }
                    ),
                    /* @__PURE__ */ jsx11(Text, { maybeDarkMode: maybeDarkMode(), children: notice.msg })
                  ] })
                ] })
              ]
            }
          )
        }
      )
    }
  );
};

// src/renderer.tsx
import { useEffect as useEffect2, useState as useState2 } from "react";
import { createPortal } from "react-dom";
import { Fragment as Fragment2, jsx as jsx12 } from "react/jsx-runtime";
var EasyTutorialRenderer = ({
  dataSource,
  extendRenderArgs
}) => {
  if (typeof extendRenderArgs === "undefined") {
    extendRenderArgs = [];
  } else if (!Array.isArray(extendRenderArgs)) {
    console.error(
      "[EasyTutorial] extendRenderArgs must be an array, but got",
      extendRenderArgs
    );
    extendRenderArgs = [];
  }
  const [, _setRefresh] = useState2(0);
  const callRefresh = () => _setRefresh(Date.now());
  useEffect2(() => {
    const portal = buildPortalElem();
    document.body.appendChild(portal);
    callRefresh();
  }, []);
  useEffect2(() => {
    dataSource.on("nextStep", () => {
      callRefresh();
    });
    dataSource.on("prevStep", () => {
      callRefresh();
    });
    dataSource.on("start", () => {
      callRefresh();
    });
    dataSource.on("stop", () => {
      callRefresh();
    });
  }, [dataSource]);
  const renderPortal = document.getElementById("easy-tutorial-portal");
  const needReder = dataSource.isTutorialRunning() && !!renderPortal;
  if (!needReder) return null;
  const ct = dataSource.currentTutorial();
  if (!ct) {
    console.error("[EasyTutorial] currentTutorial is undefined");
    return null;
  }
  const placement = ct.currentPlacement();
  if (!placement) {
    console.error("[EasyTutorial] currentPlacement is undefined");
    return null;
  }
  const currentContent = ct.currentContent();
  if (!currentContent) {
    console.error("[EasyTutorial] currentContent is undefined");
    return null;
  }
  const cr = dataSource.currentRender();
  if (!cr) {
    console.error("[EasyTutorial] currentRender is undefined");
    return null;
  }
  const targetElemQuery = dataSource.currentTargetQuery();
  if (!targetElemQuery) {
    console.error("[EasyTutorial] cannot find targetElemQuery");
    return null;
  }
  const targetElem = findElemByEasyTutorialQuery(targetElemQuery);
  if (!targetElem) {
    console.error(
      `[EasyTutorial] targetElem is undefined, select by query ${targetElemQuery}`
    );
    return null;
  }
  return /* @__PURE__ */ jsx12(Fragment2, { children: createPortal(
    cr(
      {
        targetElem,
        stepType: ct.stepType(),
        next: ct.next.bind(ct),
        prev: ct.prev.bind(ct),
        stop: ct.stop.bind(ct),
        totalStep: ct.totalStepLegth(),
        currentStep: ct.currentStepIdx(),
        placement,
        currentContent
      },
      ...extendRenderArgs
    ),
    renderPortal
  ) });
};
export {
  EasyTutorial,
  EasyTutorialNoticeRenderer,
  EasyTutorialRenderer,
  findElemByEasyTutorialQuery
};
//# sourceMappingURL=index.mjs.map