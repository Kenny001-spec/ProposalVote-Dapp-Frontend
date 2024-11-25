import {
  Jf,
  Qf,
  Vi,
  Wf,
  Yi
} from "./chunk-ZH7V6PZP.js";
import {
  AccountController,
  ChainController,
  ConnectionController,
  CoreHelperUtil,
  EventsController,
  LitElement,
  ModalController,
  OptionsController,
  RouterController,
  SnackController,
  StorageUtil,
  W3mFrameRpcConstants,
  css,
  customElement,
  html,
  proxy,
  ref,
  state,
  subscribe,
  subscribeKey
} from "./chunk-UFCBRU52.js";
import "./chunk-256EKJAK.js";

// node_modules/@reown/appkit-siwe/dist/esm/core/controller/SIWEController.js
var state2 = proxy({
  status: "uninitialized"
});
var SIWEController = {
  state: state2,
  subscribeKey(key, callback) {
    return subscribeKey(state2, key, callback);
  },
  subscribe(callback) {
    return subscribe(state2, () => callback(state2));
  },
  _getClient() {
    if (!state2._client) {
      throw new Error("SIWEController client not set");
    }
    return state2._client;
  },
  async getNonce(address) {
    const client = this._getClient();
    const nonce = await client.getNonce(address);
    this.setNonce(nonce);
    return nonce;
  },
  async getSession() {
    try {
      const client = this._getClient();
      const session = await client.getSession();
      if (session) {
        this.setSession(session);
        this.setStatus("success");
      }
      return session || void 0;
    } catch {
      return void 0;
    }
  },
  createMessage(args) {
    const client = this._getClient();
    const message = client.createMessage(args);
    this.setMessage(message);
    return message;
  },
  async verifyMessage(args) {
    const client = this._getClient();
    const isValid = await client.verifyMessage(args);
    return isValid;
  },
  async signIn() {
    const client = this._getClient();
    const session = await client.signIn();
    return session;
  },
  async signOut() {
    var _a;
    const client = this._getClient();
    await client.signOut();
    this.setStatus("ready");
    this.setSession(void 0);
    (_a = client.onSignOut) == null ? void 0 : _a.call(client);
  },
  onSignIn(args) {
    var _a;
    const client = this._getClient();
    (_a = client.onSignIn) == null ? void 0 : _a.call(client, args);
  },
  onSignOut() {
    var _a;
    const client = this._getClient();
    (_a = client.onSignOut) == null ? void 0 : _a.call(client);
  },
  async setSIWEClient(client) {
    state2._client = ref(client);
    state2.session = await this.getSession();
    state2.status = state2.session ? "success" : "ready";
    ChainController.setAccountProp("siweStatus", state2.status, "eip155");
    OptionsController.setIsSiweEnabled(client.options.enabled);
  },
  setNonce(nonce) {
    state2.nonce = nonce;
  },
  setStatus(status) {
    state2.status = status;
    ChainController.setAccountProp("siweStatus", state2.status, "eip155");
  },
  setMessage(message) {
    state2.message = message;
  },
  setSession(session) {
    state2.session = session;
    state2.status = session ? "success" : "ready";
    ChainController.setAccountProp("siweStatus", state2.status, "eip155");
  }
};

// node_modules/@reown/appkit-siwe/dist/esm/core/utils/ConstantsUtil.js
var ConstantsUtil = {
  FIVE_MINUTES_IN_MS: 3e5
};

