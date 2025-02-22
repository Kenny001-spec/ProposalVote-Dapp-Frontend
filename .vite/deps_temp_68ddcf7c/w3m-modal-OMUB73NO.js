import {
  AccountController,
  ApiController,
  ChainController,
  ConnectionController,
  ConstantsUtil,
  CoreHelperUtil,
  EventsController,
  LitElement,
  ModalController,
  OptionsController,
  RouterController,
  SnackController,
  ThemeController,
  UiHelperUtil,
  css,
  customElement,
  html,
  initializeTheming,
  state
} from "./chunk-UFCBRU52.js";
import "./chunk-256EKJAK.js";

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-modal/styles.js
var styles_default = css`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`;

// node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-modal/index.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SCROLL_LOCK = "scroll-lock";
var W3mModal = class W3mModal2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.abortController = void 0;
    this.open = ModalController.state.open;
    this.caipAddress = ChainController.state.activeCaipAddress;
    this.caipNetwork = ChainController.state.activeCaipNetwork;
    this.isSiweEnabled = OptionsController.state.isSiweEnabled;
    this.shake = ModalController.state.shake;
    this.initializeTheming();
    ApiController.prefetch();
    this.unsubscribe.push(...[
      ModalController.subscribeKey("open", (val) => val ? this.onOpen() : this.onClose()),
      ModalController.subscribeKey("shake", (val) => this.shake = val),
      AccountController.subscribeKey("siweStatus", (val) => this.onSiweStatusChange(val), "eip155"),
      ChainController.subscribeKey("activeCaipNetwork", (val) => this.onNewNetwork(val)),
      ChainController.subscribeKey("activeCaipAddress", (val) => this.onNewAddress(val)),
      OptionsController.subscribeKey("isSiweEnabled", (val) => this.isSiweEnabled = val)
    ]);
    EventsController.sendEvent({ type: "track", event: "MODAL_LOADED" });
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
    this.onRemoveKeyboardListener();
  }
  render() {
    return this.open ? html`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            <wui-card
              shake="${this.shake}"
              role="alertdialog"
              aria-modal="true"
              tabindex="0"
              data-testid="w3m-modal-card"
            >
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
              <w3m-alertbar></w3m-alertbar>
            </wui-card>
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        ` : null;
  }
  async onOverlayClick(event) {
    if (event.target === event.currentTarget) {
      await this.handleClose();
    }
  }
  async handleClose() {
    const isSiweSignScreen = RouterController.state.view === "ConnectingSiwe";
    const isApproveSignScreen = RouterController.state.view === "ApproveTransaction";
    const isUnsupportedChain = RouterController.state.view === "UnsupportedChain";
    if (this.isSiweEnabled) {
      const { SIWEController } = await import("./exports-JUL67YGQ.js");
      const isUnauthenticated = SIWEController.state.status !== "success";
      if (isUnauthenticated && (isSiweSignScreen || isApproveSignScreen)) {
        ModalController.shake();
      } else {
        ModalController.close();
      }
    } else if (isUnsupportedChain) {
      ModalController.shake();
    } else {
      ModalController.close();
    }
  }
  initializeTheming() {
    const { themeVariables, themeMode } = ThemeController.state;
    const defaultThemeMode = UiHelperUtil.getColorTheme(themeMode);
    initializeTheming(themeVariables, defaultThemeMode);
  }
  onClose() {
    this.open = false;
    this.classList.remove("open");
    this.onScrollUnlock();
    SnackController.hide();
    this.onRemoveKeyboardListener();
  }
  onOpen() {
    this.open = true;
    this.classList.add("open");
    this.onScrollLock();
    this.onAddKeyboardListener();
  }
  onScrollLock() {
    const styleTag = document.createElement("style");
    styleTag.dataset["w3m"] = SCROLL_LOCK;
    styleTag.textContent = `
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `;
    document.head.appendChild(styleTag);
  }
  onScrollUnlock() {
    const styleTag = document.head.querySelector(`style[data-w3m="${SCROLL_LOCK}"]`);
    if (styleTag) {
      styleTag.remove();
    }
  }
  onAddKeyboardListener() {
    var _a;
    this.abortController = new AbortController();
    const card = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("wui-card");
    card == null ? void 0 : card.focus();
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        this.handleClose();
      } else if (event.key === "Tab") {
        const { tagName } = event.target;
        if (tagName && !tagName.includes("W3M-") && !tagName.includes("WUI-")) {
          card == null ? void 0 : card.focus();
        }
      }
    }, this.abortController);
  }
  onRemoveKeyboardListener() {
    var _a;
    (_a = this.abortController) == null ? void 0 : _a.abort();
    this.abortController = void 0;
  }
  onSiweStatusChange(nextStatus) {
    if (nextStatus === "success") {
      ModalController.close();
    }
  }
  async onNewAddress(caipAddress) {
    var _a;
    const prevCaipAddress = this.caipAddress;
    const prevConnected = prevCaipAddress ? CoreHelperUtil.getPlainAddress(prevCaipAddress) : void 0;
    const nextConnected = caipAddress ? CoreHelperUtil.getPlainAddress(caipAddress) : void 0;
    const isSameAddress = prevConnected === nextConnected;
    this.caipAddress = caipAddress;
    await ConnectionController.initializeSWIXIfAvailable();
    if (nextConnected && !isSameAddress && this.isSiweEnabled) {
      try {
        const { SIWEController } = await import("./exports-JUL67YGQ.js");
        const signed = AccountController.state.siweStatus === "success";
        if (!prevConnected && nextConnected) {
          this.onSiweNavigation();
        } else if (signed && prevConnected && nextConnected && prevConnected !== nextConnected) {
          if ((_a = SIWEController.state._client) == null ? void 0 : _a.options.signOutOnAccountChange) {
            await SIWEController.signOut();
            this.onSiweNavigation();
          }
        }
      } catch (err) {
        this.caipAddress = prevCaipAddress;
        throw err;
      }
    }
    if (!nextConnected) {
      ModalController.close();
    }
  }
  async onNewNetwork(nextCaipNetwork) {
    var _a, _b, _c, _d;
    if (!this.caipAddress) {
      this.caipNetwork = nextCaipNetwork;
      RouterController.goBack();
      return;
    }
    const prevCaipNetworkId = (_b = (_a = this.caipNetwork) == null ? void 0 : _a.caipNetworkId) == null ? void 0 : _b.toString();
    const nextNetworkId = (_c = nextCaipNetwork == null ? void 0 : nextCaipNetwork.caipNetworkId) == null ? void 0 : _c.toString();
    if (prevCaipNetworkId && nextNetworkId && prevCaipNetworkId !== nextNetworkId) {
      if (this.isSiweEnabled) {
        const { SIWEController } = await import("./exports-JUL67YGQ.js");
        if ((_d = SIWEController.state._client) == null ? void 0 : _d.options.signOutOnNetworkChange) {
          await SIWEController.signOut();
          this.onSiweNavigation();
        } else {
          RouterController.goBack();
        }
      } else {
        RouterController.goBack();
      }
    }
    this.caipNetwork = nextCaipNetwork;
  }
  onSiweNavigation() {
    const isEIP155Namespace = ChainController.state.activeChain === ConstantsUtil.CHAIN.EVM;
    const authenticated = AccountController.state.siweStatus === "success";
    if (!authenticated && isEIP155Namespace) {
      if (this.open) {
        RouterController.replace("ConnectingSiwe");
      } else {
        ModalController.open({
          view: "ConnectingSiwe"
        });
      }
    } else {
      RouterController.goBack();
    }
  }
};
W3mModal.styles = styles_default;
__decorate([
  state()
], W3mModal.prototype, "open", void 0);
__decorate([
  state()
], W3mModal.prototype, "caipAddress", void 0);
__decorate([
  state()
], W3mModal.prototype, "caipNetwork", void 0);
__decorate([
  state()
], W3mModal.prototype, "isSiweEnabled", void 0);
__decorate([
  state()
], W3mModal.prototype, "shake", void 0);
W3mModal = __decorate([
  customElement("w3m-modal")
], W3mModal);
export {
  W3mModal
};
//# sourceMappingURL=w3m-modal-OMUB73NO.js.map