// node_modules/@reown/appkit-siwe/dist/esm/src/client.js
var AppKitSIWEClient = class {
  constructor(siweConfig) {
    const { enabled = true, nonceRefetchIntervalMs = ConstantsUtil.FIVE_MINUTES_IN_MS, sessionRefetchIntervalMs = ConstantsUtil.FIVE_MINUTES_IN_MS, signOutOnAccountChange = true, signOutOnDisconnect = true, signOutOnNetworkChange = true, ...siweConfigMethods } = siweConfig;
    this.options = {
      enabled,
      nonceRefetchIntervalMs,
      sessionRefetchIntervalMs,
      signOutOnDisconnect,
      signOutOnAccountChange,
      signOutOnNetworkChange
    };
    this.methods = siweConfigMethods;
  }
  async getNonce(address) {
    const nonce = await this.methods.getNonce(address);
    if (!nonce) {
      throw new Error("siweControllerClient:getNonce - nonce is undefined");
    }
    return nonce;
  }
  async getMessageParams() {
    var _a, _b;
    return await ((_b = (_a = this.methods).getMessageParams) == null ? void 0 : _b.call(_a)) || {};
  }
  createMessage(args) {
    const message = this.methods.createMessage(args);
    if (!message) {
      throw new Error("siweControllerClient:createMessage - message is undefined");
    }
    return message;
  }
  async verifyMessage(args) {
    const isValid = await this.methods.verifyMessage(args);
    return isValid;
  }
  async getSession() {
    const session = await this.methods.getSession();
    if (!session) {
      throw new Error("siweControllerClient:getSession - session is undefined");
    }
    return session;
  }
  async signIn() {
    var _a, _b;
    if (!SIWEController.state._client) {
      throw new Error("SIWE client needs to be initialized before calling signIn");
    }
    const caipAddress = ChainController.state.activeCaipAddress;
    const address = caipAddress ? CoreHelperUtil.getPlainAddress(caipAddress) : "";
    const nonce = await this.methods.getNonce(address);
    if (!address) {
      throw new Error("An address is required to create a SIWE message.");
    }
    const caipNetwork = ChainController.state.activeCaipNetwork;
    if (!(caipNetwork == null ? void 0 : caipNetwork.id)) {
      throw new Error("A chainId is required to create a SIWE message.");
    }
    const chainId = caipNetwork.id;
    if (!chainId) {
      throw new Error("A chainId is required to create a SIWE message.");
    }
    const signOutOnNetworkChange = (_a = SIWEController.state._client) == null ? void 0 : _a.options.signOutOnNetworkChange;
    if (signOutOnNetworkChange) {
      SIWEController.state._client.options.signOutOnNetworkChange = false;
      await this.signOut();
    }
    if (signOutOnNetworkChange) {
      SIWEController.state._client.options.signOutOnNetworkChange = true;
    }
    const messageParams = await ((_b = this.getMessageParams) == null ? void 0 : _b.call(this));
    const message = this.methods.createMessage({
      address: caipAddress,
      chainId: Number(chainId),
      nonce,
      version: "1",
      iat: (messageParams == null ? void 0 : messageParams.iat) || (/* @__PURE__ */ new Date()).toISOString(),
      ...messageParams
    });
    const type = StorageUtil.getConnectedConnector();
    if (type === "ID_AUTH") {
      RouterController.pushTransactionStack({
        view: null,
        goBack: false,
        replace: true,
        onSuccess() {
          ModalController.close();
        }
      });
    }
    const signature = await ConnectionController.signMessage(message);
    const isValid = await this.methods.verifyMessage({ message, signature });
    if (!isValid) {
      throw new Error("Error verifying SIWE signature");
    }
    const session = await this.methods.getSession();
    if (!session) {
      throw new Error("Error verifying SIWE signature");
    }
    if (this.methods.onSignIn) {
      this.methods.onSignIn(session);
    }
    return session;
  }
  async signOut() {
    var _a, _b;
    (_b = (_a = this.methods).onSignOut) == null ? void 0 : _b.call(_a);
    return this.methods.signOut();
  }
};

// node_modules/@reown/appkit-siwe/dist/esm/core/helpers/index.js
var ETH_ADDRESS_PATTERN = /0x[a-fA-F0-9]{40}/u;
var ETH_CHAIN_ID_IN_SIWE_PATTERN = /Chain ID: (?<temp1>\d+)/u;
function getAddressFromMessage(message) {
  var _a;
  return ((_a = message.match(ETH_ADDRESS_PATTERN)) == null ? void 0 : _a[0]) || "";
}
function getChainIdFromMessage(message) {
  var _a;
  return `eip155:${((_a = message.match(ETH_CHAIN_ID_IN_SIWE_PATTERN)) == null ? void 0 : _a[1]) || 1}`;
}
async function verifySignature({ address, message, signature, chainId, projectId }) {
  let isValid = Qf(address, message, signature);
  if (!isValid) {
    isValid = await Jf(address, message, signature, chainId, projectId);
  }
  return isValid;
}

// node_modules/@reown/appkit-siwe/dist/esm/scaffold/partials/w3m-connecting-siwe/styles.js
var styles_default = css`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;

// node_modules/@reown/appkit-siwe/dist/esm/scaffold/partials/w3m-connecting-siwe/index.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingSiwe = class W3mConnectingSiwe2 extends LitElement {
  constructor() {
    var _a, _b;
    super(...arguments);
    this.dappImageUrl = (_a = OptionsController.state.metadata) == null ? void 0 : _a.icons;
    this.walletImageUrl = (_b = AccountController.state.connectedWalletInfo) == null ? void 0 : _b.icon;
  }
  firstUpdated() {
    var _a;
    const visuals = (_a = this.shadowRoot) == null ? void 0 : _a.querySelectorAll("wui-visual-thumbnail");
    if (visuals == null ? void 0 : visuals[0]) {
      this.createAnimation(visuals[0], "translate(18px)");
    }
    if (visuals == null ? void 0 : visuals[1]) {
      this.createAnimation(visuals[1], "translate(-18px)");
    }
  }
  render() {
    var _a;
    return html`
      <wui-visual-thumbnail
        ?borderRadiusFull=${true}
        .imageSrc=${(_a = this.dappImageUrl) == null ? void 0 : _a[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `;
  }
  createAnimation(element, translation) {
    element.animate([{ transform: "translateX(0px)" }, { transform: translation }], {
      duration: 1600,
      easing: "cubic-bezier(0.56, 0, 0.48, 1)",
      direction: "alternate",
      iterations: Infinity
    });
  }
};
W3mConnectingSiwe.styles = styles_default;
W3mConnectingSiwe = __decorate([
  customElement("w3m-connecting-siwe")
], W3mConnectingSiwe);

// node_modules/@reown/appkit-siwe/dist/esm/scaffold/views/w3m-connecting-siwe-view/index.js
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingSiweView = class W3mConnectingSiweView2 extends LitElement {
  constructor() {
    var _a;
    super(...arguments);
    this.dappName = (_a = OptionsController.state.metadata) == null ? void 0 : _a.name;
    this.isSigning = false;
    this.isCancelling = false;
  }
  render() {
    return html`
      <wui-flex justifyContent="center" .padding=${["2xl", "0", "xxl", "0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0", "4xl", "l", "4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName ?? "Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0", "3xl", "l", "3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l", "xl", "xl", "xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning ? "Signing..." : "Sign"}
        </wui-button>
      </wui-flex>
    `;
  }
  async onSign() {
    var _a, _b, _c;
    this.isSigning = true;
    EventsController.sendEvent({
      event: "CLICK_SIGN_SIWE_MESSAGE",
      type: "track",
      properties: {
        network: ((_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId) || "",
        isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
      }
    });
    try {
      SIWEController.setStatus("loading");
      const session = await SIWEController.signIn();
      SIWEController.setStatus("success");
      EventsController.sendEvent({
        event: "SIWE_AUTH_SUCCESS",
        type: "track",
        properties: {
          network: ((_b = ChainController.state.activeCaipNetwork) == null ? void 0 : _b.caipNetworkId) || "",
          isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
        }
      });
      return session;
    } catch (error) {
      const preferredAccountType = AccountController.state.preferredAccountType;
      const isSmartAccount = preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT;
      if (isSmartAccount) {
        SnackController.showError("This application might not support Smart Accounts");
      } else {
        SnackController.showError("Signature declined");
      }
      SIWEController.setStatus("error");
      return EventsController.sendEvent({
        event: "SIWE_AUTH_ERROR",
        type: "track",
        properties: {
          network: ((_c = ChainController.state.activeCaipNetwork) == null ? void 0 : _c.caipNetworkId) || "",
          isSmartAccount
        }
      });
    } finally {
      this.isSigning = false;
    }
  }
  async onCancel() {
    var _a;
    this.isCancelling = true;
    const caipAddress = ChainController.state.activeCaipAddress;
    if (caipAddress) {
      await ConnectionController.disconnect();
      ModalController.close();
    } else {
      RouterController.push("Connect");
    }
    this.isCancelling = false;
    EventsController.sendEvent({
      event: "CLICK_CANCEL_SIWE",
      type: "track",
      properties: {
        network: ((_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId) || "",
        isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
      }
    });
  }
};
__decorate2([
  state()
], W3mConnectingSiweView.prototype, "isSigning", void 0);
__decorate2([
  state()
], W3mConnectingSiweView.prototype, "isCancelling", void 0);
W3mConnectingSiweView = __decorate2([
  customElement("w3m-connecting-siwe-view")
], W3mConnectingSiweView);

// node_modules/@reown/appkit-siwe/dist/esm/exports/index.js
function createSIWEConfig(siweConfig) {
  return new AppKitSIWEClient(siweConfig);
}
export {
  SIWEController,
  W3mConnectingSiwe,
  W3mConnectingSiweView,
  createSIWEConfig,
  Wf as formatMessage,
  getAddressFromMessage,
  getChainIdFromMessage,
  Vi as getDidAddress,
  Yi as getDidChainId,
  verifySignature
};
//# sourceMappingURL=exports-JUL67YGQ.js.map
